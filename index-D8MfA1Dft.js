(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function o(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function u(c){if(c.ep)return;c.ep=!0;const d=o(c);fetch(c.href,d)}})();(function(){if(!window.location.pathname.includes("/checkout"))return;let a=0;const r=3e5,o=setInterval(function(){const c=window.checkout_order,d=c?.id;d?(clearInterval(o),console.log("🟢 OrderId bulundu! İşlem başlatılıyor."),u(c,d)):a>=r&&(clearInterval(o),console.log("⏱️ Maksimum bekleme süresi doldu, işlem iptal edildi.")),a+=100},100);function u(c,d){const p="uvid",g=localStorage.getItem(p);if(console.log("📊 processOrder çağrıldı"),console.log("📊 visitorId (uvid):",g),console.log("📊 checkout_order:",c),console.log("📦 orderId:",d),!g){console.error("❌ Conversion-tracking: visitorId bulunamadı.");return}console.log("✅ Step 1 - Veri başarıyla yakalandı."),console.log("✅ Step 2 - OrderId mevcut");const w=new XMLHttpRequest;w.open("POST","https://api.upsell.co/Tracking/MatchOrder",!0),w.setRequestHeader("Content-Type","application/json;charset=UTF-8"),w.onreadystatechange=function(){w.readyState===4&&(w.status>=200&&w.status<300?(console.log("✅ Conversion-tracking: Başarılı. Ziyaretçi anahtarı siliniyor."),localStorage.removeItem(p)):console.error("❌ Conversion-tracking MatchOrder error:",w.responseText))},console.log("📤 Step 3 - İstek gönderiliyor."),w.send(JSON.stringify({visitorId:g,orderId:String(d)})),console.log("✅ Step 4 - İstek gönderildi.")}})();var Ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ux(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ec={exports:{}},Ql={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh;function Bx(){if(uh)return Ql;uh=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(u,c,d){var p=null;if(d!==void 0&&(p=""+d),c.key!==void 0&&(p=""+c.key),"key"in c){d={};for(var g in c)g!=="key"&&(d[g]=c[g])}else d=c;return c=d.ref,{$$typeof:a,type:u,key:p,ref:c!==void 0?c:null,props:d}}return Ql.Fragment=r,Ql.jsx=o,Ql.jsxs=o,Ql}var ch;function Hx(){return ch||(ch=1,Ec.exports=Bx()),Ec.exports}var f=Hx(),Ac={exports:{}},Kl={},zc={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function Lx(){return fh||(fh=1,function(a){function r(O,Z){var ue=O.length;O.push(Z);e:for(;0<ue;){var ee=ue-1>>>1,y=O[ee];if(0<c(y,Z))O[ee]=Z,O[ue]=y,ue=ee;else break e}}function o(O){return O.length===0?null:O[0]}function u(O){if(O.length===0)return null;var Z=O[0],ue=O.pop();if(ue!==Z){O[0]=ue;e:for(var ee=0,y=O.length,C=y>>>1;ee<C;){var F=2*(ee+1)-1,J=O[F],ce=F+1,Se=O[ce];if(0>c(J,ue))ce<y&&0>c(Se,J)?(O[ee]=Se,O[ce]=ue,ee=ce):(O[ee]=J,O[F]=ue,ee=F);else if(ce<y&&0>c(Se,ue))O[ee]=Se,O[ce]=ue,ee=ce;else break e}}return Z}function c(O,Z){var ue=O.sortIndex-Z.sortIndex;return ue!==0?ue:O.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var p=Date,g=p.now();a.unstable_now=function(){return p.now()-g}}var w=[],x=[],b=1,A=null,E=3,$=!1,M=!1,V=!1,R=!1,K=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function le(O){for(var Z=o(x);Z!==null;){if(Z.callback===null)u(x);else if(Z.startTime<=O)u(x),Z.sortIndex=Z.expirationTime,r(w,Z);else break;Z=o(x)}}function U(O){if(V=!1,le(O),!M)if(o(w)!==null)M=!0,te||(te=!0,W());else{var Z=o(x);Z!==null&&ge(U,Z.startTime-O)}}var te=!1,ne=-1,fe=5,de=-1;function Te(){return R?!0:!(a.unstable_now()-de<fe)}function Re(){if(R=!1,te){var O=a.unstable_now();de=O;var Z=!0;try{e:{M=!1,V&&(V=!1,H(ne),ne=-1),$=!0;var ue=E;try{t:{for(le(O),A=o(w);A!==null&&!(A.expirationTime>O&&Te());){var ee=A.callback;if(typeof ee=="function"){A.callback=null,E=A.priorityLevel;var y=ee(A.expirationTime<=O);if(O=a.unstable_now(),typeof y=="function"){A.callback=y,le(O),Z=!0;break t}A===o(w)&&u(w),le(O)}else u(w);A=o(w)}if(A!==null)Z=!0;else{var C=o(x);C!==null&&ge(U,C.startTime-O),Z=!1}}break e}finally{A=null,E=ue,$=!1}Z=void 0}}finally{Z?W():te=!1}}}var W;if(typeof Q=="function")W=function(){Q(Re)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,be=re.port2;re.port1.onmessage=Re,W=function(){be.postMessage(null)}}else W=function(){K(Re,0)};function ge(O,Z){ne=K(function(){O(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(O){O.callback=null},a.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<O?Math.floor(1e3/O):5},a.unstable_getCurrentPriorityLevel=function(){return E},a.unstable_next=function(O){switch(E){case 1:case 2:case 3:var Z=3;break;default:Z=E}var ue=E;E=Z;try{return O()}finally{E=ue}},a.unstable_requestPaint=function(){R=!0},a.unstable_runWithPriority=function(O,Z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ue=E;E=O;try{return Z()}finally{E=ue}},a.unstable_scheduleCallback=function(O,Z,ue){var ee=a.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?ee+ue:ee):ue=ee,O){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=ue+y,O={id:b++,callback:Z,priorityLevel:O,startTime:ue,expirationTime:y,sortIndex:-1},ue>ee?(O.sortIndex=ue,r(x,O),o(w)===null&&O===o(x)&&(V?(H(ne),ne=-1):V=!0,ge(U,ue-ee))):(O.sortIndex=y,r(w,O),M||$||(M=!0,te||(te=!0,W()))),O},a.unstable_shouldYield=Te,a.unstable_wrapCallback=function(O){var Z=E;return function(){var ue=E;E=Z;try{return O.apply(this,arguments)}finally{E=ue}}}}(Tc)),Tc}var dh;function qx(){return dh||(dh=1,zc.exports=Lx()),zc.exports}var jc={exports:{}},_e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh;function Vx(){if(hh)return _e;hh=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),A=Symbol.iterator;function E(y){return y===null||typeof y!="object"?null:(y=A&&y[A]||y["@@iterator"],typeof y=="function"?y:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,V={};function R(y,C,F){this.props=y,this.context=C,this.refs=V,this.updater=F||$}R.prototype.isReactComponent={},R.prototype.setState=function(y,C){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,C,"setState")},R.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function K(){}K.prototype=R.prototype;function H(y,C,F){this.props=y,this.context=C,this.refs=V,this.updater=F||$}var Q=H.prototype=new K;Q.constructor=H,M(Q,R.prototype),Q.isPureReactComponent=!0;var le=Array.isArray,U={H:null,A:null,T:null,S:null,V:null},te=Object.prototype.hasOwnProperty;function ne(y,C,F,J,ce,Se){return F=Se.ref,{$$typeof:a,type:y,key:C,ref:F!==void 0?F:null,props:Se}}function fe(y,C){return ne(y.type,C,void 0,void 0,void 0,y.props)}function de(y){return typeof y=="object"&&y!==null&&y.$$typeof===a}function Te(y){var C={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(F){return C[F]})}var Re=/\/+/g;function W(y,C){return typeof y=="object"&&y!==null&&y.key!=null?Te(""+y.key):C.toString(36)}function re(){}function be(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(re,re):(y.status="pending",y.then(function(C){y.status==="pending"&&(y.status="fulfilled",y.value=C)},function(C){y.status==="pending"&&(y.status="rejected",y.reason=C)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function ge(y,C,F,J,ce){var Se=typeof y;(Se==="undefined"||Se==="boolean")&&(y=null);var se=!1;if(y===null)se=!0;else switch(Se){case"bigint":case"string":case"number":se=!0;break;case"object":switch(y.$$typeof){case a:case r:se=!0;break;case b:return se=y._init,ge(se(y._payload),C,F,J,ce)}}if(se)return ce=ce(y),se=J===""?"."+W(y,0):J,le(ce)?(F="",se!=null&&(F=se.replace(Re,"$&/")+"/"),ge(ce,C,F,"",function(Ve){return Ve})):ce!=null&&(de(ce)&&(ce=fe(ce,F+(ce.key==null||y&&y.key===ce.key?"":(""+ce.key).replace(Re,"$&/")+"/")+se)),C.push(ce)),1;se=0;var je=J===""?".":J+":";if(le(y))for(var xe=0;xe<y.length;xe++)J=y[xe],Se=je+W(J,xe),se+=ge(J,C,F,Se,ce);else if(xe=E(y),typeof xe=="function")for(y=xe.call(y),xe=0;!(J=y.next()).done;)J=J.value,Se=je+W(J,xe++),se+=ge(J,C,F,Se,ce);else if(Se==="object"){if(typeof y.then=="function")return ge(be(y),C,F,J,ce);throw C=String(y),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return se}function O(y,C,F){if(y==null)return y;var J=[],ce=0;return ge(y,J,"","",function(Se){return C.call(F,Se,ce++)}),J}function Z(y){if(y._status===-1){var C=y._result;C=C(),C.then(function(F){(y._status===0||y._status===-1)&&(y._status=1,y._result=F)},function(F){(y._status===0||y._status===-1)&&(y._status=2,y._result=F)}),y._status===-1&&(y._status=0,y._result=C)}if(y._status===1)return y._result.default;throw y._result}var ue=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function ee(){}return _e.Children={map:O,forEach:function(y,C,F){O(y,function(){C.apply(this,arguments)},F)},count:function(y){var C=0;return O(y,function(){C++}),C},toArray:function(y){return O(y,function(C){return C})||[]},only:function(y){if(!de(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},_e.Component=R,_e.Fragment=o,_e.Profiler=c,_e.PureComponent=H,_e.StrictMode=u,_e.Suspense=w,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,_e.__COMPILER_RUNTIME={__proto__:null,c:function(y){return U.H.useMemoCache(y)}},_e.cache=function(y){return function(){return y.apply(null,arguments)}},_e.cloneElement=function(y,C,F){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var J=M({},y.props),ce=y.key,Se=void 0;if(C!=null)for(se in C.ref!==void 0&&(Se=void 0),C.key!==void 0&&(ce=""+C.key),C)!te.call(C,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&C.ref===void 0||(J[se]=C[se]);var se=arguments.length-2;if(se===1)J.children=F;else if(1<se){for(var je=Array(se),xe=0;xe<se;xe++)je[xe]=arguments[xe+2];J.children=je}return ne(y.type,ce,void 0,void 0,Se,J)},_e.createContext=function(y){return y={$$typeof:p,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:d,_context:y},y},_e.createElement=function(y,C,F){var J,ce={},Se=null;if(C!=null)for(J in C.key!==void 0&&(Se=""+C.key),C)te.call(C,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ce[J]=C[J]);var se=arguments.length-2;if(se===1)ce.children=F;else if(1<se){for(var je=Array(se),xe=0;xe<se;xe++)je[xe]=arguments[xe+2];ce.children=je}if(y&&y.defaultProps)for(J in se=y.defaultProps,se)ce[J]===void 0&&(ce[J]=se[J]);return ne(y,Se,void 0,void 0,null,ce)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(y){return{$$typeof:g,render:y}},_e.isValidElement=de,_e.lazy=function(y){return{$$typeof:b,_payload:{_status:-1,_result:y},_init:Z}},_e.memo=function(y,C){return{$$typeof:x,type:y,compare:C===void 0?null:C}},_e.startTransition=function(y){var C=U.T,F={};U.T=F;try{var J=y(),ce=U.S;ce!==null&&ce(F,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(ee,ue)}catch(Se){ue(Se)}finally{U.T=C}},_e.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},_e.use=function(y){return U.H.use(y)},_e.useActionState=function(y,C,F){return U.H.useActionState(y,C,F)},_e.useCallback=function(y,C){return U.H.useCallback(y,C)},_e.useContext=function(y){return U.H.useContext(y)},_e.useDebugValue=function(){},_e.useDeferredValue=function(y,C){return U.H.useDeferredValue(y,C)},_e.useEffect=function(y,C,F){var J=U.H;if(typeof F=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(y,C)},_e.useId=function(){return U.H.useId()},_e.useImperativeHandle=function(y,C,F){return U.H.useImperativeHandle(y,C,F)},_e.useInsertionEffect=function(y,C){return U.H.useInsertionEffect(y,C)},_e.useLayoutEffect=function(y,C){return U.H.useLayoutEffect(y,C)},_e.useMemo=function(y,C){return U.H.useMemo(y,C)},_e.useOptimistic=function(y,C){return U.H.useOptimistic(y,C)},_e.useReducer=function(y,C,F){return U.H.useReducer(y,C,F)},_e.useRef=function(y){return U.H.useRef(y)},_e.useState=function(y){return U.H.useState(y)},_e.useSyncExternalStore=function(y,C,F){return U.H.useSyncExternalStore(y,C,F)},_e.useTransition=function(){return U.H.useTransition()},_e.version="19.1.1",_e}var ph;function tf(){return ph||(ph=1,jc.exports=Vx()),jc.exports}var Dc={exports:{}},Ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mh;function Yx(){if(mh)return Ct;mh=1;var a=tf();function r(w){var x="https://react.dev/errors/"+w;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)x+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+w+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(w,x,b){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:A==null?null:""+A,children:w,containerInfo:x,implementation:b}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(w,x){if(w==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ct.createPortal=function(w,x){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(r(299));return d(w,x,null,b)},Ct.flushSync=function(w){var x=p.T,b=u.p;try{if(p.T=null,u.p=2,w)return w()}finally{p.T=x,u.p=b,u.d.f()}},Ct.preconnect=function(w,x){typeof w=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,u.d.C(w,x))},Ct.prefetchDNS=function(w){typeof w=="string"&&u.d.D(w)},Ct.preinit=function(w,x){if(typeof w=="string"&&x&&typeof x.as=="string"){var b=x.as,A=g(b,x.crossOrigin),E=typeof x.integrity=="string"?x.integrity:void 0,$=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;b==="style"?u.d.S(w,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:A,integrity:E,fetchPriority:$}):b==="script"&&u.d.X(w,{crossOrigin:A,integrity:E,fetchPriority:$,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Ct.preinitModule=function(w,x){if(typeof w=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var b=g(x.as,x.crossOrigin);u.d.M(w,{crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&u.d.M(w)},Ct.preload=function(w,x){if(typeof w=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var b=x.as,A=g(b,x.crossOrigin);u.d.L(w,b,{crossOrigin:A,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Ct.preloadModule=function(w,x){if(typeof w=="string")if(x){var b=g(x.as,x.crossOrigin);u.d.m(w,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else u.d.m(w)},Ct.requestFormReset=function(w){u.d.r(w)},Ct.unstable_batchedUpdates=function(w,x){return w(x)},Ct.useFormState=function(w,x,b){return p.H.useFormState(w,x,b)},Ct.useFormStatus=function(){return p.H.useHostTransitionStatus()},Ct.version="19.1.1",Ct}var gh;function gp(){if(gh)return Dc.exports;gh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Dc.exports=Yx(),Dc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function Gx(){if(xh)return Kl;xh=1;var a=qx(),r=tf(),o=gp();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(u(188))}function w(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,i=t;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return g(l),e;if(s===i)return g(l),t;s=s.sibling}throw Error(u(188))}if(n.return!==i.return)n=l,i=s;else{for(var h=!1,m=l.child;m;){if(m===n){h=!0,n=l,i=s;break}if(m===i){h=!0,i=l,n=s;break}m=m.sibling}if(!h){for(m=s.child;m;){if(m===n){h=!0,n=s,i=l;break}if(m===i){h=!0,i=s,n=l;break}m=m.sibling}if(!h)throw Error(u(189))}}if(n.alternate!==i)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,A=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),$=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),Te=Symbol.for("react.memo_cache_sentinel"),Re=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=Re&&e[Re]||e["@@iterator"],typeof e=="function"?e:null)}var re=Symbol.for("react.client.reference");function be(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case R:return"Profiler";case V:return"StrictMode";case U:return"Suspense";case te:return"SuspenseList";case de:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case $:return"Portal";case Q:return(e.displayName||"Context")+".Provider";case H:return(e._context.displayName||"Context")+".Consumer";case le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return t=e.displayName||null,t!==null?t:be(e.type)||"Memo";case fe:t=e._payload,e=e._init;try{return be(e(t))}catch{}}return null}var ge=Array.isArray,O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},ee=[],y=-1;function C(e){return{current:e}}function F(e){0>y||(e.current=ee[y],ee[y]=null,y--)}function J(e,t){y++,ee[y]=e.current,e.current=t}var ce=C(null),Se=C(null),se=C(null),je=C(null);function xe(e,t){switch(J(se,t),J(Se,e),J(ce,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?B1(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=B1(t),e=H1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(ce),J(ce,e)}function Ve(){F(ce),F(Se),F(se)}function mt(e){e.memoizedState!==null&&J(je,e);var t=ce.current,n=H1(t,e.type);t!==n&&(J(Se,e),J(ce,n))}function Nt(e){Se.current===e&&(F(ce),F(Se)),je.current===e&&(F(je),Yl._currentValue=ue)}var Ee=Object.prototype.hasOwnProperty,ye=a.unstable_scheduleCallback,Ye=a.unstable_cancelCallback,He=a.unstable_shouldYield,gt=a.unstable_requestPaint,nt=a.unstable_now,Nn=a.unstable_getCurrentPriorityLevel,Wt=a.unstable_ImmediatePriority,S=a.unstable_UserBlockingPriority,j=a.unstable_NormalPriority,L=a.unstable_LowPriority,ie=a.unstable_IdlePriority,ae=a.log,I=a.unstable_setDisableYieldValue,oe=null,Ae=null;function De(e){if(typeof ae=="function"&&I(e),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(oe,e)}catch{}}var Ze=Math.clz32?Math.clz32:ja,qt=Math.log,Mt=Math.LN2;function ja(e){return e>>>=0,e===0?32:31-(qt(e)/Mt|0)|0}var Ut=256,rt=4194304;function Bt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mn(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,s=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var m=i&134217727;return m!==0?(i=m&~s,i!==0?l=Bt(i):(h&=m,h!==0?l=Bt(h):n||(n=m&~e,n!==0&&(l=Bt(n))))):(m=i&~s,m!==0?l=Bt(m):h!==0?l=Bt(h):n||(n=i&~e,n!==0&&(l=Bt(n)))),l===0?0:t!==0&&t!==l&&(t&s)===0&&(s=l&-l,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:l}function Un(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ea(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gr(){var e=Ut;return Ut<<=1,(Ut&4194048)===0&&(Ut=256),e}function xr(){var e=rt;return rt<<=1,(rt&62914560)===0&&(rt=4194304),e}function Ii(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Am(e,t,n,i,l,s){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,v=e.expirationTimes,_=e.hiddenUpdates;for(n=h&~n;0<n;){var q=31-Ze(n),X=1<<q;m[q]=0,v[q]=-1;var k=_[q];if(k!==null)for(_[q]=null,q=0;q<k.length;q++){var N=k[q];N!==null&&(N.lane&=-536870913)}n&=~X}i!==0&&wf(e,i,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(h&~t))}function wf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ze(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function Ef(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ze(n),l=1<<i;l&t|e[i]&t&&(e[i]|=t),n&=~l}}function ho(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function po(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Af(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:ah(e.type))}function zm(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var ta=Math.random().toString(36).slice(2),_t="__reactFiber$"+ta,Vt="__reactProps$"+ta,ei="__reactContainer$"+ta,mo="__reactEvents$"+ta,Tm="__reactListeners$"+ta,jm="__reactHandles$"+ta,zf="__reactResources$"+ta,Pi="__reactMarker$"+ta;function go(e){delete e[_t],delete e[Vt],delete e[mo],delete e[Tm],delete e[jm]}function ti(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ei]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Y1(e);e!==null;){if(n=e[_t])return n;e=Y1(e)}return t}e=n,n=e.parentNode}return null}function ni(e){if(e=e[_t]||e[ei]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function el(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function ai(e){var t=e[zf];return t||(t=e[zf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function vt(e){e[Pi]=!0}var Tf=new Set,jf={};function Da(e,t){ii(e,t),ii(e+"Capture",t)}function ii(e,t){for(jf[e]=t,e=0;e<t.length;e++)Tf.add(t[e])}var Dm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Df={},Of={};function Om(e){return Ee.call(Of,e)?!0:Ee.call(Df,e)?!1:Dm.test(e)?Of[e]=!0:(Df[e]=!0,!1)}function yr(e,t,n){if(Om(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function vr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Bn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var xo,_f;function li(e){if(xo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xo=t&&t[1]||"",_f=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xo+e+_f}var yo=!1;function vo(e,t){if(!e||yo)return"";yo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(N){var k=N}Reflect.construct(e,[],X)}else{try{X.call()}catch(N){k=N}e.call(X.prototype)}}else{try{throw Error()}catch(N){k=N}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(N){if(N&&k&&typeof N.stack=="string")return[N.stack,k.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),h=s[0],m=s[1];if(h&&m){var v=h.split(`
`),_=m.split(`
`);for(l=i=0;i<v.length&&!v[i].includes("DetermineComponentFrameRoot");)i++;for(;l<_.length&&!_[l].includes("DetermineComponentFrameRoot");)l++;if(i===v.length||l===_.length)for(i=v.length-1,l=_.length-1;1<=i&&0<=l&&v[i]!==_[l];)l--;for(;1<=i&&0<=l;i--,l--)if(v[i]!==_[l]){if(i!==1||l!==1)do if(i--,l--,0>l||v[i]!==_[l]){var q=`
`+v[i].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=i&&0<=l);break}}}finally{yo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?li(n):""}function _m(e){switch(e.tag){case 26:case 27:case 5:return li(e.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 15:return vo(e.type,!1);case 11:return vo(e.type.render,!1);case 1:return vo(e.type,!0);case 31:return li("Activity");default:return""}}function Rf(e){try{var t="";do t+=_m(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rm(e){var t=Cf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(h){i=""+h,s.call(this,h)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(h){i=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function br(e){e._valueTracker||(e._valueTracker=Rm(e))}function kf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Cf(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cm=/[\n"\\]/g;function on(e){return e.replace(Cm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bo(e,t,n,i,l,s,h,m){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+sn(t)):e.value!==""+sn(t)&&(e.value=""+sn(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?So(e,h,sn(t)):n!=null?So(e,h,sn(n)):i!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+sn(m):e.removeAttribute("name")}function Nf(e,t,n,i,l,s,h,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;n=n!=null?""+sn(n):"",t=t!=null?""+sn(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=m?e.checked:!!i,e.defaultChecked=!!i,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h)}function So(e,t,n){t==="number"&&Sr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ri(e,t,n,i){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&i&&(e[n].defaultSelected=!0)}else{for(n=""+sn(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Mf(e,t,n){if(t!=null&&(t=""+sn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+sn(n):""}function Uf(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(u(92));if(ge(i)){if(1<i.length)throw Error(u(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=sn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var km=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bf(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||km.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Hf(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&n[l]!==i&&Bf(e,l,i)}else for(var s in t)t.hasOwnProperty(s)&&Bf(e,s,t[s])}function wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wr(e){return Mm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Eo=null;function Ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oi=null,ui=null;function Lf(e){var t=ni(e);if(t&&(e=t.stateNode)){var n=e[Vt]||null;e:switch(e=t.stateNode,t.type){case"input":if(bo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+on(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var l=i[Vt]||null;if(!l)throw Error(u(90));bo(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&kf(i)}break e;case"textarea":Mf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ri(e,!!n.multiple,t,!1)}}}var zo=!1;function qf(e,t,n){if(zo)return e(t,n);zo=!0;try{var i=e(t);return i}finally{if(zo=!1,(oi!==null||ui!==null)&&(ss(),oi&&(t=oi,e=ui,ui=oi=null,Lf(t),e)))for(t=0;t<e.length;t++)Lf(e[t])}}function tl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Vt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),To=!1;if(Hn)try{var nl={};Object.defineProperty(nl,"passive",{get:function(){To=!0}}),window.addEventListener("test",nl,nl),window.removeEventListener("test",nl,nl)}catch{To=!1}var na=null,jo=null,Er=null;function Vf(){if(Er)return Er;var e,t=jo,n=t.length,i,l="value"in na?na.value:na.textContent,s=l.length;for(e=0;e<n&&t[e]===l[e];e++);var h=n-e;for(i=1;i<=h&&t[n-i]===l[s-i];i++);return Er=l.slice(e,1<i?1-i:void 0)}function Ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function Yf(){return!1}function Yt(e){function t(n,i,l,s,h){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=s,this.target=h,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zr:Yf,this.isPropagationStopped=Yf,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),t}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tr=Yt(Oa),al=b({},Oa,{view:0,detail:0}),Um=Yt(al),Do,Oo,il,jr=b({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==il&&(il&&e.type==="mousemove"?(Do=e.screenX-il.screenX,Oo=e.screenY-il.screenY):Oo=Do=0,il=e),Do)},movementY:function(e){return"movementY"in e?e.movementY:Oo}}),Gf=Yt(jr),Bm=b({},jr,{dataTransfer:0}),Hm=Yt(Bm),Lm=b({},al,{relatedTarget:0}),_o=Yt(Lm),qm=b({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),Vm=Yt(qm),Ym=b({},Oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gm=Yt(Ym),Xm=b({},Oa,{data:0}),Xf=Yt(Xm),Zm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$m={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Km(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qm[e])?!!t[e]:!1}function Ro(){return Km}var Jm=b({},al,{key:function(e){if(e.key){var t=Zm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$m[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ro,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fm=Yt(Jm),Wm=b({},jr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=Yt(Wm),Im=b({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ro}),Pm=Yt(Im),eg=b({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),tg=Yt(eg),ng=b({},jr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ag=Yt(ng),ig=b({},Oa,{newState:0,oldState:0}),lg=Yt(ig),rg=[9,13,27,32],Co=Hn&&"CompositionEvent"in window,ll=null;Hn&&"documentMode"in document&&(ll=document.documentMode);var sg=Hn&&"TextEvent"in window&&!ll,$f=Hn&&(!Co||ll&&8<ll&&11>=ll),Qf=" ",Kf=!1;function Jf(e,t){switch(e){case"keyup":return rg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ci=!1;function og(e,t){switch(e){case"compositionend":return Ff(t);case"keypress":return t.which!==32?null:(Kf=!0,Qf);case"textInput":return e=t.data,e===Qf&&Kf?null:e;default:return null}}function ug(e,t){if(ci)return e==="compositionend"||!Co&&Jf(e,t)?(e=Vf(),Er=jo=na=null,ci=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $f&&t.locale!=="ko"?null:t.data;default:return null}}var cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cg[e.type]:t==="textarea"}function If(e,t,n,i){oi?ui?ui.push(i):ui=[i]:oi=i,t=hs(t,"onChange"),0<t.length&&(n=new Tr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var rl=null,sl=null;function fg(e){C1(e,0)}function Dr(e){var t=el(e);if(kf(t))return e}function Pf(e,t){if(e==="change")return t}var ed=!1;if(Hn){var ko;if(Hn){var No="oninput"in document;if(!No){var td=document.createElement("div");td.setAttribute("oninput","return;"),No=typeof td.oninput=="function"}ko=No}else ko=!1;ed=ko&&(!document.documentMode||9<document.documentMode)}function nd(){rl&&(rl.detachEvent("onpropertychange",ad),sl=rl=null)}function ad(e){if(e.propertyName==="value"&&Dr(sl)){var t=[];If(t,sl,e,Ao(e)),qf(fg,t)}}function dg(e,t,n){e==="focusin"?(nd(),rl=t,sl=n,rl.attachEvent("onpropertychange",ad)):e==="focusout"&&nd()}function hg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dr(sl)}function pg(e,t){if(e==="click")return Dr(t)}function mg(e,t){if(e==="input"||e==="change")return Dr(t)}function gg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:gg;function ol(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!Ee.call(t,l)||!It(e[l],t[l]))return!1}return!0}function id(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ld(e,t){var n=id(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=id(n)}}function rd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Sr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sr(e.document)}return t}function Mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var xg=Hn&&"documentMode"in document&&11>=document.documentMode,fi=null,Uo=null,ul=null,Bo=!1;function od(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bo||fi==null||fi!==Sr(i)||(i=fi,"selectionStart"in i&&Mo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ul&&ol(ul,i)||(ul=i,i=hs(Uo,"onSelect"),0<i.length&&(t=new Tr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=fi)))}function _a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var di={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},Ho={},ud={};Hn&&(ud=document.createElement("div").style,"AnimationEvent"in window||(delete di.animationend.animation,delete di.animationiteration.animation,delete di.animationstart.animation),"TransitionEvent"in window||delete di.transitionend.transition);function Ra(e){if(Ho[e])return Ho[e];if(!di[e])return e;var t=di[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ud)return Ho[e]=t[n];return e}var cd=Ra("animationend"),fd=Ra("animationiteration"),dd=Ra("animationstart"),yg=Ra("transitionrun"),vg=Ra("transitionstart"),bg=Ra("transitioncancel"),hd=Ra("transitionend"),pd=new Map,Lo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lo.push("scrollEnd");function yn(e,t){pd.set(e,t),Da(t,[e])}var md=new WeakMap;function un(e,t){if(typeof e=="object"&&e!==null){var n=md.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Rf(t)},md.set(e,t),t)}return{value:e,source:t,stack:Rf(t)}}var cn=[],hi=0,qo=0;function Or(){for(var e=hi,t=qo=hi=0;t<e;){var n=cn[t];cn[t++]=null;var i=cn[t];cn[t++]=null;var l=cn[t];cn[t++]=null;var s=cn[t];if(cn[t++]=null,i!==null&&l!==null){var h=i.pending;h===null?l.next=l:(l.next=h.next,h.next=l),i.pending=l}s!==0&&gd(n,l,s)}}function _r(e,t,n,i){cn[hi++]=e,cn[hi++]=t,cn[hi++]=n,cn[hi++]=i,qo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Vo(e,t,n,i){return _r(e,t,n,i),Rr(e)}function pi(e,t){return _r(e,null,null,t),Rr(e)}function gd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var l=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&t!==null&&(l=31-Ze(n),e=s.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=n|536870912),s):null}function Rr(e){if(50<Nl)throw Nl=0,Qu=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function Sg(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(e,t,n,i){return new Sg(e,t,n,i)}function Yo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ln(e,t){var n=e.alternate;return n===null?(n=Pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function xd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Cr(e,t,n,i,l,s){var h=0;if(i=e,typeof e=="function")Yo(e)&&(h=1);else if(typeof e=="string")h=Ex(e,n,ce.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case de:return e=Pt(31,n,t,l),e.elementType=de,e.lanes=s,e;case M:return Ca(n.children,l,s,t);case V:h=8,l|=24;break;case R:return e=Pt(12,n,t,l|2),e.elementType=R,e.lanes=s,e;case U:return e=Pt(13,n,t,l),e.elementType=U,e.lanes=s,e;case te:return e=Pt(19,n,t,l),e.elementType=te,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:case Q:h=10;break e;case H:h=9;break e;case le:h=11;break e;case ne:h=14;break e;case fe:h=16,i=null;break e}h=29,n=Error(u(130,e===null?"null":typeof e,"")),i=null}return t=Pt(h,n,t,l),t.elementType=e,t.type=i,t.lanes=s,t}function Ca(e,t,n,i){return e=Pt(7,e,i,t),e.lanes=n,e}function Go(e,t,n){return e=Pt(6,e,null,t),e.lanes=n,e}function Xo(e,t,n){return t=Pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gi=[],xi=0,kr=null,Nr=0,fn=[],dn=0,ka=null,qn=1,Vn="";function Na(e,t){gi[xi++]=Nr,gi[xi++]=kr,kr=e,Nr=t}function yd(e,t,n){fn[dn++]=qn,fn[dn++]=Vn,fn[dn++]=ka,ka=e;var i=qn;e=Vn;var l=32-Ze(i)-1;i&=~(1<<l),n+=1;var s=32-Ze(t)+l;if(30<s){var h=l-l%5;s=(i&(1<<h)-1).toString(32),i>>=h,l-=h,qn=1<<32-Ze(t)+l|n<<l|i,Vn=s+e}else qn=1<<s|n<<l|i,Vn=e}function Zo(e){e.return!==null&&(Na(e,1),yd(e,1,0))}function $o(e){for(;e===kr;)kr=gi[--xi],gi[xi]=null,Nr=gi[--xi],gi[xi]=null;for(;e===ka;)ka=fn[--dn],fn[dn]=null,Vn=fn[--dn],fn[dn]=null,qn=fn[--dn],fn[dn]=null}var Ht=null,it=null,Ge=!1,Ma=null,zn=!1,Qo=Error(u(519));function Ua(e){var t=Error(u(418,""));throw dl(un(t,e)),Qo}function vd(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[_t]=e,t[Vt]=i,n){case"dialog":Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":case"embed":Ue("load",t);break;case"video":case"audio":for(n=0;n<Ul.length;n++)Ue(Ul[n],t);break;case"source":Ue("error",t);break;case"img":case"image":case"link":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"input":Ue("invalid",t),Nf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),br(t);break;case"select":Ue("invalid",t);break;case"textarea":Ue("invalid",t),Uf(t,i.value,i.defaultValue,i.children),br(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||U1(t.textContent,n)?(i.popover!=null&&(Ue("beforetoggle",t),Ue("toggle",t)),i.onScroll!=null&&Ue("scroll",t),i.onScrollEnd!=null&&Ue("scrollend",t),i.onClick!=null&&(t.onclick=ps),t=!0):t=!1,t||Ua(e)}function bd(e){for(Ht=e.return;Ht;)switch(Ht.tag){case 5:case 13:zn=!1;return;case 27:case 3:zn=!0;return;default:Ht=Ht.return}}function cl(e){if(e!==Ht)return!1;if(!Ge)return bd(e),Ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||uc(e.type,e.memoizedProps)),n=!n),n&&it&&Ua(e),bd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){it=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}it=null}}else t===27?(t=it,ya(e.type)?(e=hc,hc=null,it=e):it=t):it=Ht?bn(e.stateNode.nextSibling):null;return!0}function fl(){it=Ht=null,Ge=!1}function Sd(){var e=Ma;return e!==null&&(Zt===null?Zt=e:Zt.push.apply(Zt,e),Ma=null),e}function dl(e){Ma===null?Ma=[e]:Ma.push(e)}var Ko=C(null),Ba=null,Yn=null;function aa(e,t,n){J(Ko,t._currentValue),t._currentValue=n}function Gn(e){e._currentValue=Ko.current,F(Ko)}function Jo(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Fo(e,t,n,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var h=l.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=l;for(var v=0;v<t.length;v++)if(m.context===t[v]){s.lanes|=n,m=s.alternate,m!==null&&(m.lanes|=n),Jo(s.return,n,e),i||(h=null);break e}s=m.next}}else if(l.tag===18){if(h=l.return,h===null)throw Error(u(341));h.lanes|=n,s=h.alternate,s!==null&&(s.lanes|=n),Jo(h,n,e),h=null}else h=l.child;if(h!==null)h.return=l;else for(h=l;h!==null;){if(h===e){h=null;break}if(l=h.sibling,l!==null){l.return=h.return,h=l;break}h=h.return}l=h}}function hl(e,t,n,i){e=null;for(var l=t,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var h=l.alternate;if(h===null)throw Error(u(387));if(h=h.memoizedProps,h!==null){var m=l.type;It(l.pendingProps.value,h.value)||(e!==null?e.push(m):e=[m])}}else if(l===je.current){if(h=l.alternate,h===null)throw Error(u(387));h.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Yl):e=[Yl])}l=l.return}e!==null&&Fo(t,e,n,i),t.flags|=262144}function Mr(e){for(e=e.firstContext;e!==null;){if(!It(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){Ba=e,Yn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rt(e){return wd(Ba,e)}function Ur(e,t){return Ba===null&&Ha(e),wd(e,t)}function wd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yn===null){if(e===null)throw Error(u(308));Yn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yn=Yn.next=t;return n}var wg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Eg=a.unstable_scheduleCallback,Ag=a.unstable_NormalPriority,xt={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wo(){return{controller:new wg,data:new Map,refCount:0}}function pl(e){e.refCount--,e.refCount===0&&Eg(Ag,function(){e.controller.abort()})}var ml=null,Io=0,yi=0,vi=null;function zg(e,t){if(ml===null){var n=ml=[];Io=0,yi=ec(),vi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Io++,t.then(Ed,Ed),t}function Ed(){if(--Io===0&&ml!==null){vi!==null&&(vi.status="fulfilled");var e=ml;ml=null,yi=0,vi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Tg(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var Ad=O.S;O.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&zg(e,t),Ad!==null&&Ad(e,t)};var La=C(null);function Po(){var e=La.current;return e!==null?e:Ie.pooledCache}function Br(e,t){t===null?J(La,La.current):J(La,t.pool)}function zd(){var e=Po();return e===null?null:{parent:xt._currentValue,pool:e}}var gl=Error(u(460)),Td=Error(u(474)),Hr=Error(u(542)),eu={then:function(){}};function jd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lr(){}function Dd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Lr,Lr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_d(e),e;default:if(typeof t.status=="string")t.then(Lr,Lr);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_d(e),e}throw xl=t,gl}}var xl=null;function Od(){if(xl===null)throw Error(u(459));var e=xl;return xl=null,e}function _d(e){if(e===gl||e===Hr)throw Error(u(483))}var ia=!1;function tu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ra(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,($e&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=Rr(e),gd(e,null,n),t}return _r(e,i,t,n),Rr(e)}function yl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Ef(e,n)}}function au(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?l=s=h:s=s.next=h,n=n.next}while(n!==null);s===null?l=s=t:s=s.next=t}else l=s=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var iu=!1;function vl(){if(iu){var e=vi;if(e!==null)throw e}}function bl(e,t,n,i){iu=!1;var l=e.updateQueue;ia=!1;var s=l.firstBaseUpdate,h=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var v=m,_=v.next;v.next=null,h===null?s=_:h.next=_,h=v;var q=e.alternate;q!==null&&(q=q.updateQueue,m=q.lastBaseUpdate,m!==h&&(m===null?q.firstBaseUpdate=_:m.next=_,q.lastBaseUpdate=v))}if(s!==null){var X=l.baseState;h=0,q=_=v=null,m=s;do{var k=m.lane&-536870913,N=k!==m.lane;if(N?(Be&k)===k:(i&k)===k){k!==0&&k===yi&&(iu=!0),q!==null&&(q=q.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var ze=e,ve=m;k=t;var Fe=n;switch(ve.tag){case 1:if(ze=ve.payload,typeof ze=="function"){X=ze.call(Fe,X,k);break e}X=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=ve.payload,k=typeof ze=="function"?ze.call(Fe,X,k):ze,k==null)break e;X=b({},X,k);break e;case 2:ia=!0}}k=m.callback,k!==null&&(e.flags|=64,N&&(e.flags|=8192),N=l.callbacks,N===null?l.callbacks=[k]:N.push(k))}else N={lane:k,tag:m.tag,payload:m.payload,callback:m.callback,next:null},q===null?(_=q=N,v=X):q=q.next=N,h|=k;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;N=m,m=N.next,N.next=null,l.lastBaseUpdate=N,l.shared.pending=null}}while(!0);q===null&&(v=X),l.baseState=v,l.firstBaseUpdate=_,l.lastBaseUpdate=q,s===null&&(l.shared.lanes=0),pa|=h,e.lanes=h,e.memoizedState=X}}function Rd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Cd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rd(n[e],t)}var bi=C(null),qr=C(0);function kd(e,t){e=Fn,J(qr,e),J(bi,t),Fn=e|t.baseLanes}function lu(){J(qr,Fn),J(bi,bi.current)}function ru(){Fn=qr.current,F(bi),F(qr)}var sa=0,ke=null,Ke=null,ct=null,Vr=!1,Si=!1,qa=!1,Yr=0,Sl=0,wi=null,jg=0;function st(){throw Error(u(321))}function su(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function ou(e,t,n,i,l,s){return sa=s,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?g0:x0,qa=!1,s=n(i,l),qa=!1,Si&&(s=Md(t,n,i,l)),Nd(e),s}function Nd(e){O.H=Kr;var t=Ke!==null&&Ke.next!==null;if(sa=0,ct=Ke=ke=null,Vr=!1,Sl=0,wi=null,t)throw Error(u(300));e===null||bt||(e=e.dependencies,e!==null&&Mr(e)&&(bt=!0))}function Md(e,t,n,i){ke=e;var l=0;do{if(Si&&(wi=null),Sl=0,Si=!1,25<=l)throw Error(u(301));if(l+=1,ct=Ke=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}O.H=Ng,s=t(n,i)}while(Si);return s}function Dg(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?wl(t):t,e=e.useState()[0],(Ke!==null?Ke.memoizedState:null)!==e&&(ke.flags|=1024),t}function uu(){var e=Yr!==0;return Yr=0,e}function cu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function fu(e){if(Vr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Vr=!1}sa=0,ct=Ke=ke=null,Si=!1,Sl=Yr=0,wi=null}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?ke.memoizedState=ct=e:ct=ct.next=e,ct}function ft(){if(Ke===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=ct===null?ke.memoizedState:ct.next;if(t!==null)ct=t,Ke=e;else{if(e===null)throw ke.alternate===null?Error(u(467)):Error(u(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},ct===null?ke.memoizedState=ct=e:ct=ct.next=e}return ct}function du(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wl(e){var t=Sl;return Sl+=1,wi===null&&(wi=[]),e=Dd(wi,e,t),t=ke,(ct===null?t.memoizedState:ct.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?g0:x0),e}function Gr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wl(e);if(e.$$typeof===Q)return Rt(e)}throw Error(u(438,String(e)))}function hu(e){var t=null,n=ke.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ke.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=du(),ke.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Te;return t.index++,n}function Xn(e,t){return typeof t=="function"?t(e):t}function Xr(e){var t=ft();return pu(t,Ke,e)}function pu(e,t,n){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=n;var l=e.baseQueue,s=i.pending;if(s!==null){if(l!==null){var h=l.next;l.next=s.next,s.next=h}t.baseQueue=l=s,i.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{t=l.next;var m=h=null,v=null,_=t,q=!1;do{var X=_.lane&-536870913;if(X!==_.lane?(Be&X)===X:(sa&X)===X){var k=_.revertLane;if(k===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),X===yi&&(q=!0);else if((sa&k)===k){_=_.next,k===yi&&(q=!0);continue}else X={lane:0,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},v===null?(m=v=X,h=s):v=v.next=X,ke.lanes|=k,pa|=k;X=_.action,qa&&n(s,X),s=_.hasEagerState?_.eagerState:n(s,X)}else k={lane:X,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},v===null?(m=v=k,h=s):v=v.next=k,ke.lanes|=X,pa|=X;_=_.next}while(_!==null&&_!==t);if(v===null?h=s:v.next=m,!It(s,e.memoizedState)&&(bt=!0,q&&(n=vi,n!==null)))throw n;e.memoizedState=s,e.baseState=h,e.baseQueue=v,i.lastRenderedState=s}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function mu(e){var t=ft(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var i=n.dispatch,l=n.pending,s=t.memoizedState;if(l!==null){n.pending=null;var h=l=l.next;do s=e(s,h.action),h=h.next;while(h!==l);It(s,t.memoizedState)||(bt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Ud(e,t,n){var i=ke,l=ft(),s=Ge;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var h=!It((Ke||l).memoizedState,n);h&&(l.memoizedState=n,bt=!0),l=l.queue;var m=Ld.bind(null,i,l,e);if(El(2048,8,m,[e]),l.getSnapshot!==t||h||ct!==null&&ct.memoizedState.tag&1){if(i.flags|=2048,Ei(9,Zr(),Hd.bind(null,i,l,n,t),null),Ie===null)throw Error(u(349));s||(sa&124)!==0||Bd(i,t,n)}return n}function Bd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t=du(),ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hd(e,t,n,i){t.value=n,t.getSnapshot=i,qd(t)&&Vd(e)}function Ld(e,t,n){return n(function(){qd(t)&&Vd(e)})}function qd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function Vd(e){var t=pi(e,2);t!==null&&ln(t,e,2)}function gu(e){var t=Gt();if(typeof e=="function"){var n=e;if(e=n(),qa){De(!0);try{n()}finally{De(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t}function Yd(e,t,n,i){return e.baseState=n,pu(e,Ke,typeof i=="function"?i:Xn)}function Og(e,t,n,i,l){if(Qr(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){s.listeners.push(h)}};O.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Gd(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Gd(e,t){var n=t.action,i=t.payload,l=e.state;if(t.isTransition){var s=O.T,h={};O.T=h;try{var m=n(l,i),v=O.S;v!==null&&v(h,m),Xd(e,t,m)}catch(_){xu(e,t,_)}finally{O.T=s}}else try{s=n(l,i),Xd(e,t,s)}catch(_){xu(e,t,_)}}function Xd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Zd(e,t,i)},function(i){return xu(e,t,i)}):Zd(e,t,n)}function Zd(e,t,n){t.status="fulfilled",t.value=n,$d(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Gd(e,n)))}function xu(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,$d(t),t=t.next;while(t!==i)}e.action=null}function $d(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qd(e,t){return t}function Kd(e,t){if(Ge){var n=Ie.formState;if(n!==null){e:{var i=ke;if(Ge){if(it){t:{for(var l=it,s=zn;l.nodeType!==8;){if(!s){l=null;break t}if(l=bn(l.nextSibling),l===null){l=null;break t}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){it=bn(l.nextSibling),i=l.data==="F!";break e}}Ua(i)}i=!1}i&&(t=n[0])}}return n=Gt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qd,lastRenderedState:t},n.queue=i,n=h0.bind(null,ke,i),i.dispatch=n,i=gu(!1),s=wu.bind(null,ke,!1,i.queue),i=Gt(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,n=Og.bind(null,ke,l,s,n),l.dispatch=n,i.memoizedState=e,[t,n,!1]}function Jd(e){var t=ft();return Fd(t,Ke,e)}function Fd(e,t,n){if(t=pu(e,t,Qd)[0],e=Xr(Xn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=wl(t)}catch(h){throw h===gl?Hr:h}else i=t;t=ft();var l=t.queue,s=l.dispatch;return n!==t.memoizedState&&(ke.flags|=2048,Ei(9,Zr(),_g.bind(null,l,n),null)),[i,s,e]}function _g(e,t){e.action=t}function Wd(e){var t=ft(),n=Ke;if(n!==null)return Fd(t,n,e);ft(),t=t.memoizedState,n=ft();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ei(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ke.updateQueue,t===null&&(t=du(),ke.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Zr(){return{destroy:void 0,resource:void 0}}function Id(){return ft().memoizedState}function $r(e,t,n,i){var l=Gt();i=i===void 0?null:i,ke.flags|=e,l.memoizedState=Ei(1|t,Zr(),n,i)}function El(e,t,n,i){var l=ft();i=i===void 0?null:i;var s=l.memoizedState.inst;Ke!==null&&i!==null&&su(i,Ke.memoizedState.deps)?l.memoizedState=Ei(t,s,n,i):(ke.flags|=e,l.memoizedState=Ei(1|t,s,n,i))}function Pd(e,t){$r(8390656,8,e,t)}function e0(e,t){El(2048,8,e,t)}function t0(e,t){return El(4,2,e,t)}function n0(e,t){return El(4,4,e,t)}function a0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function i0(e,t,n){n=n!=null?n.concat([e]):null,El(4,4,a0.bind(null,t,e),n)}function yu(){}function l0(e,t){var n=ft();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&su(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function r0(e,t){var n=ft();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&su(t,i[1]))return i[0];if(i=e(),qa){De(!0);try{e()}finally{De(!1)}}return n.memoizedState=[i,t],i}function vu(e,t,n){return n===void 0||(sa&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=u1(),ke.lanes|=e,pa|=e,n)}function s0(e,t,n,i){return It(n,t)?n:bi.current!==null?(e=vu(e,n,i),It(e,t)||(bt=!0),e):(sa&42)===0?(bt=!0,e.memoizedState=n):(e=u1(),ke.lanes|=e,pa|=e,t)}function o0(e,t,n,i,l){var s=Z.p;Z.p=s!==0&&8>s?s:8;var h=O.T,m={};O.T=m,wu(e,!1,t,n);try{var v=l(),_=O.S;if(_!==null&&_(m,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var q=Tg(v,i);Al(e,t,q,an(e))}else Al(e,t,i,an(e))}catch(X){Al(e,t,{then:function(){},status:"rejected",reason:X},an())}finally{Z.p=s,O.T=h}}function Rg(){}function bu(e,t,n,i){if(e.tag!==5)throw Error(u(476));var l=u0(e).queue;o0(e,l,t,ue,n===null?Rg:function(){return c0(e),n(i)})}function u0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function c0(e){var t=u0(e).next.queue;Al(e,t,{},an())}function Su(){return Rt(Yl)}function f0(){return ft().memoizedState}function d0(){return ft().memoizedState}function Cg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=an();e=la(n);var i=ra(t,e,n);i!==null&&(ln(i,t,n),yl(i,t,n)),t={cache:Wo()},e.payload=t;return}t=t.return}}function kg(e,t,n){var i=an();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Qr(e)?p0(t,n):(n=Vo(e,t,n,i),n!==null&&(ln(n,e,i),m0(n,t,i)))}function h0(e,t,n){var i=an();Al(e,t,n,i)}function Al(e,t,n,i){var l={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qr(e))p0(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var h=t.lastRenderedState,m=s(h,n);if(l.hasEagerState=!0,l.eagerState=m,It(m,h))return _r(e,t,l,0),Ie===null&&Or(),!1}catch{}finally{}if(n=Vo(e,t,l,i),n!==null)return ln(n,e,i),m0(n,t,i),!0}return!1}function wu(e,t,n,i){if(i={lane:2,revertLane:ec(),action:i,hasEagerState:!1,eagerState:null,next:null},Qr(e)){if(t)throw Error(u(479))}else t=Vo(e,n,i,2),t!==null&&ln(t,e,2)}function Qr(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function p0(e,t){Si=Vr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function m0(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Ef(e,n)}}var Kr={readContext:Rt,use:Gr,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st},g0={readContext:Rt,use:Gr,useCallback:function(e,t){return Gt().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:Pd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,$r(4194308,4,a0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){$r(4,2,e,t)},useMemo:function(e,t){var n=Gt();t=t===void 0?null:t;var i=e();if(qa){De(!0);try{e()}finally{De(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Gt();if(n!==void 0){var l=n(t);if(qa){De(!0);try{n(t)}finally{De(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=kg.bind(null,ke,e),[i.memoizedState,e]},useRef:function(e){var t=Gt();return e={current:e},t.memoizedState=e},useState:function(e){e=gu(e);var t=e.queue,n=h0.bind(null,ke,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:yu,useDeferredValue:function(e,t){var n=Gt();return vu(n,e,t)},useTransition:function(){var e=gu(!1);return e=o0.bind(null,ke,e.queue,!0,!1),Gt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ke,l=Gt();if(Ge){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Ie===null)throw Error(u(349));(Be&124)!==0||Bd(i,t,n)}l.memoizedState=n;var s={value:n,getSnapshot:t};return l.queue=s,Pd(Ld.bind(null,i,s,e),[e]),i.flags|=2048,Ei(9,Zr(),Hd.bind(null,i,s,n,t),null),n},useId:function(){var e=Gt(),t=Ie.identifierPrefix;if(Ge){var n=Vn,i=qn;n=(i&~(1<<32-Ze(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=Yr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=jg++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Su,useFormState:Kd,useActionState:Kd,useOptimistic:function(e){var t=Gt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wu.bind(null,ke,!0,n),n.dispatch=t,[e,t]},useMemoCache:hu,useCacheRefresh:function(){return Gt().memoizedState=Cg.bind(null,ke)}},x0={readContext:Rt,use:Gr,useCallback:l0,useContext:Rt,useEffect:e0,useImperativeHandle:i0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:r0,useReducer:Xr,useRef:Id,useState:function(){return Xr(Xn)},useDebugValue:yu,useDeferredValue:function(e,t){var n=ft();return s0(n,Ke.memoizedState,e,t)},useTransition:function(){var e=Xr(Xn)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:wl(e),t]},useSyncExternalStore:Ud,useId:f0,useHostTransitionStatus:Su,useFormState:Jd,useActionState:Jd,useOptimistic:function(e,t){var n=ft();return Yd(n,Ke,e,t)},useMemoCache:hu,useCacheRefresh:d0},Ng={readContext:Rt,use:Gr,useCallback:l0,useContext:Rt,useEffect:e0,useImperativeHandle:i0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:r0,useReducer:mu,useRef:Id,useState:function(){return mu(Xn)},useDebugValue:yu,useDeferredValue:function(e,t){var n=ft();return Ke===null?vu(n,e,t):s0(n,Ke.memoizedState,e,t)},useTransition:function(){var e=mu(Xn)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:wl(e),t]},useSyncExternalStore:Ud,useId:f0,useHostTransitionStatus:Su,useFormState:Wd,useActionState:Wd,useOptimistic:function(e,t){var n=ft();return Ke!==null?Yd(n,Ke,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:hu,useCacheRefresh:d0},Ai=null,zl=0;function Jr(e){var t=zl;return zl+=1,Ai===null&&(Ai=[]),Dd(Ai,e,t)}function Tl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fr(e,t){throw t.$$typeof===A?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function y0(e){var t=e._init;return t(e._payload)}function v0(e){function t(T,z){if(e){var D=T.deletions;D===null?(T.deletions=[z],T.flags|=16):D.push(z)}}function n(T,z){if(!e)return null;for(;z!==null;)t(T,z),z=z.sibling;return null}function i(T){for(var z=new Map;T!==null;)T.key!==null?z.set(T.key,T):z.set(T.index,T),T=T.sibling;return z}function l(T,z){return T=Ln(T,z),T.index=0,T.sibling=null,T}function s(T,z,D){return T.index=D,e?(D=T.alternate,D!==null?(D=D.index,D<z?(T.flags|=67108866,z):D):(T.flags|=67108866,z)):(T.flags|=1048576,z)}function h(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function m(T,z,D,Y){return z===null||z.tag!==6?(z=Go(D,T.mode,Y),z.return=T,z):(z=l(z,D),z.return=T,z)}function v(T,z,D,Y){var he=D.type;return he===M?q(T,z,D.props.children,Y,D.key):z!==null&&(z.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===fe&&y0(he)===z.type)?(z=l(z,D.props),Tl(z,D),z.return=T,z):(z=Cr(D.type,D.key,D.props,null,T.mode,Y),Tl(z,D),z.return=T,z)}function _(T,z,D,Y){return z===null||z.tag!==4||z.stateNode.containerInfo!==D.containerInfo||z.stateNode.implementation!==D.implementation?(z=Xo(D,T.mode,Y),z.return=T,z):(z=l(z,D.children||[]),z.return=T,z)}function q(T,z,D,Y,he){return z===null||z.tag!==7?(z=Ca(D,T.mode,Y,he),z.return=T,z):(z=l(z,D),z.return=T,z)}function X(T,z,D){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Go(""+z,T.mode,D),z.return=T,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case E:return D=Cr(z.type,z.key,z.props,null,T.mode,D),Tl(D,z),D.return=T,D;case $:return z=Xo(z,T.mode,D),z.return=T,z;case fe:var Y=z._init;return z=Y(z._payload),X(T,z,D)}if(ge(z)||W(z))return z=Ca(z,T.mode,D,null),z.return=T,z;if(typeof z.then=="function")return X(T,Jr(z),D);if(z.$$typeof===Q)return X(T,Ur(T,z),D);Fr(T,z)}return null}function k(T,z,D,Y){var he=z!==null?z.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return he!==null?null:m(T,z,""+D,Y);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case E:return D.key===he?v(T,z,D,Y):null;case $:return D.key===he?_(T,z,D,Y):null;case fe:return he=D._init,D=he(D._payload),k(T,z,D,Y)}if(ge(D)||W(D))return he!==null?null:q(T,z,D,Y,null);if(typeof D.then=="function")return k(T,z,Jr(D),Y);if(D.$$typeof===Q)return k(T,z,Ur(T,D),Y);Fr(T,D)}return null}function N(T,z,D,Y,he){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return T=T.get(D)||null,m(z,T,""+Y,he);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case E:return T=T.get(Y.key===null?D:Y.key)||null,v(z,T,Y,he);case $:return T=T.get(Y.key===null?D:Y.key)||null,_(z,T,Y,he);case fe:var Ne=Y._init;return Y=Ne(Y._payload),N(T,z,D,Y,he)}if(ge(Y)||W(Y))return T=T.get(D)||null,q(z,T,Y,he,null);if(typeof Y.then=="function")return N(T,z,D,Jr(Y),he);if(Y.$$typeof===Q)return N(T,z,D,Ur(z,Y),he);Fr(z,Y)}return null}function ze(T,z,D,Y){for(var he=null,Ne=null,me=z,we=z=0,wt=null;me!==null&&we<D.length;we++){me.index>we?(wt=me,me=null):wt=me.sibling;var qe=k(T,me,D[we],Y);if(qe===null){me===null&&(me=wt);break}e&&me&&qe.alternate===null&&t(T,me),z=s(qe,z,we),Ne===null?he=qe:Ne.sibling=qe,Ne=qe,me=wt}if(we===D.length)return n(T,me),Ge&&Na(T,we),he;if(me===null){for(;we<D.length;we++)me=X(T,D[we],Y),me!==null&&(z=s(me,z,we),Ne===null?he=me:Ne.sibling=me,Ne=me);return Ge&&Na(T,we),he}for(me=i(me);we<D.length;we++)wt=N(me,T,we,D[we],Y),wt!==null&&(e&&wt.alternate!==null&&me.delete(wt.key===null?we:wt.key),z=s(wt,z,we),Ne===null?he=wt:Ne.sibling=wt,Ne=wt);return e&&me.forEach(function(Ea){return t(T,Ea)}),Ge&&Na(T,we),he}function ve(T,z,D,Y){if(D==null)throw Error(u(151));for(var he=null,Ne=null,me=z,we=z=0,wt=null,qe=D.next();me!==null&&!qe.done;we++,qe=D.next()){me.index>we?(wt=me,me=null):wt=me.sibling;var Ea=k(T,me,qe.value,Y);if(Ea===null){me===null&&(me=wt);break}e&&me&&Ea.alternate===null&&t(T,me),z=s(Ea,z,we),Ne===null?he=Ea:Ne.sibling=Ea,Ne=Ea,me=wt}if(qe.done)return n(T,me),Ge&&Na(T,we),he;if(me===null){for(;!qe.done;we++,qe=D.next())qe=X(T,qe.value,Y),qe!==null&&(z=s(qe,z,we),Ne===null?he=qe:Ne.sibling=qe,Ne=qe);return Ge&&Na(T,we),he}for(me=i(me);!qe.done;we++,qe=D.next())qe=N(me,T,we,qe.value,Y),qe!==null&&(e&&qe.alternate!==null&&me.delete(qe.key===null?we:qe.key),z=s(qe,z,we),Ne===null?he=qe:Ne.sibling=qe,Ne=qe);return e&&me.forEach(function(Mx){return t(T,Mx)}),Ge&&Na(T,we),he}function Fe(T,z,D,Y){if(typeof D=="object"&&D!==null&&D.type===M&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case E:e:{for(var he=D.key;z!==null;){if(z.key===he){if(he=D.type,he===M){if(z.tag===7){n(T,z.sibling),Y=l(z,D.props.children),Y.return=T,T=Y;break e}}else if(z.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===fe&&y0(he)===z.type){n(T,z.sibling),Y=l(z,D.props),Tl(Y,D),Y.return=T,T=Y;break e}n(T,z);break}else t(T,z);z=z.sibling}D.type===M?(Y=Ca(D.props.children,T.mode,Y,D.key),Y.return=T,T=Y):(Y=Cr(D.type,D.key,D.props,null,T.mode,Y),Tl(Y,D),Y.return=T,T=Y)}return h(T);case $:e:{for(he=D.key;z!==null;){if(z.key===he)if(z.tag===4&&z.stateNode.containerInfo===D.containerInfo&&z.stateNode.implementation===D.implementation){n(T,z.sibling),Y=l(z,D.children||[]),Y.return=T,T=Y;break e}else{n(T,z);break}else t(T,z);z=z.sibling}Y=Xo(D,T.mode,Y),Y.return=T,T=Y}return h(T);case fe:return he=D._init,D=he(D._payload),Fe(T,z,D,Y)}if(ge(D))return ze(T,z,D,Y);if(W(D)){if(he=W(D),typeof he!="function")throw Error(u(150));return D=he.call(D),ve(T,z,D,Y)}if(typeof D.then=="function")return Fe(T,z,Jr(D),Y);if(D.$$typeof===Q)return Fe(T,z,Ur(T,D),Y);Fr(T,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,z!==null&&z.tag===6?(n(T,z.sibling),Y=l(z,D),Y.return=T,T=Y):(n(T,z),Y=Go(D,T.mode,Y),Y.return=T,T=Y),h(T)):n(T,z)}return function(T,z,D,Y){try{zl=0;var he=Fe(T,z,D,Y);return Ai=null,he}catch(me){if(me===gl||me===Hr)throw me;var Ne=Pt(29,me,null,T.mode);return Ne.lanes=Y,Ne.return=T,Ne}finally{}}}var zi=v0(!0),b0=v0(!1),hn=C(null),Tn=null;function oa(e){var t=e.alternate;J(yt,yt.current&1),J(hn,e),Tn===null&&(t===null||bi.current!==null||t.memoizedState!==null)&&(Tn=e)}function S0(e){if(e.tag===22){if(J(yt,yt.current),J(hn,e),Tn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Tn=e)}}else ua()}function ua(){J(yt,yt.current),J(hn,hn.current)}function Zn(e){F(hn),Tn===e&&(Tn=null),F(yt)}var yt=C(0);function Wr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||dc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Eu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Au={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=an(),l=la(i);l.payload=t,n!=null&&(l.callback=n),t=ra(e,l,i),t!==null&&(ln(t,e,i),yl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=an(),l=la(i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ra(e,l,i),t!==null&&(ln(t,e,i),yl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=an(),i=la(n);i.tag=2,t!=null&&(i.callback=t),t=ra(e,i,n),t!==null&&(ln(t,e,n),yl(t,e,n))}};function w0(e,t,n,i,l,s,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,h):t.prototype&&t.prototype.isPureReactComponent?!ol(n,i)||!ol(l,s):!0}function E0(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Au.enqueueReplaceState(t,t.state,null)}function Va(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=b({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var Ir=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function A0(e){Ir(e)}function z0(e){console.error(e)}function T0(e){Ir(e)}function Pr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function j0(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function zu(e,t,n){return n=la(n),n.tag=3,n.payload={element:null},n.callback=function(){Pr(e,t)},n}function D0(e){return e=la(e),e.tag=3,e}function O0(e,t,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var s=i.value;e.payload=function(){return l(s)},e.callback=function(){j0(t,n,i)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){j0(t,n,i),typeof l!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})})}function Mg(e,t,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&hl(t,n,l,!0),n=hn.current,n!==null){switch(n.tag){case 13:return Tn===null?Ju():n.alternate===null&&lt===0&&(lt=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===eu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Wu(e,i,l)),!1;case 22:return n.flags|=65536,i===eu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Wu(e,i,l)),!1}throw Error(u(435,n.tag))}return Wu(e,i,l),Ju(),!1}if(Ge)return t=hn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==Qo&&(e=Error(u(422),{cause:i}),dl(un(e,n)))):(i!==Qo&&(t=Error(u(423),{cause:i}),dl(un(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=un(i,n),l=zu(e.stateNode,i,l),au(e,l),lt!==4&&(lt=2)),!1;var s=Error(u(520),{cause:i});if(s=un(s,n),kl===null?kl=[s]:kl.push(s),lt!==4&&(lt=2),t===null)return!0;i=un(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=zu(n.stateNode,i,e),au(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ma===null||!ma.has(s))))return n.flags|=65536,l&=-l,n.lanes|=l,l=D0(l),O0(l,e,n,i),au(n,l),!1}n=n.return}while(n!==null);return!1}var _0=Error(u(461)),bt=!1;function jt(e,t,n,i){t.child=e===null?b0(t,null,n,i):zi(t,e.child,n,i)}function R0(e,t,n,i,l){n=n.render;var s=t.ref;if("ref"in i){var h={};for(var m in i)m!=="ref"&&(h[m]=i[m])}else h=i;return Ha(t),i=ou(e,t,n,h,s,l),m=uu(),e!==null&&!bt?(cu(e,t,l),$n(e,t,l)):(Ge&&m&&Zo(t),t.flags|=1,jt(e,t,i,l),t.child)}function C0(e,t,n,i,l){if(e===null){var s=n.type;return typeof s=="function"&&!Yo(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,k0(e,t,s,i,l)):(e=Cr(n.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!ku(e,l)){var h=s.memoizedProps;if(n=n.compare,n=n!==null?n:ol,n(h,i)&&e.ref===t.ref)return $n(e,t,l)}return t.flags|=1,e=Ln(s,i),e.ref=t.ref,e.return=t,t.child=e}function k0(e,t,n,i,l){if(e!==null){var s=e.memoizedProps;if(ol(s,i)&&e.ref===t.ref)if(bt=!1,t.pendingProps=i=s,ku(e,l))(e.flags&131072)!==0&&(bt=!0);else return t.lanes=e.lanes,$n(e,t,l)}return Tu(e,t,n,i,l)}function N0(e,t,n){var i=t.pendingProps,l=i.children,s=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=s!==null?s.baseLanes|n:n,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;t.childLanes=s&~i}else t.childLanes=0,t.child=null;return M0(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Br(t,s!==null?s.cachePool:null),s!==null?kd(t,s):lu(),S0(t);else return t.lanes=t.childLanes=536870912,M0(e,t,s!==null?s.baseLanes|n:n,n)}else s!==null?(Br(t,s.cachePool),kd(t,s),ua(),t.memoizedState=null):(e!==null&&Br(t,null),lu(),ua());return jt(e,t,l,n),t.child}function M0(e,t,n,i){var l=Po();return l=l===null?null:{parent:xt._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Br(t,null),lu(),S0(t),e!==null&&hl(e,t,i,!0),null}function es(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Tu(e,t,n,i,l){return Ha(t),n=ou(e,t,n,i,void 0,l),i=uu(),e!==null&&!bt?(cu(e,t,l),$n(e,t,l)):(Ge&&i&&Zo(t),t.flags|=1,jt(e,t,n,l),t.child)}function U0(e,t,n,i,l,s){return Ha(t),t.updateQueue=null,n=Md(t,i,n,l),Nd(e),i=uu(),e!==null&&!bt?(cu(e,t,s),$n(e,t,s)):(Ge&&i&&Zo(t),t.flags|=1,jt(e,t,n,s),t.child)}function B0(e,t,n,i,l){if(Ha(t),t.stateNode===null){var s=mi,h=n.contextType;typeof h=="object"&&h!==null&&(s=Rt(h)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Au,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},tu(t),h=n.contextType,s.context=typeof h=="object"&&h!==null?Rt(h):mi,s.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Eu(t,n,h,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(h=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),h!==s.state&&Au.enqueueReplaceState(s,s.state,null),bl(t,i,s,l),vl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,v=Va(n,m);s.props=v;var _=s.context,q=n.contextType;h=mi,typeof q=="object"&&q!==null&&(h=Rt(q));var X=n.getDerivedStateFromProps;q=typeof X=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,q||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||_!==h)&&E0(t,s,i,h),ia=!1;var k=t.memoizedState;s.state=k,bl(t,i,s,l),vl(),_=t.memoizedState,m||k!==_||ia?(typeof X=="function"&&(Eu(t,n,X,i),_=t.memoizedState),(v=ia||w0(t,n,v,i,k,_,h))?(q||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=_),s.props=i,s.state=_,s.context=h,i=v):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,nu(e,t),h=t.memoizedProps,q=Va(n,h),s.props=q,X=t.pendingProps,k=s.context,_=n.contextType,v=mi,typeof _=="object"&&_!==null&&(v=Rt(_)),m=n.getDerivedStateFromProps,(_=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(h!==X||k!==v)&&E0(t,s,i,v),ia=!1,k=t.memoizedState,s.state=k,bl(t,i,s,l),vl();var N=t.memoizedState;h!==X||k!==N||ia||e!==null&&e.dependencies!==null&&Mr(e.dependencies)?(typeof m=="function"&&(Eu(t,n,m,i),N=t.memoizedState),(q=ia||w0(t,n,q,i,k,N,v)||e!==null&&e.dependencies!==null&&Mr(e.dependencies))?(_||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,N,v),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,N,v)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=N),s.props=i,s.state=N,s.context=v,i=q):(typeof s.componentDidUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,es(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=zi(t,e.child,null,l),t.child=zi(t,null,n,l)):jt(e,t,n,l),t.memoizedState=s.state,e=t.child):e=$n(e,t,l),e}function H0(e,t,n,i){return fl(),t.flags|=256,jt(e,t,n,i),t.child}var ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Du(e){return{baseLanes:e,cachePool:zd()}}function Ou(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=pn),e}function L0(e,t,n){var i=t.pendingProps,l=!1,s=(t.flags&128)!==0,h;if((h=s)||(h=e!==null&&e.memoizedState===null?!1:(yt.current&2)!==0),h&&(l=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ge){if(l?oa(t):ua(),Ge){var m=it,v;if(v=m){e:{for(v=m,m=zn;v.nodeType!==8;){if(!m){m=null;break e}if(v=bn(v.nextSibling),v===null){m=null;break e}}m=v}m!==null?(t.memoizedState={dehydrated:m,treeContext:ka!==null?{id:qn,overflow:Vn}:null,retryLane:536870912,hydrationErrors:null},v=Pt(18,null,null,0),v.stateNode=m,v.return=t,t.child=v,Ht=t,it=null,v=!0):v=!1}v||Ua(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return dc(m)?t.lanes=32:t.lanes=536870912,null;Zn(t)}return m=i.children,i=i.fallback,l?(ua(),l=t.mode,m=ts({mode:"hidden",children:m},l),i=Ca(i,l,n,null),m.return=t,i.return=t,m.sibling=i,t.child=m,l=t.child,l.memoizedState=Du(n),l.childLanes=Ou(e,h,n),t.memoizedState=ju,i):(oa(t),_u(t,m))}if(v=e.memoizedState,v!==null&&(m=v.dehydrated,m!==null)){if(s)t.flags&256?(oa(t),t.flags&=-257,t=Ru(e,t,n)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),l=i.fallback,m=t.mode,i=ts({mode:"visible",children:i.children},m),l=Ca(l,m,n,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,zi(t,e.child,null,n),i=t.child,i.memoizedState=Du(n),i.childLanes=Ou(e,h,n),t.memoizedState=ju,t=l);else if(oa(t),dc(m)){if(h=m.nextSibling&&m.nextSibling.dataset,h)var _=h.dgst;h=_,i=Error(u(419)),i.stack="",i.digest=h,dl({value:i,source:null,stack:null}),t=Ru(e,t,n)}else if(bt||hl(e,t,n,!1),h=(n&e.childLanes)!==0,bt||h){if(h=Ie,h!==null&&(i=n&-n,i=(i&42)!==0?1:ho(i),i=(i&(h.suspendedLanes|n))!==0?0:i,i!==0&&i!==v.retryLane))throw v.retryLane=i,pi(e,i),ln(h,e,i),_0;m.data==="$?"||Ju(),t=Ru(e,t,n)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,it=bn(m.nextSibling),Ht=t,Ge=!0,Ma=null,zn=!1,e!==null&&(fn[dn++]=qn,fn[dn++]=Vn,fn[dn++]=ka,qn=e.id,Vn=e.overflow,ka=t),t=_u(t,i.children),t.flags|=4096);return t}return l?(ua(),l=i.fallback,m=t.mode,v=e.child,_=v.sibling,i=Ln(v,{mode:"hidden",children:i.children}),i.subtreeFlags=v.subtreeFlags&65011712,_!==null?l=Ln(_,l):(l=Ca(l,m,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,m=e.child.memoizedState,m===null?m=Du(n):(v=m.cachePool,v!==null?(_=xt._currentValue,v=v.parent!==_?{parent:_,pool:_}:v):v=zd(),m={baseLanes:m.baseLanes|n,cachePool:v}),l.memoizedState=m,l.childLanes=Ou(e,h,n),t.memoizedState=ju,i):(oa(t),n=e.child,e=n.sibling,n=Ln(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function _u(e,t){return t=ts({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ts(e,t){return e=Pt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ru(e,t,n){return zi(t,e.child,null,n),e=_u(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function q0(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Jo(e.return,t,n)}function Cu(e,t,n,i,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=l)}function V0(e,t,n){var i=t.pendingProps,l=i.revealOrder,s=i.tail;if(jt(e,t,i.children,n),i=yt.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&q0(e,n,t);else if(e.tag===19)q0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(J(yt,i),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Wr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Cu(t,!1,l,n,s);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Wr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Cu(t,!0,n,null,s);break;case"together":Cu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $n(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(hl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ku(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Mr(e)))}function Ug(e,t,n){switch(t.tag){case 3:xe(t,t.stateNode.containerInfo),aa(t,xt,e.memoizedState.cache),fl();break;case 27:case 5:mt(t);break;case 4:xe(t,t.stateNode.containerInfo);break;case 10:aa(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(oa(t),t.flags|=128,null):(n&t.child.childLanes)!==0?L0(e,t,n):(oa(t),e=$n(e,t,n),e!==null?e.sibling:null);oa(t);break;case 19:var l=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(hl(e,t,n,!1),i=(n&t.childLanes)!==0),l){if(i)return V0(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(yt,yt.current),i)break;return null;case 22:case 23:return t.lanes=0,N0(e,t,n);case 24:aa(t,xt,e.memoizedState.cache)}return $n(e,t,n)}function Y0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)bt=!0;else{if(!ku(e,n)&&(t.flags&128)===0)return bt=!1,Ug(e,t,n);bt=(e.flags&131072)!==0}else bt=!1,Ge&&(t.flags&1048576)!==0&&yd(t,Nr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,l=i._init;if(i=l(i._payload),t.type=i,typeof i=="function")Yo(i)?(e=Va(i,e),t.tag=1,t=B0(null,t,i,e,n)):(t.tag=0,t=Tu(null,t,i,e,n));else{if(i!=null){if(l=i.$$typeof,l===le){t.tag=11,t=R0(null,t,i,e,n);break e}else if(l===ne){t.tag=14,t=C0(null,t,i,e,n);break e}}throw t=be(i)||i,Error(u(306,t,""))}}return t;case 0:return Tu(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,l=Va(i,t.pendingProps),B0(e,t,i,l,n);case 3:e:{if(xe(t,t.stateNode.containerInfo),e===null)throw Error(u(387));i=t.pendingProps;var s=t.memoizedState;l=s.element,nu(e,t),bl(t,i,null,n);var h=t.memoizedState;if(i=h.cache,aa(t,xt,i),i!==s.cache&&Fo(t,[xt],n,!0),vl(),i=h.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=H0(e,t,i,n);break e}else if(i!==l){l=un(Error(u(424)),t),dl(l),t=H0(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(it=bn(e.firstChild),Ht=t,Ge=!0,Ma=null,zn=!0,n=b0(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(fl(),i===l){t=$n(e,t,n);break e}jt(e,t,i,n)}t=t.child}return t;case 26:return es(e,t),e===null?(n=$1(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ge||(n=t.type,e=t.pendingProps,i=ms(se.current).createElement(n),i[_t]=t,i[Vt]=e,Ot(i,n,e),vt(i),t.stateNode=i):t.memoizedState=$1(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return mt(t),e===null&&Ge&&(i=t.stateNode=G1(t.type,t.pendingProps,se.current),Ht=t,zn=!0,l=it,ya(t.type)?(hc=l,it=bn(i.firstChild)):it=l),jt(e,t,t.pendingProps.children,n),es(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ge&&((l=i=it)&&(i=cx(i,t.type,t.pendingProps,zn),i!==null?(t.stateNode=i,Ht=t,it=bn(i.firstChild),zn=!1,l=!0):l=!1),l||Ua(t)),mt(t),l=t.type,s=t.pendingProps,h=e!==null?e.memoizedProps:null,i=s.children,uc(l,s)?i=null:h!==null&&uc(l,h)&&(t.flags|=32),t.memoizedState!==null&&(l=ou(e,t,Dg,null,null,n),Yl._currentValue=l),es(e,t),jt(e,t,i,n),t.child;case 6:return e===null&&Ge&&((e=n=it)&&(n=fx(n,t.pendingProps,zn),n!==null?(t.stateNode=n,Ht=t,it=null,e=!0):e=!1),e||Ua(t)),null;case 13:return L0(e,t,n);case 4:return xe(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=zi(t,null,i,n):jt(e,t,i,n),t.child;case 11:return R0(e,t,t.type,t.pendingProps,n);case 7:return jt(e,t,t.pendingProps,n),t.child;case 8:return jt(e,t,t.pendingProps.children,n),t.child;case 12:return jt(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,aa(t,t.type,i.value),jt(e,t,i.children,n),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,Ha(t),l=Rt(l),i=i(l),t.flags|=1,jt(e,t,i,n),t.child;case 14:return C0(e,t,t.type,t.pendingProps,n);case 15:return k0(e,t,t.type,t.pendingProps,n);case 19:return V0(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=ts(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Ln(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return N0(e,t,n);case 24:return Ha(t),i=Rt(xt),e===null?(l=Po(),l===null&&(l=Ie,s=Wo(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=n),l=s),t.memoizedState={parent:i,cache:l},tu(t),aa(t,xt,l)):((e.lanes&n)!==0&&(nu(e,t),bl(t,null,null,n),vl()),l=e.memoizedState,s=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),aa(t,xt,i)):(i=s.cache,aa(t,xt,i),i!==l.cache&&Fo(t,[xt],n,!0))),jt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Qn(e){e.flags|=4}function G0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!W1(t)){if(t=hn.current,t!==null&&((Be&4194048)===Be?Tn!==null:(Be&62914560)!==Be&&(Be&536870912)===0||t!==Tn))throw xl=eu,Td;e.flags|=8192}}function ns(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?xr():536870912,e.lanes|=t,Oi|=t)}function jl(e,t){if(!Ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Bg(e,t,n){var i=t.pendingProps;switch($o(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return at(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Gn(xt),Ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(cl(t)?Qn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Sd())),at(t),null;case 26:return n=t.memoizedState,e===null?(Qn(t),n!==null?(at(t),G0(t,n)):(at(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Qn(t),at(t),G0(t,n)):(at(t),t.flags&=-16777217):(e.memoizedProps!==i&&Qn(t),at(t),t.flags&=-16777217),null;case 27:Nt(t),n=se.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Qn(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return at(t),null}e=ce.current,cl(t)?vd(t):(e=G1(l,i,n),t.stateNode=e,Qn(t))}return at(t),null;case 5:if(Nt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Qn(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return at(t),null}if(e=ce.current,cl(t))vd(t);else{switch(l=ms(se.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?l.createElement(n,{is:i.is}):l.createElement(n)}}e[_t]=t,e[Vt]=i;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Ot(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Qn(t)}}return at(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Qn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(u(166));if(e=se.current,cl(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,l=Ht,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||U1(e.nodeValue,n)),e||Ua(t)}else e=ms(e).createTextNode(i),e[_t]=t,t.stateNode=e}return at(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=cl(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[_t]=t}else fl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),l=!1}else l=Sd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Zn(t),t):(Zn(t),null)}if(Zn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool);var s=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==l&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ns(t,t.updateQueue),at(t),null;case 4:return Ve(),e===null&&ic(t.stateNode.containerInfo),at(t),null;case 10:return Gn(t.type),at(t),null;case 19:if(F(yt),l=t.memoizedState,l===null)return at(t),null;if(i=(t.flags&128)!==0,s=l.rendering,s===null)if(i)jl(l,!1);else{if(lt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Wr(e),s!==null){for(t.flags|=128,jl(l,!1),e=s.updateQueue,t.updateQueue=e,ns(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)xd(n,e),n=n.sibling;return J(yt,yt.current&1|2),t.child}e=e.sibling}l.tail!==null&&nt()>ls&&(t.flags|=128,i=!0,jl(l,!1),t.lanes=4194304)}else{if(!i)if(e=Wr(s),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ns(t,e),jl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!Ge)return at(t),null}else 2*nt()-l.renderingStartTime>ls&&n!==536870912&&(t.flags|=128,i=!0,jl(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(e=l.last,e!==null?e.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=nt(),t.sibling=null,e=yt.current,J(yt,i?e&1|2:e&1),t):(at(t),null);case 22:case 23:return Zn(t),ru(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),n=t.updateQueue,n!==null&&ns(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&F(La),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Gn(xt),at(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Hg(e,t){switch($o(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(xt),Ve(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Nt(t),null;case 13:if(Zn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));fl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(yt),null;case 4:return Ve(),null;case 10:return Gn(t.type),null;case 22:case 23:return Zn(t),ru(),e!==null&&F(La),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gn(xt),null;case 25:return null;default:return null}}function X0(e,t){switch($o(t),t.tag){case 3:Gn(xt),Ve();break;case 26:case 27:case 5:Nt(t);break;case 4:Ve();break;case 13:Zn(t);break;case 19:F(yt);break;case 10:Gn(t.type);break;case 22:case 23:Zn(t),ru(),e!==null&&F(La);break;case 24:Gn(xt)}}function Dl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){i=void 0;var s=n.create,h=n.inst;i=s(),h.destroy=i}n=n.next}while(n!==l)}}catch(m){We(t,t.return,m)}}function ca(e,t,n){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var s=l.next;i=s;do{if((i.tag&e)===e){var h=i.inst,m=h.destroy;if(m!==void 0){h.destroy=void 0,l=t;var v=n,_=m;try{_()}catch(q){We(l,v,q)}}}i=i.next}while(i!==s)}}catch(q){We(t,t.return,q)}}function Z0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Cd(t,n)}catch(i){We(e,e.return,i)}}}function $0(e,t,n){n.props=Va(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){We(e,t,i)}}function Ol(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(l){We(e,t,l)}}function jn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){We(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){We(e,t,l)}else n.current=null}function Q0(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){We(e,e.return,l)}}function Nu(e,t,n){try{var i=e.stateNode;lx(i,e.type,n,t),i[Vt]=t}catch(l){We(e,e.return,l)}}function K0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function Mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||K0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ps));else if(i!==4&&(i===27&&ya(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Uu(e,t,n),e=e.sibling;e!==null;)Uu(e,t,n),e=e.sibling}function as(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ya(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(as(e,t,n),e=e.sibling;e!==null;)as(e,t,n),e=e.sibling}function J0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ot(t,i,n),t[_t]=e,t[Vt]=n}catch(s){We(e,e.return,s)}}var Kn=!1,ot=!1,Bu=!1,F0=typeof WeakSet=="function"?WeakSet:Set,St=null;function Lg(e,t){if(e=e.containerInfo,sc=Ss,e=sd(e),Mo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var h=0,m=-1,v=-1,_=0,q=0,X=e,k=null;t:for(;;){for(var N;X!==n||l!==0&&X.nodeType!==3||(m=h+l),X!==s||i!==0&&X.nodeType!==3||(v=h+i),X.nodeType===3&&(h+=X.nodeValue.length),(N=X.firstChild)!==null;)k=X,X=N;for(;;){if(X===e)break t;if(k===n&&++_===l&&(m=h),k===s&&++q===i&&(v=h),(N=X.nextSibling)!==null)break;X=k,k=X.parentNode}X=N}n=m===-1||v===-1?null:{start:m,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(oc={focusedElem:e,selectionRange:n},Ss=!1,St=t;St!==null;)if(t=St,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,St=e;else for(;St!==null;){switch(t=St,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,l=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var ze=Va(n.type,l,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(ze,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(ve){We(n,n.return,ve)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)fc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,St=e;break}St=t.return}}function W0(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:fa(e,n),i&4&&Dl(5,n);break;case 1:if(fa(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){We(n,n.return,h)}else{var l=Va(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){We(n,n.return,h)}}i&64&&Z0(n),i&512&&Ol(n,n.return);break;case 3:if(fa(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Cd(e,t)}catch(h){We(n,n.return,h)}}break;case 27:t===null&&i&4&&J0(n);case 26:case 5:fa(e,n),t===null&&i&4&&Q0(n),i&512&&Ol(n,n.return);break;case 12:fa(e,n);break;case 13:fa(e,n),i&4&&e1(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Kg.bind(null,n),dx(e,n))));break;case 22:if(i=n.memoizedState!==null||Kn,!i){t=t!==null&&t.memoizedState!==null||ot,l=Kn;var s=ot;Kn=i,(ot=t)&&!s?da(e,n,(n.subtreeFlags&8772)!==0):fa(e,n),Kn=l,ot=s}break;case 30:break;default:fa(e,n)}}function I0(e){var t=e.alternate;t!==null&&(e.alternate=null,I0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&go(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var et=null,Xt=!1;function Jn(e,t,n){for(n=n.child;n!==null;)P0(e,t,n),n=n.sibling}function P0(e,t,n){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(oe,n)}catch{}switch(n.tag){case 26:ot||jn(n,t),Jn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ot||jn(n,t);var i=et,l=Xt;ya(n.type)&&(et=n.stateNode,Xt=!1),Jn(e,t,n),Hl(n.stateNode),et=i,Xt=l;break;case 5:ot||jn(n,t);case 6:if(i=et,l=Xt,et=null,Jn(e,t,n),et=i,Xt=l,et!==null)if(Xt)try{(et.nodeType===9?et.body:et.nodeName==="HTML"?et.ownerDocument.body:et).removeChild(n.stateNode)}catch(s){We(n,t,s)}else try{et.removeChild(n.stateNode)}catch(s){We(n,t,s)}break;case 18:et!==null&&(Xt?(e=et,V1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),$l(e)):V1(et,n.stateNode));break;case 4:i=et,l=Xt,et=n.stateNode.containerInfo,Xt=!0,Jn(e,t,n),et=i,Xt=l;break;case 0:case 11:case 14:case 15:ot||ca(2,n,t),ot||ca(4,n,t),Jn(e,t,n);break;case 1:ot||(jn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&$0(n,t,i)),Jn(e,t,n);break;case 21:Jn(e,t,n);break;case 22:ot=(i=ot)||n.memoizedState!==null,Jn(e,t,n),ot=i;break;default:Jn(e,t,n)}}function e1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$l(e)}catch(n){We(t,t.return,n)}}function qg(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new F0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new F0),t;default:throw Error(u(435,e.tag))}}function Hu(e,t){var n=qg(e);t.forEach(function(i){var l=Jg.bind(null,e,i);n.has(i)||(n.add(i),i.then(l,l))})}function en(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i],s=e,h=t,m=h;e:for(;m!==null;){switch(m.tag){case 27:if(ya(m.type)){et=m.stateNode,Xt=!1;break e}break;case 5:et=m.stateNode,Xt=!1;break e;case 3:case 4:et=m.stateNode.containerInfo,Xt=!0;break e}m=m.return}if(et===null)throw Error(u(160));P0(s,h,l),et=null,Xt=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)t1(t,e),t=t.sibling}var vn=null;function t1(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:en(t,e),tn(e),i&4&&(ca(3,e,e.return),Dl(3,e),ca(5,e,e.return));break;case 1:en(t,e),tn(e),i&512&&(ot||n===null||jn(n,n.return)),i&64&&Kn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var l=vn;if(en(t,e),tn(e),i&512&&(ot||n===null||jn(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Pi]||s[_t]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(i),l.head.insertBefore(s,l.querySelector("head > title"))),Ot(s,i,n),s[_t]=e,vt(s),i=s;break e;case"link":var h=J1("link","href",l).get(i+(n.href||""));if(h){for(var m=0;m<h.length;m++)if(s=h[m],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(m,1);break t}}s=l.createElement(i),Ot(s,i,n),l.head.appendChild(s);break;case"meta":if(h=J1("meta","content",l).get(i+(n.content||""))){for(m=0;m<h.length;m++)if(s=h[m],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(m,1);break t}}s=l.createElement(i),Ot(s,i,n),l.head.appendChild(s);break;default:throw Error(u(468,i))}s[_t]=e,vt(s),i=s}e.stateNode=i}else F1(l,e.type,e.stateNode);else e.stateNode=K1(l,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?F1(l,e.type,e.stateNode):K1(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Nu(e,e.memoizedProps,n.memoizedProps)}break;case 27:en(t,e),tn(e),i&512&&(ot||n===null||jn(n,n.return)),n!==null&&i&4&&Nu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(en(t,e),tn(e),i&512&&(ot||n===null||jn(n,n.return)),e.flags&32){l=e.stateNode;try{si(l,"")}catch(N){We(e,e.return,N)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Nu(e,l,n!==null?n.memoizedProps:l)),i&1024&&(Bu=!0);break;case 6:if(en(t,e),tn(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(N){We(e,e.return,N)}}break;case 3:if(ys=null,l=vn,vn=gs(t.containerInfo),en(t,e),vn=l,tn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{$l(t.containerInfo)}catch(N){We(e,e.return,N)}Bu&&(Bu=!1,n1(e));break;case 4:i=vn,vn=gs(e.stateNode.containerInfo),en(t,e),tn(e),vn=i;break;case 12:en(t,e),tn(e);break;case 13:en(t,e),tn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Xu=nt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Hu(e,i)));break;case 22:l=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,_=Kn,q=ot;if(Kn=_||l,ot=q||v,en(t,e),ot=q,Kn=_,tn(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||v||Kn||ot||Ya(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(s=v.stateNode,l)h=s.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{m=v.stateNode;var X=v.memoizedProps.style,k=X!=null&&X.hasOwnProperty("display")?X.display:null;m.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(N){We(v,v.return,N)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=l?"":v.memoizedProps}catch(N){We(v,v.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Hu(e,n))));break;case 19:en(t,e),tn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Hu(e,i)));break;case 30:break;case 21:break;default:en(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(K0(i)){n=i;break}i=i.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var l=n.stateNode,s=Mu(e);as(e,s,l);break;case 5:var h=n.stateNode;n.flags&32&&(si(h,""),n.flags&=-33);var m=Mu(e);as(e,m,h);break;case 3:case 4:var v=n.stateNode.containerInfo,_=Mu(e);Uu(e,_,v);break;default:throw Error(u(161))}}catch(q){We(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function n1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;n1(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)W0(e,t.alternate,t),t=t.sibling}function Ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),Ya(t);break;case 1:jn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&$0(t,t.return,n),Ya(t);break;case 27:Hl(t.stateNode);case 26:case 5:jn(t,t.return),Ya(t);break;case 22:t.memoizedState===null&&Ya(t);break;case 30:Ya(t);break;default:Ya(t)}e=e.sibling}}function da(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,s=t,h=s.flags;switch(s.tag){case 0:case 11:case 15:da(l,s,n),Dl(4,s);break;case 1:if(da(l,s,n),i=s,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(_){We(i,i.return,_)}if(i=s,l=i.updateQueue,l!==null){var m=i.stateNode;try{var v=l.shared.hiddenCallbacks;if(v!==null)for(l.shared.hiddenCallbacks=null,l=0;l<v.length;l++)Rd(v[l],m)}catch(_){We(i,i.return,_)}}n&&h&64&&Z0(s),Ol(s,s.return);break;case 27:J0(s);case 26:case 5:da(l,s,n),n&&i===null&&h&4&&Q0(s),Ol(s,s.return);break;case 12:da(l,s,n);break;case 13:da(l,s,n),n&&h&4&&e1(l,s);break;case 22:s.memoizedState===null&&da(l,s,n),Ol(s,s.return);break;case 30:break;default:da(l,s,n)}t=t.sibling}}function Lu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pl(n))}function qu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pl(e))}function Dn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)a1(e,t,n,i),t=t.sibling}function a1(e,t,n,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Dn(e,t,n,i),l&2048&&Dl(9,t);break;case 1:Dn(e,t,n,i);break;case 3:Dn(e,t,n,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pl(e)));break;case 12:if(l&2048){Dn(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,h=s.id,m=s.onPostCommit;typeof m=="function"&&m(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){We(t,t.return,v)}}else Dn(e,t,n,i);break;case 13:Dn(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,h=t.alternate,t.memoizedState!==null?s._visibility&2?Dn(e,t,n,i):_l(e,t):s._visibility&2?Dn(e,t,n,i):(s._visibility|=2,Ti(e,t,n,i,(t.subtreeFlags&10256)!==0)),l&2048&&Lu(h,t);break;case 24:Dn(e,t,n,i),l&2048&&qu(t.alternate,t);break;default:Dn(e,t,n,i)}}function Ti(e,t,n,i,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,h=t,m=n,v=i,_=h.flags;switch(h.tag){case 0:case 11:case 15:Ti(s,h,m,v,l),Dl(8,h);break;case 23:break;case 22:var q=h.stateNode;h.memoizedState!==null?q._visibility&2?Ti(s,h,m,v,l):_l(s,h):(q._visibility|=2,Ti(s,h,m,v,l)),l&&_&2048&&Lu(h.alternate,h);break;case 24:Ti(s,h,m,v,l),l&&_&2048&&qu(h.alternate,h);break;default:Ti(s,h,m,v,l)}t=t.sibling}}function _l(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,l=i.flags;switch(i.tag){case 22:_l(n,i),l&2048&&Lu(i.alternate,i);break;case 24:_l(n,i),l&2048&&qu(i.alternate,i);break;default:_l(n,i)}t=t.sibling}}var Rl=8192;function ji(e){if(e.subtreeFlags&Rl)for(e=e.child;e!==null;)i1(e),e=e.sibling}function i1(e){switch(e.tag){case 26:ji(e),e.flags&Rl&&e.memoizedState!==null&&zx(vn,e.memoizedState,e.memoizedProps);break;case 5:ji(e);break;case 3:case 4:var t=vn;vn=gs(e.stateNode.containerInfo),ji(e),vn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Rl,Rl=16777216,ji(e),Rl=t):ji(e));break;default:ji(e)}}function l1(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Cl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];St=i,s1(i,e)}l1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)r1(e),e=e.sibling}function r1(e){switch(e.tag){case 0:case 11:case 15:Cl(e),e.flags&2048&&ca(9,e,e.return);break;case 3:Cl(e);break;case 12:Cl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,is(e)):Cl(e);break;default:Cl(e)}}function is(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];St=i,s1(i,e)}l1(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),is(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,is(t));break;default:is(t)}e=e.sibling}}function s1(e,t){for(;St!==null;){var n=St;switch(n.tag){case 0:case 11:case 15:ca(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:pl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,St=i;else e:for(n=e;St!==null;){i=St;var l=i.sibling,s=i.return;if(I0(i),i===n){St=null;break e}if(l!==null){l.return=s,St=l;break e}St=s}}}var Vg={getCacheForType:function(e){var t=Rt(xt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Yg=typeof WeakMap=="function"?WeakMap:Map,$e=0,Ie=null,Me=null,Be=0,Qe=0,nn=null,ha=!1,Di=!1,Vu=!1,Fn=0,lt=0,pa=0,Ga=0,Yu=0,pn=0,Oi=0,kl=null,Zt=null,Gu=!1,Xu=0,ls=1/0,rs=null,ma=null,Dt=0,ga=null,_i=null,Ri=0,Zu=0,$u=null,o1=null,Nl=0,Qu=null;function an(){if(($e&2)!==0&&Be!==0)return Be&-Be;if(O.T!==null){var e=yi;return e!==0?e:ec()}return Af()}function u1(){pn===0&&(pn=(Be&536870912)===0||Ge?gr():536870912);var e=hn.current;return e!==null&&(e.flags|=32),pn}function ln(e,t,n){(e===Ie&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)&&(Ci(e,0),xa(e,Be,pn,!1)),Pa(e,n),(($e&2)===0||e!==Ie)&&(e===Ie&&(($e&2)===0&&(Ga|=n),lt===4&&xa(e,Be,pn,!1)),On(e))}function c1(e,t,n){if(($e&6)!==0)throw Error(u(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Un(e,t),l=i?Zg(e,t):Fu(e,t,!0),s=i;do{if(l===0){Di&&!i&&xa(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Gg(n)){l=Fu(e,t,!1),s=!1;continue}if(l===2){if(s=t,e.errorRecoveryDisabledLanes&s)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var m=e;l=kl;var v=m.current.memoizedState.isDehydrated;if(v&&(Ci(m,h).flags|=256),h=Fu(m,h,!1),h!==2){if(Vu&&!v){m.errorRecoveryDisabledLanes|=s,Ga|=s,l=4;break e}s=Zt,Zt=l,s!==null&&(Zt===null?Zt=s:Zt.push.apply(Zt,s))}l=h}if(s=!1,l!==2)continue}}if(l===1){Ci(e,0),xa(e,t,0,!0);break}e:{switch(i=e,s=l,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:xa(i,t,pn,!ha);break e;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=Xu+300-nt(),10<l)){if(xa(i,t,pn,!ha),Mn(i,0,!0)!==0)break e;i.timeoutHandle=L1(f1.bind(null,i,n,Zt,rs,Gu,t,pn,Ga,Oi,ha,s,2,-0,0),l);break e}f1(i,n,Zt,rs,Gu,t,pn,Ga,Oi,ha,s,0,-0,0)}}break}while(!0);On(e)}function f1(e,t,n,i,l,s,h,m,v,_,q,X,k,N){if(e.timeoutHandle=-1,X=t.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(Vl={stylesheets:null,count:0,unsuspend:Ax},i1(t),X=Tx(),X!==null)){e.cancelPendingCommit=X(y1.bind(null,e,t,s,n,i,l,h,m,v,q,1,k,N)),xa(e,s,h,!_);return}y1(e,t,s,n,i,l,h,m,v)}function Gg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],s=l.getSnapshot;l=l.value;try{if(!It(s(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xa(e,t,n,i){t&=~Yu,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var s=31-Ze(l),h=1<<s;i[s]=-1,l&=~h}n!==0&&wf(e,n,t)}function ss(){return($e&6)===0?(Ml(0),!1):!0}function Ku(){if(Me!==null){if(Qe===0)var e=Me.return;else e=Me,Yn=Ba=null,fu(e),Ai=null,zl=0,e=Me;for(;e!==null;)X0(e.alternate,e),e=e.return;Me=null}}function Ci(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,sx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ku(),Ie=e,Me=n=Ln(e.current,null),Be=t,Qe=0,nn=null,ha=!1,Di=Un(e,t),Vu=!1,Oi=pn=Yu=Ga=pa=lt=0,Zt=kl=null,Gu=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-Ze(i),s=1<<l;t|=e[l],i&=~s}return Fn=t,Or(),n}function d1(e,t){ke=null,O.H=Kr,t===gl||t===Hr?(t=Od(),Qe=3):t===Td?(t=Od(),Qe=4):Qe=t===_0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nn=t,Me===null&&(lt=1,Pr(e,un(t,e.current)))}function h1(){var e=O.H;return O.H=Kr,e===null?Kr:e}function p1(){var e=O.A;return O.A=Vg,e}function Ju(){lt=4,ha||(Be&4194048)!==Be&&hn.current!==null||(Di=!0),(pa&134217727)===0&&(Ga&134217727)===0||Ie===null||xa(Ie,Be,pn,!1)}function Fu(e,t,n){var i=$e;$e|=2;var l=h1(),s=p1();(Ie!==e||Be!==t)&&(rs=null,Ci(e,t)),t=!1;var h=lt;e:do try{if(Qe!==0&&Me!==null){var m=Me,v=nn;switch(Qe){case 8:Ku(),h=6;break e;case 3:case 2:case 9:case 6:hn.current===null&&(t=!0);var _=Qe;if(Qe=0,nn=null,ki(e,m,v,_),n&&Di){h=0;break e}break;default:_=Qe,Qe=0,nn=null,ki(e,m,v,_)}}Xg(),h=lt;break}catch(q){d1(e,q)}while(!0);return t&&e.shellSuspendCounter++,Yn=Ba=null,$e=i,O.H=l,O.A=s,Me===null&&(Ie=null,Be=0,Or()),h}function Xg(){for(;Me!==null;)m1(Me)}function Zg(e,t){var n=$e;$e|=2;var i=h1(),l=p1();Ie!==e||Be!==t?(rs=null,ls=nt()+500,Ci(e,t)):Di=Un(e,t);e:do try{if(Qe!==0&&Me!==null){t=Me;var s=nn;t:switch(Qe){case 1:Qe=0,nn=null,ki(e,t,s,1);break;case 2:case 9:if(jd(s)){Qe=0,nn=null,g1(t);break}t=function(){Qe!==2&&Qe!==9||Ie!==e||(Qe=7),On(e)},s.then(t,t);break e;case 3:Qe=7;break e;case 4:Qe=5;break e;case 7:jd(s)?(Qe=0,nn=null,g1(t)):(Qe=0,nn=null,ki(e,t,s,7));break;case 5:var h=null;switch(Me.tag){case 26:h=Me.memoizedState;case 5:case 27:var m=Me;if(!h||W1(h)){Qe=0,nn=null;var v=m.sibling;if(v!==null)Me=v;else{var _=m.return;_!==null?(Me=_,os(_)):Me=null}break t}}Qe=0,nn=null,ki(e,t,s,5);break;case 6:Qe=0,nn=null,ki(e,t,s,6);break;case 8:Ku(),lt=6;break e;default:throw Error(u(462))}}$g();break}catch(q){d1(e,q)}while(!0);return Yn=Ba=null,O.H=i,O.A=l,$e=n,Me!==null?0:(Ie=null,Be=0,Or(),lt)}function $g(){for(;Me!==null&&!He();)m1(Me)}function m1(e){var t=Y0(e.alternate,e,Fn);e.memoizedProps=e.pendingProps,t===null?os(e):Me=t}function g1(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=U0(n,t,t.pendingProps,t.type,void 0,Be);break;case 11:t=U0(n,t,t.pendingProps,t.type.render,t.ref,Be);break;case 5:fu(t);default:X0(n,t),t=Me=xd(t,Fn),t=Y0(n,t,Fn)}e.memoizedProps=e.pendingProps,t===null?os(e):Me=t}function ki(e,t,n,i){Yn=Ba=null,fu(t),Ai=null,zl=0;var l=t.return;try{if(Mg(e,l,t,n,Be)){lt=1,Pr(e,un(n,e.current)),Me=null;return}}catch(s){if(l!==null)throw Me=l,s;lt=1,Pr(e,un(n,e.current)),Me=null;return}t.flags&32768?(Ge||i===1?e=!0:Di||(Be&536870912)!==0?e=!1:(ha=e=!0,(i===2||i===9||i===3||i===6)&&(i=hn.current,i!==null&&i.tag===13&&(i.flags|=16384))),x1(t,e)):os(t)}function os(e){var t=e;do{if((t.flags&32768)!==0){x1(t,ha);return}e=t.return;var n=Bg(t.alternate,t,Fn);if(n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);lt===0&&(lt=5)}function x1(e,t){do{var n=Hg(e.alternate,e);if(n!==null){n.flags&=32767,Me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Me=e;return}Me=e=n}while(e!==null);lt=6,Me=null}function y1(e,t,n,i,l,s,h,m,v){e.cancelPendingCommit=null;do us();while(Dt!==0);if(($e&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=qo,Am(e,n,s,h,m,v),e===Ie&&(Me=Ie=null,Be=0),_i=t,ga=e,Ri=n,Zu=s,$u=l,o1=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fg(j,function(){return E1(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=O.T,O.T=null,l=Z.p,Z.p=2,h=$e,$e|=4;try{Lg(e,t,n)}finally{$e=h,Z.p=l,O.T=i}}Dt=1,v1(),b1(),S1()}}function v1(){if(Dt===1){Dt=0;var e=ga,t=_i,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null;var i=Z.p;Z.p=2;var l=$e;$e|=4;try{t1(t,e);var s=oc,h=sd(e.containerInfo),m=s.focusedElem,v=s.selectionRange;if(h!==m&&m&&m.ownerDocument&&rd(m.ownerDocument.documentElement,m)){if(v!==null&&Mo(m)){var _=v.start,q=v.end;if(q===void 0&&(q=_),"selectionStart"in m)m.selectionStart=_,m.selectionEnd=Math.min(q,m.value.length);else{var X=m.ownerDocument||document,k=X&&X.defaultView||window;if(k.getSelection){var N=k.getSelection(),ze=m.textContent.length,ve=Math.min(v.start,ze),Fe=v.end===void 0?ve:Math.min(v.end,ze);!N.extend&&ve>Fe&&(h=Fe,Fe=ve,ve=h);var T=ld(m,ve),z=ld(m,Fe);if(T&&z&&(N.rangeCount!==1||N.anchorNode!==T.node||N.anchorOffset!==T.offset||N.focusNode!==z.node||N.focusOffset!==z.offset)){var D=X.createRange();D.setStart(T.node,T.offset),N.removeAllRanges(),ve>Fe?(N.addRange(D),N.extend(z.node,z.offset)):(D.setEnd(z.node,z.offset),N.addRange(D))}}}}for(X=[],N=m;N=N.parentNode;)N.nodeType===1&&X.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<X.length;m++){var Y=X[m];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Ss=!!sc,oc=sc=null}finally{$e=l,Z.p=i,O.T=n}}e.current=t,Dt=2}}function b1(){if(Dt===2){Dt=0;var e=ga,t=_i,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=O.T,O.T=null;var i=Z.p;Z.p=2;var l=$e;$e|=4;try{W0(e,t.alternate,t)}finally{$e=l,Z.p=i,O.T=n}}Dt=3}}function S1(){if(Dt===4||Dt===3){Dt=0,gt();var e=ga,t=_i,n=Ri,i=o1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Dt=5:(Dt=0,_i=ga=null,w1(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ma=null),po(n),t=t.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(oe,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=O.T,l=Z.p,Z.p=2,O.T=null;try{for(var s=e.onRecoverableError,h=0;h<i.length;h++){var m=i[h];s(m.value,{componentStack:m.stack})}}finally{O.T=t,Z.p=l}}(Ri&3)!==0&&us(),On(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===Qu?Nl++:(Nl=0,Qu=e):Nl=0,Ml(0)}}function w1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pl(t)))}function us(e){return v1(),b1(),S1(),E1()}function E1(){if(Dt!==5)return!1;var e=ga,t=Zu;Zu=0;var n=po(Ri),i=O.T,l=Z.p;try{Z.p=32>n?32:n,O.T=null,n=$u,$u=null;var s=ga,h=Ri;if(Dt=0,_i=ga=null,Ri=0,($e&6)!==0)throw Error(u(331));var m=$e;if($e|=4,r1(s.current),a1(s,s.current,h,n),$e=m,Ml(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(oe,s)}catch{}return!0}finally{Z.p=l,O.T=i,w1(e,t)}}function A1(e,t,n){t=un(n,t),t=zu(e.stateNode,t,2),e=ra(e,t,2),e!==null&&(Pa(e,2),On(e))}function We(e,t,n){if(e.tag===3)A1(e,e,n);else for(;t!==null;){if(t.tag===3){A1(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ma===null||!ma.has(i))){e=un(n,e),n=D0(2),i=ra(t,n,2),i!==null&&(O0(n,i,t,e),Pa(i,2),On(i));break}}t=t.return}}function Wu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Yg;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||(Vu=!0,l.add(n),e=Qg.bind(null,e,t,n),t.then(e,e))}function Qg(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ie===e&&(Be&n)===n&&(lt===4||lt===3&&(Be&62914560)===Be&&300>nt()-Xu?($e&2)===0&&Ci(e,0):Yu|=n,Oi===Be&&(Oi=0)),On(e)}function z1(e,t){t===0&&(t=xr()),e=pi(e,t),e!==null&&(Pa(e,t),On(e))}function Kg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),z1(e,n)}function Jg(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(t),z1(e,n)}function Fg(e,t){return ye(e,t)}var cs=null,Ni=null,Iu=!1,fs=!1,Pu=!1,Xa=0;function On(e){e!==Ni&&e.next===null&&(Ni===null?cs=Ni=e:Ni=Ni.next=e),fs=!0,Iu||(Iu=!0,Ig())}function Ml(e,t){if(!Pu&&fs){Pu=!0;do for(var n=!1,i=cs;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var s=0;else{var h=i.suspendedLanes,m=i.pingedLanes;s=(1<<31-Ze(42|e)+1)-1,s&=l&~(h&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,O1(i,s))}else s=Be,s=Mn(i,i===Ie?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Un(i,s)||(n=!0,O1(i,s));i=i.next}while(n);Pu=!1}}function Wg(){T1()}function T1(){fs=Iu=!1;var e=0;Xa!==0&&(rx()&&(e=Xa),Xa=0);for(var t=nt(),n=null,i=cs;i!==null;){var l=i.next,s=j1(i,t);s===0?(i.next=null,n===null?cs=l:n.next=l,l===null&&(Ni=n)):(n=i,(e!==0||(s&3)!==0)&&(fs=!0)),i=l}Ml(e)}function j1(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var h=31-Ze(s),m=1<<h,v=l[h];v===-1?((m&n)===0||(m&i)!==0)&&(l[h]=ea(m,t)):v<=t&&(e.expiredLanes|=m),s&=~m}if(t=Ie,n=Be,n=Mn(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ye(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Un(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ye(i),po(n)){case 2:case 8:n=S;break;case 32:n=j;break;case 268435456:n=ie;break;default:n=j}return i=D1.bind(null,e),n=ye(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ye(i),e.callbackPriority=2,e.callbackNode=null,2}function D1(e,t){if(Dt!==0&&Dt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(us()&&e.callbackNode!==n)return null;var i=Be;return i=Mn(e,e===Ie?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(c1(e,i,t),j1(e,nt()),e.callbackNode!=null&&e.callbackNode===n?D1.bind(null,e):null)}function O1(e,t){if(us())return null;c1(e,t,!0)}function Ig(){ox(function(){($e&6)!==0?ye(Wt,Wg):T1()})}function ec(){return Xa===0&&(Xa=gr()),Xa}function _1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wr(""+e)}function R1(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Pg(e,t,n,i,l){if(t==="submit"&&n&&n.stateNode===l){var s=_1((l[Vt]||null).action),h=i.submitter;h&&(t=(t=h[Vt]||null)?_1(t.formAction):h.getAttribute("formAction"),t!==null&&(s=t,h=null));var m=new Tr("action","action",null,i,l);e.push({event:m,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Xa!==0){var v=h?R1(l,h):new FormData(l);bu(n,{pending:!0,data:v,method:l.method,action:s},null,v)}}else typeof s=="function"&&(m.preventDefault(),v=h?R1(l,h):new FormData(l),bu(n,{pending:!0,data:v,method:l.method,action:s},s,v))},currentTarget:l}]})}}for(var tc=0;tc<Lo.length;tc++){var nc=Lo[tc],ex=nc.toLowerCase(),tx=nc[0].toUpperCase()+nc.slice(1);yn(ex,"on"+tx)}yn(cd,"onAnimationEnd"),yn(fd,"onAnimationIteration"),yn(dd,"onAnimationStart"),yn("dblclick","onDoubleClick"),yn("focusin","onFocus"),yn("focusout","onBlur"),yn(yg,"onTransitionRun"),yn(vg,"onTransitionStart"),yn(bg,"onTransitionCancel"),yn(hd,"onTransitionEnd"),ii("onMouseEnter",["mouseout","mouseover"]),ii("onMouseLeave",["mouseout","mouseover"]),ii("onPointerEnter",["pointerout","pointerover"]),ii("onPointerLeave",["pointerout","pointerover"]),Da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Da("onBeforeInput",["compositionend","keypress","textInput","paste"]),Da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ul));function C1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],l=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var h=i.length-1;0<=h;h--){var m=i[h],v=m.instance,_=m.currentTarget;if(m=m.listener,v!==s&&l.isPropagationStopped())break e;s=m,l.currentTarget=_;try{s(l)}catch(q){Ir(q)}l.currentTarget=null,s=v}else for(h=0;h<i.length;h++){if(m=i[h],v=m.instance,_=m.currentTarget,m=m.listener,v!==s&&l.isPropagationStopped())break e;s=m,l.currentTarget=_;try{s(l)}catch(q){Ir(q)}l.currentTarget=null,s=v}}}}function Ue(e,t){var n=t[mo];n===void 0&&(n=t[mo]=new Set);var i=e+"__bubble";n.has(i)||(k1(t,e,2,!1),n.add(i))}function ac(e,t,n){var i=0;t&&(i|=4),k1(n,e,i,t)}var ds="_reactListening"+Math.random().toString(36).slice(2);function ic(e){if(!e[ds]){e[ds]=!0,Tf.forEach(function(n){n!=="selectionchange"&&(nx.has(n)||ac(n,!1,e),ac(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ds]||(t[ds]=!0,ac("selectionchange",!1,t))}}function k1(e,t,n,i){switch(ah(t)){case 2:var l=Ox;break;case 8:l=_x;break;default:l=yc}n=l.bind(null,t,n,e),l=void 0,!To||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function lc(e,t,n,i,l){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var m=i.stateNode.containerInfo;if(m===l)break;if(h===4)for(h=i.return;h!==null;){var v=h.tag;if((v===3||v===4)&&h.stateNode.containerInfo===l)return;h=h.return}for(;m!==null;){if(h=ti(m),h===null)return;if(v=h.tag,v===5||v===6||v===26||v===27){i=s=h;continue e}m=m.parentNode}}i=i.return}qf(function(){var _=s,q=Ao(n),X=[];e:{var k=pd.get(e);if(k!==void 0){var N=Tr,ze=e;switch(e){case"keypress":if(Ar(n)===0)break e;case"keydown":case"keyup":N=Fm;break;case"focusin":ze="focus",N=_o;break;case"focusout":ze="blur",N=_o;break;case"beforeblur":case"afterblur":N=_o;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Pm;break;case cd:case fd:case dd:N=Vm;break;case hd:N=tg;break;case"scroll":case"scrollend":N=Um;break;case"wheel":N=ag;break;case"copy":case"cut":case"paste":N=Gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Zf;break;case"toggle":case"beforetoggle":N=lg}var ve=(t&4)!==0,Fe=!ve&&(e==="scroll"||e==="scrollend"),T=ve?k!==null?k+"Capture":null:k;ve=[];for(var z=_,D;z!==null;){var Y=z;if(D=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||D===null||T===null||(Y=tl(z,T),Y!=null&&ve.push(Bl(z,Y,D))),Fe)break;z=z.return}0<ve.length&&(k=new N(k,ze,null,n,q),X.push({event:k,listeners:ve}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",k&&n!==Eo&&(ze=n.relatedTarget||n.fromElement)&&(ti(ze)||ze[ei]))break e;if((N||k)&&(k=q.window===q?q:(k=q.ownerDocument)?k.defaultView||k.parentWindow:window,N?(ze=n.relatedTarget||n.toElement,N=_,ze=ze?ti(ze):null,ze!==null&&(Fe=d(ze),ve=ze.tag,ze!==Fe||ve!==5&&ve!==27&&ve!==6)&&(ze=null)):(N=null,ze=_),N!==ze)){if(ve=Gf,Y="onMouseLeave",T="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(ve=Zf,Y="onPointerLeave",T="onPointerEnter",z="pointer"),Fe=N==null?k:el(N),D=ze==null?k:el(ze),k=new ve(Y,z+"leave",N,n,q),k.target=Fe,k.relatedTarget=D,Y=null,ti(q)===_&&(ve=new ve(T,z+"enter",ze,n,q),ve.target=D,ve.relatedTarget=Fe,Y=ve),Fe=Y,N&&ze)t:{for(ve=N,T=ze,z=0,D=ve;D;D=Mi(D))z++;for(D=0,Y=T;Y;Y=Mi(Y))D++;for(;0<z-D;)ve=Mi(ve),z--;for(;0<D-z;)T=Mi(T),D--;for(;z--;){if(ve===T||T!==null&&ve===T.alternate)break t;ve=Mi(ve),T=Mi(T)}ve=null}else ve=null;N!==null&&N1(X,k,N,ve,!1),ze!==null&&Fe!==null&&N1(X,Fe,ze,ve,!0)}}e:{if(k=_?el(_):window,N=k.nodeName&&k.nodeName.toLowerCase(),N==="select"||N==="input"&&k.type==="file")var he=Pf;else if(Wf(k))if(ed)he=mg;else{he=hg;var Ne=dg}else N=k.nodeName,!N||N.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?_&&wo(_.elementType)&&(he=Pf):he=pg;if(he&&(he=he(e,_))){If(X,he,n,q);break e}Ne&&Ne(e,k,_),e==="focusout"&&_&&k.type==="number"&&_.memoizedProps.value!=null&&So(k,"number",k.value)}switch(Ne=_?el(_):window,e){case"focusin":(Wf(Ne)||Ne.contentEditable==="true")&&(fi=Ne,Uo=_,ul=null);break;case"focusout":ul=Uo=fi=null;break;case"mousedown":Bo=!0;break;case"contextmenu":case"mouseup":case"dragend":Bo=!1,od(X,n,q);break;case"selectionchange":if(xg)break;case"keydown":case"keyup":od(X,n,q)}var me;if(Co)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else ci?Jf(e,n)&&(we="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(we="onCompositionStart");we&&($f&&n.locale!=="ko"&&(ci||we!=="onCompositionStart"?we==="onCompositionEnd"&&ci&&(me=Vf()):(na=q,jo="value"in na?na.value:na.textContent,ci=!0)),Ne=hs(_,we),0<Ne.length&&(we=new Xf(we,e,null,n,q),X.push({event:we,listeners:Ne}),me?we.data=me:(me=Ff(n),me!==null&&(we.data=me)))),(me=sg?og(e,n):ug(e,n))&&(we=hs(_,"onBeforeInput"),0<we.length&&(Ne=new Xf("onBeforeInput","beforeinput",null,n,q),X.push({event:Ne,listeners:we}),Ne.data=me)),Pg(X,e,_,n,q)}C1(X,t)})}function Bl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hs(e,t){for(var n=t+"Capture",i=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=tl(e,n),l!=null&&i.unshift(Bl(e,l,s)),l=tl(e,t),l!=null&&i.push(Bl(e,l,s))),e.tag===3)return i;e=e.return}return[]}function Mi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function N1(e,t,n,i,l){for(var s=t._reactName,h=[];n!==null&&n!==i;){var m=n,v=m.alternate,_=m.stateNode;if(m=m.tag,v!==null&&v===i)break;m!==5&&m!==26&&m!==27||_===null||(v=_,l?(_=tl(n,s),_!=null&&h.unshift(Bl(n,_,v))):l||(_=tl(n,s),_!=null&&h.push(Bl(n,_,v)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var ax=/\r\n?/g,ix=/\u0000|\uFFFD/g;function M1(e){return(typeof e=="string"?e:""+e).replace(ax,`
`).replace(ix,"")}function U1(e,t){return t=M1(t),M1(e)===t}function ps(){}function Je(e,t,n,i,l,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||si(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&si(e,""+i);break;case"className":vr(e,"class",i);break;case"tabIndex":vr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":vr(e,n,i);break;case"style":Hf(e,i,s);break;case"data":if(t!=="object"){vr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=wr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Je(e,t,"name",l.name,l,null),Je(e,t,"formEncType",l.formEncType,l,null),Je(e,t,"formMethod",l.formMethod,l,null),Je(e,t,"formTarget",l.formTarget,l,null)):(Je(e,t,"encType",l.encType,l,null),Je(e,t,"method",l.method,l,null),Je(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=wr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ps);break;case"onScroll":i!=null&&Ue("scroll",e);break;case"onScrollEnd":i!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=wr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),yr(e,"popover",i);break;case"xlinkActuate":Bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Bn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Bn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Bn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Bn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":yr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Nm.get(n)||n,yr(e,n,i))}}function rc(e,t,n,i,l,s){switch(n){case"style":Hf(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof i=="string"?si(e,i):(typeof i=="number"||typeof i=="bigint")&&si(e,""+i);break;case"onScroll":i!=null&&Ue("scroll",e);break;case"onScrollEnd":i!=null&&Ue("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ps);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),s=e[Vt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,l),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,l);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):yr(e,n,i)}}}function Ot(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var i=!1,l=!1,s;for(s in n)if(n.hasOwnProperty(s)){var h=n[s];if(h!=null)switch(s){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Je(e,t,s,h,n,null)}}l&&Je(e,t,"srcSet",n.srcSet,n,null),i&&Je(e,t,"src",n.src,n,null);return;case"input":Ue("invalid",e);var m=s=h=l=null,v=null,_=null;for(i in n)if(n.hasOwnProperty(i)){var q=n[i];if(q!=null)switch(i){case"name":l=q;break;case"type":h=q;break;case"checked":v=q;break;case"defaultChecked":_=q;break;case"value":s=q;break;case"defaultValue":m=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(u(137,t));break;default:Je(e,t,i,q,n,null)}}Nf(e,s,m,v,_,h,l,!1),br(e);return;case"select":Ue("invalid",e),i=h=s=null;for(l in n)if(n.hasOwnProperty(l)&&(m=n[l],m!=null))switch(l){case"value":s=m;break;case"defaultValue":h=m;break;case"multiple":i=m;default:Je(e,t,l,m,n,null)}t=s,n=h,e.multiple=!!i,t!=null?ri(e,!!i,t,!1):n!=null&&ri(e,!!i,n,!0);return;case"textarea":Ue("invalid",e),s=l=i=null;for(h in n)if(n.hasOwnProperty(h)&&(m=n[h],m!=null))switch(h){case"value":i=m;break;case"defaultValue":l=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(u(91));break;default:Je(e,t,h,m,n,null)}Uf(e,i,l,s),br(e);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(i=n[v],i!=null))switch(v){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Je(e,t,v,i,n,null)}return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(i=0;i<Ul.length;i++)Ue(Ul[i],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in n)if(n.hasOwnProperty(_)&&(i=n[_],i!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Je(e,t,_,i,n,null)}return;default:if(wo(t)){for(q in n)n.hasOwnProperty(q)&&(i=n[q],i!==void 0&&rc(e,t,q,i,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(i=n[m],i!=null&&Je(e,t,m,i,n,null))}function lx(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,h=null,m=null,v=null,_=null,q=null;for(N in n){var X=n[N];if(n.hasOwnProperty(N)&&X!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":v=X;default:i.hasOwnProperty(N)||Je(e,t,N,null,i,X)}}for(var k in i){var N=i[k];if(X=n[k],i.hasOwnProperty(k)&&(N!=null||X!=null))switch(k){case"type":s=N;break;case"name":l=N;break;case"checked":_=N;break;case"defaultChecked":q=N;break;case"value":h=N;break;case"defaultValue":m=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:N!==X&&Je(e,t,k,N,i,X)}}bo(e,h,m,v,_,q,s,l);return;case"select":N=h=m=k=null;for(s in n)if(v=n[s],n.hasOwnProperty(s)&&v!=null)switch(s){case"value":break;case"multiple":N=v;default:i.hasOwnProperty(s)||Je(e,t,s,null,i,v)}for(l in i)if(s=i[l],v=n[l],i.hasOwnProperty(l)&&(s!=null||v!=null))switch(l){case"value":k=s;break;case"defaultValue":m=s;break;case"multiple":h=s;default:s!==v&&Je(e,t,l,s,i,v)}t=m,n=h,i=N,k!=null?ri(e,!!n,k,!1):!!i!=!!n&&(t!=null?ri(e,!!n,t,!0):ri(e,!!n,n?[]:"",!1));return;case"textarea":N=k=null;for(m in n)if(l=n[m],n.hasOwnProperty(m)&&l!=null&&!i.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Je(e,t,m,null,i,l)}for(h in i)if(l=i[h],s=n[h],i.hasOwnProperty(h)&&(l!=null||s!=null))switch(h){case"value":k=l;break;case"defaultValue":N=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==s&&Je(e,t,h,l,i,s)}Mf(e,k,N);return;case"option":for(var ze in n)if(k=n[ze],n.hasOwnProperty(ze)&&k!=null&&!i.hasOwnProperty(ze))switch(ze){case"selected":e.selected=!1;break;default:Je(e,t,ze,null,i,k)}for(v in i)if(k=i[v],N=n[v],i.hasOwnProperty(v)&&k!==N&&(k!=null||N!=null))switch(v){case"selected":e.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Je(e,t,v,k,i,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in n)k=n[ve],n.hasOwnProperty(ve)&&k!=null&&!i.hasOwnProperty(ve)&&Je(e,t,ve,null,i,k);for(_ in i)if(k=i[_],N=n[_],i.hasOwnProperty(_)&&k!==N&&(k!=null||N!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(u(137,t));break;default:Je(e,t,_,k,i,N)}return;default:if(wo(t)){for(var Fe in n)k=n[Fe],n.hasOwnProperty(Fe)&&k!==void 0&&!i.hasOwnProperty(Fe)&&rc(e,t,Fe,void 0,i,k);for(q in i)k=i[q],N=n[q],!i.hasOwnProperty(q)||k===N||k===void 0&&N===void 0||rc(e,t,q,k,i,N);return}}for(var T in n)k=n[T],n.hasOwnProperty(T)&&k!=null&&!i.hasOwnProperty(T)&&Je(e,t,T,null,i,k);for(X in i)k=i[X],N=n[X],!i.hasOwnProperty(X)||k===N||k==null&&N==null||Je(e,t,X,k,i,N)}var sc=null,oc=null;function ms(e){return e.nodeType===9?e:e.ownerDocument}function B1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function H1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function uc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cc=null;function rx(){var e=window.event;return e&&e.type==="popstate"?e===cc?!1:(cc=e,!0):(cc=null,!1)}var L1=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,q1=typeof Promise=="function"?Promise:void 0,ox=typeof queueMicrotask=="function"?queueMicrotask:typeof q1<"u"?function(e){return q1.resolve(null).then(e).catch(ux)}:L1;function ux(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function V1(e,t){var n=t,i=0,l=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(0<i&&8>i){n=i;var h=e.ownerDocument;if(n&1&&Hl(h.documentElement),n&2&&Hl(h.body),n&4)for(n=h.head,Hl(n),h=n.firstChild;h;){var m=h.nextSibling,v=h.nodeName;h[Pi]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&h.rel.toLowerCase()==="stylesheet"||n.removeChild(h),h=m}}if(l===0){e.removeChild(s),$l(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:i=n.charCodeAt(0)-48;else i=0;n=s}while(n);$l(t)}function fc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":fc(n),go(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function cx(e,t,n,i){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Pi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=bn(e.nextSibling),e===null)break}return null}function fx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=bn(e.nextSibling),e===null))return null;return e}function dc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function dx(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var hc=null;function Y1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function G1(e,t,n){switch(t=ms(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Hl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);go(e)}var mn=new Map,X1=new Set;function gs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Wn=Z.d;Z.d={f:hx,r:px,D:mx,C:gx,L:xx,m:yx,X:bx,S:vx,M:Sx};function hx(){var e=Wn.f(),t=ss();return e||t}function px(e){var t=ni(e);t!==null&&t.tag===5&&t.type==="form"?c0(t):Wn.r(e)}var Ui=typeof document>"u"?null:document;function Z1(e,t,n){var i=Ui;if(i&&typeof t=="string"&&t){var l=on(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),X1.has(l)||(X1.add(l),e={rel:e,crossOrigin:n,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),Ot(t,"link",e),vt(t),i.head.appendChild(t)))}}function mx(e){Wn.D(e),Z1("dns-prefetch",e,null)}function gx(e,t){Wn.C(e,t),Z1("preconnect",e,t)}function xx(e,t,n){Wn.L(e,t,n);var i=Ui;if(i&&e&&t){var l='link[rel="preload"][as="'+on(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+on(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+on(n.imageSizes)+'"]')):l+='[href="'+on(e)+'"]';var s=l;switch(t){case"style":s=Bi(e);break;case"script":s=Hi(e)}mn.has(s)||(e=b({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),mn.set(s,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(Ll(s))||t==="script"&&i.querySelector(ql(s))||(t=i.createElement("link"),Ot(t,"link",e),vt(t),i.head.appendChild(t)))}}function yx(e,t){Wn.m(e,t);var n=Ui;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+on(i)+'"][href="'+on(e)+'"]',s=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Hi(e)}if(!mn.has(s)&&(e=b({rel:"modulepreload",href:e},t),mn.set(s,e),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ql(s)))return}i=n.createElement("link"),Ot(i,"link",e),vt(i),n.head.appendChild(i)}}}function vx(e,t,n){Wn.S(e,t,n);var i=Ui;if(i&&e){var l=ai(i).hoistableStyles,s=Bi(e);t=t||"default";var h=l.get(s);if(!h){var m={loading:0,preload:null};if(h=i.querySelector(Ll(s)))m.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},n),(n=mn.get(s))&&pc(e,n);var v=h=i.createElement("link");vt(v),Ot(v,"link",e),v._p=new Promise(function(_,q){v.onload=_,v.onerror=q}),v.addEventListener("load",function(){m.loading|=1}),v.addEventListener("error",function(){m.loading|=2}),m.loading|=4,xs(h,t,i)}h={type:"stylesheet",instance:h,count:1,state:m},l.set(s,h)}}}function bx(e,t){Wn.X(e,t);var n=Ui;if(n&&e){var i=ai(n).hoistableScripts,l=Hi(e),s=i.get(l);s||(s=n.querySelector(ql(l)),s||(e=b({src:e,async:!0},t),(t=mn.get(l))&&mc(e,t),s=n.createElement("script"),vt(s),Ot(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(l,s))}}function Sx(e,t){Wn.M(e,t);var n=Ui;if(n&&e){var i=ai(n).hoistableScripts,l=Hi(e),s=i.get(l);s||(s=n.querySelector(ql(l)),s||(e=b({src:e,async:!0,type:"module"},t),(t=mn.get(l))&&mc(e,t),s=n.createElement("script"),vt(s),Ot(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(l,s))}}function $1(e,t,n,i){var l=(l=se.current)?gs(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Bi(n.href),n=ai(l).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Bi(n.href);var s=ai(l).hoistableStyles,h=s.get(e);if(h||(l=l.ownerDocument||l,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,h),(s=l.querySelector(Ll(e)))&&!s._p&&(h.instance=s,h.state.loading=5),mn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mn.set(e,n),s||wx(l,e,n,h.state))),t&&i===null)throw Error(u(528,""));return h}if(t&&i!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Hi(n),n=ai(l).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Bi(e){return'href="'+on(e)+'"'}function Ll(e){return'link[rel="stylesheet"]['+e+"]"}function Q1(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function wx(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ot(t,"link",n),vt(t),e.head.appendChild(t))}function Hi(e){return'[src="'+on(e)+'"]'}function ql(e){return"script[async]"+e}function K1(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+on(n.href)+'"]');if(i)return t.instance=i,vt(i),i;var l=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),vt(i),Ot(i,"style",l),xs(i,n.precedence,e),t.instance=i;case"stylesheet":l=Bi(n.href);var s=e.querySelector(Ll(l));if(s)return t.state.loading|=4,t.instance=s,vt(s),s;i=Q1(n),(l=mn.get(l))&&pc(i,l),s=(e.ownerDocument||e).createElement("link"),vt(s);var h=s;return h._p=new Promise(function(m,v){h.onload=m,h.onerror=v}),Ot(s,"link",i),t.state.loading|=4,xs(s,n.precedence,e),t.instance=s;case"script":return s=Hi(n.src),(l=e.querySelector(ql(s)))?(t.instance=l,vt(l),l):(i=n,(l=mn.get(s))&&(i=b({},n),mc(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),vt(l),Ot(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,xs(i,n.precedence,e));return t.instance}function xs(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,s=l,h=0;h<i.length;h++){var m=i[h];if(m.dataset.precedence===t)s=m;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function pc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ys=null;function J1(e,t,n){if(ys===null){var i=new Map,l=ys=new Map;l.set(n,i)}else l=ys,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var s=n[l];if(!(s[Pi]||s[_t]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var h=s.getAttribute(t)||"";h=e+h;var m=i.get(h);m?m.push(s):i.set(h,[s])}}return i}function F1(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Ex(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function W1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Vl=null;function Ax(){}function zx(e,t,n){if(Vl===null)throw Error(u(475));var i=Vl;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Bi(n.href),s=e.querySelector(Ll(l));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=vs.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=s,vt(s);return}s=e.ownerDocument||e,n=Q1(n),(l=mn.get(l))&&pc(n,l),s=s.createElement("link"),vt(s);var h=s;h._p=new Promise(function(m,v){h.onload=m,h.onerror=v}),Ot(s,"link",n),t.instance=s}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=vs.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function Tx(){if(Vl===null)throw Error(u(475));var e=Vl;return e.stylesheets&&e.count===0&&gc(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&gc(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function vs(){if(this.count--,this.count===0){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bs=null;function gc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bs=new Map,t.forEach(jx,e),bs=null,vs.call(e))}function jx(e,t){if(!(t.state.loading&4)){var n=bs.get(e);if(n)var i=n.get(null);else{n=new Map,bs.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var h=l[s];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),i=h)}i&&n.set(null,i)}l=t.instance,h=l.getAttribute("data-precedence"),s=n.get(h)||i,s===i&&n.set(null,l),n.set(h,l),this.count++,i=vs.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Yl={$$typeof:Q,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function Dx(e,t,n,i,l,s,h,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ii(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.hiddenUpdates=Ii(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function I1(e,t,n,i,l,s,h,m,v,_,q,X){return e=new Dx(e,t,n,h,m,v,_,X),t=1,s===!0&&(t|=24),s=Pt(3,null,null,t),e.current=s,s.stateNode=e,t=Wo(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},tu(s),e}function P1(e){return e?(e=mi,e):mi}function eh(e,t,n,i,l,s){l=P1(l),i.context===null?i.context=l:i.pendingContext=l,i=la(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=ra(e,i,t),n!==null&&(ln(n,e,t),yl(n,e,t))}function th(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xc(e,t){th(e,t),(e=e.alternate)&&th(e,t)}function nh(e){if(e.tag===13){var t=pi(e,67108864);t!==null&&ln(t,e,67108864),xc(e,67108864)}}var Ss=!0;function Ox(e,t,n,i){var l=O.T;O.T=null;var s=Z.p;try{Z.p=2,yc(e,t,n,i)}finally{Z.p=s,O.T=l}}function _x(e,t,n,i){var l=O.T;O.T=null;var s=Z.p;try{Z.p=8,yc(e,t,n,i)}finally{Z.p=s,O.T=l}}function yc(e,t,n,i){if(Ss){var l=vc(i);if(l===null)lc(e,t,i,ws,n),ih(e,i);else if(Cx(l,e,t,n,i))i.stopPropagation();else if(ih(e,i),t&4&&-1<Rx.indexOf(e)){for(;l!==null;){var s=ni(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var h=Bt(s.pendingLanes);if(h!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;h;){var v=1<<31-Ze(h);m.entanglements[1]|=v,h&=~v}On(s),($e&6)===0&&(ls=nt()+500,Ml(0))}}break;case 13:m=pi(s,2),m!==null&&ln(m,s,2),ss(),xc(s,2)}if(s=vc(i),s===null&&lc(e,t,i,ws,n),s===l)break;l=s}l!==null&&i.stopPropagation()}else lc(e,t,i,null,n)}}function vc(e){return e=Ao(e),bc(e)}var ws=null;function bc(e){if(ws=null,e=ti(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ws=e,null}function ah(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nn()){case Wt:return 2;case S:return 8;case j:case L:return 32;case ie:return 268435456;default:return 32}default:return 32}}var Sc=!1,va=null,ba=null,Sa=null,Gl=new Map,Xl=new Map,wa=[],Rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ih(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":Gl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xl.delete(t.pointerId)}}function Zl(e,t,n,i,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[l]},t!==null&&(t=ni(t),t!==null&&nh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Cx(e,t,n,i,l){switch(t){case"focusin":return va=Zl(va,e,t,n,i,l),!0;case"dragenter":return ba=Zl(ba,e,t,n,i,l),!0;case"mouseover":return Sa=Zl(Sa,e,t,n,i,l),!0;case"pointerover":var s=l.pointerId;return Gl.set(s,Zl(Gl.get(s)||null,e,t,n,i,l)),!0;case"gotpointercapture":return s=l.pointerId,Xl.set(s,Zl(Xl.get(s)||null,e,t,n,i,l)),!0}return!1}function lh(e){var t=ti(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,zm(e.priority,function(){if(n.tag===13){var i=an();i=ho(i);var l=pi(n,i);l!==null&&ln(l,n,i),xc(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Es(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Eo=i,n.target.dispatchEvent(i),Eo=null}else return t=ni(n),t!==null&&nh(t),e.blockedOn=n,!1;t.shift()}return!0}function rh(e,t,n){Es(e)&&n.delete(t)}function kx(){Sc=!1,va!==null&&Es(va)&&(va=null),ba!==null&&Es(ba)&&(ba=null),Sa!==null&&Es(Sa)&&(Sa=null),Gl.forEach(rh),Xl.forEach(rh)}function As(e,t){e.blockedOn===t&&(e.blockedOn=null,Sc||(Sc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,kx)))}var zs=null;function sh(e){zs!==e&&(zs=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){zs===e&&(zs=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(bc(i||n)===null)continue;break}var s=ni(n);s!==null&&(e.splice(t,3),t-=3,bu(s,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function $l(e){function t(v){return As(v,e)}va!==null&&As(va,e),ba!==null&&As(ba,e),Sa!==null&&As(Sa,e),Gl.forEach(t),Xl.forEach(t);for(var n=0;n<wa.length;n++){var i=wa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<wa.length&&(n=wa[0],n.blockedOn===null);)lh(n),n.blockedOn===null&&wa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],s=n[i+1],h=l[Vt]||null;if(typeof s=="function")h||sh(n);else if(h){var m=null;if(s&&s.hasAttribute("formAction")){if(l=s,h=s[Vt]||null)m=h.formAction;else if(bc(l)!==null)continue}else m=h.action;typeof m=="function"?n[i+1]=m:(n.splice(i,3),i-=3),sh(n)}}}function wc(e){this._internalRoot=e}Ts.prototype.render=wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,i=an();eh(n,i,e,t,null,null)},Ts.prototype.unmount=wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;eh(e.current,2,null,e,null,null),ss(),t[ei]=null}};function Ts(e){this._internalRoot=e}Ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=Af();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wa.length&&t!==0&&t<wa[n].priority;n++);wa.splice(n,0,e),n===0&&lh(e)}};var oh=r.version;if(oh!=="19.1.1")throw Error(u(527,oh,"19.1.1"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=w(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Nx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var js=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!js.isDisabled&&js.supportsFiber)try{oe=js.inject(Nx),Ae=js}catch{}}return Kl.createRoot=function(e,t){if(!c(e))throw Error(u(299));var n=!1,i="",l=A0,s=z0,h=T0,m=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=I1(e,1,!1,null,null,n,i,l,s,h,m,null),e[ei]=t.current,ic(e),new wc(t)},Kl.hydrateRoot=function(e,t,n){if(!c(e))throw Error(u(299));var i=!1,l="",s=A0,h=z0,m=T0,v=null,_=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(v=n.unstable_transitionCallbacks),n.formState!==void 0&&(_=n.formState)),t=I1(e,1,!0,t,n??null,i,l,s,h,m,v,_),t.context=P1(null),n=t.current,i=an(),i=ho(i),l=la(i),l.callback=null,ra(n,l,i),n=i,t.current.lanes=n,Pa(t,n),On(t),e[ei]=t.current,ic(e),new Ts(t)},Kl.version="19.1.1",Kl}var yh;function Xx(){if(yh)return Ac.exports;yh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Ac.exports=Gx(),Ac.exports}var Zx=Xx(),G=tf();const At=Ux(G);function xp(a,r){return function(){return a.apply(r,arguments)}}const{toString:$x}=Object.prototype,{getPrototypeOf:nf}=Object,{iterator:Js,toStringTag:yp}=Symbol,Fs=(a=>r=>{const o=$x.call(r);return a[o]||(a[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),An=a=>(a=a.toLowerCase(),r=>Fs(r)===a),Ws=a=>r=>typeof r===a,{isArray:Ki}=Array,nr=Ws("undefined");function sr(a){return a!==null&&!nr(a)&&a.constructor!==null&&!nr(a.constructor)&&Kt(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const vp=An("ArrayBuffer");function Qx(a){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(a):r=a&&a.buffer&&vp(a.buffer),r}const Kx=Ws("string"),Kt=Ws("function"),bp=Ws("number"),or=a=>a!==null&&typeof a=="object",Jx=a=>a===!0||a===!1,Rs=a=>{if(Fs(a)!=="object")return!1;const r=nf(a);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(yp in a)&&!(Js in a)},Fx=a=>{if(!or(a)||sr(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},Wx=An("Date"),Ix=An("File"),Px=An("Blob"),ey=An("FileList"),ty=a=>or(a)&&Kt(a.pipe),ny=a=>{let r;return a&&(typeof FormData=="function"&&a instanceof FormData||Kt(a.append)&&((r=Fs(a))==="formdata"||r==="object"&&Kt(a.toString)&&a.toString()==="[object FormData]"))},ay=An("URLSearchParams"),[iy,ly,ry,sy]=["ReadableStream","Request","Response","Headers"].map(An),oy=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ur(a,r,{allOwnKeys:o=!1}={}){if(a===null||typeof a>"u")return;let u,c;if(typeof a!="object"&&(a=[a]),Ki(a))for(u=0,c=a.length;u<c;u++)r.call(null,a[u],u,a);else{if(sr(a))return;const d=o?Object.getOwnPropertyNames(a):Object.keys(a),p=d.length;let g;for(u=0;u<p;u++)g=d[u],r.call(null,a[g],g,a)}}function Sp(a,r){if(sr(a))return null;r=r.toLowerCase();const o=Object.keys(a);let u=o.length,c;for(;u-- >0;)if(c=o[u],r===c.toLowerCase())return c;return null}const Za=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,wp=a=>!nr(a)&&a!==Za;function qc(){const{caseless:a}=wp(this)&&this||{},r={},o=(u,c)=>{const d=a&&Sp(r,c)||c;Rs(r[d])&&Rs(u)?r[d]=qc(r[d],u):Rs(u)?r[d]=qc({},u):Ki(u)?r[d]=u.slice():r[d]=u};for(let u=0,c=arguments.length;u<c;u++)arguments[u]&&ur(arguments[u],o);return r}const uy=(a,r,o,{allOwnKeys:u}={})=>(ur(r,(c,d)=>{o&&Kt(c)?a[d]=xp(c,o):a[d]=c},{allOwnKeys:u}),a),cy=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),fy=(a,r,o,u)=>{a.prototype=Object.create(r.prototype,u),a.prototype.constructor=a,Object.defineProperty(a,"super",{value:r.prototype}),o&&Object.assign(a.prototype,o)},dy=(a,r,o,u)=>{let c,d,p;const g={};if(r=r||{},a==null)return r;do{for(c=Object.getOwnPropertyNames(a),d=c.length;d-- >0;)p=c[d],(!u||u(p,a,r))&&!g[p]&&(r[p]=a[p],g[p]=!0);a=o!==!1&&nf(a)}while(a&&(!o||o(a,r))&&a!==Object.prototype);return r},hy=(a,r,o)=>{a=String(a),(o===void 0||o>a.length)&&(o=a.length),o-=r.length;const u=a.indexOf(r,o);return u!==-1&&u===o},py=a=>{if(!a)return null;if(Ki(a))return a;let r=a.length;if(!bp(r))return null;const o=new Array(r);for(;r-- >0;)o[r]=a[r];return o},my=(a=>r=>a&&r instanceof a)(typeof Uint8Array<"u"&&nf(Uint8Array)),gy=(a,r)=>{const u=(a&&a[Js]).call(a);let c;for(;(c=u.next())&&!c.done;){const d=c.value;r.call(a,d[0],d[1])}},xy=(a,r)=>{let o;const u=[];for(;(o=a.exec(r))!==null;)u.push(o);return u},yy=An("HTMLFormElement"),vy=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,u,c){return u.toUpperCase()+c}),vh=(({hasOwnProperty:a})=>(r,o)=>a.call(r,o))(Object.prototype),by=An("RegExp"),Ep=(a,r)=>{const o=Object.getOwnPropertyDescriptors(a),u={};ur(o,(c,d)=>{let p;(p=r(c,d,a))!==!1&&(u[d]=p||c)}),Object.defineProperties(a,u)},Sy=a=>{Ep(a,(r,o)=>{if(Kt(a)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const u=a[o];if(Kt(u)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},wy=(a,r)=>{const o={},u=c=>{c.forEach(d=>{o[d]=!0})};return Ki(a)?u(a):u(String(a).split(r)),o},Ey=()=>{},Ay=(a,r)=>a!=null&&Number.isFinite(a=+a)?a:r;function zy(a){return!!(a&&Kt(a.append)&&a[yp]==="FormData"&&a[Js])}const Ty=a=>{const r=new Array(10),o=(u,c)=>{if(or(u)){if(r.indexOf(u)>=0)return;if(sr(u))return u;if(!("toJSON"in u)){r[c]=u;const d=Ki(u)?[]:{};return ur(u,(p,g)=>{const w=o(p,c+1);!nr(w)&&(d[g]=w)}),r[c]=void 0,d}}return u};return o(a,0)},jy=An("AsyncFunction"),Dy=a=>a&&(or(a)||Kt(a))&&Kt(a.then)&&Kt(a.catch),Ap=((a,r)=>a?setImmediate:r?((o,u)=>(Za.addEventListener("message",({source:c,data:d})=>{c===Za&&d===o&&u.length&&u.shift()()},!1),c=>{u.push(c),Za.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",Kt(Za.postMessage)),Oy=typeof queueMicrotask<"u"?queueMicrotask.bind(Za):typeof process<"u"&&process.nextTick||Ap,_y=a=>a!=null&&Kt(a[Js]),B={isArray:Ki,isArrayBuffer:vp,isBuffer:sr,isFormData:ny,isArrayBufferView:Qx,isString:Kx,isNumber:bp,isBoolean:Jx,isObject:or,isPlainObject:Rs,isEmptyObject:Fx,isReadableStream:iy,isRequest:ly,isResponse:ry,isHeaders:sy,isUndefined:nr,isDate:Wx,isFile:Ix,isBlob:Px,isRegExp:by,isFunction:Kt,isStream:ty,isURLSearchParams:ay,isTypedArray:my,isFileList:ey,forEach:ur,merge:qc,extend:uy,trim:oy,stripBOM:cy,inherits:fy,toFlatObject:dy,kindOf:Fs,kindOfTest:An,endsWith:hy,toArray:py,forEachEntry:gy,matchAll:xy,isHTMLForm:yy,hasOwnProperty:vh,hasOwnProp:vh,reduceDescriptors:Ep,freezeMethods:Sy,toObjectSet:wy,toCamelCase:vy,noop:Ey,toFiniteNumber:Ay,findKey:Sp,global:Za,isContextDefined:wp,isSpecCompliantForm:zy,toJSONObject:Ty,isAsyncFn:jy,isThenable:Dy,setImmediate:Ap,asap:Oy,isIterable:_y};function Oe(a,r,o,u,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=a,this.name="AxiosError",r&&(this.code=r),o&&(this.config=o),u&&(this.request=u),c&&(this.response=c,this.status=c.status?c.status:null)}B.inherits(Oe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.status}}});const zp=Oe.prototype,Tp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(a=>{Tp[a]={value:a}});Object.defineProperties(Oe,Tp);Object.defineProperty(zp,"isAxiosError",{value:!0});Oe.from=(a,r,o,u,c,d)=>{const p=Object.create(zp);return B.toFlatObject(a,p,function(w){return w!==Error.prototype},g=>g!=="isAxiosError"),Oe.call(p,a.message,r,o,u,c),p.cause=a,p.name=a.name,d&&Object.assign(p,d),p};const Ry=null;function Vc(a){return B.isPlainObject(a)||B.isArray(a)}function jp(a){return B.endsWith(a,"[]")?a.slice(0,-2):a}function bh(a,r,o){return a?a.concat(r).map(function(c,d){return c=jp(c),!o&&d?"["+c+"]":c}).join(o?".":""):r}function Cy(a){return B.isArray(a)&&!a.some(Vc)}const ky=B.toFlatObject(B,{},null,function(r){return/^is[A-Z]/.test(r)});function Is(a,r,o){if(!B.isObject(a))throw new TypeError("target must be an object");r=r||new FormData,o=B.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(V,R){return!B.isUndefined(R[V])});const u=o.metaTokens,c=o.visitor||b,d=o.dots,p=o.indexes,w=(o.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(r);if(!B.isFunction(c))throw new TypeError("visitor must be a function");function x(M){if(M===null)return"";if(B.isDate(M))return M.toISOString();if(B.isBoolean(M))return M.toString();if(!w&&B.isBlob(M))throw new Oe("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(M)||B.isTypedArray(M)?w&&typeof Blob=="function"?new Blob([M]):Buffer.from(M):M}function b(M,V,R){let K=M;if(M&&!R&&typeof M=="object"){if(B.endsWith(V,"{}"))V=u?V:V.slice(0,-2),M=JSON.stringify(M);else if(B.isArray(M)&&Cy(M)||(B.isFileList(M)||B.endsWith(V,"[]"))&&(K=B.toArray(M)))return V=jp(V),K.forEach(function(Q,le){!(B.isUndefined(Q)||Q===null)&&r.append(p===!0?bh([V],le,d):p===null?V:V+"[]",x(Q))}),!1}return Vc(M)?!0:(r.append(bh(R,V,d),x(M)),!1)}const A=[],E=Object.assign(ky,{defaultVisitor:b,convertValue:x,isVisitable:Vc});function $(M,V){if(!B.isUndefined(M)){if(A.indexOf(M)!==-1)throw Error("Circular reference detected in "+V.join("."));A.push(M),B.forEach(M,function(K,H){(!(B.isUndefined(K)||K===null)&&c.call(r,K,B.isString(H)?H.trim():H,V,E))===!0&&$(K,V?V.concat(H):[H])}),A.pop()}}if(!B.isObject(a))throw new TypeError("data must be an object");return $(a),r}function Sh(a){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(u){return r[u]})}function af(a,r){this._pairs=[],a&&Is(a,this,r)}const Dp=af.prototype;Dp.append=function(r,o){this._pairs.push([r,o])};Dp.toString=function(r){const o=r?function(u){return r.call(this,u,Sh)}:Sh;return this._pairs.map(function(c){return o(c[0])+"="+o(c[1])},"").join("&")};function Ny(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Op(a,r,o){if(!r)return a;const u=o&&o.encode||Ny;B.isFunction(o)&&(o={serialize:o});const c=o&&o.serialize;let d;if(c?d=c(r,o):d=B.isURLSearchParams(r)?r.toString():new af(r,o).toString(u),d){const p=a.indexOf("#");p!==-1&&(a=a.slice(0,p)),a+=(a.indexOf("?")===-1?"?":"&")+d}return a}class wh{constructor(){this.handlers=[]}use(r,o,u){return this.handlers.push({fulfilled:r,rejected:o,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){B.forEach(this.handlers,function(u){u!==null&&r(u)})}}const _p={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},My=typeof URLSearchParams<"u"?URLSearchParams:af,Uy=typeof FormData<"u"?FormData:null,By=typeof Blob<"u"?Blob:null,Hy={isBrowser:!0,classes:{URLSearchParams:My,FormData:Uy,Blob:By},protocols:["http","https","file","blob","url","data"]},lf=typeof window<"u"&&typeof document<"u",Yc=typeof navigator=="object"&&navigator||void 0,Ly=lf&&(!Yc||["ReactNative","NativeScript","NS"].indexOf(Yc.product)<0),qy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Vy=lf&&window.location.href||"http://localhost",Yy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:lf,hasStandardBrowserEnv:Ly,hasStandardBrowserWebWorkerEnv:qy,navigator:Yc,origin:Vy},Symbol.toStringTag,{value:"Module"})),kt={...Yy,...Hy};function Gy(a,r){return Is(a,new kt.classes.URLSearchParams,{visitor:function(o,u,c,d){return kt.isNode&&B.isBuffer(o)?(this.append(u,o.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)},...r})}function Xy(a){return B.matchAll(/\w+|\[(\w*)]/g,a).map(r=>r[0]==="[]"?"":r[1]||r[0])}function Zy(a){const r={},o=Object.keys(a);let u;const c=o.length;let d;for(u=0;u<c;u++)d=o[u],r[d]=a[d];return r}function Rp(a){function r(o,u,c,d){let p=o[d++];if(p==="__proto__")return!0;const g=Number.isFinite(+p),w=d>=o.length;return p=!p&&B.isArray(c)?c.length:p,w?(B.hasOwnProp(c,p)?c[p]=[c[p],u]:c[p]=u,!g):((!c[p]||!B.isObject(c[p]))&&(c[p]=[]),r(o,u,c[p],d)&&B.isArray(c[p])&&(c[p]=Zy(c[p])),!g)}if(B.isFormData(a)&&B.isFunction(a.entries)){const o={};return B.forEachEntry(a,(u,c)=>{r(Xy(u),c,o,0)}),o}return null}function $y(a,r,o){if(B.isString(a))try{return(r||JSON.parse)(a),B.trim(a)}catch(u){if(u.name!=="SyntaxError")throw u}return(o||JSON.stringify)(a)}const cr={transitional:_p,adapter:["xhr","http","fetch"],transformRequest:[function(r,o){const u=o.getContentType()||"",c=u.indexOf("application/json")>-1,d=B.isObject(r);if(d&&B.isHTMLForm(r)&&(r=new FormData(r)),B.isFormData(r))return c?JSON.stringify(Rp(r)):r;if(B.isArrayBuffer(r)||B.isBuffer(r)||B.isStream(r)||B.isFile(r)||B.isBlob(r)||B.isReadableStream(r))return r;if(B.isArrayBufferView(r))return r.buffer;if(B.isURLSearchParams(r))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let g;if(d){if(u.indexOf("application/x-www-form-urlencoded")>-1)return Gy(r,this.formSerializer).toString();if((g=B.isFileList(r))||u.indexOf("multipart/form-data")>-1){const w=this.env&&this.env.FormData;return Is(g?{"files[]":r}:r,w&&new w,this.formSerializer)}}return d||c?(o.setContentType("application/json",!1),$y(r)):r}],transformResponse:[function(r){const o=this.transitional||cr.transitional,u=o&&o.forcedJSONParsing,c=this.responseType==="json";if(B.isResponse(r)||B.isReadableStream(r))return r;if(r&&B.isString(r)&&(u&&!this.responseType||c)){const p=!(o&&o.silentJSONParsing)&&c;try{return JSON.parse(r)}catch(g){if(p)throw g.name==="SyntaxError"?Oe.from(g,Oe.ERR_BAD_RESPONSE,this,null,this.response):g}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:kt.classes.FormData,Blob:kt.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch"],a=>{cr.headers[a]={}});const Qy=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ky=a=>{const r={};let o,u,c;return a&&a.split(`
`).forEach(function(p){c=p.indexOf(":"),o=p.substring(0,c).trim().toLowerCase(),u=p.substring(c+1).trim(),!(!o||r[o]&&Qy[o])&&(o==="set-cookie"?r[o]?r[o].push(u):r[o]=[u]:r[o]=r[o]?r[o]+", "+u:u)}),r},Eh=Symbol("internals");function Jl(a){return a&&String(a).trim().toLowerCase()}function Cs(a){return a===!1||a==null?a:B.isArray(a)?a.map(Cs):String(a)}function Jy(a){const r=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let u;for(;u=o.exec(a);)r[u[1]]=u[2];return r}const Fy=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function Oc(a,r,o,u,c){if(B.isFunction(u))return u.call(this,r,o);if(c&&(r=o),!!B.isString(r)){if(B.isString(u))return r.indexOf(u)!==-1;if(B.isRegExp(u))return u.test(r)}}function Wy(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,o,u)=>o.toUpperCase()+u)}function Iy(a,r){const o=B.toCamelCase(" "+r);["get","set","has"].forEach(u=>{Object.defineProperty(a,u+o,{value:function(c,d,p){return this[u].call(this,r,c,d,p)},configurable:!0})})}let Jt=class{constructor(r){r&&this.set(r)}set(r,o,u){const c=this;function d(g,w,x){const b=Jl(w);if(!b)throw new Error("header name must be a non-empty string");const A=B.findKey(c,b);(!A||c[A]===void 0||x===!0||x===void 0&&c[A]!==!1)&&(c[A||w]=Cs(g))}const p=(g,w)=>B.forEach(g,(x,b)=>d(x,b,w));if(B.isPlainObject(r)||r instanceof this.constructor)p(r,o);else if(B.isString(r)&&(r=r.trim())&&!Fy(r))p(Ky(r),o);else if(B.isObject(r)&&B.isIterable(r)){let g={},w,x;for(const b of r){if(!B.isArray(b))throw TypeError("Object iterator must return a key-value pair");g[x=b[0]]=(w=g[x])?B.isArray(w)?[...w,b[1]]:[w,b[1]]:b[1]}p(g,o)}else r!=null&&d(o,r,u);return this}get(r,o){if(r=Jl(r),r){const u=B.findKey(this,r);if(u){const c=this[u];if(!o)return c;if(o===!0)return Jy(c);if(B.isFunction(o))return o.call(this,c,u);if(B.isRegExp(o))return o.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,o){if(r=Jl(r),r){const u=B.findKey(this,r);return!!(u&&this[u]!==void 0&&(!o||Oc(this,this[u],u,o)))}return!1}delete(r,o){const u=this;let c=!1;function d(p){if(p=Jl(p),p){const g=B.findKey(u,p);g&&(!o||Oc(u,u[g],g,o))&&(delete u[g],c=!0)}}return B.isArray(r)?r.forEach(d):d(r),c}clear(r){const o=Object.keys(this);let u=o.length,c=!1;for(;u--;){const d=o[u];(!r||Oc(this,this[d],d,r,!0))&&(delete this[d],c=!0)}return c}normalize(r){const o=this,u={};return B.forEach(this,(c,d)=>{const p=B.findKey(u,d);if(p){o[p]=Cs(c),delete o[d];return}const g=r?Wy(d):String(d).trim();g!==d&&delete o[d],o[g]=Cs(c),u[g]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const o=Object.create(null);return B.forEach(this,(u,c)=>{u!=null&&u!==!1&&(o[c]=r&&B.isArray(u)?u.join(", "):u)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,o])=>r+": "+o).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...o){const u=new this(r);return o.forEach(c=>u.set(c)),u}static accessor(r){const u=(this[Eh]=this[Eh]={accessors:{}}).accessors,c=this.prototype;function d(p){const g=Jl(p);u[g]||(Iy(c,p),u[g]=!0)}return B.isArray(r)?r.forEach(d):d(r),this}};Jt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(Jt.prototype,({value:a},r)=>{let o=r[0].toUpperCase()+r.slice(1);return{get:()=>a,set(u){this[o]=u}}});B.freezeMethods(Jt);function _c(a,r){const o=this||cr,u=r||o,c=Jt.from(u.headers);let d=u.data;return B.forEach(a,function(g){d=g.call(o,d,c.normalize(),r?r.status:void 0)}),c.normalize(),d}function Cp(a){return!!(a&&a.__CANCEL__)}function Ji(a,r,o){Oe.call(this,a??"canceled",Oe.ERR_CANCELED,r,o),this.name="CanceledError"}B.inherits(Ji,Oe,{__CANCEL__:!0});function kp(a,r,o){const u=o.config.validateStatus;!o.status||!u||u(o.status)?a(o):r(new Oe("Request failed with status code "+o.status,[Oe.ERR_BAD_REQUEST,Oe.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function Py(a){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return r&&r[1]||""}function e3(a,r){a=a||10;const o=new Array(a),u=new Array(a);let c=0,d=0,p;return r=r!==void 0?r:1e3,function(w){const x=Date.now(),b=u[d];p||(p=x),o[c]=w,u[c]=x;let A=d,E=0;for(;A!==c;)E+=o[A++],A=A%a;if(c=(c+1)%a,c===d&&(d=(d+1)%a),x-p<r)return;const $=b&&x-b;return $?Math.round(E*1e3/$):void 0}}function t3(a,r){let o=0,u=1e3/r,c,d;const p=(x,b=Date.now())=>{o=b,c=null,d&&(clearTimeout(d),d=null),a(...x)};return[(...x)=>{const b=Date.now(),A=b-o;A>=u?p(x,b):(c=x,d||(d=setTimeout(()=>{d=null,p(c)},u-A)))},()=>c&&p(c)]}const qs=(a,r,o=3)=>{let u=0;const c=e3(50,250);return t3(d=>{const p=d.loaded,g=d.lengthComputable?d.total:void 0,w=p-u,x=c(w),b=p<=g;u=p;const A={loaded:p,total:g,progress:g?p/g:void 0,bytes:w,rate:x||void 0,estimated:x&&g&&b?(g-p)/x:void 0,event:d,lengthComputable:g!=null,[r?"download":"upload"]:!0};a(A)},o)},Ah=(a,r)=>{const o=a!=null;return[u=>r[0]({lengthComputable:o,total:a,loaded:u}),r[1]]},zh=a=>(...r)=>B.asap(()=>a(...r)),n3=kt.hasStandardBrowserEnv?((a,r)=>o=>(o=new URL(o,kt.origin),a.protocol===o.protocol&&a.host===o.host&&(r||a.port===o.port)))(new URL(kt.origin),kt.navigator&&/(msie|trident)/i.test(kt.navigator.userAgent)):()=>!0,a3=kt.hasStandardBrowserEnv?{write(a,r,o,u,c,d){const p=[a+"="+encodeURIComponent(r)];B.isNumber(o)&&p.push("expires="+new Date(o).toGMTString()),B.isString(u)&&p.push("path="+u),B.isString(c)&&p.push("domain="+c),d===!0&&p.push("secure"),document.cookie=p.join("; ")},read(a){const r=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(a){this.write(a,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function i3(a){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function l3(a,r){return r?a.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):a}function Np(a,r,o){let u=!i3(r);return a&&(u||o==!1)?l3(a,r):r}const Th=a=>a instanceof Jt?{...a}:a;function Wa(a,r){r=r||{};const o={};function u(x,b,A,E){return B.isPlainObject(x)&&B.isPlainObject(b)?B.merge.call({caseless:E},x,b):B.isPlainObject(b)?B.merge({},b):B.isArray(b)?b.slice():b}function c(x,b,A,E){if(B.isUndefined(b)){if(!B.isUndefined(x))return u(void 0,x,A,E)}else return u(x,b,A,E)}function d(x,b){if(!B.isUndefined(b))return u(void 0,b)}function p(x,b){if(B.isUndefined(b)){if(!B.isUndefined(x))return u(void 0,x)}else return u(void 0,b)}function g(x,b,A){if(A in r)return u(x,b);if(A in a)return u(void 0,x)}const w={url:d,method:d,data:d,baseURL:p,transformRequest:p,transformResponse:p,paramsSerializer:p,timeout:p,timeoutMessage:p,withCredentials:p,withXSRFToken:p,adapter:p,responseType:p,xsrfCookieName:p,xsrfHeaderName:p,onUploadProgress:p,onDownloadProgress:p,decompress:p,maxContentLength:p,maxBodyLength:p,beforeRedirect:p,transport:p,httpAgent:p,httpsAgent:p,cancelToken:p,socketPath:p,responseEncoding:p,validateStatus:g,headers:(x,b,A)=>c(Th(x),Th(b),A,!0)};return B.forEach(Object.keys({...a,...r}),function(b){const A=w[b]||c,E=A(a[b],r[b],b);B.isUndefined(E)&&A!==g||(o[b]=E)}),o}const Mp=a=>{const r=Wa({},a);let{data:o,withXSRFToken:u,xsrfHeaderName:c,xsrfCookieName:d,headers:p,auth:g}=r;r.headers=p=Jt.from(p),r.url=Op(Np(r.baseURL,r.url,r.allowAbsoluteUrls),a.params,a.paramsSerializer),g&&p.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):"")));let w;if(B.isFormData(o)){if(kt.hasStandardBrowserEnv||kt.hasStandardBrowserWebWorkerEnv)p.setContentType(void 0);else if((w=p.getContentType())!==!1){const[x,...b]=w?w.split(";").map(A=>A.trim()).filter(Boolean):[];p.setContentType([x||"multipart/form-data",...b].join("; "))}}if(kt.hasStandardBrowserEnv&&(u&&B.isFunction(u)&&(u=u(r)),u||u!==!1&&n3(r.url))){const x=c&&d&&a3.read(d);x&&p.set(c,x)}return r},r3=typeof XMLHttpRequest<"u",s3=r3&&function(a){return new Promise(function(o,u){const c=Mp(a);let d=c.data;const p=Jt.from(c.headers).normalize();let{responseType:g,onUploadProgress:w,onDownloadProgress:x}=c,b,A,E,$,M;function V(){$&&$(),M&&M(),c.cancelToken&&c.cancelToken.unsubscribe(b),c.signal&&c.signal.removeEventListener("abort",b)}let R=new XMLHttpRequest;R.open(c.method.toUpperCase(),c.url,!0),R.timeout=c.timeout;function K(){if(!R)return;const Q=Jt.from("getAllResponseHeaders"in R&&R.getAllResponseHeaders()),U={data:!g||g==="text"||g==="json"?R.responseText:R.response,status:R.status,statusText:R.statusText,headers:Q,config:a,request:R};kp(function(ne){o(ne),V()},function(ne){u(ne),V()},U),R=null}"onloadend"in R?R.onloadend=K:R.onreadystatechange=function(){!R||R.readyState!==4||R.status===0&&!(R.responseURL&&R.responseURL.indexOf("file:")===0)||setTimeout(K)},R.onabort=function(){R&&(u(new Oe("Request aborted",Oe.ECONNABORTED,a,R)),R=null)},R.onerror=function(){u(new Oe("Network Error",Oe.ERR_NETWORK,a,R)),R=null},R.ontimeout=function(){let le=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const U=c.transitional||_p;c.timeoutErrorMessage&&(le=c.timeoutErrorMessage),u(new Oe(le,U.clarifyTimeoutError?Oe.ETIMEDOUT:Oe.ECONNABORTED,a,R)),R=null},d===void 0&&p.setContentType(null),"setRequestHeader"in R&&B.forEach(p.toJSON(),function(le,U){R.setRequestHeader(U,le)}),B.isUndefined(c.withCredentials)||(R.withCredentials=!!c.withCredentials),g&&g!=="json"&&(R.responseType=c.responseType),x&&([E,M]=qs(x,!0),R.addEventListener("progress",E)),w&&R.upload&&([A,$]=qs(w),R.upload.addEventListener("progress",A),R.upload.addEventListener("loadend",$)),(c.cancelToken||c.signal)&&(b=Q=>{R&&(u(!Q||Q.type?new Ji(null,a,R):Q),R.abort(),R=null)},c.cancelToken&&c.cancelToken.subscribe(b),c.signal&&(c.signal.aborted?b():c.signal.addEventListener("abort",b)));const H=Py(c.url);if(H&&kt.protocols.indexOf(H)===-1){u(new Oe("Unsupported protocol "+H+":",Oe.ERR_BAD_REQUEST,a));return}R.send(d||null)})},o3=(a,r)=>{const{length:o}=a=a?a.filter(Boolean):[];if(r||o){let u=new AbortController,c;const d=function(x){if(!c){c=!0,g();const b=x instanceof Error?x:this.reason;u.abort(b instanceof Oe?b:new Ji(b instanceof Error?b.message:b))}};let p=r&&setTimeout(()=>{p=null,d(new Oe(`timeout ${r} of ms exceeded`,Oe.ETIMEDOUT))},r);const g=()=>{a&&(p&&clearTimeout(p),p=null,a.forEach(x=>{x.unsubscribe?x.unsubscribe(d):x.removeEventListener("abort",d)}),a=null)};a.forEach(x=>x.addEventListener("abort",d));const{signal:w}=u;return w.unsubscribe=()=>B.asap(g),w}},u3=function*(a,r){let o=a.byteLength;if(o<r){yield a;return}let u=0,c;for(;u<o;)c=u+r,yield a.slice(u,c),u=c},c3=async function*(a,r){for await(const o of f3(a))yield*u3(o,r)},f3=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const r=a.getReader();try{for(;;){const{done:o,value:u}=await r.read();if(o)break;yield u}}finally{await r.cancel()}},jh=(a,r,o,u)=>{const c=c3(a,r);let d=0,p,g=w=>{p||(p=!0,u&&u(w))};return new ReadableStream({async pull(w){try{const{done:x,value:b}=await c.next();if(x){g(),w.close();return}let A=b.byteLength;if(o){let E=d+=A;o(E)}w.enqueue(new Uint8Array(b))}catch(x){throw g(x),x}},cancel(w){return g(w),c.return()}},{highWaterMark:2})},Ps=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Up=Ps&&typeof ReadableStream=="function",d3=Ps&&(typeof TextEncoder=="function"?(a=>r=>a.encode(r))(new TextEncoder):async a=>new Uint8Array(await new Response(a).arrayBuffer())),Bp=(a,...r)=>{try{return!!a(...r)}catch{return!1}},h3=Up&&Bp(()=>{let a=!1;const r=new Request(kt.origin,{body:new ReadableStream,method:"POST",get duplex(){return a=!0,"half"}}).headers.has("Content-Type");return a&&!r}),Dh=64*1024,Gc=Up&&Bp(()=>B.isReadableStream(new Response("").body)),Vs={stream:Gc&&(a=>a.body)};Ps&&(a=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!Vs[r]&&(Vs[r]=B.isFunction(a[r])?o=>o[r]():(o,u)=>{throw new Oe(`Response type '${r}' is not supported`,Oe.ERR_NOT_SUPPORT,u)})})})(new Response);const p3=async a=>{if(a==null)return 0;if(B.isBlob(a))return a.size;if(B.isSpecCompliantForm(a))return(await new Request(kt.origin,{method:"POST",body:a}).arrayBuffer()).byteLength;if(B.isArrayBufferView(a)||B.isArrayBuffer(a))return a.byteLength;if(B.isURLSearchParams(a)&&(a=a+""),B.isString(a))return(await d3(a)).byteLength},m3=async(a,r)=>{const o=B.toFiniteNumber(a.getContentLength());return o??p3(r)},g3=Ps&&(async a=>{let{url:r,method:o,data:u,signal:c,cancelToken:d,timeout:p,onDownloadProgress:g,onUploadProgress:w,responseType:x,headers:b,withCredentials:A="same-origin",fetchOptions:E}=Mp(a);x=x?(x+"").toLowerCase():"text";let $=o3([c,d&&d.toAbortSignal()],p),M;const V=$&&$.unsubscribe&&(()=>{$.unsubscribe()});let R;try{if(w&&h3&&o!=="get"&&o!=="head"&&(R=await m3(b,u))!==0){let U=new Request(r,{method:"POST",body:u,duplex:"half"}),te;if(B.isFormData(u)&&(te=U.headers.get("content-type"))&&b.setContentType(te),U.body){const[ne,fe]=Ah(R,qs(zh(w)));u=jh(U.body,Dh,ne,fe)}}B.isString(A)||(A=A?"include":"omit");const K="credentials"in Request.prototype;M=new Request(r,{...E,signal:$,method:o.toUpperCase(),headers:b.normalize().toJSON(),body:u,duplex:"half",credentials:K?A:void 0});let H=await fetch(M,E);const Q=Gc&&(x==="stream"||x==="response");if(Gc&&(g||Q&&V)){const U={};["status","statusText","headers"].forEach(de=>{U[de]=H[de]});const te=B.toFiniteNumber(H.headers.get("content-length")),[ne,fe]=g&&Ah(te,qs(zh(g),!0))||[];H=new Response(jh(H.body,Dh,ne,()=>{fe&&fe(),V&&V()}),U)}x=x||"text";let le=await Vs[B.findKey(Vs,x)||"text"](H,a);return!Q&&V&&V(),await new Promise((U,te)=>{kp(U,te,{data:le,headers:Jt.from(H.headers),status:H.status,statusText:H.statusText,config:a,request:M})})}catch(K){throw V&&V(),K&&K.name==="TypeError"&&/Load failed|fetch/i.test(K.message)?Object.assign(new Oe("Network Error",Oe.ERR_NETWORK,a,M),{cause:K.cause||K}):Oe.from(K,K&&K.code,a,M)}}),Xc={http:Ry,xhr:s3,fetch:g3};B.forEach(Xc,(a,r)=>{if(a){try{Object.defineProperty(a,"name",{value:r})}catch{}Object.defineProperty(a,"adapterName",{value:r})}});const Oh=a=>`- ${a}`,x3=a=>B.isFunction(a)||a===null||a===!1,Hp={getAdapter:a=>{a=B.isArray(a)?a:[a];const{length:r}=a;let o,u;const c={};for(let d=0;d<r;d++){o=a[d];let p;if(u=o,!x3(o)&&(u=Xc[(p=String(o)).toLowerCase()],u===void 0))throw new Oe(`Unknown adapter '${p}'`);if(u)break;c[p||"#"+d]=u}if(!u){const d=Object.entries(c).map(([g,w])=>`adapter ${g} `+(w===!1?"is not supported by the environment":"is not available in the build"));let p=r?d.length>1?`since :
`+d.map(Oh).join(`
`):" "+Oh(d[0]):"as no adapter specified";throw new Oe("There is no suitable adapter to dispatch the request "+p,"ERR_NOT_SUPPORT")}return u},adapters:Xc};function Rc(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new Ji(null,a)}function _h(a){return Rc(a),a.headers=Jt.from(a.headers),a.data=_c.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),Hp.getAdapter(a.adapter||cr.adapter)(a).then(function(u){return Rc(a),u.data=_c.call(a,a.transformResponse,u),u.headers=Jt.from(u.headers),u},function(u){return Cp(u)||(Rc(a),u&&u.response&&(u.response.data=_c.call(a,a.transformResponse,u.response),u.response.headers=Jt.from(u.response.headers))),Promise.reject(u)})}const Lp="1.11.0",eo={};["object","boolean","number","function","string","symbol"].forEach((a,r)=>{eo[a]=function(u){return typeof u===a||"a"+(r<1?"n ":" ")+a}});const Rh={};eo.transitional=function(r,o,u){function c(d,p){return"[Axios v"+Lp+"] Transitional option '"+d+"'"+p+(u?". "+u:"")}return(d,p,g)=>{if(r===!1)throw new Oe(c(p," has been removed"+(o?" in "+o:"")),Oe.ERR_DEPRECATED);return o&&!Rh[p]&&(Rh[p]=!0,console.warn(c(p," has been deprecated since v"+o+" and will be removed in the near future"))),r?r(d,p,g):!0}};eo.spelling=function(r){return(o,u)=>(console.warn(`${u} is likely a misspelling of ${r}`),!0)};function y3(a,r,o){if(typeof a!="object")throw new Oe("options must be an object",Oe.ERR_BAD_OPTION_VALUE);const u=Object.keys(a);let c=u.length;for(;c-- >0;){const d=u[c],p=r[d];if(p){const g=a[d],w=g===void 0||p(g,d,a);if(w!==!0)throw new Oe("option "+d+" must be "+w,Oe.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new Oe("Unknown option "+d,Oe.ERR_BAD_OPTION)}}const ks={assertOptions:y3,validators:eo},_n=ks.validators;let Ka=class{constructor(r){this.defaults=r||{},this.interceptors={request:new wh,response:new wh}}async request(r,o){try{return await this._request(r,o)}catch(u){if(u instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const d=c.stack?c.stack.replace(/^.+\n/,""):"";try{u.stack?d&&!String(u.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(u.stack+=`
`+d):u.stack=d}catch{}}throw u}}_request(r,o){typeof r=="string"?(o=o||{},o.url=r):o=r||{},o=Wa(this.defaults,o);const{transitional:u,paramsSerializer:c,headers:d}=o;u!==void 0&&ks.assertOptions(u,{silentJSONParsing:_n.transitional(_n.boolean),forcedJSONParsing:_n.transitional(_n.boolean),clarifyTimeoutError:_n.transitional(_n.boolean)},!1),c!=null&&(B.isFunction(c)?o.paramsSerializer={serialize:c}:ks.assertOptions(c,{encode:_n.function,serialize:_n.function},!0)),o.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?o.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:o.allowAbsoluteUrls=!0),ks.assertOptions(o,{baseUrl:_n.spelling("baseURL"),withXsrfToken:_n.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let p=d&&B.merge(d.common,d[o.method]);d&&B.forEach(["delete","get","head","post","put","patch","common"],M=>{delete d[M]}),o.headers=Jt.concat(p,d);const g=[];let w=!0;this.interceptors.request.forEach(function(V){typeof V.runWhen=="function"&&V.runWhen(o)===!1||(w=w&&V.synchronous,g.unshift(V.fulfilled,V.rejected))});const x=[];this.interceptors.response.forEach(function(V){x.push(V.fulfilled,V.rejected)});let b,A=0,E;if(!w){const M=[_h.bind(this),void 0];for(M.unshift(...g),M.push(...x),E=M.length,b=Promise.resolve(o);A<E;)b=b.then(M[A++],M[A++]);return b}E=g.length;let $=o;for(A=0;A<E;){const M=g[A++],V=g[A++];try{$=M($)}catch(R){V.call(this,R);break}}try{b=_h.call(this,$)}catch(M){return Promise.reject(M)}for(A=0,E=x.length;A<E;)b=b.then(x[A++],x[A++]);return b}getUri(r){r=Wa(this.defaults,r);const o=Np(r.baseURL,r.url,r.allowAbsoluteUrls);return Op(o,r.params,r.paramsSerializer)}};B.forEach(["delete","get","head","options"],function(r){Ka.prototype[r]=function(o,u){return this.request(Wa(u||{},{method:r,url:o,data:(u||{}).data}))}});B.forEach(["post","put","patch"],function(r){function o(u){return function(d,p,g){return this.request(Wa(g||{},{method:r,headers:u?{"Content-Type":"multipart/form-data"}:{},url:d,data:p}))}}Ka.prototype[r]=o(),Ka.prototype[r+"Form"]=o(!0)});let v3=class qp{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(d){o=d});const u=this;this.promise.then(c=>{if(!u._listeners)return;let d=u._listeners.length;for(;d-- >0;)u._listeners[d](c);u._listeners=null}),this.promise.then=c=>{let d;const p=new Promise(g=>{u.subscribe(g),d=g}).then(c);return p.cancel=function(){u.unsubscribe(d)},p},r(function(d,p,g){u.reason||(u.reason=new Ji(d,p,g),o(u.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const o=this._listeners.indexOf(r);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const r=new AbortController,o=u=>{r.abort(u)};return this.subscribe(o),r.signal.unsubscribe=()=>this.unsubscribe(o),r.signal}static source(){let r;return{token:new qp(function(c){r=c}),cancel:r}}};function b3(a){return function(o){return a.apply(null,o)}}function S3(a){return B.isObject(a)&&a.isAxiosError===!0}const Zc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Zc).forEach(([a,r])=>{Zc[r]=a});function Vp(a){const r=new Ka(a),o=xp(Ka.prototype.request,r);return B.extend(o,Ka.prototype,r,{allOwnKeys:!0}),B.extend(o,r,null,{allOwnKeys:!0}),o.create=function(c){return Vp(Wa(a,c))},o}const Le=Vp(cr);Le.Axios=Ka;Le.CanceledError=Ji;Le.CancelToken=v3;Le.isCancel=Cp;Le.VERSION=Lp;Le.toFormData=Is;Le.AxiosError=Oe;Le.Cancel=Le.CanceledError;Le.all=function(r){return Promise.all(r)};Le.spread=b3;Le.isAxiosError=S3;Le.mergeConfig=Wa;Le.AxiosHeaders=Jt;Le.formToJSON=a=>Rp(B.isHTMLForm(a)?new FormData(a):a);Le.getAdapter=Hp.getAdapter;Le.HttpStatusCode=Zc;Le.default=Le;const{Axios:pv,AxiosError:mv,CanceledError:gv,isCancel:xv,CancelToken:yv,VERSION:vv,all:bv,Cancel:Sv,isAxiosError:wv,spread:Ev,toFormData:Av,AxiosHeaders:zv,HttpStatusCode:Tv,formToJSON:jv,getAdapter:Dv,mergeConfig:Ov}=Le;var fr=a=>a.type==="checkbox",$a=a=>a instanceof Date,Lt=a=>a==null;const Yp=a=>typeof a=="object";var ut=a=>!Lt(a)&&!Array.isArray(a)&&Yp(a)&&!$a(a),w3=a=>ut(a)&&a.target?fr(a.target)?a.target.checked:a.target.value:a,E3=a=>a.substring(0,a.search(/\.\d+(\.|$)/))||a,A3=(a,r)=>a.has(E3(r)),z3=a=>{const r=a.constructor&&a.constructor.prototype;return ut(r)&&r.hasOwnProperty("isPrototypeOf")},rf=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Et(a){let r;const o=Array.isArray(a),u=typeof FileList<"u"?a instanceof FileList:!1;if(a instanceof Date)r=new Date(a);else if(!(rf&&(a instanceof Blob||u))&&(o||ut(a)))if(r=o?[]:Object.create(Object.getPrototypeOf(a)),!o&&!z3(a))r=a;else for(const c in a)a.hasOwnProperty(c)&&(r[c]=Et(a[c]));else return a;return r}var to=a=>/^\w*$/.test(a),ht=a=>a===void 0,sf=a=>Array.isArray(a)?a.filter(Boolean):[],of=a=>sf(a.replace(/["|']|\]/g,"").split(/\.|\[/)),pe=(a,r,o)=>{if(!r||!ut(a))return o;const u=(to(r)?[r]:of(r)).reduce((c,d)=>Lt(c)?c:c[d],a);return ht(u)||u===a?ht(a[r])?o:a[r]:u},Rn=a=>typeof a=="boolean",tt=(a,r,o)=>{let u=-1;const c=to(r)?[r]:of(r),d=c.length,p=d-1;for(;++u<d;){const g=c[u];let w=o;if(u!==p){const x=a[g];w=ut(x)||Array.isArray(x)?x:isNaN(+c[u+1])?{}:[]}if(g==="__proto__"||g==="constructor"||g==="prototype")return;a[g]=w,a=a[g]}};const Ch={BLUR:"blur",FOCUS_OUT:"focusout"},Sn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},In={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},T3=At.createContext(null);T3.displayName="HookFormContext";var j3=(a,r,o,u=!0)=>{const c={defaultValues:r._defaultValues};for(const d in a)Object.defineProperty(c,d,{get:()=>{const p=d;return r._proxyFormState[p]!==Sn.all&&(r._proxyFormState[p]=!u||Sn.all),a[p]}});return c};const D3=typeof window<"u"?At.useLayoutEffect:At.useEffect;var kn=a=>typeof a=="string",O3=(a,r,o,u,c)=>kn(a)?(u&&r.watch.add(a),pe(o,a,c)):Array.isArray(a)?a.map(d=>(u&&r.watch.add(d),pe(o,d))):(u&&(r.watchAll=!0),o),$c=a=>Lt(a)||!Yp(a);function za(a,r,o=new WeakSet){if($c(a)||$c(r))return a===r;if($a(a)&&$a(r))return a.getTime()===r.getTime();const u=Object.keys(a),c=Object.keys(r);if(u.length!==c.length)return!1;if(o.has(a)||o.has(r))return!0;o.add(a),o.add(r);for(const d of u){const p=a[d];if(!c.includes(d))return!1;if(d!=="ref"){const g=r[d];if($a(p)&&$a(g)||ut(p)&&ut(g)||Array.isArray(p)&&Array.isArray(g)?!za(p,g,o):p!==g)return!1}}return!0}var _3=(a,r,o,u,c)=>r?{...o[a],types:{...o[a]&&o[a].types?o[a].types:{},[u]:c||!0}}:{},Pl=a=>Array.isArray(a)?a:[a],kh=()=>{let a=[];return{get observers(){return a},next:c=>{for(const d of a)d.next&&d.next(c)},subscribe:c=>(a.push(c),{unsubscribe:()=>{a=a.filter(d=>d!==c)}}),unsubscribe:()=>{a=[]}}},$t=a=>ut(a)&&!Object.keys(a).length,uf=a=>a.type==="file",wn=a=>typeof a=="function",Ys=a=>{if(!rf)return!1;const r=a?a.ownerDocument:0;return a instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Gp=a=>a.type==="select-multiple",cf=a=>a.type==="radio",R3=a=>cf(a)||fr(a),Cc=a=>Ys(a)&&a.isConnected;function C3(a,r){const o=r.slice(0,-1).length;let u=0;for(;u<o;)a=ht(a)?u++:a[r[u++]];return a}function k3(a){for(const r in a)if(a.hasOwnProperty(r)&&!ht(a[r]))return!1;return!0}function dt(a,r){const o=Array.isArray(r)?r:to(r)?[r]:of(r),u=o.length===1?a:C3(a,o),c=o.length-1,d=o[c];return u&&delete u[d],c!==0&&(ut(u)&&$t(u)||Array.isArray(u)&&k3(u))&&dt(a,o.slice(0,-1)),a}var Xp=a=>{for(const r in a)if(wn(a[r]))return!0;return!1};function Gs(a,r={}){const o=Array.isArray(a);if(ut(a)||o)for(const u in a)Array.isArray(a[u])||ut(a[u])&&!Xp(a[u])?(r[u]=Array.isArray(a[u])?[]:{},Gs(a[u],r[u])):Lt(a[u])||(r[u]=!0);return r}function Zp(a,r,o){const u=Array.isArray(a);if(ut(a)||u)for(const c in a)Array.isArray(a[c])||ut(a[c])&&!Xp(a[c])?ht(r)||$c(o[c])?o[c]=Array.isArray(a[c])?Gs(a[c],[]):{...Gs(a[c])}:Zp(a[c],Lt(r)?{}:r[c],o[c]):o[c]=!za(a[c],r[c]);return o}var Fl=(a,r)=>Zp(a,r,Gs(r));const Nh={value:!1,isValid:!1},Mh={value:!0,isValid:!0};var $p=a=>{if(Array.isArray(a)){if(a.length>1){const r=a.filter(o=>o&&o.checked&&!o.disabled).map(o=>o.value);return{value:r,isValid:!!r.length}}return a[0].checked&&!a[0].disabled?a[0].attributes&&!ht(a[0].attributes.value)?ht(a[0].value)||a[0].value===""?Mh:{value:a[0].value,isValid:!0}:Mh:Nh}return Nh},Qp=(a,{valueAsNumber:r,valueAsDate:o,setValueAs:u})=>ht(a)?a:r?a===""?NaN:a&&+a:o&&kn(a)?new Date(a):u?u(a):a;const Uh={isValid:!1,value:null};var Kp=a=>Array.isArray(a)?a.reduce((r,o)=>o&&o.checked&&!o.disabled?{isValid:!0,value:o.value}:r,Uh):Uh;function Bh(a){const r=a.ref;return uf(r)?r.files:cf(r)?Kp(a.refs).value:Gp(r)?[...r.selectedOptions].map(({value:o})=>o):fr(r)?$p(a.refs).value:Qp(ht(r.value)?a.ref.value:r.value,a)}var N3=(a,r,o,u)=>{const c={};for(const d of a){const p=pe(r,d);p&&tt(c,d,p._f)}return{criteriaMode:o,names:[...a],fields:c,shouldUseNativeValidation:u}},Xs=a=>a instanceof RegExp,Wl=a=>ht(a)?a:Xs(a)?a.source:ut(a)?Xs(a.value)?a.value.source:a.value:a,Hh=a=>({isOnSubmit:!a||a===Sn.onSubmit,isOnBlur:a===Sn.onBlur,isOnChange:a===Sn.onChange,isOnAll:a===Sn.all,isOnTouch:a===Sn.onTouched});const Lh="AsyncFunction";var M3=a=>!!a&&!!a.validate&&!!(wn(a.validate)&&a.validate.constructor.name===Lh||ut(a.validate)&&Object.values(a.validate).find(r=>r.constructor.name===Lh)),U3=a=>a.mount&&(a.required||a.min||a.max||a.maxLength||a.minLength||a.pattern||a.validate),qh=(a,r,o)=>!o&&(r.watchAll||r.watch.has(a)||[...r.watch].some(u=>a.startsWith(u)&&/^\.\w+/.test(a.slice(u.length))));const er=(a,r,o,u)=>{for(const c of o||Object.keys(a)){const d=pe(a,c);if(d){const{_f:p,...g}=d;if(p){if(p.refs&&p.refs[0]&&r(p.refs[0],c)&&!u)return!0;if(p.ref&&r(p.ref,p.name)&&!u)return!0;if(er(g,r))break}else if(ut(g)&&er(g,r))break}}};function Vh(a,r,o){const u=pe(a,o);if(u||to(o))return{error:u,name:o};const c=o.split(".");for(;c.length;){const d=c.join("."),p=pe(r,d),g=pe(a,d);if(p&&!Array.isArray(p)&&o!==d)return{name:o};if(g&&g.type)return{name:d,error:g};if(g&&g.root&&g.root.type)return{name:`${d}.root`,error:g.root};c.pop()}return{name:o}}var B3=(a,r,o,u)=>{o(a);const{name:c,...d}=a;return $t(d)||Object.keys(d).length>=Object.keys(r).length||Object.keys(d).find(p=>r[p]===(!u||Sn.all))},H3=(a,r,o)=>!a||!r||a===r||Pl(a).some(u=>u&&(o?u===r:u.startsWith(r)||r.startsWith(u))),L3=(a,r,o,u,c)=>c.isOnAll?!1:!o&&c.isOnTouch?!(r||a):(o?u.isOnBlur:c.isOnBlur)?!a:(o?u.isOnChange:c.isOnChange)?a:!0,q3=(a,r)=>!sf(pe(a,r)).length&&dt(a,r),V3=(a,r,o)=>{const u=Pl(pe(a,o));return tt(u,"root",r[o]),tt(a,o,u),a},Ns=a=>kn(a);function Yh(a,r,o="validate"){if(Ns(a)||Array.isArray(a)&&a.every(Ns)||Rn(a)&&!a)return{type:o,message:Ns(a)?a:"",ref:r}}var Li=a=>ut(a)&&!Xs(a)?a:{value:a,message:""},Gh=async(a,r,o,u,c,d)=>{const{ref:p,refs:g,required:w,maxLength:x,minLength:b,min:A,max:E,pattern:$,validate:M,name:V,valueAsNumber:R,mount:K}=a._f,H=pe(o,V);if(!K||r.has(V))return{};const Q=g?g[0]:p,le=W=>{c&&Q.reportValidity&&(Q.setCustomValidity(Rn(W)?"":W||""),Q.reportValidity())},U={},te=cf(p),ne=fr(p),fe=te||ne,de=(R||uf(p))&&ht(p.value)&&ht(H)||Ys(p)&&p.value===""||H===""||Array.isArray(H)&&!H.length,Te=_3.bind(null,V,u,U),Re=(W,re,be,ge=In.maxLength,O=In.minLength)=>{const Z=W?re:be;U[V]={type:W?ge:O,message:Z,ref:p,...Te(W?ge:O,Z)}};if(d?!Array.isArray(H)||!H.length:w&&(!fe&&(de||Lt(H))||Rn(H)&&!H||ne&&!$p(g).isValid||te&&!Kp(g).isValid)){const{value:W,message:re}=Ns(w)?{value:!!w,message:w}:Li(w);if(W&&(U[V]={type:In.required,message:re,ref:Q,...Te(In.required,re)},!u))return le(re),U}if(!de&&(!Lt(A)||!Lt(E))){let W,re;const be=Li(E),ge=Li(A);if(!Lt(H)&&!isNaN(H)){const O=p.valueAsNumber||H&&+H;Lt(be.value)||(W=O>be.value),Lt(ge.value)||(re=O<ge.value)}else{const O=p.valueAsDate||new Date(H),Z=y=>new Date(new Date().toDateString()+" "+y),ue=p.type=="time",ee=p.type=="week";kn(be.value)&&H&&(W=ue?Z(H)>Z(be.value):ee?H>be.value:O>new Date(be.value)),kn(ge.value)&&H&&(re=ue?Z(H)<Z(ge.value):ee?H<ge.value:O<new Date(ge.value))}if((W||re)&&(Re(!!W,be.message,ge.message,In.max,In.min),!u))return le(U[V].message),U}if((x||b)&&!de&&(kn(H)||d&&Array.isArray(H))){const W=Li(x),re=Li(b),be=!Lt(W.value)&&H.length>+W.value,ge=!Lt(re.value)&&H.length<+re.value;if((be||ge)&&(Re(be,W.message,re.message),!u))return le(U[V].message),U}if($&&!de&&kn(H)){const{value:W,message:re}=Li($);if(Xs(W)&&!H.match(W)&&(U[V]={type:In.pattern,message:re,ref:p,...Te(In.pattern,re)},!u))return le(re),U}if(M){if(wn(M)){const W=await M(H,o),re=Yh(W,Q);if(re&&(U[V]={...re,...Te(In.validate,re.message)},!u))return le(re.message),U}else if(ut(M)){let W={};for(const re in M){if(!$t(W)&&!u)break;const be=Yh(await M[re](H,o),Q,re);be&&(W={...be,...Te(re,be.message)},le(be.message),u&&(U[V]=W))}if(!$t(W)&&(U[V]={ref:Q,...W},!u))return U}}return le(!0),U};const Y3={mode:Sn.onSubmit,reValidateMode:Sn.onChange,shouldFocusError:!0};function G3(a={}){let r={...Y3,...a},o={submitCount:0,isDirty:!1,isReady:!1,isLoading:wn(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},u={},c=ut(r.defaultValues)||ut(r.values)?Et(r.defaultValues||r.values)||{}:{},d=r.shouldUnregister?{}:Et(c),p={action:!1,mount:!1,watch:!1},g={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},w,x=0;const b={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let A={...b};const E={array:kh(),state:kh()},$=r.criteriaMode===Sn.all,M=S=>j=>{clearTimeout(x),x=setTimeout(S,j)},V=async S=>{if(!r.disabled&&(b.isValid||A.isValid||S)){const j=r.resolver?$t((await ne()).errors):await de(u,!0);j!==o.isValid&&E.state.next({isValid:j})}},R=(S,j)=>{!r.disabled&&(b.isValidating||b.validatingFields||A.isValidating||A.validatingFields)&&((S||Array.from(g.mount)).forEach(L=>{L&&(j?tt(o.validatingFields,L,j):dt(o.validatingFields,L))}),E.state.next({validatingFields:o.validatingFields,isValidating:!$t(o.validatingFields)}))},K=(S,j=[],L,ie,ae=!0,I=!0)=>{if(ie&&L&&!r.disabled){if(p.action=!0,I&&Array.isArray(pe(u,S))){const oe=L(pe(u,S),ie.argA,ie.argB);ae&&tt(u,S,oe)}if(I&&Array.isArray(pe(o.errors,S))){const oe=L(pe(o.errors,S),ie.argA,ie.argB);ae&&tt(o.errors,S,oe),q3(o.errors,S)}if((b.touchedFields||A.touchedFields)&&I&&Array.isArray(pe(o.touchedFields,S))){const oe=L(pe(o.touchedFields,S),ie.argA,ie.argB);ae&&tt(o.touchedFields,S,oe)}(b.dirtyFields||A.dirtyFields)&&(o.dirtyFields=Fl(c,d)),E.state.next({name:S,isDirty:Re(S,j),dirtyFields:o.dirtyFields,errors:o.errors,isValid:o.isValid})}else tt(d,S,j)},H=(S,j)=>{tt(o.errors,S,j),E.state.next({errors:o.errors})},Q=S=>{o.errors=S,E.state.next({errors:o.errors,isValid:!1})},le=(S,j,L,ie)=>{const ae=pe(u,S);if(ae){const I=pe(d,S,ht(L)?pe(c,S):L);ht(I)||ie&&ie.defaultChecked||j?tt(d,S,j?I:Bh(ae._f)):be(S,I),p.mount&&V()}},U=(S,j,L,ie,ae)=>{let I=!1,oe=!1;const Ae={name:S};if(!r.disabled){if(!L||ie){(b.isDirty||A.isDirty)&&(oe=o.isDirty,o.isDirty=Ae.isDirty=Re(),I=oe!==Ae.isDirty);const De=za(pe(c,S),j);oe=!!pe(o.dirtyFields,S),De?dt(o.dirtyFields,S):tt(o.dirtyFields,S,!0),Ae.dirtyFields=o.dirtyFields,I=I||(b.dirtyFields||A.dirtyFields)&&oe!==!De}if(L){const De=pe(o.touchedFields,S);De||(tt(o.touchedFields,S,L),Ae.touchedFields=o.touchedFields,I=I||(b.touchedFields||A.touchedFields)&&De!==L)}I&&ae&&E.state.next(Ae)}return I?Ae:{}},te=(S,j,L,ie)=>{const ae=pe(o.errors,S),I=(b.isValid||A.isValid)&&Rn(j)&&o.isValid!==j;if(r.delayError&&L?(w=M(()=>H(S,L)),w(r.delayError)):(clearTimeout(x),w=null,L?tt(o.errors,S,L):dt(o.errors,S)),(L?!za(ae,L):ae)||!$t(ie)||I){const oe={...ie,...I&&Rn(j)?{isValid:j}:{},errors:o.errors,name:S};o={...o,...oe},E.state.next(oe)}},ne=async S=>{R(S,!0);const j=await r.resolver(d,r.context,N3(S||g.mount,u,r.criteriaMode,r.shouldUseNativeValidation));return R(S),j},fe=async S=>{const{errors:j}=await ne(S);if(S)for(const L of S){const ie=pe(j,L);ie?tt(o.errors,L,ie):dt(o.errors,L)}else o.errors=j;return j},de=async(S,j,L={valid:!0})=>{for(const ie in S){const ae=S[ie];if(ae){const{_f:I,...oe}=ae;if(I){const Ae=g.array.has(I.name),De=ae._f&&M3(ae._f);De&&b.validatingFields&&R([ie],!0);const Ze=await Gh(ae,g.disabled,d,$,r.shouldUseNativeValidation&&!j,Ae);if(De&&b.validatingFields&&R([ie]),Ze[I.name]&&(L.valid=!1,j))break;!j&&(pe(Ze,I.name)?Ae?V3(o.errors,Ze,I.name):tt(o.errors,I.name,Ze[I.name]):dt(o.errors,I.name))}!$t(oe)&&await de(oe,j,L)}}return L.valid},Te=()=>{for(const S of g.unMount){const j=pe(u,S);j&&(j._f.refs?j._f.refs.every(L=>!Cc(L)):!Cc(j._f.ref))&&je(S)}g.unMount=new Set},Re=(S,j)=>!r.disabled&&(S&&j&&tt(d,S,j),!za(y(),c)),W=(S,j,L)=>O3(S,g,{...p.mount?d:ht(j)?c:kn(S)?{[S]:j}:j},L,j),re=S=>sf(pe(p.mount?d:c,S,r.shouldUnregister?pe(c,S,[]):[])),be=(S,j,L={})=>{const ie=pe(u,S);let ae=j;if(ie){const I=ie._f;I&&(!I.disabled&&tt(d,S,Qp(j,I)),ae=Ys(I.ref)&&Lt(j)?"":j,Gp(I.ref)?[...I.ref.options].forEach(oe=>oe.selected=ae.includes(oe.value)):I.refs?fr(I.ref)?I.refs.forEach(oe=>{(!oe.defaultChecked||!oe.disabled)&&(Array.isArray(ae)?oe.checked=!!ae.find(Ae=>Ae===oe.value):oe.checked=ae===oe.value||!!ae)}):I.refs.forEach(oe=>oe.checked=oe.value===ae):uf(I.ref)?I.ref.value="":(I.ref.value=ae,I.ref.type||E.state.next({name:S,values:Et(d)})))}(L.shouldDirty||L.shouldTouch)&&U(S,ae,L.shouldTouch,L.shouldDirty,!0),L.shouldValidate&&ee(S)},ge=(S,j,L)=>{for(const ie in j){if(!j.hasOwnProperty(ie))return;const ae=j[ie],I=S+"."+ie,oe=pe(u,I);(g.array.has(S)||ut(ae)||oe&&!oe._f)&&!$a(ae)?ge(I,ae,L):be(I,ae,L)}},O=(S,j,L={})=>{const ie=pe(u,S),ae=g.array.has(S),I=Et(j);tt(d,S,I),ae?(E.array.next({name:S,values:Et(d)}),(b.isDirty||b.dirtyFields||A.isDirty||A.dirtyFields)&&L.shouldDirty&&E.state.next({name:S,dirtyFields:Fl(c,d),isDirty:Re(S,I)})):ie&&!ie._f&&!Lt(I)?ge(S,I,L):be(S,I,L),qh(S,g)&&E.state.next({...o,name:S}),E.state.next({name:p.mount?S:void 0,values:Et(d)})},Z=async S=>{p.mount=!0;const j=S.target;let L=j.name,ie=!0;const ae=pe(u,L),I=De=>{ie=Number.isNaN(De)||$a(De)&&isNaN(De.getTime())||za(De,pe(d,L,De))},oe=Hh(r.mode),Ae=Hh(r.reValidateMode);if(ae){let De,Ze;const qt=j.type?Bh(ae._f):w3(S),Mt=S.type===Ch.BLUR||S.type===Ch.FOCUS_OUT,ja=!U3(ae._f)&&!r.resolver&&!pe(o.errors,L)&&!ae._f.deps||L3(Mt,pe(o.touchedFields,L),o.isSubmitted,Ae,oe),Ut=qh(L,g,Mt);tt(d,L,qt),Mt?(!j||!j.readOnly)&&(ae._f.onBlur&&ae._f.onBlur(S),w&&w(0)):ae._f.onChange&&ae._f.onChange(S);const rt=U(L,qt,Mt),Bt=!$t(rt)||Ut;if(!Mt&&E.state.next({name:L,type:S.type,values:Et(d)}),ja)return(b.isValid||A.isValid)&&(r.mode==="onBlur"?Mt&&V():Mt||V()),Bt&&E.state.next({name:L,...Ut?{}:rt});if(!Mt&&Ut&&E.state.next({...o}),r.resolver){const{errors:Mn}=await ne([L]);if(I(qt),ie){const Un=Vh(o.errors,u,L),ea=Vh(Mn,u,Un.name||L);De=ea.error,L=ea.name,Ze=$t(Mn)}}else R([L],!0),De=(await Gh(ae,g.disabled,d,$,r.shouldUseNativeValidation))[L],R([L]),I(qt),ie&&(De?Ze=!1:(b.isValid||A.isValid)&&(Ze=await de(u,!0)));ie&&(ae._f.deps&&ee(ae._f.deps),te(L,Ze,De,rt))}},ue=(S,j)=>{if(pe(o.errors,j)&&S.focus)return S.focus(),1},ee=async(S,j={})=>{let L,ie;const ae=Pl(S);if(r.resolver){const I=await fe(ht(S)?S:ae);L=$t(I),ie=S?!ae.some(oe=>pe(I,oe)):L}else S?(ie=(await Promise.all(ae.map(async I=>{const oe=pe(u,I);return await de(oe&&oe._f?{[I]:oe}:oe)}))).every(Boolean),!(!ie&&!o.isValid)&&V()):ie=L=await de(u);return E.state.next({...!kn(S)||(b.isValid||A.isValid)&&L!==o.isValid?{}:{name:S},...r.resolver||!S?{isValid:L}:{},errors:o.errors}),j.shouldFocus&&!ie&&er(u,ue,S?ae:g.mount),ie},y=S=>{const j={...p.mount?d:c};return ht(S)?j:kn(S)?pe(j,S):S.map(L=>pe(j,L))},C=(S,j)=>({invalid:!!pe((j||o).errors,S),isDirty:!!pe((j||o).dirtyFields,S),error:pe((j||o).errors,S),isValidating:!!pe(o.validatingFields,S),isTouched:!!pe((j||o).touchedFields,S)}),F=S=>{S&&Pl(S).forEach(j=>dt(o.errors,j)),E.state.next({errors:S?o.errors:{}})},J=(S,j,L)=>{const ie=(pe(u,S,{_f:{}})._f||{}).ref,ae=pe(o.errors,S)||{},{ref:I,message:oe,type:Ae,...De}=ae;tt(o.errors,S,{...De,...j,ref:ie}),E.state.next({name:S,errors:o.errors,isValid:!1}),L&&L.shouldFocus&&ie&&ie.focus&&ie.focus()},ce=(S,j)=>wn(S)?E.state.subscribe({next:L=>"values"in L&&S(W(void 0,j),L)}):W(S,j,!0),Se=S=>E.state.subscribe({next:j=>{H3(S.name,j.name,S.exact)&&B3(j,S.formState||b,nt,S.reRenderRoot)&&S.callback({values:{...d},...o,...j,defaultValues:c})}}).unsubscribe,se=S=>(p.mount=!0,A={...A,...S.formState},Se({...S,formState:A})),je=(S,j={})=>{for(const L of S?Pl(S):g.mount)g.mount.delete(L),g.array.delete(L),j.keepValue||(dt(u,L),dt(d,L)),!j.keepError&&dt(o.errors,L),!j.keepDirty&&dt(o.dirtyFields,L),!j.keepTouched&&dt(o.touchedFields,L),!j.keepIsValidating&&dt(o.validatingFields,L),!r.shouldUnregister&&!j.keepDefaultValue&&dt(c,L);E.state.next({values:Et(d)}),E.state.next({...o,...j.keepDirty?{isDirty:Re()}:{}}),!j.keepIsValid&&V()},xe=({disabled:S,name:j})=>{(Rn(S)&&p.mount||S||g.disabled.has(j))&&(S?g.disabled.add(j):g.disabled.delete(j))},Ve=(S,j={})=>{let L=pe(u,S);const ie=Rn(j.disabled)||Rn(r.disabled);return tt(u,S,{...L||{},_f:{...L&&L._f?L._f:{ref:{name:S}},name:S,mount:!0,...j}}),g.mount.add(S),L?xe({disabled:Rn(j.disabled)?j.disabled:r.disabled,name:S}):le(S,!0,j.value),{...ie?{disabled:j.disabled||r.disabled}:{},...r.progressive?{required:!!j.required,min:Wl(j.min),max:Wl(j.max),minLength:Wl(j.minLength),maxLength:Wl(j.maxLength),pattern:Wl(j.pattern)}:{},name:S,onChange:Z,onBlur:Z,ref:ae=>{if(ae){Ve(S,j),L=pe(u,S);const I=ht(ae.value)&&ae.querySelectorAll&&ae.querySelectorAll("input,select,textarea")[0]||ae,oe=R3(I),Ae=L._f.refs||[];if(oe?Ae.find(De=>De===I):I===L._f.ref)return;tt(u,S,{_f:{...L._f,...oe?{refs:[...Ae.filter(Cc),I,...Array.isArray(pe(c,S))?[{}]:[]],ref:{type:I.type,name:S}}:{ref:I}}}),le(S,!1,void 0,I)}else L=pe(u,S,{}),L._f&&(L._f.mount=!1),(r.shouldUnregister||j.shouldUnregister)&&!(A3(g.array,S)&&p.action)&&g.unMount.add(S)}}},mt=()=>r.shouldFocusError&&er(u,ue,g.mount),Nt=S=>{Rn(S)&&(E.state.next({disabled:S}),er(u,(j,L)=>{const ie=pe(u,L);ie&&(j.disabled=ie._f.disabled||S,Array.isArray(ie._f.refs)&&ie._f.refs.forEach(ae=>{ae.disabled=ie._f.disabled||S}))},0,!1))},Ee=(S,j)=>async L=>{let ie;L&&(L.preventDefault&&L.preventDefault(),L.persist&&L.persist());let ae=Et(d);if(E.state.next({isSubmitting:!0}),r.resolver){const{errors:I,values:oe}=await ne();o.errors=I,ae=Et(oe)}else await de(u);if(g.disabled.size)for(const I of g.disabled)dt(ae,I);if(dt(o.errors,"root"),$t(o.errors)){E.state.next({errors:{}});try{await S(ae,L)}catch(I){ie=I}}else j&&await j({...o.errors},L),mt(),setTimeout(mt);if(E.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:$t(o.errors)&&!ie,submitCount:o.submitCount+1,errors:o.errors}),ie)throw ie},ye=(S,j={})=>{pe(u,S)&&(ht(j.defaultValue)?O(S,Et(pe(c,S))):(O(S,j.defaultValue),tt(c,S,Et(j.defaultValue))),j.keepTouched||dt(o.touchedFields,S),j.keepDirty||(dt(o.dirtyFields,S),o.isDirty=j.defaultValue?Re(S,Et(pe(c,S))):Re()),j.keepError||(dt(o.errors,S),b.isValid&&V()),E.state.next({...o}))},Ye=(S,j={})=>{const L=S?Et(S):c,ie=Et(L),ae=$t(S),I=ae?c:ie;if(j.keepDefaultValues||(c=L),!j.keepValues){if(j.keepDirtyValues){const oe=new Set([...g.mount,...Object.keys(Fl(c,d))]);for(const Ae of Array.from(oe))pe(o.dirtyFields,Ae)?tt(I,Ae,pe(d,Ae)):O(Ae,pe(I,Ae))}else{if(rf&&ht(S))for(const oe of g.mount){const Ae=pe(u,oe);if(Ae&&Ae._f){const De=Array.isArray(Ae._f.refs)?Ae._f.refs[0]:Ae._f.ref;if(Ys(De)){const Ze=De.closest("form");if(Ze){Ze.reset();break}}}}if(j.keepFieldsRef)for(const oe of g.mount)O(oe,pe(I,oe));else u={}}d=r.shouldUnregister?j.keepDefaultValues?Et(c):{}:Et(I),E.array.next({values:{...I}}),E.state.next({values:{...I}})}g={mount:j.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},p.mount=!b.isValid||!!j.keepIsValid||!!j.keepDirtyValues,p.watch=!!r.shouldUnregister,E.state.next({submitCount:j.keepSubmitCount?o.submitCount:0,isDirty:ae?!1:j.keepDirty?o.isDirty:!!(j.keepDefaultValues&&!za(S,c)),isSubmitted:j.keepIsSubmitted?o.isSubmitted:!1,dirtyFields:ae?{}:j.keepDirtyValues?j.keepDefaultValues&&d?Fl(c,d):o.dirtyFields:j.keepDefaultValues&&S?Fl(c,S):j.keepDirty?o.dirtyFields:{},touchedFields:j.keepTouched?o.touchedFields:{},errors:j.keepErrors?o.errors:{},isSubmitSuccessful:j.keepIsSubmitSuccessful?o.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:c})},He=(S,j)=>Ye(wn(S)?S(d):S,j),gt=(S,j={})=>{const L=pe(u,S),ie=L&&L._f;if(ie){const ae=ie.refs?ie.refs[0]:ie.ref;ae.focus&&(ae.focus(),j.shouldSelect&&wn(ae.select)&&ae.select())}},nt=S=>{o={...o,...S}},Wt={control:{register:Ve,unregister:je,getFieldState:C,handleSubmit:Ee,setError:J,_subscribe:Se,_runSchema:ne,_focusError:mt,_getWatch:W,_getDirty:Re,_setValid:V,_setFieldArray:K,_setDisabledField:xe,_setErrors:Q,_getFieldArray:re,_reset:Ye,_resetDefaultValues:()=>wn(r.defaultValues)&&r.defaultValues().then(S=>{He(S,r.resetOptions),E.state.next({isLoading:!1})}),_removeUnmounted:Te,_disableForm:Nt,_subjects:E,_proxyFormState:b,get _fields(){return u},get _formValues(){return d},get _state(){return p},set _state(S){p=S},get _defaultValues(){return c},get _names(){return g},set _names(S){g=S},get _formState(){return o},get _options(){return r},set _options(S){r={...r,...S}}},subscribe:se,trigger:ee,register:Ve,handleSubmit:Ee,watch:ce,setValue:O,getValues:y,reset:He,resetField:ye,clearErrors:F,unregister:je,setError:J,setFocus:gt,getFieldState:C};return{...Wt,formControl:Wt}}function dr(a={}){const r=At.useRef(void 0),o=At.useRef(void 0),[u,c]=At.useState({isDirty:!1,isValidating:!1,isLoading:wn(a.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:a.errors||{},disabled:a.disabled||!1,isReady:!1,defaultValues:wn(a.defaultValues)?void 0:a.defaultValues});if(!r.current)if(a.formControl)r.current={...a.formControl,formState:u},a.defaultValues&&!wn(a.defaultValues)&&a.formControl.reset(a.defaultValues,a.resetOptions);else{const{formControl:p,...g}=G3(a);r.current={...g,formState:u}}const d=r.current.control;return d._options=a,D3(()=>{const p=d._subscribe({formState:d._proxyFormState,callback:()=>c({...d._formState}),reRenderRoot:!0});return c(g=>({...g,isReady:!0})),d._formState.isReady=!0,p},[d]),At.useEffect(()=>d._disableForm(a.disabled),[d,a.disabled]),At.useEffect(()=>{a.mode&&(d._options.mode=a.mode),a.reValidateMode&&(d._options.reValidateMode=a.reValidateMode)},[d,a.mode,a.reValidateMode]),At.useEffect(()=>{a.errors&&(d._setErrors(a.errors),d._focusError())},[d,a.errors]),At.useEffect(()=>{a.shouldUnregister&&d._subjects.state.next({values:d._getWatch()})},[d,a.shouldUnregister]),At.useEffect(()=>{if(d._proxyFormState.isDirty){const p=d._getDirty();p!==u.isDirty&&d._subjects.state.next({isDirty:p})}},[d,u.isDirty]),At.useEffect(()=>{a.values&&!za(a.values,o.current)?(d._reset(a.values,{keepFieldsRef:!0,...d._options.resetOptions}),o.current=a.values,c(p=>({...p}))):d._resetDefaultValues()},[d,a.values]),At.useEffect(()=>{d._state.mount||(d._setValid(),d._state.mount=!0),d._state.watch&&(d._state.watch=!1,d._subjects.state.next({...d._formState})),d._removeUnmounted()}),r.current.formState=j3(u,d),r.current}var Qt=function(){return Qt=Object.assign||function(r){for(var o,u=1,c=arguments.length;u<c;u++){o=arguments[u];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(r[d]=o[d])}return r},Qt.apply(this,arguments)};function ar(a,r,o){if(o||arguments.length===2)for(var u=0,c=r.length,d;u<c;u++)(d||!(u in r))&&(d||(d=Array.prototype.slice.call(r,0,u)),d[u]=r[u]);return a.concat(d||Array.prototype.slice.call(r))}var Pe="-ms-",tr="-moz-",Xe="-webkit-",Jp="comm",no="rule",ff="decl",X3="@import",Fp="@keyframes",Z3="@layer",Wp=Math.abs,df=String.fromCharCode,Qc=Object.assign;function $3(a,r){return zt(a,0)^45?(((r<<2^zt(a,0))<<2^zt(a,1))<<2^zt(a,2))<<2^zt(a,3):0}function Ip(a){return a.trim()}function Pn(a,r){return(a=r.exec(a))?a[0]:a}function Ce(a,r,o){return a.replace(r,o)}function Ms(a,r,o){return a.indexOf(r,o)}function zt(a,r){return a.charCodeAt(r)|0}function Yi(a,r,o){return a.slice(r,o)}function Cn(a){return a.length}function Pp(a){return a.length}function Il(a,r){return r.push(a),a}function Q3(a,r){return a.map(r).join("")}function Xh(a,r){return a.filter(function(o){return!Pn(o,r)})}var ao=1,Gi=1,em=0,xn=0,pt=0,Fi="";function io(a,r,o,u,c,d,p,g){return{value:a,root:r,parent:o,type:u,props:c,children:d,line:ao,column:Gi,length:p,return:"",siblings:g}}function Aa(a,r){return Qc(io("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},r)}function qi(a){for(;a.root;)a=Aa(a.root,{children:[a]});Il(a,a.siblings)}function K3(){return pt}function J3(){return pt=xn>0?zt(Fi,--xn):0,Gi--,pt===10&&(Gi=1,ao--),pt}function En(){return pt=xn<em?zt(Fi,xn++):0,Gi++,pt===10&&(Gi=1,ao++),pt}function Ja(){return zt(Fi,xn)}function Us(){return xn}function lo(a,r){return Yi(Fi,a,r)}function Kc(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F3(a){return ao=Gi=1,em=Cn(Fi=a),xn=0,[]}function W3(a){return Fi="",a}function kc(a){return Ip(lo(xn-1,Jc(a===91?a+2:a===40?a+1:a)))}function I3(a){for(;(pt=Ja())&&pt<33;)En();return Kc(a)>2||Kc(pt)>3?"":" "}function P3(a,r){for(;--r&&En()&&!(pt<48||pt>102||pt>57&&pt<65||pt>70&&pt<97););return lo(a,Us()+(r<6&&Ja()==32&&En()==32))}function Jc(a){for(;En();)switch(pt){case a:return xn;case 34:case 39:a!==34&&a!==39&&Jc(pt);break;case 40:a===41&&Jc(a);break;case 92:En();break}return xn}function e5(a,r){for(;En()&&a+pt!==57;)if(a+pt===84&&Ja()===47)break;return"/*"+lo(r,xn-1)+"*"+df(a===47?a:En())}function t5(a){for(;!Kc(Ja());)En();return lo(a,xn)}function n5(a){return W3(Bs("",null,null,null,[""],a=F3(a),0,[0],a))}function Bs(a,r,o,u,c,d,p,g,w){for(var x=0,b=0,A=p,E=0,$=0,M=0,V=1,R=1,K=1,H=0,Q="",le=c,U=d,te=u,ne=Q;R;)switch(M=H,H=En()){case 40:if(M!=108&&zt(ne,A-1)==58){Ms(ne+=Ce(kc(H),"&","&\f"),"&\f",Wp(x?g[x-1]:0))!=-1&&(K=-1);break}case 34:case 39:case 91:ne+=kc(H);break;case 9:case 10:case 13:case 32:ne+=I3(M);break;case 92:ne+=P3(Us()-1,7);continue;case 47:switch(Ja()){case 42:case 47:Il(a5(e5(En(),Us()),r,o,w),w);break;default:ne+="/"}break;case 123*V:g[x++]=Cn(ne)*K;case 125*V:case 59:case 0:switch(H){case 0:case 125:R=0;case 59+b:K==-1&&(ne=Ce(ne,/\f/g,"")),$>0&&Cn(ne)-A&&Il($>32?$h(ne+";",u,o,A-1,w):$h(Ce(ne," ","")+";",u,o,A-2,w),w);break;case 59:ne+=";";default:if(Il(te=Zh(ne,r,o,x,b,c,g,Q,le=[],U=[],A,d),d),H===123)if(b===0)Bs(ne,r,te,te,le,d,A,g,U);else switch(E===99&&zt(ne,3)===110?100:E){case 100:case 108:case 109:case 115:Bs(a,te,te,u&&Il(Zh(a,te,te,0,0,c,g,Q,c,le=[],A,U),U),c,U,A,g,u?le:U);break;default:Bs(ne,te,te,te,[""],U,0,g,U)}}x=b=$=0,V=K=1,Q=ne="",A=p;break;case 58:A=1+Cn(ne),$=M;default:if(V<1){if(H==123)--V;else if(H==125&&V++==0&&J3()==125)continue}switch(ne+=df(H),H*V){case 38:K=b>0?1:(ne+="\f",-1);break;case 44:g[x++]=(Cn(ne)-1)*K,K=1;break;case 64:Ja()===45&&(ne+=kc(En())),E=Ja(),b=A=Cn(Q=ne+=t5(Us())),H++;break;case 45:M===45&&Cn(ne)==2&&(V=0)}}return d}function Zh(a,r,o,u,c,d,p,g,w,x,b,A){for(var E=c-1,$=c===0?d:[""],M=Pp($),V=0,R=0,K=0;V<u;++V)for(var H=0,Q=Yi(a,E+1,E=Wp(R=p[V])),le=a;H<M;++H)(le=Ip(R>0?$[H]+" "+Q:Ce(Q,/&\f/g,$[H])))&&(w[K++]=le);return io(a,r,o,c===0?no:g,w,x,b,A)}function a5(a,r,o,u){return io(a,r,o,Jp,df(K3()),Yi(a,2,-2),0,u)}function $h(a,r,o,u,c){return io(a,r,o,ff,Yi(a,0,u),Yi(a,u+1,-1),u,c)}function tm(a,r,o){switch($3(a,r)){case 5103:return Xe+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Xe+a+a;case 4789:return tr+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Xe+a+tr+a+Pe+a+a;case 5936:switch(zt(a,r+11)){case 114:return Xe+a+Pe+Ce(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Xe+a+Pe+Ce(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Xe+a+Pe+Ce(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Xe+a+Pe+a+a;case 6165:return Xe+a+Pe+"flex-"+a+a;case 5187:return Xe+a+Ce(a,/(\w+).+(:[^]+)/,Xe+"box-$1$2"+Pe+"flex-$1$2")+a;case 5443:return Xe+a+Pe+"flex-item-"+Ce(a,/flex-|-self/g,"")+(Pn(a,/flex-|baseline/)?"":Pe+"grid-row-"+Ce(a,/flex-|-self/g,""))+a;case 4675:return Xe+a+Pe+"flex-line-pack"+Ce(a,/align-content|flex-|-self/g,"")+a;case 5548:return Xe+a+Pe+Ce(a,"shrink","negative")+a;case 5292:return Xe+a+Pe+Ce(a,"basis","preferred-size")+a;case 6060:return Xe+"box-"+Ce(a,"-grow","")+Xe+a+Pe+Ce(a,"grow","positive")+a;case 4554:return Xe+Ce(a,/([^-])(transform)/g,"$1"+Xe+"$2")+a;case 6187:return Ce(Ce(Ce(a,/(zoom-|grab)/,Xe+"$1"),/(image-set)/,Xe+"$1"),a,"")+a;case 5495:case 3959:return Ce(a,/(image-set\([^]*)/,Xe+"$1$`$1");case 4968:return Ce(Ce(a,/(.+:)(flex-)?(.*)/,Xe+"box-pack:$3"+Pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Xe+a+a;case 4200:if(!Pn(a,/flex-|baseline/))return Pe+"grid-column-align"+Yi(a,r)+a;break;case 2592:case 3360:return Pe+Ce(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(u,c){return r=c,Pn(u.props,/grid-\w+-end/)})?~Ms(a+(o=o[r].value),"span",0)?a:Pe+Ce(a,"-start","")+a+Pe+"grid-row-span:"+(~Ms(o,"span",0)?Pn(o,/\d+/):+Pn(o,/\d+/)-+Pn(a,/\d+/))+";":Pe+Ce(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(u){return Pn(u.props,/grid-\w+-start/)})?a:Pe+Ce(Ce(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return Ce(a,/(.+)-inline(.+)/,Xe+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Cn(a)-1-r>6)switch(zt(a,r+1)){case 109:if(zt(a,r+4)!==45)break;case 102:return Ce(a,/(.+:)(.+)-([^]+)/,"$1"+Xe+"$2-$3$1"+tr+(zt(a,r+3)==108?"$3":"$2-$3"))+a;case 115:return~Ms(a,"stretch",0)?tm(Ce(a,"stretch","fill-available"),r,o)+a:a}break;case 5152:case 5920:return Ce(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,c,d,p,g,w,x){return Pe+c+":"+d+x+(p?Pe+c+"-span:"+(g?w:+w-+d)+x:"")+a});case 4949:if(zt(a,r+6)===121)return Ce(a,":",":"+Xe)+a;break;case 6444:switch(zt(a,zt(a,14)===45?18:11)){case 120:return Ce(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Xe+(zt(a,14)===45?"inline-":"")+"box$3$1"+Xe+"$2$3$1"+Pe+"$2box$3")+a;case 100:return Ce(a,":",":"+Pe)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ce(a,"scroll-","scroll-snap-")+a}return a}function Zs(a,r){for(var o="",u=0;u<a.length;u++)o+=r(a[u],u,a,r)||"";return o}function i5(a,r,o,u){switch(a.type){case Z3:if(a.children.length)break;case X3:case ff:return a.return=a.return||a.value;case Jp:return"";case Fp:return a.return=a.value+"{"+Zs(a.children,u)+"}";case no:if(!Cn(a.value=a.props.join(",")))return""}return Cn(o=Zs(a.children,u))?a.return=a.value+"{"+o+"}":""}function l5(a){var r=Pp(a);return function(o,u,c,d){for(var p="",g=0;g<r;g++)p+=a[g](o,u,c,d)||"";return p}}function r5(a){return function(r){r.root||(r=r.return)&&a(r)}}function s5(a,r,o,u){if(a.length>-1&&!a.return)switch(a.type){case ff:a.return=tm(a.value,a.length,o);return;case Fp:return Zs([Aa(a,{value:Ce(a.value,"@","@"+Xe)})],u);case no:if(a.length)return Q3(o=a.props,function(c){switch(Pn(c,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qi(Aa(a,{props:[Ce(c,/:(read-\w+)/,":"+tr+"$1")]})),qi(Aa(a,{props:[c]})),Qc(a,{props:Xh(o,u)});break;case"::placeholder":qi(Aa(a,{props:[Ce(c,/:(plac\w+)/,":"+Xe+"input-$1")]})),qi(Aa(a,{props:[Ce(c,/:(plac\w+)/,":"+tr+"$1")]})),qi(Aa(a,{props:[Ce(c,/:(plac\w+)/,Pe+"input-$1")]})),qi(Aa(a,{props:[c]})),Qc(a,{props:Xh(o,u)});break}return""})}}var o5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},rn={},Xi=typeof process<"u"&&rn!==void 0&&(rn.REACT_APP_SC_ATTR||rn.SC_ATTR)||"data-styled",nm="active",am="data-styled-version",ro="6.1.19",hf=`/*!sc*/
`,$s=typeof window<"u"&&typeof document<"u",u5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&rn!==void 0&&rn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&rn.REACT_APP_SC_DISABLE_SPEEDY!==""?rn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&rn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&rn!==void 0&&rn.SC_DISABLE_SPEEDY!==void 0&&rn.SC_DISABLE_SPEEDY!==""&&rn.SC_DISABLE_SPEEDY!=="false"&&rn.SC_DISABLE_SPEEDY),so=Object.freeze([]),Zi=Object.freeze({});function c5(a,r,o){return o===void 0&&(o=Zi),a.theme!==o.theme&&a.theme||r||o.theme}var im=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),f5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,d5=/(^-|-$)/g;function Qh(a){return a.replace(f5,"-").replace(d5,"")}var h5=/(a)(d)/gi,Os=52,Kh=function(a){return String.fromCharCode(a+(a>25?39:97))};function Fc(a){var r,o="";for(r=Math.abs(a);r>Os;r=r/Os|0)o=Kh(r%Os)+o;return(Kh(r%Os)+o).replace(h5,"$1-$2")}var Nc,lm=5381,Vi=function(a,r){for(var o=r.length;o;)a=33*a^r.charCodeAt(--o);return a},rm=function(a){return Vi(lm,a)};function sm(a){return Fc(rm(a)>>>0)}function p5(a){return a.displayName||a.name||"Component"}function Mc(a){return typeof a=="string"&&!0}var om=typeof Symbol=="function"&&Symbol.for,um=om?Symbol.for("react.memo"):60115,m5=om?Symbol.for("react.forward_ref"):60112,g5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},x5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},y5=((Nc={})[m5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nc[um]=cm,Nc);function Jh(a){return("type"in(r=a)&&r.type.$$typeof)===um?cm:"$$typeof"in a?y5[a.$$typeof]:g5;var r}var v5=Object.defineProperty,b5=Object.getOwnPropertyNames,Fh=Object.getOwnPropertySymbols,S5=Object.getOwnPropertyDescriptor,w5=Object.getPrototypeOf,Wh=Object.prototype;function fm(a,r,o){if(typeof r!="string"){if(Wh){var u=w5(r);u&&u!==Wh&&fm(a,u,o)}var c=b5(r);Fh&&(c=c.concat(Fh(r)));for(var d=Jh(a),p=Jh(r),g=0;g<c.length;++g){var w=c[g];if(!(w in x5||o&&o[w]||p&&w in p||d&&w in d)){var x=S5(r,w);try{v5(a,w,x)}catch{}}}}return a}function $i(a){return typeof a=="function"}function pf(a){return typeof a=="object"&&"styledComponentId"in a}function Qa(a,r){return a&&r?"".concat(a," ").concat(r):a||r||""}function Wc(a,r){if(a.length===0)return"";for(var o=a[0],u=1;u<a.length;u++)o+=a[u];return o}function ir(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Ic(a,r,o){if(o===void 0&&(o=!1),!o&&!ir(a)&&!Array.isArray(a))return r;if(Array.isArray(r))for(var u=0;u<r.length;u++)a[u]=Ic(a[u],r[u]);else if(ir(r))for(var u in r)a[u]=Ic(a[u],r[u]);return a}function mf(a,r){Object.defineProperty(a,"toString",{value:r})}function hr(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var E5=function(){function a(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return a.prototype.indexOfGroup=function(r){for(var o=0,u=0;u<r;u++)o+=this.groupSizes[u];return o},a.prototype.insertRules=function(r,o){if(r>=this.groupSizes.length){for(var u=this.groupSizes,c=u.length,d=c;r>=d;)if((d<<=1)<0)throw hr(16,"".concat(r));this.groupSizes=new Uint32Array(d),this.groupSizes.set(u),this.length=d;for(var p=c;p<d;p++)this.groupSizes[p]=0}for(var g=this.indexOfGroup(r+1),w=(p=0,o.length);p<w;p++)this.tag.insertRule(g,o[p])&&(this.groupSizes[r]++,g++)},a.prototype.clearGroup=function(r){if(r<this.length){var o=this.groupSizes[r],u=this.indexOfGroup(r),c=u+o;this.groupSizes[r]=0;for(var d=u;d<c;d++)this.tag.deleteRule(u)}},a.prototype.getGroup=function(r){var o="";if(r>=this.length||this.groupSizes[r]===0)return o;for(var u=this.groupSizes[r],c=this.indexOfGroup(r),d=c+u,p=c;p<d;p++)o+="".concat(this.tag.getRule(p)).concat(hf);return o},a}(),Hs=new Map,Qs=new Map,Ls=1,_s=function(a){if(Hs.has(a))return Hs.get(a);for(;Qs.has(Ls);)Ls++;var r=Ls++;return Hs.set(a,r),Qs.set(r,a),r},A5=function(a,r){Ls=r+1,Hs.set(a,r),Qs.set(r,a)},z5="style[".concat(Xi,"][").concat(am,'="').concat(ro,'"]'),T5=new RegExp("^".concat(Xi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),j5=function(a,r,o){for(var u,c=o.split(","),d=0,p=c.length;d<p;d++)(u=c[d])&&a.registerName(r,u)},D5=function(a,r){for(var o,u=((o=r.textContent)!==null&&o!==void 0?o:"").split(hf),c=[],d=0,p=u.length;d<p;d++){var g=u[d].trim();if(g){var w=g.match(T5);if(w){var x=0|parseInt(w[1],10),b=w[2];x!==0&&(A5(b,x),j5(a,b,w[3]),a.getTag().insertRules(x,c)),c.length=0}else c.push(g)}}},Ih=function(a){for(var r=document.querySelectorAll(z5),o=0,u=r.length;o<u;o++){var c=r[o];c&&c.getAttribute(Xi)!==nm&&(D5(a,c),c.parentNode&&c.parentNode.removeChild(c))}};function O5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var dm=function(a){var r=document.head,o=a||r,u=document.createElement("style"),c=function(g){var w=Array.from(g.querySelectorAll("style[".concat(Xi,"]")));return w[w.length-1]}(o),d=c!==void 0?c.nextSibling:null;u.setAttribute(Xi,nm),u.setAttribute(am,ro);var p=O5();return p&&u.setAttribute("nonce",p),o.insertBefore(u,d),u},_5=function(){function a(r){this.element=dm(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var u=document.styleSheets,c=0,d=u.length;c<d;c++){var p=u[c];if(p.ownerNode===o)return p}throw hr(17)}(this.element),this.length=0}return a.prototype.insertRule=function(r,o){try{return this.sheet.insertRule(o,r),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},a.prototype.getRule=function(r){var o=this.sheet.cssRules[r];return o&&o.cssText?o.cssText:""},a}(),R5=function(){function a(r){this.element=dm(r),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(r,o){if(r<=this.length&&r>=0){var u=document.createTextNode(o);return this.element.insertBefore(u,this.nodes[r]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},a.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},a}(),C5=function(){function a(r){this.rules=[],this.length=0}return a.prototype.insertRule=function(r,o){return r<=this.length&&(this.rules.splice(r,0,o),this.length++,!0)},a.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},a.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},a}(),Ph=$s,k5={isServer:!$s,useCSSOMInjection:!u5},hm=function(){function a(r,o,u){r===void 0&&(r=Zi),o===void 0&&(o={});var c=this;this.options=Qt(Qt({},k5),r),this.gs=o,this.names=new Map(u),this.server=!!r.isServer,!this.server&&$s&&Ph&&(Ph=!1,Ih(this)),mf(this,function(){return function(d){for(var p=d.getTag(),g=p.length,w="",x=function(A){var E=function(K){return Qs.get(K)}(A);if(E===void 0)return"continue";var $=d.names.get(E),M=p.getGroup(A);if($===void 0||!$.size||M.length===0)return"continue";var V="".concat(Xi,".g").concat(A,'[id="').concat(E,'"]'),R="";$!==void 0&&$.forEach(function(K){K.length>0&&(R+="".concat(K,","))}),w+="".concat(M).concat(V,'{content:"').concat(R,'"}').concat(hf)},b=0;b<g;b++)x(b);return w}(c)})}return a.registerId=function(r){return _s(r)},a.prototype.rehydrate=function(){!this.server&&$s&&Ih(this)},a.prototype.reconstructWithOptions=function(r,o){return o===void 0&&(o=!0),new a(Qt(Qt({},this.options),r),this.gs,o&&this.names||void 0)},a.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(r=function(o){var u=o.useCSSOMInjection,c=o.target;return o.isServer?new C5(c):u?new _5(c):new R5(c)}(this.options),new E5(r)));var r},a.prototype.hasNameForId=function(r,o){return this.names.has(r)&&this.names.get(r).has(o)},a.prototype.registerName=function(r,o){if(_s(r),this.names.has(r))this.names.get(r).add(o);else{var u=new Set;u.add(o),this.names.set(r,u)}},a.prototype.insertRules=function(r,o,u){this.registerName(r,o),this.getTag().insertRules(_s(r),u)},a.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},a.prototype.clearRules=function(r){this.getTag().clearGroup(_s(r)),this.clearNames(r)},a.prototype.clearTag=function(){this.tag=void 0},a}(),N5=/&/g,M5=/^\s*\/\/.*$/gm;function pm(a,r){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(r," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(r," ")),o.props=o.props.map(function(u){return"".concat(r," ").concat(u)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=pm(o.children,r)),o})}function U5(a){var r,o,u,c=Zi,d=c.options,p=d===void 0?Zi:d,g=c.plugins,w=g===void 0?so:g,x=function(E,$,M){return M.startsWith(o)&&M.endsWith(o)&&M.replaceAll(o,"").length>0?".".concat(r):E},b=w.slice();b.push(function(E){E.type===no&&E.value.includes("&")&&(E.props[0]=E.props[0].replace(N5,o).replace(u,x))}),p.prefix&&b.push(s5),b.push(i5);var A=function(E,$,M,V){$===void 0&&($=""),M===void 0&&(M=""),V===void 0&&(V="&"),r=V,o=$,u=new RegExp("\\".concat(o,"\\b"),"g");var R=E.replace(M5,""),K=n5(M||$?"".concat(M," ").concat($," { ").concat(R," }"):R);p.namespace&&(K=pm(K,p.namespace));var H=[];return Zs(K,l5(b.concat(r5(function(Q){return H.push(Q)})))),H};return A.hash=w.length?w.reduce(function(E,$){return $.name||hr(15),Vi(E,$.name)},lm).toString():"",A}var B5=new hm,Pc=U5(),mm=At.createContext({shouldForwardProp:void 0,styleSheet:B5,stylis:Pc});mm.Consumer;At.createContext(void 0);function ep(){return G.useContext(mm)}var gm=function(){function a(r,o){var u=this;this.inject=function(c,d){d===void 0&&(d=Pc);var p=u.name+d.hash;c.hasNameForId(u.id,p)||c.insertRules(u.id,p,d(u.rules,p,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=o,mf(this,function(){throw hr(12,String(u.name))})}return a.prototype.getName=function(r){return r===void 0&&(r=Pc),this.name+r.hash},a}(),H5=function(a){return a>="A"&&a<="Z"};function tp(a){for(var r="",o=0;o<a.length;o++){var u=a[o];if(o===1&&u==="-"&&a[0]==="-")return a;H5(u)?r+="-"+u.toLowerCase():r+=u}return r.startsWith("ms-")?"-"+r:r}var xm=function(a){return a==null||a===!1||a===""},ym=function(a){var r,o,u=[];for(var c in a){var d=a[c];a.hasOwnProperty(c)&&!xm(d)&&(Array.isArray(d)&&d.isCss||$i(d)?u.push("".concat(tp(c),":"),d,";"):ir(d)?u.push.apply(u,ar(ar(["".concat(c," {")],ym(d),!1),["}"],!1)):u.push("".concat(tp(c),": ").concat((r=c,(o=d)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||r in o5||r.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return u};function Fa(a,r,o,u){if(xm(a))return[];if(pf(a))return[".".concat(a.styledComponentId)];if($i(a)){if(!$i(d=a)||d.prototype&&d.prototype.isReactComponent||!r)return[a];var c=a(r);return Fa(c,r,o,u)}var d;return a instanceof gm?o?(a.inject(o,u),[a.getName(u)]):[a]:ir(a)?ym(a):Array.isArray(a)?Array.prototype.concat.apply(so,a.map(function(p){return Fa(p,r,o,u)})):[a.toString()]}function L5(a){for(var r=0;r<a.length;r+=1){var o=a[r];if($i(o)&&!pf(o))return!1}return!0}var q5=rm(ro),V5=function(){function a(r,o,u){this.rules=r,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&L5(r),this.componentId=o,this.baseHash=Vi(q5,o),this.baseStyle=u,hm.registerId(o)}return a.prototype.generateAndInjectStyles=function(r,o,u){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,o,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))c=Qa(c,this.staticRulesId);else{var d=Wc(Fa(this.rules,r,o,u)),p=Fc(Vi(this.baseHash,d)>>>0);if(!o.hasNameForId(this.componentId,p)){var g=u(d,".".concat(p),void 0,this.componentId);o.insertRules(this.componentId,p,g)}c=Qa(c,p),this.staticRulesId=p}else{for(var w=Vi(this.baseHash,u.hash),x="",b=0;b<this.rules.length;b++){var A=this.rules[b];if(typeof A=="string")x+=A;else if(A){var E=Wc(Fa(A,r,o,u));w=Vi(w,E+b),x+=E}}if(x){var $=Fc(w>>>0);o.hasNameForId(this.componentId,$)||o.insertRules(this.componentId,$,u(x,".".concat($),void 0,this.componentId)),c=Qa(c,$)}}return c},a}(),vm=At.createContext(void 0);vm.Consumer;var Uc={};function Y5(a,r,o){var u=pf(a),c=a,d=!Mc(a),p=r.attrs,g=p===void 0?so:p,w=r.componentId,x=w===void 0?function(le,U){var te=typeof le!="string"?"sc":Qh(le);Uc[te]=(Uc[te]||0)+1;var ne="".concat(te,"-").concat(sm(ro+te+Uc[te]));return U?"".concat(U,"-").concat(ne):ne}(r.displayName,r.parentComponentId):w,b=r.displayName,A=b===void 0?function(le){return Mc(le)?"styled.".concat(le):"Styled(".concat(p5(le),")")}(a):b,E=r.displayName&&r.componentId?"".concat(Qh(r.displayName),"-").concat(r.componentId):r.componentId||x,$=u&&c.attrs?c.attrs.concat(g).filter(Boolean):g,M=r.shouldForwardProp;if(u&&c.shouldForwardProp){var V=c.shouldForwardProp;if(r.shouldForwardProp){var R=r.shouldForwardProp;M=function(le,U){return V(le,U)&&R(le,U)}}else M=V}var K=new V5(o,E,u?c.componentStyle:void 0);function H(le,U){return function(te,ne,fe){var de=te.attrs,Te=te.componentStyle,Re=te.defaultProps,W=te.foldedComponentIds,re=te.styledComponentId,be=te.target,ge=At.useContext(vm),O=ep(),Z=te.shouldForwardProp||O.shouldForwardProp,ue=c5(ne,ge,Re)||Zi,ee=function(Se,se,je){for(var xe,Ve=Qt(Qt({},se),{className:void 0,theme:je}),mt=0;mt<Se.length;mt+=1){var Nt=$i(xe=Se[mt])?xe(Ve):xe;for(var Ee in Nt)Ve[Ee]=Ee==="className"?Qa(Ve[Ee],Nt[Ee]):Ee==="style"?Qt(Qt({},Ve[Ee]),Nt[Ee]):Nt[Ee]}return se.className&&(Ve.className=Qa(Ve.className,se.className)),Ve}(de,ne,ue),y=ee.as||be,C={};for(var F in ee)ee[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&ee.theme===ue||(F==="forwardedAs"?C.as=ee.forwardedAs:Z&&!Z(F,y)||(C[F]=ee[F]));var J=function(Se,se){var je=ep(),xe=Se.generateAndInjectStyles(se,je.styleSheet,je.stylis);return xe}(Te,ee),ce=Qa(W,re);return J&&(ce+=" "+J),ee.className&&(ce+=" "+ee.className),C[Mc(y)&&!im.has(y)?"class":"className"]=ce,fe&&(C.ref=fe),G.createElement(y,C)}(Q,le,U)}H.displayName=A;var Q=At.forwardRef(H);return Q.attrs=$,Q.componentStyle=K,Q.displayName=A,Q.shouldForwardProp=M,Q.foldedComponentIds=u?Qa(c.foldedComponentIds,c.styledComponentId):"",Q.styledComponentId=E,Q.target=u?c.target:a,Object.defineProperty(Q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(le){this._foldedDefaultProps=u?function(U){for(var te=[],ne=1;ne<arguments.length;ne++)te[ne-1]=arguments[ne];for(var fe=0,de=te;fe<de.length;fe++)Ic(U,de[fe],!0);return U}({},c.defaultProps,le):le}}),mf(Q,function(){return".".concat(Q.styledComponentId)}),d&&fm(Q,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Q}function np(a,r){for(var o=[a[0]],u=0,c=r.length;u<c;u+=1)o.push(r[u],a[u+1]);return o}var ap=function(a){return Object.assign(a,{isCss:!0})};function bm(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];if($i(a)||ir(a))return ap(Fa(np(so,ar([a],r,!0))));var u=a;return r.length===0&&u.length===1&&typeof u[0]=="string"?Fa(u):ap(Fa(np(u,r)))}function ef(a,r,o){if(o===void 0&&(o=Zi),!r)throw hr(1,r);var u=function(c){for(var d=[],p=1;p<arguments.length;p++)d[p-1]=arguments[p];return a(r,o,bm.apply(void 0,ar([c],d,!1)))};return u.attrs=function(c){return ef(a,r,Qt(Qt({},o),{attrs:Array.prototype.concat(o.attrs,c).filter(Boolean)}))},u.withConfig=function(c){return ef(a,r,Qt(Qt({},o),c))},u}var Sm=function(a){return ef(Y5,a)},P=Sm;im.forEach(function(a){P[a]=Sm(a)});function Ft(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];var u=Wc(bm.apply(void 0,ar([a],r,!1))),c=sm(u);return new gm(c,u)}var Bc,ip;function G5(){if(ip)return Bc;ip=1;var a="Expected a function",r=NaN,o="[object Symbol]",u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,p=/^0o[0-7]+$/i,g=parseInt,w=typeof Ds=="object"&&Ds&&Ds.Object===Object&&Ds,x=typeof self=="object"&&self&&self.Object===Object&&self,b=w||x||Function("return this")(),A=Object.prototype,E=A.toString,$=Math.max,M=Math.min,V=function(){return b.Date.now()};function R(U,te,ne){var fe,de,Te,Re,W,re,be=0,ge=!1,O=!1,Z=!0;if(typeof U!="function")throw new TypeError(a);te=le(te)||0,K(ne)&&(ge=!!ne.leading,O="maxWait"in ne,Te=O?$(le(ne.maxWait)||0,te):Te,Z="trailing"in ne?!!ne.trailing:Z);function ue(je){var xe=fe,Ve=de;return fe=de=void 0,be=je,Re=U.apply(Ve,xe),Re}function ee(je){return be=je,W=setTimeout(F,te),ge?ue(je):Re}function y(je){var xe=je-re,Ve=je-be,mt=te-xe;return O?M(mt,Te-Ve):mt}function C(je){var xe=je-re,Ve=je-be;return re===void 0||xe>=te||xe<0||O&&Ve>=Te}function F(){var je=V();if(C(je))return J(je);W=setTimeout(F,y(je))}function J(je){return W=void 0,Z&&fe?ue(je):(fe=de=void 0,Re)}function ce(){W!==void 0&&clearTimeout(W),be=0,fe=re=de=W=void 0}function Se(){return W===void 0?Re:J(V())}function se(){var je=V(),xe=C(je);if(fe=arguments,de=this,re=je,xe){if(W===void 0)return ee(re);if(O)return W=setTimeout(F,te),ue(re)}return W===void 0&&(W=setTimeout(F,te)),Re}return se.cancel=ce,se.flush=Se,se}function K(U){var te=typeof U;return!!U&&(te=="object"||te=="function")}function H(U){return!!U&&typeof U=="object"}function Q(U){return typeof U=="symbol"||H(U)&&E.call(U)==o}function le(U){if(typeof U=="number")return U;if(Q(U))return r;if(K(U)){var te=typeof U.valueOf=="function"?U.valueOf():U;U=K(te)?te+"":te}if(typeof U!="string")return U===0?U:+U;U=U.replace(u,"");var ne=d.test(U);return ne||p.test(U)?g(U.slice(2),ne?2:8):c.test(U)?r:+U}return Bc=R,Bc}G5();var X5=typeof window<"u"?G.useLayoutEffect:G.useEffect;function Z5(a,r,o,u){const c=G.useRef(r);X5(()=>{c.current=r},[r]),G.useEffect(()=>{const d=window;if(!(d&&d.addEventListener))return;const p=g=>{c.current(g)};return d.addEventListener(a,p,u),()=>{d.removeEventListener(a,p,u)}},[a,o,u])}function Wi(a,r,o="mousedown",u={}){Z5(o,c=>{const d=c.target;if(!d||!d.isConnected)return;(Array.isArray(a)?a.filter(g=>!!g.current).every(g=>g.current&&!g.current.contains(d)):a.current&&!a.current.contains(d))&&r(c)},void 0,u)}const lr=P.button`
  cursor: pointer;
  position: absolute;
  top: 13px;
  right: 13px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }

  span {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1;
  }

  @media (max-width: 768px) {
    top: 12px;
    right: 12px;
    width: 28px;
    height: 28px;

    span {
      font-size: 16px;
    }
  }
`,Qi=P.div`
  display: flex;
  flex-direction: column;
  padding: 40px 32px 24px 32px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 32px 24px 20px 24px;
  }
`;P.img`
  height: 60px;
  max-width: 200px;
  margin: 0 auto 24px;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
`;const Ia=P.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${a=>a.mainColor||"#333"};
  margin: 0 0 16px 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`,pr=P.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 32px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`,Ta=P.input`
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  font-size: 16px;
  background: #f8f9fa;
  transition: all 0.3s ease;
  margin-bottom: 16px;
  box-sizing: border-box;

  &::placeholder {
    color: #9ca3af;
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border-color: ${a=>a.mainColor||"#e7333c"};
    background: white;
    box-shadow: 0 0 0 3px
      ${a=>a.mainColor?`${a.mainColor}20`:"rgba(231, 51, 60, 0.1)"};
  }

  &:hover {
    border-color: #d1d5db;
    background: white;
  }

  @media (max-width: 768px) {
    padding: 14px 16px;
    font-size: 16px;
  }
`,Tt=P.div`
  color: #e40000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`,oo=P.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 20px 0;
  text-align: left;
`,uo=P.input`
  width: 20px;
  height: 20px;
  min-width: 20px;
  margin: 0;
  cursor: pointer;
  accent-color: ${a=>a.mainColor||"#e7333c"};

  &:focus {
    outline: 2px solid
      ${a=>a.mainColor?`${a.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
    outline-offset: 2px;
  }
`,rr=P.button`
  width: 100%;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(
    135deg,
    ${a=>a.mainColor||"#e7333c"},
    ${a=>a.mainColor?`${a.mainColor}dd`:"#d12b35"}
  );
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px
      ${a=>a.mainColor?`${a.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 14px 20px;
    font-size: 15px;
  }
`,mr=P.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ffffff80;
  z-index: 1;
`,co=P.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 32px 20px 32px;
  padding-top: 16px;
  font-size: 12px;
  gap: 6px;
  font-weight: 500;
  color: #666;
  text-decoration: none;
  border-top: 1px solid #e1e5e9;

  &:hover {
    color: #333;
  }

  svg {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    margin: 20px 24px 16px 24px;
    padding-top: 14px;
  }
`,wm=P.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`,gf=P.h1`
  font-size: 16px;
  font-weight: 600;
  color: ${a=>a.mainColor||"#333"};
  margin: 10px;
`,xf=P.p`
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  color: ${a=>a.mainColor||"#666"};
  width: 100%;
  margin: 3% auto 5%;
`,$5=Ft`   
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`,Q5=P.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${$5} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  & div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #000;
    margin: -4px 0 0 -4px;
  }
  & div:nth-child(1) {
    animation-delay: -0.036s;
  }
  & div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  & div:nth-child(2) {
    animation-delay: -0.072s;
  }
  & div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  & div:nth-child(3) {
    animation-delay: -0.108s;
  }
  & div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  & div:nth-child(4) {
    animation-delay: -0.144s;
  }
  & div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  & div:nth-child(5) {
    animation-delay: -0.18s;
  }
  & div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  & div:nth-child(6) {
    animation-delay: -0.216s;
  }
  & div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  & div:nth-child(7) {
    animation-delay: -0.252s;
  }
  & div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  & div:nth-child(8) {
    animation-delay: -0.288s;
  }
  & div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
`,yf=P.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  animation: fadeInSmooth 0.2s ease-out;

  @keyframes fadeInSmooth {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,K5=Ft`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Ks=P.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 16px;
  width: 85%;
  max-width: 420px;
  max-height: 85vh;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  animation: slideInSmooth 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;

  @keyframes slideInSmooth {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.95) translateZ(0);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1) translateZ(0);
    }
  }

  /* Gezen ışık efekti */
  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 60deg,
      ${a=>a.mainColor}dd 90deg,
      ${a=>a.mainColor} 110deg,
      ${a=>a.mainColor} 120deg,
      ${a=>a.mainColor} 130deg,
      ${a=>a.mainColor}dd 150deg,
      transparent 180deg,
      transparent 360deg
    );
    border-radius: 20px;
    z-index: -1;
    animation: ${K5} 8s linear infinite;
    opacity: ${a=>a.mainColor?"1":"0"};
  }

  /* Modal'ın ana arka planı için beyaz maske */
  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: white;
    border-radius: 14px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 90%;
    border-radius: 14px;

    &::before {
      border-radius: 18px;
    }

    &::after {
      border-radius: 12px;
    }
  }
`,fo=P.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  border-radius: 20px;
  overflow: hidden;
`,J5=P.div`
  display: flex;
  width: 100%;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`,F5=({enabledPhoneSubscription:a,enabledEmailSubscription:r,mainColor:o,forceOpen:u})=>{const c=a,d=a&&r?!1:r;console.log("🔍 Parent'tan Gelen Prop Değerleri:",{propEnabledPhone:a,propEnabledEmail:r,mainColor:o,forceOpen:u}),console.log("🔧 Düzeltilmiş Değerler (Kullanılacak):",{enabledPhoneSubscription:c,enabledEmailSubscription:d}),r&&a&&!d&&(console.warn("⚠️ Parent component'te prop hatası tespit edildi ve düzeltildi!"),console.warn("⚠️ Backend'den enabledEmailSubscription: false geliyor"),console.log("✅ Email subscription devre dışı bırakıldı"));const[p,g]=G.useState(u||!1),[w,x]=G.useState(!1),[b,A]=G.useState(""),[E,$]=G.useState(!1),[M,V]=G.useState(""),[R,K]=G.useState(""),H=G.useRef(null),{register:Q,handleSubmit:le,formState:{errors:U}}=dr(),te=()=>{g(!1);const de=new Date;de.setDate(de.getDate()+7);const Te="expires="+de.toUTCString();document.cookie=`upsellPhoneSubscription=false;${Te};path=/`};H!==null&&Wi(H,()=>{te()});const fe=le(async de=>{x(!0),A("");try{R&&d&&await Le.post("https://api.upsell.co/emailsubscription",{name:de.name,surname:de.surname,email:R}),M&&c&&await Le.post("https://api.upsell.co/PhoneSubscription",{name:de.name,surname:de.surname,phone:"90"+M}),$(!0);const Te=new Date;Te.setDate(Te.getDate()+7);const Re="expires="+Te.toUTCString();document.cookie=`upsellPhoneSubscription=true;${Re};path=/`,g(!1)}catch{A("Bu telefon numarası veya e-posta adresi zaten kayıtlı.")}finally{x(!1)}});return G.useEffect(()=>{if(u){g(!0);return}if(typeof window<"u"&&!document.cookie.split(";").some(Te=>Te.trim().startsWith("upsellPhoneSubscription="))&&(c||d)){const Te=setTimeout(()=>{g(!0)},2e4);return()=>{clearTimeout(Te)}}},[u,c,d]),!c&&!d?null:f.jsx(f.Fragment,{children:f.jsxs(yf,{style:{display:!E&&!p?"none":"block"},children:[E&&f.jsx(Ks,{children:f.jsxs(wm,{children:[f.jsx(lr,{children:f.jsx("span",{onClick:()=>{$(!1)},style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),f.jsx(gf,{mainColor:o,children:"Teşekkürler!"}),f.jsx(xf,{mainColor:o,children:"Aboneliğiniz başarıyla alındı."})]})}),p&&f.jsxs(Ks,{ref:H,mainColor:o,children:[f.jsxs(fo,{children:[w&&f.jsx(mr,{children:f.jsxs(Q5,{children:[f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{})]})}),!E&&f.jsxs(f.Fragment,{children:[f.jsx(lr,{onClick:()=>{te()},children:f.jsx("span",{style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),f.jsxs(Qi,{children:[f.jsx(Ia,{mainColor:o,children:"Bültenimize Abone Olun, Fırsatları İlk Siz Yakalayın!"}),f.jsx(pr,{children:"İndirim ve fırsatlardan ilk sizin haberiniz olsun, kayıt olun ve avantajlardan yararlanın!"}),f.jsxs("form",{style:{display:"flex",flexDirection:"column",width:"100%"},onSubmit:de=>fe(de),children:[f.jsxs(J5,{children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(Ta,{mainColor:o,placeholder:"Adınızı Giriniz",...Q("name",{required:"Ad boş bırakılamaz"})}),U.name&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:U?.name?.message?.toString()??null})})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(Ta,{mainColor:o,placeholder:"Soyadınızı Giriniz",...Q("surname",{required:"Soyadı boş bırakılamaz"})}),U.surname&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:U?.surname?.message?.toString()??null})})]})]}),c&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(Ta,{mainColor:o,type:"string",...Q("phone",{required:c&&!d?"Telefon boş bırakılamaz":c&&d&&!R?"Telefon veya e-posta girmelisiniz":!1,pattern:{value:/^(501|502|503|505|506|507|508|509|512|530|531|532|533|534|535|536|537|538|539|540|541|542|543|544|545|546|547|548|549|550|551|552|553|554|555|559)\d{7}$/,message:"Geçerli bir cep telefonu numarası girin (örn: 5XXYYYYYYY)"}}),onChange:de=>{V(de.target.value),console.log("📱 Telefon değişti:",de.target.value)},placeholder:"5XXXXXXXXX",maxLength:10}),U.phone&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:U?.phone?.message?.toString()??null})})]}),d&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(Ta,{mainColor:o,placeholder:"E-postanızı Giriniz",...Q("email",{required:d&&!c?"E-posta boş bırakılamaz":d&&c&&!M?"E-posta veya telefon girmelisiniz":!1,pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,message:"Geçerli bir e-posta giriniz"}}),onChange:de=>{K(de.target.value)}}),U.email&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:U?.email?.message?.toString()??null})})]}),f.jsxs(oo,{children:[f.jsx(uo,{mainColor:o,...Q("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",f.jsx("a",{style:{color:o||"#e7333c",textDecoration:"underline",fontWeight:"500"},id:"kvkkLink",href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",children:"Aydınlatma metni için tıklayın"}),"."]})]}),U.kvkk&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:U?.kvkk?.message?.toString()??null})}),b&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:b})}),f.jsx("div",{children:f.jsx(rr,{mainColor:o,children:"Kaydet"})})]})]})]})]}),f.jsxs(co,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})]})})},W5=a=>Ft`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 ${`${a}66`};
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`,I5=P.button`
  position: fixed;
  color: white;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 999;
  text-align: center;
  padding: 8px;
  box-sizing: border-box;
  font-size: 11px;
  line-height: 1.2;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  background: linear-gradient(135deg, ${a=>a.mainColor||"#e7333c"}, ${a=>a.mainColor?`${a.mainColor}dd`:"#d12b35"});
  font-weight: 600;
  border: none;
  box-shadow: 0 4px 15px ${a=>a.mainColor?`${a.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
  transition: all 0.3s ease;
  animation: ${a=>W5(a.mainColor||"#e7333c")} 2s infinite;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${a=>a.mainColor?`${a.mainColor}50`:"rgba(231, 51, 60, 0.4)"};
  }
  
  &:active {
    transform: translateY(0);
  }

  left: ${a=>a.position===1?"50px":"auto"};
  right: ${a=>a.position===0?"50px":"auto"};
  bottom: 50px;

  @media (max-width: 600px) {
    width: 65px;
    height: 65px;
    font-size: 9px;
    padding: 6px;
    border-radius: 50%;
    bottom: 75px;
    left: ${a=>a.position===1?"50px":"auto"};
    right: ${a=>a.position===0?"50px":"auto"};
  }
`,P5=P.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  animation: fadeInSmooth 0.2s ease-out;
  
  @keyframes fadeInSmooth {
    from { 
      opacity: 0;
    }
    to { 
      opacity: 1;
    }
  }
`,e2=Ft`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,t2=P.div`
  position: absolute;
  bottom: 150px;
  ${a=>a.position===1?"left: 50px;":"right: 50px;"}
  background: white;
  border-radius: 16px;
  width: 400px;
  max-width: 500px;
  max-height: 85vh;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  z-index: 99999;
  animation: slideInFromCorner 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  will-change: transform, opacity;
  transform-origin: ${a=>a.position===1?"bottom left":"bottom right"};
  
  @keyframes slideInFromCorner {
    0% {
      opacity: 0;
      transform: scale(0.9) translateZ(0);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateZ(0);
    }
  }
  
  /* Gezen ışık efekti */
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 60deg,
      ${a=>a.mainColor}dd 90deg,
      ${a=>a.mainColor} 110deg,
      ${a=>a.mainColor} 120deg,
      ${a=>a.mainColor} 130deg,
      ${a=>a.mainColor}dd 150deg,
      transparent 180deg,
      transparent 360deg
    );
    border-radius: 20px;
    z-index: -1;
    animation: ${e2} 8s linear infinite;
    opacity: ${a=>a.mainColor?"1":"0"};
  }
  
  /* Modal'ın ana arka planı için beyaz maske */
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: white;
    border-radius: 14px;
    z-index: -1;
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    width: 340px;
    bottom: 135px;
    border-radius: 14px;
    
    &::before {
      border-radius: 18px;
    }
    
    &::after {
      border-radius: 12px;
    }
  }
  
  @media (max-width: 400px) {
    width: 95%;
    max-width: 360px;
  }
`,n2=P.div`
  text-align: center;
  font-weight: 700;
  padding: 24px 32px 20px 32px;
  color: ${a=>a.mainColor||"#333"};
  font-size: 20px;
  line-height: 1.3;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 20px 24px 16px 24px;
  }
`,a2=P.button`
  cursor: pointer;
  position: absolute;
  top: 13px;
  right: 13px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
  
  span {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1;
  }
  
  @media (max-width: 768px) {
    top: 12px;
    right: 12px;
    width: 28px;
    height: 28px;
    
    span {
      font-size: 16px;
    }
  }
`,i2=P.div`
  overflow-y: auto;
  padding: 0 24px 24px 24px;
  max-height: 400px;
  width: auto;
  margin: 0;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 10px;
    
    &:hover {
      background: #a8a8a8;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0 16px 20px 16px;
    max-height: 350px;
  }
`,l2=P.div`
  list-style-type: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  margin-bottom: 12px;
  background: #f8f9fa;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  
  &:hover {
    background: white;
    border-color: #e1e5e9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`,r2=P.a`
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
`,s2=P.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,o2=P.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 16px;
`,u2=P.div`
  color: #333;
  font-weight: 600;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  margin-bottom: 8px;
`,c2=P.div`
  font-size: 16px;
  color: ${a=>a.mainColor||"#e7333c"};
  font-weight: 700;
  margin-top: auto;
`,vf=P.div`
  display: none;
`,bf=P.div`
  display: none;
`,Sf=P.div`
  display: none;
`,f2=P.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 24px 20px 24px;
  padding-top: 16px;
  font-size: 12px;
  gap: 6px;
  font-weight: 500;
  color: #666;
  text-decoration: none;
  border-top: 1px solid #e1e5e9;
  
  &:hover {
    color: #333;
  }
  
  svg {
    opacity: 0.7;
  }
  
  @media (max-width: 768px) {
    margin: 12px 16px 16px 16px;
    padding-top: 14px;
  }
`,d2=({mainColor:a,forceOpen:r})=>{const[o,u]=G.useState(r||!1),[c,d]=G.useState(!0),[p,g]=G.useState([]),[w,x]=G.useState({title:"",contentTitle:"",position:0}),b=G.useRef(null);return b!==null&&Wi(b,()=>{u(!1)}),G.useEffect(()=>{r&&u(!0)},[r]),G.useEffect(()=>{async function E(){d(!0);try{const $=await Le.get("https://api.upsell.co/RecommendedProducts");x({title:$.data.data.title,contentTitle:$.data.data.contentTitle,position:$.data.data.position}),g($.data.data.products)}catch{}finally{d(!1)}}E()},[]),p===null||!(p.length>0&&!c)?null:f.jsxs("div",{children:[!r&&f.jsx(I5,{position:w.position,mainColor:a,onClick:()=>{u(!0)},children:w.title}),f.jsx(P5,{style:{display:o?"block":"none"},children:f.jsxs(t2,{ref:b,position:w.position,mainColor:a,children:[f.jsx(a2,{onClick:()=>u(!1),children:f.jsx("span",{children:"×"})}),f.jsxs(n2,{mainColor:a,children:[w.contentTitle," ✨"]}),f.jsx(i2,{children:p.map(E=>f.jsx(l2,{children:f.jsxs(r2,{href:`${E.productUrl}?utm_source=upsell&utm_medium=widget&utm_campaign=weekly-products`,children:[f.jsx(s2,{src:E.imageUrl,alt:E.title}),f.jsxs(o2,{children:[f.jsx(u2,{children:E.title}),f.jsxs(c2,{mainColor:a,children:[E.price," TL"]})]})]})},E.productId))}),f.jsxs(f2,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})})]})},gn=P.div`
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  color: #333;
  font-weight: 600;
  font-size: 15px;
  margin-top: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12), 0 3px 12px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    padding: 14px 16px;
    font-size: 14px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    padding: 12px 14px;
    font-size: 13px;
    flex-direction: column;
    gap: 8px;
    text-align: center;

    div {
      width: 100% !important;
    }
  }
`,h2=Ft`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,p2=Ft`   
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,m2=P.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${p2} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  & div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #e7333c;
    margin: -4px 0 0 -4px;
    box-shadow: 0 0 4px rgba(231, 51, 60, 0.5);
  }
  & div:nth-child(1) {
    animation-delay: -0.036s;
  }
  & div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  & div:nth-child(2) {
    animation-delay: -0.072s;
  }
  & div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  & div:nth-child(3) {
    animation-delay: -0.108s;
  }
  & div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  & div:nth-child(4) {
    animation-delay: -0.144s;
  }
  & div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  & div:nth-child(5) {
    animation-delay: -0.18s;
  }
  & div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  & div:nth-child(6) {
    animation-delay: -0.216s;
  }
  & div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  & div:nth-child(7) {
    animation-delay: -0.252s;
  }
  & div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  & div:nth-child(8) {
    animation-delay: -0.288s;
  }
  & div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
`,g2=P.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 20px;
  width: 85%;
  max-width: 450px;
  max-height: 85vh;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.3);
  position: relative;
  animation: slideInSmooth 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;

  @keyframes slideInSmooth {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.95) translateZ(0);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1) translateZ(0);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 60deg,
      ${a=>a.mainColor||"#e7333c"}dd 90deg,
      ${a=>a.mainColor||"#e7333c"} 110deg,
      ${a=>a.mainColor||"#e7333c"} 120deg,
      ${a=>a.mainColor||"#e7333c"} 130deg,
      ${a=>a.mainColor||"#e7333c"}dd 150deg,
      transparent 180deg,
      transparent 360deg
    );
    border-radius: 24px;
    z-index: -1;
    animation: ${h2} 8s linear infinite;
    opacity: ${a=>a.mainColor?"1":"0.8"};
  }

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: white;
    border-radius: 18px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 90%;
    border-radius: 16px;

    &::before {
      border-radius: 20px;
    }

    &::after {
      border-radius: 14px;
    }
  }
`,x2=({color:a,forceOpen:r})=>{const[o,u]=G.useState(r||!1),[c,d]=G.useState(null),[p,g]=G.useState(!1),[w,x]=G.useState(!1),b=G.useRef(null);Wi(b,()=>{u(!1)}),G.useEffect(()=>{if(r)u(!0);else{const K=document.getElementsByClassName("upsell-ss"),H=()=>u(!0);return Array.from(K).forEach(Q=>{Q.addEventListener("click",H)}),()=>{Array.from(K).forEach(Q=>{Q.removeEventListener("click",H)})}}},[r]);const{register:E,handleSubmit:$,formState:{errors:M}}=dr(),V=$(async K=>{x(!0),g(!1),d(null);try{const Q=(await Le.post("https://api.upsell.co/ticimax/order",{phone:"90"+K.phone})).data;!Q.data||Q.data===null?g(!0):d(Q.data)}catch{g(!0)}finally{x(!1)}}),R=()=>{u(!1),d(null),g(!1)};return f.jsx(yf,{style:{display:o?"block":"none"},children:f.jsxs(g2,{ref:b,mainColor:a,children:[f.jsxs(fo,{children:[f.jsx(vf,{mainColor:a}),f.jsx(bf,{mainColor:a}),f.jsx(Sf,{mainColor:a}),w&&f.jsx(mr,{children:f.jsx(m2,{children:Array.from({length:8}).map((K,H)=>f.jsx("div",{},H))})}),f.jsx(lr,{children:f.jsx("span",{onClick:R,style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),c?f.jsxs(Qi,{children:[f.jsx(Ia,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş No"}),f.jsx("div",{style:{width:"50%"},children:c.siparisNo||"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş Tarihi"}),f.jsx("div",{style:{width:"50%"},children:new Date(c.siparisTarihi).toLocaleDateString("tr-TR")||"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş Durumu"}),f.jsx("div",{style:{width:"50%"},children:c.siparisDurumu||"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Takip Link"}),f.jsx("div",{style:{width:"50%"},children:c.kargoTakipLink?f.jsx("a",{target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:a||"#e7333c"},href:c.kargoTakipLink,children:"Kargoyu Görüntüle"}):"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Takip No"}),f.jsx("div",{style:{width:"50%"},children:c.kargoTakipNo||"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Firma"}),f.jsx("div",{style:{width:"50%"},children:c.kargoFirmaTanim||"-"})]})]}):f.jsxs(Qi,{children:[f.jsx(Ia,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),f.jsx(pr,{children:"Siparişinizin kargo takibini yapmak için telefon numaranızı giriniz."}),f.jsxs("form",{onSubmit:V,children:[f.jsx(Ta,{mainColor:a,type:"text",...E("phone",{required:"Telefon numarası boş bırakılamaz",pattern:{value:/^[0-9]{10}$/,message:"Geçerli bir telefon numarası giriniz"}}),placeholder:"5XXXXXXXXX",maxLength:10}),M.phone&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:M.phone.message})}),f.jsxs(oo,{children:[f.jsx(uo,{mainColor:a,...E("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",f.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",rel:"noopener noreferrer",children:"Aydınlatma metni için tıklayın."})]})]}),M.kvkk&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center",marginBottom:"10px"},children:M.kvkk.message})}),p&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Telefon numarası ile eşleşen sipariş bulunamadı."})}),f.jsx("div",{children:f.jsx(rr,{mainColor:a,children:"Sorgula"})})]})]})]}),f.jsxs(co,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})})};P.button`
  font-size: 14px;
  background: #fff;
  color: ${a=>a.mainColor||"#e7333c"};
  border: 1px solid ${a=>a.mainColor||"#e7333c"};
  stroke: ${a=>a.mainColor||"#e7333c"};
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background-color: ${a=>a.mainColor||"#e7333c"};
    color: #fff;
    stroke: #fff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px
      ${a=>a.mainColor?`${a.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
  }

  &:active {
    transform: translateY(0);
  }
`;P.strong`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 16px;
  margin-bottom: 16px;
  color: ${a=>a.mainColor||"#333"};
  font-weight: 600;
`;const y2=P.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 16px 0;
`,v2=P.label`
  padding: 8px 12px;
  min-height: 36px;
  min-width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  border: 2px solid
    ${a=>a.selected?a.mainColor||"#e7333c":"#e1e5e9"};
  background-color: ${a=>a.selected?a.mainColor||"#e7333c":"#ffffff"};
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover:not([disabled]) {
    border-color: ${a=>a.mainColor||"#e7333c"};
    background-color: ${a=>a.selected?a.mainColor||"#e7333c":"#f8f9fa"};
  }

  ${a=>a.disabled&&`
    opacity: 0.5;
    cursor: not-allowed;
    
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      width: 150%;
      left: 50%;
      height: 2px;
      background-color: #dc2626;
      transform: translateY(-50%) translateX(-50%) rotate(45deg);
    }
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      width: 150%;
      left: 50%;
      height: 2px;
      background-color: #dc2626;
      transform: translateY(-50%) translateX(-50%) rotate(-45deg);
    }
  `}
`,b2=P.span`
  color: ${a=>a.selected?"#fff":"#333"};
  text-decoration: none;
  font-weight: 500;
`,S2=P.div`
  color: #e40000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  padding: 8px 12px;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
`,w2=Ft`   
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`,E2=P.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${w2} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  & div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #000;
    margin: -4px 0 0 -4px;
  }
  & div:nth-child(1) {
    animation-delay: -0.036s;
  }
  & div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  & div:nth-child(2) {
    animation-delay: -0.072s;
  }
  & div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  & div:nth-child(3) {
    animation-delay: -0.108s;
  }
  & div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  & div:nth-child(4) {
    animation-delay: -0.144s;
  }
  & div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  & div:nth-child(5) {
    animation-delay: -0.18s;
  }
  & div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  & div:nth-child(6) {
    animation-delay: -0.216s;
  }
  & div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  & div:nth-child(7) {
    animation-delay: -0.252s;
  }
  & div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  & div:nth-child(8) {
    animation-delay: -0.288s;
  }
  & div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
`,A2=P.div`
  #upsell-ss-reminder {
    font-size: 14px !important;
    background: #fff !important;
    color: ${a=>a.mainColor||"#e7333c"} !important;
    border: 1px solid ${a=>a.mainColor||"#e7333c"} !important;
    stroke: ${a=>a.mainColor||"#e7333c"} !important;
    border-radius: 8px !important;
    padding: 12px 16px !important;
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
    font-weight: 500 !important;
    text-decoration: none !important;
    box-sizing: border-box !important;
    min-height: auto !important;
    width: auto !important;

    &:hover {
      background-color: ${a=>a.mainColor||"#e7333c"} !important;
      color: #fff !important;
      stroke: #fff !important;
      transform: translateY(-1px) !important;
      box-shadow: 0 4px 12px
        ${a=>a.mainColor?`${a.mainColor}40`:"rgba(231, 51, 60, 0.3)"} !important;
    }

    &:active {
      transform: translateY(0) !important;
    }

    svg {
      stroke: ${a=>a.mainColor||"#e7333c"} !important;
      transition: stroke 0.3s ease !important;
      pointer-events: none !important;
    }

    &:hover svg {
      stroke: #fff !important;
    }

    i {
      pointer-events: none !important;
    }
  }
`,z2=({mainColor:a,stockReminderUsageChannel:r,forceOpen:o})=>{const u=G.useRef(null),[c,d]=G.useState(o||!1),[p,g]=G.useState(!1),[w,x]=G.useState(""),[b,A]=G.useState(!1),[E,$]=G.useState(),[M,V]=G.useState(),[R,K]=G.useState(!1),H=G.useRef(null),Q=G.useRef(null),le=G.useRef(null),U=()=>{document.querySelectorAll(".nostok").forEach(y=>{if(!y.querySelector(".stock_bell_icon")){const C=document.createElement("i");C.className="fal fa-bell stock_bell_icon",C.style.fontSize="14px",C.style.color="#000",C.style.fontWeight="500",C.style.marginLeft="5px",C.style.transition="0.3s",C.style.pointerEvents="none",y.appendChild(C)}})},te=()=>{le.current&&clearInterval(le.current),le.current=setInterval(()=>{document.querySelectorAll(".stock_bell_icon").forEach(y=>{const C=y;C.style.transform="scale(1.5)",C.style.color="red",C.style.transition="0.3s",setTimeout(()=>{C.style.transform="scale(1)",C.style.color="#000",C.style.transition="0.3s"},1e3)})},3e3)},ne=()=>{const ee=document.getElementById("dynamicNostokBellStyles");ee&&ee.remove();const y=document.createElement("style");y.id="dynamicNostokBellStyles",y.innerHTML=`
      span.nostok {
        display: flex !important;
        justify-content: space-evenly !important;
        align-items: center !important;
        min-width: 65px !important;
      }
      span.nostok span {
        display: none !important;
      }
      .stock_bell_icon {
        font-size: 14px !important;
        color: #F01515 !important;
        font-weight: 500 !important;
        margin-left: 5px !important;
        transition: all 0.3s ease !important;
        pointer-events: none !important;
      }
    `,document.head.appendChild(y)};G.useEffect(()=>{typeof window<"u"&&(window.currentProduct?$(window.currentProduct):window.productDetailModel&&$(window.productDetailModel))},[]),G.useEffect(()=>{typeof window<"u"&&E&&(U(),ne(),te())},[E]),G.useEffect(()=>()=>{le.current&&clearInterval(le.current)},[]);const{register:fe,handleSubmit:de,formState:{errors:Te},reset:Re,clearErrors:W}=dr(),re=()=>{d(!1),V(null),Re(),W(),x(""),K(!1)};u!==null&&Wi(u,re);const be=de(ee=>{g(!0),E&&(E.productVariantData&&!M||Le.post("https://api.upsell.co/phonesubscription/reminder",{...r===1||r===2?{phone:"90"+ee.phone,email:""}:{email:ee.email,phone:""},productName:E.productName,productSlug:window.location.pathname,productId:`${E.productVariantData?M?.variantOptions[0].urunID:E.product.id}`,productCardId:E.product.urunKartiId.toString(),variant:(JSON.stringify(M)??"{}")||"{}",hasVariant:E.productVariantData!==null}).then(()=>{A(!0),d(!1)}).catch(()=>{x(r===1||r===2?"Bu telefon numarası zaten kayıtlı.":"Bu e-posta adresi zaten kayıtlı.")}).finally(()=>{g(!1)}))});G.useEffect(()=>{if(o)d(!0);else if(typeof window<"u"){const ee=J=>{J.preventDefault(),J.stopPropagation(),c||d(!0)},y=()=>{c||d(!0)};H.current=ee,Q.current=y;const C=document.getElementById("upsell-ss-reminder");C&&(C.removeEventListener("click",Q.current),C.addEventListener("click",y));const F=document.querySelectorAll(".nostok");if(F.forEach(J=>{H.current&&J.removeEventListener("click",H.current)}),F.forEach(J=>{J.addEventListener("click",ee)}),E){console.log("=== STOCK REMINDER DEBUG ==="),console.log("Product Detail Data:",E),console.log("Has Variant Data:",!!E.productVariantData),console.log("Variant Data:",E.productVariantData);const J=E.productVariantData?.some(se=>se.stokAdedi===0);console.log("Has Out of Stock Variants:",J);const ce=E.productVariantData===null&&E.totalStockAmount===0;console.log("Is Main Product Out of Stock:",ce),console.log("Total Stock Amount:",E.totalStockAmount);const Se=J||ce;if(console.log("Should Show Button:",Se),console.log("Nostok Elements Count:",F.length),console.log("Existing Button:",!!C),Se){console.log("✅ Button should be visible");const se=E.productVariantData!==null&&E.totalStockAmount===0;if(console.log("Force Show Button (all variants out of stock):",se),F.length===0||se)if(console.log("Creating/showing button (no nostok OR all variants out of stock)"),C)console.log("Showing existing button"),C.style.display="flex";else{console.log("Creating new button");const je=()=>{if(typeof window.$<"u"){const xe=document.querySelector(".MiddleList");if(console.log("MiddleList found:",!!xe),xe&&!document.getElementById("upsell-ss-reminder")){const Ve=`
                      <div id="upsell-ss-reminder" style="
                        display: flex;
                        font-size: 14px;
                        font-weight: 600;
                        background: #fff;
                        color: ${a||"#e7333c"};
                        border: 1px solid ${a||"#e7333c"};
                        stroke: ${a||"#e7333c"};
                        border-radius: 5px;
                        padding: 8px;
                        align-items: center;
                        gap: 10px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        justify-content: center;
                        margin-bottom: 10px;
                      ">
                        <svg height="20" style="fill: ${a||"#e7333c"}; pointer-events: none;" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path d="m437.017 39.687c-5.858-5.857-15.356-5.857-21.213 0-5.858 5.858-5.857 15.356 0 21.213 42.688 42.685 66.196 99.438 66.196 159.807 0 8.284 6.716 15 15 15s15-6.716 15-15c0-68.382-26.629-132.67-74.983-181.02z"></path>
                            <path d="m96.193 39.688c-5.858-5.857-15.355-5.858-21.213 0-48.352 48.354-74.98 112.641-74.98 181.019 0 8.284 6.716 15 15 15s15-6.716 15-15c0-60.365 23.508-117.118 66.193-159.805 5.858-5.858 5.858-15.356 0-21.214z"></path>
                            <path d="m370.358 85.125c-5.858 5.858-5.857 15.355 0 21.213 30.55 30.548 47.374 71.164 47.374 114.368 0 8.284 6.716 15 15 15s15-6.716 15-15c0-51.217-19.945-99.368-56.161-135.582-5.858-5.856-15.355-5.856-21.213.001z"></path>
                            <path d="m141.634 85.132c-5.858-5.857-15.356-5.857-21.213.001-36.211 36.216-56.154 84.363-56.154 135.573 0 8.284 6.716 15 15 15s15-6.716 15-15c0-43.197 16.823-83.811 47.369-114.361 5.857-5.858 5.856-15.355-.002-21.213z"></path>
                            <path d="m383.467 329.632v-76.792c0-28.011-8.918-54.59-25.79-76.865-14.101-18.617-33.332-33.16-54.939-41.717-3.007-23.111-22.82-41.018-46.738-41.018s-43.733 17.906-46.74 41.018c-21.606 8.558-40.837 23.101-54.938 41.717-16.872 22.275-25.79 48.854-25.79 76.865v76.792l-30.549 61.1c-2.325 4.65-2.076 10.172.657 14.594s7.561 7.114 12.76 7.114h66.774c7.033 36.558 39.246 64.267 77.825 64.267 38.578 0 70.791-27.709 77.823-64.267h66.778c5.199 0 10.027-2.692 12.76-7.114s2.981-9.944.657-14.594zm-127.467 117.075c-21.938 0-40.573-14.413-46.933-34.267h93.865c-6.36 19.854-24.994 34.267-46.932 34.267zm64.266-64.267h-128.533-56.062l21.279-42.559c1.042-2.083 1.583-4.379 1.583-6.708v-80.333c0-42.793 28.625-81.203 69.612-93.405 6.36-1.894 10.72-7.741 10.72-14.376v-4.686c0-9.447 7.687-17.133 17.135-17.133 9.447 0 17.133 7.686 17.133 17.133v4.686c0 6.636 4.36 12.483 10.72 14.376 40.987 12.202 69.614 50.611 69.614 93.405v80.333c0 2.329.542 4.625 1.583 6.708l21.279 42.559z"></path>
                          </g>
                        </svg>
                        <i class="fal fa-bell stock_bell_icon" style="font-size: 14px; color: ${a||"#e7333c"}; margin-left: 5px; transition: all 0.3s ease; pointer-events: none;"></i> 
                        Stoğa Gelince Haber Ver
                      </div>
                    `;xe.insertAdjacentHTML("beforebegin",Ve),console.log("Button HTML inserted");const mt=document.getElementById("upsell-ss-reminder");mt?(console.log("New button found, adding event listener"),mt.addEventListener("click",y)):console.log("❌ New button not found after insertion")}else console.log("Button already exists or MiddleList not found")}else console.log("jQuery not loaded yet, retrying..."),setTimeout(je,100)};je()}else console.log("Nostok elements exist and not all variants out of stock, button managed by nostok clicks")}else console.log("❌ Button should be hidden"),C&&(console.log("Hiding existing button"),C.style.display="none");console.log(`=== END DEBUG ===
`)}return()=>{document.querySelectorAll(".nostok").forEach(se=>{H.current&&se.removeEventListener("click",H.current)});const ce=document.getElementById("upsell-ss-reminder");ce&&Q.current&&ce.removeEventListener("click",Q.current);const Se=document.getElementById("dynamicNostokBellStyles");Se&&Se.remove()}}},[o,E,a,c]);const ge=ee=>ee.reduce((y,C)=>(y[C.urunID]||(y[C.urunID]={variantName:C.ekSecenekTipiTanim,variantOptions:[]}),y[C.urunID].variantOptions.push(C),y),{}),O=()=>{if(!E?.productVariantData)return"Ürün Tekrar Stokta Olduğunda Sana Bildirelim!";const ee=[...new Set(E.productVariantData.map(y=>y.ekSecenekTipiTanim))];return ee.length>1?`${ee.join(" ve ")}ini Seç, Stokta Olunca Sana Bildirelim!`:"Bedenini Seç, Stokta Olunca Sana Bildirelim!"},Z=ee=>ee===1||ee===2?"Ürün stoğa girdiğinde size WhatsApp veya SMS ile hemen bilgi vereceğiz. Telefon numaranızın doğru olduğundan emin olun!":"Ürün stoğa girdiğinde size E-posta ile hemen bilgi vereceğiz. E-posta adresinizin doğru olduğundan emin olun!",ue=()=>E?.productVariantData?"İlgilendiğiniz beden stoğa girdiğinde size hemen bilgi vereceğiz.":"İlgilendiğiniz ürün stoğa girdiğinde size hemen bilgi vereceğiz.";return E?f.jsxs(f.Fragment,{children:[f.jsx(A2,{mainColor:a}),f.jsxs(yf,{style:{display:!b&&!c?"none":"block"},children:[b&&f.jsx(Ks,{mainColor:a,children:f.jsxs(wm,{children:[f.jsx(lr,{onClick:()=>{A(!1)},children:f.jsx("span",{style:{color:"#000000",float:"right",fontSize:"18px"},children:"×"})}),f.jsx(gf,{mainColor:a,children:"Teşekkürler!"}),f.jsx(xf,{mainColor:a,children:ue()})]})}),c&&f.jsxs(Ks,{ref:u,mainColor:a,children:[f.jsxs(fo,{children:[p&&f.jsx(mr,{children:f.jsxs(E2,{children:[f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{})]})}),!b&&f.jsxs(f.Fragment,{children:[f.jsx(lr,{onClick:()=>{re()},children:f.jsx("span",{style:{color:"#000000",float:"right",fontSize:"18px"},children:"×"})}),f.jsxs(Qi,{children:[f.jsx(Ia,{mainColor:a,children:O()}),E?.productVariantData&&f.jsxs(f.Fragment,{children:[f.jsx("div",{children:f.jsx(y2,{children:Object.entries(ge(E?.productVariantData)).map(ee=>f.jsx("li",{children:f.jsxs(v2,{selected:M?.name===ee[1].variantOptions.map(y=>y.tanim).join(", "),htmlFor:ee[0]+"-"+ee[1].variantOptions.map(y=>y.id),disabled:ee[1].variantOptions[0].stokAdedi!==0,mainColor:a,children:[f.jsx("input",{type:"radio",disabled:ee[1].variantOptions[0].stokAdedi!==0,id:ee[0]+"-"+ee[1].variantOptions.map(y=>y.id),checked:M?.name===ee[1].variantOptions.map(y=>y.tanim).join(", "),style:{visibility:"hidden",display:"none"},...fe(ee[1].variantName,{required:ee[1].variantName+" varyasyonu için bir seçenek seçin"}),onClick:()=>{V({variantOptions:ee[1].variantOptions,name:ee[1].variantOptions.map(y=>y.tanim).join(", ")})}}),f.jsx(b2,{selected:M?.name===ee[1].variantOptions.map(y=>y.tanim).join(", "),children:ee[1].variantOptions.map(y=>y.tanim).join(", ")})]})},ee[0]))})}),!M&&R&&f.jsx(S2,{children:"Lütfen bir seçenek seçin"})]}),f.jsx(pr,{style:{marginTop:E?.productVariantData?"20px":"0"},children:Z(r)}),f.jsxs("form",{onSubmit:ee=>be(ee),children:[r===1||r===2?f.jsxs(f.Fragment,{children:[f.jsx(Ta,{mainColor:a,type:"string",...fe("phone",{required:"Telefon boş bırakılamaz",pattern:{value:/^(501|502|503|505|506|507|508|509|512|530|531|532|533|534|535|536|537|538|539|540|541|542|543|544|545|546|547|548|549|550|551|552|553|554|555|559)\d{7}$/,message:"Geçerli bir cep telefonu numarası girin (örn: 5XXYYYYYYY)"}}),placeholder:"5XXXXXXXXX",maxLength:10}),Te.phone&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:Te?.phone?.message?.toString()??null})})]}):f.jsxs(f.Fragment,{children:[f.jsx(Ta,{mainColor:a,placeholder:"E-postanızı Giriniz",...fe("email",{required:"E-posta boş bırakılamaz",pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,message:"Geçerli bir e-posta giriniz"}})}),Te.email&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:Te?.email?.message?.toString()??null})})]}),f.jsxs(oo,{children:[f.jsx(uo,{mainColor:a,...fe("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:[r===1||r===2?"Kampanya, duyuru ve bilgilendirmelerden WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum.":"Kampanya, duyuru ve bilgilendirmelerden E-Posta yoluyla haberdar olmak istediğimi belirtiyorum.",f.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},id:"kvkkLink",href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",children:"Aydınlatma metni için tıklayın"}),"."]})]}),Te.kvkk&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:Te?.kvkk?.message?.toString()??null})}),w&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:w})}),f.jsx("div",{children:f.jsx(rr,{mainColor:a,onClick:()=>{K(!0)},children:"Kaydet"})})]})]})]})]}),f.jsxs(co,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})]})]}):null};var Em=gp();const T2=a=>{const{color:r}=a,[o,u]=G.useState([]),[c,d]=G.useState(!0),p=G.useRef(null),g=G.useRef(null),[w,x]=G.useState(!1);G.useEffect(()=>{g.current=document.querySelector("#upsell-ss-featured-products-responsive"),x(!0)},[]),G.useEffect(()=>{async function A(){if(!document.body.classList.contains("CategoryBody")){d(!1);return}try{const E=window.globalModel;if(!E?.breadCrumb?.id){console.log("BreadCrumb ID: bulunamadı"),d(!1);return}const $=E.breadCrumb.id,M=window.location.origin,K=(await(await fetch(`${M}/api/product/GetProductList?c=trtry0000&FilterJson={"CategoryIdList":[${$}]}&PagingJson={"PageItemCount":15,"PageNumber":1,"OrderBy":"SATISADEDI","OrderDirection":"DESC"}&CreateFilter=false&TransitionOrder=0&PageType=1`)).json()).products?.filter(H=>H.inStock)?.slice(0,20)||[];u(K)}catch(E){console.error("Ürün yükleme hatası:",E)}finally{d(!1)}}w&&A()},[w]),G.useEffect(()=>{if(o.length>0&&p.current){const A=window.$;if(A){const E=A(p.current);E.hasClass("owl-loaded")&&E.trigger("destroy.owl.carousel"),E.owlCarousel({autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,autoplaySpeed:1e3,navClass:["ProductListprev","ProductListnext"],nav:!0,lazyLoad:!0,margin:10,responsive:{0:{items:2},576:{items:3},767:{items:4},991:{items:5},1023:{items:6}}})}}},[o]);const b=A=>{const E=A.variantTypeItems?.length||0,$=A.discountRate>0,V=`${A.url}?utm_source=upsell&utm_medium=widget&utm_campaign=category-products`;return f.jsxs("div",{className:"productItem IndirimliUrun yorumyok",children:[f.jsxs("div",{className:"productImage",children:[f.jsx("a",{className:"detailLink detailUrl","data-id":A.productId,title:A.name,href:V,children:f.jsx("img",{"data-resize-target":".productImage",className:"resimOrginal lazyImage entered loaded",src:A.imageThumbPath,"data-original":A.imageThumbPath,alt:A.imageAltTag,"data-ll-status":"loaded"})}),A.relatedProductCount>0&&f.jsx("div",{className:"relatedProductsColor",children:f.jsxs("div",{className:"relatedProductsColorBtn",onClick:R=>{const K=window.getRelatedProducts;K&&K(A.productId,R.currentTarget)},children:[f.jsxs("div",{className:"relatedColorDiv",children:[f.jsx("span",{className:"relatedColor"}),f.jsx("span",{className:"relatedColor"})]}),f.jsx("span",{className:"productRelatedColorCount",children:A.relatedProductCount})]})})]}),f.jsx("div",{className:"productIconWrap",children:f.jsx("div",{className:"productIconLeft",children:$&&f.jsxs("div",{className:"discountIcon tip",children:[f.jsxs("span",{className:"discountIcon_s1",children:["%",A.discountRate]}),f.jsx("span",{className:"discountIcon_s2",children:"İndirim"}),f.jsxs("div",{className:"discountIconDetail",children:["%",A.discountRate," İndirim"]})]})})}),f.jsxs("div",{className:"productDetail videoAutoPlay","data-id":A.productId,"data-variant-id":A.variantId,"data-page":"1","data-category":A.category,"data-category1":A.category,children:[f.jsx("div",{className:"productMarka",style:{display:"none"},children:A.brand}),f.jsx("div",{className:"productName detailUrl","data-id":A.productId,children:f.jsx("a",{title:A.name,href:V,children:A.name})}),f.jsxs("div",{className:`productPrice ${$?"IndirimVar":""}`,children:[f.jsxs("div",{className:"discountPrice",children:[f.jsx("span",{className:"discountPriceSpan",children:A.productSellPriceStr}),f.jsx("span",{className:"discountKdv",children:"KDV Dahil"})]}),$&&f.jsxs("div",{className:"regularPrice",children:[f.jsx("span",{className:"regularPriceSpan",children:A.productPriceOriginalStr}),f.jsx("span",{className:"discountKdv",children:"KDV Dahil"})]})]}),E>0&&f.jsxs("div",{className:"boxUrunlerContent",children:[f.jsx("div",{className:"boxUrunlerTittle"}),f.jsxs("div",{className:"boxUrunlerContainer",children:[A.variantTypeItems?.map(R=>f.jsx("div",{children:f.jsx("a",{className:"boxUrunResimContent",href:"javascript:;",onClick:K=>{const H=window.GetProductVariantItemImages;H&&H(K.currentTarget,R.productId,R.url)},children:f.jsx("img",{className:"lazyImage",src:R.imageThumbPath,"data-original":R.imageThumbPath})})},R.productId)),f.jsx("div",{className:"boxUrunlerPlus",children:f.jsxs("a",{href:V,className:"boxUrunlerPlusBtn",children:[f.jsx("i",{className:"far fa-plus"}),f.jsx("span",{children:E})]})})]}),f.jsxs("span",{className:"v-count",children:["+",E]})]})]}),f.jsxs("div",{className:"productIcon",children:[f.jsxs("div",{className:"productEx2",children:[f.jsx("div",{className:"favori favoriContent-5878-0",children:f.jsx("a",{onClick:R=>{const K=window.productFavoritesProcess;K&&K(A.unique,-1,2,A.variantId,0,1,R.currentTarget)},"data-action":"1","data-favoritepopup":"true",className:"favoriteslist listfavoriPasif tip",title:"Favorilere Ekle",children:"Favorilere Ekle"})}),f.jsx("div",{className:"examineIcon tip detailLink",title:"Ürünü İncele",children:f.jsx("a",{href:V,className:"detailUrl","data-id":A.productId,children:"Ürünü İncele"})})]}),f.jsx("div",{className:"productEx",children:f.jsx("div",{className:"mycartIcon tip",title:"Sepete Ekle",children:f.jsx("a",{onClick:R=>{const K=window.productListAddToCartV2;K&&K(A.unique,A.variantId,0,0,1,A.url,0,R.currentTarget)},className:"btnAddToCart","data-productid":A.productId,"data-variantid":"0","data-unique":A.unique,children:f.jsx("span",{className:"urunListeSpanSepeteEkle",children:"Sepete Ekle"})})})})]}),f.jsx("div",{className:"productItemVariantDetail",style:{display:"none"},id:`productListVariantDetail${A.unique}`})]},A.productId)};return!document.body.classList.contains("CategoryBody")||!w||!g.current||c||o.length===0?null:Em.createPortal(f.jsxs("div",{children:[f.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .max-category-head {
          font-size: 20px;
          margin-bottom: 10px;
          letter-spacing: 0.5px;
          text-align: center;
          font-weight: bold;
        }

        @media (min-width: 768px) {
          .max-BestSellingProducts {
            padding: 0 50px;
          }

          .max-category-head {
            font-size: 24px;
            padding: 0 50px;
          }
        }

        .max-BestSellingProducts .ProductListprev, .max-BestSellingProducts .ProductListnext {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          z-index: 10;
        }
        .max-BestSellingProducts .ProductListprev {
          left: 10px;
        }
        .max-BestSellingProducts .ProductListnext {
          right: 10px;
        }
      `}}),f.jsx("p",{className:"max-category-head",children:"Kategorinin En Çok Satılan Ürünleri"}),f.jsx("div",{ref:p,className:"max-BestSellingProducts owl-carousel owl-theme",children:o.map(A=>b(A))})]}),g.current)},j2=P.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  animation: fadeInSmooth 0.2s ease-out;
  
  @keyframes fadeInSmooth {
    from { 
      opacity: 0;
    }
    to { 
      opacity: 1;
    }
  }
`,D2=P.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  max-width: 500px;
  height: 100%;
  background: white;
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
  animation: slideInFromRight 0.4s ease-out;
  position: relative;
  
  /* Gezen ışık efekti - sol kenar için */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -6px;
    width: 6px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      ${a=>a.mainColor||"#e7333c"}88 20%,
      ${a=>a.mainColor||"#e7333c"} 40%,
      ${a=>a.mainColor||"#e7333c"} 60%,
      ${a=>a.mainColor||"#e7333c"}88 80%,
      transparent 100%
    );
    z-index: 0;
    opacity: 1;
  }
  
  @keyframes slideInFromRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideUpDown {
    0%, 100% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 0% 100%;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`,O2=P.div`
  cursor: pointer;
  position: absolute;
  top: 13px;
  left: 13px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
  
  svg {
    width: 18px;
    height: 18px;
    fill: rgba(0, 0, 0, 0.6);
  }
  
  @media (max-width: 768px) {
    top: 12px;
    left: 12px;
    width: 28px;
    height: 28px;
  }
`,lp=P.div`
  cursor: pointer;
  position: absolute;
  top: 13px;
  right: 13px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
  
  svg {
    width: 18px;
    height: 18px;
    fill: rgba(0, 0, 0, 0.6);
  }
  
  @media (max-width: 768px) {
    top: 12px;
    right: 12px;
    width: 28px;
    height: 28px;
  }
`,_2=P.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  max-width: 500px;
  height: 100%;
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
  animation: slideInFromRight 0.4s ease-out;
  position: relative;
  
  /* Gezen ışık efekti - sol kenar için */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -6px;
    width: 6px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      ${a=>a.mainColor||"#e7333c"}88 20%,
      ${a=>a.mainColor||"#e7333c"} 40%,
      ${a=>a.mainColor||"#e7333c"} 60%,
      ${a=>a.mainColor||"#e7333c"}88 80%,
      transparent 100%
    );
    z-index: 0;
    opacity: 1;
  }
  
  @keyframes slideInFromRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideUpDown {
    0%, 100% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 0% 100%;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`,rp=P.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  border-top: 1px solid #e1e5e9;
  padding: 16px 24px;
  background: #f8f9fa;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 14px 20px;
  }
`,R2=P.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background: #ffffff;
  text-align: center;
  overflow: hidden;
  position: relative;
  z-index: 10;
`,sp=P.select`
  width: 100%;
  min-width: 350px;
  margin-bottom: 16px;
  appearance: none;
  -webkit-appearance: none;
  text-align: center;
  padding: 16px 20px;
  background-color: #f8f9fa;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  color: #333;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: ${a=>a.mainColor||"#e7333c"};
    background: white;
    box-shadow: 0 0 0 3px ${a=>a.mainColor?`${a.mainColor}20`:"rgba(231, 51, 60, 0.1)"};
  }
  
  &:hover {
    border-color: #d1d5db;
    background: white;
  }
  
  @media (max-width: 768px) {
    padding: 14px 16px;
    font-size: 16px;
    min-width: 280px;
  }
  
  @media (max-width: 480px) {
    min-width: 240px;
  }
`,op=P.div`
  position: absolute;
  top: -2px;
  right: 12px;
  padding: 4px 8px;
  text-align: center;
  font-weight: 600;
  background: ${a=>a.mainColor||"#e7333c"};
  color: white;
  border-radius: 4px;
  font-size: 12px;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 11px;
    padding: 3px 6px;
  }
`,up=P.p`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: left;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Hc=P.div`
  width: 100%;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  color: ${a=>a.isSecondary?a.mainColor||"#e7333c":"white"};
  background: ${a=>a.isSecondary?"white":`linear-gradient(135deg, ${a.mainColor||"#e7333c"}, ${a.mainColor?`${a.mainColor}dd`:"#d12b35"})`};
  border: ${a=>a.isSecondary?`2px solid ${a.mainColor||"#e7333c"}`:"none"};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${a=>a.mainColor?`${a.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
    ${a=>a.isSecondary&&`
      background: ${a.mainColor||"#e7333c"};
      color: white;
    `}
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    padding: 14px 20px;
    font-size: 15px;
  }
`,C2=P.p`
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  width: 100%;
  margin: 0 auto 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`,cp=P.div`
  display: flex;
  width: 100%;
  max-width: 280px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    max-width: 240px;
  }
`,fp=P.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #e1e5e9;
  gap: 8px;
  padding: 16px 12px;
  width: 100%;
  background: #f8f9fa;
  
  span {
    font-size: 12px;
    font-weight: 600;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  @media (max-width: 768px) {
    padding: 14px 10px;
  }
`,dp=P.div`
  padding: 40px 32px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 32px 24px 20px 24px;
  }
`,k2=Ft`   
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`,N2=P.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${k2} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  & div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #000;
    margin: -4px 0 0 -4px;
  }
  & div:nth-child(1) {
    animation-delay: -0.036s;
  }
  & div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  & div:nth-child(2) {
    animation-delay: -0.072s;
  }
  & div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  & div:nth-child(3) {
    animation-delay: -0.108s;
  }
  & div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  & div:nth-child(4) {
    animation-delay: -0.144s;
  }
  & div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  & div:nth-child(5) {
    animation-delay: -0.18s;
  }
  & div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  & div:nth-child(6) {
    animation-delay: -0.216s;
  }
  & div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  & div:nth-child(7) {
    animation-delay: -0.252s;
  }
  & div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  & div:nth-child(8) {
    animation-delay: -0.288s;
  }
  & div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
`,M2=({useOneChartForAllProducts:a,forceOpen:r,mainColor:o})=>{const u=G.useRef(null),[c,d]=G.useState(r||!1),[p,g]=G.useState(!1),[w,x]=G.useState(!1),[b,A]=G.useState(0),[E,$]=G.useState(0),[M,V]=G.useState(),[R,K]=G.useState(),[H,Q]=G.useState(),[le,U]=G.useState(),[te,ne]=G.useState(!1),[fe,de]=G.useState();G.useEffect(()=>{if(g(!0),typeof window<"u"){let W="-1";!a&&window.productDetailModel?.product?.urunKartiId?W=window.productDetailModel.product.urunKartiId.toString():a||(W="1"),Le.get(`https://api.upsell.co/sizechart/byproductcard/${W}`).then(re=>{re.data&&re.data.data&&re.data.data.items?de(re.data.data.items):de([{chartId:1,id:"1",maxHeight:170,maxWeight:70,minHeight:160,minWeight:50,title:"S"},{chartId:1,id:"2",maxHeight:180,maxWeight:80,minHeight:170,minWeight:65,title:"M"},{chartId:1,id:"3",maxHeight:190,maxWeight:90,minHeight:180,minWeight:75,title:"L"},{chartId:1,id:"4",maxHeight:200,maxWeight:100,minHeight:190,minWeight:85,title:"XL"}])}).catch(re=>{de([{chartId:1,id:"1",maxHeight:170,maxWeight:70,minHeight:160,minWeight:50,title:"S"},{chartId:1,id:"2",maxHeight:180,maxWeight:80,minHeight:170,minWeight:65,title:"M"},{chartId:1,id:"3",maxHeight:190,maxWeight:90,minHeight:180,minWeight:75,title:"L"},{chartId:1,id:"4",maxHeight:200,maxWeight:100,minHeight:190,minWeight:85,title:"XL"}])}).finally(()=>{g(!1)})}},[a]);const Te=()=>{d(!1),ne(!1),x(!1),$(0),A(0)};u!==null&&Wi(u,Te),G.useEffect(()=>(r?d(!0):typeof window<"u"&&(document.getElementById("upsell-ss-sizechart")?.addEventListener("click",()=>{d(!0)}),document.getElementById("upsell-ss-sizechart")&&!fe?.filter(W=>window.productDetailModel?.productVariantData?.find(re=>re.tanim===W.title))?document.getElementById("upsell-ss-sizechart").style.display="none":document.getElementById("upsell-ss-sizechart")&&(document.getElementById("upsell-ss-sizechart").style.display="flex")),()=>{document.getElementById("upsell-ss-sizechart")?.removeEventListener("click",()=>{})}),[fe]);const Re=()=>{const W=[];return typeof window<"u"&&fe?.filter(re=>re.minHeight<=E&&re.maxHeight>=E&&re.minWeight<=b&&re.maxWeight>=b).forEach(re=>{const ge=(window.productDetailModel?.productVariantData||[{tanim:"S"},{tanim:"M"},{tanim:"L"},{tanim:"XL"}]).find(O=>re.title===O.tanim);ge&&W.push(ge)}),W};return G.useEffect(()=>{Re()},[E,b]),G.useEffect(()=>{if(fe&&fe?.length>0){const W=fe?.reduce((O,Z)=>Z.minHeight<O.minHeight?Z:O,fe?.[0]),re=fe?.reduce((O,Z)=>Z.maxHeight>O.maxHeight?Z:O,fe?.[0]),be=fe?.reduce((O,Z)=>Z.minWeight<O.minWeight?Z:O,fe?.[0]),ge=fe?.reduce((O,Z)=>Z.maxWeight>O.maxWeight?Z:O,fe?.[0]);V(W),K(re),Q(be),U(ge)}},[fe]),typeof window>"u"?null:f.jsx(f.Fragment,{children:f.jsxs(j2,{style:{display:!w&&!c?"none":"block"},children:[w&&f.jsxs(D2,{mainColor:o,children:[f.jsx(O2,{onClick:()=>{x(!1)},children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:f.jsx("path",{d:"m12 4-8 8 8 8 .677-.677-6.844-6.844H20v-.958H5.833l6.844-6.844L12 4Z"})})}),f.jsx(lp,{onClick:()=>{Te()},children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:f.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),f.jsxs(dp,{children:[f.jsx(gf,{mainColor:o,children:"Beden Öneri Rehberi"}),f.jsx(xf,{mainColor:o,children:"Sizin için en uygun beden:"}),f.jsx(C2,{children:Re().length>0?f.jsxs(cp,{children:[f.jsx("img",{style:{width:"100%",aspectRatio:"8/12",objectFit:"cover"},src:window.productDetailModel?.productImages?.[0]?.imagePath||"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDIwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik02MCA5MEg2NVY5NUg2MFY5MFpNMTQwIDkwSDE0NVY5NUgxNDBWOTBaIiBmaWxsPSIjOEE5MUE4Ii8+CjxwYXRoIGQ9Ik01NSA4MEgxNTBWMjIwSDU1VjgwWiIgc3Ryb2tlPSIjOEE5MUE4IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz4KPHN2Zz4K",alt:"Ürün Resmi"}),f.jsxs(fp,{children:[f.jsx("span",{children:"SİZİN BEDENİNİZ OLABİLİR"}),Re()[0]?.tanim||"Bulunamadı"]})]}):f.jsxs(cp,{children:[f.jsx("div",{style:{width:"100%",aspectRatio:"8/12",display:"flex",justifyContent:"center",alignItems:"center"},children:f.jsx("svg",{style:{width:"100px"},viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"#e7333c",children:f.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),f.jsxs(fp,{children:[f.jsx("span",{children:"ÖNERİ YAPILAMADI"}),"Üzgünüz,bu özellikler için beden öneremiyoruz."]})]})})]}),f.jsxs(rp,{children:[f.jsx(Hc,{mainColor:o,onClick:()=>{x(!1),$(0),A(0),ne(!1)},children:"Baştan Başla"}),f.jsx(Hc,{mainColor:o,isSecondary:!0,onClick:()=>{Te()},children:"Çıkış Yap"})]})]}),c&&!w&&f.jsxs(_2,{ref:u,mainColor:o,children:[p&&f.jsx(mr,{children:f.jsxs(N2,{children:[f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{})]})}),!w&&f.jsxs(f.Fragment,{children:[f.jsx(lp,{onClick:()=>{Te()},children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:f.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),f.jsxs(R2,{children:[f.jsxs(dp,{children:[f.jsx(Ia,{mainColor:o,children:"Beden Öneri Rehberi"}),f.jsx(pr,{children:"Ölçülerinizi baz alarak size en uygun bedeni hesaplıyoruz."}),R&&M&&le&&H&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[f.jsxs("div",{children:[f.jsx(up,{children:"Boyunuzu Girin"}),f.jsxs("div",{style:{position:"relative"},children:[f.jsx(op,{mainColor:o,children:"CM"}),f.jsxs(sp,{mainColor:o,onChange:W=>{$(Number(W.target.value))},name:"height",id:"height",children:[f.jsx("option",{value:"0",children:"Seçiniz"}),Array.from({length:R?.maxHeight+1-M?.minHeight},(W,re)=>(M?.minHeight+re).toString()).map(W=>f.jsxs("option",{value:W,children:[W," cm"]},W))]})]}),E===0&&te&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Lütfen bir boyunuzu giriniz."})})]}),f.jsxs("div",{children:[f.jsx(up,{children:"Kilonuzu Girin"}),f.jsxs("div",{style:{position:"relative"},children:[f.jsx(op,{mainColor:o,children:"KG"}),f.jsxs(sp,{mainColor:o,onChange:W=>{A(Number(W.target.value))},name:"weight",id:"weight",children:[f.jsx("option",{value:"0",children:"Seçiniz"}),Array.from({length:le.maxWeight+1-H.minWeight},(W,re)=>(H.minWeight+re).toString()).map(W=>f.jsxs("option",{value:W,children:[W," kg"]},W))]})]}),!b&&te&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Lütfen kilonuzu giriniz"})})]})]})]}),f.jsxs(rp,{children:[f.jsx(Hc,{mainColor:o,onClick:()=>{ne(!0),E&&b&&b!==0&&E!==0&&x(!0)},children:"Devam Et"}),f.jsxs(co,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})]})]})]})]})})},U2=Ft`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,B2=Ft`   
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,H2=P.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${B2} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  & div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #e7333c;
    margin: -4px 0 0 -4px;
    box-shadow: 0 0 4px rgba(231, 51, 60, 0.5);
  }
  & div:nth-child(1) {
    animation-delay: -0.036s;
  }
  & div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  & div:nth-child(2) {
    animation-delay: -0.072s;
  }
  & div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  & div:nth-child(3) {
    animation-delay: -0.108s;
  }
  & div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  & div:nth-child(4) {
    animation-delay: -0.144s;
  }
  & div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  & div:nth-child(5) {
    animation-delay: -0.18s;
  }
  & div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  & div:nth-child(6) {
    animation-delay: -0.216s;
  }
  & div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  & div:nth-child(7) {
    animation-delay: -0.252s;
  }
  & div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  & div:nth-child(8) {
    animation-delay: -0.288s;
  }
  & div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
`,L2=P.div`
  margin: auto;
  background: white;
  border-radius: 20px;
  width: 85%;
  max-width: 450px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.3);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 60deg,
      ${a=>a.mainColor||"#e7333c"}dd 90deg,
      ${a=>a.mainColor||"#e7333c"} 110deg,
      ${a=>a.mainColor||"#e7333c"} 120deg,
      ${a=>a.mainColor||"#e7333c"} 130deg,
      ${a=>a.mainColor||"#e7333c"}dd 150deg,
      transparent 180deg,
      transparent 360deg
    );
    border-radius: 24px;
    z-index: -1;
    animation: ${U2} 8s linear infinite;
    opacity: ${a=>a.mainColor?"1":"0.8"};
  }

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: white;
    border-radius: 18px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 90%;
    border-radius: 16px;

    &::before {
      border-radius: 20px;
    }

    &::after {
      border-radius: 14px;
    }
  }
`,q2=({color:a})=>{const[r,o]=G.useState(null),[u,c]=G.useState(!1),[d,p]=G.useState(!1),[g,w]=G.useState(!1),x=G.useRef(null);G.useEffect(()=>{x.current=document.querySelector("#upsell-ss-responsive"),w(!0)},[]);const{register:b,handleSubmit:A,formState:{errors:E}}=dr(),$=A(async V=>{p(!0),c(!1),o(null);try{const K=(await Le.post("https://api.upsell.co/ticimax/order",{phone:"90"+V.phone})).data;!K.data||K.data===null?c(!0):o(K.data)}catch{c(!0)}finally{p(!1)}}),M=()=>{o(null),c(!1)};return g&&x.current?Em.createPortal(f.jsx(L2,{mainColor:a,children:f.jsxs(fo,{children:[f.jsx(vf,{mainColor:a}),f.jsx(bf,{mainColor:a}),f.jsx(Sf,{mainColor:a}),d&&f.jsx(mr,{children:f.jsx(H2,{children:Array.from({length:8}).map((V,R)=>f.jsx("div",{},R))})}),r?f.jsxs(Qi,{children:[f.jsx(Ia,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş No"}),f.jsx("div",{style:{width:"50%"},children:r.siparisNo||"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş Tarihi"}),f.jsx("div",{style:{width:"50%"},children:new Date(r.siparisTarihi).toLocaleDateString("tr-TR")||"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş Durumu"}),f.jsx("div",{style:{width:"50%"},children:r.siparisDurumu||"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Takip Link"}),f.jsx("div",{style:{width:"50%"},children:r.kargoTakipLink?f.jsx("a",{target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:a||"#e7333c"},href:r.kargoTakipLink,children:"Kargoyu Görüntüle"}):"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Takip No"}),f.jsx("div",{style:{width:"50%"},children:r.kargoTakipNo||"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Firma"}),f.jsx("div",{style:{width:"50%"},children:r.kargoFirmaTanim||"-"})]}),f.jsx("div",{children:f.jsx(rr,{mainColor:a,onClick:M,type:"button",children:"Yeni Sorgu Yap"})})]}):f.jsxs(Qi,{children:[f.jsx(Ia,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),f.jsx(pr,{children:"Siparişinizin kargo takibini yapmak için telefon numaranızı giriniz."}),f.jsxs("form",{onSubmit:$,children:[f.jsx(Ta,{mainColor:a,type:"text",...b("phone",{required:"Telefon numarası boş bırakılamaz",pattern:{value:/^[0-9]{10}$/,message:"Geçerli bir telefon numarası giriniz"}}),placeholder:"5XXXXXXXXX",maxLength:10}),E.phone&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:E.phone.message})}),f.jsxs(oo,{children:[f.jsx(uo,{mainColor:a,...b("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",f.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",rel:"noopener noreferrer",children:"Aydınlatma metni için tıklayın."})]})]}),E.kvkk&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center",marginBottom:"10px"},children:E.kvkk.message})}),u&&f.jsx(Tt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Telefon numarası ile eşleşen sipariş bulunamadı."})}),f.jsx("div",{children:f.jsx(rr,{mainColor:a,children:"Sorgula"})})]})]})]})}),x.current):null},V2=Ft`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Y2=P.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }

  span {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1;
  }
`,G2=P.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 12px 16px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 12px 12px 10px 12px;
  }
`;P.img`
  aspect-ratio: 5/2;
  height: 70px;
  margin: auto;
  object-fit: contain;
  margin-top: 20px;
`;const hp=P.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${a=>a.mainColor||"#333"};
  margin: 0 0 8px 0;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 6px 0;
  }
`;P.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 32px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`;const X2=P.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  font-size: 14px;
  background: #f8f9fa;
  transition: all 0.3s ease;
  margin-bottom: 8px;
  box-sizing: border-box;

  &::placeholder {
    color: #9ca3af;
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border-color: ${a=>a.mainColor||"#e7333c"};
    background: white;
    box-shadow: 0 0 0 3px
      ${a=>a.mainColor?`${a.mainColor}20`:"rgba(231, 51, 60, 0.1)"};
  }

  &:hover {
    border-color: #d1d5db;
    background: white;
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 15px;
  }
`,Lc=P.div`
  color: #e40000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`,Z2=P.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 20px 0;
  text-align: left;
`,$2=P.input`
  width: 20px;
  height: 20px;
  min-width: 20px;
  margin: 0;
  cursor: pointer;
  accent-color: ${a=>a.mainColor||"#e7333c"};

  &:focus {
    outline: 2px solid
      ${a=>a.mainColor?`${a.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
    outline-offset: 2px;
  }
`,Q2=P.button`
  width: 100%;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  background: linear-gradient(
    135deg,
    ${a=>a.mainColor||"#e7333c"},
    ${a=>a.mainColor?`${a.mainColor}dd`:"#d12b35"}
  );
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 4px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px
      ${a=>a.mainColor?`${a.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
  }
`;P.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ffffff80;
  z-index: 1;
`;const K2=P.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 32px 20px 32px;
  padding-top: 16px;
  font-size: 12px;
  gap: 6px;
  font-weight: 500;
  color: #666;
  text-decoration: none;
  border-top: 1px solid #e1e5e9;

  &:hover {
    color: #333;
  }

  svg {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    margin: 20px 24px 16px 24px;
    padding-top: 14px;
  }
`,J2=P.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
  border-radius: 16px;
  margin: 16px 0;

  @media (max-width: 768px) {
    padding: 16px;
    margin: 12px 0;
  }

  @media (max-width: 480px) {
    padding: 12px;
    margin: 8px 0;
    border-radius: 12px;
  }
`,F2=P.h1`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin: 16px 0;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    ${a=>a.mainColor||"#28a745"},
    ${a=>a.mainColor?`${a.mainColor}dd`:"#1e7e34"}
  );
  padding: 12px 20px;
  text-align: center;
  box-shadow: 0 4px 15px
    ${a=>a.mainColor?`${a.mainColor}40`:"rgba(40, 167, 69, 0.3)"};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 16px;
    margin: 12px 0;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 12px;
    margin: 8px 0;
    border-radius: 8px;
  }
`,W2=P.p`
  text-align: center;
  font-size: 15px;
  line-height: 1.6;
  color: #333;
  width: 100%;
  margin: 8px auto 16px;
  font-weight: 500;
`,I2=P.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  animation: fadeInSmooth 0.2s ease-out;

  @keyframes fadeInSmooth {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,P2=P.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 12px;
  border-radius: 20px;
  width: 85%;
  max-width: 450px;
  overflow: hidden;
  background: white;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.3);
  animation: slideInSmooth 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;

  @keyframes slideInSmooth {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.95) translateZ(0);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1) translateZ(0);
    }
  }

  /* Gezen ışık efekti */
  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 60deg,
      ${a=>a.mainColor}dd 90deg,
      ${a=>a.mainColor} 110deg,
      ${a=>a.mainColor} 120deg,
      ${a=>a.mainColor} 130deg,
      ${a=>a.mainColor}dd 150deg,
      transparent 180deg,
      transparent 360deg
    );
    border-radius: 20px;
    z-index: -1;
    animation: ${V2} 8s linear infinite;
    opacity: ${a=>a.mainColor?"1":"0"};
  }

  /* Modal'ın ana arka planı için beyaz maske */
  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: white;
    border-radius: 14px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 90%;
    border-radius: 14px;

    &::before {
      border-radius: 18px;
    }

    &::after {
      border-radius: 12px;
    }
  }
`,ev=P.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 10px 16px 30px 16px;
  border-radius: 240px 240px 8px 8px;
`;P.div`
  display: flex;
  width: 100%;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 468px) {
    flex-direction: column;
    gap: 0;
  }
`;const tv=P.div`
  font-size: 24px;
  font-weight: 800;
  font-family: "Courier New", monospace;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  color: #212529;
  padding: 16px 24px;
  margin: 16px 0;
  border-radius: 12px;
  border: 2px dashed #28a745;
  position: relative;
  text-align: center;
  letter-spacing: 2px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 14px 20px;
    letter-spacing: 1px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 12px 16px;
  }
`,nv=P.button`
  background: linear-gradient(
    135deg,
    ${a=>a.mainColor||"#28a745"},
    ${a=>a.mainColor?`${a.mainColor}dd`:"#1e7e34"}
  );
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  margin-top: 16px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "📋";
    margin-right: 8px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px
      ${a=>a.mainColor?`${a.mainColor}40`:"rgba(40, 167, 69, 0.4)"};
  }

  &:active {
    transform: translateY(0);
  }

  &.copied {
    background: #28a745;

    &::before {
      content: "✅";
    }
  }

  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 8px 20px;
    font-size: 14px;
  }
`,av=P.button`
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 180px;
  background: linear-gradient(
    135deg,
    ${a=>a.mainColor||"#e7333c"},
    ${a=>a.mainColor?`${a.mainColor}dd`:"#d12b35"}
  );
  border: none;
  border-radius: 30px;
  cursor: pointer;
  z-index: 9998;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
  padding: 16px 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  letter-spacing: 1px;

  /* Glow effect */
  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      45deg,
      ${a=>a.mainColor||"#e7333c"}40,
      transparent,
      ${a=>a.mainColor||"#e7333c"}40
    );
    border-radius: 32px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-50%) translateX(5px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-50%) translateX(2px) scale(0.98);
  }

  /* Gift icon */
  .gift-icon {
    font-size: 24px;
    margin-top: 4px;
    animation: bounce 2s infinite;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: white;
      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
      transition: transform 0.3s ease;
    }
  }

  &:hover .gift-icon svg {
    transform: rotate(180deg);
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-4px);
    }
    60% {
      transform: translateY(-2px);
    }
  }

  /* Pulse effect for attention */
  &.pulse {
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15),
        0 0 0 0 ${a=>a.mainColor||"#e7333c"}40;
    }
    70% {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15), 0 0 0 10px transparent;
    }
    100% {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15), 0 0 0 0 transparent;
    }
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    width: 55px;
    height: 150px;
    left: 15px;
    font-size: 11px;
    padding: 16px 8px;
    border-radius: 27px;

    .gift-icon {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 130px;
    left: 10px;
    font-size: 10px;
    padding: 14px 7px;
    border-radius: 25px;

    .gift-icon {
      font-size: 18px;
    }
  }

  @media (max-width: 414px) {
    width: 47px;
    height: 120px;
    left: 8px;
    font-size: 9px;
    padding: 12px 6px;
    border-radius: 23px;

    .gift-icon {
      font-size: 16px;
    }
  }

  /* Very small screens - make it smaller but keep it visible */
  @media (max-width: 360px) {
    width: 44px;
    height: 110px;
    left: 6px;
    font-size: 8px;
    padding: 10px 5px;
    border-radius: 22px;

    .gift-icon {
      font-size: 14px;
    }
  }
`,iv=P.span`
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
  margin-top: 4px;
  transform: rotate(180deg);
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 11px;
    letter-spacing: 0.3px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    letter-spacing: 0.2px;
  }

  @media (max-width: 414px) {
    font-size: 9px;
    letter-spacing: 0.1px;
  }

  @media (max-width: 360px) {
    font-size: 8px;
    letter-spacing: 0px;
  }
`,lv=({mainColor:a,logo:r,forceOpen:o,showFloatingButton:u=!0})=>{const[c,d]=G.useState(o||!1),[p,g]=G.useState(null),[w,x]=G.useState(""),[b,A]=G.useState(!1),[E,$]=G.useState([]),[M,V]=G.useState(0),[R,K]=G.useState(null),[H,Q]=G.useState(!1),[le,U]=G.useState(0),[te,ne]=G.useState(!1),[fe,de]=G.useState(null),[Te,Re]=G.useState(!1),[W,re]=G.useState(!0),[be,ge]=G.useState(null),O=G.useRef(null),{register:Z,handleSubmit:ue,formState:{errors:ee}}=dr(),y=()=>{d(!1);const Ee=new Date;Ee.setDate(Ee.getDate()+Number(le));const ye="expires="+Ee.toUTCString();document.cookie=`upsellGiftWheel=false;${ye};path=/`},C=()=>{const Ee=localStorage.getItem("upsellGiftWheelPrize");if(!Ee)return!0;try{const ye=JSON.parse(Ee);if(!ye.timestamp)return!0;const Ye=Date.now(),He=ye.timestamp,gt=24*60*60*1e3;return Ye-He>gt}catch{return!0}},F=()=>C()?(localStorage.removeItem("upsellGiftWheelPrize"),g(null),ge(null),!0):!1,J=async()=>{if(re(!1),x(""),F(),(p||be)&&!C()){A(!0),d(!0);return}const Ee=localStorage.getItem("upsellGiftWheelPrize");if(Ee&&!C())try{const ye=JSON.parse(Ee);ge(ye),g(ye),A(!0),d(!0);return}catch{localStorage.removeItem("upsellGiftWheelPrize")}A(!1),g(null),ge(null),d(!0),E.length===0?Nt():setTimeout(()=>{xe()},50)};O!==null&&Wi(O,()=>y());const Se=async Ee=>{try{await navigator.clipboard.writeText(Ee),Re(!0),setTimeout(()=>Re(!1),2e3)}catch{}},se=(Ee,ye,Ye,He)=>{const gt=He*Math.PI/180;return{x:Ee+Ye*Math.cos(gt),y:ye+Ye*Math.sin(gt)}},je=(Ee,ye=4e3)=>{if(!R)return;const Ye=Date.now(),He=M,gt=Ee,nt=1800,Nn=.985,Wt=10;let S=nt,j=He,L=Ye;const ie=()=>{const I=Date.now(),oe=(I-L)/1e3;L=I,S*=Math.pow(Nn,oe*60);const Ae=S*oe;j+=Ae;const De=Math.min((I-Ye)/ye,1),qt=1-Math.pow(1-De,3),Mt=Math.pow(De,2),ja=j,Ut=He+(gt-He)*qt,rt=ja*(1-Mt)+Ut*Mt;if(R.style.transform=`rotate(${rt}deg)`,S>500){const Bt=Math.min(S/200,3);R.style.filter=`blur(${Bt}px)`}else R.style.filter="none";if(De<1&&S>Wt){const Bt=requestAnimationFrame(ie);de(Bt)}else R.style.transform=`rotate(${gt}deg)`,R.style.filter="none",V(gt),de(null),setTimeout(()=>{A(!0)},500)},ae=requestAnimationFrame(ie);de(ae)},xe=()=>{const Ee=document.querySelector(".sectors"),ye=document.querySelector(".gift-wheel-texts");if(!Ee||!ye){setTimeout(()=>{const Ye=document.querySelector(".sectors"),He=document.querySelector(".gift-wheel-texts");Ye&&He&&Ve(Ye,He)},100);return}Ve(Ee,ye)},Ve=(Ee,ye)=>{Ee.innerHTML="",ye.innerHTML="";const Ye=200,He=200,gt=170,nt=50,Nn=360/E.length;E.forEach((Wt,S)=>{const j=S*Nn,L=j+Nn,ie=j+Nn/2,ae=se(Ye,He,gt,L),I=se(Ye,He,gt,j),oe=se(Ye,He,nt,L),Ae=se(Ye,He,nt,j),De=L-j<=180?0:1,Ze=`M${oe.x},${oe.y} L${ae.x},${ae.y} A${gt},${gt} 0 ${De} 0 ${I.x},${I.y} L${Ae.x},${Ae.y} A${nt},${nt} 0 ${De} 1 ${oe.x},${oe.y} Z`,qt=document.createElementNS("http://www.w3.org/2000/svg","path");qt.setAttribute("d",Ze);const Mt=Wt.color||(S%2===0?a||"#e7333c":"#ffffff");qt.setAttribute("fill",Mt),qt.setAttribute("stroke","#fff"),qt.setAttribute("stroke-width","10"),Ee.appendChild(qt);const ja=(gt+nt)/2,Ut=se(Ye,He,ja,ie),rt=document.createElementNS("http://www.w3.org/2000/svg","text");rt.setAttribute("x",Ut.x.toString()),rt.setAttribute("y",Ut.y.toString()),rt.setAttribute("text-anchor","middle"),rt.setAttribute("dominant-baseline","middle"),rt.setAttribute("font-size","16"),rt.setAttribute("font-weight","700");const Bt=Un=>{const ea=Un.replace("#",""),gr=parseInt(ea.substr(0,2),16),xr=parseInt(ea.substr(2,2),16),Ii=parseInt(ea.substr(4,2),16);return(gr*299+xr*587+Ii*114)/1e3>128?"#000":"#fff"},Mn=Wt.color?Bt(Wt.color):S%2===0?"#fff":"#333";rt.setAttribute("fill",Mn),rt.setAttribute("transform",`rotate(${ie} ${Ut.x} ${Ut.y})`),rt.textContent=Wt.text,ye.appendChild(rt)})},mt=ue(async Ee=>{H||te||(Q(!0),ne(!0),x(""),await Le.post("https://api.upsell.co/GiftWheel/Spin",{phoneNumber:Ee.phone}).then(ye=>{var Ye=ye.data;if(Ye.success){const He=Ye.data.sliceIndex;if(typeof He=="number"&&!isNaN(He)){const nt=360/E.length,S=((360-(He*nt+nt/2))%360+360)%360,j=M+360*5+S;R&&(fe&&(cancelAnimationFrame(fe),de(null)),R.style.transformOrigin="200px 200px",R.style.transition="none",R.style.webkitTransition="none",je(j,4e3)),g(ye.data.data),ge(ye.data.data);const L={...ye.data.data,timestamp:Date.now()};localStorage.setItem("upsellGiftWheelPrize",JSON.stringify(L));const ie=new Date;ie.setDate(ie.getDate()+le);const ae="expires="+ie.toUTCString();document.cookie=`upsellGiftWheel=true;${ae};path=/`}else x("Sunucudan geçersiz veri alındı.")}else x(Ye.message)}).catch(()=>{x("Bağlantı hatası oluştu. Lütfen tekrar deneyiniz.")}).finally(()=>{setTimeout(()=>{Q(!1),ne(!1)},4500)}))}),Nt=async()=>{try{const ye=(await Le.post("https://api.upsell.co/GiftWheel/Slices",{})).data;ye.success?($(ye.data.slices),U(ye.data.frequency)):x("Hediye çarkı yüklenemedi.")}catch{x("Bağlantı hatası oluştu. Lütfen tekrar deneyiniz.")}};return G.useEffect(()=>{Nt(),F()},[]),G.useEffect(()=>{E.length>0&&c&&setTimeout(()=>{xe()},100)},[E,c]),G.useEffect(()=>{if(R&&!H&&!te){R.style.transition="transform 2s ease-in-out";const ye=setInterval(()=>{if(!H&&!te&&R){const Ye=M+Math.sin(Date.now()/3e3)*.5;R.style.transform=`rotate(${Ye}deg)`}},100);return()=>{clearInterval(ye),R&&(R.style.transition="none",R.style.transform=`rotate(${M}deg)`)}}},[R,H,te,M]),G.useEffect(()=>{if(o)(async()=>{F();const ye=localStorage.getItem("upsellGiftWheelPrize");if(ye&&!C()||(p||be)&&!C()){if(ye&&!p&&!be&&!C())try{const He=JSON.parse(ye);ge(He),g(He)}catch{localStorage.removeItem("upsellGiftWheelPrize"),A(!1),g(null),ge(null),d(!0);return}A(!0),d(!0)}else A(!1),g(null),ge(null),d(!0),E.length===0||setTimeout(()=>{xe()},50)})();else if(typeof window<"u"){if(document.cookie.split(";").some(ye=>ye.trim().startsWith("upsellGiftWheel=")))return;const Ee=setTimeout(async()=>{F();const ye=localStorage.getItem("upsellGiftWheelPrize");if(ye&&!C()||(p||be)&&!C()){if(ye&&!p&&!be&&!C())try{const He=JSON.parse(ye);ge(He),g(He)}catch{localStorage.removeItem("upsellGiftWheelPrize");return}A(!0),d(!0)}else A(!1),g(null),ge(null),d(!0),E.length===0||setTimeout(()=>{xe()},50)},6e4);return()=>{clearTimeout(Ee)}}},[o]),G.useEffect(()=>()=>{fe&&cancelAnimationFrame(fe)},[fe]),G.useEffect(()=>{if(typeof window<"u")if(document.cookie.split(";").some(ye=>ye.trim().startsWith("upsellGiftWheel=")))re(!1);else{const ye=setTimeout(()=>{re(!1)},1e4);return()=>clearTimeout(ye)}},[]),f.jsxs(f.Fragment,{children:[u&&!c&&f.jsxs(av,{mainColor:a,onClick:J,className:W?"pulse":"","aria-label":"Hediye Çarkını Aç",children:[f.jsx(iv,{children:"HEDİYE ÇARKI"}),f.jsx("div",{className:"gift-icon",children:f.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),f.jsx("path",{d:"M12 2 L12 22 M2 12 L22 12",stroke:"currentColor",strokeWidth:"1",opacity:"0.7"}),f.jsx("path",{d:"M5.64 5.64 L18.36 18.36 M18.36 5.64 L5.64 18.36",stroke:"currentColor",strokeWidth:"1",opacity:"0.7"}),f.jsx("circle",{cx:"12",cy:"12",r:"3",fill:"currentColor"}),f.jsx("path",{d:"M12 2 L14 6 L10 6 Z",fill:"currentColor"})]})})]}),f.jsx(I2,{style:{display:c?"block":"none"},children:c&&f.jsxs(P2,{ref:O,mainColor:a,children:[f.jsx(Y2,{onClick:y,children:f.jsx("span",{style:{color:"#000",float:"right",fontSize:"35px"},children:"×"})}),f.jsxs(ev,{children:[f.jsx(vf,{mainColor:a}),f.jsx(bf,{mainColor:a}),f.jsx(Sf,{mainColor:a}),f.jsxs(G2,{children:[f.jsx("div",{className:"gift-wheel",style:{marginBottom:"16px",position:"relative",display:b?"none":"flex",justifyContent:"center",cursor:H?"not-allowed":"pointer",transition:"all 0.3s ease",transform:H?"scale(1.02)":"scale(1)",minHeight:E.length===0?"320px":"auto",alignItems:"center"},children:E.length===0?f.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px",color:"#666",fontSize:"16px"},children:[w?f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{fontSize:"48px"},children:"⚠️"}),f.jsx("span",{style:{color:"#e40000",textAlign:"center"},children:w}),f.jsx("button",{onClick:()=>{x(""),Nt()},style:{padding:"8px 16px",background:a||"#e7333c",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"Tekrar Dene"})]}):f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{width:"40px",height:"40px",border:`3px solid ${a||"#e7333c"}20`,borderTop:`3px solid ${a||"#e7333c"}`,borderRadius:"50%",animation:"spin 1s linear infinite"}}),f.jsx("span",{children:"Hediye çarkı yükleniyor..."})]}),f.jsx("style",{children:`
                        @keyframes spin {
                          0% { transform: rotate(0deg); }
                          100% { transform: rotate(360deg); }
                        }
                      `})]}):f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",style:{width:"min(320px, 90vw)",height:"min(320px, 90vw)",maxWidth:"100%",pointerEvents:H?"none":"auto",filter:"drop-shadow(0 8px 25px rgba(0,0,0,0.15))",transition:"filter 0.3s ease"},children:[f.jsx("circle",{cx:"200",cy:"200",r:"190",fill:"none",stroke:"rgba(0,0,0,0.1)",strokeWidth:"8"}),f.jsxs("g",{className:"wheel",ref:Ee=>K(Ee),id:"wheel",style:{transformOrigin:"200px 200px"},children:[f.jsx("g",{className:"sectors"}),f.jsx("g",{className:"gift-wheel-texts",style:{fill:"#fff",fontSize:"16px",fontWeight:700,textAnchor:"middle"}})]}),f.jsx("circle",{cx:"200",cy:"200",r:"180",fill:"none",stroke:a||"#e7333c",strokeWidth:"6"}),f.jsx("circle",{cx:"200",cy:"200",r:"170",fill:"none",stroke:"#ffffff",strokeWidth:"2"}),f.jsx("circle",{cx:"200",cy:"200",r:"45",fill:"#ffffff",stroke:a||"#e7333c",strokeWidth:"3"}),r&&f.jsx("image",{href:r,x:"170",y:"170",width:"60",height:"60",style:{objectFit:"contain"}}),f.jsx("g",{transform:"translate(200, 200)",children:f.jsx("g",{transform:"rotate(0) translate(185, 0)",children:f.jsx("polygon",{points:"-15,0 0,12 15,0 0,-12",fill:a||"#e7333c",stroke:"#ffffff",strokeWidth:"2",style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.3))"}})})})]})}),b&&f.jsxs(J2,{children:[f.jsx(hp,{mainColor:a,children:"🎊 Tebrikler! Hediye Çarkından Kazandınız! 🎁"}),f.jsxs(F2,{mainColor:a,children:[f.jsxs("strong",{children:[p.validDayCount," gün"]})," geçerli"," ",f.jsxs("strong",{children:[p.discountValue.toFixed(2),p.discountType===1?" TL":"%"]})," ","indirim kuponu kazandınız!"]}),f.jsx(W2,{children:"Kupon kodunuzu kopyalayın ve alışverişinizde kullanın"}),f.jsx(tv,{children:p.couponCode}),f.jsx(nv,{mainColor:a,className:Te?"copied":"",onClick:()=>Se(p.couponCode),children:Te?"Kopyalandı!":"Kodu Kopyala"})]}),!b&&f.jsxs(f.Fragment,{children:[f.jsx(hp,{mainColor:a,children:"Hediye Çarkı"}),f.jsxs("form",{style:{display:"flex",flexDirection:"column",width:"90%",margin:"0 auto"},onSubmit:Ee=>mt(Ee),children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(X2,{mainColor:a,type:"string",...Z("phone",{required:"Telefon boş bırakılamaz",pattern:{value:/^[0-9]{10}$/,message:"Telefon numarası 10 haneli olmalıdır"}}),placeholder:"5XXXXXXXXX",maxLength:10}),ee.phone&&f.jsx(Lc,{children:ee?.phone?.message?.toString()??null})]}),f.jsxs(Z2,{children:[f.jsx($2,{mainColor:a,...Z("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",f.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},id:"kvkkLink",href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",children:"Aydınlatma metni için tıklayın"}),"."]})]}),ee.kvkk&&f.jsx(Lc,{children:ee?.kvkk?.message?.toString()??null}),w&&f.jsx(Lc,{children:w}),f.jsx("div",{style:{marginTop:"4px"},children:f.jsx(Q2,{mainColor:a,disabled:H||te,style:{opacity:H||te?.6:1,cursor:H||te?"not-allowed":"pointer"},children:H?"Çark Dönüyor...":"Çarkı Çevir"})})]})]})]})]}),f.jsxs(K2,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})})]})},rv=Ft`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,sv=P.div`
  position: fixed;
  bottom: ${a=>a.open?a.bottom:"-300px"};
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  width: 336px;
  background: white;
  border-radius: 13px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: bottom 0.3s ease-in-out;
  z-index: 1000;
  font-size: 11px;
  color: ${a=>a.mainColor};
  
  /* Gezen ışık efekti */
  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 60deg,
      ${a=>a.mainColor}dd 90deg,
      ${a=>a.mainColor} 110deg,
      ${a=>a.mainColor} 120deg,
      ${a=>a.mainColor} 130deg,
      ${a=>a.mainColor}dd 150deg,
      transparent 180deg,
      transparent 360deg
    );
    border-radius: 15px;
    z-index: -1;
    animation: ${rv} 8s linear infinite;
    opacity: ${a=>a.mainColor?"0.8":"0"};
  }
  
  /* Arka plan maskesi */
  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    background: white;
    border-radius: 12px;
    z-index: -1;
  }

  @media (max-width: 767px) {
    width: 256px;
    border-radius: 12px;
    
    &::before {
      border-radius: 12px;
    }
    
    &::after {
      border-radius: 9px;
    }
  }
  
  @media (max-width: 480px) {
    width: 224px;
  }
`,ov=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 16px;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  height: 48px;
  font-weight: 600;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 13px;
  margin: 13px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 767px) {
    padding: 11px 13px;
    height: 44px;
    font-size: 11px;
    margin: 10px;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 11px;
    height: 40px;
    font-size: 10px;
    margin: 8px;
  }
`;Ft`
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;const uv=Ft`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-10px) scale(0.9);
  }
`,pp=P.div`
  position: absolute;
  opacity: 0;
  transform: translateY(10px) scale(0.9);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
      gap: 10px;
  text-align: center;
  width: 100%;
  justify-content: center;

  &.active {
    opacity: 1;
    transform: translateY(0) scale(1);
    animation: slideInSmoothStat 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  
  @keyframes slideInSmoothStat {
    0% {
      opacity: 0;
      transform: translateY(10px) scale(0.95) translateZ(0);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1) translateZ(0);
    }
  }

  &.previous {
    opacity: 0;
    transform: translateY(-10px) scale(0.9);
    animation: ${uv} 0.6s ease-out;
  }

  i {
    background: linear-gradient(135deg, ${a=>a.mainColor}, ${a=>a.mainColor}dd);
    border-radius: 6px;
    padding: 6px;
    color: white;
    font-size: 13px;
    min-width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px ${a=>a.mainColor}40;
    transition: all 0.3s ease;
    
    @media (max-width: 767px) {
      padding: 5px;
      font-size: 14px;
      min-width: 22px;
      height: 22px;
      font-size: 11px;
    }
  }
`,cv=({mainColor:a,forceOpen:r})=>{const[o,u]=G.useState([]),[c,d]=G.useState(!1),[p,g]=G.useState(0),[w,x]=G.useState(r||!1),[b,A]=G.useState("50px"),[E,$]=G.useState(null),[M,V]=G.useState(null);return G.useEffect(()=>{if(!document.querySelector(".ProductBody")){x(!1);return}x(r||!0)},[r]),G.useEffect(()=>{async function R(){if(typeof window<"u"){const K=window.productDetailModel;let H=null;if(K&&K.productId?H=K.productId:H="1",H){d(!0);try{const Q=await Le.post("https://api.upsell.co/ProductStat/"+H,{},{headers:{"Content-Type":"application/json","Content-Length":"2"}});Q.data&&Q.data.data&&Q.data.data.length>0?u(Q.data.data):u([{text:"Son 24 saatte 15 kişi bu ürünü satın aldı",icon:"shopping-cart"},{text:"Bu ürünü 8 kişi favorilerine ekledi",icon:"heart"},{text:"Son 1 saatte 3 kişi bu ürünü görüntüledi",icon:"eye"},{text:"Bu ürün 12 kez sepete eklendi",icon:"plus-circle"}])}catch{u([{text:"Son 24 saatte 15 kişi bu ürünü satın aldı",icon:"shopping-cart"},{text:"Bu ürünü 8 kişi favorilerine ekledi",icon:"heart"},{text:"Son 1 saatte 3 kişi bu ürünü görüntüledi",icon:"eye"},{text:"Bu ürün 12 kez sepete eklendi",icon:"plus-circle"}])}finally{d(!1)}}}}R()},[]),G.useEffect(()=>{o.length>0&&E===null&&$(o[0])},[o,E]),G.useEffect(()=>{if(o.length>0){const R=setInterval(()=>{g(K=>(K+1)%o.length)},4e3);return()=>clearInterval(R)}},[o]),G.useEffect(()=>{if(o.length>0){V(E),$(o[p]);const R=setTimeout(()=>{V(null)},500);return()=>clearTimeout(R)}},[p,o]),G.useEffect(()=>{r&&x(!0)},[r]),G.useEffect(()=>{if(!r){const R=setTimeout(()=>{x(!0)},4e3);return()=>clearTimeout(R)}},[r]),G.useEffect(()=>{const R=()=>{const K=window.innerWidth<=768,H=K?"80px":"50px",Q=K?"155px":"125px";A(window.scrollY>1e3?Q:H)};return R(),window.addEventListener("scroll",R),window.addEventListener("resize",R),()=>{window.removeEventListener("scroll",R),window.removeEventListener("resize",R)}},[]),c||o.length===0?null:f.jsx(sv,{id:"social-proof-wrapper",open:w,bottom:b,mainColor:a,children:f.jsxs(ov,{children:[M&&f.jsxs(pp,{className:"previous",mainColor:a,children:[f.jsx("i",{className:`fa fa-${M.icon}`})," ",M.text]}),E&&f.jsxs(pp,{className:"active",mainColor:a,children:[f.jsx("i",{className:`fa fa-${E.icon}`})," ",E.text]})]})})};function fv(){const[a,r]=G.useState(),[o,u]=G.useState(!1);return G.useEffect(()=>{async function c(){u(!0);try{const d=document.querySelector(".ProductBody")!==null,p=await Le.get("https://api.upsell.co/Shops");if(p.data&&p.data.success&&p.data.data){const g=p.data.data;r({mainColor:g.mainColor||"#e7333c",logo:g.logo||"",enabledPhoneSubscription:g.enabledPhoneSubscription||!1,enabledEmailSubscription:g.enabledEmailSubscription||!1,enabledGiftWheel:g.enabledGiftWheel||!1,enabledProductStat:(g.enabledProductStat||!1)&&d,enabledOrderCheck:g.enabledOrderCheck||!1,enabledWeeklyProducts:g.enabledWeeklyProducts||!1,enabledStockReminder:g.enabledStockReminder||!1,enabledSizeChart:g.enabledSizeChart||!1,useOneChartForAllProducts:g.useOneChartForAllProducts||!1,stockReminderUsageChannel:g.stockReminderUsageChannel||1})}else console.error("API'den geçersiz veri formatı geldi")}catch(d){console.error("API çağrısı başarısız:",d)}finally{u(!1)}}c()},[]),G.useEffect(()=>{const c=new URLSearchParams(window.location.search),d=c.get("utm_source"),p=c.get("utm_medium"),g=c.get("utm_campaign");if(!(d==="upsell"))return;const x="uvid",b=localStorage.getItem(x),A=b||crypto.randomUUID();b||localStorage.setItem(x,A),Le.post("https://api.upsell.co/Tracking/CreateVisitor",{visitorId:A,path:window.location.pathname,productId:String(window.productDetailModel?.product.urunKartiId),utm:{source:d,medium:p,campaign:g}}).catch(()=>{})},[]),G.useEffect(()=>{const c="uvid",d=localStorage.getItem(c);if(!d)return;const p=window,g=p.orderCompletedModel,w=p.checkout_order,x=g?.orderId??w?.id??w?.orderId??null;x&&Le.post("https://api.upsell.co/Tracking/MatchOrder",{visitorId:d,orderId:String(x)}).then(()=>{localStorage.removeItem(c)}).catch(()=>{})},[]),o?f.jsx("div",{children:"Yükleniyor..."}):a?a.mainColor?a.logo?f.jsxs(f.Fragment,{children:[f.jsx(T2,{}),a.enabledWeeklyProducts&&f.jsx(d2,{mainColor:a.mainColor}),(a.enabledPhoneSubscription||a.enabledEmailSubscription)&&f.jsx(F5,{mainColor:a.mainColor,enabledPhoneSubscription:a.enabledPhoneSubscription,enabledEmailSubscription:a.enabledEmailSubscription}),a.enabledGiftWheel&&f.jsx(lv,{mainColor:a.mainColor}),a.enabledProductStat&&f.jsx(cv,{mainColor:a.mainColor}),a.enabledOrderCheck&&f.jsxs(f.Fragment,{children:[f.jsx(x2,{color:a.mainColor}),f.jsx(q2,{})]}),a.enabledStockReminder&&f.jsx(z2,{mainColor:a.mainColor,stockReminderUsageChannel:a.stockReminderUsageChannel}),a.enabledSizeChart&&a.useOneChartForAllProducts!==void 0&&f.jsx(M2,{useOneChartForAllProducts:a.useOneChartForAllProducts})]}):f.jsx("div",{children:"Mağaza logo bilgisi eksik"}):f.jsx("div",{children:"Mağaza renk bilgisi eksik"}):f.jsx("div",{children:"Mağaza bilgileri yüklenemedi"})}const mp=document.getElementById("upsell-style");mp?Zx.createRoot(mp).render(f.jsx(fv,{})):console.error("React root elementi bulunamadı: #upsell-style");
