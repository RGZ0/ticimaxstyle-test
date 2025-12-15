(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function o(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function u(c){if(c.ep)return;c.ep=!0;const d=o(c);fetch(c.href,d)}})();(function(){if(!window.location.pathname.includes("/checkout"))return;let a=0;const r=3e5,o=setInterval(function(){const c=window.checkout_order,d=c?.id;d?(clearInterval(o),console.log("🟢 OrderId bulundu! İşlem başlatılıyor."),u(c,d)):a>=r&&(clearInterval(o),console.log("⏱️ Maksimum bekleme süresi doldu, işlem iptal edildi.")),a+=100},100);function u(c,d){const p="uvid",g=localStorage.getItem(p);if(console.log("📊 processOrder çağrıldı"),console.log("📊 visitorId (uvid):",g),console.log("📊 checkout_order:",c),console.log("📦 orderId:",d),!g){console.error("❌ Conversion-tracking: visitorId bulunamadı.");return}console.log("✅ Step 1 - Veri başarıyla yakalandı."),console.log("✅ Step 2 - OrderId mevcut");const w=new XMLHttpRequest;w.open("POST","https://api.upsell.co/Tracking/MatchOrder",!0),w.setRequestHeader("Content-Type","application/json;charset=UTF-8"),w.onreadystatechange=function(){w.readyState===4&&(w.status>=200&&w.status<300?(console.log("✅ Conversion-tracking: Başarılı. Ziyaretçi anahtarı siliniyor."),localStorage.removeItem(p)):console.error("❌ Conversion-tracking MatchOrder error:",w.responseText))},console.log("📤 Step 3 - İstek gönderiliyor."),w.send(JSON.stringify({visitorId:g,orderId:String(d)})),console.log("✅ Step 4 - İstek gönderildi.")}})();var Ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vx(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Oc={exports:{}},tr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function Yx(){if(fh)return tr;fh=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(u,c,d){var p=null;if(d!==void 0&&(p=""+d),c.key!==void 0&&(p=""+c.key),"key"in c){d={};for(var g in c)g!=="key"&&(d[g]=c[g])}else d=c;return c=d.ref,{$$typeof:a,type:u,key:p,ref:c!==void 0?c:null,props:d}}return tr.Fragment=r,tr.jsx=o,tr.jsxs=o,tr}var dh;function Gx(){return dh||(dh=1,Oc.exports=Yx()),Oc.exports}var f=Gx(),_c={exports:{}},er={},Dc={exports:{}},kc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh;function Xx(){return hh||(hh=1,(function(a){function r(_,Q){var ft=_.length;_.push(Q);t:for(;0<ft;){var bt=ft-1>>>1,S=_[bt];if(0<c(S,Q))_[bt]=Q,_[ft]=S,ft=bt;else break t}}function o(_){return _.length===0?null:_[0]}function u(_){if(_.length===0)return null;var Q=_[0],ft=_.pop();if(ft!==Q){_[0]=ft;t:for(var bt=0,S=_.length,L=S>>>1;bt<L;){var nt=2*(bt+1)-1,q=_[nt],F=nt+1,ot=_[F];if(0>c(q,ft))F<S&&0>c(ot,q)?(_[bt]=ot,_[F]=ft,bt=F):(_[bt]=q,_[nt]=ft,bt=nt);else if(F<S&&0>c(ot,ft))_[bt]=ot,_[F]=ft,bt=F;else break t}}return Q}function c(_,Q){var ft=_.sortIndex-Q.sortIndex;return ft!==0?ft:_.id-Q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var p=Date,g=p.now();a.unstable_now=function(){return p.now()-g}}var w=[],x=[],b=1,O=null,E=3,K=!1,k=!1,B=!1,M=!1,tt=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function rt(_){for(var Q=o(x);Q!==null;){if(Q.callback===null)u(x);else if(Q.startTime<=_)u(x),Q.sortIndex=Q.expirationTime,r(w,Q);else break;Q=o(x)}}function H(_){if(B=!1,rt(_),!k)if(o(w)!==null)k=!0,et||(et=!0,I());else{var Q=o(x);Q!==null&&yt(H,Q.startTime-_)}}var et=!1,J=-1,lt=5,zt=-1;function Yt(){return M?!0:!(a.unstable_now()-zt<lt)}function Ct(){if(M=!1,et){var _=a.unstable_now();zt=_;var Q=!0;try{t:{k=!1,B&&(B=!1,V(J),J=-1),K=!0;var ft=E;try{e:{for(rt(_),O=o(w);O!==null&&!(O.expirationTime>_&&Yt());){var bt=O.callback;if(typeof bt=="function"){O.callback=null,E=O.priorityLevel;var S=bt(O.expirationTime<=_);if(_=a.unstable_now(),typeof S=="function"){O.callback=S,rt(_),Q=!0;break e}O===o(w)&&u(w),rt(_)}else u(w);O=o(w)}if(O!==null)Q=!0;else{var L=o(x);L!==null&&yt(H,L.startTime-_),Q=!1}}break t}finally{O=null,E=ft,K=!1}Q=void 0}}finally{Q?I():et=!1}}}var I;if(typeof $=="function")I=function(){$(Ct)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,xt=st.port2;st.port1.onmessage=Ct,I=function(){xt.postMessage(null)}}else I=function(){tt(Ct,0)};function yt(_,Q){J=tt(function(){_(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(_){_.callback=null},a.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):lt=0<_?Math.floor(1e3/_):5},a.unstable_getCurrentPriorityLevel=function(){return E},a.unstable_next=function(_){switch(E){case 1:case 2:case 3:var Q=3;break;default:Q=E}var ft=E;E=Q;try{return _()}finally{E=ft}},a.unstable_requestPaint=function(){M=!0},a.unstable_runWithPriority=function(_,Q){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var ft=E;E=_;try{return Q()}finally{E=ft}},a.unstable_scheduleCallback=function(_,Q,ft){var bt=a.unstable_now();switch(typeof ft=="object"&&ft!==null?(ft=ft.delay,ft=typeof ft=="number"&&0<ft?bt+ft:bt):ft=bt,_){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=ft+S,_={id:b++,callback:Q,priorityLevel:_,startTime:ft,expirationTime:S,sortIndex:-1},ft>bt?(_.sortIndex=ft,r(x,_),o(w)===null&&_===o(x)&&(B?(V(J),J=-1):B=!0,yt(H,ft-bt))):(_.sortIndex=S,r(w,_),k||K||(k=!0,et||(et=!0,I()))),_},a.unstable_shouldYield=Yt,a.unstable_wrapCallback=function(_){var Q=E;return function(){var ft=E;E=Q;try{return _.apply(this,arguments)}finally{E=ft}}}})(kc)),kc}var ph;function Zx(){return ph||(ph=1,Dc.exports=Xx()),Dc.exports}var Rc={exports:{}},_t={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mh;function $x(){if(mh)return _t;mh=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),O=Symbol.iterator;function E(S){return S===null||typeof S!="object"?null:(S=O&&S[O]||S["@@iterator"],typeof S=="function"?S:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,B={};function M(S,L,nt){this.props=S,this.context=L,this.refs=B,this.updater=nt||K}M.prototype.isReactComponent={},M.prototype.setState=function(S,L){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,L,"setState")},M.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function tt(){}tt.prototype=M.prototype;function V(S,L,nt){this.props=S,this.context=L,this.refs=B,this.updater=nt||K}var $=V.prototype=new tt;$.constructor=V,k($,M.prototype),$.isPureReactComponent=!0;var rt=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},et=Object.prototype.hasOwnProperty;function J(S,L,nt,q,F,ot){return nt=ot.ref,{$$typeof:a,type:S,key:L,ref:nt!==void 0?nt:null,props:ot}}function lt(S,L){return J(S.type,L,void 0,void 0,void 0,S.props)}function zt(S){return typeof S=="object"&&S!==null&&S.$$typeof===a}function Yt(S){var L={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(nt){return L[nt]})}var Ct=/\/+/g;function I(S,L){return typeof S=="object"&&S!==null&&S.key!=null?Yt(""+S.key):L.toString(36)}function st(){}function xt(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(st,st):(S.status="pending",S.then(function(L){S.status==="pending"&&(S.status="fulfilled",S.value=L)},function(L){S.status==="pending"&&(S.status="rejected",S.reason=L)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function yt(S,L,nt,q,F){var ot=typeof S;(ot==="undefined"||ot==="boolean")&&(S=null);var ut=!1;if(S===null)ut=!0;else switch(ot){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(S.$$typeof){case a:case r:ut=!0;break;case b:return ut=S._init,yt(ut(S._payload),L,nt,q,F)}}if(ut)return F=F(S),ut=q===""?"."+I(S,0):q,rt(F)?(nt="",ut!=null&&(nt=ut.replace(Ct,"$&/")+"/"),yt(F,L,nt,"",function(kt){return kt})):F!=null&&(zt(F)&&(F=lt(F,nt+(F.key==null||S&&S.key===F.key?"":(""+F.key).replace(Ct,"$&/")+"/")+ut)),L.push(F)),1;ut=0;var gt=q===""?".":q+":";if(rt(S))for(var pt=0;pt<S.length;pt++)q=S[pt],ot=gt+I(q,pt),ut+=yt(q,L,nt,ot,F);else if(pt=E(S),typeof pt=="function")for(S=pt.call(S),pt=0;!(q=S.next()).done;)q=q.value,ot=gt+I(q,pt++),ut+=yt(q,L,nt,ot,F);else if(ot==="object"){if(typeof S.then=="function")return yt(xt(S),L,nt,q,F);throw L=String(S),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return ut}function _(S,L,nt){if(S==null)return S;var q=[],F=0;return yt(S,q,"","",function(ot){return L.call(nt,ot,F++)}),q}function Q(S){if(S._status===-1){var L=S._result;L=L(),L.then(function(nt){(S._status===0||S._status===-1)&&(S._status=1,S._result=nt)},function(nt){(S._status===0||S._status===-1)&&(S._status=2,S._result=nt)}),S._status===-1&&(S._status=0,S._result=L)}if(S._status===1)return S._result.default;throw S._result}var ft=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function bt(){}return _t.Children={map:_,forEach:function(S,L,nt){_(S,function(){L.apply(this,arguments)},nt)},count:function(S){var L=0;return _(S,function(){L++}),L},toArray:function(S){return _(S,function(L){return L})||[]},only:function(S){if(!zt(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},_t.Component=M,_t.Fragment=o,_t.Profiler=c,_t.PureComponent=V,_t.StrictMode=u,_t.Suspense=w,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,_t.__COMPILER_RUNTIME={__proto__:null,c:function(S){return H.H.useMemoCache(S)}},_t.cache=function(S){return function(){return S.apply(null,arguments)}},_t.cloneElement=function(S,L,nt){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var q=k({},S.props),F=S.key,ot=void 0;if(L!=null)for(ut in L.ref!==void 0&&(ot=void 0),L.key!==void 0&&(F=""+L.key),L)!et.call(L,ut)||ut==="key"||ut==="__self"||ut==="__source"||ut==="ref"&&L.ref===void 0||(q[ut]=L[ut]);var ut=arguments.length-2;if(ut===1)q.children=nt;else if(1<ut){for(var gt=Array(ut),pt=0;pt<ut;pt++)gt[pt]=arguments[pt+2];q.children=gt}return J(S.type,F,void 0,void 0,ot,q)},_t.createContext=function(S){return S={$$typeof:p,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:d,_context:S},S},_t.createElement=function(S,L,nt){var q,F={},ot=null;if(L!=null)for(q in L.key!==void 0&&(ot=""+L.key),L)et.call(L,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(F[q]=L[q]);var ut=arguments.length-2;if(ut===1)F.children=nt;else if(1<ut){for(var gt=Array(ut),pt=0;pt<ut;pt++)gt[pt]=arguments[pt+2];F.children=gt}if(S&&S.defaultProps)for(q in ut=S.defaultProps,ut)F[q]===void 0&&(F[q]=ut[q]);return J(S,ot,void 0,void 0,null,F)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(S){return{$$typeof:g,render:S}},_t.isValidElement=zt,_t.lazy=function(S){return{$$typeof:b,_payload:{_status:-1,_result:S},_init:Q}},_t.memo=function(S,L){return{$$typeof:x,type:S,compare:L===void 0?null:L}},_t.startTransition=function(S){var L=H.T,nt={};H.T=nt;try{var q=S(),F=H.S;F!==null&&F(nt,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(bt,ft)}catch(ot){ft(ot)}finally{H.T=L}},_t.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},_t.use=function(S){return H.H.use(S)},_t.useActionState=function(S,L,nt){return H.H.useActionState(S,L,nt)},_t.useCallback=function(S,L){return H.H.useCallback(S,L)},_t.useContext=function(S){return H.H.useContext(S)},_t.useDebugValue=function(){},_t.useDeferredValue=function(S,L){return H.H.useDeferredValue(S,L)},_t.useEffect=function(S,L,nt){var q=H.H;if(typeof nt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return q.useEffect(S,L)},_t.useId=function(){return H.H.useId()},_t.useImperativeHandle=function(S,L,nt){return H.H.useImperativeHandle(S,L,nt)},_t.useInsertionEffect=function(S,L){return H.H.useInsertionEffect(S,L)},_t.useLayoutEffect=function(S,L){return H.H.useLayoutEffect(S,L)},_t.useMemo=function(S,L){return H.H.useMemo(S,L)},_t.useOptimistic=function(S,L){return H.H.useOptimistic(S,L)},_t.useReducer=function(S,L,nt){return H.H.useReducer(S,L,nt)},_t.useRef=function(S){return H.H.useRef(S)},_t.useState=function(S){return H.H.useState(S)},_t.useSyncExternalStore=function(S,L,nt){return H.H.useSyncExternalStore(S,L,nt)},_t.useTransition=function(){return H.H.useTransition()},_t.version="19.1.1",_t}var gh;function sf(){return gh||(gh=1,Rc.exports=$x()),Rc.exports}var Cc={exports:{}},Ue={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function Qx(){if(xh)return Ue;xh=1;var a=sf();function r(w){var x="https://react.dev/errors/"+w;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)x+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+w+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(w,x,b){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:O==null?null:""+O,children:w,containerInfo:x,implementation:b}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(w,x){if(w==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ue.createPortal=function(w,x){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(r(299));return d(w,x,null,b)},Ue.flushSync=function(w){var x=p.T,b=u.p;try{if(p.T=null,u.p=2,w)return w()}finally{p.T=x,u.p=b,u.d.f()}},Ue.preconnect=function(w,x){typeof w=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,u.d.C(w,x))},Ue.prefetchDNS=function(w){typeof w=="string"&&u.d.D(w)},Ue.preinit=function(w,x){if(typeof w=="string"&&x&&typeof x.as=="string"){var b=x.as,O=g(b,x.crossOrigin),E=typeof x.integrity=="string"?x.integrity:void 0,K=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;b==="style"?u.d.S(w,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:O,integrity:E,fetchPriority:K}):b==="script"&&u.d.X(w,{crossOrigin:O,integrity:E,fetchPriority:K,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Ue.preinitModule=function(w,x){if(typeof w=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var b=g(x.as,x.crossOrigin);u.d.M(w,{crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&u.d.M(w)},Ue.preload=function(w,x){if(typeof w=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var b=x.as,O=g(b,x.crossOrigin);u.d.L(w,b,{crossOrigin:O,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Ue.preloadModule=function(w,x){if(typeof w=="string")if(x){var b=g(x.as,x.crossOrigin);u.d.m(w,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else u.d.m(w)},Ue.requestFormReset=function(w){u.d.r(w)},Ue.unstable_batchedUpdates=function(w,x){return w(x)},Ue.useFormState=function(w,x,b){return p.H.useFormState(w,x,b)},Ue.useFormStatus=function(){return p.H.useHostTransitionStatus()},Ue.version="19.1.1",Ue}var yh;function wp(){if(yh)return Cc.exports;yh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Cc.exports=Qx(),Cc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh;function Kx(){if(bh)return er;bh=1;var a=Zx(),r=sf(),o=wp();function u(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function p(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(d(t)!==t)throw Error(u(188))}function w(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(u(188));return e!==t?null:t}for(var n=t,i=e;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return g(l),t;if(s===i)return g(l),e;s=s.sibling}throw Error(u(188))}if(n.return!==i.return)n=l,i=s;else{for(var h=!1,m=l.child;m;){if(m===n){h=!0,n=l,i=s;break}if(m===i){h=!0,i=l,n=s;break}m=m.sibling}if(!h){for(m=s.child;m;){if(m===n){h=!0,n=s,i=l;break}if(m===i){h=!0,i=s,n=l;break}m=m.sibling}if(!h)throw Error(u(189))}}if(n.alternate!==i)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?t:e}function x(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=x(t),e!==null)return e;t=t.sibling}return null}var b=Object.assign,O=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),K=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),tt=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),$=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),zt=Symbol.for("react.activity"),Yt=Symbol.for("react.memo_cache_sentinel"),Ct=Symbol.iterator;function I(t){return t===null||typeof t!="object"?null:(t=Ct&&t[Ct]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function xt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case M:return"Profiler";case B:return"StrictMode";case H:return"Suspense";case et:return"SuspenseList";case zt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case K:return"Portal";case $:return(t.displayName||"Context")+".Provider";case V:return(t._context.displayName||"Context")+".Consumer";case rt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case J:return e=t.displayName||null,e!==null?e:xt(t.type)||"Memo";case lt:e=t._payload,t=t._init;try{return xt(t(e))}catch{}}return null}var yt=Array.isArray,_=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ft={pending:!1,data:null,method:null,action:null},bt=[],S=-1;function L(t){return{current:t}}function nt(t){0>S||(t.current=bt[S],bt[S]=null,S--)}function q(t,e){S++,bt[S]=t.current,t.current=e}var F=L(null),ot=L(null),ut=L(null),gt=L(null);function pt(t,e){switch(q(ut,e),q(ot,t),q(F,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?L0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=L0(e),t=q0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nt(F),q(F,t)}function kt(){nt(F),nt(ot),nt(ut)}function ae(t){t.memoizedState!==null&&q(gt,t);var e=F.current,n=q0(e,t.type);e!==n&&(q(ot,t),q(F,n))}function ve(t){ot.current===t&&(nt(F),nt(ot)),gt.current===t&&(nt(gt),Jl._currentValue=ft)}var St=Object.prototype.hasOwnProperty,vt=a.unstable_scheduleCallback,Bt=a.unstable_cancelCallback,Lt=a.unstable_shouldYield,xe=a.unstable_requestPaint,ie=a.unstable_now,_n=a.unstable_getCurrentPriorityLevel,Pe=a.unstable_ImmediatePriority,v=a.unstable_UserBlockingPriority,T=a.unstable_NormalPriority,U=a.unstable_LowPriority,it=a.unstable_IdlePriority,at=a.log,P=a.unstable_setDisableYieldValue,ct=null,At=null;function jt(t){if(typeof at=="function"&&P(t),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(ct,t)}catch{}}var Zt=Math.clz32?Math.clz32:ra,Ve=Math.log,He=Math.LN2;function ra(t){return t>>>=0,t===0?32:31-(Ve(t)/He|0)|0}var Se=256,Sn=4194304;function ke(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function we(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var l=0,s=t.suspendedLanes,h=t.pingedLanes;t=t.warmLanes;var m=i&134217727;return m!==0?(i=m&~s,i!==0?l=ke(i):(h&=m,h!==0?l=ke(h):n||(n=m&~t,n!==0&&(l=ke(n))))):(m=i&~s,m!==0?l=ke(m):h!==0?l=ke(h):n||(n=i&~t,n!==0&&(l=ke(n)))),l===0?0:e!==0&&e!==l&&(e&s)===0&&(s=l&-l,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:l}function qn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ii(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function al(){var t=Se;return Se<<=1,(Se&4194048)===0&&(Se=256),t}function Er(){var t=Sn;return Sn<<=1,(Sn&62914560)===0&&(Sn=4194304),t}function Dn(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ye(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function un(t,e,n,i,l,s){var h=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var m=t.entanglements,y=t.expirationTimes,D=t.hiddenUpdates;for(n=h&~n;0<n;){var Y=31-Zt(n),Z=1<<Y;m[Y]=0,y[Y]=-1;var R=D[Y];if(R!==null)for(D[Y]=null,Y=0;Y<R.length;Y++){var C=R[Y];C!==null&&(C.lane&=-536870913)}n&=~Z}i!==0&&il(t,i,0),s!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=s&~(h&~e))}function il(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Zt(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&4194090}function li(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zt(n),l=1<<i;l&e|t[i]&e&&(t[i]|=e),n&=~l}}function ll(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Vn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function zr(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:lh(t.type))}function vo(t,e){var n=Q.p;try{return Q.p=t,e()}finally{Q.p=n}}var Ge=Math.random().toString(36).slice(2),Kt="__reactFiber$"+Ge,oe="__reactProps$"+Ge,Yn="__reactContainer$"+Ge,sa="__reactEvents$"+Ge,km="__reactListeners$"+Ge,Rm="__reactHandles$"+Ge,jf="__reactResources$"+Ge,rl="__reactMarker$"+Ge;function So(t){delete t[Kt],delete t[oe],delete t[sa],delete t[km],delete t[Rm]}function ri(t){var e=t[Kt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yn]||n[Kt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=X0(t);t!==null;){if(n=t[Kt])return n;t=X0(t)}return e}t=n,n=t.parentNode}return null}function si(t){if(t=t[Kt]||t[Yn]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function sl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(u(33))}function oi(t){var e=t[jf];return e||(e=t[jf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ee(t){t[rl]=!0}var Of=new Set,_f={};function Ca(t,e){ui(t,e),ui(t+"Capture",e)}function ui(t,e){for(_f[t]=e,t=0;t<e.length;t++)Of.add(e[t])}var Cm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Df={},kf={};function Mm(t){return St.call(kf,t)?!0:St.call(Df,t)?!1:Cm.test(t)?kf[t]=!0:(Df[t]=!0,!1)}function Ar(t,e,n){if(Mm(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Tr(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Gn(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}var wo,Rf;function ci(t){if(wo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wo=e&&e[1]||"",Rf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wo+t+Rf}var Eo=!1;function zo(t,e){if(!t||Eo)return"";Eo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(C){var R=C}Reflect.construct(t,[],Z)}else{try{Z.call()}catch(C){R=C}t.call(Z.prototype)}}else{try{throw Error()}catch(C){R=C}(Z=t())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(C){if(C&&R&&typeof C.stack=="string")return[C.stack,R.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),h=s[0],m=s[1];if(h&&m){var y=h.split(`
`),D=m.split(`
`);for(l=i=0;i<y.length&&!y[i].includes("DetermineComponentFrameRoot");)i++;for(;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;if(i===y.length||l===D.length)for(i=y.length-1,l=D.length-1;1<=i&&0<=l&&y[i]!==D[l];)l--;for(;1<=i&&0<=l;i--,l--)if(y[i]!==D[l]){if(i!==1||l!==1)do if(i--,l--,0>l||y[i]!==D[l]){var Y=`
`+y[i].replace(" at new "," at ");return t.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",t.displayName)),Y}while(1<=i&&0<=l);break}}}finally{Eo=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?ci(n):""}function Nm(t){switch(t.tag){case 26:case 27:case 5:return ci(t.type);case 16:return ci("Lazy");case 13:return ci("Suspense");case 19:return ci("SuspenseList");case 0:case 15:return zo(t.type,!1);case 11:return zo(t.type.render,!1);case 1:return zo(t.type,!0);case 31:return ci("Activity");default:return""}}function Cf(t){try{var e="";do e+=Nm(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function cn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Um(t){var e=Mf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(h){i=""+h,s.call(this,h)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(h){i=""+h},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jr(t){t._valueTracker||(t._valueTracker=Um(t))}function Nf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Mf(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Or(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Bm=/[\n"\\]/g;function fn(t){return t.replace(Bm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ao(t,e,n,i,l,s,h,m){t.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.type=h:t.removeAttribute("type"),e!=null?h==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+cn(e)):t.value!==""+cn(e)&&(t.value=""+cn(e)):h!=="submit"&&h!=="reset"||t.removeAttribute("value"),e!=null?To(t,h,cn(e)):n!=null?To(t,h,cn(n)):i!=null&&t.removeAttribute("value"),l==null&&s!=null&&(t.defaultChecked=!!s),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.name=""+cn(m):t.removeAttribute("name")}function Uf(t,e,n,i,l,s,h,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null))return;n=n!=null?""+cn(n):"",e=e!=null?""+cn(e):n,m||e===t.value||(t.value=e),t.defaultValue=e}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=m?t.checked:!!i,t.defaultChecked=!!i,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.name=h)}function To(t,e,n){e==="number"&&Or(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function fi(t,e,n,i){if(t=t.options,e){e={};for(var l=0;l<n.length;l++)e["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=e.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&i&&(t[n].defaultSelected=!0)}else{for(n=""+cn(n),e=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,i&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Bf(t,e,n){if(e!=null&&(e=""+cn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+cn(n):""}function Hf(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(u(92));if(yt(i)){if(1<i.length)throw Error(u(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=cn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i)}function di(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Hm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lf(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||Hm.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function qf(t,e,n){if(e!=null&&typeof e!="object")throw Error(u(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var l in e)i=e[l],e.hasOwnProperty(l)&&n[l]!==i&&Lf(t,l,i)}else for(var s in e)e.hasOwnProperty(s)&&Lf(t,s,e[s])}function jo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _r(t){return qm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Oo=null;function _o(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hi=null,pi=null;function Vf(t){var e=si(t);if(e&&(t=e.stateNode)){var n=t[oe]||null;t:switch(t=e.stateNode,e.type){case"input":if(Ao(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+fn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var l=i[oe]||null;if(!l)throw Error(u(90));Ao(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&Nf(i)}break t;case"textarea":Bf(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&fi(t,!!n.multiple,e,!1)}}}var Do=!1;function Yf(t,e,n){if(Do)return t(e,n);Do=!0;try{var i=t(e);return i}finally{if(Do=!1,(hi!==null||pi!==null)&&(ps(),hi&&(e=hi,t=pi,pi=hi=null,Vf(e),t)))for(e=0;e<t.length;e++)Vf(t[e])}}function ol(t,e){var n=t.stateNode;if(n===null)return null;var i=n[oe]||null;if(i===null)return null;n=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(u(231,e,typeof n));return n}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ko=!1;if(Xn)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){ko=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{ko=!1}var oa=null,Ro=null,Dr=null;function Gf(){if(Dr)return Dr;var t,e=Ro,n=e.length,i,l="value"in oa?oa.value:oa.textContent,s=l.length;for(t=0;t<n&&e[t]===l[t];t++);var h=n-t;for(i=1;i<=h&&e[n-i]===l[s-i];i++);return Dr=l.slice(t,1<i?1-i:void 0)}function kr(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rr(){return!0}function Xf(){return!1}function Xe(t){function e(n,i,l,s,h){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=s,this.target=h,this.currentTarget=null;for(var m in t)t.hasOwnProperty(m)&&(n=t[m],this[m]=n?n(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rr:Xf,this.isPropagationStopped=Xf,this}return b(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rr)},persist:function(){},isPersistent:Rr}),e}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cr=Xe(Ma),cl=b({},Ma,{view:0,detail:0}),Vm=Xe(cl),Co,Mo,fl,Mr=b({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fl&&(fl&&t.type==="mousemove"?(Co=t.screenX-fl.screenX,Mo=t.screenY-fl.screenY):Mo=Co=0,fl=t),Co)},movementY:function(t){return"movementY"in t?t.movementY:Mo}}),Zf=Xe(Mr),Ym=b({},Mr,{dataTransfer:0}),Gm=Xe(Ym),Xm=b({},cl,{relatedTarget:0}),No=Xe(Xm),Zm=b({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),$m=Xe(Zm),Qm=b({},Ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Km=Xe(Qm),Jm=b({},Ma,{data:0}),$f=Xe(Jm),Wm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Im={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Im[t])?!!e[t]:!1}function Uo(){return Pm}var tg=b({},cl,{key:function(t){if(t.key){var e=Wm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=kr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uo,charCode:function(t){return t.type==="keypress"?kr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?kr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eg=Xe(tg),ng=b({},Mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qf=Xe(ng),ag=b({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uo}),ig=Xe(ag),lg=b({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),rg=Xe(lg),sg=b({},Mr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),og=Xe(sg),ug=b({},Ma,{newState:0,oldState:0}),cg=Xe(ug),fg=[9,13,27,32],Bo=Xn&&"CompositionEvent"in window,dl=null;Xn&&"documentMode"in document&&(dl=document.documentMode);var dg=Xn&&"TextEvent"in window&&!dl,Kf=Xn&&(!Bo||dl&&8<dl&&11>=dl),Jf=" ",Wf=!1;function Ff(t,e){switch(t){case"keyup":return fg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mi=!1;function hg(t,e){switch(t){case"compositionend":return If(e);case"keypress":return e.which!==32?null:(Wf=!0,Jf);case"textInput":return t=e.data,t===Jf&&Wf?null:t;default:return null}}function pg(t,e){if(mi)return t==="compositionend"||!Bo&&Ff(t,e)?(t=Gf(),Dr=Ro=oa=null,mi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kf&&e.locale!=="ko"?null:e.data;default:return null}}var mg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mg[t.type]:e==="textarea"}function td(t,e,n,i){hi?pi?pi.push(i):pi=[i]:hi=i,e=vs(e,"onChange"),0<e.length&&(n=new Cr("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var hl=null,pl=null;function gg(t){M0(t,0)}function Nr(t){var e=sl(t);if(Nf(e))return t}function ed(t,e){if(t==="change")return e}var nd=!1;if(Xn){var Ho;if(Xn){var Lo="oninput"in document;if(!Lo){var ad=document.createElement("div");ad.setAttribute("oninput","return;"),Lo=typeof ad.oninput=="function"}Ho=Lo}else Ho=!1;nd=Ho&&(!document.documentMode||9<document.documentMode)}function id(){hl&&(hl.detachEvent("onpropertychange",ld),pl=hl=null)}function ld(t){if(t.propertyName==="value"&&Nr(pl)){var e=[];td(e,pl,t,_o(t)),Yf(gg,e)}}function xg(t,e,n){t==="focusin"?(id(),hl=e,pl=n,hl.attachEvent("onpropertychange",ld)):t==="focusout"&&id()}function yg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nr(pl)}function bg(t,e){if(t==="click")return Nr(e)}function vg(t,e){if(t==="input"||t==="change")return Nr(e)}function Sg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:Sg;function ml(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!St.call(e,l)||!tn(t[l],e[l]))return!1}return!0}function rd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sd(t,e){var n=rd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=rd(n)}}function od(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?od(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ud(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Or(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Or(t.document)}return e}function qo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var wg=Xn&&"documentMode"in document&&11>=document.documentMode,gi=null,Vo=null,gl=null,Yo=!1;function cd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yo||gi==null||gi!==Or(i)||(i=gi,"selectionStart"in i&&qo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),gl&&ml(gl,i)||(gl=i,i=vs(Vo,"onSelect"),0<i.length&&(e=new Cr("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=gi)))}function Na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xi={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionrun:Na("Transition","TransitionRun"),transitionstart:Na("Transition","TransitionStart"),transitioncancel:Na("Transition","TransitionCancel"),transitionend:Na("Transition","TransitionEnd")},Go={},fd={};Xn&&(fd=document.createElement("div").style,"AnimationEvent"in window||(delete xi.animationend.animation,delete xi.animationiteration.animation,delete xi.animationstart.animation),"TransitionEvent"in window||delete xi.transitionend.transition);function Ua(t){if(Go[t])return Go[t];if(!xi[t])return t;var e=xi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fd)return Go[t]=e[n];return t}var dd=Ua("animationend"),hd=Ua("animationiteration"),pd=Ua("animationstart"),Eg=Ua("transitionrun"),zg=Ua("transitionstart"),Ag=Ua("transitioncancel"),md=Ua("transitionend"),gd=new Map,Xo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xo.push("scrollEnd");function wn(t,e){gd.set(t,e),Ca(e,[t])}var xd=new WeakMap;function dn(t,e){if(typeof t=="object"&&t!==null){var n=xd.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Cf(e)},xd.set(t,e),e)}return{value:t,source:e,stack:Cf(e)}}var hn=[],yi=0,Zo=0;function Ur(){for(var t=yi,e=Zo=yi=0;e<t;){var n=hn[e];hn[e++]=null;var i=hn[e];hn[e++]=null;var l=hn[e];hn[e++]=null;var s=hn[e];if(hn[e++]=null,i!==null&&l!==null){var h=i.pending;h===null?l.next=l:(l.next=h.next,h.next=l),i.pending=l}s!==0&&yd(n,l,s)}}function Br(t,e,n,i){hn[yi++]=t,hn[yi++]=e,hn[yi++]=n,hn[yi++]=i,Zo|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function $o(t,e,n,i){return Br(t,e,n,i),Hr(t)}function bi(t,e){return Br(t,null,null,e),Hr(t)}function yd(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var l=!1,s=t.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(l=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,l&&e!==null&&(l=31-Zt(n),t=s.hiddenUpdates,i=t[l],i===null?t[l]=[e]:i.push(e),e.lane=n|536870912),s):null}function Hr(t){if(50<Vl)throw Vl=0,Iu=null,Error(u(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var vi={};function Tg(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,i){return new Tg(t,e,n,i)}function Qo(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zn(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function bd(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Lr(t,e,n,i,l,s){var h=0;if(i=t,typeof t=="function")Qo(t)&&(h=1);else if(typeof t=="string")h=Ox(t,n,F.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case zt:return t=en(31,n,e,l),t.elementType=zt,t.lanes=s,t;case k:return Ba(n.children,l,s,e);case B:h=8,l|=24;break;case M:return t=en(12,n,e,l|2),t.elementType=M,t.lanes=s,t;case H:return t=en(13,n,e,l),t.elementType=H,t.lanes=s,t;case et:return t=en(19,n,e,l),t.elementType=et,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tt:case $:h=10;break t;case V:h=9;break t;case rt:h=11;break t;case J:h=14;break t;case lt:h=16,i=null;break t}h=29,n=Error(u(130,t===null?"null":typeof t,"")),i=null}return e=en(h,n,e,l),e.elementType=t,e.type=i,e.lanes=s,e}function Ba(t,e,n,i){return t=en(7,t,i,e),t.lanes=n,t}function Ko(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Jo(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Si=[],wi=0,qr=null,Vr=0,pn=[],mn=0,Ha=null,$n=1,Qn="";function La(t,e){Si[wi++]=Vr,Si[wi++]=qr,qr=t,Vr=e}function vd(t,e,n){pn[mn++]=$n,pn[mn++]=Qn,pn[mn++]=Ha,Ha=t;var i=$n;t=Qn;var l=32-Zt(i)-1;i&=~(1<<l),n+=1;var s=32-Zt(e)+l;if(30<s){var h=l-l%5;s=(i&(1<<h)-1).toString(32),i>>=h,l-=h,$n=1<<32-Zt(e)+l|n<<l|i,Qn=s+t}else $n=1<<s|n<<l|i,Qn=t}function Wo(t){t.return!==null&&(La(t,1),vd(t,1,0))}function Fo(t){for(;t===qr;)qr=Si[--wi],Si[wi]=null,Vr=Si[--wi],Si[wi]=null;for(;t===Ha;)Ha=pn[--mn],pn[mn]=null,Qn=pn[--mn],pn[mn]=null,$n=pn[--mn],pn[mn]=null}var Le=null,re=null,Gt=!1,qa=null,kn=!1,Io=Error(u(519));function Va(t){var e=Error(u(418,""));throw bl(dn(e,t)),Io}function Sd(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[Kt]=t,e[oe]=i,n){case"dialog":Ut("cancel",e),Ut("close",e);break;case"iframe":case"object":case"embed":Ut("load",e);break;case"video":case"audio":for(n=0;n<Gl.length;n++)Ut(Gl[n],e);break;case"source":Ut("error",e);break;case"img":case"image":case"link":Ut("error",e),Ut("load",e);break;case"details":Ut("toggle",e);break;case"input":Ut("invalid",e),Uf(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),jr(e);break;case"select":Ut("invalid",e);break;case"textarea":Ut("invalid",e),Hf(e,i.value,i.defaultValue,i.children),jr(e)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||H0(e.textContent,n)?(i.popover!=null&&(Ut("beforetoggle",e),Ut("toggle",e)),i.onScroll!=null&&Ut("scroll",e),i.onScrollEnd!=null&&Ut("scrollend",e),i.onClick!=null&&(e.onclick=Ss),e=!0):e=!1,e||Va(t)}function wd(t){for(Le=t.return;Le;)switch(Le.tag){case 5:case 13:kn=!1;return;case 27:case 3:kn=!0;return;default:Le=Le.return}}function xl(t){if(t!==Le)return!1;if(!Gt)return wd(t),Gt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||pc(t.type,t.memoizedProps)),n=!n),n&&re&&Va(t),wd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(u(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){re=zn(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}re=null}}else e===27?(e=re,za(t.type)?(t=yc,yc=null,re=t):re=e):re=Le?zn(t.stateNode.nextSibling):null;return!0}function yl(){re=Le=null,Gt=!1}function Ed(){var t=qa;return t!==null&&(Qe===null?Qe=t:Qe.push.apply(Qe,t),qa=null),t}function bl(t){qa===null?qa=[t]:qa.push(t)}var Po=L(null),Ya=null,Kn=null;function ua(t,e,n){q(Po,e._currentValue),e._currentValue=n}function Jn(t){t._currentValue=Po.current,nt(Po)}function tu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function eu(t,e,n,i){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){var h=l.child;s=s.firstContext;t:for(;s!==null;){var m=s;s=l;for(var y=0;y<e.length;y++)if(m.context===e[y]){s.lanes|=n,m=s.alternate,m!==null&&(m.lanes|=n),tu(s.return,n,t),i||(h=null);break t}s=m.next}}else if(l.tag===18){if(h=l.return,h===null)throw Error(u(341));h.lanes|=n,s=h.alternate,s!==null&&(s.lanes|=n),tu(h,n,t),h=null}else h=l.child;if(h!==null)h.return=l;else for(h=l;h!==null;){if(h===t){h=null;break}if(l=h.sibling,l!==null){l.return=h.return,h=l;break}h=h.return}l=h}}function vl(t,e,n,i){t=null;for(var l=e,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var h=l.alternate;if(h===null)throw Error(u(387));if(h=h.memoizedProps,h!==null){var m=l.type;tn(l.pendingProps.value,h.value)||(t!==null?t.push(m):t=[m])}}else if(l===gt.current){if(h=l.alternate,h===null)throw Error(u(387));h.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Jl):t=[Jl])}l=l.return}t!==null&&eu(e,t,n,i),e.flags|=262144}function Yr(t){for(t=t.firstContext;t!==null;){if(!tn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ga(t){Ya=t,Kn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ne(t){return zd(Ya,t)}function Gr(t,e){return Ya===null&&Ga(t),zd(t,e)}function zd(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Kn===null){if(t===null)throw Error(u(308));Kn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Kn=Kn.next=e;return n}var jg=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Og=a.unstable_scheduleCallback,_g=a.unstable_NormalPriority,ye={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nu(){return{controller:new jg,data:new Map,refCount:0}}function Sl(t){t.refCount--,t.refCount===0&&Og(_g,function(){t.controller.abort()})}var wl=null,au=0,Ei=0,zi=null;function Dg(t,e){if(wl===null){var n=wl=[];au=0,Ei=lc(),zi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return au++,e.then(Ad,Ad),e}function Ad(){if(--au===0&&wl!==null){zi!==null&&(zi.status="fulfilled");var t=wl;wl=null,Ei=0,zi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function kg(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var l=0;l<n.length;l++)(0,n[l])(e)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var Td=_.S;_.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Dg(t,e),Td!==null&&Td(t,e)};var Xa=L(null);function iu(){var t=Xa.current;return t!==null?t:Pt.pooledCache}function Xr(t,e){e===null?q(Xa,Xa.current):q(Xa,e.pool)}function jd(){var t=iu();return t===null?null:{parent:ye._currentValue,pool:t}}var El=Error(u(460)),Od=Error(u(474)),Zr=Error(u(542)),lu={then:function(){}};function _d(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $r(){}function Dd(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then($r,$r),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Rd(t),t;default:if(typeof e.status=="string")e.then($r,$r);else{if(t=Pt,t!==null&&100<t.shellSuspendCounter)throw Error(u(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=i}},function(i){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Rd(t),t}throw zl=e,El}}var zl=null;function kd(){if(zl===null)throw Error(u(459));var t=zl;return zl=null,t}function Rd(t){if(t===El||t===Zr)throw Error(u(483))}var ca=!1;function ru(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function su(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function da(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,($t&2)!==0){var l=i.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),i.pending=e,e=Hr(t),yd(t,null,n),e}return Br(t,i,e,n),Hr(t)}function Al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,li(t,n)}}function ou(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?l=s=h:s=s.next=h,n=n.next}while(n!==null);s===null?l=s=e:s=s.next=e}else l=s=e;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var uu=!1;function Tl(){if(uu){var t=zi;if(t!==null)throw t}}function jl(t,e,n,i){uu=!1;var l=t.updateQueue;ca=!1;var s=l.firstBaseUpdate,h=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var y=m,D=y.next;y.next=null,h===null?s=D:h.next=D,h=y;var Y=t.alternate;Y!==null&&(Y=Y.updateQueue,m=Y.lastBaseUpdate,m!==h&&(m===null?Y.firstBaseUpdate=D:m.next=D,Y.lastBaseUpdate=y))}if(s!==null){var Z=l.baseState;h=0,Y=D=y=null,m=s;do{var R=m.lane&-536870913,C=R!==m.lane;if(C?(Ht&R)===R:(i&R)===R){R!==0&&R===Ei&&(uu=!0),Y!==null&&(Y=Y.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});t:{var Tt=t,wt=m;R=e;var Ft=n;switch(wt.tag){case 1:if(Tt=wt.payload,typeof Tt=="function"){Z=Tt.call(Ft,Z,R);break t}Z=Tt;break t;case 3:Tt.flags=Tt.flags&-65537|128;case 0:if(Tt=wt.payload,R=typeof Tt=="function"?Tt.call(Ft,Z,R):Tt,R==null)break t;Z=b({},Z,R);break t;case 2:ca=!0}}R=m.callback,R!==null&&(t.flags|=64,C&&(t.flags|=8192),C=l.callbacks,C===null?l.callbacks=[R]:C.push(R))}else C={lane:R,tag:m.tag,payload:m.payload,callback:m.callback,next:null},Y===null?(D=Y=C,y=Z):Y=Y.next=C,h|=R;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;C=m,m=C.next,C.next=null,l.lastBaseUpdate=C,l.shared.pending=null}}while(!0);Y===null&&(y=Z),l.baseState=y,l.firstBaseUpdate=D,l.lastBaseUpdate=Y,s===null&&(l.shared.lanes=0),va|=h,t.lanes=h,t.memoizedState=Z}}function Cd(t,e){if(typeof t!="function")throw Error(u(191,t));t.call(e)}function Md(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Cd(n[t],e)}var Ai=L(null),Qr=L(0);function Nd(t,e){t=na,q(Qr,t),q(Ai,e),na=t|e.baseLanes}function cu(){q(Qr,na),q(Ai,Ai.current)}function fu(){na=Qr.current,nt(Ai),nt(Qr)}var ha=0,Rt=null,Jt=null,de=null,Kr=!1,Ti=!1,Za=!1,Jr=0,Ol=0,ji=null,Rg=0;function ue(){throw Error(u(321))}function du(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function hu(t,e,n,i,l,s){return ha=s,Rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_.H=t===null||t.memoizedState===null?y1:b1,Za=!1,s=n(i,l),Za=!1,Ti&&(s=Bd(e,n,i,l)),Ud(t),s}function Ud(t){_.H=es;var e=Jt!==null&&Jt.next!==null;if(ha=0,de=Jt=Rt=null,Kr=!1,Ol=0,ji=null,e)throw Error(u(300));t===null||ze||(t=t.dependencies,t!==null&&Yr(t)&&(ze=!0))}function Bd(t,e,n,i){Rt=t;var l=0;do{if(Ti&&(ji=null),Ol=0,Ti=!1,25<=l)throw Error(u(301));if(l+=1,de=Jt=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}_.H=Lg,s=e(n,i)}while(Ti);return s}function Cg(){var t=_.H,e=t.useState()[0];return e=typeof e.then=="function"?_l(e):e,t=t.useState()[0],(Jt!==null?Jt.memoizedState:null)!==t&&(Rt.flags|=1024),e}function pu(){var t=Jr!==0;return Jr=0,t}function mu(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function gu(t){if(Kr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Kr=!1}ha=0,de=Jt=Rt=null,Ti=!1,Ol=Jr=0,ji=null}function Ze(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?Rt.memoizedState=de=t:de=de.next=t,de}function he(){if(Jt===null){var t=Rt.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var e=de===null?Rt.memoizedState:de.next;if(e!==null)de=e,Jt=t;else{if(t===null)throw Rt.alternate===null?Error(u(467)):Error(u(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},de===null?Rt.memoizedState=de=t:de=de.next=t}return de}function xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _l(t){var e=Ol;return Ol+=1,ji===null&&(ji=[]),t=Dd(ji,t,e),e=Rt,(de===null?e.memoizedState:de.next)===null&&(e=e.alternate,_.H=e===null||e.memoizedState===null?y1:b1),t}function Wr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return _l(t);if(t.$$typeof===$)return Ne(t)}throw Error(u(438,String(t)))}function yu(t){var e=null,n=Rt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=Rt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=xu(),Rt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=Yt;return e.index++,n}function Wn(t,e){return typeof e=="function"?e(t):e}function Fr(t){var e=he();return bu(e,Jt,t)}function bu(t,e,n){var i=t.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=n;var l=t.baseQueue,s=i.pending;if(s!==null){if(l!==null){var h=l.next;l.next=s.next,s.next=h}e.baseQueue=l=s,i.pending=null}if(s=t.baseState,l===null)t.memoizedState=s;else{e=l.next;var m=h=null,y=null,D=e,Y=!1;do{var Z=D.lane&-536870913;if(Z!==D.lane?(Ht&Z)===Z:(ha&Z)===Z){var R=D.revertLane;if(R===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),Z===Ei&&(Y=!0);else if((ha&R)===R){D=D.next,R===Ei&&(Y=!0);continue}else Z={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},y===null?(m=y=Z,h=s):y=y.next=Z,Rt.lanes|=R,va|=R;Z=D.action,Za&&n(s,Z),s=D.hasEagerState?D.eagerState:n(s,Z)}else R={lane:Z,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},y===null?(m=y=R,h=s):y=y.next=R,Rt.lanes|=Z,va|=Z;D=D.next}while(D!==null&&D!==e);if(y===null?h=s:y.next=m,!tn(s,t.memoizedState)&&(ze=!0,Y&&(n=zi,n!==null)))throw n;t.memoizedState=s,t.baseState=h,t.baseQueue=y,i.lastRenderedState=s}return l===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function vu(t){var e=he(),n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=t;var i=n.dispatch,l=n.pending,s=e.memoizedState;if(l!==null){n.pending=null;var h=l=l.next;do s=t(s,h.action),h=h.next;while(h!==l);tn(s,e.memoizedState)||(ze=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Hd(t,e,n){var i=Rt,l=he(),s=Gt;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=e();var h=!tn((Jt||l).memoizedState,n);h&&(l.memoizedState=n,ze=!0),l=l.queue;var m=Vd.bind(null,i,l,t);if(Dl(2048,8,m,[t]),l.getSnapshot!==e||h||de!==null&&de.memoizedState.tag&1){if(i.flags|=2048,Oi(9,Ir(),qd.bind(null,i,l,n,e),null),Pt===null)throw Error(u(349));s||(ha&124)!==0||Ld(i,e,n)}return n}function Ld(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Rt.updateQueue,e===null?(e=xu(),Rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qd(t,e,n,i){e.value=n,e.getSnapshot=i,Yd(e)&&Gd(t)}function Vd(t,e,n){return n(function(){Yd(e)&&Gd(t)})}function Yd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function Gd(t){var e=bi(t,2);e!==null&&sn(e,t,2)}function Su(t){var e=Ze();if(typeof t=="function"){var n=t;if(t=n(),Za){jt(!0);try{n()}finally{jt(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:t},e}function Xd(t,e,n,i){return t.baseState=n,bu(t,Jt,typeof i=="function"?i:Wn)}function Mg(t,e,n,i,l){if(ts(t))throw Error(u(485));if(t=e.action,t!==null){var s={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){s.listeners.push(h)}};_.T!==null?n(!0):s.isTransition=!1,i(s),n=e.pending,n===null?(s.next=e.pending=s,Zd(e,s)):(s.next=n.next,e.pending=n.next=s)}}function Zd(t,e){var n=e.action,i=e.payload,l=t.state;if(e.isTransition){var s=_.T,h={};_.T=h;try{var m=n(l,i),y=_.S;y!==null&&y(h,m),$d(t,e,m)}catch(D){wu(t,e,D)}finally{_.T=s}}else try{s=n(l,i),$d(t,e,s)}catch(D){wu(t,e,D)}}function $d(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Qd(t,e,i)},function(i){return wu(t,e,i)}):Qd(t,e,n)}function Qd(t,e,n){e.status="fulfilled",e.value=n,Kd(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Zd(t,n)))}function wu(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,Kd(e),e=e.next;while(e!==i)}t.action=null}function Kd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Jd(t,e){return e}function Wd(t,e){if(Gt){var n=Pt.formState;if(n!==null){t:{var i=Rt;if(Gt){if(re){e:{for(var l=re,s=kn;l.nodeType!==8;){if(!s){l=null;break e}if(l=zn(l.nextSibling),l===null){l=null;break e}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){re=zn(l.nextSibling),i=l.data==="F!";break t}}Va(i)}i=!1}i&&(e=n[0])}}return n=Ze(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jd,lastRenderedState:e},n.queue=i,n=m1.bind(null,Rt,i),i.dispatch=n,i=Su(!1),s=ju.bind(null,Rt,!1,i.queue),i=Ze(),l={state:e,dispatch:null,action:t,pending:null},i.queue=l,n=Mg.bind(null,Rt,l,s,n),l.dispatch=n,i.memoizedState=t,[e,n,!1]}function Fd(t){var e=he();return Id(e,Jt,t)}function Id(t,e,n){if(e=bu(t,e,Jd)[0],t=Fr(Wn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=_l(e)}catch(h){throw h===El?Zr:h}else i=e;e=he();var l=e.queue,s=l.dispatch;return n!==e.memoizedState&&(Rt.flags|=2048,Oi(9,Ir(),Ng.bind(null,l,n),null)),[i,s,t]}function Ng(t,e){t.action=e}function Pd(t){var e=he(),n=Jt;if(n!==null)return Id(e,n,t);he(),e=e.memoizedState,n=he();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Oi(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=Rt.updateQueue,e===null&&(e=xu(),Rt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Ir(){return{destroy:void 0,resource:void 0}}function t1(){return he().memoizedState}function Pr(t,e,n,i){var l=Ze();i=i===void 0?null:i,Rt.flags|=t,l.memoizedState=Oi(1|e,Ir(),n,i)}function Dl(t,e,n,i){var l=he();i=i===void 0?null:i;var s=l.memoizedState.inst;Jt!==null&&i!==null&&du(i,Jt.memoizedState.deps)?l.memoizedState=Oi(e,s,n,i):(Rt.flags|=t,l.memoizedState=Oi(1|e,s,n,i))}function e1(t,e){Pr(8390656,8,t,e)}function n1(t,e){Dl(2048,8,t,e)}function a1(t,e){return Dl(4,2,t,e)}function i1(t,e){return Dl(4,4,t,e)}function l1(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function r1(t,e,n){n=n!=null?n.concat([t]):null,Dl(4,4,l1.bind(null,e,t),n)}function Eu(){}function s1(t,e){var n=he();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&du(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function o1(t,e){var n=he();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&du(e,i[1]))return i[0];if(i=t(),Za){jt(!0);try{t()}finally{jt(!1)}}return n.memoizedState=[i,e],i}function zu(t,e,n){return n===void 0||(ha&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=f0(),Rt.lanes|=t,va|=t,n)}function u1(t,e,n,i){return tn(n,e)?n:Ai.current!==null?(t=zu(t,n,i),tn(t,e)||(ze=!0),t):(ha&42)===0?(ze=!0,t.memoizedState=n):(t=f0(),Rt.lanes|=t,va|=t,e)}function c1(t,e,n,i,l){var s=Q.p;Q.p=s!==0&&8>s?s:8;var h=_.T,m={};_.T=m,ju(t,!1,e,n);try{var y=l(),D=_.S;if(D!==null&&D(m,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var Y=kg(y,i);kl(t,e,Y,rn(t))}else kl(t,e,i,rn(t))}catch(Z){kl(t,e,{then:function(){},status:"rejected",reason:Z},rn())}finally{Q.p=s,_.T=h}}function Ug(){}function Au(t,e,n,i){if(t.tag!==5)throw Error(u(476));var l=f1(t).queue;c1(t,l,e,ft,n===null?Ug:function(){return d1(t),n(i)})}function f1(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ft,baseState:ft,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:ft},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function d1(t){var e=f1(t).next.queue;kl(t,e,{},rn())}function Tu(){return Ne(Jl)}function h1(){return he().memoizedState}function p1(){return he().memoizedState}function Bg(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=rn();t=fa(n);var i=da(e,t,n);i!==null&&(sn(i,e,n),Al(i,e,n)),e={cache:nu()},t.payload=e;return}e=e.return}}function Hg(t,e,n){var i=rn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ts(t)?g1(e,n):(n=$o(t,e,n,i),n!==null&&(sn(n,t,i),x1(n,e,i)))}function m1(t,e,n){var i=rn();kl(t,e,n,i)}function kl(t,e,n,i){var l={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ts(t))g1(e,l);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var h=e.lastRenderedState,m=s(h,n);if(l.hasEagerState=!0,l.eagerState=m,tn(m,h))return Br(t,e,l,0),Pt===null&&Ur(),!1}catch{}finally{}if(n=$o(t,e,l,i),n!==null)return sn(n,t,i),x1(n,e,i),!0}return!1}function ju(t,e,n,i){if(i={lane:2,revertLane:lc(),action:i,hasEagerState:!1,eagerState:null,next:null},ts(t)){if(e)throw Error(u(479))}else e=$o(t,n,i,2),e!==null&&sn(e,t,2)}function ts(t){var e=t.alternate;return t===Rt||e!==null&&e===Rt}function g1(t,e){Ti=Kr=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function x1(t,e,n){if((n&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,li(t,n)}}var es={readContext:Ne,use:Wr,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useLayoutEffect:ue,useInsertionEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useSyncExternalStore:ue,useId:ue,useHostTransitionStatus:ue,useFormState:ue,useActionState:ue,useOptimistic:ue,useMemoCache:ue,useCacheRefresh:ue},y1={readContext:Ne,use:Wr,useCallback:function(t,e){return Ze().memoizedState=[t,e===void 0?null:e],t},useContext:Ne,useEffect:e1,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Pr(4194308,4,l1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pr(4194308,4,t,e)},useInsertionEffect:function(t,e){Pr(4,2,t,e)},useMemo:function(t,e){var n=Ze();e=e===void 0?null:e;var i=t();if(Za){jt(!0);try{t()}finally{jt(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=Ze();if(n!==void 0){var l=n(e);if(Za){jt(!0);try{n(e)}finally{jt(!1)}}}else l=e;return i.memoizedState=i.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},i.queue=t,t=t.dispatch=Hg.bind(null,Rt,t),[i.memoizedState,t]},useRef:function(t){var e=Ze();return t={current:t},e.memoizedState=t},useState:function(t){t=Su(t);var e=t.queue,n=m1.bind(null,Rt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Eu,useDeferredValue:function(t,e){var n=Ze();return zu(n,t,e)},useTransition:function(){var t=Su(!1);return t=c1.bind(null,Rt,t.queue,!0,!1),Ze().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=Rt,l=Ze();if(Gt){if(n===void 0)throw Error(u(407));n=n()}else{if(n=e(),Pt===null)throw Error(u(349));(Ht&124)!==0||Ld(i,e,n)}l.memoizedState=n;var s={value:n,getSnapshot:e};return l.queue=s,e1(Vd.bind(null,i,s,t),[t]),i.flags|=2048,Oi(9,Ir(),qd.bind(null,i,s,n,e),null),n},useId:function(){var t=Ze(),e=Pt.identifierPrefix;if(Gt){var n=Qn,i=$n;n=(i&~(1<<32-Zt(i)-1)).toString(32)+n,e="«"+e+"R"+n,n=Jr++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=Rg++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Tu,useFormState:Wd,useActionState:Wd,useOptimistic:function(t){var e=Ze();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=ju.bind(null,Rt,!0,n),n.dispatch=e,[t,e]},useMemoCache:yu,useCacheRefresh:function(){return Ze().memoizedState=Bg.bind(null,Rt)}},b1={readContext:Ne,use:Wr,useCallback:s1,useContext:Ne,useEffect:n1,useImperativeHandle:r1,useInsertionEffect:a1,useLayoutEffect:i1,useMemo:o1,useReducer:Fr,useRef:t1,useState:function(){return Fr(Wn)},useDebugValue:Eu,useDeferredValue:function(t,e){var n=he();return u1(n,Jt.memoizedState,t,e)},useTransition:function(){var t=Fr(Wn)[0],e=he().memoizedState;return[typeof t=="boolean"?t:_l(t),e]},useSyncExternalStore:Hd,useId:h1,useHostTransitionStatus:Tu,useFormState:Fd,useActionState:Fd,useOptimistic:function(t,e){var n=he();return Xd(n,Jt,t,e)},useMemoCache:yu,useCacheRefresh:p1},Lg={readContext:Ne,use:Wr,useCallback:s1,useContext:Ne,useEffect:n1,useImperativeHandle:r1,useInsertionEffect:a1,useLayoutEffect:i1,useMemo:o1,useReducer:vu,useRef:t1,useState:function(){return vu(Wn)},useDebugValue:Eu,useDeferredValue:function(t,e){var n=he();return Jt===null?zu(n,t,e):u1(n,Jt.memoizedState,t,e)},useTransition:function(){var t=vu(Wn)[0],e=he().memoizedState;return[typeof t=="boolean"?t:_l(t),e]},useSyncExternalStore:Hd,useId:h1,useHostTransitionStatus:Tu,useFormState:Pd,useActionState:Pd,useOptimistic:function(t,e){var n=he();return Jt!==null?Xd(n,Jt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:yu,useCacheRefresh:p1},_i=null,Rl=0;function ns(t){var e=Rl;return Rl+=1,_i===null&&(_i=[]),Dd(_i,t,e)}function Cl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function as(t,e){throw e.$$typeof===O?Error(u(525)):(t=Object.prototype.toString.call(e),Error(u(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function v1(t){var e=t._init;return e(t._payload)}function S1(t){function e(A,z){if(t){var j=A.deletions;j===null?(A.deletions=[z],A.flags|=16):j.push(z)}}function n(A,z){if(!t)return null;for(;z!==null;)e(A,z),z=z.sibling;return null}function i(A){for(var z=new Map;A!==null;)A.key!==null?z.set(A.key,A):z.set(A.index,A),A=A.sibling;return z}function l(A,z){return A=Zn(A,z),A.index=0,A.sibling=null,A}function s(A,z,j){return A.index=j,t?(j=A.alternate,j!==null?(j=j.index,j<z?(A.flags|=67108866,z):j):(A.flags|=67108866,z)):(A.flags|=1048576,z)}function h(A){return t&&A.alternate===null&&(A.flags|=67108866),A}function m(A,z,j,X){return z===null||z.tag!==6?(z=Ko(j,A.mode,X),z.return=A,z):(z=l(z,j),z.return=A,z)}function y(A,z,j,X){var dt=j.type;return dt===k?Y(A,z,j.props.children,X,j.key):z!==null&&(z.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===lt&&v1(dt)===z.type)?(z=l(z,j.props),Cl(z,j),z.return=A,z):(z=Lr(j.type,j.key,j.props,null,A.mode,X),Cl(z,j),z.return=A,z)}function D(A,z,j,X){return z===null||z.tag!==4||z.stateNode.containerInfo!==j.containerInfo||z.stateNode.implementation!==j.implementation?(z=Jo(j,A.mode,X),z.return=A,z):(z=l(z,j.children||[]),z.return=A,z)}function Y(A,z,j,X,dt){return z===null||z.tag!==7?(z=Ba(j,A.mode,X,dt),z.return=A,z):(z=l(z,j),z.return=A,z)}function Z(A,z,j){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Ko(""+z,A.mode,j),z.return=A,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case E:return j=Lr(z.type,z.key,z.props,null,A.mode,j),Cl(j,z),j.return=A,j;case K:return z=Jo(z,A.mode,j),z.return=A,z;case lt:var X=z._init;return z=X(z._payload),Z(A,z,j)}if(yt(z)||I(z))return z=Ba(z,A.mode,j,null),z.return=A,z;if(typeof z.then=="function")return Z(A,ns(z),j);if(z.$$typeof===$)return Z(A,Gr(A,z),j);as(A,z)}return null}function R(A,z,j,X){var dt=z!==null?z.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return dt!==null?null:m(A,z,""+j,X);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case E:return j.key===dt?y(A,z,j,X):null;case K:return j.key===dt?D(A,z,j,X):null;case lt:return dt=j._init,j=dt(j._payload),R(A,z,j,X)}if(yt(j)||I(j))return dt!==null?null:Y(A,z,j,X,null);if(typeof j.then=="function")return R(A,z,ns(j),X);if(j.$$typeof===$)return R(A,z,Gr(A,j),X);as(A,j)}return null}function C(A,z,j,X,dt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return A=A.get(j)||null,m(z,A,""+X,dt);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case E:return A=A.get(X.key===null?j:X.key)||null,y(z,A,X,dt);case K:return A=A.get(X.key===null?j:X.key)||null,D(z,A,X,dt);case lt:var Mt=X._init;return X=Mt(X._payload),C(A,z,j,X,dt)}if(yt(X)||I(X))return A=A.get(j)||null,Y(z,A,X,dt,null);if(typeof X.then=="function")return C(A,z,j,ns(X),dt);if(X.$$typeof===$)return C(A,z,j,Gr(z,X),dt);as(z,X)}return null}function Tt(A,z,j,X){for(var dt=null,Mt=null,mt=z,Et=z=0,Te=null;mt!==null&&Et<j.length;Et++){mt.index>Et?(Te=mt,mt=null):Te=mt.sibling;var Vt=R(A,mt,j[Et],X);if(Vt===null){mt===null&&(mt=Te);break}t&&mt&&Vt.alternate===null&&e(A,mt),z=s(Vt,z,Et),Mt===null?dt=Vt:Mt.sibling=Vt,Mt=Vt,mt=Te}if(Et===j.length)return n(A,mt),Gt&&La(A,Et),dt;if(mt===null){for(;Et<j.length;Et++)mt=Z(A,j[Et],X),mt!==null&&(z=s(mt,z,Et),Mt===null?dt=mt:Mt.sibling=mt,Mt=mt);return Gt&&La(A,Et),dt}for(mt=i(mt);Et<j.length;Et++)Te=C(mt,A,Et,j[Et],X),Te!==null&&(t&&Te.alternate!==null&&mt.delete(Te.key===null?Et:Te.key),z=s(Te,z,Et),Mt===null?dt=Te:Mt.sibling=Te,Mt=Te);return t&&mt.forEach(function(_a){return e(A,_a)}),Gt&&La(A,Et),dt}function wt(A,z,j,X){if(j==null)throw Error(u(151));for(var dt=null,Mt=null,mt=z,Et=z=0,Te=null,Vt=j.next();mt!==null&&!Vt.done;Et++,Vt=j.next()){mt.index>Et?(Te=mt,mt=null):Te=mt.sibling;var _a=R(A,mt,Vt.value,X);if(_a===null){mt===null&&(mt=Te);break}t&&mt&&_a.alternate===null&&e(A,mt),z=s(_a,z,Et),Mt===null?dt=_a:Mt.sibling=_a,Mt=_a,mt=Te}if(Vt.done)return n(A,mt),Gt&&La(A,Et),dt;if(mt===null){for(;!Vt.done;Et++,Vt=j.next())Vt=Z(A,Vt.value,X),Vt!==null&&(z=s(Vt,z,Et),Mt===null?dt=Vt:Mt.sibling=Vt,Mt=Vt);return Gt&&La(A,Et),dt}for(mt=i(mt);!Vt.done;Et++,Vt=j.next())Vt=C(mt,A,Et,Vt.value,X),Vt!==null&&(t&&Vt.alternate!==null&&mt.delete(Vt.key===null?Et:Vt.key),z=s(Vt,z,Et),Mt===null?dt=Vt:Mt.sibling=Vt,Mt=Vt);return t&&mt.forEach(function(qx){return e(A,qx)}),Gt&&La(A,Et),dt}function Ft(A,z,j,X){if(typeof j=="object"&&j!==null&&j.type===k&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case E:t:{for(var dt=j.key;z!==null;){if(z.key===dt){if(dt=j.type,dt===k){if(z.tag===7){n(A,z.sibling),X=l(z,j.props.children),X.return=A,A=X;break t}}else if(z.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===lt&&v1(dt)===z.type){n(A,z.sibling),X=l(z,j.props),Cl(X,j),X.return=A,A=X;break t}n(A,z);break}else e(A,z);z=z.sibling}j.type===k?(X=Ba(j.props.children,A.mode,X,j.key),X.return=A,A=X):(X=Lr(j.type,j.key,j.props,null,A.mode,X),Cl(X,j),X.return=A,A=X)}return h(A);case K:t:{for(dt=j.key;z!==null;){if(z.key===dt)if(z.tag===4&&z.stateNode.containerInfo===j.containerInfo&&z.stateNode.implementation===j.implementation){n(A,z.sibling),X=l(z,j.children||[]),X.return=A,A=X;break t}else{n(A,z);break}else e(A,z);z=z.sibling}X=Jo(j,A.mode,X),X.return=A,A=X}return h(A);case lt:return dt=j._init,j=dt(j._payload),Ft(A,z,j,X)}if(yt(j))return Tt(A,z,j,X);if(I(j)){if(dt=I(j),typeof dt!="function")throw Error(u(150));return j=dt.call(j),wt(A,z,j,X)}if(typeof j.then=="function")return Ft(A,z,ns(j),X);if(j.$$typeof===$)return Ft(A,z,Gr(A,j),X);as(A,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,z!==null&&z.tag===6?(n(A,z.sibling),X=l(z,j),X.return=A,A=X):(n(A,z),X=Ko(j,A.mode,X),X.return=A,A=X),h(A)):n(A,z)}return function(A,z,j,X){try{Rl=0;var dt=Ft(A,z,j,X);return _i=null,dt}catch(mt){if(mt===El||mt===Zr)throw mt;var Mt=en(29,mt,null,A.mode);return Mt.lanes=X,Mt.return=A,Mt}finally{}}}var Di=S1(!0),w1=S1(!1),gn=L(null),Rn=null;function pa(t){var e=t.alternate;q(be,be.current&1),q(gn,t),Rn===null&&(e===null||Ai.current!==null||e.memoizedState!==null)&&(Rn=t)}function E1(t){if(t.tag===22){if(q(be,be.current),q(gn,t),Rn===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Rn=t)}}else ma()}function ma(){q(be,be.current),q(gn,gn.current)}function Fn(t){nt(gn),Rn===t&&(Rn=null),nt(be)}var be=L(0);function is(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||xc(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Ou(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:b({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _u={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),l=fa(i);l.payload=e,n!=null&&(l.callback=n),e=da(t,l,i),e!==null&&(sn(e,t,i),Al(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),l=fa(i);l.tag=1,l.payload=e,n!=null&&(l.callback=n),e=da(t,l,i),e!==null&&(sn(e,t,i),Al(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=fa(n);i.tag=2,e!=null&&(i.callback=e),e=da(t,i,n),e!==null&&(sn(e,t,n),Al(e,t,n))}};function z1(t,e,n,i,l,s,h){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,h):e.prototype&&e.prototype.isPureReactComponent?!ml(n,i)||!ml(l,s):!0}function A1(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_u.enqueueReplaceState(e,e.state,null)}function $a(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=b({},n));for(var l in t)n[l]===void 0&&(n[l]=t[l])}return n}var ls=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function T1(t){ls(t)}function j1(t){console.error(t)}function O1(t){ls(t)}function rs(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function _1(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Du(t,e,n){return n=fa(n),n.tag=3,n.payload={element:null},n.callback=function(){rs(t,e)},n}function D1(t){return t=fa(t),t.tag=3,t}function k1(t,e,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var s=i.value;t.payload=function(){return l(s)},t.callback=function(){_1(e,n,i)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(t.callback=function(){_1(e,n,i),typeof l!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})})}function qg(t,e,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&vl(e,n,l,!0),n=gn.current,n!==null){switch(n.tag){case 13:return Rn===null?tc():n.alternate===null&&se===0&&(se=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===lu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),nc(t,i,l)),!1;case 22:return n.flags|=65536,i===lu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),nc(t,i,l)),!1}throw Error(u(435,n.tag))}return nc(t,i,l),tc(),!1}if(Gt)return e=gn.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,i!==Io&&(t=Error(u(422),{cause:i}),bl(dn(t,n)))):(i!==Io&&(e=Error(u(423),{cause:i}),bl(dn(e,n))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,i=dn(i,n),l=Du(t.stateNode,i,l),ou(t,l),se!==4&&(se=2)),!1;var s=Error(u(520),{cause:i});if(s=dn(s,n),ql===null?ql=[s]:ql.push(s),se!==4&&(se=2),e===null)return!0;i=dn(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=l&-l,n.lanes|=t,t=Du(n.stateNode,i,t),ou(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Sa===null||!Sa.has(s))))return n.flags|=65536,l&=-l,n.lanes|=l,l=D1(l),k1(l,t,n,i),ou(n,l),!1}n=n.return}while(n!==null);return!1}var R1=Error(u(461)),ze=!1;function Re(t,e,n,i){e.child=t===null?w1(e,null,n,i):Di(e,t.child,n,i)}function C1(t,e,n,i,l){n=n.render;var s=e.ref;if("ref"in i){var h={};for(var m in i)m!=="ref"&&(h[m]=i[m])}else h=i;return Ga(e),i=hu(t,e,n,h,s,l),m=pu(),t!==null&&!ze?(mu(t,e,l),In(t,e,l)):(Gt&&m&&Wo(e),e.flags|=1,Re(t,e,i,l),e.child)}function M1(t,e,n,i,l){if(t===null){var s=n.type;return typeof s=="function"&&!Qo(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,N1(t,e,s,i,l)):(t=Lr(n.type,null,i,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!Hu(t,l)){var h=s.memoizedProps;if(n=n.compare,n=n!==null?n:ml,n(h,i)&&t.ref===e.ref)return In(t,e,l)}return e.flags|=1,t=Zn(s,i),t.ref=e.ref,t.return=e,e.child=t}function N1(t,e,n,i,l){if(t!==null){var s=t.memoizedProps;if(ml(s,i)&&t.ref===e.ref)if(ze=!1,e.pendingProps=i=s,Hu(t,l))(t.flags&131072)!==0&&(ze=!0);else return e.lanes=t.lanes,In(t,e,l)}return ku(t,e,n,i,l)}function U1(t,e,n){var i=e.pendingProps,l=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden"){if((e.flags&128)!==0){if(i=s!==null?s.baseLanes|n:n,t!==null){for(l=e.child=t.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;e.childLanes=s&~i}else e.childLanes=0,e.child=null;return B1(t,e,i,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Xr(e,s!==null?s.cachePool:null),s!==null?Nd(e,s):cu(),E1(e);else return e.lanes=e.childLanes=536870912,B1(t,e,s!==null?s.baseLanes|n:n,n)}else s!==null?(Xr(e,s.cachePool),Nd(e,s),ma(),e.memoizedState=null):(t!==null&&Xr(e,null),cu(),ma());return Re(t,e,l,n),e.child}function B1(t,e,n,i){var l=iu();return l=l===null?null:{parent:ye._currentValue,pool:l},e.memoizedState={baseLanes:n,cachePool:l},t!==null&&Xr(e,null),cu(),E1(e),t!==null&&vl(t,e,i,!0),null}function ss(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function ku(t,e,n,i,l){return Ga(e),n=hu(t,e,n,i,void 0,l),i=pu(),t!==null&&!ze?(mu(t,e,l),In(t,e,l)):(Gt&&i&&Wo(e),e.flags|=1,Re(t,e,n,l),e.child)}function H1(t,e,n,i,l,s){return Ga(e),e.updateQueue=null,n=Bd(e,i,n,l),Ud(t),i=pu(),t!==null&&!ze?(mu(t,e,s),In(t,e,s)):(Gt&&i&&Wo(e),e.flags|=1,Re(t,e,n,s),e.child)}function L1(t,e,n,i,l){if(Ga(e),e.stateNode===null){var s=vi,h=n.contextType;typeof h=="object"&&h!==null&&(s=Ne(h)),s=new n(i,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=_u,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=i,s.state=e.memoizedState,s.refs={},ru(e),h=n.contextType,s.context=typeof h=="object"&&h!==null?Ne(h):vi,s.state=e.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Ou(e,n,h,i),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(h=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),h!==s.state&&_u.enqueueReplaceState(s,s.state,null),jl(e,i,s,l),Tl(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){s=e.stateNode;var m=e.memoizedProps,y=$a(n,m);s.props=y;var D=s.context,Y=n.contextType;h=vi,typeof Y=="object"&&Y!==null&&(h=Ne(Y));var Z=n.getDerivedStateFromProps;Y=typeof Z=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=e.pendingProps!==m,Y||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||D!==h)&&A1(e,s,i,h),ca=!1;var R=e.memoizedState;s.state=R,jl(e,i,s,l),Tl(),D=e.memoizedState,m||R!==D||ca?(typeof Z=="function"&&(Ou(e,n,Z,i),D=e.memoizedState),(y=ca||z1(e,n,y,i,R,D,h))?(Y||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=D),s.props=i,s.state=D,s.context=h,i=y):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,su(t,e),h=e.memoizedProps,Y=$a(n,h),s.props=Y,Z=e.pendingProps,R=s.context,D=n.contextType,y=vi,typeof D=="object"&&D!==null&&(y=Ne(D)),m=n.getDerivedStateFromProps,(D=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(h!==Z||R!==y)&&A1(e,s,i,y),ca=!1,R=e.memoizedState,s.state=R,jl(e,i,s,l),Tl();var C=e.memoizedState;h!==Z||R!==C||ca||t!==null&&t.dependencies!==null&&Yr(t.dependencies)?(typeof m=="function"&&(Ou(e,n,m,i),C=e.memoizedState),(Y=ca||z1(e,n,Y,i,R,C,y)||t!==null&&t.dependencies!==null&&Yr(t.dependencies))?(D||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,C,y),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,C,y)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||h===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=C),s.props=i,s.state=C,s.context=y,i=Y):(typeof s.componentDidUpdate!="function"||h===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),i=!1)}return s=i,ss(t,e),i=(e.flags&128)!==0,s||i?(s=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&i?(e.child=Di(e,t.child,null,l),e.child=Di(e,null,n,l)):Re(t,e,n,l),e.memoizedState=s.state,t=e.child):t=In(t,e,l),t}function q1(t,e,n,i){return yl(),e.flags|=256,Re(t,e,n,i),e.child}var Ru={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cu(t){return{baseLanes:t,cachePool:jd()}}function Mu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=xn),t}function V1(t,e,n){var i=e.pendingProps,l=!1,s=(e.flags&128)!==0,h;if((h=s)||(h=t!==null&&t.memoizedState===null?!1:(be.current&2)!==0),h&&(l=!0,e.flags&=-129),h=(e.flags&32)!==0,e.flags&=-33,t===null){if(Gt){if(l?pa(e):ma(),Gt){var m=re,y;if(y=m){t:{for(y=m,m=kn;y.nodeType!==8;){if(!m){m=null;break t}if(y=zn(y.nextSibling),y===null){m=null;break t}}m=y}m!==null?(e.memoizedState={dehydrated:m,treeContext:Ha!==null?{id:$n,overflow:Qn}:null,retryLane:536870912,hydrationErrors:null},y=en(18,null,null,0),y.stateNode=m,y.return=e,e.child=y,Le=e,re=null,y=!0):y=!1}y||Va(e)}if(m=e.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return xc(m)?e.lanes=32:e.lanes=536870912,null;Fn(e)}return m=i.children,i=i.fallback,l?(ma(),l=e.mode,m=os({mode:"hidden",children:m},l),i=Ba(i,l,n,null),m.return=e,i.return=e,m.sibling=i,e.child=m,l=e.child,l.memoizedState=Cu(n),l.childLanes=Mu(t,h,n),e.memoizedState=Ru,i):(pa(e),Nu(e,m))}if(y=t.memoizedState,y!==null&&(m=y.dehydrated,m!==null)){if(s)e.flags&256?(pa(e),e.flags&=-257,e=Uu(t,e,n)):e.memoizedState!==null?(ma(),e.child=t.child,e.flags|=128,e=null):(ma(),l=i.fallback,m=e.mode,i=os({mode:"visible",children:i.children},m),l=Ba(l,m,n,null),l.flags|=2,i.return=e,l.return=e,i.sibling=l,e.child=i,Di(e,t.child,null,n),i=e.child,i.memoizedState=Cu(n),i.childLanes=Mu(t,h,n),e.memoizedState=Ru,e=l);else if(pa(e),xc(m)){if(h=m.nextSibling&&m.nextSibling.dataset,h)var D=h.dgst;h=D,i=Error(u(419)),i.stack="",i.digest=h,bl({value:i,source:null,stack:null}),e=Uu(t,e,n)}else if(ze||vl(t,e,n,!1),h=(n&t.childLanes)!==0,ze||h){if(h=Pt,h!==null&&(i=n&-n,i=(i&42)!==0?1:ll(i),i=(i&(h.suspendedLanes|n))!==0?0:i,i!==0&&i!==y.retryLane))throw y.retryLane=i,bi(t,i),sn(h,t,i),R1;m.data==="$?"||tc(),e=Uu(t,e,n)}else m.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=y.treeContext,re=zn(m.nextSibling),Le=e,Gt=!0,qa=null,kn=!1,t!==null&&(pn[mn++]=$n,pn[mn++]=Qn,pn[mn++]=Ha,$n=t.id,Qn=t.overflow,Ha=e),e=Nu(e,i.children),e.flags|=4096);return e}return l?(ma(),l=i.fallback,m=e.mode,y=t.child,D=y.sibling,i=Zn(y,{mode:"hidden",children:i.children}),i.subtreeFlags=y.subtreeFlags&65011712,D!==null?l=Zn(D,l):(l=Ba(l,m,n,null),l.flags|=2),l.return=e,i.return=e,i.sibling=l,e.child=i,i=l,l=e.child,m=t.child.memoizedState,m===null?m=Cu(n):(y=m.cachePool,y!==null?(D=ye._currentValue,y=y.parent!==D?{parent:D,pool:D}:y):y=jd(),m={baseLanes:m.baseLanes|n,cachePool:y}),l.memoizedState=m,l.childLanes=Mu(t,h,n),e.memoizedState=Ru,i):(pa(e),n=t.child,t=n.sibling,n=Zn(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(h=e.deletions,h===null?(e.deletions=[t],e.flags|=16):h.push(t)),e.child=n,e.memoizedState=null,n)}function Nu(t,e){return e=os({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function os(t,e){return t=en(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Uu(t,e,n){return Di(e,t.child,null,n),t=Nu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Y1(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),tu(t.return,e,n)}function Bu(t,e,n,i,l){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=l)}function G1(t,e,n){var i=e.pendingProps,l=i.revealOrder,s=i.tail;if(Re(t,e,i.children,n),i=be.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Y1(t,n,e);else if(t.tag===19)Y1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}switch(q(be,i),l){case"forwards":for(n=e.child,l=null;n!==null;)t=n.alternate,t!==null&&is(t)===null&&(l=n),n=n.sibling;n=l,n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null),Bu(e,!1,l,n,s);break;case"backwards":for(n=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&is(t)===null){e.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}Bu(e,!0,n,null,s);break;case"together":Bu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function In(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),va|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(vl(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(u(153));if(e.child!==null){for(t=e.child,n=Zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Hu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Yr(t)))}function Vg(t,e,n){switch(e.tag){case 3:pt(e,e.stateNode.containerInfo),ua(e,ye,t.memoizedState.cache),yl();break;case 27:case 5:ae(e);break;case 4:pt(e,e.stateNode.containerInfo);break;case 10:ua(e,e.type,e.memoizedProps.value);break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(pa(e),e.flags|=128,null):(n&e.child.childLanes)!==0?V1(t,e,n):(pa(e),t=In(t,e,n),t!==null?t.sibling:null);pa(e);break;case 19:var l=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(vl(t,e,n,!1),i=(n&e.childLanes)!==0),l){if(i)return G1(t,e,n);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),q(be,be.current),i)break;return null;case 22:case 23:return e.lanes=0,U1(t,e,n);case 24:ua(e,ye,t.memoizedState.cache)}return In(t,e,n)}function X1(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)ze=!0;else{if(!Hu(t,n)&&(e.flags&128)===0)return ze=!1,Vg(t,e,n);ze=(t.flags&131072)!==0}else ze=!1,Gt&&(e.flags&1048576)!==0&&vd(e,Vr,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var i=e.elementType,l=i._init;if(i=l(i._payload),e.type=i,typeof i=="function")Qo(i)?(t=$a(i,t),e.tag=1,e=L1(null,e,i,t,n)):(e.tag=0,e=ku(null,e,i,t,n));else{if(i!=null){if(l=i.$$typeof,l===rt){e.tag=11,e=C1(null,e,i,t,n);break t}else if(l===J){e.tag=14,e=M1(null,e,i,t,n);break t}}throw e=xt(i)||i,Error(u(306,e,""))}}return e;case 0:return ku(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,l=$a(i,e.pendingProps),L1(t,e,i,l,n);case 3:t:{if(pt(e,e.stateNode.containerInfo),t===null)throw Error(u(387));i=e.pendingProps;var s=e.memoizedState;l=s.element,su(t,e),jl(e,i,null,n);var h=e.memoizedState;if(i=h.cache,ua(e,ye,i),i!==s.cache&&eu(e,[ye],n,!0),Tl(),i=h.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:h.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=q1(t,e,i,n);break t}else if(i!==l){l=dn(Error(u(424)),e),bl(l),e=q1(t,e,i,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(re=zn(t.firstChild),Le=e,Gt=!0,qa=null,kn=!0,n=w1(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(yl(),i===l){e=In(t,e,n);break t}Re(t,e,i,n)}e=e.child}return e;case 26:return ss(t,e),t===null?(n=K0(e.type,null,e.pendingProps,null))?e.memoizedState=n:Gt||(n=e.type,t=e.pendingProps,i=ws(ut.current).createElement(n),i[Kt]=e,i[oe]=t,Me(i,n,t),Ee(i),e.stateNode=i):e.memoizedState=K0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ae(e),t===null&&Gt&&(i=e.stateNode=Z0(e.type,e.pendingProps,ut.current),Le=e,kn=!0,l=re,za(e.type)?(yc=l,re=zn(i.firstChild)):re=l),Re(t,e,e.pendingProps.children,n),ss(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Gt&&((l=i=re)&&(i=mx(i,e.type,e.pendingProps,kn),i!==null?(e.stateNode=i,Le=e,re=zn(i.firstChild),kn=!1,l=!0):l=!1),l||Va(e)),ae(e),l=e.type,s=e.pendingProps,h=t!==null?t.memoizedProps:null,i=s.children,pc(l,s)?i=null:h!==null&&pc(l,h)&&(e.flags|=32),e.memoizedState!==null&&(l=hu(t,e,Cg,null,null,n),Jl._currentValue=l),ss(t,e),Re(t,e,i,n),e.child;case 6:return t===null&&Gt&&((t=n=re)&&(n=gx(n,e.pendingProps,kn),n!==null?(e.stateNode=n,Le=e,re=null,t=!0):t=!1),t||Va(e)),null;case 13:return V1(t,e,n);case 4:return pt(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Di(e,null,i,n):Re(t,e,i,n),e.child;case 11:return C1(t,e,e.type,e.pendingProps,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,ua(e,e.type,i.value),Re(t,e,i.children,n),e.child;case 9:return l=e.type._context,i=e.pendingProps.children,Ga(e),l=Ne(l),i=i(l),e.flags|=1,Re(t,e,i,n),e.child;case 14:return M1(t,e,e.type,e.pendingProps,n);case 15:return N1(t,e,e.type,e.pendingProps,n);case 19:return G1(t,e,n);case 31:return i=e.pendingProps,n=e.mode,i={mode:i.mode,children:i.children},t===null?(n=os(i,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Zn(t.child,i),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return U1(t,e,n);case 24:return Ga(e),i=Ne(ye),t===null?(l=iu(),l===null&&(l=Pt,s=nu(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=n),l=s),e.memoizedState={parent:i,cache:l},ru(e),ua(e,ye,l)):((t.lanes&n)!==0&&(su(t,e),jl(e,null,null,n),Tl()),l=t.memoizedState,s=e.memoizedState,l.parent!==i?(l={parent:i,cache:i},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),ua(e,ye,i)):(i=s.cache,ua(e,ye,i),i!==l.cache&&eu(e,[ye],n,!0))),Re(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(u(156,e.tag))}function Pn(t){t.flags|=4}function Z1(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!P0(e)){if(e=gn.current,e!==null&&((Ht&4194048)===Ht?Rn!==null:(Ht&62914560)!==Ht&&(Ht&536870912)===0||e!==Rn))throw zl=lu,Od;t.flags|=8192}}function us(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Er():536870912,t.lanes|=e,Mi|=e)}function Ml(t,e){if(!Gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function le(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Yg(t,e,n){var i=e.pendingProps;switch(Fo(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(e),null;case 1:return le(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Jn(ye),kt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(xl(e)?Pn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ed())),le(e),null;case 26:return n=e.memoizedState,t===null?(Pn(e),n!==null?(le(e),Z1(e,n)):(le(e),e.flags&=-16777217)):n?n!==t.memoizedState?(Pn(e),le(e),Z1(e,n)):(le(e),e.flags&=-16777217):(t.memoizedProps!==i&&Pn(e),le(e),e.flags&=-16777217),null;case 27:ve(e),n=ut.current;var l=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Pn(e);else{if(!i){if(e.stateNode===null)throw Error(u(166));return le(e),null}t=F.current,xl(e)?Sd(e):(t=Z0(l,i,n),e.stateNode=t,Pn(e))}return le(e),null;case 5:if(ve(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Pn(e);else{if(!i){if(e.stateNode===null)throw Error(u(166));return le(e),null}if(t=F.current,xl(e))Sd(e);else{switch(l=ws(ut.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?t.multiple=!0:i.size&&(t.size=i.size);break;default:t=typeof i.is=="string"?l.createElement(n,{is:i.is}):l.createElement(n)}}t[Kt]=e,t[oe]=i;t:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break t;for(;l.sibling===null;){if(l.return===null||l.return===e)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=t;t:switch(Me(t,n,i),n){case"button":case"input":case"select":case"textarea":t=!!i.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Pn(e)}}return le(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Pn(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(u(166));if(t=ut.current,xl(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,l=Le,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}t[Kt]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||H0(t.nodeValue,n)),t||Va(e)}else t=ws(t).createTextNode(i),t[Kt]=e,e.stateNode=t}return le(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=xl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!l)throw Error(u(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[Kt]=e}else yl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;le(e),l=!1}else l=Ed(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Fn(e),e):(Fn(e),null)}if(Fn(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=i!==null,t=t!==null&&t.memoizedState!==null,n){i=e.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool);var s=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==l&&(i.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),us(e,e.updateQueue),le(e),null;case 4:return kt(),t===null&&uc(e.stateNode.containerInfo),le(e),null;case 10:return Jn(e.type),le(e),null;case 19:if(nt(be),l=e.memoizedState,l===null)return le(e),null;if(i=(e.flags&128)!==0,s=l.rendering,s===null)if(i)Ml(l,!1);else{if(se!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=is(t),s!==null){for(e.flags|=128,Ml(l,!1),t=s.updateQueue,e.updateQueue=t,us(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)bd(n,t),n=n.sibling;return q(be,be.current&1|2),e.child}t=t.sibling}l.tail!==null&&ie()>ds&&(e.flags|=128,i=!0,Ml(l,!1),e.lanes=4194304)}else{if(!i)if(t=is(s),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,us(e,t),Ml(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!Gt)return le(e),null}else 2*ie()-l.renderingStartTime>ds&&n!==536870912&&(e.flags|=128,i=!0,Ml(l,!1),e.lanes=4194304);l.isBackwards?(s.sibling=e.child,e.child=s):(t=l.last,t!==null?t.sibling=s:e.child=s,l.last=s)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ie(),e.sibling=null,t=be.current,q(be,i?t&1|2:t&1),e):(le(e),null);case 22:case 23:return Fn(e),fu(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(n&536870912)!==0&&(e.flags&128)===0&&(le(e),e.subtreeFlags&6&&(e.flags|=8192)):le(e),n=e.updateQueue,n!==null&&us(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&nt(Xa),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Jn(ye),le(e),null;case 25:return null;case 30:return null}throw Error(u(156,e.tag))}function Gg(t,e){switch(Fo(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Jn(ye),kt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ve(e),null;case 13:if(Fn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(u(340));yl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nt(be),null;case 4:return kt(),null;case 10:return Jn(e.type),null;case 22:case 23:return Fn(e),fu(),t!==null&&nt(Xa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Jn(ye),null;case 25:return null;default:return null}}function $1(t,e){switch(Fo(e),e.tag){case 3:Jn(ye),kt();break;case 26:case 27:case 5:ve(e);break;case 4:kt();break;case 13:Fn(e);break;case 19:nt(be);break;case 10:Jn(e.type);break;case 22:case 23:Fn(e),fu(),t!==null&&nt(Xa);break;case 24:Jn(ye)}}function Nl(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&t)===t){i=void 0;var s=n.create,h=n.inst;i=s(),h.destroy=i}n=n.next}while(n!==l)}}catch(m){It(e,e.return,m)}}function ga(t,e,n){try{var i=e.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var s=l.next;i=s;do{if((i.tag&t)===t){var h=i.inst,m=h.destroy;if(m!==void 0){h.destroy=void 0,l=e;var y=n,D=m;try{D()}catch(Y){It(l,y,Y)}}}i=i.next}while(i!==s)}}catch(Y){It(e,e.return,Y)}}function Q1(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Md(e,n)}catch(i){It(t,t.return,i)}}}function K1(t,e,n){n.props=$a(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){It(t,e,i)}}function Ul(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(l){It(t,e,l)}}function Cn(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){It(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){It(t,e,l)}else n.current=null}function J1(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){It(t,t.return,l)}}function Lu(t,e,n){try{var i=t.stateNode;cx(i,t.type,n,e),i[oe]=e}catch(l){It(t,t.return,l)}}function W1(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&za(t.type)||t.tag===4}function qu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||W1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&za(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ss));else if(i!==4&&(i===27&&za(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Vu(t,e,n),t=t.sibling;t!==null;)Vu(t,e,n),t=t.sibling}function cs(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&za(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(cs(t,e,n),t=t.sibling;t!==null;)cs(t,e,n),t=t.sibling}function F1(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Me(e,i,n),e[Kt]=t,e[oe]=n}catch(s){It(t,t.return,s)}}var ta=!1,ce=!1,Yu=!1,I1=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Xg(t,e){if(t=t.containerInfo,dc=Os,t=ud(t),qo(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var h=0,m=-1,y=-1,D=0,Y=0,Z=t,R=null;e:for(;;){for(var C;Z!==n||l!==0&&Z.nodeType!==3||(m=h+l),Z!==s||i!==0&&Z.nodeType!==3||(y=h+i),Z.nodeType===3&&(h+=Z.nodeValue.length),(C=Z.firstChild)!==null;)R=Z,Z=C;for(;;){if(Z===t)break e;if(R===n&&++D===l&&(m=h),R===s&&++Y===i&&(y=h),(C=Z.nextSibling)!==null)break;Z=R,R=Z.parentNode}Z=C}n=m===-1||y===-1?null:{start:m,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(hc={focusedElem:t,selectionRange:n},Os=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){switch(e=Ae,s=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&s!==null){t=void 0,n=e,l=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var Tt=$a(n.type,l,n.elementType===n.type);t=i.getSnapshotBeforeUpdate(Tt,s),i.__reactInternalSnapshotBeforeUpdate=t}catch(wt){It(n,n.return,wt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)gc(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":gc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(u(163))}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}}function P1(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:xa(t,n),i&4&&Nl(5,n);break;case 1:if(xa(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(h){It(n,n.return,h)}else{var l=$a(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(h){It(n,n.return,h)}}i&64&&Q1(n),i&512&&Ul(n,n.return);break;case 3:if(xa(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Md(t,e)}catch(h){It(n,n.return,h)}}break;case 27:e===null&&i&4&&F1(n);case 26:case 5:xa(t,n),e===null&&i&4&&J1(n),i&512&&Ul(n,n.return);break;case 12:xa(t,n);break;case 13:xa(t,n),i&4&&n0(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Pg.bind(null,n),xx(t,n))));break;case 22:if(i=n.memoizedState!==null||ta,!i){e=e!==null&&e.memoizedState!==null||ce,l=ta;var s=ce;ta=i,(ce=e)&&!s?ya(t,n,(n.subtreeFlags&8772)!==0):xa(t,n),ta=l,ce=s}break;case 30:break;default:xa(t,n)}}function t0(t){var e=t.alternate;e!==null&&(t.alternate=null,t0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&So(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ee=null,$e=!1;function ea(t,e,n){for(n=n.child;n!==null;)e0(t,e,n),n=n.sibling}function e0(t,e,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(ct,n)}catch{}switch(n.tag){case 26:ce||Cn(n,e),ea(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ce||Cn(n,e);var i=ee,l=$e;za(n.type)&&(ee=n.stateNode,$e=!1),ea(t,e,n),Zl(n.stateNode),ee=i,$e=l;break;case 5:ce||Cn(n,e);case 6:if(i=ee,l=$e,ee=null,ea(t,e,n),ee=i,$e=l,ee!==null)if($e)try{(ee.nodeType===9?ee.body:ee.nodeName==="HTML"?ee.ownerDocument.body:ee).removeChild(n.stateNode)}catch(s){It(n,e,s)}else try{ee.removeChild(n.stateNode)}catch(s){It(n,e,s)}break;case 18:ee!==null&&($e?(t=ee,G0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Pl(t)):G0(ee,n.stateNode));break;case 4:i=ee,l=$e,ee=n.stateNode.containerInfo,$e=!0,ea(t,e,n),ee=i,$e=l;break;case 0:case 11:case 14:case 15:ce||ga(2,n,e),ce||ga(4,n,e),ea(t,e,n);break;case 1:ce||(Cn(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&K1(n,e,i)),ea(t,e,n);break;case 21:ea(t,e,n);break;case 22:ce=(i=ce)||n.memoizedState!==null,ea(t,e,n),ce=i;break;default:ea(t,e,n)}}function n0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Pl(t)}catch(n){It(e,e.return,n)}}function Zg(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new I1),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new I1),e;default:throw Error(u(435,t.tag))}}function Gu(t,e){var n=Zg(t);e.forEach(function(i){var l=tx.bind(null,t,i);n.has(i)||(n.add(i),i.then(l,l))})}function nn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i],s=t,h=e,m=h;t:for(;m!==null;){switch(m.tag){case 27:if(za(m.type)){ee=m.stateNode,$e=!1;break t}break;case 5:ee=m.stateNode,$e=!1;break t;case 3:case 4:ee=m.stateNode.containerInfo,$e=!0;break t}m=m.return}if(ee===null)throw Error(u(160));e0(s,h,l),ee=null,$e=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)a0(e,t),e=e.sibling}var En=null;function a0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:nn(e,t),an(t),i&4&&(ga(3,t,t.return),Nl(3,t),ga(5,t,t.return));break;case 1:nn(e,t),an(t),i&512&&(ce||n===null||Cn(n,n.return)),i&64&&ta&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var l=En;if(nn(e,t),an(t),i&512&&(ce||n===null||Cn(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){t:{i=t.type,n=t.memoizedProps,l=l.ownerDocument||l;e:switch(i){case"title":s=l.getElementsByTagName("title")[0],(!s||s[rl]||s[Kt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(i),l.head.insertBefore(s,l.querySelector("head > title"))),Me(s,i,n),s[Kt]=t,Ee(s),i=s;break t;case"link":var h=F0("link","href",l).get(i+(n.href||""));if(h){for(var m=0;m<h.length;m++)if(s=h[m],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(m,1);break e}}s=l.createElement(i),Me(s,i,n),l.head.appendChild(s);break;case"meta":if(h=F0("meta","content",l).get(i+(n.content||""))){for(m=0;m<h.length;m++)if(s=h[m],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(m,1);break e}}s=l.createElement(i),Me(s,i,n),l.head.appendChild(s);break;default:throw Error(u(468,i))}s[Kt]=t,Ee(s),i=s}t.stateNode=i}else I0(l,t.type,t.stateNode);else t.stateNode=W0(l,i,t.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?I0(l,t.type,t.stateNode):W0(l,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Lu(t,t.memoizedProps,n.memoizedProps)}break;case 27:nn(e,t),an(t),i&512&&(ce||n===null||Cn(n,n.return)),n!==null&&i&4&&Lu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(nn(e,t),an(t),i&512&&(ce||n===null||Cn(n,n.return)),t.flags&32){l=t.stateNode;try{di(l,"")}catch(C){It(t,t.return,C)}}i&4&&t.stateNode!=null&&(l=t.memoizedProps,Lu(t,l,n!==null?n.memoizedProps:l)),i&1024&&(Yu=!0);break;case 6:if(nn(e,t),an(t),i&4){if(t.stateNode===null)throw Error(u(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(C){It(t,t.return,C)}}break;case 3:if(As=null,l=En,En=Es(e.containerInfo),nn(e,t),En=l,an(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Pl(e.containerInfo)}catch(C){It(t,t.return,C)}Yu&&(Yu=!1,i0(t));break;case 4:i=En,En=Es(t.stateNode.containerInfo),nn(e,t),an(t),En=i;break;case 12:nn(e,t),an(t);break;case 13:nn(e,t),an(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ju=ie()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Gu(t,i)));break;case 22:l=t.memoizedState!==null;var y=n!==null&&n.memoizedState!==null,D=ta,Y=ce;if(ta=D||l,ce=Y||y,nn(e,t),ce=Y,ta=D,an(t),i&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(n===null||y||ta||ce||Qa(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){y=n=e;try{if(s=y.stateNode,l)h=s.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{m=y.stateNode;var Z=y.memoizedProps.style,R=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;m.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(C){It(y,y.return,C)}}}else if(e.tag===6){if(n===null){y=e;try{y.stateNode.nodeValue=l?"":y.memoizedProps}catch(C){It(y,y.return,C)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Gu(t,n))));break;case 19:nn(e,t),an(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Gu(t,i)));break;case 30:break;case 21:break;default:nn(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(W1(i)){n=i;break}i=i.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var l=n.stateNode,s=qu(t);cs(t,s,l);break;case 5:var h=n.stateNode;n.flags&32&&(di(h,""),n.flags&=-33);var m=qu(t);cs(t,m,h);break;case 3:case 4:var y=n.stateNode.containerInfo,D=qu(t);Vu(t,D,y);break;default:throw Error(u(161))}}catch(Y){It(t,t.return,Y)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function i0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;i0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function xa(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)P1(t,e.alternate,e),e=e.sibling}function Qa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ga(4,e,e.return),Qa(e);break;case 1:Cn(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&K1(e,e.return,n),Qa(e);break;case 27:Zl(e.stateNode);case 26:case 5:Cn(e,e.return),Qa(e);break;case 22:e.memoizedState===null&&Qa(e);break;case 30:Qa(e);break;default:Qa(e)}t=t.sibling}}function ya(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,l=t,s=e,h=s.flags;switch(s.tag){case 0:case 11:case 15:ya(l,s,n),Nl(4,s);break;case 1:if(ya(l,s,n),i=s,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){It(i,i.return,D)}if(i=s,l=i.updateQueue,l!==null){var m=i.stateNode;try{var y=l.shared.hiddenCallbacks;if(y!==null)for(l.shared.hiddenCallbacks=null,l=0;l<y.length;l++)Cd(y[l],m)}catch(D){It(i,i.return,D)}}n&&h&64&&Q1(s),Ul(s,s.return);break;case 27:F1(s);case 26:case 5:ya(l,s,n),n&&i===null&&h&4&&J1(s),Ul(s,s.return);break;case 12:ya(l,s,n);break;case 13:ya(l,s,n),n&&h&4&&n0(l,s);break;case 22:s.memoizedState===null&&ya(l,s,n),Ul(s,s.return);break;case 30:break;default:ya(l,s,n)}e=e.sibling}}function Xu(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Sl(n))}function Zu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Sl(t))}function Mn(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)l0(t,e,n,i),e=e.sibling}function l0(t,e,n,i){var l=e.flags;switch(e.tag){case 0:case 11:case 15:Mn(t,e,n,i),l&2048&&Nl(9,e);break;case 1:Mn(t,e,n,i);break;case 3:Mn(t,e,n,i),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Sl(t)));break;case 12:if(l&2048){Mn(t,e,n,i),t=e.stateNode;try{var s=e.memoizedProps,h=s.id,m=s.onPostCommit;typeof m=="function"&&m(h,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(y){It(e,e.return,y)}}else Mn(t,e,n,i);break;case 13:Mn(t,e,n,i);break;case 23:break;case 22:s=e.stateNode,h=e.alternate,e.memoizedState!==null?s._visibility&2?Mn(t,e,n,i):Bl(t,e):s._visibility&2?Mn(t,e,n,i):(s._visibility|=2,ki(t,e,n,i,(e.subtreeFlags&10256)!==0)),l&2048&&Xu(h,e);break;case 24:Mn(t,e,n,i),l&2048&&Zu(e.alternate,e);break;default:Mn(t,e,n,i)}}function ki(t,e,n,i,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var s=t,h=e,m=n,y=i,D=h.flags;switch(h.tag){case 0:case 11:case 15:ki(s,h,m,y,l),Nl(8,h);break;case 23:break;case 22:var Y=h.stateNode;h.memoizedState!==null?Y._visibility&2?ki(s,h,m,y,l):Bl(s,h):(Y._visibility|=2,ki(s,h,m,y,l)),l&&D&2048&&Xu(h.alternate,h);break;case 24:ki(s,h,m,y,l),l&&D&2048&&Zu(h.alternate,h);break;default:ki(s,h,m,y,l)}e=e.sibling}}function Bl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,l=i.flags;switch(i.tag){case 22:Bl(n,i),l&2048&&Xu(i.alternate,i);break;case 24:Bl(n,i),l&2048&&Zu(i.alternate,i);break;default:Bl(n,i)}e=e.sibling}}var Hl=8192;function Ri(t){if(t.subtreeFlags&Hl)for(t=t.child;t!==null;)r0(t),t=t.sibling}function r0(t){switch(t.tag){case 26:Ri(t),t.flags&Hl&&t.memoizedState!==null&&Dx(En,t.memoizedState,t.memoizedProps);break;case 5:Ri(t);break;case 3:case 4:var e=En;En=Es(t.stateNode.containerInfo),Ri(t),En=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Hl,Hl=16777216,Ri(t),Hl=e):Ri(t));break;default:Ri(t)}}function s0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ll(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Ae=i,u0(i,t)}s0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)o0(t),t=t.sibling}function o0(t){switch(t.tag){case 0:case 11:case 15:Ll(t),t.flags&2048&&ga(9,t,t.return);break;case 3:Ll(t);break;case 12:Ll(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,fs(t)):Ll(t);break;default:Ll(t)}}function fs(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Ae=i,u0(i,t)}s0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ga(8,e,e.return),fs(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,fs(e));break;default:fs(e)}t=t.sibling}}function u0(t,e){for(;Ae!==null;){var n=Ae;switch(n.tag){case 0:case 11:case 15:ga(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Sl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ae=i;else t:for(n=t;Ae!==null;){i=Ae;var l=i.sibling,s=i.return;if(t0(i),i===n){Ae=null;break t}if(l!==null){l.return=s,Ae=l;break t}Ae=s}}}var $g={getCacheForType:function(t){var e=Ne(ye),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},Qg=typeof WeakMap=="function"?WeakMap:Map,$t=0,Pt=null,Nt=null,Ht=0,Qt=0,ln=null,ba=!1,Ci=!1,$u=!1,na=0,se=0,va=0,Ka=0,Qu=0,xn=0,Mi=0,ql=null,Qe=null,Ku=!1,Ju=0,ds=1/0,hs=null,Sa=null,Ce=0,wa=null,Ni=null,Ui=0,Wu=0,Fu=null,c0=null,Vl=0,Iu=null;function rn(){if(($t&2)!==0&&Ht!==0)return Ht&-Ht;if(_.T!==null){var t=Ei;return t!==0?t:lc()}return zr()}function f0(){xn===0&&(xn=(Ht&536870912)===0||Gt?al():536870912);var t=gn.current;return t!==null&&(t.flags|=32),xn}function sn(t,e,n){(t===Pt&&(Qt===2||Qt===9)||t.cancelPendingCommit!==null)&&(Bi(t,0),Ea(t,Ht,xn,!1)),Ye(t,n),(($t&2)===0||t!==Pt)&&(t===Pt&&(($t&2)===0&&(Ka|=n),se===4&&Ea(t,Ht,xn,!1)),Nn(t))}function d0(t,e,n){if(($t&6)!==0)throw Error(u(327));var i=!n&&(e&124)===0&&(e&t.expiredLanes)===0||qn(t,e),l=i?Wg(t,e):ec(t,e,!0),s=i;do{if(l===0){Ci&&!i&&Ea(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!Kg(n)){l=ec(t,e,!1),s=!1;continue}if(l===2){if(s=e,t.errorRecoveryDisabledLanes&s)var h=0;else h=t.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){e=h;t:{var m=t;l=ql;var y=m.current.memoizedState.isDehydrated;if(y&&(Bi(m,h).flags|=256),h=ec(m,h,!1),h!==2){if($u&&!y){m.errorRecoveryDisabledLanes|=s,Ka|=s,l=4;break t}s=Qe,Qe=l,s!==null&&(Qe===null?Qe=s:Qe.push.apply(Qe,s))}l=h}if(s=!1,l!==2)continue}}if(l===1){Bi(t,0),Ea(t,e,0,!0);break}t:{switch(i=t,s=l,s){case 0:case 1:throw Error(u(345));case 4:if((e&4194048)!==e)break;case 6:Ea(i,e,xn,!ba);break t;case 2:Qe=null;break;case 3:case 5:break;default:throw Error(u(329))}if((e&62914560)===e&&(l=Ju+300-ie(),10<l)){if(Ea(i,e,xn,!ba),we(i,0,!0)!==0)break t;i.timeoutHandle=V0(h0.bind(null,i,n,Qe,hs,Ku,e,xn,Ka,Mi,ba,s,2,-0,0),l);break t}h0(i,n,Qe,hs,Ku,e,xn,Ka,Mi,ba,s,0,-0,0)}}break}while(!0);Nn(t)}function h0(t,e,n,i,l,s,h,m,y,D,Y,Z,R,C){if(t.timeoutHandle=-1,Z=e.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(Kl={stylesheets:null,count:0,unsuspend:_x},r0(e),Z=kx(),Z!==null)){t.cancelPendingCommit=Z(v0.bind(null,t,e,s,n,i,l,h,m,y,Y,1,R,C)),Ea(t,s,h,!D);return}v0(t,e,s,n,i,l,h,m,y)}function Kg(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],s=l.getSnapshot;l=l.value;try{if(!tn(s(),l))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ea(t,e,n,i){e&=~Qu,e&=~Ka,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var l=e;0<l;){var s=31-Zt(l),h=1<<s;i[s]=-1,l&=~h}n!==0&&il(t,n,e)}function ps(){return($t&6)===0?(Yl(0),!1):!0}function Pu(){if(Nt!==null){if(Qt===0)var t=Nt.return;else t=Nt,Kn=Ya=null,gu(t),_i=null,Rl=0,t=Nt;for(;t!==null;)$1(t.alternate,t),t=t.return;Nt=null}}function Bi(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,dx(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Pu(),Pt=t,Nt=n=Zn(t.current,null),Ht=e,Qt=0,ln=null,ba=!1,Ci=qn(t,e),$u=!1,Mi=xn=Qu=Ka=va=se=0,Qe=ql=null,Ku=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var l=31-Zt(i),s=1<<l;e|=t[l],i&=~s}return na=e,Ur(),n}function p0(t,e){Rt=null,_.H=es,e===El||e===Zr?(e=kd(),Qt=3):e===Od?(e=kd(),Qt=4):Qt=e===R1?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ln=e,Nt===null&&(se=1,rs(t,dn(e,t.current)))}function m0(){var t=_.H;return _.H=es,t===null?es:t}function g0(){var t=_.A;return _.A=$g,t}function tc(){se=4,ba||(Ht&4194048)!==Ht&&gn.current!==null||(Ci=!0),(va&134217727)===0&&(Ka&134217727)===0||Pt===null||Ea(Pt,Ht,xn,!1)}function ec(t,e,n){var i=$t;$t|=2;var l=m0(),s=g0();(Pt!==t||Ht!==e)&&(hs=null,Bi(t,e)),e=!1;var h=se;t:do try{if(Qt!==0&&Nt!==null){var m=Nt,y=ln;switch(Qt){case 8:Pu(),h=6;break t;case 3:case 2:case 9:case 6:gn.current===null&&(e=!0);var D=Qt;if(Qt=0,ln=null,Hi(t,m,y,D),n&&Ci){h=0;break t}break;default:D=Qt,Qt=0,ln=null,Hi(t,m,y,D)}}Jg(),h=se;break}catch(Y){p0(t,Y)}while(!0);return e&&t.shellSuspendCounter++,Kn=Ya=null,$t=i,_.H=l,_.A=s,Nt===null&&(Pt=null,Ht=0,Ur()),h}function Jg(){for(;Nt!==null;)x0(Nt)}function Wg(t,e){var n=$t;$t|=2;var i=m0(),l=g0();Pt!==t||Ht!==e?(hs=null,ds=ie()+500,Bi(t,e)):Ci=qn(t,e);t:do try{if(Qt!==0&&Nt!==null){e=Nt;var s=ln;e:switch(Qt){case 1:Qt=0,ln=null,Hi(t,e,s,1);break;case 2:case 9:if(_d(s)){Qt=0,ln=null,y0(e);break}e=function(){Qt!==2&&Qt!==9||Pt!==t||(Qt=7),Nn(t)},s.then(e,e);break t;case 3:Qt=7;break t;case 4:Qt=5;break t;case 7:_d(s)?(Qt=0,ln=null,y0(e)):(Qt=0,ln=null,Hi(t,e,s,7));break;case 5:var h=null;switch(Nt.tag){case 26:h=Nt.memoizedState;case 5:case 27:var m=Nt;if(!h||P0(h)){Qt=0,ln=null;var y=m.sibling;if(y!==null)Nt=y;else{var D=m.return;D!==null?(Nt=D,ms(D)):Nt=null}break e}}Qt=0,ln=null,Hi(t,e,s,5);break;case 6:Qt=0,ln=null,Hi(t,e,s,6);break;case 8:Pu(),se=6;break t;default:throw Error(u(462))}}Fg();break}catch(Y){p0(t,Y)}while(!0);return Kn=Ya=null,_.H=i,_.A=l,$t=n,Nt!==null?0:(Pt=null,Ht=0,Ur(),se)}function Fg(){for(;Nt!==null&&!Lt();)x0(Nt)}function x0(t){var e=X1(t.alternate,t,na);t.memoizedProps=t.pendingProps,e===null?ms(t):Nt=e}function y0(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=H1(n,e,e.pendingProps,e.type,void 0,Ht);break;case 11:e=H1(n,e,e.pendingProps,e.type.render,e.ref,Ht);break;case 5:gu(e);default:$1(n,e),e=Nt=bd(e,na),e=X1(n,e,na)}t.memoizedProps=t.pendingProps,e===null?ms(t):Nt=e}function Hi(t,e,n,i){Kn=Ya=null,gu(e),_i=null,Rl=0;var l=e.return;try{if(qg(t,l,e,n,Ht)){se=1,rs(t,dn(n,t.current)),Nt=null;return}}catch(s){if(l!==null)throw Nt=l,s;se=1,rs(t,dn(n,t.current)),Nt=null;return}e.flags&32768?(Gt||i===1?t=!0:Ci||(Ht&536870912)!==0?t=!1:(ba=t=!0,(i===2||i===9||i===3||i===6)&&(i=gn.current,i!==null&&i.tag===13&&(i.flags|=16384))),b0(e,t)):ms(e)}function ms(t){var e=t;do{if((e.flags&32768)!==0){b0(e,ba);return}t=e.return;var n=Yg(e.alternate,e,na);if(n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);se===0&&(se=5)}function b0(t,e){do{var n=Gg(t.alternate,t);if(n!==null){n.flags&=32767,Nt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){Nt=t;return}Nt=t=n}while(t!==null);se=6,Nt=null}function v0(t,e,n,i,l,s,h,m,y){t.cancelPendingCommit=null;do gs();while(Ce!==0);if(($t&6)!==0)throw Error(u(327));if(e!==null){if(e===t.current)throw Error(u(177));if(s=e.lanes|e.childLanes,s|=Zo,un(t,n,s,h,m,y),t===Pt&&(Nt=Pt=null,Ht=0),Ni=e,wa=t,Ui=n,Wu=s,Fu=l,c0=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ex(T,function(){return A0(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=_.T,_.T=null,l=Q.p,Q.p=2,h=$t,$t|=4;try{Xg(t,e,n)}finally{$t=h,Q.p=l,_.T=i}}Ce=1,S0(),w0(),E0()}}function S0(){if(Ce===1){Ce=0;var t=wa,e=Ni,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var i=Q.p;Q.p=2;var l=$t;$t|=4;try{a0(e,t);var s=hc,h=ud(t.containerInfo),m=s.focusedElem,y=s.selectionRange;if(h!==m&&m&&m.ownerDocument&&od(m.ownerDocument.documentElement,m)){if(y!==null&&qo(m)){var D=y.start,Y=y.end;if(Y===void 0&&(Y=D),"selectionStart"in m)m.selectionStart=D,m.selectionEnd=Math.min(Y,m.value.length);else{var Z=m.ownerDocument||document,R=Z&&Z.defaultView||window;if(R.getSelection){var C=R.getSelection(),Tt=m.textContent.length,wt=Math.min(y.start,Tt),Ft=y.end===void 0?wt:Math.min(y.end,Tt);!C.extend&&wt>Ft&&(h=Ft,Ft=wt,wt=h);var A=sd(m,wt),z=sd(m,Ft);if(A&&z&&(C.rangeCount!==1||C.anchorNode!==A.node||C.anchorOffset!==A.offset||C.focusNode!==z.node||C.focusOffset!==z.offset)){var j=Z.createRange();j.setStart(A.node,A.offset),C.removeAllRanges(),wt>Ft?(C.addRange(j),C.extend(z.node,z.offset)):(j.setEnd(z.node,z.offset),C.addRange(j))}}}}for(Z=[],C=m;C=C.parentNode;)C.nodeType===1&&Z.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<Z.length;m++){var X=Z[m];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Os=!!dc,hc=dc=null}finally{$t=l,Q.p=i,_.T=n}}t.current=e,Ce=2}}function w0(){if(Ce===2){Ce=0;var t=wa,e=Ni,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var i=Q.p;Q.p=2;var l=$t;$t|=4;try{P1(t,e.alternate,e)}finally{$t=l,Q.p=i,_.T=n}}Ce=3}}function E0(){if(Ce===4||Ce===3){Ce=0,xe();var t=wa,e=Ni,n=Ui,i=c0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ce=5:(Ce=0,Ni=wa=null,z0(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(Sa=null),Vn(n),e=e.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(ct,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=_.T,l=Q.p,Q.p=2,_.T=null;try{for(var s=t.onRecoverableError,h=0;h<i.length;h++){var m=i[h];s(m.value,{componentStack:m.stack})}}finally{_.T=e,Q.p=l}}(Ui&3)!==0&&gs(),Nn(t),l=t.pendingLanes,(n&4194090)!==0&&(l&42)!==0?t===Iu?Vl++:(Vl=0,Iu=t):Vl=0,Yl(0)}}function z0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Sl(e)))}function gs(t){return S0(),w0(),E0(),A0()}function A0(){if(Ce!==5)return!1;var t=wa,e=Wu;Wu=0;var n=Vn(Ui),i=_.T,l=Q.p;try{Q.p=32>n?32:n,_.T=null,n=Fu,Fu=null;var s=wa,h=Ui;if(Ce=0,Ni=wa=null,Ui=0,($t&6)!==0)throw Error(u(331));var m=$t;if($t|=4,o0(s.current),l0(s,s.current,h,n),$t=m,Yl(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(ct,s)}catch{}return!0}finally{Q.p=l,_.T=i,z0(t,e)}}function T0(t,e,n){e=dn(n,e),e=Du(t.stateNode,e,2),t=da(t,e,2),t!==null&&(Ye(t,2),Nn(t))}function It(t,e,n){if(t.tag===3)T0(t,t,n);else for(;e!==null;){if(e.tag===3){T0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sa===null||!Sa.has(i))){t=dn(n,t),n=D1(2),i=da(e,n,2),i!==null&&(k1(n,i,e,t),Ye(i,2),Nn(i));break}}e=e.return}}function nc(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Qg;var l=new Set;i.set(e,l)}else l=i.get(e),l===void 0&&(l=new Set,i.set(e,l));l.has(n)||($u=!0,l.add(n),t=Ig.bind(null,t,e,n),e.then(t,t))}function Ig(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Pt===t&&(Ht&n)===n&&(se===4||se===3&&(Ht&62914560)===Ht&&300>ie()-Ju?($t&2)===0&&Bi(t,0):Qu|=n,Mi===Ht&&(Mi=0)),Nn(t)}function j0(t,e){e===0&&(e=Er()),t=bi(t,e),t!==null&&(Ye(t,e),Nn(t))}function Pg(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),j0(t,n)}function tx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(e),j0(t,n)}function ex(t,e){return vt(t,e)}var xs=null,Li=null,ac=!1,ys=!1,ic=!1,Ja=0;function Nn(t){t!==Li&&t.next===null&&(Li===null?xs=Li=t:Li=Li.next=t),ys=!0,ac||(ac=!0,ax())}function Yl(t,e){if(!ic&&ys){ic=!0;do for(var n=!1,i=xs;i!==null;){if(t!==0){var l=i.pendingLanes;if(l===0)var s=0;else{var h=i.suspendedLanes,m=i.pingedLanes;s=(1<<31-Zt(42|t)+1)-1,s&=l&~(h&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,k0(i,s))}else s=Ht,s=we(i,i===Pt?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||qn(i,s)||(n=!0,k0(i,s));i=i.next}while(n);ic=!1}}function nx(){O0()}function O0(){ys=ac=!1;var t=0;Ja!==0&&(fx()&&(t=Ja),Ja=0);for(var e=ie(),n=null,i=xs;i!==null;){var l=i.next,s=_0(i,e);s===0?(i.next=null,n===null?xs=l:n.next=l,l===null&&(Li=n)):(n=i,(t!==0||(s&3)!==0)&&(ys=!0)),i=l}Yl(t)}function _0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,l=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var h=31-Zt(s),m=1<<h,y=l[h];y===-1?((m&n)===0||(m&i)!==0)&&(l[h]=ii(m,e)):y<=e&&(t.expiredLanes|=m),s&=~m}if(e=Pt,n=Ht,n=we(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(Qt===2||Qt===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Bt(i),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||qn(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Bt(i),Vn(n)){case 2:case 8:n=v;break;case 32:n=T;break;case 268435456:n=it;break;default:n=T}return i=D0.bind(null,t),n=vt(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Bt(i),t.callbackPriority=2,t.callbackNode=null,2}function D0(t,e){if(Ce!==0&&Ce!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(gs()&&t.callbackNode!==n)return null;var i=Ht;return i=we(t,t===Pt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(d0(t,i,e),_0(t,ie()),t.callbackNode!=null&&t.callbackNode===n?D0.bind(null,t):null)}function k0(t,e){if(gs())return null;d0(t,e,!0)}function ax(){hx(function(){($t&6)!==0?vt(Pe,nx):O0()})}function lc(){return Ja===0&&(Ja=al()),Ja}function R0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:_r(""+t)}function C0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function ix(t,e,n,i,l){if(e==="submit"&&n&&n.stateNode===l){var s=R0((l[oe]||null).action),h=i.submitter;h&&(e=(e=h[oe]||null)?R0(e.formAction):h.getAttribute("formAction"),e!==null&&(s=e,h=null));var m=new Cr("action","action",null,i,l);t.push({event:m,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ja!==0){var y=h?C0(l,h):new FormData(l);Au(n,{pending:!0,data:y,method:l.method,action:s},null,y)}}else typeof s=="function"&&(m.preventDefault(),y=h?C0(l,h):new FormData(l),Au(n,{pending:!0,data:y,method:l.method,action:s},s,y))},currentTarget:l}]})}}for(var rc=0;rc<Xo.length;rc++){var sc=Xo[rc],lx=sc.toLowerCase(),rx=sc[0].toUpperCase()+sc.slice(1);wn(lx,"on"+rx)}wn(dd,"onAnimationEnd"),wn(hd,"onAnimationIteration"),wn(pd,"onAnimationStart"),wn("dblclick","onDoubleClick"),wn("focusin","onFocus"),wn("focusout","onBlur"),wn(Eg,"onTransitionRun"),wn(zg,"onTransitionStart"),wn(Ag,"onTransitionCancel"),wn(md,"onTransitionEnd"),ui("onMouseEnter",["mouseout","mouseover"]),ui("onMouseLeave",["mouseout","mouseover"]),ui("onPointerEnter",["pointerout","pointerover"]),ui("onPointerLeave",["pointerout","pointerover"]),Ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gl));function M0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],l=i.event;i=i.listeners;t:{var s=void 0;if(e)for(var h=i.length-1;0<=h;h--){var m=i[h],y=m.instance,D=m.currentTarget;if(m=m.listener,y!==s&&l.isPropagationStopped())break t;s=m,l.currentTarget=D;try{s(l)}catch(Y){ls(Y)}l.currentTarget=null,s=y}else for(h=0;h<i.length;h++){if(m=i[h],y=m.instance,D=m.currentTarget,m=m.listener,y!==s&&l.isPropagationStopped())break t;s=m,l.currentTarget=D;try{s(l)}catch(Y){ls(Y)}l.currentTarget=null,s=y}}}}function Ut(t,e){var n=e[sa];n===void 0&&(n=e[sa]=new Set);var i=t+"__bubble";n.has(i)||(N0(e,t,2,!1),n.add(i))}function oc(t,e,n){var i=0;e&&(i|=4),N0(n,t,i,e)}var bs="_reactListening"+Math.random().toString(36).slice(2);function uc(t){if(!t[bs]){t[bs]=!0,Of.forEach(function(n){n!=="selectionchange"&&(sx.has(n)||oc(n,!1,t),oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[bs]||(e[bs]=!0,oc("selectionchange",!1,e))}}function N0(t,e,n,i){switch(lh(e)){case 2:var l=Mx;break;case 8:l=Nx;break;default:l=Ec}n=l.bind(null,e,n,t),l=void 0,!ko||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),i?l!==void 0?t.addEventListener(e,n,{capture:!0,passive:l}):t.addEventListener(e,n,!0):l!==void 0?t.addEventListener(e,n,{passive:l}):t.addEventListener(e,n,!1)}function cc(t,e,n,i,l){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var m=i.stateNode.containerInfo;if(m===l)break;if(h===4)for(h=i.return;h!==null;){var y=h.tag;if((y===3||y===4)&&h.stateNode.containerInfo===l)return;h=h.return}for(;m!==null;){if(h=ri(m),h===null)return;if(y=h.tag,y===5||y===6||y===26||y===27){i=s=h;continue t}m=m.parentNode}}i=i.return}Yf(function(){var D=s,Y=_o(n),Z=[];t:{var R=gd.get(t);if(R!==void 0){var C=Cr,Tt=t;switch(t){case"keypress":if(kr(n)===0)break t;case"keydown":case"keyup":C=eg;break;case"focusin":Tt="focus",C=No;break;case"focusout":Tt="blur",C=No;break;case"beforeblur":case"afterblur":C=No;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Gm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=ig;break;case dd:case hd:case pd:C=$m;break;case md:C=rg;break;case"scroll":case"scrollend":C=Vm;break;case"wheel":C=og;break;case"copy":case"cut":case"paste":C=Km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Qf;break;case"toggle":case"beforetoggle":C=cg}var wt=(e&4)!==0,Ft=!wt&&(t==="scroll"||t==="scrollend"),A=wt?R!==null?R+"Capture":null:R;wt=[];for(var z=D,j;z!==null;){var X=z;if(j=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||j===null||A===null||(X=ol(z,A),X!=null&&wt.push(Xl(z,X,j))),Ft)break;z=z.return}0<wt.length&&(R=new C(R,Tt,null,n,Y),Z.push({event:R,listeners:wt}))}}if((e&7)===0){t:{if(R=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",R&&n!==Oo&&(Tt=n.relatedTarget||n.fromElement)&&(ri(Tt)||Tt[Yn]))break t;if((C||R)&&(R=Y.window===Y?Y:(R=Y.ownerDocument)?R.defaultView||R.parentWindow:window,C?(Tt=n.relatedTarget||n.toElement,C=D,Tt=Tt?ri(Tt):null,Tt!==null&&(Ft=d(Tt),wt=Tt.tag,Tt!==Ft||wt!==5&&wt!==27&&wt!==6)&&(Tt=null)):(C=null,Tt=D),C!==Tt)){if(wt=Zf,X="onMouseLeave",A="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(wt=Qf,X="onPointerLeave",A="onPointerEnter",z="pointer"),Ft=C==null?R:sl(C),j=Tt==null?R:sl(Tt),R=new wt(X,z+"leave",C,n,Y),R.target=Ft,R.relatedTarget=j,X=null,ri(Y)===D&&(wt=new wt(A,z+"enter",Tt,n,Y),wt.target=j,wt.relatedTarget=Ft,X=wt),Ft=X,C&&Tt)e:{for(wt=C,A=Tt,z=0,j=wt;j;j=qi(j))z++;for(j=0,X=A;X;X=qi(X))j++;for(;0<z-j;)wt=qi(wt),z--;for(;0<j-z;)A=qi(A),j--;for(;z--;){if(wt===A||A!==null&&wt===A.alternate)break e;wt=qi(wt),A=qi(A)}wt=null}else wt=null;C!==null&&U0(Z,R,C,wt,!1),Tt!==null&&Ft!==null&&U0(Z,Ft,Tt,wt,!0)}}t:{if(R=D?sl(D):window,C=R.nodeName&&R.nodeName.toLowerCase(),C==="select"||C==="input"&&R.type==="file")var dt=ed;else if(Pf(R))if(nd)dt=vg;else{dt=yg;var Mt=xg}else C=R.nodeName,!C||C.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?D&&jo(D.elementType)&&(dt=ed):dt=bg;if(dt&&(dt=dt(t,D))){td(Z,dt,n,Y);break t}Mt&&Mt(t,R,D),t==="focusout"&&D&&R.type==="number"&&D.memoizedProps.value!=null&&To(R,"number",R.value)}switch(Mt=D?sl(D):window,t){case"focusin":(Pf(Mt)||Mt.contentEditable==="true")&&(gi=Mt,Vo=D,gl=null);break;case"focusout":gl=Vo=gi=null;break;case"mousedown":Yo=!0;break;case"contextmenu":case"mouseup":case"dragend":Yo=!1,cd(Z,n,Y);break;case"selectionchange":if(wg)break;case"keydown":case"keyup":cd(Z,n,Y)}var mt;if(Bo)t:{switch(t){case"compositionstart":var Et="onCompositionStart";break t;case"compositionend":Et="onCompositionEnd";break t;case"compositionupdate":Et="onCompositionUpdate";break t}Et=void 0}else mi?Ff(t,n)&&(Et="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(Et="onCompositionStart");Et&&(Kf&&n.locale!=="ko"&&(mi||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&mi&&(mt=Gf()):(oa=Y,Ro="value"in oa?oa.value:oa.textContent,mi=!0)),Mt=vs(D,Et),0<Mt.length&&(Et=new $f(Et,t,null,n,Y),Z.push({event:Et,listeners:Mt}),mt?Et.data=mt:(mt=If(n),mt!==null&&(Et.data=mt)))),(mt=dg?hg(t,n):pg(t,n))&&(Et=vs(D,"onBeforeInput"),0<Et.length&&(Mt=new $f("onBeforeInput","beforeinput",null,n,Y),Z.push({event:Mt,listeners:Et}),Mt.data=mt)),ix(Z,t,D,n,Y)}M0(Z,e)})}function Xl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vs(t,e){for(var n=e+"Capture",i=[];t!==null;){var l=t,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=ol(t,n),l!=null&&i.unshift(Xl(t,l,s)),l=ol(t,e),l!=null&&i.push(Xl(t,l,s))),t.tag===3)return i;t=t.return}return[]}function qi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function U0(t,e,n,i,l){for(var s=e._reactName,h=[];n!==null&&n!==i;){var m=n,y=m.alternate,D=m.stateNode;if(m=m.tag,y!==null&&y===i)break;m!==5&&m!==26&&m!==27||D===null||(y=D,l?(D=ol(n,s),D!=null&&h.unshift(Xl(n,D,y))):l||(D=ol(n,s),D!=null&&h.push(Xl(n,D,y)))),n=n.return}h.length!==0&&t.push({event:e,listeners:h})}var ox=/\r\n?/g,ux=/\u0000|\uFFFD/g;function B0(t){return(typeof t=="string"?t:""+t).replace(ox,`
`).replace(ux,"")}function H0(t,e){return e=B0(e),B0(t)===e}function Ss(){}function Wt(t,e,n,i,l,s){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||di(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&di(t,""+i);break;case"className":Tr(t,"class",i);break;case"tabIndex":Tr(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Tr(t,n,i);break;case"style":qf(t,i,s);break;case"data":if(e!=="object"){Tr(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=_r(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&Wt(t,e,"name",l.name,l,null),Wt(t,e,"formEncType",l.formEncType,l,null),Wt(t,e,"formMethod",l.formMethod,l,null),Wt(t,e,"formTarget",l.formTarget,l,null)):(Wt(t,e,"encType",l.encType,l,null),Wt(t,e,"method",l.method,l,null),Wt(t,e,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=_r(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Ss);break;case"onScroll":i!=null&&Ut("scroll",t);break;case"onScrollEnd":i!=null&&Ut("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(u(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=_r(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":Ut("beforetoggle",t),Ut("toggle",t),Ar(t,"popover",i);break;case"xlinkActuate":Gn(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Gn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Gn(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Gn(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Gn(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Gn(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Gn(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Gn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Gn(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ar(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Lm.get(n)||n,Ar(t,n,i))}}function fc(t,e,n,i,l,s){switch(n){case"style":qf(t,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(u(60));t.innerHTML=n}}break;case"children":typeof i=="string"?di(t,i):(typeof i=="number"||typeof i=="bigint")&&di(t,""+i);break;case"onScroll":i!=null&&Ut("scroll",t);break;case"onScrollEnd":i!=null&&Ut("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Ss);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_f.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),e=n.slice(2,l?n.length-7:void 0),s=t[oe]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,l),typeof i=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,l);break t}n in t?t[n]=i:i===!0?t.setAttribute(n,""):Ar(t,n,i)}}}function Me(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ut("error",t),Ut("load",t);var i=!1,l=!1,s;for(s in n)if(n.hasOwnProperty(s)){var h=n[s];if(h!=null)switch(s){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,e));default:Wt(t,e,s,h,n,null)}}l&&Wt(t,e,"srcSet",n.srcSet,n,null),i&&Wt(t,e,"src",n.src,n,null);return;case"input":Ut("invalid",t);var m=s=h=l=null,y=null,D=null;for(i in n)if(n.hasOwnProperty(i)){var Y=n[i];if(Y!=null)switch(i){case"name":l=Y;break;case"type":h=Y;break;case"checked":y=Y;break;case"defaultChecked":D=Y;break;case"value":s=Y;break;case"defaultValue":m=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(u(137,e));break;default:Wt(t,e,i,Y,n,null)}}Uf(t,s,m,y,D,h,l,!1),jr(t);return;case"select":Ut("invalid",t),i=h=s=null;for(l in n)if(n.hasOwnProperty(l)&&(m=n[l],m!=null))switch(l){case"value":s=m;break;case"defaultValue":h=m;break;case"multiple":i=m;default:Wt(t,e,l,m,n,null)}e=s,n=h,t.multiple=!!i,e!=null?fi(t,!!i,e,!1):n!=null&&fi(t,!!i,n,!0);return;case"textarea":Ut("invalid",t),s=l=i=null;for(h in n)if(n.hasOwnProperty(h)&&(m=n[h],m!=null))switch(h){case"value":i=m;break;case"defaultValue":l=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(u(91));break;default:Wt(t,e,h,m,n,null)}Hf(t,i,l,s),jr(t);return;case"option":for(y in n)if(n.hasOwnProperty(y)&&(i=n[y],i!=null))switch(y){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Wt(t,e,y,i,n,null)}return;case"dialog":Ut("beforetoggle",t),Ut("toggle",t),Ut("cancel",t),Ut("close",t);break;case"iframe":case"object":Ut("load",t);break;case"video":case"audio":for(i=0;i<Gl.length;i++)Ut(Gl[i],t);break;case"image":Ut("error",t),Ut("load",t);break;case"details":Ut("toggle",t);break;case"embed":case"source":case"link":Ut("error",t),Ut("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in n)if(n.hasOwnProperty(D)&&(i=n[D],i!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,e));default:Wt(t,e,D,i,n,null)}return;default:if(jo(e)){for(Y in n)n.hasOwnProperty(Y)&&(i=n[Y],i!==void 0&&fc(t,e,Y,i,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(i=n[m],i!=null&&Wt(t,e,m,i,n,null))}function cx(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,h=null,m=null,y=null,D=null,Y=null;for(C in n){var Z=n[C];if(n.hasOwnProperty(C)&&Z!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":y=Z;default:i.hasOwnProperty(C)||Wt(t,e,C,null,i,Z)}}for(var R in i){var C=i[R];if(Z=n[R],i.hasOwnProperty(R)&&(C!=null||Z!=null))switch(R){case"type":s=C;break;case"name":l=C;break;case"checked":D=C;break;case"defaultChecked":Y=C;break;case"value":h=C;break;case"defaultValue":m=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,e));break;default:C!==Z&&Wt(t,e,R,C,i,Z)}}Ao(t,h,m,y,D,Y,s,l);return;case"select":C=h=m=R=null;for(s in n)if(y=n[s],n.hasOwnProperty(s)&&y!=null)switch(s){case"value":break;case"multiple":C=y;default:i.hasOwnProperty(s)||Wt(t,e,s,null,i,y)}for(l in i)if(s=i[l],y=n[l],i.hasOwnProperty(l)&&(s!=null||y!=null))switch(l){case"value":R=s;break;case"defaultValue":m=s;break;case"multiple":h=s;default:s!==y&&Wt(t,e,l,s,i,y)}e=m,n=h,i=C,R!=null?fi(t,!!n,R,!1):!!i!=!!n&&(e!=null?fi(t,!!n,e,!0):fi(t,!!n,n?[]:"",!1));return;case"textarea":C=R=null;for(m in n)if(l=n[m],n.hasOwnProperty(m)&&l!=null&&!i.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Wt(t,e,m,null,i,l)}for(h in i)if(l=i[h],s=n[h],i.hasOwnProperty(h)&&(l!=null||s!=null))switch(h){case"value":R=l;break;case"defaultValue":C=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==s&&Wt(t,e,h,l,i,s)}Bf(t,R,C);return;case"option":for(var Tt in n)if(R=n[Tt],n.hasOwnProperty(Tt)&&R!=null&&!i.hasOwnProperty(Tt))switch(Tt){case"selected":t.selected=!1;break;default:Wt(t,e,Tt,null,i,R)}for(y in i)if(R=i[y],C=n[y],i.hasOwnProperty(y)&&R!==C&&(R!=null||C!=null))switch(y){case"selected":t.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:Wt(t,e,y,R,i,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var wt in n)R=n[wt],n.hasOwnProperty(wt)&&R!=null&&!i.hasOwnProperty(wt)&&Wt(t,e,wt,null,i,R);for(D in i)if(R=i[D],C=n[D],i.hasOwnProperty(D)&&R!==C&&(R!=null||C!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,e));break;default:Wt(t,e,D,R,i,C)}return;default:if(jo(e)){for(var Ft in n)R=n[Ft],n.hasOwnProperty(Ft)&&R!==void 0&&!i.hasOwnProperty(Ft)&&fc(t,e,Ft,void 0,i,R);for(Y in i)R=i[Y],C=n[Y],!i.hasOwnProperty(Y)||R===C||R===void 0&&C===void 0||fc(t,e,Y,R,i,C);return}}for(var A in n)R=n[A],n.hasOwnProperty(A)&&R!=null&&!i.hasOwnProperty(A)&&Wt(t,e,A,null,i,R);for(Z in i)R=i[Z],C=n[Z],!i.hasOwnProperty(Z)||R===C||R==null&&C==null||Wt(t,e,Z,R,i,C)}var dc=null,hc=null;function ws(t){return t.nodeType===9?t:t.ownerDocument}function L0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function q0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function pc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mc=null;function fx(){var t=window.event;return t&&t.type==="popstate"?t===mc?!1:(mc=t,!0):(mc=null,!1)}var V0=typeof setTimeout=="function"?setTimeout:void 0,dx=typeof clearTimeout=="function"?clearTimeout:void 0,Y0=typeof Promise=="function"?Promise:void 0,hx=typeof queueMicrotask=="function"?queueMicrotask:typeof Y0<"u"?function(t){return Y0.resolve(null).then(t).catch(px)}:V0;function px(t){setTimeout(function(){throw t})}function za(t){return t==="head"}function G0(t,e){var n=e,i=0,l=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(0<i&&8>i){n=i;var h=t.ownerDocument;if(n&1&&Zl(h.documentElement),n&2&&Zl(h.body),n&4)for(n=h.head,Zl(n),h=n.firstChild;h;){var m=h.nextSibling,y=h.nodeName;h[rl]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&h.rel.toLowerCase()==="stylesheet"||n.removeChild(h),h=m}}if(l===0){t.removeChild(s),Pl(e);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:i=n.charCodeAt(0)-48;else i=0;n=s}while(n);Pl(e)}function gc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":gc(n),So(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function mx(t,e,n,i){for(;t.nodeType===1;){var l=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[rl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=zn(t.nextSibling),t===null)break}return null}function gx(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=zn(t.nextSibling),t===null))return null;return t}function xc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function xx(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function zn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var yc=null;function X0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function Z0(t,e,n){switch(e=ws(n),t){case"html":if(t=e.documentElement,!t)throw Error(u(452));return t;case"head":if(t=e.head,!t)throw Error(u(453));return t;case"body":if(t=e.body,!t)throw Error(u(454));return t;default:throw Error(u(451))}}function Zl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);So(t)}var yn=new Map,$0=new Set;function Es(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var aa=Q.d;Q.d={f:yx,r:bx,D:vx,C:Sx,L:wx,m:Ex,X:Ax,S:zx,M:Tx};function yx(){var t=aa.f(),e=ps();return t||e}function bx(t){var e=si(t);e!==null&&e.tag===5&&e.type==="form"?d1(e):aa.r(t)}var Vi=typeof document>"u"?null:document;function Q0(t,e,n){var i=Vi;if(i&&typeof e=="string"&&e){var l=fn(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),$0.has(l)||($0.add(l),t={rel:t,crossOrigin:n,href:e},i.querySelector(l)===null&&(e=i.createElement("link"),Me(e,"link",t),Ee(e),i.head.appendChild(e)))}}function vx(t){aa.D(t),Q0("dns-prefetch",t,null)}function Sx(t,e){aa.C(t,e),Q0("preconnect",t,e)}function wx(t,e,n){aa.L(t,e,n);var i=Vi;if(i&&t&&e){var l='link[rel="preload"][as="'+fn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+fn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+fn(n.imageSizes)+'"]')):l+='[href="'+fn(t)+'"]';var s=l;switch(e){case"style":s=Yi(t);break;case"script":s=Gi(t)}yn.has(s)||(t=b({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),yn.set(s,t),i.querySelector(l)!==null||e==="style"&&i.querySelector($l(s))||e==="script"&&i.querySelector(Ql(s))||(e=i.createElement("link"),Me(e,"link",t),Ee(e),i.head.appendChild(e)))}}function Ex(t,e){aa.m(t,e);var n=Vi;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+fn(i)+'"][href="'+fn(t)+'"]',s=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Gi(t)}if(!yn.has(s)&&(t=b({rel:"modulepreload",href:t},e),yn.set(s,t),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ql(s)))return}i=n.createElement("link"),Me(i,"link",t),Ee(i),n.head.appendChild(i)}}}function zx(t,e,n){aa.S(t,e,n);var i=Vi;if(i&&t){var l=oi(i).hoistableStyles,s=Yi(t);e=e||"default";var h=l.get(s);if(!h){var m={loading:0,preload:null};if(h=i.querySelector($l(s)))m.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":e},n),(n=yn.get(s))&&bc(t,n);var y=h=i.createElement("link");Ee(y),Me(y,"link",t),y._p=new Promise(function(D,Y){y.onload=D,y.onerror=Y}),y.addEventListener("load",function(){m.loading|=1}),y.addEventListener("error",function(){m.loading|=2}),m.loading|=4,zs(h,e,i)}h={type:"stylesheet",instance:h,count:1,state:m},l.set(s,h)}}}function Ax(t,e){aa.X(t,e);var n=Vi;if(n&&t){var i=oi(n).hoistableScripts,l=Gi(t),s=i.get(l);s||(s=n.querySelector(Ql(l)),s||(t=b({src:t,async:!0},e),(e=yn.get(l))&&vc(t,e),s=n.createElement("script"),Ee(s),Me(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(l,s))}}function Tx(t,e){aa.M(t,e);var n=Vi;if(n&&t){var i=oi(n).hoistableScripts,l=Gi(t),s=i.get(l);s||(s=n.querySelector(Ql(l)),s||(t=b({src:t,async:!0,type:"module"},e),(e=yn.get(l))&&vc(t,e),s=n.createElement("script"),Ee(s),Me(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(l,s))}}function K0(t,e,n,i){var l=(l=ut.current)?Es(l):null;if(!l)throw Error(u(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Yi(n.href),n=oi(l).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Yi(n.href);var s=oi(l).hoistableStyles,h=s.get(t);if(h||(l=l.ownerDocument||l,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,h),(s=l.querySelector($l(t)))&&!s._p&&(h.instance=s,h.state.loading=5),yn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},yn.set(t,n),s||jx(l,t,n,h.state))),e&&i===null)throw Error(u(528,""));return h}if(e&&i!==null)throw Error(u(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Gi(n),n=oi(l).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,t))}}function Yi(t){return'href="'+fn(t)+'"'}function $l(t){return'link[rel="stylesheet"]['+t+"]"}function J0(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function jx(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),Me(e,"link",n),Ee(e),t.head.appendChild(e))}function Gi(t){return'[src="'+fn(t)+'"]'}function Ql(t){return"script[async]"+t}function W0(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+fn(n.href)+'"]');if(i)return e.instance=i,Ee(i),i;var l=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Ee(i),Me(i,"style",l),zs(i,n.precedence,t),e.instance=i;case"stylesheet":l=Yi(n.href);var s=t.querySelector($l(l));if(s)return e.state.loading|=4,e.instance=s,Ee(s),s;i=J0(n),(l=yn.get(l))&&bc(i,l),s=(t.ownerDocument||t).createElement("link"),Ee(s);var h=s;return h._p=new Promise(function(m,y){h.onload=m,h.onerror=y}),Me(s,"link",i),e.state.loading|=4,zs(s,n.precedence,t),e.instance=s;case"script":return s=Gi(n.src),(l=t.querySelector(Ql(s)))?(e.instance=l,Ee(l),l):(i=n,(l=yn.get(s))&&(i=b({},n),vc(i,l)),t=t.ownerDocument||t,l=t.createElement("script"),Ee(l),Me(l,"link",i),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(u(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,zs(i,n.precedence,t));return e.instance}function zs(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,s=l,h=0;h<i.length;h++){var m=i[h];if(m.dataset.precedence===e)s=m;else if(s!==l)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function bc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function vc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var As=null;function F0(t,e,n){if(As===null){var i=new Map,l=As=new Map;l.set(n,i)}else l=As,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),l=0;l<n.length;l++){var s=n[l];if(!(s[rl]||s[Kt]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var h=s.getAttribute(e)||"";h=t+h;var m=i.get(h);m?m.push(s):i.set(h,[s])}}return i}function I0(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Ox(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function P0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Kl=null;function _x(){}function Dx(t,e,n){if(Kl===null)throw Error(u(475));var i=Kl;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=Yi(n.href),s=t.querySelector($l(l));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(i.count++,i=Ts.bind(i),t.then(i,i)),e.state.loading|=4,e.instance=s,Ee(s);return}s=t.ownerDocument||t,n=J0(n),(l=yn.get(l))&&bc(n,l),s=s.createElement("link"),Ee(s);var h=s;h._p=new Promise(function(m,y){h.onload=m,h.onerror=y}),Me(s,"link",n),e.instance=s}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(i.count++,e=Ts.bind(i),t.addEventListener("load",e),t.addEventListener("error",e))}}function kx(){if(Kl===null)throw Error(u(475));var t=Kl;return t.stylesheets&&t.count===0&&Sc(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function Ts(){if(this.count--,this.count===0){if(this.stylesheets)Sc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var js=null;function Sc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,js=new Map,e.forEach(Rx,t),js=null,Ts.call(t))}function Rx(t,e){if(!(e.state.loading&4)){var n=js.get(t);if(n)var i=n.get(null);else{n=new Map,js.set(t,n);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var h=l[s];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),i=h)}i&&n.set(null,i)}l=e.instance,h=l.getAttribute("data-precedence"),s=n.get(h)||i,s===i&&n.set(null,l),n.set(h,l),this.count++,i=Ts.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),s?s.parentNode.insertBefore(l,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Jl={$$typeof:$,Provider:null,Consumer:null,_currentValue:ft,_currentValue2:ft,_threadCount:0};function Cx(t,e,n,i,l,s,h,m){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dn(0),this.hiddenUpdates=Dn(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function th(t,e,n,i,l,s,h,m,y,D,Y,Z){return t=new Cx(t,e,n,h,m,y,D,Z),e=1,s===!0&&(e|=24),s=en(3,null,null,e),t.current=s,s.stateNode=t,e=nu(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:e},ru(s),t}function eh(t){return t?(t=vi,t):vi}function nh(t,e,n,i,l,s){l=eh(l),i.context===null?i.context=l:i.pendingContext=l,i=fa(e),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=da(t,i,e),n!==null&&(sn(n,t,e),Al(n,t,e))}function ah(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wc(t,e){ah(t,e),(t=t.alternate)&&ah(t,e)}function ih(t){if(t.tag===13){var e=bi(t,67108864);e!==null&&sn(e,t,67108864),wc(t,67108864)}}var Os=!0;function Mx(t,e,n,i){var l=_.T;_.T=null;var s=Q.p;try{Q.p=2,Ec(t,e,n,i)}finally{Q.p=s,_.T=l}}function Nx(t,e,n,i){var l=_.T;_.T=null;var s=Q.p;try{Q.p=8,Ec(t,e,n,i)}finally{Q.p=s,_.T=l}}function Ec(t,e,n,i){if(Os){var l=zc(i);if(l===null)cc(t,e,i,_s,n),rh(t,i);else if(Bx(l,t,e,n,i))i.stopPropagation();else if(rh(t,i),e&4&&-1<Ux.indexOf(t)){for(;l!==null;){var s=si(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var h=ke(s.pendingLanes);if(h!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;h;){var y=1<<31-Zt(h);m.entanglements[1]|=y,h&=~y}Nn(s),($t&6)===0&&(ds=ie()+500,Yl(0))}}break;case 13:m=bi(s,2),m!==null&&sn(m,s,2),ps(),wc(s,2)}if(s=zc(i),s===null&&cc(t,e,i,_s,n),s===l)break;l=s}l!==null&&i.stopPropagation()}else cc(t,e,i,null,n)}}function zc(t){return t=_o(t),Ac(t)}var _s=null;function Ac(t){if(_s=null,t=ri(t),t!==null){var e=d(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=p(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return _s=t,null}function lh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_n()){case Pe:return 2;case v:return 8;case T:case U:return 32;case it:return 268435456;default:return 32}default:return 32}}var Tc=!1,Aa=null,Ta=null,ja=null,Wl=new Map,Fl=new Map,Oa=[],Ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rh(t,e){switch(t){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Wl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fl.delete(e.pointerId)}}function Il(t,e,n,i,l,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[l]},e!==null&&(e=si(e),e!==null&&ih(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function Bx(t,e,n,i,l){switch(e){case"focusin":return Aa=Il(Aa,t,e,n,i,l),!0;case"dragenter":return Ta=Il(Ta,t,e,n,i,l),!0;case"mouseover":return ja=Il(ja,t,e,n,i,l),!0;case"pointerover":var s=l.pointerId;return Wl.set(s,Il(Wl.get(s)||null,t,e,n,i,l)),!0;case"gotpointercapture":return s=l.pointerId,Fl.set(s,Il(Fl.get(s)||null,t,e,n,i,l)),!0}return!1}function sh(t){var e=ri(t.target);if(e!==null){var n=d(e);if(n!==null){if(e=n.tag,e===13){if(e=p(n),e!==null){t.blockedOn=e,vo(t.priority,function(){if(n.tag===13){var i=rn();i=ll(i);var l=bi(n,i);l!==null&&sn(l,n,i),wc(n,i)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ds(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zc(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Oo=i,n.target.dispatchEvent(i),Oo=null}else return e=si(n),e!==null&&ih(e),t.blockedOn=n,!1;e.shift()}return!0}function oh(t,e,n){Ds(t)&&n.delete(e)}function Hx(){Tc=!1,Aa!==null&&Ds(Aa)&&(Aa=null),Ta!==null&&Ds(Ta)&&(Ta=null),ja!==null&&Ds(ja)&&(ja=null),Wl.forEach(oh),Fl.forEach(oh)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Tc||(Tc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Hx)))}var Rs=null;function uh(t){Rs!==t&&(Rs=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Rs===t&&(Rs=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],l=t[e+2];if(typeof i!="function"){if(Ac(i||n)===null)continue;break}var s=si(n);s!==null&&(t.splice(e,3),e-=3,Au(s,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function Pl(t){function e(y){return ks(y,t)}Aa!==null&&ks(Aa,t),Ta!==null&&ks(Ta,t),ja!==null&&ks(ja,t),Wl.forEach(e),Fl.forEach(e);for(var n=0;n<Oa.length;n++){var i=Oa[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Oa.length&&(n=Oa[0],n.blockedOn===null);)sh(n),n.blockedOn===null&&Oa.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],s=n[i+1],h=l[oe]||null;if(typeof s=="function")h||uh(n);else if(h){var m=null;if(s&&s.hasAttribute("formAction")){if(l=s,h=s[oe]||null)m=h.formAction;else if(Ac(l)!==null)continue}else m=h.action;typeof m=="function"?n[i+1]=m:(n.splice(i,3),i-=3),uh(n)}}}function jc(t){this._internalRoot=t}Cs.prototype.render=jc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(u(409));var n=e.current,i=rn();nh(n,i,t,e,null,null)},Cs.prototype.unmount=jc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;nh(t.current,2,null,t,null,null),ps(),e[Yn]=null}};function Cs(t){this._internalRoot=t}Cs.prototype.unstable_scheduleHydration=function(t){if(t){var e=zr();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Oa.length&&e!==0&&e<Oa[n].priority;n++);Oa.splice(n,0,t),n===0&&sh(t)}};var ch=r.version;if(ch!=="19.1.1")throw Error(u(527,ch,"19.1.1"));Q.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(u(188)):(t=Object.keys(t).join(","),Error(u(268,t)));return t=w(e),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Lx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ms.isDisabled&&Ms.supportsFiber)try{ct=Ms.inject(Lx),At=Ms}catch{}}return er.createRoot=function(t,e){if(!c(t))throw Error(u(299));var n=!1,i="",l=T1,s=j1,h=O1,m=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(h=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(m=e.unstable_transitionCallbacks)),e=th(t,1,!1,null,null,n,i,l,s,h,m,null),t[Yn]=e.current,uc(t),new jc(e)},er.hydrateRoot=function(t,e,n){if(!c(t))throw Error(u(299));var i=!1,l="",s=T1,h=j1,m=O1,y=null,D=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(y=n.unstable_transitionCallbacks),n.formState!==void 0&&(D=n.formState)),e=th(t,1,!0,e,n??null,i,l,s,h,m,y,D),e.context=eh(null),n=e.current,i=rn(),i=ll(i),l=fa(i),l.callback=null,da(n,l,i),n=i,e.current.lanes=n,Ye(e,n),Nn(e),t[Yn]=e.current,uc(t),new Cs(e)},er.version="19.1.1",er}var vh;function Jx(){if(vh)return _c.exports;vh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),_c.exports=Kx(),_c.exports}var Wx=Jx(),G=sf();const Oe=Vx(G);function Ep(a,r){return function(){return a.apply(r,arguments)}}const{toString:Fx}=Object.prototype,{getPrototypeOf:of}=Object,{iterator:no,toStringTag:zp}=Symbol,ao=(a=>r=>{const o=Fx.call(r);return a[o]||(a[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),On=a=>(a=a.toLowerCase(),r=>ao(r)===a),io=a=>r=>typeof r===a,{isArray:Pi}=Array,ur=io("undefined");function pr(a){return a!==null&&!ur(a)&&a.constructor!==null&&!ur(a.constructor)&&We(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const Ap=On("ArrayBuffer");function Ix(a){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(a):r=a&&a.buffer&&Ap(a.buffer),r}const Px=io("string"),We=io("function"),Tp=io("number"),mr=a=>a!==null&&typeof a=="object",t3=a=>a===!0||a===!1,Hs=a=>{if(ao(a)!=="object")return!1;const r=of(a);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(zp in a)&&!(no in a)},e3=a=>{if(!mr(a)||pr(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},n3=On("Date"),a3=On("File"),i3=On("Blob"),l3=On("FileList"),r3=a=>mr(a)&&We(a.pipe),s3=a=>{let r;return a&&(typeof FormData=="function"&&a instanceof FormData||We(a.append)&&((r=ao(a))==="formdata"||r==="object"&&We(a.toString)&&a.toString()==="[object FormData]"))},o3=On("URLSearchParams"),[u3,c3,f3,d3]=["ReadableStream","Request","Response","Headers"].map(On),h3=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function gr(a,r,{allOwnKeys:o=!1}={}){if(a===null||typeof a>"u")return;let u,c;if(typeof a!="object"&&(a=[a]),Pi(a))for(u=0,c=a.length;u<c;u++)r.call(null,a[u],u,a);else{if(pr(a))return;const d=o?Object.getOwnPropertyNames(a):Object.keys(a),p=d.length;let g;for(u=0;u<p;u++)g=d[u],r.call(null,a[g],g,a)}}function jp(a,r){if(pr(a))return null;r=r.toLowerCase();const o=Object.keys(a);let u=o.length,c;for(;u-- >0;)if(c=o[u],r===c.toLowerCase())return c;return null}const Wa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Op=a=>!ur(a)&&a!==Wa;function Zc(){const{caseless:a}=Op(this)&&this||{},r={},o=(u,c)=>{const d=a&&jp(r,c)||c;Hs(r[d])&&Hs(u)?r[d]=Zc(r[d],u):Hs(u)?r[d]=Zc({},u):Pi(u)?r[d]=u.slice():r[d]=u};for(let u=0,c=arguments.length;u<c;u++)arguments[u]&&gr(arguments[u],o);return r}const p3=(a,r,o,{allOwnKeys:u}={})=>(gr(r,(c,d)=>{o&&We(c)?a[d]=Ep(c,o):a[d]=c},{allOwnKeys:u}),a),m3=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),g3=(a,r,o,u)=>{a.prototype=Object.create(r.prototype,u),a.prototype.constructor=a,Object.defineProperty(a,"super",{value:r.prototype}),o&&Object.assign(a.prototype,o)},x3=(a,r,o,u)=>{let c,d,p;const g={};if(r=r||{},a==null)return r;do{for(c=Object.getOwnPropertyNames(a),d=c.length;d-- >0;)p=c[d],(!u||u(p,a,r))&&!g[p]&&(r[p]=a[p],g[p]=!0);a=o!==!1&&of(a)}while(a&&(!o||o(a,r))&&a!==Object.prototype);return r},y3=(a,r,o)=>{a=String(a),(o===void 0||o>a.length)&&(o=a.length),o-=r.length;const u=a.indexOf(r,o);return u!==-1&&u===o},b3=a=>{if(!a)return null;if(Pi(a))return a;let r=a.length;if(!Tp(r))return null;const o=new Array(r);for(;r-- >0;)o[r]=a[r];return o},v3=(a=>r=>a&&r instanceof a)(typeof Uint8Array<"u"&&of(Uint8Array)),S3=(a,r)=>{const u=(a&&a[no]).call(a);let c;for(;(c=u.next())&&!c.done;){const d=c.value;r.call(a,d[0],d[1])}},w3=(a,r)=>{let o;const u=[];for(;(o=a.exec(r))!==null;)u.push(o);return u},E3=On("HTMLFormElement"),z3=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,u,c){return u.toUpperCase()+c}),Sh=(({hasOwnProperty:a})=>(r,o)=>a.call(r,o))(Object.prototype),A3=On("RegExp"),_p=(a,r)=>{const o=Object.getOwnPropertyDescriptors(a),u={};gr(o,(c,d)=>{let p;(p=r(c,d,a))!==!1&&(u[d]=p||c)}),Object.defineProperties(a,u)},T3=a=>{_p(a,(r,o)=>{if(We(a)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const u=a[o];if(We(u)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},j3=(a,r)=>{const o={},u=c=>{c.forEach(d=>{o[d]=!0})};return Pi(a)?u(a):u(String(a).split(r)),o},O3=()=>{},_3=(a,r)=>a!=null&&Number.isFinite(a=+a)?a:r;function D3(a){return!!(a&&We(a.append)&&a[zp]==="FormData"&&a[no])}const k3=a=>{const r=new Array(10),o=(u,c)=>{if(mr(u)){if(r.indexOf(u)>=0)return;if(pr(u))return u;if(!("toJSON"in u)){r[c]=u;const d=Pi(u)?[]:{};return gr(u,(p,g)=>{const w=o(p,c+1);!ur(w)&&(d[g]=w)}),r[c]=void 0,d}}return u};return o(a,0)},R3=On("AsyncFunction"),C3=a=>a&&(mr(a)||We(a))&&We(a.then)&&We(a.catch),Dp=((a,r)=>a?setImmediate:r?((o,u)=>(Wa.addEventListener("message",({source:c,data:d})=>{c===Wa&&d===o&&u.length&&u.shift()()},!1),c=>{u.push(c),Wa.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",We(Wa.postMessage)),M3=typeof queueMicrotask<"u"?queueMicrotask.bind(Wa):typeof process<"u"&&process.nextTick||Dp,N3=a=>a!=null&&We(a[no]),N={isArray:Pi,isArrayBuffer:Ap,isBuffer:pr,isFormData:s3,isArrayBufferView:Ix,isString:Px,isNumber:Tp,isBoolean:t3,isObject:mr,isPlainObject:Hs,isEmptyObject:e3,isReadableStream:u3,isRequest:c3,isResponse:f3,isHeaders:d3,isUndefined:ur,isDate:n3,isFile:a3,isBlob:i3,isRegExp:A3,isFunction:We,isStream:r3,isURLSearchParams:o3,isTypedArray:v3,isFileList:l3,forEach:gr,merge:Zc,extend:p3,trim:h3,stripBOM:m3,inherits:g3,toFlatObject:x3,kindOf:ao,kindOfTest:On,endsWith:y3,toArray:b3,forEachEntry:S3,matchAll:w3,isHTMLForm:E3,hasOwnProperty:Sh,hasOwnProp:Sh,reduceDescriptors:_p,freezeMethods:T3,toObjectSet:j3,toCamelCase:z3,noop:O3,toFiniteNumber:_3,findKey:jp,global:Wa,isContextDefined:Op,isSpecCompliantForm:D3,toJSONObject:k3,isAsyncFn:R3,isThenable:C3,setImmediate:Dp,asap:M3,isIterable:N3};function Ot(a,r,o,u,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=a,this.name="AxiosError",r&&(this.code=r),o&&(this.config=o),u&&(this.request=u),c&&(this.response=c,this.status=c.status?c.status:null)}N.inherits(Ot,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.status}}});const kp=Ot.prototype,Rp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(a=>{Rp[a]={value:a}});Object.defineProperties(Ot,Rp);Object.defineProperty(kp,"isAxiosError",{value:!0});Ot.from=(a,r,o,u,c,d)=>{const p=Object.create(kp);return N.toFlatObject(a,p,function(w){return w!==Error.prototype},g=>g!=="isAxiosError"),Ot.call(p,a.message,r,o,u,c),p.cause=a,p.name=a.name,d&&Object.assign(p,d),p};const U3=null;function $c(a){return N.isPlainObject(a)||N.isArray(a)}function Cp(a){return N.endsWith(a,"[]")?a.slice(0,-2):a}function wh(a,r,o){return a?a.concat(r).map(function(c,d){return c=Cp(c),!o&&d?"["+c+"]":c}).join(o?".":""):r}function B3(a){return N.isArray(a)&&!a.some($c)}const H3=N.toFlatObject(N,{},null,function(r){return/^is[A-Z]/.test(r)});function lo(a,r,o){if(!N.isObject(a))throw new TypeError("target must be an object");r=r||new FormData,o=N.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(B,M){return!N.isUndefined(M[B])});const u=o.metaTokens,c=o.visitor||b,d=o.dots,p=o.indexes,w=(o.Blob||typeof Blob<"u"&&Blob)&&N.isSpecCompliantForm(r);if(!N.isFunction(c))throw new TypeError("visitor must be a function");function x(k){if(k===null)return"";if(N.isDate(k))return k.toISOString();if(N.isBoolean(k))return k.toString();if(!w&&N.isBlob(k))throw new Ot("Blob is not supported. Use a Buffer instead.");return N.isArrayBuffer(k)||N.isTypedArray(k)?w&&typeof Blob=="function"?new Blob([k]):Buffer.from(k):k}function b(k,B,M){let tt=k;if(k&&!M&&typeof k=="object"){if(N.endsWith(B,"{}"))B=u?B:B.slice(0,-2),k=JSON.stringify(k);else if(N.isArray(k)&&B3(k)||(N.isFileList(k)||N.endsWith(B,"[]"))&&(tt=N.toArray(k)))return B=Cp(B),tt.forEach(function($,rt){!(N.isUndefined($)||$===null)&&r.append(p===!0?wh([B],rt,d):p===null?B:B+"[]",x($))}),!1}return $c(k)?!0:(r.append(wh(M,B,d),x(k)),!1)}const O=[],E=Object.assign(H3,{defaultVisitor:b,convertValue:x,isVisitable:$c});function K(k,B){if(!N.isUndefined(k)){if(O.indexOf(k)!==-1)throw Error("Circular reference detected in "+B.join("."));O.push(k),N.forEach(k,function(tt,V){(!(N.isUndefined(tt)||tt===null)&&c.call(r,tt,N.isString(V)?V.trim():V,B,E))===!0&&K(tt,B?B.concat(V):[V])}),O.pop()}}if(!N.isObject(a))throw new TypeError("data must be an object");return K(a),r}function Eh(a){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(u){return r[u]})}function uf(a,r){this._pairs=[],a&&lo(a,this,r)}const Mp=uf.prototype;Mp.append=function(r,o){this._pairs.push([r,o])};Mp.toString=function(r){const o=r?function(u){return r.call(this,u,Eh)}:Eh;return this._pairs.map(function(c){return o(c[0])+"="+o(c[1])},"").join("&")};function L3(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Np(a,r,o){if(!r)return a;const u=o&&o.encode||L3;N.isFunction(o)&&(o={serialize:o});const c=o&&o.serialize;let d;if(c?d=c(r,o):d=N.isURLSearchParams(r)?r.toString():new uf(r,o).toString(u),d){const p=a.indexOf("#");p!==-1&&(a=a.slice(0,p)),a+=(a.indexOf("?")===-1?"?":"&")+d}return a}class zh{constructor(){this.handlers=[]}use(r,o,u){return this.handlers.push({fulfilled:r,rejected:o,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){N.forEach(this.handlers,function(u){u!==null&&r(u)})}}const Up={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},q3=typeof URLSearchParams<"u"?URLSearchParams:uf,V3=typeof FormData<"u"?FormData:null,Y3=typeof Blob<"u"?Blob:null,G3={isBrowser:!0,classes:{URLSearchParams:q3,FormData:V3,Blob:Y3},protocols:["http","https","file","blob","url","data"]},cf=typeof window<"u"&&typeof document<"u",Qc=typeof navigator=="object"&&navigator||void 0,X3=cf&&(!Qc||["ReactNative","NativeScript","NS"].indexOf(Qc.product)<0),Z3=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",$3=cf&&window.location.href||"http://localhost",Q3=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:cf,hasStandardBrowserEnv:X3,hasStandardBrowserWebWorkerEnv:Z3,navigator:Qc,origin:$3},Symbol.toStringTag,{value:"Module"})),Be={...Q3,...G3};function K3(a,r){return lo(a,new Be.classes.URLSearchParams,{visitor:function(o,u,c,d){return Be.isNode&&N.isBuffer(o)?(this.append(u,o.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)},...r})}function J3(a){return N.matchAll(/\w+|\[(\w*)]/g,a).map(r=>r[0]==="[]"?"":r[1]||r[0])}function W3(a){const r={},o=Object.keys(a);let u;const c=o.length;let d;for(u=0;u<c;u++)d=o[u],r[d]=a[d];return r}function Bp(a){function r(o,u,c,d){let p=o[d++];if(p==="__proto__")return!0;const g=Number.isFinite(+p),w=d>=o.length;return p=!p&&N.isArray(c)?c.length:p,w?(N.hasOwnProp(c,p)?c[p]=[c[p],u]:c[p]=u,!g):((!c[p]||!N.isObject(c[p]))&&(c[p]=[]),r(o,u,c[p],d)&&N.isArray(c[p])&&(c[p]=W3(c[p])),!g)}if(N.isFormData(a)&&N.isFunction(a.entries)){const o={};return N.forEachEntry(a,(u,c)=>{r(J3(u),c,o,0)}),o}return null}function F3(a,r,o){if(N.isString(a))try{return(r||JSON.parse)(a),N.trim(a)}catch(u){if(u.name!=="SyntaxError")throw u}return(o||JSON.stringify)(a)}const xr={transitional:Up,adapter:["xhr","http","fetch"],transformRequest:[function(r,o){const u=o.getContentType()||"",c=u.indexOf("application/json")>-1,d=N.isObject(r);if(d&&N.isHTMLForm(r)&&(r=new FormData(r)),N.isFormData(r))return c?JSON.stringify(Bp(r)):r;if(N.isArrayBuffer(r)||N.isBuffer(r)||N.isStream(r)||N.isFile(r)||N.isBlob(r)||N.isReadableStream(r))return r;if(N.isArrayBufferView(r))return r.buffer;if(N.isURLSearchParams(r))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let g;if(d){if(u.indexOf("application/x-www-form-urlencoded")>-1)return K3(r,this.formSerializer).toString();if((g=N.isFileList(r))||u.indexOf("multipart/form-data")>-1){const w=this.env&&this.env.FormData;return lo(g?{"files[]":r}:r,w&&new w,this.formSerializer)}}return d||c?(o.setContentType("application/json",!1),F3(r)):r}],transformResponse:[function(r){const o=this.transitional||xr.transitional,u=o&&o.forcedJSONParsing,c=this.responseType==="json";if(N.isResponse(r)||N.isReadableStream(r))return r;if(r&&N.isString(r)&&(u&&!this.responseType||c)){const p=!(o&&o.silentJSONParsing)&&c;try{return JSON.parse(r)}catch(g){if(p)throw g.name==="SyntaxError"?Ot.from(g,Ot.ERR_BAD_RESPONSE,this,null,this.response):g}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Be.classes.FormData,Blob:Be.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch"],a=>{xr.headers[a]={}});const I3=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),P3=a=>{const r={};let o,u,c;return a&&a.split(`
`).forEach(function(p){c=p.indexOf(":"),o=p.substring(0,c).trim().toLowerCase(),u=p.substring(c+1).trim(),!(!o||r[o]&&I3[o])&&(o==="set-cookie"?r[o]?r[o].push(u):r[o]=[u]:r[o]=r[o]?r[o]+", "+u:u)}),r},Ah=Symbol("internals");function nr(a){return a&&String(a).trim().toLowerCase()}function Ls(a){return a===!1||a==null?a:N.isArray(a)?a.map(Ls):String(a)}function t5(a){const r=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let u;for(;u=o.exec(a);)r[u[1]]=u[2];return r}const e5=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function Mc(a,r,o,u,c){if(N.isFunction(u))return u.call(this,r,o);if(c&&(r=o),!!N.isString(r)){if(N.isString(u))return r.indexOf(u)!==-1;if(N.isRegExp(u))return u.test(r)}}function n5(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,o,u)=>o.toUpperCase()+u)}function a5(a,r){const o=N.toCamelCase(" "+r);["get","set","has"].forEach(u=>{Object.defineProperty(a,u+o,{value:function(c,d,p){return this[u].call(this,r,c,d,p)},configurable:!0})})}let Fe=class{constructor(r){r&&this.set(r)}set(r,o,u){const c=this;function d(g,w,x){const b=nr(w);if(!b)throw new Error("header name must be a non-empty string");const O=N.findKey(c,b);(!O||c[O]===void 0||x===!0||x===void 0&&c[O]!==!1)&&(c[O||w]=Ls(g))}const p=(g,w)=>N.forEach(g,(x,b)=>d(x,b,w));if(N.isPlainObject(r)||r instanceof this.constructor)p(r,o);else if(N.isString(r)&&(r=r.trim())&&!e5(r))p(P3(r),o);else if(N.isObject(r)&&N.isIterable(r)){let g={},w,x;for(const b of r){if(!N.isArray(b))throw TypeError("Object iterator must return a key-value pair");g[x=b[0]]=(w=g[x])?N.isArray(w)?[...w,b[1]]:[w,b[1]]:b[1]}p(g,o)}else r!=null&&d(o,r,u);return this}get(r,o){if(r=nr(r),r){const u=N.findKey(this,r);if(u){const c=this[u];if(!o)return c;if(o===!0)return t5(c);if(N.isFunction(o))return o.call(this,c,u);if(N.isRegExp(o))return o.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,o){if(r=nr(r),r){const u=N.findKey(this,r);return!!(u&&this[u]!==void 0&&(!o||Mc(this,this[u],u,o)))}return!1}delete(r,o){const u=this;let c=!1;function d(p){if(p=nr(p),p){const g=N.findKey(u,p);g&&(!o||Mc(u,u[g],g,o))&&(delete u[g],c=!0)}}return N.isArray(r)?r.forEach(d):d(r),c}clear(r){const o=Object.keys(this);let u=o.length,c=!1;for(;u--;){const d=o[u];(!r||Mc(this,this[d],d,r,!0))&&(delete this[d],c=!0)}return c}normalize(r){const o=this,u={};return N.forEach(this,(c,d)=>{const p=N.findKey(u,d);if(p){o[p]=Ls(c),delete o[d];return}const g=r?n5(d):String(d).trim();g!==d&&delete o[d],o[g]=Ls(c),u[g]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const o=Object.create(null);return N.forEach(this,(u,c)=>{u!=null&&u!==!1&&(o[c]=r&&N.isArray(u)?u.join(", "):u)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,o])=>r+": "+o).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...o){const u=new this(r);return o.forEach(c=>u.set(c)),u}static accessor(r){const u=(this[Ah]=this[Ah]={accessors:{}}).accessors,c=this.prototype;function d(p){const g=nr(p);u[g]||(a5(c,p),u[g]=!0)}return N.isArray(r)?r.forEach(d):d(r),this}};Fe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(Fe.prototype,({value:a},r)=>{let o=r[0].toUpperCase()+r.slice(1);return{get:()=>a,set(u){this[o]=u}}});N.freezeMethods(Fe);function Nc(a,r){const o=this||xr,u=r||o,c=Fe.from(u.headers);let d=u.data;return N.forEach(a,function(g){d=g.call(o,d,c.normalize(),r?r.status:void 0)}),c.normalize(),d}function Hp(a){return!!(a&&a.__CANCEL__)}function tl(a,r,o){Ot.call(this,a??"canceled",Ot.ERR_CANCELED,r,o),this.name="CanceledError"}N.inherits(tl,Ot,{__CANCEL__:!0});function Lp(a,r,o){const u=o.config.validateStatus;!o.status||!u||u(o.status)?a(o):r(new Ot("Request failed with status code "+o.status,[Ot.ERR_BAD_REQUEST,Ot.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function i5(a){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return r&&r[1]||""}function l5(a,r){a=a||10;const o=new Array(a),u=new Array(a);let c=0,d=0,p;return r=r!==void 0?r:1e3,function(w){const x=Date.now(),b=u[d];p||(p=x),o[c]=w,u[c]=x;let O=d,E=0;for(;O!==c;)E+=o[O++],O=O%a;if(c=(c+1)%a,c===d&&(d=(d+1)%a),x-p<r)return;const K=b&&x-b;return K?Math.round(E*1e3/K):void 0}}function r5(a,r){let o=0,u=1e3/r,c,d;const p=(x,b=Date.now())=>{o=b,c=null,d&&(clearTimeout(d),d=null),a(...x)};return[(...x)=>{const b=Date.now(),O=b-o;O>=u?p(x,b):(c=x,d||(d=setTimeout(()=>{d=null,p(c)},u-O)))},()=>c&&p(c)]}const Qs=(a,r,o=3)=>{let u=0;const c=l5(50,250);return r5(d=>{const p=d.loaded,g=d.lengthComputable?d.total:void 0,w=p-u,x=c(w),b=p<=g;u=p;const O={loaded:p,total:g,progress:g?p/g:void 0,bytes:w,rate:x||void 0,estimated:x&&g&&b?(g-p)/x:void 0,event:d,lengthComputable:g!=null,[r?"download":"upload"]:!0};a(O)},o)},Th=(a,r)=>{const o=a!=null;return[u=>r[0]({lengthComputable:o,total:a,loaded:u}),r[1]]},jh=a=>(...r)=>N.asap(()=>a(...r)),s5=Be.hasStandardBrowserEnv?((a,r)=>o=>(o=new URL(o,Be.origin),a.protocol===o.protocol&&a.host===o.host&&(r||a.port===o.port)))(new URL(Be.origin),Be.navigator&&/(msie|trident)/i.test(Be.navigator.userAgent)):()=>!0,o5=Be.hasStandardBrowserEnv?{write(a,r,o,u,c,d){const p=[a+"="+encodeURIComponent(r)];N.isNumber(o)&&p.push("expires="+new Date(o).toGMTString()),N.isString(u)&&p.push("path="+u),N.isString(c)&&p.push("domain="+c),d===!0&&p.push("secure"),document.cookie=p.join("; ")},read(a){const r=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(a){this.write(a,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function u5(a){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function c5(a,r){return r?a.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):a}function qp(a,r,o){let u=!u5(r);return a&&(u||o==!1)?c5(a,r):r}const Oh=a=>a instanceof Fe?{...a}:a;function ni(a,r){r=r||{};const o={};function u(x,b,O,E){return N.isPlainObject(x)&&N.isPlainObject(b)?N.merge.call({caseless:E},x,b):N.isPlainObject(b)?N.merge({},b):N.isArray(b)?b.slice():b}function c(x,b,O,E){if(N.isUndefined(b)){if(!N.isUndefined(x))return u(void 0,x,O,E)}else return u(x,b,O,E)}function d(x,b){if(!N.isUndefined(b))return u(void 0,b)}function p(x,b){if(N.isUndefined(b)){if(!N.isUndefined(x))return u(void 0,x)}else return u(void 0,b)}function g(x,b,O){if(O in r)return u(x,b);if(O in a)return u(void 0,x)}const w={url:d,method:d,data:d,baseURL:p,transformRequest:p,transformResponse:p,paramsSerializer:p,timeout:p,timeoutMessage:p,withCredentials:p,withXSRFToken:p,adapter:p,responseType:p,xsrfCookieName:p,xsrfHeaderName:p,onUploadProgress:p,onDownloadProgress:p,decompress:p,maxContentLength:p,maxBodyLength:p,beforeRedirect:p,transport:p,httpAgent:p,httpsAgent:p,cancelToken:p,socketPath:p,responseEncoding:p,validateStatus:g,headers:(x,b,O)=>c(Oh(x),Oh(b),O,!0)};return N.forEach(Object.keys({...a,...r}),function(b){const O=w[b]||c,E=O(a[b],r[b],b);N.isUndefined(E)&&O!==g||(o[b]=E)}),o}const Vp=a=>{const r=ni({},a);let{data:o,withXSRFToken:u,xsrfHeaderName:c,xsrfCookieName:d,headers:p,auth:g}=r;r.headers=p=Fe.from(p),r.url=Np(qp(r.baseURL,r.url,r.allowAbsoluteUrls),a.params,a.paramsSerializer),g&&p.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):"")));let w;if(N.isFormData(o)){if(Be.hasStandardBrowserEnv||Be.hasStandardBrowserWebWorkerEnv)p.setContentType(void 0);else if((w=p.getContentType())!==!1){const[x,...b]=w?w.split(";").map(O=>O.trim()).filter(Boolean):[];p.setContentType([x||"multipart/form-data",...b].join("; "))}}if(Be.hasStandardBrowserEnv&&(u&&N.isFunction(u)&&(u=u(r)),u||u!==!1&&s5(r.url))){const x=c&&d&&o5.read(d);x&&p.set(c,x)}return r},f5=typeof XMLHttpRequest<"u",d5=f5&&function(a){return new Promise(function(o,u){const c=Vp(a);let d=c.data;const p=Fe.from(c.headers).normalize();let{responseType:g,onUploadProgress:w,onDownloadProgress:x}=c,b,O,E,K,k;function B(){K&&K(),k&&k(),c.cancelToken&&c.cancelToken.unsubscribe(b),c.signal&&c.signal.removeEventListener("abort",b)}let M=new XMLHttpRequest;M.open(c.method.toUpperCase(),c.url,!0),M.timeout=c.timeout;function tt(){if(!M)return;const $=Fe.from("getAllResponseHeaders"in M&&M.getAllResponseHeaders()),H={data:!g||g==="text"||g==="json"?M.responseText:M.response,status:M.status,statusText:M.statusText,headers:$,config:a,request:M};Lp(function(J){o(J),B()},function(J){u(J),B()},H),M=null}"onloadend"in M?M.onloadend=tt:M.onreadystatechange=function(){!M||M.readyState!==4||M.status===0&&!(M.responseURL&&M.responseURL.indexOf("file:")===0)||setTimeout(tt)},M.onabort=function(){M&&(u(new Ot("Request aborted",Ot.ECONNABORTED,a,M)),M=null)},M.onerror=function(){u(new Ot("Network Error",Ot.ERR_NETWORK,a,M)),M=null},M.ontimeout=function(){let rt=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const H=c.transitional||Up;c.timeoutErrorMessage&&(rt=c.timeoutErrorMessage),u(new Ot(rt,H.clarifyTimeoutError?Ot.ETIMEDOUT:Ot.ECONNABORTED,a,M)),M=null},d===void 0&&p.setContentType(null),"setRequestHeader"in M&&N.forEach(p.toJSON(),function(rt,H){M.setRequestHeader(H,rt)}),N.isUndefined(c.withCredentials)||(M.withCredentials=!!c.withCredentials),g&&g!=="json"&&(M.responseType=c.responseType),x&&([E,k]=Qs(x,!0),M.addEventListener("progress",E)),w&&M.upload&&([O,K]=Qs(w),M.upload.addEventListener("progress",O),M.upload.addEventListener("loadend",K)),(c.cancelToken||c.signal)&&(b=$=>{M&&(u(!$||$.type?new tl(null,a,M):$),M.abort(),M=null)},c.cancelToken&&c.cancelToken.subscribe(b),c.signal&&(c.signal.aborted?b():c.signal.addEventListener("abort",b)));const V=i5(c.url);if(V&&Be.protocols.indexOf(V)===-1){u(new Ot("Unsupported protocol "+V+":",Ot.ERR_BAD_REQUEST,a));return}M.send(d||null)})},h5=(a,r)=>{const{length:o}=a=a?a.filter(Boolean):[];if(r||o){let u=new AbortController,c;const d=function(x){if(!c){c=!0,g();const b=x instanceof Error?x:this.reason;u.abort(b instanceof Ot?b:new tl(b instanceof Error?b.message:b))}};let p=r&&setTimeout(()=>{p=null,d(new Ot(`timeout ${r} of ms exceeded`,Ot.ETIMEDOUT))},r);const g=()=>{a&&(p&&clearTimeout(p),p=null,a.forEach(x=>{x.unsubscribe?x.unsubscribe(d):x.removeEventListener("abort",d)}),a=null)};a.forEach(x=>x.addEventListener("abort",d));const{signal:w}=u;return w.unsubscribe=()=>N.asap(g),w}},p5=function*(a,r){let o=a.byteLength;if(o<r){yield a;return}let u=0,c;for(;u<o;)c=u+r,yield a.slice(u,c),u=c},m5=async function*(a,r){for await(const o of g5(a))yield*p5(o,r)},g5=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const r=a.getReader();try{for(;;){const{done:o,value:u}=await r.read();if(o)break;yield u}}finally{await r.cancel()}},_h=(a,r,o,u)=>{const c=m5(a,r);let d=0,p,g=w=>{p||(p=!0,u&&u(w))};return new ReadableStream({async pull(w){try{const{done:x,value:b}=await c.next();if(x){g(),w.close();return}let O=b.byteLength;if(o){let E=d+=O;o(E)}w.enqueue(new Uint8Array(b))}catch(x){throw g(x),x}},cancel(w){return g(w),c.return()}},{highWaterMark:2})},ro=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Yp=ro&&typeof ReadableStream=="function",x5=ro&&(typeof TextEncoder=="function"?(a=>r=>a.encode(r))(new TextEncoder):async a=>new Uint8Array(await new Response(a).arrayBuffer())),Gp=(a,...r)=>{try{return!!a(...r)}catch{return!1}},y5=Yp&&Gp(()=>{let a=!1;const r=new Request(Be.origin,{body:new ReadableStream,method:"POST",get duplex(){return a=!0,"half"}}).headers.has("Content-Type");return a&&!r}),Dh=64*1024,Kc=Yp&&Gp(()=>N.isReadableStream(new Response("").body)),Ks={stream:Kc&&(a=>a.body)};ro&&(a=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!Ks[r]&&(Ks[r]=N.isFunction(a[r])?o=>o[r]():(o,u)=>{throw new Ot(`Response type '${r}' is not supported`,Ot.ERR_NOT_SUPPORT,u)})})})(new Response);const b5=async a=>{if(a==null)return 0;if(N.isBlob(a))return a.size;if(N.isSpecCompliantForm(a))return(await new Request(Be.origin,{method:"POST",body:a}).arrayBuffer()).byteLength;if(N.isArrayBufferView(a)||N.isArrayBuffer(a))return a.byteLength;if(N.isURLSearchParams(a)&&(a=a+""),N.isString(a))return(await x5(a)).byteLength},v5=async(a,r)=>{const o=N.toFiniteNumber(a.getContentLength());return o??b5(r)},S5=ro&&(async a=>{let{url:r,method:o,data:u,signal:c,cancelToken:d,timeout:p,onDownloadProgress:g,onUploadProgress:w,responseType:x,headers:b,withCredentials:O="same-origin",fetchOptions:E}=Vp(a);x=x?(x+"").toLowerCase():"text";let K=h5([c,d&&d.toAbortSignal()],p),k;const B=K&&K.unsubscribe&&(()=>{K.unsubscribe()});let M;try{if(w&&y5&&o!=="get"&&o!=="head"&&(M=await v5(b,u))!==0){let H=new Request(r,{method:"POST",body:u,duplex:"half"}),et;if(N.isFormData(u)&&(et=H.headers.get("content-type"))&&b.setContentType(et),H.body){const[J,lt]=Th(M,Qs(jh(w)));u=_h(H.body,Dh,J,lt)}}N.isString(O)||(O=O?"include":"omit");const tt="credentials"in Request.prototype;k=new Request(r,{...E,signal:K,method:o.toUpperCase(),headers:b.normalize().toJSON(),body:u,duplex:"half",credentials:tt?O:void 0});let V=await fetch(k,E);const $=Kc&&(x==="stream"||x==="response");if(Kc&&(g||$&&B)){const H={};["status","statusText","headers"].forEach(zt=>{H[zt]=V[zt]});const et=N.toFiniteNumber(V.headers.get("content-length")),[J,lt]=g&&Th(et,Qs(jh(g),!0))||[];V=new Response(_h(V.body,Dh,J,()=>{lt&&lt(),B&&B()}),H)}x=x||"text";let rt=await Ks[N.findKey(Ks,x)||"text"](V,a);return!$&&B&&B(),await new Promise((H,et)=>{Lp(H,et,{data:rt,headers:Fe.from(V.headers),status:V.status,statusText:V.statusText,config:a,request:k})})}catch(tt){throw B&&B(),tt&&tt.name==="TypeError"&&/Load failed|fetch/i.test(tt.message)?Object.assign(new Ot("Network Error",Ot.ERR_NETWORK,a,k),{cause:tt.cause||tt}):Ot.from(tt,tt&&tt.code,a,k)}}),Jc={http:U3,xhr:d5,fetch:S5};N.forEach(Jc,(a,r)=>{if(a){try{Object.defineProperty(a,"name",{value:r})}catch{}Object.defineProperty(a,"adapterName",{value:r})}});const kh=a=>`- ${a}`,w5=a=>N.isFunction(a)||a===null||a===!1,Xp={getAdapter:a=>{a=N.isArray(a)?a:[a];const{length:r}=a;let o,u;const c={};for(let d=0;d<r;d++){o=a[d];let p;if(u=o,!w5(o)&&(u=Jc[(p=String(o)).toLowerCase()],u===void 0))throw new Ot(`Unknown adapter '${p}'`);if(u)break;c[p||"#"+d]=u}if(!u){const d=Object.entries(c).map(([g,w])=>`adapter ${g} `+(w===!1?"is not supported by the environment":"is not available in the build"));let p=r?d.length>1?`since :
`+d.map(kh).join(`
`):" "+kh(d[0]):"as no adapter specified";throw new Ot("There is no suitable adapter to dispatch the request "+p,"ERR_NOT_SUPPORT")}return u},adapters:Jc};function Uc(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new tl(null,a)}function Rh(a){return Uc(a),a.headers=Fe.from(a.headers),a.data=Nc.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),Xp.getAdapter(a.adapter||xr.adapter)(a).then(function(u){return Uc(a),u.data=Nc.call(a,a.transformResponse,u),u.headers=Fe.from(u.headers),u},function(u){return Hp(u)||(Uc(a),u&&u.response&&(u.response.data=Nc.call(a,a.transformResponse,u.response),u.response.headers=Fe.from(u.response.headers))),Promise.reject(u)})}const Zp="1.11.0",so={};["object","boolean","number","function","string","symbol"].forEach((a,r)=>{so[a]=function(u){return typeof u===a||"a"+(r<1?"n ":" ")+a}});const Ch={};so.transitional=function(r,o,u){function c(d,p){return"[Axios v"+Zp+"] Transitional option '"+d+"'"+p+(u?". "+u:"")}return(d,p,g)=>{if(r===!1)throw new Ot(c(p," has been removed"+(o?" in "+o:"")),Ot.ERR_DEPRECATED);return o&&!Ch[p]&&(Ch[p]=!0,console.warn(c(p," has been deprecated since v"+o+" and will be removed in the near future"))),r?r(d,p,g):!0}};so.spelling=function(r){return(o,u)=>(console.warn(`${u} is likely a misspelling of ${r}`),!0)};function E5(a,r,o){if(typeof a!="object")throw new Ot("options must be an object",Ot.ERR_BAD_OPTION_VALUE);const u=Object.keys(a);let c=u.length;for(;c-- >0;){const d=u[c],p=r[d];if(p){const g=a[d],w=g===void 0||p(g,d,a);if(w!==!0)throw new Ot("option "+d+" must be "+w,Ot.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new Ot("Unknown option "+d,Ot.ERR_BAD_OPTION)}}const qs={assertOptions:E5,validators:so},Un=qs.validators;let Pa=class{constructor(r){this.defaults=r||{},this.interceptors={request:new zh,response:new zh}}async request(r,o){try{return await this._request(r,o)}catch(u){if(u instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const d=c.stack?c.stack.replace(/^.+\n/,""):"";try{u.stack?d&&!String(u.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(u.stack+=`
`+d):u.stack=d}catch{}}throw u}}_request(r,o){typeof r=="string"?(o=o||{},o.url=r):o=r||{},o=ni(this.defaults,o);const{transitional:u,paramsSerializer:c,headers:d}=o;u!==void 0&&qs.assertOptions(u,{silentJSONParsing:Un.transitional(Un.boolean),forcedJSONParsing:Un.transitional(Un.boolean),clarifyTimeoutError:Un.transitional(Un.boolean)},!1),c!=null&&(N.isFunction(c)?o.paramsSerializer={serialize:c}:qs.assertOptions(c,{encode:Un.function,serialize:Un.function},!0)),o.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?o.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:o.allowAbsoluteUrls=!0),qs.assertOptions(o,{baseUrl:Un.spelling("baseURL"),withXsrfToken:Un.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let p=d&&N.merge(d.common,d[o.method]);d&&N.forEach(["delete","get","head","post","put","patch","common"],k=>{delete d[k]}),o.headers=Fe.concat(p,d);const g=[];let w=!0;this.interceptors.request.forEach(function(B){typeof B.runWhen=="function"&&B.runWhen(o)===!1||(w=w&&B.synchronous,g.unshift(B.fulfilled,B.rejected))});const x=[];this.interceptors.response.forEach(function(B){x.push(B.fulfilled,B.rejected)});let b,O=0,E;if(!w){const k=[Rh.bind(this),void 0];for(k.unshift(...g),k.push(...x),E=k.length,b=Promise.resolve(o);O<E;)b=b.then(k[O++],k[O++]);return b}E=g.length;let K=o;for(O=0;O<E;){const k=g[O++],B=g[O++];try{K=k(K)}catch(M){B.call(this,M);break}}try{b=Rh.call(this,K)}catch(k){return Promise.reject(k)}for(O=0,E=x.length;O<E;)b=b.then(x[O++],x[O++]);return b}getUri(r){r=ni(this.defaults,r);const o=qp(r.baseURL,r.url,r.allowAbsoluteUrls);return Np(o,r.params,r.paramsSerializer)}};N.forEach(["delete","get","head","options"],function(r){Pa.prototype[r]=function(o,u){return this.request(ni(u||{},{method:r,url:o,data:(u||{}).data}))}});N.forEach(["post","put","patch"],function(r){function o(u){return function(d,p,g){return this.request(ni(g||{},{method:r,headers:u?{"Content-Type":"multipart/form-data"}:{},url:d,data:p}))}}Pa.prototype[r]=o(),Pa.prototype[r+"Form"]=o(!0)});let z5=class $p{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(d){o=d});const u=this;this.promise.then(c=>{if(!u._listeners)return;let d=u._listeners.length;for(;d-- >0;)u._listeners[d](c);u._listeners=null}),this.promise.then=c=>{let d;const p=new Promise(g=>{u.subscribe(g),d=g}).then(c);return p.cancel=function(){u.unsubscribe(d)},p},r(function(d,p,g){u.reason||(u.reason=new tl(d,p,g),o(u.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const o=this._listeners.indexOf(r);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const r=new AbortController,o=u=>{r.abort(u)};return this.subscribe(o),r.signal.unsubscribe=()=>this.unsubscribe(o),r.signal}static source(){let r;return{token:new $p(function(c){r=c}),cancel:r}}};function A5(a){return function(o){return a.apply(null,o)}}function T5(a){return N.isObject(a)&&a.isAxiosError===!0}const Wc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Wc).forEach(([a,r])=>{Wc[r]=a});function Qp(a){const r=new Pa(a),o=Ep(Pa.prototype.request,r);return N.extend(o,Pa.prototype,r,{allOwnKeys:!0}),N.extend(o,r,null,{allOwnKeys:!0}),o.create=function(c){return Qp(ni(a,c))},o}const qt=Qp(xr);qt.Axios=Pa;qt.CanceledError=tl;qt.CancelToken=z5;qt.isCancel=Hp;qt.VERSION=Zp;qt.toFormData=lo;qt.AxiosError=Ot;qt.Cancel=qt.CanceledError;qt.all=function(r){return Promise.all(r)};qt.spread=A5;qt.isAxiosError=T5;qt.mergeConfig=ni;qt.AxiosHeaders=Fe;qt.formToJSON=a=>Bp(N.isHTMLForm(a)?new FormData(a):a);qt.getAdapter=Xp.getAdapter;qt.HttpStatusCode=Wc;qt.default=qt;const{Axios:wb,AxiosError:Eb,CanceledError:zb,isCancel:Ab,CancelToken:Tb,VERSION:jb,all:Ob,Cancel:_b,isAxiosError:Db,spread:kb,toFormData:Rb,AxiosHeaders:Cb,HttpStatusCode:Mb,formToJSON:Nb,getAdapter:Ub,mergeConfig:Bb}=qt;var yr=a=>a.type==="checkbox",Fa=a=>a instanceof Date,qe=a=>a==null;const Kp=a=>typeof a=="object";var fe=a=>!qe(a)&&!Array.isArray(a)&&Kp(a)&&!Fa(a),j5=a=>fe(a)&&a.target?yr(a.target)?a.target.checked:a.target.value:a,O5=a=>a.substring(0,a.search(/\.\d+(\.|$)/))||a,_5=(a,r)=>a.has(O5(r)),D5=a=>{const r=a.constructor&&a.constructor.prototype;return fe(r)&&r.hasOwnProperty("isPrototypeOf")},ff=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function je(a){let r;const o=Array.isArray(a),u=typeof FileList<"u"?a instanceof FileList:!1;if(a instanceof Date)r=new Date(a);else if(!(ff&&(a instanceof Blob||u))&&(o||fe(a)))if(r=o?[]:Object.create(Object.getPrototypeOf(a)),!o&&!D5(a))r=a;else for(const c in a)a.hasOwnProperty(c)&&(r[c]=je(a[c]));else return a;return r}var oo=a=>/^\w*$/.test(a),me=a=>a===void 0,df=a=>Array.isArray(a)?a.filter(Boolean):[],hf=a=>df(a.replace(/["|']|\]/g,"").split(/\.|\[/)),ht=(a,r,o)=>{if(!r||!fe(a))return o;const u=(oo(r)?[r]:hf(r)).reduce((c,d)=>qe(c)?c:c[d],a);return me(u)||u===a?me(a[r])?o:a[r]:u},Bn=a=>typeof a=="boolean",ne=(a,r,o)=>{let u=-1;const c=oo(r)?[r]:hf(r),d=c.length,p=d-1;for(;++u<d;){const g=c[u];let w=o;if(u!==p){const x=a[g];w=fe(x)||Array.isArray(x)?x:isNaN(+c[u+1])?{}:[]}if(g==="__proto__"||g==="constructor"||g==="prototype")return;a[g]=w,a=a[g]}};const Mh={BLUR:"blur",FOCUS_OUT:"focusout"},An={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ia={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},k5=Oe.createContext(null);k5.displayName="HookFormContext";var R5=(a,r,o,u=!0)=>{const c={defaultValues:r._defaultValues};for(const d in a)Object.defineProperty(c,d,{get:()=>{const p=d;return r._proxyFormState[p]!==An.all&&(r._proxyFormState[p]=!u||An.all),a[p]}});return c};const C5=typeof window<"u"?Oe.useLayoutEffect:Oe.useEffect;var Ln=a=>typeof a=="string",M5=(a,r,o,u,c)=>Ln(a)?(u&&r.watch.add(a),ht(o,a,c)):Array.isArray(a)?a.map(d=>(u&&r.watch.add(d),ht(o,d))):(u&&(r.watchAll=!0),o),Fc=a=>qe(a)||!Kp(a);function ka(a,r,o=new WeakSet){if(Fc(a)||Fc(r))return a===r;if(Fa(a)&&Fa(r))return a.getTime()===r.getTime();const u=Object.keys(a),c=Object.keys(r);if(u.length!==c.length)return!1;if(o.has(a)||o.has(r))return!0;o.add(a),o.add(r);for(const d of u){const p=a[d];if(!c.includes(d))return!1;if(d!=="ref"){const g=r[d];if(Fa(p)&&Fa(g)||fe(p)&&fe(g)||Array.isArray(p)&&Array.isArray(g)?!ka(p,g,o):p!==g)return!1}}return!0}var N5=(a,r,o,u,c)=>r?{...o[a],types:{...o[a]&&o[a].types?o[a].types:{},[u]:c||!0}}:{},rr=a=>Array.isArray(a)?a:[a],Nh=()=>{let a=[];return{get observers(){return a},next:c=>{for(const d of a)d.next&&d.next(c)},subscribe:c=>(a.push(c),{unsubscribe:()=>{a=a.filter(d=>d!==c)}}),unsubscribe:()=>{a=[]}}},Ke=a=>fe(a)&&!Object.keys(a).length,pf=a=>a.type==="file",Tn=a=>typeof a=="function",Js=a=>{if(!ff)return!1;const r=a?a.ownerDocument:0;return a instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Jp=a=>a.type==="select-multiple",mf=a=>a.type==="radio",U5=a=>mf(a)||yr(a),Bc=a=>Js(a)&&a.isConnected;function B5(a,r){const o=r.slice(0,-1).length;let u=0;for(;u<o;)a=me(a)?u++:a[r[u++]];return a}function H5(a){for(const r in a)if(a.hasOwnProperty(r)&&!me(a[r]))return!1;return!0}function pe(a,r){const o=Array.isArray(r)?r:oo(r)?[r]:hf(r),u=o.length===1?a:B5(a,o),c=o.length-1,d=o[c];return u&&delete u[d],c!==0&&(fe(u)&&Ke(u)||Array.isArray(u)&&H5(u))&&pe(a,o.slice(0,-1)),a}var Wp=a=>{for(const r in a)if(Tn(a[r]))return!0;return!1};function Ws(a,r={}){const o=Array.isArray(a);if(fe(a)||o)for(const u in a)Array.isArray(a[u])||fe(a[u])&&!Wp(a[u])?(r[u]=Array.isArray(a[u])?[]:{},Ws(a[u],r[u])):qe(a[u])||(r[u]=!0);return r}function Fp(a,r,o){const u=Array.isArray(a);if(fe(a)||u)for(const c in a)Array.isArray(a[c])||fe(a[c])&&!Wp(a[c])?me(r)||Fc(o[c])?o[c]=Array.isArray(a[c])?Ws(a[c],[]):{...Ws(a[c])}:Fp(a[c],qe(r)?{}:r[c],o[c]):o[c]=!ka(a[c],r[c]);return o}var ar=(a,r)=>Fp(a,r,Ws(r));const Uh={value:!1,isValid:!1},Bh={value:!0,isValid:!0};var Ip=a=>{if(Array.isArray(a)){if(a.length>1){const r=a.filter(o=>o&&o.checked&&!o.disabled).map(o=>o.value);return{value:r,isValid:!!r.length}}return a[0].checked&&!a[0].disabled?a[0].attributes&&!me(a[0].attributes.value)?me(a[0].value)||a[0].value===""?Bh:{value:a[0].value,isValid:!0}:Bh:Uh}return Uh},Pp=(a,{valueAsNumber:r,valueAsDate:o,setValueAs:u})=>me(a)?a:r?a===""?NaN:a&&+a:o&&Ln(a)?new Date(a):u?u(a):a;const Hh={isValid:!1,value:null};var tm=a=>Array.isArray(a)?a.reduce((r,o)=>o&&o.checked&&!o.disabled?{isValid:!0,value:o.value}:r,Hh):Hh;function Lh(a){const r=a.ref;return pf(r)?r.files:mf(r)?tm(a.refs).value:Jp(r)?[...r.selectedOptions].map(({value:o})=>o):yr(r)?Ip(a.refs).value:Pp(me(r.value)?a.ref.value:r.value,a)}var L5=(a,r,o,u)=>{const c={};for(const d of a){const p=ht(r,d);p&&ne(c,d,p._f)}return{criteriaMode:o,names:[...a],fields:c,shouldUseNativeValidation:u}},Fs=a=>a instanceof RegExp,ir=a=>me(a)?a:Fs(a)?a.source:fe(a)?Fs(a.value)?a.value.source:a.value:a,qh=a=>({isOnSubmit:!a||a===An.onSubmit,isOnBlur:a===An.onBlur,isOnChange:a===An.onChange,isOnAll:a===An.all,isOnTouch:a===An.onTouched});const Vh="AsyncFunction";var q5=a=>!!a&&!!a.validate&&!!(Tn(a.validate)&&a.validate.constructor.name===Vh||fe(a.validate)&&Object.values(a.validate).find(r=>r.constructor.name===Vh)),V5=a=>a.mount&&(a.required||a.min||a.max||a.maxLength||a.minLength||a.pattern||a.validate),Yh=(a,r,o)=>!o&&(r.watchAll||r.watch.has(a)||[...r.watch].some(u=>a.startsWith(u)&&/^\.\w+/.test(a.slice(u.length))));const sr=(a,r,o,u)=>{for(const c of o||Object.keys(a)){const d=ht(a,c);if(d){const{_f:p,...g}=d;if(p){if(p.refs&&p.refs[0]&&r(p.refs[0],c)&&!u)return!0;if(p.ref&&r(p.ref,p.name)&&!u)return!0;if(sr(g,r))break}else if(fe(g)&&sr(g,r))break}}};function Gh(a,r,o){const u=ht(a,o);if(u||oo(o))return{error:u,name:o};const c=o.split(".");for(;c.length;){const d=c.join("."),p=ht(r,d),g=ht(a,d);if(p&&!Array.isArray(p)&&o!==d)return{name:o};if(g&&g.type)return{name:d,error:g};if(g&&g.root&&g.root.type)return{name:`${d}.root`,error:g.root};c.pop()}return{name:o}}var Y5=(a,r,o,u)=>{o(a);const{name:c,...d}=a;return Ke(d)||Object.keys(d).length>=Object.keys(r).length||Object.keys(d).find(p=>r[p]===(!u||An.all))},G5=(a,r,o)=>!a||!r||a===r||rr(a).some(u=>u&&(o?u===r:u.startsWith(r)||r.startsWith(u))),X5=(a,r,o,u,c)=>c.isOnAll?!1:!o&&c.isOnTouch?!(r||a):(o?u.isOnBlur:c.isOnBlur)?!a:(o?u.isOnChange:c.isOnChange)?a:!0,Z5=(a,r)=>!df(ht(a,r)).length&&pe(a,r),$5=(a,r,o)=>{const u=rr(ht(a,o));return ne(u,"root",r[o]),ne(a,o,u),a},Vs=a=>Ln(a);function Xh(a,r,o="validate"){if(Vs(a)||Array.isArray(a)&&a.every(Vs)||Bn(a)&&!a)return{type:o,message:Vs(a)?a:"",ref:r}}var Xi=a=>fe(a)&&!Fs(a)?a:{value:a,message:""},Zh=async(a,r,o,u,c,d)=>{const{ref:p,refs:g,required:w,maxLength:x,minLength:b,min:O,max:E,pattern:K,validate:k,name:B,valueAsNumber:M,mount:tt}=a._f,V=ht(o,B);if(!tt||r.has(B))return{};const $=g?g[0]:p,rt=I=>{c&&$.reportValidity&&($.setCustomValidity(Bn(I)?"":I||""),$.reportValidity())},H={},et=mf(p),J=yr(p),lt=et||J,zt=(M||pf(p))&&me(p.value)&&me(V)||Js(p)&&p.value===""||V===""||Array.isArray(V)&&!V.length,Yt=N5.bind(null,B,u,H),Ct=(I,st,xt,yt=ia.maxLength,_=ia.minLength)=>{const Q=I?st:xt;H[B]={type:I?yt:_,message:Q,ref:p,...Yt(I?yt:_,Q)}};if(d?!Array.isArray(V)||!V.length:w&&(!lt&&(zt||qe(V))||Bn(V)&&!V||J&&!Ip(g).isValid||et&&!tm(g).isValid)){const{value:I,message:st}=Vs(w)?{value:!!w,message:w}:Xi(w);if(I&&(H[B]={type:ia.required,message:st,ref:$,...Yt(ia.required,st)},!u))return rt(st),H}if(!zt&&(!qe(O)||!qe(E))){let I,st;const xt=Xi(E),yt=Xi(O);if(!qe(V)&&!isNaN(V)){const _=p.valueAsNumber||V&&+V;qe(xt.value)||(I=_>xt.value),qe(yt.value)||(st=_<yt.value)}else{const _=p.valueAsDate||new Date(V),Q=S=>new Date(new Date().toDateString()+" "+S),ft=p.type=="time",bt=p.type=="week";Ln(xt.value)&&V&&(I=ft?Q(V)>Q(xt.value):bt?V>xt.value:_>new Date(xt.value)),Ln(yt.value)&&V&&(st=ft?Q(V)<Q(yt.value):bt?V<yt.value:_<new Date(yt.value))}if((I||st)&&(Ct(!!I,xt.message,yt.message,ia.max,ia.min),!u))return rt(H[B].message),H}if((x||b)&&!zt&&(Ln(V)||d&&Array.isArray(V))){const I=Xi(x),st=Xi(b),xt=!qe(I.value)&&V.length>+I.value,yt=!qe(st.value)&&V.length<+st.value;if((xt||yt)&&(Ct(xt,I.message,st.message),!u))return rt(H[B].message),H}if(K&&!zt&&Ln(V)){const{value:I,message:st}=Xi(K);if(Fs(I)&&!V.match(I)&&(H[B]={type:ia.pattern,message:st,ref:p,...Yt(ia.pattern,st)},!u))return rt(st),H}if(k){if(Tn(k)){const I=await k(V,o),st=Xh(I,$);if(st&&(H[B]={...st,...Yt(ia.validate,st.message)},!u))return rt(st.message),H}else if(fe(k)){let I={};for(const st in k){if(!Ke(I)&&!u)break;const xt=Xh(await k[st](V,o),$,st);xt&&(I={...xt,...Yt(st,xt.message)},rt(xt.message),u&&(H[B]=I))}if(!Ke(I)&&(H[B]={ref:$,...I},!u))return H}}return rt(!0),H};const Q5={mode:An.onSubmit,reValidateMode:An.onChange,shouldFocusError:!0};function K5(a={}){let r={...Q5,...a},o={submitCount:0,isDirty:!1,isReady:!1,isLoading:Tn(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},u={},c=fe(r.defaultValues)||fe(r.values)?je(r.defaultValues||r.values)||{}:{},d=r.shouldUnregister?{}:je(c),p={action:!1,mount:!1,watch:!1},g={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},w,x=0;const b={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let O={...b};const E={array:Nh(),state:Nh()},K=r.criteriaMode===An.all,k=v=>T=>{clearTimeout(x),x=setTimeout(v,T)},B=async v=>{if(!r.disabled&&(b.isValid||O.isValid||v)){const T=r.resolver?Ke((await J()).errors):await zt(u,!0);T!==o.isValid&&E.state.next({isValid:T})}},M=(v,T)=>{!r.disabled&&(b.isValidating||b.validatingFields||O.isValidating||O.validatingFields)&&((v||Array.from(g.mount)).forEach(U=>{U&&(T?ne(o.validatingFields,U,T):pe(o.validatingFields,U))}),E.state.next({validatingFields:o.validatingFields,isValidating:!Ke(o.validatingFields)}))},tt=(v,T=[],U,it,at=!0,P=!0)=>{if(it&&U&&!r.disabled){if(p.action=!0,P&&Array.isArray(ht(u,v))){const ct=U(ht(u,v),it.argA,it.argB);at&&ne(u,v,ct)}if(P&&Array.isArray(ht(o.errors,v))){const ct=U(ht(o.errors,v),it.argA,it.argB);at&&ne(o.errors,v,ct),Z5(o.errors,v)}if((b.touchedFields||O.touchedFields)&&P&&Array.isArray(ht(o.touchedFields,v))){const ct=U(ht(o.touchedFields,v),it.argA,it.argB);at&&ne(o.touchedFields,v,ct)}(b.dirtyFields||O.dirtyFields)&&(o.dirtyFields=ar(c,d)),E.state.next({name:v,isDirty:Ct(v,T),dirtyFields:o.dirtyFields,errors:o.errors,isValid:o.isValid})}else ne(d,v,T)},V=(v,T)=>{ne(o.errors,v,T),E.state.next({errors:o.errors})},$=v=>{o.errors=v,E.state.next({errors:o.errors,isValid:!1})},rt=(v,T,U,it)=>{const at=ht(u,v);if(at){const P=ht(d,v,me(U)?ht(c,v):U);me(P)||it&&it.defaultChecked||T?ne(d,v,T?P:Lh(at._f)):xt(v,P),p.mount&&B()}},H=(v,T,U,it,at)=>{let P=!1,ct=!1;const At={name:v};if(!r.disabled){if(!U||it){(b.isDirty||O.isDirty)&&(ct=o.isDirty,o.isDirty=At.isDirty=Ct(),P=ct!==At.isDirty);const jt=ka(ht(c,v),T);ct=!!ht(o.dirtyFields,v),jt?pe(o.dirtyFields,v):ne(o.dirtyFields,v,!0),At.dirtyFields=o.dirtyFields,P=P||(b.dirtyFields||O.dirtyFields)&&ct!==!jt}if(U){const jt=ht(o.touchedFields,v);jt||(ne(o.touchedFields,v,U),At.touchedFields=o.touchedFields,P=P||(b.touchedFields||O.touchedFields)&&jt!==U)}P&&at&&E.state.next(At)}return P?At:{}},et=(v,T,U,it)=>{const at=ht(o.errors,v),P=(b.isValid||O.isValid)&&Bn(T)&&o.isValid!==T;if(r.delayError&&U?(w=k(()=>V(v,U)),w(r.delayError)):(clearTimeout(x),w=null,U?ne(o.errors,v,U):pe(o.errors,v)),(U?!ka(at,U):at)||!Ke(it)||P){const ct={...it,...P&&Bn(T)?{isValid:T}:{},errors:o.errors,name:v};o={...o,...ct},E.state.next(ct)}},J=async v=>{M(v,!0);const T=await r.resolver(d,r.context,L5(v||g.mount,u,r.criteriaMode,r.shouldUseNativeValidation));return M(v),T},lt=async v=>{const{errors:T}=await J(v);if(v)for(const U of v){const it=ht(T,U);it?ne(o.errors,U,it):pe(o.errors,U)}else o.errors=T;return T},zt=async(v,T,U={valid:!0})=>{for(const it in v){const at=v[it];if(at){const{_f:P,...ct}=at;if(P){const At=g.array.has(P.name),jt=at._f&&q5(at._f);jt&&b.validatingFields&&M([it],!0);const Zt=await Zh(at,g.disabled,d,K,r.shouldUseNativeValidation&&!T,At);if(jt&&b.validatingFields&&M([it]),Zt[P.name]&&(U.valid=!1,T))break;!T&&(ht(Zt,P.name)?At?$5(o.errors,Zt,P.name):ne(o.errors,P.name,Zt[P.name]):pe(o.errors,P.name))}!Ke(ct)&&await zt(ct,T,U)}}return U.valid},Yt=()=>{for(const v of g.unMount){const T=ht(u,v);T&&(T._f.refs?T._f.refs.every(U=>!Bc(U)):!Bc(T._f.ref))&&gt(v)}g.unMount=new Set},Ct=(v,T)=>!r.disabled&&(v&&T&&ne(d,v,T),!ka(S(),c)),I=(v,T,U)=>M5(v,g,{...p.mount?d:me(T)?c:Ln(v)?{[v]:T}:T},U,T),st=v=>df(ht(p.mount?d:c,v,r.shouldUnregister?ht(c,v,[]):[])),xt=(v,T,U={})=>{const it=ht(u,v);let at=T;if(it){const P=it._f;P&&(!P.disabled&&ne(d,v,Pp(T,P)),at=Js(P.ref)&&qe(T)?"":T,Jp(P.ref)?[...P.ref.options].forEach(ct=>ct.selected=at.includes(ct.value)):P.refs?yr(P.ref)?P.refs.forEach(ct=>{(!ct.defaultChecked||!ct.disabled)&&(Array.isArray(at)?ct.checked=!!at.find(At=>At===ct.value):ct.checked=at===ct.value||!!at)}):P.refs.forEach(ct=>ct.checked=ct.value===at):pf(P.ref)?P.ref.value="":(P.ref.value=at,P.ref.type||E.state.next({name:v,values:je(d)})))}(U.shouldDirty||U.shouldTouch)&&H(v,at,U.shouldTouch,U.shouldDirty,!0),U.shouldValidate&&bt(v)},yt=(v,T,U)=>{for(const it in T){if(!T.hasOwnProperty(it))return;const at=T[it],P=v+"."+it,ct=ht(u,P);(g.array.has(v)||fe(at)||ct&&!ct._f)&&!Fa(at)?yt(P,at,U):xt(P,at,U)}},_=(v,T,U={})=>{const it=ht(u,v),at=g.array.has(v),P=je(T);ne(d,v,P),at?(E.array.next({name:v,values:je(d)}),(b.isDirty||b.dirtyFields||O.isDirty||O.dirtyFields)&&U.shouldDirty&&E.state.next({name:v,dirtyFields:ar(c,d),isDirty:Ct(v,P)})):it&&!it._f&&!qe(P)?yt(v,P,U):xt(v,P,U),Yh(v,g)&&E.state.next({...o,name:v}),E.state.next({name:p.mount?v:void 0,values:je(d)})},Q=async v=>{p.mount=!0;const T=v.target;let U=T.name,it=!0;const at=ht(u,U),P=jt=>{it=Number.isNaN(jt)||Fa(jt)&&isNaN(jt.getTime())||ka(jt,ht(d,U,jt))},ct=qh(r.mode),At=qh(r.reValidateMode);if(at){let jt,Zt;const Ve=T.type?Lh(at._f):j5(v),He=v.type===Mh.BLUR||v.type===Mh.FOCUS_OUT,ra=!V5(at._f)&&!r.resolver&&!ht(o.errors,U)&&!at._f.deps||X5(He,ht(o.touchedFields,U),o.isSubmitted,At,ct),Se=Yh(U,g,He);ne(d,U,Ve),He?(!T||!T.readOnly)&&(at._f.onBlur&&at._f.onBlur(v),w&&w(0)):at._f.onChange&&at._f.onChange(v);const Sn=H(U,Ve,He),ke=!Ke(Sn)||Se;if(!He&&E.state.next({name:U,type:v.type,values:je(d)}),ra)return(b.isValid||O.isValid)&&(r.mode==="onBlur"?He&&B():He||B()),ke&&E.state.next({name:U,...Se?{}:Sn});if(!He&&Se&&E.state.next({...o}),r.resolver){const{errors:we}=await J([U]);if(P(Ve),it){const qn=Gh(o.errors,u,U),ii=Gh(we,u,qn.name||U);jt=ii.error,U=ii.name,Zt=Ke(we)}}else M([U],!0),jt=(await Zh(at,g.disabled,d,K,r.shouldUseNativeValidation))[U],M([U]),P(Ve),it&&(jt?Zt=!1:(b.isValid||O.isValid)&&(Zt=await zt(u,!0)));it&&(at._f.deps&&bt(at._f.deps),et(U,Zt,jt,Sn))}},ft=(v,T)=>{if(ht(o.errors,T)&&v.focus)return v.focus(),1},bt=async(v,T={})=>{let U,it;const at=rr(v);if(r.resolver){const P=await lt(me(v)?v:at);U=Ke(P),it=v?!at.some(ct=>ht(P,ct)):U}else v?(it=(await Promise.all(at.map(async P=>{const ct=ht(u,P);return await zt(ct&&ct._f?{[P]:ct}:ct)}))).every(Boolean),!(!it&&!o.isValid)&&B()):it=U=await zt(u);return E.state.next({...!Ln(v)||(b.isValid||O.isValid)&&U!==o.isValid?{}:{name:v},...r.resolver||!v?{isValid:U}:{},errors:o.errors}),T.shouldFocus&&!it&&sr(u,ft,v?at:g.mount),it},S=v=>{const T={...p.mount?d:c};return me(v)?T:Ln(v)?ht(T,v):v.map(U=>ht(T,U))},L=(v,T)=>({invalid:!!ht((T||o).errors,v),isDirty:!!ht((T||o).dirtyFields,v),error:ht((T||o).errors,v),isValidating:!!ht(o.validatingFields,v),isTouched:!!ht((T||o).touchedFields,v)}),nt=v=>{v&&rr(v).forEach(T=>pe(o.errors,T)),E.state.next({errors:v?o.errors:{}})},q=(v,T,U)=>{const it=(ht(u,v,{_f:{}})._f||{}).ref,at=ht(o.errors,v)||{},{ref:P,message:ct,type:At,...jt}=at;ne(o.errors,v,{...jt,...T,ref:it}),E.state.next({name:v,errors:o.errors,isValid:!1}),U&&U.shouldFocus&&it&&it.focus&&it.focus()},F=(v,T)=>Tn(v)?E.state.subscribe({next:U=>"values"in U&&v(I(void 0,T),U)}):I(v,T,!0),ot=v=>E.state.subscribe({next:T=>{G5(v.name,T.name,v.exact)&&Y5(T,v.formState||b,ie,v.reRenderRoot)&&v.callback({values:{...d},...o,...T,defaultValues:c})}}).unsubscribe,ut=v=>(p.mount=!0,O={...O,...v.formState},ot({...v,formState:O})),gt=(v,T={})=>{for(const U of v?rr(v):g.mount)g.mount.delete(U),g.array.delete(U),T.keepValue||(pe(u,U),pe(d,U)),!T.keepError&&pe(o.errors,U),!T.keepDirty&&pe(o.dirtyFields,U),!T.keepTouched&&pe(o.touchedFields,U),!T.keepIsValidating&&pe(o.validatingFields,U),!r.shouldUnregister&&!T.keepDefaultValue&&pe(c,U);E.state.next({values:je(d)}),E.state.next({...o,...T.keepDirty?{isDirty:Ct()}:{}}),!T.keepIsValid&&B()},pt=({disabled:v,name:T})=>{(Bn(v)&&p.mount||v||g.disabled.has(T))&&(v?g.disabled.add(T):g.disabled.delete(T))},kt=(v,T={})=>{let U=ht(u,v);const it=Bn(T.disabled)||Bn(r.disabled);return ne(u,v,{...U||{},_f:{...U&&U._f?U._f:{ref:{name:v}},name:v,mount:!0,...T}}),g.mount.add(v),U?pt({disabled:Bn(T.disabled)?T.disabled:r.disabled,name:v}):rt(v,!0,T.value),{...it?{disabled:T.disabled||r.disabled}:{},...r.progressive?{required:!!T.required,min:ir(T.min),max:ir(T.max),minLength:ir(T.minLength),maxLength:ir(T.maxLength),pattern:ir(T.pattern)}:{},name:v,onChange:Q,onBlur:Q,ref:at=>{if(at){kt(v,T),U=ht(u,v);const P=me(at.value)&&at.querySelectorAll&&at.querySelectorAll("input,select,textarea")[0]||at,ct=U5(P),At=U._f.refs||[];if(ct?At.find(jt=>jt===P):P===U._f.ref)return;ne(u,v,{_f:{...U._f,...ct?{refs:[...At.filter(Bc),P,...Array.isArray(ht(c,v))?[{}]:[]],ref:{type:P.type,name:v}}:{ref:P}}}),rt(v,!1,void 0,P)}else U=ht(u,v,{}),U._f&&(U._f.mount=!1),(r.shouldUnregister||T.shouldUnregister)&&!(_5(g.array,v)&&p.action)&&g.unMount.add(v)}}},ae=()=>r.shouldFocusError&&sr(u,ft,g.mount),ve=v=>{Bn(v)&&(E.state.next({disabled:v}),sr(u,(T,U)=>{const it=ht(u,U);it&&(T.disabled=it._f.disabled||v,Array.isArray(it._f.refs)&&it._f.refs.forEach(at=>{at.disabled=it._f.disabled||v}))},0,!1))},St=(v,T)=>async U=>{let it;U&&(U.preventDefault&&U.preventDefault(),U.persist&&U.persist());let at=je(d);if(E.state.next({isSubmitting:!0}),r.resolver){const{errors:P,values:ct}=await J();o.errors=P,at=je(ct)}else await zt(u);if(g.disabled.size)for(const P of g.disabled)pe(at,P);if(pe(o.errors,"root"),Ke(o.errors)){E.state.next({errors:{}});try{await v(at,U)}catch(P){it=P}}else T&&await T({...o.errors},U),ae(),setTimeout(ae);if(E.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ke(o.errors)&&!it,submitCount:o.submitCount+1,errors:o.errors}),it)throw it},vt=(v,T={})=>{ht(u,v)&&(me(T.defaultValue)?_(v,je(ht(c,v))):(_(v,T.defaultValue),ne(c,v,je(T.defaultValue))),T.keepTouched||pe(o.touchedFields,v),T.keepDirty||(pe(o.dirtyFields,v),o.isDirty=T.defaultValue?Ct(v,je(ht(c,v))):Ct()),T.keepError||(pe(o.errors,v),b.isValid&&B()),E.state.next({...o}))},Bt=(v,T={})=>{const U=v?je(v):c,it=je(U),at=Ke(v),P=at?c:it;if(T.keepDefaultValues||(c=U),!T.keepValues){if(T.keepDirtyValues){const ct=new Set([...g.mount,...Object.keys(ar(c,d))]);for(const At of Array.from(ct))ht(o.dirtyFields,At)?ne(P,At,ht(d,At)):_(At,ht(P,At))}else{if(ff&&me(v))for(const ct of g.mount){const At=ht(u,ct);if(At&&At._f){const jt=Array.isArray(At._f.refs)?At._f.refs[0]:At._f.ref;if(Js(jt)){const Zt=jt.closest("form");if(Zt){Zt.reset();break}}}}if(T.keepFieldsRef)for(const ct of g.mount)_(ct,ht(P,ct));else u={}}d=r.shouldUnregister?T.keepDefaultValues?je(c):{}:je(P),E.array.next({values:{...P}}),E.state.next({values:{...P}})}g={mount:T.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},p.mount=!b.isValid||!!T.keepIsValid||!!T.keepDirtyValues,p.watch=!!r.shouldUnregister,E.state.next({submitCount:T.keepSubmitCount?o.submitCount:0,isDirty:at?!1:T.keepDirty?o.isDirty:!!(T.keepDefaultValues&&!ka(v,c)),isSubmitted:T.keepIsSubmitted?o.isSubmitted:!1,dirtyFields:at?{}:T.keepDirtyValues?T.keepDefaultValues&&d?ar(c,d):o.dirtyFields:T.keepDefaultValues&&v?ar(c,v):T.keepDirty?o.dirtyFields:{},touchedFields:T.keepTouched?o.touchedFields:{},errors:T.keepErrors?o.errors:{},isSubmitSuccessful:T.keepIsSubmitSuccessful?o.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:c})},Lt=(v,T)=>Bt(Tn(v)?v(d):v,T),xe=(v,T={})=>{const U=ht(u,v),it=U&&U._f;if(it){const at=it.refs?it.refs[0]:it.ref;at.focus&&(at.focus(),T.shouldSelect&&Tn(at.select)&&at.select())}},ie=v=>{o={...o,...v}},Pe={control:{register:kt,unregister:gt,getFieldState:L,handleSubmit:St,setError:q,_subscribe:ot,_runSchema:J,_focusError:ae,_getWatch:I,_getDirty:Ct,_setValid:B,_setFieldArray:tt,_setDisabledField:pt,_setErrors:$,_getFieldArray:st,_reset:Bt,_resetDefaultValues:()=>Tn(r.defaultValues)&&r.defaultValues().then(v=>{Lt(v,r.resetOptions),E.state.next({isLoading:!1})}),_removeUnmounted:Yt,_disableForm:ve,_subjects:E,_proxyFormState:b,get _fields(){return u},get _formValues(){return d},get _state(){return p},set _state(v){p=v},get _defaultValues(){return c},get _names(){return g},set _names(v){g=v},get _formState(){return o},get _options(){return r},set _options(v){r={...r,...v}}},subscribe:ut,trigger:bt,register:kt,handleSubmit:St,watch:F,setValue:_,getValues:S,reset:Lt,resetField:vt,clearErrors:nt,unregister:gt,setError:q,setFocus:xe,getFieldState:L};return{...Pe,formControl:Pe}}function br(a={}){const r=Oe.useRef(void 0),o=Oe.useRef(void 0),[u,c]=Oe.useState({isDirty:!1,isValidating:!1,isLoading:Tn(a.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:a.errors||{},disabled:a.disabled||!1,isReady:!1,defaultValues:Tn(a.defaultValues)?void 0:a.defaultValues});if(!r.current)if(a.formControl)r.current={...a.formControl,formState:u},a.defaultValues&&!Tn(a.defaultValues)&&a.formControl.reset(a.defaultValues,a.resetOptions);else{const{formControl:p,...g}=K5(a);r.current={...g,formState:u}}const d=r.current.control;return d._options=a,C5(()=>{const p=d._subscribe({formState:d._proxyFormState,callback:()=>c({...d._formState}),reRenderRoot:!0});return c(g=>({...g,isReady:!0})),d._formState.isReady=!0,p},[d]),Oe.useEffect(()=>d._disableForm(a.disabled),[d,a.disabled]),Oe.useEffect(()=>{a.mode&&(d._options.mode=a.mode),a.reValidateMode&&(d._options.reValidateMode=a.reValidateMode)},[d,a.mode,a.reValidateMode]),Oe.useEffect(()=>{a.errors&&(d._setErrors(a.errors),d._focusError())},[d,a.errors]),Oe.useEffect(()=>{a.shouldUnregister&&d._subjects.state.next({values:d._getWatch()})},[d,a.shouldUnregister]),Oe.useEffect(()=>{if(d._proxyFormState.isDirty){const p=d._getDirty();p!==u.isDirty&&d._subjects.state.next({isDirty:p})}},[d,u.isDirty]),Oe.useEffect(()=>{a.values&&!ka(a.values,o.current)?(d._reset(a.values,{keepFieldsRef:!0,...d._options.resetOptions}),o.current=a.values,c(p=>({...p}))):d._resetDefaultValues()},[d,a.values]),Oe.useEffect(()=>{d._state.mount||(d._setValid(),d._state.mount=!0),d._state.watch&&(d._state.watch=!1,d._subjects.state.next({...d._formState})),d._removeUnmounted()}),r.current.formState=R5(u,d),r.current}var Je=function(){return Je=Object.assign||function(r){for(var o,u=1,c=arguments.length;u<c;u++){o=arguments[u];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(r[d]=o[d])}return r},Je.apply(this,arguments)};function cr(a,r,o){if(o||arguments.length===2)for(var u=0,c=r.length,d;u<c;u++)(d||!(u in r))&&(d||(d=Array.prototype.slice.call(r,0,u)),d[u]=r[u]);return a.concat(d||Array.prototype.slice.call(r))}var te="-ms-",or="-moz-",Xt="-webkit-",em="comm",uo="rule",gf="decl",J5="@import",nm="@keyframes",W5="@layer",am=Math.abs,xf=String.fromCharCode,Ic=Object.assign;function F5(a,r){return _e(a,0)^45?(((r<<2^_e(a,0))<<2^_e(a,1))<<2^_e(a,2))<<2^_e(a,3):0}function im(a){return a.trim()}function la(a,r){return(a=r.exec(a))?a[0]:a}function Dt(a,r,o){return a.replace(r,o)}function Ys(a,r,o){return a.indexOf(r,o)}function _e(a,r){return a.charCodeAt(r)|0}function Qi(a,r,o){return a.slice(r,o)}function Hn(a){return a.length}function lm(a){return a.length}function lr(a,r){return r.push(a),a}function I5(a,r){return a.map(r).join("")}function $h(a,r){return a.filter(function(o){return!la(o,r)})}var co=1,Ki=1,rm=0,vn=0,ge=0,el="";function fo(a,r,o,u,c,d,p,g){return{value:a,root:r,parent:o,type:u,props:c,children:d,line:co,column:Ki,length:p,return:"",siblings:g}}function Da(a,r){return Ic(fo("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},r)}function Zi(a){for(;a.root;)a=Da(a.root,{children:[a]});lr(a,a.siblings)}function P5(){return ge}function t2(){return ge=vn>0?_e(el,--vn):0,Ki--,ge===10&&(Ki=1,co--),ge}function jn(){return ge=vn<rm?_e(el,vn++):0,Ki++,ge===10&&(Ki=1,co++),ge}function ti(){return _e(el,vn)}function Gs(){return vn}function ho(a,r){return Qi(el,a,r)}function Pc(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function e2(a){return co=Ki=1,rm=Hn(el=a),vn=0,[]}function n2(a){return el="",a}function Hc(a){return im(ho(vn-1,tf(a===91?a+2:a===40?a+1:a)))}function a2(a){for(;(ge=ti())&&ge<33;)jn();return Pc(a)>2||Pc(ge)>3?"":" "}function i2(a,r){for(;--r&&jn()&&!(ge<48||ge>102||ge>57&&ge<65||ge>70&&ge<97););return ho(a,Gs()+(r<6&&ti()==32&&jn()==32))}function tf(a){for(;jn();)switch(ge){case a:return vn;case 34:case 39:a!==34&&a!==39&&tf(ge);break;case 40:a===41&&tf(a);break;case 92:jn();break}return vn}function l2(a,r){for(;jn()&&a+ge!==57;)if(a+ge===84&&ti()===47)break;return"/*"+ho(r,vn-1)+"*"+xf(a===47?a:jn())}function r2(a){for(;!Pc(ti());)jn();return ho(a,vn)}function s2(a){return n2(Xs("",null,null,null,[""],a=e2(a),0,[0],a))}function Xs(a,r,o,u,c,d,p,g,w){for(var x=0,b=0,O=p,E=0,K=0,k=0,B=1,M=1,tt=1,V=0,$="",rt=c,H=d,et=u,J=$;M;)switch(k=V,V=jn()){case 40:if(k!=108&&_e(J,O-1)==58){Ys(J+=Dt(Hc(V),"&","&\f"),"&\f",am(x?g[x-1]:0))!=-1&&(tt=-1);break}case 34:case 39:case 91:J+=Hc(V);break;case 9:case 10:case 13:case 32:J+=a2(k);break;case 92:J+=i2(Gs()-1,7);continue;case 47:switch(ti()){case 42:case 47:lr(o2(l2(jn(),Gs()),r,o,w),w);break;default:J+="/"}break;case 123*B:g[x++]=Hn(J)*tt;case 125*B:case 59:case 0:switch(V){case 0:case 125:M=0;case 59+b:tt==-1&&(J=Dt(J,/\f/g,"")),K>0&&Hn(J)-O&&lr(K>32?Kh(J+";",u,o,O-1,w):Kh(Dt(J," ","")+";",u,o,O-2,w),w);break;case 59:J+=";";default:if(lr(et=Qh(J,r,o,x,b,c,g,$,rt=[],H=[],O,d),d),V===123)if(b===0)Xs(J,r,et,et,rt,d,O,g,H);else switch(E===99&&_e(J,3)===110?100:E){case 100:case 108:case 109:case 115:Xs(a,et,et,u&&lr(Qh(a,et,et,0,0,c,g,$,c,rt=[],O,H),H),c,H,O,g,u?rt:H);break;default:Xs(J,et,et,et,[""],H,0,g,H)}}x=b=K=0,B=tt=1,$=J="",O=p;break;case 58:O=1+Hn(J),K=k;default:if(B<1){if(V==123)--B;else if(V==125&&B++==0&&t2()==125)continue}switch(J+=xf(V),V*B){case 38:tt=b>0?1:(J+="\f",-1);break;case 44:g[x++]=(Hn(J)-1)*tt,tt=1;break;case 64:ti()===45&&(J+=Hc(jn())),E=ti(),b=O=Hn($=J+=r2(Gs())),V++;break;case 45:k===45&&Hn(J)==2&&(B=0)}}return d}function Qh(a,r,o,u,c,d,p,g,w,x,b,O){for(var E=c-1,K=c===0?d:[""],k=lm(K),B=0,M=0,tt=0;B<u;++B)for(var V=0,$=Qi(a,E+1,E=am(M=p[B])),rt=a;V<k;++V)(rt=im(M>0?K[V]+" "+$:Dt($,/&\f/g,K[V])))&&(w[tt++]=rt);return fo(a,r,o,c===0?uo:g,w,x,b,O)}function o2(a,r,o,u){return fo(a,r,o,em,xf(P5()),Qi(a,2,-2),0,u)}function Kh(a,r,o,u,c){return fo(a,r,o,gf,Qi(a,0,u),Qi(a,u+1,-1),u,c)}function sm(a,r,o){switch(F5(a,r)){case 5103:return Xt+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Xt+a+a;case 4789:return or+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Xt+a+or+a+te+a+a;case 5936:switch(_e(a,r+11)){case 114:return Xt+a+te+Dt(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Xt+a+te+Dt(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Xt+a+te+Dt(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Xt+a+te+a+a;case 6165:return Xt+a+te+"flex-"+a+a;case 5187:return Xt+a+Dt(a,/(\w+).+(:[^]+)/,Xt+"box-$1$2"+te+"flex-$1$2")+a;case 5443:return Xt+a+te+"flex-item-"+Dt(a,/flex-|-self/g,"")+(la(a,/flex-|baseline/)?"":te+"grid-row-"+Dt(a,/flex-|-self/g,""))+a;case 4675:return Xt+a+te+"flex-line-pack"+Dt(a,/align-content|flex-|-self/g,"")+a;case 5548:return Xt+a+te+Dt(a,"shrink","negative")+a;case 5292:return Xt+a+te+Dt(a,"basis","preferred-size")+a;case 6060:return Xt+"box-"+Dt(a,"-grow","")+Xt+a+te+Dt(a,"grow","positive")+a;case 4554:return Xt+Dt(a,/([^-])(transform)/g,"$1"+Xt+"$2")+a;case 6187:return Dt(Dt(Dt(a,/(zoom-|grab)/,Xt+"$1"),/(image-set)/,Xt+"$1"),a,"")+a;case 5495:case 3959:return Dt(a,/(image-set\([^]*)/,Xt+"$1$`$1");case 4968:return Dt(Dt(a,/(.+:)(flex-)?(.*)/,Xt+"box-pack:$3"+te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Xt+a+a;case 4200:if(!la(a,/flex-|baseline/))return te+"grid-column-align"+Qi(a,r)+a;break;case 2592:case 3360:return te+Dt(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(u,c){return r=c,la(u.props,/grid-\w+-end/)})?~Ys(a+(o=o[r].value),"span",0)?a:te+Dt(a,"-start","")+a+te+"grid-row-span:"+(~Ys(o,"span",0)?la(o,/\d+/):+la(o,/\d+/)-+la(a,/\d+/))+";":te+Dt(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(u){return la(u.props,/grid-\w+-start/)})?a:te+Dt(Dt(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return Dt(a,/(.+)-inline(.+)/,Xt+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Hn(a)-1-r>6)switch(_e(a,r+1)){case 109:if(_e(a,r+4)!==45)break;case 102:return Dt(a,/(.+:)(.+)-([^]+)/,"$1"+Xt+"$2-$3$1"+or+(_e(a,r+3)==108?"$3":"$2-$3"))+a;case 115:return~Ys(a,"stretch",0)?sm(Dt(a,"stretch","fill-available"),r,o)+a:a}break;case 5152:case 5920:return Dt(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,c,d,p,g,w,x){return te+c+":"+d+x+(p?te+c+"-span:"+(g?w:+w-+d)+x:"")+a});case 4949:if(_e(a,r+6)===121)return Dt(a,":",":"+Xt)+a;break;case 6444:switch(_e(a,_e(a,14)===45?18:11)){case 120:return Dt(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Xt+(_e(a,14)===45?"inline-":"")+"box$3$1"+Xt+"$2$3$1"+te+"$2box$3")+a;case 100:return Dt(a,":",":"+te)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Dt(a,"scroll-","scroll-snap-")+a}return a}function Is(a,r){for(var o="",u=0;u<a.length;u++)o+=r(a[u],u,a,r)||"";return o}function u2(a,r,o,u){switch(a.type){case W5:if(a.children.length)break;case J5:case gf:return a.return=a.return||a.value;case em:return"";case nm:return a.return=a.value+"{"+Is(a.children,u)+"}";case uo:if(!Hn(a.value=a.props.join(",")))return""}return Hn(o=Is(a.children,u))?a.return=a.value+"{"+o+"}":""}function c2(a){var r=lm(a);return function(o,u,c,d){for(var p="",g=0;g<r;g++)p+=a[g](o,u,c,d)||"";return p}}function f2(a){return function(r){r.root||(r=r.return)&&a(r)}}function d2(a,r,o,u){if(a.length>-1&&!a.return)switch(a.type){case gf:a.return=sm(a.value,a.length,o);return;case nm:return Is([Da(a,{value:Dt(a.value,"@","@"+Xt)})],u);case uo:if(a.length)return I5(o=a.props,function(c){switch(la(c,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Zi(Da(a,{props:[Dt(c,/:(read-\w+)/,":"+or+"$1")]})),Zi(Da(a,{props:[c]})),Ic(a,{props:$h(o,u)});break;case"::placeholder":Zi(Da(a,{props:[Dt(c,/:(plac\w+)/,":"+Xt+"input-$1")]})),Zi(Da(a,{props:[Dt(c,/:(plac\w+)/,":"+or+"$1")]})),Zi(Da(a,{props:[Dt(c,/:(plac\w+)/,te+"input-$1")]})),Zi(Da(a,{props:[c]})),Ic(a,{props:$h(o,u)});break}return""})}}var h2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},on={},Ji=typeof process<"u"&&on!==void 0&&(on.REACT_APP_SC_ATTR||on.SC_ATTR)||"data-styled",om="active",um="data-styled-version",po="6.1.19",yf=`/*!sc*/
`,Ps=typeof window<"u"&&typeof document<"u",p2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&on!==void 0&&on.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&on.REACT_APP_SC_DISABLE_SPEEDY!==""?on.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&on.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&on!==void 0&&on.SC_DISABLE_SPEEDY!==void 0&&on.SC_DISABLE_SPEEDY!==""&&on.SC_DISABLE_SPEEDY!=="false"&&on.SC_DISABLE_SPEEDY),mo=Object.freeze([]),Wi=Object.freeze({});function m2(a,r,o){return o===void 0&&(o=Wi),a.theme!==o.theme&&a.theme||r||o.theme}var cm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),g2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,x2=/(^-|-$)/g;function Jh(a){return a.replace(g2,"-").replace(x2,"")}var y2=/(a)(d)/gi,Us=52,Wh=function(a){return String.fromCharCode(a+(a>25?39:97))};function ef(a){var r,o="";for(r=Math.abs(a);r>Us;r=r/Us|0)o=Wh(r%Us)+o;return(Wh(r%Us)+o).replace(y2,"$1-$2")}var Lc,fm=5381,$i=function(a,r){for(var o=r.length;o;)a=33*a^r.charCodeAt(--o);return a},dm=function(a){return $i(fm,a)};function hm(a){return ef(dm(a)>>>0)}function b2(a){return a.displayName||a.name||"Component"}function qc(a){return typeof a=="string"&&!0}var pm=typeof Symbol=="function"&&Symbol.for,mm=pm?Symbol.for("react.memo"):60115,v2=pm?Symbol.for("react.forward_ref"):60112,S2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},w2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},E2=((Lc={})[v2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lc[mm]=gm,Lc);function Fh(a){return("type"in(r=a)&&r.type.$$typeof)===mm?gm:"$$typeof"in a?E2[a.$$typeof]:S2;var r}var z2=Object.defineProperty,A2=Object.getOwnPropertyNames,Ih=Object.getOwnPropertySymbols,T2=Object.getOwnPropertyDescriptor,j2=Object.getPrototypeOf,Ph=Object.prototype;function xm(a,r,o){if(typeof r!="string"){if(Ph){var u=j2(r);u&&u!==Ph&&xm(a,u,o)}var c=A2(r);Ih&&(c=c.concat(Ih(r)));for(var d=Fh(a),p=Fh(r),g=0;g<c.length;++g){var w=c[g];if(!(w in w2||o&&o[w]||p&&w in p||d&&w in d)){var x=T2(r,w);try{z2(a,w,x)}catch{}}}}return a}function Fi(a){return typeof a=="function"}function bf(a){return typeof a=="object"&&"styledComponentId"in a}function Ia(a,r){return a&&r?"".concat(a," ").concat(r):a||r||""}function nf(a,r){if(a.length===0)return"";for(var o=a[0],u=1;u<a.length;u++)o+=a[u];return o}function fr(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function af(a,r,o){if(o===void 0&&(o=!1),!o&&!fr(a)&&!Array.isArray(a))return r;if(Array.isArray(r))for(var u=0;u<r.length;u++)a[u]=af(a[u],r[u]);else if(fr(r))for(var u in r)a[u]=af(a[u],r[u]);return a}function vf(a,r){Object.defineProperty(a,"toString",{value:r})}function vr(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var O2=(function(){function a(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return a.prototype.indexOfGroup=function(r){for(var o=0,u=0;u<r;u++)o+=this.groupSizes[u];return o},a.prototype.insertRules=function(r,o){if(r>=this.groupSizes.length){for(var u=this.groupSizes,c=u.length,d=c;r>=d;)if((d<<=1)<0)throw vr(16,"".concat(r));this.groupSizes=new Uint32Array(d),this.groupSizes.set(u),this.length=d;for(var p=c;p<d;p++)this.groupSizes[p]=0}for(var g=this.indexOfGroup(r+1),w=(p=0,o.length);p<w;p++)this.tag.insertRule(g,o[p])&&(this.groupSizes[r]++,g++)},a.prototype.clearGroup=function(r){if(r<this.length){var o=this.groupSizes[r],u=this.indexOfGroup(r),c=u+o;this.groupSizes[r]=0;for(var d=u;d<c;d++)this.tag.deleteRule(u)}},a.prototype.getGroup=function(r){var o="";if(r>=this.length||this.groupSizes[r]===0)return o;for(var u=this.groupSizes[r],c=this.indexOfGroup(r),d=c+u,p=c;p<d;p++)o+="".concat(this.tag.getRule(p)).concat(yf);return o},a})(),Zs=new Map,to=new Map,$s=1,Bs=function(a){if(Zs.has(a))return Zs.get(a);for(;to.has($s);)$s++;var r=$s++;return Zs.set(a,r),to.set(r,a),r},_2=function(a,r){$s=r+1,Zs.set(a,r),to.set(r,a)},D2="style[".concat(Ji,"][").concat(um,'="').concat(po,'"]'),k2=new RegExp("^".concat(Ji,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),R2=function(a,r,o){for(var u,c=o.split(","),d=0,p=c.length;d<p;d++)(u=c[d])&&a.registerName(r,u)},C2=function(a,r){for(var o,u=((o=r.textContent)!==null&&o!==void 0?o:"").split(yf),c=[],d=0,p=u.length;d<p;d++){var g=u[d].trim();if(g){var w=g.match(k2);if(w){var x=0|parseInt(w[1],10),b=w[2];x!==0&&(_2(b,x),R2(a,b,w[3]),a.getTag().insertRules(x,c)),c.length=0}else c.push(g)}}},tp=function(a){for(var r=document.querySelectorAll(D2),o=0,u=r.length;o<u;o++){var c=r[o];c&&c.getAttribute(Ji)!==om&&(C2(a,c),c.parentNode&&c.parentNode.removeChild(c))}};function M2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ym=function(a){var r=document.head,o=a||r,u=document.createElement("style"),c=(function(g){var w=Array.from(g.querySelectorAll("style[".concat(Ji,"]")));return w[w.length-1]})(o),d=c!==void 0?c.nextSibling:null;u.setAttribute(Ji,om),u.setAttribute(um,po);var p=M2();return p&&u.setAttribute("nonce",p),o.insertBefore(u,d),u},N2=(function(){function a(r){this.element=ym(r),this.element.appendChild(document.createTextNode("")),this.sheet=(function(o){if(o.sheet)return o.sheet;for(var u=document.styleSheets,c=0,d=u.length;c<d;c++){var p=u[c];if(p.ownerNode===o)return p}throw vr(17)})(this.element),this.length=0}return a.prototype.insertRule=function(r,o){try{return this.sheet.insertRule(o,r),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},a.prototype.getRule=function(r){var o=this.sheet.cssRules[r];return o&&o.cssText?o.cssText:""},a})(),U2=(function(){function a(r){this.element=ym(r),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(r,o){if(r<=this.length&&r>=0){var u=document.createTextNode(o);return this.element.insertBefore(u,this.nodes[r]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},a.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},a})(),B2=(function(){function a(r){this.rules=[],this.length=0}return a.prototype.insertRule=function(r,o){return r<=this.length&&(this.rules.splice(r,0,o),this.length++,!0)},a.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},a.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},a})(),ep=Ps,H2={isServer:!Ps,useCSSOMInjection:!p2},bm=(function(){function a(r,o,u){r===void 0&&(r=Wi),o===void 0&&(o={});var c=this;this.options=Je(Je({},H2),r),this.gs=o,this.names=new Map(u),this.server=!!r.isServer,!this.server&&Ps&&ep&&(ep=!1,tp(this)),vf(this,function(){return(function(d){for(var p=d.getTag(),g=p.length,w="",x=function(O){var E=(function(tt){return to.get(tt)})(O);if(E===void 0)return"continue";var K=d.names.get(E),k=p.getGroup(O);if(K===void 0||!K.size||k.length===0)return"continue";var B="".concat(Ji,".g").concat(O,'[id="').concat(E,'"]'),M="";K!==void 0&&K.forEach(function(tt){tt.length>0&&(M+="".concat(tt,","))}),w+="".concat(k).concat(B,'{content:"').concat(M,'"}').concat(yf)},b=0;b<g;b++)x(b);return w})(c)})}return a.registerId=function(r){return Bs(r)},a.prototype.rehydrate=function(){!this.server&&Ps&&tp(this)},a.prototype.reconstructWithOptions=function(r,o){return o===void 0&&(o=!0),new a(Je(Je({},this.options),r),this.gs,o&&this.names||void 0)},a.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(r=(function(o){var u=o.useCSSOMInjection,c=o.target;return o.isServer?new B2(c):u?new N2(c):new U2(c)})(this.options),new O2(r)));var r},a.prototype.hasNameForId=function(r,o){return this.names.has(r)&&this.names.get(r).has(o)},a.prototype.registerName=function(r,o){if(Bs(r),this.names.has(r))this.names.get(r).add(o);else{var u=new Set;u.add(o),this.names.set(r,u)}},a.prototype.insertRules=function(r,o,u){this.registerName(r,o),this.getTag().insertRules(Bs(r),u)},a.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},a.prototype.clearRules=function(r){this.getTag().clearGroup(Bs(r)),this.clearNames(r)},a.prototype.clearTag=function(){this.tag=void 0},a})(),L2=/&/g,q2=/^\s*\/\/.*$/gm;function vm(a,r){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(r," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(r," ")),o.props=o.props.map(function(u){return"".concat(r," ").concat(u)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=vm(o.children,r)),o})}function V2(a){var r,o,u,c=Wi,d=c.options,p=d===void 0?Wi:d,g=c.plugins,w=g===void 0?mo:g,x=function(E,K,k){return k.startsWith(o)&&k.endsWith(o)&&k.replaceAll(o,"").length>0?".".concat(r):E},b=w.slice();b.push(function(E){E.type===uo&&E.value.includes("&")&&(E.props[0]=E.props[0].replace(L2,o).replace(u,x))}),p.prefix&&b.push(d2),b.push(u2);var O=function(E,K,k,B){K===void 0&&(K=""),k===void 0&&(k=""),B===void 0&&(B="&"),r=B,o=K,u=new RegExp("\\".concat(o,"\\b"),"g");var M=E.replace(q2,""),tt=s2(k||K?"".concat(k," ").concat(K," { ").concat(M," }"):M);p.namespace&&(tt=vm(tt,p.namespace));var V=[];return Is(tt,c2(b.concat(f2(function($){return V.push($)})))),V};return O.hash=w.length?w.reduce(function(E,K){return K.name||vr(15),$i(E,K.name)},fm).toString():"",O}var Y2=new bm,lf=V2(),Sm=Oe.createContext({shouldForwardProp:void 0,styleSheet:Y2,stylis:lf});Sm.Consumer;Oe.createContext(void 0);function np(){return G.useContext(Sm)}var wm=(function(){function a(r,o){var u=this;this.inject=function(c,d){d===void 0&&(d=lf);var p=u.name+d.hash;c.hasNameForId(u.id,p)||c.insertRules(u.id,p,d(u.rules,p,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=o,vf(this,function(){throw vr(12,String(u.name))})}return a.prototype.getName=function(r){return r===void 0&&(r=lf),this.name+r.hash},a})(),G2=function(a){return a>="A"&&a<="Z"};function ap(a){for(var r="",o=0;o<a.length;o++){var u=a[o];if(o===1&&u==="-"&&a[0]==="-")return a;G2(u)?r+="-"+u.toLowerCase():r+=u}return r.startsWith("ms-")?"-"+r:r}var Em=function(a){return a==null||a===!1||a===""},zm=function(a){var r,o,u=[];for(var c in a){var d=a[c];a.hasOwnProperty(c)&&!Em(d)&&(Array.isArray(d)&&d.isCss||Fi(d)?u.push("".concat(ap(c),":"),d,";"):fr(d)?u.push.apply(u,cr(cr(["".concat(c," {")],zm(d),!1),["}"],!1)):u.push("".concat(ap(c),": ").concat((r=c,(o=d)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||r in h2||r.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return u};function ei(a,r,o,u){if(Em(a))return[];if(bf(a))return[".".concat(a.styledComponentId)];if(Fi(a)){if(!Fi(d=a)||d.prototype&&d.prototype.isReactComponent||!r)return[a];var c=a(r);return ei(c,r,o,u)}var d;return a instanceof wm?o?(a.inject(o,u),[a.getName(u)]):[a]:fr(a)?zm(a):Array.isArray(a)?Array.prototype.concat.apply(mo,a.map(function(p){return ei(p,r,o,u)})):[a.toString()]}function X2(a){for(var r=0;r<a.length;r+=1){var o=a[r];if(Fi(o)&&!bf(o))return!1}return!0}var Z2=dm(po),$2=(function(){function a(r,o,u){this.rules=r,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&X2(r),this.componentId=o,this.baseHash=$i(Z2,o),this.baseStyle=u,bm.registerId(o)}return a.prototype.generateAndInjectStyles=function(r,o,u){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,o,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))c=Ia(c,this.staticRulesId);else{var d=nf(ei(this.rules,r,o,u)),p=ef($i(this.baseHash,d)>>>0);if(!o.hasNameForId(this.componentId,p)){var g=u(d,".".concat(p),void 0,this.componentId);o.insertRules(this.componentId,p,g)}c=Ia(c,p),this.staticRulesId=p}else{for(var w=$i(this.baseHash,u.hash),x="",b=0;b<this.rules.length;b++){var O=this.rules[b];if(typeof O=="string")x+=O;else if(O){var E=nf(ei(O,r,o,u));w=$i(w,E+b),x+=E}}if(x){var K=ef(w>>>0);o.hasNameForId(this.componentId,K)||o.insertRules(this.componentId,K,u(x,".".concat(K),void 0,this.componentId)),c=Ia(c,K)}}return c},a})(),Am=Oe.createContext(void 0);Am.Consumer;var Vc={};function Q2(a,r,o){var u=bf(a),c=a,d=!qc(a),p=r.attrs,g=p===void 0?mo:p,w=r.componentId,x=w===void 0?(function(rt,H){var et=typeof rt!="string"?"sc":Jh(rt);Vc[et]=(Vc[et]||0)+1;var J="".concat(et,"-").concat(hm(po+et+Vc[et]));return H?"".concat(H,"-").concat(J):J})(r.displayName,r.parentComponentId):w,b=r.displayName,O=b===void 0?(function(rt){return qc(rt)?"styled.".concat(rt):"Styled(".concat(b2(rt),")")})(a):b,E=r.displayName&&r.componentId?"".concat(Jh(r.displayName),"-").concat(r.componentId):r.componentId||x,K=u&&c.attrs?c.attrs.concat(g).filter(Boolean):g,k=r.shouldForwardProp;if(u&&c.shouldForwardProp){var B=c.shouldForwardProp;if(r.shouldForwardProp){var M=r.shouldForwardProp;k=function(rt,H){return B(rt,H)&&M(rt,H)}}else k=B}var tt=new $2(o,E,u?c.componentStyle:void 0);function V(rt,H){return(function(et,J,lt){var zt=et.attrs,Yt=et.componentStyle,Ct=et.defaultProps,I=et.foldedComponentIds,st=et.styledComponentId,xt=et.target,yt=Oe.useContext(Am),_=np(),Q=et.shouldForwardProp||_.shouldForwardProp,ft=m2(J,yt,Ct)||Wi,bt=(function(ot,ut,gt){for(var pt,kt=Je(Je({},ut),{className:void 0,theme:gt}),ae=0;ae<ot.length;ae+=1){var ve=Fi(pt=ot[ae])?pt(kt):pt;for(var St in ve)kt[St]=St==="className"?Ia(kt[St],ve[St]):St==="style"?Je(Je({},kt[St]),ve[St]):ve[St]}return ut.className&&(kt.className=Ia(kt.className,ut.className)),kt})(zt,J,ft),S=bt.as||xt,L={};for(var nt in bt)bt[nt]===void 0||nt[0]==="$"||nt==="as"||nt==="theme"&&bt.theme===ft||(nt==="forwardedAs"?L.as=bt.forwardedAs:Q&&!Q(nt,S)||(L[nt]=bt[nt]));var q=(function(ot,ut){var gt=np(),pt=ot.generateAndInjectStyles(ut,gt.styleSheet,gt.stylis);return pt})(Yt,bt),F=Ia(I,st);return q&&(F+=" "+q),bt.className&&(F+=" "+bt.className),L[qc(S)&&!cm.has(S)?"class":"className"]=F,lt&&(L.ref=lt),G.createElement(S,L)})($,rt,H)}V.displayName=O;var $=Oe.forwardRef(V);return $.attrs=K,$.componentStyle=tt,$.displayName=O,$.shouldForwardProp=k,$.foldedComponentIds=u?Ia(c.foldedComponentIds,c.styledComponentId):"",$.styledComponentId=E,$.target=u?c.target:a,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(rt){this._foldedDefaultProps=u?(function(H){for(var et=[],J=1;J<arguments.length;J++)et[J-1]=arguments[J];for(var lt=0,zt=et;lt<zt.length;lt++)af(H,zt[lt],!0);return H})({},c.defaultProps,rt):rt}}),vf($,function(){return".".concat($.styledComponentId)}),d&&xm($,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function ip(a,r){for(var o=[a[0]],u=0,c=r.length;u<c;u+=1)o.push(r[u],a[u+1]);return o}var lp=function(a){return Object.assign(a,{isCss:!0})};function Tm(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];if(Fi(a)||fr(a))return lp(ei(ip(mo,cr([a],r,!0))));var u=a;return r.length===0&&u.length===1&&typeof u[0]=="string"?ei(u):lp(ei(ip(u,r)))}function rf(a,r,o){if(o===void 0&&(o=Wi),!r)throw vr(1,r);var u=function(c){for(var d=[],p=1;p<arguments.length;p++)d[p-1]=arguments[p];return a(r,o,Tm.apply(void 0,cr([c],d,!1)))};return u.attrs=function(c){return rf(a,r,Je(Je({},o),{attrs:Array.prototype.concat(o.attrs,c).filter(Boolean)}))},u.withConfig=function(c){return rf(a,r,Je(Je({},o),c))},u}var jm=function(a){return rf(Q2,a)},W=jm;cm.forEach(function(a){W[a]=jm(a)});function Ie(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];var u=nf(Tm.apply(void 0,cr([a],r,!1))),c=hm(u);return new wm(c,u)}var Yc,rp;function K2(){if(rp)return Yc;rp=1;var a="Expected a function",r=NaN,o="[object Symbol]",u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,p=/^0o[0-7]+$/i,g=parseInt,w=typeof Ns=="object"&&Ns&&Ns.Object===Object&&Ns,x=typeof self=="object"&&self&&self.Object===Object&&self,b=w||x||Function("return this")(),O=Object.prototype,E=O.toString,K=Math.max,k=Math.min,B=function(){return b.Date.now()};function M(H,et,J){var lt,zt,Yt,Ct,I,st,xt=0,yt=!1,_=!1,Q=!0;if(typeof H!="function")throw new TypeError(a);et=rt(et)||0,tt(J)&&(yt=!!J.leading,_="maxWait"in J,Yt=_?K(rt(J.maxWait)||0,et):Yt,Q="trailing"in J?!!J.trailing:Q);function ft(gt){var pt=lt,kt=zt;return lt=zt=void 0,xt=gt,Ct=H.apply(kt,pt),Ct}function bt(gt){return xt=gt,I=setTimeout(nt,et),yt?ft(gt):Ct}function S(gt){var pt=gt-st,kt=gt-xt,ae=et-pt;return _?k(ae,Yt-kt):ae}function L(gt){var pt=gt-st,kt=gt-xt;return st===void 0||pt>=et||pt<0||_&&kt>=Yt}function nt(){var gt=B();if(L(gt))return q(gt);I=setTimeout(nt,S(gt))}function q(gt){return I=void 0,Q&&lt?ft(gt):(lt=zt=void 0,Ct)}function F(){I!==void 0&&clearTimeout(I),xt=0,lt=st=zt=I=void 0}function ot(){return I===void 0?Ct:q(B())}function ut(){var gt=B(),pt=L(gt);if(lt=arguments,zt=this,st=gt,pt){if(I===void 0)return bt(st);if(_)return I=setTimeout(nt,et),ft(st)}return I===void 0&&(I=setTimeout(nt,et)),Ct}return ut.cancel=F,ut.flush=ot,ut}function tt(H){var et=typeof H;return!!H&&(et=="object"||et=="function")}function V(H){return!!H&&typeof H=="object"}function $(H){return typeof H=="symbol"||V(H)&&E.call(H)==o}function rt(H){if(typeof H=="number")return H;if($(H))return r;if(tt(H)){var et=typeof H.valueOf=="function"?H.valueOf():H;H=tt(et)?et+"":et}if(typeof H!="string")return H===0?H:+H;H=H.replace(u,"");var J=d.test(H);return J||p.test(H)?g(H.slice(2),J?2:8):c.test(H)?r:+H}return Yc=M,Yc}K2();var J2=typeof window<"u"?G.useLayoutEffect:G.useEffect;function W2(a,r,o,u){const c=G.useRef(r);J2(()=>{c.current=r},[r]),G.useEffect(()=>{const d=window;if(!(d&&d.addEventListener))return;const p=g=>{c.current(g)};return d.addEventListener(a,p,u),()=>{d.removeEventListener(a,p,u)}},[a,o,u])}function nl(a,r,o="mousedown",u={}){W2(o,c=>{const d=c.target;if(!d||!d.isConnected)return;(Array.isArray(a)?a.filter(g=>!!g.current).every(g=>g.current&&!g.current.contains(d)):a.current&&!a.current.contains(d))&&r(c)},void 0,u)}const dr=W.button`
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
`,Ii=W.div`
  display: flex;
  flex-direction: column;
  padding: 40px 32px 24px 32px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 32px 24px 20px 24px;
  }
`;W.img`
  height: 60px;
  max-width: 200px;
  margin: 0 auto 24px;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
`;const ai=W.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${a=>a.mainColor||"#333"};
  margin: 0 0 16px 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Sr=W.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 32px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`,Ra=W.input`
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
`,De=W.div`
  color: #e40000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`,go=W.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 20px 0;
  text-align: left;
`,xo=W.input`
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
`,hr=W.button`
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
`,wr=W.div`
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
`,yo=W.a`
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
`,Om=W.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`,Sf=W.h1`
  font-size: 16px;
  font-weight: 600;
  color: ${a=>a.mainColor||"#333"};
  margin: 10px;
`,wf=W.p`
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  color: ${a=>a.mainColor||"#666"};
  width: 100%;
  margin: 3% auto 5%;
`,F2=Ie`   
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`,I2=W.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${F2} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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
`,Ef=W.div`
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
`,P2=Ie`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,eo=W.div`
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
    animation: ${P2} 8s linear infinite;
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
`,bo=W.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  border-radius: 20px;
  overflow: hidden;
`,ty=W.div`
  display: flex;
  width: 100%;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`,ey=({enabledPhoneSubscription:a,enabledEmailSubscription:r,mainColor:o,forceOpen:u})=>{const[c,d]=G.useState(u||!1),[p,g]=G.useState(!1),[w,x]=G.useState(""),[b,O]=G.useState(!1),[E,K]=G.useState(""),[k,B]=G.useState(""),M=G.useRef(null),{register:tt,handleSubmit:V,formState:{errors:$}}=br(),rt=()=>{d(!1);const J=new Date;J.setDate(J.getDate()+7);const lt="expires="+J.toUTCString();document.cookie=`upsellPhoneSubscription=false;${lt};path=/`};M!==null&&nl(M,()=>{rt()});const et=V(async J=>{g(!0),x("");try{k&&r&&await qt.post("https://api.upsell.co/emailsubscription",{name:J.name,surname:J.surname,email:k}),E&&a&&await qt.post("https://api.upsell.co/PhoneSubscription",{name:J.name,surname:J.surname,phone:"90"+E}),O(!0);const lt=new Date;lt.setDate(lt.getDate()+7);const zt="expires="+lt.toUTCString();document.cookie=`upsellPhoneSubscription=true;${zt};path=/`,d(!1)}catch{x("Bu telefon numarası veya e-posta adresi zaten kayıtlı.")}finally{g(!1)}});return G.useEffect(()=>{if(u){d(!0);return}if(typeof window<"u"&&!document.cookie.split(";").some(lt=>lt.trim().startsWith("upsellPhoneSubscription="))&&(a||r)){const lt=setTimeout(()=>{d(!0)},2e4);return()=>{clearTimeout(lt)}}},[u,a,r]),!a&&!r?null:f.jsx(f.Fragment,{children:f.jsxs(Ef,{style:{display:!b&&!c?"none":"block"},children:[b&&f.jsx(eo,{children:f.jsxs(Om,{children:[f.jsx(dr,{children:f.jsx("span",{onClick:()=>{O(!1)},style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),f.jsx(Sf,{mainColor:o,children:"Teşekkürler!"}),f.jsx(wf,{mainColor:o,children:"Aboneliğiniz başarıyla alındı."})]})}),c&&f.jsxs(eo,{ref:M,mainColor:o,children:[f.jsxs(bo,{children:[p&&f.jsx(wr,{children:f.jsxs(I2,{children:[f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{})]})}),!b&&f.jsxs(f.Fragment,{children:[f.jsx(dr,{onClick:()=>{rt()},children:f.jsx("span",{style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),f.jsxs(Ii,{children:[f.jsx(ai,{mainColor:o,children:"Bültenimize Abone Olun, Fırsatları İlk Siz Yakalayın!"}),f.jsx(Sr,{children:"İndirim ve fırsatlardan ilk sizin haberiniz olsun, kayıt olun ve avantajlardan yararlanın!"}),f.jsxs("form",{style:{display:"flex",flexDirection:"column",width:"100%"},onSubmit:J=>et(J),children:[f.jsxs(ty,{children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(Ra,{mainColor:o,placeholder:"Adınızı Giriniz",...tt("name",{required:"Ad boş bırakılamaz"})}),$.name&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:$?.name?.message?.toString()??null})})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(Ra,{mainColor:o,placeholder:"Soyadınızı Giriniz",...tt("surname",{required:"Soyadı boş bırakılamaz"})}),$.surname&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:$?.surname?.message?.toString()??null})})]})]}),a&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(Ra,{mainColor:o,type:"string",...tt("phone",{required:a&&!r?"Telefon boş bırakılamaz":a&&r&&!k?"Telefon veya e-posta girmelisiniz":!1,pattern:{value:/^(501|502|503|505|506|507|508|509|512|530|531|532|533|534|535|536|537|538|539|540|541|542|543|544|545|546|547|548|549|550|551|552|553|554|555|559)\d{7}$/,message:"Geçerli bir cep telefonu numarası girin (örn: 5XXYYYYYYY)"}}),onChange:J=>{K(J.target.value)},placeholder:"5XXXXXXXXX",maxLength:10}),$.phone&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:$?.phone?.message?.toString()??null})})]}),r&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(Ra,{mainColor:o,placeholder:"E-postanızı Giriniz",...tt("email",{required:r&&!a?"E-posta boş bırakılamaz":r&&a&&!E?"E-posta veya telefon girmelisiniz":!1,pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,message:"Geçerli bir e-posta giriniz"}}),onChange:J=>{B(J.target.value)}}),$.email&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:$?.email?.message?.toString()??null})})]}),f.jsxs(go,{children:[f.jsx(xo,{mainColor:o,...tt("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",f.jsx("a",{style:{color:o||"#e7333c",textDecoration:"underline",fontWeight:"500"},id:"kvkkLink",href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",children:"Aydınlatma metni için tıklayın"}),"."]})]}),$.kvkk&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:$?.kvkk?.message?.toString()??null})}),w&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:w})}),f.jsx("div",{children:f.jsx(hr,{mainColor:o,children:"Kaydet"})})]})]})]})]}),f.jsxs(yo,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})]})})},ny=a=>Ie`
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
`,ay=W.button`
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
  background: linear-gradient(
    135deg,
    ${a=>a.mainColor||"#e7333c"},
    ${a=>a.mainColor?`${a.mainColor}dd`:"#d12b35"}
  );
  font-weight: 600;
  border: none;
  box-shadow: 0 4px 15px
    ${a=>a.mainColor?`${a.mainColor}40`:"rgba(231, 51, 60, 0.3)"};
  transition: all 0.3s ease;
  animation: ${a=>ny(a.mainColor||"#e7333c")} 2s
    infinite;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px
      ${a=>a.mainColor?`${a.mainColor}50`:"rgba(231, 51, 60, 0.4)"};
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
`,iy=W.div`
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
`,_m=Ie`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,ly=W.div`
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
  animation: slideInFromCorner 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
    animation: ${_m} 8s linear infinite;
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
`,sp=W.div`
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
`,op=W.button`
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
`,ry=W.div`
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
`,sy=W.div`
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
`,oy=W.a`
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
`,uy=W.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,cy=W.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 16px;
`,fy=W.div`
  color: #333;
  font-weight: 600;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  margin-bottom: 8px;
`,dy=W.div`
  font-size: 16px;
  color: ${a=>a.mainColor||"#e7333c"};
  font-weight: 700;
  margin-top: auto;
`,zf=W.div`
  display: none;
`,Af=W.div`
  display: none;
`,Tf=W.div`
  display: none;
`,hy=W.div`
  position: absolute;
  bottom: 150px;
  ${a=>a.position===1?"left: 50px;":"right: 50px;"}
  background: white;
  border-radius: 20px;
  width: 800px;
  max-width: calc(100vw - 120px);
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  z-index: 99999;
  animation: slideInFromCorner 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
    border-radius: 24px;
    z-index: -1;
    animation: ${_m} 8s linear infinite;
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
    border-radius: 18px;
    z-index: -1;
  }

  @media (max-width: 900px) {
    width: 700px;
    max-width: calc(100vw - 100px);
  }

  @media (max-width: 768px) {
    width: 600px;
    max-width: calc(100vw - 80px);
    bottom: 135px;
  }

  @media (max-width: 600px) {
    width: 500px;
    max-width: calc(100vw - 60px);
    border-radius: 16px;

    &::before {
      border-radius: 20px;
    }

    &::after {
      border-radius: 14px;
    }
  }

  @media (max-width: 480px) {
    width: calc(100vw - 40px);
    left: 20px !important;
    right: 20px !important;
  }
`,py=W.div`
  display: flex;
  gap: 16px;
  padding: 0 24px 24px 24px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 8px;
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
    gap: 12px;

    &::-webkit-scrollbar {
      height: 6px;
    }
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`,my=W.div`
  list-style-type: none;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  overflow: hidden;
  flex-shrink: 0;
  width: 170px;

  &:hover {
    background: white;
    border-color: #e1e5e9;
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    width: 140px;
  }

  @media (max-width: 480px) {
    width: 130px;
  }
`,gy=W.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
`,xy=W.img`
  width: 100%;
  height: 180px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 160px;
  }

  @media (max-width: 480px) {
    height: 140px;
  }
`,yy=W.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex: 1;

  @media (max-width: 480px) {
    padding: 8px;
  }
`,by=W.div`
  color: #333;
  font-weight: 600;
  font-size: 13px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  margin-bottom: 6px;
  min-height: 38px;

  @media (max-width: 768px) {
    font-size: 12px;
    min-height: 35px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    min-height: 32px;
  }
`,vy=W.div`
  font-size: 15px;
  color: ${a=>a.mainColor||"#e7333c"};
  font-weight: 700;
  margin-top: auto;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,up=W.a`
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
`,Sy=({mainColor:a,forceOpen:r})=>{const[o,u]=G.useState(r||!1),[c,d]=G.useState(!0),[p,g]=G.useState([]),[w,x]=G.useState({title:"",contentTitle:"",position:0,theme:1}),b=G.useRef(null);if(b!==null&&nl(b,()=>{u(!1)}),G.useEffect(()=>{r&&u(!0)},[r]),G.useEffect(()=>{async function k(){d(!0);try{const B=await qt.get("https://api.upsell.co/RecommendedProducts");x({title:B.data.data.title,contentTitle:B.data.data.contentTitle,position:B.data.data.position,theme:B.data.data.theme||1}),g(B.data.data.products)}catch{}finally{d(!1)}}k()},[]),p===null||!(p.length>0&&!c))return null;const E=()=>f.jsxs(ly,{ref:b,position:w.position,mainColor:a,children:[f.jsx(op,{onClick:()=>u(!1),children:f.jsx("span",{children:"×"})}),f.jsxs(sp,{mainColor:a,children:[w.contentTitle," ✨"]}),f.jsx(ry,{children:p.map(k=>f.jsx(sy,{children:f.jsxs(oy,{href:`${k.productUrl}?utm_source=upsell&utm_medium=widget&utm_campaign=weekly-products`,children:[f.jsx(uy,{src:k.imageUrl,alt:k.title}),f.jsxs(cy,{children:[f.jsx(fy,{children:k.title}),f.jsxs(dy,{mainColor:a,children:[k.price," TL"]})]})]})},k.productId))}),f.jsxs(up,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]}),K=()=>f.jsxs(hy,{ref:b,position:w.position,mainColor:a,children:[f.jsx(op,{onClick:()=>u(!1),children:f.jsx("span",{children:"×"})}),f.jsxs(sp,{mainColor:a,children:[w.contentTitle," ✨"]}),f.jsx(py,{children:p.map(k=>f.jsx(my,{children:f.jsxs(gy,{href:`${k.productUrl}?utm_source=upsell&utm_medium=widget&utm_campaign=weekly-products`,children:[f.jsx(xy,{src:k.imageUrl,alt:k.title}),f.jsxs(yy,{children:[f.jsx(by,{children:k.title}),f.jsxs(vy,{mainColor:a,children:[k.price," TL"]})]})]})},k.productId))}),f.jsxs(up,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]});return f.jsxs("div",{children:[!r&&f.jsx(ay,{position:w.position,mainColor:a,onClick:()=>{u(!0)},children:w.title}),f.jsx(iy,{style:{display:o?"block":"none"},children:w.theme===2?K():E()})]})},bn=W.div`
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
`,wy=Ie`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Ey=Ie`   
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,zy=W.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${Ey} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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
`,Ay=W.div`
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
    animation: ${wy} 8s linear infinite;
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
`,Ty=({color:a,forceOpen:r})=>{const[o,u]=G.useState(r||!1),[c,d]=G.useState(null),[p,g]=G.useState(!1),[w,x]=G.useState(!1),b=G.useRef(null);nl(b,()=>{u(!1)}),G.useEffect(()=>{if(r)u(!0);else{const tt=document.getElementsByClassName("upsell-ss"),V=()=>u(!0);return Array.from(tt).forEach($=>{$.addEventListener("click",V)}),()=>{Array.from(tt).forEach($=>{$.removeEventListener("click",V)})}}},[r]);const{register:E,handleSubmit:K,formState:{errors:k}}=br(),B=K(async tt=>{x(!0),g(!1),d(null);try{const $=(await qt.post("https://api.upsell.co/ticimax/order",{phone:"90"+tt.phone})).data;!$.data||$.data===null?g(!0):d($.data)}catch{g(!0)}finally{x(!1)}}),M=()=>{u(!1),d(null),g(!1)};return f.jsx(Ef,{style:{display:o?"block":"none"},children:f.jsxs(Ay,{ref:b,mainColor:a,children:[f.jsxs(bo,{children:[f.jsx(zf,{mainColor:a}),f.jsx(Af,{mainColor:a}),f.jsx(Tf,{mainColor:a}),w&&f.jsx(wr,{children:f.jsx(zy,{children:Array.from({length:8}).map((tt,V)=>f.jsx("div",{},V))})}),f.jsx(dr,{children:f.jsx("span",{onClick:M,style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),c?f.jsxs(Ii,{children:[f.jsx(ai,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),f.jsxs(bn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş No"}),f.jsx("div",{style:{width:"50%"},children:c.siparisNo||"-"})]}),f.jsxs(bn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş Tarihi"}),f.jsx("div",{style:{width:"50%"},children:new Date(c.siparisTarihi).toLocaleDateString("tr-TR")||"-"})]}),f.jsxs(bn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş Durumu"}),f.jsx("div",{style:{width:"50%"},children:c.siparisDurumu||"-"})]}),f.jsxs(bn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Takip Link"}),f.jsx("div",{style:{width:"50%"},children:c.kargoTakipLink?f.jsx("a",{target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:a||"#e7333c"},href:c.kargoTakipLink,children:"Kargoyu Görüntüle"}):"-"})]}),f.jsxs(bn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Takip No"}),f.jsx("div",{style:{width:"50%"},children:c.kargoTakipNo||"-"})]}),f.jsxs(bn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Firma"}),f.jsx("div",{style:{width:"50%"},children:c.kargoFirmaTanim||"-"})]})]}):f.jsxs(Ii,{children:[f.jsx(ai,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),f.jsx(Sr,{children:"Siparişinizin kargo takibini yapmak için telefon numaranızı giriniz."}),f.jsxs("form",{onSubmit:B,children:[f.jsx(Ra,{mainColor:a,type:"text",...E("phone",{required:"Telefon numarası boş bırakılamaz",pattern:{value:/^[0-9]{10}$/,message:"Geçerli bir telefon numarası giriniz"}}),placeholder:"5XXXXXXXXX",maxLength:10}),k.phone&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:k.phone.message})}),f.jsxs(go,{children:[f.jsx(xo,{mainColor:a,...E("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",f.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",rel:"noopener noreferrer",children:"Aydınlatma metni için tıklayın."})]})]}),k.kvkk&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center",marginBottom:"10px"},children:k.kvkk.message})}),p&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Telefon numarası ile eşleşen sipariş bulunamadı."})}),f.jsx("div",{children:f.jsx(hr,{mainColor:a,children:"Sorgula"})})]})]})]}),f.jsxs(yo,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})})};W.button`
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
`;W.strong`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 16px;
  margin-bottom: 16px;
  color: ${a=>a.mainColor||"#333"};
  font-weight: 600;
`;const jy=W.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 16px 0;
`,Oy=W.label`
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
`,_y=W.span`
  color: ${a=>a.selected?"#fff":"#333"};
  text-decoration: none;
  font-weight: 500;
`,Dy=W.div`
  color: #e40000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  padding: 8px 12px;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
`,ky=Ie`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`,Ry=W.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${ky} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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
`,Cy=W.div`
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
    transition: background-color 0.3s ease, color 0.3s ease,
      box-shadow 0.3s ease, transform 0.3s ease !important;
    font-weight: 500 !important;
    text-decoration: none !important;
    box-sizing: border-box !important;
    min-height: auto !important;
    width: auto !important;
    position: relative !important;

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
      fill: ${a=>a.mainColor||"#e7333c"} !important;
      transition: stroke 0.3s ease, fill 0.3s ease !important;
      pointer-events: none !important;
      user-select: none !important;
      flex-shrink: 0 !important;
      width: 20px !important;
      height: 20px !important;
      min-width: 20px !important;
      min-height: 20px !important;
    }

    svg * {
      pointer-events: none !important;
      user-select: none !important;
      transition: none !important;
    }

    svg path,
    svg g {
      pointer-events: none !important;
      transition: none !important;
    }

    &:hover svg {
      stroke: #fff !important;
      fill: #fff !important;
    }

    i {
      pointer-events: none !important;
      user-select: none !important;
    }
  }
`,My=({mainColor:a,stockReminderUsageChannel:r,forceOpen:o})=>{const u=G.useRef(null),[c,d]=G.useState(o||!1),[p,g]=G.useState(!1),[w,x]=G.useState(""),[b,O]=G.useState(!1),[E,K]=G.useState(),[k,B]=G.useState(),[M,tt]=G.useState(!1),[V,$]=G.useState(!1),[rt,H]=G.useState(null),et=G.useRef(null),J=G.useRef(null),lt=G.useRef(null),zt=()=>{document.querySelectorAll(".nostok").forEach(F=>{if(!F.querySelector(".stock_bell_icon")){const ot=document.createElementNS("http://www.w3.org/2000/svg","svg");ot.setAttribute("class","stock_bell_icon"),ot.setAttribute("height","18"),ot.setAttribute("width","18"),ot.setAttribute("viewBox","0 0 512 512"),ot.style.pointerEvents="none";const ut=document.createElementNS("http://www.w3.org/2000/svg","g");["m437.017 39.687c-5.858-5.857-15.356-5.857-21.213 0-5.858 5.858-5.857 15.356 0 21.213 42.688 42.685 66.196 99.438 66.196 159.807 0 8.284 6.716 15 15 15s15-6.716 15-15c0-68.382-26.629-132.67-74.983-181.02z","m96.193 39.688c-5.858-5.857-15.355-5.858-21.213 0-48.352 48.354-74.98 112.641-74.98 181.019 0 8.284 6.716 15 15 15s15-6.716 15-15c0-60.365 23.508-117.118 66.193-159.805 5.858-5.858 5.858-15.356 0-21.214z","m370.358 85.125c-5.858 5.858-5.857 15.355 0 21.213 30.55 30.548 47.374 71.164 47.374 114.368 0 8.284 6.716 15 15 15s15-6.716 15-15c0-51.217-19.945-99.368-56.161-135.582-5.858-5.856-15.355-5.856-21.213.001z","m141.634 85.132c-5.858-5.857-15.356-5.857-21.213.001-36.211 36.216-56.154 84.363-56.154 135.573 0 8.284 6.716 15 15 15s15-6.716 15-15c0-43.197 16.823-83.811 47.369-114.361 5.857-5.858 5.856-15.355-.002-21.213z","m383.467 329.632v-76.792c0-28.011-8.918-54.59-25.79-76.865-14.101-18.617-33.332-33.16-54.939-41.717-3.007-23.111-22.82-41.018-46.738-41.018s-43.733 17.906-46.74 41.018c-21.606 8.558-40.837 23.101-54.938 41.717-16.872 22.275-25.79 48.854-25.79 76.865v76.792l-30.549 61.1c-2.325 4.65-2.076 10.172.657 14.594s7.561 7.114 12.76 7.114h66.774c7.033 36.558 39.246 64.267 77.825 64.267 38.578 0 70.791-27.709 77.823-64.267h66.778c5.199 0 10.027-2.692 12.76-7.114s2.981-9.944.657-14.594zm-127.467 117.075c-21.938 0-40.573-14.413-46.933-34.267h93.865c-6.36 19.854-24.994 34.267-46.932 34.267zm64.266-64.267h-128.533-56.062l21.279-42.559c1.042-2.083 1.583-4.379 1.583-6.708v-80.333c0-42.793 28.625-81.203 69.612-93.405 6.36-1.894 10.72-7.741 10.72-14.376v-4.686c0-9.447 7.687-17.133 17.135-17.133 9.447 0 17.133 7.686 17.133 17.133v4.686c0 6.636 4.36 12.483 10.72 14.376 40.987 12.202 69.614 50.611 69.614 93.405v80.333c0 2.329.542 4.625 1.583 6.708l21.279 42.559z"].forEach(pt=>{const kt=document.createElementNS("http://www.w3.org/2000/svg","path");kt.setAttribute("d",pt),ut.appendChild(kt)}),ot.appendChild(ut),F.appendChild(ot)}})},Yt=()=>{lt.current&&clearInterval(lt.current),lt.current=setInterval(()=>{document.querySelectorAll(".stock_bell_icon").forEach(F=>{const ot=F;ot.classList.add("bell-animate"),setTimeout(()=>{ot.classList.remove("bell-animate")},1e3)})},3e3)},Ct=()=>{const q=document.getElementById("dynamicNostokBellStyles");q&&q.remove();const F=document.createElement("style");F.id="dynamicNostokBellStyles",F.innerHTML=`
      span.nostok {
        display: flex !important;
        justify-content: space-evenly !important;
        align-items: center !important;
        min-width: 65px !important;
        position: relative !important;
      }
      span.nostok span {
        display: none !important;
      }
      .stock_bell_icon {
        width: 18px !important;
        height: 18px !important;
        min-width: 18px !important;
        min-height: 18px !important;
        max-width: 18px !important;
        max-height: 18px !important;
        fill: ${a||"#e7333c"} !important;
        margin-left: 5px !important;
        pointer-events: none !important;
        user-select: none !important;
        flex-shrink: 0 !important;
        transition: none !important;
        will-change: transform, fill !important;
        backface-visibility: hidden !important;
        transform-origin: center center !important;
      }
      /* G ve Path elementlerine de renk zorlaması ekliyoruz */
      .stock_bell_icon g, .stock_bell_icon path {
        fill: ${a||"#e7333c"} !important;
        pointer-events: none !important;
        transition: none !important;
      }
      .stock_bell_icon * {
        pointer-events: none !important;
        user-select: none !important;
        transition: none !important;
      }

      /* CSS Animation ile - daha stabil */
      @keyframes bellRing {
        0%, 100% {
          transform: scale(1);
          fill: ${a||"#e7333c"};
        }
        10%, 30% {
          transform: scale(1.5);
          fill: red;
        }
      }

      .stock_bell_icon.bell-animate {
        animation: bellRing 1s ease-in-out !important;
      }
    `,document.head.appendChild(F)};G.useEffect(()=>{typeof window<"u"&&(window.currentProduct?K(window.currentProduct):window.productDetailModel&&K(window.productDetailModel))},[]),G.useEffect(()=>(Ct(),()=>{const q=document.getElementById("dynamicNostokBellStyles");q&&q.remove()}),[a]),G.useEffect(()=>{typeof window<"u"&&E&&(zt(),Yt())},[E]),G.useEffect(()=>()=>{lt.current&&clearInterval(lt.current)},[]);const{register:I,handleSubmit:st,formState:{errors:xt},reset:yt,clearErrors:_}=br(),Q=()=>{d(!1),B(null),$(!1),H(null),yt(),_(),x(""),tt(!1)};u!==null&&nl(u,Q);const ft=st(q=>{g(!0),E&&(E.productVariantData&&!k||qt.post("https://api.upsell.co/phonesubscription/reminder",{...r===1||r===2?{phone:"90"+q.phone,email:""}:{email:q.email,phone:""},productName:E.productName,productSlug:window.location.pathname,productId:`${E.productVariantData?k?.variantOptions[0].urunID:E.product.id}`,productCardId:E.product.urunKartiId.toString(),variant:(JSON.stringify(k)??"{}")||"{}",hasVariant:E.productVariantData!==null}).then(()=>{O(!0),d(!1)}).catch(()=>{x(r===1||r===2?"Bu telefon numarası zaten kayıtlı.":"Bu e-posta adresi zaten kayıtlı.")}).finally(()=>{g(!1)}))});G.useEffect(()=>{if(o)d(!0);else if(typeof window<"u"){const q=gt=>{gt.preventDefault(),gt.stopPropagation();const pt=gt.currentTarget;let kt=pt.getAttribute("data-variant-definition");if(!kt){const ae=pt.querySelector("[data-variant-definition]");ae&&(kt=ae.getAttribute("data-variant-definition"))}H(kt),c||d(!0)},F=()=>{c||d(!0)};et.current=q,J.current=F;const ot=document.getElementById("upsell-ss-reminder");ot&&(ot.removeEventListener("click",J.current),ot.addEventListener("click",F));const ut=document.querySelectorAll(".nostok");if(ut.forEach(gt=>{et.current&&gt.removeEventListener("click",et.current)}),ut.forEach(gt=>{gt.addEventListener("click",q)}),E){const gt=E.productVariantData?.some(ae=>ae.stokAdedi===0),pt=E.productVariantData===null&&E.totalStockAmount===0;if(gt||pt){const ae=E.productVariantData!==null&&E.totalStockAmount===0;if(ut.length===0||ae)if(ot)ot.style.display="flex";else{const ve=()=>{if(typeof window.$<"u"){const St=document.querySelector(".MiddleList");if(St&&!document.getElementById("upsell-ss-reminder")){const vt=`
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
                        <svg class="stock_bell_icon" height="20" style="fill: ${a||"#e7333c"}; pointer-events: none; user-select: none;" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path d="m437.017 39.687c-5.858-5.857-15.356-5.857-21.213 0-5.858 5.858-5.857 15.356 0 21.213 42.688 42.685 66.196 99.438 66.196 159.807 0 8.284 6.716 15 15 15s15-6.716 15-15c0-68.382-26.629-132.67-74.983-181.02z"></path>
                            <path d="m96.193 39.688c-5.858-5.857-15.355-5.858-21.213 0-48.352 48.354-74.98 112.641-74.98 181.019 0 8.284 6.716 15 15 15s15-6.716 15-15c0-60.365 23.508-117.118 66.193-159.805 5.858-5.858 5.858-15.356 0-21.214z"></path>
                            <path d="m370.358 85.125c-5.858 5.858-5.857 15.355 0 21.213 30.55 30.548 47.374 71.164 47.374 114.368 0 8.284 6.716 15 15 15s15-6.716 15-15c0-51.217-19.945-99.368-56.161-135.582-5.858-5.856-15.355-5.856-21.213.001z"></path>
                            <path d="m141.634 85.132c-5.858-5.857-15.356-5.857-21.213.001-36.211 36.216-56.154 84.363-56.154 135.573 0 8.284 6.716 15 15 15s15-6.716 15-15c0-43.197 16.823-83.811 47.369-114.361 5.857-5.858 5.856-15.355-.002-21.213z"></path>
                            <path d="m383.467 329.632v-76.792c0-28.011-8.918-54.59-25.79-76.865-14.101-18.617-33.332-33.16-54.939-41.717-3.007-23.111-22.82-41.018-46.738-41.018s-43.733 17.906-46.74 41.018c-21.606 8.558-40.837 23.101-54.938 41.717-16.872 22.275-25.79 48.854-25.79 76.865v76.792l-30.549 61.1c-2.325 4.65-2.076 10.172.657 14.594s7.561 7.114 12.76 7.114h66.774c7.033 36.558 39.246 64.267 77.825 64.267 38.578 0 70.791-27.709 77.823-64.267h66.778c5.199 0 10.027-2.692 12.76-7.114s2.981-9.944.657-14.594zm-127.467 117.075c-21.938 0-40.573-14.413-46.933-34.267h93.865c-6.36 19.854-24.994 34.267-46.932 34.267zm64.266-64.267h-128.533-56.062l21.279-42.559c1.042-2.083 1.583-4.379 1.583-6.708v-80.333c0-42.793 28.625-81.203 69.612-93.405 6.36-1.894 10.72-7.741 10.72-14.376v-4.686c0-9.447 7.687-17.133 17.135-17.133 9.447 0 17.133 7.686 17.133 17.133v4.686c0 6.636 4.36 12.483 10.72 14.376 40.987 12.202 69.614 50.611 69.614 93.405v80.333c0 2.329.542 4.625 1.583 6.708l21.279 42.559z"></path>
                          </g>
                        </svg>
                        Stoğa Gelince Haber Ver
                      </div>
                    `;St.insertAdjacentHTML("beforebegin",vt);const Bt=document.getElementById("upsell-ss-reminder");Bt&&Bt.addEventListener("click",F)}}else setTimeout(ve,100)};ve()}}else ot&&(ot.style.display="none")}return()=>{document.querySelectorAll(".nostok").forEach(kt=>{et.current&&kt.removeEventListener("click",et.current)});const pt=document.getElementById("upsell-ss-reminder");pt&&J.current&&pt.removeEventListener("click",J.current)}}},[o,E,a,c]),G.useEffect(()=>{if(c&&E?.productVariantData&&!V&&rt){const q=rt.trim(),F=E.productVariantData.filter(ot=>ot.tanim.trim()===q);F.length>0&&(B({variantOptions:F,name:F[0].tanim}),$(!0))}c||($(!1),H(null))},[c,E,V,rt]);const bt=q=>q.reduce((F,ot)=>(F[ot.urunID]||(F[ot.urunID]={variantName:ot.ekSecenekTipiTanim,variantOptions:[]}),F[ot.urunID].variantOptions.push(ot),F),{}),S=()=>{if(!E?.productVariantData)return"Ürün Tekrar Stokta Olduğunda Sana Bildirelim!";const q=[...new Set(E.productVariantData.map(F=>F.ekSecenekTipiTanim))];return q.length>1?`${q.join(" ve ")}ini Seç, Stokta Olunca Sana Bildirelim!`:"Bedenini Seç, Stokta Olunca Sana Bildirelim!"},L=q=>q===1||q===2?"Ürün stoğa girdiğinde size WhatsApp veya SMS ile hemen bilgi vereceğiz. Telefon numaranızın doğru olduğundan emin olun!":"Ürün stoğa girdiğinde size E-posta ile hemen bilgi vereceğiz. E-posta adresinizin doğru olduğundan emin olun!",nt=()=>E?.productVariantData?"İlgilendiğiniz beden stoğa girdiğinde size hemen bilgi vereceğiz.":"İlgilendiğiniz ürün stoğa girdiğinde size hemen bilgi vereceğiz.";return E?f.jsxs(f.Fragment,{children:[f.jsx(Cy,{mainColor:a}),f.jsxs(Ef,{style:{display:!b&&!c?"none":"block"},children:[b&&f.jsx(eo,{mainColor:a,children:f.jsxs(Om,{children:[f.jsx(dr,{onClick:()=>{O(!1)},children:f.jsx("span",{style:{color:"#000000",float:"right",fontSize:"18px"},children:"×"})}),f.jsx(Sf,{mainColor:a,children:"Teşekkürler!"}),f.jsx(wf,{mainColor:a,children:nt()})]})}),c&&f.jsxs(eo,{ref:u,mainColor:a,children:[f.jsxs(bo,{children:[p&&f.jsx(wr,{children:f.jsxs(Ry,{children:[f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{})]})}),!b&&f.jsxs(f.Fragment,{children:[f.jsx(dr,{onClick:()=>{Q()},children:f.jsx("span",{style:{color:"#000000",float:"right",fontSize:"18px"},children:"×"})}),f.jsxs(Ii,{children:[f.jsx(ai,{mainColor:a,children:S()}),E?.productVariantData&&f.jsxs(f.Fragment,{children:[f.jsx("div",{children:f.jsx(jy,{children:Object.entries(bt(E?.productVariantData)).map(q=>f.jsx("li",{children:f.jsxs(Oy,{selected:k?.name===q[1].variantOptions.map(F=>F.tanim).join(", "),htmlFor:q[0]+"-"+q[1].variantOptions.map(F=>F.id),disabled:q[1].variantOptions[0].stokAdedi!==0,mainColor:a,children:[f.jsx("input",{type:"radio",disabled:q[1].variantOptions[0].stokAdedi!==0,id:q[0]+"-"+q[1].variantOptions.map(F=>F.id),checked:k?.name===q[1].variantOptions.map(F=>F.tanim).join(", "),style:{visibility:"hidden",display:"none"},...I(q[1].variantName,{required:q[1].variantName+" varyasyonu için bir seçenek seçin"}),onClick:()=>{B({variantOptions:q[1].variantOptions,name:q[1].variantOptions.map(F=>F.tanim).join(", ")})}}),f.jsx(_y,{selected:k?.name===q[1].variantOptions.map(F=>F.tanim).join(", "),children:q[1].variantOptions.map(F=>F.tanim).join(", ")})]})},q[0]))})}),!k&&M&&f.jsx(Dy,{children:"Lütfen bir seçenek seçin"})]}),f.jsx(Sr,{style:{marginTop:E?.productVariantData?"20px":"0"},children:L(r)}),f.jsxs("form",{onSubmit:q=>ft(q),children:[r===1||r===2?f.jsxs(f.Fragment,{children:[f.jsx(Ra,{mainColor:a,type:"string",...I("phone",{required:"Telefon boş bırakılamaz",pattern:{value:/^(501|502|503|505|506|507|508|509|512|530|531|532|533|534|535|536|537|538|539|540|541|542|543|544|545|546|547|548|549|550|551|552|553|554|555|559)\d{7}$/,message:"Geçerli bir cep telefonu numarası girin (örn: 5XXYYYYYYY)"}}),placeholder:"5XXXXXXXXX",maxLength:10}),xt.phone&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:xt?.phone?.message?.toString()??null})})]}):f.jsxs(f.Fragment,{children:[f.jsx(Ra,{mainColor:a,placeholder:"E-postanızı Giriniz",...I("email",{required:"E-posta boş bırakılamaz",pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,message:"Geçerli bir e-posta giriniz"}})}),xt.email&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:xt?.email?.message?.toString()??null})})]}),f.jsxs(go,{children:[f.jsx(xo,{mainColor:a,...I("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:[r===1||r===2?"Kampanya, duyuru ve bilgilendirmelerden WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum.":"Kampanya, duyuru ve bilgilendirmelerden E-Posta yoluyla haberdar olmak istediğimi belirtiyorum.",f.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},id:"kvkkLink",href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",children:"Aydınlatma metni için tıklayın"}),"."]})]}),xt.kvkk&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:xt?.kvkk?.message?.toString()??null})}),w&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:w})}),f.jsx("div",{children:f.jsx(hr,{mainColor:a,onClick:()=>{tt(!0)},children:"Kaydet"})})]})]})]})]}),f.jsxs(yo,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})]})]}):null};var Dm=wp();const Ny=a=>{const[r,o]=G.useState([]),[u,c]=G.useState(!0),d=G.useRef(null),p=G.useRef(null),[g,w]=G.useState(!1);G.useEffect(()=>{p.current=document.querySelector("#upsell-ss-featured-products-responsive"),w(!0)},[]),G.useEffect(()=>{async function E(){if(!document.body.classList.contains("CategoryBody")){c(!1);return}try{const K=window.globalModel;if(!K?.breadCrumb?.id){c(!1);return}const k=K.breadCrumb.id,B=window.location.origin,V=(await(await fetch(`${B}/api/product/GetProductList?c=trtry0000&FilterJson={"CategoryIdList":[${k}]}&PagingJson={"PageItemCount":15,"PageNumber":1,"OrderBy":"SATISADEDI","OrderDirection":"DESC"}&CreateFilter=false&TransitionOrder=0&PageType=1`)).json()).products?.filter($=>$.inStock)?.slice(0,15)||[];o(V)}catch(K){console.error("Ürün yükleme hatası:",K)}finally{c(!1)}}g&&E()},[g]),G.useEffect(()=>{if(r.length>0&&d.current){const E=window.$;if(E){const K=E(d.current);K.hasClass("owl-loaded")&&K.trigger("destroy.owl.carousel"),K.owlCarousel({loop:!0,autoplay:!0,autoplayTimeout:8e3,autoplayHoverPause:!0,autoplaySpeed:800,nav:!1,dots:!1,lazyLoad:!0,margin:15,responsive:{0:{items:2,margin:10},576:{items:3,margin:10},768:{items:4},992:{items:5},1200:{items:6},1600:{items:7}}})}}},[r]);const x=()=>{const E=window.$;E&&d.current&&E(d.current).trigger("prev.owl.carousel")},b=()=>{const E=window.$;E&&d.current&&E(d.current).trigger("next.owl.carousel")},O=E=>{const K=E.discountRate>0,B=`${E.url}?utm_source=upsell&utm_medium=widget&utm_campaign=category-products`;return f.jsxs("div",{className:"bs-card",children:[f.jsxs("div",{className:"bs-image-wrapper",children:[f.jsx("a",{href:B,title:E.name,children:f.jsx("img",{className:"owl-lazy","data-src":E.imageThumbPath,alt:E.imageAltTag})}),K&&f.jsxs("div",{className:"bs-discount-badge",children:["%",E.discountRate]})]}),f.jsxs("div",{className:"bs-details",children:[f.jsx("h3",{className:"bs-title",children:f.jsx("a",{href:B,children:E.name})}),f.jsx("div",{className:"bs-price-row",children:K?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"bs-old-price",children:E.productSellPriceStr}),f.jsx("div",{className:"bs-new-price",children:E.productPriceOriginalStr})]}):f.jsx("div",{className:"bs-new-price",children:E.productSellPriceStr})}),f.jsxs("a",{href:B,className:"bs-add-cart",children:[f.jsx("span",{children:"Sepete Ekle"}),f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{marginLeft:"5px"},children:[f.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),f.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]},E.productId)};return!document.body.classList.contains("CategoryBody")||!g||!p.current||u||r.length===0?null:Dm.createPortal(f.jsxs("div",{className:"bs-widget-container",children:[f.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .bs-widget-container {
          padding: 20px 0;
          background: transparent;
        }

        /* HEADER ALANI: Başlık Sola, Butonlar Sağa */
        .bs-head-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between; /* İki uca yasla */
          margin-bottom: 20px;
          padding: 0 5px;
        }

        .bs-heading {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bs-heading svg { color: #ffb100; }

        /* ÖZEL NAVİGASYON BUTONLARI */
        .bs-custom-nav {
          display: flex;
          gap: 10px;
        }

        .bs-nav-btn {
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
        }

        .bs-nav-btn:hover {
          background: #1a1a1a;
          color: #fff;
          border-color: #1a1a1a;
        }

        .bs-nav-btn svg {
          width: 18px;
          height: 18px;
        }

        /* --- KART STİLLERİ --- */
        .bs-card {
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

        .bs-card:hover {
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transform: translateY(-5px);
          border-color: transparent;
        }

        .bs-image-wrapper {
          position: relative;
          aspect-ratio: 2 / 3;
          overflow: hidden;
          background: #f9f9f9;
        }

        .bs-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .bs-card:hover .bs-image-wrapper img {
          transform: scale(1.05);
        }

        .bs-discount-badge {
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

        .bs-details {
          padding: 12px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .bs-title {
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

        .bs-title a { color: #333; text-decoration: none; transition: color 0.2s; }
        .bs-title a:hover { color: #000; }

        .bs-price-row {
          margin-top: auto;
          margin-bottom: 10px;
          display: flex;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 6px;
        }

        .bs-old-price {
          font-size: 12px;
          color: #999;
          text-decoration: line-through;
        }

        .bs-new-price {
          font-size: 16px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .bs-add-cart {
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

        .bs-add-cart:hover {
          background: #000;
          color: #fff;
        }

        @media (max-width: 768px) {
           .bs-heading { font-size: 18px; }
           .bs-title { font-size: 12px; height: 34px; }
           .bs-new-price { font-size: 15px; }
           .bs-add-cart span { display: none; }
           .bs-add-cart { padding: 8px; }
           .bs-nav-btn { width: 32px; height: 32px; } /* Mobilde butonlar biraz küçülür */
        }
      `}}),f.jsxs("div",{className:"bs-head-wrap",children:[f.jsxs("h2",{className:"bs-heading",children:[f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f.jsx("path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}),f.jsx("path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"}),f.jsx("path",{d:"M4 22h16"}),f.jsx("path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"}),f.jsx("path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"}),f.jsx("path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"})]}),"Kategorinin En Çok Satanları"]}),f.jsxs("div",{className:"bs-custom-nav",children:[f.jsx("button",{className:"bs-nav-btn",onClick:x,"aria-label":"Önceki",children:f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f.jsx("polyline",{points:"15 18 9 12 15 6"})})}),f.jsx("button",{className:"bs-nav-btn",onClick:b,"aria-label":"Sonraki",children:f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f.jsx("polyline",{points:"9 18 15 12 9 6"})})})]})]}),f.jsx("div",{ref:d,className:"owl-carousel owl-theme",children:r.map(E=>O(E))})]}),p.current)},Uy=W.div`
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
`,By=W.div`
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
`,Hy=W.div`
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
`,cp=W.div`
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
`,Ly=W.div`
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
`,fp=W.div`
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
`,qy=W.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background: #ffffff;
  text-align: center;
  overflow: hidden;
  position: relative;
  z-index: 10;
`,dp=W.select`
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
`,hp=W.div`
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
`,pp=W.p`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: left;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Gc=W.div`
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
`,Vy=W.p`
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
`,mp=W.div`
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
`,gp=W.div`
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
`,xp=W.div`
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
`,Yy=Ie`   
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`,Gy=W.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${Yy} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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
`,Xy=({useOneChartForAllProducts:a,forceOpen:r,mainColor:o})=>{const u=G.useRef(null),[c,d]=G.useState(r||!1),[p,g]=G.useState(!1),[w,x]=G.useState(!1),[b,O]=G.useState(0),[E,K]=G.useState(0),[k,B]=G.useState(),[M,tt]=G.useState(),[V,$]=G.useState(),[rt,H]=G.useState(),[et,J]=G.useState(!1),[lt,zt]=G.useState();G.useEffect(()=>{if(g(!0),typeof window<"u"){let I="-1";!a&&window.productDetailModel?.product?.urunKartiId?I=window.productDetailModel.product.urunKartiId.toString():a||(I="1"),qt.get(`https://api.upsell.co/sizechart/byproductcard/${I}`).then(st=>{st.data&&st.data.data&&st.data.data.items?zt(st.data.data.items):zt([{chartId:1,id:"1",maxHeight:170,maxWeight:70,minHeight:160,minWeight:50,title:"S"},{chartId:1,id:"2",maxHeight:180,maxWeight:80,minHeight:170,minWeight:65,title:"M"},{chartId:1,id:"3",maxHeight:190,maxWeight:90,minHeight:180,minWeight:75,title:"L"},{chartId:1,id:"4",maxHeight:200,maxWeight:100,minHeight:190,minWeight:85,title:"XL"}])}).catch(st=>{zt([{chartId:1,id:"1",maxHeight:170,maxWeight:70,minHeight:160,minWeight:50,title:"S"},{chartId:1,id:"2",maxHeight:180,maxWeight:80,minHeight:170,minWeight:65,title:"M"},{chartId:1,id:"3",maxHeight:190,maxWeight:90,minHeight:180,minWeight:75,title:"L"},{chartId:1,id:"4",maxHeight:200,maxWeight:100,minHeight:190,minWeight:85,title:"XL"}])}).finally(()=>{g(!1)})}},[a]);const Yt=()=>{d(!1),J(!1),x(!1),K(0),O(0)};u!==null&&nl(u,Yt),G.useEffect(()=>(r?d(!0):typeof window<"u"&&(document.getElementById("upsell-ss-sizechart")?.addEventListener("click",()=>{d(!0)}),document.getElementById("upsell-ss-sizechart")&&!lt?.filter(I=>window.productDetailModel?.productVariantData?.find(st=>st.tanim===I.title))?document.getElementById("upsell-ss-sizechart").style.display="none":document.getElementById("upsell-ss-sizechart")&&(document.getElementById("upsell-ss-sizechart").style.display="flex")),()=>{document.getElementById("upsell-ss-sizechart")?.removeEventListener("click",()=>{})}),[lt]);const Ct=()=>{const I=[];return typeof window<"u"&&lt?.filter(st=>st.minHeight<=E&&st.maxHeight>=E&&st.minWeight<=b&&st.maxWeight>=b).forEach(st=>{const yt=(window.productDetailModel?.productVariantData||[{tanim:"S"},{tanim:"M"},{tanim:"L"},{tanim:"XL"}]).find(_=>st.title===_.tanim);yt&&I.push(yt)}),I};return G.useEffect(()=>{Ct()},[E,b]),G.useEffect(()=>{if(lt&&lt?.length>0){const I=lt?.reduce((_,Q)=>Q.minHeight<_.minHeight?Q:_,lt?.[0]),st=lt?.reduce((_,Q)=>Q.maxHeight>_.maxHeight?Q:_,lt?.[0]),xt=lt?.reduce((_,Q)=>Q.minWeight<_.minWeight?Q:_,lt?.[0]),yt=lt?.reduce((_,Q)=>Q.maxWeight>_.maxWeight?Q:_,lt?.[0]);B(I),tt(st),$(xt),H(yt)}},[lt]),typeof window>"u"?null:f.jsx(f.Fragment,{children:f.jsxs(Uy,{style:{display:!w&&!c?"none":"block"},children:[w&&f.jsxs(By,{mainColor:o,children:[f.jsx(Hy,{onClick:()=>{x(!1)},children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:f.jsx("path",{d:"m12 4-8 8 8 8 .677-.677-6.844-6.844H20v-.958H5.833l6.844-6.844L12 4Z"})})}),f.jsx(cp,{onClick:()=>{Yt()},children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:f.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),f.jsxs(xp,{children:[f.jsx(Sf,{mainColor:o,children:"Beden Öneri Rehberi"}),f.jsx(wf,{mainColor:o,children:"Sizin için en uygun beden:"}),f.jsx(Vy,{children:Ct().length>0?f.jsxs(mp,{children:[f.jsx("img",{style:{width:"100%",aspectRatio:"8/12",objectFit:"cover"},src:window.productDetailModel?.productImages?.[0]?.imagePath||"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDIwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik02MCA5MEg2NVY5NUg2MFY5MFpNMTQwIDkwSDE0NVY5NUgxNDBWOTBaIiBmaWxsPSIjOEE5MUE4Ii8+CjxwYXRoIGQ9Ik01NSA4MEgxNTBWMjIwSDU1VjgwWiIgc3Ryb2tlPSIjOEE5MUE4IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz4KPHN2Zz4K",alt:"Ürün Resmi"}),f.jsxs(gp,{children:[f.jsx("span",{children:"SİZİN BEDENİNİZ OLABİLİR"}),Ct()[0]?.tanim||"Bulunamadı"]})]}):f.jsxs(mp,{children:[f.jsx("div",{style:{width:"100%",aspectRatio:"8/12",display:"flex",justifyContent:"center",alignItems:"center"},children:f.jsx("svg",{style:{width:"100px"},viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"#e7333c",children:f.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),f.jsxs(gp,{children:[f.jsx("span",{children:"ÖNERİ YAPILAMADI"}),"Üzgünüz,bu özellikler için beden öneremiyoruz."]})]})})]}),f.jsxs(fp,{children:[f.jsx(Gc,{mainColor:o,onClick:()=>{x(!1),K(0),O(0),J(!1)},children:"Baştan Başla"}),f.jsx(Gc,{mainColor:o,isSecondary:!0,onClick:()=>{Yt()},children:"Çıkış Yap"})]})]}),c&&!w&&f.jsxs(Ly,{ref:u,mainColor:o,children:[p&&f.jsx(wr,{children:f.jsxs(Gy,{children:[f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{})]})}),!w&&f.jsxs(f.Fragment,{children:[f.jsx(cp,{onClick:()=>{Yt()},children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:f.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),f.jsxs(qy,{children:[f.jsxs(xp,{children:[f.jsx(ai,{mainColor:o,children:"Beden Öneri Rehberi"}),f.jsx(Sr,{children:"Ölçülerinizi baz alarak size en uygun bedeni hesaplıyoruz."}),M&&k&&rt&&V&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[f.jsxs("div",{children:[f.jsx(pp,{children:"Boyunuzu Girin"}),f.jsxs("div",{style:{position:"relative"},children:[f.jsx(hp,{mainColor:o,children:"CM"}),f.jsxs(dp,{mainColor:o,onChange:I=>{K(Number(I.target.value))},name:"height",id:"height",children:[f.jsx("option",{value:"0",children:"Seçiniz"}),Array.from({length:M?.maxHeight+1-k?.minHeight},(I,st)=>(k?.minHeight+st).toString()).map(I=>f.jsxs("option",{value:I,children:[I," cm"]},I))]})]}),E===0&&et&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Lütfen bir boyunuzu giriniz."})})]}),f.jsxs("div",{children:[f.jsx(pp,{children:"Kilonuzu Girin"}),f.jsxs("div",{style:{position:"relative"},children:[f.jsx(hp,{mainColor:o,children:"KG"}),f.jsxs(dp,{mainColor:o,onChange:I=>{O(Number(I.target.value))},name:"weight",id:"weight",children:[f.jsx("option",{value:"0",children:"Seçiniz"}),Array.from({length:rt.maxWeight+1-V.minWeight},(I,st)=>(V.minWeight+st).toString()).map(I=>f.jsxs("option",{value:I,children:[I," kg"]},I))]})]}),!b&&et&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Lütfen kilonuzu giriniz"})})]})]})]}),f.jsxs(fp,{children:[f.jsx(Gc,{mainColor:o,onClick:()=>{J(!0),E&&b&&b!==0&&E!==0&&x(!0)},children:"Devam Et"}),f.jsxs(yo,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})]})]})]})]})})},Zy=Ie`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,$y=Ie`   
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Qy=W.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${$y} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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
`,Ky=W.div`
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
    animation: ${Zy} 8s linear infinite;
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
`,Jy=({color:a})=>{const[r,o]=G.useState(null),[u,c]=G.useState(!1),[d,p]=G.useState(!1),[g,w]=G.useState(!1),x=G.useRef(null);G.useEffect(()=>{x.current=document.querySelector("#upsell-ss-responsive"),w(!0)},[]);const{register:b,handleSubmit:O,formState:{errors:E}}=br(),K=O(async B=>{p(!0),c(!1),o(null);try{const tt=(await qt.post("https://api.upsell.co/ticimax/order",{phone:"90"+B.phone})).data;!tt.data||tt.data===null?c(!0):o(tt.data)}catch{c(!0)}finally{p(!1)}}),k=()=>{o(null),c(!1)};return g&&x.current?Dm.createPortal(f.jsx(Ky,{mainColor:a,children:f.jsxs(bo,{children:[f.jsx(zf,{mainColor:a}),f.jsx(Af,{mainColor:a}),f.jsx(Tf,{mainColor:a}),d&&f.jsx(wr,{children:f.jsx(Qy,{children:Array.from({length:8}).map((B,M)=>f.jsx("div",{},M))})}),r?f.jsxs(Ii,{children:[f.jsx(ai,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),f.jsxs(bn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş No"}),f.jsx("div",{style:{width:"50%"},children:r.siparisNo||"-"})]}),f.jsxs(bn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş Tarihi"}),f.jsx("div",{style:{width:"50%"},children:new Date(r.siparisTarihi).toLocaleDateString("tr-TR")||"-"})]}),f.jsxs(bn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş Durumu"}),f.jsx("div",{style:{width:"50%"},children:r.siparisDurumu||"-"})]}),f.jsxs(bn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Takip Link"}),f.jsx("div",{style:{width:"50%"},children:r.kargoTakipLink?f.jsx("a",{target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:a||"#e7333c"},href:r.kargoTakipLink,children:"Kargoyu Görüntüle"}):"-"})]}),f.jsxs(bn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Takip No"}),f.jsx("div",{style:{width:"50%"},children:r.kargoTakipNo||"-"})]}),f.jsxs(bn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Firma"}),f.jsx("div",{style:{width:"50%"},children:r.kargoFirmaTanim||"-"})]}),f.jsx("div",{children:f.jsx(hr,{mainColor:a,onClick:k,type:"button",children:"Yeni Sorgu Yap"})})]}):f.jsxs(Ii,{children:[f.jsx(ai,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),f.jsx(Sr,{children:"Siparişinizin kargo takibini yapmak için telefon numaranızı giriniz."}),f.jsxs("form",{onSubmit:K,children:[f.jsx(Ra,{mainColor:a,type:"text",...b("phone",{required:"Telefon numarası boş bırakılamaz",pattern:{value:/^[0-9]{10}$/,message:"Geçerli bir telefon numarası giriniz"}}),placeholder:"5XXXXXXXXX",maxLength:10}),E.phone&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:E.phone.message})}),f.jsxs(go,{children:[f.jsx(xo,{mainColor:a,...b("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",f.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",rel:"noopener noreferrer",children:"Aydınlatma metni için tıklayın."})]})]}),E.kvkk&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center",marginBottom:"10px"},children:E.kvkk.message})}),u&&f.jsx(De,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Telefon numarası ile eşleşen sipariş bulunamadı."})}),f.jsx("div",{children:f.jsx(hr,{mainColor:a,children:"Sorgula"})})]})]})]})}),x.current):null},Wy=Ie`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Fy=W.button`
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
`,Iy=W.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 12px 16px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 12px 12px 10px 12px;
  }
`;W.img`
  aspect-ratio: 5/2;
  height: 70px;
  margin: auto;
  object-fit: contain;
  margin-top: 20px;
`;const yp=W.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${a=>a.mainColor||"#333"};
  margin: 0 0 8px 0;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 6px 0;
  }
`;W.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 32px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`;const Py=W.input`
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
`,Xc=W.div`
  color: #e40000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`,tb=W.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 20px 0;
  text-align: left;
`,eb=W.input`
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
`,nb=W.button`
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
`;W.div`
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
`;const ab=W.a`
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
`,ib=W.div`
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
`,lb=W.h1`
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
`,bp=W.p`
  text-align: center;
  font-size: 15px;
  line-height: 1.6;
  color: #333;
  width: 100%;
  margin: 8px auto 16px;
  font-weight: 500;
`,rb=W.div`
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
`,sb=W.div`
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
    animation: ${Wy} 8s linear infinite;
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
`,ob=W.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 10px 16px 30px 16px;
  border-radius: 240px 240px 8px 8px;
`;W.div`
  display: flex;
  width: 100%;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 468px) {
    flex-direction: column;
    gap: 0;
  }
`;const ub=W.div`
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
`,cb=W.button`
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
`,fb=W.button`
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
`,db=W.span`
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
`,hb=({mainColor:a,logo:r,forceOpen:o,showFloatingButton:u=!0})=>{const[c,d]=G.useState(o||!1),[p,g]=G.useState(null),[w,x]=G.useState(""),[b,O]=G.useState(!1),[E,K]=G.useState([]),[k,B]=G.useState(0),[M,tt]=G.useState(null),[V,$]=G.useState(!1),[rt,H]=G.useState(0),[et,J]=G.useState(!1),[lt,zt]=G.useState(null),[Yt,Ct]=G.useState(!1),[I,st]=G.useState(!0),[xt,yt]=G.useState(null),_=G.useRef(null),{register:Q,handleSubmit:ft,formState:{errors:bt}}=br(),S=()=>{d(!1);const St=new Date;St.setDate(St.getDate()+Number(rt));const vt="expires="+St.toUTCString();document.cookie=`upsellGiftWheel=false;${vt};path=/`},L=()=>{const St=localStorage.getItem("upsellGiftWheelPrize");if(!St)return!0;try{const vt=JSON.parse(St);if(!vt.timestamp)return!0;const Bt=Date.now(),Lt=vt.timestamp,xe=1440*60*1e3;return Bt-Lt>xe}catch{return!0}},nt=()=>L()?(localStorage.removeItem("upsellGiftWheelPrize"),g(null),yt(null),!0):!1,q=async()=>{if(st(!1),x(""),nt(),(p||xt)&&!L()){O(!0),d(!0);return}const St=localStorage.getItem("upsellGiftWheelPrize");if(St&&!L())try{const vt=JSON.parse(St);yt(vt),g(vt),O(!0),d(!0);return}catch{localStorage.removeItem("upsellGiftWheelPrize")}O(!1),g(null),yt(null),d(!0),E.length===0?ve():setTimeout(()=>{pt()},50)};_!==null&&nl(_,()=>S());const ot=async St=>{try{await navigator.clipboard.writeText(St),Ct(!0),setTimeout(()=>Ct(!1),2e3)}catch{}},ut=(St,vt,Bt,Lt)=>{const xe=Lt*Math.PI/180;return{x:St+Bt*Math.cos(xe),y:vt+Bt*Math.sin(xe)}},gt=(St,vt=4e3)=>{if(!M)return;const Bt=Date.now(),Lt=k,xe=St,ie=1800,_n=.985,Pe=10;let v=ie,T=Lt,U=Bt;const it=()=>{const P=Date.now(),ct=(P-U)/1e3;U=P,v*=Math.pow(_n,ct*60);const At=v*ct;T+=At;const jt=Math.min((P-Bt)/vt,1),Ve=1-Math.pow(1-jt,3),He=Math.pow(jt,2),ra=T,Se=Lt+(xe-Lt)*Ve,Sn=ra*(1-He)+Se*He;if(M.style.transform=`rotate(${Sn}deg)`,v>500){const ke=Math.min(v/200,3);M.style.filter=`blur(${ke}px)`}else M.style.filter="none";if(jt<1&&v>Pe){const ke=requestAnimationFrame(it);zt(ke)}else M.style.transform=`rotate(${xe}deg)`,M.style.filter="none",B(xe),zt(null),setTimeout(()=>{O(!0)},500)},at=requestAnimationFrame(it);zt(at)},pt=()=>{const St=document.querySelector(".sectors"),vt=document.querySelector(".gift-wheel-texts");if(!St||!vt){setTimeout(()=>{const Bt=document.querySelector(".sectors"),Lt=document.querySelector(".gift-wheel-texts");Bt&&Lt&&kt(Bt,Lt)},100);return}kt(St,vt)},kt=(St,vt)=>{St.innerHTML="",vt.innerHTML="";const Bt=200,Lt=200,xe=170,ie=50,_n=360/E.length;E.forEach((Pe,v)=>{const T=v*_n,U=T+_n,it=T+_n/2,at=ut(Bt,Lt,xe,U),P=ut(Bt,Lt,xe,T),ct=ut(Bt,Lt,ie,U),At=ut(Bt,Lt,ie,T),jt=U-T<=180?0:1,Zt=`M${ct.x},${ct.y} L${at.x},${at.y} A${xe},${xe} 0 ${jt} 0 ${P.x},${P.y} L${At.x},${At.y} A${ie},${ie} 0 ${jt} 1 ${ct.x},${ct.y} Z`,Ve=document.createElementNS("http://www.w3.org/2000/svg","path");Ve.setAttribute("d",Zt);const He=Pe.color||(v%2===0?a||"#e7333c":"#ffffff");Ve.setAttribute("fill",He),Ve.setAttribute("stroke","#fff"),Ve.setAttribute("stroke-width","10"),St.appendChild(Ve);const ra=(xe+ie)/2,Se=ut(Bt,Lt,ra,it),ke=(Dn=>{const Ye=Dn.split(/\n/),un=[],li=_n/360*2*Math.PI*ra*.8,Vn=Math.floor(li/9);return Vn<=0?Ye:(Ye.forEach(zr=>{const vo=zr.split(/\s+/),Ge=[];let Kt="";vo.forEach(oe=>{const Yn=Kt?`${Kt} ${oe}`:oe;if(oe.length>Vn){Kt&&(Ge.push(Kt),Kt="");for(let sa=0;sa<oe.length;sa+=Vn)Ge.push(oe.substring(sa,sa+Vn))}else Yn.length<=Vn?Kt=Yn:(Kt&&Ge.push(Kt),Kt=oe)}),Kt&&Ge.push(Kt),un.push(...Ge)}),un.length>0?un:[Dn])})(Pe.text),we=document.createElementNS("http://www.w3.org/2000/svg","text");we.setAttribute("x",Se.x.toString()),we.setAttribute("y",Se.y.toString()),we.setAttribute("text-anchor","middle"),we.setAttribute("dominant-baseline","middle"),we.setAttribute("font-size","16"),we.setAttribute("font-weight","700");const qn=Dn=>{const Ye=Dn.replace("#",""),un=parseInt(Ye.substr(0,2),16),il=parseInt(Ye.substr(2,2),16),li=parseInt(Ye.substr(4,2),16);return(un*299+il*587+li*114)/1e3>128?"#000":"#fff"},ii=Pe.color?qn(Pe.color):v%2===0?"#fff":"#333";we.setAttribute("fill",ii),we.setAttribute("transform",`rotate(${it} ${Se.x} ${Se.y})`);const al=18,Er=ke.length>1?Se.y-(ke.length-1)*al/2:Se.y;ke.forEach((Dn,Ye)=>{const un=document.createElementNS("http://www.w3.org/2000/svg","tspan");un.setAttribute("x",Se.x.toString()),un.setAttribute("y",(Er+Ye*al).toString()),un.textContent=Dn,we.appendChild(un)}),vt.appendChild(we)})},ae=ft(async St=>{V||et||($(!0),J(!0),x(""),await qt.post("https://api.upsell.co/GiftWheel/Spin",{phoneNumber:St.phone}).then(vt=>{var Bt=vt.data;if(Bt.success){const Lt=Bt.data.sliceIndex;if(typeof Lt=="number"&&!isNaN(Lt)){const ie=360/E.length,v=((360-(Lt*ie+ie/2))%360+360)%360,T=k+360*5+v;M&&(lt&&(cancelAnimationFrame(lt),zt(null)),M.style.transformOrigin="200px 200px",M.style.transition="none",M.style.webkitTransition="none",gt(T,4e3)),g(vt.data.data),yt(vt.data.data);const U={...vt.data.data,timestamp:Date.now()};localStorage.setItem("upsellGiftWheelPrize",JSON.stringify(U));const it=new Date;it.setDate(it.getDate()+rt);const at="expires="+it.toUTCString();document.cookie=`upsellGiftWheel=true;${at};path=/`}else x("Sunucudan geçersiz veri alındı.")}else x(Bt.message)}).catch(()=>{x("Bağlantı hatası oluştu. Lütfen tekrar deneyiniz.")}).finally(()=>{setTimeout(()=>{$(!1),J(!1)},4500)}))}),ve=async()=>{try{const vt=(await qt.post("https://api.upsell.co/GiftWheel/Slices",{})).data;vt.success?(K(vt.data.slices),H(vt.data.frequency)):x("Hediye çarkı yüklenemedi.")}catch{x("Bağlantı hatası oluştu. Lütfen tekrar deneyiniz.")}};return G.useEffect(()=>{ve(),nt()},[]),G.useEffect(()=>{E.length>0&&c&&setTimeout(()=>{pt()},100)},[E,c]),G.useEffect(()=>{if(M&&!V&&!et){M.style.transition="transform 2s ease-in-out";const vt=setInterval(()=>{if(!V&&!et&&M){const Bt=k+Math.sin(Date.now()/3e3)*.5;M.style.transform=`rotate(${Bt}deg)`}},100);return()=>{clearInterval(vt),M&&(M.style.transition="none",M.style.transform=`rotate(${k}deg)`)}}},[M,V,et,k]),G.useEffect(()=>{if(o)(async()=>{nt();const vt=localStorage.getItem("upsellGiftWheelPrize");if(vt&&!L()||(p||xt)&&!L()){if(vt&&!p&&!xt&&!L())try{const Lt=JSON.parse(vt);yt(Lt),g(Lt)}catch{localStorage.removeItem("upsellGiftWheelPrize"),O(!1),g(null),yt(null),d(!0);return}O(!0),d(!0)}else O(!1),g(null),yt(null),d(!0),E.length===0||setTimeout(()=>{pt()},50)})();else if(typeof window<"u"){if(document.cookie.split(";").some(vt=>vt.trim().startsWith("upsellGiftWheel=")))return;const St=setTimeout(async()=>{nt();const vt=localStorage.getItem("upsellGiftWheelPrize");if(vt&&!L()||(p||xt)&&!L()){if(vt&&!p&&!xt&&!L())try{const Lt=JSON.parse(vt);yt(Lt),g(Lt)}catch{localStorage.removeItem("upsellGiftWheelPrize");return}O(!0),d(!0)}else O(!1),g(null),yt(null),d(!0),E.length===0||setTimeout(()=>{pt()},50)},6e4);return()=>{clearTimeout(St)}}},[o]),G.useEffect(()=>()=>{lt&&cancelAnimationFrame(lt)},[lt]),G.useEffect(()=>{if(typeof window<"u")if(document.cookie.split(";").some(vt=>vt.trim().startsWith("upsellGiftWheel=")))st(!1);else{const vt=setTimeout(()=>{st(!1)},1e4);return()=>clearTimeout(vt)}},[]),f.jsxs(f.Fragment,{children:[u&&!c&&f.jsxs(fb,{mainColor:a,onClick:q,className:I?"pulse":"","aria-label":"Hediye Çarkını Aç",children:[f.jsx(db,{children:"HEDİYE ÇARKI"}),f.jsx("div",{className:"gift-icon",children:f.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),f.jsx("path",{d:"M12 2 L12 22 M2 12 L22 12",stroke:"currentColor",strokeWidth:"1",opacity:"0.7"}),f.jsx("path",{d:"M5.64 5.64 L18.36 18.36 M18.36 5.64 L5.64 18.36",stroke:"currentColor",strokeWidth:"1",opacity:"0.7"}),f.jsx("circle",{cx:"12",cy:"12",r:"3",fill:"currentColor"}),f.jsx("path",{d:"M12 2 L14 6 L10 6 Z",fill:"currentColor"})]})})]}),f.jsx(rb,{style:{display:c?"block":"none"},children:c&&f.jsxs(sb,{ref:_,mainColor:a,children:[f.jsx(Fy,{onClick:S,children:f.jsx("span",{style:{color:"#000",float:"right",fontSize:"35px"},children:"×"})}),f.jsxs(ob,{children:[f.jsx(zf,{mainColor:a}),f.jsx(Af,{mainColor:a}),f.jsx(Tf,{mainColor:a}),f.jsxs(Iy,{children:[f.jsx("div",{className:"gift-wheel",style:{marginBottom:"16px",position:"relative",display:b?"none":"flex",justifyContent:"center",cursor:V?"not-allowed":"pointer",transition:"all 0.3s ease",transform:V?"scale(1.02)":"scale(1)",minHeight:E.length===0?"320px":"auto",alignItems:"center"},children:E.length===0?f.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px",color:"#666",fontSize:"16px"},children:[w?f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{fontSize:"48px"},children:"⚠️"}),f.jsx("span",{style:{color:"#e40000",textAlign:"center"},children:w}),f.jsx("button",{onClick:()=>{x(""),ve()},style:{padding:"8px 16px",background:a||"#e7333c",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"Tekrar Dene"})]}):f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{width:"40px",height:"40px",border:`3px solid ${a||"#e7333c"}20`,borderTop:`3px solid ${a||"#e7333c"}`,borderRadius:"50%",animation:"spin 1s linear infinite"}}),f.jsx("span",{children:"Hediye çarkı yükleniyor..."})]}),f.jsx("style",{children:`
                        @keyframes spin {
                          0% { transform: rotate(0deg); }
                          100% { transform: rotate(360deg); }
                        }
                      `})]}):f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",style:{width:"min(320px, 90vw)",height:"min(320px, 90vw)",maxWidth:"100%",pointerEvents:V?"none":"auto",filter:"drop-shadow(0 8px 25px rgba(0,0,0,0.15))",transition:"filter 0.3s ease"},children:[f.jsx("circle",{cx:"200",cy:"200",r:"190",fill:"none",stroke:"rgba(0,0,0,0.1)",strokeWidth:"8"}),f.jsxs("g",{className:"wheel",ref:St=>tt(St),id:"wheel",style:{transformOrigin:"200px 200px"},children:[f.jsx("g",{className:"sectors"}),f.jsx("g",{className:"gift-wheel-texts",style:{fill:"#fff",fontSize:"16px",fontWeight:700,textAnchor:"middle"}})]}),f.jsx("circle",{cx:"200",cy:"200",r:"180",fill:"none",stroke:a||"#e7333c",strokeWidth:"6"}),f.jsx("circle",{cx:"200",cy:"200",r:"170",fill:"none",stroke:"#ffffff",strokeWidth:"2"}),f.jsx("circle",{cx:"200",cy:"200",r:"45",fill:"#ffffff",stroke:a||"#e7333c",strokeWidth:"3"}),r&&f.jsx("image",{href:r,x:"170",y:"170",width:"60",height:"60",style:{objectFit:"contain"}}),f.jsx("g",{transform:"translate(200, 200)",children:f.jsx("g",{transform:"rotate(0) translate(185, 0)",children:f.jsx("polygon",{points:"-15,0 0,12 15,0 0,-12",fill:a||"#e7333c",stroke:"#ffffff",strokeWidth:"2",style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.3))"}})})})]})}),b&&f.jsxs(ib,{children:[f.jsx(yp,{mainColor:a,children:"🎊 Tebrikler! Hediye Çarkından Kazandınız! 🎁"}),f.jsxs(lb,{mainColor:a,children:[f.jsxs("strong",{children:[p.validDayCount," gün"]})," geçerli"," ",f.jsxs("strong",{children:[p.discountValue.toFixed(2),p.discountType===1?" TL":"%"]})," ","indirim kuponu kazandınız!"]}),p.minCartAmount&&p.minCartAmount>0&&p.minCartAmount>=100&&f.jsxs(bp,{style:{marginTop:"8px",marginBottom:"8px",fontSize:"14px",color:"#666",fontWeight:600},children:["Minimum sepet tutarı:"," ",f.jsxs("strong",{style:{color:a||"#e7333c"},children:[p.minCartAmount.toFixed(2)," TL"]})]}),f.jsx(bp,{children:"Kupon kodunuzu kopyalayın ve alışverişinizde kullanın"}),f.jsx(ub,{children:p.couponCode}),f.jsx(cb,{mainColor:a,className:Yt?"copied":"",onClick:()=>ot(p.couponCode),children:Yt?"Kopyalandı!":"Kodu Kopyala"})]}),!b&&f.jsxs(f.Fragment,{children:[f.jsx(yp,{mainColor:a,children:"Hediye Çarkı"}),f.jsxs("form",{style:{display:"flex",flexDirection:"column",width:"90%",margin:"0 auto"},onSubmit:St=>ae(St),children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(Py,{mainColor:a,type:"string",...Q("phone",{required:"Telefon boş bırakılamaz",pattern:{value:/^[0-9]{10}$/,message:"Telefon numarası 10 haneli olmalıdır"}}),placeholder:"5XXXXXXXXX",maxLength:10}),bt.phone&&f.jsx(Xc,{children:bt?.phone?.message?.toString()??null})]}),f.jsxs(tb,{children:[f.jsx(eb,{mainColor:a,...Q("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",f.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},id:"kvkkLink",href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",children:"Aydınlatma metni için tıklayın"}),"."]})]}),bt.kvkk&&f.jsx(Xc,{children:bt?.kvkk?.message?.toString()??null}),w&&f.jsx(Xc,{children:w}),f.jsx("div",{style:{marginTop:"4px"},children:f.jsx(nb,{mainColor:a,disabled:V||et,style:{opacity:V||et?.6:1,cursor:V||et?"not-allowed":"pointer"},children:V?"Çark Dönüyor...":"Çarkı Çevir"})})]})]})]})]}),f.jsxs(ab,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})})]})},pb=Ie`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,mb=W.div`
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
    content: "";
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
    animation: ${pb} 8s linear infinite;
    opacity: ${a=>a.mainColor?"0.8":"0"};
  }

  /* Arka plan maskesi */
  &::after {
    content: "";
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
`,gb=W.div`
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
`;Ie`
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;const xb=Ie`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-10px) scale(0.9);
  }
`,vp=W.div`
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
    animation: slideInSmoothStat 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
    animation: ${xb} 0.6s ease-out;
  }

  i {
    background: linear-gradient(
      135deg,
      ${a=>a.mainColor},
      ${a=>a.mainColor}dd
    );
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
`,yb=({mainColor:a,forceOpen:r})=>{const[o,u]=G.useState([]),[c,d]=G.useState(!1),[p,g]=G.useState(0),[w,x]=G.useState(r||!1),[b,O]=G.useState("50px"),[E,K]=G.useState(null),[k,B]=G.useState(null);return G.useEffect(()=>{if(!document.querySelector(".ProductBody")){x(!1);return}x(r||!0)},[r]),G.useEffect(()=>{async function M(){if(typeof window<"u"){const tt=window.productDetailModel;let V=null;if(tt&&tt.productId?V=tt.productId:V="1",V){d(!0);try{const $=await qt.post("https://api.upsell.co/ProductStat/"+V,{},{headers:{"Content-Type":"application/json","Content-Length":"2"}});$.data&&$.data.data&&$.data.data.length>0?u($.data.data):u([{text:"Son 24 saatte 15 kişi bu ürünü satın aldı",icon:"shopping-cart"},{text:"Bu ürünü 8 kişi favorilerine ekledi",icon:"heart"},{text:"Son 1 saatte 3 kişi bu ürünü görüntüledi",icon:"eye"},{text:"Bu ürün 12 kez sepete eklendi",icon:"plus-circle"}])}catch{u([{text:"Son 24 saatte 15 kişi bu ürünü satın aldı",icon:"shopping-cart"},{text:"Bu ürünü 8 kişi favorilerine ekledi",icon:"heart"},{text:"Son 1 saatte 3 kişi bu ürünü görüntüledi",icon:"eye"},{text:"Bu ürün 12 kez sepete eklendi",icon:"plus-circle"}])}finally{d(!1)}}}}M()},[]),G.useEffect(()=>{o.length>0&&E===null&&K(o[0])},[o,E]),G.useEffect(()=>{if(o.length>0){const M=setInterval(()=>{g(tt=>(tt+1)%o.length)},4e3);return()=>clearInterval(M)}},[o]),G.useEffect(()=>{if(o.length>0){B(E),K(o[p]);const M=setTimeout(()=>{B(null)},500);return()=>clearTimeout(M)}},[p,o]),G.useEffect(()=>{r&&x(!0)},[r]),G.useEffect(()=>{if(!r){const M=setTimeout(()=>{x(!0)},4e3);return()=>clearTimeout(M)}},[r]),G.useEffect(()=>{const M=()=>{const tt=window.innerWidth<=768,V=tt?"80px":"50px",$=tt?"155px":"125px";O(window.scrollY>1e3?$:V)};return M(),window.addEventListener("scroll",M),window.addEventListener("resize",M),()=>{window.removeEventListener("scroll",M),window.removeEventListener("resize",M)}},[]),c||o.length===0?null:f.jsx(mb,{id:"social-proof-wrapper",open:w,bottom:b,mainColor:a,children:f.jsxs(gb,{children:[k&&f.jsxs(vp,{className:"previous",mainColor:a,children:[f.jsx("i",{className:`fa fa-${k.icon}`})," ",k.text]}),E&&f.jsxs(vp,{className:"active",mainColor:a,children:[f.jsx("i",{className:`fa fa-${E.icon}`})," ",E.text]})]})})};function bb(){const[a,r]=G.useState(),[o,u]=G.useState(!1);return G.useEffect(()=>{async function c(){u(!0);try{const d=document.querySelector(".ProductBody")!==null,p=await qt.get("https://api.upsell.co/Shops");if(p.data&&p.data.success&&p.data.data){const g=p.data.data;r({mainColor:g.mainColor||"#e7333c",logo:g.logo||"",enabledPhoneSubscription:g.enabledPhoneSubscription||!1,enabledEmailSubscription:g.enabledEmailSubscription||!1,enabledGiftWheel:g.enabledGiftWheel||!1,enabledProductStat:(g.enabledProductStat||!1)&&d,enabledOrderCheck:g.enabledOrderCheck||!1,enabledWeeklyProducts:g.enabledWeeklyProducts||!1,enabledStockReminder:g.enabledStockReminder||!1,enabledSizeChart:g.enabledSizeChart||!1,useOneChartForAllProducts:g.useOneChartForAllProducts||!1,stockReminderUsageChannel:g.stockReminderUsageChannel||1})}else console.error("API'den geçersiz veri formatı geldi")}catch(d){console.error("API çağrısı başarısız:",d)}finally{u(!1)}}c()},[]),G.useEffect(()=>{const c=new URLSearchParams(window.location.search),d=c.get("utm_source"),p=c.get("utm_medium"),g=c.get("utm_campaign");if(!(d==="upsell"))return;const x="uvid",b=localStorage.getItem(x),O=b||crypto.randomUUID();b||localStorage.setItem(x,O),qt.post("https://api.upsell.co/Tracking/CreateVisitor",{visitorId:O,path:window.location.pathname,productId:String(window.productDetailModel?.product.urunKartiId),utm:{source:d,medium:p,campaign:g}}).catch(()=>{})},[]),G.useEffect(()=>{const c="uvid",d=localStorage.getItem(c);if(!d)return;const p=window,g=p.orderCompletedModel,w=p.checkout_order,x=g?.orderId??w?.id??w?.orderId??null;x&&qt.post("https://api.upsell.co/Tracking/MatchOrder",{visitorId:d,orderId:String(x)}).then(()=>{localStorage.removeItem(c)}).catch(()=>{})},[]),o?f.jsx("div",{children:"Yükleniyor..."}):a?a.mainColor?a.logo?f.jsxs(f.Fragment,{children:[f.jsx(Ny,{}),a.enabledWeeklyProducts&&f.jsx(Sy,{mainColor:a.mainColor}),(a.enabledPhoneSubscription||a.enabledEmailSubscription)&&f.jsx(ey,{mainColor:a.mainColor,enabledPhoneSubscription:a.enabledPhoneSubscription,enabledEmailSubscription:a.enabledEmailSubscription}),a.enabledGiftWheel&&f.jsx(hb,{mainColor:a.mainColor}),a.enabledProductStat&&f.jsx(yb,{mainColor:a.mainColor}),a.enabledOrderCheck&&f.jsxs(f.Fragment,{children:[f.jsx(Ty,{color:a.mainColor}),f.jsx(Jy,{})]}),a.enabledStockReminder&&f.jsx(My,{mainColor:a.mainColor,stockReminderUsageChannel:a.stockReminderUsageChannel}),a.enabledSizeChart&&a.useOneChartForAllProducts!==void 0&&f.jsx(Xy,{useOneChartForAllProducts:a.useOneChartForAllProducts})]}):f.jsx("div",{children:"Mağaza logo bilgisi eksik"}):f.jsx("div",{children:"Mağaza renk bilgisi eksik"}):f.jsx("div",{children:"Mağaza bilgileri yüklenemedi"})}const Sp=document.getElementById("upsell-style");Sp&&Wx.createRoot(Sp).render(f.jsx(bb,{}));
