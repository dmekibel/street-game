// Auto-rig for the TRELLIS hero: a skeleton and skin weights built from body proportions,
// plus procedural moves (idle, walk, drink, pick up, sit, dance, drunk stagger). No hand animation.
// Body landmarks (fractions of height, measured from the mesh 2026-11-24): legs 0-0.22,
// coat 0.22-0.62, hands about 0.30-0.42 at |x| about 0.2-0.28, head 0.70-1.0. The model faces -z.
import * as THREE from 'three';

const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export function rigHero(srcRoot) {
  let src = null; srcRoot.updateMatrixWorld(true);
  srcRoot.traverse(o => { if (o.isMesh && !src) src = o; });
  const geo = src.geometry.clone(); geo.applyMatrix4(src.matrixWorld);
  geo.computeBoundingBox(); const bb = geo.boundingBox;
  const Hh = bb.max.y - bb.min.y, cx = (bb.max.x + bb.min.x) / 2, cz = (bb.max.z + bb.min.z) / 2;
  // normalise: feet at 0, height 1, centred
  geo.translate(-cx, -bb.min.y, -cz); geo.scale(1 / Hh, 1 / Hh, 1 / Hh);

  // bones
  const B = {}; const mk = (name, parent, x, y, z = 0) => { const b = new THREE.Bone(); b.name = name; B[name] = b; b.userData.world = new THREE.Vector3(x, y, z); if (parent) { parent.add(b); b.position.set(x - parent.userData.world.x, y - parent.userData.world.y, z - parent.userData.world.z); } else b.position.set(x, y, z); return b; };
  const root = mk('root', null, 0, 0);
  const hips = mk('hips', root, 0, .22);
  const spine = mk('spine', hips, 0, .38);
  const chest = mk('chest', spine, 0, .54);
  const head = mk('head', chest, 0, .69, -.02);
  for (const s of [1, -1]) {
    const k = s > 0 ? 'R' : 'L';
    const th = mk('thigh' + k, hips, .075 * s, .21);
    mk('shin' + k, th, .075 * s, .11);
    const sh = mk('arm' + k, chest, .19 * s, .61);
    mk('fore' + k, sh, .23 * s, .48);
  }
  const bones = Object.values(B); const idx = Object.fromEntries(bones.map((b, i) => [b.name, i]));

  // skin weights from position (up to 4 bones per vertex)
  const P = geo.attributes.position, n = P.count;
  const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
  for (let i = 0; i < n; i++) {
    const x = P.getX(i), y = P.getY(i), z = P.getZ(i), ax = Math.abs(x), side = x >= 0 ? 'R' : 'L';
    const w = {};
    const add = (b, v) => { if (v > 1e-4) w[b] = (w[b] || 0) + v; };
    const pack = z > .1 && y > .26;                       // backpack and bedroll ride on the chest
    // arms: outside the coat, between hand and shoulder
    const armW = pack ? 0 : sstep(.17, .205, ax) * sstep(.27, .31, y) * (1 - sstep(.63, .67, y));
    // legs: below the coat hem
    const legW = (1 - sstep(.2, .245, y)) * (1 - armW);
    const headW = (1 - armW) * (pack ? 0 : sstep(.665, .715, y));
    const bodyW = Math.max(0, 1 - armW - legW - headW);
    if (armW) { const f = 1 - sstep(.45, .51, y); add('fore' + side, armW * f); add('arm' + side, armW * (1 - f)); }
    if (legW) {
      const lean = sstep(-.025, .025, x);                 // blend across the middle
      for (const [k, sv] of [['R', lean], ['L', 1 - lean]]) {
        const f = 1 - sstep(.09, .14, y);                 // shin below the knee
        add('shin' + k, legW * sv * f); add('thigh' + k, legW * sv * (1 - f));
      }
    }
    if (headW) add('head', headW);
    if (bodyW) {
      if (pack) add('chest', bodyW);
      else { const c = sstep(.42, .56, y), s2 = sstep(.26, .38, y); add('chest', bodyW * c); add('spine', bodyW * (s2 - s2 * c)); add('hips', bodyW * (1 - s2)); }
    }
    const top = Object.entries(w).sort((a, b) => b[1] - a[1]).slice(0, 4); const tot = top.reduce((a, [, v]) => a + v, 0) || 1;
    top.forEach(([b, v], j) => { si[i * 4 + j] = idx[b]; sw[i * 4 + j] = v / tot; });
    if (!top.length) { si[i * 4] = idx.hips; sw[i * 4] = 1; }
  }
  geo.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4));
  geo.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));

  const mat = src.material; if (mat.map) { mat.map.magFilter = THREE.NearestFilter; mat.map.minFilter = THREE.NearestFilter; }
  mat.roughness = 1; mat.metalness = 0;
  const sm = new THREE.SkinnedMesh(geo, mat);
  sm.add(root); sm.updateMatrixWorld(true);                 // bones need world matrices before the bind
  sm.bind(new THREE.Skeleton(bones), sm.matrixWorld); sm.frustumCulled = false;
  const group = new THREE.Group(); group.add(sm);

  // ---- procedural moves ----
  const R = (b, x = 0, y = 0, z = 0) => B[b].rotation.set(x, y, z);
  function pose(s) {
    // s: {t, walk (0..1 speed), walkT, drunk (0..1), act: 'idle'|'swig'|'pickup'|'sit'|'dance', actT (0..1 progress)}
    const t = s.t, d = s.drunk || 0, ph = s.walkT * 9, wk = s.walk || 0;
    bones.forEach(b => b.rotation.set(0, 0, 0)); B.root.position.y = 0;
    // idle breathing and drunk sway
    R('chest', Math.sin(t * 1.6) * .02, 0, Math.sin(t * 1.1) * .07 * d);
    R('spine', 0, 0, Math.sin(t * 1.3 + 1) * .06 * d);
    R('head', Math.sin(t * 1.2) * .03 + .08 * d, Math.sin(t * .7) * (.08 + .15 * d), Math.sin(t * 1.9) * .1 * d);
    R('armR', 0, 0, -.06 - Math.sin(t * 2.3) * .12 * d); R('armL', 0, 0, .06 + Math.sin(t * 2.1 + 1) * .12 * d);
    // walk cycle
    if (wk > 0) {
      const a = Math.sin(ph) * .55 * wk, k = Math.max(0, -Math.cos(ph)) * .7 * wk, k2 = Math.max(0, Math.cos(ph)) * .7 * wk;
      B.thighR.rotation.x = a; B.thighL.rotation.x = -a;
      B.shinR.rotation.x = -k; B.shinL.rotation.x = -k2;
      B.armR.rotation.x = -a * .45; B.armL.rotation.x = a * .45;
      B.foreR.rotation.x = .25 * wk; B.foreL.rotation.x = .25 * wk;
      B.hips.rotation.y = Math.sin(ph) * .08 * wk; B.chest.rotation.y = -Math.sin(ph) * .1 * wk;
      B.root.position.y = Math.abs(Math.cos(ph)) * .015 * wk;
      B.spine.rotation.x -= .07 * wk;
    }
    const p = s.actT || 0, up = Math.sin(Math.min(1, p) * Math.PI);  // 0 -> 1 -> 0 over the action
    if (s.act === 'swig') { B.armR.rotation.x = .9 * up; B.foreR.rotation.x = .9 * up; B.head.rotation.x = .4 * up; B.chest.rotation.x = .12 * up; }
    if (s.act === 'pickup') { B.spine.rotation.x = -.55 * up; B.chest.rotation.x = -.35 * up; B.armR.rotation.x = .9 * up; B.thighR.rotation.x = .35 * up; B.thighL.rotation.x = .35 * up; B.shinR.rotation.x = -.6 * up; B.shinL.rotation.x = -.6 * up; B.root.position.y = -.06 * up; }
    if (s.act === 'sit') { B.thighR.rotation.x = 1.45; B.thighL.rotation.x = 1.45; B.shinR.rotation.x = -1.45; B.shinL.rotation.x = -1.45; B.root.position.y = -.1; B.spine.rotation.x = .08; B.armR.rotation.x = .5; B.armL.rotation.x = .5; B.foreR.rotation.x = .6; B.foreL.rotation.x = .6; }
    if (s.act === 'dance') { const b = t * 7; B.armR.rotation.z = -.3 - Math.max(0, Math.sin(b)) * .25; B.armL.rotation.z = .3 + Math.max(0, -Math.sin(b)) * .25; B.armR.rotation.x = .3; B.armL.rotation.x = .3; B.hips.rotation.z = Math.sin(b) * .18; B.chest.rotation.z = -Math.sin(b) * .2; B.thighR.rotation.x = Math.max(0, Math.sin(b)) * .6; B.shinR.rotation.x = -Math.max(0, Math.sin(b)) * .9; B.thighL.rotation.x = Math.max(0, -Math.sin(b)) * .6; B.shinL.rotation.x = -Math.max(0, -Math.sin(b)) * .9; B.head.rotation.z = Math.sin(b * .5) * .2; B.root.position.y = Math.abs(Math.sin(b)) * .03; }
  }
  return { group, bones: B, pose };
}
