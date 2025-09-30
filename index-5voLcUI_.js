(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function u(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(c){if(c.ep)return;c.ep=!0;const d=u(c);fetch(c.href,d)}})();(function(){if(!window.location.pathname.includes("/checkout"))return;let a=0;const r=3e5,u=setInterval(function(){const c=window.checkout_order,d=c?.id;d?(clearInterval(u),console.log("🟢 OrderId bulundu! İşlem başlatılıyor."),o(c,d)):a>=r&&(clearInterval(u),console.log("⏱️ Maksimum bekleme süresi doldu, işlem iptal edildi.")),a+=100},100);function o(c,d){const p="uvid",g=localStorage.getItem(p);if(console.log("📊 processOrder çağrıldı"),console.log("📊 visitorId (uvid):",g),console.log("📊 checkout_order:",c),console.log("📦 orderId:",d),!g){console.error("❌ Conversion-tracking: visitorId bulunamadı.");return}console.log("✅ Step 1 - Veri başarıyla yakalandı."),console.log("✅ Step 2 - OrderId mevcut");const w=new XMLHttpRequest;w.open("POST","https://api.upsell.co/Tracking/MatchOrder",!0),w.setRequestHeader("Content-Type","application/json;charset=UTF-8"),w.onreadystatechange=function(){w.readyState===4&&(w.status>=200&&w.status<300?(console.log("✅ Conversion-tracking: Başarılı. Ziyaretçi anahtarı siliniyor."),localStorage.removeItem(p)):console.error("❌ Conversion-tracking MatchOrder error:",w.responseText))},console.log("📤 Step 3 - İstek gönderiliyor."),w.send(JSON.stringify({visitorId:g,orderId:String(d)})),console.log("✅ Step 4 - İstek gönderildi.")}})();var Os=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ux(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ec={exports:{}},Ql={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function Bx(){if(oh)return Ql;oh=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(o,c,d){var p=null;if(d!==void 0&&(p=""+d),c.key!==void 0&&(p=""+c.key),"key"in c){d={};for(var g in c)g!=="key"&&(d[g]=c[g])}else d=c;return c=d.ref,{$$typeof:a,type:o,key:p,ref:c!==void 0?c:null,props:d}}return Ql.Fragment=r,Ql.jsx=u,Ql.jsxs=u,Ql}var ch;function Hx(){return ch||(ch=1,Ec.exports=Bx()),Ec.exports}var f=Hx(),Ac={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function Lx(){if(fh)return De;fh=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),E=Symbol.iterator;function A(y){return y===null||typeof y!="object"?null:(y=E&&y[E]||y["@@iterator"],typeof y=="function"?y:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,V={};function R(y,C,I){this.props=y,this.context=C,this.refs=V,this.updater=I||K}R.prototype.isReactComponent={},R.prototype.setState=function(y,C){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,C,"setState")},R.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function J(){}J.prototype=R.prototype;function H(y,C,I){this.props=y,this.context=C,this.refs=V,this.updater=I||K}var Z=H.prototype=new J;Z.constructor=H,M(Z,R.prototype),Z.isPureReactComponent=!0;var le=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},ne=Object.prototype.hasOwnProperty;function $(y,C,I,F,fe,Ee){return I=Ee.ref,{$$typeof:a,type:y,key:C,ref:I!==void 0?I:null,props:Ee}}function re(y,C){return $(y.type,C,void 0,void 0,void 0,y.props)}function be(y){return typeof y=="object"&&y!==null&&y.$$typeof===a}function Ue(y){var C={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(I){return C[I]})}var Ce=/\/+/g;function W(y,C){return typeof y=="object"&&y!==null&&y.key!=null?Ue(""+y.key):C.toString(36)}function se(){}function ye(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(se,se):(y.status="pending",y.then(function(C){y.status==="pending"&&(y.status="fulfilled",y.value=C)},function(C){y.status==="pending"&&(y.status="rejected",y.reason=C)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function me(y,C,I,F,fe){var Ee=typeof y;(Ee==="undefined"||Ee==="boolean")&&(y=null);var ue=!1;if(y===null)ue=!0;else switch(Ee){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(y.$$typeof){case a:case r:ue=!0;break;case b:return ue=y._init,me(ue(y._payload),C,I,F,fe)}}if(ue)return fe=fe(y),ue=F===""?"."+W(y,0):F,le(fe)?(I="",ue!=null&&(I=ue.replace(Ce,"$&/")+"/"),me(fe,C,I,"",function(qe){return qe})):fe!=null&&(be(fe)&&(fe=re(fe,I+(fe.key==null||y&&y.key===fe.key?"":(""+fe.key).replace(Ce,"$&/")+"/")+ue)),C.push(fe)),1;ue=0;var Te=F===""?".":F+":";if(le(y))for(var Se=0;Se<y.length;Se++)F=y[Se],Ee=Te+W(F,Se),ue+=me(F,C,I,Ee,fe);else if(Se=A(y),typeof Se=="function")for(y=Se.call(y),Se=0;!(F=y.next()).done;)F=F.value,Ee=Te+W(F,Se++),ue+=me(F,C,I,Ee,fe);else if(Ee==="object"){if(typeof y.then=="function")return me(ye(y),C,I,F,fe);throw C=String(y),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return ue}function D(y,C,I){if(y==null)return y;var F=[],fe=0;return me(y,F,"","",function(Ee){return C.call(I,Ee,fe++)}),F}function Q(y){if(y._status===-1){var C=y._result;C=C(),C.then(function(I){(y._status===0||y._status===-1)&&(y._status=1,y._result=I)},function(I){(y._status===0||y._status===-1)&&(y._status=2,y._result=I)}),y._status===-1&&(y._status=0,y._result=C)}if(y._status===1)return y._result.default;throw y._result}var ce=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function te(){}return De.Children={map:D,forEach:function(y,C,I){D(y,function(){C.apply(this,arguments)},I)},count:function(y){var C=0;return D(y,function(){C++}),C},toArray:function(y){return D(y,function(C){return C})||[]},only:function(y){if(!be(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},De.Component=R,De.Fragment=u,De.Profiler=c,De.PureComponent=H,De.StrictMode=o,De.Suspense=w,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,De.__COMPILER_RUNTIME={__proto__:null,c:function(y){return L.H.useMemoCache(y)}},De.cache=function(y){return function(){return y.apply(null,arguments)}},De.cloneElement=function(y,C,I){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var F=M({},y.props),fe=y.key,Ee=void 0;if(C!=null)for(ue in C.ref!==void 0&&(Ee=void 0),C.key!==void 0&&(fe=""+C.key),C)!ne.call(C,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&C.ref===void 0||(F[ue]=C[ue]);var ue=arguments.length-2;if(ue===1)F.children=I;else if(1<ue){for(var Te=Array(ue),Se=0;Se<ue;Se++)Te[Se]=arguments[Se+2];F.children=Te}return $(y.type,fe,void 0,void 0,Ee,F)},De.createContext=function(y){return y={$$typeof:p,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:d,_context:y},y},De.createElement=function(y,C,I){var F,fe={},Ee=null;if(C!=null)for(F in C.key!==void 0&&(Ee=""+C.key),C)ne.call(C,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(fe[F]=C[F]);var ue=arguments.length-2;if(ue===1)fe.children=I;else if(1<ue){for(var Te=Array(ue),Se=0;Se<ue;Se++)Te[Se]=arguments[Se+2];fe.children=Te}if(y&&y.defaultProps)for(F in ue=y.defaultProps,ue)fe[F]===void 0&&(fe[F]=ue[F]);return $(y,Ee,void 0,void 0,null,fe)},De.createRef=function(){return{current:null}},De.forwardRef=function(y){return{$$typeof:g,render:y}},De.isValidElement=be,De.lazy=function(y){return{$$typeof:b,_payload:{_status:-1,_result:y},_init:Q}},De.memo=function(y,C){return{$$typeof:x,type:y,compare:C===void 0?null:C}},De.startTransition=function(y){var C=L.T,I={};L.T=I;try{var F=y(),fe=L.S;fe!==null&&fe(I,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(te,ce)}catch(Ee){ce(Ee)}finally{L.T=C}},De.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},De.use=function(y){return L.H.use(y)},De.useActionState=function(y,C,I){return L.H.useActionState(y,C,I)},De.useCallback=function(y,C){return L.H.useCallback(y,C)},De.useContext=function(y){return L.H.useContext(y)},De.useDebugValue=function(){},De.useDeferredValue=function(y,C){return L.H.useDeferredValue(y,C)},De.useEffect=function(y,C,I){var F=L.H;if(typeof I=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return F.useEffect(y,C)},De.useId=function(){return L.H.useId()},De.useImperativeHandle=function(y,C,I){return L.H.useImperativeHandle(y,C,I)},De.useInsertionEffect=function(y,C){return L.H.useInsertionEffect(y,C)},De.useLayoutEffect=function(y,C){return L.H.useLayoutEffect(y,C)},De.useMemo=function(y,C){return L.H.useMemo(y,C)},De.useOptimistic=function(y,C){return L.H.useOptimistic(y,C)},De.useReducer=function(y,C,I){return L.H.useReducer(y,C,I)},De.useRef=function(y){return L.H.useRef(y)},De.useState=function(y){return L.H.useState(y)},De.useSyncExternalStore=function(y,C,I){return L.H.useSyncExternalStore(y,C,I)},De.useTransition=function(){return L.H.useTransition()},De.version="19.1.1",De}var dh;function tf(){return dh||(dh=1,Ac.exports=Lx()),Ac.exports}var G=tf();const Et=Ux(G);var zc={exports:{}},Kl={},Tc={exports:{}},jc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh;function qx(){return hh||(hh=1,function(a){function r(D,Q){var ce=D.length;D.push(Q);e:for(;0<ce;){var te=ce-1>>>1,y=D[te];if(0<c(y,Q))D[te]=Q,D[ce]=y,ce=te;else break e}}function u(D){return D.length===0?null:D[0]}function o(D){if(D.length===0)return null;var Q=D[0],ce=D.pop();if(ce!==Q){D[0]=ce;e:for(var te=0,y=D.length,C=y>>>1;te<C;){var I=2*(te+1)-1,F=D[I],fe=I+1,Ee=D[fe];if(0>c(F,ce))fe<y&&0>c(Ee,F)?(D[te]=Ee,D[fe]=ce,te=fe):(D[te]=F,D[I]=ce,te=I);else if(fe<y&&0>c(Ee,ce))D[te]=Ee,D[fe]=ce,te=fe;else break e}}return Q}function c(D,Q){var ce=D.sortIndex-Q.sortIndex;return ce!==0?ce:D.id-Q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var p=Date,g=p.now();a.unstable_now=function(){return p.now()-g}}var w=[],x=[],b=1,E=null,A=3,K=!1,M=!1,V=!1,R=!1,J=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function le(D){for(var Q=u(x);Q!==null;){if(Q.callback===null)o(x);else if(Q.startTime<=D)o(x),Q.sortIndex=Q.expirationTime,r(w,Q);else break;Q=u(x)}}function L(D){if(V=!1,le(D),!M)if(u(w)!==null)M=!0,ne||(ne=!0,W());else{var Q=u(x);Q!==null&&me(L,Q.startTime-D)}}var ne=!1,$=-1,re=5,be=-1;function Ue(){return R?!0:!(a.unstable_now()-be<re)}function Ce(){if(R=!1,ne){var D=a.unstable_now();be=D;var Q=!0;try{e:{M=!1,V&&(V=!1,H($),$=-1),K=!0;var ce=A;try{t:{for(le(D),E=u(w);E!==null&&!(E.expirationTime>D&&Ue());){var te=E.callback;if(typeof te=="function"){E.callback=null,A=E.priorityLevel;var y=te(E.expirationTime<=D);if(D=a.unstable_now(),typeof y=="function"){E.callback=y,le(D),Q=!0;break t}E===u(w)&&o(w),le(D)}else o(w);E=u(w)}if(E!==null)Q=!0;else{var C=u(x);C!==null&&me(L,C.startTime-D),Q=!1}}break e}finally{E=null,A=ce,K=!1}Q=void 0}}finally{Q?W():ne=!1}}}var W;if(typeof Z=="function")W=function(){Z(Ce)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ye=se.port2;se.port1.onmessage=Ce,W=function(){ye.postMessage(null)}}else W=function(){J(Ce,0)};function me(D,Q){$=J(function(){D(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return A},a.unstable_next=function(D){switch(A){case 1:case 2:case 3:var Q=3;break;default:Q=A}var ce=A;A=Q;try{return D()}finally{A=ce}},a.unstable_requestPaint=function(){R=!0},a.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var ce=A;A=D;try{return Q()}finally{A=ce}},a.unstable_scheduleCallback=function(D,Q,ce){var te=a.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?te+ce:te):ce=te,D){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=ce+y,D={id:b++,callback:Q,priorityLevel:D,startTime:ce,expirationTime:y,sortIndex:-1},ce>te?(D.sortIndex=ce,r(x,D),u(w)===null&&D===u(x)&&(V?(H($),$=-1):V=!0,me(L,ce-te))):(D.sortIndex=y,r(w,D),M||K||(M=!0,ne||(ne=!0,W()))),D},a.unstable_shouldYield=Ue,a.unstable_wrapCallback=function(D){var Q=A;return function(){var ce=A;A=Q;try{return D.apply(this,arguments)}finally{A=ce}}}}(jc)),jc}var ph;function Vx(){return ph||(ph=1,Tc.exports=qx()),Tc.exports}var Oc={exports:{}},Ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mh;function Yx(){if(mh)return Ct;mh=1;var a=tf();function r(w){var x="https://react.dev/errors/"+w;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)x+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+w+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(w,x,b){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:E==null?null:""+E,children:w,containerInfo:x,implementation:b}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(w,x){if(w==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ct.createPortal=function(w,x){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(r(299));return d(w,x,null,b)},Ct.flushSync=function(w){var x=p.T,b=o.p;try{if(p.T=null,o.p=2,w)return w()}finally{p.T=x,o.p=b,o.d.f()}},Ct.preconnect=function(w,x){typeof w=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,o.d.C(w,x))},Ct.prefetchDNS=function(w){typeof w=="string"&&o.d.D(w)},Ct.preinit=function(w,x){if(typeof w=="string"&&x&&typeof x.as=="string"){var b=x.as,E=g(b,x.crossOrigin),A=typeof x.integrity=="string"?x.integrity:void 0,K=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;b==="style"?o.d.S(w,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:E,integrity:A,fetchPriority:K}):b==="script"&&o.d.X(w,{crossOrigin:E,integrity:A,fetchPriority:K,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Ct.preinitModule=function(w,x){if(typeof w=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var b=g(x.as,x.crossOrigin);o.d.M(w,{crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&o.d.M(w)},Ct.preload=function(w,x){if(typeof w=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var b=x.as,E=g(b,x.crossOrigin);o.d.L(w,b,{crossOrigin:E,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Ct.preloadModule=function(w,x){if(typeof w=="string")if(x){var b=g(x.as,x.crossOrigin);o.d.m(w,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else o.d.m(w)},Ct.requestFormReset=function(w){o.d.r(w)},Ct.unstable_batchedUpdates=function(w,x){return w(x)},Ct.useFormState=function(w,x,b){return p.H.useFormState(w,x,b)},Ct.useFormStatus=function(){return p.H.useHostTransitionStatus()},Ct.version="19.1.1",Ct}var gh;function gp(){if(gh)return Oc.exports;gh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Oc.exports=Yx(),Oc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function Gx(){if(xh)return Kl;xh=1;var a=Vx(),r=tf(),u=gp();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(o(188))}function w(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return g(l),e;if(s===i)return g(l),t;s=s.sibling}throw Error(o(188))}if(n.return!==i.return)n=l,i=s;else{for(var h=!1,m=l.child;m;){if(m===n){h=!0,n=l,i=s;break}if(m===i){h=!0,i=l,n=s;break}m=m.sibling}if(!h){for(m=s.child;m;){if(m===n){h=!0,n=s,i=l;break}if(m===i){h=!0,i=s,n=l;break}m=m.sibling}if(!h)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,E=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),K=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),Ue=Symbol.for("react.memo_cache_sentinel"),Ce=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=Ce&&e[Ce]||e["@@iterator"],typeof e=="function"?e:null)}var se=Symbol.for("react.client.reference");function ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case R:return"Profiler";case V:return"StrictMode";case L:return"Suspense";case ne:return"SuspenseList";case be:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case K:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case H:return(e._context.displayName||"Context")+".Consumer";case le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:ye(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return ye(e(t))}catch{}}return null}var me=Array.isArray,D=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},te=[],y=-1;function C(e){return{current:e}}function I(e){0>y||(e.current=te[y],te[y]=null,y--)}function F(e,t){y++,te[y]=e.current,e.current=t}var fe=C(null),Ee=C(null),ue=C(null),Te=C(null);function Se(e,t){switch(F(ue,t),F(Ee,e),F(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?B1(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=B1(t),e=H1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(fe),F(fe,e)}function qe(){I(fe),I(Ee),I(ue)}function Dt(e){e.memoizedState!==null&&F(Te,e);var t=fe.current,n=H1(t,e.type);t!==n&&(F(Ee,e),F(fe,n))}function Nt(e){Ee.current===e&&(I(fe),I(Ee)),Te.current===e&&(I(Te),Yl._currentValue=ce)}var we=Object.prototype.hasOwnProperty,ge=a.unstable_scheduleCallback,Ye=a.unstable_cancelCallback,He=a.unstable_shouldYield,mt=a.unstable_requestPaint,nt=a.unstable_now,Nn=a.unstable_getCurrentPriorityLevel,Wt=a.unstable_ImmediatePriority,S=a.unstable_UserBlockingPriority,j=a.unstable_NormalPriority,B=a.unstable_LowPriority,ie=a.unstable_IdlePriority,ae=a.log,P=a.unstable_setDisableYieldValue,oe=null,Ae=null;function je(e){if(typeof ae=="function"&&P(e),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(oe,e)}catch{}}var Ze=Math.clz32?Math.clz32:ja,qt=Math.log,Mt=Math.LN2;function ja(e){return e>>>=0,e===0?32:31-(qt(e)/Mt|0)|0}var Ut=256,rt=4194304;function Bt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mn(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,s=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var m=i&134217727;return m!==0?(i=m&~s,i!==0?l=Bt(i):(h&=m,h!==0?l=Bt(h):n||(n=m&~e,n!==0&&(l=Bt(n))))):(m=i&~s,m!==0?l=Bt(m):h!==0?l=Bt(h):n||(n=i&~e,n!==0&&(l=Bt(n)))),l===0?0:t!==0&&t!==l&&(t&s)===0&&(s=l&-l,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:l}function Un(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ea(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gr(){var e=Ut;return Ut<<=1,(Ut&4194048)===0&&(Ut=256),e}function xr(){var e=rt;return rt<<=1,(rt&62914560)===0&&(rt=4194304),e}function Ii(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Am(e,t,n,i,l,s){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,v=e.expirationTimes,_=e.hiddenUpdates;for(n=h&~n;0<n;){var q=31-Ze(n),X=1<<q;m[q]=0,v[q]=-1;var k=_[q];if(k!==null)for(_[q]=null,q=0;q<k.length;q++){var N=k[q];N!==null&&(N.lane&=-536870913)}n&=~X}i!==0&&wf(e,i,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(h&~t))}function wf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ze(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function Ef(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ze(n),l=1<<i;l&t|e[i]&t&&(e[i]|=t),n&=~l}}function du(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Af(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:ah(e.type))}function zm(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var ta=Math.random().toString(36).slice(2),_t="__reactFiber$"+ta,Vt="__reactProps$"+ta,ei="__reactContainer$"+ta,pu="__reactEvents$"+ta,Tm="__reactListeners$"+ta,jm="__reactHandles$"+ta,zf="__reactResources$"+ta,Pi="__reactMarker$"+ta;function mu(e){delete e[_t],delete e[Vt],delete e[pu],delete e[Tm],delete e[jm]}function ti(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ei]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Y1(e);e!==null;){if(n=e[_t])return n;e=Y1(e)}return t}e=n,n=e.parentNode}return null}function ni(e){if(e=e[_t]||e[ei]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function el(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function ai(e){var t=e[zf];return t||(t=e[zf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function yt(e){e[Pi]=!0}var Tf=new Set,jf={};function Oa(e,t){ii(e,t),ii(e+"Capture",t)}function ii(e,t){for(jf[e]=t,e=0;e<t.length;e++)Tf.add(t[e])}var Om=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Of={},Df={};function Dm(e){return we.call(Df,e)?!0:we.call(Of,e)?!1:Om.test(e)?Df[e]=!0:(Of[e]=!0,!1)}function yr(e,t,n){if(Dm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function vr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Bn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var gu,_f;function li(e){if(gu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);gu=t&&t[1]||"",_f=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gu+e+_f}var xu=!1;function yu(e,t){if(!e||xu)return"";xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(N){var k=N}Reflect.construct(e,[],X)}else{try{X.call()}catch(N){k=N}e.call(X.prototype)}}else{try{throw Error()}catch(N){k=N}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(N){if(N&&k&&typeof N.stack=="string")return[N.stack,k.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),h=s[0],m=s[1];if(h&&m){var v=h.split(`
`),_=m.split(`
`);for(l=i=0;i<v.length&&!v[i].includes("DetermineComponentFrameRoot");)i++;for(;l<_.length&&!_[l].includes("DetermineComponentFrameRoot");)l++;if(i===v.length||l===_.length)for(i=v.length-1,l=_.length-1;1<=i&&0<=l&&v[i]!==_[l];)l--;for(;1<=i&&0<=l;i--,l--)if(v[i]!==_[l]){if(i!==1||l!==1)do if(i--,l--,0>l||v[i]!==_[l]){var q=`
`+v[i].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=i&&0<=l);break}}}finally{xu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?li(n):""}function _m(e){switch(e.tag){case 26:case 27:case 5:return li(e.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 15:return yu(e.type,!1);case 11:return yu(e.type.render,!1);case 1:return yu(e.type,!0);case 31:return li("Activity");default:return""}}function Rf(e){try{var t="";do t+=_m(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rm(e){var t=Cf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(h){i=""+h,s.call(this,h)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(h){i=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function br(e){e._valueTracker||(e._valueTracker=Rm(e))}function kf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Cf(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cm=/[\n"\\]/g;function un(e){return e.replace(Cm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vu(e,t,n,i,l,s,h,m){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+sn(t)):e.value!==""+sn(t)&&(e.value=""+sn(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?bu(e,h,sn(t)):n!=null?bu(e,h,sn(n)):i!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+sn(m):e.removeAttribute("name")}function Nf(e,t,n,i,l,s,h,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;n=n!=null?""+sn(n):"",t=t!=null?""+sn(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=m?e.checked:!!i,e.defaultChecked=!!i,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h)}function bu(e,t,n){t==="number"&&Sr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ri(e,t,n,i){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&i&&(e[n].defaultSelected=!0)}else{for(n=""+sn(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Mf(e,t,n){if(t!=null&&(t=""+sn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+sn(n):""}function Uf(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(me(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=sn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var km=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bf(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||km.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Hf(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&n[l]!==i&&Bf(e,l,i)}else for(var s in t)t.hasOwnProperty(s)&&Bf(e,s,t[s])}function Su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wr(e){return Mm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var wu=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ui=null,oi=null;function Lf(e){var t=ni(e);if(t&&(e=t.stateNode)){var n=e[Vt]||null;e:switch(e=t.stateNode,t.type){case"input":if(vu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+un(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var l=i[Vt]||null;if(!l)throw Error(o(90));vu(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&kf(i)}break e;case"textarea":Mf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ri(e,!!n.multiple,t,!1)}}}var Au=!1;function qf(e,t,n){if(Au)return e(t,n);Au=!0;try{var i=e(t);return i}finally{if(Au=!1,(ui!==null||oi!==null)&&(ss(),ui&&(t=ui,e=oi,oi=ui=null,Lf(t),e)))for(t=0;t<e.length;t++)Lf(e[t])}}function tl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Vt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=!1;if(Hn)try{var nl={};Object.defineProperty(nl,"passive",{get:function(){zu=!0}}),window.addEventListener("test",nl,nl),window.removeEventListener("test",nl,nl)}catch{zu=!1}var na=null,Tu=null,Er=null;function Vf(){if(Er)return Er;var e,t=Tu,n=t.length,i,l="value"in na?na.value:na.textContent,s=l.length;for(e=0;e<n&&t[e]===l[e];e++);var h=n-e;for(i=1;i<=h&&t[n-i]===l[s-i];i++);return Er=l.slice(e,1<i?1-i:void 0)}function Ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function Yf(){return!1}function Yt(e){function t(n,i,l,s,h){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=s,this.target=h,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zr:Yf,this.isPropagationStopped=Yf,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),t}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tr=Yt(Da),al=b({},Da,{view:0,detail:0}),Um=Yt(al),ju,Ou,il,jr=b({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==il&&(il&&e.type==="mousemove"?(ju=e.screenX-il.screenX,Ou=e.screenY-il.screenY):Ou=ju=0,il=e),ju)},movementY:function(e){return"movementY"in e?e.movementY:Ou}}),Gf=Yt(jr),Bm=b({},jr,{dataTransfer:0}),Hm=Yt(Bm),Lm=b({},al,{relatedTarget:0}),Du=Yt(Lm),qm=b({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),Vm=Yt(qm),Ym=b({},Da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gm=Yt(Ym),Xm=b({},Da,{data:0}),Xf=Yt(Xm),Zm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$m={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Km(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qm[e])?!!t[e]:!1}function _u(){return Km}var Jm=b({},al,{key:function(e){if(e.key){var t=Zm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$m[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fm=Yt(Jm),Wm=b({},jr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=Yt(Wm),Im=b({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),Pm=Yt(Im),eg=b({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),tg=Yt(eg),ng=b({},jr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ag=Yt(ng),ig=b({},Da,{newState:0,oldState:0}),lg=Yt(ig),rg=[9,13,27,32],Ru=Hn&&"CompositionEvent"in window,ll=null;Hn&&"documentMode"in document&&(ll=document.documentMode);var sg=Hn&&"TextEvent"in window&&!ll,$f=Hn&&(!Ru||ll&&8<ll&&11>=ll),Qf=" ",Kf=!1;function Jf(e,t){switch(e){case"keyup":return rg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ci=!1;function ug(e,t){switch(e){case"compositionend":return Ff(t);case"keypress":return t.which!==32?null:(Kf=!0,Qf);case"textInput":return e=t.data,e===Qf&&Kf?null:e;default:return null}}function og(e,t){if(ci)return e==="compositionend"||!Ru&&Jf(e,t)?(e=Vf(),Er=Tu=na=null,ci=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $f&&t.locale!=="ko"?null:t.data;default:return null}}var cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cg[e.type]:t==="textarea"}function If(e,t,n,i){ui?oi?oi.push(i):oi=[i]:ui=i,t=hs(t,"onChange"),0<t.length&&(n=new Tr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var rl=null,sl=null;function fg(e){C1(e,0)}function Or(e){var t=el(e);if(kf(t))return e}function Pf(e,t){if(e==="change")return t}var ed=!1;if(Hn){var Cu;if(Hn){var ku="oninput"in document;if(!ku){var td=document.createElement("div");td.setAttribute("oninput","return;"),ku=typeof td.oninput=="function"}Cu=ku}else Cu=!1;ed=Cu&&(!document.documentMode||9<document.documentMode)}function nd(){rl&&(rl.detachEvent("onpropertychange",ad),sl=rl=null)}function ad(e){if(e.propertyName==="value"&&Or(sl)){var t=[];If(t,sl,e,Eu(e)),qf(fg,t)}}function dg(e,t,n){e==="focusin"?(nd(),rl=t,sl=n,rl.attachEvent("onpropertychange",ad)):e==="focusout"&&nd()}function hg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Or(sl)}function pg(e,t){if(e==="click")return Or(t)}function mg(e,t){if(e==="input"||e==="change")return Or(t)}function gg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:gg;function ul(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!we.call(t,l)||!It(e[l],t[l]))return!1}return!0}function id(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ld(e,t){var n=id(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=id(n)}}function rd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Sr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sr(e.document)}return t}function Nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var xg=Hn&&"documentMode"in document&&11>=document.documentMode,fi=null,Mu=null,ol=null,Uu=!1;function ud(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uu||fi==null||fi!==Sr(i)||(i=fi,"selectionStart"in i&&Nu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ol&&ul(ol,i)||(ol=i,i=hs(Mu,"onSelect"),0<i.length&&(t=new Tr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=fi)))}function _a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var di={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},Bu={},od={};Hn&&(od=document.createElement("div").style,"AnimationEvent"in window||(delete di.animationend.animation,delete di.animationiteration.animation,delete di.animationstart.animation),"TransitionEvent"in window||delete di.transitionend.transition);function Ra(e){if(Bu[e])return Bu[e];if(!di[e])return e;var t=di[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in od)return Bu[e]=t[n];return e}var cd=Ra("animationend"),fd=Ra("animationiteration"),dd=Ra("animationstart"),yg=Ra("transitionrun"),vg=Ra("transitionstart"),bg=Ra("transitioncancel"),hd=Ra("transitionend"),pd=new Map,Hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hu.push("scrollEnd");function yn(e,t){pd.set(e,t),Oa(t,[e])}var md=new WeakMap;function on(e,t){if(typeof e=="object"&&e!==null){var n=md.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Rf(t)},md.set(e,t),t)}return{value:e,source:t,stack:Rf(t)}}var cn=[],hi=0,Lu=0;function Dr(){for(var e=hi,t=Lu=hi=0;t<e;){var n=cn[t];cn[t++]=null;var i=cn[t];cn[t++]=null;var l=cn[t];cn[t++]=null;var s=cn[t];if(cn[t++]=null,i!==null&&l!==null){var h=i.pending;h===null?l.next=l:(l.next=h.next,h.next=l),i.pending=l}s!==0&&gd(n,l,s)}}function _r(e,t,n,i){cn[hi++]=e,cn[hi++]=t,cn[hi++]=n,cn[hi++]=i,Lu|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function qu(e,t,n,i){return _r(e,t,n,i),Rr(e)}function pi(e,t){return _r(e,null,null,t),Rr(e)}function gd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var l=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&t!==null&&(l=31-Ze(n),e=s.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=n|536870912),s):null}function Rr(e){if(50<Nl)throw Nl=0,Qo=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function Sg(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(e,t,n,i){return new Sg(e,t,n,i)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ln(e,t){var n=e.alternate;return n===null?(n=Pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function xd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Cr(e,t,n,i,l,s){var h=0;if(i=e,typeof e=="function")Vu(e)&&(h=1);else if(typeof e=="string")h=Ex(e,n,fe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case be:return e=Pt(31,n,t,l),e.elementType=be,e.lanes=s,e;case M:return Ca(n.children,l,s,t);case V:h=8,l|=24;break;case R:return e=Pt(12,n,t,l|2),e.elementType=R,e.lanes=s,e;case L:return e=Pt(13,n,t,l),e.elementType=L,e.lanes=s,e;case ne:return e=Pt(19,n,t,l),e.elementType=ne,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:case Z:h=10;break e;case H:h=9;break e;case le:h=11;break e;case $:h=14;break e;case re:h=16,i=null;break e}h=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Pt(h,n,t,l),t.elementType=e,t.type=i,t.lanes=s,t}function Ca(e,t,n,i){return e=Pt(7,e,i,t),e.lanes=n,e}function Yu(e,t,n){return e=Pt(6,e,null,t),e.lanes=n,e}function Gu(e,t,n){return t=Pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gi=[],xi=0,kr=null,Nr=0,fn=[],dn=0,ka=null,qn=1,Vn="";function Na(e,t){gi[xi++]=Nr,gi[xi++]=kr,kr=e,Nr=t}function yd(e,t,n){fn[dn++]=qn,fn[dn++]=Vn,fn[dn++]=ka,ka=e;var i=qn;e=Vn;var l=32-Ze(i)-1;i&=~(1<<l),n+=1;var s=32-Ze(t)+l;if(30<s){var h=l-l%5;s=(i&(1<<h)-1).toString(32),i>>=h,l-=h,qn=1<<32-Ze(t)+l|n<<l|i,Vn=s+e}else qn=1<<s|n<<l|i,Vn=e}function Xu(e){e.return!==null&&(Na(e,1),yd(e,1,0))}function Zu(e){for(;e===kr;)kr=gi[--xi],gi[xi]=null,Nr=gi[--xi],gi[xi]=null;for(;e===ka;)ka=fn[--dn],fn[dn]=null,Vn=fn[--dn],fn[dn]=null,qn=fn[--dn],fn[dn]=null}var Ht=null,it=null,Ge=!1,Ma=null,zn=!1,$u=Error(o(519));function Ua(e){var t=Error(o(418,""));throw dl(on(t,e)),$u}function vd(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[_t]=e,t[Vt]=i,n){case"dialog":Me("cancel",t),Me("close",t);break;case"iframe":case"object":case"embed":Me("load",t);break;case"video":case"audio":for(n=0;n<Ul.length;n++)Me(Ul[n],t);break;case"source":Me("error",t);break;case"img":case"image":case"link":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"input":Me("invalid",t),Nf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),br(t);break;case"select":Me("invalid",t);break;case"textarea":Me("invalid",t),Uf(t,i.value,i.defaultValue,i.children),br(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||U1(t.textContent,n)?(i.popover!=null&&(Me("beforetoggle",t),Me("toggle",t)),i.onScroll!=null&&Me("scroll",t),i.onScrollEnd!=null&&Me("scrollend",t),i.onClick!=null&&(t.onclick=ps),t=!0):t=!1,t||Ua(e)}function bd(e){for(Ht=e.return;Ht;)switch(Ht.tag){case 5:case 13:zn=!1;return;case 27:case 3:zn=!0;return;default:Ht=Ht.return}}function cl(e){if(e!==Ht)return!1;if(!Ge)return bd(e),Ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||oc(e.type,e.memoizedProps)),n=!n),n&&it&&Ua(e),bd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){it=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}it=null}}else t===27?(t=it,ya(e.type)?(e=hc,hc=null,it=e):it=t):it=Ht?bn(e.stateNode.nextSibling):null;return!0}function fl(){it=Ht=null,Ge=!1}function Sd(){var e=Ma;return e!==null&&(Zt===null?Zt=e:Zt.push.apply(Zt,e),Ma=null),e}function dl(e){Ma===null?Ma=[e]:Ma.push(e)}var Qu=C(null),Ba=null,Yn=null;function aa(e,t,n){F(Qu,t._currentValue),t._currentValue=n}function Gn(e){e._currentValue=Qu.current,I(Qu)}function Ku(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Ju(e,t,n,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var h=l.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=l;for(var v=0;v<t.length;v++)if(m.context===t[v]){s.lanes|=n,m=s.alternate,m!==null&&(m.lanes|=n),Ku(s.return,n,e),i||(h=null);break e}s=m.next}}else if(l.tag===18){if(h=l.return,h===null)throw Error(o(341));h.lanes|=n,s=h.alternate,s!==null&&(s.lanes|=n),Ku(h,n,e),h=null}else h=l.child;if(h!==null)h.return=l;else for(h=l;h!==null;){if(h===e){h=null;break}if(l=h.sibling,l!==null){l.return=h.return,h=l;break}h=h.return}l=h}}function hl(e,t,n,i){e=null;for(var l=t,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var h=l.alternate;if(h===null)throw Error(o(387));if(h=h.memoizedProps,h!==null){var m=l.type;It(l.pendingProps.value,h.value)||(e!==null?e.push(m):e=[m])}}else if(l===Te.current){if(h=l.alternate,h===null)throw Error(o(387));h.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Yl):e=[Yl])}l=l.return}e!==null&&Ju(t,e,n,i),t.flags|=262144}function Mr(e){for(e=e.firstContext;e!==null;){if(!It(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){Ba=e,Yn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rt(e){return wd(Ba,e)}function Ur(e,t){return Ba===null&&Ha(e),wd(e,t)}function wd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yn===null){if(e===null)throw Error(o(308));Yn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yn=Yn.next=t;return n}var wg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Eg=a.unstable_scheduleCallback,Ag=a.unstable_NormalPriority,gt={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fu(){return{controller:new wg,data:new Map,refCount:0}}function pl(e){e.refCount--,e.refCount===0&&Eg(Ag,function(){e.controller.abort()})}var ml=null,Wu=0,yi=0,vi=null;function zg(e,t){if(ml===null){var n=ml=[];Wu=0,yi=ec(),vi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Wu++,t.then(Ed,Ed),t}function Ed(){if(--Wu===0&&ml!==null){vi!==null&&(vi.status="fulfilled");var e=ml;ml=null,yi=0,vi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Tg(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var Ad=D.S;D.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&zg(e,t),Ad!==null&&Ad(e,t)};var La=C(null);function Iu(){var e=La.current;return e!==null?e:Ie.pooledCache}function Br(e,t){t===null?F(La,La.current):F(La,t.pool)}function zd(){var e=Iu();return e===null?null:{parent:gt._currentValue,pool:e}}var gl=Error(o(460)),Td=Error(o(474)),Hr=Error(o(542)),Pu={then:function(){}};function jd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lr(){}function Od(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Lr,Lr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_d(e),e;default:if(typeof t.status=="string")t.then(Lr,Lr);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_d(e),e}throw xl=t,gl}}var xl=null;function Dd(){if(xl===null)throw Error(o(459));var e=xl;return xl=null,e}function _d(e){if(e===gl||e===Hr)throw Error(o(483))}var ia=!1;function eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function to(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ra(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,($e&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=Rr(e),gd(e,null,n),t}return _r(e,i,t,n),Rr(e)}function yl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Ef(e,n)}}function no(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?l=s=h:s=s.next=h,n=n.next}while(n!==null);s===null?l=s=t:s=s.next=t}else l=s=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ao=!1;function vl(){if(ao){var e=vi;if(e!==null)throw e}}function bl(e,t,n,i){ao=!1;var l=e.updateQueue;ia=!1;var s=l.firstBaseUpdate,h=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var v=m,_=v.next;v.next=null,h===null?s=_:h.next=_,h=v;var q=e.alternate;q!==null&&(q=q.updateQueue,m=q.lastBaseUpdate,m!==h&&(m===null?q.firstBaseUpdate=_:m.next=_,q.lastBaseUpdate=v))}if(s!==null){var X=l.baseState;h=0,q=_=v=null,m=s;do{var k=m.lane&-536870913,N=k!==m.lane;if(N?(Be&k)===k:(i&k)===k){k!==0&&k===yi&&(ao=!0),q!==null&&(q=q.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var ze=e,xe=m;k=t;var Fe=n;switch(xe.tag){case 1:if(ze=xe.payload,typeof ze=="function"){X=ze.call(Fe,X,k);break e}X=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=xe.payload,k=typeof ze=="function"?ze.call(Fe,X,k):ze,k==null)break e;X=b({},X,k);break e;case 2:ia=!0}}k=m.callback,k!==null&&(e.flags|=64,N&&(e.flags|=8192),N=l.callbacks,N===null?l.callbacks=[k]:N.push(k))}else N={lane:k,tag:m.tag,payload:m.payload,callback:m.callback,next:null},q===null?(_=q=N,v=X):q=q.next=N,h|=k;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;N=m,m=N.next,N.next=null,l.lastBaseUpdate=N,l.shared.pending=null}}while(!0);q===null&&(v=X),l.baseState=v,l.firstBaseUpdate=_,l.lastBaseUpdate=q,s===null&&(l.shared.lanes=0),pa|=h,e.lanes=h,e.memoizedState=X}}function Rd(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Cd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rd(n[e],t)}var bi=C(null),qr=C(0);function kd(e,t){e=Fn,F(qr,e),F(bi,t),Fn=e|t.baseLanes}function io(){F(qr,Fn),F(bi,bi.current)}function lo(){Fn=qr.current,I(bi),I(qr)}var sa=0,Re=null,Ke=null,ct=null,Vr=!1,Si=!1,qa=!1,Yr=0,Sl=0,wi=null,jg=0;function st(){throw Error(o(321))}function ro(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function so(e,t,n,i,l,s){return sa=s,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?g0:x0,qa=!1,s=n(i,l),qa=!1,Si&&(s=Md(t,n,i,l)),Nd(e),s}function Nd(e){D.H=Kr;var t=Ke!==null&&Ke.next!==null;if(sa=0,ct=Ke=Re=null,Vr=!1,Sl=0,wi=null,t)throw Error(o(300));e===null||vt||(e=e.dependencies,e!==null&&Mr(e)&&(vt=!0))}function Md(e,t,n,i){Re=e;var l=0;do{if(Si&&(wi=null),Sl=0,Si=!1,25<=l)throw Error(o(301));if(l+=1,ct=Ke=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}D.H=Ng,s=t(n,i)}while(Si);return s}function Og(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?wl(t):t,e=e.useState()[0],(Ke!==null?Ke.memoizedState:null)!==e&&(Re.flags|=1024),t}function uo(){var e=Yr!==0;return Yr=0,e}function oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function co(e){if(Vr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Vr=!1}sa=0,ct=Ke=Re=null,Si=!1,Sl=Yr=0,wi=null}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Re.memoizedState=ct=e:ct=ct.next=e,ct}function ft(){if(Ke===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=ct===null?Re.memoizedState:ct.next;if(t!==null)ct=t,Ke=e;else{if(e===null)throw Re.alternate===null?Error(o(467)):Error(o(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},ct===null?Re.memoizedState=ct=e:ct=ct.next=e}return ct}function fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wl(e){var t=Sl;return Sl+=1,wi===null&&(wi=[]),e=Od(wi,e,t),t=Re,(ct===null?t.memoizedState:ct.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?g0:x0),e}function Gr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wl(e);if(e.$$typeof===Z)return Rt(e)}throw Error(o(438,String(e)))}function ho(e){var t=null,n=Re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Re.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=fo(),Re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Ue;return t.index++,n}function Xn(e,t){return typeof t=="function"?t(e):t}function Xr(e){var t=ft();return po(t,Ke,e)}function po(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var l=e.baseQueue,s=i.pending;if(s!==null){if(l!==null){var h=l.next;l.next=s.next,s.next=h}t.baseQueue=l=s,i.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{t=l.next;var m=h=null,v=null,_=t,q=!1;do{var X=_.lane&-536870913;if(X!==_.lane?(Be&X)===X:(sa&X)===X){var k=_.revertLane;if(k===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),X===yi&&(q=!0);else if((sa&k)===k){_=_.next,k===yi&&(q=!0);continue}else X={lane:0,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},v===null?(m=v=X,h=s):v=v.next=X,Re.lanes|=k,pa|=k;X=_.action,qa&&n(s,X),s=_.hasEagerState?_.eagerState:n(s,X)}else k={lane:X,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},v===null?(m=v=k,h=s):v=v.next=k,Re.lanes|=X,pa|=X;_=_.next}while(_!==null&&_!==t);if(v===null?h=s:v.next=m,!It(s,e.memoizedState)&&(vt=!0,q&&(n=vi,n!==null)))throw n;e.memoizedState=s,e.baseState=h,e.baseQueue=v,i.lastRenderedState=s}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function mo(e){var t=ft(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,l=n.pending,s=t.memoizedState;if(l!==null){n.pending=null;var h=l=l.next;do s=e(s,h.action),h=h.next;while(h!==l);It(s,t.memoizedState)||(vt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Ud(e,t,n){var i=Re,l=ft(),s=Ge;if(s){if(n===void 0)throw Error(o(407));n=n()}else n=t();var h=!It((Ke||l).memoizedState,n);h&&(l.memoizedState=n,vt=!0),l=l.queue;var m=Ld.bind(null,i,l,e);if(El(2048,8,m,[e]),l.getSnapshot!==t||h||ct!==null&&ct.memoizedState.tag&1){if(i.flags|=2048,Ei(9,Zr(),Hd.bind(null,i,l,n,t),null),Ie===null)throw Error(o(349));s||(sa&124)!==0||Bd(i,t,n)}return n}function Bd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t=fo(),Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hd(e,t,n,i){t.value=n,t.getSnapshot=i,qd(t)&&Vd(e)}function Ld(e,t,n){return n(function(){qd(t)&&Vd(e)})}function qd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function Vd(e){var t=pi(e,2);t!==null&&ln(t,e,2)}function go(e){var t=Gt();if(typeof e=="function"){var n=e;if(e=n(),qa){je(!0);try{n()}finally{je(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t}function Yd(e,t,n,i){return e.baseState=n,po(e,Ke,typeof i=="function"?i:Xn)}function Dg(e,t,n,i,l){if(Qr(e))throw Error(o(485));if(e=t.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){s.listeners.push(h)}};D.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Gd(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Gd(e,t){var n=t.action,i=t.payload,l=e.state;if(t.isTransition){var s=D.T,h={};D.T=h;try{var m=n(l,i),v=D.S;v!==null&&v(h,m),Xd(e,t,m)}catch(_){xo(e,t,_)}finally{D.T=s}}else try{s=n(l,i),Xd(e,t,s)}catch(_){xo(e,t,_)}}function Xd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Zd(e,t,i)},function(i){return xo(e,t,i)}):Zd(e,t,n)}function Zd(e,t,n){t.status="fulfilled",t.value=n,$d(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Gd(e,n)))}function xo(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,$d(t),t=t.next;while(t!==i)}e.action=null}function $d(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qd(e,t){return t}function Kd(e,t){if(Ge){var n=Ie.formState;if(n!==null){e:{var i=Re;if(Ge){if(it){t:{for(var l=it,s=zn;l.nodeType!==8;){if(!s){l=null;break t}if(l=bn(l.nextSibling),l===null){l=null;break t}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){it=bn(l.nextSibling),i=l.data==="F!";break e}}Ua(i)}i=!1}i&&(t=n[0])}}return n=Gt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qd,lastRenderedState:t},n.queue=i,n=h0.bind(null,Re,i),i.dispatch=n,i=go(!1),s=wo.bind(null,Re,!1,i.queue),i=Gt(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,n=Dg.bind(null,Re,l,s,n),l.dispatch=n,i.memoizedState=e,[t,n,!1]}function Jd(e){var t=ft();return Fd(t,Ke,e)}function Fd(e,t,n){if(t=po(e,t,Qd)[0],e=Xr(Xn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=wl(t)}catch(h){throw h===gl?Hr:h}else i=t;t=ft();var l=t.queue,s=l.dispatch;return n!==t.memoizedState&&(Re.flags|=2048,Ei(9,Zr(),_g.bind(null,l,n),null)),[i,s,e]}function _g(e,t){e.action=t}function Wd(e){var t=ft(),n=Ke;if(n!==null)return Fd(t,n,e);ft(),t=t.memoizedState,n=ft();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ei(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Re.updateQueue,t===null&&(t=fo(),Re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Zr(){return{destroy:void 0,resource:void 0}}function Id(){return ft().memoizedState}function $r(e,t,n,i){var l=Gt();i=i===void 0?null:i,Re.flags|=e,l.memoizedState=Ei(1|t,Zr(),n,i)}function El(e,t,n,i){var l=ft();i=i===void 0?null:i;var s=l.memoizedState.inst;Ke!==null&&i!==null&&ro(i,Ke.memoizedState.deps)?l.memoizedState=Ei(t,s,n,i):(Re.flags|=e,l.memoizedState=Ei(1|t,s,n,i))}function Pd(e,t){$r(8390656,8,e,t)}function e0(e,t){El(2048,8,e,t)}function t0(e,t){return El(4,2,e,t)}function n0(e,t){return El(4,4,e,t)}function a0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function i0(e,t,n){n=n!=null?n.concat([e]):null,El(4,4,a0.bind(null,t,e),n)}function yo(){}function l0(e,t){var n=ft();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&ro(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function r0(e,t){var n=ft();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&ro(t,i[1]))return i[0];if(i=e(),qa){je(!0);try{e()}finally{je(!1)}}return n.memoizedState=[i,t],i}function vo(e,t,n){return n===void 0||(sa&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=o1(),Re.lanes|=e,pa|=e,n)}function s0(e,t,n,i){return It(n,t)?n:bi.current!==null?(e=vo(e,n,i),It(e,t)||(vt=!0),e):(sa&42)===0?(vt=!0,e.memoizedState=n):(e=o1(),Re.lanes|=e,pa|=e,t)}function u0(e,t,n,i,l){var s=Q.p;Q.p=s!==0&&8>s?s:8;var h=D.T,m={};D.T=m,wo(e,!1,t,n);try{var v=l(),_=D.S;if(_!==null&&_(m,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var q=Tg(v,i);Al(e,t,q,an(e))}else Al(e,t,i,an(e))}catch(X){Al(e,t,{then:function(){},status:"rejected",reason:X},an())}finally{Q.p=s,D.T=h}}function Rg(){}function bo(e,t,n,i){if(e.tag!==5)throw Error(o(476));var l=o0(e).queue;u0(e,l,t,ce,n===null?Rg:function(){return c0(e),n(i)})}function o0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function c0(e){var t=o0(e).next.queue;Al(e,t,{},an())}function So(){return Rt(Yl)}function f0(){return ft().memoizedState}function d0(){return ft().memoizedState}function Cg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=an();e=la(n);var i=ra(t,e,n);i!==null&&(ln(i,t,n),yl(i,t,n)),t={cache:Fu()},e.payload=t;return}t=t.return}}function kg(e,t,n){var i=an();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Qr(e)?p0(t,n):(n=qu(e,t,n,i),n!==null&&(ln(n,e,i),m0(n,t,i)))}function h0(e,t,n){var i=an();Al(e,t,n,i)}function Al(e,t,n,i){var l={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qr(e))p0(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var h=t.lastRenderedState,m=s(h,n);if(l.hasEagerState=!0,l.eagerState=m,It(m,h))return _r(e,t,l,0),Ie===null&&Dr(),!1}catch{}finally{}if(n=qu(e,t,l,i),n!==null)return ln(n,e,i),m0(n,t,i),!0}return!1}function wo(e,t,n,i){if(i={lane:2,revertLane:ec(),action:i,hasEagerState:!1,eagerState:null,next:null},Qr(e)){if(t)throw Error(o(479))}else t=qu(e,n,i,2),t!==null&&ln(t,e,2)}function Qr(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function p0(e,t){Si=Vr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function m0(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Ef(e,n)}}var Kr={readContext:Rt,use:Gr,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st},g0={readContext:Rt,use:Gr,useCallback:function(e,t){return Gt().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:Pd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,$r(4194308,4,a0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){$r(4,2,e,t)},useMemo:function(e,t){var n=Gt();t=t===void 0?null:t;var i=e();if(qa){je(!0);try{e()}finally{je(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Gt();if(n!==void 0){var l=n(t);if(qa){je(!0);try{n(t)}finally{je(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=kg.bind(null,Re,e),[i.memoizedState,e]},useRef:function(e){var t=Gt();return e={current:e},t.memoizedState=e},useState:function(e){e=go(e);var t=e.queue,n=h0.bind(null,Re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:yo,useDeferredValue:function(e,t){var n=Gt();return vo(n,e,t)},useTransition:function(){var e=go(!1);return e=u0.bind(null,Re,e.queue,!0,!1),Gt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Re,l=Gt();if(Ge){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ie===null)throw Error(o(349));(Be&124)!==0||Bd(i,t,n)}l.memoizedState=n;var s={value:n,getSnapshot:t};return l.queue=s,Pd(Ld.bind(null,i,s,e),[e]),i.flags|=2048,Ei(9,Zr(),Hd.bind(null,i,s,n,t),null),n},useId:function(){var e=Gt(),t=Ie.identifierPrefix;if(Ge){var n=Vn,i=qn;n=(i&~(1<<32-Ze(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=Yr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=jg++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:So,useFormState:Kd,useActionState:Kd,useOptimistic:function(e){var t=Gt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wo.bind(null,Re,!0,n),n.dispatch=t,[e,t]},useMemoCache:ho,useCacheRefresh:function(){return Gt().memoizedState=Cg.bind(null,Re)}},x0={readContext:Rt,use:Gr,useCallback:l0,useContext:Rt,useEffect:e0,useImperativeHandle:i0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:r0,useReducer:Xr,useRef:Id,useState:function(){return Xr(Xn)},useDebugValue:yo,useDeferredValue:function(e,t){var n=ft();return s0(n,Ke.memoizedState,e,t)},useTransition:function(){var e=Xr(Xn)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:wl(e),t]},useSyncExternalStore:Ud,useId:f0,useHostTransitionStatus:So,useFormState:Jd,useActionState:Jd,useOptimistic:function(e,t){var n=ft();return Yd(n,Ke,e,t)},useMemoCache:ho,useCacheRefresh:d0},Ng={readContext:Rt,use:Gr,useCallback:l0,useContext:Rt,useEffect:e0,useImperativeHandle:i0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:r0,useReducer:mo,useRef:Id,useState:function(){return mo(Xn)},useDebugValue:yo,useDeferredValue:function(e,t){var n=ft();return Ke===null?vo(n,e,t):s0(n,Ke.memoizedState,e,t)},useTransition:function(){var e=mo(Xn)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:wl(e),t]},useSyncExternalStore:Ud,useId:f0,useHostTransitionStatus:So,useFormState:Wd,useActionState:Wd,useOptimistic:function(e,t){var n=ft();return Ke!==null?Yd(n,Ke,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ho,useCacheRefresh:d0},Ai=null,zl=0;function Jr(e){var t=zl;return zl+=1,Ai===null&&(Ai=[]),Od(Ai,e,t)}function Tl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fr(e,t){throw t.$$typeof===E?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function y0(e){var t=e._init;return t(e._payload)}function v0(e){function t(T,z){if(e){var O=T.deletions;O===null?(T.deletions=[z],T.flags|=16):O.push(z)}}function n(T,z){if(!e)return null;for(;z!==null;)t(T,z),z=z.sibling;return null}function i(T){for(var z=new Map;T!==null;)T.key!==null?z.set(T.key,T):z.set(T.index,T),T=T.sibling;return z}function l(T,z){return T=Ln(T,z),T.index=0,T.sibling=null,T}function s(T,z,O){return T.index=O,e?(O=T.alternate,O!==null?(O=O.index,O<z?(T.flags|=67108866,z):O):(T.flags|=67108866,z)):(T.flags|=1048576,z)}function h(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function m(T,z,O,Y){return z===null||z.tag!==6?(z=Yu(O,T.mode,Y),z.return=T,z):(z=l(z,O),z.return=T,z)}function v(T,z,O,Y){var de=O.type;return de===M?q(T,z,O.props.children,Y,O.key):z!==null&&(z.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===re&&y0(de)===z.type)?(z=l(z,O.props),Tl(z,O),z.return=T,z):(z=Cr(O.type,O.key,O.props,null,T.mode,Y),Tl(z,O),z.return=T,z)}function _(T,z,O,Y){return z===null||z.tag!==4||z.stateNode.containerInfo!==O.containerInfo||z.stateNode.implementation!==O.implementation?(z=Gu(O,T.mode,Y),z.return=T,z):(z=l(z,O.children||[]),z.return=T,z)}function q(T,z,O,Y,de){return z===null||z.tag!==7?(z=Ca(O,T.mode,Y,de),z.return=T,z):(z=l(z,O),z.return=T,z)}function X(T,z,O){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Yu(""+z,T.mode,O),z.return=T,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case A:return O=Cr(z.type,z.key,z.props,null,T.mode,O),Tl(O,z),O.return=T,O;case K:return z=Gu(z,T.mode,O),z.return=T,z;case re:var Y=z._init;return z=Y(z._payload),X(T,z,O)}if(me(z)||W(z))return z=Ca(z,T.mode,O,null),z.return=T,z;if(typeof z.then=="function")return X(T,Jr(z),O);if(z.$$typeof===Z)return X(T,Ur(T,z),O);Fr(T,z)}return null}function k(T,z,O,Y){var de=z!==null?z.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return de!==null?null:m(T,z,""+O,Y);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case A:return O.key===de?v(T,z,O,Y):null;case K:return O.key===de?_(T,z,O,Y):null;case re:return de=O._init,O=de(O._payload),k(T,z,O,Y)}if(me(O)||W(O))return de!==null?null:q(T,z,O,Y,null);if(typeof O.then=="function")return k(T,z,Jr(O),Y);if(O.$$typeof===Z)return k(T,z,Ur(T,O),Y);Fr(T,O)}return null}function N(T,z,O,Y,de){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return T=T.get(O)||null,m(z,T,""+Y,de);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case A:return T=T.get(Y.key===null?O:Y.key)||null,v(z,T,Y,de);case K:return T=T.get(Y.key===null?O:Y.key)||null,_(z,T,Y,de);case re:var ke=Y._init;return Y=ke(Y._payload),N(T,z,O,Y,de)}if(me(Y)||W(Y))return T=T.get(O)||null,q(z,T,Y,de,null);if(typeof Y.then=="function")return N(T,z,O,Jr(Y),de);if(Y.$$typeof===Z)return N(T,z,O,Ur(z,Y),de);Fr(z,Y)}return null}function ze(T,z,O,Y){for(var de=null,ke=null,pe=z,ve=z=0,St=null;pe!==null&&ve<O.length;ve++){pe.index>ve?(St=pe,pe=null):St=pe.sibling;var Ve=k(T,pe,O[ve],Y);if(Ve===null){pe===null&&(pe=St);break}e&&pe&&Ve.alternate===null&&t(T,pe),z=s(Ve,z,ve),ke===null?de=Ve:ke.sibling=Ve,ke=Ve,pe=St}if(ve===O.length)return n(T,pe),Ge&&Na(T,ve),de;if(pe===null){for(;ve<O.length;ve++)pe=X(T,O[ve],Y),pe!==null&&(z=s(pe,z,ve),ke===null?de=pe:ke.sibling=pe,ke=pe);return Ge&&Na(T,ve),de}for(pe=i(pe);ve<O.length;ve++)St=N(pe,T,ve,O[ve],Y),St!==null&&(e&&St.alternate!==null&&pe.delete(St.key===null?ve:St.key),z=s(St,z,ve),ke===null?de=St:ke.sibling=St,ke=St);return e&&pe.forEach(function(Ea){return t(T,Ea)}),Ge&&Na(T,ve),de}function xe(T,z,O,Y){if(O==null)throw Error(o(151));for(var de=null,ke=null,pe=z,ve=z=0,St=null,Ve=O.next();pe!==null&&!Ve.done;ve++,Ve=O.next()){pe.index>ve?(St=pe,pe=null):St=pe.sibling;var Ea=k(T,pe,Ve.value,Y);if(Ea===null){pe===null&&(pe=St);break}e&&pe&&Ea.alternate===null&&t(T,pe),z=s(Ea,z,ve),ke===null?de=Ea:ke.sibling=Ea,ke=Ea,pe=St}if(Ve.done)return n(T,pe),Ge&&Na(T,ve),de;if(pe===null){for(;!Ve.done;ve++,Ve=O.next())Ve=X(T,Ve.value,Y),Ve!==null&&(z=s(Ve,z,ve),ke===null?de=Ve:ke.sibling=Ve,ke=Ve);return Ge&&Na(T,ve),de}for(pe=i(pe);!Ve.done;ve++,Ve=O.next())Ve=N(pe,T,ve,Ve.value,Y),Ve!==null&&(e&&Ve.alternate!==null&&pe.delete(Ve.key===null?ve:Ve.key),z=s(Ve,z,ve),ke===null?de=Ve:ke.sibling=Ve,ke=Ve);return e&&pe.forEach(function(Mx){return t(T,Mx)}),Ge&&Na(T,ve),de}function Fe(T,z,O,Y){if(typeof O=="object"&&O!==null&&O.type===M&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case A:e:{for(var de=O.key;z!==null;){if(z.key===de){if(de=O.type,de===M){if(z.tag===7){n(T,z.sibling),Y=l(z,O.props.children),Y.return=T,T=Y;break e}}else if(z.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===re&&y0(de)===z.type){n(T,z.sibling),Y=l(z,O.props),Tl(Y,O),Y.return=T,T=Y;break e}n(T,z);break}else t(T,z);z=z.sibling}O.type===M?(Y=Ca(O.props.children,T.mode,Y,O.key),Y.return=T,T=Y):(Y=Cr(O.type,O.key,O.props,null,T.mode,Y),Tl(Y,O),Y.return=T,T=Y)}return h(T);case K:e:{for(de=O.key;z!==null;){if(z.key===de)if(z.tag===4&&z.stateNode.containerInfo===O.containerInfo&&z.stateNode.implementation===O.implementation){n(T,z.sibling),Y=l(z,O.children||[]),Y.return=T,T=Y;break e}else{n(T,z);break}else t(T,z);z=z.sibling}Y=Gu(O,T.mode,Y),Y.return=T,T=Y}return h(T);case re:return de=O._init,O=de(O._payload),Fe(T,z,O,Y)}if(me(O))return ze(T,z,O,Y);if(W(O)){if(de=W(O),typeof de!="function")throw Error(o(150));return O=de.call(O),xe(T,z,O,Y)}if(typeof O.then=="function")return Fe(T,z,Jr(O),Y);if(O.$$typeof===Z)return Fe(T,z,Ur(T,O),Y);Fr(T,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,z!==null&&z.tag===6?(n(T,z.sibling),Y=l(z,O),Y.return=T,T=Y):(n(T,z),Y=Yu(O,T.mode,Y),Y.return=T,T=Y),h(T)):n(T,z)}return function(T,z,O,Y){try{zl=0;var de=Fe(T,z,O,Y);return Ai=null,de}catch(pe){if(pe===gl||pe===Hr)throw pe;var ke=Pt(29,pe,null,T.mode);return ke.lanes=Y,ke.return=T,ke}finally{}}}var zi=v0(!0),b0=v0(!1),hn=C(null),Tn=null;function ua(e){var t=e.alternate;F(xt,xt.current&1),F(hn,e),Tn===null&&(t===null||bi.current!==null||t.memoizedState!==null)&&(Tn=e)}function S0(e){if(e.tag===22){if(F(xt,xt.current),F(hn,e),Tn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Tn=e)}}else oa()}function oa(){F(xt,xt.current),F(hn,hn.current)}function Zn(e){I(hn),Tn===e&&(Tn=null),I(xt)}var xt=C(0);function Wr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||dc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Eo(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ao={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=an(),l=la(i);l.payload=t,n!=null&&(l.callback=n),t=ra(e,l,i),t!==null&&(ln(t,e,i),yl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=an(),l=la(i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ra(e,l,i),t!==null&&(ln(t,e,i),yl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=an(),i=la(n);i.tag=2,t!=null&&(i.callback=t),t=ra(e,i,n),t!==null&&(ln(t,e,n),yl(t,e,n))}};function w0(e,t,n,i,l,s,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,h):t.prototype&&t.prototype.isPureReactComponent?!ul(n,i)||!ul(l,s):!0}function E0(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function Va(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=b({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var Ir=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function A0(e){Ir(e)}function z0(e){console.error(e)}function T0(e){Ir(e)}function Pr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function j0(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function zo(e,t,n){return n=la(n),n.tag=3,n.payload={element:null},n.callback=function(){Pr(e,t)},n}function O0(e){return e=la(e),e.tag=3,e}function D0(e,t,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var s=i.value;e.payload=function(){return l(s)},e.callback=function(){j0(t,n,i)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){j0(t,n,i),typeof l!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})})}function Mg(e,t,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&hl(t,n,l,!0),n=hn.current,n!==null){switch(n.tag){case 13:return Tn===null?Jo():n.alternate===null&&lt===0&&(lt=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===Pu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Wo(e,i,l)),!1;case 22:return n.flags|=65536,i===Pu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Wo(e,i,l)),!1}throw Error(o(435,n.tag))}return Wo(e,i,l),Jo(),!1}if(Ge)return t=hn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==$u&&(e=Error(o(422),{cause:i}),dl(on(e,n)))):(i!==$u&&(t=Error(o(423),{cause:i}),dl(on(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=on(i,n),l=zo(e.stateNode,i,l),no(e,l),lt!==4&&(lt=2)),!1;var s=Error(o(520),{cause:i});if(s=on(s,n),kl===null?kl=[s]:kl.push(s),lt!==4&&(lt=2),t===null)return!0;i=on(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=zo(n.stateNode,i,e),no(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ma===null||!ma.has(s))))return n.flags|=65536,l&=-l,n.lanes|=l,l=O0(l),D0(l,e,n,i),no(n,l),!1}n=n.return}while(n!==null);return!1}var _0=Error(o(461)),vt=!1;function Tt(e,t,n,i){t.child=e===null?b0(t,null,n,i):zi(t,e.child,n,i)}function R0(e,t,n,i,l){n=n.render;var s=t.ref;if("ref"in i){var h={};for(var m in i)m!=="ref"&&(h[m]=i[m])}else h=i;return Ha(t),i=so(e,t,n,h,s,l),m=uo(),e!==null&&!vt?(oo(e,t,l),$n(e,t,l)):(Ge&&m&&Xu(t),t.flags|=1,Tt(e,t,i,l),t.child)}function C0(e,t,n,i,l){if(e===null){var s=n.type;return typeof s=="function"&&!Vu(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,k0(e,t,s,i,l)):(e=Cr(n.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!ko(e,l)){var h=s.memoizedProps;if(n=n.compare,n=n!==null?n:ul,n(h,i)&&e.ref===t.ref)return $n(e,t,l)}return t.flags|=1,e=Ln(s,i),e.ref=t.ref,e.return=t,t.child=e}function k0(e,t,n,i,l){if(e!==null){var s=e.memoizedProps;if(ul(s,i)&&e.ref===t.ref)if(vt=!1,t.pendingProps=i=s,ko(e,l))(e.flags&131072)!==0&&(vt=!0);else return t.lanes=e.lanes,$n(e,t,l)}return To(e,t,n,i,l)}function N0(e,t,n){var i=t.pendingProps,l=i.children,s=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=s!==null?s.baseLanes|n:n,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;t.childLanes=s&~i}else t.childLanes=0,t.child=null;return M0(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Br(t,s!==null?s.cachePool:null),s!==null?kd(t,s):io(),S0(t);else return t.lanes=t.childLanes=536870912,M0(e,t,s!==null?s.baseLanes|n:n,n)}else s!==null?(Br(t,s.cachePool),kd(t,s),oa(),t.memoizedState=null):(e!==null&&Br(t,null),io(),oa());return Tt(e,t,l,n),t.child}function M0(e,t,n,i){var l=Iu();return l=l===null?null:{parent:gt._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Br(t,null),io(),S0(t),e!==null&&hl(e,t,i,!0),null}function es(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function To(e,t,n,i,l){return Ha(t),n=so(e,t,n,i,void 0,l),i=uo(),e!==null&&!vt?(oo(e,t,l),$n(e,t,l)):(Ge&&i&&Xu(t),t.flags|=1,Tt(e,t,n,l),t.child)}function U0(e,t,n,i,l,s){return Ha(t),t.updateQueue=null,n=Md(t,i,n,l),Nd(e),i=uo(),e!==null&&!vt?(oo(e,t,s),$n(e,t,s)):(Ge&&i&&Xu(t),t.flags|=1,Tt(e,t,n,s),t.child)}function B0(e,t,n,i,l){if(Ha(t),t.stateNode===null){var s=mi,h=n.contextType;typeof h=="object"&&h!==null&&(s=Rt(h)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ao,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},eo(t),h=n.contextType,s.context=typeof h=="object"&&h!==null?Rt(h):mi,s.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Eo(t,n,h,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(h=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),h!==s.state&&Ao.enqueueReplaceState(s,s.state,null),bl(t,i,s,l),vl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,v=Va(n,m);s.props=v;var _=s.context,q=n.contextType;h=mi,typeof q=="object"&&q!==null&&(h=Rt(q));var X=n.getDerivedStateFromProps;q=typeof X=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,q||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||_!==h)&&E0(t,s,i,h),ia=!1;var k=t.memoizedState;s.state=k,bl(t,i,s,l),vl(),_=t.memoizedState,m||k!==_||ia?(typeof X=="function"&&(Eo(t,n,X,i),_=t.memoizedState),(v=ia||w0(t,n,v,i,k,_,h))?(q||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=_),s.props=i,s.state=_,s.context=h,i=v):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,to(e,t),h=t.memoizedProps,q=Va(n,h),s.props=q,X=t.pendingProps,k=s.context,_=n.contextType,v=mi,typeof _=="object"&&_!==null&&(v=Rt(_)),m=n.getDerivedStateFromProps,(_=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(h!==X||k!==v)&&E0(t,s,i,v),ia=!1,k=t.memoizedState,s.state=k,bl(t,i,s,l),vl();var N=t.memoizedState;h!==X||k!==N||ia||e!==null&&e.dependencies!==null&&Mr(e.dependencies)?(typeof m=="function"&&(Eo(t,n,m,i),N=t.memoizedState),(q=ia||w0(t,n,q,i,k,N,v)||e!==null&&e.dependencies!==null&&Mr(e.dependencies))?(_||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,N,v),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,N,v)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=N),s.props=i,s.state=N,s.context=v,i=q):(typeof s.componentDidUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,es(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=zi(t,e.child,null,l),t.child=zi(t,null,n,l)):Tt(e,t,n,l),t.memoizedState=s.state,e=t.child):e=$n(e,t,l),e}function H0(e,t,n,i){return fl(),t.flags|=256,Tt(e,t,n,i),t.child}var jo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oo(e){return{baseLanes:e,cachePool:zd()}}function Do(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=pn),e}function L0(e,t,n){var i=t.pendingProps,l=!1,s=(t.flags&128)!==0,h;if((h=s)||(h=e!==null&&e.memoizedState===null?!1:(xt.current&2)!==0),h&&(l=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ge){if(l?ua(t):oa(),Ge){var m=it,v;if(v=m){e:{for(v=m,m=zn;v.nodeType!==8;){if(!m){m=null;break e}if(v=bn(v.nextSibling),v===null){m=null;break e}}m=v}m!==null?(t.memoizedState={dehydrated:m,treeContext:ka!==null?{id:qn,overflow:Vn}:null,retryLane:536870912,hydrationErrors:null},v=Pt(18,null,null,0),v.stateNode=m,v.return=t,t.child=v,Ht=t,it=null,v=!0):v=!1}v||Ua(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return dc(m)?t.lanes=32:t.lanes=536870912,null;Zn(t)}return m=i.children,i=i.fallback,l?(oa(),l=t.mode,m=ts({mode:"hidden",children:m},l),i=Ca(i,l,n,null),m.return=t,i.return=t,m.sibling=i,t.child=m,l=t.child,l.memoizedState=Oo(n),l.childLanes=Do(e,h,n),t.memoizedState=jo,i):(ua(t),_o(t,m))}if(v=e.memoizedState,v!==null&&(m=v.dehydrated,m!==null)){if(s)t.flags&256?(ua(t),t.flags&=-257,t=Ro(e,t,n)):t.memoizedState!==null?(oa(),t.child=e.child,t.flags|=128,t=null):(oa(),l=i.fallback,m=t.mode,i=ts({mode:"visible",children:i.children},m),l=Ca(l,m,n,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,zi(t,e.child,null,n),i=t.child,i.memoizedState=Oo(n),i.childLanes=Do(e,h,n),t.memoizedState=jo,t=l);else if(ua(t),dc(m)){if(h=m.nextSibling&&m.nextSibling.dataset,h)var _=h.dgst;h=_,i=Error(o(419)),i.stack="",i.digest=h,dl({value:i,source:null,stack:null}),t=Ro(e,t,n)}else if(vt||hl(e,t,n,!1),h=(n&e.childLanes)!==0,vt||h){if(h=Ie,h!==null&&(i=n&-n,i=(i&42)!==0?1:du(i),i=(i&(h.suspendedLanes|n))!==0?0:i,i!==0&&i!==v.retryLane))throw v.retryLane=i,pi(e,i),ln(h,e,i),_0;m.data==="$?"||Jo(),t=Ro(e,t,n)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,it=bn(m.nextSibling),Ht=t,Ge=!0,Ma=null,zn=!1,e!==null&&(fn[dn++]=qn,fn[dn++]=Vn,fn[dn++]=ka,qn=e.id,Vn=e.overflow,ka=t),t=_o(t,i.children),t.flags|=4096);return t}return l?(oa(),l=i.fallback,m=t.mode,v=e.child,_=v.sibling,i=Ln(v,{mode:"hidden",children:i.children}),i.subtreeFlags=v.subtreeFlags&65011712,_!==null?l=Ln(_,l):(l=Ca(l,m,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,m=e.child.memoizedState,m===null?m=Oo(n):(v=m.cachePool,v!==null?(_=gt._currentValue,v=v.parent!==_?{parent:_,pool:_}:v):v=zd(),m={baseLanes:m.baseLanes|n,cachePool:v}),l.memoizedState=m,l.childLanes=Do(e,h,n),t.memoizedState=jo,i):(ua(t),n=e.child,e=n.sibling,n=Ln(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function _o(e,t){return t=ts({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ts(e,t){return e=Pt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ro(e,t,n){return zi(t,e.child,null,n),e=_o(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function q0(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ku(e.return,t,n)}function Co(e,t,n,i,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=l)}function V0(e,t,n){var i=t.pendingProps,l=i.revealOrder,s=i.tail;if(Tt(e,t,i.children,n),i=xt.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&q0(e,n,t);else if(e.tag===19)q0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(F(xt,i),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Wr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Co(t,!1,l,n,s);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Wr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Co(t,!0,n,null,s);break;case"together":Co(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $n(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(hl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ko(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Mr(e)))}function Ug(e,t,n){switch(t.tag){case 3:Se(t,t.stateNode.containerInfo),aa(t,gt,e.memoizedState.cache),fl();break;case 27:case 5:Dt(t);break;case 4:Se(t,t.stateNode.containerInfo);break;case 10:aa(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ua(t),t.flags|=128,null):(n&t.child.childLanes)!==0?L0(e,t,n):(ua(t),e=$n(e,t,n),e!==null?e.sibling:null);ua(t);break;case 19:var l=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(hl(e,t,n,!1),i=(n&t.childLanes)!==0),l){if(i)return V0(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F(xt,xt.current),i)break;return null;case 22:case 23:return t.lanes=0,N0(e,t,n);case 24:aa(t,gt,e.memoizedState.cache)}return $n(e,t,n)}function Y0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)vt=!0;else{if(!ko(e,n)&&(t.flags&128)===0)return vt=!1,Ug(e,t,n);vt=(e.flags&131072)!==0}else vt=!1,Ge&&(t.flags&1048576)!==0&&yd(t,Nr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,l=i._init;if(i=l(i._payload),t.type=i,typeof i=="function")Vu(i)?(e=Va(i,e),t.tag=1,t=B0(null,t,i,e,n)):(t.tag=0,t=To(null,t,i,e,n));else{if(i!=null){if(l=i.$$typeof,l===le){t.tag=11,t=R0(null,t,i,e,n);break e}else if(l===$){t.tag=14,t=C0(null,t,i,e,n);break e}}throw t=ye(i)||i,Error(o(306,t,""))}}return t;case 0:return To(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,l=Va(i,t.pendingProps),B0(e,t,i,l,n);case 3:e:{if(Se(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var s=t.memoizedState;l=s.element,to(e,t),bl(t,i,null,n);var h=t.memoizedState;if(i=h.cache,aa(t,gt,i),i!==s.cache&&Ju(t,[gt],n,!0),vl(),i=h.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=H0(e,t,i,n);break e}else if(i!==l){l=on(Error(o(424)),t),dl(l),t=H0(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(it=bn(e.firstChild),Ht=t,Ge=!0,Ma=null,zn=!0,n=b0(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(fl(),i===l){t=$n(e,t,n);break e}Tt(e,t,i,n)}t=t.child}return t;case 26:return es(e,t),e===null?(n=$1(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ge||(n=t.type,e=t.pendingProps,i=ms(ue.current).createElement(n),i[_t]=t,i[Vt]=e,Ot(i,n,e),yt(i),t.stateNode=i):t.memoizedState=$1(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Dt(t),e===null&&Ge&&(i=t.stateNode=G1(t.type,t.pendingProps,ue.current),Ht=t,zn=!0,l=it,ya(t.type)?(hc=l,it=bn(i.firstChild)):it=l),Tt(e,t,t.pendingProps.children,n),es(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ge&&((l=i=it)&&(i=cx(i,t.type,t.pendingProps,zn),i!==null?(t.stateNode=i,Ht=t,it=bn(i.firstChild),zn=!1,l=!0):l=!1),l||Ua(t)),Dt(t),l=t.type,s=t.pendingProps,h=e!==null?e.memoizedProps:null,i=s.children,oc(l,s)?i=null:h!==null&&oc(l,h)&&(t.flags|=32),t.memoizedState!==null&&(l=so(e,t,Og,null,null,n),Yl._currentValue=l),es(e,t),Tt(e,t,i,n),t.child;case 6:return e===null&&Ge&&((e=n=it)&&(n=fx(n,t.pendingProps,zn),n!==null?(t.stateNode=n,Ht=t,it=null,e=!0):e=!1),e||Ua(t)),null;case 13:return L0(e,t,n);case 4:return Se(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=zi(t,null,i,n):Tt(e,t,i,n),t.child;case 11:return R0(e,t,t.type,t.pendingProps,n);case 7:return Tt(e,t,t.pendingProps,n),t.child;case 8:return Tt(e,t,t.pendingProps.children,n),t.child;case 12:return Tt(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,aa(t,t.type,i.value),Tt(e,t,i.children,n),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,Ha(t),l=Rt(l),i=i(l),t.flags|=1,Tt(e,t,i,n),t.child;case 14:return C0(e,t,t.type,t.pendingProps,n);case 15:return k0(e,t,t.type,t.pendingProps,n);case 19:return V0(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=ts(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Ln(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return N0(e,t,n);case 24:return Ha(t),i=Rt(gt),e===null?(l=Iu(),l===null&&(l=Ie,s=Fu(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=n),l=s),t.memoizedState={parent:i,cache:l},eo(t),aa(t,gt,l)):((e.lanes&n)!==0&&(to(e,t),bl(t,null,null,n),vl()),l=e.memoizedState,s=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),aa(t,gt,i)):(i=s.cache,aa(t,gt,i),i!==l.cache&&Ju(t,[gt],n,!0))),Tt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Qn(e){e.flags|=4}function G0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!W1(t)){if(t=hn.current,t!==null&&((Be&4194048)===Be?Tn!==null:(Be&62914560)!==Be&&(Be&536870912)===0||t!==Tn))throw xl=Pu,Td;e.flags|=8192}}function ns(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?xr():536870912,e.lanes|=t,Di|=t)}function jl(e,t){if(!Ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Bg(e,t,n){var i=t.pendingProps;switch(Zu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return at(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Gn(gt),qe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(cl(t)?Qn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Sd())),at(t),null;case 26:return n=t.memoizedState,e===null?(Qn(t),n!==null?(at(t),G0(t,n)):(at(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Qn(t),at(t),G0(t,n)):(at(t),t.flags&=-16777217):(e.memoizedProps!==i&&Qn(t),at(t),t.flags&=-16777217),null;case 27:Nt(t),n=ue.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Qn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return at(t),null}e=fe.current,cl(t)?vd(t):(e=G1(l,i,n),t.stateNode=e,Qn(t))}return at(t),null;case 5:if(Nt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Qn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return at(t),null}if(e=fe.current,cl(t))vd(t);else{switch(l=ms(ue.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?l.createElement(n,{is:i.is}):l.createElement(n)}}e[_t]=t,e[Vt]=i;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Ot(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Qn(t)}}return at(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Qn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=ue.current,cl(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,l=Ht,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||U1(e.nodeValue,n)),e||Ua(t)}else e=ms(e).createTextNode(i),e[_t]=t,t.stateNode=e}return at(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=cl(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(o(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[_t]=t}else fl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),l=!1}else l=Sd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Zn(t),t):(Zn(t),null)}if(Zn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool);var s=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==l&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ns(t,t.updateQueue),at(t),null;case 4:return qe(),e===null&&ic(t.stateNode.containerInfo),at(t),null;case 10:return Gn(t.type),at(t),null;case 19:if(I(xt),l=t.memoizedState,l===null)return at(t),null;if(i=(t.flags&128)!==0,s=l.rendering,s===null)if(i)jl(l,!1);else{if(lt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Wr(e),s!==null){for(t.flags|=128,jl(l,!1),e=s.updateQueue,t.updateQueue=e,ns(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)xd(n,e),n=n.sibling;return F(xt,xt.current&1|2),t.child}e=e.sibling}l.tail!==null&&nt()>ls&&(t.flags|=128,i=!0,jl(l,!1),t.lanes=4194304)}else{if(!i)if(e=Wr(s),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ns(t,e),jl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!Ge)return at(t),null}else 2*nt()-l.renderingStartTime>ls&&n!==536870912&&(t.flags|=128,i=!0,jl(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(e=l.last,e!==null?e.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=nt(),t.sibling=null,e=xt.current,F(xt,i?e&1|2:e&1),t):(at(t),null);case 22:case 23:return Zn(t),lo(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),n=t.updateQueue,n!==null&&ns(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&I(La),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Gn(gt),at(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Hg(e,t){switch(Zu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(gt),qe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Nt(t),null;case 13:if(Zn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));fl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return I(xt),null;case 4:return qe(),null;case 10:return Gn(t.type),null;case 22:case 23:return Zn(t),lo(),e!==null&&I(La),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gn(gt),null;case 25:return null;default:return null}}function X0(e,t){switch(Zu(t),t.tag){case 3:Gn(gt),qe();break;case 26:case 27:case 5:Nt(t);break;case 4:qe();break;case 13:Zn(t);break;case 19:I(xt);break;case 10:Gn(t.type);break;case 22:case 23:Zn(t),lo(),e!==null&&I(La);break;case 24:Gn(gt)}}function Ol(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){i=void 0;var s=n.create,h=n.inst;i=s(),h.destroy=i}n=n.next}while(n!==l)}}catch(m){We(t,t.return,m)}}function ca(e,t,n){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var s=l.next;i=s;do{if((i.tag&e)===e){var h=i.inst,m=h.destroy;if(m!==void 0){h.destroy=void 0,l=t;var v=n,_=m;try{_()}catch(q){We(l,v,q)}}}i=i.next}while(i!==s)}}catch(q){We(t,t.return,q)}}function Z0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Cd(t,n)}catch(i){We(e,e.return,i)}}}function $0(e,t,n){n.props=Va(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){We(e,t,i)}}function Dl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(l){We(e,t,l)}}function jn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){We(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){We(e,t,l)}else n.current=null}function Q0(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){We(e,e.return,l)}}function No(e,t,n){try{var i=e.stateNode;lx(i,e.type,n,t),i[Vt]=t}catch(l){We(e,e.return,l)}}function K0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function Mo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||K0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uo(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ps));else if(i!==4&&(i===27&&ya(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Uo(e,t,n),e=e.sibling;e!==null;)Uo(e,t,n),e=e.sibling}function as(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ya(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(as(e,t,n),e=e.sibling;e!==null;)as(e,t,n),e=e.sibling}function J0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ot(t,i,n),t[_t]=e,t[Vt]=n}catch(s){We(e,e.return,s)}}var Kn=!1,ut=!1,Bo=!1,F0=typeof WeakSet=="function"?WeakSet:Set,bt=null;function Lg(e,t){if(e=e.containerInfo,sc=Ss,e=sd(e),Nu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var h=0,m=-1,v=-1,_=0,q=0,X=e,k=null;t:for(;;){for(var N;X!==n||l!==0&&X.nodeType!==3||(m=h+l),X!==s||i!==0&&X.nodeType!==3||(v=h+i),X.nodeType===3&&(h+=X.nodeValue.length),(N=X.firstChild)!==null;)k=X,X=N;for(;;){if(X===e)break t;if(k===n&&++_===l&&(m=h),k===s&&++q===i&&(v=h),(N=X.nextSibling)!==null)break;X=k,k=X.parentNode}X=N}n=m===-1||v===-1?null:{start:m,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(uc={focusedElem:e,selectionRange:n},Ss=!1,bt=t;bt!==null;)if(t=bt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,bt=e;else for(;bt!==null;){switch(t=bt,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,l=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var ze=Va(n.type,l,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(ze,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(xe){We(n,n.return,xe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)fc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,bt=e;break}bt=t.return}}function W0(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:fa(e,n),i&4&&Ol(5,n);break;case 1:if(fa(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){We(n,n.return,h)}else{var l=Va(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){We(n,n.return,h)}}i&64&&Z0(n),i&512&&Dl(n,n.return);break;case 3:if(fa(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Cd(e,t)}catch(h){We(n,n.return,h)}}break;case 27:t===null&&i&4&&J0(n);case 26:case 5:fa(e,n),t===null&&i&4&&Q0(n),i&512&&Dl(n,n.return);break;case 12:fa(e,n);break;case 13:fa(e,n),i&4&&e1(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Kg.bind(null,n),dx(e,n))));break;case 22:if(i=n.memoizedState!==null||Kn,!i){t=t!==null&&t.memoizedState!==null||ut,l=Kn;var s=ut;Kn=i,(ut=t)&&!s?da(e,n,(n.subtreeFlags&8772)!==0):fa(e,n),Kn=l,ut=s}break;case 30:break;default:fa(e,n)}}function I0(e){var t=e.alternate;t!==null&&(e.alternate=null,I0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&mu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var et=null,Xt=!1;function Jn(e,t,n){for(n=n.child;n!==null;)P0(e,t,n),n=n.sibling}function P0(e,t,n){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(oe,n)}catch{}switch(n.tag){case 26:ut||jn(n,t),Jn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ut||jn(n,t);var i=et,l=Xt;ya(n.type)&&(et=n.stateNode,Xt=!1),Jn(e,t,n),Hl(n.stateNode),et=i,Xt=l;break;case 5:ut||jn(n,t);case 6:if(i=et,l=Xt,et=null,Jn(e,t,n),et=i,Xt=l,et!==null)if(Xt)try{(et.nodeType===9?et.body:et.nodeName==="HTML"?et.ownerDocument.body:et).removeChild(n.stateNode)}catch(s){We(n,t,s)}else try{et.removeChild(n.stateNode)}catch(s){We(n,t,s)}break;case 18:et!==null&&(Xt?(e=et,V1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),$l(e)):V1(et,n.stateNode));break;case 4:i=et,l=Xt,et=n.stateNode.containerInfo,Xt=!0,Jn(e,t,n),et=i,Xt=l;break;case 0:case 11:case 14:case 15:ut||ca(2,n,t),ut||ca(4,n,t),Jn(e,t,n);break;case 1:ut||(jn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&$0(n,t,i)),Jn(e,t,n);break;case 21:Jn(e,t,n);break;case 22:ut=(i=ut)||n.memoizedState!==null,Jn(e,t,n),ut=i;break;default:Jn(e,t,n)}}function e1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$l(e)}catch(n){We(t,t.return,n)}}function qg(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new F0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new F0),t;default:throw Error(o(435,e.tag))}}function Ho(e,t){var n=qg(e);t.forEach(function(i){var l=Jg.bind(null,e,i);n.has(i)||(n.add(i),i.then(l,l))})}function en(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i],s=e,h=t,m=h;e:for(;m!==null;){switch(m.tag){case 27:if(ya(m.type)){et=m.stateNode,Xt=!1;break e}break;case 5:et=m.stateNode,Xt=!1;break e;case 3:case 4:et=m.stateNode.containerInfo,Xt=!0;break e}m=m.return}if(et===null)throw Error(o(160));P0(s,h,l),et=null,Xt=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)t1(t,e),t=t.sibling}var vn=null;function t1(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:en(t,e),tn(e),i&4&&(ca(3,e,e.return),Ol(3,e),ca(5,e,e.return));break;case 1:en(t,e),tn(e),i&512&&(ut||n===null||jn(n,n.return)),i&64&&Kn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var l=vn;if(en(t,e),tn(e),i&512&&(ut||n===null||jn(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Pi]||s[_t]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(i),l.head.insertBefore(s,l.querySelector("head > title"))),Ot(s,i,n),s[_t]=e,yt(s),i=s;break e;case"link":var h=J1("link","href",l).get(i+(n.href||""));if(h){for(var m=0;m<h.length;m++)if(s=h[m],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(m,1);break t}}s=l.createElement(i),Ot(s,i,n),l.head.appendChild(s);break;case"meta":if(h=J1("meta","content",l).get(i+(n.content||""))){for(m=0;m<h.length;m++)if(s=h[m],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(m,1);break t}}s=l.createElement(i),Ot(s,i,n),l.head.appendChild(s);break;default:throw Error(o(468,i))}s[_t]=e,yt(s),i=s}e.stateNode=i}else F1(l,e.type,e.stateNode);else e.stateNode=K1(l,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?F1(l,e.type,e.stateNode):K1(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&No(e,e.memoizedProps,n.memoizedProps)}break;case 27:en(t,e),tn(e),i&512&&(ut||n===null||jn(n,n.return)),n!==null&&i&4&&No(e,e.memoizedProps,n.memoizedProps);break;case 5:if(en(t,e),tn(e),i&512&&(ut||n===null||jn(n,n.return)),e.flags&32){l=e.stateNode;try{si(l,"")}catch(N){We(e,e.return,N)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,No(e,l,n!==null?n.memoizedProps:l)),i&1024&&(Bo=!0);break;case 6:if(en(t,e),tn(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(N){We(e,e.return,N)}}break;case 3:if(ys=null,l=vn,vn=gs(t.containerInfo),en(t,e),vn=l,tn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{$l(t.containerInfo)}catch(N){We(e,e.return,N)}Bo&&(Bo=!1,n1(e));break;case 4:i=vn,vn=gs(e.stateNode.containerInfo),en(t,e),tn(e),vn=i;break;case 12:en(t,e),tn(e);break;case 13:en(t,e),tn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Xo=nt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ho(e,i)));break;case 22:l=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,_=Kn,q=ut;if(Kn=_||l,ut=q||v,en(t,e),ut=q,Kn=_,tn(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||v||Kn||ut||Ya(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(s=v.stateNode,l)h=s.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{m=v.stateNode;var X=v.memoizedProps.style,k=X!=null&&X.hasOwnProperty("display")?X.display:null;m.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(N){We(v,v.return,N)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=l?"":v.memoizedProps}catch(N){We(v,v.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ho(e,n))));break;case 19:en(t,e),tn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ho(e,i)));break;case 30:break;case 21:break;default:en(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(K0(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var l=n.stateNode,s=Mo(e);as(e,s,l);break;case 5:var h=n.stateNode;n.flags&32&&(si(h,""),n.flags&=-33);var m=Mo(e);as(e,m,h);break;case 3:case 4:var v=n.stateNode.containerInfo,_=Mo(e);Uo(e,_,v);break;default:throw Error(o(161))}}catch(q){We(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function n1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;n1(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)W0(e,t.alternate,t),t=t.sibling}function Ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),Ya(t);break;case 1:jn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&$0(t,t.return,n),Ya(t);break;case 27:Hl(t.stateNode);case 26:case 5:jn(t,t.return),Ya(t);break;case 22:t.memoizedState===null&&Ya(t);break;case 30:Ya(t);break;default:Ya(t)}e=e.sibling}}function da(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,s=t,h=s.flags;switch(s.tag){case 0:case 11:case 15:da(l,s,n),Ol(4,s);break;case 1:if(da(l,s,n),i=s,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(_){We(i,i.return,_)}if(i=s,l=i.updateQueue,l!==null){var m=i.stateNode;try{var v=l.shared.hiddenCallbacks;if(v!==null)for(l.shared.hiddenCallbacks=null,l=0;l<v.length;l++)Rd(v[l],m)}catch(_){We(i,i.return,_)}}n&&h&64&&Z0(s),Dl(s,s.return);break;case 27:J0(s);case 26:case 5:da(l,s,n),n&&i===null&&h&4&&Q0(s),Dl(s,s.return);break;case 12:da(l,s,n);break;case 13:da(l,s,n),n&&h&4&&e1(l,s);break;case 22:s.memoizedState===null&&da(l,s,n),Dl(s,s.return);break;case 30:break;default:da(l,s,n)}t=t.sibling}}function Lo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pl(n))}function qo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pl(e))}function On(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)a1(e,t,n,i),t=t.sibling}function a1(e,t,n,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:On(e,t,n,i),l&2048&&Ol(9,t);break;case 1:On(e,t,n,i);break;case 3:On(e,t,n,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pl(e)));break;case 12:if(l&2048){On(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,h=s.id,m=s.onPostCommit;typeof m=="function"&&m(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){We(t,t.return,v)}}else On(e,t,n,i);break;case 13:On(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,h=t.alternate,t.memoizedState!==null?s._visibility&2?On(e,t,n,i):_l(e,t):s._visibility&2?On(e,t,n,i):(s._visibility|=2,Ti(e,t,n,i,(t.subtreeFlags&10256)!==0)),l&2048&&Lo(h,t);break;case 24:On(e,t,n,i),l&2048&&qo(t.alternate,t);break;default:On(e,t,n,i)}}function Ti(e,t,n,i,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,h=t,m=n,v=i,_=h.flags;switch(h.tag){case 0:case 11:case 15:Ti(s,h,m,v,l),Ol(8,h);break;case 23:break;case 22:var q=h.stateNode;h.memoizedState!==null?q._visibility&2?Ti(s,h,m,v,l):_l(s,h):(q._visibility|=2,Ti(s,h,m,v,l)),l&&_&2048&&Lo(h.alternate,h);break;case 24:Ti(s,h,m,v,l),l&&_&2048&&qo(h.alternate,h);break;default:Ti(s,h,m,v,l)}t=t.sibling}}function _l(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,l=i.flags;switch(i.tag){case 22:_l(n,i),l&2048&&Lo(i.alternate,i);break;case 24:_l(n,i),l&2048&&qo(i.alternate,i);break;default:_l(n,i)}t=t.sibling}}var Rl=8192;function ji(e){if(e.subtreeFlags&Rl)for(e=e.child;e!==null;)i1(e),e=e.sibling}function i1(e){switch(e.tag){case 26:ji(e),e.flags&Rl&&e.memoizedState!==null&&zx(vn,e.memoizedState,e.memoizedProps);break;case 5:ji(e);break;case 3:case 4:var t=vn;vn=gs(e.stateNode.containerInfo),ji(e),vn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Rl,Rl=16777216,ji(e),Rl=t):ji(e));break;default:ji(e)}}function l1(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Cl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];bt=i,s1(i,e)}l1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)r1(e),e=e.sibling}function r1(e){switch(e.tag){case 0:case 11:case 15:Cl(e),e.flags&2048&&ca(9,e,e.return);break;case 3:Cl(e);break;case 12:Cl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,is(e)):Cl(e);break;default:Cl(e)}}function is(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];bt=i,s1(i,e)}l1(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),is(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,is(t));break;default:is(t)}e=e.sibling}}function s1(e,t){for(;bt!==null;){var n=bt;switch(n.tag){case 0:case 11:case 15:ca(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:pl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,bt=i;else e:for(n=e;bt!==null;){i=bt;var l=i.sibling,s=i.return;if(I0(i),i===n){bt=null;break e}if(l!==null){l.return=s,bt=l;break e}bt=s}}}var Vg={getCacheForType:function(e){var t=Rt(gt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Yg=typeof WeakMap=="function"?WeakMap:Map,$e=0,Ie=null,Ne=null,Be=0,Qe=0,nn=null,ha=!1,Oi=!1,Vo=!1,Fn=0,lt=0,pa=0,Ga=0,Yo=0,pn=0,Di=0,kl=null,Zt=null,Go=!1,Xo=0,ls=1/0,rs=null,ma=null,jt=0,ga=null,_i=null,Ri=0,Zo=0,$o=null,u1=null,Nl=0,Qo=null;function an(){if(($e&2)!==0&&Be!==0)return Be&-Be;if(D.T!==null){var e=yi;return e!==0?e:ec()}return Af()}function o1(){pn===0&&(pn=(Be&536870912)===0||Ge?gr():536870912);var e=hn.current;return e!==null&&(e.flags|=32),pn}function ln(e,t,n){(e===Ie&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)&&(Ci(e,0),xa(e,Be,pn,!1)),Pa(e,n),(($e&2)===0||e!==Ie)&&(e===Ie&&(($e&2)===0&&(Ga|=n),lt===4&&xa(e,Be,pn,!1)),Dn(e))}function c1(e,t,n){if(($e&6)!==0)throw Error(o(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Un(e,t),l=i?Zg(e,t):Fo(e,t,!0),s=i;do{if(l===0){Oi&&!i&&xa(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Gg(n)){l=Fo(e,t,!1),s=!1;continue}if(l===2){if(s=t,e.errorRecoveryDisabledLanes&s)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var m=e;l=kl;var v=m.current.memoizedState.isDehydrated;if(v&&(Ci(m,h).flags|=256),h=Fo(m,h,!1),h!==2){if(Vo&&!v){m.errorRecoveryDisabledLanes|=s,Ga|=s,l=4;break e}s=Zt,Zt=l,s!==null&&(Zt===null?Zt=s:Zt.push.apply(Zt,s))}l=h}if(s=!1,l!==2)continue}}if(l===1){Ci(e,0),xa(e,t,0,!0);break}e:{switch(i=e,s=l,s){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:xa(i,t,pn,!ha);break e;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(l=Xo+300-nt(),10<l)){if(xa(i,t,pn,!ha),Mn(i,0,!0)!==0)break e;i.timeoutHandle=L1(f1.bind(null,i,n,Zt,rs,Go,t,pn,Ga,Di,ha,s,2,-0,0),l);break e}f1(i,n,Zt,rs,Go,t,pn,Ga,Di,ha,s,0,-0,0)}}break}while(!0);Dn(e)}function f1(e,t,n,i,l,s,h,m,v,_,q,X,k,N){if(e.timeoutHandle=-1,X=t.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(Vl={stylesheets:null,count:0,unsuspend:Ax},i1(t),X=Tx(),X!==null)){e.cancelPendingCommit=X(y1.bind(null,e,t,s,n,i,l,h,m,v,q,1,k,N)),xa(e,s,h,!_);return}y1(e,t,s,n,i,l,h,m,v)}function Gg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],s=l.getSnapshot;l=l.value;try{if(!It(s(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xa(e,t,n,i){t&=~Yo,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var s=31-Ze(l),h=1<<s;i[s]=-1,l&=~h}n!==0&&wf(e,n,t)}function ss(){return($e&6)===0?(Ml(0),!1):!0}function Ko(){if(Ne!==null){if(Qe===0)var e=Ne.return;else e=Ne,Yn=Ba=null,co(e),Ai=null,zl=0,e=Ne;for(;e!==null;)X0(e.alternate,e),e=e.return;Ne=null}}function Ci(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,sx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ko(),Ie=e,Ne=n=Ln(e.current,null),Be=t,Qe=0,nn=null,ha=!1,Oi=Un(e,t),Vo=!1,Di=pn=Yo=Ga=pa=lt=0,Zt=kl=null,Go=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-Ze(i),s=1<<l;t|=e[l],i&=~s}return Fn=t,Dr(),n}function d1(e,t){Re=null,D.H=Kr,t===gl||t===Hr?(t=Dd(),Qe=3):t===Td?(t=Dd(),Qe=4):Qe=t===_0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nn=t,Ne===null&&(lt=1,Pr(e,on(t,e.current)))}function h1(){var e=D.H;return D.H=Kr,e===null?Kr:e}function p1(){var e=D.A;return D.A=Vg,e}function Jo(){lt=4,ha||(Be&4194048)!==Be&&hn.current!==null||(Oi=!0),(pa&134217727)===0&&(Ga&134217727)===0||Ie===null||xa(Ie,Be,pn,!1)}function Fo(e,t,n){var i=$e;$e|=2;var l=h1(),s=p1();(Ie!==e||Be!==t)&&(rs=null,Ci(e,t)),t=!1;var h=lt;e:do try{if(Qe!==0&&Ne!==null){var m=Ne,v=nn;switch(Qe){case 8:Ko(),h=6;break e;case 3:case 2:case 9:case 6:hn.current===null&&(t=!0);var _=Qe;if(Qe=0,nn=null,ki(e,m,v,_),n&&Oi){h=0;break e}break;default:_=Qe,Qe=0,nn=null,ki(e,m,v,_)}}Xg(),h=lt;break}catch(q){d1(e,q)}while(!0);return t&&e.shellSuspendCounter++,Yn=Ba=null,$e=i,D.H=l,D.A=s,Ne===null&&(Ie=null,Be=0,Dr()),h}function Xg(){for(;Ne!==null;)m1(Ne)}function Zg(e,t){var n=$e;$e|=2;var i=h1(),l=p1();Ie!==e||Be!==t?(rs=null,ls=nt()+500,Ci(e,t)):Oi=Un(e,t);e:do try{if(Qe!==0&&Ne!==null){t=Ne;var s=nn;t:switch(Qe){case 1:Qe=0,nn=null,ki(e,t,s,1);break;case 2:case 9:if(jd(s)){Qe=0,nn=null,g1(t);break}t=function(){Qe!==2&&Qe!==9||Ie!==e||(Qe=7),Dn(e)},s.then(t,t);break e;case 3:Qe=7;break e;case 4:Qe=5;break e;case 7:jd(s)?(Qe=0,nn=null,g1(t)):(Qe=0,nn=null,ki(e,t,s,7));break;case 5:var h=null;switch(Ne.tag){case 26:h=Ne.memoizedState;case 5:case 27:var m=Ne;if(!h||W1(h)){Qe=0,nn=null;var v=m.sibling;if(v!==null)Ne=v;else{var _=m.return;_!==null?(Ne=_,us(_)):Ne=null}break t}}Qe=0,nn=null,ki(e,t,s,5);break;case 6:Qe=0,nn=null,ki(e,t,s,6);break;case 8:Ko(),lt=6;break e;default:throw Error(o(462))}}$g();break}catch(q){d1(e,q)}while(!0);return Yn=Ba=null,D.H=i,D.A=l,$e=n,Ne!==null?0:(Ie=null,Be=0,Dr(),lt)}function $g(){for(;Ne!==null&&!He();)m1(Ne)}function m1(e){var t=Y0(e.alternate,e,Fn);e.memoizedProps=e.pendingProps,t===null?us(e):Ne=t}function g1(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=U0(n,t,t.pendingProps,t.type,void 0,Be);break;case 11:t=U0(n,t,t.pendingProps,t.type.render,t.ref,Be);break;case 5:co(t);default:X0(n,t),t=Ne=xd(t,Fn),t=Y0(n,t,Fn)}e.memoizedProps=e.pendingProps,t===null?us(e):Ne=t}function ki(e,t,n,i){Yn=Ba=null,co(t),Ai=null,zl=0;var l=t.return;try{if(Mg(e,l,t,n,Be)){lt=1,Pr(e,on(n,e.current)),Ne=null;return}}catch(s){if(l!==null)throw Ne=l,s;lt=1,Pr(e,on(n,e.current)),Ne=null;return}t.flags&32768?(Ge||i===1?e=!0:Oi||(Be&536870912)!==0?e=!1:(ha=e=!0,(i===2||i===9||i===3||i===6)&&(i=hn.current,i!==null&&i.tag===13&&(i.flags|=16384))),x1(t,e)):us(t)}function us(e){var t=e;do{if((t.flags&32768)!==0){x1(t,ha);return}e=t.return;var n=Bg(t.alternate,t,Fn);if(n!==null){Ne=n;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);lt===0&&(lt=5)}function x1(e,t){do{var n=Hg(e.alternate,e);if(n!==null){n.flags&=32767,Ne=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ne=e;return}Ne=e=n}while(e!==null);lt=6,Ne=null}function y1(e,t,n,i,l,s,h,m,v){e.cancelPendingCommit=null;do os();while(jt!==0);if(($e&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(s=t.lanes|t.childLanes,s|=Lu,Am(e,n,s,h,m,v),e===Ie&&(Ne=Ie=null,Be=0),_i=t,ga=e,Ri=n,Zo=s,$o=l,u1=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fg(j,function(){return E1(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=D.T,D.T=null,l=Q.p,Q.p=2,h=$e,$e|=4;try{Lg(e,t,n)}finally{$e=h,Q.p=l,D.T=i}}jt=1,v1(),b1(),S1()}}function v1(){if(jt===1){jt=0;var e=ga,t=_i,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var i=Q.p;Q.p=2;var l=$e;$e|=4;try{t1(t,e);var s=uc,h=sd(e.containerInfo),m=s.focusedElem,v=s.selectionRange;if(h!==m&&m&&m.ownerDocument&&rd(m.ownerDocument.documentElement,m)){if(v!==null&&Nu(m)){var _=v.start,q=v.end;if(q===void 0&&(q=_),"selectionStart"in m)m.selectionStart=_,m.selectionEnd=Math.min(q,m.value.length);else{var X=m.ownerDocument||document,k=X&&X.defaultView||window;if(k.getSelection){var N=k.getSelection(),ze=m.textContent.length,xe=Math.min(v.start,ze),Fe=v.end===void 0?xe:Math.min(v.end,ze);!N.extend&&xe>Fe&&(h=Fe,Fe=xe,xe=h);var T=ld(m,xe),z=ld(m,Fe);if(T&&z&&(N.rangeCount!==1||N.anchorNode!==T.node||N.anchorOffset!==T.offset||N.focusNode!==z.node||N.focusOffset!==z.offset)){var O=X.createRange();O.setStart(T.node,T.offset),N.removeAllRanges(),xe>Fe?(N.addRange(O),N.extend(z.node,z.offset)):(O.setEnd(z.node,z.offset),N.addRange(O))}}}}for(X=[],N=m;N=N.parentNode;)N.nodeType===1&&X.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<X.length;m++){var Y=X[m];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Ss=!!sc,uc=sc=null}finally{$e=l,Q.p=i,D.T=n}}e.current=t,jt=2}}function b1(){if(jt===2){jt=0;var e=ga,t=_i,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var i=Q.p;Q.p=2;var l=$e;$e|=4;try{W0(e,t.alternate,t)}finally{$e=l,Q.p=i,D.T=n}}jt=3}}function S1(){if(jt===4||jt===3){jt=0,mt();var e=ga,t=_i,n=Ri,i=u1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?jt=5:(jt=0,_i=ga=null,w1(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ma=null),hu(n),t=t.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(oe,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=D.T,l=Q.p,Q.p=2,D.T=null;try{for(var s=e.onRecoverableError,h=0;h<i.length;h++){var m=i[h];s(m.value,{componentStack:m.stack})}}finally{D.T=t,Q.p=l}}(Ri&3)!==0&&os(),Dn(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===Qo?Nl++:(Nl=0,Qo=e):Nl=0,Ml(0)}}function w1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pl(t)))}function os(e){return v1(),b1(),S1(),E1()}function E1(){if(jt!==5)return!1;var e=ga,t=Zo;Zo=0;var n=hu(Ri),i=D.T,l=Q.p;try{Q.p=32>n?32:n,D.T=null,n=$o,$o=null;var s=ga,h=Ri;if(jt=0,_i=ga=null,Ri=0,($e&6)!==0)throw Error(o(331));var m=$e;if($e|=4,r1(s.current),a1(s,s.current,h,n),$e=m,Ml(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(oe,s)}catch{}return!0}finally{Q.p=l,D.T=i,w1(e,t)}}function A1(e,t,n){t=on(n,t),t=zo(e.stateNode,t,2),e=ra(e,t,2),e!==null&&(Pa(e,2),Dn(e))}function We(e,t,n){if(e.tag===3)A1(e,e,n);else for(;t!==null;){if(t.tag===3){A1(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ma===null||!ma.has(i))){e=on(n,e),n=O0(2),i=ra(t,n,2),i!==null&&(D0(n,i,t,e),Pa(i,2),Dn(i));break}}t=t.return}}function Wo(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Yg;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||(Vo=!0,l.add(n),e=Qg.bind(null,e,t,n),t.then(e,e))}function Qg(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ie===e&&(Be&n)===n&&(lt===4||lt===3&&(Be&62914560)===Be&&300>nt()-Xo?($e&2)===0&&Ci(e,0):Yo|=n,Di===Be&&(Di=0)),Dn(e)}function z1(e,t){t===0&&(t=xr()),e=pi(e,t),e!==null&&(Pa(e,t),Dn(e))}function Kg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),z1(e,n)}function Jg(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),z1(e,n)}function Fg(e,t){return ge(e,t)}var cs=null,Ni=null,Io=!1,fs=!1,Po=!1,Xa=0;function Dn(e){e!==Ni&&e.next===null&&(Ni===null?cs=Ni=e:Ni=Ni.next=e),fs=!0,Io||(Io=!0,Ig())}function Ml(e,t){if(!Po&&fs){Po=!0;do for(var n=!1,i=cs;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var s=0;else{var h=i.suspendedLanes,m=i.pingedLanes;s=(1<<31-Ze(42|e)+1)-1,s&=l&~(h&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,D1(i,s))}else s=Be,s=Mn(i,i===Ie?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Un(i,s)||(n=!0,D1(i,s));i=i.next}while(n);Po=!1}}function Wg(){T1()}function T1(){fs=Io=!1;var e=0;Xa!==0&&(rx()&&(e=Xa),Xa=0);for(var t=nt(),n=null,i=cs;i!==null;){var l=i.next,s=j1(i,t);s===0?(i.next=null,n===null?cs=l:n.next=l,l===null&&(Ni=n)):(n=i,(e!==0||(s&3)!==0)&&(fs=!0)),i=l}Ml(e)}function j1(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var h=31-Ze(s),m=1<<h,v=l[h];v===-1?((m&n)===0||(m&i)!==0)&&(l[h]=ea(m,t)):v<=t&&(e.expiredLanes|=m),s&=~m}if(t=Ie,n=Be,n=Mn(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ye(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Un(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ye(i),hu(n)){case 2:case 8:n=S;break;case 32:n=j;break;case 268435456:n=ie;break;default:n=j}return i=O1.bind(null,e),n=ge(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ye(i),e.callbackPriority=2,e.callbackNode=null,2}function O1(e,t){if(jt!==0&&jt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(os()&&e.callbackNode!==n)return null;var i=Be;return i=Mn(e,e===Ie?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(c1(e,i,t),j1(e,nt()),e.callbackNode!=null&&e.callbackNode===n?O1.bind(null,e):null)}function D1(e,t){if(os())return null;c1(e,t,!0)}function Ig(){ux(function(){($e&6)!==0?ge(Wt,Wg):T1()})}function ec(){return Xa===0&&(Xa=gr()),Xa}function _1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wr(""+e)}function R1(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Pg(e,t,n,i,l){if(t==="submit"&&n&&n.stateNode===l){var s=_1((l[Vt]||null).action),h=i.submitter;h&&(t=(t=h[Vt]||null)?_1(t.formAction):h.getAttribute("formAction"),t!==null&&(s=t,h=null));var m=new Tr("action","action",null,i,l);e.push({event:m,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Xa!==0){var v=h?R1(l,h):new FormData(l);bo(n,{pending:!0,data:v,method:l.method,action:s},null,v)}}else typeof s=="function"&&(m.preventDefault(),v=h?R1(l,h):new FormData(l),bo(n,{pending:!0,data:v,method:l.method,action:s},s,v))},currentTarget:l}]})}}for(var tc=0;tc<Hu.length;tc++){var nc=Hu[tc],ex=nc.toLowerCase(),tx=nc[0].toUpperCase()+nc.slice(1);yn(ex,"on"+tx)}yn(cd,"onAnimationEnd"),yn(fd,"onAnimationIteration"),yn(dd,"onAnimationStart"),yn("dblclick","onDoubleClick"),yn("focusin","onFocus"),yn("focusout","onBlur"),yn(yg,"onTransitionRun"),yn(vg,"onTransitionStart"),yn(bg,"onTransitionCancel"),yn(hd,"onTransitionEnd"),ii("onMouseEnter",["mouseout","mouseover"]),ii("onMouseLeave",["mouseout","mouseover"]),ii("onPointerEnter",["pointerout","pointerover"]),ii("onPointerLeave",["pointerout","pointerover"]),Oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ul));function C1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],l=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var h=i.length-1;0<=h;h--){var m=i[h],v=m.instance,_=m.currentTarget;if(m=m.listener,v!==s&&l.isPropagationStopped())break e;s=m,l.currentTarget=_;try{s(l)}catch(q){Ir(q)}l.currentTarget=null,s=v}else for(h=0;h<i.length;h++){if(m=i[h],v=m.instance,_=m.currentTarget,m=m.listener,v!==s&&l.isPropagationStopped())break e;s=m,l.currentTarget=_;try{s(l)}catch(q){Ir(q)}l.currentTarget=null,s=v}}}}function Me(e,t){var n=t[pu];n===void 0&&(n=t[pu]=new Set);var i=e+"__bubble";n.has(i)||(k1(t,e,2,!1),n.add(i))}function ac(e,t,n){var i=0;t&&(i|=4),k1(n,e,i,t)}var ds="_reactListening"+Math.random().toString(36).slice(2);function ic(e){if(!e[ds]){e[ds]=!0,Tf.forEach(function(n){n!=="selectionchange"&&(nx.has(n)||ac(n,!1,e),ac(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ds]||(t[ds]=!0,ac("selectionchange",!1,t))}}function k1(e,t,n,i){switch(ah(t)){case 2:var l=Dx;break;case 8:l=_x;break;default:l=yc}n=l.bind(null,t,n,e),l=void 0,!zu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function lc(e,t,n,i,l){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var m=i.stateNode.containerInfo;if(m===l)break;if(h===4)for(h=i.return;h!==null;){var v=h.tag;if((v===3||v===4)&&h.stateNode.containerInfo===l)return;h=h.return}for(;m!==null;){if(h=ti(m),h===null)return;if(v=h.tag,v===5||v===6||v===26||v===27){i=s=h;continue e}m=m.parentNode}}i=i.return}qf(function(){var _=s,q=Eu(n),X=[];e:{var k=pd.get(e);if(k!==void 0){var N=Tr,ze=e;switch(e){case"keypress":if(Ar(n)===0)break e;case"keydown":case"keyup":N=Fm;break;case"focusin":ze="focus",N=Du;break;case"focusout":ze="blur",N=Du;break;case"beforeblur":case"afterblur":N=Du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Pm;break;case cd:case fd:case dd:N=Vm;break;case hd:N=tg;break;case"scroll":case"scrollend":N=Um;break;case"wheel":N=ag;break;case"copy":case"cut":case"paste":N=Gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Zf;break;case"toggle":case"beforetoggle":N=lg}var xe=(t&4)!==0,Fe=!xe&&(e==="scroll"||e==="scrollend"),T=xe?k!==null?k+"Capture":null:k;xe=[];for(var z=_,O;z!==null;){var Y=z;if(O=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||O===null||T===null||(Y=tl(z,T),Y!=null&&xe.push(Bl(z,Y,O))),Fe)break;z=z.return}0<xe.length&&(k=new N(k,ze,null,n,q),X.push({event:k,listeners:xe}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",k&&n!==wu&&(ze=n.relatedTarget||n.fromElement)&&(ti(ze)||ze[ei]))break e;if((N||k)&&(k=q.window===q?q:(k=q.ownerDocument)?k.defaultView||k.parentWindow:window,N?(ze=n.relatedTarget||n.toElement,N=_,ze=ze?ti(ze):null,ze!==null&&(Fe=d(ze),xe=ze.tag,ze!==Fe||xe!==5&&xe!==27&&xe!==6)&&(ze=null)):(N=null,ze=_),N!==ze)){if(xe=Gf,Y="onMouseLeave",T="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(xe=Zf,Y="onPointerLeave",T="onPointerEnter",z="pointer"),Fe=N==null?k:el(N),O=ze==null?k:el(ze),k=new xe(Y,z+"leave",N,n,q),k.target=Fe,k.relatedTarget=O,Y=null,ti(q)===_&&(xe=new xe(T,z+"enter",ze,n,q),xe.target=O,xe.relatedTarget=Fe,Y=xe),Fe=Y,N&&ze)t:{for(xe=N,T=ze,z=0,O=xe;O;O=Mi(O))z++;for(O=0,Y=T;Y;Y=Mi(Y))O++;for(;0<z-O;)xe=Mi(xe),z--;for(;0<O-z;)T=Mi(T),O--;for(;z--;){if(xe===T||T!==null&&xe===T.alternate)break t;xe=Mi(xe),T=Mi(T)}xe=null}else xe=null;N!==null&&N1(X,k,N,xe,!1),ze!==null&&Fe!==null&&N1(X,Fe,ze,xe,!0)}}e:{if(k=_?el(_):window,N=k.nodeName&&k.nodeName.toLowerCase(),N==="select"||N==="input"&&k.type==="file")var de=Pf;else if(Wf(k))if(ed)de=mg;else{de=hg;var ke=dg}else N=k.nodeName,!N||N.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?_&&Su(_.elementType)&&(de=Pf):de=pg;if(de&&(de=de(e,_))){If(X,de,n,q);break e}ke&&ke(e,k,_),e==="focusout"&&_&&k.type==="number"&&_.memoizedProps.value!=null&&bu(k,"number",k.value)}switch(ke=_?el(_):window,e){case"focusin":(Wf(ke)||ke.contentEditable==="true")&&(fi=ke,Mu=_,ol=null);break;case"focusout":ol=Mu=fi=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,ud(X,n,q);break;case"selectionchange":if(xg)break;case"keydown":case"keyup":ud(X,n,q)}var pe;if(Ru)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else ci?Jf(e,n)&&(ve="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ve="onCompositionStart");ve&&($f&&n.locale!=="ko"&&(ci||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&ci&&(pe=Vf()):(na=q,Tu="value"in na?na.value:na.textContent,ci=!0)),ke=hs(_,ve),0<ke.length&&(ve=new Xf(ve,e,null,n,q),X.push({event:ve,listeners:ke}),pe?ve.data=pe:(pe=Ff(n),pe!==null&&(ve.data=pe)))),(pe=sg?ug(e,n):og(e,n))&&(ve=hs(_,"onBeforeInput"),0<ve.length&&(ke=new Xf("onBeforeInput","beforeinput",null,n,q),X.push({event:ke,listeners:ve}),ke.data=pe)),Pg(X,e,_,n,q)}C1(X,t)})}function Bl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hs(e,t){for(var n=t+"Capture",i=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=tl(e,n),l!=null&&i.unshift(Bl(e,l,s)),l=tl(e,t),l!=null&&i.push(Bl(e,l,s))),e.tag===3)return i;e=e.return}return[]}function Mi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function N1(e,t,n,i,l){for(var s=t._reactName,h=[];n!==null&&n!==i;){var m=n,v=m.alternate,_=m.stateNode;if(m=m.tag,v!==null&&v===i)break;m!==5&&m!==26&&m!==27||_===null||(v=_,l?(_=tl(n,s),_!=null&&h.unshift(Bl(n,_,v))):l||(_=tl(n,s),_!=null&&h.push(Bl(n,_,v)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var ax=/\r\n?/g,ix=/\u0000|\uFFFD/g;function M1(e){return(typeof e=="string"?e:""+e).replace(ax,`
`).replace(ix,"")}function U1(e,t){return t=M1(t),M1(e)===t}function ps(){}function Je(e,t,n,i,l,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||si(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&si(e,""+i);break;case"className":vr(e,"class",i);break;case"tabIndex":vr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":vr(e,n,i);break;case"style":Hf(e,i,s);break;case"data":if(t!=="object"){vr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=wr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Je(e,t,"name",l.name,l,null),Je(e,t,"formEncType",l.formEncType,l,null),Je(e,t,"formMethod",l.formMethod,l,null),Je(e,t,"formTarget",l.formTarget,l,null)):(Je(e,t,"encType",l.encType,l,null),Je(e,t,"method",l.method,l,null),Je(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=wr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ps);break;case"onScroll":i!=null&&Me("scroll",e);break;case"onScrollEnd":i!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=wr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Me("beforetoggle",e),Me("toggle",e),yr(e,"popover",i);break;case"xlinkActuate":Bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Bn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Bn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Bn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Bn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":yr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Nm.get(n)||n,yr(e,n,i))}}function rc(e,t,n,i,l,s){switch(n){case"style":Hf(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?si(e,i):(typeof i=="number"||typeof i=="bigint")&&si(e,""+i);break;case"onScroll":i!=null&&Me("scroll",e);break;case"onScrollEnd":i!=null&&Me("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ps);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),s=e[Vt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,l),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,l);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):yr(e,n,i)}}}function Ot(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var i=!1,l=!1,s;for(s in n)if(n.hasOwnProperty(s)){var h=n[s];if(h!=null)switch(s){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Je(e,t,s,h,n,null)}}l&&Je(e,t,"srcSet",n.srcSet,n,null),i&&Je(e,t,"src",n.src,n,null);return;case"input":Me("invalid",e);var m=s=h=l=null,v=null,_=null;for(i in n)if(n.hasOwnProperty(i)){var q=n[i];if(q!=null)switch(i){case"name":l=q;break;case"type":h=q;break;case"checked":v=q;break;case"defaultChecked":_=q;break;case"value":s=q;break;case"defaultValue":m=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(o(137,t));break;default:Je(e,t,i,q,n,null)}}Nf(e,s,m,v,_,h,l,!1),br(e);return;case"select":Me("invalid",e),i=h=s=null;for(l in n)if(n.hasOwnProperty(l)&&(m=n[l],m!=null))switch(l){case"value":s=m;break;case"defaultValue":h=m;break;case"multiple":i=m;default:Je(e,t,l,m,n,null)}t=s,n=h,e.multiple=!!i,t!=null?ri(e,!!i,t,!1):n!=null&&ri(e,!!i,n,!0);return;case"textarea":Me("invalid",e),s=l=i=null;for(h in n)if(n.hasOwnProperty(h)&&(m=n[h],m!=null))switch(h){case"value":i=m;break;case"defaultValue":l=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(o(91));break;default:Je(e,t,h,m,n,null)}Uf(e,i,l,s),br(e);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(i=n[v],i!=null))switch(v){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Je(e,t,v,i,n,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(i=0;i<Ul.length;i++)Me(Ul[i],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in n)if(n.hasOwnProperty(_)&&(i=n[_],i!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Je(e,t,_,i,n,null)}return;default:if(Su(t)){for(q in n)n.hasOwnProperty(q)&&(i=n[q],i!==void 0&&rc(e,t,q,i,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(i=n[m],i!=null&&Je(e,t,m,i,n,null))}function lx(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,h=null,m=null,v=null,_=null,q=null;for(N in n){var X=n[N];if(n.hasOwnProperty(N)&&X!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":v=X;default:i.hasOwnProperty(N)||Je(e,t,N,null,i,X)}}for(var k in i){var N=i[k];if(X=n[k],i.hasOwnProperty(k)&&(N!=null||X!=null))switch(k){case"type":s=N;break;case"name":l=N;break;case"checked":_=N;break;case"defaultChecked":q=N;break;case"value":h=N;break;case"defaultValue":m=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:N!==X&&Je(e,t,k,N,i,X)}}vu(e,h,m,v,_,q,s,l);return;case"select":N=h=m=k=null;for(s in n)if(v=n[s],n.hasOwnProperty(s)&&v!=null)switch(s){case"value":break;case"multiple":N=v;default:i.hasOwnProperty(s)||Je(e,t,s,null,i,v)}for(l in i)if(s=i[l],v=n[l],i.hasOwnProperty(l)&&(s!=null||v!=null))switch(l){case"value":k=s;break;case"defaultValue":m=s;break;case"multiple":h=s;default:s!==v&&Je(e,t,l,s,i,v)}t=m,n=h,i=N,k!=null?ri(e,!!n,k,!1):!!i!=!!n&&(t!=null?ri(e,!!n,t,!0):ri(e,!!n,n?[]:"",!1));return;case"textarea":N=k=null;for(m in n)if(l=n[m],n.hasOwnProperty(m)&&l!=null&&!i.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Je(e,t,m,null,i,l)}for(h in i)if(l=i[h],s=n[h],i.hasOwnProperty(h)&&(l!=null||s!=null))switch(h){case"value":k=l;break;case"defaultValue":N=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==s&&Je(e,t,h,l,i,s)}Mf(e,k,N);return;case"option":for(var ze in n)if(k=n[ze],n.hasOwnProperty(ze)&&k!=null&&!i.hasOwnProperty(ze))switch(ze){case"selected":e.selected=!1;break;default:Je(e,t,ze,null,i,k)}for(v in i)if(k=i[v],N=n[v],i.hasOwnProperty(v)&&k!==N&&(k!=null||N!=null))switch(v){case"selected":e.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Je(e,t,v,k,i,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var xe in n)k=n[xe],n.hasOwnProperty(xe)&&k!=null&&!i.hasOwnProperty(xe)&&Je(e,t,xe,null,i,k);for(_ in i)if(k=i[_],N=n[_],i.hasOwnProperty(_)&&k!==N&&(k!=null||N!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(o(137,t));break;default:Je(e,t,_,k,i,N)}return;default:if(Su(t)){for(var Fe in n)k=n[Fe],n.hasOwnProperty(Fe)&&k!==void 0&&!i.hasOwnProperty(Fe)&&rc(e,t,Fe,void 0,i,k);for(q in i)k=i[q],N=n[q],!i.hasOwnProperty(q)||k===N||k===void 0&&N===void 0||rc(e,t,q,k,i,N);return}}for(var T in n)k=n[T],n.hasOwnProperty(T)&&k!=null&&!i.hasOwnProperty(T)&&Je(e,t,T,null,i,k);for(X in i)k=i[X],N=n[X],!i.hasOwnProperty(X)||k===N||k==null&&N==null||Je(e,t,X,k,i,N)}var sc=null,uc=null;function ms(e){return e.nodeType===9?e:e.ownerDocument}function B1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function H1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function oc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cc=null;function rx(){var e=window.event;return e&&e.type==="popstate"?e===cc?!1:(cc=e,!0):(cc=null,!1)}var L1=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,q1=typeof Promise=="function"?Promise:void 0,ux=typeof queueMicrotask=="function"?queueMicrotask:typeof q1<"u"?function(e){return q1.resolve(null).then(e).catch(ox)}:L1;function ox(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function V1(e,t){var n=t,i=0,l=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(0<i&&8>i){n=i;var h=e.ownerDocument;if(n&1&&Hl(h.documentElement),n&2&&Hl(h.body),n&4)for(n=h.head,Hl(n),h=n.firstChild;h;){var m=h.nextSibling,v=h.nodeName;h[Pi]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&h.rel.toLowerCase()==="stylesheet"||n.removeChild(h),h=m}}if(l===0){e.removeChild(s),$l(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:i=n.charCodeAt(0)-48;else i=0;n=s}while(n);$l(t)}function fc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":fc(n),mu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function cx(e,t,n,i){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Pi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=bn(e.nextSibling),e===null)break}return null}function fx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=bn(e.nextSibling),e===null))return null;return e}function dc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function dx(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var hc=null;function Y1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function G1(e,t,n){switch(t=ms(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Hl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);mu(e)}var mn=new Map,X1=new Set;function gs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Wn=Q.d;Q.d={f:hx,r:px,D:mx,C:gx,L:xx,m:yx,X:bx,S:vx,M:Sx};function hx(){var e=Wn.f(),t=ss();return e||t}function px(e){var t=ni(e);t!==null&&t.tag===5&&t.type==="form"?c0(t):Wn.r(e)}var Ui=typeof document>"u"?null:document;function Z1(e,t,n){var i=Ui;if(i&&typeof t=="string"&&t){var l=un(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),X1.has(l)||(X1.add(l),e={rel:e,crossOrigin:n,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),Ot(t,"link",e),yt(t),i.head.appendChild(t)))}}function mx(e){Wn.D(e),Z1("dns-prefetch",e,null)}function gx(e,t){Wn.C(e,t),Z1("preconnect",e,t)}function xx(e,t,n){Wn.L(e,t,n);var i=Ui;if(i&&e&&t){var l='link[rel="preload"][as="'+un(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+un(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+un(n.imageSizes)+'"]')):l+='[href="'+un(e)+'"]';var s=l;switch(t){case"style":s=Bi(e);break;case"script":s=Hi(e)}mn.has(s)||(e=b({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),mn.set(s,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(Ll(s))||t==="script"&&i.querySelector(ql(s))||(t=i.createElement("link"),Ot(t,"link",e),yt(t),i.head.appendChild(t)))}}function yx(e,t){Wn.m(e,t);var n=Ui;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+un(i)+'"][href="'+un(e)+'"]',s=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Hi(e)}if(!mn.has(s)&&(e=b({rel:"modulepreload",href:e},t),mn.set(s,e),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ql(s)))return}i=n.createElement("link"),Ot(i,"link",e),yt(i),n.head.appendChild(i)}}}function vx(e,t,n){Wn.S(e,t,n);var i=Ui;if(i&&e){var l=ai(i).hoistableStyles,s=Bi(e);t=t||"default";var h=l.get(s);if(!h){var m={loading:0,preload:null};if(h=i.querySelector(Ll(s)))m.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},n),(n=mn.get(s))&&pc(e,n);var v=h=i.createElement("link");yt(v),Ot(v,"link",e),v._p=new Promise(function(_,q){v.onload=_,v.onerror=q}),v.addEventListener("load",function(){m.loading|=1}),v.addEventListener("error",function(){m.loading|=2}),m.loading|=4,xs(h,t,i)}h={type:"stylesheet",instance:h,count:1,state:m},l.set(s,h)}}}function bx(e,t){Wn.X(e,t);var n=Ui;if(n&&e){var i=ai(n).hoistableScripts,l=Hi(e),s=i.get(l);s||(s=n.querySelector(ql(l)),s||(e=b({src:e,async:!0},t),(t=mn.get(l))&&mc(e,t),s=n.createElement("script"),yt(s),Ot(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(l,s))}}function Sx(e,t){Wn.M(e,t);var n=Ui;if(n&&e){var i=ai(n).hoistableScripts,l=Hi(e),s=i.get(l);s||(s=n.querySelector(ql(l)),s||(e=b({src:e,async:!0,type:"module"},t),(t=mn.get(l))&&mc(e,t),s=n.createElement("script"),yt(s),Ot(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(l,s))}}function $1(e,t,n,i){var l=(l=ue.current)?gs(l):null;if(!l)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Bi(n.href),n=ai(l).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Bi(n.href);var s=ai(l).hoistableStyles,h=s.get(e);if(h||(l=l.ownerDocument||l,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,h),(s=l.querySelector(Ll(e)))&&!s._p&&(h.instance=s,h.state.loading=5),mn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mn.set(e,n),s||wx(l,e,n,h.state))),t&&i===null)throw Error(o(528,""));return h}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Hi(n),n=ai(l).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Bi(e){return'href="'+un(e)+'"'}function Ll(e){return'link[rel="stylesheet"]['+e+"]"}function Q1(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function wx(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ot(t,"link",n),yt(t),e.head.appendChild(t))}function Hi(e){return'[src="'+un(e)+'"]'}function ql(e){return"script[async]"+e}function K1(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+un(n.href)+'"]');if(i)return t.instance=i,yt(i),i;var l=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),yt(i),Ot(i,"style",l),xs(i,n.precedence,e),t.instance=i;case"stylesheet":l=Bi(n.href);var s=e.querySelector(Ll(l));if(s)return t.state.loading|=4,t.instance=s,yt(s),s;i=Q1(n),(l=mn.get(l))&&pc(i,l),s=(e.ownerDocument||e).createElement("link"),yt(s);var h=s;return h._p=new Promise(function(m,v){h.onload=m,h.onerror=v}),Ot(s,"link",i),t.state.loading|=4,xs(s,n.precedence,e),t.instance=s;case"script":return s=Hi(n.src),(l=e.querySelector(ql(s)))?(t.instance=l,yt(l),l):(i=n,(l=mn.get(s))&&(i=b({},n),mc(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),yt(l),Ot(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,xs(i,n.precedence,e));return t.instance}function xs(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,s=l,h=0;h<i.length;h++){var m=i[h];if(m.dataset.precedence===t)s=m;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function pc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ys=null;function J1(e,t,n){if(ys===null){var i=new Map,l=ys=new Map;l.set(n,i)}else l=ys,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var s=n[l];if(!(s[Pi]||s[_t]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var h=s.getAttribute(t)||"";h=e+h;var m=i.get(h);m?m.push(s):i.set(h,[s])}}return i}function F1(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Ex(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function W1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Vl=null;function Ax(){}function zx(e,t,n){if(Vl===null)throw Error(o(475));var i=Vl;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Bi(n.href),s=e.querySelector(Ll(l));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=vs.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=s,yt(s);return}s=e.ownerDocument||e,n=Q1(n),(l=mn.get(l))&&pc(n,l),s=s.createElement("link"),yt(s);var h=s;h._p=new Promise(function(m,v){h.onload=m,h.onerror=v}),Ot(s,"link",n),t.instance=s}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=vs.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function Tx(){if(Vl===null)throw Error(o(475));var e=Vl;return e.stylesheets&&e.count===0&&gc(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&gc(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function vs(){if(this.count--,this.count===0){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bs=null;function gc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bs=new Map,t.forEach(jx,e),bs=null,vs.call(e))}function jx(e,t){if(!(t.state.loading&4)){var n=bs.get(e);if(n)var i=n.get(null);else{n=new Map,bs.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var h=l[s];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),i=h)}i&&n.set(null,i)}l=t.instance,h=l.getAttribute("data-precedence"),s=n.get(h)||i,s===i&&n.set(null,l),n.set(h,l),this.count++,i=vs.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Yl={$$typeof:Z,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function Ox(e,t,n,i,l,s,h,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ii(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.hiddenUpdates=Ii(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function I1(e,t,n,i,l,s,h,m,v,_,q,X){return e=new Ox(e,t,n,h,m,v,_,X),t=1,s===!0&&(t|=24),s=Pt(3,null,null,t),e.current=s,s.stateNode=e,t=Fu(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},eo(s),e}function P1(e){return e?(e=mi,e):mi}function eh(e,t,n,i,l,s){l=P1(l),i.context===null?i.context=l:i.pendingContext=l,i=la(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=ra(e,i,t),n!==null&&(ln(n,e,t),yl(n,e,t))}function th(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xc(e,t){th(e,t),(e=e.alternate)&&th(e,t)}function nh(e){if(e.tag===13){var t=pi(e,67108864);t!==null&&ln(t,e,67108864),xc(e,67108864)}}var Ss=!0;function Dx(e,t,n,i){var l=D.T;D.T=null;var s=Q.p;try{Q.p=2,yc(e,t,n,i)}finally{Q.p=s,D.T=l}}function _x(e,t,n,i){var l=D.T;D.T=null;var s=Q.p;try{Q.p=8,yc(e,t,n,i)}finally{Q.p=s,D.T=l}}function yc(e,t,n,i){if(Ss){var l=vc(i);if(l===null)lc(e,t,i,ws,n),ih(e,i);else if(Cx(l,e,t,n,i))i.stopPropagation();else if(ih(e,i),t&4&&-1<Rx.indexOf(e)){for(;l!==null;){var s=ni(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var h=Bt(s.pendingLanes);if(h!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;h;){var v=1<<31-Ze(h);m.entanglements[1]|=v,h&=~v}Dn(s),($e&6)===0&&(ls=nt()+500,Ml(0))}}break;case 13:m=pi(s,2),m!==null&&ln(m,s,2),ss(),xc(s,2)}if(s=vc(i),s===null&&lc(e,t,i,ws,n),s===l)break;l=s}l!==null&&i.stopPropagation()}else lc(e,t,i,null,n)}}function vc(e){return e=Eu(e),bc(e)}var ws=null;function bc(e){if(ws=null,e=ti(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ws=e,null}function ah(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nn()){case Wt:return 2;case S:return 8;case j:case B:return 32;case ie:return 268435456;default:return 32}default:return 32}}var Sc=!1,va=null,ba=null,Sa=null,Gl=new Map,Xl=new Map,wa=[],Rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ih(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":Gl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xl.delete(t.pointerId)}}function Zl(e,t,n,i,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[l]},t!==null&&(t=ni(t),t!==null&&nh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Cx(e,t,n,i,l){switch(t){case"focusin":return va=Zl(va,e,t,n,i,l),!0;case"dragenter":return ba=Zl(ba,e,t,n,i,l),!0;case"mouseover":return Sa=Zl(Sa,e,t,n,i,l),!0;case"pointerover":var s=l.pointerId;return Gl.set(s,Zl(Gl.get(s)||null,e,t,n,i,l)),!0;case"gotpointercapture":return s=l.pointerId,Xl.set(s,Zl(Xl.get(s)||null,e,t,n,i,l)),!0}return!1}function lh(e){var t=ti(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,zm(e.priority,function(){if(n.tag===13){var i=an();i=du(i);var l=pi(n,i);l!==null&&ln(l,n,i),xc(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Es(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);wu=i,n.target.dispatchEvent(i),wu=null}else return t=ni(n),t!==null&&nh(t),e.blockedOn=n,!1;t.shift()}return!0}function rh(e,t,n){Es(e)&&n.delete(t)}function kx(){Sc=!1,va!==null&&Es(va)&&(va=null),ba!==null&&Es(ba)&&(ba=null),Sa!==null&&Es(Sa)&&(Sa=null),Gl.forEach(rh),Xl.forEach(rh)}function As(e,t){e.blockedOn===t&&(e.blockedOn=null,Sc||(Sc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,kx)))}var zs=null;function sh(e){zs!==e&&(zs=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){zs===e&&(zs=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(bc(i||n)===null)continue;break}var s=ni(n);s!==null&&(e.splice(t,3),t-=3,bo(s,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function $l(e){function t(v){return As(v,e)}va!==null&&As(va,e),ba!==null&&As(ba,e),Sa!==null&&As(Sa,e),Gl.forEach(t),Xl.forEach(t);for(var n=0;n<wa.length;n++){var i=wa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<wa.length&&(n=wa[0],n.blockedOn===null);)lh(n),n.blockedOn===null&&wa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],s=n[i+1],h=l[Vt]||null;if(typeof s=="function")h||sh(n);else if(h){var m=null;if(s&&s.hasAttribute("formAction")){if(l=s,h=s[Vt]||null)m=h.formAction;else if(bc(l)!==null)continue}else m=h.action;typeof m=="function"?n[i+1]=m:(n.splice(i,3),i-=3),sh(n)}}}function wc(e){this._internalRoot=e}Ts.prototype.render=wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=an();eh(n,i,e,t,null,null)},Ts.prototype.unmount=wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;eh(e.current,2,null,e,null,null),ss(),t[ei]=null}};function Ts(e){this._internalRoot=e}Ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=Af();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wa.length&&t!==0&&t<wa[n].priority;n++);wa.splice(n,0,e),n===0&&lh(e)}};var uh=r.version;if(uh!=="19.1.1")throw Error(o(527,uh,"19.1.1"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=w(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Nx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var js=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!js.isDisabled&&js.supportsFiber)try{oe=js.inject(Nx),Ae=js}catch{}}return Kl.createRoot=function(e,t){if(!c(e))throw Error(o(299));var n=!1,i="",l=A0,s=z0,h=T0,m=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=I1(e,1,!1,null,null,n,i,l,s,h,m,null),e[ei]=t.current,ic(e),new wc(t)},Kl.hydrateRoot=function(e,t,n){if(!c(e))throw Error(o(299));var i=!1,l="",s=A0,h=z0,m=T0,v=null,_=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(v=n.unstable_transitionCallbacks),n.formState!==void 0&&(_=n.formState)),t=I1(e,1,!0,t,n??null,i,l,s,h,m,v,_),t.context=P1(null),n=t.current,i=an(),i=du(i),l=la(i),l.callback=null,ra(n,l,i),n=i,t.current.lanes=n,Pa(t,n),Dn(t),e[ei]=t.current,ic(e),new Ts(t)},Kl.version="19.1.1",Kl}var yh;function Xx(){if(yh)return zc.exports;yh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),zc.exports=Gx(),zc.exports}var Zx=Xx();function xp(a,r){return function(){return a.apply(r,arguments)}}const{toString:$x}=Object.prototype,{getPrototypeOf:nf}=Object,{iterator:Js,toStringTag:yp}=Symbol,Fs=(a=>r=>{const u=$x.call(r);return a[u]||(a[u]=u.slice(8,-1).toLowerCase())})(Object.create(null)),An=a=>(a=a.toLowerCase(),r=>Fs(r)===a),Ws=a=>r=>typeof r===a,{isArray:Ki}=Array,nr=Ws("undefined");function sr(a){return a!==null&&!nr(a)&&a.constructor!==null&&!nr(a.constructor)&&Kt(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const vp=An("ArrayBuffer");function Qx(a){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(a):r=a&&a.buffer&&vp(a.buffer),r}const Kx=Ws("string"),Kt=Ws("function"),bp=Ws("number"),ur=a=>a!==null&&typeof a=="object",Jx=a=>a===!0||a===!1,Rs=a=>{if(Fs(a)!=="object")return!1;const r=nf(a);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(yp in a)&&!(Js in a)},Fx=a=>{if(!ur(a)||sr(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},Wx=An("Date"),Ix=An("File"),Px=An("Blob"),ey=An("FileList"),ty=a=>ur(a)&&Kt(a.pipe),ny=a=>{let r;return a&&(typeof FormData=="function"&&a instanceof FormData||Kt(a.append)&&((r=Fs(a))==="formdata"||r==="object"&&Kt(a.toString)&&a.toString()==="[object FormData]"))},ay=An("URLSearchParams"),[iy,ly,ry,sy]=["ReadableStream","Request","Response","Headers"].map(An),uy=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function or(a,r,{allOwnKeys:u=!1}={}){if(a===null||typeof a>"u")return;let o,c;if(typeof a!="object"&&(a=[a]),Ki(a))for(o=0,c=a.length;o<c;o++)r.call(null,a[o],o,a);else{if(sr(a))return;const d=u?Object.getOwnPropertyNames(a):Object.keys(a),p=d.length;let g;for(o=0;o<p;o++)g=d[o],r.call(null,a[g],g,a)}}function Sp(a,r){if(sr(a))return null;r=r.toLowerCase();const u=Object.keys(a);let o=u.length,c;for(;o-- >0;)if(c=u[o],r===c.toLowerCase())return c;return null}const Za=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,wp=a=>!nr(a)&&a!==Za;function qc(){const{caseless:a}=wp(this)&&this||{},r={},u=(o,c)=>{const d=a&&Sp(r,c)||c;Rs(r[d])&&Rs(o)?r[d]=qc(r[d],o):Rs(o)?r[d]=qc({},o):Ki(o)?r[d]=o.slice():r[d]=o};for(let o=0,c=arguments.length;o<c;o++)arguments[o]&&or(arguments[o],u);return r}const oy=(a,r,u,{allOwnKeys:o}={})=>(or(r,(c,d)=>{u&&Kt(c)?a[d]=xp(c,u):a[d]=c},{allOwnKeys:o}),a),cy=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),fy=(a,r,u,o)=>{a.prototype=Object.create(r.prototype,o),a.prototype.constructor=a,Object.defineProperty(a,"super",{value:r.prototype}),u&&Object.assign(a.prototype,u)},dy=(a,r,u,o)=>{let c,d,p;const g={};if(r=r||{},a==null)return r;do{for(c=Object.getOwnPropertyNames(a),d=c.length;d-- >0;)p=c[d],(!o||o(p,a,r))&&!g[p]&&(r[p]=a[p],g[p]=!0);a=u!==!1&&nf(a)}while(a&&(!u||u(a,r))&&a!==Object.prototype);return r},hy=(a,r,u)=>{a=String(a),(u===void 0||u>a.length)&&(u=a.length),u-=r.length;const o=a.indexOf(r,u);return o!==-1&&o===u},py=a=>{if(!a)return null;if(Ki(a))return a;let r=a.length;if(!bp(r))return null;const u=new Array(r);for(;r-- >0;)u[r]=a[r];return u},my=(a=>r=>a&&r instanceof a)(typeof Uint8Array<"u"&&nf(Uint8Array)),gy=(a,r)=>{const o=(a&&a[Js]).call(a);let c;for(;(c=o.next())&&!c.done;){const d=c.value;r.call(a,d[0],d[1])}},xy=(a,r)=>{let u;const o=[];for(;(u=a.exec(r))!==null;)o.push(u);return o},yy=An("HTMLFormElement"),vy=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(u,o,c){return o.toUpperCase()+c}),vh=(({hasOwnProperty:a})=>(r,u)=>a.call(r,u))(Object.prototype),by=An("RegExp"),Ep=(a,r)=>{const u=Object.getOwnPropertyDescriptors(a),o={};or(u,(c,d)=>{let p;(p=r(c,d,a))!==!1&&(o[d]=p||c)}),Object.defineProperties(a,o)},Sy=a=>{Ep(a,(r,u)=>{if(Kt(a)&&["arguments","caller","callee"].indexOf(u)!==-1)return!1;const o=a[u];if(Kt(o)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+u+"'")})}})},wy=(a,r)=>{const u={},o=c=>{c.forEach(d=>{u[d]=!0})};return Ki(a)?o(a):o(String(a).split(r)),u},Ey=()=>{},Ay=(a,r)=>a!=null&&Number.isFinite(a=+a)?a:r;function zy(a){return!!(a&&Kt(a.append)&&a[yp]==="FormData"&&a[Js])}const Ty=a=>{const r=new Array(10),u=(o,c)=>{if(ur(o)){if(r.indexOf(o)>=0)return;if(sr(o))return o;if(!("toJSON"in o)){r[c]=o;const d=Ki(o)?[]:{};return or(o,(p,g)=>{const w=u(p,c+1);!nr(w)&&(d[g]=w)}),r[c]=void 0,d}}return o};return u(a,0)},jy=An("AsyncFunction"),Oy=a=>a&&(ur(a)||Kt(a))&&Kt(a.then)&&Kt(a.catch),Ap=((a,r)=>a?setImmediate:r?((u,o)=>(Za.addEventListener("message",({source:c,data:d})=>{c===Za&&d===u&&o.length&&o.shift()()},!1),c=>{o.push(c),Za.postMessage(u,"*")}))(`axios@${Math.random()}`,[]):u=>setTimeout(u))(typeof setImmediate=="function",Kt(Za.postMessage)),Dy=typeof queueMicrotask<"u"?queueMicrotask.bind(Za):typeof process<"u"&&process.nextTick||Ap,_y=a=>a!=null&&Kt(a[Js]),U={isArray:Ki,isArrayBuffer:vp,isBuffer:sr,isFormData:ny,isArrayBufferView:Qx,isString:Kx,isNumber:bp,isBoolean:Jx,isObject:ur,isPlainObject:Rs,isEmptyObject:Fx,isReadableStream:iy,isRequest:ly,isResponse:ry,isHeaders:sy,isUndefined:nr,isDate:Wx,isFile:Ix,isBlob:Px,isRegExp:by,isFunction:Kt,isStream:ty,isURLSearchParams:ay,isTypedArray:my,isFileList:ey,forEach:or,merge:qc,extend:oy,trim:uy,stripBOM:cy,inherits:fy,toFlatObject:dy,kindOf:Fs,kindOfTest:An,endsWith:hy,toArray:py,forEachEntry:gy,matchAll:xy,isHTMLForm:yy,hasOwnProperty:vh,hasOwnProp:vh,reduceDescriptors:Ep,freezeMethods:Sy,toObjectSet:wy,toCamelCase:vy,noop:Ey,toFiniteNumber:Ay,findKey:Sp,global:Za,isContextDefined:wp,isSpecCompliantForm:zy,toJSONObject:Ty,isAsyncFn:jy,isThenable:Oy,setImmediate:Ap,asap:Dy,isIterable:_y};function Oe(a,r,u,o,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=a,this.name="AxiosError",r&&(this.code=r),u&&(this.config=u),o&&(this.request=o),c&&(this.response=c,this.status=c.status?c.status:null)}U.inherits(Oe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.status}}});const zp=Oe.prototype,Tp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(a=>{Tp[a]={value:a}});Object.defineProperties(Oe,Tp);Object.defineProperty(zp,"isAxiosError",{value:!0});Oe.from=(a,r,u,o,c,d)=>{const p=Object.create(zp);return U.toFlatObject(a,p,function(w){return w!==Error.prototype},g=>g!=="isAxiosError"),Oe.call(p,a.message,r,u,o,c),p.cause=a,p.name=a.name,d&&Object.assign(p,d),p};const Ry=null;function Vc(a){return U.isPlainObject(a)||U.isArray(a)}function jp(a){return U.endsWith(a,"[]")?a.slice(0,-2):a}function bh(a,r,u){return a?a.concat(r).map(function(c,d){return c=jp(c),!u&&d?"["+c+"]":c}).join(u?".":""):r}function Cy(a){return U.isArray(a)&&!a.some(Vc)}const ky=U.toFlatObject(U,{},null,function(r){return/^is[A-Z]/.test(r)});function Is(a,r,u){if(!U.isObject(a))throw new TypeError("target must be an object");r=r||new FormData,u=U.toFlatObject(u,{metaTokens:!0,dots:!1,indexes:!1},!1,function(V,R){return!U.isUndefined(R[V])});const o=u.metaTokens,c=u.visitor||b,d=u.dots,p=u.indexes,w=(u.Blob||typeof Blob<"u"&&Blob)&&U.isSpecCompliantForm(r);if(!U.isFunction(c))throw new TypeError("visitor must be a function");function x(M){if(M===null)return"";if(U.isDate(M))return M.toISOString();if(U.isBoolean(M))return M.toString();if(!w&&U.isBlob(M))throw new Oe("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(M)||U.isTypedArray(M)?w&&typeof Blob=="function"?new Blob([M]):Buffer.from(M):M}function b(M,V,R){let J=M;if(M&&!R&&typeof M=="object"){if(U.endsWith(V,"{}"))V=o?V:V.slice(0,-2),M=JSON.stringify(M);else if(U.isArray(M)&&Cy(M)||(U.isFileList(M)||U.endsWith(V,"[]"))&&(J=U.toArray(M)))return V=jp(V),J.forEach(function(Z,le){!(U.isUndefined(Z)||Z===null)&&r.append(p===!0?bh([V],le,d):p===null?V:V+"[]",x(Z))}),!1}return Vc(M)?!0:(r.append(bh(R,V,d),x(M)),!1)}const E=[],A=Object.assign(ky,{defaultVisitor:b,convertValue:x,isVisitable:Vc});function K(M,V){if(!U.isUndefined(M)){if(E.indexOf(M)!==-1)throw Error("Circular reference detected in "+V.join("."));E.push(M),U.forEach(M,function(J,H){(!(U.isUndefined(J)||J===null)&&c.call(r,J,U.isString(H)?H.trim():H,V,A))===!0&&K(J,V?V.concat(H):[H])}),E.pop()}}if(!U.isObject(a))throw new TypeError("data must be an object");return K(a),r}function Sh(a){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(o){return r[o]})}function af(a,r){this._pairs=[],a&&Is(a,this,r)}const Op=af.prototype;Op.append=function(r,u){this._pairs.push([r,u])};Op.toString=function(r){const u=r?function(o){return r.call(this,o,Sh)}:Sh;return this._pairs.map(function(c){return u(c[0])+"="+u(c[1])},"").join("&")};function Ny(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Dp(a,r,u){if(!r)return a;const o=u&&u.encode||Ny;U.isFunction(u)&&(u={serialize:u});const c=u&&u.serialize;let d;if(c?d=c(r,u):d=U.isURLSearchParams(r)?r.toString():new af(r,u).toString(o),d){const p=a.indexOf("#");p!==-1&&(a=a.slice(0,p)),a+=(a.indexOf("?")===-1?"?":"&")+d}return a}class wh{constructor(){this.handlers=[]}use(r,u,o){return this.handlers.push({fulfilled:r,rejected:u,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){U.forEach(this.handlers,function(o){o!==null&&r(o)})}}const _p={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},My=typeof URLSearchParams<"u"?URLSearchParams:af,Uy=typeof FormData<"u"?FormData:null,By=typeof Blob<"u"?Blob:null,Hy={isBrowser:!0,classes:{URLSearchParams:My,FormData:Uy,Blob:By},protocols:["http","https","file","blob","url","data"]},lf=typeof window<"u"&&typeof document<"u",Yc=typeof navigator=="object"&&navigator||void 0,Ly=lf&&(!Yc||["ReactNative","NativeScript","NS"].indexOf(Yc.product)<0),qy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Vy=lf&&window.location.href||"http://localhost",Yy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:lf,hasStandardBrowserEnv:Ly,hasStandardBrowserWebWorkerEnv:qy,navigator:Yc,origin:Vy},Symbol.toStringTag,{value:"Module"})),kt={...Yy,...Hy};function Gy(a,r){return Is(a,new kt.classes.URLSearchParams,{visitor:function(u,o,c,d){return kt.isNode&&U.isBuffer(u)?(this.append(o,u.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)},...r})}function Xy(a){return U.matchAll(/\w+|\[(\w*)]/g,a).map(r=>r[0]==="[]"?"":r[1]||r[0])}function Zy(a){const r={},u=Object.keys(a);let o;const c=u.length;let d;for(o=0;o<c;o++)d=u[o],r[d]=a[d];return r}function Rp(a){function r(u,o,c,d){let p=u[d++];if(p==="__proto__")return!0;const g=Number.isFinite(+p),w=d>=u.length;return p=!p&&U.isArray(c)?c.length:p,w?(U.hasOwnProp(c,p)?c[p]=[c[p],o]:c[p]=o,!g):((!c[p]||!U.isObject(c[p]))&&(c[p]=[]),r(u,o,c[p],d)&&U.isArray(c[p])&&(c[p]=Zy(c[p])),!g)}if(U.isFormData(a)&&U.isFunction(a.entries)){const u={};return U.forEachEntry(a,(o,c)=>{r(Xy(o),c,u,0)}),u}return null}function $y(a,r,u){if(U.isString(a))try{return(r||JSON.parse)(a),U.trim(a)}catch(o){if(o.name!=="SyntaxError")throw o}return(u||JSON.stringify)(a)}const cr={transitional:_p,adapter:["xhr","http","fetch"],transformRequest:[function(r,u){const o=u.getContentType()||"",c=o.indexOf("application/json")>-1,d=U.isObject(r);if(d&&U.isHTMLForm(r)&&(r=new FormData(r)),U.isFormData(r))return c?JSON.stringify(Rp(r)):r;if(U.isArrayBuffer(r)||U.isBuffer(r)||U.isStream(r)||U.isFile(r)||U.isBlob(r)||U.isReadableStream(r))return r;if(U.isArrayBufferView(r))return r.buffer;if(U.isURLSearchParams(r))return u.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let g;if(d){if(o.indexOf("application/x-www-form-urlencoded")>-1)return Gy(r,this.formSerializer).toString();if((g=U.isFileList(r))||o.indexOf("multipart/form-data")>-1){const w=this.env&&this.env.FormData;return Is(g?{"files[]":r}:r,w&&new w,this.formSerializer)}}return d||c?(u.setContentType("application/json",!1),$y(r)):r}],transformResponse:[function(r){const u=this.transitional||cr.transitional,o=u&&u.forcedJSONParsing,c=this.responseType==="json";if(U.isResponse(r)||U.isReadableStream(r))return r;if(r&&U.isString(r)&&(o&&!this.responseType||c)){const p=!(u&&u.silentJSONParsing)&&c;try{return JSON.parse(r)}catch(g){if(p)throw g.name==="SyntaxError"?Oe.from(g,Oe.ERR_BAD_RESPONSE,this,null,this.response):g}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:kt.classes.FormData,Blob:kt.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};U.forEach(["delete","get","head","post","put","patch"],a=>{cr.headers[a]={}});const Qy=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ky=a=>{const r={};let u,o,c;return a&&a.split(`
`).forEach(function(p){c=p.indexOf(":"),u=p.substring(0,c).trim().toLowerCase(),o=p.substring(c+1).trim(),!(!u||r[u]&&Qy[u])&&(u==="set-cookie"?r[u]?r[u].push(o):r[u]=[o]:r[u]=r[u]?r[u]+", "+o:o)}),r},Eh=Symbol("internals");function Jl(a){return a&&String(a).trim().toLowerCase()}function Cs(a){return a===!1||a==null?a:U.isArray(a)?a.map(Cs):String(a)}function Jy(a){const r=Object.create(null),u=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=u.exec(a);)r[o[1]]=o[2];return r}const Fy=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function Dc(a,r,u,o,c){if(U.isFunction(o))return o.call(this,r,u);if(c&&(r=u),!!U.isString(r)){if(U.isString(o))return r.indexOf(o)!==-1;if(U.isRegExp(o))return o.test(r)}}function Wy(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,u,o)=>u.toUpperCase()+o)}function Iy(a,r){const u=U.toCamelCase(" "+r);["get","set","has"].forEach(o=>{Object.defineProperty(a,o+u,{value:function(c,d,p){return this[o].call(this,r,c,d,p)},configurable:!0})})}let Jt=class{constructor(r){r&&this.set(r)}set(r,u,o){const c=this;function d(g,w,x){const b=Jl(w);if(!b)throw new Error("header name must be a non-empty string");const E=U.findKey(c,b);(!E||c[E]===void 0||x===!0||x===void 0&&c[E]!==!1)&&(c[E||w]=Cs(g))}const p=(g,w)=>U.forEach(g,(x,b)=>d(x,b,w));if(U.isPlainObject(r)||r instanceof this.constructor)p(r,u);else if(U.isString(r)&&(r=r.trim())&&!Fy(r))p(Ky(r),u);else if(U.isObject(r)&&U.isIterable(r)){let g={},w,x;for(const b of r){if(!U.isArray(b))throw TypeError("Object iterator must return a key-value pair");g[x=b[0]]=(w=g[x])?U.isArray(w)?[...w,b[1]]:[w,b[1]]:b[1]}p(g,u)}else r!=null&&d(u,r,o);return this}get(r,u){if(r=Jl(r),r){const o=U.findKey(this,r);if(o){const c=this[o];if(!u)return c;if(u===!0)return Jy(c);if(U.isFunction(u))return u.call(this,c,o);if(U.isRegExp(u))return u.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,u){if(r=Jl(r),r){const o=U.findKey(this,r);return!!(o&&this[o]!==void 0&&(!u||Dc(this,this[o],o,u)))}return!1}delete(r,u){const o=this;let c=!1;function d(p){if(p=Jl(p),p){const g=U.findKey(o,p);g&&(!u||Dc(o,o[g],g,u))&&(delete o[g],c=!0)}}return U.isArray(r)?r.forEach(d):d(r),c}clear(r){const u=Object.keys(this);let o=u.length,c=!1;for(;o--;){const d=u[o];(!r||Dc(this,this[d],d,r,!0))&&(delete this[d],c=!0)}return c}normalize(r){const u=this,o={};return U.forEach(this,(c,d)=>{const p=U.findKey(o,d);if(p){u[p]=Cs(c),delete u[d];return}const g=r?Wy(d):String(d).trim();g!==d&&delete u[d],u[g]=Cs(c),o[g]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const u=Object.create(null);return U.forEach(this,(o,c)=>{o!=null&&o!==!1&&(u[c]=r&&U.isArray(o)?o.join(", "):o)}),u}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,u])=>r+": "+u).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...u){const o=new this(r);return u.forEach(c=>o.set(c)),o}static accessor(r){const o=(this[Eh]=this[Eh]={accessors:{}}).accessors,c=this.prototype;function d(p){const g=Jl(p);o[g]||(Iy(c,p),o[g]=!0)}return U.isArray(r)?r.forEach(d):d(r),this}};Jt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);U.reduceDescriptors(Jt.prototype,({value:a},r)=>{let u=r[0].toUpperCase()+r.slice(1);return{get:()=>a,set(o){this[u]=o}}});U.freezeMethods(Jt);function _c(a,r){const u=this||cr,o=r||u,c=Jt.from(o.headers);let d=o.data;return U.forEach(a,function(g){d=g.call(u,d,c.normalize(),r?r.status:void 0)}),c.normalize(),d}function Cp(a){return!!(a&&a.__CANCEL__)}function Ji(a,r,u){Oe.call(this,a??"canceled",Oe.ERR_CANCELED,r,u),this.name="CanceledError"}U.inherits(Ji,Oe,{__CANCEL__:!0});function kp(a,r,u){const o=u.config.validateStatus;!u.status||!o||o(u.status)?a(u):r(new Oe("Request failed with status code "+u.status,[Oe.ERR_BAD_REQUEST,Oe.ERR_BAD_RESPONSE][Math.floor(u.status/100)-4],u.config,u.request,u))}function Py(a){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return r&&r[1]||""}function e3(a,r){a=a||10;const u=new Array(a),o=new Array(a);let c=0,d=0,p;return r=r!==void 0?r:1e3,function(w){const x=Date.now(),b=o[d];p||(p=x),u[c]=w,o[c]=x;let E=d,A=0;for(;E!==c;)A+=u[E++],E=E%a;if(c=(c+1)%a,c===d&&(d=(d+1)%a),x-p<r)return;const K=b&&x-b;return K?Math.round(A*1e3/K):void 0}}function t3(a,r){let u=0,o=1e3/r,c,d;const p=(x,b=Date.now())=>{u=b,c=null,d&&(clearTimeout(d),d=null),a(...x)};return[(...x)=>{const b=Date.now(),E=b-u;E>=o?p(x,b):(c=x,d||(d=setTimeout(()=>{d=null,p(c)},o-E)))},()=>c&&p(c)]}const qs=(a,r,u=3)=>{let o=0;const c=e3(50,250);return t3(d=>{const p=d.loaded,g=d.lengthComputable?d.total:void 0,w=p-o,x=c(w),b=p<=g;o=p;const E={loaded:p,total:g,progress:g?p/g:void 0,bytes:w,rate:x||void 0,estimated:x&&g&&b?(g-p)/x:void 0,event:d,lengthComputable:g!=null,[r?"download":"upload"]:!0};a(E)},u)},Ah=(a,r)=>{const u=a!=null;return[o=>r[0]({lengthComputable:u,total:a,loaded:o}),r[1]]},zh=a=>(...r)=>U.asap(()=>a(...r)),n3=kt.hasStandardBrowserEnv?((a,r)=>u=>(u=new URL(u,kt.origin),a.protocol===u.protocol&&a.host===u.host&&(r||a.port===u.port)))(new URL(kt.origin),kt.navigator&&/(msie|trident)/i.test(kt.navigator.userAgent)):()=>!0,a3=kt.hasStandardBrowserEnv?{write(a,r,u,o,c,d){const p=[a+"="+encodeURIComponent(r)];U.isNumber(u)&&p.push("expires="+new Date(u).toGMTString()),U.isString(o)&&p.push("path="+o),U.isString(c)&&p.push("domain="+c),d===!0&&p.push("secure"),document.cookie=p.join("; ")},read(a){const r=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(a){this.write(a,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function i3(a){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function l3(a,r){return r?a.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):a}function Np(a,r,u){let o=!i3(r);return a&&(o||u==!1)?l3(a,r):r}const Th=a=>a instanceof Jt?{...a}:a;function Wa(a,r){r=r||{};const u={};function o(x,b,E,A){return U.isPlainObject(x)&&U.isPlainObject(b)?U.merge.call({caseless:A},x,b):U.isPlainObject(b)?U.merge({},b):U.isArray(b)?b.slice():b}function c(x,b,E,A){if(U.isUndefined(b)){if(!U.isUndefined(x))return o(void 0,x,E,A)}else return o(x,b,E,A)}function d(x,b){if(!U.isUndefined(b))return o(void 0,b)}function p(x,b){if(U.isUndefined(b)){if(!U.isUndefined(x))return o(void 0,x)}else return o(void 0,b)}function g(x,b,E){if(E in r)return o(x,b);if(E in a)return o(void 0,x)}const w={url:d,method:d,data:d,baseURL:p,transformRequest:p,transformResponse:p,paramsSerializer:p,timeout:p,timeoutMessage:p,withCredentials:p,withXSRFToken:p,adapter:p,responseType:p,xsrfCookieName:p,xsrfHeaderName:p,onUploadProgress:p,onDownloadProgress:p,decompress:p,maxContentLength:p,maxBodyLength:p,beforeRedirect:p,transport:p,httpAgent:p,httpsAgent:p,cancelToken:p,socketPath:p,responseEncoding:p,validateStatus:g,headers:(x,b,E)=>c(Th(x),Th(b),E,!0)};return U.forEach(Object.keys({...a,...r}),function(b){const E=w[b]||c,A=E(a[b],r[b],b);U.isUndefined(A)&&E!==g||(u[b]=A)}),u}const Mp=a=>{const r=Wa({},a);let{data:u,withXSRFToken:o,xsrfHeaderName:c,xsrfCookieName:d,headers:p,auth:g}=r;r.headers=p=Jt.from(p),r.url=Dp(Np(r.baseURL,r.url,r.allowAbsoluteUrls),a.params,a.paramsSerializer),g&&p.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):"")));let w;if(U.isFormData(u)){if(kt.hasStandardBrowserEnv||kt.hasStandardBrowserWebWorkerEnv)p.setContentType(void 0);else if((w=p.getContentType())!==!1){const[x,...b]=w?w.split(";").map(E=>E.trim()).filter(Boolean):[];p.setContentType([x||"multipart/form-data",...b].join("; "))}}if(kt.hasStandardBrowserEnv&&(o&&U.isFunction(o)&&(o=o(r)),o||o!==!1&&n3(r.url))){const x=c&&d&&a3.read(d);x&&p.set(c,x)}return r},r3=typeof XMLHttpRequest<"u",s3=r3&&function(a){return new Promise(function(u,o){const c=Mp(a);let d=c.data;const p=Jt.from(c.headers).normalize();let{responseType:g,onUploadProgress:w,onDownloadProgress:x}=c,b,E,A,K,M;function V(){K&&K(),M&&M(),c.cancelToken&&c.cancelToken.unsubscribe(b),c.signal&&c.signal.removeEventListener("abort",b)}let R=new XMLHttpRequest;R.open(c.method.toUpperCase(),c.url,!0),R.timeout=c.timeout;function J(){if(!R)return;const Z=Jt.from("getAllResponseHeaders"in R&&R.getAllResponseHeaders()),L={data:!g||g==="text"||g==="json"?R.responseText:R.response,status:R.status,statusText:R.statusText,headers:Z,config:a,request:R};kp(function($){u($),V()},function($){o($),V()},L),R=null}"onloadend"in R?R.onloadend=J:R.onreadystatechange=function(){!R||R.readyState!==4||R.status===0&&!(R.responseURL&&R.responseURL.indexOf("file:")===0)||setTimeout(J)},R.onabort=function(){R&&(o(new Oe("Request aborted",Oe.ECONNABORTED,a,R)),R=null)},R.onerror=function(){o(new Oe("Network Error",Oe.ERR_NETWORK,a,R)),R=null},R.ontimeout=function(){let le=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const L=c.transitional||_p;c.timeoutErrorMessage&&(le=c.timeoutErrorMessage),o(new Oe(le,L.clarifyTimeoutError?Oe.ETIMEDOUT:Oe.ECONNABORTED,a,R)),R=null},d===void 0&&p.setContentType(null),"setRequestHeader"in R&&U.forEach(p.toJSON(),function(le,L){R.setRequestHeader(L,le)}),U.isUndefined(c.withCredentials)||(R.withCredentials=!!c.withCredentials),g&&g!=="json"&&(R.responseType=c.responseType),x&&([A,M]=qs(x,!0),R.addEventListener("progress",A)),w&&R.upload&&([E,K]=qs(w),R.upload.addEventListener("progress",E),R.upload.addEventListener("loadend",K)),(c.cancelToken||c.signal)&&(b=Z=>{R&&(o(!Z||Z.type?new Ji(null,a,R):Z),R.abort(),R=null)},c.cancelToken&&c.cancelToken.subscribe(b),c.signal&&(c.signal.aborted?b():c.signal.addEventListener("abort",b)));const H=Py(c.url);if(H&&kt.protocols.indexOf(H)===-1){o(new Oe("Unsupported protocol "+H+":",Oe.ERR_BAD_REQUEST,a));return}R.send(d||null)})},u3=(a,r)=>{const{length:u}=a=a?a.filter(Boolean):[];if(r||u){let o=new AbortController,c;const d=function(x){if(!c){c=!0,g();const b=x instanceof Error?x:this.reason;o.abort(b instanceof Oe?b:new Ji(b instanceof Error?b.message:b))}};let p=r&&setTimeout(()=>{p=null,d(new Oe(`timeout ${r} of ms exceeded`,Oe.ETIMEDOUT))},r);const g=()=>{a&&(p&&clearTimeout(p),p=null,a.forEach(x=>{x.unsubscribe?x.unsubscribe(d):x.removeEventListener("abort",d)}),a=null)};a.forEach(x=>x.addEventListener("abort",d));const{signal:w}=o;return w.unsubscribe=()=>U.asap(g),w}},o3=function*(a,r){let u=a.byteLength;if(u<r){yield a;return}let o=0,c;for(;o<u;)c=o+r,yield a.slice(o,c),o=c},c3=async function*(a,r){for await(const u of f3(a))yield*o3(u,r)},f3=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const r=a.getReader();try{for(;;){const{done:u,value:o}=await r.read();if(u)break;yield o}}finally{await r.cancel()}},jh=(a,r,u,o)=>{const c=c3(a,r);let d=0,p,g=w=>{p||(p=!0,o&&o(w))};return new ReadableStream({async pull(w){try{const{done:x,value:b}=await c.next();if(x){g(),w.close();return}let E=b.byteLength;if(u){let A=d+=E;u(A)}w.enqueue(new Uint8Array(b))}catch(x){throw g(x),x}},cancel(w){return g(w),c.return()}},{highWaterMark:2})},Ps=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Up=Ps&&typeof ReadableStream=="function",d3=Ps&&(typeof TextEncoder=="function"?(a=>r=>a.encode(r))(new TextEncoder):async a=>new Uint8Array(await new Response(a).arrayBuffer())),Bp=(a,...r)=>{try{return!!a(...r)}catch{return!1}},h3=Up&&Bp(()=>{let a=!1;const r=new Request(kt.origin,{body:new ReadableStream,method:"POST",get duplex(){return a=!0,"half"}}).headers.has("Content-Type");return a&&!r}),Oh=64*1024,Gc=Up&&Bp(()=>U.isReadableStream(new Response("").body)),Vs={stream:Gc&&(a=>a.body)};Ps&&(a=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!Vs[r]&&(Vs[r]=U.isFunction(a[r])?u=>u[r]():(u,o)=>{throw new Oe(`Response type '${r}' is not supported`,Oe.ERR_NOT_SUPPORT,o)})})})(new Response);const p3=async a=>{if(a==null)return 0;if(U.isBlob(a))return a.size;if(U.isSpecCompliantForm(a))return(await new Request(kt.origin,{method:"POST",body:a}).arrayBuffer()).byteLength;if(U.isArrayBufferView(a)||U.isArrayBuffer(a))return a.byteLength;if(U.isURLSearchParams(a)&&(a=a+""),U.isString(a))return(await d3(a)).byteLength},m3=async(a,r)=>{const u=U.toFiniteNumber(a.getContentLength());return u??p3(r)},g3=Ps&&(async a=>{let{url:r,method:u,data:o,signal:c,cancelToken:d,timeout:p,onDownloadProgress:g,onUploadProgress:w,responseType:x,headers:b,withCredentials:E="same-origin",fetchOptions:A}=Mp(a);x=x?(x+"").toLowerCase():"text";let K=u3([c,d&&d.toAbortSignal()],p),M;const V=K&&K.unsubscribe&&(()=>{K.unsubscribe()});let R;try{if(w&&h3&&u!=="get"&&u!=="head"&&(R=await m3(b,o))!==0){let L=new Request(r,{method:"POST",body:o,duplex:"half"}),ne;if(U.isFormData(o)&&(ne=L.headers.get("content-type"))&&b.setContentType(ne),L.body){const[$,re]=Ah(R,qs(zh(w)));o=jh(L.body,Oh,$,re)}}U.isString(E)||(E=E?"include":"omit");const J="credentials"in Request.prototype;M=new Request(r,{...A,signal:K,method:u.toUpperCase(),headers:b.normalize().toJSON(),body:o,duplex:"half",credentials:J?E:void 0});let H=await fetch(M,A);const Z=Gc&&(x==="stream"||x==="response");if(Gc&&(g||Z&&V)){const L={};["status","statusText","headers"].forEach(be=>{L[be]=H[be]});const ne=U.toFiniteNumber(H.headers.get("content-length")),[$,re]=g&&Ah(ne,qs(zh(g),!0))||[];H=new Response(jh(H.body,Oh,$,()=>{re&&re(),V&&V()}),L)}x=x||"text";let le=await Vs[U.findKey(Vs,x)||"text"](H,a);return!Z&&V&&V(),await new Promise((L,ne)=>{kp(L,ne,{data:le,headers:Jt.from(H.headers),status:H.status,statusText:H.statusText,config:a,request:M})})}catch(J){throw V&&V(),J&&J.name==="TypeError"&&/Load failed|fetch/i.test(J.message)?Object.assign(new Oe("Network Error",Oe.ERR_NETWORK,a,M),{cause:J.cause||J}):Oe.from(J,J&&J.code,a,M)}}),Xc={http:Ry,xhr:s3,fetch:g3};U.forEach(Xc,(a,r)=>{if(a){try{Object.defineProperty(a,"name",{value:r})}catch{}Object.defineProperty(a,"adapterName",{value:r})}});const Dh=a=>`- ${a}`,x3=a=>U.isFunction(a)||a===null||a===!1,Hp={getAdapter:a=>{a=U.isArray(a)?a:[a];const{length:r}=a;let u,o;const c={};for(let d=0;d<r;d++){u=a[d];let p;if(o=u,!x3(u)&&(o=Xc[(p=String(u)).toLowerCase()],o===void 0))throw new Oe(`Unknown adapter '${p}'`);if(o)break;c[p||"#"+d]=o}if(!o){const d=Object.entries(c).map(([g,w])=>`adapter ${g} `+(w===!1?"is not supported by the environment":"is not available in the build"));let p=r?d.length>1?`since :
`+d.map(Dh).join(`
`):" "+Dh(d[0]):"as no adapter specified";throw new Oe("There is no suitable adapter to dispatch the request "+p,"ERR_NOT_SUPPORT")}return o},adapters:Xc};function Rc(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new Ji(null,a)}function _h(a){return Rc(a),a.headers=Jt.from(a.headers),a.data=_c.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),Hp.getAdapter(a.adapter||cr.adapter)(a).then(function(o){return Rc(a),o.data=_c.call(a,a.transformResponse,o),o.headers=Jt.from(o.headers),o},function(o){return Cp(o)||(Rc(a),o&&o.response&&(o.response.data=_c.call(a,a.transformResponse,o.response),o.response.headers=Jt.from(o.response.headers))),Promise.reject(o)})}const Lp="1.11.0",eu={};["object","boolean","number","function","string","symbol"].forEach((a,r)=>{eu[a]=function(o){return typeof o===a||"a"+(r<1?"n ":" ")+a}});const Rh={};eu.transitional=function(r,u,o){function c(d,p){return"[Axios v"+Lp+"] Transitional option '"+d+"'"+p+(o?". "+o:"")}return(d,p,g)=>{if(r===!1)throw new Oe(c(p," has been removed"+(u?" in "+u:"")),Oe.ERR_DEPRECATED);return u&&!Rh[p]&&(Rh[p]=!0,console.warn(c(p," has been deprecated since v"+u+" and will be removed in the near future"))),r?r(d,p,g):!0}};eu.spelling=function(r){return(u,o)=>(console.warn(`${o} is likely a misspelling of ${r}`),!0)};function y3(a,r,u){if(typeof a!="object")throw new Oe("options must be an object",Oe.ERR_BAD_OPTION_VALUE);const o=Object.keys(a);let c=o.length;for(;c-- >0;){const d=o[c],p=r[d];if(p){const g=a[d],w=g===void 0||p(g,d,a);if(w!==!0)throw new Oe("option "+d+" must be "+w,Oe.ERR_BAD_OPTION_VALUE);continue}if(u!==!0)throw new Oe("Unknown option "+d,Oe.ERR_BAD_OPTION)}}const ks={assertOptions:y3,validators:eu},_n=ks.validators;let Ka=class{constructor(r){this.defaults=r||{},this.interceptors={request:new wh,response:new wh}}async request(r,u){try{return await this._request(r,u)}catch(o){if(o instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const d=c.stack?c.stack.replace(/^.+\n/,""):"";try{o.stack?d&&!String(o.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+d):o.stack=d}catch{}}throw o}}_request(r,u){typeof r=="string"?(u=u||{},u.url=r):u=r||{},u=Wa(this.defaults,u);const{transitional:o,paramsSerializer:c,headers:d}=u;o!==void 0&&ks.assertOptions(o,{silentJSONParsing:_n.transitional(_n.boolean),forcedJSONParsing:_n.transitional(_n.boolean),clarifyTimeoutError:_n.transitional(_n.boolean)},!1),c!=null&&(U.isFunction(c)?u.paramsSerializer={serialize:c}:ks.assertOptions(c,{encode:_n.function,serialize:_n.function},!0)),u.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?u.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:u.allowAbsoluteUrls=!0),ks.assertOptions(u,{baseUrl:_n.spelling("baseURL"),withXsrfToken:_n.spelling("withXSRFToken")},!0),u.method=(u.method||this.defaults.method||"get").toLowerCase();let p=d&&U.merge(d.common,d[u.method]);d&&U.forEach(["delete","get","head","post","put","patch","common"],M=>{delete d[M]}),u.headers=Jt.concat(p,d);const g=[];let w=!0;this.interceptors.request.forEach(function(V){typeof V.runWhen=="function"&&V.runWhen(u)===!1||(w=w&&V.synchronous,g.unshift(V.fulfilled,V.rejected))});const x=[];this.interceptors.response.forEach(function(V){x.push(V.fulfilled,V.rejected)});let b,E=0,A;if(!w){const M=[_h.bind(this),void 0];for(M.unshift(...g),M.push(...x),A=M.length,b=Promise.resolve(u);E<A;)b=b.then(M[E++],M[E++]);return b}A=g.length;let K=u;for(E=0;E<A;){const M=g[E++],V=g[E++];try{K=M(K)}catch(R){V.call(this,R);break}}try{b=_h.call(this,K)}catch(M){return Promise.reject(M)}for(E=0,A=x.length;E<A;)b=b.then(x[E++],x[E++]);return b}getUri(r){r=Wa(this.defaults,r);const u=Np(r.baseURL,r.url,r.allowAbsoluteUrls);return Dp(u,r.params,r.paramsSerializer)}};U.forEach(["delete","get","head","options"],function(r){Ka.prototype[r]=function(u,o){return this.request(Wa(o||{},{method:r,url:u,data:(o||{}).data}))}});U.forEach(["post","put","patch"],function(r){function u(o){return function(d,p,g){return this.request(Wa(g||{},{method:r,headers:o?{"Content-Type":"multipart/form-data"}:{},url:d,data:p}))}}Ka.prototype[r]=u(),Ka.prototype[r+"Form"]=u(!0)});let v3=class qp{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let u;this.promise=new Promise(function(d){u=d});const o=this;this.promise.then(c=>{if(!o._listeners)return;let d=o._listeners.length;for(;d-- >0;)o._listeners[d](c);o._listeners=null}),this.promise.then=c=>{let d;const p=new Promise(g=>{o.subscribe(g),d=g}).then(c);return p.cancel=function(){o.unsubscribe(d)},p},r(function(d,p,g){o.reason||(o.reason=new Ji(d,p,g),u(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const u=this._listeners.indexOf(r);u!==-1&&this._listeners.splice(u,1)}toAbortSignal(){const r=new AbortController,u=o=>{r.abort(o)};return this.subscribe(u),r.signal.unsubscribe=()=>this.unsubscribe(u),r.signal}static source(){let r;return{token:new qp(function(c){r=c}),cancel:r}}};function b3(a){return function(u){return a.apply(null,u)}}function S3(a){return U.isObject(a)&&a.isAxiosError===!0}const Zc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Zc).forEach(([a,r])=>{Zc[r]=a});function Vp(a){const r=new Ka(a),u=xp(Ka.prototype.request,r);return U.extend(u,Ka.prototype,r,{allOwnKeys:!0}),U.extend(u,r,null,{allOwnKeys:!0}),u.create=function(c){return Vp(Wa(a,c))},u}const Le=Vp(cr);Le.Axios=Ka;Le.CanceledError=Ji;Le.CancelToken=v3;Le.isCancel=Cp;Le.VERSION=Lp;Le.toFormData=Is;Le.AxiosError=Oe;Le.Cancel=Le.CanceledError;Le.all=function(r){return Promise.all(r)};Le.spread=b3;Le.isAxiosError=S3;Le.mergeConfig=Wa;Le.AxiosHeaders=Jt;Le.formToJSON=a=>Rp(U.isHTMLForm(a)?new FormData(a):a);Le.getAdapter=Hp.getAdapter;Le.HttpStatusCode=Zc;Le.default=Le;const{Axios:pv,AxiosError:mv,CanceledError:gv,isCancel:xv,CancelToken:yv,VERSION:vv,all:bv,Cancel:Sv,isAxiosError:wv,spread:Ev,toFormData:Av,AxiosHeaders:zv,HttpStatusCode:Tv,formToJSON:jv,getAdapter:Ov,mergeConfig:Dv}=Le;var fr=a=>a.type==="checkbox",$a=a=>a instanceof Date,Lt=a=>a==null;const Yp=a=>typeof a=="object";var ot=a=>!Lt(a)&&!Array.isArray(a)&&Yp(a)&&!$a(a),w3=a=>ot(a)&&a.target?fr(a.target)?a.target.checked:a.target.value:a,E3=a=>a.substring(0,a.search(/\.\d+(\.|$)/))||a,A3=(a,r)=>a.has(E3(r)),z3=a=>{const r=a.constructor&&a.constructor.prototype;return ot(r)&&r.hasOwnProperty("isPrototypeOf")},rf=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function wt(a){let r;const u=Array.isArray(a),o=typeof FileList<"u"?a instanceof FileList:!1;if(a instanceof Date)r=new Date(a);else if(!(rf&&(a instanceof Blob||o))&&(u||ot(a)))if(r=u?[]:Object.create(Object.getPrototypeOf(a)),!u&&!z3(a))r=a;else for(const c in a)a.hasOwnProperty(c)&&(r[c]=wt(a[c]));else return a;return r}var tu=a=>/^\w*$/.test(a),ht=a=>a===void 0,sf=a=>Array.isArray(a)?a.filter(Boolean):[],uf=a=>sf(a.replace(/["|']|\]/g,"").split(/\.|\[/)),he=(a,r,u)=>{if(!r||!ot(a))return u;const o=(tu(r)?[r]:uf(r)).reduce((c,d)=>Lt(c)?c:c[d],a);return ht(o)||o===a?ht(a[r])?u:a[r]:o},Rn=a=>typeof a=="boolean",tt=(a,r,u)=>{let o=-1;const c=tu(r)?[r]:uf(r),d=c.length,p=d-1;for(;++o<d;){const g=c[o];let w=u;if(o!==p){const x=a[g];w=ot(x)||Array.isArray(x)?x:isNaN(+c[o+1])?{}:[]}if(g==="__proto__"||g==="constructor"||g==="prototype")return;a[g]=w,a=a[g]}};const Ch={BLUR:"blur",FOCUS_OUT:"focusout"},Sn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},In={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},T3=Et.createContext(null);T3.displayName="HookFormContext";var j3=(a,r,u,o=!0)=>{const c={defaultValues:r._defaultValues};for(const d in a)Object.defineProperty(c,d,{get:()=>{const p=d;return r._proxyFormState[p]!==Sn.all&&(r._proxyFormState[p]=!o||Sn.all),a[p]}});return c};const O3=typeof window<"u"?Et.useLayoutEffect:Et.useEffect;var kn=a=>typeof a=="string",D3=(a,r,u,o,c)=>kn(a)?(o&&r.watch.add(a),he(u,a,c)):Array.isArray(a)?a.map(d=>(o&&r.watch.add(d),he(u,d))):(o&&(r.watchAll=!0),u),$c=a=>Lt(a)||!Yp(a);function za(a,r,u=new WeakSet){if($c(a)||$c(r))return a===r;if($a(a)&&$a(r))return a.getTime()===r.getTime();const o=Object.keys(a),c=Object.keys(r);if(o.length!==c.length)return!1;if(u.has(a)||u.has(r))return!0;u.add(a),u.add(r);for(const d of o){const p=a[d];if(!c.includes(d))return!1;if(d!=="ref"){const g=r[d];if($a(p)&&$a(g)||ot(p)&&ot(g)||Array.isArray(p)&&Array.isArray(g)?!za(p,g,u):p!==g)return!1}}return!0}var _3=(a,r,u,o,c)=>r?{...u[a],types:{...u[a]&&u[a].types?u[a].types:{},[o]:c||!0}}:{},Pl=a=>Array.isArray(a)?a:[a],kh=()=>{let a=[];return{get observers(){return a},next:c=>{for(const d of a)d.next&&d.next(c)},subscribe:c=>(a.push(c),{unsubscribe:()=>{a=a.filter(d=>d!==c)}}),unsubscribe:()=>{a=[]}}},$t=a=>ot(a)&&!Object.keys(a).length,of=a=>a.type==="file",wn=a=>typeof a=="function",Ys=a=>{if(!rf)return!1;const r=a?a.ownerDocument:0;return a instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Gp=a=>a.type==="select-multiple",cf=a=>a.type==="radio",R3=a=>cf(a)||fr(a),Cc=a=>Ys(a)&&a.isConnected;function C3(a,r){const u=r.slice(0,-1).length;let o=0;for(;o<u;)a=ht(a)?o++:a[r[o++]];return a}function k3(a){for(const r in a)if(a.hasOwnProperty(r)&&!ht(a[r]))return!1;return!0}function dt(a,r){const u=Array.isArray(r)?r:tu(r)?[r]:uf(r),o=u.length===1?a:C3(a,u),c=u.length-1,d=u[c];return o&&delete o[d],c!==0&&(ot(o)&&$t(o)||Array.isArray(o)&&k3(o))&&dt(a,u.slice(0,-1)),a}var Xp=a=>{for(const r in a)if(wn(a[r]))return!0;return!1};function Gs(a,r={}){const u=Array.isArray(a);if(ot(a)||u)for(const o in a)Array.isArray(a[o])||ot(a[o])&&!Xp(a[o])?(r[o]=Array.isArray(a[o])?[]:{},Gs(a[o],r[o])):Lt(a[o])||(r[o]=!0);return r}function Zp(a,r,u){const o=Array.isArray(a);if(ot(a)||o)for(const c in a)Array.isArray(a[c])||ot(a[c])&&!Xp(a[c])?ht(r)||$c(u[c])?u[c]=Array.isArray(a[c])?Gs(a[c],[]):{...Gs(a[c])}:Zp(a[c],Lt(r)?{}:r[c],u[c]):u[c]=!za(a[c],r[c]);return u}var Fl=(a,r)=>Zp(a,r,Gs(r));const Nh={value:!1,isValid:!1},Mh={value:!0,isValid:!0};var $p=a=>{if(Array.isArray(a)){if(a.length>1){const r=a.filter(u=>u&&u.checked&&!u.disabled).map(u=>u.value);return{value:r,isValid:!!r.length}}return a[0].checked&&!a[0].disabled?a[0].attributes&&!ht(a[0].attributes.value)?ht(a[0].value)||a[0].value===""?Mh:{value:a[0].value,isValid:!0}:Mh:Nh}return Nh},Qp=(a,{valueAsNumber:r,valueAsDate:u,setValueAs:o})=>ht(a)?a:r?a===""?NaN:a&&+a:u&&kn(a)?new Date(a):o?o(a):a;const Uh={isValid:!1,value:null};var Kp=a=>Array.isArray(a)?a.reduce((r,u)=>u&&u.checked&&!u.disabled?{isValid:!0,value:u.value}:r,Uh):Uh;function Bh(a){const r=a.ref;return of(r)?r.files:cf(r)?Kp(a.refs).value:Gp(r)?[...r.selectedOptions].map(({value:u})=>u):fr(r)?$p(a.refs).value:Qp(ht(r.value)?a.ref.value:r.value,a)}var N3=(a,r,u,o)=>{const c={};for(const d of a){const p=he(r,d);p&&tt(c,d,p._f)}return{criteriaMode:u,names:[...a],fields:c,shouldUseNativeValidation:o}},Xs=a=>a instanceof RegExp,Wl=a=>ht(a)?a:Xs(a)?a.source:ot(a)?Xs(a.value)?a.value.source:a.value:a,Hh=a=>({isOnSubmit:!a||a===Sn.onSubmit,isOnBlur:a===Sn.onBlur,isOnChange:a===Sn.onChange,isOnAll:a===Sn.all,isOnTouch:a===Sn.onTouched});const Lh="AsyncFunction";var M3=a=>!!a&&!!a.validate&&!!(wn(a.validate)&&a.validate.constructor.name===Lh||ot(a.validate)&&Object.values(a.validate).find(r=>r.constructor.name===Lh)),U3=a=>a.mount&&(a.required||a.min||a.max||a.maxLength||a.minLength||a.pattern||a.validate),qh=(a,r,u)=>!u&&(r.watchAll||r.watch.has(a)||[...r.watch].some(o=>a.startsWith(o)&&/^\.\w+/.test(a.slice(o.length))));const er=(a,r,u,o)=>{for(const c of u||Object.keys(a)){const d=he(a,c);if(d){const{_f:p,...g}=d;if(p){if(p.refs&&p.refs[0]&&r(p.refs[0],c)&&!o)return!0;if(p.ref&&r(p.ref,p.name)&&!o)return!0;if(er(g,r))break}else if(ot(g)&&er(g,r))break}}};function Vh(a,r,u){const o=he(a,u);if(o||tu(u))return{error:o,name:u};const c=u.split(".");for(;c.length;){const d=c.join("."),p=he(r,d),g=he(a,d);if(p&&!Array.isArray(p)&&u!==d)return{name:u};if(g&&g.type)return{name:d,error:g};if(g&&g.root&&g.root.type)return{name:`${d}.root`,error:g.root};c.pop()}return{name:u}}var B3=(a,r,u,o)=>{u(a);const{name:c,...d}=a;return $t(d)||Object.keys(d).length>=Object.keys(r).length||Object.keys(d).find(p=>r[p]===(!o||Sn.all))},H3=(a,r,u)=>!a||!r||a===r||Pl(a).some(o=>o&&(u?o===r:o.startsWith(r)||r.startsWith(o))),L3=(a,r,u,o,c)=>c.isOnAll?!1:!u&&c.isOnTouch?!(r||a):(u?o.isOnBlur:c.isOnBlur)?!a:(u?o.isOnChange:c.isOnChange)?a:!0,q3=(a,r)=>!sf(he(a,r)).length&&dt(a,r),V3=(a,r,u)=>{const o=Pl(he(a,u));return tt(o,"root",r[u]),tt(a,u,o),a},Ns=a=>kn(a);function Yh(a,r,u="validate"){if(Ns(a)||Array.isArray(a)&&a.every(Ns)||Rn(a)&&!a)return{type:u,message:Ns(a)?a:"",ref:r}}var Li=a=>ot(a)&&!Xs(a)?a:{value:a,message:""},Gh=async(a,r,u,o,c,d)=>{const{ref:p,refs:g,required:w,maxLength:x,minLength:b,min:E,max:A,pattern:K,validate:M,name:V,valueAsNumber:R,mount:J}=a._f,H=he(u,V);if(!J||r.has(V))return{};const Z=g?g[0]:p,le=W=>{c&&Z.reportValidity&&(Z.setCustomValidity(Rn(W)?"":W||""),Z.reportValidity())},L={},ne=cf(p),$=fr(p),re=ne||$,be=(R||of(p))&&ht(p.value)&&ht(H)||Ys(p)&&p.value===""||H===""||Array.isArray(H)&&!H.length,Ue=_3.bind(null,V,o,L),Ce=(W,se,ye,me=In.maxLength,D=In.minLength)=>{const Q=W?se:ye;L[V]={type:W?me:D,message:Q,ref:p,...Ue(W?me:D,Q)}};if(d?!Array.isArray(H)||!H.length:w&&(!re&&(be||Lt(H))||Rn(H)&&!H||$&&!$p(g).isValid||ne&&!Kp(g).isValid)){const{value:W,message:se}=Ns(w)?{value:!!w,message:w}:Li(w);if(W&&(L[V]={type:In.required,message:se,ref:Z,...Ue(In.required,se)},!o))return le(se),L}if(!be&&(!Lt(E)||!Lt(A))){let W,se;const ye=Li(A),me=Li(E);if(!Lt(H)&&!isNaN(H)){const D=p.valueAsNumber||H&&+H;Lt(ye.value)||(W=D>ye.value),Lt(me.value)||(se=D<me.value)}else{const D=p.valueAsDate||new Date(H),Q=y=>new Date(new Date().toDateString()+" "+y),ce=p.type=="time",te=p.type=="week";kn(ye.value)&&H&&(W=ce?Q(H)>Q(ye.value):te?H>ye.value:D>new Date(ye.value)),kn(me.value)&&H&&(se=ce?Q(H)<Q(me.value):te?H<me.value:D<new Date(me.value))}if((W||se)&&(Ce(!!W,ye.message,me.message,In.max,In.min),!o))return le(L[V].message),L}if((x||b)&&!be&&(kn(H)||d&&Array.isArray(H))){const W=Li(x),se=Li(b),ye=!Lt(W.value)&&H.length>+W.value,me=!Lt(se.value)&&H.length<+se.value;if((ye||me)&&(Ce(ye,W.message,se.message),!o))return le(L[V].message),L}if(K&&!be&&kn(H)){const{value:W,message:se}=Li(K);if(Xs(W)&&!H.match(W)&&(L[V]={type:In.pattern,message:se,ref:p,...Ue(In.pattern,se)},!o))return le(se),L}if(M){if(wn(M)){const W=await M(H,u),se=Yh(W,Z);if(se&&(L[V]={...se,...Ue(In.validate,se.message)},!o))return le(se.message),L}else if(ot(M)){let W={};for(const se in M){if(!$t(W)&&!o)break;const ye=Yh(await M[se](H,u),Z,se);ye&&(W={...ye,...Ue(se,ye.message)},le(ye.message),o&&(L[V]=W))}if(!$t(W)&&(L[V]={ref:Z,...W},!o))return L}}return le(!0),L};const Y3={mode:Sn.onSubmit,reValidateMode:Sn.onChange,shouldFocusError:!0};function G3(a={}){let r={...Y3,...a},u={submitCount:0,isDirty:!1,isReady:!1,isLoading:wn(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},o={},c=ot(r.defaultValues)||ot(r.values)?wt(r.defaultValues||r.values)||{}:{},d=r.shouldUnregister?{}:wt(c),p={action:!1,mount:!1,watch:!1},g={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},w,x=0;const b={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let E={...b};const A={array:kh(),state:kh()},K=r.criteriaMode===Sn.all,M=S=>j=>{clearTimeout(x),x=setTimeout(S,j)},V=async S=>{if(!r.disabled&&(b.isValid||E.isValid||S)){const j=r.resolver?$t((await $()).errors):await be(o,!0);j!==u.isValid&&A.state.next({isValid:j})}},R=(S,j)=>{!r.disabled&&(b.isValidating||b.validatingFields||E.isValidating||E.validatingFields)&&((S||Array.from(g.mount)).forEach(B=>{B&&(j?tt(u.validatingFields,B,j):dt(u.validatingFields,B))}),A.state.next({validatingFields:u.validatingFields,isValidating:!$t(u.validatingFields)}))},J=(S,j=[],B,ie,ae=!0,P=!0)=>{if(ie&&B&&!r.disabled){if(p.action=!0,P&&Array.isArray(he(o,S))){const oe=B(he(o,S),ie.argA,ie.argB);ae&&tt(o,S,oe)}if(P&&Array.isArray(he(u.errors,S))){const oe=B(he(u.errors,S),ie.argA,ie.argB);ae&&tt(u.errors,S,oe),q3(u.errors,S)}if((b.touchedFields||E.touchedFields)&&P&&Array.isArray(he(u.touchedFields,S))){const oe=B(he(u.touchedFields,S),ie.argA,ie.argB);ae&&tt(u.touchedFields,S,oe)}(b.dirtyFields||E.dirtyFields)&&(u.dirtyFields=Fl(c,d)),A.state.next({name:S,isDirty:Ce(S,j),dirtyFields:u.dirtyFields,errors:u.errors,isValid:u.isValid})}else tt(d,S,j)},H=(S,j)=>{tt(u.errors,S,j),A.state.next({errors:u.errors})},Z=S=>{u.errors=S,A.state.next({errors:u.errors,isValid:!1})},le=(S,j,B,ie)=>{const ae=he(o,S);if(ae){const P=he(d,S,ht(B)?he(c,S):B);ht(P)||ie&&ie.defaultChecked||j?tt(d,S,j?P:Bh(ae._f)):ye(S,P),p.mount&&V()}},L=(S,j,B,ie,ae)=>{let P=!1,oe=!1;const Ae={name:S};if(!r.disabled){if(!B||ie){(b.isDirty||E.isDirty)&&(oe=u.isDirty,u.isDirty=Ae.isDirty=Ce(),P=oe!==Ae.isDirty);const je=za(he(c,S),j);oe=!!he(u.dirtyFields,S),je?dt(u.dirtyFields,S):tt(u.dirtyFields,S,!0),Ae.dirtyFields=u.dirtyFields,P=P||(b.dirtyFields||E.dirtyFields)&&oe!==!je}if(B){const je=he(u.touchedFields,S);je||(tt(u.touchedFields,S,B),Ae.touchedFields=u.touchedFields,P=P||(b.touchedFields||E.touchedFields)&&je!==B)}P&&ae&&A.state.next(Ae)}return P?Ae:{}},ne=(S,j,B,ie)=>{const ae=he(u.errors,S),P=(b.isValid||E.isValid)&&Rn(j)&&u.isValid!==j;if(r.delayError&&B?(w=M(()=>H(S,B)),w(r.delayError)):(clearTimeout(x),w=null,B?tt(u.errors,S,B):dt(u.errors,S)),(B?!za(ae,B):ae)||!$t(ie)||P){const oe={...ie,...P&&Rn(j)?{isValid:j}:{},errors:u.errors,name:S};u={...u,...oe},A.state.next(oe)}},$=async S=>{R(S,!0);const j=await r.resolver(d,r.context,N3(S||g.mount,o,r.criteriaMode,r.shouldUseNativeValidation));return R(S),j},re=async S=>{const{errors:j}=await $(S);if(S)for(const B of S){const ie=he(j,B);ie?tt(u.errors,B,ie):dt(u.errors,B)}else u.errors=j;return j},be=async(S,j,B={valid:!0})=>{for(const ie in S){const ae=S[ie];if(ae){const{_f:P,...oe}=ae;if(P){const Ae=g.array.has(P.name),je=ae._f&&M3(ae._f);je&&b.validatingFields&&R([ie],!0);const Ze=await Gh(ae,g.disabled,d,K,r.shouldUseNativeValidation&&!j,Ae);if(je&&b.validatingFields&&R([ie]),Ze[P.name]&&(B.valid=!1,j))break;!j&&(he(Ze,P.name)?Ae?V3(u.errors,Ze,P.name):tt(u.errors,P.name,Ze[P.name]):dt(u.errors,P.name))}!$t(oe)&&await be(oe,j,B)}}return B.valid},Ue=()=>{for(const S of g.unMount){const j=he(o,S);j&&(j._f.refs?j._f.refs.every(B=>!Cc(B)):!Cc(j._f.ref))&&Te(S)}g.unMount=new Set},Ce=(S,j)=>!r.disabled&&(S&&j&&tt(d,S,j),!za(y(),c)),W=(S,j,B)=>D3(S,g,{...p.mount?d:ht(j)?c:kn(S)?{[S]:j}:j},B,j),se=S=>sf(he(p.mount?d:c,S,r.shouldUnregister?he(c,S,[]):[])),ye=(S,j,B={})=>{const ie=he(o,S);let ae=j;if(ie){const P=ie._f;P&&(!P.disabled&&tt(d,S,Qp(j,P)),ae=Ys(P.ref)&&Lt(j)?"":j,Gp(P.ref)?[...P.ref.options].forEach(oe=>oe.selected=ae.includes(oe.value)):P.refs?fr(P.ref)?P.refs.forEach(oe=>{(!oe.defaultChecked||!oe.disabled)&&(Array.isArray(ae)?oe.checked=!!ae.find(Ae=>Ae===oe.value):oe.checked=ae===oe.value||!!ae)}):P.refs.forEach(oe=>oe.checked=oe.value===ae):of(P.ref)?P.ref.value="":(P.ref.value=ae,P.ref.type||A.state.next({name:S,values:wt(d)})))}(B.shouldDirty||B.shouldTouch)&&L(S,ae,B.shouldTouch,B.shouldDirty,!0),B.shouldValidate&&te(S)},me=(S,j,B)=>{for(const ie in j){if(!j.hasOwnProperty(ie))return;const ae=j[ie],P=S+"."+ie,oe=he(o,P);(g.array.has(S)||ot(ae)||oe&&!oe._f)&&!$a(ae)?me(P,ae,B):ye(P,ae,B)}},D=(S,j,B={})=>{const ie=he(o,S),ae=g.array.has(S),P=wt(j);tt(d,S,P),ae?(A.array.next({name:S,values:wt(d)}),(b.isDirty||b.dirtyFields||E.isDirty||E.dirtyFields)&&B.shouldDirty&&A.state.next({name:S,dirtyFields:Fl(c,d),isDirty:Ce(S,P)})):ie&&!ie._f&&!Lt(P)?me(S,P,B):ye(S,P,B),qh(S,g)&&A.state.next({...u,name:S}),A.state.next({name:p.mount?S:void 0,values:wt(d)})},Q=async S=>{p.mount=!0;const j=S.target;let B=j.name,ie=!0;const ae=he(o,B),P=je=>{ie=Number.isNaN(je)||$a(je)&&isNaN(je.getTime())||za(je,he(d,B,je))},oe=Hh(r.mode),Ae=Hh(r.reValidateMode);if(ae){let je,Ze;const qt=j.type?Bh(ae._f):w3(S),Mt=S.type===Ch.BLUR||S.type===Ch.FOCUS_OUT,ja=!U3(ae._f)&&!r.resolver&&!he(u.errors,B)&&!ae._f.deps||L3(Mt,he(u.touchedFields,B),u.isSubmitted,Ae,oe),Ut=qh(B,g,Mt);tt(d,B,qt),Mt?(!j||!j.readOnly)&&(ae._f.onBlur&&ae._f.onBlur(S),w&&w(0)):ae._f.onChange&&ae._f.onChange(S);const rt=L(B,qt,Mt),Bt=!$t(rt)||Ut;if(!Mt&&A.state.next({name:B,type:S.type,values:wt(d)}),ja)return(b.isValid||E.isValid)&&(r.mode==="onBlur"?Mt&&V():Mt||V()),Bt&&A.state.next({name:B,...Ut?{}:rt});if(!Mt&&Ut&&A.state.next({...u}),r.resolver){const{errors:Mn}=await $([B]);if(P(qt),ie){const Un=Vh(u.errors,o,B),ea=Vh(Mn,o,Un.name||B);je=ea.error,B=ea.name,Ze=$t(Mn)}}else R([B],!0),je=(await Gh(ae,g.disabled,d,K,r.shouldUseNativeValidation))[B],R([B]),P(qt),ie&&(je?Ze=!1:(b.isValid||E.isValid)&&(Ze=await be(o,!0)));ie&&(ae._f.deps&&te(ae._f.deps),ne(B,Ze,je,rt))}},ce=(S,j)=>{if(he(u.errors,j)&&S.focus)return S.focus(),1},te=async(S,j={})=>{let B,ie;const ae=Pl(S);if(r.resolver){const P=await re(ht(S)?S:ae);B=$t(P),ie=S?!ae.some(oe=>he(P,oe)):B}else S?(ie=(await Promise.all(ae.map(async P=>{const oe=he(o,P);return await be(oe&&oe._f?{[P]:oe}:oe)}))).every(Boolean),!(!ie&&!u.isValid)&&V()):ie=B=await be(o);return A.state.next({...!kn(S)||(b.isValid||E.isValid)&&B!==u.isValid?{}:{name:S},...r.resolver||!S?{isValid:B}:{},errors:u.errors}),j.shouldFocus&&!ie&&er(o,ce,S?ae:g.mount),ie},y=S=>{const j={...p.mount?d:c};return ht(S)?j:kn(S)?he(j,S):S.map(B=>he(j,B))},C=(S,j)=>({invalid:!!he((j||u).errors,S),isDirty:!!he((j||u).dirtyFields,S),error:he((j||u).errors,S),isValidating:!!he(u.validatingFields,S),isTouched:!!he((j||u).touchedFields,S)}),I=S=>{S&&Pl(S).forEach(j=>dt(u.errors,j)),A.state.next({errors:S?u.errors:{}})},F=(S,j,B)=>{const ie=(he(o,S,{_f:{}})._f||{}).ref,ae=he(u.errors,S)||{},{ref:P,message:oe,type:Ae,...je}=ae;tt(u.errors,S,{...je,...j,ref:ie}),A.state.next({name:S,errors:u.errors,isValid:!1}),B&&B.shouldFocus&&ie&&ie.focus&&ie.focus()},fe=(S,j)=>wn(S)?A.state.subscribe({next:B=>"values"in B&&S(W(void 0,j),B)}):W(S,j,!0),Ee=S=>A.state.subscribe({next:j=>{H3(S.name,j.name,S.exact)&&B3(j,S.formState||b,nt,S.reRenderRoot)&&S.callback({values:{...d},...u,...j,defaultValues:c})}}).unsubscribe,ue=S=>(p.mount=!0,E={...E,...S.formState},Ee({...S,formState:E})),Te=(S,j={})=>{for(const B of S?Pl(S):g.mount)g.mount.delete(B),g.array.delete(B),j.keepValue||(dt(o,B),dt(d,B)),!j.keepError&&dt(u.errors,B),!j.keepDirty&&dt(u.dirtyFields,B),!j.keepTouched&&dt(u.touchedFields,B),!j.keepIsValidating&&dt(u.validatingFields,B),!r.shouldUnregister&&!j.keepDefaultValue&&dt(c,B);A.state.next({values:wt(d)}),A.state.next({...u,...j.keepDirty?{isDirty:Ce()}:{}}),!j.keepIsValid&&V()},Se=({disabled:S,name:j})=>{(Rn(S)&&p.mount||S||g.disabled.has(j))&&(S?g.disabled.add(j):g.disabled.delete(j))},qe=(S,j={})=>{let B=he(o,S);const ie=Rn(j.disabled)||Rn(r.disabled);return tt(o,S,{...B||{},_f:{...B&&B._f?B._f:{ref:{name:S}},name:S,mount:!0,...j}}),g.mount.add(S),B?Se({disabled:Rn(j.disabled)?j.disabled:r.disabled,name:S}):le(S,!0,j.value),{...ie?{disabled:j.disabled||r.disabled}:{},...r.progressive?{required:!!j.required,min:Wl(j.min),max:Wl(j.max),minLength:Wl(j.minLength),maxLength:Wl(j.maxLength),pattern:Wl(j.pattern)}:{},name:S,onChange:Q,onBlur:Q,ref:ae=>{if(ae){qe(S,j),B=he(o,S);const P=ht(ae.value)&&ae.querySelectorAll&&ae.querySelectorAll("input,select,textarea")[0]||ae,oe=R3(P),Ae=B._f.refs||[];if(oe?Ae.find(je=>je===P):P===B._f.ref)return;tt(o,S,{_f:{...B._f,...oe?{refs:[...Ae.filter(Cc),P,...Array.isArray(he(c,S))?[{}]:[]],ref:{type:P.type,name:S}}:{ref:P}}}),le(S,!1,void 0,P)}else B=he(o,S,{}),B._f&&(B._f.mount=!1),(r.shouldUnregister||j.shouldUnregister)&&!(A3(g.array,S)&&p.action)&&g.unMount.add(S)}}},Dt=()=>r.shouldFocusError&&er(o,ce,g.mount),Nt=S=>{Rn(S)&&(A.state.next({disabled:S}),er(o,(j,B)=>{const ie=he(o,B);ie&&(j.disabled=ie._f.disabled||S,Array.isArray(ie._f.refs)&&ie._f.refs.forEach(ae=>{ae.disabled=ie._f.disabled||S}))},0,!1))},we=(S,j)=>async B=>{let ie;B&&(B.preventDefault&&B.preventDefault(),B.persist&&B.persist());let ae=wt(d);if(A.state.next({isSubmitting:!0}),r.resolver){const{errors:P,values:oe}=await $();u.errors=P,ae=wt(oe)}else await be(o);if(g.disabled.size)for(const P of g.disabled)dt(ae,P);if(dt(u.errors,"root"),$t(u.errors)){A.state.next({errors:{}});try{await S(ae,B)}catch(P){ie=P}}else j&&await j({...u.errors},B),Dt(),setTimeout(Dt);if(A.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:$t(u.errors)&&!ie,submitCount:u.submitCount+1,errors:u.errors}),ie)throw ie},ge=(S,j={})=>{he(o,S)&&(ht(j.defaultValue)?D(S,wt(he(c,S))):(D(S,j.defaultValue),tt(c,S,wt(j.defaultValue))),j.keepTouched||dt(u.touchedFields,S),j.keepDirty||(dt(u.dirtyFields,S),u.isDirty=j.defaultValue?Ce(S,wt(he(c,S))):Ce()),j.keepError||(dt(u.errors,S),b.isValid&&V()),A.state.next({...u}))},Ye=(S,j={})=>{const B=S?wt(S):c,ie=wt(B),ae=$t(S),P=ae?c:ie;if(j.keepDefaultValues||(c=B),!j.keepValues){if(j.keepDirtyValues){const oe=new Set([...g.mount,...Object.keys(Fl(c,d))]);for(const Ae of Array.from(oe))he(u.dirtyFields,Ae)?tt(P,Ae,he(d,Ae)):D(Ae,he(P,Ae))}else{if(rf&&ht(S))for(const oe of g.mount){const Ae=he(o,oe);if(Ae&&Ae._f){const je=Array.isArray(Ae._f.refs)?Ae._f.refs[0]:Ae._f.ref;if(Ys(je)){const Ze=je.closest("form");if(Ze){Ze.reset();break}}}}if(j.keepFieldsRef)for(const oe of g.mount)D(oe,he(P,oe));else o={}}d=r.shouldUnregister?j.keepDefaultValues?wt(c):{}:wt(P),A.array.next({values:{...P}}),A.state.next({values:{...P}})}g={mount:j.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},p.mount=!b.isValid||!!j.keepIsValid||!!j.keepDirtyValues,p.watch=!!r.shouldUnregister,A.state.next({submitCount:j.keepSubmitCount?u.submitCount:0,isDirty:ae?!1:j.keepDirty?u.isDirty:!!(j.keepDefaultValues&&!za(S,c)),isSubmitted:j.keepIsSubmitted?u.isSubmitted:!1,dirtyFields:ae?{}:j.keepDirtyValues?j.keepDefaultValues&&d?Fl(c,d):u.dirtyFields:j.keepDefaultValues&&S?Fl(c,S):j.keepDirty?u.dirtyFields:{},touchedFields:j.keepTouched?u.touchedFields:{},errors:j.keepErrors?u.errors:{},isSubmitSuccessful:j.keepIsSubmitSuccessful?u.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:c})},He=(S,j)=>Ye(wn(S)?S(d):S,j),mt=(S,j={})=>{const B=he(o,S),ie=B&&B._f;if(ie){const ae=ie.refs?ie.refs[0]:ie.ref;ae.focus&&(ae.focus(),j.shouldSelect&&wn(ae.select)&&ae.select())}},nt=S=>{u={...u,...S}},Wt={control:{register:qe,unregister:Te,getFieldState:C,handleSubmit:we,setError:F,_subscribe:Ee,_runSchema:$,_focusError:Dt,_getWatch:W,_getDirty:Ce,_setValid:V,_setFieldArray:J,_setDisabledField:Se,_setErrors:Z,_getFieldArray:se,_reset:Ye,_resetDefaultValues:()=>wn(r.defaultValues)&&r.defaultValues().then(S=>{He(S,r.resetOptions),A.state.next({isLoading:!1})}),_removeUnmounted:Ue,_disableForm:Nt,_subjects:A,_proxyFormState:b,get _fields(){return o},get _formValues(){return d},get _state(){return p},set _state(S){p=S},get _defaultValues(){return c},get _names(){return g},set _names(S){g=S},get _formState(){return u},get _options(){return r},set _options(S){r={...r,...S}}},subscribe:ue,trigger:te,register:qe,handleSubmit:we,watch:fe,setValue:D,getValues:y,reset:He,resetField:ge,clearErrors:I,unregister:Te,setError:F,setFocus:mt,getFieldState:C};return{...Wt,formControl:Wt}}function dr(a={}){const r=Et.useRef(void 0),u=Et.useRef(void 0),[o,c]=Et.useState({isDirty:!1,isValidating:!1,isLoading:wn(a.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:a.errors||{},disabled:a.disabled||!1,isReady:!1,defaultValues:wn(a.defaultValues)?void 0:a.defaultValues});if(!r.current)if(a.formControl)r.current={...a.formControl,formState:o},a.defaultValues&&!wn(a.defaultValues)&&a.formControl.reset(a.defaultValues,a.resetOptions);else{const{formControl:p,...g}=G3(a);r.current={...g,formState:o}}const d=r.current.control;return d._options=a,O3(()=>{const p=d._subscribe({formState:d._proxyFormState,callback:()=>c({...d._formState}),reRenderRoot:!0});return c(g=>({...g,isReady:!0})),d._formState.isReady=!0,p},[d]),Et.useEffect(()=>d._disableForm(a.disabled),[d,a.disabled]),Et.useEffect(()=>{a.mode&&(d._options.mode=a.mode),a.reValidateMode&&(d._options.reValidateMode=a.reValidateMode)},[d,a.mode,a.reValidateMode]),Et.useEffect(()=>{a.errors&&(d._setErrors(a.errors),d._focusError())},[d,a.errors]),Et.useEffect(()=>{a.shouldUnregister&&d._subjects.state.next({values:d._getWatch()})},[d,a.shouldUnregister]),Et.useEffect(()=>{if(d._proxyFormState.isDirty){const p=d._getDirty();p!==o.isDirty&&d._subjects.state.next({isDirty:p})}},[d,o.isDirty]),Et.useEffect(()=>{a.values&&!za(a.values,u.current)?(d._reset(a.values,{keepFieldsRef:!0,...d._options.resetOptions}),u.current=a.values,c(p=>({...p}))):d._resetDefaultValues()},[d,a.values]),Et.useEffect(()=>{d._state.mount||(d._setValid(),d._state.mount=!0),d._state.watch&&(d._state.watch=!1,d._subjects.state.next({...d._formState})),d._removeUnmounted()}),r.current.formState=j3(o,d),r.current}var Qt=function(){return Qt=Object.assign||function(r){for(var u,o=1,c=arguments.length;o<c;o++){u=arguments[o];for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(r[d]=u[d])}return r},Qt.apply(this,arguments)};function ar(a,r,u){if(u||arguments.length===2)for(var o=0,c=r.length,d;o<c;o++)(d||!(o in r))&&(d||(d=Array.prototype.slice.call(r,0,o)),d[o]=r[o]);return a.concat(d||Array.prototype.slice.call(r))}var Pe="-ms-",tr="-moz-",Xe="-webkit-",Jp="comm",nu="rule",ff="decl",X3="@import",Fp="@keyframes",Z3="@layer",Wp=Math.abs,df=String.fromCharCode,Qc=Object.assign;function $3(a,r){return At(a,0)^45?(((r<<2^At(a,0))<<2^At(a,1))<<2^At(a,2))<<2^At(a,3):0}function Ip(a){return a.trim()}function Pn(a,r){return(a=r.exec(a))?a[0]:a}function _e(a,r,u){return a.replace(r,u)}function Ms(a,r,u){return a.indexOf(r,u)}function At(a,r){return a.charCodeAt(r)|0}function Yi(a,r,u){return a.slice(r,u)}function Cn(a){return a.length}function Pp(a){return a.length}function Il(a,r){return r.push(a),a}function Q3(a,r){return a.map(r).join("")}function Xh(a,r){return a.filter(function(u){return!Pn(u,r)})}var au=1,Gi=1,em=0,xn=0,pt=0,Fi="";function iu(a,r,u,o,c,d,p,g){return{value:a,root:r,parent:u,type:o,props:c,children:d,line:au,column:Gi,length:p,return:"",siblings:g}}function Aa(a,r){return Qc(iu("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},r)}function qi(a){for(;a.root;)a=Aa(a.root,{children:[a]});Il(a,a.siblings)}function K3(){return pt}function J3(){return pt=xn>0?At(Fi,--xn):0,Gi--,pt===10&&(Gi=1,au--),pt}function En(){return pt=xn<em?At(Fi,xn++):0,Gi++,pt===10&&(Gi=1,au++),pt}function Ja(){return At(Fi,xn)}function Us(){return xn}function lu(a,r){return Yi(Fi,a,r)}function Kc(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F3(a){return au=Gi=1,em=Cn(Fi=a),xn=0,[]}function W3(a){return Fi="",a}function kc(a){return Ip(lu(xn-1,Jc(a===91?a+2:a===40?a+1:a)))}function I3(a){for(;(pt=Ja())&&pt<33;)En();return Kc(a)>2||Kc(pt)>3?"":" "}function P3(a,r){for(;--r&&En()&&!(pt<48||pt>102||pt>57&&pt<65||pt>70&&pt<97););return lu(a,Us()+(r<6&&Ja()==32&&En()==32))}function Jc(a){for(;En();)switch(pt){case a:return xn;case 34:case 39:a!==34&&a!==39&&Jc(pt);break;case 40:a===41&&Jc(a);break;case 92:En();break}return xn}function e5(a,r){for(;En()&&a+pt!==57;)if(a+pt===84&&Ja()===47)break;return"/*"+lu(r,xn-1)+"*"+df(a===47?a:En())}function t5(a){for(;!Kc(Ja());)En();return lu(a,xn)}function n5(a){return W3(Bs("",null,null,null,[""],a=F3(a),0,[0],a))}function Bs(a,r,u,o,c,d,p,g,w){for(var x=0,b=0,E=p,A=0,K=0,M=0,V=1,R=1,J=1,H=0,Z="",le=c,L=d,ne=o,$=Z;R;)switch(M=H,H=En()){case 40:if(M!=108&&At($,E-1)==58){Ms($+=_e(kc(H),"&","&\f"),"&\f",Wp(x?g[x-1]:0))!=-1&&(J=-1);break}case 34:case 39:case 91:$+=kc(H);break;case 9:case 10:case 13:case 32:$+=I3(M);break;case 92:$+=P3(Us()-1,7);continue;case 47:switch(Ja()){case 42:case 47:Il(a5(e5(En(),Us()),r,u,w),w);break;default:$+="/"}break;case 123*V:g[x++]=Cn($)*J;case 125*V:case 59:case 0:switch(H){case 0:case 125:R=0;case 59+b:J==-1&&($=_e($,/\f/g,"")),K>0&&Cn($)-E&&Il(K>32?$h($+";",o,u,E-1,w):$h(_e($," ","")+";",o,u,E-2,w),w);break;case 59:$+=";";default:if(Il(ne=Zh($,r,u,x,b,c,g,Z,le=[],L=[],E,d),d),H===123)if(b===0)Bs($,r,ne,ne,le,d,E,g,L);else switch(A===99&&At($,3)===110?100:A){case 100:case 108:case 109:case 115:Bs(a,ne,ne,o&&Il(Zh(a,ne,ne,0,0,c,g,Z,c,le=[],E,L),L),c,L,E,g,o?le:L);break;default:Bs($,ne,ne,ne,[""],L,0,g,L)}}x=b=K=0,V=J=1,Z=$="",E=p;break;case 58:E=1+Cn($),K=M;default:if(V<1){if(H==123)--V;else if(H==125&&V++==0&&J3()==125)continue}switch($+=df(H),H*V){case 38:J=b>0?1:($+="\f",-1);break;case 44:g[x++]=(Cn($)-1)*J,J=1;break;case 64:Ja()===45&&($+=kc(En())),A=Ja(),b=E=Cn(Z=$+=t5(Us())),H++;break;case 45:M===45&&Cn($)==2&&(V=0)}}return d}function Zh(a,r,u,o,c,d,p,g,w,x,b,E){for(var A=c-1,K=c===0?d:[""],M=Pp(K),V=0,R=0,J=0;V<o;++V)for(var H=0,Z=Yi(a,A+1,A=Wp(R=p[V])),le=a;H<M;++H)(le=Ip(R>0?K[H]+" "+Z:_e(Z,/&\f/g,K[H])))&&(w[J++]=le);return iu(a,r,u,c===0?nu:g,w,x,b,E)}function a5(a,r,u,o){return iu(a,r,u,Jp,df(K3()),Yi(a,2,-2),0,o)}function $h(a,r,u,o,c){return iu(a,r,u,ff,Yi(a,0,o),Yi(a,o+1,-1),o,c)}function tm(a,r,u){switch($3(a,r)){case 5103:return Xe+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Xe+a+a;case 4789:return tr+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Xe+a+tr+a+Pe+a+a;case 5936:switch(At(a,r+11)){case 114:return Xe+a+Pe+_e(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Xe+a+Pe+_e(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Xe+a+Pe+_e(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Xe+a+Pe+a+a;case 6165:return Xe+a+Pe+"flex-"+a+a;case 5187:return Xe+a+_e(a,/(\w+).+(:[^]+)/,Xe+"box-$1$2"+Pe+"flex-$1$2")+a;case 5443:return Xe+a+Pe+"flex-item-"+_e(a,/flex-|-self/g,"")+(Pn(a,/flex-|baseline/)?"":Pe+"grid-row-"+_e(a,/flex-|-self/g,""))+a;case 4675:return Xe+a+Pe+"flex-line-pack"+_e(a,/align-content|flex-|-self/g,"")+a;case 5548:return Xe+a+Pe+_e(a,"shrink","negative")+a;case 5292:return Xe+a+Pe+_e(a,"basis","preferred-size")+a;case 6060:return Xe+"box-"+_e(a,"-grow","")+Xe+a+Pe+_e(a,"grow","positive")+a;case 4554:return Xe+_e(a,/([^-])(transform)/g,"$1"+Xe+"$2")+a;case 6187:return _e(_e(_e(a,/(zoom-|grab)/,Xe+"$1"),/(image-set)/,Xe+"$1"),a,"")+a;case 5495:case 3959:return _e(a,/(image-set\([^]*)/,Xe+"$1$`$1");case 4968:return _e(_e(a,/(.+:)(flex-)?(.*)/,Xe+"box-pack:$3"+Pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Xe+a+a;case 4200:if(!Pn(a,/flex-|baseline/))return Pe+"grid-column-align"+Yi(a,r)+a;break;case 2592:case 3360:return Pe+_e(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(o,c){return r=c,Pn(o.props,/grid-\w+-end/)})?~Ms(a+(u=u[r].value),"span",0)?a:Pe+_e(a,"-start","")+a+Pe+"grid-row-span:"+(~Ms(u,"span",0)?Pn(u,/\d+/):+Pn(u,/\d+/)-+Pn(a,/\d+/))+";":Pe+_e(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(o){return Pn(o.props,/grid-\w+-start/)})?a:Pe+_e(_e(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return _e(a,/(.+)-inline(.+)/,Xe+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Cn(a)-1-r>6)switch(At(a,r+1)){case 109:if(At(a,r+4)!==45)break;case 102:return _e(a,/(.+:)(.+)-([^]+)/,"$1"+Xe+"$2-$3$1"+tr+(At(a,r+3)==108?"$3":"$2-$3"))+a;case 115:return~Ms(a,"stretch",0)?tm(_e(a,"stretch","fill-available"),r,u)+a:a}break;case 5152:case 5920:return _e(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,c,d,p,g,w,x){return Pe+c+":"+d+x+(p?Pe+c+"-span:"+(g?w:+w-+d)+x:"")+a});case 4949:if(At(a,r+6)===121)return _e(a,":",":"+Xe)+a;break;case 6444:switch(At(a,At(a,14)===45?18:11)){case 120:return _e(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Xe+(At(a,14)===45?"inline-":"")+"box$3$1"+Xe+"$2$3$1"+Pe+"$2box$3")+a;case 100:return _e(a,":",":"+Pe)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return _e(a,"scroll-","scroll-snap-")+a}return a}function Zs(a,r){for(var u="",o=0;o<a.length;o++)u+=r(a[o],o,a,r)||"";return u}function i5(a,r,u,o){switch(a.type){case Z3:if(a.children.length)break;case X3:case ff:return a.return=a.return||a.value;case Jp:return"";case Fp:return a.return=a.value+"{"+Zs(a.children,o)+"}";case nu:if(!Cn(a.value=a.props.join(",")))return""}return Cn(u=Zs(a.children,o))?a.return=a.value+"{"+u+"}":""}function l5(a){var r=Pp(a);return function(u,o,c,d){for(var p="",g=0;g<r;g++)p+=a[g](u,o,c,d)||"";return p}}function r5(a){return function(r){r.root||(r=r.return)&&a(r)}}function s5(a,r,u,o){if(a.length>-1&&!a.return)switch(a.type){case ff:a.return=tm(a.value,a.length,u);return;case Fp:return Zs([Aa(a,{value:_e(a.value,"@","@"+Xe)})],o);case nu:if(a.length)return Q3(u=a.props,function(c){switch(Pn(c,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qi(Aa(a,{props:[_e(c,/:(read-\w+)/,":"+tr+"$1")]})),qi(Aa(a,{props:[c]})),Qc(a,{props:Xh(u,o)});break;case"::placeholder":qi(Aa(a,{props:[_e(c,/:(plac\w+)/,":"+Xe+"input-$1")]})),qi(Aa(a,{props:[_e(c,/:(plac\w+)/,":"+tr+"$1")]})),qi(Aa(a,{props:[_e(c,/:(plac\w+)/,Pe+"input-$1")]})),qi(Aa(a,{props:[c]})),Qc(a,{props:Xh(u,o)});break}return""})}}var u5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},rn={},Xi=typeof process<"u"&&rn!==void 0&&(rn.REACT_APP_SC_ATTR||rn.SC_ATTR)||"data-styled",nm="active",am="data-styled-version",ru="6.1.19",hf=`/*!sc*/
`,$s=typeof window<"u"&&typeof document<"u",o5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&rn!==void 0&&rn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&rn.REACT_APP_SC_DISABLE_SPEEDY!==""?rn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&rn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&rn!==void 0&&rn.SC_DISABLE_SPEEDY!==void 0&&rn.SC_DISABLE_SPEEDY!==""&&rn.SC_DISABLE_SPEEDY!=="false"&&rn.SC_DISABLE_SPEEDY),su=Object.freeze([]),Zi=Object.freeze({});function c5(a,r,u){return u===void 0&&(u=Zi),a.theme!==u.theme&&a.theme||r||u.theme}var im=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),f5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,d5=/(^-|-$)/g;function Qh(a){return a.replace(f5,"-").replace(d5,"")}var h5=/(a)(d)/gi,Ds=52,Kh=function(a){return String.fromCharCode(a+(a>25?39:97))};function Fc(a){var r,u="";for(r=Math.abs(a);r>Ds;r=r/Ds|0)u=Kh(r%Ds)+u;return(Kh(r%Ds)+u).replace(h5,"$1-$2")}var Nc,lm=5381,Vi=function(a,r){for(var u=r.length;u;)a=33*a^r.charCodeAt(--u);return a},rm=function(a){return Vi(lm,a)};function sm(a){return Fc(rm(a)>>>0)}function p5(a){return a.displayName||a.name||"Component"}function Mc(a){return typeof a=="string"&&!0}var um=typeof Symbol=="function"&&Symbol.for,om=um?Symbol.for("react.memo"):60115,m5=um?Symbol.for("react.forward_ref"):60112,g5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},x5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},y5=((Nc={})[m5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nc[om]=cm,Nc);function Jh(a){return("type"in(r=a)&&r.type.$$typeof)===om?cm:"$$typeof"in a?y5[a.$$typeof]:g5;var r}var v5=Object.defineProperty,b5=Object.getOwnPropertyNames,Fh=Object.getOwnPropertySymbols,S5=Object.getOwnPropertyDescriptor,w5=Object.getPrototypeOf,Wh=Object.prototype;function fm(a,r,u){if(typeof r!="string"){if(Wh){var o=w5(r);o&&o!==Wh&&fm(a,o,u)}var c=b5(r);Fh&&(c=c.concat(Fh(r)));for(var d=Jh(a),p=Jh(r),g=0;g<c.length;++g){var w=c[g];if(!(w in x5||u&&u[w]||p&&w in p||d&&w in d)){var x=S5(r,w);try{v5(a,w,x)}catch{}}}}return a}function $i(a){return typeof a=="function"}function pf(a){return typeof a=="object"&&"styledComponentId"in a}function Qa(a,r){return a&&r?"".concat(a," ").concat(r):a||r||""}function Wc(a,r){if(a.length===0)return"";for(var u=a[0],o=1;o<a.length;o++)u+=a[o];return u}function ir(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Ic(a,r,u){if(u===void 0&&(u=!1),!u&&!ir(a)&&!Array.isArray(a))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)a[o]=Ic(a[o],r[o]);else if(ir(r))for(var o in r)a[o]=Ic(a[o],r[o]);return a}function mf(a,r){Object.defineProperty(a,"toString",{value:r})}function hr(a){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var E5=function(){function a(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return a.prototype.indexOfGroup=function(r){for(var u=0,o=0;o<r;o++)u+=this.groupSizes[o];return u},a.prototype.insertRules=function(r,u){if(r>=this.groupSizes.length){for(var o=this.groupSizes,c=o.length,d=c;r>=d;)if((d<<=1)<0)throw hr(16,"".concat(r));this.groupSizes=new Uint32Array(d),this.groupSizes.set(o),this.length=d;for(var p=c;p<d;p++)this.groupSizes[p]=0}for(var g=this.indexOfGroup(r+1),w=(p=0,u.length);p<w;p++)this.tag.insertRule(g,u[p])&&(this.groupSizes[r]++,g++)},a.prototype.clearGroup=function(r){if(r<this.length){var u=this.groupSizes[r],o=this.indexOfGroup(r),c=o+u;this.groupSizes[r]=0;for(var d=o;d<c;d++)this.tag.deleteRule(o)}},a.prototype.getGroup=function(r){var u="";if(r>=this.length||this.groupSizes[r]===0)return u;for(var o=this.groupSizes[r],c=this.indexOfGroup(r),d=c+o,p=c;p<d;p++)u+="".concat(this.tag.getRule(p)).concat(hf);return u},a}(),Hs=new Map,Qs=new Map,Ls=1,_s=function(a){if(Hs.has(a))return Hs.get(a);for(;Qs.has(Ls);)Ls++;var r=Ls++;return Hs.set(a,r),Qs.set(r,a),r},A5=function(a,r){Ls=r+1,Hs.set(a,r),Qs.set(r,a)},z5="style[".concat(Xi,"][").concat(am,'="').concat(ru,'"]'),T5=new RegExp("^".concat(Xi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),j5=function(a,r,u){for(var o,c=u.split(","),d=0,p=c.length;d<p;d++)(o=c[d])&&a.registerName(r,o)},O5=function(a,r){for(var u,o=((u=r.textContent)!==null&&u!==void 0?u:"").split(hf),c=[],d=0,p=o.length;d<p;d++){var g=o[d].trim();if(g){var w=g.match(T5);if(w){var x=0|parseInt(w[1],10),b=w[2];x!==0&&(A5(b,x),j5(a,b,w[3]),a.getTag().insertRules(x,c)),c.length=0}else c.push(g)}}},Ih=function(a){for(var r=document.querySelectorAll(z5),u=0,o=r.length;u<o;u++){var c=r[u];c&&c.getAttribute(Xi)!==nm&&(O5(a,c),c.parentNode&&c.parentNode.removeChild(c))}};function D5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var dm=function(a){var r=document.head,u=a||r,o=document.createElement("style"),c=function(g){var w=Array.from(g.querySelectorAll("style[".concat(Xi,"]")));return w[w.length-1]}(u),d=c!==void 0?c.nextSibling:null;o.setAttribute(Xi,nm),o.setAttribute(am,ru);var p=D5();return p&&o.setAttribute("nonce",p),u.insertBefore(o,d),o},_5=function(){function a(r){this.element=dm(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var o=document.styleSheets,c=0,d=o.length;c<d;c++){var p=o[c];if(p.ownerNode===u)return p}throw hr(17)}(this.element),this.length=0}return a.prototype.insertRule=function(r,u){try{return this.sheet.insertRule(u,r),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},a.prototype.getRule=function(r){var u=this.sheet.cssRules[r];return u&&u.cssText?u.cssText:""},a}(),R5=function(){function a(r){this.element=dm(r),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(r,u){if(r<=this.length&&r>=0){var o=document.createTextNode(u);return this.element.insertBefore(o,this.nodes[r]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},a.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},a}(),C5=function(){function a(r){this.rules=[],this.length=0}return a.prototype.insertRule=function(r,u){return r<=this.length&&(this.rules.splice(r,0,u),this.length++,!0)},a.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},a.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},a}(),Ph=$s,k5={isServer:!$s,useCSSOMInjection:!o5},hm=function(){function a(r,u,o){r===void 0&&(r=Zi),u===void 0&&(u={});var c=this;this.options=Qt(Qt({},k5),r),this.gs=u,this.names=new Map(o),this.server=!!r.isServer,!this.server&&$s&&Ph&&(Ph=!1,Ih(this)),mf(this,function(){return function(d){for(var p=d.getTag(),g=p.length,w="",x=function(E){var A=function(J){return Qs.get(J)}(E);if(A===void 0)return"continue";var K=d.names.get(A),M=p.getGroup(E);if(K===void 0||!K.size||M.length===0)return"continue";var V="".concat(Xi,".g").concat(E,'[id="').concat(A,'"]'),R="";K!==void 0&&K.forEach(function(J){J.length>0&&(R+="".concat(J,","))}),w+="".concat(M).concat(V,'{content:"').concat(R,'"}').concat(hf)},b=0;b<g;b++)x(b);return w}(c)})}return a.registerId=function(r){return _s(r)},a.prototype.rehydrate=function(){!this.server&&$s&&Ih(this)},a.prototype.reconstructWithOptions=function(r,u){return u===void 0&&(u=!0),new a(Qt(Qt({},this.options),r),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(r=function(u){var o=u.useCSSOMInjection,c=u.target;return u.isServer?new C5(c):o?new _5(c):new R5(c)}(this.options),new E5(r)));var r},a.prototype.hasNameForId=function(r,u){return this.names.has(r)&&this.names.get(r).has(u)},a.prototype.registerName=function(r,u){if(_s(r),this.names.has(r))this.names.get(r).add(u);else{var o=new Set;o.add(u),this.names.set(r,o)}},a.prototype.insertRules=function(r,u,o){this.registerName(r,u),this.getTag().insertRules(_s(r),o)},a.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},a.prototype.clearRules=function(r){this.getTag().clearGroup(_s(r)),this.clearNames(r)},a.prototype.clearTag=function(){this.tag=void 0},a}(),N5=/&/g,M5=/^\s*\/\/.*$/gm;function pm(a,r){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(r," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(r," ")),u.props=u.props.map(function(o){return"".concat(r," ").concat(o)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=pm(u.children,r)),u})}function U5(a){var r,u,o,c=Zi,d=c.options,p=d===void 0?Zi:d,g=c.plugins,w=g===void 0?su:g,x=function(A,K,M){return M.startsWith(u)&&M.endsWith(u)&&M.replaceAll(u,"").length>0?".".concat(r):A},b=w.slice();b.push(function(A){A.type===nu&&A.value.includes("&")&&(A.props[0]=A.props[0].replace(N5,u).replace(o,x))}),p.prefix&&b.push(s5),b.push(i5);var E=function(A,K,M,V){K===void 0&&(K=""),M===void 0&&(M=""),V===void 0&&(V="&"),r=V,u=K,o=new RegExp("\\".concat(u,"\\b"),"g");var R=A.replace(M5,""),J=n5(M||K?"".concat(M," ").concat(K," { ").concat(R," }"):R);p.namespace&&(J=pm(J,p.namespace));var H=[];return Zs(J,l5(b.concat(r5(function(Z){return H.push(Z)})))),H};return E.hash=w.length?w.reduce(function(A,K){return K.name||hr(15),Vi(A,K.name)},lm).toString():"",E}var B5=new hm,Pc=U5(),mm=Et.createContext({shouldForwardProp:void 0,styleSheet:B5,stylis:Pc});mm.Consumer;Et.createContext(void 0);function ep(){return G.useContext(mm)}var gm=function(){function a(r,u){var o=this;this.inject=function(c,d){d===void 0&&(d=Pc);var p=o.name+d.hash;c.hasNameForId(o.id,p)||c.insertRules(o.id,p,d(o.rules,p,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=u,mf(this,function(){throw hr(12,String(o.name))})}return a.prototype.getName=function(r){return r===void 0&&(r=Pc),this.name+r.hash},a}(),H5=function(a){return a>="A"&&a<="Z"};function tp(a){for(var r="",u=0;u<a.length;u++){var o=a[u];if(u===1&&o==="-"&&a[0]==="-")return a;H5(o)?r+="-"+o.toLowerCase():r+=o}return r.startsWith("ms-")?"-"+r:r}var xm=function(a){return a==null||a===!1||a===""},ym=function(a){var r,u,o=[];for(var c in a){var d=a[c];a.hasOwnProperty(c)&&!xm(d)&&(Array.isArray(d)&&d.isCss||$i(d)?o.push("".concat(tp(c),":"),d,";"):ir(d)?o.push.apply(o,ar(ar(["".concat(c," {")],ym(d),!1),["}"],!1)):o.push("".concat(tp(c),": ").concat((r=c,(u=d)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||r in u5||r.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return o};function Fa(a,r,u,o){if(xm(a))return[];if(pf(a))return[".".concat(a.styledComponentId)];if($i(a)){if(!$i(d=a)||d.prototype&&d.prototype.isReactComponent||!r)return[a];var c=a(r);return Fa(c,r,u,o)}var d;return a instanceof gm?u?(a.inject(u,o),[a.getName(o)]):[a]:ir(a)?ym(a):Array.isArray(a)?Array.prototype.concat.apply(su,a.map(function(p){return Fa(p,r,u,o)})):[a.toString()]}function L5(a){for(var r=0;r<a.length;r+=1){var u=a[r];if($i(u)&&!pf(u))return!1}return!0}var q5=rm(ru),V5=function(){function a(r,u,o){this.rules=r,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&L5(r),this.componentId=u,this.baseHash=Vi(q5,u),this.baseStyle=o,hm.registerId(u)}return a.prototype.generateAndInjectStyles=function(r,u,o){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,u,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))c=Qa(c,this.staticRulesId);else{var d=Wc(Fa(this.rules,r,u,o)),p=Fc(Vi(this.baseHash,d)>>>0);if(!u.hasNameForId(this.componentId,p)){var g=o(d,".".concat(p),void 0,this.componentId);u.insertRules(this.componentId,p,g)}c=Qa(c,p),this.staticRulesId=p}else{for(var w=Vi(this.baseHash,o.hash),x="",b=0;b<this.rules.length;b++){var E=this.rules[b];if(typeof E=="string")x+=E;else if(E){var A=Wc(Fa(E,r,u,o));w=Vi(w,A+b),x+=A}}if(x){var K=Fc(w>>>0);u.hasNameForId(this.componentId,K)||u.insertRules(this.componentId,K,o(x,".".concat(K),void 0,this.componentId)),c=Qa(c,K)}}return c},a}(),vm=Et.createContext(void 0);vm.Consumer;var Uc={};function Y5(a,r,u){var o=pf(a),c=a,d=!Mc(a),p=r.attrs,g=p===void 0?su:p,w=r.componentId,x=w===void 0?function(le,L){var ne=typeof le!="string"?"sc":Qh(le);Uc[ne]=(Uc[ne]||0)+1;var $="".concat(ne,"-").concat(sm(ru+ne+Uc[ne]));return L?"".concat(L,"-").concat($):$}(r.displayName,r.parentComponentId):w,b=r.displayName,E=b===void 0?function(le){return Mc(le)?"styled.".concat(le):"Styled(".concat(p5(le),")")}(a):b,A=r.displayName&&r.componentId?"".concat(Qh(r.displayName),"-").concat(r.componentId):r.componentId||x,K=o&&c.attrs?c.attrs.concat(g).filter(Boolean):g,M=r.shouldForwardProp;if(o&&c.shouldForwardProp){var V=c.shouldForwardProp;if(r.shouldForwardProp){var R=r.shouldForwardProp;M=function(le,L){return V(le,L)&&R(le,L)}}else M=V}var J=new V5(u,A,o?c.componentStyle:void 0);function H(le,L){return function(ne,$,re){var be=ne.attrs,Ue=ne.componentStyle,Ce=ne.defaultProps,W=ne.foldedComponentIds,se=ne.styledComponentId,ye=ne.target,me=Et.useContext(vm),D=ep(),Q=ne.shouldForwardProp||D.shouldForwardProp,ce=c5($,me,Ce)||Zi,te=function(Ee,ue,Te){for(var Se,qe=Qt(Qt({},ue),{className:void 0,theme:Te}),Dt=0;Dt<Ee.length;Dt+=1){var Nt=$i(Se=Ee[Dt])?Se(qe):Se;for(var we in Nt)qe[we]=we==="className"?Qa(qe[we],Nt[we]):we==="style"?Qt(Qt({},qe[we]),Nt[we]):Nt[we]}return ue.className&&(qe.className=Qa(qe.className,ue.className)),qe}(be,$,ce),y=te.as||ye,C={};for(var I in te)te[I]===void 0||I[0]==="$"||I==="as"||I==="theme"&&te.theme===ce||(I==="forwardedAs"?C.as=te.forwardedAs:Q&&!Q(I,y)||(C[I]=te[I]));var F=function(Ee,ue){var Te=ep(),Se=Ee.generateAndInjectStyles(ue,Te.styleSheet,Te.stylis);return Se}(Ue,te),fe=Qa(W,se);return F&&(fe+=" "+F),te.className&&(fe+=" "+te.className),C[Mc(y)&&!im.has(y)?"class":"className"]=fe,re&&(C.ref=re),G.createElement(y,C)}(Z,le,L)}H.displayName=E;var Z=Et.forwardRef(H);return Z.attrs=K,Z.componentStyle=J,Z.displayName=E,Z.shouldForwardProp=M,Z.foldedComponentIds=o?Qa(c.foldedComponentIds,c.styledComponentId):"",Z.styledComponentId=A,Z.target=o?c.target:a,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(le){this._foldedDefaultProps=o?function(L){for(var ne=[],$=1;$<arguments.length;$++)ne[$-1]=arguments[$];for(var re=0,be=ne;re<be.length;re++)Ic(L,be[re],!0);return L}({},c.defaultProps,le):le}}),mf(Z,function(){return".".concat(Z.styledComponentId)}),d&&fm(Z,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function np(a,r){for(var u=[a[0]],o=0,c=r.length;o<c;o+=1)u.push(r[o],a[o+1]);return u}var ap=function(a){return Object.assign(a,{isCss:!0})};function bm(a){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];if($i(a)||ir(a))return ap(Fa(np(su,ar([a],r,!0))));var o=a;return r.length===0&&o.length===1&&typeof o[0]=="string"?Fa(o):ap(Fa(np(o,r)))}function ef(a,r,u){if(u===void 0&&(u=Zi),!r)throw hr(1,r);var o=function(c){for(var d=[],p=1;p<arguments.length;p++)d[p-1]=arguments[p];return a(r,u,bm.apply(void 0,ar([c],d,!1)))};return o.attrs=function(c){return ef(a,r,Qt(Qt({},u),{attrs:Array.prototype.concat(u.attrs,c).filter(Boolean)}))},o.withConfig=function(c){return ef(a,r,Qt(Qt({},u),c))},o}var Sm=function(a){return ef(Y5,a)},ee=Sm;im.forEach(function(a){ee[a]=Sm(a)});function Ft(a){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var o=Wc(bm.apply(void 0,ar([a],r,!1))),c=sm(o);return new gm(c,o)}var Bc,ip;function G5(){if(ip)return Bc;ip=1;var a="Expected a function",r=NaN,u="[object Symbol]",o=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,p=/^0o[0-7]+$/i,g=parseInt,w=typeof Os=="object"&&Os&&Os.Object===Object&&Os,x=typeof self=="object"&&self&&self.Object===Object&&self,b=w||x||Function("return this")(),E=Object.prototype,A=E.toString,K=Math.max,M=Math.min,V=function(){return b.Date.now()};function R(L,ne,$){var re,be,Ue,Ce,W,se,ye=0,me=!1,D=!1,Q=!0;if(typeof L!="function")throw new TypeError(a);ne=le(ne)||0,J($)&&(me=!!$.leading,D="maxWait"in $,Ue=D?K(le($.maxWait)||0,ne):Ue,Q="trailing"in $?!!$.trailing:Q);function ce(Te){var Se=re,qe=be;return re=be=void 0,ye=Te,Ce=L.apply(qe,Se),Ce}function te(Te){return ye=Te,W=setTimeout(I,ne),me?ce(Te):Ce}function y(Te){var Se=Te-se,qe=Te-ye,Dt=ne-Se;return D?M(Dt,Ue-qe):Dt}function C(Te){var Se=Te-se,qe=Te-ye;return se===void 0||Se>=ne||Se<0||D&&qe>=Ue}function I(){var Te=V();if(C(Te))return F(Te);W=setTimeout(I,y(Te))}function F(Te){return W=void 0,Q&&re?ce(Te):(re=be=void 0,Ce)}function fe(){W!==void 0&&clearTimeout(W),ye=0,re=se=be=W=void 0}function Ee(){return W===void 0?Ce:F(V())}function ue(){var Te=V(),Se=C(Te);if(re=arguments,be=this,se=Te,Se){if(W===void 0)return te(se);if(D)return W=setTimeout(I,ne),ce(se)}return W===void 0&&(W=setTimeout(I,ne)),Ce}return ue.cancel=fe,ue.flush=Ee,ue}function J(L){var ne=typeof L;return!!L&&(ne=="object"||ne=="function")}function H(L){return!!L&&typeof L=="object"}function Z(L){return typeof L=="symbol"||H(L)&&A.call(L)==u}function le(L){if(typeof L=="number")return L;if(Z(L))return r;if(J(L)){var ne=typeof L.valueOf=="function"?L.valueOf():L;L=J(ne)?ne+"":ne}if(typeof L!="string")return L===0?L:+L;L=L.replace(o,"");var $=d.test(L);return $||p.test(L)?g(L.slice(2),$?2:8):c.test(L)?r:+L}return Bc=R,Bc}G5();var X5=typeof window<"u"?G.useLayoutEffect:G.useEffect;function Z5(a,r,u,o){const c=G.useRef(r);X5(()=>{c.current=r},[r]),G.useEffect(()=>{const d=window;if(!(d&&d.addEventListener))return;const p=g=>{c.current(g)};return d.addEventListener(a,p,o),()=>{d.removeEventListener(a,p,o)}},[a,u,o])}function Wi(a,r,u="mousedown",o={}){Z5(u,c=>{const d=c.target;if(!d||!d.isConnected)return;(Array.isArray(a)?a.filter(g=>!!g.current).every(g=>g.current&&!g.current.contains(d)):a.current&&!a.current.contains(d))&&r(c)},void 0,o)}const lr=ee.button`
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
`,Qi=ee.div`
  display: flex;
  flex-direction: column;
  padding: 40px 32px 24px 32px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 32px 24px 20px 24px;
  }
`;ee.img`
  height: 60px;
  max-width: 200px;
  margin: 0 auto 24px;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
`;const Ia=ee.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${a=>a.mainColor||"#333"};
  margin: 0 0 16px 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`,pr=ee.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 32px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`,Ta=ee.input`
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
`,zt=ee.div`
  color: #e40000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`,uu=ee.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 20px 0;
  text-align: left;
`,ou=ee.input`
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
`,rr=ee.button`
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
`,mr=ee.div`
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
`,cu=ee.a`
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
`,wm=ee.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`,gf=ee.h1`
  font-size: 16px;
  font-weight: 600;
  color: ${a=>a.mainColor||"#333"};
  margin: 10px;
`,xf=ee.p`
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
`,Q5=ee.div`
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
`,yf=ee.div`
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
`,Ks=ee.div`
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
`,fu=ee.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  border-radius: 20px;
  overflow: hidden;
`,J5=ee.div`
  display: flex;
  width: 100%;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`,F5=({enabledPhoneSubscription:a,enabledEmailSubscription:r,mainColor:u,forceOpen:o})=>{console.log("🔍 SubscriptionView Props:",{enabledPhoneSubscription:a,enabledEmailSubscription:r,mainColor:u,forceOpen:o});const[c,d]=G.useState(o||!1),[p,g]=G.useState(!1),[w,x]=G.useState(""),[b,E]=G.useState(!1),[A,K]=G.useState(""),[M,V]=G.useState(""),R=G.useRef(null),{register:J,handleSubmit:H,formState:{errors:Z}}=dr(),le=()=>{d(!1);const $=new Date;$.setDate($.getDate()+7);const re="expires="+$.toUTCString();document.cookie=`upsellPhoneSubscription=false;${re};path=/`};R!==null&&Wi(R,()=>{le()});const ne=H(async $=>{console.log("📤 Form submit edildi:",{data:$,phone:A,email:M}),g(!0),x("");try{M&&r&&(console.log("📧 Email aboneliği gönderiliyor..."),await Le.post("https://api.upsell.co/emailsubscription",{name:$.name,surname:$.surname,email:M}),console.log("✅ Email aboneliği başarılı")),A&&a&&(console.log("📱 Telefon aboneliği gönderiliyor..."),await Le.post("https://api.upsell.co/PhoneSubscription",{name:$.name,surname:$.surname,phone:"90"+A}),console.log("✅ Telefon aboneliği başarılı")),E(!0);const re=new Date;re.setDate(re.getDate()+7);const be="expires="+re.toUTCString();document.cookie=`upsellPhoneSubscription=true;${be};path=/`,d(!1)}catch(re){console.error("❌ Abonelik hatası:",re),x("Bu telefon numarası veya e-posta adresi zaten kayıtlı.")}finally{g(!1)}});return G.useEffect(()=>{if(o){console.log("🔓 ForceOpen aktif, modal açılıyor"),d(!0);return}if(typeof window<"u"){const $=document.cookie.split(";").some(re=>re.trim().startsWith("upsellPhoneSubscription="));if(console.log("🍪 Cookie kontrolü:",{hasCookie:$}),!$&&(a||r)){console.log("⏱️ 20 saniye timer başlatıldı");const re=setTimeout(()=>{console.log("✅ Timer tamamlandı, modal açılıyor"),d(!0)},2e4);return()=>{console.log("🧹 Timer temizlendi"),clearTimeout(re)}}}},[o,a,r]),!a&&!r?(console.log("⛔ Her iki abonelik de kapalı, component render edilmiyor"),null):(console.log("✅ Component render ediliyor"),f.jsx(f.Fragment,{children:f.jsxs(yf,{style:{display:!b&&!c?"none":"block"},children:[b&&f.jsx(Ks,{children:f.jsxs(wm,{children:[f.jsx(lr,{children:f.jsx("span",{onClick:()=>{E(!1)},style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),f.jsx(gf,{mainColor:u,children:"Teşekkürler!"}),f.jsx(xf,{mainColor:u,children:"Aboneliğiniz başarıyla alındı."})]})}),c&&f.jsxs(Ks,{ref:R,mainColor:u,children:[f.jsxs(fu,{children:[p&&f.jsx(mr,{children:f.jsxs(Q5,{children:[f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{})]})}),!b&&f.jsxs(f.Fragment,{children:[f.jsx(lr,{onClick:()=>{le()},children:f.jsx("span",{style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),f.jsxs(Qi,{children:[f.jsx(Ia,{mainColor:u,children:"Bültenimize Abone Olun, Fırsatları İlk Siz Yakalayın!"}),f.jsx(pr,{children:"İndirim ve fırsatlardan ilk sizin haberiniz olsun, kayıt olun ve avantajlardan yararlanın!"}),f.jsxs("form",{style:{display:"flex",flexDirection:"column",width:"100%"},onSubmit:$=>ne($),children:[f.jsxs(J5,{children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(Ta,{mainColor:u,placeholder:"Adınızı Giriniz",...J("name",{required:"Ad boş bırakılamaz"})}),Z.name&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:Z?.name?.message?.toString()??null})})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(Ta,{mainColor:u,placeholder:"Soyadınızı Giriniz",...J("surname",{required:"Soyadı boş bırakılamaz"})}),Z.surname&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:Z?.surname?.message?.toString()??null})})]})]}),a&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(Ta,{mainColor:u,type:"string",...J("phone",{required:a&&!r?"Telefon boş bırakılamaz":a&&r&&!M?"Telefon veya e-posta girmelisiniz":!1,pattern:{value:/^(501|502|503|505|506|507|508|509|512|530|531|532|533|534|535|536|537|538|539|540|541|542|543|544|545|546|547|548|549|550|551|552|553|554|555|559)\d{7}$/,message:"Geçerli bir cep telefonu numarası girin (örn: 5XXYYYYYYY)"}}),onChange:$=>{K($.target.value),console.log("📱 Telefon değişti:",$.target.value)},placeholder:"5XXXXXXXXX",maxLength:10}),Z.phone&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:Z?.phone?.message?.toString()??null})})]}),r&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(Ta,{mainColor:u,placeholder:"E-postanızı Giriniz",...J("email",{required:r&&!a?"E-posta boş bırakılamaz":r&&a&&!A?"E-posta veya telefon girmelisiniz":!1,pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,message:"Geçerli bir e-posta giriniz"}}),onChange:$=>{V($.target.value),console.log("📧 Email değişti:",$.target.value)}}),Z.email&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:Z?.email?.message?.toString()??null})})]}),f.jsxs(uu,{children:[f.jsx(ou,{mainColor:u,...J("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",f.jsx("a",{style:{color:u||"#e7333c",textDecoration:"underline",fontWeight:"500"},id:"kvkkLink",href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",children:"Aydınlatma metni için tıklayın"}),"."]})]}),Z.kvkk&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:Z?.kvkk?.message?.toString()??null})}),w&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:w})}),f.jsx("div",{children:f.jsx(rr,{mainColor:u,children:"Kaydet"})})]})]})]})]}),f.jsxs(cu,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})]})}))},W5=a=>Ft`
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
`,I5=ee.button`
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
`,P5=ee.div`
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
`,t2=ee.div`
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
`,n2=ee.div`
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
`,a2=ee.button`
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
`,i2=ee.div`
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
`,l2=ee.div`
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
`,r2=ee.a`
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
`,s2=ee.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,u2=ee.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 16px;
`,o2=ee.div`
  color: #333;
  font-weight: 600;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  margin-bottom: 8px;
`,c2=ee.div`
  font-size: 16px;
  color: ${a=>a.mainColor||"#e7333c"};
  font-weight: 700;
  margin-top: auto;
`,vf=ee.div`
  display: none;
`,bf=ee.div`
  display: none;
`,Sf=ee.div`
  display: none;
`,f2=ee.a`
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
`,d2=({mainColor:a,forceOpen:r})=>{const[u,o]=G.useState(r||!1),[c,d]=G.useState(!0),[p,g]=G.useState([]),[w,x]=G.useState({title:"",contentTitle:"",position:0}),b=G.useRef(null);return b!==null&&Wi(b,()=>{o(!1)}),G.useEffect(()=>{r&&o(!0)},[r]),G.useEffect(()=>{async function A(){d(!0);try{const K=await Le.get("https://api.upsell.co/RecommendedProducts");x({title:K.data.data.title,contentTitle:K.data.data.contentTitle,position:K.data.data.position}),g(K.data.data.products)}catch{}finally{d(!1)}}A()},[]),p===null||!(p.length>0&&!c)?null:f.jsxs("div",{children:[!r&&f.jsx(I5,{position:w.position,mainColor:a,onClick:()=>{o(!0)},children:w.title}),f.jsx(P5,{style:{display:u?"block":"none"},children:f.jsxs(t2,{ref:b,position:w.position,mainColor:a,children:[f.jsx(a2,{onClick:()=>o(!1),children:f.jsx("span",{children:"×"})}),f.jsxs(n2,{mainColor:a,children:[w.contentTitle," ✨"]}),f.jsx(i2,{children:p.map(A=>f.jsx(l2,{children:f.jsxs(r2,{href:`${A.productUrl}?utm_source=upsell&utm_medium=widget&utm_campaign=weekly-products`,children:[f.jsx(s2,{src:A.imageUrl,alt:A.title}),f.jsxs(u2,{children:[f.jsx(o2,{children:A.title}),f.jsxs(c2,{mainColor:a,children:[A.price," TL"]})]})]})},A.productId))}),f.jsxs(f2,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})})]})},gn=ee.div`
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
`,m2=ee.div`
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
`,g2=ee.div`
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
`,x2=({color:a,forceOpen:r})=>{const[u,o]=G.useState(r||!1),[c,d]=G.useState(null),[p,g]=G.useState(!1),[w,x]=G.useState(!1),b=G.useRef(null);Wi(b,()=>{o(!1)}),G.useEffect(()=>{if(r)o(!0);else{const J=document.getElementsByClassName("upsell-ss"),H=()=>o(!0);return Array.from(J).forEach(Z=>{Z.addEventListener("click",H)}),()=>{Array.from(J).forEach(Z=>{Z.removeEventListener("click",H)})}}},[r]);const{register:A,handleSubmit:K,formState:{errors:M}}=dr(),V=K(async J=>{x(!0),g(!1),d(null);try{const Z=(await Le.post("https://api.upsell.co/ticimax/order",{phone:"90"+J.phone})).data;!Z.data||Z.data===null?g(!0):d(Z.data)}catch{g(!0)}finally{x(!1)}}),R=()=>{o(!1),d(null),g(!1)};return f.jsx(yf,{style:{display:u?"block":"none"},children:f.jsxs(g2,{ref:b,mainColor:a,children:[f.jsxs(fu,{children:[f.jsx(vf,{mainColor:a}),f.jsx(bf,{mainColor:a}),f.jsx(Sf,{mainColor:a}),w&&f.jsx(mr,{children:f.jsx(m2,{children:Array.from({length:8}).map((J,H)=>f.jsx("div",{},H))})}),f.jsx(lr,{children:f.jsx("span",{onClick:R,style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),c?f.jsxs(Qi,{children:[f.jsx(Ia,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş No"}),f.jsx("div",{style:{width:"50%"},children:c.siparisNo||"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş Tarihi"}),f.jsx("div",{style:{width:"50%"},children:new Date(c.siparisTarihi).toLocaleDateString("tr-TR")||"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş Durumu"}),f.jsx("div",{style:{width:"50%"},children:c.siparisDurumu||"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Takip Link"}),f.jsx("div",{style:{width:"50%"},children:c.kargoTakipLink?f.jsx("a",{target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:a||"#e7333c"},href:c.kargoTakipLink,children:"Kargoyu Görüntüle"}):"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Takip No"}),f.jsx("div",{style:{width:"50%"},children:c.kargoTakipNo||"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Firma"}),f.jsx("div",{style:{width:"50%"},children:c.kargoFirmaTanim||"-"})]})]}):f.jsxs(Qi,{children:[f.jsx(Ia,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),f.jsx(pr,{children:"Siparişinizin kargo takibini yapmak için telefon numaranızı giriniz."}),f.jsxs("form",{onSubmit:V,children:[f.jsx(Ta,{mainColor:a,type:"text",...A("phone",{required:"Telefon numarası boş bırakılamaz",pattern:{value:/^[0-9]{10}$/,message:"Geçerli bir telefon numarası giriniz"}}),placeholder:"5XXXXXXXXX",maxLength:10}),M.phone&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:M.phone.message})}),f.jsxs(uu,{children:[f.jsx(ou,{mainColor:a,...A("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",f.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",rel:"noopener noreferrer",children:"Aydınlatma metni için tıklayın."})]})]}),M.kvkk&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center",marginBottom:"10px"},children:M.kvkk.message})}),p&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Telefon numarası ile eşleşen sipariş bulunamadı."})}),f.jsx("div",{children:f.jsx(rr,{mainColor:a,children:"Sorgula"})})]})]})]}),f.jsxs(cu,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})})};ee.button`
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
`;ee.strong`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 16px;
  margin-bottom: 16px;
  color: ${a=>a.mainColor||"#333"};
  font-weight: 600;
`;const y2=ee.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 16px 0;
`,v2=ee.label`
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
`,b2=ee.span`
  color: ${a=>a.selected?"#fff":"#333"};
  text-decoration: none;
  font-weight: 500;
`,S2=ee.div`
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
`,E2=ee.div`
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
`,A2=ee.div`
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
`,z2=({mainColor:a,stockReminderUsageChannel:r,forceOpen:u})=>{const o=G.useRef(null),[c,d]=G.useState(u||!1),[p,g]=G.useState(!1),[w,x]=G.useState(""),[b,E]=G.useState(!1),[A,K]=G.useState(),[M,V]=G.useState(),[R,J]=G.useState(!1),H=G.useRef(null),Z=G.useRef(null),le=G.useRef(null),L=()=>{document.querySelectorAll(".nostok").forEach(y=>{if(!y.querySelector(".stock_bell_icon")){const C=document.createElement("i");C.className="fal fa-bell stock_bell_icon",C.style.fontSize="14px",C.style.color="#000",C.style.fontWeight="500",C.style.marginLeft="5px",C.style.transition="0.3s",C.style.pointerEvents="none",y.appendChild(C)}})},ne=()=>{le.current&&clearInterval(le.current),le.current=setInterval(()=>{document.querySelectorAll(".stock_bell_icon").forEach(y=>{const C=y;C.style.transform="scale(1.5)",C.style.color="red",C.style.transition="0.3s",setTimeout(()=>{C.style.transform="scale(1)",C.style.color="#000",C.style.transition="0.3s"},1e3)})},3e3)},$=()=>{const te=document.getElementById("dynamicNostokBellStyles");te&&te.remove();const y=document.createElement("style");y.id="dynamicNostokBellStyles",y.innerHTML=`
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
    `,document.head.appendChild(y)};G.useEffect(()=>{typeof window<"u"&&(window.currentProduct?K(window.currentProduct):window.productDetailModel&&K(window.productDetailModel))},[]),G.useEffect(()=>{typeof window<"u"&&A&&(L(),$(),ne())},[A]),G.useEffect(()=>()=>{le.current&&clearInterval(le.current)},[]);const{register:re,handleSubmit:be,formState:{errors:Ue},reset:Ce,clearErrors:W}=dr(),se=()=>{d(!1),V(null),Ce(),W(),x(""),J(!1)};o!==null&&Wi(o,se);const ye=be(te=>{g(!0),A&&(A.productVariantData&&!M||Le.post("https://api.upsell.co/phonesubscription/reminder",{...r===1||r===2?{phone:"90"+te.phone,email:""}:{email:te.email,phone:""},productName:A.productName,productSlug:window.location.pathname,productId:`${A.productVariantData?M?.variantOptions[0].urunID:A.product.id}`,productCardId:A.product.urunKartiId.toString(),variant:(JSON.stringify(M)??"{}")||"{}",hasVariant:A.productVariantData!==null}).then(()=>{E(!0),d(!1)}).catch(()=>{x(r===1||r===2?"Bu telefon numarası zaten kayıtlı.":"Bu e-posta adresi zaten kayıtlı.")}).finally(()=>{g(!1)}))});G.useEffect(()=>{if(u)d(!0);else if(typeof window<"u"){const te=F=>{F.preventDefault(),F.stopPropagation(),c||d(!0)},y=()=>{c||d(!0)};H.current=te,Z.current=y;const C=document.getElementById("upsell-ss-reminder");C&&(C.removeEventListener("click",Z.current),C.addEventListener("click",y));const I=document.querySelectorAll(".nostok");if(I.forEach(F=>{H.current&&F.removeEventListener("click",H.current)}),I.forEach(F=>{F.addEventListener("click",te)}),A){const F=A.productVariantData?.some(ue=>ue.stokAdedi===0),fe=A.productVariantData===null&&A.totalStockAmount===0;if(F||fe){if(I.length===0)if(C)C.style.display="flex";else{const ue=()=>{if(typeof window.$<"u"){const Te=document.querySelector(".MiddleList");if(Te&&!document.getElementById("upsell-ss-reminder")){const Se=`
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
                    `;Te.insertAdjacentHTML("beforebegin",Se);const qe=document.getElementById("upsell-ss-reminder");qe&&qe.addEventListener("click",y)}}else setTimeout(ue,100)};ue()}}else C&&(C.style.display="none")}return()=>{document.querySelectorAll(".nostok").forEach(ue=>{H.current&&ue.removeEventListener("click",H.current)});const fe=document.getElementById("upsell-ss-reminder");fe&&Z.current&&fe.removeEventListener("click",Z.current);const Ee=document.getElementById("dynamicNostokBellStyles");Ee&&Ee.remove()}}},[u,A,a,c]);const me=te=>te.reduce((y,C)=>(y[C.urunID]||(y[C.urunID]={variantName:C.ekSecenekTipiTanim,variantOptions:[]}),y[C.urunID].variantOptions.push(C),y),{}),D=()=>{if(!A?.productVariantData)return"Ürün Tekrar Stokta Olduğunda Sana Bildirelim!";const te=[...new Set(A.productVariantData.map(y=>y.ekSecenekTipiTanim))];return te.length>1?`${te.join(" ve ")}ini Seç, Stokta Olunca Sana Bildirelim!`:"Bedenini Seç, Stokta Olunca Sana Bildirelim!"},Q=te=>te===1||te===2?"Ürün stoğa girdiğinde size WhatsApp veya SMS ile hemen bilgi vereceğiz. Telefon numaranızın doğru olduğundan emin olun!":"Ürün stoğa girdiğinde size E-posta ile hemen bilgi vereceğiz. E-posta adresinizin doğru olduğundan emin olun!",ce=()=>A?.productVariantData?"İlgilendiğiniz beden stoğa girdiğinde size hemen bilgi vereceğiz.":"İlgilendiğiniz ürün stoğa girdiğinde size hemen bilgi vereceğiz.";return A?f.jsxs(f.Fragment,{children:[f.jsx(A2,{mainColor:a}),f.jsxs(yf,{style:{display:!b&&!c?"none":"block"},children:[b&&f.jsx(Ks,{mainColor:a,children:f.jsxs(wm,{children:[f.jsx(lr,{onClick:()=>{E(!1)},children:f.jsx("span",{style:{color:"#000000",float:"right",fontSize:"18px"},children:"×"})}),f.jsx(gf,{mainColor:a,children:"Teşekkürler!"}),f.jsx(xf,{mainColor:a,children:ce()})]})}),c&&f.jsxs(Ks,{ref:o,mainColor:a,children:[f.jsxs(fu,{children:[p&&f.jsx(mr,{children:f.jsxs(E2,{children:[f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{})]})}),!b&&f.jsxs(f.Fragment,{children:[f.jsx(lr,{onClick:()=>{se()},children:f.jsx("span",{style:{color:"#000000",float:"right",fontSize:"18px"},children:"×"})}),f.jsxs(Qi,{children:[f.jsx(Ia,{mainColor:a,children:D()}),A?.productVariantData&&f.jsxs(f.Fragment,{children:[f.jsx("div",{children:f.jsx(y2,{children:Object.entries(me(A?.productVariantData)).map(te=>f.jsx("li",{children:f.jsxs(v2,{selected:M?.name===te[1].variantOptions.map(y=>y.tanim).join(", "),htmlFor:te[0]+"-"+te[1].variantOptions.map(y=>y.id),disabled:te[1].variantOptions[0].stokAdedi!==0,mainColor:a,children:[f.jsx("input",{type:"radio",disabled:te[1].variantOptions[0].stokAdedi!==0,id:te[0]+"-"+te[1].variantOptions.map(y=>y.id),checked:M?.name===te[1].variantOptions.map(y=>y.tanim).join(", "),style:{visibility:"hidden",display:"none"},...re(te[1].variantName,{required:te[1].variantName+" varyasyonu için bir seçenek seçin"}),onClick:()=>{V({variantOptions:te[1].variantOptions,name:te[1].variantOptions.map(y=>y.tanim).join(", ")})}}),f.jsx(b2,{selected:M?.name===te[1].variantOptions.map(y=>y.tanim).join(", "),children:te[1].variantOptions.map(y=>y.tanim).join(", ")})]})},te[0]))})}),!M&&R&&f.jsx(S2,{children:"Lütfen bir seçenek seçin"})]}),f.jsx(pr,{style:{marginTop:A?.productVariantData?"20px":"0"},children:Q(r)}),f.jsxs("form",{onSubmit:te=>ye(te),children:[r===1||r===2?f.jsxs(f.Fragment,{children:[f.jsx(Ta,{mainColor:a,type:"string",...re("phone",{required:"Telefon boş bırakılamaz",pattern:{value:/^(501|502|503|505|506|507|508|509|512|530|531|532|533|534|535|536|537|538|539|540|541|542|543|544|545|546|547|548|549|550|551|552|553|554|555|559)\d{7}$/,message:"Geçerli bir cep telefonu numarası girin (örn: 5XXYYYYYYY)"}}),placeholder:"5XXXXXXXXX",maxLength:10}),Ue.phone&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:Ue?.phone?.message?.toString()??null})})]}):f.jsxs(f.Fragment,{children:[f.jsx(Ta,{mainColor:a,placeholder:"E-postanızı Giriniz",...re("email",{required:"E-posta boş bırakılamaz",pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,message:"Geçerli bir e-posta giriniz"}})}),Ue.email&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:Ue?.email?.message?.toString()??null})})]}),f.jsxs(uu,{children:[f.jsx(ou,{mainColor:a,...re("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:[r===1||r===2?"Kampanya, duyuru ve bilgilendirmelerden WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum.":"Kampanya, duyuru ve bilgilendirmelerden E-Posta yoluyla haberdar olmak istediğimi belirtiyorum.",f.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},id:"kvkkLink",href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",children:"Aydınlatma metni için tıklayın"}),"."]})]}),Ue.kvkk&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:Ue?.kvkk?.message?.toString()??null})}),w&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:w})}),f.jsx("div",{children:f.jsx(rr,{mainColor:a,onClick:()=>{J(!0)},children:"Kaydet"})})]})]})]})]}),f.jsxs(cu,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})]})]}):null};var Em=gp();const T2=a=>{const{color:r}=a,[u,o]=G.useState([]),[c,d]=G.useState(!0),p=G.useRef(null),g=G.useRef(null),[w,x]=G.useState(!1);G.useEffect(()=>{g.current=document.querySelector("#upsell-ss-featured-products-responsive"),x(!0)},[]),G.useEffect(()=>{async function E(){if(!document.body.classList.contains("CategoryBody")){d(!1);return}try{const A=window.globalModel;if(!A?.breadCrumb?.id){console.log("BreadCrumb ID: bulunamadı"),d(!1);return}const K=A.breadCrumb.id,M=window.location.origin,J=(await(await fetch(`${M}/api/product/GetProductList?c=trtry0000&FilterJson={"CategoryIdList":[${K}]}&PagingJson={"PageItemCount":15,"PageNumber":1,"OrderBy":"SATISADEDI","OrderDirection":"DESC"}&CreateFilter=false&TransitionOrder=0&PageType=1`)).json()).products?.filter(H=>H.inStock)?.slice(0,20)||[];o(J)}catch(A){console.error("Ürün yükleme hatası:",A)}finally{d(!1)}}w&&E()},[w]),G.useEffect(()=>{if(u.length>0&&p.current){const E=window.$;if(E){const A=E(p.current);A.hasClass("owl-loaded")&&A.trigger("destroy.owl.carousel"),A.owlCarousel({autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,autoplaySpeed:1e3,navClass:["ProductListprev","ProductListnext"],nav:!0,lazyLoad:!0,margin:10,responsive:{0:{items:2},576:{items:3},767:{items:4},991:{items:5},1023:{items:6}}})}}},[u]);const b=E=>{const A=E.variantTypeItems?.length||0,K=E.discountRate>0,V=`${E.url}?utm_source=upsell&utm_medium=widget&utm_campaign=category-products`;return f.jsxs("div",{className:"productItem IndirimliUrun yorumyok",children:[f.jsxs("div",{className:"productImage",children:[f.jsx("a",{className:"detailLink detailUrl","data-id":E.productId,title:E.name,href:V,children:f.jsx("img",{"data-resize-target":".productImage",className:"resimOrginal lazyImage entered loaded",src:E.imageThumbPath,"data-original":E.imageThumbPath,alt:E.imageAltTag,"data-ll-status":"loaded"})}),E.relatedProductCount>0&&f.jsx("div",{className:"relatedProductsColor",children:f.jsxs("div",{className:"relatedProductsColorBtn",onClick:R=>{const J=window.getRelatedProducts;J&&J(E.productId,R.currentTarget)},children:[f.jsxs("div",{className:"relatedColorDiv",children:[f.jsx("span",{className:"relatedColor"}),f.jsx("span",{className:"relatedColor"})]}),f.jsx("span",{className:"productRelatedColorCount",children:E.relatedProductCount})]})})]}),f.jsx("div",{className:"productIconWrap",children:f.jsx("div",{className:"productIconLeft",children:K&&f.jsxs("div",{className:"discountIcon tip",children:[f.jsxs("span",{className:"discountIcon_s1",children:["%",E.discountRate]}),f.jsx("span",{className:"discountIcon_s2",children:"İndirim"}),f.jsxs("div",{className:"discountIconDetail",children:["%",E.discountRate," İndirim"]})]})})}),f.jsxs("div",{className:"productDetail videoAutoPlay","data-id":E.productId,"data-variant-id":E.variantId,"data-page":"1","data-category":E.category,"data-category1":E.category,children:[f.jsx("div",{className:"productMarka",style:{display:"none"},children:E.brand}),f.jsx("div",{className:"productName detailUrl","data-id":E.productId,children:f.jsx("a",{title:E.name,href:V,children:E.name})}),f.jsxs("div",{className:`productPrice ${K?"IndirimVar":""}`,children:[f.jsxs("div",{className:"discountPrice",children:[f.jsx("span",{className:"discountPriceSpan",children:E.productSellPriceStr}),f.jsx("span",{className:"discountKdv",children:"KDV Dahil"})]}),K&&f.jsxs("div",{className:"regularPrice",children:[f.jsx("span",{className:"regularPriceSpan",children:E.productPriceOriginalStr}),f.jsx("span",{className:"discountKdv",children:"KDV Dahil"})]})]}),A>0&&f.jsxs("div",{className:"boxUrunlerContent",children:[f.jsx("div",{className:"boxUrunlerTittle"}),f.jsxs("div",{className:"boxUrunlerContainer",children:[E.variantTypeItems?.map(R=>f.jsx("div",{children:f.jsx("a",{className:"boxUrunResimContent",href:"javascript:;",onClick:J=>{const H=window.GetProductVariantItemImages;H&&H(J.currentTarget,R.productId,R.url)},children:f.jsx("img",{className:"lazyImage",src:R.imageThumbPath,"data-original":R.imageThumbPath})})},R.productId)),f.jsx("div",{className:"boxUrunlerPlus",children:f.jsxs("a",{href:V,className:"boxUrunlerPlusBtn",children:[f.jsx("i",{className:"far fa-plus"}),f.jsx("span",{children:A})]})})]}),f.jsxs("span",{className:"v-count",children:["+",A]})]})]}),f.jsxs("div",{className:"productIcon",children:[f.jsxs("div",{className:"productEx2",children:[f.jsx("div",{className:"favori favoriContent-5878-0",children:f.jsx("a",{onClick:R=>{const J=window.productFavoritesProcess;J&&J(E.unique,-1,2,E.variantId,0,1,R.currentTarget)},"data-action":"1","data-favoritepopup":"true",className:"favoriteslist listfavoriPasif tip",title:"Favorilere Ekle",children:"Favorilere Ekle"})}),f.jsx("div",{className:"examineIcon tip detailLink",title:"Ürünü İncele",children:f.jsx("a",{href:V,className:"detailUrl","data-id":E.productId,children:"Ürünü İncele"})})]}),f.jsx("div",{className:"productEx",children:f.jsx("div",{className:"mycartIcon tip",title:"Sepete Ekle",children:f.jsx("a",{onClick:R=>{const J=window.productListAddToCartV2;J&&J(E.unique,E.variantId,0,0,1,E.url,0,R.currentTarget)},className:"btnAddToCart","data-productid":E.productId,"data-variantid":"0","data-unique":E.unique,children:f.jsx("span",{className:"urunListeSpanSepeteEkle",children:"Sepete Ekle"})})})})]}),f.jsx("div",{className:"productItemVariantDetail",style:{display:"none"},id:`productListVariantDetail${E.unique}`})]},E.productId)};return!document.body.classList.contains("CategoryBody")||!w||!g.current||c||u.length===0?null:Em.createPortal(f.jsxs("div",{children:[f.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),f.jsx("p",{className:"max-category-head",children:"Kategorinin En Çok Satılan Ürünleri"}),f.jsx("div",{ref:p,className:"max-BestSellingProducts owl-carousel owl-theme",children:u.map(E=>b(E))})]}),g.current)},j2=ee.div`
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
`,O2=ee.div`
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
`,D2=ee.div`
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
`,lp=ee.div`
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
`,_2=ee.div`
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
`,rp=ee.div`
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
`,R2=ee.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background: #ffffff;
  text-align: center;
  overflow: hidden;
  position: relative;
  z-index: 10;
`,sp=ee.select`
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
`,up=ee.div`
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
`,op=ee.p`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: left;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Hc=ee.div`
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
`,C2=ee.p`
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
`,cp=ee.div`
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
`,fp=ee.div`
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
`,dp=ee.div`
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
`,N2=ee.div`
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
`,M2=({useOneChartForAllProducts:a,forceOpen:r,mainColor:u})=>{const o=G.useRef(null),[c,d]=G.useState(r||!1),[p,g]=G.useState(!1),[w,x]=G.useState(!1),[b,E]=G.useState(0),[A,K]=G.useState(0),[M,V]=G.useState(),[R,J]=G.useState(),[H,Z]=G.useState(),[le,L]=G.useState(),[ne,$]=G.useState(!1),[re,be]=G.useState();G.useEffect(()=>{if(g(!0),typeof window<"u"){let W="-1";!a&&window.productDetailModel?.product?.urunKartiId?W=window.productDetailModel.product.urunKartiId.toString():a||(W="1"),Le.get(`https://api.upsell.co/sizechart/byproductcard/${W}`).then(se=>{se.data&&se.data.data&&se.data.data.items?be(se.data.data.items):be([{chartId:1,id:"1",maxHeight:170,maxWeight:70,minHeight:160,minWeight:50,title:"S"},{chartId:1,id:"2",maxHeight:180,maxWeight:80,minHeight:170,minWeight:65,title:"M"},{chartId:1,id:"3",maxHeight:190,maxWeight:90,minHeight:180,minWeight:75,title:"L"},{chartId:1,id:"4",maxHeight:200,maxWeight:100,minHeight:190,minWeight:85,title:"XL"}])}).catch(se=>{be([{chartId:1,id:"1",maxHeight:170,maxWeight:70,minHeight:160,minWeight:50,title:"S"},{chartId:1,id:"2",maxHeight:180,maxWeight:80,minHeight:170,minWeight:65,title:"M"},{chartId:1,id:"3",maxHeight:190,maxWeight:90,minHeight:180,minWeight:75,title:"L"},{chartId:1,id:"4",maxHeight:200,maxWeight:100,minHeight:190,minWeight:85,title:"XL"}])}).finally(()=>{g(!1)})}},[a]);const Ue=()=>{d(!1),$(!1),x(!1),K(0),E(0)};o!==null&&Wi(o,Ue),G.useEffect(()=>(r?d(!0):typeof window<"u"&&(document.getElementById("upsell-ss-sizechart")?.addEventListener("click",()=>{d(!0)}),document.getElementById("upsell-ss-sizechart")&&!re?.filter(W=>window.productDetailModel?.productVariantData?.find(se=>se.tanim===W.title))?document.getElementById("upsell-ss-sizechart").style.display="none":document.getElementById("upsell-ss-sizechart")&&(document.getElementById("upsell-ss-sizechart").style.display="flex")),()=>{document.getElementById("upsell-ss-sizechart")?.removeEventListener("click",()=>{})}),[re]);const Ce=()=>{const W=[];return typeof window<"u"&&re?.filter(se=>se.minHeight<=A&&se.maxHeight>=A&&se.minWeight<=b&&se.maxWeight>=b).forEach(se=>{const me=(window.productDetailModel?.productVariantData||[{tanim:"S"},{tanim:"M"},{tanim:"L"},{tanim:"XL"}]).find(D=>se.title===D.tanim);me&&W.push(me)}),W};return G.useEffect(()=>{Ce()},[A,b]),G.useEffect(()=>{if(re&&re?.length>0){const W=re?.reduce((D,Q)=>Q.minHeight<D.minHeight?Q:D,re?.[0]),se=re?.reduce((D,Q)=>Q.maxHeight>D.maxHeight?Q:D,re?.[0]),ye=re?.reduce((D,Q)=>Q.minWeight<D.minWeight?Q:D,re?.[0]),me=re?.reduce((D,Q)=>Q.maxWeight>D.maxWeight?Q:D,re?.[0]);V(W),J(se),Z(ye),L(me)}},[re]),typeof window>"u"?null:f.jsx(f.Fragment,{children:f.jsxs(j2,{style:{display:!w&&!c?"none":"block"},children:[w&&f.jsxs(O2,{mainColor:u,children:[f.jsx(D2,{onClick:()=>{x(!1)},children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:f.jsx("path",{d:"m12 4-8 8 8 8 .677-.677-6.844-6.844H20v-.958H5.833l6.844-6.844L12 4Z"})})}),f.jsx(lp,{onClick:()=>{Ue()},children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:f.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),f.jsxs(dp,{children:[f.jsx(gf,{mainColor:u,children:"Beden Öneri Rehberi"}),f.jsx(xf,{mainColor:u,children:"Sizin için en uygun beden:"}),f.jsx(C2,{children:Ce().length>0?f.jsxs(cp,{children:[f.jsx("img",{style:{width:"100%",aspectRatio:"8/12",objectFit:"cover"},src:window.productDetailModel?.productImages?.[0]?.imagePath||"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDIwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik02MCA5MEg2NVY5NUg2MFY5MFpNMTQwIDkwSDE0NVY5NUgxNDBWOTBaIiBmaWxsPSIjOEE5MUE4Ii8+CjxwYXRoIGQ9Ik01NSA4MEgxNTBWMjIwSDU1VjgwWiIgc3Ryb2tlPSIjOEE5MUE4IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz4KPHN2Zz4K",alt:"Ürün Resmi"}),f.jsxs(fp,{children:[f.jsx("span",{children:"SİZİN BEDENİNİZ OLABİLİR"}),Ce()[0]?.tanim||"Bulunamadı"]})]}):f.jsxs(cp,{children:[f.jsx("div",{style:{width:"100%",aspectRatio:"8/12",display:"flex",justifyContent:"center",alignItems:"center"},children:f.jsx("svg",{style:{width:"100px"},viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"#e7333c",children:f.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),f.jsxs(fp,{children:[f.jsx("span",{children:"ÖNERİ YAPILAMADI"}),"Üzgünüz,bu özellikler için beden öneremiyoruz."]})]})})]}),f.jsxs(rp,{children:[f.jsx(Hc,{mainColor:u,onClick:()=>{x(!1),K(0),E(0),$(!1)},children:"Baştan Başla"}),f.jsx(Hc,{mainColor:u,isSecondary:!0,onClick:()=>{Ue()},children:"Çıkış Yap"})]})]}),c&&!w&&f.jsxs(_2,{ref:o,mainColor:u,children:[p&&f.jsx(mr,{children:f.jsxs(N2,{children:[f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{})]})}),!w&&f.jsxs(f.Fragment,{children:[f.jsx(lp,{onClick:()=>{Ue()},children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:f.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),f.jsxs(R2,{children:[f.jsxs(dp,{children:[f.jsx(Ia,{mainColor:u,children:"Beden Öneri Rehberi"}),f.jsx(pr,{children:"Ölçülerinizi baz alarak size en uygun bedeni hesaplıyoruz."}),R&&M&&le&&H&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[f.jsxs("div",{children:[f.jsx(op,{children:"Boyunuzu Girin"}),f.jsxs("div",{style:{position:"relative"},children:[f.jsx(up,{mainColor:u,children:"CM"}),f.jsxs(sp,{mainColor:u,onChange:W=>{K(Number(W.target.value))},name:"height",id:"height",children:[f.jsx("option",{value:"0",children:"Seçiniz"}),Array.from({length:R?.maxHeight+1-M?.minHeight},(W,se)=>(M?.minHeight+se).toString()).map(W=>f.jsxs("option",{value:W,children:[W," cm"]},W))]})]}),A===0&&ne&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Lütfen bir boyunuzu giriniz."})})]}),f.jsxs("div",{children:[f.jsx(op,{children:"Kilonuzu Girin"}),f.jsxs("div",{style:{position:"relative"},children:[f.jsx(up,{mainColor:u,children:"KG"}),f.jsxs(sp,{mainColor:u,onChange:W=>{E(Number(W.target.value))},name:"weight",id:"weight",children:[f.jsx("option",{value:"0",children:"Seçiniz"}),Array.from({length:le.maxWeight+1-H.minWeight},(W,se)=>(H.minWeight+se).toString()).map(W=>f.jsxs("option",{value:W,children:[W," kg"]},W))]})]}),!b&&ne&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Lütfen kilonuzu giriniz"})})]})]})]}),f.jsxs(rp,{children:[f.jsx(Hc,{mainColor:u,onClick:()=>{$(!0),A&&b&&b!==0&&A!==0&&x(!0)},children:"Devam Et"}),f.jsxs(cu,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})]})]})]})]})})},U2=Ft`
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
`,H2=ee.div`
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
`,L2=ee.div`
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
`,q2=({color:a})=>{const[r,u]=G.useState(null),[o,c]=G.useState(!1),[d,p]=G.useState(!1),[g,w]=G.useState(!1),x=G.useRef(null);G.useEffect(()=>{x.current=document.querySelector("#upsell-ss-responsive"),w(!0)},[]);const{register:b,handleSubmit:E,formState:{errors:A}}=dr(),K=E(async V=>{p(!0),c(!1),u(null);try{const J=(await Le.post("https://api.upsell.co/ticimax/order",{phone:"90"+V.phone})).data;!J.data||J.data===null?c(!0):u(J.data)}catch{c(!0)}finally{p(!1)}}),M=()=>{u(null),c(!1)};return g&&x.current?Em.createPortal(f.jsx(L2,{mainColor:a,children:f.jsxs(fu,{children:[f.jsx(vf,{mainColor:a}),f.jsx(bf,{mainColor:a}),f.jsx(Sf,{mainColor:a}),d&&f.jsx(mr,{children:f.jsx(H2,{children:Array.from({length:8}).map((V,R)=>f.jsx("div",{},R))})}),r?f.jsxs(Qi,{children:[f.jsx(Ia,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş No"}),f.jsx("div",{style:{width:"50%"},children:r.siparisNo||"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş Tarihi"}),f.jsx("div",{style:{width:"50%"},children:new Date(r.siparisTarihi).toLocaleDateString("tr-TR")||"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş Durumu"}),f.jsx("div",{style:{width:"50%"},children:r.siparisDurumu||"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Takip Link"}),f.jsx("div",{style:{width:"50%"},children:r.kargoTakipLink?f.jsx("a",{target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:a||"#e7333c"},href:r.kargoTakipLink,children:"Kargoyu Görüntüle"}):"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Takip No"}),f.jsx("div",{style:{width:"50%"},children:r.kargoTakipNo||"-"})]}),f.jsxs(gn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Firma"}),f.jsx("div",{style:{width:"50%"},children:r.kargoFirmaTanim||"-"})]}),f.jsx("div",{children:f.jsx(rr,{mainColor:a,onClick:M,type:"button",children:"Yeni Sorgu Yap"})})]}):f.jsxs(Qi,{children:[f.jsx(Ia,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),f.jsx(pr,{children:"Siparişinizin kargo takibini yapmak için telefon numaranızı giriniz."}),f.jsxs("form",{onSubmit:K,children:[f.jsx(Ta,{mainColor:a,type:"text",...b("phone",{required:"Telefon numarası boş bırakılamaz",pattern:{value:/^[0-9]{10}$/,message:"Geçerli bir telefon numarası giriniz"}}),placeholder:"5XXXXXXXXX",maxLength:10}),A.phone&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:A.phone.message})}),f.jsxs(uu,{children:[f.jsx(ou,{mainColor:a,...b("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",f.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",rel:"noopener noreferrer",children:"Aydınlatma metni için tıklayın."})]})]}),A.kvkk&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center",marginBottom:"10px"},children:A.kvkk.message})}),o&&f.jsx(zt,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Telefon numarası ile eşleşen sipariş bulunamadı."})}),f.jsx("div",{children:f.jsx(rr,{mainColor:a,children:"Sorgula"})})]})]})]})}),x.current):null},V2=Ft`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Y2=ee.button`
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
`,G2=ee.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 12px 16px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 12px 12px 10px 12px;
  }
`;ee.img`
  aspect-ratio: 5/2;
  height: 70px;
  margin: auto;
  object-fit: contain;
  margin-top: 20px;
`;const hp=ee.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${a=>a.mainColor||"#333"};
  margin: 0 0 8px 0;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 6px 0;
  }
`;ee.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 32px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`;const X2=ee.input`
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
`,Lc=ee.div`
  color: #e40000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`,Z2=ee.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 20px 0;
  text-align: left;
`,$2=ee.input`
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
`,Q2=ee.button`
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
`;ee.div`
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
`;const K2=ee.a`
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
`,J2=ee.div`
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
`,F2=ee.h1`
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
`,W2=ee.p`
  text-align: center;
  font-size: 15px;
  line-height: 1.6;
  color: #333;
  width: 100%;
  margin: 8px auto 16px;
  font-weight: 500;
`,I2=ee.div`
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
`,P2=ee.div`
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
`,ev=ee.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 10px 16px 30px 16px;
  border-radius: 240px 240px 8px 8px;
`;ee.div`
  display: flex;
  width: 100%;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 468px) {
    flex-direction: column;
    gap: 0;
  }
`;const tv=ee.div`
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
`,nv=ee.button`
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
`,av=ee.button`
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
`,iv=ee.span`
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
`,lv=({mainColor:a,logo:r,forceOpen:u,showFloatingButton:o=!0})=>{const[c,d]=G.useState(u||!1),[p,g]=G.useState(null),[w,x]=G.useState(""),[b,E]=G.useState(!1),[A,K]=G.useState([]),[M,V]=G.useState(0),[R,J]=G.useState(null),[H,Z]=G.useState(!1),[le,L]=G.useState(0),[ne,$]=G.useState(!1),[re,be]=G.useState(null),[Ue,Ce]=G.useState(!1),[W,se]=G.useState(!0),[ye,me]=G.useState(null),D=G.useRef(null),{register:Q,handleSubmit:ce,formState:{errors:te}}=dr(),y=()=>{d(!1);const we=new Date;we.setDate(we.getDate()+Number(le));const ge="expires="+we.toUTCString();document.cookie=`upsellGiftWheel=false;${ge};path=/`},C=()=>{const we=localStorage.getItem("upsellGiftWheelPrize");if(!we)return!0;try{const ge=JSON.parse(we);if(!ge.timestamp)return!0;const Ye=Date.now(),He=ge.timestamp,mt=24*60*60*1e3;return Ye-He>mt}catch{return!0}},I=()=>C()?(localStorage.removeItem("upsellGiftWheelPrize"),g(null),me(null),!0):!1,F=async()=>{if(se(!1),x(""),I(),(p||ye)&&!C()){E(!0),d(!0);return}const we=localStorage.getItem("upsellGiftWheelPrize");if(we&&!C())try{const ge=JSON.parse(we);me(ge),g(ge),E(!0),d(!0);return}catch{localStorage.removeItem("upsellGiftWheelPrize")}E(!1),g(null),me(null),d(!0),A.length===0?Nt():setTimeout(()=>{Se()},50)};D!==null&&Wi(D,()=>y());const Ee=async we=>{try{await navigator.clipboard.writeText(we),Ce(!0),setTimeout(()=>Ce(!1),2e3)}catch{}},ue=(we,ge,Ye,He)=>{const mt=He*Math.PI/180;return{x:we+Ye*Math.cos(mt),y:ge+Ye*Math.sin(mt)}},Te=(we,ge=4e3)=>{if(!R)return;const Ye=Date.now(),He=M,mt=we,nt=1800,Nn=.985,Wt=10;let S=nt,j=He,B=Ye;const ie=()=>{const P=Date.now(),oe=(P-B)/1e3;B=P,S*=Math.pow(Nn,oe*60);const Ae=S*oe;j+=Ae;const je=Math.min((P-Ye)/ge,1),qt=1-Math.pow(1-je,3),Mt=Math.pow(je,2),ja=j,Ut=He+(mt-He)*qt,rt=ja*(1-Mt)+Ut*Mt;if(R.style.transform=`rotate(${rt}deg)`,S>500){const Bt=Math.min(S/200,3);R.style.filter=`blur(${Bt}px)`}else R.style.filter="none";if(je<1&&S>Wt){const Bt=requestAnimationFrame(ie);be(Bt)}else R.style.transform=`rotate(${mt}deg)`,R.style.filter="none",V(mt),be(null),setTimeout(()=>{E(!0)},500)},ae=requestAnimationFrame(ie);be(ae)},Se=()=>{const we=document.querySelector(".sectors"),ge=document.querySelector(".gift-wheel-texts");if(!we||!ge){setTimeout(()=>{const Ye=document.querySelector(".sectors"),He=document.querySelector(".gift-wheel-texts");Ye&&He&&qe(Ye,He)},100);return}qe(we,ge)},qe=(we,ge)=>{we.innerHTML="",ge.innerHTML="";const Ye=200,He=200,mt=170,nt=50,Nn=360/A.length;A.forEach((Wt,S)=>{const j=S*Nn,B=j+Nn,ie=j+Nn/2,ae=ue(Ye,He,mt,B),P=ue(Ye,He,mt,j),oe=ue(Ye,He,nt,B),Ae=ue(Ye,He,nt,j),je=B-j<=180?0:1,Ze=`M${oe.x},${oe.y} L${ae.x},${ae.y} A${mt},${mt} 0 ${je} 0 ${P.x},${P.y} L${Ae.x},${Ae.y} A${nt},${nt} 0 ${je} 1 ${oe.x},${oe.y} Z`,qt=document.createElementNS("http://www.w3.org/2000/svg","path");qt.setAttribute("d",Ze);const Mt=Wt.color||(S%2===0?a||"#e7333c":"#ffffff");qt.setAttribute("fill",Mt),qt.setAttribute("stroke","#fff"),qt.setAttribute("stroke-width","10"),we.appendChild(qt);const ja=(mt+nt)/2,Ut=ue(Ye,He,ja,ie),rt=document.createElementNS("http://www.w3.org/2000/svg","text");rt.setAttribute("x",Ut.x.toString()),rt.setAttribute("y",Ut.y.toString()),rt.setAttribute("text-anchor","middle"),rt.setAttribute("dominant-baseline","middle"),rt.setAttribute("font-size","16"),rt.setAttribute("font-weight","700");const Bt=Un=>{const ea=Un.replace("#",""),gr=parseInt(ea.substr(0,2),16),xr=parseInt(ea.substr(2,2),16),Ii=parseInt(ea.substr(4,2),16);return(gr*299+xr*587+Ii*114)/1e3>128?"#000":"#fff"},Mn=Wt.color?Bt(Wt.color):S%2===0?"#fff":"#333";rt.setAttribute("fill",Mn),rt.setAttribute("transform",`rotate(${ie} ${Ut.x} ${Ut.y})`),rt.textContent=Wt.text,ge.appendChild(rt)})},Dt=ce(async we=>{H||ne||(Z(!0),$(!0),x(""),await Le.post("https://api.upsell.co/GiftWheel/Spin",{phoneNumber:we.phone}).then(ge=>{var Ye=ge.data;if(Ye.success){const He=Ye.data.sliceIndex;if(typeof He=="number"&&!isNaN(He)){const nt=360/A.length,S=((360-(He*nt+nt/2))%360+360)%360,j=M+360*5+S;R&&(re&&(cancelAnimationFrame(re),be(null)),R.style.transformOrigin="200px 200px",R.style.transition="none",R.style.webkitTransition="none",Te(j,4e3)),g(ge.data.data),me(ge.data.data);const B={...ge.data.data,timestamp:Date.now()};localStorage.setItem("upsellGiftWheelPrize",JSON.stringify(B));const ie=new Date;ie.setDate(ie.getDate()+le);const ae="expires="+ie.toUTCString();document.cookie=`upsellGiftWheel=true;${ae};path=/`}else x("Sunucudan geçersiz veri alındı.")}else x(Ye.message)}).catch(()=>{x("Bağlantı hatası oluştu. Lütfen tekrar deneyiniz.")}).finally(()=>{setTimeout(()=>{Z(!1),$(!1)},4500)}))}),Nt=async()=>{try{const ge=(await Le.post("https://api.upsell.co/GiftWheel/Slices",{})).data;ge.success?(K(ge.data.slices),L(ge.data.frequency)):x("Hediye çarkı yüklenemedi.")}catch{x("Bağlantı hatası oluştu. Lütfen tekrar deneyiniz.")}};return G.useEffect(()=>{Nt(),I()},[]),G.useEffect(()=>{A.length>0&&c&&setTimeout(()=>{Se()},100)},[A,c]),G.useEffect(()=>{if(R&&!H&&!ne){R.style.transition="transform 2s ease-in-out";const ge=setInterval(()=>{if(!H&&!ne&&R){const Ye=M+Math.sin(Date.now()/3e3)*.5;R.style.transform=`rotate(${Ye}deg)`}},100);return()=>{clearInterval(ge),R&&(R.style.transition="none",R.style.transform=`rotate(${M}deg)`)}}},[R,H,ne,M]),G.useEffect(()=>{if(u)(async()=>{I();const ge=localStorage.getItem("upsellGiftWheelPrize");if(ge&&!C()||(p||ye)&&!C()){if(ge&&!p&&!ye&&!C())try{const He=JSON.parse(ge);me(He),g(He)}catch{localStorage.removeItem("upsellGiftWheelPrize"),E(!1),g(null),me(null),d(!0);return}E(!0),d(!0)}else E(!1),g(null),me(null),d(!0),A.length===0||setTimeout(()=>{Se()},50)})();else if(typeof window<"u"){if(document.cookie.split(";").some(ge=>ge.trim().startsWith("upsellGiftWheel=")))return;const we=setTimeout(async()=>{I();const ge=localStorage.getItem("upsellGiftWheelPrize");if(ge&&!C()||(p||ye)&&!C()){if(ge&&!p&&!ye&&!C())try{const He=JSON.parse(ge);me(He),g(He)}catch{localStorage.removeItem("upsellGiftWheelPrize");return}E(!0),d(!0)}else E(!1),g(null),me(null),d(!0),A.length===0||setTimeout(()=>{Se()},50)},6e4);return()=>{clearTimeout(we)}}},[u]),G.useEffect(()=>()=>{re&&cancelAnimationFrame(re)},[re]),G.useEffect(()=>{if(typeof window<"u")if(document.cookie.split(";").some(ge=>ge.trim().startsWith("upsellGiftWheel=")))se(!1);else{const ge=setTimeout(()=>{se(!1)},1e4);return()=>clearTimeout(ge)}},[]),f.jsxs(f.Fragment,{children:[o&&!c&&f.jsxs(av,{mainColor:a,onClick:F,className:W?"pulse":"","aria-label":"Hediye Çarkını Aç",children:[f.jsx(iv,{children:"HEDİYE ÇARKI"}),f.jsx("div",{className:"gift-icon",children:f.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),f.jsx("path",{d:"M12 2 L12 22 M2 12 L22 12",stroke:"currentColor",strokeWidth:"1",opacity:"0.7"}),f.jsx("path",{d:"M5.64 5.64 L18.36 18.36 M18.36 5.64 L5.64 18.36",stroke:"currentColor",strokeWidth:"1",opacity:"0.7"}),f.jsx("circle",{cx:"12",cy:"12",r:"3",fill:"currentColor"}),f.jsx("path",{d:"M12 2 L14 6 L10 6 Z",fill:"currentColor"})]})})]}),f.jsx(I2,{style:{display:c?"block":"none"},children:c&&f.jsxs(P2,{ref:D,mainColor:a,children:[f.jsx(Y2,{onClick:y,children:f.jsx("span",{style:{color:"#000",float:"right",fontSize:"35px"},children:"×"})}),f.jsxs(ev,{children:[f.jsx(vf,{mainColor:a}),f.jsx(bf,{mainColor:a}),f.jsx(Sf,{mainColor:a}),f.jsxs(G2,{children:[f.jsx("div",{className:"gift-wheel",style:{marginBottom:"16px",position:"relative",display:b?"none":"flex",justifyContent:"center",cursor:H?"not-allowed":"pointer",transition:"all 0.3s ease",transform:H?"scale(1.02)":"scale(1)",minHeight:A.length===0?"320px":"auto",alignItems:"center"},children:A.length===0?f.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px",color:"#666",fontSize:"16px"},children:[w?f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{fontSize:"48px"},children:"⚠️"}),f.jsx("span",{style:{color:"#e40000",textAlign:"center"},children:w}),f.jsx("button",{onClick:()=>{x(""),Nt()},style:{padding:"8px 16px",background:a||"#e7333c",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"Tekrar Dene"})]}):f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{width:"40px",height:"40px",border:`3px solid ${a||"#e7333c"}20`,borderTop:`3px solid ${a||"#e7333c"}`,borderRadius:"50%",animation:"spin 1s linear infinite"}}),f.jsx("span",{children:"Hediye çarkı yükleniyor..."})]}),f.jsx("style",{children:`
                        @keyframes spin {
                          0% { transform: rotate(0deg); }
                          100% { transform: rotate(360deg); }
                        }
                      `})]}):f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",style:{width:"min(320px, 90vw)",height:"min(320px, 90vw)",maxWidth:"100%",pointerEvents:H?"none":"auto",filter:"drop-shadow(0 8px 25px rgba(0,0,0,0.15))",transition:"filter 0.3s ease"},children:[f.jsx("circle",{cx:"200",cy:"200",r:"190",fill:"none",stroke:"rgba(0,0,0,0.1)",strokeWidth:"8"}),f.jsxs("g",{className:"wheel",ref:we=>J(we),id:"wheel",style:{transformOrigin:"200px 200px"},children:[f.jsx("g",{className:"sectors"}),f.jsx("g",{className:"gift-wheel-texts",style:{fill:"#fff",fontSize:"16px",fontWeight:700,textAnchor:"middle"}})]}),f.jsx("circle",{cx:"200",cy:"200",r:"180",fill:"none",stroke:a||"#e7333c",strokeWidth:"6"}),f.jsx("circle",{cx:"200",cy:"200",r:"170",fill:"none",stroke:"#ffffff",strokeWidth:"2"}),f.jsx("circle",{cx:"200",cy:"200",r:"45",fill:"#ffffff",stroke:a||"#e7333c",strokeWidth:"3"}),r&&f.jsx("image",{href:r,x:"170",y:"170",width:"60",height:"60",style:{objectFit:"contain"}}),f.jsx("g",{transform:"translate(200, 200)",children:f.jsx("g",{transform:"rotate(0) translate(185, 0)",children:f.jsx("polygon",{points:"-15,0 0,12 15,0 0,-12",fill:a||"#e7333c",stroke:"#ffffff",strokeWidth:"2",style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.3))"}})})})]})}),b&&f.jsxs(J2,{children:[f.jsx(hp,{mainColor:a,children:"🎊 Tebrikler! Hediye Çarkından Kazandınız! 🎁"}),f.jsxs(F2,{mainColor:a,children:[f.jsxs("strong",{children:[p.validDayCount," gün"]})," geçerli"," ",f.jsxs("strong",{children:[p.discountValue.toFixed(2),p.discountType===1?" TL":"%"]})," ","indirim kuponu kazandınız!"]}),f.jsx(W2,{children:"Kupon kodunuzu kopyalayın ve alışverişinizde kullanın"}),f.jsx(tv,{children:p.couponCode}),f.jsx(nv,{mainColor:a,className:Ue?"copied":"",onClick:()=>Ee(p.couponCode),children:Ue?"Kopyalandı!":"Kodu Kopyala"})]}),!b&&f.jsxs(f.Fragment,{children:[f.jsx(hp,{mainColor:a,children:"Hediye Çarkı"}),f.jsxs("form",{style:{display:"flex",flexDirection:"column",width:"90%",margin:"0 auto"},onSubmit:we=>Dt(we),children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(X2,{mainColor:a,type:"string",...Q("phone",{required:"Telefon boş bırakılamaz",pattern:{value:/^[0-9]{10}$/,message:"Telefon numarası 10 haneli olmalıdır"}}),placeholder:"5XXXXXXXXX",maxLength:10}),te.phone&&f.jsx(Lc,{children:te?.phone?.message?.toString()??null})]}),f.jsxs(Z2,{children:[f.jsx($2,{mainColor:a,...Q("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",f.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},id:"kvkkLink",href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",children:"Aydınlatma metni için tıklayın"}),"."]})]}),te.kvkk&&f.jsx(Lc,{children:te?.kvkk?.message?.toString()??null}),w&&f.jsx(Lc,{children:w}),f.jsx("div",{style:{marginTop:"4px"},children:f.jsx(Q2,{mainColor:a,disabled:H||ne,style:{opacity:H||ne?.6:1,cursor:H||ne?"not-allowed":"pointer"},children:H?"Çark Dönüyor...":"Çarkı Çevir"})})]})]})]})]}),f.jsxs(K2,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})})]})},rv=Ft`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,sv=ee.div`
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
`,uv=ee.div`
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
`;const ov=Ft`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-10px) scale(0.9);
  }
`,pp=ee.div`
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
    animation: ${ov} 0.6s ease-out;
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
`,cv=({mainColor:a,forceOpen:r})=>{const[u,o]=G.useState([]),[c,d]=G.useState(!1),[p,g]=G.useState(0),[w,x]=G.useState(r||!1),[b,E]=G.useState("50px"),[A,K]=G.useState(null),[M,V]=G.useState(null);return G.useEffect(()=>{if(!document.querySelector(".ProductBody")){x(!1);return}x(r||!0)},[r]),G.useEffect(()=>{async function R(){if(typeof window<"u"){const J=window.productDetailModel;let H=null;if(J&&J.productId?H=J.productId:H="1",H){d(!0);try{const Z=await Le.post("https://api.upsell.co/ProductStat/"+H,{},{headers:{"Content-Type":"application/json","Content-Length":"2"}});Z.data&&Z.data.data&&Z.data.data.length>0?o(Z.data.data):o([{text:"Son 24 saatte 15 kişi bu ürünü satın aldı",icon:"shopping-cart"},{text:"Bu ürünü 8 kişi favorilerine ekledi",icon:"heart"},{text:"Son 1 saatte 3 kişi bu ürünü görüntüledi",icon:"eye"},{text:"Bu ürün 12 kez sepete eklendi",icon:"plus-circle"}])}catch{o([{text:"Son 24 saatte 15 kişi bu ürünü satın aldı",icon:"shopping-cart"},{text:"Bu ürünü 8 kişi favorilerine ekledi",icon:"heart"},{text:"Son 1 saatte 3 kişi bu ürünü görüntüledi",icon:"eye"},{text:"Bu ürün 12 kez sepete eklendi",icon:"plus-circle"}])}finally{d(!1)}}}}R()},[]),G.useEffect(()=>{u.length>0&&A===null&&K(u[0])},[u,A]),G.useEffect(()=>{if(u.length>0){const R=setInterval(()=>{g(J=>(J+1)%u.length)},4e3);return()=>clearInterval(R)}},[u]),G.useEffect(()=>{if(u.length>0){V(A),K(u[p]);const R=setTimeout(()=>{V(null)},500);return()=>clearTimeout(R)}},[p,u]),G.useEffect(()=>{r&&x(!0)},[r]),G.useEffect(()=>{if(!r){const R=setTimeout(()=>{x(!0)},4e3);return()=>clearTimeout(R)}},[r]),G.useEffect(()=>{const R=()=>{const J=window.innerWidth<=768,H=J?"80px":"50px",Z=J?"155px":"125px";E(window.scrollY>1e3?Z:H)};return R(),window.addEventListener("scroll",R),window.addEventListener("resize",R),()=>{window.removeEventListener("scroll",R),window.removeEventListener("resize",R)}},[]),c||u.length===0?null:f.jsx(sv,{id:"social-proof-wrapper",open:w,bottom:b,mainColor:a,children:f.jsxs(uv,{children:[M&&f.jsxs(pp,{className:"previous",mainColor:a,children:[f.jsx("i",{className:`fa fa-${M.icon}`})," ",M.text]}),A&&f.jsxs(pp,{className:"active",mainColor:a,children:[f.jsx("i",{className:`fa fa-${A.icon}`})," ",A.text]})]})})};function fv(){const[a,r]=G.useState(),[u,o]=G.useState(!1);return G.useEffect(()=>{async function c(){o(!0);try{const d=document.querySelector(".ProductBody")!==null,p=await Le.get("https://api.upsell.co/Shops");if(p.data&&p.data.success&&p.data.data){const g=p.data.data;r({mainColor:g.mainColor||"#e7333c",logo:g.logo||"https://via.placeholder.com/150x50/e7333c/white?text=LOGO",enabledPhoneSubscription:g.enabledPhoneSubscription||g.enabledSubscription||!1,enabledEmailSubscription:g.enabledEmailSubscription||g.enabledSubscription||!1,enabledGiftWheel:g.enabledGiftWheel||!1,enabledProductStat:(g.enabledProductStat||!1)&&d,enabledOrderCheck:g.enabledOrderCheck||!1,enabledWeeklyProducts:g.enabledWeeklyProducts||!1,enabledStockReminder:g.enabledStockReminder||!1,enabledSizeChart:g.enabledSizeChart||!1,useOneChartForAllProducts:g.useOneChartForAllProducts||!1,stockReminderUsageChannel:g.stockReminderUsageChannel||1})}else r({mainColor:"#e7333c",logo:"https://via.placeholder.com/150x50/e7333c/white?text=LOGO",enabledPhoneSubscription:!0,enabledEmailSubscription:!0,enabledGiftWheel:!0,enabledProductStat:d,enabledOrderCheck:!0,enabledWeeklyProducts:!0,enabledStockReminder:!0,enabledSizeChart:!0,useOneChartForAllProducts:!1,stockReminderUsageChannel:1})}catch{}finally{o(!1)}}return c(),()=>{}},[]),G.useEffect(()=>{const c=new URLSearchParams(window.location.search),d=c.get("utm_source"),p=c.get("utm_medium"),g=c.get("utm_campaign");if(!(d==="upsell"))return;const x="uvid",b=localStorage.getItem(x),E=b||crypto.randomUUID();b||localStorage.setItem(x,E),Le.post("https://api.upsell.co/Tracking/CreateVisitor",{visitorId:E,path:window.location.pathname,productId:String(window.productDetailModel?.product.urunKartiId),utm:{source:d,medium:p,campaign:g}}).catch(()=>{})},[]),G.useEffect(()=>{const c="uvid",d=localStorage.getItem(c);if(!d)return;const p=window,g=p.orderCompletedModel,w=p.checkout_order,x=g?.orderId??w?.id??w?.orderId??null;x&&Le.post("https://api.upsell.co/Tracking/MatchOrder",{visitorId:d,orderId:String(x)}).then(()=>{localStorage.removeItem(c)}).catch(()=>{})},[]),u?f.jsx("div",{children:"YÃ¼kleniyor..."}):a?a.mainColor?a.logo?f.jsxs(f.Fragment,{children:[f.jsx(T2,{}),a.enabledWeeklyProducts&&f.jsx(d2,{mainColor:a.mainColor}),(a.enabledPhoneSubscription||a.enabledEmailSubscription)&&f.jsx(F5,{mainColor:a.mainColor,enabledPhoneSubscription:a.enabledPhoneSubscription,enabledEmailSubscription:a.enabledEmailSubscription}),a.enabledGiftWheel&&f.jsx(lv,{mainColor:a.mainColor}),a.enabledProductStat&&f.jsx(cv,{mainColor:a.mainColor}),a.enabledOrderCheck&&f.jsxs(f.Fragment,{children:[f.jsx(x2,{color:a.mainColor}),f.jsx(q2,{logo:a.logo})]}),a.enabledStockReminder&&f.jsx(z2,{mainColor:a.mainColor,stockReminderUsageChannel:a.stockReminderUsageChannel}),a.enabledSizeChart&&a.useOneChartForAllProducts!==void 0&&f.jsx(M2,{useOneChartForAllProducts:a.useOneChartForAllProducts})]}):f.jsx("div",{children:"MaÄŸaza logo bilgisi eksik"}):f.jsx("div",{children:"MaÄŸaza renk bilgisi eksik"}):f.jsx("div",{children:"MaÄŸaza bilgileri yÃ¼klenemedi"})}const mp=document.getElementById("upsell-style");mp&&Zx.createRoot(mp).render(f.jsx(G.StrictMode,{children:f.jsx(fv,{})}));
