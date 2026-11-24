(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vh="170",$m=0,Gd=1,qm=2,Pf=1,Df=2,Ei=3,Ni=0,yn=1,di=2,rs=0,_r=1,Ba=2,Wd=3,Xd=4,jm=5,Cs=100,Ym=101,Km=102,Zm=103,Jm=104,Qm=200,eg=201,tg=202,ng=203,Al=204,Rl=205,ig=206,sg=207,rg=208,og=209,ag=210,cg=211,lg=212,hg=213,dg=214,Cl=0,Il=1,Ll=2,Sr=3,Pl=4,Dl=5,Nl=6,Ul=7,Gh=0,ug=1,fg=2,os=0,pg=1,mg=2,gg=3,_g=4,xg=5,vg=6,yg=7,$d="attached",Mg="detached",Nf=300,wr=301,Er=302,kl=303,Fl=304,sc=306,Tr=1e3,ts=1001,za=1002,Gt=1003,Uf=1004,ao=1005,An=1006,Ma=1007,Ci=1008,Ui=1009,kf=1010,Ff=1011,vo=1012,Wh=1013,ks=1014,si=1015,Or=1016,Xh=1017,$h=1018,Ar=1020,Of=35902,Bf=1021,zf=1022,Bn=1023,Hf=1024,Vf=1025,xr=1026,Rr=1027,qh=1028,jh=1029,Gf=1030,Yh=1031,Kh=1033,ba=33776,Sa=33777,wa=33778,Ea=33779,Ol=35840,Bl=35841,zl=35842,Hl=35843,Vl=36196,Gl=37492,Wl=37496,Xl=37808,$l=37809,ql=37810,jl=37811,Yl=37812,Kl=37813,Zl=37814,Jl=37815,Ql=37816,eh=37817,th=37818,nh=37819,ih=37820,sh=37821,Ta=36492,rh=36494,oh=36495,Wf=36283,ah=36284,ch=36285,lh=36286,Xf=2200,bg=2201,Sg=2202,yo=2300,Mo=2301,Sc=2302,ur=2400,fr=2401,Ha=2402,Zh=2500,wg=2501,Eg=0,$f=1,hh=2,Tg=3200,Ag=3201,Jh=0,Rg=1,es="",Nt="srgb",fn="srgb-linear",rc="linear",xt="srgb",zs=7680,qd=519,Cg=512,Ig=513,Lg=514,qf=515,Pg=516,Dg=517,Ng=518,Ug=519,dh=35044,jd="300 es",Ii=2e3,Va=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yd=1234567;const po=Math.PI/180,Cr=180/Math.PI;function oi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function Qh(n,e){return(n%e+e)%e}function kg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Fg(n,e,t){return n!==e?(t-n)/(e-n):0}function mo(n,e,t){return(1-t)*n+t*e}function Og(n,e,t,i){return mo(n,e,1-Math.exp(-t*i))}function Bg(n,e=1){return e-Math.abs(Qh(n,e*2)-e)}function zg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Hg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Vg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Gg(n,e){return n+Math.random()*(e-n)}function Wg(n){return n*(.5-Math.random())}function Xg(n){n!==void 0&&(Yd=n);let e=Yd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $g(n){return n*po}function qg(n){return n*Cr}function jg(n){return(n&n-1)===0&&n!==0}function Yg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Kg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zg(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*d,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*d,a*l);break;case"ZXZ":n.set(c*d,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const jf={DEG2RAD:po,RAD2DEG:Cr,generateUUID:oi,clamp:Qt,euclideanModulo:Qh,mapLinear:kg,inverseLerp:Fg,lerp:mo,damp:Og,pingpong:Bg,smoothstep:zg,smootherstep:Hg,randInt:Vg,randFloat:Gg,randFloatSpread:Wg,seededRandom:Xg,degToRad:$g,radToDeg:qg,isPowerOfTwo:jg,ceilPowerOfTwo:Yg,floorPowerOfTwo:Kg,setQuaternionFromProperEuler:Zg,normalize:gt,denormalize:ni};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,s,r,o,a,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],b=s[1],M=s[4],x=s[7],C=s[2],A=s[5],R=s[8];return r[0]=o*_+a*b+c*C,r[3]=o*m+a*M+c*A,r[6]=o*p+a*x+c*R,r[1]=l*_+h*b+d*C,r[4]=l*m+h*M+d*A,r[7]=l*p+h*x+d*R,r[2]=u*_+f*b+g*C,r[5]=u*m+f*M+g*A,r[8]=u*p+f*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=u*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wc.makeScale(e,t)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,t){return this.premultiply(wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new He;function Yf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jg(){const n=bo("canvas");return n.style.display="block",n}const Kd={};function co(n){n in Kd||(Kd[n]=!0,console.warn(n))}function Qg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function e0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function t0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qe={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===xt&&(n.r=Li(n.r),n.g=Li(n.g),n.b=Li(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===xt&&(n.r=vr(n.r),n.g=vr(n.g),n.b=vr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===es?rc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Zd=[.64,.33,.3,.6,.15,.06],Jd=[.2126,.7152,.0722],Qd=[.3127,.329],eu=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tu=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[fn]:{primaries:Zd,whitePoint:Qd,transfer:rc,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:Jd,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:Zd,whitePoint:Qd,transfer:xt,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:Jd,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}});let Hs;class n0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hs===void 0&&(Hs=bo("canvas")),Hs.width=e.width,Hs.height=e.height;const i=Hs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Li(t[i]/255)*255):t[i]=Li(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let i0=0;class Kf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ec(s[o].image)):r.push(Ec(s[o]))}else r=Ec(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ec(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?n0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let s0=0;class Ot extends Os{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=ts,s=ts,r=An,o=Ci,a=Bn,c=Ui,l=Ot.DEFAULT_ANISOTROPY,h=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=oi(),this.name="",this.source=new Kf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tr:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tr:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Nf;Ot.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,x=(f+1)/2,C=(p+1)/2,A=(h+u)/4,R=(d+_)/4,I=(g+m)/4;return M>x&&M>C?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=R/i):x>C?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=I/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=I/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-_)/b,this.z=(u-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class r0 extends Os{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ot(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends r0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zf extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class o0 extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3];const u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==u||l!==f||h!==g){let m=1-a;const p=c*u+l*f+h*g+d*_,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const C=Math.sqrt(M),A=Math.atan2(C,p*b);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const x=a*b;if(c=c*m+u*x,l=l*m+f*x,h=h*m+g*x,d=d*m+_*x,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=C,l*=C,h*=C,d*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-a*f,e[t+2]=l*g+h*f+a*u-c*d,e[t+3]=h*g-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),d=a(r/2),u=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*h,this.y=i+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tc=new P,nu=new In;class fi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oo.copy(i.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Bo.subVectors(this.max,jr),Vs.subVectors(e.a,jr),Gs.subVectors(e.b,jr),Ws.subVectors(e.c,jr),Gi.subVectors(Gs,Vs),Wi.subVectors(Ws,Gs),ms.subVectors(Vs,Ws);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-ms.z,ms.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,ms.z,0,-ms.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-ms.y,ms.x,0];return!Ac(t,Vs,Gs,Ws,Bo)||(t=[1,0,0,0,1,0,0,0,1],!Ac(t,Vs,Gs,Ws,Bo))?!1:(zo.crossVectors(Gi,Wi),t=[zo.x,zo.y,zo.z],Ac(t,Vs,Gs,Ws,Bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new P,new P,new P,new P,new P,new P,new P,new P],qn=new P,Oo=new fi,Vs=new P,Gs=new P,Ws=new P,Gi=new P,Wi=new P,ms=new P,jr=new P,Bo=new P,zo=new P,gs=new P;function Ac(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){gs.fromArray(n,r);const a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),c=e.dot(gs),l=t.dot(gs),h=i.dot(gs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const a0=new fi,Yr=new P,Rc=new P;class pi{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):a0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);const t=Yr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Yr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(Rc)),this.expandByPoint(Yr.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new P,Cc=new P,Ho=new P,Xi=new P,Ic=new P,Vo=new P,Lc=new P;class oc{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Cc.copy(e).add(t).multiplyScalar(.5),Ho.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Cc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ho),a=Xi.dot(this.direction),c=-Xi.dot(Ho),l=Xi.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Cc).addScaledVector(Ho,u),f}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),s=yi.dot(yi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,s,r){Ic.subVectors(t,e),Vo.subVectors(i,e),Lc.crossVectors(Ic,Vo);let o=this.direction.dot(Lc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const c=a*this.direction.dot(Vo.crossVectors(Xi,Vo));if(c<0)return null;const l=a*this.direction.dot(Ic.cross(Xi));if(l<0||c+l>o)return null;const h=-a*Xi.dot(Lc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,i,s,r,o,a,c,l,h,d,u,f,g,_,m){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,d,u,f,g,_,m)}set(e,t,i,s,r,o,a,c,l,h,d,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Xs.setFromMatrixColumn(e,0).length(),r=1/Xs.setFromMatrixColumn(e,1).length(),o=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,f=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-_*l,t[9]=-a*c,t[2]=_-u*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,f=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c0,e,l0)}lookAt(e,t,i){const s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),$i.crossVectors(i,Sn),$i.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),$i.crossVectors(i,Sn)),$i.normalize(),Go.crossVectors(Sn,$i),s[0]=$i.x,s[4]=Go.x,s[8]=Sn.x,s[1]=$i.y,s[5]=Go.y,s[9]=Sn.y,s[2]=$i.z,s[6]=Go.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],b=i[3],M=i[7],x=i[11],C=i[15],A=s[0],R=s[4],I=s[8],w=s[12],v=s[1],L=s[5],H=s[9],E=s[13],U=s[2],z=s[6],X=s[10],Y=s[14],$=s[3],oe=s[7],pe=s[11],Te=s[15];return r[0]=o*A+a*v+c*U+l*$,r[4]=o*R+a*L+c*z+l*oe,r[8]=o*I+a*H+c*X+l*pe,r[12]=o*w+a*E+c*Y+l*Te,r[1]=h*A+d*v+u*U+f*$,r[5]=h*R+d*L+u*z+f*oe,r[9]=h*I+d*H+u*X+f*pe,r[13]=h*w+d*E+u*Y+f*Te,r[2]=g*A+_*v+m*U+p*$,r[6]=g*R+_*L+m*z+p*oe,r[10]=g*I+_*H+m*X+p*pe,r[14]=g*w+_*E+m*Y+p*Te,r[3]=b*A+M*v+x*U+C*$,r[7]=b*R+M*L+x*z+C*oe,r[11]=b*I+M*H+x*X+C*pe,r[15]=b*w+M*E+x*Y+C*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*d-s*l*d-r*a*u+i*l*u+s*a*f-i*c*f)+_*(+t*c*f-t*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+m*(+t*l*d-t*a*f-r*o*d+i*o*f+r*a*h-i*l*h)+p*(-s*a*h-t*c*d+t*a*u+s*o*d-i*o*u+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=d*m*l-_*u*l+_*c*f-a*m*f-d*c*p+a*u*p,M=g*u*l-h*m*l-g*c*f+o*m*f+h*c*p-o*u*p,x=h*_*l-g*d*l+g*a*f-o*_*f-h*a*p+o*d*p,C=g*d*c-h*_*c-g*a*u+o*_*u+h*a*m-o*d*m,A=t*b+i*M+s*x+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=b*R,e[1]=(_*u*r-d*m*r-_*s*f+i*m*f+d*s*p-i*u*p)*R,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*p+i*c*p)*R,e[3]=(d*c*r-a*u*r-d*s*l+i*u*l+a*s*f-i*c*f)*R,e[4]=M*R,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*R,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*R,e[7]=(o*u*r-h*c*r+h*s*l-t*u*l-o*s*f+t*c*f)*R,e[8]=x*R,e[9]=(g*d*r-h*_*r-g*i*f+t*_*f+h*i*p-t*d*p)*R,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*p+t*a*p)*R,e[11]=(h*a*r-o*d*r-h*i*l+t*d*l+o*i*f-t*a*f)*R,e[12]=C*R,e[13]=(h*_*s-g*d*s+g*i*u-t*_*u-h*i*m+t*d*m)*R,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*R,e[15]=(o*d*s-h*a*s+h*i*c-t*d*c-o*i*u+t*a*u)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,_=o*h,m=o*d,p=a*d,b=c*l,M=c*h,x=c*d,C=i.x,A=i.y,R=i.z;return s[0]=(1-(_+p))*C,s[1]=(f+x)*C,s[2]=(g-M)*C,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(u+p))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(g+M)*R,s[9]=(m-b)*R,s[10]=(1-(u+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Xs.set(s[0],s[1],s[2]).length();const o=Xs.set(s[4],s[5],s[6]).length(),a=Xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],jn.copy(this);const l=1/r,h=1/o,d=1/a;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,t.setFromRotationMatrix(jn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ii){const c=this.elements,l=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s);let f,g;if(a===Ii)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Va)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ii){const c=this.elements,l=1/(t-e),h=1/(i-s),d=1/(o-r),u=(t+e)*l,f=(i+s)*h;let g,_;if(a===Ii)g=(o+r)*d,_=-2*d;else if(a===Va)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xs=new P,jn=new Fe,c0=new P(0,0,0),l0=new P(1,1,1),$i=new P,Go=new P,Sn=new P,iu=new Fe,su=new In;class ai{constructor(e=0,t=0,i=0,s=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return su.setFromEuler(this),this.setFromQuaternion(su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class Jf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h0=0;const ru=new P,$s=new In,Mi=new Fe,Wo=new P,Kr=new P,d0=new P,u0=new In,ou=new P(1,0,0),au=new P(0,1,0),cu=new P(0,0,1),lu={type:"added"},f0={type:"removed"},qs={type:"childadded",child:null},Pc={type:"childremoved",child:null};class At extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new P,t=new ai,i=new In,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new He}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(au,e)}rotateZ(e){return this.rotateOnAxis(cu,e)}translateOnAxis(e,t){return ru.copy(e).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(au,e)}translateZ(e){return this.translateOnAxis(cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wo.copy(e):Wo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Kr,Wo,this.up):Mi.lookAt(Wo,Kr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Mi),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lu),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(f0),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lu),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,d0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,u0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}At.DEFAULT_UP=new P(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new P,bi=new P,Dc=new P,Si=new P,js=new P,Ys=new P,hu=new P,Nc=new P,Uc=new P,kc=new P,Fc=new lt,Oc=new lt,Bc=new lt;class On{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Yn.subVectors(e,t),s.cross(Yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Yn.subVectors(s,t),bi.subVectors(i,t),Dc.subVectors(e,t);const o=Yn.dot(Yn),a=Yn.dot(bi),c=Yn.dot(Dc),l=bi.dot(bi),h=bi.dot(Dc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Si.x),c.addScaledVector(o,Si.y),c.addScaledVector(a,Si.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Fc.setScalar(0),Oc.setScalar(0),Bc.setScalar(0),Fc.fromBufferAttribute(e,t),Oc.fromBufferAttribute(e,i),Bc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Fc,r.x),o.addScaledVector(Oc,r.y),o.addScaledVector(Bc,r.z),o}static isFrontFacing(e,t,i,s){return Yn.subVectors(i,t),bi.subVectors(e,t),Yn.cross(bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Yn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return On.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;js.subVectors(s,i),Ys.subVectors(r,i),Nc.subVectors(e,i);const c=js.dot(Nc),l=Ys.dot(Nc);if(c<=0&&l<=0)return t.copy(i);Uc.subVectors(e,s);const h=js.dot(Uc),d=Ys.dot(Uc);if(h>=0&&d<=h)return t.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(js,o);kc.subVectors(e,r);const f=js.dot(kc),g=Ys.dot(kc);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ys,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return hu.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(hu,a);const p=1/(m+_+u);return o=_*p,a=u*p,t.copy(i).addScaledVector(js,o).addScaledVector(Ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function zc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ae{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=qe.workingColorSpace){if(e=Qh(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=zc(o,r,e+1/3),this.g=zc(o,r,e),this.b=zc(o,r,e-1/3)}return qe.toWorkingColorSpace(this,s),this}setStyle(e,t=Nt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const i=Qf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return qe.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Qt(Kt.r*255,0,255))*65536+Math.round(Qt(Kt.g*255,0,255))*256+Math.round(Qt(Kt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Kt.copy(this),t);const i=Kt.r,s=Kt.g,r=Kt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Nt){qe.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,i=Kt.g,s=Kt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Xo);const i=mo(qi.h,Xo.h,t),s=mo(qi.s,Xo.s,t),r=mo(qi.l,Xo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Ae;Ae.NAMES=Qf;let p0=0;class Wn extends Os{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=oi(),this.name="",this.blending=_r,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Rl,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Al&&(i.blendSrc=this.blendSrc),this.blendDst!==Rl&&(i.blendDst=this.blendDst),this.blendEquation!==Cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ri extends Wn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new P,$o=new Le;class dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dh,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix3(e),this.setXY(t,$o.x,$o.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dh&&(e.usage=this.usage),e}}class ep extends dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tp extends dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ct extends dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let m0=0;const Un=new Fe,Hc=new At,Ks=new P,wn=new fi,Zr=new fi,Ht=new P;class rn extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yf(e)?tp:ep)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ct(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(wn.min,Zr.min),wn.expandByPoint(Ht),Ht.addVectors(wn.max,Zr.max),wn.expandByPoint(Ht)):(wn.expandByPoint(Zr.min),wn.expandByPoint(Zr.max))}wn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ht.fromBufferAttribute(a,l),c&&(Ks.fromBufferAttribute(e,l),Ht.add(Ks)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new P,c[I]=new P;const l=new P,h=new P,d=new P,u=new Le,f=new Le,g=new Le,_=new P,m=new P;function p(I,w,v){l.fromBufferAttribute(i,I),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,v),u.fromBufferAttribute(r,I),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,v),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[I].add(_),a[w].add(_),a[v].add(_),c[I].add(m),c[w].add(m),c[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,w=b.length;I<w;++I){const v=b[I],L=v.start,H=v.count;for(let E=L,U=L+H;E<U;E+=3)p(e.getX(E+0),e.getX(E+1),e.getX(E+2))}const M=new P,x=new P,C=new P,A=new P;function R(I){C.fromBufferAttribute(s,I),A.copy(C);const w=a[I];M.copy(w),M.sub(C.multiplyScalar(C.dot(w))).normalize(),x.crossVectors(A,w);const L=x.dot(c[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,L)}for(let I=0,w=b.length;I<w;++I){const v=b[I],L=v.start,H=v.count;for(let E=L,U=L+H;E<U;E+=3)R(e.getX(E+0)),R(e.getX(E+1)),R(e.getX(E+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new dn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const du=new Fe,_s=new oc,qo=new pi,uu=new P,jo=new P,Yo=new P,Ko=new P,Vc=new P,Zo=new P,fu=new P,Jo=new P;class it extends At{constructor(e=new rn,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Zo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(Vc.fromBufferAttribute(d,e),o?Zo.addScaledVector(Vc,h):Zo.addScaledVector(Vc.sub(t),h))}t.add(Zo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(qo.containsPoint(_s.origin)===!1&&(_s.intersectSphere(qo,uu)===null||_s.origin.distanceToSquared(uu)>(e.far-e.near)**2))&&(du.copy(r).invert(),_s.copy(e.ray).applyMatrix4(du),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,C=M;x<C;x+=3){const A=a.getX(x),R=a.getX(x+1),I=a.getX(x+2);s=Qo(this,p,e,i,l,h,d,A,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=Qo(this,o,e,i,l,h,d,b,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,C=M;x<C;x+=3){const A=x,R=x+1,I=x+2;s=Qo(this,p,e,i,l,h,d,A,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,M=m+1,x=m+2;s=Qo(this,o,e,i,l,h,d,b,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function g0(n,e,t,i,s,r,o,a){let c;if(e.side===yn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Ni,a),c===null)return null;Jo.copy(a),Jo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Jo);return l<t.near||l>t.far?null:{distance:l,point:Jo.clone(),object:n}}function Qo(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,jo),n.getVertexPosition(c,Yo),n.getVertexPosition(l,Ko);const h=g0(n,e,t,i,jo,Yo,Ko,fu);if(h){const d=new P;On.getBarycoord(fu,jo,Yo,Ko,d),s&&(h.uv=On.getInterpolatedAttribute(s,a,c,l,d,new Le)),r&&(h.uv1=On.getInterpolatedAttribute(r,a,c,l,d,new Le)),o&&(h.normal=On.getInterpolatedAttribute(o,a,c,l,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new P,materialIndex:0};On.getNormal(jo,Yo,Ko,u.normal),h.face=u,h.barycoord=d}return h}class zi extends rn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(d,2));function g(_,m,p,b,M,x,C,A,R,I,w){const v=x/R,L=C/I,H=x/2,E=C/2,U=A/2,z=R+1,X=I+1;let Y=0,$=0;const oe=new P;for(let pe=0;pe<X;pe++){const Te=pe*L-E;for(let Xe=0;Xe<z;Xe++){const st=Xe*v-H;oe[_]=st*b,oe[m]=Te*M,oe[p]=U,l.push(oe.x,oe.y,oe.z),oe[_]=0,oe[m]=0,oe[p]=A>0?1:-1,h.push(oe.x,oe.y,oe.z),d.push(Xe/R),d.push(1-pe/I),Y+=1}}for(let pe=0;pe<I;pe++)for(let Te=0;Te<R;Te++){const Xe=u+Te+z*pe,st=u+Te+z*(pe+1),K=u+(Te+1)+z*(pe+1),se=u+(Te+1)+z*pe;c.push(Xe,st,se),c.push(st,K,se),$+=6}a.addGroup(f,$,w),f+=$,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function cn(n){const e={};for(let t=0;t<n.length;t++){const i=Ir(n[t]);for(const s in i)e[s]=i[s]}return e}function _0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function np(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const x0={clone:Ir,merge:cn};var v0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Wn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v0,this.fragmentShader=y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=_0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ip extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new P,pu=new Le,mu=new Le;class ln extends ip{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,pu,mu),t.subVectors(mu,pu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(po*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zs=-90,Js=1;class M0 extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Zs,Js,e,t);s.layers=this.layers,this.add(s);const r=new ln(Zs,Js,e,t);r.layers=this.layers,this.add(r);const o=new ln(Zs,Js,e,t);o.layers=this.layers,this.add(o);const a=new ln(Zs,Js,e,t);a.layers=this.layers,this.add(a);const c=new ln(Zs,Js,e,t);c.layers=this.layers,this.add(c);const l=new ln(Zs,Js,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Va)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sp extends Ot{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:wr,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b0 extends ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new sp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new zi(5,5,5),r=new ki({name:"CubemapFromEquirect",uniforms:Ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:rs});r.uniforms.tEquirect.value=t;const o=new it(s,r),a=t.minFilter;return t.minFilter===Ci&&(t.minFilter=An),new M0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Gc=new P,S0=new P,w0=new He;class As{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Gc.subVectors(i,t).cross(S0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Gc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||w0.getNormalMatrix(e),s=this.coplanarPoint(Gc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new pi,ea=new P;class ed{constructor(e=new As,t=new As,i=new As,s=new As,r=new As,o=new As){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ii){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],b=s[13],M=s[14],x=s[15];if(i[0].setComponents(c-r,u-l,m-f,x-p).normalize(),i[1].setComponents(c+r,u+l,m+f,x+p).normalize(),i[2].setComponents(c+o,u+h,m+g,x+b).normalize(),i[3].setComponents(c-o,u-h,m-g,x-b).normalize(),i[4].setComponents(c-a,u-d,m-_,x-M).normalize(),t===Ii)i[5].setComponents(c+a,u+d,m+_,x+M).normalize();else if(t===Va)i[5].setComponents(a,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ea.x=s.normal.x>0?e.max.x:e.min.x,ea.y=s.normal.y>0?e.max.y:e.min.y,ea.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function E0(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Fi extends rn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*u-o;for(let M=0;M<l;M++){const x=M*d-r;g.push(x,-b,0),_.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){const M=b+l*p,x=b+l*(p+1),C=b+1+l*(p+1),A=b+1+l*p;f.push(M,x,A),f.push(x,C,A)}this.setIndex(f),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.widthSegments,e.heightSegments)}}var T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,R0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,D0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,B0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,z0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Y0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,K0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Z0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n_="gl_FragColor = linearToOutputTexel( gl_FragColor );",i_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,o_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,p_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,__=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,x_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,v_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,w_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,T_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,A_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,V_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,W_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Y_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ex=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ux=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,px=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Px=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$x=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,iv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:T0,alphahash_pars_fragment:A0,alphamap_fragment:R0,alphamap_pars_fragment:C0,alphatest_fragment:I0,alphatest_pars_fragment:L0,aomap_fragment:P0,aomap_pars_fragment:D0,batching_pars_vertex:N0,batching_vertex:U0,begin_vertex:k0,beginnormal_vertex:F0,bsdfs:O0,iridescence_fragment:B0,bumpmap_pars_fragment:z0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:G0,clipping_planes_vertex:W0,color_fragment:X0,color_pars_fragment:$0,color_pars_vertex:q0,color_vertex:j0,common:Y0,cube_uv_reflection_fragment:K0,defaultnormal_vertex:Z0,displacementmap_pars_vertex:J0,displacementmap_vertex:Q0,emissivemap_fragment:e_,emissivemap_pars_fragment:t_,colorspace_fragment:n_,colorspace_pars_fragment:i_,envmap_fragment:s_,envmap_common_pars_fragment:r_,envmap_pars_fragment:o_,envmap_pars_vertex:a_,envmap_physical_pars_fragment:x_,envmap_vertex:c_,fog_vertex:l_,fog_pars_vertex:h_,fog_fragment:d_,fog_pars_fragment:u_,gradientmap_pars_fragment:f_,lightmap_pars_fragment:p_,lights_lambert_fragment:m_,lights_lambert_pars_fragment:g_,lights_pars_begin:__,lights_toon_fragment:v_,lights_toon_pars_fragment:y_,lights_phong_fragment:M_,lights_phong_pars_fragment:b_,lights_physical_fragment:S_,lights_physical_pars_fragment:w_,lights_fragment_begin:E_,lights_fragment_maps:T_,lights_fragment_end:A_,logdepthbuf_fragment:R_,logdepthbuf_pars_fragment:C_,logdepthbuf_pars_vertex:I_,logdepthbuf_vertex:L_,map_fragment:P_,map_pars_fragment:D_,map_particle_fragment:N_,map_particle_pars_fragment:U_,metalnessmap_fragment:k_,metalnessmap_pars_fragment:F_,morphinstance_vertex:O_,morphcolor_vertex:B_,morphnormal_vertex:z_,morphtarget_pars_vertex:H_,morphtarget_vertex:V_,normal_fragment_begin:G_,normal_fragment_maps:W_,normal_pars_fragment:X_,normal_pars_vertex:$_,normal_vertex:q_,normalmap_pars_fragment:j_,clearcoat_normal_fragment_begin:Y_,clearcoat_normal_fragment_maps:K_,clearcoat_pars_fragment:Z_,iridescence_pars_fragment:J_,opaque_fragment:Q_,packing:ex,premultiplied_alpha_fragment:tx,project_vertex:nx,dithering_fragment:ix,dithering_pars_fragment:sx,roughnessmap_fragment:rx,roughnessmap_pars_fragment:ox,shadowmap_pars_fragment:ax,shadowmap_pars_vertex:cx,shadowmap_vertex:lx,shadowmask_pars_fragment:hx,skinbase_vertex:dx,skinning_pars_vertex:ux,skinning_vertex:fx,skinnormal_vertex:px,specularmap_fragment:mx,specularmap_pars_fragment:gx,tonemapping_fragment:_x,tonemapping_pars_fragment:xx,transmission_fragment:vx,transmission_pars_fragment:yx,uv_pars_fragment:Mx,uv_pars_vertex:bx,uv_vertex:Sx,worldpos_vertex:wx,background_vert:Ex,background_frag:Tx,backgroundCube_vert:Ax,backgroundCube_frag:Rx,cube_vert:Cx,cube_frag:Ix,depth_vert:Lx,depth_frag:Px,distanceRGBA_vert:Dx,distanceRGBA_frag:Nx,equirect_vert:Ux,equirect_frag:kx,linedashed_vert:Fx,linedashed_frag:Ox,meshbasic_vert:Bx,meshbasic_frag:zx,meshlambert_vert:Hx,meshlambert_frag:Vx,meshmatcap_vert:Gx,meshmatcap_frag:Wx,meshnormal_vert:Xx,meshnormal_frag:$x,meshphong_vert:qx,meshphong_frag:jx,meshphysical_vert:Yx,meshphysical_frag:Kx,meshtoon_vert:Zx,meshtoon_frag:Jx,points_vert:Qx,points_frag:ev,shadow_vert:tv,shadow_frag:nv,sprite_vert:iv,sprite_frag:sv},ce={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},hi={basic:{uniforms:cn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:cn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:cn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:cn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:cn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:cn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:cn([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:cn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:cn([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:cn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:cn([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:cn([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:cn([ce.lights,ce.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};hi.physical={uniforms:cn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ta={r:0,b:0,g:0},vs=new ai,rv=new Fe;function ov(n,e,t,i,s,r,o){const a=new Ae(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function _(b){let M=!1;const x=g(b);x===null?p(a,c):x&&x.isColor&&(p(x,1),M=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const x=g(M);x&&(x.isCubeTexture||x.mapping===sc)?(h===void 0&&(h=new it(new zi(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Ir(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vs.copy(M.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rv.makeRotationFromEuler(vs)),h.material.toneMapped=qe.getTransfer(x.colorSpace)!==xt,(d!==x||u!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new it(new Fi(2,2),new ki({name:"BackgroundMaterial",uniforms:Ir(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=qe.getTransfer(x.colorSpace)!==xt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,M){b.getRGB(ta,np(n)),i.buffers.color.setClear(ta.r,ta.g,ta.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:_,addToRenderList:m}}function av(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(v,L,H,E,U){let z=!1;const X=d(E,H,L);r!==X&&(r=X,l(r.object)),z=f(v,E,H,U),z&&g(v,E,H,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(v,L,H,E),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function d(v,L,H){const E=H.wireframe===!0;let U=i[v.id];U===void 0&&(U={},i[v.id]=U);let z=U[L.id];z===void 0&&(z={},U[L.id]=z);let X=z[E];return X===void 0&&(X=u(c()),z[E]=X),X}function u(v){const L=[],H=[],E=[];for(let U=0;U<t;U++)L[U]=0,H[U]=0,E[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:E,object:v,attributes:{},index:null}}function f(v,L,H,E){const U=r.attributes,z=L.attributes;let X=0;const Y=H.getAttributes();for(const $ in Y)if(Y[$].location>=0){const pe=U[$];let Te=z[$];if(Te===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(Te=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(Te=v.instanceColor)),pe===void 0||pe.attribute!==Te||Te&&pe.data!==Te.data)return!0;X++}return r.attributesNum!==X||r.index!==E}function g(v,L,H,E){const U={},z=L.attributes;let X=0;const Y=H.getAttributes();for(const $ in Y)if(Y[$].location>=0){let pe=z[$];pe===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(pe=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(pe=v.instanceColor));const Te={};Te.attribute=pe,pe&&pe.data&&(Te.data=pe.data),U[$]=Te,X++}r.attributes=U,r.attributesNum=X,r.index=E}function _(){const v=r.newAttributes;for(let L=0,H=v.length;L<H;L++)v[L]=0}function m(v){p(v,0)}function p(v,L){const H=r.newAttributes,E=r.enabledAttributes,U=r.attributeDivisors;H[v]=1,E[v]===0&&(n.enableVertexAttribArray(v),E[v]=1),U[v]!==L&&(n.vertexAttribDivisor(v,L),U[v]=L)}function b(){const v=r.newAttributes,L=r.enabledAttributes;for(let H=0,E=L.length;H<E;H++)L[H]!==v[H]&&(n.disableVertexAttribArray(H),L[H]=0)}function M(v,L,H,E,U,z,X){X===!0?n.vertexAttribIPointer(v,L,H,U,z):n.vertexAttribPointer(v,L,H,E,U,z)}function x(v,L,H,E){_();const U=E.attributes,z=H.getAttributes(),X=L.defaultAttributeValues;for(const Y in z){const $=z[Y];if($.location>=0){let oe=U[Y];if(oe===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor)),oe!==void 0){const pe=oe.normalized,Te=oe.itemSize,Xe=e.get(oe);if(Xe===void 0)continue;const st=Xe.buffer,K=Xe.type,se=Xe.bytesPerElement,ye=K===n.INT||K===n.UNSIGNED_INT||oe.gpuType===Wh;if(oe.isInterleavedBufferAttribute){const B=oe.data,q=B.stride,ve=oe.offset;if(B.isInstancedInterleavedBuffer){for(let Re=0;Re<$.locationSize;Re++)p($.location+Re,B.meshPerAttribute);v.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Re=0;Re<$.locationSize;Re++)m($.location+Re);n.bindBuffer(n.ARRAY_BUFFER,st);for(let Re=0;Re<$.locationSize;Re++)M($.location+Re,Te/$.locationSize,K,pe,q*se,(ve+Te/$.locationSize*Re)*se,ye)}else{if(oe.isInstancedBufferAttribute){for(let B=0;B<$.locationSize;B++)p($.location+B,oe.meshPerAttribute);v.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let B=0;B<$.locationSize;B++)m($.location+B);n.bindBuffer(n.ARRAY_BUFFER,st);for(let B=0;B<$.locationSize;B++)M($.location+B,Te/$.locationSize,K,pe,Te*se,Te/$.locationSize*B*se,ye)}}else if(X!==void 0){const pe=X[Y];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv($.location,pe);break;case 3:n.vertexAttrib3fv($.location,pe);break;case 4:n.vertexAttrib4fv($.location,pe);break;default:n.vertexAttrib1fv($.location,pe)}}}}b()}function C(){I();for(const v in i){const L=i[v];for(const H in L){const E=L[H];for(const U in E)h(E[U].object),delete E[U];delete L[H]}delete i[v]}}function A(v){if(i[v.id]===void 0)return;const L=i[v.id];for(const H in L){const E=L[H];for(const U in E)h(E[U].object),delete E[U];delete L[H]}delete i[v.id]}function R(v){for(const L in i){const H=i[L];if(H[v.id]===void 0)continue;const E=H[v.id];for(const U in E)h(E[U].object),delete E[U];delete H[v.id]}}function I(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function cv(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),t.update(h,i,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function c(l,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function lv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Bn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===Or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ui&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==si&&!I)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:C,maxSamples:A}}function hv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new As,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const b=r?0:i,M=b*4;let x=p.clippingState||null;c.value=x,x=h(g,u,M,f);for(let C=0;C!==M;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==_;++M,x+=4)o.copy(d[M]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function dv(n){let e=new WeakMap;function t(o,a){return a===kl?o.mapping=wr:a===Fl&&(o.mapping=Er),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kl||a===Fl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new b0(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class ac extends ip{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pr=4,gu=[.125,.215,.35,.446,.526,.582],Is=20,Wc=new ac,_u=new Ae;let Xc=null,$c=0,qc=0,jc=!1;const Rs=(1+Math.sqrt(5))/2,Qs=1/Rs,xu=[new P(-Rs,Qs,0),new P(Rs,Qs,0),new P(-Qs,0,Rs),new P(Qs,0,Rs),new P(0,Rs,-Qs),new P(0,Rs,Qs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Xc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xc,$c,qc),this._renderer.xr.enabled=jc,e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:Or,format:Bn,colorSpace:fn,depthBuffer:!1},s=yu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uv(r)),this._blurMaterial=fv(r,e,t)}return s}_compileMaterial(e){const t=new it(this._lodPlanes[0],e);this._renderer.compile(t,Wc)}_sceneToCubeUV(e,t,i,s){const a=new ln(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(_u),h.toneMapping=os,h.autoClear=!1;const f=new ri({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new it(new zi,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(_u),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;na(s,b*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===wr||e.mapping===Er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;na(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Wc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xu[(s-r-1)%xu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new it(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Is-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Is;m>Is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Is}`);const p=[];let b=0;for(let R=0;R<Is;++R){const I=R/_,w=Math.exp(-I*I/2);p.push(w),R===0?b+=w:R<m&&(b+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-i;const x=this._sizeLods[s],C=3*x*(s>M-pr?s-M+pr:0),A=4*(this._cubeSize-x);na(t,C,A,3*x,2*x),c.setRenderTarget(t),c.render(d,Wc)}}function uv(n){const e=[],t=[],i=[];let s=n;const r=n-pr+1+gu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-pr?c=gu[o-n+pr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),M=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,I=A>2?0:-1,w=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];b.set(w,_*g*A),M.set(u,m*g*A);const v=[A,A,A,A,A,A];x.set(v,p*g*A)}const C=new rn;C.setAttribute("position",new dn(b,_)),C.setAttribute("uv",new dn(M,m)),C.setAttribute("faceIndex",new dn(x,p)),e.push(C),s>pr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yu(n,e,t){const i=new ls(n,e,t);return i.texture.mapping=sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function na(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function fv(n,e,t){const i=new Float32Array(Is),s=new P(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Mu(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function bu(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function td(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===kl||c===Fl,h=c===wr||c===Er;if(l||h){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new vu(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new vu(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function mv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&co("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function gv(n,e,t,i){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let M=0,x=b.length;M<x;M+=3){const C=b[M+0],A=b[M+1],R=b[M+2];u.push(C,A,A,R,R,C)}}else if(g!==void 0){const b=g.array;_=g.version;for(let M=0,x=b.length/3-1;M<x;M+=3){const C=M+0,A=M+1,R=M+2;u.push(C,A,A,R,R,C)}}else return;const m=new(Yf(u)?tp:ep)(u,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function _v(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){n.drawElements(i,f,r,u*o),t.update(f,i,1)}function l(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*o,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(u,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function xv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function vv(n,e,t){const i=new WeakMap,s=new lt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let v=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var f=v;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*A*4*d),I=new Zf(R,C,A,d);I.type=si,I.needsUpdate=!0;const w=x*4;for(let L=0;L<d;L++){const H=p[L],E=b[L],U=M[L],z=C*A*4*L;for(let X=0;X<H.count;X++){const Y=X*w;g===!0&&(s.fromBufferAttribute(H,X),R[z+Y+0]=s.x,R[z+Y+1]=s.y,R[z+Y+2]=s.z,R[z+Y+3]=0),_===!0&&(s.fromBufferAttribute(E,X),R[z+Y+4]=s.x,R[z+Y+5]=s.y,R[z+Y+6]=s.z,R[z+Y+7]=0),m===!0&&(s.fromBufferAttribute(U,X),R[z+Y+8]=s.x,R[z+Y+9]=s.y,R[z+Y+10]=s.z,R[z+Y+11]=U.itemSize===4?s.w:1)}}u={count:d,texture:I,size:new Le(C,A)},i.set(a,u),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function yv(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class op extends Ot{constructor(e,t,i,s,r,o,a,c,l,h=xr){if(h!==xr&&h!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===xr&&(i=ks),i===void 0&&h===Rr&&(i=Ar),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=c!==void 0?c:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ap=new Ot,Su=new op(1,1),cp=new Zf,lp=new o0,hp=new sp,wu=[],Eu=[],Tu=new Float32Array(16),Au=new Float32Array(9),Ru=new Float32Array(4);function Br(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=wu[s];if(r===void 0&&(r=new Float32Array(s),wu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cc(n,e){let t=Eu[e];t===void 0&&(t=new Int32Array(e),Eu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Mv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function Sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function Ev(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;Ru.set(i),n.uniformMatrix2fv(this.addr,!1,Ru),zt(t,i)}}function Tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;Au.set(i),n.uniformMatrix3fv(this.addr,!1,Au),zt(t,i)}}function Av(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;Tu.set(i),n.uniformMatrix4fv(this.addr,!1,Tu),zt(t,i)}}function Rv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function Iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function Lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function Pv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function Nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function Uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function kv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Su.compareFunction=qf,r=Su):r=ap,t.setTexture2D(e||r,s)}function Fv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||lp,s)}function Ov(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||hp,s)}function Bv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||cp,s)}function zv(n){switch(n){case 5126:return Mv;case 35664:return bv;case 35665:return Sv;case 35666:return wv;case 35674:return Ev;case 35675:return Tv;case 35676:return Av;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Iv;case 35669:case 35673:return Lv;case 5125:return Pv;case 36294:return Dv;case 36295:return Nv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Bv}}function Hv(n,e){n.uniform1fv(this.addr,e)}function Vv(n,e){const t=Br(e,this.size,2);n.uniform2fv(this.addr,t)}function Gv(n,e){const t=Br(e,this.size,3);n.uniform3fv(this.addr,t)}function Wv(n,e){const t=Br(e,this.size,4);n.uniform4fv(this.addr,t)}function Xv(n,e){const t=Br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $v(n,e){const t=Br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qv(n,e){const t=Br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jv(n,e){n.uniform1iv(this.addr,e)}function Yv(n,e){n.uniform2iv(this.addr,e)}function Kv(n,e){n.uniform3iv(this.addr,e)}function Zv(n,e){n.uniform4iv(this.addr,e)}function Jv(n,e){n.uniform1uiv(this.addr,e)}function Qv(n,e){n.uniform2uiv(this.addr,e)}function ey(n,e){n.uniform3uiv(this.addr,e)}function ty(n,e){n.uniform4uiv(this.addr,e)}function ny(n,e,t){const i=this.cache,s=e.length,r=cc(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ap,r[o])}function iy(n,e,t){const i=this.cache,s=e.length,r=cc(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||lp,r[o])}function sy(n,e,t){const i=this.cache,s=e.length,r=cc(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hp,r[o])}function ry(n,e,t){const i=this.cache,s=e.length,r=cc(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||cp,r[o])}function oy(n){switch(n){case 5126:return Hv;case 35664:return Vv;case 35665:return Gv;case 35666:return Wv;case 35674:return Xv;case 35675:return $v;case 35676:return qv;case 5124:case 35670:return jv;case 35667:case 35671:return Yv;case 35668:case 35672:return Kv;case 35669:case 35673:return Zv;case 5125:return Jv;case 36294:return Qv;case 36295:return ey;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}class ay{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zv(t.type)}}class cy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oy(t.type)}}class ly{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Yc=/(\w+)(\])?(\[|\.)?/g;function Cu(n,e){n.seq.push(e),n.map[e.id]=e}function hy(n,e,t){const i=n.name,s=i.length;for(Yc.lastIndex=0;;){const r=Yc.exec(i),o=Yc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Cu(t,l===void 0?new ay(a,n,e):new cy(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new ly(a),Cu(t,d)),t=d}}}class Aa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);hy(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Iu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const dy=37297;let uy=0;function fy(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Lu=new He;function py(n){qe._getMatrix(Lu,qe.workingColorSpace,n);const e=`mat3( ${Lu.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(n)){case rc:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Pu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+fy(n.getShaderSource(e),o)}else return s}function my(n,e){const t=py(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gy(n,e){let t;switch(e){case pg:t="Linear";break;case mg:t="Reinhard";break;case gg:t="Cineon";break;case _g:t="ACESFilmic";break;case vg:t="AgX";break;case yg:t="Neutral";break;case xg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ia=new P;function _y(){qe.getLuminanceCoefficients(ia);const n=ia.x.toFixed(4),e=ia.y.toFixed(4),t=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function vy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function lo(n){return n!==""}function Du(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const My=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(n){return n.replace(My,Sy)}const by=new Map;function Sy(n,e){let t=Ge[e];if(t===void 0){const i=by.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uh(t)}const wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(n){return n.replace(wy,Ey)}function Ey(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ku(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ty(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Df?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Ay(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wr:case Er:e="ENVMAP_TYPE_CUBE";break;case sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ry(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function Cy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gh:e="ENVMAP_BLENDING_MULTIPLY";break;case ug:e="ENVMAP_BLENDING_MIX";break;case fg:e="ENVMAP_BLENDING_ADD";break}return e}function Iy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ly(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Ty(t),l=Ay(t),h=Ry(t),d=Cy(t),u=Iy(t),f=xy(t),g=vy(r),_=s.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lo).join(`
`),p.length>0&&(p+=`
`)):(m=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),p=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?Ge.tonemapping_pars_fragment:"",t.toneMapping!==os?gy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,my("linearToOutputTexel",t.outputColorSpace),_y(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),o=uh(o),o=Du(o,t),o=Nu(o,t),a=uh(a),a=Du(a,t),a=Nu(a,t),o=Uu(o),a=Uu(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+m+o,x=b+p+a,C=Iu(s,s.VERTEX_SHADER,M),A=Iu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,C),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(L){if(n.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),E=s.getShaderInfoLog(C).trim(),U=s.getShaderInfoLog(A).trim();let z=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,A);else{const Y=Pu(s,C,"vertex"),$=Pu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+Y+`
`+$)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(E===""||U==="")&&(X=!1);X&&(L.diagnostics={runnable:z,programLog:H,vertexShader:{log:E,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(C),s.deleteShader(A),I=new Aa(s,_),w=yy(s,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,dy)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let Py=0;class Dy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ny(e),t.set(e,i)),i}}class Ny{constructor(e){this.id=Py++,this.code=e,this.usedTimes=0}}function Uy(n,e,t,i,s,r,o){const a=new Jf,c=new Dy,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,v,L,H,E){const U=H.fog,z=E.geometry,X=w.isMeshStandardMaterial?H.environment:null,Y=(w.isMeshStandardMaterial?t:e).get(w.envMap||X),$=Y&&Y.mapping===sc?Y.image.height:null,oe=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Te=pe!==void 0?pe.length:0;let Xe=0;z.morphAttributes.position!==void 0&&(Xe=1),z.morphAttributes.normal!==void 0&&(Xe=2),z.morphAttributes.color!==void 0&&(Xe=3);let st,K,se,ye;if(oe){const pt=hi[oe];st=pt.vertexShader,K=pt.fragmentShader}else st=w.vertexShader,K=w.fragmentShader,c.update(w),se=c.getVertexShaderID(w),ye=c.getFragmentShaderID(w);const B=n.getRenderTarget(),q=n.state.buffers.depth.getReversed(),ve=E.isInstancedMesh===!0,Re=E.isBatchedMesh===!0,at=!!w.map,De=!!w.matcap,_t=!!Y,N=!!w.aoMap,qt=!!w.lightMap,je=!!w.bumpMap,Ye=!!w.normalMap,Ie=!!w.displacementMap,St=!!w.emissiveMap,Ce=!!w.metalnessMap,T=!!w.roughnessMap,y=w.anisotropy>0,O=w.clearcoat>0,J=w.dispersion>0,te=w.iridescence>0,Z=w.sheen>0,we=w.transmission>0,he=y&&!!w.anisotropyMap,me=O&&!!w.clearcoatMap,et=O&&!!w.clearcoatNormalMap,ie=O&&!!w.clearcoatRoughnessMap,ge=te&&!!w.iridescenceMap,Pe=te&&!!w.iridescenceThicknessMap,Ne=Z&&!!w.sheenColorMap,_e=Z&&!!w.sheenRoughnessMap,Ke=!!w.specularMap,Ve=!!w.specularColorMap,Mt=!!w.specularIntensityMap,D=we&&!!w.transmissionMap,le=we&&!!w.thicknessMap,j=!!w.gradientMap,Q=!!w.alphaMap,fe=w.alphaTest>0,de=!!w.alphaHash,Be=!!w.extensions;let It=os;w.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(It=n.toneMapping);const jt={shaderID:oe,shaderType:w.type,shaderName:w.name,vertexShader:st,fragmentShader:K,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:ye,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Re,batchingColor:Re&&E._colorsTexture!==null,instancing:ve,instancingColor:ve&&E.instanceColor!==null,instancingMorph:ve&&E.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:B===null?n.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:fn,alphaToCoverage:!!w.alphaToCoverage,map:at,matcap:De,envMap:_t,envMapMode:_t&&Y.mapping,envMapCubeUVHeight:$,aoMap:N,lightMap:qt,bumpMap:je,normalMap:Ye,displacementMap:u&&Ie,emissiveMap:St,normalMapObjectSpace:Ye&&w.normalMapType===Rg,normalMapTangentSpace:Ye&&w.normalMapType===Jh,metalnessMap:Ce,roughnessMap:T,anisotropy:y,anisotropyMap:he,clearcoat:O,clearcoatMap:me,clearcoatNormalMap:et,clearcoatRoughnessMap:ie,dispersion:J,iridescence:te,iridescenceMap:ge,iridescenceThicknessMap:Pe,sheen:Z,sheenColorMap:Ne,sheenRoughnessMap:_e,specularMap:Ke,specularColorMap:Ve,specularIntensityMap:Mt,transmission:we,transmissionMap:D,thicknessMap:le,gradientMap:j,opaque:w.transparent===!1&&w.blending===_r&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:fe,alphaHash:de,combine:w.combine,mapUv:at&&_(w.map.channel),aoMapUv:N&&_(w.aoMap.channel),lightMapUv:qt&&_(w.lightMap.channel),bumpMapUv:je&&_(w.bumpMap.channel),normalMapUv:Ye&&_(w.normalMap.channel),displacementMapUv:Ie&&_(w.displacementMap.channel),emissiveMapUv:St&&_(w.emissiveMap.channel),metalnessMapUv:Ce&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:he&&_(w.anisotropyMap.channel),clearcoatMapUv:me&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:et&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(w.sheenRoughnessMap.channel),specularMapUv:Ke&&_(w.specularMap.channel),specularColorMapUv:Ve&&_(w.specularColorMap.channel),specularIntensityMapUv:Mt&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:le&&_(w.thicknessMap.channel),alphaMapUv:Q&&_(w.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ye||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!z.attributes.uv&&(at||Q),fog:!!U,useFog:w.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:q,skinning:E.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Xe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:It,decodeVideoTexture:at&&w.map.isVideoTexture===!0&&qe.getTransfer(w.map.colorSpace)===xt,decodeVideoTextureEmissive:St&&w.emissiveMap.isVideoTexture===!0&&qe.getTransfer(w.emissiveMap.colorSpace)===xt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===di,flipSided:w.side===yn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Be&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&w.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return jt.vertexUv1s=l.has(1),jt.vertexUv2s=l.has(2),jt.vertexUv3s=l.has(3),l.clear(),jt}function p(w){const v=[];if(w.shaderID?v.push(w.shaderID):(v.push(w.customVertexShaderID),v.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)v.push(L),v.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(b(v,w),M(v,w),v.push(n.outputColorSpace)),v.push(w.customProgramCacheKey),v.join()}function b(w,v){w.push(v.precision),w.push(v.outputColorSpace),w.push(v.envMapMode),w.push(v.envMapCubeUVHeight),w.push(v.mapUv),w.push(v.alphaMapUv),w.push(v.lightMapUv),w.push(v.aoMapUv),w.push(v.bumpMapUv),w.push(v.normalMapUv),w.push(v.displacementMapUv),w.push(v.emissiveMapUv),w.push(v.metalnessMapUv),w.push(v.roughnessMapUv),w.push(v.anisotropyMapUv),w.push(v.clearcoatMapUv),w.push(v.clearcoatNormalMapUv),w.push(v.clearcoatRoughnessMapUv),w.push(v.iridescenceMapUv),w.push(v.iridescenceThicknessMapUv),w.push(v.sheenColorMapUv),w.push(v.sheenRoughnessMapUv),w.push(v.specularMapUv),w.push(v.specularColorMapUv),w.push(v.specularIntensityMapUv),w.push(v.transmissionMapUv),w.push(v.thicknessMapUv),w.push(v.combine),w.push(v.fogExp2),w.push(v.sizeAttenuation),w.push(v.morphTargetsCount),w.push(v.morphAttributeCount),w.push(v.numDirLights),w.push(v.numPointLights),w.push(v.numSpotLights),w.push(v.numSpotLightMaps),w.push(v.numHemiLights),w.push(v.numRectAreaLights),w.push(v.numDirLightShadows),w.push(v.numPointLightShadows),w.push(v.numSpotLightShadows),w.push(v.numSpotLightShadowsWithMaps),w.push(v.numLightProbes),w.push(v.shadowMapType),w.push(v.toneMapping),w.push(v.numClippingPlanes),w.push(v.numClipIntersection),w.push(v.depthPacking)}function M(w,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const v=g[w.type];let L;if(v){const H=hi[v];L=x0.clone(H.uniforms)}else L=w.uniforms;return L}function C(w,v){let L;for(let H=0,E=h.length;H<E;H++){const U=h[H];if(U.cacheKey===v){L=U,++L.usedTimes;break}}return L===void 0&&(L=new Ly(n,v,w,r),h.push(L)),L}function A(w){if(--w.usedTimes===0){const v=h.indexOf(w);h[v]=h[h.length-1],h.pop(),w.destroy()}}function R(w){c.remove(w)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:I}}function ky(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Fy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ou(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,f,g,_,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(d,u){t.length>1&&t.sort(d||Fy),i.length>1&&i.sort(u||Fu),s.length>1&&s.sort(u||Fu)}function h(){for(let d=e,u=n.length;d<u;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Oy(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ou,n.set(i,[o])):s>=r.length?(o=new Ou,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function By(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ae};break;case"SpotLight":t={position:new P,direction:new P,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function zy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Hy=0;function Vy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Gy(n){const e=new By,t=zy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const s=new P,r=new Fe,o=new Fe;function a(l){let h=0,d=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,M=0,x=0,C=0,A=0,R=0;l.sort(Vy);for(let w=0,v=l.length;w<v;w++){const L=l[w],H=L.color,E=L.intensity,U=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*E,d+=H.g*E,u+=H.b*E;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],E);R++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,$=t.get(L);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=z,i.directionalShadowMatrix[f]=L.shadow.matrix,b++}i.directional[f]=X,f++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(H).multiplyScalar(E),X.distance=U,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[_]=X;const Y=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,Y.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[_]=Y.matrix,L.castShadow){const $=t.get(L);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,i.spotShadow[_]=$,i.spotShadowMap[_]=z,x++}_++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(H).multiplyScalar(E),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const Y=L.shadow,$=t.get(L);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,$.shadowCameraNear=Y.camera.near,$.shadowCameraFar=Y.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=L.shadow.matrix,M++}i.point[g]=X,g++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(E),X.groundColor.copy(L.groundColor).multiplyScalar(E),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==M||I.numSpotShadows!==x||I.numSpotMaps!==C||I.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=M,I.numSpotShadows=x,I.numSpotMaps=C,I.numLightProbes=R,i.version=Hy++)}function c(l,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const M=l[p];if(M.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(M.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=i.point[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function Bu(n){const e=new Gy(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Wy(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Bu(n),e.set(s,[a])):r>=o.length?(a=new Bu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Xy extends Wn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $y extends Wn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yy(n,e,t){let i=new ed;const s=new Le,r=new Le,o=new lt,a=new Xy({depthPacking:Ag}),c=new $y,l={},h=t.maxTextureSize,d={[Ni]:yn,[yn]:Ni,[di]:di},u=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:qy,fragmentShader:jy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new it(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pf;let p=this.type;this.render=function(A,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=n.getRenderTarget(),v=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),H=n.state;H.setBlending(rs),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const E=p!==Ei&&this.type===Ei,U=p===Ei&&this.type!==Ei;for(let z=0,X=A.length;z<X;z++){const Y=A[z],$=Y.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const oe=$.getFrameExtents();if(s.multiply(oe),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,$.mapSize.y=r.y)),$.map===null||E===!0||U===!0){const Te=this.type!==Ei?{minFilter:Gt,magFilter:Gt}:{};$.map!==null&&$.map.dispose(),$.map=new ls(s.x,s.y,Te),$.map.texture.name=Y.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const pe=$.getViewportCount();for(let Te=0;Te<pe;Te++){const Xe=$.getViewport(Te);o.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),H.viewport(o),$.updateMatrices(Y,Te),i=$.getFrustum(),x(R,I,$.camera,Y,this.type)}$.isPointLightShadow!==!0&&this.type===Ei&&b($,I),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,v,L)};function b(A,R){const I=e.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ls(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,I,u,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,I,f,_,null)}function M(A,R,I,w){let v=null;const L=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)v=L;else if(v=I.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=v.uuid,E=R.uuid;let U=l[H];U===void 0&&(U={},l[H]=U);let z=U[E];z===void 0&&(z=v.clone(),U[E]=z,R.addEventListener("dispose",C)),v=z}if(v.visible=R.visible,v.wireframe=R.wireframe,w===Ei?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:d[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const H=n.properties.get(v);H.light=I}return v}function x(A,R,I,w,v){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Ei)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const E=e.update(A),U=A.material;if(Array.isArray(U)){const z=E.groups;for(let X=0,Y=z.length;X<Y;X++){const $=z[X],oe=U[$.materialIndex];if(oe&&oe.visible){const pe=M(A,oe,w,v);A.onBeforeShadow(n,A,R,I,E,pe,$),n.renderBufferDirect(I,null,E,pe,A,$),A.onAfterShadow(n,A,R,I,E,pe,$)}}}else if(U.visible){const z=M(A,U,w,v);A.onBeforeShadow(n,A,R,I,E,z,null),n.renderBufferDirect(I,null,E,z,A,null),A.onAfterShadow(n,A,R,I,E,z,null)}}const H=A.children;for(let E=0,U=H.length;E<U;E++)x(H[E],R,I,w,v)}function C(A){A.target.removeEventListener("dispose",C);for(const I in l){const w=l[I],v=A.target.uuid;v in w&&(w[v].dispose(),delete w[v])}}}const Ky={[Cl]:Il,[Ll]:Nl,[Pl]:Ul,[Sr]:Dl,[Il]:Cl,[Nl]:Ll,[Ul]:Pl,[Dl]:Sr};function Zy(n,e){function t(){let D=!1;const le=new lt;let j=null;const Q=new lt(0,0,0,0);return{setMask:function(fe){j!==fe&&!D&&(n.colorMask(fe,fe,fe,fe),j=fe)},setLocked:function(fe){D=fe},setClear:function(fe,de,Be,It,jt){jt===!0&&(fe*=It,de*=It,Be*=It),le.set(fe,de,Be,It),Q.equals(le)===!1&&(n.clearColor(fe,de,Be,It),Q.copy(le))},reset:function(){D=!1,j=null,Q.set(-1,0,0,0)}}}function i(){let D=!1,le=!1,j=null,Q=null,fe=null;return{setReversed:function(de){if(le!==de){const Be=e.get("EXT_clip_control");le?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const It=fe;fe=null,this.setClear(It)}le=de},getReversed:function(){return le},setTest:function(de){de?B(n.DEPTH_TEST):q(n.DEPTH_TEST)},setMask:function(de){j!==de&&!D&&(n.depthMask(de),j=de)},setFunc:function(de){if(le&&(de=Ky[de]),Q!==de){switch(de){case Cl:n.depthFunc(n.NEVER);break;case Il:n.depthFunc(n.ALWAYS);break;case Ll:n.depthFunc(n.LESS);break;case Sr:n.depthFunc(n.LEQUAL);break;case Pl:n.depthFunc(n.EQUAL);break;case Dl:n.depthFunc(n.GEQUAL);break;case Nl:n.depthFunc(n.GREATER);break;case Ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=de}},setLocked:function(de){D=de},setClear:function(de){fe!==de&&(le&&(de=1-de),n.clearDepth(de),fe=de)},reset:function(){D=!1,j=null,Q=null,fe=null,le=!1}}}function s(){let D=!1,le=null,j=null,Q=null,fe=null,de=null,Be=null,It=null,jt=null;return{setTest:function(pt){D||(pt?B(n.STENCIL_TEST):q(n.STENCIL_TEST))},setMask:function(pt){le!==pt&&!D&&(n.stencilMask(pt),le=pt)},setFunc:function(pt,Xn,_i){(j!==pt||Q!==Xn||fe!==_i)&&(n.stencilFunc(pt,Xn,_i),j=pt,Q=Xn,fe=_i)},setOp:function(pt,Xn,_i){(de!==pt||Be!==Xn||It!==_i)&&(n.stencilOp(pt,Xn,_i),de=pt,Be=Xn,It=_i)},setLocked:function(pt){D=pt},setClear:function(pt){jt!==pt&&(n.clearStencil(pt),jt=pt)},reset:function(){D=!1,le=null,j=null,Q=null,fe=null,de=null,Be=null,It=null,jt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,M=null,x=null,C=null,A=null,R=new Ae(0,0,0),I=0,w=!1,v=null,L=null,H=null,E=null,U=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec($)[1]),X=Y>=1):$.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=Y>=2);let oe=null,pe={};const Te=n.getParameter(n.SCISSOR_BOX),Xe=n.getParameter(n.VIEWPORT),st=new lt().fromArray(Te),K=new lt().fromArray(Xe);function se(D,le,j,Q){const fe=new Uint8Array(4),de=n.createTexture();n.bindTexture(D,de),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<j;Be++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(le+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return de}const ye={};ye[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(n.DEPTH_TEST),o.setFunc(Sr),je(!1),Ye(Gd),B(n.CULL_FACE),N(rs);function B(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function q(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function ve(D,le){return d[D]!==le?(n.bindFramebuffer(D,le),d[D]=le,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=le),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Re(D,le){let j=f,Q=!1;if(D){j=u.get(le),j===void 0&&(j=[],u.set(le,j));const fe=D.textures;if(j.length!==fe.length||j[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Be=fe.length;de<Be;de++)j[de]=n.COLOR_ATTACHMENT0+de;j.length=fe.length,Q=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,Q=!0);Q&&n.drawBuffers(j)}function at(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const De={[Cs]:n.FUNC_ADD,[Ym]:n.FUNC_SUBTRACT,[Km]:n.FUNC_REVERSE_SUBTRACT};De[Zm]=n.MIN,De[Jm]=n.MAX;const _t={[Qm]:n.ZERO,[eg]:n.ONE,[tg]:n.SRC_COLOR,[Al]:n.SRC_ALPHA,[ag]:n.SRC_ALPHA_SATURATE,[rg]:n.DST_COLOR,[ig]:n.DST_ALPHA,[ng]:n.ONE_MINUS_SRC_COLOR,[Rl]:n.ONE_MINUS_SRC_ALPHA,[og]:n.ONE_MINUS_DST_COLOR,[sg]:n.ONE_MINUS_DST_ALPHA,[cg]:n.CONSTANT_COLOR,[lg]:n.ONE_MINUS_CONSTANT_COLOR,[hg]:n.CONSTANT_ALPHA,[dg]:n.ONE_MINUS_CONSTANT_ALPHA};function N(D,le,j,Q,fe,de,Be,It,jt,pt){if(D===rs){_===!0&&(q(n.BLEND),_=!1);return}if(_===!1&&(B(n.BLEND),_=!0),D!==jm){if(D!==m||pt!==w){if((p!==Cs||x!==Cs)&&(n.blendEquation(n.FUNC_ADD),p=Cs,x=Cs),pt)switch(D){case _r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ba:n.blendFunc(n.ONE,n.ONE);break;case Wd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case _r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ba:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,M=null,C=null,A=null,R.set(0,0,0),I=0,m=D,w=pt}return}fe=fe||le,de=de||j,Be=Be||Q,(le!==p||fe!==x)&&(n.blendEquationSeparate(De[le],De[fe]),p=le,x=fe),(j!==b||Q!==M||de!==C||Be!==A)&&(n.blendFuncSeparate(_t[j],_t[Q],_t[de],_t[Be]),b=j,M=Q,C=de,A=Be),(It.equals(R)===!1||jt!==I)&&(n.blendColor(It.r,It.g,It.b,jt),R.copy(It),I=jt),m=D,w=!1}function qt(D,le){D.side===di?q(n.CULL_FACE):B(n.CULL_FACE);let j=D.side===yn;le&&(j=!j),je(j),D.blending===_r&&D.transparent===!1?N(rs):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const Q=D.stencilWrite;a.setTest(Q),Q&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),St(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):q(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(D){v!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),v=D)}function Ye(D){D!==$m?(B(n.CULL_FACE),D!==L&&(D===Gd?n.cullFace(n.BACK):D===qm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):q(n.CULL_FACE),L=D}function Ie(D){D!==H&&(X&&n.lineWidth(D),H=D)}function St(D,le,j){D?(B(n.POLYGON_OFFSET_FILL),(E!==le||U!==j)&&(n.polygonOffset(le,j),E=le,U=j)):q(n.POLYGON_OFFSET_FILL)}function Ce(D){D?B(n.SCISSOR_TEST):q(n.SCISSOR_TEST)}function T(D){D===void 0&&(D=n.TEXTURE0+z-1),oe!==D&&(n.activeTexture(D),oe=D)}function y(D,le,j){j===void 0&&(oe===null?j=n.TEXTURE0+z-1:j=oe);let Q=pe[j];Q===void 0&&(Q={type:void 0,texture:void 0},pe[j]=Q),(Q.type!==D||Q.texture!==le)&&(oe!==j&&(n.activeTexture(j),oe=j),n.bindTexture(D,le||ye[D]),Q.type=D,Q.texture=le)}function O(){const D=pe[oe];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(D){st.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),st.copy(D))}function _e(D){K.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function Ke(D,le){let j=l.get(le);j===void 0&&(j=new WeakMap,l.set(le,j));let Q=j.get(D);Q===void 0&&(Q=n.getUniformBlockIndex(le,D.name),j.set(D,Q))}function Ve(D,le){const Q=l.get(le).get(D);c.get(le)!==Q&&(n.uniformBlockBinding(le,Q,D.__bindingPointIndex),c.set(le,Q))}function Mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},oe=null,pe={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,M=null,x=null,C=null,A=null,R=new Ae(0,0,0),I=0,w=!1,v=null,L=null,H=null,E=null,U=null,st.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:q,bindFramebuffer:ve,drawBuffers:Re,useProgram:at,setBlending:N,setMaterial:qt,setFlipSided:je,setCullFace:Ye,setLineWidth:Ie,setPolygonOffset:St,setScissorTest:Ce,activeTexture:T,bindTexture:y,unbindTexture:O,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:ge,texImage3D:Pe,updateUBOMapping:Ke,uniformBlockBinding:Ve,texStorage2D:et,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:we,compressedTexSubImage2D:he,compressedTexSubImage3D:me,scissor:Ne,viewport:_e,reset:Mt}}function zu(n,e,t,i){const s=Jy(i);switch(t){case Bf:return n*e;case Hf:return n*e;case Vf:return n*e*2;case qh:return n*e/s.components*s.byteLength;case jh:return n*e/s.components*s.byteLength;case Gf:return n*e*2/s.components*s.byteLength;case Yh:return n*e*2/s.components*s.byteLength;case zf:return n*e*3/s.components*s.byteLength;case Bn:return n*e*4/s.components*s.byteLength;case Kh:return n*e*4/s.components*s.byteLength;case ba:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wa:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bl:case Hl:return Math.max(n,16)*Math.max(e,8)/4;case Ol:case zl:return Math.max(n,8)*Math.max(e,8)/2;case Vl:case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case eh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case th:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case nh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ih:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ta:case rh:case oh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wf:case ah:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ch:case lh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jy(n){switch(n){case Ui:case kf:return{byteLength:1,components:1};case vo:case Ff:case Or:return{byteLength:2,components:1};case Xh:case $h:return{byteLength:2,components:4};case ks:case Wh:case si:return{byteLength:4,components:1};case Of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Qy(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Le,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return f?new OffscreenCanvas(T,y):bo("canvas")}function _(T,y,O){let J=1;const te=Ce(T);if((te.width>O||te.height>O)&&(J=O/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(J*te.width),we=Math.floor(J*te.height);d===void 0&&(d=g(Z,we));const he=y?g(Z,we):d;return he.width=Z,he.height=we,he.getContext("2d").drawImage(T,0,0,Z,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+we+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,y,O,J,te=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=y;if(y===n.RED&&(O===n.FLOAT&&(Z=n.R32F),O===n.HALF_FLOAT&&(Z=n.R16F),O===n.UNSIGNED_BYTE&&(Z=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.R8UI),O===n.UNSIGNED_SHORT&&(Z=n.R16UI),O===n.UNSIGNED_INT&&(Z=n.R32UI),O===n.BYTE&&(Z=n.R8I),O===n.SHORT&&(Z=n.R16I),O===n.INT&&(Z=n.R32I)),y===n.RG&&(O===n.FLOAT&&(Z=n.RG32F),O===n.HALF_FLOAT&&(Z=n.RG16F),O===n.UNSIGNED_BYTE&&(Z=n.RG8)),y===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RG8UI),O===n.UNSIGNED_SHORT&&(Z=n.RG16UI),O===n.UNSIGNED_INT&&(Z=n.RG32UI),O===n.BYTE&&(Z=n.RG8I),O===n.SHORT&&(Z=n.RG16I),O===n.INT&&(Z=n.RG32I)),y===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),O===n.UNSIGNED_INT&&(Z=n.RGB32UI),O===n.BYTE&&(Z=n.RGB8I),O===n.SHORT&&(Z=n.RGB16I),O===n.INT&&(Z=n.RGB32I)),y===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),O===n.UNSIGNED_INT&&(Z=n.RGBA32UI),O===n.BYTE&&(Z=n.RGBA8I),O===n.SHORT&&(Z=n.RGBA16I),O===n.INT&&(Z=n.RGBA32I)),y===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),y===n.RGBA){const we=te?rc:qe.getTransfer(J);O===n.FLOAT&&(Z=n.RGBA32F),O===n.HALF_FLOAT&&(Z=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Z=we===xt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(T,y){let O;return T?y===null||y===ks||y===Ar?O=n.DEPTH24_STENCIL8:y===si?O=n.DEPTH32F_STENCIL8:y===vo&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ks||y===Ar?O=n.DEPTH_COMPONENT24:y===si?O=n.DEPTH_COMPONENT32F:y===vo&&(O=n.DEPTH_COMPONENT16),O}function C(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Gt&&T.minFilter!==An?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){const y=T.target;y.removeEventListener("dispose",A),I(y),y.isVideoTexture&&h.delete(y)}function R(T){const y=T.target;y.removeEventListener("dispose",R),v(y)}function I(T){const y=i.get(T);if(y.__webglInit===void 0)return;const O=T.source,J=u.get(O);if(J){const te=J[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(T),Object.keys(J).length===0&&u.delete(O)}i.remove(T)}function w(T){const y=i.get(T);n.deleteTexture(y.__webglTexture);const O=T.source,J=u.get(O);delete J[y.__cacheKey],o.memory.textures--}function v(T){const y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let te=0;te<y.__webglFramebuffer[J].length;te++)n.deleteFramebuffer(y.__webglFramebuffer[J][te]);else n.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)n.deleteFramebuffer(y.__webglFramebuffer[J]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=T.textures;for(let J=0,te=O.length;J<te;J++){const Z=i.get(O[J]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(O[J])}i.remove(T)}let L=0;function H(){L=0}function E(){const T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function U(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function z(T,y){const O=i.get(T);if(T.isVideoTexture&&Ie(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(O,T,y);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function X(T,y){const O=i.get(T);if(T.version>0&&O.__version!==T.version){K(O,T,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function Y(T,y){const O=i.get(T);if(T.version>0&&O.__version!==T.version){K(O,T,y);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function $(T,y){const O=i.get(T);if(T.version>0&&O.__version!==T.version){se(O,T,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}const oe={[Tr]:n.REPEAT,[ts]:n.CLAMP_TO_EDGE,[za]:n.MIRRORED_REPEAT},pe={[Gt]:n.NEAREST,[Uf]:n.NEAREST_MIPMAP_NEAREST,[ao]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[Ma]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},Te={[Cg]:n.NEVER,[Ug]:n.ALWAYS,[Ig]:n.LESS,[qf]:n.LEQUAL,[Lg]:n.EQUAL,[Ng]:n.GEQUAL,[Pg]:n.GREATER,[Dg]:n.NOTEQUAL};function Xe(T,y){if(y.type===si&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===An||y.magFilter===Ma||y.magFilter===ao||y.magFilter===Ci||y.minFilter===An||y.minFilter===Ma||y.minFilter===ao||y.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,oe[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,oe[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,oe[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,pe[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,pe[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Te[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Gt||y.minFilter!==ao&&y.minFilter!==Ci||y.type===si&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function st(T,y){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));const J=y.source;let te=u.get(J);te===void 0&&(te={},u.set(J,te));const Z=U(y);if(Z!==T.__cacheKey){te[Z]===void 0&&(te[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),te[Z].usedTimes++;const we=te[T.__cacheKey];we!==void 0&&(te[T.__cacheKey].usedTimes--,we.usedTimes===0&&w(y)),T.__cacheKey=Z,T.__webglTexture=te[Z].texture}return O}function K(T,y,O){let J=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=n.TEXTURE_3D);const te=st(T,y),Z=y.source;t.bindTexture(J,T.__webglTexture,n.TEXTURE0+O);const we=i.get(Z);if(Z.version!==we.__version||te===!0){t.activeTexture(n.TEXTURE0+O);const he=qe.getPrimaries(qe.workingColorSpace),me=y.colorSpace===es?null:qe.getPrimaries(y.colorSpace),et=y.colorSpace===es||he===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ie=_(y.image,!1,s.maxTextureSize);ie=St(y,ie);const ge=r.convert(y.format,y.colorSpace),Pe=r.convert(y.type);let Ne=M(y.internalFormat,ge,Pe,y.colorSpace,y.isVideoTexture);Xe(J,y);let _e;const Ke=y.mipmaps,Ve=y.isVideoTexture!==!0,Mt=we.__version===void 0||te===!0,D=Z.dataReady,le=C(y,ie);if(y.isDepthTexture)Ne=x(y.format===Rr,y.type),Mt&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Ne,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ie.width,ie.height,0,ge,Pe,null));else if(y.isDataTexture)if(Ke.length>0){Ve&&Mt&&t.texStorage2D(n.TEXTURE_2D,le,Ne,Ke[0].width,Ke[0].height);for(let j=0,Q=Ke.length;j<Q;j++)_e=Ke[j],Ve?D&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,_e.width,_e.height,ge,Pe,_e.data):t.texImage2D(n.TEXTURE_2D,j,Ne,_e.width,_e.height,0,ge,Pe,_e.data);y.generateMipmaps=!1}else Ve?(Mt&&t.texStorage2D(n.TEXTURE_2D,le,Ne,ie.width,ie.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,ge,Pe,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,ie.width,ie.height,0,ge,Pe,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ve&&Mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Ne,Ke[0].width,Ke[0].height,ie.depth);for(let j=0,Q=Ke.length;j<Q;j++)if(_e=Ke[j],y.format!==Bn)if(ge!==null)if(Ve){if(D)if(y.layerUpdates.size>0){const fe=zu(_e.width,_e.height,y.format,y.type);for(const de of y.layerUpdates){const Be=_e.data.subarray(de*fe/_e.data.BYTES_PER_ELEMENT,(de+1)*fe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,de,_e.width,_e.height,1,ge,Be)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,ie.depth,ge,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Ne,_e.width,_e.height,ie.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,ie.depth,ge,Pe,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Ne,_e.width,_e.height,ie.depth,0,ge,Pe,_e.data)}else{Ve&&Mt&&t.texStorage2D(n.TEXTURE_2D,le,Ne,Ke[0].width,Ke[0].height);for(let j=0,Q=Ke.length;j<Q;j++)_e=Ke[j],y.format!==Bn?ge!==null?Ve?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Ne,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?D&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,_e.width,_e.height,ge,Pe,_e.data):t.texImage2D(n.TEXTURE_2D,j,Ne,_e.width,_e.height,0,ge,Pe,_e.data)}else if(y.isDataArrayTexture)if(Ve){if(Mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Ne,ie.width,ie.height,ie.depth),D)if(y.layerUpdates.size>0){const j=zu(ie.width,ie.height,y.format,y.type);for(const Q of y.layerUpdates){const fe=ie.data.subarray(Q*j/ie.data.BYTES_PER_ELEMENT,(Q+1)*j/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,ge,Pe,fe)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Pe,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ie.width,ie.height,ie.depth,0,ge,Pe,ie.data);else if(y.isData3DTexture)Ve?(Mt&&t.texStorage3D(n.TEXTURE_3D,le,Ne,ie.width,ie.height,ie.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Pe,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ie.width,ie.height,ie.depth,0,ge,Pe,ie.data);else if(y.isFramebufferTexture){if(Mt)if(Ve)t.texStorage2D(n.TEXTURE_2D,le,Ne,ie.width,ie.height);else{let j=ie.width,Q=ie.height;for(let fe=0;fe<le;fe++)t.texImage2D(n.TEXTURE_2D,fe,Ne,j,Q,0,ge,Pe,null),j>>=1,Q>>=1}}else if(Ke.length>0){if(Ve&&Mt){const j=Ce(Ke[0]);t.texStorage2D(n.TEXTURE_2D,le,Ne,j.width,j.height)}for(let j=0,Q=Ke.length;j<Q;j++)_e=Ke[j],Ve?D&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ge,Pe,_e):t.texImage2D(n.TEXTURE_2D,j,Ne,ge,Pe,_e);y.generateMipmaps=!1}else if(Ve){if(Mt){const j=Ce(ie);t.texStorage2D(n.TEXTURE_2D,le,Ne,j.width,j.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Pe,ie)}else t.texImage2D(n.TEXTURE_2D,0,Ne,ge,Pe,ie);m(y)&&p(J),we.__version=Z.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function se(T,y,O){if(y.image.length!==6)return;const J=st(T,y),te=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+O);const Z=i.get(te);if(te.version!==Z.__version||J===!0){t.activeTexture(n.TEXTURE0+O);const we=qe.getPrimaries(qe.workingColorSpace),he=y.colorSpace===es?null:qe.getPrimaries(y.colorSpace),me=y.colorSpace===es||we===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const et=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,ge=[];for(let Q=0;Q<6;Q++)!et&&!ie?ge[Q]=_(y.image[Q],!0,s.maxCubemapSize):ge[Q]=ie?y.image[Q].image:y.image[Q],ge[Q]=St(y,ge[Q]);const Pe=ge[0],Ne=r.convert(y.format,y.colorSpace),_e=r.convert(y.type),Ke=M(y.internalFormat,Ne,_e,y.colorSpace),Ve=y.isVideoTexture!==!0,Mt=Z.__version===void 0||J===!0,D=te.dataReady;let le=C(y,Pe);Xe(n.TEXTURE_CUBE_MAP,y);let j;if(et){Ve&&Mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Ke,Pe.width,Pe.height);for(let Q=0;Q<6;Q++){j=ge[Q].mipmaps;for(let fe=0;fe<j.length;fe++){const de=j[fe];y.format!==Bn?Ne!==null?Ve?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,0,0,de.width,de.height,Ne,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,Ke,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,0,0,de.width,de.height,Ne,_e,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,Ke,de.width,de.height,0,Ne,_e,de.data)}}}else{if(j=y.mipmaps,Ve&&Mt){j.length>0&&le++;const Q=Ce(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Ke,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){Ve?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ge[Q].width,ge[Q].height,Ne,_e,ge[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ke,ge[Q].width,ge[Q].height,0,Ne,_e,ge[Q].data);for(let fe=0;fe<j.length;fe++){const Be=j[fe].image[Q].image;Ve?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,0,0,Be.width,Be.height,Ne,_e,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,Ke,Be.width,Be.height,0,Ne,_e,Be.data)}}else{Ve?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ne,_e,ge[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ke,Ne,_e,ge[Q]);for(let fe=0;fe<j.length;fe++){const de=j[fe];Ve?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,0,0,Ne,_e,de.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,Ke,Ne,_e,de.image[Q])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),Z.__version=te.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ye(T,y,O,J,te,Z){const we=r.convert(O.format,O.colorSpace),he=r.convert(O.type),me=M(O.internalFormat,we,he,O.colorSpace),et=i.get(y),ie=i.get(O);if(ie.__renderTarget=y,!et.__hasExternalTextures){const ge=Math.max(1,y.width>>Z),Pe=Math.max(1,y.height>>Z);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,me,ge,Pe,y.depth,0,we,he,null):t.texImage2D(te,Z,me,ge,Pe,0,we,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,te,ie.__webglTexture,0,je(y)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,te,ie.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function B(T,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){const J=y.depthTexture,te=J&&J.isDepthTexture?J.type:null,Z=x(y.stencilBuffer,te),we=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=je(y);Ye(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,Z,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,Z,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Z,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,T)}else{const J=y.textures;for(let te=0;te<J.length;te++){const Z=J[te],we=r.convert(Z.format,Z.colorSpace),he=r.convert(Z.type),me=M(Z.internalFormat,we,he,Z.colorSpace),et=je(y);O&&Ye(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,me,y.width,y.height):Ye(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,me,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,me,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function q(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(y.depthTexture);J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);const te=J.__webglTexture,Z=je(y);if(y.depthTexture.format===xr)Ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(y.depthTexture.format===Rr)Ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ve(T){const y=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){const te=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),y.__depthDisposeCallback=te}y.__boundDepthTexture=J}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");q(y.__webglFramebuffer,T)}else if(O){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=n.createRenderbuffer(),B(y.__webglDepthbuffer[J],T,!1);else{const te=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),B(y.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(T,y,O){const J=i.get(T);y!==void 0&&ye(J.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ve(T)}function at(T){const y=T.texture,O=i.get(T),J=i.get(y);T.addEventListener("dispose",R);const te=T.textures,Z=T.isWebGLCubeRenderTarget===!0,we=te.length>1;if(we||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=y.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let me=0;me<y.mipmaps.length;me++)O.__webglFramebuffer[he][me]=n.createFramebuffer()}else O.__webglFramebuffer[he]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<y.mipmaps.length;he++)O.__webglFramebuffer[he]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(we)for(let he=0,me=te.length;he<me;he++){const et=i.get(te[he]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&Ye(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){const me=te[he];O.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const et=r.convert(me.format,me.colorSpace),ie=r.convert(me.type),ge=M(me.internalFormat,et,ie,me.colorSpace,T.isXRRenderTarget===!0),Pe=je(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ge,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,O.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),B(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,y);for(let he=0;he<6;he++)if(y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)ye(O.__webglFramebuffer[he][me],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else ye(O.__webglFramebuffer[he],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let he=0,me=te.length;he<me;he++){const et=te[he],ie=i.get(et);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),Xe(n.TEXTURE_2D,et),ye(O.__webglFramebuffer,T,et,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),m(et)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,J.__webglTexture),Xe(he,y),y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)ye(O.__webglFramebuffer[me],T,y,n.COLOR_ATTACHMENT0,he,me);else ye(O.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,he,0);m(y)&&p(he),t.unbindTexture()}T.depthBuffer&&ve(T)}function De(T){const y=T.textures;for(let O=0,J=y.length;O<J;O++){const te=y[O];if(m(te)){const Z=b(T),we=i.get(te).__webglTexture;t.bindTexture(Z,we),p(Z),t.unbindTexture()}}}const _t=[],N=[];function qt(T){if(T.samples>0){if(Ye(T)===!1){const y=T.textures,O=T.width,J=T.height;let te=n.COLOR_BUFFER_BIT;const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(T),he=y.length>1;if(he)for(let me=0;me<y.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let me=0;me<y.length;me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[me]);const et=i.get(y[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,O,J,0,0,O,J,te,n.NEAREST),c===!0&&(_t.length=0,N.length=0,_t.push(n.COLOR_ATTACHMENT0+me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(_t.push(Z),N.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let me=0;me<y.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,we.__webglColorRenderbuffer[me]);const et=i.get(y[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function je(T){return Math.min(s.maxSamples,T.samples)}function Ye(T){const y=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ie(T){const y=o.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function St(T,y){const O=T.colorSpace,J=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==fn&&O!==es&&(qe.getTransfer(O)===xt?(J!==Bn||te!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Ce(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=E,this.resetTextureUnits=H,this.setTexture2D=z,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=Re,this.setupRenderTarget=at,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ye}function eM(n,e){function t(i,s=es){let r;const o=qe.getTransfer(s);if(i===Ui)return n.UNSIGNED_BYTE;if(i===Xh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$h)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Of)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kf)return n.BYTE;if(i===Ff)return n.SHORT;if(i===vo)return n.UNSIGNED_SHORT;if(i===Wh)return n.INT;if(i===ks)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===Or)return n.HALF_FLOAT;if(i===Bf)return n.ALPHA;if(i===zf)return n.RGB;if(i===Bn)return n.RGBA;if(i===Hf)return n.LUMINANCE;if(i===Vf)return n.LUMINANCE_ALPHA;if(i===xr)return n.DEPTH_COMPONENT;if(i===Rr)return n.DEPTH_STENCIL;if(i===qh)return n.RED;if(i===jh)return n.RED_INTEGER;if(i===Gf)return n.RG;if(i===Yh)return n.RG_INTEGER;if(i===Kh)return n.RGBA_INTEGER;if(i===ba||i===Sa||i===wa||i===Ea)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ol||i===Bl||i===zl||i===Hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vl||i===Gl||i===Wl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vl||i===Gl)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xl||i===$l||i===ql||i===jl||i===Yl||i===Kl||i===Zl||i===Jl||i===Ql||i===eh||i===th||i===nh||i===ih||i===sh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$l)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ql)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ql)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===th)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ih)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ta||i===rh||i===oh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ta)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wf||i===ah||i===ch||i===lh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ta)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ah)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ch)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class tM extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oe extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nM={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Oe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const iM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ot,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ki({vertexShader:iM,fragmentShader:sM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new Fi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oM extends Os{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const _=new rM,m=t.getContextAttributes();let p=null,b=null;const M=[],x=[],C=new Le;let A=null;const R=new ln;R.viewport=new lt;const I=new ln;I.viewport=new lt;const w=[R,I],v=new tM;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=M[K];return se===void 0&&(se=new Kc,M[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=M[K];return se===void 0&&(se=new Kc,M[K]=se),se.getGripSpace()},this.getHand=function(K){let se=M[K];return se===void 0&&(se=new Kc,M[K]=se),se.getHandSpace()};function E(K){const se=x.indexOf(K.inputSource);if(se===-1)return;const ye=M[se];ye!==void 0&&(ye.update(K.inputSource,K.frame,l||o),ye.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){s.removeEventListener("select",E),s.removeEventListener("selectstart",E),s.removeEventListener("selectend",E),s.removeEventListener("squeeze",E),s.removeEventListener("squeezestart",E),s.removeEventListener("squeezeend",E),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",z);for(let K=0;K<M.length;K++){const se=x[K];se!==null&&(x[K]=null,M[K].disconnect(se))}L=null,H=null,_.reset(),e.setRenderTarget(p),f=null,u=null,d=null,s=null,b=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",E),s.addEventListener("selectstart",E),s.addEventListener("selectend",E),s.addEventListener("squeeze",E),s.addEventListener("squeezestart",E),s.addEventListener("squeezeend",E),s.addEventListener("end",U),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ls(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,ye=null,B=null;m.depth&&(B=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?Rr:xr,ye=m.stencil?Ar:ks);const q={colorFormat:t.RGBA8,depthFormat:B,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(q),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new ls(u.textureWidth,u.textureHeight,{format:Bn,type:Ui,depthTexture:new op(u.textureWidth,u.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(K){for(let se=0;se<K.removed.length;se++){const ye=K.removed[se],B=x.indexOf(ye);B>=0&&(x[B]=null,M[B].disconnect(ye))}for(let se=0;se<K.added.length;se++){const ye=K.added[se];let B=x.indexOf(ye);if(B===-1){for(let ve=0;ve<M.length;ve++)if(ve>=x.length){x.push(ye),B=ve;break}else if(x[ve]===null){x[ve]=ye,B=ve;break}if(B===-1)break}const q=M[B];q&&q.connect(ye)}}const X=new P,Y=new P;function $(K,se,ye){X.setFromMatrixPosition(se.matrixWorld),Y.setFromMatrixPosition(ye.matrixWorld);const B=X.distanceTo(Y),q=se.projectionMatrix.elements,ve=ye.projectionMatrix.elements,Re=q[14]/(q[10]-1),at=q[14]/(q[10]+1),De=(q[9]+1)/q[5],_t=(q[9]-1)/q[5],N=(q[8]-1)/q[0],qt=(ve[8]+1)/ve[0],je=Re*N,Ye=Re*qt,Ie=B/(-N+qt),St=Ie*-N;if(se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(St),K.translateZ(Ie),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),q[10]===-1)K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Ce=Re+Ie,T=at+Ie,y=je-St,O=Ye+(B-St),J=De*at/T*Ce,te=_t*at/T*Ce;K.projectionMatrix.makePerspective(y,O,J,te,Ce,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let se=K.near,ye=K.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),v.near=I.near=R.near=se,v.far=I.far=R.far=ye,(L!==v.near||H!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),L=v.near,H=v.far),R.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,v.layers.mask=R.layers.mask|I.layers.mask;const B=K.parent,q=v.cameras;oe(v,B);for(let ve=0;ve<q.length;ve++)oe(q[ve],B);q.length===2?$(v,R,I):v.projectionMatrix.copy(R.projectionMatrix),pe(K,v,B)};function pe(K,se,ye){ye===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(ye.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Cr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Te=null;function Xe(K,se){if(h=se.getViewerPose(l||o),g=se,h!==null){const ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let B=!1;ye.length!==v.cameras.length&&(v.cameras.length=0,B=!0);for(let ve=0;ve<ye.length;ve++){const Re=ye[ve];let at=null;if(f!==null)at=f.getViewport(Re);else{const _t=d.getViewSubImage(u,Re);at=_t.viewport,ve===0&&(e.setRenderTargetTextures(b,_t.colorTexture,u.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(b))}let De=w[ve];De===void 0&&(De=new ln,De.layers.enable(ve),De.viewport=new lt,w[ve]=De),De.matrix.fromArray(Re.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Re.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(at.x,at.y,at.width,at.height),ve===0&&(v.matrix.copy(De.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),B===!0&&v.cameras.push(De)}const q=s.enabledFeatures;if(q&&q.includes("depth-sensing")){const ve=d.getDepthInformation(ye[0]);ve&&ve.isValid&&ve.texture&&_.init(e,ve,s.renderState)}}for(let ye=0;ye<M.length;ye++){const B=x[ye],q=M[ye];B!==null&&q!==void 0&&q.update(B,se,l||o)}Te&&Te(K,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const st=new rp;st.setAnimationLoop(Xe),this.setAnimationLoop=function(K){Te=K},this.dispose=function(){}}}const ys=new ai,aM=new Fe;function cM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,np(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===yn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===yn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),M=b.envMap,x=b.envMapRotation;M&&(m.envMap.value=M,ys.copy(x),ys.x*=-1,ys.y*=-1,ys.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),m.envMapRotation.value.setFromMatrix4(aM.makeRotationFromEuler(ys)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lM(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){const x=M.program;i.uniformBlockBinding(b,x)}function l(b,M){let x=s[b.id];x===void 0&&(g(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",m));const C=M.program;i.updateUBOMapping(b,C);const A=e.render.frame;r[b.id]!==A&&(u(b),r[b.id]=A)}function h(b){const M=d();b.__bindingPointIndex=M;const x=n.createBuffer(),C=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const M=s[b.id],x=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,R=x.length;A<R;A++){const I=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,v=I.length;w<v;w++){const L=I[w];if(f(L,A,w,C)===!0){const H=L.__offset,E=Array.isArray(L.value)?L.value:[L.value];let U=0;for(let z=0;z<E.length;z++){const X=E[z],Y=_(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,H+U,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,U),U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,M,x,C){const A=b.value,R=M+"_"+x;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const I=C[R];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return C[R]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(b){const M=b.uniforms;let x=0;const C=16;for(let R=0,I=M.length;R<I;R++){const w=Array.isArray(M[R])?M[R]:[M[R]];for(let v=0,L=w.length;v<L;v++){const H=w[v],E=Array.isArray(H.value)?H.value:[H.value];for(let U=0,z=E.length;U<z;U++){const X=E[U],Y=_(X),$=x%C,oe=$%Y.boundary,pe=$+oe;x+=oe,pe!==0&&C-pe<Y.storage&&(x+=C-pe),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=Y.storage}}}const A=x%C;return A>0&&(x+=C-A),b.__size=x,b.__cache={},this}function _(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class hM{constructor(e={}){const{canvas:t=Jg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=os,this.toneMappingExposure=1;const x=this;let C=!1,A=0,R=0,I=null,w=-1,v=null;const L=new lt,H=new lt;let E=null;const U=new Ae(0);let z=0,X=t.width,Y=t.height,$=1,oe=null,pe=null;const Te=new lt(0,0,X,Y),Xe=new lt(0,0,X,Y);let st=!1;const K=new ed;let se=!1,ye=!1;const B=new Fe,q=new Fe,ve=new P,Re=new lt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function _t(){return I===null?$:1}let N=i;function qt(S,k){return t.getContext(S,k)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vh}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",de,!1),N===null){const k="webgl2";if(N=qt(k,S),N===null)throw qt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let je,Ye,Ie,St,Ce,T,y,O,J,te,Z,we,he,me,et,ie,ge,Pe,Ne,_e,Ke,Ve,Mt,D;function le(){je=new mv(N),je.init(),Ve=new eM(N,je),Ye=new lv(N,je,e,Ve),Ie=new Zy(N,je),Ye.reverseDepthBuffer&&u&&Ie.buffers.depth.setReversed(!0),St=new xv(N),Ce=new ky,T=new Qy(N,je,Ie,Ce,Ye,Ve,St),y=new dv(x),O=new pv(x),J=new E0(N),Mt=new av(N,J),te=new gv(N,J,St,Mt),Z=new yv(N,te,J,St),Ne=new vv(N,Ye,T),ie=new hv(Ce),we=new Uy(x,y,O,je,Ye,Mt,ie),he=new cM(x,Ce),me=new Oy,et=new Wy(je),Pe=new ov(x,y,O,Ie,Z,f,c),ge=new Yy(x,Z,Ye),D=new lM(N,St,Ye,Ie),_e=new cv(N,je,St),Ke=new _v(N,je,St),St.programs=we.programs,x.capabilities=Ye,x.extensions=je,x.properties=Ce,x.renderLists=me,x.shadowMap=ge,x.state=Ie,x.info=St}le();const j=new oM(x,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(X,Y,!1))},this.getSize=function(S){return S.set(X,Y)},this.setSize=function(S,k,V=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,Y=k,t.width=Math.floor(S*$),t.height=Math.floor(k*$),V===!0&&(t.style.width=S+"px",t.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(X*$,Y*$).floor()},this.setDrawingBufferSize=function(S,k,V){X=S,Y=k,$=V,t.width=Math.floor(S*V),t.height=Math.floor(k*V),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(Te)},this.setViewport=function(S,k,V,G){S.isVector4?Te.set(S.x,S.y,S.z,S.w):Te.set(S,k,V,G),Ie.viewport(L.copy(Te).multiplyScalar($).round())},this.getScissor=function(S){return S.copy(Xe)},this.setScissor=function(S,k,V,G){S.isVector4?Xe.set(S.x,S.y,S.z,S.w):Xe.set(S,k,V,G),Ie.scissor(H.copy(Xe).multiplyScalar($).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(S){Ie.setScissorTest(st=S)},this.setOpaqueSort=function(S){oe=S},this.setTransparentSort=function(S){pe=S},this.getClearColor=function(S){return S.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(S=!0,k=!0,V=!0){let G=0;if(S){let F=!1;if(I!==null){const re=I.texture.format;F=re===Kh||re===Yh||re===jh}if(F){const re=I.texture.type,ue=re===Ui||re===ks||re===vo||re===Ar||re===Xh||re===$h,Me=Pe.getClearColor(),be=Pe.getClearAlpha(),ke=Me.r,ze=Me.g,Se=Me.b;ue?(g[0]=ke,g[1]=ze,g[2]=Se,g[3]=be,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=ke,_[1]=ze,_[2]=Se,_[3]=be,N.clearBufferiv(N.COLOR,0,_))}else G|=N.COLOR_BUFFER_BIT}k&&(G|=N.DEPTH_BUFFER_BIT),V&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),me.dispose(),et.dispose(),Ce.dispose(),y.dispose(),O.dispose(),Z.dispose(),Mt.dispose(),D.dispose(),we.dispose(),j.dispose(),j.removeEventListener("sessionstart",Ud),j.removeEventListener("sessionend",kd),ps.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const S=St.autoReset,k=ge.enabled,V=ge.autoUpdate,G=ge.needsUpdate,F=ge.type;le(),St.autoReset=S,ge.enabled=k,ge.autoUpdate=V,ge.needsUpdate=G,ge.type=F}function de(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Be(S){const k=S.target;k.removeEventListener("dispose",Be),It(k)}function It(S){jt(S),Ce.remove(S)}function jt(S){const k=Ce.get(S).programs;k!==void 0&&(k.forEach(function(V){we.releaseProgram(V)}),S.isShaderMaterial&&we.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,V,G,F,re){k===null&&(k=at);const ue=F.isMesh&&F.matrixWorld.determinant()<0,Me=Gm(S,k,V,G,F);Ie.setMaterial(G,ue);let be=V.index,ke=1;if(G.wireframe===!0){if(be=te.getWireframeAttribute(V),be===void 0)return;ke=2}const ze=V.drawRange,Se=V.attributes.position;let rt=ze.start*ke,bt=(ze.start+ze.count)*ke;re!==null&&(rt=Math.max(rt,re.start*ke),bt=Math.min(bt,(re.start+re.count)*ke)),be!==null?(rt=Math.max(rt,0),bt=Math.min(bt,be.count)):Se!=null&&(rt=Math.max(rt,0),bt=Math.min(bt,Se.count));const wt=bt-rt;if(wt<0||wt===1/0)return;Mt.setup(F,G,Me,V,be);let pn,ht=_e;if(be!==null&&(pn=J.get(be),ht=Ke,ht.setIndex(pn)),F.isMesh)G.wireframe===!0?(Ie.setLineWidth(G.wireframeLinewidth*_t()),ht.setMode(N.LINES)):ht.setMode(N.TRIANGLES);else if(F.isLine){let Ee=G.linewidth;Ee===void 0&&(Ee=1),Ie.setLineWidth(Ee*_t()),F.isLineSegments?ht.setMode(N.LINES):F.isLineLoop?ht.setMode(N.LINE_LOOP):ht.setMode(N.LINE_STRIP)}else F.isPoints?ht.setMode(N.POINTS):F.isSprite&&ht.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ht.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))ht.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ee=F._multiDrawStarts,xi=F._multiDrawCounts,dt=F._multiDrawCount,$n=be?J.get(be).bytesPerElement:1,Bs=Ce.get(G).currentProgram.getUniforms();for(let bn=0;bn<dt;bn++)Bs.setValue(N,"_gl_DrawID",bn),ht.render(Ee[bn]/$n,xi[bn])}else if(F.isInstancedMesh)ht.renderInstances(rt,wt,F.count);else if(V.isInstancedBufferGeometry){const Ee=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,xi=Math.min(V.instanceCount,Ee);ht.renderInstances(rt,wt,xi)}else ht.render(rt,wt)};function pt(S,k,V){S.transparent===!0&&S.side===di&&S.forceSinglePass===!1?(S.side=yn,S.needsUpdate=!0,Fo(S,k,V),S.side=Ni,S.needsUpdate=!0,Fo(S,k,V),S.side=di):Fo(S,k,V)}this.compile=function(S,k,V=null){V===null&&(V=S),p=et.get(V),p.init(k),M.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==V&&S.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const G=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const re=F.material;if(re)if(Array.isArray(re))for(let ue=0;ue<re.length;ue++){const Me=re[ue];pt(Me,V,F),G.add(Me)}else pt(re,V,F),G.add(re)}),M.pop(),p=null,G},this.compileAsync=function(S,k,V=null){const G=this.compile(S,k,V);return new Promise(F=>{function re(){if(G.forEach(function(ue){Ce.get(ue).currentProgram.isReady()&&G.delete(ue)}),G.size===0){F(S);return}setTimeout(re,10)}je.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Xn=null;function _i(S){Xn&&Xn(S)}function Ud(){ps.stop()}function kd(){ps.start()}const ps=new rp;ps.setAnimationLoop(_i),typeof self<"u"&&ps.setContext(self),this.setAnimationLoop=function(S){Xn=S,j.setAnimationLoop(S),S===null?ps.stop():ps.start()},j.addEventListener("sessionstart",Ud),j.addEventListener("sessionend",kd),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,k,I),p=et.get(S,M.length),p.init(k),M.push(p),q.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix(q),ye=this.localClippingEnabled,se=ie.init(this.clippingPlanes,ye),m=me.get(S,b.length),m.init(),b.push(m),j.enabled===!0&&j.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&bc(re,k,-1/0,x.sortObjects)}bc(S,k,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(oe,pe),De=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,De&&Pe.addToRenderList(m,S),this.info.render.frame++,se===!0&&ie.beginShadows();const V=p.state.shadowsArray;ge.render(V,S,k),se===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(p.setupLights(),k.isArrayCamera){const re=k.cameras;if(F.length>0)for(let ue=0,Me=re.length;ue<Me;ue++){const be=re[ue];Od(G,F,S,be)}De&&Pe.render(S);for(let ue=0,Me=re.length;ue<Me;ue++){const be=re[ue];Fd(m,S,be,be.viewport)}}else F.length>0&&Od(G,F,S,k),De&&Pe.render(S),Fd(m,S,k);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(x,S,k),Mt.resetDefaultState(),w=-1,v=null,M.pop(),M.length>0?(p=M[M.length-1],se===!0&&ie.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function bc(S,k,V,G){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){G&&Re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(q);const ue=Z.update(S),Me=S.material;Me.visible&&m.push(S,ue,Me,V,Re.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){const ue=Z.update(S),Me=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Re.copy(S.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Re.copy(ue.boundingSphere.center)),Re.applyMatrix4(S.matrixWorld).applyMatrix4(q)),Array.isArray(Me)){const be=ue.groups;for(let ke=0,ze=be.length;ke<ze;ke++){const Se=be[ke],rt=Me[Se.materialIndex];rt&&rt.visible&&m.push(S,ue,rt,V,Re.z,Se)}}else Me.visible&&m.push(S,ue,Me,V,Re.z,null)}}const re=S.children;for(let ue=0,Me=re.length;ue<Me;ue++)bc(re[ue],k,V,G)}function Fd(S,k,V,G){const F=S.opaque,re=S.transmissive,ue=S.transparent;p.setupLightsView(V),se===!0&&ie.setGlobalState(x.clippingPlanes,V),G&&Ie.viewport(L.copy(G)),F.length>0&&ko(F,k,V),re.length>0&&ko(re,k,V),ue.length>0&&ko(ue,k,V),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Od(S,k,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new ls(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Or:Ui,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const re=p.state.transmissionRenderTarget[G.id],ue=G.viewport||L;re.setSize(ue.z,ue.w);const Me=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(U),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),De&&Pe.render(V);const be=x.toneMapping;x.toneMapping=os;const ke=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),se===!0&&ie.setGlobalState(x.clippingPlanes,G),ko(S,V,G),T.updateMultisampleRenderTarget(re),T.updateRenderTargetMipmap(re),je.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Se=0,rt=k.length;Se<rt;Se++){const bt=k[Se],wt=bt.object,pn=bt.geometry,ht=bt.material,Ee=bt.group;if(ht.side===di&&wt.layers.test(G.layers)){const xi=ht.side;ht.side=yn,ht.needsUpdate=!0,Bd(wt,V,G,pn,ht,Ee),ht.side=xi,ht.needsUpdate=!0,ze=!0}}ze===!0&&(T.updateMultisampleRenderTarget(re),T.updateRenderTargetMipmap(re))}x.setRenderTarget(Me),x.setClearColor(U,z),ke!==void 0&&(G.viewport=ke),x.toneMapping=be}function ko(S,k,V){const G=k.isScene===!0?k.overrideMaterial:null;for(let F=0,re=S.length;F<re;F++){const ue=S[F],Me=ue.object,be=ue.geometry,ke=G===null?ue.material:G,ze=ue.group;Me.layers.test(V.layers)&&Bd(Me,k,V,be,ke,ze)}}function Bd(S,k,V,G,F,re){S.onBeforeRender(x,k,V,G,F,re),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(x,k,V,G,S,re),F.transparent===!0&&F.side===di&&F.forceSinglePass===!1?(F.side=yn,F.needsUpdate=!0,x.renderBufferDirect(V,k,G,F,S,re),F.side=Ni,F.needsUpdate=!0,x.renderBufferDirect(V,k,G,F,S,re),F.side=di):x.renderBufferDirect(V,k,G,F,S,re),S.onAfterRender(x,k,V,G,F,re)}function Fo(S,k,V){k.isScene!==!0&&(k=at);const G=Ce.get(S),F=p.state.lights,re=p.state.shadowsArray,ue=F.state.version,Me=we.getParameters(S,F.state,re,k,V),be=we.getProgramCacheKey(Me);let ke=G.programs;G.environment=S.isMeshStandardMaterial?k.environment:null,G.fog=k.fog,G.envMap=(S.isMeshStandardMaterial?O:y).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,ke===void 0&&(S.addEventListener("dispose",Be),ke=new Map,G.programs=ke);let ze=ke.get(be);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===ue)return Hd(S,Me),ze}else Me.uniforms=we.getUniforms(S),S.onBeforeCompile(Me,x),ze=we.acquireProgram(Me,be),ke.set(be,ze),G.uniforms=Me.uniforms;const Se=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Se.clippingPlanes=ie.uniform),Hd(S,Me),G.needsLights=Xm(S),G.lightsStateVersion=ue,G.needsLights&&(Se.ambientLightColor.value=F.state.ambient,Se.lightProbe.value=F.state.probe,Se.directionalLights.value=F.state.directional,Se.directionalLightShadows.value=F.state.directionalShadow,Se.spotLights.value=F.state.spot,Se.spotLightShadows.value=F.state.spotShadow,Se.rectAreaLights.value=F.state.rectArea,Se.ltc_1.value=F.state.rectAreaLTC1,Se.ltc_2.value=F.state.rectAreaLTC2,Se.pointLights.value=F.state.point,Se.pointLightShadows.value=F.state.pointShadow,Se.hemisphereLights.value=F.state.hemi,Se.directionalShadowMap.value=F.state.directionalShadowMap,Se.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Se.spotShadowMap.value=F.state.spotShadowMap,Se.spotLightMatrix.value=F.state.spotLightMatrix,Se.spotLightMap.value=F.state.spotLightMap,Se.pointShadowMap.value=F.state.pointShadowMap,Se.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function zd(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=Aa.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function Hd(S,k){const V=Ce.get(S);V.outputColorSpace=k.outputColorSpace,V.batching=k.batching,V.batchingColor=k.batchingColor,V.instancing=k.instancing,V.instancingColor=k.instancingColor,V.instancingMorph=k.instancingMorph,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function Gm(S,k,V,G,F){k.isScene!==!0&&(k=at),T.resetTextureUnits();const re=k.fog,ue=G.isMeshStandardMaterial?k.environment:null,Me=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:fn,be=(G.isMeshStandardMaterial?O:y).get(G.envMap||ue),ke=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Se=!!V.morphAttributes.position,rt=!!V.morphAttributes.normal,bt=!!V.morphAttributes.color;let wt=os;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(wt=x.toneMapping);const pn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ht=pn!==void 0?pn.length:0,Ee=Ce.get(G),xi=p.state.lights;if(se===!0&&(ye===!0||S!==v)){const Nn=S===v&&G.id===w;ie.setState(G,S,Nn)}let dt=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==xi.state.version||Ee.outputColorSpace!==Me||F.isBatchedMesh&&Ee.batching===!1||!F.isBatchedMesh&&Ee.batching===!0||F.isBatchedMesh&&Ee.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ee.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ee.instancing===!1||!F.isInstancedMesh&&Ee.instancing===!0||F.isSkinnedMesh&&Ee.skinning===!1||!F.isSkinnedMesh&&Ee.skinning===!0||F.isInstancedMesh&&Ee.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ee.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ee.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ee.instancingMorph===!1&&F.morphTexture!==null||Ee.envMap!==be||G.fog===!0&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ie.numPlanes||Ee.numIntersection!==ie.numIntersection)||Ee.vertexAlphas!==ke||Ee.vertexTangents!==ze||Ee.morphTargets!==Se||Ee.morphNormals!==rt||Ee.morphColors!==bt||Ee.toneMapping!==wt||Ee.morphTargetsCount!==ht)&&(dt=!0):(dt=!0,Ee.__version=G.version);let $n=Ee.currentProgram;dt===!0&&($n=Fo(G,k,F));let Bs=!1,bn=!1,$r=!1;const Et=$n.getUniforms(),li=Ee.uniforms;if(Ie.useProgram($n.program)&&(Bs=!0,bn=!0,$r=!0),G.id!==w&&(w=G.id,bn=!0),Bs||v!==S){Ie.buffers.depth.getReversed()?(B.copy(S.projectionMatrix),e0(B),t0(B),Et.setValue(N,"projectionMatrix",B)):Et.setValue(N,"projectionMatrix",S.projectionMatrix),Et.setValue(N,"viewMatrix",S.matrixWorldInverse);const Hi=Et.map.cameraPosition;Hi!==void 0&&Hi.setValue(N,ve.setFromMatrixPosition(S.matrixWorld)),Ye.logarithmicDepthBuffer&&Et.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Et.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,bn=!0,$r=!0)}if(F.isSkinnedMesh){Et.setOptional(N,F,"bindMatrix"),Et.setOptional(N,F,"bindMatrixInverse");const Nn=F.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Et.setValue(N,"boneTexture",Nn.boneTexture,T))}F.isBatchedMesh&&(Et.setOptional(N,F,"batchingTexture"),Et.setValue(N,"batchingTexture",F._matricesTexture,T),Et.setOptional(N,F,"batchingIdTexture"),Et.setValue(N,"batchingIdTexture",F._indirectTexture,T),Et.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&Et.setValue(N,"batchingColorTexture",F._colorsTexture,T));const qr=V.morphAttributes;if((qr.position!==void 0||qr.normal!==void 0||qr.color!==void 0)&&Ne.update(F,V,$n),(bn||Ee.receiveShadow!==F.receiveShadow)&&(Ee.receiveShadow=F.receiveShadow,Et.setValue(N,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(li.envMap.value=be,li.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&k.environment!==null&&(li.envMapIntensity.value=k.environmentIntensity),bn&&(Et.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ee.needsLights&&Wm(li,$r),re&&G.fog===!0&&he.refreshFogUniforms(li,re),he.refreshMaterialUniforms(li,G,$,Y,p.state.transmissionRenderTarget[S.id]),Aa.upload(N,zd(Ee),li,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Aa.upload(N,zd(Ee),li,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Et.setValue(N,"center",F.center),Et.setValue(N,"modelViewMatrix",F.modelViewMatrix),Et.setValue(N,"normalMatrix",F.normalMatrix),Et.setValue(N,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Nn=G.uniformsGroups;for(let Hi=0,Vi=Nn.length;Hi<Vi;Hi++){const Vd=Nn[Hi];D.update(Vd,$n),D.bind(Vd,$n)}}return $n}function Wm(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function Xm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,k,V){Ce.get(S.texture).__webglTexture=k,Ce.get(S.depthTexture).__webglTexture=V;const G=Ce.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,k){const V=Ce.get(S);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,V=0){I=S,A=k,R=V;let G=!0,F=null,re=!1,ue=!1;if(S){const be=Ce.get(S);if(be.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(be.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(be.__hasExternalTextures)T.rebindTextures(S,Ce.get(S.texture).__webglTexture,Ce.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Se=S.depthTexture;if(be.__boundDepthTexture!==Se){if(Se!==null&&Ce.has(Se)&&(S.width!==Se.image.width||S.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const ke=S.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ue=!0);const ze=Ce.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ze[k])?F=ze[k][V]:F=ze[k],re=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?F=Ce.get(S).__webglMultisampledFramebuffer:Array.isArray(ze)?F=ze[V]:F=ze,L.copy(S.viewport),H.copy(S.scissor),E=S.scissorTest}else L.copy(Te).multiplyScalar($).floor(),H.copy(Xe).multiplyScalar($).floor(),E=st;if(Ie.bindFramebuffer(N.FRAMEBUFFER,F)&&G&&Ie.drawBuffers(S,F),Ie.viewport(L),Ie.scissor(H),Ie.setScissorTest(E),re){const be=Ce.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,V)}else if(ue){const be=Ce.get(S.texture),ke=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.__webglTexture,V||0,ke)}w=-1},this.readRenderTargetPixels=function(S,k,V,G,F,re,ue){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(Me=Me[ue]),Me){Ie.bindFramebuffer(N.FRAMEBUFFER,Me);try{const be=S.texture,ke=be.format,ze=be.type;if(!Ye.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-G&&V>=0&&V<=S.height-F&&N.readPixels(k,V,G,F,Ve.convert(ke),Ve.convert(ze),re)}finally{const be=I!==null?Ce.get(I).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(S,k,V,G,F,re,ue){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(Me=Me[ue]),Me){const be=S.texture,ke=be.format,ze=be.type;if(!Ye.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=S.width-G&&V>=0&&V<=S.height-F){Ie.bindFramebuffer(N.FRAMEBUFFER,Me);const Se=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Se),N.bufferData(N.PIXEL_PACK_BUFFER,re.byteLength,N.STREAM_READ),N.readPixels(k,V,G,F,Ve.convert(ke),Ve.convert(ze),0);const rt=I!==null?Ce.get(I).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,rt);const bt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Qg(N,bt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Se),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,re),N.deleteBuffer(Se),N.deleteSync(bt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,k=null,V=0){S.isTexture!==!0&&(co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1]);const G=Math.pow(2,-V),F=Math.floor(S.image.width*G),re=Math.floor(S.image.height*G),ue=k!==null?k.x:0,Me=k!==null?k.y:0;T.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,ue,Me,F,re),Ie.unbindTexture()},this.copyTextureToTexture=function(S,k,V=null,G=null,F=0){S.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],k=arguments[2],F=arguments[3]||0,V=null);let re,ue,Me,be,ke,ze,Se,rt,bt;const wt=S.isCompressedTexture?S.mipmaps[F]:S.image;V!==null?(re=V.max.x-V.min.x,ue=V.max.y-V.min.y,Me=V.isBox3?V.max.z-V.min.z:1,be=V.min.x,ke=V.min.y,ze=V.isBox3?V.min.z:0):(re=wt.width,ue=wt.height,Me=wt.depth||1,be=0,ke=0,ze=0),G!==null?(Se=G.x,rt=G.y,bt=G.z):(Se=0,rt=0,bt=0);const pn=Ve.convert(k.format),ht=Ve.convert(k.type);let Ee;k.isData3DTexture?(T.setTexture3D(k,0),Ee=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(T.setTexture2DArray(k,0),Ee=N.TEXTURE_2D_ARRAY):(T.setTexture2D(k,0),Ee=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const xi=N.getParameter(N.UNPACK_ROW_LENGTH),dt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),$n=N.getParameter(N.UNPACK_SKIP_PIXELS),Bs=N.getParameter(N.UNPACK_SKIP_ROWS),bn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,wt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,wt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,be),N.pixelStorei(N.UNPACK_SKIP_ROWS,ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ze);const $r=S.isDataArrayTexture||S.isData3DTexture,Et=k.isDataArrayTexture||k.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const li=Ce.get(S),qr=Ce.get(k),Nn=Ce.get(li.__renderTarget),Hi=Ce.get(qr.__renderTarget);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Vi=0;Vi<Me;Vi++)$r&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(S).__webglTexture,F,ze+Vi),S.isDepthTexture?(Et&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(k).__webglTexture,F,bt+Vi),N.blitFramebuffer(be,ke,re,ue,Se,rt,re,ue,N.DEPTH_BUFFER_BIT,N.NEAREST)):Et?N.copyTexSubImage3D(Ee,F,Se,rt,bt+Vi,be,ke,re,ue):N.copyTexSubImage2D(Ee,F,Se,rt,bt+Vi,be,ke,re,ue);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Et?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Ee,F,Se,rt,bt,re,ue,Me,pn,ht,wt.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(Ee,F,Se,rt,bt,re,ue,Me,pn,wt.data):N.texSubImage3D(Ee,F,Se,rt,bt,re,ue,Me,pn,ht,wt):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,Se,rt,re,ue,pn,ht,wt.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,Se,rt,wt.width,wt.height,pn,wt.data):N.texSubImage2D(N.TEXTURE_2D,F,Se,rt,re,ue,pn,ht,wt);N.pixelStorei(N.UNPACK_ROW_LENGTH,xi),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,dt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,$n),N.pixelStorei(N.UNPACK_SKIP_ROWS,Bs),N.pixelStorei(N.UNPACK_SKIP_IMAGES,bn),F===0&&k.generateMipmaps&&N.generateMipmap(Ee),Ie.unbindTexture()},this.copyTextureToTexture3D=function(S,k,V=null,G=null,F=0){return S.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,S=arguments[2],k=arguments[3],F=arguments[4]||0),co('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,k,V,G,F)},this.initRenderTarget=function(S){Ce.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Ie.unbindTexture()},this.resetState=function(){A=0,R=0,I=null,Ie.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class nd{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=t,this.far=i}clone(){return new nd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class dp extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class up{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dh,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new P;class So{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new So(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class id extends Wn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let er;const Jr=new P,tr=new P,nr=new P,ir=new Le,Qr=new Le,fp=new Fe,sa=new P,eo=new P,ra=new P,Hu=new Le,Zc=new Le,Vu=new Le;class pp extends At{constructor(e=new id){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new rn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new up(t,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new So(i,3,0,!1)),er.setAttribute("uv",new So(i,2,3,!1))}this.geometry=er,this.material=e,this.center=new Le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),fp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-nr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;oa(sa.set(-.5,-.5,0),nr,o,tr,s,r),oa(eo.set(.5,-.5,0),nr,o,tr,s,r),oa(ra.set(.5,.5,0),nr,o,tr,s,r),Hu.set(0,0),Zc.set(1,0),Vu.set(1,1);let a=e.ray.intersectTriangle(sa,eo,ra,!1,Jr);if(a===null&&(oa(eo.set(-.5,.5,0),nr,o,tr,s,r),Zc.set(0,1),a=e.ray.intersectTriangle(sa,ra,eo,!1,Jr),a===null))return;const c=e.ray.origin.distanceTo(Jr);c<e.near||c>e.far||t.push({distance:c,point:Jr.clone(),uv:On.getInterpolation(Jr,sa,eo,ra,Hu,Zc,Vu,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function oa(n,e,t,i,s,r){ir.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Qr.x=r*ir.x-s*ir.y,Qr.y=s*ir.x+r*ir.y):Qr.copy(ir),n.copy(e),n.x+=Qr.x,n.y+=Qr.y,n.applyMatrix4(fp)}const Gu=new P,Wu=new lt,Xu=new lt,dM=new P,$u=new Fe,aa=new P,Jc=new pi,qu=new Fe,Qc=new oc;class uM extends it{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$d,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,aa),this.boundingBox.expandByPoint(aa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,aa),this.boundingSphere.expandByPoint(aa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jc.copy(this.boundingSphere),Jc.applyMatrix4(s),e.ray.intersectsSphere(Jc)!==!1&&(qu.copy(s).invert(),Qc.copy(e.ray).applyMatrix4(qu),!(this.boundingBox!==null&&Qc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$d?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Wu.fromBufferAttribute(s.attributes.skinIndex,e),Xu.fromBufferAttribute(s.attributes.skinWeight,e),Gu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Xu.getComponent(r);if(o!==0){const a=Wu.getComponent(r);$u.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(dM.copy(Gu).applyMatrix4($u),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class mp extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class gp extends Ot{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Gt,h=Gt,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ju=new Fe,fM=new Fe;class sd{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Fe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:fM;ju.multiplyMatrices(a,t[r]),ju.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new sd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new gp(t,e,e,Bn,si);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new mp),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class fh extends dn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const sr=new Fe,Yu=new Fe,ca=[],Ku=new fi,pM=new Fe,to=new it,no=new pi;class rd extends it{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,pM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sr),Ku.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(Ku)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sr),no.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(no)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(to.geometry=this.geometry,to.material=this.material,to.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),no.copy(this.boundingSphere),no.applyMatrix4(i),e.ray.intersectsSphere(no)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sr),Yu.multiplyMatrices(i,sr),to.matrixWorld=Yu,to.raycast(e,ca);for(let o=0,a=ca.length;o<a;o++){const c=ca[o];c.instanceId=r,c.object=this,t.push(c)}ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new gp(new Float32Array(s*this.count),s,this.count,qh,si));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class _p extends Wn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ga=new P,Wa=new P,Zu=new Fe,io=new oc,la=new pi,el=new P,Ju=new P;class od extends At{constructor(e=new rn,t=new _p){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ga.fromBufferAttribute(t,s-1),Wa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ga.distanceTo(Wa);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(s),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;Zu.copy(s).invert(),io.copy(e.ray).applyMatrix4(Zu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),b=h.getX(_+1),M=ha(this,e,io,c,p,b);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=ha(this,e,io,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=ha(this,e,io,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=ha(this,e,io,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ha(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(Ga.fromBufferAttribute(o,s),Wa.fromBufferAttribute(o,r),t.distanceSqToSegment(Ga,Wa,el,Ju)>i)return;el.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(el);if(!(c<e.near||c>e.far))return{distance:c,point:Ju.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Qu=new P,ef=new P;class mM extends od{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Qu.fromBufferAttribute(t,s),ef.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Qu.distanceTo(ef);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gM extends od{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class xp extends Wn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tf=new Fe,ph=new oc,da=new pi,ua=new P;class _M extends At{constructor(e=new rn,t=new xp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(s),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;tf.copy(s).invert(),ph.copy(e.ray).applyMatrix4(tf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,_=f;g<_;g++){const m=l.getX(g);ua.fromBufferAttribute(d,m),nf(ua,m,c,s,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,_=f;g<_;g++)ua.fromBufferAttribute(d,g),nf(ua,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function nf(n,e,t,i,s,r,o){const a=ph.distanceSqToPoint(n);if(a<t){const c=new P;ph.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class lc extends Ot{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hc extends rn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new P,h=new Le;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=i+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(a,3)),this.setAttribute("uv",new Ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ai extends rn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=i/2;let p=0;b(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(f,2));function b(){const x=new P,C=new P;let A=0;const R=(t-e)/i;for(let I=0;I<=r;I++){const w=[],v=I/r,L=v*(t-e)+e;for(let H=0;H<=s;H++){const E=H/s,U=E*c+a,z=Math.sin(U),X=Math.cos(U);C.x=L*z,C.y=-v*i+m,C.z=L*X,d.push(C.x,C.y,C.z),x.set(z,R,X).normalize(),u.push(x.x,x.y,x.z),f.push(E,1-v),w.push(g++)}_.push(w)}for(let I=0;I<s;I++)for(let w=0;w<r;w++){const v=_[w][I],L=_[w+1][I],H=_[w+1][I+1],E=_[w][I+1];(e>0||w!==0)&&(h.push(v,L,E),A+=3),(t>0||w!==r-1)&&(h.push(L,H,E),A+=3)}l.addGroup(p,A,0),p+=A}function M(x){const C=g,A=new Le,R=new P;let I=0;const w=x===!0?e:t,v=x===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,m*v,0),u.push(0,v,0),f.push(.5,.5),g++;const L=g;for(let H=0;H<=s;H++){const U=H/s*c+a,z=Math.cos(U),X=Math.sin(U);R.x=w*X,R.y=m*v,R.z=w*z,d.push(R.x,R.y,R.z),u.push(0,v,0),A.x=z*.5+.5,A.y=X*.5*v+.5,f.push(A.x,A.y),g++}for(let H=0;H<s;H++){const E=C+H,U=L+H;x===!0?h.push(U,U+1,E):h.push(U+1,U,E),I+=3}l.addGroup(p,I,x===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ad extends rn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const M=new P,x=new P,C=new P;for(let A=0;A<t.length;A+=3)f(t[A+0],M),f(t[A+1],x),f(t[A+2],C),c(M,x,C,b)}function c(b,M,x,C){const A=C+1,R=[];for(let I=0;I<=A;I++){R[I]=[];const w=b.clone().lerp(x,I/A),v=M.clone().lerp(x,I/A),L=A-I;for(let H=0;H<=L;H++)H===0&&I===A?R[I][H]=w:R[I][H]=w.clone().lerp(v,H/L)}for(let I=0;I<A;I++)for(let w=0;w<2*(A-I)-1;w++){const v=Math.floor(w/2);w%2===0?(u(R[I][v+1]),u(R[I+1][v]),u(R[I][v])):(u(R[I][v+1]),u(R[I+1][v+1]),u(R[I+1][v]))}}function l(b){const M=new P;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(b),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){const b=new P;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];const x=m(b)/2/Math.PI+.5,C=p(b)/Math.PI+.5;o.push(x,1-C)}g(),d()}function d(){for(let b=0;b<o.length;b+=6){const M=o[b+0],x=o[b+2],C=o[b+4],A=Math.max(M,x,C),R=Math.min(M,x,C);A>.9&&R<.1&&(M<.2&&(o[b+0]+=1),x<.2&&(o[b+2]+=1),C<.2&&(o[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,M){const x=b*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function g(){const b=new P,M=new P,x=new P,C=new P,A=new Le,R=new Le,I=new Le;for(let w=0,v=0;w<r.length;w+=9,v+=6){b.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),A.set(o[v+0],o[v+1]),R.set(o[v+2],o[v+3]),I.set(o[v+4],o[v+5]),C.copy(b).add(M).add(x).divideScalar(3);const L=m(C);_(A,v+0,b,L),_(R,v+2,M,L),_(I,v+4,x,L)}}function _(b,M,x,C){C<0&&b.x===1&&(o[M]=b.x-1),x.x===0&&x.z===0&&(o[M]=C/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ad(e.vertices,e.indices,e.radius,e.details)}}class Xa extends ad{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xa(e.radius,e.detail)}}class cd extends rn{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let d=e;const u=(t-e)/s,f=new P,g=new Le;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const b=p+m,M=b,x=b+i+1,C=b+i+2,A=b+1;a.push(M,x,A),a.push(x,C,A)}}this.setIndex(a),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ld extends rn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new P,d=new P,u=new P;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;o.push(_,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ld(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class hd extends Wn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mi extends hd{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ci extends Wn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function fa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function xM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function vM(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function sf(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function vp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Co{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yM extends Co{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ur,endingEnd:ur}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fr:r=e,a=2*t-i;break;case Ha:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case fr:o=e,c=2*i-t;break;case Ha:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}const l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,b=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+b*o[l+C]+M*o[c+C]+x*o[d+C];return r}}class yp extends Co{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}}class MM extends Co{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class gi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fa(t,this.TimeBufferType),this.values=fa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:fa(e.times,Array),values:fa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new MM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yo:t=this.InterpolantFactoryMethodDiscrete;break;case Mo:t=this.InterpolantFactoryMethodLinear;break;case Sc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return Sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&xM(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Sc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){const _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=Mo;class zr extends gi{constructor(e,t,i){super(e,t,i)}}zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=yo;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Mp extends gi{}Mp.prototype.ValueTypeName="color";class Lr extends gi{}Lr.prototype.ValueTypeName="number";class bM extends Co{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)In.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Pr extends gi{InterpolantFactoryMethodLinear(e){return new bM(this.times,this.values,this.getValueSize(),e)}}Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class Hr extends gi{constructor(e,t,i){super(e,t,i)}}Hr.prototype.ValueTypeName="string";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=yo;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;class Dr extends gi{}Dr.prototype.ValueTypeName="vector";class mh{constructor(e="",t=-1,i=[],s=Zh){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=oi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(wM(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(gi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=vM(c);c=sf(c,1,h),l=sf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Lr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const d=h[1];let u=s[d];u||(s[d]=u=[]),u.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,u,f,g,_){if(f.length!==0){const m=[],p=[];vp(f,m,p,g),m.length!==0&&_.push(new d(u,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let b=0;b!==u[g].morphTargets.length;++b){const M=u[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}s.push(new Lr(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[d].name+"]";i(Dr,f+".position",u,"pos",s),i(Pr,f+".quaternion",u,"rot",s),i(Dr,f+".scale",u,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function SM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Lr;case"vector":case"vector2":case"vector3":case"vector4":return Dr;case"color":return Mp;case"quaternion":return Pr;case"bool":case"boolean":return zr;case"string":return Hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function wM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=SM(n.type);if(n.times===void 0){const t=[],i=[];vp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ns={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class EM{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const TM=new EM;class Vr{constructor(e){this.manager=e!==void 0?e:TM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vr.DEFAULT_MATERIAL_NAME="__DEFAULT";const wi={};class AM extends Error{constructor(e,t){super(e),this.response=t}}class bp extends Vr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ns.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:i,onError:s});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=wi[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){b();function b(){d.read().then(({done:M,value:x})=>{if(M)p.close();else{_+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,R=h.length;A<R;A++){const I=h[A];I.onProgress&&I.onProgress(C)}p.enqueue(x),b()}},M=>{p.error(M)})}}});return new Response(m)}else throw new AM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ns.add(e,l);const h=wi[e];delete wi[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=wi[e];if(h===void 0)throw this.manager.itemError(e),l;delete wi[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class RM extends Vr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ns.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=bo("img");function c(){h(),ns.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class CM extends Vr{constructor(e){super(e)}load(e,t,i,s){const r=new Ot,o=new RM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class dc extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class IM extends dc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const tl=new Fe,rf=new P,of=new P;class dd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ed,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(rf),of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(of),t.updateMatrixWorld(),tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class LM extends dd{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class PM extends dc{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new LM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const af=new Fe,so=new P,nl=new P;class DM extends dd{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),so.setFromMatrixPosition(e.matrixWorld),i.position.copy(so),nl.copy(i.position),nl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(nl),i.updateMatrixWorld(),s.makeTranslation(-so.x,-so.y,-so.z),af.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af)}}class NM extends dc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new DM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class UM extends dd{constructor(){super(new ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sp extends dc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new UM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class go{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class kM extends Vr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ns.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ns.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ns.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ns.add(e,c),r.manager.itemStart(e)}}class FM{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)i[r+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(i,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){a.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,o=s;r!==o;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[i+o]}_slerp(e,t,i,s){In.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){const o=this._workIndex*r;In.multiplyQuaternionsFlat(e,o,e,t,e,i),In.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,i,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[i+a]*s}}_lerpAdditive(e,t,i,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[i+o]*s}}}const ud="\\[\\]\\.:\\/",OM=new RegExp("["+ud+"]","g"),fd="[^"+ud+"]",BM="[^"+ud.replace("\\.","")+"]",zM=/((?:WC+[\/:])*)/.source.replace("WC",fd),HM=/(WCOD+)?/.source.replace("WCOD",BM),VM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fd),GM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fd),WM=new RegExp("^"+zM+HM+VM+GM+"$"),XM=["material","materials","bones","map"];class $M{constructor(e,t,i){const s=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ft{constructor(e,t,i){this.path=t,this.parsedPath=i||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,i):new ft(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(OM,"")}static parseTrackName(e){const t=WM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);XM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=$M;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class qM{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:ur,endingEnd:ur};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=bg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+i,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*i;c<0||i===0?t=0:(this._startTime=null,t=i*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case wg:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Zh:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),l[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,r=this._loopCount;const o=i===Sg;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(i===Xf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=fr,s.endingEnd=fr):(e?s.endingStart=this.zeroSlopeAtStart?fr:ur:s.endingStart=Ha,t?s.endingEnd=this.zeroSlopeAtEnd?fr:ur:s.endingEnd=Ha)}_scheduleFading(e,t,i){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=i,this}}const jM=new Float32Array(1);class YM extends Os{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==r;++d){const u=s[d],f=u.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[d]=g;else{if(g=o[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;g=new FM(ft.create(i,f,_),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[d]=g}a[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new yp(new Float32Array(2),new Float32Array(2),1,jM),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?mh.findByName(s,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Zh),c!==void 0){const d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===i)return d;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new qM(this,o,t,i);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){const i=t||this._root,s=i.uuid,r=typeof e=="string"?mh.findByName(i,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(s,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh);function Gr(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e>>>0}function pd(n){const e=n+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),[((t^t>>>14)>>>0)/4294967296,e]}function uc(n){let e=n>>>0;return()=>{const[t,i]=pd(e);return e=i,t}}const gh=["office","tourist","oldlady","party","jogger","rich"],Yi=(n,e)=>{for(let t=e.length-1;t>=0;t--)if(n>=e[t][0])return e[t][1];return e[0][1]},fc={old:{name:"The old corner",mix:{office:1,tourist:1,oldlady:1,party:1,jogger:1,rich:.5},busy:n=>Yi(n,[[0,.7],[.72,.4]]),gen:()=>1},market:{name:"The market",mix:{oldlady:3,tourist:3,office:1,rich:.5},busy:n=>Yi(n,[[0,.8],[.25,1],[.6,.6],[.72,.15]]),gen:n=>n>.25&&n<.6?1.2:1},homes:{name:"Quiet street",mix:{oldlady:3,jogger:2,rich:1,office:1},busy:n=>Yi(n,[[0,.5],[.72,.2]]),gen:()=>1.05},park:{name:"The park",mix:{jogger:3,oldlady:3,tourist:2,party:.5},busy:n=>Yi(n,[[0,.8],[.6,.6],[.72,.25]]),gen:()=>.95},bars:{name:"Bar street",mix:{party:6,office:1,tourist:1,rich:.5},busy:n=>Yi(n,[[0,.25],[.45,.6],[.6,1]]),gen:n=>n>.6?1.25:.8},downtown:{name:"Downtown",mix:{office:5,rich:2,tourist:1,jogger:1},busy:n=>Yi(n,[[0,1],[.6,.6],[.72,.15]]),gen:()=>.85},station:{name:"Station underpass",mix:{office:3,tourist:2,party:1,oldlady:1,jogger:.5,rich:.5},busy:n=>Yi(n,[[0,1],[.2,.6],[.5,1],[.72,.4]]),gen:()=>1},river:{name:"The river",mix:{tourist:2,jogger:3,rich:1,oldlady:1},busy:n=>Yi(n,[[0,.6],[.5,.8],[.72,.2]]),gen:()=>1.1}};function hs(n,e){return n>=-36&&n<=36?"old":e>=0?n<-70?"homes":n<-36?"market":n<=72?"bars":"downtown":n<-36?"park":n<=72?"station":"river"}function KM(n,e){const t=fc[n].mix,i=gh.reduce((r,o)=>r+(t[o]??0),0);let s=e*i;for(const r of gh)if(s-=t[r]??0,s<0)return r;return"office"}const pa={minX:-106,maxX:108,minZ:-28,maxZ:23},Ze={store:{x:-22,z:8.5,r:3,label:"Liquor store"},bakery:{x:0,z:8.5,r:3,label:"Bakery"},dumpster:{x:4,z:17,r:2.6,label:"Dumpster"},corner:{x:24,z:6,r:3.5,label:"Busy corner"},bin:{x:12,z:-6,r:2.5,label:"Recycling"},bench:{x:-16,z:-12,r:2.5,label:"Bench"},sprinkler:{x:-8,z:-9,r:3,label:"Sprinkler"},alley:{x:12,z:16,r:3,label:"Alley"},stash:{x:13.5,z:20,r:1.8,label:"Loose brick"},shop2:{x:-61,z:8.6,r:2.8,label:"Corner shop"},truck:{x:-46,z:-7.2,r:2.8,label:"Food truck"},bakeryBin:{x:6.8,z:9.2,r:1.8,label:"Bakery bin"},fountain:{x:-62,z:-18,r:4.2,label:"Fountain"},pigeons:{x:-57,z:-13,r:3,label:"Pigeons"},pigeons2:{x:47,z:-10,r:3,label:"Pigeons"},underpass:{x:56,z:-15,r:4,label:"Underpass"},bridge:{x:90,z:-24.5,r:3.2,label:"Under the bridge"},tvBar:{x:62,z:8.6,r:2.6,label:"Bar TV"},tvShop:{x:79,z:8.6,r:2.6,label:"Shop TV"},bin2:{x:-50,z:-6,r:2.5,label:"Recycling"},bin3:{x:66,z:-6,r:2.5,label:"Recycling"}},cf={liquor:"store",corner:"shop2",truck:"truck"},wp={liquor:"Liquor store",corner:"Corner shop",truck:"Food truck"},wo=[{x:-16,z:-12},{x:-70,z:-12},{x:-54,z:-12},{x:-62,z:-25},{x:-90,z:-6.4},{x:50,z:-6.6},{x:82,z:-20},{x:100,z:-6.6},{x:-82,z:-24}],Ep=2,Tp=[{x:-26,z:4.8},{x:-84,z:4.8},{x:-50,z:4.8},{x:44,z:4.8},{x:66,z:4.8},{x:86,z:4.8},{x:-66,z:-6.2},{x:30,z:-6.2},{x:96,z:-6.2},{x:60,z:-19}],ZM=1.7,_h=[{x:-22,z:10},{x:0,z:10},{x:-61,z:10},{x:42.5,z:10},{x:62,z:10},{x:92,z:10},{x:56,z:-9}],JM=3.4,QM=["bin","bin2","bin3"],pc=["pigeons","pigeons2"],md=["tvBar","tvShop"],eb=[-80,-8,40,76],gd=[{x:-30,z:5.5},{x:-12,z:5.5},{x:8,z:5.5},{x:30,z:-5.5},{x:-26,z:-5.5},{x:-4,z:-5.5},{x:18,z:-5.5},{x:-20,z:-16},{x:-4,z:-18},{x:10,z:19},{x:14,z:12},{x:28,z:14},{x:-30,z:-12},{x:0,z:-14},{x:-98,z:6},{x:-76,z:5.5},{x:-44,z:7},{x:-58,z:-20},{x:-88,z:-16},{x:-48,z:-24},{x:40,z:6},{x:50,z:7.5},{x:68,z:5.5},{x:46,z:-14},{x:64,z:-17},{x:54,z:-20},{x:80,z:6},{x:100,z:5.5},{x:84,z:-12},{x:96,z:-22},{x:76,z:-25},{x:104,z:-14}],tb=[{z:6.2,x0:-104,x1:106},{z:7.6,x0:-104,x1:106},{z:-5.6,x0:-104,x1:106},{z:-16,x0:-100,x1:-40},{z:-18,x0:74,x1:106},{z:-12,x0:40,x1:70}],Ap={sad:{label:"Sad face",say:["(big sad eyes)","Rough week, friend...","Anything helps. Truly.","(sighs like a movie dog)"]},compliment:{label:"Compliment",say:["Great shoes. Spare a dollar?","You look like a generous person.","That coat! Wow.","Best haircut on this street."]},howdy:{label:"Hey, how you doin?",say:["Hey! How you doin?","Morning, boss!","Beautiful day, huh?","Looking good out here!"]},joke:{label:"Tell a joke",say:["Why don't pigeons pay rent? It's cheep.","I used to be rich. Then I paid for parking.","My landlord is the sky. Rent's free, roof leaks.","I'm on a seafood diet. I see food, I ask for it.","I lost my job at the calendar factory. Took a day off."]},honest:{label:"Be honest",say:["Honestly? It's for a beer.","Spare a dollar for a beer? No lies.","I won't pretend. I'm thirsty.","Straight up: beer fund."]},door:{label:"Hold the door",say:["(holds the door) After you!","(bows, holds the door)","Door service! Tips welcome."]}},Io={office:{name:"Office worker",base:.1,likes:["door","honest"],hates:["sad","joke"],cash:[1,3],food:.1,laughs:!1},tourist:{name:"Tourist",base:.2,likes:["joke","compliment","howdy"],hates:["honest"],cash:[1,5],food:0,laughs:!0},oldlady:{name:"Old lady",base:.2,likes:["sad","compliment","door"],hates:["joke","honest"],cash:[1,2],food:.45,laughs:!1},party:{name:"Party kid",base:.14,likes:["honest","joke"],hates:["sad","compliment"],cash:[1,4],food:.05,laughs:!0},jogger:{name:"Jogger",base:.05,likes:["howdy"],hates:["sad","door","compliment"],cash:[1,2],food:0,laughs:!1},rich:{name:"Rich guy",base:.06,likes:["compliment","door"],hates:["howdy","honest","sad"],cash:[5,20],food:0,laughs:!1}},Jn={likeMul:2.4,likeAdd:.1,againMul:.4,angryAt:2,copChance:.35,hateCop:.08,signAdd:.06,drunkMul:.7,maxP:.85},Ms=(n,e)=>n[Math.min(n.length-1,Math.floor(e*n.length))],nb=["Here you go.","Take care, man.","Get something to eat.","Here. Don't tell my wife.","Hang in there."],lf={joke:["Ha! Here.","OK, that's good. Take it.","Ha! You earned that."],honest:["Respect the honesty. Here.","Ha. One beer. On me.","At least you are honest."],compliment:["Aw, thanks! Here.","Flattery works. Here."],door:["What a gentleman! Here.","Thank you, sir."],sad:["Oh, honey. Here.","Poor guy. Here."],howdy:["Doing good! Here, buddy.","Ha, hey yourself. Here."]},ib={rich:["Keep the change. All of it.","Here's a twenty. Don't make it weird."],party:["Bro! Here! Cheers!","Drink one for me!"],tourist:["Is this how it works here? Here!","For the local guide!"]},sb=["Take this sandwich, dear.","Here, I packed too much lunch.","Have my muffin. Go on."],rb=["Sorry man, no cash.","Not today.","I only have card.","(pretends to be on the phone)","(walks faster)","Maybe next time.","Sorry, buddy.","I gave at the office."],hf={office:["Get a job.","In a meeting. Literally.","I'm late, sorry."],tourist:["No speak... uh... money.","(takes a photo of him instead)"],oldlady:["I only have bus fare, dear.","Not today, sweetheart."],party:["Bro, I'm broke too.","Spent it all on shots, sorry!"],jogger:["(points at earbuds)","Can't stop! Pace!"],rich:["Have you tried a job?","My accountant says no."]},ob={office:["Ugh. Get a job.","Not now. Ever."],tourist:["Uh... no. Weird.","Is he allowed to say that?"],oldlady:["That's not funny, young man.","Shameful!"],party:["Dude, too real. Bad vibes.","Ew, no."],jogger:["Don't touch me.","Out of my lane!"],rich:["Don't touch me.","Don't talk to me."]},ab=["I said NO.","Leave me alone!","Back off, man!","Seriously? Again?"],df=["I'm calling the cops.","Officer! This guy!"],cb=["Ha! Good one. Still no.","Haha! No cash, but good one."];function lb(n,e,t){const i=Io[n];if(t.asks>=Jn.angryAt||i.hates.includes(e))return 0;let s=i.base*(.5+t.generosity)*t.areaMul;return i.likes.includes(e)&&(s=s*Jn.likeMul+Jn.likeAdd),t.asks===1&&(s*=Jn.againMul),t.sign&&(s+=Jn.signAdd),t.high&&n!=="party"&&(s*=Jn.drunkMul),Math.max(0,Math.min(Jn.maxP,s))}function hb(n,e,t,i){const s=Io[n],r={outcome:"no",money:0,food:0,laughed:!1,callCop:!1,reply:""};if(t.asks>=Jn.angryAt)return r.outcome="angry",r.callCop=i()<Jn.copChance+.15*(t.asks-Jn.angryAt),r.reply=r.callCop?Ms(df,i()):Ms(ab,i()),r;if(s.hates.includes(e))return r.outcome="hate",r.callCop=(n==="rich"||n==="office")&&i()<Jn.hateCop,r.reply=r.callCop?Ms(df,i()):Ms(ob[n],i()),r;const o=s.likes.includes(e);if(r.laughed=e==="joke"&&o&&s.laughs&&i()<.75,i()<lb(n,e,t)){if(r.outcome="give",i()<s.food)r.food=30,r.reply=Ms(sb,i());else{r.money=s.cash[0]+Math.floor(i()*(s.cash[1]-s.cash[0]+1));const c=[...nb,...lf[e]??[],...lf[e]??[],...ib[n]??[]];r.reply=Ms(c,i())}return r}const a=r.laughed?cb:[...rb,...hf[n]??[],...hf[n]??[]];return r.reply=Ms(a,i()),r}const Rp={beer:{name:"Beer",price:3,note:"Gentle. The classic."},vodka:{name:"Vodka",price:5,note:"Strong. Wild."},wine:{name:"Cheap wine",price:4,note:"Warm and slow."},hotdog:{name:"Hot dog",price:3,note:"Hot food. +40 food",food:40,hot:!0},soup:{name:"Soup",price:4,note:"Hot. +50 food, +5 health",food:50,hot:!0},coffee:{name:"Coffee",price:2,note:"Hot. +10 food, eases the shakes",food:10,hot:!0},sandwich:{name:"Sandwich",price:3,note:"Cold. +35 food",food:35},chips:{name:"Chips",price:1,note:"Cold. +15 food",food:15},pastry:{name:"Pastry",price:2,note:"Cold. +20 food",food:20},cigs:{name:"Cigarettes (5)",price:3,note:"Smoke anywhere. Needs a lighter."},lighter:{name:"Lighter",price:1,note:"For the smokes."},scratch:{name:"Scratch card",price:1,note:"Small odds. Big hope."},treats:{name:"Dog treats",price:2,note:"For a friend you have not met yet."},sign:{name:"Cardboard sign",price:2,note:"People give a bit more."},shades:{name:"Sunglasses",price:6,note:"The cop notices you less."},goodBlanket:{name:"Good blanket",price:8,note:"Sleep heals more. Not heavy."},jokebook:{name:"Joke book",price:4,note:'Unlocks "Tell a joke".'}},Cp={liquor:["beer","wine","vodka","cigs","lighter","scratch","chips"],corner:["sandwich","chips","pastry","beer","cigs","lighter","scratch","treats","sign","shades","goodBlanket","jokebook"],truck:["hotdog","soup","coffee"]},ro={big:.03,bigWin:20,small:.15,smallWin:5};function db(n){return n<ro.big?ro.bigWin:n<ro.big+ro.small?ro.smallWin:0}const _d={laughTourist:{text:"Make a tourist laugh",ev:"laugh:tourist",n:1,whimsy:15},eatHot:{text:"Eat something hot",ev:"eat:hot",n:1,whimsy:10},sleepBridge:{text:"Sleep under the bridge",ev:"sleep:bridge",n:1,whimsy:12},scratchWin:{text:"Win on a scratch card",ev:"scratch:win",n:1,money:3},give3:{text:"Get 3 people to give",ev:"give",n:3,money:4},recycle5:{text:"Recycle 5 bottles",ev:"recycle",n:5,money:3},sit:{text:"Sit on a bench a while",ev:"sit",n:1,whimsy:8},pigeons:{text:"Feed the pigeons",ev:"pigeons",n:1,whimsy:8},oldLady:{text:"Get an old lady to give",ev:"give:oldlady",n:1,whimsy:10},rich:{text:"Get money from a rich guy",ev:"give:rich",n:1,whimsy:12},door:{text:"Hold a door for someone",ev:"line:door",n:1,money:2},areas3:{text:"Visit 3 parts of the city",ev:"area",n:3,whimsy:10},smoke:{text:"Have a smoke",ev:"smoke",n:1,whimsy:6},tv:{text:"Watch the TV in a window",ev:"tv",n:1,whimsy:6},whimsy2:{text:"Do 2 whimsy acts",ev:"whimsy",n:2,money:4},trash:{text:"Dig through 2 trash cans",ev:"trash",n:2,whimsy:6}},ub=Object.keys(_d);function xd(n,e){const t=uc(Gr(`${n}#goals${e}`)),i=[...ub],s=[];for(;s.length<3;){const r=Math.floor(t()*i.length);s.push({id:i[r],got:0,done:!1}),i.splice(r,1)}return s}const Rn=["head","body","hands","carry"],Ip={common:14211288,good:4905066,rare:4889343,legendary:16756782},Lp={cardboard:{name:"Cardboard",rarity:"common",desc:"A flat box. A bed, a sign, a wall.",effect:"Craft: sign.",dur:3,value:0,paper:!0},marker:{name:"Marker",rarity:"common",desc:"Half dry. Enough for one sign.",effect:"Craft: sign.",dur:2,value:0},can:{name:"Empty can",rarity:"common",desc:"Rinsed. Mostly.",effect:"Craft: stove, wind chime.",dur:9,value:0},candle:{name:"Candle stub",rarity:"common",desc:"Church leftovers.",effect:"Craft: stove.",dur:3,value:0},string:{name:"String",rarity:"common",desc:"A good length of string.",effect:"Craft: necklace, wind chime.",dur:9,value:0},caps:{name:"Bottle caps",rarity:"common",desc:"A pocketful. They jingle.",effect:"Craft: necklace.",dur:9,value:0},tape:{name:"Duct tape",rarity:"common",desc:"Fixes everything twice.",effect:"Use: +3 wear on his most worn thing. Craft: rain cover.",dur:2,value:1},plank:{name:"Plank",rarity:"common",desc:"Straight, mostly.",effect:"Craft: skateboard.",dur:9,value:0},pole:{name:"Pole",rarity:"common",desc:"A tent pole, or a broom handle.",effect:"Craft: tent (needs 2).",dur:9,value:0},crate:{name:"Milk crate",rarity:"common",desc:"The seat of kings.",effect:"Craft: cart.",dur:9,value:1},newspaper:{name:"Newspaper",rarity:"common",desc:"Yesterday's news.",effect:"Use: read it. +2 whimsy.",dur:2,value:0,paper:!0},beans:{name:"Can of beans",rarity:"common",desc:"Cold beans. Food is food.",effect:"Use: eat. +20 food (hot with a stove).",dur:1,value:1,food:20},bread:{name:"Bread heel",rarity:"common",desc:"Hard as a brick.",effect:"Use: eat. +15 food.",dur:1,value:0,food:15},lighter:{name:"Lighter",rarity:"common",desc:"For the smokes.",effect:"Lets him smoke.",dur:12,value:1},umbrella:{name:"Broken umbrella",rarity:"common",desc:"One spoke short.",effect:"Hands: his paper stays dry in rain.",dur:5,value:1,slot:"hands"},beanie:{name:"Beanie",rarity:"common",desc:"Smells like someone.",effect:"Head: cold hurts half as much.",dur:10,value:1,slot:"head"},tarp:{name:"Tarp",rarity:"good",desc:"Blue. Always blue.",effect:"Craft: tent, bedroll.",dur:9,value:2},wheel:{name:"Old wheel",rarity:"good",desc:"From a skateboard that lost.",effect:"Craft: skateboard.",dur:9,value:1},gloves:{name:"Fingerless gloves",rarity:"good",desc:"Warm hands, free fingers.",effect:"Hands: cold hurts less.",dur:10,value:2,slot:"hands"},poncho:{name:"Poncho",rarity:"good",desc:"Plastic. Crinkly. Dry.",effect:"Body: rain does not soak him or his paper.",dur:8,value:2,slot:"body"},blanket:{name:"Blanket",rarity:"good",desc:"Warm, but heavy.",effect:"Sleep heals +12. Heavy: a bit slower.",dur:10,value:2},backpack:{name:"Backpack",rarity:"good",desc:"One strap works.",effect:"Carry: holds 8.",dur:20,value:4,slot:"carry",cap:8},shades:{name:"Sunglasses",rarity:"good",desc:"Cool. Hidden. Both.",effect:"Head: the cop notices him less.",dur:15,value:3,slot:"head"},book_joke:{name:"Joke book",rarity:"good",desc:"Dad jokes, 1987.",effect:'Read: unlocks "Tell a joke" forever.',dur:6,value:1,paper:!0,book:"joke"},book_cook:{name:"Cookbook",rarity:"good",desc:'"Cooking on a Budget". Very budget.',effect:"Read: dumpster recipes, trash food +50%.",dur:6,value:1,paper:!0,book:"cook"},book_poetry:{name:"Poetry book",rarity:"good",desc:"Water-stained. Still sings.",effect:'Read: unlocks "Recite" (busk for coins).',dur:6,value:1,paper:!0,book:"poetry"},trolley:{name:"Shopping trolley",rarity:"good",desc:"One wheel squeaks. Loudly.",effect:"Carry: holds 16. Slow, and the cop hears it.",dur:25,value:3,slot:"carry",cap:16},radio:{name:"Pocket radio",rarity:"rare",desc:"One station. It is jazz.",effect:"Use: +5 whimsy.",dur:6,value:6},sleepingBag:{name:"Sleeping bag",rarity:"rare",desc:"The zipper half works.",effect:"Sleep heals +15.",dur:15,value:6},goodBlanket:{name:"Good blanket",rarity:"rare",desc:"Thick wool. Not heavy.",effect:"Sleep heals +20.",dur:20,value:5},guitar:{name:"Guitar",rarity:"rare",desc:"Five strings. Enough.",effect:"Hands: busk for coins.",dur:20,value:8,slot:"hands"},boltCutters:{name:"Bolt cutters",rarity:"rare",desc:"Heavy. Honest work, surely.",effect:"Cut a bike lock (easier, louder).",dur:6,value:6},lock:{name:"Bike lock",rarity:"rare",desc:"The key is on a string.",effect:"His parked ride is locked.",dur:30,value:3},book_psych:{name:"Psychology paperback",rarity:"rare",desc:'"Reading People". Dog-eared.',effect:"Read: see who likes which line before he asks.",dur:6,value:2,paper:!0,book:"psych"},book_lockpick:{name:"Lockpicking zine",rarity:"rare",desc:"Photocopied. Illegal-ish.",effect:"Read: steal bikes.",dur:6,value:2,paper:!0,book:"lockpick"},book_dog:{name:"Dog training",rarity:"rare",desc:'"Sit. Stay. Love."',effect:"Read: for a dog, someday (not yet).",dur:6,value:1,paper:!0,book:"dog"},skateboard:{name:"Skateboard",rarity:"rare",desc:"Grip tape, mostly.",effect:"Ride: fast. Wobbly when drunk.",dur:8,value:5,ride:!0},watch:{name:"Wristwatch",rarity:"rare",desc:"Stopped at 4:20.",effect:"Pawn it.",dur:99,value:12},luckyCharm:{name:"Lucky charm",rarity:"legendary",desc:"A rabbit foot. Not his rabbit.",effect:"Better scratch cards. People give a bit more.",dur:99,value:10},ring:{name:"Gold ring",rarity:"legendary",desc:"Someone said no.",effect:"Pawn it for a lot.",dur:99,value:30},scooter:{name:"Scooter",rarity:"legendary",desc:"Fast. Careful.",effect:"Ride: very fast. Wild when drunk.",dur:12,value:15,ride:!0},jacket:{name:"Leather jacket",rarity:"legendary",desc:"Like a movie.",effect:"Body: warm, and party people like him more.",dur:25,value:14,slot:"body"},sign:{name:"Cardboard sign",rarity:"common",desc:"Hand-written.",effect:"Hands: people give more, if the words suit them.",dur:5,value:0,slot:"hands",paper:!0,crafted:!0},tent:{name:"Tent",rarity:"good",desc:"Tarp and two poles. Home.",effect:"Sleep: +15 heal, dry, and no thief.",dur:10,value:4,crafted:!0},stove:{name:"Can stove",rarity:"good",desc:"Can, candle, careful.",effect:"Food he eats is hot.",dur:6,value:1,crafted:!0},cart:{name:"Crate cart",rarity:"good",desc:"A trolley with a crate on it.",effect:"Carry: holds 20. Slow, and the cop hears it.",dur:25,value:4,slot:"carry",cap:20,crafted:!0},necklace:{name:"Bottle-cap necklace",rarity:"good",desc:"Jingly. Heartfelt.",effect:"Use near someone: a gift. They turn friendly.",dur:1,value:1,crafted:!0},rainCover:{name:"Rain cover",rarity:"good",desc:"Umbrella plus a lot of tape.",effect:"Paper stays dry. Rain nights heal more.",dur:8,value:1,crafted:!0},chime:{name:"Wind chime",rarity:"common",desc:"Cans on a string. Music.",effect:"Use: +4 whimsy.",dur:5,value:1,crafted:!0},hotStew:{name:"Bin stew",rarity:"good",desc:"Do not ask.",effect:"Use: eat. +45 food, hot.",dur:1,value:0,food:45,hot:!0,crafted:!0},bedroll:{name:"Bedroll",rarity:"good",desc:"Blanket rolled in a tarp.",effect:"Sleep heals +18, and dry.",dur:15,value:3,crafted:!0},bike:{name:"Bike",rarity:"rare",desc:"Not his. Now his.",effect:"Ride: fastest. Very wobbly drunk.",dur:15,value:10,ride:!0,crafted:!0}},Ue=Lp,fb=Object.keys(Lp),pb=fb.filter(n=>!Ue[n].crafted),Fs={joke:"book_joke",cook:"book_cook",psych:"book_psych",lockpick:"book_lockpick",poetry:"book_poetry",dog:"book_dog"};function xh(){return{bag:[],gear:{},books:[],known:[],ride:null,riding:!1,parked:null,locked:!1,ground:[],combos:[],gift:!1,rideT:0,fell:!1}}const Ln={emit:(n,e)=>{}};function en(n){const[e,t]=pd(n.rng);return n.rng=t,e}const ot=(n,e)=>n.messages.push(e),Ra=n=>Math.max(0,Math.min(100,n)),Nr=n=>n.own.gear.carry?Ue[n.own.gear.carry.id].cap??4:4,mb=(n,e)=>Rn.some(t=>{var i;return((i=n.own.gear[t])==null?void 0:i.id)===e}),kt=(n,e)=>mb(n,e)||n.own.bag.some(t=>t.id===e),Dn=(n,e)=>n.own.books.includes(e),Pi=(n,e)=>n.own.combos.includes(e),Pp=[{id:"coolBusker",name:"Cool busker",need:["shades","guitar"],text:"busking pays double"},{id:"rightSign",name:"The right sign",need:["sign","book:psych"],text:"his sign suits every street"},{id:"snugCamp",name:"Snug camp",need:["tent","sleepingBag|bedroll"],text:"sleep heals +15 more, even cold nights"},{id:"troubadour",name:"Troubadour",need:["guitar","book:poetry"],text:"reciting pays $2 more"},{id:"streetLegend",name:"Street legend",need:["skateboard","shades"],text:"half the drunk wobble on the board"},{id:"chef",name:"Chef",need:["stove","book:cook"],text:"hot food fills 50% more"},{id:"scrapper",name:"Scrapper",need:["trolley|cart","boltCutters"],text:"recycling pays +$1 a bottle"},{id:"ghostHands",name:"Ghost hands",need:["luckyCharm","book:lockpick"],text:"nobody sees him take a bike"},{id:"warmNight",name:"Warm night",need:["blanket","dog"],text:"a dog keeps him warm (placeholder: no dogs yet)"}];function gb(n,e){return e==="dog"?!1:e.startsWith("book:")?Dn(n,e.slice(5)):e.split("|").some(t=>{var i;return kt(n,t)||((i=n.own.ride)==null?void 0:i.id)===t})}function un(n){var t,i,s;const e=n.own;n.items.blanket=kt(n,"blanket"),n.items.goodBlanket=kt(n,"goodBlanket"),n.items.sign=((t=e.gear.hands)==null?void 0:t.id)==="sign",n.items.shades=((i=e.gear.head)==null?void 0:i.id)==="shades",n.items.lighter=kt(n,"lighter"),n.items.jokebook=Dn(n,"joke"),n.items.scooter=e.riding&&((s=e.ride)==null?void 0:s.id)==="scooter";for(const r of Pp){const o=r.need.every(c=>gb(n,c)),a=e.combos.includes(r.id);o&&!a?(e.combos.push(r.id),ot(n,`Combo! ${r.name}: ${r.text}.`),Ln.emit(n,"combo")):!o&&a&&e.combos.splice(e.combos.indexOf(r.id),1)}}const _b={joke:'A joke book! New line: "Tell a joke".',cook:"The cookbook. He can make bin stew now, and trash food goes further.",psych:"Reading People. Now he can see who likes which line.",lockpick:"The lockpicking zine. Bikes look different now.",poetry:'Poetry. New act: "Recite" for coins.',dog:"Dog training. He has no dog. Yet."};function Dp(n,e){return Dn(n,e)?!1:(n.own.books.push(e),ot(n,_b[e]),Ln.emit(n,"read"),!0)}const vh=[{text:"GOD BLESS",suits:["oldlady","rich"]},{text:"WHY LIE? NEED BEER",suits:["party","tourist"]},{text:"ANYTHING HELPS",suits:["office","tourist","oldlady"]},{text:"SMILE, IT'S FREE",suits:["jogger","party"]},{text:"WILL WORK FOR SOUP",suits:["office","rich","jogger"]}];function $t(n,e,t=0,i=0,s={},r=!1){const o=Ue[e],a={id:e,dur:o.dur,...s},c=n.own;return o.book&&Dp(n,o.book),o.ride&&!c.ride?(c.ride=a,c.riding=!0,c.parked=null,r||ot(n,`${o.name}! He hops on.`)):o.slot&&!c.gear[o.slot]?(c.gear[o.slot]=a,!r&&!o.book&&ot(n,`${o.name}. He puts it on.`)):!o.ride&&c.bag.length<Nr(n)?(c.bag.push(a),!r&&!o.book&&ot(n,`${o.name}. In the bag.`)):(c.ground.push({...a,x:t,z:i}),ot(n,`No room. He leaves the ${o.name.toLowerCase()} on the ground.`)),un(n),a}function Np(n,e){var r;const t=n.own,i=t.bag.findIndex(o=>o.id===e);let s=null;if(i>=0)s=t.bag.splice(i,1)[0];else for(const o of Rn)if(((r=t.gear[o])==null?void 0:r.id)===e){s=t.gear[o],delete t.gear[o];break}return un(n),s}function ui(n,e,t=1){if(e.dur-=t,e.dur>0)return;const i=n.own,s=i.bag.indexOf(e);s>=0&&i.bag.splice(s,1);for(const r of Rn)i.gear[r]===e&&delete i.gear[r];i.ride===e&&(i.ride=null,i.riding=!1,i.parked=null),ot(n,`His ${Ue[e.id].name.toLowerCase()} ${Ue[e.id].paper?"fell apart":"broke"}.`),un(n)}const vd=(n,e)=>n.own.bag.find(t=>t.id===e)??Rn.map(t=>n.own.gear[t]).find(t=>(t==null?void 0:t.id)===e);function xb(n,e){const t=n.own,i=t.bag[e],s=i&&Ue[i.id].slot;if(!i||!s)return!1;t.bag.splice(e,1);const r=t.gear[s];if(t.gear[s]=i,r)if(t.bag.length<Nr(n))t.bag.push(r);else return t.gear[s]=r,t.bag.splice(e,0,i),ot(n,"No room for the old one."),!1;return ot(n,`${Ue[i.id].name}: on.`),un(n),!0}function vb(n,e){const t=n.own,i=t.gear[e];if(!i)return!1;const s=e==="carry"?4:Nr(n);return t.bag.length+1>s?(ot(n,"His pockets can't hold all that."),!1):(delete t.gear[e],t.bag.push(i),un(n),!0)}function yb(n,e,t,i){const s=n.own;let r;if(typeof e=="number")r=s.bag.splice(e,1)[0];else{if(r=s.gear[e],r&&e==="carry"&&s.bag.length>4)return ot(n,"He can't drop the bag with all that in it."),!1;delete s.gear[e]}return r?(s.ground.push({...r,x:t,z:i}),ot(n,`Dropped the ${Ue[r.id].name.toLowerCase()}.`),un(n),!0):!1}function Mb(n,e,t,i=1.8){return n.own.ground.findIndex(s=>Math.hypot(s.x-e,s.z-t)<=i)}function bb(n,e){const t=n.own.ground[e];if(!t)return!1;const i=Ue[t.id];if(!(i.ride&&!n.own.ride||i.slot&&!n.own.gear[i.slot]||!i.ride&&n.own.bag.length<Nr(n)))return ot(n,i.ride?"He already has a ride.":"No room in the bag."),!1;n.own.ground.splice(e,1);const{x:r,z:o,...a}=t;return $t(n,t.id,t.x,t.z,a),Ln.emit(n,"find"),!0}function Up(n,e,t){const i=t&&Pi(n,"chef")?Math.round(e*1.5):e;return n.hunger=Ra(n.hunger+i),Ln.emit(n,"eat"),t&&Ln.emit(n,"eat:hot"),i}function kp(n,e,t=!1){const i=n.own,s=i.bag[e];if(!s||n.dead)return!1;const r=Ue[s.id];if(r.book)return Dp(n,r.book)||ot(n,"He knows this one by heart."),!0;if(r.food){const o=vd(n,"stove"),a=!!r.hot||!!o;i.bag.splice(e,1);const c=Up(n,r.food,a);return o&&!r.hot&&ui(n,o),ot(n,`${r.name}${a?", hot":""}. +${c} food`),un(n),!0}if(r.slot)return xb(n,e);switch(s.id){case"newspaper":return i.bag.splice(e,1),n.whimsy=Ra(n.whimsy+2),ot(n,"The news. Somehow worse than his day. +2 whimsy"),un(n),!0;case"radio":return n.whimsy=Ra(n.whimsy+5),ot(n,"Jazz. Of course. +5 whimsy"),ui(n,s),!0;case"chime":return n.whimsy=Ra(n.whimsy+4),ot(n,"Clink, clonk. Music. +4 whimsy"),ui(n,s),!0;case"tape":{const o=[...i.bag,...Rn.map(c=>i.gear[c]).filter(c=>!!c),...i.ride?[i.ride]:[]].filter(c=>c!==s);if(!o.length)return ot(n,"Nothing to tape."),!1;const a=o.reduce((c,l)=>c.dur/Ue[c.id].dur<=l.dur/Ue[l.id].dur?c:l);return a.dur=Math.min(Ue[a.id].dur,a.dur+3),ot(n,`Taped up the ${Ue[a.id].name.toLowerCase()}.`),ui(n,s),!0}case"necklace":return t?(i.bag.splice(e,1),i.gift=!0,ot(n,"He gives the necklace. They look at him differently now."),un(n),!0):(ot(n,"A gift needs someone to give it to."),!1)}return ot(n,`He turns the ${r.name.toLowerCase()} over in his hands. Not now.`),!1}function Sb(n,e,t){if(!Dn(n,"psych"))return null;const i=Io[e];return i.likes.includes(t)?"likes":i.hates.includes(t)?"hates":"meh"}function wb(n,e){var i,s;if(!n.items.sign)return!1;const t=(i=n.own.gear.hands)==null?void 0:i.text;return!t||Pi(n,"rightSign")?!0:((s=vh.find(r=>r.text===t))==null?void 0:s.suits.includes(e))??!0}function Eb(n){var t,i,s;let e=1;return((t=n.own.gear.head)==null?void 0:t.id)==="beanie"&&(e*=.5),((i=n.own.gear.hands)==null?void 0:i.id)==="gloves"&&(e*=.75),((s=n.own.gear.body)==null?void 0:s.id)==="jacket"&&(e*=.6),e}const Tb=n=>{var e,t;return((e=n.own.gear.hands)==null?void 0:e.id)==="umbrella"||((t=n.own.gear.body)==null?void 0:t.id)==="poncho"||kt(n,"rainCover")||kt(n,"tent")},Ab=[["common",.62],["good",.26],["rare",.1],["legendary",.02]];function uf(n,e,t,i=!1){const s=uc(Gr(`${n}#loot${e}#${t}`)),r=s(),o=i?.75:.42;if(r>=o){const d=(r-o)/(1-o);return d<.35?"coins":d<.6?"bottle":"nothing"}const a=i?.15+s()*.85:s();let c="legendary",l=0;for(const[d,u]of Ab)if(l+=u,a<l){c=d;break}const h=pb.filter(d=>Ue[d].rarity===c);return h[Math.floor(s()*h.length)]}function ff(n,e,t,i){if(e==="coins"){n.money+=1,ot(n,"A sticky dollar. Still money.");return}if(e==="bottle"){n.bottles++,ot(n,"A bottle.");return}if(e==="nothing"){ot(n,"Just trash. Classy trash, though.");return}const s=Ue[e];if(s.food&&Dn(n,"cook")){const r=Up(n,Math.round(s.food*1.5),!1);ot(n,`${s.name}, cooked up right. +${r} food`);return}s.book&&Dn(n,s.book)?ot(n,`Another ${s.name.toLowerCase()}. He knows it already.`):s.book||ot(n,`Found: ${s.name} (${s.rarity}).`),$t(n,e,t,i,{},!0)}function Rb(n){const e=n.own;for(const t of Rn){const i=e.gear[t];i&&ui(n,i)}if(e.ride&&e.rideT>0&&ui(n,e.ride),e.rideT=0,n.draw.weather==="rain"&&!Tb(n)){const t=[...e.bag,...Rn.map(i=>e.gear[i])].filter(i=>!!i&&!!Ue[i.id].paper);t.length&&ot(n,"Rain. His paper things got soaked.");for(const i of t)i.wet=!0,ui(n,i,2)}}function Cb(n,e){const t=n.own;if(kt(n,"tent"))return;const i=e==="street"?.6:e==="bridge"||e==="underpass"?.25:.35;if(t.bag.length&&en(n)<i){const s=t.bag.splice(Math.floor(en(n)*t.bag.length),1)[0];ot(n,`Someone went through his bag in the night. The ${Ue[s.id].name.toLowerCase()} is gone.`)}t.ride&&!t.riding&&!t.locked&&en(n)<.5&&(ot(n,`His ${Ue[t.ride.id].name.toLowerCase()} is gone. He should have locked it.`),t.ride=null,t.parked=null),un(n)}function Ib(n){const e=n.items,t=[[e.blanket,"blanket"],[e.goodBlanket,"goodBlanket"],[e.sign,"sign"],[e.shades,"shades"],[e.lighter,"lighter"],[e.jokebook,"book_joke"],[e.scooter,"scooter"]];for(const[i,s]of t)i&&$t(n,s,0,0,{},!0);n.messages=[]}const Fp={skateboard:{speed:1.6,sober:.08,drunk:2.6,drunkSpeed:1,fall:.035,fallHurt:6},scooter:{speed:1.7,sober:0,drunk:2,drunkSpeed:1,fall:.01,fallHurt:8},bike:{speed:2.1,sober:0,drunk:1.6,drunkSpeed:1.25,fall:.015,fallHurt:12}},yd=n=>n.own.riding&&n.own.ride?n.own.ride.id:null;function Lb(n,e,t,i){var o;const s=yd(n);if(s){const a=Fp[s];e*=a.speed,i?(e*=a.drunkSpeed,t=t*a.drunk+.3,s==="skateboard"&&Pi(n,"streetLegend")&&(t*=.5)):t+=a.sober}const r=(o=n.own.gear.carry)==null?void 0:o.id;return r==="trolley"&&(e*=.8),r==="cart"&&(e*=.85),{speed:e,wobble:t}}const Pb=n=>{var e,t;return((e=n.own.gear.carry)==null?void 0:e.id)==="trolley"||((t=n.own.gear.carry)==null?void 0:t.id)==="cart"};function Op(n,e,t){const i=n.own;return!i.ride||!i.riding?!1:(i.riding=!1,i.parked={x:e,z:t},i.locked=kt(n,"lock"),n.messages.push(i.locked?"Parked and locked.":"Parked. No lock. Hmm."),un(n),!0)}function Db(n,e,t){const i=n.own;return!i.ride||i.riding||!i.parked||Math.hypot(i.parked.x-e,i.parked.z-t)>2.2?!1:(i.riding=!0,i.parked=null,un(n),!0)}function Nb(n,e,t,i,s){var a;const r=n.own,o=yd(n);if(o){r.rideT+=e;const c=Fp[o];s&&en(n)<c.fall*e&&(n.health=Math.max(0,n.health-c.fallHurt),r.fell=!0,n.messages.push(o==="bike"?"He and the bike part ways. Hard.":"He ate the pavement."),Op(n,t,i),r.ride&&ui(n,r.ride)),o==="bike"&&((a=r.ride)!=null&&a.area)&&r.ride.area===hs(t,i)&&!n.usedToday.includes("owner")&&en(n)<.02*e&&(n.usedToday.push("owner"),n.copAlert=!0,n.messages.push(`"HEY! That's MY bike!" Someone is calling the cop.`))}else r.ride&&r.parked&&!r.locked&&Math.hypot(r.parked.x-t,r.parked.z-i)>12&&en(n)<.006*e&&(n.messages.push(`Someone rode off on his ${Ue[r.ride.id].name.toLowerCase()}. He should lock it.`),r.ride=null,r.parked=null,un(n))}const Md=[{x:-4,z:7.4},{x:52,z:-5},{x:-78,z:7.4},{x:88,z:7.4}];function Bp(n,e){return n.usedToday.includes("bike"+e)?!1:uc(Gr(`${n.seed}#rack${n.day}#${e}`))()<.7}const Ub=n=>Dn(n,"lockpick")||kt(n,"boltCutters"),zp=n=>Dn(n,"lockpick")?.55:.4;function Hp(n,e,t){n.usedToday.push("bike"+e);const i=!Dn(n,"lockpick");if(i){const a=vd(n,"boltCutters");a&&ui(n,a)}const s=t>=zp(n);let r=.18+.02*n.day+(s?0:.25)+(i?.1:0);Pi(n,"ghostHands")&&(r=0);const o=Md[e];return en(n)<r?en(n)<.5?(n.copAlert=!0,s&&$t(n,"bike",o.x,o.z,{area:hs(o.x,o.z)},!0),n.messages.push(s?"Got the bike, but the cop saw!":"The cop saw him fiddling with the lock!"),"cop"):(n.whimsy=Math.max(0,n.whimsy-3),n.messages.push('"HEY! Get off my bike!" The owner. He walks away fast.'),"owner"):s?($t(n,"bike",o.x,o.z,{area:hs(o.x,o.z)},!0),n.messages.push("Click. A bike. Nobody saw."),"got"):(n.messages.push("The lock wins. Nobody saw."),"fumbled")}const yr={pawn:{x:42.5,z:8.6,r:2.8,label:"Pawn shop"},books:{x:-36,z:7,r:2.6,label:"Used books"},library:{x:-66,z:-16,r:2,label:"Little library"}},il=(n,e)=>Math.hypot(n.x-yr[e].x,n.z-yr[e].z)<=yr[e].r,pf=(n,e)=>n.usedToday.filter(t=>t===e).length,Pn=(n,e)=>n.messages.push(e),mf=n=>Math.max(0,Math.min(100,n)),Vp=[{id:"backpack",price:6},{id:"sleepingBag",price:8},{id:"guitar",price:12},{id:"boltCutters",price:9},{id:"lock",price:4},{id:"scooter",price:20},{id:"luckyCharm",price:15}],bd=[{book:"joke",price:3},{book:"cook",price:3},{book:"poetry",price:3},{book:"psych",price:5},{book:"lockpick",price:5},{book:"dog",price:4}],gf=3;function kb(n,e){var o;const t=[],i=(a,c)=>t.push({id:`own:${a}`,label:c,whimsy:!1}),s=Mb(n,e.x,e.z);s>=0&&i(`grab:${s}`,"Grab "+Ue[n.own.ground[s].id].name.toLowerCase());const r=n.own;return r.riding?i("getoff","Get off"):r.ride&&r.parked&&Math.hypot(r.parked.x-e.x,r.parked.z-e.z)<=2.2&&i("mount","Ride"),wo.some(a=>Math.hypot(a.x-e.x,a.z-e.z)<=Ep)&&i("craft","Craft"),il(e,"pawn")&&i("pawn","Pawn shop"),il(e,"books")&&i("books","Book cart"),il(e,"library")&&!n.usedToday.includes("library")&&i("library","Little library"),Ub(n)&&!yd(n)&&Md.forEach((a,c)=>{Math.hypot(a.x-e.x,a.z-e.z)<=1.8&&Bp(n,c)&&i(`steal:${c}`,"Steal bike")}),((o=r.gear.hands)==null?void 0:o.id)==="guitar"&&pf(n,"busk")<gf&&!r.riding&&i("busk","Busk"),Dn(n,"poetry")&&pf(n,"recite")<gf&&!r.riding&&i("recite","Recite"),t}function Fb(n,e,t){const i=n.own;if(e.startsWith("grab:"))return bb(n,Number(e.slice(5)));if(e.startsWith("steal:")||e==="craft"||e==="pawn"||e==="books")return!0;switch(e){case"getoff":return Op(n,t.x,t.z);case"mount":return Db(n,t.x,t.z);case"library":{n.usedToday.push("library");const s=Object.keys(Fs).filter(r=>!Dn(n,r));return s.length&&en(n)<.6?$t(n,Fs[s[Math.floor(en(n)*s.length)]],t.x,t.z):(Pn(n,"Only a romance novel. He takes a newspaper instead."),$t(n,"newspaper",t.x,t.z,{},!0)),Ln.emit(n,"library"),!0}case"busk":{n.usedToday.push("busk");let s=1+Math.floor(en(n)*3);return Pi(n,"coolBusker")&&(s*=2),n.money+=s,n.whimsy=mf(n.whimsy+3),Pn(n,`He plays. ${Pi(n,"coolBusker")?"Too cool. ":""}+$${s}`),i.gear.hands&&Ob(n,i.gear.hands),Ln.emit(n,"busk"),!0}case"recite":{n.usedToday.push("recite");const s=Math.floor(en(n)*3)+(Pi(n,"troubadour")?2:0);return n.money+=s,n.whimsy=mf(n.whimsy+3),Pn(n,s?`He recites a poem about pigeons. +$${s}`:"He recites. Nobody pays. The pigeons clap, in spirit."),Ln.emit(n,"recite"),!0}}return!1}function Ob(n,e){en(n)<.3&&(e.dur-=1,e.dur<=0&&(Np(n,e.id),Pn(n,`His ${Ue[e.id].name.toLowerCase()} broke.`)))}function Bb(n,e,t,i,s){n.dead||Nb(n,e,t,i,s)}function Gp(n,e){const t=n.own.bag[e];if(!t)return!1;const i=Ue[t.id],s=Math.max(0,Math.round(i.value*(t.wet?.5:1)*Math.max(.4,t.dur/i.dur)));return s<=0?(Pn(n,`"I don't take trash, pal."`),!1):(n.own.bag.splice(e,1),n.money+=s,Pn(n,`Sold the ${i.name.toLowerCase()}. +$${s}`),un(n),Ln.emit(n,"pawn"),!0)}function zb(n,e,t=0,i=0){const s=Vp[e];return s?n.money<s.price?(Pn(n,"Not enough money."),!1):Ue[s.id].ride&&n.own.ride?(Pn(n,"He already has a ride."),!1):(n.money-=s.price,$t(n,s.id,t,i),Ln.emit(n,"buy"),!0):!1}function Hb(n,e,t=0,i=0){const s=bd[e];return s?Dn(n,s.book)&&kt(n,Fs[s.book])?(Pn(n,"He has that one."),!1):n.money<s.price?(Pn(n,"Not enough money."),!1):(n.money-=s.price,$t(n,Fs[s.book],t,i),Ln.emit(n,"buy"),!0):!1}function Vb(n,e,t=0,i=0){const s=bd[e];return!s||n.usedToday.includes("bookSteal")?(Pn(n,"The cart man is watching him now."),!1):(n.usedToday.push("bookSteal"),$t(n,Fs[s.book],t,i),en(n)<.5?(n.copAlert=!0,Pn(n,'"THIEF! Book thief!" Who steals a book?')):Pn(n,"Slipped it in his coat. Literature is free."),!0)}function Sd(){const n=["CAT","RAIN","BENCH","SODA","MOON","BREAD","COIN","DOG","TRAM","SNOW"];return n[Math.floor(Math.random()*n.length)]+Math.floor(Math.random()*900+100)}const mt={dayLength:180,nightAt:.72,sleepFrom:.6,withdrawalRate:.9,withdrawalDayGrowth:.3,withdrawalHurt:1.5,buzzDecay:.5,whimsyDrain:.3,whimsyDayGrowth:.1,whimsyBase:18,coldHurt:.08,highAt:5,carDamage:25,hungerStart:70,hungerRate:.35,hungerLow:20,hungerHurt:.25,sitDrain:.25,sitHeal:.2,sitGoal:8},mr={beer:{name:"Beer",price:3,buzz:35,wobble:.7,slow:.7},vodka:{name:"Vodka",price:5,buzz:60,wobble:1.6,slow:1.1},wine:{name:"Wine",price:4,buzz:45,wobble:.45,slow:.5},mix:{name:"Mix",price:0,buzz:50,wobble:.15,slow:.4}};function Wp(n,e){const t=uc(Gr(n+"#day"+e)),i=t(),s=i<.5?"mild":i<.8?"cold":"rain",r=.2+t()*.8,o=gd.map((h,d)=>d);for(let h=o.length-1;h>0;h--){const d=Math.floor(t()*(h+1));[o[h],o[d]]=[o[d],o[h]]}const a=8+Math.floor(t()*6),c=["coins","bread","bottle","beer","nothing","blanket","scooter","jokebook"],l=c[Math.floor(t()*c.length)];return{weather:s,generosity:r,bottleSpots:o.slice(0,a),dumpsterFind:l}}const mc={spray:{name:"Spray a passer-by",where:"sprinkler"},cat:{name:"Pet the cat",where:null},dance:{name:"Dance on the corner",where:"corner"},snack:{name:"Steal a snack",where:"bakery"},bench:{name:"Sing on the bench",where:"bench"}},Xp=Object.keys(mc),Gb={car:"A car hit him.",body:"His body gave out.",gaveup:"He gave up.",jail:"The cop caught him. Jail."};function wd(n,e=null){const t=Wp(n,1);return{seed:n,day:1,time:0,draw:t,rng:Gr(n+"#rng1"),health:100,withdrawal:30,buzz:0,whimsy:60,bestWhimsy:60,money:1,bottles:0,drinks:{beer:0,vodka:0,wine:0,mix:0},items:{blanket:!1,scooter:!1,goodBlanket:!1,sign:!1,shades:!1,lighter:!1,jokebook:!1},effect:null,bottlesLeft:t.bottleSpots.map(()=>!0),dumpsterUsed:!1,begTimer:0,whimsyToday:{},discovered:[],copAlert:!1,dead:null,messages:[],stash:e,hunger:mt.hungerStart,inv:{cigs:0,treats:0},sitting:!1,sitT:0,usedToday:[],areasToday:[],goals:xd(n,1),gives:0,own:xh()}}function Wb(n){const e=wd(n.seed,n.stash);return n.drinks={...e.drinks,...n.drinks??{}},n.items={...e.items,...n.items??{}},n.inv={...e.inv,...n.inv??{}},typeof n.hunger!="number"&&(n.hunger=e.hunger),typeof n.sitT!="number"&&(n.sitT=0),typeof n.sitting!="boolean"&&(n.sitting=!1),Array.isArray(n.usedToday)||(n.usedToday=[]),Array.isArray(n.areasToday)||(n.areasToday=[]),Array.isArray(n.goals)||(n.goals=xd(n.seed,n.day)),typeof n.gives!="number"&&(n.gives=0),n.own?n.own={...xh(),...n.own}:(n.own=xh(),Ib(n)),n.bottlesLeft.length!==n.draw.bottleSpots.length&&(n.bottlesLeft=n.draw.bottleSpots.map(()=>!0)),n}function $p(n){const[e,t]=pd(n.rng);return n.rng=t,e}const vt=(n,e=0,t=100)=>Math.max(e,Math.min(t,n)),ds=n=>n.buzz>=mt.highAt,Xb=n=>n.time>=mt.nightAt*mt.dayLength,Lo=n=>n.time/mt.dayLength;function ct(n,e){n.messages.push(e)}function Ur(n,e){n.dead||(n.dead=e)}function Ft(n,e,t=1){for(const i of n.goals){if(i.done)continue;const s=_d[i.id];!s||s.ev!==e||(i.got+=t,i.got>=s.n&&(i.done=!0,s.whimsy&&(n.whimsy=vt(n.whimsy+s.whimsy)),s.money&&(n.money+=s.money),n.bestWhimsy=Math.max(n.bestWhimsy,n.whimsy),ct(n,`Goal done: ${s.text}! ${s.whimsy?"+"+s.whimsy+" whimsy":"+$"+s.money}`)))}}function $b(n,e,t){const i=hs(e,t);return n.areasToday.includes(i)?null:(n.areasToday.push(i),Ft(n,"area"),fc[i].name)}const mn=(n,e)=>{const t=Ze[e];return Math.hypot(n.x-t.x,n.z-t.z)<=t.r},Ed=(n,e,t)=>e.findIndex(i=>Math.hypot(n.x-i.x,n.z-i.z)<=t),yh=n=>Ed(n,wo,Ep)>=0,qp=n=>Ed(n,_h,JM)>=0,jp=n=>Object.keys(cf).find(e=>mn(n,cf[e]))??null;function Yp(n,e){for(let t=0;t<n.draw.bottleSpots.length;t++){if(!n.bottlesLeft[t])continue;const i=gd[n.draw.bottleSpots[t]];if(Math.hypot(e.x-i.x,e.z-i.z)<=1.6)return t}return-1}const ma=(n,e)=>n.usedToday.includes(e);function Kp(n){return mn(n,"bridge")?"bridge":mn(n,"underpass")?"underpass":mn(n,"alley")?"alley":yh(n)?"bench":null}function Zp(n,e){const t=[];if(n.dead)return t;const i=ds(n),s=(h,d)=>t.push({id:h,label:d,whimsy:!1});if(n.sitting&&s("stand","Get up"),i)for(const h of Xp){const d=mc[h];let u=!1;h==="cat"?u=!!e.catNear:h==="spray"?u=mn(e,"sprinkler")&&!!e.pedNear:h==="bench"?u=yh(e):d.where&&(u=mn(e,d.where)),u&&t.push({id:`whimsy:${h}`,label:d.name,whimsy:!0})}e.ped&&e.ped.asks<=2&&s("beg",`Ask the ${Io[e.ped.kind].name.toLowerCase()}`),Yp(n,e)>=0&&s("pickup","Pick up bottle");const r=jp(e);r&&s(`enter:${r}`,"Go in"),QM.some(h=>mn(e,h))&&n.bottles>0&&s("recycle",`Recycle ${n.bottles} for $${n.bottles}`),mn(e,"dumpster")&&!n.dumpsterUsed&&s("dumpster","Dig in dumpster");const o=Ed(e,Tp,ZM);o>=0&&!ma(n,"trash"+o)&&s(`trash:${o}`,"Dig in the trash"),mn(e,"bakeryBin")&&!ma(n,"bakeryBin")&&s("bakeryBin","Check the bakery bin"),n.drinks.beer>0&&n.drinks.vodka>0&&s("mix","Mix beer + vodka"),Kp(e)&&Lo(n)>=mt.sleepFrom&&s("sleep","Sleep"),yh(e)&&!n.sitting&&s("sit","Sit");for(const h of pc)mn(e,h)&&!ma(n,h)&&s("pigeons","Feed pigeons");for(const h of md)mn(e,h)&&!ma(n,h)&&s("tv","Watch TV");if(mn(e,"stash"))if(n.stash)s("stashTake",`Take ${n.stash} from stash`);else{const h=Jp(n);h&&s("stashPut",`Hide ${h} for the next man`)}n.inv.cigs>0&&n.items.lighter&&s("smoke","Smoke");const c=kb(n,e),l=h=>/^own:(grab|steal|getoff)/.test(h.id);return t.unshift(...c.filter(l)),t.push(...c.filter(h=>!l(h))),t}function Jp(n){return n.drinks.vodka>0?"vodka":n.drinks.beer>0?"beer":n.items.blanket?"blanket":n.money>=3?"$3":null}function qb(n,e){const t=n.whimsyToday[e]??0,i=n.effect==="mix"?2:1;return Math.round(mt.whimsyBase*Math.pow(.5,t)*i)}function _o(n,e,t=!1){n.hunger=vt(n.hunger+e),Ft(n,"eat"),t&&Ft(n,"eat:hot")}function jb(n){$t(n,"book_joke",0,0,{},!0)}function Yb(n,e,t){if(n.dead||!Zp(n,t).some(i=>i.id===e))return!1;if(e.startsWith("whimsy:")){const i=e.slice(7),s=qb(n,i);return n.whimsy=vt(n.whimsy+s),n.bestWhimsy=Math.max(n.bestWhimsy,n.whimsy),n.whimsyToday[i]=(n.whimsyToday[i]??0)+1,n.discovered.includes(i)||n.discovered.push(i),i==="snack"&&(n.health=vt(n.health+8),_o(n,15),n.copAlert=!0),ct(n,`${mc[i].name}. +${s} whimsy`),Ft(n,"whimsy"),!0}if(e.startsWith("trash:")){const i=Number(e.slice(6));return n.usedToday.push("trash"+i),ff(n,uf(n.seed,n.day,"trash"+i),t.x,t.z),Ft(n,"trash"),!0}if(e.startsWith("enter:"))return!0;if(e.startsWith("own:"))return Fb(n,e.slice(4),t);switch(e){case"beg":return!0;case"pickup":{const i=Yp(n,t);return n.bottlesLeft[i]=!1,n.bottles++,ct(n,"Got a bottle."),!0}case"recycle":{const i=n.bottles,s=i*(Pi(n,"scrapper")?2:1);return n.money+=s,ct(n,`Recycled. +$${s}`),n.bottles=0,Ft(n,"recycle",i),!0}case"dumpster":{n.dumpsterUsed=!0;const i=n.draw.dumpsterFind;return i==="coins"?(n.money+=2,ct(n,"Found $2.")):i==="bread"?(n.health=vt(n.health+15),_o(n,25),ct(n,"Old bread. +15 health, +25 food")):i==="bottle"?(n.bottles++,ct(n,"Found a bottle.")):i==="beer"?(n.drinks.beer++,ct(n,"Half a beer. Nice.")):i==="blanket"?$t(n,"blanket",t.x,t.z):i==="scooter"?$t(n,"scooter",t.x,t.z):i==="jokebook"&&!n.items.jokebook?jb(n):ct(n,"Nothing."),ff(n,uf(n.seed,n.day,"dumpster",!0),t.x,t.z),!0}case"bakeryBin":return n.usedToday.push("bakeryBin"),_o(n,25),ct(n,"Yesterday's bread. Still soft. +25 food"),!0;case"buyBeer":case"buyVodka":return Qp(n,"liquor",e==="buyBeer"?"beer":"vodka");case"mix":return n.drinks.beer--,n.drinks.vodka--,n.drinks.mix++,ct(n,"Mixed them. Smells like trouble."),!0;case"sleep":return tm(n,Kp(t)??"bench"),!0;case"sit":return n.sitting=!0,n.sitT=0,!0;case"stand":return n.sitting=!1,!0;case"pigeons":{const i=pc.find(s=>mn(t,s));return n.usedToday.push(i),n.whimsy=vt(n.whimsy+5),ct(n,"He shares his crumbs. The pigeons approve. +5 whimsy"),Ft(n,"pigeons"),!0}case"tv":{const i=md.find(s=>mn(t,s));return n.usedToday.push(i),n.whimsy=vt(n.whimsy+4),ct(n,"A cooking show through the glass. Beautiful. +4 whimsy"),Ft(n,"tv"),!0}case"smoke":return n.inv.cigs--,n.whimsy=vt(n.whimsy+6),n.withdrawal=vt(n.withdrawal-8),ct(n,"A slow smoke. The city slows down too."),Ft(n,"smoke"),!0;case"stashPut":{const i=Jp(n);return i==="vodka"?n.drinks.vodka--:i==="beer"?n.drinks.beer--:i==="blanket"?Np(n,"blanket"):n.money-=3,n.stash=i,ct(n,`Hid the ${i}.`),!0}case"stashTake":{const i=n.stash;return i==="vodka"?n.drinks.vodka++:i==="beer"?n.drinks.beer++:i==="blanket"?$t(n,"blanket",t.x,t.z):n.money+=3,n.stash=null,ct(n,`Took the ${i}. Thanks, old friend.`),!0}}return!1}function gc(n,e){const t=["sad","compliment","howdy","honest"];return n.items.jokebook&&t.splice(3,0,"joke"),qp(e)&&t.push("door"),t}function Kb(n,e,t){var o;if(n.dead||!e.ped||!gc(n,e).includes(t))return null;const i=e.ped.kind,s=fc[hs(e.x,e.z)].gen(Lo(n)),r=hb(i,t,{asks:e.ped.asks,generosity:Math.min(1,n.draw.generosity+(kt(n,"luckyCharm")?.1:0)+(i==="party"&&((o=n.own.gear.body)==null?void 0:o.id)==="jacket"?.2:0)),areaMul:s,sign:wb(n,i),high:ds(n)},n.own.gift?()=>.001:()=>$p(n));return n.own.gift=!1,t==="door"&&Ft(n,"line:door"),r.outcome==="give"&&(n.gives++,r.money&&(n.money+=r.money),r.food&&_o(n,r.food),Ft(n,"give"),Ft(n,"give:"+i)),r.laughed&&(n.whimsy=vt(n.whimsy+4),Ft(n,"laugh:"+i)),r.outcome==="hate"&&(n.whimsy=vt(n.whimsy-2)),r.callCop&&(n.copAlert=!0),r}function Qp(n,e,t,i={x:0,z:0}){if(n.dead||!Cp[e].includes(t))return!1;const s=Rp[t],o={lighter:"lighter",sign:"sign",shades:"shades",goodBlanket:"goodBlanket",jokebook:"jokebook"}[t];if(o&&n.items[o])return ct(n,"He already has one."),!1;if(n.money<s.price)return ct(n,"Not enough money."),!1;if(n.money-=s.price,Ft(n,"buy"),t==="beer"||t==="vodka"||t==="wine")n.drinks[t]++,ct(n,`Bought ${s.name.toLowerCase()}.`);else if(s.food)_o(n,s.food,s.hot),t==="soup"&&(n.health=vt(n.health+5)),t==="coffee"&&(n.withdrawal=vt(n.withdrawal-10)),ct(n,`${s.name}. +${s.food} food`);else if(t==="cigs")n.inv.cigs+=5,ct(n,"Five smokes.");else if(t==="treats")n.inv.treats++,ct(n,"Dog treats. For someday.");else if(t==="scratch"){const a=db($p(n)*(kt(n,"luckyCharm")?.5:1));a?(n.money+=a,Ft(n,"scratch:win"),ct(n,`Scratch card: WIN $${a}!`)):ct(n,"Scratch card: nothing. Next one, surely.")}else o&&($t(n,o==="jokebook"?"book_joke":o,i.x,i.z,{},!0),o!=="jokebook"&&ct(n,`Got the ${s.name.toLowerCase()}.`));return!0}function em(n){return n.drinks.mix>0?"mix":n.drinks.vodka>0?"vodka":n.drinks.wine>0?"wine":n.drinks.beer>0?"beer":null}function Zb(n){if(n.dead)return!1;const e=em(n);return e?(n.drinks[e]--,n.buzz=vt(n.buzz+mr[e].buzz),n.withdrawal=vt(n.withdrawal-40),e==="mix"&&(n.health=vt(n.health-12)),(!n.effect||mr[e].buzz>=mr[n.effect].buzz||e==="mix")&&(n.effect=e),ct(n,`Drank the ${mr[e].name.toLowerCase()}.`),Ft(n,"drink:"+e),n.health<=0&&Ur(n,"body"),!0):(ct(n,"Nothing to drink."),!1)}function Jb(n){const e=n.buzz/100,t=n.effect?mr[n.effect]:mr.beer;let i=5.5*(1-e*.5*t.slow),s=ds(n)?e*t.wobble:0;return n.items.blanket&&!n.items.goodBlanket&&(i*=.85),Lb(n,i,s,ds(n))}function tm(n,e){const t=n.draw.weather==="cold",i=n.draw.weather==="rain";if(n.sitting=!1,e==="street")n.health=vt(n.health-20-(t?10:0)),n.money=Math.floor(n.money/2),ct(n,"He passed out on the street. Someone took his money.");else{const s=e==="bridge"||e==="underpass";let r=e==="bridge"?20:e==="underpass"?17:e==="alley"?12:15;t&&(r=s?8:2),i&&!s&&(r=4),n.items.goodBlanket?r+=20:n.items.blanket&&(r+=12),kt(n,"sleepingBag")&&(r+=15),kt(n,"bedroll")&&(r+=18),kt(n,"tent")&&(r+=15),Pi(n,"snugCamp")&&(r+=15),i&&!s&&(kt(n,"tent")||kt(n,"bedroll")||kt(n,"rainCover"))&&(r+=8),n.health=vt(n.health+r),ct(n,t?"A cold night.":i&&!s?"A wet night.":e==="bridge"?"He slept under the bridge. The river talked all night.":"He slept."),Ft(n,"sleep:"+e)}if(Cb(n,e),n.withdrawal=vt(n.withdrawal+15),n.hunger=vt(n.hunger-10),n.health<=0){Ur(n,"body");return}Qb(n)}function Qb(n){n.day++,n.time=0,n.draw=Wp(n.seed,n.day),n.rng=Gr(n.seed+"#rng"+n.day),n.buzz=0,n.effect=null,n.bottlesLeft=n.draw.bottleSpots.map(()=>!0),n.dumpsterUsed=!1,n.whimsyToday={},n.begTimer=0,n.usedToday=[],n.areasToday=[],n.goals=xd(n.seed,n.day),ct(n,`Day ${n.day}. ${nm(n.draw.weather)}`),Rb(n)}function nm(n){return n==="cold"?"Cold today.":n==="rain"?"Rain today.":"Mild today."}function eS(n,e){if(n.dead)return;const t=n.day-1;n.time+=e,n.begTimer=Math.max(0,n.begTimer-e),ds(n)?n.withdrawal=vt(n.withdrawal-1*e):n.withdrawal=vt(n.withdrawal+mt.withdrawalRate*(1+mt.withdrawalDayGrowth*t)*e),n.buzz=vt(n.buzz-mt.buzzDecay*e),n.buzz<=0&&(n.effect=null);const i=n.sitting?mt.sitDrain:1;if(n.whimsy=vt(n.whimsy-mt.whimsyDrain*(1+mt.whimsyDayGrowth*t)*i*e),n.hunger=vt(n.hunger-mt.hungerRate*e),n.hunger<mt.hungerLow&&(n.health-=mt.hungerHurt*(n.hunger<=0?2.5:1)*e),n.sitting){n.health+=mt.sitHeal*e;const s=n.sitT;n.sitT+=e,s<mt.sitGoal&&n.sitT>=mt.sitGoal&&Ft(n,"sit")}if(n.withdrawal>=100&&(n.health-=mt.withdrawalHurt*e),n.draw.weather==="cold"&&(n.health-=mt.coldHurt*Eb(n)*e),n.health=vt(n.health),n.health<=0)return Ur(n,"body");if(n.whimsy<=0)return Ur(n,"gaveup");n.time>=mt.dayLength&&tm(n,"street")}function tS(n){n.dead||(n.sitting=!1,n.health=vt(n.health-mt.carDamage),ct(n,"A car hit him."),n.health<=0&&Ur(n,"car"))}function nS(n){Ur(n,"jail")}function iS(n){const e=n.items.shades?1:0;return{speed:3.6+.3*(n.day-1),sight:(18+3*(n.day-1))*(1-.3*e)*(Pb(n)?1.3:1),drunkRange:(4+1.5*(n.day-1))*(1-.4*e),drunkAt:Math.max(40,70-10*(n.day-1))}}Ln.emit=Ft;const ho={halfW:1.6},Mh=eb,rr={go:9,slow:2,stop:7};function sS(n){const e=rr.go+rr.slow+rr.stop,t=(n%e+e)%e;return t<rr.go?"go":t<rr.go+rr.slow?"slow":"stop"}const gn={cruiseMin:6,cruiseMax:8.5,brake:12,accel:4,seeAhead:13,laneHalf:1.9,stopGap:2.6,followGap:5.6,hitLen:2.1,hitWide:1.2,honkAhead:11};function rS(n,e,t,i){let s=n.cruise,r=!1;if(e&&Math.abs(e.z-n.z)<gn.laneHalf){const o=(e.x-n.x)*n.dir;o>0&&o<gn.seeAhead&&(s=Math.min(s,Math.max(0,(o-gn.stopGap)*1.2)),o<gn.honkAhead&&(r=!0))}if(i){const o=(i.x-n.x)*n.dir;o>0&&(s=Math.min(s,Math.max(0,(o-gn.followGap)*1.5)))}if(t!=="go")for(const o of Mh){const c=(o-n.dir*(ho.halfW+2.4)-n.x)*n.dir,l=c>=n.speed*n.speed/(2*gn.brake)-.3;c>=-.2&&c<30&&(t==="stop"||l)&&(s=Math.min(s,Math.max(0,c*1.2)))}return{want:s,honk:r}}function oS(n,e,t){return e<n?Math.max(e,n-gn.brake*t):Math.min(e,n+gn.accel*t)}function aS(n,e){return Math.abs(n.x-e.x)<gn.hitLen&&Math.abs(n.z-e.z)<gn.hitWide}const bh=3;function cS(n,e,t,i,s=Date.now()){if(n.dead)return null;const r=JSON.parse(JSON.stringify(n));return r.messages=[],r.copAlert=!1,JSON.stringify({v:bh,s:r,px:e,pz:t,face:i,savedAt:s})}function im(n){if(!n)return null;try{const e=JSON.parse(n);return!e||![1,2,bh].includes(e.v)||!e.s||typeof e.s.seed!="string"||e.s.dead||![e.px,e.pz,e.s.health,e.s.time,e.s.day].every(t=>typeof t=="number"&&isFinite(t))?null:(e.s.messages=[],Wb(e.s),e.v=bh,e)}catch{return null}}function _f(n,e){if(e===Eg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===hh||e===$f){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===hh)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class lS extends Vr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new wS(t)}),this.register(function(t){return new ES(t)}),this.register(function(t){return new TS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new yS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new MS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new SS(t)}),this.register(function(t){return new bS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new AS(t)}),this.register(function(t){return new RS(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=go.extractUrlBase(e);o=go.resolveURL(l,this.path)}else o=go.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new bp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===sm){try{o[$e.KHR_BINARY_GLTF]=new CS(e)}catch(d){s&&s(d);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new VS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case $e.KHR_MATERIALS_UNLIT:o[d]=new uS;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[d]=new IS(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[d]=new LS;break;case $e.KHR_MESH_QUANTIZATION:o[d]=new PS;break;default:u.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function hS(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class dS{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ae(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],fn);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Sp(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new NM(h),l.distance=d;break;case"spot":l=new PM(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ti(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class uS{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return ri}extendParams(e,t,i){const s=[];e.color=new Ae(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],fn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(s)}}class fS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class pS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(a,a)}return Promise.all(r)}}class mS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class gS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class _S{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],fn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Nt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class xS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class vS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(a[0],a[1],a[2],fn),Promise.all(r)}}class yS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class MS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(a[0],a[1],a[2],fn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Nt)),Promise.all(r)}}class bS{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class SS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class wS{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class ES{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class TS{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class AS{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,d=s.byteStride,u=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,u,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(f),h,d,u,s.mode,s.filter),f})})}else return null}}class RS{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==Fn.TRIANGLES&&l.mode!==Fn.TRIANGLE_STRIP&&l.mode!==Fn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(const g of d){const _=new Fe,m=new P,p=new In,b=new P(1,1,1),M=new rd(g.geometry,g.material,u);for(let x=0;x<u;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&b.fromBufferAttribute(c.SCALE,x),M.setMatrixAt(x,_.compose(m,p,b));for(const x in c)if(x==="_COLOR_0"){const C=c[x];M.instanceColor=new fh(C.array,C.itemSize,C.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);At.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const sm="glTF",oo=12,xf={JSON:1313821514,BIN:5130562};class CS{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,oo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-oo,r=new DataView(e,oo);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===xf.JSON){const l=new Uint8Array(e,oo+o,a);this.content=i.decode(l)}else if(c===xf.BIN){const l=oo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class IS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const d=Sh[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=Sh[h]||h.toLowerCase();if(o[h]!==void 0){const u=i.accessors[e.attributes[h]],f=Mr[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}d(f)},a,l,fn,u)})})}}class LS{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class PS{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class rm extends Co{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,d=(i-t)/h,u=d*d,f=u*d,g=e*l,_=g-l,m=-2*f+3*u,p=f-u,b=1-m,M=p-u+d;for(let x=0;x!==a;x++){const C=o[_+x+a],A=o[_+x+c]*h,R=o[g+x+a],I=o[g+x]*h;r[x]=b*C+M*A+m*R+p*I}return r}}const DS=new In;class NS extends rm{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return DS.fromArray(r).normalize().toArray(r),r}}const Fn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Mr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vf={9728:Gt,9729:An,9984:Uf,9985:Ma,9986:ao,9987:Ci},yf={33071:ts,33648:za,10497:Tr},sl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},US={CUBICSPLINE:void 0,LINEAR:Mo,STEP:yo},rl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kS(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new hd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ni})),n.DefaultMaterial}function bs(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ti(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function FS(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const d=e[l];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];if(i){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(u)}if(s){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],d=l[1],u=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=d),r&&(n.morphAttributes.color=u),n.morphTargetsRelative=!0,n})}function OS(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function BS(n){let e;const t=n.extensions&&n.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ol(t.attributes):e=n.indices+":"+ol(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+ol(n.targets[i]);return e}function ol(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function wh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zS(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const HS=new Fe;class VS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new CM(this.options.manager):this.textureLoader=new kM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return bs(r,a,s),Ti(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(go.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=sl[s.type],a=Mr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new dn(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=sl[s.type],l=Mr[s.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==d){const p=Math.floor(u/f),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let M=t.cache.get(b);M||(_=new l(a,p*f,s.count*f/h),M=new up(_,f/h),t.cache.add(b,M)),m=new So(M,c,u%f/h,g)}else a===null?_=new l(s.count*c):_=new l(a,u,s.count*c),m=new dn(_,c,g);if(s.sparse!==void 0){const p=sl.SCALAR,b=Mr[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,C=new b(o[1],M,s.sparse.count*p),A=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new dn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,I=C.length;R<I;R++){const w=C[R];if(m.setX(w,A[R*c]),c>=2&&m.setY(w,A[R*c+1]),c>=3&&m.setZ(w,A[R*c+2]),c>=4&&m.setW(w,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const u=(r.samplers||{})[o.sampler]||{};return h.magFilter=vf[u.magFilter]||An,h.minFilter=vf[u.minFilter]||Ci,h.wrapS=yf[u.wrapS]||Tr,h.wrapT=yf[u.wrapT]||Tr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Gt&&h.minFilter!==An,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(d){l=!0;const u=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(u),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ot(_);m.needsUpdate=!0,u(m)}),t.load(go.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),Ti(d,o),d.userData.mimeType=o.mimeType||zS(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new xp,Wn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new _p,Wn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return hd}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const d=s[$e.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Ae(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],fn),a.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,Nt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=di);const h=r.alphaMode||rl.OPAQUE;if(h===rl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===rl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ri&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Le(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==ri&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ri){const d=r.emissiveFactor;a.emissive=new Ae().setRGB(d[0],d[1],d[2],fn)}return r.emissiveTexture!==void 0&&o!==ri&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(l).then(function(){const d=new o(a);return r.name&&(d.name=r.name),Ti(d,r),t.associations.set(d,{materials:e}),r.extensions&&bs(s,d,r),d})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Mf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=BS(l),d=s[h];if(d)o.push(d.promise);else{let u;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=Mf(new rn,l,t),s[h]={primitive:l,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?kS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const b=l[f];if(m.mode===Fn.TRIANGLES||m.mode===Fn.TRIANGLE_STRIP||m.mode===Fn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new uM(_,b):new it(_,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Fn.TRIANGLE_STRIP?p.geometry=_f(p.geometry,$f):m.mode===Fn.TRIANGLE_FAN&&(p.geometry=_f(p.geometry,hh));else if(m.mode===Fn.LINES)p=new mM(_,b);else if(m.mode===Fn.LINE_STRIP)p=new od(_,b);else if(m.mode===Fn.LINE_LOOP)p=new gM(_,b);else if(m.mode===Fn.POINTS)p=new _M(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&OS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ti(p,r),m.extensions&&bs(s,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&bs(s,d[0],r),d[0];const u=new Oe;r.extensions&&bs(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new ln(jf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new ac(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ti(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const d=o[l];if(d){a.push(d);const u=new Fe;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new sd(a,c)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let d=0,u=s.channels.length;d<u;d++){const f=s.channels[d],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,b=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",b)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let b=0,M=u.length;b<M;b++){const x=u[b],C=f[b],A=g[b],R=_[b],I=m[b];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const w=i._createAnimationTracks(x,C,A,R,I);if(w)for(let v=0;v<w.length;v++)p.push(w[v])}return new mh(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,HS)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new mp:l.length>1?h=new Oe:l.length===1?h=l[0]:h=new At,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=o),Ti(h,r),r.extensions&&bs(i,h,r),r.matrix!==void 0){const d=new Fe;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Oe;i.name&&(r.name=s.createUniqueName(i.name)),Ti(r,i),i.extensions&&bs(t,r,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,d=c.length;h<d;h++)r.add(c[h]);const l=h=>{const d=new Map;for(const[u,f]of s.associations)(u instanceof Wn||u instanceof Ot)&&d.set(u,f);return h.traverse(u=>{const f=s.associations.get(u);f!=null&&d.set(u,f)}),d};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];Ki[r.path]===Ki.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(a);let l;switch(Ki[r.path]){case Ki.weights:l=Lr;break;case Ki.rotation:l=Pr;break;case Ki.position:case Ki.scale:l=Dr;break;default:switch(i.itemSize){case 1:l=Lr;break;case 2:case 3:default:l=Dr;break}break}const h=s.interpolation!==void 0?US[s.interpolation]:Mo,d=this._getArrayFromAccessor(i);for(let u=0,f=c.length;u<f;u++){const g=new l(c[u]+"."+Ki[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=wh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Pr?NS:rm;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function GS(n,e,t){const i=e.attributes,s=new fi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){const h=wh(Mr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,c=new P;for(let l=0,h=r.length;l<h;l++){const d=r[l];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const _=wh(Mr[u.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new pi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Mf(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(const o in i){const a=Sh[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return qe.workingColorSpace!==fn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),Ti(n,e),GS(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?FS(n,e.targets,t):n})}function WS(n){const e=new Map,t=new Map,i=n.clone();return om(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function om(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)om(n.children[i],e.children[i],t)}const bf=new Map;function ne(n,e=0,t=1){const i=n+":"+e+":"+t;let s=bf.get(i);return s||(s=new ci({color:n,emissive:e,emissiveIntensity:t}),bf.set(i,s)),s}const _c=[];function am(n,e){const t=new ci({color:n,emissive:e,emissiveIntensity:0});return _c.push(t),t}function ee(n,e,t,i,s=0,r=0,o=0,a=!0){const c=new it(new zi(n,e,t),i);return c.position.set(s,r,o),c.castShadow=a,c.receiveShadow=!0,c}function $a(n,e,t,i,s=8){const r=new it(new Ai(n,e,t,s),i);return r.castShadow=!0,r.receiveShadow=!0,r}const XS={"car-sedan":{file:"car-kit/sedan.glb",fit:3.8,axis:"len",rotY:Math.PI/2},"car-taxi":{file:"car-kit/taxi.glb",fit:3.9,axis:"len",rotY:Math.PI/2},"car-van":{file:"car-kit/van.glb",fit:4.1,axis:"len",rotY:Math.PI/2},"car-suv":{file:"car-kit/suv.glb",fit:3.9,axis:"len",rotY:Math.PI/2},"bld-a":{file:"city-kit-commercial/building-a.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-c":{file:"city-kit-commercial/building-c.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-f":{file:"city-kit-commercial/building-f.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-h":{file:"city-kit-commercial/building-h.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-j":{file:"city-kit-commercial/building-j.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-d":{file:"city-kit-commercial/building-d.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-k":{file:"city-kit-commercial/building-k.glb",fit:1,axis:"raw",rotY:Math.PI},"tower-a":{file:"city-kit-commercial/building-skyscraper-a.glb",fit:1,axis:"raw",rotY:Math.PI},"tower-b":{file:"city-kit-commercial/building-skyscraper-b.glb",fit:1,axis:"raw",rotY:Math.PI},pillar:{file:"city-kit-roads/bridge-pillar.glb",fit:3,axis:"h"},dumpster:{file:"city-kit-roads/dumpster.glb",fit:2.4,axis:"len"},lamp:{file:"city-kit-roads/light-square.glb",fit:4.4,axis:"h"},man:{file:"mini-characters/character-male-e.glb",fit:1.75,axis:"h",rotY:Math.PI},cop:{file:"mini-characters/character-male-b.glb",fit:1.9,axis:"h",rotY:Math.PI},"ped-0":{file:"mini-characters/character-female-b.glb",fit:1.7,axis:"h",rotY:Math.PI},"ped-1":{file:"mini-characters/character-male-c.glb",fit:1.75,axis:"h",rotY:Math.PI},"ped-2":{file:"mini-characters/character-female-d.glb",fit:1.7,axis:"h",rotY:Math.PI}},Td=new Map,Ad=[],$S=n=>Td.has(n);async function qS(n=8e3){const e=new lS,t=Promise.all(Object.entries(XS).map(async([i,s])=>{try{const r=await e.loadAsync("models/"+s.file),o=r.scene;let a=!1;o.traverse(_=>{const m=_;m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0),_.isSkinnedMesh&&(a=!0,_.frustumCulled=!1)});const c=new Oe;c.add(o),c.rotation.y=s.rotY??0;const l=new Oe;l.add(c),l.updateMatrixWorld(!0);const h=new fi().setFromObject(l),d=h.getSize(new P),u=s.axis==="len"?Math.max(d.x,d.z):s.axis==="h"?d.y:0,f=u>0?s.fit/u:1;c.scale.setScalar(f),l.updateMatrixWorld(!0),h.setFromObject(l);const g=h.getCenter(new P);c.position.set(-g.x,-h.min.y,-g.z),Td.set(i,{obj:l,clips:r.animations,size:h.getSize(new P),skinned:a}),Ad.push(i)}catch{}}));await Promise.race([t,new Promise(i=>setTimeout(i,n))])}function Wr(n){const e=Td.get(n);return e?{obj:e.skinned?WS(e.obj):e.obj.clone(),clips:e.clips,size:e.size}:null}function Xr(n,e){const t=new Oe,i=Wr(n);return t.add(i?i.obj:e),t}function al(n,e,t={}){var m;const i=t.skin??14262906,s=new Oe,r=(p,b,M,x,C)=>{const A=new Oe;return A.position.set(x,C,0),A.add(ee(p,b,p,M,0,-b/2,0)),s.add(A),A},o=r(.24,.8,ne(e),-.15,.82),a=r(.24,.8,ne(e),.15,.82);s.add(ee(.62,.72,.38,ne(n),0,1.18,0));const c=r(.17,.66,ne(n),-.41,1.5),l=r(.17,.66,ne(n),.41,1.5),h=new Oe;h.position.y=1.78,h.add(ee(.42,.42,.42,ne(i),0,0,0)),h.add(ee(.3,.07,.04,ne(2759188),0,.05,-.215,!1)),t.hair!==void 0&&h.add(ee(.46,.14,.46,ne(t.hair),0,.22,.02)),t.hat!==void 0&&h.add(ee(.48,.2,.48,ne(t.hat),0,.27,0)),s.add(h);const d=new Oe,u=t.model?Wr(t.model):null;let f=null;const g={};if(u){d.add(u.obj),t.tint!==void 0&&u.obj.traverse(p=>{const b=p;if(b.isMesh){const M=b.material.clone();M.color.set(t.tint),b.material=M}}),f=new YM(u.obj);for(const p of u.clips)g[p.name]=f.clipAction(p);(m=g.idle)==null||m.play()}else d.add(s);const _=new Oe;return _.add(d),{g:_,body:d,legL:o,legR:a,armL:c,armR:l,head:h,phase:Math.random()*6,mixer:f,acts:g,cur:"idle",oneShot:0,model:!!u}}function cm(n,e,t=.2){var s;if(n.cur===e||!n.acts[e])return;const i=n.acts[e];i.reset().play(),(s=n.acts[n.cur])==null||s.crossFadeTo(i,t,!1),n.cur=e}function Ds(n,e,t=!1){const i=n.acts[e];i&&(i.setLoop(Xf,1),i.clampWhenFinished=t,cm(n,e,.1),n.oneShot=t?999:i.getClip().duration*.9)}function qa(n,e,t){const i=Math.floor(n.phase/Math.PI);if(e>=.2&&(n.phase+=t*(4+e*1.6)),n.mixer)return n.oneShot>0?n.oneShot-=t:(cm(n,e>=.2?e>4.5?"sprint":"walk":"idle"),n.acts.walk&&(n.acts.walk.timeScale=Math.max(.6,e/1.9)),n.acts.sprint&&(n.acts.sprint.timeScale=Math.max(.6,e/5))),n.mixer.update(t),e>=.2&&Math.floor(n.phase/Math.PI)!==i;if(e<.2)return n.legL.rotation.x*=.8,n.legR.rotation.x*=.8,n.armL.rotation.x*=.8,n.armR.rotation.x*=.8,n.body.position.y*=.8,!1;const s=Math.sin(n.phase)*Math.min(.75,.25+e*.12);return n.legL.rotation.x=s,n.legR.rotation.x=-s,n.armL.rotation.x=-s*.8,n.armR.rotation.x=s*.8,n.body.position.y=Math.abs(Math.sin(n.phase))*.11,Math.floor(n.phase/Math.PI)!==i}const lm=new Ai(.36,.36,.28,10);lm.rotateX(Math.PI/2);function jS(n,e=0){const t=new Oe,i=ne(n),s=ne(2371644),r=e===2,o=r?4:3.6;t.add(ee(o,.72,1.8,i,0,.62,0)),r?t.add(ee(2.9,1,1.72,i,-.4,1.45,0)):t.add(ee(e===1?2.4:1.9,.62,1.62,i,e===1?-.3:-.25,1.28,0));const a=r?2.92:e===1?2.42:1.92;t.add(ee(a,.34,1.66,s,r?-.4:e===1?-.3:-.25,r?1.55:1.3,0,!1)),t.add(ee(.06,.18,.4,ne(16773808,16773808,.9),o/2+.01,.72,.6,!1)),t.add(ee(.06,.18,.4,ne(16773808,16773808,.9),o/2+.01,.72,-.6,!1));const c=new ci({color:7344144,emissive:16719904,emissiveIntensity:.15});t.add(ee(.06,.18,.36,c,-o/2-.01,.75,.62,!1)),t.add(ee(.06,.18,.36,c,-o/2-.01,.75,-.62,!1));const l=[],h=ne(1710618);for(const m of[o/2-.8,-o/2+.8])for(const p of[.86,-.86]){const b=new it(lm,h);b.position.set(m,.36,p),b.castShadow=!0,t.add(b),l.push(b)}const d=["car-sedan","car-taxi","car-van","car-suv"][e%4],u=Wr(d);if(!u)return{g:Xr("none",t),wheels:l,brake:c,spin:"z",spinSign:-1};const f=new Oe;f.add(u.obj);const g=u.size.x/2;f.add(ee(.06,.16,.34,c,-g-.02,.8,.55,!1)),f.add(ee(.06,.16,.34,c,-g-.02,.8,-.55,!1));const _=[];return u.obj.traverse(m=>{m.name.startsWith("wheel")&&_.push(m)}),{g:f,wheels:_,brake:c,spin:"x",spinSign:1}}function Ss(n,e,t=1){const i=new Oe,s=$a(.18,.26,1.6,ne(6965806),6);s.position.y=.8,i.add(s);const r=ne(4165434),o=new it(new Xa(1.4,0),r);o.position.y=2.6;const a=new it(new Xa(1,0),ne(5416517));a.position.set(.3,3.5,.2);for(const l of[o,a])l.castShadow=!0,l.receiveShadow=!0,i.add(l);const c=Xr("none",i);return c.position.set(n,0,e),c.scale.setScalar(t),c.rotation.y=n*1.3,c}const hm=new ri({color:16760944,transparent:!0,opacity:0,blending:Ba,depthWrite:!1}),YS=hm;function Sf(n,e,t){const i=new Oe,s=$a(.08,.11,4.2,ne(3027512),6);s.position.y=2.1,i.add(s),i.add(ee(.12,.12,1.2,ne(3027512),0,4.15,t*.55));const r=am(16773312,16765056);i.add(ee(.4,.16,.4,r,0,4,t*1.1,!1));const o=Wr("lamp");let a;o?(a=new Oe,o.obj.rotation.y=t>0?Math.PI:0,a.add(o.obj),a.add(ee(.36,.1,.36,r,0,o.size.y-.32,t*(o.size.z-.25),!1))):a=Xr("none",i),a.position.set(n,0,e);const c=new it(new hc(2.6,16),hm);return c.rotation.x=-Math.PI/2,c.position.set(n,.23,e+t*1.1),{g:a,pool:c}}function KS(){const n=new Oe;n.add(ee(2.4,1.3,1.4,ne(3111482),0,.75,0));const e=ee(2.5,.12,1.5,ne(2317356),0,1.45,.08);e.rotation.x=-.12,n.add(e);for(const t of[-1,1])n.add(ee(.12,.2,.12,ne(2236962),t*1,.1,0));return Xr("dumpster",n)}function ZS(){const n=new Oe,e=ne(10118192);n.add(ee(3,.12,.8,e,0,.5,0)),n.add(ee(3,.55,.1,e,0,.9,-.38));for(const t of[-1.3,1.3])n.add(ee(.1,.5,.7,ne(2763306),t,.25,0));return Xr("none",n)}function JS(){const n=new Oe,e=new ci({color:4182112,emissive:1731114,emissiveIntensity:.6}),t=$a(.14,.14,.42,e,6);t.position.y=.21;const i=$a(.05,.08,.18,e,6);return i.position.y=.5,n.add(t,i),n.rotation.z=Math.PI/2.4,n}function QS(){const n=new Oe,e=ne(14715424);n.add(ee(.3,.26,.62,e,0,.3,0)),n.add(ee(.26,.24,.24,e,0,.48,-.36)),n.add(ee(.07,.1,.05,e,-.08,.64,-.38)),n.add(ee(.07,.1,.05,e,.08,.64,-.38));const t=ee(.07,.07,.45,e,0,.45,.48);t.rotation.x=.7,n.add(t);for(const i of[-.1,.1])for(const s of[-.22,.22])n.add(ee(.07,.2,.07,e,i,.1,s));return Xr("none",n)}const e1=am(3820134,16762730),t1=new zi(1,1,.08),Eh=[];function Th(n,e,t,i,s){Eh.push(new Fe().compose(new P(n,e,t),new In,new P(i,s,1)))}function n1(){const n=new rd(t1,e1,Eh.length);return Eh.forEach((e,t)=>n.setMatrixAt(t,e)),n}function i1(n,e,t){const i=document.createElement("canvas");i.width=256,i.height=64;const s=i.getContext("2d");s.fillStyle=e,s.fillRect(0,0,256,64),s.fillStyle=t,s.font="bold 40px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(n,128,34);const r=new lc(i);return r.colorSpace=Nt,r}const dm=["bld-a","bld-c","bld-f","bld-h","bld-j","bld-d","bld-k"],s1=["tower-a","tower-b"];function r1(n,e,t,i,s=dm){const r=s.filter($S);if(!r.length)return null;const o=new Oe,a=e-n,c=Math.max(1,Math.round(a/6.5));for(let l=0;l<c;l++){const h=Wr(r[(i+l*2)%r.length]),d=a/c,u=d/h.size.x;h.obj.scale.setScalar(u),h.obj.position.set(n+(l+.5)*d,0,t+h.size.z*u/2),o.add(h.obj)}return o}function Kn(n,e,t,i,s,r,o=0,a="kit"){const c=a==="plain"?null:r1(n,e,t,o,a==="tower"?s1:dm),l=new Oe,h=e-n;if(c)return l.add(c),l.add(ee(h*.96,s*.55,(i-t)*.5,ne(r),(n+e)/2,s*.275,i-(i-t)*.25)),l.userData.kit=!0,l;l.add(ee(h,s,i-t,ne(r),(n+e)/2,s/2,(t+i)/2)),l.add(ee(h+.2,.3,i-t+.2,ne(5263450),(n+e)/2,s+.15,(t+i)/2));const d=Math.max(1,Math.floor(h/2.6));for(let u=3.4;u<s-1;u+=2.8)for(let f=0;f<d;f++)Th(n+(f+.5)*(h/d),u+.6,t-.03,1.1,1.3);return l}function or(n,e,t,i,s,r,o,a,c,l,h=0,d="kit"){const u=Kn(n,e,t,i,s,r,h,d),f=e-n,g=(n+e)/2;u.userData.kit||(Th(g-f*.22,1.35,t-.03,f*.38,1.6),Th(g+f*.28,1.35,t-.03,f*.26,1.6),u.add(ee(1.1,2.1,.1,ne(3810328),g+f*.02,1.05,t-.04,!1)));const _=Math.max(4,Math.round(f/.9)),m=new Oe;for(let x=0;x<_;x++)m.add(ee(f/_+.01,.08,1.6,ne(x%2?o:a),n+(x+.5)*(f/_),0,0,!0));m.position.set(0,2.75,t-.8),m.rotation.x=-.32,u.add(m);const p=i1(c,l,"#fff"),b=new ci({map:p,emissive:16777215,emissiveIntensity:0,emissiveMap:p});_c.push(b);const M=new it(new Fi(Math.min(f*.7,6),1.2),b);return M.position.set(g,3.55,t-.25),M.rotation.y=Math.PI,u.add(M),u}function cl(n,e){const t=document.createElement("canvas");t.width=256,t.height=64;const i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,256,64),i.fillStyle="#fff",i.font="bold 30px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,128,34);const s=new pp(new id({map:new lc(t)}));return s.scale.set(3,.75,1),s}function wf(n){const e=new Oe,t=ne(1710618);for(const s of[-.55,.55]){const r=new it(new ld(.36,.05,6,16),t);r.rotation.y=Math.PI/2,r.position.set(0,.38,s),e.add(r)}const i=ne(n);return e.add(ee(.06,.06,1.1,i,0,.62,0)),e.add(ee(.06,.5,.06,i,0,.6,-.25)),e.add(ee(.2,.06,.3,ne(2236962),0,.88,-.25)),e.add(ee(.55,.05,.05,ne(3355443),0,.98,.5)),e}function o1(){const n=new Oe;n.add(ee(.32,.05,1,ne(14174762),0,.12,0));for(const e of[-.35,.35])n.add(ee(.3,.08,.08,ne(15658734),0,.05,e));return n}class a1{constructor(e,t){this.ground=new Oe,this.groundKey="",this.rackBikes=[],this.parked={},this.under={},e.add(this.ground);const i=yr.pawn,s=cl("PAWN","#7a2a8a");s.position.set(i.x,3.6,i.z+1),e.add(s);const r=yr.books,o=new Oe;o.add(ee(1.6,.7,.8,ne(6965802),0,.6,0)),[13126202,3828424,15255626,4892778,9063112].forEach((d,u)=>o.add(ee(.22,.32,.6,ne(d),-.6+u*.3,1.1,0))),o.position.set(r.x,0,r.z+1.2),e.add(o);const c=cl("USED BOOKS","#3a5a3a");c.position.set(r.x,2.2,r.z+1.2),e.add(c);const l=yr.library;e.add(ee(.12,1.1,.12,ne(5913114),l.x,.55,l.z)),e.add(ee(.7,.6,.5,ne(3832520),l.x,1.35,l.z));const h=cl("FREE BOOKS","#3a7ac8");h.position.set(l.x,2.2,l.z),h.scale.set(2,.5,1),e.add(h),Md.forEach((d,u)=>{e.add(ee(1.6,.06,.06,ne(8947848),d.x,.7,d.z));const f=wf([2788056,14170682,3848282,15249450][u%4]);f.rotation.y=Math.PI/2,f.position.set(d.x,0,d.z),e.add(f),this.rackBikes.push(f)});for(const d of["skateboard","scooter","bike"]){const u=()=>d==="bike"?wf(2788056):d==="skateboard"?o1():(()=>{const f=new Oe;return f.add(ee(.28,.08,1.1,ne(2276266),0,.1,0)),f.add(ee(.06,1,.06,ne(3355443),0,.6,-.5)),f})();this.parked[d]=u(),this.parked[d].visible=!1,e.add(this.parked[d]),d!=="scooter"&&(this.under[d]=u(),this.under[d].visible=!1,t.add(this.under[d]))}}update(e,t){const i=e.own,s=i.ground.map(r=>r.id+r.x.toFixed(1)+r.z.toFixed(1)).join("|");if(s!==this.groundKey){this.groundKey=s,this.ground.clear();for(const r of i.ground){const o=Ip[Ue[r.id].rarity],a=ee(.4,.3,.4,ne(o,o,.6),r.x,.2,r.z),c=new it(new hc(.75,20),new ri({color:o,transparent:!0,opacity:.45,depthWrite:!1,blending:Ba}));c.rotation.x=-Math.PI/2,c.position.set(r.x,.03,r.z),this.ground.add(a,c)}}this.ground.children.forEach((r,o)=>{o%2===0?(r.position.y=.25+Math.sin(t*3+o)*.08,r.rotation.y=t):r.scale.setScalar(1+Math.sin(t*4+o)*.15)}),this.rackBikes.forEach((r,o)=>r.visible=Bp(e,o));for(const r of Object.keys(this.parked)){const o=!!i.ride&&i.ride.id===r;this.parked[r].visible=o&&!i.riding&&!!i.parked,this.parked[r].visible&&this.parked[r].position.set(i.parked.x,0,i.parked.z),this.under[r]&&(this.under[r].visible=o&&i.riding)}}}const ja=[{id:"sign",out:"sign",need:["cardboard","marker"]},{id:"tent",out:"tent",need:["tarp","pole","pole"]},{id:"stove",out:"stove",need:["can","candle"],book:"cook"},{id:"cart",out:"cart",need:["crate","trolley"]},{id:"skateboard",out:"skateboard",need:["plank","wheel"]},{id:"necklace",out:"necklace",need:["caps","string"]},{id:"rainCover",out:"rainCover",need:["umbrella","tape"]},{id:"chime",out:"chime",need:["can","string"]},{id:"bedroll",out:"bedroll",need:["blanket","tarp"]},{id:"hotStew",out:"hotStew",need:["beans","bread"],tool:"stove",book:"cook"}],Ef=["He tapes it together. It falls apart. He tapes it again. Art.","That is now a worse version of two things.","He stares at it. It stares back. Nothing happens.","A pigeon watches. The pigeon is not impressed.","It is a hat now? No. It is nothing.","He invents something. Nobody, including him, knows what.","Close. Very close. Also, completely wrong."];function um(n){return ja.filter(e=>e.id==="sign"||e.book&&Dn(n,e.book)||n.own.known.includes(e.id))}const ll=n=>[...n].sort().join("+");function c1(n){const e=ll(n);return ja.find(t=>ll(t.need)===e||t.tool&&ll([...t.need,t.tool])===e)??null}function fm(n,e){const t=[...n.own.bag,...Rn.map(s=>n.own.gear[s]).filter(s=>!!s)],i=[];for(const s of e){const r=t.findIndex(o=>o.id===s&&!i.includes(o));if(r<0)return null;i.push(t[r])}return i}function pm(n,e,t=0,i=0){if(n.dead||e.length<2)return{ok:!1,line:"He needs at least two things."};const s=fm(n,e);if(!s)return{ok:!1,line:"He doesn't have all that."};const r=c1(e);if(!r){const h=Ef[Math.floor(en(n)*Ef.length)];return n.messages.push(h),{ok:!1,line:h}}const o=r.tool?vd(n,r.tool):void 0;if(r.tool&&!o){const h=`So close. He needs a ${Ue[r.tool].name.toLowerCase()} for that.`;return n.messages.push(h),{ok:!1,line:h}}const a=n.own;for(const h of s){if(h===o)continue;const d=a.bag.indexOf(h);d>=0&&a.bag.splice(d,1);for(const u of Rn)a.gear[u]===h&&delete a.gear[u]}o&&ui(n,o);const c=!um(n).includes(r);a.known.includes(r.id)||a.known.push(r.id);const l=r.out==="sign"?{text:vh[Math.floor(en(n)*vh.length)].text}:{};return n.messages.push(`Made: ${Ue[r.out].name}${"text"in l?` ("${l.text}")`:""}.${c?" New recipe!":""}`),$t(n,r.out,t,i,l,!0),Ln.emit(n,"craft"),un(n),{ok:!0,out:r.out,recipe:r}}const l1=(n,e)=>!!fm(n,e.need)&&(!e.tool||kt(n,e.tool)),h1=n=>!!n&&/^(bag|craft|pawn|books|steal:\d+)$/.test(n),d1=n=>"#"+n.toString(16).padStart(6,"0"),cr=n=>d1(Ip[Ue[n].rarity]);let Zt=null,kn=[],ga="";const u1=`
.otabs{display:flex;gap:6px}.otab{flex:1;padding:8px;border-radius:10px;background:#fff1;text-align:center;font-weight:800;font-size:14px}.otab.on{background:#f2ede2;color:#111}
.ogrid{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}.ocell{aspect-ratio:1;border-radius:10px;background:#fff1;border:2px solid #fff2;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:11px;text-align:center;padding:2px;line-height:1.1;position:relative}
.ocell.on{outline:3px solid #fff}.ocell .sl{position:absolute;top:2px;left:4px;font-size:9px;opacity:.55;text-transform:uppercase}.ocell .du{position:absolute;bottom:3px;left:6px;right:6px;height:3px;background:#fff2;border-radius:2px}.ocell .du i{display:block;height:100%;background:#9f9;border-radius:2px}
.odet{background:#fff1;border-radius:12px;padding:10px;font-size:13px}.odet b{font-size:15px}.obtns{display:flex;gap:6px;margin-top:8px}.obtns button,.obtn{flex:1;padding:10px;border-radius:10px;border:0;font-weight:800;font-size:14px;background:#f2ede2;color:#111}
.otag{display:inline-block;padding:3px 8px;border-radius:8px;background:#ffb02e33;margin:2px;font-size:12px}.ochip{display:inline-block;padding:7px 10px;border-radius:10px;background:#fff1;border:2px solid #fff2;margin:3px;font-size:13px}.ochip.on{background:#f2ede2;color:#111}
.orec{font-size:13px;padding:6px 10px;border-radius:10px;background:#fff1;margin:3px 0}.orec.no{opacity:.45}.ohead{font-size:12px;opacity:.6;margin-top:4px;text-transform:uppercase;letter-spacing:.05em}
.obar{position:relative;height:44px;border-radius:12px;background:#fff1;overflow:hidden;margin:14px 0}.obar .zone{position:absolute;top:0;bottom:0;background:#4ad86a66}.obar .mk{position:absolute;top:0;bottom:0;width:6px;margin-left:-3px;background:#fff;animation:omk 1.1s ease-in-out infinite alternate}
@keyframes omk{from{left:0}to{left:100%}}
#combo{position:fixed;left:0;right:0;top:38%;text-align:center;pointer-events:none;z-index:90;font-weight:900;font-size:30px;color:#ffd84a;text-shadow:0 3px 0 #000,0 0 20px #ff8ae0;opacity:0}
#combo.go{animation:ocombo 2.2s ease-out}#combo small{display:block;font-size:15px;color:#fff}
@keyframes ocombo{0%{opacity:0;transform:scale(.4)}12%{opacity:1;transform:scale(1.15)}22%{transform:scale(1)}80%{opacity:1}100%{opacity:0;transform:translateY(-30px)}}
#bagBtn svg{width:22px;height:22px}`;function f1(n){var s;const e=document.createElement("style");e.textContent=u1,document.head.appendChild(e);const t=document.createElement("div");t.id="combo",document.body.appendChild(t);const i=document.createElement("div");i.className="tbtn",i.id="bagBtn",i.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M6 8h12l-1 13H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',i.addEventListener("pointerdown",r=>{r.preventDefault(),n()}),(s=document.getElementById("pauseBtn"))==null||s.before(i)}function p1(n){const e=document.getElementById("combo");if(!e)return;const[t,i]=n.replace("Combo! ","").split(": ");e.innerHTML=`COMBO! ${t}<small>${i??""}</small>`,e.classList.remove("go"),e.offsetWidth,e.classList.add("go")}function an(n,e){n.addEventListener("pointerdown",t=>{t.preventDefault(),e()})}function Tf(n,e,t){if(!n)return`<div class="ocell"><span class="sl">${e}</span></div>`;const i=Ue[n.id],s=Math.max(0,Math.min(1,n.dur/i.dur));return`<div class="ocell${t?" on":""}" style="border-color:${cr(n.id)}"><span class="sl">${e}</span>${i.name}${n.wet?" (wet)":""}<span class="du"><i style="width:${s*100}%;background:${s<.3?"#f66":"#9f9"}"></i></span></div>`}function m1(n,e,t,i){const s=e==="bag"||e==="craft"?`<div class="otabs"><div class="otab${e==="bag"?" on":""}" data-k="bag">Bag</div><div class="otab${e==="craft"?" on":""}" data-k="craft">Craft</div></div>`:"",r=e==="bag"?`Bag ${t.own.bag.length}/${Nr(t)}`:e==="craft"?"Craft":e==="pawn"?"Pawn shop":e==="books"?"Used books":"The lock";n.innerHTML=`<div class="shead"><b>${r}</b><span class="smoney">$${t.money}</span></div>${s}<div class="slist"></div><button class="sclose">Done</button>`;const o=n.querySelector(".slist");an(n.querySelector(".sclose"),()=>{Zt=null,kn=[],ga="",i.close()}),n.querySelectorAll(".otab").forEach(f=>an(f,()=>i.open(f.dataset.k)));const a=(f,g="pop")=>{i.sound(f?g:"nope"),i.flush(),i.rerender()},{x:c,z:l}=i.pos();if(e==="bag"){const f=t.own,g=Rn.map(C=>Tf(f.gear[C],C,Zt===C)).join(""),_=Array.from({length:Nr(t)},(C,A)=>Tf(f.bag[A],"",Zt===A)).join(""),m=typeof Zt=="number"?f.bag[Zt]:Zt?f.gear[Zt]:void 0;let p='<div class="odet" style="opacity:.6">Tap a thing.</div>';if(m){const C=Ue[m.id];p=`<div class="odet"><b style="color:${cr(m.id)}">${C.name}</b> <span style="opacity:.6">${C.rarity}</span><br>${C.desc}<br><i>${C.effect}</i>${m.text?`<br>Says: "${m.text}"`:""}<br><span style="opacity:.6">Wear ${m.dur}/${C.dur}</span>
        <div class="obtns">${typeof Zt=="number"?`<button data-a="use">${C.slot?"Equip":C.book?"Read":"Use"}</button>`:'<button data-a="off">Take off</button>'}<button data-a="drop">Drop</button></div></div>`}const b=f.ride?`<div class="orec">Ride: <b>${Ue[f.ride.id].name}</b> (${f.riding?"riding":f.locked?"parked, locked":"parked, unlocked"}) wear ${f.ride.dur}/${Ue[f.ride.id].dur}</div>`:"",M=f.books.length?f.books.map(C=>`<span class="otag">${Ue[Fs[C]].name}</span>`).join(""):'<span style="opacity:.5">None read yet.</span>',x=f.combos.length?f.combos.map(C=>{const A=Pp.find(R=>R.id===C);return`<span class="otag">${A.name}: ${A.text}</span>`}).join(""):'<span style="opacity:.5">None yet. Some pairs do more together.</span>';o.innerHTML=`<div class="ohead">Worn</div><div class="ogrid gear">${g}</div><div class="ohead">Bag</div><div class="ogrid bag">${_}</div>${p}${b}<div class="ohead">Books read</div><div>${M}</div><div class="ohead">Combos</div><div>${x}</div>`,o.querySelectorAll(".gear .ocell").forEach((C,A)=>an(C,()=>{Zt=f.gear[Rn[A]]?Rn[A]:null,i.rerender()})),o.querySelectorAll(".bag .ocell").forEach((C,A)=>an(C,()=>{Zt=f.bag[A]?A:null,i.rerender()})),o.querySelector("[data-a=use]")&&an(o.querySelector("[data-a=use]"),()=>{const C=kp(t,Zt,i.pedNear());Zt=null,a(C,"sparkle")}),o.querySelector("[data-a=off]")&&an(o.querySelector("[data-a=off]"),()=>{const C=vb(t,Zt);Zt=null,a(C)}),o.querySelector("[data-a=drop]")&&an(o.querySelector("[data-a=drop]"),()=>{const C=yb(t,Zt,c,l);Zt=null,a(C)});return}if(e==="craft"){const f=[...t.own.bag.map(M=>M.id),...Rn.map(M=>{var x;return(x=t.own.gear[M])==null?void 0:x.id}).filter(M=>!!M)],g=[...f];for(const M of kn){const x=g.indexOf(M);x>=0?g.splice(x,1):kn=[]}const _=f.map((M,x)=>`<span class="ochip${kn.filter(C=>C===M).length>f.slice(0,x).filter(C=>C===M).length?" on":""}" data-i="${x}" style="border-color:${cr(M)}">${Ue[M].name}</span>`).join(""),m=um(t),p=m.map(M=>`<div class="orec${l1(t,M)?"":" no"}" data-r="${M.id}">${M.need.map(x=>Ue[x].name).join(" + ")}${M.tool?` (with ${Ue[M.tool].name.toLowerCase()})`:""} = <b>${Ue[M.out].name}</b></div>`).join(""),b=ja.length-m.length;o.innerHTML=`<div class="ohead">Pick things to combine</div><div>${_||'<span style="opacity:.5">Nothing to work with. Dig in the trash.</span>'}</div>
      <button class="obtn" data-a="make">Make it (${kn.length})</button>${ga?`<div class="odet">${ga}</div>`:""}
      <div class="ohead">Recipes he knows</div>${p}<div class="orec no">${b} more to find: books, or trying.</div>`,o.querySelectorAll(".ochip").forEach(M=>an(M,()=>{const x=f[Number(M.dataset.i)],C=kn.filter(A=>A===x).length;M.classList.contains("on")?kn.splice(kn.lastIndexOf(x),1):C<f.filter(A=>A===x).length&&kn.push(x),i.rerender()})),o.querySelectorAll(".orec[data-r]").forEach(M=>an(M,()=>{kn=[...ja.find(C=>C.id===M.dataset.r).need],i.rerender()})),an(o.querySelector("[data-a=make]"),()=>{const M=pm(t,kn,c,l);ga=M.ok?`Made: <b>${Ue[M.out].name}</b>`:M.line,kn=[],a(M.ok,"sparkle")});return}if(e==="pawn"){const f=t.own.bag.map((_,m)=>`<div class="srow" data-s="${m}"><div><div class="sname" style="color:${cr(_.id)}">${Ue[_.id].name}</div><div class="snote">Sell</div></div><div class="sbuy">+$${Math.round(Ue[_.id].value*(_.wet?.5:1)*Math.max(.4,_.dur/Ue[_.id].dur))}</div></div>`).join(""),g=Vp.map((_,m)=>`<div class="srow${t.money<_.price?" poor":""}" data-b="${m}"><div><div class="sname" style="color:${cr(_.id)}">${Ue[_.id].name}</div><div class="snote">${Ue[_.id].effect}</div></div><div class="sbuy">$${_.price}</div></div>`).join("");o.innerHTML=`<div class="sgreet">"Everything has a price. Even that."</div><div class="ohead">Sell from the bag</div>${f||'<div style="opacity:.5">Nothing in the bag.</div>'}<div class="ohead">Buy</div>${g}`,o.querySelectorAll("[data-s]").forEach(_=>an(_,()=>a(Gp(t,Number(_.dataset.s)),"clink"))),o.querySelectorAll("[data-b]").forEach(_=>an(_,()=>a(zb(t,Number(_.dataset.b),c,l))));return}if(e==="books"){o.innerHTML='<div class="sgreet">"Fifty cents a page. Kidding. Mostly."</div>'+bd.map((f,g)=>{const _=Fs[f.book];return`<div class="srow"><div><div class="sname" style="color:${cr(_)}">${Ue[_].name}${t.own.books.includes(f.book)?" (read)":""}</div><div class="snote">${Ue[_].effect}</div></div><div style="display:flex;gap:6px"><button class="obtn" data-b="${g}">$${f.price}</button><button class="obtn" data-t="${g}" style="background:#c44;color:#fff">Steal</button></div></div>`}).join(""),o.querySelectorAll("[data-b]").forEach(f=>an(f,()=>a(Hb(t,Number(f.dataset.b),c,l),"sparkle"))),o.querySelectorAll("[data-t]").forEach(f=>an(f,()=>a(Vb(t,Number(f.dataset.t),c,l),"sparkle")));return}const h=Number(e.slice(6)),u=(1-zp(t))/2;o.innerHTML=`<div class="sgreet">Tap when the marker is in the green. Quick, people are walking by.</div>
    <div class="obar"><div class="zone" style="left:${(.5-u)*100}%;width:${u*200}%"></div><div class="mk"></div></div><button class="obtn" data-a="pick">Now!</button>`,an(o.querySelector("[data-a=pick]"),()=>{const f=o.querySelector(".obar").getBoundingClientRect(),g=o.querySelector(".mk").getBoundingClientRect(),_=(g.left+g.width/2-f.left)/f.width,m=Hp(t,h,1-Math.abs(_-.5)*2);i.sound(m==="got"?"sparkle":"nope"),i.flush(),i.close()})}let Tt=null,Di=null,Ah=null,xc=!1;const Ca=[];function g1(){try{if(!Tt){const n=window.AudioContext||window.webkitAudioContext;if(!n)return;Tt=new n,Di=Tt.createGain(),Di.gain.value=xc?0:.55,Di.connect(Tt.destination),Ah=Tt.createBuffer(1,Tt.sampleRate,Tt.sampleRate);const e=Ah.getChannelData(0);for(let i=0;i<e.length;i++)e[i]=Math.random()*2-1;const t=Tt.createBufferSource();t.buffer=Tt.createBuffer(1,1,22050),t.connect(Tt.destination),t.start(0)}Tt.state==="suspended"&&Tt.resume()}catch{}}function _1(){try{Tt&&Tt.state==="running"&&Tt.suspend()}catch{}}function mm(n){xc=n,Di&&(Di.gain.value=n?0:.55)}const _a=()=>xc,x1=()=>Tt?Tt.state:"none";function Vt(n,e,t,i,s,r,o){const a=Tt,c=a.createOscillator(),l=a.createGain();return c.type=n,c.frequency.setValueAtTime(e,i),t!==e&&c.frequency.exponentialRampToValueAtTime(Math.max(1,t),i+s),l.gain.setValueAtTime(1e-4,i),l.gain.exponentialRampToValueAtTime(r,i+Math.min(.012,s/4)),l.gain.exponentialRampToValueAtTime(1e-4,i+s),c.connect(l).connect(o??Di),c.start(i),c.stop(i+s+.02),c}function hl(n,e,t,i,s,r=1){const o=Tt,a=o.createBufferSource();a.buffer=Ah;const c=o.createBiquadFilter();c.type=i,c.frequency.value=s,c.Q.value=r;const l=o.createGain();l.gain.setValueAtTime(t,n),l.gain.exponentialRampToValueAtTime(1e-4,n+e),a.connect(c).connect(l).connect(Di),a.start(n,Math.random()*.5),a.stop(n+e+.02)}function Je(n,e={}){if(Ca.push({name:n,t:performance.now()}),Ca.length>60&&Ca.shift(),!Tt||!Di||Tt.state!=="running"||xc)return;const t=Tt.currentTime+.005,i=e.pitch??1,s=e.vol??1;switch(n){case"step":hl(t,.05,.12*s,"bandpass",900*i,2),Vt("sine",140*i,90*i,t,.05,.08*s);break;case"coin":Vt("square",988,988,t,.07,.12*s),Vt("square",1319,1319,t+.07,.22,.12*s);break;case"clink":Vt("sine",2650*i,2600*i,t,.35,.16*s),Vt("sine",3910*i,3900*i,t,.22,.08*s),Vt("sine",2650*i*1.06,2600*i,t+.09,.25,.1*s);break;case"gulp":for(let r=0;r<3;r++)Vt("sine",320-r*30,120,t+r*.17,.13,.35*s);hl(t+.52,.12,.08,"lowpass",600);break;case"horn":{const r=Tt.createBiquadFilter();r.type="lowpass",r.frequency.value=1400,r.connect(Di),Vt("sawtooth",349*i,349*i,t,.38,.12*s,r),Vt("sawtooth",440*i,440*i,t,.38,.1*s,r);break}case"hit":hl(t,.35,.6*s,"lowpass",1800),Vt("sine",120,40,t,.35,.6*s),Vt("square",70,50,t,.12,.2*s);break;case"whistle":{const r=Vt("sine",2900,2900,t,.6,.18*s),o=Tt.createOscillator(),a=Tt.createGain();o.frequency.value=28,a.gain.value=220,o.connect(a).connect(r.frequency),o.start(t),o.stop(t+.62);break}case"sparkle":{[1047,1319,1568,2093,2637].forEach((o,a)=>Vt("triangle",o*i,o*i,t+a*.055,.28,.1*s));break}case"heart":Vt("sine",62,45,t,.14,.55*s),Vt("sine",58,42,t+.2,.16,.4*s);break;case"pop":Vt("sine",500*i,1100*i,t,.09,.2*s);break;case"tap":Vt("triangle",660,660,t,.05,.08*s);break;case"nope":Vt("square",220,160,t,.15,.08*s);break}}const Ya=[{rows:240,shadow:0,glow:!1},{rows:320,shadow:512,glow:!0},{rows:420,shadow:1024,glow:!0}],v1=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,y1=`
uniform sampler2D tScene;
uniform vec2 res;
uniform float scale;
uniform float sat, warm, contrast, glow, red, jitter, time, bright;
varying vec2 vUv;
vec3 tap(vec2 p) { return texture2D(tScene, p).rgb; }
void main() {
  // One low-res pixel = scale x scale screen pixels, counted from the top-left, so every pixel is the same size.
  vec2 cell = floor(gl_FragCoord.xy / scale);
  if (jitter > 0.0) cell += floor(jitter * vec2(sin(time * 53.0), cos(time * 41.0)) + 0.5);
  vec2 px = (cell + 0.5) / res; // nearest pixel: the chunky look
  vec3 c = tap(px);
  if (glow > 0.0) {
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
    c += b * glow * 0.35;
  }
  c = pow(max(c, 0.0), vec3(1.0 / 2.2)); // grade in display space
  c *= bright;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  c = mix(vec3(l), c, sat);
  c = (c - 0.5) * contrast + 0.5;
  c *= mix(vec3(0.93, 0.98, 1.07), vec3(1.08, 1.0, 0.88), warm);
  vec2 d = vUv - 0.5;
  float v = dot(d, d);
  c *= 1.0 - v * 0.55;
  c = mix(c, vec3(0.32, 0.0, 0.02), clamp(red * smoothstep(0.06, 0.3, v) * 1.2, 0.0, 0.9));
  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}
`;class M1{constructor(e){this.renderer=e,this.qScene=new dp,this.qCam=new ac(-1,1,1,-1,0,1),this.rows=420,this.scale=2,this.lowW=1,this.lowH=1,this.rt=new ls(4,4,{minFilter:Gt,magFilter:Gt,type:Or,depthBuffer:!0}),this.u={tScene:{value:this.rt.texture},res:{value:new Le(4,4)},sat:{value:1},warm:{value:0},contrast:{value:1},glow:{value:0},red:{value:0},jitter:{value:0},time:{value:0},bright:{value:1},scale:{value:2}},this.quad=new it(new Fi(2,2),new ki({uniforms:this.u,vertexShader:v1,fragmentShader:y1,depthTest:!1,depthWrite:!1})),this.quad.frustumCulled=!1,this.qScene.add(this.quad)}setSize(e,t,i){this.rows=i,this.scale=Math.max(1,Math.round(t/i)),this.lowH=Math.ceil(t/this.scale),this.lowW=Math.ceil(e/this.scale),this.u.scale.value=this.scale,this.rt.setSize(this.lowW,this.lowH),this.u.res.value.set(this.lowW,this.lowH)}render(e,t,i,s,r){this.u.sat.value=i.sat,this.u.warm.value=i.warm,this.u.contrast.value=i.contrast,this.u.glow.value=r?i.glow:0,this.u.red.value=i.red,this.u.jitter.value=i.jitter,this.u.time.value=s,this.u.bright.value=i.bright,this.renderer.setRenderTarget(this.rt),this.renderer.render(e,t),this.renderer.setRenderTarget(null),this.renderer.render(this.qScene,this.qCam)}}const Eo=new URLSearchParams(location.search),gm=Eo.has("debug"),xn=(n,e=0,t=1)=>Math.max(e,Math.min(t,n)),Zi=(n,e,t)=>n+(e-n)*t,tn={raw(n){try{return localStorage.getItem("sg_"+n)}catch{return null}},setRaw(n,e){try{localStorage.setItem("sg_"+n,e)}catch{}},del(n){try{localStorage.removeItem("sg_"+n)}catch{}},get(n,e){try{const t=tn.raw(n);return t?JSON.parse(t):e}catch{return e}},set(n,e){tn.setRaw(n,JSON.stringify(e))}},hn=new hM({antialias:!1,powerPreference:"high-performance"});hn.setPixelRatio(1);hn.setSize(window.innerWidth,window.innerHeight,!1);hn.shadowMap.enabled=!0;hn.shadowMap.type=Df;hn.info.autoReset=!1;document.body.prepend(hn.domElement);const ii=new M1(hn),nn=new dp,We=new ln(60,window.innerWidth/window.innerHeight,.1,160);let zn=Eo.has("q")?xn(Math.round(Number(Eo.get("q"))),0,2):2;const b1=!Eo.has("q"),Rh=new IM(13624575,5917242,1.2);nn.add(Rh);const Ut=new Sp(16773590,2.4);Ut.shadow.camera.left=-22;Ut.shadow.camera.right=22;Ut.shadow.camera.top=22;Ut.shadow.camera.bottom=-22;Ut.shadow.camera.near=1;Ut.shadow.camera.far=80;Ut.shadow.bias=-6e-4;Ut.shadow.normalBias=.03;nn.add(Ut,Ut.target);nn.fog=new nd(12896456,26,62);const dl=62;function Rd(){var e;const n=Ya[zn];Ut.castShadow=n.shadow>0,n.shadow>0&&Ut.shadow.mapSize.x!==n.shadow&&(Ut.shadow.mapSize.set(n.shadow,n.shadow),(e=Ut.shadow.map)==null||e.dispose(),Ut.shadow.map=null),ii.setSize(window.innerWidth,window.innerHeight,n.rows)}let xo=60;function _m(){hn.setSize(window.innerWidth,window.innerHeight,!1),We.aspect=window.innerWidth/window.innerHeight,xo=We.aspect<1?70:50,We.fov=xo,We.updateProjectionMatrix(),Rd()}window.addEventListener("resize",_m);const xm=[],ws=(n,e,t,i)=>xm.push({x0:n,x1:e,z0:t,z1:i}),vm=[],S1=()=>new ri({color:16777215,transparent:!0,opacity:.2,depthWrite:!1}),ym=[],Mm=[];function Xt(n){return nn.add(n),n}function tt(n,e,t=0){return nn.add(n),Mm.push({o:n,x:e,z:t}),n}function w1(n,e,t,i,s=1){const r=document.createElement("canvas");let o=r.getContext("2d");o.font="bold 54px sans-serif";const a=Math.max(512,Math.ceil(o.measureText(n).width)+48);r.width=a,r.height=96,o=r.getContext("2d"),o.fillStyle="rgba(0,0,0,0.55)",o.fillRect(0,0,a,96),o.fillStyle="#fff",o.font="bold 54px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(n,a/2,50);const c=new lc(r);c.colorSpace=Nt;const l=new pp(new id({map:c,fog:!1,depthTest:!1}));return l.scale.set(4*s*(a/512),.75*s,1),l.position.set(e,t,i),l.renderOrder=10,Xt(l)}function ul(n,e,t,i=.9){const s=document.createElement("canvas");s.width=256,s.height=64;const r=s.getContext("2d");r.fillStyle=e,r.fillRect(0,0,256,64),r.fillStyle="#fff",r.font="bold 34px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(n,128,34);const o=new lc(s);o.colorSpace=Nt,o.magFilter=Gt;const a=new ci({map:o,emissive:16777215,emissiveIntensity:0,emissiveMap:o});_c.push(a);const c=new it(new Fi(t,i),a);return c.rotation.y=Math.PI,c}function E1(n,e,t,i){const s=new it(new cd(i-.14,i,32),S1());s.rotation.x=-Math.PI/2,s.position.set(e,.24,t),tt(s,e,t),vm.push({id:n,m:s,x:e,z:t,r:i})}function Af(n,e,t){const i=new Oe;i.add(ee(.14,3.2,.14,ne(2764083),0,1.6,0)),i.add(ee(.45,1.2,.45,ne(1908516),0,3.6,0));const s=[16724016,16760864,3211104].map(o=>new ci({color:2236962,emissive:o,emissiveIntensity:0}));s.forEach((o,a)=>i.add(ee(.06,.26,.26,o,t*.24,4-a*.37,0,!1)));const r=new ci({color:2236962,emissive:3211104,emissiveIntensity:1.5});i.add(ee(.5,.08,.5,r,0,4.24,0,!1)),s.push(r),i.position.set(n,0,e),tt(i,n,e),ym.push({mats:s})}function ar(n,e,t=!1){const i=new zi(1,1,1),s=new rd(i,ne(n),e.length),r=new Fe;return e.forEach(([o,a,c,l,h,d],u)=>s.setMatrixAt(u,r.compose(new P(o,a,c),new In,new P(l,h,d)))),s.castShadow=t,s.receiveShadow=!0,Xt(s)}const bm=[],Sm=[],Ia={};function T1(){const n=new it(new Fi(260,90),ne(7311194));n.rotation.x=-Math.PI/2,n.position.set(0,0,-8),n.receiveShadow=!0,Xt(n);const e=(E,U,z,X,Y,$,oe)=>tt(ee(E,U,z,ne(X),Y,$,oe,!1),Y,oe);Xt(ee(230,.05,8,ne(3816770),0,.02,0,!1)),Xt(ee(230,.2,6,ne(12169894),0,.1,7,!1)),Xt(ee(230,.24,.3,ne(9078140),0,.12,4.1,!1)),Xt(ee(230,.2,3,ne(12169894),0,.1,-5.5,!1)),Xt(ee(230,.24,.3,ne(9078140),0,.12,-4.1,!1));const t=[];for(let E=-112;E<=112;E+=6)Mh.every(U=>Math.abs(E-U)>3)&&t.push([E,.04,0,2.5,.06,.22]);ar(15919194,t);const i=[];for(let E=-112;E<=112;E+=2)i.push([E,.1,7,.06,.21,6]);ar(10854034,i);const s=[];for(const E of Mh){for(let z=0;z<7;z++)s.push([E,.045,-3.3+z*1.1,2*ho.halfW,.06,.55]);const U=ho.halfW+1.2;s.push([E-U,.045,-2,.3,.06,3.8],[E+U,.045,2,.3,.06,3.8]),Af(E-ho.halfW-.8,-4.5,-1),Af(E+ho.halfW+.8,4.5,1)}ar(16053488,s),e(34,.08,14,5221962,-15,.05,-15),e(2,.09,14,13220239,-8,.06,-15),e(14,.1,12,9274232,9,.06,16),e(10,.1,8,9274232,0,.06,18);const r=(E,U,z,X,Y)=>{tt(E,(U+z)/2,X),ws(U,z,X,Y)};r(Kn(-34,-28,10,22,9,10124138,0),-34,-28,10,22),r(or(-27,-17,10,16,7,6966197,14172224,16052456,"LIQUOR","#7a1f6a",1),-27,-17,10,16),r(Kn(-16,-6,10,22,11,11565658,2),-16,-6,10,22),r(or(-5,5,10,14,6,15251552,16748464,16774368,"BAKERY","#b0602a",3),-5,5,10,14),r(Kn(16,34,10,22,13,8030896,4),16,34,10,22),tt(ee(11,3,1,ne(9076600),-.5,1.5,22),0,22),ws(-6,5,21.5,22.5),tt(ee(1,3,12,ne(9076600),15.5,1.5,16),15,16),tt(KS(),Ze.dumpster.x,Ze.dumpster.z).position.set(Ze.dumpster.x,0,Ze.dumpster.z+1);for(const E of["bin","bin2","bin3"]){const U=new Oe;U.add(ee(1.1,1.1,1.1,ne(2778312),0,.55,0)),U.add(ee(1.2,.12,1.2,ne(1919638),0,1.16,0)),U.add(ee(.5,.04,.12,ne(1118481),0,1.23,0,!1)),U.position.set(Ze[E].x,0,Ze[E].z-.6),tt(U,Ze[E].x,Ze[E].z)}const a=new Oe;a.add(ee(.4,.5,.4,ne(3840720),0,.25,0)),a.add(ee(.16,.25,.16,ne(12634320),0,.6,0)),a.position.set(Ze.sprinkler.x,0,Ze.sprinkler.z),tt(a,Ze.sprinkler.x),tt(ee(1.4,.04,.9,ne(11569232),Ze.corner.x,.23,Ze.corner.z,!1),Ze.corner.x),tt(ee(.8,.4,.45,ne(12603450),Ze.stash.x,.4,Ze.stash.z+.4),Ze.stash.x),tt(ee(.8,.9,.7,ne(8015920),Ze.bakeryBin.x,.45,Ze.bakeryBin.z+.4),Ze.bakeryBin.x);for(let E=0;E<7;E++)tt(Ss(-31+E*5,-20.5+E%2*1.2,.9+E%3*.15),-31+E*5);tt(Ss(-28,-9.5,1),-28),tt(Ss(-2,-10,.85),-2),tt(Ss(4,-18,1.1),4);const c=[14202016,11061464,14735520,12112040,13674688];[[-103,-96],[-94,-88],[-86,-80],[-78,-71]].forEach(([E,U],z)=>{const X=5+z%2*1.5,Y=Kn(E,U,12,19,X,c[z%c.length],0,"plain"),$=ee(U-E+.6,.4,5.4,ne(9062970),(E+U)/2,X+.9,13.8);$.rotation.x=-.45,Y.add($),Y.add(ee(1,2,.1,ne(5913128),(E+U)/2,1,11.95,!1)),Y.add(ee(U-E,.6,.2,ne(15790320),(E+U)/2,.3,10.5,!1)),r(Y,E,U,12,19),tt(Ss((E+U)/2+2.4,11,.7),E)}),r(or(-67,-55,10,18,6,5937770,3836490,16052456,"CORNER SHOP","#1f6a3a",5),-67,-55,10,18),r(Kn(-54,-45,15,23,8,12624e3,6),-54,-45,15,23),r(Kn(-44,-37,15,23,10,10127994,1),-44,-37,15,23);const l=[[16736352,16777215],[6332671,16777215],[16760896,16777215],[6344832,16777215]];[-52,-47.5,-43,-38.5].forEach((E,U)=>{const z=new Oe;z.add(ee(3,.9,1.4,ne(10119744),E,.45,12.6));for(let Y=0;Y<4;Y++)z.add(ee(.75,.1,1.8,ne(l[U][Y%2]),E-1.1+Y*.74,2.4,12.4));for(const Y of[-1.4,1.4])z.add(ee(.08,2.4,.08,ne(4473924),E+Y,1.2,11.9,!1));const X=[16728128,16752672,6340672][U%3];z.add(ee(2.6,.2,1.1,ne(X),E,1,12.6,!1)),r(z,E-1.5,E+1.5,11.9,13.3)}),r(or(37,48,10,18,7,4860506,16728224,2759226,"THE DRUNK DUCK","#a01a6a",2),37,48,10,18),r(Kn(49,55,10,20,9,6969962,3),49,55,10,20),r(or(56,68,10,18,7,2767450,4235519,1714762,"SPORTS BAR","#1a4aa0",4),56,68,10,18),r(Kn(69,72,10,20,8,5917258,0),69,72,10,20),r(or(74,84,10,18,7,3820122,14540253,5925498,"ELECTRONICS","#2a3a4a",5),74,84,10,18),r(Kn(86,98,10,22,22,9085112,0,"tower"),86,98,10,22),tt(ul("OFFICES","#203040",4),92,10).position.set(92,3.4,9.9),r(Kn(100,108,10,22,18,8030874,1,"tower"),100,108,10,22);for(const E of md){const U=Ze[E],z=new ri({color:6982399});bm.push(z);const X=new it(new Fi(1.6,1),z);X.position.set(U.x,1.5,9.92),X.rotation.y=Math.PI,tt(X,U.x,10),tt(ee(1.8,1.2,.1,ne(1118481),U.x,1.5,9.98,!1),U.x,10)}e(68,.08,22,5221962,-70,.05,-17),e(64,.09,2,13220239,-70,.06,-16),e(2,.09,20,13220239,-62,.06,-17);const h=Ze.fountain.x,d=Ze.fountain.z,u=ne(13156528),f=new ci({color:4892904,emissive:1723008,emissiveIntensity:.4}),g=new Oe,_=new it(new Ai(3.2,3.4,.7,20),u);_.position.set(h,.35,d);const m=new it(new Ai(2.8,2.8,.1,20),f);m.position.set(h,.66,d);const p=new it(new Ai(.35,.5,1.8,10),u);p.position.set(h,1.2,d);const b=new it(new Ai(1.1,.4,.3,14),u);b.position.set(h,2.1,d);const M=new it(new Ai(.12,.3,.9,8),f);M.position.set(h,2.6,d);for(const E of[_,m,p,b,M])E.castShadow=!0,g.add(E);tt(g,h,d),ws(h-3,h+3,d-3,d+3);for(let E=0;E<12;E++){const U=-100+E*5.5+E%3*1.2,z=E%2?-26:-9.5;Math.abs(U-h)<6&&z>-12||tt(Ss(U,z,.9+E%3*.15),U,z)}const x=new Oe;x.add(ee(5,2.4,2.2,ne(15790312),-46,1.5,-9.8)),x.add(ee(5.02,.5,2.22,ne(14172224),-46,.55,-9.8)),x.add(ee(2.4,.9,.1,ne(2236962),-46.4,1.8,-8.68,!1));for(const E of[-47.8,-44.2])x.add(ee(.8,.8,2.3,ne(1710618),E,.4,-9.8,!1));const C=ul("HOT FOOD","#c03020",3,.7);C.position.set(-46,3,-8.6),x.add(C),tt(x,-46,-9.8),ws(-48.5,-43.5,-11,-8.7),e(32,.1,18,9079440,56,.06,-15);const A=new Oe;A.add(ee(26,.6,14,ne(6974064),56,3.6,-15.5)),A.add(ee(26,3.6,.6,ne(5921376),56,1.8,-22.6));for(const E of[44,50,62,68])A.add(ee(.7,3.4,.7,ne(8026752),E,1.7,-9.2));const R=ul("STATION","#1a5a2a",4,.8);R.position.set(56,3.6,-8.6),A.add(R),A.add(ee(3,.05,2,ne(10518608),56,.12,-19,!1)),tt(A,56,-15),ws(43,69,-23,-22.3);for(const E of[44,50,62,68])ws(E-.35,E+.35,-9.55,-8.85);e(36,.12,22,11051152,90,.06,-16);const I=new it(new zi(60,.3,18),new ci({color:2779802,emissive:666186,emissiveIntensity:.5}));I.position.set(92,-.4,-37),tt(I,92,-37);const w=[];for(let E=74;E<=108;E+=2)w.push([E,.55,-27.8,.12,1,.12]);w.push([91,1.05,-27.8,36,.1,.1]),ar(3356736,w);const v=new Oe;v.add(ee(5,.5,26,ne(10127994),90,3.4,-34)),v.add(ee(.15,.9,26,ne(4473924),87.6,4.1,-34)),v.add(ee(.15,.9,26,ne(4473924),92.4,4.1,-34));for(const E of[-22.5,-40]){const U=Wr("pillar");if(U){const z=3.2/U.size.y;U.obj.scale.setScalar(z),U.obj.position.set(90,0,E),v.add(U.obj)}else v.add(ee(1.2,3.2,1.2,ne(9079434),90,1.6,E))}v.add(ee(3,.05,2,ne(10518608),90,.14,-25,!1)),tt(v,90,-30),ws(89.3,90.7,-23.2,-21.8);for(let E=0;E<5;E++)tt(Ss(76+E*7.5,-9.5,.85),76+E*7.5,-9.5);for(const E of wo)tt(ZS(),E.x,E.z).position.set(E.x,0,E.z);const L=[],H=[];for(const E of Tp)L.push([E.x,.5,E.z,.7,1,.7]),H.push([E.x,1.04,E.z,.8,.1,.8]);ar(3103290,L,!0),ar(1718820,H);for(let E=-100;E<=104;E+=16){const U=Sf(E,4.7,-1);tt(U.g,E),tt(U.pool,E)}for(let E=-92;E<=104;E+=16){const U=Sf(E,-4.6,1);tt(U.g,E),tt(U.pool,E)}Xt(n1());for(const E of pc)for(let U=0;U<6;U++){const z=new Oe;z.add(ee(.22,.18,.32,ne(9079450),0,.12,0,!1)),z.add(ee(.12,.12,.12,ne(5925498),0,.26,-.16,!1)),tt(z,Ze[E].x,Ze[E].z),Sm.push({m:z,spot:E,a:U/6*Math.PI*2,r:.8+U%3*.5})}for(const E of["store","shop2","truck","dumpster","bin","bin2","bin3","alley","stash","bakeryBin","underpass","bridge","pigeons","pigeons2","tvBar","tvShop","corner","sprinkler"]){const U=Ze[E];E1(E,U.x,U.z,U.r)}}let Dt,Ch,lr,Ih,Lh;const wm={office:{model:"ped-1",tint:8161960,speed:1.6,shirt:4872826},tourist:{model:"ped-0",tint:16767120,speed:1.1,shirt:16764992},oldlady:{model:"ped-2",tint:13150432,speed:.85,shirt:10518720},party:{model:"ped-1",tint:16744656,speed:1.5,shirt:16728224},jogger:{model:"ped-0",tint:8450208,speed:3.4,shirt:3199088},rich:{model:"ped-2",tint:15781984,speed:1.3,shirt:13676608}},Cn=[];let Em=0,Hn,Ka;const Lt={mode:"patrol",t:0,dir:1,side:6.5};let _n;const Es={tx:8,tz:14,wait:0},Qn=[],Rf=[13643824,3174608,15263976,3186768,14721056,9059024],fl=[1,2.5];function A1(){Dt=al(12084266,4868690,{hat:3828362,skin:13145450,model:"man"}),Xt(Dt.g),Ch=ee(.85,.8,.22,ne(10104880),0,1.1,.3),lr=new Oe,lr.add(ee(.28,.08,1.1,ne(2276266),0,.1,0)),lr.add(ee(.06,1,.06,ne(3355443),0,.6,-.5)),lr.add(ee(.5,.06,.06,ne(3355443),0,1.1,-.5)),Ih=ee(.6,.4,.04,ne(13148256),.25,.9,-.3,!1),Lh=ee(.36,.08,.06,ne(328965),0,1.5,-.2,!1),Dt.body.add(Ch,lr,Ih,Lh);for(const n of gh)for(let e=0;e<3;e++){const t=wm[n],i=al(t.shirt,3355460,{hair:[2759184,13672512,14540253][e%3],model:t.model,tint:t.tint});i.g.visible=!1,Xt(i.g),Cn.push({p:i,kind:n,active:!1,dir:1,speed:t.speed,wet:0,asks:0,talkT:0,mad:0,id:0})}Hn=al(1714810,1317440,{hat:1118515,model:"cop",tint:6979800}),Ka=new ci({color:2236962,emissive:16719904,emissiveIntensity:0}),Hn.body.add(ee(.22,.14,.22,Ka,0,2.2,0,!1)),Xt(Hn.g),_n=Xt(QS()),_n.position.set(10,0,15)}let To=[];function Tm(){for(const n of To)nn.remove(n);To=W.draw.bottleSpots.map((n,e)=>{const t=JS(),i=gd[n];return t.position.set(i.x,.3,i.z),t.visible=W.bottlesLeft[e],Xt(t)})}let pl=[];function R1(){for(const e of pl)nn.remove(e);pl=[];const n=tn.get("lastDeath",null);n&&(pl=[Xt(ee(1.4,.15,.8,ne(5592405),n.x,.15,n.z)),w1(`A man fell here. Day ${n.day}.`,n.x,1.4,n.z,.7)])}const La=[];function C1(n){const e=n.clone();e.position.copy(n.position),Xt(e),La.push({o:e,t:0})}let W,sn=!1,Mn=!1,ae=0,xe=0,is=0,ml=0,Zn=0,Za=1,ut=0,Ph=0,Rt=0,Cf=0,as=!1,ei=0,Pa=0,Ls=0,Da=0,Ao=0,Ji=0,hr=0,Na=0;const Qi={x:0,z:0};let xa=0,Ua=0,ka=0,Fa=100,gl=0,_l=0,xl=0,vl=0,gr="go",yt=null,vn=null,yl=0,Vn=0,us=1;const Ja={min:.5,max:1.8};function Cd(){Vn=0,us=1}const Dh=new Set(tn.get("book",[])),nt={fx:0,fz:0,dist:12,vx:0,vz:0,roll:0},Qe=n=>document.getElementById(n),Oi=Qe("screen"),Ri=Qe("fade");function Am(n,e,t,i){W=n,ae=e,xe=t,is=i,ei=0,Pa=0,nt.fx=ae,nt.fz=xe,nt.dist=12,Cd(),Dt.g.position.set(ae,0,xe),Lt.mode="patrol",Hn.g.position.set(ae+30,0,6.5);for(const s of Qn)nn.remove(s.m.g);Qn.length=0;for(const s of Cn)s.active=!1,s.p.g.visible=!1;Ph=0,Ls=Da=Ao=Ji=0,Qi.x=Qi.z=0,yt=null,vn=null,Qe("shopPanel").classList.add("hidden"),Ua=W.money,ka=W.whimsy,Fa=W.health,R1(),Oi.classList.add("hidden"),Ri.style.transition="none",Ri.style.opacity="0",sn=!0,Mn=!1,ss="",Oh=""}function Qa(n){tn.del("life"),Am(wd(n.trim().toUpperCase()||Sd(),tn.get("stash",null)),-20,6,0),Us(`Day 1. ${nm(W.draw.weather)}`),fs()}function Rm(){const n=im(tn.raw("life"));return n?(Am(n.s,n.px,n.pz,n.face),Us(`Day ${W.day}. Welcome back.`),!0):!1}function fs(){if(!sn||!W||W.dead)return;const n=cS(W,ae,xe,is);n&&tn.setRaw("life",n)}function Cm(){return"<b>Whimsy book</b><br>"+Xp.map(n=>Dh.has(n)?mc[n].name:"???").join("<br>")}function Id(){sn=!1,Mn=!1;const n=im(tn.raw("life"));Oi.classList.remove("hidden"),Oi.innerHTML=`
    <h1>Street</h1>
    <div style="opacity:.8">Hustle sober. Get high. Have fun. Don't die.</div>
    ${n?`<button id="cont" class="go">Continue · day ${n.s.day}</button>`:""}
    <div>Seed <input id="seed" value="${Sd()}" autocapitalize="characters"></div>
    <button id="go" class="${n?"alt":"go"}">${n?"New life":"Start a life"}</button>
    <div style="font-size:12px;opacity:.6">Same seed, same draw. Keys: WASD, E act, 1-6, Q drink, V view, P pause.</div>
    <div id="book">${Cm()}</div>`,n&&(Qe("cont").onclick=()=>{Rm()||Id()}),Qe("go").onclick=()=>Qa(Qe("seed").value)}function vc(){!sn||Mn||(Mn=!0,fs(),Oi.classList.remove("hidden"),Oi.innerHTML=`
    <h1>Paused</h1>
    <div style="opacity:.75">Day ${W.day}. His life is saved.</div>
    <button id="resume" class="go">Resume</button>
    <button id="snd" class="alt">${_a()?"Sound: off":"Sound: on"}</button>
    <button id="quit" class="alt">Back to start</button>`,Qe("resume").onclick=Ld,Qe("snd").onclick=()=>{mm(!_a()),tn.set("muted",_a()),Qe("snd").textContent=_a()?"Sound: off":"Sound: on"},Qe("quit").onclick=()=>{fs(),Id()})}function Ld(){Mn&&(Mn=!1,Oi.classList.add("hidden"),ic=performance.now())}function I1(){sn=!1,tn.del("life");for(const e of W.discovered)Dh.add(e);tn.set("book",[...Dh]),tn.set("lastDeath",{x:ae,z:xe,day:W.day}),tn.set("stash",W.stash),Ds(Dt,"die",!0),Uo();const n=W.dead==="gaveup";Ri.style.transition=`opacity ${n?3:1}s`,Ri.style.opacity="1",setTimeout(()=>{Oi.classList.remove("hidden"),Oi.innerHTML=`
      <h1>This is how he died</h1>
      <div style="font-size:20px">${Gb[W.dead]}</div>
      <div>Days survived: ${W.day}<br>Best whimsy: ${Math.round(W.bestWhimsy)}<br>People who gave: ${W.gives}<br>Seed: ${W.seed}</div>
      <button id="again" class="go">A new life</button>
      <button id="same" class="alt">Same seed again</button>
      <div id="book">${Cm()}</div>`,Qe("again").onclick=()=>Qa(Sd()),Qe("same").onclick=()=>Qa(W.seed)},n?3200:1200)}document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){if(fs(),Eo.has("nopause"))return;vc(),_1()}});window.addEventListener("pagehide",fs);mm(tn.get("muted",!1));const Pd=()=>g1();window.addEventListener("pointerdown",Pd,{capture:!0});window.addEventListener("touchend",Pd,{capture:!0});window.addEventListener("keydown",Pd,{capture:!0});const En=new Set,Gn={x:0,y:0,id:-1};window.addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(En.add(e),!!sn){if(vn){(e==="escape"||e==="e")&&Uo();return}(e==="p"||e==="escape")&&(Mn?Ld():vc()),!Mn&&(e==="e"&&ec(0),e>="1"&&e<="7"&&ec(Number(e)-1),e==="q"&&Nd(),e==="v"&&(as=!as))}});window.addEventListener("keyup",n=>En.delete(n.key.toLowerCase()));window.addEventListener("blur",()=>En.clear());const kr=Qe("stick"),Im=Qe("knob");kr.addEventListener("pointerdown",n=>{Gn.id=n.pointerId,kr.setPointerCapture(n.pointerId),Pm(n)});kr.addEventListener("pointermove",n=>{n.pointerId===Gn.id&&Pm(n)});const Lm=n=>{n.pointerId===Gn.id&&(Gn.id=-1,Gn.x=0,Gn.y=0,Im.style.transform="")};kr.addEventListener("pointerup",Lm);kr.addEventListener("pointercancel",Lm);function Pm(n){const e=kr.getBoundingClientRect();let t=(n.clientX-(e.left+e.width/2))/55,i=(n.clientY-(e.top+e.height/2))/55;const s=Math.hypot(t,i);s>1&&(t/=s,i/=s),Gn.x=t,Gn.y=i,Im.style.transform=`translate(${t*40}px, ${i*40}px)`}const Tn=(n,e,t="")=>`<svg viewBox="0 0 24 24" fill="${e}" ${t}><path d="${n}"/></svg>`,Jt={heart:"M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.6 4.5c2.2 0 3.6 1.2 5.4 3.3 1.8-2.1 3.2-3.3 5.4-3.3 3.6 0 5.7 3.8 4.2 7.2C19.5 16.4 12 21 12 21z",bolt:"M13.5 1.5 4 13.5h6.5L9 22.5l10-13h-6.8z",bottle:"M9.5 1.5h5v4l2 3.5v12.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V9l2-3.5z",star:"M12 1.5l2.6 7.6 7.9.4-6.2 5 2.1 7.8L12 17.8l-6.4 4.5 2.1-7.8-6.2-5 7.9-.4z",food:"M12 7.5c-1.2-1.8-3.2-2.6-5.2-2C3.6 6.4 2.6 10 3.6 13.6 4.7 17.7 7.4 21.5 9.6 21.5c1 0 1.5-.5 2.4-.5s1.4.5 2.4.5c2.2 0 4.9-3.8 6-7.9 1-3.6 0-7.2-3.2-8.1-2-.6-4 .2-5.2 2zM12 7.5c0-2.3 1-4.3 3.2-5.5",coin:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.9 15.6V19h-1.8v-1.4c-1.6-.2-2.9-1.1-3-2.8h1.8c.1.9.8 1.4 2 1.4 1.3 0 1.9-.6 1.9-1.3 0-.8-.6-1.1-2.1-1.5-1.9-.4-3.3-1-3.3-2.8 0-1.4 1.1-2.4 2.7-2.7V6.5h1.8v1.4c1.6.3 2.6 1.3 2.7 2.7h-1.8c-.1-.8-.7-1.3-1.8-1.3-1.1 0-1.7.5-1.7 1.2 0 .7.6 1 2.1 1.4 1.9.5 3.3 1.1 3.3 2.9 0 1.5-1.1 2.5-2.8 2.8z",pause:"M6 4h4.5v16H6zM13.5 4H18v16h-4.5z",eye:"M12 5C6.5 5 2.7 9.2 1.5 12c1.2 2.8 5 7 10.5 7s9.3-4.2 10.5-7C21.3 9.2 17.5 5 12 5zm0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2.3a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z",sunI:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM11 1h2v3h-2zm0 19h2v3h-2zM1 11h3v2H1zm19 0h3v2h-3z",cloud:"M6.5 19a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 17.5 9 5 5 0 0 1 17.5 19zM8 20.5l-1 2.5M12 20.5l-1 2.5M16 20.5l-1 2.5",snow:"M11 1h2v22h-2zM1 11h22v2H1zM4.2 5.6l1.4-1.4 14.2 14.2-1.4 1.4zM18.4 4.2l1.4 1.4L5.6 19.8l-1.4-1.4z",blanket:"M3 6h18v12H3zM3 10h18M3 14h18",scooter:"M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5 17h14l-3-12h3"};Qe("pauseBtn").innerHTML=Tn(Jt.pause,"#fff",'width="20" height="20"');Qe("viewBtn").innerHTML=Tn(Jt.eye,"#fff",'width="22" height="22"');Qe("pauseBtn").addEventListener("pointerdown",n=>{n.preventDefault(),Je("tap"),vc()});Qe("centerBtn").innerHTML=Tn("M12 2v4M12 18v4M2 12h4M18 12h4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z","none",'stroke="#fff" stroke-width="2" width="22" height="22"');Qe("centerBtn").addEventListener("pointerdown",n=>{n.preventDefault(),Je("tap"),Cd()});const cs=new Map;let Ps=null;const Po=hn.domElement,Dm=()=>{const[n,e]=[...cs.values()];return{d:Math.hypot(e.x-n.x,e.y-n.y),a:Math.atan2(e.y-n.y,e.x-n.x)}};Po.addEventListener("pointerdown",n=>{cs.set(n.pointerId,{x:n.clientX,y:n.clientY}),cs.size===2&&(Ps={...Dm(),zoom:us,yaw:Vn})});Po.addEventListener("pointermove",n=>{const e=cs.get(n.pointerId);if(n.pointerType==="mouse"&&n.buttons&2&&e&&(Vn-=(n.clientX-e.x)*.008),e&&cs.set(n.pointerId,{x:n.clientX,y:n.clientY}),Ps&&cs.size===2){const t=Dm();us=xn(Ps.zoom*(Ps.d/Math.max(20,t.d)),Ja.min,Ja.max),Vn=Ps.yaw-fo(t.a-Ps.a)}});const Nm=n=>{cs.delete(n.pointerId),cs.size<2&&(Ps=null)};Po.addEventListener("pointerup",Nm);Po.addEventListener("pointercancel",Nm);Po.addEventListener("contextmenu",n=>n.preventDefault());window.addEventListener("wheel",n=>{us=xn(us*Math.exp(n.deltaY*.001),Ja.min,Ja.max)},{passive:!0});Qe("viewBtn").addEventListener("pointerdown",n=>{n.preventDefault(),Je("tap"),as=!as});const br=[];function Nh(n,e,t,i=2.6){for(const r of br)r.el.dataset.cls===t&&(r.t=Math.min(r.t,.15));const s=document.createElement("div");s.className="bubble "+t,s.dataset.cls=t,s.textContent=n,Qe("bubbles").appendChild(s),br.push({el:s,at:e,t:i})}const L1=new P;function Um(n){for(let e=br.length-1;e>=0;e--){const t=br[e];t.t-=n;const i=L1.copy(t.at()).project(We),s=i.z>1||t.t<=0;if(t.t<=0){t.el.remove(),br.splice(e,1);continue}t.el.style.display=s?"none":"",t.el.style.left=(i.x+1)/2*window.innerWidth+"px",t.el.style.top=(1-i.y)/2*window.innerHeight+"px",t.el.style.opacity=String(xn(t.t*3))}}const km=n=>n[Math.floor(Math.random()*n.length)];let Do=[],ss="";const Uh=Qe("acts"),dr=Qe("drinkBtn");dr.addEventListener("pointerdown",n=>{n.preventDefault(),Nd()});function No(n){let e=null,t=n;for(const i of Cn){if(!i.active||i.mad>0||i.asks>2)continue;const s=Math.hypot(i.p.g.position.x-ae,i.p.g.position.z-xe);s<t&&(t=s,e=i)}return e}function Bi(){const n=Cn.some(i=>i.active&&Math.hypot(i.p.g.position.x-Ze.sprinkler.x,i.p.g.position.z-Ze.sprinkler.z)<9),e=Math.hypot(_n.position.x-ae,_n.position.z-xe)<2.2,t=yt??No(2.8);return{x:ae,z:xe,pedNear:n,catNear:e,ped:t?{kind:t.kind,asks:t.asks}:void 0}}const P1={spray:"Spray!",cat:"Pet cat",dance:"Dance!",snack:"Snatch snack",bench:"Sing!"};function D1(n){if(n.whimsy)return P1[n.id.slice(7)];if(n.id.startsWith("trash:"))return"Dig trash";if(n.id.startsWith("enter:"))return"Go in: "+wp[n.id.slice(6)];switch(n.id){case"beg":return"Ask · "+Io[Bi().ped.kind].name;case"pickup":return"Grab";case"recycle":return`Recycle +$${W.bottles}`;case"dumpster":return"Dig";case"bakeryBin":return"Bakery bin";case"mix":return"Mix";case"sleep":return"Sleep";case"sit":return"Sit";case"stand":return"Get up";case"pigeons":return"Feed pigeons";case"tv":return"Watch TV";case"smoke":return"Smoke";case"stashPut":return"Hide "+n.label.split(" ")[1];case"stashTake":return"Take "+n.label.split(" ")[1]}return n.label}function Ml(n,e,t){const i=document.createElement("div");i.className="act "+e,i.textContent=n,i.addEventListener("pointerdown",s=>{s.preventDefault(),t()}),Uh.prepend(i)}function N1(){var e;const n=em(W);if(yt){const t=gc(W,Bi()),i="beg"+t.join("|");i!==ss&&(ss=i,Uh.innerHTML="",t.forEach((s,r)=>Ml(Ap[s].label+J1[yt&&Sb(W,yt.kind,s)||"none"],"line"+(r===0?" first":""),()=>Dd(s))),Ml("Leave","line dim",()=>Fr()))}else{const t=Do.slice(0,5),i=t.map(s=>s.id+s.label).join("|")+(n??"")+(n?W.drinks[n]:"")+W.bottles+(((e=Bi().ped)==null?void 0:e.kind)??"");i!==ss&&(ss=i,Uh.innerHTML="",t.forEach((s,r)=>Ml(D1(s),(r===0?"first":"")+(s.whimsy?" whimsy":"")+(s.id==="beg"?" beg":""),()=>ec(r))))}if(dr.classList.toggle("hidden",!n),n){const t="round"+(n==="mix"?" mix":n==="wine"?" wine":"");dr.className!==t&&(dr.className=t);const i=W.drinks.beer+W.drinks.vodka+W.drinks.wine+W.drinks.mix,s=Tn(Jt.bottle,n==="vodka"?"#e8f4ff":n==="mix"?"#fff":n==="wine"?"#8a1a3a":"#5a3a10")+`<div class="badge">${i}</div>`;dr.innerHTML!==s&&(dr.innerHTML=s)}}function yc(n=.35){hr=-n,Na=0}function ec(n){if(!sn||Mn||vn)return;if(yt){const s=gc(W,Bi());n<s.length?Dd(s[n]):Fr();return}const e=Do[n];if(!e)return;const t=Bi();if(!Yb(W,e.id,t)){Je("nope");return}if(yc(),e.id==="beg"){F1();return}if(e.id.startsWith("enter:")){Ro(e.id.slice(6));return}if(/^own:(craft|pawn|books|steal:)/.test(e.id)){Ro(e.id.slice(4));return}if(e.id.startsWith("own:")&&(Je("pop",{pitch:1.3}),e.id.startsWith("own:grab")&&Ds(Dt,"pick-up")),e.whimsy&&(Zn=2.2,Za=-Za,Je("sparkle"),Ds(Dt,"emote-yes"),e.id.slice(7)==="spray")){let r=null,o=99;for(const a of Cn){if(!a.active)continue;const c=Math.hypot(a.p.g.position.x-Ze.sprinkler.x,a.p.g.position.z-Ze.sprinkler.z);c<o&&(o=c,r=a)}r&&(r.wet=3,Nh(km(["AAH!","My suit!","Hey!!"]),Fm(r.p),"them"))}e.id==="pickup"&&(To.forEach((s,r)=>{s.visible&&!W.bottlesLeft[r]&&(C1(s),s.visible=!1)}),Je("clink"),Je("pop",{pitch:1.2}),Ds(Dt,"pick-up")),e.id==="recycle"&&(Je("clink",{pitch:.9}),Je("clink",{pitch:1.15})),(e.id==="dumpster"||e.id.startsWith("trash:")||e.id==="bakeryBin")&&(Je("pop",{pitch:.7}),Ds(Dt,"pick-up")),e.id==="mix"&&Je("clink"),e.id==="pigeons"&&(Ia[pc.find(s=>Math.hypot(Ze[s].x-ae,Ze[s].z-xe)<4)??"pigeons"]=8,Je("sparkle",{pitch:1.4})),(e.id==="tv"||e.id==="smoke")&&Je("pop",{pitch:.6}),e.id==="sit"&&H1(),(e.id==="stashPut"||e.id==="stashTake")&&(tn.set("stash",W.stash),Je("pop")),e.id==="sleep"&&(V1(),fs())}const Fm=n=>()=>U1.set(n.g.position.x,2.5,n.g.position.z),U1=new P,k1=()=>new P(ae,3.3,xe);function F1(){const n=No(2.8);n&&(yt=n,n.talkT=8,W.sitting=!1,ss="")}function Fr(){yt&&(yt.talkT=Math.min(yt.talkT,.6)),yt=null,ss=""}function Dd(n){const e=yt;if(!e)return;const t=Bi(),i=W.money,s=Kb(W,t,n);if(!s){Je("nope");return}e.asks++,W.copAlert=!1,Nh(km(Ap[n].say),k1,"me",2.2),Ds(Dt,"emote-yes");const r=s.outcome==="angry"||s.outcome==="hate";O1(.65,()=>{Nh(s.reply,Fm(e.p),r?"them mad":s.outcome==="give"?"them give":"them",2.8),s.outcome==="give"?(Ds(e.p,"emote-yes"),W.money===i&&Je("pop",{pitch:1.3})):s.laughed?Je("sparkle",{pitch:1.6}):Je("nope",{vol:.5}),s.callCop&&z1()}),r?(e.mad=6,e.talkT=0,e.dir=Math.sign(e.p.g.position.x-ae)||1):e.talkT=1.6,yt=null,ss=""}const uo=[];function O1(n,e){uo.push({t:n,fn:e})}function B1(n){for(let e=uo.length-1;e>=0;e--)if((uo[e].t-=n)<=0){const t=uo[e].fn;uo.splice(e,1),t()}}function z1(){Us("Someone called the cop!"),Je("whistle");const n=Hn.g.position;Math.hypot(n.x-ae,n.z-xe)>40&&n.set(ae+(Math.random()<.5?-34:34),0,xe>0?6.5:-5.5),Lt.mode="chase",Lt.t=0}function H1(){let n=wo[0],e=1e9;for(const t of wo){const i=Math.hypot(t.x-ae,t.z-xe);i<e&&(e=i,n=t)}ae=n.x,xe=n.z+.15,is=Math.PI}function Nd(){!sn||Mn||vn||(Zb(W)?(Je("gulp"),yc(.25)):Je("nope"))}function V1(){Ri.style.transition="none",Ri.style.opacity="1",Ri.offsetWidth,Ri.style.transition="opacity 1.5s",Ri.style.opacity="0"}const Ns=Qe("shopPanel");function Ro(n){vn=n,Fr(),Je("pop",{pitch:.8}),tc(),Ns.classList.remove("hidden")}function Uo(){vn=null,Ns.classList.add("hidden"),ic=performance.now()}function tc(){if(!vn)return;if(h1(vn)){m1(Ns,vn,W,Q1);return}const n=vn,e={liquor:'"The usual?"',corner:'"No loitering. Unless you buy."',truck:'"Hot and fresh, friend."'};Ns.innerHTML=`<div class="shead"><b>${wp[n]}</b><span class="smoney">${Tn(Jt.coin,"#ffd84a")}${W.money}</span></div>
    <div class="sgreet">${e[n]}</div><div class="slist"></div><button class="sclose">Leave</button>`;const t=Ns.querySelector(".slist");for(const i of Cp[n]){const s=Rp[i],r=document.createElement("div"),o=i==="lighter"&&W.items.lighter||i==="sign"&&W.items.sign||i==="shades"&&W.items.shades||i==="goodBlanket"&&W.items.goodBlanket||i==="jokebook"&&W.items.jokebook;r.className="srow"+(W.money<s.price||o?" poor":""),r.innerHTML=`<div><div class="sname">${s.name}</div><div class="snote">${o?"Got it.":s.note}</div></div><div class="sbuy">$${s.price}</div>`,r.addEventListener("pointerdown",a=>{a.preventDefault();const c=W.money;Qp(W,n,i,{x:ae,z:xe})?(Je(i==="beer"||i==="vodka"||i==="wine"?"clink":i==="scratch"&&W.money>c-s.price?"sparkle":"pop"),yc(.2)):Je("nope"),Mc(),tc()}),t.appendChild(r)}Ns.querySelector(".sclose").addEventListener("pointerdown",i=>{i.preventDefault(),Uo()})}const Om=[{k:"health",icon:Jt.heart,col:"#ff4d5e",low:n=>n<30},{k:"withdrawal",icon:Jt.bolt,col:"#a6e04a",low:n=>n>75},{k:"buzz",icon:Jt.bottle,col:"#ffb02e",low:()=>!1},{k:"whimsy",icon:Jt.star,col:"#ff6ad5",low:n=>n<25},{k:"hunger",icon:Jt.food,col:"#ff9a4a",low:n=>n<20}];Qe("meters").innerHTML=Om.map(n=>`<div class="meter" id="m_${n.k}"><div class="ic">${Tn(n.icon,n.col)}</div><div class="track"><div class="fill" id="f_${n.k}" style="background:${n.col}"></div></div></div>`).join("");const G1=Qe("chips"),kh=Qe("toast"),bl=Qe("sun"),W1=Qe("sky"),X1=Qe("goals");let Fh=0,If="",Oh="";function Us(n){kh.textContent=n,kh.classList.add("on"),Fh=2.4}function Sl(n,e,t,i,s){const r=new P(t,i,s).project(We);if(r.z>1)return;const o=document.createElement("div");o.className="float",o.textContent=n,o.style.color=e,o.style.left=(r.x+1)/2*window.innerWidth+"px",o.style.top=(1-r.y)/2*window.innerHeight+"px",document.body.appendChild(o),setTimeout(()=>o.remove(),1150)}function $1(n){const e=document.getElementById(n);e&&(e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump"))}function q1(n){for(const a of Om){const c=W[a.k];Qe("f_"+a.k).style.width=c+"%",Qe("m_"+a.k).classList.toggle("low",a.low(c))}Qe("dayno").textContent="D"+W.day;const e=Lo(W);bl.style.left=e*100+"%",bl.style.top=4+(1-Math.sin(Math.PI*Math.min(1,e/mt.nightAt)))*16+"px",bl.classList.toggle("moon",Xb(W)),W1.classList.toggle("late",e>.9);const t=W.draw.weather,i=t==="mild"?Tn(Jt.sunI,"#ffd84a"):t==="rain"?Tn(Jt.cloud,"#bcd",'stroke="#bcd" stroke-width="1.5"'):Tn(Jt.snow,"#cfe6ff"),s=W.items,r=`${W.money}|${W.bottles}|${t}|${JSON.stringify(s)}|${W.inv.cigs}`;r!==If&&(If=r,G1.innerHTML=`<div class="chip" id="c_money">${Tn(Jt.coin,"#ffd84a")}${W.money}</div><div class="chip" id="c_bottles">${Tn(Jt.bottle,"#3fd060")}${W.bottles}</div><div class="chip">${i}</div>`+(s.blanket||s.goodBlanket?`<div class="chip">${Tn(Jt.blanket,s.goodBlanket?"#e0a040":"#e06060",'stroke="#fff" stroke-width=".8"')}</div>`:"")+(s.scooter?`<div class="chip">${Tn(Jt.scooter,"none",'stroke="#3fd0c0" stroke-width="2"')}</div>`:"")+(s.jokebook?'<div class="chip txt">Jokes</div>':"")+(s.sign?'<div class="chip txt">Sign</div>':"")+(s.shades?'<div class="chip txt">Shades</div>':"")+(W.inv.cigs>0?`<div class="chip txt">Smokes ${W.inv.cigs}</div>`:""));const o=JSON.stringify(W.goals);o!==Oh&&(Oh=o,X1.innerHTML=W.goals.map(a=>{const c=_d[a.id],l=c.n>1&&!a.done?` ${Math.min(a.got,c.n)}/${c.n}`:"";return`<div class="goal${a.done?" done":""}"><span class="box">${a.done?"✓":""}</span>${c.text}${l}</div>`}).join("")),W.money>Ua&&(Sl("+$"+(W.money-Ua),"#ffd84a",ae,2.4,xe),Je("coin"),$1("c_money")),W.whimsy>ka+.5&&Sl("+"+Math.round(W.whimsy-ka),"#ff8ae0",ae+.6,2.9,xe),W.health<Fa-5&&Sl("-"+Math.round(Fa-W.health),"#ff4d5e",ae-.6,2.6,xe),Ua=W.money,ka=W.whimsy,Fa=W.health,Mc(),Fh-=n,Fh<=0&&kh.classList.remove("on")}function j1(){for(const n of xm)if(ae>n.x0-.45&&ae<n.x1+.45&&xe>n.z0-.45&&xe<n.z1+.45){const t=ae-(n.x0-.45),i=n.x1+.45-ae,s=xe-(n.z0-.45),r=n.z1+.45-xe,o=Math.min(t,i,s,r);o===t?ae=n.x0-.45:o===i?ae=n.x1+.45:o===s?xe=n.z0-.45:xe=n.z1+.45}ae=Math.max(pa.minX,Math.min(pa.maxX,ae)),xe=Math.max(pa.minZ,Math.min(pa.maxZ,xe))}const fo=n=>Math.atan2(Math.sin(n),Math.cos(n)),Y1=new P,Bm={beer:{sway:.35,roll:.03,orbit:.12,breathe:0},vodka:{sway:1.1,roll:.1,orbit:.3,breathe:.025},wine:{sway:.25,roll:.025,orbit:.16,breathe:.04},mix:{sway:.1,roll:.015,orbit:.22,breathe:.07}},Wt={soberDist:12,soberPitch:.86,highDist:9.5,highPitch:.36,highAhead:2,aheadSecs:.6,aheadMax:3.2,roadPull:1.15,runPull:1.12,talkPush:.85,leanTalk:.45,leanDoor:.3};function K1(n,e){const t=Lo(W),i=hs(ae,xe),r=Math.max(3,Math.round((zn===0?6:zn===1?9:12)*fc[i].busy(t)));xl-=e;const o=Cn.filter(a=>a.active);if(xl<=0&&o.length<r){xl=.35;const a=tb.filter(c=>c.x0<ae+40&&c.x1>ae-40&&Math.abs(c.z-xe)<30);if(a.length){const c=a[Math.floor(Math.random()*a.length)],l=Math.random()<.5?-1:1,h=xn(ae+l*(26+Math.random()*12),c.x0,c.x1);if(Math.abs(h-ae)>18){const d=KM(hs(h,c.z),Math.random()),u=Cn.find(f=>!f.active&&f.kind===d)??Cn.find(f=>!f.active);u&&(u.active=!0,u.p.g.visible=!0,u.asks=0,u.mad=0,u.talkT=0,u.wet=0,u.id=++Em,u.dir=Math.random()<.7?-l:l,u.speed=wm[u.kind].speed*(.85+Math.random()*.3),u.p.g.position.set(h,0,c.z+(Math.random()-.5)*.6))}}}for(const a of Cn){if(!a.active)continue;const c=a.p.g.position;let l=a.wet>0?a.speed*3:a.mad>0?a.speed*1.8:a.speed;a.wet=Math.max(0,a.wet-n),a.mad=Math.max(0,a.mad-n),a.talkT>0||yt===a?(a.talkT-=n,l=0,a.p.g.rotation.y=Math.atan2(ae-c.x,xe-c.z)+Math.PI):(c.x+=a.dir*l*n,a.p.g.rotation.y=a.dir>0?-Math.PI/2:Math.PI/2),qa(a.p,l,n),a.wet>0&&(a.p.body.position.y=Math.abs(Math.sin(Rt*12))*.3),(Math.abs(c.x-ae)>46||c.x<-106||c.x>108)&&(a.active=!1,a.p.g.visible=!1,yt===a&&Fr())}yt&&Math.hypot(yt.p.g.position.x-ae,yt.p.g.position.z-xe)>4.5&&Fr()}function Bh(n){Rt+=n,Da>0&&(Da-=n,n*=.05);const e=Zn>0?.35:1,t=n*e;Zn=Math.max(0,Zn-n),Cf+=t,W.day!==Ph&&(Ph=W.day,Tm()),eS(W,t);let i=Gn.x,s=Gn.y;(En.has("a")||En.has("arrowleft"))&&(i-=1),(En.has("d")||En.has("arrowright"))&&(i+=1),(En.has("w")||En.has("arrowup"))&&(s-=1),(En.has("s")||En.has("arrowdown"))&&(s+=1);let r=Math.hypot(i,s);r>1&&(i/=r,s/=r,r=1),W.sitting&&(r>.4?W.sitting=!1:(i=s=0,r=0)),Ji>0&&(i=s=0,r=0,Ji-=t),yl=r<.1?yl+n:0;const{speed:o,wobble:a}=Jb(W),c=as?0:ei+Vn;En.has("z")&&(Vn+=n*1.6),En.has("c")&&(Vn-=n*1.6);const l=Math.sin(c),h=Math.cos(c);let d=(l*-s+-h*i)*o,u=(h*-s+l*i)*o;const f=Bm[W.effect??"beer"];let g=0;if(!as&&ut>.3){const B=r>.2?-s/r:0;if(B>.3){const q=fo(Math.atan2(d,u)-ei-Vn),ve=.35;Math.abs(q)>ve&&(g=Math.sign(q)*Math.min(1.1,(Math.abs(q)-ve)*2.2)*B*ut)}yl>1.5&&Zn<=0&&(g=f.orbit*ut)}else as||(g=xn(fo(-ei)*2.5,-3,3));if(Pa+=(g-Pa)*Math.min(1,n*4),ei=fo(ei+Pa*n),Math.abs(ei)<1e-4&&ut<.3&&(ei=0),a>0){const B=Math.sin(Rt*1.7)*a*.8+Math.sin(Rt*.63)*a*.5,q=Math.cos(B),ve=Math.sin(B);if([d,u]=[d*q-u*ve,d*ve+u*q],!W.sitting){const Re=Rt*.37;d+=Math.cos(Re)*a*1.3,u+=Math.sin(Re*1.3)*a*1.3}}Zn<=0&&!yt&&(ae+=(d+Qi.x)*t,xe+=(u+Qi.z)*t);const _=Math.exp(-6*t);Qi.x*=_,Qi.z*=_,j1();const m=W.sitting||yt?0:Math.hypot(d,u);if(m>.3&&Ji<=0){const B=Math.atan2(d,u)+Math.PI;is+=fo(B-is)*Math.min(1,n*12)}yt&&(is=Math.atan2(yt.p.g.position.x-ae,yt.p.g.position.z-xe)+Math.PI),Dt.g.position.set(ae,W.sitting?.05:0,xe),Dt.g.rotation.y=is,Dt.g.rotation.z=a>0?Math.sin(Rt*2.2)*.2*a:0;const p=!ds(W)&&W.withdrawal>70?(W.withdrawal-70)/30:0;if(Dt.g.rotation.x=Ji>0?-Math.min(1.2,Ji*2):p*Math.sin(Rt*47)*.05,qa(Dt,Zn>0?0:m,t)&&Zn<=0&&Je("step",{vol:.5,pitch:.9+Math.random()*.2}),Zn>0?Dt.body.position.y=Math.abs(Math.sin(Rt*10))*.3:W.sitting&&(Dt.body.position.y=-.32),Na+=(-hr*220-Na*14)*n,hr+=Na*n,Dt.body.scale.set(1-hr*.5,1+hr,1-hr*.5),Ch.visible=W.items.blanket||W.items.goodBlanket,lr.visible=W.items.scooter,Ih.visible=W.items.sign,Lh.visible=W.items.shades,Bb(W,t,ae,xe,ds(W)),W.own.fell&&(W.own.fell=!1,Ji=.8,Je("nope")),Vm.update(W,Rt),vl-=n,vl<=0){vl=.5;const B=$b(W,ae,xe);B&&Us(B)}gr=sS(Cf);for(let B=0;B<2;B++)if(fl[B]-=t,fl[B]<=0){const q=B===0?1:-1,ve=xn(ae-q*66,-112,112),Re=B===0?-2:2,at=Qn.some(De=>De.lane===B&&Math.abs(De.x-ve)<9);if(fl[B]=at?.5:2+Math.random()*3.5,!at&&Qn.length<(zn===0?5:8)){const De=jS(Rf[Math.floor(Math.random()*Rf.length)],Math.floor(Math.random()*4));De.g.position.set(ve,0,Re),De.g.rotation.y=q>0?0:Math.PI,Xt(De.g);const _t=gn.cruiseMin+Math.random()*(gn.cruiseMax-gn.cruiseMin);Qn.push({m:De,x:ve,z:Re,dir:q,speed:_t,cruise:_t,honkT:0,lane:B})}}ml-=t;let b=0;for(let B=Qn.length-1;B>=0;B--){const q=Qn[B];let ve=null,Re=1e9;for(const N of Qn){if(N===q||N.lane!==q.lane)continue;const qt=(N.x-q.x)*q.dir;qt>0&&qt<Re&&(Re=qt,ve=N)}const at=rS(q,{x:ae,z:xe},gr,ve);q.honkT-=t;const De=Math.hypot(q.x-ae,q.z-xe);at.honk&&q.honkT<=0&&q.speed>.8&&De<25&&(Je("horn",{pitch:.85+B%4*.08,vol:xn(1.2-De/25,.2,1)}),q.honkT=3);const _t=q.speed;q.speed=oS(q.speed,at.want,t),q.m.brake.emissiveIntensity=q.speed<_t-.001||q.speed<.3?3:.15,q.x+=q.dir*q.speed*t,q.m.g.position.x=q.x;for(const N of q.m.wheels)N.rotation[q.m.spin]+=q.m.spinSign*q.speed*t/.36;if(Math.abs(q.x)>114||(q.x-ae)*q.dir>72){nn.remove(q.m.g),Qn.splice(B,1);continue}Math.abs(xe-q.z)<2.2&&(ae-q.x)*q.dir>-2&&(ae-q.x)*q.dir<10&&q.speed>2&&(b=1),aS(q,{x:ae,z:xe})&&(q.speed>1.2&&ml<=0?(tS(W),Fr(),ml=1.5,Ls=.8,Da=.14,Ao=1,Ji=.7,Qi.x=q.dir*(3+q.speed*.8),Qi.z=(q.z<0?-1:1)*8,q.speed=0,Je("hit"),yc(.45)):q.speed<=1.2&&(xe=q.z+(xe>=q.z?1:-1)*gn.hitWide))}for(const B of ym){const q=gr==="stop"?0:gr==="slow"?1:2;B.mats.forEach((ve,Re)=>ve.emissiveIntensity=Re===3?1.5:Re===q?2.5:0),B.mats[3].emissive.setHex([16724016,16760864,3211104][q])}K1(t,n);const M=Es.tx-_n.position.x,x=Es.tz-_n.position.z,C=Math.hypot(M,x);if(C<.3){if(Es.wait-=t,Es.wait<=0){const B=[[10,15],[6,18],[-12,-10],[-20,-14],[2,-14],[13,12]],q=B[Math.floor(Math.random()*B.length)];Es.tx=q[0],Es.tz=q[1],Es.wait=4+Math.random()*6}}else _n.position.x+=M/C*1.4*t,_n.position.z+=x/C*1.4*t,_n.rotation.y=Math.atan2(M,x)+Math.PI,_n.position.y=Math.abs(Math.sin(Rt*9))*.06;for(const B of Sm){const q=Ze[B.spot],ve=(Ia[B.spot]??0)>0;B.a+=t*(ve?2.5:.4);const Re=ve?ae:q.x,at=ve?xe:q.z,De=ve?.7+B.r*.4:B.r,_t=Re+Math.cos(B.a)*De,N=at+Math.sin(B.a)*De;B.m.position.x+=(_t-B.m.position.x)*Math.min(1,t*3),B.m.position.z+=(N-B.m.position.z)*Math.min(1,t*3),B.m.position.y=Math.abs(Math.sin(Rt*7+B.r*5))*.12,B.m.rotation.y=-B.a}for(const B of Object.keys(Ia))Ia[B]-=t;bm.forEach((B,q)=>B.color.setHSL(Math.floor(Rt*1.3+q)*.17%1,.5,.55+Math.sin(Rt*9)*.05));const A=iS(W),R=Hn.g.position,I=ae-R.x,w=xe-R.z,v=Math.hypot(I,w),L=B=>{Lt.mode="chase",Lt.t=0,Us(B),Je("whistle")};W.copAlert&&(W.copAlert=!1,v<A.sight&&L("The cop saw that. Run!")),Lt.mode==="patrol"&&W.buzz>=A.drunkAt&&v<A.drunkRange&&L('Cop: "Hey! You!"');let H=2;Lt.mode==="chase"?(Lt.t+=t,R.x+=I/v*A.speed*t,R.z+=w/v*A.speed*t,Hn.g.rotation.y=Math.atan2(I,w)+Math.PI,H=A.speed,v<1.1&&nS(W),(Lt.t>12||v>A.sight+6)&&(Lt.mode="patrol",Us("The cop gave up."))):(Math.abs(R.x-ae)>60&&R.set(ae+(Math.random()<.5?-45:45),0,Lt.side),R.z+=Math.sign(Lt.side-R.z)*Math.min(Math.abs(Lt.side-R.z),2*t),R.x+=Lt.dir*2*t,Hn.g.rotation.y=Lt.dir>0?-Math.PI/2:Math.PI/2,R.x>ae+32&&(Lt.dir=-1,Lt.side=Lt.side>0?-5.5:6.5),R.x<ae-32&&(Lt.dir=1)),qa(Hn,H,t);const E=Lt.mode==="chase";Ka.emissiveIntensity=E?3:0,E&&Ka.emissive.setHex(Math.floor(Rt*6)%2?2113791:16719904);for(let B=La.length-1;B>=0;B--){const q=La[B];q.t+=n,q.o.position.y+=n*4,q.o.rotation.y+=n*12,q.o.scale.setScalar(1+q.t*3),q.t>.35&&(nn.remove(q.o),La.splice(B,1))}const U=W.health<35||E||b>0;if(xa-=n,U&&xa<=0&&(Je("heart",{vol:W.health<35?1:.6}),xa=W.health<20?.55:E?.6:.8),_l-=n,_l<=0){_l=.25;for(const B of Mm)B.o.visible=Math.abs(B.x-ae)<dl;for(const B of To)Math.abs(B.position.x-ae)>dl&&(B.visible=!1);To.forEach((B,q)=>{W.bottlesLeft[q]&&Math.abs(B.position.x-ae)<=dl&&(B.visible=!0)})}const z=Math.min(1,W.buzz/35);ut+=(z-ut)*Math.min(1,n*1.5);const X=Lo(W),Y=X>mt.nightAt?Math.min(1,(X-mt.nightAt)/.1):0,$=xn(1-Math.abs(X-mt.nightAt)/.12),oe=X/mt.nightAt*Math.PI;Ut.position.set(ae+Math.cos(oe)*22,12+Math.sin(oe)*18,xe-14),Ut.target.position.set(ae,0,xe),Ut.intensity=(2.4-$*.6)*(1-Y*.85),Ut.color.setRGB(1,.95-$*.25,.85-$*.4),Y>.5&&Ut.color.setRGB(.6,.7,1),Rh.intensity=1.25-Y*.75,Rh.color.setRGB(.85-Y*.4,.9-Y*.4,1);const pe=W.draw.weather==="rain"?.78:W.draw.weather==="cold"?.93:1,Te=new Ae(12896972).multiplyScalar(pe),Xe=new Ae(4892927),st=Te.lerp(Xe,ut);$>0&&st.lerp(new Ae(16747098),$*.45),st.lerp(new Ae(ut>.5?2758736:1316896),Y*.85),nn.background=st;const K=nn.fog;K.color.copy(st),K.near=26+ut*10,K.far=58+ut*4;for(const B of _c)B.emissiveIntensity=Y*1.6;YS.opacity=Y*.3;for(const B of vm){const q=Math.hypot(ae-B.x,xe-B.z)<=B.r;B.m.material.opacity=q?.6:.14+Math.sin(Rt*2)*.04}Z1(n,r,o);const se=xn(W.whimsy/30);ti.sat=(.58+ut*.8)*(.3+.7*se),ti.warm=.22+ut*.78,ti.contrast=.97+ut*.17,ti.glow=.2+ut*.9+Y*.6,ti.bright=1.05+ut*.02;const ye=Math.max(0,1-Math.abs(xa-.5)*4);ti.red=Math.max(Ao,W.health<35?(35-W.health)/35*(.75+.25*ye):0),ti.jitter=p*.9,Do=Zp(W,Bi()),N1(),q1(n),Um(n),B1(n),gl+=n,gl>3&&(gl=0,fs()),W.dead&&I1()}const Ts=new P,wl=new P,El=new P;let nc=!1;function Z1(n,e,t){Ls=Math.max(0,Ls-n*2),Ao=Math.max(0,Ao-n*2.5);const i=Bm[W.effect??"beer"],s=W.buzz/100;nc=!1;let r=xo;if(Zn>0){const c=1-Zn/2.2,l=is+Math.PI+Za*.9,h=4.6-c*1.4;We.position.set(ae+Math.sin(l)*h,1.1+c*.4,xe+Math.cos(l)*h),We.lookAt(ae,1.25,xe),We.rotateZ(Za*.06*(1-c)),r=xo-6-c*4}else if(as){const c=Math.round(ae/24)*24,l=Math.round(xe/16)*16,h=26-ut*10,d=18-ut*4;We.position.lerp(Y1.set(c,h,l-d),Math.min(1,n*6)),We.lookAt(We.position.x,0,We.position.z+d)}else{const c=Math.min(1,n*2.2),l=(ae-(nt.vx===0&&nt.vz===0?ae:zh))/Math.max(n,.001),h=(xe-(nt.vx===0&&nt.vz===0?xe:Hh))/Math.max(n,.001);nt.vx+=(xn(l,-9,9)-nt.vx)*c,nt.vz+=(xn(h,-9,9)-nt.vz)*c,zh=ae,Hh=xe;const d=1-ut;let u=ae+xn(nt.vx*Wt.aheadSecs,-3.2,Wt.aheadMax)*d,f=xe+xn(nt.vz*Wt.aheadSecs,-3.2,Wt.aheadMax)*d;const g=ei+Vn;u+=Math.sin(g)*Wt.highAhead*ut,f+=Math.cos(g)*Wt.highAhead*ut;let _=1;const m=Bi(),p=yt??(m.ped?No(2.8):null);if(p)u=Zi(u,(p.p.g.position.x+ae)/2,Wt.leanTalk),f=Zi(f,(p.p.g.position.z+xe)/2,Wt.leanTalk),_*=yt?Wt.talkPush:.93;else if(jp(m)||qp(m)){let E=_h[0],U=1e9;for(const z of _h){const X=Math.hypot(z.x-ae,z.z-xe);X<U&&(U=X,E=z)}u=Zi(u,E.x,Wt.leanDoor),f=Zi(f,E.z,Wt.leanDoor)}Math.abs(xe)<4.3&&(_*=Wt.roadPull),e>.1&&t>6.5&&(_*=Wt.runPull),ut>.3&&Do.some(E=>E.whimsy)&&(_*=.82),m.catNear&&ut>.3&&(u=Zi(u,_n.position.x,.4),f=Zi(f,_n.position.z,.4)),nt.fx+=(u-nt.fx)*Math.min(1,n*3),nt.fz+=(f-nt.fz)*Math.min(1,n*3);const M=We.aspect<1?1:0,x=Zi(Wt.soberDist+M*.5,Wt.highDist,ut)*_*us;nt.dist+=(x-nt.dist)*Math.min(1,n*1.6);const C=Zi(Wt.soberPitch+M*.05,Wt.highPitch,ut),A=Math.cos(C);Ts.set(-Math.sin(g)*A,Math.sin(C),-Math.cos(g)*A);const R=i.sway*s*ut,I=Math.cos(g),w=-Math.sin(g),v=(Math.sin(Rt*.9)*.7+Math.sin(Rt*.37)*.5)*R,L=Math.sin(Rt*1.3)*.3*R;We.position.set(nt.fx+Ts.x*nt.dist+I*v,.9+Ts.y*nt.dist+L,nt.fz+Ts.z*nt.dist+w*v),We.lookAt(We.position.x-Ts.x,We.position.y-Ts.y,We.position.z-Ts.z);const H=ut>.05?i.roll*ut*(Math.sin(Rt*.7)+.4*Math.sin(Rt*1.9)):0;if(nt.roll+=(H-nt.roll)*Math.min(1,n*3),Math.abs(nt.roll)>1e-4&&We.rotateZ(nt.roll),r=xo*(1+i.breathe*ut*Math.sin(Rt*.8)),ut<.02&&ei===0&&Vn===0&&Ls<=0&&Math.abs(nt.roll)<1e-4){We.updateMatrixWorld(),wl.setFromMatrixColumn(We.matrixWorld,0),El.setFromMatrixColumn(We.matrixWorld,1);const E=2*nt.dist*Math.tan(jf.degToRad(r)/2)/ii.lowH,U=We.position.dot(wl),z=We.position.dot(El);We.position.addScaledVector(wl,Math.round(U/E)*E-U).addScaledVector(El,Math.round(z/E)*E-z),nc=!0}}Math.abs(We.fov-r)>.01&&(We.fov=r,We.updateProjectionMatrix());const o=!ds(W)&&W.withdrawal>70?(W.withdrawal-70)/30:0,a=Ls*Ls*.9+o*.05;a>0&&(We.position.x+=(Math.random()-.5)*a,We.position.y+=(Math.random()-.5)*a)}let zh=0,Hh=0;const ti={sat:.58,warm:.22,contrast:.97,glow:.2,red:0,jitter:0,bright:1.05};let ic=performance.now(),Tl=0,va=0,Oa=60,ya=0,Lf=0;const zm=Qe("dbg");gm&&zm.classList.remove("hidden");function Hm(n){const e=(n-ic)/1e3,t=Math.min(.05,e);if(ic=n,sn&&!Mn&&!vn?Bh(t):sn&&(qa(Dt,0,0),Um(t)),hn.info.reset(),ii.render(nn,We,ti,Rt,Ya[zn].glow),Tl++,va+=e,va>=1&&(Oa=Tl/va,Tl=0,va=0,sn&&!Mn&&document.visibilityState==="visible"&&(Lf++,ya=Oa<40?ya+1:0,b1&&Lf>4&&ya>=3&&zn>0&&(zn--,ya=0,Rd())),gm)){const i=hn.info.render;zm.textContent=`fps ${Oa.toFixed(0)}  q${zn}  ${ii.lowW}x${ii.lowH} x${ii.scale}
calls ${i.calls}  tris ${i.triangles}
peds ${Cn.filter(s=>s.active).length}  cars ${Qn.length}  ${sn?hs(ae,xe):""}
audio ${x1()}  light ${gr}  snap ${nc?"on":"off"}
models ${Ad.length}`}requestAnimationFrame(Hm)}let Vm;const J1={likes:" ♥",hates:" ✗",meh:"",none:""};function Mc(){for(;W.messages.length;){const n=W.messages.shift();n.startsWith("Combo!")?(p1(n),Je("sparkle",{pitch:1.2})):Us(n)}}const Q1={pos:()=>({x:ae,z:xe}),pedNear:()=>!!No(2.8),close:Uo,open:n=>{vn=n,tc()},rerender:tc,flush:Mc,sound:n=>Je(n)};async function ew(){Oi.innerHTML='<div style="opacity:.6">Loading the city…</div>',await qS(),T1(),A1(),Vm=new a1(nn,Dt.g),f1(()=>{sn&&!Mn&&!vn&&Ro("bag")}),_m(),We.position.set(-20,10,-4),We.lookAt(-20,0,6),W=wd("BOOT"),Tm(),Id(),requestAnimationFrame(Hm)}ew();window.__sg={get s(){return W},get pos(){return{px:ae,pz:xe}},tp(n,e){ae=n,xe=e,nt.fx=n,nt.fz=e,zh=n,Hh=e},get acts(){return Do.map(n=>n.id)},act:ec,doDrink:Nd,startLife:Qa,continueLife:Rm,pauseGame:vc,resumeGame:Ld,saveLife:fs,get paused(){return Mn},get running(){return sn},get cop(){return{...Lt,x:Hn.g.position.x,z:Hn.g.position.z}},setCop(n,e){Hn.g.position.set(n,0,e)},get cat(){return{x:_n.position.x,z:_n.position.z}},get cars(){return Qn.map(n=>({x:+n.x.toFixed(2),z:n.z,speed:+n.speed.toFixed(2),dir:n.dir}))},get peds(){return Cn.filter(n=>n.active).map(n=>({kind:n.kind,x:+n.p.g.position.x.toFixed(1),z:+n.p.g.position.z.toFixed(1),asks:n.asks,mad:n.mad>0}))},summon(n){const e=Cn.find(t=>t.kind===n&&!t.active)??Cn.find(t=>t.kind===n);return e.active=!0,e.p.g.visible=!0,e.asks=0,e.mad=0,e.talkT=3,e.id=++Em,e.p.g.position.set(ae+1.2,0,xe),n},sayLine:Dd,get begOpen(){return!!yt},get lines(){return yt?gc(W,Bi()):[]},get bubbles(){return br.map(n=>n.el.textContent)},openShop:Ro,closeShop:Uo,get shopOpen(){return vn},buyRow(n){var e;(e=Ns.querySelectorAll(".srow")[n])==null||e.dispatchEvent(new PointerEvent("pointerdown"))},get light(){return gr},get fps(){return Oa},get quality(){return zn},get sounds(){return Ca.map(n=>n.name)},get grade(){return{...ti}},get camYaw(){return ei},setUserCam(n,e){Vn=n,us=e},centerCam:Cd,get cam(){return{...nt,userYaw:Vn,userZoom:us,x:We.position.x,y:We.position.y,z:We.position.z,fov:We.fov,snapped:nc}},get models(){return[...Ad]},get highness(){return ut},bench(n=60){const e=hn.getContext(),t=new Uint8Array(4),i=performance.now();for(let s=0;s<n;s++)hn.info.reset(),ii.render(nn,We,ti,Rt,Ya[zn].glow),e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,t);return+((performance.now()-i)/n).toFixed(2)},setQuality(n){zn=n,Rd()},get render(){const n=hn.info.render;return{calls:n.calls,tris:n.triangles,low:[ii.lowW,ii.lowH,ii.scale]}},setTime(n){W.time=n*mt.dayLength},stick(n,e){Gn.x=n,Gn.y=e},sim(n,e){for(let t=0;t<n&&sn&&!W.dead;t+=1/30)e==null||e(),Bh(1/30);hn.info.reset(),W.dead&&sn&&Bh(1/30),ii.render(nn,We,ti,Rt,Ya[zn].glow)}};Object.assign(window.__sg,{ownState:()=>W.own,give:n=>$t(W,n,ae,xe),use:n=>kp(W,n,!!No(2.8)),craft:n=>pm(W,n,ae,xe),steal:(n,e)=>Hp(W,n,e),pawnSell:n=>Gp(W,n),openPanel:n=>Ro(n),drain:Mc,tapSel:n=>{var e;return(e=document.querySelector(n))==null?void 0:e.dispatchEvent(new PointerEvent("pointerdown"))}});
