(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ku="170",_g=0,Vd=1,xg=2,Kp=1,Zp=2,Vi=3,Qi=0,kn=1,Ai=2,Ss=0,Hr=1,Ac=2,Wd=3,Xd=4,vg=5,$s=100,yg=101,Mg=102,bg=103,Sg=104,wg=200,Tg=201,Eg=202,Ag=203,xh=204,vh=205,Rg=206,Cg=207,Ig=208,Lg=209,Pg=210,kg=211,Dg=212,Ng=213,Ug=214,yh=0,Mh=1,bh=2,Kr=3,Sh=4,wh=5,Th=6,Eh=7,Du=0,Fg=1,Og=2,ws=0,Bg=1,zg=2,Hg=3,Gg=4,Vg=5,Wg=6,Xg=7,$d="attached",$g="detached",Jp=300,Zr=301,Jr=302,Ah=303,Rh=304,Yc=306,Qr=1e3,ys=1001,Rc=1002,qt=1003,Qp=1004,Fo=1005,zn=1006,sc=1007,ji=1008,es=1009,em=1010,tm=1011,Yo=1012,Nu=1013,Zs=1014,vi=1015,fo=1016,Uu=1017,Fu=1018,eo=1020,nm=35902,im=1021,sm=1022,Qn=1023,rm=1024,om=1025,Gr=1026,to=1027,Ou=1028,Bu=1029,am=1030,zu=1031,Hu=1033,rc=33776,oc=33777,ac=33778,cc=33779,Ch=35840,Ih=35841,Lh=35842,Ph=35843,kh=36196,Dh=37492,Nh=37496,Uh=37808,Fh=37809,Oh=37810,Bh=37811,zh=37812,Hh=37813,Gh=37814,Vh=37815,Wh=37816,Xh=37817,$h=37818,jh=37819,qh=37820,Yh=37821,lc=36492,Kh=36494,Zh=36495,cm=36283,Jh=36284,Qh=36285,eu=36286,lm=2200,jg=2201,qg=2202,Ko=2300,Zo=2301,ml=2302,Nr=2400,Ur=2401,Cc=2402,Gu=2500,Yg=2501,Kg=0,hm=1,tu=2,Zg=3200,Jg=3201,Vu=0,Qg=1,xs="",Ut="srgb",bn="srgb-linear",Kc="linear",yt="srgb",rr=7680,jd=519,e_=512,t_=513,n_=514,um=515,i_=516,s_=517,r_=518,o_=519,nu=35044,qd="300 es",qi=2e3,Ic=2001;class er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yd=1234567;const Vo=Math.PI/180,no=180/Math.PI;function yi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function ln(n,e,t){return Math.max(e,Math.min(t,n))}function Wu(n,e){return(n%e+e)%e}function a_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function c_(n,e,t){return n!==e?(t-n)/(e-n):0}function Wo(n,e,t){return(1-t)*n+t*e}function l_(n,e,t,i){return Wo(n,e,1-Math.exp(-t*i))}function h_(n,e=1){return e-Math.abs(Wu(n,e*2)-e)}function u_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function d_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function f_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function p_(n,e){return n+Math.random()*(e-n)}function m_(n){return n*(.5-Math.random())}function g_(n){n!==void 0&&(Yd=n);let e=Yd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function __(n){return n*Vo}function x_(n){return n*no}function v_(n){return(n&n-1)===0&&n!==0}function y_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function M_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function b_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const dm={DEG2RAD:Vo,RAD2DEG:no,generateUUID:yi,clamp:ln,euclideanModulo:Wu,mapLinear:a_,inverseLerp:c_,lerp:Wo,damp:l_,pingpong:h_,smoothstep:u_,smootherstep:d_,randInt:f_,randFloat:p_,randFloatSpread:m_,seededRandom:g_,degToRad:__,radToDeg:x_,isPowerOfTwo:v_,ceilPowerOfTwo:y_,floorPowerOfTwo:M_,setQuaternionFromProperEuler:b_,normalize:vt,denormalize:gi};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,s,r,o,a,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],v=s[1],y=s[4],x=s[7],C=s[2],A=s[5],R=s[8];return r[0]=o*_+a*v+c*C,r[3]=o*m+a*y+c*A,r[6]=o*f+a*x+c*R,r[1]=l*_+h*v+u*C,r[4]=l*m+h*y+u*A,r[7]=l*f+h*x+u*R,r[2]=d*_+p*v+g*C,r[5]=d*m+p*y+g*A,r[8]=d*f+p*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gl.makeScale(e,t)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new Ve;function fm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function S_(){const n=Jo("canvas");return n.style.display="block",n}const Kd={};function Oo(n){n in Kd||(Kd[n]=!0,console.warn(n))}function w_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function T_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function E_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tt={enabled:!0,workingColorSpace:bn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===yt&&(n.r=Ki(n.r),n.g=Ki(n.g),n.b=Ki(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===yt&&(n.r=Vr(n.r),n.g=Vr(n.g),n.b=Vr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===xs?Kc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Zd=[.64,.33,.3,.6,.15,.06],Jd=[.2126,.7152,.0722],Qd=[.3127,.329],ef=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tf=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[bn]:{primaries:Zd,whitePoint:Qd,transfer:Kc,toXYZ:ef,fromXYZ:tf,luminanceCoefficients:Jd,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:Zd,whitePoint:Qd,transfer:yt,toXYZ:ef,fromXYZ:tf,luminanceCoefficients:Jd,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}});let or;class A_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{or===void 0&&(or=Jo("canvas")),or.width=e.width,or.height=e.height;const i=or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=or}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ki(t[i]/255)*255):t[i]=Ki(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let R_=0;class pm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_l(s[o].image)):r.push(_l(s[o]))}else r=_l(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function _l(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?A_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let C_=0;class Vt extends er{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=ys,s=ys,r=zn,o=ji,a=Qn,c=es,l=Vt.DEFAULT_ANISOTROPY,h=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=yi(),this.name="",this.source=new pm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case ys:e.x=e.x<0?0:1;break;case Rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case ys:e.y=e.y<0?0:1;break;case Rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Jp;Vt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(p+1)/2,C=(f+1)/2,A=(h+d)/4,R=(u+_)/4,D=(g+m)/4;return y>x&&y>C?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=A/i,r=R/i):x>C?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=D/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=D/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class I_ extends er{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Vt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new pm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends I_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class mm extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class L_ extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*_,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const C=Math.sqrt(y),A=Math.atan2(C,f*v);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const x=a*v;if(c=c*m+d*x,l=l*m+p*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xl.copy(this).projectOnVector(e),this.sub(xl)}reflect(e){return this.sub(xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xl=new k,nf=new Gn;class bi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(r,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),xa.subVectors(this.max,So),ar.subVectors(e.a,So),cr.subVectors(e.b,So),lr.subVectors(e.c,So),as.subVectors(cr,ar),cs.subVectors(lr,cr),Ps.subVectors(ar,lr);let t=[0,-as.z,as.y,0,-cs.z,cs.y,0,-Ps.z,Ps.y,as.z,0,-as.x,cs.z,0,-cs.x,Ps.z,0,-Ps.x,-as.y,as.x,0,-cs.y,cs.x,0,-Ps.y,Ps.x,0];return!vl(t,ar,cr,lr,xa)||(t=[1,0,0,0,1,0,0,0,1],!vl(t,ar,cr,lr,xa))?!1:(va.crossVectors(as,cs),t=[va.x,va.y,va.z],vl(t,ar,cr,lr,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new k,new k,new k,new k,new k,new k,new k,new k],ai=new k,_a=new bi,ar=new k,cr=new k,lr=new k,as=new k,cs=new k,Ps=new k,So=new k,xa=new k,va=new k,ks=new k;function vl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ks.fromArray(n,r);const a=s.x*Math.abs(ks.x)+s.y*Math.abs(ks.y)+s.z*Math.abs(ks.z),c=e.dot(ks),l=t.dot(ks),h=i.dot(ks);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const P_=new bi,wo=new k,yl=new k;class Pi{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):P_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);const t=wo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(wo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(yl)),this.expandByPoint(wo.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new k,Ml=new k,ya=new k,ls=new k,bl=new k,Ma=new k,Sl=new k;class Zc{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ml.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),ls.copy(this.origin).sub(Ml);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ya),a=ls.dot(this.direction),c=-ls.dot(ya),l=ls.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ml).addScaledVector(ya,d),p}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),s=Oi.dot(Oi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,i,s,r){bl.subVectors(t,e),Ma.subVectors(i,e),Sl.crossVectors(bl,Ma);let o=this.direction.dot(Sl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ls.subVectors(this.origin,e);const c=a*this.direction.dot(Ma.crossVectors(ls,Ma));if(c<0)return null;const l=a*this.direction.dot(bl.cross(ls));if(l<0||c+l>o)return null;const h=-a*ls.dot(Sl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,i,s,r,o,a,c,l,h,u,d,p,g,_,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,p,g,_,m)}set(e,t,i,s,r,o,a,c,l,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/hr.setFromMatrixColumn(e,0).length(),r=1/hr.setFromMatrixColumn(e,1).length(),o=1/hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k_,e,D_)}lookAt(e,t,i){const s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),hs.crossVectors(i,Fn),hs.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),hs.crossVectors(i,Fn)),hs.normalize(),ba.crossVectors(Fn,hs),s[0]=hs.x,s[4]=ba.x,s[8]=Fn.x,s[1]=hs.y,s[5]=ba.y,s[9]=Fn.y,s[2]=hs.z,s[6]=ba.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],v=i[3],y=i[7],x=i[11],C=i[15],A=s[0],R=s[4],D=s[8],w=s[12],M=s[1],P=s[5],V=s[9],T=s[13],U=s[2],H=s[6],j=s[10],K=s[14],$=s[3],ce=s[7],ue=s[11],ve=s[15];return r[0]=o*A+a*M+c*U+l*$,r[4]=o*R+a*P+c*H+l*ce,r[8]=o*D+a*V+c*j+l*ue,r[12]=o*w+a*T+c*K+l*ve,r[1]=h*A+u*M+d*U+p*$,r[5]=h*R+u*P+d*H+p*ce,r[9]=h*D+u*V+d*j+p*ue,r[13]=h*w+u*T+d*K+p*ve,r[2]=g*A+_*M+m*U+f*$,r[6]=g*R+_*P+m*H+f*ce,r[10]=g*D+_*V+m*j+f*ue,r[14]=g*w+_*T+m*K+f*ve,r[3]=v*A+y*M+x*U+C*$,r[7]=v*R+y*P+x*H+C*ce,r[11]=v*D+y*V+x*j+C*ue,r[15]=v*w+y*T+x*K+C*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*p-i*c*p)+_*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+i*o*p+r*a*h-i*l*h)+f*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,y=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,x=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,C=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,A=t*v+i*y+s*x+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=v*R,e[1]=(_*d*r-u*m*r-_*s*p+i*m*p+u*s*f-i*d*f)*R,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*f+i*c*f)*R,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*p-i*c*p)*R,e[4]=y*R,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*R,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*f-t*c*f)*R,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*p+t*c*p)*R,e[8]=x*R,e[9]=(g*u*r-h*_*r-g*i*p+t*_*p+h*i*f-t*u*f)*R,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*f+t*a*f)*R,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*p-t*a*p)*R,e[12]=C*R,e[13]=(h*_*s-g*u*s+g*i*d-t*_*d-h*i*m+t*u*m)*R,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,v=c*l,y=c*h,x=c*u,C=i.x,A=i.y,R=i.z;return s[0]=(1-(_+f))*C,s[1]=(p+x)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(p-x)*A,s[5]=(1-(d+f))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+y)*R,s[9]=(m-v)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=hr.set(s[0],s[1],s[2]).length();const o=hr.set(s[4],s[5],s[6]).length(),a=hr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ci.copy(this);const l=1/r,h=1/o,u=1/a;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,t.setFromRotationMatrix(ci),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=qi){const c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s);let p,g;if(a===qi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ic)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=qi){const c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*l,p=(i+s)*h;let g,_;if(a===qi)g=(o+r)*u,_=-2*u;else if(a===Ic)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hr=new k,ci=new Ne,k_=new k(0,0,0),D_=new k(1,1,1),hs=new k,ba=new k,Fn=new k,sf=new Ne,rf=new Gn;class Mi{constructor(e=0,t=0,i=0,s=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rf.setFromEuler(this),this.setFromQuaternion(rf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class gm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let N_=0;const of=new k,ur=new Gn,Bi=new Ne,Sa=new k,To=new k,U_=new k,F_=new Gn,af=new k(1,0,0),cf=new k(0,1,0),lf=new k(0,0,1),hf={type:"added"},O_={type:"removed"},dr={type:"childadded",child:null},wl={type:"childremoved",child:null};class It extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new k,t=new Mi,i=new Gn,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Ve}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(af,e)}rotateY(e){return this.rotateOnAxis(cf,e)}rotateZ(e){return this.rotateOnAxis(lf,e)}translateOnAxis(e,t){return of.copy(e).applyQuaternion(this.quaternion),this.position.add(of.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(af,e)}translateY(e){return this.translateOnAxis(cf,e)}translateZ(e){return this.translateOnAxis(lf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sa.copy(e):Sa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(To,Sa,this.up):Bi.lookAt(Sa,To,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),ur.setFromRotationMatrix(Bi),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hf),dr.child=e,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O_),wl.child=e,this.dispatchEvent(wl),wl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hf),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,U_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,F_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}It.DEFAULT_UP=new k(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new k,zi=new k,Tl=new k,Hi=new k,fr=new k,pr=new k,uf=new k,El=new k,Al=new k,Rl=new k,Cl=new ut,Il=new ut,Ll=new ut;class Jn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),li.subVectors(e,t),s.cross(li);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){li.subVectors(s,t),zi.subVectors(i,t),Tl.subVectors(e,t);const o=li.dot(li),a=li.dot(zi),c=li.dot(Tl),l=zi.dot(zi),h=zi.dot(Tl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hi.x),c.addScaledVector(o,Hi.y),c.addScaledVector(a,Hi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Cl.setScalar(0),Il.setScalar(0),Ll.setScalar(0),Cl.fromBufferAttribute(e,t),Il.fromBufferAttribute(e,i),Ll.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Cl,r.x),o.addScaledVector(Il,r.y),o.addScaledVector(Ll,r.z),o}static isFrontFacing(e,t,i,s){return li.subVectors(i,t),zi.subVectors(e,t),li.cross(zi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),li.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Jn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;fr.subVectors(s,i),pr.subVectors(r,i),El.subVectors(e,i);const c=fr.dot(El),l=pr.dot(El);if(c<=0&&l<=0)return t.copy(i);Al.subVectors(e,s);const h=fr.dot(Al),u=pr.dot(Al);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(fr,o);Rl.subVectors(e,r);const p=fr.dot(Rl),g=pr.dot(Rl);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(pr,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return uf.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(uf,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(i).addScaledVector(fr,o).addScaledVector(pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},wa={h:0,s:0,l:0};function Pl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Te{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=Wu(e,1),t=ln(t,0,1),i=ln(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Pl(o,r,e+1/3),this.g=Pl(o,r,e),this.b=Pl(o,r,e-1/3)}return tt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const i=_m[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return tt.fromWorkingColorSpace(rn.copy(this),e),Math.round(ln(rn.r*255,0,255))*65536+Math.round(ln(rn.g*255,0,255))*256+Math.round(ln(rn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(rn.copy(this),t);const i=rn.r,s=rn.g,r=rn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Ut){tt.fromWorkingColorSpace(rn.copy(this),e);const t=rn.r,i=rn.g,s=rn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(wa);const i=Wo(us.h,wa.h,t),s=Wo(us.s,wa.s,t),r=Wo(us.l,wa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Te;Te.NAMES=_m;let B_=0;class ii extends er{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=yi(),this.name="",this.blending=Hr,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=vh,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xh&&(i.blendSrc=this.blendSrc),this.blendDst!==vh&&(i.blendDst=this.blendDst),this.blendEquation!==$s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class In extends ii{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new k,Ta=new Ie;class en{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nu,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),e}}class xm extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vm extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pt extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}}let z_=0;const qn=new Ne,kl=new It,mr=new k,On=new bi,Eo=new bi,$t=new k;class tn extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fm(e)?vm:xm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,i){return qn.makeTranslation(e,t,i),this.applyMatrix4(qn),this}scale(e,t,i){return qn.makeScale(e,t,i),this.applyMatrix4(qn),this}lookAt(e){return kl.lookAt(e),kl.updateMatrix(),this.applyMatrix4(kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pt(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Eo.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(On.min,Eo.min),On.expandByPoint($t),$t.addVectors(On.max,Eo.max),On.expandByPoint($t)):(On.expandByPoint(Eo.min),On.expandByPoint(Eo.max))}On.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared($t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)$t.fromBufferAttribute(a,l),c&&(mr.fromBufferAttribute(e,l),$t.add(mr)),s=Math.max(s,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<i.count;D++)a[D]=new k,c[D]=new k;const l=new k,h=new k,u=new k,d=new Ie,p=new Ie,g=new Ie,_=new k,m=new k;function f(D,w,M){l.fromBufferAttribute(i,D),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[D].add(_),a[w].add(_),a[M].add(_),c[D].add(m),c[w].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,w=v.length;D<w;++D){const M=v[D],P=M.start,V=M.count;for(let T=P,U=P+V;T<U;T+=3)f(e.getX(T+0),e.getX(T+1),e.getX(T+2))}const y=new k,x=new k,C=new k,A=new k;function R(D){C.fromBufferAttribute(s,D),A.copy(C);const w=a[D];y.copy(w),y.sub(C.multiplyScalar(C.dot(w))).normalize(),x.crossVectors(A,w);const P=x.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,P)}for(let D=0,w=v.length;D<w;++D){const M=v[D],P=M.start,V=M.count;for(let T=P,U=P+V;T<U;T+=3)R(e.getX(T+0)),R(e.getX(T+1)),R(e.getX(T+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new k,r=new k,o=new k,a=new k,c=new k,l=new k,h=new k,u=new k;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new en(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const df=new Ne,Ds=new Zc,Ea=new Pi,ff=new k,Aa=new k,Ra=new k,Ca=new k,Dl=new k,Ia=new k,pf=new k,La=new k;class qe extends It{constructor(e=new tn,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ia.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Dl.fromBufferAttribute(u,e),o?Ia.addScaledVector(Dl,h):Ia.addScaledVector(Dl.sub(t),h))}t.add(Ia)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(r),Ds.copy(e.ray).recast(e.near),!(Ea.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Ea,ff)===null||Ds.origin.distanceToSquared(ff)>(e.far-e.near)**2))&&(df.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(df),!(i.boundingBox!==null&&Ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,C=y;x<C;x+=3){const A=a.getX(x),R=a.getX(x+1),D=a.getX(x+2);s=Pa(this,f,e,i,l,h,u,A,R,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=Pa(this,o,e,i,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,C=y;x<C;x+=3){const A=x,R=x+1,D=x+2;s=Pa(this,f,e,i,l,h,u,A,R,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,y=m+1,x=m+2;s=Pa(this,o,e,i,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function H_(n,e,t,i,s,r,o,a){let c;if(e.side===kn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Qi,a),c===null)return null;La.copy(a),La.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(La);return l<t.near||l>t.far?null:{distance:l,point:La.clone(),object:n}}function Pa(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Aa),n.getVertexPosition(c,Ra),n.getVertexPosition(l,Ca);const h=H_(n,e,t,i,Aa,Ra,Ca,pf);if(h){const u=new k;Jn.getBarycoord(pf,Aa,Ra,Ca,u),s&&(h.uv=Jn.getInterpolatedAttribute(s,a,c,l,u,new Ie)),r&&(h.uv1=Jn.getInterpolatedAttribute(r,a,c,l,u,new Ie)),o&&(h.normal=Jn.getInterpolatedAttribute(o,a,c,l,u,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new k,materialIndex:0};Jn.getNormal(Aa,Ra,Ca,d.normal),h.face=d,h.barycoord=u}return h}class si extends tn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(u,2));function g(_,m,f,v,y,x,C,A,R,D,w){const M=x/R,P=C/D,V=x/2,T=C/2,U=A/2,H=R+1,j=D+1;let K=0,$=0;const ce=new k;for(let ue=0;ue<j;ue++){const ve=ue*P-T;for(let ze=0;ze<H;ze++){const dt=ze*M-V;ce[_]=dt*v,ce[m]=ve*y,ce[f]=U,l.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[f]=A>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(ze/R),u.push(1-ue/D),K+=1}}for(let ue=0;ue<D;ue++)for(let ve=0;ve<R;ve++){const ze=d+ve+H*ue,dt=d+ve+H*(ue+1),Z=d+(ve+1)+H*(ue+1),se=d+(ve+1)+H*ue;c.push(ze,dt,se),c.push(dt,Z,se),$+=6}a.addGroup(p,$,w),p+=$,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function _n(n){const e={};for(let t=0;t<n.length;t++){const i=io(n[t]);for(const s in i)e[s]=i[s]}return e}function G_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ym(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const V_={clone:io,merge:_n};var W_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends ii{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W_,this.fragmentShader=X_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=G_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Mm extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ds=new k,mf=new Ie,gf=new Ie;class xn extends Mm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan(Vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,mf,gf),t.subVectors(gf,mf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gr=-90,_r=1;class $_ extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(gr,_r,e,t);s.layers=this.layers,this.add(s);const r=new xn(gr,_r,e,t);r.layers=this.layers,this.add(r);const o=new xn(gr,_r,e,t);o.layers=this.layers,this.add(o);const a=new xn(gr,_r,e,t);a.layers=this.layers,this.add(a);const c=new xn(gr,_r,e,t);c.layers=this.layers,this.add(c);const l=new xn(gr,_r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===qi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class bm extends Vt{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Zr,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class j_ extends Rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new bm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new si(5,5,5),r=new ts({name:"CubemapFromEquirect",uniforms:io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kn,blending:Ss});r.uniforms.tEquirect.value=t;const o=new qe(s,r),a=t.minFilter;return t.minFilter===ji&&(t.minFilter=zn),new $_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Nl=new k,q_=new k,Y_=new Ve;class Ws{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Nl.subVectors(i,t).cross(q_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Nl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Y_.getNormalMatrix(e),s=this.coplanarPoint(Nl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new Pi,ka=new k;class Xu{constructor(e=new Ws,t=new Ws,i=new Ws,s=new Ws,r=new Ws,o=new Ws){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],v=s[13],y=s[14],x=s[15];if(i[0].setComponents(c-r,d-l,m-p,x-f).normalize(),i[1].setComponents(c+r,d+l,m+p,x+f).normalize(),i[2].setComponents(c+o,d+h,m+g,x+v).normalize(),i[3].setComponents(c-o,d-h,m-g,x-v).normalize(),i[4].setComponents(c-a,d-u,m-_,x-y).normalize(),t===qi)i[5].setComponents(c+a,d+u,m+_,x+y).normalize();else if(t===Ic)i[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){return Ns.center.set(0,0,0),Ns.radius=.7071067811865476,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ka.x=s.normal.x>0?e.max.x:e.min.x,ka.y=s.normal.y>0?e.max.y:e.min.y,ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function K_(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ns extends tn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const v=f*d-o;for(let y=0;y<l;y++){const x=y*u-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<a;v++){const y=v+l*f,x=v+l*(f+1),C=v+1+l*(f+1),A=v+1+l*f;p.push(y,x,A),p.push(x,C,A)}this.setIndex(p),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(_,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.widthSegments,e.heightSegments)}}var Z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J_=`#ifdef USE_ALPHAHASH
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
#endif`,Q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ix=`#ifdef USE_AOMAP
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
#endif`,sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rx=`#ifdef USE_BATCHING
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
#endif`,ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hx=`#ifdef USE_IRIDESCENCE
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
#endif`,ux=`#ifdef USE_BUMPMAP
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
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yx=`#define PI 3.141592653589793
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
} // validated`,Mx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bx=`vec3 transformedNormal = objectNormal;
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
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ox=`#ifdef USE_GRADIENTMAP
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
}`,Bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gx=`uniform bool receiveShadow;
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
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qx=`PhysicalMaterial material;
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
#endif`,Yx=`struct PhysicalMaterial {
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
}`,Kx=`
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ev=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ov=`#if defined( USE_POINTS_UV )
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
#endif`,av=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dv=`#ifdef USE_MORPHTARGETS
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
#endif`,fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vv=`#ifdef USE_NORMALMAP
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
#endif`,yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ev=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nv=`float getShadowMask() {
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
}`,Uv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fv=`#ifdef USE_SKINNING
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
#endif`,Ov=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bv=`#ifdef USE_SKINNING
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
#endif`,zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wv=`#ifdef USE_TRANSMISSION
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
#endif`,Xv=`#ifdef USE_TRANSMISSION
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zv=`uniform sampler2D t2D;
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
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`#include <common>
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
}`,iy=`#if DEPTH_PACKING == 3200
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
}`,sy=`#define DISTANCE
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
}`,ry=`#define DISTANCE
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`uniform float scale;
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
}`,ly=`uniform vec3 diffuse;
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
}`,hy=`#include <common>
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
}`,uy=`uniform vec3 diffuse;
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
}`,dy=`#define LAMBERT
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
}`,fy=`#define LAMBERT
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
}`,py=`#define MATCAP
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
}`,my=`#define MATCAP
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
}`,gy=`#define NORMAL
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
}`,_y=`#define NORMAL
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
}`,xy=`#define PHONG
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
}`,vy=`#define PHONG
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
}`,yy=`#define STANDARD
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
}`,My=`#define STANDARD
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
}`,by=`#define TOON
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
}`,Sy=`#define TOON
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
}`,wy=`uniform float size;
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
}`,Ty=`uniform vec3 diffuse;
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
}`,Ey=`#include <common>
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
}`,Ay=`uniform vec3 color;
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
}`,Ry=`uniform float rotation;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Z_,alphahash_pars_fragment:J_,alphamap_fragment:Q_,alphamap_pars_fragment:ex,alphatest_fragment:tx,alphatest_pars_fragment:nx,aomap_fragment:ix,aomap_pars_fragment:sx,batching_pars_vertex:rx,batching_vertex:ox,begin_vertex:ax,beginnormal_vertex:cx,bsdfs:lx,iridescence_fragment:hx,bumpmap_pars_fragment:ux,clipping_planes_fragment:dx,clipping_planes_pars_fragment:fx,clipping_planes_pars_vertex:px,clipping_planes_vertex:mx,color_fragment:gx,color_pars_fragment:_x,color_pars_vertex:xx,color_vertex:vx,common:yx,cube_uv_reflection_fragment:Mx,defaultnormal_vertex:bx,displacementmap_pars_vertex:Sx,displacementmap_vertex:wx,emissivemap_fragment:Tx,emissivemap_pars_fragment:Ex,colorspace_fragment:Ax,colorspace_pars_fragment:Rx,envmap_fragment:Cx,envmap_common_pars_fragment:Ix,envmap_pars_fragment:Lx,envmap_pars_vertex:Px,envmap_physical_pars_fragment:Vx,envmap_vertex:kx,fog_vertex:Dx,fog_pars_vertex:Nx,fog_fragment:Ux,fog_pars_fragment:Fx,gradientmap_pars_fragment:Ox,lightmap_pars_fragment:Bx,lights_lambert_fragment:zx,lights_lambert_pars_fragment:Hx,lights_pars_begin:Gx,lights_toon_fragment:Wx,lights_toon_pars_fragment:Xx,lights_phong_fragment:$x,lights_phong_pars_fragment:jx,lights_physical_fragment:qx,lights_physical_pars_fragment:Yx,lights_fragment_begin:Kx,lights_fragment_maps:Zx,lights_fragment_end:Jx,logdepthbuf_fragment:Qx,logdepthbuf_pars_fragment:ev,logdepthbuf_pars_vertex:tv,logdepthbuf_vertex:nv,map_fragment:iv,map_pars_fragment:sv,map_particle_fragment:rv,map_particle_pars_fragment:ov,metalnessmap_fragment:av,metalnessmap_pars_fragment:cv,morphinstance_vertex:lv,morphcolor_vertex:hv,morphnormal_vertex:uv,morphtarget_pars_vertex:dv,morphtarget_vertex:fv,normal_fragment_begin:pv,normal_fragment_maps:mv,normal_pars_fragment:gv,normal_pars_vertex:_v,normal_vertex:xv,normalmap_pars_fragment:vv,clearcoat_normal_fragment_begin:yv,clearcoat_normal_fragment_maps:Mv,clearcoat_pars_fragment:bv,iridescence_pars_fragment:Sv,opaque_fragment:wv,packing:Tv,premultiplied_alpha_fragment:Ev,project_vertex:Av,dithering_fragment:Rv,dithering_pars_fragment:Cv,roughnessmap_fragment:Iv,roughnessmap_pars_fragment:Lv,shadowmap_pars_fragment:Pv,shadowmap_pars_vertex:kv,shadowmap_vertex:Dv,shadowmask_pars_fragment:Nv,skinbase_vertex:Uv,skinning_pars_vertex:Fv,skinning_vertex:Ov,skinnormal_vertex:Bv,specularmap_fragment:zv,specularmap_pars_fragment:Hv,tonemapping_fragment:Gv,tonemapping_pars_fragment:Vv,transmission_fragment:Wv,transmission_pars_fragment:Xv,uv_pars_fragment:$v,uv_pars_vertex:jv,uv_vertex:qv,worldpos_vertex:Yv,background_vert:Kv,background_frag:Zv,backgroundCube_vert:Jv,backgroundCube_frag:Qv,cube_vert:ey,cube_frag:ty,depth_vert:ny,depth_frag:iy,distanceRGBA_vert:sy,distanceRGBA_frag:ry,equirect_vert:oy,equirect_frag:ay,linedashed_vert:cy,linedashed_frag:ly,meshbasic_vert:hy,meshbasic_frag:uy,meshlambert_vert:dy,meshlambert_frag:fy,meshmatcap_vert:py,meshmatcap_frag:my,meshnormal_vert:gy,meshnormal_frag:_y,meshphong_vert:xy,meshphong_frag:vy,meshphysical_vert:yy,meshphysical_frag:My,meshtoon_vert:by,meshtoon_frag:Sy,points_vert:wy,points_frag:Ty,shadow_vert:Ey,shadow_frag:Ay,sprite_vert:Ry,sprite_frag:Cy},le={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Ti={basic:{uniforms:_n([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:_n([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Te(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:_n([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:_n([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:_n([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Te(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:_n([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:_n([le.points,le.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:_n([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:_n([le.common,le.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:_n([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:_n([le.sprite,le.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:_n([le.common,le.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:_n([le.lights,le.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Ti.physical={uniforms:_n([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Da={r:0,b:0,g:0},Us=new Mi,Iy=new Ne;function Ly(n,e,t,i,s,r,o){const a=new Te(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?f(a,c):x&&x.isColor&&(f(x,1),y=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Yc)?(h===void 0&&(h=new qe(new si(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:io(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Us.copy(y.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(Us)),h.material.toneMapped=tt.getTransfer(x.colorSpace)!==yt,(u!==x||d!==x.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new qe(new ns(2,2),new ts({name:"BackgroundMaterial",uniforms:io(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=tt.getTransfer(x.colorSpace)!==yt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,p=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function f(v,y){v.getRGB(Da,ym(n)),i.buffers.color.setClear(Da.r,Da.g,Da.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,f(a,c)},render:_,addToRenderList:m}}function Py(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(M,P,V,T,U){let H=!1;const j=u(T,V,P);r!==j&&(r=j,l(r.object)),H=p(M,T,V,U),H&&g(M,T,V,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(M,P,V,T),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,P,V){const T=V.wireframe===!0;let U=i[M.id];U===void 0&&(U={},i[M.id]=U);let H=U[P.id];H===void 0&&(H={},U[P.id]=H);let j=H[T];return j===void 0&&(j=d(c()),H[T]=j),j}function d(M){const P=[],V=[],T=[];for(let U=0;U<t;U++)P[U]=0,V[U]=0,T[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:T,object:M,attributes:{},index:null}}function p(M,P,V,T){const U=r.attributes,H=P.attributes;let j=0;const K=V.getAttributes();for(const $ in K)if(K[$].location>=0){const ue=U[$];let ve=H[$];if(ve===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),ue===void 0||ue.attribute!==ve||ve&&ue.data!==ve.data)return!0;j++}return r.attributesNum!==j||r.index!==T}function g(M,P,V,T){const U={},H=P.attributes;let j=0;const K=V.getAttributes();for(const $ in K)if(K[$].location>=0){let ue=H[$];ue===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));const ve={};ve.attribute=ue,ue&&ue.data&&(ve.data=ue.data),U[$]=ve,j++}r.attributes=U,r.attributesNum=j,r.index=T}function _(){const M=r.newAttributes;for(let P=0,V=M.length;P<V;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const V=r.newAttributes,T=r.enabledAttributes,U=r.attributeDivisors;V[M]=1,T[M]===0&&(n.enableVertexAttribArray(M),T[M]=1),U[M]!==P&&(n.vertexAttribDivisor(M,P),U[M]=P)}function v(){const M=r.newAttributes,P=r.enabledAttributes;for(let V=0,T=P.length;V<T;V++)P[V]!==M[V]&&(n.disableVertexAttribArray(V),P[V]=0)}function y(M,P,V,T,U,H,j){j===!0?n.vertexAttribIPointer(M,P,V,U,H):n.vertexAttribPointer(M,P,V,T,U,H)}function x(M,P,V,T){_();const U=T.attributes,H=V.getAttributes(),j=P.defaultAttributeValues;for(const K in H){const $=H[K];if($.location>=0){let ce=U[K];if(ce===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){const ue=ce.normalized,ve=ce.itemSize,ze=e.get(ce);if(ze===void 0)continue;const dt=ze.buffer,Z=ze.type,se=ze.bytesPerElement,ye=Z===n.INT||Z===n.UNSIGNED_INT||ce.gpuType===Nu;if(ce.isInterleavedBufferAttribute){const he=ce.data,Ae=he.stride,Ue=ce.offset;if(he.isInstancedInterleavedBuffer){for(let je=0;je<$.locationSize;je++)f($.location+je,he.meshPerAttribute);M.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let je=0;je<$.locationSize;je++)m($.location+je);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let je=0;je<$.locationSize;je++)y($.location+je,ve/$.locationSize,Z,ue,Ae*se,(Ue+ve/$.locationSize*je)*se,ye)}else{if(ce.isInstancedBufferAttribute){for(let he=0;he<$.locationSize;he++)f($.location+he,ce.meshPerAttribute);M.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let he=0;he<$.locationSize;he++)m($.location+he);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let he=0;he<$.locationSize;he++)y($.location+he,ve/$.locationSize,Z,ue,ve*se,ve/$.locationSize*he*se,ye)}}else if(j!==void 0){const ue=j[K];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv($.location,ue);break;case 3:n.vertexAttrib3fv($.location,ue);break;case 4:n.vertexAttrib4fv($.location,ue);break;default:n.vertexAttrib1fv($.location,ue)}}}}v()}function C(){D();for(const M in i){const P=i[M];for(const V in P){const T=P[V];for(const U in T)h(T[U].object),delete T[U];delete P[V]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const V in P){const T=P[V];for(const U in T)h(T[U].object),delete T[U];delete P[V]}delete i[M.id]}function R(M){for(const P in i){const V=i[P];if(V[M.id]===void 0)continue;const T=V[M.id];for(const U in T)h(T[U].object),delete T[U];delete V[M.id]}}function D(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function ky(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function c(l,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Dy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Qn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==es&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==vi&&!D)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:C,maxSamples:A}}function Ny(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ws,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:i,y=v*4;let x=f.clippingState||null;c.value=x,x=h(g,d,y,p);for(let C=0;C!==y;++C)x[C]=t[C];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=p;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Uy(n){let e=new WeakMap;function t(o,a){return a===Ah?o.mapping=Zr:a===Rh&&(o.mapping=Jr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ah||a===Rh)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new j_(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Jc extends Mm{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fr=4,_f=[.125,.215,.35,.446,.526,.582],js=20,Ul=new Jc,xf=new Te;let Fl=null,Ol=0,Bl=0,zl=!1;const Xs=(1+Math.sqrt(5))/2,xr=1/Xs,vf=[new k(-Xs,xr,0),new k(Xs,xr,0),new k(-xr,0,Xs),new k(xr,0,Xs),new k(0,Xs,-xr),new k(0,Xs,xr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class yf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fl,Ol,Bl),this._renderer.xr.enabled=zl,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:fo,format:Qn,colorSpace:bn,depthBuffer:!1},s=Mf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mf(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fy(r)),this._blurMaterial=Oy(r,e,t)}return s}_compileMaterial(e){const t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,Ul)}_sceneToCubeUV(e,t,i,s){const a=new xn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(xf),h.toneMapping=ws,h.autoClear=!1;const p=new In({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),g=new qe(new si,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(xf),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):v===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const y=this._cubeSize;Na(s,v*y,f>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Zr||e.mapping===Jr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new qe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Na(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Ul)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vf[(s-r-1)%vf.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new qe(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*js-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):js;m>js&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${js}`);const f=[];let v=0;for(let R=0;R<js;++R){const D=R/_,w=Math.exp(-D*D/2);f.push(w),R===0?v+=w:R<m&&(v+=2*w)}for(let R=0;R<f.length;R++)f[R]=f[R]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const x=this._sizeLods[s],C=3*x*(s>y-Fr?s-y+Fr:0),A=4*(this._cubeSize-x);Na(t,C,A,3*x,2*x),c.setRenderTarget(t),c.render(u,Ul)}}function Fy(n){const e=[],t=[],i=[];let s=n;const r=n-Fr+1+_f.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Fr?c=_f[o-n+Fr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,D=A>2?0:-1,w=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];v.set(w,_*g*A),y.set(d,m*g*A);const M=[A,A,A,A,A,A];x.set(M,f*g*A)}const C=new tn;C.setAttribute("position",new en(v,_)),C.setAttribute("uv",new en(y,m)),C.setAttribute("faceIndex",new en(x,f)),e.push(C),s>Fr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mf(n,e,t){const i=new Rs(n,e,t);return i.texture.mapping=Yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Oy(n,e,t){const i=new Float32Array(js),s=new k(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$u(),fragmentShader:`

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
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function bf(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

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
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function Sf(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function $u(){return`

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
	`}function By(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ah||c===Rh,h=c===Zr||c===Jr;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new yf(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new yf(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function zy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Oo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Hy(n,e,t,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let y=0,x=v.length;y<x;y+=3){const C=v[y+0],A=v[y+1],R=v[y+2];d.push(C,A,A,R,R,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const C=y+0,A=y+1,R=y+2;d.push(C,A,A,R,R,C)}}else return;const m=new(fm(d)?vm:xm)(d,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Gy(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*_[v];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Wy(n,e,t){const i=new WeakMap,s=new ut;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*A*4*u),D=new mm(R,C,A,u);D.type=vi,D.needsUpdate=!0;const w=x*4;for(let P=0;P<u;P++){const V=f[P],T=v[P],U=y[P],H=C*A*4*P;for(let j=0;j<V.count;j++){const K=j*w;g===!0&&(s.fromBufferAttribute(V,j),R[H+K+0]=s.x,R[H+K+1]=s.y,R[H+K+2]=s.z,R[H+K+3]=0),_===!0&&(s.fromBufferAttribute(T,j),R[H+K+4]=s.x,R[H+K+5]=s.y,R[H+K+6]=s.z,R[H+K+7]=0),m===!0&&(s.fromBufferAttribute(U,j),R[H+K+8]=s.x,R[H+K+9]=s.y,R[H+K+10]=s.z,R[H+K+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new Ie(C,A)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Xy(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class ju extends Vt{constructor(e,t,i,s,r,o,a,c,l,h=Gr){if(h!==Gr&&h!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Gr&&(i=Zs),i===void 0&&h===to&&(i=eo),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qt,this.minFilter=c!==void 0?c:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const wm=new Vt,wf=new ju(1,1),Tm=new mm,Em=new L_,Am=new bm,Tf=[],Ef=[],Af=new Float32Array(16),Rf=new Float32Array(9),Cf=new Float32Array(4);function po(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Tf[s];if(r===void 0&&(r=new Float32Array(s),Tf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qc(n,e){let t=Ef[e];t===void 0&&(t=new Int32Array(e),Ef[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $y(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function Yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function Ky(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Cf.set(i),n.uniformMatrix2fv(this.addr,!1,Cf),Xt(t,i)}}function Zy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Rf.set(i),n.uniformMatrix3fv(this.addr,!1,Rf),Xt(t,i)}}function Jy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Af.set(i),n.uniformMatrix4fv(this.addr,!1,Af),Xt(t,i)}}function Qy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function eM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function tM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function nM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function iM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function oM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function aM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(wf.compareFunction=um,r=wf):r=wm,t.setTexture2D(e||r,s)}function cM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Em,s)}function lM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Am,s)}function hM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Tm,s)}function uM(n){switch(n){case 5126:return $y;case 35664:return jy;case 35665:return qy;case 35666:return Yy;case 35674:return Ky;case 35675:return Zy;case 35676:return Jy;case 5124:case 35670:return Qy;case 35667:case 35671:return eM;case 35668:case 35672:return tM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return sM;case 36295:return rM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return aM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return hM}}function dM(n,e){n.uniform1fv(this.addr,e)}function fM(n,e){const t=po(e,this.size,2);n.uniform2fv(this.addr,t)}function pM(n,e){const t=po(e,this.size,3);n.uniform3fv(this.addr,t)}function mM(n,e){const t=po(e,this.size,4);n.uniform4fv(this.addr,t)}function gM(n,e){const t=po(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _M(n,e){const t=po(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xM(n,e){const t=po(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vM(n,e){n.uniform1iv(this.addr,e)}function yM(n,e){n.uniform2iv(this.addr,e)}function MM(n,e){n.uniform3iv(this.addr,e)}function bM(n,e){n.uniform4iv(this.addr,e)}function SM(n,e){n.uniform1uiv(this.addr,e)}function wM(n,e){n.uniform2uiv(this.addr,e)}function TM(n,e){n.uniform3uiv(this.addr,e)}function EM(n,e){n.uniform4uiv(this.addr,e)}function AM(n,e,t){const i=this.cache,s=e.length,r=Qc(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||wm,r[o])}function RM(n,e,t){const i=this.cache,s=e.length,r=Qc(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Em,r[o])}function CM(n,e,t){const i=this.cache,s=e.length,r=Qc(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Am,r[o])}function IM(n,e,t){const i=this.cache,s=e.length,r=Qc(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Tm,r[o])}function LM(n){switch(n){case 5126:return dM;case 35664:return fM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return _M;case 35676:return xM;case 5124:case 35670:return vM;case 35667:case 35671:return yM;case 35668:case 35672:return MM;case 35669:case 35673:return bM;case 5125:return SM;case 36294:return wM;case 36295:return TM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return IM}}class PM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=uM(t.type)}}class kM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LM(t.type)}}class DM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Hl=/(\w+)(\])?(\[|\.)?/g;function If(n,e){n.seq.push(e),n.map[e.id]=e}function NM(n,e,t){const i=n.name,s=i.length;for(Hl.lastIndex=0;;){const r=Hl.exec(i),o=Hl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){If(t,l===void 0?new PM(a,n,e):new kM(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new DM(a),If(t,u)),t=u}}}class hc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);NM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Lf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const UM=37297;let FM=0;function OM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Pf=new Ve;function BM(n){tt._getMatrix(Pf,tt.workingColorSpace,n);const e=`mat3( ${Pf.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case Kc:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function kf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+OM(n.getShaderSource(e),o)}else return s}function zM(n,e){const t=BM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function HM(n,e){let t;switch(e){case Bg:t="Linear";break;case zg:t="Reinhard";break;case Hg:t="Cineon";break;case Gg:t="ACESFilmic";break;case Wg:t="AgX";break;case Xg:t="Neutral";break;case Vg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ua=new k;function GM(){tt.getLuminanceCoefficients(Ua);const n=Ua.x.toFixed(4),e=Ua.y.toFixed(4),t=Ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function WM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function XM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Bo(n){return n!==""}function Df(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $M=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(n){return n.replace($M,qM)}const jM=new Map;function qM(n,e){let t=Xe[e];if(t===void 0){const i=jM.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return iu(t)}const YM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(n){return n.replace(YM,KM)}function KM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ff(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ZM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function JM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zr:case Jr:e="ENVMAP_TYPE_CUBE";break;case Yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Jr:e="ENVMAP_MODE_REFRACTION";break}return e}function eb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Du:e="ENVMAP_BLENDING_MULTIPLY";break;case Fg:e="ENVMAP_BLENDING_MIX";break;case Og:e="ENVMAP_BLENDING_ADD";break}return e}function tb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nb(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ZM(t),l=JM(t),h=QM(t),u=eb(t),d=tb(t),p=VM(t),g=WM(r),_=s.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bo).join(`
`),f.length>0&&(f+=`
`)):(m=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),f=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ws?"#define TONE_MAPPING":"",t.toneMapping!==ws?Xe.tonemapping_pars_fragment:"",t.toneMapping!==ws?HM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,zM("linearToOutputTexel",t.outputColorSpace),GM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),o=iu(o),o=Df(o,t),o=Nf(o,t),a=iu(a),a=Df(a,t),a=Nf(a,t),o=Uf(o),a=Uf(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===qd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=v+m+o,x=v+f+a,C=Lf(s,s.VERTEX_SHADER,y),A=Lf(s,s.FRAGMENT_SHADER,x);s.attachShader(_,C),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(P){if(n.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),T=s.getShaderInfoLog(C).trim(),U=s.getShaderInfoLog(A).trim();let H=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,A);else{const K=kf(s,C,"vertex"),$=kf(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+K+`
`+$)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(T===""||U==="")&&(j=!1);j&&(P.diagnostics={runnable:H,programLog:V,vertexShader:{log:T,prefix:m},fragmentShader:{log:U,prefix:f}})}s.deleteShader(C),s.deleteShader(A),D=new hc(s,_),w=XM(s,_)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,UM)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let ib=0;class sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rb(e),t.set(e,i)),i}}class rb{constructor(e){this.id=ib++,this.code=e,this.usedTimes=0}}function ob(n,e,t,i,s,r,o){const a=new gm,c=new sb,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,P,V,T){const U=V.fog,H=T.geometry,j=w.isMeshStandardMaterial?V.environment:null,K=(w.isMeshStandardMaterial?t:e).get(w.envMap||j),$=K&&K.mapping===Yc?K.image.height:null,ce=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const ue=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ve=ue!==void 0?ue.length:0;let ze=0;H.morphAttributes.position!==void 0&&(ze=1),H.morphAttributes.normal!==void 0&&(ze=2),H.morphAttributes.color!==void 0&&(ze=3);let dt,Z,se,ye;if(ce){const xt=Ti[ce];dt=xt.vertexShader,Z=xt.fragmentShader}else dt=w.vertexShader,Z=w.fragmentShader,c.update(w),se=c.getVertexShaderID(w),ye=c.getFragmentShaderID(w);const he=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Ue=T.isInstancedMesh===!0,je=T.isBatchedMesh===!0,_t=!!w.map,Qe=!!w.matcap,et=!!K,z=!!w.aoMap,wn=!!w.lightMap,Ke=!!w.bumpMap,Je=!!w.normalMap,Ce=!!w.displacementMap,bt=!!w.emissiveMap,Ee=!!w.metalnessMap,E=!!w.roughnessMap,b=w.anisotropy>0,G=w.clearcoat>0,J=w.dispersion>0,I=w.iridescence>0,L=w.sheen>0,ae=w.transmission>0,re=b&&!!w.anisotropyMap,de=G&&!!w.clearcoatMap,Le=G&&!!w.clearcoatNormalMap,ie=G&&!!w.clearcoatRoughnessMap,fe=I&&!!w.iridescenceMap,Re=I&&!!w.iridescenceThicknessMap,ke=L&&!!w.sheenColorMap,xe=L&&!!w.sheenRoughnessMap,it=!!w.specularMap,We=!!w.specularColorMap,Tt=!!w.specularIntensityMap,F=ae&&!!w.transmissionMap,pe=ae&&!!w.thicknessMap,q=!!w.gradientMap,Q=!!w.alphaMap,_e=w.alphaTest>0,me=!!w.alphaHash,He=!!w.extensions;let kt=ws;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(kt=n.toneMapping);const nn={shaderID:ce,shaderType:w.type,shaderName:w.name,vertexShader:dt,fragmentShader:Z,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:ye,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:je,batchingColor:je&&T._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&T.instanceColor!==null,instancingMorph:Ue&&T.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:bn,alphaToCoverage:!!w.alphaToCoverage,map:_t,matcap:Qe,envMap:et,envMapMode:et&&K.mapping,envMapCubeUVHeight:$,aoMap:z,lightMap:wn,bumpMap:Ke,normalMap:Je,displacementMap:d&&Ce,emissiveMap:bt,normalMapObjectSpace:Je&&w.normalMapType===Qg,normalMapTangentSpace:Je&&w.normalMapType===Vu,metalnessMap:Ee,roughnessMap:E,anisotropy:b,anisotropyMap:re,clearcoat:G,clearcoatMap:de,clearcoatNormalMap:Le,clearcoatRoughnessMap:ie,dispersion:J,iridescence:I,iridescenceMap:fe,iridescenceThicknessMap:Re,sheen:L,sheenColorMap:ke,sheenRoughnessMap:xe,specularMap:it,specularColorMap:We,specularIntensityMap:Tt,transmission:ae,transmissionMap:F,thicknessMap:pe,gradientMap:q,opaque:w.transparent===!1&&w.blending===Hr&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:_e,alphaHash:me,combine:w.combine,mapUv:_t&&_(w.map.channel),aoMapUv:z&&_(w.aoMap.channel),lightMapUv:wn&&_(w.lightMap.channel),bumpMapUv:Ke&&_(w.bumpMap.channel),normalMapUv:Je&&_(w.normalMap.channel),displacementMapUv:Ce&&_(w.displacementMap.channel),emissiveMapUv:bt&&_(w.emissiveMap.channel),metalnessMapUv:Ee&&_(w.metalnessMap.channel),roughnessMapUv:E&&_(w.roughnessMap.channel),anisotropyMapUv:re&&_(w.anisotropyMap.channel),clearcoatMapUv:de&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(w.sheenRoughnessMap.channel),specularMapUv:it&&_(w.specularMap.channel),specularColorMapUv:We&&_(w.specularColorMap.channel),specularIntensityMapUv:Tt&&_(w.specularIntensityMap.channel),transmissionMapUv:F&&_(w.transmissionMap.channel),thicknessMapUv:pe&&_(w.thicknessMap.channel),alphaMapUv:Q&&_(w.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Je||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!H.attributes.uv&&(_t||Q),fog:!!U,useFog:w.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ae,skinning:T.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:kt,decodeVideoTexture:_t&&w.map.isVideoTexture===!0&&tt.getTransfer(w.map.colorSpace)===yt,decodeVideoTextureEmissive:bt&&w.emissiveMap.isVideoTexture===!0&&tt.getTransfer(w.emissiveMap.colorSpace)===yt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ai,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:He&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&w.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return nn.vertexUv1s=l.has(1),nn.vertexUv2s=l.has(2),nn.vertexUv3s=l.has(3),l.clear(),nn}function f(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(v(M,w),y(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function y(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const M=g[w.type];let P;if(M){const V=Ti[M];P=V_.clone(V.uniforms)}else P=w.uniforms;return P}function C(w,M){let P;for(let V=0,T=h.length;V<T;V++){const U=h[V];if(U.cacheKey===M){P=U,++P.usedTimes;break}}return P===void 0&&(P=new nb(n,M,w,r),h.push(P)),P}function A(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function R(w){c.remove(w)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:D}}function ab(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function cb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Of(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,p,g,_,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||cb),i.length>1&&i.sort(d||Of),s.length>1&&s.sort(d||Of)}function h(){for(let u=e,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function lb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Bf,n.set(i,[o])):s>=r.length?(o=new Bf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function hb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Te};break;case"SpotLight":t={position:new k,direction:new k,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function ub(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let db=0;function fb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pb(n){const e=new hb,t=ub(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);const s=new k,r=new Ne,o=new Ne;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,y=0,x=0,C=0,A=0,R=0;l.sort(fb);for(let w=0,M=l.length;w<M;w++){const P=l[w],V=P.color,T=P.intensity,U=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=V.r*T,u+=V.g*T,d+=V.b*T;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],T);R++}else if(P.isDirectionalLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,$=t.get(P);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=j,p++}else if(P.isSpotLight){const j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(V).multiplyScalar(T),j.distance=U,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[_]=j;const K=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,K.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[_]=K.matrix,P.castShadow){const $=t.get(P);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,i.spotShadow[_]=$,i.spotShadowMap[_]=H,x++}_++}else if(P.isRectAreaLight){const j=e.get(P);j.color.copy(V).multiplyScalar(T),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=j,m++}else if(P.isPointLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){const K=P.shadow,$=t.get(P);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,$.shadowCameraNear=K.camera.near,$.shadowCameraFar=K.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=P.shadow.matrix,y++}i.point[g]=j,g++}else if(P.isHemisphereLight){const j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(T),j.groundColor.copy(P.groundColor).multiplyScalar(T),i.hemi[f]=j,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==v||D.numPointShadows!==y||D.numSpotShadows!==x||D.numSpotMaps!==C||D.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=v,D.numPointShadows=y,D.numSpotShadows=x,D.numSpotMaps=C,D.numLightProbes=R,i.version=db++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,v=l.length;f<v;f++){const y=l[f];if(y.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function zf(n){const e=new pb(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function mb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new zf(n),e.set(s,[a])):r>=o.length?(a=new zf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class gb extends ii{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _b extends ii{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vb=`uniform sampler2D shadow_pass;
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
}`;function yb(n,e,t){let i=new Xu;const s=new Ie,r=new Ie,o=new ut,a=new gb({depthPacking:Jg}),c=new _b,l={},h=t.maxTextureSize,u={[Qi]:kn,[kn]:Qi,[Ai]:Ai},d=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:xb,fragmentShader:vb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kp;let f=this.type;this.render=function(A,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ss),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const T=f!==Vi&&this.type===Vi,U=f===Vi&&this.type!==Vi;for(let H=0,j=A.length;H<j;H++){const K=A[H],$=K.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ce=$.getFrameExtents();if(s.multiply(ce),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,$.mapSize.y=r.y)),$.map===null||T===!0||U===!0){const ve=this.type!==Vi?{minFilter:qt,magFilter:qt}:{};$.map!==null&&$.map.dispose(),$.map=new Rs(s.x,s.y,ve),$.map.texture.name=K.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const ue=$.getViewportCount();for(let ve=0;ve<ue;ve++){const ze=$.getViewport(ve);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),V.viewport(o),$.updateMatrices(K,ve),i=$.getFrustum(),x(R,D,$.camera,K,this.type)}$.isPointLightShadow!==!0&&this.type===Vi&&v($,D),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,M,P)};function v(A,R){const D=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Rs(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,D,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,D,p,_,null)}function y(A,R,D,w){let M=null;const P=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=D.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=M.uuid,T=R.uuid;let U=l[V];U===void 0&&(U={},l[V]=U);let H=U[T];H===void 0&&(H=M.clone(),U[T]=H,R.addEventListener("dispose",C)),M=H}if(M.visible=R.visible,M.wireframe=R.wireframe,w===Vi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=n.properties.get(M);V.light=D}return M}function x(A,R,D,w,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Vi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const T=e.update(A),U=A.material;if(Array.isArray(U)){const H=T.groups;for(let j=0,K=H.length;j<K;j++){const $=H[j],ce=U[$.materialIndex];if(ce&&ce.visible){const ue=y(A,ce,w,M);A.onBeforeShadow(n,A,R,D,T,ue,$),n.renderBufferDirect(D,null,T,ue,A,$),A.onAfterShadow(n,A,R,D,T,ue,$)}}}else if(U.visible){const H=y(A,U,w,M);A.onBeforeShadow(n,A,R,D,T,H,null),n.renderBufferDirect(D,null,T,H,A,null),A.onAfterShadow(n,A,R,D,T,H,null)}}const V=A.children;for(let T=0,U=V.length;T<U;T++)x(V[T],R,D,w,M)}function C(A){A.target.removeEventListener("dispose",C);for(const D in l){const w=l[D],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const Mb={[yh]:Mh,[bh]:Th,[Sh]:Eh,[Kr]:wh,[Mh]:yh,[Th]:bh,[Eh]:Sh,[wh]:Kr};function bb(n,e){function t(){let F=!1;const pe=new ut;let q=null;const Q=new ut(0,0,0,0);return{setMask:function(_e){q!==_e&&!F&&(n.colorMask(_e,_e,_e,_e),q=_e)},setLocked:function(_e){F=_e},setClear:function(_e,me,He,kt,nn){nn===!0&&(_e*=kt,me*=kt,He*=kt),pe.set(_e,me,He,kt),Q.equals(pe)===!1&&(n.clearColor(_e,me,He,kt),Q.copy(pe))},reset:function(){F=!1,q=null,Q.set(-1,0,0,0)}}}function i(){let F=!1,pe=!1,q=null,Q=null,_e=null;return{setReversed:function(me){if(pe!==me){const He=e.get("EXT_clip_control");pe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const kt=_e;_e=null,this.setClear(kt)}pe=me},getReversed:function(){return pe},setTest:function(me){me?he(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(me){q!==me&&!F&&(n.depthMask(me),q=me)},setFunc:function(me){if(pe&&(me=Mb[me]),Q!==me){switch(me){case yh:n.depthFunc(n.NEVER);break;case Mh:n.depthFunc(n.ALWAYS);break;case bh:n.depthFunc(n.LESS);break;case Kr:n.depthFunc(n.LEQUAL);break;case Sh:n.depthFunc(n.EQUAL);break;case wh:n.depthFunc(n.GEQUAL);break;case Th:n.depthFunc(n.GREATER);break;case Eh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=me}},setLocked:function(me){F=me},setClear:function(me){_e!==me&&(pe&&(me=1-me),n.clearDepth(me),_e=me)},reset:function(){F=!1,q=null,Q=null,_e=null,pe=!1}}}function s(){let F=!1,pe=null,q=null,Q=null,_e=null,me=null,He=null,kt=null,nn=null;return{setTest:function(xt){F||(xt?he(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(xt){pe!==xt&&!F&&(n.stencilMask(xt),pe=xt)},setFunc:function(xt,ri,Ni){(q!==xt||Q!==ri||_e!==Ni)&&(n.stencilFunc(xt,ri,Ni),q=xt,Q=ri,_e=Ni)},setOp:function(xt,ri,Ni){(me!==xt||He!==ri||kt!==Ni)&&(n.stencilOp(xt,ri,Ni),me=xt,He=ri,kt=Ni)},setLocked:function(xt){F=xt},setClear:function(xt){nn!==xt&&(n.clearStencil(xt),nn=xt)},reset:function(){F=!1,pe=null,q=null,Q=null,_e=null,me=null,He=null,kt=null,nn=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,y=null,x=null,C=null,A=null,R=new Te(0,0,0),D=0,w=!1,M=null,P=null,V=null,T=null,U=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,K=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec($)[1]),j=K>=1):$.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=K>=2);let ce=null,ue={};const ve=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),dt=new ut().fromArray(ve),Z=new ut().fromArray(ze);function se(F,pe,q,Q){const _e=new Uint8Array(4),me=n.createTexture();n.bindTexture(F,me),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<q;He++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(pe+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return me}const ye={};ye[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(Kr),Ke(!1),Je(Vd),he(n.CULL_FACE),z(Ss);function he(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function Ae(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Ue(F,pe){return u[F]!==pe?(n.bindFramebuffer(F,pe),u[F]=pe,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pe),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function je(F,pe){let q=p,Q=!1;if(F){q=d.get(pe),q===void 0&&(q=[],d.set(pe,q));const _e=F.textures;if(q.length!==_e.length||q[0]!==n.COLOR_ATTACHMENT0){for(let me=0,He=_e.length;me<He;me++)q[me]=n.COLOR_ATTACHMENT0+me;q.length=_e.length,Q=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,Q=!0);Q&&n.drawBuffers(q)}function _t(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const Qe={[$s]:n.FUNC_ADD,[yg]:n.FUNC_SUBTRACT,[Mg]:n.FUNC_REVERSE_SUBTRACT};Qe[bg]=n.MIN,Qe[Sg]=n.MAX;const et={[wg]:n.ZERO,[Tg]:n.ONE,[Eg]:n.SRC_COLOR,[xh]:n.SRC_ALPHA,[Pg]:n.SRC_ALPHA_SATURATE,[Ig]:n.DST_COLOR,[Rg]:n.DST_ALPHA,[Ag]:n.ONE_MINUS_SRC_COLOR,[vh]:n.ONE_MINUS_SRC_ALPHA,[Lg]:n.ONE_MINUS_DST_COLOR,[Cg]:n.ONE_MINUS_DST_ALPHA,[kg]:n.CONSTANT_COLOR,[Dg]:n.ONE_MINUS_CONSTANT_COLOR,[Ng]:n.CONSTANT_ALPHA,[Ug]:n.ONE_MINUS_CONSTANT_ALPHA};function z(F,pe,q,Q,_e,me,He,kt,nn,xt){if(F===Ss){_===!0&&(Ae(n.BLEND),_=!1);return}if(_===!1&&(he(n.BLEND),_=!0),F!==vg){if(F!==m||xt!==w){if((f!==$s||x!==$s)&&(n.blendEquation(n.FUNC_ADD),f=$s,x=$s),xt)switch(F){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFunc(n.ONE,n.ONE);break;case Wd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,y=null,C=null,A=null,R.set(0,0,0),D=0,m=F,w=xt}return}_e=_e||pe,me=me||q,He=He||Q,(pe!==f||_e!==x)&&(n.blendEquationSeparate(Qe[pe],Qe[_e]),f=pe,x=_e),(q!==v||Q!==y||me!==C||He!==A)&&(n.blendFuncSeparate(et[q],et[Q],et[me],et[He]),v=q,y=Q,C=me,A=He),(kt.equals(R)===!1||nn!==D)&&(n.blendColor(kt.r,kt.g,kt.b,nn),R.copy(kt),D=nn),m=F,w=!1}function wn(F,pe){F.side===Ai?Ae(n.CULL_FACE):he(n.CULL_FACE);let q=F.side===kn;pe&&(q=!q),Ke(q),F.blending===Hr&&F.transparent===!1?z(Ss):z(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Q=F.stencilWrite;a.setTest(Q),Q&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),bt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function Je(F){F!==_g?(he(n.CULL_FACE),F!==P&&(F===Vd?n.cullFace(n.BACK):F===xg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),P=F}function Ce(F){F!==V&&(j&&n.lineWidth(F),V=F)}function bt(F,pe,q){F?(he(n.POLYGON_OFFSET_FILL),(T!==pe||U!==q)&&(n.polygonOffset(pe,q),T=pe,U=q)):Ae(n.POLYGON_OFFSET_FILL)}function Ee(F){F?he(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function E(F){F===void 0&&(F=n.TEXTURE0+H-1),ce!==F&&(n.activeTexture(F),ce=F)}function b(F,pe,q){q===void 0&&(ce===null?q=n.TEXTURE0+H-1:q=ce);let Q=ue[q];Q===void 0&&(Q={type:void 0,texture:void 0},ue[q]=Q),(Q.type!==F||Q.texture!==pe)&&(ce!==q&&(n.activeTexture(q),ce=q),n.bindTexture(F,pe||ye[F]),Q.type=F,Q.texture=pe)}function G(){const F=ue[ce];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function I(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function L(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(F){dt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),dt.copy(F))}function xe(F){Z.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Z.copy(F))}function it(F,pe){let q=l.get(pe);q===void 0&&(q=new WeakMap,l.set(pe,q));let Q=q.get(F);Q===void 0&&(Q=n.getUniformBlockIndex(pe,F.name),q.set(F,Q))}function We(F,pe){const Q=l.get(pe).get(F);c.get(pe)!==Q&&(n.uniformBlockBinding(pe,Q,F.__bindingPointIndex),c.set(pe,Q))}function Tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ce=null,ue={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,y=null,x=null,C=null,A=null,R=new Te(0,0,0),D=0,w=!1,M=null,P=null,V=null,T=null,U=null,dt.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:Ae,bindFramebuffer:Ue,drawBuffers:je,useProgram:_t,setBlending:z,setMaterial:wn,setFlipSided:Ke,setCullFace:Je,setLineWidth:Ce,setPolygonOffset:bt,setScissorTest:Ee,activeTexture:E,bindTexture:b,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:I,texImage2D:fe,texImage3D:Re,updateUBOMapping:it,uniformBlockBinding:We,texStorage2D:Le,texStorage3D:ie,texSubImage2D:L,texSubImage3D:ae,compressedTexSubImage2D:re,compressedTexSubImage3D:de,scissor:ke,viewport:xe,reset:Tt}}function Hf(n,e,t,i){const s=Sb(i);switch(t){case im:return n*e;case rm:return n*e;case om:return n*e*2;case Ou:return n*e/s.components*s.byteLength;case Bu:return n*e/s.components*s.byteLength;case am:return n*e*2/s.components*s.byteLength;case zu:return n*e*2/s.components*s.byteLength;case sm:return n*e*3/s.components*s.byteLength;case Qn:return n*e*4/s.components*s.byteLength;case Hu:return n*e*4/s.components*s.byteLength;case rc:case oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ac:case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ih:case Ph:return Math.max(n,16)*Math.max(e,8)/4;case Ch:case Lh:return Math.max(n,8)*Math.max(e,8)/2;case kh:case Dh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $h:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lc:case Kh:case Zh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cm:case Jh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Qh:case eu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sb(n){switch(n){case es:case em:return{byteLength:1,components:1};case Yo:case tm:case fo:return{byteLength:2,components:1};case Uu:case Fu:return{byteLength:2,components:4};case Zs:case Nu:case vi:return{byteLength:4,components:1};case nm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function wb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ie,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,b){return p?new OffscreenCanvas(E,b):Jo("canvas")}function _(E,b,G){let J=1;const I=Ee(E);if((I.width>G||I.height>G)&&(J=G/Math.max(I.width,I.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const L=Math.floor(J*I.width),ae=Math.floor(J*I.height);u===void 0&&(u=g(L,ae));const re=b?g(L,ae):u;return re.width=L,re.height=ae,re.getContext("2d").drawImage(E,0,0,L,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+L+"x"+ae+")."),re}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){n.generateMipmap(E)}function v(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(E,b,G,J,I=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let L=b;if(b===n.RED&&(G===n.FLOAT&&(L=n.R32F),G===n.HALF_FLOAT&&(L=n.R16F),G===n.UNSIGNED_BYTE&&(L=n.R8)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(L=n.R8UI),G===n.UNSIGNED_SHORT&&(L=n.R16UI),G===n.UNSIGNED_INT&&(L=n.R32UI),G===n.BYTE&&(L=n.R8I),G===n.SHORT&&(L=n.R16I),G===n.INT&&(L=n.R32I)),b===n.RG&&(G===n.FLOAT&&(L=n.RG32F),G===n.HALF_FLOAT&&(L=n.RG16F),G===n.UNSIGNED_BYTE&&(L=n.RG8)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(L=n.RG8UI),G===n.UNSIGNED_SHORT&&(L=n.RG16UI),G===n.UNSIGNED_INT&&(L=n.RG32UI),G===n.BYTE&&(L=n.RG8I),G===n.SHORT&&(L=n.RG16I),G===n.INT&&(L=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(L=n.RGB8UI),G===n.UNSIGNED_SHORT&&(L=n.RGB16UI),G===n.UNSIGNED_INT&&(L=n.RGB32UI),G===n.BYTE&&(L=n.RGB8I),G===n.SHORT&&(L=n.RGB16I),G===n.INT&&(L=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(L=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(L=n.RGBA16UI),G===n.UNSIGNED_INT&&(L=n.RGBA32UI),G===n.BYTE&&(L=n.RGBA8I),G===n.SHORT&&(L=n.RGBA16I),G===n.INT&&(L=n.RGBA32I)),b===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(L=n.RGB9_E5),b===n.RGBA){const ae=I?Kc:tt.getTransfer(J);G===n.FLOAT&&(L=n.RGBA32F),G===n.HALF_FLOAT&&(L=n.RGBA16F),G===n.UNSIGNED_BYTE&&(L=ae===yt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(L=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(L=n.RGB5_A1)}return(L===n.R16F||L===n.R32F||L===n.RG16F||L===n.RG32F||L===n.RGBA16F||L===n.RGBA32F)&&e.get("EXT_color_buffer_float"),L}function x(E,b){let G;return E?b===null||b===Zs||b===eo?G=n.DEPTH24_STENCIL8:b===vi?G=n.DEPTH32F_STENCIL8:b===Yo&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Zs||b===eo?G=n.DEPTH_COMPONENT24:b===vi?G=n.DEPTH_COMPONENT32F:b===Yo&&(G=n.DEPTH_COMPONENT16),G}function C(E,b){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==qt&&E.minFilter!==zn?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function A(E){const b=E.target;b.removeEventListener("dispose",A),D(b),b.isVideoTexture&&h.delete(b)}function R(E){const b=E.target;b.removeEventListener("dispose",R),M(b)}function D(E){const b=i.get(E);if(b.__webglInit===void 0)return;const G=E.source,J=d.get(G);if(J){const I=J[b.__cacheKey];I.usedTimes--,I.usedTimes===0&&w(E),Object.keys(J).length===0&&d.delete(G)}i.remove(E)}function w(E){const b=i.get(E);n.deleteTexture(b.__webglTexture);const G=E.source,J=d.get(G);delete J[b.__cacheKey],o.memory.textures--}function M(E){const b=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let I=0;I<b.__webglFramebuffer[J].length;I++)n.deleteFramebuffer(b.__webglFramebuffer[J][I]);else n.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)n.deleteFramebuffer(b.__webglFramebuffer[J]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=E.textures;for(let J=0,I=G.length;J<I;J++){const L=i.get(G[J]);L.__webglTexture&&(n.deleteTexture(L.__webglTexture),o.memory.textures--),i.remove(G[J])}i.remove(E)}let P=0;function V(){P=0}function T(){const E=P;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),P+=1,E}function U(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function H(E,b){const G=i.get(E);if(E.isVideoTexture&&Ce(E),E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){const J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,E,b);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function j(E,b){const G=i.get(E);if(E.version>0&&G.__version!==E.version){Z(G,E,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function K(E,b){const G=i.get(E);if(E.version>0&&G.__version!==E.version){Z(G,E,b);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function $(E,b){const G=i.get(E);if(E.version>0&&G.__version!==E.version){se(G,E,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}const ce={[Qr]:n.REPEAT,[ys]:n.CLAMP_TO_EDGE,[Rc]:n.MIRRORED_REPEAT},ue={[qt]:n.NEAREST,[Qp]:n.NEAREST_MIPMAP_NEAREST,[Fo]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[sc]:n.LINEAR_MIPMAP_NEAREST,[ji]:n.LINEAR_MIPMAP_LINEAR},ve={[e_]:n.NEVER,[o_]:n.ALWAYS,[t_]:n.LESS,[um]:n.LEQUAL,[n_]:n.EQUAL,[r_]:n.GEQUAL,[i_]:n.GREATER,[s_]:n.NOTEQUAL};function ze(E,b){if(b.type===vi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===zn||b.magFilter===sc||b.magFilter===Fo||b.magFilter===ji||b.minFilter===zn||b.minFilter===sc||b.minFilter===Fo||b.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ce[b.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ce[b.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ce[b.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ue[b.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ue[b.minFilter]),b.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ve[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===qt||b.minFilter!==Fo&&b.minFilter!==ji||b.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function dt(E,b){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",A));const J=b.source;let I=d.get(J);I===void 0&&(I={},d.set(J,I));const L=U(b);if(L!==E.__cacheKey){I[L]===void 0&&(I[L]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),I[L].usedTimes++;const ae=I[E.__cacheKey];ae!==void 0&&(I[E.__cacheKey].usedTimes--,ae.usedTimes===0&&w(b)),E.__cacheKey=L,E.__webglTexture=I[L].texture}return G}function Z(E,b,G){let J=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=n.TEXTURE_3D);const I=dt(E,b),L=b.source;t.bindTexture(J,E.__webglTexture,n.TEXTURE0+G);const ae=i.get(L);if(L.version!==ae.__version||I===!0){t.activeTexture(n.TEXTURE0+G);const re=tt.getPrimaries(tt.workingColorSpace),de=b.colorSpace===xs?null:tt.getPrimaries(b.colorSpace),Le=b.colorSpace===xs||re===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ie=_(b.image,!1,s.maxTextureSize);ie=bt(b,ie);const fe=r.convert(b.format,b.colorSpace),Re=r.convert(b.type);let ke=y(b.internalFormat,fe,Re,b.colorSpace,b.isVideoTexture);ze(J,b);let xe;const it=b.mipmaps,We=b.isVideoTexture!==!0,Tt=ae.__version===void 0||I===!0,F=L.dataReady,pe=C(b,ie);if(b.isDepthTexture)ke=x(b.format===to,b.type),Tt&&(We?t.texStorage2D(n.TEXTURE_2D,1,ke,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,ke,ie.width,ie.height,0,fe,Re,null));else if(b.isDataTexture)if(it.length>0){We&&Tt&&t.texStorage2D(n.TEXTURE_2D,pe,ke,it[0].width,it[0].height);for(let q=0,Q=it.length;q<Q;q++)xe=it[q],We?F&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,xe.width,xe.height,fe,Re,xe.data):t.texImage2D(n.TEXTURE_2D,q,ke,xe.width,xe.height,0,fe,Re,xe.data);b.generateMipmaps=!1}else We?(Tt&&t.texStorage2D(n.TEXTURE_2D,pe,ke,ie.width,ie.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,fe,Re,ie.data)):t.texImage2D(n.TEXTURE_2D,0,ke,ie.width,ie.height,0,fe,Re,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){We&&Tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ke,it[0].width,it[0].height,ie.depth);for(let q=0,Q=it.length;q<Q;q++)if(xe=it[q],b.format!==Qn)if(fe!==null)if(We){if(F)if(b.layerUpdates.size>0){const _e=Hf(xe.width,xe.height,b.format,b.type);for(const me of b.layerUpdates){const He=xe.data.subarray(me*_e/xe.data.BYTES_PER_ELEMENT,(me+1)*_e/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,me,xe.width,xe.height,1,fe,He)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,ie.depth,fe,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,ke,xe.width,xe.height,ie.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,ie.depth,fe,Re,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,ke,xe.width,xe.height,ie.depth,0,fe,Re,xe.data)}else{We&&Tt&&t.texStorage2D(n.TEXTURE_2D,pe,ke,it[0].width,it[0].height);for(let q=0,Q=it.length;q<Q;q++)xe=it[q],b.format!==Qn?fe!==null?We?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,xe.width,xe.height,fe,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,q,ke,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?F&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,xe.width,xe.height,fe,Re,xe.data):t.texImage2D(n.TEXTURE_2D,q,ke,xe.width,xe.height,0,fe,Re,xe.data)}else if(b.isDataArrayTexture)if(We){if(Tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ke,ie.width,ie.height,ie.depth),F)if(b.layerUpdates.size>0){const q=Hf(ie.width,ie.height,b.format,b.type);for(const Q of b.layerUpdates){const _e=ie.data.subarray(Q*q/ie.data.BYTES_PER_ELEMENT,(Q+1)*q/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,fe,Re,_e)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,Re,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,ie.width,ie.height,ie.depth,0,fe,Re,ie.data);else if(b.isData3DTexture)We?(Tt&&t.texStorage3D(n.TEXTURE_3D,pe,ke,ie.width,ie.height,ie.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,Re,ie.data)):t.texImage3D(n.TEXTURE_3D,0,ke,ie.width,ie.height,ie.depth,0,fe,Re,ie.data);else if(b.isFramebufferTexture){if(Tt)if(We)t.texStorage2D(n.TEXTURE_2D,pe,ke,ie.width,ie.height);else{let q=ie.width,Q=ie.height;for(let _e=0;_e<pe;_e++)t.texImage2D(n.TEXTURE_2D,_e,ke,q,Q,0,fe,Re,null),q>>=1,Q>>=1}}else if(it.length>0){if(We&&Tt){const q=Ee(it[0]);t.texStorage2D(n.TEXTURE_2D,pe,ke,q.width,q.height)}for(let q=0,Q=it.length;q<Q;q++)xe=it[q],We?F&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,fe,Re,xe):t.texImage2D(n.TEXTURE_2D,q,ke,fe,Re,xe);b.generateMipmaps=!1}else if(We){if(Tt){const q=Ee(ie);t.texStorage2D(n.TEXTURE_2D,pe,ke,q.width,q.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Re,ie)}else t.texImage2D(n.TEXTURE_2D,0,ke,fe,Re,ie);m(b)&&f(J),ae.__version=L.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function se(E,b,G){if(b.image.length!==6)return;const J=dt(E,b),I=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+G);const L=i.get(I);if(I.version!==L.__version||J===!0){t.activeTexture(n.TEXTURE0+G);const ae=tt.getPrimaries(tt.workingColorSpace),re=b.colorSpace===xs?null:tt.getPrimaries(b.colorSpace),de=b.colorSpace===xs||ae===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Le=b.isCompressedTexture||b.image[0].isCompressedTexture,ie=b.image[0]&&b.image[0].isDataTexture,fe=[];for(let Q=0;Q<6;Q++)!Le&&!ie?fe[Q]=_(b.image[Q],!0,s.maxCubemapSize):fe[Q]=ie?b.image[Q].image:b.image[Q],fe[Q]=bt(b,fe[Q]);const Re=fe[0],ke=r.convert(b.format,b.colorSpace),xe=r.convert(b.type),it=y(b.internalFormat,ke,xe,b.colorSpace),We=b.isVideoTexture!==!0,Tt=L.__version===void 0||J===!0,F=I.dataReady;let pe=C(b,Re);ze(n.TEXTURE_CUBE_MAP,b);let q;if(Le){We&&Tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,it,Re.width,Re.height);for(let Q=0;Q<6;Q++){q=fe[Q].mipmaps;for(let _e=0;_e<q.length;_e++){const me=q[_e];b.format!==Qn?ke!==null?We?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,me.width,me.height,ke,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,it,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,me.width,me.height,ke,xe,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,it,me.width,me.height,0,ke,xe,me.data)}}}else{if(q=b.mipmaps,We&&Tt){q.length>0&&pe++;const Q=Ee(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,it,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,fe[Q].width,fe[Q].height,ke,xe,fe[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,it,fe[Q].width,fe[Q].height,0,ke,xe,fe[Q].data);for(let _e=0;_e<q.length;_e++){const He=q[_e].image[Q].image;We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,He.width,He.height,ke,xe,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,it,He.width,He.height,0,ke,xe,He.data)}}else{We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ke,xe,fe[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,it,ke,xe,fe[Q]);for(let _e=0;_e<q.length;_e++){const me=q[_e];We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,ke,xe,me.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,it,ke,xe,me.image[Q])}}}m(b)&&f(n.TEXTURE_CUBE_MAP),L.__version=I.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function ye(E,b,G,J,I,L){const ae=r.convert(G.format,G.colorSpace),re=r.convert(G.type),de=y(G.internalFormat,ae,re,G.colorSpace),Le=i.get(b),ie=i.get(G);if(ie.__renderTarget=b,!Le.__hasExternalTextures){const fe=Math.max(1,b.width>>L),Re=Math.max(1,b.height>>L);I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?t.texImage3D(I,L,de,fe,Re,b.depth,0,ae,re,null):t.texImage2D(I,L,de,fe,Re,0,ae,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Je(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,I,ie.__webglTexture,0,Ke(b)):(I===n.TEXTURE_2D||I>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,I,ie.__webglTexture,L),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(E,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,E),b.depthBuffer){const J=b.depthTexture,I=J&&J.isDepthTexture?J.type:null,L=x(b.stencilBuffer,I),ae=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=Ke(b);Je(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,L,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,L,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,L,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,E)}else{const J=b.textures;for(let I=0;I<J.length;I++){const L=J[I],ae=r.convert(L.format,L.colorSpace),re=r.convert(L.type),de=y(L.internalFormat,ae,re,L.colorSpace),Le=Ke(b);G&&Je(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,de,b.width,b.height):Je(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,de,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,de,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);const I=J.__webglTexture,L=Ke(b);if(b.depthTexture.format===Gr)Je(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0,L):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0);else if(b.depthTexture.format===to)Je(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0,L):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function Ue(E){const b=i.get(E),G=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){const J=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const I=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",I)};J.addEventListener("dispose",I),b.__depthDisposeCallback=I}b.__boundDepthTexture=J}if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ae(b.__webglFramebuffer,E)}else if(G){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=n.createRenderbuffer(),he(b.__webglDepthbuffer[J],E,!1);else{const I=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,L=b.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,L),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,L)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),he(b.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,I=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,I),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,I)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(E,b,G){const J=i.get(E);b!==void 0&&ye(J.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ue(E)}function _t(E){const b=E.texture,G=i.get(E),J=i.get(b);E.addEventListener("dispose",R);const I=E.textures,L=E.isWebGLCubeRenderTarget===!0,ae=I.length>1;if(ae||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=b.version,o.memory.textures++),L){G.__webglFramebuffer=[];for(let re=0;re<6;re++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[re]=[];for(let de=0;de<b.mipmaps.length;de++)G.__webglFramebuffer[re][de]=n.createFramebuffer()}else G.__webglFramebuffer[re]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let re=0;re<b.mipmaps.length;re++)G.__webglFramebuffer[re]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ae)for(let re=0,de=I.length;re<de;re++){const Le=i.get(I[re]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&Je(E)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let re=0;re<I.length;re++){const de=I[re];G.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[re]);const Le=r.convert(de.format,de.colorSpace),ie=r.convert(de.type),fe=y(de.internalFormat,Le,ie,de.colorSpace,E.isXRRenderTarget===!0),Re=Ke(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,fe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,G.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),he(G.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(L){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ze(n.TEXTURE_CUBE_MAP,b);for(let re=0;re<6;re++)if(b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)ye(G.__webglFramebuffer[re][de],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,de);else ye(G.__webglFramebuffer[re],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(b)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let re=0,de=I.length;re<de;re++){const Le=I[re],ie=i.get(Le);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),ze(n.TEXTURE_2D,Le),ye(G.__webglFramebuffer,E,Le,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),m(Le)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,J.__webglTexture),ze(re,b),b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)ye(G.__webglFramebuffer[de],E,b,n.COLOR_ATTACHMENT0,re,de);else ye(G.__webglFramebuffer,E,b,n.COLOR_ATTACHMENT0,re,0);m(b)&&f(re),t.unbindTexture()}E.depthBuffer&&Ue(E)}function Qe(E){const b=E.textures;for(let G=0,J=b.length;G<J;G++){const I=b[G];if(m(I)){const L=v(E),ae=i.get(I).__webglTexture;t.bindTexture(L,ae),f(L),t.unbindTexture()}}}const et=[],z=[];function wn(E){if(E.samples>0){if(Je(E)===!1){const b=E.textures,G=E.width,J=E.height;let I=n.COLOR_BUFFER_BIT;const L=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(E),re=b.length>1;if(re)for(let de=0;de<b.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let de=0;de<b.length;de++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(I|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(I|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[de]);const Le=i.get(b[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,G,J,0,0,G,J,I,n.NEAREST),c===!0&&(et.length=0,z.length=0,et.push(n.COLOR_ATTACHMENT0+de),E.depthBuffer&&E.resolveDepthBuffer===!1&&(et.push(L),z.push(L),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let de=0;de<b.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,ae.__webglColorRenderbuffer[de]);const Le=i.get(b[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const b=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Ke(E){return Math.min(s.maxSamples,E.samples)}function Je(E){const b=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ce(E){const b=o.render.frame;h.get(E)!==b&&(h.set(E,b),E.update())}function bt(E,b){const G=E.colorSpace,J=E.format,I=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||G!==bn&&G!==xs&&(tt.getTransfer(G)===yt?(J!==Qn||I!==es)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Ee(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=T,this.resetTextureUnits=V,this.setTexture2D=H,this.setTexture2DArray=j,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=je,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Je}function Tb(n,e){function t(i,s=xs){let r;const o=tt.getTransfer(s);if(i===es)return n.UNSIGNED_BYTE;if(i===Uu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===em)return n.BYTE;if(i===tm)return n.SHORT;if(i===Yo)return n.UNSIGNED_SHORT;if(i===Nu)return n.INT;if(i===Zs)return n.UNSIGNED_INT;if(i===vi)return n.FLOAT;if(i===fo)return n.HALF_FLOAT;if(i===im)return n.ALPHA;if(i===sm)return n.RGB;if(i===Qn)return n.RGBA;if(i===rm)return n.LUMINANCE;if(i===om)return n.LUMINANCE_ALPHA;if(i===Gr)return n.DEPTH_COMPONENT;if(i===to)return n.DEPTH_STENCIL;if(i===Ou)return n.RED;if(i===Bu)return n.RED_INTEGER;if(i===am)return n.RG;if(i===zu)return n.RG_INTEGER;if(i===Hu)return n.RGBA_INTEGER;if(i===rc||i===oc||i===ac||i===cc)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===rc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ac)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===rc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ac)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ch||i===Ih||i===Lh||i===Ph)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ch)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ih)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ph)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kh||i===Dh||i===Nh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===kh||i===Dh)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Nh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uh||i===Fh||i===Oh||i===Bh||i===zh||i===Hh||i===Gh||i===Vh||i===Wh||i===Xh||i===$h||i===jh||i===qh||i===Yh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Uh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$h)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lc||i===Kh||i===Zh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===lc)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cm||i===Jh||i===Qh||i===eu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===lc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===eo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Eb extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Be extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ab={type:"move"};class Gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ab)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Be;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cb=`
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

}`;class Ib{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Vt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ts({vertexShader:Rb,fragmentShader:Cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new ns(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lb extends er{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const _=new Ib,m=t.getContextAttributes();let f=null,v=null;const y=[],x=[],C=new Ie;let A=null;const R=new xn;R.viewport=new ut;const D=new xn;D.viewport=new ut;const w=[R,D],M=new Eb;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=y[Z];return se===void 0&&(se=new Gl,y[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=y[Z];return se===void 0&&(se=new Gl,y[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=y[Z];return se===void 0&&(se=new Gl,y[Z]=se),se.getHandSpace()};function T(Z){const se=x.indexOf(Z.inputSource);if(se===-1)return;const ye=y[se];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,l||o),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function U(){s.removeEventListener("select",T),s.removeEventListener("selectstart",T),s.removeEventListener("selectend",T),s.removeEventListener("squeeze",T),s.removeEventListener("squeezestart",T),s.removeEventListener("squeezeend",T),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",H);for(let Z=0;Z<y.length;Z++){const se=x[Z];se!==null&&(x[Z]=null,y[Z].disconnect(se))}P=null,V=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,s=null,v=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",T),s.addEventListener("selectstart",T),s.addEventListener("selectend",T),s.addEventListener("squeeze",T),s.addEventListener("squeezestart",T),s.addEventListener("squeezeend",T),s.addEventListener("end",U),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Rs(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:es,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,ye=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?to:Gr,ye=m.stencil?eo:Zs);const Ae={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ae),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Rs(d.textureWidth,d.textureHeight,{format:Qn,type:es,depthTexture:new ju(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(Z){for(let se=0;se<Z.removed.length;se++){const ye=Z.removed[se],he=x.indexOf(ye);he>=0&&(x[he]=null,y[he].disconnect(ye))}for(let se=0;se<Z.added.length;se++){const ye=Z.added[se];let he=x.indexOf(ye);if(he===-1){for(let Ue=0;Ue<y.length;Ue++)if(Ue>=x.length){x.push(ye),he=Ue;break}else if(x[Ue]===null){x[Ue]=ye,he=Ue;break}if(he===-1)break}const Ae=y[he];Ae&&Ae.connect(ye)}}const j=new k,K=new k;function $(Z,se,ye){j.setFromMatrixPosition(se.matrixWorld),K.setFromMatrixPosition(ye.matrixWorld);const he=j.distanceTo(K),Ae=se.projectionMatrix.elements,Ue=ye.projectionMatrix.elements,je=Ae[14]/(Ae[10]-1),_t=Ae[14]/(Ae[10]+1),Qe=(Ae[9]+1)/Ae[5],et=(Ae[9]-1)/Ae[5],z=(Ae[8]-1)/Ae[0],wn=(Ue[8]+1)/Ue[0],Ke=je*z,Je=je*wn,Ce=he/(-z+wn),bt=Ce*-z;if(se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(bt),Z.translateZ(Ce),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ae[10]===-1)Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Ee=je+Ce,E=_t+Ce,b=Ke-bt,G=Je+(he-bt),J=Qe*_t/E*Ee,I=et*_t/E*Ee;Z.projectionMatrix.makePerspective(b,G,J,I,Ee,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ce(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let se=Z.near,ye=Z.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),M.near=D.near=R.near=se,M.far=D.far=R.far=ye,(P!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,V=M.far),R.layers.mask=Z.layers.mask|2,D.layers.mask=Z.layers.mask|4,M.layers.mask=R.layers.mask|D.layers.mask;const he=Z.parent,Ae=M.cameras;ce(M,he);for(let Ue=0;Ue<Ae.length;Ue++)ce(Ae[Ue],he);Ae.length===2?$(M,R,D):M.projectionMatrix.copy(R.projectionMatrix),ue(Z,M,he)};function ue(Z,se,ye){ye===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=no*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ve=null;function ze(Z,se){if(h=se.getViewerPose(l||o),g=se,h!==null){const ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let he=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,he=!0);for(let Ue=0;Ue<ye.length;Ue++){const je=ye[Ue];let _t=null;if(p!==null)_t=p.getViewport(je);else{const et=u.getViewSubImage(d,je);_t=et.viewport,Ue===0&&(e.setRenderTargetTextures(v,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(v))}let Qe=w[Ue];Qe===void 0&&(Qe=new xn,Qe.layers.enable(Ue),Qe.viewport=new ut,w[Ue]=Qe),Qe.matrix.fromArray(je.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(je.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(_t.x,_t.y,_t.width,_t.height),Ue===0&&(M.matrix.copy(Qe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),he===!0&&M.cameras.push(Qe)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ue=u.getDepthInformation(ye[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,s.renderState)}}for(let ye=0;ye<y.length;ye++){const he=x[ye],Ae=y[ye];he!==null&&Ae!==void 0&&Ae.update(he,se,l||o)}ve&&ve(Z,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const dt=new Sm;dt.setAnimationLoop(ze),this.setAnimationLoop=function(Z){ve=Z},this.dispose=function(){}}}const Fs=new Mi,Pb=new Ne;function kb(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,ym(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,v,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===kn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===kn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Fs.copy(x),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),m.envMapRotation.value.setFromMatrix4(Pb.makeRotationFromEuler(Fs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,v,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===kn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Db(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function l(v,y){let x=s[v.id];x===void 0&&(g(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(v,C);const A=e.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function h(v){const y=u();v.__bindingPointIndex=y;const x=n.createBuffer(),C=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=s[v.id],x=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,R=x.length;A<R;A++){const D=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,M=D.length;w<M;w++){const P=D[w];if(p(P,A,w,C)===!0){const V=P.__offset,T=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let H=0;H<T.length;H++){const j=T[H],K=_(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,V+U,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):(j.toArray(P.__data,U),U+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,y,x,C){const A=v.value,R=y+"_"+x;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const D=C[R];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return C[R]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(v){const y=v.uniforms;let x=0;const C=16;for(let R=0,D=y.length;R<D;R++){const w=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,P=w.length;M<P;M++){const V=w[M],T=Array.isArray(V.value)?V.value:[V.value];for(let U=0,H=T.length;U<H;U++){const j=T[U],K=_(j),$=x%C,ce=$%K.boundary,ue=$+ce;x+=ce,ue!==0&&C-ue<K.storage&&(x+=C-ue),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=K.storage}}}const A=x%C;return A>0&&(x+=C-A),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class Nb{constructor(e={}){const{canvas:t=S_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=ws,this.toneMappingExposure=1;const x=this;let C=!1,A=0,R=0,D=null,w=-1,M=null;const P=new ut,V=new ut;let T=null;const U=new Te(0);let H=0,j=t.width,K=t.height,$=1,ce=null,ue=null;const ve=new ut(0,0,j,K),ze=new ut(0,0,j,K);let dt=!1;const Z=new Xu;let se=!1,ye=!1;const he=new Ne,Ae=new Ne,Ue=new k,je=new ut,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function et(){return D===null?$:1}let z=i;function wn(S,O){return t.getContext(S,O)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ku}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",me,!1),z===null){const O="webgl2";if(z=wn(O,S),z===null)throw wn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ke,Je,Ce,bt,Ee,E,b,G,J,I,L,ae,re,de,Le,ie,fe,Re,ke,xe,it,We,Tt,F;function pe(){Ke=new zy(z),Ke.init(),We=new Tb(z,Ke),Je=new Dy(z,Ke,e,We),Ce=new bb(z,Ke),Je.reverseDepthBuffer&&d&&Ce.buffers.depth.setReversed(!0),bt=new Vy(z),Ee=new ab,E=new wb(z,Ke,Ce,Ee,Je,We,bt),b=new Uy(x),G=new By(x),J=new K_(z),Tt=new Py(z,J),I=new Hy(z,J,bt,Tt),L=new Xy(z,I,J,bt),ke=new Wy(z,Je,E),ie=new Ny(Ee),ae=new ob(x,b,G,Ke,Je,Tt,ie),re=new kb(x,Ee),de=new lb,Le=new mb(Ke),Re=new Ly(x,b,G,Ce,L,p,c),fe=new yb(x,L,Je),F=new Db(z,bt,Je,Ce),xe=new ky(z,Ke,bt),it=new Gy(z,Ke,bt),bt.programs=ae.programs,x.capabilities=Je,x.extensions=Ke,x.properties=Ee,x.renderLists=de,x.shadowMap=fe,x.state=Ce,x.info=bt}pe();const q=new Lb(x,z);this.xr=q,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const S=Ke.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ke.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(j,K,!1))},this.getSize=function(S){return S.set(j,K)},this.setSize=function(S,O,W=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=S,K=O,t.width=Math.floor(S*$),t.height=Math.floor(O*$),W===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(j*$,K*$).floor()},this.setDrawingBufferSize=function(S,O,W){j=S,K=O,$=W,t.width=Math.floor(S*W),t.height=Math.floor(O*W),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(ve)},this.setViewport=function(S,O,W,X){S.isVector4?ve.set(S.x,S.y,S.z,S.w):ve.set(S,O,W,X),Ce.viewport(P.copy(ve).multiplyScalar($).round())},this.getScissor=function(S){return S.copy(ze)},this.setScissor=function(S,O,W,X){S.isVector4?ze.set(S.x,S.y,S.z,S.w):ze.set(S,O,W,X),Ce.scissor(V.copy(ze).multiplyScalar($).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(S){Ce.setScissorTest(dt=S)},this.setOpaqueSort=function(S){ce=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(S=!0,O=!0,W=!0){let X=0;if(S){let B=!1;if(D!==null){const oe=D.texture.format;B=oe===Hu||oe===zu||oe===Bu}if(B){const oe=D.texture.type,ge=oe===es||oe===Zs||oe===Yo||oe===eo||oe===Uu||oe===Fu,Me=Re.getClearColor(),be=Re.getClearAlpha(),Fe=Me.r,Ge=Me.g,Se=Me.b;ge?(g[0]=Fe,g[1]=Ge,g[2]=Se,g[3]=be,z.clearBufferuiv(z.COLOR,0,g)):(_[0]=Fe,_[1]=Ge,_[2]=Se,_[3]=be,z.clearBufferiv(z.COLOR,0,_))}else X|=z.COLOR_BUFFER_BIT}O&&(X|=z.DEPTH_BUFFER_BIT),W&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",me,!1),de.dispose(),Le.dispose(),Ee.dispose(),b.dispose(),G.dispose(),L.dispose(),Tt.dispose(),F.dispose(),ae.dispose(),q.dispose(),q.removeEventListener("sessionstart",Nd),q.removeEventListener("sessionend",Ud),Ls.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const S=bt.autoReset,O=fe.enabled,W=fe.autoUpdate,X=fe.needsUpdate,B=fe.type;pe(),bt.autoReset=S,fe.enabled=O,fe.autoUpdate=W,fe.needsUpdate=X,fe.type=B}function me(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function He(S){const O=S.target;O.removeEventListener("dispose",He),kt(O)}function kt(S){nn(S),Ee.remove(S)}function nn(S){const O=Ee.get(S).programs;O!==void 0&&(O.forEach(function(W){ae.releaseProgram(W)}),S.isShaderMaterial&&ae.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,W,X,B,oe){O===null&&(O=_t);const ge=B.isMesh&&B.matrixWorld.determinant()<0,Me=pg(S,O,W,X,B);Ce.setMaterial(X,ge);let be=W.index,Fe=1;if(X.wireframe===!0){if(be=I.getWireframeAttribute(W),be===void 0)return;Fe=2}const Ge=W.drawRange,Se=W.attributes.position;let at=Ge.start*Fe,Et=(Ge.start+Ge.count)*Fe;oe!==null&&(at=Math.max(at,oe.start*Fe),Et=Math.min(Et,(oe.start+oe.count)*Fe)),be!==null?(at=Math.max(at,0),Et=Math.min(Et,be.count)):Se!=null&&(at=Math.max(at,0),Et=Math.min(Et,Se.count));const At=Et-at;if(At<0||At===1/0)return;Tt.setup(B,X,Me,W,be);let Tn,ft=xe;if(be!==null&&(Tn=J.get(be),ft=it,ft.setIndex(Tn)),B.isMesh)X.wireframe===!0?(Ce.setLineWidth(X.wireframeLinewidth*et()),ft.setMode(z.LINES)):ft.setMode(z.TRIANGLES);else if(B.isLine){let we=X.linewidth;we===void 0&&(we=1),Ce.setLineWidth(we*et()),B.isLineSegments?ft.setMode(z.LINES):B.isLineLoop?ft.setMode(z.LINE_LOOP):ft.setMode(z.LINE_STRIP)}else B.isPoints?ft.setMode(z.POINTS):B.isSprite&&ft.setMode(z.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ft.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const we=B._multiDrawStarts,Ui=B._multiDrawCounts,pt=B._multiDrawCount,oi=be?J.get(be).bytesPerElement:1,sr=Ee.get(X).currentProgram.getUniforms();for(let Un=0;Un<pt;Un++)sr.setValue(z,"_gl_DrawID",Un),ft.render(we[Un]/oi,Ui[Un])}else if(B.isInstancedMesh)ft.renderInstances(at,At,B.count);else if(W.isInstancedBufferGeometry){const we=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ui=Math.min(W.instanceCount,we);ft.renderInstances(at,At,Ui)}else ft.render(at,At)};function xt(S,O,W){S.transparent===!0&&S.side===Ai&&S.forceSinglePass===!1?(S.side=kn,S.needsUpdate=!0,ga(S,O,W),S.side=Qi,S.needsUpdate=!0,ga(S,O,W),S.side=Ai):ga(S,O,W)}this.compile=function(S,O,W=null){W===null&&(W=S),f=Le.get(W),f.init(O),y.push(f),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),S!==W&&S.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const X=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const oe=B.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){const Me=oe[ge];xt(Me,W,B),X.add(Me)}else xt(oe,W,B),X.add(oe)}),y.pop(),f=null,X},this.compileAsync=function(S,O,W=null){const X=this.compile(S,O,W);return new Promise(B=>{function oe(){if(X.forEach(function(ge){Ee.get(ge).currentProgram.isReady()&&X.delete(ge)}),X.size===0){B(S);return}setTimeout(oe,10)}Ke.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let ri=null;function Ni(S){ri&&ri(S)}function Nd(){Ls.stop()}function Ud(){Ls.start()}const Ls=new Sm;Ls.setAnimationLoop(Ni),typeof self<"u"&&Ls.setContext(self),this.setAnimationLoop=function(S){ri=S,q.setAnimationLoop(S),S===null?Ls.stop():Ls.start()},q.addEventListener("sessionstart",Nd),q.addEventListener("sessionend",Ud),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,O,D),f=Le.get(S,y.length),f.init(O),y.push(f),Ae.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(Ae),ye=this.localClippingEnabled,se=ie.init(this.clippingPlanes,ye),m=de.get(S,v.length),m.init(),v.push(m),q.enabled===!0&&q.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&pl(oe,O,-1/0,x.sortObjects)}pl(S,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ce,ue),Qe=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Qe&&Re.addToRenderList(m,S),this.info.render.frame++,se===!0&&ie.beginShadows();const W=f.state.shadowsArray;fe.render(W,S,O),se===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(f.setupLights(),O.isArrayCamera){const oe=O.cameras;if(B.length>0)for(let ge=0,Me=oe.length;ge<Me;ge++){const be=oe[ge];Od(X,B,S,be)}Qe&&Re.render(S);for(let ge=0,Me=oe.length;ge<Me;ge++){const be=oe[ge];Fd(m,S,be,be.viewport)}}else B.length>0&&Od(X,B,S,O),Qe&&Re.render(S),Fd(m,S,O);D!==null&&(E.updateMultisampleRenderTarget(D),E.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(x,S,O),Tt.resetDefaultState(),w=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],se===!0&&ie.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function pl(S,O,W,X){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Z.intersectsSprite(S)){X&&je.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ae);const ge=L.update(S),Me=S.material;Me.visible&&m.push(S,ge,Me,W,je.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Z.intersectsObject(S))){const ge=L.update(S),Me=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),je.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),je.copy(ge.boundingSphere.center)),je.applyMatrix4(S.matrixWorld).applyMatrix4(Ae)),Array.isArray(Me)){const be=ge.groups;for(let Fe=0,Ge=be.length;Fe<Ge;Fe++){const Se=be[Fe],at=Me[Se.materialIndex];at&&at.visible&&m.push(S,ge,at,W,je.z,Se)}}else Me.visible&&m.push(S,ge,Me,W,je.z,null)}}const oe=S.children;for(let ge=0,Me=oe.length;ge<Me;ge++)pl(oe[ge],O,W,X)}function Fd(S,O,W,X){const B=S.opaque,oe=S.transmissive,ge=S.transparent;f.setupLightsView(W),se===!0&&ie.setGlobalState(x.clippingPlanes,W),X&&Ce.viewport(P.copy(X)),B.length>0&&ma(B,O,W),oe.length>0&&ma(oe,O,W),ge.length>0&&ma(ge,O,W),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Od(S,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new Rs(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?fo:es,minFilter:ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const oe=f.state.transmissionRenderTarget[X.id],ge=X.viewport||P;oe.setSize(ge.z,ge.w);const Me=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(U),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),Qe&&Re.render(W);const be=x.toneMapping;x.toneMapping=ws;const Fe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),se===!0&&ie.setGlobalState(x.clippingPlanes,X),ma(S,W,X),E.updateMultisampleRenderTarget(oe),E.updateRenderTargetMipmap(oe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Se=0,at=O.length;Se<at;Se++){const Et=O[Se],At=Et.object,Tn=Et.geometry,ft=Et.material,we=Et.group;if(ft.side===Ai&&At.layers.test(X.layers)){const Ui=ft.side;ft.side=kn,ft.needsUpdate=!0,Bd(At,W,X,Tn,ft,we),ft.side=Ui,ft.needsUpdate=!0,Ge=!0}}Ge===!0&&(E.updateMultisampleRenderTarget(oe),E.updateRenderTargetMipmap(oe))}x.setRenderTarget(Me),x.setClearColor(U,H),Fe!==void 0&&(X.viewport=Fe),x.toneMapping=be}function ma(S,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let B=0,oe=S.length;B<oe;B++){const ge=S[B],Me=ge.object,be=ge.geometry,Fe=X===null?ge.material:X,Ge=ge.group;Me.layers.test(W.layers)&&Bd(Me,O,W,be,Fe,Ge)}}function Bd(S,O,W,X,B,oe){S.onBeforeRender(x,O,W,X,B,oe),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(x,O,W,X,S,oe),B.transparent===!0&&B.side===Ai&&B.forceSinglePass===!1?(B.side=kn,B.needsUpdate=!0,x.renderBufferDirect(W,O,X,B,S,oe),B.side=Qi,B.needsUpdate=!0,x.renderBufferDirect(W,O,X,B,S,oe),B.side=Ai):x.renderBufferDirect(W,O,X,B,S,oe),S.onAfterRender(x,O,W,X,B,oe)}function ga(S,O,W){O.isScene!==!0&&(O=_t);const X=Ee.get(S),B=f.state.lights,oe=f.state.shadowsArray,ge=B.state.version,Me=ae.getParameters(S,B.state,oe,O,W),be=ae.getProgramCacheKey(Me);let Fe=X.programs;X.environment=S.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(S.isMeshStandardMaterial?G:b).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Fe===void 0&&(S.addEventListener("dispose",He),Fe=new Map,X.programs=Fe);let Ge=Fe.get(be);if(Ge!==void 0){if(X.currentProgram===Ge&&X.lightsStateVersion===ge)return Hd(S,Me),Ge}else Me.uniforms=ae.getUniforms(S),S.onBeforeCompile(Me,x),Ge=ae.acquireProgram(Me,be),Fe.set(be,Ge),X.uniforms=Me.uniforms;const Se=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Se.clippingPlanes=ie.uniform),Hd(S,Me),X.needsLights=gg(S),X.lightsStateVersion=ge,X.needsLights&&(Se.ambientLightColor.value=B.state.ambient,Se.lightProbe.value=B.state.probe,Se.directionalLights.value=B.state.directional,Se.directionalLightShadows.value=B.state.directionalShadow,Se.spotLights.value=B.state.spot,Se.spotLightShadows.value=B.state.spotShadow,Se.rectAreaLights.value=B.state.rectArea,Se.ltc_1.value=B.state.rectAreaLTC1,Se.ltc_2.value=B.state.rectAreaLTC2,Se.pointLights.value=B.state.point,Se.pointLightShadows.value=B.state.pointShadow,Se.hemisphereLights.value=B.state.hemi,Se.directionalShadowMap.value=B.state.directionalShadowMap,Se.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Se.spotShadowMap.value=B.state.spotShadowMap,Se.spotLightMatrix.value=B.state.spotLightMatrix,Se.spotLightMap.value=B.state.spotLightMap,Se.pointShadowMap.value=B.state.pointShadowMap,Se.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ge,X.uniformsList=null,Ge}function zd(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=hc.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Hd(S,O){const W=Ee.get(S);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function pg(S,O,W,X,B){O.isScene!==!0&&(O=_t),E.resetTextureUnits();const oe=O.fog,ge=X.isMeshStandardMaterial?O.environment:null,Me=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:bn,be=(X.isMeshStandardMaterial?G:b).get(X.envMap||ge),Fe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Se=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,Et=!!W.morphAttributes.color;let At=ws;X.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(At=x.toneMapping);const Tn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ft=Tn!==void 0?Tn.length:0,we=Ee.get(X),Ui=f.state.lights;if(se===!0&&(ye===!0||S!==M)){const jn=S===M&&X.id===w;ie.setState(X,S,jn)}let pt=!1;X.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Ui.state.version||we.outputColorSpace!==Me||B.isBatchedMesh&&we.batching===!1||!B.isBatchedMesh&&we.batching===!0||B.isBatchedMesh&&we.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&we.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&we.instancing===!1||!B.isInstancedMesh&&we.instancing===!0||B.isSkinnedMesh&&we.skinning===!1||!B.isSkinnedMesh&&we.skinning===!0||B.isInstancedMesh&&we.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&we.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&we.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&we.instancingMorph===!1&&B.morphTexture!==null||we.envMap!==be||X.fog===!0&&we.fog!==oe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ie.numPlanes||we.numIntersection!==ie.numIntersection)||we.vertexAlphas!==Fe||we.vertexTangents!==Ge||we.morphTargets!==Se||we.morphNormals!==at||we.morphColors!==Et||we.toneMapping!==At||we.morphTargetsCount!==ft)&&(pt=!0):(pt=!0,we.__version=X.version);let oi=we.currentProgram;pt===!0&&(oi=ga(X,O,B));let sr=!1,Un=!1,Mo=!1;const Rt=oi.getUniforms(),Si=we.uniforms;if(Ce.useProgram(oi.program)&&(sr=!0,Un=!0,Mo=!0),X.id!==w&&(w=X.id,Un=!0),sr||M!==S){Ce.buffers.depth.getReversed()?(he.copy(S.projectionMatrix),T_(he),E_(he),Rt.setValue(z,"projectionMatrix",he)):Rt.setValue(z,"projectionMatrix",S.projectionMatrix),Rt.setValue(z,"viewMatrix",S.matrixWorldInverse);const rs=Rt.map.cameraPosition;rs!==void 0&&rs.setValue(z,Ue.setFromMatrixPosition(S.matrixWorld)),Je.logarithmicDepthBuffer&&Rt.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Rt.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Un=!0,Mo=!0)}if(B.isSkinnedMesh){Rt.setOptional(z,B,"bindMatrix"),Rt.setOptional(z,B,"bindMatrixInverse");const jn=B.skeleton;jn&&(jn.boneTexture===null&&jn.computeBoneTexture(),Rt.setValue(z,"boneTexture",jn.boneTexture,E))}B.isBatchedMesh&&(Rt.setOptional(z,B,"batchingTexture"),Rt.setValue(z,"batchingTexture",B._matricesTexture,E),Rt.setOptional(z,B,"batchingIdTexture"),Rt.setValue(z,"batchingIdTexture",B._indirectTexture,E),Rt.setOptional(z,B,"batchingColorTexture"),B._colorsTexture!==null&&Rt.setValue(z,"batchingColorTexture",B._colorsTexture,E));const bo=W.morphAttributes;if((bo.position!==void 0||bo.normal!==void 0||bo.color!==void 0)&&ke.update(B,W,oi),(Un||we.receiveShadow!==B.receiveShadow)&&(we.receiveShadow=B.receiveShadow,Rt.setValue(z,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Si.envMap.value=be,Si.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(Si.envMapIntensity.value=O.environmentIntensity),Un&&(Rt.setValue(z,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&mg(Si,Mo),oe&&X.fog===!0&&re.refreshFogUniforms(Si,oe),re.refreshMaterialUniforms(Si,X,$,K,f.state.transmissionRenderTarget[S.id]),hc.upload(z,zd(we),Si,E)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(hc.upload(z,zd(we),Si,E),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Rt.setValue(z,"center",B.center),Rt.setValue(z,"modelViewMatrix",B.modelViewMatrix),Rt.setValue(z,"normalMatrix",B.normalMatrix),Rt.setValue(z,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const jn=X.uniformsGroups;for(let rs=0,os=jn.length;rs<os;rs++){const Gd=jn[rs];F.update(Gd,oi),F.bind(Gd,oi)}}return oi}function mg(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function gg(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,O,W){Ee.get(S.texture).__webglTexture=O,Ee.get(S.depthTexture).__webglTexture=W;const X=Ee.get(S);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,O){const W=Ee.get(S);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,W=0){D=S,A=O,R=W;let X=!0,B=null,oe=!1,ge=!1;if(S){const be=Ee.get(S);if(be.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(z.FRAMEBUFFER,null),X=!1;else if(be.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(be.__hasExternalTextures)E.rebindTextures(S,Ee.get(S.texture).__webglTexture,Ee.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Se=S.depthTexture;if(be.__boundDepthTexture!==Se){if(Se!==null&&Ee.has(Se)&&(S.width!==Se.image.width||S.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}const Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ge=!0);const Ge=Ee.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ge[O])?B=Ge[O][W]:B=Ge[O],oe=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?B=Ee.get(S).__webglMultisampledFramebuffer:Array.isArray(Ge)?B=Ge[W]:B=Ge,P.copy(S.viewport),V.copy(S.scissor),T=S.scissorTest}else P.copy(ve).multiplyScalar($).floor(),V.copy(ze).multiplyScalar($).floor(),T=dt;if(Ce.bindFramebuffer(z.FRAMEBUFFER,B)&&X&&Ce.drawBuffers(S,B),Ce.viewport(P),Ce.scissor(V),Ce.setScissorTest(T),oe){const be=Ee.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,W)}else if(ge){const be=Ee.get(S.texture),Fe=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,be.__webglTexture,W||0,Fe)}w=-1},this.readRenderTargetPixels=function(S,O,W,X,B,oe,ge){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){Ce.bindFramebuffer(z.FRAMEBUFFER,Me);try{const be=S.texture,Fe=be.format,Ge=be.type;if(!Je.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-X&&W>=0&&W<=S.height-B&&z.readPixels(O,W,X,B,We.convert(Fe),We.convert(Ge),oe)}finally{const be=D!==null?Ee.get(D).__webglFramebuffer:null;Ce.bindFramebuffer(z.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(S,O,W,X,B,oe,ge){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){const be=S.texture,Fe=be.format,Ge=be.type;if(!Je.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=S.width-X&&W>=0&&W<=S.height-B){Ce.bindFramebuffer(z.FRAMEBUFFER,Me);const Se=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Se),z.bufferData(z.PIXEL_PACK_BUFFER,oe.byteLength,z.STREAM_READ),z.readPixels(O,W,X,B,We.convert(Fe),We.convert(Ge),0);const at=D!==null?Ee.get(D).__webglFramebuffer:null;Ce.bindFramebuffer(z.FRAMEBUFFER,at);const Et=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await w_(z,Et,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Se),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,oe),z.deleteBuffer(Se),z.deleteSync(Et),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,O=null,W=0){S.isTexture!==!0&&(Oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(S.image.width*X),oe=Math.floor(S.image.height*X),ge=O!==null?O.x:0,Me=O!==null?O.y:0;E.setTexture2D(S,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,ge,Me,B,oe),Ce.unbindTexture()},this.copyTextureToTexture=function(S,O,W=null,X=null,B=0){S.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,S=arguments[1],O=arguments[2],B=arguments[3]||0,W=null);let oe,ge,Me,be,Fe,Ge,Se,at,Et;const At=S.isCompressedTexture?S.mipmaps[B]:S.image;W!==null?(oe=W.max.x-W.min.x,ge=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,be=W.min.x,Fe=W.min.y,Ge=W.isBox3?W.min.z:0):(oe=At.width,ge=At.height,Me=At.depth||1,be=0,Fe=0,Ge=0),X!==null?(Se=X.x,at=X.y,Et=X.z):(Se=0,at=0,Et=0);const Tn=We.convert(O.format),ft=We.convert(O.type);let we;O.isData3DTexture?(E.setTexture3D(O,0),we=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(E.setTexture2DArray(O,0),we=z.TEXTURE_2D_ARRAY):(E.setTexture2D(O,0),we=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);const Ui=z.getParameter(z.UNPACK_ROW_LENGTH),pt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),oi=z.getParameter(z.UNPACK_SKIP_PIXELS),sr=z.getParameter(z.UNPACK_SKIP_ROWS),Un=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,At.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,At.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,be),z.pixelStorei(z.UNPACK_SKIP_ROWS,Fe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ge);const Mo=S.isDataArrayTexture||S.isData3DTexture,Rt=O.isDataArrayTexture||O.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Si=Ee.get(S),bo=Ee.get(O),jn=Ee.get(Si.__renderTarget),rs=Ee.get(bo.__renderTarget);Ce.bindFramebuffer(z.READ_FRAMEBUFFER,jn.__webglFramebuffer),Ce.bindFramebuffer(z.DRAW_FRAMEBUFFER,rs.__webglFramebuffer);for(let os=0;os<Me;os++)Mo&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ee.get(S).__webglTexture,B,Ge+os),S.isDepthTexture?(Rt&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ee.get(O).__webglTexture,B,Et+os),z.blitFramebuffer(be,Fe,oe,ge,Se,at,oe,ge,z.DEPTH_BUFFER_BIT,z.NEAREST)):Rt?z.copyTexSubImage3D(we,B,Se,at,Et+os,be,Fe,oe,ge):z.copyTexSubImage2D(we,B,Se,at,Et+os,be,Fe,oe,ge);Ce.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Rt?S.isDataTexture||S.isData3DTexture?z.texSubImage3D(we,B,Se,at,Et,oe,ge,Me,Tn,ft,At.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(we,B,Se,at,Et,oe,ge,Me,Tn,At.data):z.texSubImage3D(we,B,Se,at,Et,oe,ge,Me,Tn,ft,At):S.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,B,Se,at,oe,ge,Tn,ft,At.data):S.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,B,Se,at,At.width,At.height,Tn,At.data):z.texSubImage2D(z.TEXTURE_2D,B,Se,at,oe,ge,Tn,ft,At);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ui),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,oi),z.pixelStorei(z.UNPACK_SKIP_ROWS,sr),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Un),B===0&&O.generateMipmaps&&z.generateMipmap(we),Ce.unbindTexture()},this.copyTextureToTexture3D=function(S,O,W=null,X=null,B=0){return S.isTexture!==!0&&(Oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,S=arguments[2],O=arguments[3],B=arguments[4]||0),Oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,O,W,X,B)},this.initRenderTarget=function(S){Ee.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),Ce.unbindTexture()},this.resetState=function(){A=0,R=0,D=null,Ce.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class qu{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=i}clone(){return new qu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Rm extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nu,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mn=new k;class Qo{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class el extends ii{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let vr;const Ao=new k,yr=new k,Mr=new k,br=new Ie,Ro=new Ie,Im=new Ne,Fa=new k,Co=new k,Oa=new k,Gf=new Ie,Vl=new Ie,Vf=new Ie;class Yu extends It{constructor(e=new el){if(super(),this.isSprite=!0,this.type="Sprite",vr===void 0){vr=new tn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Cm(t,5);vr.setIndex([0,1,2,0,2,3]),vr.setAttribute("position",new Qo(i,3,0,!1)),vr.setAttribute("uv",new Qo(i,2,3,!1))}this.geometry=vr,this.material=e,this.center=new Ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yr.setFromMatrixScale(this.matrixWorld),Im.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yr.multiplyScalar(-Mr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Ba(Fa.set(-.5,-.5,0),Mr,o,yr,s,r),Ba(Co.set(.5,-.5,0),Mr,o,yr,s,r),Ba(Oa.set(.5,.5,0),Mr,o,yr,s,r),Gf.set(0,0),Vl.set(1,0),Vf.set(1,1);let a=e.ray.intersectTriangle(Fa,Co,Oa,!1,Ao);if(a===null&&(Ba(Co.set(-.5,.5,0),Mr,o,yr,s,r),Vl.set(0,1),a=e.ray.intersectTriangle(Fa,Oa,Co,!1,Ao),a===null))return;const c=e.ray.origin.distanceTo(Ao);c<e.near||c>e.far||t.push({distance:c,point:Ao.clone(),uv:Jn.getInterpolation(Ao,Fa,Co,Oa,Gf,Vl,Vf,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ba(n,e,t,i,s,r){br.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ro.x=r*br.x-s*br.y,Ro.y=s*br.x+r*br.y):Ro.copy(br),n.copy(e),n.x+=Ro.x,n.y+=Ro.y,n.applyMatrix4(Im)}const Wf=new k,Xf=new ut,$f=new ut,Ub=new k,jf=new Ne,za=new k,Wl=new Pi,qf=new Ne,Xl=new Zc;class Fb extends qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$d,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,za),this.boundingBox.expandByPoint(za)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,za),this.boundingSphere.expandByPoint(za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wl.copy(this.boundingSphere),Wl.applyMatrix4(s),e.ray.intersectsSphere(Wl)!==!1&&(qf.copy(s).invert(),Xl.copy(e.ray).applyMatrix4(qf),!(this.boundingBox!==null&&Xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$d?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$g?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Xf.fromBufferAttribute(s.attributes.skinIndex,e),$f.fromBufferAttribute(s.attributes.skinWeight,e),Wf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=$f.getComponent(r);if(o!==0){const a=Xf.getComponent(r);jf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Ub.copy(Wf).applyMatrix4(jf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Lm extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Pm extends Vt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=qt,h=qt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yf=new Ne,Ob=new Ne;class Ku{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ne;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Ob;Yf.multiplyMatrices(a,t[r]),Yf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ku(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Pm(t,e,e,Qn,vi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Lm),this.bones.push(o),this.boneInverses.push(new Ne().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class su extends en{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Sr=new Ne,Kf=new Ne,Ha=[],Zf=new bi,Bb=new Ne,Io=new qe,Lo=new Pi;class tl extends qe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new su(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Bb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Sr),Zf.copy(e.boundingBox).applyMatrix4(Sr),this.boundingBox.union(Zf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Sr),Lo.copy(e.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(Lo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Io.geometry=this.geometry,Io.material=this.material,Io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lo.copy(this.boundingSphere),Lo.applyMatrix4(i),e.ray.intersectsSphere(Lo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Sr),Kf.multiplyMatrices(i,Sr),Io.matrixWorld=Kf,Io.raycast(e,Ha);for(let o=0,a=Ha.length;o<a;o++){const c=Ha[o];c.instanceId=r,c.object=this,t.push(c)}Ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new su(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Pm(new Float32Array(s*this.count),s,this.count,Ou,vi));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class km extends ii{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lc=new k,Pc=new k,Jf=new Ne,Po=new Zc,Ga=new Pi,$l=new k,Qf=new k;class Zu extends It{constructor(e=new tn,t=new km){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Lc.fromBufferAttribute(t,s-1),Pc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Lc.distanceTo(Pc);e.setAttribute("lineDistance",new Pt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;Jf.copy(s).invert(),Po.copy(e.ray).applyMatrix4(Jf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),v=h.getX(_+1),y=Va(this,e,Po,c,f,v);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=Va(this,e,Po,c,_,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=Va(this,e,Po,c,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=Va(this,e,Po,c,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Va(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(Lc.fromBufferAttribute(o,s),Pc.fromBufferAttribute(o,r),t.distanceSqToSegment(Lc,Pc,$l,Qf)>i)return;$l.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo($l);if(!(c<e.near||c>e.far))return{distance:c,point:Qf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const ep=new k,tp=new k;class zb extends Zu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ep.fromBufferAttribute(t,s),tp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ep.distanceTo(tp);e.setAttribute("lineDistance",new Pt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hb extends Zu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Dm extends ii{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const np=new Ne,ru=new Zc,Wa=new Pi,Xa=new k;class Gb extends It{constructor(e=new tn,t=new Dm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(s),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;np.copy(s).invert(),ru.copy(e.ray).applyMatrix4(np);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);Xa.fromBufferAttribute(u,m),ip(Xa,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Xa.fromBufferAttribute(u,g),ip(Xa,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ip(n,e,t,i,s,r,o){const a=ru.distanceSqToPoint(n);if(a<t){const c=new k;ru.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ca extends Vt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Js extends tn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new k,h=new Ie;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=i+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(a,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class _i extends tn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=i/2;let f=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Pt(u,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(p,2));function v(){const x=new k,C=new k;let A=0;const R=(t-e)/i;for(let D=0;D<=r;D++){const w=[],M=D/r,P=M*(t-e)+e;for(let V=0;V<=s;V++){const T=V/s,U=T*c+a,H=Math.sin(U),j=Math.cos(U);C.x=P*H,C.y=-M*i+m,C.z=P*j,u.push(C.x,C.y,C.z),x.set(H,R,j).normalize(),d.push(x.x,x.y,x.z),p.push(T,1-M),w.push(g++)}_.push(w)}for(let D=0;D<s;D++)for(let w=0;w<r;w++){const M=_[w][D],P=_[w+1][D],V=_[w+1][D+1],T=_[w][D+1];(e>0||w!==0)&&(h.push(M,P,T),A+=3),(t>0||w!==r-1)&&(h.push(P,V,T),A+=3)}l.addGroup(f,A,0),f+=A}function y(x){const C=g,A=new Ie,R=new k;let D=0;const w=x===!0?e:t,M=x===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let V=0;V<=s;V++){const U=V/s*c+a,H=Math.cos(U),j=Math.sin(U);R.x=w*j,R.y=m*M,R.z=w*H,u.push(R.x,R.y,R.z),d.push(0,M,0),A.x=H*.5+.5,A.y=j*.5*M+.5,p.push(A.x,A.y),g++}for(let V=0;V<s;V++){const T=C+V,U=P+V;x===!0?h.push(U,U+1,T):h.push(U+1,U,T),D+=3}l.addGroup(f,D,x===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ju extends tn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(r.slice(),3)),this.setAttribute("uv",new Pt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new k,x=new k,C=new k;for(let A=0;A<t.length;A+=3)p(t[A+0],y),p(t[A+1],x),p(t[A+2],C),c(y,x,C,v)}function c(v,y,x,C){const A=C+1,R=[];for(let D=0;D<=A;D++){R[D]=[];const w=v.clone().lerp(x,D/A),M=y.clone().lerp(x,D/A),P=A-D;for(let V=0;V<=P;V++)V===0&&D===A?R[D][V]=w:R[D][V]=w.clone().lerp(M,V/P)}for(let D=0;D<A;D++)for(let w=0;w<2*(A-D)-1;w++){const M=Math.floor(w/2);w%2===0?(d(R[D][M+1]),d(R[D+1][M]),d(R[D][M])):(d(R[D][M+1]),d(R[D+1][M+1]),d(R[D+1][M]))}}function l(v){const y=new k;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const v=new k;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=m(v)/2/Math.PI+.5,C=f(v)/Math.PI+.5;o.push(x,1-C)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],C=o[v+4],A=Math.max(y,x,C),R=Math.min(y,x,C);A>.9&&R<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const v=new k,y=new k,x=new k,C=new k,A=new Ie,R=new Ie,D=new Ie;for(let w=0,M=0;w<r.length;w+=9,M+=6){v.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),A.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),D.set(o[M+4],o[M+5]),C.copy(v).add(y).add(x).divideScalar(3);const P=m(C);_(A,M+0,v,P),_(R,M+2,y,P),_(D,M+4,x,P)}}function _(v,y,x,C){C<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ju(e.vertices,e.indices,e.radius,e.details)}}class kc extends Ju{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kc(e.radius,e.detail)}}class Qu extends tn{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/s,p=new k,g=new Ie;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const f=r+m/i*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(i+1);for(let f=0;f<i;f++){const v=f+m,y=v,x=v+i+1,C=v+i+2,A=v+1;a.push(y,x,A),a.push(x,C,A)}}this.setIndex(a),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ed extends tn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new k,u=new k,d=new k;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,v=(s+1)*p+g;o.push(_,m,v),o.push(m,f,v)}this.setIndex(o),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(c,3)),this.setAttribute("uv",new Pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ed(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class td extends ii{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vu,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ki extends td{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ln(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xn extends ii{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vu,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function $a(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Vb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Wb(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function sp(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function Nm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class la{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Xb extends la{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nr,endingEnd:Nr}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ur:r=e,a=2*t-i;break;case Cc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ur:o=e,c=2*i-t;break;case Cc:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}const l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+v*o[l+C]+y*o[c+C]+x*o[u+C];return r}}class Um extends la{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class $b extends la{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Di{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$a(t,this.TimeBufferType),this.values=$a(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$a(e.times,Array),values:$a(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $b(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Um(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ko:t=this.InterpolantFactoryMethodDiscrete;break;case Zo:t=this.InterpolantFactoryMethodLinear;break;case ml:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ko;case this.InterpolantFactoryMethodLinear:return Zo;case this.InterpolantFactoryMethodSmooth:return ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Vb(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ml,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=Zo;class mo extends Di{constructor(e,t,i){super(e,t,i)}}mo.prototype.ValueTypeName="bool";mo.prototype.ValueBufferType=Array;mo.prototype.DefaultInterpolation=Ko;mo.prototype.InterpolantFactoryMethodLinear=void 0;mo.prototype.InterpolantFactoryMethodSmooth=void 0;class Fm extends Di{}Fm.prototype.ValueTypeName="color";class so extends Di{}so.prototype.ValueTypeName="number";class jb extends la{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Gn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class ro extends Di{InterpolantFactoryMethodLinear(e){return new jb(this.times,this.values,this.getValueSize(),e)}}ro.prototype.ValueTypeName="quaternion";ro.prototype.InterpolantFactoryMethodSmooth=void 0;class go extends Di{constructor(e,t,i){super(e,t,i)}}go.prototype.ValueTypeName="string";go.prototype.ValueBufferType=Array;go.prototype.DefaultInterpolation=Ko;go.prototype.InterpolantFactoryMethodLinear=void 0;go.prototype.InterpolantFactoryMethodSmooth=void 0;class oo extends Di{}oo.prototype.ValueTypeName="vector";class ou{constructor(e="",t=-1,i=[],s=Gu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=yi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Yb(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Di.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=Wb(c);c=sp(c,1,h),l=sp(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new so(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,p,g,_){if(p.length!==0){const m=[],f=[];Nm(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let v=0;v!==d[g].morphTargets.length;++v){const y=d[g];m.push(y.time),f.push(y.morphTarget===_?1:0)}s.push(new so(".morphTargetInfluence["+_+"]",m,f))}c=p.length*o}else{const p=".bones["+t[u].name+"]";i(oo,p+".position",d,"pos",s),i(ro,p+".quaternion",d,"rot",s),i(oo,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function qb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return so;case"vector":case"vector2":case"vector3":case"vector4":return oo;case"color":return Fm;case"quaternion":return ro;case"bool":case"boolean":return mo;case"string":return go}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Yb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=qb(n.type);if(n.times===void 0){const t=[],i=[];Nm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Ms={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Kb{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Zb=new Kb;class _o{constructor(e){this.manager=e!==void 0?e:Zb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_o.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gi={};class Jb extends Error{constructor(e,t){super(e),this.response=t}}class Om extends _o{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ms.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Gi[e]!==void 0){Gi[e].push({onLoad:t,onProgress:i,onError:s});return}Gi[e]=[],Gi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Gi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){v();function v(){u.read().then(({done:y,value:x})=>{if(y)f.close();else{_+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let A=0,R=h.length;A<R;A++){const D=h[A];D.onProgress&&D.onProgress(C)}f.enqueue(x),v()}},y=>{f.error(y)})}}});return new Response(m)}else throw new Jb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Ms.add(e,l);const h=Gi[e];delete Gi[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=Gi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Gi[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Qb extends _o{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ms.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Jo("img");function c(){h(),Ms.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class e1 extends _o{constructor(e){super(e)}load(e,t,i,s){const r=new Vt,o=new Qb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class nl extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class t1 extends nl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const jl=new Ne,rp=new k,op=new k;class nd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xu,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;rp.setFromMatrixPosition(e.matrixWorld),t.position.copy(rp),op.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(op),t.updateMatrixWorld(),jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class n1 extends nd{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=no*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class i1 extends nl{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new n1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ap=new Ne,ko=new k,ql=new k;class s1 extends nd{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ko.setFromMatrixPosition(e.matrixWorld),i.position.copy(ko),ql.copy(i.position),ql.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ql),i.updateMatrixWorld(),s.makeTranslation(-ko.x,-ko.y,-ko.z),ap.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ap)}}class Bm extends nl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new s1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class r1 extends nd{constructor(){super(new Jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zm extends nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new r1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class o1 extends _o{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ms.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ms.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Ms.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ms.add(e,c),r.manager.itemStart(e)}}class a1{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)i[r+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(i,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){a.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,o=s;r!==o;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[i+o]}_slerp(e,t,i,s){Gn.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){const o=this._workIndex*r;Gn.multiplyQuaternionsFlat(e,o,e,t,e,i),Gn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,i,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[i+a]*s}}_lerpAdditive(e,t,i,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[i+o]*s}}}const id="\\[\\]\\.:\\/",c1=new RegExp("["+id+"]","g"),sd="[^"+id+"]",l1="[^"+id.replace("\\.","")+"]",h1=/((?:WC+[\/:])*)/.source.replace("WC",sd),u1=/(WCOD+)?/.source.replace("WCOD",l1),d1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sd),f1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sd),p1=new RegExp("^"+h1+u1+d1+f1+"$"),m1=["material","materials","bones","map"];class g1{constructor(e,t,i){const s=i||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class gt{constructor(e,t,i){this.path=t,this.parsedPath=i||gt.parseTrackName(t),this.node=gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new gt.Composite(e,t,i):new gt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(c1,"")}static parseTrackName(e){const t=p1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);m1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=gt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}gt.Composite=g1;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _1{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Nr,endingEnd:Nr};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=jg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+i,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*i;c<0||i===0?t=0:(this._startTime=null,t=i*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Yg:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Gu:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,r=this._loopCount;const o=i===qg;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(i===lm){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=Ur,s.endingEnd=Ur):(e?s.endingStart=this.zeroSlopeAtStart?Ur:Nr:s.endingStart=Cc,t?s.endingEnd=this.zeroSlopeAtEnd?Ur:Nr:s.endingEnd=Cc)}_scheduleFading(e,t,i){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=i,this}}const x1=new Float32Array(1);class v1 extends er{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=s[u],p=d.name;let g=h[p];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new a1(gt.create(i,p,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Um(new Float32Array(2),new Float32Array(2),1,x1),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?ou.findByName(s,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Gu),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new _1(this,o,t,i);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){const i=t||this._root,s=i.uuid,r=typeof e=="string"?ou.findByName(i,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(s,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ku}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ku);function tr(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e>>>0}function rd(n){const e=n+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),[((t^t>>>14)>>>0)/4294967296,e]}function il(n){let e=n>>>0;return()=>{const[t,i]=rd(e);return e=i,t}}const au=["office","tourist","oldlady","party","jogger","rich"],fs=(n,e)=>{for(let t=e.length-1;t>=0;t--)if(n>=e[t][0])return e[t][1];return e[0][1]},ha={old:{name:"The old corner",mix:{office:1,tourist:1,oldlady:1,party:1,jogger:1,rich:.5},busy:n=>fs(n,[[0,.7],[.72,.4]]),gen:()=>1},market:{name:"The market",mix:{oldlady:3,tourist:3,office:1,rich:.5},busy:n=>fs(n,[[0,.8],[.25,1],[.6,.6],[.72,.15]]),gen:n=>n>.25&&n<.6?1.2:1},homes:{name:"Quiet street",mix:{oldlady:3,jogger:2,rich:1,office:1},busy:n=>fs(n,[[0,.5],[.72,.2]]),gen:()=>1.05},park:{name:"The park",mix:{jogger:3,oldlady:3,tourist:2,party:.5},busy:n=>fs(n,[[0,.8],[.6,.6],[.72,.25]]),gen:()=>.95},bars:{name:"Bar street",mix:{party:6,office:1,tourist:1,rich:.5},busy:n=>fs(n,[[0,.25],[.45,.6],[.6,1]]),gen:n=>n>.6?1.25:.8},downtown:{name:"Downtown",mix:{office:5,rich:2,tourist:1,jogger:1},busy:n=>fs(n,[[0,1],[.6,.6],[.72,.15]]),gen:()=>.85},station:{name:"Station underpass",mix:{office:3,tourist:2,party:1,oldlady:1,jogger:.5,rich:.5},busy:n=>fs(n,[[0,1],[.2,.6],[.5,1],[.72,.4]]),gen:()=>1},river:{name:"The river",mix:{tourist:2,jogger:3,rich:1,oldlady:1},busy:n=>fs(n,[[0,.6],[.5,.8],[.72,.2]]),gen:()=>1.1}};function Sn(n,e){return n>=-36&&n<=36?"old":e>=0?n<-70?"homes":n<-36?"market":n<=72?"bars":"downtown":n<-36?"park":n<=72?"station":"river"}function y1(n,e){const t=ha[n].mix,i=au.reduce((r,o)=>r+(t[o]??0),0);let s=e*i;for(const r of au)if(s-=t[r]??0,s<0)return r;return"office"}const ja={minX:-106,maxX:108,minZ:-28,maxZ:23},Pe={store:{x:-22,z:8.5,r:3,label:"Liquor store"},bakery:{x:0,z:8.5,r:3,label:"Bakery"},dumpster:{x:4,z:17,r:2.6,label:"Dumpster"},corner:{x:24,z:6,r:3.5,label:"Busy corner"},bin:{x:12,z:-6,r:2.5,label:"Recycling"},bench:{x:-16,z:-12,r:2.5,label:"Bench"},sprinkler:{x:-8,z:-9,r:3,label:"Sprinkler"},alley:{x:12,z:16,r:3,label:"Alley"},stash:{x:13.5,z:20,r:1.8,label:"Loose brick"},shop2:{x:-61,z:8.6,r:2.8,label:"Corner shop"},truck:{x:-46,z:-7.2,r:2.8,label:"Food truck"},bakeryBin:{x:6.8,z:9.2,r:1.8,label:"Bakery bin"},fountain:{x:-62,z:-18,r:4.2,label:"Fountain"},pigeons:{x:-57,z:-13,r:3,label:"Pigeons"},pigeons2:{x:47,z:-10,r:3,label:"Pigeons"},underpass:{x:56,z:-15,r:4,label:"Underpass"},bridge:{x:90,z:-24.5,r:3.2,label:"Under the bridge"},tvBar:{x:62,z:8.6,r:2.6,label:"Bar TV"},tvShop:{x:79,z:8.6,r:2.6,label:"Shop TV"},bin2:{x:-50,z:-6,r:2.5,label:"Recycling"},bin3:{x:66,z:-6,r:2.5,label:"Recycling"}},cp={liquor:"store",corner:"shop2",truck:"truck"},Hm={liquor:"Liquor store",corner:"Corner shop",truck:"Food truck"},ea=[{x:-16,z:-12},{x:-70,z:-12},{x:-54,z:-12},{x:-62,z:-25},{x:-90,z:-6.4},{x:50,z:-6.6},{x:82,z:-20},{x:100,z:-6.6},{x:-82,z:-24}],Gm=2,Vm=[{x:-26,z:4.8},{x:-84,z:4.8},{x:-50,z:4.8},{x:44,z:4.8},{x:66,z:4.8},{x:86,z:4.8},{x:-66,z:-6.2},{x:30,z:-6.2},{x:96,z:-6.2},{x:60,z:-19}],M1=1.7,cu=[{x:-22,z:10},{x:0,z:10},{x:-61,z:10},{x:42.5,z:10},{x:62,z:10},{x:92,z:10},{x:56,z:-9}],b1=3.4,S1=["bin","bin2","bin3"],sl=["pigeons","pigeons2"],od=["tvBar","tvShop"],w1=[-80,-8,40,76],ad=[{x:-30,z:5.5},{x:-12,z:5.5},{x:8,z:5.5},{x:30,z:-5.5},{x:-26,z:-5.5},{x:-4,z:-5.5},{x:18,z:-5.5},{x:-20,z:-16},{x:-4,z:-18},{x:10,z:19},{x:14,z:12},{x:28,z:14},{x:-30,z:-12},{x:0,z:-14},{x:-98,z:6},{x:-76,z:5.5},{x:-44,z:7},{x:-58,z:-20},{x:-88,z:-16},{x:-48,z:-24},{x:40,z:6},{x:50,z:7.5},{x:68,z:5.5},{x:46,z:-14},{x:64,z:-17},{x:54,z:-20},{x:80,z:6},{x:100,z:5.5},{x:84,z:-12},{x:96,z:-22},{x:76,z:-25},{x:104,z:-14}],T1=[{z:6.2,x0:-104,x1:106},{z:7.6,x0:-104,x1:106},{z:-5.6,x0:-104,x1:106},{z:-16,x0:-100,x1:-40},{z:-18,x0:74,x1:106},{z:-12,x0:40,x1:70}],Wm={sad:{label:"Sad face",say:["(big sad eyes)","Rough week, friend...","Anything helps. Truly.","(sighs like a movie dog)"]},compliment:{label:"Compliment",say:["Great shoes. Spare a dollar?","You look like a generous person.","That coat! Wow.","Best haircut on this street."]},howdy:{label:"Hey, how you doin?",say:["Hey! How you doin?","Morning, boss!","Beautiful day, huh?","Looking good out here!"]},joke:{label:"Tell a joke",say:["Why don't pigeons pay rent? It's cheep.","I used to be rich. Then I paid for parking.","My landlord is the sky. Rent's free, roof leaks.","I'm on a seafood diet. I see food, I ask for it.","I lost my job at the calendar factory. Took a day off."]},honest:{label:"Be honest",say:["Honestly? It's for a beer.","Spare a dollar for a beer? No lies.","I won't pretend. I'm thirsty.","Straight up: beer fund."]},door:{label:"Hold the door",say:["(holds the door) After you!","(bows, holds the door)","Door service! Tips welcome."]}},ua={office:{name:"Office worker",base:.1,likes:["door","honest"],hates:["sad","joke"],cash:[1,3],food:.1,laughs:!1},tourist:{name:"Tourist",base:.2,likes:["joke","compliment","howdy"],hates:["honest"],cash:[1,5],food:0,laughs:!0},oldlady:{name:"Old lady",base:.2,likes:["sad","compliment","door"],hates:["joke","honest"],cash:[1,2],food:.45,laughs:!1},party:{name:"Party kid",base:.14,likes:["honest","joke"],hates:["sad","compliment"],cash:[1,4],food:.05,laughs:!0},jogger:{name:"Jogger",base:.05,likes:["howdy"],hates:["sad","door","compliment"],cash:[1,2],food:0,laughs:!1},rich:{name:"Rich guy",base:.06,likes:["compliment","door"],hates:["howdy","honest","sad"],cash:[5,20],food:0,laughs:!1}},fi={likeMul:2.4,likeAdd:.1,againMul:.4,angryAt:2,copChance:.35,hateCop:.08,signAdd:.06,drunkMul:.7,maxP:.85},Os=(n,e)=>n[Math.min(n.length-1,Math.floor(e*n.length))],E1=["Here you go.","Take care, man.","Get something to eat.","Here. Don't tell my wife.","Hang in there."],lp={joke:["Ha! Here.","OK, that's good. Take it.","Ha! You earned that."],honest:["Respect the honesty. Here.","Ha. One beer. On me.","At least you are honest."],compliment:["Aw, thanks! Here.","Flattery works. Here."],door:["What a gentleman! Here.","Thank you, sir."],sad:["Oh, honey. Here.","Poor guy. Here."],howdy:["Doing good! Here, buddy.","Ha, hey yourself. Here."]},A1={rich:["Keep the change. All of it.","Here's a twenty. Don't make it weird."],party:["Bro! Here! Cheers!","Drink one for me!"],tourist:["Is this how it works here? Here!","For the local guide!"]},R1=["Take this sandwich, dear.","Here, I packed too much lunch.","Have my muffin. Go on."],C1=["Sorry man, no cash.","Not today.","I only have card.","(pretends to be on the phone)","(walks faster)","Maybe next time.","Sorry, buddy.","I gave at the office."],hp={office:["Get a job.","In a meeting. Literally.","I'm late, sorry."],tourist:["No speak... uh... money.","(takes a photo of him instead)"],oldlady:["I only have bus fare, dear.","Not today, sweetheart."],party:["Bro, I'm broke too.","Spent it all on shots, sorry!"],jogger:["(points at earbuds)","Can't stop! Pace!"],rich:["Have you tried a job?","My accountant says no."]},I1={office:["Ugh. Get a job.","Not now. Ever."],tourist:["Uh... no. Weird.","Is he allowed to say that?"],oldlady:["That's not funny, young man.","Shameful!"],party:["Dude, too real. Bad vibes.","Ew, no."],jogger:["Don't touch me.","Out of my lane!"],rich:["Don't touch me.","Don't talk to me."]},L1=["I said NO.","Leave me alone!","Back off, man!","Seriously? Again?"],up=["I'm calling the cops.","Officer! This guy!"],P1=["Ha! Good one. Still no.","Haha! No cash, but good one."];function k1(n,e,t){const i=ua[n];if(t.asks>=fi.angryAt||i.hates.includes(e))return 0;let s=i.base*(.5+t.generosity)*t.areaMul;return i.likes.includes(e)&&(s=s*fi.likeMul+fi.likeAdd),t.asks===1&&(s*=fi.againMul),t.sign&&(s+=fi.signAdd),t.high&&n!=="party"&&(s*=fi.drunkMul),Math.max(0,Math.min(fi.maxP,s))}function D1(n,e,t,i){const s=ua[n],r={outcome:"no",money:0,food:0,laughed:!1,callCop:!1,reply:""};if(t.asks>=fi.angryAt)return r.outcome="angry",r.callCop=i()<fi.copChance+.15*(t.asks-fi.angryAt),r.reply=r.callCop?Os(up,i()):Os(L1,i()),r;if(s.hates.includes(e))return r.outcome="hate",r.callCop=(n==="rich"||n==="office")&&i()<fi.hateCop,r.reply=r.callCop?Os(up,i()):Os(I1[n],i()),r;const o=s.likes.includes(e);if(r.laughed=e==="joke"&&o&&s.laughs&&i()<.75,i()<k1(n,e,t)){if(r.outcome="give",i()<s.food)r.food=30,r.reply=Os(R1,i());else{r.money=s.cash[0]+Math.floor(i()*(s.cash[1]-s.cash[0]+1));const c=[...E1,...lp[e]??[],...lp[e]??[],...A1[n]??[]];r.reply=Os(c,i())}return r}const a=r.laughed?P1:[...C1,...hp[n]??[],...hp[n]??[]];return r.reply=Os(a,i()),r}const Xm={beer:{name:"Beer",price:3,note:"Gentle. The classic."},vodka:{name:"Vodka",price:5,note:"Strong. Wild."},wine:{name:"Cheap wine",price:4,note:"Warm and slow."},hotdog:{name:"Hot dog",price:3,note:"Hot food. +40 food",food:40,hot:!0},soup:{name:"Soup",price:4,note:"Hot. +50 food, +5 health",food:50,hot:!0},coffee:{name:"Coffee",price:2,note:"Hot. +10 food, eases the shakes",food:10,hot:!0},sandwich:{name:"Sandwich",price:3,note:"Cold. +35 food",food:35},chips:{name:"Chips",price:1,note:"Cold. +15 food",food:15},pastry:{name:"Pastry",price:2,note:"Cold. +20 food",food:20},cigs:{name:"Cigarettes (5)",price:3,note:"Smoke anywhere. Needs a lighter."},lighter:{name:"Lighter",price:1,note:"For the smokes."},scratch:{name:"Scratch card",price:1,note:"Small odds. Big hope."},treats:{name:"Dog treats",price:2,note:"For a friend you have not met yet."},sign:{name:"Cardboard sign",price:2,note:"People give a bit more."},shades:{name:"Sunglasses",price:6,note:"The cop notices you less."},goodBlanket:{name:"Good blanket",price:8,note:"Sleep heals more. Not heavy."},jokebook:{name:"Joke book",price:4,note:'Unlocks "Tell a joke".'}},$m={liquor:["beer","wine","vodka","cigs","lighter","scratch","chips"],corner:["sandwich","chips","pastry","beer","cigs","lighter","scratch","treats","sign","shades","goodBlanket","jokebook"],truck:["hotdog","soup","coffee"]},Do={big:.03,bigWin:20,small:.15,smallWin:5};function N1(n){return n<Do.big?Do.bigWin:n<Do.big+Do.small?Do.smallWin:0}const cd={laughTourist:{text:"Make a tourist laugh",ev:"laugh:tourist",n:1,whimsy:15},eatHot:{text:"Eat something hot",ev:"eat:hot",n:1,whimsy:10},sleepBridge:{text:"Sleep under the bridge",ev:"sleep:bridge",n:1,whimsy:12},scratchWin:{text:"Win on a scratch card",ev:"scratch:win",n:1,money:3},give3:{text:"Get 3 people to give",ev:"give",n:3,money:4},recycle5:{text:"Recycle 5 bottles",ev:"recycle",n:5,money:3},sit:{text:"Sit on a bench a while",ev:"sit",n:1,whimsy:8},pigeons:{text:"Feed the pigeons",ev:"pigeons",n:1,whimsy:8},oldLady:{text:"Get an old lady to give",ev:"give:oldlady",n:1,whimsy:10},rich:{text:"Get money from a rich guy",ev:"give:rich",n:1,whimsy:12},door:{text:"Hold a door for someone",ev:"line:door",n:1,money:2},areas3:{text:"Visit 3 parts of the city",ev:"area",n:3,whimsy:10},smoke:{text:"Have a smoke",ev:"smoke",n:1,whimsy:6},tv:{text:"Watch the TV in a window",ev:"tv",n:1,whimsy:6},whimsy2:{text:"Do 2 whimsy acts",ev:"whimsy",n:2,money:4},trash:{text:"Dig through 2 trash cans",ev:"trash",n:2,whimsy:6}},U1=Object.keys(cd);function ld(n,e){const t=il(tr(`${n}#goals${e}`)),i=[...U1],s=[];for(;s.length<3;){const r=Math.floor(t()*i.length);s.push({id:i[r],got:0,done:!1}),i.splice(r,1)}return s}const Hn=["head","body","hands","carry"],jm={common:14211288,good:4905066,rare:4889343,legendary:16756782},qm={cardboard:{name:"Cardboard",rarity:"common",desc:"A flat box. A bed, a sign, a wall.",effect:"Craft: sign.",dur:3,value:0,paper:!0},marker:{name:"Marker",rarity:"common",desc:"Half dry. Enough for one sign.",effect:"Craft: sign.",dur:2,value:0},can:{name:"Empty can",rarity:"common",desc:"Rinsed. Mostly.",effect:"Craft: stove, wind chime.",dur:9,value:0},candle:{name:"Candle stub",rarity:"common",desc:"Church leftovers.",effect:"Craft: stove.",dur:3,value:0},string:{name:"String",rarity:"common",desc:"A good length of string.",effect:"Craft: necklace, wind chime.",dur:9,value:0},caps:{name:"Bottle caps",rarity:"common",desc:"A pocketful. They jingle.",effect:"Craft: necklace.",dur:9,value:0},tape:{name:"Duct tape",rarity:"common",desc:"Fixes everything twice.",effect:"Use: +3 wear on his most worn thing. Craft: rain cover.",dur:2,value:1},plank:{name:"Plank",rarity:"common",desc:"Straight, mostly.",effect:"Craft: skateboard.",dur:9,value:0},pole:{name:"Pole",rarity:"common",desc:"A tent pole, or a broom handle.",effect:"Craft: tent (needs 2).",dur:9,value:0},crate:{name:"Milk crate",rarity:"common",desc:"The seat of kings.",effect:"Craft: cart.",dur:9,value:1},newspaper:{name:"Newspaper",rarity:"common",desc:"Yesterday's news.",effect:"Use: read it. +2 whimsy.",dur:2,value:0,paper:!0},beans:{name:"Can of beans",rarity:"common",desc:"Cold beans. Food is food.",effect:"Use: eat. +20 food (hot with a stove).",dur:1,value:1,food:20},bread:{name:"Bread heel",rarity:"common",desc:"Hard as a brick.",effect:"Use: eat. +15 food.",dur:1,value:0,food:15},lighter:{name:"Lighter",rarity:"common",desc:"For the smokes.",effect:"Lets him smoke.",dur:12,value:1},umbrella:{name:"Broken umbrella",rarity:"common",desc:"One spoke short.",effect:"Hands: his paper stays dry in rain.",dur:5,value:1,slot:"hands"},beanie:{name:"Beanie",rarity:"common",desc:"Smells like someone.",effect:"Head: cold hurts half as much.",dur:10,value:1,slot:"head"},tarp:{name:"Tarp",rarity:"good",desc:"Blue. Always blue.",effect:"Craft: tent, bedroll.",dur:9,value:2},wheel:{name:"Old wheel",rarity:"good",desc:"From a skateboard that lost.",effect:"Craft: skateboard.",dur:9,value:1},gloves:{name:"Fingerless gloves",rarity:"good",desc:"Warm hands, free fingers.",effect:"Hands: cold hurts less.",dur:10,value:2,slot:"hands"},poncho:{name:"Poncho",rarity:"good",desc:"Plastic. Crinkly. Dry.",effect:"Body: rain does not soak him or his paper.",dur:8,value:2,slot:"body"},blanket:{name:"Blanket",rarity:"good",desc:"Warm, but heavy.",effect:"Sleep heals +12. Heavy: a bit slower.",dur:10,value:2},backpack:{name:"Backpack",rarity:"good",desc:"One strap works.",effect:"Carry: holds 8.",dur:20,value:4,slot:"carry",cap:8},shades:{name:"Sunglasses",rarity:"good",desc:"Cool. Hidden. Both.",effect:"Head: the cop notices him less.",dur:15,value:3,slot:"head"},book_joke:{name:"Joke book",rarity:"good",desc:"Dad jokes, 1987.",effect:'Read: unlocks "Tell a joke" forever.',dur:6,value:1,paper:!0,book:"joke"},book_cook:{name:"Cookbook",rarity:"good",desc:'"Cooking on a Budget". Very budget.',effect:"Read: dumpster recipes, trash food +50%.",dur:6,value:1,paper:!0,book:"cook"},book_poetry:{name:"Poetry book",rarity:"good",desc:"Water-stained. Still sings.",effect:'Read: unlocks "Recite" (busk for coins).',dur:6,value:1,paper:!0,book:"poetry"},trolley:{name:"Shopping trolley",rarity:"good",desc:"One wheel squeaks. Loudly.",effect:"Carry: holds 16. Slow, and the cop hears it.",dur:25,value:3,slot:"carry",cap:16},radio:{name:"Pocket radio",rarity:"rare",desc:"One station. It is jazz.",effect:"Use: +5 whimsy.",dur:6,value:6},sleepingBag:{name:"Sleeping bag",rarity:"rare",desc:"The zipper half works.",effect:"Sleep heals +15.",dur:15,value:6},goodBlanket:{name:"Good blanket",rarity:"rare",desc:"Thick wool. Not heavy.",effect:"Sleep heals +20.",dur:20,value:5},guitar:{name:"Guitar",rarity:"rare",desc:"Five strings. Enough.",effect:"Hands: busk for coins.",dur:20,value:8,slot:"hands"},boltCutters:{name:"Bolt cutters",rarity:"rare",desc:"Heavy. Honest work, surely.",effect:"Cut a bike lock (easier, louder).",dur:6,value:6},lock:{name:"Bike lock",rarity:"rare",desc:"The key is on a string.",effect:"His parked ride is locked.",dur:30,value:3},book_psych:{name:"Psychology paperback",rarity:"rare",desc:'"Reading People". Dog-eared.',effect:"Read: see who likes which line before he asks.",dur:6,value:2,paper:!0,book:"psych"},book_lockpick:{name:"Lockpicking zine",rarity:"rare",desc:"Photocopied. Illegal-ish.",effect:"Read: steal bikes.",dur:6,value:2,paper:!0,book:"lockpick"},book_dog:{name:"Dog training",rarity:"rare",desc:'"Sit. Stay. Love."',effect:"Read: for a dog, someday (not yet).",dur:6,value:1,paper:!0,book:"dog"},skateboard:{name:"Skateboard",rarity:"rare",desc:"Grip tape, mostly.",effect:"Ride: fast. Wobbly when drunk.",dur:8,value:5,ride:!0},watch:{name:"Wristwatch",rarity:"rare",desc:"Stopped at 4:20.",effect:"Pawn it.",dur:99,value:12},luckyCharm:{name:"Lucky charm",rarity:"legendary",desc:"A rabbit foot. Not his rabbit.",effect:"Better scratch cards. People give a bit more.",dur:99,value:10},ring:{name:"Gold ring",rarity:"legendary",desc:"Someone said no.",effect:"Pawn it for a lot.",dur:99,value:30},scooter:{name:"Scooter",rarity:"legendary",desc:"Fast. Careful.",effect:"Ride: very fast. Wild when drunk.",dur:12,value:15,ride:!0},jacket:{name:"Leather jacket",rarity:"legendary",desc:"Like a movie.",effect:"Body: warm, and party people like him more.",dur:25,value:14,slot:"body"},sign:{name:"Cardboard sign",rarity:"common",desc:"Hand-written.",effect:"Hands: people give more, if the words suit them.",dur:5,value:0,slot:"hands",paper:!0,crafted:!0},tent:{name:"Tent",rarity:"good",desc:"Tarp and two poles. Home.",effect:"Sleep: +15 heal, dry, and no thief.",dur:10,value:4,crafted:!0},stove:{name:"Can stove",rarity:"good",desc:"Can, candle, careful.",effect:"Food he eats is hot.",dur:6,value:1,crafted:!0},cart:{name:"Crate cart",rarity:"good",desc:"A trolley with a crate on it.",effect:"Carry: holds 20. Slow, and the cop hears it.",dur:25,value:4,slot:"carry",cap:20,crafted:!0},necklace:{name:"Bottle-cap necklace",rarity:"good",desc:"Jingly. Heartfelt.",effect:"Use near someone: a gift. They turn friendly.",dur:1,value:1,crafted:!0},rainCover:{name:"Rain cover",rarity:"good",desc:"Umbrella plus a lot of tape.",effect:"Paper stays dry. Rain nights heal more.",dur:8,value:1,crafted:!0},chime:{name:"Wind chime",rarity:"common",desc:"Cans on a string. Music.",effect:"Use: +4 whimsy.",dur:5,value:1,crafted:!0},hotStew:{name:"Bin stew",rarity:"good",desc:"Do not ask.",effect:"Use: eat. +45 food, hot.",dur:1,value:0,food:45,hot:!0,crafted:!0},bedroll:{name:"Bedroll",rarity:"good",desc:"Blanket rolled in a tarp.",effect:"Sleep heals +18, and dry.",dur:15,value:3,crafted:!0},bike:{name:"Bike",rarity:"rare",desc:"Not his. Now his.",effect:"Ride: fastest. Very wobbly drunk.",dur:15,value:10,ride:!0,crafted:!0}},De=qm,F1=Object.keys(qm),O1=F1.filter(n=>!De[n].crafted),Qs={joke:"book_joke",cook:"book_cook",psych:"book_psych",lockpick:"book_lockpick",poetry:"book_poetry",dog:"book_dog"};function lu(){return{bag:[],gear:{},books:[],known:[],ride:null,riding:!1,parked:null,locked:!1,ground:[],combos:[],gift:!1,rideT:0,fell:!1}}const Vn={emit:(n,e)=>{}};function un(n){const[e,t]=rd(n.rng);return n.rng=t,e}const ct=(n,e)=>n.messages.push(e),uc=n=>Math.max(0,Math.min(100,n)),ao=n=>n.own.gear.carry?De[n.own.gear.carry.id].cap??4:4,B1=(n,e)=>Hn.some(t=>{var i;return((i=n.own.gear[t])==null?void 0:i.id)===e}),zt=(n,e)=>B1(n,e)||n.own.bag.some(t=>t.id===e),$n=(n,e)=>n.own.books.includes(e),Zi=(n,e)=>n.own.combos.includes(e),Ym=[{id:"coolBusker",name:"Cool busker",need:["shades","guitar"],text:"busking pays double"},{id:"rightSign",name:"The right sign",need:["sign","book:psych"],text:"his sign suits every street"},{id:"snugCamp",name:"Snug camp",need:["tent","sleepingBag|bedroll"],text:"sleep heals +15 more, even cold nights"},{id:"troubadour",name:"Troubadour",need:["guitar","book:poetry"],text:"reciting pays $2 more"},{id:"streetLegend",name:"Street legend",need:["skateboard","shades"],text:"half the drunk wobble on the board"},{id:"chef",name:"Chef",need:["stove","book:cook"],text:"hot food fills 50% more"},{id:"scrapper",name:"Scrapper",need:["trolley|cart","boltCutters"],text:"recycling pays +$1 a bottle"},{id:"ghostHands",name:"Ghost hands",need:["luckyCharm","book:lockpick"],text:"nobody sees him take a bike"},{id:"warmNight",name:"Warm night",need:["blanket","dog"],text:"a dog keeps him warm (placeholder: no dogs yet)"}];function z1(n,e){return e==="dog"?!1:e.startsWith("book:")?$n(n,e.slice(5)):e.split("|").some(t=>{var i;return zt(n,t)||((i=n.own.ride)==null?void 0:i.id)===t})}function Mn(n){var t,i,s;const e=n.own;n.items.blanket=zt(n,"blanket"),n.items.goodBlanket=zt(n,"goodBlanket"),n.items.sign=((t=e.gear.hands)==null?void 0:t.id)==="sign",n.items.shades=((i=e.gear.head)==null?void 0:i.id)==="shades",n.items.lighter=zt(n,"lighter"),n.items.jokebook=$n(n,"joke"),n.items.scooter=e.riding&&((s=e.ride)==null?void 0:s.id)==="scooter";for(const r of Ym){const o=r.need.every(c=>z1(n,c)),a=e.combos.includes(r.id);o&&!a?(e.combos.push(r.id),ct(n,`Combo! ${r.name}: ${r.text}.`),Vn.emit(n,"combo")):!o&&a&&e.combos.splice(e.combos.indexOf(r.id),1)}}const H1={joke:'A joke book! New line: "Tell a joke".',cook:"The cookbook. He can make bin stew now, and trash food goes further.",psych:"Reading People. Now he can see who likes which line.",lockpick:"The lockpicking zine. Bikes look different now.",poetry:'Poetry. New act: "Recite" for coins.',dog:"Dog training. He has no dog. Yet."};function Km(n,e){return $n(n,e)?!1:(n.own.books.push(e),ct(n,H1[e]),Vn.emit(n,"read"),!0)}const hu=[{text:"GOD BLESS",suits:["oldlady","rich"]},{text:"WHY LIE? NEED BEER",suits:["party","tourist"]},{text:"ANYTHING HELPS",suits:["office","tourist","oldlady"]},{text:"SMILE, IT'S FREE",suits:["jogger","party"]},{text:"WILL WORK FOR SOUP",suits:["office","rich","jogger"]}];function Bt(n,e,t=0,i=0,s={},r=!1){const o=De[e],a={id:e,dur:o.dur,...s},c=n.own;return o.book&&Km(n,o.book),o.ride&&!c.ride?(c.ride=a,c.riding=!0,c.parked=null,r||ct(n,`${o.name}! He hops on.`)):o.slot&&!c.gear[o.slot]?(c.gear[o.slot]=a,!r&&!o.book&&ct(n,`${o.name}. He puts it on.`)):!o.ride&&c.bag.length<ao(n)?(c.bag.push(a),!r&&!o.book&&ct(n,`${o.name}. In the bag.`)):(c.ground.push({...a,x:t,z:i}),ct(n,`No room. He leaves the ${o.name.toLowerCase()} on the ground.`)),Mn(n),a}function Zm(n,e){var r;const t=n.own,i=t.bag.findIndex(o=>o.id===e);let s=null;if(i>=0)s=t.bag.splice(i,1)[0];else for(const o of Hn)if(((r=t.gear[o])==null?void 0:r.id)===e){s=t.gear[o],delete t.gear[o];break}return Mn(n),s}function Ri(n,e,t=1){if(e.dur-=t,e.dur>0)return;const i=n.own,s=i.bag.indexOf(e);s>=0&&i.bag.splice(s,1);for(const r of Hn)i.gear[r]===e&&delete i.gear[r];i.ride===e&&(i.ride=null,i.riding=!1,i.parked=null),ct(n,`His ${De[e.id].name.toLowerCase()} ${De[e.id].paper?"fell apart":"broke"}.`),Mn(n)}const hd=(n,e)=>n.own.bag.find(t=>t.id===e)??Hn.map(t=>n.own.gear[t]).find(t=>(t==null?void 0:t.id)===e);function G1(n,e){const t=n.own,i=t.bag[e],s=i&&De[i.id].slot;if(!i||!s)return!1;t.bag.splice(e,1);const r=t.gear[s];if(t.gear[s]=i,r)if(t.bag.length<ao(n))t.bag.push(r);else return t.gear[s]=r,t.bag.splice(e,0,i),ct(n,"No room for the old one."),!1;return ct(n,`${De[i.id].name}: on.`),Mn(n),!0}function V1(n,e){const t=n.own,i=t.gear[e];if(!i)return!1;const s=e==="carry"?4:ao(n);return t.bag.length+1>s?(ct(n,"His pockets can't hold all that."),!1):(delete t.gear[e],t.bag.push(i),Mn(n),!0)}function W1(n,e,t,i){const s=n.own;let r;if(typeof e=="number")r=s.bag.splice(e,1)[0];else{if(r=s.gear[e],r&&e==="carry"&&s.bag.length>4)return ct(n,"He can't drop the bag with all that in it."),!1;delete s.gear[e]}return r?(s.ground.push({...r,x:t,z:i}),ct(n,`Dropped the ${De[r.id].name.toLowerCase()}.`),Mn(n),!0):!1}function X1(n,e,t,i=1.8){return n.own.ground.findIndex(s=>Math.hypot(s.x-e,s.z-t)<=i)}function $1(n,e){const t=n.own.ground[e];if(!t)return!1;const i=De[t.id];if(!(i.ride&&!n.own.ride||i.slot&&!n.own.gear[i.slot]||!i.ride&&n.own.bag.length<ao(n)))return ct(n,i.ride?"He already has a ride.":"No room in the bag."),!1;n.own.ground.splice(e,1);const{x:r,z:o,...a}=t;return Bt(n,t.id,t.x,t.z,a),Vn.emit(n,"find"),!0}function Jm(n,e,t){const i=t&&Zi(n,"chef")?Math.round(e*1.5):e;return n.hunger=uc(n.hunger+i),Vn.emit(n,"eat"),t&&Vn.emit(n,"eat:hot"),i}function Qm(n,e,t=!1){const i=n.own,s=i.bag[e];if(!s||n.dead)return!1;const r=De[s.id];if(r.book)return Km(n,r.book)||ct(n,"He knows this one by heart."),!0;if(r.food){const o=hd(n,"stove"),a=!!r.hot||!!o;i.bag.splice(e,1);const c=Jm(n,r.food,a);return o&&!r.hot&&Ri(n,o),ct(n,`${r.name}${a?", hot":""}. +${c} food`),Mn(n),!0}if(r.slot)return G1(n,e);switch(s.id){case"newspaper":return i.bag.splice(e,1),n.whimsy=uc(n.whimsy+2),ct(n,"The news. Somehow worse than his day. +2 whimsy"),Mn(n),!0;case"radio":return n.whimsy=uc(n.whimsy+5),ct(n,"Jazz. Of course. +5 whimsy"),Ri(n,s),!0;case"chime":return n.whimsy=uc(n.whimsy+4),ct(n,"Clink, clonk. Music. +4 whimsy"),Ri(n,s),!0;case"tape":{const o=[...i.bag,...Hn.map(c=>i.gear[c]).filter(c=>!!c),...i.ride?[i.ride]:[]].filter(c=>c!==s);if(!o.length)return ct(n,"Nothing to tape."),!1;const a=o.reduce((c,l)=>c.dur/De[c.id].dur<=l.dur/De[l.id].dur?c:l);return a.dur=Math.min(De[a.id].dur,a.dur+3),ct(n,`Taped up the ${De[a.id].name.toLowerCase()}.`),Ri(n,s),!0}case"necklace":return t?(i.bag.splice(e,1),i.gift=!0,ct(n,"He gives the necklace. They look at him differently now."),Mn(n),!0):(ct(n,"A gift needs someone to give it to."),!1)}return ct(n,`He turns the ${r.name.toLowerCase()} over in his hands. Not now.`),!1}function j1(n,e,t){if(!$n(n,"psych"))return null;const i=ua[e];return i.likes.includes(t)?"likes":i.hates.includes(t)?"hates":"meh"}function q1(n,e){var i,s;if(!n.items.sign)return!1;const t=(i=n.own.gear.hands)==null?void 0:i.text;return!t||Zi(n,"rightSign")?!0:((s=hu.find(r=>r.text===t))==null?void 0:s.suits.includes(e))??!0}function Y1(n){var t,i,s;let e=1;return((t=n.own.gear.head)==null?void 0:t.id)==="beanie"&&(e*=.5),((i=n.own.gear.hands)==null?void 0:i.id)==="gloves"&&(e*=.75),((s=n.own.gear.body)==null?void 0:s.id)==="jacket"&&(e*=.6),e}const K1=n=>{var e,t;return((e=n.own.gear.hands)==null?void 0:e.id)==="umbrella"||((t=n.own.gear.body)==null?void 0:t.id)==="poncho"||zt(n,"rainCover")||zt(n,"tent")},Z1=[["common",.62],["good",.26],["rare",.1],["legendary",.02]];function dp(n,e,t,i=!1){const s=il(tr(`${n}#loot${e}#${t}`)),r=s(),o=i?.75:.42;if(r>=o){const u=(r-o)/(1-o);return u<.35?"coins":u<.6?"bottle":"nothing"}const a=i?.15+s()*.85:s();let c="legendary",l=0;for(const[u,d]of Z1)if(l+=d,a<l){c=u;break}const h=O1.filter(u=>De[u].rarity===c);return h[Math.floor(s()*h.length)]}function fp(n,e,t,i){if(e==="coins"){n.money+=1,ct(n,"A sticky dollar. Still money.");return}if(e==="bottle"){n.bottles++,ct(n,"A bottle.");return}if(e==="nothing"){ct(n,"Just trash. Classy trash, though.");return}const s=De[e];if(s.food&&$n(n,"cook")){const r=Jm(n,Math.round(s.food*1.5),!1);ct(n,`${s.name}, cooked up right. +${r} food`);return}s.book&&$n(n,s.book)?ct(n,`Another ${s.name.toLowerCase()}. He knows it already.`):s.book||ct(n,`Found: ${s.name} (${s.rarity}).`),Bt(n,e,t,i,{},!0)}function J1(n){const e=n.own;for(const t of Hn){const i=e.gear[t];i&&Ri(n,i)}if(e.ride&&e.rideT>0&&Ri(n,e.ride),e.rideT=0,n.draw.weather==="rain"&&!K1(n)){const t=[...e.bag,...Hn.map(i=>e.gear[i])].filter(i=>!!i&&!!De[i.id].paper);t.length&&ct(n,"Rain. His paper things got soaked.");for(const i of t)i.wet=!0,Ri(n,i,2)}}function Q1(n,e){const t=n.own;if(zt(n,"tent"))return;const i=e==="street"?.6:e==="bridge"||e==="underpass"?.25:.35;if(t.bag.length&&un(n)<i){const s=t.bag.splice(Math.floor(un(n)*t.bag.length),1)[0];ct(n,`Someone went through his bag in the night. The ${De[s.id].name.toLowerCase()} is gone.`)}t.ride&&!t.riding&&!t.locked&&un(n)<.5&&(ct(n,`His ${De[t.ride.id].name.toLowerCase()} is gone. He should have locked it.`),t.ride=null,t.parked=null),Mn(n)}function eS(n){const e=n.items,t=[[e.blanket,"blanket"],[e.goodBlanket,"goodBlanket"],[e.sign,"sign"],[e.shades,"shades"],[e.lighter,"lighter"],[e.jokebook,"book_joke"],[e.scooter,"scooter"]];for(const[i,s]of t)i&&Bt(n,s,0,0,{},!0);n.messages=[]}const e0={skateboard:{speed:1.6,sober:.08,drunk:2.6,drunkSpeed:1,fall:.035,fallHurt:6},scooter:{speed:1.7,sober:0,drunk:2,drunkSpeed:1,fall:.01,fallHurt:8},bike:{speed:2.1,sober:0,drunk:1.6,drunkSpeed:1.25,fall:.015,fallHurt:12}},ud=n=>n.own.riding&&n.own.ride?n.own.ride.id:null;function tS(n,e,t,i){var o;const s=ud(n);if(s){const a=e0[s];e*=a.speed,i?(e*=a.drunkSpeed,t=t*a.drunk+.3,s==="skateboard"&&Zi(n,"streetLegend")&&(t*=.5)):t+=a.sober}const r=(o=n.own.gear.carry)==null?void 0:o.id;return r==="trolley"&&(e*=.8),r==="cart"&&(e*=.85),{speed:e,wobble:t}}const nS=n=>{var e,t;return((e=n.own.gear.carry)==null?void 0:e.id)==="trolley"||((t=n.own.gear.carry)==null?void 0:t.id)==="cart"};function t0(n,e,t){const i=n.own;return!i.ride||!i.riding?!1:(i.riding=!1,i.parked={x:e,z:t},i.locked=zt(n,"lock"),n.messages.push(i.locked?"Parked and locked.":"Parked. No lock. Hmm."),Mn(n),!0)}function iS(n,e,t){const i=n.own;return!i.ride||i.riding||!i.parked||Math.hypot(i.parked.x-e,i.parked.z-t)>2.2?!1:(i.riding=!0,i.parked=null,Mn(n),!0)}function sS(n,e,t,i,s){var a;const r=n.own,o=ud(n);if(o){r.rideT+=e;const c=e0[o];s&&un(n)<c.fall*e&&(n.health=Math.max(0,n.health-c.fallHurt),r.fell=!0,n.messages.push(o==="bike"?"He and the bike part ways. Hard.":"He ate the pavement."),t0(n,t,i),r.ride&&Ri(n,r.ride)),o==="bike"&&((a=r.ride)!=null&&a.area)&&r.ride.area===Sn(t,i)&&!n.usedToday.includes("owner")&&un(n)<.02*e&&(n.usedToday.push("owner"),n.copAlert=!0,n.messages.push(`"HEY! That's MY bike!" Someone is calling the cop.`))}else r.ride&&r.parked&&!r.locked&&Math.hypot(r.parked.x-t,r.parked.z-i)>12&&un(n)<.006*e&&(n.messages.push(`Someone rode off on his ${De[r.ride.id].name.toLowerCase()}. He should lock it.`),r.ride=null,r.parked=null,Mn(n))}const dd=[{x:-4,z:7.4},{x:52,z:-5},{x:-78,z:7.4},{x:88,z:7.4}];function n0(n,e){return n.usedToday.includes("bike"+e)?!1:il(tr(`${n.seed}#rack${n.day}#${e}`))()<.7}const rS=n=>$n(n,"lockpick")||zt(n,"boltCutters"),i0=n=>$n(n,"lockpick")?.55:.4;function s0(n,e,t){n.usedToday.push("bike"+e);const i=!$n(n,"lockpick");if(i){const a=hd(n,"boltCutters");a&&Ri(n,a)}const s=t>=i0(n);let r=.18+.02*n.day+(s?0:.25)+(i?.1:0);Zi(n,"ghostHands")&&(r=0);const o=dd[e];return un(n)<r?un(n)<.5?(n.copAlert=!0,s&&Bt(n,"bike",o.x,o.z,{area:Sn(o.x,o.z)},!0),n.messages.push(s?"Got the bike, but the cop saw!":"The cop saw him fiddling with the lock!"),"cop"):(n.whimsy=Math.max(0,n.whimsy-3),n.messages.push('"HEY! Get off my bike!" The owner. He walks away fast.'),"owner"):s?(Bt(n,"bike",o.x,o.z,{area:Sn(o.x,o.z)},!0),n.messages.push("Click. A bike. Nobody saw."),"got"):(n.messages.push("The lock wins. Nobody saw."),"fumbled")}const Wr={pawn:{x:42.5,z:8.6,r:2.8,label:"Pawn shop"},books:{x:-36,z:7,r:2.6,label:"Used books"},library:{x:-66,z:-16,r:2,label:"Little library"}},Yl=(n,e)=>Math.hypot(n.x-Wr[e].x,n.z-Wr[e].z)<=Wr[e].r,pp=(n,e)=>n.usedToday.filter(t=>t===e).length,Wn=(n,e)=>n.messages.push(e),mp=n=>Math.max(0,Math.min(100,n)),r0=[{id:"backpack",price:6},{id:"sleepingBag",price:8},{id:"guitar",price:12},{id:"boltCutters",price:9},{id:"lock",price:4},{id:"scooter",price:20},{id:"luckyCharm",price:15}],fd=[{book:"joke",price:3},{book:"cook",price:3},{book:"poetry",price:3},{book:"psych",price:5},{book:"lockpick",price:5},{book:"dog",price:4}],gp=3;function oS(n,e){var o;const t=[],i=(a,c)=>t.push({id:`own:${a}`,label:c,whimsy:!1}),s=X1(n,e.x,e.z);s>=0&&i(`grab:${s}`,"Grab "+De[n.own.ground[s].id].name.toLowerCase());const r=n.own;return r.riding?i("getoff","Get off"):r.ride&&r.parked&&Math.hypot(r.parked.x-e.x,r.parked.z-e.z)<=2.2&&i("mount","Ride"),ea.some(a=>Math.hypot(a.x-e.x,a.z-e.z)<=Gm)&&i("craft","Craft"),Yl(e,"pawn")&&i("pawn","Pawn shop"),Yl(e,"books")&&i("books","Book cart"),Yl(e,"library")&&!n.usedToday.includes("library")&&i("library","Little library"),rS(n)&&!ud(n)&&dd.forEach((a,c)=>{Math.hypot(a.x-e.x,a.z-e.z)<=1.8&&n0(n,c)&&i(`steal:${c}`,"Steal bike")}),((o=r.gear.hands)==null?void 0:o.id)==="guitar"&&pp(n,"busk")<gp&&!r.riding&&i("busk","Busk"),$n(n,"poetry")&&pp(n,"recite")<gp&&!r.riding&&i("recite","Recite"),t}function aS(n,e,t){const i=n.own;if(e.startsWith("grab:"))return $1(n,Number(e.slice(5)));if(e.startsWith("steal:")||e==="craft"||e==="pawn"||e==="books")return!0;switch(e){case"getoff":return t0(n,t.x,t.z);case"mount":return iS(n,t.x,t.z);case"library":{n.usedToday.push("library");const s=Object.keys(Qs).filter(r=>!$n(n,r));return s.length&&un(n)<.6?Bt(n,Qs[s[Math.floor(un(n)*s.length)]],t.x,t.z):(Wn(n,"Only a romance novel. He takes a newspaper instead."),Bt(n,"newspaper",t.x,t.z,{},!0)),Vn.emit(n,"library"),!0}case"busk":{n.usedToday.push("busk");let s=1+Math.floor(un(n)*3);return Zi(n,"coolBusker")&&(s*=2),n.money+=s,n.whimsy=mp(n.whimsy+3),Wn(n,`He plays. ${Zi(n,"coolBusker")?"Too cool. ":""}+$${s}`),i.gear.hands&&cS(n,i.gear.hands),Vn.emit(n,"busk"),!0}case"recite":{n.usedToday.push("recite");const s=Math.floor(un(n)*3)+(Zi(n,"troubadour")?2:0);return n.money+=s,n.whimsy=mp(n.whimsy+3),Wn(n,s?`He recites a poem about pigeons. +$${s}`:"He recites. Nobody pays. The pigeons clap, in spirit."),Vn.emit(n,"recite"),!0}}return!1}function cS(n,e){un(n)<.3&&(e.dur-=1,e.dur<=0&&(Zm(n,e.id),Wn(n,`His ${De[e.id].name.toLowerCase()} broke.`)))}function lS(n,e,t,i,s){n.dead||sS(n,e,t,i,s)}function o0(n,e){const t=n.own.bag[e];if(!t)return!1;const i=De[t.id],s=Math.max(0,Math.round(i.value*(t.wet?.5:1)*Math.max(.4,t.dur/i.dur)));return s<=0?(Wn(n,`"I don't take trash, pal."`),!1):(n.own.bag.splice(e,1),n.money+=s,Wn(n,`Sold the ${i.name.toLowerCase()}. +$${s}`),Mn(n),Vn.emit(n,"pawn"),!0)}function hS(n,e,t=0,i=0){const s=r0[e];return s?n.money<s.price?(Wn(n,"Not enough money."),!1):De[s.id].ride&&n.own.ride?(Wn(n,"He already has a ride."),!1):(n.money-=s.price,Bt(n,s.id,t,i),Vn.emit(n,"buy"),!0):!1}function uS(n,e,t=0,i=0){const s=fd[e];return s?$n(n,s.book)&&zt(n,Qs[s.book])?(Wn(n,"He has that one."),!1):n.money<s.price?(Wn(n,"Not enough money."),!1):(n.money-=s.price,Bt(n,Qs[s.book],t,i),Vn.emit(n,"buy"),!0):!1}function dS(n,e,t=0,i=0){const s=fd[e];return!s||n.usedToday.includes("bookSteal")?(Wn(n,"The cart man is watching him now."),!1):(n.usedToday.push("bookSteal"),Bt(n,Qs[s.book],t,i),un(n)<.5?(n.copAlert=!0,Wn(n,'"THIEF! Book thief!" Who steals a book?')):Wn(n,"Slipped it in his coat. Literature is free."),!0)}function pd(){const n=["CAT","RAIN","BENCH","SODA","MOON","BREAD","COIN","DOG","TRAM","SNOW"];return n[Math.floor(Math.random()*n.length)]+Math.floor(Math.random()*900+100)}const Mt={dayLength:180,nightAt:.72,sleepFrom:.6,withdrawalRate:.9,withdrawalDayGrowth:.3,withdrawalHurt:1.5,buzzDecay:.5,whimsyDrain:.3,whimsyDayGrowth:.1,whimsyBase:18,coldHurt:.08,highAt:5,carDamage:25,hungerStart:70,hungerRate:.35,hungerLow:20,hungerHurt:.25,sitDrain:.25,sitHeal:.2,sitGoal:8},Or={beer:{name:"Beer",price:3,buzz:35,wobble:.7,slow:.7},vodka:{name:"Vodka",price:5,buzz:60,wobble:1.6,slow:1.1},wine:{name:"Wine",price:4,buzz:45,wobble:.45,slow:.5},mix:{name:"Mix",price:0,buzz:50,wobble:.15,slow:.4}};function a0(n,e){const t=il(tr(n+"#day"+e)),i=t(),s=i<.5?"mild":i<.8?"cold":"rain",r=.2+t()*.8,o=ad.map((h,u)=>u);for(let h=o.length-1;h>0;h--){const u=Math.floor(t()*(h+1));[o[h],o[u]]=[o[u],o[h]]}const a=8+Math.floor(t()*6),c=["coins","bread","bottle","beer","nothing","blanket","scooter","jokebook"],l=c[Math.floor(t()*c.length)];return{weather:s,generosity:r,bottleSpots:o.slice(0,a),dumpsterFind:l}}const rl={spray:{name:"Spray a passer-by",where:"sprinkler"},cat:{name:"Pet the cat",where:null},dance:{name:"Dance on the corner",where:"corner"},snack:{name:"Steal a snack",where:"bakery"},bench:{name:"Sing on the bench",where:"bench"}},c0=Object.keys(rl),fS={car:"A car hit him.",body:"His body gave out.",gaveup:"He gave up.",jail:"The cop caught him. Jail."};function md(n,e=null){const t=a0(n,1);return{seed:n,day:1,time:0,draw:t,rng:tr(n+"#rng1"),health:100,withdrawal:30,buzz:0,whimsy:60,bestWhimsy:60,money:1,bottles:0,drinks:{beer:0,vodka:0,wine:0,mix:0},items:{blanket:!1,scooter:!1,goodBlanket:!1,sign:!1,shades:!1,lighter:!1,jokebook:!1},effect:null,bottlesLeft:t.bottleSpots.map(()=>!0),dumpsterUsed:!1,begTimer:0,whimsyToday:{},discovered:[],copAlert:!1,dead:null,messages:[],stash:e,hunger:Mt.hungerStart,inv:{cigs:0,treats:0},sitting:!1,sitT:0,usedToday:[],areasToday:[],goals:ld(n,1),gives:0,own:lu()}}function pS(n){const e=md(n.seed,n.stash);return n.drinks={...e.drinks,...n.drinks??{}},n.items={...e.items,...n.items??{}},n.inv={...e.inv,...n.inv??{}},typeof n.hunger!="number"&&(n.hunger=e.hunger),typeof n.sitT!="number"&&(n.sitT=0),typeof n.sitting!="boolean"&&(n.sitting=!1),Array.isArray(n.usedToday)||(n.usedToday=[]),Array.isArray(n.areasToday)||(n.areasToday=[]),Array.isArray(n.goals)||(n.goals=ld(n.seed,n.day)),typeof n.gives!="number"&&(n.gives=0),n.own?n.own={...lu(),...n.own}:(n.own=lu(),eS(n)),n.bottlesLeft.length!==n.draw.bottleSpots.length&&(n.bottlesLeft=n.draw.bottleSpots.map(()=>!0)),n}function l0(n){const[e,t]=rd(n.rng);return n.rng=t,e}const St=(n,e=0,t=100)=>Math.max(e,Math.min(t,n)),Ii=n=>n.buzz>=Mt.highAt,ol=n=>n.time>=Mt.nightAt*Mt.dayLength,nr=n=>n.time/Mt.dayLength;function lt(n,e){n.messages.push(e)}function ta(n,e){n.dead||(n.dead=e)}function Ht(n,e,t=1){for(const i of n.goals){if(i.done)continue;const s=cd[i.id];!s||s.ev!==e||(i.got+=t,i.got>=s.n&&(i.done=!0,s.whimsy&&(n.whimsy=St(n.whimsy+s.whimsy)),s.money&&(n.money+=s.money),n.bestWhimsy=Math.max(n.bestWhimsy,n.whimsy),lt(n,`Goal done: ${s.text}! ${s.whimsy?"+"+s.whimsy+" whimsy":"+$"+s.money}`)))}}function mS(n,e,t){const i=Sn(e,t);return n.areasToday.includes(i)?null:(n.areasToday.push(i),Ht(n,"area"),ha[i].name)}const Rn=(n,e)=>{const t=Pe[e];return Math.hypot(n.x-t.x,n.z-t.z)<=t.r},gd=(n,e,t)=>e.findIndex(i=>Math.hypot(n.x-i.x,n.z-i.z)<=t),uu=n=>gd(n,ea,Gm)>=0,h0=n=>gd(n,cu,b1)>=0,u0=n=>Object.keys(cp).find(e=>Rn(n,cp[e]))??null;function d0(n,e){for(let t=0;t<n.draw.bottleSpots.length;t++){if(!n.bottlesLeft[t])continue;const i=ad[n.draw.bottleSpots[t]];if(Math.hypot(e.x-i.x,e.z-i.z)<=1.6)return t}return-1}const qa=(n,e)=>n.usedToday.includes(e);function f0(n){return Rn(n,"bridge")?"bridge":Rn(n,"underpass")?"underpass":Rn(n,"alley")?"alley":uu(n)?"bench":null}function p0(n,e){const t=[];if(n.dead)return t;const i=Ii(n),s=(h,u)=>t.push({id:h,label:u,whimsy:!1});if(n.sitting&&s("stand","Get up"),i)for(const h of c0){const u=rl[h];let d=!1;h==="cat"?d=!!e.catNear:h==="spray"?d=Rn(e,"sprinkler")&&!!e.pedNear:h==="bench"?d=uu(e):u.where&&(d=Rn(e,u.where)),d&&t.push({id:`whimsy:${h}`,label:u.name,whimsy:!0})}e.ped&&e.ped.asks<=2&&s("beg",`Ask the ${ua[e.ped.kind].name.toLowerCase()}`),d0(n,e)>=0&&s("pickup","Pick up bottle");const r=u0(e);r&&s(`enter:${r}`,"Go in"),S1.some(h=>Rn(e,h))&&n.bottles>0&&s("recycle",`Recycle ${n.bottles} for $${n.bottles}`),Rn(e,"dumpster")&&!n.dumpsterUsed&&s("dumpster","Dig in dumpster");const o=gd(e,Vm,M1);o>=0&&!qa(n,"trash"+o)&&s(`trash:${o}`,"Dig in the trash"),Rn(e,"bakeryBin")&&!qa(n,"bakeryBin")&&s("bakeryBin","Check the bakery bin"),n.drinks.beer>0&&n.drinks.vodka>0&&s("mix","Mix beer + vodka"),f0(e)&&nr(n)>=Mt.sleepFrom&&s("sleep","Sleep"),uu(e)&&!n.sitting&&s("sit","Sit");for(const h of sl)Rn(e,h)&&!qa(n,h)&&s("pigeons","Feed pigeons");for(const h of od)Rn(e,h)&&!qa(n,h)&&s("tv","Watch TV");if(Rn(e,"stash"))if(n.stash)s("stashTake",`Take ${n.stash} from stash`);else{const h=m0(n);h&&s("stashPut",`Hide ${h} for the next man`)}n.inv.cigs>0&&n.items.lighter&&s("smoke","Smoke");const c=oS(n,e),l=h=>/^own:(grab|steal|getoff)/.test(h.id);return t.unshift(...c.filter(l)),t.push(...c.filter(h=>!l(h))),t}function m0(n){return n.drinks.vodka>0?"vodka":n.drinks.beer>0?"beer":n.items.blanket?"blanket":n.money>=3?"$3":null}function gS(n,e){const t=n.whimsyToday[e]??0,i=n.effect==="mix"?2:1;return Math.round(Mt.whimsyBase*Math.pow(.5,t)*i)}function $o(n,e,t=!1){n.hunger=St(n.hunger+e),Ht(n,"eat"),t&&Ht(n,"eat:hot")}function _S(n){Bt(n,"book_joke",0,0,{},!0)}function xS(n,e,t){if(n.dead||!p0(n,t).some(i=>i.id===e))return!1;if(e.startsWith("whimsy:")){const i=e.slice(7),s=gS(n,i);return n.whimsy=St(n.whimsy+s),n.bestWhimsy=Math.max(n.bestWhimsy,n.whimsy),n.whimsyToday[i]=(n.whimsyToday[i]??0)+1,n.discovered.includes(i)||n.discovered.push(i),i==="snack"&&(n.health=St(n.health+8),$o(n,15),n.copAlert=!0),lt(n,`${rl[i].name}. +${s} whimsy`),Ht(n,"whimsy"),!0}if(e.startsWith("trash:")){const i=Number(e.slice(6));return n.usedToday.push("trash"+i),fp(n,dp(n.seed,n.day,"trash"+i),t.x,t.z),Ht(n,"trash"),!0}if(e.startsWith("enter:"))return!0;if(e.startsWith("own:"))return aS(n,e.slice(4),t);switch(e){case"beg":return!0;case"pickup":{const i=d0(n,t);return n.bottlesLeft[i]=!1,n.bottles++,lt(n,"Got a bottle."),!0}case"recycle":{const i=n.bottles,s=i*(Zi(n,"scrapper")?2:1);return n.money+=s,lt(n,`Recycled. +$${s}`),n.bottles=0,Ht(n,"recycle",i),!0}case"dumpster":{n.dumpsterUsed=!0;const i=n.draw.dumpsterFind;return i==="coins"?(n.money+=2,lt(n,"Found $2.")):i==="bread"?(n.health=St(n.health+15),$o(n,25),lt(n,"Old bread. +15 health, +25 food")):i==="bottle"?(n.bottles++,lt(n,"Found a bottle.")):i==="beer"?(n.drinks.beer++,lt(n,"Half a beer. Nice.")):i==="blanket"?Bt(n,"blanket",t.x,t.z):i==="scooter"?Bt(n,"scooter",t.x,t.z):i==="jokebook"&&!n.items.jokebook?_S(n):lt(n,"Nothing."),fp(n,dp(n.seed,n.day,"dumpster",!0),t.x,t.z),!0}case"bakeryBin":return n.usedToday.push("bakeryBin"),$o(n,25),lt(n,"Yesterday's bread. Still soft. +25 food"),!0;case"buyBeer":case"buyVodka":return g0(n,"liquor",e==="buyBeer"?"beer":"vodka");case"mix":return n.drinks.beer--,n.drinks.vodka--,n.drinks.mix++,lt(n,"Mixed them. Smells like trouble."),!0;case"sleep":return Dc(n,f0(t)??"bench"),!0;case"sit":return n.sitting=!0,n.sitT=0,!0;case"stand":return n.sitting=!1,!0;case"pigeons":{const i=sl.find(s=>Rn(t,s));return n.usedToday.push(i),n.whimsy=St(n.whimsy+5),lt(n,"He shares his crumbs. The pigeons approve. +5 whimsy"),Ht(n,"pigeons"),!0}case"tv":{const i=od.find(s=>Rn(t,s));return n.usedToday.push(i),n.whimsy=St(n.whimsy+4),lt(n,"A cooking show through the glass. Beautiful. +4 whimsy"),Ht(n,"tv"),!0}case"smoke":return n.inv.cigs--,n.whimsy=St(n.whimsy+6),n.withdrawal=St(n.withdrawal-8),lt(n,"A slow smoke. The city slows down too."),Ht(n,"smoke"),!0;case"stashPut":{const i=m0(n);return i==="vodka"?n.drinks.vodka--:i==="beer"?n.drinks.beer--:i==="blanket"?Zm(n,"blanket"):n.money-=3,n.stash=i,lt(n,`Hid the ${i}.`),!0}case"stashTake":{const i=n.stash;return i==="vodka"?n.drinks.vodka++:i==="beer"?n.drinks.beer++:i==="blanket"?Bt(n,"blanket",t.x,t.z):n.money+=3,n.stash=null,lt(n,`Took the ${i}. Thanks, old friend.`),!0}}return!1}function al(n,e){const t=["sad","compliment","howdy","honest"];return n.items.jokebook&&t.splice(3,0,"joke"),h0(e)&&t.push("door"),t}function vS(n,e,t){var o;if(n.dead||!e.ped||!al(n,e).includes(t))return null;const i=e.ped.kind,s=ha[Sn(e.x,e.z)].gen(nr(n)),r=D1(i,t,{asks:e.ped.asks,generosity:Math.min(1,n.draw.generosity+(zt(n,"luckyCharm")?.1:0)+(i==="party"&&((o=n.own.gear.body)==null?void 0:o.id)==="jacket"?.2:0)),areaMul:s,sign:q1(n,i),high:Ii(n)},n.own.gift?()=>.001:()=>l0(n));return n.own.gift=!1,t==="door"&&Ht(n,"line:door"),r.outcome==="give"&&(n.gives++,r.money&&(n.money+=r.money),r.food&&$o(n,r.food),Ht(n,"give"),Ht(n,"give:"+i)),r.laughed&&(n.whimsy=St(n.whimsy+4),Ht(n,"laugh:"+i)),r.outcome==="hate"&&(n.whimsy=St(n.whimsy-2)),r.callCop&&(n.copAlert=!0),r}function g0(n,e,t,i={x:0,z:0}){if(n.dead||!$m[e].includes(t))return!1;const s=Xm[t],o={lighter:"lighter",sign:"sign",shades:"shades",goodBlanket:"goodBlanket",jokebook:"jokebook"}[t];if(o&&n.items[o])return lt(n,"He already has one."),!1;if(n.money<s.price)return lt(n,"Not enough money."),!1;if(n.money-=s.price,Ht(n,"buy"),t==="beer"||t==="vodka"||t==="wine")n.drinks[t]++,lt(n,`Bought ${s.name.toLowerCase()}.`);else if(s.food)$o(n,s.food,s.hot),t==="soup"&&(n.health=St(n.health+5)),t==="coffee"&&(n.withdrawal=St(n.withdrawal-10)),lt(n,`${s.name}. +${s.food} food`);else if(t==="cigs")n.inv.cigs+=5,lt(n,"Five smokes.");else if(t==="treats")n.inv.treats++,lt(n,"Dog treats. For someday.");else if(t==="scratch"){const a=N1(l0(n)*(zt(n,"luckyCharm")?.5:1));a?(n.money+=a,Ht(n,"scratch:win"),lt(n,`Scratch card: WIN $${a}!`)):lt(n,"Scratch card: nothing. Next one, surely.")}else o&&(Bt(n,o==="jokebook"?"book_joke":o,i.x,i.z,{},!0),o!=="jokebook"&&lt(n,`Got the ${s.name.toLowerCase()}.`));return!0}function _0(n){return n.drinks.mix>0?"mix":n.drinks.vodka>0?"vodka":n.drinks.wine>0?"wine":n.drinks.beer>0?"beer":null}function yS(n){if(n.dead)return!1;const e=_0(n);return e?(n.drinks[e]--,n.buzz=St(n.buzz+Or[e].buzz),n.withdrawal=St(n.withdrawal-40),e==="mix"&&(n.health=St(n.health-12)),(!n.effect||Or[e].buzz>=Or[n.effect].buzz||e==="mix")&&(n.effect=e),lt(n,`Drank the ${Or[e].name.toLowerCase()}.`),Ht(n,"drink:"+e),n.health<=0&&ta(n,"body"),!0):(lt(n,"Nothing to drink."),!1)}function MS(n){const e=n.buzz/100,t=n.effect?Or[n.effect]:Or.beer;let i=5.5*(1-e*.5*t.slow),s=Ii(n)?e*t.wobble:0;return n.items.blanket&&!n.items.goodBlanket&&(i*=.85),tS(n,i,s,Ii(n))}function Dc(n,e){const t=n.draw.weather==="cold",i=n.draw.weather==="rain";if(n.sitting=!1,e==="street")n.health=St(n.health-20-(t?10:0)),n.money=Math.floor(n.money/2),lt(n,"He passed out on the street. Someone took his money.");else{const s=e==="bridge"||e==="underpass";let r=e==="bridge"?20:e==="underpass"?17:e==="alley"?12:15;t&&(r=s?8:2),i&&!s&&(r=4),n.items.goodBlanket?r+=20:n.items.blanket&&(r+=12),zt(n,"sleepingBag")&&(r+=15),zt(n,"bedroll")&&(r+=18),zt(n,"tent")&&(r+=15),Zi(n,"snugCamp")&&(r+=15),i&&!s&&(zt(n,"tent")||zt(n,"bedroll")||zt(n,"rainCover"))&&(r+=8),n.health=St(n.health+r),lt(n,t?"A cold night.":i&&!s?"A wet night.":e==="bridge"?"He slept under the bridge. The river talked all night.":"He slept."),Ht(n,"sleep:"+e)}if(Q1(n,e),n.withdrawal=St(n.withdrawal+15),n.hunger=St(n.hunger-10),n.health<=0){ta(n,"body");return}bS(n)}function bS(n){n.day++,n.time=0,n.draw=a0(n.seed,n.day),n.rng=tr(n.seed+"#rng"+n.day),n.buzz=0,n.effect=null,n.bottlesLeft=n.draw.bottleSpots.map(()=>!0),n.dumpsterUsed=!1,n.whimsyToday={},n.begTimer=0,n.usedToday=[],n.areasToday=[],n.goals=ld(n.seed,n.day),lt(n,`Day ${n.day}. ${x0(n.draw.weather)}`),J1(n)}function x0(n){return n==="cold"?"Cold today.":n==="rain"?"Rain today.":"Mild today."}function SS(n,e){if(n.dead)return;const t=n.day-1;n.time+=e,n.begTimer=Math.max(0,n.begTimer-e),Ii(n)?n.withdrawal=St(n.withdrawal-1*e):n.withdrawal=St(n.withdrawal+Mt.withdrawalRate*(1+Mt.withdrawalDayGrowth*t)*e),n.buzz=St(n.buzz-Mt.buzzDecay*e),n.buzz<=0&&(n.effect=null);const i=n.sitting?Mt.sitDrain:1;if(n.whimsy=St(n.whimsy-Mt.whimsyDrain*(1+Mt.whimsyDayGrowth*t)*i*e),n.hunger=St(n.hunger-Mt.hungerRate*e),n.hunger<Mt.hungerLow&&(n.health-=Mt.hungerHurt*(n.hunger<=0?2.5:1)*e),n.sitting){n.health+=Mt.sitHeal*e;const s=n.sitT;n.sitT+=e,s<Mt.sitGoal&&n.sitT>=Mt.sitGoal&&Ht(n,"sit")}if(n.withdrawal>=100&&(n.health-=Mt.withdrawalHurt*e),n.draw.weather==="cold"&&(n.health-=Mt.coldHurt*Y1(n)*e),n.health=St(n.health),n.health<=0)return ta(n,"body");if(n.whimsy<=0)return ta(n,"gaveup");n.time>=Mt.dayLength&&Dc(n,"street")}function wS(n){n.dead||(n.sitting=!1,n.health=St(n.health-Mt.carDamage),lt(n,"A car hit him."),n.health<=0&&ta(n,"car"))}function TS(n){const e=n.items.shades?1:0;return{speed:3.6+.3*(n.day-1),sight:(18+3*(n.day-1))*(1-.3*e)*(nS(n)?1.3:1),drunkRange:(4+1.5*(n.day-1))*(1-.4*e),drunkAt:Math.max(40,70-10*(n.day-1))}}Vn.emit=Ht;const zo={halfW:1.6},du=w1,wr={go:9,slow:2,stop:7};function ES(n){const e=wr.go+wr.slow+wr.stop,t=(n%e+e)%e;return t<wr.go?"go":t<wr.go+wr.slow?"slow":"stop"}const Cn={cruiseMin:6,cruiseMax:8.5,brake:12,accel:4,seeAhead:13,laneHalf:1.9,stopGap:2.6,followGap:5.6,hitLen:2.1,hitWide:1.2,honkAhead:11};function AS(n,e,t,i){let s=n.cruise,r=!1;if(e&&Math.abs(e.z-n.z)<Cn.laneHalf){const o=(e.x-n.x)*n.dir;o>0&&o<Cn.seeAhead&&(s=Math.min(s,Math.max(0,(o-Cn.stopGap)*1.2)),o<Cn.honkAhead&&(r=!0))}if(i){const o=(i.x-n.x)*n.dir;o>0&&(s=Math.min(s,Math.max(0,(o-Cn.followGap)*1.5)))}if(t!=="go")for(const o of du){const c=(o-n.dir*(zo.halfW+2.4)-n.x)*n.dir,l=c>=n.speed*n.speed/(2*Cn.brake)-.3;c>=-.2&&c<30&&(t==="stop"||l)&&(s=Math.min(s,Math.max(0,c*1.2)))}return{want:s,honk:r}}function RS(n,e,t){return e<n?Math.max(e,n-Cn.brake*t):Math.min(e,n+Cn.accel*t)}function CS(n,e){return Math.abs(n.x-e.x)<Cn.hitLen&&Math.abs(n.z-e.z)<Cn.hitWide}const fu=3;function IS(n,e,t,i,s=Date.now()){if(n.dead)return null;const r=JSON.parse(JSON.stringify(n));return r.messages=[],r.copAlert=!1,JSON.stringify({v:fu,s:r,px:e,pz:t,face:i,savedAt:s})}function v0(n){if(!n)return null;try{const e=JSON.parse(n);return!e||![1,2,fu].includes(e.v)||!e.s||typeof e.s.seed!="string"||e.s.dead||![e.px,e.pz,e.s.health,e.s.time,e.s.day].every(t=>typeof t=="number"&&isFinite(t))?null:(e.s.messages=[],pS(e.s),e.v=fu,e)}catch{return null}}function _p(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new tn;let l=0;for(let h=0;h<n.length;++h){const u=n[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0;const u=[];for(let d=0;d<n.length;++d){const p=n[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=xp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][d]);const g=xp(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function xp(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new en(o,t,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<t;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function vp(n,e){if(e===Kg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===tu||e===hm){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===tu)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class LS extends _o{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new US(t)}),this.register(function(t){return new FS(t)}),this.register(function(t){return new $S(t)}),this.register(function(t){return new jS(t)}),this.register(function(t){return new qS(t)}),this.register(function(t){return new BS(t)}),this.register(function(t){return new zS(t)}),this.register(function(t){return new HS(t)}),this.register(function(t){return new GS(t)}),this.register(function(t){return new NS(t)}),this.register(function(t){return new VS(t)}),this.register(function(t){return new OS(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new WS(t)}),this.register(function(t){return new kS(t)}),this.register(function(t){return new YS(t)}),this.register(function(t){return new KS(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Xo.extractUrlBase(e);o=Xo.resolveURL(l,this.path)}else o=Xo.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Om(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===y0){try{o[Ze.KHR_BINARY_GLTF]=new ZS(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new hw(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:o[u]=new DS;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new JS(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[u]=new QS;break;case Ze.KHR_MESH_QUANTIZATION:o[u]=new ew;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function PS(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class kS{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Te(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],bn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new zm(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Bm(h),l.distance=u;break;case"spot":l=new i1(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Wi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class DS{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return In}extendParams(e,t,i){const s=[];e.color=new Te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],bn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Ut))}return Promise.all(s)}}class NS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class US{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(a,a)}return Promise.all(r)}}class FS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class OS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class BS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],bn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ut)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class zS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class HS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],bn),Promise.all(r)}}class GS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class VS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],bn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ut)),Promise.all(r)}}class WS{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class XS{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class $S{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class jS{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qS{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class YS{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,s.mode,s.filter),p})})}else return null}}class KS{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==Kn.TRIANGLES&&l.mode!==Kn.TRIANGLE_STRIP&&l.mode!==Kn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(const g of u){const _=new Ne,m=new k,f=new Gn,v=new k(1,1,1),y=new tl(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(m,f,v));for(const x in c)if(x==="_COLOR_0"){const C=c[x];y.instanceColor=new su(C.array,C.itemSize,C.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);It.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const y0="glTF",No=12,yp={JSON:1313821514,BIN:5130562};class ZS{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,No),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==y0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-No,r=new DataView(e,No);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===yp.JSON){const l=new Uint8Array(e,No+o,a);this.content=i.decode(l)}else if(c===yp.BIN){const l=No+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class JS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=pu[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=pu[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[e.attributes[h]],p=Xr[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(p)},a,l,bn,d)})})}}class QS{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ew{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class M0 extends la{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(i-t)/h,d=u*u,p=d*u,g=e*l,_=g-l,m=-2*p+3*d,f=p-d,v=1-m,y=f-d+u;for(let x=0;x!==a;x++){const C=o[_+x+a],A=o[_+x+c]*h,R=o[g+x+a],D=o[g+x]*h;r[x]=v*C+y*A+m*R+f*D}return r}}const tw=new Gn;class nw extends M0{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return tw.fromArray(r).normalize().toArray(r),r}}const Kn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Mp={9728:qt,9729:zn,9984:Qp,9985:sc,9986:Fo,9987:ji},bp={33071:ys,33648:Rc,10497:Qr},Kl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iw={CUBICSPLINE:void 0,LINEAR:Zo,STEP:Ko},Zl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sw(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new td({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qi})),n.DefaultMaterial}function Bs(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Wi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rw(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function ow(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function aw(n){let e;const t=n.extensions&&n.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jl(t.attributes):e=n.indices+":"+Jl(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Jl(n.targets[i]);return e}function Jl(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function mu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cw(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const lw=new Ne;class hw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new PS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new e1(this.options.manager):this.textureLoader=new o1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Om(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Bs(r,a,s),Wi(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Xo.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Kl[s.type],a=Xr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new en(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Kl[s.type],l=Xr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(d/p),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let y=t.cache.get(v);y||(_=new l(a,f*p,s.count*p/h),y=new Cm(_,p/h),t.cache.add(v,y)),m=new Qo(y,c,d%p/h,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new en(_,c,g);if(s.sparse!==void 0){const f=Kl.SCALAR,v=Xr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,C=new v(o[1],y,s.sparse.count*f),A=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new en(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,D=C.length;R<D;R++){const w=C[R];if(m.setX(w,A[R*c]),c>=2&&m.setY(w,A[R*c+1]),c>=3&&m.setZ(w,A[R*c+2]),c>=4&&m.setW(w,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Mp[d.magFilter]||zn,h.minFilter=Mp[d.minFilter]||ji,h.wrapS=bp[d.wrapS]||Qr,h.wrapT=bp[d.wrapT]||Qr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qt&&h.minFilter!==zn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Vt(_);m.needsUpdate=!0,d(m)}),t.load(Xo.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Wi(u,o),u.userData.mimeType=o.mimeType||cw(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new Dm,ii.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new km,ii.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return td}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const u=s[Ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],bn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Ut)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ai);const h=r.alphaMode||Zl.OPAQUE;if(h===Zl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Zl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==In&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ie(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==In&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==In){const u=r.emissiveFactor;a.emissive=new Te().setRGB(u[0],u[1],u[2],bn)}return r.emissiveTexture!==void 0&&o!==In&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ut)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Wi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Bs(s,u,r),u})}createUniqueName(e){const t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Sp(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=aw(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Sp(new tn,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?sw(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=o[p];let f;const v=l[p];if(m.mode===Kn.TRIANGLES||m.mode===Kn.TRIANGLE_STRIP||m.mode===Kn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Fb(_,v):new qe(_,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Kn.TRIANGLE_STRIP?f.geometry=vp(f.geometry,hm):m.mode===Kn.TRIANGLE_FAN&&(f.geometry=vp(f.geometry,tu));else if(m.mode===Kn.LINES)f=new zb(_,v);else if(m.mode===Kn.LINE_STRIP)f=new Zu(_,v);else if(m.mode===Kn.LINE_LOOP)f=new Hb(_,v);else if(m.mode===Kn.POINTS)f=new Gb(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&ow(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Wi(f,r),m.extensions&&Bs(s,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Bs(s,u[0],r),u[0];const d=new Be;r.extensions&&Bs(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new xn(dm.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Jc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Wi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ne;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ku(a,c)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const p=s.channels[u],g=s.samplers[p.sampler],_=p.target,m=_.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let v=0,y=d.length;v<y;v++){const x=d[v],C=p[v],A=g[v],R=_[v],D=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const w=i._createAnimationTracks(x,C,A,R,D);if(w)for(let M=0;M<w.length;M++)f.push(w[M])}return new ou(r,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,lw)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Lm:l.length>1?h=new Be:l.length===1?h=l[0]:h=new It,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Wi(h,r),r.extensions&&Bs(i,h,r),r.matrix!==void 0){const u=new Ne;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Be;i.name&&(r.name=s.createUniqueName(i.name)),Wi(r,i),i.extensions&&Bs(t,r,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,p]of s.associations)(d instanceof ii||d instanceof Vt)&&u.set(d,p);return h.traverse(d=>{const p=s.associations.get(d);p!=null&&u.set(d,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];ps[r.path]===ps.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ps[r.path]){case ps.weights:l=so;break;case ps.rotation:l=ro;break;case ps.position:case ps.scale:l=oo;break;default:switch(i.itemSize){case 1:l=so;break;case 2:case 3:default:l=oo;break}break}const h=s.interpolation!==void 0?iw[s.interpolation]:Zo,u=this._getArrayFromAccessor(i);for(let d=0,p=c.length;d<p;d++){const g=new l(c[d]+"."+ps[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=mu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof ro?nw:M0;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function uw(n,e,t){const i=e.attributes,s=new bi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new k(c[0],c[1],c[2]),new k(l[0],l[1],l[2])),a.normalized){const h=mu(Xr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new k,c=new k;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=mu(Xr[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new Pi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Sp(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(const o in i){const a=pu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return tt.workingColorSpace!==bn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),Wi(n,e),uw(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?rw(n,e.targets,t):n})}function dw(n){const e=new Map,t=new Map,i=n.clone();return b0(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function b0(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)b0(n.children[i],e.children[i],t)}const wp=new Map;function ne(n,e=0,t=1){const i=n+":"+e+":"+t;let s=wp.get(i);return s||(s=new Xn({color:n,emissive:e,emissiveIntensity:t}),wp.set(i,s)),s}const cl=[];function S0(n,e){const t=new Xn({color:n,emissive:e,emissiveIntensity:0});return cl.push(t),t}function ee(n,e,t,i,s=0,r=0,o=0,a=!0){const c=new qe(new si(n,e,t),i);return c.position.set(s,r,o),c.castShadow=a,c.receiveShadow=!0,c}function Nc(n,e,t,i,s=8){const r=new qe(new _i(n,e,t,s),i);return r.castShadow=!0,r.receiveShadow=!0,r}const fw={"car-sedan":{file:"car-kit/sedan.glb",fit:3.8,axis:"len",rotY:Math.PI/2},"car-taxi":{file:"car-kit/taxi.glb",fit:3.9,axis:"len",rotY:Math.PI/2},"car-van":{file:"car-kit/van.glb",fit:4.1,axis:"len",rotY:Math.PI/2},"car-suv":{file:"car-kit/suv.glb",fit:3.9,axis:"len",rotY:Math.PI/2},"bld-a":{file:"city-kit-commercial/building-a.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-c":{file:"city-kit-commercial/building-c.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-f":{file:"city-kit-commercial/building-f.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-h":{file:"city-kit-commercial/building-h.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-j":{file:"city-kit-commercial/building-j.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-d":{file:"city-kit-commercial/building-d.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-k":{file:"city-kit-commercial/building-k.glb",fit:1,axis:"raw",rotY:Math.PI},"tower-a":{file:"city-kit-commercial/building-skyscraper-a.glb",fit:1,axis:"raw",rotY:Math.PI},"tower-b":{file:"city-kit-commercial/building-skyscraper-b.glb",fit:1,axis:"raw",rotY:Math.PI},pillar:{file:"city-kit-roads/bridge-pillar.glb",fit:3,axis:"h"},dumpster:{file:"city-kit-roads/dumpster.glb",fit:2.4,axis:"len"},lamp:{file:"city-kit-roads/light-square.glb",fit:4.4,axis:"h"},man:{file:"mini-characters/character-male-e.glb",fit:1.75,axis:"h",rotY:Math.PI},cop:{file:"mini-characters/character-male-b.glb",fit:1.9,axis:"h",rotY:Math.PI},"ped-0":{file:"mini-characters/character-female-b.glb",fit:1.7,axis:"h",rotY:Math.PI},"ped-1":{file:"mini-characters/character-male-c.glb",fit:1.75,axis:"h",rotY:Math.PI},"ped-2":{file:"mini-characters/character-female-d.glb",fit:1.7,axis:"h",rotY:Math.PI}},_d=new Map,xd=[],pw=n=>_d.has(n);async function mw(n=8e3){const e=new LS,t=Promise.all(Object.entries(fw).map(async([i,s])=>{try{const r=await e.loadAsync("models/"+s.file),o=r.scene;let a=!1;o.traverse(_=>{const m=_;m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0),_.isSkinnedMesh&&(a=!0,_.frustumCulled=!1)});const c=new Be;c.add(o),c.rotation.y=s.rotY??0;const l=new Be;l.add(c),l.updateMatrixWorld(!0);const h=new bi().setFromObject(l),u=h.getSize(new k),d=s.axis==="len"?Math.max(u.x,u.z):s.axis==="h"?u.y:0,p=d>0?s.fit/d:1;c.scale.setScalar(p),l.updateMatrixWorld(!0),h.setFromObject(l);const g=h.getCenter(new k);c.position.set(-g.x,-h.min.y,-g.z),_d.set(i,{obj:l,clips:r.animations,size:h.getSize(new k),skinned:a}),xd.push(i)}catch{}}));await Promise.race([t,new Promise(i=>setTimeout(i,n))])}function xo(n){const e=_d.get(n);return e?{obj:e.skinned?dw(e.obj):e.obj.clone(),clips:e.clips,size:e.size}:null}function vo(n,e){const t=new Be,i=xo(n);return t.add(i?i.obj:e),t}function dc(n,e,t={}){var m;const i=t.skin??14262906,s=new Be,r=(f,v,y,x,C)=>{const A=new Be;return A.position.set(x,C,0),A.add(ee(f,v,f,y,0,-v/2,0)),s.add(A),A},o=r(.24,.8,ne(e),-.15,.82),a=r(.24,.8,ne(e),.15,.82);s.add(ee(.62,.72,.38,ne(n),0,1.18,0));const c=r(.17,.66,ne(n),-.41,1.5),l=r(.17,.66,ne(n),.41,1.5),h=new Be;h.position.y=1.78,h.add(ee(.42,.42,.42,ne(i),0,0,0)),h.add(ee(.3,.07,.04,ne(2759188),0,.05,-.215,!1)),t.hair!==void 0&&h.add(ee(.46,.14,.46,ne(t.hair),0,.22,.02)),t.hat!==void 0&&h.add(ee(.48,.2,.48,ne(t.hat),0,.27,0)),s.add(h);const u=new Be,d=t.model?xo(t.model):null;let p=null;const g={};if(d){u.add(d.obj),t.tint!==void 0&&d.obj.traverse(f=>{const v=f;if(v.isMesh){const y=v.material.clone();y.color.set(t.tint),v.material=y}}),p=new v1(d.obj);for(const f of d.clips)g[f.name]=p.clipAction(f);(m=g.idle)==null||m.play()}else u.add(s);const _=new Be;return _.add(u),{g:_,body:u,legL:o,legR:a,armL:c,armR:l,head:h,phase:Math.random()*6,mixer:p,acts:g,cur:"idle",oneShot:0,model:!!d}}function w0(n,e,t=.2){var s;if(n.cur===e||!n.acts[e])return;const i=n.acts[e];i.reset().play(),(s=n.acts[n.cur])==null||s.crossFadeTo(i,t,!1),n.cur=e}function Yi(n,e,t=!1){const i=n.acts[e];i&&(i.setLoop(lm,1),i.clampWhenFinished=t,w0(n,e,.1),n.oneShot=t?999:i.getClip().duration*.9)}function na(n,e,t){const i=Math.floor(n.phase/Math.PI);if(e>=.2&&(n.phase+=t*(4+e*1.6)),n.mixer)return n.oneShot>0?n.oneShot-=t:(w0(n,e>=.2?e>4.5?"sprint":"walk":"idle"),n.acts.walk&&(n.acts.walk.timeScale=Math.max(.6,e/1.9)),n.acts.sprint&&(n.acts.sprint.timeScale=Math.max(.6,e/5))),n.mixer.update(t),e>=.2&&Math.floor(n.phase/Math.PI)!==i;if(e<.2)return n.legL.rotation.x*=.8,n.legR.rotation.x*=.8,n.armL.rotation.x*=.8,n.armR.rotation.x*=.8,n.body.position.y*=.8,!1;const s=Math.sin(n.phase)*Math.min(.75,.25+e*.12);return n.legL.rotation.x=s,n.legR.rotation.x=-s,n.armL.rotation.x=-s*.8,n.armR.rotation.x=s*.8,n.body.position.y=Math.abs(Math.sin(n.phase))*.11,Math.floor(n.phase/Math.PI)!==i}const T0=new _i(.36,.36,.28,10);T0.rotateX(Math.PI/2);function gw(n,e=0){const t=new Be,i=ne(n),s=ne(2371644),r=e===2,o=r?4:3.6;t.add(ee(o,.72,1.8,i,0,.62,0)),r?t.add(ee(2.9,1,1.72,i,-.4,1.45,0)):t.add(ee(e===1?2.4:1.9,.62,1.62,i,e===1?-.3:-.25,1.28,0));const a=r?2.92:e===1?2.42:1.92;t.add(ee(a,.34,1.66,s,r?-.4:e===1?-.3:-.25,r?1.55:1.3,0,!1)),t.add(ee(.06,.18,.4,ne(16773808,16773808,.9),o/2+.01,.72,.6,!1)),t.add(ee(.06,.18,.4,ne(16773808,16773808,.9),o/2+.01,.72,-.6,!1));const c=new Xn({color:7344144,emissive:16719904,emissiveIntensity:.15});t.add(ee(.06,.18,.36,c,-o/2-.01,.75,.62,!1)),t.add(ee(.06,.18,.36,c,-o/2-.01,.75,-.62,!1));const l=[],h=ne(1710618);for(const m of[o/2-.8,-o/2+.8])for(const f of[.86,-.86]){const v=new qe(T0,h);v.position.set(m,.36,f),v.castShadow=!0,t.add(v),l.push(v)}const u=["car-sedan","car-taxi","car-van","car-suv"][e%4],d=xo(u);if(!d)return{g:vo("none",t),wheels:l,brake:c,spin:"z",spinSign:-1};const p=new Be;p.add(d.obj);const g=d.size.x/2;p.add(ee(.06,.16,.34,c,-g-.02,.8,.55,!1)),p.add(ee(.06,.16,.34,c,-g-.02,.8,-.55,!1));const _=[];return d.obj.traverse(m=>{m.name.startsWith("wheel")&&_.push(m)}),{g:p,wheels:_,brake:c,spin:"x",spinSign:1}}function zs(n,e,t=1){const i=new Be,s=Nc(.18,.26,1.6,ne(6965806),6);s.position.y=.8,i.add(s);const r=ne(4165434),o=new qe(new kc(1.4,0),r);o.position.y=2.6;const a=new qe(new kc(1,0),ne(5416517));a.position.set(.3,3.5,.2);for(const l of[o,a])l.castShadow=!0,l.receiveShadow=!0,i.add(l);const c=vo("none",i);return c.position.set(n,0,e),c.scale.setScalar(t),c.rotation.y=n*1.3,c}const E0=new In({color:16760944,transparent:!0,opacity:0,blending:Ac,depthWrite:!1}),_w=E0;function Tp(n,e,t){const i=new Be,s=Nc(.08,.11,4.2,ne(3027512),6);s.position.y=2.1,i.add(s),i.add(ee(.12,.12,1.2,ne(3027512),0,4.15,t*.55));const r=S0(16773312,16765056);i.add(ee(.4,.16,.4,r,0,4,t*1.1,!1));const o=xo("lamp");let a;o?(a=new Be,o.obj.rotation.y=t>0?Math.PI:0,a.add(o.obj),a.add(ee(.36,.1,.36,r,0,o.size.y-.32,t*(o.size.z-.25),!1))):a=vo("none",i),a.position.set(n,0,e);const c=new qe(new Js(2.6,16),E0);return c.rotation.x=-Math.PI/2,c.position.set(n,.23,e+t*1.1),{g:a,pool:c}}function xw(){const n=new Be;n.add(ee(2.4,1.3,1.4,ne(3111482),0,.75,0));const e=ee(2.5,.12,1.5,ne(2317356),0,1.45,.08);e.rotation.x=-.12,n.add(e);for(const t of[-1,1])n.add(ee(.12,.2,.12,ne(2236962),t*1,.1,0));return vo("dumpster",n)}function vw(){const n=new Be,e=ne(10118192);n.add(ee(3,.12,.8,e,0,.5,0)),n.add(ee(3,.55,.1,e,0,.9,-.38));for(const t of[-1.3,1.3])n.add(ee(.1,.5,.7,ne(2763306),t,.25,0));return vo("none",n)}function yw(){const n=new Be,e=new Xn({color:4182112,emissive:1731114,emissiveIntensity:.6}),t=Nc(.14,.14,.42,e,6);t.position.y=.21;const i=Nc(.05,.08,.18,e,6);return i.position.y=.5,n.add(t,i),n.rotation.z=Math.PI/2.4,n}function Mw(){const n=new Be,e=ne(14715424);n.add(ee(.3,.26,.62,e,0,.3,0)),n.add(ee(.26,.24,.24,e,0,.48,-.36)),n.add(ee(.07,.1,.05,e,-.08,.64,-.38)),n.add(ee(.07,.1,.05,e,.08,.64,-.38));const t=ee(.07,.07,.45,e,0,.45,.48);t.rotation.x=.7,n.add(t);for(const i of[-.1,.1])for(const s of[-.22,.22])n.add(ee(.07,.2,.07,e,i,.1,s));return vo("none",n)}const Ep=S0(3820134,16762730),bw=new si(1,1,.08),fc=[];function gu(n,e,t,i,s){fc.push(new Ne().compose(new k(n,e,t),new Gn,new k(i,s,1)))}function Sw(){const n=new tl(bw,Ep,fc.length);fc.forEach((i,s)=>n.setMatrixAt(s,i));const e=new Te(1,1,1),t=new Te(.97,.97,.97);return fc.forEach((i,s)=>n.setColorAt(s,Math.random()<.55?e:t)),Ep.onBeforeCompile=i=>{i.fragmentShader=i.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_COLOR
 totalEmissiveRadiance *= step(0.985, vColor.r);
#endif`)},n}function ww(n,e,t){const i=document.createElement("canvas");i.width=256,i.height=64;const s=i.getContext("2d");s.fillStyle=e,s.fillRect(0,0,256,64),s.fillStyle=t,s.font="bold 40px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(n,128,34);const r=new ca(i);return r.colorSpace=Ut,r}const A0=["bld-a","bld-c","bld-f","bld-h","bld-j","bld-d","bld-k"],Tw=["tower-a","tower-b"];function Ew(n,e,t,i,s=A0){const r=s.filter(pw);if(!r.length)return null;const o=new Be,a=e-n,c=Math.max(1,Math.round(a/6.5));for(let l=0;l<c;l++){const h=xo(r[(i+l*2)%r.length]),u=a/c,d=u/h.size.x;h.obj.scale.setScalar(d),h.obj.position.set(n+(l+.5)*u,0,t+h.size.z*d/2),o.add(h.obj)}return o}function hi(n,e,t,i,s,r,o=0,a="kit"){const c=a==="plain"?null:Ew(n,e,t,o,a==="tower"?Tw:A0),l=new Be,h=e-n;if(c)return l.add(c),l.add(ee(h*.96,s*.55,(i-t)*.5,ne(r),(n+e)/2,s*.275,i-(i-t)*.25)),l.userData.kit=!0,l;l.add(ee(h,s,i-t,ne(r),(n+e)/2,s/2,(t+i)/2)),l.add(ee(h+.2,.3,i-t+.2,ne(5263450),(n+e)/2,s+.15,(t+i)/2));const u=Math.max(1,Math.floor(h/2.6));for(let d=3.4;d<s-1;d+=2.8)for(let p=0;p<u;p++)gu(n+(p+.5)*(h/u),d+.6,t-.03,1.1,1.3);return l}function Tr(n,e,t,i,s,r,o,a,c,l,h=0,u="kit"){const d=hi(n,e,t,i,s,r,h,u),p=e-n,g=(n+e)/2;d.userData.kit||(gu(g-p*.22,1.35,t-.03,p*.38,1.6),gu(g+p*.28,1.35,t-.03,p*.26,1.6),d.add(ee(1.1,2.1,.1,ne(3810328),g+p*.02,1.05,t-.04,!1)));const _=Math.max(4,Math.round(p/.9)),m=new Be;for(let x=0;x<_;x++)m.add(ee(p/_+.01,.08,1.6,ne(x%2?o:a),n+(x+.5)*(p/_),0,0,!0));m.position.set(0,2.75,t-.8),m.rotation.x=-.32,d.add(m);const f=ww(c,l,"#fff"),v=new Xn({map:f,emissive:16777215,emissiveIntensity:0,emissiveMap:f});cl.push(v);const y=new qe(new ns(Math.min(p*.7,6),1.2),v);return y.position.set(g,3.55,t-.25),y.rotation.y=Math.PI,d.add(y),d}function Ql(n,e){const t=document.createElement("canvas");t.width=256,t.height=64;const i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,256,64),i.fillStyle="#fff",i.font="bold 30px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,128,34);const s=new Yu(new el({map:new ca(t)}));return s.scale.set(3,.75,1),s}function Ap(n){const e=new Be,t=ne(1710618);for(const s of[-.55,.55]){const r=new qe(new ed(.36,.05,6,16),t);r.rotation.y=Math.PI/2,r.position.set(0,.38,s),e.add(r)}const i=ne(n);return e.add(ee(.06,.06,1.1,i,0,.62,0)),e.add(ee(.06,.5,.06,i,0,.6,-.25)),e.add(ee(.2,.06,.3,ne(2236962),0,.88,-.25)),e.add(ee(.55,.05,.05,ne(3355443),0,.98,.5)),e}function Aw(){const n=new Be;n.add(ee(.32,.05,1,ne(14174762),0,.12,0));for(const e of[-.35,.35])n.add(ee(.3,.08,.08,ne(15658734),0,.05,e));return n}class Rw{constructor(e,t){this.ground=new Be,this.groundKey="",this.rackBikes=[],this.parked={},this.under={},e.add(this.ground);const i=Wr.pawn,s=Ql("PAWN","#7a2a8a");s.position.set(i.x,3.6,i.z+1),e.add(s);const r=Wr.books,o=new Be;o.add(ee(1.6,.7,.8,ne(6965802),0,.6,0)),[13126202,3828424,15255626,4892778,9063112].forEach((u,d)=>o.add(ee(.22,.32,.6,ne(u),-.6+d*.3,1.1,0))),o.position.set(r.x,0,r.z+1.2),e.add(o);const c=Ql("USED BOOKS","#3a5a3a");c.position.set(r.x,2.2,r.z+1.2),e.add(c);const l=Wr.library;e.add(ee(.12,1.1,.12,ne(5913114),l.x,.55,l.z)),e.add(ee(.7,.6,.5,ne(3832520),l.x,1.35,l.z));const h=Ql("FREE BOOKS","#3a7ac8");h.position.set(l.x,2.2,l.z),h.scale.set(2,.5,1),e.add(h),dd.forEach((u,d)=>{e.add(ee(1.6,.06,.06,ne(8947848),u.x,.7,u.z));const p=Ap([2788056,14170682,3848282,15249450][d%4]);p.rotation.y=Math.PI/2,p.position.set(u.x,0,u.z),e.add(p),this.rackBikes.push(p)});for(const u of["skateboard","scooter","bike"]){const d=()=>u==="bike"?Ap(2788056):u==="skateboard"?Aw():(()=>{const p=new Be;return p.add(ee(.28,.08,1.1,ne(2276266),0,.1,0)),p.add(ee(.06,1,.06,ne(3355443),0,.6,-.5)),p})();this.parked[u]=d(),this.parked[u].visible=!1,e.add(this.parked[u]),u!=="scooter"&&(this.under[u]=d(),this.under[u].visible=!1,t.add(this.under[u]))}}update(e,t){const i=e.own,s=i.ground.map(r=>r.id+r.x.toFixed(1)+r.z.toFixed(1)).join("|");if(s!==this.groundKey){this.groundKey=s,this.ground.clear();for(const r of i.ground){const o=jm[De[r.id].rarity],a=ee(.4,.3,.4,ne(o,o,.6),r.x,.2,r.z),c=new qe(new Js(.75,20),new In({color:o,transparent:!0,opacity:.45,depthWrite:!1,blending:Ac}));c.rotation.x=-Math.PI/2,c.position.set(r.x,.03,r.z),this.ground.add(a,c)}}this.ground.children.forEach((r,o)=>{o%2===0?(r.position.y=.25+Math.sin(t*3+o)*.08,r.rotation.y=t):r.scale.setScalar(1+Math.sin(t*4+o)*.15)}),this.rackBikes.forEach((r,o)=>r.visible=n0(e,o));for(const r of Object.keys(this.parked)){const o=!!i.ride&&i.ride.id===r;this.parked[r].visible=o&&!i.riding&&!!i.parked,this.parked[r].visible&&this.parked[r].position.set(i.parked.x,0,i.parked.z),this.under[r]&&(this.under[r].visible=o&&i.riding)}}}const Uc=[{id:"sign",out:"sign",need:["cardboard","marker"]},{id:"tent",out:"tent",need:["tarp","pole","pole"]},{id:"stove",out:"stove",need:["can","candle"],book:"cook"},{id:"cart",out:"cart",need:["crate","trolley"]},{id:"skateboard",out:"skateboard",need:["plank","wheel"]},{id:"necklace",out:"necklace",need:["caps","string"]},{id:"rainCover",out:"rainCover",need:["umbrella","tape"]},{id:"chime",out:"chime",need:["can","string"]},{id:"bedroll",out:"bedroll",need:["blanket","tarp"]},{id:"hotStew",out:"hotStew",need:["beans","bread"],tool:"stove",book:"cook"}],Rp=["He tapes it together. It falls apart. He tapes it again. Art.","That is now a worse version of two things.","He stares at it. It stares back. Nothing happens.","A pigeon watches. The pigeon is not impressed.","It is a hat now? No. It is nothing.","He invents something. Nobody, including him, knows what.","Close. Very close. Also, completely wrong."];function R0(n){return Uc.filter(e=>e.id==="sign"||e.book&&$n(n,e.book)||n.own.known.includes(e.id))}const eh=n=>[...n].sort().join("+");function Cw(n){const e=eh(n);return Uc.find(t=>eh(t.need)===e||t.tool&&eh([...t.need,t.tool])===e)??null}function C0(n,e){const t=[...n.own.bag,...Hn.map(s=>n.own.gear[s]).filter(s=>!!s)],i=[];for(const s of e){const r=t.findIndex(o=>o.id===s&&!i.includes(o));if(r<0)return null;i.push(t[r])}return i}function I0(n,e,t=0,i=0){if(n.dead||e.length<2)return{ok:!1,line:"He needs at least two things."};const s=C0(n,e);if(!s)return{ok:!1,line:"He doesn't have all that."};const r=Cw(e);if(!r){const h=Rp[Math.floor(un(n)*Rp.length)];return n.messages.push(h),{ok:!1,line:h}}const o=r.tool?hd(n,r.tool):void 0;if(r.tool&&!o){const h=`So close. He needs a ${De[r.tool].name.toLowerCase()} for that.`;return n.messages.push(h),{ok:!1,line:h}}const a=n.own;for(const h of s){if(h===o)continue;const u=a.bag.indexOf(h);u>=0&&a.bag.splice(u,1);for(const d of Hn)a.gear[d]===h&&delete a.gear[d]}o&&Ri(n,o);const c=!R0(n).includes(r);a.known.includes(r.id)||a.known.push(r.id);const l=r.out==="sign"?{text:hu[Math.floor(un(n)*hu.length)].text}:{};return n.messages.push(`Made: ${De[r.out].name}${"text"in l?` ("${l.text}")`:""}.${c?" New recipe!":""}`),Bt(n,r.out,t,i,l,!0),Vn.emit(n,"craft"),Mn(n),{ok:!0,out:r.out,recipe:r}}const Iw=(n,e)=>!!C0(n,e.need)&&(!e.tool||zt(n,e.tool)),Lw=n=>!!n&&/^(bag|craft|pawn|books|steal:\d+)$/.test(n),Pw=n=>"#"+n.toString(16).padStart(6,"0"),Cr=n=>Pw(jm[De[n].rarity]);let on=null,Yn=[],Ya="";const kw=`
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
#bagBtn svg{width:22px;height:22px}`;function Dw(n){var s;const e=document.createElement("style");e.textContent=kw,document.head.appendChild(e);const t=document.createElement("div");t.id="combo",document.body.appendChild(t);const i=document.createElement("div");i.className="tbtn",i.id="bagBtn",i.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M6 8h12l-1 13H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',i.addEventListener("pointerdown",r=>{r.preventDefault(),n()}),(s=document.getElementById("pauseBtn"))==null||s.before(i)}function Nw(n){const e=document.getElementById("combo");if(!e)return;const[t,i]=n.replace("Combo! ","").split(": ");e.innerHTML=`COMBO! ${t}<small>${i??""}</small>`,e.classList.remove("go"),e.offsetWidth,e.classList.add("go")}function gn(n,e){n.addEventListener("pointerdown",t=>{t.preventDefault(),e()})}function Cp(n,e,t){if(!n)return`<div class="ocell"><span class="sl">${e}</span></div>`;const i=De[n.id],s=Math.max(0,Math.min(1,n.dur/i.dur));return`<div class="ocell${t?" on":""}" style="border-color:${Cr(n.id)}"><span class="sl">${e}</span>${i.name}${n.wet?" (wet)":""}<span class="du"><i style="width:${s*100}%;background:${s<.3?"#f66":"#9f9"}"></i></span></div>`}function Uw(n,e,t,i){const s=e==="bag"||e==="craft"?`<div class="otabs"><div class="otab${e==="bag"?" on":""}" data-k="bag">Bag</div><div class="otab${e==="craft"?" on":""}" data-k="craft">Craft</div></div>`:"",r=e==="bag"?`Bag ${t.own.bag.length}/${ao(t)}`:e==="craft"?"Craft":e==="pawn"?"Pawn shop":e==="books"?"Used books":"The lock";n.innerHTML=`<div class="shead"><b>${r}</b><span class="smoney">$${t.money}</span></div>${s}<div class="slist"></div><button class="sclose">Done</button>`;const o=n.querySelector(".slist");gn(n.querySelector(".sclose"),()=>{on=null,Yn=[],Ya="",i.close()}),n.querySelectorAll(".otab").forEach(p=>gn(p,()=>i.open(p.dataset.k)));const a=(p,g="pop")=>{i.sound(p?g:"nope"),i.flush(),i.rerender()},{x:c,z:l}=i.pos();if(e==="bag"){const p=t.own,g=Hn.map(C=>Cp(p.gear[C],C,on===C)).join(""),_=Array.from({length:ao(t)},(C,A)=>Cp(p.bag[A],"",on===A)).join(""),m=typeof on=="number"?p.bag[on]:on?p.gear[on]:void 0;let f='<div class="odet" style="opacity:.6">Tap a thing.</div>';if(m){const C=De[m.id];f=`<div class="odet"><b style="color:${Cr(m.id)}">${C.name}</b> <span style="opacity:.6">${C.rarity}</span><br>${C.desc}<br><i>${C.effect}</i>${m.text?`<br>Says: "${m.text}"`:""}<br><span style="opacity:.6">Wear ${m.dur}/${C.dur}</span>
        <div class="obtns">${typeof on=="number"?`<button data-a="use">${C.slot?"Equip":C.book?"Read":"Use"}</button>`:'<button data-a="off">Take off</button>'}<button data-a="drop">Drop</button></div></div>`}const v=p.ride?`<div class="orec">Ride: <b>${De[p.ride.id].name}</b> (${p.riding?"riding":p.locked?"parked, locked":"parked, unlocked"}) wear ${p.ride.dur}/${De[p.ride.id].dur}</div>`:"",y=p.books.length?p.books.map(C=>`<span class="otag">${De[Qs[C]].name}</span>`).join(""):'<span style="opacity:.5">None read yet.</span>',x=p.combos.length?p.combos.map(C=>{const A=Ym.find(R=>R.id===C);return`<span class="otag">${A.name}: ${A.text}</span>`}).join(""):'<span style="opacity:.5">None yet. Some pairs do more together.</span>';o.innerHTML=`<div class="ohead">Worn</div><div class="ogrid gear">${g}</div><div class="ohead">Bag</div><div class="ogrid bag">${_}</div>${f}${v}<div class="ohead">Books read</div><div>${y}</div><div class="ohead">Combos</div><div>${x}</div>`,o.querySelectorAll(".gear .ocell").forEach((C,A)=>gn(C,()=>{on=p.gear[Hn[A]]?Hn[A]:null,i.rerender()})),o.querySelectorAll(".bag .ocell").forEach((C,A)=>gn(C,()=>{on=p.bag[A]?A:null,i.rerender()})),o.querySelector("[data-a=use]")&&gn(o.querySelector("[data-a=use]"),()=>{const C=Qm(t,on,i.pedNear());on=null,a(C,"sparkle")}),o.querySelector("[data-a=off]")&&gn(o.querySelector("[data-a=off]"),()=>{const C=V1(t,on);on=null,a(C)}),o.querySelector("[data-a=drop]")&&gn(o.querySelector("[data-a=drop]"),()=>{const C=W1(t,on,c,l);on=null,a(C)});return}if(e==="craft"){const p=[...t.own.bag.map(y=>y.id),...Hn.map(y=>{var x;return(x=t.own.gear[y])==null?void 0:x.id}).filter(y=>!!y)],g=[...p];for(const y of Yn){const x=g.indexOf(y);x>=0?g.splice(x,1):Yn=[]}const _=p.map((y,x)=>`<span class="ochip${Yn.filter(C=>C===y).length>p.slice(0,x).filter(C=>C===y).length?" on":""}" data-i="${x}" style="border-color:${Cr(y)}">${De[y].name}</span>`).join(""),m=R0(t),f=m.map(y=>`<div class="orec${Iw(t,y)?"":" no"}" data-r="${y.id}">${y.need.map(x=>De[x].name).join(" + ")}${y.tool?` (with ${De[y.tool].name.toLowerCase()})`:""} = <b>${De[y.out].name}</b></div>`).join(""),v=Uc.length-m.length;o.innerHTML=`<div class="ohead">Pick things to combine</div><div>${_||'<span style="opacity:.5">Nothing to work with. Dig in the trash.</span>'}</div>
      <button class="obtn" data-a="make">Make it (${Yn.length})</button>${Ya?`<div class="odet">${Ya}</div>`:""}
      <div class="ohead">Recipes he knows</div>${f}<div class="orec no">${v} more to find: books, or trying.</div>`,o.querySelectorAll(".ochip").forEach(y=>gn(y,()=>{const x=p[Number(y.dataset.i)],C=Yn.filter(A=>A===x).length;y.classList.contains("on")?Yn.splice(Yn.lastIndexOf(x),1):C<p.filter(A=>A===x).length&&Yn.push(x),i.rerender()})),o.querySelectorAll(".orec[data-r]").forEach(y=>gn(y,()=>{Yn=[...Uc.find(C=>C.id===y.dataset.r).need],i.rerender()})),gn(o.querySelector("[data-a=make]"),()=>{const y=I0(t,Yn,c,l);Ya=y.ok?`Made: <b>${De[y.out].name}</b>`:y.line,Yn=[],a(y.ok,"sparkle")});return}if(e==="pawn"){const p=t.own.bag.map((_,m)=>`<div class="srow" data-s="${m}"><div><div class="sname" style="color:${Cr(_.id)}">${De[_.id].name}</div><div class="snote">Sell</div></div><div class="sbuy">+$${Math.round(De[_.id].value*(_.wet?.5:1)*Math.max(.4,_.dur/De[_.id].dur))}</div></div>`).join(""),g=r0.map((_,m)=>`<div class="srow${t.money<_.price?" poor":""}" data-b="${m}"><div><div class="sname" style="color:${Cr(_.id)}">${De[_.id].name}</div><div class="snote">${De[_.id].effect}</div></div><div class="sbuy">$${_.price}</div></div>`).join("");o.innerHTML=`<div class="sgreet">"Everything has a price. Even that."</div><div class="ohead">Sell from the bag</div>${p||'<div style="opacity:.5">Nothing in the bag.</div>'}<div class="ohead">Buy</div>${g}`,o.querySelectorAll("[data-s]").forEach(_=>gn(_,()=>a(o0(t,Number(_.dataset.s)),"clink"))),o.querySelectorAll("[data-b]").forEach(_=>gn(_,()=>a(hS(t,Number(_.dataset.b),c,l))));return}if(e==="books"){o.innerHTML='<div class="sgreet">"Fifty cents a page. Kidding. Mostly."</div>'+fd.map((p,g)=>{const _=Qs[p.book];return`<div class="srow"><div><div class="sname" style="color:${Cr(_)}">${De[_].name}${t.own.books.includes(p.book)?" (read)":""}</div><div class="snote">${De[_].effect}</div></div><div style="display:flex;gap:6px"><button class="obtn" data-b="${g}">$${p.price}</button><button class="obtn" data-t="${g}" style="background:#c44;color:#fff">Steal</button></div></div>`}).join(""),o.querySelectorAll("[data-b]").forEach(p=>gn(p,()=>a(uS(t,Number(p.dataset.b),c,l),"sparkle"))),o.querySelectorAll("[data-t]").forEach(p=>gn(p,()=>a(dS(t,Number(p.dataset.t),c,l),"sparkle")));return}const h=Number(e.slice(6)),d=(1-i0(t))/2;o.innerHTML=`<div class="sgreet">Tap when the marker is in the green. Quick, people are walking by.</div>
    <div class="obar"><div class="zone" style="left:${(.5-d)*100}%;width:${d*200}%"></div><div class="mk"></div></div><button class="obtn" data-a="pick">Now!</button>`,gn(o.querySelector("[data-a=pick]"),()=>{const p=o.querySelector(".obar").getBoundingClientRect(),g=o.querySelector(".mk").getBoundingClientRect(),_=(g.left+g.width/2-p.left)/p.width,m=s0(t,h,1-Math.abs(_-.5)*2);i.sound(m==="got"?"sparkle":"nope"),i.flush(),i.close()})}let Ct=null,Ji=null,_u=null,ll=!1;const pc=[];function Fw(){try{if(!Ct){const n=window.AudioContext||window.webkitAudioContext;if(!n)return;Ct=new n,Ji=Ct.createGain(),Ji.gain.value=ll?0:.55,Ji.connect(Ct.destination),_u=Ct.createBuffer(1,Ct.sampleRate,Ct.sampleRate);const e=_u.getChannelData(0);for(let i=0;i<e.length;i++)e[i]=Math.random()*2-1;const t=Ct.createBufferSource();t.buffer=Ct.createBuffer(1,1,22050),t.connect(Ct.destination),t.start(0)}Ct.state==="suspended"&&Ct.resume()}catch{}}function Ow(){try{Ct&&Ct.state==="running"&&Ct.suspend()}catch{}}function L0(n){ll=n,Ji&&(Ji.gain.value=n?0:.55)}const Ka=()=>ll,Bw=()=>Ct?Ct.state:"none";function jt(n,e,t,i,s,r,o){const a=Ct,c=a.createOscillator(),l=a.createGain();return c.type=n,c.frequency.setValueAtTime(e,i),t!==e&&c.frequency.exponentialRampToValueAtTime(Math.max(1,t),i+s),l.gain.setValueAtTime(1e-4,i),l.gain.exponentialRampToValueAtTime(r,i+Math.min(.012,s/4)),l.gain.exponentialRampToValueAtTime(1e-4,i+s),c.connect(l).connect(o??Ji),c.start(i),c.stop(i+s+.02),c}function th(n,e,t,i,s,r=1){const o=Ct,a=o.createBufferSource();a.buffer=_u;const c=o.createBiquadFilter();c.type=i,c.frequency.value=s,c.Q.value=r;const l=o.createGain();l.gain.setValueAtTime(t,n),l.gain.exponentialRampToValueAtTime(1e-4,n+e),a.connect(c).connect(l).connect(Ji),a.start(n,Math.random()*.5),a.stop(n+e+.02)}function Oe(n,e={}){if(pc.push({name:n,t:performance.now()}),pc.length>60&&pc.shift(),!Ct||!Ji||Ct.state!=="running"||ll)return;const t=Ct.currentTime+.005,i=e.pitch??1,s=e.vol??1;switch(n){case"step":th(t,.05,.12*s,"bandpass",900*i,2),jt("sine",140*i,90*i,t,.05,.08*s);break;case"coin":jt("square",988,988,t,.07,.12*s),jt("square",1319,1319,t+.07,.22,.12*s);break;case"clink":jt("sine",2650*i,2600*i,t,.35,.16*s),jt("sine",3910*i,3900*i,t,.22,.08*s),jt("sine",2650*i*1.06,2600*i,t+.09,.25,.1*s);break;case"gulp":for(let r=0;r<3;r++)jt("sine",320-r*30,120,t+r*.17,.13,.35*s);th(t+.52,.12,.08,"lowpass",600);break;case"horn":{const r=Ct.createBiquadFilter();r.type="lowpass",r.frequency.value=1400,r.connect(Ji),jt("sawtooth",349*i,349*i,t,.38,.12*s,r),jt("sawtooth",440*i,440*i,t,.38,.1*s,r);break}case"hit":th(t,.35,.6*s,"lowpass",1800),jt("sine",120,40,t,.35,.6*s),jt("square",70,50,t,.12,.2*s);break;case"whistle":{const r=jt("sine",2900,2900,t,.6,.18*s),o=Ct.createOscillator(),a=Ct.createGain();o.frequency.value=28,a.gain.value=220,o.connect(a).connect(r.frequency),o.start(t),o.stop(t+.62);break}case"sparkle":{[1047,1319,1568,2093,2637].forEach((o,a)=>jt("triangle",o*i,o*i,t+a*.055,.28,.1*s));break}case"heart":jt("sine",62,45,t,.14,.55*s),jt("sine",58,42,t+.2,.16,.4*s);break;case"pop":jt("sine",500*i,1100*i,t,.09,.2*s);break;case"tap":jt("triangle",660,660,t,.05,.08*s);break;case"nope":jt("square",220,160,t,.15,.08*s);break}}const Fc=[{rows:240,shadow:0,glow:!1},{rows:320,shadow:512,glow:!0},{rows:420,shadow:1024,glow:!0}],zw=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Hw=`
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
`;class Gw{constructor(e){this.renderer=e,this.qScene=new Rm,this.qCam=new Jc(-1,1,1,-1,0,1),this.rows=420,this.scale=2,this.lowW=1,this.lowH=1,this.rt=new Rs(4,4,{minFilter:qt,magFilter:qt,type:fo,depthBuffer:!0}),this.u={tScene:{value:this.rt.texture},res:{value:new Ie(4,4)},sat:{value:1},warm:{value:0},contrast:{value:1},glow:{value:0},red:{value:0},jitter:{value:0},time:{value:0},bright:{value:1},scale:{value:2},tDepth:{value:null},cnear:{value:.1},cfar:{value:160},flood:{value:0},tilt:{value:0},outline:{value:0},pal:{value:[16735370,16758784,3526842,7097343,16747084].map(t=>new Te(t))}},this.rt.depthTexture=new ju(4,4),this.u.tDepth.value=this.rt.depthTexture,this.quad=new qe(new ns(2,2),new ts({uniforms:this.u,vertexShader:zw,fragmentShader:Hw,depthTest:!1,depthWrite:!1})),this.quad.frustumCulled=!1,this.qScene.add(this.quad)}setSize(e,t,i){this.rows=i,this.scale=Math.max(1,Math.round(t/i)),this.lowH=Math.ceil(t/this.scale),this.lowW=Math.ceil(e/this.scale),this.u.scale.value=this.scale,this.rt.setSize(this.lowW,this.lowH),this.u.res.value.set(this.lowW,this.lowH)}render(e,t,i,s,r){this.u.sat.value=i.sat,this.u.warm.value=i.warm,this.u.contrast.value=i.contrast,this.u.glow.value=r?i.glow:0,this.u.red.value=i.red,this.u.jitter.value=i.jitter,this.u.time.value=s,this.u.bright.value=i.bright,this.u.flood.value=i.flood??0,this.u.tilt.value=i.tilt??0,this.u.outline.value=i.outline??0;const o=t;o.isPerspectiveCamera&&(this.u.cnear.value=o.near,this.u.cfar.value=o.far),this.renderer.setRenderTarget(this.rt),this.renderer.render(e,t),this.renderer.setRenderTarget(null),this.renderer.render(this.qScene,this.qCam)}}const ui=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255],bs=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],co=(n,e,t)=>{const i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)},Za=[{f:0,phase:"dawn",sky:15910084,sun:16758952,sunI:1.3,hemiSky:15782112,hemiGround:6967392,hemiI:1.35,warm:.45,bright:1},{f:.12,phase:"morning",sky:15917752,sun:16773320,sunI:2.2,hemiSky:16051414,hemiGround:6971472,hemiI:1.62,warm:.35,bright:1.06},{f:.35,phase:"noon",sky:12575462,sun:16775920,sunI:2.6,hemiSky:15267060,hemiGround:8025192,hemiI:1.82,warm:.2,bright:1.1},{f:.58,phase:"afternoon",sky:15128752,sun:16771264,sunI:2.3,hemiSky:16049868,hemiGround:7233616,hemiI:1.62,warm:.4,bright:1.06},{f:.68,phase:"dusk",sky:15897948,sun:16751184,sunI:1.8,hemiSky:15773840,hemiGround:5913152,hemiI:1.28,warm:.8,bright:1},{f:.78,phase:"night",sky:2899052,sun:9085183,sunI:.45,hemiSky:5929168,hemiGround:1710640,hemiI:.81,warm:.15,bright:.98},{f:.96,phase:"late",sky:1844816,sun:7375072,sunI:.35,hemiSky:5269672,hemiGround:1315880,hemiI:.68,warm:.1,bright:.96},{f:1,phase:"dawn",sky:15910084,sun:16758952,sunI:1.3,hemiSky:15782112,hemiGround:6967392,hemiI:1.35,warm:.45,bright:1}],$r=[16735370,16758784,3526842,7097343,16747084];function Vw(n){return n>=.5?co(.66,.72,n):1-co(.02,.06,n)}function Oc(n){n=(n%1+1)%1;let e=0;for(;e<Za.length-2&&n>=Za[e+1].f;)e++;const t=Za[e],i=Za[e+1],s=co(0,1,(n-t.f)/(i.f-t.f)),r=Vw(n);return{phase:s<.5?t.phase:i.phase,sky:bs(ui(t.sky),ui(i.sky),s),sun:bs(ui(t.sun),ui(i.sun),s),sunI:t.sunI+(i.sunI-t.sunI)*s,hemiSky:bs(ui(t.hemiSky),ui(i.hemiSky),s),hemiGround:bs(ui(t.hemiGround),ui(i.hemiGround),s),hemiI:t.hemiI+(i.hemiI-t.hemiI)*s,warm:t.warm+(i.warm-t.warm)*s,bright:t.bright+(i.bright-t.bright)*s,lamps:r,windows:Math.max(r,n>.62&&n<.72?co(.62,.7,n)*.5:0),neon:.25+.75*r,sunH:n<.72?Math.sin(n/.72*Math.PI):.15}}function Ww(n){const e=$r.length,t=(n/4%e+e)%e,i=Math.floor(t);return bs(ui($r[i]),ui($r[(i+1)%e]),co(0,1,t-i))}function Xw(n,e,t){const i=Oc(n).sky,s=Ww(t),r=Oc(n).lamps,o=bs(s,bs(s,ui(2758736),.35),r);return bs(i,o,co(0,.6,e))}const Dt={runMul:1.75,staminaMax:100,runDrain:24,regen:16,runResume:25,jumpV:6.4,gravity:19,coyote:.12,buffer:.15,stepUp:.3,climb:.55,rollTime:.55,slideTime:.45,tripTime:.9,longPush:.6},$w=()=>({y:0,vy:0,onGround:!0,coyote:0,buffer:0,stamina:Dt.staminaMax,running:!1,dry:!1,pushT:0,roll:0,slide:0,trip:0,slideVx:0,slideVz:0,lastSpeed:0});function vd(n){n.buffer=Dt.buffer}function jw(n,e,t){n.pushT=e.il>.92?n.pushT+t:0;const i=e.il>.3&&(e.runHeld||n.pushT>Dt.longPush);return n.dry&&n.stamina>=Dt.runResume&&(n.dry=!1),i&&!n.dry&&n.stamina>0}function qw(n,e,t,i=Math.random){const s=[];n.running=jw(n,e,t)&&n.roll<=0&&n.trip<=0,n.running?(n.stamina=Math.max(0,n.stamina-Dt.runDrain*t),n.stamina<=0&&(n.dry=!0)):n.stamina=Math.min(Dt.staminaMax,n.stamina+Dt.regen*t);let r=e.vx*(n.running?Dt.runMul:1),o=e.vz*(n.running?Dt.runMul:1);n.trip>0?(n.trip-=t,r=o=0):e.drunk>.45&&e.il>.3&&n.onGround&&i()<(e.drunk-.4)*(n.running?.5:.18)*t&&(n.trip=Dt.tripTime,s.push("trip"),r=o=0);const a=Math.hypot(r,o);if(n.slide>0){n.slide-=t;const u=Math.max(0,n.slide/Dt.slideTime);r=n.slideVx*u,o=n.slideVz*u}else n.onGround&&n.lastSpeed>6&&a<.5&&(e.wet||e.drunk>.3)&&(n.slide=Dt.slideTime,s.push("slide"),r=n.slideVx,o=n.slideVz);a>.5&&(n.slideVx=r,n.slideVz=o),n.lastSpeed=n.slide>0?0:a,n.roll>0&&(n.roll-=t,r=n.slideVx*1.1,o=n.slideVz*1.1),n.buffer=Math.max(0,n.buffer-t),n.coyote=n.onGround?Dt.coyote:Math.max(0,n.coyote-t),n.buffer>0&&(n.onGround||n.coyote>0)&&n.trip<=0&&(n.buffer=0,n.coyote=0,n.onGround=!1,n.vy=Dt.jumpV*(e.drunk>.5?.8:1),s.push("jump"),e.drunk>.5&&(n.roll=Dt.rollTime,s.push("roll")));let c=!1;const l=e.ground-n.y;l>Dt.stepUp&&(!n.onGround&&l<=Dt.climb&&n.vy<3?(n.y=e.ground,n.vy=0,n.onGround=!0,s.push("climb")):c=!0);const h=c?e.groundHere:e.ground;if(n.onGround&&(h<n.y-.05?(n.onGround=!1,n.vy=0):n.y=h),!n.onGround&&(n.vy-=Dt.gravity*t,n.y+=n.vy*t,n.y<=h)){const u=n.vy<-7;n.y=h,n.vy=0,n.onGround=!0,s.push("land"),u&&s.push("puff"),e.drunk>.5&&n.roll<=0&&i()<e.drunk*.5&&(n.roll=Dt.rollTime,s.push("roll"))}return c&&(r=0,o=0),{vx:r,vz:o,blocked:c,events:s}}function Ip(n,e,t){let i=0;for(const s of n)e>=s.x0&&e<=s.x1&&t>=s.z0&&t<=s.z1&&s.h>i&&(i=s.h);return i}const Yw={bin:"Kick bin",lamp:"Swing!",trolley:"Ride trolley",phone:"Prank call",fountain:"Splash",vending:"Shake it",news:"Read paper",door:"Knock",pigeons:"Shoo!",meter:"Check meter",busstop:"Wait for bus",mailbox:"Post a note",piano:"Play piano",graffiti:"Tag wall",sprinkler:"Dance in it",hydrant:"Open hydrant"};function Kw(n,e,t){const i=s=>e.high?s*1.6:s;switch(n){case"bin":return t<.15&&!e.usedToday?{say:"A coin falls out of the rubbish!",sound:"coin",money:1,whimsy:i(2),fx:"litter",anim:"interact-right"}:{say:"Litter everywhere. Glorious.",sound:"hit",whimsy:i(3),fx:"litter",trouble:t>.85,anim:"interact-right"};case"lamp":return{say:"Wheee! Round the lamp post.",sound:"sparkle",whimsy:i(5),fx:"spin"};case"trolley":return{say:"Trolley ride! Wind in the hair.",sound:"clink",whimsy:i(6),fx:"ride",trouble:e.high&&t>.8};case"phone":return t<.3&&!e.usedToday?{say:"Found a coin in the return slot.",sound:"coin",money:1,anim:"pick-up"}:{say:'"Is your fridge running?" They hung up.',sound:"tap",whimsy:i(4),anim:"emote-yes"};case"fountain":return t<.5?{say:"A cold drink. Lovely.",sound:"gulp",health:3,anim:"pick-up"}:{say:"Splash! Everyone nearby gets wet.",sound:"pop",whimsy:i(4),fx:"splash",wet:!0};case"vending":return t<.35?{say:"Clunk. A free can!",sound:"clink",health:2,whimsy:i(3),anim:"interact-right"}:t<.55?{say:"It tips. Ouch.",sound:"hit",health:-6,anim:"emote-no"}:{say:"Nothing. It hums at you.",sound:"nope",trouble:t>.9,anim:"interact-right"};case"news":return{say:t<.5?'"LOCAL MAN STILL FINE." Good.':"Horoscope says: big day. Sure.",sound:"tap",whimsy:i(2),anim:"pick-up"};case"door":return t<.2&&!e.usedToday?{say:"A nice lady hands you a dollar.",sound:"coin",money:1,anim:"emote-yes"}:{say:e.night?`"It's 2am!" Fair.`:"Nobody home.",sound:"tap",trouble:e.night&&t>.7,anim:"interact-right"};case"pigeons":return{say:"Pigeons everywhere!",sound:"pop",whimsy:i(3),fx:"feathers",anim:"jump"};case"meter":return t<.25&&!e.usedToday?{say:"Two quarters in the slot!",sound:"coin",money:1,anim:"pick-up"}:{say:"Expired. Like my dreams. Ha!",sound:"nope",anim:"interact-right"};case"busstop":return t<.5?{say:"The bus splashes you and goes. Classic.",sound:"horn",whimsy:i(3),fx:"bus",wet:!0,anim:"sit"}:{say:"A nice sit. Bus never came.",sound:"tap",health:2,anim:"sit"};case"mailbox":return{say:'Posted: "Dear City, thanks." No stamp.',sound:"tap",whimsy:i(3),anim:"interact-right"};case"piano":return{say:"Plink plonk! People clap.",sound:"sparkle",whimsy:i(7),money:t<.3&&!e.usedToday?1:0,fx:"notes",anim:"interact-right"};case"graffiti":return{say:"A smiley the size of a door.",sound:"pop",whimsy:i(6),fx:"paint",trouble:t>.6,anim:"interact-right"};case"sprinkler":return{say:"Sprinkler dance!",sound:"sparkle",whimsy:i(6),fx:"splash",wet:!0,anim:"emote-yes"};case"hydrant":return{say:"Whoosh! A street fountain.",sound:"pop",whimsy:i(5),fx:"splash",wet:!0,trouble:t>.5,anim:"interact-right"}}}const Er=n=>n>=4&&n<=10||n>=-7&&n<=-4?.2:0;let Lp=7;const Ja=()=>(Lp=Lp*16807%2147483647)/2147483647;class Zw{constructor(){this.things=[],this.plats=[],this.puddles=[],this.trolleys=[],this.neonBase=[],this.parts=[],this.cur=[]}box(e,t,i,s,r,o,a,c=0,l=this.cur){const h=new si(e,t,i);c&&h.rotateY(c),h.translate(r,o+t/2,a),Qa(h,s),l.push(h)}cyl(e,t,i,s,r,o,a=8,c=this.cur){const l=new _i(e,e,t,a);l.translate(s,r+t/2,o),Qa(l,i),c.push(l)}shadow(e,t,i){const s=new Js(i,10).toNonIndexed();s.rotateX(-Math.PI/2),s.translate(e,Er(t)+.012,t),Qa(s,Er(t)>0?9406588:5204544),this.cur.push(Pp(s))}flush(e){if(!this.cur.length)return;const t=_p(this.cur,!1);this.cur.forEach(i=>i.dispose()),this.cur=[],this.parts.push({g:t,x:e})}thing(e,t,i){this.things.push({id:this.things.length,kind:e,x:t,z:i})}build(e,t,i){const s=[15130064,12043442,13212810,9413557,16051158,15247484,8368296,14205040];for(let f=-108;f<110;f+=54){for(let v=f;v<f+54;v+=1){const y=Ja();if(v%7===0&&y<.5)this.box(1.1,.45,.7,11565658,v,.2,9.2),this.box(.9,.5,.5,7314008,v,.65,9.2),this.shadow(v,9.2,.9),this.plats.push({x0:v-.55,x1:v+.55,z0:8.85,z1:9.55,h:.65});else if(v%9===3)this.box(.9,1.2,.04,s[Math.floor(y*s.length)],v,1.1,9.86),this.box(.7,.25,.05,16051158,v,1.9,9.85);else if(v%11===5)this.box(.06,.06,.6,3027512,v,3.1,9.6),this.box(.08,.6,.7,s[(v+200)%s.length],v,2.4,9.4);else if(v%13===8)for(let x=0;x<4;x++)this.box(.5,.08,1.1,x%2?16051158:s[(v+300)%3+5],v-.75+x*.5,2.6,9.3,0);v%6===1&&Ja()<.5&&(this.cyl(.12,.6,5922662,v,.2,-4.5,6),this.shadow(v,-4.5,.3)),v%10===4&&(this.box(.6,.3,.6,13212810,v,.2,-6.6),this.box(.5,.35,.5,15239840,v,.5,-6.6))}for(const v of t)v.x>=f&&v.x<f+54&&v.z>0&&this.box(16,.04,.04,2763312,v.x+8,4.25,v.z+.6);this.flush(f+27)}const r=(f,v,y,x)=>{x(),this.thing(f,v,y)},o=(f,v)=>r("bin",f,v,()=>{const y=Er(v);this.cyl(.35,.8,4880986,f,y,v,8),this.cyl(.4,.08,3027512,f,y+.8,v,8),this.shadow(f,v,.55)});[-30,18,40,-80,92].forEach(f=>o(f,9.3));const a=f=>r("hydrant",f,4.7,()=>{this.cyl(.18,.55,13650490,f,.2,4.7,8),this.cyl(.24,.1,13650490,f,.75,4.7,8),this.box(.5,.1,.12,13650490,f,.5,4.7),this.shadow(f,4.7,.35)});[-34,6,52,96].forEach(a);const c=(f,v)=>r("phone",f,v,()=>{const y=Er(v);this.box(1,2.3,1,13123626,f,y,v),this.box(.8,1.4,.05,12575462,f,y+.6,v+(v>0?-.5:.5)),this.box(1.1,.2,1.1,9054746,f,y+2.3,v),this.shadow(f,v,.8)});c(-6,9),c(70,-5.8);const l=f=>r("vending",f,9.35,()=>{this.box(1.1,2,.7,3828432,f,.2,9.35),this.box(.8,1.1,.05,16051158,f-.1,.9,8.98),this.shadow(f,9.35,.8)});l(10),l(58);const h=f=>r("news",f,9.3,()=>{this.box(.6,.9,.5,3111562,f,.2,9.3),this.box(.5,.3,.05,16051158,f,.75,9.04),this.shadow(f,9.3,.5)});h(36),h(-48);const u=f=>r("door",f,9.8,()=>{this.box(1.2,2.1,.1,8014378,f,.2,9.86),this.box(.12,.12,.1,14729312,f+.4,1.2,9.78),this.box(1.6,.15,.6,12043442,f,2.4,9.6)});u(-40),u(-84),u(-96);const d=f=>r("meter",f,4.6,()=>{this.cyl(.06,1.1,5922662,f,.2,4.6,6),this.box(.3,.4,.22,9080984,f,1.3,4.6),this.shadow(f,4.6,.25)});[-26,44,86,-66].forEach(d);const p=f=>r("mailbox",f,9.3,()=>{this.box(.6,1,.6,3166384,f,.2,9.3),this.cyl(.3,.6,3166384,f,1,9.3,8),this.shadow(f,9.3,.5)});p(-12),p(80),r("busstop",20,-5.6,()=>{this.box(3.4,.08,1.2,9413557,20,2.4,-6.2),this.box(3.4,2.2,.06,12575462,20,.2,-6.8),this.box(.08,2.2,.08,5922662,18.4,.2,-5.7),this.box(.08,2.2,.08,5922662,21.6,.2,-5.7),this.box(2.6,.1,.5,10118192,20,.6,-6.4),this.box(.6,.6,.06,16758784,22.2,2,-5),this.shadow(20,-6.2,1.8)}),this.plats.push({x0:18.7,x1:21.3,z0:-6.65,z1:-6.15,h:.7}),r("piano",-74,-9.5,()=>{this.box(1.6,1.2,.6,13130378,-74,0,-9.8),this.box(1.6,.06,.3,16051158,-74,.8,-9.4),this.box(.8,.45,.4,6965802,-74,0,-9),this.shadow(-74,-9.6,1.1)}),r("graffiti",47,-7.6,()=>{this.box(8,.9,.4,13220008,47,0,-8);for(let f=0;f<6;f++)this.box(1+Ja(),.5,.04,$r[f%5],44+f*1.2,.2,-7.78)}),this.plats.push({x0:43,x1:51,z0:-8.2,z1:-7.8,h:.9}),this.thing("fountain",Pe.fountain.x,Pe.fountain.z+2.4),this.thing("pigeons",Pe.pigeons.x,Pe.pigeons.z),this.thing("pigeons",Pe.pigeons2.x,Pe.pigeons2.z),this.thing("sprinkler",Pe.sprinkler.x,Pe.sprinkler.z);for(const f of t)this.thing("lamp",f.x,f.z);for(const[f,v,y]of[[-98,-90,.55],[-82,-76,.55],[-48,-42,.55],[-70,-66,.42]]){const x=v===-66?-15:-7.6;this.box(v-f,y,.35,y<.5?16051158:13220008,(f+v)/2,0,x),this.plats.push({x0:f,x1:v,z0:x-.2,z1:x+.2,h:y})}for(const[f,v]of[[-14,6.2],[28,-5.2],[-56,6.5],[62,6],[-64,-10],[8,-10.5]]){const y=new Js(.9,12).toNonIndexed();y.rotateX(-Math.PI/2),y.scale(1.3,1,.8),y.translate(f,Er(v)+.015,v),Qa(y,6981800),this.cur.push(Pp(y)),this.puddles.push({x:f,z:v,r:1})}this.flush(0);const g=new Xn({vertexColors:!0});for(const f of this.parts){const v=new qe(f.g,g);v.castShadow=!0,v.receiveShadow=!0,e.add(v),f.x!==0&&i(v,f.x)}for(const[f,v]of[[-18,5.6],[-58,5.6],[30,-5.4]]){const y=[];this.box(1,.6,.7,12107976,0,.45,0,0,y),this.box(.9,.05,.6,9080984,0,.2,0,0,y),this.box(.06,.4,.7,13650490,-.55,.75,0,0,y);for(const[A,R]of[[-.4,-.3],[.4,-.3],[-.4,.3],[.4,.3]])this.box(.1,.16,.1,2763312,A,0,R,0,y);const x=new qe(_p(y,!1),g);x.castShadow=!0,x.position.set(f,Er(v),v),e.add(x);const C={id:this.things.length,kind:"trolley",x:f,z:v};this.things.push(C),this.trolleys.push({g:x,home:x.position.clone(),thing:C})}const _=14;this.neon=new tl(new si(2,.45,.06),new In({color:16777215}),_);const m=new Ne;for(let f=0;f<_;f++){const v=38+f*2.6+Ja(),y=3.2+f%3*.9;m.makeTranslation(v,y,9.82),this.neon.setMatrixAt(f,m);const x=new Te($r[f%$r.length]);this.neonBase.push(x),this.neon.setColorAt(f,x)}e.add(this.neon)}nearest(e,t,i=1.8){let s=null,r=i;for(const o of this.things){const a=Math.hypot(o.x-e,o.z-t);a<r&&(r=a,s=o)}return s}inPuddle(e,t){return this.puddles.some(i=>Math.hypot(i.x-e,i.z-t)<i.r)}}function Qa(n,e){const t=new Te(e),i=n.attributes.position.count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;n.setAttribute("color",new en(s,3))}function Pp(n){const e=n.attributes.position.count;return n.setIndex([...Array(e).keys()]),n}function nt(n){return n.city||(n.city={op:{},niceDay:{},perkDay:{},rep:0,quests:{},heat:{},arrests:0,debt:0,faces:0,nemesis:{runins:0,name:null},wallet:!1,secretSpot:!1,day:{},copKind:"rookie"}),n.city}function ir(...n){return(tr(n.join("|"))>>>0)/4294967296}const yd=(n,e,t)=>Math.max(e,Math.min(t,n)),Jw=(n,e)=>n.messages.push(e),P0=[{id:"dov",name:"Dov",who:"office guy, 8:40 sharp",kind:"office",tint:6982344,t0:.03,t1:.2,x0:-45,x1:45,z:5.6,loops:1},{id:"rina",name:"Rina",who:"café owner",kind:"rich",tint:14721136,t0:0,t1:.7,x0:14,x1:18,z:6.3,loops:6},{id:"esther",name:"Esther",who:"old lady with the dog",kind:"oldlady",tint:13148368,t0:.12,t1:.45,x0:38,x1:70,z:-5.6,loops:3},{id:"moshe",name:"Big Moshe",who:"bar bouncer",kind:"party",tint:3158064,t0:.68,t1:1,x0:-62,x1:-58,z:6.3,loops:4},{id:"noa",name:"Noa",who:"the jogger",kind:"jogger",tint:15753344,t0:.05,t1:.25,x0:-80,x1:80,z:-5.6,loops:2},{id:"yossi",name:"Yossi",who:"street sweeper",kind:"office",tint:15769632,t0:0,t1:.5,x0:-50,x1:20,z:5.6,loops:3},{id:"tamar",name:"Tamar",who:"flower stall",kind:"oldlady",tint:8437856,t0:.18,t1:.65,x0:-26,x1:-22,z:-6.3,loops:4},{id:"avi",name:"Avi",who:"bus driver on break",kind:"office",tint:4219040,t0:.3,t1:.6,x0:76,x1:84,z:6.3,loops:3},{id:"lior",name:"Lior",who:"the student",kind:"tourist",tint:6340800,t0:.35,t1:.8,x0:30,x1:-30,z:-5.6,loops:1},{id:"levi",name:"Mrs. Levi",who:"rich lady, pearls",kind:"rich",tint:15786224,t0:.4,t1:.6,x0:60,x1:92,z:5.6,loops:1},{id:"shai",name:"Shai",who:"busker",kind:"party",tint:10510560,t0:.45,t1:.75,x0:-2,x1:2,z:-6.3,loops:5},{id:"gil",name:"Gil",who:"night cook",kind:"office",tint:15263976,t0:.66,t1:.9,x0:-10,x1:-70,z:5.6,loops:1}];function Qw(n,e,t=0){const i=e>=n.t0&&e<n.t1,s=yd((e-n.t0)/(n.t1-n.t0),0,1)*n.loops,r=Math.floor(s),o=s-r,a=r%2===0,c=a?n.x0+(n.x1-n.x0)*o:n.x1+(n.x0-n.x1)*o,l=t<=-2?-Math.sign(n.z)*5.6:n.z;return{x:c,z:l,out:i,dir:Math.sign(a?n.x1-n.x0:n.x0-n.x1)||1}}const Uo=["😠","🙁","😐","🙂","😄"];function eT(n){return n<=-3?Uo[0]:n<0?Uo[1]:n===0?Uo[2]:n<3?Uo[3]:Uo[4]}const Dn=(n,e)=>nt(n).op[e]??0;function Li(n,e,t){const i=nt(n);i.op[e]=yd((i.op[e]??0)+t,-3,3)}const Md=(n,e)=>{const t=nt(n);t.rep=yd(t.rep+e,0,10)};function kp(n,e){const t=nt(n),i=jr(e);if(t.niceDay[e]!==n.day){t.niceDay[e]=n.day;const r=Dn(n,e);Li(n,e,1),r<3&&Dn(n,e)===3&&Md(n,1)}const s=Dn(n,e);return s>=2&&t.perkDay[e]!==n.day?(t.perkDay[e]=n.day,s>=3?(n.hunger=Math.min(100,n.hunger+15),n.whimsy=Math.min(100,n.whimsy+10),`${i} brings you a hot coffee. "Same time tomorrow?"`):(n.money+=2,`${i}: "Here, friend." +$2`)):s>=1?`${i}: "Hi! Morning!"`:s<0?`${i} looks away.`:`${i} nods.`}function k0(n,e){return Li(n,e,-1),Dn(n,e)<=-3?{text:`${jr(e)}: "That's it, I'm calling the police!"`,callCop:!0}:ir(n.seed,n.day,e,n.time.toFixed(1))<.35?(n.money+=1,{text:`${jr(e)} throws a coin to get rid of you. +$1`,callCop:!1}):{text:`${jr(e)}: "Leave me alone."`,callCop:!1}}function tT(n,e){let t=0;for(const i of e)i.dist<10?Li(n,i.id,-2):i.sameArea&&(Li(n,i.id,-1),t++);return Md(n,-1),t?"Word gets around. People here are warning each other about you.":null}const bd=[{id:"zeev",name:"Zeev",role:"trader",x:-20,z:-13,tint:9071162,kind:"office"},{id:"shlomo",name:"Old Shlomo",role:"oldtimer",x:8,z:18,tint:8026730,kind:"oldlady"},{id:"kobi",name:"Kobi",role:"rival",x:-6,z:-6.6,tint:10107450,kind:"party"},{id:"mazal",name:"Mazal",role:"friend",x:46,z:-12,tint:6986330,kind:"oldlady"},{id:"fox",name:"Fox",role:"thief",x:20,z:-6.6,tint:2763322,kind:"jogger"}],nT=Object.fromEntries([...P0,...bd].map(n=>[n.id,n.name])),jr=n=>nT[n]??n;function iT(n,e){const t=[{x:-6,z:-6.6},{x:22,z:6.6},{x:-40,z:-6.6},{x:60,z:6.6}];return t[Math.floor(ir(n,e,"rival")*t.length)]}function sT(n){if(Dn(n,"kobi")>=2)return 0;let e=0;for(let t=0;t<n.bottlesLeft.length&&e<2;t++)n.bottlesLeft[t]&&ir(n.seed,n.day,"kobi",t)<.4&&(n.bottlesLeft[t]=!1,e++);return e&&Jw(n,`Kobi got to ${e} of your bottles first.`),e}function rT(n){return Li(n,"kobi",-1),nt(n).day.rival=n.day,'Kobi: "Fine, FINE. This corner stinks anyway."'}function oT(n){return n.money<2?"You have nothing to share.":(n.money-=2,Li(n,"kobi",1),Dn(n,"kobi")>=2?'Kobi: "Alright, brother. Your bottles are yours."':'Kobi pockets the $2. "Hm."')}const aT=n=>nt(n).day.rival!==n.day&&Dn(n,"kobi")<2,cT=[{label:"2 bottles for bread",cost:{bottles:2},get:"bread",rep:0},{label:"$4 for a lighter",cost:{money:4},get:"lighter",rep:0},{label:"$6 for a poncho",cost:{money:6},get:"poncho",rep:2},{label:"$12 for a sleeping bag (best stock)",cost:{money:12},get:"sleepingBag",rep:4}],Dp=n=>cT.filter(e=>nt(n).rep>=e.rep);function lT(n,e=0,t=0){const i=Dp(n).filter(r=>(r.cost.money??0)<=n.money&&(r.cost.bottles??0)<=n.bottles),s=i[i.length-1];return s?(n.money-=s.cost.money??0,n.bottles-=s.cost.bottles??0,Bt(n,s.get,e,t,{},!0),Li(n,"zeev",1),`Zeev: "Deal." ${s.label}.`):`Zeev: "Come back with something. ${Dp(n).map(r=>r.label).join(", ")}."`}function hT(n){const e=nt(n);return Dn(n,"mazal")<0?"Mazal turns her back.":e.day.food===n.day?'Mazal: "Tomorrow, habibi. That was all of it."':(e.day.food=n.day,n.hunger=Math.min(100,n.hunger+30),Li(n,"mazal",1),"Mazal shares half her sandwich. +hunger")}const uT=(n,e)=>Dn(n,"mazal")>=1&&e>=40;function dT(n,e,t){const i=nt(n);if(!e||t>2||i.day.thief===n.day||!n.sitting||n.money<=0)return null;if(i.day.thief=n.day,Dn(n,"fox")>=2)return n.money+=3,`Fox slips you $3 from someone else's pocket. "Professional courtesy."`;const s=Math.ceil(n.money*.4);return n.money-=s,`Fox lifted $${s} while you sat. Thief!`}function fT(n){return Li(n,"fox",1),nt(n).day.thief=n.day,'Fox: "Ha. Eyes open. I respect that."'}const lo={x:86,z:-12};function pT(n){const e=nt(n);if(!e.secretSpot)return"";if(e.day.secret===n.day)return"You already worked the station steps today.";e.day.secret=n.day;const t=6+Math.floor(ir(n.seed,n.day,"secret")*6);return n.money+=t,`Tourists off the train tip well on the station steps. +$${t}`}const vs=[{id:"cat",giver:"esther",text:"Find my lost cat",need:"cat",reward:{money:8,op:1,rep:1}},{id:"stall",giver:"tamar",text:"Watch my stall for 2 minutes",need:"wait",n:120,reward:{money:10,op:1}},{id:"coffee",giver:"dov",text:"Bring me a hot coffee ($3)",need:"pay",n:3,reward:{money:8,op:1}},{id:"wallet",giver:"moshe",text:"Return the wallet someone dropped",need:"wallet",reward:{money:15,rep:2}},{id:"bottles",giver:"yossi",text:"Bring me 3 bottles for the deposit",need:"bottles",n:3,reward:{item:"gloves",op:1}},{id:"note",giver:"shlomo",text:"Take this note to Rina at the café",need:"talk",to:"rina",reward:{money:5,rep:1}},{id:"tour",giver:"shlomo",text:"Walk 3 parts of town today",need:"areas",n:3,reward:{rep:1,item:"beanie"}},{id:"smile",giver:"noa",text:"Get your whimsy over 60",need:"whimsy",n:60,reward:{money:6,op:1}}];function mT(n,e){var i;const t=nt(n);for(const s of vs)s.need===e&&((i=t.quests[s.id])==null?void 0:i.status)==="open"&&(t.quests[s.id].t=1)}function gT(n,e,t){var s;const i=nt(n);for(const r of vs)r.need==="wait"&&((s=i.quests[r.id])==null?void 0:s.status)==="open"&&t(r.giver)&&(i.quests[r.id].t+=e)}function _T(n,e){const t=nt(n).quests[e.id];switch(e.need){case"cat":return t.t>=1;case"wait":return t.t>=(e.n??0);case"pay":return n.money>=(e.n??0);case"wallet":return nt(n).wallet;case"bottles":return n.bottles>=(e.n??0);case"areas":return n.areasToday.length>=(e.n??0);case"whimsy":return n.whimsy>=(e.n??0);case"talk":return!1}}function Np(n,e){const t=nt(n);t.quests[e.id].status="done",e.need==="pay"&&(n.money-=e.n??0),e.need==="bottles"&&(n.bottles-=e.n??0),e.need==="wallet"&&(t.wallet=!1);const i=e.reward;i.money&&(n.money+=i.money),i.op&&Li(n,e.giver,i.op),Md(n,(i.rep??0)+1),i.item&&Bt(n,i.item,0,0,{},!0);const s=[i.money?`+$${i.money}`:"",i.item?`+${i.item}`:"",`+${(i.rep??0)+1} rep`].filter(Boolean).join(" ");return`Quest done: ${e.text}! ${s}`}function D0(n,e,t=0,i=0){var c;const s=nt(n);for(const l of vs)if(l.need==="talk"&&l.to===e&&((c=s.quests[l.id])==null?void 0:c.status)==="open")return Np(n,l);for(const l of vs.filter(h=>h.giver===e)){const h=s.quests[l.id];if((h==null?void 0:h.status)==="open"&&_T(n,l))return Np(n,l)}const r=vs.filter(l=>l.giver===e&&!s.quests[l.id]);if(r.length&&Dn(n,e)>=0&&!vs.some(l=>{var h;return l.giver===e&&((h=s.quests[l.id])==null?void 0:h.status)==="open"})){const l=r[0];return s.quests[l.id]={status:"open",t:0},`${jr(e)}: "${l.text}?" (quest taken)`}const o=bd.find(l=>l.id===e);if((o==null?void 0:o.role)==="trader")return lT(n,t,i);if((o==null?void 0:o.role)==="friend")return hT(n);if((o==null?void 0:o.role)==="oldtimer")return s.rep>=4&&!s.secretSpot?(s.secretSpot=!0,`Old Shlomo: "The station steps, after the 3 o'clock train. Don't tell Kobi."`):kp(n,e);if((o==null?void 0:o.role)==="rival")return oT(n);if((o==null?void 0:o.role)==="thief")return fT(n);const a=vs.find(l=>{var h;return l.giver===e&&((h=s.quests[l.id])==null?void 0:h.status)==="open"});return a?`${jr(e)}: "Still waiting on that: ${a.text}."`:kp(n,e)}const Up=n=>vs.filter(e=>{var t;return((t=nt(n).quests[e.id])==null?void 0:t.status)==="open"}),xu={rookie:{name:"Rookie cop",icon:"🔰",speed:.9,sight:.9,cone:.55},veteran:{name:"Veteran cop",icon:"⭐",speed:1,sight:1.25,cone:.7},bike:{name:"Bike cop",icon:"🚲",speed:1.6,sight:1,cone:.5},kind:{name:"Kind cop",icon:"🥪",speed:.85,sight:.9,cone:.6}},xT={theft:30,pester:10,passout:25,fight:35},Br=(n,e)=>nt(n).heat[e]??0;function hl(n,e,t){const i=nt(n);return i.heat[e]=Math.min(100,(i.heat[e]??0)+xT[t]),i.heat[e]}function vT(n){const e=nt(n);for(const t of Object.keys(e.heat))e.heat[t]=Math.floor((e.heat[t]??0)*.35),e.heat[t]||delete e.heat[t]}const yT=n=>1+(n>=40?1:0)+(n>=75?1:0);function MT(n,e,t,i,s){const r=ir(n,e,t,s,"cop"),o=i/100;return r<.15+.25*o?"veteran":r<.35+.35*o?"bike":r<.55+.2*o||i>=60?"rookie":"kind"}function bT(n,e,t,i,s,r,o){const a=i-n,c=s-e,l=Math.hypot(a,c);if(l>r)return!1;if(l<1.2)return!0;const h=-Math.sin(t),u=-Math.cos(t);return(a*h+c*u)/l>=Math.cos(o)}const ST=n=>n.inAlley||n.byDumpster||n.crowd>=3,Fp={talked:'You talk the rookie down. "Just... go home, man."',warning:'The kind cop hands you a sandwich. "Last warning, OK?" +hunger',move:'Cop: "Move along." He walks you off the block.',drink:"The cop pours your bottles into the gutter.",ticket:"A ticket. $20 you don't have. Debt +$20.",cell:"A night in the cell. You lose a day.",jail:"Third arrest. Jail."};function wT(n,e,t,i){const s=nt(n);if(e==="kind"&&t<75)return"warning";if(e==="rookie"&&i<.5&&t<60)return"talked";const r=e==="veteran"&&s.faces>=2,o=t+(r?30:0)+s.debt/2+(e==="veteran"?10:0);return o>=70?"cell":n.drinks.beer+n.drinks.vodka+n.drinks.wine+n.drinks.mix>0&&o>=20?"drink":o>=35?"ticket":"move"}function TT(n,e){const t=nt(n);if(e==="ticket"&&(t.debt+=20),e==="drink"&&(n.drinks={beer:0,vodka:0,wine:0,mix:0}),e==="warning"&&(n.hunger=Math.min(100,n.hunger+25)),e==="cell"){if(t.arrests++,t.arrests>=3)return n.dead="jail","jail";const i=n.messages.length;return Dc(n,"alley"),Dc(n,"alley"),n.messages.length=i,n.messages.push(Fp.cell+` (arrest ${t.arrests} of 3)`),"cell"}return n.messages.push(Fp[e]),e}const Op=["Officer Dekel","Sergeant Gabay","Officer Mizrahi","Inspector Halevi","Officer Ben-Ami"],Bp=['"Back again? I never forget a face."',`"Run, little bottle man. I'll be here."`,'"Same corner, same bum. Same me."','"I dream about you, you know. Not nicely."'];function N0(n,e){const t=nt(n);return t.nemesis.runins++,e==="veteran"&&t.faces++,!t.nemesis.name&&t.nemesis.runins>=3?(t.nemesis.name=Op[Math.floor(ir(n.seed,"nemesis")*Op.length)],`${t.nemesis.name} now knows you by name. "We'll meet again."`):t.nemesis.name?`${t.nemesis.name}: ${Bp[t.nemesis.runins%Bp.length]}`:null}function ET(n,e,t,i){return{outcome:TT(n,wT(n,e,t,i)),taunt:N0(n,e)}}const U0={festival:{id:"festival",name:"Street festival",icon:"🎉",text:"A street festival in the park today. Music, crowds, free stuff.",x:50,z:-10,color:16738976},wallet:{id:"wallet",name:"A wallet",icon:"👛",text:"Something leather is lying on the pavement...",x:6,z:5.8,color:9067050},rain:{id:"rain",name:"Awning crowd",icon:"☔",text:"Showers today. Crowds pack under the awnings (easy to hide in).",x:-24,z:6.4,color:5933776},film:{id:"film",name:"Film shoot",icon:"🎬",text:"A film crew is shooting downtown. They need extras.",x:-40,z:-9,color:15781952},wedding:{id:"wedding",name:"Wedding",icon:"🍰",text:"A wedding outside the hall. There will be cake.",x:30,z:9,color:16777215},strike:{id:"strike",name:"Garbage strike",icon:"🗑",text:"Garbage strike! The bins are overflowing with good stuff.",x:-12,z:16,color:6987850},soup:{id:"soup",name:"Soup kitchen",icon:"🍲",text:"The soup kitchen has a line out the door today.",x:70,z:-9,color:14716986},preacher:{id:"preacher",name:"Street preacher",icon:"📣",text:"A street preacher on a crate, shouting about the end.",x:0,z:-7,color:10514656}},zp=Object.keys(U0);function AT(n,e){return U0[zp[Math.floor(ir(n,e,"event")*zp.length)]]}const RT=n=>n==="festival"||n==="rain"||n==="soup";function CT(n,e){const t=nt(n);if(t.day.event===n.day)return`${e.name}: you've had your share today.`;t.day.event=n.day;const i=r=>{n.whimsy=Math.min(100,n.whimsy+r)},s=r=>{n.hunger=Math.min(100,n.hunger+r)};switch(e.id){case"festival":return i(15),n.money+=3,"You dance at the festival. Someone drops $3 in your hat. +whimsy";case"wallet":return t.wallet=!0,"A fat wallet! Big Moshe the bouncer knows whose it is... or keep it?";case"rain":return i(5),"You squeeze under the awning with everyone. Warm, dry, invisible.";case"film":return n.money+=10,i(10),'Background extra: "sad man on bench". You nail it. +$10';case"wedding":return s(40),i(10),"The bride's aunt hands you a whole slice of cake. +hunger";case"strike":return n.money+=4,Bt(n,"crate",e.x,e.z,{},!0),"Rich bins: $4 in deposit cans and a good crate.";case"soup":return s(60),n.health=Math.min(100,n.health+10),"Hot soup and bread. You feel human. +hunger +health";case"preacher":return i(8),"The preacher blesses your bindle. It feels lighter. +whimsy"}}function IT(n){const e=nt(n);return e.wallet?(e.wallet=!1,n.money+=25,e.op.moshe=Math.max(-3,(e.op.moshe??0)-2),"You keep the cash. +$25. Big Moshe will hear about it."):""}function ec(n=128,e=.9){const t=document.createElement("canvas");t.width=n,t.height=64;const i=new ca(t);i.colorSpace=Ut;const s=new Yu(new el({map:i,transparent:!0,depthWrite:!1,depthTest:!1}));s.scale.set(e*(n/64),e,1),s.renderOrder=10;let r="";return{spr:s,set:(a,c="#fff8e8")=>{if(a===r)return;r=a;const l=t.getContext("2d");l.clearRect(0,0,n,64),l.fillStyle=c,l.strokeStyle="#3a2a1a",l.lineWidth=5,l.beginPath(),l.roundRect(4,4,n-8,52,24),l.fill(),l.stroke(),l.fillStyle="#2a1a10",l.font='800 34px system-ui, "Apple Color Emoji", sans-serif',l.textAlign="center",l.textBaseline="middle",l.fillText(a,n/2,32),i.needsUpdate=!0}}}class LT{constructor(e,t){this.scene=e,this.people=[],this.coneMesh=null,this.coneKind=null,this.copTag=ec(128,.8),this.ev=new Be,this.evTag=ec(64,1.3),this.secret=ec(64,.9);for(const s of P0)this.people.push(this.make(s.id,s.name,t(s.kind,s.tint),{reg:s}));for(const s of bd){const r=t(s.kind,s.tint);r.g.scale.multiplyScalar(.94),this.people.push(this.make(s.id,s.name,r,{home:s}))}this.cone=new Be,e.add(this.cone,this.copTag.spr);const i=new qe(new _i(.08,.08,2.6,6),new Xn({color:5917242}));i.position.y=1.3,this.evTag.spr.position.y=3.2,this.ev.add(i,this.evTag.spr),e.add(this.ev),this.secret.set("✨"),this.secret.spr.position.set(lo.x,1.2,lo.z),this.secret.spr.visible=!1,e.add(this.secret.spr),this.hudEl=document.createElement("div"),this.hudEl.id="cityhud",this.hudEl.style.cssText="position:fixed;left:16px;bottom:calc(env(safe-area-inset-bottom) + 188px);font:700 12.5px system-ui;color:#fff8e8;text-shadow:0 1px 2px #000;pointer-events:none;max-width:60%;line-height:1.35;z-index:5",document.body.appendChild(this.hudEl)}make(e,t,i,s){const r=ec(64,.75);return r.spr.position.y=2.75,i.g.add(r.spr),this.scene.add(i.g),{id:e,name:t,p:i,face:r,...s}}update(e,t,i,s){const r=nr(e),o=ol(e);for(const c of this.people){const l=Dn(e,c.id);let h,u,d=!0,p=0;if(c.reg){const _=Qw(c.reg,r,l);h=_.x,u=_.z,d=_.out,p=Math.abs(c.reg.x1-c.reg.x0)>6?1.4:.5,c.p.g.rotation.y=_.dir>0?-Math.PI/2:Math.PI/2}else{const _=c.home;if(h=_.x,u=_.z,_.role==="rival"){const m=iT(e.seed,e.day);h=m.x,u=m.z,d=aT(e)&&!o}if(_.role==="thief"){d=o;const m=c.p.g.position,f=Math.hypot(i-m.x,s-m.z);d&&f<25&&f>1.5?(h=m.x+(i-m.x)/f*1.6*t,u=m.z+(s-m.z)/f*1.6*t,p=1.6,c.p.g.rotation.y=Math.atan2(i-m.x,s-m.z)+Math.PI):d&&f<=1.5&&(h=m.x,u=m.z)}}if(c.p.g.visible=d&&Math.abs(h-i)<60,!c.p.g.visible)continue;c.p.g.position.set(h,0,u),na(c.p,p,t);const g=Up(e).some(_=>_.giver===c.id);c.face.set(g?"❗":eT(l),g?"#ffe070":"#fff8e8")}const a=nt(e);this.secret.spr.visible=a.secretSpot}cop(e,t,i,s,r,o,a){const c=xu[e].cone;if(this.coneKind!==e){this.coneMesh&&(this.cone.remove(this.coneMesh),this.coneMesh.geometry.dispose());const l=new Js(1,18,Math.PI/2-c,c*2);this.coneMesh=new qe(l,new In({color:16769658,transparent:!0,opacity:.22,depthWrite:!1})),this.coneMesh.rotation.x=-Math.PI/2,this.coneMesh.position.y=.06,this.cone.add(this.coneMesh),this.coneKind=e}this.cone.visible=o,this.cone.position.set(t,0,i),this.cone.rotation.y=s,this.cone.scale.set(r,1,r),this.copTag.set(xu[e].icon+(a?" "+a.split(" ").pop():""),a?"#ffb0a0":"#e0ecff"),this.copTag.spr.position.set(t,3.1,i)}setEvent(e){this.ev.position.set(e.x,0,e.z),this.evTag.set(e.icon,"#"+e.color.toString(16).padStart(6,"0"))}near(e,t,i=2.6){var o;let s=null,r=i;for(const a of this.people){if(!a.p.g.visible)continue;const c=Math.hypot(a.p.g.position.x-e,a.p.g.position.z-t);c<r&&(r=c,s={id:a.id,name:a.name,role:((o=a.home)==null?void 0:o.role)??"regular"})}return s}seen(e,t){return this.people.filter(i=>i.reg&&i.p.g.visible).map(i=>({id:i.id,x:i.p.g.position.x,z:i.p.g.position.z,dist:Math.hypot(i.p.g.position.x-e,i.p.g.position.z-t)}))}posOf(e){const t=this.people.find(i=>i.id===e);return t&&t.p.g.visible?t.p.g.position:null}hud(e,t,i){const s=nt(e),r=Up(e).map(a=>"❗ "+a.text).join("<br>"),o=`Rep ${s.rep} · Heat ${"▮".repeat(Math.ceil(t/25))||"-"}${s.debt?` · Debt $${s.debt}`:""}${s.arrests?` · Arrests ${s.arrests}/3`:""}<br>${i.icon} ${i.name}${r?"<br>"+r:""}`;this.hudEl.innerHTML!==o&&(this.hudEl.innerHTML=o)}}const ia=new URLSearchParams(location.search),F0=ia.has("debug"),Kt=(n,e=0,t=1)=>Math.max(e,Math.min(t,n)),ms=(n,e,t)=>n+(e-n)*t,dn={raw(n){try{return localStorage.getItem("sg_"+n)}catch{return null}},setRaw(n,e){try{localStorage.setItem("sg_"+n,e)}catch{}},del(n){try{localStorage.removeItem("sg_"+n)}catch{}},get(n,e){try{const t=dn.raw(n);return t?JSON.parse(t):e}catch{return e}},set(n,e){dn.setRaw(n,JSON.stringify(e))}},yn=new Nb({antialias:!1,powerPreference:"high-performance"});yn.setPixelRatio(1);yn.setSize(window.innerWidth,window.innerHeight,!1);yn.shadowMap.enabled=!0;yn.shadowMap.type=Zp;yn.info.autoReset=!1;document.body.prepend(yn.domElement);const xi=new Gw(yn),Ft=new Rm,$e=new xn(60,window.innerWidth/window.innerHeight,.1,160);let ei=ia.has("q")?Kt(Math.round(Number(ia.get("q"))),0,2):2;const PT=!ia.has("q"),mc=new t1(13624575,5917242,1.2);Ft.add(mc);const Gt=new zm(16773590,2.4);Gt.shadow.camera.left=-22;Gt.shadow.camera.right=22;Gt.shadow.camera.top=22;Gt.shadow.camera.bottom=-22;Gt.shadow.camera.near=1;Gt.shadow.camera.far=80;Gt.shadow.bias=-6e-4;Gt.shadow.normalBias=.03;Ft.add(Gt,Gt.target);Ft.fog=new qu(12896456,26,62);const nh=62;function Sd(){var e;const n=Fc[ei];Gt.castShadow=n.shadow>0,n.shadow>0&&Gt.shadow.mapSize.x!==n.shadow&&(Gt.shadow.mapSize.set(n.shadow,n.shadow),(e=Gt.shadow.map)==null||e.dispose(),Gt.shadow.map=null),xi.setSize(window.innerWidth,window.innerHeight,n.rows)}let jo=60;function O0(){yn.setSize(window.innerWidth,window.innerHeight,!1),$e.aspect=window.innerWidth/window.innerHeight,jo=$e.aspect<1?70:50,$e.fov=jo,$e.updateProjectionMatrix(),Sd()}window.addEventListener("resize",O0);const B0=[],Hs=(n,e,t,i)=>B0.push({x0:n,x1:e,z0:t,z1:i}),z0=[],kT=()=>new In({color:16777215,transparent:!0,opacity:.2,depthWrite:!1}),Bc=[],H0=[],wd=[];function Zt(n){return Ft.add(n),n}function st(n,e,t=0){return Ft.add(n),wd.push({o:n,x:e,z:t}),n}function DT(n,e,t,i,s=1){const r=document.createElement("canvas");let o=r.getContext("2d");o.font="bold 54px sans-serif";const a=Math.max(512,Math.ceil(o.measureText(n).width)+48);r.width=a,r.height=96,o=r.getContext("2d"),o.fillStyle="rgba(0,0,0,0.55)",o.fillRect(0,0,a,96),o.fillStyle="#fff",o.font="bold 54px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(n,a/2,50);const c=new ca(r);c.colorSpace=Ut;const l=new Yu(new el({map:c,fog:!1,depthTest:!1}));return l.scale.set(4*s*(a/512),.75*s,1),l.position.set(e,t,i),l.renderOrder=10,Zt(l)}function ih(n,e,t,i=.9){const s=document.createElement("canvas");s.width=256,s.height=64;const r=s.getContext("2d");r.fillStyle=e,r.fillRect(0,0,256,64),r.fillStyle="#fff",r.font="bold 34px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(n,128,34);const o=new ca(s);o.colorSpace=Ut,o.magFilter=qt;const a=new Xn({map:o,emissive:16777215,emissiveIntensity:0,emissiveMap:o});cl.push(a);const c=new qe(new ns(t,i),a);return c.rotation.y=Math.PI,c}function NT(n,e,t,i){const s=new qe(new Qu(i-.14,i,32),kT());s.rotation.x=-Math.PI/2,s.position.set(e,.24,t),st(s,e,t),z0.push({id:n,m:s,x:e,z:t,r:i})}function Hp(n,e,t){const i=new Be;i.add(ee(.14,3.2,.14,ne(2764083),0,1.6,0)),i.add(ee(.45,1.2,.45,ne(1908516),0,3.6,0));const s=[16724016,16760864,3211104].map(o=>new Xn({color:2236962,emissive:o,emissiveIntensity:0}));s.forEach((o,a)=>i.add(ee(.06,.26,.26,o,t*.24,4-a*.37,0,!1)));const r=new Xn({color:2236962,emissive:3211104,emissiveIntensity:1.5});i.add(ee(.5,.08,.5,r,0,4.24,0,!1)),s.push(r),i.position.set(n,0,e),st(i,n,e),H0.push({mats:s})}function Ar(n,e,t=!1){const i=new si(1,1,1),s=new tl(i,ne(n),e.length),r=new Ne;return e.forEach(([o,a,c,l,h,u],d)=>s.setMatrixAt(d,r.compose(new k(o,a,c),new Gn,new k(l,h,u)))),s.castShadow=t,s.receiveShadow=!0,Zt(s)}const G0=[],Td=[],gc={};function UT(){const n=new qe(new ns(260,90),ne(7311194));n.rotation.x=-Math.PI/2,n.position.set(0,0,-8),n.receiveShadow=!0,Zt(n);const e=(T,U,H,j,K,$,ce)=>st(ee(T,U,H,ne(j),K,$,ce,!1),K,ce);Zt(ee(230,.05,8,ne(3816770),0,.02,0,!1)),Zt(ee(230,.2,6,ne(12169894),0,.1,7,!1)),Zt(ee(230,.24,.3,ne(9078140),0,.12,4.1,!1)),Zt(ee(230,.2,3,ne(12169894),0,.1,-5.5,!1)),Zt(ee(230,.24,.3,ne(9078140),0,.12,-4.1,!1));const t=[];for(let T=-112;T<=112;T+=6)du.every(U=>Math.abs(T-U)>3)&&t.push([T,.04,0,2.5,.06,.22]);Ar(15919194,t);const i=[];for(let T=-112;T<=112;T+=2)i.push([T,.1,7,.06,.21,6]);Ar(10854034,i);const s=[];for(const T of du){for(let H=0;H<7;H++)s.push([T,.045,-3.3+H*1.1,2*zo.halfW,.06,.55]);const U=zo.halfW+1.2;s.push([T-U,.045,-2,.3,.06,3.8],[T+U,.045,2,.3,.06,3.8]),Hp(T-zo.halfW-.8,-4.5,-1),Hp(T+zo.halfW+.8,4.5,1)}Ar(16053488,s),e(34,.08,14,5221962,-15,.05,-15),e(2,.09,14,13220239,-8,.06,-15),e(14,.1,12,9274232,9,.06,16),e(10,.1,8,9274232,0,.06,18);const r=(T,U,H,j,K)=>{st(T,(U+H)/2,j),Hs(U,H,j,K)};r(hi(-34,-28,10,22,9,10124138,0),-34,-28,10,22),r(Tr(-27,-17,10,16,7,6966197,14172224,16052456,"LIQUOR","#7a1f6a",1),-27,-17,10,16),r(hi(-16,-6,10,22,11,11565658,2),-16,-6,10,22),r(Tr(-5,5,10,14,6,15251552,16748464,16774368,"BAKERY","#b0602a",3),-5,5,10,14),r(hi(16,34,10,22,13,8030896,4),16,34,10,22),st(ee(11,3,1,ne(9076600),-.5,1.5,22),0,22),Hs(-6,5,21.5,22.5),st(ee(1,3,12,ne(9076600),15.5,1.5,16),15,16),st(xw(),Pe.dumpster.x,Pe.dumpster.z).position.set(Pe.dumpster.x,0,Pe.dumpster.z+1);for(const T of["bin","bin2","bin3"]){const U=new Be;U.add(ee(1.1,1.1,1.1,ne(2778312),0,.55,0)),U.add(ee(1.2,.12,1.2,ne(1919638),0,1.16,0)),U.add(ee(.5,.04,.12,ne(1118481),0,1.23,0,!1)),U.position.set(Pe[T].x,0,Pe[T].z-.6),st(U,Pe[T].x,Pe[T].z)}const a=new Be;a.add(ee(.4,.5,.4,ne(3840720),0,.25,0)),a.add(ee(.16,.25,.16,ne(12634320),0,.6,0)),a.position.set(Pe.sprinkler.x,0,Pe.sprinkler.z),st(a,Pe.sprinkler.x),st(ee(1.4,.04,.9,ne(11569232),Pe.corner.x,.23,Pe.corner.z,!1),Pe.corner.x),st(ee(.8,.4,.45,ne(12603450),Pe.stash.x,.4,Pe.stash.z+.4),Pe.stash.x),st(ee(.8,.9,.7,ne(8015920),Pe.bakeryBin.x,.45,Pe.bakeryBin.z+.4),Pe.bakeryBin.x);for(let T=0;T<7;T++)st(zs(-31+T*5,-20.5+T%2*1.2,.9+T%3*.15),-31+T*5);st(zs(-28,-9.5,1),-28),st(zs(-2,-10,.85),-2),st(zs(4,-18,1.1),4);const c=[14202016,11061464,14735520,12112040,13674688];[[-103,-96],[-94,-88],[-86,-80],[-78,-71]].forEach(([T,U],H)=>{const j=5+H%2*1.5,K=hi(T,U,12,19,j,c[H%c.length],0,"plain"),$=ee(U-T+.6,.4,5.4,ne(9062970),(T+U)/2,j+.9,13.8);$.rotation.x=-.45,K.add($),K.add(ee(1,2,.1,ne(5913128),(T+U)/2,1,11.95,!1)),K.add(ee(U-T,.6,.2,ne(15790320),(T+U)/2,.3,10.5,!1)),r(K,T,U,12,19),st(zs((T+U)/2+2.4,11,.7),T)}),r(Tr(-67,-55,10,18,6,5937770,3836490,16052456,"CORNER SHOP","#1f6a3a",5),-67,-55,10,18),r(hi(-54,-45,15,23,8,12624e3,6),-54,-45,15,23),r(hi(-44,-37,15,23,10,10127994,1),-44,-37,15,23);const l=[[16736352,16777215],[6332671,16777215],[16760896,16777215],[6344832,16777215]];[-52,-47.5,-43,-38.5].forEach((T,U)=>{const H=new Be;H.add(ee(3,.9,1.4,ne(10119744),T,.45,12.6));for(let K=0;K<4;K++)H.add(ee(.75,.1,1.8,ne(l[U][K%2]),T-1.1+K*.74,2.4,12.4));for(const K of[-1.4,1.4])H.add(ee(.08,2.4,.08,ne(4473924),T+K,1.2,11.9,!1));const j=[16728128,16752672,6340672][U%3];H.add(ee(2.6,.2,1.1,ne(j),T,1,12.6,!1)),r(H,T-1.5,T+1.5,11.9,13.3)}),r(Tr(37,48,10,18,7,4860506,16728224,2759226,"THE DRUNK DUCK","#a01a6a",2),37,48,10,18),r(hi(49,55,10,20,9,6969962,3),49,55,10,20),r(Tr(56,68,10,18,7,2767450,4235519,1714762,"SPORTS BAR","#1a4aa0",4),56,68,10,18),r(hi(69,72,10,20,8,5917258,0),69,72,10,20),r(Tr(74,84,10,18,7,3820122,14540253,5925498,"ELECTRONICS","#2a3a4a",5),74,84,10,18),r(hi(86,98,10,22,22,9085112,0,"tower"),86,98,10,22),st(ih("OFFICES","#203040",4),92,10).position.set(92,3.4,9.9),r(hi(100,108,10,22,18,8030874,1,"tower"),100,108,10,22);for(const T of od){const U=Pe[T],H=new In({color:6982399});G0.push(H);const j=new qe(new ns(1.6,1),H);j.position.set(U.x,1.5,9.92),j.rotation.y=Math.PI,st(j,U.x,10),st(ee(1.8,1.2,.1,ne(1118481),U.x,1.5,9.98,!1),U.x,10)}e(68,.08,22,5221962,-70,.05,-17),e(64,.09,2,13220239,-70,.06,-16),e(2,.09,20,13220239,-62,.06,-17);const h=Pe.fountain.x,u=Pe.fountain.z,d=ne(13156528),p=new Xn({color:4892904,emissive:1723008,emissiveIntensity:.4}),g=new Be,_=new qe(new _i(3.2,3.4,.7,20),d);_.position.set(h,.35,u);const m=new qe(new _i(2.8,2.8,.1,20),p);m.position.set(h,.66,u);const f=new qe(new _i(.35,.5,1.8,10),d);f.position.set(h,1.2,u);const v=new qe(new _i(1.1,.4,.3,14),d);v.position.set(h,2.1,u);const y=new qe(new _i(.12,.3,.9,8),p);y.position.set(h,2.6,u);for(const T of[_,m,f,v,y])T.castShadow=!0,g.add(T);st(g,h,u),Hs(h-3,h+3,u-3,u+3);for(let T=0;T<12;T++){const U=-100+T*5.5+T%3*1.2,H=T%2?-26:-9.5;Math.abs(U-h)<6&&H>-12||st(zs(U,H,.9+T%3*.15),U,H)}const x=new Be;x.add(ee(5,2.4,2.2,ne(15790312),-46,1.5,-9.8)),x.add(ee(5.02,.5,2.22,ne(14172224),-46,.55,-9.8)),x.add(ee(2.4,.9,.1,ne(2236962),-46.4,1.8,-8.68,!1));for(const T of[-47.8,-44.2])x.add(ee(.8,.8,2.3,ne(1710618),T,.4,-9.8,!1));const C=ih("HOT FOOD","#c03020",3,.7);C.position.set(-46,3,-8.6),x.add(C),st(x,-46,-9.8),Hs(-48.5,-43.5,-11,-8.7),e(32,.1,18,9079440,56,.06,-15);const A=new Be;A.add(ee(26,.6,14,ne(6974064),56,3.6,-15.5)),A.add(ee(26,3.6,.6,ne(5921376),56,1.8,-22.6));for(const T of[44,50,62,68])A.add(ee(.7,3.4,.7,ne(8026752),T,1.7,-9.2));const R=ih("STATION","#1a5a2a",4,.8);R.position.set(56,3.6,-8.6),A.add(R),A.add(ee(3,.05,2,ne(10518608),56,.12,-19,!1)),st(A,56,-15),Hs(43,69,-23,-22.3);for(const T of[44,50,62,68])Hs(T-.35,T+.35,-9.55,-8.85);e(36,.12,22,11051152,90,.06,-16);const D=new qe(new si(60,.3,18),new Xn({color:2779802,emissive:666186,emissiveIntensity:.5}));D.position.set(92,-.4,-37),st(D,92,-37);const w=[];for(let T=74;T<=108;T+=2)w.push([T,.55,-27.8,.12,1,.12]);w.push([91,1.05,-27.8,36,.1,.1]),Ar(3356736,w);const M=new Be;M.add(ee(5,.5,26,ne(10127994),90,3.4,-34)),M.add(ee(.15,.9,26,ne(4473924),87.6,4.1,-34)),M.add(ee(.15,.9,26,ne(4473924),92.4,4.1,-34));for(const T of[-22.5,-40]){const U=xo("pillar");if(U){const H=3.2/U.size.y;U.obj.scale.setScalar(H),U.obj.position.set(90,0,T),M.add(U.obj)}else M.add(ee(1.2,3.2,1.2,ne(9079434),90,1.6,T))}M.add(ee(3,.05,2,ne(10518608),90,.14,-25,!1)),st(M,90,-30),Hs(89.3,90.7,-23.2,-21.8);for(let T=0;T<5;T++)st(zs(76+T*7.5,-9.5,.85),76+T*7.5,-9.5);for(const T of ea){const U=st(vw(),T.x,T.z);X0.push(U),U.position.set(T.x,0,T.z)}const P=[],V=[];for(const T of Vm)P.push([T.x,.5,T.z,.7,1,.7]),V.push([T.x,1.04,T.z,.8,.1,.8]);Ar(3103290,P,!0),Ar(1718820,V);for(let T=-100;T<=104;T+=16){const U=Tp(T,4.7,-1);Bc.push(U),st(U.g,T),st(U.pool,T)}for(let T=-92;T<=104;T+=16){const U=Tp(T,-4.6,1);Bc.push(U),st(U.g,T),st(U.pool,T)}Zt(Sw());for(const T of sl)for(let U=0;U<6;U++){const H=new Be;H.add(ee(.22,.18,.32,ne(9079450),0,.12,0,!1)),H.add(ee(.12,.12,.12,ne(5925498),0,.26,-.16,!1)),st(H,Pe[T].x,Pe[T].z),Td.push({m:H,spot:T,a:U/6*Math.PI*2,r:.8+U%3*.5})}for(const T of["store","shop2","truck","dumpster","bin","bin2","bin3","alley","stash","bakeryBin","underpass","bridge","pigeons","pigeons2","tvBar","tvShop","corner","sprinkler"]){const U=Pe[T];NT(T,U.x,U.z,U.r)}}function FT(){an.build(Ft,Bc.map(n=>({x:n.g.position.x,z:n.g.position.z})),(n,e)=>wd.push({o:n,x:e,z:0})),an.plats.push({x0:-115,x1:115,z0:4,z1:10,h:.2},{x0:-115,x1:115,z0:-7,z1:-4,h:.2});for(const n of X0){const e=new bi().setFromObject(n);an.plats.push({x0:e.min.x,x1:e.max.x,z0:e.min.z,z1:e.max.z,h:Math.min(e.max.y,e.min.y+.58)})}for(let n=0;n<4;n++){const e=new Bm(16758880,0,8,1.6);Ft.add(e),$0.push(e)}}let ht,vu,Ir,yu,Mu;const Ed={office:{model:"ped-1",tint:8161960,speed:1.6,shirt:4872826},tourist:{model:"ped-0",tint:16767120,speed:1.1,shirt:16764992},oldlady:{model:"ped-2",tint:13150432,speed:.85,shirt:10518720},party:{model:"ped-1",tint:16744656,speed:1.5,shirt:16728224},jogger:{model:"ped-0",tint:8450208,speed:3.4,shirt:3199088},rich:{model:"ped-2",tint:15781984,speed:1.3,shirt:13676608}},Ln=[];let V0=0,vn,zc;const Lt={mode:"patrol",t:0,dir:1,side:6.5};let hn;const Gs={tx:8,tz:14,wait:0},pi=[],Gp=[13643824,3174608,15263976,3186768,14721056,9059024],sh=[1,2.5];function OT(){ht.g.scale.set(1.14,1.04,1.14),ht.body.traverse(r=>{const o=r;if(o.isMesh&&o.material){const a=o.material.clone();a.emissive=new Te(3808264),a.emissiveIntensity=.35,o.material=a}if(r.isBone){const a=r.name.toLowerCase();a.includes("head")?Xi.head=r:a.includes("arm")&&a.includes("left")?Xi.armL=r:a.includes("arm")&&a.includes("right")&&(Xi.armR=r)}});const n=Xi.head??ht.body,e=!!Xi.head,t=ee(.62,.26,.62,ne(14721056),0,e?.52:1.68,0);if(t.add(ee(.16,.12,.16,ne(14174778),0,.18,0)),n.add(t),e){ht.g.updateMatrixWorld(!0);const r=new k;n.getWorldScale(r),t.scale.setScalar(1/r.x),t.position.y=.58/r.y}const i=ee(.05,.05,1.3,ne(8015920),.3,1,.25);i.rotation.x=-.7;const s=ee(.38,.34,.38,ne(14174778),0,0,.6);i.add(s),ht.body.add(i)}function BT(){ht=dc(12084266,4868690,{hat:3828362,skin:13145450,model:"man"}),OT(),Zt(ht.g),vu=ee(.85,.8,.22,ne(10104880),0,1.1,.3),Ir=new Be,Ir.add(ee(.28,.08,1.1,ne(2276266),0,.1,0)),Ir.add(ee(.06,1,.06,ne(3355443),0,.6,-.5)),Ir.add(ee(.5,.06,.06,ne(3355443),0,1.1,-.5)),yu=ee(.6,.4,.04,ne(13148256),.25,.9,-.3,!1),Mu=ee(.36,.08,.06,ne(328965),0,1.5,-.2,!1),ht.body.add(vu,Ir,yu,Mu);for(const n of au)for(let e=0;e<3;e++){const t=Ed[n],i=dc(t.shirt,3355460,{hair:[2759184,13672512,14540253][e%3],model:t.model,tint:t.tint});i.g.visible=!1,Zt(i.g),Ln.push({p:i,kind:n,active:!1,dir:1,speed:t.speed,wet:0,asks:0,talkT:0,mad:0,id:0})}vn=dc(1714810,1317440,{hat:1118515,model:"cop",tint:6979800}),zc=new Xn({color:2236962,emissive:16719904,emissiveIntensity:0}),vn.body.add(ee(.22,.14,.22,zc,0,2.2,0,!1)),Zt(vn.g),hn=Zt(Mw()),hn.position.set(10,0,15)}let sa=[];function W0(){for(const n of sa)Ft.remove(n);sa=N.draw.bottleSpots.map((n,e)=>{const t=yw(),i=ad[n];return t.position.set(i.x,.3,i.z),t.visible=N.bottlesLeft[e],Zt(t)})}let rh=[];function zT(){for(const e of rh)Ft.remove(e);rh=[];const n=dn.get("lastDeath",null);n&&(rh=[Zt(ee(1.4,.15,.8,ne(5592405),n.x,.15,n.z)),DT(`A man fell here. Day ${n.day}.`,n.x,1.4,n.z,.7)])}const _c=[];function HT(n){const e=n.clone();e.position.copy(n.position),Zt(e),_c.push({o:e,t:0})}let N;const an=new Zw,Nt=$w();let ul=!1,xc=0,Lr=0,vc=0,oh=0,Ho={x:0,z:0},wi=null;const X0=[],Vp=new Map,$0=[],qo=[],GT=new si(.14,.14,.14),Wp=new Map;function Hc(n,e,t,i,s=10,r=4){for(let o=0;o<s;o++){const a=i[o%i.length];let c=Wp.get(a);c||(c=new In({color:a}),Wp.set(a,c));const l=new qe(GT,c);l.position.set(n,e,t),Ft.add(l),qo.push({m:l,vx:(Math.random()-.5)*5,vy:r*(.5+Math.random()),vz:(Math.random()-.5)*5,t:0})}}let Xi={},fn=!1,Nn=!1,Y=0,te=0,Zn=0,ah=0,di=0,Gc=1,ot=0,bu=0,mt=0,Xp=0,Ts=!1,mi=0,yc=0,qs=0,Mc=0,ra=0,gs=0,Pr=0,bc=0;const _s={x:0,z:0};let tc=0,Sc=0,wc=0,Tc=100,ch=0,lh=0,hh=0,uh=0,zr="go",wt=null,Pn=null,dh=0,ti=0,Cs=1;const Vc={min:.5,max:1.8};function Ad(){ti=0,Cs=1}const Su=new Set(dn.get("book",[])),rt={fx:0,fz:0,dist:12,vx:0,vz:0,roll:0},Ye=n=>document.getElementById(n),is=Ye("screen"),$i=Ye("fade");function j0(n,e,t,i){N=n,Y=e,te=t,Zn=i,mi=0,yc=0,rt.fx=Y,rt.fz=te,rt.dist=12,Ad(),ht.g.position.set(Y,0,te),Lt.mode="patrol",vn.g.position.set(Y+30,0,6.5),cg();for(const s of pi)Ft.remove(s.m.g);pi.length=0;for(const s of Ln)s.active=!1,s.p.g.visible=!1;bu=0,qs=Mc=ra=gs=0,_s.x=_s.z=0,wt=null,Pn=null,Ye("shopPanel").classList.add("hidden"),Sc=N.money,wc=N.whimsy,Tc=N.health,zT(),is.classList.add("hidden"),$i.style.transition="none",$i.style.opacity="0",fn=!0,Nn=!1,Ci="",Ru=""}function Wc(n){dn.del("life"),j0(md(n.trim().toUpperCase()||pd(),dn.get("stash",null)),-20,6,0),Jt(`Day 1. ${x0(N.draw.weather)}`),Is()}function q0(){const n=v0(dn.raw("life"));return n?(j0(n.s,n.px,n.pz,n.face),Jt(`Day ${N.day}. Welcome back.`),!0):!1}function Is(){if(!fn||!N||N.dead)return;const n=IS(N,Y,te,Zn);n&&dn.setRaw("life",n)}function Y0(){return"<b>Whimsy book</b><br>"+c0.map(n=>Su.has(n)?rl[n].name:"???").join("<br>")}function Rd(){fn=!1,Nn=!1;const n=v0(dn.raw("life"));is.classList.remove("hidden"),is.innerHTML=`
    <h1>Street</h1>
    <div style="opacity:.8">Hustle sober. Get high. Have fun. Don't die.</div>
    ${n?`<button id="cont" class="go">Continue · day ${n.s.day}</button>`:""}
    <div>Seed <input id="seed" value="${pd()}" autocapitalize="characters"></div>
    <button id="go" class="${n?"alt":"go"}">${n?"New life":"Start a life"}</button>
    <div style="font-size:12px;opacity:.6">Same seed, same draw. Keys: WASD, E act, 1-6, Q drink, V view, P pause.</div>
    <div id="book">${Y0()}</div>`,n&&(Ye("cont").onclick=()=>{q0()||Rd()}),Ye("go").onclick=()=>Wc(Ye("seed").value)}function dl(){!fn||Nn||(Nn=!0,Is(),is.classList.remove("hidden"),is.innerHTML=`
    <h1>Paused</h1>
    <div style="opacity:.75">Day ${N.day}. His life is saved.</div>
    <button id="resume" class="go">Resume</button>
    <button id="snd" class="alt">${Ka()?"Sound: off":"Sound: on"}</button>
    <button id="quit" class="alt">Back to start</button>`,Ye("resume").onclick=Cd,Ye("snd").onclick=()=>{L0(!Ka()),dn.set("muted",Ka()),Ye("snd").textContent=Ka()?"Sound: off":"Sound: on"},Ye("quit").onclick=()=>{Is(),Rd()})}function Cd(){Nn&&(Nn=!1,is.classList.add("hidden"),qc=performance.now())}function VT(){fn=!1,dn.del("life");for(const e of N.discovered)Su.add(e);dn.set("book",[...Su]),dn.set("lastDeath",{x:Y,z:te,day:N.day}),dn.set("stash",N.stash),Yi(ht,"die",!0),pa();const n=N.dead==="gaveup";$i.style.transition=`opacity ${n?3:1}s`,$i.style.opacity="1",setTimeout(()=>{is.classList.remove("hidden"),is.innerHTML=`
      <h1>This is how he died</h1>
      <div style="font-size:20px">${fS[N.dead]}</div>
      <div>Days survived: ${N.day}<br>Best whimsy: ${Math.round(N.bestWhimsy)}<br>People who gave: ${N.gives}<br>Seed: ${N.seed}</div>
      <button id="again" class="go">A new life</button>
      <button id="same" class="alt">Same seed again</button>
      <div id="book">${Y0()}</div>`,Ye("again").onclick=()=>Wc(pd()),Ye("same").onclick=()=>Wc(N.seed)},n?3200:1200)}document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){if(Is(),ia.has("nopause"))return;dl(),Ow()}});window.addEventListener("pagehide",Is);L0(dn.get("muted",!1));const Id=()=>Fw();window.addEventListener("pointerdown",Id,{capture:!0});window.addEventListener("touchend",Id,{capture:!0});window.addEventListener("keydown",Id,{capture:!0});const En=new Set,ni={x:0,y:0,id:-1};window.addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(En.add(e),!!fn){if(Pn){(e==="escape"||e==="e")&&pa();return}if((e==="p"||e==="escape")&&(Nn?Cd():dl()),!Nn&&(e==="e"&&Xc(0),e>="1"&&e<="7"&&Xc(Number(e)-1),e==="q"&&Dd(),e==="v"&&(Ts=!Ts),(e===" "||e==="j")&&vd(Nt),e==="f")){const t=an.nearest(Y,te);t&&Pd(t)}}});window.addEventListener("keyup",n=>En.delete(n.key.toLowerCase()));window.addEventListener("blur",()=>En.clear());const ho=Ye("stick"),K0=Ye("knob");ho.addEventListener("pointerdown",n=>{ni.id=n.pointerId,ho.setPointerCapture(n.pointerId),J0(n)});ho.addEventListener("pointermove",n=>{n.pointerId===ni.id&&J0(n)});const Z0=n=>{n.pointerId===ni.id&&(ni.id=-1,ni.x=0,ni.y=0,K0.style.transform="")};ho.addEventListener("pointerup",Z0);ho.addEventListener("pointercancel",Z0);function J0(n){const e=ho.getBoundingClientRect();let t=(n.clientX-(e.left+e.width/2))/55,i=(n.clientY-(e.top+e.height/2))/55;const s=Math.hypot(t,i);s>1&&(t/=s,i/=s),ni.x=t,ni.y=i,K0.style.transform=`translate(${t*40}px, ${i*40}px)`}const Bn=(n,e,t="")=>`<svg viewBox="0 0 24 24" fill="${e}" ${t}><path d="${n}"/></svg>`,cn={heart:"M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.6 4.5c2.2 0 3.6 1.2 5.4 3.3 1.8-2.1 3.2-3.3 5.4-3.3 3.6 0 5.7 3.8 4.2 7.2C19.5 16.4 12 21 12 21z",bolt:"M13.5 1.5 4 13.5h6.5L9 22.5l10-13h-6.8z",bottle:"M9.5 1.5h5v4l2 3.5v12.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V9l2-3.5z",star:"M12 1.5l2.6 7.6 7.9.4-6.2 5 2.1 7.8L12 17.8l-6.4 4.5 2.1-7.8-6.2-5 7.9-.4z",food:"M12 7.5c-1.2-1.8-3.2-2.6-5.2-2C3.6 6.4 2.6 10 3.6 13.6 4.7 17.7 7.4 21.5 9.6 21.5c1 0 1.5-.5 2.4-.5s1.4.5 2.4.5c2.2 0 4.9-3.8 6-7.9 1-3.6 0-7.2-3.2-8.1-2-.6-4 .2-5.2 2zM12 7.5c0-2.3 1-4.3 3.2-5.5",coin:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.9 15.6V19h-1.8v-1.4c-1.6-.2-2.9-1.1-3-2.8h1.8c.1.9.8 1.4 2 1.4 1.3 0 1.9-.6 1.9-1.3 0-.8-.6-1.1-2.1-1.5-1.9-.4-3.3-1-3.3-2.8 0-1.4 1.1-2.4 2.7-2.7V6.5h1.8v1.4c1.6.3 2.6 1.3 2.7 2.7h-1.8c-.1-.8-.7-1.3-1.8-1.3-1.1 0-1.7.5-1.7 1.2 0 .7.6 1 2.1 1.4 1.9.5 3.3 1.1 3.3 2.9 0 1.5-1.1 2.5-2.8 2.8z",pause:"M6 4h4.5v16H6zM13.5 4H18v16h-4.5z",eye:"M12 5C6.5 5 2.7 9.2 1.5 12c1.2 2.8 5 7 10.5 7s9.3-4.2 10.5-7C21.3 9.2 17.5 5 12 5zm0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2.3a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z",sunI:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM11 1h2v3h-2zm0 19h2v3h-2zM1 11h3v2H1zm19 0h3v2h-3z",cloud:"M6.5 19a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 17.5 9 5 5 0 0 1 17.5 19zM8 20.5l-1 2.5M12 20.5l-1 2.5M16 20.5l-1 2.5",snow:"M11 1h2v22h-2zM1 11h22v2H1zM4.2 5.6l1.4-1.4 14.2 14.2-1.4 1.4zM18.4 4.2l1.4 1.4L5.6 19.8l-1.4-1.4z",blanket:"M3 6h18v12H3zM3 10h18M3 14h18",scooter:"M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5 17h14l-3-12h3"};Ye("pauseBtn").innerHTML=Bn(cn.pause,"#fff",'width="20" height="20"');Ye("viewBtn").innerHTML=Bn(cn.eye,"#fff",'width="22" height="22"');Ye("pauseBtn").addEventListener("pointerdown",n=>{n.preventDefault(),Oe("tap"),dl()});Ye("centerBtn").innerHTML=Bn("M12 2v4M12 18v4M2 12h4M18 12h4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z","none",'stroke="#fff" stroke-width="2" width="22" height="22"');Ye("centerBtn").addEventListener("pointerdown",n=>{n.preventDefault(),Oe("tap"),Ad()});const Es=new Map;let Ys=null;const da=yn.domElement,Q0=()=>{const[n,e]=[...Es.values()];return{d:Math.hypot(e.x-n.x,e.y-n.y),a:Math.atan2(e.y-n.y,e.x-n.x)}};da.addEventListener("pointerdown",n=>{Es.set(n.pointerId,{x:n.clientX,y:n.clientY}),Es.size===2&&(Ys={...Q0(),zoom:Cs,yaw:ti})});da.addEventListener("pointermove",n=>{const e=Es.get(n.pointerId);if(n.pointerType==="mouse"&&n.buttons&2&&e&&(ti-=(n.clientX-e.x)*.008),e&&Es.set(n.pointerId,{x:n.clientX,y:n.clientY}),Ys&&Es.size===2){const t=Q0();Cs=Kt(Ys.zoom*(Ys.d/Math.max(20,t.d)),Vc.min,Vc.max),ti=Ys.yaw-Dr(t.a-Ys.a)}});const eg=n=>{Es.delete(n.pointerId),Es.size<2&&(Ys=null)};da.addEventListener("pointerup",eg);da.addEventListener("pointercancel",eg);da.addEventListener("contextmenu",n=>n.preventDefault());window.addEventListener("wheel",n=>{Cs=Kt(Cs*Math.exp(n.deltaY*.001),Vc.min,Vc.max)},{passive:!0});Ye("viewBtn").addEventListener("pointerdown",n=>{n.preventDefault(),Oe("tap"),Ts=!Ts});const qr=[];function wu(n,e,t,i=2.6){for(const r of qr)r.el.dataset.cls===t&&(r.t=Math.min(r.t,.15));const s=document.createElement("div");s.className="bubble "+t,s.dataset.cls=t,s.textContent=n,Ye("bubbles").appendChild(s),qr.push({el:s,at:e,t:i})}const WT=new k;function tg(n){for(let e=qr.length-1;e>=0;e--){const t=qr[e];t.t-=n;const i=WT.copy(t.at()).project($e),s=i.z>1||t.t<=0;if(t.t<=0){t.el.remove(),qr.splice(e,1);continue}t.el.style.display=s?"none":"",t.el.style.left=(i.x+1)/2*window.innerWidth+"px",t.el.style.top=(1-i.y)/2*window.innerHeight+"px",t.el.style.opacity=String(Kt(t.t*3))}}const Ld=n=>n[Math.floor(Math.random()*n.length)];let fa=[],Ci="";const Tu=Ye("acts"),kr=Ye("drinkBtn");kr.addEventListener("pointerdown",n=>{n.preventDefault(),Dd()});const XT=Ye("jumpBtn"),Yr=Ye("runBtn");XT.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),vd(Nt)});Yr.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),ul=!0,Yr.classList.add("on"),Yr.setPointerCapture(n.pointerId)});const ng=()=>{ul=!1,Yr.classList.remove("on")};Yr.addEventListener("pointerup",ng);Yr.addEventListener("pointercancel",ng);function yo(n){let e=null,t=n;for(const i of Ln){if(!i.active||i.mad>0||i.asks>2)continue;const s=Math.hypot(i.p.g.position.x-Y,i.p.g.position.z-te);s<t&&(t=s,e=i)}return e}function ss(){const n=Ln.some(i=>i.active&&Math.hypot(i.p.g.position.x-Pe.sprinkler.x,i.p.g.position.z-Pe.sprinkler.z)<9),e=Math.hypot(hn.position.x-Y,hn.position.z-te)<2.2,t=wt??yo(2.8);return{x:Y,z:te,pedNear:n,catNear:e,ped:t?{kind:t.kind,asks:t.asks}:void 0}}const $T={spray:"Spray!",cat:"Pet cat",dance:"Dance!",snack:"Snatch snack",bench:"Sing!"};function jT(n){if(n.whimsy)return $T[n.id.slice(7)];if(n.id.startsWith("trash:"))return"Dig trash";if(n.id.startsWith("enter:"))return"Go in: "+Hm[n.id.slice(6)];switch(n.id){case"beg":return"Ask · "+ua[ss().ped.kind].name;case"pickup":return"Grab";case"recycle":return`Recycle +$${N.bottles}`;case"dumpster":return"Dig";case"bakeryBin":return"Bakery bin";case"mix":return"Mix";case"sleep":return"Sleep";case"sit":return"Sit";case"stand":return"Get up";case"pigeons":return"Feed pigeons";case"tv":return"Watch TV";case"smoke":return"Smoke";case"stashPut":return"Hide "+n.label.split(" ")[1];case"stashTake":return"Take "+n.label.split(" ")[1]}return n.label}function Ei(n,e,t){const i=document.createElement("div");i.className="act "+e,i.textContent=n,i.addEventListener("pointerdown",s=>{s.preventDefault(),t()}),Tu.prepend(i)}function qT(){var e;const n=_0(N);if(wt){const t=al(N,ss()),i="beg"+t.join("|");i!==Ci&&(Ci=i,Tu.innerHTML="",t.forEach((s,r)=>Ei(Wm[s].label+gE[wt&&j1(N,wt.kind,s)||"none"],"line"+(r===0?" first":""),()=>kd(s))),Ei("Leave","line dim",()=>uo()))}else{const t=fa.slice(0,5),i=an.nearest(Y,te),s=pn==null?void 0:pn.near(Y,te),r=t.map(o=>o.id+o.label).join("|")+(n??"")+(n?N.drinks[n]:"")+N.bottles+(((e=ss().ped)==null?void 0:e.kind)??"")+(i?"t"+i.id:"")+(s?s.id+Dn(N,s.id):"")+(Qt&&Math.hypot(Y-Qt.x,te-Qt.z)<3.5?"ev":"")+(nt(N).secretSpot&&Math.hypot(Y-lo.x,te-lo.z)<3?"sec":"");r!==Ci&&(Ci=r,Tu.innerHTML="",i&&Ei(Yw[i.kind],"whimsy poke",()=>Pd(i)),dE(),t.forEach((o,a)=>Ei(jT(o),(a===0?"first":"")+(o.whimsy?" whimsy":"")+(o.id==="beg"?" beg":""),()=>Xc(a))))}if(kr.classList.toggle("hidden",!n),n){const t="round"+(n==="mix"?" mix":n==="wine"?" wine":"");kr.className!==t&&(kr.className=t);const i=N.drinks.beer+N.drinks.vodka+N.drinks.wine+N.drinks.mix,s=Bn(cn.bottle,n==="vodka"?"#e8f4ff":n==="mix"?"#fff":n==="wine"?"#8a1a3a":"#5a3a10")+`<div class="badge">${i}</div>`;kr.innerHTML!==s&&(kr.innerHTML=s)}}function YT(n){n==="jump"?(Oe("pop",{pitch:1.4,vol:.5}),Yi(ht,"jump"),As(-.25)):n==="land"?(As(.3),Oe("step",{vol:.8,pitch:.7})):n==="puff"||n==="climb"?(Hc(Y,Nt.y+.1,te,[15130064,13220008],6,1.5),n==="climb"&&Oe("tap")):n==="roll"?(Oe("pop",{pitch:.7}),Jt("Stumble-roll!")):n==="slide"?(Oe("tap",{pitch:.6}),Hc(Y,.3,te,[9413557],5,1)):n==="trip"&&(Oe("nope"),Jt(Ld(["Whoops. Down he goes.","The ground came up fast.","A nap? Sure."])),As(.45))}function Pd(n){const e=N.day+":"+n.id,t=Vp.get(e);if(t!==void 0&&mt-t<3)return;const i=Kw(n.kind,{high:Ii(N),night:ol(N),usedToday:t!==void 0},Math.random());Vp.set(e,mt),i.money&&(N.money+=i.money),i.whimsy&&(N.whimsy=Math.min(100,N.whimsy+i.whimsy)),i.health&&(N.health=Kt(N.health+i.health,0,100)),i.trouble&&(N.copAlert=!0),i.wet&&(xc=20),Oe(i.sound),Jt(i.say),i.anim&&Yi(ht,i.anim);const s={litter:[15130064,9075290,12043442],feathers:[14540253,9080728],notes:[2759188,16735370],paint:[16735370,3526842,16758784,7097343],splash:[9425151,16777215],bus:[9425151,6981800]};if(i.fx&&s[i.fx]&&Hc(n.x,.8,n.z,s[i.fx],i.fx==="splash"||i.fx==="bus"?16:10,5),i.fx==="spin"&&(Lr=1.3,Ho={x:n.x,z:n.z}),i.fx==="ride"&&(wi=an.trolleys.find(r=>r.thing===n)??null,vc=3,Zn=Math.atan2(n.x-Y,n.z-te)+Math.PI),n.kind==="pigeons")for(const r of Td)Math.hypot(r.m.position.x-n.x,r.m.position.z-n.z)<5&&Hc(r.m.position.x,.5,r.m.position.z,[9080728],3,6);i.anim==="sit"&&(N.sitting=!0),og("whimsy")}function As(n=.35){Pr=-n,bc=0}function Xc(n){if(!fn||Nn||Pn)return;if(wt){const s=al(N,ss());n<s.length?kd(s[n]):uo();return}const e=fa[n];if(!e)return;const t=ss();if(!xS(N,e.id,t)){Oe("nope");return}if(As(),e.id==="beg"){JT();return}if(e.id.startsWith("enter:")){aa(e.id.slice(6));return}if(/^own:(craft|pawn|books|steal:)/.test(e.id)){aa(e.id.slice(4));return}if(e.id.startsWith("own:")&&(Oe("pop",{pitch:1.3}),e.id.startsWith("own:grab")&&Yi(ht,"pick-up")),e.whimsy&&(di=2.2,Gc=-Gc,Oe("sparkle"),Yi(ht,"emote-yes"),e.id.slice(7)==="spray")){let r=null,o=99;for(const a of Ln){if(!a.active)continue;const c=Math.hypot(a.p.g.position.x-Pe.sprinkler.x,a.p.g.position.z-Pe.sprinkler.z);c<o&&(o=c,r=a)}r&&(r.wet=3,wu(Ld(["AAH!","My suit!","Hey!!"]),ig(r.p),"them"))}e.id==="pickup"&&(sa.forEach((s,r)=>{s.visible&&!N.bottlesLeft[r]&&(HT(s),s.visible=!1)}),Oe("clink"),Oe("pop",{pitch:1.2}),Yi(ht,"pick-up")),e.id==="recycle"&&(Oe("clink",{pitch:.9}),Oe("clink",{pitch:1.15})),(e.id==="dumpster"||e.id.startsWith("trash:")||e.id==="bakeryBin")&&(Oe("pop",{pitch:.7}),Yi(ht,"pick-up")),e.id==="mix"&&Oe("clink"),e.id==="pigeons"&&(gc[sl.find(s=>Math.hypot(Pe[s].x-Y,Pe[s].z-te)<4)??"pigeons"]=8,Oe("sparkle",{pitch:1.4})),(e.id==="tv"||e.id==="smoke")&&Oe("pop",{pitch:.6}),e.id==="sit"&&eE(),(e.id==="stashPut"||e.id==="stashTake")&&(dn.set("stash",N.stash),Oe("pop")),e.id==="sleep"&&(tE(),Is())}const ig=n=>()=>KT.set(n.g.position.x,2.5,n.g.position.z),KT=new k,ZT=()=>new k(Y,3.3,te);function JT(){const n=yo(2.8);n&&(wt=n,n.talkT=8,N.sitting=!1,Ci="")}function uo(){wt&&(wt.talkT=Math.min(wt.talkT,.6)),wt=null,Ci=""}function kd(n){const e=wt;if(!e)return;const t=ss(),i=N.money,s=vS(N,t,n);if(!s){Oe("nope");return}e.asks++,N.copAlert=!1,wu(Ld(Wm[n].say),ZT,"me",2.2),Yi(ht,"emote-yes");const r=s.outcome==="angry"||s.outcome==="hate";s.outcome==="hate"&&hl(N,Sn(Y,te),"fight"),oa(.65,()=>{wu(s.reply,ig(e.p),r?"them mad":s.outcome==="give"?"them give":"them",2.8),s.outcome==="give"?(Yi(e.p,"emote-yes"),N.money===i&&Oe("pop",{pitch:1.3})):s.laughed?Oe("sparkle",{pitch:1.6}):Oe("nope",{vol:.5}),s.callCop&&sg()}),r?(e.mad=6,e.talkT=0,e.dir=Math.sign(e.p.g.position.x-Y)||1):e.talkT=1.6,wt=null,Ci=""}const Go=[];function oa(n,e){Go.push({t:n,fn:e})}function QT(n){for(let e=Go.length-1;e>=0;e--)if((Go[e].t-=n)<=0){const t=Go[e].fn;Go.splice(e,1),t()}}function sg(){Jt("Someone called the cop!"),Oe("whistle");const n=vn.g.position;Math.hypot(n.x-Y,n.z-te)>40&&n.set(Y+(Math.random()<.5?-34:34),0,te>0?6.5:-5.5),Lt.mode="chase",Lt.t=0}function eE(){let n=ea[0],e=1e9;for(const t of ea){const i=Math.hypot(t.x-Y,t.z-te);i<e&&(e=i,n=t)}Y=n.x,te=n.z+.15,Zn=Math.PI}function Dd(){!fn||Nn||Pn||(yS(N)?(Oe("gulp"),As(.25)):Oe("nope"))}function tE(){$i.style.transition="none",$i.style.opacity="1",$i.offsetWidth,$i.style.transition="opacity 1.5s",$i.style.opacity="0"}const Ks=Ye("shopPanel");function aa(n){Pn=n,uo(),Oe("pop",{pitch:.8}),$c(),Ks.classList.remove("hidden")}function pa(){Pn=null,Ks.classList.add("hidden"),qc=performance.now()}function $c(){if(!Pn)return;if(Lw(Pn)){Uw(Ks,Pn,N,_E);return}const n=Pn,e={liquor:'"The usual?"',corner:'"No loitering. Unless you buy."',truck:'"Hot and fresh, friend."'};Ks.innerHTML=`<div class="shead"><b>${Hm[n]}</b><span class="smoney">${Bn(cn.coin,"#ffd84a")}${N.money}</span></div>
    <div class="sgreet">${e[n]}</div><div class="slist"></div><button class="sclose">Leave</button>`;const t=Ks.querySelector(".slist");for(const i of $m[n]){const s=Xm[i],r=document.createElement("div"),o=i==="lighter"&&N.items.lighter||i==="sign"&&N.items.sign||i==="shades"&&N.items.shades||i==="goodBlanket"&&N.items.goodBlanket||i==="jokebook"&&N.items.jokebook;r.className="srow"+(N.money<s.price||o?" poor":""),r.innerHTML=`<div><div class="sname">${s.name}</div><div class="snote">${o?"Got it.":s.note}</div></div><div class="sbuy">$${s.price}</div>`,r.addEventListener("pointerdown",a=>{a.preventDefault();const c=N.money;g0(N,n,i,{x:Y,z:te})?(Oe(i==="beer"||i==="vodka"||i==="wine"?"clink":i==="scratch"&&N.money>c-s.price?"sparkle":"pop"),As(.2)):Oe("nope"),fl(),$c()}),t.appendChild(r)}Ks.querySelector(".sclose").addEventListener("pointerdown",i=>{i.preventDefault(),pa()})}const rg=[{k:"health",icon:cn.heart,col:"#ff4d5e",low:n=>n<30},{k:"withdrawal",icon:cn.bolt,col:"#a6e04a",low:n=>n>75},{k:"buzz",icon:cn.bottle,col:"#ffb02e",low:()=>!1},{k:"whimsy",icon:cn.star,col:"#ff6ad5",low:n=>n<25},{k:"hunger",icon:cn.food,col:"#ff9a4a",low:n=>n<20}];Ye("meters").innerHTML=rg.map(n=>`<div class="meter" id="m_${n.k}"><div class="ic">${Bn(n.icon,n.col)}</div><div class="track"><div class="fill" id="f_${n.k}" style="background:${n.col}"></div></div></div>`).join("");const nE=Ye("chips"),Eu=Ye("toast"),fh=Ye("sun"),iE=Ye("sky"),sE=Ye("goals");let Au=0,$p="",Ru="";function Jt(n){Eu.textContent=n,Eu.classList.add("on"),Au=2.4}function ph(n,e,t,i,s){const r=new k(t,i,s).project($e);if(r.z>1)return;const o=document.createElement("div");o.className="float",o.textContent=n,o.style.color=e,o.style.left=(r.x+1)/2*window.innerWidth+"px",o.style.top=(1-r.y)/2*window.innerHeight+"px",document.body.appendChild(o),setTimeout(()=>o.remove(),1150)}function og(n){const e=document.getElementById(n);e&&(e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump"))}function rE(n){for(const a of rg){const c=N[a.k];Ye("f_"+a.k).style.width=c+"%",Ye("m_"+a.k).classList.toggle("low",a.low(c))}Ye("dayno").textContent="D"+N.day;const e=nr(N);fh.style.left=e*100+"%",fh.style.top=4+(1-Math.sin(Math.PI*Math.min(1,e/Mt.nightAt)))*16+"px",fh.classList.toggle("moon",ol(N)),iE.classList.toggle("late",e>.9);const t=N.draw.weather,i=t==="mild"?Bn(cn.sunI,"#ffd84a"):t==="rain"?Bn(cn.cloud,"#bcd",'stroke="#bcd" stroke-width="1.5"'):Bn(cn.snow,"#cfe6ff"),s=N.items,r=`${N.money}|${N.bottles}|${t}|${JSON.stringify(s)}|${N.inv.cigs}`;r!==$p&&($p=r,nE.innerHTML=`<div class="chip" id="c_money">${Bn(cn.coin,"#ffd84a")}${N.money}</div><div class="chip" id="c_bottles">${Bn(cn.bottle,"#3fd060")}${N.bottles}</div><div class="chip">${i}</div>`+(s.blanket||s.goodBlanket?`<div class="chip">${Bn(cn.blanket,s.goodBlanket?"#e0a040":"#e06060",'stroke="#fff" stroke-width=".8"')}</div>`:"")+(s.scooter?`<div class="chip">${Bn(cn.scooter,"none",'stroke="#3fd0c0" stroke-width="2"')}</div>`:"")+(s.jokebook?'<div class="chip txt">Jokes</div>':"")+(s.sign?'<div class="chip txt">Sign</div>':"")+(s.shades?'<div class="chip txt">Shades</div>':"")+(N.inv.cigs>0?`<div class="chip txt">Smokes ${N.inv.cigs}</div>`:""));const o=JSON.stringify(N.goals);o!==Ru&&(Ru=o,sE.innerHTML=N.goals.map(a=>{const c=cd[a.id],l=c.n>1&&!a.done?` ${Math.min(a.got,c.n)}/${c.n}`:"";return`<div class="goal${a.done?" done":""}"><span class="box">${a.done?"✓":""}</span>${c.text}${l}</div>`}).join("")),N.money>Sc&&(ph("+$"+(N.money-Sc),"#ffd84a",Y,2.4,te),Oe("coin"),og("c_money")),N.whimsy>wc+.5&&ph("+"+Math.round(N.whimsy-wc),"#ff8ae0",Y+.6,2.9,te),N.health<Tc-5&&ph("-"+Math.round(Tc-N.health),"#ff4d5e",Y-.6,2.6,te),Sc=N.money,wc=N.whimsy,Tc=N.health,fl(),Au-=n,Au<=0&&Eu.classList.remove("on")}function oE(){for(const n of B0)if(Y>n.x0-.45&&Y<n.x1+.45&&te>n.z0-.45&&te<n.z1+.45){const t=Y-(n.x0-.45),i=n.x1+.45-Y,s=te-(n.z0-.45),r=n.z1+.45-te,o=Math.min(t,i,s,r);o===t?Y=n.x0-.45:o===i?Y=n.x1+.45:o===s?te=n.z0-.45:te=n.z1+.45}Y=Math.max(ja.minX,Math.min(ja.maxX,Y)),te=Math.max(ja.minZ,Math.min(ja.maxZ,te))}const Dr=n=>Math.atan2(Math.sin(n),Math.cos(n)),aE=new k,ag={beer:{sway:.35,roll:.03,orbit:.12,breathe:0},vodka:{sway:1.1,roll:.1,orbit:.3,breathe:.025},wine:{sway:.25,roll:.025,orbit:.16,breathe:.04},mix:{sway:.1,roll:.015,orbit:.22,breathe:.07}},Yt={soberDist:12,soberPitch:.86,highDist:9.5,highPitch:.36,highAhead:2,aheadSecs:.6,aheadMax:3.2,roadPull:1.15,runPull:1.12,talkPush:.85,leanTalk:.45,leanDoor:.3};function cE(n,e){const t=nr(N),i=Sn(Y,te),r=Math.max(3,Math.round((ei===0?6:ei===1?9:12)*ha[i].busy(t)));hh-=e;const o=Ln.filter(a=>a.active);if(hh<=0&&o.length<r){hh=.35;const a=T1.filter(c=>c.x0<Y+40&&c.x1>Y-40&&Math.abs(c.z-te)<30);if(a.length){const c=a[Math.floor(Math.random()*a.length)],l=Math.random()<.5?-1:1,h=Kt(Y+l*(26+Math.random()*12),c.x0,c.x1);if(Math.abs(h-Y)>18){const u=y1(Sn(h,c.z),Math.random()),d=Ln.find(p=>!p.active&&p.kind===u)??Ln.find(p=>!p.active);d&&(d.active=!0,d.p.g.visible=!0,d.asks=0,d.mad=0,d.talkT=0,d.wet=0,d.id=++V0,d.dir=Math.random()<.7?-l:l,d.speed=Ed[d.kind].speed*(.85+Math.random()*.3),d.p.g.position.set(h,0,c.z+(Math.random()-.5)*.6))}}}for(const a of Ln){if(!a.active)continue;const c=a.p.g.position;let l=a.wet>0?a.speed*3:a.mad>0?a.speed*1.8:a.speed;a.wet=Math.max(0,a.wet-n),a.mad=Math.max(0,a.mad-n),a.talkT>0||wt===a?(a.talkT-=n,l=0,a.p.g.rotation.y=Math.atan2(Y-c.x,te-c.z)+Math.PI):(c.x+=a.dir*l*n,a.p.g.rotation.y=a.dir>0?-Math.PI/2:Math.PI/2),na(a.p,l,n),a.wet>0&&(a.p.body.position.y=Math.abs(Math.sin(mt*12))*.3),(Math.abs(c.x-Y)>46||c.x<-106||c.x>108)&&(a.active=!1,a.p.g.visible=!1,wt===a&&uo())}wt&&Math.hypot(wt.p.g.position.x-Y,wt.p.g.position.z-te)>4.5&&uo()}let pn,Qt,lE=0,Cu=!1,jp="";function cg(){pn||(pn=new LT(Ft,(n,e)=>{const t=Ed[n];return dc(t.shirt,3814464,{hair:2759184,model:t.model,tint:e})})),Qt=AT(N.seed,N.day),pn.setEvent(Qt)}function hE(){cg();const n=nt(N);n.day.cool!==N.day&&(n.day.cool=N.day,N.day>1&&vT(N),Cu&&(Cu=!1,hl(N,Sn(Y,te),"passout")),sT(N),oa(2.8,()=>Jt(`${Qt.icon} ${Qt.text}`)))}function lg(){const n=Math.hypot(Y-Pe.alley.x,te-Pe.alley.z)<Pe.alley.r,e=Math.hypot(Y-Pe.dumpster.x,te-Pe.dumpster.z)<2.2;let t=Ln.filter(i=>i.active&&Math.hypot(i.p.g.position.x-Y,i.p.g.position.z-te)<3.5).length;return RT(Qt.id)&&Math.hypot(Y-Qt.x,te-Qt.z)<5&&(t+=3),ST({inAlley:n,byDumpster:e,crowd:t})}function hg(n){const e=ET(N,nt(N).copKind,n,Math.random());Lt.mode="patrol",vn.g.position.set(Y+42,0,Lt.side),Oe(e.outcome==="cell"||e.outcome==="jail"?"whistle":"nope"),e.taunt&&oa(2,()=>Jt(e.taunt)),Ci=""}function uE(n){pn.update(N,n,Y,te);const e=Sn(Y,te),t=Br(N,e);gT(N,n,s=>{const r=pn.posOf(s);return!!r&&Math.hypot(r.x-Y,r.z-te)<4}),Math.hypot(hn.position.x-Y,hn.position.z-te)<2.5&&mT(N,"cat");const i=pn.posOf("fox");if(i){const s=dT(N,ol(N),Math.hypot(i.x-Y,i.z-te));s&&(Jt(s),Oe("nope"))}uT(N,t)&&jp!==N.day+e&&(jp=N.day+e,Jt(`Mazal shouts: "Cops all over ${ha[e].name} today. Careful!"`)),pn.hud(N,t,Qt)}function Rr(n){n&&Jt(n),Ci="",Oe("pop",{pitch:1.1})}function dE(){if(!pn)return"";const n=pn.near(Y,te),e=nt(N),t=Math.hypot(Y-Qt.x,te-Qt.z)<3.5,i=e.secretSpot&&Math.hypot(Y-lo.x,te-lo.z)<3;if(i&&Ei("✨ Work the steps","whimsy poke",()=>Rr(pT(N))),t&&(Ei(`${Qt.icon} ${Qt.name}`,"whimsy poke",()=>Rr(CT(N,Qt))),e.wallet&&Ei("Keep the wallet","poke",()=>Rr(IT(N)))),n){n.role==="regular"&&Ei("Pester "+n.name,"poke",()=>{const r=k0(N,n.id);hl(N,Sn(Y,te),"pester"),Rr(r.text),r.callCop&&sg()}),n.role==="rival"&&Ei("Shoo Kobi","poke",()=>Rr(rT(N)));const s=n.role==="trader"?"Trade":n.role==="rival"?"Share $2":n.role==="thief"?"Eyes on you":"Talk";Ei(`${s}: ${n.name}`,"whimsy poke",()=>Rr(D0(N,n.id,Y,te)))}return(n?n.id+Dn(N,n.id):"")+(t?"ev"+e.wallet:"")+(i?"sec":"")+e.rep}function Iu(n){var G,J;mt+=n,Mc>0&&(Mc-=n,n*=.05);const e=di>0?.35:1,t=n*e;di=Math.max(0,di-n),Xp+=t,N.day!==bu&&(bu=N.day,hE(),W0()),SS(N,t),N.messages.some(I=>I.startsWith("He passed out"))&&(Cu=!0);let i=ni.x,s=ni.y;(En.has("a")||En.has("arrowleft"))&&(i-=1),(En.has("d")||En.has("arrowright"))&&(i+=1),(En.has("w")||En.has("arrowup"))&&(s-=1),(En.has("s")||En.has("arrowdown"))&&(s+=1);let r=Math.hypot(i,s);r>1&&(i/=r,s/=r,r=1),N.sitting&&(r>.4?N.sitting=!1:(i=s=0,r=0)),gs>0&&(i=s=0,r=0,gs-=t),dh=r<.1?dh+n:0;const{speed:o,wobble:a}=MS(N),c=Ts?0:mi+ti;En.has("z")&&(ti+=n*1.6),En.has("c")&&(ti-=n*1.6);const l=Math.sin(c),h=Math.cos(c);let u=(l*-s+-h*i)*o,d=(h*-s+l*i)*o;const p=ag[N.effect??"beer"];let g=0;if(!Ts&&ot>.3){const I=r>.2?-s/r:0;if(I>.3){const L=Dr(Math.atan2(u,d)-mi-ti),ae=.35;Math.abs(L)>ae&&(g=Math.sign(L)*Math.min(1.1,(Math.abs(L)-ae)*2.2)*I*ot)}dh>1.5&&di<=0&&(g=p.orbit*ot)}else Ts||(g=Kt(Dr(-mi)*2.5,-3,3));if(yc+=(g-yc)*Math.min(1,n*4),mi=Dr(mi+yc*n),Math.abs(mi)<1e-4&&ot<.3&&(mi=0),a>0){const I=Math.sin(mt*1.7)*a*.8+Math.sin(mt*.63)*a*.5,L=Math.cos(I),ae=Math.sin(I);if([u,d]=[u*L-d*ae,u*ae+d*L],!N.sitting){const re=mt*.37;u+=Math.cos(re)*a*1.3,d+=Math.sin(re*1.3)*a*1.3}}const _=Ii(N)?Kt(N.buzz/80):0;xc=Math.max(0,xc-t);const m=N.draw.weather==="rain"||xc>0||an.inPuddle(Y,te),f=Nt.running?Dt.runMul:1,v=Ip(an.plats,Y,te),y=Ip(an.plats,Y+u*t*f*3,te+d*t*f*3),x=qw(Nt,{il:r,runHeld:ul||En.has("shift"),vx:u,vz:d,drunk:_,wet:m,ground:y,groundHere:v},t);u=x.vx,d=x.vz;for(const I of x.events)YT(I);if(Lr>0){Lr-=t;const I=Lr*9;Y=Ho.x+Math.cos(I)*.8,te=Ho.z+Math.sin(I)*.8,u=-Math.sin(I)*6,d=Math.cos(I)*6}else if(vc>0&&wi){vc-=t;const I=Zn+Math.PI;u=Math.sin(I)*7+u*.3,d=Math.cos(I)*7+d*.3,wi.g.position.set(Y+Math.sin(I)*.9,wi.home.y,te+Math.cos(I)*.9),wi.g.rotation.y=I+Math.PI/2,wi.thing.x=wi.g.position.x,wi.thing.z=wi.g.position.z,vc<=0&&(wi=null,As(.3))}di<=0&&!wt&&Lr<=0&&(Y+=(u+_s.x)*t,te+=(d+_s.z)*t);const C=Math.exp(-6*t);_s.x*=C,_s.z*=C,oE();const A=N.sitting||wt?0:Math.hypot(u,d);if(A>.3&&gs<=0){const I=Math.atan2(u,d)+Math.PI;Zn+=Dr(I-Zn)*Math.min(1,n*12)}wt&&(Zn=Math.atan2(wt.p.g.position.x-Y,wt.p.g.position.z-te)+Math.PI),ht.g.position.set(Y,(N.sitting?.05:0)+Nt.y,te),ht.g.rotation.y=Zn,ht.g.rotation.z=a>0?Math.sin(mt*2.2)*.2*a:0;const R=!Ii(N)&&N.withdrawal>70?(N.withdrawal-70)/30:0;ht.g.rotation.x=gs>0?-Math.min(1.2,gs*2):R*Math.sin(mt*47)*.05,Nt.roll>0?ht.g.rotation.x=-(1-Nt.roll/Dt.rollTime)*Math.PI*2:Nt.trip>0?ht.g.rotation.x=-Math.min(1.35,(Dt.tripTime-Nt.trip)*6):Nt.slide>0?ht.g.rotation.x=.35:Nt.running&&(ht.g.rotation.x+=-.12),Lr>0&&(Zn=Math.atan2(Ho.x-Y,Ho.z-te)+Math.PI/2),na(ht,di>0?0:Nt.onGround?A:0,t)&&di<=0&&Nt.onGround&&Oe("step",{vol:Nt.running?.7:.5,pitch:(Nt.running?1.15:.9)+Math.random()*.2});const D=yo(6),w=D?Kt(Dr(Math.atan2(D.p.g.position.x-Y,D.p.g.position.z-te)+Math.PI-Zn),-.9,.9):0;if(oh+=(w-oh)*Math.min(1,n*5),Xi.head&&Xi.head.rotateY(oh),_>.3){const I=(_-.3)*1.6;(G=Xi.armL)==null||G.rotateZ(Math.sin(mt*5.3)*I),(J=Xi.armR)==null||J.rotateZ(Math.sin(mt*4.1+1)*I)}for(let I=qo.length-1;I>=0;I--){const L=qo[I];L.t+=n,L.vy-=12*n,L.m.position.x+=L.vx*n,L.m.position.y=Math.max(.25,L.m.position.y+L.vy*n),L.m.position.z+=L.vz*n,L.m.rotation.x+=n*8,L.t>1.6&&(Ft.remove(L.m),qo.splice(I,1))}if(di>0?ht.body.position.y=Math.abs(Math.sin(mt*10))*.3:N.sitting&&(ht.body.position.y=-.32),bc+=(-Pr*220-bc*14)*n,Pr+=bc*n,ht.body.scale.set(1-Pr*.5,1+Pr,1-Pr*.5),vu.visible=N.items.blanket||N.items.goodBlanket,Ir.visible=N.items.scooter,yu.visible=N.items.sign,Mu.visible=N.items.shades,lS(N,t,Y,te,Ii(N)),N.own.fell&&(N.own.fell=!1,gs=.8,Oe("nope")),fg.update(N,mt),uh-=n,uh<=0){uh=.5;const I=mS(N,Y,te);I&&Jt(I)}zr=ES(Xp);for(let I=0;I<2;I++)if(sh[I]-=t,sh[I]<=0){const L=I===0?1:-1,ae=Kt(Y-L*66,-112,112),re=I===0?-2:2,de=pi.some(Le=>Le.lane===I&&Math.abs(Le.x-ae)<9);if(sh[I]=de?.5:2+Math.random()*3.5,!de&&pi.length<(ei===0?5:8)){const Le=gw(Gp[Math.floor(Math.random()*Gp.length)],Math.floor(Math.random()*4));Le.g.position.set(ae,0,re),Le.g.rotation.y=L>0?0:Math.PI,Zt(Le.g);const ie=Cn.cruiseMin+Math.random()*(Cn.cruiseMax-Cn.cruiseMin);pi.push({m:Le,x:ae,z:re,dir:L,speed:ie,cruise:ie,honkT:0,lane:I})}}ah-=t;let M=0;for(let I=pi.length-1;I>=0;I--){const L=pi[I];let ae=null,re=1e9;for(const fe of pi){if(fe===L||fe.lane!==L.lane)continue;const Re=(fe.x-L.x)*L.dir;Re>0&&Re<re&&(re=Re,ae=fe)}const de=AS(L,{x:Y,z:te},zr,ae);L.honkT-=t;const Le=Math.hypot(L.x-Y,L.z-te);de.honk&&L.honkT<=0&&L.speed>.8&&Le<25&&(Oe("horn",{pitch:.85+I%4*.08,vol:Kt(1.2-Le/25,.2,1)}),L.honkT=3);const ie=L.speed;L.speed=RS(L.speed,de.want,t),L.m.brake.emissiveIntensity=L.speed<ie-.001||L.speed<.3?3:.15,L.x+=L.dir*L.speed*t,L.m.g.position.x=L.x;for(const fe of L.m.wheels)fe.rotation[L.m.spin]+=L.m.spinSign*L.speed*t/.36;if(Math.abs(L.x)>114||(L.x-Y)*L.dir>72){Ft.remove(L.m.g),pi.splice(I,1);continue}Math.abs(te-L.z)<2.2&&(Y-L.x)*L.dir>-2&&(Y-L.x)*L.dir<10&&L.speed>2&&(M=1),CS(L,{x:Y,z:te})&&(L.speed>1.2&&ah<=0?(wS(N),uo(),ah=1.5,qs=.8,Mc=.14,ra=1,gs=.7,_s.x=L.dir*(3+L.speed*.8),_s.z=(L.z<0?-1:1)*8,L.speed=0,Oe("hit"),As(.45)):L.speed<=1.2&&(te=L.z+(te>=L.z?1:-1)*Cn.hitWide))}for(const I of H0){const L=zr==="stop"?0:zr==="slow"?1:2;I.mats.forEach((ae,re)=>ae.emissiveIntensity=re===3?1.5:re===L?2.5:0),I.mats[3].emissive.setHex([16724016,16760864,3211104][L])}cE(t,n);const P=Gs.tx-hn.position.x,V=Gs.tz-hn.position.z,T=Math.hypot(P,V);if(T<.3){if(Gs.wait-=t,Gs.wait<=0){const I=[[10,15],[6,18],[-12,-10],[-20,-14],[2,-14],[13,12]],L=I[Math.floor(Math.random()*I.length)];Gs.tx=L[0],Gs.tz=L[1],Gs.wait=4+Math.random()*6}}else hn.position.x+=P/T*1.4*t,hn.position.z+=V/T*1.4*t,hn.rotation.y=Math.atan2(P,V)+Math.PI,hn.position.y=Math.abs(Math.sin(mt*9))*.06;for(const I of Td){const L=Pe[I.spot],ae=(gc[I.spot]??0)>0;I.a+=t*(ae?2.5:.4);const re=ae?Y:L.x,de=ae?te:L.z,Le=ae?.7+I.r*.4:I.r,ie=re+Math.cos(I.a)*Le,fe=de+Math.sin(I.a)*Le;I.m.position.x+=(ie-I.m.position.x)*Math.min(1,t*3),I.m.position.z+=(fe-I.m.position.z)*Math.min(1,t*3),I.m.position.y=Math.abs(Math.sin(mt*7+I.r*5))*.12,I.m.rotation.y=-I.a}for(const I of Object.keys(gc))gc[I]-=t;G0.forEach((I,L)=>I.color.setHSL(Math.floor(mt*1.3+L)*.17%1,.5,.55+Math.sin(mt*9)*.05));const U=TS(N),H=vn.g.position,j=Y-H.x,K=te-H.z,$=Math.hypot(j,K),ce=I=>{Lt.mode="chase",Lt.t=0,Jt(I),Oe("whistle")},ue=Sn(Y,te),ve=nt(N),ze=xu[ve.copKind],dt=ve.copKind==="veteran"&&ve.faces>=2,Z=U.sight*ze.sight*(dt?1.3:1),se=lg(),ye=!se&&($<2.5||bT(H.x,H.z,vn.g.rotation.y,Y,te,Z*.6,ze.cone));if(N.copAlert){hl(N,ue,"theft");const I=tT(N,pn.seen(Y,te).map(L=>({id:L.id,dist:L.dist,sameArea:Sn(L.x,L.z)===ue})));I&&oa(1.4,()=>Jt(I))}N.copAlert&&(N.copAlert=!1,$<Z&&!se&&ce("The cop saw that. Run!")),Lt.mode==="patrol"&&N.buzz>=U.drunkAt&&!se&&($<U.drunkRange*.6||ye&&$<U.drunkRange*1.6)&&ce('Cop: "Hey! You!"'),Lt.mode==="patrol"&&dt&&Br(N,ue)>=20&&ye&&ce('Veteran cop: "I know that face!"');let he=2;if(Lt.mode==="chase"){Lt.t+=t;const I=U.speed*ze.speed;if(H.x+=j/$*I*t,H.z+=K/$*I*t,vn.g.rotation.y=Math.atan2(j,K)+Math.PI,he=I,$<1.1)hg(Br(N,ue));else if(Lt.t>12||$>Z+6||se&&$>5){Lt.mode="patrol";const L=N0(N,ve.copKind);Jt(se?"You vanish. The cop gave up.":"The cop gave up."),L&&oa(1.6,()=>Jt(L))}}else{const I=32/yT(Br(N,ue));Math.abs(H.x-Y)>60&&(H.set(Y+(Math.random()<.5?-1:1)*(I+13),0,Lt.side),ve.copKind=MT(N.seed,N.day,ue,Br(N,ue),++lE)),H.z+=Math.sign(Lt.side-H.z)*Math.min(Math.abs(Lt.side-H.z),2*t),H.x+=Lt.dir*2*ze.speed*t,vn.g.rotation.y=Lt.dir>0?-Math.PI/2:Math.PI/2,H.x>Y+I&&(Lt.dir=-1,Lt.side=Lt.side>0?-5.5:6.5),H.x<Y-I&&(Lt.dir=1)}pn.cop(ve.copKind,H.x,H.z,vn.g.rotation.y,Z*.6,$<16,ve.nemesis.name),na(vn,he,t);const Ae=Lt.mode==="chase";zc.emissiveIntensity=Ae?3:0,Ae&&zc.emissive.setHex(Math.floor(mt*6)%2?2113791:16719904);for(let I=_c.length-1;I>=0;I--){const L=_c[I];L.t+=n,L.o.position.y+=n*4,L.o.rotation.y+=n*12,L.o.scale.setScalar(1+L.t*3),L.t>.35&&(Ft.remove(L.o),_c.splice(I,1))}const Ue=N.health<35||Ae||M>0;if(tc-=n,Ue&&tc<=0&&(Oe("heart",{vol:N.health<35?1:.6}),tc=N.health<20?.55:Ae?.6:.8),lh-=n,lh<=0){lh=.25;for(const I of wd)I.o.visible=Math.abs(I.x-Y)<nh;for(const I of sa)Math.abs(I.position.x-Y)>nh&&(I.visible=!1);sa.forEach((I,L)=>{N.bottlesLeft[L]&&Math.abs(I.position.x-Y)<=nh&&(I.visible=!0)})}const je=Math.min(1,N.buzz/35);ot+=(je-ot)*Math.min(1,n*1.5);const _t=nr(N),Qe=_t>Mt.nightAt?Math.min(1,(_t-Mt.nightAt)/.1):0,et=Oc(_t),z=_t/Mt.nightAt*Math.PI;Gt.position.set(Y+Math.cos(z)*24,3+et.sunH*28,te-14),Gt.target.position.set(Y,0,te),Gt.intensity=et.sunI,Gt.color.setRGB(...et.sun),mc.intensity=et.hemiI,mc.color.setRGB(...et.hemiSky),mc.groundColor.setRGB(...et.hemiGround);const wn=N.draw.weather==="rain"?.8:N.draw.weather==="cold"?.94:1,Ke=new Te().setRGB(...Xw(_t,ot,mt)).multiplyScalar(ot>.5?1:wn);Ft.background=Ke;const Je=Bc.map(I=>({l:I,d:Math.abs(I.g.position.x-Y)+Math.abs(I.g.position.z-te)*.5})).sort((I,L)=>I.d-L.d).slice(0,4);$0.forEach((I,L)=>{var re;const ae=(re=Je[L])==null?void 0:re.l;ae&&(I.position.set(ae.pool.position.x,3.6,ae.pool.position.z),I.intensity=et.lamps*14,I.visible=et.lamps>.01)});const Ce=et.neon*(1+ot*.5),bt=Math.floor(mt*3);for(let I=0;I<an.neonBase.length;I++)an.neon.setColorAt(I,pE.copy(an.neonBase[(I+bt)%an.neonBase.length]).multiplyScalar(Ce));an.neon.instanceColor.needsUpdate=!0;const Ee=Ft.fog;Ee.color.copy(Ke),Ee.near=26+ot*10,Ee.far=58+ot*4;for(const I of cl)I.emissiveIntensity=et.windows*1.6;_w.opacity=et.lamps*.32;for(const I of z0){const L=Math.hypot(Y-I.x,te-I.z)<=I.r;I.m.material.opacity=L?.6:.14+Math.sin(mt*2)*.04}fE(n,r,o);const E=Kt(N.whimsy/30);An.sat=(.86+ot*.5)*(.3+.7*E),An.warm=et.warm*(1-ot)+ot*.9,An.contrast=.95+ot*.17,An.glow=.2+ot*.9+Qe*.6,An.bright=et.bright+ot*.02,An.flood=Kt((ot-.15)/.5),An.tilt=.6,An.outline=.85,mE.style.opacity=Nt.stamina<99?"1":"0",qp.style.width=Nt.stamina+"%",qp.style.background=Nt.dry?"#d84a3a":"#ffb800";const b=Math.max(0,1-Math.abs(tc-.5)*4);An.red=Math.max(ra,N.health<35?(35-N.health)/35*(.75+.25*b):0),An.jitter=R*.9,uE(t),fa=p0(N,ss()),qT(),rE(n),tg(n),QT(n),ch+=n,ch>3&&(ch=0,Is()),N.dead&&VT()}const Vs=new k,mh=new k,gh=new k;let jc=!1;function fE(n,e,t){qs=Math.max(0,qs-n*2),ra=Math.max(0,ra-n*2.5);const i=ag[N.effect??"beer"],s=N.buzz/100;jc=!1;let r=jo;if(di>0){const c=1-di/2.2,l=Zn+Math.PI+Gc*.9,h=4.6-c*1.4;$e.position.set(Y+Math.sin(l)*h,1.1+c*.4,te+Math.cos(l)*h),$e.lookAt(Y,1.25,te),$e.rotateZ(Gc*.06*(1-c)),r=jo-6-c*4}else if(Ts){const c=Math.round(Y/24)*24,l=Math.round(te/16)*16,h=26-ot*10,u=18-ot*4;$e.position.lerp(aE.set(c,h,l-u),Math.min(1,n*6)),$e.lookAt($e.position.x,0,$e.position.z+u)}else{const c=Math.min(1,n*2.2),l=(Y-(rt.vx===0&&rt.vz===0?Y:Lu))/Math.max(n,.001),h=(te-(rt.vx===0&&rt.vz===0?te:Pu))/Math.max(n,.001);rt.vx+=(Kt(l,-9,9)-rt.vx)*c,rt.vz+=(Kt(h,-9,9)-rt.vz)*c,Lu=Y,Pu=te;const u=1-ot;let d=Y+Kt(rt.vx*Yt.aheadSecs,-3.2,Yt.aheadMax)*u,p=te+Kt(rt.vz*Yt.aheadSecs,-3.2,Yt.aheadMax)*u;const g=mi+ti;d+=Math.sin(g)*Yt.highAhead*ot,p+=Math.cos(g)*Yt.highAhead*ot;let _=1;const m=ss(),f=wt??(m.ped?yo(2.8):null);if(f)d=ms(d,(f.p.g.position.x+Y)/2,Yt.leanTalk),p=ms(p,(f.p.g.position.z+te)/2,Yt.leanTalk),_*=wt?Yt.talkPush:.93;else if(u0(m)||h0(m)){let T=cu[0],U=1e9;for(const H of cu){const j=Math.hypot(H.x-Y,H.z-te);j<U&&(U=j,T=H)}d=ms(d,T.x,Yt.leanDoor),p=ms(p,T.z,Yt.leanDoor)}Math.abs(te)<4.3&&(_*=Yt.roadPull),e>.1&&t>6.5&&(_*=Yt.runPull),ot>.3&&fa.some(T=>T.whimsy)&&(_*=.82),m.catNear&&ot>.3&&(d=ms(d,hn.position.x,.4),p=ms(p,hn.position.z,.4)),rt.fx+=(d-rt.fx)*Math.min(1,n*3),rt.fz+=(p-rt.fz)*Math.min(1,n*3);const y=$e.aspect<1?1:0,x=ms(Yt.soberDist+y*.5,Yt.highDist,ot)*_*Cs;rt.dist+=(x-rt.dist)*Math.min(1,n*1.6);const C=ms(Yt.soberPitch+y*.05,Yt.highPitch,ot),A=Math.cos(C);Vs.set(-Math.sin(g)*A,Math.sin(C),-Math.cos(g)*A);const R=i.sway*s*ot,D=Math.cos(g),w=-Math.sin(g),M=(Math.sin(mt*.9)*.7+Math.sin(mt*.37)*.5)*R,P=Math.sin(mt*1.3)*.3*R;$e.position.set(rt.fx+Vs.x*rt.dist+D*M,.9+Vs.y*rt.dist+P,rt.fz+Vs.z*rt.dist+w*M),$e.lookAt($e.position.x-Vs.x,$e.position.y-Vs.y,$e.position.z-Vs.z);const V=ot>.05?i.roll*ot*(Math.sin(mt*.7)+.4*Math.sin(mt*1.9)):0;if(rt.roll+=(V-rt.roll)*Math.min(1,n*3),Math.abs(rt.roll)>1e-4&&$e.rotateZ(rt.roll),r=jo*(1+i.breathe*ot*Math.sin(mt*.8)),ot<.02&&mi===0&&ti===0&&qs<=0&&Math.abs(rt.roll)<1e-4){$e.updateMatrixWorld(),mh.setFromMatrixColumn($e.matrixWorld,0),gh.setFromMatrixColumn($e.matrixWorld,1);const T=2*rt.dist*Math.tan(dm.degToRad(r)/2)/xi.lowH,U=$e.position.dot(mh),H=$e.position.dot(gh);$e.position.addScaledVector(mh,Math.round(U/T)*T-U).addScaledVector(gh,Math.round(H/T)*T-H),jc=!0}}Math.abs($e.fov-r)>.01&&($e.fov=r,$e.updateProjectionMatrix());const o=!Ii(N)&&N.withdrawal>70?(N.withdrawal-70)/30:0,a=qs*qs*.9+o*.05;a>0&&($e.position.x+=(Math.random()-.5)*a,$e.position.y+=(Math.random()-.5)*a)}let Lu=0,Pu=0;const pE=new Te,mE=Ye("stam"),qp=Ye("stamFill"),An={sat:.58,warm:.22,contrast:.97,glow:.2,red:0,jitter:0,bright:1.05};let qc=performance.now(),_h=0,nc=0,Ec=60,ic=0,Yp=0;const ug=Ye("dbg");F0&&ug.classList.remove("hidden");function dg(n){const e=(n-qc)/1e3,t=Math.min(.05,e);if(qc=n,fn&&!Nn&&!Pn?Iu(t):fn&&(na(ht,0,0),tg(t)),yn.info.reset(),xi.render(Ft,$e,An,mt,Fc[ei].glow),_h++,nc+=e,nc>=1&&(Ec=_h/nc,_h=0,nc=0,fn&&!Nn&&document.visibilityState==="visible"&&(Yp++,ic=Ec<40?ic+1:0,PT&&Yp>4&&ic>=3&&ei>0&&(ei--,ic=0,Sd())),F0)){const i=yn.info.render;ug.textContent=`fps ${Ec.toFixed(0)}  q${ei}  ${xi.lowW}x${xi.lowH} x${xi.scale}
calls ${i.calls}  tris ${i.triangles}
peds ${Ln.filter(s=>s.active).length}  cars ${pi.length}  ${fn?Sn(Y,te):""}
audio ${Bw()}  light ${zr}  snap ${jc?"on":"off"}
models ${xd.length}`}requestAnimationFrame(dg)}let fg;const gE={likes:" ♥",hates:" ✗",meh:"",none:""};function fl(){for(;N.messages.length;){const n=N.messages.shift();n.startsWith("Combo!")?(Nw(n),Oe("sparkle",{pitch:1.2})):Jt(n)}}const _E={pos:()=>({x:Y,z:te}),pedNear:()=>!!yo(2.8),close:pa,open:n=>{Pn=n,$c()},rerender:$c,flush:fl,sound:n=>Oe(n)};async function xE(){is.innerHTML='<div style="opacity:.6">Loading the city…</div>',await mw(),UT(),FT(),BT(),fg=new Rw(Ft,ht.g),Dw(()=>{fn&&!Nn&&!Pn&&aa("bag")}),O0(),$e.position.set(-20,10,-4),$e.lookAt(-20,0,6),N=md("BOOT"),W0(),Rd(),requestAnimationFrame(dg)}xE();window.__sg={get s(){return N},get pos(){return{px:Y,pz:te}},tp(n,e){Y=n,te=e,rt.fx=n,rt.fz=e,Lu=n,Pu=e},get acts(){return fa.map(n=>n.id)},act:Xc,doDrink:Dd,startLife:Wc,continueLife:q0,pauseGame:dl,resumeGame:Cd,saveLife:Is,get paused(){return Nn},get running(){return fn},get cop(){return{...Lt,x:vn.g.position.x,z:vn.g.position.z}},setCop(n,e){vn.g.position.set(n,0,e)},get cat(){return{x:hn.position.x,z:hn.position.z}},get cars(){return pi.map(n=>({x:+n.x.toFixed(2),z:n.z,speed:+n.speed.toFixed(2),dir:n.dir}))},get peds(){return Ln.filter(n=>n.active).map(n=>({kind:n.kind,x:+n.p.g.position.x.toFixed(1),z:+n.p.g.position.z.toFixed(1),asks:n.asks,mad:n.mad>0}))},summon(n){const e=Ln.find(t=>t.kind===n&&!t.active)??Ln.find(t=>t.kind===n);return e.active=!0,e.p.g.visible=!0,e.asks=0,e.mad=0,e.talkT=3,e.id=++V0,e.p.g.position.set(Y+1.2,0,te),n},sayLine:kd,get begOpen(){return!!wt},get lines(){return wt?al(N,ss()):[]},get bubbles(){return qr.map(n=>n.el.textContent)},openShop:aa,closeShop:pa,get shopOpen(){return Pn},buyRow(n){var e;(e=Ks.querySelectorAll(".srow")[n])==null||e.dispatchEvent(new PointerEvent("pointerdown"))},get light(){return zr},get fps(){return Ec},get quality(){return ei},get sounds(){return pc.map(n=>n.name)},get grade(){return{...An}},get camYaw(){return mi},setUserCam(n,e){ti=n,Cs=e},centerCam:Ad,get cam(){return{...rt,userYaw:ti,userZoom:Cs,x:$e.position.x,y:$e.position.y,z:$e.position.z,fov:$e.fov,snapped:jc}},get models(){return[...xd]},get highness(){return ot},bench(n=60){const e=yn.getContext(),t=new Uint8Array(4),i=performance.now();for(let s=0;s<n;s++)yn.info.reset(),xi.render(Ft,$e,An,mt,Fc[ei].glow),e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,t);return+((performance.now()-i)/n).toFixed(2)},setQuality(n){ei=n,Sd()},get render(){const n=yn.info.render;return{calls:n.calls,tris:n.triangles,low:[xi.lowW,xi.lowH,xi.scale]}},setTime(n){N.time=n*Mt.dayLength},jump(){vd(Nt)},setRun(n){ul=n},get mover(){return{...Nt}},get things(){return an.things.map(n=>({id:n.id,kind:n.kind,x:n.x,z:n.z}))},poke(n){const e=an.things.filter(t=>t.kind===n).sort((t,i)=>Math.abs(t.x-Y)-Math.abs(i.x-Y))[0];return e?(Y=e.x+.6,te=e.z-(e.z>0?.8:-.8),Pd(e),e.kind):null},get bits(){return qo.length},get sky(){return Oc(nr(N))},stick(n,e){ni.x=n,ni.y=e},sim(n,e){for(let t=0;t<n&&fn&&!N.dead;t+=1/30)e==null||e(),Iu(1/30);yn.info.reset(),N.dead&&fn&&Iu(1/30),xi.render(Ft,$e,An,mt,Fc[ei].glow)}};Object.assign(window.__sg,{ownState:()=>N.own,give:n=>Bt(N,n,Y,te),use:n=>Qm(N,n,!!yo(2.8)),craft:n=>I0(N,n,Y,te),steal:(n,e)=>s0(N,n,e),pawnSell:n=>o0(N,n),openPanel:n=>aa(n),drain:fl});Object.defineProperties(window.__sg,Object.getOwnPropertyDescriptors({get city(){return nt(N)},get event(){return Qt},get near(){return pn.near(Y,te)},get hidden(){return lg()},get heat(){return Br(N,Sn(Y,te))},talk:n=>D0(N,n,Y,te),pester:n=>k0(N,n),copCaught:hg,where:n=>{const e=pn.posOf(n);return e?{x:e.x,z:e.z}:null},setCopKind:n=>{nt(N).copKind=n}}));Object.assign(window.__sg,{tapSel:n=>{var e;return(e=document.querySelector(n))==null?void 0:e.dispatchEvent(new PointerEvent("pointerdown"))}});
