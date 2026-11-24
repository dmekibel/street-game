(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ku="170",Vg=0,uf=1,Wg=2,vm=1,bm=2,Zi=3,os=0,Bn=1,Di=2,Ps=0,Kr=1,Vc=2,df=3,ff=4,Xg=5,tr=100,$g=101,jg=102,qg=103,Yg=104,Kg=200,Zg=201,Jg=202,Qg=203,Dh=204,Nh=205,e_=206,t_=207,n_=208,i_=209,s_=210,r_=211,o_=212,a_=213,c_=214,Uh=0,Fh=1,Oh=2,oo=3,Bh=4,zh=5,Hh=6,Gh=7,Zu=0,l_=1,h_=2,ks=0,u_=1,d_=2,f_=3,p_=4,m_=5,g_=6,__=7,pf="attached",x_="detached",Mm=300,ao=301,co=302,Vh=303,Wh=304,dl=306,lo=1e3,Rs=1001,Wc=1002,Qt=1003,wm=1004,qo=1005,qn=1006,yc=1007,ts=1008,as=1009,Sm=1010,Tm=1011,la=1012,Ju=1013,ar=1014,Ai=1015,So=1016,Qu=1017,ed=1018,ho=1020,Em=35902,Am=1021,Rm=1022,oi=1023,Cm=1024,Im=1025,Zr=1026,uo=1027,td=1028,nd=1029,Lm=1030,id=1031,sd=1033,vc=33776,bc=33777,Mc=33778,wc=33779,Xh=35840,$h=35841,jh=35842,qh=35843,Yh=36196,Kh=37492,Zh=37496,Jh=37808,Qh=37809,eu=37810,tu=37811,nu=37812,iu=37813,su=37814,ru=37815,ou=37816,au=37817,cu=37818,lu=37819,hu=37820,uu=37821,Sc=36492,du=36494,fu=36495,Pm=36283,pu=36284,mu=36285,gu=36286,km=2200,y_=2201,v_=2202,ha=2300,ua=2301,Pl=2302,Xr=2400,$r=2401,Xc=2402,rd=2500,b_=2501,M_=0,Dm=1,_u=2,w_=3200,S_=3201,od=0,T_=1,Es="",Ft="srgb",Ln="srgb-linear",fl="linear",bt="srgb",mr=7680,mf=519,E_=512,A_=513,R_=514,Nm=515,C_=516,I_=517,L_=518,P_=519,xu=35044,gf="300 es",ns=2e3,$c=2001;class ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _f=1234567;const ea=Math.PI/180,fo=180/Math.PI;function Ri(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function gn(n,e,t){return Math.max(e,Math.min(t,n))}function ad(n,e){return(n%e+e)%e}function k_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function D_(n,e,t){return n!==e?(t-n)/(e-n):0}function ta(n,e,t){return(1-t)*n+t*e}function N_(n,e,t,i){return ta(n,e,1-Math.exp(-t*i))}function U_(n,e=1){return e-Math.abs(ad(n,e*2)-e)}function F_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function O_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function B_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function z_(n,e){return n+Math.random()*(e-n)}function H_(n){return n*(.5-Math.random())}function G_(n){n!==void 0&&(_f=n);let e=_f+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V_(n){return n*ea}function W_(n){return n*fo}function X_(n){return(n&n-1)===0&&n!==0}function $_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function j_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function q_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Um={DEG2RAD:ea,RAD2DEG:fo,generateUUID:Ri,clamp:gn,euclideanModulo:ad,mapLinear:k_,inverseLerp:D_,lerp:ta,damp:N_,pingpong:U_,smoothstep:F_,smootherstep:O_,randInt:B_,randFloat:z_,randFloatSpread:H_,seededRandom:G_,degToRad:V_,radToDeg:W_,isPowerOfTwo:X_,ceilPowerOfTwo:$_,floorPowerOfTwo:j_,setQuaternionFromProperEuler:q_,normalize:vt,denormalize:wi};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,s,r,o,a,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],y=s[1],v=s[4],x=s[7],C=s[2],A=s[5],R=s[8];return r[0]=o*_+a*y+c*C,r[3]=o*m+a*v+c*A,r[6]=o*p+a*x+c*R,r[1]=l*_+h*y+u*C,r[4]=l*m+h*v+u*A,r[7]=l*p+h*x+u*R,r[2]=d*_+f*y+g*C,r[5]=d*m+f*v+g*A,r[8]=d*p+f*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kl.makeScale(e,t)),this}rotate(e){return this.premultiply(kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kl=new Ve;function Fm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Y_(){const n=da("canvas");return n.style.display="block",n}const xf={};function Yo(n){n in xf||(xf[n]=!0,console.warn(n))}function K_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Z_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function J_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nt={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===bt&&(n.r=ss(n.r),n.g=ss(n.g),n.b=ss(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===bt&&(n.r=Jr(n.r),n.g=Jr(n.g),n.b=Jr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Es?fl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ss(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Jr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const yf=[.64,.33,.3,.6,.15,.06],vf=[.2126,.7152,.0722],bf=[.3127,.329],Mf=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wf=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[Ln]:{primaries:yf,whitePoint:bf,transfer:fl,toXYZ:Mf,fromXYZ:wf,luminanceCoefficients:vf,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:yf,whitePoint:bf,transfer:bt,toXYZ:Mf,fromXYZ:wf,luminanceCoefficients:vf,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}});let gr;class Q_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gr===void 0&&(gr=da("canvas")),gr.width=e.width,gr.height=e.height;const i=gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=gr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ss(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ss(t[i]/255)*255):t[i]=ss(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ex=0;class Om{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dl(s[o].image)):r.push(Dl(s[o]))}else r=Dl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Dl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Q_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tx=0;class $t extends ur{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=Rs,s=Rs,r=qn,o=ts,a=oi,c=as,l=$t.DEFAULT_ANISOTROPY,h=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Ri(),this.name="",this.source=new Om(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lo:e.x=e.x-Math.floor(e.x);break;case Rs:e.x=e.x<0?0:1;break;case Wc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lo:e.y=e.y-Math.floor(e.y);break;case Rs:e.y=e.y<0?0:1;break;case Wc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Mm;$t.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,x=(f+1)/2,C=(p+1)/2,A=(h+d)/4,R=(u+_)/4,N=(g+m)/4;return v>x&&v>C?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=A/i,r=R/i):x>C?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=N/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=N/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nx extends ur{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new $t(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Om(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fs extends nx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bm extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ix extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,p*y);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const x=a*y;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nl.copy(this).projectOnVector(e),this.sub(Nl)}reflect(e){return this.sub(Nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nl=new D,Sf=new Kn;class Ii{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pa.copy(i.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),ka.subVectors(this.max,Do),_r.subVectors(e.a,Do),xr.subVectors(e.b,Do),yr.subVectors(e.c,Do),ms.subVectors(xr,_r),gs.subVectors(yr,xr),Hs.subVectors(_r,yr);let t=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Hs.z,Hs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Hs.z,0,-Hs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Hs.y,Hs.x,0];return!Ul(t,_r,xr,yr,ka)||(t=[1,0,0,0,1,0,0,0,1],!Ul(t,_r,xr,yr,ka))?!1:(Da.crossVectors(ms,gs),t=[Da.x,Da.y,Da.z],Ul(t,_r,xr,yr,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new D,new D,new D,new D,new D,new D,new D,new D],pi=new D,Pa=new Ii,_r=new D,xr=new D,yr=new D,ms=new D,gs=new D,Hs=new D,Do=new D,ka=new D,Da=new D,Gs=new D;function Ul(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Gs.fromArray(n,r);const a=s.x*Math.abs(Gs.x)+s.y*Math.abs(Gs.y)+s.z*Math.abs(Gs.z),c=e.dot(Gs),l=t.dot(Gs),h=i.dot(Gs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const sx=new Ii,No=new D,Fl=new D;class Bi{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const t=No.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(No,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(Fl)),this.expandByPoint(No.copy(e.center).sub(Fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new D,Ol=new D,Na=new D,_s=new D,Bl=new D,Ua=new D,zl=new D;class pl{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ol.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),_s.copy(this.origin).sub(Ol);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Na),a=_s.dot(this.direction),c=-_s.dot(Na),l=_s.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ol).addScaledVector(Na,d),f}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const i=$i.dot(this.direction),s=$i.dot($i)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,i,s,r){Bl.subVectors(t,e),Ua.subVectors(i,e),zl.crossVectors(Bl,Ua);let o=this.direction.dot(zl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_s.subVectors(this.origin,e);const c=a*this.direction.dot(Ua.crossVectors(_s,Ua));if(c<0)return null;const l=a*this.direction.dot(Bl.cross(_s));if(l<0||c+l>o)return null;const h=-a*_s.dot(zl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/vr.setFromMatrixColumn(e,0).length(),r=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rx,e,ox)}lookAt(e,t,i){const s=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),xs.crossVectors(i,Vn),xs.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),xs.crossVectors(i,Vn)),xs.normalize(),Fa.crossVectors(Vn,xs),s[0]=xs.x,s[4]=Fa.x,s[8]=Vn.x,s[1]=xs.y,s[5]=Fa.y,s[9]=Vn.y,s[2]=xs.z,s[6]=Fa.z,s[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],v=i[7],x=i[11],C=i[15],A=s[0],R=s[4],N=s[8],S=s[12],b=s[1],k=s[5],V=s[9],T=s[13],U=s[2],H=s[6],j=s[10],K=s[14],$=s[3],ce=s[7],ue=s[11],ye=s[15];return r[0]=o*A+a*b+c*U+l*$,r[4]=o*R+a*k+c*H+l*ce,r[8]=o*N+a*V+c*j+l*ue,r[12]=o*S+a*T+c*K+l*ye,r[1]=h*A+u*b+d*U+f*$,r[5]=h*R+u*k+d*H+f*ce,r[9]=h*N+u*V+d*j+f*ue,r[13]=h*S+u*T+d*K+f*ye,r[2]=g*A+_*b+m*U+p*$,r[6]=g*R+_*k+m*H+p*ce,r[10]=g*N+_*V+m*j+p*ue,r[14]=g*S+_*T+m*K+p*ye,r[3]=y*A+v*b+x*U+C*$,r[7]=y*R+v*k+x*H+C*ce,r[11]=y*N+v*V+x*j+C*ue,r[15]=y*S+v*T+x*K+C*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*f-i*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+i*o*f+r*a*h-i*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,v=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,C=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,A=t*y+i*v+s*x+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=y*R,e[1]=(_*d*r-u*m*r-_*s*f+i*m*f+u*s*p-i*d*p)*R,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*p+i*c*p)*R,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*f-i*c*f)*R,e[4]=v*R,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*R,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*R,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*R,e[8]=x*R,e[9]=(g*u*r-h*_*r-g*i*f+t*_*f+h*i*p-t*u*p)*R,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*f-t*a*f)*R,e[12]=C*R,e[13]=(h*_*s-g*u*s+g*i*d-t*_*d-h*i*m+t*u*m)*R,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,y=c*l,v=c*h,x=c*u,C=i.x,A=i.y,R=i.z;return s[0]=(1-(_+p))*C,s[1]=(f+x)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(d+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+v)*R,s[9]=(m-y)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=vr.set(s[0],s[1],s[2]).length();const o=vr.set(s[4],s[5],s[6]).length(),a=vr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mi.copy(this);const l=1/r,h=1/o,u=1/a;return mi.elements[0]*=l,mi.elements[1]*=l,mi.elements[2]*=l,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=u,mi.elements[9]*=u,mi.elements[10]*=u,t.setFromRotationMatrix(mi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ns){const c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s);let f,g;if(a===ns)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$c)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ns){const c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*l,f=(i+s)*h;let g,_;if(a===ns)g=(o+r)*u,_=-2*u;else if(a===$c)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vr=new D,mi=new Fe,rx=new D(0,0,0),ox=new D(1,1,1),xs=new D,Fa=new D,Vn=new D,Tf=new Fe,Ef=new Kn;class Ci{constructor(e=0,t=0,i=0,s=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ef.setFromEuler(this),this.setFromQuaternion(Ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class zm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ax=0;const Af=new D,br=new Kn,ji=new Fe,Oa=new D,Uo=new D,cx=new D,lx=new Kn,Rf=new D(1,0,0),Cf=new D(0,1,0),If=new D(0,0,1),Lf={type:"added"},hx={type:"removed"},Mr={type:"childadded",child:null},Hl={type:"childremoved",child:null};class Lt extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new D,t=new Ci,i=new Kn,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Ve}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Rf,e)}rotateY(e){return this.rotateOnAxis(Cf,e)}rotateZ(e){return this.rotateOnAxis(If,e)}translateOnAxis(e,t){return Af.copy(e).applyQuaternion(this.quaternion),this.position.add(Af.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rf,e)}translateY(e){return this.translateOnAxis(Cf,e)}translateZ(e){return this.translateOnAxis(If,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Oa.copy(e):Oa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Uo,Oa,this.up):ji.lookAt(Oa,Uo,this.up),this.quaternion.setFromRotationMatrix(ji),s&&(ji.extractRotation(s.matrixWorld),br.setFromRotationMatrix(ji),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lf),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hx),Hl.child=e,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lf),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,lx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new D(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new D,qi=new D,Gl=new D,Yi=new D,wr=new D,Sr=new D,Pf=new D,Vl=new D,Wl=new D,Xl=new D,$l=new ut,jl=new ut,ql=new ut;class ri{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),gi.subVectors(e,t),s.cross(gi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){gi.subVectors(s,t),qi.subVectors(i,t),Gl.subVectors(e,t);const o=gi.dot(gi),a=gi.dot(qi),c=gi.dot(Gl),l=qi.dot(qi),h=qi.dot(Gl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yi.x),c.addScaledVector(o,Yi.y),c.addScaledVector(a,Yi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return $l.setScalar(0),jl.setScalar(0),ql.setScalar(0),$l.fromBufferAttribute(e,t),jl.fromBufferAttribute(e,i),ql.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector($l,r.x),o.addScaledVector(jl,r.y),o.addScaledVector(ql,r.z),o}static isFrontFacing(e,t,i,s){return gi.subVectors(i,t),qi.subVectors(e,t),gi.cross(qi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),gi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ri.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;wr.subVectors(s,i),Sr.subVectors(r,i),Vl.subVectors(e,i);const c=wr.dot(Vl),l=Sr.dot(Vl);if(c<=0&&l<=0)return t.copy(i);Wl.subVectors(e,s);const h=wr.dot(Wl),u=Sr.dot(Wl);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(wr,o);Xl.subVectors(e,r);const f=wr.dot(Xl),g=Sr.dot(Xl);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Sr,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Pf.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Pf,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(wr,o).addScaledVector(Sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Yl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Te{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=ad(e,1),t=gn(t,0,1),i=gn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Yl(o,r,e+1/3),this.g=Yl(o,r,e),this.b=Yl(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ft){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const i=Hm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return nt.fromWorkingColorSpace(un.copy(this),e),Math.round(gn(un.r*255,0,255))*65536+Math.round(gn(un.g*255,0,255))*256+Math.round(gn(un.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(un.copy(this),t);const i=un.r,s=un.g,r=un.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Ft){nt.fromWorkingColorSpace(un.copy(this),e);const t=un.r,i=un.g,s=un.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(Ba);const i=ta(ys.h,Ba.h,t),s=ta(ys.s,Ba.s,t),r=ta(ys.l,Ba.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new Te;Te.NAMES=Hm;let ux=0;class hi extends ur{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Ri(),this.name="",this.blending=Kr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dh,this.blendDst=Nh,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Dh&&(i.blendSrc=this.blendSrc),this.blendDst!==Nh&&(i.blendDst=this.blendDst),this.blendEquation!==tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class En extends hi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new D,za=new Le;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xu,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)za.fromBufferAttribute(this,t),za.applyMatrix3(e),this.setXY(t,za.x,za.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xu&&(e.usage=this.usage),e}}class Gm extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Vm extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pt extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let dx=0;const ti=new Fe,Kl=new Lt,Tr=new D,Wn=new Ii,Fo=new Ii,Kt=new D;class cn extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fm(e)?Vm:Gm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,i){return ti.makeTranslation(e,t,i),this.applyMatrix4(ti),this}scale(e,t,i){return ti.makeScale(e,t,i),this.applyMatrix4(ti),this}lookAt(e){return Kl.lookAt(e),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pt(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(Wn.min,Fo.min),Wn.expandByPoint(Kt),Kt.addVectors(Wn.max,Fo.max),Wn.expandByPoint(Kt)):(Wn.expandByPoint(Fo.min),Wn.expandByPoint(Fo.max))}Wn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Kt.fromBufferAttribute(a,l),c&&(Tr.fromBufferAttribute(e,l),Kt.add(Tr)),s=Math.max(s,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new D,c[N]=new D;const l=new D,h=new D,u=new D,d=new Le,f=new Le,g=new Le,_=new D,m=new D;function p(N,S,b){l.fromBufferAttribute(i,N),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,b),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const k=1/(f.x*g.y-g.x*f.y);isFinite(k)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(k),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(k),a[N].add(_),a[S].add(_),a[b].add(_),c[N].add(m),c[S].add(m),c[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let N=0,S=y.length;N<S;++N){const b=y[N],k=b.start,V=b.count;for(let T=k,U=k+V;T<U;T+=3)p(e.getX(T+0),e.getX(T+1),e.getX(T+2))}const v=new D,x=new D,C=new D,A=new D;function R(N){C.fromBufferAttribute(s,N),A.copy(C);const S=a[N];v.copy(S),v.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(A,S);const k=x.dot(c[N])<0?-1:1;o.setXYZW(N,v.x,v.y,v.z,k)}for(let N=0,S=y.length;N<S;++N){const b=y[N],k=b.start,V=b.count;for(let T=k,U=k+V;T<U;T+=3)R(e.getX(T+0)),R(e.getX(T+1)),R(e.getX(T+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new an(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kf=new Fe,Vs=new pl,Ha=new Bi,Df=new D,Ga=new D,Va=new D,Wa=new D,Zl=new D,Xa=new D,Nf=new D,$a=new D;class qe extends Lt{constructor(e=new cn,t=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Xa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Zl.fromBufferAttribute(u,e),o?Xa.addScaledVector(Zl,h):Xa.addScaledVector(Zl.sub(t),h))}t.add(Xa)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Vs.copy(e.ray).recast(e.near),!(Ha.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(Ha,Df)===null||Vs.origin.distanceToSquared(Df)>(e.far-e.near)**2))&&(kf.copy(r).invert(),Vs.copy(e.ray).applyMatrix4(kf),!(i.boundingBox!==null&&Vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,C=v;x<C;x+=3){const A=a.getX(x),R=a.getX(x+1),N=a.getX(x+2);s=ja(this,p,e,i,l,h,u,A,R,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=ja(this,o,e,i,l,h,u,y,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,C=v;x<C;x+=3){const A=x,R=x+1,N=x+2;s=ja(this,p,e,i,l,h,u,A,R,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,v=m+1,x=m+2;s=ja(this,o,e,i,l,h,u,y,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function fx(n,e,t,i,s,r,o,a){let c;if(e.side===Bn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===os,a),c===null)return null;$a.copy(a),$a.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo($a);return l<t.near||l>t.far?null:{distance:l,point:$a.clone(),object:n}}function ja(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Ga),n.getVertexPosition(c,Va),n.getVertexPosition(l,Wa);const h=fx(n,e,t,i,Ga,Va,Wa,Nf);if(h){const u=new D;ri.getBarycoord(Nf,Ga,Va,Wa,u),s&&(h.uv=ri.getInterpolatedAttribute(s,a,c,l,u,new Le)),r&&(h.uv1=ri.getInterpolatedAttribute(r,a,c,l,u,new Le)),o&&(h.normal=ri.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new D,materialIndex:0};ri.getNormal(Ga,Va,Wa,d.normal),h.face=d,h.barycoord=u}return h}class ui extends cn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(u,2));function g(_,m,p,y,v,x,C,A,R,N,S){const b=x/R,k=C/N,V=x/2,T=C/2,U=A/2,H=R+1,j=N+1;let K=0,$=0;const ce=new D;for(let ue=0;ue<j;ue++){const ye=ue*k-T;for(let ze=0;ze<H;ze++){const dt=ze*b-V;ce[_]=dt*y,ce[m]=ye*v,ce[p]=U,l.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[p]=A>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(ze/R),u.push(1-ue/N),K+=1}}for(let ue=0;ue<N;ue++)for(let ye=0;ye<R;ye++){const ze=d+ye+H*ue,dt=d+ye+H*(ue+1),Z=d+(ye+1)+H*(ue+1),se=d+(ye+1)+H*ue;c.push(ze,dt,se),c.push(dt,Z,se),$+=6}a.addGroup(f,$,S),f+=$,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function po(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function wn(n){const e={};for(let t=0;t<n.length;t++){const i=po(n[t]);for(const s in i)e[s]=i[s]}return e}function px(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const mx={clone:po,merge:wn};var gx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_x=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends hi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gx,this.fragmentShader=_x,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xm extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=ns}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vs=new D,Uf=new Le,Ff=new Le;class Sn extends Xm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,t){return this.getViewBounds(e,Uf,Ff),t.subVectors(Ff,Uf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ea*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Er=-90,Ar=1;class xx extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(Er,Ar,e,t);s.layers=this.layers,this.add(s);const r=new Sn(Er,Ar,e,t);r.layers=this.layers,this.add(r);const o=new Sn(Er,Ar,e,t);o.layers=this.layers,this.add(o);const a=new Sn(Er,Ar,e,t);a.layers=this.layers,this.add(a);const c=new Sn(Er,Ar,e,t);c.layers=this.layers,this.add(c);const l=new Sn(Er,Ar,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ns)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$c)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class $m extends $t{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ao,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yx extends Fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new $m(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ui(5,5,5),r=new cs({name:"CubemapFromEquirect",uniforms:po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:Ps});r.uniforms.tEquirect.value=t;const o=new qe(s,r),a=t.minFilter;return t.minFilter===ts&&(t.minFilter=qn),new xx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Jl=new D,vx=new D,bx=new Ve;class Qs{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Jl.subVectors(i,t).cross(vx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Jl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bx.getNormalMatrix(e),s=this.coplanarPoint(Jl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new Bi,qa=new D;class cd{constructor(e=new Qs,t=new Qs,i=new Qs,s=new Qs,r=new Qs,o=new Qs){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ns){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],v=s[14],x=s[15];if(i[0].setComponents(c-r,d-l,m-f,x-p).normalize(),i[1].setComponents(c+r,d+l,m+f,x+p).normalize(),i[2].setComponents(c+o,d+h,m+g,x+y).normalize(),i[3].setComponents(c-o,d-h,m-g,x-y).normalize(),i[4].setComponents(c-a,d-u,m-_,x-v).normalize(),t===ns)i[5].setComponents(c+a,d+u,m+_,x+v).normalize();else if(t===$c)i[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){return Ws.center.set(0,0,0),Ws.radius=.7071067811865476,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(qa.x=s.normal.x>0?e.max.x:e.min.x,qa.y=s.normal.y>0?e.max.y:e.min.y,qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Mx(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ls extends cn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-o;for(let v=0;v<l;v++){const x=v*u-r;g.push(x,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const v=y+l*p,x=y+l*(p+1),C=y+1+l*(p+1),A=y+1+l*p;f.push(v,x,A),f.push(x,C,A)}this.setIndex(f),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(_,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.widthSegments,e.heightSegments)}}var wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sx=`#ifdef USE_ALPHAHASH
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
#endif`,Tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ax=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cx=`#ifdef USE_AOMAP
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
#endif`,Ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lx=`#ifdef USE_BATCHING
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
#endif`,Px=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ux=`#ifdef USE_IRIDESCENCE
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
#endif`,Fx=`#ifdef USE_BUMPMAP
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
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$x=`#define PI 3.141592653589793
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
} // validated`,jx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qx=`vec3 transformedNormal = objectNormal;
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
#endif`,Yx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ey=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ty=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,sy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
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
#endif`,oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hy=`#ifdef USE_GRADIENTMAP
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
}`,uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,py=`uniform bool receiveShadow;
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
#endif`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vy=`PhysicalMaterial material;
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
#endif`,by=`struct PhysicalMaterial {
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
}`,My=`
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
#endif`,wy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ty=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ey=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ay=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ry=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Py=`#if defined( USE_POINTS_UV )
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
#endif`,ky=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Oy=`#ifdef USE_MORPHTARGETS
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
#endif`,By=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xy=`#ifdef USE_NORMALMAP
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
#endif`,$y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ev=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,av=`float getShadowMask() {
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
}`,cv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lv=`#ifdef USE_SKINNING
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
#endif`,hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uv=`#ifdef USE_SKINNING
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
#endif`,dv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gv=`#ifdef USE_TRANSMISSION
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
#endif`,_v=`#ifdef USE_TRANSMISSION
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
#endif`,xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wv=`uniform sampler2D t2D;
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
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Av=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`#include <common>
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
}`,Cv=`#if DEPTH_PACKING == 3200
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
}`,Iv=`#define DISTANCE
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
}`,Lv=`#define DISTANCE
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
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`uniform float scale;
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
}`,Nv=`uniform vec3 diffuse;
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
}`,Uv=`#include <common>
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
}`,Fv=`uniform vec3 diffuse;
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
}`,Ov=`#define LAMBERT
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
}`,Bv=`#define LAMBERT
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
}`,zv=`#define MATCAP
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
}`,Hv=`#define MATCAP
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
}`,Gv=`#define NORMAL
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
}`,Vv=`#define NORMAL
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
}`,Wv=`#define PHONG
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
}`,Xv=`#define PHONG
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
}`,$v=`#define STANDARD
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
}`,jv=`#define STANDARD
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
}`,qv=`#define TOON
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
}`,Yv=`#define TOON
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
}`,Kv=`uniform float size;
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Jv=`#include <common>
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
}`,Qv=`uniform vec3 color;
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
}`,eb=`uniform float rotation;
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
}`,tb=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:wx,alphahash_pars_fragment:Sx,alphamap_fragment:Tx,alphamap_pars_fragment:Ex,alphatest_fragment:Ax,alphatest_pars_fragment:Rx,aomap_fragment:Cx,aomap_pars_fragment:Ix,batching_pars_vertex:Lx,batching_vertex:Px,begin_vertex:kx,beginnormal_vertex:Dx,bsdfs:Nx,iridescence_fragment:Ux,bumpmap_pars_fragment:Fx,clipping_planes_fragment:Ox,clipping_planes_pars_fragment:Bx,clipping_planes_pars_vertex:zx,clipping_planes_vertex:Hx,color_fragment:Gx,color_pars_fragment:Vx,color_pars_vertex:Wx,color_vertex:Xx,common:$x,cube_uv_reflection_fragment:jx,defaultnormal_vertex:qx,displacementmap_pars_vertex:Yx,displacementmap_vertex:Kx,emissivemap_fragment:Zx,emissivemap_pars_fragment:Jx,colorspace_fragment:Qx,colorspace_pars_fragment:ey,envmap_fragment:ty,envmap_common_pars_fragment:ny,envmap_pars_fragment:iy,envmap_pars_vertex:sy,envmap_physical_pars_fragment:my,envmap_vertex:ry,fog_vertex:oy,fog_pars_vertex:ay,fog_fragment:cy,fog_pars_fragment:ly,gradientmap_pars_fragment:hy,lightmap_pars_fragment:uy,lights_lambert_fragment:dy,lights_lambert_pars_fragment:fy,lights_pars_begin:py,lights_toon_fragment:gy,lights_toon_pars_fragment:_y,lights_phong_fragment:xy,lights_phong_pars_fragment:yy,lights_physical_fragment:vy,lights_physical_pars_fragment:by,lights_fragment_begin:My,lights_fragment_maps:wy,lights_fragment_end:Sy,logdepthbuf_fragment:Ty,logdepthbuf_pars_fragment:Ey,logdepthbuf_pars_vertex:Ay,logdepthbuf_vertex:Ry,map_fragment:Cy,map_pars_fragment:Iy,map_particle_fragment:Ly,map_particle_pars_fragment:Py,metalnessmap_fragment:ky,metalnessmap_pars_fragment:Dy,morphinstance_vertex:Ny,morphcolor_vertex:Uy,morphnormal_vertex:Fy,morphtarget_pars_vertex:Oy,morphtarget_vertex:By,normal_fragment_begin:zy,normal_fragment_maps:Hy,normal_pars_fragment:Gy,normal_pars_vertex:Vy,normal_vertex:Wy,normalmap_pars_fragment:Xy,clearcoat_normal_fragment_begin:$y,clearcoat_normal_fragment_maps:jy,clearcoat_pars_fragment:qy,iridescence_pars_fragment:Yy,opaque_fragment:Ky,packing:Zy,premultiplied_alpha_fragment:Jy,project_vertex:Qy,dithering_fragment:ev,dithering_pars_fragment:tv,roughnessmap_fragment:nv,roughnessmap_pars_fragment:iv,shadowmap_pars_fragment:sv,shadowmap_pars_vertex:rv,shadowmap_vertex:ov,shadowmask_pars_fragment:av,skinbase_vertex:cv,skinning_pars_vertex:lv,skinning_vertex:hv,skinnormal_vertex:uv,specularmap_fragment:dv,specularmap_pars_fragment:fv,tonemapping_fragment:pv,tonemapping_pars_fragment:mv,transmission_fragment:gv,transmission_pars_fragment:_v,uv_pars_fragment:xv,uv_pars_vertex:yv,uv_vertex:vv,worldpos_vertex:bv,background_vert:Mv,background_frag:wv,backgroundCube_vert:Sv,backgroundCube_frag:Tv,cube_vert:Ev,cube_frag:Av,depth_vert:Rv,depth_frag:Cv,distanceRGBA_vert:Iv,distanceRGBA_frag:Lv,equirect_vert:Pv,equirect_frag:kv,linedashed_vert:Dv,linedashed_frag:Nv,meshbasic_vert:Uv,meshbasic_frag:Fv,meshlambert_vert:Ov,meshlambert_frag:Bv,meshmatcap_vert:zv,meshmatcap_frag:Hv,meshnormal_vert:Gv,meshnormal_frag:Vv,meshphong_vert:Wv,meshphong_frag:Xv,meshphysical_vert:$v,meshphysical_frag:jv,meshtoon_vert:qv,meshtoon_frag:Yv,points_vert:Kv,points_frag:Zv,shadow_vert:Jv,shadow_frag:Qv,sprite_vert:eb,sprite_frag:tb},le={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ki={basic:{uniforms:wn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:wn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Te(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:wn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:wn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:wn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Te(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:wn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:wn([le.points,le.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:wn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:wn([le.common,le.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:wn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:wn([le.sprite,le.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:wn([le.common,le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:wn([le.lights,le.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ki.physical={uniforms:wn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ya={r:0,b:0,g:0},Xs=new Ci,nb=new Fe;function ib(n,e,t,i,s,r,o){const a=new Te(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const x=g(y);x===null?p(a,c):x&&x.isColor&&(p(x,1),v=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===dl)?(h===void 0&&(h=new qe(new ui(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:po(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xs.copy(v.backgroundRotation),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(nb.makeRotationFromEuler(Xs)),h.material.toneMapped=nt.getTransfer(x.colorSpace)!==bt,(u!==x||d!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new qe(new ls(2,2),new cs({name:"BackgroundMaterial",uniforms:po(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=nt.getTransfer(x.colorSpace)!==bt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(Ya,Wm(n)),i.buffers.color.setClear(Ya.r,Ya.g,Ya.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:m}}function sb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(b,k,V,T,U){let H=!1;const j=u(T,V,k);r!==j&&(r=j,l(r.object)),H=f(b,T,V,U),H&&g(b,T,V,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(b,k,V,T),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,k,V){const T=V.wireframe===!0;let U=i[b.id];U===void 0&&(U={},i[b.id]=U);let H=U[k.id];H===void 0&&(H={},U[k.id]=H);let j=H[T];return j===void 0&&(j=d(c()),H[T]=j),j}function d(b){const k=[],V=[],T=[];for(let U=0;U<t;U++)k[U]=0,V[U]=0,T[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:T,object:b,attributes:{},index:null}}function f(b,k,V,T){const U=r.attributes,H=k.attributes;let j=0;const K=V.getAttributes();for(const $ in K)if(K[$].location>=0){const ue=U[$];let ye=H[$];if(ye===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(ye=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(ye=b.instanceColor)),ue===void 0||ue.attribute!==ye||ye&&ue.data!==ye.data)return!0;j++}return r.attributesNum!==j||r.index!==T}function g(b,k,V,T){const U={},H=k.attributes;let j=0;const K=V.getAttributes();for(const $ in K)if(K[$].location>=0){let ue=H[$];ue===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor));const ye={};ye.attribute=ue,ue&&ue.data&&(ye.data=ue.data),U[$]=ye,j++}r.attributes=U,r.attributesNum=j,r.index=T}function _(){const b=r.newAttributes;for(let k=0,V=b.length;k<V;k++)b[k]=0}function m(b){p(b,0)}function p(b,k){const V=r.newAttributes,T=r.enabledAttributes,U=r.attributeDivisors;V[b]=1,T[b]===0&&(n.enableVertexAttribArray(b),T[b]=1),U[b]!==k&&(n.vertexAttribDivisor(b,k),U[b]=k)}function y(){const b=r.newAttributes,k=r.enabledAttributes;for(let V=0,T=k.length;V<T;V++)k[V]!==b[V]&&(n.disableVertexAttribArray(V),k[V]=0)}function v(b,k,V,T,U,H,j){j===!0?n.vertexAttribIPointer(b,k,V,U,H):n.vertexAttribPointer(b,k,V,T,U,H)}function x(b,k,V,T){_();const U=T.attributes,H=V.getAttributes(),j=k.defaultAttributeValues;for(const K in H){const $=H[K];if($.location>=0){let ce=U[K];if(ce===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),ce!==void 0){const ue=ce.normalized,ye=ce.itemSize,ze=e.get(ce);if(ze===void 0)continue;const dt=ze.buffer,Z=ze.type,se=ze.bytesPerElement,ve=Z===n.INT||Z===n.UNSIGNED_INT||ce.gpuType===Ju;if(ce.isInterleavedBufferAttribute){const he=ce.data,Re=he.stride,Oe=ce.offset;if(he.isInstancedInterleavedBuffer){for(let je=0;je<$.locationSize;je++)p($.location+je,he.meshPerAttribute);b.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let je=0;je<$.locationSize;je++)m($.location+je);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let je=0;je<$.locationSize;je++)v($.location+je,ye/$.locationSize,Z,ue,Re*se,(Oe+ye/$.locationSize*je)*se,ve)}else{if(ce.isInstancedBufferAttribute){for(let he=0;he<$.locationSize;he++)p($.location+he,ce.meshPerAttribute);b.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let he=0;he<$.locationSize;he++)m($.location+he);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let he=0;he<$.locationSize;he++)v($.location+he,ye/$.locationSize,Z,ue,ye*se,ye/$.locationSize*he*se,ve)}}else if(j!==void 0){const ue=j[K];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv($.location,ue);break;case 3:n.vertexAttrib3fv($.location,ue);break;case 4:n.vertexAttrib4fv($.location,ue);break;default:n.vertexAttrib1fv($.location,ue)}}}}y()}function C(){N();for(const b in i){const k=i[b];for(const V in k){const T=k[V];for(const U in T)h(T[U].object),delete T[U];delete k[V]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;const k=i[b.id];for(const V in k){const T=k[V];for(const U in T)h(T[U].object),delete T[U];delete k[V]}delete i[b.id]}function R(b){for(const k in i){const V=i[k];if(V[b.id]===void 0)continue;const T=V[b.id];for(const U in T)h(T[U].object),delete T[U];delete V[b.id]}}function N(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function rb(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ob(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==oi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const N=R===So&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==as&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ai&&!N)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:C,maxSamples:A}}function ab(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Qs,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:i,v=y*4;let x=p.clippingState||null;c.value=x,x=h(g,d,v,f);for(let C=0;C!==v;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function cb(n){let e=new WeakMap;function t(o,a){return a===Vh?o.mapping=ao:a===Wh&&(o.mapping=co),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vh||a===Wh)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new yx(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class ml extends Xm{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const jr=4,Of=[.125,.215,.35,.446,.526,.582],nr=20,Ql=new ml,Bf=new Te;let eh=null,th=0,nh=0,ih=!1;const er=(1+Math.sqrt(5))/2,Rr=1/er,zf=[new D(-er,Rr,0),new D(er,Rr,0),new D(-Rr,0,er),new D(Rr,0,er),new D(0,er,-Rr),new D(0,er,Rr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Hf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(eh,th,nh),this._renderer.xr.enabled=ih,e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ao||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:So,format:oi,colorSpace:Ln,depthBuffer:!1},s=Gf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gf(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lb(r)),this._blurMaterial=hb(r,e,t)}return s}_compileMaterial(e){const t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,Ql)}_sceneToCubeUV(e,t,i,s){const a=new Sn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bf),h.toneMapping=ks,h.autoClear=!1;const f=new En({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),g=new qe(new ui,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Bf),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;Ka(s,y*v,p>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ao||e.mapping===co;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new qe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Ka(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Ql)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zf[(s-r-1)%zf.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new qe(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*nr-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):nr;m>nr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${nr}`);const p=[];let y=0;for(let R=0;R<nr;++R){const N=R/_,S=Math.exp(-N*N/2);p.push(S),R===0?y+=S:R<m&&(y+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const x=this._sizeLods[s],C=3*x*(s>v-jr?s-v+jr:0),A=4*(this._cubeSize-x);Ka(t,C,A,3*x,2*x),c.setRenderTarget(t),c.render(u,Ql)}}function lb(n){const e=[],t=[],i=[];let s=n;const r=n-jr+1+Of.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-jr?c=Of[o-n+jr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,N=A>2?0:-1,S=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];y.set(S,_*g*A),v.set(d,m*g*A);const b=[A,A,A,A,A,A];x.set(b,p*g*A)}const C=new cn;C.setAttribute("position",new an(y,_)),C.setAttribute("uv",new an(v,m)),C.setAttribute("faceIndex",new an(x,p)),e.push(C),s>jr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Gf(n,e,t){const i=new Fs(n,e,t);return i.texture.mapping=dl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ka(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function hb(n,e,t){const i=new Float32Array(nr),s=new D(0,1,0);return new cs({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ld(),fragmentShader:`

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
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function Vf(){return new cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ld(),fragmentShader:`

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
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function Wf(){return new cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function ld(){return`

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
	`}function ub(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Vh||c===Wh,h=c===ao||c===co;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Hf(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Hf(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function db(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Yo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function fb(n,e,t,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let v=0,x=y.length;v<x;v+=3){const C=y[v+0],A=y[v+1],R=y[v+2];d.push(C,A,A,R,R,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const C=v+0,A=v+1,R=v+2;d.push(C,A,A,R,R,C)}}else return;const m=new(Fm(d)?Vm:Gm)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function pb(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function mb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function gb(n,e,t){const i=new WeakMap,s=new ut;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let b=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*A*4*u),N=new Bm(R,C,A,u);N.type=Ai,N.needsUpdate=!0;const S=x*4;for(let k=0;k<u;k++){const V=p[k],T=y[k],U=v[k],H=C*A*4*k;for(let j=0;j<V.count;j++){const K=j*S;g===!0&&(s.fromBufferAttribute(V,j),R[H+K+0]=s.x,R[H+K+1]=s.y,R[H+K+2]=s.z,R[H+K+3]=0),_===!0&&(s.fromBufferAttribute(T,j),R[H+K+4]=s.x,R[H+K+5]=s.y,R[H+K+6]=s.z,R[H+K+7]=0),m===!0&&(s.fromBufferAttribute(U,j),R[H+K+8]=s.x,R[H+K+9]=s.y,R[H+K+10]=s.z,R[H+K+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:N,size:new Le(C,A)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function _b(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class hd extends $t{constructor(e,t,i,s,r,o,a,c,l,h=Zr){if(h!==Zr&&h!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Zr&&(i=ar),i===void 0&&h===uo&&(i=ho),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=c!==void 0?c:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const qm=new $t,Xf=new hd(1,1),Ym=new Bm,Km=new ix,Zm=new $m,$f=[],jf=[],qf=new Float32Array(16),Yf=new Float32Array(9),Kf=new Float32Array(4);function To(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=$f[s];if(r===void 0&&(r=new Float32Array(s),$f[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gl(n,e){let t=jf[e];t===void 0&&(t=new Int32Array(e),jf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function vb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function Mb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;Kf.set(i),n.uniformMatrix2fv(this.addr,!1,Kf),Yt(t,i)}}function wb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;Yf.set(i),n.uniformMatrix3fv(this.addr,!1,Yf),Yt(t,i)}}function Sb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;qf.set(i),n.uniformMatrix4fv(this.addr,!1,qf),Yt(t,i)}}function Tb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Eb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function Ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function Rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function Cb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ib(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function Lb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function Pb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function kb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Xf.compareFunction=Nm,r=Xf):r=qm,t.setTexture2D(e||r,s)}function Db(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Km,s)}function Nb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Zm,s)}function Ub(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ym,s)}function Fb(n){switch(n){case 5126:return xb;case 35664:return yb;case 35665:return vb;case 35666:return bb;case 35674:return Mb;case 35675:return wb;case 35676:return Sb;case 5124:case 35670:return Tb;case 35667:case 35671:return Eb;case 35668:case 35672:return Ab;case 35669:case 35673:return Rb;case 5125:return Cb;case 36294:return Ib;case 36295:return Lb;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return kb;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Nb;case 36289:case 36303:case 36311:case 36292:return Ub}}function Ob(n,e){n.uniform1fv(this.addr,e)}function Bb(n,e){const t=To(e,this.size,2);n.uniform2fv(this.addr,t)}function zb(n,e){const t=To(e,this.size,3);n.uniform3fv(this.addr,t)}function Hb(n,e){const t=To(e,this.size,4);n.uniform4fv(this.addr,t)}function Gb(n,e){const t=To(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vb(n,e){const t=To(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Wb(n,e){const t=To(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Xb(n,e){n.uniform1iv(this.addr,e)}function $b(n,e){n.uniform2iv(this.addr,e)}function jb(n,e){n.uniform3iv(this.addr,e)}function qb(n,e){n.uniform4iv(this.addr,e)}function Yb(n,e){n.uniform1uiv(this.addr,e)}function Kb(n,e){n.uniform2uiv(this.addr,e)}function Zb(n,e){n.uniform3uiv(this.addr,e)}function Jb(n,e){n.uniform4uiv(this.addr,e)}function Qb(n,e,t){const i=this.cache,s=e.length,r=gl(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||qm,r[o])}function e1(n,e,t){const i=this.cache,s=e.length,r=gl(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Km,r[o])}function t1(n,e,t){const i=this.cache,s=e.length,r=gl(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Zm,r[o])}function n1(n,e,t){const i=this.cache,s=e.length,r=gl(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ym,r[o])}function i1(n){switch(n){case 5126:return Ob;case 35664:return Bb;case 35665:return zb;case 35666:return Hb;case 35674:return Gb;case 35675:return Vb;case 35676:return Wb;case 5124:case 35670:return Xb;case 35667:case 35671:return $b;case 35668:case 35672:return jb;case 35669:case 35673:return qb;case 5125:return Yb;case 36294:return Kb;case 36295:return Zb;case 36296:return Jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Qb;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return n1}}class s1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fb(t.type)}}class r1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i1(t.type)}}class o1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const sh=/(\w+)(\])?(\[|\.)?/g;function Zf(n,e){n.seq.push(e),n.map[e.id]=e}function a1(n,e,t){const i=n.name,s=i.length;for(sh.lastIndex=0;;){const r=sh.exec(i),o=sh.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Zf(t,l===void 0?new s1(a,n,e):new r1(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new o1(a),Zf(t,u)),t=u}}}class Tc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);a1(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Jf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const c1=37297;let l1=0;function h1(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Qf=new Ve;function u1(n){nt._getMatrix(Qf,nt.workingColorSpace,n);const e=`mat3( ${Qf.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case fl:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ep(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+h1(n.getShaderSource(e),o)}else return s}function d1(n,e){const t=u1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function f1(n,e){let t;switch(e){case u_:t="Linear";break;case d_:t="Reinhard";break;case f_:t="Cineon";break;case p_:t="ACESFilmic";break;case g_:t="AgX";break;case __:t="Neutral";break;case m_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Za=new D;function p1(){nt.getLuminanceCoefficients(Za);const n=Za.x.toFixed(4),e=Za.y.toFixed(4),t=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function g1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ko(n){return n!==""}function tp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function np(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const x1=/^[ \t]*#include +<([\w\d./]+)>/gm;function yu(n){return n.replace(x1,v1)}const y1=new Map;function v1(n,e){let t=Xe[e];if(t===void 0){const i=y1.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yu(t)}const b1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ip(n){return n.replace(b1,M1)}function M1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function w1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===bm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function S1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ao:case co:e="ENVMAP_TYPE_CUBE";break;case dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function E1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zu:e="ENVMAP_BLENDING_MULTIPLY";break;case l_:e="ENVMAP_BLENDING_MIX";break;case h_:e="ENVMAP_BLENDING_ADD";break}return e}function A1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function R1(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=w1(t),l=S1(t),h=T1(t),u=E1(t),d=A1(t),f=m1(t),g=g1(r),_=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ko).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ko).join(`
`),p.length>0&&(p+=`
`)):(m=[sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),p=[sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ks?"#define TONE_MAPPING":"",t.toneMapping!==ks?Xe.tonemapping_pars_fragment:"",t.toneMapping!==ks?f1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,d1("linearToOutputTexel",t.outputColorSpace),p1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ko).join(`
`)),o=yu(o),o=tp(o,t),o=np(o,t),a=yu(a),a=tp(a,t),a=np(a,t),o=ip(o),a=ip(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+o,x=y+p+a,C=Jf(s,s.VERTEX_SHADER,v),A=Jf(s,s.FRAGMENT_SHADER,x);s.attachShader(_,C),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(k){if(n.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),T=s.getShaderInfoLog(C).trim(),U=s.getShaderInfoLog(A).trim();let H=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,A);else{const K=ep(s,C,"vertex"),$=ep(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+V+`
`+K+`
`+$)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(T===""||U==="")&&(j=!1);j&&(k.diagnostics={runnable:H,programLog:V,vertexShader:{log:T,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(C),s.deleteShader(A),N=new Tc(s,_),S=_1(s,_)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,c1)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let C1=0;class I1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new L1(e),t.set(e,i)),i}}class L1{constructor(e){this.id=C1++,this.code=e,this.usedTimes=0}}function P1(n,e,t,i,s,r,o){const a=new zm,c=new I1,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,b,k,V,T){const U=V.fog,H=T.geometry,j=S.isMeshStandardMaterial?V.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||j),$=K&&K.mapping===dl?K.image.height:null,ce=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ue=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ye=ue!==void 0?ue.length:0;let ze=0;H.morphAttributes.position!==void 0&&(ze=1),H.morphAttributes.normal!==void 0&&(ze=2),H.morphAttributes.color!==void 0&&(ze=3);let dt,Z,se,ve;if(ce){const xt=ki[ce];dt=xt.vertexShader,Z=xt.fragmentShader}else dt=S.vertexShader,Z=S.fragmentShader,c.update(S),se=c.getVertexShaderID(S),ve=c.getFragmentShaderID(S);const he=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Oe=T.isInstancedMesh===!0,je=T.isBatchedMesh===!0,_t=!!S.map,et=!!S.matcap,tt=!!K,z=!!S.aoMap,Pn=!!S.lightMap,Ze=!!S.bumpMap,Qe=!!S.normalMap,Ie=!!S.displacementMap,Mt=!!S.emissiveMap,Ee=!!S.metalnessMap,E=!!S.roughnessMap,M=S.anisotropy>0,G=S.clearcoat>0,Q=S.dispersion>0,I=S.iridescence>0,P=S.sheen>0,ae=S.transmission>0,re=M&&!!S.anisotropyMap,de=G&&!!S.clearcoatMap,Pe=G&&!!S.clearcoatNormalMap,ie=G&&!!S.clearcoatRoughnessMap,fe=I&&!!S.iridescenceMap,Ce=I&&!!S.iridescenceThicknessMap,Ne=P&&!!S.sheenColorMap,xe=P&&!!S.sheenRoughnessMap,it=!!S.specularMap,We=!!S.specularColorMap,Et=!!S.specularIntensityMap,F=ae&&!!S.transmissionMap,pe=ae&&!!S.thicknessMap,q=!!S.gradientMap,te=!!S.alphaMap,_e=S.alphaTest>0,me=!!S.alphaHash,He=!!S.extensions;let kt=ks;S.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(kt=n.toneMapping);const ln={shaderID:ce,shaderType:S.type,shaderName:S.name,vertexShader:dt,fragmentShader:Z,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:je,batchingColor:je&&T._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&T.instanceColor!==null,instancingMorph:Oe&&T.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Ln,alphaToCoverage:!!S.alphaToCoverage,map:_t,matcap:et,envMap:tt,envMapMode:tt&&K.mapping,envMapCubeUVHeight:$,aoMap:z,lightMap:Pn,bumpMap:Ze,normalMap:Qe,displacementMap:d&&Ie,emissiveMap:Mt,normalMapObjectSpace:Qe&&S.normalMapType===T_,normalMapTangentSpace:Qe&&S.normalMapType===od,metalnessMap:Ee,roughnessMap:E,anisotropy:M,anisotropyMap:re,clearcoat:G,clearcoatMap:de,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:I,iridescenceMap:fe,iridescenceThicknessMap:Ce,sheen:P,sheenColorMap:Ne,sheenRoughnessMap:xe,specularMap:it,specularColorMap:We,specularIntensityMap:Et,transmission:ae,transmissionMap:F,thicknessMap:pe,gradientMap:q,opaque:S.transparent===!1&&S.blending===Kr&&S.alphaToCoverage===!1,alphaMap:te,alphaTest:_e,alphaHash:me,combine:S.combine,mapUv:_t&&_(S.map.channel),aoMapUv:z&&_(S.aoMap.channel),lightMapUv:Pn&&_(S.lightMap.channel),bumpMapUv:Ze&&_(S.bumpMap.channel),normalMapUv:Qe&&_(S.normalMap.channel),displacementMapUv:Ie&&_(S.displacementMap.channel),emissiveMapUv:Mt&&_(S.emissiveMap.channel),metalnessMapUv:Ee&&_(S.metalnessMap.channel),roughnessMapUv:E&&_(S.roughnessMap.channel),anisotropyMapUv:re&&_(S.anisotropyMap.channel),clearcoatMapUv:de&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(S.sheenRoughnessMap.channel),specularMapUv:it&&_(S.specularMap.channel),specularColorMapUv:We&&_(S.specularColorMap.channel),specularIntensityMapUv:Et&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:pe&&_(S.thicknessMap.channel),alphaMapUv:te&&_(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Qe||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!H.attributes.uv&&(_t||te),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Re,skinning:T.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ze,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:kt,decodeVideoTexture:_t&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===bt,decodeVideoTextureEmissive:Mt&&S.emissiveMap.isVideoTexture===!0&&nt.getTransfer(S.emissiveMap.colorSpace)===bt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Di,flipSided:S.side===Bn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:He&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&S.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ln.vertexUv1s=l.has(1),ln.vertexUv2s=l.has(2),ln.vertexUv3s=l.has(3),l.clear(),ln}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)b.push(k),b.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(y(b,S),v(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function v(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const b=g[S.type];let k;if(b){const V=ki[b];k=mx.clone(V.uniforms)}else k=S.uniforms;return k}function C(S,b){let k;for(let V=0,T=h.length;V<T;V++){const U=h[V];if(U.cacheKey===b){k=U,++k.usedTimes;break}}return k===void 0&&(k=new R1(n,b,S,r),h.push(k)),k}function A(S){if(--S.usedTimes===0){const b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:N}}function k1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function D1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function rp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function op(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||D1),i.length>1&&i.sort(d||rp),s.length>1&&s.sort(d||rp)}function h(){for(let u=e,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function N1(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new op,n.set(i,[o])):s>=r.length?(o=new op,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function U1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Te};break;case"SpotLight":t={position:new D,direction:new D,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function F1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let O1=0;function B1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function z1(n){const e=new U1,t=F1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const s=new D,r=new Fe,o=new Fe;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,v=0,x=0,C=0,A=0,R=0;l.sort(B1);for(let S=0,b=l.length;S<b;S++){const k=l[S],V=k.color,T=k.intensity,U=k.distance,H=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=V.r*T,u+=V.g*T,d+=V.b*T;else if(k.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(k.sh.coefficients[j],T);R++}else if(k.isDirectionalLight){const j=e.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const K=k.shadow,$=t.get(k);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=H,i.directionalShadowMatrix[f]=k.shadow.matrix,y++}i.directional[f]=j,f++}else if(k.isSpotLight){const j=e.get(k);j.position.setFromMatrixPosition(k.matrixWorld),j.color.copy(V).multiplyScalar(T),j.distance=U,j.coneCos=Math.cos(k.angle),j.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),j.decay=k.decay,i.spot[_]=j;const K=k.shadow;if(k.map&&(i.spotLightMap[C]=k.map,C++,K.updateMatrices(k),k.castShadow&&A++),i.spotLightMatrix[_]=K.matrix,k.castShadow){const $=t.get(k);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,i.spotShadow[_]=$,i.spotShadowMap[_]=H,x++}_++}else if(k.isRectAreaLight){const j=e.get(k);j.color.copy(V).multiplyScalar(T),j.halfWidth.set(k.width*.5,0,0),j.halfHeight.set(0,k.height*.5,0),i.rectArea[m]=j,m++}else if(k.isPointLight){const j=e.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity),j.distance=k.distance,j.decay=k.decay,k.castShadow){const K=k.shadow,$=t.get(k);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,$.shadowCameraNear=K.camera.near,$.shadowCameraFar=K.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=k.shadow.matrix,v++}i.point[g]=j,g++}else if(k.isHemisphereLight){const j=e.get(k);j.skyColor.copy(k.color).multiplyScalar(T),j.groundColor.copy(k.groundColor).multiplyScalar(T),i.hemi[p]=j,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==y||N.numPointShadows!==v||N.numSpotShadows!==x||N.numSpotMaps!==C||N.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,N.directionalLength=f,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=y,N.numPointShadows=v,N.numSpotShadows=x,N.numSpotMaps=C,N.numLightProbes=R,i.version=O1++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const v=l[p];if(v.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function ap(n){const e=new z1(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function H1(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ap(n),e.set(s,[a])):r>=o.length?(a=new ap(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class G1 extends hi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=w_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V1 extends hi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const W1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X1=`uniform sampler2D shadow_pass;
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
}`;function $1(n,e,t){let i=new cd;const s=new Le,r=new Le,o=new ut,a=new G1({depthPacking:S_}),c=new V1,l={},h=t.maxTextureSize,u={[os]:Bn,[Bn]:os,[Di]:Di},d=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:W1,fragmentShader:X1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new cn;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vm;let p=this.type;this.render=function(A,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=n.getRenderTarget(),b=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ps),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const T=p!==Zi&&this.type===Zi,U=p===Zi&&this.type!==Zi;for(let H=0,j=A.length;H<j;H++){const K=A[H],$=K.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ce=$.getFrameExtents();if(s.multiply(ce),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,$.mapSize.y=r.y)),$.map===null||T===!0||U===!0){const ye=this.type!==Zi?{minFilter:Qt,magFilter:Qt}:{};$.map!==null&&$.map.dispose(),$.map=new Fs(s.x,s.y,ye),$.map.texture.name=K.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const ue=$.getViewportCount();for(let ye=0;ye<ue;ye++){const ze=$.getViewport(ye);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),V.viewport(o),$.updateMatrices(K,ye),i=$.getFrustum(),x(R,N,$.camera,K,this.type)}$.isPointLightShadow!==!0&&this.type===Zi&&y($,N),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,b,k)};function y(A,R){const N=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Fs(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,N,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,N,f,_,null)}function v(A,R,N,S){let b=null;const k=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(k!==void 0)b=k;else if(b=N.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=b.uuid,T=R.uuid;let U=l[V];U===void 0&&(U={},l[V]=U);let H=U[T];H===void 0&&(H=b.clone(),U[T]=H,R.addEventListener("dispose",C)),b=H}if(b.visible=R.visible,b.wireframe=R.wireframe,S===Zi?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=n.properties.get(b);V.light=N}return b}function x(A,R,N,S,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Zi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const T=e.update(A),U=A.material;if(Array.isArray(U)){const H=T.groups;for(let j=0,K=H.length;j<K;j++){const $=H[j],ce=U[$.materialIndex];if(ce&&ce.visible){const ue=v(A,ce,S,b);A.onBeforeShadow(n,A,R,N,T,ue,$),n.renderBufferDirect(N,null,T,ue,A,$),A.onAfterShadow(n,A,R,N,T,ue,$)}}}else if(U.visible){const H=v(A,U,S,b);A.onBeforeShadow(n,A,R,N,T,H,null),n.renderBufferDirect(N,null,T,H,A,null),A.onAfterShadow(n,A,R,N,T,H,null)}}const V=A.children;for(let T=0,U=V.length;T<U;T++)x(V[T],R,N,S,b)}function C(A){A.target.removeEventListener("dispose",C);for(const N in l){const S=l[N],b=A.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const j1={[Uh]:Fh,[Oh]:Hh,[Bh]:Gh,[oo]:zh,[Fh]:Uh,[Hh]:Oh,[Gh]:Bh,[zh]:oo};function q1(n,e){function t(){let F=!1;const pe=new ut;let q=null;const te=new ut(0,0,0,0);return{setMask:function(_e){q!==_e&&!F&&(n.colorMask(_e,_e,_e,_e),q=_e)},setLocked:function(_e){F=_e},setClear:function(_e,me,He,kt,ln){ln===!0&&(_e*=kt,me*=kt,He*=kt),pe.set(_e,me,He,kt),te.equals(pe)===!1&&(n.clearColor(_e,me,He,kt),te.copy(pe))},reset:function(){F=!1,q=null,te.set(-1,0,0,0)}}}function i(){let F=!1,pe=!1,q=null,te=null,_e=null;return{setReversed:function(me){if(pe!==me){const He=e.get("EXT_clip_control");pe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const kt=_e;_e=null,this.setClear(kt)}pe=me},getReversed:function(){return pe},setTest:function(me){me?he(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(me){q!==me&&!F&&(n.depthMask(me),q=me)},setFunc:function(me){if(pe&&(me=j1[me]),te!==me){switch(me){case Uh:n.depthFunc(n.NEVER);break;case Fh:n.depthFunc(n.ALWAYS);break;case Oh:n.depthFunc(n.LESS);break;case oo:n.depthFunc(n.LEQUAL);break;case Bh:n.depthFunc(n.EQUAL);break;case zh:n.depthFunc(n.GEQUAL);break;case Hh:n.depthFunc(n.GREATER);break;case Gh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=me}},setLocked:function(me){F=me},setClear:function(me){_e!==me&&(pe&&(me=1-me),n.clearDepth(me),_e=me)},reset:function(){F=!1,q=null,te=null,_e=null,pe=!1}}}function s(){let F=!1,pe=null,q=null,te=null,_e=null,me=null,He=null,kt=null,ln=null;return{setTest:function(xt){F||(xt?he(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(xt){pe!==xt&&!F&&(n.stencilMask(xt),pe=xt)},setFunc:function(xt,di,Vi){(q!==xt||te!==di||_e!==Vi)&&(n.stencilFunc(xt,di,Vi),q=xt,te=di,_e=Vi)},setOp:function(xt,di,Vi){(me!==xt||He!==di||kt!==Vi)&&(n.stencilOp(xt,di,Vi),me=xt,He=di,kt=Vi)},setLocked:function(xt){F=xt},setClear:function(xt){ln!==xt&&(n.clearStencil(xt),ln=xt)},reset:function(){F=!1,pe=null,q=null,te=null,_e=null,me=null,He=null,kt=null,ln=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,C=null,A=null,R=new Te(0,0,0),N=0,S=!1,b=null,k=null,V=null,T=null,U=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,K=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec($)[1]),j=K>=1):$.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=K>=2);let ce=null,ue={};const ye=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),dt=new ut().fromArray(ye),Z=new ut().fromArray(ze);function se(F,pe,q,te){const _e=new Uint8Array(4),me=n.createTexture();n.bindTexture(F,me),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<q;He++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(pe+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return me}const ve={};ve[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(oo),Ze(!1),Qe(uf),he(n.CULL_FACE),z(Ps);function he(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function Re(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Oe(F,pe){return u[F]!==pe?(n.bindFramebuffer(F,pe),u[F]=pe,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pe),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function je(F,pe){let q=f,te=!1;if(F){q=d.get(pe),q===void 0&&(q=[],d.set(pe,q));const _e=F.textures;if(q.length!==_e.length||q[0]!==n.COLOR_ATTACHMENT0){for(let me=0,He=_e.length;me<He;me++)q[me]=n.COLOR_ATTACHMENT0+me;q.length=_e.length,te=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,te=!0);te&&n.drawBuffers(q)}function _t(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const et={[tr]:n.FUNC_ADD,[$g]:n.FUNC_SUBTRACT,[jg]:n.FUNC_REVERSE_SUBTRACT};et[qg]=n.MIN,et[Yg]=n.MAX;const tt={[Kg]:n.ZERO,[Zg]:n.ONE,[Jg]:n.SRC_COLOR,[Dh]:n.SRC_ALPHA,[s_]:n.SRC_ALPHA_SATURATE,[n_]:n.DST_COLOR,[e_]:n.DST_ALPHA,[Qg]:n.ONE_MINUS_SRC_COLOR,[Nh]:n.ONE_MINUS_SRC_ALPHA,[i_]:n.ONE_MINUS_DST_COLOR,[t_]:n.ONE_MINUS_DST_ALPHA,[r_]:n.CONSTANT_COLOR,[o_]:n.ONE_MINUS_CONSTANT_COLOR,[a_]:n.CONSTANT_ALPHA,[c_]:n.ONE_MINUS_CONSTANT_ALPHA};function z(F,pe,q,te,_e,me,He,kt,ln,xt){if(F===Ps){_===!0&&(Re(n.BLEND),_=!1);return}if(_===!1&&(he(n.BLEND),_=!0),F!==Xg){if(F!==m||xt!==S){if((p!==tr||x!==tr)&&(n.blendEquation(n.FUNC_ADD),p=tr,x=tr),xt)switch(F){case Kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vc:n.blendFunc(n.ONE,n.ONE);break;case df:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ff:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case df:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ff:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,v=null,C=null,A=null,R.set(0,0,0),N=0,m=F,S=xt}return}_e=_e||pe,me=me||q,He=He||te,(pe!==p||_e!==x)&&(n.blendEquationSeparate(et[pe],et[_e]),p=pe,x=_e),(q!==y||te!==v||me!==C||He!==A)&&(n.blendFuncSeparate(tt[q],tt[te],tt[me],tt[He]),y=q,v=te,C=me,A=He),(kt.equals(R)===!1||ln!==N)&&(n.blendColor(kt.r,kt.g,kt.b,ln),R.copy(kt),N=ln),m=F,S=!1}function Pn(F,pe){F.side===Di?Re(n.CULL_FACE):he(n.CULL_FACE);let q=F.side===Bn;pe&&(q=!q),Ze(q),F.blending===Kr&&F.transparent===!1?z(Ps):z(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const te=F.stencilWrite;a.setTest(te),te&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Mt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(F){b!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),b=F)}function Qe(F){F!==Vg?(he(n.CULL_FACE),F!==k&&(F===uf?n.cullFace(n.BACK):F===Wg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),k=F}function Ie(F){F!==V&&(j&&n.lineWidth(F),V=F)}function Mt(F,pe,q){F?(he(n.POLYGON_OFFSET_FILL),(T!==pe||U!==q)&&(n.polygonOffset(pe,q),T=pe,U=q)):Re(n.POLYGON_OFFSET_FILL)}function Ee(F){F?he(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function E(F){F===void 0&&(F=n.TEXTURE0+H-1),ce!==F&&(n.activeTexture(F),ce=F)}function M(F,pe,q){q===void 0&&(ce===null?q=n.TEXTURE0+H-1:q=ce);let te=ue[q];te===void 0&&(te={type:void 0,texture:void 0},ue[q]=te),(te.type!==F||te.texture!==pe)&&(ce!==q&&(n.activeTexture(q),ce=q),n.bindTexture(F,pe||ve[F]),te.type=F,te.texture=pe)}function G(){const F=ue[ce];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function I(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function P(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(F){dt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),dt.copy(F))}function xe(F){Z.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Z.copy(F))}function it(F,pe){let q=l.get(pe);q===void 0&&(q=new WeakMap,l.set(pe,q));let te=q.get(F);te===void 0&&(te=n.getUniformBlockIndex(pe,F.name),q.set(F,te))}function We(F,pe){const te=l.get(pe).get(F);c.get(pe)!==te&&(n.uniformBlockBinding(pe,te,F.__bindingPointIndex),c.set(pe,te))}function Et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ce=null,ue={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,C=null,A=null,R=new Te(0,0,0),N=0,S=!1,b=null,k=null,V=null,T=null,U=null,dt.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:Re,bindFramebuffer:Oe,drawBuffers:je,useProgram:_t,setBlending:z,setMaterial:Pn,setFlipSided:Ze,setCullFace:Qe,setLineWidth:Ie,setPolygonOffset:Mt,setScissorTest:Ee,activeTexture:E,bindTexture:M,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:I,texImage2D:fe,texImage3D:Ce,updateUBOMapping:it,uniformBlockBinding:We,texStorage2D:Pe,texStorage3D:ie,texSubImage2D:P,texSubImage3D:ae,compressedTexSubImage2D:re,compressedTexSubImage3D:de,scissor:Ne,viewport:xe,reset:Et}}function cp(n,e,t,i){const s=Y1(i);switch(t){case Am:return n*e;case Cm:return n*e;case Im:return n*e*2;case td:return n*e/s.components*s.byteLength;case nd:return n*e/s.components*s.byteLength;case Lm:return n*e*2/s.components*s.byteLength;case id:return n*e*2/s.components*s.byteLength;case Rm:return n*e*3/s.components*s.byteLength;case oi:return n*e*4/s.components*s.byteLength;case sd:return n*e*4/s.components*s.byteLength;case vc:case bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mc:case wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $h:case qh:return Math.max(n,16)*Math.max(e,8)/4;case Xh:case jh:return Math.max(n,8)*Math.max(e,8)/2;case Yh:case Kh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case eu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case tu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case nu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case iu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case su:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ru:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ou:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case au:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case cu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case lu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case hu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case uu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Sc:case du:case fu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Pm:case pu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case mu:case gu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Y1(n){switch(n){case as:case Sm:return{byteLength:1,components:1};case la:case Tm:case So:return{byteLength:2,components:1};case Qu:case ed:return{byteLength:2,components:4};case ar:case Ju:case Ai:return{byteLength:4,components:1};case Em:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function K1(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Le,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return f?new OffscreenCanvas(E,M):da("canvas")}function _(E,M,G){let Q=1;const I=Ee(E);if((I.width>G||I.height>G)&&(Q=G/Math.max(I.width,I.height)),Q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const P=Math.floor(Q*I.width),ae=Math.floor(Q*I.height);u===void 0&&(u=g(P,ae));const re=M?g(P,ae):u;return re.width=P,re.height=ae,re.getContext("2d").drawImage(E,0,0,P,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+P+"x"+ae+")."),re}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(E,M,G,Q,I=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let P=M;if(M===n.RED&&(G===n.FLOAT&&(P=n.R32F),G===n.HALF_FLOAT&&(P=n.R16F),G===n.UNSIGNED_BYTE&&(P=n.R8)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(P=n.R8UI),G===n.UNSIGNED_SHORT&&(P=n.R16UI),G===n.UNSIGNED_INT&&(P=n.R32UI),G===n.BYTE&&(P=n.R8I),G===n.SHORT&&(P=n.R16I),G===n.INT&&(P=n.R32I)),M===n.RG&&(G===n.FLOAT&&(P=n.RG32F),G===n.HALF_FLOAT&&(P=n.RG16F),G===n.UNSIGNED_BYTE&&(P=n.RG8)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(P=n.RG8UI),G===n.UNSIGNED_SHORT&&(P=n.RG16UI),G===n.UNSIGNED_INT&&(P=n.RG32UI),G===n.BYTE&&(P=n.RG8I),G===n.SHORT&&(P=n.RG16I),G===n.INT&&(P=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(P=n.RGB8UI),G===n.UNSIGNED_SHORT&&(P=n.RGB16UI),G===n.UNSIGNED_INT&&(P=n.RGB32UI),G===n.BYTE&&(P=n.RGB8I),G===n.SHORT&&(P=n.RGB16I),G===n.INT&&(P=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(P=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(P=n.RGBA16UI),G===n.UNSIGNED_INT&&(P=n.RGBA32UI),G===n.BYTE&&(P=n.RGBA8I),G===n.SHORT&&(P=n.RGBA16I),G===n.INT&&(P=n.RGBA32I)),M===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(P=n.RGB9_E5),M===n.RGBA){const ae=I?fl:nt.getTransfer(Q);G===n.FLOAT&&(P=n.RGBA32F),G===n.HALF_FLOAT&&(P=n.RGBA16F),G===n.UNSIGNED_BYTE&&(P=ae===bt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(P=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(P=n.RGB5_A1)}return(P===n.R16F||P===n.R32F||P===n.RG16F||P===n.RG32F||P===n.RGBA16F||P===n.RGBA32F)&&e.get("EXT_color_buffer_float"),P}function x(E,M){let G;return E?M===null||M===ar||M===ho?G=n.DEPTH24_STENCIL8:M===Ai?G=n.DEPTH32F_STENCIL8:M===la&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ar||M===ho?G=n.DEPTH_COMPONENT24:M===Ai?G=n.DEPTH_COMPONENT32F:M===la&&(G=n.DEPTH_COMPONENT16),G}function C(E,M){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Qt&&E.minFilter!==qn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function A(E){const M=E.target;M.removeEventListener("dispose",A),N(M),M.isVideoTexture&&h.delete(M)}function R(E){const M=E.target;M.removeEventListener("dispose",R),b(M)}function N(E){const M=i.get(E);if(M.__webglInit===void 0)return;const G=E.source,Q=d.get(G);if(Q){const I=Q[M.__cacheKey];I.usedTimes--,I.usedTimes===0&&S(E),Object.keys(Q).length===0&&d.delete(G)}i.remove(E)}function S(E){const M=i.get(E);n.deleteTexture(M.__webglTexture);const G=E.source,Q=d.get(G);delete Q[M.__cacheKey],o.memory.textures--}function b(E){const M=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let I=0;I<M.__webglFramebuffer[Q].length;I++)n.deleteFramebuffer(M.__webglFramebuffer[Q][I]);else n.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=E.textures;for(let Q=0,I=G.length;Q<I;Q++){const P=i.get(G[Q]);P.__webglTexture&&(n.deleteTexture(P.__webglTexture),o.memory.textures--),i.remove(G[Q])}i.remove(E)}let k=0;function V(){k=0}function T(){const E=k;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),k+=1,E}function U(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function H(E,M){const G=i.get(E);if(E.isVideoTexture&&Ie(E),E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,E,M);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function j(E,M){const G=i.get(E);if(E.version>0&&G.__version!==E.version){Z(G,E,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function K(E,M){const G=i.get(E);if(E.version>0&&G.__version!==E.version){Z(G,E,M);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function $(E,M){const G=i.get(E);if(E.version>0&&G.__version!==E.version){se(G,E,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}const ce={[lo]:n.REPEAT,[Rs]:n.CLAMP_TO_EDGE,[Wc]:n.MIRRORED_REPEAT},ue={[Qt]:n.NEAREST,[wm]:n.NEAREST_MIPMAP_NEAREST,[qo]:n.NEAREST_MIPMAP_LINEAR,[qn]:n.LINEAR,[yc]:n.LINEAR_MIPMAP_NEAREST,[ts]:n.LINEAR_MIPMAP_LINEAR},ye={[E_]:n.NEVER,[P_]:n.ALWAYS,[A_]:n.LESS,[Nm]:n.LEQUAL,[R_]:n.EQUAL,[L_]:n.GEQUAL,[C_]:n.GREATER,[I_]:n.NOTEQUAL};function ze(E,M){if(M.type===Ai&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===qn||M.magFilter===yc||M.magFilter===qo||M.magFilter===ts||M.minFilter===qn||M.minFilter===yc||M.minFilter===qo||M.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ce[M.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ce[M.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ce[M.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ue[M.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ue[M.minFilter]),M.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ye[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qt||M.minFilter!==qo&&M.minFilter!==ts||M.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function dt(E,M){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",A));const Q=M.source;let I=d.get(Q);I===void 0&&(I={},d.set(Q,I));const P=U(M);if(P!==E.__cacheKey){I[P]===void 0&&(I[P]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),I[P].usedTimes++;const ae=I[E.__cacheKey];ae!==void 0&&(I[E.__cacheKey].usedTimes--,ae.usedTimes===0&&S(M)),E.__cacheKey=P,E.__webglTexture=I[P].texture}return G}function Z(E,M,G){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);const I=dt(E,M),P=M.source;t.bindTexture(Q,E.__webglTexture,n.TEXTURE0+G);const ae=i.get(P);if(P.version!==ae.__version||I===!0){t.activeTexture(n.TEXTURE0+G);const re=nt.getPrimaries(nt.workingColorSpace),de=M.colorSpace===Es?null:nt.getPrimaries(M.colorSpace),Pe=M.colorSpace===Es||re===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ie=_(M.image,!1,s.maxTextureSize);ie=Mt(M,ie);const fe=r.convert(M.format,M.colorSpace),Ce=r.convert(M.type);let Ne=v(M.internalFormat,fe,Ce,M.colorSpace,M.isVideoTexture);ze(Q,M);let xe;const it=M.mipmaps,We=M.isVideoTexture!==!0,Et=ae.__version===void 0||I===!0,F=P.dataReady,pe=C(M,ie);if(M.isDepthTexture)Ne=x(M.format===uo,M.type),Et&&(We?t.texStorage2D(n.TEXTURE_2D,1,Ne,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ie.width,ie.height,0,fe,Ce,null));else if(M.isDataTexture)if(it.length>0){We&&Et&&t.texStorage2D(n.TEXTURE_2D,pe,Ne,it[0].width,it[0].height);for(let q=0,te=it.length;q<te;q++)xe=it[q],We?F&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,xe.width,xe.height,fe,Ce,xe.data):t.texImage2D(n.TEXTURE_2D,q,Ne,xe.width,xe.height,0,fe,Ce,xe.data);M.generateMipmaps=!1}else We?(Et&&t.texStorage2D(n.TEXTURE_2D,pe,Ne,ie.width,ie.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,fe,Ce,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,ie.width,ie.height,0,fe,Ce,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&Et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Ne,it[0].width,it[0].height,ie.depth);for(let q=0,te=it.length;q<te;q++)if(xe=it[q],M.format!==oi)if(fe!==null)if(We){if(F)if(M.layerUpdates.size>0){const _e=cp(xe.width,xe.height,M.format,M.type);for(const me of M.layerUpdates){const He=xe.data.subarray(me*_e/xe.data.BYTES_PER_ELEMENT,(me+1)*_e/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,me,xe.width,xe.height,1,fe,He)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,ie.depth,fe,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ne,xe.width,xe.height,ie.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,ie.depth,fe,Ce,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Ne,xe.width,xe.height,ie.depth,0,fe,Ce,xe.data)}else{We&&Et&&t.texStorage2D(n.TEXTURE_2D,pe,Ne,it[0].width,it[0].height);for(let q=0,te=it.length;q<te;q++)xe=it[q],M.format!==oi?fe!==null?We?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,xe.width,xe.height,fe,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Ne,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?F&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,xe.width,xe.height,fe,Ce,xe.data):t.texImage2D(n.TEXTURE_2D,q,Ne,xe.width,xe.height,0,fe,Ce,xe.data)}else if(M.isDataArrayTexture)if(We){if(Et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Ne,ie.width,ie.height,ie.depth),F)if(M.layerUpdates.size>0){const q=cp(ie.width,ie.height,M.format,M.type);for(const te of M.layerUpdates){const _e=ie.data.subarray(te*q/ie.data.BYTES_PER_ELEMENT,(te+1)*q/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ie.width,ie.height,1,fe,Ce,_e)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,Ce,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ie.width,ie.height,ie.depth,0,fe,Ce,ie.data);else if(M.isData3DTexture)We?(Et&&t.texStorage3D(n.TEXTURE_3D,pe,Ne,ie.width,ie.height,ie.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,Ce,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ie.width,ie.height,ie.depth,0,fe,Ce,ie.data);else if(M.isFramebufferTexture){if(Et)if(We)t.texStorage2D(n.TEXTURE_2D,pe,Ne,ie.width,ie.height);else{let q=ie.width,te=ie.height;for(let _e=0;_e<pe;_e++)t.texImage2D(n.TEXTURE_2D,_e,Ne,q,te,0,fe,Ce,null),q>>=1,te>>=1}}else if(it.length>0){if(We&&Et){const q=Ee(it[0]);t.texStorage2D(n.TEXTURE_2D,pe,Ne,q.width,q.height)}for(let q=0,te=it.length;q<te;q++)xe=it[q],We?F&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,fe,Ce,xe):t.texImage2D(n.TEXTURE_2D,q,Ne,fe,Ce,xe);M.generateMipmaps=!1}else if(We){if(Et){const q=Ee(ie);t.texStorage2D(n.TEXTURE_2D,pe,Ne,q.width,q.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Ce,ie)}else t.texImage2D(n.TEXTURE_2D,0,Ne,fe,Ce,ie);m(M)&&p(Q),ae.__version=P.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function se(E,M,G){if(M.image.length!==6)return;const Q=dt(E,M),I=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+G);const P=i.get(I);if(I.version!==P.__version||Q===!0){t.activeTexture(n.TEXTURE0+G);const ae=nt.getPrimaries(nt.workingColorSpace),re=M.colorSpace===Es?null:nt.getPrimaries(M.colorSpace),de=M.colorSpace===Es||ae===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Pe=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,fe=[];for(let te=0;te<6;te++)!Pe&&!ie?fe[te]=_(M.image[te],!0,s.maxCubemapSize):fe[te]=ie?M.image[te].image:M.image[te],fe[te]=Mt(M,fe[te]);const Ce=fe[0],Ne=r.convert(M.format,M.colorSpace),xe=r.convert(M.type),it=v(M.internalFormat,Ne,xe,M.colorSpace),We=M.isVideoTexture!==!0,Et=P.__version===void 0||Q===!0,F=I.dataReady;let pe=C(M,Ce);ze(n.TEXTURE_CUBE_MAP,M);let q;if(Pe){We&&Et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,it,Ce.width,Ce.height);for(let te=0;te<6;te++){q=fe[te].mipmaps;for(let _e=0;_e<q.length;_e++){const me=q[_e];M.format!==oi?Ne!==null?We?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,0,0,me.width,me.height,Ne,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,it,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,0,0,me.width,me.height,Ne,xe,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e,it,me.width,me.height,0,Ne,xe,me.data)}}}else{if(q=M.mipmaps,We&&Et){q.length>0&&pe++;const te=Ee(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,it,te.width,te.height)}for(let te=0;te<6;te++)if(ie){We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,fe[te].width,fe[te].height,Ne,xe,fe[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,it,fe[te].width,fe[te].height,0,Ne,xe,fe[te].data);for(let _e=0;_e<q.length;_e++){const He=q[_e].image[te].image;We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,0,0,He.width,He.height,Ne,xe,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,it,He.width,He.height,0,Ne,xe,He.data)}}else{We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ne,xe,fe[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,it,Ne,xe,fe[te]);for(let _e=0;_e<q.length;_e++){const me=q[_e];We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,0,0,Ne,xe,me.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e+1,it,Ne,xe,me.image[te])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),P.__version=I.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ve(E,M,G,Q,I,P){const ae=r.convert(G.format,G.colorSpace),re=r.convert(G.type),de=v(G.internalFormat,ae,re,G.colorSpace),Pe=i.get(M),ie=i.get(G);if(ie.__renderTarget=M,!Pe.__hasExternalTextures){const fe=Math.max(1,M.width>>P),Ce=Math.max(1,M.height>>P);I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?t.texImage3D(I,P,de,fe,Ce,M.depth,0,ae,re,null):t.texImage2D(I,P,de,fe,Ce,0,ae,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Qe(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,I,ie.__webglTexture,0,Ze(M)):(I===n.TEXTURE_2D||I>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,I,ie.__webglTexture,P),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(E,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,E),M.depthBuffer){const Q=M.depthTexture,I=Q&&Q.isDepthTexture?Q.type:null,P=x(M.stencilBuffer,I),ae=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=Ze(M);Qe(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,P,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,P,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,P,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,E)}else{const Q=M.textures;for(let I=0;I<Q.length;I++){const P=Q[I],ae=r.convert(P.format,P.colorSpace),re=r.convert(P.type),de=v(P.internalFormat,ae,re,P.colorSpace),Pe=Ze(M);G&&Qe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,de,M.width,M.height):Qe(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,de,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,de,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const I=Q.__webglTexture,P=Ze(M);if(M.depthTexture.format===Zr)Qe(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0,P):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0);else if(M.depthTexture.format===uo)Qe(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0,P):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function Oe(E){const M=i.get(E),G=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){const Q=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const I=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",I)};Q.addEventListener("dispose",I),M.__depthDisposeCallback=I}M.__boundDepthTexture=Q}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Re(M.__webglFramebuffer,E)}else if(G){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=n.createRenderbuffer(),he(M.__webglDepthbuffer[Q],E,!1);else{const I=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,P=M.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,P),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,P)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),he(M.__webglDepthbuffer,E,!1);else{const Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,I=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,I),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,I)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(E,M,G){const Q=i.get(E);M!==void 0&&ve(Q.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Oe(E)}function _t(E){const M=E.texture,G=i.get(E),Q=i.get(M);E.addEventListener("dispose",R);const I=E.textures,P=E.isWebGLCubeRenderTarget===!0,ae=I.length>1;if(ae||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,o.memory.textures++),P){G.__webglFramebuffer=[];for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[re]=[];for(let de=0;de<M.mipmaps.length;de++)G.__webglFramebuffer[re][de]=n.createFramebuffer()}else G.__webglFramebuffer[re]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let re=0;re<M.mipmaps.length;re++)G.__webglFramebuffer[re]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ae)for(let re=0,de=I.length;re<de;re++){const Pe=i.get(I[re]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&Qe(E)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let re=0;re<I.length;re++){const de=I[re];G.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[re]);const Pe=r.convert(de.format,de.colorSpace),ie=r.convert(de.type),fe=v(de.internalFormat,Pe,ie,de.colorSpace,E.isXRRenderTarget===!0),Ce=Ze(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,fe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,G.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),he(G.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(P){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ze(n.TEXTURE_CUBE_MAP,M);for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)ve(G.__webglFramebuffer[re][de],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,de);else ve(G.__webglFramebuffer[re],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let re=0,de=I.length;re<de;re++){const Pe=I[re],ie=i.get(Pe);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),ze(n.TEXTURE_2D,Pe),ve(G.__webglFramebuffer,E,Pe,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),m(Pe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,Q.__webglTexture),ze(re,M),M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)ve(G.__webglFramebuffer[de],E,M,n.COLOR_ATTACHMENT0,re,de);else ve(G.__webglFramebuffer,E,M,n.COLOR_ATTACHMENT0,re,0);m(M)&&p(re),t.unbindTexture()}E.depthBuffer&&Oe(E)}function et(E){const M=E.textures;for(let G=0,Q=M.length;G<Q;G++){const I=M[G];if(m(I)){const P=y(E),ae=i.get(I).__webglTexture;t.bindTexture(P,ae),p(P),t.unbindTexture()}}}const tt=[],z=[];function Pn(E){if(E.samples>0){if(Qe(E)===!1){const M=E.textures,G=E.width,Q=E.height;let I=n.COLOR_BUFFER_BIT;const P=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(E),re=M.length>1;if(re)for(let de=0;de<M.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let de=0;de<M.length;de++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(I|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(I|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[de]);const Pe=i.get(M[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,G,Q,0,0,G,Q,I,n.NEAREST),c===!0&&(tt.length=0,z.length=0,tt.push(n.COLOR_ATTACHMENT0+de),E.depthBuffer&&E.resolveDepthBuffer===!1&&(tt.push(P),z.push(P),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let de=0;de<M.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,ae.__webglColorRenderbuffer[de]);const Pe=i.get(M[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const M=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ze(E){return Math.min(s.maxSamples,E.samples)}function Qe(E){const M=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(E){const M=o.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function Mt(E,M){const G=E.colorSpace,Q=E.format,I=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||G!==Ln&&G!==Es&&(nt.getTransfer(G)===bt?(Q!==oi||I!==as)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function Ee(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=T,this.resetTextureUnits=V,this.setTexture2D=H,this.setTexture2DArray=j,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=je,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Pn,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Qe}function Z1(n,e){function t(i,s=Es){let r;const o=nt.getTransfer(s);if(i===as)return n.UNSIGNED_BYTE;if(i===Qu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ed)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Em)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Sm)return n.BYTE;if(i===Tm)return n.SHORT;if(i===la)return n.UNSIGNED_SHORT;if(i===Ju)return n.INT;if(i===ar)return n.UNSIGNED_INT;if(i===Ai)return n.FLOAT;if(i===So)return n.HALF_FLOAT;if(i===Am)return n.ALPHA;if(i===Rm)return n.RGB;if(i===oi)return n.RGBA;if(i===Cm)return n.LUMINANCE;if(i===Im)return n.LUMINANCE_ALPHA;if(i===Zr)return n.DEPTH_COMPONENT;if(i===uo)return n.DEPTH_STENCIL;if(i===td)return n.RED;if(i===nd)return n.RED_INTEGER;if(i===Lm)return n.RG;if(i===id)return n.RG_INTEGER;if(i===sd)return n.RGBA_INTEGER;if(i===vc||i===bc||i===Mc||i===wc)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===vc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===vc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xh||i===$h||i===jh||i===qh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$h)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yh||i===Kh||i===Zh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Yh||i===Kh)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Zh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jh||i===Qh||i===eu||i===tu||i===nu||i===iu||i===su||i===ru||i===ou||i===au||i===cu||i===lu||i===hu||i===uu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Jh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===eu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===iu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===su)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ru)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ou)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===au)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===uu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sc||i===du||i===fu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Sc)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===du)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pm||i===pu||i===mu||i===gu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Sc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===pu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ho?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class J1 extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class De extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q1={type:"move"};class rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Q1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new De;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const eM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tM=`
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

}`;class nM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new $t,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cs({vertexShader:eM,fragmentShader:tM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new ls(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iM extends ur{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new nM,m=t.getContextAttributes();let p=null,y=null;const v=[],x=[],C=new Le;let A=null;const R=new Sn;R.viewport=new ut;const N=new Sn;N.viewport=new ut;const S=[R,N],b=new J1;let k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=v[Z];return se===void 0&&(se=new rh,v[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=v[Z];return se===void 0&&(se=new rh,v[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=v[Z];return se===void 0&&(se=new rh,v[Z]=se),se.getHandSpace()};function T(Z){const se=x.indexOf(Z.inputSource);if(se===-1)return;const ve=v[se];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,l||o),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function U(){s.removeEventListener("select",T),s.removeEventListener("selectstart",T),s.removeEventListener("selectend",T),s.removeEventListener("squeeze",T),s.removeEventListener("squeezestart",T),s.removeEventListener("squeezeend",T),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",H);for(let Z=0;Z<v.length;Z++){const se=x[Z];se!==null&&(x[Z]=null,v[Z].disconnect(se))}k=null,V=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",T),s.addEventListener("selectstart",T),s.addEventListener("selectend",T),s.addEventListener("squeeze",T),s.addEventListener("squeezestart",T),s.addEventListener("squeezeend",T),s.addEventListener("end",U),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Fs(f.framebufferWidth,f.framebufferHeight,{format:oi,type:as,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,ve=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?uo:Zr,ve=m.stencil?ho:ar);const Re={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Fs(d.textureWidth,d.textureHeight,{format:oi,type:as,depthTexture:new hd(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(Z){for(let se=0;se<Z.removed.length;se++){const ve=Z.removed[se],he=x.indexOf(ve);he>=0&&(x[he]=null,v[he].disconnect(ve))}for(let se=0;se<Z.added.length;se++){const ve=Z.added[se];let he=x.indexOf(ve);if(he===-1){for(let Oe=0;Oe<v.length;Oe++)if(Oe>=x.length){x.push(ve),he=Oe;break}else if(x[Oe]===null){x[Oe]=ve,he=Oe;break}if(he===-1)break}const Re=v[he];Re&&Re.connect(ve)}}const j=new D,K=new D;function $(Z,se,ve){j.setFromMatrixPosition(se.matrixWorld),K.setFromMatrixPosition(ve.matrixWorld);const he=j.distanceTo(K),Re=se.projectionMatrix.elements,Oe=ve.projectionMatrix.elements,je=Re[14]/(Re[10]-1),_t=Re[14]/(Re[10]+1),et=(Re[9]+1)/Re[5],tt=(Re[9]-1)/Re[5],z=(Re[8]-1)/Re[0],Pn=(Oe[8]+1)/Oe[0],Ze=je*z,Qe=je*Pn,Ie=he/(-z+Pn),Mt=Ie*-z;if(se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Mt),Z.translateZ(Ie),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Re[10]===-1)Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Ee=je+Ie,E=_t+Ie,M=Ze-Mt,G=Qe+(he-Mt),Q=et*_t/E*Ee,I=tt*_t/E*Ee;Z.projectionMatrix.makePerspective(M,G,Q,I,Ee,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ce(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let se=Z.near,ve=Z.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),b.near=N.near=R.near=se,b.far=N.far=R.far=ve,(k!==b.near||V!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),k=b.near,V=b.far),R.layers.mask=Z.layers.mask|2,N.layers.mask=Z.layers.mask|4,b.layers.mask=R.layers.mask|N.layers.mask;const he=Z.parent,Re=b.cameras;ce(b,he);for(let Oe=0;Oe<Re.length;Oe++)ce(Re[Oe],he);Re.length===2?$(b,R,N):b.projectionMatrix.copy(R.projectionMatrix),ue(Z,b,he)};function ue(Z,se,ve){ve===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let ye=null;function ze(Z,se){if(h=se.getViewerPose(l||o),g=se,h!==null){const ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let he=!1;ve.length!==b.cameras.length&&(b.cameras.length=0,he=!0);for(let Oe=0;Oe<ve.length;Oe++){const je=ve[Oe];let _t=null;if(f!==null)_t=f.getViewport(je);else{const tt=u.getViewSubImage(d,je);_t=tt.viewport,Oe===0&&(e.setRenderTargetTextures(y,tt.colorTexture,d.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(y))}let et=S[Oe];et===void 0&&(et=new Sn,et.layers.enable(Oe),et.viewport=new ut,S[Oe]=et),et.matrix.fromArray(je.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(je.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(_t.x,_t.y,_t.width,_t.height),Oe===0&&(b.matrix.copy(et.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),he===!0&&b.cameras.push(et)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Oe=u.getDepthInformation(ve[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,s.renderState)}}for(let ve=0;ve<v.length;ve++){const he=x[ve],Re=v[ve];he!==null&&Re!==void 0&&Re.update(he,se,l||o)}ye&&ye(Z,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const dt=new jm;dt.setAnimationLoop(ze),this.setAnimationLoop=function(Z){ye=Z},this.dispose=function(){}}}const $s=new Ci,sM=new Fe;function rM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Wm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,$s.copy(x),$s.x*=-1,$s.y*=-1,$s.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),m.envMapRotation.value.setFromMatrix4(sM.makeRotationFromEuler($s)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function oM(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){const x=v.program;i.uniformBlockBinding(y,x)}function l(y,v){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(y,C);const A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){const v=u();y.__bindingPointIndex=v;const x=n.createBuffer(),C=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=s[y.id],x=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,R=x.length;A<R;A++){const N=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,b=N.length;S<b;S++){const k=N[S];if(f(k,A,S,C)===!0){const V=k.__offset,T=Array.isArray(k.value)?k.value:[k.value];let U=0;for(let H=0;H<T.length;H++){const j=T[H],K=_(j);typeof j=="number"||typeof j=="boolean"?(k.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,V+U,k.__data)):j.isMatrix3?(k.__data[0]=j.elements[0],k.__data[1]=j.elements[1],k.__data[2]=j.elements[2],k.__data[3]=0,k.__data[4]=j.elements[3],k.__data[5]=j.elements[4],k.__data[6]=j.elements[5],k.__data[7]=0,k.__data[8]=j.elements[6],k.__data[9]=j.elements[7],k.__data[10]=j.elements[8],k.__data[11]=0):(j.toArray(k.__data,U),U+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,v,x,C){const A=y.value,R=v+"_"+x;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const N=C[R];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return C[R]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(y){const v=y.uniforms;let x=0;const C=16;for(let R=0,N=v.length;R<N;R++){const S=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,k=S.length;b<k;b++){const V=S[b],T=Array.isArray(V.value)?V.value:[V.value];for(let U=0,H=T.length;U<H;U++){const j=T[U],K=_(j),$=x%C,ce=$%K.boundary,ue=$+ce;x+=ce,ue!==0&&C-ue<K.storage&&(x+=C-ue),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=K.storage}}}const A=x%C;return A>0&&(x+=C-A),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class aM{constructor(e={}){const{canvas:t=Y_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=ks,this.toneMappingExposure=1;const x=this;let C=!1,A=0,R=0,N=null,S=-1,b=null;const k=new ut,V=new ut;let T=null;const U=new Te(0);let H=0,j=t.width,K=t.height,$=1,ce=null,ue=null;const ye=new ut(0,0,j,K),ze=new ut(0,0,j,K);let dt=!1;const Z=new cd;let se=!1,ve=!1;const he=new Fe,Re=new Fe,Oe=new D,je=new ut,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function tt(){return N===null?$:1}let z=i;function Pn(w,O){return t.getContext(w,O)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ku}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",me,!1),z===null){const O="webgl2";if(z=Pn(O,w),z===null)throw Pn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ze,Qe,Ie,Mt,Ee,E,M,G,Q,I,P,ae,re,de,Pe,ie,fe,Ce,Ne,xe,it,We,Et,F;function pe(){Ze=new db(z),Ze.init(),We=new Z1(z,Ze),Qe=new ob(z,Ze,e,We),Ie=new q1(z,Ze),Qe.reverseDepthBuffer&&d&&Ie.buffers.depth.setReversed(!0),Mt=new mb(z),Ee=new k1,E=new K1(z,Ze,Ie,Ee,Qe,We,Mt),M=new cb(x),G=new ub(x),Q=new Mx(z),Et=new sb(z,Q),I=new fb(z,Q,Mt,Et),P=new _b(z,I,Q,Mt),Ne=new gb(z,Qe,E),ie=new ab(Ee),ae=new P1(x,M,G,Ze,Qe,Et,ie),re=new rM(x,Ee),de=new N1,Pe=new H1(Ze),Ce=new ib(x,M,G,Ie,P,f,c),fe=new $1(x,P,Qe),F=new oM(z,Mt,Qe,Ie),xe=new rb(z,Ze,Mt),it=new pb(z,Ze,Mt),Mt.programs=ae.programs,x.capabilities=Qe,x.extensions=Ze,x.properties=Ee,x.renderLists=de,x.shadowMap=fe,x.state=Ie,x.info=Mt}pe();const q=new iM(x,z);this.xr=q,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=Ze.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ze.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(j,K,!1))},this.getSize=function(w){return w.set(j,K)},this.setSize=function(w,O,W=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,K=O,t.width=Math.floor(w*$),t.height=Math.floor(O*$),W===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(j*$,K*$).floor()},this.setDrawingBufferSize=function(w,O,W){j=w,K=O,$=W,t.width=Math.floor(w*W),t.height=Math.floor(O*W),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(k)},this.getViewport=function(w){return w.copy(ye)},this.setViewport=function(w,O,W,X){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,O,W,X),Ie.viewport(k.copy(ye).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(ze)},this.setScissor=function(w,O,W,X){w.isVector4?ze.set(w.x,w.y,w.z,w.w):ze.set(w,O,W,X),Ie.scissor(V.copy(ze).multiplyScalar($).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(w){Ie.setScissorTest(dt=w)},this.setOpaqueSort=function(w){ce=w},this.setTransparentSort=function(w){ue=w},this.getClearColor=function(w){return w.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(w=!0,O=!0,W=!0){let X=0;if(w){let B=!1;if(N!==null){const oe=N.texture.format;B=oe===sd||oe===id||oe===nd}if(B){const oe=N.texture.type,ge=oe===as||oe===ar||oe===la||oe===ho||oe===Qu||oe===ed,be=Ce.getClearColor(),Me=Ce.getClearAlpha(),Be=be.r,Ge=be.g,we=be.b;ge?(g[0]=Be,g[1]=Ge,g[2]=we,g[3]=Me,z.clearBufferuiv(z.COLOR,0,g)):(_[0]=Be,_[1]=Ge,_[2]=we,_[3]=Me,z.clearBufferiv(z.COLOR,0,_))}else X|=z.COLOR_BUFFER_BIT}O&&(X|=z.DEPTH_BUFFER_BIT),W&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",me,!1),de.dispose(),Pe.dispose(),Ee.dispose(),M.dispose(),G.dispose(),P.dispose(),Et.dispose(),F.dispose(),ae.dispose(),q.dispose(),q.removeEventListener("sessionstart",nf),q.removeEventListener("sessionend",sf),zs.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=Mt.autoReset,O=fe.enabled,W=fe.autoUpdate,X=fe.needsUpdate,B=fe.type;pe(),Mt.autoReset=w,fe.enabled=O,fe.autoUpdate=W,fe.needsUpdate=X,fe.type=B}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function He(w){const O=w.target;O.removeEventListener("dispose",He),kt(O)}function kt(w){ln(w),Ee.remove(w)}function ln(w){const O=Ee.get(w).programs;O!==void 0&&(O.forEach(function(W){ae.releaseProgram(W)}),w.isShaderMaterial&&ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,W,X,B,oe){O===null&&(O=_t);const ge=B.isMesh&&B.matrixWorld.determinant()<0,be=zg(w,O,W,X,B);Ie.setMaterial(X,ge);let Me=W.index,Be=1;if(X.wireframe===!0){if(Me=I.getWireframeAttribute(W),Me===void 0)return;Be=2}const Ge=W.drawRange,we=W.attributes.position;let ct=Ge.start*Be,At=(Ge.start+Ge.count)*Be;oe!==null&&(ct=Math.max(ct,oe.start*Be),At=Math.min(At,(oe.start+oe.count)*Be)),Me!==null?(ct=Math.max(ct,0),At=Math.min(At,Me.count)):we!=null&&(ct=Math.max(ct,0),At=Math.min(At,we.count));const Rt=At-ct;if(Rt<0||Rt===1/0)return;Et.setup(B,X,be,W,Me);let kn,ft=xe;if(Me!==null&&(kn=Q.get(Me),ft=it,ft.setIndex(kn)),B.isMesh)X.wireframe===!0?(Ie.setLineWidth(X.wireframeLinewidth*tt()),ft.setMode(z.LINES)):ft.setMode(z.TRIANGLES);else if(B.isLine){let Se=X.linewidth;Se===void 0&&(Se=1),Ie.setLineWidth(Se*tt()),B.isLineSegments?ft.setMode(z.LINES):B.isLineLoop?ft.setMode(z.LINE_LOOP):ft.setMode(z.LINE_STRIP)}else B.isPoints?ft.setMode(z.POINTS):B.isSprite&&ft.setMode(z.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ft.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Se=B._multiDrawStarts,Wi=B._multiDrawCounts,pt=B._multiDrawCount,fi=Me?Q.get(Me).bytesPerElement:1,pr=Ee.get(X).currentProgram.getUniforms();for(let Gn=0;Gn<pt;Gn++)pr.setValue(z,"_gl_DrawID",Gn),ft.render(Se[Gn]/fi,Wi[Gn])}else if(B.isInstancedMesh)ft.renderInstances(ct,Rt,B.count);else if(W.isInstancedBufferGeometry){const Se=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Wi=Math.min(W.instanceCount,Se);ft.renderInstances(ct,Rt,Wi)}else ft.render(ct,Rt)};function xt(w,O,W){w.transparent===!0&&w.side===Di&&w.forceSinglePass===!1?(w.side=Bn,w.needsUpdate=!0,La(w,O,W),w.side=os,w.needsUpdate=!0,La(w,O,W),w.side=Di):La(w,O,W)}this.compile=function(w,O,W=null){W===null&&(W=w),p=Pe.get(W),p.init(O),v.push(p),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==W&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const X=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const oe=B.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){const be=oe[ge];xt(be,W,B),X.add(be)}else xt(oe,W,B),X.add(oe)}),v.pop(),p=null,X},this.compileAsync=function(w,O,W=null){const X=this.compile(w,O,W);return new Promise(B=>{function oe(){if(X.forEach(function(ge){Ee.get(ge).currentProgram.isReady()&&X.delete(ge)}),X.size===0){B(w);return}setTimeout(oe,10)}Ze.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let di=null;function Vi(w){di&&di(w)}function nf(){zs.stop()}function sf(){zs.start()}const zs=new jm;zs.setAnimationLoop(Vi),typeof self<"u"&&zs.setContext(self),this.setAnimationLoop=function(w){di=w,q.setAnimationLoop(w),w===null?zs.stop():zs.start()},q.addEventListener("sessionstart",nf),q.addEventListener("sessionend",sf),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,O,N),p=Pe.get(w,v.length),p.init(O),v.push(p),Re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(Re),ve=this.localClippingEnabled,se=ie.init(this.clippingPlanes,ve),m=de.get(w,y.length),m.init(),y.push(m),q.enabled===!0&&q.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&Ll(oe,O,-1/0,x.sortObjects)}Ll(w,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ce,ue),et=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,et&&Ce.addToRenderList(m,w),this.info.render.frame++,se===!0&&ie.beginShadows();const W=p.state.shadowsArray;fe.render(W,w,O),se===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(p.setupLights(),O.isArrayCamera){const oe=O.cameras;if(B.length>0)for(let ge=0,be=oe.length;ge<be;ge++){const Me=oe[ge];of(X,B,w,Me)}et&&Ce.render(w);for(let ge=0,be=oe.length;ge<be;ge++){const Me=oe[ge];rf(m,w,Me,Me.viewport)}}else B.length>0&&of(X,B,w,O),et&&Ce.render(w),rf(m,w,O);N!==null&&(E.updateMultisampleRenderTarget(N),E.updateRenderTargetMipmap(N)),w.isScene===!0&&w.onAfterRender(x,w,O),Et.resetDefaultState(),S=-1,b=null,v.pop(),v.length>0?(p=v[v.length-1],se===!0&&ie.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ll(w,O,W,X){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){X&&je.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Re);const ge=P.update(w),be=w.material;be.visible&&m.push(w,ge,be,W,je.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const ge=P.update(w),be=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),je.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),je.copy(ge.boundingSphere.center)),je.applyMatrix4(w.matrixWorld).applyMatrix4(Re)),Array.isArray(be)){const Me=ge.groups;for(let Be=0,Ge=Me.length;Be<Ge;Be++){const we=Me[Be],ct=be[we.materialIndex];ct&&ct.visible&&m.push(w,ge,ct,W,je.z,we)}}else be.visible&&m.push(w,ge,be,W,je.z,null)}}const oe=w.children;for(let ge=0,be=oe.length;ge<be;ge++)Ll(oe[ge],O,W,X)}function rf(w,O,W,X){const B=w.opaque,oe=w.transmissive,ge=w.transparent;p.setupLightsView(W),se===!0&&ie.setGlobalState(x.clippingPlanes,W),X&&Ie.viewport(k.copy(X)),B.length>0&&Ia(B,O,W),oe.length>0&&Ia(oe,O,W),ge.length>0&&Ia(ge,O,W),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function of(w,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Fs(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?So:as,minFilter:ts,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const oe=p.state.transmissionRenderTarget[X.id],ge=X.viewport||k;oe.setSize(ge.z,ge.w);const be=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(U),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),et&&Ce.render(W);const Me=x.toneMapping;x.toneMapping=ks;const Be=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),se===!0&&ie.setGlobalState(x.clippingPlanes,X),Ia(w,W,X),E.updateMultisampleRenderTarget(oe),E.updateRenderTargetMipmap(oe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let we=0,ct=O.length;we<ct;we++){const At=O[we],Rt=At.object,kn=At.geometry,ft=At.material,Se=At.group;if(ft.side===Di&&Rt.layers.test(X.layers)){const Wi=ft.side;ft.side=Bn,ft.needsUpdate=!0,af(Rt,W,X,kn,ft,Se),ft.side=Wi,ft.needsUpdate=!0,Ge=!0}}Ge===!0&&(E.updateMultisampleRenderTarget(oe),E.updateRenderTargetMipmap(oe))}x.setRenderTarget(be),x.setClearColor(U,H),Be!==void 0&&(X.viewport=Be),x.toneMapping=Me}function Ia(w,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let B=0,oe=w.length;B<oe;B++){const ge=w[B],be=ge.object,Me=ge.geometry,Be=X===null?ge.material:X,Ge=ge.group;be.layers.test(W.layers)&&af(be,O,W,Me,Be,Ge)}}function af(w,O,W,X,B,oe){w.onBeforeRender(x,O,W,X,B,oe),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(x,O,W,X,w,oe),B.transparent===!0&&B.side===Di&&B.forceSinglePass===!1?(B.side=Bn,B.needsUpdate=!0,x.renderBufferDirect(W,O,X,B,w,oe),B.side=os,B.needsUpdate=!0,x.renderBufferDirect(W,O,X,B,w,oe),B.side=Di):x.renderBufferDirect(W,O,X,B,w,oe),w.onAfterRender(x,O,W,X,B,oe)}function La(w,O,W){O.isScene!==!0&&(O=_t);const X=Ee.get(w),B=p.state.lights,oe=p.state.shadowsArray,ge=B.state.version,be=ae.getParameters(w,B.state,oe,O,W),Me=ae.getProgramCacheKey(be);let Be=X.programs;X.environment=w.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(w.isMeshStandardMaterial?G:M).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",He),Be=new Map,X.programs=Be);let Ge=Be.get(Me);if(Ge!==void 0){if(X.currentProgram===Ge&&X.lightsStateVersion===ge)return lf(w,be),Ge}else be.uniforms=ae.getUniforms(w),w.onBeforeCompile(be,x),Ge=ae.acquireProgram(be,Me),Be.set(Me,Ge),X.uniforms=be.uniforms;const we=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(we.clippingPlanes=ie.uniform),lf(w,be),X.needsLights=Gg(w),X.lightsStateVersion=ge,X.needsLights&&(we.ambientLightColor.value=B.state.ambient,we.lightProbe.value=B.state.probe,we.directionalLights.value=B.state.directional,we.directionalLightShadows.value=B.state.directionalShadow,we.spotLights.value=B.state.spot,we.spotLightShadows.value=B.state.spotShadow,we.rectAreaLights.value=B.state.rectArea,we.ltc_1.value=B.state.rectAreaLTC1,we.ltc_2.value=B.state.rectAreaLTC2,we.pointLights.value=B.state.point,we.pointLightShadows.value=B.state.pointShadow,we.hemisphereLights.value=B.state.hemi,we.directionalShadowMap.value=B.state.directionalShadowMap,we.directionalShadowMatrix.value=B.state.directionalShadowMatrix,we.spotShadowMap.value=B.state.spotShadowMap,we.spotLightMatrix.value=B.state.spotLightMatrix,we.spotLightMap.value=B.state.spotLightMap,we.pointShadowMap.value=B.state.pointShadowMap,we.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ge,X.uniformsList=null,Ge}function cf(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Tc.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function lf(w,O){const W=Ee.get(w);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function zg(w,O,W,X,B){O.isScene!==!0&&(O=_t),E.resetTextureUnits();const oe=O.fog,ge=X.isMeshStandardMaterial?O.environment:null,be=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ln,Me=(X.isMeshStandardMaterial?G:M).get(X.envMap||ge),Be=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),we=!!W.morphAttributes.position,ct=!!W.morphAttributes.normal,At=!!W.morphAttributes.color;let Rt=ks;X.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Rt=x.toneMapping);const kn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ft=kn!==void 0?kn.length:0,Se=Ee.get(X),Wi=p.state.lights;if(se===!0&&(ve===!0||w!==b)){const ei=w===b&&X.id===S;ie.setState(X,w,ei)}let pt=!1;X.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Wi.state.version||Se.outputColorSpace!==be||B.isBatchedMesh&&Se.batching===!1||!B.isBatchedMesh&&Se.batching===!0||B.isBatchedMesh&&Se.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Se.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Se.instancing===!1||!B.isInstancedMesh&&Se.instancing===!0||B.isSkinnedMesh&&Se.skinning===!1||!B.isSkinnedMesh&&Se.skinning===!0||B.isInstancedMesh&&Se.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Se.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Se.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Se.instancingMorph===!1&&B.morphTexture!==null||Se.envMap!==Me||X.fog===!0&&Se.fog!==oe||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ie.numPlanes||Se.numIntersection!==ie.numIntersection)||Se.vertexAlphas!==Be||Se.vertexTangents!==Ge||Se.morphTargets!==we||Se.morphNormals!==ct||Se.morphColors!==At||Se.toneMapping!==Rt||Se.morphTargetsCount!==ft)&&(pt=!0):(pt=!0,Se.__version=X.version);let fi=Se.currentProgram;pt===!0&&(fi=La(X,O,B));let pr=!1,Gn=!1,Po=!1;const Ct=fi.getUniforms(),Li=Se.uniforms;if(Ie.useProgram(fi.program)&&(pr=!0,Gn=!0,Po=!0),X.id!==S&&(S=X.id,Gn=!0),pr||b!==w){Ie.buffers.depth.getReversed()?(he.copy(w.projectionMatrix),Z_(he),J_(he),Ct.setValue(z,"projectionMatrix",he)):Ct.setValue(z,"projectionMatrix",w.projectionMatrix),Ct.setValue(z,"viewMatrix",w.matrixWorldInverse);const fs=Ct.map.cameraPosition;fs!==void 0&&fs.setValue(z,Oe.setFromMatrixPosition(w.matrixWorld)),Qe.logarithmicDepthBuffer&&Ct.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ct.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Gn=!0,Po=!0)}if(B.isSkinnedMesh){Ct.setOptional(z,B,"bindMatrix"),Ct.setOptional(z,B,"bindMatrixInverse");const ei=B.skeleton;ei&&(ei.boneTexture===null&&ei.computeBoneTexture(),Ct.setValue(z,"boneTexture",ei.boneTexture,E))}B.isBatchedMesh&&(Ct.setOptional(z,B,"batchingTexture"),Ct.setValue(z,"batchingTexture",B._matricesTexture,E),Ct.setOptional(z,B,"batchingIdTexture"),Ct.setValue(z,"batchingIdTexture",B._indirectTexture,E),Ct.setOptional(z,B,"batchingColorTexture"),B._colorsTexture!==null&&Ct.setValue(z,"batchingColorTexture",B._colorsTexture,E));const ko=W.morphAttributes;if((ko.position!==void 0||ko.normal!==void 0||ko.color!==void 0)&&Ne.update(B,W,fi),(Gn||Se.receiveShadow!==B.receiveShadow)&&(Se.receiveShadow=B.receiveShadow,Ct.setValue(z,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Li.envMap.value=Me,Li.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(Li.envMapIntensity.value=O.environmentIntensity),Gn&&(Ct.setValue(z,"toneMappingExposure",x.toneMappingExposure),Se.needsLights&&Hg(Li,Po),oe&&X.fog===!0&&re.refreshFogUniforms(Li,oe),re.refreshMaterialUniforms(Li,X,$,K,p.state.transmissionRenderTarget[w.id]),Tc.upload(z,cf(Se),Li,E)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Tc.upload(z,cf(Se),Li,E),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ct.setValue(z,"center",B.center),Ct.setValue(z,"modelViewMatrix",B.modelViewMatrix),Ct.setValue(z,"normalMatrix",B.normalMatrix),Ct.setValue(z,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const ei=X.uniformsGroups;for(let fs=0,ps=ei.length;fs<ps;fs++){const hf=ei[fs];F.update(hf,fi),F.bind(hf,fi)}}return fi}function Hg(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Gg(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,O,W){Ee.get(w.texture).__webglTexture=O,Ee.get(w.depthTexture).__webglTexture=W;const X=Ee.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const W=Ee.get(w);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,W=0){N=w,A=O,R=W;let X=!0,B=null,oe=!1,ge=!1;if(w){const Me=Ee.get(w);if(Me.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(z.FRAMEBUFFER,null),X=!1;else if(Me.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(Me.__hasExternalTextures)E.rebindTextures(w,Ee.get(w.texture).__webglTexture,Ee.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const we=w.depthTexture;if(Me.__boundDepthTexture!==we){if(we!==null&&Ee.has(we)&&(w.width!==we.image.width||w.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ge=!0);const Ge=Ee.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[O])?B=Ge[O][W]:B=Ge[O],oe=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?B=Ee.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?B=Ge[W]:B=Ge,k.copy(w.viewport),V.copy(w.scissor),T=w.scissorTest}else k.copy(ye).multiplyScalar($).floor(),V.copy(ze).multiplyScalar($).floor(),T=dt;if(Ie.bindFramebuffer(z.FRAMEBUFFER,B)&&X&&Ie.drawBuffers(w,B),Ie.viewport(k),Ie.scissor(V),Ie.setScissorTest(T),oe){const Me=Ee.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,W)}else if(ge){const Me=Ee.get(w.texture),Be=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Me.__webglTexture,W||0,Be)}S=-1},this.readRenderTargetPixels=function(w,O,W,X,B,oe,ge){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(be=be[ge]),be){Ie.bindFramebuffer(z.FRAMEBUFFER,be);try{const Me=w.texture,Be=Me.format,Ge=Me.type;if(!Qe.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-X&&W>=0&&W<=w.height-B&&z.readPixels(O,W,X,B,We.convert(Be),We.convert(Ge),oe)}finally{const Me=N!==null?Ee.get(N).__webglFramebuffer:null;Ie.bindFramebuffer(z.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(w,O,W,X,B,oe,ge){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(be=be[ge]),be){const Me=w.texture,Be=Me.format,Ge=Me.type;if(!Qe.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-X&&W>=0&&W<=w.height-B){Ie.bindFramebuffer(z.FRAMEBUFFER,be);const we=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,we),z.bufferData(z.PIXEL_PACK_BUFFER,oe.byteLength,z.STREAM_READ),z.readPixels(O,W,X,B,We.convert(Be),We.convert(Ge),0);const ct=N!==null?Ee.get(N).__webglFramebuffer:null;Ie.bindFramebuffer(z.FRAMEBUFFER,ct);const At=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await K_(z,At,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,we),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,oe),z.deleteBuffer(we),z.deleteSync(At),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,W=0){w.isTexture!==!0&&(Yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(w.image.width*X),oe=Math.floor(w.image.height*X),ge=O!==null?O.x:0,be=O!==null?O.y:0;E.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,ge,be,B,oe),Ie.unbindTexture()},this.copyTextureToTexture=function(w,O,W=null,X=null,B=0){w.isTexture!==!0&&(Yo("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],O=arguments[2],B=arguments[3]||0,W=null);let oe,ge,be,Me,Be,Ge,we,ct,At;const Rt=w.isCompressedTexture?w.mipmaps[B]:w.image;W!==null?(oe=W.max.x-W.min.x,ge=W.max.y-W.min.y,be=W.isBox3?W.max.z-W.min.z:1,Me=W.min.x,Be=W.min.y,Ge=W.isBox3?W.min.z:0):(oe=Rt.width,ge=Rt.height,be=Rt.depth||1,Me=0,Be=0,Ge=0),X!==null?(we=X.x,ct=X.y,At=X.z):(we=0,ct=0,At=0);const kn=We.convert(O.format),ft=We.convert(O.type);let Se;O.isData3DTexture?(E.setTexture3D(O,0),Se=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(E.setTexture2DArray(O,0),Se=z.TEXTURE_2D_ARRAY):(E.setTexture2D(O,0),Se=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);const Wi=z.getParameter(z.UNPACK_ROW_LENGTH),pt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),fi=z.getParameter(z.UNPACK_SKIP_PIXELS),pr=z.getParameter(z.UNPACK_SKIP_ROWS),Gn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Rt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Rt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Me),z.pixelStorei(z.UNPACK_SKIP_ROWS,Be),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ge);const Po=w.isDataArrayTexture||w.isData3DTexture,Ct=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Li=Ee.get(w),ko=Ee.get(O),ei=Ee.get(Li.__renderTarget),fs=Ee.get(ko.__renderTarget);Ie.bindFramebuffer(z.READ_FRAMEBUFFER,ei.__webglFramebuffer),Ie.bindFramebuffer(z.DRAW_FRAMEBUFFER,fs.__webglFramebuffer);for(let ps=0;ps<be;ps++)Po&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ee.get(w).__webglTexture,B,Ge+ps),w.isDepthTexture?(Ct&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ee.get(O).__webglTexture,B,At+ps),z.blitFramebuffer(Me,Be,oe,ge,we,ct,oe,ge,z.DEPTH_BUFFER_BIT,z.NEAREST)):Ct?z.copyTexSubImage3D(Se,B,we,ct,At+ps,Me,Be,oe,ge):z.copyTexSubImage2D(Se,B,we,ct,At+ps,Me,Be,oe,ge);Ie.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ct?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Se,B,we,ct,At,oe,ge,be,kn,ft,Rt.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(Se,B,we,ct,At,oe,ge,be,kn,Rt.data):z.texSubImage3D(Se,B,we,ct,At,oe,ge,be,kn,ft,Rt):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,B,we,ct,oe,ge,kn,ft,Rt.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,B,we,ct,Rt.width,Rt.height,kn,Rt.data):z.texSubImage2D(z.TEXTURE_2D,B,we,ct,oe,ge,kn,ft,Rt);z.pixelStorei(z.UNPACK_ROW_LENGTH,Wi),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,fi),z.pixelStorei(z.UNPACK_SKIP_ROWS,pr),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Gn),B===0&&O.generateMipmaps&&z.generateMipmap(Se),Ie.unbindTexture()},this.copyTextureToTexture3D=function(w,O,W=null,X=null,B=0){return w.isTexture!==!0&&(Yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,w=arguments[2],O=arguments[3],B=arguments[4]||0),Yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,W,X,B)},this.initRenderTarget=function(w){Ee.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),Ie.unbindTexture()},this.resetState=function(){A=0,R=0,N=null,Ie.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ns}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class ud{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=i}clone(){return new ud(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jm extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Qm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xu,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bn=new D;class fa{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _l extends hi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Cr;const Oo=new D,Ir=new D,Lr=new D,Pr=new Le,Bo=new Le,e0=new Fe,Ja=new D,zo=new D,Qa=new D,lp=new Le,oh=new Le,hp=new Le;class dd extends Lt{constructor(e=new _l){if(super(),this.isSprite=!0,this.type="Sprite",Cr===void 0){Cr=new cn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Qm(t,5);Cr.setIndex([0,1,2,0,2,3]),Cr.setAttribute("position",new fa(i,3,0,!1)),Cr.setAttribute("uv",new fa(i,2,3,!1))}this.geometry=Cr,this.material=e,this.center=new Le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ir.setFromMatrixScale(this.matrixWorld),e0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ir.multiplyScalar(-Lr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;ec(Ja.set(-.5,-.5,0),Lr,o,Ir,s,r),ec(zo.set(.5,-.5,0),Lr,o,Ir,s,r),ec(Qa.set(.5,.5,0),Lr,o,Ir,s,r),lp.set(0,0),oh.set(1,0),hp.set(1,1);let a=e.ray.intersectTriangle(Ja,zo,Qa,!1,Oo);if(a===null&&(ec(zo.set(-.5,.5,0),Lr,o,Ir,s,r),oh.set(0,1),a=e.ray.intersectTriangle(Ja,Qa,zo,!1,Oo),a===null))return;const c=e.ray.origin.distanceTo(Oo);c<e.near||c>e.far||t.push({distance:c,point:Oo.clone(),uv:ri.getInterpolation(Oo,Ja,zo,Qa,lp,oh,hp,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ec(n,e,t,i,s,r){Pr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Bo.x=r*Pr.x-s*Pr.y,Bo.y=s*Pr.x+r*Pr.y):Bo.copy(Pr),n.copy(e),n.x+=Bo.x,n.y+=Bo.y,n.applyMatrix4(e0)}const up=new D,dp=new ut,fp=new ut,cM=new D,pp=new Fe,tc=new D,ah=new Bi,mp=new Fe,ch=new pl;class lM extends qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=pf,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ii),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,tc),this.boundingBox.expandByPoint(tc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,tc),this.boundingSphere.expandByPoint(tc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ah.copy(this.boundingSphere),ah.applyMatrix4(s),e.ray.intersectsSphere(ah)!==!1&&(mp.copy(s).invert(),ch.copy(e.ray).applyMatrix4(mp),!(this.boundingBox!==null&&ch.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ch)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===pf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===x_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;dp.fromBufferAttribute(s.attributes.skinIndex,e),fp.fromBufferAttribute(s.attributes.skinWeight,e),up.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=fp.getComponent(r);if(o!==0){const a=dp.getComponent(r);pp.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(cM.copy(up).applyMatrix4(pp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class t0 extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class n0 extends $t{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Qt,h=Qt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gp=new Fe,hM=new Fe;class fd{constructor(e=[],t=[]){this.uuid=Ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Fe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:hM;gp.multiplyMatrices(a,t[r]),gp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new fd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new n0(t,e,e,oi,Ai);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new t0),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class vu extends an{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const kr=new Fe,_p=new Fe,nc=[],xp=new Ii,uM=new Fe,Ho=new qe,Go=new Bi;class xl extends qe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,uM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kr),xp.copy(e.boundingBox).applyMatrix4(kr),this.boundingBox.union(xp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kr),Go.copy(e.boundingSphere).applyMatrix4(kr),this.boundingSphere.union(Go)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ho.geometry=this.geometry,Ho.material=this.material,Ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Go.copy(this.boundingSphere),Go.applyMatrix4(i),e.ray.intersectsSphere(Go)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,kr),_p.multiplyMatrices(i,kr),Ho.matrixWorld=_p,Ho.raycast(e,nc);for(let o=0,a=nc.length;o<a;o++){const c=nc[o];c.instanceId=r,c.object=this,t.push(c)}nc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new n0(new Float32Array(s*this.count),s,this.count,td,Ai));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class i0 extends hi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jc=new D,qc=new D,yp=new Fe,Vo=new pl,ic=new Bi,lh=new D,vp=new D;class pd extends Lt{constructor(e=new cn,t=new i0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)jc.fromBufferAttribute(t,s-1),qc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=jc.distanceTo(qc);e.setAttribute("lineDistance",new Pt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(s),ic.radius+=r,e.ray.intersectsSphere(ic)===!1)return;yp.copy(s).invert(),Vo.copy(e.ray).applyMatrix4(yp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),y=h.getX(_+1),v=sc(this,e,Vo,c,p,y);v&&t.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=sc(this,e,Vo,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=sc(this,e,Vo,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=sc(this,e,Vo,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function sc(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(jc.fromBufferAttribute(o,s),qc.fromBufferAttribute(o,r),t.distanceSqToSegment(jc,qc,lh,vp)>i)return;lh.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(lh);if(!(c<e.near||c>e.far))return{distance:c,point:vp.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const bp=new D,Mp=new D;class dM extends pd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)bp.fromBufferAttribute(t,s),Mp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+bp.distanceTo(Mp);e.setAttribute("lineDistance",new Pt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fM extends pd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class s0 extends hi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wp=new Fe,bu=new pl,rc=new Bi,oc=new D;class pM extends Lt{constructor(e=new cn,t=new s0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(s),rc.radius+=r,e.ray.intersectsSphere(rc)===!1)return;wp.copy(s).invert(),bu.copy(e.ray).applyMatrix4(wp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);oc.fromBufferAttribute(u,m),Sp(oc,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)oc.fromBufferAttribute(u,g),Sp(oc,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Sp(n,e,t,i,s,r,o){const a=bu.distanceSqToPoint(n);if(a<t){const c=new D;bu.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class va extends $t{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cr extends cn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new D,h=new Le;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=i+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(a,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Si extends cn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Pt(u,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(f,2));function y(){const x=new D,C=new D;let A=0;const R=(t-e)/i;for(let N=0;N<=r;N++){const S=[],b=N/r,k=b*(t-e)+e;for(let V=0;V<=s;V++){const T=V/s,U=T*c+a,H=Math.sin(U),j=Math.cos(U);C.x=k*H,C.y=-b*i+m,C.z=k*j,u.push(C.x,C.y,C.z),x.set(H,R,j).normalize(),d.push(x.x,x.y,x.z),f.push(T,1-b),S.push(g++)}_.push(S)}for(let N=0;N<s;N++)for(let S=0;S<r;S++){const b=_[S][N],k=_[S+1][N],V=_[S+1][N+1],T=_[S][N+1];(e>0||S!==0)&&(h.push(b,k,T),A+=3),(t>0||S!==r-1)&&(h.push(k,V,T),A+=3)}l.addGroup(p,A,0),p+=A}function v(x){const C=g,A=new Le,R=new D;let N=0;const S=x===!0?e:t,b=x===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const k=g;for(let V=0;V<=s;V++){const U=V/s*c+a,H=Math.cos(U),j=Math.sin(U);R.x=S*j,R.y=m*b,R.z=S*H,u.push(R.x,R.y,R.z),d.push(0,b,0),A.x=H*.5+.5,A.y=j*.5*b+.5,f.push(A.x,A.y),g++}for(let V=0;V<s;V++){const T=C+V,U=k+V;x===!0?h.push(U,U+1,T):h.push(U+1,U,T),N+=3}l.addGroup(p,N,x===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class md extends cn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(r.slice(),3)),this.setAttribute("uv",new Pt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new D,x=new D,C=new D;for(let A=0;A<t.length;A+=3)f(t[A+0],v),f(t[A+1],x),f(t[A+2],C),c(v,x,C,y)}function c(y,v,x,C){const A=C+1,R=[];for(let N=0;N<=A;N++){R[N]=[];const S=y.clone().lerp(x,N/A),b=v.clone().lerp(x,N/A),k=A-N;for(let V=0;V<=k;V++)V===0&&N===A?R[N][V]=S:R[N][V]=S.clone().lerp(b,V/k)}for(let N=0;N<A;N++)for(let S=0;S<2*(A-N)-1;S++){const b=Math.floor(S/2);S%2===0?(d(R[N][b+1]),d(R[N+1][b]),d(R[N][b])):(d(R[N][b+1]),d(R[N+1][b+1]),d(R[N+1][b]))}}function l(y){const v=new D;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(y),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){const y=new D;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const x=m(y)/2/Math.PI+.5,C=p(y)/Math.PI+.5;o.push(x,1-C)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const v=o[y+0],x=o[y+2],C=o[y+4],A=Math.max(v,x,C),R=Math.min(v,x,C);A>.9&&R<.1&&(v<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,v){const x=y*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function g(){const y=new D,v=new D,x=new D,C=new D,A=new Le,R=new Le,N=new Le;for(let S=0,b=0;S<r.length;S+=9,b+=6){y.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),A.set(o[b+0],o[b+1]),R.set(o[b+2],o[b+3]),N.set(o[b+4],o[b+5]),C.copy(y).add(v).add(x).divideScalar(3);const k=m(C);_(A,b+0,y,k),_(R,b+2,v,k),_(N,b+4,x,k)}}function _(y,v,x,C){C<0&&y.x===1&&(o[v]=y.x-1),x.x===0&&x.z===0&&(o[v]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new md(e.vertices,e.indices,e.radius,e.details)}}class Yc extends md{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yc(e.radius,e.detail)}}class yl extends cn{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/s,f=new D,g=new Le;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const y=p+m,v=y,x=y+i+1,C=y+i+2,A=y+1;a.push(v,x,A),a.push(x,C,A)}}this.setIndex(a),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gd extends cn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new D,u=new D,d=new D;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(c,3)),this.setAttribute("uv",new Pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _d extends hi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zi extends _d{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Qn extends hi{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ac(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function mM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function gM(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Tp(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function r0(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class ba{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class _M extends ba{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xr,endingEnd:Xr}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $r:r=e,a=2*t-i;break;case Xc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case $r:o=e,c=2*i-t;break;case Xc:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}const l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+y*o[l+C]+v*o[c+C]+x*o[u+C];return r}}class o0 extends ba{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class xM extends ba{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ac(t,this.TimeBufferType),this.values=ac(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ac(e.times,Array),values:ac(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new o0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _M(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ha:t=this.InterpolantFactoryMethodDiscrete;break;case ua:t=this.InterpolantFactoryMethodLinear;break;case Pl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ha;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return Pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&mM(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Pl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Hi.prototype.TimeBufferType=Float32Array;Hi.prototype.ValueBufferType=Float32Array;Hi.prototype.DefaultInterpolation=ua;class Eo extends Hi{constructor(e,t,i){super(e,t,i)}}Eo.prototype.ValueTypeName="bool";Eo.prototype.ValueBufferType=Array;Eo.prototype.DefaultInterpolation=ha;Eo.prototype.InterpolantFactoryMethodLinear=void 0;Eo.prototype.InterpolantFactoryMethodSmooth=void 0;class a0 extends Hi{}a0.prototype.ValueTypeName="color";class mo extends Hi{}mo.prototype.ValueTypeName="number";class yM extends ba{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Kn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class go extends Hi{InterpolantFactoryMethodLinear(e){return new yM(this.times,this.values,this.getValueSize(),e)}}go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;class Ao extends Hi{constructor(e,t,i){super(e,t,i)}}Ao.prototype.ValueTypeName="string";Ao.prototype.ValueBufferType=Array;Ao.prototype.DefaultInterpolation=ha;Ao.prototype.InterpolantFactoryMethodLinear=void 0;Ao.prototype.InterpolantFactoryMethodSmooth=void 0;class _o extends Hi{}_o.prototype.ValueTypeName="vector";class Mu{constructor(e="",t=-1,i=[],s=rd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ri(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(bM(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Hi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=gM(c);c=Tp(c,1,h),l=Tp(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new mo(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];r0(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const v=d[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}s.push(new mo(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";i(_o,f+".position",d,"pos",s),i(go,f+".quaternion",d,"rot",s),i(_o,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function vM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mo;case"vector":case"vector2":case"vector3":case"vector4":return _o;case"color":return a0;case"quaternion":return go;case"bool":case"boolean":return Eo;case"string":return Ao}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function bM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vM(n.type);if(n.times===void 0){const t=[],i=[];r0(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Cs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class MM{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const wM=new MM;class Ro{constructor(e){this.manager=e!==void 0?e:wM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ki={};class SM extends Error{constructor(e,t){super(e),this.response=t}}class c0 extends Ro{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Cs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:i,onError:s});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Ki[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:v,value:x})=>{if(v)p.close();else{_+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,R=h.length;A<R;A++){const N=h[A];N.onProgress&&N.onProgress(C)}p.enqueue(x),y()}},v=>{p.error(v)})}}});return new Response(m)}else throw new SM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Cs.add(e,l);const h=Ki[e];delete Ki[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Ki[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ki[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class TM extends Ro{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Cs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=da("img");function c(){h(),Cs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class EM extends Ro{constructor(e){super(e)}load(e,t,i,s){const r=new $t,o=new TM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class vl extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class AM extends vl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const hh=new Fe,Ep=new D,Ap=new D;class xd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cd,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ep.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ep),Ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ap),t.updateMatrixWorld(),hh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class RM extends xd{constructor(){super(new Sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=fo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class CM extends vl{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new RM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Rp=new Fe,Wo=new D,uh=new D;class IM extends xd{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Wo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wo),uh.copy(i.position),uh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(uh),i.updateMatrixWorld(),s.makeTranslation(-Wo.x,-Wo.y,-Wo.z),Rp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rp)}}class l0 extends vl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new IM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class LM extends xd{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class h0 extends vl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new LM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class na{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class PM extends Ro{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Cs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Cs.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Cs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Cs.add(e,c),r.manager.itemStart(e)}}class kM{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)i[r+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(i,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){a.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,o=s;r!==o;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[i+o]}_slerp(e,t,i,s){Kn.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){const o=this._workIndex*r;Kn.multiplyQuaternionsFlat(e,o,e,t,e,i),Kn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,i,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[i+a]*s}}_lerpAdditive(e,t,i,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[i+o]*s}}}const yd="\\[\\]\\.:\\/",DM=new RegExp("["+yd+"]","g"),vd="[^"+yd+"]",NM="[^"+yd.replace("\\.","")+"]",UM=/((?:WC+[\/:])*)/.source.replace("WC",vd),FM=/(WCOD+)?/.source.replace("WCOD",NM),OM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vd),BM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vd),zM=new RegExp("^"+UM+FM+OM+BM+"$"),HM=["material","materials","bones","map"];class GM{constructor(e,t,i){const s=i||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class gt{constructor(e,t,i){this.path=t,this.parsedPath=i||gt.parseTrackName(t),this.node=gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new gt.Composite(e,t,i):new gt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(DM,"")}static parseTrackName(e){const t=zM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);HM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=gt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}gt.Composite=GM;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class VM{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Xr,endingEnd:Xr};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=y_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+i,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*i;c<0||i===0?t=0:(this._startTime=null,t=i*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case b_:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case rd:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,r=this._loopCount;const o=i===v_;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(i===km){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=$r,s.endingEnd=$r):(e?s.endingStart=this.zeroSlopeAtStart?$r:Xr:s.endingStart=Xc,t?s.endingEnd=this.zeroSlopeAtEnd?$r:Xr:s.endingEnd=Xc)}_scheduleFading(e,t,i){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=i,this}}const WM=new Float32Array(1);class XM extends ur{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=s[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new kM(gt.create(i,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new o0(new Float32Array(2),new Float32Array(2),1,WM),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?Mu.findByName(s,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=rd),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new VM(this,o,t,i);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){const i=t||this._root,s=i.uuid,r=typeof e=="string"?Mu.findByName(i,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(s,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ku}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ku);function dr(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e>>>0}function bd(n){const e=n+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),[((t^t>>>14)>>>0)/4294967296,e]}function bl(n){let e=n>>>0;return()=>{const[t,i]=bd(e);return e=i,t}}const wu=["office","tourist","oldlady","party","jogger","rich"],bs=(n,e)=>{for(let t=e.length-1;t>=0;t--)if(n>=e[t][0])return e[t][1];return e[0][1]},Ma={old:{name:"The old corner",mix:{office:1,tourist:1,oldlady:1,party:1,jogger:1,rich:.5},busy:n=>bs(n,[[0,.7],[.72,.4]]),gen:()=>1},market:{name:"The market",mix:{oldlady:3,tourist:3,office:1,rich:.5},busy:n=>bs(n,[[0,.8],[.25,1],[.6,.6],[.72,.15]]),gen:n=>n>.25&&n<.6?1.2:1},homes:{name:"Quiet street",mix:{oldlady:3,jogger:2,rich:1,office:1},busy:n=>bs(n,[[0,.5],[.72,.2]]),gen:()=>1.05},park:{name:"The park",mix:{jogger:3,oldlady:3,tourist:2,party:.5},busy:n=>bs(n,[[0,.8],[.6,.6],[.72,.25]]),gen:()=>.95},bars:{name:"Bar street",mix:{party:6,office:1,tourist:1,rich:.5},busy:n=>bs(n,[[0,.25],[.45,.6],[.6,1]]),gen:n=>n>.6?1.25:.8},downtown:{name:"Downtown",mix:{office:5,rich:2,tourist:1,jogger:1},busy:n=>bs(n,[[0,1],[.6,.6],[.72,.15]]),gen:()=>.85},station:{name:"Station underpass",mix:{office:3,tourist:2,party:1,oldlady:1,jogger:.5,rich:.5},busy:n=>bs(n,[[0,1],[.2,.6],[.5,1],[.72,.4]]),gen:()=>1},river:{name:"The river",mix:{tourist:2,jogger:3,rich:1,oldlady:1},busy:n=>bs(n,[[0,.6],[.5,.8],[.72,.2]]),gen:()=>1.1}};function en(n,e){return n>=-36&&n<=36?"old":e>=0?n<-70?"homes":n<-36?"market":n<=72?"bars":"downtown":n<-36?"park":n<=72?"station":"river"}function $M(n,e){const t=Ma[n].mix,i=wu.reduce((r,o)=>r+(t[o]??0),0);let s=e*i;for(const r of wu)if(s-=t[r]??0,s<0)return r;return"office"}const cc={minX:-106,maxX:108,minZ:-28,maxZ:23},Ae={store:{x:-22,z:8.5,r:3,label:"Liquor store"},bakery:{x:0,z:8.5,r:3,label:"Bakery"},dumpster:{x:4,z:17,r:2.6,label:"Dumpster"},corner:{x:24,z:6,r:3.5,label:"Busy corner"},bin:{x:12,z:-6,r:2.5,label:"Recycling"},bench:{x:-16,z:-12,r:2.5,label:"Bench"},sprinkler:{x:-8,z:-9,r:3,label:"Sprinkler"},alley:{x:12,z:16,r:3,label:"Alley"},stash:{x:13.5,z:20,r:1.8,label:"Loose brick"},shop2:{x:-61,z:8.6,r:2.8,label:"Corner shop"},truck:{x:-46,z:-7.2,r:2.8,label:"Food truck"},bakeryBin:{x:6.8,z:9.2,r:1.8,label:"Bakery bin"},fountain:{x:-62,z:-18,r:4.2,label:"Fountain"},pigeons:{x:-57,z:-13,r:3,label:"Pigeons"},pigeons2:{x:47,z:-10,r:3,label:"Pigeons"},underpass:{x:56,z:-15,r:4,label:"Underpass"},bridge:{x:90,z:-24.5,r:3.2,label:"Under the bridge"},tvBar:{x:62,z:8.6,r:2.6,label:"Bar TV"},tvShop:{x:79,z:8.6,r:2.6,label:"Shop TV"},bin2:{x:-50,z:-6,r:2.5,label:"Recycling"},bin3:{x:66,z:-6,r:2.5,label:"Recycling"}},Cp={liquor:"store",corner:"shop2",truck:"truck"},u0={liquor:"Liquor store",corner:"Corner shop",truck:"Food truck"},pa=[{x:-16,z:-12},{x:-70,z:-12},{x:-54,z:-12},{x:-62,z:-25},{x:-90,z:-6.4},{x:50,z:-6.6},{x:82,z:-20},{x:100,z:-6.6},{x:-82,z:-24}],d0=2,f0=[{x:-26,z:4.8},{x:-84,z:4.8},{x:-50,z:4.8},{x:44,z:4.8},{x:66,z:4.8},{x:86,z:4.8},{x:-66,z:-6.2},{x:30,z:-6.2},{x:96,z:-6.2},{x:60,z:-19}],jM=1.7,Su=[{x:-22,z:10},{x:0,z:10},{x:-61,z:10},{x:42.5,z:10},{x:62,z:10},{x:92,z:10},{x:56,z:-9}],qM=3.4,YM=["bin","bin2","bin3"],Ml=["pigeons","pigeons2"],Md=["tvBar","tvShop"],KM=[-80,-8,40,76],wd=[{x:-30,z:5.5},{x:-12,z:5.5},{x:8,z:5.5},{x:30,z:-5.5},{x:-26,z:-5.5},{x:-4,z:-5.5},{x:18,z:-5.5},{x:-20,z:-16},{x:-4,z:-18},{x:10,z:19},{x:14,z:12},{x:28,z:14},{x:-30,z:-12},{x:0,z:-14},{x:-98,z:6},{x:-76,z:5.5},{x:-44,z:7},{x:-58,z:-20},{x:-88,z:-16},{x:-48,z:-24},{x:40,z:6},{x:50,z:7.5},{x:68,z:5.5},{x:46,z:-14},{x:64,z:-17},{x:54,z:-20},{x:80,z:6},{x:100,z:5.5},{x:84,z:-12},{x:96,z:-22},{x:76,z:-25},{x:104,z:-14}],ZM=[{z:6.2,x0:-104,x1:106},{z:7.6,x0:-104,x1:106},{z:-5.6,x0:-104,x1:106},{z:-16,x0:-100,x1:-40},{z:-18,x0:74,x1:106},{z:-12,x0:40,x1:70}],p0={sad:{label:"Sad face",say:["(big sad eyes)","Rough week, friend...","Anything helps. Truly.","(sighs like a movie dog)"]},compliment:{label:"Compliment",say:["Great shoes. Spare a dollar?","You look like a generous person.","That coat! Wow.","Best haircut on this street."]},howdy:{label:"Hey, how you doin?",say:["Hey! How you doin?","Morning, boss!","Beautiful day, huh?","Looking good out here!"]},joke:{label:"Tell a joke",say:["Why don't pigeons pay rent? It's cheep.","I used to be rich. Then I paid for parking.","My landlord is the sky. Rent's free, roof leaks.","I'm on a seafood diet. I see food, I ask for it.","I lost my job at the calendar factory. Took a day off."]},honest:{label:"Be honest",say:["Honestly? It's for a beer.","Spare a dollar for a beer? No lies.","I won't pretend. I'm thirsty.","Straight up: beer fund."]},door:{label:"Hold the door",say:["(holds the door) After you!","(bows, holds the door)","Door service! Tips welcome."]}},wa={office:{name:"Office worker",base:.1,likes:["door","honest"],hates:["sad","joke"],cash:[1,3],food:.1,laughs:!1},tourist:{name:"Tourist",base:.2,likes:["joke","compliment","howdy"],hates:["honest"],cash:[1,5],food:0,laughs:!0},oldlady:{name:"Old lady",base:.2,likes:["sad","compliment","door"],hates:["joke","honest"],cash:[1,2],food:.45,laughs:!1},party:{name:"Party kid",base:.14,likes:["honest","joke"],hates:["sad","compliment"],cash:[1,4],food:.05,laughs:!0},jogger:{name:"Jogger",base:.05,likes:["howdy"],hates:["sad","door","compliment"],cash:[1,2],food:0,laughs:!1},rich:{name:"Rich guy",base:.06,likes:["compliment","door"],hates:["howdy","honest","sad"],cash:[5,20],food:0,laughs:!1}},vi={likeMul:2.4,likeAdd:.1,againMul:.4,angryAt:2,copChance:.35,hateCop:.08,signAdd:.06,drunkMul:.7,maxP:.85},js=(n,e)=>n[Math.min(n.length-1,Math.floor(e*n.length))],JM=["Here you go.","Take care, man.","Get something to eat.","Here. Don't tell my wife.","Hang in there."],Ip={joke:["Ha! Here.","OK, that's good. Take it.","Ha! You earned that."],honest:["Respect the honesty. Here.","Ha. One beer. On me.","At least you are honest."],compliment:["Aw, thanks! Here.","Flattery works. Here."],door:["What a gentleman! Here.","Thank you, sir."],sad:["Oh, honey. Here.","Poor guy. Here."],howdy:["Doing good! Here, buddy.","Ha, hey yourself. Here."]},QM={rich:["Keep the change. All of it.","Here's a twenty. Don't make it weird."],party:["Bro! Here! Cheers!","Drink one for me!"],tourist:["Is this how it works here? Here!","For the local guide!"]},ew=["Take this sandwich, dear.","Here, I packed too much lunch.","Have my muffin. Go on."],tw=["Sorry man, no cash.","Not today.","I only have card.","(pretends to be on the phone)","(walks faster)","Maybe next time.","Sorry, buddy.","I gave at the office."],Lp={office:["Get a job.","In a meeting. Literally.","I'm late, sorry."],tourist:["No speak... uh... money.","(takes a photo of him instead)"],oldlady:["I only have bus fare, dear.","Not today, sweetheart."],party:["Bro, I'm broke too.","Spent it all on shots, sorry!"],jogger:["(points at earbuds)","Can't stop! Pace!"],rich:["Have you tried a job?","My accountant says no."]},nw={office:["Ugh. Get a job.","Not now. Ever."],tourist:["Uh... no. Weird.","Is he allowed to say that?"],oldlady:["That's not funny, young man.","Shameful!"],party:["Dude, too real. Bad vibes.","Ew, no."],jogger:["Don't touch me.","Out of my lane!"],rich:["Don't touch me.","Don't talk to me."]},iw=["I said NO.","Leave me alone!","Back off, man!","Seriously? Again?"],Pp=["I'm calling the cops.","Officer! This guy!"],sw=["Ha! Good one. Still no.","Haha! No cash, but good one."];function rw(n,e,t){const i=wa[n];if(t.asks>=vi.angryAt||i.hates.includes(e))return 0;let s=i.base*(.5+t.generosity)*t.areaMul;return i.likes.includes(e)&&(s=s*vi.likeMul+vi.likeAdd),t.asks===1&&(s*=vi.againMul),t.sign&&(s+=vi.signAdd),t.high&&n!=="party"&&(s*=vi.drunkMul),Math.max(0,Math.min(vi.maxP,s))}function ow(n,e,t,i){const s=wa[n],r={outcome:"no",money:0,food:0,laughed:!1,callCop:!1,reply:""};if(t.asks>=vi.angryAt)return r.outcome="angry",r.callCop=i()<vi.copChance+.15*(t.asks-vi.angryAt),r.reply=r.callCop?js(Pp,i()):js(iw,i()),r;if(s.hates.includes(e))return r.outcome="hate",r.callCop=(n==="rich"||n==="office")&&i()<vi.hateCop,r.reply=r.callCop?js(Pp,i()):js(nw[n],i()),r;const o=s.likes.includes(e);if(r.laughed=e==="joke"&&o&&s.laughs&&i()<.75,i()<rw(n,e,t)){if(r.outcome="give",i()<s.food)r.food=30,r.reply=js(ew,i());else{r.money=s.cash[0]+Math.floor(i()*(s.cash[1]-s.cash[0]+1));const c=[...JM,...Ip[e]??[],...Ip[e]??[],...QM[n]??[]];r.reply=js(c,i())}return r}const a=r.laughed?sw:[...tw,...Lp[n]??[],...Lp[n]??[]];return r.reply=js(a,i()),r}const m0={beer:{name:"Beer",price:3,note:"Gentle. The classic."},vodka:{name:"Vodka",price:5,note:"Strong. Wild."},wine:{name:"Cheap wine",price:4,note:"Warm and slow."},hotdog:{name:"Hot dog",price:3,note:"Hot food. +40 food",food:40,hot:!0},soup:{name:"Soup",price:4,note:"Hot. +50 food, +5 health",food:50,hot:!0},coffee:{name:"Coffee",price:2,note:"Hot. +10 food, eases the shakes",food:10,hot:!0},sandwich:{name:"Sandwich",price:3,note:"Cold. +35 food",food:35},chips:{name:"Chips",price:1,note:"Cold. +15 food",food:15},pastry:{name:"Pastry",price:2,note:"Cold. +20 food",food:20},cigs:{name:"Cigarettes (5)",price:3,note:"Smoke anywhere. Needs a lighter."},lighter:{name:"Lighter",price:1,note:"For the smokes."},scratch:{name:"Scratch card",price:1,note:"Small odds. Big hope."},treats:{name:"Dog treats",price:2,note:"For a friend you have not met yet."},sign:{name:"Cardboard sign",price:2,note:"People give a bit more."},shades:{name:"Sunglasses",price:6,note:"The cop notices you less."},goodBlanket:{name:"Good blanket",price:8,note:"Sleep heals more. Not heavy."},jokebook:{name:"Joke book",price:4,note:'Unlocks "Tell a joke".'}},g0={liquor:["beer","wine","vodka","cigs","lighter","scratch","chips"],corner:["sandwich","chips","pastry","beer","cigs","lighter","scratch","treats","sign","shades","goodBlanket","jokebook"],truck:["hotdog","soup","coffee"]},Xo={big:.03,bigWin:20,small:.15,smallWin:5};function aw(n){return n<Xo.big?Xo.bigWin:n<Xo.big+Xo.small?Xo.smallWin:0}const Sd={laughTourist:{text:"Make a tourist laugh",ev:"laugh:tourist",n:1,whimsy:15},eatHot:{text:"Eat something hot",ev:"eat:hot",n:1,whimsy:10},sleepBridge:{text:"Sleep under the bridge",ev:"sleep:bridge",n:1,whimsy:12},scratchWin:{text:"Win on a scratch card",ev:"scratch:win",n:1,money:3},give3:{text:"Get 3 people to give",ev:"give",n:3,money:4},recycle5:{text:"Recycle 5 bottles",ev:"recycle",n:5,money:3},sit:{text:"Sit on a bench a while",ev:"sit",n:1,whimsy:8},pigeons:{text:"Feed the pigeons",ev:"pigeons",n:1,whimsy:8},oldLady:{text:"Get an old lady to give",ev:"give:oldlady",n:1,whimsy:10},rich:{text:"Get money from a rich guy",ev:"give:rich",n:1,whimsy:12},door:{text:"Hold a door for someone",ev:"line:door",n:1,money:2},areas3:{text:"Visit 3 parts of the city",ev:"area",n:3,whimsy:10},smoke:{text:"Have a smoke",ev:"smoke",n:1,whimsy:6},tv:{text:"Watch the TV in a window",ev:"tv",n:1,whimsy:6},whimsy2:{text:"Do 2 whimsy acts",ev:"whimsy",n:2,money:4},trash:{text:"Dig through 2 trash cans",ev:"trash",n:2,whimsy:6}},cw=Object.keys(Sd);function Td(n,e){const t=bl(dr(`${n}#goals${e}`)),i=[...cw],s=[];for(;s.length<3;){const r=Math.floor(t()*i.length);s.push({id:i[r],got:0,done:!1}),i.splice(r,1)}return s}const Yn=["head","body","hands","carry"],_0={common:14211288,good:4905066,rare:4889343,legendary:16756782},x0={cardboard:{name:"Cardboard",rarity:"common",desc:"A flat box. A bed, a sign, a wall.",effect:"Craft: sign.",dur:3,value:0,paper:!0},marker:{name:"Marker",rarity:"common",desc:"Half dry. Enough for one sign.",effect:"Craft: sign.",dur:2,value:0},can:{name:"Empty can",rarity:"common",desc:"Rinsed. Mostly.",effect:"Craft: stove, wind chime.",dur:9,value:0},candle:{name:"Candle stub",rarity:"common",desc:"Church leftovers.",effect:"Craft: stove.",dur:3,value:0},string:{name:"String",rarity:"common",desc:"A good length of string.",effect:"Craft: necklace, wind chime.",dur:9,value:0},caps:{name:"Bottle caps",rarity:"common",desc:"A pocketful. They jingle.",effect:"Craft: necklace.",dur:9,value:0},tape:{name:"Duct tape",rarity:"common",desc:"Fixes everything twice.",effect:"Use: +3 wear on his most worn thing. Craft: rain cover.",dur:2,value:1},plank:{name:"Plank",rarity:"common",desc:"Straight, mostly.",effect:"Craft: skateboard.",dur:9,value:0},pole:{name:"Pole",rarity:"common",desc:"A tent pole, or a broom handle.",effect:"Craft: tent (needs 2).",dur:9,value:0},crate:{name:"Milk crate",rarity:"common",desc:"The seat of kings.",effect:"Craft: cart.",dur:9,value:1},newspaper:{name:"Newspaper",rarity:"common",desc:"Yesterday's news.",effect:"Use: read it. +2 whimsy.",dur:2,value:0,paper:!0},beans:{name:"Can of beans",rarity:"common",desc:"Cold beans. Food is food.",effect:"Use: eat. +20 food (hot with a stove).",dur:1,value:1,food:20},bread:{name:"Bread heel",rarity:"common",desc:"Hard as a brick.",effect:"Use: eat. +15 food.",dur:1,value:0,food:15},lighter:{name:"Lighter",rarity:"common",desc:"For the smokes.",effect:"Lets him smoke.",dur:12,value:1},umbrella:{name:"Broken umbrella",rarity:"common",desc:"One spoke short.",effect:"Hands: his paper stays dry in rain.",dur:5,value:1,slot:"hands"},beanie:{name:"Beanie",rarity:"common",desc:"Smells like someone.",effect:"Head: cold hurts half as much.",dur:10,value:1,slot:"head"},tarp:{name:"Tarp",rarity:"good",desc:"Blue. Always blue.",effect:"Craft: tent, bedroll.",dur:9,value:2},wheel:{name:"Old wheel",rarity:"good",desc:"From a skateboard that lost.",effect:"Craft: skateboard.",dur:9,value:1},gloves:{name:"Fingerless gloves",rarity:"good",desc:"Warm hands, free fingers.",effect:"Hands: cold hurts less.",dur:10,value:2,slot:"hands"},poncho:{name:"Poncho",rarity:"good",desc:"Plastic. Crinkly. Dry.",effect:"Body: rain does not soak him or his paper.",dur:8,value:2,slot:"body"},blanket:{name:"Blanket",rarity:"good",desc:"Warm, but heavy.",effect:"Sleep heals +12. Heavy: a bit slower.",dur:10,value:2},backpack:{name:"Backpack",rarity:"good",desc:"One strap works.",effect:"Carry: holds 8.",dur:20,value:4,slot:"carry",cap:8},shades:{name:"Sunglasses",rarity:"good",desc:"Cool. Hidden. Both.",effect:"Head: the cop notices him less.",dur:15,value:3,slot:"head"},book_joke:{name:"Joke book",rarity:"good",desc:"Dad jokes, 1987.",effect:'Read: unlocks "Tell a joke" forever.',dur:6,value:1,paper:!0,book:"joke"},book_cook:{name:"Cookbook",rarity:"good",desc:'"Cooking on a Budget". Very budget.',effect:"Read: dumpster recipes, trash food +50%.",dur:6,value:1,paper:!0,book:"cook"},book_poetry:{name:"Poetry book",rarity:"good",desc:"Water-stained. Still sings.",effect:'Read: unlocks "Recite" (busk for coins).',dur:6,value:1,paper:!0,book:"poetry"},trolley:{name:"Shopping trolley",rarity:"good",desc:"One wheel squeaks. Loudly.",effect:"Carry: holds 16. Slow, and the cop hears it.",dur:25,value:3,slot:"carry",cap:16},radio:{name:"Pocket radio",rarity:"rare",desc:"One station. It is jazz.",effect:"Use: +5 whimsy.",dur:6,value:6},sleepingBag:{name:"Sleeping bag",rarity:"rare",desc:"The zipper half works.",effect:"Sleep heals +15.",dur:15,value:6},goodBlanket:{name:"Good blanket",rarity:"rare",desc:"Thick wool. Not heavy.",effect:"Sleep heals +20.",dur:20,value:5},guitar:{name:"Guitar",rarity:"rare",desc:"Five strings. Enough.",effect:"Hands: busk for coins.",dur:20,value:8,slot:"hands"},boltCutters:{name:"Bolt cutters",rarity:"rare",desc:"Heavy. Honest work, surely.",effect:"Cut a bike lock (easier, louder).",dur:6,value:6},lock:{name:"Bike lock",rarity:"rare",desc:"The key is on a string.",effect:"His parked ride is locked.",dur:30,value:3},book_psych:{name:"Psychology paperback",rarity:"rare",desc:'"Reading People". Dog-eared.',effect:"Read: see who likes which line before he asks.",dur:6,value:2,paper:!0,book:"psych"},book_lockpick:{name:"Lockpicking zine",rarity:"rare",desc:"Photocopied. Illegal-ish.",effect:"Read: steal bikes.",dur:6,value:2,paper:!0,book:"lockpick"},book_dog:{name:"Dog training",rarity:"rare",desc:'"Sit. Stay. Love."',effect:"Read: your dog learns sit, beg, play dead, fetch. A mutt steals bread.",dur:6,value:1,paper:!0,book:"dog"},skateboard:{name:"Skateboard",rarity:"rare",desc:"Grip tape, mostly.",effect:"Ride: fast. Wobbly when drunk.",dur:8,value:5,ride:!0},watch:{name:"Wristwatch",rarity:"rare",desc:"Stopped at 4:20.",effect:"Pawn it.",dur:99,value:12},luckyCharm:{name:"Lucky charm",rarity:"legendary",desc:"A rabbit foot. Not his rabbit.",effect:"Better scratch cards. People give a bit more.",dur:99,value:10},ring:{name:"Gold ring",rarity:"legendary",desc:"Someone said no.",effect:"Pawn it for a lot.",dur:99,value:30},scooter:{name:"Scooter",rarity:"legendary",desc:"Fast. Careful.",effect:"Ride: very fast. Wild when drunk.",dur:12,value:15,ride:!0},jacket:{name:"Leather jacket",rarity:"legendary",desc:"Like a movie.",effect:"Body: warm, and party people like him more.",dur:25,value:14,slot:"body"},sign:{name:"Cardboard sign",rarity:"common",desc:"Hand-written.",effect:"Hands: people give more, if the words suit them.",dur:5,value:0,slot:"hands",paper:!0,crafted:!0},tent:{name:"Tent",rarity:"good",desc:"Tarp and two poles. Home.",effect:"Sleep: +15 heal, dry, and no thief.",dur:10,value:4,crafted:!0},stove:{name:"Can stove",rarity:"good",desc:"Can, candle, careful.",effect:"Food he eats is hot.",dur:6,value:1,crafted:!0},cart:{name:"Crate cart",rarity:"good",desc:"A trolley with a crate on it.",effect:"Carry: holds 20. Slow, and the cop hears it.",dur:25,value:4,slot:"carry",cap:20,crafted:!0},necklace:{name:"Bottle-cap necklace",rarity:"good",desc:"Jingly. Heartfelt.",effect:"Use near someone: a gift. They turn friendly.",dur:1,value:1,crafted:!0},rainCover:{name:"Rain cover",rarity:"good",desc:"Umbrella plus a lot of tape.",effect:"Paper stays dry. Rain nights heal more.",dur:8,value:1,crafted:!0},chime:{name:"Wind chime",rarity:"common",desc:"Cans on a string. Music.",effect:"Use: +4 whimsy.",dur:5,value:1,crafted:!0},hotStew:{name:"Bin stew",rarity:"good",desc:"Do not ask.",effect:"Use: eat. +45 food, hot.",dur:1,value:0,food:45,hot:!0,crafted:!0},bedroll:{name:"Bedroll",rarity:"good",desc:"Blanket rolled in a tarp.",effect:"Sleep heals +18, and dry.",dur:15,value:3,crafted:!0},bike:{name:"Bike",rarity:"rare",desc:"Not his. Now his.",effect:"Ride: fastest. Very wobbly drunk.",dur:15,value:10,ride:!0,crafted:!0}},Ue=x0,lw=Object.keys(x0),hw=lw.filter(n=>!Ue[n].crafted),lr={joke:"book_joke",cook:"book_cook",psych:"book_psych",lockpick:"book_lockpick",poetry:"book_poetry",dog:"book_dog"};function Tu(){return{bag:[],gear:{},books:[],known:[],ride:null,riding:!1,parked:null,locked:!1,ground:[],combos:[],gift:!1,rideT:0,fell:!1}}const jt={emit:(n,e)=>{},hasDog:n=>!1,guard:n=>!1};function on(n){const[e,t]=bd(n.rng);return n.rng=t,e}const at=(n,e)=>n.messages.push(e),Ec=n=>Math.max(0,Math.min(100,n)),xo=n=>n.own.gear.carry?Ue[n.own.gear.carry.id].cap??4:4,uw=(n,e)=>Yn.some(t=>{var i;return((i=n.own.gear[t])==null?void 0:i.id)===e}),Gt=(n,e)=>uw(n,e)||n.own.bag.some(t=>t.id===e),vn=(n,e)=>n.own.books.includes(e),Ui=(n,e)=>n.own.combos.includes(e),y0=[{id:"coolBusker",name:"Cool busker",need:["shades","guitar"],text:"busking pays double"},{id:"rightSign",name:"The right sign",need:["sign","book:psych"],text:"his sign suits every street"},{id:"snugCamp",name:"Snug camp",need:["tent","sleepingBag|bedroll"],text:"sleep heals +15 more, even cold nights"},{id:"troubadour",name:"Troubadour",need:["guitar","book:poetry"],text:"reciting pays $2 more"},{id:"streetLegend",name:"Street legend",need:["skateboard","shades"],text:"half the drunk wobble on the board"},{id:"chef",name:"Chef",need:["stove","book:cook"],text:"hot food fills 50% more"},{id:"scrapper",name:"Scrapper",need:["trolley|cart","boltCutters"],text:"recycling pays +$1 a bottle"},{id:"ghostHands",name:"Ghost hands",need:["luckyCharm","book:lockpick"],text:"nobody sees him take a bike"},{id:"warmNight",name:"Warm night",need:["blanket","dog"],text:"the dog sleeps on the blanket: a warm night"}];function dw(n,e){return e==="dog"?jt.hasDog(n):e.startsWith("book:")?vn(n,e.slice(5)):e.split("|").some(t=>{var i;return Gt(n,t)||((i=n.own.ride)==null?void 0:i.id)===t})}function Cn(n){var t,i,s;const e=n.own;n.items.blanket=Gt(n,"blanket"),n.items.goodBlanket=Gt(n,"goodBlanket"),n.items.sign=((t=e.gear.hands)==null?void 0:t.id)==="sign",n.items.shades=((i=e.gear.head)==null?void 0:i.id)==="shades",n.items.lighter=Gt(n,"lighter"),n.items.jokebook=vn(n,"joke"),n.items.scooter=e.riding&&((s=e.ride)==null?void 0:s.id)==="scooter";for(const r of y0){const o=r.need.every(c=>dw(n,c)),a=e.combos.includes(r.id);o&&!a?(e.combos.push(r.id),at(n,`Combo! ${r.name}: ${r.text}.`),jt.emit(n,"combo")):!o&&a&&e.combos.splice(e.combos.indexOf(r.id),1)}}const fw={joke:'A joke book! New line: "Tell a joke".',cook:"The cookbook. He can make bin stew now, and trash food goes further.",psych:"Reading People. Now he can see who likes which line.",lockpick:"The lockpicking zine. Bikes look different now.",poetry:'Poetry. New act: "Recite" for coins.',dog:"Dog training. Sit, beg, play dead, fetch. Now find a dog."};function v0(n,e){return vn(n,e)?!1:(n.own.books.push(e),at(n,fw[e]),jt.emit(n,"read"),!0)}const Eu=[{text:"GOD BLESS",suits:["oldlady","rich"]},{text:"WHY LIE? NEED BEER",suits:["party","tourist"]},{text:"ANYTHING HELPS",suits:["office","tourist","oldlady"]},{text:"SMILE, IT'S FREE",suits:["jogger","party"]},{text:"WILL WORK FOR SOUP",suits:["office","rich","jogger"]}];function zt(n,e,t=0,i=0,s={},r=!1){const o=Ue[e],a={id:e,dur:o.dur,...s},c=n.own;return o.book&&v0(n,o.book),o.ride&&!c.ride?(c.ride=a,c.riding=!0,c.parked=null,r||at(n,`${o.name}! He hops on.`)):o.slot&&!c.gear[o.slot]?(c.gear[o.slot]=a,!r&&!o.book&&at(n,`${o.name}. He puts it on.`)):!o.ride&&c.bag.length<xo(n)?(c.bag.push(a),!r&&!o.book&&at(n,`${o.name}. In the bag.`)):(c.ground.push({...a,x:t,z:i}),at(n,`No room. He leaves the ${o.name.toLowerCase()} on the ground.`)),Cn(n),a}function b0(n,e){var r;const t=n.own,i=t.bag.findIndex(o=>o.id===e);let s=null;if(i>=0)s=t.bag.splice(i,1)[0];else for(const o of Yn)if(((r=t.gear[o])==null?void 0:r.id)===e){s=t.gear[o],delete t.gear[o];break}return Cn(n),s}function Ni(n,e,t=1){if(e.dur-=t,e.dur>0)return;const i=n.own,s=i.bag.indexOf(e);s>=0&&i.bag.splice(s,1);for(const r of Yn)i.gear[r]===e&&delete i.gear[r];i.ride===e&&(i.ride=null,i.riding=!1,i.parked=null),at(n,`His ${Ue[e.id].name.toLowerCase()} ${Ue[e.id].paper?"fell apart":"broke"}.`),Cn(n)}const Ed=(n,e)=>n.own.bag.find(t=>t.id===e)??Yn.map(t=>n.own.gear[t]).find(t=>(t==null?void 0:t.id)===e);function pw(n,e){const t=n.own,i=t.bag[e],s=i&&Ue[i.id].slot;if(!i||!s)return!1;t.bag.splice(e,1);const r=t.gear[s];if(t.gear[s]=i,r)if(t.bag.length<xo(n))t.bag.push(r);else return t.gear[s]=r,t.bag.splice(e,0,i),at(n,"No room for the old one."),!1;return at(n,`${Ue[i.id].name}: on.`),Cn(n),!0}function mw(n,e){const t=n.own,i=t.gear[e];if(!i)return!1;const s=e==="carry"?4:xo(n);return t.bag.length+1>s?(at(n,"His pockets can't hold all that."),!1):(delete t.gear[e],t.bag.push(i),Cn(n),!0)}function gw(n,e,t,i){const s=n.own;let r;if(typeof e=="number")r=s.bag.splice(e,1)[0];else{if(r=s.gear[e],r&&e==="carry"&&s.bag.length>4)return at(n,"He can't drop the bag with all that in it."),!1;delete s.gear[e]}return r?(s.ground.push({...r,x:t,z:i}),at(n,`Dropped the ${Ue[r.id].name.toLowerCase()}.`),Cn(n),!0):!1}function _w(n,e,t,i=1.8){return n.own.ground.findIndex(s=>Math.hypot(s.x-e,s.z-t)<=i)}function xw(n,e){const t=n.own.ground[e];if(!t)return!1;const i=Ue[t.id];if(!(i.ride&&!n.own.ride||i.slot&&!n.own.gear[i.slot]||!i.ride&&n.own.bag.length<xo(n)))return at(n,i.ride?"He already has a ride.":"No room in the bag."),!1;n.own.ground.splice(e,1);const{x:r,z:o,...a}=t;return zt(n,t.id,t.x,t.z,a),jt.emit(n,"find"),!0}function M0(n,e,t){const i=t&&Ui(n,"chef")?Math.round(e*1.5):e;return n.hunger=Ec(n.hunger+i),jt.emit(n,"eat"),t&&jt.emit(n,"eat:hot"),i}function w0(n,e,t=!1){const i=n.own,s=i.bag[e];if(!s||n.dead)return!1;const r=Ue[s.id];if(r.book)return v0(n,r.book)||at(n,"He knows this one by heart."),!0;if(r.food){const o=Ed(n,"stove"),a=!!r.hot||!!o;i.bag.splice(e,1);const c=M0(n,r.food,a);return o&&!r.hot&&Ni(n,o),at(n,`${r.name}${a?", hot":""}. +${c} food`),Cn(n),!0}if(r.slot)return pw(n,e);switch(s.id){case"newspaper":return i.bag.splice(e,1),n.whimsy=Ec(n.whimsy+2),at(n,"The news. Somehow worse than his day. +2 whimsy"),Cn(n),!0;case"radio":return n.whimsy=Ec(n.whimsy+5),at(n,"Jazz. Of course. +5 whimsy"),Ni(n,s),!0;case"chime":return n.whimsy=Ec(n.whimsy+4),at(n,"Clink, clonk. Music. +4 whimsy"),Ni(n,s),!0;case"tape":{const o=[...i.bag,...Yn.map(c=>i.gear[c]).filter(c=>!!c),...i.ride?[i.ride]:[]].filter(c=>c!==s);if(!o.length)return at(n,"Nothing to tape."),!1;const a=o.reduce((c,l)=>c.dur/Ue[c.id].dur<=l.dur/Ue[l.id].dur?c:l);return a.dur=Math.min(Ue[a.id].dur,a.dur+3),at(n,`Taped up the ${Ue[a.id].name.toLowerCase()}.`),Ni(n,s),!0}case"necklace":return t?(i.bag.splice(e,1),i.gift=!0,at(n,"He gives the necklace. They look at him differently now."),Cn(n),!0):(at(n,"A gift needs someone to give it to."),!1)}return at(n,`He turns the ${r.name.toLowerCase()} over in his hands. Not now.`),!1}function yw(n,e,t){if(!vn(n,"psych"))return null;const i=wa[e];return i.likes.includes(t)?"likes":i.hates.includes(t)?"hates":"meh"}function vw(n,e){var i,s;if(!n.items.sign)return!1;const t=(i=n.own.gear.hands)==null?void 0:i.text;return!t||Ui(n,"rightSign")?!0:((s=Eu.find(r=>r.text===t))==null?void 0:s.suits.includes(e))??!0}function bw(n){var t,i,s;let e=1;return((t=n.own.gear.head)==null?void 0:t.id)==="beanie"&&(e*=.5),((i=n.own.gear.hands)==null?void 0:i.id)==="gloves"&&(e*=.75),((s=n.own.gear.body)==null?void 0:s.id)==="jacket"&&(e*=.6),e}const Mw=n=>{var e,t;return((e=n.own.gear.hands)==null?void 0:e.id)==="umbrella"||((t=n.own.gear.body)==null?void 0:t.id)==="poncho"||Gt(n,"rainCover")||Gt(n,"tent")},ww=[["common",.62],["good",.26],["rare",.1],["legendary",.02]];function kp(n,e,t,i=!1){const s=bl(dr(`${n}#loot${e}#${t}`)),r=s(),o=i?.75:.42;if(r>=o){const u=(r-o)/(1-o);return u<.35?"coins":u<.6?"bottle":"nothing"}const a=i?.15+s()*.85:s();let c="legendary",l=0;for(const[u,d]of ww)if(l+=d,a<l){c=u;break}const h=hw.filter(u=>Ue[u].rarity===c);return h[Math.floor(s()*h.length)]}function Dp(n,e,t,i){if(e==="coins"){n.money+=1,at(n,"A sticky dollar. Still money.");return}if(e==="bottle"){n.bottles++,at(n,"A bottle.");return}if(e==="nothing"){at(n,"Just trash. Classy trash, though.");return}const s=Ue[e];if(s.food&&vn(n,"cook")){const r=M0(n,Math.round(s.food*1.5),!1);at(n,`${s.name}, cooked up right. +${r} food`);return}s.book&&vn(n,s.book)?at(n,`Another ${s.name.toLowerCase()}. He knows it already.`):s.book||at(n,`Found: ${s.name} (${s.rarity}).`),zt(n,e,t,i,{},!0)}function Sw(n){const e=n.own;for(const t of Yn){const i=e.gear[t];i&&Ni(n,i)}if(e.ride&&e.rideT>0&&Ni(n,e.ride),e.rideT=0,n.draw.weather==="rain"&&!Mw(n)){const t=[...e.bag,...Yn.map(i=>e.gear[i])].filter(i=>!!i&&!!Ue[i.id].paper);t.length&&at(n,"Rain. His paper things got soaked.");for(const i of t)i.wet=!0,Ni(n,i,2)}}function Tw(n,e){const t=n.own;if(Gt(n,"tent"))return;if(jt.guard(n)){at(n,"Something prowled near your bag in the night. Your dog growled it away.");return}const i=e==="street"?.6:e==="bridge"||e==="underpass"?.25:.35;if(t.bag.length&&on(n)<i){const s=t.bag.splice(Math.floor(on(n)*t.bag.length),1)[0];at(n,`Someone went through his bag in the night. The ${Ue[s.id].name.toLowerCase()} is gone.`)}t.ride&&!t.riding&&!t.locked&&on(n)<.5&&(at(n,`His ${Ue[t.ride.id].name.toLowerCase()} is gone. He should have locked it.`),t.ride=null,t.parked=null),Cn(n)}function Ew(n){const e=n.items,t=[[e.blanket,"blanket"],[e.goodBlanket,"goodBlanket"],[e.sign,"sign"],[e.shades,"shades"],[e.lighter,"lighter"],[e.jokebook,"book_joke"],[e.scooter,"scooter"]];for(const[i,s]of t)i&&zt(n,s,0,0,{},!0);n.messages=[]}const S0={skateboard:{speed:1.6,sober:.08,drunk:2.6,drunkSpeed:1,fall:.035,fallHurt:6},scooter:{speed:1.7,sober:0,drunk:2,drunkSpeed:1,fall:.01,fallHurt:8},bike:{speed:2.1,sober:0,drunk:1.6,drunkSpeed:1.25,fall:.015,fallHurt:12}},Ad=n=>n.own.riding&&n.own.ride?n.own.ride.id:null;function Aw(n,e,t,i){var o;const s=Ad(n);if(s){const a=S0[s];e*=a.speed,i?(e*=a.drunkSpeed,t=t*a.drunk+.3,s==="skateboard"&&Ui(n,"streetLegend")&&(t*=.5)):t+=a.sober}const r=(o=n.own.gear.carry)==null?void 0:o.id;return r==="trolley"&&(e*=.8),r==="cart"&&(e*=.85),{speed:e,wobble:t}}const Rw=n=>{var e,t;return((e=n.own.gear.carry)==null?void 0:e.id)==="trolley"||((t=n.own.gear.carry)==null?void 0:t.id)==="cart"};function T0(n,e,t){const i=n.own;return!i.ride||!i.riding?!1:(i.riding=!1,i.parked={x:e,z:t},i.locked=Gt(n,"lock"),n.messages.push(i.locked?"Parked and locked.":"Parked. No lock. Hmm."),Cn(n),!0)}function Cw(n,e,t){const i=n.own;return!i.ride||i.riding||!i.parked||Math.hypot(i.parked.x-e,i.parked.z-t)>2.2?!1:(i.riding=!0,i.parked=null,Cn(n),!0)}function Iw(n,e,t,i,s){var a;const r=n.own,o=Ad(n);if(o){r.rideT+=e;const c=S0[o];s&&on(n)<c.fall*e&&(n.health=Math.max(0,n.health-c.fallHurt),r.fell=!0,n.messages.push(o==="bike"?"He and the bike part ways. Hard.":"He ate the pavement."),T0(n,t,i),r.ride&&Ni(n,r.ride)),o==="bike"&&((a=r.ride)!=null&&a.area)&&r.ride.area===en(t,i)&&!n.usedToday.includes("owner")&&on(n)<.02*e&&(n.usedToday.push("owner"),n.copAlert=!0,n.messages.push(`"HEY! That's MY bike!" Someone is calling the cop.`))}else r.ride&&r.parked&&!r.locked&&Math.hypot(r.parked.x-t,r.parked.z-i)>12&&on(n)<.006*e&&(n.messages.push(`Someone rode off on his ${Ue[r.ride.id].name.toLowerCase()}. He should lock it.`),r.ride=null,r.parked=null,Cn(n))}const Rd=[{x:-4,z:7.4},{x:52,z:-5},{x:-78,z:7.4},{x:88,z:7.4}];function E0(n,e){return n.usedToday.includes("bike"+e)?!1:bl(dr(`${n.seed}#rack${n.day}#${e}`))()<.7}const Lw=n=>vn(n,"lockpick")||Gt(n,"boltCutters"),A0=n=>vn(n,"lockpick")?.55:.4;function R0(n,e,t){n.usedToday.push("bike"+e);const i=!vn(n,"lockpick");if(i){const a=Ed(n,"boltCutters");a&&Ni(n,a)}const s=t>=A0(n);let r=.18+.02*n.day+(s?0:.25)+(i?.1:0);Ui(n,"ghostHands")&&(r=0);const o=Rd[e];return on(n)<r?on(n)<.5?(n.copAlert=!0,s&&zt(n,"bike",o.x,o.z,{area:en(o.x,o.z)},!0),n.messages.push(s?"Got the bike, but the cop saw!":"The cop saw him fiddling with the lock!"),"cop"):(n.whimsy=Math.max(0,n.whimsy-3),n.messages.push('"HEY! Get off my bike!" The owner. He walks away fast.'),"owner"):s?(zt(n,"bike",o.x,o.z,{area:en(o.x,o.z)},!0),n.messages.push("Click. A bike. Nobody saw."),"got"):(n.messages.push("The lock wins. Nobody saw."),"fumbled")}const Qr={pawn:{x:42.5,z:8.6,r:2.8,label:"Pawn shop"},books:{x:-36,z:7,r:2.6,label:"Used books"},library:{x:-66,z:-16,r:2,label:"Little library"}},dh=(n,e)=>Math.hypot(n.x-Qr[e].x,n.z-Qr[e].z)<=Qr[e].r,Np=(n,e)=>n.usedToday.filter(t=>t===e).length,Zn=(n,e)=>n.messages.push(e),Up=n=>Math.max(0,Math.min(100,n)),C0=[{id:"backpack",price:6},{id:"sleepingBag",price:8},{id:"guitar",price:12},{id:"boltCutters",price:9},{id:"lock",price:4},{id:"scooter",price:20},{id:"luckyCharm",price:15}],Cd=[{book:"joke",price:3},{book:"cook",price:3},{book:"poetry",price:3},{book:"psych",price:5},{book:"lockpick",price:5},{book:"dog",price:4}],Fp=3;function Pw(n,e){var o;const t=[],i=(a,c)=>t.push({id:`own:${a}`,label:c,whimsy:!1}),s=_w(n,e.x,e.z);s>=0&&i(`grab:${s}`,"Grab "+Ue[n.own.ground[s].id].name.toLowerCase());const r=n.own;return r.riding?i("getoff","Get off"):r.ride&&r.parked&&Math.hypot(r.parked.x-e.x,r.parked.z-e.z)<=2.2&&i("mount","Ride"),pa.some(a=>Math.hypot(a.x-e.x,a.z-e.z)<=d0)&&i("craft","Craft"),dh(e,"pawn")&&i("pawn","Pawn shop"),dh(e,"books")&&i("books","Book cart"),dh(e,"library")&&!n.usedToday.includes("library")&&i("library","Little library"),Lw(n)&&!Ad(n)&&Rd.forEach((a,c)=>{Math.hypot(a.x-e.x,a.z-e.z)<=1.8&&E0(n,c)&&i(`steal:${c}`,"Steal bike")}),((o=r.gear.hands)==null?void 0:o.id)==="guitar"&&Np(n,"busk")<Fp&&!r.riding&&i("busk","Busk"),vn(n,"poetry")&&Np(n,"recite")<Fp&&!r.riding&&i("recite","Recite"),t}function kw(n,e,t){const i=n.own;if(e.startsWith("grab:"))return xw(n,Number(e.slice(5)));if(e.startsWith("steal:")||e==="craft"||e==="pawn"||e==="books")return!0;switch(e){case"getoff":return T0(n,t.x,t.z);case"mount":return Cw(n,t.x,t.z);case"library":{n.usedToday.push("library");const s=Object.keys(lr).filter(r=>!vn(n,r));return s.length&&on(n)<.6?zt(n,lr[s[Math.floor(on(n)*s.length)]],t.x,t.z):(Zn(n,"Only a romance novel. He takes a newspaper instead."),zt(n,"newspaper",t.x,t.z,{},!0)),jt.emit(n,"library"),!0}case"busk":{n.usedToday.push("busk");let s=1+Math.floor(on(n)*3);return Ui(n,"coolBusker")&&(s*=2),n.money+=s,n.whimsy=Up(n.whimsy+3),Zn(n,`He plays. ${Ui(n,"coolBusker")?"Too cool. ":""}+$${s}`),i.gear.hands&&Dw(n,i.gear.hands),jt.emit(n,"busk"),!0}case"recite":{n.usedToday.push("recite");const s=Math.floor(on(n)*3)+(Ui(n,"troubadour")?2:0);return n.money+=s,n.whimsy=Up(n.whimsy+3),Zn(n,s?`He recites a poem about pigeons. +$${s}`:"He recites. Nobody pays. The pigeons clap, in spirit."),jt.emit(n,"recite"),!0}}return!1}function Dw(n,e){on(n)<.3&&(e.dur-=1,e.dur<=0&&(b0(n,e.id),Zn(n,`His ${Ue[e.id].name.toLowerCase()} broke.`)))}function Nw(n,e,t,i,s){n.dead||Iw(n,e,t,i,s)}function I0(n,e){const t=n.own.bag[e];if(!t)return!1;const i=Ue[t.id],s=Math.max(0,Math.round(i.value*(t.wet?.5:1)*Math.max(.4,t.dur/i.dur)));return s<=0?(Zn(n,`"I don't take trash, pal."`),!1):(n.own.bag.splice(e,1),n.money+=s,Zn(n,`Sold the ${i.name.toLowerCase()}. +$${s}`),Cn(n),jt.emit(n,"pawn"),!0)}function Uw(n,e,t=0,i=0){const s=C0[e];return s?n.money<s.price?(Zn(n,"Not enough money."),!1):Ue[s.id].ride&&n.own.ride?(Zn(n,"He already has a ride."),!1):(n.money-=s.price,zt(n,s.id,t,i),jt.emit(n,"buy"),!0):!1}function Fw(n,e,t=0,i=0){const s=Cd[e];return s?vn(n,s.book)&&Gt(n,lr[s.book])?(Zn(n,"He has that one."),!1):n.money<s.price?(Zn(n,"Not enough money."),!1):(n.money-=s.price,zt(n,lr[s.book],t,i),jt.emit(n,"buy"),!0):!1}function Ow(n,e,t=0,i=0){const s=Cd[e];return!s||n.usedToday.includes("bookSteal")?(Zn(n,"The cart man is watching him now."),!1):(n.usedToday.push("bookSteal"),zt(n,lr[s.book],t,i),on(n)<.5?(n.copAlert=!0,Zn(n,'"THIEF! Book thief!" Who steals a book?')):Zn(n,"Slipped it in his coat. Literature is free."),!0)}function Id(){const n=["CAT","RAIN","BENCH","SODA","MOON","BREAD","COIN","DOG","TRAM","SNOW"];return n[Math.floor(Math.random()*n.length)]+Math.floor(Math.random()*900+100)}const yt={dayLength:180,nightAt:.72,sleepFrom:.6,withdrawalRate:.9,withdrawalDayGrowth:.3,withdrawalHurt:1.5,buzzDecay:.5,whimsyDrain:.3,whimsyDayGrowth:.1,whimsyBase:18,coldHurt:.08,highAt:5,carDamage:25,hungerStart:70,hungerRate:.35,hungerLow:20,hungerHurt:.25,sitDrain:.25,sitHeal:.2,sitGoal:8},qr={beer:{name:"Beer",price:3,buzz:35,wobble:.7,slow:.7},vodka:{name:"Vodka",price:5,buzz:60,wobble:1.6,slow:1.1},wine:{name:"Wine",price:4,buzz:45,wobble:.45,slow:.5},mix:{name:"Mix",price:0,buzz:50,wobble:.15,slow:.4}};function L0(n,e){const t=bl(dr(n+"#day"+e)),i=t(),s=i<.5?"mild":i<.8?"cold":"rain",r=.2+t()*.8,o=wd.map((h,u)=>u);for(let h=o.length-1;h>0;h--){const u=Math.floor(t()*(h+1));[o[h],o[u]]=[o[u],o[h]]}const a=8+Math.floor(t()*6),c=["coins","bread","bottle","beer","nothing","blanket","scooter","jokebook"],l=c[Math.floor(t()*c.length)];return{weather:s,generosity:r,bottleSpots:o.slice(0,a),dumpsterFind:l}}const wl={spray:{name:"Spray a passer-by",where:"sprinkler"},cat:{name:"Pet the cat",where:null},dance:{name:"Dance on the corner",where:"corner"},snack:{name:"Steal a snack",where:"bakery"},bench:{name:"Sing on the bench",where:"bench"}},P0=Object.keys(wl),Bw={car:"A car hit him.",body:"His body gave out.",gaveup:"He gave up.",jail:"The cop caught him. Jail."};function Ld(n,e=null){const t=L0(n,1);return{seed:n,day:1,time:0,draw:t,rng:dr(n+"#rng1"),health:100,withdrawal:30,buzz:0,whimsy:60,bestWhimsy:60,money:1,bottles:0,drinks:{beer:0,vodka:0,wine:0,mix:0},items:{blanket:!1,scooter:!1,goodBlanket:!1,sign:!1,shades:!1,lighter:!1,jokebook:!1},effect:null,bottlesLeft:t.bottleSpots.map(()=>!0),dumpsterUsed:!1,begTimer:0,whimsyToday:{},discovered:[],copAlert:!1,dead:null,messages:[],stash:e,hunger:yt.hungerStart,inv:{cigs:0,treats:0},sitting:!1,sitT:0,usedToday:[],areasToday:[],goals:Td(n,1),gives:0,own:Tu()}}function zw(n){const e=Ld(n.seed,n.stash);return n.drinks={...e.drinks,...n.drinks??{}},n.items={...e.items,...n.items??{}},n.inv={...e.inv,...n.inv??{}},typeof n.hunger!="number"&&(n.hunger=e.hunger),typeof n.sitT!="number"&&(n.sitT=0),typeof n.sitting!="boolean"&&(n.sitting=!1),Array.isArray(n.usedToday)||(n.usedToday=[]),Array.isArray(n.areasToday)||(n.areasToday=[]),Array.isArray(n.goals)||(n.goals=Td(n.seed,n.day)),typeof n.gives!="number"&&(n.gives=0),n.own?n.own={...Tu(),...n.own}:(n.own=Tu(),Ew(n)),n.bottlesLeft.length!==n.draw.bottleSpots.length&&(n.bottlesLeft=n.draw.bottleSpots.map(()=>!0)),n}function k0(n){const[e,t]=bd(n.rng);return n.rng=t,e}const St=(n,e=0,t=100)=>Math.max(e,Math.min(t,n)),Fi=n=>n.buzz>=yt.highAt,ds=n=>n.time>=yt.nightAt*yt.dayLength,fr=n=>n.time/yt.dayLength;function lt(n,e){n.messages.push(e)}function ma(n,e){n.dead||(n.dead=e)}function Vt(n,e,t=1){for(const i of n.goals){if(i.done)continue;const s=Sd[i.id];!s||s.ev!==e||(i.got+=t,i.got>=s.n&&(i.done=!0,s.whimsy&&(n.whimsy=St(n.whimsy+s.whimsy)),s.money&&(n.money+=s.money),n.bestWhimsy=Math.max(n.bestWhimsy,n.whimsy),lt(n,`Goal done: ${s.text}! ${s.whimsy?"+"+s.whimsy+" whimsy":"+$"+s.money}`)))}}function Hw(n,e,t){const i=en(e,t);return n.areasToday.includes(i)?null:(n.areasToday.push(i),Vt(n,"area"),Ma[i].name)}const Un=(n,e)=>{const t=Ae[e];return Math.hypot(n.x-t.x,n.z-t.z)<=t.r},Pd=(n,e,t)=>e.findIndex(i=>Math.hypot(n.x-i.x,n.z-i.z)<=t),Au=n=>Pd(n,pa,d0)>=0,D0=n=>Pd(n,Su,qM)>=0,N0=n=>Object.keys(Cp).find(e=>Un(n,Cp[e]))??null;function U0(n,e){for(let t=0;t<n.draw.bottleSpots.length;t++){if(!n.bottlesLeft[t])continue;const i=wd[n.draw.bottleSpots[t]];if(Math.hypot(e.x-i.x,e.z-i.z)<=1.6)return t}return-1}const lc=(n,e)=>n.usedToday.includes(e);function F0(n){return Un(n,"bridge")?"bridge":Un(n,"underpass")?"underpass":Un(n,"alley")?"alley":Au(n)?"bench":null}function O0(n,e){const t=[];if(n.dead)return t;const i=Fi(n),s=(h,u)=>t.push({id:h,label:u,whimsy:!1});if(n.sitting&&s("stand","Get up"),i)for(const h of P0){const u=wl[h];let d=!1;h==="cat"?d=!!e.catNear:h==="spray"?d=Un(e,"sprinkler")&&!!e.pedNear:h==="bench"?d=Au(e):u.where&&(d=Un(e,u.where)),d&&t.push({id:`whimsy:${h}`,label:u.name,whimsy:!0})}e.ped&&e.ped.asks<=2&&s("beg",`Ask the ${wa[e.ped.kind].name.toLowerCase()}`),U0(n,e)>=0&&s("pickup","Pick up bottle");const r=N0(e);r&&s(`enter:${r}`,"Go in"),YM.some(h=>Un(e,h))&&n.bottles>0&&s("recycle",`Recycle ${n.bottles} for $${n.bottles}`),Un(e,"dumpster")&&!n.dumpsterUsed&&s("dumpster","Dig in dumpster");const o=Pd(e,f0,jM);o>=0&&!lc(n,"trash"+o)&&s(`trash:${o}`,"Dig in the trash"),Un(e,"bakeryBin")&&!lc(n,"bakeryBin")&&s("bakeryBin","Check the bakery bin"),n.drinks.beer>0&&n.drinks.vodka>0&&s("mix","Mix beer + vodka"),F0(e)&&fr(n)>=yt.sleepFrom&&s("sleep","Sleep"),Au(e)&&!n.sitting&&s("sit","Sit");for(const h of Ml)Un(e,h)&&!lc(n,h)&&s("pigeons","Feed pigeons");for(const h of Md)Un(e,h)&&!lc(n,h)&&s("tv","Watch TV");if(Un(e,"stash"))if(n.stash)s("stashTake",`Take ${n.stash} from stash`);else{const h=B0(n);h&&s("stashPut",`Hide ${h} for the next man`)}n.inv.cigs>0&&n.items.lighter&&s("smoke","Smoke");const c=Pw(n,e),l=h=>/^own:(grab|steal|getoff)/.test(h.id);return t.unshift(...c.filter(l)),t.push(...c.filter(h=>!l(h))),t}function B0(n){return n.drinks.vodka>0?"vodka":n.drinks.beer>0?"beer":n.items.blanket?"blanket":n.money>=3?"$3":null}function Gw(n,e){const t=n.whimsyToday[e]??0,i=n.effect==="mix"?2:1;return Math.round(yt.whimsyBase*Math.pow(.5,t)*i)}function ia(n,e,t=!1){n.hunger=St(n.hunger+e),Vt(n,"eat"),t&&Vt(n,"eat:hot")}function Vw(n){zt(n,"book_joke",0,0,{},!0)}function Ww(n,e,t){if(n.dead||!O0(n,t).some(i=>i.id===e))return!1;if(e.startsWith("whimsy:")){const i=e.slice(7),s=Gw(n,i);return n.whimsy=St(n.whimsy+s),n.bestWhimsy=Math.max(n.bestWhimsy,n.whimsy),n.whimsyToday[i]=(n.whimsyToday[i]??0)+1,n.discovered.includes(i)||n.discovered.push(i),i==="snack"&&(n.health=St(n.health+8),ia(n,15),n.copAlert=!0),lt(n,`${wl[i].name}. +${s} whimsy`),Vt(n,"whimsy"),!0}if(e.startsWith("trash:")){const i=Number(e.slice(6));return n.usedToday.push("trash"+i),Dp(n,kp(n.seed,n.day,"trash"+i),t.x,t.z),Vt(n,"trash"),!0}if(e.startsWith("enter:"))return!0;if(e.startsWith("own:"))return kw(n,e.slice(4),t);switch(e){case"beg":return!0;case"pickup":{const i=U0(n,t);return n.bottlesLeft[i]=!1,n.bottles++,lt(n,"Got a bottle."),!0}case"recycle":{const i=n.bottles,s=i*(Ui(n,"scrapper")?2:1);return n.money+=s,lt(n,`Recycled. +$${s}`),n.bottles=0,Vt(n,"recycle",i),!0}case"dumpster":{n.dumpsterUsed=!0;const i=n.draw.dumpsterFind;return i==="coins"?(n.money+=2,lt(n,"Found $2.")):i==="bread"?(n.health=St(n.health+15),ia(n,25),lt(n,"Old bread. +15 health, +25 food")):i==="bottle"?(n.bottles++,lt(n,"Found a bottle.")):i==="beer"?(n.drinks.beer++,lt(n,"Half a beer. Nice.")):i==="blanket"?zt(n,"blanket",t.x,t.z):i==="scooter"?zt(n,"scooter",t.x,t.z):i==="jokebook"&&!n.items.jokebook?Vw(n):lt(n,"Nothing."),Dp(n,kp(n.seed,n.day,"dumpster",!0),t.x,t.z),!0}case"bakeryBin":return n.usedToday.push("bakeryBin"),ia(n,25),lt(n,"Yesterday's bread. Still soft. +25 food"),!0;case"buyBeer":case"buyVodka":return z0(n,"liquor",e==="buyBeer"?"beer":"vodka");case"mix":return n.drinks.beer--,n.drinks.vodka--,n.drinks.mix++,lt(n,"Mixed them. Smells like trouble."),!0;case"sleep":return Kc(n,F0(t)??"bench"),!0;case"sit":return n.sitting=!0,n.sitT=0,!0;case"stand":return n.sitting=!1,!0;case"pigeons":{const i=Ml.find(s=>Un(t,s));return n.usedToday.push(i),n.whimsy=St(n.whimsy+5),lt(n,"He shares his crumbs. The pigeons approve. +5 whimsy"),Vt(n,"pigeons"),!0}case"tv":{const i=Md.find(s=>Un(t,s));return n.usedToday.push(i),n.whimsy=St(n.whimsy+4),lt(n,"A cooking show through the glass. Beautiful. +4 whimsy"),Vt(n,"tv"),!0}case"smoke":return n.inv.cigs--,n.whimsy=St(n.whimsy+6),n.withdrawal=St(n.withdrawal-8),lt(n,"A slow smoke. The city slows down too."),Vt(n,"smoke"),!0;case"stashPut":{const i=B0(n);return i==="vodka"?n.drinks.vodka--:i==="beer"?n.drinks.beer--:i==="blanket"?b0(n,"blanket"):n.money-=3,n.stash=i,lt(n,`Hid the ${i}.`),!0}case"stashTake":{const i=n.stash;return i==="vodka"?n.drinks.vodka++:i==="beer"?n.drinks.beer++:i==="blanket"?zt(n,"blanket",t.x,t.z):n.money+=3,n.stash=null,lt(n,`Took the ${i}. Thanks, old friend.`),!0}}return!1}function Sl(n,e){const t=["sad","compliment","howdy","honest"];return n.items.jokebook&&t.splice(3,0,"joke"),D0(e)&&t.push("door"),t}function Xw(n,e,t){var o;if(n.dead||!e.ped||!Sl(n,e).includes(t))return null;const i=e.ped.kind,s=Ma[en(e.x,e.z)].gen(fr(n)),r=ow(i,t,{asks:e.ped.asks,generosity:Math.min(1,n.draw.generosity+(Gt(n,"luckyCharm")?.1:0)+(i==="party"&&((o=n.own.gear.body)==null?void 0:o.id)==="jacket"?.2:0)),areaMul:s,sign:vw(n,i),high:Fi(n)},n.own.gift?()=>.001:()=>k0(n));return n.own.gift=!1,t==="door"&&Vt(n,"line:door"),r.outcome==="give"&&(n.gives++,r.money&&(n.money+=r.money),r.food&&ia(n,r.food),Vt(n,"give"),Vt(n,"give:"+i)),r.laughed&&(n.whimsy=St(n.whimsy+4),Vt(n,"laugh:"+i)),r.outcome==="hate"&&(n.whimsy=St(n.whimsy-2)),r.callCop&&(n.copAlert=!0),r}function z0(n,e,t,i={x:0,z:0}){if(n.dead||!g0[e].includes(t))return!1;const s=m0[t],o={lighter:"lighter",sign:"sign",shades:"shades",goodBlanket:"goodBlanket",jokebook:"jokebook"}[t];if(o&&n.items[o])return lt(n,"He already has one."),!1;if(n.money<s.price)return lt(n,"Not enough money."),!1;if(n.money-=s.price,Vt(n,"buy"),t==="beer"||t==="vodka"||t==="wine")n.drinks[t]++,lt(n,`Bought ${s.name.toLowerCase()}.`);else if(s.food)ia(n,s.food,s.hot),t==="soup"&&(n.health=St(n.health+5)),t==="coffee"&&(n.withdrawal=St(n.withdrawal-10)),lt(n,`${s.name}. +${s.food} food`);else if(t==="cigs")n.inv.cigs+=5,lt(n,"Five smokes.");else if(t==="treats")n.inv.treats++,lt(n,"Dog treats. For someday.");else if(t==="scratch"){const a=aw(k0(n)*(Gt(n,"luckyCharm")?.5:1));a?(n.money+=a,Vt(n,"scratch:win"),lt(n,`Scratch card: WIN $${a}!`)):lt(n,"Scratch card: nothing. Next one, surely.")}else o&&(zt(n,o==="jokebook"?"book_joke":o,i.x,i.z,{},!0),o!=="jokebook"&&lt(n,`Got the ${s.name.toLowerCase()}.`));return!0}function H0(n){return n.drinks.mix>0?"mix":n.drinks.vodka>0?"vodka":n.drinks.wine>0?"wine":n.drinks.beer>0?"beer":null}function $w(n){if(n.dead)return!1;const e=H0(n);return e?(n.drinks[e]--,n.buzz=St(n.buzz+qr[e].buzz),n.withdrawal=St(n.withdrawal-40),e==="mix"&&(n.health=St(n.health-12)),(!n.effect||qr[e].buzz>=qr[n.effect].buzz||e==="mix")&&(n.effect=e),lt(n,`Drank the ${qr[e].name.toLowerCase()}.`),Vt(n,"drink:"+e),n.health<=0&&ma(n,"body"),!0):(lt(n,"Nothing to drink."),!1)}function jw(n){const e=n.buzz/100,t=n.effect?qr[n.effect]:qr.beer;let i=5.5*(1-e*.5*t.slow),s=Fi(n)?e*t.wobble:0;return n.items.blanket&&!n.items.goodBlanket&&(i*=.85),Aw(n,i,s,Fi(n))}function Kc(n,e){const t=n.draw.weather==="cold",i=n.draw.weather==="rain";if(n.sitting=!1,e==="street")n.health=St(n.health-20-(t?10:0)),n.money=Math.floor(n.money/2),lt(n,"He passed out on the street. Someone took his money.");else{const s=e==="bridge"||e==="underpass";let r=e==="bridge"?20:e==="underpass"?17:e==="alley"?12:15;t&&(r=s?8:2),i&&!s&&(r=4),n.items.goodBlanket?r+=20:n.items.blanket&&(r+=12),Gt(n,"sleepingBag")&&(r+=15),Gt(n,"bedroll")&&(r+=18),Gt(n,"tent")&&(r+=15),Ui(n,"snugCamp")&&(r+=15),Ui(n,"warmNight")&&(r+=t?18:10),i&&!s&&(Gt(n,"tent")||Gt(n,"bedroll")||Gt(n,"rainCover"))&&(r+=8),n.health=St(n.health+r),lt(n,t?"A cold night.":i&&!s?"A wet night.":e==="bridge"?"He slept under the bridge. The river talked all night.":"He slept."),Vt(n,"sleep:"+e)}if(Tw(n,e),n.withdrawal=St(n.withdrawal+15),n.hunger=St(n.hunger-10),n.health<=0){ma(n,"body");return}qw(n)}function qw(n){n.day++,n.time=0,n.draw=L0(n.seed,n.day),n.rng=dr(n.seed+"#rng"+n.day),n.buzz=0,n.effect=null,n.bottlesLeft=n.draw.bottleSpots.map(()=>!0),n.dumpsterUsed=!1,n.whimsyToday={},n.begTimer=0,n.usedToday=[],n.areasToday=[],n.goals=Td(n.seed,n.day),lt(n,`Day ${n.day}. ${G0(n.draw.weather)}`),Sw(n)}function G0(n){return n==="cold"?"Cold today.":n==="rain"?"Rain today.":"Mild today."}function Yw(n,e){if(n.dead)return;const t=n.day-1;n.time+=e,n.begTimer=Math.max(0,n.begTimer-e),Fi(n)?n.withdrawal=St(n.withdrawal-1*e):n.withdrawal=St(n.withdrawal+yt.withdrawalRate*(1+yt.withdrawalDayGrowth*t)*e),n.buzz=St(n.buzz-yt.buzzDecay*e),n.buzz<=0&&(n.effect=null);const i=n.sitting?yt.sitDrain:1;if(n.whimsy=St(n.whimsy-yt.whimsyDrain*(1+yt.whimsyDayGrowth*t)*i*e),n.hunger=St(n.hunger-yt.hungerRate*e),n.hunger<yt.hungerLow&&(n.health-=yt.hungerHurt*(n.hunger<=0?2.5:1)*e),n.sitting){n.health+=yt.sitHeal*e;const s=n.sitT;n.sitT+=e,s<yt.sitGoal&&n.sitT>=yt.sitGoal&&Vt(n,"sit")}if(n.withdrawal>=100&&(n.health-=yt.withdrawalHurt*e),n.draw.weather==="cold"&&(n.health-=yt.coldHurt*bw(n)*e),n.health=St(n.health),n.health<=0)return ma(n,"body");if(n.whimsy<=0)return ma(n,"gaveup");n.time>=yt.dayLength&&Kc(n,"street")}function Kw(n){n.dead||(n.sitting=!1,n.health=St(n.health-yt.carDamage),lt(n,"A car hit him."),n.health<=0&&ma(n,"car"))}function Zw(n){const e=n.items.shades?1:0;return{speed:3.6+.3*(n.day-1),sight:(18+3*(n.day-1))*(1-.3*e)*(Rw(n)?1.3:1),drunkRange:(4+1.5*(n.day-1))*(1-.4*e),drunkAt:Math.max(40,70-10*(n.day-1))}}jt.emit=Vt;const Zo={halfW:1.6},Ru=KM,Dr={go:9,slow:2,stop:7};function Jw(n){const e=Dr.go+Dr.slow+Dr.stop,t=(n%e+e)%e;return t<Dr.go?"go":t<Dr.go+Dr.slow?"slow":"stop"}const Fn={cruiseMin:6,cruiseMax:8.5,brake:12,accel:4,seeAhead:13,laneHalf:1.9,stopGap:2.6,followGap:5.6,hitLen:2.1,hitWide:1.2,honkAhead:11};function Qw(n,e,t,i){let s=n.cruise,r=!1;if(e&&Math.abs(e.z-n.z)<Fn.laneHalf){const o=(e.x-n.x)*n.dir;o>0&&o<Fn.seeAhead&&(s=Math.min(s,Math.max(0,(o-Fn.stopGap)*1.2)),o<Fn.honkAhead&&(r=!0))}if(i){const o=(i.x-n.x)*n.dir;o>0&&(s=Math.min(s,Math.max(0,(o-Fn.followGap)*1.5)))}if(t!=="go")for(const o of Ru){const c=(o-n.dir*(Zo.halfW+2.4)-n.x)*n.dir,l=c>=n.speed*n.speed/(2*Fn.brake)-.3;c>=-.2&&c<30&&(t==="stop"||l)&&(s=Math.min(s,Math.max(0,c*1.2)))}return{want:s,honk:r}}function eS(n,e,t){return e<n?Math.max(e,n-Fn.brake*t):Math.min(e,n+Fn.accel*t)}function tS(n,e){return Math.abs(n.x-e.x)<Fn.hitLen&&Math.abs(n.z-e.z)<Fn.hitWide}const Cu=3;function nS(n,e,t,i,s=Date.now()){if(n.dead)return null;const r=JSON.parse(JSON.stringify(n));return r.messages=[],r.copAlert=!1,JSON.stringify({v:Cu,s:r,px:e,pz:t,face:i,savedAt:s})}function V0(n){if(!n)return null;try{const e=JSON.parse(n);return!e||![1,2,Cu].includes(e.v)||!e.s||typeof e.s.seed!="string"||e.s.dead||![e.px,e.pz,e.s.health,e.s.time,e.s.day].every(t=>typeof t=="number"&&isFinite(t))?null:(e.s.messages=[],zw(e.s),e.v=Cu,e)}catch{return null}}function Op(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new cn;let l=0;for(let h=0;h<n.length;++h){const u=n[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const u=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Bp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=Bp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Bp(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new an(o,t,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function zp(n,e){if(e===M_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===_u||e===Dm){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===_u)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class iS extends Ro{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new yS(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new uS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new rS(t)}),this.register(function(t){return new bS(t)}),this.register(function(t){return new MS(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=na.extractUrlBase(e);o=na.resolveURL(l,this.path)}else o=na.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new c0(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===W0){try{o[Je.KHR_BINARY_GLTF]=new wS(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new US(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Je.KHR_MATERIALS_UNLIT:o[u]=new oS;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[u]=new SS(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[u]=new TS;break;case Je.KHR_MESH_QUANTIZATION:o[u]=new ES;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function sS(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class rS{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Te(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ln);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new h0(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new l0(h),l.distance=u;break;case"spot":l=new CM(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ji(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class oS{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return En}extendParams(e,t,i){const s=[];e.color=new Te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ln),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(s)}}class aS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class cS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(a,a)}return Promise.all(r)}}class lS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class hS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class uS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ln)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ft)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class dS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class fS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],Ln),Promise.all(r)}}class pS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class mS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],Ln),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ft)),Promise.all(r)}}class gS{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class _S{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class xS{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class yS{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class vS{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class bS{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class MS{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==ii.TRIANGLES&&l.mode!==ii.TRIANGLE_STRIP&&l.mode!==ii.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new Fe,m=new D,p=new Kn,y=new D(1,1,1),v=new xl(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&y.fromBufferAttribute(c.SCALE,x),v.setMatrixAt(x,_.compose(m,p,y));for(const x in c)if(x==="_COLOR_0"){const C=c[x];v.instanceColor=new vu(C.array,C.itemSize,C.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);Lt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const W0="glTF",$o=12,Hp={JSON:1313821514,BIN:5130562};class wS{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,$o),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==W0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-$o,r=new DataView(e,$o);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Hp.JSON){const l=new Uint8Array(e,$o+o,a);this.content=i.decode(l)}else if(c===Hp.BIN){const l=$o+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class SS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Iu[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Iu[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[e.attributes[h]],f=eo[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,Ln,d)})})}}class TS{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ES{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class X0 extends ba{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(i-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,y=1-m,v=p-d+u;for(let x=0;x!==a;x++){const C=o[_+x+a],A=o[_+x+c]*h,R=o[g+x+a],N=o[g+x]*h;r[x]=y*C+v*A+m*R+p*N}return r}}const AS=new Kn;class RS extends X0{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return AS.fromArray(r).normalize().toArray(r),r}}const ii={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},eo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gp={9728:Qt,9729:qn,9984:wm,9985:yc,9986:qo,9987:ts},Vp={33071:Rs,33648:Wc,10497:lo},fh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Iu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},CS={CUBICSPLINE:void 0,LINEAR:ua,STEP:ha},ph={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function IS(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new _d({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:os})),n.DefaultMaterial}function qs(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ji(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function LS(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function PS(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kS(n){let e;const t=n.extensions&&n.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+mh(t.attributes):e=n.indices+":"+mh(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+mh(n.targets[i]);return e}function mh(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Lu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function DS(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const NS=new Fe;class US{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new EM(this.options.manager):this.textureLoader=new PM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new c0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return qs(r,a,s),Ji(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(na.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=fh[s.type],a=eo[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new an(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=fh[s.type],l=eo[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let v=t.cache.get(y);v||(_=new l(a,p*f,s.count*f/h),v=new Qm(_,f/h),t.cache.add(y,v)),m=new fa(v,c,d%f/h,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new an(_,c,g);if(s.sparse!==void 0){const p=fh.SCALAR,y=eo[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,C=new y(o[1],v,s.sparse.count*p),A=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new an(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,N=C.length;R<N;R++){const S=C[R];if(m.setX(S,A[R*c]),c>=2&&m.setY(S,A[R*c+1]),c>=3&&m.setZ(S,A[R*c+2]),c>=4&&m.setW(S,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Gp[d.magFilter]||qn,h.minFilter=Gp[d.minFilter]||ts,h.wrapS=Vp[d.wrapS]||lo,h.wrapT=Vp[d.wrapT]||lo,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Qt&&h.minFilter!==qn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new $t(_);m.needsUpdate=!0,d(m)}),t.load(na.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Ji(u,o),u.userData.mimeType=o.mimeType||DS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new s0,hi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new i0,hi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return _d}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Je.KHR_MATERIALS_UNLIT]){const u=s[Je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ln),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Ft)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Di);const h=r.alphaMode||ph.OPAQUE;if(h===ph.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ph.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==En&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Le(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==En&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==En){const u=r.emissiveFactor;a.emissive=new Te().setRGB(u[0],u[1],u[2],Ln)}return r.emissiveTexture!==void 0&&o!==En&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Ji(u,r),t.associations.set(u,{materials:e}),r.extensions&&qs(s,u,r),u})}createUniqueName(e){const t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Wp(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=kS(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Wp(new cn,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?IS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const y=l[f];if(m.mode===ii.TRIANGLES||m.mode===ii.TRIANGLE_STRIP||m.mode===ii.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new lM(_,y):new qe(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ii.TRIANGLE_STRIP?p.geometry=zp(p.geometry,Dm):m.mode===ii.TRIANGLE_FAN&&(p.geometry=zp(p.geometry,_u));else if(m.mode===ii.LINES)p=new dM(_,y);else if(m.mode===ii.LINE_STRIP)p=new pd(_,y);else if(m.mode===ii.LINE_LOOP)p=new fM(_,y);else if(m.mode===ii.POINTS)p=new pM(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&PS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ji(p,r),m.extensions&&qs(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&qs(s,u[0],r),u[0];const d=new De;r.extensions&&qs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Sn(Um.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new ml(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ji(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Fe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new fd(a,c)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let y=0,v=d.length;y<v;y++){const x=d[y],C=f[y],A=g[y],R=_[y],N=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=i._createAnimationTracks(x,C,A,R,N);if(S)for(let b=0;b<S.length;b++)p.push(S[b])}return new Mu(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,NS)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new t0:l.length>1?h=new De:l.length===1?h=l[0]:h=new Lt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ji(h,r),r.extensions&&qs(i,h,r),r.matrix!==void 0){const u=new Fe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new De;i.name&&(r.name=s.createUniqueName(i.name)),Ji(r,i),i.extensions&&qs(t,r,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof hi||d instanceof $t)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];Ms[r.path]===Ms.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ms[r.path]){case Ms.weights:l=mo;break;case Ms.rotation:l=go;break;case Ms.position:case Ms.scale:l=_o;break;default:switch(i.itemSize){case 1:l=mo;break;case 2:case 3:default:l=_o;break}break}const h=s.interpolation!==void 0?CS[s.interpolation]:ua,u=this._getArrayFromAccessor(i);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Ms[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Lu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof go?RS:X0;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function FS(n,e,t){const i=e.attributes,s=new Ii;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){const h=Lu(eo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Lu(eo[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new Bi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Wp(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(const o in i){const a=Iu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return nt.workingColorSpace!==Ln&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Ji(n,e),FS(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?LS(n,e.targets,t):n})}function OS(n){const e=new Map,t=new Map,i=n.clone();return $0(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function $0(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)$0(n.children[i],e.children[i],t)}const Xp=new Map;function ne(n,e=0,t=1){const i=n+":"+e+":"+t;let s=Xp.get(i);return s||(s=new Qn({color:n,emissive:e,emissiveIntensity:t}),Xp.set(i,s)),s}const Tl=[];function j0(n,e){const t=new Qn({color:n,emissive:e,emissiveIntensity:0});return Tl.push(t),t}function J(n,e,t,i,s=0,r=0,o=0,a=!0){const c=new qe(new ui(n,e,t),i);return c.position.set(s,r,o),c.castShadow=a,c.receiveShadow=!0,c}function Zc(n,e,t,i,s=8){const r=new qe(new Si(n,e,t,s),i);return r.castShadow=!0,r.receiveShadow=!0,r}const BS={"car-sedan":{file:"car-kit/sedan.glb",fit:3.8,axis:"len",rotY:Math.PI/2},"car-taxi":{file:"car-kit/taxi.glb",fit:3.9,axis:"len",rotY:Math.PI/2},"car-van":{file:"car-kit/van.glb",fit:4.1,axis:"len",rotY:Math.PI/2},"car-suv":{file:"car-kit/suv.glb",fit:3.9,axis:"len",rotY:Math.PI/2},"bld-a":{file:"city-kit-commercial/building-a.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-c":{file:"city-kit-commercial/building-c.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-f":{file:"city-kit-commercial/building-f.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-h":{file:"city-kit-commercial/building-h.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-j":{file:"city-kit-commercial/building-j.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-d":{file:"city-kit-commercial/building-d.glb",fit:1,axis:"raw",rotY:Math.PI},"bld-k":{file:"city-kit-commercial/building-k.glb",fit:1,axis:"raw",rotY:Math.PI},"tower-a":{file:"city-kit-commercial/building-skyscraper-a.glb",fit:1,axis:"raw",rotY:Math.PI},"tower-b":{file:"city-kit-commercial/building-skyscraper-b.glb",fit:1,axis:"raw",rotY:Math.PI},pillar:{file:"city-kit-roads/bridge-pillar.glb",fit:3,axis:"h"},dumpster:{file:"city-kit-roads/dumpster.glb",fit:2.4,axis:"len"},lamp:{file:"city-kit-roads/light-square.glb",fit:4.4,axis:"h"},man:{file:"mini-characters/character-male-e.glb",fit:1.75,axis:"h",rotY:Math.PI},cop:{file:"mini-characters/character-male-b.glb",fit:1.9,axis:"h",rotY:Math.PI},"ped-0":{file:"mini-characters/character-female-b.glb",fit:1.7,axis:"h",rotY:Math.PI},"ped-1":{file:"mini-characters/character-male-c.glb",fit:1.75,axis:"h",rotY:Math.PI},"ped-2":{file:"mini-characters/character-female-d.glb",fit:1.7,axis:"h",rotY:Math.PI}},kd=new Map,Dd=[],zS=n=>kd.has(n);async function HS(n=8e3){const e=new iS,t=Promise.all(Object.entries(BS).map(async([i,s])=>{try{const r=await e.loadAsync("models/"+s.file),o=r.scene;let a=!1;o.traverse(_=>{const m=_;m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0),_.isSkinnedMesh&&(a=!0,_.frustumCulled=!1)});const c=new De;c.add(o),c.rotation.y=s.rotY??0;const l=new De;l.add(c),l.updateMatrixWorld(!0);const h=new Ii().setFromObject(l),u=h.getSize(new D),d=s.axis==="len"?Math.max(u.x,u.z):s.axis==="h"?u.y:0,f=d>0?s.fit/d:1;c.scale.setScalar(f),l.updateMatrixWorld(!0),h.setFromObject(l);const g=h.getCenter(new D);c.position.set(-g.x,-h.min.y,-g.z),kd.set(i,{obj:l,clips:r.animations,size:h.getSize(new D),skinned:a}),Dd.push(i)}catch{}}));await Promise.race([t,new Promise(i=>setTimeout(i,n))])}function Co(n){const e=kd.get(n);return e?{obj:e.skinned?OS(e.obj):e.obj.clone(),clips:e.clips,size:e.size}:null}function Io(n,e){const t=new De,i=Co(n);return t.add(i?i.obj:e),t}function sa(n,e,t={}){var m;const i=t.skin??14262906,s=new De,r=(p,y,v,x,C)=>{const A=new De;return A.position.set(x,C,0),A.add(J(p,y,p,v,0,-y/2,0)),s.add(A),A},o=r(.24,.8,ne(e),-.15,.82),a=r(.24,.8,ne(e),.15,.82);s.add(J(.62,.72,.38,ne(n),0,1.18,0));const c=r(.17,.66,ne(n),-.41,1.5),l=r(.17,.66,ne(n),.41,1.5),h=new De;h.position.y=1.78,h.add(J(.42,.42,.42,ne(i),0,0,0)),h.add(J(.3,.07,.04,ne(2759188),0,.05,-.215,!1)),t.hair!==void 0&&h.add(J(.46,.14,.46,ne(t.hair),0,.22,.02)),t.hat!==void 0&&h.add(J(.48,.2,.48,ne(t.hat),0,.27,0)),s.add(h);const u=new De,d=t.model?Co(t.model):null;let f=null;const g={};if(d){u.add(d.obj),t.tint!==void 0&&d.obj.traverse(p=>{const y=p;if(y.isMesh){const v=y.material.clone();v.color.set(t.tint),y.material=v}}),f=new XM(d.obj);for(const p of d.clips)g[p.name]=f.clipAction(p);(m=g.idle)==null||m.play()}else u.add(s);const _=new De;return _.add(u),{g:_,body:u,legL:o,legR:a,armL:c,armR:l,head:h,phase:Math.random()*6,mixer:f,acts:g,cur:"idle",oneShot:0,model:!!d}}function q0(n,e,t=.2){var s;if(n.cur===e||!n.acts[e])return;const i=n.acts[e];i.reset().play(),(s=n.acts[n.cur])==null||s.crossFadeTo(i,t,!1),n.cur=e}function is(n,e,t=!1){const i=n.acts[e];i&&(i.setLoop(km,1),i.clampWhenFinished=t,q0(n,e,.1),n.oneShot=t?999:i.getClip().duration*.9)}function yo(n,e,t){const i=Math.floor(n.phase/Math.PI);if(e>=.2&&(n.phase+=t*(4+e*1.6)),n.mixer)return n.oneShot>0?n.oneShot-=t:(q0(n,e>=.2?e>4.5?"sprint":"walk":"idle"),n.acts.walk&&(n.acts.walk.timeScale=Math.max(.6,e/1.9)),n.acts.sprint&&(n.acts.sprint.timeScale=Math.max(.6,e/5))),n.mixer.update(t),e>=.2&&Math.floor(n.phase/Math.PI)!==i;if(e<.2)return n.legL.rotation.x*=.8,n.legR.rotation.x*=.8,n.armL.rotation.x*=.8,n.armR.rotation.x*=.8,n.body.position.y*=.8,!1;const s=Math.sin(n.phase)*Math.min(.75,.25+e*.12);return n.legL.rotation.x=s,n.legR.rotation.x=-s,n.armL.rotation.x=-s*.8,n.armR.rotation.x=s*.8,n.body.position.y=Math.abs(Math.sin(n.phase))*.11,Math.floor(n.phase/Math.PI)!==i}const Y0=new Si(.36,.36,.28,10);Y0.rotateX(Math.PI/2);function GS(n,e=0){const t=new De,i=ne(n),s=ne(2371644),r=e===2,o=r?4:3.6;t.add(J(o,.72,1.8,i,0,.62,0)),r?t.add(J(2.9,1,1.72,i,-.4,1.45,0)):t.add(J(e===1?2.4:1.9,.62,1.62,i,e===1?-.3:-.25,1.28,0));const a=r?2.92:e===1?2.42:1.92;t.add(J(a,.34,1.66,s,r?-.4:e===1?-.3:-.25,r?1.55:1.3,0,!1)),t.add(J(.06,.18,.4,ne(16773808,16773808,.9),o/2+.01,.72,.6,!1)),t.add(J(.06,.18,.4,ne(16773808,16773808,.9),o/2+.01,.72,-.6,!1));const c=new Qn({color:7344144,emissive:16719904,emissiveIntensity:.15});t.add(J(.06,.18,.36,c,-o/2-.01,.75,.62,!1)),t.add(J(.06,.18,.36,c,-o/2-.01,.75,-.62,!1));const l=[],h=ne(1710618);for(const m of[o/2-.8,-o/2+.8])for(const p of[.86,-.86]){const y=new qe(Y0,h);y.position.set(m,.36,p),y.castShadow=!0,t.add(y),l.push(y)}const u=["car-sedan","car-taxi","car-van","car-suv"][e%4],d=Co(u);if(!d)return{g:Io("none",t),wheels:l,brake:c,spin:"z",spinSign:-1};const f=new De;f.add(d.obj);const g=d.size.x/2;f.add(J(.06,.16,.34,c,-g-.02,.8,.55,!1)),f.add(J(.06,.16,.34,c,-g-.02,.8,-.55,!1));const _=[];return d.obj.traverse(m=>{m.name.startsWith("wheel")&&_.push(m)}),{g:f,wheels:_,brake:c,spin:"x",spinSign:1}}function Ys(n,e,t=1){const i=new De,s=Zc(.18,.26,1.6,ne(6965806),6);s.position.y=.8,i.add(s);const r=ne(4165434),o=new qe(new Yc(1.4,0),r);o.position.y=2.6;const a=new qe(new Yc(1,0),ne(5416517));a.position.set(.3,3.5,.2);for(const l of[o,a])l.castShadow=!0,l.receiveShadow=!0,i.add(l);const c=Io("none",i);return c.position.set(n,0,e),c.scale.setScalar(t),c.rotation.y=n*1.3,c}const K0=new En({color:16760944,transparent:!0,opacity:0,blending:Vc,depthWrite:!1}),VS=K0;function $p(n,e,t){const i=new De,s=Zc(.08,.11,4.2,ne(3027512),6);s.position.y=2.1,i.add(s),i.add(J(.12,.12,1.2,ne(3027512),0,4.15,t*.55));const r=j0(16773312,16765056);i.add(J(.4,.16,.4,r,0,4,t*1.1,!1));const o=Co("lamp");let a;o?(a=new De,o.obj.rotation.y=t>0?Math.PI:0,a.add(o.obj),a.add(J(.36,.1,.36,r,0,o.size.y-.32,t*(o.size.z-.25),!1))):a=Io("none",i),a.position.set(n,0,e);const c=new qe(new cr(2.6,16),K0);return c.rotation.x=-Math.PI/2,c.position.set(n,.23,e+t*1.1),{g:a,pool:c}}function WS(){const n=new De;n.add(J(2.4,1.3,1.4,ne(3111482),0,.75,0));const e=J(2.5,.12,1.5,ne(2317356),0,1.45,.08);e.rotation.x=-.12,n.add(e);for(const t of[-1,1])n.add(J(.12,.2,.12,ne(2236962),t*1,.1,0));return Io("dumpster",n)}function XS(){const n=new De,e=ne(10118192);n.add(J(3,.12,.8,e,0,.5,0)),n.add(J(3,.55,.1,e,0,.9,-.38));for(const t of[-1.3,1.3])n.add(J(.1,.5,.7,ne(2763306),t,.25,0));return Io("none",n)}function Z0(){const n=new De,e=new Qn({color:4182112,emissive:1731114,emissiveIntensity:.6}),t=Zc(.14,.14,.42,e,6);t.position.y=.21;const i=Zc(.05,.08,.18,e,6);return i.position.y=.5,n.add(t,i),n.rotation.z=Math.PI/2.4,n}function $S(){const n=new De,e=ne(14715424);n.add(J(.3,.26,.62,e,0,.3,0)),n.add(J(.26,.24,.24,e,0,.48,-.36)),n.add(J(.07,.1,.05,e,-.08,.64,-.38)),n.add(J(.07,.1,.05,e,.08,.64,-.38));const t=J(.07,.07,.45,e,0,.45,.48);t.rotation.x=.7,n.add(t);for(const i of[-.1,.1])for(const s of[-.22,.22])n.add(J(.07,.2,.07,e,i,.1,s));return Io("none",n)}const jp=j0(3820134,16762730),jS=new ui(1,1,.08),Ac=[];function Pu(n,e,t,i,s){Ac.push(new Fe().compose(new D(n,e,t),new Kn,new D(i,s,1)))}function qS(){const n=new xl(jS,jp,Ac.length);Ac.forEach((i,s)=>n.setMatrixAt(s,i));const e=new Te(1,1,1),t=new Te(.97,.97,.97);return Ac.forEach((i,s)=>n.setColorAt(s,Math.random()<.55?e:t)),jp.onBeforeCompile=i=>{i.fragmentShader=i.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_COLOR
 totalEmissiveRadiance *= step(0.985, vColor.r);
#endif`)},n}function YS(n,e,t){const i=document.createElement("canvas");i.width=256,i.height=64;const s=i.getContext("2d");s.fillStyle=e,s.fillRect(0,0,256,64),s.fillStyle=t,s.font="bold 40px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(n,128,34);const r=new va(i);return r.colorSpace=Ft,r}const J0=["bld-a","bld-c","bld-f","bld-h","bld-j","bld-d","bld-k"],KS=["tower-a","tower-b"];function ZS(n,e,t,i,s=J0){const r=s.filter(zS);if(!r.length)return null;const o=new De,a=e-n,c=Math.max(1,Math.round(a/6.5));for(let l=0;l<c;l++){const h=Co(r[(i+l*2)%r.length]),u=a/c,d=u/h.size.x;h.obj.scale.setScalar(d),h.obj.position.set(n+(l+.5)*u,0,t+h.size.z*d/2),o.add(h.obj)}return o}function _i(n,e,t,i,s,r,o=0,a="kit"){const c=a==="plain"?null:ZS(n,e,t,o,a==="tower"?KS:J0),l=new De,h=e-n;if(c)return l.add(c),l.add(J(h*.96,s*.55,(i-t)*.5,ne(r),(n+e)/2,s*.275,i-(i-t)*.25)),l.userData.kit=!0,l;l.add(J(h,s,i-t,ne(r),(n+e)/2,s/2,(t+i)/2)),l.add(J(h+.2,.3,i-t+.2,ne(5263450),(n+e)/2,s+.15,(t+i)/2));const u=Math.max(1,Math.floor(h/2.6));for(let d=3.4;d<s-1;d+=2.8)for(let f=0;f<u;f++)Pu(n+(f+.5)*(h/u),d+.6,t-.03,1.1,1.3);return l}function Nr(n,e,t,i,s,r,o,a,c,l,h=0,u="kit"){const d=_i(n,e,t,i,s,r,h,u),f=e-n,g=(n+e)/2;d.userData.kit||(Pu(g-f*.22,1.35,t-.03,f*.38,1.6),Pu(g+f*.28,1.35,t-.03,f*.26,1.6),d.add(J(1.1,2.1,.1,ne(3810328),g+f*.02,1.05,t-.04,!1)));const _=Math.max(4,Math.round(f/.9)),m=new De;for(let x=0;x<_;x++)m.add(J(f/_+.01,.08,1.6,ne(x%2?o:a),n+(x+.5)*(f/_),0,0,!0));m.position.set(0,2.75,t-.8),m.rotation.x=-.32,d.add(m);const p=YS(c,l,"#fff"),y=new Qn({map:p,emissive:16777215,emissiveIntensity:0,emissiveMap:p});Tl.push(y);const v=new qe(new ls(Math.min(f*.7,6),1.2),y);return v.position.set(g,3.55,t-.25),v.rotation.y=Math.PI,d.add(v),d}function gh(n,e){const t=document.createElement("canvas");t.width=256,t.height=64;const i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,256,64),i.fillStyle="#fff",i.font="bold 30px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,128,34);const s=new dd(new _l({map:new va(t)}));return s.scale.set(3,.75,1),s}function qp(n){const e=new De,t=ne(1710618);for(const s of[-.55,.55]){const r=new qe(new gd(.36,.05,6,16),t);r.rotation.y=Math.PI/2,r.position.set(0,.38,s),e.add(r)}const i=ne(n);return e.add(J(.06,.06,1.1,i,0,.62,0)),e.add(J(.06,.5,.06,i,0,.6,-.25)),e.add(J(.2,.06,.3,ne(2236962),0,.88,-.25)),e.add(J(.55,.05,.05,ne(3355443),0,.98,.5)),e}function JS(){const n=new De;n.add(J(.32,.05,1,ne(14174762),0,.12,0));for(const e of[-.35,.35])n.add(J(.3,.08,.08,ne(15658734),0,.05,e));return n}class QS{constructor(e,t){this.ground=new De,this.groundKey="",this.rackBikes=[],this.parked={},this.under={},e.add(this.ground);const i=Qr.pawn,s=gh("PAWN","#7a2a8a");s.position.set(i.x,3.6,i.z+1),e.add(s);const r=Qr.books,o=new De;o.add(J(1.6,.7,.8,ne(6965802),0,.6,0)),[13126202,3828424,15255626,4892778,9063112].forEach((u,d)=>o.add(J(.22,.32,.6,ne(u),-.6+d*.3,1.1,0))),o.position.set(r.x,0,r.z+1.2),e.add(o);const c=gh("USED BOOKS","#3a5a3a");c.position.set(r.x,2.2,r.z+1.2),e.add(c);const l=Qr.library;e.add(J(.12,1.1,.12,ne(5913114),l.x,.55,l.z)),e.add(J(.7,.6,.5,ne(3832520),l.x,1.35,l.z));const h=gh("FREE BOOKS","#3a7ac8");h.position.set(l.x,2.2,l.z),h.scale.set(2,.5,1),e.add(h),Rd.forEach((u,d)=>{e.add(J(1.6,.06,.06,ne(8947848),u.x,.7,u.z));const f=qp([2788056,14170682,3848282,15249450][d%4]);f.rotation.y=Math.PI/2,f.position.set(u.x,0,u.z),e.add(f),this.rackBikes.push(f)});for(const u of["skateboard","scooter","bike"]){const d=()=>u==="bike"?qp(2788056):u==="skateboard"?JS():(()=>{const f=new De;return f.add(J(.28,.08,1.1,ne(2276266),0,.1,0)),f.add(J(.06,1,.06,ne(3355443),0,.6,-.5)),f})();this.parked[u]=d(),this.parked[u].visible=!1,e.add(this.parked[u]),u!=="scooter"&&(this.under[u]=d(),this.under[u].visible=!1,t.add(this.under[u]))}}update(e,t){const i=e.own,s=i.ground.map(r=>r.id+r.x.toFixed(1)+r.z.toFixed(1)).join("|");if(s!==this.groundKey){this.groundKey=s,this.ground.clear();for(const r of i.ground){const o=_0[Ue[r.id].rarity],a=J(.4,.3,.4,ne(o,o,.6),r.x,.2,r.z),c=new qe(new cr(.75,20),new En({color:o,transparent:!0,opacity:.45,depthWrite:!1,blending:Vc}));c.rotation.x=-Math.PI/2,c.position.set(r.x,.03,r.z),this.ground.add(a,c)}}this.ground.children.forEach((r,o)=>{o%2===0?(r.position.y=.25+Math.sin(t*3+o)*.08,r.rotation.y=t):r.scale.setScalar(1+Math.sin(t*4+o)*.15)}),this.rackBikes.forEach((r,o)=>r.visible=E0(e,o));for(const r of Object.keys(this.parked)){const o=!!i.ride&&i.ride.id===r;this.parked[r].visible=o&&!i.riding&&!!i.parked,this.parked[r].visible&&this.parked[r].position.set(i.parked.x,0,i.parked.z),this.under[r]&&(this.under[r].visible=o&&i.riding)}}}const Jc=[{id:"sign",out:"sign",need:["cardboard","marker"]},{id:"tent",out:"tent",need:["tarp","pole","pole"]},{id:"stove",out:"stove",need:["can","candle"],book:"cook"},{id:"cart",out:"cart",need:["crate","trolley"]},{id:"skateboard",out:"skateboard",need:["plank","wheel"]},{id:"necklace",out:"necklace",need:["caps","string"]},{id:"rainCover",out:"rainCover",need:["umbrella","tape"]},{id:"chime",out:"chime",need:["can","string"]},{id:"bedroll",out:"bedroll",need:["blanket","tarp"]},{id:"hotStew",out:"hotStew",need:["beans","bread"],tool:"stove",book:"cook"}],Yp=["He tapes it together. It falls apart. He tapes it again. Art.","That is now a worse version of two things.","He stares at it. It stares back. Nothing happens.","A pigeon watches. The pigeon is not impressed.","It is a hat now? No. It is nothing.","He invents something. Nobody, including him, knows what.","Close. Very close. Also, completely wrong."];function Q0(n){return Jc.filter(e=>e.id==="sign"||e.book&&vn(n,e.book)||n.own.known.includes(e.id))}const _h=n=>[...n].sort().join("+");function eT(n){const e=_h(n);return Jc.find(t=>_h(t.need)===e||t.tool&&_h([...t.need,t.tool])===e)??null}function eg(n,e){const t=[...n.own.bag,...Yn.map(s=>n.own.gear[s]).filter(s=>!!s)],i=[];for(const s of e){const r=t.findIndex(o=>o.id===s&&!i.includes(o));if(r<0)return null;i.push(t[r])}return i}function tg(n,e,t=0,i=0){if(n.dead||e.length<2)return{ok:!1,line:"He needs at least two things."};const s=eg(n,e);if(!s)return{ok:!1,line:"He doesn't have all that."};const r=eT(e);if(!r){const h=Yp[Math.floor(on(n)*Yp.length)];return n.messages.push(h),{ok:!1,line:h}}const o=r.tool?Ed(n,r.tool):void 0;if(r.tool&&!o){const h=`So close. He needs a ${Ue[r.tool].name.toLowerCase()} for that.`;return n.messages.push(h),{ok:!1,line:h}}const a=n.own;for(const h of s){if(h===o)continue;const u=a.bag.indexOf(h);u>=0&&a.bag.splice(u,1);for(const d of Yn)a.gear[d]===h&&delete a.gear[d]}o&&Ni(n,o);const c=!Q0(n).includes(r);a.known.includes(r.id)||a.known.push(r.id);const l=r.out==="sign"?{text:Eu[Math.floor(on(n)*Eu.length)].text}:{};return n.messages.push(`Made: ${Ue[r.out].name}${"text"in l?` ("${l.text}")`:""}.${c?" New recipe!":""}`),zt(n,r.out,t,i,l,!0),jt.emit(n,"craft"),Cn(n),{ok:!0,out:r.out,recipe:r}}const tT=(n,e)=>!!eg(n,e.need)&&(!e.tool||Gt(n,e.tool)),nT=n=>!!n&&/^(bag|craft|pawn|books|steal:\d+)$/.test(n),iT=n=>"#"+n.toString(16).padStart(6,"0"),Br=n=>iT(_0[Ue[n].rarity]);let dn=null,ni=[],hc="";const sT=`
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
#bagBtn svg{width:22px;height:22px}`;function rT(n){var s;const e=document.createElement("style");e.textContent=sT,document.head.appendChild(e);const t=document.createElement("div");t.id="combo",document.body.appendChild(t);const i=document.createElement("div");i.className="tbtn",i.id="bagBtn",i.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M6 8h12l-1 13H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',i.addEventListener("pointerdown",r=>{r.preventDefault(),n()}),(s=document.getElementById("pauseBtn"))==null||s.before(i)}function oT(n){const e=document.getElementById("combo");if(!e)return;const[t,i]=n.replace("Combo! ","").split(": ");e.innerHTML=`COMBO! ${t}<small>${i??""}</small>`,e.classList.remove("go"),e.offsetWidth,e.classList.add("go")}function Mn(n,e){n.addEventListener("pointerdown",t=>{t.preventDefault(),e()})}function Kp(n,e,t){if(!n)return`<div class="ocell"><span class="sl">${e}</span></div>`;const i=Ue[n.id],s=Math.max(0,Math.min(1,n.dur/i.dur));return`<div class="ocell${t?" on":""}" style="border-color:${Br(n.id)}"><span class="sl">${e}</span>${i.name}${n.wet?" (wet)":""}<span class="du"><i style="width:${s*100}%;background:${s<.3?"#f66":"#9f9"}"></i></span></div>`}function aT(n,e,t,i){const s=e==="bag"||e==="craft"?`<div class="otabs"><div class="otab${e==="bag"?" on":""}" data-k="bag">Bag</div><div class="otab${e==="craft"?" on":""}" data-k="craft">Craft</div></div>`:"",r=e==="bag"?`Bag ${t.own.bag.length}/${xo(t)}`:e==="craft"?"Craft":e==="pawn"?"Pawn shop":e==="books"?"Used books":"The lock";n.innerHTML=`<div class="shead"><b>${r}</b><span class="smoney">$${t.money}</span></div>${s}<div class="slist"></div><button class="sclose">Done</button>`;const o=n.querySelector(".slist");Mn(n.querySelector(".sclose"),()=>{dn=null,ni=[],hc="",i.close()}),n.querySelectorAll(".otab").forEach(f=>Mn(f,()=>i.open(f.dataset.k)));const a=(f,g="pop")=>{i.sound(f?g:"nope"),i.flush(),i.rerender()},{x:c,z:l}=i.pos();if(e==="bag"){const f=t.own,g=Yn.map(C=>Kp(f.gear[C],C,dn===C)).join(""),_=Array.from({length:xo(t)},(C,A)=>Kp(f.bag[A],"",dn===A)).join(""),m=typeof dn=="number"?f.bag[dn]:dn?f.gear[dn]:void 0;let p='<div class="odet" style="opacity:.6">Tap a thing.</div>';if(m){const C=Ue[m.id];p=`<div class="odet"><b style="color:${Br(m.id)}">${C.name}</b> <span style="opacity:.6">${C.rarity}</span><br>${C.desc}<br><i>${C.effect}</i>${m.text?`<br>Says: "${m.text}"`:""}<br><span style="opacity:.6">Wear ${m.dur}/${C.dur}</span>
        <div class="obtns">${typeof dn=="number"?`<button data-a="use">${C.slot?"Equip":C.book?"Read":"Use"}</button>`:'<button data-a="off">Take off</button>'}<button data-a="drop">Drop</button></div></div>`}const y=f.ride?`<div class="orec">Ride: <b>${Ue[f.ride.id].name}</b> (${f.riding?"riding":f.locked?"parked, locked":"parked, unlocked"}) wear ${f.ride.dur}/${Ue[f.ride.id].dur}</div>`:"",v=f.books.length?f.books.map(C=>`<span class="otag">${Ue[lr[C]].name}</span>`).join(""):'<span style="opacity:.5">None read yet.</span>',x=f.combos.length?f.combos.map(C=>{const A=y0.find(R=>R.id===C);return`<span class="otag">${A.name}: ${A.text}</span>`}).join(""):'<span style="opacity:.5">None yet. Some pairs do more together.</span>';o.innerHTML=`<div class="ohead">Worn</div><div class="ogrid gear">${g}</div><div class="ohead">Bag</div><div class="ogrid bag">${_}</div>${p}${y}<div class="ohead">Books read</div><div>${v}</div><div class="ohead">Combos</div><div>${x}</div>`,o.querySelectorAll(".gear .ocell").forEach((C,A)=>Mn(C,()=>{dn=f.gear[Yn[A]]?Yn[A]:null,i.rerender()})),o.querySelectorAll(".bag .ocell").forEach((C,A)=>Mn(C,()=>{dn=f.bag[A]?A:null,i.rerender()})),o.querySelector("[data-a=use]")&&Mn(o.querySelector("[data-a=use]"),()=>{const C=w0(t,dn,i.pedNear());dn=null,a(C,"sparkle")}),o.querySelector("[data-a=off]")&&Mn(o.querySelector("[data-a=off]"),()=>{const C=mw(t,dn);dn=null,a(C)}),o.querySelector("[data-a=drop]")&&Mn(o.querySelector("[data-a=drop]"),()=>{const C=gw(t,dn,c,l);dn=null,a(C)});return}if(e==="craft"){const f=[...t.own.bag.map(v=>v.id),...Yn.map(v=>{var x;return(x=t.own.gear[v])==null?void 0:x.id}).filter(v=>!!v)],g=[...f];for(const v of ni){const x=g.indexOf(v);x>=0?g.splice(x,1):ni=[]}const _=f.map((v,x)=>`<span class="ochip${ni.filter(C=>C===v).length>f.slice(0,x).filter(C=>C===v).length?" on":""}" data-i="${x}" style="border-color:${Br(v)}">${Ue[v].name}</span>`).join(""),m=Q0(t),p=m.map(v=>`<div class="orec${tT(t,v)?"":" no"}" data-r="${v.id}">${v.need.map(x=>Ue[x].name).join(" + ")}${v.tool?` (with ${Ue[v.tool].name.toLowerCase()})`:""} = <b>${Ue[v.out].name}</b></div>`).join(""),y=Jc.length-m.length;o.innerHTML=`<div class="ohead">Pick things to combine</div><div>${_||'<span style="opacity:.5">Nothing to work with. Dig in the trash.</span>'}</div>
      <button class="obtn" data-a="make">Make it (${ni.length})</button>${hc?`<div class="odet">${hc}</div>`:""}
      <div class="ohead">Recipes he knows</div>${p}<div class="orec no">${y} more to find: books, or trying.</div>`,o.querySelectorAll(".ochip").forEach(v=>Mn(v,()=>{const x=f[Number(v.dataset.i)],C=ni.filter(A=>A===x).length;v.classList.contains("on")?ni.splice(ni.lastIndexOf(x),1):C<f.filter(A=>A===x).length&&ni.push(x),i.rerender()})),o.querySelectorAll(".orec[data-r]").forEach(v=>Mn(v,()=>{ni=[...Jc.find(C=>C.id===v.dataset.r).need],i.rerender()})),Mn(o.querySelector("[data-a=make]"),()=>{const v=tg(t,ni,c,l);hc=v.ok?`Made: <b>${Ue[v.out].name}</b>`:v.line,ni=[],a(v.ok,"sparkle")});return}if(e==="pawn"){const f=t.own.bag.map((_,m)=>`<div class="srow" data-s="${m}"><div><div class="sname" style="color:${Br(_.id)}">${Ue[_.id].name}</div><div class="snote">Sell</div></div><div class="sbuy">+$${Math.round(Ue[_.id].value*(_.wet?.5:1)*Math.max(.4,_.dur/Ue[_.id].dur))}</div></div>`).join(""),g=C0.map((_,m)=>`<div class="srow${t.money<_.price?" poor":""}" data-b="${m}"><div><div class="sname" style="color:${Br(_.id)}">${Ue[_.id].name}</div><div class="snote">${Ue[_.id].effect}</div></div><div class="sbuy">$${_.price}</div></div>`).join("");o.innerHTML=`<div class="sgreet">"Everything has a price. Even that."</div><div class="ohead">Sell from the bag</div>${f||'<div style="opacity:.5">Nothing in the bag.</div>'}<div class="ohead">Buy</div>${g}`,o.querySelectorAll("[data-s]").forEach(_=>Mn(_,()=>a(I0(t,Number(_.dataset.s)),"clink"))),o.querySelectorAll("[data-b]").forEach(_=>Mn(_,()=>a(Uw(t,Number(_.dataset.b),c,l))));return}if(e==="books"){o.innerHTML='<div class="sgreet">"Fifty cents a page. Kidding. Mostly."</div>'+Cd.map((f,g)=>{const _=lr[f.book];return`<div class="srow"><div><div class="sname" style="color:${Br(_)}">${Ue[_].name}${t.own.books.includes(f.book)?" (read)":""}</div><div class="snote">${Ue[_].effect}</div></div><div style="display:flex;gap:6px"><button class="obtn" data-b="${g}">$${f.price}</button><button class="obtn" data-t="${g}" style="background:#c44;color:#fff">Steal</button></div></div>`}).join(""),o.querySelectorAll("[data-b]").forEach(f=>Mn(f,()=>a(Fw(t,Number(f.dataset.b),c,l),"sparkle"))),o.querySelectorAll("[data-t]").forEach(f=>Mn(f,()=>a(Ow(t,Number(f.dataset.t),c,l),"sparkle")));return}const h=Number(e.slice(6)),d=(1-A0(t))/2;o.innerHTML=`<div class="sgreet">Tap when the marker is in the green. Quick, people are walking by.</div>
    <div class="obar"><div class="zone" style="left:${(.5-d)*100}%;width:${d*200}%"></div><div class="mk"></div></div><button class="obtn" data-a="pick">Now!</button>`,Mn(o.querySelector("[data-a=pick]"),()=>{const f=o.querySelector(".obar").getBoundingClientRect(),g=o.querySelector(".mk").getBoundingClientRect(),_=(g.left+g.width/2-f.left)/f.width,m=R0(t,h,1-Math.abs(_-.5)*2);i.sound(m==="got"?"sparkle":"nope"),i.flush(),i.close()})}let It=null,rs=null,ku=null,El=!1;const Rc=[];function cT(){try{if(!It){const n=window.AudioContext||window.webkitAudioContext;if(!n)return;It=new n,rs=It.createGain(),rs.gain.value=El?0:.55,rs.connect(It.destination),ku=It.createBuffer(1,It.sampleRate,It.sampleRate);const e=ku.getChannelData(0);for(let i=0;i<e.length;i++)e[i]=Math.random()*2-1;const t=It.createBufferSource();t.buffer=It.createBuffer(1,1,22050),t.connect(It.destination),t.start(0)}It.state==="suspended"&&It.resume()}catch{}}function lT(){try{It&&It.state==="running"&&It.suspend()}catch{}}function ng(n){El=n,rs&&(rs.gain.value=n?0:.55)}const uc=()=>El,hT=()=>It?It.state:"none";function Zt(n,e,t,i,s,r,o){const a=It,c=a.createOscillator(),l=a.createGain();return c.type=n,c.frequency.setValueAtTime(e,i),t!==e&&c.frequency.exponentialRampToValueAtTime(Math.max(1,t),i+s),l.gain.setValueAtTime(1e-4,i),l.gain.exponentialRampToValueAtTime(r,i+Math.min(.012,s/4)),l.gain.exponentialRampToValueAtTime(1e-4,i+s),c.connect(l).connect(o??rs),c.start(i),c.stop(i+s+.02),c}function xh(n,e,t,i,s,r=1){const o=It,a=o.createBufferSource();a.buffer=ku;const c=o.createBiquadFilter();c.type=i,c.frequency.value=s,c.Q.value=r;const l=o.createGain();l.gain.setValueAtTime(t,n),l.gain.exponentialRampToValueAtTime(1e-4,n+e),a.connect(c).connect(l).connect(rs),a.start(n,Math.random()*.5),a.stop(n+e+.02)}function ke(n,e={}){if(Rc.push({name:n,t:performance.now()}),Rc.length>60&&Rc.shift(),!It||!rs||It.state!=="running"||El)return;const t=It.currentTime+.005,i=e.pitch??1,s=e.vol??1;switch(n){case"step":xh(t,.05,.12*s,"bandpass",900*i,2),Zt("sine",140*i,90*i,t,.05,.08*s);break;case"coin":Zt("square",988,988,t,.07,.12*s),Zt("square",1319,1319,t+.07,.22,.12*s);break;case"clink":Zt("sine",2650*i,2600*i,t,.35,.16*s),Zt("sine",3910*i,3900*i,t,.22,.08*s),Zt("sine",2650*i*1.06,2600*i,t+.09,.25,.1*s);break;case"gulp":for(let r=0;r<3;r++)Zt("sine",320-r*30,120,t+r*.17,.13,.35*s);xh(t+.52,.12,.08,"lowpass",600);break;case"horn":{const r=It.createBiquadFilter();r.type="lowpass",r.frequency.value=1400,r.connect(rs),Zt("sawtooth",349*i,349*i,t,.38,.12*s,r),Zt("sawtooth",440*i,440*i,t,.38,.1*s,r);break}case"hit":xh(t,.35,.6*s,"lowpass",1800),Zt("sine",120,40,t,.35,.6*s),Zt("square",70,50,t,.12,.2*s);break;case"whistle":{const r=Zt("sine",2900,2900,t,.6,.18*s),o=It.createOscillator(),a=It.createGain();o.frequency.value=28,a.gain.value=220,o.connect(a).connect(r.frequency),o.start(t),o.stop(t+.62);break}case"sparkle":{[1047,1319,1568,2093,2637].forEach((o,a)=>Zt("triangle",o*i,o*i,t+a*.055,.28,.1*s));break}case"heart":Zt("sine",62,45,t,.14,.55*s),Zt("sine",58,42,t+.2,.16,.4*s);break;case"pop":Zt("sine",500*i,1100*i,t,.09,.2*s);break;case"tap":Zt("triangle",660,660,t,.05,.08*s);break;case"nope":Zt("square",220,160,t,.15,.08*s);break}}const Qc=[{rows:240,shadow:0,glow:!1},{rows:320,shadow:512,glow:!0},{rows:420,shadow:1024,glow:!0}],uT=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,dT=`
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
`;class fT{constructor(e){this.renderer=e,this.qScene=new Jm,this.qCam=new ml(-1,1,1,-1,0,1),this.rows=420,this.scale=2,this.lowW=1,this.lowH=1,this.rt=new Fs(4,4,{minFilter:Qt,magFilter:Qt,type:So,depthBuffer:!0}),this.u={tScene:{value:this.rt.texture},res:{value:new Le(4,4)},sat:{value:1},warm:{value:0},contrast:{value:1},glow:{value:0},red:{value:0},jitter:{value:0},time:{value:0},bright:{value:1},scale:{value:2},tDepth:{value:null},cnear:{value:.1},cfar:{value:160},flood:{value:0},tilt:{value:0},outline:{value:0},pal:{value:[16735370,16758784,3526842,7097343,16747084].map(t=>new Te(t))}},this.rt.depthTexture=new hd(4,4),this.u.tDepth.value=this.rt.depthTexture,this.quad=new qe(new ls(2,2),new cs({uniforms:this.u,vertexShader:uT,fragmentShader:dT,depthTest:!1,depthWrite:!1})),this.quad.frustumCulled=!1,this.qScene.add(this.quad)}setSize(e,t,i){this.rows=i,this.scale=Math.max(1,Math.round(t/i)),this.lowH=Math.ceil(t/this.scale),this.lowW=Math.ceil(e/this.scale),this.u.scale.value=this.scale,this.rt.setSize(this.lowW,this.lowH),this.u.res.value.set(this.lowW,this.lowH)}render(e,t,i,s,r){this.u.sat.value=i.sat,this.u.warm.value=i.warm,this.u.contrast.value=i.contrast,this.u.glow.value=r?i.glow:0,this.u.red.value=i.red,this.u.jitter.value=i.jitter,this.u.time.value=s,this.u.bright.value=i.bright,this.u.flood.value=i.flood??0,this.u.tilt.value=i.tilt??0,this.u.outline.value=i.outline??0;const o=t;o.isPerspectiveCamera&&(this.u.cnear.value=o.near,this.u.cfar.value=o.far),this.renderer.setRenderTarget(this.rt),this.renderer.render(e,t),this.renderer.setRenderTarget(null),this.renderer.render(this.qScene,this.qCam)}}const xi=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255],Is=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],vo=(n,e,t)=>{const i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)},dc=[{f:0,phase:"dawn",sky:15910084,sun:16758952,sunI:1.3,hemiSky:15782112,hemiGround:6967392,hemiI:1.35,warm:.45,bright:1},{f:.12,phase:"morning",sky:15917752,sun:16773320,sunI:2.2,hemiSky:16051414,hemiGround:6971472,hemiI:1.62,warm:.35,bright:1.06},{f:.35,phase:"noon",sky:12575462,sun:16775920,sunI:2.6,hemiSky:15267060,hemiGround:8025192,hemiI:1.82,warm:.2,bright:1.1},{f:.58,phase:"afternoon",sky:15128752,sun:16771264,sunI:2.3,hemiSky:16049868,hemiGround:7233616,hemiI:1.62,warm:.4,bright:1.06},{f:.68,phase:"dusk",sky:15897948,sun:16751184,sunI:1.8,hemiSky:15773840,hemiGround:5913152,hemiI:1.28,warm:.8,bright:1},{f:.78,phase:"night",sky:2899052,sun:9085183,sunI:.45,hemiSky:5929168,hemiGround:1710640,hemiI:.81,warm:.15,bright:.98},{f:.96,phase:"late",sky:1844816,sun:7375072,sunI:.35,hemiSky:5269672,hemiGround:1315880,hemiI:.68,warm:.1,bright:.96},{f:1,phase:"dawn",sky:15910084,sun:16758952,sunI:1.3,hemiSky:15782112,hemiGround:6967392,hemiI:1.35,warm:.45,bright:1}],to=[16735370,16758784,3526842,7097343,16747084];function pT(n){return n>=.5?vo(.66,.72,n):1-vo(.02,.06,n)}function el(n){n=(n%1+1)%1;let e=0;for(;e<dc.length-2&&n>=dc[e+1].f;)e++;const t=dc[e],i=dc[e+1],s=vo(0,1,(n-t.f)/(i.f-t.f)),r=pT(n);return{phase:s<.5?t.phase:i.phase,sky:Is(xi(t.sky),xi(i.sky),s),sun:Is(xi(t.sun),xi(i.sun),s),sunI:t.sunI+(i.sunI-t.sunI)*s,hemiSky:Is(xi(t.hemiSky),xi(i.hemiSky),s),hemiGround:Is(xi(t.hemiGround),xi(i.hemiGround),s),hemiI:t.hemiI+(i.hemiI-t.hemiI)*s,warm:t.warm+(i.warm-t.warm)*s,bright:t.bright+(i.bright-t.bright)*s,lamps:r,windows:Math.max(r,n>.62&&n<.72?vo(.62,.7,n)*.5:0),neon:.25+.75*r,sunH:n<.72?Math.sin(n/.72*Math.PI):.15}}function mT(n){const e=to.length,t=(n/4%e+e)%e,i=Math.floor(t);return Is(xi(to[i]),xi(to[(i+1)%e]),vo(0,1,t-i))}function gT(n,e,t){const i=el(n).sky,s=mT(t),r=el(n).lamps,o=Is(s,Is(s,xi(2758736),.35),r);return Is(i,o,vo(0,.6,e))}const Dt={runMul:1.75,staminaMax:100,runDrain:24,regen:16,runResume:25,jumpV:6.4,gravity:19,coyote:.12,buffer:.15,stepUp:.3,climb:.55,rollTime:.55,slideTime:.45,tripTime:.9,longPush:.6},_T=()=>({y:0,vy:0,onGround:!0,coyote:0,buffer:0,stamina:Dt.staminaMax,running:!1,dry:!1,pushT:0,roll:0,slide:0,trip:0,slideVx:0,slideVz:0,lastSpeed:0});function Nd(n){n.buffer=Dt.buffer}function xT(n,e,t){n.pushT=e.il>.92?n.pushT+t:0;const i=e.il>.3&&(e.runHeld||n.pushT>Dt.longPush);return n.dry&&n.stamina>=Dt.runResume&&(n.dry=!1),i&&!n.dry&&n.stamina>0}function yT(n,e,t,i=Math.random){const s=[];n.running=xT(n,e,t)&&n.roll<=0&&n.trip<=0,n.running?(n.stamina=Math.max(0,n.stamina-Dt.runDrain*t),n.stamina<=0&&(n.dry=!0)):n.stamina=Math.min(Dt.staminaMax,n.stamina+Dt.regen*t);let r=e.vx*(n.running?Dt.runMul:1),o=e.vz*(n.running?Dt.runMul:1);n.trip>0?(n.trip-=t,r=o=0):e.drunk>.45&&e.il>.3&&n.onGround&&i()<(e.drunk-.4)*(n.running?.5:.18)*t&&(n.trip=Dt.tripTime,s.push("trip"),r=o=0);const a=Math.hypot(r,o);if(n.slide>0){n.slide-=t;const u=Math.max(0,n.slide/Dt.slideTime);r=n.slideVx*u,o=n.slideVz*u}else n.onGround&&n.lastSpeed>6&&a<.5&&(e.wet||e.drunk>.3)&&(n.slide=Dt.slideTime,s.push("slide"),r=n.slideVx,o=n.slideVz);a>.5&&(n.slideVx=r,n.slideVz=o),n.lastSpeed=n.slide>0?0:a,n.roll>0&&(n.roll-=t,r=n.slideVx*1.1,o=n.slideVz*1.1),n.buffer=Math.max(0,n.buffer-t),n.coyote=n.onGround?Dt.coyote:Math.max(0,n.coyote-t),n.buffer>0&&(n.onGround||n.coyote>0)&&n.trip<=0&&(n.buffer=0,n.coyote=0,n.onGround=!1,n.vy=Dt.jumpV*(e.drunk>.5?.8:1),s.push("jump"),e.drunk>.5&&(n.roll=Dt.rollTime,s.push("roll")));let c=!1;const l=e.ground-n.y;l>Dt.stepUp&&(!n.onGround&&l<=Dt.climb&&n.vy<3?(n.y=e.ground,n.vy=0,n.onGround=!0,s.push("climb")):c=!0);const h=c?e.groundHere:e.ground;if(n.onGround&&(h<n.y-.05?(n.onGround=!1,n.vy=0):n.y=h),!n.onGround&&(n.vy-=Dt.gravity*t,n.y+=n.vy*t,n.y<=h)){const u=n.vy<-7;n.y=h,n.vy=0,n.onGround=!0,s.push("land"),u&&s.push("puff"),e.drunk>.5&&n.roll<=0&&i()<e.drunk*.5&&(n.roll=Dt.rollTime,s.push("roll"))}return c&&(r=0,o=0),{vx:r,vz:o,blocked:c,events:s}}function Zp(n,e,t){let i=0;for(const s of n)e>=s.x0&&e<=s.x1&&t>=s.z0&&t<=s.z1&&s.h>i&&(i=s.h);return i}const vT={bin:"Kick bin",lamp:"Swing!",trolley:"Ride trolley",phone:"Prank call",fountain:"Splash",vending:"Shake it",news:"Read paper",door:"Knock",pigeons:"Shoo!",meter:"Check meter",busstop:"Wait for bus",mailbox:"Post a note",piano:"Play piano",graffiti:"Tag wall",sprinkler:"Dance in it",hydrant:"Open hydrant"};function bT(n,e,t){const i=s=>e.high?s*1.6:s;switch(n){case"bin":return t<.15&&!e.usedToday?{say:"A coin falls out of the rubbish!",sound:"coin",money:1,whimsy:i(2),fx:"litter",anim:"interact-right"}:{say:"Litter everywhere. Glorious.",sound:"hit",whimsy:i(3),fx:"litter",trouble:t>.85,anim:"interact-right"};case"lamp":return{say:"Wheee! Round the lamp post.",sound:"sparkle",whimsy:i(5),fx:"spin"};case"trolley":return{say:"Trolley ride! Wind in the hair.",sound:"clink",whimsy:i(6),fx:"ride",trouble:e.high&&t>.8};case"phone":return t<.3&&!e.usedToday?{say:"Found a coin in the return slot.",sound:"coin",money:1,anim:"pick-up"}:{say:'"Is your fridge running?" They hung up.',sound:"tap",whimsy:i(4),anim:"emote-yes"};case"fountain":return t<.5?{say:"A cold drink. Lovely.",sound:"gulp",health:3,anim:"pick-up"}:{say:"Splash! Everyone nearby gets wet.",sound:"pop",whimsy:i(4),fx:"splash",wet:!0};case"vending":return t<.35?{say:"Clunk. A free can!",sound:"clink",health:2,whimsy:i(3),anim:"interact-right"}:t<.55?{say:"It tips. Ouch.",sound:"hit",health:-6,anim:"emote-no"}:{say:"Nothing. It hums at you.",sound:"nope",trouble:t>.9,anim:"interact-right"};case"news":return{say:t<.5?'"LOCAL MAN STILL FINE." Good.':"Horoscope says: big day. Sure.",sound:"tap",whimsy:i(2),anim:"pick-up"};case"door":return t<.2&&!e.usedToday?{say:"A nice lady hands you a dollar.",sound:"coin",money:1,anim:"emote-yes"}:{say:e.night?`"It's 2am!" Fair.`:"Nobody home.",sound:"tap",trouble:e.night&&t>.7,anim:"interact-right"};case"pigeons":return{say:"Pigeons everywhere!",sound:"pop",whimsy:i(3),fx:"feathers",anim:"jump"};case"meter":return t<.25&&!e.usedToday?{say:"Two quarters in the slot!",sound:"coin",money:1,anim:"pick-up"}:{say:"Expired. Like my dreams. Ha!",sound:"nope",anim:"interact-right"};case"busstop":return t<.5?{say:"The bus splashes you and goes. Classic.",sound:"horn",whimsy:i(3),fx:"bus",wet:!0,anim:"sit"}:{say:"A nice sit. Bus never came.",sound:"tap",health:2,anim:"sit"};case"mailbox":return{say:'Posted: "Dear City, thanks." No stamp.',sound:"tap",whimsy:i(3),anim:"interact-right"};case"piano":return{say:"Plink plonk! People clap.",sound:"sparkle",whimsy:i(7),money:t<.3&&!e.usedToday?1:0,fx:"notes",anim:"interact-right"};case"graffiti":return{say:"A smiley the size of a door.",sound:"pop",whimsy:i(6),fx:"paint",trouble:t>.6,anim:"interact-right"};case"sprinkler":return{say:"Sprinkler dance!",sound:"sparkle",whimsy:i(6),fx:"splash",wet:!0,anim:"emote-yes"};case"hydrant":return{say:"Whoosh! A street fountain.",sound:"pop",whimsy:i(5),fx:"splash",wet:!0,trouble:t>.5,anim:"interact-right"}}}const Ur=n=>n>=4&&n<=10||n>=-7&&n<=-4?.2:0;let Jp=7;const fc=()=>(Jp=Jp*16807%2147483647)/2147483647;class MT{constructor(){this.things=[],this.plats=[],this.puddles=[],this.trolleys=[],this.neonBase=[],this.parts=[],this.cur=[]}box(e,t,i,s,r,o,a,c=0,l=this.cur){const h=new ui(e,t,i);c&&h.rotateY(c),h.translate(r,o+t/2,a),pc(h,s),l.push(h)}cyl(e,t,i,s,r,o,a=8,c=this.cur){const l=new Si(e,e,t,a);l.translate(s,r+t/2,o),pc(l,i),c.push(l)}shadow(e,t,i){const s=new cr(i,10).toNonIndexed();s.rotateX(-Math.PI/2),s.translate(e,Ur(t)+.012,t),pc(s,Ur(t)>0?9406588:5204544),this.cur.push(Qp(s))}flush(e){if(!this.cur.length)return;const t=Op(this.cur,!1);this.cur.forEach(i=>i.dispose()),this.cur=[],this.parts.push({g:t,x:e})}thing(e,t,i){this.things.push({id:this.things.length,kind:e,x:t,z:i})}build(e,t,i){const s=[15130064,12043442,13212810,9413557,16051158,15247484,8368296,14205040];for(let p=-108;p<110;p+=54){for(let y=p;y<p+54;y+=1){const v=fc();if(y%7===0&&v<.5)this.box(1.1,.45,.7,11565658,y,.2,9.2),this.box(.9,.5,.5,7314008,y,.65,9.2),this.shadow(y,9.2,.9),this.plats.push({x0:y-.55,x1:y+.55,z0:8.85,z1:9.55,h:.65});else if(y%9===3)this.box(.9,1.2,.04,s[Math.floor(v*s.length)],y,1.1,9.86),this.box(.7,.25,.05,16051158,y,1.9,9.85);else if(y%11===5)this.box(.06,.06,.6,3027512,y,3.1,9.6),this.box(.08,.6,.7,s[(y+200)%s.length],y,2.4,9.4);else if(y%13===8)for(let x=0;x<4;x++)this.box(.5,.08,1.1,x%2?16051158:s[(y+300)%3+5],y-.75+x*.5,2.6,9.3,0);y%6===1&&fc()<.5&&(this.cyl(.12,.6,5922662,y,.2,-4.5,6),this.shadow(y,-4.5,.3)),y%10===4&&(this.box(.6,.3,.6,13212810,y,.2,-6.6),this.box(.5,.35,.5,15239840,y,.5,-6.6))}for(const y of t)y.x>=p&&y.x<p+54&&y.z>0&&this.box(16,.04,.04,2763312,y.x+8,4.25,y.z+.6);this.flush(p+27)}const r=(p,y,v,x)=>{x(),this.thing(p,y,v)},o=(p,y)=>r("bin",p,y,()=>{const v=Ur(y);this.cyl(.35,.8,4880986,p,v,y,8),this.cyl(.4,.08,3027512,p,v+.8,y,8),this.shadow(p,y,.55)});[-30,18,40,-80,92].forEach(p=>o(p,9.3));const a=p=>r("hydrant",p,4.7,()=>{this.cyl(.18,.55,13650490,p,.2,4.7,8),this.cyl(.24,.1,13650490,p,.75,4.7,8),this.box(.5,.1,.12,13650490,p,.5,4.7),this.shadow(p,4.7,.35)});[-34,6,52,96].forEach(a);const c=(p,y)=>r("phone",p,y,()=>{const v=Ur(y);this.box(1,2.3,1,13123626,p,v,y),this.box(.8,1.4,.05,12575462,p,v+.6,y+(y>0?-.5:.5)),this.box(1.1,.2,1.1,9054746,p,v+2.3,y),this.shadow(p,y,.8)});c(-6,9),c(70,-5.8);const l=p=>r("vending",p,9.35,()=>{this.box(1.1,2,.7,3828432,p,.2,9.35),this.box(.8,1.1,.05,16051158,p-.1,.9,8.98),this.shadow(p,9.35,.8)});l(10),l(58);const h=p=>r("news",p,9.3,()=>{this.box(.6,.9,.5,3111562,p,.2,9.3),this.box(.5,.3,.05,16051158,p,.75,9.04),this.shadow(p,9.3,.5)});h(36),h(-48);const u=p=>r("door",p,9.8,()=>{this.box(1.2,2.1,.1,8014378,p,.2,9.86),this.box(.12,.12,.1,14729312,p+.4,1.2,9.78),this.box(1.6,.15,.6,12043442,p,2.4,9.6)});u(-40),u(-84),u(-96);const d=p=>r("meter",p,4.6,()=>{this.cyl(.06,1.1,5922662,p,.2,4.6,6),this.box(.3,.4,.22,9080984,p,1.3,4.6),this.shadow(p,4.6,.25)});[-26,44,86,-66].forEach(d);const f=p=>r("mailbox",p,9.3,()=>{this.box(.6,1,.6,3166384,p,.2,9.3),this.cyl(.3,.6,3166384,p,1,9.3,8),this.shadow(p,9.3,.5)});f(-12),f(80),r("busstop",20,-5.6,()=>{this.box(3.4,.08,1.2,9413557,20,2.4,-6.2),this.box(3.4,2.2,.06,12575462,20,.2,-6.8),this.box(.08,2.2,.08,5922662,18.4,.2,-5.7),this.box(.08,2.2,.08,5922662,21.6,.2,-5.7),this.box(2.6,.1,.5,10118192,20,.6,-6.4),this.box(.6,.6,.06,16758784,22.2,2,-5),this.shadow(20,-6.2,1.8)}),this.plats.push({x0:18.7,x1:21.3,z0:-6.65,z1:-6.15,h:.7}),r("piano",-74,-9.5,()=>{this.box(1.6,1.2,.6,13130378,-74,0,-9.8),this.box(1.6,.06,.3,16051158,-74,.8,-9.4),this.box(.8,.45,.4,6965802,-74,0,-9),this.shadow(-74,-9.6,1.1)}),r("graffiti",47,-7.6,()=>{this.box(8,.9,.4,13220008,47,0,-8);for(let p=0;p<6;p++)this.box(1+fc(),.5,.04,to[p%5],44+p*1.2,.2,-7.78)}),this.plats.push({x0:43,x1:51,z0:-8.2,z1:-7.8,h:.9}),this.thing("fountain",Ae.fountain.x,Ae.fountain.z+2.4),this.thing("pigeons",Ae.pigeons.x,Ae.pigeons.z),this.thing("pigeons",Ae.pigeons2.x,Ae.pigeons2.z),this.thing("sprinkler",Ae.sprinkler.x,Ae.sprinkler.z);for(const p of t)this.thing("lamp",p.x,p.z);for(const[p,y,v]of[[-98,-90,.55],[-82,-76,.55],[-48,-42,.55],[-70,-66,.42]]){const x=y===-66?-15:-7.6;this.box(y-p,v,.35,v<.5?16051158:13220008,(p+y)/2,0,x),this.plats.push({x0:p,x1:y,z0:x-.2,z1:x+.2,h:v})}for(const[p,y]of[[-14,6.2],[28,-5.2],[-56,6.5],[62,6],[-64,-10],[8,-10.5]]){const v=new cr(.9,12).toNonIndexed();v.rotateX(-Math.PI/2),v.scale(1.3,1,.8),v.translate(p,Ur(y)+.015,y),pc(v,6981800),this.cur.push(Qp(v)),this.puddles.push({x:p,z:y,r:1})}this.flush(0);const g=new Qn({vertexColors:!0});for(const p of this.parts){const y=new qe(p.g,g);y.castShadow=!0,y.receiveShadow=!0,e.add(y),p.x!==0&&i(y,p.x)}for(const[p,y]of[[-18,5.6],[-58,5.6],[30,-5.4]]){const v=[];this.box(1,.6,.7,12107976,0,.45,0,0,v),this.box(.9,.05,.6,9080984,0,.2,0,0,v),this.box(.06,.4,.7,13650490,-.55,.75,0,0,v);for(const[A,R]of[[-.4,-.3],[.4,-.3],[-.4,.3],[.4,.3]])this.box(.1,.16,.1,2763312,A,0,R,0,v);const x=new qe(Op(v,!1),g);x.castShadow=!0,x.position.set(p,Ur(y),y),e.add(x);const C={id:this.things.length,kind:"trolley",x:p,z:y};this.things.push(C),this.trolleys.push({g:x,home:x.position.clone(),thing:C})}const _=14;this.neon=new xl(new ui(2,.45,.06),new En({color:16777215}),_);const m=new Fe;for(let p=0;p<_;p++){const y=38+p*2.6+fc(),v=3.2+p%3*.9;m.makeTranslation(y,v,9.82),this.neon.setMatrixAt(p,m);const x=new Te(to[p%to.length]);this.neonBase.push(x),this.neon.setColorAt(p,x)}e.add(this.neon)}nearest(e,t,i=1.8){let s=null,r=i;for(const o of this.things){const a=Math.hypot(o.x-e,o.z-t);a<r&&(r=a,s=o)}return s}inPuddle(e,t){return this.puddles.some(i=>Math.hypot(i.x-e,i.z-t)<i.r)}}function pc(n,e){const t=new Te(e),i=n.attributes.position.count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;n.setAttribute("color",new an(s,3))}function Qp(n){const e=n.attributes.position.count;return n.setIndex([...Array(e).keys()]),n}function Ke(n){return n.city||(n.city={op:{},niceDay:{},perkDay:{},rep:0,quests:{},heat:{},arrests:0,debt:0,faces:0,nemesis:{runins:0,name:null},wallet:!1,secretSpot:!1,day:{},copKind:"rookie"}),n.city}function Gi(...n){return(dr(n.join("|"))>>>0)/4294967296}const Ud=(n,e,t)=>Math.max(e,Math.min(t,n)),wT=(n,e)=>n.messages.push(e),ig=[{id:"dov",name:"Dov",who:"office guy, 8:40 sharp",kind:"office",tint:6982344,t0:.03,t1:.2,x0:-45,x1:45,z:5.6,loops:1},{id:"rina",name:"Rina",who:"café owner",kind:"rich",tint:14721136,t0:0,t1:.7,x0:14,x1:18,z:6.3,loops:6},{id:"esther",name:"Esther",who:"old lady with the dog",kind:"oldlady",tint:13148368,t0:.12,t1:.45,x0:38,x1:70,z:-5.6,loops:3},{id:"moshe",name:"Big Moshe",who:"bar bouncer",kind:"party",tint:3158064,t0:.68,t1:1,x0:-62,x1:-58,z:6.3,loops:4},{id:"noa",name:"Noa",who:"the jogger",kind:"jogger",tint:15753344,t0:.05,t1:.25,x0:-80,x1:80,z:-5.6,loops:2},{id:"yossi",name:"Yossi",who:"street sweeper",kind:"office",tint:15769632,t0:0,t1:.5,x0:-50,x1:20,z:5.6,loops:3},{id:"tamar",name:"Tamar",who:"flower stall",kind:"oldlady",tint:8437856,t0:.18,t1:.65,x0:-26,x1:-22,z:-6.3,loops:4},{id:"avi",name:"Avi",who:"bus driver on break",kind:"office",tint:4219040,t0:.3,t1:.6,x0:76,x1:84,z:6.3,loops:3},{id:"lior",name:"Lior",who:"the student",kind:"tourist",tint:6340800,t0:.35,t1:.8,x0:30,x1:-30,z:-5.6,loops:1},{id:"levi",name:"Mrs. Levi",who:"rich lady, pearls",kind:"rich",tint:15786224,t0:.4,t1:.6,x0:60,x1:92,z:5.6,loops:1},{id:"shai",name:"Shai",who:"busker",kind:"party",tint:10510560,t0:.45,t1:.75,x0:-2,x1:2,z:-6.3,loops:5},{id:"gil",name:"Gil",who:"night cook",kind:"office",tint:15263976,t0:.66,t1:.9,x0:-10,x1:-70,z:5.6,loops:1}];function ST(n,e,t=0){const i=e>=n.t0&&e<n.t1,s=Ud((e-n.t0)/(n.t1-n.t0),0,1)*n.loops,r=Math.floor(s),o=s-r,a=r%2===0,c=a?n.x0+(n.x1-n.x0)*o:n.x1+(n.x0-n.x1)*o,l=t<=-2?-Math.sign(n.z)*5.6:n.z;return{x:c,z:l,out:i,dir:Math.sign(a?n.x1-n.x0:n.x0-n.x1)||1}}const jo=["😠","🙁","😐","🙂","😄"];function TT(n){return n<=-3?jo[0]:n<0?jo[1]:n===0?jo[2]:n<3?jo[3]:jo[4]}const zn=(n,e)=>Ke(n).op[e]??0;function Oi(n,e,t){const i=Ke(n);i.op[e]=Ud((i.op[e]??0)+t,-3,3)}const Fd=(n,e)=>{const t=Ke(n);t.rep=Ud(t.rep+e,0,10)};function em(n,e){const t=Ke(n),i=no(e);if(t.niceDay[e]!==n.day){t.niceDay[e]=n.day;const r=zn(n,e);Oi(n,e,1),r<3&&zn(n,e)===3&&Fd(n,1)}const s=zn(n,e);return s>=2&&t.perkDay[e]!==n.day?(t.perkDay[e]=n.day,s>=3?(n.hunger=Math.min(100,n.hunger+15),n.whimsy=Math.min(100,n.whimsy+10),`${i} brings you a hot coffee. "Same time tomorrow?"`):(n.money+=2,`${i}: "Here, friend." +$2`)):s>=1?`${i}: "Hi! Morning!"`:s<0?`${i} looks away.`:`${i} nods.`}function sg(n,e){return Oi(n,e,-1),zn(n,e)<=-3?{text:`${no(e)}: "That's it, I'm calling the police!"`,callCop:!0}:Gi(n.seed,n.day,e,n.time.toFixed(1))<.35?(n.money+=1,{text:`${no(e)} throws a coin to get rid of you. +$1`,callCop:!1}):{text:`${no(e)}: "Leave me alone."`,callCop:!1}}function ET(n,e){let t=0;for(const i of e)i.dist<10?Oi(n,i.id,-2):i.sameArea&&(Oi(n,i.id,-1),t++);return Fd(n,-1),t?"Word gets around. People here are warning each other about you.":null}const Od=[{id:"zeev",name:"Zeev",role:"trader",x:-20,z:-13,tint:9071162,kind:"office"},{id:"shlomo",name:"Old Shlomo",role:"oldtimer",x:8,z:18,tint:8026730,kind:"oldlady"},{id:"kobi",name:"Kobi",role:"rival",x:-6,z:-6.6,tint:10107450,kind:"party"},{id:"mazal",name:"Mazal",role:"friend",x:46,z:-12,tint:6986330,kind:"oldlady"},{id:"fox",name:"Fox",role:"thief",x:20,z:-6.6,tint:2763322,kind:"jogger"}],AT=Object.fromEntries([...ig,...Od].map(n=>[n.id,n.name])),no=n=>AT[n]??n;function RT(n,e){const t=[{x:-6,z:-6.6},{x:22,z:6.6},{x:-40,z:-6.6},{x:60,z:6.6}];return t[Math.floor(Gi(n,e,"rival")*t.length)]}function CT(n){if(zn(n,"kobi")>=2)return 0;let e=0;for(let t=0;t<n.bottlesLeft.length&&e<2;t++)n.bottlesLeft[t]&&Gi(n.seed,n.day,"kobi",t)<.4&&(n.bottlesLeft[t]=!1,e++);return e&&wT(n,`Kobi got to ${e} of your bottles first.`),e}function IT(n){return Oi(n,"kobi",-1),Ke(n).day.rival=n.day,'Kobi: "Fine, FINE. This corner stinks anyway."'}function LT(n){return n.money<2?"You have nothing to share.":(n.money-=2,Oi(n,"kobi",1),zn(n,"kobi")>=2?'Kobi: "Alright, brother. Your bottles are yours."':'Kobi pockets the $2. "Hm."')}const PT=n=>Ke(n).day.rival!==n.day&&zn(n,"kobi")<2,kT=[{label:"2 bottles for bread",cost:{bottles:2},get:"bread",rep:0},{label:"$4 for a lighter",cost:{money:4},get:"lighter",rep:0},{label:"$6 for a poncho",cost:{money:6},get:"poncho",rep:2},{label:"$12 for a sleeping bag (best stock)",cost:{money:12},get:"sleepingBag",rep:4}],tm=n=>kT.filter(e=>Ke(n).rep>=e.rep);function DT(n,e=0,t=0){const i=tm(n).filter(r=>(r.cost.money??0)<=n.money&&(r.cost.bottles??0)<=n.bottles),s=i[i.length-1];return s?(n.money-=s.cost.money??0,n.bottles-=s.cost.bottles??0,zt(n,s.get,e,t,{},!0),Oi(n,"zeev",1),`Zeev: "Deal." ${s.label}.`):`Zeev: "Come back with something. ${tm(n).map(r=>r.label).join(", ")}."`}function NT(n){const e=Ke(n);return zn(n,"mazal")<0?"Mazal turns her back.":e.day.food===n.day?'Mazal: "Tomorrow, habibi. That was all of it."':(e.day.food=n.day,n.hunger=Math.min(100,n.hunger+30),Oi(n,"mazal",1),"Mazal shares half her sandwich. +hunger")}const UT=(n,e)=>zn(n,"mazal")>=1&&e>=40;function FT(n,e,t){const i=Ke(n);if(!e||t>2||i.day.thief===n.day||!n.sitting||n.money<=0)return null;if(i.day.thief=n.day,zn(n,"fox")>=2)return n.money+=3,`Fox slips you $3 from someone else's pocket. "Professional courtesy."`;const s=Math.ceil(n.money*.4);return n.money-=s,`Fox lifted $${s} while you sat. Thief!`}function OT(n){return Oi(n,"fox",1),Ke(n).day.thief=n.day,'Fox: "Ha. Eyes open. I respect that."'}const bo={x:86,z:-12};function BT(n){const e=Ke(n);if(!e.secretSpot)return"";if(e.day.secret===n.day)return"You already worked the station steps today.";e.day.secret=n.day;const t=6+Math.floor(Gi(n.seed,n.day,"secret")*6);return n.money+=t,`Tourists off the train tip well on the station steps. +$${t}`}const As=[{id:"cat",giver:"esther",text:"Find my lost cat",need:"cat",reward:{money:8,op:1,rep:1}},{id:"stall",giver:"tamar",text:"Watch my stall for 2 minutes",need:"wait",n:120,reward:{money:10,op:1}},{id:"coffee",giver:"dov",text:"Bring me a hot coffee ($3)",need:"pay",n:3,reward:{money:8,op:1}},{id:"wallet",giver:"moshe",text:"Return the wallet someone dropped",need:"wallet",reward:{money:15,rep:2}},{id:"bottles",giver:"yossi",text:"Bring me 3 bottles for the deposit",need:"bottles",n:3,reward:{item:"gloves",op:1}},{id:"note",giver:"shlomo",text:"Take this note to Rina at the café",need:"talk",to:"rina",reward:{money:5,rep:1}},{id:"tour",giver:"shlomo",text:"Walk 3 parts of town today",need:"areas",n:3,reward:{rep:1,item:"beanie"}},{id:"smile",giver:"noa",text:"Get your whimsy over 60",need:"whimsy",n:60,reward:{money:6,op:1}}];function zT(n,e){var i;const t=Ke(n);for(const s of As)s.need===e&&((i=t.quests[s.id])==null?void 0:i.status)==="open"&&(t.quests[s.id].t=1)}function HT(n,e,t){var s;const i=Ke(n);for(const r of As)r.need==="wait"&&((s=i.quests[r.id])==null?void 0:s.status)==="open"&&t(r.giver)&&(i.quests[r.id].t+=e)}function GT(n,e){const t=Ke(n).quests[e.id];switch(e.need){case"cat":return t.t>=1;case"wait":return t.t>=(e.n??0);case"pay":return n.money>=(e.n??0);case"wallet":return Ke(n).wallet;case"bottles":return n.bottles>=(e.n??0);case"areas":return n.areasToday.length>=(e.n??0);case"whimsy":return n.whimsy>=(e.n??0);case"talk":return!1}}function nm(n,e){const t=Ke(n);t.quests[e.id].status="done",e.need==="pay"&&(n.money-=e.n??0),e.need==="bottles"&&(n.bottles-=e.n??0),e.need==="wallet"&&(t.wallet=!1);const i=e.reward;i.money&&(n.money+=i.money),i.op&&Oi(n,e.giver,i.op),Fd(n,(i.rep??0)+1),i.item&&zt(n,i.item,0,0,{},!0);const s=[i.money?`+$${i.money}`:"",i.item?`+${i.item}`:"",`+${(i.rep??0)+1} rep`].filter(Boolean).join(" ");return`Quest done: ${e.text}! ${s}`}function rg(n,e,t=0,i=0){var c;const s=Ke(n);for(const l of As)if(l.need==="talk"&&l.to===e&&((c=s.quests[l.id])==null?void 0:c.status)==="open")return nm(n,l);for(const l of As.filter(h=>h.giver===e)){const h=s.quests[l.id];if((h==null?void 0:h.status)==="open"&&GT(n,l))return nm(n,l)}const r=As.filter(l=>l.giver===e&&!s.quests[l.id]);if(r.length&&zn(n,e)>=0&&!As.some(l=>{var h;return l.giver===e&&((h=s.quests[l.id])==null?void 0:h.status)==="open"})){const l=r[0];return s.quests[l.id]={status:"open",t:0},`${no(e)}: "${l.text}?" (quest taken)`}const o=Od.find(l=>l.id===e);if((o==null?void 0:o.role)==="trader")return DT(n,t,i);if((o==null?void 0:o.role)==="friend")return NT(n);if((o==null?void 0:o.role)==="oldtimer")return s.rep>=4&&!s.secretSpot?(s.secretSpot=!0,`Old Shlomo: "The station steps, after the 3 o'clock train. Don't tell Kobi."`):em(n,e);if((o==null?void 0:o.role)==="rival")return LT(n);if((o==null?void 0:o.role)==="thief")return OT(n);const a=As.find(l=>{var h;return l.giver===e&&((h=s.quests[l.id])==null?void 0:h.status)==="open"});return a?`${no(e)}: "Still waiting on that: ${a.text}."`:em(n,e)}const im=n=>As.filter(e=>{var t;return((t=Ke(n).quests[e.id])==null?void 0:t.status)==="open"}),Du={rookie:{name:"Rookie cop",icon:"🔰",speed:.9,sight:.9,cone:.55},veteran:{name:"Veteran cop",icon:"⭐",speed:1,sight:1.25,cone:.7},bike:{name:"Bike cop",icon:"🚲",speed:1.6,sight:1,cone:.5},kind:{name:"Kind cop",icon:"🥪",speed:.85,sight:.9,cone:.6}},VT={theft:30,pester:10,passout:25,fight:35},rr=(n,e)=>Ke(n).heat[e]??0;function Sa(n,e,t){const i=Ke(n);return i.heat[e]=Math.min(100,(i.heat[e]??0)+VT[t]),i.heat[e]}function WT(n){const e=Ke(n);for(const t of Object.keys(e.heat))e.heat[t]=Math.floor((e.heat[t]??0)*.35),e.heat[t]||delete e.heat[t]}const XT=n=>1+(n>=40?1:0)+(n>=75?1:0);function $T(n,e,t,i,s){const r=Gi(n,e,t,s,"cop"),o=i/100;return r<.15+.25*o?"veteran":r<.35+.35*o?"bike":r<.55+.2*o||i>=60?"rookie":"kind"}function jT(n,e,t,i,s,r,o){const a=i-n,c=s-e,l=Math.hypot(a,c);if(l>r)return!1;if(l<1.2)return!0;const h=-Math.sin(t),u=-Math.cos(t);return(a*h+c*u)/l>=Math.cos(o)}const qT=n=>n.inAlley||n.byDumpster||n.crowd>=3,sm={talked:'You talk the rookie down. "Just... go home, man."',warning:'The kind cop hands you a sandwich. "Last warning, OK?" +hunger',move:'Cop: "Move along." He walks you off the block.',drink:"The cop pours your bottles into the gutter.",ticket:"A ticket. $20 you don't have. Debt +$20.",cell:"A night in the cell. You lose a day.",jail:"Third arrest. Jail."};function YT(n,e,t,i){const s=Ke(n);if(e==="kind"&&t<75)return"warning";if(e==="rookie"&&i<.5&&t<60)return"talked";const r=e==="veteran"&&s.faces>=2,o=t+(r?30:0)+s.debt/2+(e==="veteran"?10:0);return o>=70?"cell":n.drinks.beer+n.drinks.vodka+n.drinks.wine+n.drinks.mix>0&&o>=20?"drink":o>=35?"ticket":"move"}function KT(n,e){const t=Ke(n);if(e==="ticket"&&(t.debt+=20),e==="drink"&&(n.drinks={beer:0,vodka:0,wine:0,mix:0}),e==="warning"&&(n.hunger=Math.min(100,n.hunger+25)),e==="cell"){if(t.arrests++,t.arrests>=3)return n.dead="jail","jail";const i=n.messages.length;return Kc(n,"alley"),Kc(n,"alley"),n.messages.length=i,n.messages.push(sm.cell+` (arrest ${t.arrests} of 3)`),"cell"}return n.messages.push(sm[e]),e}const rm=["Officer Dekel","Sergeant Gabay","Officer Mizrahi","Inspector Halevi","Officer Ben-Ami"],om=['"Back again? I never forget a face."',`"Run, little bottle man. I'll be here."`,'"Same corner, same bum. Same me."','"I dream about you, you know. Not nicely."'];function og(n,e){const t=Ke(n);return t.nemesis.runins++,e==="veteran"&&t.faces++,!t.nemesis.name&&t.nemesis.runins>=3?(t.nemesis.name=rm[Math.floor(Gi(n.seed,"nemesis")*rm.length)],`${t.nemesis.name} now knows you by name. "We'll meet again."`):t.nemesis.name?`${t.nemesis.name}: ${om[t.nemesis.runins%om.length]}`:null}function ZT(n,e,t,i){return{outcome:KT(n,YT(n,e,t,i)),taunt:og(n,e)}}const ag={festival:{id:"festival",name:"Street festival",icon:"🎉",text:"A street festival in the park today. Music, crowds, free stuff.",x:50,z:-10,color:16738976},wallet:{id:"wallet",name:"A wallet",icon:"👛",text:"Something leather is lying on the pavement...",x:6,z:5.8,color:9067050},rain:{id:"rain",name:"Awning crowd",icon:"☔",text:"Showers today. Crowds pack under the awnings (easy to hide in).",x:-24,z:6.4,color:5933776},film:{id:"film",name:"Film shoot",icon:"🎬",text:"A film crew is shooting downtown. They need extras.",x:-40,z:-9,color:15781952},wedding:{id:"wedding",name:"Wedding",icon:"🍰",text:"A wedding outside the hall. There will be cake.",x:30,z:9,color:16777215},strike:{id:"strike",name:"Garbage strike",icon:"🗑",text:"Garbage strike! The bins are overflowing with good stuff.",x:-12,z:16,color:6987850},soup:{id:"soup",name:"Soup kitchen",icon:"🍲",text:"The soup kitchen has a line out the door today.",x:70,z:-9,color:14716986},preacher:{id:"preacher",name:"Street preacher",icon:"📣",text:"A street preacher on a crate, shouting about the end.",x:0,z:-7,color:10514656}},am=Object.keys(ag);function JT(n,e){return ag[am[Math.floor(Gi(n,e,"event")*am.length)]]}const QT=n=>n==="festival"||n==="rain"||n==="soup";function eE(n,e){const t=Ke(n);if(t.day.event===n.day)return`${e.name}: you've had your share today.`;t.day.event=n.day;const i=r=>{n.whimsy=Math.min(100,n.whimsy+r)},s=r=>{n.hunger=Math.min(100,n.hunger+r)};switch(e.id){case"festival":return i(15),n.money+=3,"You dance at the festival. Someone drops $3 in your hat. +whimsy";case"wallet":return t.wallet=!0,"A fat wallet! Big Moshe the bouncer knows whose it is... or keep it?";case"rain":return i(5),"You squeeze under the awning with everyone. Warm, dry, invisible.";case"film":return n.money+=10,i(10),'Background extra: "sad man on bench". You nail it. +$10';case"wedding":return s(40),i(10),"The bride's aunt hands you a whole slice of cake. +hunger";case"strike":return n.money+=4,zt(n,"crate",e.x,e.z,{},!0),"Rich bins: $4 in deposit cans and a good crate.";case"soup":return s(60),n.health=Math.min(100,n.health+10),"Hot soup and bread. You feel human. +hunger +health";case"preacher":return i(8),"The preacher blesses your bindle. It feels lighter. +whimsy"}}function tE(n){const e=Ke(n);return e.wallet?(e.wallet=!1,n.money+=25,e.op.moshe=Math.max(-3,(e.op.moshe??0)-2),"You keep the cash. +$25. Big Moshe will hear about it."):""}function mc(n=128,e=.9){const t=document.createElement("canvas");t.width=n,t.height=64;const i=new va(t);i.colorSpace=Ft;const s=new dd(new _l({map:i,transparent:!0,depthWrite:!1,depthTest:!1}));s.scale.set(e*(n/64),e,1),s.renderOrder=10;let r="";return{spr:s,set:(a,c="#fff8e8")=>{if(a===r)return;r=a;const l=t.getContext("2d");l.clearRect(0,0,n,64),l.fillStyle=c,l.strokeStyle="#3a2a1a",l.lineWidth=5,l.beginPath(),l.roundRect(4,4,n-8,52,24),l.fill(),l.stroke(),l.fillStyle="#2a1a10",l.font='800 34px system-ui, "Apple Color Emoji", sans-serif',l.textAlign="center",l.textBaseline="middle",l.fillText(a,n/2,32),i.needsUpdate=!0}}}class nE{constructor(e,t){this.scene=e,this.people=[],this.coneMesh=null,this.coneKind=null,this.copTag=mc(128,.8),this.ev=new De,this.evTag=mc(64,1.3),this.secret=mc(64,.9);for(const s of ig)this.people.push(this.make(s.id,s.name,t(s.kind,s.tint),{reg:s}));for(const s of Od){const r=t(s.kind,s.tint);r.g.scale.multiplyScalar(.94),this.people.push(this.make(s.id,s.name,r,{home:s}))}this.cone=new De,e.add(this.cone,this.copTag.spr);const i=new qe(new Si(.08,.08,2.6,6),new Qn({color:5917242}));i.position.y=1.3,this.evTag.spr.position.y=3.2,this.ev.add(i,this.evTag.spr),e.add(this.ev),this.secret.set("✨"),this.secret.spr.position.set(bo.x,1.2,bo.z),this.secret.spr.visible=!1,e.add(this.secret.spr),this.hudEl=document.createElement("div"),this.hudEl.id="cityhud",this.hudEl.style.cssText="position:fixed;left:16px;bottom:calc(env(safe-area-inset-bottom) + 188px);font:700 12.5px system-ui;color:#fff8e8;text-shadow:0 1px 2px #000;pointer-events:none;max-width:60%;line-height:1.35;z-index:5",document.body.appendChild(this.hudEl)}make(e,t,i,s){const r=mc(64,.75);return r.spr.position.y=2.75,i.g.add(r.spr),this.scene.add(i.g),{id:e,name:t,p:i,face:r,...s}}update(e,t,i,s){const r=fr(e),o=ds(e);for(const c of this.people){const l=zn(e,c.id);let h,u,d=!0,f=0;if(c.reg){const _=ST(c.reg,r,l);h=_.x,u=_.z,d=_.out,f=Math.abs(c.reg.x1-c.reg.x0)>6?1.4:.5,c.p.g.rotation.y=_.dir>0?-Math.PI/2:Math.PI/2}else{const _=c.home;if(h=_.x,u=_.z,_.role==="rival"){const m=RT(e.seed,e.day);h=m.x,u=m.z,d=PT(e)&&!o}if(_.role==="thief"){d=o;const m=c.p.g.position,p=Math.hypot(i-m.x,s-m.z);d&&p<25&&p>1.5?(h=m.x+(i-m.x)/p*1.6*t,u=m.z+(s-m.z)/p*1.6*t,f=1.6,c.p.g.rotation.y=Math.atan2(i-m.x,s-m.z)+Math.PI):d&&p<=1.5&&(h=m.x,u=m.z)}}if(c.p.g.visible=d&&Math.abs(h-i)<60,!c.p.g.visible)continue;c.p.g.position.set(h,0,u),yo(c.p,f,t);const g=im(e).some(_=>_.giver===c.id);c.face.set(g?"❗":TT(l),g?"#ffe070":"#fff8e8")}const a=Ke(e);this.secret.spr.visible=a.secretSpot}cop(e,t,i,s,r,o,a){const c=Du[e].cone;if(this.coneKind!==e){this.coneMesh&&(this.cone.remove(this.coneMesh),this.coneMesh.geometry.dispose());const l=new cr(1,18,Math.PI/2-c,c*2);this.coneMesh=new qe(l,new En({color:16769658,transparent:!0,opacity:.22,depthWrite:!1})),this.coneMesh.rotation.x=-Math.PI/2,this.coneMesh.position.y=.06,this.cone.add(this.coneMesh),this.coneKind=e}this.cone.visible=o,this.cone.position.set(t,0,i),this.cone.rotation.y=s,this.cone.scale.set(r,1,r),this.copTag.set(Du[e].icon+(a?" "+a.split(" ").pop():""),a?"#ffb0a0":"#e0ecff"),this.copTag.spr.position.set(t,3.1,i)}setEvent(e){this.ev.position.set(e.x,0,e.z),this.evTag.set(e.icon,"#"+e.color.toString(16).padStart(6,"0"))}near(e,t,i=2.6){var o;let s=null,r=i;for(const a of this.people){if(!a.p.g.visible)continue;const c=Math.hypot(a.p.g.position.x-e,a.p.g.position.z-t);c<r&&(r=c,s={id:a.id,name:a.name,role:((o=a.home)==null?void 0:o.role)??"regular"})}return s}seen(e,t){return this.people.filter(i=>i.reg&&i.p.g.visible).map(i=>({id:i.id,x:i.p.g.position.x,z:i.p.g.position.z,dist:Math.hypot(i.p.g.position.x-e,i.p.g.position.z-t)}))}posOf(e){const t=this.people.find(i=>i.id===e);return t&&t.p.g.visible?t.p.g.position:null}hud(e,t,i){const s=Ke(e),r=im(e).map(a=>"❗ "+a.text).join("<br>"),o=`Rep ${s.rep} · Heat ${"▮".repeat(Math.ceil(t/25))||"-"}${s.debt?` · Debt $${s.debt}`:""}${s.arrests?` · Arrests ${s.arrests}/3`:""}<br>${i.icon} ${i.name}${r?"<br>"+r:""}`;this.hudEl.innerHTML!==o&&(this.hudEl.innerHTML=o)}}const Nu={small:{label:"Small cute dog",perk:"begging pays much more, and people stop to pet it"},big:{label:"Big scary dog",perk:"guards your sleep, scares off Fox and Kobi, fights at your side"},mutt:{label:"Clever mutt",perk:"fetches things; with the training book it steals bread"}},iE={sit:"Sit",beg:"Beg",playDead:"Play dead",fetch:"Fetch"},Tn={treat:25,food:15,rush:20,meet:20,spook:30,adopt:100,dayFade:5,foodRate:.45,waterRate:.6,leaveAfter:60,begMul:1.6,trickCd:12,fetchEvery:40},sE=[{id:"pip",kind:"small",name:"Pip",x:-52,z:-16},{id:"brutus",kind:"big",name:"Brutus",x:58,z:-17},{id:"shmulik",kind:"mutt",name:"Shmulik",x:-66,z:-22}];function In(n){return n.dogs||(n.dogs={strays:sE.map(e=>({...e,trust:0,lastFed:-999,spooked:0})),dog:null,left:[]}),n.dogs}const io=(n,e)=>n.messages.push(e),Jn=(n,e=0,t=100)=>Math.max(e,Math.min(t,n)),rE=n=>n.day*yt.dayLength+n.time,Ti=n=>In(n).dog,Al=n=>{var e;return((e=In(n).dog)==null?void 0:e.kind)??null},Bd=(n,e)=>In(n).strays.find(t=>t.id===e),ra=n=>In(n).strays.filter(e=>{var t;return e.id!==((t=In(n).dog)==null?void 0:t.id)&&!In(n).left.includes(e.id)});function cm(n,e,t){const i=Bd(n,e);if(!i||!ra(n).includes(i))return"No dog here.";if(In(n).dog)return`${In(n).dog.name} growls. One dog is plenty.`;if(i.spooked>0)return`${i.name} keeps its distance.`;if(t==="treats"){if(n.inv.treats<=0)return"No treats.";n.inv.treats--}else{if(n.hunger<20)return"You have nothing to share.";n.hunger=Jn(n.hunger-15)}const s=rE(n);return s-i.lastFed<Tn.meet?(i.trust=Jn(i.trust-Tn.rush),i.spooked=Tn.spook,i.lastFed=s,`Too much, too fast. ${i.name} bolts. (trust ${Math.round(i.trust)})`):(i.lastFed=s,i.trust=Jn(i.trust+(t==="treats"?Tn.treat:Tn.food)),i.trust>=Tn.adopt?oE(n,i):i.trust>=60?`${i.name} lets you scratch its ears. (trust ${Math.round(i.trust)})`:i.trust>=30?`${i.name} eats from your hand. (trust ${Math.round(i.trust)})`:`${i.name} snatches it and backs off. (trust ${Math.round(i.trust)})`)}function oE(n,e){const t=In(n);return t.dog={id:e.id,kind:e.kind,name:e.name,food:80,water:80,neglect:0,trickT:0,fetchT:Tn.fetchEvery,breadDay:0,barkT:0,petT:20},jt.emit(n,"dog"),`${e.name} follows you now. ${Nu[e.kind].label}: ${Nu[e.kind].perk}.`}function aE(n){const e=Ti(n);return e?n.inv.treats>0?(n.inv.treats--,e.food=Jn(e.food+50),`${e.name} crunches a treat.`):n.hunger<20?`You have nothing to give ${e.name}.`:(n.hunger=Jn(n.hunger-15),e.food=Jn(e.food+35),`You split your food with ${e.name}.`):""}function cE(n,e,t){const i=In(n),s={bark:!1,pet:!1,fetched:null,left:!1};for(const o of i.strays)o.spooked=Math.max(0,o.spooked-e);const r=i.dog;return!r||n.dead?s:(r.food=Jn(r.food-Tn.foodRate*e),r.water=t.nearWater?100:Jn(r.water-Tn.waterRate*e),r.neglect=r.food<=0||r.water<=0?r.neglect+e:Math.max(0,r.neglect-e),r.neglect>=Tn.leaveAfter?(cg(n,`${r.name} got tired of going hungry and wandered off.`),s.left=!0,s):(r.trickT=Math.max(0,r.trickT-e),r.barkT=Math.max(0,r.barkT-e),t.threats.some(o=>o<9)&&r.barkT<=0&&(r.barkT=6,s.bark=!0),r.kind==="small"&&t.pedsNear>0&&(r.petT-=e,r.petT<=0&&(r.petT=25,n.money+=1,n.whimsy=Jn(n.whimsy+3),s.pet=!0,io(n,`Someone stops to pet ${r.name}. +$1`))),r.kind==="mutt"&&(r.fetchT-=e,r.fetchT<=0&&(r.fetchT=Tn.fetchEvery,s.fetched=lE(n,r)),t.nearBakery&&vn(n,"dog")&&r.breadDay!==n.day&&(r.breadDay=n.day,zt(n,"bread",0,0,{},!0),s.fetched="bread",io(n,`${r.name} trots out of the bakery with a whole loaf. Good thief.`))),s))}function lE(n,e){const t=Gi(n.seed,n.day,Math.floor(n.time),"fetch");return t<.45?(n.bottles++,io(n,`${e.name} drops a bottle at your feet.`),"bottle"):t<.75?(n.money+=1,io(n,`${e.name} brings you a coin. +$1`),"coin"):(io(n,`${e.name} brings you a stick. Proud of it.`),n.whimsy=Jn(n.whimsy+2),"stick")}function cg(n,e){const t=In(n);if(!t.dog)return;t.left.push(t.dog.id);const i=Bd(n,t.dog.id);i&&(i.trust=0),t.dog=null,io(n,e)}function hE(n){const e=In(n);for(const i of ra(n))i.trust=Jn(i.trust-Tn.dayFade);const t=e.dog;t&&(t.food=Jn(t.food-15),t.food<=0&&t.water<=20&&cg(n,`${t.name} was gone in the morning. You forgot to feed it.`))}function uE(n,e){if(Al(n)!=="small"||e<=0)return 0;const t=Math.max(1,Math.round(e*(Tn.begMul-1)));return n.money+=t,t}const zd=n=>Al(n)==="big",lm=n=>!!Ti(n)&&vn(n,"dog");function dE(n,e,t){const i=Ti(n);if(!i)return"";if(!vn(n,"dog"))return`${i.name} looks at you. It doesn't know tricks. (Read the dog-training book.)`;if(i.trickT>0)return`${i.name} needs a breather.`;i.trickT=Tn.trickCd,n.whimsy=Jn(n.whimsy+3),jt.emit(n,"trick"),e==="fetch"&&i.kind==="mutt"&&(i.fetchT=0);const s=t>0?Math.round((1+t)*(i.kind==="small"?1.5:1)*(ds(n)?.7:1)):0;n.money+=s;const r={sit:"sits, perfectly",beg:"begs on its hind legs",playDead:"flops over. Bang. Dead.",fetch:"fetches and brings it back"};return`${i.name} ${r[e]}.`+(s?` The crowd tips $${s}.`:" Nobody watching.")}function fE(n){const e=Ti(n);return e&&e.neglect<Tn.leaveAfter/2?{id:e.id,name:e.name,kind:e.kind}:null}function pE(n,e){if(!e)return null;const t=Bd(n,e.id);return t?(t.trust=80,`${e.name} is in its old spot. It knows your smell.`):null}jt.hasDog=n=>!!Ti(n);jt.guard=n=>zd(n);const oa={rival:{name:"Kobi",hp:30,dmg:8,speed:2.6,reach:1.4,tell:.7,rest:1.2,tellText:"Kobi winds up a big slap"},thief:{name:"Fox",hp:22,dmg:6,speed:4.2,reach:1.3,tell:.45,rest:.9,tellText:"Fox crouches to lunge"},pack:{name:"Stray",hp:14,dmg:5,speed:4.6,reach:1.2,tell:.5,rest:1.4,tellText:"hackles up, it growls"},brawler:{name:"Bar brawler",hp:45,dmg:14,speed:2.2,reach:1.6,tell:1,rest:1.6,tellText:"he rears back a haymaker"},guard:{name:"Security guard",hp:50,dmg:4,speed:3.6,reach:1.4,tell:.6,rest:1,tellText:"he reaches to grab you"}},Ta=n=>n.scrap??(n.scrap={bruise:0,day:{}}),Ot={shove:{reach:1.7,dmg:5,push:3.2,cd:.35},swing:{reach:1.9,dmg:12,cd:.6},roll:{dur:.35,iframe:.3,speed:11,cd:.7},throwDmg:14,shotSpeed:16,bruiseHeal:.12,dogBite:7,dogEvery:1.1,flee:13},Hd=n=>Math.min(1,n.buzz/100),mE=n=>Math.round(Ot.swing.dmg*(1+.7*Hd(n))),gE=n=>Ot.roll.dur*(1+.8*Hd(n)),_E=n=>.9*Hd(n),Gd=(n,e=0,t=100)=>Math.max(e,Math.min(t,n)),Uu=n=>n.st!=="down"&&n.st!=="fled"&&n.st!=="calm",Ls=n=>n.foes.filter(Uu);function xE(n,e,t,i,s=1){if((e==="rival"||e==="thief")&&Al(n)==="big")return e==="rival"?Ke(n).day.rival=n.day:Ke(n).day.thief=n.day,{fight:null,text:`${Ti(n).name} bares its teeth. ${oa[e].name} backs off, hands up.`};const r=[];for(let o=0;o<s;o++)r.push({kind:e,id:e+o,x:t+o*1.3,z:i+(o%2?1:-1)*o*.8,hp:oa[e].hp,st:"approach",t:0,ax:0,az:0,hits:0});return Sa(n,en(t,i),"fight"),n.sitting=!1,{fight:{foes:r,shots:[],rollT:0,rollCd:0,iframe:0,atkCd:0,rx:0,rz:0,dogT:Ot.dogEvery,grabs:0,over:""},text:e==="pack"?"A pack of strays circles you. Run, or calm them with food.":`${oa[e].name} squares up!`}}function Ea(n,e,t){let i=null,s=1e9;for(const r of Ls(n)){const o=Math.hypot(r.x-e,r.z-t);o<s&&(s=o,i=r)}return i}function tl(n,e,t,i,s,r,o=0){t.hp-=i,t.hits++;const a=Math.hypot(t.x-s,t.z-r)||1;o&&(t.x+=(t.x-s)/a*o,t.z+=(t.z-r)/a*o),t.st==="tell"&&o&&(t.st="rest",t.t=.6),t.hp<=0&&yE(n,e,t)}function yE(n,e,t){t.st="down",t.hp=0;const i=Ke(n);t.kind==="rival"&&(i.day.rival=n.day,i.op.kobi=Math.max(-3,(i.op.kobi??0)-1),i.rep=Math.min(10,i.rep+1)),t.kind==="thief"&&(i.day.thief=n.day,n.money+=4),t.kind==="brawler"&&(n.money+=3),t.kind==="guard"&&(i.rep=Math.min(10,i.rep+1)),Ls(e).length||(e.over="won")}function vE(n,e,t,i){if(e.atkCd>0||e.over)return!1;e.atkCd=Ot.shove.cd;const s=Ea(e,t,i);return!s||Math.hypot(s.x-t,s.z-i)>Ot.shove.reach?!1:(tl(n,e,s,Ot.shove.dmg,t,i,Ot.shove.push),!0)}function bE(n,e,t,i){if(e.atkCd>0||e.over)return!1;e.atkCd=Ot.swing.cd;const s=Ea(e,t,i);return!s||Math.hypot(s.x-t,s.z-i)>Ot.swing.reach?!1:(tl(n,e,s,mE(n),t,i,.6),!0)}function ME(n,e,t,i,s=0,r=0){if(e.rollCd>0||e.over)return!1;if(!s&&!r){const a=Ea(e,t,i);s=a?t-a.x:1,r=a?i-a.z:0}const o=Math.hypot(s,r)||1;return e.rx=s/o,e.rz=r/o,e.rollT=gE(n),e.iframe=Ot.roll.iframe*(e.rollT/Ot.roll.dur),e.rollCd=e.rollT+Ot.roll.cd,!0}function wE(n,e,t,i,s=on(n)){if(n.bottles<=0||e.over)return!1;const r=Ea(e,t,i);if(!r)return!1;n.bottles--;const o=Math.atan2(r.x-t,r.z-i)+(s-.5)*2*_E(n);return e.shots.push({x:t,z:i,vx:Math.sin(o)*Ot.shotSpeed,vz:Math.cos(o)*Ot.shotSpeed,t:1}),!0}function SE(n,e){if(!e.foes.some(t=>t.kind==="pack"&&Uu(t)))return!1;if(n.inv.treats>0)n.inv.treats--;else if(n.hunger>=20)n.hunger=Gd(n.hunger-20);else return!1;for(const t of e.foes)t.kind==="pack"&&Uu(t)&&(t.st="calm");return Ls(e).length||(e.over="calmed"),!0}const lg=n=>n.iframe>0;function TE(n,e,t){return lg(e)?!1:(n.health=Gd(n.health-t),Ta(n).bruise+=t,n.sitting=!1,!0)}function EE(n,e,t,i,s){const r={dx:0,dz:0,hits:0,tells:[],dogBit:!1,shotHit:!1};if(e.atkCd=Math.max(0,e.atkCd-t),e.rollCd=Math.max(0,e.rollCd-t),e.iframe=Math.max(0,e.iframe-t),e.rollT>0){const o=Math.min(t,e.rollT);e.rollT-=o,r.dx=e.rx*Ot.roll.speed*o,r.dz=e.rz*Ot.roll.speed*o}if(i+=r.dx,s+=r.dz,e.over)return r;for(const o of e.shots){o.x+=o.vx*t,o.z+=o.vz*t,o.t-=t;for(const a of Ls(e))o.t>0&&Math.hypot(a.x-o.x,a.z-o.z)<.9&&(tl(n,e,a,Ot.throwDmg,o.x-o.vx,o.z-o.vz,1),o.t=0,r.shotHit=!0)}if(e.shots=e.shots.filter(o=>o.t>0),Al(n)==="big"){e.dogT-=t;const o=Ea(e,i,s);e.dogT<=0&&o&&Math.hypot(o.x-i,o.z-s)<6&&(e.dogT=Ot.dogEvery,tl(n,e,o,Ot.dogBite,i,s,.5),r.dogBit=!0)}for(const o of Ls(e)){const a=oa[o.kind],c=i-o.x,l=s-o.z,h=Math.hypot(c,l)||1;if(o.t-=t,o.st==="approach")h>a.reach*.8&&(o.x+=c/h*a.speed*t,o.z+=l/h*a.speed*t),h<=a.reach+.3&&(o.st="tell",o.t=a.tell,o.ax=c/h,o.az=l/h,r.tells.push(o));else if(o.st==="tell"&&o.t<=0){const u=c*o.ax+l*o.az,d=Math.abs(c*o.az-l*o.ax);u>-.3&&u<a.reach+.5&&d<.9&&TE(n,e,a.dmg*(ds(n)&&o.kind==="brawler"?1.2:1))&&(r.hits++,o.kind==="guard"&&++e.grabs>=2&&(e.over="grabbed")),o.st="rest",o.t=a.rest}else o.st==="rest"&&o.t<=0&&(o.st="approach");o.kind==="pack"&&o.hits>=2&&o.hp>0&&(o.st="fled")}return!e.over&&!Ls(e).length&&(e.over="won"),!e.over&&Ls(e).every(o=>Math.hypot(o.x-i,o.z-s)>Ot.flee)&&(e.over="fled"),r}function AE(n,e){const t=Ta(n);if(t.bruise<=0||n.dead)return;const i=Math.min(t.bruise,Ot.bruiseHeal*e);t.bruise-=i,n.health=Gd(n.health+i)}function RE(n,e){const t=Ta(n);return e!=="park"||!ds(n)||t.day.pack===n.day?!1:(t.day.pack=n.day,Gi(n.seed,n.day,"pack")<.6)}function CE(n,e){const t=Ta(n);return e!=="bars"||!ds(n)||t.day.brawler===n.day?!1:(t.day.brawler=n.day,Gi(n.seed,n.day,"brawl")<.7)}const IE={small:[15917764,13146730,.55],big:[3813418,1972244,1.05],mutt:[10119738,15788252,.78]};function hm(n,e,t){const i=new De,s=ne(n),r=ne(e),o=ne(1314832),a=new De;a.add(J(.42,.34,.8,s,0,.42,0)),a.add(J(.36,.34,.34,s,0,.66,.46)),a.add(J(.2,.16,.2,r,0,.6,.68)),a.add(J(.07,.07,.05,o,0,.66,.79)),a.add(J(.1,.16,.08,r,-.13,.88,.42)),a.add(J(.1,.16,.08,r,.13,.88,.42));for(const[l,h]of[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]])a.add(J(.11,.3,.11,s,l,.15,h));const c=J(.07,.07,.3,r,0,.58,-.5);return c.rotation.x=-.6,c.name="tail",a.add(c),a.name="inner",i.add(a),i.scale.setScalar(t),i}class LE{constructor(e,t,i){this.scene=e,this.api=t,this.sref=i,this.fight=null,this.dogs=new Map,this.foeViews=[],this.shotViews=[],this.lastX=0,this.lastZ=0,this.vx=0,this.vz=0,this.clock=0,this.ringMat=new En({color:16724016,transparent:!0,opacity:.6,depthWrite:!1}),window.addEventListener("keydown",s=>{const r=s.key.toLowerCase();if(!this.fight||!["j","k","l","i"].includes(r))return;const o=this.sref();r==="j"?this.swing(o):r==="k"?this.shove(o):r==="l"?this.roll(o):this.throw(o)})}get fighting(){return!!this.fight}dogMesh(e,t){let i=this.dogs.get(e);if(!i){const s=IE[t];i=hm(s[0],s[1],s[2]),this.scene.add(i),this.dogs.set(e,i)}return i}update(e,t){this.clock+=t;const i=this.api.pos();if(this.vx=(i.x-this.lastX)/Math.max(t,.001),this.vz=(i.z-this.lastZ)/Math.max(t,.001),this.lastX=i.x,this.lastZ=i.z,AE(e,t),this.updateDogs(e,t,i),!this.fight){const s=en(i.x,i.z);RE(e,s)?this.begin(e,"pack",i.x+5,i.z+3,3):CE(e,s)&&this.begin(e,"brawler",i.x+4,i.z,1)}this.fight&&this.updateFight(e,t,i)}updateDogs(e,t,i){var y;const s=In(e),r=ra(e);for(const[v,x]of this.dogs)!r.some(C=>C.id===v)&&((y=s.dog)==null?void 0:y.id)!==v&&(x.visible=!1);for(const v of r){const x=this.dogMesh(v.id,v.kind);x.visible=!0;const C=v.spooked>0?9:0,A=this.clock*.4+v.x;x.position.set(v.x+Math.sin(A)*1.2+C,0,v.z+Math.cos(A*.7)*.8),x.rotation.y=A+Math.PI/2,this.wag(x,v.trust>40?10:2)}const o=this.fight?Ls(this.fight).map(v=>Math.hypot(v.x-i.x,v.z-i.z)):[],a=this.api.copDist();a<30&&o.push(a*.3);const c=cE(e,t,{nearWater:[Ae.sprinkler,Ae.fountain,Ae.bridge].some(v=>Math.hypot(v.x-i.x,v.z-i.z)<v.r+1.5),pedsNear:this.api.pedsNear(),threats:o,nearBakery:Math.hypot(Ae.bakeryBin.x-i.x,Ae.bakeryBin.z-i.z)<4}),l=s.dog;if(!l)return;const h=this.dogMesh(l.id,l.kind);h.visible=!0;const u=i.x-1.3,d=i.z+.9,f=u-h.position.x,g=d-h.position.z,_=Math.hypot(f,g);if(_>25)h.position.set(u,0,d);else if(_>.3){const v=Math.min(_,Math.min(9,2+_*2)*t);h.position.x+=f/_*v,h.position.z+=g/_*v,h.rotation.y=Math.atan2(f,g)}const m=h.getObjectByName("inner"),p=e.sitting;m.scale.y=p?.55:1,m.position.y=_>.3?Math.abs(Math.sin(this.clock*14))*.06:0,this.wag(h,l.food>30?14:4),c.bark&&(this.api.float("Woof!","#ffe070",h.position.x,1.4,h.position.z),this.api.play("nope",1.8)),c.pet&&this.api.float("♥","#ff8ab0",h.position.x,1.2,h.position.z),c.fetched&&this.api.play("pop",1.4)}wag(e,t){const i=e.getObjectByName("tail");i&&(i.rotation.y=Math.sin(this.clock*t)*.6)}begin(e,t,i,s,r=1){if(this.fight)return!1;const o=xE(e,t,i,s,r);if(this.api.flash(o.text),!o.fight)return!1;this.fight=o.fight;for(const a of o.fight.foes)this.foeViews.push(this.makeFoe(a));return this.api.play("whistle",.6),this.api.copDist()===1/0&&this.api.copChase("The scrap drew the cop! Finish it or run."),this.api.redraw(),!0}pick(e,t){const i=this.api.pos();this.begin(e,t,i.x+2,i.z+.5)}onTheft(e){const t=this.api.pos();[Ae.store,Ae.shop2].some(i=>Math.hypot(i.x-t.x,i.z-t.z)<7)&&this.begin(e,"guard",t.x+3,t.z)}begBonus(e,t){const i=uE(e,t),s=Ti(e);if(i&&s){const r=this.dogs.get(s.id);this.api.float(`+$${i} ${s.name}`,"#ffd84a",r.position.x,1.3,r.position.z)}}makeFoe(e){let t,i=null;if(e.kind==="pack")t=hm(5917242,2760728,.8);else{const r={rival:[10107450,3814464],thief:[2763322,1710626],brawler:[14209216,2767466],guard:[1710618,1710618]};i=sa(r[e.kind][0],r[e.kind][1],{hair:2759184,hat:e.kind==="guard"?1052688:void 0}),t=i.g}const s=new qe(new yl(.5,.75,20),this.ringMat);return s.rotation.x=-Math.PI/2,s.position.y=.05,s.visible=!1,t.add(s),t.position.set(e.x,0,e.z),this.scene.add(t),{foe:e,g:t,ring:s,person:i}}updateFight(e,t,i){const s=this.fight,r=EE(e,s,t,i.x,i.z);(r.dx||r.dz)&&this.api.move(r.dx,r.dz);for(const o of r.tells)this.api.float("!","#ff4040",o.x,2.6,o.z);r.hits&&(this.api.float("Ow!","#ff6060",i.x,2.4,i.z),this.api.play("nope",.8)),r.dogBit&&Ti(e)&&this.api.float("Grr!","#ffe070",i.x-1,1.4,i.z);for(const o of this.foeViews){const a=o.foe,c=a.x-o.g.position.x,l=a.z-o.g.position.z,h=Math.hypot(c,l)/Math.max(t,.001);o.g.position.set(a.x,0,a.z);const u=a.st==="down",d=a.st==="fled"||a.st==="calm";if(!u&&!d&&(o.g.rotation.y=Math.atan2(i.x-a.x,i.z-a.z)),o.g.rotation.z=u?Math.PI/2:0,o.ring.visible=a.st==="tell",o.ring.visible){const f=1+(1-Math.max(0,a.t)/oa[a.kind].tell)*.6;o.ring.scale.set(f,f,f)}if(d&&(a.x+=(a.x-i.x)*t,a.z+=(a.z-i.z)*t),o.person)yo(o.person,u?0:Math.min(h,5),t);else{const f=o.g.getObjectByName("inner");f&&(f.position.y=a.st==="tell"?0:Math.abs(Math.sin(this.clock*16))*.05)}}for(;this.shotViews.length<s.shots.length;){const o=Z0();this.scene.add(o),this.shotViews.push(o)}this.shotViews.forEach((o,a)=>{const c=s.shots[a];o.visible=!!c,c&&(o.position.set(c.x,1.1,c.z),o.rotation.x+=t*14)}),r.shotHit&&this.api.play("pop",.7),s.over&&this.end(e)}end(e){const t=this.fight,i={won:"The scrap is over. You stand, bruised.",fled:"You got away.",calmed:"The strays settle and trot off, chewing.",grabbed:'The guard pins your arms. "Police are on the way."'};this.api.flash(i[t.over]??""),t.over==="grabbed"&&this.api.caught();const s=this.foeViews;setTimeout(()=>{for(const r of s)this.scene.remove(r.g)},2500),this.foeViews=[];for(const r of this.shotViews)r.visible=!1;this.fight=null,this.api.redraw()}swing(e){const t=this.api.pos();this.fight&&bE(e,this.fight,t.x,t.z)&&(this.api.float("POW","#fff",t.x,2,t.z),this.api.play("pop",.5))}shove(e){const t=this.api.pos();this.fight&&vE(e,this.fight,t.x,t.z)&&this.api.play("pop",.9)}roll(e){const t=this.api.pos();this.fight&&ME(e,this.fight,t.x,t.z,this.vx,this.vz)&&this.api.play("pop",1.6)}throw(e){const t=this.api.pos();this.fight&&wE(e,this.fight,t.x,t.z)&&this.api.redraw()}get invulnerable(){return!!this.fight&&lg(this.fight)}key(e){const t=this.api.pos(),i=ra(e).filter(r=>Math.hypot(r.x-t.x,r.z-t.z)<4).map(r=>r.id+r.spooked.toFixed(0)).join(","),s=Ti(e);return this.fight?`F${e.bottles}${this.fight.foes.some(r=>r.kind==="pack")?"p":""}`:`d${i}|${s?s.id+(s.food<40?"h":"")+(lm(e)?"t":""):""}|${e.inv.treats}`}pills(e,t){const i=o=>{o&&this.api.flash(o),this.api.redraw()};if(this.fight){const o=this.fight;o.foes.some(a=>a.kind==="pack")&&t("Calm them (food)","poke",()=>{const a=this.sref();SE(a,o)?this.api.play("sparkle"):this.api.flash("Nothing to give them. Run!"),this.api.redraw()}),e.bottles>0&&t(`Throw bottle (${e.bottles})`,"poke",()=>this.throw(this.sref())),t("Roll","line",()=>this.roll(this.sref())),t("Shove","line",()=>this.shove(this.sref())),t("Swing","first beg",()=>this.swing(this.sref()));return}const s=this.api.pos(),r=Ti(e);if(r)lm(e)&&["playDead","beg","sit"].forEach(o=>t(`${r.name}: ${iE[o]}`,"whimsy poke",()=>i(dE(this.sref(),o,this.api.pedsNear())))),r.food<60&&t(`Feed ${r.name}`,"poke",()=>i(aE(this.sref())));else for(const o of ra(e))Math.hypot(o.x-s.x,o.z-s.z)>4||(e.inv.treats>0&&t(`Treat for ${o.name}`,"whimsy poke",()=>i(cm(this.sref(),o.id,"treats"))),t(`Share food: ${o.name}`,"poke",()=>i(cm(this.sref(),o.id,"food"))))}chip(e){const t=Ti(e);return t?`${t.name} (${Nu[t.kind].label.split(" ").pop()}) food ${Math.round(t.food)} water ${Math.round(t.water)}`:""}night(e){return ds(e)}}const ga=new URLSearchParams(location.search),hg=ga.has("debug"),nn=(n,e=0,t=1)=>Math.max(e,Math.min(t,n)),ws=(n,e,t)=>n+(e-n)*t,Jt={raw(n){try{return localStorage.getItem("sg_"+n)}catch{return null}},setRaw(n,e){try{localStorage.setItem("sg_"+n,e)}catch{}},del(n){try{localStorage.removeItem("sg_"+n)}catch{}},get(n,e){try{const t=Jt.raw(n);return t?JSON.parse(t):e}catch{return e}},set(n,e){Jt.setRaw(n,JSON.stringify(e))}},An=new aM({antialias:!1,powerPreference:"high-performance"});An.setPixelRatio(1);An.setSize(window.innerWidth,window.innerHeight,!1);An.shadowMap.enabled=!0;An.shadowMap.type=bm;An.info.autoReset=!1;document.body.prepend(An.domElement);const Ei=new fT(An),Nt=new Jm,$e=new Sn(60,window.innerWidth/window.innerHeight,.1,160);let ai=ga.has("q")?nn(Math.round(Number(ga.get("q"))),0,2):2;const PE=!ga.has("q"),Cc=new AM(13624575,5917242,1.2);Nt.add(Cc);const Xt=new h0(16773590,2.4);Xt.shadow.camera.left=-22;Xt.shadow.camera.right=22;Xt.shadow.camera.top=22;Xt.shadow.camera.bottom=-22;Xt.shadow.camera.near=1;Xt.shadow.camera.far=80;Xt.shadow.bias=-6e-4;Xt.shadow.normalBias=.03;Nt.add(Xt,Xt.target);Nt.fog=new ud(12896456,26,62);const yh=62;function Vd(){var e;const n=Qc[ai];Xt.castShadow=n.shadow>0,n.shadow>0&&Xt.shadow.mapSize.x!==n.shadow&&(Xt.shadow.mapSize.set(n.shadow,n.shadow),(e=Xt.shadow.map)==null||e.dispose(),Xt.shadow.map=null),Ei.setSize(window.innerWidth,window.innerHeight,n.rows)}let aa=60;function ug(){An.setSize(window.innerWidth,window.innerHeight,!1),$e.aspect=window.innerWidth/window.innerHeight,aa=$e.aspect<1?70:50,$e.fov=aa,$e.updateProjectionMatrix(),Vd()}window.addEventListener("resize",ug);const dg=[],Ks=(n,e,t,i)=>dg.push({x0:n,x1:e,z0:t,z1:i}),fg=[],kE=()=>new En({color:16777215,transparent:!0,opacity:.2,depthWrite:!1}),nl=[],pg=[],Wd=[];function sn(n){return Nt.add(n),n}function st(n,e,t=0){return Nt.add(n),Wd.push({o:n,x:e,z:t}),n}function DE(n,e,t,i,s=1){const r=document.createElement("canvas");let o=r.getContext("2d");o.font="bold 54px sans-serif";const a=Math.max(512,Math.ceil(o.measureText(n).width)+48);r.width=a,r.height=96,o=r.getContext("2d"),o.fillStyle="rgba(0,0,0,0.55)",o.fillRect(0,0,a,96),o.fillStyle="#fff",o.font="bold 54px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(n,a/2,50);const c=new va(r);c.colorSpace=Ft;const l=new dd(new _l({map:c,fog:!1,depthTest:!1}));return l.scale.set(4*s*(a/512),.75*s,1),l.position.set(e,t,i),l.renderOrder=10,sn(l)}function vh(n,e,t,i=.9){const s=document.createElement("canvas");s.width=256,s.height=64;const r=s.getContext("2d");r.fillStyle=e,r.fillRect(0,0,256,64),r.fillStyle="#fff",r.font="bold 34px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(n,128,34);const o=new va(s);o.colorSpace=Ft,o.magFilter=Qt;const a=new Qn({map:o,emissive:16777215,emissiveIntensity:0,emissiveMap:o});Tl.push(a);const c=new qe(new ls(t,i),a);return c.rotation.y=Math.PI,c}function NE(n,e,t,i){const s=new qe(new yl(i-.14,i,32),kE());s.rotation.x=-Math.PI/2,s.position.set(e,.24,t),st(s,e,t),fg.push({id:n,m:s,x:e,z:t,r:i})}function um(n,e,t){const i=new De;i.add(J(.14,3.2,.14,ne(2764083),0,1.6,0)),i.add(J(.45,1.2,.45,ne(1908516),0,3.6,0));const s=[16724016,16760864,3211104].map(o=>new Qn({color:2236962,emissive:o,emissiveIntensity:0}));s.forEach((o,a)=>i.add(J(.06,.26,.26,o,t*.24,4-a*.37,0,!1)));const r=new Qn({color:2236962,emissive:3211104,emissiveIntensity:1.5});i.add(J(.5,.08,.5,r,0,4.24,0,!1)),s.push(r),i.position.set(n,0,e),st(i,n,e),pg.push({mats:s})}function Fr(n,e,t=!1){const i=new ui(1,1,1),s=new xl(i,ne(n),e.length),r=new Fe;return e.forEach(([o,a,c,l,h,u],d)=>s.setMatrixAt(d,r.compose(new D(o,a,c),new Kn,new D(l,h,u)))),s.castShadow=t,s.receiveShadow=!0,sn(s)}const mg=[],Xd=[],Ic={};function UE(){const n=new qe(new ls(260,90),ne(7311194));n.rotation.x=-Math.PI/2,n.position.set(0,0,-8),n.receiveShadow=!0,sn(n);const e=(T,U,H,j,K,$,ce)=>st(J(T,U,H,ne(j),K,$,ce,!1),K,ce);sn(J(230,.05,8,ne(3816770),0,.02,0,!1)),sn(J(230,.2,6,ne(12169894),0,.1,7,!1)),sn(J(230,.24,.3,ne(9078140),0,.12,4.1,!1)),sn(J(230,.2,3,ne(12169894),0,.1,-5.5,!1)),sn(J(230,.24,.3,ne(9078140),0,.12,-4.1,!1));const t=[];for(let T=-112;T<=112;T+=6)Ru.every(U=>Math.abs(T-U)>3)&&t.push([T,.04,0,2.5,.06,.22]);Fr(15919194,t);const i=[];for(let T=-112;T<=112;T+=2)i.push([T,.1,7,.06,.21,6]);Fr(10854034,i);const s=[];for(const T of Ru){for(let H=0;H<7;H++)s.push([T,.045,-3.3+H*1.1,2*Zo.halfW,.06,.55]);const U=Zo.halfW+1.2;s.push([T-U,.045,-2,.3,.06,3.8],[T+U,.045,2,.3,.06,3.8]),um(T-Zo.halfW-.8,-4.5,-1),um(T+Zo.halfW+.8,4.5,1)}Fr(16053488,s),e(34,.08,14,5221962,-15,.05,-15),e(2,.09,14,13220239,-8,.06,-15),e(14,.1,12,9274232,9,.06,16),e(10,.1,8,9274232,0,.06,18);const r=(T,U,H,j,K)=>{st(T,(U+H)/2,j),Ks(U,H,j,K)};r(_i(-34,-28,10,22,9,10124138,0),-34,-28,10,22),r(Nr(-27,-17,10,16,7,6966197,14172224,16052456,"LIQUOR","#7a1f6a",1),-27,-17,10,16),r(_i(-16,-6,10,22,11,11565658,2),-16,-6,10,22),r(Nr(-5,5,10,14,6,15251552,16748464,16774368,"BAKERY","#b0602a",3),-5,5,10,14),r(_i(16,34,10,22,13,8030896,4),16,34,10,22),st(J(11,3,1,ne(9076600),-.5,1.5,22),0,22),Ks(-6,5,21.5,22.5),st(J(1,3,12,ne(9076600),15.5,1.5,16),15,16),st(WS(),Ae.dumpster.x,Ae.dumpster.z).position.set(Ae.dumpster.x,0,Ae.dumpster.z+1);for(const T of["bin","bin2","bin3"]){const U=new De;U.add(J(1.1,1.1,1.1,ne(2778312),0,.55,0)),U.add(J(1.2,.12,1.2,ne(1919638),0,1.16,0)),U.add(J(.5,.04,.12,ne(1118481),0,1.23,0,!1)),U.position.set(Ae[T].x,0,Ae[T].z-.6),st(U,Ae[T].x,Ae[T].z)}const a=new De;a.add(J(.4,.5,.4,ne(3840720),0,.25,0)),a.add(J(.16,.25,.16,ne(12634320),0,.6,0)),a.position.set(Ae.sprinkler.x,0,Ae.sprinkler.z),st(a,Ae.sprinkler.x),st(J(1.4,.04,.9,ne(11569232),Ae.corner.x,.23,Ae.corner.z,!1),Ae.corner.x),st(J(.8,.4,.45,ne(12603450),Ae.stash.x,.4,Ae.stash.z+.4),Ae.stash.x),st(J(.8,.9,.7,ne(8015920),Ae.bakeryBin.x,.45,Ae.bakeryBin.z+.4),Ae.bakeryBin.x);for(let T=0;T<7;T++)st(Ys(-31+T*5,-20.5+T%2*1.2,.9+T%3*.15),-31+T*5);st(Ys(-28,-9.5,1),-28),st(Ys(-2,-10,.85),-2),st(Ys(4,-18,1.1),4);const c=[14202016,11061464,14735520,12112040,13674688];[[-103,-96],[-94,-88],[-86,-80],[-78,-71]].forEach(([T,U],H)=>{const j=5+H%2*1.5,K=_i(T,U,12,19,j,c[H%c.length],0,"plain"),$=J(U-T+.6,.4,5.4,ne(9062970),(T+U)/2,j+.9,13.8);$.rotation.x=-.45,K.add($),K.add(J(1,2,.1,ne(5913128),(T+U)/2,1,11.95,!1)),K.add(J(U-T,.6,.2,ne(15790320),(T+U)/2,.3,10.5,!1)),r(K,T,U,12,19),st(Ys((T+U)/2+2.4,11,.7),T)}),r(Nr(-67,-55,10,18,6,5937770,3836490,16052456,"CORNER SHOP","#1f6a3a",5),-67,-55,10,18),r(_i(-54,-45,15,23,8,12624e3,6),-54,-45,15,23),r(_i(-44,-37,15,23,10,10127994,1),-44,-37,15,23);const l=[[16736352,16777215],[6332671,16777215],[16760896,16777215],[6344832,16777215]];[-52,-47.5,-43,-38.5].forEach((T,U)=>{const H=new De;H.add(J(3,.9,1.4,ne(10119744),T,.45,12.6));for(let K=0;K<4;K++)H.add(J(.75,.1,1.8,ne(l[U][K%2]),T-1.1+K*.74,2.4,12.4));for(const K of[-1.4,1.4])H.add(J(.08,2.4,.08,ne(4473924),T+K,1.2,11.9,!1));const j=[16728128,16752672,6340672][U%3];H.add(J(2.6,.2,1.1,ne(j),T,1,12.6,!1)),r(H,T-1.5,T+1.5,11.9,13.3)}),r(Nr(37,48,10,18,7,4860506,16728224,2759226,"THE DRUNK DUCK","#a01a6a",2),37,48,10,18),r(_i(49,55,10,20,9,6969962,3),49,55,10,20),r(Nr(56,68,10,18,7,2767450,4235519,1714762,"SPORTS BAR","#1a4aa0",4),56,68,10,18),r(_i(69,72,10,20,8,5917258,0),69,72,10,20),r(Nr(74,84,10,18,7,3820122,14540253,5925498,"ELECTRONICS","#2a3a4a",5),74,84,10,18),r(_i(86,98,10,22,22,9085112,0,"tower"),86,98,10,22),st(vh("OFFICES","#203040",4),92,10).position.set(92,3.4,9.9),r(_i(100,108,10,22,18,8030874,1,"tower"),100,108,10,22);for(const T of Md){const U=Ae[T],H=new En({color:6982399});mg.push(H);const j=new qe(new ls(1.6,1),H);j.position.set(U.x,1.5,9.92),j.rotation.y=Math.PI,st(j,U.x,10),st(J(1.8,1.2,.1,ne(1118481),U.x,1.5,9.98,!1),U.x,10)}e(68,.08,22,5221962,-70,.05,-17),e(64,.09,2,13220239,-70,.06,-16),e(2,.09,20,13220239,-62,.06,-17);const h=Ae.fountain.x,u=Ae.fountain.z,d=ne(13156528),f=new Qn({color:4892904,emissive:1723008,emissiveIntensity:.4}),g=new De,_=new qe(new Si(3.2,3.4,.7,20),d);_.position.set(h,.35,u);const m=new qe(new Si(2.8,2.8,.1,20),f);m.position.set(h,.66,u);const p=new qe(new Si(.35,.5,1.8,10),d);p.position.set(h,1.2,u);const y=new qe(new Si(1.1,.4,.3,14),d);y.position.set(h,2.1,u);const v=new qe(new Si(.12,.3,.9,8),f);v.position.set(h,2.6,u);for(const T of[_,m,p,y,v])T.castShadow=!0,g.add(T);st(g,h,u),Ks(h-3,h+3,u-3,u+3);for(let T=0;T<12;T++){const U=-100+T*5.5+T%3*1.2,H=T%2?-26:-9.5;Math.abs(U-h)<6&&H>-12||st(Ys(U,H,.9+T%3*.15),U,H)}const x=new De;x.add(J(5,2.4,2.2,ne(15790312),-46,1.5,-9.8)),x.add(J(5.02,.5,2.22,ne(14172224),-46,.55,-9.8)),x.add(J(2.4,.9,.1,ne(2236962),-46.4,1.8,-8.68,!1));for(const T of[-47.8,-44.2])x.add(J(.8,.8,2.3,ne(1710618),T,.4,-9.8,!1));const C=vh("HOT FOOD","#c03020",3,.7);C.position.set(-46,3,-8.6),x.add(C),st(x,-46,-9.8),Ks(-48.5,-43.5,-11,-8.7),e(32,.1,18,9079440,56,.06,-15);const A=new De;A.add(J(26,.6,14,ne(6974064),56,3.6,-15.5)),A.add(J(26,3.6,.6,ne(5921376),56,1.8,-22.6));for(const T of[44,50,62,68])A.add(J(.7,3.4,.7,ne(8026752),T,1.7,-9.2));const R=vh("STATION","#1a5a2a",4,.8);R.position.set(56,3.6,-8.6),A.add(R),A.add(J(3,.05,2,ne(10518608),56,.12,-19,!1)),st(A,56,-15),Ks(43,69,-23,-22.3);for(const T of[44,50,62,68])Ks(T-.35,T+.35,-9.55,-8.85);e(36,.12,22,11051152,90,.06,-16);const N=new qe(new ui(60,.3,18),new Qn({color:2779802,emissive:666186,emissiveIntensity:.5}));N.position.set(92,-.4,-37),st(N,92,-37);const S=[];for(let T=74;T<=108;T+=2)S.push([T,.55,-27.8,.12,1,.12]);S.push([91,1.05,-27.8,36,.1,.1]),Fr(3356736,S);const b=new De;b.add(J(5,.5,26,ne(10127994),90,3.4,-34)),b.add(J(.15,.9,26,ne(4473924),87.6,4.1,-34)),b.add(J(.15,.9,26,ne(4473924),92.4,4.1,-34));for(const T of[-22.5,-40]){const U=Co("pillar");if(U){const H=3.2/U.size.y;U.obj.scale.setScalar(H),U.obj.position.set(90,0,T),b.add(U.obj)}else b.add(J(1.2,3.2,1.2,ne(9079434),90,1.6,T))}b.add(J(3,.05,2,ne(10518608),90,.14,-25,!1)),st(b,90,-30),Ks(89.3,90.7,-23.2,-21.8);for(let T=0;T<5;T++)st(Ys(76+T*7.5,-9.5,.85),76+T*7.5,-9.5);for(const T of pa){const U=st(XS(),T.x,T.z);xg.push(U),U.position.set(T.x,0,T.z)}const k=[],V=[];for(const T of f0)k.push([T.x,.5,T.z,.7,1,.7]),V.push([T.x,1.04,T.z,.8,.1,.8]);Fr(3103290,k,!0),Fr(1718820,V);for(let T=-100;T<=104;T+=16){const U=$p(T,4.7,-1);nl.push(U),st(U.g,T),st(U.pool,T)}for(let T=-92;T<=104;T+=16){const U=$p(T,-4.6,1);nl.push(U),st(U.g,T),st(U.pool,T)}sn(qS());for(const T of Ml)for(let U=0;U<6;U++){const H=new De;H.add(J(.22,.18,.32,ne(9079450),0,.12,0,!1)),H.add(J(.12,.12,.12,ne(5925498),0,.26,-.16,!1)),st(H,Ae[T].x,Ae[T].z),Xd.push({m:H,spot:T,a:U/6*Math.PI*2,r:.8+U%3*.5})}for(const T of["store","shop2","truck","dumpster","bin","bin2","bin3","alley","stash","bakeryBin","underpass","bridge","pigeons","pigeons2","tvBar","tvShop","corner","sprinkler"]){const U=Ae[T];NE(T,U.x,U.z,U.r)}}function FE(){pn.build(Nt,nl.map(n=>({x:n.g.position.x,z:n.g.position.z})),(n,e)=>Wd.push({o:n,x:e,z:0})),pn.plats.push({x0:-115,x1:115,z0:4,z1:10,h:.2},{x0:-115,x1:115,z0:-7,z1:-4,h:.2});for(const n of xg){const e=new Ii().setFromObject(n);pn.plats.push({x0:e.min.x,x1:e.max.x,z0:e.min.z,z1:e.max.z,h:Math.min(e.max.y,e.min.y+.58)})}for(let n=0;n<4;n++){const e=new l0(16758880,0,8,1.6);Nt.add(e),yg.push(e)}}let ht,Fu,zr,Ou,Bu;const $d={office:{model:"ped-1",tint:8161960,speed:1.6,shirt:4872826},tourist:{model:"ped-0",tint:16767120,speed:1.1,shirt:16764992},oldlady:{model:"ped-2",tint:13150432,speed:.85,shirt:10518720},party:{model:"ped-1",tint:16744656,speed:1.5,shirt:16728224},jogger:{model:"ped-0",tint:8450208,speed:3.4,shirt:3199088},rich:{model:"ped-2",tint:15781984,speed:1.3,shirt:13676608}},Rn=[];let gg=0,Wt,il;const wt={mode:"patrol",t:0,dir:1,side:6.5};let _n;const Zs={tx:8,tz:14,wait:0},bi=[],dm=[13643824,3174608,15263976,3186768,14721056,9059024],bh=[1,2.5];function OE(){ht.g.scale.set(1.14,1.04,1.14),ht.body.traverse(r=>{const o=r;if(o.isMesh&&o.material){const a=o.material.clone();a.emissive=new Te(3808264),a.emissiveIntensity=.35,o.material=a}if(r.isBone){const a=r.name.toLowerCase();a.includes("head")?Qi.head=r:a.includes("arm")&&a.includes("left")?Qi.armL=r:a.includes("arm")&&a.includes("right")&&(Qi.armR=r)}});const n=Qi.head??ht.body,e=!!Qi.head,t=J(.62,.26,.62,ne(14721056),0,e?.52:1.68,0);if(t.add(J(.16,.12,.16,ne(14174778),0,.18,0)),n.add(t),e){ht.g.updateMatrixWorld(!0);const r=new D;n.getWorldScale(r),t.scale.setScalar(1/r.x),t.position.y=.58/r.y}const i=J(.05,.05,1.3,ne(8015920),.3,1,.25);i.rotation.x=-.7;const s=J(.38,.34,.38,ne(14174778),0,0,.6);i.add(s),ht.body.add(i)}function BE(){ht=sa(12084266,4868690,{hat:3828362,skin:13145450,model:"man"}),OE(),sn(ht.g),Fu=J(.85,.8,.22,ne(10104880),0,1.1,.3),zr=new De,zr.add(J(.28,.08,1.1,ne(2276266),0,.1,0)),zr.add(J(.06,1,.06,ne(3355443),0,.6,-.5)),zr.add(J(.5,.06,.06,ne(3355443),0,1.1,-.5)),Ou=J(.6,.4,.04,ne(13148256),.25,.9,-.3,!1),Bu=J(.36,.08,.06,ne(328965),0,1.5,-.2,!1),ht.body.add(Fu,zr,Ou,Bu);for(const n of wu)for(let e=0;e<3;e++){const t=$d[n],i=sa(t.shirt,3355460,{hair:[2759184,13672512,14540253][e%3],model:t.model,tint:t.tint});i.g.visible=!1,sn(i.g),Rn.push({p:i,kind:n,active:!1,dir:1,speed:t.speed,wet:0,asks:0,talkT:0,mad:0,id:0})}Wt=sa(1714810,1317440,{hat:1118515,model:"cop",tint:6979800}),il=new Qn({color:2236962,emissive:16719904,emissiveIntensity:0}),Wt.body.add(J(.22,.14,.22,il,0,2.2,0,!1)),sn(Wt.g),_n=sn($S()),_n.position.set(10,0,15)}let _a=[];function _g(){for(const n of _a)Nt.remove(n);_a=L.draw.bottleSpots.map((n,e)=>{const t=Z0(),i=wd[n];return t.position.set(i.x,.3,i.z),t.visible=L.bottlesLeft[e],sn(t)})}let Mh=[];function zE(){for(const e of Mh)Nt.remove(e);Mh=[];const n=Jt.get("lastDeath",null);n&&(Mh=[sn(J(1.4,.15,.8,ne(5592405),n.x,.15,n.z)),DE(`A man fell here. Day ${n.day}.`,n.x,1.4,n.z,.7)])}const Lc=[];function HE(n){const e=n.clone();e.position.copy(n.position),sn(e),Lc.push({o:e,t:0})}let L;const pn=new MT,Ut=_T();let Rl=!1,Pc=0,Hr=0,kc=0,wh=0,Jo={x:0,z:0},Pi=null;const xg=[],fm=new Map,yg=[],ca=[],GE=new ui(.14,.14,.14),pm=new Map;function sl(n,e,t,i,s=10,r=4){for(let o=0;o<s;o++){const a=i[o%i.length];let c=pm.get(a);c||(c=new En({color:a}),pm.set(a,c));const l=new qe(GE,c);l.position.set(n,e,t),Nt.add(l),ca.push({m:l,vx:(Math.random()-.5)*5,vy:r*(.5+Math.random()),vz:(Math.random()-.5)*5,t:0})}}let Qi={},xn=!1,Hn=!1,Y=0,ee=0,si=0,Sh=0,yi=0,rl=1,ot=0,zu=0,mt=0,mm=0,Ds=!1,Mi=0,Dc=0,ir=0,Nc=0,xa=0,Ss=0,Gr=0,Uc=0;const Ts={x:0,z:0};let gc=0,Fc=0,Oc=0,Bc=100,Th=0,Eh=0,Ah=0,Rh=0,Yr="go",Tt=null,On=null,Ch=0,ci=0,Os=1;const ol={min:.5,max:1.8};function jd(){ci=0,Os=1}const Hu=new Set(Jt.get("book",[])),rt={fx:0,fz:0,dist:12,vx:0,vz:0,roll:0},Ye=n=>document.getElementById(n),hs=Ye("screen"),es=Ye("fade");function vg(n,e,t,i){L=n,Y=e,ee=t,si=i,Mi=0,Dc=0,rt.fx=Y,rt.fz=ee,rt.dist=12,jd(),ht.g.position.set(Y,0,ee),wt.mode="patrol",Wt.g.position.set(Y+30,0,6.5),Ng();for(const s of bi)Nt.remove(s.m.g);bi.length=0;for(const s of Rn)s.active=!1,s.p.g.visible=!1;zu=0,ir=Nc=xa=Ss=0,Ts.x=Ts.z=0,Tt=null,On=null,Ye("shopPanel").classList.add("hidden"),Fc=L.money,Oc=L.whimsy,Bc=L.health,zE(),hs.classList.add("hidden"),es.style.transition="none",es.style.opacity="0",xn=!0,Hn=!1,jn="",Xu=""}function al(n){Jt.del("life"),vg(Ld(n.trim().toUpperCase()||Id(),Jt.get("stash",null)),-20,6,0),Bt(`Day 1. ${G0(L.draw.weather)}`);const e=pE(L,Jt.get("dogMem",null));e&&hr(4,()=>Bt(e)),Bs()}function bg(){const n=V0(Jt.raw("life"));return n?(vg(n.s,n.px,n.pz,n.face),Bt(`Day ${L.day}. Welcome back.`),!0):!1}function Bs(){if(!xn||!L||L.dead)return;const n=nS(L,Y,ee,si);n&&Jt.setRaw("life",n)}function Mg(){return"<b>Whimsy book</b><br>"+P0.map(n=>Hu.has(n)?wl[n].name:"???").join("<br>")}function qd(){xn=!1,Hn=!1;const n=V0(Jt.raw("life"));hs.classList.remove("hidden"),hs.innerHTML=`
    <h1>Street</h1>
    <div style="opacity:.8">Hustle sober. Get high. Have fun. Don't die.</div>
    ${n?`<button id="cont" class="go">Continue · day ${n.s.day}</button>`:""}
    <div>Seed <input id="seed" value="${Id()}" autocapitalize="characters"></div>
    <button id="go" class="${n?"alt":"go"}">${n?"New life":"Start a life"}</button>
    <div style="font-size:12px;opacity:.6">Same seed, same draw. Keys: WASD, E act, 1-6, Q drink, V view, P pause.</div>
    <div id="book">${Mg()}</div>`,n&&(Ye("cont").onclick=()=>{bg()||qd()}),Ye("go").onclick=()=>al(Ye("seed").value)}function Cl(){!xn||Hn||(Hn=!0,Bs(),hs.classList.remove("hidden"),hs.innerHTML=`
    <h1>Paused</h1>
    <div style="opacity:.75">Day ${L.day}. His life is saved.</div>
    <button id="resume" class="go">Resume</button>
    <button id="snd" class="alt">${uc()?"Sound: off":"Sound: on"}</button>
    <button id="quit" class="alt">Back to start</button>`,Ye("resume").onclick=Yd,Ye("snd").onclick=()=>{ng(!uc()),Jt.set("muted",uc()),Ye("snd").textContent=uc()?"Sound: off":"Sound: on"},Ye("quit").onclick=()=>{Bs(),qd()})}function Yd(){Hn&&(Hn=!1,hs.classList.add("hidden"),ul=performance.now())}function VE(){xn=!1,Jt.del("life");for(const e of L.discovered)Hu.add(e);Jt.set("book",[...Hu]),Jt.set("lastDeath",{x:Y,z:ee,day:L.day}),Jt.set("stash",L.stash),Jt.set("dogMem",fE(L)),is(ht,"die",!0),Ca();const n=L.dead==="gaveup";es.style.transition=`opacity ${n?3:1}s`,es.style.opacity="1",setTimeout(()=>{hs.classList.remove("hidden"),hs.innerHTML=`
      <h1>This is how he died</h1>
      <div style="font-size:20px">${Bw[L.dead]}</div>
      <div>Days survived: ${L.day}<br>Best whimsy: ${Math.round(L.bestWhimsy)}<br>People who gave: ${L.gives}<br>Seed: ${L.seed}</div>
      <button id="again" class="go">A new life</button>
      <button id="same" class="alt">Same seed again</button>
      <div id="book">${Mg()}</div>`,Ye("again").onclick=()=>al(Id()),Ye("same").onclick=()=>al(L.seed)},n?3200:1200)}document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){if(Bs(),ga.has("nopause"))return;Cl(),lT()}});window.addEventListener("pagehide",Bs);ng(Jt.get("muted",!1));const Kd=()=>cT();window.addEventListener("pointerdown",Kd,{capture:!0});window.addEventListener("touchend",Kd,{capture:!0});window.addEventListener("keydown",Kd,{capture:!0});const Dn=new Set,li={x:0,y:0,id:-1};window.addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(Dn.add(e),!!xn){if(On){(e==="escape"||e==="e")&&Ca();return}if((e==="p"||e==="escape")&&(Hn?Yd():Cl()),!Hn&&(e==="e"&&cl(0),e>="1"&&e<="7"&&cl(Number(e)-1),e==="q"&&ef(),e==="v"&&(Ds=!Ds),(e===" "||e==="j")&&Nd(Ut),e==="f")){const t=pn.nearest(Y,ee);t&&Jd(t)}}});window.addEventListener("keyup",n=>Dn.delete(n.key.toLowerCase()));window.addEventListener("blur",()=>Dn.clear());const Mo=Ye("stick"),wg=Ye("knob");Mo.addEventListener("pointerdown",n=>{li.id=n.pointerId,Mo.setPointerCapture(n.pointerId),Tg(n)});Mo.addEventListener("pointermove",n=>{n.pointerId===li.id&&Tg(n)});const Sg=n=>{n.pointerId===li.id&&(li.id=-1,li.x=0,li.y=0,wg.style.transform="")};Mo.addEventListener("pointerup",Sg);Mo.addEventListener("pointercancel",Sg);function Tg(n){const e=Mo.getBoundingClientRect();let t=(n.clientX-(e.left+e.width/2))/55,i=(n.clientY-(e.top+e.height/2))/55;const s=Math.hypot(t,i);s>1&&(t/=s,i/=s),li.x=t,li.y=i,wg.style.transform=`translate(${t*40}px, ${i*40}px)`}const Xn=(n,e,t="")=>`<svg viewBox="0 0 24 24" fill="${e}" ${t}><path d="${n}"/></svg>`,mn={heart:"M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.6 4.5c2.2 0 3.6 1.2 5.4 3.3 1.8-2.1 3.2-3.3 5.4-3.3 3.6 0 5.7 3.8 4.2 7.2C19.5 16.4 12 21 12 21z",bolt:"M13.5 1.5 4 13.5h6.5L9 22.5l10-13h-6.8z",bottle:"M9.5 1.5h5v4l2 3.5v12.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V9l2-3.5z",star:"M12 1.5l2.6 7.6 7.9.4-6.2 5 2.1 7.8L12 17.8l-6.4 4.5 2.1-7.8-6.2-5 7.9-.4z",food:"M12 7.5c-1.2-1.8-3.2-2.6-5.2-2C3.6 6.4 2.6 10 3.6 13.6 4.7 17.7 7.4 21.5 9.6 21.5c1 0 1.5-.5 2.4-.5s1.4.5 2.4.5c2.2 0 4.9-3.8 6-7.9 1-3.6 0-7.2-3.2-8.1-2-.6-4 .2-5.2 2zM12 7.5c0-2.3 1-4.3 3.2-5.5",coin:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.9 15.6V19h-1.8v-1.4c-1.6-.2-2.9-1.1-3-2.8h1.8c.1.9.8 1.4 2 1.4 1.3 0 1.9-.6 1.9-1.3 0-.8-.6-1.1-2.1-1.5-1.9-.4-3.3-1-3.3-2.8 0-1.4 1.1-2.4 2.7-2.7V6.5h1.8v1.4c1.6.3 2.6 1.3 2.7 2.7h-1.8c-.1-.8-.7-1.3-1.8-1.3-1.1 0-1.7.5-1.7 1.2 0 .7.6 1 2.1 1.4 1.9.5 3.3 1.1 3.3 2.9 0 1.5-1.1 2.5-2.8 2.8z",pause:"M6 4h4.5v16H6zM13.5 4H18v16h-4.5z",eye:"M12 5C6.5 5 2.7 9.2 1.5 12c1.2 2.8 5 7 10.5 7s9.3-4.2 10.5-7C21.3 9.2 17.5 5 12 5zm0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2.3a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z",sunI:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM11 1h2v3h-2zm0 19h2v3h-2zM1 11h3v2H1zm19 0h3v2h-3z",cloud:"M6.5 19a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 17.5 9 5 5 0 0 1 17.5 19zM8 20.5l-1 2.5M12 20.5l-1 2.5M16 20.5l-1 2.5",snow:"M11 1h2v22h-2zM1 11h22v2H1zM4.2 5.6l1.4-1.4 14.2 14.2-1.4 1.4zM18.4 4.2l1.4 1.4L5.6 19.8l-1.4-1.4z",blanket:"M3 6h18v12H3zM3 10h18M3 14h18",scooter:"M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5 17h14l-3-12h3"};Ye("pauseBtn").innerHTML=Xn(mn.pause,"#fff",'width="20" height="20"');Ye("viewBtn").innerHTML=Xn(mn.eye,"#fff",'width="22" height="22"');Ye("pauseBtn").addEventListener("pointerdown",n=>{n.preventDefault(),ke("tap"),Cl()});Ye("centerBtn").innerHTML=Xn("M12 2v4M12 18v4M2 12h4M18 12h4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z","none",'stroke="#fff" stroke-width="2" width="22" height="22"');Ye("centerBtn").addEventListener("pointerdown",n=>{n.preventDefault(),ke("tap"),jd()});const Ns=new Map;let sr=null;const Aa=An.domElement,Eg=()=>{const[n,e]=[...Ns.values()];return{d:Math.hypot(e.x-n.x,e.y-n.y),a:Math.atan2(e.y-n.y,e.x-n.x)}};Aa.addEventListener("pointerdown",n=>{Ns.set(n.pointerId,{x:n.clientX,y:n.clientY}),Ns.size===2&&(sr={...Eg(),zoom:Os,yaw:ci})});Aa.addEventListener("pointermove",n=>{const e=Ns.get(n.pointerId);if(n.pointerType==="mouse"&&n.buttons&2&&e&&(ci-=(n.clientX-e.x)*.008),e&&Ns.set(n.pointerId,{x:n.clientX,y:n.clientY}),sr&&Ns.size===2){const t=Eg();Os=nn(sr.zoom*(sr.d/Math.max(20,t.d)),ol.min,ol.max),ci=sr.yaw-Wr(t.a-sr.a)}});const Ag=n=>{Ns.delete(n.pointerId),Ns.size<2&&(sr=null)};Aa.addEventListener("pointerup",Ag);Aa.addEventListener("pointercancel",Ag);Aa.addEventListener("contextmenu",n=>n.preventDefault());window.addEventListener("wheel",n=>{Os=nn(Os*Math.exp(n.deltaY*.001),ol.min,ol.max)},{passive:!0});Ye("viewBtn").addEventListener("pointerdown",n=>{n.preventDefault(),ke("tap"),Ds=!Ds});const so=[];function Gu(n,e,t,i=2.6){for(const r of so)r.el.dataset.cls===t&&(r.t=Math.min(r.t,.15));const s=document.createElement("div");s.className="bubble "+t,s.dataset.cls=t,s.textContent=n,Ye("bubbles").appendChild(s),so.push({el:s,at:e,t:i})}const WE=new D;function Rg(n){for(let e=so.length-1;e>=0;e--){const t=so[e];t.t-=n;const i=WE.copy(t.at()).project($e),s=i.z>1||t.t<=0;if(t.t<=0){t.el.remove(),so.splice(e,1);continue}t.el.style.display=s?"none":"",t.el.style.left=(i.x+1)/2*window.innerWidth+"px",t.el.style.top=(1-i.y)/2*window.innerHeight+"px",t.el.style.opacity=String(nn(t.t*3))}}const Zd=n=>n[Math.floor(Math.random()*n.length)];let Ra=[],jn="";const zc=Ye("acts"),Vr=Ye("drinkBtn");Vr.addEventListener("pointerdown",n=>{n.preventDefault(),ef()});const XE=Ye("jumpBtn"),ro=Ye("runBtn");XE.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Nd(Ut)});ro.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Rl=!0,ro.classList.add("on"),ro.setPointerCapture(n.pointerId)});const Cg=()=>{Rl=!1,ro.classList.remove("on")};ro.addEventListener("pointerup",Cg);ro.addEventListener("pointercancel",Cg);function Lo(n){let e=null,t=n;for(const i of Rn){if(!i.active||i.mad>0||i.asks>2)continue;const s=Math.hypot(i.p.g.position.x-Y,i.p.g.position.z-ee);s<t&&(t=s,e=i)}return e}function us(){const n=Rn.some(i=>i.active&&Math.hypot(i.p.g.position.x-Ae.sprinkler.x,i.p.g.position.z-Ae.sprinkler.z)<9),e=Math.hypot(_n.position.x-Y,_n.position.z-ee)<2.2,t=Tt??Lo(2.8);return{x:Y,z:ee,pedNear:n,catNear:e,ped:t?{kind:t.kind,asks:t.asks}:void 0}}const $E={spray:"Spray!",cat:"Pet cat",dance:"Dance!",snack:"Snatch snack",bench:"Sing!"};function jE(n){if(n.whimsy)return $E[n.id.slice(7)];if(n.id.startsWith("trash:"))return"Dig trash";if(n.id.startsWith("enter:"))return"Go in: "+u0[n.id.slice(6)];switch(n.id){case"beg":return"Ask · "+wa[us().ped.kind].name;case"pickup":return"Grab";case"recycle":return`Recycle +$${L.bottles}`;case"dumpster":return"Dig";case"bakeryBin":return"Bakery bin";case"mix":return"Mix";case"sleep":return"Sleep";case"sit":return"Sit";case"stand":return"Get up";case"pigeons":return"Feed pigeons";case"tv":return"Watch TV";case"smoke":return"Smoke";case"stashPut":return"Hide "+n.label.split(" ")[1];case"stashTake":return"Take "+n.label.split(" ")[1]}return n.label}function $n(n,e,t){const i=document.createElement("div");i.className="act "+e,i.textContent=n,i.addEventListener("pointerdown",s=>{s.preventDefault(),t()}),zc.prepend(i)}function qE(){var e;const n=H0(L);if(Tt){const t=Sl(L,us()),i="beg"+t.join("|");i!==jn&&(jn=i,zc.innerHTML="",t.forEach((s,r)=>$n(p0[s].label+gA[Tt&&yw(L,Tt.kind,s)||"none"],"line"+(r===0?" first":""),()=>Qd(s))),$n("Leave","line dim",()=>wo()))}else if(fn!=null&&fn.fighting){const t=fn.key(L);t!==jn&&(jn=t,zc.innerHTML="",fn.pills(L,$n))}else{const t=Ra.slice(0,5),i=pn.nearest(Y,ee),s=yn==null?void 0:yn.near(Y,ee),r=t.map(o=>o.id+o.label).join("|")+(n??"")+(n?L.drinks[n]:"")+L.bottles+(((e=us().ped)==null?void 0:e.kind)??"")+(i?"t"+i.id:"")+(s?s.id+zn(L,s.id):"")+(rn&&Math.hypot(Y-rn.x,ee-rn.z)<3.5?"ev":"")+(Ke(L).secretSpot&&Math.hypot(Y-bo.x,ee-bo.z)<3?"sec":"")+(fn?fn.key(L):"");r!==jn&&(jn=r,zc.innerHTML="",i&&$n(vT[i.kind],"whimsy poke",()=>Jd(i)),dA(),fn==null||fn.pills(L,$n),t.forEach((o,a)=>$n(jE(o),(a===0?"first":"")+(o.whimsy?" whimsy":"")+(o.id==="beg"?" beg":""),()=>cl(a))))}if(Vr.classList.toggle("hidden",!n),n){const t="round"+(n==="mix"?" mix":n==="wine"?" wine":"");Vr.className!==t&&(Vr.className=t);const i=L.drinks.beer+L.drinks.vodka+L.drinks.wine+L.drinks.mix,s=Xn(mn.bottle,n==="vodka"?"#e8f4ff":n==="mix"?"#fff":n==="wine"?"#8a1a3a":"#5a3a10")+`<div class="badge">${i}</div>`;Vr.innerHTML!==s&&(Vr.innerHTML=s)}}function YE(n){n==="jump"?(ke("pop",{pitch:1.4,vol:.5}),is(ht,"jump"),Us(-.25)):n==="land"?(Us(.3),ke("step",{vol:.8,pitch:.7})):n==="puff"||n==="climb"?(sl(Y,Ut.y+.1,ee,[15130064,13220008],6,1.5),n==="climb"&&ke("tap")):n==="roll"?(ke("pop",{pitch:.7}),Bt("Stumble-roll!")):n==="slide"?(ke("tap",{pitch:.6}),sl(Y,.3,ee,[9413557],5,1)):n==="trip"&&(ke("nope"),Bt(Zd(["Whoops. Down he goes.","The ground came up fast.","A nap? Sure."])),Us(.45))}function Jd(n){const e=L.day+":"+n.id,t=fm.get(e);if(t!==void 0&&mt-t<3)return;const i=bT(n.kind,{high:Fi(L),night:ds(L),usedToday:t!==void 0},Math.random());fm.set(e,mt),i.money&&(L.money+=i.money),i.whimsy&&(L.whimsy=Math.min(100,L.whimsy+i.whimsy)),i.health&&(L.health=nn(L.health+i.health,0,100)),i.trouble&&(L.copAlert=!0),i.wet&&(Pc=20),ke(i.sound),Bt(i.say),i.anim&&is(ht,i.anim);const s={litter:[15130064,9075290,12043442],feathers:[14540253,9080728],notes:[2759188,16735370],paint:[16735370,3526842,16758784,7097343],splash:[9425151,16777215],bus:[9425151,6981800]};if(i.fx&&s[i.fx]&&sl(n.x,.8,n.z,s[i.fx],i.fx==="splash"||i.fx==="bus"?16:10,5),i.fx==="spin"&&(Hr=1.3,Jo={x:n.x,z:n.z}),i.fx==="ride"&&(Pi=pn.trolleys.find(r=>r.thing===n)??null,kc=3,si=Math.atan2(n.x-Y,n.z-ee)+Math.PI),n.kind==="pigeons")for(const r of Xd)Math.hypot(r.m.position.x-n.x,r.m.position.z-n.z)<5&&sl(r.m.position.x,.5,r.m.position.z,[9080728],3,6);i.anim==="sit"&&(L.sitting=!0),kg("whimsy")}function Us(n=.35){Gr=-n,Uc=0}function cl(n){if(!xn||Hn||On)return;if(Tt){const s=Sl(L,us());n<s.length?Qd(s[n]):wo();return}const e=Ra[n];if(!e)return;const t=us();if(!Ww(L,e.id,t)){ke("nope");return}if(Us(),e.id==="beg"){JE();return}if(e.id.startsWith("enter:")){ya(e.id.slice(6));return}if(/^own:(craft|pawn|books|steal:)/.test(e.id)){ya(e.id.slice(4));return}if(e.id.startsWith("own:")&&(ke("pop",{pitch:1.3}),e.id.startsWith("own:grab")&&is(ht,"pick-up")),e.whimsy&&(yi=2.2,rl=-rl,ke("sparkle"),is(ht,"emote-yes"),e.id.slice(7)==="spray")){let r=null,o=99;for(const a of Rn){if(!a.active)continue;const c=Math.hypot(a.p.g.position.x-Ae.sprinkler.x,a.p.g.position.z-Ae.sprinkler.z);c<o&&(o=c,r=a)}r&&(r.wet=3,Gu(Zd(["AAH!","My suit!","Hey!!"]),Ig(r.p),"them"))}e.id==="pickup"&&(_a.forEach((s,r)=>{s.visible&&!L.bottlesLeft[r]&&(HE(s),s.visible=!1)}),ke("clink"),ke("pop",{pitch:1.2}),is(ht,"pick-up")),e.id==="recycle"&&(ke("clink",{pitch:.9}),ke("clink",{pitch:1.15})),(e.id==="dumpster"||e.id.startsWith("trash:")||e.id==="bakeryBin")&&(ke("pop",{pitch:.7}),is(ht,"pick-up")),e.id==="mix"&&ke("clink"),e.id==="pigeons"&&(Ic[Ml.find(s=>Math.hypot(Ae[s].x-Y,Ae[s].z-ee)<4)??"pigeons"]=8,ke("sparkle",{pitch:1.4})),(e.id==="tv"||e.id==="smoke")&&ke("pop",{pitch:.6}),e.id==="sit"&&eA(),(e.id==="stashPut"||e.id==="stashTake")&&(Jt.set("stash",L.stash),ke("pop")),e.id==="sleep"&&(tA(),Bs())}const Ig=n=>()=>KE.set(n.g.position.x,2.5,n.g.position.z),KE=new D,ZE=()=>new D(Y,3.3,ee);function JE(){const n=Lo(2.8);n&&(Tt=n,n.talkT=8,L.sitting=!1,jn="")}function wo(){Tt&&(Tt.talkT=Math.min(Tt.talkT,.6)),Tt=null,jn=""}function Qd(n){const e=Tt;if(!e)return;const t=us(),i=L.money,s=Xw(L,t,n);if(!s){ke("nope");return}e.asks++,L.copAlert=!1,Gu(Zd(p0[n].say),ZE,"me",2.2),is(ht,"emote-yes");const r=s.outcome==="angry"||s.outcome==="hate";s.outcome==="hate"&&Sa(L,en(Y,ee),"fight"),s.outcome==="give"&&fn.begBonus(L,s.money??0),hr(.65,()=>{Gu(s.reply,Ig(e.p),r?"them mad":s.outcome==="give"?"them give":"them",2.8),s.outcome==="give"?(is(e.p,"emote-yes"),L.money===i&&ke("pop",{pitch:1.3})):s.laughed?ke("sparkle",{pitch:1.6}):ke("nope",{vol:.5}),s.callCop&&Lg()}),r?(e.mad=6,e.talkT=0,e.dir=Math.sign(e.p.g.position.x-Y)||1):e.talkT=1.6,Tt=null,jn=""}const Qo=[];function hr(n,e){Qo.push({t:n,fn:e})}function QE(n){for(let e=Qo.length-1;e>=0;e--)if((Qo[e].t-=n)<=0){const t=Qo[e].fn;Qo.splice(e,1),t()}}function Lg(){Bt("Someone called the cop!"),ke("whistle");const n=Wt.g.position;Math.hypot(n.x-Y,n.z-ee)>40&&n.set(Y+(Math.random()<.5?-34:34),0,ee>0?6.5:-5.5),wt.mode="chase",wt.t=0}function eA(){let n=pa[0],e=1e9;for(const t of pa){const i=Math.hypot(t.x-Y,t.z-ee);i<e&&(e=i,n=t)}Y=n.x,ee=n.z+.15,si=Math.PI}function ef(){!xn||Hn||On||($w(L)?(ke("gulp"),Us(.25)):ke("nope"))}function tA(){es.style.transition="none",es.style.opacity="1",es.offsetWidth,es.style.transition="opacity 1.5s",es.style.opacity="0"}const or=Ye("shopPanel");function ya(n){On=n,wo(),ke("pop",{pitch:.8}),ll(),or.classList.remove("hidden")}function Ca(){On=null,or.classList.add("hidden"),ul=performance.now()}function ll(){if(!On)return;if(nT(On)){aT(or,On,L,_A);return}const n=On,e={liquor:'"The usual?"',corner:'"No loitering. Unless you buy."',truck:'"Hot and fresh, friend."'};or.innerHTML=`<div class="shead"><b>${u0[n]}</b><span class="smoney">${Xn(mn.coin,"#ffd84a")}${L.money}</span></div>
    <div class="sgreet">${e[n]}</div><div class="slist"></div><button class="sclose">Leave</button>`;const t=or.querySelector(".slist");for(const i of g0[n]){const s=m0[i],r=document.createElement("div"),o=i==="lighter"&&L.items.lighter||i==="sign"&&L.items.sign||i==="shades"&&L.items.shades||i==="goodBlanket"&&L.items.goodBlanket||i==="jokebook"&&L.items.jokebook;r.className="srow"+(L.money<s.price||o?" poor":""),r.innerHTML=`<div><div class="sname">${s.name}</div><div class="snote">${o?"Got it.":s.note}</div></div><div class="sbuy">$${s.price}</div>`,r.addEventListener("pointerdown",a=>{a.preventDefault();const c=L.money;z0(L,n,i,{x:Y,z:ee})?(ke(i==="beer"||i==="vodka"||i==="wine"?"clink":i==="scratch"&&L.money>c-s.price?"sparkle":"pop"),Us(.2)):ke("nope"),Il(),ll()}),t.appendChild(r)}or.querySelector(".sclose").addEventListener("pointerdown",i=>{i.preventDefault(),Ca()})}const Pg=[{k:"health",icon:mn.heart,col:"#ff4d5e",low:n=>n<30},{k:"withdrawal",icon:mn.bolt,col:"#a6e04a",low:n=>n>75},{k:"buzz",icon:mn.bottle,col:"#ffb02e",low:()=>!1},{k:"whimsy",icon:mn.star,col:"#ff6ad5",low:n=>n<25},{k:"hunger",icon:mn.food,col:"#ff9a4a",low:n=>n<20}];Ye("meters").innerHTML=Pg.map(n=>`<div class="meter" id="m_${n.k}"><div class="ic">${Xn(n.icon,n.col)}</div><div class="track"><div class="fill" id="f_${n.k}" style="background:${n.col}"></div></div></div>`).join("");const nA=Ye("chips"),Vu=Ye("toast"),Ih=Ye("sun"),iA=Ye("sky"),sA=Ye("goals");let Wu=0,gm="",Xu="";function Bt(n){Vu.textContent=n,Vu.classList.add("on"),Wu=2.4}function Hc(n,e,t,i,s){const r=new D(t,i,s).project($e);if(r.z>1)return;const o=document.createElement("div");o.className="float",o.textContent=n,o.style.color=e,o.style.left=(r.x+1)/2*window.innerWidth+"px",o.style.top=(1-r.y)/2*window.innerHeight+"px",document.body.appendChild(o),setTimeout(()=>o.remove(),1150)}function kg(n){const e=document.getElementById(n);e&&(e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump"))}function rA(n){for(const a of Pg){const c=L[a.k];Ye("f_"+a.k).style.width=c+"%",Ye("m_"+a.k).classList.toggle("low",a.low(c))}Ye("dayno").textContent="D"+L.day;const e=fr(L);Ih.style.left=e*100+"%",Ih.style.top=4+(1-Math.sin(Math.PI*Math.min(1,e/yt.nightAt)))*16+"px",Ih.classList.toggle("moon",ds(L)),iA.classList.toggle("late",e>.9);const t=L.draw.weather,i=t==="mild"?Xn(mn.sunI,"#ffd84a"):t==="rain"?Xn(mn.cloud,"#bcd",'stroke="#bcd" stroke-width="1.5"'):Xn(mn.snow,"#cfe6ff"),s=L.items,r=`${L.money}|${L.bottles}|${t}|${JSON.stringify(s)}|${L.inv.cigs}`;r!==gm&&(gm=r,nA.innerHTML=`<div class="chip" id="c_money">${Xn(mn.coin,"#ffd84a")}${L.money}</div><div class="chip" id="c_bottles">${Xn(mn.bottle,"#3fd060")}${L.bottles}</div><div class="chip">${i}</div>`+(s.blanket||s.goodBlanket?`<div class="chip">${Xn(mn.blanket,s.goodBlanket?"#e0a040":"#e06060",'stroke="#fff" stroke-width=".8"')}</div>`:"")+(s.scooter?`<div class="chip">${Xn(mn.scooter,"none",'stroke="#3fd0c0" stroke-width="2"')}</div>`:"")+(s.jokebook?'<div class="chip txt">Jokes</div>':"")+(s.sign?'<div class="chip txt">Sign</div>':"")+(s.shades?'<div class="chip txt">Shades</div>':"")+(L.inv.cigs>0?`<div class="chip txt">Smokes ${L.inv.cigs}</div>`:""));const o=JSON.stringify(L.goals);o!==Xu&&(Xu=o,sA.innerHTML=L.goals.map(a=>{const c=Sd[a.id],l=c.n>1&&!a.done?` ${Math.min(a.got,c.n)}/${c.n}`:"";return`<div class="goal${a.done?" done":""}"><span class="box">${a.done?"✓":""}</span>${c.text}${l}</div>`}).join("")),L.money>Fc&&(Hc("+$"+(L.money-Fc),"#ffd84a",Y,2.4,ee),ke("coin"),kg("c_money")),L.whimsy>Oc+.5&&Hc("+"+Math.round(L.whimsy-Oc),"#ff8ae0",Y+.6,2.9,ee),L.health<Bc-5&&Hc("-"+Math.round(Bc-L.health),"#ff4d5e",Y-.6,2.6,ee),Fc=L.money,Oc=L.whimsy,Bc=L.health,Il(),Wu-=n,Wu<=0&&Vu.classList.remove("on")}function oA(){for(const n of dg)if(Y>n.x0-.45&&Y<n.x1+.45&&ee>n.z0-.45&&ee<n.z1+.45){const t=Y-(n.x0-.45),i=n.x1+.45-Y,s=ee-(n.z0-.45),r=n.z1+.45-ee,o=Math.min(t,i,s,r);o===t?Y=n.x0-.45:o===i?Y=n.x1+.45:o===s?ee=n.z0-.45:ee=n.z1+.45}Y=Math.max(cc.minX,Math.min(cc.maxX,Y)),ee=Math.max(cc.minZ,Math.min(cc.maxZ,ee))}const Wr=n=>Math.atan2(Math.sin(n),Math.cos(n)),aA=new D,Dg={beer:{sway:.35,roll:.03,orbit:.12,breathe:0},vodka:{sway:1.1,roll:.1,orbit:.3,breathe:.025},wine:{sway:.25,roll:.025,orbit:.16,breathe:.04},mix:{sway:.1,roll:.015,orbit:.22,breathe:.07}},tn={soberDist:12,soberPitch:.86,highDist:9.5,highPitch:.36,highAhead:2,aheadSecs:.6,aheadMax:3.2,roadPull:1.15,runPull:1.12,talkPush:.85,leanTalk:.45,leanDoor:.3};function cA(n,e){const t=fr(L),i=en(Y,ee),r=Math.max(3,Math.round((ai===0?6:ai===1?9:12)*Ma[i].busy(t)));Ah-=e;const o=Rn.filter(a=>a.active);if(Ah<=0&&o.length<r){Ah=.35;const a=ZM.filter(c=>c.x0<Y+40&&c.x1>Y-40&&Math.abs(c.z-ee)<30);if(a.length){const c=a[Math.floor(Math.random()*a.length)],l=Math.random()<.5?-1:1,h=nn(Y+l*(26+Math.random()*12),c.x0,c.x1);if(Math.abs(h-Y)>18){const u=$M(en(h,c.z),Math.random()),d=Rn.find(f=>!f.active&&f.kind===u)??Rn.find(f=>!f.active);d&&(d.active=!0,d.p.g.visible=!0,d.asks=0,d.mad=0,d.talkT=0,d.wet=0,d.id=++gg,d.dir=Math.random()<.7?-l:l,d.speed=$d[d.kind].speed*(.85+Math.random()*.3),d.p.g.position.set(h,0,c.z+(Math.random()-.5)*.6))}}}for(const a of Rn){if(!a.active)continue;const c=a.p.g.position;let l=a.wet>0?a.speed*3:a.mad>0?a.speed*1.8:a.speed;a.wet=Math.max(0,a.wet-n),a.mad=Math.max(0,a.mad-n),a.talkT>0||Tt===a?(a.talkT-=n,l=0,a.p.g.rotation.y=Math.atan2(Y-c.x,ee-c.z)+Math.PI):(c.x+=a.dir*l*n,a.p.g.rotation.y=a.dir>0?-Math.PI/2:Math.PI/2),yo(a.p,l,n),a.wet>0&&(a.p.body.position.y=Math.abs(Math.sin(mt*12))*.3),(Math.abs(c.x-Y)>46||c.x<-106||c.x>108)&&(a.active=!1,a.p.g.visible=!1,Tt===a&&wo())}Tt&&Math.hypot(Tt.p.g.position.x-Y,Tt.p.g.position.z-ee)>4.5&&wo()}let yn,fn,rn,lA=0,$u=!1,_m="";function Ng(){yn||(yn=new nE(Nt,(n,e)=>{const t=$d[n];return sa(t.shirt,3814464,{hair:2759184,model:t.model,tint:e})})),rn=JT(L.seed,L.day),yn.setEvent(rn)}function hA(){Ng();const n=Ke(L);n.day.cool!==L.day&&(n.day.cool=L.day,L.day>1&&(WT(L),hE(L)),$u&&($u=!1,Sa(L,en(Y,ee),"passout")),zd(L)?hr(2,()=>Bt(`Kobi sees ${In(L).dog.name} and leaves your bottles alone.`)):CT(L),hr(2.8,()=>Bt(`${rn.icon} ${rn.text}`)))}function Ug(){const n=Math.hypot(Y-Ae.alley.x,ee-Ae.alley.z)<Ae.alley.r,e=Math.hypot(Y-Ae.dumpster.x,ee-Ae.dumpster.z)<2.2;let t=Rn.filter(i=>i.active&&Math.hypot(i.p.g.position.x-Y,i.p.g.position.z-ee)<3.5).length;return QT(rn.id)&&Math.hypot(Y-rn.x,ee-rn.z)<5&&(t+=3),qT({inAlley:n,byDumpster:e,crowd:t})}function tf(n){const e=ZT(L,Ke(L).copKind,n,Math.random());wt.mode="patrol",Wt.g.position.set(Y+42,0,wt.side),ke(e.outcome==="cell"||e.outcome==="jail"?"whistle":"nope"),e.taunt&&hr(2,()=>Bt(e.taunt)),jn=""}function uA(n){yn.update(L,n,Y,ee);const e=en(Y,ee),t=rr(L,e);HT(L,n,s=>{const r=yn.posOf(s);return!!r&&Math.hypot(r.x-Y,r.z-ee)<4}),Math.hypot(_n.position.x-Y,_n.position.z-ee)<2.5&&zT(L,"cat");const i=yn.posOf("fox");if(fn.update(L,n),i&&!zd(L)){const s=FT(L,ds(L),Math.hypot(i.x-Y,i.z-ee));s&&(Bt(s),ke("nope"))}UT(L,t)&&_m!==L.day+e&&(_m=L.day+e,Bt(`Mazal shouts: "Cops all over ${Ma[e].name} today. Careful!"`)),yn.hud(L,t,rn)}function Or(n){n&&Bt(n),jn="",ke("pop",{pitch:1.1})}function dA(){if(!yn)return"";const n=yn.near(Y,ee),e=Ke(L),t=Math.hypot(Y-rn.x,ee-rn.z)<3.5,i=e.secretSpot&&Math.hypot(Y-bo.x,ee-bo.z)<3;if(i&&$n("✨ Work the steps","whimsy poke",()=>Or(BT(L))),t&&($n(`${rn.icon} ${rn.name}`,"whimsy poke",()=>Or(eE(L,rn))),e.wallet&&$n("Keep the wallet","poke",()=>Or(tE(L)))),n){n.role==="regular"&&$n("Pester "+n.name,"poke",()=>{const r=sg(L,n.id);Sa(L,en(Y,ee),"pester"),Or(r.text),r.callCop&&Lg()}),n.role==="rival"&&$n("Shoo Kobi","poke",()=>Or(IT(L))),(n.role==="rival"||n.role==="thief")&&$n(`Scrap with ${n.name}`,"poke",()=>fn.pick(L,n.role));const s=n.role==="trader"?"Trade":n.role==="rival"?"Share $2":n.role==="thief"?"Eyes on you":"Talk";$n(`${s}: ${n.name}`,"whimsy poke",()=>Or(rg(L,n.id,Y,ee)))}return(n?n.id+zn(L,n.id):"")+(t?"ev"+e.wallet:"")+(i?"sec":"")+e.rep}function ju(n){var G,Q;mt+=n,Nc>0&&(Nc-=n,n*=.05);const e=yi>0?.35:1,t=n*e;yi=Math.max(0,yi-n),mm+=t,L.day!==zu&&(zu=L.day,hA(),_g()),Yw(L,t),L.messages.some(I=>I.startsWith("He passed out"))&&($u=!0);let i=li.x,s=li.y;(Dn.has("a")||Dn.has("arrowleft"))&&(i-=1),(Dn.has("d")||Dn.has("arrowright"))&&(i+=1),(Dn.has("w")||Dn.has("arrowup"))&&(s-=1),(Dn.has("s")||Dn.has("arrowdown"))&&(s+=1);let r=Math.hypot(i,s);r>1&&(i/=r,s/=r,r=1),L.sitting&&(r>.4?L.sitting=!1:(i=s=0,r=0)),Ss>0&&(i=s=0,r=0,Ss-=t),Ch=r<.1?Ch+n:0;const{speed:o,wobble:a}=jw(L),c=Ds?0:Mi+ci;Dn.has("z")&&(ci+=n*1.6),Dn.has("c")&&(ci-=n*1.6);const l=Math.sin(c),h=Math.cos(c);let u=(l*-s+-h*i)*o,d=(h*-s+l*i)*o;const f=Dg[L.effect??"beer"];let g=0;if(!Ds&&ot>.3){const I=r>.2?-s/r:0;if(I>.3){const P=Wr(Math.atan2(u,d)-Mi-ci),ae=.35;Math.abs(P)>ae&&(g=Math.sign(P)*Math.min(1.1,(Math.abs(P)-ae)*2.2)*I*ot)}Ch>1.5&&yi<=0&&(g=f.orbit*ot)}else Ds||(g=nn(Wr(-Mi)*2.5,-3,3));if(Dc+=(g-Dc)*Math.min(1,n*4),Mi=Wr(Mi+Dc*n),Math.abs(Mi)<1e-4&&ot<.3&&(Mi=0),a>0){const I=Math.sin(mt*1.7)*a*.8+Math.sin(mt*.63)*a*.5,P=Math.cos(I),ae=Math.sin(I);if([u,d]=[u*P-d*ae,u*ae+d*P],!L.sitting){const re=mt*.37;u+=Math.cos(re)*a*1.3,d+=Math.sin(re*1.3)*a*1.3}}const _=Fi(L)?nn(L.buzz/80):0;Pc=Math.max(0,Pc-t);const m=L.draw.weather==="rain"||Pc>0||pn.inPuddle(Y,ee),p=Ut.running?Dt.runMul:1,y=Zp(pn.plats,Y,ee),v=Zp(pn.plats,Y+u*t*p*3,ee+d*t*p*3),x=yT(Ut,{il:r,runHeld:Rl||Dn.has("shift"),vx:u,vz:d,drunk:_,wet:m,ground:v,groundHere:y},t);u=x.vx,d=x.vz;for(const I of x.events)YE(I);if(Hr>0){Hr-=t;const I=Hr*9;Y=Jo.x+Math.cos(I)*.8,ee=Jo.z+Math.sin(I)*.8,u=-Math.sin(I)*6,d=Math.cos(I)*6}else if(kc>0&&Pi){kc-=t;const I=si+Math.PI;u=Math.sin(I)*7+u*.3,d=Math.cos(I)*7+d*.3,Pi.g.position.set(Y+Math.sin(I)*.9,Pi.home.y,ee+Math.cos(I)*.9),Pi.g.rotation.y=I+Math.PI/2,Pi.thing.x=Pi.g.position.x,Pi.thing.z=Pi.g.position.z,kc<=0&&(Pi=null,Us(.3))}yi<=0&&!Tt&&Hr<=0&&(Y+=(u+Ts.x)*t,ee+=(d+Ts.z)*t);const C=Math.exp(-6*t);Ts.x*=C,Ts.z*=C,oA();const A=L.sitting||Tt?0:Math.hypot(u,d);if(A>.3&&Ss<=0){const I=Math.atan2(u,d)+Math.PI;si+=Wr(I-si)*Math.min(1,n*12)}Tt&&(si=Math.atan2(Tt.p.g.position.x-Y,Tt.p.g.position.z-ee)+Math.PI),ht.g.position.set(Y,(L.sitting?.05:0)+Ut.y,ee),ht.g.rotation.y=si,ht.g.rotation.z=a>0?Math.sin(mt*2.2)*.2*a:0;const R=!Fi(L)&&L.withdrawal>70?(L.withdrawal-70)/30:0;ht.g.rotation.x=Ss>0?-Math.min(1.2,Ss*2):R*Math.sin(mt*47)*.05,Ut.roll>0?ht.g.rotation.x=-(1-Ut.roll/Dt.rollTime)*Math.PI*2:Ut.trip>0?ht.g.rotation.x=-Math.min(1.35,(Dt.tripTime-Ut.trip)*6):Ut.slide>0?ht.g.rotation.x=.35:Ut.running&&(ht.g.rotation.x+=-.12),Hr>0&&(si=Math.atan2(Jo.x-Y,Jo.z-ee)+Math.PI/2),yo(ht,yi>0?0:Ut.onGround?A:0,t)&&yi<=0&&Ut.onGround&&ke("step",{vol:Ut.running?.7:.5,pitch:(Ut.running?1.15:.9)+Math.random()*.2});const N=Lo(6),S=N?nn(Wr(Math.atan2(N.p.g.position.x-Y,N.p.g.position.z-ee)+Math.PI-si),-.9,.9):0;if(wh+=(S-wh)*Math.min(1,n*5),Qi.head&&Qi.head.rotateY(wh),_>.3){const I=(_-.3)*1.6;(G=Qi.armL)==null||G.rotateZ(Math.sin(mt*5.3)*I),(Q=Qi.armR)==null||Q.rotateZ(Math.sin(mt*4.1+1)*I)}for(let I=ca.length-1;I>=0;I--){const P=ca[I];P.t+=n,P.vy-=12*n,P.m.position.x+=P.vx*n,P.m.position.y=Math.max(.25,P.m.position.y+P.vy*n),P.m.position.z+=P.vz*n,P.m.rotation.x+=n*8,P.t>1.6&&(Nt.remove(P.m),ca.splice(I,1))}if(yi>0?ht.body.position.y=Math.abs(Math.sin(mt*10))*.3:L.sitting&&(ht.body.position.y=-.32),Uc+=(-Gr*220-Uc*14)*n,Gr+=Uc*n,ht.body.scale.set(1-Gr*.5,1+Gr,1-Gr*.5),Fu.visible=L.items.blanket||L.items.goodBlanket,zr.visible=L.items.scooter,Ou.visible=L.items.sign,Bu.visible=L.items.shades,Nw(L,t,Y,ee,Fi(L)),L.own.fell&&(L.own.fell=!1,Ss=.8,ke("nope")),Bg.update(L,mt),Rh-=n,Rh<=0){Rh=.5;const I=Hw(L,Y,ee);I&&Bt(I)}Yr=Jw(mm);for(let I=0;I<2;I++)if(bh[I]-=t,bh[I]<=0){const P=I===0?1:-1,ae=nn(Y-P*66,-112,112),re=I===0?-2:2,de=bi.some(Pe=>Pe.lane===I&&Math.abs(Pe.x-ae)<9);if(bh[I]=de?.5:2+Math.random()*3.5,!de&&bi.length<(ai===0?5:8)){const Pe=GS(dm[Math.floor(Math.random()*dm.length)],Math.floor(Math.random()*4));Pe.g.position.set(ae,0,re),Pe.g.rotation.y=P>0?0:Math.PI,sn(Pe.g);const ie=Fn.cruiseMin+Math.random()*(Fn.cruiseMax-Fn.cruiseMin);bi.push({m:Pe,x:ae,z:re,dir:P,speed:ie,cruise:ie,honkT:0,lane:I})}}Sh-=t;let b=0;for(let I=bi.length-1;I>=0;I--){const P=bi[I];let ae=null,re=1e9;for(const fe of bi){if(fe===P||fe.lane!==P.lane)continue;const Ce=(fe.x-P.x)*P.dir;Ce>0&&Ce<re&&(re=Ce,ae=fe)}const de=Qw(P,{x:Y,z:ee},Yr,ae);P.honkT-=t;const Pe=Math.hypot(P.x-Y,P.z-ee);de.honk&&P.honkT<=0&&P.speed>.8&&Pe<25&&(ke("horn",{pitch:.85+I%4*.08,vol:nn(1.2-Pe/25,.2,1)}),P.honkT=3);const ie=P.speed;P.speed=eS(P.speed,de.want,t),P.m.brake.emissiveIntensity=P.speed<ie-.001||P.speed<.3?3:.15,P.x+=P.dir*P.speed*t,P.m.g.position.x=P.x;for(const fe of P.m.wheels)fe.rotation[P.m.spin]+=P.m.spinSign*P.speed*t/.36;if(Math.abs(P.x)>114||(P.x-Y)*P.dir>72){Nt.remove(P.m.g),bi.splice(I,1);continue}Math.abs(ee-P.z)<2.2&&(Y-P.x)*P.dir>-2&&(Y-P.x)*P.dir<10&&P.speed>2&&(b=1),tS(P,{x:Y,z:ee})&&(P.speed>1.2&&Sh<=0?(Kw(L),wo(),Sh=1.5,ir=.8,Nc=.14,xa=1,Ss=.7,Ts.x=P.dir*(3+P.speed*.8),Ts.z=(P.z<0?-1:1)*8,P.speed=0,ke("hit"),Us(.45)):P.speed<=1.2&&(ee=P.z+(ee>=P.z?1:-1)*Fn.hitWide))}for(const I of pg){const P=Yr==="stop"?0:Yr==="slow"?1:2;I.mats.forEach((ae,re)=>ae.emissiveIntensity=re===3?1.5:re===P?2.5:0),I.mats[3].emissive.setHex([16724016,16760864,3211104][P])}cA(t,n);const k=Zs.tx-_n.position.x,V=Zs.tz-_n.position.z,T=Math.hypot(k,V);if(T<.3){if(Zs.wait-=t,Zs.wait<=0){const I=[[10,15],[6,18],[-12,-10],[-20,-14],[2,-14],[13,12]],P=I[Math.floor(Math.random()*I.length)];Zs.tx=P[0],Zs.tz=P[1],Zs.wait=4+Math.random()*6}}else _n.position.x+=k/T*1.4*t,_n.position.z+=V/T*1.4*t,_n.rotation.y=Math.atan2(k,V)+Math.PI,_n.position.y=Math.abs(Math.sin(mt*9))*.06;for(const I of Xd){const P=Ae[I.spot],ae=(Ic[I.spot]??0)>0;I.a+=t*(ae?2.5:.4);const re=ae?Y:P.x,de=ae?ee:P.z,Pe=ae?.7+I.r*.4:I.r,ie=re+Math.cos(I.a)*Pe,fe=de+Math.sin(I.a)*Pe;I.m.position.x+=(ie-I.m.position.x)*Math.min(1,t*3),I.m.position.z+=(fe-I.m.position.z)*Math.min(1,t*3),I.m.position.y=Math.abs(Math.sin(mt*7+I.r*5))*.12,I.m.rotation.y=-I.a}for(const I of Object.keys(Ic))Ic[I]-=t;mg.forEach((I,P)=>I.color.setHSL(Math.floor(mt*1.3+P)*.17%1,.5,.55+Math.sin(mt*9)*.05));const U=Zw(L),H=Wt.g.position,j=Y-H.x,K=ee-H.z,$=Math.hypot(j,K),ce=I=>{wt.mode="chase",wt.t=0,Bt(I),ke("whistle")},ue=en(Y,ee),ye=Ke(L),ze=Du[ye.copKind],dt=ye.copKind==="veteran"&&ye.faces>=2,Z=U.sight*ze.sight*(dt?1.3:1),se=Ug(),ve=!se&&($<2.5||jT(H.x,H.z,Wt.g.rotation.y,Y,ee,Z*.6,ze.cone));if(L.copAlert){Sa(L,ue,"theft"),fn.onTheft(L);const I=ET(L,yn.seen(Y,ee).map(P=>({id:P.id,dist:P.dist,sameArea:en(P.x,P.z)===ue})));I&&hr(1.4,()=>Bt(I))}L.copAlert&&(L.copAlert=!1,$<Z&&!se&&ce("The cop saw that. Run!")),wt.mode==="patrol"&&L.buzz>=U.drunkAt&&!se&&($<U.drunkRange*.6||ve&&$<U.drunkRange*1.6)&&ce('Cop: "Hey! You!"'),wt.mode==="patrol"&&dt&&rr(L,ue)>=20&&ve&&ce('Veteran cop: "I know that face!"');let he=2;if(wt.mode==="chase"){wt.t+=t;const I=U.speed*ze.speed;if(H.x+=j/$*I*t,H.z+=K/$*I*t,Wt.g.rotation.y=Math.atan2(j,K)+Math.PI,he=I,$<1.1)tf(rr(L,ue));else if(wt.t>12||$>Z+6||se&&$>5){wt.mode="patrol";const P=og(L,ye.copKind);Bt(se?"You vanish. The cop gave up.":"The cop gave up."),P&&hr(1.6,()=>Bt(P))}}else{const I=32/XT(rr(L,ue));Math.abs(H.x-Y)>60&&(H.set(Y+(Math.random()<.5?-1:1)*(I+13),0,wt.side),ye.copKind=$T(L.seed,L.day,ue,rr(L,ue),++lA)),H.z+=Math.sign(wt.side-H.z)*Math.min(Math.abs(wt.side-H.z),2*t),H.x+=wt.dir*2*ze.speed*t,Wt.g.rotation.y=wt.dir>0?-Math.PI/2:Math.PI/2,H.x>Y+I&&(wt.dir=-1,wt.side=wt.side>0?-5.5:6.5),H.x<Y-I&&(wt.dir=1)}yn.cop(ye.copKind,H.x,H.z,Wt.g.rotation.y,Z*.6,$<16,ye.nemesis.name),yo(Wt,he,t);const Re=wt.mode==="chase";il.emissiveIntensity=Re?3:0,Re&&il.emissive.setHex(Math.floor(mt*6)%2?2113791:16719904);for(let I=Lc.length-1;I>=0;I--){const P=Lc[I];P.t+=n,P.o.position.y+=n*4,P.o.rotation.y+=n*12,P.o.scale.setScalar(1+P.t*3),P.t>.35&&(Nt.remove(P.o),Lc.splice(I,1))}const Oe=L.health<35||Re||b>0;if(gc-=n,Oe&&gc<=0&&(ke("heart",{vol:L.health<35?1:.6}),gc=L.health<20?.55:Re?.6:.8),Eh-=n,Eh<=0){Eh=.25;for(const I of Wd)I.o.visible=Math.abs(I.x-Y)<yh;for(const I of _a)Math.abs(I.position.x-Y)>yh&&(I.visible=!1);_a.forEach((I,P)=>{L.bottlesLeft[P]&&Math.abs(I.position.x-Y)<=yh&&(I.visible=!0)})}const je=Math.min(1,L.buzz/35);ot+=(je-ot)*Math.min(1,n*1.5);const _t=fr(L),et=_t>yt.nightAt?Math.min(1,(_t-yt.nightAt)/.1):0,tt=el(_t),z=_t/yt.nightAt*Math.PI;Xt.position.set(Y+Math.cos(z)*24,3+tt.sunH*28,ee-14),Xt.target.position.set(Y,0,ee),Xt.intensity=tt.sunI,Xt.color.setRGB(...tt.sun),Cc.intensity=tt.hemiI,Cc.color.setRGB(...tt.hemiSky),Cc.groundColor.setRGB(...tt.hemiGround);const Pn=L.draw.weather==="rain"?.8:L.draw.weather==="cold"?.94:1,Ze=new Te().setRGB(...gT(_t,ot,mt)).multiplyScalar(ot>.5?1:Pn);Nt.background=Ze;const Qe=nl.map(I=>({l:I,d:Math.abs(I.g.position.x-Y)+Math.abs(I.g.position.z-ee)*.5})).sort((I,P)=>I.d-P.d).slice(0,4);yg.forEach((I,P)=>{var re;const ae=(re=Qe[P])==null?void 0:re.l;ae&&(I.position.set(ae.pool.position.x,3.6,ae.pool.position.z),I.intensity=tt.lamps*14,I.visible=tt.lamps>.01)});const Ie=tt.neon*(1+ot*.5),Mt=Math.floor(mt*3);for(let I=0;I<pn.neonBase.length;I++)pn.neon.setColorAt(I,pA.copy(pn.neonBase[(I+Mt)%pn.neonBase.length]).multiplyScalar(Ie));pn.neon.instanceColor.needsUpdate=!0;const Ee=Nt.fog;Ee.color.copy(Ze),Ee.near=26+ot*10,Ee.far=58+ot*4;for(const I of Tl)I.emissiveIntensity=tt.windows*1.6;VS.opacity=tt.lamps*.32;for(const I of fg){const P=Math.hypot(Y-I.x,ee-I.z)<=I.r;I.m.material.opacity=P?.6:.14+Math.sin(mt*2)*.04}fA(n,r,o);const E=nn(L.whimsy/30);Nn.sat=(.86+ot*.5)*(.3+.7*E),Nn.warm=tt.warm*(1-ot)+ot*.9,Nn.contrast=.95+ot*.17,Nn.glow=.2+ot*.9+et*.6,Nn.bright=tt.bright+ot*.02,Nn.flood=nn((ot-.15)/.5),Nn.tilt=.6,Nn.outline=.85,mA.style.opacity=Ut.stamina<99?"1":"0",xm.style.width=Ut.stamina+"%",xm.style.background=Ut.dry?"#d84a3a":"#ffb800";const M=Math.max(0,1-Math.abs(gc-.5)*4);Nn.red=Math.max(xa,L.health<35?(35-L.health)/35*(.75+.25*M):0),Nn.jitter=R*.9,uA(t),Ra=O0(L,us()),qE(),rA(n),Rg(n),QE(n),Th+=n,Th>3&&(Th=0,Bs()),L.dead&&VE()}const Js=new D,Lh=new D,Ph=new D;let hl=!1;function fA(n,e,t){ir=Math.max(0,ir-n*2),xa=Math.max(0,xa-n*2.5);const i=Dg[L.effect??"beer"],s=L.buzz/100;hl=!1;let r=aa;if(yi>0){const c=1-yi/2.2,l=si+Math.PI+rl*.9,h=4.6-c*1.4;$e.position.set(Y+Math.sin(l)*h,1.1+c*.4,ee+Math.cos(l)*h),$e.lookAt(Y,1.25,ee),$e.rotateZ(rl*.06*(1-c)),r=aa-6-c*4}else if(Ds){const c=Math.round(Y/24)*24,l=Math.round(ee/16)*16,h=26-ot*10,u=18-ot*4;$e.position.lerp(aA.set(c,h,l-u),Math.min(1,n*6)),$e.lookAt($e.position.x,0,$e.position.z+u)}else{const c=Math.min(1,n*2.2),l=(Y-(rt.vx===0&&rt.vz===0?Y:qu))/Math.max(n,.001),h=(ee-(rt.vx===0&&rt.vz===0?ee:Yu))/Math.max(n,.001);rt.vx+=(nn(l,-9,9)-rt.vx)*c,rt.vz+=(nn(h,-9,9)-rt.vz)*c,qu=Y,Yu=ee;const u=1-ot;let d=Y+nn(rt.vx*tn.aheadSecs,-3.2,tn.aheadMax)*u,f=ee+nn(rt.vz*tn.aheadSecs,-3.2,tn.aheadMax)*u;const g=Mi+ci;d+=Math.sin(g)*tn.highAhead*ot,f+=Math.cos(g)*tn.highAhead*ot;let _=1;const m=us(),p=Tt??(m.ped?Lo(2.8):null);if(p)d=ws(d,(p.p.g.position.x+Y)/2,tn.leanTalk),f=ws(f,(p.p.g.position.z+ee)/2,tn.leanTalk),_*=Tt?tn.talkPush:.93;else if(N0(m)||D0(m)){let T=Su[0],U=1e9;for(const H of Su){const j=Math.hypot(H.x-Y,H.z-ee);j<U&&(U=j,T=H)}d=ws(d,T.x,tn.leanDoor),f=ws(f,T.z,tn.leanDoor)}Math.abs(ee)<4.3&&(_*=tn.roadPull),e>.1&&t>6.5&&(_*=tn.runPull),ot>.3&&Ra.some(T=>T.whimsy)&&(_*=.82),m.catNear&&ot>.3&&(d=ws(d,_n.position.x,.4),f=ws(f,_n.position.z,.4)),rt.fx+=(d-rt.fx)*Math.min(1,n*3),rt.fz+=(f-rt.fz)*Math.min(1,n*3);const v=$e.aspect<1?1:0,x=ws(tn.soberDist+v*.5,tn.highDist,ot)*_*Os;rt.dist+=(x-rt.dist)*Math.min(1,n*1.6);const C=ws(tn.soberPitch+v*.05,tn.highPitch,ot),A=Math.cos(C);Js.set(-Math.sin(g)*A,Math.sin(C),-Math.cos(g)*A);const R=i.sway*s*ot,N=Math.cos(g),S=-Math.sin(g),b=(Math.sin(mt*.9)*.7+Math.sin(mt*.37)*.5)*R,k=Math.sin(mt*1.3)*.3*R;$e.position.set(rt.fx+Js.x*rt.dist+N*b,.9+Js.y*rt.dist+k,rt.fz+Js.z*rt.dist+S*b),$e.lookAt($e.position.x-Js.x,$e.position.y-Js.y,$e.position.z-Js.z);const V=ot>.05?i.roll*ot*(Math.sin(mt*.7)+.4*Math.sin(mt*1.9)):0;if(rt.roll+=(V-rt.roll)*Math.min(1,n*3),Math.abs(rt.roll)>1e-4&&$e.rotateZ(rt.roll),r=aa*(1+i.breathe*ot*Math.sin(mt*.8)),ot<.02&&Mi===0&&ci===0&&ir<=0&&Math.abs(rt.roll)<1e-4){$e.updateMatrixWorld(),Lh.setFromMatrixColumn($e.matrixWorld,0),Ph.setFromMatrixColumn($e.matrixWorld,1);const T=2*rt.dist*Math.tan(Um.degToRad(r)/2)/Ei.lowH,U=$e.position.dot(Lh),H=$e.position.dot(Ph);$e.position.addScaledVector(Lh,Math.round(U/T)*T-U).addScaledVector(Ph,Math.round(H/T)*T-H),hl=!0}}Math.abs($e.fov-r)>.01&&($e.fov=r,$e.updateProjectionMatrix());const o=!Fi(L)&&L.withdrawal>70?(L.withdrawal-70)/30:0,a=ir*ir*.9+o*.05;a>0&&($e.position.x+=(Math.random()-.5)*a,$e.position.y+=(Math.random()-.5)*a)}let qu=0,Yu=0;const pA=new Te,mA=Ye("stam"),xm=Ye("stamFill"),Nn={sat:.58,warm:.22,contrast:.97,glow:.2,red:0,jitter:0,bright:1.05};let ul=performance.now(),kh=0,_c=0,Gc=60,xc=0,ym=0;const Fg=Ye("dbg");hg&&Fg.classList.remove("hidden");function Og(n){const e=(n-ul)/1e3,t=Math.min(.05,e);if(ul=n,xn&&!Hn&&!On?ju(t):xn&&(yo(ht,0,0),Rg(t)),An.info.reset(),Ei.render(Nt,$e,Nn,mt,Qc[ai].glow),kh++,_c+=e,_c>=1&&(Gc=kh/_c,kh=0,_c=0,xn&&!Hn&&document.visibilityState==="visible"&&(ym++,xc=Gc<40?xc+1:0,PE&&ym>4&&xc>=3&&ai>0&&(ai--,xc=0,Vd())),hg)){const i=An.info.render;Fg.textContent=`fps ${Gc.toFixed(0)}  q${ai}  ${Ei.lowW}x${Ei.lowH} x${Ei.scale}
calls ${i.calls}  tris ${i.triangles}
peds ${Rn.filter(s=>s.active).length}  cars ${bi.length}  ${xn?en(Y,ee):""}
audio ${hT()}  light ${Yr}  snap ${hl?"on":"off"}
models ${Dd.length}`}requestAnimationFrame(Og)}let Bg;const gA={likes:" ♥",hates:" ✗",meh:"",none:""};function Il(){for(;L.messages.length;){const n=L.messages.shift();n.startsWith("Combo!")?(oT(n),ke("sparkle",{pitch:1.2})):Bt(n)}}const _A={pos:()=>({x:Y,z:ee}),pedNear:()=>!!Lo(2.8),close:Ca,open:n=>{On=n,ll()},rerender:ll,flush:Il,sound:n=>ke(n)};async function xA(){hs.innerHTML='<div style="opacity:.6">Loading the city…</div>',await HS(),UE(),FE(),BE(),Bg=new QS(Nt,ht.g),fn=new LE(Nt,{pos:()=>({x:Y,z:ee}),move:(n,e)=>{Y+=n,ee+=e},flash:Bt,float:Hc,play:(n,e)=>ke(n,e?{pitch:e}:void 0),pedsNear:()=>Rn.filter(n=>n.active&&Math.hypot(n.p.g.position.x-Y,n.p.g.position.z-ee)<4).length,copDist:()=>wt.mode==="chase"?Math.hypot(Wt.g.position.x-Y,Wt.g.position.z-ee):1/0,copChase:n=>{Math.hypot(Wt.g.position.x-Y,Wt.g.position.z-ee)<40&&(wt.mode="chase",wt.t=0,Bt(n),ke("whistle"))},caught:()=>tf(rr(L,en(Y,ee))),redraw:()=>{jn=""}},()=>L),rT(()=>{xn&&!Hn&&!On&&ya("bag")}),ug(),$e.position.set(-20,10,-4),$e.lookAt(-20,0,6),L=Ld("BOOT"),_g(),qd(),requestAnimationFrame(Og)}xA();window.__sg={get s(){return L},get pos(){return{px:Y,pz:ee}},tp(n,e){Y=n,ee=e,rt.fx=n,rt.fz=e,qu=n,Yu=e},get acts(){return Ra.map(n=>n.id)},act:cl,doDrink:ef,startLife:al,continueLife:bg,pauseGame:Cl,resumeGame:Yd,saveLife:Bs,get paused(){return Hn},get running(){return xn},get cop(){return{...wt,x:Wt.g.position.x,z:Wt.g.position.z}},setCop(n,e){Wt.g.position.set(n,0,e)},get cat(){return{x:_n.position.x,z:_n.position.z}},get cars(){return bi.map(n=>({x:+n.x.toFixed(2),z:n.z,speed:+n.speed.toFixed(2),dir:n.dir}))},get peds(){return Rn.filter(n=>n.active).map(n=>({kind:n.kind,x:+n.p.g.position.x.toFixed(1),z:+n.p.g.position.z.toFixed(1),asks:n.asks,mad:n.mad>0}))},summon(n){const e=Rn.find(t=>t.kind===n&&!t.active)??Rn.find(t=>t.kind===n);return e.active=!0,e.p.g.visible=!0,e.asks=0,e.mad=0,e.talkT=3,e.id=++gg,e.p.g.position.set(Y+1.2,0,ee),n},sayLine:Qd,get begOpen(){return!!Tt},get lines(){return Tt?Sl(L,us()):[]},get bubbles(){return so.map(n=>n.el.textContent)},openShop:ya,closeShop:Ca,get shopOpen(){return On},buyRow(n){var e;(e=or.querySelectorAll(".srow")[n])==null||e.dispatchEvent(new PointerEvent("pointerdown"))},get light(){return Yr},get fps(){return Gc},get quality(){return ai},get sounds(){return Rc.map(n=>n.name)},get grade(){return{...Nn}},get camYaw(){return Mi},setUserCam(n,e){ci=n,Os=e},centerCam:jd,get cam(){return{...rt,userYaw:ci,userZoom:Os,x:$e.position.x,y:$e.position.y,z:$e.position.z,fov:$e.fov,snapped:hl}},get models(){return[...Dd]},get highness(){return ot},bench(n=60){const e=An.getContext(),t=new Uint8Array(4),i=performance.now();for(let s=0;s<n;s++)An.info.reset(),Ei.render(Nt,$e,Nn,mt,Qc[ai].glow),e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,t);return+((performance.now()-i)/n).toFixed(2)},setQuality(n){ai=n,Vd()},get render(){const n=An.info.render;return{calls:n.calls,tris:n.triangles,low:[Ei.lowW,Ei.lowH,Ei.scale]}},setTime(n){L.time=n*yt.dayLength},jump(){Nd(Ut)},setRun(n){Rl=n},get mover(){return{...Ut}},get things(){return pn.things.map(n=>({id:n.id,kind:n.kind,x:n.x,z:n.z}))},poke(n){const e=pn.things.filter(t=>t.kind===n).sort((t,i)=>Math.abs(t.x-Y)-Math.abs(i.x-Y))[0];return e?(Y=e.x+.6,ee=e.z-(e.z>0?.8:-.8),Jd(e),e.kind):null},get bits(){return ca.length},get sky(){return el(fr(L))},stick(n,e){li.x=n,li.y=e},sim(n,e){for(let t=0;t<n&&xn&&!L.dead;t+=1/30)e==null||e(),ju(1/30);An.info.reset(),L.dead&&xn&&ju(1/30),Ei.render(Nt,$e,Nn,mt,Qc[ai].glow)}};Object.assign(window.__sg,{ownState:()=>L.own,give:n=>zt(L,n,Y,ee),use:n=>w0(L,n,!!Lo(2.8)),craft:n=>tg(L,n,Y,ee),steal:(n,e)=>R0(L,n,e),pawnSell:n=>I0(L,n),openPanel:n=>ya(n),drain:Il});Object.defineProperties(window.__sg,Object.getOwnPropertyDescriptors({get city(){return Ke(L)},get event(){return rn},get near(){return yn.near(Y,ee)},get hidden(){return Ug()},get heat(){return rr(L,en(Y,ee))},talk:n=>rg(L,n,Y,ee),pester:n=>sg(L,n),copCaught:tf,where:n=>{const e=yn.posOf(n);return e?{x:e.x,z:e.z}:null},setCopKind:n=>{Ke(L).copKind=n}}));Object.defineProperties(window.__sg,Object.getOwnPropertyDescriptors({get scrap(){return fn},get dogs(){return In(L)},get bruise(){return Ta(L).bruise}}));Object.assign(window.__sg,{tapSel:n=>{var e;return(e=document.querySelector(n))==null?void 0:e.dispatchEvent(new PointerEvent("pointerdown"))}});
