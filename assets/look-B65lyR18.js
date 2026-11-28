import{ac as P,a4 as b,k as T,ae as Q,V as k,ad as H,i as g,b as U,m as G,aw as E,bz as R,bx as I,g as y,bi as j,x as se,bA as ie,J as v,bn as B,ao as S}from"./city-BP5h5VHo.js";const W=typeof location<"u"&&!/[?&]art3=0\b/.test(location.search),F={uWindT:{value:0},uWind:{value:.55}},D={time:0,atmos:null,cam:null,tier:2};function le(l,a,e,t=2){D.time=l,D.atmos=a,D.cam=e,D.tier=t,F.uWindT.value=l;const i=a?a.wind:.55;F.uWind.value+=(i-F.uWind.value)*.02}function Se(l,a,e){return`
  {
    vec3 ip = vec3(instanceMatrix[3][0], 0.0, instanceMatrix[3][2]);
    float ph = ip.x * 0.31 + ip.z * 0.17;
    float gust = 0.65 + 0.35 * sin(uWindT * 0.35 + ip.x * 0.05 - ip.z * 0.03);
    float hh = max(0.0, transformed.y - ${l.toFixed(3)});
    float a = hh * hh * ${a.toFixed(4)} * uWind * gust;
    transformed.x += a * (sin(uWindT * 1.5 + ph) * 0.7 + sin(uWindT * 2.9 + ph * 1.7) * 0.3);
    transformed.z += a * 0.6 * cos(uWindT * 1.2 + ph * 1.3);
    ${e>0?`transformed += objectNormal * ${e.toFixed(4)} * uWind * sin(uWindT * 7.0 + dot(transformed, vec3(3.1, 2.3, 2.7))) * smoothstep(0.0, 1.5, hh);`:""}
  }`}const De=`uniform float uWindT, uWind;
`,J={ghost:0,ghostPx:0,drift:0,warp:0,warpHz:0,chroma:0,glow:0,glowWarm:0,breathe:0,breatheHz:0,smear:0,beauty:0,streak:0,sparkle:0},O={beer:{ghost:.22,ghostPx:2,drift:.5,warp:1.6,warpHz:.5,chroma:1,glow:.3,glowWarm:.6,breathe:.3,breatheHz:.18,smear:.7,beauty:1,streak:.8,sparkle:.7},vodka:{ghost:.3,ghostPx:3,drift:1,warp:2.6,warpHz:.9,chroma:1.5,glow:.25,glowWarm:.3,breathe:.4,breatheHz:.28,smear:1,beauty:.9,streak:1,sparkle:1},wine:{ghost:.18,ghostPx:1.6,drift:.3,warp:1.3,warpHz:.3,chroma:.7,glow:.5,glowWarm:1,breathe:.35,breatheHz:.13,smear:.8,beauty:1,streak:.6,sparkle:.5},mix:{ghost:.32,ghostPx:2.6,drift:.35,warp:2,warpHz:.35,chroma:1.3,glow:.45,glowWarm:.45,breathe:.45,breatheHz:.12,smear:1,beauty:1,streak:.9,sparkle:.9}};function We(l,a,e,t=1){const i=Math.max(0,Math.min(1,l));if(i<=.02)return{...J};const o=O[a&&a in O?a:"beer"],s=Math.pow(i,1.3),r={ghost:o.ghost*s,ghostPx:o.ghostPx*(.5+.5*s),drift:o.drift,warp:o.warp*s,warpHz:o.warpHz,chroma:o.chroma*s,glow:o.glow*s,glowWarm:o.glowWarm,breathe:o.breathe*s,breatheHz:o.breatheHz,smear:o.smear*s,beauty:o.beauty*Math.min(1,i*1.25),streak:o.streak*s,sparkle:o.sparkle*s},n=Math.max(0,Math.min(2,t));if(n!==1)for(const c of["ghost","warp","chroma","glow","breathe","smear","streak","sparkle"])r[c]*=n;return e<=0&&(r.ghost=0,r.chroma=0,r.smear=0,r.glow=0,r.streak=0),r}function re(l,a,e,t){if(t<=0||a<=0)return 0;const i=l/a*e*t;return Math.abs(i)<.6?0:Math.max(-4,Math.min(4,i))}const _={secs:2.6,inEnd:.12,downbeat:.8,snap:.18,slow:.1,push:.12,kick:.18,waveSecs:.5},Z={ts:1,fov:1,blur:0,wave:0,waveA:0,grey:0,dark:0,flash:0,shake:0,pull:0,rush:1,since:NaN,big:0},N=l=>Math.max(0,Math.min(1,l)),x=l=>{const a=N(l);return a*a*(3-2*a)};function Ne(l,a,e=!1){if(e||l<0||l>=_.secs)return{...Z};const t=a?1:.5,i=_,o=i.downbeat,s=l-o,r=1-(1-i.slow)*t,n=x(l/i.inEnd),c=s<0?0:x(s/i.snap),d=1+(r-1)*n*(1-c),u=x(l/.45)*(s<0?1:0),f=s<0?0:(1-Math.exp(-s*40))*Math.exp(-s*3.2)*Math.cos(s*5.5),m=1-i.push*t*u+i.kick*t*f,h=x(l/.25)*(s<0?.35:0),w=s>=0?Math.exp(-s*6):0,p=N((h+w)*t),M=s>=0?1.6*x(s/i.waveSecs):0,q=s>=0?t*(1-x(s/(i.secs-o))):0,A=s<0?t*.85*x(l/.35):0,z=s<0?t*.6*x(l/.5):t*.6*Math.exp(-s*25),ee=s>=0?t*Math.exp(-s*9)*N(s/.02+.3):0,te=s>=0?t*Math.exp(-s*4.5):0,ae=s>=0?N(f)*t:0,oe=s<0?0:s<1.4?7:1;return{ts:d,fov:m,blur:p,wave:M,waveA:q,grey:A,dark:z,flash:ee,shake:te,pull:ae,rush:oe,since:s,big:t}}const Le=(l,a)=>l+":"+a,C={speed:20,jitter:.12,max:2.4};function qe(l,a){const e=Math.sin(a*91.7+13.1)*43758.5453;return Math.min(C.max,l/C.speed+(e-Math.floor(e))*C.jitter)}function Be(l,a){const e=l-a;return e>=0?1+1.6*Math.exp(-e*7)*(e<.03?e/.03:1):0}function Fe(l){if(!Number.isFinite(l))return 1;if(l<0)return .35;const a=[[0,1.4],[.06,.2],[.14,1.1],[.2,.1],[.32,.9],[.38,.3],[.5,1.25],[.75,1]];let e=1;for(const[t,i]of a)l>=t&&(e=i);return e}const Y={32:["#f6ead0","#e1c8ad","#d7b1a1","#e4aa6b","#a8c580","#9faa6b","#7ab464","#72a176","#dd9278","#df6f69","#9c8a77","#9e6a6b","#708d32","#6d7649","#548883","#4d6958","#915661","#5a4f53","#773454","#563a3b","#434871","#424833","#3e323b","#412540","#294640","#293738","#272f34","#2b2631","#1c2529","#221826","#12101e","#0e0713"],64:["#f4f6f4","#f7deab","#ddc9b7","#e7c89c","#d8baa3","#d7a89e","#e5b065","#e3a174","#abd096","#a5ba68","#b2a79c","#8cae3a","#77ba76","#7faa41","#7ea23f","#659fb0","#d5958e","#e48f61","#df6a84","#e0754c","#9e8c91","#9b885a","#a06b80","#9c6952","#70914e","#708a21","#6f871f","#6f6d70","#6a7f22","#5b8a87","#4a867c","#4d6958","#b1586c","#6e5554","#5b515e","#594a5b","#584f40","#8b2e6b","#613b3b","#564042","#55302d","#455277","#454877","#403f67","#425230","#413e36","#3c3248","#3f312c","#422847","#3d1d29","#264856","#2d4428","#293738","#28303b","#252f26","#2c263b","#2a2625","#1c2529","#231c29","#201322","#13161c","#120e1f","#130916","#07050d"],128:["#fffcf7","#f1f9f9","#e8ecef","#f7e4bf","#f6deb9","#f8d98e","#e7d0bc","#d9c6b4","#dac3b3","#d5c4b6","#e3c7aa","#efca7d","#ddbaa2","#d2b9a4","#daaa9f","#d6a39b","#cfaba2","#e3b186","#e8ae3d","#e3a174","#abd6a5","#acc884","#acbb8f","#9fb940","#c4a899","#9fa69f","#97ac3e","#85af38","#72c5a5","#7caf45","#7faa41","#7ea242","#7aa132","#6ba0a4","#5b9ec5","#de9589","#cc9492","#f69059","#d18e6a","#f5697c","#c96b8d","#f0774a","#cf744e","#a29496","#99828b","#999055","#9d7d63","#af6a83","#906d7c","#ae694c","#896a59","#709264","#709030","#748f21","#6f8921","#6d8620","#6f871f","#6f7376","#706364","#6b8121","#697b23","#5a93b1","#5b805b","#4a867c","#57697e","#546a34","#406753","#cc5a81","#965656","#6e5c60","#6d5261","#6e5342","#5a5667","#5c4d56","#594a5b","#585635","#59494a","#9d2b76","#78325f","#61413e","#613437","#554355","#583c2d","#55302d","#455277","#454877","#433f65","#393e6c","#43572e","#424c34","#433d45","#3f3f24","#3f3348","#353149","#45312d","#37312a","#46285f","#3d282f","#3d1d29","#274d59","#253f50","#2d4428","#2f3738","#223737","#2d3140","#2a3032","#1e2e3f","#252f26","#2c2640","#2b2533","#2a2625","#20262d","#152739","#1c251d","#271c2f","#1d1b2e","#221b20","#1f1428","#201119","#13161c","#140e24","#130e22","#0e0d22","#0f0d17","#180917","#0e0816","#090711","#020106"]},ne={width:360,colours:64,quant:1,dither:.12,outline:.35,edge:.3,crease:.15,snap:!0,levels:12,drunkFree:.5};function ce(l){const a=new URLSearchParams(l);if(a.get("pixel")!=="1")return null;const e={...ne},t=(i,o,s)=>{const r=Number(a.get(i));return a.has(i)&&Number.isFinite(r)?Math.max(o,Math.min(s,r)):null};return e.width=t("pxw",120,1200)??e.width,e.colours=t("pxc",0,256)??e.colours,e.quant=t("pxq",0,1)??e.quant,e.dither=t("pxd",0,1)??e.dither,e.outline=t("pxo",0,1)??e.outline,e.edge=t("pxe",0,1)??e.edge,e.crease=t("pxk",0,1)??e.crease,e.levels=t("pxl",2,64)??e.levels,e.drunkFree=t("pxf",0,1)??e.drunkFree,a.get("pxs")==="0"&&(e.snap=!1),e}function K(l,a,e,t,i=1){const o=Math.max(1,e||1),s=Math.max(1,Math.round(Math.min(l,a)*o/Math.max(16,t))),r=Math.ceil(l*o/s)+2*i,n=Math.ceil(a*o/s)+2*i,c=s/o,d=-Math.round((r*s-l*o)/2)/o,u=-Math.round((n*s-a*o)/2)/o;return{kd:s,lowW:r,lowH:n,css:c,left:d,top:u,fovK:n*s/(a*o)}}function he(l,a,e){return 2*Math.max(.05,l)*Math.tan(a*Math.PI/360)/Math.max(1,e)}const X=(l,a)=>l[0]*a[0]+l[1]*a[1]+l[2]*a[2];function ue(l,a,e,t){const i=X(l,a),o=X(l,e),s=Math.round(i/t)*t-i,r=Math.round(o/t)*t-o;return{shift:[a[0]*s+e[0]*r,a[1]*s+e[1]*r,a[2]*s+e[2]*r],ox:s/t,oy:-r/t}}function de(l,a,e=0,t=12){if(a[1]>-.05)return t;const i=(e-l[1])/a[1];return i>.5&&i<200?i:t}const fe=l=>[parseInt(l.slice(1,3),16)/255,parseInt(l.slice(3,5),16)/255,parseInt(l.slice(5,7),16)/255];function $(l){const a=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4,e=a(l[0]),t=a(l[1]),i=a(l[2]),o=Math.cbrt(.4122214708*e+.5363325363*t+.0514459929*i),s=Math.cbrt(.2119034982*e+.6806995451*t+.1073969566*i),r=Math.cbrt(.0883024619*e+.2817188376*t+.6299787005*i);return[.2104542553*o+.793617785*s-.0040720468*r,1.9779984951*o-2.428592205*s+.4505937099*r,.0259040371*o+.7827717662*s-.808675766*r]}function me(l){const a=Object.keys(Y).map(Number).sort((t,i)=>t-i),e=a.reduce((t,i)=>Math.abs(i-l)<Math.abs(t-l)?i:t,a[0]);return Y[String(e)]}const L=32;function ve(l){const a=l.map(fe),e=a.map($),t=L,i=new Uint8Array(t*t*t*4);for(let o=0;o<t;o++)for(let s=0;s<t;s++)for(let r=0;r<t;r++){const n=$([r/(t-1),s/(t-1),o/(t-1)]);let c=0,d=1e9;for(let f=0;f<e.length;f++){const m=(e[f][0]-n[0])*1.2,h=e[f][1]-n[1],w=e[f][2]-n[2],p=m*m+h*h+w*w;p<d&&(d=p,c=f)}const u=(s*t*t+o*t+r)*4;i[u]=Math.round(a[c][0]*255),i[u+1]=Math.round(a[c][1]*255),i[u+2]=Math.round(a[c][2]*255),i[u+3]=255}return i}const pe="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",xe=`
uniform sampler2D tCol, tDepth, tLut;
uniform vec2 res;
uniform float cnear, cfar, outline, edgeHi, crease, quant, dither, levels, lutOn;
varying vec2 vUv;
float lin(float d) { float z = d * 2.0 - 1.0; return 2.0 * cnear * cfar / (cfar + cnear - z * (cfar - cnear)); }
float bayer(vec2 p) { // 4x4 ordered dither, 0..1
  vec2 q = mod(floor(p), 4.0);
  float m = q.x < 1.0 ? (q.y < 1.0 ? 0.0 : q.y < 2.0 ? 12.0 : q.y < 3.0 ? 3.0 : 15.0)
          : q.x < 2.0 ? (q.y < 1.0 ? 8.0 : q.y < 2.0 ? 4.0 : q.y < 3.0 ? 11.0 : 7.0)
          : q.x < 3.0 ? (q.y < 1.0 ? 2.0 : q.y < 2.0 ? 14.0 : q.y < 3.0 ? 1.0 : 13.0)
          :             (q.y < 1.0 ? 10.0 : q.y < 2.0 ? 6.0 : q.y < 3.0 ? 9.0 : 5.0);
  return (m + 0.5) / 16.0;
}
vec3 lut(vec3 c) {
  vec3 q = floor(clamp(c, 0.0, 1.0) * 31.0 + 0.5);
  return texture2D(tLut, vec2((q.b * 32.0 + q.r + 0.5) / 1024.0, (q.g + 0.5) / 32.0)).rgb;
}
void main() {
  vec2 o = 1.0 / res;
  vec3 c = texture2D(tCol, vUv).rgb;
  float d0 = texture2D(tDepth, vUv).x;
  if (d0 < 0.99999 && (outline > 0.0 || edgeHi > 0.0 || crease > 0.0)) {
    float z = lin(d0);
    float zl = lin(texture2D(tDepth, vUv - vec2(o.x, 0.0)).x), zr = lin(texture2D(tDepth, vUv + vec2(o.x, 0.0)).x);
    float zd = lin(texture2D(tDepth, vUv - vec2(0.0, o.y)).x), zu = lin(texture2D(tDepth, vUv + vec2(0.0, o.y)).x);
    float nr = 1.0 - smoothstep(25.0, 50.0, z); // lines only where pixels are big enough to carry them
    // outline: this pixel is the near side of a depth step (t3ssel8r: the line sits on the object, 1 pixel wide)
    float stp = max(max(zl, zr), max(zd, zu)) - z;
    float ol = smoothstep(0.1, 0.2, stp / z) * nr;
    // convex / concave: in 1/z a flat face is linear on screen, so the second difference shows the fold
    float iz = 1.0 / z, k = ((1.0 / zl + 1.0 / zr + 1.0 / zd + 1.0 / zu) * 0.25 - iz) / iz;
    float fl = 1.0 - ol;
    float cvx = smoothstep(0.0015, 0.006, -k) * fl * nr, ccv = smoothstep(0.0015, 0.006, k) * fl * nr;
    c = mix(c, c * vec3(0.58, 0.52, 0.58) + vec3(0.015, 0.01, 0.025), ol * outline); // warm dark ink, never black
    c += (c * 0.35 + 0.04) * cvx * edgeHi; // the edge that turns toward the light catches it
    c *= 1.0 - 0.3 * ccv * crease;
  }
  if (quant > 0.0) {
    float bd = d0 < 0.99999 ? (bayer(gl_FragCoord.xy) - 0.5) * dither : 0.0; // no dither in the sky (A: clean gradients)
    vec3 q;
    if (lutOn > 0.5) q = lut(c + bd * 0.11);
    else q = floor(clamp(c, 0.0, 1.0) * (levels - 1.0) + 0.5 + bd) / (levels - 1.0);
    c = mix(c, q, quant);
  }
  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}`;class ge{constructor(a){this.opts=a,this.rt=new P(4,4,{minFilter:b,magFilter:b,depthBuffer:!1}),this.grid=K(390,844,1,360),this.scene=new T,this.cam=new Q(-1,1,1,-1,0,1),this.lutTex=null,this.lutFor=-1,this.saved={pos:new k,fov:60,aspect:1,on:!1},this.canvas=null,this.lastTf="",this.shift={x:0,y:0},this.mat=new H({vertexShader:pe,fragmentShader:xe,depthTest:!1,depthWrite:!1,uniforms:{tCol:{value:this.rt.texture},tDepth:{value:null},tLut:{value:null},res:{value:new g(4,4)},cnear:{value:.1},cfar:{value:160},outline:{value:0},edgeHi:{value:0},crease:{value:0},quant:{value:0},dither:{value:0},levels:{value:12},lutOn:{value:0}}});const e=new U(new G(2,2),this.mat);e.frustumCulled=!1,this.scene.add(e),typeof window<"u"&&(window.__pixel=this)}size(a,e,t){const i=typeof window<"u"?Math.min(3,window.devicePixelRatio||1):1;this.grid=K(e,t,i,this.opts.width);const o=this.grid;this.rt.setSize(o.lowW,o.lowH),this.mat.uniforms.res.value.set(o.lowW,o.lowH);const s=a.domElement;return this.canvas=s,s&&s.style&&(s.style.width=o.lowW*o.css+"px",s.style.height=o.lowH*o.css+"px",s.style.left=o.left+"px",s.style.top=o.top+"px",s.style.imageRendering="pixelated",this.lastTf=""),{lowW:o.lowW,lowH:o.lowH}}begin(a){const e=a,t=this.saved;if(t.on=!1,!e.isPerspectiveCamera)return;const i=this.grid;if(t.pos.copy(e.position),t.fov=e.fov,t.aspect=e.aspect,t.on=!0,e.fov=2*Math.atan(Math.tan(e.fov*Math.PI/360)*i.fovK)*180/Math.PI,e.aspect=i.lowW/i.lowH,e.updateProjectionMatrix(),this.shift.x=0,this.shift.y=0,this.opts.snap&&e.parent===null){e.updateMatrixWorld();const o=e.matrixWorld.elements,s=[o[0],o[1],o[2]],r=[o[4],o[5],o[6]],n=[-o[8],-o[9],-o[10]],c=[e.position.x,e.position.y,e.position.z],d=he(de(c,n),e.fov,i.lowH),u=ue(c,s,r,d);e.position.set(c[0]+u.shift[0],c[1]+u.shift[1],c[2]+u.shift[2]),this.shift.x=u.ox,this.shift.y=u.oy}e.updateMatrixWorld()}end(a,e,t,i=0){var c;const o=this.opts,s=this.mat.uniforms,r=e;o.colours>0&&this.lutFor!==o.colours&&((c=this.lutTex)==null||c.dispose(),this.lutTex=new E(ve(me(o.colours)),L*L,L,R),this.lutTex.magFilter=b,this.lutTex.minFilter=b,this.lutTex.needsUpdate=!0,this.lutFor=o.colours),s.tCol.value=this.rt.texture,s.tDepth.value=t,s.tLut.value=this.lutTex,s.lutOn.value=o.colours>0?1:0,s.levels.value=o.levels,s.quant.value=o.quant*(1-o.drunkFree*Math.max(0,Math.min(1,i))),s.dither.value=o.dither,s.outline.value=t?o.outline:0,s.edgeHi.value=t?o.edge:0,s.crease.value=t?o.crease:0,r.isPerspectiveCamera&&(s.cnear.value=r.near,s.cfar.value=r.far),a.setRenderTarget(null),a.render(this.scene,this.cam);const n=this.saved;if(n.on&&(r.position.copy(n.pos),r.fov=n.fov,r.aspect=n.aspect,r.updateProjectionMatrix(),r.updateMatrixWorld(),n.on=!1),this.canvas&&this.canvas.style){const d=this.grid.kd/this.grid.css,u=Math.round(this.shift.x*this.grid.kd)/d,f=Math.round(this.shift.y*this.grid.kd)/d,m=u||f?`translate(${u}px,${f}px)`:"";m!==this.lastTf&&(this.canvas.style.transform=m,this.lastTf=m)}}}const Ce=320,Pe=[200,240,280,320,360,420],we=[{name:"low",rows:240,shadow:0,shadowBox:0,lamps:3,glow:!1,ao:0,aoN:0},{name:"mid",rows:320,shadow:512,shadowBox:13,lamps:5,glow:!0,ao:.4,aoN:1},{name:"high",rows:420,shadow:1024,shadowBox:18,lamps:8,glow:!0,ao:.45,aoN:2}];function Te(l,a){const e=we[l].shadow;return e>0&&a<500?e/2:e}function be(l){if(l.length<3)return null;const a=(l[0]+l[1]+l[2])/3;return a>=50?2:a>=32?1:0}function He(l,a,e,t){if(t)return null;l.secs++,l.low=a<40?l.low+1:0;let i=null;if(l.first.length<3){l.first.push(a);const o=be(l.first);o!==null&&o<e&&(i=o)}return i===null&&l.secs>4&&l.low>=3&&e>0&&(i=e-1,l.low=0),i}function ye(l,a,e){const t=Math.max(0,Math.min(1,e)),i=.55*t,o=[l[0]+(a[0]-l[0])*i,l[1]+(a[1]-l[1])*i,l[2]+(a[2]-l[2])*i],s=W?[.19+.7*(1-t),.2+.69*(1-t),.38+.52*(1-t)]:[.19+.63*(1-t),.2+.69*(1-t),.38+.6*(1-t)],r=.3+.15*t;return[o[0]+(s[0]-o[0])*r,o[1]+(s[1]-o[1])*r,o[2]+(s[2]-o[2])*r]}const ke={falloff:.32,edge:.55,haze:.4,shadow:.5};function ze(){const l=new Uint8Array(2048);for(let e=0;e<2;e++)for(let t=0;t<256;t++)l.set([t,t,t,255],(e*256+t)*4);const a=new E(l,256,2,R);return a.magFilter=v,a.minFilter=v,a.needsUpdate=!0,a}const V=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Me=`
uniform sampler2D tScene;
uniform vec2 res;
uniform float scale;
uniform float sat, warm, contrast, glow, red, jitter, time, bright;
uniform sampler2D tDepth;
uniform float cnear, cfar, outline, moon, night, tilt, lutAmt, raw;
uniform vec2 focus; // nuance pass: his place on screen (0..1)
uniform float falloff, edgeHi, hazeAmt, shadowAmt;
uniform vec3 shadowCol;
uniform vec3 skyTop, skyHor, fogCol, moonDir, camPos;
uniform vec4 lmAz; // look pass: azimuth of the gold dome and the steeple, and how much each shows on the skyline
uniform mat4 camInv;
uniform sampler2D tBloom, tBloom2, tLut3; // beta: bloom (two blurred levels) and the T08 3D grade as a 33-slice strip
uniform float bloomK, lut3Amt, hazeNear, hazeFar, vigAmt;
uniform float dGhost, dGhostPx, dDrift, dWarp, dWarpHz, dChroma, dGlowWarm, dBreathe, dBreatheHz; // beer goggles (drunkfx.ts)
uniform vec2 dSmear; // low-res pixels the camera turned this frame (smear)
uniform float mBlur, mWave, mWaveA, mGrey; // the drink moment (swig.ts): zoom smear, colour wave, held breath
uniform float dBeauty, dStreak, dSparkle, mFlash, mDark; // drunk lane (drunkfx.ts, swig.ts): the beautiful drunk; the drop's flash and the held breath's dimming
uniform sampler2D tLut; // look pass: per-channel colour curves taken from David's pictures (row 0 day B02, row 1 night T08)
uniform vec3 sunDir; // art round 3 (atmos.ts): the sun, golden hour, clouds, wet streets, contact shadows, birds
uniform float golden, cloudAmt, wetAmt, aoAmt, aoPx, aoN, birdsAmt, art3;
// New city (newlight.ts, 2026-11-27): its own sky (B02 / B01 / T08), the painted skyline ring, candy tone mapping,
// a depth tilt-shift (FAR only) and three time-of-day grades. All 0 = the look before (the old map never sets them).
uniform float nc, tone, expo, tiltD, tiltFocus, tiltPx, glowAmt, panoOn, lutN, fxaaOn;
uniform vec3 skyMid, skyGlow, lutW;
uniform vec2 panoE;
uniform sampler2D tPano, tPanoM, tLutD, tLutK, tLutN, tLutX, tLutB;
uniform vec4 l2W; // look2 (look2.ts): day, golden, night, drunk grade weights; l2Amt > 0 moves the new-city grade to the end
uniform float l2Amt, l2Sat, l2Grain, l2B; // (l2B: the blue-hour grade's weight) // look2: grade amount; sober/drunk saturation after the grade; sober film grain
varying vec2 vUv;
vec3 tap(vec2 p) { return texture2D(tScene, p).rgb; }
// light-v1 (new city): FXAA, the cheap console version (5 luma taps + 2 or 4 along the edge), on the full-res frame
// (tScene is linear-filtered when the new city is on, so the taps between texels blend). Sky texels are unpainted here.
float fxL(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
vec3 fxaa(vec2 p, vec2 o) {
  vec3 cM = tap(p);
  float lM = fxL(cM), lNW = fxL(tap(p + vec2(-0.5, -0.5) * o)), lNE = fxL(tap(p + vec2(0.5, -0.5) * o)),
        lSW = fxL(tap(p + vec2(-0.5, 0.5) * o)), lSE = fxL(tap(p + vec2(0.5, 0.5) * o));
  float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE))), lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));
  if (lMax - lMin < max(0.04, lMax * 0.12)) return cM;
  vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), ((lNW + lSW) - (lNE + lSE)));
  float rd = 1.0 / (min(abs(dir.x), abs(dir.y)) + max((lNW + lNE + lSW + lSE) * 0.03125, 0.0078125));
  dir = clamp(dir * rd, vec2(-6.0), vec2(6.0)) * o;
  vec3 a = 0.5 * (tap(p + dir * (1.0 / 3.0 - 0.5)) + tap(p + dir * (2.0 / 3.0 - 0.5)));
  vec3 b = a * 0.5 + 0.25 * (tap(p - dir * 0.5) + tap(p + dir * 0.5));
  float lB = fxL(b);
  return (lB < lMin || lB > lMax) ? a : b;
}
vec2 snapPx(vec2 p) { return (floor(p * res) + 0.5) / res; } // whole low-res pixels: the pixel art never blurs
bool skyAt(vec2 p) { return texture2D(tDepth, p).x > 0.99999; }
float lin(vec2 p) { float d = texture2D(tDepth, p).x; float z = d * 2.0 - 1.0; return 2.0 * cnear * cfar / (cfar + cnear - z * (cfar - cnear)); }
float h1(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float adiff(float a, float b) { return mod(a - b + 3.14159265, 6.2831853) - 3.14159265; }
float vn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h1(i), h1(i + vec2(1.0, 0.0)), f.x), mix(h1(i + vec2(0.0, 1.0)), h1(i + vec2(1.0, 1.0)), f.x), f.y); }
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * vn(p); p = p * 2.07 + vec2(17.1, 9.3); a *= 0.5; } return s; }
// Art round 3: B02's soft stylised clouds. A flat cloud layer seen from below (squashed toward the horizon), puffy
// edges from the noise, lit on the sun's side and shaded below, a few soft bands like a painting. Day white, golden
// hour peach with lilac shadows, night dim violet lit by the moon (T08's dark wisps). Returns colour and coverage.
vec4 cloudsAt(vec3 dir) {
  if (dir.y < 0.0 || cloudAmt <= 0.0) return vec4(0.0);
  vec2 uv = dir.xz / (dir.y + 0.25) * 0.8 + vec2(time * 0.006, time * 0.002 + 3.1);
  float n = fbm(uv);
  float thr = mix(0.64, 0.34, cloudAmt);
  float d = smoothstep(thr, thr + 0.1, n);
  d *= smoothstep(0.06, 0.16, dir.y) * (1.0 - 0.8 * smoothstep(0.3, 0.8, dir.y)); // above the skyline (B02: a few puffs low in the sky) // clear near the skyline and overhead
  if (d <= 0.001) return vec4(0.0);
  vec2 sd = normalize(sunDir.xz + vec2(1e-4)) * 0.09;
  float lit = clamp((n - fbm(uv + sd)) * 5.0 + 0.68, 0.0, 1.0); // denser toward the sun = shaded side
  lit = mix(lit, floor(lit * 3.0 + 0.5) / 3.0, 0.5); // soft painted bands
  lit *= smoothstep(thr - 0.02, thr + 0.35, n) * 0.35 + 0.65; // thin edges lighter, thick bellies darker
  vec3 dayL = vec3(1.0, 0.99, 0.97), dayS = mix(skyTop, vec3(0.78, 0.83, 0.92), 0.65);
  vec3 golL = vec3(1.0, 0.62, 0.36), golS = vec3(0.92, 0.38, 0.45); // B01: coral clouds, lit orange at the edges
  vec3 nL = vec3(0.36, 0.32, 0.56), nS = vec3(0.14, 0.11, 0.27);
  vec3 L = mix(mix(dayL, golL, golden), nL, night), S = mix(mix(dayS, golS, golden), nS, night);
  vec3 col = mix(S, L, lit);
  col = mix(col, col * 0.72 + skyHor * 0.2, cloudAmt * cloudAmt * 0.6); // overcast: greyer, flatter
  return vec4(col, min(1.0, d * 1.25) * mix(0.95, 0.75, night));
}
// Art round 3: now and then a little flock crosses the sky (B02's gulls and pigeons): dark V shapes, wings beating.
float birdsAt(vec3 dir, float e, float az) {
  if (birdsAmt <= 0.0 || e < 0.06 || e > 0.7) return 0.0;
  float m = 0.0;
  for (int g = 0; g < 2; g++) {
    float fg = float(g);
    float cyc = time * 0.011 + fg * 0.53;
    float k = floor(cyc);
    float fa = fract(cyc);
    float base = (h1(vec2(k, fg)) * 6.2831853) - 3.14159265; // each pass comes over a new part of the sky
    float baz = base + (fa - 0.5) * 2.2;
    float be = 0.16 + 0.22 * h1(vec2(k, fg + 5.0)) + 0.02 * sin(time * 0.7 + fg);
    for (int b = 0; b < 4; b++) {
      float fb = float(b);
      vec2 o = vec2(-0.028 * fb, 0.012 * fb * (mod(fb, 2.0) * 2.0 - 1.0) + 0.004 * sin(time * 1.3 + fb));
      vec2 q = vec2(adiff(az, baz + o.x) * cos(e), e - (be + o.y)) / 0.012;
      float flap = 0.55 * sin(time * 11.0 + fb * 1.7 + fg * 3.0);
      q.x = abs(q.x);
      float y = q.x * (0.35 + flap) - 0.1;
      float wing = step(q.x, 1.0) * (1.0 - smoothstep(0.12, 0.3, abs(q.y - y)));
      m = max(m, wing);
    }
  }
  return m * birdsAmt;
}
// Look pass: the painted sky, in display colours. A gradient by height above the horizon (night: black-purple
// with the magenta glow only near the horizon), stars, a big pale moon, and a painted skyline far behind the city.
vec3 paintSky(vec3 dir) {
  float e = asin(clamp(dir.y, -1.0, 1.0));
  float az = atan(dir.x, dir.z);
  float eq = floor(e * 40.0) / 40.0; // banded, like a painted sky
  float band = mix(0.55, 0.2, night);
  vec3 c = mix(skyHor, skyTop, smoothstep(-0.01, band, eq));
  c = mix(c, skyTop * 0.6, night * smoothstep(0.5, 1.2, e)); // darker still overhead at night
  // Art round 3: the sunset. Golden hour lays a peach-pink band above an amber horizon, brightest toward the sun.
  vec2 hz = normalize(dir.xz + vec2(1e-5)), sz = normalize(sunDir.xz + vec2(1e-5));
  float toSun = 0.5 + 0.5 * dot(hz, sz);
  if (golden > 0.0) {
    // B01: magenta-violet overhead, a coral band, a hot orange horizon
    c = mix(c, vec3(0.66, 0.34, 0.66), golden * 0.55 * smoothstep(0.25, 0.8, eq));
    c = mix(c, vec3(0.98, 0.45, 0.5), golden * 0.6 * smoothstep(0.03, 0.12, eq) * (1.0 - smoothstep(0.16, 0.45, eq)));
    c = mix(c, vec3(1.0, 0.55, 0.22), golden * (0.55 + 0.4 * toSun * toSun) * (1.0 - smoothstep(0.0, 0.13, eq)));
  }
  float day = (1.0 - night) * art3;
  if (day > 0.01) { // the sun: a soft disc and a warm halo (by day a pale glow, at golden hour a big amber one)
    float sd = acos(clamp(dot(dir, sunDir), -1.0, 1.0));
    c = mix(c, mix(vec3(1.0, 0.97, 0.86), vec3(1.0, 0.72, 0.42), golden), day * (0.35 + 0.35 * golden) * exp(-sd * mix(7.0, 3.5, golden)));
    c = mix(c, mix(vec3(1.0, 1.0, 0.94), vec3(1.0, 0.86, 0.6), golden), day * (1.0 - smoothstep(0.035, 0.045, sd)));
  }
  if (night > 0.01 && e > 0.05) { // stars, fixed to the sky
    vec2 sp = vec2(az * 60.0, e * 60.0);
    vec2 ce = floor(sp);
    float h = h1(ce);
    if (h > 0.9) {
      vec2 f = fract(sp) - 0.5;
      float tw = 0.55 + 0.45 * sin(time * (1.0 + h * 3.0) + h * 40.0);
      c = mix(c, vec3(1.0, 0.95, 1.0), step(dot(f, f), 0.018) * night * tw * smoothstep(0.05, 0.25, e));
    }
  }
  vec4 cl = cloudsAt(dir);
  c = mix(c, cl.rgb, cl.a);
  if (moon > 0.0) {
    float d = acos(clamp(dot(dir, moonDir), -1.0, 1.0));
    float R = 0.028; // 2026-11-28 (David, twice: "less giant so it's more realistic and more beautiful"): was 0.08
    c = mix(c, vec3(0.8, 0.72, 1.0), moon * 0.22 * (1.0 - smoothstep(R, R * 3.0, d))); // lavender halo
    if (d < R) {
      vec3 rg = normalize(cross(vec3(0.0, 1.0, 0.0), moonDir)), up = cross(moonDir, rg);
      vec2 q = vec2(dot(dir - moonDir, rg), dot(dir - moonDir, up)) / R;
      float cr = smoothstep(0.38, 0.0, length(q - vec2(-0.3, 0.25))) * 0.55 + smoothstep(0.26, 0.0, length(q - vec2(0.38, -0.18))) * 0.6
        + smoothstep(0.18, 0.0, length(q - vec2(0.12, 0.5))) * 0.5 + smoothstep(0.3, 0.0, length(q - vec2(-0.12, -0.45))) * 0.45;
      vec3 mc = mix(vec3(0.96, 0.94, 1.0), vec3(0.78, 0.73, 0.9), clamp(cr, 0.0, 1.0));
      mc *= 1.0 - 0.16 * smoothstep(0.55, 1.0, length(q));
      c = mix(c, mc, moon);
    }
  }
  // The painted skyline: two flat layers of blocks and towers, the gold dome and the white steeple where they really are.
  float hf = 0.014 + 0.04 * pow(h1(vec2(floor(az * 16.0), 3.0)), 2.0);
  float hn = 0.006 + 0.05 * pow(h1(vec2(floor(az * 10.0 + 0.37), 7.0)), 1.7);
  float tw = h1(vec2(floor(az * 10.0 + 0.37), 11.0));
  float bk = h1(vec2(floor(az * 10.0 + 0.37), 23.0));
  if (bk > 0.55 && art3 > 0.5) hn = floor(hn * 220.0 / (1.0 + step(0.8, bk))) * (1.0 + step(0.8, bk)) / 220.0 + step(0.8, bk) * step(0.5, fract(az * 20.0 + 0.185)) * 0.006; // stepped roofs
  if (tw > 0.84) hn += 0.045 + (abs(fract(az * 10.0 + 0.37) - 0.5) < 0.04 ? 0.03 : 0.0); // a tower with an antenna
  vec3 nearC = fogCol * mix(0.9, 0.62, night), farC = mix(fogCol, skyTop, 0.35) * mix(0.97, 0.8, night);
  // Art round 3: B02's skyline is not one grey wall: each block has its own hazed colour (brick, cream, teal, sand)
  vec3 bc = bk < 0.25 ? vec3(0.82, 0.5, 0.42) : bk < 0.5 ? vec3(0.93, 0.88, 0.78) : bk < 0.75 ? vec3(0.62, 0.78, 0.8) : vec3(0.9, 0.74, 0.52);
  nearC = mix(nearC, mix(bc, fogCol, 0.3), day * 0.85);
  farC = mix(farC, mix(vec3(0.78, 0.84, 0.92), farC, 0.4), day * art3); // B02: pale blue-grey towers behind
  if (art3 > 0.5) nearC = mix(nearC, vec3(0.42, 0.26, 0.34), golden * 0.65); // B01: the far city goes to a warm dusky silhouette
  farC = mix(farC, vec3(0.62, 0.36, 0.46), golden * 0.6);
  if (e < hf) c = farC;
  bool isNear = e < hn;
  float dd = abs(adiff(az, lmAz.x));
  if (lmAz.z > 0.0 && dd < 0.05) {
    float dh = 0.05 + sqrt(max(0.0, 1.0 - (dd / 0.05) * (dd / 0.05))) * 0.04;
    if (dd < 0.006) dh = 0.1;
    if (e < 0.05 && e < hn + 0.05) { c = nearC; isNear = false; }
    if (e < dh && e >= 0.05) { c = mix(c, mix(vec3(1.0, 0.78, 0.2), nearC, 0.35 + 0.25 * night), lmAz.z); isNear = false; }
  }
  float ds = abs(adiff(az, lmAz.y));
  if (lmAz.w > 0.0 && ds < 0.012) {
    float sh = 0.07 + (0.012 - ds) / 0.012 * 0.09;
    if (e < sh) { c = mix(c, mix(vec3(0.96, 0.95, 0.9), nearC, 0.3 + 0.4 * night), lmAz.w); isNear = false; }
  }
  if (isNear) {
    c = nearC;
    vec2 wp = vec2(az * 300.0, e * 300.0);
    float wh = h1(floor(wp));
    vec2 wf = fract(wp);
    bool win = wf.x < 0.6 && wf.y < 0.55 && e < hn - 0.004 && e > 0.003;
    if (win && day > 0.01) c = mix(c, c * vec3(0.78, 0.84, 0.95), day * 0.55); // windows by day: a faint darker grid
    float lit = max(night, golden * 0.8);
    if (lit > 0.01) { // lit windows on the far city (from golden hour on, as in B01)
      if (wh > 0.72 && win) c = mix(c, wh > 0.95 ? vec3(0.35, 0.85, 0.9) : vec3(1.0, 0.62, 0.28), lit * 0.8);
      // a neon strip on the odd roof (T08: pink and cyan signs up high)
      if (tw > 0.6 && tw < 0.68 && e > hn - 0.008 && e < hn - 0.004) c = mix(c, mod(floor(az * 10.0 + 0.37), 2.0) > 0.5 ? vec3(1.0, 0.35, 0.75) : vec3(0.3, 0.95, 1.0), night * 0.9);
    }
  }
  if (e < 0.0) c = nearC;
  float bd = birdsAt(dir, e, az);
  c = mix(c, mix(vec3(0.2, 0.2, 0.25), vec3(0.3, 0.18, 0.2), golden), bd * 0.85);
  return c;
}
// New city: B02's soft cartoon clouds, low over the skyline (the FAR camera only sees 0-5 degrees of sky): a few puffs,
// round tops, flat bottoms, lit on top, lilac-blue underneath; peach and pink at dusk, dim violet at night.
vec4 cloudsNew(float az, float e) {
  if (cloudAmt <= 0.0 || e < 0.0) return vec4(0.0);
  float cw = 0.34, a = az + time * 0.0015, ci = floor(a / cw);
  float best = 0.0, lit = 0.0;
  for (int k = -1; k <= 1; k++) {
    float id = ci + float(k);
    if (h1(vec2(id, 7.3)) > cloudAmt * 1.5) continue;
    float cx = (id + 0.2 + 0.6 * h1(vec2(id, 1.7))) * cw;
    float e0 = mix(0.03 + 0.12 * h1(vec2(id, 4.1)), 0.07 + 0.1 * h1(vec2(id, 4.1)), 1.0 - max(golden, night)); // light-v2: by day the puffs sit above the far towers
    float sz = 0.018 + 0.026 * h1(vec2(id, 9.9)) + 0.012 * (1.0 - night);
    vec2 q = vec2((a - cx) * cos(e), e - e0);
    float m = 0.0, top = -1.0;
    for (int j = 0; j < 4; j++) {
      float fj = float(j);
      vec2 o = vec2((fj - 1.5) * sz * 0.85, sz * (0.2 + 0.45 * h1(vec2(id, fj + 3.0))) * (1.0 - abs(fj - 1.5) * 0.3));
      float r = sz * (0.5 + 0.35 * h1(vec2(id, fj + 11.0)));
      float d = length(q - o) / r;
      m = max(m, 1.0 - smoothstep(0.9, 1.0, d));
      top = max(top, (q.y - o.y) / r);
    }
    m *= smoothstep(-0.0015, 0.0025, q.y);
    if (m > best) { best = m; lit = top; }
  }
  if (best <= 0.0) return vec4(0.0);
  vec3 L = mix(mix(vec3(1.0, 0.995, 0.98), vec3(1.0, 0.74, 0.56), golden), vec3(0.34, 0.3, 0.52), night);
  vec3 S = mix(mix(vec3(0.8, 0.86, 0.96), vec3(0.88, 0.46, 0.62), golden), vec3(0.15, 0.12, 0.27), night);
  return vec4(mix(S, L, smoothstep(-0.5, 0.45, lit)), best * mix(0.95, 0.7, night));
}
// New city: the sky for the hour (three stops and a horizon glow), the sun, stars, clouds, the moon, then the painted
// skyline ring (tPano colours, tPanoM lit windows and layers) and the landmark silhouettes where the real ones are not drawn.
vec3 paintSkyNew(vec3 dir) {
  float e = asin(clamp(dir.y, -1.0, 1.0));
  float az = atan(dir.x, dir.z);
  vec3 c = mix(skyHor, skyMid, smoothstep(0.0, mix(0.045, 0.18, max(golden, night)), e)); // light-v1: B02's blue reaches down to the skyline by day
  c = mix(c, skyTop, smoothstep(0.14, 0.95, e));
  vec2 hz = normalize(dir.xz + vec2(1e-5)), sz = normalize(sunDir.xz + vec2(1e-5));
  float toSun = 0.5 + 0.5 * dot(hz, sz);
  c = mix(c, skyGlow, glowAmt * exp(-max(e, 0.0) * 10.0) * mix(1.0, 0.45 + 0.55 * toSun, golden));
  float day = 1.0 - night;
  if (day > 0.01) {
    float sd = acos(clamp(dot(dir, sunDir), -1.0, 1.0));
    c = mix(c, mix(vec3(1.0, 0.97, 0.88), vec3(1.0, 0.7, 0.42), golden), day * (0.08 + 0.52 * golden) * exp(-sd * mix(8.0, 3.5, golden)));
    c = mix(c, mix(vec3(1.0, 1.0, 0.95), vec3(1.0, 0.85, 0.6), golden), day * smoothstep(0.2, 0.6, golden) * (1.0 - smoothstep(0.03, 0.04, sd))); // light-v1: B02 has no sun disc by day
  }
  if (night > 0.01 && e > 0.03) {
    vec2 sp = vec2(az * 70.0, e * 70.0);
    float h = h1(floor(sp));
    if (h > 0.88) {
      vec2 f = fract(sp) - 0.5;
      float tw = 0.6 + 0.4 * sin(time * (1.0 + h * 3.0) + h * 40.0);
      c = mix(c, vec3(1.0, 0.96, 1.0), step(dot(f, f), 0.02 + 0.03 * step(0.985, h)) * night * tw * smoothstep(0.03, 0.12, e));
    }
  }
  vec4 cl = cloudsNew(az, e);
  c = mix(c, cl.rgb, cl.a);
  if (moon > 0.0) {
    float d = acos(clamp(dot(dir, moonDir), -1.0, 1.0));
    float R = 0.026; // 2026-11-28 (David, twice: "less giant ... more realistic and more beautiful"): was 0.075; a soft glow, faint maria
    c = mix(c, vec3(0.78, 0.74, 0.98), moon * 0.22 * (1.0 - smoothstep(R, R * 4.0, d))); // a wider, softer glow round the small disc
    if (d < R) {
      vec3 rg = normalize(cross(vec3(0.0, 1.0, 0.0), moonDir)), up = cross(moonDir, rg);
      vec2 q = vec2(dot(dir - moonDir, rg), dot(dir - moonDir, up)) / R;
      float cr = smoothstep(0.42, 0.0, length(q - vec2(-0.28, 0.22))) * 0.28 + smoothstep(0.3, 0.0, length(q - vec2(0.3, -0.2))) * 0.22;
      vec3 mc = mix(vec3(0.98, 0.97, 0.94), vec3(0.86, 0.85, 0.84), clamp(cr, 0.0, 1.0)) * (1.0 - 0.08 * smoothstep(0.5, 1.0, length(q)));
      c = mix(c, mc, moon * (1.0 - smoothstep(0.9, 1.0, length(q))));
    }
  }
  float lit = max(night, golden * 0.8);
  vec3 nearC = mix(mix(mix(skyHor, fogCol, 0.5), vec3(0.36, 0.2, 0.3), golden * 0.75), vec3(0.12, 0.1, 0.2), night);
  if (panoOn > 0.5) {
    vec2 uv = vec2(az / 6.2831853 + 0.5, (e - panoE.x) / (panoE.y - panoE.x));
    if (uv.y < 1.0) {
      vec4 m = texture2D(tPanoM, vec2(uv.x, max(uv.y, 0.002)));
      if (m.b > 0.3 || uv.y <= 0.0) {
        bool nr = m.b > 0.75 || uv.y <= 0.0;
        vec3 b = texture2D(tPano, vec2(uv.x, max(uv.y, 0.002))).rgb;
        b = mix(b, mix(skyHor, fogCol, 0.5), nr ? 0.2 : 0.5); // day: the air between (B02's pale far city)
        b = mix(b, nr ? vec3(0.36, 0.2, 0.3) : vec3(0.64, 0.38, 0.52), golden * 0.75); // dusk silhouettes (B01)
        b = mix(b, nr ? vec3(0.11, 0.09, 0.19) : vec3(0.16, 0.14, 0.27), night); // night blocks (T08)
        if (m.r > 0.5 && m.g > 0.5) b = mix(b, vec3(1.0, 0.36, 0.72), night * 0.9);
        else { b = mix(b, vec3(1.0, 0.72, 0.42), m.r * lit * 0.9); b = mix(b, vec3(0.45, 0.86, 0.96), m.g * lit * 0.8); }
        c = b;
      }
    }
  }
  // the gold dome and the white steeple on the skyline when the real ones are not drawn (lmShow)
  float dd = abs(adiff(az, lmAz.x));
  if (lmAz.z > 0.0 && dd < 0.05) {
    float dh = 0.045 + sqrt(max(0.0, 1.0 - (dd / 0.05) * (dd / 0.05))) * 0.04;
    if (dd < 0.006) dh = 0.1;
    if (e < 0.045) c = mix(c, nearC, lmAz.z);
    else if (e < dh) c = mix(c, mix(vec3(1.0, 0.8, 0.25), nearC, 0.25 + 0.5 * night), lmAz.z);
  }
  float ds = abs(adiff(az, lmAz.y));
  if (lmAz.w > 0.0 && ds < 0.012) {
    float sh = 0.07 + (0.012 - ds) / 0.012 * 0.09;
    if (e < sh) c = mix(c, mix(vec3(0.97, 0.96, 0.92), nearC, 0.25 + 0.55 * night), lmAz.w);
  }
  if (e < panoE.x) c = nearC;
  float bd = birdsAt(dir, e, az);
  c = mix(c, mix(vec3(0.2, 0.2, 0.25), vec3(0.3, 0.18, 0.2), golden), bd * 0.85);
  return c;
}
// New city: a candy filmic curve (ACES fit on the luminance, hue kept, a third of the per-channel roll-off so the
// lights still go to white).
vec3 acesF(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
vec3 candyTone(vec3 c) {
  c *= expo;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  vec3 hp = c * (acesF(vec3(l)).x / max(l, 1e-4));
  return mix(hp, acesF(c), 0.35);
}
vec3 lut33(sampler2D t, vec3 c) {
  vec3 cc = clamp(c, 0.0, 1.0) * 32.0;
  float bz = floor(cc.b), bf = cc.b - bz;
  vec2 uvA = vec2((cc.r + 0.5 + bz * 33.0) / 1089.0, (cc.g + 0.5) / 33.0);
  vec2 uvB = vec2((cc.r + 0.5 + min(bz + 1.0, 32.0) * 33.0) / 1089.0, (cc.g + 0.5) / 33.0);
  return mix(texture2D(t, uvA).rgb, texture2D(t, uvB).rgb, bf);
}
void main() {
  // One low-res pixel = scale x scale screen pixels, counted from the top-left, so every pixel is the same size.
  vec2 cell = floor(gl_FragCoord.xy / scale);
  if (jitter > 0.0) cell += floor(jitter * vec2(sin(time * 53.0), cos(time * 41.0)) + 0.5);
  // Beer goggles: a slow wave that bends the frame at the edges and corners, calm where he stands (focus).
  vec2 fq0 = ((cell + 0.5) / res - focus) * vec2(res.x / res.y, 1.0);
  float er = length(fq0); // distance from him, in screen heights
  if (dWarp > 0.0) {
    float w = dWarp * smoothstep(0.14, 0.75, er);
    vec2 cu = (cell + 0.5) / res;
    cell += floor(w * vec2(sin(cu.y * 7.0 + time * dWarpHz * 6.2832), cos(cu.x * 6.0 + time * dWarpHz * 5.1)) + 0.5);
  }
  vec2 px = (cell + 0.5) / res; // nearest pixel: the chunky look
  vec2 o1 = 1.0 / res;
  bool isSky = texture2D(tDepth, px).x > 0.99999;
  vec3 c = fxaaOn > 0.5 && !isSky ? fxaa(px, o1) : tap(px);
  float skyE = 1.0, dist = 0.0;
  if (isSky) {
    vec4 wp = camInv * vec4(px * 2.0 - 1.0, 1.0, 1.0);
    vec3 dir = normalize(wp.xyz / wp.w - camPos);
    skyE = asin(clamp(dir.y, -1.0, 1.0));
    c = pow(nc > 0.5 ? paintSkyNew(dir) : paintSky(dir), vec3(2.2)); // sRGB in, so the sky shows exactly its colour
  }
  // Art round 3: soft contact shadows (a cheap screen-space AO on the low-res frame). In 1/depth a flat face is
  // linear on screen, so a crease (the ground meeting a wall, a kerb, a bench, his feet) shows as neighbours that
  // are nearer than the line between them. Pairs of opposite taps at two radii in four directions; a big depth
  // jump (a silhouette against the far ground) does not count, so there is no halo round people.
  if (aoAmt > 0.0 && !isSky) {
    float d0 = lin(px);
    if (d0 < 60.0) {
      float w0 = 1.0 / d0, occ = 0.0;
      float rp = clamp(aoPx / d0, 1.5, 24.0);
      for (int k = 0; k < 4; k++) {
        vec2 dv = k == 0 ? vec2(1.0, 0.0) : k == 1 ? vec2(0.0, 1.0) : k == 2 ? vec2(0.7071, 0.7071) : vec2(0.7071, -0.7071);
        for (int r = 1; r <= 2; r++) {
          if (float(r) > aoN) break;
          vec2 o = dv * rp * float(r) * 0.5 * o1;
          float wa = 1.0 / lin(px + o), wb = 1.0 / lin(px - o);
          float ja = abs(wa - w0) / w0, jb = abs(wb - w0) / w0;
          float cv = ((wa + wb) * 0.5 - w0) / w0;
          occ += smoothstep(0.004, 0.05, cv) * (1.0 - smoothstep(0.25, 0.5, max(ja, jb)));
        }
      }
      c *= 1.0 - aoAmt * min(1.0, occ / (2.0 * aoN)) * (1.0 - smoothstep(35.0, 60.0, d0));
    }
  }
  // Art round 3: wet streets when it rains. The ground goes darker and glossy, and every light above it draws a
  // long smeared reflection straight down the screen (lamps, windows, neon on the wet asphalt, T08 / L06).
  if (wetAmt > 0.0 && !isSky) {
    vec4 wq = camInv * vec4(px * 2.0 - 1.0, texture2D(tDepth, px).x * 2.0 - 1.0, 1.0);
    float gy = wq.y / wq.w;
    float ground = 1.0 - smoothstep(0.12, 0.3, gy);
    if (ground > 0.0) {
      vec3 refl = vec3(0.0);
      for (int k = 1; k <= 5; k++) {
        vec2 q = snapPx(px + vec2(0.0, float(k) * 3.0 + 2.0) * o1);
        vec3 s = tap(q);
        refl += max(s - 0.45, 0.0) * (1.0 - float(k) * 0.12);
      }
      float rip = 0.75 + 0.25 * sin(px.x * res.x * 0.9 + time * 3.0 + h1(floor(px * res * vec2(1.0, 0.25))) * 6.0);
      c = mix(c, c * 0.72 + skyHor * skyHor * 0.06, ground * wetAmt);
      c += refl * 0.55 * rip * ground * wetAmt;
    }
  }
  // Cartoon edge: where this pixel is clearly nearer than a neighbour (a silhouette), darken it.
  if (outline > 0.0 && !isSky) {
    float d0 = lin(px);
    if (d0 < 34.0) {
      float dm = max(max(lin(px + vec2(o1.x, 0.0)), lin(px - vec2(o1.x, 0.0))), max(lin(px + vec2(0.0, o1.y)), lin(px - vec2(0.0, o1.y))));
      float e = smoothstep(0.06, 0.14, (dm - d0) / d0) * (1.0 - smoothstep(22.0, 34.0, d0));
      c = mix(c, c * vec3(0.3, 0.22, 0.34), e * outline);
    }
  }
  // Nuance pass (#6, the t3ssel8r trick): a thin bright line on convex box edges. In 1/depth a flat face is
  // linear on screen, so a ridge (an outer edge, nearer than both faces next to it) shows as a negative
  // Laplacian. Silhouettes (big jumps) are left to the dark outline.
  if (edgeHi > 0.0 && !isSky) {
    float d0 = lin(px);
    dist = d0;
    if (d0 < 40.0) {
      float w0 = 1.0 / d0;
      float wl = 1.0 / lin(px - vec2(o1.x, 0.0)), wr = 1.0 / lin(px + vec2(o1.x, 0.0));
      float wd = 1.0 / lin(px - vec2(0.0, o1.y)), wu = 1.0 / lin(px + vec2(0.0, o1.y));
      float cv = (4.0 * w0 - (wl + wr + wu + wd)) / w0;
      float sil = max(max(abs(wl - w0), abs(wr - w0)), max(abs(wu - w0), abs(wd - w0))) / w0;
      float e = smoothstep(0.004, 0.018, cv) * (1.0 - smoothstep(0.06, 0.12, sil)) * (1.0 - smoothstep(26.0, 40.0, d0));
      c += (c * 0.55 + vec3(0.012, 0.01, 0.008)) * e * edgeHi;
    }
  } else if (!isSky) dist = lin(px);
  // Beer goggles, in the low-res frame with nearest taps only (nothing here smooths the pixel art).
  if (mBlur > 0.01 && !isSky) { // the drink moment: a short zoom smear toward him (nearest taps, three copies)
    vec2 tw = (focus - px) * mBlur * 0.07;
    vec3 acc = c; float n = 1.0;
    for (int i = 1; i <= 3; i++) { vec2 q = snapPx(px + tw * float(i)); if (!skyAt(q)) { acc += tap(q); n += 1.0; } }
    c = acc / n;
  }
  if (dSmear.x != 0.0 && !isSky) { // a short lag on fast camera turns: two trailing copies
    vec2 s1 = snapPx(px - dSmear * 0.5 / res), s2 = snapPx(px - dSmear / res);
    if (!skyAt(s1) && !skyAt(s2)) c = mix(c, (tap(s1) + tap(s2)) * 0.5, 0.45);
  }
  if (dChroma > 0.0 && !isSky) { // red and blue slide apart toward the frame edges
    float co = floor(dChroma * smoothstep(0.3, 0.8, er) + 0.5);
    if (co > 0.0) {
      vec2 dir = normalize(fq0 + vec2(1e-4)) * vec2(res.y / res.x, 1.0);
      vec2 pr = snapPx(px + dir * co / res), pb = snapPx(px - dir * co / res);
      if (!skyAt(pr)) c.r = tap(pr).r;
      if (!skyAt(pb)) c.b = tap(pb).b;
    }
  }
  if (dGhost > 0.0) { // double vision: a faint copy, slowly circling
    vec2 go = dGhostPx * vec2(cos(time * dDrift), sin(time * dDrift * 0.8));
    vec2 pg = snapPx(px + go / res);
    if (!skyAt(pg)) c = mix(c, tap(pg), dGhost);
  }
  // Tilt-shift, wide shots only: soften the top and bottom of the frame so the city reads as a tiny model.
  if (tilt > 0.0 && !isSky) {
    float tb = tilt * smoothstep(0.16, 0.42, abs(vUv.y - 0.5));
    if (tb > 0.0) {
      vec3 bl = tap(px + vec2(1.5, 0.0) * o1) + tap(px - vec2(1.5, 0.0) * o1) + tap(px + vec2(0.0, 1.5) * o1) + tap(px - vec2(0.0, 1.5) * o1);
      c = mix(c, bl * 0.25, tb);
    }
  }
  // New city: tilt-shift by depth (B02's toy look, FAR only): the near foreground and the far city go soft, the
  // band around him stays sharp. Two rings of taps; sky taps keep this pixel's colour.
  if (tiltD > 0.0 && !isSky) {
    float d0 = lin(px);
    float coc = max(1.0 - smoothstep(tiltFocus * 0.42, tiltFocus * 0.78, d0), smoothstep(tiltFocus * 1.7, tiltFocus * 4.5, d0)) * tiltD;
    if (coc > 0.03) {
      float r = coc * tiltPx;
      vec3 acc = c; float wn = 1.0;
      for (int i = 0; i < 8; i++) {
        float a = float(i) * 0.785398 + 0.39;
        vec2 o = vec2(cos(a), sin(a)) * o1;
        vec2 q1 = px + o * r, q2 = px + o * r * 0.5;
        acc += skyAt(q1) ? c : tap(q1); acc += skyAt(q2) ? c : tap(q2); wn += 2.0;
      }
      c = acc / wn;
    }
  }
  if (bloomK > 0.0) { // beta: real bloom from the HDR frame (lamps, windows, neon), cheap: two blurred low-res levels
    c += (texture2D(tBloom, vUv).rgb * 0.7 + texture2D(tBloom2, vUv).rgb * 0.9) * bloomK * mix(vec3(1.0), vec3(1.3, 0.98, 0.68), dGlowWarm); // drunk: amber
  } else if (glow > 0.0) {
    vec3 b = vec3(0.0);
    vec2 o = 1.0 / res;
    b += max(tap(px + vec2( 2.0, 0.0) * o) - 0.62, 0.0);
    b += max(tap(px + vec2(-2.0, 0.0) * o) - 0.62, 0.0);
    b += max(tap(px + vec2( 0.0, 2.0) * o) - 0.62, 0.0);
    b += max(tap(px + vec2( 0.0,-2.0) * o) - 0.62, 0.0);
    b += max(tap(px + vec2( 3.0, 3.0) * o) - 0.62, 0.0);
    b += max(tap(px + vec2(-3.0, 3.0) * o) - 0.62, 0.0);
    b += max(tap(px + vec2( 3.0,-3.0) * o) - 0.62, 0.0);
    b += max(tap(px + vec2(-3.0,-3.0) * o) - 0.62, 0.0);
    c += b * glow * (isSky ? 0.12 : 0.35) * mix(vec3(1.0), vec3(1.3, 0.98, 0.68), dGlowWarm);
  }
  if (tone > 0.0 && !isSky) c = mix(c * expo, candyTone(c), tone); // new city: candy filmic (the painted sky is already display colour)
  c = pow(max(c, 0.0), vec3(1.0 / 2.2)); // grade in display space
  if (raw > 0.5) { gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0); return; } // debug: the ungraded frame (colour matching)
  if (lutAmt > 0.0 && !isSky) { // colour curves from his pictures, day and night blended
    vec3 cc = clamp(c, 0.0, 1.0) * (255.0 / 256.0) + 0.5 / 256.0;
    vec3 dl = vec3(texture2D(tLut, vec2(cc.r, 0.25)).r, texture2D(tLut, vec2(cc.g, 0.25)).g, texture2D(tLut, vec2(cc.b, 0.25)).b);
    vec3 nl = vec3(texture2D(tLut, vec2(cc.r, 0.75)).r, texture2D(tLut, vec2(cc.g, 0.75)).g, texture2D(tLut, vec2(cc.b, 0.75)).b);
    c = mix(c, mix(dl, nl, night), lutAmt);
  }
  if (lut3Amt > 0.0 && !isSky) { // beta: the T08 night grade (round 4's LUT) at reduced strength, never darker than before
    vec3 cc = clamp(c, 0.0, 1.0) * 32.0;
    float bz = floor(cc.b), bf = cc.b - bz;
    vec2 uvA = vec2((cc.r + 0.5 + bz * 33.0) / 1089.0, (cc.g + 0.5) / 33.0);
    vec2 uvB = vec2((cc.r + 0.5 + min(bz + 1.0, 32.0) * 33.0) / 1089.0, (cc.g + 0.5) / 33.0);
    vec3 g = mix(texture2D(tLut3, uvA).rgb, texture2D(tLut3, uvB).rgb, bf);
    float l0 = dot(c, vec3(0.299, 0.587, 0.114)), l1 = dot(g, vec3(0.299, 0.587, 0.114));
    g *= max(1.0, (l0 * 0.97) / max(l1, 1e-3)); // keep the warmth, not the darkening
    c = mix(c, g, lut3Amt);
  }
  if (lutN > 0.0 && !isSky && l2Amt <= 0.0) { // new city: the time-of-day grades (day B02, dusk B01, night T08), blended by the hour
    vec3 g = vec3(0.0);
    if (lutW.x > 0.001) g += lut33(tLutD, c) * lutW.x;
    if (lutW.y > 0.001) g += lut33(tLutK, c) * lutW.y;
    if (lutW.z > 0.001) g += lut33(tLutN, c) * lutW.z;
    c = mix(c, g, lutN);
  }
  // Nuance pass (#5): coloured shadows. The darks lean to the time of day's shadow colour (purple-blue at
  // night, cool blue by day) instead of grey or black. Lights are left alone.
  if (shadowAmt > 0.0 && !isSky) {
    float sl = dot(c, vec3(0.299, 0.587, 0.114));
    float sw = (1.0 - smoothstep(0.06, 0.42, sl)) * smoothstep(0.0, 0.05, sl);
    c = mix(c, sl * shadowCol / max(0.01, dot(shadowCol, vec3(0.299, 0.587, 0.114))), sw * shadowAmt);
  }
  // Nuance pass (#8): distance haze that fades gradually cooler and lighter (to the haze colour, which the fog
  // and the painted skyline share), starting near him; the sky near the horizon gets the same mist.
  if (hazeAmt > 0.0) {
    float hz = isSky ? (1.0 - smoothstep(0.0, 0.16, skyE)) * mix(0.6, 0.3, art3) * (nc > 0.5 ? 0.35 : 1.0) : smoothstep(hazeNear, hazeFar, dist); // art round 3: the painted skyline keeps its colours
    vec3 hcol = mix(fogCol * mix(1.12, 1.0, night * 0.3), vec3(1.0, 0.72, 0.5), golden * 0.45); // golden hour: amber air
    c = mix(c, hcol, hz * hazeAmt);
  }
  c *= bright;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  c = mix(vec3(l), c, isSky ? min(sat, 1.0) : sat); // the sky never goes hotter than its painted colour
  if (mGrey > 0.0 || mWaveA > 0.0) { // the drink moment: the frame holds its breath, then the colour floods out from him
    float wd = length(((cell + 0.5) / res - focus) * vec2(res.x / res.y, 1.0));
    float inside = 1.0 - smoothstep(mWave - 0.1, mWave, wd);
    float ring = exp(-pow((wd - mWave) / 0.05, 2.0)) * step(0.01, mWave);
    float l2 = dot(c, vec3(0.299, 0.587, 0.114));
    c = mix(vec3(l2), c, 1.0 - mGrey * (1.0 - inside));
    c = mix(vec3(l2), c, 1.0 + 0.55 * mWaveA * inside);
    if (!isSky) c += vec3(1.0, 0.72, 0.42) * ring * mWaveA * 0.2;
  }
  // ---- drunk lane block (2026-11-28, drunkfx.ts + swig.ts; David: "drunk view should be more beautiful in every way") ----
  // After R10 (the magenta dusk, "the best most iconic") and S4/S5 (the glowing night store): a split tone (violet-magenta
  // darks, amber-rose lights), a rose halo round every light, cool lens streaks on the brightest, lit things that twinkle.
  // Then the drink moment's held breath (the edges close in) and the drop's flash. Cheap: maths, plus 4 taps of the small
  // bloom textures (mid/high tiers only) and up to 4 scene taps on bright pixels for the glints.
  if (dBeauty > 0.0 || mFlash > 0.0 || mDark > 0.0) {
    float bl = dot(c, vec3(0.299, 0.587, 0.114));
    if (dBeauty > 0.0) {
      vec3 tone = mix(vec3(0.62, 0.3, 0.92), vec3(1.0, 0.8, 0.6), smoothstep(0.1, 0.72, bl));
      tone /= max(0.01, dot(tone, vec3(0.299, 0.587, 0.114))); // keeps the brightness: a tint, never a darkening
      c = mix(c, c * tone, (isSky ? 0.18 : 0.42) * dBeauty);
      if (bloomK > 0.0) {
        c += texture2D(tBloom2, vUv).rgb * vec3(1.0, 0.42, 0.68) * 0.6 * dBeauty; // the rose halation (film on neon)
        if (dStreak > 0.0) {
          vec2 s1 = vec2(0.04, 0.0), s2 = vec2(0.1, 0.0);
          vec3 st = (texture2D(tBloom, vUv + s1).rgb + texture2D(tBloom, vUv - s1).rgb) * 0.55 + (texture2D(tBloom2, vUv + s2).rgb + texture2D(tBloom2, vUv - s2).rgb) * 0.45;
          c += st * vec3(0.5, 0.62, 1.0) * 0.55 * dStreak; // the night film's lens streak, cool against the warm lights
        }
      }
    }
    if (dSparkle > 0.0 && !isSky) { // twinkles: a few bright pixels flare for a moment, with four one-pixel arms
      float tk = floor(time * 4.0);
      float g = 0.0;
      vec2 o = 1.0 / res;
      if (bl > 0.55) { float hc = h1(cell + tk * 17.0); g = smoothstep(0.988, 1.0, hc) * 1.6; }
      vec2 nb[4]; nb[0] = vec2(1.0, 0.0); nb[1] = vec2(-1.0, 0.0); nb[2] = vec2(0.0, 1.0); nb[3] = vec2(0.0, -1.0);
      for (int i = 0; i < 4; i++) {
        vec2 nc2 = cell + nb[i];
        float hn = h1(nc2 + tk * 17.0);
        if (hn > 0.988 && dot(tap((nc2 + 0.5) * o), vec3(0.299, 0.587, 0.114)) > 0.5) g += smoothstep(0.988, 1.0, hn) * 0.8;
      }
      c += vec3(1.0, 0.92, 0.85) * g * dSparkle * (0.6 + 0.4 * sin(time * 9.0 + cell.x));
    }
    if (mDark > 0.0) { // the held breath: the world dims and the edges close in round him
      float fd = length((vUv - focus) * vec2(res.x / res.y, 1.0));
      c *= 1.0 - mDark * (0.25 + 0.75 * smoothstep(0.12, 0.75, fd));
    }
    if (mFlash > 0.0) c = mix(c, vec3(1.0, 0.86, 0.95), mFlash * (isSky ? 0.5 : 0.7)); // the drop's flash, rose-white
  }
  // ---- end drunk lane block ----
  c = (c - 0.5) * contrast + 0.5;
  vec3 wm = mix(vec3(0.93, 0.98, 1.07), vec3(1.08, 1.0, 0.88), warm);
  c *= isSky ? mix(wm, vec3(1.0), 0.75) : wm;
  vec2 d = vUv - 0.5;
  float v = dot(d, d);
  c *= 1.0 - v * (0.35 * vigAmt + dBreathe * (0.6 + 0.4 * sin(time * dBreatheHz * 6.2832))); // drunk: the edges breathe
  // Nuance pass (#3): light falls off away from him. A lit focus around the hero, darker toward the frame edges;
  // bright things (lit shop fronts, neon, windows) keep their light.
  if (falloff > 0.0) {
    vec2 fq = (vUv - focus) * vec2(res.x / res.y, 1.0);
    float fd = length(fq);
    float fall = mix(1.0, 1.0 - falloff, smoothstep(0.16, 0.8, fd)) * (1.0 + falloff * 0.22 * (1.0 - smoothstep(0.0, 0.28, fd)));
    float lum = dot(c, vec3(0.299, 0.587, 0.114));
    c *= mix(fall, max(fall, 1.0), smoothstep(0.55, 0.9, lum));
  }
  if (l2Amt > 0.0) { // look2: the grade fitted from this frame to David's painted target, last, on everything (sky too)
    vec3 cl = clamp(c, 0.0, 1.0), g = vec3(0.0);
    if (l2W.x > 0.001) g += lut33(tLutD, cl) * l2W.x;
    if (l2W.y > 0.001) g += lut33(tLutK, cl) * l2W.y;
    if (l2W.z > 0.001) g += lut33(tLutN, cl) * l2W.z;
    if (l2W.w > 0.001) g += lut33(tLutX, cl) * l2W.w;
    if (l2B > 0.001) g += lut33(tLutB, cl) * l2B;
    c = mix(c, g, min(l2Amt, 1.0));
    c = mix(vec3(dot(c, vec3(0.299, 0.587, 0.114))), c, l2Sat); // sober a little under the board, drunk over it
    if (l2Grain > 0.0) c += (h1(cell + floor(fract(time * 7.0) * 61.0)) - 0.5) * l2Grain; // sober: crisp, a fine film grain
  }
  c = mix(c, vec3(0.32, 0.0, 0.02), clamp(red * smoothstep(0.03, 0.22, v) * 0.7, 0.0, 0.45)); // softer, thinner red edge (David: the dark red made it murky)
  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}
`;class Ue{constructor(a){this.renderer=a,this.qScene=new T,this.qCam=new Q(-1,1,1,-1,0,1),this.rows=420,this.scale=2,this.pixel=(()=>{const e=typeof location<"u"?ce(location.search):null;return e?new ge(e):null})(),this.lowW=1,this.lowH=1,this.nl={tone:1,expo:1,tilt:0,tiltFocus:14,tiltPx:3,lut:0,lutW:[1,0,0],fxaa:0,l2:0,l2W:[1,0,0,0,0],l2Sat:1,l2Grain:0},this.look2Ready=!1,this.landmarks=[],this.lmShow=[1,1],this.nuance={...ke},this.focus=new g(.5,.45),this.moonElMin=.16,this.moonF=-1,this.moonYaw=NaN,this.fwd=new k,this.lastT=0,this.drunk={...J},this.prevYaw=NaN,this.smearS=0,this.moment={...Z},this.beta={bloom:0,thr:.9,lut3:0,hazeNear:10,hazeFar:58,vig:1,ao:0,aoN:0},this.atmos=null,this.bl=[],this.blMat=new H({uniforms:{tIn:{value:null},texel:{value:new g},dir:{value:new g},thr:{value:.9},mode:{value:0}},vertexShader:V,depthTest:!1,depthWrite:!1,fragmentShader:`uniform sampler2D tIn; uniform vec2 texel, dir; uniform float thr, mode; varying vec2 vUv;
      void main() {
        if (mode < 0.5) { // bright pass + 4-tap downsample
          vec3 a = texture2D(tIn, vUv + texel * vec2(-1.0, -1.0)).rgb + texture2D(tIn, vUv + texel * vec2(1.0, -1.0)).rgb
                 + texture2D(tIn, vUv + texel * vec2(-1.0, 1.0)).rgb + texture2D(tIn, vUv + texel * vec2(1.0, 1.0)).rgb;
          a *= 0.25; float l = max(a.r, max(a.g, a.b));
          gl_FragColor = vec4(a * smoothstep(thr, thr + 0.6, l), 1.0); return;
        }
        if (mode < 1.5) { gl_FragColor = vec4(texture2D(tIn, vUv).rgb, 1.0); return; } // plain downsample
        vec3 s = texture2D(tIn, vUv).rgb * 0.227; // 9-tap gaussian along dir
        s += (texture2D(tIn, vUv + dir * texel * 1.385).rgb + texture2D(tIn, vUv - dir * texel * 1.385).rgb) * 0.316;
        s += (texture2D(tIn, vUv + dir * texel * 3.231).rgb + texture2D(tIn, vUv - dir * texel * 3.231).rgb) * 0.070;
        gl_FragColor = vec4(s, 1.0);
      }`}),this.blQuad=new U(new G(2,2),this.blMat),this.blScene=new T,this.rt=new P(4,4,{minFilter:b,magFilter:b,type:I,depthBuffer:!0}),this.u={tScene:{value:this.rt.texture},res:{value:new g(4,4)},sat:{value:1},warm:{value:0},contrast:{value:1},glow:{value:0},red:{value:0},jitter:{value:0},time:{value:0},bright:{value:1},scale:{value:2},tDepth:{value:null},cnear:{value:.1},cfar:{value:160},outline:{value:0},moon:{value:0},skyTop:{value:new y(3840255)},skyHor:{value:new y(11067647)},fogCol:{value:new y(11067647)},night:{value:0},moonDir:{value:new k(0,.3,1).normalize()},camPos:{value:new k},camInv:{value:new se},lmAz:{value:new j},tilt:{value:0},lutAmt:{value:0},raw:{value:0},tLut:{value:ze()},tBloom:{value:null},tBloom2:{value:null},tLut3:{value:null},bloomK:{value:0},lut3Amt:{value:0},hazeNear:{value:10},hazeFar:{value:58},vigAmt:{value:1},dGhost:{value:0},dGhostPx:{value:0},dDrift:{value:0},dWarp:{value:0},dWarpHz:{value:0},dChroma:{value:0},dGlowWarm:{value:0},dBreathe:{value:0},dBreatheHz:{value:0},dSmear:{value:new g},mBlur:{value:0},mWave:{value:0},mWaveA:{value:0},mGrey:{value:0},dBeauty:{value:0},dStreak:{value:0},dSparkle:{value:0},mFlash:{value:0},mDark:{value:0},sunDir:{value:new k(0,.7,-.7)},golden:{value:0},cloudAmt:{value:0},wetAmt:{value:0},aoAmt:{value:0},aoPx:{value:30},aoN:{value:0},birdsAmt:{value:0},art3:{value:W?1:0},nc:{value:0},tone:{value:0},expo:{value:1},tiltD:{value:0},tiltFocus:{value:14},tiltPx:{value:3},glowAmt:{value:0},panoOn:{value:0},lutN:{value:0},skyMid:{value:new y(.5,.75,.93)},skyGlow:{value:new y(1,1,1)},lutW:{value:new k(1,0,0)},panoE:{value:new g(-.07,.3)},fxaaOn:{value:0},tPano:{value:null},tPanoM:{value:null},tLutD:{value:null},tLutK:{value:null},tLutN:{value:null},tLutX:{value:null},tLutB:{value:null},l2B:{value:0},l2W:{value:new j(1,0,0,0)},l2Amt:{value:0},l2Sat:{value:1},l2Grain:{value:0},focus:{value:new g(.5,.45)},falloff:{value:0},edgeHi:{value:0},hazeAmt:{value:0},shadowAmt:{value:0},shadowCol:{value:new y(.55,.6,1)}},this.rt.depthTexture=new ie(4,4),this.u.tDepth.value=this.rt.depthTexture,this.quad=new U(new G(2,2),new H({uniforms:this.u,vertexShader:V,fragmentShader:Me,depthTest:!1,depthWrite:!1})),this.quad.frustumCulled=!1,this.qScene.add(this.quad)}setSize(a,e,t){const i=Math.min(a,e)/t;if(this.rows=Math.round(e/i),this.scale=1,this.lowW=Math.max(16,Math.round(a/i)),this.lowH=Math.max(16,Math.round(e/i)),this.pixel){const o=this.pixel.size(this.renderer,a,e);this.lowW=o.lowW,this.lowH=o.lowH,this.rows=o.lowH}this.u.scale.value=1,this.renderer.setSize(this.lowW,this.lowH,!1),this.rt.setSize(this.lowW,this.lowH),this.u.res.value.set(this.lowW,this.lowH)}setSky(a,e,t,i=t){this.u.skyHor.value.setRGB(...a),this.u.skyTop.value.setRGB(...e),this.u.moon.value=t,this.u.night.value=i;const o=ye(a,e,i);return this.u.fogCol.value.setRGB(...o),o}newOn(a,e,t){this.u.nc.value=a?1:0;const i=a?v:b;this.rt.texture.minFilter=i,this.rt.texture.magFilter=i,e&&(this.u.tPano.value=e.color,this.u.tPanoM.value=e.mask,this.u.panoOn.value=1),t&&this.u.panoE.value.set(t[0],t[1])}setNewLuts(a,e,t){for(const i of[a,e,t])i.flipY=!1,i.magFilter=v,i.minFilter=v,i.generateMipmaps=!1,i.colorSpace=B,i.needsUpdate=!0;this.u.tLutD.value=a,this.u.tLutK.value=e,this.u.tLutN.value=t}setLook2(a,e,t,i,o){this.setNewLuts(a,e,i);for(const s of[o,t])s.flipY=!1,s.magFilter=v,s.minFilter=v,s.generateMipmaps=!1,s.colorSpace=B,s.needsUpdate=!0;this.u.tLutX.value=o,this.u.tLutB.value=t,this.look2Ready=!0}setSamples(a){this.pixel&&(a=0),this.rt.samples!==a&&(this.rt.dispose(),this.rt.samples=a)}setNewSky(a,e,t){this.u.skyMid.value.setRGB(...a),this.u.skyGlow.value.setRGB(...e),this.u.glowAmt.value=t}setLut(a,e,t){const i=new Uint8Array(2048);for(let s=0;s<256;s++)for(let r=0;r<3;r++)i[s*4+r]=a[s*3+r],i[(256+s)*4+r]=e[s*3+r];for(let s=0;s<512;s++)i[s*4+3]=255;const o=new E(i,256,2,R);o.magFilter=v,o.minFilter=v,o.needsUpdate=!0,this.u.tLut.value.dispose(),this.u.tLut.value=o,this.u.lutAmt.value=t}set lutAmt(a){this.u.lutAmt.value=a}get lutAmt(){return this.u.lutAmt.value}set raw(a){this.u.raw.value=a?1:0}set tilt(a){this.u.tilt.value=a}aimSky(a,e){a.getWorldDirection(this.fwd);const t=Math.atan2(this.fwd.x,this.fwd.z),i=Math.asin(Math.max(-1,Math.min(1,this.fwd.y))),o=2*Math.atan(Math.tan(S.degToRad(a.fov)/2)*a.aspect);if(this.moonF>=0){const m=((this.moonF-.64)%1+1)%1/.42,h=Math.max(0,Math.min(1,m)),w=Math.PI/2-h*Math.PI*.8,p=.12+.55*Math.sin(Math.PI*h);this.u.moonDir.value.set(Math.sin(w)*Math.cos(p),Math.sin(p),Math.cos(w)*Math.cos(p));const M=a.position,q=this.u.lmAz.value,A=z=>z?Math.atan2(z.x-M.x,z.z-M.z):0;q.set(A(this.landmarks[0]),A(this.landmarks[1]),this.lmShow[0],this.lmShow[1]);return}const s=t-o*.28;Number.isNaN(this.moonYaw)&&(this.moonYaw=s);let r=s-this.moonYaw;r=Math.atan2(Math.sin(r),Math.cos(r)),this.moonYaw+=r*Math.min(1,e*.8);const n=i+S.degToRad(a.fov)/2,c=Math.max(this.moonElMin,Math.min(.75,n-.2));this.u.moonDir.value.set(Math.sin(this.moonYaw)*Math.cos(c),Math.sin(c),Math.cos(this.moonYaw)*Math.cos(c));const d=a.position,u=this.u.lmAz.value,f=m=>m?Math.atan2(m.x-d.x,m.z-d.z):0;u.set(f(this.landmarks[0]),f(this.landmarks[1]),this.lmShow[0],this.lmShow[1])}applyDrunk(a){const e=this.drunk,t=this.u,i=this.moment;t.mBlur.value=i.blur,t.mWave.value=i.wave,t.mWaveA.value=i.waveA,t.mGrey.value=i.grey,t.dBeauty.value=e.beauty??0,t.dStreak.value=e.streak??0,t.dSparkle.value=e.sparkle??0,t.mFlash.value=i.flash??0,t.mDark.value=i.dark??0,t.dGhost.value=e.ghost,t.dGhostPx.value=e.ghostPx,t.dDrift.value=e.drift,t.dWarp.value=e.warp,t.dWarpHz.value=e.warpHz,t.dChroma.value=e.chroma,t.dGlowWarm.value=e.glow>0?e.glowWarm*Math.min(1,e.glow*3):0,t.dBreathe.value=e.breathe,t.dBreatheHz.value=e.breatheHz;const o=a;let s=0;if(o.isPerspectiveCamera){o.getWorldDirection(this.fwd);const r=Math.atan2(this.fwd.x,this.fwd.z);if(!Number.isNaN(this.prevYaw)){const n=Math.atan2(Math.sin(r-this.prevYaw),Math.cos(r-this.prevYaw)),c=2*Math.atan(Math.tan(S.degToRad(o.fov)/2)*o.aspect);s=re(n,c,this.lowW,e.smear)}this.prevYaw=r}this.smearS+=(s-this.smearS)*.5,t.dSmear.value.set(Math.abs(this.smearS)<.6?0:Math.round(this.smearS),0)}setLut3(a){a.flipY=!1,a.needsUpdate=!0,a.magFilter=v,a.minFilter=v,a.generateMipmaps=!1,a.colorSpace=B,this.u.tLut3.value=a}pass(a,e,t,i=0,o=0,s=1,r=1){const n=this.blMat.uniforms;n.tIn.value=a,n.mode.value=t,n.dir.value.set(i,o),n.texel.value.set(1/s,1/r),this.renderer.setRenderTarget(e),this.renderer.render(this.blScene,this.qCam)}bloom(){if(!this.bl.length){this.blQuad.frustumCulled=!1,this.blScene.add(this.blQuad);for(let o=0;o<4;o++)this.bl.push(new P(4,4,{type:I,minFilter:v,magFilter:v,depthBuffer:!1}))}const a=Math.max(8,Math.round(this.lowW/4)),e=Math.max(8,Math.round(this.lowH/4)),t=Math.max(4,Math.round(a/3)),i=Math.max(4,Math.round(e/3));(this.bl[0].width!==a||this.bl[0].height!==e)&&(this.bl[0].setSize(a,e),this.bl[1].setSize(a,e),this.bl[2].setSize(t,i),this.bl[3].setSize(t,i)),this.blMat.uniforms.thr.value=this.beta.thr,this.pass(this.rt.texture,this.bl[0],0,0,0,this.lowW/2,this.lowH/2),this.pass(this.bl[0].texture,this.bl[1],2,1,0,a,e),this.pass(this.bl[1].texture,this.bl[0],2,0,1,a,e),this.pass(this.bl[0].texture,this.bl[2],1),this.pass(this.bl[2].texture,this.bl[3],2,1,0,t,i),this.pass(this.bl[3].texture,this.bl[2],2,0,1,t,i),this.u.tBloom.value=this.bl[0].texture,this.u.tBloom2.value=this.bl[2].texture}render(a,e,t,i,o){var u,f,m;(u=this.pixel)==null||u.begin(e),this.u.sat.value=t.sat,this.u.warm.value=t.warm,this.u.contrast.value=t.contrast,this.u.glow.value=o?t.glow:0,this.u.red.value=t.red,this.u.jitter.value=t.jitter,this.u.time.value=i,this.u.bright.value=t.bright,this.u.outline.value=t.outline??0;const s=this.nuance,r=this.u.night.value;this.u.falloff.value=s.falloff*(.55+.45*r),this.u.edgeHi.value=s.edge,this.u.hazeAmt.value=s.haze*(.35+.65*r),this.u.shadowAmt.value=s.shadow,this.u.shadowCol.value.setRGB(.55+.1*r,.62-.17*r,1),this.u.focus.value.copy(this.focus);const n=e;if(n.isPerspectiveCamera){this.u.cnear.value=n.near,this.u.cfar.value=n.far,n.updateMatrixWorld(),this.u.camInv.value.multiplyMatrices(n.matrixWorld,n.projectionMatrixInverse),this.u.camPos.value.setFromMatrixPosition(n.matrixWorld);const h=Math.max(0,Math.min(.1,i-this.lastT));this.lastT=i,this.aimSky(n,h)}le(i,this.atmos,e,this.beta.aoN),this.renderer.setRenderTarget(this.rt),this.renderer.render(a,e),(f=this.afterScene)==null||f.call(this,this.rt,e);const c=this.beta;this.applyDrunk(e),this.u.bloomK.value=o?c.bloom*(1+this.drunk.glow):0,o&&c.bloom>0&&this.bloom(),this.u.lut3Amt.value=this.u.tLut3.value?c.lut3:0,this.u.hazeNear.value=c.hazeNear,this.u.hazeFar.value=c.hazeFar,this.u.vigAmt.value=c.vig;const d=this.atmos;if(this.u.aoAmt.value=W&&c.aoN>0?c.ao:0,this.u.aoN.value=c.aoN,n.isPerspectiveCamera&&(this.u.aoPx.value=.35*this.lowH/(2*Math.tan(S.degToRad(n.fov)/2))),d&&W?(this.u.sunDir.value.set(...d.sunDir),this.u.golden.value=d.golden,this.u.wetAmt.value=d.wet,this.u.cloudAmt.value=c.aoN>0?d.cloud:0,this.u.birdsAmt.value=c.aoN>0?d.birds:0):(this.u.golden.value=0,this.u.cloudAmt.value=0,this.u.wetAmt.value=0,this.u.birdsAmt.value=0),this.u.nc.value>.5){const h=this.nl;this.u.tone.value=h.tone,this.u.expo.value=h.expo,this.u.tiltD.value=h.tilt,this.u.tiltFocus.value=h.tiltFocus,this.u.tiltPx.value=h.tiltPx*this.lowH/844,this.u.lutN.value=this.u.tLutD.value&&!this.look2Ready?h.lut:0,this.u.lutW.value.set(...h.lutW),this.u.fxaaOn.value=this.pixel?0:h.fxaa,this.u.l2Amt.value=this.look2Ready?h.l2:0,this.u.l2W.value.set(h.l2W[0],h.l2W[1],h.l2W[3],h.l2W[4]),this.u.l2B.value=h.l2W[2],this.u.l2Sat.value=h.l2Sat,this.u.l2Grain.value=h.l2Grain}else this.u.tone.value=0,this.u.tiltD.value=0,this.u.lutN.value=0,this.u.fxaaOn.value=0,this.u.l2Amt.value=0;this.renderer.setRenderTarget(this.pixel?this.pixel.rt:null),this.renderer.render(this.qScene,this.qCam),(m=this.pixel)==null||m.end(this.renderer,e,this.rt.depthTexture,this.drunk.beauty??0)}}export{W as A,D as E,Ue as L,Z as N,Pe as P,we as Q,F as W,De as a,Se as b,Be as c,We as d,He as e,Ce as f,Le as g,qe as l,Ne as m,Fe as n,be as p,Te as s};
