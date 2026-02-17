(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function u(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(c){if(c.ep)return;c.ep=!0;const f=u(c);fetch(c.href,f)}})();(function(){if(!window.location.pathname.includes("/checkout"))return;let l=0;const r=3e5,u=setInterval(function(){const c=window.checkout_order,f=c?.id;f?(clearInterval(u),console.log("🟢 OrderId bulundu! İşlem başlatılıyor."),o(c,f)):l>=r&&(clearInterval(u),console.log("⏱️ Maksimum bekleme süresi doldu, işlem iptal edildi.")),l+=100},100);function o(c,f){const h="uvid",g=localStorage.getItem(h);if(console.log("📊 processOrder çağrıldı"),console.log("📊 visitorId (uvid):",g),console.log("📊 checkout_order:",c),console.log("📦 orderId:",f),!g){console.error("❌ Conversion-tracking: visitorId bulunamadı.");return}console.log("✅ Step 1 - Veri başarıyla yakalandı."),console.log("✅ Step 2 - OrderId mevcut");const w=new XMLHttpRequest;w.open("POST","https://api.upsell.co/Tracking/MatchOrder",!0),w.setRequestHeader("Content-Type","application/json;charset=UTF-8"),w.onreadystatechange=function(){w.readyState===4&&(w.status>=200&&w.status<300?(console.log("✅ Conversion-tracking: Başarılı. Ziyaretçi anahtarı siliniyor."),localStorage.removeItem(h)):console.error("❌ Conversion-tracking MatchOrder error:",w.responseText))},console.log("📤 Step 3 - İstek gönderiliyor."),w.send(JSON.stringify({visitorId:g,orderId:String(f)})),console.log("✅ Step 4 - İstek gönderildi.")}})();var Rs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kx(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var wc={exports:{}},Pi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih;function Nx(){if(ih)return Pi;ih=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(o,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var g in c)g!=="key"&&(f[g]=c[g])}else f=c;return c=f.ref,{$$typeof:l,type:o,key:h,ref:c!==void 0?c:null,props:f}}return Pi.Fragment=r,Pi.jsx=u,Pi.jsxs=u,Pi}var rh;function Cx(){return rh||(rh=1,wc.exports=Nx()),wc.exports}var p=Cx(),Ec={exports:{}},er={},Ac={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sh;function Mx(){return sh||(sh=1,function(l){function r(T,G){var ee=T.length;T.push(G);e:for(;0<ee;){var pe=ee-1>>>1,S=T[pe];if(0<c(S,G))T[pe]=G,T[ee]=S,ee=pe;else break e}}function u(T){return T.length===0?null:T[0]}function o(T){if(T.length===0)return null;var G=T[0],ee=T.pop();if(ee!==G){T[0]=ee;e:for(var pe=0,S=T.length,q=S>>>1;pe<q;){var P=2*(pe+1)-1,ne=T[P],de=P+1,Te=T[de];if(0>c(ne,ee))de<S&&0>c(Te,ne)?(T[pe]=Te,T[de]=ee,pe=de):(T[pe]=ne,T[P]=ee,pe=P);else if(de<S&&0>c(Te,ee))T[pe]=Te,T[de]=ee,pe=de;else break e}}return G}function c(T,G){var ee=T.sortIndex-G.sortIndex;return ee!==0?ee:T.id-G.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var h=Date,g=h.now();l.unstable_now=function(){return h.now()-g}}var w=[],x=[],b=1,j=null,E=3,M=!1,R=!1,B=!1,C=!1,J=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function re(T){for(var G=u(x);G!==null;){if(G.callback===null)o(x);else if(G.startTime<=T)o(x),G.sortIndex=G.expirationTime,r(w,G);else break;G=u(x)}}function L(T){if(B=!1,re(T),!R)if(u(w)!==null)R=!0,I||(I=!0,F());else{var G=u(x);G!==null&&ge(L,G.startTime-T)}}var I=!1,Q=-1,ie=5,be=-1;function Ge(){return C?!0:!(l.unstable_now()-be<ie)}function ke(){if(C=!1,I){var T=l.unstable_now();be=T;var G=!0;try{e:{R=!1,B&&(B=!1,X(Q),Q=-1),M=!0;var ee=E;try{t:{for(re(T),j=u(w);j!==null&&!(j.expirationTime>T&&Ge());){var pe=j.callback;if(typeof pe=="function"){j.callback=null,E=j.priorityLevel;var S=pe(j.expirationTime<=T);if(T=l.unstable_now(),typeof S=="function"){j.callback=S,re(T),G=!0;break t}j===u(w)&&o(w),re(T)}else o(w);j=u(w)}if(j!==null)G=!0;else{var q=u(x);q!==null&&ge(L,q.startTime-T),G=!1}}break e}finally{j=null,E=ee,M=!1}G=void 0}}finally{G?F():I=!1}}}var F;if(typeof K=="function")F=function(){K(ke)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ve=ae.port2;ae.port1.onmessage=ke,F=function(){ve.postMessage(null)}}else F=function(){J(ke,0)};function ge(T,G){Q=J(function(){T(l.unstable_now())},G)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(T){T.callback=null},l.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<T?Math.floor(1e3/T):5},l.unstable_getCurrentPriorityLevel=function(){return E},l.unstable_next=function(T){switch(E){case 1:case 2:case 3:var G=3;break;default:G=E}var ee=E;E=G;try{return T()}finally{E=ee}},l.unstable_requestPaint=function(){C=!0},l.unstable_runWithPriority=function(T,G){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var ee=E;E=T;try{return G()}finally{E=ee}},l.unstable_scheduleCallback=function(T,G,ee){var pe=l.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?pe+ee:pe):ee=pe,T){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=ee+S,T={id:b++,callback:G,priorityLevel:T,startTime:ee,expirationTime:S,sortIndex:-1},ee>pe?(T.sortIndex=ee,r(x,T),u(w)===null&&T===u(x)&&(B?(X(Q),Q=-1):B=!0,ge(L,ee-pe))):(T.sortIndex=S,r(w,T),R||M||(R=!0,I||(I=!0,F()))),T},l.unstable_shouldYield=Ge,l.unstable_wrapCallback=function(T){var G=E;return function(){var ee=E;E=G;try{return T.apply(this,arguments)}finally{E=ee}}}}(Tc)),Tc}var uh;function Ux(){return uh||(uh=1,Ac.exports=Mx()),Ac.exports}var zc={exports:{}},_e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function Bx(){if(oh)return _e;oh=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),j=Symbol.iterator;function E(S){return S===null||typeof S!="object"?null:(S=j&&S[j]||S["@@iterator"],typeof S=="function"?S:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,B={};function C(S,q,P){this.props=S,this.context=q,this.refs=B,this.updater=P||M}C.prototype.isReactComponent={},C.prototype.setState=function(S,q){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,q,"setState")},C.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function J(){}J.prototype=C.prototype;function X(S,q,P){this.props=S,this.context=q,this.refs=B,this.updater=P||M}var K=X.prototype=new J;K.constructor=X,R(K,C.prototype),K.isPureReactComponent=!0;var re=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function Q(S,q,P,ne,de,Te){return P=Te.ref,{$$typeof:l,type:S,key:q,ref:P!==void 0?P:null,props:Te}}function ie(S,q){return Q(S.type,q,void 0,void 0,void 0,S.props)}function be(S){return typeof S=="object"&&S!==null&&S.$$typeof===l}function Ge(S){var q={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(P){return q[P]})}var ke=/\/+/g;function F(S,q){return typeof S=="object"&&S!==null&&S.key!=null?Ge(""+S.key):q.toString(36)}function ae(){}function ve(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(ae,ae):(S.status="pending",S.then(function(q){S.status==="pending"&&(S.status="fulfilled",S.value=q)},function(q){S.status==="pending"&&(S.status="rejected",S.reason=q)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function ge(S,q,P,ne,de){var Te=typeof S;(Te==="undefined"||Te==="boolean")&&(S=null);var ce=!1;if(S===null)ce=!0;else switch(Te){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(S.$$typeof){case l:case r:ce=!0;break;case b:return ce=S._init,ge(ce(S._payload),q,P,ne,de)}}if(ce)return de=de(S),ce=ne===""?"."+F(S,0):ne,re(de)?(P="",ce!=null&&(P=ce.replace(ke,"$&/")+"/"),ge(de,q,P,"",function(Xe){return Xe})):de!=null&&(be(de)&&(de=ie(de,P+(de.key==null||S&&S.key===de.key?"":(""+de.key).replace(ke,"$&/")+"/")+ce)),q.push(de)),1;ce=0;var ze=ne===""?".":ne+":";if(re(S))for(var Ae=0;Ae<S.length;Ae++)ne=S[Ae],Te=ze+F(ne,Ae),ce+=ge(ne,q,P,Te,de);else if(Ae=E(S),typeof Ae=="function")for(S=Ae.call(S),Ae=0;!(ne=S.next()).done;)ne=ne.value,Te=ze+F(ne,Ae++),ce+=ge(ne,q,P,Te,de);else if(Te==="object"){if(typeof S.then=="function")return ge(ve(S),q,P,ne,de);throw q=String(S),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ce}function T(S,q,P){if(S==null)return S;var ne=[],de=0;return ge(S,ne,"","",function(Te){return q.call(P,Te,de++)}),ne}function G(S){if(S._status===-1){var q=S._result;q=q(),q.then(function(P){(S._status===0||S._status===-1)&&(S._status=1,S._result=P)},function(P){(S._status===0||S._status===-1)&&(S._status=2,S._result=P)}),S._status===-1&&(S._status=0,S._result=q)}if(S._status===1)return S._result.default;throw S._result}var ee=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function pe(){}return _e.Children={map:T,forEach:function(S,q,P){T(S,function(){q.apply(this,arguments)},P)},count:function(S){var q=0;return T(S,function(){q++}),q},toArray:function(S){return T(S,function(q){return q})||[]},only:function(S){if(!be(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},_e.Component=C,_e.Fragment=u,_e.Profiler=c,_e.PureComponent=X,_e.StrictMode=o,_e.Suspense=w,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,_e.__COMPILER_RUNTIME={__proto__:null,c:function(S){return L.H.useMemoCache(S)}},_e.cache=function(S){return function(){return S.apply(null,arguments)}},_e.cloneElement=function(S,q,P){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var ne=R({},S.props),de=S.key,Te=void 0;if(q!=null)for(ce in q.ref!==void 0&&(Te=void 0),q.key!==void 0&&(de=""+q.key),q)!I.call(q,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&q.ref===void 0||(ne[ce]=q[ce]);var ce=arguments.length-2;if(ce===1)ne.children=P;else if(1<ce){for(var ze=Array(ce),Ae=0;Ae<ce;Ae++)ze[Ae]=arguments[Ae+2];ne.children=ze}return Q(S.type,de,void 0,void 0,Te,ne)},_e.createContext=function(S){return S={$$typeof:h,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:f,_context:S},S},_e.createElement=function(S,q,P){var ne,de={},Te=null;if(q!=null)for(ne in q.key!==void 0&&(Te=""+q.key),q)I.call(q,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(de[ne]=q[ne]);var ce=arguments.length-2;if(ce===1)de.children=P;else if(1<ce){for(var ze=Array(ce),Ae=0;Ae<ce;Ae++)ze[Ae]=arguments[Ae+2];de.children=ze}if(S&&S.defaultProps)for(ne in ce=S.defaultProps,ce)de[ne]===void 0&&(de[ne]=ce[ne]);return Q(S,Te,void 0,void 0,null,de)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(S){return{$$typeof:g,render:S}},_e.isValidElement=be,_e.lazy=function(S){return{$$typeof:b,_payload:{_status:-1,_result:S},_init:G}},_e.memo=function(S,q){return{$$typeof:x,type:S,compare:q===void 0?null:q}},_e.startTransition=function(S){var q=L.T,P={};L.T=P;try{var ne=S(),de=L.S;de!==null&&de(P,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(pe,ee)}catch(Te){ee(Te)}finally{L.T=q}},_e.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},_e.use=function(S){return L.H.use(S)},_e.useActionState=function(S,q,P){return L.H.useActionState(S,q,P)},_e.useCallback=function(S,q){return L.H.useCallback(S,q)},_e.useContext=function(S){return L.H.useContext(S)},_e.useDebugValue=function(){},_e.useDeferredValue=function(S,q){return L.H.useDeferredValue(S,q)},_e.useEffect=function(S,q,P){var ne=L.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ne.useEffect(S,q)},_e.useId=function(){return L.H.useId()},_e.useImperativeHandle=function(S,q,P){return L.H.useImperativeHandle(S,q,P)},_e.useInsertionEffect=function(S,q){return L.H.useInsertionEffect(S,q)},_e.useLayoutEffect=function(S,q){return L.H.useLayoutEffect(S,q)},_e.useMemo=function(S,q){return L.H.useMemo(S,q)},_e.useOptimistic=function(S,q){return L.H.useOptimistic(S,q)},_e.useReducer=function(S,q,P){return L.H.useReducer(S,q,P)},_e.useRef=function(S){return L.H.useRef(S)},_e.useState=function(S){return L.H.useState(S)},_e.useSyncExternalStore=function(S,q,P){return L.H.useSyncExternalStore(S,q,P)},_e.useTransition=function(){return L.H.useTransition()},_e.version="19.1.1",_e}var ch;function tf(){return ch||(ch=1,zc.exports=Bx()),zc.exports}var jc={exports:{}},Ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function Hx(){if(fh)return Ct;fh=1;var l=tf();function r(w){var x="https://react.dev/errors/"+w;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)x+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+w+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(w,x,b){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:j==null?null:""+j,children:w,containerInfo:x,implementation:b}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(w,x){if(w==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ct.createPortal=function(w,x){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(r(299));return f(w,x,null,b)},Ct.flushSync=function(w){var x=h.T,b=o.p;try{if(h.T=null,o.p=2,w)return w()}finally{h.T=x,o.p=b,o.d.f()}},Ct.preconnect=function(w,x){typeof w=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,o.d.C(w,x))},Ct.prefetchDNS=function(w){typeof w=="string"&&o.d.D(w)},Ct.preinit=function(w,x){if(typeof w=="string"&&x&&typeof x.as=="string"){var b=x.as,j=g(b,x.crossOrigin),E=typeof x.integrity=="string"?x.integrity:void 0,M=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;b==="style"?o.d.S(w,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:j,integrity:E,fetchPriority:M}):b==="script"&&o.d.X(w,{crossOrigin:j,integrity:E,fetchPriority:M,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Ct.preinitModule=function(w,x){if(typeof w=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var b=g(x.as,x.crossOrigin);o.d.M(w,{crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&o.d.M(w)},Ct.preload=function(w,x){if(typeof w=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var b=x.as,j=g(b,x.crossOrigin);o.d.L(w,b,{crossOrigin:j,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Ct.preloadModule=function(w,x){if(typeof w=="string")if(x){var b=g(x.as,x.crossOrigin);o.d.m(w,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else o.d.m(w)},Ct.requestFormReset=function(w){o.d.r(w)},Ct.unstable_batchedUpdates=function(w,x){return w(x)},Ct.useFormState=function(w,x,b){return h.H.useFormState(w,x,b)},Ct.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ct.version="19.1.1",Ct}var dh;function p1(){if(dh)return jc.exports;dh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),jc.exports=Hx(),jc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph;function Lx(){if(ph)return er;ph=1;var l=Ux(),r=tf(),u=p1();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(o(188))}function w(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return g(i),e;if(s===a)return g(i),t;s=s.sibling}throw Error(o(188))}if(n.return!==a.return)n=i,a=s;else{for(var d=!1,m=i.child;m;){if(m===n){d=!0,n=i,a=s;break}if(m===a){d=!0,a=i,n=s;break}m=m.sibling}if(!d){for(m=s.child;m;){if(m===n){d=!0,n=s,a=i;break}if(m===a){d=!0,a=s,n=i;break}m=m.sibling}if(!d)throw Error(o(189))}}if(n.alternate!==a)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,j=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),K=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),Ge=Symbol.for("react.memo_cache_sentinel"),ke=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=ke&&e[ke]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Symbol.for("react.client.reference");function ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case C:return"Profiler";case B:return"StrictMode";case L:return"Suspense";case I:return"SuspenseList";case be:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case K:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case ie:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}var ge=Array.isArray,T=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},pe=[],S=-1;function q(e){return{current:e}}function P(e){0>S||(e.current=pe[S],pe[S]=null,S--)}function ne(e,t){S++,pe[S]=e.current,e.current=t}var de=q(null),Te=q(null),ce=q(null),ze=q(null);function Ae(e,t){switch(ne(ce,t),ne(Te,e),ne(de,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Np(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Np(t),e=Cp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(de),ne(de,e)}function Xe(){P(de),P(Te),P(ce)}function kt(e){e.memoizedState!==null&&ne(ze,e);var t=de.current,n=Cp(t,e.type);t!==n&&(ne(Te,e),ne(de,n))}function Ut(e){Te.current===e&&(P(de),P(Te)),ze.current===e&&(P(ze),Ki._currentValue=ee)}var he=Object.prototype.hasOwnProperty,xe=l.unstable_scheduleCallback,Le=l.unstable_cancelCallback,He=l.unstable_shouldYield,gt=l.unstable_requestPaint,lt=l.unstable_now,On=l.unstable_getCurrentPriorityLevel,It=l.unstable_ImmediatePriority,v=l.unstable_UserBlockingPriority,O=l.unstable_NormalPriority,H=l.unstable_LowPriority,le=l.unstable_IdlePriority,te=l.log,W=l.unstable_setDisableYieldValue,se=null,we=null;function je(e){if(typeof te=="function"&&W(e),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(se,e)}catch{}}var Ze=Math.clz32?Math.clz32:il,qt=Math.log,Bt=Math.LN2;function il(e){return e>>>=0,e===0?32:31-(qt(e)/Bt|0)|0}var bt=256,vn=4194304;function Ot(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var m=a&134217727;return m!==0?(a=m&~s,a!==0?i=Ot(a):(d&=m,d!==0?i=Ot(d):n||(n=m&~e,n!==0&&(i=Ot(n))))):(m=a&~s,m!==0?i=Ot(m):d!==0?i=Ot(d):n||(n=a&~e,n!==0&&(i=Ot(n)))),i===0?0:t!==0&&t!==i&&(t&s)===0&&(s=i&-i,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:i}function Ln(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function na(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ni(){var e=bt;return bt<<=1,(bt&4194048)===0&&(bt=256),e}function br(){var e=vn;return vn<<=1,(vn&62914560)===0&&(vn=4194304),e}function _n(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function un(e,t,n,a,i,s){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,y=e.expirationTimes,D=e.hiddenUpdates;for(n=d&~n;0<n;){var Y=31-Ze(n),$=1<<Y;m[Y]=0,y[Y]=-1;var k=D[Y];if(k!==null)for(D[Y]=null,Y=0;Y<k.length;Y++){var N=k[Y];N!==null&&(N.lane&=-536870913)}n&=~$}a!==0&&li(e,a,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function li(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Ze(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function la(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Ze(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function ai(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function vr(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Pp(e.type))}function pu(e,t){var n=G.p;try{return G.p=e,t()}finally{G.p=n}}var Gt=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Gt,st="__reactProps$"+Gt,Vn="__reactContainer$"+Gt,rl="__reactEvents$"+Gt,wm="__reactListeners$"+Gt,Em="__reactHandles$"+Gt,Sf="__reactResources$"+Gt,ii="__reactMarker$"+Gt;function hu(e){delete e[Ke],delete e[st],delete e[rl],delete e[wm],delete e[Em]}function aa(e){var t=e[Ke];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vn]||n[Ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hp(e);e!==null;){if(n=e[Ke])return n;e=Hp(e)}return t}e=n,n=e.parentNode}return null}function ia(e){if(e=e[Ke]||e[Vn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ri(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function ra(e){var t=e[Sf];return t||(t=e[Sf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function St(e){e[ii]=!0}var wf=new Set,Ef={};function kl(e,t){sa(e,t),sa(e+"Capture",t)}function sa(e,t){for(Ef[e]=t,e=0;e<t.length;e++)wf.add(t[e])}var Am=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Af={},Tf={};function Tm(e){return he.call(Tf,e)?!0:he.call(Af,e)?!1:Am.test(e)?Tf[e]=!0:(Af[e]=!0,!1)}function Sr(e,t,n){if(Tm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function wr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Gn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var mu,zf;function ua(e){if(mu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);mu=t&&t[1]||"",zf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mu+e+zf}var gu=!1;function xu(e,t){if(!e||gu)return"";gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(N){var k=N}Reflect.construct(e,[],$)}else{try{$.call()}catch(N){k=N}e.call($.prototype)}}else{try{throw Error()}catch(N){k=N}($=e())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(N){if(N&&k&&typeof N.stack=="string")return[N.stack,k.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),d=s[0],m=s[1];if(d&&m){var y=d.split(`
`),D=m.split(`
`);for(i=a=0;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;for(;i<D.length&&!D[i].includes("DetermineComponentFrameRoot");)i++;if(a===y.length||i===D.length)for(a=y.length-1,i=D.length-1;1<=a&&0<=i&&y[a]!==D[i];)i--;for(;1<=a&&0<=i;a--,i--)if(y[a]!==D[i]){if(a!==1||i!==1)do if(a--,i--,0>i||y[a]!==D[i]){var Y=`
`+y[a].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=a&&0<=i);break}}}finally{gu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ua(n):""}function zm(e){switch(e.tag){case 26:case 27:case 5:return ua(e.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 15:return xu(e.type,!1);case 11:return xu(e.type.render,!1);case 1:return xu(e.type,!0);case 31:return ua("Activity");default:return""}}function jf(e){try{var t="";do t+=zm(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function on(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Of(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jm(e){var t=Of(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){a=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Er(e){e._valueTracker||(e._valueTracker=jm(e))}function _f(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Of(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ar(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Om=/[\n"\\]/g;function cn(e){return e.replace(Om,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yu(e,t,n,a,i,s,d,m){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+on(t)):e.value!==""+on(t)&&(e.value=""+on(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?bu(e,d,on(t)):n!=null?bu(e,d,on(n)):a!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+on(m):e.removeAttribute("name")}function Df(e,t,n,a,i,s,d,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;n=n!=null?""+on(n):"",t=t!=null?""+on(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=m?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function bu(e,t,n){t==="number"&&Ar(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function oa(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rf(e,t,n){if(t!=null&&(t=""+on(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+on(n):""}function kf(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(o(92));if(ge(a)){if(1<a.length)throw Error(o(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=on(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function ca(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _m=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nf(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||_m.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Cf(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&Nf(e,i,a)}else for(var s in t)t.hasOwnProperty(s)&&Nf(e,s,t[s])}function vu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tr(e){return Rm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Su=null;function wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fa=null,da=null;function Mf(e){var t=ia(e);if(t&&(e=t.stateNode)){var n=e[st]||null;e:switch(e=t.stateNode,t.type){case"input":if(yu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+cn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[st]||null;if(!i)throw Error(o(90));yu(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&_f(a)}break e;case"textarea":Rf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&oa(e,!!n.multiple,t,!1)}}}var Eu=!1;function Uf(e,t,n){if(Eu)return e(t,n);Eu=!0;try{var a=e(t);return a}finally{if(Eu=!1,(fa!==null||da!==null)&&(cs(),fa&&(t=fa,e=da,da=fa=null,Mf(t),e)))for(t=0;t<e.length;t++)Mf(e[t])}}function si(e,t){var n=e.stateNode;if(n===null)return null;var a=n[st]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(Yn)try{var ui={};Object.defineProperty(ui,"passive",{get:function(){Au=!0}}),window.addEventListener("test",ui,ui),window.removeEventListener("test",ui,ui)}catch{Au=!1}var sl=null,Tu=null,zr=null;function Bf(){if(zr)return zr;var e,t=Tu,n=t.length,a,i="value"in sl?sl.value:sl.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===i[s-a];a++);return zr=i.slice(e,1<a?1-a:void 0)}function jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function Hf(){return!1}function Yt(e){function t(n,a,i,s,d){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Or:Hf,this.isPropagationStopped=Hf,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var Nl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_r=Yt(Nl),oi=b({},Nl,{view:0,detail:0}),km=Yt(oi),zu,ju,ci,Dr=b({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ci&&(ci&&e.type==="mousemove"?(zu=e.screenX-ci.screenX,ju=e.screenY-ci.screenY):ju=zu=0,ci=e),zu)},movementY:function(e){return"movementY"in e?e.movementY:ju}}),Lf=Yt(Dr),Nm=b({},Dr,{dataTransfer:0}),Cm=Yt(Nm),Mm=b({},oi,{relatedTarget:0}),Ou=Yt(Mm),Um=b({},Nl,{animationName:0,elapsedTime:0,pseudoElement:0}),Bm=Yt(Um),Hm=b({},Nl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lm=Yt(Hm),qm=b({},Nl,{data:0}),qf=Yt(qm),Vm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ym={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ym[e])?!!t[e]:!1}function _u(){return Xm}var Zm=b({},oi,{key:function(e){if(e.key){var t=Vm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$m=Yt(Zm),Qm=b({},Dr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=Yt(Qm),Km=b({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),Jm=Yt(Km),Fm=b({},Nl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wm=Yt(Fm),Im=b({},Dr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pm=Yt(Im),eg=b({},Nl,{newState:0,oldState:0}),tg=Yt(eg),ng=[9,13,27,32],Du=Yn&&"CompositionEvent"in window,fi=null;Yn&&"documentMode"in document&&(fi=document.documentMode);var lg=Yn&&"TextEvent"in window&&!fi,Gf=Yn&&(!Du||fi&&8<fi&&11>=fi),Yf=" ",Xf=!1;function Zf(e,t){switch(e){case"keyup":return ng.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $f(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pa=!1;function ag(e,t){switch(e){case"compositionend":return $f(t);case"keypress":return t.which!==32?null:(Xf=!0,Yf);case"textInput":return e=t.data,e===Yf&&Xf?null:e;default:return null}}function ig(e,t){if(pa)return e==="compositionend"||!Du&&Zf(e,t)?(e=Bf(),zr=Tu=sl=null,pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gf&&t.locale!=="ko"?null:t.data;default:return null}}var rg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rg[e.type]:t==="textarea"}function Kf(e,t,n,a){fa?da?da.push(a):da=[a]:fa=a,t=gs(t,"onChange"),0<t.length&&(n=new _r("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var di=null,pi=null;function sg(e){Op(e,0)}function Rr(e){var t=ri(e);if(_f(t))return e}function Jf(e,t){if(e==="change")return t}var Ff=!1;if(Yn){var Ru;if(Yn){var ku="oninput"in document;if(!ku){var Wf=document.createElement("div");Wf.setAttribute("oninput","return;"),ku=typeof Wf.oninput=="function"}Ru=ku}else Ru=!1;Ff=Ru&&(!document.documentMode||9<document.documentMode)}function If(){di&&(di.detachEvent("onpropertychange",Pf),pi=di=null)}function Pf(e){if(e.propertyName==="value"&&Rr(pi)){var t=[];Kf(t,pi,e,wu(e)),Uf(sg,t)}}function ug(e,t,n){e==="focusin"?(If(),di=t,pi=n,di.attachEvent("onpropertychange",Pf)):e==="focusout"&&If()}function og(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rr(pi)}function cg(e,t){if(e==="click")return Rr(t)}function fg(e,t){if(e==="input"||e==="change")return Rr(t)}function dg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:dg;function hi(e,t){if(Pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!he.call(t,i)||!Pt(e[i],t[i]))return!1}return!0}function ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function td(e,t){var n=ed(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ed(n)}}function nd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ld(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ar(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ar(e.document)}return t}function Nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var pg=Yn&&"documentMode"in document&&11>=document.documentMode,ha=null,Cu=null,mi=null,Mu=!1;function ad(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mu||ha==null||ha!==Ar(a)||(a=ha,"selectionStart"in a&&Nu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),mi&&hi(mi,a)||(mi=a,a=gs(Cu,"onSelect"),0<a.length&&(t=new _r("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ha)))}function Cl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ma={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionrun:Cl("Transition","TransitionRun"),transitionstart:Cl("Transition","TransitionStart"),transitioncancel:Cl("Transition","TransitionCancel"),transitionend:Cl("Transition","TransitionEnd")},Uu={},id={};Yn&&(id=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function Ml(e){if(Uu[e])return Uu[e];if(!ma[e])return e;var t=ma[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in id)return Uu[e]=t[n];return e}var rd=Ml("animationend"),sd=Ml("animationiteration"),ud=Ml("animationstart"),hg=Ml("transitionrun"),mg=Ml("transitionstart"),gg=Ml("transitioncancel"),od=Ml("transitionend"),cd=new Map,Bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bu.push("scrollEnd");function Sn(e,t){cd.set(e,t),kl(t,[e])}var fd=new WeakMap;function fn(e,t){if(typeof e=="object"&&e!==null){var n=fd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:jf(t)},fd.set(e,t),t)}return{value:e,source:t,stack:jf(t)}}var dn=[],ga=0,Hu=0;function kr(){for(var e=ga,t=Hu=ga=0;t<e;){var n=dn[t];dn[t++]=null;var a=dn[t];dn[t++]=null;var i=dn[t];dn[t++]=null;var s=dn[t];if(dn[t++]=null,a!==null&&i!==null){var d=a.pending;d===null?i.next=i:(i.next=d.next,d.next=i),a.pending=i}s!==0&&dd(n,i,s)}}function Nr(e,t,n,a){dn[ga++]=e,dn[ga++]=t,dn[ga++]=n,dn[ga++]=a,Hu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Lu(e,t,n,a){return Nr(e,t,n,a),Cr(e)}function xa(e,t){return Nr(e,null,null,t),Cr(e)}function dd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&t!==null&&(i=31-Ze(n),e=s.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),s):null}function Cr(e){if(50<qi)throw qi=0,$o=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ya={};function xg(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,t,n,a){return new xg(e,t,n,a)}function qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xn(e,t){var n=e.alternate;return n===null?(n=en(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function pd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Mr(e,t,n,a,i,s){var d=0;if(a=e,typeof e=="function")qu(e)&&(d=1);else if(typeof e=="string")d=bx(e,n,de.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case be:return e=en(31,n,t,i),e.elementType=be,e.lanes=s,e;case R:return Ul(n.children,i,s,t);case B:d=8,i|=24;break;case C:return e=en(12,n,t,i|2),e.elementType=C,e.lanes=s,e;case L:return e=en(13,n,t,i),e.elementType=L,e.lanes=s,e;case I:return e=en(19,n,t,i),e.elementType=I,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:case K:d=10;break e;case X:d=9;break e;case re:d=11;break e;case Q:d=14;break e;case ie:d=16,a=null;break e}d=29,n=Error(o(130,e===null?"null":typeof e,"")),a=null}return t=en(d,n,t,i),t.elementType=e,t.type=a,t.lanes=s,t}function Ul(e,t,n,a){return e=en(7,e,a,t),e.lanes=n,e}function Vu(e,t,n){return e=en(6,e,null,t),e.lanes=n,e}function Gu(e,t,n){return t=en(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ba=[],va=0,Ur=null,Br=0,pn=[],hn=0,Bl=null,Zn=1,$n="";function Hl(e,t){ba[va++]=Br,ba[va++]=Ur,Ur=e,Br=t}function hd(e,t,n){pn[hn++]=Zn,pn[hn++]=$n,pn[hn++]=Bl,Bl=e;var a=Zn;e=$n;var i=32-Ze(a)-1;a&=~(1<<i),n+=1;var s=32-Ze(t)+i;if(30<s){var d=i-i%5;s=(a&(1<<d)-1).toString(32),a>>=d,i-=d,Zn=1<<32-Ze(t)+i|n<<i|a,$n=s+e}else Zn=1<<s|n<<i|a,$n=e}function Yu(e){e.return!==null&&(Hl(e,1),hd(e,1,0))}function Xu(e){for(;e===Ur;)Ur=ba[--va],ba[va]=null,Br=ba[--va],ba[va]=null;for(;e===Bl;)Bl=pn[--hn],pn[hn]=null,$n=pn[--hn],pn[hn]=null,Zn=pn[--hn],pn[hn]=null}var Ht=null,it=null,Ve=!1,Ll=null,Dn=!1,Zu=Error(o(519));function ql(e){var t=Error(o(418,""));throw yi(fn(t,e)),Zu}function md(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ke]=e,t[st]=a,n){case"dialog":Me("cancel",t),Me("close",t);break;case"iframe":case"object":case"embed":Me("load",t);break;case"video":case"audio":for(n=0;n<Gi.length;n++)Me(Gi[n],t);break;case"source":Me("error",t);break;case"img":case"image":case"link":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"input":Me("invalid",t),Df(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Er(t);break;case"select":Me("invalid",t);break;case"textarea":Me("invalid",t),kf(t,a.value,a.defaultValue,a.children),Er(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||kp(t.textContent,n)?(a.popover!=null&&(Me("beforetoggle",t),Me("toggle",t)),a.onScroll!=null&&Me("scroll",t),a.onScrollEnd!=null&&Me("scrollend",t),a.onClick!=null&&(t.onclick=xs),t=!0):t=!1,t||ql(e)}function gd(e){for(Ht=e.return;Ht;)switch(Ht.tag){case 5:case 13:Dn=!1;return;case 27:case 3:Dn=!0;return;default:Ht=Ht.return}}function gi(e){if(e!==Ht)return!1;if(!Ve)return gd(e),Ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||uc(e.type,e.memoizedProps)),n=!n),n&&it&&ql(e),gd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){it=En(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}it=null}}else t===27?(t=it,El(e.type)?(e=dc,dc=null,it=e):it=t):it=Ht?En(e.stateNode.nextSibling):null;return!0}function xi(){it=Ht=null,Ve=!1}function xd(){var e=Ll;return e!==null&&($t===null?$t=e:$t.push.apply($t,e),Ll=null),e}function yi(e){Ll===null?Ll=[e]:Ll.push(e)}var $u=q(null),Vl=null,Qn=null;function ul(e,t,n){ne($u,t._currentValue),t._currentValue=n}function Kn(e){e._currentValue=$u.current,P($u)}function Qu(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Ku(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var d=i.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=i;for(var y=0;y<t.length;y++)if(m.context===t[y]){s.lanes|=n,m=s.alternate,m!==null&&(m.lanes|=n),Qu(s.return,n,e),a||(d=null);break e}s=m.next}}else if(i.tag===18){if(d=i.return,d===null)throw Error(o(341));d.lanes|=n,s=d.alternate,s!==null&&(s.lanes|=n),Qu(d,n,e),d=null}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===e){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}}function bi(e,t,n,a){e=null;for(var i=t,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var d=i.alternate;if(d===null)throw Error(o(387));if(d=d.memoizedProps,d!==null){var m=i.type;Pt(i.pendingProps.value,d.value)||(e!==null?e.push(m):e=[m])}}else if(i===ze.current){if(d=i.alternate,d===null)throw Error(o(387));d.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Ki):e=[Ki])}i=i.return}e!==null&&Ku(t,e,n,a),t.flags|=262144}function Hr(e){for(e=e.firstContext;e!==null;){if(!Pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gl(e){Vl=e,Qn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nt(e){return yd(Vl,e)}function Lr(e,t){return Vl===null&&Gl(e),yd(e,t)}function yd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qn===null){if(e===null)throw Error(o(308));Qn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qn=Qn.next=t;return n}var yg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},bg=l.unstable_scheduleCallback,vg=l.unstable_NormalPriority,xt={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new yg,data:new Map,refCount:0}}function vi(e){e.refCount--,e.refCount===0&&bg(vg,function(){e.controller.abort()})}var Si=null,Fu=0,Sa=0,wa=null;function Sg(e,t){if(Si===null){var n=Si=[];Fu=0,Sa=Po(),wa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Fu++,t.then(bd,bd),t}function bd(){if(--Fu===0&&Si!==null){wa!==null&&(wa.status="fulfilled");var e=Si;Si=null,Sa=0,wa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function wg(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var vd=T.S;T.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sg(e,t),vd!==null&&vd(e,t)};var Yl=q(null);function Wu(){var e=Yl.current;return e!==null?e:Pe.pooledCache}function qr(e,t){t===null?ne(Yl,Yl.current):ne(Yl,t.pool)}function Sd(){var e=Wu();return e===null?null:{parent:xt._currentValue,pool:e}}var wi=Error(o(460)),wd=Error(o(474)),Vr=Error(o(542)),Iu={then:function(){}};function Ed(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gr(){}function Ad(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Gr,Gr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zd(e),e;default:if(typeof t.status=="string")t.then(Gr,Gr);else{if(e=Pe,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zd(e),e}throw Ei=t,wi}}var Ei=null;function Td(){if(Ei===null)throw Error(o(459));var e=Ei;return Ei=null,e}function zd(e){if(e===wi||e===Vr)throw Error(o(483))}var ol=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function cl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fl(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,($e&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=Cr(e),dd(e,null,n),t}return Nr(e,a,t,n),Cr(e)}function Ai(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,la(e,n)}}function to(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?i=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var no=!1;function Ti(){if(no){var e=wa;if(e!==null)throw e}}function zi(e,t,n,a){no=!1;var i=e.updateQueue;ol=!1;var s=i.firstBaseUpdate,d=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var y=m,D=y.next;y.next=null,d===null?s=D:d.next=D,d=y;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,m=Y.lastBaseUpdate,m!==d&&(m===null?Y.firstBaseUpdate=D:m.next=D,Y.lastBaseUpdate=y))}if(s!==null){var $=i.baseState;d=0,Y=D=y=null,m=s;do{var k=m.lane&-536870913,N=k!==m.lane;if(N?(Ue&k)===k:(a&k)===k){k!==0&&k===Sa&&(no=!0),Y!==null&&(Y=Y.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var Ee=e,ye=m;k=t;var We=n;switch(ye.tag){case 1:if(Ee=ye.payload,typeof Ee=="function"){$=Ee.call(We,$,k);break e}$=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=ye.payload,k=typeof Ee=="function"?Ee.call(We,$,k):Ee,k==null)break e;$=b({},$,k);break e;case 2:ol=!0}}k=m.callback,k!==null&&(e.flags|=64,N&&(e.flags|=8192),N=i.callbacks,N===null?i.callbacks=[k]:N.push(k))}else N={lane:k,tag:m.tag,payload:m.payload,callback:m.callback,next:null},Y===null?(D=Y=N,y=$):Y=Y.next=N,d|=k;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;N=m,m=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);Y===null&&(y=$),i.baseState=y,i.firstBaseUpdate=D,i.lastBaseUpdate=Y,s===null&&(i.shared.lanes=0),bl|=d,e.lanes=d,e.memoizedState=$}}function jd(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Od(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)jd(n[e],t)}var Ea=q(null),Yr=q(0);function _d(e,t){e=tl,ne(Yr,e),ne(Ea,t),tl=e|t.baseLanes}function lo(){ne(Yr,tl),ne(Ea,Ea.current)}function ao(){tl=Yr.current,P(Ea),P(Yr)}var dl=0,Re=null,Je=null,ft=null,Xr=!1,Aa=!1,Xl=!1,Zr=0,ji=0,Ta=null,Eg=0;function ut(){throw Error(o(321))}function io(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pt(e[n],t[n]))return!1;return!0}function ro(e,t,n,a,i,s){return dl=s,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?d0:p0,Xl=!1,s=n(a,i),Xl=!1,Aa&&(s=Rd(t,n,a,i)),Dd(e),s}function Dd(e){T.H=Wr;var t=Je!==null&&Je.next!==null;if(dl=0,ft=Je=Re=null,Xr=!1,ji=0,Ta=null,t)throw Error(o(300));e===null||wt||(e=e.dependencies,e!==null&&Hr(e)&&(wt=!0))}function Rd(e,t,n,a){Re=e;var i=0;do{if(Aa&&(Ta=null),ji=0,Aa=!1,25<=i)throw Error(o(301));if(i+=1,ft=Je=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}T.H=Dg,s=t(n,a)}while(Aa);return s}function Ag(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?Oi(t):t,e=e.useState()[0],(Je!==null?Je.memoizedState:null)!==e&&(Re.flags|=1024),t}function so(){var e=Zr!==0;return Zr=0,e}function uo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function oo(e){if(Xr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Xr=!1}dl=0,ft=Je=Re=null,Aa=!1,ji=Zr=0,Ta=null}function Xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Re.memoizedState=ft=e:ft=ft.next=e,ft}function dt(){if(Je===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Je.next;var t=ft===null?Re.memoizedState:ft.next;if(t!==null)ft=t,Je=e;else{if(e===null)throw Re.alternate===null?Error(o(467)):Error(o(310));Je=e,e={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},ft===null?Re.memoizedState=ft=e:ft=ft.next=e}return ft}function co(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Oi(e){var t=ji;return ji+=1,Ta===null&&(Ta=[]),e=Ad(Ta,e,t),t=Re,(ft===null?t.memoizedState:ft.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?d0:p0),e}function $r(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Oi(e);if(e.$$typeof===K)return Nt(e)}throw Error(o(438,String(e)))}function fo(e){var t=null,n=Re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Re.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=co(),Re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Ge;return t.index++,n}function Jn(e,t){return typeof t=="function"?t(e):t}function Qr(e){var t=dt();return po(t,Je,e)}function po(e,t,n){var a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var i=e.baseQueue,s=a.pending;if(s!==null){if(i!==null){var d=i.next;i.next=s.next,s.next=d}t.baseQueue=i=s,a.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{t=i.next;var m=d=null,y=null,D=t,Y=!1;do{var $=D.lane&-536870913;if($!==D.lane?(Ue&$)===$:(dl&$)===$){var k=D.revertLane;if(k===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),$===Sa&&(Y=!0);else if((dl&k)===k){D=D.next,k===Sa&&(Y=!0);continue}else $={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},y===null?(m=y=$,d=s):y=y.next=$,Re.lanes|=k,bl|=k;$=D.action,Xl&&n(s,$),s=D.hasEagerState?D.eagerState:n(s,$)}else k={lane:$,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},y===null?(m=y=k,d=s):y=y.next=k,Re.lanes|=$,bl|=$;D=D.next}while(D!==null&&D!==t);if(y===null?d=s:y.next=m,!Pt(s,e.memoizedState)&&(wt=!0,Y&&(n=wa,n!==null)))throw n;e.memoizedState=s,e.baseState=d,e.baseQueue=y,a.lastRenderedState=s}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ho(e){var t=dt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do s=e(s,d.action),d=d.next;while(d!==i);Pt(s,t.memoizedState)||(wt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function kd(e,t,n){var a=Re,i=dt(),s=Ve;if(s){if(n===void 0)throw Error(o(407));n=n()}else n=t();var d=!Pt((Je||i).memoizedState,n);d&&(i.memoizedState=n,wt=!0),i=i.queue;var m=Md.bind(null,a,i,e);if(_i(2048,8,m,[e]),i.getSnapshot!==t||d||ft!==null&&ft.memoizedState.tag&1){if(a.flags|=2048,za(9,Kr(),Cd.bind(null,a,i,n,t),null),Pe===null)throw Error(o(349));s||(dl&124)!==0||Nd(a,t,n)}return n}function Nd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t=co(),Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cd(e,t,n,a){t.value=n,t.getSnapshot=a,Ud(t)&&Bd(e)}function Md(e,t,n){return n(function(){Ud(t)&&Bd(e)})}function Ud(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pt(e,n)}catch{return!0}}function Bd(e){var t=xa(e,2);t!==null&&rn(t,e,2)}function mo(e){var t=Xt();if(typeof e=="function"){var n=e;if(e=n(),Xl){je(!0);try{n()}finally{je(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t}function Hd(e,t,n,a){return e.baseState=n,po(e,Je,typeof a=="function"?a:Jn)}function Tg(e,t,n,a,i){if(Fr(e))throw Error(o(485));if(e=t.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};T.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,Ld(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Ld(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var s=T.T,d={};T.T=d;try{var m=n(i,a),y=T.S;y!==null&&y(d,m),qd(e,t,m)}catch(D){go(e,t,D)}finally{T.T=s}}else try{s=n(i,a),qd(e,t,s)}catch(D){go(e,t,D)}}function qd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Vd(e,t,a)},function(a){return go(e,t,a)}):Vd(e,t,n)}function Vd(e,t,n){t.status="fulfilled",t.value=n,Gd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ld(e,n)))}function go(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Gd(t),t=t.next;while(t!==a)}e.action=null}function Gd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Yd(e,t){return t}function Xd(e,t){if(Ve){var n=Pe.formState;if(n!==null){e:{var a=Re;if(Ve){if(it){t:{for(var i=it,s=Dn;i.nodeType!==8;){if(!s){i=null;break t}if(i=En(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){it=En(i.nextSibling),a=i.data==="F!";break e}}ql(a)}a=!1}a&&(t=n[0])}}return n=Xt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yd,lastRenderedState:t},n.queue=a,n=o0.bind(null,Re,a),a.dispatch=n,a=mo(!1),s=So.bind(null,Re,!1,a.queue),a=Xt(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=Tg.bind(null,Re,i,s,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function Zd(e){var t=dt();return $d(t,Je,e)}function $d(e,t,n){if(t=po(e,t,Yd)[0],e=Qr(Jn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Oi(t)}catch(d){throw d===wi?Vr:d}else a=t;t=dt();var i=t.queue,s=i.dispatch;return n!==t.memoizedState&&(Re.flags|=2048,za(9,Kr(),zg.bind(null,i,n),null)),[a,s,e]}function zg(e,t){e.action=t}function Qd(e){var t=dt(),n=Je;if(n!==null)return $d(t,n,e);dt(),t=t.memoizedState,n=dt();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function za(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Re.updateQueue,t===null&&(t=co(),Re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Kr(){return{destroy:void 0,resource:void 0}}function Kd(){return dt().memoizedState}function Jr(e,t,n,a){var i=Xt();a=a===void 0?null:a,Re.flags|=e,i.memoizedState=za(1|t,Kr(),n,a)}function _i(e,t,n,a){var i=dt();a=a===void 0?null:a;var s=i.memoizedState.inst;Je!==null&&a!==null&&io(a,Je.memoizedState.deps)?i.memoizedState=za(t,s,n,a):(Re.flags|=e,i.memoizedState=za(1|t,s,n,a))}function Jd(e,t){Jr(8390656,8,e,t)}function Fd(e,t){_i(2048,8,e,t)}function Wd(e,t){return _i(4,2,e,t)}function Id(e,t){return _i(4,4,e,t)}function Pd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function e0(e,t,n){n=n!=null?n.concat([e]):null,_i(4,4,Pd.bind(null,t,e),n)}function xo(){}function t0(e,t){var n=dt();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&io(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function n0(e,t){var n=dt();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&io(t,a[1]))return a[0];if(a=e(),Xl){je(!0);try{e()}finally{je(!1)}}return n.memoizedState=[a,t],a}function yo(e,t,n){return n===void 0||(dl&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=ip(),Re.lanes|=e,bl|=e,n)}function l0(e,t,n,a){return Pt(n,t)?n:Ea.current!==null?(e=yo(e,n,a),Pt(e,t)||(wt=!0),e):(dl&42)===0?(wt=!0,e.memoizedState=n):(e=ip(),Re.lanes|=e,bl|=e,t)}function a0(e,t,n,a,i){var s=G.p;G.p=s!==0&&8>s?s:8;var d=T.T,m={};T.T=m,So(e,!1,t,n);try{var y=i(),D=T.S;if(D!==null&&D(m,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var Y=wg(y,a);Di(e,t,Y,an(e))}else Di(e,t,a,an(e))}catch($){Di(e,t,{then:function(){},status:"rejected",reason:$},an())}finally{G.p=s,T.T=d}}function jg(){}function bo(e,t,n,a){if(e.tag!==5)throw Error(o(476));var i=i0(e).queue;a0(e,i,t,ee,n===null?jg:function(){return r0(e),n(a)})}function i0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function r0(e){var t=i0(e).next.queue;Di(e,t,{},an())}function vo(){return Nt(Ki)}function s0(){return dt().memoizedState}function u0(){return dt().memoizedState}function Og(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=an();e=cl(n);var a=fl(t,e,n);a!==null&&(rn(a,t,n),Ai(a,t,n)),t={cache:Ju()},e.payload=t;return}t=t.return}}function _g(e,t,n){var a=an();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Fr(e)?c0(t,n):(n=Lu(e,t,n,a),n!==null&&(rn(n,e,a),f0(n,t,a)))}function o0(e,t,n){var a=an();Di(e,t,n,a)}function Di(e,t,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fr(e))c0(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,m=s(d,n);if(i.hasEagerState=!0,i.eagerState=m,Pt(m,d))return Nr(e,t,i,0),Pe===null&&kr(),!1}catch{}finally{}if(n=Lu(e,t,i,a),n!==null)return rn(n,e,a),f0(n,t,a),!0}return!1}function So(e,t,n,a){if(a={lane:2,revertLane:Po(),action:a,hasEagerState:!1,eagerState:null,next:null},Fr(e)){if(t)throw Error(o(479))}else t=Lu(e,n,a,2),t!==null&&rn(t,e,2)}function Fr(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function c0(e,t){Aa=Xr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function f0(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,la(e,n)}}var Wr={readContext:Nt,use:$r,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut,useHostTransitionStatus:ut,useFormState:ut,useActionState:ut,useOptimistic:ut,useMemoCache:ut,useCacheRefresh:ut},d0={readContext:Nt,use:$r,useCallback:function(e,t){return Xt().memoizedState=[e,t===void 0?null:t],e},useContext:Nt,useEffect:Jd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Jr(4194308,4,Pd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jr(4194308,4,e,t)},useInsertionEffect:function(e,t){Jr(4,2,e,t)},useMemo:function(e,t){var n=Xt();t=t===void 0?null:t;var a=e();if(Xl){je(!0);try{e()}finally{je(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Xt();if(n!==void 0){var i=n(t);if(Xl){je(!0);try{n(t)}finally{je(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=_g.bind(null,Re,e),[a.memoizedState,e]},useRef:function(e){var t=Xt();return e={current:e},t.memoizedState=e},useState:function(e){e=mo(e);var t=e.queue,n=o0.bind(null,Re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xo,useDeferredValue:function(e,t){var n=Xt();return yo(n,e,t)},useTransition:function(){var e=mo(!1);return e=a0.bind(null,Re,e.queue,!0,!1),Xt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Re,i=Xt();if(Ve){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Pe===null)throw Error(o(349));(Ue&124)!==0||Nd(a,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Jd(Md.bind(null,a,s,e),[e]),a.flags|=2048,za(9,Kr(),Cd.bind(null,a,s,n,t),null),n},useId:function(){var e=Xt(),t=Pe.identifierPrefix;if(Ve){var n=$n,a=Zn;n=(a&~(1<<32-Ze(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=Zr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Eg++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:vo,useFormState:Xd,useActionState:Xd,useOptimistic:function(e){var t=Xt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=So.bind(null,Re,!0,n),n.dispatch=t,[e,t]},useMemoCache:fo,useCacheRefresh:function(){return Xt().memoizedState=Og.bind(null,Re)}},p0={readContext:Nt,use:$r,useCallback:t0,useContext:Nt,useEffect:Fd,useImperativeHandle:e0,useInsertionEffect:Wd,useLayoutEffect:Id,useMemo:n0,useReducer:Qr,useRef:Kd,useState:function(){return Qr(Jn)},useDebugValue:xo,useDeferredValue:function(e,t){var n=dt();return l0(n,Je.memoizedState,e,t)},useTransition:function(){var e=Qr(Jn)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:Oi(e),t]},useSyncExternalStore:kd,useId:s0,useHostTransitionStatus:vo,useFormState:Zd,useActionState:Zd,useOptimistic:function(e,t){var n=dt();return Hd(n,Je,e,t)},useMemoCache:fo,useCacheRefresh:u0},Dg={readContext:Nt,use:$r,useCallback:t0,useContext:Nt,useEffect:Fd,useImperativeHandle:e0,useInsertionEffect:Wd,useLayoutEffect:Id,useMemo:n0,useReducer:ho,useRef:Kd,useState:function(){return ho(Jn)},useDebugValue:xo,useDeferredValue:function(e,t){var n=dt();return Je===null?yo(n,e,t):l0(n,Je.memoizedState,e,t)},useTransition:function(){var e=ho(Jn)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:Oi(e),t]},useSyncExternalStore:kd,useId:s0,useHostTransitionStatus:vo,useFormState:Qd,useActionState:Qd,useOptimistic:function(e,t){var n=dt();return Je!==null?Hd(n,Je,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fo,useCacheRefresh:u0},ja=null,Ri=0;function Ir(e){var t=Ri;return Ri+=1,ja===null&&(ja=[]),Ad(ja,e,t)}function ki(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Pr(e,t){throw t.$$typeof===j?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function h0(e){var t=e._init;return t(e._payload)}function m0(e){function t(z,A){if(e){var _=z.deletions;_===null?(z.deletions=[A],z.flags|=16):_.push(A)}}function n(z,A){if(!e)return null;for(;A!==null;)t(z,A),A=A.sibling;return null}function a(z){for(var A=new Map;z!==null;)z.key!==null?A.set(z.key,z):A.set(z.index,z),z=z.sibling;return A}function i(z,A){return z=Xn(z,A),z.index=0,z.sibling=null,z}function s(z,A,_){return z.index=_,e?(_=z.alternate,_!==null?(_=_.index,_<A?(z.flags|=67108866,A):_):(z.flags|=67108866,A)):(z.flags|=1048576,A)}function d(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function m(z,A,_,Z){return A===null||A.tag!==6?(A=Vu(_,z.mode,Z),A.return=z,A):(A=i(A,_),A.return=z,A)}function y(z,A,_,Z){var oe=_.type;return oe===R?Y(z,A,_.props.children,Z,_.key):A!==null&&(A.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===ie&&h0(oe)===A.type)?(A=i(A,_.props),ki(A,_),A.return=z,A):(A=Mr(_.type,_.key,_.props,null,z.mode,Z),ki(A,_),A.return=z,A)}function D(z,A,_,Z){return A===null||A.tag!==4||A.stateNode.containerInfo!==_.containerInfo||A.stateNode.implementation!==_.implementation?(A=Gu(_,z.mode,Z),A.return=z,A):(A=i(A,_.children||[]),A.return=z,A)}function Y(z,A,_,Z,oe){return A===null||A.tag!==7?(A=Ul(_,z.mode,Z,oe),A.return=z,A):(A=i(A,_),A.return=z,A)}function $(z,A,_){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Vu(""+A,z.mode,_),A.return=z,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case E:return _=Mr(A.type,A.key,A.props,null,z.mode,_),ki(_,A),_.return=z,_;case M:return A=Gu(A,z.mode,_),A.return=z,A;case ie:var Z=A._init;return A=Z(A._payload),$(z,A,_)}if(ge(A)||F(A))return A=Ul(A,z.mode,_,null),A.return=z,A;if(typeof A.then=="function")return $(z,Ir(A),_);if(A.$$typeof===K)return $(z,Lr(z,A),_);Pr(z,A)}return null}function k(z,A,_,Z){var oe=A!==null?A.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return oe!==null?null:m(z,A,""+_,Z);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case E:return _.key===oe?y(z,A,_,Z):null;case M:return _.key===oe?D(z,A,_,Z):null;case ie:return oe=_._init,_=oe(_._payload),k(z,A,_,Z)}if(ge(_)||F(_))return oe!==null?null:Y(z,A,_,Z,null);if(typeof _.then=="function")return k(z,A,Ir(_),Z);if(_.$$typeof===K)return k(z,A,Lr(z,_),Z);Pr(z,_)}return null}function N(z,A,_,Z,oe){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return z=z.get(_)||null,m(A,z,""+Z,oe);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case E:return z=z.get(Z.key===null?_:Z.key)||null,y(A,z,Z,oe);case M:return z=z.get(Z.key===null?_:Z.key)||null,D(A,z,Z,oe);case ie:var Ne=Z._init;return Z=Ne(Z._payload),N(z,A,_,Z,oe)}if(ge(Z)||F(Z))return z=z.get(_)||null,Y(A,z,Z,oe,null);if(typeof Z.then=="function")return N(z,A,_,Ir(Z),oe);if(Z.$$typeof===K)return N(z,A,_,Lr(A,Z),oe);Pr(A,Z)}return null}function Ee(z,A,_,Z){for(var oe=null,Ne=null,me=A,Se=A=0,At=null;me!==null&&Se<_.length;Se++){me.index>Se?(At=me,me=null):At=me.sibling;var qe=k(z,me,_[Se],Z);if(qe===null){me===null&&(me=At);break}e&&me&&qe.alternate===null&&t(z,me),A=s(qe,A,Se),Ne===null?oe=qe:Ne.sibling=qe,Ne=qe,me=At}if(Se===_.length)return n(z,me),Ve&&Hl(z,Se),oe;if(me===null){for(;Se<_.length;Se++)me=$(z,_[Se],Z),me!==null&&(A=s(me,A,Se),Ne===null?oe=me:Ne.sibling=me,Ne=me);return Ve&&Hl(z,Se),oe}for(me=a(me);Se<_.length;Se++)At=N(me,z,Se,_[Se],Z),At!==null&&(e&&At.alternate!==null&&me.delete(At.key===null?Se:At.key),A=s(At,A,Se),Ne===null?oe=At:Ne.sibling=At,Ne=At);return e&&me.forEach(function(Ol){return t(z,Ol)}),Ve&&Hl(z,Se),oe}function ye(z,A,_,Z){if(_==null)throw Error(o(151));for(var oe=null,Ne=null,me=A,Se=A=0,At=null,qe=_.next();me!==null&&!qe.done;Se++,qe=_.next()){me.index>Se?(At=me,me=null):At=me.sibling;var Ol=k(z,me,qe.value,Z);if(Ol===null){me===null&&(me=At);break}e&&me&&Ol.alternate===null&&t(z,me),A=s(Ol,A,Se),Ne===null?oe=Ol:Ne.sibling=Ol,Ne=Ol,me=At}if(qe.done)return n(z,me),Ve&&Hl(z,Se),oe;if(me===null){for(;!qe.done;Se++,qe=_.next())qe=$(z,qe.value,Z),qe!==null&&(A=s(qe,A,Se),Ne===null?oe=qe:Ne.sibling=qe,Ne=qe);return Ve&&Hl(z,Se),oe}for(me=a(me);!qe.done;Se++,qe=_.next())qe=N(me,z,Se,qe.value,Z),qe!==null&&(e&&qe.alternate!==null&&me.delete(qe.key===null?Se:qe.key),A=s(qe,A,Se),Ne===null?oe=qe:Ne.sibling=qe,Ne=qe);return e&&me.forEach(function(Rx){return t(z,Rx)}),Ve&&Hl(z,Se),oe}function We(z,A,_,Z){if(typeof _=="object"&&_!==null&&_.type===R&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case E:e:{for(var oe=_.key;A!==null;){if(A.key===oe){if(oe=_.type,oe===R){if(A.tag===7){n(z,A.sibling),Z=i(A,_.props.children),Z.return=z,z=Z;break e}}else if(A.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===ie&&h0(oe)===A.type){n(z,A.sibling),Z=i(A,_.props),ki(Z,_),Z.return=z,z=Z;break e}n(z,A);break}else t(z,A);A=A.sibling}_.type===R?(Z=Ul(_.props.children,z.mode,Z,_.key),Z.return=z,z=Z):(Z=Mr(_.type,_.key,_.props,null,z.mode,Z),ki(Z,_),Z.return=z,z=Z)}return d(z);case M:e:{for(oe=_.key;A!==null;){if(A.key===oe)if(A.tag===4&&A.stateNode.containerInfo===_.containerInfo&&A.stateNode.implementation===_.implementation){n(z,A.sibling),Z=i(A,_.children||[]),Z.return=z,z=Z;break e}else{n(z,A);break}else t(z,A);A=A.sibling}Z=Gu(_,z.mode,Z),Z.return=z,z=Z}return d(z);case ie:return oe=_._init,_=oe(_._payload),We(z,A,_,Z)}if(ge(_))return Ee(z,A,_,Z);if(F(_)){if(oe=F(_),typeof oe!="function")throw Error(o(150));return _=oe.call(_),ye(z,A,_,Z)}if(typeof _.then=="function")return We(z,A,Ir(_),Z);if(_.$$typeof===K)return We(z,A,Lr(z,_),Z);Pr(z,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,A!==null&&A.tag===6?(n(z,A.sibling),Z=i(A,_),Z.return=z,z=Z):(n(z,A),Z=Vu(_,z.mode,Z),Z.return=z,z=Z),d(z)):n(z,A)}return function(z,A,_,Z){try{Ri=0;var oe=We(z,A,_,Z);return ja=null,oe}catch(me){if(me===wi||me===Vr)throw me;var Ne=en(29,me,null,z.mode);return Ne.lanes=Z,Ne.return=z,Ne}finally{}}}var Oa=m0(!0),g0=m0(!1),mn=q(null),Rn=null;function pl(e){var t=e.alternate;ne(yt,yt.current&1),ne(mn,e),Rn===null&&(t===null||Ea.current!==null||t.memoizedState!==null)&&(Rn=e)}function x0(e){if(e.tag===22){if(ne(yt,yt.current),ne(mn,e),Rn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Rn=e)}}else hl()}function hl(){ne(yt,yt.current),ne(mn,mn.current)}function Fn(e){P(mn),Rn===e&&(Rn=null),P(yt)}var yt=q(0);function es(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||fc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function wo(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Eo={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=an(),i=cl(a);i.payload=t,n!=null&&(i.callback=n),t=fl(e,i,a),t!==null&&(rn(t,e,a),Ai(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=an(),i=cl(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=fl(e,i,a),t!==null&&(rn(t,e,a),Ai(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=an(),a=cl(n);a.tag=2,t!=null&&(a.callback=t),t=fl(e,a,n),t!==null&&(rn(t,e,n),Ai(t,e,n))}};function y0(e,t,n,a,i,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,d):t.prototype&&t.prototype.isPureReactComponent?!hi(n,a)||!hi(i,s):!0}function b0(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Eo.enqueueReplaceState(t,t.state,null)}function Zl(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=b({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var ts=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function v0(e){ts(e)}function S0(e){console.error(e)}function w0(e){ts(e)}function ns(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function E0(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Ao(e,t,n){return n=cl(n),n.tag=3,n.payload={element:null},n.callback=function(){ns(e,t)},n}function A0(e){return e=cl(e),e.tag=3,e}function T0(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var s=a.value;e.payload=function(){return i(s)},e.callback=function(){E0(t,n,a)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){E0(t,n,a),typeof i!="function"&&(vl===null?vl=new Set([this]):vl.add(this));var m=a.stack;this.componentDidCatch(a.value,{componentStack:m!==null?m:""})})}function Rg(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&bi(t,n,i,!0),n=mn.current,n!==null){switch(n.tag){case 13:return Rn===null?Ko():n.alternate===null&&rt===0&&(rt=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===Iu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Fo(e,a,i)),!1;case 22:return n.flags|=65536,a===Iu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Fo(e,a,i)),!1}throw Error(o(435,n.tag))}return Fo(e,a,i),Ko(),!1}if(Ve)return t=mn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==Zu&&(e=Error(o(422),{cause:a}),yi(fn(e,n)))):(a!==Zu&&(t=Error(o(423),{cause:a}),yi(fn(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=fn(a,n),i=Ao(e.stateNode,a,i),to(e,i),rt!==4&&(rt=2)),!1;var s=Error(o(520),{cause:a});if(s=fn(s,n),Li===null?Li=[s]:Li.push(s),rt!==4&&(rt=2),t===null)return!0;a=fn(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Ao(n.stateNode,a,e),to(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(vl===null||!vl.has(s))))return n.flags|=65536,i&=-i,n.lanes|=i,i=A0(i),T0(i,e,n,a),to(n,i),!1}n=n.return}while(n!==null);return!1}var z0=Error(o(461)),wt=!1;function _t(e,t,n,a){t.child=e===null?g0(t,null,n,a):Oa(t,e.child,n,a)}function j0(e,t,n,a,i){n=n.render;var s=t.ref;if("ref"in a){var d={};for(var m in a)m!=="ref"&&(d[m]=a[m])}else d=a;return Gl(t),a=ro(e,t,n,d,s,i),m=so(),e!==null&&!wt?(uo(e,t,i),Wn(e,t,i)):(Ve&&m&&Yu(t),t.flags|=1,_t(e,t,a,i),t.child)}function O0(e,t,n,a,i){if(e===null){var s=n.type;return typeof s=="function"&&!qu(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,_0(e,t,s,a,i)):(e=Mr(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!ko(e,i)){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:hi,n(d,a)&&e.ref===t.ref)return Wn(e,t,i)}return t.flags|=1,e=Xn(s,a),e.ref=t.ref,e.return=t,t.child=e}function _0(e,t,n,a,i){if(e!==null){var s=e.memoizedProps;if(hi(s,a)&&e.ref===t.ref)if(wt=!1,t.pendingProps=a=s,ko(e,i))(e.flags&131072)!==0&&(wt=!0);else return t.lanes=e.lanes,Wn(e,t,i)}return To(e,t,n,a,i)}function D0(e,t,n){var a=t.pendingProps,i=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;t.childLanes=s&~a}else t.childLanes=0,t.child=null;return R0(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&qr(t,s!==null?s.cachePool:null),s!==null?_d(t,s):lo(),x0(t);else return t.lanes=t.childLanes=536870912,R0(e,t,s!==null?s.baseLanes|n:n,n)}else s!==null?(qr(t,s.cachePool),_d(t,s),hl(),t.memoizedState=null):(e!==null&&qr(t,null),lo(),hl());return _t(e,t,i,n),t.child}function R0(e,t,n,a){var i=Wu();return i=i===null?null:{parent:xt._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&qr(t,null),lo(),x0(t),e!==null&&bi(e,t,a,!0),null}function ls(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function To(e,t,n,a,i){return Gl(t),n=ro(e,t,n,a,void 0,i),a=so(),e!==null&&!wt?(uo(e,t,i),Wn(e,t,i)):(Ve&&a&&Yu(t),t.flags|=1,_t(e,t,n,i),t.child)}function k0(e,t,n,a,i,s){return Gl(t),t.updateQueue=null,n=Rd(t,a,n,i),Dd(e),a=so(),e!==null&&!wt?(uo(e,t,s),Wn(e,t,s)):(Ve&&a&&Yu(t),t.flags|=1,_t(e,t,n,s),t.child)}function N0(e,t,n,a,i){if(Gl(t),t.stateNode===null){var s=ya,d=n.contextType;typeof d=="object"&&d!==null&&(s=Nt(d)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Eo,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},Pu(t),d=n.contextType,s.context=typeof d=="object"&&d!==null?Nt(d):ya,s.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(wo(t,n,d,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&Eo.enqueueReplaceState(s,s.state,null),zi(t,a,s,i),Ti(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,y=Zl(n,m);s.props=y;var D=s.context,Y=n.contextType;d=ya,typeof Y=="object"&&Y!==null&&(d=Nt(Y));var $=n.getDerivedStateFromProps;Y=typeof $=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,Y||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||D!==d)&&b0(t,s,a,d),ol=!1;var k=t.memoizedState;s.state=k,zi(t,a,s,i),Ti(),D=t.memoizedState,m||k!==D||ol?(typeof $=="function"&&(wo(t,n,$,a),D=t.memoizedState),(y=ol||y0(t,n,y,a,k,D,d))?(Y||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=D),s.props=a,s.state=D,s.context=d,a=y):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,eo(e,t),d=t.memoizedProps,Y=Zl(n,d),s.props=Y,$=t.pendingProps,k=s.context,D=n.contextType,y=ya,typeof D=="object"&&D!==null&&(y=Nt(D)),m=n.getDerivedStateFromProps,(D=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==$||k!==y)&&b0(t,s,a,y),ol=!1,k=t.memoizedState,s.state=k,zi(t,a,s,i),Ti();var N=t.memoizedState;d!==$||k!==N||ol||e!==null&&e.dependencies!==null&&Hr(e.dependencies)?(typeof m=="function"&&(wo(t,n,m,a),N=t.memoizedState),(Y=ol||y0(t,n,Y,a,k,N,y)||e!==null&&e.dependencies!==null&&Hr(e.dependencies))?(D||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,N,y),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,N,y)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=N),s.props=a,s.state=N,s.context=y,a=Y):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,ls(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=Oa(t,e.child,null,i),t.child=Oa(t,null,n,i)):_t(e,t,n,i),t.memoizedState=s.state,e=t.child):e=Wn(e,t,i),e}function C0(e,t,n,a){return xi(),t.flags|=256,_t(e,t,n,a),t.child}var zo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jo(e){return{baseLanes:e,cachePool:Sd()}}function Oo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=gn),e}function M0(e,t,n){var a=t.pendingProps,i=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(yt.current&2)!==0),d&&(i=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ve){if(i?pl(t):hl(),Ve){var m=it,y;if(y=m){e:{for(y=m,m=Dn;y.nodeType!==8;){if(!m){m=null;break e}if(y=En(y.nextSibling),y===null){m=null;break e}}m=y}m!==null?(t.memoizedState={dehydrated:m,treeContext:Bl!==null?{id:Zn,overflow:$n}:null,retryLane:536870912,hydrationErrors:null},y=en(18,null,null,0),y.stateNode=m,y.return=t,t.child=y,Ht=t,it=null,y=!0):y=!1}y||ql(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return fc(m)?t.lanes=32:t.lanes=536870912,null;Fn(t)}return m=a.children,a=a.fallback,i?(hl(),i=t.mode,m=as({mode:"hidden",children:m},i),a=Ul(a,i,n,null),m.return=t,a.return=t,m.sibling=a,t.child=m,i=t.child,i.memoizedState=jo(n),i.childLanes=Oo(e,d,n),t.memoizedState=zo,a):(pl(t),_o(t,m))}if(y=e.memoizedState,y!==null&&(m=y.dehydrated,m!==null)){if(s)t.flags&256?(pl(t),t.flags&=-257,t=Do(e,t,n)):t.memoizedState!==null?(hl(),t.child=e.child,t.flags|=128,t=null):(hl(),i=a.fallback,m=t.mode,a=as({mode:"visible",children:a.children},m),i=Ul(i,m,n,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,Oa(t,e.child,null,n),a=t.child,a.memoizedState=jo(n),a.childLanes=Oo(e,d,n),t.memoizedState=zo,t=i);else if(pl(t),fc(m)){if(d=m.nextSibling&&m.nextSibling.dataset,d)var D=d.dgst;d=D,a=Error(o(419)),a.stack="",a.digest=d,yi({value:a,source:null,stack:null}),t=Do(e,t,n)}else if(wt||bi(e,t,n,!1),d=(n&e.childLanes)!==0,wt||d){if(d=Pe,d!==null&&(a=n&-n,a=(a&42)!==0?1:ai(a),a=(a&(d.suspendedLanes|n))!==0?0:a,a!==0&&a!==y.retryLane))throw y.retryLane=a,xa(e,a),rn(d,e,a),z0;m.data==="$?"||Ko(),t=Do(e,t,n)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,it=En(m.nextSibling),Ht=t,Ve=!0,Ll=null,Dn=!1,e!==null&&(pn[hn++]=Zn,pn[hn++]=$n,pn[hn++]=Bl,Zn=e.id,$n=e.overflow,Bl=t),t=_o(t,a.children),t.flags|=4096);return t}return i?(hl(),i=a.fallback,m=t.mode,y=e.child,D=y.sibling,a=Xn(y,{mode:"hidden",children:a.children}),a.subtreeFlags=y.subtreeFlags&65011712,D!==null?i=Xn(D,i):(i=Ul(i,m,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,m=e.child.memoizedState,m===null?m=jo(n):(y=m.cachePool,y!==null?(D=xt._currentValue,y=y.parent!==D?{parent:D,pool:D}:y):y=Sd(),m={baseLanes:m.baseLanes|n,cachePool:y}),i.memoizedState=m,i.childLanes=Oo(e,d,n),t.memoizedState=zo,a):(pl(t),n=e.child,e=n.sibling,n=Xn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function _o(e,t){return t=as({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function as(e,t){return e=en(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Do(e,t,n){return Oa(t,e.child,null,n),e=_o(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function U0(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Qu(e.return,t,n)}function Ro(e,t,n,a,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=i)}function B0(e,t,n){var a=t.pendingProps,i=a.revealOrder,s=a.tail;if(_t(e,t,a.children,n),a=yt.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&U0(e,n,t);else if(e.tag===19)U0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(ne(yt,a),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&es(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ro(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&es(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ro(t,!0,n,null,s);break;case"together":Ro(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(bi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ko(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Hr(e)))}function kg(e,t,n){switch(t.tag){case 3:Ae(t,t.stateNode.containerInfo),ul(t,xt,e.memoizedState.cache),xi();break;case 27:case 5:kt(t);break;case 4:Ae(t,t.stateNode.containerInfo);break;case 10:ul(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(pl(t),t.flags|=128,null):(n&t.child.childLanes)!==0?M0(e,t,n):(pl(t),e=Wn(e,t,n),e!==null?e.sibling:null);pl(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(bi(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return B0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(yt,yt.current),a)break;return null;case 22:case 23:return t.lanes=0,D0(e,t,n);case 24:ul(t,xt,e.memoizedState.cache)}return Wn(e,t,n)}function H0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)wt=!0;else{if(!ko(e,n)&&(t.flags&128)===0)return wt=!1,kg(e,t,n);wt=(e.flags&131072)!==0}else wt=!1,Ve&&(t.flags&1048576)!==0&&hd(t,Br,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,i=a._init;if(a=i(a._payload),t.type=a,typeof a=="function")qu(a)?(e=Zl(a,e),t.tag=1,t=N0(null,t,a,e,n)):(t.tag=0,t=To(null,t,a,e,n));else{if(a!=null){if(i=a.$$typeof,i===re){t.tag=11,t=j0(null,t,a,e,n);break e}else if(i===Q){t.tag=14,t=O0(null,t,a,e,n);break e}}throw t=ve(a)||a,Error(o(306,t,""))}}return t;case 0:return To(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=Zl(a,t.pendingProps),N0(e,t,a,i,n);case 3:e:{if(Ae(t,t.stateNode.containerInfo),e===null)throw Error(o(387));a=t.pendingProps;var s=t.memoizedState;i=s.element,eo(e,t),zi(t,a,null,n);var d=t.memoizedState;if(a=d.cache,ul(t,xt,a),a!==s.cache&&Ku(t,[xt],n,!0),Ti(),a=d.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=C0(e,t,a,n);break e}else if(a!==i){i=fn(Error(o(424)),t),yi(i),t=C0(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(it=En(e.firstChild),Ht=t,Ve=!0,Ll=null,Dn=!0,n=g0(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(xi(),a===i){t=Wn(e,t,n);break e}_t(e,t,a,n)}t=t.child}return t;case 26:return ls(e,t),e===null?(n=Gp(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ve||(n=t.type,e=t.pendingProps,a=ys(ce.current).createElement(n),a[Ke]=t,a[st]=e,Rt(a,n,e),St(a),t.stateNode=a):t.memoizedState=Gp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return kt(t),e===null&&Ve&&(a=t.stateNode=Lp(t.type,t.pendingProps,ce.current),Ht=t,Dn=!0,i=it,El(t.type)?(dc=i,it=En(a.firstChild)):it=i),_t(e,t,t.pendingProps.children,n),ls(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ve&&((i=a=it)&&(a=rx(a,t.type,t.pendingProps,Dn),a!==null?(t.stateNode=a,Ht=t,it=En(a.firstChild),Dn=!1,i=!0):i=!1),i||ql(t)),kt(t),i=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,a=s.children,uc(i,s)?a=null:d!==null&&uc(i,d)&&(t.flags|=32),t.memoizedState!==null&&(i=ro(e,t,Ag,null,null,n),Ki._currentValue=i),ls(e,t),_t(e,t,a,n),t.child;case 6:return e===null&&Ve&&((e=n=it)&&(n=sx(n,t.pendingProps,Dn),n!==null?(t.stateNode=n,Ht=t,it=null,e=!0):e=!1),e||ql(t)),null;case 13:return M0(e,t,n);case 4:return Ae(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Oa(t,null,a,n):_t(e,t,a,n),t.child;case 11:return j0(e,t,t.type,t.pendingProps,n);case 7:return _t(e,t,t.pendingProps,n),t.child;case 8:return _t(e,t,t.pendingProps.children,n),t.child;case 12:return _t(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,ul(t,t.type,a.value),_t(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,Gl(t),i=Nt(i),a=a(i),t.flags|=1,_t(e,t,a,n),t.child;case 14:return O0(e,t,t.type,t.pendingProps,n);case 15:return _0(e,t,t.type,t.pendingProps,n);case 19:return B0(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=as(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Xn(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return D0(e,t,n);case 24:return Gl(t),a=Nt(xt),e===null?(i=Wu(),i===null&&(i=Pe,s=Ju(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=n),i=s),t.memoizedState={parent:a,cache:i},Pu(t),ul(t,xt,i)):((e.lanes&n)!==0&&(eo(e,t),zi(t,null,null,n),Ti()),i=e.memoizedState,s=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ul(t,xt,a)):(a=s.cache,ul(t,xt,a),a!==i.cache&&Ku(t,[xt],n,!0))),_t(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function In(e){e.flags|=4}function L0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Qp(t)){if(t=mn.current,t!==null&&((Ue&4194048)===Ue?Rn!==null:(Ue&62914560)!==Ue&&(Ue&536870912)===0||t!==Rn))throw Ei=Iu,wd;e.flags|=8192}}function is(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?br():536870912,e.lanes|=t,ka|=t)}function Ni(e,t){if(!Ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Ng(e,t,n){var a=t.pendingProps;switch(Xu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return at(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Kn(xt),Xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(gi(t)?In(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xd())),at(t),null;case 26:return n=t.memoizedState,e===null?(In(t),n!==null?(at(t),L0(t,n)):(at(t),t.flags&=-16777217)):n?n!==e.memoizedState?(In(t),at(t),L0(t,n)):(at(t),t.flags&=-16777217):(e.memoizedProps!==a&&In(t),at(t),t.flags&=-16777217),null;case 27:Ut(t),n=ce.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&In(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return at(t),null}e=de.current,gi(t)?md(t):(e=Lp(i,a,n),t.stateNode=e,In(t))}return at(t),null;case 5:if(Ut(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&In(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return at(t),null}if(e=de.current,gi(t))md(t);else{switch(i=ys(ce.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}e[Ke]=t,e[st]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Rt(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&In(t)}}return at(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&In(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(e=ce.current,gi(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=Ht,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Ke]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||kp(e.nodeValue,n)),e||ql(t)}else e=ys(e).createTextNode(a),e[Ke]=t,t.stateNode=e}return at(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=gi(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[Ke]=t}else xi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),i=!1}else i=xd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Fn(t),t):(Fn(t),null)}if(Fn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var s=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==i&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),is(t,t.updateQueue),at(t),null;case 4:return Xe(),e===null&&lc(t.stateNode.containerInfo),at(t),null;case 10:return Kn(t.type),at(t),null;case 19:if(P(yt),i=t.memoizedState,i===null)return at(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Ni(i,!1);else{if(rt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=es(e),s!==null){for(t.flags|=128,Ni(i,!1),e=s.updateQueue,t.updateQueue=e,is(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)pd(n,e),n=n.sibling;return ne(yt,yt.current&1|2),t.child}e=e.sibling}i.tail!==null&&lt()>us&&(t.flags|=128,a=!0,Ni(i,!1),t.lanes=4194304)}else{if(!a)if(e=es(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,is(t,e),Ni(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Ve)return at(t),null}else 2*lt()-i.renderingStartTime>us&&n!==536870912&&(t.flags|=128,a=!0,Ni(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=lt(),t.sibling=null,e=yt.current,ne(yt,a?e&1|2:e&1),t):(at(t),null);case 22:case 23:return Fn(t),ao(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),n=t.updateQueue,n!==null&&is(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&P(Yl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Kn(xt),at(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Cg(e,t){switch(Xu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kn(xt),Xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ut(t),null;case 13:if(Fn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return P(yt),null;case 4:return Xe(),null;case 10:return Kn(t.type),null;case 22:case 23:return Fn(t),ao(),e!==null&&P(Yl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Kn(xt),null;case 25:return null;default:return null}}function q0(e,t){switch(Xu(t),t.tag){case 3:Kn(xt),Xe();break;case 26:case 27:case 5:Ut(t);break;case 4:Xe();break;case 13:Fn(t);break;case 19:P(yt);break;case 10:Kn(t.type);break;case 22:case 23:Fn(t),ao(),e!==null&&P(Yl);break;case 24:Kn(xt)}}function Ci(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var s=n.create,d=n.inst;a=s(),d.destroy=a}n=n.next}while(n!==i)}}catch(m){Ie(t,t.return,m)}}function ml(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var s=i.next;a=s;do{if((a.tag&e)===e){var d=a.inst,m=d.destroy;if(m!==void 0){d.destroy=void 0,i=t;var y=n,D=m;try{D()}catch(Y){Ie(i,y,Y)}}}a=a.next}while(a!==s)}}catch(Y){Ie(t,t.return,Y)}}function V0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Od(t,n)}catch(a){Ie(e,e.return,a)}}}function G0(e,t,n){n.props=Zl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ie(e,t,a)}}function Mi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){Ie(e,t,i)}}function kn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){Ie(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Ie(e,t,i)}else n.current=null}function Y0(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){Ie(e,e.return,i)}}function No(e,t,n){try{var a=e.stateNode;tx(a,e.type,n,t),a[st]=t}catch(i){Ie(e,e.return,i)}}function X0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&El(e.type)||e.tag===4}function Co(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||X0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&El(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xs));else if(a!==4&&(a===27&&El(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Mo(e,t,n),e=e.sibling;e!==null;)Mo(e,t,n),e=e.sibling}function rs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&El(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(rs(e,t,n),e=e.sibling;e!==null;)rs(e,t,n),e=e.sibling}function Z0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Rt(t,a,n),t[Ke]=e,t[st]=n}catch(s){Ie(e,e.return,s)}}var Pn=!1,ot=!1,Uo=!1,$0=typeof WeakSet=="function"?WeakSet:Set,Et=null;function Mg(e,t){if(e=e.containerInfo,rc=As,e=ld(e),Nu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,m=-1,y=-1,D=0,Y=0,$=e,k=null;t:for(;;){for(var N;$!==n||i!==0&&$.nodeType!==3||(m=d+i),$!==s||a!==0&&$.nodeType!==3||(y=d+a),$.nodeType===3&&(d+=$.nodeValue.length),(N=$.firstChild)!==null;)k=$,$=N;for(;;){if($===e)break t;if(k===n&&++D===i&&(m=d),k===s&&++Y===a&&(y=d),(N=$.nextSibling)!==null)break;$=k,k=$.parentNode}$=N}n=m===-1||y===-1?null:{start:m,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(sc={focusedElem:e,selectionRange:n},As=!1,Et=t;Et!==null;)if(t=Et,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Et=e;else for(;Et!==null;){switch(t=Et,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,i=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var Ee=Zl(n.type,i,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(Ee,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(ye){Ie(n,n.return,ye)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)cc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Et=e;break}Et=t.return}}function Q0(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:gl(e,n),a&4&&Ci(5,n);break;case 1:if(gl(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){Ie(n,n.return,d)}else{var i=Zl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ie(n,n.return,d)}}a&64&&V0(n),a&512&&Mi(n,n.return);break;case 3:if(gl(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Od(e,t)}catch(d){Ie(n,n.return,d)}}break;case 27:t===null&&a&4&&Z0(n);case 26:case 5:gl(e,n),t===null&&a&4&&Y0(n),a&512&&Mi(n,n.return);break;case 12:gl(e,n);break;case 13:gl(e,n),a&4&&F0(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Xg.bind(null,n),ux(e,n))));break;case 22:if(a=n.memoizedState!==null||Pn,!a){t=t!==null&&t.memoizedState!==null||ot,i=Pn;var s=ot;Pn=a,(ot=t)&&!s?xl(e,n,(n.subtreeFlags&8772)!==0):gl(e,n),Pn=i,ot=s}break;case 30:break;default:gl(e,n)}}function K0(e){var t=e.alternate;t!==null&&(e.alternate=null,K0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&hu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tt=null,Zt=!1;function el(e,t,n){for(n=n.child;n!==null;)J0(e,t,n),n=n.sibling}function J0(e,t,n){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(se,n)}catch{}switch(n.tag){case 26:ot||kn(n,t),el(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ot||kn(n,t);var a=tt,i=Zt;El(n.type)&&(tt=n.stateNode,Zt=!1),el(e,t,n),Xi(n.stateNode),tt=a,Zt=i;break;case 5:ot||kn(n,t);case 6:if(a=tt,i=Zt,tt=null,el(e,t,n),tt=a,Zt=i,tt!==null)if(Zt)try{(tt.nodeType===9?tt.body:tt.nodeName==="HTML"?tt.ownerDocument.body:tt).removeChild(n.stateNode)}catch(s){Ie(n,t,s)}else try{tt.removeChild(n.stateNode)}catch(s){Ie(n,t,s)}break;case 18:tt!==null&&(Zt?(e=tt,Bp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ii(e)):Bp(tt,n.stateNode));break;case 4:a=tt,i=Zt,tt=n.stateNode.containerInfo,Zt=!0,el(e,t,n),tt=a,Zt=i;break;case 0:case 11:case 14:case 15:ot||ml(2,n,t),ot||ml(4,n,t),el(e,t,n);break;case 1:ot||(kn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&G0(n,t,a)),el(e,t,n);break;case 21:el(e,t,n);break;case 22:ot=(a=ot)||n.memoizedState!==null,el(e,t,n),ot=a;break;default:el(e,t,n)}}function F0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ii(e)}catch(n){Ie(t,t.return,n)}}function Ug(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $0),t;default:throw Error(o(435,e.tag))}}function Bo(e,t){var n=Ug(e);t.forEach(function(a){var i=Zg.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}function tn(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],s=e,d=t,m=d;e:for(;m!==null;){switch(m.tag){case 27:if(El(m.type)){tt=m.stateNode,Zt=!1;break e}break;case 5:tt=m.stateNode,Zt=!1;break e;case 3:case 4:tt=m.stateNode.containerInfo,Zt=!0;break e}m=m.return}if(tt===null)throw Error(o(160));J0(s,d,i),tt=null,Zt=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)W0(t,e),t=t.sibling}var wn=null;function W0(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tn(t,e),nn(e),a&4&&(ml(3,e,e.return),Ci(3,e),ml(5,e,e.return));break;case 1:tn(t,e),nn(e),a&512&&(ot||n===null||kn(n,n.return)),a&64&&Pn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=wn;if(tn(t,e),nn(e),a&512&&(ot||n===null||kn(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":s=i.getElementsByTagName("title")[0],(!s||s[ii]||s[Ke]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(a),i.head.insertBefore(s,i.querySelector("head > title"))),Rt(s,a,n),s[Ke]=e,St(s),a=s;break e;case"link":var d=Zp("link","href",i).get(a+(n.href||""));if(d){for(var m=0;m<d.length;m++)if(s=d[m],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(m,1);break t}}s=i.createElement(a),Rt(s,a,n),i.head.appendChild(s);break;case"meta":if(d=Zp("meta","content",i).get(a+(n.content||""))){for(m=0;m<d.length;m++)if(s=d[m],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(m,1);break t}}s=i.createElement(a),Rt(s,a,n),i.head.appendChild(s);break;default:throw Error(o(468,a))}s[Ke]=e,St(s),a=s}e.stateNode=a}else $p(i,e.type,e.stateNode);else e.stateNode=Xp(i,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?$p(i,e.type,e.stateNode):Xp(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&No(e,e.memoizedProps,n.memoizedProps)}break;case 27:tn(t,e),nn(e),a&512&&(ot||n===null||kn(n,n.return)),n!==null&&a&4&&No(e,e.memoizedProps,n.memoizedProps);break;case 5:if(tn(t,e),nn(e),a&512&&(ot||n===null||kn(n,n.return)),e.flags&32){i=e.stateNode;try{ca(i,"")}catch(N){Ie(e,e.return,N)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,No(e,i,n!==null?n.memoizedProps:i)),a&1024&&(Uo=!0);break;case 6:if(tn(t,e),nn(e),a&4){if(e.stateNode===null)throw Error(o(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(N){Ie(e,e.return,N)}}break;case 3:if(Ss=null,i=wn,wn=bs(t.containerInfo),tn(t,e),wn=i,nn(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Ii(t.containerInfo)}catch(N){Ie(e,e.return,N)}Uo&&(Uo=!1,I0(e));break;case 4:a=wn,wn=bs(e.stateNode.containerInfo),tn(t,e),nn(e),wn=a;break;case 12:tn(t,e),nn(e);break;case 13:tn(t,e),nn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Yo=lt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Bo(e,a)));break;case 22:i=e.memoizedState!==null;var y=n!==null&&n.memoizedState!==null,D=Pn,Y=ot;if(Pn=D||i,ot=Y||y,tn(t,e),ot=Y,Pn=D,nn(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||y||Pn||ot||$l(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){y=n=t;try{if(s=y.stateNode,i)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{m=y.stateNode;var $=y.memoizedProps.style,k=$!=null&&$.hasOwnProperty("display")?$.display:null;m.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(N){Ie(y,y.return,N)}}}else if(t.tag===6){if(n===null){y=t;try{y.stateNode.nodeValue=i?"":y.memoizedProps}catch(N){Ie(y,y.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Bo(e,n))));break;case 19:tn(t,e),nn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Bo(e,a)));break;case 30:break;case 21:break;default:tn(t,e),nn(e)}}function nn(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(X0(a)){n=a;break}a=a.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode,s=Co(e);rs(e,s,i);break;case 5:var d=n.stateNode;n.flags&32&&(ca(d,""),n.flags&=-33);var m=Co(e);rs(e,m,d);break;case 3:case 4:var y=n.stateNode.containerInfo,D=Co(e);Mo(e,D,y);break;default:throw Error(o(161))}}catch(Y){Ie(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function I0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;I0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function gl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Q0(e,t.alternate,t),t=t.sibling}function $l(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ml(4,t,t.return),$l(t);break;case 1:kn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&G0(t,t.return,n),$l(t);break;case 27:Xi(t.stateNode);case 26:case 5:kn(t,t.return),$l(t);break;case 22:t.memoizedState===null&&$l(t);break;case 30:$l(t);break;default:$l(t)}e=e.sibling}}function xl(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:xl(i,s,n),Ci(4,s);break;case 1:if(xl(i,s,n),a=s,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(D){Ie(a,a.return,D)}if(a=s,i=a.updateQueue,i!==null){var m=a.stateNode;try{var y=i.shared.hiddenCallbacks;if(y!==null)for(i.shared.hiddenCallbacks=null,i=0;i<y.length;i++)jd(y[i],m)}catch(D){Ie(a,a.return,D)}}n&&d&64&&V0(s),Mi(s,s.return);break;case 27:Z0(s);case 26:case 5:xl(i,s,n),n&&a===null&&d&4&&Y0(s),Mi(s,s.return);break;case 12:xl(i,s,n);break;case 13:xl(i,s,n),n&&d&4&&F0(i,s);break;case 22:s.memoizedState===null&&xl(i,s,n),Mi(s,s.return);break;case 30:break;default:xl(i,s,n)}t=t.sibling}}function Ho(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&vi(n))}function Lo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&vi(e))}function Nn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)P0(e,t,n,a),t=t.sibling}function P0(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Nn(e,t,n,a),i&2048&&Ci(9,t);break;case 1:Nn(e,t,n,a);break;case 3:Nn(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&vi(e)));break;case 12:if(i&2048){Nn(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,m=s.onPostCommit;typeof m=="function"&&m(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){Ie(t,t.return,y)}}else Nn(e,t,n,a);break;case 13:Nn(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?Nn(e,t,n,a):Ui(e,t):s._visibility&2?Nn(e,t,n,a):(s._visibility|=2,_a(e,t,n,a,(t.subtreeFlags&10256)!==0)),i&2048&&Ho(d,t);break;case 24:Nn(e,t,n,a),i&2048&&Lo(t.alternate,t);break;default:Nn(e,t,n,a)}}function _a(e,t,n,a,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,d=t,m=n,y=a,D=d.flags;switch(d.tag){case 0:case 11:case 15:_a(s,d,m,y,i),Ci(8,d);break;case 23:break;case 22:var Y=d.stateNode;d.memoizedState!==null?Y._visibility&2?_a(s,d,m,y,i):Ui(s,d):(Y._visibility|=2,_a(s,d,m,y,i)),i&&D&2048&&Ho(d.alternate,d);break;case 24:_a(s,d,m,y,i),i&&D&2048&&Lo(d.alternate,d);break;default:_a(s,d,m,y,i)}t=t.sibling}}function Ui(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:Ui(n,a),i&2048&&Ho(a.alternate,a);break;case 24:Ui(n,a),i&2048&&Lo(a.alternate,a);break;default:Ui(n,a)}t=t.sibling}}var Bi=8192;function Da(e){if(e.subtreeFlags&Bi)for(e=e.child;e!==null;)ep(e),e=e.sibling}function ep(e){switch(e.tag){case 26:Da(e),e.flags&Bi&&e.memoizedState!==null&&Sx(wn,e.memoizedState,e.memoizedProps);break;case 5:Da(e);break;case 3:case 4:var t=wn;wn=bs(e.stateNode.containerInfo),Da(e),wn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Bi,Bi=16777216,Da(e),Bi=t):Da(e));break;default:Da(e)}}function tp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Hi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Et=a,lp(a,e)}tp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)np(e),e=e.sibling}function np(e){switch(e.tag){case 0:case 11:case 15:Hi(e),e.flags&2048&&ml(9,e,e.return);break;case 3:Hi(e);break;case 12:Hi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ss(e)):Hi(e);break;default:Hi(e)}}function ss(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Et=a,lp(a,e)}tp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ml(8,t,t.return),ss(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ss(t));break;default:ss(t)}e=e.sibling}}function lp(e,t){for(;Et!==null;){var n=Et;switch(n.tag){case 0:case 11:case 15:ml(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:vi(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Et=a;else e:for(n=e;Et!==null;){a=Et;var i=a.sibling,s=a.return;if(K0(a),a===n){Et=null;break e}if(i!==null){i.return=s,Et=i;break e}Et=s}}}var Bg={getCacheForType:function(e){var t=Nt(xt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Hg=typeof WeakMap=="function"?WeakMap:Map,$e=0,Pe=null,Ce=null,Ue=0,Qe=0,ln=null,yl=!1,Ra=!1,qo=!1,tl=0,rt=0,bl=0,Ql=0,Vo=0,gn=0,ka=0,Li=null,$t=null,Go=!1,Yo=0,us=1/0,os=null,vl=null,Dt=0,Sl=null,Na=null,Ca=0,Xo=0,Zo=null,ap=null,qi=0,$o=null;function an(){if(($e&2)!==0&&Ue!==0)return Ue&-Ue;if(T.T!==null){var e=Sa;return e!==0?e:Po()}return vr()}function ip(){gn===0&&(gn=(Ue&536870912)===0||Ve?ni():536870912);var e=mn.current;return e!==null&&(e.flags|=32),gn}function rn(e,t,n){(e===Pe&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)&&(Ma(e,0),wl(e,Ue,gn,!1)),Vt(e,n),(($e&2)===0||e!==Pe)&&(e===Pe&&(($e&2)===0&&(Ql|=n),rt===4&&wl(e,Ue,gn,!1)),Cn(e))}function rp(e,t,n){if(($e&6)!==0)throw Error(o(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Ln(e,t),i=a?Vg(e,t):Jo(e,t,!0),s=a;do{if(i===0){Ra&&!a&&wl(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Lg(n)){i=Jo(e,t,!1),s=!1;continue}if(i===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var m=e;i=Li;var y=m.current.memoizedState.isDehydrated;if(y&&(Ma(m,d).flags|=256),d=Jo(m,d,!1),d!==2){if(qo&&!y){m.errorRecoveryDisabledLanes|=s,Ql|=s,i=4;break e}s=$t,$t=i,s!==null&&($t===null?$t=s:$t.push.apply($t,s))}i=d}if(s=!1,i!==2)continue}}if(i===1){Ma(e,0),wl(e,t,0,!0);break}e:{switch(a=e,s=i,s){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:wl(a,t,gn,!yl);break e;case 2:$t=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=Yo+300-lt(),10<i)){if(wl(a,t,gn,!yl),vt(a,0,!0)!==0)break e;a.timeoutHandle=Mp(sp.bind(null,a,n,$t,os,Go,t,gn,Ql,ka,yl,s,2,-0,0),i);break e}sp(a,n,$t,os,Go,t,gn,Ql,ka,yl,s,0,-0,0)}}break}while(!0);Cn(e)}function sp(e,t,n,a,i,s,d,m,y,D,Y,$,k,N){if(e.timeoutHandle=-1,$=t.subtreeFlags,($&8192||($&16785408)===16785408)&&(Qi={stylesheets:null,count:0,unsuspend:vx},ep(t),$=wx(),$!==null)){e.cancelPendingCommit=$(hp.bind(null,e,t,s,n,a,i,d,m,y,Y,1,k,N)),wl(e,s,d,!D);return}hp(e,t,s,n,a,i,d,m,y)}function Lg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],s=i.getSnapshot;i=i.value;try{if(!Pt(s(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wl(e,t,n,a){t&=~Vo,t&=~Ql,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var s=31-Ze(i),d=1<<s;a[s]=-1,i&=~d}n!==0&&li(e,n,t)}function cs(){return($e&6)===0?(Vi(0),!1):!0}function Qo(){if(Ce!==null){if(Qe===0)var e=Ce.return;else e=Ce,Qn=Vl=null,oo(e),ja=null,Ri=0,e=Ce;for(;e!==null;)q0(e.alternate,e),e=e.return;Ce=null}}function Ma(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,lx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Qo(),Pe=e,Ce=n=Xn(e.current,null),Ue=t,Qe=0,ln=null,yl=!1,Ra=Ln(e,t),qo=!1,ka=gn=Vo=Ql=bl=rt=0,$t=Li=null,Go=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-Ze(a),s=1<<i;t|=e[i],a&=~s}return tl=t,kr(),n}function up(e,t){Re=null,T.H=Wr,t===wi||t===Vr?(t=Td(),Qe=3):t===wd?(t=Td(),Qe=4):Qe=t===z0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ln=t,Ce===null&&(rt=1,ns(e,fn(t,e.current)))}function op(){var e=T.H;return T.H=Wr,e===null?Wr:e}function cp(){var e=T.A;return T.A=Bg,e}function Ko(){rt=4,yl||(Ue&4194048)!==Ue&&mn.current!==null||(Ra=!0),(bl&134217727)===0&&(Ql&134217727)===0||Pe===null||wl(Pe,Ue,gn,!1)}function Jo(e,t,n){var a=$e;$e|=2;var i=op(),s=cp();(Pe!==e||Ue!==t)&&(os=null,Ma(e,t)),t=!1;var d=rt;e:do try{if(Qe!==0&&Ce!==null){var m=Ce,y=ln;switch(Qe){case 8:Qo(),d=6;break e;case 3:case 2:case 9:case 6:mn.current===null&&(t=!0);var D=Qe;if(Qe=0,ln=null,Ua(e,m,y,D),n&&Ra){d=0;break e}break;default:D=Qe,Qe=0,ln=null,Ua(e,m,y,D)}}qg(),d=rt;break}catch(Y){up(e,Y)}while(!0);return t&&e.shellSuspendCounter++,Qn=Vl=null,$e=a,T.H=i,T.A=s,Ce===null&&(Pe=null,Ue=0,kr()),d}function qg(){for(;Ce!==null;)fp(Ce)}function Vg(e,t){var n=$e;$e|=2;var a=op(),i=cp();Pe!==e||Ue!==t?(os=null,us=lt()+500,Ma(e,t)):Ra=Ln(e,t);e:do try{if(Qe!==0&&Ce!==null){t=Ce;var s=ln;t:switch(Qe){case 1:Qe=0,ln=null,Ua(e,t,s,1);break;case 2:case 9:if(Ed(s)){Qe=0,ln=null,dp(t);break}t=function(){Qe!==2&&Qe!==9||Pe!==e||(Qe=7),Cn(e)},s.then(t,t);break e;case 3:Qe=7;break e;case 4:Qe=5;break e;case 7:Ed(s)?(Qe=0,ln=null,dp(t)):(Qe=0,ln=null,Ua(e,t,s,7));break;case 5:var d=null;switch(Ce.tag){case 26:d=Ce.memoizedState;case 5:case 27:var m=Ce;if(!d||Qp(d)){Qe=0,ln=null;var y=m.sibling;if(y!==null)Ce=y;else{var D=m.return;D!==null?(Ce=D,fs(D)):Ce=null}break t}}Qe=0,ln=null,Ua(e,t,s,5);break;case 6:Qe=0,ln=null,Ua(e,t,s,6);break;case 8:Qo(),rt=6;break e;default:throw Error(o(462))}}Gg();break}catch(Y){up(e,Y)}while(!0);return Qn=Vl=null,T.H=a,T.A=i,$e=n,Ce!==null?0:(Pe=null,Ue=0,kr(),rt)}function Gg(){for(;Ce!==null&&!He();)fp(Ce)}function fp(e){var t=H0(e.alternate,e,tl);e.memoizedProps=e.pendingProps,t===null?fs(e):Ce=t}function dp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=k0(n,t,t.pendingProps,t.type,void 0,Ue);break;case 11:t=k0(n,t,t.pendingProps,t.type.render,t.ref,Ue);break;case 5:oo(t);default:q0(n,t),t=Ce=pd(t,tl),t=H0(n,t,tl)}e.memoizedProps=e.pendingProps,t===null?fs(e):Ce=t}function Ua(e,t,n,a){Qn=Vl=null,oo(t),ja=null,Ri=0;var i=t.return;try{if(Rg(e,i,t,n,Ue)){rt=1,ns(e,fn(n,e.current)),Ce=null;return}}catch(s){if(i!==null)throw Ce=i,s;rt=1,ns(e,fn(n,e.current)),Ce=null;return}t.flags&32768?(Ve||a===1?e=!0:Ra||(Ue&536870912)!==0?e=!1:(yl=e=!0,(a===2||a===9||a===3||a===6)&&(a=mn.current,a!==null&&a.tag===13&&(a.flags|=16384))),pp(t,e)):fs(t)}function fs(e){var t=e;do{if((t.flags&32768)!==0){pp(t,yl);return}e=t.return;var n=Ng(t.alternate,t,tl);if(n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);rt===0&&(rt=5)}function pp(e,t){do{var n=Cg(e.alternate,e);if(n!==null){n.flags&=32767,Ce=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=n}while(e!==null);rt=6,Ce=null}function hp(e,t,n,a,i,s,d,m,y){e.cancelPendingCommit=null;do ds();while(Dt!==0);if(($e&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(s=t.lanes|t.childLanes,s|=Hu,un(e,n,s,d,m,y),e===Pe&&(Ce=Pe=null,Ue=0),Na=t,Sl=e,Ca=n,Xo=s,Zo=i,ap=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$g(O,function(){return bp(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=T.T,T.T=null,i=G.p,G.p=2,d=$e,$e|=4;try{Mg(e,t,n)}finally{$e=d,G.p=i,T.T=a}}Dt=1,mp(),gp(),xp()}}function mp(){if(Dt===1){Dt=0;var e=Sl,t=Na,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=T.T,T.T=null;var a=G.p;G.p=2;var i=$e;$e|=4;try{W0(t,e);var s=sc,d=ld(e.containerInfo),m=s.focusedElem,y=s.selectionRange;if(d!==m&&m&&m.ownerDocument&&nd(m.ownerDocument.documentElement,m)){if(y!==null&&Nu(m)){var D=y.start,Y=y.end;if(Y===void 0&&(Y=D),"selectionStart"in m)m.selectionStart=D,m.selectionEnd=Math.min(Y,m.value.length);else{var $=m.ownerDocument||document,k=$&&$.defaultView||window;if(k.getSelection){var N=k.getSelection(),Ee=m.textContent.length,ye=Math.min(y.start,Ee),We=y.end===void 0?ye:Math.min(y.end,Ee);!N.extend&&ye>We&&(d=We,We=ye,ye=d);var z=td(m,ye),A=td(m,We);if(z&&A&&(N.rangeCount!==1||N.anchorNode!==z.node||N.anchorOffset!==z.offset||N.focusNode!==A.node||N.focusOffset!==A.offset)){var _=$.createRange();_.setStart(z.node,z.offset),N.removeAllRanges(),ye>We?(N.addRange(_),N.extend(A.node,A.offset)):(_.setEnd(A.node,A.offset),N.addRange(_))}}}}for($=[],N=m;N=N.parentNode;)N.nodeType===1&&$.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<$.length;m++){var Z=$[m];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}As=!!rc,sc=rc=null}finally{$e=i,G.p=a,T.T=n}}e.current=t,Dt=2}}function gp(){if(Dt===2){Dt=0;var e=Sl,t=Na,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=T.T,T.T=null;var a=G.p;G.p=2;var i=$e;$e|=4;try{Q0(e,t.alternate,t)}finally{$e=i,G.p=a,T.T=n}}Dt=3}}function xp(){if(Dt===4||Dt===3){Dt=0,gt();var e=Sl,t=Na,n=Ca,a=ap;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Dt=5:(Dt=0,Na=Sl=null,yp(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(vl=null),qn(n),t=t.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(se,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=T.T,i=G.p,G.p=2,T.T=null;try{for(var s=e.onRecoverableError,d=0;d<a.length;d++){var m=a[d];s(m.value,{componentStack:m.stack})}}finally{T.T=t,G.p=i}}(Ca&3)!==0&&ds(),Cn(e),i=e.pendingLanes,(n&4194090)!==0&&(i&42)!==0?e===$o?qi++:(qi=0,$o=e):qi=0,Vi(0)}}function yp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,vi(t)))}function ds(e){return mp(),gp(),xp(),bp()}function bp(){if(Dt!==5)return!1;var e=Sl,t=Xo;Xo=0;var n=qn(Ca),a=T.T,i=G.p;try{G.p=32>n?32:n,T.T=null,n=Zo,Zo=null;var s=Sl,d=Ca;if(Dt=0,Na=Sl=null,Ca=0,($e&6)!==0)throw Error(o(331));var m=$e;if($e|=4,np(s.current),P0(s,s.current,d,n),$e=m,Vi(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(se,s)}catch{}return!0}finally{G.p=i,T.T=a,yp(e,t)}}function vp(e,t,n){t=fn(n,t),t=Ao(e.stateNode,t,2),e=fl(e,t,2),e!==null&&(Vt(e,2),Cn(e))}function Ie(e,t,n){if(e.tag===3)vp(e,e,n);else for(;t!==null;){if(t.tag===3){vp(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(vl===null||!vl.has(a))){e=fn(n,e),n=A0(2),a=fl(t,n,2),a!==null&&(T0(n,a,t,e),Vt(a,2),Cn(a));break}}t=t.return}}function Fo(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Hg;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(qo=!0,i.add(n),e=Yg.bind(null,e,t,n),t.then(e,e))}function Yg(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Pe===e&&(Ue&n)===n&&(rt===4||rt===3&&(Ue&62914560)===Ue&&300>lt()-Yo?($e&2)===0&&Ma(e,0):Vo|=n,ka===Ue&&(ka=0)),Cn(e)}function Sp(e,t){t===0&&(t=br()),e=xa(e,t),e!==null&&(Vt(e,t),Cn(e))}function Xg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sp(e,n)}function Zg(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(t),Sp(e,n)}function $g(e,t){return xe(e,t)}var ps=null,Ba=null,Wo=!1,hs=!1,Io=!1,Kl=0;function Cn(e){e!==Ba&&e.next===null&&(Ba===null?ps=Ba=e:Ba=Ba.next=e),hs=!0,Wo||(Wo=!0,Kg())}function Vi(e,t){if(!Io&&hs){Io=!0;do for(var n=!1,a=ps;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var s=0;else{var d=a.suspendedLanes,m=a.pingedLanes;s=(1<<31-Ze(42|e)+1)-1,s&=i&~(d&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Tp(a,s))}else s=Ue,s=vt(a,a===Pe?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||Ln(a,s)||(n=!0,Tp(a,s));a=a.next}while(n);Io=!1}}function Qg(){wp()}function wp(){hs=Wo=!1;var e=0;Kl!==0&&(nx()&&(e=Kl),Kl=0);for(var t=lt(),n=null,a=ps;a!==null;){var i=a.next,s=Ep(a,t);s===0?(a.next=null,n===null?ps=i:n.next=i,i===null&&(Ba=n)):(n=a,(e!==0||(s&3)!==0)&&(hs=!0)),a=i}Vi(e)}function Ep(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-Ze(s),m=1<<d,y=i[d];y===-1?((m&n)===0||(m&a)!==0)&&(i[d]=na(m,t)):y<=t&&(e.expiredLanes|=m),s&=~m}if(t=Pe,n=Ue,n=vt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Le(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ln(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Le(a),qn(n)){case 2:case 8:n=v;break;case 32:n=O;break;case 268435456:n=le;break;default:n=O}return a=Ap.bind(null,e),n=xe(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Le(a),e.callbackPriority=2,e.callbackNode=null,2}function Ap(e,t){if(Dt!==0&&Dt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ds()&&e.callbackNode!==n)return null;var a=Ue;return a=vt(e,e===Pe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(rp(e,a,t),Ep(e,lt()),e.callbackNode!=null&&e.callbackNode===n?Ap.bind(null,e):null)}function Tp(e,t){if(ds())return null;rp(e,t,!0)}function Kg(){ax(function(){($e&6)!==0?xe(It,Qg):wp()})}function Po(){return Kl===0&&(Kl=ni()),Kl}function zp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Tr(""+e)}function jp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Jg(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var s=zp((i[st]||null).action),d=a.submitter;d&&(t=(t=d[st]||null)?zp(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var m=new _r("action","action",null,a,i);e.push({event:m,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Kl!==0){var y=d?jp(i,d):new FormData(i);bo(n,{pending:!0,data:y,method:i.method,action:s},null,y)}}else typeof s=="function"&&(m.preventDefault(),y=d?jp(i,d):new FormData(i),bo(n,{pending:!0,data:y,method:i.method,action:s},s,y))},currentTarget:i}]})}}for(var ec=0;ec<Bu.length;ec++){var tc=Bu[ec],Fg=tc.toLowerCase(),Wg=tc[0].toUpperCase()+tc.slice(1);Sn(Fg,"on"+Wg)}Sn(rd,"onAnimationEnd"),Sn(sd,"onAnimationIteration"),Sn(ud,"onAnimationStart"),Sn("dblclick","onDoubleClick"),Sn("focusin","onFocus"),Sn("focusout","onBlur"),Sn(hg,"onTransitionRun"),Sn(mg,"onTransitionStart"),Sn(gg,"onTransitionCancel"),Sn(od,"onTransitionEnd"),sa("onMouseEnter",["mouseout","mouseover"]),sa("onMouseLeave",["mouseout","mouseover"]),sa("onPointerEnter",["pointerout","pointerover"]),sa("onPointerLeave",["pointerout","pointerover"]),kl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kl("onBeforeInput",["compositionend","keypress","textInput","paste"]),kl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ig=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gi));function Op(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var d=a.length-1;0<=d;d--){var m=a[d],y=m.instance,D=m.currentTarget;if(m=m.listener,y!==s&&i.isPropagationStopped())break e;s=m,i.currentTarget=D;try{s(i)}catch(Y){ts(Y)}i.currentTarget=null,s=y}else for(d=0;d<a.length;d++){if(m=a[d],y=m.instance,D=m.currentTarget,m=m.listener,y!==s&&i.isPropagationStopped())break e;s=m,i.currentTarget=D;try{s(i)}catch(Y){ts(Y)}i.currentTarget=null,s=y}}}}function Me(e,t){var n=t[rl];n===void 0&&(n=t[rl]=new Set);var a=e+"__bubble";n.has(a)||(_p(t,e,2,!1),n.add(a))}function nc(e,t,n){var a=0;t&&(a|=4),_p(n,e,a,t)}var ms="_reactListening"+Math.random().toString(36).slice(2);function lc(e){if(!e[ms]){e[ms]=!0,wf.forEach(function(n){n!=="selectionchange"&&(Ig.has(n)||nc(n,!1,e),nc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ms]||(t[ms]=!0,nc("selectionchange",!1,t))}}function _p(e,t,n,a){switch(Pp(t)){case 2:var i=Tx;break;case 8:i=zx;break;default:i=xc}n=i.bind(null,t,n,e),i=void 0,!Au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ac(e,t,n,a,i){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var m=a.stateNode.containerInfo;if(m===i)break;if(d===4)for(d=a.return;d!==null;){var y=d.tag;if((y===3||y===4)&&d.stateNode.containerInfo===i)return;d=d.return}for(;m!==null;){if(d=aa(m),d===null)return;if(y=d.tag,y===5||y===6||y===26||y===27){a=s=d;continue e}m=m.parentNode}}a=a.return}Uf(function(){var D=s,Y=wu(n),$=[];e:{var k=cd.get(e);if(k!==void 0){var N=_r,Ee=e;switch(e){case"keypress":if(jr(n)===0)break e;case"keydown":case"keyup":N=$m;break;case"focusin":Ee="focus",N=Ou;break;case"focusout":Ee="blur",N=Ou;break;case"beforeblur":case"afterblur":N=Ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Cm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Jm;break;case rd:case sd:case ud:N=Bm;break;case od:N=Wm;break;case"scroll":case"scrollend":N=km;break;case"wheel":N=Pm;break;case"copy":case"cut":case"paste":N=Lm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Vf;break;case"toggle":case"beforetoggle":N=tg}var ye=(t&4)!==0,We=!ye&&(e==="scroll"||e==="scrollend"),z=ye?k!==null?k+"Capture":null:k;ye=[];for(var A=D,_;A!==null;){var Z=A;if(_=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||_===null||z===null||(Z=si(A,z),Z!=null&&ye.push(Yi(A,Z,_))),We)break;A=A.return}0<ye.length&&(k=new N(k,Ee,null,n,Y),$.push({event:k,listeners:ye}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",k&&n!==Su&&(Ee=n.relatedTarget||n.fromElement)&&(aa(Ee)||Ee[Vn]))break e;if((N||k)&&(k=Y.window===Y?Y:(k=Y.ownerDocument)?k.defaultView||k.parentWindow:window,N?(Ee=n.relatedTarget||n.toElement,N=D,Ee=Ee?aa(Ee):null,Ee!==null&&(We=f(Ee),ye=Ee.tag,Ee!==We||ye!==5&&ye!==27&&ye!==6)&&(Ee=null)):(N=null,Ee=D),N!==Ee)){if(ye=Lf,Z="onMouseLeave",z="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(ye=Vf,Z="onPointerLeave",z="onPointerEnter",A="pointer"),We=N==null?k:ri(N),_=Ee==null?k:ri(Ee),k=new ye(Z,A+"leave",N,n,Y),k.target=We,k.relatedTarget=_,Z=null,aa(Y)===D&&(ye=new ye(z,A+"enter",Ee,n,Y),ye.target=_,ye.relatedTarget=We,Z=ye),We=Z,N&&Ee)t:{for(ye=N,z=Ee,A=0,_=ye;_;_=Ha(_))A++;for(_=0,Z=z;Z;Z=Ha(Z))_++;for(;0<A-_;)ye=Ha(ye),A--;for(;0<_-A;)z=Ha(z),_--;for(;A--;){if(ye===z||z!==null&&ye===z.alternate)break t;ye=Ha(ye),z=Ha(z)}ye=null}else ye=null;N!==null&&Dp($,k,N,ye,!1),Ee!==null&&We!==null&&Dp($,We,Ee,ye,!0)}}e:{if(k=D?ri(D):window,N=k.nodeName&&k.nodeName.toLowerCase(),N==="select"||N==="input"&&k.type==="file")var oe=Jf;else if(Qf(k))if(Ff)oe=fg;else{oe=og;var Ne=ug}else N=k.nodeName,!N||N.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?D&&vu(D.elementType)&&(oe=Jf):oe=cg;if(oe&&(oe=oe(e,D))){Kf($,oe,n,Y);break e}Ne&&Ne(e,k,D),e==="focusout"&&D&&k.type==="number"&&D.memoizedProps.value!=null&&bu(k,"number",k.value)}switch(Ne=D?ri(D):window,e){case"focusin":(Qf(Ne)||Ne.contentEditable==="true")&&(ha=Ne,Cu=D,mi=null);break;case"focusout":mi=Cu=ha=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,ad($,n,Y);break;case"selectionchange":if(pg)break;case"keydown":case"keyup":ad($,n,Y)}var me;if(Du)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else pa?Zf(e,n)&&(Se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Se="onCompositionStart");Se&&(Gf&&n.locale!=="ko"&&(pa||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&pa&&(me=Bf()):(sl=Y,Tu="value"in sl?sl.value:sl.textContent,pa=!0)),Ne=gs(D,Se),0<Ne.length&&(Se=new qf(Se,e,null,n,Y),$.push({event:Se,listeners:Ne}),me?Se.data=me:(me=$f(n),me!==null&&(Se.data=me)))),(me=lg?ag(e,n):ig(e,n))&&(Se=gs(D,"onBeforeInput"),0<Se.length&&(Ne=new qf("onBeforeInput","beforeinput",null,n,Y),$.push({event:Ne,listeners:Se}),Ne.data=me)),Jg($,e,D,n,Y)}Op($,t)})}function Yi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gs(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=si(e,n),i!=null&&a.unshift(Yi(e,i,s)),i=si(e,t),i!=null&&a.push(Yi(e,i,s))),e.tag===3)return a;e=e.return}return[]}function Ha(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dp(e,t,n,a,i){for(var s=t._reactName,d=[];n!==null&&n!==a;){var m=n,y=m.alternate,D=m.stateNode;if(m=m.tag,y!==null&&y===a)break;m!==5&&m!==26&&m!==27||D===null||(y=D,i?(D=si(n,s),D!=null&&d.unshift(Yi(n,D,y))):i||(D=si(n,s),D!=null&&d.push(Yi(n,D,y)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Pg=/\r\n?/g,ex=/\u0000|\uFFFD/g;function Rp(e){return(typeof e=="string"?e:""+e).replace(Pg,`
`).replace(ex,"")}function kp(e,t){return t=Rp(t),Rp(e)===t}function xs(){}function Fe(e,t,n,a,i,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ca(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ca(e,""+a);break;case"className":wr(e,"class",a);break;case"tabIndex":wr(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":wr(e,n,a);break;case"style":Cf(e,a,s);break;case"data":if(t!=="object"){wr(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Tr(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Fe(e,t,"name",i.name,i,null),Fe(e,t,"formEncType",i.formEncType,i,null),Fe(e,t,"formMethod",i.formMethod,i,null),Fe(e,t,"formTarget",i.formTarget,i,null)):(Fe(e,t,"encType",i.encType,i,null),Fe(e,t,"method",i.method,i,null),Fe(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Tr(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=xs);break;case"onScroll":a!=null&&Me("scroll",e);break;case"onScrollEnd":a!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Tr(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Sr(e,"popover",a);break;case"xlinkActuate":Gn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Gn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Gn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Gn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Gn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Gn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Sr(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Dm.get(n)||n,Sr(e,n,a))}}function ic(e,t,n,a,i,s){switch(n){case"style":Cf(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ca(e,a):(typeof a=="number"||typeof a=="bigint")&&ca(e,""+a);break;case"onScroll":a!=null&&Me("scroll",e);break;case"onScrollEnd":a!=null&&Me("scrollend",e);break;case"onClick":a!=null&&(e.onclick=xs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ef.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),s=e[st]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,i),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Sr(e,n,a)}}}function Rt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var a=!1,i=!1,s;for(s in n)if(n.hasOwnProperty(s)){var d=n[s];if(d!=null)switch(s){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Fe(e,t,s,d,n,null)}}i&&Fe(e,t,"srcSet",n.srcSet,n,null),a&&Fe(e,t,"src",n.src,n,null);return;case"input":Me("invalid",e);var m=s=d=i=null,y=null,D=null;for(a in n)if(n.hasOwnProperty(a)){var Y=n[a];if(Y!=null)switch(a){case"name":i=Y;break;case"type":d=Y;break;case"checked":y=Y;break;case"defaultChecked":D=Y;break;case"value":s=Y;break;case"defaultValue":m=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(o(137,t));break;default:Fe(e,t,a,Y,n,null)}}Df(e,s,m,y,D,d,i,!1),Er(e);return;case"select":Me("invalid",e),a=d=s=null;for(i in n)if(n.hasOwnProperty(i)&&(m=n[i],m!=null))switch(i){case"value":s=m;break;case"defaultValue":d=m;break;case"multiple":a=m;default:Fe(e,t,i,m,n,null)}t=s,n=d,e.multiple=!!a,t!=null?oa(e,!!a,t,!1):n!=null&&oa(e,!!a,n,!0);return;case"textarea":Me("invalid",e),s=i=a=null;for(d in n)if(n.hasOwnProperty(d)&&(m=n[d],m!=null))switch(d){case"value":a=m;break;case"defaultValue":i=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(o(91));break;default:Fe(e,t,d,m,n,null)}kf(e,a,i,s),Er(e);return;case"option":for(y in n)if(n.hasOwnProperty(y)&&(a=n[y],a!=null))switch(y){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Fe(e,t,y,a,n,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(a=0;a<Gi.length;a++)Me(Gi[a],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in n)if(n.hasOwnProperty(D)&&(a=n[D],a!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Fe(e,t,D,a,n,null)}return;default:if(vu(t)){for(Y in n)n.hasOwnProperty(Y)&&(a=n[Y],a!==void 0&&ic(e,t,Y,a,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(a=n[m],a!=null&&Fe(e,t,m,a,n,null))}function tx(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,d=null,m=null,y=null,D=null,Y=null;for(N in n){var $=n[N];if(n.hasOwnProperty(N)&&$!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":y=$;default:a.hasOwnProperty(N)||Fe(e,t,N,null,a,$)}}for(var k in a){var N=a[k];if($=n[k],a.hasOwnProperty(k)&&(N!=null||$!=null))switch(k){case"type":s=N;break;case"name":i=N;break;case"checked":D=N;break;case"defaultChecked":Y=N;break;case"value":d=N;break;case"defaultValue":m=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:N!==$&&Fe(e,t,k,N,a,$)}}yu(e,d,m,y,D,Y,s,i);return;case"select":N=d=m=k=null;for(s in n)if(y=n[s],n.hasOwnProperty(s)&&y!=null)switch(s){case"value":break;case"multiple":N=y;default:a.hasOwnProperty(s)||Fe(e,t,s,null,a,y)}for(i in a)if(s=a[i],y=n[i],a.hasOwnProperty(i)&&(s!=null||y!=null))switch(i){case"value":k=s;break;case"defaultValue":m=s;break;case"multiple":d=s;default:s!==y&&Fe(e,t,i,s,a,y)}t=m,n=d,a=N,k!=null?oa(e,!!n,k,!1):!!a!=!!n&&(t!=null?oa(e,!!n,t,!0):oa(e,!!n,n?[]:"",!1));return;case"textarea":N=k=null;for(m in n)if(i=n[m],n.hasOwnProperty(m)&&i!=null&&!a.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Fe(e,t,m,null,a,i)}for(d in a)if(i=a[d],s=n[d],a.hasOwnProperty(d)&&(i!=null||s!=null))switch(d){case"value":k=i;break;case"defaultValue":N=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==s&&Fe(e,t,d,i,a,s)}Rf(e,k,N);return;case"option":for(var Ee in n)if(k=n[Ee],n.hasOwnProperty(Ee)&&k!=null&&!a.hasOwnProperty(Ee))switch(Ee){case"selected":e.selected=!1;break;default:Fe(e,t,Ee,null,a,k)}for(y in a)if(k=a[y],N=n[y],a.hasOwnProperty(y)&&k!==N&&(k!=null||N!=null))switch(y){case"selected":e.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Fe(e,t,y,k,a,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in n)k=n[ye],n.hasOwnProperty(ye)&&k!=null&&!a.hasOwnProperty(ye)&&Fe(e,t,ye,null,a,k);for(D in a)if(k=a[D],N=n[D],a.hasOwnProperty(D)&&k!==N&&(k!=null||N!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(o(137,t));break;default:Fe(e,t,D,k,a,N)}return;default:if(vu(t)){for(var We in n)k=n[We],n.hasOwnProperty(We)&&k!==void 0&&!a.hasOwnProperty(We)&&ic(e,t,We,void 0,a,k);for(Y in a)k=a[Y],N=n[Y],!a.hasOwnProperty(Y)||k===N||k===void 0&&N===void 0||ic(e,t,Y,k,a,N);return}}for(var z in n)k=n[z],n.hasOwnProperty(z)&&k!=null&&!a.hasOwnProperty(z)&&Fe(e,t,z,null,a,k);for($ in a)k=a[$],N=n[$],!a.hasOwnProperty($)||k===N||k==null&&N==null||Fe(e,t,$,k,a,N)}var rc=null,sc=null;function ys(e){return e.nodeType===9?e:e.ownerDocument}function Np(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function uc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var oc=null;function nx(){var e=window.event;return e&&e.type==="popstate"?e===oc?!1:(oc=e,!0):(oc=null,!1)}var Mp=typeof setTimeout=="function"?setTimeout:void 0,lx=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,ax=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(e){return Up.resolve(null).then(e).catch(ix)}:Mp;function ix(e){setTimeout(function(){throw e})}function El(e){return e==="head"}function Bp(e,t){var n=t,a=0,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(0<a&&8>a){n=a;var d=e.ownerDocument;if(n&1&&Xi(d.documentElement),n&2&&Xi(d.body),n&4)for(n=d.head,Xi(n),d=n.firstChild;d;){var m=d.nextSibling,y=d.nodeName;d[ii]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&d.rel.toLowerCase()==="stylesheet"||n.removeChild(d),d=m}}if(i===0){e.removeChild(s),Ii(t);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:a=n.charCodeAt(0)-48;else a=0;n=s}while(n);Ii(t)}function cc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":cc(n),hu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function rx(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ii])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=En(e.nextSibling),e===null)break}return null}function sx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=En(e.nextSibling),e===null))return null;return e}function fc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ux(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function En(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var dc=null;function Hp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Lp(e,t,n){switch(t=ys(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Xi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);hu(e)}var xn=new Map,qp=new Set;function bs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var nl=G.d;G.d={f:ox,r:cx,D:fx,C:dx,L:px,m:hx,X:gx,S:mx,M:xx};function ox(){var e=nl.f(),t=cs();return e||t}function cx(e){var t=ia(e);t!==null&&t.tag===5&&t.type==="form"?r0(t):nl.r(e)}var La=typeof document>"u"?null:document;function Vp(e,t,n){var a=La;if(a&&typeof t=="string"&&t){var i=cn(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),qp.has(i)||(qp.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),Rt(t,"link",e),St(t),a.head.appendChild(t)))}}function fx(e){nl.D(e),Vp("dns-prefetch",e,null)}function dx(e,t){nl.C(e,t),Vp("preconnect",e,t)}function px(e,t,n){nl.L(e,t,n);var a=La;if(a&&e&&t){var i='link[rel="preload"][as="'+cn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+cn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+cn(n.imageSizes)+'"]')):i+='[href="'+cn(e)+'"]';var s=i;switch(t){case"style":s=qa(e);break;case"script":s=Va(e)}xn.has(s)||(e=b({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),xn.set(s,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(Zi(s))||t==="script"&&a.querySelector($i(s))||(t=a.createElement("link"),Rt(t,"link",e),St(t),a.head.appendChild(t)))}}function hx(e,t){nl.m(e,t);var n=La;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+cn(a)+'"][href="'+cn(e)+'"]',s=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Va(e)}if(!xn.has(s)&&(e=b({rel:"modulepreload",href:e},t),xn.set(s,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector($i(s)))return}a=n.createElement("link"),Rt(a,"link",e),St(a),n.head.appendChild(a)}}}function mx(e,t,n){nl.S(e,t,n);var a=La;if(a&&e){var i=ra(a).hoistableStyles,s=qa(e);t=t||"default";var d=i.get(s);if(!d){var m={loading:0,preload:null};if(d=a.querySelector(Zi(s)))m.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},n),(n=xn.get(s))&&pc(e,n);var y=d=a.createElement("link");St(y),Rt(y,"link",e),y._p=new Promise(function(D,Y){y.onload=D,y.onerror=Y}),y.addEventListener("load",function(){m.loading|=1}),y.addEventListener("error",function(){m.loading|=2}),m.loading|=4,vs(d,t,a)}d={type:"stylesheet",instance:d,count:1,state:m},i.set(s,d)}}}function gx(e,t){nl.X(e,t);var n=La;if(n&&e){var a=ra(n).hoistableScripts,i=Va(e),s=a.get(i);s||(s=n.querySelector($i(i)),s||(e=b({src:e,async:!0},t),(t=xn.get(i))&&hc(e,t),s=n.createElement("script"),St(s),Rt(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function xx(e,t){nl.M(e,t);var n=La;if(n&&e){var a=ra(n).hoistableScripts,i=Va(e),s=a.get(i);s||(s=n.querySelector($i(i)),s||(e=b({src:e,async:!0,type:"module"},t),(t=xn.get(i))&&hc(e,t),s=n.createElement("script"),St(s),Rt(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function Gp(e,t,n,a){var i=(i=ce.current)?bs(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=qa(n.href),n=ra(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=qa(n.href);var s=ra(i).hoistableStyles,d=s.get(e);if(d||(i=i.ownerDocument||i,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=i.querySelector(Zi(e)))&&!s._p&&(d.instance=s,d.state.loading=5),xn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},xn.set(e,n),s||yx(i,e,n,d.state))),t&&a===null)throw Error(o(528,""));return d}if(t&&a!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Va(n),n=ra(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function qa(e){return'href="'+cn(e)+'"'}function Zi(e){return'link[rel="stylesheet"]['+e+"]"}function Yp(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function yx(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Rt(t,"link",n),St(t),e.head.appendChild(t))}function Va(e){return'[src="'+cn(e)+'"]'}function $i(e){return"script[async]"+e}function Xp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+cn(n.href)+'"]');if(a)return t.instance=a,St(a),a;var i=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),St(a),Rt(a,"style",i),vs(a,n.precedence,e),t.instance=a;case"stylesheet":i=qa(n.href);var s=e.querySelector(Zi(i));if(s)return t.state.loading|=4,t.instance=s,St(s),s;a=Yp(n),(i=xn.get(i))&&pc(a,i),s=(e.ownerDocument||e).createElement("link"),St(s);var d=s;return d._p=new Promise(function(m,y){d.onload=m,d.onerror=y}),Rt(s,"link",a),t.state.loading|=4,vs(s,n.precedence,e),t.instance=s;case"script":return s=Va(n.src),(i=e.querySelector($i(s)))?(t.instance=i,St(i),i):(a=n,(i=xn.get(s))&&(a=b({},n),hc(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),St(i),Rt(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,vs(a,n.precedence,e));return t.instance}function vs(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,s=i,d=0;d<a.length;d++){var m=a[d];if(m.dataset.precedence===t)s=m;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function pc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function hc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ss=null;function Zp(e,t,n){if(Ss===null){var a=new Map,i=Ss=new Map;i.set(n,a)}else i=Ss,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var s=n[i];if(!(s[ii]||s[Ke]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var m=a.get(d);m?m.push(s):a.set(d,[s])}}return a}function $p(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function bx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Qp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Qi=null;function vx(){}function Sx(e,t,n){if(Qi===null)throw Error(o(475));var a=Qi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=qa(n.href),s=e.querySelector(Zi(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=ws.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=s,St(s);return}s=e.ownerDocument||e,n=Yp(n),(i=xn.get(i))&&pc(n,i),s=s.createElement("link"),St(s);var d=s;d._p=new Promise(function(m,y){d.onload=m,d.onerror=y}),Rt(s,"link",n),t.instance=s}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=ws.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function wx(){if(Qi===null)throw Error(o(475));var e=Qi;return e.stylesheets&&e.count===0&&mc(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&mc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function ws(){if(this.count--,this.count===0){if(this.stylesheets)mc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Es=null;function mc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Es=new Map,t.forEach(Ex,e),Es=null,ws.call(e))}function Ex(e,t){if(!(t.state.loading&4)){var n=Es.get(e);if(n)var a=n.get(null);else{n=new Map,Es.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var d=i[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),a=d)}a&&n.set(null,a)}i=t.instance,d=i.getAttribute("data-precedence"),s=n.get(d)||a,s===a&&n.set(null,i),n.set(d,i),this.count++,a=ws.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Ki={$$typeof:K,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function Ax(e,t,n,a,i,s,d,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_n(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.hiddenUpdates=_n(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Kp(e,t,n,a,i,s,d,m,y,D,Y,$){return e=new Ax(e,t,n,d,m,y,D,$),t=1,s===!0&&(t|=24),s=en(3,null,null,t),e.current=s,s.stateNode=e,t=Ju(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},Pu(s),e}function Jp(e){return e?(e=ya,e):ya}function Fp(e,t,n,a,i,s){i=Jp(i),a.context===null?a.context=i:a.pendingContext=i,a=cl(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=fl(e,a,t),n!==null&&(rn(n,e,t),Ai(n,e,t))}function Wp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gc(e,t){Wp(e,t),(e=e.alternate)&&Wp(e,t)}function Ip(e){if(e.tag===13){var t=xa(e,67108864);t!==null&&rn(t,e,67108864),gc(e,67108864)}}var As=!0;function Tx(e,t,n,a){var i=T.T;T.T=null;var s=G.p;try{G.p=2,xc(e,t,n,a)}finally{G.p=s,T.T=i}}function zx(e,t,n,a){var i=T.T;T.T=null;var s=G.p;try{G.p=8,xc(e,t,n,a)}finally{G.p=s,T.T=i}}function xc(e,t,n,a){if(As){var i=yc(a);if(i===null)ac(e,t,a,Ts,n),eh(e,a);else if(Ox(i,e,t,n,a))a.stopPropagation();else if(eh(e,a),t&4&&-1<jx.indexOf(e)){for(;i!==null;){var s=ia(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=Ot(s.pendingLanes);if(d!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;d;){var y=1<<31-Ze(d);m.entanglements[1]|=y,d&=~y}Cn(s),($e&6)===0&&(us=lt()+500,Vi(0))}}break;case 13:m=xa(s,2),m!==null&&rn(m,s,2),cs(),gc(s,2)}if(s=yc(a),s===null&&ac(e,t,a,Ts,n),s===i)break;i=s}i!==null&&a.stopPropagation()}else ac(e,t,a,null,n)}}function yc(e){return e=wu(e),bc(e)}var Ts=null;function bc(e){if(Ts=null,e=aa(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ts=e,null}function Pp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(On()){case It:return 2;case v:return 8;case O:case H:return 32;case le:return 268435456;default:return 32}default:return 32}}var vc=!1,Al=null,Tl=null,zl=null,Ji=new Map,Fi=new Map,jl=[],jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function eh(e,t){switch(e){case"focusin":case"focusout":Al=null;break;case"dragenter":case"dragleave":Tl=null;break;case"mouseover":case"mouseout":zl=null;break;case"pointerover":case"pointerout":Ji.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(t.pointerId)}}function Wi(e,t,n,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ia(t),t!==null&&Ip(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ox(e,t,n,a,i){switch(t){case"focusin":return Al=Wi(Al,e,t,n,a,i),!0;case"dragenter":return Tl=Wi(Tl,e,t,n,a,i),!0;case"mouseover":return zl=Wi(zl,e,t,n,a,i),!0;case"pointerover":var s=i.pointerId;return Ji.set(s,Wi(Ji.get(s)||null,e,t,n,a,i)),!0;case"gotpointercapture":return s=i.pointerId,Fi.set(s,Wi(Fi.get(s)||null,e,t,n,a,i)),!0}return!1}function th(e){var t=aa(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,pu(e.priority,function(){if(n.tag===13){var a=an();a=ai(a);var i=xa(n,a);i!==null&&rn(i,n,a),gc(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Su=a,n.target.dispatchEvent(a),Su=null}else return t=ia(n),t!==null&&Ip(t),e.blockedOn=n,!1;t.shift()}return!0}function nh(e,t,n){zs(e)&&n.delete(t)}function _x(){vc=!1,Al!==null&&zs(Al)&&(Al=null),Tl!==null&&zs(Tl)&&(Tl=null),zl!==null&&zs(zl)&&(zl=null),Ji.forEach(nh),Fi.forEach(nh)}function js(e,t){e.blockedOn===t&&(e.blockedOn=null,vc||(vc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,_x)))}var Os=null;function lh(e){Os!==e&&(Os=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Os===e&&(Os=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(bc(a||n)===null)continue;break}var s=ia(n);s!==null&&(e.splice(t,3),t-=3,bo(s,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function Ii(e){function t(y){return js(y,e)}Al!==null&&js(Al,e),Tl!==null&&js(Tl,e),zl!==null&&js(zl,e),Ji.forEach(t),Fi.forEach(t);for(var n=0;n<jl.length;n++){var a=jl[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<jl.length&&(n=jl[0],n.blockedOn===null);)th(n),n.blockedOn===null&&jl.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],s=n[a+1],d=i[st]||null;if(typeof s=="function")d||lh(n);else if(d){var m=null;if(s&&s.hasAttribute("formAction")){if(i=s,d=s[st]||null)m=d.formAction;else if(bc(i)!==null)continue}else m=d.action;typeof m=="function"?n[a+1]=m:(n.splice(a,3),a-=3),lh(n)}}}function Sc(e){this._internalRoot=e}_s.prototype.render=Sc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,a=an();Fp(n,a,e,t,null,null)},_s.prototype.unmount=Sc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fp(e.current,2,null,e,null,null),cs(),t[Vn]=null}};function _s(e){this._internalRoot=e}_s.prototype.unstable_scheduleHydration=function(e){if(e){var t=vr();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jl.length&&t!==0&&t<jl[n].priority;n++);jl.splice(n,0,e),n===0&&th(e)}};var ah=r.version;if(ah!=="19.1.1")throw Error(o(527,ah,"19.1.1"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=w(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Dx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ds.isDisabled&&Ds.supportsFiber)try{se=Ds.inject(Dx),we=Ds}catch{}}return er.createRoot=function(e,t){if(!c(e))throw Error(o(299));var n=!1,a="",i=v0,s=S0,d=w0,m=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=Kp(e,1,!1,null,null,n,a,i,s,d,m,null),e[Vn]=t.current,lc(e),new Sc(t)},er.hydrateRoot=function(e,t,n){if(!c(e))throw Error(o(299));var a=!1,i="",s=v0,d=S0,m=w0,y=null,D=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(y=n.unstable_transitionCallbacks),n.formState!==void 0&&(D=n.formState)),t=Kp(e,1,!0,t,n??null,a,i,s,d,m,y,D),t.context=Jp(null),n=t.current,a=an(),a=ai(a),i=cl(a),i.callback=null,fl(n,i,a),n=a,t.current.lanes=n,Vt(t,n),Cn(t),e[Vn]=t.current,lc(e),new _s(t)},er.version="19.1.1",er}var hh;function qx(){if(hh)return Ec.exports;hh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Ec.exports=Lx(),Ec.exports}var Vx=qx(),V=tf();const zt=kx(V);function h1(l,r){return function(){return l.apply(r,arguments)}}const{toString:Gx}=Object.prototype,{getPrototypeOf:nf}=Object,{iterator:Is,toStringTag:m1}=Symbol,Ps=(l=>r=>{const u=Gx.call(r);return l[u]||(l[u]=u.slice(8,-1).toLowerCase())})(Object.create(null)),jn=l=>(l=l.toLowerCase(),r=>Ps(r)===l),eu=l=>r=>typeof r===l,{isArray:Ia}=Array,ur=eu("undefined");function dr(l){return l!==null&&!ur(l)&&l.constructor!==null&&!ur(l.constructor)&&Ft(l.constructor.isBuffer)&&l.constructor.isBuffer(l)}const g1=jn("ArrayBuffer");function Yx(l){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(l):r=l&&l.buffer&&g1(l.buffer),r}const Xx=eu("string"),Ft=eu("function"),x1=eu("number"),pr=l=>l!==null&&typeof l=="object",Zx=l=>l===!0||l===!1,Cs=l=>{if(Ps(l)!=="object")return!1;const r=nf(l);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(m1 in l)&&!(Is in l)},$x=l=>{if(!pr(l)||dr(l))return!1;try{return Object.keys(l).length===0&&Object.getPrototypeOf(l)===Object.prototype}catch{return!1}},Qx=jn("Date"),Kx=jn("File"),Jx=jn("Blob"),Fx=jn("FileList"),Wx=l=>pr(l)&&Ft(l.pipe),Ix=l=>{let r;return l&&(typeof FormData=="function"&&l instanceof FormData||Ft(l.append)&&((r=Ps(l))==="formdata"||r==="object"&&Ft(l.toString)&&l.toString()==="[object FormData]"))},Px=jn("URLSearchParams"),[ey,ty,ny,ly]=["ReadableStream","Request","Response","Headers"].map(jn),ay=l=>l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function hr(l,r,{allOwnKeys:u=!1}={}){if(l===null||typeof l>"u")return;let o,c;if(typeof l!="object"&&(l=[l]),Ia(l))for(o=0,c=l.length;o<c;o++)r.call(null,l[o],o,l);else{if(dr(l))return;const f=u?Object.getOwnPropertyNames(l):Object.keys(l),h=f.length;let g;for(o=0;o<h;o++)g=f[o],r.call(null,l[g],g,l)}}function y1(l,r){if(dr(l))return null;r=r.toLowerCase();const u=Object.keys(l);let o=u.length,c;for(;o-- >0;)if(c=u[o],r===c.toLowerCase())return c;return null}const Jl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,b1=l=>!ur(l)&&l!==Jl;function Lc(){const{caseless:l}=b1(this)&&this||{},r={},u=(o,c)=>{const f=l&&y1(r,c)||c;Cs(r[f])&&Cs(o)?r[f]=Lc(r[f],o):Cs(o)?r[f]=Lc({},o):Ia(o)?r[f]=o.slice():r[f]=o};for(let o=0,c=arguments.length;o<c;o++)arguments[o]&&hr(arguments[o],u);return r}const iy=(l,r,u,{allOwnKeys:o}={})=>(hr(r,(c,f)=>{u&&Ft(c)?l[f]=h1(c,u):l[f]=c},{allOwnKeys:o}),l),ry=l=>(l.charCodeAt(0)===65279&&(l=l.slice(1)),l),sy=(l,r,u,o)=>{l.prototype=Object.create(r.prototype,o),l.prototype.constructor=l,Object.defineProperty(l,"super",{value:r.prototype}),u&&Object.assign(l.prototype,u)},uy=(l,r,u,o)=>{let c,f,h;const g={};if(r=r||{},l==null)return r;do{for(c=Object.getOwnPropertyNames(l),f=c.length;f-- >0;)h=c[f],(!o||o(h,l,r))&&!g[h]&&(r[h]=l[h],g[h]=!0);l=u!==!1&&nf(l)}while(l&&(!u||u(l,r))&&l!==Object.prototype);return r},oy=(l,r,u)=>{l=String(l),(u===void 0||u>l.length)&&(u=l.length),u-=r.length;const o=l.indexOf(r,u);return o!==-1&&o===u},cy=l=>{if(!l)return null;if(Ia(l))return l;let r=l.length;if(!x1(r))return null;const u=new Array(r);for(;r-- >0;)u[r]=l[r];return u},fy=(l=>r=>l&&r instanceof l)(typeof Uint8Array<"u"&&nf(Uint8Array)),dy=(l,r)=>{const o=(l&&l[Is]).call(l);let c;for(;(c=o.next())&&!c.done;){const f=c.value;r.call(l,f[0],f[1])}},py=(l,r)=>{let u;const o=[];for(;(u=l.exec(r))!==null;)o.push(u);return o},hy=jn("HTMLFormElement"),my=l=>l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(u,o,c){return o.toUpperCase()+c}),mh=(({hasOwnProperty:l})=>(r,u)=>l.call(r,u))(Object.prototype),gy=jn("RegExp"),v1=(l,r)=>{const u=Object.getOwnPropertyDescriptors(l),o={};hr(u,(c,f)=>{let h;(h=r(c,f,l))!==!1&&(o[f]=h||c)}),Object.defineProperties(l,o)},xy=l=>{v1(l,(r,u)=>{if(Ft(l)&&["arguments","caller","callee"].indexOf(u)!==-1)return!1;const o=l[u];if(Ft(o)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+u+"'")})}})},yy=(l,r)=>{const u={},o=c=>{c.forEach(f=>{u[f]=!0})};return Ia(l)?o(l):o(String(l).split(r)),u},by=()=>{},vy=(l,r)=>l!=null&&Number.isFinite(l=+l)?l:r;function Sy(l){return!!(l&&Ft(l.append)&&l[m1]==="FormData"&&l[Is])}const wy=l=>{const r=new Array(10),u=(o,c)=>{if(pr(o)){if(r.indexOf(o)>=0)return;if(dr(o))return o;if(!("toJSON"in o)){r[c]=o;const f=Ia(o)?[]:{};return hr(o,(h,g)=>{const w=u(h,c+1);!ur(w)&&(f[g]=w)}),r[c]=void 0,f}}return o};return u(l,0)},Ey=jn("AsyncFunction"),Ay=l=>l&&(pr(l)||Ft(l))&&Ft(l.then)&&Ft(l.catch),S1=((l,r)=>l?setImmediate:r?((u,o)=>(Jl.addEventListener("message",({source:c,data:f})=>{c===Jl&&f===u&&o.length&&o.shift()()},!1),c=>{o.push(c),Jl.postMessage(u,"*")}))(`axios@${Math.random()}`,[]):u=>setTimeout(u))(typeof setImmediate=="function",Ft(Jl.postMessage)),Ty=typeof queueMicrotask<"u"?queueMicrotask.bind(Jl):typeof process<"u"&&process.nextTick||S1,zy=l=>l!=null&&Ft(l[Is]),U={isArray:Ia,isArrayBuffer:g1,isBuffer:dr,isFormData:Ix,isArrayBufferView:Yx,isString:Xx,isNumber:x1,isBoolean:Zx,isObject:pr,isPlainObject:Cs,isEmptyObject:$x,isReadableStream:ey,isRequest:ty,isResponse:ny,isHeaders:ly,isUndefined:ur,isDate:Qx,isFile:Kx,isBlob:Jx,isRegExp:gy,isFunction:Ft,isStream:Wx,isURLSearchParams:Px,isTypedArray:fy,isFileList:Fx,forEach:hr,merge:Lc,extend:iy,trim:ay,stripBOM:ry,inherits:sy,toFlatObject:uy,kindOf:Ps,kindOfTest:jn,endsWith:oy,toArray:cy,forEachEntry:dy,matchAll:py,isHTMLForm:hy,hasOwnProperty:mh,hasOwnProp:mh,reduceDescriptors:v1,freezeMethods:xy,toObjectSet:yy,toCamelCase:my,noop:by,toFiniteNumber:vy,findKey:y1,global:Jl,isContextDefined:b1,isSpecCompliantForm:Sy,toJSONObject:wy,isAsyncFn:Ey,isThenable:Ay,setImmediate:S1,asap:Ty,isIterable:zy};function Oe(l,r,u,o,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=l,this.name="AxiosError",r&&(this.code=r),u&&(this.config=u),o&&(this.request=o),c&&(this.response=c,this.status=c.status?c.status:null)}U.inherits(Oe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.status}}});const w1=Oe.prototype,E1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(l=>{E1[l]={value:l}});Object.defineProperties(Oe,E1);Object.defineProperty(w1,"isAxiosError",{value:!0});Oe.from=(l,r,u,o,c,f)=>{const h=Object.create(w1);return U.toFlatObject(l,h,function(w){return w!==Error.prototype},g=>g!=="isAxiosError"),Oe.call(h,l.message,r,u,o,c),h.cause=l,h.name=l.name,f&&Object.assign(h,f),h};const jy=null;function qc(l){return U.isPlainObject(l)||U.isArray(l)}function A1(l){return U.endsWith(l,"[]")?l.slice(0,-2):l}function gh(l,r,u){return l?l.concat(r).map(function(c,f){return c=A1(c),!u&&f?"["+c+"]":c}).join(u?".":""):r}function Oy(l){return U.isArray(l)&&!l.some(qc)}const _y=U.toFlatObject(U,{},null,function(r){return/^is[A-Z]/.test(r)});function tu(l,r,u){if(!U.isObject(l))throw new TypeError("target must be an object");r=r||new FormData,u=U.toFlatObject(u,{metaTokens:!0,dots:!1,indexes:!1},!1,function(B,C){return!U.isUndefined(C[B])});const o=u.metaTokens,c=u.visitor||b,f=u.dots,h=u.indexes,w=(u.Blob||typeof Blob<"u"&&Blob)&&U.isSpecCompliantForm(r);if(!U.isFunction(c))throw new TypeError("visitor must be a function");function x(R){if(R===null)return"";if(U.isDate(R))return R.toISOString();if(U.isBoolean(R))return R.toString();if(!w&&U.isBlob(R))throw new Oe("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(R)||U.isTypedArray(R)?w&&typeof Blob=="function"?new Blob([R]):Buffer.from(R):R}function b(R,B,C){let J=R;if(R&&!C&&typeof R=="object"){if(U.endsWith(B,"{}"))B=o?B:B.slice(0,-2),R=JSON.stringify(R);else if(U.isArray(R)&&Oy(R)||(U.isFileList(R)||U.endsWith(B,"[]"))&&(J=U.toArray(R)))return B=A1(B),J.forEach(function(K,re){!(U.isUndefined(K)||K===null)&&r.append(h===!0?gh([B],re,f):h===null?B:B+"[]",x(K))}),!1}return qc(R)?!0:(r.append(gh(C,B,f),x(R)),!1)}const j=[],E=Object.assign(_y,{defaultVisitor:b,convertValue:x,isVisitable:qc});function M(R,B){if(!U.isUndefined(R)){if(j.indexOf(R)!==-1)throw Error("Circular reference detected in "+B.join("."));j.push(R),U.forEach(R,function(J,X){(!(U.isUndefined(J)||J===null)&&c.call(r,J,U.isString(X)?X.trim():X,B,E))===!0&&M(J,B?B.concat(X):[X])}),j.pop()}}if(!U.isObject(l))throw new TypeError("data must be an object");return M(l),r}function xh(l){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g,function(o){return r[o]})}function lf(l,r){this._pairs=[],l&&tu(l,this,r)}const T1=lf.prototype;T1.append=function(r,u){this._pairs.push([r,u])};T1.toString=function(r){const u=r?function(o){return r.call(this,o,xh)}:xh;return this._pairs.map(function(c){return u(c[0])+"="+u(c[1])},"").join("&")};function Dy(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function z1(l,r,u){if(!r)return l;const o=u&&u.encode||Dy;U.isFunction(u)&&(u={serialize:u});const c=u&&u.serialize;let f;if(c?f=c(r,u):f=U.isURLSearchParams(r)?r.toString():new lf(r,u).toString(o),f){const h=l.indexOf("#");h!==-1&&(l=l.slice(0,h)),l+=(l.indexOf("?")===-1?"?":"&")+f}return l}class yh{constructor(){this.handlers=[]}use(r,u,o){return this.handlers.push({fulfilled:r,rejected:u,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){U.forEach(this.handlers,function(o){o!==null&&r(o)})}}const j1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ry=typeof URLSearchParams<"u"?URLSearchParams:lf,ky=typeof FormData<"u"?FormData:null,Ny=typeof Blob<"u"?Blob:null,Cy={isBrowser:!0,classes:{URLSearchParams:Ry,FormData:ky,Blob:Ny},protocols:["http","https","file","blob","url","data"]},af=typeof window<"u"&&typeof document<"u",Vc=typeof navigator=="object"&&navigator||void 0,My=af&&(!Vc||["ReactNative","NativeScript","NS"].indexOf(Vc.product)<0),Uy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",By=af&&window.location.href||"http://localhost",Hy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:af,hasStandardBrowserEnv:My,hasStandardBrowserWebWorkerEnv:Uy,navigator:Vc,origin:By},Symbol.toStringTag,{value:"Module"})),Mt={...Hy,...Cy};function Ly(l,r){return tu(l,new Mt.classes.URLSearchParams,{visitor:function(u,o,c,f){return Mt.isNode&&U.isBuffer(u)?(this.append(o,u.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)},...r})}function qy(l){return U.matchAll(/\w+|\[(\w*)]/g,l).map(r=>r[0]==="[]"?"":r[1]||r[0])}function Vy(l){const r={},u=Object.keys(l);let o;const c=u.length;let f;for(o=0;o<c;o++)f=u[o],r[f]=l[f];return r}function O1(l){function r(u,o,c,f){let h=u[f++];if(h==="__proto__")return!0;const g=Number.isFinite(+h),w=f>=u.length;return h=!h&&U.isArray(c)?c.length:h,w?(U.hasOwnProp(c,h)?c[h]=[c[h],o]:c[h]=o,!g):((!c[h]||!U.isObject(c[h]))&&(c[h]=[]),r(u,o,c[h],f)&&U.isArray(c[h])&&(c[h]=Vy(c[h])),!g)}if(U.isFormData(l)&&U.isFunction(l.entries)){const u={};return U.forEachEntry(l,(o,c)=>{r(qy(o),c,u,0)}),u}return null}function Gy(l,r,u){if(U.isString(l))try{return(r||JSON.parse)(l),U.trim(l)}catch(o){if(o.name!=="SyntaxError")throw o}return(u||JSON.stringify)(l)}const mr={transitional:j1,adapter:["xhr","http","fetch"],transformRequest:[function(r,u){const o=u.getContentType()||"",c=o.indexOf("application/json")>-1,f=U.isObject(r);if(f&&U.isHTMLForm(r)&&(r=new FormData(r)),U.isFormData(r))return c?JSON.stringify(O1(r)):r;if(U.isArrayBuffer(r)||U.isBuffer(r)||U.isStream(r)||U.isFile(r)||U.isBlob(r)||U.isReadableStream(r))return r;if(U.isArrayBufferView(r))return r.buffer;if(U.isURLSearchParams(r))return u.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let g;if(f){if(o.indexOf("application/x-www-form-urlencoded")>-1)return Ly(r,this.formSerializer).toString();if((g=U.isFileList(r))||o.indexOf("multipart/form-data")>-1){const w=this.env&&this.env.FormData;return tu(g?{"files[]":r}:r,w&&new w,this.formSerializer)}}return f||c?(u.setContentType("application/json",!1),Gy(r)):r}],transformResponse:[function(r){const u=this.transitional||mr.transitional,o=u&&u.forcedJSONParsing,c=this.responseType==="json";if(U.isResponse(r)||U.isReadableStream(r))return r;if(r&&U.isString(r)&&(o&&!this.responseType||c)){const h=!(u&&u.silentJSONParsing)&&c;try{return JSON.parse(r)}catch(g){if(h)throw g.name==="SyntaxError"?Oe.from(g,Oe.ERR_BAD_RESPONSE,this,null,this.response):g}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Mt.classes.FormData,Blob:Mt.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};U.forEach(["delete","get","head","post","put","patch"],l=>{mr.headers[l]={}});const Yy=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Xy=l=>{const r={};let u,o,c;return l&&l.split(`
`).forEach(function(h){c=h.indexOf(":"),u=h.substring(0,c).trim().toLowerCase(),o=h.substring(c+1).trim(),!(!u||r[u]&&Yy[u])&&(u==="set-cookie"?r[u]?r[u].push(o):r[u]=[o]:r[u]=r[u]?r[u]+", "+o:o)}),r},bh=Symbol("internals");function tr(l){return l&&String(l).trim().toLowerCase()}function Ms(l){return l===!1||l==null?l:U.isArray(l)?l.map(Ms):String(l)}function Zy(l){const r=Object.create(null),u=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=u.exec(l);)r[o[1]]=o[2];return r}const $y=l=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());function Oc(l,r,u,o,c){if(U.isFunction(o))return o.call(this,r,u);if(c&&(r=u),!!U.isString(r)){if(U.isString(o))return r.indexOf(o)!==-1;if(U.isRegExp(o))return o.test(r)}}function Qy(l){return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,u,o)=>u.toUpperCase()+o)}function Ky(l,r){const u=U.toCamelCase(" "+r);["get","set","has"].forEach(o=>{Object.defineProperty(l,o+u,{value:function(c,f,h){return this[o].call(this,r,c,f,h)},configurable:!0})})}let Wt=class{constructor(r){r&&this.set(r)}set(r,u,o){const c=this;function f(g,w,x){const b=tr(w);if(!b)throw new Error("header name must be a non-empty string");const j=U.findKey(c,b);(!j||c[j]===void 0||x===!0||x===void 0&&c[j]!==!1)&&(c[j||w]=Ms(g))}const h=(g,w)=>U.forEach(g,(x,b)=>f(x,b,w));if(U.isPlainObject(r)||r instanceof this.constructor)h(r,u);else if(U.isString(r)&&(r=r.trim())&&!$y(r))h(Xy(r),u);else if(U.isObject(r)&&U.isIterable(r)){let g={},w,x;for(const b of r){if(!U.isArray(b))throw TypeError("Object iterator must return a key-value pair");g[x=b[0]]=(w=g[x])?U.isArray(w)?[...w,b[1]]:[w,b[1]]:b[1]}h(g,u)}else r!=null&&f(u,r,o);return this}get(r,u){if(r=tr(r),r){const o=U.findKey(this,r);if(o){const c=this[o];if(!u)return c;if(u===!0)return Zy(c);if(U.isFunction(u))return u.call(this,c,o);if(U.isRegExp(u))return u.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,u){if(r=tr(r),r){const o=U.findKey(this,r);return!!(o&&this[o]!==void 0&&(!u||Oc(this,this[o],o,u)))}return!1}delete(r,u){const o=this;let c=!1;function f(h){if(h=tr(h),h){const g=U.findKey(o,h);g&&(!u||Oc(o,o[g],g,u))&&(delete o[g],c=!0)}}return U.isArray(r)?r.forEach(f):f(r),c}clear(r){const u=Object.keys(this);let o=u.length,c=!1;for(;o--;){const f=u[o];(!r||Oc(this,this[f],f,r,!0))&&(delete this[f],c=!0)}return c}normalize(r){const u=this,o={};return U.forEach(this,(c,f)=>{const h=U.findKey(o,f);if(h){u[h]=Ms(c),delete u[f];return}const g=r?Qy(f):String(f).trim();g!==f&&delete u[f],u[g]=Ms(c),o[g]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const u=Object.create(null);return U.forEach(this,(o,c)=>{o!=null&&o!==!1&&(u[c]=r&&U.isArray(o)?o.join(", "):o)}),u}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,u])=>r+": "+u).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...u){const o=new this(r);return u.forEach(c=>o.set(c)),o}static accessor(r){const o=(this[bh]=this[bh]={accessors:{}}).accessors,c=this.prototype;function f(h){const g=tr(h);o[g]||(Ky(c,h),o[g]=!0)}return U.isArray(r)?r.forEach(f):f(r),this}};Wt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);U.reduceDescriptors(Wt.prototype,({value:l},r)=>{let u=r[0].toUpperCase()+r.slice(1);return{get:()=>l,set(o){this[u]=o}}});U.freezeMethods(Wt);function _c(l,r){const u=this||mr,o=r||u,c=Wt.from(o.headers);let f=o.data;return U.forEach(l,function(g){f=g.call(u,f,c.normalize(),r?r.status:void 0)}),c.normalize(),f}function _1(l){return!!(l&&l.__CANCEL__)}function Pa(l,r,u){Oe.call(this,l??"canceled",Oe.ERR_CANCELED,r,u),this.name="CanceledError"}U.inherits(Pa,Oe,{__CANCEL__:!0});function D1(l,r,u){const o=u.config.validateStatus;!u.status||!o||o(u.status)?l(u):r(new Oe("Request failed with status code "+u.status,[Oe.ERR_BAD_REQUEST,Oe.ERR_BAD_RESPONSE][Math.floor(u.status/100)-4],u.config,u.request,u))}function Jy(l){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(l);return r&&r[1]||""}function Fy(l,r){l=l||10;const u=new Array(l),o=new Array(l);let c=0,f=0,h;return r=r!==void 0?r:1e3,function(w){const x=Date.now(),b=o[f];h||(h=x),u[c]=w,o[c]=x;let j=f,E=0;for(;j!==c;)E+=u[j++],j=j%l;if(c=(c+1)%l,c===f&&(f=(f+1)%l),x-h<r)return;const M=b&&x-b;return M?Math.round(E*1e3/M):void 0}}function Wy(l,r){let u=0,o=1e3/r,c,f;const h=(x,b=Date.now())=>{u=b,c=null,f&&(clearTimeout(f),f=null),l(...x)};return[(...x)=>{const b=Date.now(),j=b-u;j>=o?h(x,b):(c=x,f||(f=setTimeout(()=>{f=null,h(c)},o-j)))},()=>c&&h(c)]}const Ys=(l,r,u=3)=>{let o=0;const c=Fy(50,250);return Wy(f=>{const h=f.loaded,g=f.lengthComputable?f.total:void 0,w=h-o,x=c(w),b=h<=g;o=h;const j={loaded:h,total:g,progress:g?h/g:void 0,bytes:w,rate:x||void 0,estimated:x&&g&&b?(g-h)/x:void 0,event:f,lengthComputable:g!=null,[r?"download":"upload"]:!0};l(j)},u)},vh=(l,r)=>{const u=l!=null;return[o=>r[0]({lengthComputable:u,total:l,loaded:o}),r[1]]},Sh=l=>(...r)=>U.asap(()=>l(...r)),Iy=Mt.hasStandardBrowserEnv?((l,r)=>u=>(u=new URL(u,Mt.origin),l.protocol===u.protocol&&l.host===u.host&&(r||l.port===u.port)))(new URL(Mt.origin),Mt.navigator&&/(msie|trident)/i.test(Mt.navigator.userAgent)):()=>!0,Py=Mt.hasStandardBrowserEnv?{write(l,r,u,o,c,f){const h=[l+"="+encodeURIComponent(r)];U.isNumber(u)&&h.push("expires="+new Date(u).toGMTString()),U.isString(o)&&h.push("path="+o),U.isString(c)&&h.push("domain="+c),f===!0&&h.push("secure"),document.cookie=h.join("; ")},read(l){const r=document.cookie.match(new RegExp("(^|;\\s*)("+l+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(l){this.write(l,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function e2(l){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)}function t2(l,r){return r?l.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):l}function R1(l,r,u){let o=!e2(r);return l&&(o||u==!1)?t2(l,r):r}const wh=l=>l instanceof Wt?{...l}:l;function ta(l,r){r=r||{};const u={};function o(x,b,j,E){return U.isPlainObject(x)&&U.isPlainObject(b)?U.merge.call({caseless:E},x,b):U.isPlainObject(b)?U.merge({},b):U.isArray(b)?b.slice():b}function c(x,b,j,E){if(U.isUndefined(b)){if(!U.isUndefined(x))return o(void 0,x,j,E)}else return o(x,b,j,E)}function f(x,b){if(!U.isUndefined(b))return o(void 0,b)}function h(x,b){if(U.isUndefined(b)){if(!U.isUndefined(x))return o(void 0,x)}else return o(void 0,b)}function g(x,b,j){if(j in r)return o(x,b);if(j in l)return o(void 0,x)}const w={url:f,method:f,data:f,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:g,headers:(x,b,j)=>c(wh(x),wh(b),j,!0)};return U.forEach(Object.keys({...l,...r}),function(b){const j=w[b]||c,E=j(l[b],r[b],b);U.isUndefined(E)&&j!==g||(u[b]=E)}),u}const k1=l=>{const r=ta({},l);let{data:u,withXSRFToken:o,xsrfHeaderName:c,xsrfCookieName:f,headers:h,auth:g}=r;r.headers=h=Wt.from(h),r.url=z1(R1(r.baseURL,r.url,r.allowAbsoluteUrls),l.params,l.paramsSerializer),g&&h.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):"")));let w;if(U.isFormData(u)){if(Mt.hasStandardBrowserEnv||Mt.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if((w=h.getContentType())!==!1){const[x,...b]=w?w.split(";").map(j=>j.trim()).filter(Boolean):[];h.setContentType([x||"multipart/form-data",...b].join("; "))}}if(Mt.hasStandardBrowserEnv&&(o&&U.isFunction(o)&&(o=o(r)),o||o!==!1&&Iy(r.url))){const x=c&&f&&Py.read(f);x&&h.set(c,x)}return r},n2=typeof XMLHttpRequest<"u",l2=n2&&function(l){return new Promise(function(u,o){const c=k1(l);let f=c.data;const h=Wt.from(c.headers).normalize();let{responseType:g,onUploadProgress:w,onDownloadProgress:x}=c,b,j,E,M,R;function B(){M&&M(),R&&R(),c.cancelToken&&c.cancelToken.unsubscribe(b),c.signal&&c.signal.removeEventListener("abort",b)}let C=new XMLHttpRequest;C.open(c.method.toUpperCase(),c.url,!0),C.timeout=c.timeout;function J(){if(!C)return;const K=Wt.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),L={data:!g||g==="text"||g==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:K,config:l,request:C};D1(function(Q){u(Q),B()},function(Q){o(Q),B()},L),C=null}"onloadend"in C?C.onloadend=J:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(J)},C.onabort=function(){C&&(o(new Oe("Request aborted",Oe.ECONNABORTED,l,C)),C=null)},C.onerror=function(){o(new Oe("Network Error",Oe.ERR_NETWORK,l,C)),C=null},C.ontimeout=function(){let re=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const L=c.transitional||j1;c.timeoutErrorMessage&&(re=c.timeoutErrorMessage),o(new Oe(re,L.clarifyTimeoutError?Oe.ETIMEDOUT:Oe.ECONNABORTED,l,C)),C=null},f===void 0&&h.setContentType(null),"setRequestHeader"in C&&U.forEach(h.toJSON(),function(re,L){C.setRequestHeader(L,re)}),U.isUndefined(c.withCredentials)||(C.withCredentials=!!c.withCredentials),g&&g!=="json"&&(C.responseType=c.responseType),x&&([E,R]=Ys(x,!0),C.addEventListener("progress",E)),w&&C.upload&&([j,M]=Ys(w),C.upload.addEventListener("progress",j),C.upload.addEventListener("loadend",M)),(c.cancelToken||c.signal)&&(b=K=>{C&&(o(!K||K.type?new Pa(null,l,C):K),C.abort(),C=null)},c.cancelToken&&c.cancelToken.subscribe(b),c.signal&&(c.signal.aborted?b():c.signal.addEventListener("abort",b)));const X=Jy(c.url);if(X&&Mt.protocols.indexOf(X)===-1){o(new Oe("Unsupported protocol "+X+":",Oe.ERR_BAD_REQUEST,l));return}C.send(f||null)})},a2=(l,r)=>{const{length:u}=l=l?l.filter(Boolean):[];if(r||u){let o=new AbortController,c;const f=function(x){if(!c){c=!0,g();const b=x instanceof Error?x:this.reason;o.abort(b instanceof Oe?b:new Pa(b instanceof Error?b.message:b))}};let h=r&&setTimeout(()=>{h=null,f(new Oe(`timeout ${r} of ms exceeded`,Oe.ETIMEDOUT))},r);const g=()=>{l&&(h&&clearTimeout(h),h=null,l.forEach(x=>{x.unsubscribe?x.unsubscribe(f):x.removeEventListener("abort",f)}),l=null)};l.forEach(x=>x.addEventListener("abort",f));const{signal:w}=o;return w.unsubscribe=()=>U.asap(g),w}},i2=function*(l,r){let u=l.byteLength;if(u<r){yield l;return}let o=0,c;for(;o<u;)c=o+r,yield l.slice(o,c),o=c},r2=async function*(l,r){for await(const u of s2(l))yield*i2(u,r)},s2=async function*(l){if(l[Symbol.asyncIterator]){yield*l;return}const r=l.getReader();try{for(;;){const{done:u,value:o}=await r.read();if(u)break;yield o}}finally{await r.cancel()}},Eh=(l,r,u,o)=>{const c=r2(l,r);let f=0,h,g=w=>{h||(h=!0,o&&o(w))};return new ReadableStream({async pull(w){try{const{done:x,value:b}=await c.next();if(x){g(),w.close();return}let j=b.byteLength;if(u){let E=f+=j;u(E)}w.enqueue(new Uint8Array(b))}catch(x){throw g(x),x}},cancel(w){return g(w),c.return()}},{highWaterMark:2})},nu=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",N1=nu&&typeof ReadableStream=="function",u2=nu&&(typeof TextEncoder=="function"?(l=>r=>l.encode(r))(new TextEncoder):async l=>new Uint8Array(await new Response(l).arrayBuffer())),C1=(l,...r)=>{try{return!!l(...r)}catch{return!1}},o2=N1&&C1(()=>{let l=!1;const r=new Request(Mt.origin,{body:new ReadableStream,method:"POST",get duplex(){return l=!0,"half"}}).headers.has("Content-Type");return l&&!r}),Ah=64*1024,Gc=N1&&C1(()=>U.isReadableStream(new Response("").body)),Xs={stream:Gc&&(l=>l.body)};nu&&(l=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!Xs[r]&&(Xs[r]=U.isFunction(l[r])?u=>u[r]():(u,o)=>{throw new Oe(`Response type '${r}' is not supported`,Oe.ERR_NOT_SUPPORT,o)})})})(new Response);const c2=async l=>{if(l==null)return 0;if(U.isBlob(l))return l.size;if(U.isSpecCompliantForm(l))return(await new Request(Mt.origin,{method:"POST",body:l}).arrayBuffer()).byteLength;if(U.isArrayBufferView(l)||U.isArrayBuffer(l))return l.byteLength;if(U.isURLSearchParams(l)&&(l=l+""),U.isString(l))return(await u2(l)).byteLength},f2=async(l,r)=>{const u=U.toFiniteNumber(l.getContentLength());return u??c2(r)},d2=nu&&(async l=>{let{url:r,method:u,data:o,signal:c,cancelToken:f,timeout:h,onDownloadProgress:g,onUploadProgress:w,responseType:x,headers:b,withCredentials:j="same-origin",fetchOptions:E}=k1(l);x=x?(x+"").toLowerCase():"text";let M=a2([c,f&&f.toAbortSignal()],h),R;const B=M&&M.unsubscribe&&(()=>{M.unsubscribe()});let C;try{if(w&&o2&&u!=="get"&&u!=="head"&&(C=await f2(b,o))!==0){let L=new Request(r,{method:"POST",body:o,duplex:"half"}),I;if(U.isFormData(o)&&(I=L.headers.get("content-type"))&&b.setContentType(I),L.body){const[Q,ie]=vh(C,Ys(Sh(w)));o=Eh(L.body,Ah,Q,ie)}}U.isString(j)||(j=j?"include":"omit");const J="credentials"in Request.prototype;R=new Request(r,{...E,signal:M,method:u.toUpperCase(),headers:b.normalize().toJSON(),body:o,duplex:"half",credentials:J?j:void 0});let X=await fetch(R,E);const K=Gc&&(x==="stream"||x==="response");if(Gc&&(g||K&&B)){const L={};["status","statusText","headers"].forEach(be=>{L[be]=X[be]});const I=U.toFiniteNumber(X.headers.get("content-length")),[Q,ie]=g&&vh(I,Ys(Sh(g),!0))||[];X=new Response(Eh(X.body,Ah,Q,()=>{ie&&ie(),B&&B()}),L)}x=x||"text";let re=await Xs[U.findKey(Xs,x)||"text"](X,l);return!K&&B&&B(),await new Promise((L,I)=>{D1(L,I,{data:re,headers:Wt.from(X.headers),status:X.status,statusText:X.statusText,config:l,request:R})})}catch(J){throw B&&B(),J&&J.name==="TypeError"&&/Load failed|fetch/i.test(J.message)?Object.assign(new Oe("Network Error",Oe.ERR_NETWORK,l,R),{cause:J.cause||J}):Oe.from(J,J&&J.code,l,R)}}),Yc={http:jy,xhr:l2,fetch:d2};U.forEach(Yc,(l,r)=>{if(l){try{Object.defineProperty(l,"name",{value:r})}catch{}Object.defineProperty(l,"adapterName",{value:r})}});const Th=l=>`- ${l}`,p2=l=>U.isFunction(l)||l===null||l===!1,M1={getAdapter:l=>{l=U.isArray(l)?l:[l];const{length:r}=l;let u,o;const c={};for(let f=0;f<r;f++){u=l[f];let h;if(o=u,!p2(u)&&(o=Yc[(h=String(u)).toLowerCase()],o===void 0))throw new Oe(`Unknown adapter '${h}'`);if(o)break;c[h||"#"+f]=o}if(!o){const f=Object.entries(c).map(([g,w])=>`adapter ${g} `+(w===!1?"is not supported by the environment":"is not available in the build"));let h=r?f.length>1?`since :
`+f.map(Th).join(`
`):" "+Th(f[0]):"as no adapter specified";throw new Oe("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return o},adapters:Yc};function Dc(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new Pa(null,l)}function zh(l){return Dc(l),l.headers=Wt.from(l.headers),l.data=_c.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),M1.getAdapter(l.adapter||mr.adapter)(l).then(function(o){return Dc(l),o.data=_c.call(l,l.transformResponse,o),o.headers=Wt.from(o.headers),o},function(o){return _1(o)||(Dc(l),o&&o.response&&(o.response.data=_c.call(l,l.transformResponse,o.response),o.response.headers=Wt.from(o.response.headers))),Promise.reject(o)})}const U1="1.11.0",lu={};["object","boolean","number","function","string","symbol"].forEach((l,r)=>{lu[l]=function(o){return typeof o===l||"a"+(r<1?"n ":" ")+l}});const jh={};lu.transitional=function(r,u,o){function c(f,h){return"[Axios v"+U1+"] Transitional option '"+f+"'"+h+(o?". "+o:"")}return(f,h,g)=>{if(r===!1)throw new Oe(c(h," has been removed"+(u?" in "+u:"")),Oe.ERR_DEPRECATED);return u&&!jh[h]&&(jh[h]=!0,console.warn(c(h," has been deprecated since v"+u+" and will be removed in the near future"))),r?r(f,h,g):!0}};lu.spelling=function(r){return(u,o)=>(console.warn(`${o} is likely a misspelling of ${r}`),!0)};function h2(l,r,u){if(typeof l!="object")throw new Oe("options must be an object",Oe.ERR_BAD_OPTION_VALUE);const o=Object.keys(l);let c=o.length;for(;c-- >0;){const f=o[c],h=r[f];if(h){const g=l[f],w=g===void 0||h(g,f,l);if(w!==!0)throw new Oe("option "+f+" must be "+w,Oe.ERR_BAD_OPTION_VALUE);continue}if(u!==!0)throw new Oe("Unknown option "+f,Oe.ERR_BAD_OPTION)}}const Us={assertOptions:h2,validators:lu},Mn=Us.validators;let Il=class{constructor(r){this.defaults=r||{},this.interceptors={request:new yh,response:new yh}}async request(r,u){try{return await this._request(r,u)}catch(o){if(o instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const f=c.stack?c.stack.replace(/^.+\n/,""):"";try{o.stack?f&&!String(o.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+f):o.stack=f}catch{}}throw o}}_request(r,u){typeof r=="string"?(u=u||{},u.url=r):u=r||{},u=ta(this.defaults,u);const{transitional:o,paramsSerializer:c,headers:f}=u;o!==void 0&&Us.assertOptions(o,{silentJSONParsing:Mn.transitional(Mn.boolean),forcedJSONParsing:Mn.transitional(Mn.boolean),clarifyTimeoutError:Mn.transitional(Mn.boolean)},!1),c!=null&&(U.isFunction(c)?u.paramsSerializer={serialize:c}:Us.assertOptions(c,{encode:Mn.function,serialize:Mn.function},!0)),u.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?u.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:u.allowAbsoluteUrls=!0),Us.assertOptions(u,{baseUrl:Mn.spelling("baseURL"),withXsrfToken:Mn.spelling("withXSRFToken")},!0),u.method=(u.method||this.defaults.method||"get").toLowerCase();let h=f&&U.merge(f.common,f[u.method]);f&&U.forEach(["delete","get","head","post","put","patch","common"],R=>{delete f[R]}),u.headers=Wt.concat(h,f);const g=[];let w=!0;this.interceptors.request.forEach(function(B){typeof B.runWhen=="function"&&B.runWhen(u)===!1||(w=w&&B.synchronous,g.unshift(B.fulfilled,B.rejected))});const x=[];this.interceptors.response.forEach(function(B){x.push(B.fulfilled,B.rejected)});let b,j=0,E;if(!w){const R=[zh.bind(this),void 0];for(R.unshift(...g),R.push(...x),E=R.length,b=Promise.resolve(u);j<E;)b=b.then(R[j++],R[j++]);return b}E=g.length;let M=u;for(j=0;j<E;){const R=g[j++],B=g[j++];try{M=R(M)}catch(C){B.call(this,C);break}}try{b=zh.call(this,M)}catch(R){return Promise.reject(R)}for(j=0,E=x.length;j<E;)b=b.then(x[j++],x[j++]);return b}getUri(r){r=ta(this.defaults,r);const u=R1(r.baseURL,r.url,r.allowAbsoluteUrls);return z1(u,r.params,r.paramsSerializer)}};U.forEach(["delete","get","head","options"],function(r){Il.prototype[r]=function(u,o){return this.request(ta(o||{},{method:r,url:u,data:(o||{}).data}))}});U.forEach(["post","put","patch"],function(r){function u(o){return function(f,h,g){return this.request(ta(g||{},{method:r,headers:o?{"Content-Type":"multipart/form-data"}:{},url:f,data:h}))}}Il.prototype[r]=u(),Il.prototype[r+"Form"]=u(!0)});let m2=class B1{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let u;this.promise=new Promise(function(f){u=f});const o=this;this.promise.then(c=>{if(!o._listeners)return;let f=o._listeners.length;for(;f-- >0;)o._listeners[f](c);o._listeners=null}),this.promise.then=c=>{let f;const h=new Promise(g=>{o.subscribe(g),f=g}).then(c);return h.cancel=function(){o.unsubscribe(f)},h},r(function(f,h,g){o.reason||(o.reason=new Pa(f,h,g),u(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const u=this._listeners.indexOf(r);u!==-1&&this._listeners.splice(u,1)}toAbortSignal(){const r=new AbortController,u=o=>{r.abort(o)};return this.subscribe(u),r.signal.unsubscribe=()=>this.unsubscribe(u),r.signal}static source(){let r;return{token:new B1(function(c){r=c}),cancel:r}}};function g2(l){return function(u){return l.apply(null,u)}}function x2(l){return U.isObject(l)&&l.isAxiosError===!0}const Xc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Xc).forEach(([l,r])=>{Xc[r]=l});function H1(l){const r=new Il(l),u=h1(Il.prototype.request,r);return U.extend(u,Il.prototype,r,{allOwnKeys:!0}),U.extend(u,r,null,{allOwnKeys:!0}),u.create=function(c){return H1(ta(l,c))},u}const Be=H1(mr);Be.Axios=Il;Be.CanceledError=Pa;Be.CancelToken=m2;Be.isCancel=_1;Be.VERSION=U1;Be.toFormData=tu;Be.AxiosError=Oe;Be.Cancel=Be.CanceledError;Be.all=function(r){return Promise.all(r)};Be.spread=g2;Be.isAxiosError=x2;Be.mergeConfig=ta;Be.AxiosHeaders=Wt;Be.formToJSON=l=>O1(U.isHTMLForm(l)?new FormData(l):l);Be.getAdapter=M1.getAdapter;Be.HttpStatusCode=Xc;Be.default=Be;const{Axios:Lb,AxiosError:qb,CanceledError:Vb,isCancel:Gb,CancelToken:Yb,VERSION:Xb,all:Zb,Cancel:$b,isAxiosError:Qb,spread:Kb,toFormData:Jb,AxiosHeaders:Fb,HttpStatusCode:Wb,formToJSON:Ib,getAdapter:Pb,mergeConfig:ev}=Be;var gr=l=>l.type==="checkbox",Fl=l=>l instanceof Date,Lt=l=>l==null;const L1=l=>typeof l=="object";var ct=l=>!Lt(l)&&!Array.isArray(l)&&L1(l)&&!Fl(l),y2=l=>ct(l)&&l.target?gr(l.target)?l.target.checked:l.target.value:l,b2=l=>l.substring(0,l.search(/\.\d+(\.|$)/))||l,v2=(l,r)=>l.has(b2(r)),S2=l=>{const r=l.constructor&&l.constructor.prototype;return ct(r)&&r.hasOwnProperty("isPrototypeOf")},rf=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Tt(l){let r;const u=Array.isArray(l),o=typeof FileList<"u"?l instanceof FileList:!1;if(l instanceof Date)r=new Date(l);else if(!(rf&&(l instanceof Blob||o))&&(u||ct(l)))if(r=u?[]:Object.create(Object.getPrototypeOf(l)),!u&&!S2(l))r=l;else for(const c in l)l.hasOwnProperty(c)&&(r[c]=Tt(l[c]));else return l;return r}var au=l=>/^\w*$/.test(l),ht=l=>l===void 0,sf=l=>Array.isArray(l)?l.filter(Boolean):[],uf=l=>sf(l.replace(/["|']|\]/g,"").split(/\.|\[/)),fe=(l,r,u)=>{if(!r||!ct(l))return u;const o=(au(r)?[r]:uf(r)).reduce((c,f)=>Lt(c)?c:c[f],l);return ht(o)||o===l?ht(l[r])?u:l[r]:o},Un=l=>typeof l=="boolean",nt=(l,r,u)=>{let o=-1;const c=au(r)?[r]:uf(r),f=c.length,h=f-1;for(;++o<f;){const g=c[o];let w=u;if(o!==h){const x=l[g];w=ct(x)||Array.isArray(x)?x:isNaN(+c[o+1])?{}:[]}if(g==="__proto__"||g==="constructor"||g==="prototype")return;l[g]=w,l=l[g]}};const Oh={BLUR:"blur",FOCUS_OUT:"focusout"},An={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ll={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},w2=zt.createContext(null);w2.displayName="HookFormContext";var E2=(l,r,u,o=!0)=>{const c={defaultValues:r._defaultValues};for(const f in l)Object.defineProperty(c,f,{get:()=>{const h=f;return r._proxyFormState[h]!==An.all&&(r._proxyFormState[h]=!o||An.all),l[h]}});return c};const A2=typeof window<"u"?zt.useLayoutEffect:zt.useEffect;var Hn=l=>typeof l=="string",T2=(l,r,u,o,c)=>Hn(l)?(o&&r.watch.add(l),fe(u,l,c)):Array.isArray(l)?l.map(f=>(o&&r.watch.add(f),fe(u,f))):(o&&(r.watchAll=!0),u),Zc=l=>Lt(l)||!L1(l);function Dl(l,r,u=new WeakSet){if(Zc(l)||Zc(r))return l===r;if(Fl(l)&&Fl(r))return l.getTime()===r.getTime();const o=Object.keys(l),c=Object.keys(r);if(o.length!==c.length)return!1;if(u.has(l)||u.has(r))return!0;u.add(l),u.add(r);for(const f of o){const h=l[f];if(!c.includes(f))return!1;if(f!=="ref"){const g=r[f];if(Fl(h)&&Fl(g)||ct(h)&&ct(g)||Array.isArray(h)&&Array.isArray(g)?!Dl(h,g,u):h!==g)return!1}}return!0}var z2=(l,r,u,o,c)=>r?{...u[l],types:{...u[l]&&u[l].types?u[l].types:{},[o]:c||!0}}:{},ir=l=>Array.isArray(l)?l:[l],_h=()=>{let l=[];return{get observers(){return l},next:c=>{for(const f of l)f.next&&f.next(c)},subscribe:c=>(l.push(c),{unsubscribe:()=>{l=l.filter(f=>f!==c)}}),unsubscribe:()=>{l=[]}}},Qt=l=>ct(l)&&!Object.keys(l).length,of=l=>l.type==="file",Tn=l=>typeof l=="function",Zs=l=>{if(!rf)return!1;const r=l?l.ownerDocument:0;return l instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},q1=l=>l.type==="select-multiple",cf=l=>l.type==="radio",j2=l=>cf(l)||gr(l),Rc=l=>Zs(l)&&l.isConnected;function O2(l,r){const u=r.slice(0,-1).length;let o=0;for(;o<u;)l=ht(l)?o++:l[r[o++]];return l}function _2(l){for(const r in l)if(l.hasOwnProperty(r)&&!ht(l[r]))return!1;return!0}function pt(l,r){const u=Array.isArray(r)?r:au(r)?[r]:uf(r),o=u.length===1?l:O2(l,u),c=u.length-1,f=u[c];return o&&delete o[f],c!==0&&(ct(o)&&Qt(o)||Array.isArray(o)&&_2(o))&&pt(l,u.slice(0,-1)),l}var V1=l=>{for(const r in l)if(Tn(l[r]))return!0;return!1};function $s(l,r={}){const u=Array.isArray(l);if(ct(l)||u)for(const o in l)Array.isArray(l[o])||ct(l[o])&&!V1(l[o])?(r[o]=Array.isArray(l[o])?[]:{},$s(l[o],r[o])):Lt(l[o])||(r[o]=!0);return r}function G1(l,r,u){const o=Array.isArray(l);if(ct(l)||o)for(const c in l)Array.isArray(l[c])||ct(l[c])&&!V1(l[c])?ht(r)||Zc(u[c])?u[c]=Array.isArray(l[c])?$s(l[c],[]):{...$s(l[c])}:G1(l[c],Lt(r)?{}:r[c],u[c]):u[c]=!Dl(l[c],r[c]);return u}var nr=(l,r)=>G1(l,r,$s(r));const Dh={value:!1,isValid:!1},Rh={value:!0,isValid:!0};var Y1=l=>{if(Array.isArray(l)){if(l.length>1){const r=l.filter(u=>u&&u.checked&&!u.disabled).map(u=>u.value);return{value:r,isValid:!!r.length}}return l[0].checked&&!l[0].disabled?l[0].attributes&&!ht(l[0].attributes.value)?ht(l[0].value)||l[0].value===""?Rh:{value:l[0].value,isValid:!0}:Rh:Dh}return Dh},X1=(l,{valueAsNumber:r,valueAsDate:u,setValueAs:o})=>ht(l)?l:r?l===""?NaN:l&&+l:u&&Hn(l)?new Date(l):o?o(l):l;const kh={isValid:!1,value:null};var Z1=l=>Array.isArray(l)?l.reduce((r,u)=>u&&u.checked&&!u.disabled?{isValid:!0,value:u.value}:r,kh):kh;function Nh(l){const r=l.ref;return of(r)?r.files:cf(r)?Z1(l.refs).value:q1(r)?[...r.selectedOptions].map(({value:u})=>u):gr(r)?Y1(l.refs).value:X1(ht(r.value)?l.ref.value:r.value,l)}var D2=(l,r,u,o)=>{const c={};for(const f of l){const h=fe(r,f);h&&nt(c,f,h._f)}return{criteriaMode:u,names:[...l],fields:c,shouldUseNativeValidation:o}},Qs=l=>l instanceof RegExp,lr=l=>ht(l)?l:Qs(l)?l.source:ct(l)?Qs(l.value)?l.value.source:l.value:l,Ch=l=>({isOnSubmit:!l||l===An.onSubmit,isOnBlur:l===An.onBlur,isOnChange:l===An.onChange,isOnAll:l===An.all,isOnTouch:l===An.onTouched});const Mh="AsyncFunction";var R2=l=>!!l&&!!l.validate&&!!(Tn(l.validate)&&l.validate.constructor.name===Mh||ct(l.validate)&&Object.values(l.validate).find(r=>r.constructor.name===Mh)),k2=l=>l.mount&&(l.required||l.min||l.max||l.maxLength||l.minLength||l.pattern||l.validate),Uh=(l,r,u)=>!u&&(r.watchAll||r.watch.has(l)||[...r.watch].some(o=>l.startsWith(o)&&/^\.\w+/.test(l.slice(o.length))));const rr=(l,r,u,o)=>{for(const c of u||Object.keys(l)){const f=fe(l,c);if(f){const{_f:h,...g}=f;if(h){if(h.refs&&h.refs[0]&&r(h.refs[0],c)&&!o)return!0;if(h.ref&&r(h.ref,h.name)&&!o)return!0;if(rr(g,r))break}else if(ct(g)&&rr(g,r))break}}};function Bh(l,r,u){const o=fe(l,u);if(o||au(u))return{error:o,name:u};const c=u.split(".");for(;c.length;){const f=c.join("."),h=fe(r,f),g=fe(l,f);if(h&&!Array.isArray(h)&&u!==f)return{name:u};if(g&&g.type)return{name:f,error:g};if(g&&g.root&&g.root.type)return{name:`${f}.root`,error:g.root};c.pop()}return{name:u}}var N2=(l,r,u,o)=>{u(l);const{name:c,...f}=l;return Qt(f)||Object.keys(f).length>=Object.keys(r).length||Object.keys(f).find(h=>r[h]===(!o||An.all))},C2=(l,r,u)=>!l||!r||l===r||ir(l).some(o=>o&&(u?o===r:o.startsWith(r)||r.startsWith(o))),M2=(l,r,u,o,c)=>c.isOnAll?!1:!u&&c.isOnTouch?!(r||l):(u?o.isOnBlur:c.isOnBlur)?!l:(u?o.isOnChange:c.isOnChange)?l:!0,U2=(l,r)=>!sf(fe(l,r)).length&&pt(l,r),B2=(l,r,u)=>{const o=ir(fe(l,u));return nt(o,"root",r[u]),nt(l,u,o),l},Bs=l=>Hn(l);function Hh(l,r,u="validate"){if(Bs(l)||Array.isArray(l)&&l.every(Bs)||Un(l)&&!l)return{type:u,message:Bs(l)?l:"",ref:r}}var Ga=l=>ct(l)&&!Qs(l)?l:{value:l,message:""},Lh=async(l,r,u,o,c,f)=>{const{ref:h,refs:g,required:w,maxLength:x,minLength:b,min:j,max:E,pattern:M,validate:R,name:B,valueAsNumber:C,mount:J}=l._f,X=fe(u,B);if(!J||r.has(B))return{};const K=g?g[0]:h,re=F=>{c&&K.reportValidity&&(K.setCustomValidity(Un(F)?"":F||""),K.reportValidity())},L={},I=cf(h),Q=gr(h),ie=I||Q,be=(C||of(h))&&ht(h.value)&&ht(X)||Zs(h)&&h.value===""||X===""||Array.isArray(X)&&!X.length,Ge=z2.bind(null,B,o,L),ke=(F,ae,ve,ge=ll.maxLength,T=ll.minLength)=>{const G=F?ae:ve;L[B]={type:F?ge:T,message:G,ref:h,...Ge(F?ge:T,G)}};if(f?!Array.isArray(X)||!X.length:w&&(!ie&&(be||Lt(X))||Un(X)&&!X||Q&&!Y1(g).isValid||I&&!Z1(g).isValid)){const{value:F,message:ae}=Bs(w)?{value:!!w,message:w}:Ga(w);if(F&&(L[B]={type:ll.required,message:ae,ref:K,...Ge(ll.required,ae)},!o))return re(ae),L}if(!be&&(!Lt(j)||!Lt(E))){let F,ae;const ve=Ga(E),ge=Ga(j);if(!Lt(X)&&!isNaN(X)){const T=h.valueAsNumber||X&&+X;Lt(ve.value)||(F=T>ve.value),Lt(ge.value)||(ae=T<ge.value)}else{const T=h.valueAsDate||new Date(X),G=S=>new Date(new Date().toDateString()+" "+S),ee=h.type=="time",pe=h.type=="week";Hn(ve.value)&&X&&(F=ee?G(X)>G(ve.value):pe?X>ve.value:T>new Date(ve.value)),Hn(ge.value)&&X&&(ae=ee?G(X)<G(ge.value):pe?X<ge.value:T<new Date(ge.value))}if((F||ae)&&(ke(!!F,ve.message,ge.message,ll.max,ll.min),!o))return re(L[B].message),L}if((x||b)&&!be&&(Hn(X)||f&&Array.isArray(X))){const F=Ga(x),ae=Ga(b),ve=!Lt(F.value)&&X.length>+F.value,ge=!Lt(ae.value)&&X.length<+ae.value;if((ve||ge)&&(ke(ve,F.message,ae.message),!o))return re(L[B].message),L}if(M&&!be&&Hn(X)){const{value:F,message:ae}=Ga(M);if(Qs(F)&&!X.match(F)&&(L[B]={type:ll.pattern,message:ae,ref:h,...Ge(ll.pattern,ae)},!o))return re(ae),L}if(R){if(Tn(R)){const F=await R(X,u),ae=Hh(F,K);if(ae&&(L[B]={...ae,...Ge(ll.validate,ae.message)},!o))return re(ae.message),L}else if(ct(R)){let F={};for(const ae in R){if(!Qt(F)&&!o)break;const ve=Hh(await R[ae](X,u),K,ae);ve&&(F={...ve,...Ge(ae,ve.message)},re(ve.message),o&&(L[B]=F))}if(!Qt(F)&&(L[B]={ref:K,...F},!o))return L}}return re(!0),L};const H2={mode:An.onSubmit,reValidateMode:An.onChange,shouldFocusError:!0};function L2(l={}){let r={...H2,...l},u={submitCount:0,isDirty:!1,isReady:!1,isLoading:Tn(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},o={},c=ct(r.defaultValues)||ct(r.values)?Tt(r.defaultValues||r.values)||{}:{},f=r.shouldUnregister?{}:Tt(c),h={action:!1,mount:!1,watch:!1},g={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},w,x=0;const b={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let j={...b};const E={array:_h(),state:_h()},M=r.criteriaMode===An.all,R=v=>O=>{clearTimeout(x),x=setTimeout(v,O)},B=async v=>{if(!r.disabled&&(b.isValid||j.isValid||v)){const O=r.resolver?Qt((await Q()).errors):await be(o,!0);O!==u.isValid&&E.state.next({isValid:O})}},C=(v,O)=>{!r.disabled&&(b.isValidating||b.validatingFields||j.isValidating||j.validatingFields)&&((v||Array.from(g.mount)).forEach(H=>{H&&(O?nt(u.validatingFields,H,O):pt(u.validatingFields,H))}),E.state.next({validatingFields:u.validatingFields,isValidating:!Qt(u.validatingFields)}))},J=(v,O=[],H,le,te=!0,W=!0)=>{if(le&&H&&!r.disabled){if(h.action=!0,W&&Array.isArray(fe(o,v))){const se=H(fe(o,v),le.argA,le.argB);te&&nt(o,v,se)}if(W&&Array.isArray(fe(u.errors,v))){const se=H(fe(u.errors,v),le.argA,le.argB);te&&nt(u.errors,v,se),U2(u.errors,v)}if((b.touchedFields||j.touchedFields)&&W&&Array.isArray(fe(u.touchedFields,v))){const se=H(fe(u.touchedFields,v),le.argA,le.argB);te&&nt(u.touchedFields,v,se)}(b.dirtyFields||j.dirtyFields)&&(u.dirtyFields=nr(c,f)),E.state.next({name:v,isDirty:ke(v,O),dirtyFields:u.dirtyFields,errors:u.errors,isValid:u.isValid})}else nt(f,v,O)},X=(v,O)=>{nt(u.errors,v,O),E.state.next({errors:u.errors})},K=v=>{u.errors=v,E.state.next({errors:u.errors,isValid:!1})},re=(v,O,H,le)=>{const te=fe(o,v);if(te){const W=fe(f,v,ht(H)?fe(c,v):H);ht(W)||le&&le.defaultChecked||O?nt(f,v,O?W:Nh(te._f)):ve(v,W),h.mount&&B()}},L=(v,O,H,le,te)=>{let W=!1,se=!1;const we={name:v};if(!r.disabled){if(!H||le){(b.isDirty||j.isDirty)&&(se=u.isDirty,u.isDirty=we.isDirty=ke(),W=se!==we.isDirty);const je=Dl(fe(c,v),O);se=!!fe(u.dirtyFields,v),je?pt(u.dirtyFields,v):nt(u.dirtyFields,v,!0),we.dirtyFields=u.dirtyFields,W=W||(b.dirtyFields||j.dirtyFields)&&se!==!je}if(H){const je=fe(u.touchedFields,v);je||(nt(u.touchedFields,v,H),we.touchedFields=u.touchedFields,W=W||(b.touchedFields||j.touchedFields)&&je!==H)}W&&te&&E.state.next(we)}return W?we:{}},I=(v,O,H,le)=>{const te=fe(u.errors,v),W=(b.isValid||j.isValid)&&Un(O)&&u.isValid!==O;if(r.delayError&&H?(w=R(()=>X(v,H)),w(r.delayError)):(clearTimeout(x),w=null,H?nt(u.errors,v,H):pt(u.errors,v)),(H?!Dl(te,H):te)||!Qt(le)||W){const se={...le,...W&&Un(O)?{isValid:O}:{},errors:u.errors,name:v};u={...u,...se},E.state.next(se)}},Q=async v=>{C(v,!0);const O=await r.resolver(f,r.context,D2(v||g.mount,o,r.criteriaMode,r.shouldUseNativeValidation));return C(v),O},ie=async v=>{const{errors:O}=await Q(v);if(v)for(const H of v){const le=fe(O,H);le?nt(u.errors,H,le):pt(u.errors,H)}else u.errors=O;return O},be=async(v,O,H={valid:!0})=>{for(const le in v){const te=v[le];if(te){const{_f:W,...se}=te;if(W){const we=g.array.has(W.name),je=te._f&&R2(te._f);je&&b.validatingFields&&C([le],!0);const Ze=await Lh(te,g.disabled,f,M,r.shouldUseNativeValidation&&!O,we);if(je&&b.validatingFields&&C([le]),Ze[W.name]&&(H.valid=!1,O))break;!O&&(fe(Ze,W.name)?we?B2(u.errors,Ze,W.name):nt(u.errors,W.name,Ze[W.name]):pt(u.errors,W.name))}!Qt(se)&&await be(se,O,H)}}return H.valid},Ge=()=>{for(const v of g.unMount){const O=fe(o,v);O&&(O._f.refs?O._f.refs.every(H=>!Rc(H)):!Rc(O._f.ref))&&ze(v)}g.unMount=new Set},ke=(v,O)=>!r.disabled&&(v&&O&&nt(f,v,O),!Dl(S(),c)),F=(v,O,H)=>T2(v,g,{...h.mount?f:ht(O)?c:Hn(v)?{[v]:O}:O},H,O),ae=v=>sf(fe(h.mount?f:c,v,r.shouldUnregister?fe(c,v,[]):[])),ve=(v,O,H={})=>{const le=fe(o,v);let te=O;if(le){const W=le._f;W&&(!W.disabled&&nt(f,v,X1(O,W)),te=Zs(W.ref)&&Lt(O)?"":O,q1(W.ref)?[...W.ref.options].forEach(se=>se.selected=te.includes(se.value)):W.refs?gr(W.ref)?W.refs.forEach(se=>{(!se.defaultChecked||!se.disabled)&&(Array.isArray(te)?se.checked=!!te.find(we=>we===se.value):se.checked=te===se.value||!!te)}):W.refs.forEach(se=>se.checked=se.value===te):of(W.ref)?W.ref.value="":(W.ref.value=te,W.ref.type||E.state.next({name:v,values:Tt(f)})))}(H.shouldDirty||H.shouldTouch)&&L(v,te,H.shouldTouch,H.shouldDirty,!0),H.shouldValidate&&pe(v)},ge=(v,O,H)=>{for(const le in O){if(!O.hasOwnProperty(le))return;const te=O[le],W=v+"."+le,se=fe(o,W);(g.array.has(v)||ct(te)||se&&!se._f)&&!Fl(te)?ge(W,te,H):ve(W,te,H)}},T=(v,O,H={})=>{const le=fe(o,v),te=g.array.has(v),W=Tt(O);nt(f,v,W),te?(E.array.next({name:v,values:Tt(f)}),(b.isDirty||b.dirtyFields||j.isDirty||j.dirtyFields)&&H.shouldDirty&&E.state.next({name:v,dirtyFields:nr(c,f),isDirty:ke(v,W)})):le&&!le._f&&!Lt(W)?ge(v,W,H):ve(v,W,H),Uh(v,g)&&E.state.next({...u,name:v}),E.state.next({name:h.mount?v:void 0,values:Tt(f)})},G=async v=>{h.mount=!0;const O=v.target;let H=O.name,le=!0;const te=fe(o,H),W=je=>{le=Number.isNaN(je)||Fl(je)&&isNaN(je.getTime())||Dl(je,fe(f,H,je))},se=Ch(r.mode),we=Ch(r.reValidateMode);if(te){let je,Ze;const qt=O.type?Nh(te._f):y2(v),Bt=v.type===Oh.BLUR||v.type===Oh.FOCUS_OUT,il=!k2(te._f)&&!r.resolver&&!fe(u.errors,H)&&!te._f.deps||M2(Bt,fe(u.touchedFields,H),u.isSubmitted,we,se),bt=Uh(H,g,Bt);nt(f,H,qt),Bt?(!O||!O.readOnly)&&(te._f.onBlur&&te._f.onBlur(v),w&&w(0)):te._f.onChange&&te._f.onChange(v);const vn=L(H,qt,Bt),Ot=!Qt(vn)||bt;if(!Bt&&E.state.next({name:H,type:v.type,values:Tt(f)}),il)return(b.isValid||j.isValid)&&(r.mode==="onBlur"?Bt&&B():Bt||B()),Ot&&E.state.next({name:H,...bt?{}:vn});if(!Bt&&bt&&E.state.next({...u}),r.resolver){const{errors:vt}=await Q([H]);if(W(qt),le){const Ln=Bh(u.errors,o,H),na=Bh(vt,o,Ln.name||H);je=na.error,H=na.name,Ze=Qt(vt)}}else C([H],!0),je=(await Lh(te,g.disabled,f,M,r.shouldUseNativeValidation))[H],C([H]),W(qt),le&&(je?Ze=!1:(b.isValid||j.isValid)&&(Ze=await be(o,!0)));le&&(te._f.deps&&pe(te._f.deps),I(H,Ze,je,vn))}},ee=(v,O)=>{if(fe(u.errors,O)&&v.focus)return v.focus(),1},pe=async(v,O={})=>{let H,le;const te=ir(v);if(r.resolver){const W=await ie(ht(v)?v:te);H=Qt(W),le=v?!te.some(se=>fe(W,se)):H}else v?(le=(await Promise.all(te.map(async W=>{const se=fe(o,W);return await be(se&&se._f?{[W]:se}:se)}))).every(Boolean),!(!le&&!u.isValid)&&B()):le=H=await be(o);return E.state.next({...!Hn(v)||(b.isValid||j.isValid)&&H!==u.isValid?{}:{name:v},...r.resolver||!v?{isValid:H}:{},errors:u.errors}),O.shouldFocus&&!le&&rr(o,ee,v?te:g.mount),le},S=v=>{const O={...h.mount?f:c};return ht(v)?O:Hn(v)?fe(O,v):v.map(H=>fe(O,H))},q=(v,O)=>({invalid:!!fe((O||u).errors,v),isDirty:!!fe((O||u).dirtyFields,v),error:fe((O||u).errors,v),isValidating:!!fe(u.validatingFields,v),isTouched:!!fe((O||u).touchedFields,v)}),P=v=>{v&&ir(v).forEach(O=>pt(u.errors,O)),E.state.next({errors:v?u.errors:{}})},ne=(v,O,H)=>{const le=(fe(o,v,{_f:{}})._f||{}).ref,te=fe(u.errors,v)||{},{ref:W,message:se,type:we,...je}=te;nt(u.errors,v,{...je,...O,ref:le}),E.state.next({name:v,errors:u.errors,isValid:!1}),H&&H.shouldFocus&&le&&le.focus&&le.focus()},de=(v,O)=>Tn(v)?E.state.subscribe({next:H=>"values"in H&&v(F(void 0,O),H)}):F(v,O,!0),Te=v=>E.state.subscribe({next:O=>{C2(v.name,O.name,v.exact)&&N2(O,v.formState||b,lt,v.reRenderRoot)&&v.callback({values:{...f},...u,...O,defaultValues:c})}}).unsubscribe,ce=v=>(h.mount=!0,j={...j,...v.formState},Te({...v,formState:j})),ze=(v,O={})=>{for(const H of v?ir(v):g.mount)g.mount.delete(H),g.array.delete(H),O.keepValue||(pt(o,H),pt(f,H)),!O.keepError&&pt(u.errors,H),!O.keepDirty&&pt(u.dirtyFields,H),!O.keepTouched&&pt(u.touchedFields,H),!O.keepIsValidating&&pt(u.validatingFields,H),!r.shouldUnregister&&!O.keepDefaultValue&&pt(c,H);E.state.next({values:Tt(f)}),E.state.next({...u,...O.keepDirty?{isDirty:ke()}:{}}),!O.keepIsValid&&B()},Ae=({disabled:v,name:O})=>{(Un(v)&&h.mount||v||g.disabled.has(O))&&(v?g.disabled.add(O):g.disabled.delete(O))},Xe=(v,O={})=>{let H=fe(o,v);const le=Un(O.disabled)||Un(r.disabled);return nt(o,v,{...H||{},_f:{...H&&H._f?H._f:{ref:{name:v}},name:v,mount:!0,...O}}),g.mount.add(v),H?Ae({disabled:Un(O.disabled)?O.disabled:r.disabled,name:v}):re(v,!0,O.value),{...le?{disabled:O.disabled||r.disabled}:{},...r.progressive?{required:!!O.required,min:lr(O.min),max:lr(O.max),minLength:lr(O.minLength),maxLength:lr(O.maxLength),pattern:lr(O.pattern)}:{},name:v,onChange:G,onBlur:G,ref:te=>{if(te){Xe(v,O),H=fe(o,v);const W=ht(te.value)&&te.querySelectorAll&&te.querySelectorAll("input,select,textarea")[0]||te,se=j2(W),we=H._f.refs||[];if(se?we.find(je=>je===W):W===H._f.ref)return;nt(o,v,{_f:{...H._f,...se?{refs:[...we.filter(Rc),W,...Array.isArray(fe(c,v))?[{}]:[]],ref:{type:W.type,name:v}}:{ref:W}}}),re(v,!1,void 0,W)}else H=fe(o,v,{}),H._f&&(H._f.mount=!1),(r.shouldUnregister||O.shouldUnregister)&&!(v2(g.array,v)&&h.action)&&g.unMount.add(v)}}},kt=()=>r.shouldFocusError&&rr(o,ee,g.mount),Ut=v=>{Un(v)&&(E.state.next({disabled:v}),rr(o,(O,H)=>{const le=fe(o,H);le&&(O.disabled=le._f.disabled||v,Array.isArray(le._f.refs)&&le._f.refs.forEach(te=>{te.disabled=le._f.disabled||v}))},0,!1))},he=(v,O)=>async H=>{let le;H&&(H.preventDefault&&H.preventDefault(),H.persist&&H.persist());let te=Tt(f);if(E.state.next({isSubmitting:!0}),r.resolver){const{errors:W,values:se}=await Q();u.errors=W,te=Tt(se)}else await be(o);if(g.disabled.size)for(const W of g.disabled)pt(te,W);if(pt(u.errors,"root"),Qt(u.errors)){E.state.next({errors:{}});try{await v(te,H)}catch(W){le=W}}else O&&await O({...u.errors},H),kt(),setTimeout(kt);if(E.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Qt(u.errors)&&!le,submitCount:u.submitCount+1,errors:u.errors}),le)throw le},xe=(v,O={})=>{fe(o,v)&&(ht(O.defaultValue)?T(v,Tt(fe(c,v))):(T(v,O.defaultValue),nt(c,v,Tt(O.defaultValue))),O.keepTouched||pt(u.touchedFields,v),O.keepDirty||(pt(u.dirtyFields,v),u.isDirty=O.defaultValue?ke(v,Tt(fe(c,v))):ke()),O.keepError||(pt(u.errors,v),b.isValid&&B()),E.state.next({...u}))},Le=(v,O={})=>{const H=v?Tt(v):c,le=Tt(H),te=Qt(v),W=te?c:le;if(O.keepDefaultValues||(c=H),!O.keepValues){if(O.keepDirtyValues){const se=new Set([...g.mount,...Object.keys(nr(c,f))]);for(const we of Array.from(se))fe(u.dirtyFields,we)?nt(W,we,fe(f,we)):T(we,fe(W,we))}else{if(rf&&ht(v))for(const se of g.mount){const we=fe(o,se);if(we&&we._f){const je=Array.isArray(we._f.refs)?we._f.refs[0]:we._f.ref;if(Zs(je)){const Ze=je.closest("form");if(Ze){Ze.reset();break}}}}if(O.keepFieldsRef)for(const se of g.mount)T(se,fe(W,se));else o={}}f=r.shouldUnregister?O.keepDefaultValues?Tt(c):{}:Tt(W),E.array.next({values:{...W}}),E.state.next({values:{...W}})}g={mount:O.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!b.isValid||!!O.keepIsValid||!!O.keepDirtyValues,h.watch=!!r.shouldUnregister,E.state.next({submitCount:O.keepSubmitCount?u.submitCount:0,isDirty:te?!1:O.keepDirty?u.isDirty:!!(O.keepDefaultValues&&!Dl(v,c)),isSubmitted:O.keepIsSubmitted?u.isSubmitted:!1,dirtyFields:te?{}:O.keepDirtyValues?O.keepDefaultValues&&f?nr(c,f):u.dirtyFields:O.keepDefaultValues&&v?nr(c,v):O.keepDirty?u.dirtyFields:{},touchedFields:O.keepTouched?u.touchedFields:{},errors:O.keepErrors?u.errors:{},isSubmitSuccessful:O.keepIsSubmitSuccessful?u.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:c})},He=(v,O)=>Le(Tn(v)?v(f):v,O),gt=(v,O={})=>{const H=fe(o,v),le=H&&H._f;if(le){const te=le.refs?le.refs[0]:le.ref;te.focus&&(te.focus(),O.shouldSelect&&Tn(te.select)&&te.select())}},lt=v=>{u={...u,...v}},It={control:{register:Xe,unregister:ze,getFieldState:q,handleSubmit:he,setError:ne,_subscribe:Te,_runSchema:Q,_focusError:kt,_getWatch:F,_getDirty:ke,_setValid:B,_setFieldArray:J,_setDisabledField:Ae,_setErrors:K,_getFieldArray:ae,_reset:Le,_resetDefaultValues:()=>Tn(r.defaultValues)&&r.defaultValues().then(v=>{He(v,r.resetOptions),E.state.next({isLoading:!1})}),_removeUnmounted:Ge,_disableForm:Ut,_subjects:E,_proxyFormState:b,get _fields(){return o},get _formValues(){return f},get _state(){return h},set _state(v){h=v},get _defaultValues(){return c},get _names(){return g},set _names(v){g=v},get _formState(){return u},get _options(){return r},set _options(v){r={...r,...v}}},subscribe:ce,trigger:pe,register:Xe,handleSubmit:he,watch:de,setValue:T,getValues:S,reset:He,resetField:xe,clearErrors:P,unregister:ze,setError:ne,setFocus:gt,getFieldState:q};return{...It,formControl:It}}function xr(l={}){const r=zt.useRef(void 0),u=zt.useRef(void 0),[o,c]=zt.useState({isDirty:!1,isValidating:!1,isLoading:Tn(l.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:l.errors||{},disabled:l.disabled||!1,isReady:!1,defaultValues:Tn(l.defaultValues)?void 0:l.defaultValues});if(!r.current)if(l.formControl)r.current={...l.formControl,formState:o},l.defaultValues&&!Tn(l.defaultValues)&&l.formControl.reset(l.defaultValues,l.resetOptions);else{const{formControl:h,...g}=L2(l);r.current={...g,formState:o}}const f=r.current.control;return f._options=l,A2(()=>{const h=f._subscribe({formState:f._proxyFormState,callback:()=>c({...f._formState}),reRenderRoot:!0});return c(g=>({...g,isReady:!0})),f._formState.isReady=!0,h},[f]),zt.useEffect(()=>f._disableForm(l.disabled),[f,l.disabled]),zt.useEffect(()=>{l.mode&&(f._options.mode=l.mode),l.reValidateMode&&(f._options.reValidateMode=l.reValidateMode)},[f,l.mode,l.reValidateMode]),zt.useEffect(()=>{l.errors&&(f._setErrors(l.errors),f._focusError())},[f,l.errors]),zt.useEffect(()=>{l.shouldUnregister&&f._subjects.state.next({values:f._getWatch()})},[f,l.shouldUnregister]),zt.useEffect(()=>{if(f._proxyFormState.isDirty){const h=f._getDirty();h!==o.isDirty&&f._subjects.state.next({isDirty:h})}},[f,o.isDirty]),zt.useEffect(()=>{l.values&&!Dl(l.values,u.current)?(f._reset(l.values,{keepFieldsRef:!0,...f._options.resetOptions}),u.current=l.values,c(h=>({...h}))):f._resetDefaultValues()},[f,l.values]),zt.useEffect(()=>{f._state.mount||(f._setValid(),f._state.mount=!0),f._state.watch&&(f._state.watch=!1,f._subjects.state.next({...f._formState})),f._removeUnmounted()}),r.current.formState=E2(o,f),r.current}var Jt=function(){return Jt=Object.assign||function(r){for(var u,o=1,c=arguments.length;o<c;o++){u=arguments[o];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(r[f]=u[f])}return r},Jt.apply(this,arguments)};function or(l,r,u){if(u||arguments.length===2)for(var o=0,c=r.length,f;o<c;o++)(f||!(o in r))&&(f||(f=Array.prototype.slice.call(r,0,o)),f[o]=r[o]);return l.concat(f||Array.prototype.slice.call(r))}var et="-ms-",sr="-moz-",Ye="-webkit-",$1="comm",iu="rule",ff="decl",q2="@import",Q1="@keyframes",V2="@layer",K1=Math.abs,df=String.fromCharCode,$c=Object.assign;function G2(l,r){return jt(l,0)^45?(((r<<2^jt(l,0))<<2^jt(l,1))<<2^jt(l,2))<<2^jt(l,3):0}function J1(l){return l.trim()}function al(l,r){return(l=r.exec(l))?l[0]:l}function De(l,r,u){return l.replace(r,u)}function Hs(l,r,u){return l.indexOf(r,u)}function jt(l,r){return l.charCodeAt(r)|0}function $a(l,r,u){return l.slice(r,u)}function Bn(l){return l.length}function F1(l){return l.length}function ar(l,r){return r.push(l),l}function Y2(l,r){return l.map(r).join("")}function qh(l,r){return l.filter(function(u){return!al(u,r)})}var ru=1,Qa=1,W1=0,bn=0,mt=0,ei="";function su(l,r,u,o,c,f,h,g){return{value:l,root:r,parent:u,type:o,props:c,children:f,line:ru,column:Qa,length:h,return:"",siblings:g}}function _l(l,r){return $c(su("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},r)}function Ya(l){for(;l.root;)l=_l(l.root,{children:[l]});ar(l,l.siblings)}function X2(){return mt}function Z2(){return mt=bn>0?jt(ei,--bn):0,Qa--,mt===10&&(Qa=1,ru--),mt}function zn(){return mt=bn<W1?jt(ei,bn++):0,Qa++,mt===10&&(Qa=1,ru++),mt}function Pl(){return jt(ei,bn)}function Ls(){return bn}function uu(l,r){return $a(ei,l,r)}function Qc(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $2(l){return ru=Qa=1,W1=Bn(ei=l),bn=0,[]}function Q2(l){return ei="",l}function kc(l){return J1(uu(bn-1,Kc(l===91?l+2:l===40?l+1:l)))}function K2(l){for(;(mt=Pl())&&mt<33;)zn();return Qc(l)>2||Qc(mt)>3?"":" "}function J2(l,r){for(;--r&&zn()&&!(mt<48||mt>102||mt>57&&mt<65||mt>70&&mt<97););return uu(l,Ls()+(r<6&&Pl()==32&&zn()==32))}function Kc(l){for(;zn();)switch(mt){case l:return bn;case 34:case 39:l!==34&&l!==39&&Kc(mt);break;case 40:l===41&&Kc(l);break;case 92:zn();break}return bn}function F2(l,r){for(;zn()&&l+mt!==57;)if(l+mt===84&&Pl()===47)break;return"/*"+uu(r,bn-1)+"*"+df(l===47?l:zn())}function W2(l){for(;!Qc(Pl());)zn();return uu(l,bn)}function I2(l){return Q2(qs("",null,null,null,[""],l=$2(l),0,[0],l))}function qs(l,r,u,o,c,f,h,g,w){for(var x=0,b=0,j=h,E=0,M=0,R=0,B=1,C=1,J=1,X=0,K="",re=c,L=f,I=o,Q=K;C;)switch(R=X,X=zn()){case 40:if(R!=108&&jt(Q,j-1)==58){Hs(Q+=De(kc(X),"&","&\f"),"&\f",K1(x?g[x-1]:0))!=-1&&(J=-1);break}case 34:case 39:case 91:Q+=kc(X);break;case 9:case 10:case 13:case 32:Q+=K2(R);break;case 92:Q+=J2(Ls()-1,7);continue;case 47:switch(Pl()){case 42:case 47:ar(P2(F2(zn(),Ls()),r,u,w),w);break;default:Q+="/"}break;case 123*B:g[x++]=Bn(Q)*J;case 125*B:case 59:case 0:switch(X){case 0:case 125:C=0;case 59+b:J==-1&&(Q=De(Q,/\f/g,"")),M>0&&Bn(Q)-j&&ar(M>32?Gh(Q+";",o,u,j-1,w):Gh(De(Q," ","")+";",o,u,j-2,w),w);break;case 59:Q+=";";default:if(ar(I=Vh(Q,r,u,x,b,c,g,K,re=[],L=[],j,f),f),X===123)if(b===0)qs(Q,r,I,I,re,f,j,g,L);else switch(E===99&&jt(Q,3)===110?100:E){case 100:case 108:case 109:case 115:qs(l,I,I,o&&ar(Vh(l,I,I,0,0,c,g,K,c,re=[],j,L),L),c,L,j,g,o?re:L);break;default:qs(Q,I,I,I,[""],L,0,g,L)}}x=b=M=0,B=J=1,K=Q="",j=h;break;case 58:j=1+Bn(Q),M=R;default:if(B<1){if(X==123)--B;else if(X==125&&B++==0&&Z2()==125)continue}switch(Q+=df(X),X*B){case 38:J=b>0?1:(Q+="\f",-1);break;case 44:g[x++]=(Bn(Q)-1)*J,J=1;break;case 64:Pl()===45&&(Q+=kc(zn())),E=Pl(),b=j=Bn(K=Q+=W2(Ls())),X++;break;case 45:R===45&&Bn(Q)==2&&(B=0)}}return f}function Vh(l,r,u,o,c,f,h,g,w,x,b,j){for(var E=c-1,M=c===0?f:[""],R=F1(M),B=0,C=0,J=0;B<o;++B)for(var X=0,K=$a(l,E+1,E=K1(C=h[B])),re=l;X<R;++X)(re=J1(C>0?M[X]+" "+K:De(K,/&\f/g,M[X])))&&(w[J++]=re);return su(l,r,u,c===0?iu:g,w,x,b,j)}function P2(l,r,u,o){return su(l,r,u,$1,df(X2()),$a(l,2,-2),0,o)}function Gh(l,r,u,o,c){return su(l,r,u,ff,$a(l,0,o),$a(l,o+1,-1),o,c)}function I1(l,r,u){switch(G2(l,r)){case 5103:return Ye+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ye+l+l;case 4789:return sr+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return Ye+l+sr+l+et+l+l;case 5936:switch(jt(l,r+11)){case 114:return Ye+l+et+De(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return Ye+l+et+De(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return Ye+l+et+De(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return Ye+l+et+l+l;case 6165:return Ye+l+et+"flex-"+l+l;case 5187:return Ye+l+De(l,/(\w+).+(:[^]+)/,Ye+"box-$1$2"+et+"flex-$1$2")+l;case 5443:return Ye+l+et+"flex-item-"+De(l,/flex-|-self/g,"")+(al(l,/flex-|baseline/)?"":et+"grid-row-"+De(l,/flex-|-self/g,""))+l;case 4675:return Ye+l+et+"flex-line-pack"+De(l,/align-content|flex-|-self/g,"")+l;case 5548:return Ye+l+et+De(l,"shrink","negative")+l;case 5292:return Ye+l+et+De(l,"basis","preferred-size")+l;case 6060:return Ye+"box-"+De(l,"-grow","")+Ye+l+et+De(l,"grow","positive")+l;case 4554:return Ye+De(l,/([^-])(transform)/g,"$1"+Ye+"$2")+l;case 6187:return De(De(De(l,/(zoom-|grab)/,Ye+"$1"),/(image-set)/,Ye+"$1"),l,"")+l;case 5495:case 3959:return De(l,/(image-set\([^]*)/,Ye+"$1$`$1");case 4968:return De(De(l,/(.+:)(flex-)?(.*)/,Ye+"box-pack:$3"+et+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ye+l+l;case 4200:if(!al(l,/flex-|baseline/))return et+"grid-column-align"+$a(l,r)+l;break;case 2592:case 3360:return et+De(l,"template-","")+l;case 4384:case 3616:return u&&u.some(function(o,c){return r=c,al(o.props,/grid-\w+-end/)})?~Hs(l+(u=u[r].value),"span",0)?l:et+De(l,"-start","")+l+et+"grid-row-span:"+(~Hs(u,"span",0)?al(u,/\d+/):+al(u,/\d+/)-+al(l,/\d+/))+";":et+De(l,"-start","")+l;case 4896:case 4128:return u&&u.some(function(o){return al(o.props,/grid-\w+-start/)})?l:et+De(De(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return De(l,/(.+)-inline(.+)/,Ye+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Bn(l)-1-r>6)switch(jt(l,r+1)){case 109:if(jt(l,r+4)!==45)break;case 102:return De(l,/(.+:)(.+)-([^]+)/,"$1"+Ye+"$2-$3$1"+sr+(jt(l,r+3)==108?"$3":"$2-$3"))+l;case 115:return~Hs(l,"stretch",0)?I1(De(l,"stretch","fill-available"),r,u)+l:l}break;case 5152:case 5920:return De(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,c,f,h,g,w,x){return et+c+":"+f+x+(h?et+c+"-span:"+(g?w:+w-+f)+x:"")+l});case 4949:if(jt(l,r+6)===121)return De(l,":",":"+Ye)+l;break;case 6444:switch(jt(l,jt(l,14)===45?18:11)){case 120:return De(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ye+(jt(l,14)===45?"inline-":"")+"box$3$1"+Ye+"$2$3$1"+et+"$2box$3")+l;case 100:return De(l,":",":"+et)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return De(l,"scroll-","scroll-snap-")+l}return l}function Ks(l,r){for(var u="",o=0;o<l.length;o++)u+=r(l[o],o,l,r)||"";return u}function e3(l,r,u,o){switch(l.type){case V2:if(l.children.length)break;case q2:case ff:return l.return=l.return||l.value;case $1:return"";case Q1:return l.return=l.value+"{"+Ks(l.children,o)+"}";case iu:if(!Bn(l.value=l.props.join(",")))return""}return Bn(u=Ks(l.children,o))?l.return=l.value+"{"+u+"}":""}function t3(l){var r=F1(l);return function(u,o,c,f){for(var h="",g=0;g<r;g++)h+=l[g](u,o,c,f)||"";return h}}function n3(l){return function(r){r.root||(r=r.return)&&l(r)}}function l3(l,r,u,o){if(l.length>-1&&!l.return)switch(l.type){case ff:l.return=I1(l.value,l.length,u);return;case Q1:return Ks([_l(l,{value:De(l.value,"@","@"+Ye)})],o);case iu:if(l.length)return Y2(u=l.props,function(c){switch(al(c,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ya(_l(l,{props:[De(c,/:(read-\w+)/,":"+sr+"$1")]})),Ya(_l(l,{props:[c]})),$c(l,{props:qh(u,o)});break;case"::placeholder":Ya(_l(l,{props:[De(c,/:(plac\w+)/,":"+Ye+"input-$1")]})),Ya(_l(l,{props:[De(c,/:(plac\w+)/,":"+sr+"$1")]})),Ya(_l(l,{props:[De(c,/:(plac\w+)/,et+"input-$1")]})),Ya(_l(l,{props:[c]})),$c(l,{props:qh(u,o)});break}return""})}}var a3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},sn={},Ka=typeof process<"u"&&sn!==void 0&&(sn.REACT_APP_SC_ATTR||sn.SC_ATTR)||"data-styled",P1="active",em="data-styled-version",ou="6.1.19",pf=`/*!sc*/
`,Js=typeof window<"u"&&typeof document<"u",i3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&sn!==void 0&&sn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&sn.REACT_APP_SC_DISABLE_SPEEDY!==""?sn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&sn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&sn!==void 0&&sn.SC_DISABLE_SPEEDY!==void 0&&sn.SC_DISABLE_SPEEDY!==""&&sn.SC_DISABLE_SPEEDY!=="false"&&sn.SC_DISABLE_SPEEDY),cu=Object.freeze([]),Ja=Object.freeze({});function r3(l,r,u){return u===void 0&&(u=Ja),l.theme!==u.theme&&l.theme||r||u.theme}var tm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),s3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,u3=/(^-|-$)/g;function Yh(l){return l.replace(s3,"-").replace(u3,"")}var o3=/(a)(d)/gi,ks=52,Xh=function(l){return String.fromCharCode(l+(l>25?39:97))};function Jc(l){var r,u="";for(r=Math.abs(l);r>ks;r=r/ks|0)u=Xh(r%ks)+u;return(Xh(r%ks)+u).replace(o3,"$1-$2")}var Nc,nm=5381,Xa=function(l,r){for(var u=r.length;u;)l=33*l^r.charCodeAt(--u);return l},lm=function(l){return Xa(nm,l)};function am(l){return Jc(lm(l)>>>0)}function c3(l){return l.displayName||l.name||"Component"}function Cc(l){return typeof l=="string"&&!0}var im=typeof Symbol=="function"&&Symbol.for,rm=im?Symbol.for("react.memo"):60115,f3=im?Symbol.for("react.forward_ref"):60112,d3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},p3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h3=((Nc={})[f3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nc[rm]=sm,Nc);function Zh(l){return("type"in(r=l)&&r.type.$$typeof)===rm?sm:"$$typeof"in l?h3[l.$$typeof]:d3;var r}var m3=Object.defineProperty,g3=Object.getOwnPropertyNames,$h=Object.getOwnPropertySymbols,x3=Object.getOwnPropertyDescriptor,y3=Object.getPrototypeOf,Qh=Object.prototype;function um(l,r,u){if(typeof r!="string"){if(Qh){var o=y3(r);o&&o!==Qh&&um(l,o,u)}var c=g3(r);$h&&(c=c.concat($h(r)));for(var f=Zh(l),h=Zh(r),g=0;g<c.length;++g){var w=c[g];if(!(w in p3||u&&u[w]||h&&w in h||f&&w in f)){var x=x3(r,w);try{m3(l,w,x)}catch{}}}}return l}function Fa(l){return typeof l=="function"}function hf(l){return typeof l=="object"&&"styledComponentId"in l}function Wl(l,r){return l&&r?"".concat(l," ").concat(r):l||r||""}function Fc(l,r){if(l.length===0)return"";for(var u=l[0],o=1;o<l.length;o++)u+=l[o];return u}function cr(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Wc(l,r,u){if(u===void 0&&(u=!1),!u&&!cr(l)&&!Array.isArray(l))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)l[o]=Wc(l[o],r[o]);else if(cr(r))for(var o in r)l[o]=Wc(l[o],r[o]);return l}function mf(l,r){Object.defineProperty(l,"toString",{value:r})}function yr(l){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var b3=function(){function l(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return l.prototype.indexOfGroup=function(r){for(var u=0,o=0;o<r;o++)u+=this.groupSizes[o];return u},l.prototype.insertRules=function(r,u){if(r>=this.groupSizes.length){for(var o=this.groupSizes,c=o.length,f=c;r>=f;)if((f<<=1)<0)throw yr(16,"".concat(r));this.groupSizes=new Uint32Array(f),this.groupSizes.set(o),this.length=f;for(var h=c;h<f;h++)this.groupSizes[h]=0}for(var g=this.indexOfGroup(r+1),w=(h=0,u.length);h<w;h++)this.tag.insertRule(g,u[h])&&(this.groupSizes[r]++,g++)},l.prototype.clearGroup=function(r){if(r<this.length){var u=this.groupSizes[r],o=this.indexOfGroup(r),c=o+u;this.groupSizes[r]=0;for(var f=o;f<c;f++)this.tag.deleteRule(o)}},l.prototype.getGroup=function(r){var u="";if(r>=this.length||this.groupSizes[r]===0)return u;for(var o=this.groupSizes[r],c=this.indexOfGroup(r),f=c+o,h=c;h<f;h++)u+="".concat(this.tag.getRule(h)).concat(pf);return u},l}(),Vs=new Map,Fs=new Map,Gs=1,Ns=function(l){if(Vs.has(l))return Vs.get(l);for(;Fs.has(Gs);)Gs++;var r=Gs++;return Vs.set(l,r),Fs.set(r,l),r},v3=function(l,r){Gs=r+1,Vs.set(l,r),Fs.set(r,l)},S3="style[".concat(Ka,"][").concat(em,'="').concat(ou,'"]'),w3=new RegExp("^".concat(Ka,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),E3=function(l,r,u){for(var o,c=u.split(","),f=0,h=c.length;f<h;f++)(o=c[f])&&l.registerName(r,o)},A3=function(l,r){for(var u,o=((u=r.textContent)!==null&&u!==void 0?u:"").split(pf),c=[],f=0,h=o.length;f<h;f++){var g=o[f].trim();if(g){var w=g.match(w3);if(w){var x=0|parseInt(w[1],10),b=w[2];x!==0&&(v3(b,x),E3(l,b,w[3]),l.getTag().insertRules(x,c)),c.length=0}else c.push(g)}}},Kh=function(l){for(var r=document.querySelectorAll(S3),u=0,o=r.length;u<o;u++){var c=r[u];c&&c.getAttribute(Ka)!==P1&&(A3(l,c),c.parentNode&&c.parentNode.removeChild(c))}};function T3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var om=function(l){var r=document.head,u=l||r,o=document.createElement("style"),c=function(g){var w=Array.from(g.querySelectorAll("style[".concat(Ka,"]")));return w[w.length-1]}(u),f=c!==void 0?c.nextSibling:null;o.setAttribute(Ka,P1),o.setAttribute(em,ou);var h=T3();return h&&o.setAttribute("nonce",h),u.insertBefore(o,f),o},z3=function(){function l(r){this.element=om(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var o=document.styleSheets,c=0,f=o.length;c<f;c++){var h=o[c];if(h.ownerNode===u)return h}throw yr(17)}(this.element),this.length=0}return l.prototype.insertRule=function(r,u){try{return this.sheet.insertRule(u,r),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},l.prototype.getRule=function(r){var u=this.sheet.cssRules[r];return u&&u.cssText?u.cssText:""},l}(),j3=function(){function l(r){this.element=om(r),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(r,u){if(r<=this.length&&r>=0){var o=document.createTextNode(u);return this.element.insertBefore(o,this.nodes[r]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},l.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},l}(),O3=function(){function l(r){this.rules=[],this.length=0}return l.prototype.insertRule=function(r,u){return r<=this.length&&(this.rules.splice(r,0,u),this.length++,!0)},l.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},l.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},l}(),Jh=Js,_3={isServer:!Js,useCSSOMInjection:!i3},cm=function(){function l(r,u,o){r===void 0&&(r=Ja),u===void 0&&(u={});var c=this;this.options=Jt(Jt({},_3),r),this.gs=u,this.names=new Map(o),this.server=!!r.isServer,!this.server&&Js&&Jh&&(Jh=!1,Kh(this)),mf(this,function(){return function(f){for(var h=f.getTag(),g=h.length,w="",x=function(j){var E=function(J){return Fs.get(J)}(j);if(E===void 0)return"continue";var M=f.names.get(E),R=h.getGroup(j);if(M===void 0||!M.size||R.length===0)return"continue";var B="".concat(Ka,".g").concat(j,'[id="').concat(E,'"]'),C="";M!==void 0&&M.forEach(function(J){J.length>0&&(C+="".concat(J,","))}),w+="".concat(R).concat(B,'{content:"').concat(C,'"}').concat(pf)},b=0;b<g;b++)x(b);return w}(c)})}return l.registerId=function(r){return Ns(r)},l.prototype.rehydrate=function(){!this.server&&Js&&Kh(this)},l.prototype.reconstructWithOptions=function(r,u){return u===void 0&&(u=!0),new l(Jt(Jt({},this.options),r),this.gs,u&&this.names||void 0)},l.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(r=function(u){var o=u.useCSSOMInjection,c=u.target;return u.isServer?new O3(c):o?new z3(c):new j3(c)}(this.options),new b3(r)));var r},l.prototype.hasNameForId=function(r,u){return this.names.has(r)&&this.names.get(r).has(u)},l.prototype.registerName=function(r,u){if(Ns(r),this.names.has(r))this.names.get(r).add(u);else{var o=new Set;o.add(u),this.names.set(r,o)}},l.prototype.insertRules=function(r,u,o){this.registerName(r,u),this.getTag().insertRules(Ns(r),o)},l.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},l.prototype.clearRules=function(r){this.getTag().clearGroup(Ns(r)),this.clearNames(r)},l.prototype.clearTag=function(){this.tag=void 0},l}(),D3=/&/g,R3=/^\s*\/\/.*$/gm;function fm(l,r){return l.map(function(u){return u.type==="rule"&&(u.value="".concat(r," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(r," ")),u.props=u.props.map(function(o){return"".concat(r," ").concat(o)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=fm(u.children,r)),u})}function k3(l){var r,u,o,c=Ja,f=c.options,h=f===void 0?Ja:f,g=c.plugins,w=g===void 0?cu:g,x=function(E,M,R){return R.startsWith(u)&&R.endsWith(u)&&R.replaceAll(u,"").length>0?".".concat(r):E},b=w.slice();b.push(function(E){E.type===iu&&E.value.includes("&")&&(E.props[0]=E.props[0].replace(D3,u).replace(o,x))}),h.prefix&&b.push(l3),b.push(e3);var j=function(E,M,R,B){M===void 0&&(M=""),R===void 0&&(R=""),B===void 0&&(B="&"),r=B,u=M,o=new RegExp("\\".concat(u,"\\b"),"g");var C=E.replace(R3,""),J=I2(R||M?"".concat(R," ").concat(M," { ").concat(C," }"):C);h.namespace&&(J=fm(J,h.namespace));var X=[];return Ks(J,t3(b.concat(n3(function(K){return X.push(K)})))),X};return j.hash=w.length?w.reduce(function(E,M){return M.name||yr(15),Xa(E,M.name)},nm).toString():"",j}var N3=new cm,Ic=k3(),dm=zt.createContext({shouldForwardProp:void 0,styleSheet:N3,stylis:Ic});dm.Consumer;zt.createContext(void 0);function Fh(){return V.useContext(dm)}var pm=function(){function l(r,u){var o=this;this.inject=function(c,f){f===void 0&&(f=Ic);var h=o.name+f.hash;c.hasNameForId(o.id,h)||c.insertRules(o.id,h,f(o.rules,h,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=u,mf(this,function(){throw yr(12,String(o.name))})}return l.prototype.getName=function(r){return r===void 0&&(r=Ic),this.name+r.hash},l}(),C3=function(l){return l>="A"&&l<="Z"};function Wh(l){for(var r="",u=0;u<l.length;u++){var o=l[u];if(u===1&&o==="-"&&l[0]==="-")return l;C3(o)?r+="-"+o.toLowerCase():r+=o}return r.startsWith("ms-")?"-"+r:r}var hm=function(l){return l==null||l===!1||l===""},mm=function(l){var r,u,o=[];for(var c in l){var f=l[c];l.hasOwnProperty(c)&&!hm(f)&&(Array.isArray(f)&&f.isCss||Fa(f)?o.push("".concat(Wh(c),":"),f,";"):cr(f)?o.push.apply(o,or(or(["".concat(c," {")],mm(f),!1),["}"],!1)):o.push("".concat(Wh(c),": ").concat((r=c,(u=f)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||r in a3||r.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return o};function ea(l,r,u,o){if(hm(l))return[];if(hf(l))return[".".concat(l.styledComponentId)];if(Fa(l)){if(!Fa(f=l)||f.prototype&&f.prototype.isReactComponent||!r)return[l];var c=l(r);return ea(c,r,u,o)}var f;return l instanceof pm?u?(l.inject(u,o),[l.getName(o)]):[l]:cr(l)?mm(l):Array.isArray(l)?Array.prototype.concat.apply(cu,l.map(function(h){return ea(h,r,u,o)})):[l.toString()]}function M3(l){for(var r=0;r<l.length;r+=1){var u=l[r];if(Fa(u)&&!hf(u))return!1}return!0}var U3=lm(ou),B3=function(){function l(r,u,o){this.rules=r,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&M3(r),this.componentId=u,this.baseHash=Xa(U3,u),this.baseStyle=o,cm.registerId(u)}return l.prototype.generateAndInjectStyles=function(r,u,o){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,u,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))c=Wl(c,this.staticRulesId);else{var f=Fc(ea(this.rules,r,u,o)),h=Jc(Xa(this.baseHash,f)>>>0);if(!u.hasNameForId(this.componentId,h)){var g=o(f,".".concat(h),void 0,this.componentId);u.insertRules(this.componentId,h,g)}c=Wl(c,h),this.staticRulesId=h}else{for(var w=Xa(this.baseHash,o.hash),x="",b=0;b<this.rules.length;b++){var j=this.rules[b];if(typeof j=="string")x+=j;else if(j){var E=Fc(ea(j,r,u,o));w=Xa(w,E+b),x+=E}}if(x){var M=Jc(w>>>0);u.hasNameForId(this.componentId,M)||u.insertRules(this.componentId,M,o(x,".".concat(M),void 0,this.componentId)),c=Wl(c,M)}}return c},l}(),gm=zt.createContext(void 0);gm.Consumer;var Mc={};function H3(l,r,u){var o=hf(l),c=l,f=!Cc(l),h=r.attrs,g=h===void 0?cu:h,w=r.componentId,x=w===void 0?function(re,L){var I=typeof re!="string"?"sc":Yh(re);Mc[I]=(Mc[I]||0)+1;var Q="".concat(I,"-").concat(am(ou+I+Mc[I]));return L?"".concat(L,"-").concat(Q):Q}(r.displayName,r.parentComponentId):w,b=r.displayName,j=b===void 0?function(re){return Cc(re)?"styled.".concat(re):"Styled(".concat(c3(re),")")}(l):b,E=r.displayName&&r.componentId?"".concat(Yh(r.displayName),"-").concat(r.componentId):r.componentId||x,M=o&&c.attrs?c.attrs.concat(g).filter(Boolean):g,R=r.shouldForwardProp;if(o&&c.shouldForwardProp){var B=c.shouldForwardProp;if(r.shouldForwardProp){var C=r.shouldForwardProp;R=function(re,L){return B(re,L)&&C(re,L)}}else R=B}var J=new B3(u,E,o?c.componentStyle:void 0);function X(re,L){return function(I,Q,ie){var be=I.attrs,Ge=I.componentStyle,ke=I.defaultProps,F=I.foldedComponentIds,ae=I.styledComponentId,ve=I.target,ge=zt.useContext(gm),T=Fh(),G=I.shouldForwardProp||T.shouldForwardProp,ee=r3(Q,ge,ke)||Ja,pe=function(Te,ce,ze){for(var Ae,Xe=Jt(Jt({},ce),{className:void 0,theme:ze}),kt=0;kt<Te.length;kt+=1){var Ut=Fa(Ae=Te[kt])?Ae(Xe):Ae;for(var he in Ut)Xe[he]=he==="className"?Wl(Xe[he],Ut[he]):he==="style"?Jt(Jt({},Xe[he]),Ut[he]):Ut[he]}return ce.className&&(Xe.className=Wl(Xe.className,ce.className)),Xe}(be,Q,ee),S=pe.as||ve,q={};for(var P in pe)pe[P]===void 0||P[0]==="$"||P==="as"||P==="theme"&&pe.theme===ee||(P==="forwardedAs"?q.as=pe.forwardedAs:G&&!G(P,S)||(q[P]=pe[P]));var ne=function(Te,ce){var ze=Fh(),Ae=Te.generateAndInjectStyles(ce,ze.styleSheet,ze.stylis);return Ae}(Ge,pe),de=Wl(F,ae);return ne&&(de+=" "+ne),pe.className&&(de+=" "+pe.className),q[Cc(S)&&!tm.has(S)?"class":"className"]=de,ie&&(q.ref=ie),V.createElement(S,q)}(K,re,L)}X.displayName=j;var K=zt.forwardRef(X);return K.attrs=M,K.componentStyle=J,K.displayName=j,K.shouldForwardProp=R,K.foldedComponentIds=o?Wl(c.foldedComponentIds,c.styledComponentId):"",K.styledComponentId=E,K.target=o?c.target:l,Object.defineProperty(K,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(re){this._foldedDefaultProps=o?function(L){for(var I=[],Q=1;Q<arguments.length;Q++)I[Q-1]=arguments[Q];for(var ie=0,be=I;ie<be.length;ie++)Wc(L,be[ie],!0);return L}({},c.defaultProps,re):re}}),mf(K,function(){return".".concat(K.styledComponentId)}),f&&um(K,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),K}function Ih(l,r){for(var u=[l[0]],o=0,c=r.length;o<c;o+=1)u.push(r[o],l[o+1]);return u}var Ph=function(l){return Object.assign(l,{isCss:!0})};function xm(l){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];if(Fa(l)||cr(l))return Ph(ea(Ih(cu,or([l],r,!0))));var o=l;return r.length===0&&o.length===1&&typeof o[0]=="string"?ea(o):Ph(ea(Ih(o,r)))}function Pc(l,r,u){if(u===void 0&&(u=Ja),!r)throw yr(1,r);var o=function(c){for(var f=[],h=1;h<arguments.length;h++)f[h-1]=arguments[h];return l(r,u,xm.apply(void 0,or([c],f,!1)))};return o.attrs=function(c){return Pc(l,r,Jt(Jt({},u),{attrs:Array.prototype.concat(u.attrs,c).filter(Boolean)}))},o.withConfig=function(c){return Pc(l,r,Jt(Jt({},u),c))},o}var ym=function(l){return Pc(H3,l)},ue=ym;tm.forEach(function(l){ue[l]=ym(l)});function Rl(l){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var o=Fc(xm.apply(void 0,or([l],r,!1))),c=am(o);return new pm(c,o)}var Uc,e1;function L3(){if(e1)return Uc;e1=1;var l="Expected a function",r=NaN,u="[object Symbol]",o=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,h=/^0o[0-7]+$/i,g=parseInt,w=typeof Rs=="object"&&Rs&&Rs.Object===Object&&Rs,x=typeof self=="object"&&self&&self.Object===Object&&self,b=w||x||Function("return this")(),j=Object.prototype,E=j.toString,M=Math.max,R=Math.min,B=function(){return b.Date.now()};function C(L,I,Q){var ie,be,Ge,ke,F,ae,ve=0,ge=!1,T=!1,G=!0;if(typeof L!="function")throw new TypeError(l);I=re(I)||0,J(Q)&&(ge=!!Q.leading,T="maxWait"in Q,Ge=T?M(re(Q.maxWait)||0,I):Ge,G="trailing"in Q?!!Q.trailing:G);function ee(ze){var Ae=ie,Xe=be;return ie=be=void 0,ve=ze,ke=L.apply(Xe,Ae),ke}function pe(ze){return ve=ze,F=setTimeout(P,I),ge?ee(ze):ke}function S(ze){var Ae=ze-ae,Xe=ze-ve,kt=I-Ae;return T?R(kt,Ge-Xe):kt}function q(ze){var Ae=ze-ae,Xe=ze-ve;return ae===void 0||Ae>=I||Ae<0||T&&Xe>=Ge}function P(){var ze=B();if(q(ze))return ne(ze);F=setTimeout(P,S(ze))}function ne(ze){return F=void 0,G&&ie?ee(ze):(ie=be=void 0,ke)}function de(){F!==void 0&&clearTimeout(F),ve=0,ie=ae=be=F=void 0}function Te(){return F===void 0?ke:ne(B())}function ce(){var ze=B(),Ae=q(ze);if(ie=arguments,be=this,ae=ze,Ae){if(F===void 0)return pe(ae);if(T)return F=setTimeout(P,I),ee(ae)}return F===void 0&&(F=setTimeout(P,I)),ke}return ce.cancel=de,ce.flush=Te,ce}function J(L){var I=typeof L;return!!L&&(I=="object"||I=="function")}function X(L){return!!L&&typeof L=="object"}function K(L){return typeof L=="symbol"||X(L)&&E.call(L)==u}function re(L){if(typeof L=="number")return L;if(K(L))return r;if(J(L)){var I=typeof L.valueOf=="function"?L.valueOf():L;L=J(I)?I+"":I}if(typeof L!="string")return L===0?L:+L;L=L.replace(o,"");var Q=f.test(L);return Q||h.test(L)?g(L.slice(2),Q?2:8):c.test(L)?r:+L}return Uc=C,Uc}L3();var q3=typeof window<"u"?V.useLayoutEffect:V.useEffect;function V3(l,r,u,o){const c=V.useRef(r);q3(()=>{c.current=r},[r]),V.useEffect(()=>{const f=window;if(!(f&&f.addEventListener))return;const h=g=>{c.current(g)};return f.addEventListener(l,h,o),()=>{f.removeEventListener(l,h,o)}},[l,u,o])}function ti(l,r,u="mousedown",o={}){V3(u,c=>{const f=c.target;if(!f||!f.isConnected)return;(Array.isArray(l)?l.filter(g=>!!g.current).every(g=>g.current&&!g.current.contains(f)):l.current&&!l.current.contains(f))&&r(c)},void 0,o)}const ef=ue.button`
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
`,fr=ue.div`
  display: flex;
  flex-direction: column;
  padding: 40px 32px 24px 32px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 32px 24px 20px 24px;
  }
`;ue.img`
  height: 60px;
  max-width: 200px;
  margin: 0 auto 24px;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
`;const Wa=ue.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${l=>l.mainColor||"#333"};
  margin: 0 0 16px 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`,fu=ue.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 32px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`,Za=ue.input`
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
    border-color: ${l=>l.mainColor||"#e7333c"};
    background: white;
    box-shadow: 0 0 0 3px
      ${l=>l.mainColor?`${l.mainColor}20`:"rgba(231, 51, 60, 0.1)"};
  }

  &:hover {
    border-color: #d1d5db;
    background: white;
  }

  @media (max-width: 768px) {
    padding: 14px 16px;
    font-size: 16px;
  }
`,Kt=ue.div`
  color: #e40000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`,gf=ue.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 20px 0;
  text-align: left;
`,xf=ue.input`
  width: 20px;
  height: 20px;
  min-width: 20px;
  margin: 0;
  cursor: pointer;
  accent-color: ${l=>l.mainColor||"#e7333c"};

  &:focus {
    outline: 2px solid
      ${l=>l.mainColor?`${l.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
    outline-offset: 2px;
  }
`,Ws=ue.button`
  width: 100%;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(
    135deg,
    ${l=>l.mainColor||"#e7333c"},
    ${l=>l.mainColor?`${l.mainColor}dd`:"#d12b35"}
  );
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px
      ${l=>l.mainColor?`${l.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
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
`,du=ue.div`
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
`,yf=ue.a`
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
`,G3=ue.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`,bm=ue.h1`
  font-size: 16px;
  font-weight: 600;
  color: ${l=>l.mainColor||"#333"};
  margin: 10px;
`,vm=ue.p`
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  color: ${l=>l.mainColor||"#666"};
  width: 100%;
  margin: 3% auto 5%;
`,Y3=Rl`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`,X3=ue.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${Y3} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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
`,Sm=ue.div`
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
`,Z3=Rl`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,t1=ue.div`
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
      ${l=>l.mainColor}dd 90deg,
      ${l=>l.mainColor} 110deg,
      ${l=>l.mainColor} 120deg,
      ${l=>l.mainColor} 130deg,
      ${l=>l.mainColor}dd 150deg,
      transparent 180deg,
      transparent 360deg
    );
    border-radius: 20px;
    z-index: -1;
    animation: ${Z3} 8s linear infinite;
    opacity: ${l=>l.mainColor?"1":"0"};
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
`,bf=ue.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  border-radius: 20px;
  overflow: hidden;
`,$3=ue.div`
  display: flex;
  width: 100%;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`,Q3=({enabledPhoneSubscription:l,enabledEmailSubscription:r,mainColor:u,forceOpen:o})=>{const[c,f]=V.useState(o||!1),[h,g]=V.useState(!1),[w,x]=V.useState(""),[b,j]=V.useState(!1),[E,M]=V.useState(""),[R,B]=V.useState(""),C=V.useRef(null),{register:J,handleSubmit:X,formState:{errors:K}}=xr(),re=()=>{f(!1);const Q=new Date;Q.setDate(Q.getDate()+7);const ie="expires="+Q.toUTCString();document.cookie=`upsellPhoneSubscription=false;${ie};path=/`};C!==null&&ti(C,()=>{re()});const I=X(async Q=>{g(!0),x("");try{R&&r&&await Be.post("https://api.upsell.co/emailsubscription",{name:Q.name,surname:Q.surname,email:R}),E&&l&&await Be.post("https://api.upsell.co/PhoneSubscription",{name:Q.name,surname:Q.surname,phone:"90"+E}),j(!0);const ie=new Date;ie.setDate(ie.getDate()+7);const be="expires="+ie.toUTCString();document.cookie=`upsellPhoneSubscription=true;${be};path=/`,f(!1)}catch{x("Bu telefon numarası veya e-posta adresi zaten kayıtlı.")}finally{g(!1)}});return V.useEffect(()=>{if(o){f(!0);return}if(typeof window<"u"&&!document.cookie.split(";").some(ie=>ie.trim().startsWith("upsellPhoneSubscription="))&&(l||r)){const ie=setTimeout(()=>{f(!0)},2e4);return()=>{clearTimeout(ie)}}},[o,l,r]),!l&&!r?null:p.jsx(p.Fragment,{children:p.jsxs(Sm,{style:{display:!b&&!c?"none":"block"},children:[b&&p.jsx(t1,{children:p.jsxs(G3,{children:[p.jsx(ef,{children:p.jsx("span",{onClick:()=>{j(!1)},style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),p.jsx(bm,{mainColor:u,children:"Teşekkürler!"}),p.jsx(vm,{mainColor:u,children:"Aboneliğiniz başarıyla alındı."})]})}),c&&p.jsxs(t1,{ref:C,mainColor:u,children:[p.jsxs(bf,{children:[h&&p.jsx(du,{children:p.jsxs(X3,{children:[p.jsx("div",{}),p.jsx("div",{}),p.jsx("div",{}),p.jsx("div",{}),p.jsx("div",{}),p.jsx("div",{}),p.jsx("div",{}),p.jsx("div",{})]})}),!b&&p.jsxs(p.Fragment,{children:[p.jsx(ef,{onClick:()=>{re()},children:p.jsx("span",{style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),p.jsxs(fr,{children:[p.jsx(Wa,{mainColor:u,children:"Bültenimize Abone Olun, Fırsatları İlk Siz Yakalayın!"}),p.jsx(fu,{children:"İndirim ve fırsatlardan ilk sizin haberiniz olsun, kayıt olun ve avantajlardan yararlanın!"}),p.jsxs("form",{style:{display:"flex",flexDirection:"column",width:"100%"},onSubmit:Q=>I(Q),children:[p.jsxs($3,{children:[p.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[p.jsx(Za,{mainColor:u,placeholder:"Adınızı Giriniz",...J("name",{required:"Ad boş bırakılamaz"})}),K.name&&p.jsx(Kt,{children:p.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:K?.name?.message?.toString()??null})})]}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[p.jsx(Za,{mainColor:u,placeholder:"Soyadınızı Giriniz",...J("surname",{required:"Soyadı boş bırakılamaz"})}),K.surname&&p.jsx(Kt,{children:p.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:K?.surname?.message?.toString()??null})})]})]}),l&&p.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[p.jsx(Za,{mainColor:u,type:"tel",onInput:Q=>{Q.currentTarget.value=Q.currentTarget.value.replace(/[^0-9]/g,"")},...J("phone",{required:l&&!r?"Telefon boş bırakılamaz":l&&r&&!R?"Telefon veya e-posta girmelisiniz":!1,pattern:{value:/^5[0-9]{9}$/,message:"Telefon numarası 5 ile başlamalı ve 10 haneli olmalıdır"},validate:Q=>Q&&(/^(\d)\1+$/.test(Q)||/^5(\d)\1{8}$/.test(Q)||Q==="5123456789"||Q==="5987654321")?"Geçersiz telefon numarası":!0}),onChange:Q=>{M(Q.target.value)},placeholder:"5XXXXXXXXX",maxLength:10}),K.phone&&p.jsx(Kt,{children:p.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:K?.phone?.message?.toString()??null})})]}),r&&p.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[p.jsx(Za,{mainColor:u,placeholder:"E-postanızı Giriniz",...J("email",{required:r&&!l?"E-posta boş bırakılamaz":r&&l&&!E?"E-posta veya telefon girmelisiniz":!1,pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,message:"Geçerli bir e-posta giriniz"}}),onChange:Q=>{B(Q.target.value)}}),K.email&&p.jsx(Kt,{children:p.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:K?.email?.message?.toString()??null})})]}),p.jsxs(gf,{children:[p.jsx(xf,{mainColor:u,...J("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),p.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",p.jsx("a",{style:{color:u||"#e7333c",textDecoration:"underline",fontWeight:"500"},id:"kvkkLink",href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",children:"Aydınlatma metni için tıklayın"}),"."]})]}),K.kvkk&&p.jsx(Kt,{children:p.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:K?.kvkk?.message?.toString()??null})}),w&&p.jsx(Kt,{children:p.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:w})}),p.jsx("div",{children:p.jsx(Ws,{mainColor:u,children:"Kaydet"})})]})]})]})]}),p.jsxs(yf,{target:"_blank",href:"https://upsell.co/",children:[p.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[p.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),p.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),p.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),p.jsxs("g",{children:[p.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),p.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})]})})},yn=ue.div`
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow:
    0 4px 15px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.04);
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
    box-shadow:
      0 6px 20px rgba(0, 0, 0, 0.12),
      0 3px 12px rgba(0, 0, 0, 0.08);
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
`,K3=Rl`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,J3=Rl`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,F3=ue.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${J3} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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
`,W3=ue.div`
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
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.15),
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
      ${l=>l.mainColor||"#e7333c"}dd 90deg,
      ${l=>l.mainColor||"#e7333c"} 110deg,
      ${l=>l.mainColor||"#e7333c"} 120deg,
      ${l=>l.mainColor||"#e7333c"} 130deg,
      ${l=>l.mainColor||"#e7333c"}dd 150deg,
      transparent 180deg,
      transparent 360deg
    );
    border-radius: 24px;
    z-index: -1;
    animation: ${K3} 8s linear infinite;
    opacity: ${l=>l.mainColor?"1":"0.8"};
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
`,I3=({color:l,forceOpen:r})=>{const[u,o]=V.useState(r||!1),[c,f]=V.useState(null),[h,g]=V.useState(!1),[w,x]=V.useState(!1),b=V.useRef(null);ti(b,()=>{o(!1)}),V.useEffect(()=>{if(r)o(!0);else{const J=document.getElementsByClassName("upsell-ss"),X=()=>o(!0);return Array.from(J).forEach(K=>{K.addEventListener("click",X)}),()=>{Array.from(J).forEach(K=>{K.removeEventListener("click",X)})}}},[r]);const{register:E,handleSubmit:M,formState:{errors:R}}=xr(),B=M(async J=>{x(!0),g(!1),f(null);try{const K=(await Be.post("https://api.upsell.co/ticimax/order",{phone:"90"+J.phone})).data;!K.data||K.data===null?g(!0):f(K.data)}catch{g(!0)}finally{x(!1)}}),C=()=>{o(!1),f(null),g(!1)};return p.jsx(Sm,{style:{display:u?"block":"none"},children:p.jsxs(W3,{ref:b,mainColor:l,children:[p.jsxs(bf,{children:[w&&p.jsx(du,{children:p.jsx(F3,{children:Array.from({length:8}).map((J,X)=>p.jsx("div",{},X))})}),p.jsx(ef,{children:p.jsx("span",{onClick:C,style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),c?p.jsxs(fr,{children:[p.jsx(Wa,{mainColor:l,children:"Sipariş Durumunu Sorgula"}),p.jsxs(yn,{children:[p.jsx("div",{style:{width:"50%"},children:"Sipariş No"}),p.jsx("div",{style:{width:"50%"},children:c.siparisNo||"-"})]}),p.jsxs(yn,{children:[p.jsx("div",{style:{width:"50%"},children:"Sipariş Tarihi"}),p.jsx("div",{style:{width:"50%"},children:new Date(c.siparisTarihi).toLocaleDateString("tr-TR")||"-"})]}),p.jsxs(yn,{children:[p.jsx("div",{style:{width:"50%"},children:"Sipariş Durumu"}),p.jsx("div",{style:{width:"50%"},children:c.siparisDurumu||"-"})]}),p.jsxs(yn,{children:[p.jsx("div",{style:{width:"50%"},children:"Kargo Takip Link"}),p.jsx("div",{style:{width:"50%"},children:c.kargoTakipLink?p.jsx("a",{target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:l||"#e7333c"},href:c.kargoTakipLink,children:"Kargoyu Görüntüle"}):"-"})]}),p.jsxs(yn,{children:[p.jsx("div",{style:{width:"50%"},children:"Kargo Takip No"}),p.jsx("div",{style:{width:"50%"},children:c.kargoTakipNo||"-"})]}),p.jsxs(yn,{children:[p.jsx("div",{style:{width:"50%"},children:"Kargo Firma"}),p.jsx("div",{style:{width:"50%"},children:c.kargoFirmaTanim||"-"})]})]}):p.jsxs(fr,{children:[p.jsx(Wa,{mainColor:l,children:"Sipariş Durumunu Sorgula"}),p.jsx(fu,{children:"Siparişinizin kargo takibini yapmak için telefon numaranızı giriniz."}),p.jsxs("form",{onSubmit:B,children:[p.jsx(Za,{mainColor:l,type:"tel",onInput:J=>{J.currentTarget.value=J.currentTarget.value.replace(/[^0-9]/g,"")},...E("phone",{required:"Telefon numarası boş bırakılamaz",pattern:{value:/^5[0-9]{9}$/,message:"Telefon numarası 5 ile başlamalı ve 10 haneli olmalıdır"},validate:J=>/^(\d)\1+$/.test(J)||/^5(\d)\1{8}$/.test(J)||J==="5123456789"||J==="5987654321"?"Geçersiz telefon numarası":!0}),placeholder:"5XXXXXXXXX",maxLength:10}),R.phone&&p.jsx(Kt,{children:p.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:R.phone.message})}),p.jsxs(gf,{children:[p.jsx(xf,{mainColor:l,...E("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),p.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",p.jsx("a",{style:{color:l||"#e7333c",textDecoration:"underline",fontWeight:"500"},href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",rel:"noopener noreferrer",children:"Aydınlatma metni için tıklayın."})]})]}),R.kvkk&&p.jsx(Kt,{children:p.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center",marginBottom:"10px"},children:R.kvkk.message})}),h&&p.jsx(Kt,{children:p.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Telefon numarası ile eşleşen sipariş bulunamadı."})}),p.jsx("div",{children:p.jsx(Ws,{mainColor:l,children:"Sorgula"})})]})]})]}),p.jsxs(yf,{target:"_blank",href:"https://upsell.co/",children:[p.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[p.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),p.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),p.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),p.jsxs("g",{children:[p.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),p.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})})},P3=({mainColor:l,stockReminderUsageChannel:r,forceOpen:u})=>{const o=V.useRef(null),[c,f]=V.useState(u||!1),[h,g]=V.useState(!1),[w,x]=V.useState(""),[b,j]=V.useState(!1),[E,M]=V.useState(),[R,B]=V.useState(),[C,J]=V.useState(!1),[X,K]=V.useState(!1),[re,L]=V.useState(null);V.useRef(null),V.useRef(null);const I=V.useRef(null);V.useEffect(()=>{if(document.getElementById("upsell-sr-styles"))return;const T=document.createElement("style");T.id="upsell-sr-styles",T.textContent=`
      /* Keyframes */
      @keyframes upsell-sr-fade { from { opacity: 0; } to { opacity: 1; } }
      @keyframes upsell-sr-slide { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.95); } 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); } }
      @keyframes upsell-sr-glow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      @keyframes upsell-sr-bellRing { 0%, 100% { transform: scale(1); fill: ${l}; } 10%, 30% { transform: scale(1.5); fill: red; } }
      @keyframes upsell-sr-roller { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

      /* Modal Wrapper & Box */
      .upsell-sr-modal-wrapper { position: fixed; top: 0; left: 0; z-index: 9999; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.65); animation: upsell-sr-fade 0.2s ease-out; }
      .upsell-sr-modal { 
        position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); 
        background: white; border-radius: 20px; width: 85%; max-width: 450px; max-height: 85vh; 
        overflow: hidden; box-shadow: 0 25px 50px rgba(0,0,0,0.15); animation: upsell-sr-slide 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .upsell-sr-modal::before {
        content: ""; position: absolute; top: -4px; left: -4px; right: -4px; bottom: -4px;
        background: conic-gradient(from 0deg, transparent 0deg, transparent 60deg, ${l}dd 90deg, ${l} 110deg, ${l} 120deg, ${l} 130deg, ${l}dd 150deg, transparent 180deg, transparent 360deg);
        border-radius: 24px; z-index: -1; animation: upsell-sr-glow 8s linear infinite;
      }
      .upsell-sr-modal::after { content: ""; position: absolute; top: 2px; left: 2px; right: 2px; bottom: 2px; background: white; border-radius: 18px; z-index: -1; }

      /* Content Elements */
      .upsell-sr-body { display: flex; flex-direction: column; padding: 40px 32px 24px 32px; text-align: center; }
      .upsell-sr-title { font-size: 24px; font-weight: 700; color: ${l||"#333"}; margin: 0 0 16px 0; line-height: 1.3; }
      .upsell-sr-desc { font-size: 16px; line-height: 1.5; color: #666; margin-bottom: 24px; }
      .upsell-sr-input { width: 100%; padding: 16px 20px; border: 2px solid #e1e5e9; border-radius: 12px; font-size: 16px; background: #f8f9fa; transition: all 0.3s ease; margin-bottom: 16px; box-sizing: border-box; }
      .upsell-sr-input:focus { outline: none; border-color: ${l}; background: white; box-shadow: 0 0 0 3px ${l}20; }
      .upsell-sr-submit { width: 100%; padding: 16px 24px; font-size: 16px; font-weight: 600; color: white; background: linear-gradient(135deg, ${l}, ${l}dd); border: none; border-radius: 12px; cursor: pointer; transition: all 0.3s ease; }
      .upsell-sr-close { cursor: pointer; position: absolute; top: 13px; right: 13px; background: rgba(0,0,0,0.1); border: none; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; z-index: 10; font-size: 24px; color: #333; }

      /* Variant Styles */
      .upsell-sr-variant-list { list-style: none; display: flex; flex-wrap: wrap; gap: 12px; width: 100%; justify-content: center; padding: 0; margin: 16px 0; }
      .upsell-sr-variant-label { 
        padding: 8px 12px; min-width: 40px; border: 2px solid #e1e5e9; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.2s; position: relative; overflow: hidden;
      }
      .upsell-sr-variant-label.selected { border-color: ${l}; background: ${l}; color: white; }
      .upsell-sr-variant-label.disabled { opacity: 0.5; cursor: not-allowed; }
      .upsell-sr-variant-label.disabled::after { content: ''; position: absolute; top: 50%; left: 50%; width: 150%; height: 2px; background: #dc2626; transform: translate(-50%, -50%) rotate(45deg); }

      /* Ticimax Bell & Button Integration */
      span.nostok { display: flex !important; justify-content: space-evenly !important; align-items: center !important; min-width: 65px !important; position: relative !important; cursor: pointer; }
      .stock_bell_icon { width: 18px !important; height: 18px !important; fill: ${l} !important; transition: none !important; transform-origin: center center; }
      .stock_bell_icon.bell-animate { animation: upsell-sr-bellRing 1s ease-in-out !important; }
      
      #upsell-ss-reminder {
        display: flex; font-size: 14px; font-weight: 600; background: #fff; color: ${l}; border: 1px solid ${l};
        border-radius: 8px; padding: 12px 16px; align-items: center; gap: 10px; cursor: pointer; transition: all 0.3s ease; justify-content: center; margin-bottom: 10px;
      }
      #upsell-ss-reminder:hover { background: ${l}; color: #fff; transform: translateY(-1px); box-shadow: 0 4px 12px ${l}40; }
      
      /* Loader */
      .upsell-sr-loader-wrap { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background: rgba(255,255,255,0.7); z-index: 20; }
      .upsell-sr-loader { display: inline-block; position: relative; width: 80px; height: 80px; }
      .upsell-sr-loader div { animation: upsell-sr-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite; transform-origin: 40px 40px; }
      .upsell-sr-loader div:after { content: " "; display: block; position: absolute; width: 7px; height: 7px; border-radius: 50%; background: #000; margin: -4px 0 0 -4px; }
      ${Array.from({length:8}).map((G,ee)=>`.upsell-sr-loader div:nth-child(${ee+1}) { animation-delay: ${-.036*(ee+1)}s; }`).join(" ")}

      @media (max-width: 768px) { .upsell-sr-modal { width: 90%; } .upsell-sr-body { padding: 32px 24px; } }
    `,document.head.appendChild(T)},[l]);const Q=()=>{document.querySelectorAll(".nostok").forEach(G=>{if(!G.querySelector(".stock_bell_icon")){const ee=document.createElementNS("http://www.w3.org/2000/svg","svg");ee.setAttribute("class","stock_bell_icon"),ee.setAttribute("viewBox","0 0 512 512"),ee.innerHTML='<path d="m383.467 329.632v-76.792c0-28.011-8.918-54.59-25.79-76.865-14.101-18.617-33.332-33.16-54.939-41.717-3.007-23.111-22.82-41.018-46.738-41.018s-43.733 17.906-46.74 41.018c-21.606 8.558-40.837 23.101-54.938 41.717-16.872 22.275-25.79 48.854-25.79 76.865v76.792l-30.549 61.1c-2.325 4.65-2.076 10.172.657 14.594s7.561 7.114 12.76 7.114h66.774c7.033 36.558 39.246 64.267 77.825 64.267 38.578 0 70.791-27.709 77.823-64.267h66.778c5.199 0 10.027-2.692 12.76-7.114s2.981-9.944.657-14.594zm-127.467 117.075c-21.938 0-40.573-14.413-46.933-34.267h93.865c-6.36 19.854-24.994 34.267-46.932 34.267zm64.266-64.267h-128.533-56.062l21.279-42.559c1.042-2.083 1.583-4.379 1.583-6.708v-80.333c0-42.793 28.625-81.203 69.612-93.405 6.36-1.894 10.72-7.741 10.72-14.376v-4.686c0-9.447 7.687-17.133 17.135-17.133 9.447 0 17.133 7.686 17.133 17.133v4.686c0 6.636 4.36 12.483 10.72 14.376 40.987 12.202 69.614 50.611 69.614 93.405v80.333c0 2.329.542 4.625 1.583 6.708l21.279 42.559z"></path>',G.appendChild(ee)}})};V.useEffect(()=>{typeof window<"u"&&M(window.currentProduct||window.productDetailModel)},[]),V.useEffect(()=>(E&&(Q(),I.current||(I.current=setInterval(()=>{document.querySelectorAll(".stock_bell_icon").forEach(T=>{T.classList.add("bell-animate"),setTimeout(()=>T.classList.remove("bell-animate"),1e3)})},3e3))),()=>clearInterval(I.current)),[E]);const{register:ie,handleSubmit:be,formState:{errors:Ge},reset:ke,clearErrors:F}=xr(),ae=()=>{f(!1),B(null),K(!1),L(null),ke(),F(),x(""),J(!1)};ti(o,ae);const ve=be(T=>{g(!0),E&&Be.post("https://api.upsell.co/phonesubscription/reminder",{...r===3?{email:T.email,phone:""}:{phone:"90"+T.phone,email:""},productName:E.productName,productSlug:window.location.pathname,productId:`${E.productVariantData?R?.variantOptions[0].urunID:E.product.id}`,productCardId:E.product.urunKartiId.toString(),variant:JSON.stringify(R)||"{}",hasVariant:E.productVariantData!==null}).then(()=>{j(!0),f(!1)}).catch(()=>{x(r===3?"Bu e-posta zaten kayıtlı.":"Bu telefon zaten kayıtlı.")}).finally(()=>g(!1))});V.useEffect(()=>{if(u)f(!0);else if(typeof window<"u"){const T=pe=>{pe.preventDefault(),pe.stopPropagation();const S=pe.currentTarget,q=S.getAttribute("data-variant-definition")||S.querySelector("[data-variant-definition]")?.getAttribute("data-variant-definition");L(q),f(!0)};document.querySelectorAll(".nostok").forEach(pe=>pe.addEventListener("click",T));const G=()=>f(!0),ee=document.getElementById("upsell-ss-reminder");ee&&ee.addEventListener("click",G)}},[u,E]);const ge=T=>T.reduce((G,ee)=>(G[ee.urunID]||(G[ee.urunID]={variantName:ee.ekSecenekTipiTanim,variantOptions:[]}),G[ee.urunID].variantOptions.push(ee),G),{});return E?p.jsx("div",{className:"upsell-sr-wrapper",children:(c||b)&&p.jsx("div",{className:"upsell-sr-modal-wrapper",children:p.jsxs("div",{className:"upsell-sr-modal",ref:o,children:[h&&p.jsx("div",{className:"upsell-sr-loader-wrap",children:p.jsx("div",{className:"upsell-sr-loader",children:Array.from({length:8}).map((T,G)=>p.jsx("div",{},G))})}),p.jsx("button",{className:"upsell-sr-close",onClick:ae,children:"×"}),p.jsx("div",{className:"upsell-sr-body",children:b?p.jsxs(p.Fragment,{children:[p.jsx("h1",{className:"upsell-sr-title",children:"Teşekkürler!"}),p.jsx("p",{className:"upsell-sr-desc",children:"İlgilendiğiniz ürün stoğa girdiğinde size hemen bilgi vereceğiz."})]}):p.jsxs(p.Fragment,{children:[p.jsx("h1",{className:"upsell-sr-title",children:"Stokta Olunca Sana Bildirelim!"}),E.productVariantData&&p.jsx("ul",{className:"upsell-sr-variant-list",children:Object.entries(ge(E.productVariantData)).map(([T,G])=>p.jsx("li",{children:p.jsxs("label",{className:`upsell-sr-variant-label ${R?.name===G.variantOptions.map(ee=>ee.tanim).join(", ")?"selected":""} ${G.variantOptions[0].stokAdedi!==0?"disabled":""}`,children:[p.jsx("input",{type:"radio",style:{display:"none"},disabled:G.variantOptions[0].stokAdedi!==0,onClick:()=>B({variantOptions:G.variantOptions,name:G.variantOptions.map(ee=>ee.tanim).join(", ")})}),G.variantOptions.map(ee=>ee.tanim).join(", ")]})},T))}),p.jsxs("p",{className:"upsell-sr-desc",children:["Ürün stoğa girdiğinde size"," ",r===3?"E-posta":"WhatsApp/SMS"," ","ile bilgi vereceğiz."]}),p.jsxs("form",{onSubmit:ve,children:[r===3?p.jsx("input",{className:"upsell-sr-input",placeholder:"E-postanızı Giriniz",...ie("email",{required:!0})}):p.jsx("input",{className:"upsell-sr-input",type:"tel",maxLength:10,placeholder:"5XXXXXXXXX",onInput:T=>T.target.value=T.target.value.replace(/[^0-9]/g,""),...ie("phone",{required:!0,pattern:/^5[0-9]{9}$/})}),p.jsxs("div",{style:{display:"flex",gap:"10px",textAlign:"left",marginBottom:"16px",fontSize:"13px",color:"#666"},children:[p.jsx("input",{type:"checkbox",...ie("kvkk",{required:!0}),style:{accentColor:l}}),p.jsxs("span",{children:["Bilgilerimin kampanya bildirimi için paylaşılmasını onaylıyorum."," ",p.jsx("a",{href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",style:{color:l},children:"Aydınlatma metni"}),"."]})]}),w&&p.jsx("div",{style:{color:"red",fontSize:"14px",marginBottom:"10px"},children:w}),p.jsx("button",{className:"upsell-sr-submit",disabled:h,children:h?"Gönderiliyor...":"Kaydet"})]})]})}),p.jsx("a",{href:"https://upsell.co/",target:"_blank",style:{display:"flex",justifyContent:"center",padding:"16px",borderTop:"1px solid #eee",textDecoration:"none",color:"#666",fontSize:"12px"},children:"upsell.co tarafından geliştirilmiştir."})]})})}):null},eb=({mainColor:l,forceOpen:r})=>{const[u,o]=V.useState(r||!1),[c,f]=V.useState(!0),[h,g]=V.useState([]),[w,x]=V.useState({title:"",contentTitle:"",position:0,theme:1}),b=V.useRef(null);if(V.useEffect(()=>{if(document.getElementById("upsell-weekly-styles"))return;const M=document.createElement("style");M.id="upsell-weekly-styles",M.textContent=`
      /* Keyframes */
      @keyframes upsell-weekly-pulse {
        0% { transform: scale(1); box-shadow: 0 0 0 0 ${l}66; }
        70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
      }
      @keyframes upsell-weekly-fade { from { opacity: 0; } to { opacity: 1; } }
      @keyframes upsell-weekly-glow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      @keyframes upsell-weekly-slide { 0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); } }

      /* Floating Button */
      .upsell-weekly-button {
        position: fixed; color: white; border-radius: 50%; width: 80px; height: 80px;
        display: flex; justify-content: center; align-items: center; cursor: pointer;
        z-index: 999; text-align: center; padding: 8px; box-sizing: border-box;
        font-size: 11px; font-weight: 600; border: none; transition: all 0.3s ease;
        animation: upsell-weekly-pulse 2s infinite; bottom: 50px;
        background: linear-gradient(135deg, ${l}, ${l}dd);
      }

      /* Modal & Content */
      .upsell-weekly-modal {
        position: fixed; top: 0; left: 0; z-index: 9999; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.65); animation: upsell-weekly-fade 0.2s ease-out;
      }
      .upsell-weekly-modal-content {
        position: absolute; bottom: 150px; background: white; border-radius: 16px;
        width: 400px; max-width: 500px; max-height: 85vh; overflow: hidden;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15); z-index: 99999;
        animation: upsell-weekly-slide 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      /* Border Glow Effect */
      .upsell-weekly-modal-content::before {
        content: ""; position: absolute; top: -4px; left: -4px; right: -4px; bottom: -4px;
        background: conic-gradient(from 0deg, transparent 0deg, transparent 60deg, ${l}dd 90deg, ${l} 110deg, ${l} 120deg, ${l} 130deg, ${l}dd 150deg, transparent 180deg, transparent 360deg);
        border-radius: 20px; z-index: -1; animation: upsell-weekly-glow 8s linear infinite;
      }
      .upsell-weekly-modal-content::after {
        content: ""; position: absolute; top: 2px; left: 2px; right: 2px; bottom: 2px;
        background: white; border-radius: 14px; z-index: -1;
      }

      /* Heading & UI Elements */
      .upsell-weekly-heading { text-align: center; font-weight: 700; padding: 24px 32px 20px 32px; font-size: 20px; color: #333; }
      .upsell-weekly-close {
        cursor: pointer; position: absolute; top: 13px; right: 13px; background: rgba(0, 0, 0, 0.1);
        border: none; border-radius: 50%; width: 32px; height: 32px; display: flex;
        align-items: center; justify-content: center; z-index: 10; font-size: 18px; color: rgba(0,0,0,0.6);
      }

      /* Theme Support */
      .upsell-weekly-v-list { overflow-y: auto; padding: 0 24px 24px 24px; max-height: 400px; }
      .upsell-weekly-h-content { width: 800px; max-width: calc(100vw - 120px); border-radius: 20px; }
      .upsell-weekly-h-grid { display: flex; gap: 16px; padding: 0 24px 24px 24px; overflow-x: auto; }

      /* Product Cards */
      .upsell-weekly-item {
        background: #f8f9fa; border-radius: 12px; border: 1px solid transparent;
        transition: all 0.3s ease; text-decoration: none; display: flex;
      }
      .upsell-weekly-item:hover { background: white; border-color: #e1e5e9; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
      
      .upsell-weekly-v-item { padding: 16px; margin-bottom: 12px; align-items: center; width: 100%; }
      .upsell-weekly-h-item { flex-direction: column; width: 170px; flex-shrink: 0; overflow: hidden; }

      .upsell-weekly-img { object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
      .upsell-weekly-v-img { width: 60px; height: 60px; }
      .upsell-weekly-h-img { width: 100%; height: 180px; }

      .upsell-weekly-detail { flex: 1; margin-left: 16px; display: flex; flex-direction: column; }
      .upsell-weekly-name { color: #333; font-weight: 600; font-size: 14px; margin-bottom: 8px; }
      .upsell-weekly-price { font-weight: 700; font-size: 16px; color: ${l}; }

      /* Responsive */
      @media (max-width: 600px) {
        .upsell-weekly-button { width: 65px; height: 65px; font-size: 9px; bottom: 75px; }
        .upsell-weekly-modal-content { width: 340px; bottom: 135px; }
        .upsell-weekly-h-content { width: calc(100vw - 40px); left: 20px !important; right: 20px !important; }
        .upsell-weekly-h-item { width: 130px; }
      }
    `,document.head.appendChild(M)},[l]),ti(b,()=>o(!1)),V.useEffect(()=>{r&&o(!0)},[r]),V.useEffect(()=>{async function M(){f(!0);try{const R=await Be.get("https://api.upsell.co/RecommendedProducts");x({title:R.data.data.title,contentTitle:R.data.data.contentTitle,position:R.data.data.position,theme:R.data.data.theme||1}),g(R.data.data.products)}catch{}finally{f(!1)}}M()},[]),!h||h.length===0||c)return null;const j=w.position===1,E=j?{left:"50px",transformOrigin:"bottom left"}:{right:"50px",transformOrigin:"bottom right"};return p.jsxs("div",{className:"upsell-weekly-wrapper",children:[!r&&p.jsx("button",{className:"upsell-weekly-button",style:{left:j?"50px":"auto",right:j?"auto":"50px"},onClick:()=>o(!0),children:w.title}),p.jsx("div",{className:"upsell-weekly-modal",style:{display:u?"block":"none"},children:p.jsxs("div",{ref:b,className:`upsell-weekly-modal-content ${w.theme===2?"upsell-weekly-h-content":""}`,style:E,children:[p.jsx("button",{className:"upsell-weekly-close",onClick:()=>o(!1),children:p.jsx("span",{children:"×"})}),p.jsxs("div",{className:"upsell-weekly-heading",style:{color:l},children:[w.contentTitle," ✨"]}),w.theme===2?p.jsx("div",{className:"upsell-weekly-h-grid",children:h.map(M=>p.jsxs("a",{href:`${M.productUrl}?utm_source=upsell&utm_medium=widget&utm_campaign=weekly-products`,className:"upsell-weekly-item upsell-weekly-h-item",children:[p.jsx("img",{src:M.imageUrl,alt:M.title,className:"upsell-weekly-img upsell-weekly-h-img"}),p.jsxs("div",{className:"upsell-weekly-detail",style:{margin:"10px"},children:[p.jsx("div",{className:"upsell-weekly-name",style:{minHeight:"38px"},children:M.title}),p.jsxs("div",{className:"upsell-weekly-price",children:[M.price," TL"]})]})]},M.productId))}):p.jsx("div",{className:"upsell-weekly-v-list",children:h.map(M=>p.jsxs("a",{href:`${M.productUrl}?utm_source=upsell&utm_medium=widget&utm_campaign=weekly-products`,className:"upsell-weekly-item upsell-weekly-v-item",children:[p.jsx("img",{src:M.imageUrl,alt:M.title,className:"upsell-weekly-img upsell-weekly-v-img"}),p.jsxs("div",{className:"upsell-weekly-detail",children:[p.jsx("div",{className:"upsell-weekly-name",children:M.title}),p.jsxs("div",{className:"upsell-weekly-price",children:[M.price," TL"]})]})]},M.productId))}),p.jsxs("a",{href:"https://upsell.co/",target:"_blank",style:{display:"flex",justifyContent:"center",padding:"16px",borderTop:"1px solid #eee",textDecoration:"none",color:"#666",fontSize:"12px"},children:[p.jsxs("svg",{style:{height:"20px",marginRight:"8px"},viewBox:"0 0 368.41 140.39",children:[p.jsx("path",{fill:l,d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),p.jsx("rect",{fill:l,x:"320.84",width:"18.75",height:"111.3"}),p.jsx("rect",{fill:l,x:"349.65",width:"18.75",height:"111.3"}),p.jsx("path",{fill:l,d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),p.jsx("path",{fill:l,d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]}),"tarafından geliştirilmiştir."]})]})})]})};var vf=p1();const tb=l=>{const[r,u]=V.useState([]),[o,c]=V.useState(!0),f=V.useRef(null),h=V.useRef(null),[g,w]=V.useState(!1);V.useEffect(()=>{const E=document.querySelector(".categoryContainer");if(E){let M=document.querySelector("#upsell-ss-featured-products-responsive");if(!M){const R=document.createElement("div");R.id="upsell-ss-featured-products-responsive",R.className="ticiContainer categoryContainer",E.before(R),M=R}h.current=M}else h.current=document.querySelector("#upsell-ss-featured-products-responsive");h.current&&w(!0)},[]),V.useEffect(()=>{async function E(){if(!document.body.classList.contains("CategoryBody")){c(!1);return}try{const M=window.globalModel;if(!M?.breadCrumb?.id){c(!1);return}const R=M.breadCrumb.id,B=window.location.origin,X=(await(await fetch(`${B}/api/product/GetProductList?c=trtry0000&FilterJson={"CategoryIdList":[${R}]}&PagingJson={"PageItemCount":15,"PageNumber":1,"OrderBy":"SATISADEDI","OrderDirection":"DESC"}&CreateFilter=false&TransitionOrder=0&PageType=1`)).json()).products?.filter(K=>K.inStock)?.slice(0,15)||[];u(X)}catch(M){console.error("Ürün yükleme hatası:",M)}finally{c(!1)}}g&&E()},[g]),V.useEffect(()=>{if(r.length>0&&f.current){const E=window.$;if(E){const M=E(f.current);M.hasClass("owl-loaded")&&M.trigger("destroy.owl.carousel"),M.owlCarousel({loop:!0,autoplay:!0,autoplayTimeout:8e3,autoplayHoverPause:!0,autoplaySpeed:800,nav:!1,dots:!1,lazyLoad:!1,margin:15,responsive:{0:{items:2,margin:10},576:{items:3,margin:10},768:{items:4},992:{items:5},1200:{items:6},1600:{items:7}}})}}},[r]);const x=E=>{E.preventDefault(),E.stopPropagation();const M=window.$;M&&f.current&&M(f.current).trigger("prev.owl.carousel")},b=E=>{E.preventDefault(),E.stopPropagation();const M=window.$;M&&f.current&&M(f.current).trigger("next.owl.carousel")},j=E=>{const M=E.discountRate>0,B=`${E.url}?utm_source=upsell&utm_medium=widget&utm_campaign=category-products`;return p.jsxs("div",{className:"upsell-bscard",children:[p.jsxs("div",{className:"upsell-bsimage-wrapper",children:[p.jsx("a",{href:B,title:E.name,children:p.jsx("img",{src:E.imageThumbPath,alt:E.imageAltTag,style:{width:"100%",height:"100%",objectFit:"cover"}})}),M&&p.jsxs("div",{className:"upsell-bsdiscount-badge",children:["%",E.discountRate]})]}),p.jsxs("div",{className:"upsell-bsdetails",children:[p.jsx("h3",{className:"upsell-bstitle",children:p.jsx("a",{href:B,children:E.name})}),p.jsx("div",{className:"upsell-bsprice-row",children:M?p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"upsell-bsold-price",children:E.productSellPriceStr}),p.jsx("div",{className:"upsell-bsnew-price",children:E.productPriceOriginalStr})]}):p.jsx("div",{className:"upsell-bsnew-price",children:E.productSellPriceStr})})]})]},E.productId)};return!document.body.classList.contains("CategoryBody")||!g||!h.current||o||r.length===0?null:vf.createPortal(p.jsxs("div",{className:"upsell-bswidget-container",children:[p.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .upsell-bswidget-container {
          padding: 10px 25px;
          background: transparent;
        }
        
        .upsell-bshead-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          padding: 0 5px;
        }

        .upsell-bsheading {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .upsell-bsheading svg { color: #ffb100; }

        .upsell-bscustom-nav {
          display: flex;
          gap: 10px;
        }

        .upsell-bsnav-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid #e5e5e5;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #333;
          transition: all 0.2s ease;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          user-select: none;
        }

        .upsell-bsnav-btn:hover {
          background: #1a1a1a;
          color: #fff;
          border-color: #1a1a1a;
        }
        
        .upsell-bsnav-btn:active {
           transform: scale(0.95);
        }

        .upsell-bsnav-btn svg {
          width: 18px;
          height: 18px;
        }

        .upsell-bscard {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .upsell-bscard:hover {
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transform: translateY(-5px);
          border-color: transparent;
        }

        .upsell-bsimage-wrapper {
          position: relative;
          aspect-ratio: 2 / 3;
          overflow: hidden;
          background: #f9f9f9;
        }

        .upsell-bsimage-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .upsell-bscard:hover .upsell-bsimage-wrapper img {
          transform: scale(1.05);
        }

        .upsell-bsdiscount-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #d32f2f;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          padding: 3px 6px;
          border-radius: 4px;
        }

        .upsell-bsdetails {
          padding: 12px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .upsell-bstitle {
          font-size: 13px;
          font-weight: 500;
          margin: 0 0 8px 0;
          line-height: 1.4;
          height: 38px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        
        .upsell-bstitle a { color: #333; text-decoration: none; transition: color 0.2s; }
        .upsell-bstitle a:hover { color: #000; }

        .upsell-bsprice-row {
          margin-top: auto;
          margin-bottom: 10px;
          display: flex;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 6px;
        }

        .upsell-bsold-price {
          font-size: 12px;
          color: #999;
          text-decoration: line-through;
        }

        .upsell-bsnew-price {
          font-size: 16px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .upsell-bsadd-cart {
          width: 100%;
          background: #1a1a1a;
          color: #fff !important;
          border: none;
          padding: 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-decoration: none;
          transition: background 0.2s;
        }

        .upsell-bsadd-cart:hover {
          background: #000;
          color: #fff;
        }

        @media (max-width: 768px) {
          .upsell-bswidget-container {padding: 5px 10px;}
          .upsell-bsheading { font-size: 18px; } 
          .upsell-bstitle { font-size: 11px; height: 32px; margin-bottom: 4px; }
           .upsell-bsnew-price { font-size: 14px; }
           .upsell-bsold-price { font-size: 11px; }
           .upsell-bsadd-cart span { display: none; }
           .upsell-bsadd-cart { padding: 6px; }
           .upsell-bsnav-btn { width: 30px; height: 30px; }
           .upsell-bsimage-wrapper { aspect-ratio: 3 / 4; }
           .upsell-bsdetails { padding: 8px; }
           .upsell-bsprice-row { margin-bottom: 6px; }
        }
      `}}),p.jsxs("div",{className:"upsell-bshead-wrap",children:[p.jsx("h2",{className:"upsell-bsheading",children:"Kategorinin En Çok Satanları"}),p.jsxs("div",{className:"upsell-bscustom-nav",children:[p.jsx("button",{type:"button",className:"upsell-bsnav-btn",onClick:x,"aria-label":"Önceki",children:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:p.jsx("polyline",{points:"15 18 9 12 15 6"})})}),p.jsx("button",{type:"button",className:"upsell-bsnav-btn",onClick:b,"aria-label":"Sonraki",children:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:p.jsx("polyline",{points:"9 18 15 12 9 6"})})})]})]}),p.jsx("div",{ref:f,className:"owl-carousel owl-theme",children:r.map(E=>j(E))})]}),h.current)},nb=ue.div`
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
`,lb=ue.div`
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
      ${l=>l.mainColor||"#e7333c"}88 20%,
      ${l=>l.mainColor||"#e7333c"} 40%,
      ${l=>l.mainColor||"#e7333c"} 60%,
      ${l=>l.mainColor||"#e7333c"}88 80%,
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
`,ab=ue.div`
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
`,n1=ue.div`
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
`,ib=ue.div`
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
      ${l=>l.mainColor||"#e7333c"}88 20%,
      ${l=>l.mainColor||"#e7333c"} 40%,
      ${l=>l.mainColor||"#e7333c"} 60%,
      ${l=>l.mainColor||"#e7333c"}88 80%,
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
`,l1=ue.div`
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
`,rb=ue.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background: #ffffff;
  text-align: center;
  overflow: hidden;
  position: relative;
  z-index: 10;
`,a1=ue.select`
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
    border-color: ${l=>l.mainColor||"#e7333c"};
    background: white;
    box-shadow: 0 0 0 3px ${l=>l.mainColor?`${l.mainColor}20`:"rgba(231, 51, 60, 0.1)"};
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
`,i1=ue.div`
  position: absolute;
  top: -2px;
  right: 12px;
  padding: 4px 8px;
  text-align: center;
  font-weight: 600;
  background: ${l=>l.mainColor||"#e7333c"};
  color: white;
  border-radius: 4px;
  font-size: 12px;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 11px;
    padding: 3px 6px;
  }
`,r1=ue.p`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: left;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Bc=ue.div`
  width: 100%;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  color: ${l=>l.isSecondary?l.mainColor||"#e7333c":"white"};
  background: ${l=>l.isSecondary?"white":`linear-gradient(135deg, ${l.mainColor||"#e7333c"}, ${l.mainColor?`${l.mainColor}dd`:"#d12b35"})`};
  border: ${l=>l.isSecondary?`2px solid ${l.mainColor||"#e7333c"}`:"none"};
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
    box-shadow: 0 8px 25px ${l=>l.mainColor?`${l.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
    ${l=>l.isSecondary&&`
      background: ${l.mainColor||"#e7333c"};
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
`,sb=ue.p`
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
`,s1=ue.div`
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
`,u1=ue.div`
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
`,o1=ue.div`
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
`,ub=Rl`   
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`,ob=ue.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${ub} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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
`,cb=({useOneChartForAllProducts:l,forceOpen:r,mainColor:u})=>{const o=V.useRef(null),[c,f]=V.useState(r||!1),[h,g]=V.useState(!1),[w,x]=V.useState(!1),[b,j]=V.useState(0),[E,M]=V.useState(0),[R,B]=V.useState(),[C,J]=V.useState(),[X,K]=V.useState(),[re,L]=V.useState(),[I,Q]=V.useState(!1),[ie,be]=V.useState();V.useEffect(()=>{if(g(!0),typeof window<"u"){let F="-1";!l&&window.productDetailModel?.product?.urunKartiId?F=window.productDetailModel.product.urunKartiId.toString():l||(F="1"),Be.get(`https://api.upsell.co/sizechart/byproductcard/${F}`).then(ae=>{ae.data&&ae.data.data&&ae.data.data.items?be(ae.data.data.items):be([{chartId:1,id:"1",maxHeight:170,maxWeight:70,minHeight:160,minWeight:50,title:"S"},{chartId:1,id:"2",maxHeight:180,maxWeight:80,minHeight:170,minWeight:65,title:"M"},{chartId:1,id:"3",maxHeight:190,maxWeight:90,minHeight:180,minWeight:75,title:"L"},{chartId:1,id:"4",maxHeight:200,maxWeight:100,minHeight:190,minWeight:85,title:"XL"}])}).catch(ae=>{be([{chartId:1,id:"1",maxHeight:170,maxWeight:70,minHeight:160,minWeight:50,title:"S"},{chartId:1,id:"2",maxHeight:180,maxWeight:80,minHeight:170,minWeight:65,title:"M"},{chartId:1,id:"3",maxHeight:190,maxWeight:90,minHeight:180,minWeight:75,title:"L"},{chartId:1,id:"4",maxHeight:200,maxWeight:100,minHeight:190,minWeight:85,title:"XL"}])}).finally(()=>{g(!1)})}},[l]);const Ge=()=>{f(!1),Q(!1),x(!1),M(0),j(0)};o!==null&&ti(o,Ge),V.useEffect(()=>(r?f(!0):typeof window<"u"&&(document.getElementById("upsell-ss-sizechart")?.addEventListener("click",()=>{f(!0)}),document.getElementById("upsell-ss-sizechart")&&!ie?.filter(F=>window.productDetailModel?.productVariantData?.find(ae=>ae.tanim===F.title))?document.getElementById("upsell-ss-sizechart").style.display="none":document.getElementById("upsell-ss-sizechart")&&(document.getElementById("upsell-ss-sizechart").style.display="flex")),()=>{document.getElementById("upsell-ss-sizechart")?.removeEventListener("click",()=>{})}),[ie]);const ke=()=>{const F=[];return typeof window<"u"&&ie?.filter(ae=>ae.minHeight<=E&&ae.maxHeight>=E&&ae.minWeight<=b&&ae.maxWeight>=b).forEach(ae=>{const ge=(window.productDetailModel?.productVariantData||[{tanim:"S"},{tanim:"M"},{tanim:"L"},{tanim:"XL"}]).find(T=>ae.title===T.tanim);ge&&F.push(ge)}),F};return V.useEffect(()=>{ke()},[E,b]),V.useEffect(()=>{if(ie&&ie?.length>0){const F=ie?.reduce((T,G)=>G.minHeight<T.minHeight?G:T,ie?.[0]),ae=ie?.reduce((T,G)=>G.maxHeight>T.maxHeight?G:T,ie?.[0]),ve=ie?.reduce((T,G)=>G.minWeight<T.minWeight?G:T,ie?.[0]),ge=ie?.reduce((T,G)=>G.maxWeight>T.maxWeight?G:T,ie?.[0]);B(F),J(ae),K(ve),L(ge)}},[ie]),typeof window>"u"?null:p.jsx(p.Fragment,{children:p.jsxs(nb,{style:{display:!w&&!c?"none":"block"},children:[w&&p.jsxs(lb,{mainColor:u,children:[p.jsx(ab,{onClick:()=>{x(!1)},children:p.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:p.jsx("path",{d:"m12 4-8 8 8 8 .677-.677-6.844-6.844H20v-.958H5.833l6.844-6.844L12 4Z"})})}),p.jsx(n1,{onClick:()=>{Ge()},children:p.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:p.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),p.jsxs(o1,{children:[p.jsx(bm,{mainColor:u,children:"Beden Öneri Rehberi"}),p.jsx(vm,{mainColor:u,children:"Sizin için en uygun beden:"}),p.jsx(sb,{children:ke().length>0?p.jsxs(s1,{children:[p.jsx("img",{style:{width:"100%",aspectRatio:"8/12",objectFit:"cover"},src:window.productDetailModel?.productImages?.[0]?.imagePath||"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDIwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik02MCA5MEg2NVY5NUg2MFY5MFpNMTQwIDkwSDE0NVY5NUgxNDBWOTBaIiBmaWxsPSIjOEE5MUE4Ii8+CjxwYXRoIGQ9Ik01NSA4MEgxNTBWMjIwSDU1VjgwWiIgc3Ryb2tlPSIjOEE5MUE4IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz4KPHN2Zz4K",alt:"Ürün Resmi"}),p.jsxs(u1,{children:[p.jsx("span",{children:"SİZİN BEDENİNİZ OLABİLİR"}),ke()[0]?.tanim||"Bulunamadı"]})]}):p.jsxs(s1,{children:[p.jsx("div",{style:{width:"100%",aspectRatio:"8/12",display:"flex",justifyContent:"center",alignItems:"center"},children:p.jsx("svg",{style:{width:"100px"},viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"#e7333c",children:p.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),p.jsxs(u1,{children:[p.jsx("span",{children:"ÖNERİ YAPILAMADI"}),"Üzgünüz,bu özellikler için beden öneremiyoruz."]})]})})]}),p.jsxs(l1,{children:[p.jsx(Bc,{mainColor:u,onClick:()=>{x(!1),M(0),j(0),Q(!1)},children:"Baştan Başla"}),p.jsx(Bc,{mainColor:u,isSecondary:!0,onClick:()=>{Ge()},children:"Çıkış Yap"})]})]}),c&&!w&&p.jsxs(ib,{ref:o,mainColor:u,children:[h&&p.jsx(du,{children:p.jsxs(ob,{children:[p.jsx("div",{}),p.jsx("div",{}),p.jsx("div",{}),p.jsx("div",{}),p.jsx("div",{}),p.jsx("div",{}),p.jsx("div",{}),p.jsx("div",{})]})}),!w&&p.jsxs(p.Fragment,{children:[p.jsx(n1,{onClick:()=>{Ge()},children:p.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:p.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),p.jsxs(rb,{children:[p.jsxs(o1,{children:[p.jsx(Wa,{mainColor:u,children:"Beden Öneri Rehberi"}),p.jsx(fu,{children:"Ölçülerinizi baz alarak size en uygun bedeni hesaplıyoruz."}),C&&R&&re&&X&&p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[p.jsxs("div",{children:[p.jsx(r1,{children:"Boyunuzu Girin"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx(i1,{mainColor:u,children:"CM"}),p.jsxs(a1,{mainColor:u,onChange:F=>{M(Number(F.target.value))},name:"height",id:"height",children:[p.jsx("option",{value:"0",children:"Seçiniz"}),Array.from({length:C?.maxHeight+1-R?.minHeight},(F,ae)=>(R?.minHeight+ae).toString()).map(F=>p.jsxs("option",{value:F,children:[F," cm"]},F))]})]}),E===0&&I&&p.jsx(Kt,{children:p.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Lütfen bir boyunuzu giriniz."})})]}),p.jsxs("div",{children:[p.jsx(r1,{children:"Kilonuzu Girin"}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx(i1,{mainColor:u,children:"KG"}),p.jsxs(a1,{mainColor:u,onChange:F=>{j(Number(F.target.value))},name:"weight",id:"weight",children:[p.jsx("option",{value:"0",children:"Seçiniz"}),Array.from({length:re.maxWeight+1-X.minWeight},(F,ae)=>(X.minWeight+ae).toString()).map(F=>p.jsxs("option",{value:F,children:[F," kg"]},F))]})]}),!b&&I&&p.jsx(Kt,{children:p.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Lütfen kilonuzu giriniz"})})]})]})]}),p.jsxs(l1,{children:[p.jsx(Bc,{mainColor:u,onClick:()=>{Q(!0),E&&b&&b!==0&&E!==0&&x(!0)},children:"Devam Et"}),p.jsxs(yf,{target:"_blank",href:"https://upsell.co/",children:[p.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[p.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),p.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),p.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),p.jsxs("g",{children:[p.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),p.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})]})]})]})]})})},fb=Rl`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,db=Rl`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,pb=ue.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${db} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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
`,hb=ue.div`
  margin: auto;
  background: white;
  border-radius: 20px;
  width: 85%;
  max-width: 450px;
  overflow: hidden;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.15),
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
      ${l=>l.mainColor||"#e7333c"}dd 90deg,
      ${l=>l.mainColor||"#e7333c"} 110deg,
      ${l=>l.mainColor||"#e7333c"} 120deg,
      ${l=>l.mainColor||"#e7333c"} 130deg,
      ${l=>l.mainColor||"#e7333c"}dd 150deg,
      transparent 180deg,
      transparent 360deg
    );
    border-radius: 24px;
    z-index: -1;
    animation: ${fb} 8s linear infinite;
    opacity: ${l=>l.mainColor?"1":"0.8"};
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
`,mb=({color:l})=>{const[r,u]=V.useState(null),[o,c]=V.useState(!1),[f,h]=V.useState(!1),[g,w]=V.useState(!1),x=V.useRef(null);V.useEffect(()=>{x.current=document.querySelector("#upsell-ss-responsive"),w(!0)},[]);const{register:b,handleSubmit:j,formState:{errors:E}}=xr(),M=j(async B=>{h(!0),c(!1),u(null);try{const J=(await Be.post("https://api.upsell.co/ticimax/order",{phone:"90"+B.phone})).data;!J.data||J.data===null?c(!0):u(J.data)}catch{c(!0)}finally{h(!1)}}),R=()=>{u(null),c(!1)};return g&&x.current?vf.createPortal(p.jsx(hb,{mainColor:l,children:p.jsxs(bf,{children:[f&&p.jsx(du,{children:p.jsx(pb,{children:Array.from({length:8}).map((B,C)=>p.jsx("div",{},C))})}),r?p.jsxs(fr,{children:[p.jsx(Wa,{mainColor:l,children:"Sipariş Durumunu Sorgula"}),p.jsxs(yn,{children:[p.jsx("div",{style:{width:"50%"},children:"Sipariş No"}),p.jsx("div",{style:{width:"50%"},children:r.siparisNo||"-"})]}),p.jsxs(yn,{children:[p.jsx("div",{style:{width:"50%"},children:"Sipariş Tarihi"}),p.jsx("div",{style:{width:"50%"},children:new Date(r.siparisTarihi).toLocaleDateString("tr-TR")||"-"})]}),p.jsxs(yn,{children:[p.jsx("div",{style:{width:"50%"},children:"Sipariş Durumu"}),p.jsx("div",{style:{width:"50%"},children:r.siparisDurumu||"-"})]}),p.jsxs(yn,{children:[p.jsx("div",{style:{width:"50%"},children:"Kargo Takip Link"}),p.jsx("div",{style:{width:"50%"},children:r.kargoTakipLink?p.jsx("a",{target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:l||"#e7333c"},href:r.kargoTakipLink,children:"Kargoyu Görüntüle"}):"-"})]}),p.jsxs(yn,{children:[p.jsx("div",{style:{width:"50%"},children:"Kargo Takip No"}),p.jsx("div",{style:{width:"50%"},children:r.kargoTakipNo||"-"})]}),p.jsxs(yn,{children:[p.jsx("div",{style:{width:"50%"},children:"Kargo Firma"}),p.jsx("div",{style:{width:"50%"},children:r.kargoFirmaTanim||"-"})]}),p.jsx("div",{children:p.jsx(Ws,{mainColor:l,onClick:R,type:"button",children:"Yeni Sorgu Yap"})})]}):p.jsxs(fr,{children:[p.jsx(Wa,{mainColor:l,children:"Sipariş Durumunu Sorgula"}),p.jsx(fu,{children:"Siparişinizin kargo takibini yapmak için telefon numaranızı giriniz."}),p.jsxs("form",{onSubmit:M,children:[p.jsx(Za,{mainColor:l,type:"tel",onInput:B=>{B.currentTarget.value=B.currentTarget.value.replace(/[^0-9]/g,"")},...b("phone",{required:"Telefon numarası boş bırakılamaz",pattern:{value:/^5[0-9]{9}$/,message:"Telefon numarası 5 ile başlamalı ve 10 haneli olmalıdır"},validate:B=>/^(\d)\1+$/.test(B)||/^5(\d)\1{8}$/.test(B)||B==="5123456789"||B==="5987654321"?"Geçersiz telefon numarası":!0}),placeholder:"5XXXXXXXXX",maxLength:10}),E.phone&&p.jsx(Kt,{children:p.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:E.phone.message})}),p.jsxs(gf,{children:[p.jsx(xf,{mainColor:l,...b("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),p.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",p.jsx("a",{style:{color:l||"#e7333c",textDecoration:"underline",fontWeight:"500"},href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",rel:"noopener noreferrer",children:"Aydınlatma metni için tıklayın."})]})]}),E.kvkk&&p.jsx(Kt,{children:p.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center",marginBottom:"10px"},children:E.kvkk.message})}),o&&p.jsx(Kt,{children:p.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Telefon numarası ile eşleşen sipariş bulunamadı."})}),p.jsx("div",{children:p.jsx(Ws,{mainColor:l,children:"Sorgula"})})]})]})]})}),x.current):null},gb=Rl`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,xb=ue.button`
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
`,yb=ue.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 12px 16px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 12px 12px 10px 12px;
  }
`;ue.img`
  aspect-ratio: 5/2;
  height: 70px;
  margin: auto;
  object-fit: contain;
  margin-top: 20px;
`;const c1=ue.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${l=>l.mainColor||"#333"};
  margin: 0 0 8px 0;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 6px 0;
  }
`;ue.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 32px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`;const bb=ue.input`
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
    border-color: ${l=>l.mainColor||"#e7333c"};
    background: white;
    box-shadow: 0 0 0 3px
      ${l=>l.mainColor?`${l.mainColor}20`:"rgba(231, 51, 60, 0.1)"};
  }

  &:hover {
    border-color: #d1d5db;
    background: white;
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 15px;
  }
`,Hc=ue.div`
  color: #e40000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`,vb=ue.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 20px 0;
  text-align: left;
`,Sb=ue.input`
  width: 20px;
  height: 20px;
  min-width: 20px;
  margin: 0;
  cursor: pointer;
  accent-color: ${l=>l.mainColor||"#e7333c"};

  &:focus {
    outline: 2px solid
      ${l=>l.mainColor?`${l.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
    outline-offset: 2px;
  }
`,wb=ue.button`
  width: 100%;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  background: linear-gradient(
    135deg,
    ${l=>l.mainColor||"#e7333c"},
    ${l=>l.mainColor?`${l.mainColor}dd`:"#d12b35"}
  );
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 4px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px
      ${l=>l.mainColor?`${l.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
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
`;ue.div`
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
`;const Eb=ue.a`
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
`,Ab=ue.div`
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
`,Tb=ue.h1`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin: 16px 0;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    ${l=>l.mainColor||"#28a745"},
    ${l=>l.mainColor?`${l.mainColor}dd`:"#1e7e34"}
  );
  padding: 12px 20px;
  text-align: center;
  box-shadow: 0 4px 15px
    ${l=>l.mainColor?`${l.mainColor}40`:"rgba(40, 167, 69, 0.3)"};
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
`,f1=ue.p`
  text-align: center;
  font-size: 15px;
  line-height: 1.6;
  color: #333;
  width: 100%;
  margin: 8px auto 16px;
  font-weight: 500;
`,zb=ue.div`
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
`,jb=ue.div`
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
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.15),
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
      ${l=>l.mainColor}dd 90deg,
      ${l=>l.mainColor} 110deg,
      ${l=>l.mainColor} 120deg,
      ${l=>l.mainColor} 130deg,
      ${l=>l.mainColor}dd 150deg,
      transparent 180deg,
      transparent 360deg
    );
    border-radius: 20px;
    z-index: -1;
    animation: ${gb} 8s linear infinite;
    opacity: ${l=>l.mainColor?"1":"0"};
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
`,Ob=ue.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 10px 16px 30px 16px;
  border-radius: 240px 240px 8px 8px;
`;ue.div`
  display: flex;
  width: 100%;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 468px) {
    flex-direction: column;
    gap: 0;
  }
`;const _b=ue.div`
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
`,Db=ue.button`
  background: linear-gradient(
    135deg,
    ${l=>l.mainColor||"#28a745"},
    ${l=>l.mainColor?`${l.mainColor}dd`:"#1e7e34"}
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
      ${l=>l.mainColor?`${l.mainColor}40`:"rgba(40, 167, 69, 0.4)"};
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
`,Rb=ue.button`
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 180px;
  background: linear-gradient(
    135deg,
    ${l=>l.mainColor||"#e7333c"},
    ${l=>l.mainColor?`${l.mainColor}dd`:"#d12b35"}
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
      ${l=>l.mainColor||"#e7333c"}40,
      transparent,
      ${l=>l.mainColor||"#e7333c"}40
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
      box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.15),
        0 0 0 0 ${l=>l.mainColor||"#e7333c"}40;
    }
    70% {
      box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.15),
        0 0 0 10px transparent;
    }
    100% {
      box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.15),
        0 0 0 0 transparent;
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
`,kb=ue.span`
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
`,Nb=({mainColor:l,logo:r,forceOpen:u,showFloatingButton:o=!0})=>{const[c,f]=V.useState(u||!1),[h,g]=V.useState(null),[w,x]=V.useState(""),[b,j]=V.useState(!1),[E,M]=V.useState([]),[R,B]=V.useState(0),[C,J]=V.useState(null),[X,K]=V.useState(!1),[re,L]=V.useState(0),[I,Q]=V.useState(!1),[ie,be]=V.useState(null),[Ge,ke]=V.useState(!1),[F,ae]=V.useState(!0),[ve,ge]=V.useState(null),T=V.useRef(null),{register:G,handleSubmit:ee,formState:{errors:pe}}=xr(),S=()=>{f(!1);const he=new Date;he.setDate(he.getDate()+Number(re));const xe="expires="+he.toUTCString();document.cookie=`upsellGiftWheel=false;${xe};path=/`},q=()=>{const he=localStorage.getItem("upsellGiftWheelPrize");if(!he)return!0;try{const xe=JSON.parse(he);if(!xe.timestamp)return!0;const Le=Date.now(),He=xe.timestamp,gt=24*60*60*1e3;return Le-He>gt}catch{return!0}},P=()=>q()?(localStorage.removeItem("upsellGiftWheelPrize"),g(null),ge(null),!0):!1,ne=async()=>{if(ae(!1),x(""),P(),(h||ve)&&!q()){j(!0),f(!0);return}const he=localStorage.getItem("upsellGiftWheelPrize");if(he&&!q())try{const xe=JSON.parse(he);ge(xe),g(xe),j(!0),f(!0);return}catch{localStorage.removeItem("upsellGiftWheelPrize")}j(!1),g(null),ge(null),f(!0),E.length===0?Ut():setTimeout(()=>{Ae()},50)};T!==null&&ti(T,()=>S());const Te=async he=>{try{await navigator.clipboard.writeText(he),ke(!0),setTimeout(()=>ke(!1),2e3)}catch{}},ce=(he,xe,Le,He)=>{const gt=He*Math.PI/180;return{x:he+Le*Math.cos(gt),y:xe+Le*Math.sin(gt)}},ze=(he,xe=4e3)=>{if(!C)return;const Le=Date.now(),He=R,gt=he,lt=1800,On=.985,It=10;let v=lt,O=He,H=Le;const le=()=>{const W=Date.now(),se=(W-H)/1e3;H=W,v*=Math.pow(On,se*60);const we=v*se;O+=we;const je=Math.min((W-Le)/xe,1),qt=1-Math.pow(1-je,3),Bt=Math.pow(je,2),il=O,bt=He+(gt-He)*qt,vn=il*(1-Bt)+bt*Bt;if(C.style.transform=`rotate(${vn}deg)`,v>500){const Ot=Math.min(v/200,3);C.style.filter=`blur(${Ot}px)`}else C.style.filter="none";if(je<1&&v>It){const Ot=requestAnimationFrame(le);be(Ot)}else C.style.transform=`rotate(${gt}deg)`,C.style.filter="none",B(gt),be(null),setTimeout(()=>{j(!0)},500)},te=requestAnimationFrame(le);be(te)},Ae=()=>{const he=document.querySelector(".sectors"),xe=document.querySelector(".gift-wheel-texts");if(!he||!xe){setTimeout(()=>{const Le=document.querySelector(".sectors"),He=document.querySelector(".gift-wheel-texts");Le&&He&&Xe(Le,He)},100);return}Xe(he,xe)},Xe=(he,xe)=>{he.innerHTML="",xe.innerHTML="";const Le=200,He=200,gt=170,lt=50,On=360/E.length;E.forEach((It,v)=>{const O=v*On,H=O+On,le=O+On/2,te=ce(Le,He,gt,H),W=ce(Le,He,gt,O),se=ce(Le,He,lt,H),we=ce(Le,He,lt,O),je=H-O<=180?0:1,Ze=`M${se.x},${se.y} L${te.x},${te.y} A${gt},${gt} 0 ${je} 0 ${W.x},${W.y} L${we.x},${we.y} A${lt},${lt} 0 ${je} 1 ${se.x},${se.y} Z`,qt=document.createElementNS("http://www.w3.org/2000/svg","path");qt.setAttribute("d",Ze);const Bt=It.color||(v%2===0?l||"#e7333c":"#ffffff");qt.setAttribute("fill",Bt),qt.setAttribute("stroke","#fff"),qt.setAttribute("stroke-width","10"),he.appendChild(qt);const il=(gt+lt)/2,bt=ce(Le,He,il,le),Ot=(_n=>{const Vt=_n.split(/\n/),un=[],la=On/360*2*Math.PI*il*.8,qn=Math.floor(la/9);return qn<=0?Vt:(Vt.forEach(vr=>{const pu=vr.split(/\s+/),Gt=[];let Ke="";pu.forEach(st=>{const Vn=Ke?`${Ke} ${st}`:st;if(st.length>qn){Ke&&(Gt.push(Ke),Ke="");for(let rl=0;rl<st.length;rl+=qn)Gt.push(st.substring(rl,rl+qn))}else Vn.length<=qn?Ke=Vn:(Ke&&Gt.push(Ke),Ke=st)}),Ke&&Gt.push(Ke),un.push(...Gt)}),un.length>0?un:[_n])})(It.text),vt=document.createElementNS("http://www.w3.org/2000/svg","text");vt.setAttribute("x",bt.x.toString()),vt.setAttribute("y",bt.y.toString()),vt.setAttribute("text-anchor","middle"),vt.setAttribute("dominant-baseline","middle"),vt.setAttribute("font-size","16"),vt.setAttribute("font-weight","700");const Ln=_n=>{const Vt=_n.replace("#",""),un=parseInt(Vt.substr(0,2),16),li=parseInt(Vt.substr(2,2),16),la=parseInt(Vt.substr(4,2),16);return(un*299+li*587+la*114)/1e3>128?"#000":"#fff"},na=It.color?Ln(It.color):v%2===0?"#fff":"#333";vt.setAttribute("fill",na),vt.setAttribute("transform",`rotate(${le} ${bt.x} ${bt.y})`);const ni=18,br=Ot.length>1?bt.y-(Ot.length-1)*ni/2:bt.y;Ot.forEach((_n,Vt)=>{const un=document.createElementNS("http://www.w3.org/2000/svg","tspan");un.setAttribute("x",bt.x.toString()),un.setAttribute("y",(br+Vt*ni).toString()),un.textContent=_n,vt.appendChild(un)}),xe.appendChild(vt)})},kt=ee(async he=>{X||I||(K(!0),Q(!0),x(""),await Be.post("https://api.upsell.co/GiftWheel/Spin",{phoneNumber:he.phone}).then(xe=>{const Le=xe.data;if(Le.success){const He=Le.data.sliceIndex;if(typeof He=="number"&&!isNaN(He)){const lt=360/E.length,v=((360-(He*lt+lt/2))%360+360)%360,O=R+360*5+v;C&&(ie&&(cancelAnimationFrame(ie),be(null)),C.style.transformOrigin="200px 200px",C.style.transition="none",C.style.webkitTransition="none",ze(O,4e3)),g(xe.data.data),ge(xe.data.data);const H={...xe.data.data,timestamp:Date.now()};localStorage.setItem("upsellGiftWheelPrize",JSON.stringify(H));const le=new Date;le.setDate(le.getDate()+re);const te="expires="+le.toUTCString();document.cookie=`upsellGiftWheel=true;${te};path=/`}else x("Sunucudan geçersiz veri alındı.")}else x(Le.message)}).catch(()=>{x("Bağlantı hatası oluştu. Lütfen tekrar deneyiniz.")}).finally(()=>{setTimeout(()=>{K(!1),Q(!1)},4500)}))}),Ut=async()=>{try{const xe=(await Be.post("https://api.upsell.co/GiftWheel/Slices",{})).data;xe.success?(M(xe.data.slices),L(xe.data.frequency)):x("Hediye çarkı yüklenemedi.")}catch{x("Bağlantı hatası oluştu. Lütfen tekrar deneyiniz.")}};return V.useEffect(()=>{Ut(),P()},[]),V.useEffect(()=>{E.length>0&&c&&setTimeout(()=>{Ae()},100)},[E,c]),V.useEffect(()=>{if(C&&!X&&!I){C.style.transition="transform 2s ease-in-out";const xe=setInterval(()=>{if(!X&&!I&&C){const Le=R+Math.sin(Date.now()/3e3)*.5;C.style.transform=`rotate(${Le}deg)`}},100);return()=>{clearInterval(xe),C&&(C.style.transition="none",C.style.transform=`rotate(${R}deg)`)}}},[C,X,I,R]),V.useEffect(()=>{if(u)(async()=>{P();const xe=localStorage.getItem("upsellGiftWheelPrize");if(xe&&!q()||(h||ve)&&!q()){if(xe&&!h&&!ve&&!q())try{const He=JSON.parse(xe);ge(He),g(He)}catch{localStorage.removeItem("upsellGiftWheelPrize"),j(!1),g(null),ge(null),f(!0);return}j(!0),f(!0)}else j(!1),g(null),ge(null),f(!0),E.length===0||setTimeout(()=>{Ae()},50)})();else if(typeof window<"u"){if(document.cookie.split(";").some(xe=>xe.trim().startsWith("upsellGiftWheel=")))return;const he=setTimeout(async()=>{P();const xe=localStorage.getItem("upsellGiftWheelPrize");if(xe&&!q()||(h||ve)&&!q()){if(xe&&!h&&!ve&&!q())try{const He=JSON.parse(xe);ge(He),g(He)}catch{localStorage.removeItem("upsellGiftWheelPrize");return}j(!0),f(!0)}else j(!1),g(null),ge(null),f(!0),E.length===0||setTimeout(()=>{Ae()},50)},6e4);return()=>{clearTimeout(he)}}},[u]),V.useEffect(()=>()=>{ie&&cancelAnimationFrame(ie)},[ie]),V.useEffect(()=>{if(typeof window<"u")if(document.cookie.split(";").some(xe=>xe.trim().startsWith("upsellGiftWheel=")))ae(!1);else{const xe=setTimeout(()=>{ae(!1)},1e4);return()=>clearTimeout(xe)}},[]),p.jsxs(p.Fragment,{children:[o&&!c&&p.jsxs(Rb,{mainColor:l,onClick:ne,className:F?"pulse":"","aria-label":"Hediye Çarkını Aç",children:[p.jsx(kb,{children:"HEDİYE ÇARKI"}),p.jsx("div",{className:"gift-icon",children:p.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[p.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),p.jsx("path",{d:"M12 2 L12 22 M2 12 L22 12",stroke:"currentColor",strokeWidth:"1",opacity:"0.7"}),p.jsx("path",{d:"M5.64 5.64 L18.36 18.36 M18.36 5.64 L5.64 18.36",stroke:"currentColor",strokeWidth:"1",opacity:"0.7"}),p.jsx("circle",{cx:"12",cy:"12",r:"3",fill:"currentColor"}),p.jsx("path",{d:"M12 2 L14 6 L10 6 Z",fill:"currentColor"})]})})]}),p.jsx(zb,{style:{display:c?"block":"none"},children:c&&p.jsxs(jb,{ref:T,mainColor:l,children:[p.jsx(xb,{onClick:S,children:p.jsx("span",{style:{color:"#000",float:"right",fontSize:"35px"},children:"×"})}),p.jsx(Ob,{children:p.jsxs(yb,{children:[p.jsx("div",{className:"gift-wheel",style:{marginBottom:"16px",position:"relative",display:b?"none":"flex",justifyContent:"center",cursor:X?"not-allowed":"pointer",transition:"all 0.3s ease",transform:X?"scale(1.02)":"scale(1)",minHeight:E.length===0?"320px":"auto",alignItems:"center"},children:E.length===0?p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px",color:"#666",fontSize:"16px"},children:[w?p.jsxs(p.Fragment,{children:[p.jsx("div",{style:{fontSize:"48px"},children:"⚠️"}),p.jsx("span",{style:{color:"#e40000",textAlign:"center"},children:w}),p.jsx("button",{onClick:()=>{x(""),Ut()},style:{padding:"8px 16px",background:l||"#e7333c",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"Tekrar Dene"})]}):p.jsxs(p.Fragment,{children:[p.jsx("div",{style:{width:"40px",height:"40px",border:`3px solid ${l||"#e7333c"}20`,borderTop:`3px solid ${l||"#e7333c"}`,borderRadius:"50%",animation:"spin 1s linear infinite"}}),p.jsx("span",{children:"Hediye çarkı yükleniyor..."})]}),p.jsx("style",{children:`
                        @keyframes spin {
                          0% { transform: rotate(0deg); }
                          100% { transform: rotate(360deg); }
                        }
                      `})]}):p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",style:{width:"min(320px, 90vw)",height:"min(320px, 90vw)",maxWidth:"100%",pointerEvents:X?"none":"auto",filter:"drop-shadow(0 8px 25px rgba(0,0,0,0.15))",transition:"filter 0.3s ease"},children:[p.jsx("circle",{cx:"200",cy:"200",r:"190",fill:"none",stroke:"rgba(0,0,0,0.1)",strokeWidth:"8"}),p.jsxs("g",{className:"wheel",ref:he=>J(he),id:"wheel",style:{transformOrigin:"200px 200px"},children:[p.jsx("g",{className:"sectors"}),p.jsx("g",{className:"gift-wheel-texts",style:{fill:"#fff",fontSize:"16px",fontWeight:700,textAnchor:"middle"}})]}),p.jsx("circle",{cx:"200",cy:"200",r:"180",fill:"none",stroke:l||"#e7333c",strokeWidth:"6"}),p.jsx("circle",{cx:"200",cy:"200",r:"170",fill:"none",stroke:"#ffffff",strokeWidth:"2"}),p.jsx("circle",{cx:"200",cy:"200",r:"45",fill:"#ffffff",stroke:l||"#e7333c",strokeWidth:"3"}),r&&p.jsx("image",{href:r,x:"170",y:"170",width:"60",height:"60",style:{objectFit:"contain"}}),p.jsx("g",{transform:"translate(200, 200)",children:p.jsx("g",{transform:"rotate(0) translate(185, 0)",children:p.jsx("polygon",{points:"-15,0 0,12 15,0 0,-12",fill:l||"#e7333c",stroke:"#ffffff",strokeWidth:"2",style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.3))"}})})})]})}),b&&p.jsxs(Ab,{children:[p.jsx(c1,{mainColor:l,children:"🎊 Tebrikler! Hediye Çarkından Kazandınız! 🎁"}),p.jsxs(Tb,{mainColor:l,children:[p.jsxs("strong",{children:[h.validDayCount," gün"]})," geçerli"," ",p.jsxs("strong",{children:[h.discountValue.toFixed(2),h.discountType===1?" TL":"%"]})," ","indirim kuponu kazandınız!"]}),Number(h.minCartAmount)>0&&p.jsxs(f1,{style:{marginTop:"8px",marginBottom:"8px",fontSize:"14px",color:"#666",fontWeight:600},children:["Minimum sepet tutarı:"," ",p.jsxs("strong",{style:{color:l||"#e7333c"},children:[Number(h.minCartAmount).toFixed(2)," TL"]})]}),p.jsx(f1,{children:"Kupon kodunuzu kopyalayın ve alışverişinizde kullanın"}),p.jsx(_b,{children:h.couponCode}),p.jsx(Db,{mainColor:l,className:Ge?"copied":"",onClick:()=>Te(h.couponCode),children:Ge?"Kopyalandı!":"Kodu Kopyala"})]}),!b&&p.jsxs(p.Fragment,{children:[p.jsx(c1,{mainColor:l,children:"Hediye Çarkı"}),p.jsxs("form",{style:{display:"flex",flexDirection:"column",width:"90%",margin:"0 auto"},onSubmit:he=>kt(he),children:[p.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[p.jsx(bb,{mainColor:l,type:"tel",onInput:he=>{he.currentTarget.value=he.currentTarget.value.replace(/[^0-9]/g,"")},...G("phone",{required:"Telefon boş bırakılamaz",pattern:{value:/^5[0-9]{9}$/,message:"Telefon numarası 5 ile başlamalı ve 10 haneli olmalıdır"},validate:he=>/^(\d)\1+$/.test(he)||/^5(\d)\1{8}$/.test(he)||he==="5123456789"||he==="5987654321"?"Geçersiz telefon numarası":!0}),placeholder:"5XXXXXXXXX",maxLength:10}),pe.phone&&p.jsx(Hc,{children:pe?.phone?.message?.toString()??null})]}),p.jsxs(vb,{children:[p.jsx(Sb,{mainColor:l,...G("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),p.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",p.jsx("a",{style:{color:l||"#e7333c",textDecoration:"underline",fontWeight:"500"},id:"kvkkLink",href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",children:"Aydınlatma metni için tıklayın"}),"."]})]}),pe.kvkk&&p.jsx(Hc,{children:pe?.kvkk?.message?.toString()??null}),w&&p.jsx(Hc,{children:w}),p.jsx("div",{style:{marginTop:"4px"},children:p.jsx(wb,{mainColor:l,disabled:X||I,style:{opacity:X||I?.6:1,cursor:X||I?"not-allowed":"pointer"},children:X?"Çark Dönüyor...":"Çarkı Çevir"})})]})]})]})}),p.jsxs(Eb,{target:"_blank",href:"https://upsell.co/",children:[p.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[p.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),p.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),p.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),p.jsxs("g",{children:[p.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),p.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})})]})},Cb=({mainColor:l,forceOpen:r})=>{const[u,o]=V.useState([]),[c,f]=V.useState(!1),[h,g]=V.useState(0),[w,x]=V.useState(r||!1),[b,j]=V.useState("50px"),[E,M]=V.useState(null),[R,B]=V.useState(null);return V.useEffect(()=>{if(document.getElementById("upsell-ps-styles"))return;const C=document.createElement("style");C.id="upsell-ps-styles",C.textContent=`
      @keyframes upsell-ps-glow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      @keyframes upsell-ps-fadeIn { from { opacity: 0; transform: translateY(10px) scale(0.9); } to { opacity: 1; transform: translateY(0) scale(1); } }
      @keyframes upsell-ps-fadeOut { from { opacity: 1; transform: translateY(0) scale(1); } to { opacity: 0; transform: translateY(-10px) scale(0.9); } }
      @keyframes upsell-ps-slideIn { 0% { opacity: 0; transform: translateY(10px) scale(0.95) translateZ(0); } 100% { opacity: 1; transform: translateY(0) scale(1) translateZ(0); } }

      .upsell-ps-wrapper {
        position: fixed; left: 50%; transform: translateX(-50%); overflow: hidden;
        width: 336px; background: white; border-radius: 13px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
        transition: bottom 0.3s ease-in-out; z-index: 1000; font-size: 11px;
      }
      .upsell-ps-wrapper::before {
        content: ""; position: absolute; top: -3px; left: -3px; right: -3px; bottom: -3px;
        background: conic-gradient(from 0deg, transparent 0deg, transparent 60deg, ${l}dd 90deg, ${l} 110deg, ${l} 120deg, ${l} 130deg, ${l}dd 150deg, transparent 180deg, transparent 360deg);
        border-radius: 15px; z-index: -1; animation: upsell-ps-glow 8s linear infinite; opacity: 0.8;
      }
      .upsell-ps-wrapper::after { content: ""; position: absolute; top: 1px; left: 1px; right: 1px; bottom: 1px; background: white; border-radius: 12px; z-index: -1; }

      .upsell-ps-item {
        display: flex; justify-content: center; align-items: center; padding: 13px 16px; font-size: 12px;
        position: relative; overflow: hidden; height: 48px; font-weight: 600;
        background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-radius: 13px; margin: 13px;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
      }

      .upsell-ps-text {
        position: absolute; opacity: 0; transform: translateY(10px) scale(0.9);
        transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        display: flex; align-items: center; gap: 10px; text-align: center; width: 100%; justify-content: center;
      }
      .upsell-ps-text.active { opacity: 1; transform: translateY(0) scale(1); animation: upsell-ps-slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
      .upsell-ps-text.previous { opacity: 0; transform: translateY(-10px) scale(0.9); animation: upsell-ps-fadeOut 0.6s ease-out; }

      .upsell-ps-text i {
        background: linear-gradient(135deg, ${l}, ${l}dd);
        border-radius: 6px; padding: 6px; color: white; font-size: 13px; min-width: 26px; height: 26px;
        display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px ${l}40;
      }

      @media (max-width: 767px) {
        .upsell-ps-wrapper { width: 256px; border-radius: 12px; }
        .upsell-ps-item { padding: 11px 13px; height: 44px; font-size: 11px; margin: 10px; border-radius: 10px; }
        .upsell-ps-text i { padding: 5px; font-size: 11px; min-width: 22px; height: 22px; }
      }
      @media (max-width: 480px) { .upsell-ps-wrapper { width: 224px; } .upsell-ps-item { padding: 10px 11px; height: 40px; font-size: 10px; margin: 8px; } }
    `,document.head.appendChild(C)},[l]),V.useEffect(()=>{if(!document.querySelector(".ProductBody")){x(!1);return}x(r||!0)},[r]),V.useEffect(()=>{async function C(){if(typeof window<"u"){let X=window.productDetailModel?.productId||"1";f(!0);try{const K=await Be.post("https://api.upsell.co/ProductStat/"+X,{},{headers:{"Content-Type":"application/json","Content-Length":"2"}});if(K.data?.data?.length>0)o(K.data.data);else throw new Error}catch{o([{text:"Son 24 saatte 15 kişi bu ürünü satın aldı",icon:"shopping-cart"},{text:"Bu ürünü 8 kişi favorilerine ekledi",icon:"heart"},{text:"Son 1 saatte 3 kişi bu ürünü görüntüledi",icon:"eye"},{text:"Bu ürün 12 kez sepete eklendi",icon:"plus-circle"}])}finally{f(!1)}}}C()},[]),V.useEffect(()=>{u.length>0&&E===null&&M(u[0])},[u,E]),V.useEffect(()=>{if(u.length>0){const C=setInterval(()=>{g(J=>(J+1)%u.length)},4e3);return()=>clearInterval(C)}},[u]),V.useEffect(()=>{if(u.length>0){B(E),M(u[h]);const C=setTimeout(()=>B(null),500);return()=>clearTimeout(C)}},[h,u]),V.useEffect(()=>{const C=()=>{const J=window.innerWidth<=768,X=J?"80px":"50px",K=J?"155px":"125px";j(window.scrollY>1e3?K:X)};return C(),window.addEventListener("scroll",C),window.addEventListener("resize",C),()=>{window.removeEventListener("scroll",C),window.removeEventListener("resize",C)}},[]),c||u.length===0?null:p.jsx("div",{className:"upsell-ps-wrapper",style:{bottom:w?b:"-300px",color:l},children:p.jsxs("div",{className:"upsell-ps-item",children:[R&&p.jsxs("div",{className:"upsell-ps-text previous",children:[p.jsx("i",{className:`fa fa-${R.icon}`})," ",R.text]}),E&&p.jsxs("div",{className:"upsell-ps-text active",children:[p.jsx("i",{className:`fa fa-${E.icon}`})," ",E.text]})]})})},Mb=()=>{const[l,r]=V.useState(null),[u,o]=V.useState(0),[c,f]=V.useState(1),[h,g]=V.useState(null),[w,x]=V.useState(null),[b,j]=V.useState({d:"00",h:"00",m:"00",s:"00"});if(V.useEffect(()=>{if(document.getElementById("upsell-topbar-styles"))return;const M=document.createElement("style");M.id="upsell-topbar-styles",M.textContent=`
      .upsell-topbar-wrapper { width: 100%; font-family: inherit; order: -1; } /* Header flex ise en başa atar */
      .upsell-topbar-main {
        width: 100%; display: block; text-decoration: none;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        font-family: inherit; transition: background-color 0.3s ease;
      }
      .upsell-topbar-content {
        display: flex; align-items: center; justify-content: center;
        padding: 12px 20px; max-width: 1400px; margin: 0 auto; min-height: 50px;
      }
      .upsell-topbar-left, .upsell-topbar-right { flex: 1; display: flex; align-items: center; }
      .upsell-topbar-left { justify-content: flex-end; }
      .upsell-topbar-right { justify-content: flex-start; }
      .upsell-topbar-text { font-weight: 500; font-size: 15px; transition: opacity 0.3s ease-in-out; text-align: right; }
      .upsell-topbar-divider { width: 1px; height: 24px; background: rgba(255, 255, 255, 0.3); margin: 0 20px; }
      .upsell-topbar-timer-wrapper { display: flex; align-items: center; }
      .upsell-topbar-timer-box {
        background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 6px; padding: 4px 8px; min-width: 42px; text-align: center; margin-left: 5px;
      }
      .upsell-timer-val { font-weight: 700; font-size: 16px; display: block; line-height: 1; }
      .upsell-timer-lbl { font-size: 8px; text-transform: uppercase; opacity: 0.7; display: block; margin-top: 2px; }
      
      /* Ticimax Header Uyumu */
      #header, #headerNew { display: flex !important; flex-direction: column !important; height: auto !important; }

      @media (max-width: 768px) {
        .upsell-topbar-content { flex-direction: column; gap: 8px; padding: 10px; }
        .upsell-topbar-left, .upsell-topbar-right { flex: none; width: 100%; justify-content: center; }
        .upsell-topbar-text { text-align: center; font-size: 14px; }
        .upsell-topbar-divider { display: none; }
      }
    `,document.head.appendChild(M)},[]),V.useEffect(()=>{const M=document.querySelector("#headerNew")||document.querySelector("#header");M&&x(M),Be.get("https://api.upsell.co/shops/topbar").then(R=>{if(R.data.success){const B=R.data.data;if(B.targetDate){const C=new Date(B.targetDate).getTime();g(C-new Date().getTime()<=0)}else g(!0);r(B)}})},[]),V.useEffect(()=>{if(!l||h)return;const M=[l.text,l.text2,l.text3].filter(Boolean);if(M.length<=1)return;const R=setInterval(()=>{f(0),setTimeout(()=>{o(B=>(B+1)%M.length),f(1)},300)},5e3);return()=>clearInterval(R)},[l,h]),V.useEffect(()=>{if(!l?.targetDate||h)return;const M=setInterval(()=>{const R=new Date(l.targetDate).getTime()-new Date().getTime();if(R<=0){g(!0),clearInterval(M);return}j({d:Math.floor(R/864e5).toString().padStart(2,"0"),h:Math.floor(R%864e5/36e5).toString().padStart(2,"0"),m:Math.floor(R%36e5/6e4).toString().padStart(2,"0"),s:Math.floor(R%6e4/1e3).toString().padStart(2,"0")})},1e3);return()=>clearInterval(M)},[l,h]),!l||h===!0||h===null||!w)return null;const E=[l.text,l.text2,l.text3].filter(Boolean);return vf.createPortal(p.jsx("div",{className:"upsell-topbar-wrapper",children:p.jsx("a",{className:"upsell-topbar-main",href:l.url||"#",style:{backgroundColor:l.backgroundColor,color:l.textColor},children:p.jsxs("div",{className:"upsell-topbar-content",children:[p.jsx("div",{className:"upsell-topbar-left",children:p.jsx("div",{className:"upsell-topbar-text",style:{opacity:c},children:E[u]})}),p.jsx("div",{className:"upsell-topbar-divider"}),p.jsx("div",{className:"upsell-topbar-right",children:p.jsxs("div",{className:"upsell-topbar-timer-wrapper",children:[p.jsx("span",{style:{fontSize:"12px",opacity:.8,marginRight:"4px"},children:"Bitişe:"}),p.jsxs("div",{className:"upsell-topbar-timer-box",children:[p.jsx("span",{className:"upsell-timer-val",children:b.d}),p.jsx("span",{className:"upsell-timer-lbl",children:"Gün"})]}),p.jsxs("div",{className:"upsell-topbar-timer-box",children:[p.jsx("span",{className:"upsell-timer-val",children:b.h}),p.jsx("span",{className:"upsell-timer-lbl",children:"Saat"})]}),p.jsxs("div",{className:"upsell-topbar-timer-box",children:[p.jsx("span",{className:"upsell-timer-val",children:b.m}),p.jsx("span",{className:"upsell-timer-lbl",children:"Dak"})]}),p.jsxs("div",{className:"upsell-topbar-timer-box",children:[p.jsx("span",{className:"upsell-timer-val",children:b.s}),p.jsx("span",{className:"upsell-timer-lbl",children:"Sn"})]})]})})]})})}),w)};function Ub(){const[l,r]=V.useState(),[u,o]=V.useState(!1);return V.useEffect(()=>{async function c(){o(!0);try{const f=document.querySelector(".ProductBody")!==null,h=await Be.get("https://api.upsell.co/Shops");if(h.data&&h.data.success&&h.data.data){const g=h.data.data;r({mainColor:g.mainColor||"#e7333c",logo:g.logo||"",enabledPhoneSubscription:g.enabledPhoneSubscription||!1,enabledEmailSubscription:g.enabledEmailSubscription||!1,enabledGiftWheel:g.enabledGiftWheel||!1,enabledProductStat:(g.enabledProductStat||!1)&&f,enabledOrderCheck:g.enabledOrderCheck||!1,enabledWeeklyProducts:g.enabledWeeklyProducts||!1,enabledStockReminder:g.enabledStockReminder||!1,enabledSizeChart:g.enabledSizeChart||!1,enabledCategoryProducts:g.enabledCategoryProducts||!1,enabledTopBar:g.enabledTopBar||!1,useOneChartForAllProducts:g.useOneChartForAllProducts||!1,stockReminderUsageChannel:g.stockReminderUsageChannel||1})}else console.error("API'den geçersiz veri formatı geldi")}catch(f){console.error("API çağrısı başarısız:",f)}finally{o(!1)}}c()},[]),V.useEffect(()=>{const c=new URLSearchParams(window.location.search),f=c.get("utm_source"),h=c.get("utm_medium"),g=c.get("utm_campaign");if(!(f==="upsell"))return;const x="uvid",b=localStorage.getItem(x),j=b||crypto.randomUUID();b||localStorage.setItem(x,j),Be.post("https://api.upsell.co/Tracking/CreateVisitor",{visitorId:j,path:window.location.pathname,productId:String(window.productDetailModel?.product.urunKartiId),utm:{source:f,medium:h,campaign:g}}).catch(()=>{})},[]),V.useEffect(()=>{const c="uvid",f=localStorage.getItem(c);if(!f)return;const h=window,g=h.orderCompletedModel,w=h.checkout_order,x=g?.orderId??w?.id??w?.orderId??null;x&&Be.post("https://api.upsell.co/Tracking/MatchOrder",{visitorId:f,orderId:String(x)}).then(()=>{localStorage.removeItem(c)}).catch(()=>{})},[]),u?p.jsx("div",{children:"Yükleniyor..."}):l?l.mainColor?l.logo?p.jsxs(p.Fragment,{children:[l.enabledTopBar&&p.jsx(Mb,{}),l.enabledCategoryProducts&&p.jsx(tb,{}),l.enabledWeeklyProducts&&p.jsx(eb,{mainColor:l.mainColor}),(l.enabledPhoneSubscription||l.enabledEmailSubscription)&&p.jsx(Q3,{mainColor:l.mainColor,enabledPhoneSubscription:l.enabledPhoneSubscription,enabledEmailSubscription:l.enabledEmailSubscription}),l.enabledGiftWheel&&p.jsx(Nb,{mainColor:l.mainColor}),l.enabledProductStat&&p.jsx(Cb,{mainColor:l.mainColor}),l.enabledOrderCheck&&p.jsxs(p.Fragment,{children:[p.jsx(I3,{color:l.mainColor}),p.jsx(mb,{})]}),l.enabledStockReminder&&p.jsx(P3,{mainColor:l.mainColor,stockReminderUsageChannel:l.stockReminderUsageChannel}),l.enabledSizeChart&&l.useOneChartForAllProducts!==void 0&&p.jsx(cb,{useOneChartForAllProducts:l.useOneChartForAllProducts})]}):p.jsx("div",{children:"Mağaza logo bilgisi eksik"}):p.jsx("div",{children:"Mağaza renk bilgisi eksik"}):p.jsx("div",{children:"Mağaza bilgileri yüklenemedi"})}const d1=document.getElementById("upsell-style");d1&&Vx.createRoot(d1).render(p.jsx(Ub,{}));
