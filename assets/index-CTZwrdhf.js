(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fu="170",Dg=0,vd=1,kg=2,_p=1,xp=2,Ni=3,Xi=0,Tn=1,vi=2,ms=0,Rr=1,lc=2,yd=3,Md=4,Ng=5,Bs=100,Ug=101,Fg=102,Og=103,Bg=104,zg=200,Hg=201,Gg=202,Vg=203,eh=204,th=205,Wg=206,Xg=207,$g=208,jg=209,qg=210,Yg=211,Kg=212,Zg=213,Jg=214,nh=0,ih=1,sh=2,Ur=3,rh=4,oh=5,ah=6,ch=7,pu=0,Qg=1,e0=2,gs=0,t0=1,n0=2,i0=3,s0=4,r0=5,o0=6,a0=7,bd="attached",c0="detached",vp=300,Fr=301,Or=302,lh=303,hh=304,Lc=306,Br=1e3,us=1001,hc=1002,$t=1003,yp=1004,To=1005,Ln=1006,Ha=1007,Bi=1008,$i=1009,Mp=1010,bp=1011,Fo=1012,mu=1013,Ws=1014,di=1015,Qr=1016,gu=1017,_u=1018,zr=1020,Sp=35902,wp=1021,Tp=1022,Xn=1023,Ep=1024,Ap=1025,Cr=1026,Hr=1027,xu=1028,vu=1029,Rp=1030,yu=1031,Mu=1033,Ga=33776,Va=33777,Wa=33778,Xa=33779,uh=35840,dh=35841,fh=35842,ph=35843,mh=36196,gh=37492,_h=37496,xh=37808,vh=37809,yh=37810,Mh=37811,bh=37812,Sh=37813,wh=37814,Th=37815,Eh=37816,Ah=37817,Rh=37818,Ch=37819,Ih=37820,Lh=37821,$a=36492,Ph=36494,Dh=36495,Cp=36283,kh=36284,Nh=36285,Uh=36286,Ip=2200,l0=2201,h0=2202,Oo=2300,Bo=2301,Kc=2302,Sr=2400,wr=2401,uc=2402,bu=2500,u0=2501,d0=0,Lp=1,Fh=2,f0=3200,p0=3201,Su=0,m0=1,hs="",Ut="srgb",gn="srgb-linear",Pc="linear",xt="srgb",qs=7680,Sd=519,g0=512,_0=513,x0=514,Pp=515,v0=516,y0=517,M0=518,b0=519,Oh=35044,wd="300 es",zi=2e3,dc=2001;class $s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Td=1234567;const Lo=Math.PI/180,Gr=180/Math.PI;function fi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function on(n,e,t){return Math.max(e,Math.min(t,n))}function wu(n,e){return(n%e+e)%e}function S0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function w0(n,e,t){return n!==e?(t-n)/(e-n):0}function Po(n,e,t){return(1-t)*n+t*e}function T0(n,e,t,i){return Po(n,e,1-Math.exp(-t*i))}function E0(n,e=1){return e-Math.abs(wu(n,e*2)-e)}function A0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function R0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function C0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function I0(n,e){return n+Math.random()*(e-n)}function L0(n){return n*(.5-Math.random())}function P0(n){n!==void 0&&(Td=n);let e=Td+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function D0(n){return n*Lo}function k0(n){return n*Gr}function N0(n){return(n&n-1)===0&&n!==0}function U0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function F0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function O0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Dp={DEG2RAD:Lo,RAD2DEG:Gr,generateUUID:fi,clamp:on,euclideanModulo:wu,mapLinear:S0,inverseLerp:w0,lerp:Po,damp:T0,pingpong:E0,smoothstep:A0,smootherstep:R0,randInt:C0,randFloat:I0,randFloatSpread:L0,seededRandom:P0,degToRad:D0,radToDeg:k0,isPowerOfTwo:N0,ceilPowerOfTwo:U0,floorPowerOfTwo:F0,setQuaternionFromProperEuler:O0,normalize:_t,denormalize:hi};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,s,r,o,a,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],v=s[1],y=s[4],x=s[7],C=s[2],A=s[5],R=s[8];return r[0]=o*_+a*v+c*C,r[3]=o*m+a*y+c*A,r[6]=o*f+a*x+c*R,r[1]=l*_+h*v+u*C,r[4]=l*m+h*y+u*A,r[7]=l*f+h*x+u*R,r[2]=d*_+p*v+g*C,r[5]=d*m+p*y+g*A,r[8]=d*f+p*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zc.makeScale(e,t)),this}rotate(e){return this.premultiply(Zc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zc=new He;function kp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function B0(){const n=zo("canvas");return n.style.display="block",n}const Ed={};function Eo(n){n in Ed||(Ed[n]=!0,console.warn(n))}function z0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function H0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function G0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const et={enabled:!0,workingColorSpace:gn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===xt&&(n.r=Gi(n.r),n.g=Gi(n.g),n.b=Gi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===xt&&(n.r=Ir(n.r),n.g=Ir(n.g),n.b=Ir(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===hs?Pc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ad=[.64,.33,.3,.6,.15,.06],Rd=[.2126,.7152,.0722],Cd=[.3127,.329],Id=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ld=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[gn]:{primaries:Ad,whitePoint:Cd,transfer:Pc,toXYZ:Id,fromXYZ:Ld,luminanceCoefficients:Rd,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:Ad,whitePoint:Cd,transfer:xt,toXYZ:Id,fromXYZ:Ld,luminanceCoefficients:Rd,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}});let Ys;class V0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ys===void 0&&(Ys=zo("canvas")),Ys.width=e.width,Ys.height=e.height;const i=Ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gi(t[i]/255)*255):t[i]=Gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let W0=0;class Np{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jc(s[o].image)):r.push(Jc(s[o]))}else r=Jc(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Jc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?V0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let X0=0;class Ht extends $s{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=us,s=us,r=Ln,o=Bi,a=Xn,c=$i,l=Ht.DEFAULT_ANISOTROPY,h=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=fi(),this.name="",this.source=new Np(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Br:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Br:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=vp;Ht.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(p+1)/2,C=(f+1)/2,A=(h+d)/4,R=(u+_)/4,P=(g+m)/4;return y>x&&y>C?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=A/i,r=R/i):x>C?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=P/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=P/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $0 extends $s{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ht(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Np(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends $0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Up extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class j0 extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*_,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const C=Math.sqrt(y),A=Math.atan2(C,f*v);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const x=a*v;if(c=c*m+d*x,l=l*m+p*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qc=new L,Pd=new Nn;class mi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ea.copy(i.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),ta.subVectors(this.max,uo),Ks.subVectors(e.a,uo),Zs.subVectors(e.b,uo),Js.subVectors(e.c,uo),Qi.subVectors(Zs,Ks),es.subVectors(Js,Zs),Ts.subVectors(Ks,Js);let t=[0,-Qi.z,Qi.y,0,-es.z,es.y,0,-Ts.z,Ts.y,Qi.z,0,-Qi.x,es.z,0,-es.x,Ts.z,0,-Ts.x,-Qi.y,Qi.x,0,-es.y,es.x,0,-Ts.y,Ts.x,0];return!el(t,Ks,Zs,Js,ta)||(t=[1,0,0,0,1,0,0,0,1],!el(t,Ks,Zs,Js,ta))?!1:(na.crossVectors(Qi,es),t=[na.x,na.y,na.z],el(t,Ks,Zs,Js,ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new L,new L,new L,new L,new L,new L,new L,new L],ti=new L,ea=new mi,Ks=new L,Zs=new L,Js=new L,Qi=new L,es=new L,Ts=new L,uo=new L,ta=new L,na=new L,Es=new L;function el(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Es.fromArray(n,r);const a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),c=e.dot(Es),l=t.dot(Es),h=i.dot(Es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const q0=new mi,fo=new L,tl=new L;class wi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):q0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);const t=fo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(fo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(tl)),this.expandByPoint(fo.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new L,nl=new L,ia=new L,ts=new L,il=new L,sa=new L,sl=new L;class Dc{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){nl.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(nl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ia),a=ts.dot(this.direction),c=-ts.dot(ia),l=ts.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nl).addScaledVector(ia,d),p}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),s=Ii.dot(Ii)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,s,r){il.subVectors(t,e),sa.subVectors(i,e),sl.crossVectors(il,sa);let o=this.direction.dot(sl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ts.subVectors(this.origin,e);const c=a*this.direction.dot(sa.crossVectors(ts,sa));if(c<0)return null;const l=a*this.direction.dot(il.cross(ts));if(l<0||c+l>o)return null;const h=-a*ts.dot(sl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,i,s,r,o,a,c,l,h,u,d,p,g,_,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,p,g,_,m)}set(e,t,i,s,r,o,a,c,l,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Qs.setFromMatrixColumn(e,0).length(),r=1/Qs.setFromMatrixColumn(e,1).length(),o=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y0,e,K0)}lookAt(e,t,i){const s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),ns.crossVectors(i,Rn),ns.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),ns.crossVectors(i,Rn)),ns.normalize(),ra.crossVectors(Rn,ns),s[0]=ns.x,s[4]=ra.x,s[8]=Rn.x,s[1]=ns.y,s[5]=ra.y,s[9]=Rn.y,s[2]=ns.z,s[6]=ra.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],v=i[3],y=i[7],x=i[11],C=i[15],A=s[0],R=s[4],P=s[8],w=s[12],b=s[1],I=s[5],G=s[9],E=s[13],D=s[2],z=s[6],$=s[10],Y=s[14],X=s[3],ae=s[7],xe=s[11],be=s[15];return r[0]=o*A+a*b+c*D+l*X,r[4]=o*R+a*I+c*z+l*ae,r[8]=o*P+a*G+c*$+l*xe,r[12]=o*w+a*E+c*Y+l*be,r[1]=h*A+u*b+d*D+p*X,r[5]=h*R+u*I+d*z+p*ae,r[9]=h*P+u*G+d*$+p*xe,r[13]=h*w+u*E+d*Y+p*be,r[2]=g*A+_*b+m*D+f*X,r[6]=g*R+_*I+m*z+f*ae,r[10]=g*P+_*G+m*$+f*xe,r[14]=g*w+_*E+m*Y+f*be,r[3]=v*A+y*b+x*D+C*X,r[7]=v*R+y*I+x*z+C*ae,r[11]=v*P+y*G+x*$+C*xe,r[15]=v*w+y*E+x*Y+C*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*p-i*c*p)+_*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+i*o*p+r*a*h-i*l*h)+f*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,y=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,x=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,C=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,A=t*v+i*y+s*x+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=v*R,e[1]=(_*d*r-u*m*r-_*s*p+i*m*p+u*s*f-i*d*f)*R,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*f+i*c*f)*R,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*p-i*c*p)*R,e[4]=y*R,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*R,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*f-t*c*f)*R,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*p+t*c*p)*R,e[8]=x*R,e[9]=(g*u*r-h*_*r-g*i*p+t*_*p+h*i*f-t*u*f)*R,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*f+t*a*f)*R,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*p-t*a*p)*R,e[12]=C*R,e[13]=(h*_*s-g*u*s+g*i*d-t*_*d-h*i*m+t*u*m)*R,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,v=c*l,y=c*h,x=c*u,C=i.x,A=i.y,R=i.z;return s[0]=(1-(_+f))*C,s[1]=(p+x)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(p-x)*A,s[5]=(1-(d+f))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+y)*R,s[9]=(m-v)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Qs.set(s[0],s[1],s[2]).length();const o=Qs.set(s[4],s[5],s[6]).length(),a=Qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ni.copy(this);const l=1/r,h=1/o,u=1/a;return ni.elements[0]*=l,ni.elements[1]*=l,ni.elements[2]*=l,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=u,ni.elements[9]*=u,ni.elements[10]*=u,t.setFromRotationMatrix(ni),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=zi){const c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s);let p,g;if(a===zi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===dc)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=zi){const c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*l,p=(i+s)*h;let g,_;if(a===zi)g=(o+r)*u,_=-2*u;else if(a===dc)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qs=new L,ni=new Ne,Y0=new L(0,0,0),K0=new L(1,1,1),ns=new L,ra=new L,Rn=new L,Dd=new Ne,kd=new Nn;class pi{constructor(e=0,t=0,i=0,s=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kd.setFromEuler(this),this.setFromQuaternion(kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class Fp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Z0=0;const Nd=new L,er=new Nn,Li=new Ne,oa=new L,po=new L,J0=new L,Q0=new Nn,Ud=new L(1,0,0),Fd=new L(0,1,0),Od=new L(0,0,1),Bd={type:"added"},e_={type:"removed"},tr={type:"childadded",child:null},rl={type:"childremoved",child:null};class Ct extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new L,t=new pi,i=new Nn,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new He}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(Ud,e)}rotateY(e){return this.rotateOnAxis(Fd,e)}rotateZ(e){return this.rotateOnAxis(Od,e)}translateOnAxis(e,t){return Nd.copy(e).applyQuaternion(this.quaternion),this.position.add(Nd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ud,e)}translateY(e){return this.translateOnAxis(Fd,e)}translateZ(e){return this.translateOnAxis(Od,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oa.copy(e):oa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(po,oa,this.up):Li.lookAt(oa,po,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),er.setFromRotationMatrix(Li),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bd),tr.child=e,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e_),rl.child=e,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bd),tr.child=e,this.dispatchEvent(tr),tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,J0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,Q0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ct.DEFAULT_UP=new L(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new L,Pi=new L,ol=new L,Di=new L,nr=new L,ir=new L,zd=new L,al=new L,cl=new L,ll=new L,hl=new ht,ul=new ht,dl=new ht;class Wn{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ii.subVectors(e,t),s.cross(ii);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ii.subVectors(s,t),Pi.subVectors(i,t),ol.subVectors(e,t);const o=ii.dot(ii),a=ii.dot(Pi),c=ii.dot(ol),l=Pi.dot(Pi),h=Pi.dot(ol),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Di.x),c.addScaledVector(o,Di.y),c.addScaledVector(a,Di.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return hl.setScalar(0),ul.setScalar(0),dl.setScalar(0),hl.fromBufferAttribute(e,t),ul.fromBufferAttribute(e,i),dl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(hl,r.x),o.addScaledVector(ul,r.y),o.addScaledVector(dl,r.z),o}static isFrontFacing(e,t,i,s){return ii.subVectors(i,t),Pi.subVectors(e,t),ii.cross(Pi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ii.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Wn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;nr.subVectors(s,i),ir.subVectors(r,i),al.subVectors(e,i);const c=nr.dot(al),l=ir.dot(al);if(c<=0&&l<=0)return t.copy(i);cl.subVectors(e,s);const h=nr.dot(cl),u=ir.dot(cl);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(nr,o);ll.subVectors(e,r);const p=nr.dot(ll),g=ir.dot(ll);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ir,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return zd.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(zd,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(i).addScaledVector(nr,o).addScaledVector(ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},aa={h:0,s:0,l:0};function fl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=wu(e,1),t=on(t,0,1),i=on(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=fl(o,r,e+1/3),this.g=fl(o,r,e),this.b=fl(o,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const i=Op[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return et.fromWorkingColorSpace(tn.copy(this),e),Math.round(on(tn.r*255,0,255))*65536+Math.round(on(tn.g*255,0,255))*256+Math.round(on(tn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(tn.copy(this),t);const i=tn.r,s=tn.g,r=tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Ut){et.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,i=tn.g,s=tn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(aa);const i=Po(is.h,aa.h,t),s=Po(is.s,aa.s,t),r=Po(is.l,aa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Re;Re.NAMES=Op;let t_=0;class Kn extends $s{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=fi(),this.name="",this.blending=Rr,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=th,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eh&&(i.blendSrc=this.blendSrc),this.blendDst!==th&&(i.blendDst=this.blendDst),this.blendEquation!==Bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pn extends Kn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new L,ca=new Ie;class Kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Oh,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oh&&(e.usage=this.usage),e}}class Bp extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zp extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class It extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let n_=0;const zn=new Ne,pl=new Ct,sr=new L,Cn=new mi,mo=new mi,Wt=new L;class Jt extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kp(e)?zp:Bp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,i){return zn.makeTranslation(e,t,i),this.applyMatrix4(zn),this}scale(e,t,i){return zn.makeScale(e,t,i),this.applyMatrix4(zn),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new It(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];mo.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Cn.min,mo.min),Cn.expandByPoint(Wt),Wt.addVectors(Cn.max,mo.max),Cn.expandByPoint(Wt)):(Cn.expandByPoint(mo.min),Cn.expandByPoint(mo.max))}Cn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Wt.fromBufferAttribute(a,l),c&&(sr.fromBufferAttribute(e,l),Wt.add(sr)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<i.count;P++)a[P]=new L,c[P]=new L;const l=new L,h=new L,u=new L,d=new Ie,p=new Ie,g=new Ie,_=new L,m=new L;function f(P,w,b){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,b),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[P].add(_),a[w].add(_),a[b].add(_),c[P].add(m),c[w].add(m),c[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,w=v.length;P<w;++P){const b=v[P],I=b.start,G=b.count;for(let E=I,D=I+G;E<D;E+=3)f(e.getX(E+0),e.getX(E+1),e.getX(E+2))}const y=new L,x=new L,C=new L,A=new L;function R(P){C.fromBufferAttribute(s,P),A.copy(C);const w=a[P];y.copy(w),y.sub(C.multiplyScalar(C.dot(w))).normalize(),x.crossVectors(A,w);const I=x.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,I)}for(let P=0,w=v.length;P<w;++P){const b=v[P],I=b.start,G=b.count;for(let E=I,D=I+G;E<D;E+=3)R(e.getX(E+0)),R(e.getX(E+1)),R(e.getX(E+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Kt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hd=new Ne,As=new Dc,la=new wi,Gd=new L,ha=new L,ua=new L,da=new L,ml=new L,fa=new L,Vd=new L,pa=new L;class Je extends Ct{constructor(e=new Jt,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){fa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ml.fromBufferAttribute(u,e),o?fa.addScaledVector(ml,h):fa.addScaledVector(ml.sub(t),h))}t.add(fa)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(la.containsPoint(As.origin)===!1&&(As.intersectSphere(la,Gd)===null||As.origin.distanceToSquared(Gd)>(e.far-e.near)**2))&&(Hd.copy(r).invert(),As.copy(e.ray).applyMatrix4(Hd),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,C=y;x<C;x+=3){const A=a.getX(x),R=a.getX(x+1),P=a.getX(x+2);s=ma(this,f,e,i,l,h,u,A,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=ma(this,o,e,i,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,C=y;x<C;x+=3){const A=x,R=x+1,P=x+2;s=ma(this,f,e,i,l,h,u,A,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,y=m+1,x=m+2;s=ma(this,o,e,i,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function i_(n,e,t,i,s,r,o,a){let c;if(e.side===Tn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Xi,a),c===null)return null;pa.copy(a),pa.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(pa);return l<t.near||l>t.far?null:{distance:l,point:pa.clone(),object:n}}function ma(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ha),n.getVertexPosition(c,ua),n.getVertexPosition(l,da);const h=i_(n,e,t,i,ha,ua,da,Vd);if(h){const u=new L;Wn.getBarycoord(Vd,ha,ua,da,u),s&&(h.uv=Wn.getInterpolatedAttribute(s,a,c,l,u,new Ie)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,a,c,l,u,new Ie)),o&&(h.normal=Wn.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};Wn.getNormal(ha,ua,da,d.normal),h.face=d,h.barycoord=u}return h}class Zn extends Jt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function g(_,m,f,v,y,x,C,A,R,P,w){const b=x/R,I=C/P,G=x/2,E=C/2,D=A/2,z=R+1,$=P+1;let Y=0,X=0;const ae=new L;for(let xe=0;xe<$;xe++){const be=xe*I-E;for(let $e=0;$e<z;$e++){const mt=$e*b-G;ae[_]=mt*v,ae[m]=be*y,ae[f]=D,l.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[f]=A>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push($e/R),u.push(1-xe/P),Y+=1}}for(let xe=0;xe<P;xe++)for(let be=0;be<R;be++){const $e=d+be+z*xe,mt=d+be+z*(xe+1),K=d+(be+1)+z*(xe+1),re=d+(be+1)+z*xe;c.push($e,mt,re),c.push(mt,K,re),X+=6}a.addGroup(p,X,w),p+=X,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=Vr(n[t]);for(const s in i)e[s]=i[s]}return e}function s_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const r_={clone:Vr,merge:dn};var o_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Kn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o_,this.fragmentShader=a_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=s_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gp extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ss=new L,Wd=new Ie,Xd=new Ie;class fn extends Gp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,Wd,Xd),t.subVectors(Xd,Wd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=-90,or=1;class c_ extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(rr,or,e,t);s.layers=this.layers,this.add(s);const r=new fn(rr,or,e,t);r.layers=this.layers,this.add(r);const o=new fn(rr,or,e,t);o.layers=this.layers,this.add(o);const a=new fn(rr,or,e,t);a.layers=this.layers,this.add(a);const c=new fn(rr,or,e,t);c.layers=this.layers,this.add(c);const l=new fn(rr,or,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===dc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Vp extends Ht{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Fr,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l_ extends ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Vp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zn(5,5,5),r=new ji({name:"CubemapFromEquirect",uniforms:Vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:ms});r.uniforms.tEquirect.value=t;const o=new Je(s,r),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Ln),new c_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const gl=new L,h_=new L,u_=new He;class Fs{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=gl.subVectors(i,t).cross(h_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(gl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||u_.getNormalMatrix(e),s=this.coplanarPoint(gl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new wi,ga=new L;class Tu{constructor(e=new Fs,t=new Fs,i=new Fs,s=new Fs,r=new Fs,o=new Fs){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],v=s[13],y=s[14],x=s[15];if(i[0].setComponents(c-r,d-l,m-p,x-f).normalize(),i[1].setComponents(c+r,d+l,m+p,x+f).normalize(),i[2].setComponents(c+o,d+h,m+g,x+v).normalize(),i[3].setComponents(c-o,d-h,m-g,x-v).normalize(),i[4].setComponents(c-a,d-u,m-_,x-y).normalize(),t===zi)i[5].setComponents(c+a,d+u,m+_,x+y).normalize();else if(t===dc)i[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ga.x=s.normal.x>0?e.max.x:e.min.x,ga.y=s.normal.y>0?e.max.y:e.min.y,ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function d_(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class qi extends Jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const v=f*d-o;for(let y=0;y<l;y++){const x=y*u-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<a;v++){const y=v+l*f,x=v+l*(f+1),C=v+1+l*(f+1),A=v+1+l*f;p.push(y,x,A),p.push(x,C,A)}this.setIndex(p),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.widthSegments,e.heightSegments)}}var f_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p_=`#ifdef USE_ALPHAHASH
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
#endif`,m_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,__=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v_=`#ifdef USE_AOMAP
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
#endif`,y_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M_=`#ifdef USE_BATCHING
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
#endif`,b_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E_=`#ifdef USE_IRIDESCENCE
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
#endif`,A_=`#ifdef USE_BUMPMAP
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
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,k_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,U_=`#define PI 3.141592653589793
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
} // validated`,F_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O_=`vec3 transformedNormal = objectNormal;
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
#endif`,B_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V_="gl_FragColor = linearToOutputTexel( gl_FragColor );",W_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X_=`#ifdef USE_ENVMAP
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
#endif`,$_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,j_=`#ifdef USE_ENVMAP
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
#endif`,q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
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
#endif`,K_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ex=`#ifdef USE_GRADIENTMAP
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
}`,tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sx=`uniform bool receiveShadow;
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
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hx=`PhysicalMaterial material;
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
#endif`,ux=`struct PhysicalMaterial {
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
}`,dx=`
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
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
#endif`,px=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bx=`#if defined( USE_POINTS_UV )
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
#endif`,Sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rx=`#ifdef USE_MORPHTARGETS
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
#endif`,Cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nx=`#ifdef USE_NORMALMAP
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
#endif`,Ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zx=`float getShadowMask() {
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
}`,Jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tv=`#ifdef USE_SKINNING
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
#endif`,nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ov=`#ifdef USE_TRANSMISSION
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
#endif`,av=`#ifdef USE_TRANSMISSION
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
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fv=`uniform sampler2D t2D;
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
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`#include <common>
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
}`,vv=`#if DEPTH_PACKING == 3200
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
}`,yv=`#define DISTANCE
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
}`,Mv=`#define DISTANCE
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
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`uniform float scale;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,Ev=`#include <common>
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
}`,Av=`uniform vec3 diffuse;
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
}`,Rv=`#define LAMBERT
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
}`,Cv=`#define LAMBERT
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
}`,Iv=`#define MATCAP
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
}`,Lv=`#define MATCAP
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
}`,Pv=`#define NORMAL
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
}`,Dv=`#define NORMAL
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
}`,kv=`#define PHONG
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
}`,Nv=`#define PHONG
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
}`,Uv=`#define STANDARD
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
}`,Fv=`#define STANDARD
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
}`,Ov=`#define TOON
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
}`,Bv=`#define TOON
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
}`,zv=`uniform float size;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Gv=`#include <common>
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
}`,Vv=`uniform vec3 color;
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
}`,Wv=`uniform float rotation;
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
}`,Xv=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:f_,alphahash_pars_fragment:p_,alphamap_fragment:m_,alphamap_pars_fragment:g_,alphatest_fragment:__,alphatest_pars_fragment:x_,aomap_fragment:v_,aomap_pars_fragment:y_,batching_pars_vertex:M_,batching_vertex:b_,begin_vertex:S_,beginnormal_vertex:w_,bsdfs:T_,iridescence_fragment:E_,bumpmap_pars_fragment:A_,clipping_planes_fragment:R_,clipping_planes_pars_fragment:C_,clipping_planes_pars_vertex:I_,clipping_planes_vertex:L_,color_fragment:P_,color_pars_fragment:D_,color_pars_vertex:k_,color_vertex:N_,common:U_,cube_uv_reflection_fragment:F_,defaultnormal_vertex:O_,displacementmap_pars_vertex:B_,displacementmap_vertex:z_,emissivemap_fragment:H_,emissivemap_pars_fragment:G_,colorspace_fragment:V_,colorspace_pars_fragment:W_,envmap_fragment:X_,envmap_common_pars_fragment:$_,envmap_pars_fragment:j_,envmap_pars_vertex:q_,envmap_physical_pars_fragment:rx,envmap_vertex:Y_,fog_vertex:K_,fog_pars_vertex:Z_,fog_fragment:J_,fog_pars_fragment:Q_,gradientmap_pars_fragment:ex,lightmap_pars_fragment:tx,lights_lambert_fragment:nx,lights_lambert_pars_fragment:ix,lights_pars_begin:sx,lights_toon_fragment:ox,lights_toon_pars_fragment:ax,lights_phong_fragment:cx,lights_phong_pars_fragment:lx,lights_physical_fragment:hx,lights_physical_pars_fragment:ux,lights_fragment_begin:dx,lights_fragment_maps:fx,lights_fragment_end:px,logdepthbuf_fragment:mx,logdepthbuf_pars_fragment:gx,logdepthbuf_pars_vertex:_x,logdepthbuf_vertex:xx,map_fragment:vx,map_pars_fragment:yx,map_particle_fragment:Mx,map_particle_pars_fragment:bx,metalnessmap_fragment:Sx,metalnessmap_pars_fragment:wx,morphinstance_vertex:Tx,morphcolor_vertex:Ex,morphnormal_vertex:Ax,morphtarget_pars_vertex:Rx,morphtarget_vertex:Cx,normal_fragment_begin:Ix,normal_fragment_maps:Lx,normal_pars_fragment:Px,normal_pars_vertex:Dx,normal_vertex:kx,normalmap_pars_fragment:Nx,clearcoat_normal_fragment_begin:Ux,clearcoat_normal_fragment_maps:Fx,clearcoat_pars_fragment:Ox,iridescence_pars_fragment:Bx,opaque_fragment:zx,packing:Hx,premultiplied_alpha_fragment:Gx,project_vertex:Vx,dithering_fragment:Wx,dithering_pars_fragment:Xx,roughnessmap_fragment:$x,roughnessmap_pars_fragment:jx,shadowmap_pars_fragment:qx,shadowmap_pars_vertex:Yx,shadowmap_vertex:Kx,shadowmask_pars_fragment:Zx,skinbase_vertex:Jx,skinning_pars_vertex:Qx,skinning_vertex:ev,skinnormal_vertex:tv,specularmap_fragment:nv,specularmap_pars_fragment:iv,tonemapping_fragment:sv,tonemapping_pars_fragment:rv,transmission_fragment:ov,transmission_pars_fragment:av,uv_pars_fragment:cv,uv_pars_vertex:lv,uv_vertex:hv,worldpos_vertex:uv,background_vert:dv,background_frag:fv,backgroundCube_vert:pv,backgroundCube_frag:mv,cube_vert:gv,cube_frag:_v,depth_vert:xv,depth_frag:vv,distanceRGBA_vert:yv,distanceRGBA_frag:Mv,equirect_vert:bv,equirect_frag:Sv,linedashed_vert:wv,linedashed_frag:Tv,meshbasic_vert:Ev,meshbasic_frag:Av,meshlambert_vert:Rv,meshlambert_frag:Cv,meshmatcap_vert:Iv,meshmatcap_frag:Lv,meshnormal_vert:Pv,meshnormal_frag:Dv,meshphong_vert:kv,meshphong_frag:Nv,meshphysical_vert:Uv,meshphysical_frag:Fv,meshtoon_vert:Ov,meshtoon_frag:Bv,points_vert:zv,points_frag:Hv,shadow_vert:Gv,shadow_frag:Vv,sprite_vert:Wv,sprite_frag:Xv},le={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},xi={basic:{uniforms:dn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:dn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Re(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:dn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:dn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:dn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Re(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:dn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:dn([le.points,le.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:dn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:dn([le.common,le.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:dn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:dn([le.sprite,le.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:dn([le.common,le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:dn([le.lights,le.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};xi.physical={uniforms:dn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const _a={r:0,b:0,g:0},Cs=new pi,$v=new Ne;function jv(n,e,t,i,s,r,o){const a=new Re(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?f(a,c):x&&x.isColor&&(f(x,1),y=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Lc)?(h===void 0&&(h=new Je(new Zn(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Vr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Cs.copy(y.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($v.makeRotationFromEuler(Cs)),h.material.toneMapped=et.getTransfer(x.colorSpace)!==xt,(u!==x||d!==x.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Je(new qi(2,2),new ji({name:"BackgroundMaterial",uniforms:Vr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=et.getTransfer(x.colorSpace)!==xt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,p=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function f(v,y){v.getRGB(_a,Hp(n)),i.buffers.color.setClear(_a.r,_a.g,_a.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,f(a,c)},render:_,addToRenderList:m}}function qv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(b,I,G,E,D){let z=!1;const $=u(E,G,I);r!==$&&(r=$,l(r.object)),z=p(b,E,G,D),z&&g(b,E,G,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(b,I,G,E),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,I,G){const E=G.wireframe===!0;let D=i[b.id];D===void 0&&(D={},i[b.id]=D);let z=D[I.id];z===void 0&&(z={},D[I.id]=z);let $=z[E];return $===void 0&&($=d(c()),z[E]=$),$}function d(b){const I=[],G=[],E=[];for(let D=0;D<t;D++)I[D]=0,G[D]=0,E[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:E,object:b,attributes:{},index:null}}function p(b,I,G,E){const D=r.attributes,z=I.attributes;let $=0;const Y=G.getAttributes();for(const X in Y)if(Y[X].location>=0){const xe=D[X];let be=z[X];if(be===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(be=b.instanceColor)),xe===void 0||xe.attribute!==be||be&&xe.data!==be.data)return!0;$++}return r.attributesNum!==$||r.index!==E}function g(b,I,G,E){const D={},z=I.attributes;let $=0;const Y=G.getAttributes();for(const X in Y)if(Y[X].location>=0){let xe=z[X];xe===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor));const be={};be.attribute=xe,xe&&xe.data&&(be.data=xe.data),D[X]=be,$++}r.attributes=D,r.attributesNum=$,r.index=E}function _(){const b=r.newAttributes;for(let I=0,G=b.length;I<G;I++)b[I]=0}function m(b){f(b,0)}function f(b,I){const G=r.newAttributes,E=r.enabledAttributes,D=r.attributeDivisors;G[b]=1,E[b]===0&&(n.enableVertexAttribArray(b),E[b]=1),D[b]!==I&&(n.vertexAttribDivisor(b,I),D[b]=I)}function v(){const b=r.newAttributes,I=r.enabledAttributes;for(let G=0,E=I.length;G<E;G++)I[G]!==b[G]&&(n.disableVertexAttribArray(G),I[G]=0)}function y(b,I,G,E,D,z,$){$===!0?n.vertexAttribIPointer(b,I,G,D,z):n.vertexAttribPointer(b,I,G,E,D,z)}function x(b,I,G,E){_();const D=E.attributes,z=G.getAttributes(),$=I.defaultAttributeValues;for(const Y in z){const X=z[Y];if(X.location>=0){let ae=D[Y];if(ae===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),ae!==void 0){const xe=ae.normalized,be=ae.itemSize,$e=e.get(ae);if($e===void 0)continue;const mt=$e.buffer,K=$e.type,re=$e.bytesPerElement,fe=K===n.INT||K===n.UNSIGNED_INT||ae.gpuType===mu;if(ae.isInterleavedBufferAttribute){const ue=ae.data,Ce=ue.stride,Pe=ae.offset;if(ue.isInstancedInterleavedBuffer){for(let je=0;je<X.locationSize;je++)f(X.location+je,ue.meshPerAttribute);b.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let je=0;je<X.locationSize;je++)m(X.location+je);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let je=0;je<X.locationSize;je++)y(X.location+je,be/X.locationSize,K,xe,Ce*re,(Pe+be/X.locationSize*je)*re,fe)}else{if(ae.isInstancedBufferAttribute){for(let ue=0;ue<X.locationSize;ue++)f(X.location+ue,ae.meshPerAttribute);b.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ue=0;ue<X.locationSize;ue++)m(X.location+ue);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let ue=0;ue<X.locationSize;ue++)y(X.location+ue,be/X.locationSize,K,xe,be*re,be/X.locationSize*ue*re,fe)}}else if($!==void 0){const xe=$[Y];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(X.location,xe);break;case 3:n.vertexAttrib3fv(X.location,xe);break;case 4:n.vertexAttrib4fv(X.location,xe);break;default:n.vertexAttrib1fv(X.location,xe)}}}}v()}function C(){P();for(const b in i){const I=i[b];for(const G in I){const E=I[G];for(const D in E)h(E[D].object),delete E[D];delete I[G]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;const I=i[b.id];for(const G in I){const E=I[G];for(const D in E)h(E[D].object),delete E[D];delete I[G]}delete i[b.id]}function R(b){for(const I in i){const G=i[I];if(G[b.id]===void 0)continue;const E=G[b.id];for(const D in E)h(E[D].object),delete E[D];delete G[b.id]}}function P(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Yv(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function c(l,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Kv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Xn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===Qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==$i&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==di&&!P)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:C,maxSamples:A}}function Zv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Fs,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:i,y=v*4;let x=f.clippingState||null;c.value=x,x=h(g,d,y,p);for(let C=0;C!==y;++C)x[C]=t[C];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=p;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Jv(n){let e=new WeakMap;function t(o,a){return a===lh?o.mapping=Fr:a===hh&&(o.mapping=Or),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===lh||a===hh)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new l_(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class kc extends Gp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Tr=4,$d=[.125,.215,.35,.446,.526,.582],zs=20,_l=new kc,jd=new Re;let xl=null,vl=0,yl=0,Ml=!1;const Os=(1+Math.sqrt(5))/2,ar=1/Os,qd=[new L(-Os,ar,0),new L(Os,ar,0),new L(-ar,0,Os),new L(ar,0,Os),new L(0,Os,-ar),new L(0,Os,ar),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Yd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){xl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xl,vl,yl),this._renderer.xr.enabled=Ml,e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fr||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Qr,format:Xn,colorSpace:gn,depthBuffer:!1},s=Kd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qv(r)),this._blurMaterial=ey(r,e,t)}return s}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,_l)}_sceneToCubeUV(e,t,i,s){const a=new fn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(jd),h.toneMapping=gs,h.autoClear=!1;const p=new Pn({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new Je(new Zn,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(jd),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):v===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const y=this._cubeSize;xa(s,v*y,f>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Fr||e.mapping===Or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;xa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,_l)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qd[(s-r-1)%qd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Je(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zs-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):zs;m>zs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zs}`);const f=[];let v=0;for(let R=0;R<zs;++R){const P=R/_,w=Math.exp(-P*P/2);f.push(w),R===0?v+=w:R<m&&(v+=2*w)}for(let R=0;R<f.length;R++)f[R]=f[R]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const x=this._sizeLods[s],C=3*x*(s>y-Tr?s-y+Tr:0),A=4*(this._cubeSize-x);xa(t,C,A,3*x,2*x),c.setRenderTarget(t),c.render(u,_l)}}function Qv(n){const e=[],t=[],i=[];let s=n;const r=n-Tr+1+$d.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Tr?c=$d[o-n+Tr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,P=A>2?0:-1,w=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];v.set(w,_*g*A),y.set(d,m*g*A);const b=[A,A,A,A,A,A];x.set(b,f*g*A)}const C=new Jt;C.setAttribute("position",new Kt(v,_)),C.setAttribute("uv",new Kt(y,m)),C.setAttribute("faceIndex",new Kt(x,f)),e.push(C),s>Tr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Kd(n,e,t){const i=new ys(n,e,t);return i.texture.mapping=Lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ey(n,e,t){const i=new Float32Array(zs),s=new L(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Zd(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Jd(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Eu(){return`

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
	`}function ty(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===lh||c===hh,h=c===Fr||c===Or;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Yd(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Yd(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ny(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Eo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function iy(n,e,t,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let y=0,x=v.length;y<x;y+=3){const C=v[y+0],A=v[y+1],R=v[y+2];d.push(C,A,A,R,R,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const C=y+0,A=y+1,R=y+2;d.push(C,A,A,R,R,C)}}else return;const m=new(kp(d)?zp:Bp)(d,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function sy(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*_[v];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ry(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function oy(n,e,t){const i=new WeakMap,s=new ht;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let b=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*A*4*u),P=new Up(R,C,A,u);P.type=di,P.needsUpdate=!0;const w=x*4;for(let I=0;I<u;I++){const G=f[I],E=v[I],D=y[I],z=C*A*4*I;for(let $=0;$<G.count;$++){const Y=$*w;g===!0&&(s.fromBufferAttribute(G,$),R[z+Y+0]=s.x,R[z+Y+1]=s.y,R[z+Y+2]=s.z,R[z+Y+3]=0),_===!0&&(s.fromBufferAttribute(E,$),R[z+Y+4]=s.x,R[z+Y+5]=s.y,R[z+Y+6]=s.z,R[z+Y+7]=0),m===!0&&(s.fromBufferAttribute(D,$),R[z+Y+8]=s.x,R[z+Y+9]=s.y,R[z+Y+10]=s.z,R[z+Y+11]=D.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new Ie(C,A)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function ay(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Au extends Ht{constructor(e,t,i,s,r,o,a,c,l,h=Cr){if(h!==Cr&&h!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Cr&&(i=Ws),i===void 0&&h===Hr&&(i=zr),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=c!==void 0?c:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xp=new Ht,Qd=new Au(1,1),$p=new Up,jp=new j0,qp=new Vp,ef=[],tf=[],nf=new Float32Array(16),sf=new Float32Array(9),rf=new Float32Array(4);function eo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ef[s];if(r===void 0&&(r=new Float32Array(s),ef[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nc(n,e){let t=tf[e];t===void 0&&(t=new Int32Array(e),tf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function hy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function uy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function dy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;rf.set(i),n.uniformMatrix2fv(this.addr,!1,rf),Vt(t,i)}}function fy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;sf.set(i),n.uniformMatrix3fv(this.addr,!1,sf),Vt(t,i)}}function py(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;nf.set(i),n.uniformMatrix4fv(this.addr,!1,nf),Vt(t,i)}}function my(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function _y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function vy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function My(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function by(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function Sy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Qd.compareFunction=Pp,r=Qd):r=Xp,t.setTexture2D(e||r,s)}function wy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jp,s)}function Ty(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||qp,s)}function Ey(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||$p,s)}function Ay(n){switch(n){case 5126:return cy;case 35664:return ly;case 35665:return hy;case 35666:return uy;case 35674:return dy;case 35675:return fy;case 35676:return py;case 5124:case 35670:return my;case 35667:case 35671:return gy;case 35668:case 35672:return _y;case 35669:case 35673:return xy;case 5125:return vy;case 36294:return yy;case 36295:return My;case 36296:return by;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return Ey}}function Ry(n,e){n.uniform1fv(this.addr,e)}function Cy(n,e){const t=eo(e,this.size,2);n.uniform2fv(this.addr,t)}function Iy(n,e){const t=eo(e,this.size,3);n.uniform3fv(this.addr,t)}function Ly(n,e){const t=eo(e,this.size,4);n.uniform4fv(this.addr,t)}function Py(n,e){const t=eo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Dy(n,e){const t=eo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ky(n,e){const t=eo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ny(n,e){n.uniform1iv(this.addr,e)}function Uy(n,e){n.uniform2iv(this.addr,e)}function Fy(n,e){n.uniform3iv(this.addr,e)}function Oy(n,e){n.uniform4iv(this.addr,e)}function By(n,e){n.uniform1uiv(this.addr,e)}function zy(n,e){n.uniform2uiv(this.addr,e)}function Hy(n,e){n.uniform3uiv(this.addr,e)}function Gy(n,e){n.uniform4uiv(this.addr,e)}function Vy(n,e,t){const i=this.cache,s=e.length,r=Nc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Xp,r[o])}function Wy(n,e,t){const i=this.cache,s=e.length,r=Nc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jp,r[o])}function Xy(n,e,t){const i=this.cache,s=e.length,r=Nc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||qp,r[o])}function $y(n,e,t){const i=this.cache,s=e.length,r=Nc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||$p,r[o])}function jy(n){switch(n){case 5126:return Ry;case 35664:return Cy;case 35665:return Iy;case 35666:return Ly;case 35674:return Py;case 35675:return Dy;case 35676:return ky;case 5124:case 35670:return Ny;case 35667:case 35671:return Uy;case 35668:case 35672:return Fy;case 35669:case 35673:return Oy;case 5125:return By;case 36294:return zy;case 36295:return Hy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Vy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return $y}}class qy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ay(t.type)}}class Yy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jy(t.type)}}class Ky{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function of(n,e){n.seq.push(e),n.map[e.id]=e}function Zy(n,e,t){const i=n.name,s=i.length;for(bl.lastIndex=0;;){const r=bl.exec(i),o=bl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){of(t,l===void 0?new qy(a,n,e):new Yy(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Ky(a),of(t,u)),t=u}}}class ja{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Zy(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function af(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Jy=37297;let Qy=0;function eM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const cf=new He;function tM(n){et._getMatrix(cf,et.workingColorSpace,n);const e=`mat3( ${cf.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case Pc:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function lf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+eM(n.getShaderSource(e),o)}else return s}function nM(n,e){const t=tM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function iM(n,e){let t;switch(e){case t0:t="Linear";break;case n0:t="Reinhard";break;case i0:t="Cineon";break;case s0:t="ACESFilmic";break;case o0:t="AgX";break;case a0:t="Neutral";break;case r0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const va=new L;function sM(){et.getLuminanceCoefficients(va);const n=va.x.toFixed(4),e=va.y.toFixed(4),t=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function oM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function aM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ao(n){return n!==""}function hf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(n){return n.replace(cM,hM)}const lM=new Map;function hM(n,e){let t=We[e];if(t===void 0){const i=lM.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bh(t)}const uM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(n){return n.replace(uM,dM)}function dM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ff(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function fM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_p?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function pM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fr:case Or:e="ENVMAP_TYPE_CUBE";break;case Lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Or:e="ENVMAP_MODE_REFRACTION";break}return e}function gM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pu:e="ENVMAP_BLENDING_MULTIPLY";break;case Qg:e="ENVMAP_BLENDING_MIX";break;case e0:e="ENVMAP_BLENDING_ADD";break}return e}function _M(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=fM(t),l=pM(t),h=mM(t),u=gM(t),d=_M(t),p=rM(t),g=oM(r),_=s.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ao).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ao).join(`
`),f.length>0&&(f+=`
`)):(m=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),f=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gs?"#define TONE_MAPPING":"",t.toneMapping!==gs?We.tonemapping_pars_fragment:"",t.toneMapping!==gs?iM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,nM("linearToOutputTexel",t.outputColorSpace),sM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ao).join(`
`)),o=Bh(o),o=hf(o,t),o=uf(o,t),a=Bh(a),a=hf(a,t),a=uf(a,t),o=df(o),a=df(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=v+m+o,x=v+f+a,C=af(s,s.VERTEX_SHADER,y),A=af(s,s.FRAGMENT_SHADER,x);s.attachShader(_,C),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(I){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(_).trim(),E=s.getShaderInfoLog(C).trim(),D=s.getShaderInfoLog(A).trim();let z=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,A);else{const Y=lf(s,C,"vertex"),X=lf(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+Y+`
`+X)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(E===""||D==="")&&($=!1);$&&(I.diagnostics={runnable:z,programLog:G,vertexShader:{log:E,prefix:m},fragmentShader:{log:D,prefix:f}})}s.deleteShader(C),s.deleteShader(A),P=new ja(s,_),w=aM(s,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,Jy)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let vM=0;class yM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new MM(e),t.set(e,i)),i}}class MM{constructor(e){this.id=vM++,this.code=e,this.usedTimes=0}}function bM(n,e,t,i,s,r,o){const a=new Fp,c=new yM,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,b,I,G,E){const D=G.fog,z=E.geometry,$=w.isMeshStandardMaterial?G.environment:null,Y=(w.isMeshStandardMaterial?t:e).get(w.envMap||$),X=Y&&Y.mapping===Lc?Y.image.height:null,ae=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const xe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,be=xe!==void 0?xe.length:0;let $e=0;z.morphAttributes.position!==void 0&&($e=1),z.morphAttributes.normal!==void 0&&($e=2),z.morphAttributes.color!==void 0&&($e=3);let mt,K,re,fe;if(ae){const gt=xi[ae];mt=gt.vertexShader,K=gt.fragmentShader}else mt=w.vertexShader,K=w.fragmentShader,c.update(w),re=c.getVertexShaderID(w),fe=c.getFragmentShaderID(w);const ue=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Pe=E.isInstancedMesh===!0,je=E.isBatchedMesh===!0,wt=!!w.map,Qe=!!w.matcap,Tt=!!Y,F=!!w.aoMap,_n=!!w.lightMap,Ye=!!w.bumpMap,Ke=!!w.normalMap,B=!!w.displacementMap,q=!!w.emissiveMap,he=!!w.metalnessMap,T=!!w.roughnessMap,M=w.anisotropy>0,O=w.clearcoat>0,J=w.dispersion>0,Q=w.iridescence>0,Z=w.sheen>0,Ee=w.transmission>0,pe=M&&!!w.anisotropyMap,ve=O&&!!w.clearcoatMap,nt=O&&!!w.clearcoatNormalMap,se=O&&!!w.clearcoatRoughnessMap,ye=Q&&!!w.iridescenceMap,Le=Q&&!!w.iridescenceThicknessMap,De=Z&&!!w.sheenColorMap,Me=Z&&!!w.sheenRoughnessMap,tt=!!w.specularMap,Ve=!!w.specularColorMap,bt=!!w.specularIntensityMap,k=Ee&&!!w.transmissionMap,de=Ee&&!!w.thicknessMap,j=!!w.gradientMap,ee=!!w.alphaMap,_e=w.alphaTest>0,me=!!w.alphaHash,Be=!!w.extensions;let Lt=gs;w.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Lt=n.toneMapping);const Qt={shaderID:ae,shaderType:w.type,shaderName:w.name,vertexShader:mt,fragmentShader:K,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:fe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:je,batchingColor:je&&E._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&E.instanceColor!==null,instancingMorph:Pe&&E.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:gn,alphaToCoverage:!!w.alphaToCoverage,map:wt,matcap:Qe,envMap:Tt,envMapMode:Tt&&Y.mapping,envMapCubeUVHeight:X,aoMap:F,lightMap:_n,bumpMap:Ye,normalMap:Ke,displacementMap:d&&B,emissiveMap:q,normalMapObjectSpace:Ke&&w.normalMapType===m0,normalMapTangentSpace:Ke&&w.normalMapType===Su,metalnessMap:he,roughnessMap:T,anisotropy:M,anisotropyMap:pe,clearcoat:O,clearcoatMap:ve,clearcoatNormalMap:nt,clearcoatRoughnessMap:se,dispersion:J,iridescence:Q,iridescenceMap:ye,iridescenceThicknessMap:Le,sheen:Z,sheenColorMap:De,sheenRoughnessMap:Me,specularMap:tt,specularColorMap:Ve,specularIntensityMap:bt,transmission:Ee,transmissionMap:k,thicknessMap:de,gradientMap:j,opaque:w.transparent===!1&&w.blending===Rr&&w.alphaToCoverage===!1,alphaMap:ee,alphaTest:_e,alphaHash:me,combine:w.combine,mapUv:wt&&_(w.map.channel),aoMapUv:F&&_(w.aoMap.channel),lightMapUv:_n&&_(w.lightMap.channel),bumpMapUv:Ye&&_(w.bumpMap.channel),normalMapUv:Ke&&_(w.normalMap.channel),displacementMapUv:B&&_(w.displacementMap.channel),emissiveMapUv:q&&_(w.emissiveMap.channel),metalnessMapUv:he&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:pe&&_(w.anisotropyMap.channel),clearcoatMapUv:ve&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:nt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(w.sheenRoughnessMap.channel),specularMapUv:tt&&_(w.specularMap.channel),specularColorMapUv:Ve&&_(w.specularColorMap.channel),specularIntensityMapUv:bt&&_(w.specularIntensityMap.channel),transmissionMapUv:k&&_(w.transmissionMap.channel),thicknessMapUv:de&&_(w.thicknessMap.channel),alphaMapUv:ee&&_(w.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ke||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!z.attributes.uv&&(wt||ee),fog:!!D,useFog:w.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ce,skinning:E.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:$e,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Lt,decodeVideoTexture:wt&&w.map.isVideoTexture===!0&&et.getTransfer(w.map.colorSpace)===xt,decodeVideoTextureEmissive:q&&w.emissiveMap.isVideoTexture===!0&&et.getTransfer(w.emissiveMap.colorSpace)===xt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===vi,flipSided:w.side===Tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Be&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&w.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function f(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)b.push(I),b.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(v(b,w),y(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function v(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function y(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const b=g[w.type];let I;if(b){const G=xi[b];I=r_.clone(G.uniforms)}else I=w.uniforms;return I}function C(w,b){let I;for(let G=0,E=h.length;G<E;G++){const D=h[G];if(D.cacheKey===b){I=D,++I.usedTimes;break}}return I===void 0&&(I=new xM(n,b,w,r),h.push(I)),I}function A(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function R(w){c.remove(w)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:P}}function SM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function wM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,p,g,_,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||wM),i.length>1&&i.sort(d||pf),s.length>1&&s.sort(d||pf)}function h(){for(let u=e,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function TM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new mf,n.set(i,[o])):s>=r.length?(o=new mf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function EM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Re};break;case"SpotLight":t={position:new L,direction:new L,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function AM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let RM=0;function CM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IM(n){const e=new EM,t=AM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const s=new L,r=new Ne,o=new Ne;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,y=0,x=0,C=0,A=0,R=0;l.sort(CM);for(let w=0,b=l.length;w<b;w++){const I=l[w],G=I.color,E=I.intensity,D=I.distance,z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=G.r*E,u+=G.g*E,d+=G.b*E;else if(I.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(I.sh.coefficients[$],E);R++}else if(I.isDirectionalLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Y=I.shadow,X=t.get(I);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=I.shadow.matrix,v++}i.directional[p]=$,p++}else if(I.isSpotLight){const $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(G).multiplyScalar(E),$.distance=D,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,i.spot[_]=$;const Y=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,Y.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[_]=Y.matrix,I.castShadow){const X=t.get(I);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=z,x++}_++}else if(I.isRectAreaLight){const $=e.get(I);$.color.copy(G).multiplyScalar(E),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=$,m++}else if(I.isPointLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const Y=I.shadow,X=t.get(I);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=I.shadow.matrix,y++}i.point[g]=$,g++}else if(I.isHemisphereLight){const $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(E),$.groundColor.copy(I.groundColor).multiplyScalar(E),i.hemi[f]=$,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==C||P.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=C,P.numLightProbes=R,i.version=RM++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,v=l.length;f<v;f++){const y=l[f];if(y.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function gf(n){const e=new IM(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function LM(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new gf(n),e.set(s,[a])):r>=o.length?(a=new gf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class PM extends Kn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=f0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DM extends Kn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NM=`uniform sampler2D shadow_pass;
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
}`;function UM(n,e,t){let i=new Tu;const s=new Ie,r=new Ie,o=new ht,a=new PM({depthPacking:p0}),c=new DM,l={},h=t.maxTextureSize,u={[Xi]:Tn,[Tn]:Xi,[vi]:vi},d=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:kM,fragmentShader:NM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Jt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Je(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_p;let f=this.type;this.render=function(A,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=n.getRenderTarget(),b=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),G=n.state;G.setBlending(ms),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const E=f!==Ni&&this.type===Ni,D=f===Ni&&this.type!==Ni;for(let z=0,$=A.length;z<$;z++){const Y=A[z],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ae=X.getFrameExtents();if(s.multiply(ae),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,X.mapSize.y=r.y)),X.map===null||E===!0||D===!0){const be=this.type!==Ni?{minFilter:$t,magFilter:$t}:{};X.map!==null&&X.map.dispose(),X.map=new ys(s.x,s.y,be),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const xe=X.getViewportCount();for(let be=0;be<xe;be++){const $e=X.getViewport(be);o.set(r.x*$e.x,r.y*$e.y,r.x*$e.z,r.y*$e.w),G.viewport(o),X.updateMatrices(Y,be),i=X.getFrustum(),x(R,P,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Ni&&v(X,P),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,b,I)};function v(A,R){const P=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ys(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,P,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,P,p,_,null)}function y(A,R,P,w){let b=null;const I=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)b=I;else if(b=P.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=b.uuid,E=R.uuid;let D=l[G];D===void 0&&(D={},l[G]=D);let z=D[E];z===void 0&&(z=b.clone(),D[E]=z,R.addEventListener("dispose",C)),b=z}if(b.visible=R.visible,b.wireframe=R.wireframe,w===Ni?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const G=n.properties.get(b);G.light=P}return b}function x(A,R,P,w,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Ni)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const E=e.update(A),D=A.material;if(Array.isArray(D)){const z=E.groups;for(let $=0,Y=z.length;$<Y;$++){const X=z[$],ae=D[X.materialIndex];if(ae&&ae.visible){const xe=y(A,ae,w,b);A.onBeforeShadow(n,A,R,P,E,xe,X),n.renderBufferDirect(P,null,E,xe,A,X),A.onAfterShadow(n,A,R,P,E,xe,X)}}}else if(D.visible){const z=y(A,D,w,b);A.onBeforeShadow(n,A,R,P,E,z,null),n.renderBufferDirect(P,null,E,z,A,null),A.onAfterShadow(n,A,R,P,E,z,null)}}const G=A.children;for(let E=0,D=G.length;E<D;E++)x(G[E],R,P,w,b)}function C(A){A.target.removeEventListener("dispose",C);for(const P in l){const w=l[P],b=A.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const FM={[nh]:ih,[sh]:ah,[rh]:ch,[Ur]:oh,[ih]:nh,[ah]:sh,[ch]:rh,[oh]:Ur};function OM(n,e){function t(){let k=!1;const de=new ht;let j=null;const ee=new ht(0,0,0,0);return{setMask:function(_e){j!==_e&&!k&&(n.colorMask(_e,_e,_e,_e),j=_e)},setLocked:function(_e){k=_e},setClear:function(_e,me,Be,Lt,Qt){Qt===!0&&(_e*=Lt,me*=Lt,Be*=Lt),de.set(_e,me,Be,Lt),ee.equals(de)===!1&&(n.clearColor(_e,me,Be,Lt),ee.copy(de))},reset:function(){k=!1,j=null,ee.set(-1,0,0,0)}}}function i(){let k=!1,de=!1,j=null,ee=null,_e=null;return{setReversed:function(me){if(de!==me){const Be=e.get("EXT_clip_control");de?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const Lt=_e;_e=null,this.setClear(Lt)}de=me},getReversed:function(){return de},setTest:function(me){me?ue(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(me){j!==me&&!k&&(n.depthMask(me),j=me)},setFunc:function(me){if(de&&(me=FM[me]),ee!==me){switch(me){case nh:n.depthFunc(n.NEVER);break;case ih:n.depthFunc(n.ALWAYS);break;case sh:n.depthFunc(n.LESS);break;case Ur:n.depthFunc(n.LEQUAL);break;case rh:n.depthFunc(n.EQUAL);break;case oh:n.depthFunc(n.GEQUAL);break;case ah:n.depthFunc(n.GREATER);break;case ch:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=me}},setLocked:function(me){k=me},setClear:function(me){_e!==me&&(de&&(me=1-me),n.clearDepth(me),_e=me)},reset:function(){k=!1,j=null,ee=null,_e=null,de=!1}}}function s(){let k=!1,de=null,j=null,ee=null,_e=null,me=null,Be=null,Lt=null,Qt=null;return{setTest:function(gt){k||(gt?ue(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(gt){de!==gt&&!k&&(n.stencilMask(gt),de=gt)},setFunc:function(gt,Qn,Ai){(j!==gt||ee!==Qn||_e!==Ai)&&(n.stencilFunc(gt,Qn,Ai),j=gt,ee=Qn,_e=Ai)},setOp:function(gt,Qn,Ai){(me!==gt||Be!==Qn||Lt!==Ai)&&(n.stencilOp(gt,Qn,Ai),me=gt,Be=Qn,Lt=Ai)},setLocked:function(gt){k=gt},setClear:function(gt){Qt!==gt&&(n.clearStencil(gt),Qt=gt)},reset:function(){k=!1,de=null,j=null,ee=null,_e=null,me=null,Be=null,Lt=null,Qt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,y=null,x=null,C=null,A=null,R=new Re(0,0,0),P=0,w=!1,b=null,I=null,G=null,E=null,D=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Y=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=Y>=2);let ae=null,xe={};const be=n.getParameter(n.SCISSOR_BOX),$e=n.getParameter(n.VIEWPORT),mt=new ht().fromArray(be),K=new ht().fromArray($e);function re(k,de,j,ee){const _e=new Uint8Array(4),me=n.createTexture();n.bindTexture(k,me),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<j;Be++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(de+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return me}const fe={};fe[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(Ur),Ye(!1),Ke(vd),ue(n.CULL_FACE),F(ms);function ue(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function Ce(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function Pe(k,de){return u[k]!==de?(n.bindFramebuffer(k,de),u[k]=de,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=de),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=de),!0):!1}function je(k,de){let j=p,ee=!1;if(k){j=d.get(de),j===void 0&&(j=[],d.set(de,j));const _e=k.textures;if(j.length!==_e.length||j[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Be=_e.length;me<Be;me++)j[me]=n.COLOR_ATTACHMENT0+me;j.length=_e.length,ee=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ee=!0);ee&&n.drawBuffers(j)}function wt(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const Qe={[Bs]:n.FUNC_ADD,[Ug]:n.FUNC_SUBTRACT,[Fg]:n.FUNC_REVERSE_SUBTRACT};Qe[Og]=n.MIN,Qe[Bg]=n.MAX;const Tt={[zg]:n.ZERO,[Hg]:n.ONE,[Gg]:n.SRC_COLOR,[eh]:n.SRC_ALPHA,[qg]:n.SRC_ALPHA_SATURATE,[$g]:n.DST_COLOR,[Wg]:n.DST_ALPHA,[Vg]:n.ONE_MINUS_SRC_COLOR,[th]:n.ONE_MINUS_SRC_ALPHA,[jg]:n.ONE_MINUS_DST_COLOR,[Xg]:n.ONE_MINUS_DST_ALPHA,[Yg]:n.CONSTANT_COLOR,[Kg]:n.ONE_MINUS_CONSTANT_COLOR,[Zg]:n.CONSTANT_ALPHA,[Jg]:n.ONE_MINUS_CONSTANT_ALPHA};function F(k,de,j,ee,_e,me,Be,Lt,Qt,gt){if(k===ms){_===!0&&(Ce(n.BLEND),_=!1);return}if(_===!1&&(ue(n.BLEND),_=!0),k!==Ng){if(k!==m||gt!==w){if((f!==Bs||x!==Bs)&&(n.blendEquation(n.FUNC_ADD),f=Bs,x=Bs),gt)switch(k){case Rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lc:n.blendFunc(n.ONE,n.ONE);break;case yd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Md:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case yd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Md:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}v=null,y=null,C=null,A=null,R.set(0,0,0),P=0,m=k,w=gt}return}_e=_e||de,me=me||j,Be=Be||ee,(de!==f||_e!==x)&&(n.blendEquationSeparate(Qe[de],Qe[_e]),f=de,x=_e),(j!==v||ee!==y||me!==C||Be!==A)&&(n.blendFuncSeparate(Tt[j],Tt[ee],Tt[me],Tt[Be]),v=j,y=ee,C=me,A=Be),(Lt.equals(R)===!1||Qt!==P)&&(n.blendColor(Lt.r,Lt.g,Lt.b,Qt),R.copy(Lt),P=Qt),m=k,w=!1}function _n(k,de){k.side===vi?Ce(n.CULL_FACE):ue(n.CULL_FACE);let j=k.side===Tn;de&&(j=!j),Ye(j),k.blending===Rr&&k.transparent===!1?F(ms):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const ee=k.stencilWrite;a.setTest(ee),ee&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),q(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(k){b!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),b=k)}function Ke(k){k!==Dg?(ue(n.CULL_FACE),k!==I&&(k===vd?n.cullFace(n.BACK):k===kg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),I=k}function B(k){k!==G&&($&&n.lineWidth(k),G=k)}function q(k,de,j){k?(ue(n.POLYGON_OFFSET_FILL),(E!==de||D!==j)&&(n.polygonOffset(de,j),E=de,D=j)):Ce(n.POLYGON_OFFSET_FILL)}function he(k){k?ue(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function T(k){k===void 0&&(k=n.TEXTURE0+z-1),ae!==k&&(n.activeTexture(k),ae=k)}function M(k,de,j){j===void 0&&(ae===null?j=n.TEXTURE0+z-1:j=ae);let ee=xe[j];ee===void 0&&(ee={type:void 0,texture:void 0},xe[j]=ee),(ee.type!==k||ee.texture!==de)&&(ae!==j&&(n.activeTexture(j),ae=j),n.bindTexture(k,de||fe[k]),ee.type=k,ee.texture=de)}function O(){const k=xe[ae];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(k){mt.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),mt.copy(k))}function Me(k){K.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),K.copy(k))}function tt(k,de){let j=l.get(de);j===void 0&&(j=new WeakMap,l.set(de,j));let ee=j.get(k);ee===void 0&&(ee=n.getUniformBlockIndex(de,k.name),j.set(k,ee))}function Ve(k,de){const ee=l.get(de).get(k);c.get(de)!==ee&&(n.uniformBlockBinding(de,ee,k.__bindingPointIndex),c.set(de,ee))}function bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ae=null,xe={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,y=null,x=null,C=null,A=null,R=new Re(0,0,0),P=0,w=!1,b=null,I=null,G=null,E=null,D=null,mt.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:Ce,bindFramebuffer:Pe,drawBuffers:je,useProgram:wt,setBlending:F,setMaterial:_n,setFlipSided:Ye,setCullFace:Ke,setLineWidth:B,setPolygonOffset:q,setScissorTest:he,activeTexture:T,bindTexture:M,unbindTexture:O,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:ye,texImage3D:Le,updateUBOMapping:tt,uniformBlockBinding:Ve,texStorage2D:nt,texStorage3D:se,texSubImage2D:Z,texSubImage3D:Ee,compressedTexSubImage2D:pe,compressedTexSubImage3D:ve,scissor:De,viewport:Me,reset:bt}}function _f(n,e,t,i){const s=BM(i);switch(t){case wp:return n*e;case Ep:return n*e;case Ap:return n*e*2;case xu:return n*e/s.components*s.byteLength;case vu:return n*e/s.components*s.byteLength;case Rp:return n*e*2/s.components*s.byteLength;case yu:return n*e*2/s.components*s.byteLength;case Tp:return n*e*3/s.components*s.byteLength;case Xn:return n*e*4/s.components*s.byteLength;case Mu:return n*e*4/s.components*s.byteLength;case Ga:case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dh:case ph:return Math.max(n,16)*Math.max(e,8)/4;case uh:case fh:return Math.max(n,8)*Math.max(e,8)/2;case mh:case gh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _h:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case yh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Th:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $a:case Ph:case Dh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cp:case kh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Nh:case Uh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function BM(n){switch(n){case $i:case Mp:return{byteLength:1,components:1};case Fo:case bp:case Qr:return{byteLength:2,components:1};case gu:case _u:return{byteLength:2,components:4};case Ws:case mu:case di:return{byteLength:4,components:1};case Sp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function zM(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ie,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return p?new OffscreenCanvas(T,M):zo("canvas")}function _(T,M,O){let J=1;const Q=he(T);if((Q.width>O||Q.height>O)&&(J=O/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(J*Q.width),Ee=Math.floor(J*Q.height);u===void 0&&(u=g(Z,Ee));const pe=M?g(Z,Ee):u;return pe.width=Z,pe.height=Ee,pe.getContext("2d").drawImage(T,0,0,Z,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+Ee+")."),pe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){n.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,M,O,J,Q=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=M;if(M===n.RED&&(O===n.FLOAT&&(Z=n.R32F),O===n.HALF_FLOAT&&(Z=n.R16F),O===n.UNSIGNED_BYTE&&(Z=n.R8)),M===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.R8UI),O===n.UNSIGNED_SHORT&&(Z=n.R16UI),O===n.UNSIGNED_INT&&(Z=n.R32UI),O===n.BYTE&&(Z=n.R8I),O===n.SHORT&&(Z=n.R16I),O===n.INT&&(Z=n.R32I)),M===n.RG&&(O===n.FLOAT&&(Z=n.RG32F),O===n.HALF_FLOAT&&(Z=n.RG16F),O===n.UNSIGNED_BYTE&&(Z=n.RG8)),M===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RG8UI),O===n.UNSIGNED_SHORT&&(Z=n.RG16UI),O===n.UNSIGNED_INT&&(Z=n.RG32UI),O===n.BYTE&&(Z=n.RG8I),O===n.SHORT&&(Z=n.RG16I),O===n.INT&&(Z=n.RG32I)),M===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),O===n.UNSIGNED_INT&&(Z=n.RGB32UI),O===n.BYTE&&(Z=n.RGB8I),O===n.SHORT&&(Z=n.RGB16I),O===n.INT&&(Z=n.RGB32I)),M===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),O===n.UNSIGNED_INT&&(Z=n.RGBA32UI),O===n.BYTE&&(Z=n.RGBA8I),O===n.SHORT&&(Z=n.RGBA16I),O===n.INT&&(Z=n.RGBA32I)),M===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),M===n.RGBA){const Ee=Q?Pc:et.getTransfer(J);O===n.FLOAT&&(Z=n.RGBA32F),O===n.HALF_FLOAT&&(Z=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Z=Ee===xt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(T,M){let O;return T?M===null||M===Ws||M===zr?O=n.DEPTH24_STENCIL8:M===di?O=n.DEPTH32F_STENCIL8:M===Fo&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ws||M===zr?O=n.DEPTH_COMPONENT24:M===di?O=n.DEPTH_COMPONENT32F:M===Fo&&(O=n.DEPTH_COMPONENT16),O}function C(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==$t&&T.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){const M=T.target;M.removeEventListener("dispose",A),P(M),M.isVideoTexture&&h.delete(M)}function R(T){const M=T.target;M.removeEventListener("dispose",R),b(M)}function P(T){const M=i.get(T);if(M.__webglInit===void 0)return;const O=T.source,J=d.get(O);if(J){const Q=J[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(T),Object.keys(J).length===0&&d.delete(O)}i.remove(T)}function w(T){const M=i.get(T);n.deleteTexture(M.__webglTexture);const O=T.source,J=d.get(O);delete J[M.__cacheKey],o.memory.textures--}function b(T){const M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let Q=0;Q<M.__webglFramebuffer[J].length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[J][Q]);else n.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)n.deleteFramebuffer(M.__webglFramebuffer[J]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=T.textures;for(let J=0,Q=O.length;J<Q;J++){const Z=i.get(O[J]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(O[J])}i.remove(T)}let I=0;function G(){I=0}function E(){const T=I;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),I+=1,T}function D(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function z(T,M){const O=i.get(T);if(T.isVideoTexture&&B(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(O,T,M);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+M)}function $(T,M){const O=i.get(T);if(T.version>0&&O.__version!==T.version){K(O,T,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+M)}function Y(T,M){const O=i.get(T);if(T.version>0&&O.__version!==T.version){K(O,T,M);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+M)}function X(T,M){const O=i.get(T);if(T.version>0&&O.__version!==T.version){re(O,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+M)}const ae={[Br]:n.REPEAT,[us]:n.CLAMP_TO_EDGE,[hc]:n.MIRRORED_REPEAT},xe={[$t]:n.NEAREST,[yp]:n.NEAREST_MIPMAP_NEAREST,[To]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[Ha]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},be={[g0]:n.NEVER,[b0]:n.ALWAYS,[_0]:n.LESS,[Pp]:n.LEQUAL,[x0]:n.EQUAL,[M0]:n.GEQUAL,[v0]:n.GREATER,[y0]:n.NOTEQUAL};function $e(T,M){if(M.type===di&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ln||M.magFilter===Ha||M.magFilter===To||M.magFilter===Bi||M.minFilter===Ln||M.minFilter===Ha||M.minFilter===To||M.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ae[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ae[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ae[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,xe[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,xe[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,be[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===$t||M.minFilter!==To&&M.minFilter!==Bi||M.type===di&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function mt(T,M){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));const J=M.source;let Q=d.get(J);Q===void 0&&(Q={},d.set(J,Q));const Z=D(M);if(Z!==T.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[Z].usedTimes++;const Ee=Q[T.__cacheKey];Ee!==void 0&&(Q[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(M)),T.__cacheKey=Z,T.__webglTexture=Q[Z].texture}return O}function K(T,M,O){let J=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=n.TEXTURE_3D);const Q=mt(T,M),Z=M.source;t.bindTexture(J,T.__webglTexture,n.TEXTURE0+O);const Ee=i.get(Z);if(Z.version!==Ee.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);const pe=et.getPrimaries(et.workingColorSpace),ve=M.colorSpace===hs?null:et.getPrimaries(M.colorSpace),nt=M.colorSpace===hs||pe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let se=_(M.image,!1,s.maxTextureSize);se=q(M,se);const ye=r.convert(M.format,M.colorSpace),Le=r.convert(M.type);let De=y(M.internalFormat,ye,Le,M.colorSpace,M.isVideoTexture);$e(J,M);let Me;const tt=M.mipmaps,Ve=M.isVideoTexture!==!0,bt=Ee.__version===void 0||Q===!0,k=Z.dataReady,de=C(M,se);if(M.isDepthTexture)De=x(M.format===Hr,M.type),bt&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,De,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,De,se.width,se.height,0,ye,Le,null));else if(M.isDataTexture)if(tt.length>0){Ve&&bt&&t.texStorage2D(n.TEXTURE_2D,de,De,tt[0].width,tt[0].height);for(let j=0,ee=tt.length;j<ee;j++)Me=tt[j],Ve?k&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Me.width,Me.height,ye,Le,Me.data):t.texImage2D(n.TEXTURE_2D,j,De,Me.width,Me.height,0,ye,Le,Me.data);M.generateMipmaps=!1}else Ve?(bt&&t.texStorage2D(n.TEXTURE_2D,de,De,se.width,se.height),k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,ye,Le,se.data)):t.texImage2D(n.TEXTURE_2D,0,De,se.width,se.height,0,ye,Le,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,De,tt[0].width,tt[0].height,se.depth);for(let j=0,ee=tt.length;j<ee;j++)if(Me=tt[j],M.format!==Xn)if(ye!==null)if(Ve){if(k)if(M.layerUpdates.size>0){const _e=_f(Me.width,Me.height,M.format,M.type);for(const me of M.layerUpdates){const Be=Me.data.subarray(me*_e/Me.data.BYTES_PER_ELEMENT,(me+1)*_e/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,me,Me.width,Me.height,1,ye,Be)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Me.width,Me.height,se.depth,ye,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,De,Me.width,Me.height,se.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Me.width,Me.height,se.depth,ye,Le,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,De,Me.width,Me.height,se.depth,0,ye,Le,Me.data)}else{Ve&&bt&&t.texStorage2D(n.TEXTURE_2D,de,De,tt[0].width,tt[0].height);for(let j=0,ee=tt.length;j<ee;j++)Me=tt[j],M.format!==Xn?ye!==null?Ve?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,Me.width,Me.height,ye,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,j,De,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?k&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Me.width,Me.height,ye,Le,Me.data):t.texImage2D(n.TEXTURE_2D,j,De,Me.width,Me.height,0,ye,Le,Me.data)}else if(M.isDataArrayTexture)if(Ve){if(bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,De,se.width,se.height,se.depth),k)if(M.layerUpdates.size>0){const j=_f(se.width,se.height,M.format,M.type);for(const ee of M.layerUpdates){const _e=se.data.subarray(ee*j/se.data.BYTES_PER_ELEMENT,(ee+1)*j/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,ye,Le,_e)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ye,Le,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,se.width,se.height,se.depth,0,ye,Le,se.data);else if(M.isData3DTexture)Ve?(bt&&t.texStorage3D(n.TEXTURE_3D,de,De,se.width,se.height,se.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ye,Le,se.data)):t.texImage3D(n.TEXTURE_3D,0,De,se.width,se.height,se.depth,0,ye,Le,se.data);else if(M.isFramebufferTexture){if(bt)if(Ve)t.texStorage2D(n.TEXTURE_2D,de,De,se.width,se.height);else{let j=se.width,ee=se.height;for(let _e=0;_e<de;_e++)t.texImage2D(n.TEXTURE_2D,_e,De,j,ee,0,ye,Le,null),j>>=1,ee>>=1}}else if(tt.length>0){if(Ve&&bt){const j=he(tt[0]);t.texStorage2D(n.TEXTURE_2D,de,De,j.width,j.height)}for(let j=0,ee=tt.length;j<ee;j++)Me=tt[j],Ve?k&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ye,Le,Me):t.texImage2D(n.TEXTURE_2D,j,De,ye,Le,Me);M.generateMipmaps=!1}else if(Ve){if(bt){const j=he(se);t.texStorage2D(n.TEXTURE_2D,de,De,j.width,j.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Le,se)}else t.texImage2D(n.TEXTURE_2D,0,De,ye,Le,se);m(M)&&f(J),Ee.__version=Z.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function re(T,M,O){if(M.image.length!==6)return;const J=mt(T,M),Q=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+O);const Z=i.get(Q);if(Q.version!==Z.__version||J===!0){t.activeTexture(n.TEXTURE0+O);const Ee=et.getPrimaries(et.workingColorSpace),pe=M.colorSpace===hs?null:et.getPrimaries(M.colorSpace),ve=M.colorSpace===hs||Ee===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const nt=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let ee=0;ee<6;ee++)!nt&&!se?ye[ee]=_(M.image[ee],!0,s.maxCubemapSize):ye[ee]=se?M.image[ee].image:M.image[ee],ye[ee]=q(M,ye[ee]);const Le=ye[0],De=r.convert(M.format,M.colorSpace),Me=r.convert(M.type),tt=y(M.internalFormat,De,Me,M.colorSpace),Ve=M.isVideoTexture!==!0,bt=Z.__version===void 0||J===!0,k=Q.dataReady;let de=C(M,Le);$e(n.TEXTURE_CUBE_MAP,M);let j;if(nt){Ve&&bt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,tt,Le.width,Le.height);for(let ee=0;ee<6;ee++){j=ye[ee].mipmaps;for(let _e=0;_e<j.length;_e++){const me=j[_e];M.format!==Xn?De!==null?Ve?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,me.width,me.height,De,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,tt,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,me.width,me.height,De,Me,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,tt,me.width,me.height,0,De,Me,me.data)}}}else{if(j=M.mipmaps,Ve&&bt){j.length>0&&de++;const ee=he(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,tt,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Ve?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ye[ee].width,ye[ee].height,De,Me,ye[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,tt,ye[ee].width,ye[ee].height,0,De,Me,ye[ee].data);for(let _e=0;_e<j.length;_e++){const Be=j[_e].image[ee].image;Ve?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,Be.width,Be.height,De,Me,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,tt,Be.width,Be.height,0,De,Me,Be.data)}}else{Ve?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,Me,ye[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,tt,De,Me,ye[ee]);for(let _e=0;_e<j.length;_e++){const me=j[_e];Ve?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,De,Me,me.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,tt,De,Me,me.image[ee])}}}m(M)&&f(n.TEXTURE_CUBE_MAP),Z.__version=Q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function fe(T,M,O,J,Q,Z){const Ee=r.convert(O.format,O.colorSpace),pe=r.convert(O.type),ve=y(O.internalFormat,Ee,pe,O.colorSpace),nt=i.get(M),se=i.get(O);if(se.__renderTarget=M,!nt.__hasExternalTextures){const ye=Math.max(1,M.width>>Z),Le=Math.max(1,M.height>>Z);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,Z,ve,ye,Le,M.depth,0,Ee,pe,null):t.texImage2D(Q,Z,ve,ye,Le,0,Ee,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Ke(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Q,se.__webglTexture,0,Ye(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,Q,se.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(T,M,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){const J=M.depthTexture,Q=J&&J.isDepthTexture?J.type:null,Z=x(M.stencilBuffer,Q),Ee=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=Ye(M);Ke(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,Z,M.width,M.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,Z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Z,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,T)}else{const J=M.textures;for(let Q=0;Q<J.length;Q++){const Z=J[Q],Ee=r.convert(Z.format,Z.colorSpace),pe=r.convert(Z.type),ve=y(Z.internalFormat,Ee,pe,Z.colorSpace),nt=Ye(M);O&&Ke(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,ve,M.width,M.height):Ke(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,ve,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ve,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const Q=J.__webglTexture,Z=Ye(M);if(M.depthTexture.format===Cr)Ke(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Hr)Ke(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Pe(T){const M=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=J}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ce(M.__webglFramebuffer,T)}else if(O){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=n.createRenderbuffer(),ue(M.__webglDepthbuffer[J],T,!1);else{const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ue(M.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(T,M,O){const J=i.get(T);M!==void 0&&fe(J.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Pe(T)}function wt(T){const M=T.texture,O=i.get(T),J=i.get(M);T.addEventListener("dispose",R);const Q=T.textures,Z=T.isWebGLCubeRenderTarget===!0,Ee=Q.length>1;if(Ee||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=M.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[pe]=[];for(let ve=0;ve<M.mipmaps.length;ve++)O.__webglFramebuffer[pe][ve]=n.createFramebuffer()}else O.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)O.__webglFramebuffer[pe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let pe=0,ve=Q.length;pe<ve;pe++){const nt=i.get(Q[pe]);nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&Ke(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pe=0;pe<Q.length;pe++){const ve=Q[pe];O.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[pe]);const nt=r.convert(ve.format,ve.colorSpace),se=r.convert(ve.type),ye=y(ve.internalFormat,nt,se,ve.colorSpace,T.isXRRenderTarget===!0),Le=Ye(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ye,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,O.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),$e(n.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)fe(O.__webglFramebuffer[pe][ve],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else fe(O.__webglFramebuffer[pe],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(M)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let pe=0,ve=Q.length;pe<ve;pe++){const nt=Q[pe],se=i.get(nt);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),$e(n.TEXTURE_2D,nt),fe(O.__webglFramebuffer,T,nt,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),m(nt)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,J.__webglTexture),$e(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)fe(O.__webglFramebuffer[ve],T,M,n.COLOR_ATTACHMENT0,pe,ve);else fe(O.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,pe,0);m(M)&&f(pe),t.unbindTexture()}T.depthBuffer&&Pe(T)}function Qe(T){const M=T.textures;for(let O=0,J=M.length;O<J;O++){const Q=M[O];if(m(Q)){const Z=v(T),Ee=i.get(Q).__webglTexture;t.bindTexture(Z,Ee),f(Z),t.unbindTexture()}}}const Tt=[],F=[];function _n(T){if(T.samples>0){if(Ke(T)===!1){const M=T.textures,O=T.width,J=T.height;let Q=n.COLOR_BUFFER_BIT;const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(T),pe=M.length>1;if(pe)for(let ve=0;ve<M.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ve]);const nt=i.get(M[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,nt,0)}n.blitFramebuffer(0,0,O,J,0,0,O,J,Q,n.NEAREST),c===!0&&(Tt.length=0,F.length=0,Tt.push(n.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Tt.push(Z),F.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let ve=0;ve<M.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ve]);const nt=i.get(M[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,nt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ye(T){return Math.min(s.maxSamples,T.samples)}function Ke(T){const M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function B(T){const M=o.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function q(T,M){const O=T.colorSpace,J=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==gn&&O!==hs&&(et.getTransfer(O)===xt?(J!==Xn||Q!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function he(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=E,this.resetTextureUnits=G,this.setTexture2D=z,this.setTexture2DArray=$,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=je,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ke}function HM(n,e){function t(i,s=hs){let r;const o=et.getTransfer(s);if(i===$i)return n.UNSIGNED_BYTE;if(i===gu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_u)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mp)return n.BYTE;if(i===bp)return n.SHORT;if(i===Fo)return n.UNSIGNED_SHORT;if(i===mu)return n.INT;if(i===Ws)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===Qr)return n.HALF_FLOAT;if(i===wp)return n.ALPHA;if(i===Tp)return n.RGB;if(i===Xn)return n.RGBA;if(i===Ep)return n.LUMINANCE;if(i===Ap)return n.LUMINANCE_ALPHA;if(i===Cr)return n.DEPTH_COMPONENT;if(i===Hr)return n.DEPTH_STENCIL;if(i===xu)return n.RED;if(i===vu)return n.RED_INTEGER;if(i===Rp)return n.RG;if(i===yu)return n.RG_INTEGER;if(i===Mu)return n.RGBA_INTEGER;if(i===Ga||i===Va||i===Wa||i===Xa)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uh||i===dh||i===fh||i===ph)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===uh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ph)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mh||i===gh||i===_h)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===mh||i===gh)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_h)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xh||i===vh||i===yh||i===Mh||i===bh||i===Sh||i===wh||i===Th||i===Eh||i===Ah||i===Rh||i===Ch||i===Ih||i===Lh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Th)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ah)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ch)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ih)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$a||i===Ph||i===Dh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===$a)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ph)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cp||i===kh||i===Nh||i===Uh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===$a)return r.COMPRESSED_RED_RGTC1_EXT;if(i===kh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class GM extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oe extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VM={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(VM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Oe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const WM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XM=`
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

}`;class $M{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ht,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ji({vertexShader:WM,fragmentShader:XM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new qi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jM extends $s{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const _=new $M,m=t.getContextAttributes();let f=null,v=null;const y=[],x=[],C=new Ie;let A=null;const R=new fn;R.viewport=new ht;const P=new fn;P.viewport=new ht;const w=[R,P],b=new GM;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=y[K];return re===void 0&&(re=new Sl,y[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=y[K];return re===void 0&&(re=new Sl,y[K]=re),re.getGripSpace()},this.getHand=function(K){let re=y[K];return re===void 0&&(re=new Sl,y[K]=re),re.getHandSpace()};function E(K){const re=x.indexOf(K.inputSource);if(re===-1)return;const fe=y[re];fe!==void 0&&(fe.update(K.inputSource,K.frame,l||o),fe.dispatchEvent({type:K.type,data:K.inputSource}))}function D(){s.removeEventListener("select",E),s.removeEventListener("selectstart",E),s.removeEventListener("selectend",E),s.removeEventListener("squeeze",E),s.removeEventListener("squeezestart",E),s.removeEventListener("squeezeend",E),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",z);for(let K=0;K<y.length;K++){const re=x[K];re!==null&&(x[K]=null,y[K].disconnect(re))}I=null,G=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,s=null,v=null,mt.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",E),s.addEventListener("selectstart",E),s.addEventListener("selectend",E),s.addEventListener("squeeze",E),s.addEventListener("squeezestart",E),s.addEventListener("squeezeend",E),s.addEventListener("end",D),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ys(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,fe=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?Hr:Cr,fe=m.stencil?zr:Ws);const Ce={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ys(d.textureWidth,d.textureHeight,{format:Xn,type:$i,depthTexture:new Au(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),mt.setContext(s),mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(K){for(let re=0;re<K.removed.length;re++){const fe=K.removed[re],ue=x.indexOf(fe);ue>=0&&(x[ue]=null,y[ue].disconnect(fe))}for(let re=0;re<K.added.length;re++){const fe=K.added[re];let ue=x.indexOf(fe);if(ue===-1){for(let Pe=0;Pe<y.length;Pe++)if(Pe>=x.length){x.push(fe),ue=Pe;break}else if(x[Pe]===null){x[Pe]=fe,ue=Pe;break}if(ue===-1)break}const Ce=y[ue];Ce&&Ce.connect(fe)}}const $=new L,Y=new L;function X(K,re,fe){$.setFromMatrixPosition(re.matrixWorld),Y.setFromMatrixPosition(fe.matrixWorld);const ue=$.distanceTo(Y),Ce=re.projectionMatrix.elements,Pe=fe.projectionMatrix.elements,je=Ce[14]/(Ce[10]-1),wt=Ce[14]/(Ce[10]+1),Qe=(Ce[9]+1)/Ce[5],Tt=(Ce[9]-1)/Ce[5],F=(Ce[8]-1)/Ce[0],_n=(Pe[8]+1)/Pe[0],Ye=je*F,Ke=je*_n,B=ue/(-F+_n),q=B*-F;if(re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(q),K.translateZ(B),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ce[10]===-1)K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const he=je+B,T=wt+B,M=Ye-q,O=Ke+(ue-q),J=Qe*wt/T*he,Q=Tt*wt/T*he;K.projectionMatrix.makePerspective(M,O,J,Q,he,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let re=K.near,fe=K.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),b.near=P.near=R.near=re,b.far=P.far=R.far=fe,(I!==b.near||G!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,G=b.far),R.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,b.layers.mask=R.layers.mask|P.layers.mask;const ue=K.parent,Ce=b.cameras;ae(b,ue);for(let Pe=0;Pe<Ce.length;Pe++)ae(Ce[Pe],ue);Ce.length===2?X(b,R,P):b.projectionMatrix.copy(R.projectionMatrix),xe(K,b,ue)};function xe(K,re,fe){fe===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Gr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let be=null;function $e(K,re){if(h=re.getViewerPose(l||o),g=re,h!==null){const fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ue=!1;fe.length!==b.cameras.length&&(b.cameras.length=0,ue=!0);for(let Pe=0;Pe<fe.length;Pe++){const je=fe[Pe];let wt=null;if(p!==null)wt=p.getViewport(je);else{const Tt=u.getViewSubImage(d,je);wt=Tt.viewport,Pe===0&&(e.setRenderTargetTextures(v,Tt.colorTexture,d.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(v))}let Qe=w[Pe];Qe===void 0&&(Qe=new fn,Qe.layers.enable(Pe),Qe.viewport=new ht,w[Pe]=Qe),Qe.matrix.fromArray(je.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(je.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(wt.x,wt.y,wt.width,wt.height),Pe===0&&(b.matrix.copy(Qe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ue===!0&&b.cameras.push(Qe)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Pe=u.getDepthInformation(fe[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,s.renderState)}}for(let fe=0;fe<y.length;fe++){const ue=x[fe],Ce=y[fe];ue!==null&&Ce!==void 0&&Ce.update(ue,re,l||o)}be&&be(K,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const mt=new Wp;mt.setAnimationLoop($e),this.setAnimationLoop=function(K){be=K},this.dispose=function(){}}}const Is=new pi,qM=new Ne;function YM(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Hp(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,v,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Tn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Tn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Is.copy(x),Is.x*=-1,Is.y*=-1,Is.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),m.envMapRotation.value.setFromMatrix4(qM.makeRotationFromEuler(Is)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,v,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Tn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function KM(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function l(v,y){let x=s[v.id];x===void 0&&(g(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(v,C);const A=e.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function h(v){const y=u();v.__bindingPointIndex=y;const x=n.createBuffer(),C=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=s[v.id],x=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,R=x.length;A<R;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,b=P.length;w<b;w++){const I=P[w];if(p(I,A,w,C)===!0){const G=I.__offset,E=Array.isArray(I.value)?I.value:[I.value];let D=0;for(let z=0;z<E.length;z++){const $=E[z],Y=_($);typeof $=="number"||typeof $=="boolean"?(I.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,G+D,I.__data)):$.isMatrix3?(I.__data[0]=$.elements[0],I.__data[1]=$.elements[1],I.__data[2]=$.elements[2],I.__data[3]=0,I.__data[4]=$.elements[3],I.__data[5]=$.elements[4],I.__data[6]=$.elements[5],I.__data[7]=0,I.__data[8]=$.elements[6],I.__data[9]=$.elements[7],I.__data[10]=$.elements[8],I.__data[11]=0):($.toArray(I.__data,D),D+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,y,x,C){const A=v.value,R=y+"_"+x;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const P=C[R];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[R]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(v){const y=v.uniforms;let x=0;const C=16;for(let R=0,P=y.length;R<P;R++){const w=Array.isArray(y[R])?y[R]:[y[R]];for(let b=0,I=w.length;b<I;b++){const G=w[b],E=Array.isArray(G.value)?G.value:[G.value];for(let D=0,z=E.length;D<z;D++){const $=E[D],Y=_($),X=x%C,ae=X%Y.boundary,xe=X+ae;x+=ae,xe!==0&&C-xe<Y.storage&&(x+=C-xe),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=Y.storage}}}const A=x%C;return A>0&&(x+=C-A),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class ZM{constructor(e={}){const{canvas:t=B0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=gs,this.toneMappingExposure=1;const x=this;let C=!1,A=0,R=0,P=null,w=-1,b=null;const I=new ht,G=new ht;let E=null;const D=new Re(0);let z=0,$=t.width,Y=t.height,X=1,ae=null,xe=null;const be=new ht(0,0,$,Y),$e=new ht(0,0,$,Y);let mt=!1;const K=new Tu;let re=!1,fe=!1;const ue=new Ne,Ce=new Ne,Pe=new L,je=new ht,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function Tt(){return P===null?X:1}let F=i;function _n(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fu}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",me,!1),F===null){const N="webgl2";if(F=_n(N,S),F===null)throw _n(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ye,Ke,B,q,he,T,M,O,J,Q,Z,Ee,pe,ve,nt,se,ye,Le,De,Me,tt,Ve,bt,k;function de(){Ye=new ny(F),Ye.init(),Ve=new HM(F,Ye),Ke=new Kv(F,Ye,e,Ve),B=new OM(F,Ye),Ke.reverseDepthBuffer&&d&&B.buffers.depth.setReversed(!0),q=new ry(F),he=new SM,T=new zM(F,Ye,B,he,Ke,Ve,q),M=new Jv(x),O=new ty(x),J=new d_(F),bt=new qv(F,J),Q=new iy(F,J,q,bt),Z=new ay(F,Q,J,q),De=new oy(F,Ke,T),se=new Zv(he),Ee=new bM(x,M,O,Ye,Ke,bt,se),pe=new YM(x,he),ve=new TM,nt=new LM(Ye),Le=new jv(x,M,O,B,Z,p,c),ye=new UM(x,Z,Ke),k=new KM(F,q,Ke,B),Me=new Yv(F,Ye,q),tt=new sy(F,Ye,q),q.programs=Ee.programs,x.capabilities=Ke,x.extensions=Ye,x.properties=he,x.renderLists=ve,x.shadowMap=ye,x.state=B,x.info=q}de();const j=new jM(x,F);this.xr=j,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=Ye.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ye.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize($,Y,!1))},this.getSize=function(S){return S.set($,Y)},this.setSize=function(S,N,V=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,Y=N,t.width=Math.floor(S*X),t.height=Math.floor(N*X),V===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set($*X,Y*X).floor()},this.setDrawingBufferSize=function(S,N,V){$=S,Y=N,X=V,t.width=Math.floor(S*V),t.height=Math.floor(N*V),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(be)},this.setViewport=function(S,N,V,W){S.isVector4?be.set(S.x,S.y,S.z,S.w):be.set(S,N,V,W),B.viewport(I.copy(be).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy($e)},this.setScissor=function(S,N,V,W){S.isVector4?$e.set(S.x,S.y,S.z,S.w):$e.set(S,N,V,W),B.scissor(G.copy($e).multiplyScalar(X).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(S){B.setScissorTest(mt=S)},this.setOpaqueSort=function(S){ae=S},this.setTransparentSort=function(S){xe=S},this.getClearColor=function(S){return S.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(S=!0,N=!0,V=!0){let W=0;if(S){let U=!1;if(P!==null){const oe=P.texture.format;U=oe===Mu||oe===yu||oe===vu}if(U){const oe=P.texture.type,ge=oe===$i||oe===Ws||oe===Fo||oe===zr||oe===gu||oe===_u,Se=Le.getClearColor(),we=Le.getClearAlpha(),Ue=Se.r,ze=Se.g,Te=Se.b;ge?(g[0]=Ue,g[1]=ze,g[2]=Te,g[3]=we,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Ue,_[1]=ze,_[2]=Te,_[3]=we,F.clearBufferiv(F.COLOR,0,_))}else W|=F.COLOR_BUFFER_BIT}N&&(W|=F.DEPTH_BUFFER_BIT),V&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ve.dispose(),nt.dispose(),he.dispose(),M.dispose(),O.dispose(),Z.dispose(),bt.dispose(),k.dispose(),Ee.dispose(),j.dispose(),j.removeEventListener("sessionstart",ud),j.removeEventListener("sessionend",dd),ws.stop()};function ee(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const S=q.autoReset,N=ye.enabled,V=ye.autoUpdate,W=ye.needsUpdate,U=ye.type;de(),q.autoReset=S,ye.enabled=N,ye.autoUpdate=V,ye.needsUpdate=W,ye.type=U}function me(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Be(S){const N=S.target;N.removeEventListener("dispose",Be),Lt(N)}function Lt(S){Qt(S),he.remove(S)}function Qt(S){const N=he.get(S).programs;N!==void 0&&(N.forEach(function(V){Ee.releaseProgram(V)}),S.isShaderMaterial&&Ee.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,V,W,U,oe){N===null&&(N=wt);const ge=U.isMesh&&U.matrixWorld.determinant()<0,Se=Ig(S,N,V,W,U);B.setMaterial(W,ge);let we=V.index,Ue=1;if(W.wireframe===!0){if(we=Q.getWireframeAttribute(V),we===void 0)return;Ue=2}const ze=V.drawRange,Te=V.attributes.position;let ot=ze.start*Ue,St=(ze.start+ze.count)*Ue;oe!==null&&(ot=Math.max(ot,oe.start*Ue),St=Math.min(St,(oe.start+oe.count)*Ue)),we!==null?(ot=Math.max(ot,0),St=Math.min(St,we.count)):Te!=null&&(ot=Math.max(ot,0),St=Math.min(St,Te.count));const Et=St-ot;if(Et<0||Et===1/0)return;bt.setup(U,W,Se,V,we);let xn,ut=Me;if(we!==null&&(xn=J.get(we),ut=tt,ut.setIndex(xn)),U.isMesh)W.wireframe===!0?(B.setLineWidth(W.wireframeLinewidth*Tt()),ut.setMode(F.LINES)):ut.setMode(F.TRIANGLES);else if(U.isLine){let Ae=W.linewidth;Ae===void 0&&(Ae=1),B.setLineWidth(Ae*Tt()),U.isLineSegments?ut.setMode(F.LINES):U.isLineLoop?ut.setMode(F.LINE_LOOP):ut.setMode(F.LINE_STRIP)}else U.isPoints?ut.setMode(F.POINTS):U.isSprite&&ut.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ut.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))ut.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ae=U._multiDrawStarts,Ri=U._multiDrawCounts,dt=U._multiDrawCount,ei=we?J.get(we).bytesPerElement:1,js=he.get(W).currentProgram.getUniforms();for(let An=0;An<dt;An++)js.setValue(F,"_gl_DrawID",An),ut.render(Ae[An]/ei,Ri[An])}else if(U.isInstancedMesh)ut.renderInstances(ot,Et,U.count);else if(V.isInstancedBufferGeometry){const Ae=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ri=Math.min(V.instanceCount,Ae);ut.renderInstances(ot,Et,Ri)}else ut.render(ot,Et)};function gt(S,N,V){S.transparent===!0&&S.side===vi&&S.forceSinglePass===!1?(S.side=Tn,S.needsUpdate=!0,Qo(S,N,V),S.side=Xi,S.needsUpdate=!0,Qo(S,N,V),S.side=vi):Qo(S,N,V)}this.compile=function(S,N,V=null){V===null&&(V=S),f=nt.get(V),f.init(N),y.push(f),V.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),S!==V&&S.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const W=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const oe=U.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){const Se=oe[ge];gt(Se,V,U),W.add(Se)}else gt(oe,V,U),W.add(oe)}),y.pop(),f=null,W},this.compileAsync=function(S,N,V=null){const W=this.compile(S,N,V);return new Promise(U=>{function oe(){if(W.forEach(function(ge){he.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){U(S);return}setTimeout(oe,10)}Ye.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Qn=null;function Ai(S){Qn&&Qn(S)}function ud(){ws.stop()}function dd(){ws.start()}const ws=new Wp;ws.setAnimationLoop(Ai),typeof self<"u"&&ws.setContext(self),this.setAnimationLoop=function(S){Qn=S,j.setAnimationLoop(S),S===null?ws.stop():ws.start()},j.addEventListener("sessionstart",ud),j.addEventListener("sessionend",dd),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(N),N=j.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,N,P),f=nt.get(S,y.length),f.init(N),y.push(f),Ce.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(Ce),fe=this.localClippingEnabled,re=se.init(this.clippingPlanes,fe),m=ve.get(S,v.length),m.init(),v.push(m),j.enabled===!0&&j.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&Yc(oe,N,-1/0,x.sortObjects)}Yc(S,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ae,xe),Qe=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Qe&&Le.addToRenderList(m,S),this.info.render.frame++,re===!0&&se.beginShadows();const V=f.state.shadowsArray;ye.render(V,S,N),re===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,U=m.transmissive;if(f.setupLights(),N.isArrayCamera){const oe=N.cameras;if(U.length>0)for(let ge=0,Se=oe.length;ge<Se;ge++){const we=oe[ge];pd(W,U,S,we)}Qe&&Le.render(S);for(let ge=0,Se=oe.length;ge<Se;ge++){const we=oe[ge];fd(m,S,we,we.viewport)}}else U.length>0&&pd(W,U,S,N),Qe&&Le.render(S),fd(m,S,N);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(x,S,N),bt.resetDefaultState(),w=-1,b=null,y.pop(),y.length>0?(f=y[y.length-1],re===!0&&se.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Yc(S,N,V,W){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){W&&je.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ce);const ge=Z.update(S),Se=S.material;Se.visible&&m.push(S,ge,Se,V,je.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){const ge=Z.update(S),Se=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),je.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),je.copy(ge.boundingSphere.center)),je.applyMatrix4(S.matrixWorld).applyMatrix4(Ce)),Array.isArray(Se)){const we=ge.groups;for(let Ue=0,ze=we.length;Ue<ze;Ue++){const Te=we[Ue],ot=Se[Te.materialIndex];ot&&ot.visible&&m.push(S,ge,ot,V,je.z,Te)}}else Se.visible&&m.push(S,ge,Se,V,je.z,null)}}const oe=S.children;for(let ge=0,Se=oe.length;ge<Se;ge++)Yc(oe[ge],N,V,W)}function fd(S,N,V,W){const U=S.opaque,oe=S.transmissive,ge=S.transparent;f.setupLightsView(V),re===!0&&se.setGlobalState(x.clippingPlanes,V),W&&B.viewport(I.copy(W)),U.length>0&&Jo(U,N,V),oe.length>0&&Jo(oe,N,V),ge.length>0&&Jo(ge,N,V),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function pd(S,N,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new ys(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Qr:$i,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const oe=f.state.transmissionRenderTarget[W.id],ge=W.viewport||I;oe.setSize(ge.z,ge.w);const Se=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(D),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),Qe&&Le.render(V);const we=x.toneMapping;x.toneMapping=gs;const Ue=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),re===!0&&se.setGlobalState(x.clippingPlanes,W),Jo(S,V,W),T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Te=0,ot=N.length;Te<ot;Te++){const St=N[Te],Et=St.object,xn=St.geometry,ut=St.material,Ae=St.group;if(ut.side===vi&&Et.layers.test(W.layers)){const Ri=ut.side;ut.side=Tn,ut.needsUpdate=!0,md(Et,V,W,xn,ut,Ae),ut.side=Ri,ut.needsUpdate=!0,ze=!0}}ze===!0&&(T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe))}x.setRenderTarget(Se),x.setClearColor(D,z),Ue!==void 0&&(W.viewport=Ue),x.toneMapping=we}function Jo(S,N,V){const W=N.isScene===!0?N.overrideMaterial:null;for(let U=0,oe=S.length;U<oe;U++){const ge=S[U],Se=ge.object,we=ge.geometry,Ue=W===null?ge.material:W,ze=ge.group;Se.layers.test(V.layers)&&md(Se,N,V,we,Ue,ze)}}function md(S,N,V,W,U,oe){S.onBeforeRender(x,N,V,W,U,oe),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(x,N,V,W,S,oe),U.transparent===!0&&U.side===vi&&U.forceSinglePass===!1?(U.side=Tn,U.needsUpdate=!0,x.renderBufferDirect(V,N,W,U,S,oe),U.side=Xi,U.needsUpdate=!0,x.renderBufferDirect(V,N,W,U,S,oe),U.side=vi):x.renderBufferDirect(V,N,W,U,S,oe),S.onAfterRender(x,N,V,W,U,oe)}function Qo(S,N,V){N.isScene!==!0&&(N=wt);const W=he.get(S),U=f.state.lights,oe=f.state.shadowsArray,ge=U.state.version,Se=Ee.getParameters(S,U.state,oe,N,V),we=Ee.getProgramCacheKey(Se);let Ue=W.programs;W.environment=S.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(S.isMeshStandardMaterial?O:M).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ue===void 0&&(S.addEventListener("dispose",Be),Ue=new Map,W.programs=Ue);let ze=Ue.get(we);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===ge)return _d(S,Se),ze}else Se.uniforms=Ee.getUniforms(S),S.onBeforeCompile(Se,x),ze=Ee.acquireProgram(Se,we),Ue.set(we,ze),W.uniforms=Se.uniforms;const Te=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Te.clippingPlanes=se.uniform),_d(S,Se),W.needsLights=Pg(S),W.lightsStateVersion=ge,W.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function gd(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=ja.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function _d(S,N){const V=he.get(S);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Ig(S,N,V,W,U){N.isScene!==!0&&(N=wt),T.resetTextureUnits();const oe=N.fog,ge=W.isMeshStandardMaterial?N.environment:null,Se=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:gn,we=(W.isMeshStandardMaterial?O:M).get(W.envMap||ge),Ue=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!V.morphAttributes.position,ot=!!V.morphAttributes.normal,St=!!V.morphAttributes.color;let Et=gs;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Et=x.toneMapping);const xn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ut=xn!==void 0?xn.length:0,Ae=he.get(W),Ri=f.state.lights;if(re===!0&&(fe===!0||S!==b)){const Bn=S===b&&W.id===w;se.setState(W,S,Bn)}let dt=!1;W.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ri.state.version||Ae.outputColorSpace!==Se||U.isBatchedMesh&&Ae.batching===!1||!U.isBatchedMesh&&Ae.batching===!0||U.isBatchedMesh&&Ae.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ae.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ae.instancing===!1||!U.isInstancedMesh&&Ae.instancing===!0||U.isSkinnedMesh&&Ae.skinning===!1||!U.isSkinnedMesh&&Ae.skinning===!0||U.isInstancedMesh&&Ae.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ae.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ae.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ae.instancingMorph===!1&&U.morphTexture!==null||Ae.envMap!==we||W.fog===!0&&Ae.fog!==oe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==se.numPlanes||Ae.numIntersection!==se.numIntersection)||Ae.vertexAlphas!==Ue||Ae.vertexTangents!==ze||Ae.morphTargets!==Te||Ae.morphNormals!==ot||Ae.morphColors!==St||Ae.toneMapping!==Et||Ae.morphTargetsCount!==ut)&&(dt=!0):(dt=!0,Ae.__version=W.version);let ei=Ae.currentProgram;dt===!0&&(ei=Qo(W,N,U));let js=!1,An=!1,lo=!1;const At=ei.getUniforms(),gi=Ae.uniforms;if(B.useProgram(ei.program)&&(js=!0,An=!0,lo=!0),W.id!==w&&(w=W.id,An=!0),js||b!==S){B.buffers.depth.getReversed()?(ue.copy(S.projectionMatrix),H0(ue),G0(ue),At.setValue(F,"projectionMatrix",ue)):At.setValue(F,"projectionMatrix",S.projectionMatrix),At.setValue(F,"viewMatrix",S.matrixWorldInverse);const Zi=At.map.cameraPosition;Zi!==void 0&&Zi.setValue(F,Pe.setFromMatrixPosition(S.matrixWorld)),Ke.logarithmicDepthBuffer&&At.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&At.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,An=!0,lo=!0)}if(U.isSkinnedMesh){At.setOptional(F,U,"bindMatrix"),At.setOptional(F,U,"bindMatrixInverse");const Bn=U.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),At.setValue(F,"boneTexture",Bn.boneTexture,T))}U.isBatchedMesh&&(At.setOptional(F,U,"batchingTexture"),At.setValue(F,"batchingTexture",U._matricesTexture,T),At.setOptional(F,U,"batchingIdTexture"),At.setValue(F,"batchingIdTexture",U._indirectTexture,T),At.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&At.setValue(F,"batchingColorTexture",U._colorsTexture,T));const ho=V.morphAttributes;if((ho.position!==void 0||ho.normal!==void 0||ho.color!==void 0)&&De.update(U,V,ei),(An||Ae.receiveShadow!==U.receiveShadow)&&(Ae.receiveShadow=U.receiveShadow,At.setValue(F,"receiveShadow",U.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(gi.envMap.value=we,gi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(gi.envMapIntensity.value=N.environmentIntensity),An&&(At.setValue(F,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&Lg(gi,lo),oe&&W.fog===!0&&pe.refreshFogUniforms(gi,oe),pe.refreshMaterialUniforms(gi,W,X,Y,f.state.transmissionRenderTarget[S.id]),ja.upload(F,gd(Ae),gi,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ja.upload(F,gd(Ae),gi,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&At.setValue(F,"center",U.center),At.setValue(F,"modelViewMatrix",U.modelViewMatrix),At.setValue(F,"normalMatrix",U.normalMatrix),At.setValue(F,"modelMatrix",U.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Bn=W.uniformsGroups;for(let Zi=0,Ji=Bn.length;Zi<Ji;Zi++){const xd=Bn[Zi];k.update(xd,ei),k.bind(xd,ei)}}return ei}function Lg(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Pg(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,N,V){he.get(S.texture).__webglTexture=N,he.get(S.depthTexture).__webglTexture=V;const W=he.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){const V=he.get(S);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,V=0){P=S,A=N,R=V;let W=!0,U=null,oe=!1,ge=!1;if(S){const we=he.get(S);if(we.__useDefaultFramebuffer!==void 0)B.bindFramebuffer(F.FRAMEBUFFER,null),W=!1;else if(we.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(we.__hasExternalTextures)T.rebindTextures(S,he.get(S.texture).__webglTexture,he.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Te=S.depthTexture;if(we.__boundDepthTexture!==Te){if(Te!==null&&he.has(Te)&&(S.width!==Te.image.width||S.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Ue=S.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ge=!0);const ze=he.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ze[N])?U=ze[N][V]:U=ze[N],oe=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?U=he.get(S).__webglMultisampledFramebuffer:Array.isArray(ze)?U=ze[V]:U=ze,I.copy(S.viewport),G.copy(S.scissor),E=S.scissorTest}else I.copy(be).multiplyScalar(X).floor(),G.copy($e).multiplyScalar(X).floor(),E=mt;if(B.bindFramebuffer(F.FRAMEBUFFER,U)&&W&&B.drawBuffers(S,U),B.viewport(I),B.scissor(G),B.setScissorTest(E),oe){const we=he.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,V)}else if(ge){const we=he.get(S.texture),Ue=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.__webglTexture,V||0,Ue)}w=-1},this.readRenderTargetPixels=function(S,N,V,W,U,oe,ge){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=he.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){B.bindFramebuffer(F.FRAMEBUFFER,Se);try{const we=S.texture,Ue=we.format,ze=we.type;if(!Ke.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-W&&V>=0&&V<=S.height-U&&F.readPixels(N,V,W,U,Ve.convert(Ue),Ve.convert(ze),oe)}finally{const we=P!==null?he.get(P).__webglFramebuffer:null;B.bindFramebuffer(F.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(S,N,V,W,U,oe,ge){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=he.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){const we=S.texture,Ue=we.format,ze=we.type;if(!Ke.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-W&&V>=0&&V<=S.height-U){B.bindFramebuffer(F.FRAMEBUFFER,Se);const Te=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Te),F.bufferData(F.PIXEL_PACK_BUFFER,oe.byteLength,F.STREAM_READ),F.readPixels(N,V,W,U,Ve.convert(Ue),Ve.convert(ze),0);const ot=P!==null?he.get(P).__webglFramebuffer:null;B.bindFramebuffer(F.FRAMEBUFFER,ot);const St=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await z0(F,St,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Te),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,oe),F.deleteBuffer(Te),F.deleteSync(St),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,V=0){S.isTexture!==!0&&(Eo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);const W=Math.pow(2,-V),U=Math.floor(S.image.width*W),oe=Math.floor(S.image.height*W),ge=N!==null?N.x:0,Se=N!==null?N.y:0;T.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,ge,Se,U,oe),B.unbindTexture()},this.copyTextureToTexture=function(S,N,V=null,W=null,U=0){S.isTexture!==!0&&(Eo("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,S=arguments[1],N=arguments[2],U=arguments[3]||0,V=null);let oe,ge,Se,we,Ue,ze,Te,ot,St;const Et=S.isCompressedTexture?S.mipmaps[U]:S.image;V!==null?(oe=V.max.x-V.min.x,ge=V.max.y-V.min.y,Se=V.isBox3?V.max.z-V.min.z:1,we=V.min.x,Ue=V.min.y,ze=V.isBox3?V.min.z:0):(oe=Et.width,ge=Et.height,Se=Et.depth||1,we=0,Ue=0,ze=0),W!==null?(Te=W.x,ot=W.y,St=W.z):(Te=0,ot=0,St=0);const xn=Ve.convert(N.format),ut=Ve.convert(N.type);let Ae;N.isData3DTexture?(T.setTexture3D(N,0),Ae=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Ae=F.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Ae=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const Ri=F.getParameter(F.UNPACK_ROW_LENGTH),dt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ei=F.getParameter(F.UNPACK_SKIP_PIXELS),js=F.getParameter(F.UNPACK_SKIP_ROWS),An=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Et.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,we),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ue),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ze);const lo=S.isDataArrayTexture||S.isData3DTexture,At=N.isDataArrayTexture||N.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const gi=he.get(S),ho=he.get(N),Bn=he.get(gi.__renderTarget),Zi=he.get(ho.__renderTarget);B.bindFramebuffer(F.READ_FRAMEBUFFER,Bn.__webglFramebuffer),B.bindFramebuffer(F.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let Ji=0;Ji<Se;Ji++)lo&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,he.get(S).__webglTexture,U,ze+Ji),S.isDepthTexture?(At&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,he.get(N).__webglTexture,U,St+Ji),F.blitFramebuffer(we,Ue,oe,ge,Te,ot,oe,ge,F.DEPTH_BUFFER_BIT,F.NEAREST)):At?F.copyTexSubImage3D(Ae,U,Te,ot,St+Ji,we,Ue,oe,ge):F.copyTexSubImage2D(Ae,U,Te,ot,St+Ji,we,Ue,oe,ge);B.bindFramebuffer(F.READ_FRAMEBUFFER,null),B.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else At?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Ae,U,Te,ot,St,oe,ge,Se,xn,ut,Et.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Ae,U,Te,ot,St,oe,ge,Se,xn,Et.data):F.texSubImage3D(Ae,U,Te,ot,St,oe,ge,Se,xn,ut,Et):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,Te,ot,oe,ge,xn,ut,Et.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,Te,ot,Et.width,Et.height,xn,Et.data):F.texSubImage2D(F.TEXTURE_2D,U,Te,ot,oe,ge,xn,ut,Et);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ri),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,dt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ei),F.pixelStorei(F.UNPACK_SKIP_ROWS,js),F.pixelStorei(F.UNPACK_SKIP_IMAGES,An),U===0&&N.generateMipmaps&&F.generateMipmap(Ae),B.unbindTexture()},this.copyTextureToTexture3D=function(S,N,V=null,W=null,U=0){return S.isTexture!==!0&&(Eo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,S=arguments[2],N=arguments[3],U=arguments[4]||0),Eo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,N,V,W,U)},this.initRenderTarget=function(S){he.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),B.unbindTexture()},this.resetState=function(){A=0,R=0,P=null,B.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}class Ru{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=i}clone(){return new Ru(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yp extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Kp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oh,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new L;class Ho{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ho(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cu extends Kn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let cr;const go=new L,lr=new L,hr=new L,ur=new Ie,_o=new Ie,Zp=new Ne,ya=new L,xo=new L,Ma=new L,xf=new Ie,wl=new Ie,vf=new Ie;class Jp extends Ct{constructor(e=new Cu){if(super(),this.isSprite=!0,this.type="Sprite",cr===void 0){cr=new Jt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Kp(t,5);cr.setIndex([0,1,2,0,2,3]),cr.setAttribute("position",new Ho(i,3,0,!1)),cr.setAttribute("uv",new Ho(i,2,3,!1))}this.geometry=cr,this.material=e,this.center=new Ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lr.setFromMatrixScale(this.matrixWorld),Zp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lr.multiplyScalar(-hr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;ba(ya.set(-.5,-.5,0),hr,o,lr,s,r),ba(xo.set(.5,-.5,0),hr,o,lr,s,r),ba(Ma.set(.5,.5,0),hr,o,lr,s,r),xf.set(0,0),wl.set(1,0),vf.set(1,1);let a=e.ray.intersectTriangle(ya,xo,Ma,!1,go);if(a===null&&(ba(xo.set(-.5,.5,0),hr,o,lr,s,r),wl.set(0,1),a=e.ray.intersectTriangle(ya,Ma,xo,!1,go),a===null))return;const c=e.ray.origin.distanceTo(go);c<e.near||c>e.far||t.push({distance:c,point:go.clone(),uv:Wn.getInterpolation(go,ya,xo,Ma,xf,wl,vf,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ba(n,e,t,i,s,r){ur.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(_o.x=r*ur.x-s*ur.y,_o.y=s*ur.x+r*ur.y):_o.copy(ur),n.copy(e),n.x+=_o.x,n.y+=_o.y,n.applyMatrix4(Zp)}const yf=new L,Mf=new ht,bf=new ht,JM=new L,Sf=new Ne,Sa=new L,Tl=new wi,wf=new Ne,El=new Dc;class QM extends Je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bd,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Sa),this.boundingBox.expandByPoint(Sa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Sa),this.boundingSphere.expandByPoint(Sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(s),e.ray.intersectsSphere(Tl)!==!1&&(wf.copy(s).invert(),El.copy(e.ray).applyMatrix4(wf),!(this.boundingBox!==null&&El.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,El)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===c0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Mf.fromBufferAttribute(s.attributes.skinIndex,e),bf.fromBufferAttribute(s.attributes.skinWeight,e),yf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=bf.getComponent(r);if(o!==0){const a=Mf.getComponent(r);Sf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(JM.copy(yf).applyMatrix4(Sf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Qp extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class em extends Ht{constructor(e=null,t=1,i=1,s,r,o,a,c,l=$t,h=$t,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tf=new Ne,eb=new Ne;class Iu{constructor(e=[],t=[]){this.uuid=fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ne;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:eb;Tf.multiplyMatrices(a,t[r]),Tf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Iu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new em(t,e,e,Xn,di);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Qp),this.bones.push(o),this.boneInverses.push(new Ne().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class zh extends Kt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const dr=new Ne,Ef=new Ne,wa=[],Af=new mi,tb=new Ne,vo=new Je,yo=new wi;class Uc extends Je{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,tb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,dr),Af.copy(e.boundingBox).applyMatrix4(dr),this.boundingBox.union(Af)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,dr),yo.copy(e.boundingSphere).applyMatrix4(dr),this.boundingSphere.union(yo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(i),e.ray.intersectsSphere(yo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,dr),Ef.multiplyMatrices(i,dr),vo.matrixWorld=Ef,vo.raycast(e,wa);for(let o=0,a=wa.length;o<a;o++){const c=wa[o];c.instanceId=r,c.object=this,t.push(c)}wa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new em(new Float32Array(s*this.count),s,this.count,xu,di));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class tm extends Kn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fc=new L,pc=new L,Rf=new Ne,Mo=new Dc,Ta=new wi,Al=new L,Cf=new L;class Lu extends Ct{constructor(e=new Jt,t=new tm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)fc.fromBufferAttribute(t,s-1),pc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=fc.distanceTo(pc);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;Rf.copy(s).invert(),Mo.copy(e.ray).applyMatrix4(Rf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),v=h.getX(_+1),y=Ea(this,e,Mo,c,f,v);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=Ea(this,e,Mo,c,_,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=Ea(this,e,Mo,c,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=Ea(this,e,Mo,c,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ea(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(fc.fromBufferAttribute(o,s),pc.fromBufferAttribute(o,r),t.distanceSqToSegment(fc,pc,Al,Cf)>i)return;Al.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Al);if(!(c<e.near||c>e.far))return{distance:c,point:Cf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const If=new L,Lf=new L;class nb extends Lu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)If.fromBufferAttribute(t,s),Lf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+If.distanceTo(Lf);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ib extends Lu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class nm extends Kn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pf=new Ne,Hh=new Dc,Aa=new wi,Ra=new L;class sb extends Ct{constructor(e=new Jt,t=new nm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;Pf.copy(s).invert(),Hh.copy(e.ray).applyMatrix4(Pf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);Ra.fromBufferAttribute(u,m),Df(Ra,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Ra.fromBufferAttribute(u,g),Df(Ra,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Df(n,e,t,i,s,r,o){const a=Hh.distanceSqToPoint(n);if(a<t){const c=new L;Hh.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Fc extends Ht{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wr extends Jt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new L,h=new Ie;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=i+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new It(o,3)),this.setAttribute("normal",new It(a,3)),this.setAttribute("uv",new It(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yi extends Jt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=i/2;let f=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(p,2));function v(){const x=new L,C=new L;let A=0;const R=(t-e)/i;for(let P=0;P<=r;P++){const w=[],b=P/r,I=b*(t-e)+e;for(let G=0;G<=s;G++){const E=G/s,D=E*c+a,z=Math.sin(D),$=Math.cos(D);C.x=I*z,C.y=-b*i+m,C.z=I*$,u.push(C.x,C.y,C.z),x.set(z,R,$).normalize(),d.push(x.x,x.y,x.z),p.push(E,1-b),w.push(g++)}_.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){const b=_[w][P],I=_[w+1][P],G=_[w+1][P+1],E=_[w][P+1];(e>0||w!==0)&&(h.push(b,I,E),A+=3),(t>0||w!==r-1)&&(h.push(I,G,E),A+=3)}l.addGroup(f,A,0),f+=A}function y(x){const C=g,A=new Ie,R=new L;let P=0;const w=x===!0?e:t,b=x===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),g++;const I=g;for(let G=0;G<=s;G++){const D=G/s*c+a,z=Math.cos(D),$=Math.sin(D);R.x=w*$,R.y=m*b,R.z=w*z,u.push(R.x,R.y,R.z),d.push(0,b,0),A.x=z*.5+.5,A.y=$*.5*b+.5,p.push(A.x,A.y),g++}for(let G=0;G<s;G++){const E=C+G,D=I+G;x===!0?h.push(D,D+1,E):h.push(D+1,D,E),P+=3}l.addGroup(f,P,x===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pu extends Jt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new It(r,3)),this.setAttribute("normal",new It(r.slice(),3)),this.setAttribute("uv",new It(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new L,x=new L,C=new L;for(let A=0;A<t.length;A+=3)p(t[A+0],y),p(t[A+1],x),p(t[A+2],C),c(y,x,C,v)}function c(v,y,x,C){const A=C+1,R=[];for(let P=0;P<=A;P++){R[P]=[];const w=v.clone().lerp(x,P/A),b=y.clone().lerp(x,P/A),I=A-P;for(let G=0;G<=I;G++)G===0&&P===A?R[P][G]=w:R[P][G]=w.clone().lerp(b,G/I)}for(let P=0;P<A;P++)for(let w=0;w<2*(A-P)-1;w++){const b=Math.floor(w/2);w%2===0?(d(R[P][b+1]),d(R[P+1][b]),d(R[P][b])):(d(R[P][b+1]),d(R[P+1][b+1]),d(R[P+1][b]))}}function l(v){const y=new L;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const v=new L;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=m(v)/2/Math.PI+.5,C=f(v)/Math.PI+.5;o.push(x,1-C)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],C=o[v+4],A=Math.max(y,x,C),R=Math.min(y,x,C);A>.9&&R<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const v=new L,y=new L,x=new L,C=new L,A=new Ie,R=new Ie,P=new Ie;for(let w=0,b=0;w<r.length;w+=9,b+=6){v.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),A.set(o[b+0],o[b+1]),R.set(o[b+2],o[b+3]),P.set(o[b+4],o[b+5]),C.copy(v).add(y).add(x).divideScalar(3);const I=m(C);_(A,b+0,v,I),_(R,b+2,y,I),_(P,b+4,x,I)}}function _(v,y,x,C){C<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pu(e.vertices,e.indices,e.radius,e.details)}}class mc extends Pu{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mc(e.radius,e.detail)}}class Du extends Jt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/s,p=new L,g=new Ie;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const f=r+m/i*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(i+1);for(let f=0;f<i;f++){const v=f+m,y=v,x=v+i+1,C=v+i+2,A=v+1;a.push(y,x,A),a.push(x,C,A)}}this.setIndex(a),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(l,3)),this.setAttribute("uv",new It(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ku extends Jt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new L,u=new L,d=new L;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,v=(s+1)*p+g;o.push(_,m,v),o.push(m,f,v)}this.setIndex(o),this.setAttribute("position",new It(a,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ku(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Nu extends Kn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ti extends Nu{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Jn extends Kn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ca(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function rb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ob(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function kf(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function im(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class jo{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ab extends jo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sr,endingEnd:Sr}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wr:r=e,a=2*t-i;break;case uc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case wr:o=e,c=2*i-t;break;case uc:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}const l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+v*o[l+C]+y*o[c+C]+x*o[u+C];return r}}class sm extends jo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class cb extends jo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ei{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ca(t,this.TimeBufferType),this.values=Ca(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ca(e.times,Array),values:Ca(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ab(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oo:t=this.InterpolantFactoryMethodDiscrete;break;case Bo:t=this.InterpolantFactoryMethodLinear;break;case Kc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oo;case this.InterpolantFactoryMethodLinear:return Bo;case this.InterpolantFactoryMethodSmooth:return Kc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&rb(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Kc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=Bo;class to extends Ei{constructor(e,t,i){super(e,t,i)}}to.prototype.ValueTypeName="bool";to.prototype.ValueBufferType=Array;to.prototype.DefaultInterpolation=Oo;to.prototype.InterpolantFactoryMethodLinear=void 0;to.prototype.InterpolantFactoryMethodSmooth=void 0;class rm extends Ei{}rm.prototype.ValueTypeName="color";class Xr extends Ei{}Xr.prototype.ValueTypeName="number";class lb extends jo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Nn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class $r extends Ei{InterpolantFactoryMethodLinear(e){return new lb(this.times,this.values,this.getValueSize(),e)}}$r.prototype.ValueTypeName="quaternion";$r.prototype.InterpolantFactoryMethodSmooth=void 0;class no extends Ei{constructor(e,t,i){super(e,t,i)}}no.prototype.ValueTypeName="string";no.prototype.ValueBufferType=Array;no.prototype.DefaultInterpolation=Oo;no.prototype.InterpolantFactoryMethodLinear=void 0;no.prototype.InterpolantFactoryMethodSmooth=void 0;class jr extends Ei{}jr.prototype.ValueTypeName="vector";class Gh{constructor(e="",t=-1,i=[],s=bu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=fi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(ub(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Ei.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=ob(c);c=kf(c,1,h),l=kf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Xr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,p,g,_){if(p.length!==0){const m=[],f=[];im(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let v=0;v!==d[g].morphTargets.length;++v){const y=d[g];m.push(y.time),f.push(y.morphTarget===_?1:0)}s.push(new Xr(".morphTargetInfluence["+_+"]",m,f))}c=p.length*o}else{const p=".bones["+t[u].name+"]";i(jr,p+".position",d,"pos",s),i($r,p+".quaternion",d,"rot",s),i(jr,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function hb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xr;case"vector":case"vector2":case"vector3":case"vector4":return jr;case"color":return rm;case"quaternion":return $r;case"bool":case"boolean":return to;case"string":return no}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function ub(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=hb(n.type);if(n.times===void 0){const t=[],i=[];im(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ds={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class db{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const fb=new db;class io{constructor(e){this.manager=e!==void 0?e:fb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}io.DEFAULT_MATERIAL_NAME="__DEFAULT";const ki={};class pb extends Error{constructor(e,t){super(e),this.response=t}}class om extends io{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ds.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:i,onError:s});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ki[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){v();function v(){u.read().then(({done:y,value:x})=>{if(y)f.close();else{_+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let A=0,R=h.length;A<R;A++){const P=h[A];P.onProgress&&P.onProgress(C)}f.enqueue(x),v()}},y=>{f.error(y)})}}});return new Response(m)}else throw new pb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{ds.add(e,l);const h=ki[e];delete ki[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=ki[e];if(h===void 0)throw this.manager.itemError(e),l;delete ki[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class mb extends io{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ds.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=zo("img");function c(){h(),ds.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class gb extends io{constructor(e){super(e)}load(e,t,i,s){const r=new Ht,o=new mb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Oc extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class _b extends Oc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Rl=new Ne,Nf=new L,Uf=new L;class Uu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tu,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nf),Uf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uf),t.updateMatrixWorld(),Rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xb extends Uu{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Gr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class vb extends Oc{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ff=new Ne,bo=new L,Cl=new L;class yb extends Uu{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),bo.setFromMatrixPosition(e.matrixWorld),i.position.copy(bo),Cl.copy(i.position),Cl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Cl),i.updateMatrixWorld(),s.makeTranslation(-bo.x,-bo.y,-bo.z),Ff.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ff)}}class am extends Oc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new yb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mb extends Uu{constructor(){super(new kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cm extends Oc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Mb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Do{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class bb extends io{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ds.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ds.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ds.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ds.add(e,c),r.manager.itemStart(e)}}class Sb{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)i[r+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(i,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){a.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,o=s;r!==o;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[i+o]}_slerp(e,t,i,s){Nn.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){const o=this._workIndex*r;Nn.multiplyQuaternionsFlat(e,o,e,t,e,i),Nn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,i,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[i+a]*s}}_lerpAdditive(e,t,i,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[i+o]*s}}}const Fu="\\[\\]\\.:\\/",wb=new RegExp("["+Fu+"]","g"),Ou="[^"+Fu+"]",Tb="[^"+Fu.replace("\\.","")+"]",Eb=/((?:WC+[\/:])*)/.source.replace("WC",Ou),Ab=/(WCOD+)?/.source.replace("WCOD",Tb),Rb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ou),Cb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ou),Ib=new RegExp("^"+Eb+Ab+Rb+Cb+"$"),Lb=["material","materials","bones","map"];class Pb{constructor(e,t,i){const s=i||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class pt{constructor(e,t,i){this.path=t,this.parsedPath=i||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,i):new pt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wb,"")}static parseTrackName(e){const t=Ib.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Lb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=Pb;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Db{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Sr,endingEnd:Sr};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=l0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+i,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*i;c<0||i===0?t=0:(this._startTime=null,t=i*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case u0:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case bu:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,r=this._loopCount;const o=i===h0;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(i===Ip){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=wr,s.endingEnd=wr):(e?s.endingStart=this.zeroSlopeAtStart?wr:Sr:s.endingStart=uc,t?s.endingEnd=this.zeroSlopeAtEnd?wr:Sr:s.endingEnd=uc)}_scheduleFading(e,t,i){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=i,this}}const kb=new Float32Array(1);class Nb extends $s{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=s[u],p=d.name;let g=h[p];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new Sb(pt.create(i,p,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new sm(new Float32Array(2),new Float32Array(2),1,kb),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?Gh.findByName(s,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=bu),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new Db(this,o,t,i);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){const i=t||this._root,s=i.uuid,r=typeof e=="string"?Gh.findByName(i,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(s,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fu);function so(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e>>>0}function Bu(n){const e=n+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),[((t^t>>>14)>>>0)/4294967296,e]}function Bc(n){let e=n>>>0;return()=>{const[t,i]=Bu(e);return e=i,t}}const Vh=["office","tourist","oldlady","party","jogger","rich"],rs=(n,e)=>{for(let t=e.length-1;t>=0;t--)if(n>=e[t][0])return e[t][1];return e[0][1]},zc={old:{name:"The old corner",mix:{office:1,tourist:1,oldlady:1,party:1,jogger:1,rich:.5},busy:n=>rs(n,[[0,.7],[.72,.4]]),gen:()=>1},market:{name:"The market",mix:{oldlady:3,tourist:3,office:1,rich:.5},busy:n=>rs(n,[[0,.8],[.25,1],[.6,.6],[.72,.15]]),gen:n=>n>.25&&n<.6?1.2:1},homes:{name:"Quiet street",mix:{oldlady:3,jogger:2,rich:1,office:1},busy:n=>rs(n,[[0,.5],[.72,.2]]),gen:()=>1.05},park:{name:"The park",mix:{jogger:3,oldlady:3,tourist:2,party:.5},busy:n=>rs(n,[[0,.8],[.6,.6],[.72,.25]]),gen:()=>.95},bars:{name:"Bar street",mix:{party:6,office:1,tourist:1,rich:.5},busy:n=>rs(n,[[0,.25],[.45,.6],[.6,1]]),gen:n=>n>.6?1.25:.8},downtown:{name:"Downtown",mix:{office:5,rich:2,tourist:1,jogger:1},busy:n=>rs(n,[[0,1],[.6,.6],[.72,.15]]),gen:()=>.85},station:{name:"Station underpass",mix:{office:3,tourist:2,party:1,oldlady:1,jogger:.5,rich:.5},busy:n=>rs(n,[[0,1],[.2,.6],[.5,1],[.72,.4]]),gen:()=>1},river:{name:"The river",mix:{tourist:2,jogger:3,rich:1,oldlady:1},busy:n=>rs(n,[[0,.6],[.5,.8],[.72,.2]]),gen:()=>1.1}};function Ms(n,e){return n>=-36&&n<=36?"old":e>=0?n<-70?"homes":n<-36?"market":n<=72?"bars":"downtown":n<-36?"park":n<=72?"station":"river"}function Ub(n,e){const t=zc[n].mix,i=Vh.reduce((r,o)=>r+(t[o]??0),0);let s=e*i;for(const r of Vh)if(s-=t[r]??0,s<0)return r;return"office"}const Ia={minX:-106,maxX:108,minZ:-28,maxZ:23},Fe={store:{x:-22,z:8.5,r:3,label:"Liquor store"},bakery:{x:0,z:8.5,r:3,label:"Bakery"},dumpster:{x:4,z:17,r:2.6,label:"Dumpster"},corner:{x:24,z:6,r:3.5,label:"Busy corner"},bin:{x:12,z:-6,r:2.5,label:"Recycling"},bench:{x:-16,z:-12,r:2.5,label:"Bench"},sprinkler:{x:-8,z:-9,r:3,label:"Sprinkler"},alley:{x:12,z:16,r:3,label:"Alley"},stash:{x:13.5,z:20,r:1.8,label:"Loose brick"},shop2:{x:-61,z:8.6,r:2.8,label:"Corner shop"},truck:{x:-46,z:-7.2,r:2.8,label:"Food truck"},bakeryBin:{x:6.8,z:9.2,r:1.8,label:"Bakery bin"},fountain:{x:-62,z:-18,r:4.2,label:"Fountain"},pigeons:{x:-57,z:-13,r:3,label:"Pigeons"},pigeons2:{x:47,z:-10,r:3,label:"Pigeons"},underpass:{x:56,z:-15,r:4,label:"Underpass"},bridge:{x:90,z:-24.5,r:3.2,label:"Under the bridge"},tvBar:{x:62,z:8.6,r:2.6,label:"Bar TV"},tvShop:{x:79,z:8.6,r:2.6,label:"Shop TV"},bin2:{x:-50,z:-6,r:2.5,label:"Recycling"},bin3:{x:66,z:-6,r:2.5,label:"Recycling"}},Of={liquor:"store",corner:"shop2",truck:"truck"},lm={liquor:"Liquor store",corner:"Corner shop",truck:"Food truck"},Go=[{x:-16,z:-12},{x:-70,z:-12},{x:-54,z:-12},{x:-62,z:-25},{x:-90,z:-6.4},{x:50,z:-6.6},{x:82,z:-20},{x:100,z:-6.6},{x:-82,z:-24}],hm=2,um=[{x:-26,z:4.8},{x:-84,z:4.8},{x:-50,z:4.8},{x:44,z:4.8},{x:66,z:4.8},{x:86,z:4.8},{x:-66,z:-6.2},{x:30,z:-6.2},{x:96,z:-6.2},{x:60,z:-19}],Fb=1.7,Wh=[{x:-22,z:10},{x:0,z:10},{x:-61,z:10},{x:42.5,z:10},{x:62,z:10},{x:92,z:10},{x:56,z:-9}],Ob=3.4,Bb=["bin","bin2","bin3"],Hc=["pigeons","pigeons2"],zu=["tvBar","tvShop"],zb=[-80,-8,40,76],Hu=[{x:-30,z:5.5},{x:-12,z:5.5},{x:8,z:5.5},{x:30,z:-5.5},{x:-26,z:-5.5},{x:-4,z:-5.5},{x:18,z:-5.5},{x:-20,z:-16},{x:-4,z:-18},{x:10,z:19},{x:14,z:12},{x:28,z:14},{x:-30,z:-12},{x:0,z:-14},{x:-98,z:6},{x:-76,z:5.5},{x:-44,z:7},{x:-58,z:-20},{x:-88,z:-16},{x:-48,z:-24},{x:40,z:6},{x:50,z:7.5},{x:68,z:5.5},{x:46,z:-14},{x:64,z:-17},{x:54,z:-20},{x:80,z:6},{x:100,z:5.5},{x:84,z:-12},{x:96,z:-22},{x:76,z:-25},{x:104,z:-14}],Hb=[{z:6.2,x0:-104,x1:106},{z:7.6,x0:-104,x1:106},{z:-5.6,x0:-104,x1:106},{z:-16,x0:-100,x1:-40},{z:-18,x0:74,x1:106},{z:-12,x0:40,x1:70}],dm={sad:{label:"Sad face",say:["(big sad eyes)","Rough week, friend...","Anything helps. Truly.","(sighs like a movie dog)"]},compliment:{label:"Compliment",say:["Great shoes. Spare a dollar?","You look like a generous person.","That coat! Wow.","Best haircut on this street."]},howdy:{label:"Hey, how you doin?",say:["Hey! How you doin?","Morning, boss!","Beautiful day, huh?","Looking good out here!"]},joke:{label:"Tell a joke",say:["Why don't pigeons pay rent? It's cheep.","I used to be rich. Then I paid for parking.","My landlord is the sky. Rent's free, roof leaks.","I'm on a seafood diet. I see food, I ask for it.","I lost my job at the calendar factory. Took a day off."]},honest:{label:"Be honest",say:["Honestly? It's for a beer.","Spare a dollar for a beer? No lies.","I won't pretend. I'm thirsty.","Straight up: beer fund."]},door:{label:"Hold the door",say:["(holds the door) After you!","(bows, holds the door)","Door service! Tips welcome."]}},qo={office:{name:"Office worker",base:.1,likes:["door","honest"],hates:["sad","joke"],cash:[1,3],food:.1,laughs:!1},tourist:{name:"Tourist",base:.2,likes:["joke","compliment","howdy"],hates:["honest"],cash:[1,5],food:0,laughs:!0},oldlady:{name:"Old lady",base:.2,likes:["sad","compliment","door"],hates:["joke","honest"],cash:[1,2],food:.45,laughs:!1},party:{name:"Party kid",base:.14,likes:["honest","joke"],hates:["sad","compliment"],cash:[1,4],food:.05,laughs:!0},jogger:{name:"Jogger",base:.05,likes:["howdy"],hates:["sad","door","compliment"],cash:[1,2],food:0,laughs:!1},rich:{name:"Rich guy",base:.06,likes:["compliment","door"],hates:["howdy","honest","sad"],cash:[5,20],food:0,laughs:!1}},ai={likeMul:2.4,likeAdd:.1,againMul:.4,angryAt:2,copChance:.35,hateCop:.08,signAdd:.06,drunkMul:.7,maxP:.85},Ls=(n,e)=>n[Math.min(n.length-1,Math.floor(e*n.length))],Gb=["Here you go.","Take care, man.","Get something to eat.","Here. Don't tell my wife.","Hang in there."],Bf={joke:["Ha! Here.","OK, that's good. Take it.","Ha! You earned that."],honest:["Respect the honesty. Here.","Ha. One beer. On me.","At least you are honest."],compliment:["Aw, thanks! Here.","Flattery works. Here."],door:["What a gentleman! Here.","Thank you, sir."],sad:["Oh, honey. Here.","Poor guy. Here."],howdy:["Doing good! Here, buddy.","Ha, hey yourself. Here."]},Vb={rich:["Keep the change. All of it.","Here's a twenty. Don't make it weird."],party:["Bro! Here! Cheers!","Drink one for me!"],tourist:["Is this how it works here? Here!","For the local guide!"]},Wb=["Take this sandwich, dear.","Here, I packed too much lunch.","Have my muffin. Go on."],Xb=["Sorry man, no cash.","Not today.","I only have card.","(pretends to be on the phone)","(walks faster)","Maybe next time.","Sorry, buddy.","I gave at the office."],zf={office:["Get a job.","In a meeting. Literally.","I'm late, sorry."],tourist:["No speak... uh... money.","(takes a photo of him instead)"],oldlady:["I only have bus fare, dear.","Not today, sweetheart."],party:["Bro, I'm broke too.","Spent it all on shots, sorry!"],jogger:["(points at earbuds)","Can't stop! Pace!"],rich:["Have you tried a job?","My accountant says no."]},$b={office:["Ugh. Get a job.","Not now. Ever."],tourist:["Uh... no. Weird.","Is he allowed to say that?"],oldlady:["That's not funny, young man.","Shameful!"],party:["Dude, too real. Bad vibes.","Ew, no."],jogger:["Don't touch me.","Out of my lane!"],rich:["Don't touch me.","Don't talk to me."]},jb=["I said NO.","Leave me alone!","Back off, man!","Seriously? Again?"],Hf=["I'm calling the cops.","Officer! This guy!"],qb=["Ha! Good one. Still no.","Haha! No cash, but good one."];function Yb(n,e,t){const i=qo[n];if(t.asks>=ai.angryAt||i.hates.includes(e))return 0;let s=i.base*(.5+t.generosity)*t.areaMul;return i.likes.includes(e)&&(s=s*ai.likeMul+ai.likeAdd),t.asks===1&&(s*=ai.againMul),t.sign&&(s+=ai.signAdd),t.high&&n!=="party"&&(s*=ai.drunkMul),Math.max(0,Math.min(ai.maxP,s))}function Kb(n,e,t,i){const s=qo[n],r={outcome:"no",money:0,food:0,laughed:!1,callCop:!1,reply:""};if(t.asks>=ai.angryAt)return r.outcome="angry",r.callCop=i()<ai.copChance+.15*(t.asks-ai.angryAt),r.reply=r.callCop?Ls(Hf,i()):Ls(jb,i()),r;if(s.hates.includes(e))return r.outcome="hate",r.callCop=(n==="rich"||n==="office")&&i()<ai.hateCop,r.reply=r.callCop?Ls(Hf,i()):Ls($b[n],i()),r;const o=s.likes.includes(e);if(r.laughed=e==="joke"&&o&&s.laughs&&i()<.75,i()<Yb(n,e,t)){if(r.outcome="give",i()<s.food)r.food=30,r.reply=Ls(Wb,i());else{r.money=s.cash[0]+Math.floor(i()*(s.cash[1]-s.cash[0]+1));const c=[...Gb,...Bf[e]??[],...Bf[e]??[],...Vb[n]??[]];r.reply=Ls(c,i())}return r}const a=r.laughed?qb:[...Xb,...zf[n]??[],...zf[n]??[]];return r.reply=Ls(a,i()),r}const fm={beer:{name:"Beer",price:3,note:"Gentle. The classic."},vodka:{name:"Vodka",price:5,note:"Strong. Wild."},wine:{name:"Cheap wine",price:4,note:"Warm and slow."},hotdog:{name:"Hot dog",price:3,note:"Hot food. +40 food",food:40,hot:!0},soup:{name:"Soup",price:4,note:"Hot. +50 food, +5 health",food:50,hot:!0},coffee:{name:"Coffee",price:2,note:"Hot. +10 food, eases the shakes",food:10,hot:!0},sandwich:{name:"Sandwich",price:3,note:"Cold. +35 food",food:35},chips:{name:"Chips",price:1,note:"Cold. +15 food",food:15},pastry:{name:"Pastry",price:2,note:"Cold. +20 food",food:20},cigs:{name:"Cigarettes (5)",price:3,note:"Smoke anywhere. Needs a lighter."},lighter:{name:"Lighter",price:1,note:"For the smokes."},scratch:{name:"Scratch card",price:1,note:"Small odds. Big hope."},treats:{name:"Dog treats",price:2,note:"For a friend you have not met yet."},sign:{name:"Cardboard sign",price:2,note:"People give a bit more."},shades:{name:"Sunglasses",price:6,note:"The cop notices you less."},goodBlanket:{name:"Good blanket",price:8,note:"Sleep heals more. Not heavy."},jokebook:{name:"Joke book",price:4,note:'Unlocks "Tell a joke".'}},pm={liquor:["beer","wine","vodka","cigs","lighter","scratch","chips"],corner:["sandwich","chips","pastry","beer","cigs","lighter","scratch","treats","sign","shades","goodBlanket","jokebook"],truck:["hotdog","soup","coffee"]},So={big:.03,bigWin:20,small:.15,smallWin:5};function Zb(n){return n<So.big?So.bigWin:n<So.big+So.small?So.smallWin:0}const Gu={laughTourist:{text:"Make a tourist laugh",ev:"laugh:tourist",n:1,whimsy:15},eatHot:{text:"Eat something hot",ev:"eat:hot",n:1,whimsy:10},sleepBridge:{text:"Sleep under the bridge",ev:"sleep:bridge",n:1,whimsy:12},scratchWin:{text:"Win on a scratch card",ev:"scratch:win",n:1,money:3},give3:{text:"Get 3 people to give",ev:"give",n:3,money:4},recycle5:{text:"Recycle 5 bottles",ev:"recycle",n:5,money:3},sit:{text:"Sit on a bench a while",ev:"sit",n:1,whimsy:8},pigeons:{text:"Feed the pigeons",ev:"pigeons",n:1,whimsy:8},oldLady:{text:"Get an old lady to give",ev:"give:oldlady",n:1,whimsy:10},rich:{text:"Get money from a rich guy",ev:"give:rich",n:1,whimsy:12},door:{text:"Hold a door for someone",ev:"line:door",n:1,money:2},areas3:{text:"Visit 3 parts of the city",ev:"area",n:3,whimsy:10},smoke:{text:"Have a smoke",ev:"smoke",n:1,whimsy:6},tv:{text:"Watch the TV in a window",ev:"tv",n:1,whimsy:6},whimsy2:{text:"Do 2 whimsy acts",ev:"whimsy",n:2,money:4},trash:{text:"Dig through 2 trash cans",ev:"trash",n:2,whimsy:6}},Jb=Object.keys(Gu);function Vu(n,e){const t=Bc(so(`${n}#goals${e}`)),i=[...Jb],s=[];for(;s.length<3;){const r=Math.floor(t()*i.length);s.push({id:i[r],got:0,done:!1}),i.splice(r,1)}return s}const Dn=["head","body","hands","carry"],mm={common:14211288,good:4905066,rare:4889343,legendary:16756782},gm={cardboard:{name:"Cardboard",rarity:"common",desc:"A flat box. A bed, a sign, a wall.",effect:"Craft: sign.",dur:3,value:0,paper:!0},marker:{name:"Marker",rarity:"common",desc:"Half dry. Enough for one sign.",effect:"Craft: sign.",dur:2,value:0},can:{name:"Empty can",rarity:"common",desc:"Rinsed. Mostly.",effect:"Craft: stove, wind chime.",dur:9,value:0},candle:{name:"Candle stub",rarity:"common",desc:"Church leftovers.",effect:"Craft: stove.",dur:3,value:0},string:{name:"String",rarity:"common",desc:"A good length of string.",effect:"Craft: necklace, wind chime.",dur:9,value:0},caps:{name:"Bottle caps",rarity:"common",desc:"A pocketful. They jingle.",effect:"Craft: necklace.",dur:9,value:0},tape:{name:"Duct tape",rarity:"common",desc:"Fixes everything twice.",effect:"Use: +3 wear on his most worn thing. Craft: rain cover.",dur:2,value:1},plank:{name:"Plank",rarity:"common",desc:"Straight, mostly.",effect:"Craft: skateboard.",dur:9,value:0},pole:{name:"Pole",rarity:"common",desc:"A tent pole, or a broom handle.",effect:"Craft: tent (needs 2).",dur:9,value:0},crate:{name:"Milk crate",rarity:"common",desc:"The seat of kings.",effect:"Craft: cart.",dur:9,value:1},newspaper:{name:"Newspaper",rarity:"common",desc:"Yesterday's news.",effect:"Use: read it. +2 whimsy.",dur:2,value:0,paper:!0},beans:{name:"Can of beans",rarity:"common",desc:"Cold beans. Food is food.",effect:"Use: eat. +20 food (hot with a stove).",dur:1,value:1,food:20},bread:{name:"Bread heel",rarity:"common",desc:"Hard as a brick.",effect:"Use: eat. +15 food.",dur:1,value:0,food:15},lighter:{name:"Lighter",rarity:"common",desc:"For the smokes.",effect:"Lets him smoke.",dur:12,value:1},umbrella:{name:"Broken umbrella",rarity:"common",desc:"One spoke short.",effect:"Hands: his paper stays dry in rain.",dur:5,value:1,slot:"hands"},beanie:{name:"Beanie",rarity:"common",desc:"Smells like someone.",effect:"Head: cold hurts half as much.",dur:10,value:1,slot:"head"},tarp:{name:"Tarp",rarity:"good",desc:"Blue. Always blue.",effect:"Craft: tent, bedroll.",dur:9,value:2},wheel:{name:"Old wheel",rarity:"good",desc:"From a skateboard that lost.",effect:"Craft: skateboard.",dur:9,value:1},gloves:{name:"Fingerless gloves",rarity:"good",desc:"Warm hands, free fingers.",effect:"Hands: cold hurts less.",dur:10,value:2,slot:"hands"},poncho:{name:"Poncho",rarity:"good",desc:"Plastic. Crinkly. Dry.",effect:"Body: rain does not soak him or his paper.",dur:8,value:2,slot:"body"},blanket:{name:"Blanket",rarity:"good",desc:"Warm, but heavy.",effect:"Sleep heals +12. Heavy: a bit slower.",dur:10,value:2},backpack:{name:"Backpack",rarity:"good",desc:"One strap works.",effect:"Carry: holds 8.",dur:20,value:4,slot:"carry",cap:8},shades:{name:"Sunglasses",rarity:"good",desc:"Cool. Hidden. Both.",effect:"Head: the cop notices him less.",dur:15,value:3,slot:"head"},book_joke:{name:"Joke book",rarity:"good",desc:"Dad jokes, 1987.",effect:'Read: unlocks "Tell a joke" forever.',dur:6,value:1,paper:!0,book:"joke"},book_cook:{name:"Cookbook",rarity:"good",desc:'"Cooking on a Budget". Very budget.',effect:"Read: dumpster recipes, trash food +50%.",dur:6,value:1,paper:!0,book:"cook"},book_poetry:{name:"Poetry book",rarity:"good",desc:"Water-stained. Still sings.",effect:'Read: unlocks "Recite" (busk for coins).',dur:6,value:1,paper:!0,book:"poetry"},trolley:{name:"Shopping trolley",rarity:"good",desc:"One wheel squeaks. Loudly.",effect:"Carry: holds 16. Slow, and the cop hears it.",dur:25,value:3,slot:"carry",cap:16},radio:{name:"Pocket radio",rarity:"rare",desc:"One station. It is jazz.",effect:"Use: +5 whimsy.",dur:6,value:6},sleepingBag:{name:"Sleeping bag",rarity:"rare",desc:"The zipper half works.",effect:"Sleep heals +15.",dur:15,value:6},goodBlanket:{name:"Good blanket",rarity:"rare",desc:"Thick wool. Not heavy.",effect:"Sleep heals +20.",dur:20,value:5},guitar:{name:"Guitar",rarity:"rare",desc:"Five strings. Enough.",effect:"Hands: busk for coins.",dur:20,value:8,slot:"hands"},boltCutters:{name:"Bolt cutters",rarity:"rare",desc:"Heavy. Honest work, surely.",effect:"Cut a bike lock (easier, louder).",dur:6,value:6},lock:{name:"Bike lock",rarity:"rare",desc:"The key is on a string.",effect:"His parked ride is locked.",dur:30,value:3},book_psych:{name:"Psychology paperback",rarity:"rare",desc:'"Reading People". Dog-eared.',effect:"Read: see who likes which line before he asks.",dur:6,value:2,paper:!0,book:"psych"},book_lockpick:{name:"Lockpicking zine",rarity:"rare",desc:"Photocopied. Illegal-ish.",effect:"Read: steal bikes.",dur:6,value:2,paper:!0,book:"lockpick"},book_dog:{name:"Dog training",rarity:"rare",desc:'"Sit. Stay. Love."',effect:"Read: for a dog, someday (not yet).",dur:6,value:1,paper:!0,book:"dog"},skateboard:{name:"Skateboard",rarity:"rare",desc:"Grip tape, mostly.",effect:"Ride: fast. Wobbly when drunk.",dur:8,value:5,ride:!0},watch:{name:"Wristwatch",rarity:"rare",desc:"Stopped at 4:20.",effect:"Pawn it.",dur:99,value:12},luckyCharm:{name:"Lucky charm",rarity:"legendary",desc:"A rabbit foot. Not his rabbit.",effect:"Better scratch cards. People give a bit more.",dur:99,value:10},ring:{name:"Gold ring",rarity:"legendary",desc:"Someone said no.",effect:"Pawn it for a lot.",dur:99,value:30},scooter:{name:"Scooter",rarity:"legendary",desc:"Fast. Careful.",effect:"Ride: very fast. Wild when drunk.",dur:12,value:15,ride:!0},jacket:{name:"Leather jacket",rarity:"legendary",desc:"Like a movie.",effect:"Body: warm, and party people like him more.",dur:25,value:14,slot:"body"},sign:{name:"Cardboard sign",rarity:"common",desc:"Hand-written.",effect:"Hands: people give more, if the words suit them.",dur:5,value:0,slot:"hands",paper:!0,crafted:!0},tent:{name:"Tent",rarity:"good",desc:"Tarp and two poles. Home.",effect:"Sleep: +15 heal, dry, and no thief.",dur:10,value:4,crafted:!0},stove:{name:"Can stove",rarity:"good",desc:"Can, candle, careful.",effect:"Food he eats is hot.",dur:6,value:1,crafted:!0},cart:{name:"Crate cart",rarity:"good",desc:"A trolley with a crate on it.",effect:"Carry: holds 20. Slow, and the cop hears it.",dur:25,value:4,slot:"carry",cap:20,crafted:!0},necklace:{name:"Bottle-cap necklace",rarity:"good",desc:"Jingly. Heartfelt.",effect:"Use near someone: a gift. They turn friendly.",dur:1,value:1,crafted:!0},rainCover:{name:"Rain cover",rarity:"good",desc:"Umbrella plus a lot of tape.",effect:"Paper stays dry. Rain nights heal more.",dur:8,value:1,crafted:!0},chime:{name:"Wind chime",rarity:"common",desc:"Cans on a string. Music.",effect:"Use: +4 whimsy.",dur:5,value:1,crafted:!0},hotStew:{name:"Bin stew",rarity:"good",desc:"Do not ask.",effect:"Use: eat. +45 food, hot.",dur:1,value:0,food:45,hot:!0,crafted:!0},bedroll:{name:"Bedroll",rarity:"good",desc:"Blanket rolled in a tarp.",effect:"Sleep heals +18, and dry.",dur:15,value:3,crafted:!0},bike:{name:"Bike",rarity:"rare",desc:"Not his. Now his.",effect:"Ride: fastest. Very wobbly drunk.",dur:15,value:10,ride:!0,crafted:!0}},ke=gm,Qb=Object.keys(gm),e1=Qb.filter(n=>!ke[n].crafted),Xs={joke:"book_joke",cook:"book_cook",psych:"book_psych",lockpick:"book_lockpick",poetry:"book_poetry",dog:"book_dog"};function Xh(){return{bag:[],gear:{},books:[],known:[],ride:null,riding:!1,parked:null,locked:!1,ground:[],combos:[],gift:!1,rideT:0,fell:!1}}const Un={emit:(n,e)=>{}};function an(n){const[e,t]=Bu(n.rng);return n.rng=t,e}const at=(n,e)=>n.messages.push(e),qa=n=>Math.max(0,Math.min(100,n)),qr=n=>n.own.gear.carry?ke[n.own.gear.carry.id].cap??4:4,t1=(n,e)=>Dn.some(t=>{var i;return((i=n.own.gear[t])==null?void 0:i.id)===e}),Ot=(n,e)=>t1(n,e)||n.own.bag.some(t=>t.id===e),On=(n,e)=>n.own.books.includes(e),Vi=(n,e)=>n.own.combos.includes(e),_m=[{id:"coolBusker",name:"Cool busker",need:["shades","guitar"],text:"busking pays double"},{id:"rightSign",name:"The right sign",need:["sign","book:psych"],text:"his sign suits every street"},{id:"snugCamp",name:"Snug camp",need:["tent","sleepingBag|bedroll"],text:"sleep heals +15 more, even cold nights"},{id:"troubadour",name:"Troubadour",need:["guitar","book:poetry"],text:"reciting pays $2 more"},{id:"streetLegend",name:"Street legend",need:["skateboard","shades"],text:"half the drunk wobble on the board"},{id:"chef",name:"Chef",need:["stove","book:cook"],text:"hot food fills 50% more"},{id:"scrapper",name:"Scrapper",need:["trolley|cart","boltCutters"],text:"recycling pays +$1 a bottle"},{id:"ghostHands",name:"Ghost hands",need:["luckyCharm","book:lockpick"],text:"nobody sees him take a bike"},{id:"warmNight",name:"Warm night",need:["blanket","dog"],text:"a dog keeps him warm (placeholder: no dogs yet)"}];function n1(n,e){return e==="dog"?!1:e.startsWith("book:")?On(n,e.slice(5)):e.split("|").some(t=>{var i;return Ot(n,t)||((i=n.own.ride)==null?void 0:i.id)===t})}function mn(n){var t,i,s;const e=n.own;n.items.blanket=Ot(n,"blanket"),n.items.goodBlanket=Ot(n,"goodBlanket"),n.items.sign=((t=e.gear.hands)==null?void 0:t.id)==="sign",n.items.shades=((i=e.gear.head)==null?void 0:i.id)==="shades",n.items.lighter=Ot(n,"lighter"),n.items.jokebook=On(n,"joke"),n.items.scooter=e.riding&&((s=e.ride)==null?void 0:s.id)==="scooter";for(const r of _m){const o=r.need.every(c=>n1(n,c)),a=e.combos.includes(r.id);o&&!a?(e.combos.push(r.id),at(n,`Combo! ${r.name}: ${r.text}.`),Un.emit(n,"combo")):!o&&a&&e.combos.splice(e.combos.indexOf(r.id),1)}}const i1={joke:'A joke book! New line: "Tell a joke".',cook:"The cookbook. He can make bin stew now, and trash food goes further.",psych:"Reading People. Now he can see who likes which line.",lockpick:"The lockpicking zine. Bikes look different now.",poetry:'Poetry. New act: "Recite" for coins.',dog:"Dog training. He has no dog. Yet."};function xm(n,e){return On(n,e)?!1:(n.own.books.push(e),at(n,i1[e]),Un.emit(n,"read"),!0)}const $h=[{text:"GOD BLESS",suits:["oldlady","rich"]},{text:"WHY LIE? NEED BEER",suits:["party","tourist"]},{text:"ANYTHING HELPS",suits:["office","tourist","oldlady"]},{text:"SMILE, IT'S FREE",suits:["jogger","party"]},{text:"WILL WORK FOR SOUP",suits:["office","rich","jogger"]}];function Zt(n,e,t=0,i=0,s={},r=!1){const o=ke[e],a={id:e,dur:o.dur,...s},c=n.own;return o.book&&xm(n,o.book),o.ride&&!c.ride?(c.ride=a,c.riding=!0,c.parked=null,r||at(n,`${o.name}! He hops on.`)):o.slot&&!c.gear[o.slot]?(c.gear[o.slot]=a,!r&&!o.book&&at(n,`${o.name}. He puts it on.`)):!o.ride&&c.bag.length<qr(n)?(c.bag.push(a),!r&&!o.book&&at(n,`${o.name}. In the bag.`)):(c.ground.push({...a,x:t,z:i}),at(n,`No room. He leaves the ${o.name.toLowerCase()} on the ground.`)),mn(n),a}function vm(n,e){var r;const t=n.own,i=t.bag.findIndex(o=>o.id===e);let s=null;if(i>=0)s=t.bag.splice(i,1)[0];else for(const o of Dn)if(((r=t.gear[o])==null?void 0:r.id)===e){s=t.gear[o],delete t.gear[o];break}return mn(n),s}function Mi(n,e,t=1){if(e.dur-=t,e.dur>0)return;const i=n.own,s=i.bag.indexOf(e);s>=0&&i.bag.splice(s,1);for(const r of Dn)i.gear[r]===e&&delete i.gear[r];i.ride===e&&(i.ride=null,i.riding=!1,i.parked=null),at(n,`His ${ke[e.id].name.toLowerCase()} ${ke[e.id].paper?"fell apart":"broke"}.`),mn(n)}const Wu=(n,e)=>n.own.bag.find(t=>t.id===e)??Dn.map(t=>n.own.gear[t]).find(t=>(t==null?void 0:t.id)===e);function s1(n,e){const t=n.own,i=t.bag[e],s=i&&ke[i.id].slot;if(!i||!s)return!1;t.bag.splice(e,1);const r=t.gear[s];if(t.gear[s]=i,r)if(t.bag.length<qr(n))t.bag.push(r);else return t.gear[s]=r,t.bag.splice(e,0,i),at(n,"No room for the old one."),!1;return at(n,`${ke[i.id].name}: on.`),mn(n),!0}function r1(n,e){const t=n.own,i=t.gear[e];if(!i)return!1;const s=e==="carry"?4:qr(n);return t.bag.length+1>s?(at(n,"His pockets can't hold all that."),!1):(delete t.gear[e],t.bag.push(i),mn(n),!0)}function o1(n,e,t,i){const s=n.own;let r;if(typeof e=="number")r=s.bag.splice(e,1)[0];else{if(r=s.gear[e],r&&e==="carry"&&s.bag.length>4)return at(n,"He can't drop the bag with all that in it."),!1;delete s.gear[e]}return r?(s.ground.push({...r,x:t,z:i}),at(n,`Dropped the ${ke[r.id].name.toLowerCase()}.`),mn(n),!0):!1}function a1(n,e,t,i=1.8){return n.own.ground.findIndex(s=>Math.hypot(s.x-e,s.z-t)<=i)}function c1(n,e){const t=n.own.ground[e];if(!t)return!1;const i=ke[t.id];if(!(i.ride&&!n.own.ride||i.slot&&!n.own.gear[i.slot]||!i.ride&&n.own.bag.length<qr(n)))return at(n,i.ride?"He already has a ride.":"No room in the bag."),!1;n.own.ground.splice(e,1);const{x:r,z:o,...a}=t;return Zt(n,t.id,t.x,t.z,a),Un.emit(n,"find"),!0}function ym(n,e,t){const i=t&&Vi(n,"chef")?Math.round(e*1.5):e;return n.hunger=qa(n.hunger+i),Un.emit(n,"eat"),t&&Un.emit(n,"eat:hot"),i}function Mm(n,e,t=!1){const i=n.own,s=i.bag[e];if(!s||n.dead)return!1;const r=ke[s.id];if(r.book)return xm(n,r.book)||at(n,"He knows this one by heart."),!0;if(r.food){const o=Wu(n,"stove"),a=!!r.hot||!!o;i.bag.splice(e,1);const c=ym(n,r.food,a);return o&&!r.hot&&Mi(n,o),at(n,`${r.name}${a?", hot":""}. +${c} food`),mn(n),!0}if(r.slot)return s1(n,e);switch(s.id){case"newspaper":return i.bag.splice(e,1),n.whimsy=qa(n.whimsy+2),at(n,"The news. Somehow worse than his day. +2 whimsy"),mn(n),!0;case"radio":return n.whimsy=qa(n.whimsy+5),at(n,"Jazz. Of course. +5 whimsy"),Mi(n,s),!0;case"chime":return n.whimsy=qa(n.whimsy+4),at(n,"Clink, clonk. Music. +4 whimsy"),Mi(n,s),!0;case"tape":{const o=[...i.bag,...Dn.map(c=>i.gear[c]).filter(c=>!!c),...i.ride?[i.ride]:[]].filter(c=>c!==s);if(!o.length)return at(n,"Nothing to tape."),!1;const a=o.reduce((c,l)=>c.dur/ke[c.id].dur<=l.dur/ke[l.id].dur?c:l);return a.dur=Math.min(ke[a.id].dur,a.dur+3),at(n,`Taped up the ${ke[a.id].name.toLowerCase()}.`),Mi(n,s),!0}case"necklace":return t?(i.bag.splice(e,1),i.gift=!0,at(n,"He gives the necklace. They look at him differently now."),mn(n),!0):(at(n,"A gift needs someone to give it to."),!1)}return at(n,`He turns the ${r.name.toLowerCase()} over in his hands. Not now.`),!1}function l1(n,e,t){if(!On(n,"psych"))return null;const i=qo[e];return i.likes.includes(t)?"likes":i.hates.includes(t)?"hates":"meh"}function h1(n,e){var i,s;if(!n.items.sign)return!1;const t=(i=n.own.gear.hands)==null?void 0:i.text;return!t||Vi(n,"rightSign")?!0:((s=$h.find(r=>r.text===t))==null?void 0:s.suits.includes(e))??!0}function u1(n){var t,i,s;let e=1;return((t=n.own.gear.head)==null?void 0:t.id)==="beanie"&&(e*=.5),((i=n.own.gear.hands)==null?void 0:i.id)==="gloves"&&(e*=.75),((s=n.own.gear.body)==null?void 0:s.id)==="jacket"&&(e*=.6),e}const d1=n=>{var e,t;return((e=n.own.gear.hands)==null?void 0:e.id)==="umbrella"||((t=n.own.gear.body)==null?void 0:t.id)==="poncho"||Ot(n,"rainCover")||Ot(n,"tent")},f1=[["common",.62],["good",.26],["rare",.1],["legendary",.02]];function Gf(n,e,t,i=!1){const s=Bc(so(`${n}#loot${e}#${t}`)),r=s(),o=i?.75:.42;if(r>=o){const u=(r-o)/(1-o);return u<.35?"coins":u<.6?"bottle":"nothing"}const a=i?.15+s()*.85:s();let c="legendary",l=0;for(const[u,d]of f1)if(l+=d,a<l){c=u;break}const h=e1.filter(u=>ke[u].rarity===c);return h[Math.floor(s()*h.length)]}function Vf(n,e,t,i){if(e==="coins"){n.money+=1,at(n,"A sticky dollar. Still money.");return}if(e==="bottle"){n.bottles++,at(n,"A bottle.");return}if(e==="nothing"){at(n,"Just trash. Classy trash, though.");return}const s=ke[e];if(s.food&&On(n,"cook")){const r=ym(n,Math.round(s.food*1.5),!1);at(n,`${s.name}, cooked up right. +${r} food`);return}s.book&&On(n,s.book)?at(n,`Another ${s.name.toLowerCase()}. He knows it already.`):s.book||at(n,`Found: ${s.name} (${s.rarity}).`),Zt(n,e,t,i,{},!0)}function p1(n){const e=n.own;for(const t of Dn){const i=e.gear[t];i&&Mi(n,i)}if(e.ride&&e.rideT>0&&Mi(n,e.ride),e.rideT=0,n.draw.weather==="rain"&&!d1(n)){const t=[...e.bag,...Dn.map(i=>e.gear[i])].filter(i=>!!i&&!!ke[i.id].paper);t.length&&at(n,"Rain. His paper things got soaked.");for(const i of t)i.wet=!0,Mi(n,i,2)}}function m1(n,e){const t=n.own;if(Ot(n,"tent"))return;const i=e==="street"?.6:e==="bridge"||e==="underpass"?.25:.35;if(t.bag.length&&an(n)<i){const s=t.bag.splice(Math.floor(an(n)*t.bag.length),1)[0];at(n,`Someone went through his bag in the night. The ${ke[s.id].name.toLowerCase()} is gone.`)}t.ride&&!t.riding&&!t.locked&&an(n)<.5&&(at(n,`His ${ke[t.ride.id].name.toLowerCase()} is gone. He should have locked it.`),t.ride=null,t.parked=null),mn(n)}function g1(n){const e=n.items,t=[[e.blanket,"blanket"],[e.goodBlanket,"goodBlanket"],[e.sign,"sign"],[e.shades,"shades"],[e.lighter,"lighter"],[e.jokebook,"book_joke"],[e.scooter,"scooter"]];for(const[i,s]of t)i&&Zt(n,s,0,0,{},!0);n.messages=[]}const bm={skateboard:{speed:1.6,sober:.08,drunk:2.6,drunkSpeed:1,fall:.035,fallHurt:6},scooter:{speed:1.7,sober:0,drunk:2,drunkSpeed:1,fall:.01,fallHurt:8},bike:{speed:2.1,sober:0,drunk:1.6,drunkSpeed:1.25,fall:.015,fallHurt:12}},Xu=n=>n.own.riding&&n.own.ride?n.own.ride.id:null;function _1(n,e,t,i){var o;const s=Xu(n);if(s){const a=bm[s];e*=a.speed,i?(e*=a.drunkSpeed,t=t*a.drunk+.3,s==="skateboard"&&Vi(n,"streetLegend")&&(t*=.5)):t+=a.sober}const r=(o=n.own.gear.carry)==null?void 0:o.id;return r==="trolley"&&(e*=.8),r==="cart"&&(e*=.85),{speed:e,wobble:t}}const x1=n=>{var e,t;return((e=n.own.gear.carry)==null?void 0:e.id)==="trolley"||((t=n.own.gear.carry)==null?void 0:t.id)==="cart"};function Sm(n,e,t){const i=n.own;return!i.ride||!i.riding?!1:(i.riding=!1,i.parked={x:e,z:t},i.locked=Ot(n,"lock"),n.messages.push(i.locked?"Parked and locked.":"Parked. No lock. Hmm."),mn(n),!0)}function v1(n,e,t){const i=n.own;return!i.ride||i.riding||!i.parked||Math.hypot(i.parked.x-e,i.parked.z-t)>2.2?!1:(i.riding=!0,i.parked=null,mn(n),!0)}function y1(n,e,t,i,s){var a;const r=n.own,o=Xu(n);if(o){r.rideT+=e;const c=bm[o];s&&an(n)<c.fall*e&&(n.health=Math.max(0,n.health-c.fallHurt),r.fell=!0,n.messages.push(o==="bike"?"He and the bike part ways. Hard.":"He ate the pavement."),Sm(n,t,i),r.ride&&Mi(n,r.ride)),o==="bike"&&((a=r.ride)!=null&&a.area)&&r.ride.area===Ms(t,i)&&!n.usedToday.includes("owner")&&an(n)<.02*e&&(n.usedToday.push("owner"),n.copAlert=!0,n.messages.push(`"HEY! That's MY bike!" Someone is calling the cop.`))}else r.ride&&r.parked&&!r.locked&&Math.hypot(r.parked.x-t,r.parked.z-i)>12&&an(n)<.006*e&&(n.messages.push(`Someone rode off on his ${ke[r.ride.id].name.toLowerCase()}. He should lock it.`),r.ride=null,r.parked=null,mn(n))}const $u=[{x:-4,z:7.4},{x:52,z:-5},{x:-78,z:7.4},{x:88,z:7.4}];function wm(n,e){return n.usedToday.includes("bike"+e)?!1:Bc(so(`${n.seed}#rack${n.day}#${e}`))()<.7}const M1=n=>On(n,"lockpick")||Ot(n,"boltCutters"),Tm=n=>On(n,"lockpick")?.55:.4;function Em(n,e,t){n.usedToday.push("bike"+e);const i=!On(n,"lockpick");if(i){const a=Wu(n,"boltCutters");a&&Mi(n,a)}const s=t>=Tm(n);let r=.18+.02*n.day+(s?0:.25)+(i?.1:0);Vi(n,"ghostHands")&&(r=0);const o=$u[e];return an(n)<r?an(n)<.5?(n.copAlert=!0,s&&Zt(n,"bike",o.x,o.z,{area:Ms(o.x,o.z)},!0),n.messages.push(s?"Got the bike, but the cop saw!":"The cop saw him fiddling with the lock!"),"cop"):(n.whimsy=Math.max(0,n.whimsy-3),n.messages.push('"HEY! Get off my bike!" The owner. He walks away fast.'),"owner"):s?(Zt(n,"bike",o.x,o.z,{area:Ms(o.x,o.z)},!0),n.messages.push("Click. A bike. Nobody saw."),"got"):(n.messages.push("The lock wins. Nobody saw."),"fumbled")}const Lr={pawn:{x:42.5,z:8.6,r:2.8,label:"Pawn shop"},books:{x:-36,z:7,r:2.6,label:"Used books"},library:{x:-66,z:-16,r:2,label:"Little library"}},Il=(n,e)=>Math.hypot(n.x-Lr[e].x,n.z-Lr[e].z)<=Lr[e].r,Wf=(n,e)=>n.usedToday.filter(t=>t===e).length,Fn=(n,e)=>n.messages.push(e),Xf=n=>Math.max(0,Math.min(100,n)),Am=[{id:"backpack",price:6},{id:"sleepingBag",price:8},{id:"guitar",price:12},{id:"boltCutters",price:9},{id:"lock",price:4},{id:"scooter",price:20},{id:"luckyCharm",price:15}],ju=[{book:"joke",price:3},{book:"cook",price:3},{book:"poetry",price:3},{book:"psych",price:5},{book:"lockpick",price:5},{book:"dog",price:4}],$f=3;function b1(n,e){var o;const t=[],i=(a,c)=>t.push({id:`own:${a}`,label:c,whimsy:!1}),s=a1(n,e.x,e.z);s>=0&&i(`grab:${s}`,"Grab "+ke[n.own.ground[s].id].name.toLowerCase());const r=n.own;return r.riding?i("getoff","Get off"):r.ride&&r.parked&&Math.hypot(r.parked.x-e.x,r.parked.z-e.z)<=2.2&&i("mount","Ride"),Go.some(a=>Math.hypot(a.x-e.x,a.z-e.z)<=hm)&&i("craft","Craft"),Il(e,"pawn")&&i("pawn","Pawn shop"),Il(e,"books")&&i("books","Book cart"),Il(e,"library")&&!n.usedToday.includes("library")&&i("library","Little library"),M1(n)&&!Xu(n)&&$u.forEach((a,c)=>{Math.hypot(a.x-e.x,a.z-e.z)<=1.8&&wm(n,c)&&i(`steal:${c}`,"Steal bike")}),((o=r.gear.hands)==null?void 0:o.id)==="guitar"&&Wf(n,"busk")<$f&&!r.riding&&i("busk","Busk"),On(n,"poetry")&&Wf(n,"recite")<$f&&!r.riding&&i("recite","Recite"),t}function S1(n,e,t){const i=n.own;if(e.startsWith("grab:"))return c1(n,Number(e.slice(5)));if(e.startsWith("steal:")||e==="craft"||e==="pawn"||e==="books")return!0;switch(e){case"getoff":return Sm(n,t.x,t.z);case"mount":return v1(n,t.x,t.z);case"library":{n.usedToday.push("library");const s=Object.keys(Xs).filter(r=>!On(n,r));return s.length&&an(n)<.6?Zt(n,Xs[s[Math.floor(an(n)*s.length)]],t.x,t.z):(Fn(n,"Only a romance novel. He takes a newspaper instead."),Zt(n,"newspaper",t.x,t.z,{},!0)),Un.emit(n,"library"),!0}case"busk":{n.usedToday.push("busk");let s=1+Math.floor(an(n)*3);return Vi(n,"coolBusker")&&(s*=2),n.money+=s,n.whimsy=Xf(n.whimsy+3),Fn(n,`He plays. ${Vi(n,"coolBusker")?"Too cool. ":""}+$${s}`),i.gear.hands&&w1(n,i.gear.hands),Un.emit(n,"busk"),!0}case"recite":{n.usedToday.push("recite");const s=Math.floor(an(n)*3)+(Vi(n,"troubadour")?2:0);return n.money+=s,n.whimsy=Xf(n.whimsy+3),Fn(n,s?`He recites a poem about pigeons. +$${s}`:"He recites. Nobody pays. The pigeons clap, in spirit."),Un.emit(n,"recite"),!0}}return!1}function w1(n,e){an(n)<.3&&(e.dur-=1,e.dur<=0&&(vm(n,e.id),Fn(n,`His ${ke[e.id].name.toLowerCase()} broke.`)))}function T1(n,e,t,i,s){n.dead||y1(n,e,t,i,s)}function Rm(n,e){const t=n.own.bag[e];if(!t)return!1;const i=ke[t.id],s=Math.max(0,Math.round(i.value*(t.wet?.5:1)*Math.max(.4,t.dur/i.dur)));return s<=0?(Fn(n,`"I don't take trash, pal."`),!1):(n.own.bag.splice(e,1),n.money+=s,Fn(n,`Sold the ${i.name.toLowerCase()}. +$${s}`),mn(n),Un.emit(n,"pawn"),!0)}function E1(n,e,t=0,i=0){const s=Am[e];return s?n.money<s.price?(Fn(n,"Not enough money."),!1):ke[s.id].ride&&n.own.ride?(Fn(n,"He already has a ride."),!1):(n.money-=s.price,Zt(n,s.id,t,i),Un.emit(n,"buy"),!0):!1}function A1(n,e,t=0,i=0){const s=ju[e];return s?On(n,s.book)&&Ot(n,Xs[s.book])?(Fn(n,"He has that one."),!1):n.money<s.price?(Fn(n,"Not enough money."),!1):(n.money-=s.price,Zt(n,Xs[s.book],t,i),Un.emit(n,"buy"),!0):!1}function R1(n,e,t=0,i=0){const s=ju[e];return!s||n.usedToday.includes("bookSteal")?(Fn(n,"The cart man is watching him now."),!1):(n.usedToday.push("bookSteal"),Zt(n,Xs[s.book],t,i),an(n)<.5?(n.copAlert=!0,Fn(n,'"THIEF! Book thief!" Who steals a book?')):Fn(n,"Slipped it in his coat. Literature is free."),!0)}function qu(){const n=["CAT","RAIN","BENCH","SODA","MOON","BREAD","COIN","DOG","TRAM","SNOW"];return n[Math.floor(Math.random()*n.length)]+Math.floor(Math.random()*900+100)}const vt={dayLength:180,nightAt:.72,sleepFrom:.6,withdrawalRate:.9,withdrawalDayGrowth:.3,withdrawalHurt:1.5,buzzDecay:.5,whimsyDrain:.3,whimsyDayGrowth:.1,whimsyBase:18,coldHurt:.08,highAt:5,carDamage:25,hungerStart:70,hungerRate:.35,hungerLow:20,hungerHurt:.25,sitDrain:.25,sitHeal:.2,sitGoal:8},Er={beer:{name:"Beer",price:3,buzz:35,wobble:.7,slow:.7},vodka:{name:"Vodka",price:5,buzz:60,wobble:1.6,slow:1.1},wine:{name:"Wine",price:4,buzz:45,wobble:.45,slow:.5},mix:{name:"Mix",price:0,buzz:50,wobble:.15,slow:.4}};function Cm(n,e){const t=Bc(so(n+"#day"+e)),i=t(),s=i<.5?"mild":i<.8?"cold":"rain",r=.2+t()*.8,o=Hu.map((h,u)=>u);for(let h=o.length-1;h>0;h--){const u=Math.floor(t()*(h+1));[o[h],o[u]]=[o[u],o[h]]}const a=8+Math.floor(t()*6),c=["coins","bread","bottle","beer","nothing","blanket","scooter","jokebook"],l=c[Math.floor(t()*c.length)];return{weather:s,generosity:r,bottleSpots:o.slice(0,a),dumpsterFind:l}}const Gc={spray:{name:"Spray a passer-by",where:"sprinkler"},cat:{name:"Pet the cat",where:null},dance:{name:"Dance on the corner",where:"corner"},snack:{name:"Steal a snack",where:"bakery"},bench:{name:"Sing on the bench",where:"bench"}},Im=Object.keys(Gc),C1={car:"A car hit him.",body:"His body gave out.",gaveup:"He gave up.",jail:"The cop caught him. Jail."};function Yu(n,e=null){const t=Cm(n,1);return{seed:n,day:1,time:0,draw:t,rng:so(n+"#rng1"),health:100,withdrawal:30,buzz:0,whimsy:60,bestWhimsy:60,money:1,bottles:0,drinks:{beer:0,vodka:0,wine:0,mix:0},items:{blanket:!1,scooter:!1,goodBlanket:!1,sign:!1,shades:!1,lighter:!1,jokebook:!1},effect:null,bottlesLeft:t.bottleSpots.map(()=>!0),dumpsterUsed:!1,begTimer:0,whimsyToday:{},discovered:[],copAlert:!1,dead:null,messages:[],stash:e,hunger:vt.hungerStart,inv:{cigs:0,treats:0},sitting:!1,sitT:0,usedToday:[],areasToday:[],goals:Vu(n,1),gives:0,own:Xh()}}function I1(n){const e=Yu(n.seed,n.stash);return n.drinks={...e.drinks,...n.drinks??{}},n.items={...e.items,...n.items??{}},n.inv={...e.inv,...n.inv??{}},typeof n.hunger!="number"&&(n.hunger=e.hunger),typeof n.sitT!="number"&&(n.sitT=0),typeof n.sitting!="boolean"&&(n.sitting=!1),Array.isArray(n.usedToday)||(n.usedToday=[]),Array.isArray(n.areasToday)||(n.areasToday=[]),Array.isArray(n.goals)||(n.goals=Vu(n.seed,n.day)),typeof n.gives!="number"&&(n.gives=0),n.own?n.own={...Xh(),...n.own}:(n.own=Xh(),g1(n)),n.bottlesLeft.length!==n.draw.bottleSpots.length&&(n.bottlesLeft=n.draw.bottleSpots.map(()=>!0)),n}function Lm(n){const[e,t]=Bu(n.rng);return n.rng=t,e}const yt=(n,e=0,t=100)=>Math.max(e,Math.min(t,n)),bi=n=>n.buzz>=vt.highAt,Pm=n=>n.time>=vt.nightAt*vt.dayLength,ro=n=>n.time/vt.dayLength;function ct(n,e){n.messages.push(e)}function Yr(n,e){n.dead||(n.dead=e)}function Bt(n,e,t=1){for(const i of n.goals){if(i.done)continue;const s=Gu[i.id];!s||s.ev!==e||(i.got+=t,i.got>=s.n&&(i.done=!0,s.whimsy&&(n.whimsy=yt(n.whimsy+s.whimsy)),s.money&&(n.money+=s.money),n.bestWhimsy=Math.max(n.bestWhimsy,n.whimsy),ct(n,`Goal done: ${s.text}! ${s.whimsy?"+"+s.whimsy+" whimsy":"+$"+s.money}`)))}}function L1(n,e,t){const i=Ms(e,t);return n.areasToday.includes(i)?null:(n.areasToday.push(i),Bt(n,"area"),zc[i].name)}const Mn=(n,e)=>{const t=Fe[e];return Math.hypot(n.x-t.x,n.z-t.z)<=t.r},Ku=(n,e,t)=>e.findIndex(i=>Math.hypot(n.x-i.x,n.z-i.z)<=t),jh=n=>Ku(n,Go,hm)>=0,Dm=n=>Ku(n,Wh,Ob)>=0,km=n=>Object.keys(Of).find(e=>Mn(n,Of[e]))??null;function Nm(n,e){for(let t=0;t<n.draw.bottleSpots.length;t++){if(!n.bottlesLeft[t])continue;const i=Hu[n.draw.bottleSpots[t]];if(Math.hypot(e.x-i.x,e.z-i.z)<=1.6)return t}return-1}const La=(n,e)=>n.usedToday.includes(e);function Um(n){return Mn(n,"bridge")?"bridge":Mn(n,"underpass")?"underpass":Mn(n,"alley")?"alley":jh(n)?"bench":null}function Fm(n,e){const t=[];if(n.dead)return t;const i=bi(n),s=(h,u)=>t.push({id:h,label:u,whimsy:!1});if(n.sitting&&s("stand","Get up"),i)for(const h of Im){const u=Gc[h];let d=!1;h==="cat"?d=!!e.catNear:h==="spray"?d=Mn(e,"sprinkler")&&!!e.pedNear:h==="bench"?d=jh(e):u.where&&(d=Mn(e,u.where)),d&&t.push({id:`whimsy:${h}`,label:u.name,whimsy:!0})}e.ped&&e.ped.asks<=2&&s("beg",`Ask the ${qo[e.ped.kind].name.toLowerCase()}`),Nm(n,e)>=0&&s("pickup","Pick up bottle");const r=km(e);r&&s(`enter:${r}`,"Go in"),Bb.some(h=>Mn(e,h))&&n.bottles>0&&s("recycle",`Recycle ${n.bottles} for $${n.bottles}`),Mn(e,"dumpster")&&!n.dumpsterUsed&&s("dumpster","Dig in dumpster");const o=Ku(e,um,Fb);o>=0&&!La(n,"trash"+o)&&s(`trash:${o}`,"Dig in the trash"),Mn(e,"bakeryBin")&&!La(n,"bakeryBin")&&s("bakeryBin","Check the bakery bin"),n.drinks.beer>0&&n.drinks.vodka>0&&s("mix","Mix beer + vodka"),Um(e)&&ro(n)>=vt.sleepFrom&&s("sleep","Sleep"),jh(e)&&!n.sitting&&s("sit","Sit");for(const h of Hc)Mn(e,h)&&!La(n,h)&&s("pigeons","Feed pigeons");for(const h of zu)Mn(e,h)&&!La(n,h)&&s("tv","Watch TV");if(Mn(e,"stash"))if(n.stash)s("stashTake",`Take ${n.stash} from stash`);else{const h=Om(n);h&&s("stashPut",`Hide ${h} for the next man`)}n.inv.cigs>0&&n.items.lighter&&s("smoke","Smoke");const c=b1(n,e),l=h=>/^own:(grab|steal|getoff)/.test(h.id);return t.unshift(...c.filter(l)),t.push(...c.filter(h=>!l(h))),t}function Om(n){return n.drinks.vodka>0?"vodka":n.drinks.beer>0?"beer":n.items.blanket?"blanket":n.money>=3?"$3":null}function P1(n,e){const t=n.whimsyToday[e]??0,i=n.effect==="mix"?2:1;return Math.round(vt.whimsyBase*Math.pow(.5,t)*i)}function ko(n,e,t=!1){n.hunger=yt(n.hunger+e),Bt(n,"eat"),t&&Bt(n,"eat:hot")}function D1(n){Zt(n,"book_joke",0,0,{},!0)}function k1(n,e,t){if(n.dead||!Fm(n,t).some(i=>i.id===e))return!1;if(e.startsWith("whimsy:")){const i=e.slice(7),s=P1(n,i);return n.whimsy=yt(n.whimsy+s),n.bestWhimsy=Math.max(n.bestWhimsy,n.whimsy),n.whimsyToday[i]=(n.whimsyToday[i]??0)+1,n.discovered.includes(i)||n.discovered.push(i),i==="snack"&&(n.health=yt(n.health+8),ko(n,15),n.copAlert=!0),ct(n,`${Gc[i].name}. +${s} whimsy`),Bt(n,"whimsy"),!0}if(e.startsWith("trash:")){const i=Number(e.slice(6));return n.usedToday.push("trash"+i),Vf(n,Gf(n.seed,n.day,"trash"+i),t.x,t.z),Bt(n,"trash"),!0}if(e.startsWith("enter:"))return!0;if(e.startsWith("own:"))return S1(n,e.slice(4),t);switch(e){case"beg":return!0;case"pickup":{const i=Nm(n,t);return n.bottlesLeft[i]=!1,n.bottles++,ct(n,"Got a bottle."),!0}case"recycle":{const i=n.bottles,s=i*(Vi(n,"scrapper")?2:1);return n.money+=s,ct(n,`Recycled. +$${s}`),n.bottles=0,Bt(n,"recycle",i),!0}case"dumpster":{n.dumpsterUsed=!0;const i=n.draw.dumpsterFind;return i==="coins"?(n.money+=2,ct(n,"Found $2.")):i==="bread"?(n.health=yt(n.health+15),ko(n,25),ct(n,"Old bread. +15 health, +25 food")):i==="bottle"?(n.bottles++,ct(n,"Found a bottle.")):i==="beer"?(n.drinks.beer++,ct(n,"Half a beer. Nice.")):i==="blanket"?Zt(n,"blanket",t.x,t.z):i==="scooter"?Zt(n,"scooter",t.x,t.z):i==="jokebook"&&!n.items.jokebook?D1(n):ct(n,"Nothing."),Vf(n,Gf(n.seed,n.day,"dumpster",!0),t.x,t.z),!0}case"bakeryBin":return n.usedToday.push("bakeryBin"),ko(n,25),ct(n,"Yesterday's bread. Still soft. +25 food"),!0;case"buyBeer":case"buyVodka":return Bm(n,"liquor",e==="buyBeer"?"beer":"vodka");case"mix":return n.drinks.beer--,n.drinks.vodka--,n.drinks.mix++,ct(n,"Mixed them. Smells like trouble."),!0;case"sleep":return Hm(n,Um(t)??"bench"),!0;case"sit":return n.sitting=!0,n.sitT=0,!0;case"stand":return n.sitting=!1,!0;case"pigeons":{const i=Hc.find(s=>Mn(t,s));return n.usedToday.push(i),n.whimsy=yt(n.whimsy+5),ct(n,"He shares his crumbs. The pigeons approve. +5 whimsy"),Bt(n,"pigeons"),!0}case"tv":{const i=zu.find(s=>Mn(t,s));return n.usedToday.push(i),n.whimsy=yt(n.whimsy+4),ct(n,"A cooking show through the glass. Beautiful. +4 whimsy"),Bt(n,"tv"),!0}case"smoke":return n.inv.cigs--,n.whimsy=yt(n.whimsy+6),n.withdrawal=yt(n.withdrawal-8),ct(n,"A slow smoke. The city slows down too."),Bt(n,"smoke"),!0;case"stashPut":{const i=Om(n);return i==="vodka"?n.drinks.vodka--:i==="beer"?n.drinks.beer--:i==="blanket"?vm(n,"blanket"):n.money-=3,n.stash=i,ct(n,`Hid the ${i}.`),!0}case"stashTake":{const i=n.stash;return i==="vodka"?n.drinks.vodka++:i==="beer"?n.drinks.beer++:i==="blanket"?Zt(n,"blanket",t.x,t.z):n.money+=3,n.stash=null,ct(n,`Took the ${i}. Thanks, old friend.`),!0}}return!1}function Vc(n,e){const t=["sad","compliment","howdy","honest"];return n.items.jokebook&&t.splice(3,0,"joke"),Dm(e)&&t.push("door"),t}function N1(n,e,t){var o;if(n.dead||!e.ped||!Vc(n,e).includes(t))return null;const i=e.ped.kind,s=zc[Ms(e.x,e.z)].gen(ro(n)),r=Kb(i,t,{asks:e.ped.asks,generosity:Math.min(1,n.draw.generosity+(Ot(n,"luckyCharm")?.1:0)+(i==="party"&&((o=n.own.gear.body)==null?void 0:o.id)==="jacket"?.2:0)),areaMul:s,sign:h1(n,i),high:bi(n)},n.own.gift?()=>.001:()=>Lm(n));return n.own.gift=!1,t==="door"&&Bt(n,"line:door"),r.outcome==="give"&&(n.gives++,r.money&&(n.money+=r.money),r.food&&ko(n,r.food),Bt(n,"give"),Bt(n,"give:"+i)),r.laughed&&(n.whimsy=yt(n.whimsy+4),Bt(n,"laugh:"+i)),r.outcome==="hate"&&(n.whimsy=yt(n.whimsy-2)),r.callCop&&(n.copAlert=!0),r}function Bm(n,e,t,i={x:0,z:0}){if(n.dead||!pm[e].includes(t))return!1;const s=fm[t],o={lighter:"lighter",sign:"sign",shades:"shades",goodBlanket:"goodBlanket",jokebook:"jokebook"}[t];if(o&&n.items[o])return ct(n,"He already has one."),!1;if(n.money<s.price)return ct(n,"Not enough money."),!1;if(n.money-=s.price,Bt(n,"buy"),t==="beer"||t==="vodka"||t==="wine")n.drinks[t]++,ct(n,`Bought ${s.name.toLowerCase()}.`);else if(s.food)ko(n,s.food,s.hot),t==="soup"&&(n.health=yt(n.health+5)),t==="coffee"&&(n.withdrawal=yt(n.withdrawal-10)),ct(n,`${s.name}. +${s.food} food`);else if(t==="cigs")n.inv.cigs+=5,ct(n,"Five smokes.");else if(t==="treats")n.inv.treats++,ct(n,"Dog treats. For someday.");else if(t==="scratch"){const a=Zb(Lm(n)*(Ot(n,"luckyCharm")?.5:1));a?(n.money+=a,Bt(n,"scratch:win"),ct(n,`Scratch card: WIN $${a}!`)):ct(n,"Scratch card: nothing. Next one, surely.")}else o&&(Zt(n,o==="jokebook"?"book_joke":o,i.x,i.z,{},!0),o!=="jokebook"&&ct(n,`Got the ${s.name.toLowerCase()}.`));return!0}function zm(n){return n.drinks.mix>0?"mix":n.drinks.vodka>0?"vodka":n.drinks.wine>0?"wine":n.drinks.beer>0?"beer":null}function U1(n){if(n.dead)return!1;const e=zm(n);return e?(n.drinks[e]--,n.buzz=yt(n.buzz+Er[e].buzz),n.withdrawal=yt(n.withdrawal-40),e==="mix"&&(n.health=yt(n.health-12)),(!n.effect||Er[e].buzz>=Er[n.effect].buzz||e==="mix")&&(n.effect=e),ct(n,`Drank the ${Er[e].name.toLowerCase()}.`),Bt(n,"drink:"+e),n.health<=0&&Yr(n,"body"),!0):(ct(n,"Nothing to drink."),!1)}function F1(n){const e=n.buzz/100,t=n.effect?Er[n.effect]:Er.beer;let i=5.5*(1-e*.5*t.slow),s=bi(n)?e*t.wobble:0;return n.items.blanket&&!n.items.goodBlanket&&(i*=.85),_1(n,i,s,bi(n))}function Hm(n,e){const t=n.draw.weather==="cold",i=n.draw.weather==="rain";if(n.sitting=!1,e==="street")n.health=yt(n.health-20-(t?10:0)),n.money=Math.floor(n.money/2),ct(n,"He passed out on the street. Someone took his money.");else{const s=e==="bridge"||e==="underpass";let r=e==="bridge"?20:e==="underpass"?17:e==="alley"?12:15;t&&(r=s?8:2),i&&!s&&(r=4),n.items.goodBlanket?r+=20:n.items.blanket&&(r+=12),Ot(n,"sleepingBag")&&(r+=15),Ot(n,"bedroll")&&(r+=18),Ot(n,"tent")&&(r+=15),Vi(n,"snugCamp")&&(r+=15),i&&!s&&(Ot(n,"tent")||Ot(n,"bedroll")||Ot(n,"rainCover"))&&(r+=8),n.health=yt(n.health+r),ct(n,t?"A cold night.":i&&!s?"A wet night.":e==="bridge"?"He slept under the bridge. The river talked all night.":"He slept."),Bt(n,"sleep:"+e)}if(m1(n,e),n.withdrawal=yt(n.withdrawal+15),n.hunger=yt(n.hunger-10),n.health<=0){Yr(n,"body");return}O1(n)}function O1(n){n.day++,n.time=0,n.draw=Cm(n.seed,n.day),n.rng=so(n.seed+"#rng"+n.day),n.buzz=0,n.effect=null,n.bottlesLeft=n.draw.bottleSpots.map(()=>!0),n.dumpsterUsed=!1,n.whimsyToday={},n.begTimer=0,n.usedToday=[],n.areasToday=[],n.goals=Vu(n.seed,n.day),ct(n,`Day ${n.day}. ${Gm(n.draw.weather)}`),p1(n)}function Gm(n){return n==="cold"?"Cold today.":n==="rain"?"Rain today.":"Mild today."}function B1(n,e){if(n.dead)return;const t=n.day-1;n.time+=e,n.begTimer=Math.max(0,n.begTimer-e),bi(n)?n.withdrawal=yt(n.withdrawal-1*e):n.withdrawal=yt(n.withdrawal+vt.withdrawalRate*(1+vt.withdrawalDayGrowth*t)*e),n.buzz=yt(n.buzz-vt.buzzDecay*e),n.buzz<=0&&(n.effect=null);const i=n.sitting?vt.sitDrain:1;if(n.whimsy=yt(n.whimsy-vt.whimsyDrain*(1+vt.whimsyDayGrowth*t)*i*e),n.hunger=yt(n.hunger-vt.hungerRate*e),n.hunger<vt.hungerLow&&(n.health-=vt.hungerHurt*(n.hunger<=0?2.5:1)*e),n.sitting){n.health+=vt.sitHeal*e;const s=n.sitT;n.sitT+=e,s<vt.sitGoal&&n.sitT>=vt.sitGoal&&Bt(n,"sit")}if(n.withdrawal>=100&&(n.health-=vt.withdrawalHurt*e),n.draw.weather==="cold"&&(n.health-=vt.coldHurt*u1(n)*e),n.health=yt(n.health),n.health<=0)return Yr(n,"body");if(n.whimsy<=0)return Yr(n,"gaveup");n.time>=vt.dayLength&&Hm(n,"street")}function z1(n){n.dead||(n.sitting=!1,n.health=yt(n.health-vt.carDamage),ct(n,"A car hit him."),n.health<=0&&Yr(n,"car"))}function H1(n){Yr(n,"jail")}function G1(n){const e=n.items.shades?1:0;return{speed:3.6+.3*(n.day-1),sight:(18+3*(n.day-1))*(1-.3*e)*(x1(n)?1.3:1),drunkRange:(4+1.5*(n.day-1))*(1-.4*e),drunkAt:Math.max(40,70-10*(n.day-1))}}Un.emit=Bt;const Ro={halfW:1.6},qh=zb,fr={go:9,slow:2,stop:7};function V1(n){const e=fr.go+fr.slow+fr.stop,t=(n%e+e)%e;return t<fr.go?"go":t<fr.go+fr.slow?"slow":"stop"}const bn={cruiseMin:6,cruiseMax:8.5,brake:12,accel:4,seeAhead:13,laneHalf:1.9,stopGap:2.6,followGap:5.6,hitLen:2.1,hitWide:1.2,honkAhead:11};function W1(n,e,t,i){let s=n.cruise,r=!1;if(e&&Math.abs(e.z-n.z)<bn.laneHalf){const o=(e.x-n.x)*n.dir;o>0&&o<bn.seeAhead&&(s=Math.min(s,Math.max(0,(o-bn.stopGap)*1.2)),o<bn.honkAhead&&(r=!0))}if(i){const o=(i.x-n.x)*n.dir;o>0&&(s=Math.min(s,Math.max(0,(o-bn.followGap)*1.5)))}if(t!=="go")for(const o of qh){const c=(o-n.dir*(Ro.halfW+2.4)-n.x)*n.dir,l=c>=n.speed*n.speed/(2*bn.brake)-.3;c>=-.2&&c<30&&(t==="stop"||l)&&(s=Math.min(s,Math.max(0,c*1.2)))}return{want:s,honk:r}}function X1(n,e,t){return e<n?Math.max(e,n-bn.brake*t):Math.min(e,n+bn.accel*t)}function $1(n,e){return Math.abs(n.x-e.x)<bn.hitLen&&Math.abs(n.z-e.z)<bn.hitWide}const Yh=3;function j1(n,e,t,i,s=Date.now()){if(n.dead)return null;const r=JSON.parse(JSON.stringify(n));return r.messages=[],r.copAlert=!1,JSON.stringify({v:Yh,s:r,px:e,pz:t,face:i,savedAt:s})}function Vm(n){if(!n)return null;try{const e=JSON.parse(n);return!e||![1,2,Yh].includes(e.v)||!e.s||typeof e.s.seed!="string"||e.s.dead||![e.px,e.pz,e.s.health,e.s.time,e.s.day].every(t=>typeof t=="number"&&isFinite(t))?null:(e.s.messages=[],I1(e.s),e.v=Yh,e)}catch{return null}}function jf(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Jt;let l=0;for(let h=0;h<n.length;++h){const u=n[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0;const u=[];for(let d=0;d<n.length;++d){const p=n[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=qf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][d]);const g=qf(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function qf(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Kt(o,t,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<t;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Yf(n,e){if(e===d0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Fh||e===Lp){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Fh)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class q1 extends io{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Q1(t)}),this.register(function(t){return new eS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new uS(t)}),this.register(function(t){return new nS(t)}),this.register(function(t){return new iS(t)}),this.register(function(t){return new sS(t)}),this.register(function(t){return new rS(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new oS(t)}),this.register(function(t){return new tS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new fS(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Do.extractUrlBase(e);o=Do.resolveURL(l,this.path)}else o=Do.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new om(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Wm){try{o[Ze.KHR_BINARY_GLTF]=new pS(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new AS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:o[u]=new Z1;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new mS(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[u]=new gS;break;case Ze.KHR_MESH_QUANTIZATION:o[u]=new _S;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function Y1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class K1{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Re(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],gn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new cm(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new am(h),l.distance=u;break;case"spot":l=new vb(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ui(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class Z1{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Pn}extendParams(e,t,i){const s=[];e.color=new Re(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],gn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Ut))}return Promise.all(s)}}class J1{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Q1{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(a,a)}return Promise.all(r)}}class eS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class tS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class nS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],gn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ut)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class iS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class sS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],gn),Promise.all(r)}}class rS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class oS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],gn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ut)),Promise.all(r)}}class aS{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class cS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class lS{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class hS{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class uS{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dS{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,s.mode,s.filter),p})})}else return null}}class fS{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==Gn.TRIANGLES&&l.mode!==Gn.TRIANGLE_STRIP&&l.mode!==Gn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(const g of u){const _=new Ne,m=new L,f=new Nn,v=new L(1,1,1),y=new Uc(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(m,f,v));for(const x in c)if(x==="_COLOR_0"){const C=c[x];y.instanceColor=new zh(C.array,C.itemSize,C.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);Ct.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Wm="glTF",wo=12,Kf={JSON:1313821514,BIN:5130562};class pS{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,wo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-wo,r=new DataView(e,wo);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Kf.JSON){const l=new Uint8Array(e,wo+o,a);this.content=i.decode(l)}else if(c===Kf.BIN){const l=wo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Kh[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Kh[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[e.attributes[h]],p=Pr[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(p)},a,l,gn,d)})})}}class gS{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _S{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class Xm extends jo{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(i-t)/h,d=u*u,p=d*u,g=e*l,_=g-l,m=-2*p+3*d,f=p-d,v=1-m,y=f-d+u;for(let x=0;x!==a;x++){const C=o[_+x+a],A=o[_+x+c]*h,R=o[g+x+a],P=o[g+x]*h;r[x]=v*C+y*A+m*R+f*P}return r}}const xS=new Nn;class vS extends Xm{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return xS.fromArray(r).normalize().toArray(r),r}}const Gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zf={9728:$t,9729:Ln,9984:yp,9985:Ha,9986:To,9987:Bi},Jf={33071:us,33648:hc,10497:Br},Ll={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yS={CUBICSPLINE:void 0,LINEAR:Bo,STEP:Oo},Pl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MS(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Nu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xi})),n.DefaultMaterial}function Ps(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ui(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function bS(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function SS(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wS(n){let e;const t=n.extensions&&n.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Dl(t.attributes):e=n.indices+":"+Dl(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Dl(n.targets[i]);return e}function Dl(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Zh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function TS(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ES=new Ne;class AS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Y1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new gb(this.options.manager):this.textureLoader=new bb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new om(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Ps(r,a,s),Ui(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Do.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ll[s.type],a=Pr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Kt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ll[s.type],l=Pr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(d/p),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let y=t.cache.get(v);y||(_=new l(a,f*p,s.count*p/h),y=new Kp(_,p/h),t.cache.add(v,y)),m=new Ho(y,c,d%p/h,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new Kt(_,c,g);if(s.sparse!==void 0){const f=Ll.SCALAR,v=Pr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,C=new v(o[1],y,s.sparse.count*f),A=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new Kt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,P=C.length;R<P;R++){const w=C[R];if(m.setX(w,A[R*c]),c>=2&&m.setY(w,A[R*c+1]),c>=3&&m.setZ(w,A[R*c+2]),c>=4&&m.setW(w,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Zf[d.magFilter]||Ln,h.minFilter=Zf[d.minFilter]||Bi,h.wrapS=Jf[d.wrapS]||Br,h.wrapT=Jf[d.wrapT]||Br,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==$t&&h.minFilter!==Ln,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ht(_);m.needsUpdate=!0,d(m)}),t.load(Do.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Ui(u,o),u.userData.mimeType=o.mimeType||TS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new nm,Kn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new tm,Kn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Nu}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const u=s[Ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],gn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Ut)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=vi);const h=r.alphaMode||Pl.OPAQUE;if(h===Pl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Pl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Pn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ie(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Pn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Pn){const u=r.emissiveFactor;a.emissive=new Re().setRGB(u[0],u[1],u[2],gn)}return r.emissiveTexture!==void 0&&o!==Pn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ut)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Ui(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ps(s,u,r),u})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Qf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=wS(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Qf(new Jt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?MS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=o[p];let f;const v=l[p];if(m.mode===Gn.TRIANGLES||m.mode===Gn.TRIANGLE_STRIP||m.mode===Gn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new QM(_,v):new Je(_,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Gn.TRIANGLE_STRIP?f.geometry=Yf(f.geometry,Lp):m.mode===Gn.TRIANGLE_FAN&&(f.geometry=Yf(f.geometry,Fh));else if(m.mode===Gn.LINES)f=new nb(_,v);else if(m.mode===Gn.LINE_STRIP)f=new Lu(_,v);else if(m.mode===Gn.LINE_LOOP)f=new ib(_,v);else if(m.mode===Gn.POINTS)f=new sb(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&SS(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Ui(f,r),m.extensions&&Ps(s,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Ps(s,u[0],r),u[0];const d=new Oe;r.extensions&&Ps(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new fn(Dp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new kc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ui(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ne;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Iu(a,c)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const p=s.channels[u],g=s.samplers[p.sampler],_=p.target,m=_.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let v=0,y=d.length;v<y;v++){const x=d[v],C=p[v],A=g[v],R=_[v],P=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const w=i._createAnimationTracks(x,C,A,R,P);if(w)for(let b=0;b<w.length;b++)f.push(w[b])}return new Gh(r,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,ES)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Qp:l.length>1?h=new Oe:l.length===1?h=l[0]:h=new Ct,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ui(h,r),r.extensions&&Ps(i,h,r),r.matrix!==void 0){const u=new Ne;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Oe;i.name&&(r.name=s.createUniqueName(i.name)),Ui(r,i),i.extensions&&Ps(t,r,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,p]of s.associations)(d instanceof Kn||d instanceof Ht)&&u.set(d,p);return h.traverse(d=>{const p=s.associations.get(d);p!=null&&u.set(d,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];os[r.path]===os.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(os[r.path]){case os.weights:l=Xr;break;case os.rotation:l=$r;break;case os.position:case os.scale:l=jr;break;default:switch(i.itemSize){case 1:l=Xr;break;case 2:case 3:default:l=jr;break}break}const h=s.interpolation!==void 0?yS[s.interpolation]:Bo,u=this._getArrayFromAccessor(i);for(let d=0,p=c.length;d<p;d++){const g=new l(c[d]+"."+os[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Zh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof $r?vS:Xm;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function RS(n,e,t){const i=e.attributes,s=new mi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){const h=Zh(Pr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,c=new L;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=Zh(Pr[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new wi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Qf(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(const o in i){const a=Kh[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return et.workingColorSpace!==gn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Ui(n,e),RS(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?bS(n,e.targets,t):n})}function CS(n){const e=new Map,t=new Map,i=n.clone();return $m(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function $m(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)$m(n.children[i],e.children[i],t)}const ep=new Map;function ne(n,e=0,t=1){const i=n+":"+e+":"+t;let s=ep.get(i);return s||(s=new Jn({color:n,emissive:e,emissiveIntensity:t}),ep.set(i,s)),s}const Wc=[];function jm(n,e){const t=new Jn({color:n,emissive:e,emissiveIntensity:0});return Wc.push(t),t}function te(n,e,t,i,s=0,r=0,o=0,a=!0){const c=new Je(new Zn(n,e,t),i);return c.position.set(s,r,o),c.castShadow=a,c.receiveShadow=!0,c}function gc(n,e,t,i,s=8){const r=new Je(new yi(n,e,t,s),i);return r.castShadow=!0,r.receiveShadow=!0,r}const IS={"car-sedan":{file:"car-kit/sedan.glb",fit:3.8,axis:"len",rotY:Math.PI/2},"car-taxi":{file:"car-kit/taxi.glb",fit:3.9,axis:"len",rotY:Math.PI/2},"car-van":{file:"car-kit/van.glb",fit:4.1,axis:"len",rotY:Math.PI/2},"car-suv":{file:"car-kit/suv.glb",fit:3.9,axis:"len",rotY:Math.PI/2},"bld-a":{file:"city-kit-commercial/building-a.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-c":{file:"city-kit-commercial/building-c.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-f":{file:"city-kit-commercial/building-f.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-h":{file:"city-kit-commercial/building-h.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-j":{file:"city-kit-commercial/building-j.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-d":{file:"city-kit-commercial/building-d.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-k":{file:"city-kit-commercial/building-k.glb",fit:1,axis:"raw",rotY:Math.PI},"tower-a":{file:"city-kit-commercial/building-skyscraper-a.glb",fit:1,axis:"raw",rotY:Math.PI},"tower-b":{file:"city-kit-commercial/building-skyscraper-b.glb",fit:1,axis:"raw",rotY:Math.PI},pillar:{file:"city-kit-roads/bridge-pillar.glb",fit:3,axis:"h"},dumpster:{file:"city-kit-roads/dumpster.glb",fit:2.4,axis:"len"},lamp:{file:"city-kit-roads/light-square.glb",fit:4.4,axis:"h"},man:{file:"mini-characters/character-male-e.glb",fit:1.75,axis:"h",rotY:Math.PI},cop:{file:"mini-characters/character-male-b.glb",fit:1.9,axis:"h",rotY:Math.PI},"ped-0":{file:"mini-characters/character-female-b.glb",fit:1.7,axis:"h",rotY:Math.PI},"ped-1":{file:"mini-characters/character-male-c.glb",fit:1.75,axis:"h",rotY:Math.PI},"ped-2":{file:"mini-characters/character-female-d.glb",fit:1.7,axis:"h",rotY:Math.PI}},Zu=new Map,Ju=[],LS=n=>Zu.has(n);async function PS(n=8e3){const e=new q1,t=Promise.all(Object.entries(IS).map(async([i,s])=>{try{const r=await e.loadAsync("models/"+s.file),o=r.scene;let a=!1;o.traverse(_=>{const m=_;m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0),_.isSkinnedMesh&&(a=!0,_.frustumCulled=!1)});const c=new Oe;c.add(o),c.rotation.y=s.rotY??0;const l=new Oe;l.add(c),l.updateMatrixWorld(!0);const h=new mi().setFromObject(l),u=h.getSize(new L),d=s.axis==="len"?Math.max(u.x,u.z):s.axis==="h"?u.y:0,p=d>0?s.fit/d:1;c.scale.setScalar(p),l.updateMatrixWorld(!0),h.setFromObject(l);const g=h.getCenter(new L);c.position.set(-g.x,-h.min.y,-g.z),Zu.set(i,{obj:l,clips:r.animations,size:h.getSize(new L),skinned:a}),Ju.push(i)}catch{}}));await Promise.race([t,new Promise(i=>setTimeout(i,n))])}function oo(n){const e=Zu.get(n);return e?{obj:e.skinned?CS(e.obj):e.obj.clone(),clips:e.clips,size:e.size}:null}function ao(n,e){const t=new Oe,i=oo(n);return t.add(i?i.obj:e),t}function kl(n,e,t={}){var m;const i=t.skin??14262906,s=new Oe,r=(f,v,y,x,C)=>{const A=new Oe;return A.position.set(x,C,0),A.add(te(f,v,f,y,0,-v/2,0)),s.add(A),A},o=r(.24,.8,ne(e),-.15,.82),a=r(.24,.8,ne(e),.15,.82);s.add(te(.62,.72,.38,ne(n),0,1.18,0));const c=r(.17,.66,ne(n),-.41,1.5),l=r(.17,.66,ne(n),.41,1.5),h=new Oe;h.position.y=1.78,h.add(te(.42,.42,.42,ne(i),0,0,0)),h.add(te(.3,.07,.04,ne(2759188),0,.05,-.215,!1)),t.hair!==void 0&&h.add(te(.46,.14,.46,ne(t.hair),0,.22,.02)),t.hat!==void 0&&h.add(te(.48,.2,.48,ne(t.hat),0,.27,0)),s.add(h);const u=new Oe,d=t.model?oo(t.model):null;let p=null;const g={};if(d){u.add(d.obj),t.tint!==void 0&&d.obj.traverse(f=>{const v=f;if(v.isMesh){const y=v.material.clone();y.color.set(t.tint),v.material=y}}),p=new Nb(d.obj);for(const f of d.clips)g[f.name]=p.clipAction(f);(m=g.idle)==null||m.play()}else u.add(s);const _=new Oe;return _.add(u),{g:_,body:u,legL:o,legR:a,armL:c,armR:l,head:h,phase:Math.random()*6,mixer:p,acts:g,cur:"idle",oneShot:0,model:!!d}}function qm(n,e,t=.2){var s;if(n.cur===e||!n.acts[e])return;const i=n.acts[e];i.reset().play(),(s=n.acts[n.cur])==null||s.crossFadeTo(i,t,!1),n.cur=e}function Hi(n,e,t=!1){const i=n.acts[e];i&&(i.setLoop(Ip,1),i.clampWhenFinished=t,qm(n,e,.1),n.oneShot=t?999:i.getClip().duration*.9)}function _c(n,e,t){const i=Math.floor(n.phase/Math.PI);if(e>=.2&&(n.phase+=t*(4+e*1.6)),n.mixer)return n.oneShot>0?n.oneShot-=t:(qm(n,e>=.2?e>4.5?"sprint":"walk":"idle"),n.acts.walk&&(n.acts.walk.timeScale=Math.max(.6,e/1.9)),n.acts.sprint&&(n.acts.sprint.timeScale=Math.max(.6,e/5))),n.mixer.update(t),e>=.2&&Math.floor(n.phase/Math.PI)!==i;if(e<.2)return n.legL.rotation.x*=.8,n.legR.rotation.x*=.8,n.armL.rotation.x*=.8,n.armR.rotation.x*=.8,n.body.position.y*=.8,!1;const s=Math.sin(n.phase)*Math.min(.75,.25+e*.12);return n.legL.rotation.x=s,n.legR.rotation.x=-s,n.armL.rotation.x=-s*.8,n.armR.rotation.x=s*.8,n.body.position.y=Math.abs(Math.sin(n.phase))*.11,Math.floor(n.phase/Math.PI)!==i}const Ym=new yi(.36,.36,.28,10);Ym.rotateX(Math.PI/2);function DS(n,e=0){const t=new Oe,i=ne(n),s=ne(2371644),r=e===2,o=r?4:3.6;t.add(te(o,.72,1.8,i,0,.62,0)),r?t.add(te(2.9,1,1.72,i,-.4,1.45,0)):t.add(te(e===1?2.4:1.9,.62,1.62,i,e===1?-.3:-.25,1.28,0));const a=r?2.92:e===1?2.42:1.92;t.add(te(a,.34,1.66,s,r?-.4:e===1?-.3:-.25,r?1.55:1.3,0,!1)),t.add(te(.06,.18,.4,ne(16773808,16773808,.9),o/2+.01,.72,.6,!1)),t.add(te(.06,.18,.4,ne(16773808,16773808,.9),o/2+.01,.72,-.6,!1));const c=new Jn({color:7344144,emissive:16719904,emissiveIntensity:.15});t.add(te(.06,.18,.36,c,-o/2-.01,.75,.62,!1)),t.add(te(.06,.18,.36,c,-o/2-.01,.75,-.62,!1));const l=[],h=ne(1710618);for(const m of[o/2-.8,-o/2+.8])for(const f of[.86,-.86]){const v=new Je(Ym,h);v.position.set(m,.36,f),v.castShadow=!0,t.add(v),l.push(v)}const u=["car-sedan","car-taxi","car-van","car-suv"][e%4],d=oo(u);if(!d)return{g:ao("none",t),wheels:l,brake:c,spin:"z",spinSign:-1};const p=new Oe;p.add(d.obj);const g=d.size.x/2;p.add(te(.06,.16,.34,c,-g-.02,.8,.55,!1)),p.add(te(.06,.16,.34,c,-g-.02,.8,-.55,!1));const _=[];return d.obj.traverse(m=>{m.name.startsWith("wheel")&&_.push(m)}),{g:p,wheels:_,brake:c,spin:"x",spinSign:1}}function Ds(n,e,t=1){const i=new Oe,s=gc(.18,.26,1.6,ne(6965806),6);s.position.y=.8,i.add(s);const r=ne(4165434),o=new Je(new mc(1.4,0),r);o.position.y=2.6;const a=new Je(new mc(1,0),ne(5416517));a.position.set(.3,3.5,.2);for(const l of[o,a])l.castShadow=!0,l.receiveShadow=!0,i.add(l);const c=ao("none",i);return c.position.set(n,0,e),c.scale.setScalar(t),c.rotation.y=n*1.3,c}const Km=new Pn({color:16760944,transparent:!0,opacity:0,blending:lc,depthWrite:!1}),kS=Km;function tp(n,e,t){const i=new Oe,s=gc(.08,.11,4.2,ne(3027512),6);s.position.y=2.1,i.add(s),i.add(te(.12,.12,1.2,ne(3027512),0,4.15,t*.55));const r=jm(16773312,16765056);i.add(te(.4,.16,.4,r,0,4,t*1.1,!1));const o=oo("lamp");let a;o?(a=new Oe,o.obj.rotation.y=t>0?Math.PI:0,a.add(o.obj),a.add(te(.36,.1,.36,r,0,o.size.y-.32,t*(o.size.z-.25),!1))):a=ao("none",i),a.position.set(n,0,e);const c=new Je(new Wr(2.6,16),Km);return c.rotation.x=-Math.PI/2,c.position.set(n,.23,e+t*1.1),{g:a,pool:c}}function NS(){const n=new Oe;n.add(te(2.4,1.3,1.4,ne(3111482),0,.75,0));const e=te(2.5,.12,1.5,ne(2317356),0,1.45,.08);e.rotation.x=-.12,n.add(e);for(const t of[-1,1])n.add(te(.12,.2,.12,ne(2236962),t*1,.1,0));return ao("dumpster",n)}function US(){const n=new Oe,e=ne(10118192);n.add(te(3,.12,.8,e,0,.5,0)),n.add(te(3,.55,.1,e,0,.9,-.38));for(const t of[-1.3,1.3])n.add(te(.1,.5,.7,ne(2763306),t,.25,0));return ao("none",n)}function FS(){const n=new Oe,e=new Jn({color:4182112,emissive:1731114,emissiveIntensity:.6}),t=gc(.14,.14,.42,e,6);t.position.y=.21;const i=gc(.05,.08,.18,e,6);return i.position.y=.5,n.add(t,i),n.rotation.z=Math.PI/2.4,n}function OS(){const n=new Oe,e=ne(14715424);n.add(te(.3,.26,.62,e,0,.3,0)),n.add(te(.26,.24,.24,e,0,.48,-.36)),n.add(te(.07,.1,.05,e,-.08,.64,-.38)),n.add(te(.07,.1,.05,e,.08,.64,-.38));const t=te(.07,.07,.45,e,0,.45,.48);t.rotation.x=.7,n.add(t);for(const i of[-.1,.1])for(const s of[-.22,.22])n.add(te(.07,.2,.07,e,i,.1,s));return ao("none",n)}const np=jm(3820134,16762730),BS=new Zn(1,1,.08),Ya=[];function Jh(n,e,t,i,s){Ya.push(new Ne().compose(new L(n,e,t),new Nn,new L(i,s,1)))}function zS(){const n=new Uc(BS,np,Ya.length);Ya.forEach((i,s)=>n.setMatrixAt(s,i));const e=new Re(1,1,1),t=new Re(.97,.97,.97);return Ya.forEach((i,s)=>n.setColorAt(s,Math.random()<.55?e:t)),np.onBeforeCompile=i=>{i.fragmentShader=i.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_COLOR
 totalEmissiveRadiance *= step(0.985, vColor.r);
#endif`)},n}function HS(n,e,t){const i=document.createElement("canvas");i.width=256,i.height=64;const s=i.getContext("2d");s.fillStyle=e,s.fillRect(0,0,256,64),s.fillStyle=t,s.font="bold 40px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(n,128,34);const r=new Fc(i);return r.colorSpace=Ut,r}const Zm=["bld-a","bld-c","bld-f","bld-h","bld-j","bld-d","bld-k"],GS=["tower-a","tower-b"];function VS(n,e,t,i,s=Zm){const r=s.filter(LS);if(!r.length)return null;const o=new Oe,a=e-n,c=Math.max(1,Math.round(a/6.5));for(let l=0;l<c;l++){const h=oo(r[(i+l*2)%r.length]),u=a/c,d=u/h.size.x;h.obj.scale.setScalar(d),h.obj.position.set(n+(l+.5)*u,0,t+h.size.z*d/2),o.add(h.obj)}return o}function si(n,e,t,i,s,r,o=0,a="kit"){const c=a==="plain"?null:VS(n,e,t,o,a==="tower"?GS:Zm),l=new Oe,h=e-n;if(c)return l.add(c),l.add(te(h*.96,s*.55,(i-t)*.5,ne(r),(n+e)/2,s*.275,i-(i-t)*.25)),l.userData.kit=!0,l;l.add(te(h,s,i-t,ne(r),(n+e)/2,s/2,(t+i)/2)),l.add(te(h+.2,.3,i-t+.2,ne(5263450),(n+e)/2,s+.15,(t+i)/2));const u=Math.max(1,Math.floor(h/2.6));for(let d=3.4;d<s-1;d+=2.8)for(let p=0;p<u;p++)Jh(n+(p+.5)*(h/u),d+.6,t-.03,1.1,1.3);return l}function pr(n,e,t,i,s,r,o,a,c,l,h=0,u="kit"){const d=si(n,e,t,i,s,r,h,u),p=e-n,g=(n+e)/2;d.userData.kit||(Jh(g-p*.22,1.35,t-.03,p*.38,1.6),Jh(g+p*.28,1.35,t-.03,p*.26,1.6),d.add(te(1.1,2.1,.1,ne(3810328),g+p*.02,1.05,t-.04,!1)));const _=Math.max(4,Math.round(p/.9)),m=new Oe;for(let x=0;x<_;x++)m.add(te(p/_+.01,.08,1.6,ne(x%2?o:a),n+(x+.5)*(p/_),0,0,!0));m.position.set(0,2.75,t-.8),m.rotation.x=-.32,d.add(m);const f=HS(c,l,"#fff"),v=new Jn({map:f,emissive:16777215,emissiveIntensity:0,emissiveMap:f});Wc.push(v);const y=new Je(new qi(Math.min(p*.7,6),1.2),v);return y.position.set(g,3.55,t-.25),y.rotation.y=Math.PI,d.add(y),d}function Nl(n,e){const t=document.createElement("canvas");t.width=256,t.height=64;const i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,256,64),i.fillStyle="#fff",i.font="bold 30px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,128,34);const s=new Jp(new Cu({map:new Fc(t)}));return s.scale.set(3,.75,1),s}function ip(n){const e=new Oe,t=ne(1710618);for(const s of[-.55,.55]){const r=new Je(new ku(.36,.05,6,16),t);r.rotation.y=Math.PI/2,r.position.set(0,.38,s),e.add(r)}const i=ne(n);return e.add(te(.06,.06,1.1,i,0,.62,0)),e.add(te(.06,.5,.06,i,0,.6,-.25)),e.add(te(.2,.06,.3,ne(2236962),0,.88,-.25)),e.add(te(.55,.05,.05,ne(3355443),0,.98,.5)),e}function WS(){const n=new Oe;n.add(te(.32,.05,1,ne(14174762),0,.12,0));for(const e of[-.35,.35])n.add(te(.3,.08,.08,ne(15658734),0,.05,e));return n}class XS{constructor(e,t){this.ground=new Oe,this.groundKey="",this.rackBikes=[],this.parked={},this.under={},e.add(this.ground);const i=Lr.pawn,s=Nl("PAWN","#7a2a8a");s.position.set(i.x,3.6,i.z+1),e.add(s);const r=Lr.books,o=new Oe;o.add(te(1.6,.7,.8,ne(6965802),0,.6,0)),[13126202,3828424,15255626,4892778,9063112].forEach((u,d)=>o.add(te(.22,.32,.6,ne(u),-.6+d*.3,1.1,0))),o.position.set(r.x,0,r.z+1.2),e.add(o);const c=Nl("USED BOOKS","#3a5a3a");c.position.set(r.x,2.2,r.z+1.2),e.add(c);const l=Lr.library;e.add(te(.12,1.1,.12,ne(5913114),l.x,.55,l.z)),e.add(te(.7,.6,.5,ne(3832520),l.x,1.35,l.z));const h=Nl("FREE BOOKS","#3a7ac8");h.position.set(l.x,2.2,l.z),h.scale.set(2,.5,1),e.add(h),$u.forEach((u,d)=>{e.add(te(1.6,.06,.06,ne(8947848),u.x,.7,u.z));const p=ip([2788056,14170682,3848282,15249450][d%4]);p.rotation.y=Math.PI/2,p.position.set(u.x,0,u.z),e.add(p),this.rackBikes.push(p)});for(const u of["skateboard","scooter","bike"]){const d=()=>u==="bike"?ip(2788056):u==="skateboard"?WS():(()=>{const p=new Oe;return p.add(te(.28,.08,1.1,ne(2276266),0,.1,0)),p.add(te(.06,1,.06,ne(3355443),0,.6,-.5)),p})();this.parked[u]=d(),this.parked[u].visible=!1,e.add(this.parked[u]),u!=="scooter"&&(this.under[u]=d(),this.under[u].visible=!1,t.add(this.under[u]))}}update(e,t){const i=e.own,s=i.ground.map(r=>r.id+r.x.toFixed(1)+r.z.toFixed(1)).join("|");if(s!==this.groundKey){this.groundKey=s,this.ground.clear();for(const r of i.ground){const o=mm[ke[r.id].rarity],a=te(.4,.3,.4,ne(o,o,.6),r.x,.2,r.z),c=new Je(new Wr(.75,20),new Pn({color:o,transparent:!0,opacity:.45,depthWrite:!1,blending:lc}));c.rotation.x=-Math.PI/2,c.position.set(r.x,.03,r.z),this.ground.add(a,c)}}this.ground.children.forEach((r,o)=>{o%2===0?(r.position.y=.25+Math.sin(t*3+o)*.08,r.rotation.y=t):r.scale.setScalar(1+Math.sin(t*4+o)*.15)}),this.rackBikes.forEach((r,o)=>r.visible=wm(e,o));for(const r of Object.keys(this.parked)){const o=!!i.ride&&i.ride.id===r;this.parked[r].visible=o&&!i.riding&&!!i.parked,this.parked[r].visible&&this.parked[r].position.set(i.parked.x,0,i.parked.z),this.under[r]&&(this.under[r].visible=o&&i.riding)}}}const xc=[{id:"sign",out:"sign",need:["cardboard","marker"]},{id:"tent",out:"tent",need:["tarp","pole","pole"]},{id:"stove",out:"stove",need:["can","candle"],book:"cook"},{id:"cart",out:"cart",need:["crate","trolley"]},{id:"skateboard",out:"skateboard",need:["plank","wheel"]},{id:"necklace",out:"necklace",need:["caps","string"]},{id:"rainCover",out:"rainCover",need:["umbrella","tape"]},{id:"chime",out:"chime",need:["can","string"]},{id:"bedroll",out:"bedroll",need:["blanket","tarp"]},{id:"hotStew",out:"hotStew",need:["beans","bread"],tool:"stove",book:"cook"}],sp=["He tapes it together. It falls apart. He tapes it again. Art.","That is now a worse version of two things.","He stares at it. It stares back. Nothing happens.","A pigeon watches. The pigeon is not impressed.","It is a hat now? No. It is nothing.","He invents something. Nobody, including him, knows what.","Close. Very close. Also, completely wrong."];function Jm(n){return xc.filter(e=>e.id==="sign"||e.book&&On(n,e.book)||n.own.known.includes(e.id))}const Ul=n=>[...n].sort().join("+");function $S(n){const e=Ul(n);return xc.find(t=>Ul(t.need)===e||t.tool&&Ul([...t.need,t.tool])===e)??null}function Qm(n,e){const t=[...n.own.bag,...Dn.map(s=>n.own.gear[s]).filter(s=>!!s)],i=[];for(const s of e){const r=t.findIndex(o=>o.id===s&&!i.includes(o));if(r<0)return null;i.push(t[r])}return i}function eg(n,e,t=0,i=0){if(n.dead||e.length<2)return{ok:!1,line:"He needs at least two things."};const s=Qm(n,e);if(!s)return{ok:!1,line:"He doesn't have all that."};const r=$S(e);if(!r){const h=sp[Math.floor(an(n)*sp.length)];return n.messages.push(h),{ok:!1,line:h}}const o=r.tool?Wu(n,r.tool):void 0;if(r.tool&&!o){const h=`So close. He needs a ${ke[r.tool].name.toLowerCase()} for that.`;return n.messages.push(h),{ok:!1,line:h}}const a=n.own;for(const h of s){if(h===o)continue;const u=a.bag.indexOf(h);u>=0&&a.bag.splice(u,1);for(const d of Dn)a.gear[d]===h&&delete a.gear[d]}o&&Mi(n,o);const c=!Jm(n).includes(r);a.known.includes(r.id)||a.known.push(r.id);const l=r.out==="sign"?{text:$h[Math.floor(an(n)*$h.length)].text}:{};return n.messages.push(`Made: ${ke[r.out].name}${"text"in l?` ("${l.text}")`:""}.${c?" New recipe!":""}`),Zt(n,r.out,t,i,l,!0),Un.emit(n,"craft"),mn(n),{ok:!0,out:r.out,recipe:r}}const jS=(n,e)=>!!Qm(n,e.need)&&(!e.tool||Ot(n,e.tool)),qS=n=>!!n&&/^(bag|craft|pawn|books|steal:\d+)$/.test(n),YS=n=>"#"+n.toString(16).padStart(6,"0"),_r=n=>YS(mm[ke[n].rarity]);let nn=null,Hn=[],Pa="";const KS=`
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
#bagBtn svg{width:22px;height:22px}`;function ZS(n){var s;const e=document.createElement("style");e.textContent=KS,document.head.appendChild(e);const t=document.createElement("div");t.id="combo",document.body.appendChild(t);const i=document.createElement("div");i.className="tbtn",i.id="bagBtn",i.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M6 8h12l-1 13H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',i.addEventListener("pointerdown",r=>{r.preventDefault(),n()}),(s=document.getElementById("pauseBtn"))==null||s.before(i)}function JS(n){const e=document.getElementById("combo");if(!e)return;const[t,i]=n.replace("Combo! ","").split(": ");e.innerHTML=`COMBO! ${t}<small>${i??""}</small>`,e.classList.remove("go"),e.offsetWidth,e.classList.add("go")}function un(n,e){n.addEventListener("pointerdown",t=>{t.preventDefault(),e()})}function rp(n,e,t){if(!n)return`<div class="ocell"><span class="sl">${e}</span></div>`;const i=ke[n.id],s=Math.max(0,Math.min(1,n.dur/i.dur));return`<div class="ocell${t?" on":""}" style="border-color:${_r(n.id)}"><span class="sl">${e}</span>${i.name}${n.wet?" (wet)":""}<span class="du"><i style="width:${s*100}%;background:${s<.3?"#f66":"#9f9"}"></i></span></div>`}function QS(n,e,t,i){const s=e==="bag"||e==="craft"?`<div class="otabs"><div class="otab${e==="bag"?" on":""}" data-k="bag">Bag</div><div class="otab${e==="craft"?" on":""}" data-k="craft">Craft</div></div>`:"",r=e==="bag"?`Bag ${t.own.bag.length}/${qr(t)}`:e==="craft"?"Craft":e==="pawn"?"Pawn shop":e==="books"?"Used books":"The lock";n.innerHTML=`<div class="shead"><b>${r}</b><span class="smoney">$${t.money}</span></div>${s}<div class="slist"></div><button class="sclose">Done</button>`;const o=n.querySelector(".slist");un(n.querySelector(".sclose"),()=>{nn=null,Hn=[],Pa="",i.close()}),n.querySelectorAll(".otab").forEach(p=>un(p,()=>i.open(p.dataset.k)));const a=(p,g="pop")=>{i.sound(p?g:"nope"),i.flush(),i.rerender()},{x:c,z:l}=i.pos();if(e==="bag"){const p=t.own,g=Dn.map(C=>rp(p.gear[C],C,nn===C)).join(""),_=Array.from({length:qr(t)},(C,A)=>rp(p.bag[A],"",nn===A)).join(""),m=typeof nn=="number"?p.bag[nn]:nn?p.gear[nn]:void 0;let f='<div class="odet" style="opacity:.6">Tap a thing.</div>';if(m){const C=ke[m.id];f=`<div class="odet"><b style="color:${_r(m.id)}">${C.name}</b> <span style="opacity:.6">${C.rarity}</span><br>${C.desc}<br><i>${C.effect}</i>${m.text?`<br>Says: "${m.text}"`:""}<br><span style="opacity:.6">Wear ${m.dur}/${C.dur}</span>
        <div class="obtns">${typeof nn=="number"?`<button data-a="use">${C.slot?"Equip":C.book?"Read":"Use"}</button>`:'<button data-a="off">Take off</button>'}<button data-a="drop">Drop</button></div></div>`}const v=p.ride?`<div class="orec">Ride: <b>${ke[p.ride.id].name}</b> (${p.riding?"riding":p.locked?"parked, locked":"parked, unlocked"}) wear ${p.ride.dur}/${ke[p.ride.id].dur}</div>`:"",y=p.books.length?p.books.map(C=>`<span class="otag">${ke[Xs[C]].name}</span>`).join(""):'<span style="opacity:.5">None read yet.</span>',x=p.combos.length?p.combos.map(C=>{const A=_m.find(R=>R.id===C);return`<span class="otag">${A.name}: ${A.text}</span>`}).join(""):'<span style="opacity:.5">None yet. Some pairs do more together.</span>';o.innerHTML=`<div class="ohead">Worn</div><div class="ogrid gear">${g}</div><div class="ohead">Bag</div><div class="ogrid bag">${_}</div>${f}${v}<div class="ohead">Books read</div><div>${y}</div><div class="ohead">Combos</div><div>${x}</div>`,o.querySelectorAll(".gear .ocell").forEach((C,A)=>un(C,()=>{nn=p.gear[Dn[A]]?Dn[A]:null,i.rerender()})),o.querySelectorAll(".bag .ocell").forEach((C,A)=>un(C,()=>{nn=p.bag[A]?A:null,i.rerender()})),o.querySelector("[data-a=use]")&&un(o.querySelector("[data-a=use]"),()=>{const C=Mm(t,nn,i.pedNear());nn=null,a(C,"sparkle")}),o.querySelector("[data-a=off]")&&un(o.querySelector("[data-a=off]"),()=>{const C=r1(t,nn);nn=null,a(C)}),o.querySelector("[data-a=drop]")&&un(o.querySelector("[data-a=drop]"),()=>{const C=o1(t,nn,c,l);nn=null,a(C)});return}if(e==="craft"){const p=[...t.own.bag.map(y=>y.id),...Dn.map(y=>{var x;return(x=t.own.gear[y])==null?void 0:x.id}).filter(y=>!!y)],g=[...p];for(const y of Hn){const x=g.indexOf(y);x>=0?g.splice(x,1):Hn=[]}const _=p.map((y,x)=>`<span class="ochip${Hn.filter(C=>C===y).length>p.slice(0,x).filter(C=>C===y).length?" on":""}" data-i="${x}" style="border-color:${_r(y)}">${ke[y].name}</span>`).join(""),m=Jm(t),f=m.map(y=>`<div class="orec${jS(t,y)?"":" no"}" data-r="${y.id}">${y.need.map(x=>ke[x].name).join(" + ")}${y.tool?` (with ${ke[y.tool].name.toLowerCase()})`:""} = <b>${ke[y.out].name}</b></div>`).join(""),v=xc.length-m.length;o.innerHTML=`<div class="ohead">Pick things to combine</div><div>${_||'<span style="opacity:.5">Nothing to work with. Dig in the trash.</span>'}</div>
      <button class="obtn" data-a="make">Make it (${Hn.length})</button>${Pa?`<div class="odet">${Pa}</div>`:""}
      <div class="ohead">Recipes he knows</div>${f}<div class="orec no">${v} more to find: books, or trying.</div>`,o.querySelectorAll(".ochip").forEach(y=>un(y,()=>{const x=p[Number(y.dataset.i)],C=Hn.filter(A=>A===x).length;y.classList.contains("on")?Hn.splice(Hn.lastIndexOf(x),1):C<p.filter(A=>A===x).length&&Hn.push(x),i.rerender()})),o.querySelectorAll(".orec[data-r]").forEach(y=>un(y,()=>{Hn=[...xc.find(C=>C.id===y.dataset.r).need],i.rerender()})),un(o.querySelector("[data-a=make]"),()=>{const y=eg(t,Hn,c,l);Pa=y.ok?`Made: <b>${ke[y.out].name}</b>`:y.line,Hn=[],a(y.ok,"sparkle")});return}if(e==="pawn"){const p=t.own.bag.map((_,m)=>`<div class="srow" data-s="${m}"><div><div class="sname" style="color:${_r(_.id)}">${ke[_.id].name}</div><div class="snote">Sell</div></div><div class="sbuy">+$${Math.round(ke[_.id].value*(_.wet?.5:1)*Math.max(.4,_.dur/ke[_.id].dur))}</div></div>`).join(""),g=Am.map((_,m)=>`<div class="srow${t.money<_.price?" poor":""}" data-b="${m}"><div><div class="sname" style="color:${_r(_.id)}">${ke[_.id].name}</div><div class="snote">${ke[_.id].effect}</div></div><div class="sbuy">$${_.price}</div></div>`).join("");o.innerHTML=`<div class="sgreet">"Everything has a price. Even that."</div><div class="ohead">Sell from the bag</div>${p||'<div style="opacity:.5">Nothing in the bag.</div>'}<div class="ohead">Buy</div>${g}`,o.querySelectorAll("[data-s]").forEach(_=>un(_,()=>a(Rm(t,Number(_.dataset.s)),"clink"))),o.querySelectorAll("[data-b]").forEach(_=>un(_,()=>a(E1(t,Number(_.dataset.b),c,l))));return}if(e==="books"){o.innerHTML='<div class="sgreet">"Fifty cents a page. Kidding. Mostly."</div>'+ju.map((p,g)=>{const _=Xs[p.book];return`<div class="srow"><div><div class="sname" style="color:${_r(_)}">${ke[_].name}${t.own.books.includes(p.book)?" (read)":""}</div><div class="snote">${ke[_].effect}</div></div><div style="display:flex;gap:6px"><button class="obtn" data-b="${g}">$${p.price}</button><button class="obtn" data-t="${g}" style="background:#c44;color:#fff">Steal</button></div></div>`}).join(""),o.querySelectorAll("[data-b]").forEach(p=>un(p,()=>a(A1(t,Number(p.dataset.b),c,l),"sparkle"))),o.querySelectorAll("[data-t]").forEach(p=>un(p,()=>a(R1(t,Number(p.dataset.t),c,l),"sparkle")));return}const h=Number(e.slice(6)),d=(1-Tm(t))/2;o.innerHTML=`<div class="sgreet">Tap when the marker is in the green. Quick, people are walking by.</div>
    <div class="obar"><div class="zone" style="left:${(.5-d)*100}%;width:${d*200}%"></div><div class="mk"></div></div><button class="obtn" data-a="pick">Now!</button>`,un(o.querySelector("[data-a=pick]"),()=>{const p=o.querySelector(".obar").getBoundingClientRect(),g=o.querySelector(".mk").getBoundingClientRect(),_=(g.left+g.width/2-p.left)/p.width,m=Em(t,h,1-Math.abs(_-.5)*2);i.sound(m==="got"?"sparkle":"nope"),i.flush(),i.close()})}let Rt=null,Wi=null,Qh=null,Xc=!1;const Ka=[];function ew(){try{if(!Rt){const n=window.AudioContext||window.webkitAudioContext;if(!n)return;Rt=new n,Wi=Rt.createGain(),Wi.gain.value=Xc?0:.55,Wi.connect(Rt.destination),Qh=Rt.createBuffer(1,Rt.sampleRate,Rt.sampleRate);const e=Qh.getChannelData(0);for(let i=0;i<e.length;i++)e[i]=Math.random()*2-1;const t=Rt.createBufferSource();t.buffer=Rt.createBuffer(1,1,22050),t.connect(Rt.destination),t.start(0)}Rt.state==="suspended"&&Rt.resume()}catch{}}function tw(){try{Rt&&Rt.state==="running"&&Rt.suspend()}catch{}}function tg(n){Xc=n,Wi&&(Wi.gain.value=n?0:.55)}const Da=()=>Xc,nw=()=>Rt?Rt.state:"none";function Xt(n,e,t,i,s,r,o){const a=Rt,c=a.createOscillator(),l=a.createGain();return c.type=n,c.frequency.setValueAtTime(e,i),t!==e&&c.frequency.exponentialRampToValueAtTime(Math.max(1,t),i+s),l.gain.setValueAtTime(1e-4,i),l.gain.exponentialRampToValueAtTime(r,i+Math.min(.012,s/4)),l.gain.exponentialRampToValueAtTime(1e-4,i+s),c.connect(l).connect(o??Wi),c.start(i),c.stop(i+s+.02),c}function Fl(n,e,t,i,s,r=1){const o=Rt,a=o.createBufferSource();a.buffer=Qh;const c=o.createBiquadFilter();c.type=i,c.frequency.value=s,c.Q.value=r;const l=o.createGain();l.gain.setValueAtTime(t,n),l.gain.exponentialRampToValueAtTime(1e-4,n+e),a.connect(c).connect(l).connect(Wi),a.start(n,Math.random()*.5),a.stop(n+e+.02)}function Ge(n,e={}){if(Ka.push({name:n,t:performance.now()}),Ka.length>60&&Ka.shift(),!Rt||!Wi||Rt.state!=="running"||Xc)return;const t=Rt.currentTime+.005,i=e.pitch??1,s=e.vol??1;switch(n){case"step":Fl(t,.05,.12*s,"bandpass",900*i,2),Xt("sine",140*i,90*i,t,.05,.08*s);break;case"coin":Xt("square",988,988,t,.07,.12*s),Xt("square",1319,1319,t+.07,.22,.12*s);break;case"clink":Xt("sine",2650*i,2600*i,t,.35,.16*s),Xt("sine",3910*i,3900*i,t,.22,.08*s),Xt("sine",2650*i*1.06,2600*i,t+.09,.25,.1*s);break;case"gulp":for(let r=0;r<3;r++)Xt("sine",320-r*30,120,t+r*.17,.13,.35*s);Fl(t+.52,.12,.08,"lowpass",600);break;case"horn":{const r=Rt.createBiquadFilter();r.type="lowpass",r.frequency.value=1400,r.connect(Wi),Xt("sawtooth",349*i,349*i,t,.38,.12*s,r),Xt("sawtooth",440*i,440*i,t,.38,.1*s,r);break}case"hit":Fl(t,.35,.6*s,"lowpass",1800),Xt("sine",120,40,t,.35,.6*s),Xt("square",70,50,t,.12,.2*s);break;case"whistle":{const r=Xt("sine",2900,2900,t,.6,.18*s),o=Rt.createOscillator(),a=Rt.createGain();o.frequency.value=28,a.gain.value=220,o.connect(a).connect(r.frequency),o.start(t),o.stop(t+.62);break}case"sparkle":{[1047,1319,1568,2093,2637].forEach((o,a)=>Xt("triangle",o*i,o*i,t+a*.055,.28,.1*s));break}case"heart":Xt("sine",62,45,t,.14,.55*s),Xt("sine",58,42,t+.2,.16,.4*s);break;case"pop":Xt("sine",500*i,1100*i,t,.09,.2*s);break;case"tap":Xt("triangle",660,660,t,.05,.08*s);break;case"nope":Xt("square",220,160,t,.15,.08*s);break}}const vc=[{rows:240,shadow:0,glow:!1},{rows:320,shadow:512,glow:!0},{rows:420,shadow:1024,glow:!0}],iw=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,sw=`
uniform sampler2D tScene;
uniform vec2 res;
uniform float scale;
uniform float sat, warm, contrast, glow, red, jitter, time, bright;
uniform sampler2D tDepth;
uniform float cnear, cfar, flood, tilt, outline;
uniform vec3 pal[5];
varying vec2 vUv;
vec3 tap(vec2 p) { return texture2D(tScene, p).rgb; }
float lin(vec2 p) { float d = texture2D(tDepth, p).x; float z = d * 2.0 - 1.0; return 2.0 * cnear * cfar / (cfar + cnear - z * (cfar - cnear)); }
void main() {
  // One low-res pixel = scale x scale screen pixels, counted from the top-left, so every pixel is the same size.
  vec2 cell = floor(gl_FragCoord.xy / scale);
  if (jitter > 0.0) cell += floor(jitter * vec2(sin(time * 53.0), cos(time * 41.0)) + 0.5);
  vec2 px = (cell + 0.5) / res; // nearest pixel: the chunky look
  vec3 c = tap(px);
  vec2 o1 = 1.0 / res;
  // Tilt-shift: blur only the top and bottom bands (the miniature look). The middle stays crisp.
  float tb = tilt * smoothstep(0.3, 0.5, abs(vUv.y - 0.5));
  if (tb > 0.01) {
    vec3 bl = tap(px + vec2(1.0, 0.0) * o1) + tap(px - vec2(1.0, 0.0) * o1) + tap(px + vec2(0.0, 1.0) * o1) + tap(px - vec2(0.0, 1.0) * o1)
            + tap(px + vec2(2.0, 2.0) * o1) + tap(px - vec2(2.0, 2.0) * o1) + tap(px + vec2(2.0, -2.0) * o1) + tap(px - vec2(2.0, -2.0) * o1);
    c = mix(c, bl / 8.0, tb);
  }
  // Thin warm outlines: where this pixel is clearly nearer than a neighbour (a silhouette), darken it warm.
  if (outline > 0.0) {
    float d0 = lin(px);
    if (d0 < 34.0) {
      float dm = max(max(lin(px + vec2(o1.x, 0.0)), lin(px - vec2(o1.x, 0.0))), max(lin(px + vec2(0.0, o1.y)), lin(px - vec2(0.0, o1.y))));
      float e = smoothstep(0.06, 0.14, (dm - d0) / d0) * (1.0 - smoothstep(22.0, 34.0, d0));
      c = mix(c, c * vec3(0.28, 0.16, 0.1), e * outline);
    }
  }
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
  // The high: flood the town with the candy palette, banded by brightness and cycling over time (Mark Ferrari).
  if (flood > 0.0) {
    float k = mod(floor(l * 5.0 + time * 0.9), 5.0);
    vec3 pc = pal[0];
    if (k > 0.5) pc = pal[1];
    if (k > 1.5) pc = pal[2];
    if (k > 2.5) pc = pal[3];
    if (k > 3.5) pc = pal[4];
    c = mix(c, pc * (0.55 + l * 0.75), flood * 0.42);
  }
  c *= mix(vec3(0.93, 0.98, 1.07), vec3(1.08, 1.0, 0.88), warm);
  vec2 d = vUv - 0.5;
  float v = dot(d, d);
  c *= 1.0 - v * 0.35;
  c = mix(c, vec3(0.32, 0.0, 0.02), clamp(red * smoothstep(0.06, 0.3, v) * 1.2, 0.0, 0.9));
  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}
`;class rw{constructor(e){this.renderer=e,this.qScene=new Yp,this.qCam=new kc(-1,1,1,-1,0,1),this.rows=420,this.scale=2,this.lowW=1,this.lowH=1,this.rt=new ys(4,4,{minFilter:$t,magFilter:$t,type:Qr,depthBuffer:!0}),this.u={tScene:{value:this.rt.texture},res:{value:new Ie(4,4)},sat:{value:1},warm:{value:0},contrast:{value:1},glow:{value:0},red:{value:0},jitter:{value:0},time:{value:0},bright:{value:1},scale:{value:2},tDepth:{value:null},cnear:{value:.1},cfar:{value:160},flood:{value:0},tilt:{value:0},outline:{value:0},pal:{value:[16735370,16758784,3526842,7097343,16747084].map(t=>new Re(t))}},this.rt.depthTexture=new Au(4,4),this.u.tDepth.value=this.rt.depthTexture,this.quad=new Je(new qi(2,2),new ji({uniforms:this.u,vertexShader:iw,fragmentShader:sw,depthTest:!1,depthWrite:!1})),this.quad.frustumCulled=!1,this.qScene.add(this.quad)}setSize(e,t,i){this.rows=i,this.scale=Math.max(1,Math.round(t/i)),this.lowH=Math.ceil(t/this.scale),this.lowW=Math.ceil(e/this.scale),this.u.scale.value=this.scale,this.rt.setSize(this.lowW,this.lowH),this.u.res.value.set(this.lowW,this.lowH)}render(e,t,i,s,r){this.u.sat.value=i.sat,this.u.warm.value=i.warm,this.u.contrast.value=i.contrast,this.u.glow.value=r?i.glow:0,this.u.red.value=i.red,this.u.jitter.value=i.jitter,this.u.time.value=s,this.u.bright.value=i.bright,this.u.flood.value=i.flood??0,this.u.tilt.value=i.tilt??0,this.u.outline.value=i.outline??0;const o=t;o.isPerspectiveCamera&&(this.u.cnear.value=o.near,this.u.cfar.value=o.far),this.renderer.setRenderTarget(this.rt),this.renderer.render(e,t),this.renderer.setRenderTarget(null),this.renderer.render(this.qScene,this.qCam)}}const ri=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255],fs=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],Kr=(n,e,t)=>{const i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)},ka=[{f:0,phase:"dawn",sky:15910084,sun:16758952,sunI:1.3,hemiSky:15782112,hemiGround:6967392,hemiI:1.35,warm:.45,bright:1},{f:.12,phase:"morning",sky:15917752,sun:16773320,sunI:2.2,hemiSky:16051414,hemiGround:6971472,hemiI:1.62,warm:.35,bright:1.06},{f:.35,phase:"noon",sky:12575462,sun:16775920,sunI:2.6,hemiSky:15267060,hemiGround:8025192,hemiI:1.82,warm:.2,bright:1.1},{f:.58,phase:"afternoon",sky:15128752,sun:16771264,sunI:2.3,hemiSky:16049868,hemiGround:7233616,hemiI:1.62,warm:.4,bright:1.06},{f:.68,phase:"dusk",sky:15897948,sun:16751184,sunI:1.8,hemiSky:15773840,hemiGround:5913152,hemiI:1.28,warm:.8,bright:1},{f:.78,phase:"night",sky:2899052,sun:9085183,sunI:.45,hemiSky:5929168,hemiGround:1710640,hemiI:.81,warm:.15,bright:.98},{f:.96,phase:"late",sky:1844816,sun:7375072,sunI:.35,hemiSky:5269672,hemiGround:1315880,hemiI:.68,warm:.1,bright:.96},{f:1,phase:"dawn",sky:15910084,sun:16758952,sunI:1.3,hemiSky:15782112,hemiGround:6967392,hemiI:1.35,warm:.45,bright:1}],Dr=[16735370,16758784,3526842,7097343,16747084];function ow(n){return n>=.5?Kr(.66,.72,n):1-Kr(.02,.06,n)}function yc(n){n=(n%1+1)%1;let e=0;for(;e<ka.length-2&&n>=ka[e+1].f;)e++;const t=ka[e],i=ka[e+1],s=Kr(0,1,(n-t.f)/(i.f-t.f)),r=ow(n);return{phase:s<.5?t.phase:i.phase,sky:fs(ri(t.sky),ri(i.sky),s),sun:fs(ri(t.sun),ri(i.sun),s),sunI:t.sunI+(i.sunI-t.sunI)*s,hemiSky:fs(ri(t.hemiSky),ri(i.hemiSky),s),hemiGround:fs(ri(t.hemiGround),ri(i.hemiGround),s),hemiI:t.hemiI+(i.hemiI-t.hemiI)*s,warm:t.warm+(i.warm-t.warm)*s,bright:t.bright+(i.bright-t.bright)*s,lamps:r,windows:Math.max(r,n>.62&&n<.72?Kr(.62,.7,n)*.5:0),neon:.25+.75*r,sunH:n<.72?Math.sin(n/.72*Math.PI):.15}}function aw(n){const e=Dr.length,t=(n/4%e+e)%e,i=Math.floor(t);return fs(ri(Dr[i]),ri(Dr[(i+1)%e]),Kr(0,1,t-i))}function cw(n,e,t){const i=yc(n).sky,s=aw(t),r=yc(n).lamps,o=fs(s,fs(s,ri(2758736),.35),r);return fs(i,o,Kr(0,.6,e))}const Pt={runMul:1.75,staminaMax:100,runDrain:24,regen:16,runResume:25,jumpV:6.4,gravity:19,coyote:.12,buffer:.15,stepUp:.3,climb:.55,rollTime:.55,slideTime:.45,tripTime:.9,longPush:.6},lw=()=>({y:0,vy:0,onGround:!0,coyote:0,buffer:0,stamina:Pt.staminaMax,running:!1,dry:!1,pushT:0,roll:0,slide:0,trip:0,slideVx:0,slideVz:0,lastSpeed:0});function Qu(n){n.buffer=Pt.buffer}function hw(n,e,t){n.pushT=e.il>.92?n.pushT+t:0;const i=e.il>.3&&(e.runHeld||n.pushT>Pt.longPush);return n.dry&&n.stamina>=Pt.runResume&&(n.dry=!1),i&&!n.dry&&n.stamina>0}function uw(n,e,t,i=Math.random){const s=[];n.running=hw(n,e,t)&&n.roll<=0&&n.trip<=0,n.running?(n.stamina=Math.max(0,n.stamina-Pt.runDrain*t),n.stamina<=0&&(n.dry=!0)):n.stamina=Math.min(Pt.staminaMax,n.stamina+Pt.regen*t);let r=e.vx*(n.running?Pt.runMul:1),o=e.vz*(n.running?Pt.runMul:1);n.trip>0?(n.trip-=t,r=o=0):e.drunk>.45&&e.il>.3&&n.onGround&&i()<(e.drunk-.4)*(n.running?.5:.18)*t&&(n.trip=Pt.tripTime,s.push("trip"),r=o=0);const a=Math.hypot(r,o);if(n.slide>0){n.slide-=t;const u=Math.max(0,n.slide/Pt.slideTime);r=n.slideVx*u,o=n.slideVz*u}else n.onGround&&n.lastSpeed>6&&a<.5&&(e.wet||e.drunk>.3)&&(n.slide=Pt.slideTime,s.push("slide"),r=n.slideVx,o=n.slideVz);a>.5&&(n.slideVx=r,n.slideVz=o),n.lastSpeed=n.slide>0?0:a,n.roll>0&&(n.roll-=t,r=n.slideVx*1.1,o=n.slideVz*1.1),n.buffer=Math.max(0,n.buffer-t),n.coyote=n.onGround?Pt.coyote:Math.max(0,n.coyote-t),n.buffer>0&&(n.onGround||n.coyote>0)&&n.trip<=0&&(n.buffer=0,n.coyote=0,n.onGround=!1,n.vy=Pt.jumpV*(e.drunk>.5?.8:1),s.push("jump"),e.drunk>.5&&(n.roll=Pt.rollTime,s.push("roll")));let c=!1;const l=e.ground-n.y;l>Pt.stepUp&&(!n.onGround&&l<=Pt.climb&&n.vy<3?(n.y=e.ground,n.vy=0,n.onGround=!0,s.push("climb")):c=!0);const h=c?e.groundHere:e.ground;if(n.onGround&&(h<n.y-.05?(n.onGround=!1,n.vy=0):n.y=h),!n.onGround&&(n.vy-=Pt.gravity*t,n.y+=n.vy*t,n.y<=h)){const u=n.vy<-7;n.y=h,n.vy=0,n.onGround=!0,s.push("land"),u&&s.push("puff"),e.drunk>.5&&n.roll<=0&&i()<e.drunk*.5&&(n.roll=Pt.rollTime,s.push("roll"))}return c&&(r=0,o=0),{vx:r,vz:o,blocked:c,events:s}}function op(n,e,t){let i=0;for(const s of n)e>=s.x0&&e<=s.x1&&t>=s.z0&&t<=s.z1&&s.h>i&&(i=s.h);return i}const dw={bin:"Kick bin",lamp:"Swing!",trolley:"Ride trolley",phone:"Prank call",fountain:"Splash",vending:"Shake it",news:"Read paper",door:"Knock",pigeons:"Shoo!",meter:"Check meter",busstop:"Wait for bus",mailbox:"Post a note",piano:"Play piano",graffiti:"Tag wall",sprinkler:"Dance in it",hydrant:"Open hydrant"};function fw(n,e,t){const i=s=>e.high?s*1.6:s;switch(n){case"bin":return t<.15&&!e.usedToday?{say:"A coin falls out of the rubbish!",sound:"coin",money:1,whimsy:i(2),fx:"litter",anim:"interact-right"}:{say:"Litter everywhere. Glorious.",sound:"hit",whimsy:i(3),fx:"litter",trouble:t>.85,anim:"interact-right"};case"lamp":return{say:"Wheee! Round the lamp post.",sound:"sparkle",whimsy:i(5),fx:"spin"};case"trolley":return{say:"Trolley ride! Wind in the hair.",sound:"clink",whimsy:i(6),fx:"ride",trouble:e.high&&t>.8};case"phone":return t<.3&&!e.usedToday?{say:"Found a coin in the return slot.",sound:"coin",money:1,anim:"pick-up"}:{say:'"Is your fridge running?" They hung up.',sound:"tap",whimsy:i(4),anim:"emote-yes"};case"fountain":return t<.5?{say:"A cold drink. Lovely.",sound:"gulp",health:3,anim:"pick-up"}:{say:"Splash! Everyone nearby gets wet.",sound:"pop",whimsy:i(4),fx:"splash",wet:!0};case"vending":return t<.35?{say:"Clunk. A free can!",sound:"clink",health:2,whimsy:i(3),anim:"interact-right"}:t<.55?{say:"It tips. Ouch.",sound:"hit",health:-6,anim:"emote-no"}:{say:"Nothing. It hums at you.",sound:"nope",trouble:t>.9,anim:"interact-right"};case"news":return{say:t<.5?'"LOCAL MAN STILL FINE." Good.':"Horoscope says: big day. Sure.",sound:"tap",whimsy:i(2),anim:"pick-up"};case"door":return t<.2&&!e.usedToday?{say:"A nice lady hands you a dollar.",sound:"coin",money:1,anim:"emote-yes"}:{say:e.night?`"It's 2am!" Fair.`:"Nobody home.",sound:"tap",trouble:e.night&&t>.7,anim:"interact-right"};case"pigeons":return{say:"Pigeons everywhere!",sound:"pop",whimsy:i(3),fx:"feathers",anim:"jump"};case"meter":return t<.25&&!e.usedToday?{say:"Two quarters in the slot!",sound:"coin",money:1,anim:"pick-up"}:{say:"Expired. Like my dreams. Ha!",sound:"nope",anim:"interact-right"};case"busstop":return t<.5?{say:"The bus splashes you and goes. Classic.",sound:"horn",whimsy:i(3),fx:"bus",wet:!0,anim:"sit"}:{say:"A nice sit. Bus never came.",sound:"tap",health:2,anim:"sit"};case"mailbox":return{say:'Posted: "Dear City, thanks." No stamp.',sound:"tap",whimsy:i(3),anim:"interact-right"};case"piano":return{say:"Plink plonk! People clap.",sound:"sparkle",whimsy:i(7),money:t<.3&&!e.usedToday?1:0,fx:"notes",anim:"interact-right"};case"graffiti":return{say:"A smiley the size of a door.",sound:"pop",whimsy:i(6),fx:"paint",trouble:t>.6,anim:"interact-right"};case"sprinkler":return{say:"Sprinkler dance!",sound:"sparkle",whimsy:i(6),fx:"splash",wet:!0,anim:"emote-yes"};case"hydrant":return{say:"Whoosh! A street fountain.",sound:"pop",whimsy:i(5),fx:"splash",wet:!0,trouble:t>.5,anim:"interact-right"}}}const mr=n=>n>=4&&n<=10||n>=-7&&n<=-4?.2:0;let ap=7;const Na=()=>(ap=ap*16807%2147483647)/2147483647;class pw{constructor(){this.things=[],this.plats=[],this.puddles=[],this.trolleys=[],this.neonBase=[],this.parts=[],this.cur=[]}box(e,t,i,s,r,o,a,c=0,l=this.cur){const h=new Zn(e,t,i);c&&h.rotateY(c),h.translate(r,o+t/2,a),Ua(h,s),l.push(h)}cyl(e,t,i,s,r,o,a=8,c=this.cur){const l=new yi(e,e,t,a);l.translate(s,r+t/2,o),Ua(l,i),c.push(l)}shadow(e,t,i){const s=new Wr(i,10).toNonIndexed();s.rotateX(-Math.PI/2),s.translate(e,mr(t)+.012,t),Ua(s,mr(t)>0?9406588:5204544),this.cur.push(cp(s))}flush(e){if(!this.cur.length)return;const t=jf(this.cur,!1);this.cur.forEach(i=>i.dispose()),this.cur=[],this.parts.push({g:t,x:e})}thing(e,t,i){this.things.push({id:this.things.length,kind:e,x:t,z:i})}build(e,t,i){const s=[15130064,12043442,13212810,9413557,16051158,15247484,8368296,14205040];for(let f=-108;f<110;f+=54){for(let v=f;v<f+54;v+=1){const y=Na();if(v%7===0&&y<.5)this.box(1.1,.45,.7,11565658,v,.2,9.2),this.box(.9,.5,.5,7314008,v,.65,9.2),this.shadow(v,9.2,.9),this.plats.push({x0:v-.55,x1:v+.55,z0:8.85,z1:9.55,h:.65});else if(v%9===3)this.box(.9,1.2,.04,s[Math.floor(y*s.length)],v,1.1,9.86),this.box(.7,.25,.05,16051158,v,1.9,9.85);else if(v%11===5)this.box(.06,.06,.6,3027512,v,3.1,9.6),this.box(.08,.6,.7,s[(v+200)%s.length],v,2.4,9.4);else if(v%13===8)for(let x=0;x<4;x++)this.box(.5,.08,1.1,x%2?16051158:s[(v+300)%3+5],v-.75+x*.5,2.6,9.3,0);v%6===1&&Na()<.5&&(this.cyl(.12,.6,5922662,v,.2,-4.5,6),this.shadow(v,-4.5,.3)),v%10===4&&(this.box(.6,.3,.6,13212810,v,.2,-6.6),this.box(.5,.35,.5,15239840,v,.5,-6.6))}for(const v of t)v.x>=f&&v.x<f+54&&v.z>0&&this.box(16,.04,.04,2763312,v.x+8,4.25,v.z+.6);this.flush(f+27)}const r=(f,v,y,x)=>{x(),this.thing(f,v,y)},o=(f,v)=>r("bin",f,v,()=>{const y=mr(v);this.cyl(.35,.8,4880986,f,y,v,8),this.cyl(.4,.08,3027512,f,y+.8,v,8),this.shadow(f,v,.55)});[-30,18,40,-80,92].forEach(f=>o(f,9.3));const a=f=>r("hydrant",f,4.7,()=>{this.cyl(.18,.55,13650490,f,.2,4.7,8),this.cyl(.24,.1,13650490,f,.75,4.7,8),this.box(.5,.1,.12,13650490,f,.5,4.7),this.shadow(f,4.7,.35)});[-34,6,52,96].forEach(a);const c=(f,v)=>r("phone",f,v,()=>{const y=mr(v);this.box(1,2.3,1,13123626,f,y,v),this.box(.8,1.4,.05,12575462,f,y+.6,v+(v>0?-.5:.5)),this.box(1.1,.2,1.1,9054746,f,y+2.3,v),this.shadow(f,v,.8)});c(-6,9),c(70,-5.8);const l=f=>r("vending",f,9.35,()=>{this.box(1.1,2,.7,3828432,f,.2,9.35),this.box(.8,1.1,.05,16051158,f-.1,.9,8.98),this.shadow(f,9.35,.8)});l(10),l(58);const h=f=>r("news",f,9.3,()=>{this.box(.6,.9,.5,3111562,f,.2,9.3),this.box(.5,.3,.05,16051158,f,.75,9.04),this.shadow(f,9.3,.5)});h(36),h(-48);const u=f=>r("door",f,9.8,()=>{this.box(1.2,2.1,.1,8014378,f,.2,9.86),this.box(.12,.12,.1,14729312,f+.4,1.2,9.78),this.box(1.6,.15,.6,12043442,f,2.4,9.6)});u(-40),u(-84),u(-96);const d=f=>r("meter",f,4.6,()=>{this.cyl(.06,1.1,5922662,f,.2,4.6,6),this.box(.3,.4,.22,9080984,f,1.3,4.6),this.shadow(f,4.6,.25)});[-26,44,86,-66].forEach(d);const p=f=>r("mailbox",f,9.3,()=>{this.box(.6,1,.6,3166384,f,.2,9.3),this.cyl(.3,.6,3166384,f,1,9.3,8),this.shadow(f,9.3,.5)});p(-12),p(80),r("busstop",20,-5.6,()=>{this.box(3.4,.08,1.2,9413557,20,2.4,-6.2),this.box(3.4,2.2,.06,12575462,20,.2,-6.8),this.box(.08,2.2,.08,5922662,18.4,.2,-5.7),this.box(.08,2.2,.08,5922662,21.6,.2,-5.7),this.box(2.6,.1,.5,10118192,20,.6,-6.4),this.box(.6,.6,.06,16758784,22.2,2,-5),this.shadow(20,-6.2,1.8)}),this.plats.push({x0:18.7,x1:21.3,z0:-6.65,z1:-6.15,h:.7}),r("piano",-74,-9.5,()=>{this.box(1.6,1.2,.6,13130378,-74,0,-9.8),this.box(1.6,.06,.3,16051158,-74,.8,-9.4),this.box(.8,.45,.4,6965802,-74,0,-9),this.shadow(-74,-9.6,1.1)}),r("graffiti",47,-7.6,()=>{this.box(8,.9,.4,13220008,47,0,-8);for(let f=0;f<6;f++)this.box(1+Na(),.5,.04,Dr[f%5],44+f*1.2,.2,-7.78)}),this.plats.push({x0:43,x1:51,z0:-8.2,z1:-7.8,h:.9}),this.thing("fountain",Fe.fountain.x,Fe.fountain.z+2.4),this.thing("pigeons",Fe.pigeons.x,Fe.pigeons.z),this.thing("pigeons",Fe.pigeons2.x,Fe.pigeons2.z),this.thing("sprinkler",Fe.sprinkler.x,Fe.sprinkler.z);for(const f of t)this.thing("lamp",f.x,f.z);for(const[f,v,y]of[[-98,-90,.55],[-82,-76,.55],[-48,-42,.55],[-70,-66,.42]]){const x=v===-66?-15:-7.6;this.box(v-f,y,.35,y<.5?16051158:13220008,(f+v)/2,0,x),this.plats.push({x0:f,x1:v,z0:x-.2,z1:x+.2,h:y})}for(const[f,v]of[[-14,6.2],[28,-5.2],[-56,6.5],[62,6],[-64,-10],[8,-10.5]]){const y=new Wr(.9,12).toNonIndexed();y.rotateX(-Math.PI/2),y.scale(1.3,1,.8),y.translate(f,mr(v)+.015,v),Ua(y,6981800),this.cur.push(cp(y)),this.puddles.push({x:f,z:v,r:1})}this.flush(0);const g=new Jn({vertexColors:!0});for(const f of this.parts){const v=new Je(f.g,g);v.castShadow=!0,v.receiveShadow=!0,e.add(v),f.x!==0&&i(v,f.x)}for(const[f,v]of[[-18,5.6],[-58,5.6],[30,-5.4]]){const y=[];this.box(1,.6,.7,12107976,0,.45,0,0,y),this.box(.9,.05,.6,9080984,0,.2,0,0,y),this.box(.06,.4,.7,13650490,-.55,.75,0,0,y);for(const[A,R]of[[-.4,-.3],[.4,-.3],[-.4,.3],[.4,.3]])this.box(.1,.16,.1,2763312,A,0,R,0,y);const x=new Je(jf(y,!1),g);x.castShadow=!0,x.position.set(f,mr(v),v),e.add(x);const C={id:this.things.length,kind:"trolley",x:f,z:v};this.things.push(C),this.trolleys.push({g:x,home:x.position.clone(),thing:C})}const _=14;this.neon=new Uc(new Zn(2,.45,.06),new Pn({color:16777215}),_);const m=new Ne;for(let f=0;f<_;f++){const v=38+f*2.6+Na(),y=3.2+f%3*.9;m.makeTranslation(v,y,9.82),this.neon.setMatrixAt(f,m);const x=new Re(Dr[f%Dr.length]);this.neonBase.push(x),this.neon.setColorAt(f,x)}e.add(this.neon)}nearest(e,t,i=1.8){let s=null,r=i;for(const o of this.things){const a=Math.hypot(o.x-e,o.z-t);a<r&&(r=a,s=o)}return s}inPuddle(e,t){return this.puddles.some(i=>Math.hypot(i.x-e,i.z-t)<i.r)}}function Ua(n,e){const t=new Re(e),i=n.attributes.position.count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;n.setAttribute("color",new Kt(s,3))}function cp(n){const e=n.attributes.position.count;return n.setIndex([...Array(e).keys()]),n}const Vo=new URLSearchParams(location.search),ng=Vo.has("debug"),qt=(n,e=0,t=1)=>Math.max(e,Math.min(t,n)),as=(n,e,t)=>n+(e-n)*t,cn={raw(n){try{return localStorage.getItem("sg_"+n)}catch{return null}},setRaw(n,e){try{localStorage.setItem("sg_"+n,e)}catch{}},del(n){try{localStorage.removeItem("sg_"+n)}catch{}},get(n,e){try{const t=cn.raw(n);return t?JSON.parse(t):e}catch{return e}},set(n,e){cn.setRaw(n,JSON.stringify(e))}},pn=new ZM({antialias:!1,powerPreference:"high-performance"});pn.setPixelRatio(1);pn.setSize(window.innerWidth,window.innerHeight,!1);pn.shadowMap.enabled=!0;pn.shadowMap.type=xp;pn.info.autoReset=!1;document.body.prepend(pn.domElement);const ui=new rw(pn),Ft=new Yp,Xe=new fn(60,window.innerWidth/window.innerHeight,.1,160);let $n=Vo.has("q")?qt(Math.round(Number(Vo.get("q"))),0,2):2;const mw=!Vo.has("q"),Za=new _b(13624575,5917242,1.2);Ft.add(Za);const zt=new cm(16773590,2.4);zt.shadow.camera.left=-22;zt.shadow.camera.right=22;zt.shadow.camera.top=22;zt.shadow.camera.bottom=-22;zt.shadow.camera.near=1;zt.shadow.camera.far=80;zt.shadow.bias=-6e-4;zt.shadow.normalBias=.03;Ft.add(zt,zt.target);Ft.fog=new Ru(12896456,26,62);const Ol=62;function ed(){var e;const n=vc[$n];zt.castShadow=n.shadow>0,n.shadow>0&&zt.shadow.mapSize.x!==n.shadow&&(zt.shadow.mapSize.set(n.shadow,n.shadow),(e=zt.shadow.map)==null||e.dispose(),zt.shadow.map=null),ui.setSize(window.innerWidth,window.innerHeight,n.rows)}let No=60;function ig(){pn.setSize(window.innerWidth,window.innerHeight,!1),Xe.aspect=window.innerWidth/window.innerHeight,No=Xe.aspect<1?70:50,Xe.fov=No,Xe.updateProjectionMatrix(),ed()}window.addEventListener("resize",ig);const sg=[],ks=(n,e,t,i)=>sg.push({x0:n,x1:e,z0:t,z1:i}),rg=[],gw=()=>new Pn({color:16777215,transparent:!0,opacity:.2,depthWrite:!1}),Mc=[],og=[],td=[];function Yt(n){return Ft.add(n),n}function it(n,e,t=0){return Ft.add(n),td.push({o:n,x:e,z:t}),n}function _w(n,e,t,i,s=1){const r=document.createElement("canvas");let o=r.getContext("2d");o.font="bold 54px sans-serif";const a=Math.max(512,Math.ceil(o.measureText(n).width)+48);r.width=a,r.height=96,o=r.getContext("2d"),o.fillStyle="rgba(0,0,0,0.55)",o.fillRect(0,0,a,96),o.fillStyle="#fff",o.font="bold 54px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(n,a/2,50);const c=new Fc(r);c.colorSpace=Ut;const l=new Jp(new Cu({map:c,fog:!1,depthTest:!1}));return l.scale.set(4*s*(a/512),.75*s,1),l.position.set(e,t,i),l.renderOrder=10,Yt(l)}function Bl(n,e,t,i=.9){const s=document.createElement("canvas");s.width=256,s.height=64;const r=s.getContext("2d");r.fillStyle=e,r.fillRect(0,0,256,64),r.fillStyle="#fff",r.font="bold 34px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(n,128,34);const o=new Fc(s);o.colorSpace=Ut,o.magFilter=$t;const a=new Jn({map:o,emissive:16777215,emissiveIntensity:0,emissiveMap:o});Wc.push(a);const c=new Je(new qi(t,i),a);return c.rotation.y=Math.PI,c}function xw(n,e,t,i){const s=new Je(new Du(i-.14,i,32),gw());s.rotation.x=-Math.PI/2,s.position.set(e,.24,t),it(s,e,t),rg.push({id:n,m:s,x:e,z:t,r:i})}function lp(n,e,t){const i=new Oe;i.add(te(.14,3.2,.14,ne(2764083),0,1.6,0)),i.add(te(.45,1.2,.45,ne(1908516),0,3.6,0));const s=[16724016,16760864,3211104].map(o=>new Jn({color:2236962,emissive:o,emissiveIntensity:0}));s.forEach((o,a)=>i.add(te(.06,.26,.26,o,t*.24,4-a*.37,0,!1)));const r=new Jn({color:2236962,emissive:3211104,emissiveIntensity:1.5});i.add(te(.5,.08,.5,r,0,4.24,0,!1)),s.push(r),i.position.set(n,0,e),it(i,n,e),og.push({mats:s})}function gr(n,e,t=!1){const i=new Zn(1,1,1),s=new Uc(i,ne(n),e.length),r=new Ne;return e.forEach(([o,a,c,l,h,u],d)=>s.setMatrixAt(d,r.compose(new L(o,a,c),new Nn,new L(l,h,u)))),s.castShadow=t,s.receiveShadow=!0,Yt(s)}const ag=[],nd=[],Ja={};function vw(){const n=new Je(new qi(260,90),ne(7311194));n.rotation.x=-Math.PI/2,n.position.set(0,0,-8),n.receiveShadow=!0,Yt(n);const e=(E,D,z,$,Y,X,ae)=>it(te(E,D,z,ne($),Y,X,ae,!1),Y,ae);Yt(te(230,.05,8,ne(3816770),0,.02,0,!1)),Yt(te(230,.2,6,ne(12169894),0,.1,7,!1)),Yt(te(230,.24,.3,ne(9078140),0,.12,4.1,!1)),Yt(te(230,.2,3,ne(12169894),0,.1,-5.5,!1)),Yt(te(230,.24,.3,ne(9078140),0,.12,-4.1,!1));const t=[];for(let E=-112;E<=112;E+=6)qh.every(D=>Math.abs(E-D)>3)&&t.push([E,.04,0,2.5,.06,.22]);gr(15919194,t);const i=[];for(let E=-112;E<=112;E+=2)i.push([E,.1,7,.06,.21,6]);gr(10854034,i);const s=[];for(const E of qh){for(let z=0;z<7;z++)s.push([E,.045,-3.3+z*1.1,2*Ro.halfW,.06,.55]);const D=Ro.halfW+1.2;s.push([E-D,.045,-2,.3,.06,3.8],[E+D,.045,2,.3,.06,3.8]),lp(E-Ro.halfW-.8,-4.5,-1),lp(E+Ro.halfW+.8,4.5,1)}gr(16053488,s),e(34,.08,14,5221962,-15,.05,-15),e(2,.09,14,13220239,-8,.06,-15),e(14,.1,12,9274232,9,.06,16),e(10,.1,8,9274232,0,.06,18);const r=(E,D,z,$,Y)=>{it(E,(D+z)/2,$),ks(D,z,$,Y)};r(si(-34,-28,10,22,9,10124138,0),-34,-28,10,22),r(pr(-27,-17,10,16,7,6966197,14172224,16052456,"LIQUOR","#7a1f6a",1),-27,-17,10,16),r(si(-16,-6,10,22,11,11565658,2),-16,-6,10,22),r(pr(-5,5,10,14,6,15251552,16748464,16774368,"BAKERY","#b0602a",3),-5,5,10,14),r(si(16,34,10,22,13,8030896,4),16,34,10,22),it(te(11,3,1,ne(9076600),-.5,1.5,22),0,22),ks(-6,5,21.5,22.5),it(te(1,3,12,ne(9076600),15.5,1.5,16),15,16),it(NS(),Fe.dumpster.x,Fe.dumpster.z).position.set(Fe.dumpster.x,0,Fe.dumpster.z+1);for(const E of["bin","bin2","bin3"]){const D=new Oe;D.add(te(1.1,1.1,1.1,ne(2778312),0,.55,0)),D.add(te(1.2,.12,1.2,ne(1919638),0,1.16,0)),D.add(te(.5,.04,.12,ne(1118481),0,1.23,0,!1)),D.position.set(Fe[E].x,0,Fe[E].z-.6),it(D,Fe[E].x,Fe[E].z)}const a=new Oe;a.add(te(.4,.5,.4,ne(3840720),0,.25,0)),a.add(te(.16,.25,.16,ne(12634320),0,.6,0)),a.position.set(Fe.sprinkler.x,0,Fe.sprinkler.z),it(a,Fe.sprinkler.x),it(te(1.4,.04,.9,ne(11569232),Fe.corner.x,.23,Fe.corner.z,!1),Fe.corner.x),it(te(.8,.4,.45,ne(12603450),Fe.stash.x,.4,Fe.stash.z+.4),Fe.stash.x),it(te(.8,.9,.7,ne(8015920),Fe.bakeryBin.x,.45,Fe.bakeryBin.z+.4),Fe.bakeryBin.x);for(let E=0;E<7;E++)it(Ds(-31+E*5,-20.5+E%2*1.2,.9+E%3*.15),-31+E*5);it(Ds(-28,-9.5,1),-28),it(Ds(-2,-10,.85),-2),it(Ds(4,-18,1.1),4);const c=[14202016,11061464,14735520,12112040,13674688];[[-103,-96],[-94,-88],[-86,-80],[-78,-71]].forEach(([E,D],z)=>{const $=5+z%2*1.5,Y=si(E,D,12,19,$,c[z%c.length],0,"plain"),X=te(D-E+.6,.4,5.4,ne(9062970),(E+D)/2,$+.9,13.8);X.rotation.x=-.45,Y.add(X),Y.add(te(1,2,.1,ne(5913128),(E+D)/2,1,11.95,!1)),Y.add(te(D-E,.6,.2,ne(15790320),(E+D)/2,.3,10.5,!1)),r(Y,E,D,12,19),it(Ds((E+D)/2+2.4,11,.7),E)}),r(pr(-67,-55,10,18,6,5937770,3836490,16052456,"CORNER SHOP","#1f6a3a",5),-67,-55,10,18),r(si(-54,-45,15,23,8,12624e3,6),-54,-45,15,23),r(si(-44,-37,15,23,10,10127994,1),-44,-37,15,23);const l=[[16736352,16777215],[6332671,16777215],[16760896,16777215],[6344832,16777215]];[-52,-47.5,-43,-38.5].forEach((E,D)=>{const z=new Oe;z.add(te(3,.9,1.4,ne(10119744),E,.45,12.6));for(let Y=0;Y<4;Y++)z.add(te(.75,.1,1.8,ne(l[D][Y%2]),E-1.1+Y*.74,2.4,12.4));for(const Y of[-1.4,1.4])z.add(te(.08,2.4,.08,ne(4473924),E+Y,1.2,11.9,!1));const $=[16728128,16752672,6340672][D%3];z.add(te(2.6,.2,1.1,ne($),E,1,12.6,!1)),r(z,E-1.5,E+1.5,11.9,13.3)}),r(pr(37,48,10,18,7,4860506,16728224,2759226,"THE DRUNK DUCK","#a01a6a",2),37,48,10,18),r(si(49,55,10,20,9,6969962,3),49,55,10,20),r(pr(56,68,10,18,7,2767450,4235519,1714762,"SPORTS BAR","#1a4aa0",4),56,68,10,18),r(si(69,72,10,20,8,5917258,0),69,72,10,20),r(pr(74,84,10,18,7,3820122,14540253,5925498,"ELECTRONICS","#2a3a4a",5),74,84,10,18),r(si(86,98,10,22,22,9085112,0,"tower"),86,98,10,22),it(Bl("OFFICES","#203040",4),92,10).position.set(92,3.4,9.9),r(si(100,108,10,22,18,8030874,1,"tower"),100,108,10,22);for(const E of zu){const D=Fe[E],z=new Pn({color:6982399});ag.push(z);const $=new Je(new qi(1.6,1),z);$.position.set(D.x,1.5,9.92),$.rotation.y=Math.PI,it($,D.x,10),it(te(1.8,1.2,.1,ne(1118481),D.x,1.5,9.98,!1),D.x,10)}e(68,.08,22,5221962,-70,.05,-17),e(64,.09,2,13220239,-70,.06,-16),e(2,.09,20,13220239,-62,.06,-17);const h=Fe.fountain.x,u=Fe.fountain.z,d=ne(13156528),p=new Jn({color:4892904,emissive:1723008,emissiveIntensity:.4}),g=new Oe,_=new Je(new yi(3.2,3.4,.7,20),d);_.position.set(h,.35,u);const m=new Je(new yi(2.8,2.8,.1,20),p);m.position.set(h,.66,u);const f=new Je(new yi(.35,.5,1.8,10),d);f.position.set(h,1.2,u);const v=new Je(new yi(1.1,.4,.3,14),d);v.position.set(h,2.1,u);const y=new Je(new yi(.12,.3,.9,8),p);y.position.set(h,2.6,u);for(const E of[_,m,f,v,y])E.castShadow=!0,g.add(E);it(g,h,u),ks(h-3,h+3,u-3,u+3);for(let E=0;E<12;E++){const D=-100+E*5.5+E%3*1.2,z=E%2?-26:-9.5;Math.abs(D-h)<6&&z>-12||it(Ds(D,z,.9+E%3*.15),D,z)}const x=new Oe;x.add(te(5,2.4,2.2,ne(15790312),-46,1.5,-9.8)),x.add(te(5.02,.5,2.22,ne(14172224),-46,.55,-9.8)),x.add(te(2.4,.9,.1,ne(2236962),-46.4,1.8,-8.68,!1));for(const E of[-47.8,-44.2])x.add(te(.8,.8,2.3,ne(1710618),E,.4,-9.8,!1));const C=Bl("HOT FOOD","#c03020",3,.7);C.position.set(-46,3,-8.6),x.add(C),it(x,-46,-9.8),ks(-48.5,-43.5,-11,-8.7),e(32,.1,18,9079440,56,.06,-15);const A=new Oe;A.add(te(26,.6,14,ne(6974064),56,3.6,-15.5)),A.add(te(26,3.6,.6,ne(5921376),56,1.8,-22.6));for(const E of[44,50,62,68])A.add(te(.7,3.4,.7,ne(8026752),E,1.7,-9.2));const R=Bl("STATION","#1a5a2a",4,.8);R.position.set(56,3.6,-8.6),A.add(R),A.add(te(3,.05,2,ne(10518608),56,.12,-19,!1)),it(A,56,-15),ks(43,69,-23,-22.3);for(const E of[44,50,62,68])ks(E-.35,E+.35,-9.55,-8.85);e(36,.12,22,11051152,90,.06,-16);const P=new Je(new Zn(60,.3,18),new Jn({color:2779802,emissive:666186,emissiveIntensity:.5}));P.position.set(92,-.4,-37),it(P,92,-37);const w=[];for(let E=74;E<=108;E+=2)w.push([E,.55,-27.8,.12,1,.12]);w.push([91,1.05,-27.8,36,.1,.1]),gr(3356736,w);const b=new Oe;b.add(te(5,.5,26,ne(10127994),90,3.4,-34)),b.add(te(.15,.9,26,ne(4473924),87.6,4.1,-34)),b.add(te(.15,.9,26,ne(4473924),92.4,4.1,-34));for(const E of[-22.5,-40]){const D=oo("pillar");if(D){const z=3.2/D.size.y;D.obj.scale.setScalar(z),D.obj.position.set(90,0,E),b.add(D.obj)}else b.add(te(1.2,3.2,1.2,ne(9079434),90,1.6,E))}b.add(te(3,.05,2,ne(10518608),90,.14,-25,!1)),it(b,90,-30),ks(89.3,90.7,-23.2,-21.8);for(let E=0;E<5;E++)it(Ds(76+E*7.5,-9.5,.85),76+E*7.5,-9.5);for(const E of Go){const D=it(US(),E.x,E.z);ug.push(D),D.position.set(E.x,0,E.z)}const I=[],G=[];for(const E of um)I.push([E.x,.5,E.z,.7,1,.7]),G.push([E.x,1.04,E.z,.8,.1,.8]);gr(3103290,I,!0),gr(1718820,G);for(let E=-100;E<=104;E+=16){const D=tp(E,4.7,-1);Mc.push(D),it(D.g,E),it(D.pool,E)}for(let E=-92;E<=104;E+=16){const D=tp(E,-4.6,1);Mc.push(D),it(D.g,E),it(D.pool,E)}Yt(zS());for(const E of Hc)for(let D=0;D<6;D++){const z=new Oe;z.add(te(.22,.18,.32,ne(9079450),0,.12,0,!1)),z.add(te(.12,.12,.12,ne(5925498),0,.26,-.16,!1)),it(z,Fe[E].x,Fe[E].z),nd.push({m:z,spot:E,a:D/6*Math.PI*2,r:.8+D%3*.5})}for(const E of["store","shop2","truck","dumpster","bin","bin2","bin3","alley","stash","bakeryBin","underpass","bridge","pigeons","pigeons2","tvBar","tvShop","corner","sprinkler"]){const D=Fe[E];xw(E,D.x,D.z,D.r)}}function yw(){sn.build(Ft,Mc.map(n=>({x:n.g.position.x,z:n.g.position.z})),(n,e)=>td.push({o:n,x:e,z:0})),sn.plats.push({x0:-115,x1:115,z0:4,z1:10,h:.2},{x0:-115,x1:115,z0:-7,z1:-4,h:.2});for(const n of ug){const e=new mi().setFromObject(n);sn.plats.push({x0:e.min.x,x1:e.max.x,z0:e.min.z,z1:e.max.z,h:Math.min(e.max.y,e.min.y+.58)})}for(let n=0;n<4;n++){const e=new am(16758880,0,8,1.6);Ft.add(e),dg.push(e)}}let lt,eu,xr,tu,nu;const cg={office:{model:"ped-1",tint:8161960,speed:1.6,shirt:4872826},tourist:{model:"ped-0",tint:16767120,speed:1.1,shirt:16764992},oldlady:{model:"ped-2",tint:13150432,speed:.85,shirt:10518720},party:{model:"ped-1",tint:16744656,speed:1.5,shirt:16728224},jogger:{model:"ped-0",tint:8450208,speed:3.4,shirt:3199088},rich:{model:"ped-2",tint:15781984,speed:1.3,shirt:13676608}},kn=[];let lg=0,jn,bc;const Dt={mode:"patrol",t:0,dir:1,side:6.5};let Sn;const Ns={tx:8,tz:14,wait:0},ci=[],hp=[13643824,3174608,15263976,3186768,14721056,9059024],zl=[1,2.5];function Mw(){lt.g.scale.set(1.14,1.04,1.14),lt.body.traverse(r=>{const o=r;if(o.isMesh&&o.material){const a=o.material.clone();a.emissive=new Re(3808264),a.emissiveIntensity=.35,o.material=a}if(r.isBone){const a=r.name.toLowerCase();a.includes("head")?Fi.head=r:a.includes("arm")&&a.includes("left")?Fi.armL=r:a.includes("arm")&&a.includes("right")&&(Fi.armR=r)}});const n=Fi.head??lt.body,e=!!Fi.head,t=te(.62,.26,.62,ne(14721056),0,e?.52:1.68,0);if(t.add(te(.16,.12,.16,ne(14174778),0,.18,0)),n.add(t),e){lt.g.updateMatrixWorld(!0);const r=new L;n.getWorldScale(r),t.scale.setScalar(1/r.x),t.position.y=.58/r.y}const i=te(.05,.05,1.3,ne(8015920),.3,1,.25);i.rotation.x=-.7;const s=te(.38,.34,.38,ne(14174778),0,0,.6);i.add(s),lt.body.add(i)}function bw(){lt=kl(12084266,4868690,{hat:3828362,skin:13145450,model:"man"}),Mw(),Yt(lt.g),eu=te(.85,.8,.22,ne(10104880),0,1.1,.3),xr=new Oe,xr.add(te(.28,.08,1.1,ne(2276266),0,.1,0)),xr.add(te(.06,1,.06,ne(3355443),0,.6,-.5)),xr.add(te(.5,.06,.06,ne(3355443),0,1.1,-.5)),tu=te(.6,.4,.04,ne(13148256),.25,.9,-.3,!1),nu=te(.36,.08,.06,ne(328965),0,1.5,-.2,!1),lt.body.add(eu,xr,tu,nu);for(const n of Vh)for(let e=0;e<3;e++){const t=cg[n],i=kl(t.shirt,3355460,{hair:[2759184,13672512,14540253][e%3],model:t.model,tint:t.tint});i.g.visible=!1,Yt(i.g),kn.push({p:i,kind:n,active:!1,dir:1,speed:t.speed,wet:0,asks:0,talkT:0,mad:0,id:0})}jn=kl(1714810,1317440,{hat:1118515,model:"cop",tint:6979800}),bc=new Jn({color:2236962,emissive:16719904,emissiveIntensity:0}),jn.body.add(te(.22,.14,.22,bc,0,2.2,0,!1)),Yt(jn.g),Sn=Yt(OS()),Sn.position.set(10,0,15)}let Wo=[];function hg(){for(const n of Wo)Ft.remove(n);Wo=H.draw.bottleSpots.map((n,e)=>{const t=FS(),i=Hu[n];return t.position.set(i.x,.3,i.z),t.visible=H.bottlesLeft[e],Yt(t)})}let Hl=[];function Sw(){for(const e of Hl)Ft.remove(e);Hl=[];const n=cn.get("lastDeath",null);n&&(Hl=[Yt(te(1.4,.15,.8,ne(5592405),n.x,.15,n.z)),_w(`A man fell here. Day ${n.day}.`,n.x,1.4,n.z,.7)])}const Qa=[];function ww(n){const e=n.clone();e.position.copy(n.position),Yt(e),Qa.push({o:e,t:0})}let H;const sn=new pw,kt=lw();let $c=!1,ec=0,vr=0,tc=0,Gl=0,Co={x:0,z:0},_i=null;const ug=[],up=new Map,dg=[],Uo=[],Tw=new Zn(.14,.14,.14),dp=new Map;function Sc(n,e,t,i,s=10,r=4){for(let o=0;o<s;o++){const a=i[o%i.length];let c=dp.get(a);c||(c=new Pn({color:a}),dp.set(a,c));const l=new Je(Tw,c);l.position.set(n,e,t),Ft.add(l),Uo.push({m:l,vx:(Math.random()-.5)*5,vy:r*(.5+Math.random()),vz:(Math.random()-.5)*5,t:0})}}let Fi={},ln=!1,En=!1,ie=0,ce=0,Vn=0,Vl=0,oi=0,wc=1,rt=0,iu=0,ft=0,fp=0,_s=!1,li=0,nc=0,Hs=0,ic=0,Xo=0,cs=0,yr=0,sc=0;const ls={x:0,z:0};let Fa=0,rc=0,oc=0,ac=100,Wl=0,Xl=0,$l=0,jl=0,Ar="go",Mt=null,wn=null,ql=0,qn=0,bs=1;const Tc={min:.5,max:1.8};function id(){qn=0,bs=1}const su=new Set(cn.get("book",[])),st={fx:0,fz:0,dist:12,vx:0,vz:0,roll:0},qe=n=>document.getElementById(n),Yi=qe("screen"),Oi=qe("fade");function fg(n,e,t,i){H=n,ie=e,ce=t,Vn=i,li=0,nc=0,st.fx=ie,st.fz=ce,st.dist=12,id(),lt.g.position.set(ie,0,ce),Dt.mode="patrol",jn.g.position.set(ie+30,0,6.5);for(const s of ci)Ft.remove(s.m.g);ci.length=0;for(const s of kn)s.active=!1,s.p.g.visible=!1;iu=0,Hs=ic=Xo=cs=0,ls.x=ls.z=0,Mt=null,wn=null,qe("shopPanel").classList.add("hidden"),rc=H.money,oc=H.whimsy,ac=H.health,Sw(),Yi.classList.add("hidden"),Oi.style.transition="none",Oi.style.opacity="0",ln=!0,En=!1,ps="",lu=""}function Ec(n){cn.del("life"),fg(Yu(n.trim().toUpperCase()||qu(),cn.get("stash",null)),-20,6,0),Si(`Day 1. ${Gm(H.draw.weather)}`),Ss()}function pg(){const n=Vm(cn.raw("life"));return n?(fg(n.s,n.px,n.pz,n.face),Si(`Day ${H.day}. Welcome back.`),!0):!1}function Ss(){if(!ln||!H||H.dead)return;const n=j1(H,ie,ce,Vn);n&&cn.setRaw("life",n)}function mg(){return"<b>Whimsy book</b><br>"+Im.map(n=>su.has(n)?Gc[n].name:"???").join("<br>")}function sd(){ln=!1,En=!1;const n=Vm(cn.raw("life"));Yi.classList.remove("hidden"),Yi.innerHTML=`
    <h1>Street</h1>
    <div style="opacity:.8">Hustle sober. Get high. Have fun. Don't die.</div>
    ${n?`<button id="cont" class="go">Continue · day ${n.s.day}</button>`:""}
    <div>Seed <input id="seed" value="${qu()}" autocapitalize="characters"></div>
    <button id="go" class="${n?"alt":"go"}">${n?"New life":"Start a life"}</button>
    <div style="font-size:12px;opacity:.6">Same seed, same draw. Keys: WASD, E act, 1-6, Q drink, V view, P pause.</div>
    <div id="book">${mg()}</div>`,n&&(qe("cont").onclick=()=>{pg()||sd()}),qe("go").onclick=()=>Ec(qe("seed").value)}function jc(){!ln||En||(En=!0,Ss(),Yi.classList.remove("hidden"),Yi.innerHTML=`
    <h1>Paused</h1>
    <div style="opacity:.75">Day ${H.day}. His life is saved.</div>
    <button id="resume" class="go">Resume</button>
    <button id="snd" class="alt">${Da()?"Sound: off":"Sound: on"}</button>
    <button id="quit" class="alt">Back to start</button>`,qe("resume").onclick=rd,qe("snd").onclick=()=>{tg(!Da()),cn.set("muted",Da()),qe("snd").textContent=Da()?"Sound: off":"Sound: on"},qe("quit").onclick=()=>{Ss(),sd()})}function rd(){En&&(En=!1,Yi.classList.add("hidden"),Ic=performance.now())}function Ew(){ln=!1,cn.del("life");for(const e of H.discovered)su.add(e);cn.set("book",[...su]),cn.set("lastDeath",{x:ie,z:ce,day:H.day}),cn.set("stash",H.stash),Hi(lt,"die",!0),Zo();const n=H.dead==="gaveup";Oi.style.transition=`opacity ${n?3:1}s`,Oi.style.opacity="1",setTimeout(()=>{Yi.classList.remove("hidden"),Yi.innerHTML=`
      <h1>This is how he died</h1>
      <div style="font-size:20px">${C1[H.dead]}</div>
      <div>Days survived: ${H.day}<br>Best whimsy: ${Math.round(H.bestWhimsy)}<br>People who gave: ${H.gives}<br>Seed: ${H.seed}</div>
      <button id="again" class="go">A new life</button>
      <button id="same" class="alt">Same seed again</button>
      <div id="book">${mg()}</div>`,qe("again").onclick=()=>Ec(qu()),qe("same").onclick=()=>Ec(H.seed)},n?3200:1200)}document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){if(Ss(),Vo.has("nopause"))return;jc(),tw()}});window.addEventListener("pagehide",Ss);tg(cn.get("muted",!1));const od=()=>ew();window.addEventListener("pointerdown",od,{capture:!0});window.addEventListener("touchend",od,{capture:!0});window.addEventListener("keydown",od,{capture:!0});const vn=new Set,Yn={x:0,y:0,id:-1};window.addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(vn.add(e),!!ln){if(wn){(e==="escape"||e==="e")&&Zo();return}if((e==="p"||e==="escape")&&(En?rd():jc()),!En&&(e==="e"&&Ac(0),e>="1"&&e<="7"&&Ac(Number(e)-1),e==="q"&&hd(),e==="v"&&(_s=!_s),(e===" "||e==="j")&&Qu(kt),e==="f")){const t=sn.nearest(ie,ce);t&&cd(t)}}});window.addEventListener("keyup",n=>vn.delete(n.key.toLowerCase()));window.addEventListener("blur",()=>vn.clear());const Zr=qe("stick"),gg=qe("knob");Zr.addEventListener("pointerdown",n=>{Yn.id=n.pointerId,Zr.setPointerCapture(n.pointerId),xg(n)});Zr.addEventListener("pointermove",n=>{n.pointerId===Yn.id&&xg(n)});const _g=n=>{n.pointerId===Yn.id&&(Yn.id=-1,Yn.x=0,Yn.y=0,gg.style.transform="")};Zr.addEventListener("pointerup",_g);Zr.addEventListener("pointercancel",_g);function xg(n){const e=Zr.getBoundingClientRect();let t=(n.clientX-(e.left+e.width/2))/55,i=(n.clientY-(e.top+e.height/2))/55;const s=Math.hypot(t,i);s>1&&(t/=s,i/=s),Yn.x=t,Yn.y=i,gg.style.transform=`translate(${t*40}px, ${i*40}px)`}const In=(n,e,t="")=>`<svg viewBox="0 0 24 24" fill="${e}" ${t}><path d="${n}"/></svg>`,rn={heart:"M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.6 4.5c2.2 0 3.6 1.2 5.4 3.3 1.8-2.1 3.2-3.3 5.4-3.3 3.6 0 5.7 3.8 4.2 7.2C19.5 16.4 12 21 12 21z",bolt:"M13.5 1.5 4 13.5h6.5L9 22.5l10-13h-6.8z",bottle:"M9.5 1.5h5v4l2 3.5v12.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V9l2-3.5z",star:"M12 1.5l2.6 7.6 7.9.4-6.2 5 2.1 7.8L12 17.8l-6.4 4.5 2.1-7.8-6.2-5 7.9-.4z",food:"M12 7.5c-1.2-1.8-3.2-2.6-5.2-2C3.6 6.4 2.6 10 3.6 13.6 4.7 17.7 7.4 21.5 9.6 21.5c1 0 1.5-.5 2.4-.5s1.4.5 2.4.5c2.2 0 4.9-3.8 6-7.9 1-3.6 0-7.2-3.2-8.1-2-.6-4 .2-5.2 2zM12 7.5c0-2.3 1-4.3 3.2-5.5",coin:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.9 15.6V19h-1.8v-1.4c-1.6-.2-2.9-1.1-3-2.8h1.8c.1.9.8 1.4 2 1.4 1.3 0 1.9-.6 1.9-1.3 0-.8-.6-1.1-2.1-1.5-1.9-.4-3.3-1-3.3-2.8 0-1.4 1.1-2.4 2.7-2.7V6.5h1.8v1.4c1.6.3 2.6 1.3 2.7 2.7h-1.8c-.1-.8-.7-1.3-1.8-1.3-1.1 0-1.7.5-1.7 1.2 0 .7.6 1 2.1 1.4 1.9.5 3.3 1.1 3.3 2.9 0 1.5-1.1 2.5-2.8 2.8z",pause:"M6 4h4.5v16H6zM13.5 4H18v16h-4.5z",eye:"M12 5C6.5 5 2.7 9.2 1.5 12c1.2 2.8 5 7 10.5 7s9.3-4.2 10.5-7C21.3 9.2 17.5 5 12 5zm0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2.3a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z",sunI:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM11 1h2v3h-2zm0 19h2v3h-2zM1 11h3v2H1zm19 0h3v2h-3z",cloud:"M6.5 19a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 17.5 9 5 5 0 0 1 17.5 19zM8 20.5l-1 2.5M12 20.5l-1 2.5M16 20.5l-1 2.5",snow:"M11 1h2v22h-2zM1 11h22v2H1zM4.2 5.6l1.4-1.4 14.2 14.2-1.4 1.4zM18.4 4.2l1.4 1.4L5.6 19.8l-1.4-1.4z",blanket:"M3 6h18v12H3zM3 10h18M3 14h18",scooter:"M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5 17h14l-3-12h3"};qe("pauseBtn").innerHTML=In(rn.pause,"#fff",'width="20" height="20"');qe("viewBtn").innerHTML=In(rn.eye,"#fff",'width="22" height="22"');qe("pauseBtn").addEventListener("pointerdown",n=>{n.preventDefault(),Ge("tap"),jc()});qe("centerBtn").innerHTML=In("M12 2v4M12 18v4M2 12h4M18 12h4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z","none",'stroke="#fff" stroke-width="2" width="22" height="22"');qe("centerBtn").addEventListener("pointerdown",n=>{n.preventDefault(),Ge("tap"),id()});const xs=new Map;let Gs=null;const Yo=pn.domElement,vg=()=>{const[n,e]=[...xs.values()];return{d:Math.hypot(e.x-n.x,e.y-n.y),a:Math.atan2(e.y-n.y,e.x-n.x)}};Yo.addEventListener("pointerdown",n=>{xs.set(n.pointerId,{x:n.clientX,y:n.clientY}),xs.size===2&&(Gs={...vg(),zoom:bs,yaw:qn})});Yo.addEventListener("pointermove",n=>{const e=xs.get(n.pointerId);if(n.pointerType==="mouse"&&n.buttons&2&&e&&(qn-=(n.clientX-e.x)*.008),e&&xs.set(n.pointerId,{x:n.clientX,y:n.clientY}),Gs&&xs.size===2){const t=vg();bs=qt(Gs.zoom*(Gs.d/Math.max(20,t.d)),Tc.min,Tc.max),qn=Gs.yaw-br(t.a-Gs.a)}});const yg=n=>{xs.delete(n.pointerId),xs.size<2&&(Gs=null)};Yo.addEventListener("pointerup",yg);Yo.addEventListener("pointercancel",yg);Yo.addEventListener("contextmenu",n=>n.preventDefault());window.addEventListener("wheel",n=>{bs=qt(bs*Math.exp(n.deltaY*.001),Tc.min,Tc.max)},{passive:!0});qe("viewBtn").addEventListener("pointerdown",n=>{n.preventDefault(),Ge("tap"),_s=!_s});const kr=[];function ru(n,e,t,i=2.6){for(const r of kr)r.el.dataset.cls===t&&(r.t=Math.min(r.t,.15));const s=document.createElement("div");s.className="bubble "+t,s.dataset.cls=t,s.textContent=n,qe("bubbles").appendChild(s),kr.push({el:s,at:e,t:i})}const Aw=new L;function Mg(n){for(let e=kr.length-1;e>=0;e--){const t=kr[e];t.t-=n;const i=Aw.copy(t.at()).project(Xe),s=i.z>1||t.t<=0;if(t.t<=0){t.el.remove(),kr.splice(e,1);continue}t.el.style.display=s?"none":"",t.el.style.left=(i.x+1)/2*window.innerWidth+"px",t.el.style.top=(1-i.y)/2*window.innerHeight+"px",t.el.style.opacity=String(qt(t.t*3))}}const ad=n=>n[Math.floor(Math.random()*n.length)];let Ko=[],ps="";const ou=qe("acts"),Mr=qe("drinkBtn");Mr.addEventListener("pointerdown",n=>{n.preventDefault(),hd()});const Rw=qe("jumpBtn"),Nr=qe("runBtn");Rw.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Qu(kt)});Nr.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),$c=!0,Nr.classList.add("on"),Nr.setPointerCapture(n.pointerId)});const bg=()=>{$c=!1,Nr.classList.remove("on")};Nr.addEventListener("pointerup",bg);Nr.addEventListener("pointercancel",bg);function co(n){let e=null,t=n;for(const i of kn){if(!i.active||i.mad>0||i.asks>2)continue;const s=Math.hypot(i.p.g.position.x-ie,i.p.g.position.z-ce);s<t&&(t=s,e=i)}return e}function Ki(){const n=kn.some(i=>i.active&&Math.hypot(i.p.g.position.x-Fe.sprinkler.x,i.p.g.position.z-Fe.sprinkler.z)<9),e=Math.hypot(Sn.position.x-ie,Sn.position.z-ce)<2.2,t=Mt??co(2.8);return{x:ie,z:ce,pedNear:n,catNear:e,ped:t?{kind:t.kind,asks:t.asks}:void 0}}const Cw={spray:"Spray!",cat:"Pet cat",dance:"Dance!",snack:"Snatch snack",bench:"Sing!"};function Iw(n){if(n.whimsy)return Cw[n.id.slice(7)];if(n.id.startsWith("trash:"))return"Dig trash";if(n.id.startsWith("enter:"))return"Go in: "+lm[n.id.slice(6)];switch(n.id){case"beg":return"Ask · "+qo[Ki().ped.kind].name;case"pickup":return"Grab";case"recycle":return`Recycle +$${H.bottles}`;case"dumpster":return"Dig";case"bakeryBin":return"Bakery bin";case"mix":return"Mix";case"sleep":return"Sleep";case"sit":return"Sit";case"stand":return"Get up";case"pigeons":return"Feed pigeons";case"tv":return"Watch TV";case"smoke":return"Smoke";case"stashPut":return"Hide "+n.label.split(" ")[1];case"stashTake":return"Take "+n.label.split(" ")[1]}return n.label}function Oa(n,e,t){const i=document.createElement("div");i.className="act "+e,i.textContent=n,i.addEventListener("pointerdown",s=>{s.preventDefault(),t()}),ou.prepend(i)}function Lw(){var e;const n=zm(H);if(Mt){const t=Vc(H,Ki()),i="beg"+t.join("|");i!==ps&&(ps=i,ou.innerHTML="",t.forEach((s,r)=>Oa(dm[s].label+Zw[Mt&&l1(H,Mt.kind,s)||"none"],"line"+(r===0?" first":""),()=>ld(s))),Oa("Leave","line dim",()=>Jr()))}else{const t=Ko.slice(0,5),i=sn.nearest(ie,ce),s=t.map(r=>r.id+r.label).join("|")+(n??"")+(n?H.drinks[n]:"")+H.bottles+(((e=Ki().ped)==null?void 0:e.kind)??"")+(i?"t"+i.id:"");s!==ps&&(ps=s,ou.innerHTML="",i&&Oa(dw[i.kind],"whimsy poke",()=>cd(i)),t.forEach((r,o)=>Oa(Iw(r),(o===0?"first":"")+(r.whimsy?" whimsy":"")+(r.id==="beg"?" beg":""),()=>Ac(o))))}if(Mr.classList.toggle("hidden",!n),n){const t="round"+(n==="mix"?" mix":n==="wine"?" wine":"");Mr.className!==t&&(Mr.className=t);const i=H.drinks.beer+H.drinks.vodka+H.drinks.wine+H.drinks.mix,s=In(rn.bottle,n==="vodka"?"#e8f4ff":n==="mix"?"#fff":n==="wine"?"#8a1a3a":"#5a3a10")+`<div class="badge">${i}</div>`;Mr.innerHTML!==s&&(Mr.innerHTML=s)}}function Pw(n){n==="jump"?(Ge("pop",{pitch:1.4,vol:.5}),Hi(lt,"jump"),vs(-.25)):n==="land"?(vs(.3),Ge("step",{vol:.8,pitch:.7})):n==="puff"||n==="climb"?(Sc(ie,kt.y+.1,ce,[15130064,13220008],6,1.5),n==="climb"&&Ge("tap")):n==="roll"?(Ge("pop",{pitch:.7}),Si("Stumble-roll!")):n==="slide"?(Ge("tap",{pitch:.6}),Sc(ie,.3,ce,[9413557],5,1)):n==="trip"&&(Ge("nope"),Si(ad(["Whoops. Down he goes.","The ground came up fast.","A nap? Sure."])),vs(.45))}function cd(n){const e=H.day+":"+n.id,t=up.get(e);if(t!==void 0&&ft-t<3)return;const i=fw(n.kind,{high:bi(H),night:Pm(H),usedToday:t!==void 0},Math.random());up.set(e,ft),i.money&&(H.money+=i.money),i.whimsy&&(H.whimsy=Math.min(100,H.whimsy+i.whimsy)),i.health&&(H.health=qt(H.health+i.health,0,100)),i.trouble&&(H.copAlert=!0),i.wet&&(ec=20),Ge(i.sound),Si(i.say),i.anim&&Hi(lt,i.anim);const s={litter:[15130064,9075290,12043442],feathers:[14540253,9080728],notes:[2759188,16735370],paint:[16735370,3526842,16758784,7097343],splash:[9425151,16777215],bus:[9425151,6981800]};if(i.fx&&s[i.fx]&&Sc(n.x,.8,n.z,s[i.fx],i.fx==="splash"||i.fx==="bus"?16:10,5),i.fx==="spin"&&(vr=1.3,Co={x:n.x,z:n.z}),i.fx==="ride"&&(_i=sn.trolleys.find(r=>r.thing===n)??null,tc=3,Vn=Math.atan2(n.x-ie,n.z-ce)+Math.PI),n.kind==="pigeons")for(const r of nd)Math.hypot(r.m.position.x-n.x,r.m.position.z-n.z)<5&&Sc(r.m.position.x,.5,r.m.position.z,[9080728],3,6);i.anim==="sit"&&(H.sitting=!0),Tg("whimsy")}function vs(n=.35){yr=-n,sc=0}function Ac(n){if(!ln||En||wn)return;if(Mt){const s=Vc(H,Ki());n<s.length?ld(s[n]):Jr();return}const e=Ko[n];if(!e)return;const t=Ki();if(!k1(H,e.id,t)){Ge("nope");return}if(vs(),e.id==="beg"){Nw();return}if(e.id.startsWith("enter:")){$o(e.id.slice(6));return}if(/^own:(craft|pawn|books|steal:)/.test(e.id)){$o(e.id.slice(4));return}if(e.id.startsWith("own:")&&(Ge("pop",{pitch:1.3}),e.id.startsWith("own:grab")&&Hi(lt,"pick-up")),e.whimsy&&(oi=2.2,wc=-wc,Ge("sparkle"),Hi(lt,"emote-yes"),e.id.slice(7)==="spray")){let r=null,o=99;for(const a of kn){if(!a.active)continue;const c=Math.hypot(a.p.g.position.x-Fe.sprinkler.x,a.p.g.position.z-Fe.sprinkler.z);c<o&&(o=c,r=a)}r&&(r.wet=3,ru(ad(["AAH!","My suit!","Hey!!"]),Sg(r.p),"them"))}e.id==="pickup"&&(Wo.forEach((s,r)=>{s.visible&&!H.bottlesLeft[r]&&(ww(s),s.visible=!1)}),Ge("clink"),Ge("pop",{pitch:1.2}),Hi(lt,"pick-up")),e.id==="recycle"&&(Ge("clink",{pitch:.9}),Ge("clink",{pitch:1.15})),(e.id==="dumpster"||e.id.startsWith("trash:")||e.id==="bakeryBin")&&(Ge("pop",{pitch:.7}),Hi(lt,"pick-up")),e.id==="mix"&&Ge("clink"),e.id==="pigeons"&&(Ja[Hc.find(s=>Math.hypot(Fe[s].x-ie,Fe[s].z-ce)<4)??"pigeons"]=8,Ge("sparkle",{pitch:1.4})),(e.id==="tv"||e.id==="smoke")&&Ge("pop",{pitch:.6}),e.id==="sit"&&Bw(),(e.id==="stashPut"||e.id==="stashTake")&&(cn.set("stash",H.stash),Ge("pop")),e.id==="sleep"&&(zw(),Ss())}const Sg=n=>()=>Dw.set(n.g.position.x,2.5,n.g.position.z),Dw=new L,kw=()=>new L(ie,3.3,ce);function Nw(){const n=co(2.8);n&&(Mt=n,n.talkT=8,H.sitting=!1,ps="")}function Jr(){Mt&&(Mt.talkT=Math.min(Mt.talkT,.6)),Mt=null,ps=""}function ld(n){const e=Mt;if(!e)return;const t=Ki(),i=H.money,s=N1(H,t,n);if(!s){Ge("nope");return}e.asks++,H.copAlert=!1,ru(ad(dm[n].say),kw,"me",2.2),Hi(lt,"emote-yes");const r=s.outcome==="angry"||s.outcome==="hate";Uw(.65,()=>{ru(s.reply,Sg(e.p),r?"them mad":s.outcome==="give"?"them give":"them",2.8),s.outcome==="give"?(Hi(e.p,"emote-yes"),H.money===i&&Ge("pop",{pitch:1.3})):s.laughed?Ge("sparkle",{pitch:1.6}):Ge("nope",{vol:.5}),s.callCop&&Ow()}),r?(e.mad=6,e.talkT=0,e.dir=Math.sign(e.p.g.position.x-ie)||1):e.talkT=1.6,Mt=null,ps=""}const Io=[];function Uw(n,e){Io.push({t:n,fn:e})}function Fw(n){for(let e=Io.length-1;e>=0;e--)if((Io[e].t-=n)<=0){const t=Io[e].fn;Io.splice(e,1),t()}}function Ow(){Si("Someone called the cop!"),Ge("whistle");const n=jn.g.position;Math.hypot(n.x-ie,n.z-ce)>40&&n.set(ie+(Math.random()<.5?-34:34),0,ce>0?6.5:-5.5),Dt.mode="chase",Dt.t=0}function Bw(){let n=Go[0],e=1e9;for(const t of Go){const i=Math.hypot(t.x-ie,t.z-ce);i<e&&(e=i,n=t)}ie=n.x,ce=n.z+.15,Vn=Math.PI}function hd(){!ln||En||wn||(U1(H)?(Ge("gulp"),vs(.25)):Ge("nope"))}function zw(){Oi.style.transition="none",Oi.style.opacity="1",Oi.offsetWidth,Oi.style.transition="opacity 1.5s",Oi.style.opacity="0"}const Vs=qe("shopPanel");function $o(n){wn=n,Jr(),Ge("pop",{pitch:.8}),Rc(),Vs.classList.remove("hidden")}function Zo(){wn=null,Vs.classList.add("hidden"),Ic=performance.now()}function Rc(){if(!wn)return;if(qS(wn)){QS(Vs,wn,H,Jw);return}const n=wn,e={liquor:'"The usual?"',corner:'"No loitering. Unless you buy."',truck:'"Hot and fresh, friend."'};Vs.innerHTML=`<div class="shead"><b>${lm[n]}</b><span class="smoney">${In(rn.coin,"#ffd84a")}${H.money}</span></div>
    <div class="sgreet">${e[n]}</div><div class="slist"></div><button class="sclose">Leave</button>`;const t=Vs.querySelector(".slist");for(const i of pm[n]){const s=fm[i],r=document.createElement("div"),o=i==="lighter"&&H.items.lighter||i==="sign"&&H.items.sign||i==="shades"&&H.items.shades||i==="goodBlanket"&&H.items.goodBlanket||i==="jokebook"&&H.items.jokebook;r.className="srow"+(H.money<s.price||o?" poor":""),r.innerHTML=`<div><div class="sname">${s.name}</div><div class="snote">${o?"Got it.":s.note}</div></div><div class="sbuy">$${s.price}</div>`,r.addEventListener("pointerdown",a=>{a.preventDefault();const c=H.money;Bm(H,n,i,{x:ie,z:ce})?(Ge(i==="beer"||i==="vodka"||i==="wine"?"clink":i==="scratch"&&H.money>c-s.price?"sparkle":"pop"),vs(.2)):Ge("nope"),qc(),Rc()}),t.appendChild(r)}Vs.querySelector(".sclose").addEventListener("pointerdown",i=>{i.preventDefault(),Zo()})}const wg=[{k:"health",icon:rn.heart,col:"#ff4d5e",low:n=>n<30},{k:"withdrawal",icon:rn.bolt,col:"#a6e04a",low:n=>n>75},{k:"buzz",icon:rn.bottle,col:"#ffb02e",low:()=>!1},{k:"whimsy",icon:rn.star,col:"#ff6ad5",low:n=>n<25},{k:"hunger",icon:rn.food,col:"#ff9a4a",low:n=>n<20}];qe("meters").innerHTML=wg.map(n=>`<div class="meter" id="m_${n.k}"><div class="ic">${In(n.icon,n.col)}</div><div class="track"><div class="fill" id="f_${n.k}" style="background:${n.col}"></div></div></div>`).join("");const Hw=qe("chips"),au=qe("toast"),Yl=qe("sun"),Gw=qe("sky"),Vw=qe("goals");let cu=0,pp="",lu="";function Si(n){au.textContent=n,au.classList.add("on"),cu=2.4}function Kl(n,e,t,i,s){const r=new L(t,i,s).project(Xe);if(r.z>1)return;const o=document.createElement("div");o.className="float",o.textContent=n,o.style.color=e,o.style.left=(r.x+1)/2*window.innerWidth+"px",o.style.top=(1-r.y)/2*window.innerHeight+"px",document.body.appendChild(o),setTimeout(()=>o.remove(),1150)}function Tg(n){const e=document.getElementById(n);e&&(e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump"))}function Ww(n){for(const a of wg){const c=H[a.k];qe("f_"+a.k).style.width=c+"%",qe("m_"+a.k).classList.toggle("low",a.low(c))}qe("dayno").textContent="D"+H.day;const e=ro(H);Yl.style.left=e*100+"%",Yl.style.top=4+(1-Math.sin(Math.PI*Math.min(1,e/vt.nightAt)))*16+"px",Yl.classList.toggle("moon",Pm(H)),Gw.classList.toggle("late",e>.9);const t=H.draw.weather,i=t==="mild"?In(rn.sunI,"#ffd84a"):t==="rain"?In(rn.cloud,"#bcd",'stroke="#bcd" stroke-width="1.5"'):In(rn.snow,"#cfe6ff"),s=H.items,r=`${H.money}|${H.bottles}|${t}|${JSON.stringify(s)}|${H.inv.cigs}`;r!==pp&&(pp=r,Hw.innerHTML=`<div class="chip" id="c_money">${In(rn.coin,"#ffd84a")}${H.money}</div><div class="chip" id="c_bottles">${In(rn.bottle,"#3fd060")}${H.bottles}</div><div class="chip">${i}</div>`+(s.blanket||s.goodBlanket?`<div class="chip">${In(rn.blanket,s.goodBlanket?"#e0a040":"#e06060",'stroke="#fff" stroke-width=".8"')}</div>`:"")+(s.scooter?`<div class="chip">${In(rn.scooter,"none",'stroke="#3fd0c0" stroke-width="2"')}</div>`:"")+(s.jokebook?'<div class="chip txt">Jokes</div>':"")+(s.sign?'<div class="chip txt">Sign</div>':"")+(s.shades?'<div class="chip txt">Shades</div>':"")+(H.inv.cigs>0?`<div class="chip txt">Smokes ${H.inv.cigs}</div>`:""));const o=JSON.stringify(H.goals);o!==lu&&(lu=o,Vw.innerHTML=H.goals.map(a=>{const c=Gu[a.id],l=c.n>1&&!a.done?` ${Math.min(a.got,c.n)}/${c.n}`:"";return`<div class="goal${a.done?" done":""}"><span class="box">${a.done?"✓":""}</span>${c.text}${l}</div>`}).join("")),H.money>rc&&(Kl("+$"+(H.money-rc),"#ffd84a",ie,2.4,ce),Ge("coin"),Tg("c_money")),H.whimsy>oc+.5&&Kl("+"+Math.round(H.whimsy-oc),"#ff8ae0",ie+.6,2.9,ce),H.health<ac-5&&Kl("-"+Math.round(ac-H.health),"#ff4d5e",ie-.6,2.6,ce),rc=H.money,oc=H.whimsy,ac=H.health,qc(),cu-=n,cu<=0&&au.classList.remove("on")}function Xw(){for(const n of sg)if(ie>n.x0-.45&&ie<n.x1+.45&&ce>n.z0-.45&&ce<n.z1+.45){const t=ie-(n.x0-.45),i=n.x1+.45-ie,s=ce-(n.z0-.45),r=n.z1+.45-ce,o=Math.min(t,i,s,r);o===t?ie=n.x0-.45:o===i?ie=n.x1+.45:o===s?ce=n.z0-.45:ce=n.z1+.45}ie=Math.max(Ia.minX,Math.min(Ia.maxX,ie)),ce=Math.max(Ia.minZ,Math.min(Ia.maxZ,ce))}const br=n=>Math.atan2(Math.sin(n),Math.cos(n)),$w=new L,Eg={beer:{sway:.35,roll:.03,orbit:.12,breathe:0},vodka:{sway:1.1,roll:.1,orbit:.3,breathe:.025},wine:{sway:.25,roll:.025,orbit:.16,breathe:.04},mix:{sway:.1,roll:.015,orbit:.22,breathe:.07}},jt={soberDist:12,soberPitch:.86,highDist:9.5,highPitch:.36,highAhead:2,aheadSecs:.6,aheadMax:3.2,roadPull:1.15,runPull:1.12,talkPush:.85,leanTalk:.45,leanDoor:.3};function jw(n,e){const t=ro(H),i=Ms(ie,ce),r=Math.max(3,Math.round(($n===0?6:$n===1?9:12)*zc[i].busy(t)));$l-=e;const o=kn.filter(a=>a.active);if($l<=0&&o.length<r){$l=.35;const a=Hb.filter(c=>c.x0<ie+40&&c.x1>ie-40&&Math.abs(c.z-ce)<30);if(a.length){const c=a[Math.floor(Math.random()*a.length)],l=Math.random()<.5?-1:1,h=qt(ie+l*(26+Math.random()*12),c.x0,c.x1);if(Math.abs(h-ie)>18){const u=Ub(Ms(h,c.z),Math.random()),d=kn.find(p=>!p.active&&p.kind===u)??kn.find(p=>!p.active);d&&(d.active=!0,d.p.g.visible=!0,d.asks=0,d.mad=0,d.talkT=0,d.wet=0,d.id=++lg,d.dir=Math.random()<.7?-l:l,d.speed=cg[d.kind].speed*(.85+Math.random()*.3),d.p.g.position.set(h,0,c.z+(Math.random()-.5)*.6))}}}for(const a of kn){if(!a.active)continue;const c=a.p.g.position;let l=a.wet>0?a.speed*3:a.mad>0?a.speed*1.8:a.speed;a.wet=Math.max(0,a.wet-n),a.mad=Math.max(0,a.mad-n),a.talkT>0||Mt===a?(a.talkT-=n,l=0,a.p.g.rotation.y=Math.atan2(ie-c.x,ce-c.z)+Math.PI):(c.x+=a.dir*l*n,a.p.g.rotation.y=a.dir>0?-Math.PI/2:Math.PI/2),_c(a.p,l,n),a.wet>0&&(a.p.body.position.y=Math.abs(Math.sin(ft*12))*.3),(Math.abs(c.x-ie)>46||c.x<-106||c.x>108)&&(a.active=!1,a.p.g.visible=!1,Mt===a&&Jr())}Mt&&Math.hypot(Mt.p.g.position.x-ie,Mt.p.g.position.z-ce)>4.5&&Jr()}function hu(n){var Ye,Ke;ft+=n,ic>0&&(ic-=n,n*=.05);const e=oi>0?.35:1,t=n*e;oi=Math.max(0,oi-n),fp+=t,H.day!==iu&&(iu=H.day,hg()),B1(H,t);let i=Yn.x,s=Yn.y;(vn.has("a")||vn.has("arrowleft"))&&(i-=1),(vn.has("d")||vn.has("arrowright"))&&(i+=1),(vn.has("w")||vn.has("arrowup"))&&(s-=1),(vn.has("s")||vn.has("arrowdown"))&&(s+=1);let r=Math.hypot(i,s);r>1&&(i/=r,s/=r,r=1),H.sitting&&(r>.4?H.sitting=!1:(i=s=0,r=0)),cs>0&&(i=s=0,r=0,cs-=t),ql=r<.1?ql+n:0;const{speed:o,wobble:a}=F1(H),c=_s?0:li+qn;vn.has("z")&&(qn+=n*1.6),vn.has("c")&&(qn-=n*1.6);const l=Math.sin(c),h=Math.cos(c);let u=(l*-s+-h*i)*o,d=(h*-s+l*i)*o;const p=Eg[H.effect??"beer"];let g=0;if(!_s&&rt>.3){const B=r>.2?-s/r:0;if(B>.3){const q=br(Math.atan2(u,d)-li-qn),he=.35;Math.abs(q)>he&&(g=Math.sign(q)*Math.min(1.1,(Math.abs(q)-he)*2.2)*B*rt)}ql>1.5&&oi<=0&&(g=p.orbit*rt)}else _s||(g=qt(br(-li)*2.5,-3,3));if(nc+=(g-nc)*Math.min(1,n*4),li=br(li+nc*n),Math.abs(li)<1e-4&&rt<.3&&(li=0),a>0){const B=Math.sin(ft*1.7)*a*.8+Math.sin(ft*.63)*a*.5,q=Math.cos(B),he=Math.sin(B);if([u,d]=[u*q-d*he,u*he+d*q],!H.sitting){const T=ft*.37;u+=Math.cos(T)*a*1.3,d+=Math.sin(T*1.3)*a*1.3}}const _=bi(H)?qt(H.buzz/80):0;ec=Math.max(0,ec-t);const m=H.draw.weather==="rain"||ec>0||sn.inPuddle(ie,ce),f=kt.running?Pt.runMul:1,v=op(sn.plats,ie,ce),y=op(sn.plats,ie+u*t*f*3,ce+d*t*f*3),x=uw(kt,{il:r,runHeld:$c||vn.has("shift"),vx:u,vz:d,drunk:_,wet:m,ground:y,groundHere:v},t);u=x.vx,d=x.vz;for(const B of x.events)Pw(B);if(vr>0){vr-=t;const B=vr*9;ie=Co.x+Math.cos(B)*.8,ce=Co.z+Math.sin(B)*.8,u=-Math.sin(B)*6,d=Math.cos(B)*6}else if(tc>0&&_i){tc-=t;const B=Vn+Math.PI;u=Math.sin(B)*7+u*.3,d=Math.cos(B)*7+d*.3,_i.g.position.set(ie+Math.sin(B)*.9,_i.home.y,ce+Math.cos(B)*.9),_i.g.rotation.y=B+Math.PI/2,_i.thing.x=_i.g.position.x,_i.thing.z=_i.g.position.z,tc<=0&&(_i=null,vs(.3))}oi<=0&&!Mt&&vr<=0&&(ie+=(u+ls.x)*t,ce+=(d+ls.z)*t);const C=Math.exp(-6*t);ls.x*=C,ls.z*=C,Xw();const A=H.sitting||Mt?0:Math.hypot(u,d);if(A>.3&&cs<=0){const B=Math.atan2(u,d)+Math.PI;Vn+=br(B-Vn)*Math.min(1,n*12)}Mt&&(Vn=Math.atan2(Mt.p.g.position.x-ie,Mt.p.g.position.z-ce)+Math.PI),lt.g.position.set(ie,(H.sitting?.05:0)+kt.y,ce),lt.g.rotation.y=Vn,lt.g.rotation.z=a>0?Math.sin(ft*2.2)*.2*a:0;const R=!bi(H)&&H.withdrawal>70?(H.withdrawal-70)/30:0;lt.g.rotation.x=cs>0?-Math.min(1.2,cs*2):R*Math.sin(ft*47)*.05,kt.roll>0?lt.g.rotation.x=-(1-kt.roll/Pt.rollTime)*Math.PI*2:kt.trip>0?lt.g.rotation.x=-Math.min(1.35,(Pt.tripTime-kt.trip)*6):kt.slide>0?lt.g.rotation.x=.35:kt.running&&(lt.g.rotation.x+=-.12),vr>0&&(Vn=Math.atan2(Co.x-ie,Co.z-ce)+Math.PI/2),_c(lt,oi>0?0:kt.onGround?A:0,t)&&oi<=0&&kt.onGround&&Ge("step",{vol:kt.running?.7:.5,pitch:(kt.running?1.15:.9)+Math.random()*.2});const P=co(6),w=P?qt(br(Math.atan2(P.p.g.position.x-ie,P.p.g.position.z-ce)+Math.PI-Vn),-.9,.9):0;if(Gl+=(w-Gl)*Math.min(1,n*5),Fi.head&&Fi.head.rotateY(Gl),_>.3){const B=(_-.3)*1.6;(Ye=Fi.armL)==null||Ye.rotateZ(Math.sin(ft*5.3)*B),(Ke=Fi.armR)==null||Ke.rotateZ(Math.sin(ft*4.1+1)*B)}for(let B=Uo.length-1;B>=0;B--){const q=Uo[B];q.t+=n,q.vy-=12*n,q.m.position.x+=q.vx*n,q.m.position.y=Math.max(.25,q.m.position.y+q.vy*n),q.m.position.z+=q.vz*n,q.m.rotation.x+=n*8,q.t>1.6&&(Ft.remove(q.m),Uo.splice(B,1))}if(oi>0?lt.body.position.y=Math.abs(Math.sin(ft*10))*.3:H.sitting&&(lt.body.position.y=-.32),sc+=(-yr*220-sc*14)*n,yr+=sc*n,lt.body.scale.set(1-yr*.5,1+yr,1-yr*.5),eu.visible=H.items.blanket||H.items.goodBlanket,xr.visible=H.items.scooter,tu.visible=H.items.sign,nu.visible=H.items.shades,T1(H,t,ie,ce,bi(H)),H.own.fell&&(H.own.fell=!1,cs=.8,Ge("nope")),Cg.update(H,ft),jl-=n,jl<=0){jl=.5;const B=L1(H,ie,ce);B&&Si(B)}Ar=V1(fp);for(let B=0;B<2;B++)if(zl[B]-=t,zl[B]<=0){const q=B===0?1:-1,he=qt(ie-q*66,-112,112),T=B===0?-2:2,M=ci.some(O=>O.lane===B&&Math.abs(O.x-he)<9);if(zl[B]=M?.5:2+Math.random()*3.5,!M&&ci.length<($n===0?5:8)){const O=DS(hp[Math.floor(Math.random()*hp.length)],Math.floor(Math.random()*4));O.g.position.set(he,0,T),O.g.rotation.y=q>0?0:Math.PI,Yt(O.g);const J=bn.cruiseMin+Math.random()*(bn.cruiseMax-bn.cruiseMin);ci.push({m:O,x:he,z:T,dir:q,speed:J,cruise:J,honkT:0,lane:B})}}Vl-=t;let b=0;for(let B=ci.length-1;B>=0;B--){const q=ci[B];let he=null,T=1e9;for(const Q of ci){if(Q===q||Q.lane!==q.lane)continue;const Z=(Q.x-q.x)*q.dir;Z>0&&Z<T&&(T=Z,he=Q)}const M=W1(q,{x:ie,z:ce},Ar,he);q.honkT-=t;const O=Math.hypot(q.x-ie,q.z-ce);M.honk&&q.honkT<=0&&q.speed>.8&&O<25&&(Ge("horn",{pitch:.85+B%4*.08,vol:qt(1.2-O/25,.2,1)}),q.honkT=3);const J=q.speed;q.speed=X1(q.speed,M.want,t),q.m.brake.emissiveIntensity=q.speed<J-.001||q.speed<.3?3:.15,q.x+=q.dir*q.speed*t,q.m.g.position.x=q.x;for(const Q of q.m.wheels)Q.rotation[q.m.spin]+=q.m.spinSign*q.speed*t/.36;if(Math.abs(q.x)>114||(q.x-ie)*q.dir>72){Ft.remove(q.m.g),ci.splice(B,1);continue}Math.abs(ce-q.z)<2.2&&(ie-q.x)*q.dir>-2&&(ie-q.x)*q.dir<10&&q.speed>2&&(b=1),$1(q,{x:ie,z:ce})&&(q.speed>1.2&&Vl<=0?(z1(H),Jr(),Vl=1.5,Hs=.8,ic=.14,Xo=1,cs=.7,ls.x=q.dir*(3+q.speed*.8),ls.z=(q.z<0?-1:1)*8,q.speed=0,Ge("hit"),vs(.45)):q.speed<=1.2&&(ce=q.z+(ce>=q.z?1:-1)*bn.hitWide))}for(const B of og){const q=Ar==="stop"?0:Ar==="slow"?1:2;B.mats.forEach((he,T)=>he.emissiveIntensity=T===3?1.5:T===q?2.5:0),B.mats[3].emissive.setHex([16724016,16760864,3211104][q])}jw(t,n);const I=Ns.tx-Sn.position.x,G=Ns.tz-Sn.position.z,E=Math.hypot(I,G);if(E<.3){if(Ns.wait-=t,Ns.wait<=0){const B=[[10,15],[6,18],[-12,-10],[-20,-14],[2,-14],[13,12]],q=B[Math.floor(Math.random()*B.length)];Ns.tx=q[0],Ns.tz=q[1],Ns.wait=4+Math.random()*6}}else Sn.position.x+=I/E*1.4*t,Sn.position.z+=G/E*1.4*t,Sn.rotation.y=Math.atan2(I,G)+Math.PI,Sn.position.y=Math.abs(Math.sin(ft*9))*.06;for(const B of nd){const q=Fe[B.spot],he=(Ja[B.spot]??0)>0;B.a+=t*(he?2.5:.4);const T=he?ie:q.x,M=he?ce:q.z,O=he?.7+B.r*.4:B.r,J=T+Math.cos(B.a)*O,Q=M+Math.sin(B.a)*O;B.m.position.x+=(J-B.m.position.x)*Math.min(1,t*3),B.m.position.z+=(Q-B.m.position.z)*Math.min(1,t*3),B.m.position.y=Math.abs(Math.sin(ft*7+B.r*5))*.12,B.m.rotation.y=-B.a}for(const B of Object.keys(Ja))Ja[B]-=t;ag.forEach((B,q)=>B.color.setHSL(Math.floor(ft*1.3+q)*.17%1,.5,.55+Math.sin(ft*9)*.05));const D=G1(H),z=jn.g.position,$=ie-z.x,Y=ce-z.z,X=Math.hypot($,Y),ae=B=>{Dt.mode="chase",Dt.t=0,Si(B),Ge("whistle")};H.copAlert&&(H.copAlert=!1,X<D.sight&&ae("The cop saw that. Run!")),Dt.mode==="patrol"&&H.buzz>=D.drunkAt&&X<D.drunkRange&&ae('Cop: "Hey! You!"');let xe=2;Dt.mode==="chase"?(Dt.t+=t,z.x+=$/X*D.speed*t,z.z+=Y/X*D.speed*t,jn.g.rotation.y=Math.atan2($,Y)+Math.PI,xe=D.speed,X<1.1&&H1(H),(Dt.t>12||X>D.sight+6)&&(Dt.mode="patrol",Si("The cop gave up."))):(Math.abs(z.x-ie)>60&&z.set(ie+(Math.random()<.5?-45:45),0,Dt.side),z.z+=Math.sign(Dt.side-z.z)*Math.min(Math.abs(Dt.side-z.z),2*t),z.x+=Dt.dir*2*t,jn.g.rotation.y=Dt.dir>0?-Math.PI/2:Math.PI/2,z.x>ie+32&&(Dt.dir=-1,Dt.side=Dt.side>0?-5.5:6.5),z.x<ie-32&&(Dt.dir=1)),_c(jn,xe,t);const be=Dt.mode==="chase";bc.emissiveIntensity=be?3:0,be&&bc.emissive.setHex(Math.floor(ft*6)%2?2113791:16719904);for(let B=Qa.length-1;B>=0;B--){const q=Qa[B];q.t+=n,q.o.position.y+=n*4,q.o.rotation.y+=n*12,q.o.scale.setScalar(1+q.t*3),q.t>.35&&(Ft.remove(q.o),Qa.splice(B,1))}const $e=H.health<35||be||b>0;if(Fa-=n,$e&&Fa<=0&&(Ge("heart",{vol:H.health<35?1:.6}),Fa=H.health<20?.55:be?.6:.8),Xl-=n,Xl<=0){Xl=.25;for(const B of td)B.o.visible=Math.abs(B.x-ie)<Ol;for(const B of Wo)Math.abs(B.position.x-ie)>Ol&&(B.visible=!1);Wo.forEach((B,q)=>{H.bottlesLeft[q]&&Math.abs(B.position.x-ie)<=Ol&&(B.visible=!0)})}const mt=Math.min(1,H.buzz/35);rt+=(mt-rt)*Math.min(1,n*1.5);const K=ro(H),re=K>vt.nightAt?Math.min(1,(K-vt.nightAt)/.1):0,fe=yc(K),ue=K/vt.nightAt*Math.PI;zt.position.set(ie+Math.cos(ue)*24,3+fe.sunH*28,ce-14),zt.target.position.set(ie,0,ce),zt.intensity=fe.sunI,zt.color.setRGB(...fe.sun),Za.intensity=fe.hemiI,Za.color.setRGB(...fe.hemiSky),Za.groundColor.setRGB(...fe.hemiGround);const Ce=H.draw.weather==="rain"?.8:H.draw.weather==="cold"?.94:1,Pe=new Re().setRGB(...cw(K,rt,ft)).multiplyScalar(rt>.5?1:Ce);Ft.background=Pe;const je=Mc.map(B=>({l:B,d:Math.abs(B.g.position.x-ie)+Math.abs(B.g.position.z-ce)*.5})).sort((B,q)=>B.d-q.d).slice(0,4);dg.forEach((B,q)=>{var T;const he=(T=je[q])==null?void 0:T.l;he&&(B.position.set(he.pool.position.x,3.6,he.pool.position.z),B.intensity=fe.lamps*14,B.visible=fe.lamps>.01)});const wt=fe.neon*(1+rt*.5),Qe=Math.floor(ft*3);for(let B=0;B<sn.neonBase.length;B++)sn.neon.setColorAt(B,Yw.copy(sn.neonBase[(B+Qe)%sn.neonBase.length]).multiplyScalar(wt));sn.neon.instanceColor.needsUpdate=!0;const Tt=Ft.fog;Tt.color.copy(Pe),Tt.near=26+rt*10,Tt.far=58+rt*4;for(const B of Wc)B.emissiveIntensity=fe.windows*1.6;kS.opacity=fe.lamps*.32;for(const B of rg){const q=Math.hypot(ie-B.x,ce-B.z)<=B.r;B.m.material.opacity=q?.6:.14+Math.sin(ft*2)*.04}qw(n,r,o);const F=qt(H.whimsy/30);yn.sat=(.86+rt*.5)*(.3+.7*F),yn.warm=fe.warm*(1-rt)+rt*.9,yn.contrast=.95+rt*.17,yn.glow=.2+rt*.9+re*.6,yn.bright=fe.bright+rt*.02,yn.flood=qt((rt-.15)/.5),yn.tilt=.6,yn.outline=.85,Kw.style.opacity=kt.stamina<99?"1":"0",mp.style.width=kt.stamina+"%",mp.style.background=kt.dry?"#d84a3a":"#ffb800";const _n=Math.max(0,1-Math.abs(Fa-.5)*4);yn.red=Math.max(Xo,H.health<35?(35-H.health)/35*(.75+.25*_n):0),yn.jitter=R*.9,Ko=Fm(H,Ki()),Lw(),Ww(n),Mg(n),Fw(n),Wl+=n,Wl>3&&(Wl=0,Ss()),H.dead&&Ew()}const Us=new L,Zl=new L,Jl=new L;let Cc=!1;function qw(n,e,t){Hs=Math.max(0,Hs-n*2),Xo=Math.max(0,Xo-n*2.5);const i=Eg[H.effect??"beer"],s=H.buzz/100;Cc=!1;let r=No;if(oi>0){const c=1-oi/2.2,l=Vn+Math.PI+wc*.9,h=4.6-c*1.4;Xe.position.set(ie+Math.sin(l)*h,1.1+c*.4,ce+Math.cos(l)*h),Xe.lookAt(ie,1.25,ce),Xe.rotateZ(wc*.06*(1-c)),r=No-6-c*4}else if(_s){const c=Math.round(ie/24)*24,l=Math.round(ce/16)*16,h=26-rt*10,u=18-rt*4;Xe.position.lerp($w.set(c,h,l-u),Math.min(1,n*6)),Xe.lookAt(Xe.position.x,0,Xe.position.z+u)}else{const c=Math.min(1,n*2.2),l=(ie-(st.vx===0&&st.vz===0?ie:uu))/Math.max(n,.001),h=(ce-(st.vx===0&&st.vz===0?ce:du))/Math.max(n,.001);st.vx+=(qt(l,-9,9)-st.vx)*c,st.vz+=(qt(h,-9,9)-st.vz)*c,uu=ie,du=ce;const u=1-rt;let d=ie+qt(st.vx*jt.aheadSecs,-3.2,jt.aheadMax)*u,p=ce+qt(st.vz*jt.aheadSecs,-3.2,jt.aheadMax)*u;const g=li+qn;d+=Math.sin(g)*jt.highAhead*rt,p+=Math.cos(g)*jt.highAhead*rt;let _=1;const m=Ki(),f=Mt??(m.ped?co(2.8):null);if(f)d=as(d,(f.p.g.position.x+ie)/2,jt.leanTalk),p=as(p,(f.p.g.position.z+ce)/2,jt.leanTalk),_*=Mt?jt.talkPush:.93;else if(km(m)||Dm(m)){let E=Wh[0],D=1e9;for(const z of Wh){const $=Math.hypot(z.x-ie,z.z-ce);$<D&&(D=$,E=z)}d=as(d,E.x,jt.leanDoor),p=as(p,E.z,jt.leanDoor)}Math.abs(ce)<4.3&&(_*=jt.roadPull),e>.1&&t>6.5&&(_*=jt.runPull),rt>.3&&Ko.some(E=>E.whimsy)&&(_*=.82),m.catNear&&rt>.3&&(d=as(d,Sn.position.x,.4),p=as(p,Sn.position.z,.4)),st.fx+=(d-st.fx)*Math.min(1,n*3),st.fz+=(p-st.fz)*Math.min(1,n*3);const y=Xe.aspect<1?1:0,x=as(jt.soberDist+y*.5,jt.highDist,rt)*_*bs;st.dist+=(x-st.dist)*Math.min(1,n*1.6);const C=as(jt.soberPitch+y*.05,jt.highPitch,rt),A=Math.cos(C);Us.set(-Math.sin(g)*A,Math.sin(C),-Math.cos(g)*A);const R=i.sway*s*rt,P=Math.cos(g),w=-Math.sin(g),b=(Math.sin(ft*.9)*.7+Math.sin(ft*.37)*.5)*R,I=Math.sin(ft*1.3)*.3*R;Xe.position.set(st.fx+Us.x*st.dist+P*b,.9+Us.y*st.dist+I,st.fz+Us.z*st.dist+w*b),Xe.lookAt(Xe.position.x-Us.x,Xe.position.y-Us.y,Xe.position.z-Us.z);const G=rt>.05?i.roll*rt*(Math.sin(ft*.7)+.4*Math.sin(ft*1.9)):0;if(st.roll+=(G-st.roll)*Math.min(1,n*3),Math.abs(st.roll)>1e-4&&Xe.rotateZ(st.roll),r=No*(1+i.breathe*rt*Math.sin(ft*.8)),rt<.02&&li===0&&qn===0&&Hs<=0&&Math.abs(st.roll)<1e-4){Xe.updateMatrixWorld(),Zl.setFromMatrixColumn(Xe.matrixWorld,0),Jl.setFromMatrixColumn(Xe.matrixWorld,1);const E=2*st.dist*Math.tan(Dp.degToRad(r)/2)/ui.lowH,D=Xe.position.dot(Zl),z=Xe.position.dot(Jl);Xe.position.addScaledVector(Zl,Math.round(D/E)*E-D).addScaledVector(Jl,Math.round(z/E)*E-z),Cc=!0}}Math.abs(Xe.fov-r)>.01&&(Xe.fov=r,Xe.updateProjectionMatrix());const o=!bi(H)&&H.withdrawal>70?(H.withdrawal-70)/30:0,a=Hs*Hs*.9+o*.05;a>0&&(Xe.position.x+=(Math.random()-.5)*a,Xe.position.y+=(Math.random()-.5)*a)}let uu=0,du=0;const Yw=new Re,Kw=qe("stam"),mp=qe("stamFill"),yn={sat:.58,warm:.22,contrast:.97,glow:.2,red:0,jitter:0,bright:1.05};let Ic=performance.now(),Ql=0,Ba=0,cc=60,za=0,gp=0;const Ag=qe("dbg");ng&&Ag.classList.remove("hidden");function Rg(n){const e=(n-Ic)/1e3,t=Math.min(.05,e);if(Ic=n,ln&&!En&&!wn?hu(t):ln&&(_c(lt,0,0),Mg(t)),pn.info.reset(),ui.render(Ft,Xe,yn,ft,vc[$n].glow),Ql++,Ba+=e,Ba>=1&&(cc=Ql/Ba,Ql=0,Ba=0,ln&&!En&&document.visibilityState==="visible"&&(gp++,za=cc<40?za+1:0,mw&&gp>4&&za>=3&&$n>0&&($n--,za=0,ed())),ng)){const i=pn.info.render;Ag.textContent=`fps ${cc.toFixed(0)}  q${$n}  ${ui.lowW}x${ui.lowH} x${ui.scale}
calls ${i.calls}  tris ${i.triangles}
peds ${kn.filter(s=>s.active).length}  cars ${ci.length}  ${ln?Ms(ie,ce):""}
audio ${nw()}  light ${Ar}  snap ${Cc?"on":"off"}
models ${Ju.length}`}requestAnimationFrame(Rg)}let Cg;const Zw={likes:" ♥",hates:" ✗",meh:"",none:""};function qc(){for(;H.messages.length;){const n=H.messages.shift();n.startsWith("Combo!")?(JS(n),Ge("sparkle",{pitch:1.2})):Si(n)}}const Jw={pos:()=>({x:ie,z:ce}),pedNear:()=>!!co(2.8),close:Zo,open:n=>{wn=n,Rc()},rerender:Rc,flush:qc,sound:n=>Ge(n)};async function Qw(){Yi.innerHTML='<div style="opacity:.6">Loading the city…</div>',await PS(),vw(),yw(),bw(),Cg=new XS(Ft,lt.g),ZS(()=>{ln&&!En&&!wn&&$o("bag")}),ig(),Xe.position.set(-20,10,-4),Xe.lookAt(-20,0,6),H=Yu("BOOT"),hg(),sd(),requestAnimationFrame(Rg)}Qw();window.__sg={get s(){return H},get pos(){return{px:ie,pz:ce}},tp(n,e){ie=n,ce=e,st.fx=n,st.fz=e,uu=n,du=e},get acts(){return Ko.map(n=>n.id)},act:Ac,doDrink:hd,startLife:Ec,continueLife:pg,pauseGame:jc,resumeGame:rd,saveLife:Ss,get paused(){return En},get running(){return ln},get cop(){return{...Dt,x:jn.g.position.x,z:jn.g.position.z}},setCop(n,e){jn.g.position.set(n,0,e)},get cat(){return{x:Sn.position.x,z:Sn.position.z}},get cars(){return ci.map(n=>({x:+n.x.toFixed(2),z:n.z,speed:+n.speed.toFixed(2),dir:n.dir}))},get peds(){return kn.filter(n=>n.active).map(n=>({kind:n.kind,x:+n.p.g.position.x.toFixed(1),z:+n.p.g.position.z.toFixed(1),asks:n.asks,mad:n.mad>0}))},summon(n){const e=kn.find(t=>t.kind===n&&!t.active)??kn.find(t=>t.kind===n);return e.active=!0,e.p.g.visible=!0,e.asks=0,e.mad=0,e.talkT=3,e.id=++lg,e.p.g.position.set(ie+1.2,0,ce),n},sayLine:ld,get begOpen(){return!!Mt},get lines(){return Mt?Vc(H,Ki()):[]},get bubbles(){return kr.map(n=>n.el.textContent)},openShop:$o,closeShop:Zo,get shopOpen(){return wn},buyRow(n){var e;(e=Vs.querySelectorAll(".srow")[n])==null||e.dispatchEvent(new PointerEvent("pointerdown"))},get light(){return Ar},get fps(){return cc},get quality(){return $n},get sounds(){return Ka.map(n=>n.name)},get grade(){return{...yn}},get camYaw(){return li},setUserCam(n,e){qn=n,bs=e},centerCam:id,get cam(){return{...st,userYaw:qn,userZoom:bs,x:Xe.position.x,y:Xe.position.y,z:Xe.position.z,fov:Xe.fov,snapped:Cc}},get models(){return[...Ju]},get highness(){return rt},bench(n=60){const e=pn.getContext(),t=new Uint8Array(4),i=performance.now();for(let s=0;s<n;s++)pn.info.reset(),ui.render(Ft,Xe,yn,ft,vc[$n].glow),e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,t);return+((performance.now()-i)/n).toFixed(2)},setQuality(n){$n=n,ed()},get render(){const n=pn.info.render;return{calls:n.calls,tris:n.triangles,low:[ui.lowW,ui.lowH,ui.scale]}},setTime(n){H.time=n*vt.dayLength},jump(){Qu(kt)},setRun(n){$c=n},get mover(){return{...kt}},get things(){return sn.things.map(n=>({id:n.id,kind:n.kind,x:n.x,z:n.z}))},poke(n){const e=sn.things.filter(t=>t.kind===n).sort((t,i)=>Math.abs(t.x-ie)-Math.abs(i.x-ie))[0];return e?(ie=e.x+.6,ce=e.z-(e.z>0?.8:-.8),cd(e),e.kind):null},get bits(){return Uo.length},get sky(){return yc(ro(H))},stick(n,e){Yn.x=n,Yn.y=e},sim(n,e){for(let t=0;t<n&&ln&&!H.dead;t+=1/30)e==null||e(),hu(1/30);pn.info.reset(),H.dead&&ln&&hu(1/30),ui.render(Ft,Xe,yn,ft,vc[$n].glow)}};Object.assign(window.__sg,{ownState:()=>H.own,give:n=>Zt(H,n,ie,ce),use:n=>Mm(H,n,!!co(2.8)),craft:n=>eg(H,n,ie,ce),steal:(n,e)=>Em(H,n,e),pawnSell:n=>Rm(H,n),openPanel:n=>$o(n),drain:qc,tapSel:n=>{var e;return(e=document.querySelector(n))==null?void 0:e.dispatchEvent(new PointerEvent("pointerdown"))}});
