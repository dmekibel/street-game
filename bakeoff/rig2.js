// Auto-rig for the T-pose hero (TRELLIS from hero-tpose-front.png, 2026-11-24).
// The arms are modelled straight out, clear of the coat, so they get clean weights.
// We weight in the T-pose, then bake the arms down to a relaxed A-pose and bind there,
// so every move (walk swing, swig, dance) works from arms-down.
// Landmarks (fractions of height): legs 0-0.24, coat 0.25-0.6, arms y 0.62-0.73 from |x| 0.19 to 0.58,
// head 0.74-1.0. The model faces -z (pack at +z).
import * as THREE from 'three';

const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const HANG = 1.28;          // how far the arms drop from the T-pose (radians)
const SH = { x: .19, y: .675 }, EL = { x: .385 };

export function rigHero(srcRoot) {
  let src = null; srcRoot.updateMatrixWorld(true);
  srcRoot.traverse(o => { if (o.isMesh && !src) src = o; });
  const geo = src.geometry.clone(); geo.applyMatrix4(src.matrixWorld);
  geo.computeBoundingBox(); const bb = geo.boundingBox;
  const Hh = bb.max.y - bb.min.y, cx = (bb.max.x + bb.min.x) / 2, cz = (bb.max.z + bb.min.z) / 2;
  geo.translate(-cx, -bb.min.y, -cz); geo.scale(1 / Hh, 1 / Hh, 1 / Hh);

  const names = ['root', 'hips', 'spine', 'chest', 'head', 'thighR', 'shinR', 'thighL', 'shinL', 'armR', 'foreR', 'armL', 'foreL'];
  const idx = Object.fromEntries(names.map((n, i) => [n, i]));

  // weights in the T-pose
  const P = geo.attributes.position, n = P.count;
  const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
  const armOf = new Int8Array(n);                 // +1 right arm, -1 left arm, 0 none (for the bake)
  const armAmt = new Float32Array(n), foreAmt = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const x = P.getX(i), y = P.getY(i), z = P.getZ(i), ax = Math.abs(x), side = x >= 0 ? 'R' : 'L';
    const w = {}; const add = (b, v) => { if (v > 1e-4) w[b] = (w[b] || 0) + v; };
    const pack = z > .1 && y > .3 && ax < .2;
    const armW = pack ? 0 : sstep(.165, .215, ax) * sstep(.56, .6, y) * (1 - sstep(.77, .8, y));
    const legW = (1 - sstep(.225, .27, y)) * (1 - armW);
    const headW = (1 - armW) * (pack ? 0 : sstep(.725, .765, y));
    const bodyW = Math.max(0, 1 - armW - legW - headW);
    if (armW) { const f = sstep(EL.x - .03, EL.x + .03, ax); add('fore' + side, armW * f); add('arm' + side, armW * (1 - f)); armOf[i] = x >= 0 ? 1 : -1; armAmt[i] = armW; foreAmt[i] = f; }
    if (legW) { const lean = sstep(-.025, .025, x); for (const [k, sv] of [['R', lean], ['L', 1 - lean]]) { const f = 1 - sstep(.1, .15, y); add('shin' + k, legW * sv * f); add('thigh' + k, legW * sv * (1 - f)); } }
    if (headW) add('head', headW);
    if (bodyW) { if (pack) add('chest', bodyW); else { const c = sstep(.44, .58, y), s2 = sstep(.28, .4, y); add('chest', bodyW * c); add('spine', bodyW * (s2 - s2 * c)); add('hips', bodyW * (1 - s2)); } }
    const top = Object.entries(w).sort((a, b) => b[1] - a[1]).slice(0, 4); const tot = top.reduce((a, [, v]) => a + v, 0) || 1;
    top.forEach(([b, v], j) => { si[i * 4 + j] = idx[b]; sw[i * 4 + j] = v / tot; });
    if (!top.length) { si[i * 4] = idx.hips; sw[i * 4] = 1; }
  }

  // bake arms down: rotate each arm vertex about its shoulder by the arm weight
  for (let i = 0; i < n; i++) {
    if (!armOf[i]) continue;
    const s = armOf[i], a = -s * HANG * armAmt[i];
    const x = P.getX(i), y = P.getY(i);
    const dx = x - s * SH.x, dy = y - SH.y, c = Math.cos(a), sn = Math.sin(a);
    P.setXY(i, s * SH.x + dx * c - dy * sn, SH.y + dx * sn + dy * c);
  }
  P.needsUpdate = true; geo.computeVertexNormals();
  geo.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4));
  geo.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));

  // bones in the baked (arms-down) pose
  const B = {}; const W = {};
  const mk = (name, parent, x, y, z = 0) => { const b = new THREE.Bone(); b.name = name; B[name] = b; W[name] = new THREE.Vector3(x, y, z); if (parent) { parent.add(b); b.position.copy(W[name]).sub(W[parent.name]); } else b.position.set(x, y, z); return b; };
  const root = mk('root', null, 0, 0);
  const hips = mk('hips', root, 0, .24);
  const spine = mk('spine', hips, 0, .4);
  const chest = mk('chest', spine, 0, .56);
  mk('head', chest, 0, .74, -.01);
  for (const s of [1, -1]) {
    const k = s > 0 ? 'R' : 'L';
    const th = mk('thigh' + k, hips, .075 * s, .23); mk('shin' + k, th, .075 * s, .12);
    const a = -s * HANG, ex = (EL.x - SH.x) * Math.cos(a), ey = (EL.x - SH.x) * Math.sin(a) * s;
    const sh = mk('arm' + k, chest, SH.x * s, SH.y); mk('fore' + k, sh, SH.x * s + ex * s, SH.y + ey);
  }
  const bones = names.map(nm => B[nm]);

  const mat = src.material; if (mat.map) { mat.map.magFilter = THREE.NearestFilter; mat.map.minFilter = THREE.NearestFilter; }
  mat.roughness = 1; mat.metalness = 0;
  const sm = new THREE.SkinnedMesh(geo, mat); sm.add(root); sm.updateMatrixWorld(true);
  sm.bind(new THREE.Skeleton(bones), sm.matrixWorld); sm.frustumCulled = false;
  const group = new THREE.Group(); group.add(sm);

  // ---- procedural moves (arms now hang free, so they can move a lot) ----
  function pose(s) {
    const t = s.t, d = s.drunk || 0, ph = s.walkT * 9, wk = s.walk || 0;
    bones.forEach(b => b.rotation.set(0, 0, 0)); B.root.position.y = 0;
    B.chest.rotation.set(Math.sin(t * 1.6) * .02, 0, Math.sin(t * 1.1) * .07 * d);
    B.spine.rotation.z = Math.sin(t * 1.3 + 1) * .06 * d;
    B.head.rotation.set(Math.sin(t * 1.2) * .03 + .08 * d, Math.sin(t * .7) * (.08 + .15 * d), Math.sin(t * 1.9) * .1 * d);
    B.armR.rotation.z = Math.sin(t * 2.3) * .18 * d; B.armL.rotation.z = -Math.sin(t * 2.1 + 1) * .18 * d;
    B.foreR.rotation.x = .12; B.foreL.rotation.x = .12;
    if (wk > 0) {
      const a = Math.sin(ph) * .55 * wk, k = Math.max(0, -Math.cos(ph)) * .7 * wk, k2 = Math.max(0, Math.cos(ph)) * .7 * wk;
      B.thighR.rotation.x = a; B.thighL.rotation.x = -a; B.shinR.rotation.x = -k; B.shinL.rotation.x = -k2;
      B.armR.rotation.x = -a * .9; B.armL.rotation.x = a * .9; B.foreR.rotation.x = .35 * wk; B.foreL.rotation.x = .35 * wk;
      B.hips.rotation.y = Math.sin(ph) * .08 * wk; B.chest.rotation.y = -Math.sin(ph) * .1 * wk;
      B.root.position.y = Math.abs(Math.cos(ph)) * .015 * wk; B.spine.rotation.x -= .07 * wk;
    }
    const p = s.actT || 0, up = Math.sin(Math.min(1, p) * Math.PI);
    if (s.act === 'swig') { B.armR.rotation.x = 2.2 * up; B.armR.rotation.z = .35 * up; B.foreR.rotation.x = 1.5 * up; B.head.rotation.x = .45 * up; B.chest.rotation.x = .12 * up; }
    if (s.act === 'pickup') { B.spine.rotation.x = -.55 * up; B.chest.rotation.x = -.35 * up; B.armR.rotation.x = 1.0 * up; B.thighR.rotation.x = .35 * up; B.thighL.rotation.x = .35 * up; B.shinR.rotation.x = -.6 * up; B.shinL.rotation.x = -.6 * up; B.root.position.y = -.06 * up; }
    if (s.act === 'beg') { B.armR.rotation.x = 1.1; B.foreR.rotation.x = .6; B.head.rotation.x = -.1; }
    if (s.act === 'sit') { B.thighR.rotation.x = 1.45; B.thighL.rotation.x = 1.45; B.shinR.rotation.x = -1.45; B.shinL.rotation.x = -1.45; B.root.position.y = -.1; B.spine.rotation.x = .08; B.armR.rotation.x = .55; B.armL.rotation.x = .55; B.foreR.rotation.x = .7; B.foreL.rotation.x = .7; }
    if (s.act === 'dance') { const b = t * 7; B.armR.rotation.set(2.6 + Math.sin(b) * .4, 0, -.25); B.armL.rotation.set(2.6 + Math.sin(b + Math.PI) * .4, 0, .25); B.hips.rotation.z = Math.sin(b) * .18; B.chest.rotation.z = -Math.sin(b) * .2; B.thighR.rotation.x = Math.max(0, Math.sin(b)) * .6; B.shinR.rotation.x = -Math.max(0, Math.sin(b)) * .9; B.thighL.rotation.x = Math.max(0, -Math.sin(b)) * .6; B.shinL.rotation.x = -Math.max(0, -Math.sin(b)) * .9; B.head.rotation.z = Math.sin(b * .5) * .2; B.root.position.y = Math.abs(Math.sin(b)) * .03; }
  }
  return { group, bones: B, pose };
}
