(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function o(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function u(c){if(c.ep)return;c.ep=!0;const d=o(c);fetch(c.href,d)}})();(function(){if(!window.location.pathname.includes("/checkout"))return;let a=0;const r=3e5,o=setInterval(function(){const c=window.checkout_order,d=c?.id;d?(clearInterval(o),console.log("🟢 OrderId bulundu! İşlem başlatılıyor."),u(c,d)):a>=r&&(clearInterval(o),console.log("⏱️ Maksimum bekleme süresi doldu, işlem iptal edildi.")),a+=100},100);function u(c,d){const p="uvid",g=localStorage.getItem(p);if(console.log("📊 processOrder çağrıldı"),console.log("📊 visitorId (uvid):",g),console.log("📊 checkout_order:",c),console.log("📦 orderId:",d),!g){console.error("❌ Conversion-tracking: visitorId bulunamadı.");return}console.log("✅ Step 1 - Veri başarıyla yakalandı."),console.log("✅ Step 2 - OrderId mevcut");const S=new XMLHttpRequest;S.open("POST","https://api.upsell.co/Tracking/MatchOrder",!0),S.setRequestHeader("Content-Type","application/json;charset=UTF-8"),S.onreadystatechange=function(){S.readyState===4&&(S.status>=200&&S.status<300?(console.log("✅ Conversion-tracking: Başarılı. Ziyaretçi anahtarı siliniyor."),localStorage.removeItem(p)):console.error("❌ Conversion-tracking MatchOrder error:",S.responseText))},console.log("📤 Step 3 - İstek gönderiliyor."),S.send(JSON.stringify({visitorId:g,orderId:String(d)})),console.log("✅ Step 4 - İstek gönderildi.")}})();var Ms=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vx(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Dc={exports:{}},er={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function Gx(){if(fh)return er;fh=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(u,c,d){var p=null;if(d!==void 0&&(p=""+d),c.key!==void 0&&(p=""+c.key),"key"in c){d={};for(var g in c)g!=="key"&&(d[g]=c[g])}else d=c;return c=d.ref,{$$typeof:a,type:u,key:p,ref:c!==void 0?c:null,props:d}}return er.Fragment=r,er.jsx=o,er.jsxs=o,er}var dh;function Yx(){return dh||(dh=1,Dc.exports=Gx()),Dc.exports}var f=Yx(),_c={exports:{}},tr={},Oc={exports:{}},Cc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh;function Xx(){return hh||(hh=1,function(a){function r(_,J){var fe=_.length;_.push(J);e:for(;0<fe;){var Se=fe-1>>>1,w=_[Se];if(0<c(w,J))_[Se]=J,_[fe]=w,fe=Se;else break e}}function o(_){return _.length===0?null:_[0]}function u(_){if(_.length===0)return null;var J=_[0],fe=_.pop();if(fe!==J){_[0]=fe;e:for(var Se=0,w=_.length,V=w>>>1;Se<V;){var ne=2*(Se+1)-1,B=_[ne],W=ne+1,oe=_[W];if(0>c(B,fe))W<w&&0>c(oe,B)?(_[Se]=oe,_[W]=fe,Se=W):(_[Se]=B,_[ne]=fe,Se=ne);else if(W<w&&0>c(oe,fe))_[Se]=oe,_[W]=fe,Se=W;else break e}}return J}function c(_,J){var fe=_.sortIndex-J.sortIndex;return fe!==0?fe:_.id-J.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var p=Date,g=p.now();a.unstable_now=function(){return p.now()-g}}var S=[],x=[],v=1,E=null,A=3,F=!1,C=!1,M=!1,k=!1,Z=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function re(_){for(var J=o(x);J!==null;){if(J.callback===null)u(x);else if(J.startTime<=_)u(x),J.sortIndex=J.expirationTime,r(S,J);else break;J=o(x)}}function L(_){if(M=!1,re(_),!C)if(o(S)!==null)C=!0,te||(te=!0,P());else{var J=o(x);J!==null&&ve(L,J.startTime-_)}}var te=!1,$=-1,le=5,Ee=-1;function Ge(){return k?!0:!(a.unstable_now()-Ee<le)}function Re(){if(k=!1,te){var _=a.unstable_now();Ee=_;var J=!0;try{e:{C=!1,M&&(M=!1,q($),$=-1),F=!0;var fe=A;try{t:{for(re(_),E=o(S);E!==null&&!(E.expirationTime>_&&Ge());){var Se=E.callback;if(typeof Se=="function"){E.callback=null,A=E.priorityLevel;var w=Se(E.expirationTime<=_);if(_=a.unstable_now(),typeof w=="function"){E.callback=w,re(_),J=!0;break t}E===o(S)&&u(S),re(_)}else u(S);E=o(S)}if(E!==null)J=!0;else{var V=o(x);V!==null&&ve(L,V.startTime-_),J=!1}}break e}finally{E=null,A=fe,F=!1}J=void 0}}finally{J?P():te=!1}}}var P;if(typeof K=="function")P=function(){K(Re)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ye=se.port2;se.port1.onmessage=Re,P=function(){ye.postMessage(null)}}else P=function(){Z(Re,0)};function ve(_,J){$=Z(function(){_(a.unstable_now())},J)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(_){_.callback=null},a.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<_?Math.floor(1e3/_):5},a.unstable_getCurrentPriorityLevel=function(){return A},a.unstable_next=function(_){switch(A){case 1:case 2:case 3:var J=3;break;default:J=A}var fe=A;A=J;try{return _()}finally{A=fe}},a.unstable_requestPaint=function(){k=!0},a.unstable_runWithPriority=function(_,J){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var fe=A;A=_;try{return J()}finally{A=fe}},a.unstable_scheduleCallback=function(_,J,fe){var Se=a.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?Se+fe:Se):fe=Se,_){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=fe+w,_={id:v++,callback:J,priorityLevel:_,startTime:fe,expirationTime:w,sortIndex:-1},fe>Se?(_.sortIndex=fe,r(x,_),o(S)===null&&_===o(x)&&(M?(q($),$=-1):M=!0,ve(L,fe-Se))):(_.sortIndex=w,r(S,_),C||F||(C=!0,te||(te=!0,P()))),_},a.unstable_shouldYield=Ge,a.unstable_wrapCallback=function(_){var J=A;return function(){var fe=A;A=J;try{return _.apply(this,arguments)}finally{A=fe}}}}(Cc)),Cc}var ph;function $x(){return ph||(ph=1,Oc.exports=Xx()),Oc.exports}var kc={exports:{}},_e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mh;function Zx(){if(mh)return _e;mh=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function A(w){return w===null||typeof w!="object"?null:(w=E&&w[E]||w["@@iterator"],typeof w=="function"?w:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function k(w,V,ne){this.props=w,this.context=V,this.refs=M,this.updater=ne||F}k.prototype.isReactComponent={},k.prototype.setState=function(w,V){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,V,"setState")},k.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function Z(){}Z.prototype=k.prototype;function q(w,V,ne){this.props=w,this.context=V,this.refs=M,this.updater=ne||F}var K=q.prototype=new Z;K.constructor=q,C(K,k.prototype),K.isPureReactComponent=!0;var re=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},te=Object.prototype.hasOwnProperty;function $(w,V,ne,B,W,oe){return ne=oe.ref,{$$typeof:a,type:w,key:V,ref:ne!==void 0?ne:null,props:oe}}function le(w,V){return $(w.type,V,void 0,void 0,void 0,w.props)}function Ee(w){return typeof w=="object"&&w!==null&&w.$$typeof===a}function Ge(w){var V={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ne){return V[ne]})}var Re=/\/+/g;function P(w,V){return typeof w=="object"&&w!==null&&w.key!=null?Ge(""+w.key):V.toString(36)}function se(){}function ye(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(se,se):(w.status="pending",w.then(function(V){w.status==="pending"&&(w.status="fulfilled",w.value=V)},function(V){w.status==="pending"&&(w.status="rejected",w.reason=V)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function ve(w,V,ne,B,W){var oe=typeof w;(oe==="undefined"||oe==="boolean")&&(w=null);var ue=!1;if(w===null)ue=!0;else switch(oe){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(w.$$typeof){case a:case r:ue=!0;break;case v:return ue=w._init,ve(ue(w._payload),V,ne,B,W)}}if(ue)return W=W(w),ue=B===""?"."+P(w,0):B,re(W)?(ne="",ue!=null&&(ne=ue.replace(Re,"$&/")+"/"),ve(W,V,ne,"",function(Ce){return Ce})):W!=null&&(Ee(W)&&(W=le(W,ne+(W.key==null||w&&w.key===W.key?"":(""+W.key).replace(Re,"$&/")+"/")+ue)),V.push(W)),1;ue=0;var xe=B===""?".":B+":";if(re(w))for(var me=0;me<w.length;me++)B=w[me],oe=xe+P(B,me),ue+=ve(B,V,ne,oe,W);else if(me=A(w),typeof me=="function")for(w=me.call(w),me=0;!(B=w.next()).done;)B=B.value,oe=xe+P(B,me++),ue+=ve(B,V,ne,oe,W);else if(oe==="object"){if(typeof w.then=="function")return ve(ye(w),V,ne,B,W);throw V=String(w),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return ue}function _(w,V,ne){if(w==null)return w;var B=[],W=0;return ve(w,B,"","",function(oe){return V.call(ne,oe,W++)}),B}function J(w){if(w._status===-1){var V=w._result;V=V(),V.then(function(ne){(w._status===0||w._status===-1)&&(w._status=1,w._result=ne)},function(ne){(w._status===0||w._status===-1)&&(w._status=2,w._result=ne)}),w._status===-1&&(w._status=0,w._result=V)}if(w._status===1)return w._result.default;throw w._result}var fe=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function Se(){}return _e.Children={map:_,forEach:function(w,V,ne){_(w,function(){V.apply(this,arguments)},ne)},count:function(w){var V=0;return _(w,function(){V++}),V},toArray:function(w){return _(w,function(V){return V})||[]},only:function(w){if(!Ee(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},_e.Component=k,_e.Fragment=o,_e.Profiler=c,_e.PureComponent=q,_e.StrictMode=u,_e.Suspense=S,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,_e.__COMPILER_RUNTIME={__proto__:null,c:function(w){return L.H.useMemoCache(w)}},_e.cache=function(w){return function(){return w.apply(null,arguments)}},_e.cloneElement=function(w,V,ne){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var B=C({},w.props),W=w.key,oe=void 0;if(V!=null)for(ue in V.ref!==void 0&&(oe=void 0),V.key!==void 0&&(W=""+V.key),V)!te.call(V,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&V.ref===void 0||(B[ue]=V[ue]);var ue=arguments.length-2;if(ue===1)B.children=ne;else if(1<ue){for(var xe=Array(ue),me=0;me<ue;me++)xe[me]=arguments[me+2];B.children=xe}return $(w.type,W,void 0,void 0,oe,B)},_e.createContext=function(w){return w={$$typeof:p,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:d,_context:w},w},_e.createElement=function(w,V,ne){var B,W={},oe=null;if(V!=null)for(B in V.key!==void 0&&(oe=""+V.key),V)te.call(V,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(W[B]=V[B]);var ue=arguments.length-2;if(ue===1)W.children=ne;else if(1<ue){for(var xe=Array(ue),me=0;me<ue;me++)xe[me]=arguments[me+2];W.children=xe}if(w&&w.defaultProps)for(B in ue=w.defaultProps,ue)W[B]===void 0&&(W[B]=ue[B]);return $(w,oe,void 0,void 0,null,W)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(w){return{$$typeof:g,render:w}},_e.isValidElement=Ee,_e.lazy=function(w){return{$$typeof:v,_payload:{_status:-1,_result:w},_init:J}},_e.memo=function(w,V){return{$$typeof:x,type:w,compare:V===void 0?null:V}},_e.startTransition=function(w){var V=L.T,ne={};L.T=ne;try{var B=w(),W=L.S;W!==null&&W(ne,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(Se,fe)}catch(oe){fe(oe)}finally{L.T=V}},_e.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},_e.use=function(w){return L.H.use(w)},_e.useActionState=function(w,V,ne){return L.H.useActionState(w,V,ne)},_e.useCallback=function(w,V){return L.H.useCallback(w,V)},_e.useContext=function(w){return L.H.useContext(w)},_e.useDebugValue=function(){},_e.useDeferredValue=function(w,V){return L.H.useDeferredValue(w,V)},_e.useEffect=function(w,V,ne){var B=L.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return B.useEffect(w,V)},_e.useId=function(){return L.H.useId()},_e.useImperativeHandle=function(w,V,ne){return L.H.useImperativeHandle(w,V,ne)},_e.useInsertionEffect=function(w,V){return L.H.useInsertionEffect(w,V)},_e.useLayoutEffect=function(w,V){return L.H.useLayoutEffect(w,V)},_e.useMemo=function(w,V){return L.H.useMemo(w,V)},_e.useOptimistic=function(w,V){return L.H.useOptimistic(w,V)},_e.useReducer=function(w,V,ne){return L.H.useReducer(w,V,ne)},_e.useRef=function(w){return L.H.useRef(w)},_e.useState=function(w){return L.H.useState(w)},_e.useSyncExternalStore=function(w,V,ne){return L.H.useSyncExternalStore(w,V,ne)},_e.useTransition=function(){return L.H.useTransition()},_e.version="19.1.1",_e}var gh;function sf(){return gh||(gh=1,kc.exports=Zx()),kc.exports}var Rc={exports:{}},Ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function Qx(){if(xh)return Ut;xh=1;var a=sf();function r(S){var x="https://react.dev/errors/"+S;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)x+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+S+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(S,x,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:E==null?null:""+E,children:S,containerInfo:x,implementation:v}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(S,x){if(S==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ut.createPortal=function(S,x){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(r(299));return d(S,x,null,v)},Ut.flushSync=function(S){var x=p.T,v=u.p;try{if(p.T=null,u.p=2,S)return S()}finally{p.T=x,u.p=v,u.d.f()}},Ut.preconnect=function(S,x){typeof S=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,u.d.C(S,x))},Ut.prefetchDNS=function(S){typeof S=="string"&&u.d.D(S)},Ut.preinit=function(S,x){if(typeof S=="string"&&x&&typeof x.as=="string"){var v=x.as,E=g(v,x.crossOrigin),A=typeof x.integrity=="string"?x.integrity:void 0,F=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;v==="style"?u.d.S(S,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:E,integrity:A,fetchPriority:F}):v==="script"&&u.d.X(S,{crossOrigin:E,integrity:A,fetchPriority:F,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Ut.preinitModule=function(S,x){if(typeof S=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var v=g(x.as,x.crossOrigin);u.d.M(S,{crossOrigin:v,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&u.d.M(S)},Ut.preload=function(S,x){if(typeof S=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var v=x.as,E=g(v,x.crossOrigin);u.d.L(S,v,{crossOrigin:E,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Ut.preloadModule=function(S,x){if(typeof S=="string")if(x){var v=g(x.as,x.crossOrigin);u.d.m(S,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:v,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else u.d.m(S)},Ut.requestFormReset=function(S){u.d.r(S)},Ut.unstable_batchedUpdates=function(S,x){return S(x)},Ut.useFormState=function(S,x,v){return p.H.useFormState(S,x,v)},Ut.useFormStatus=function(){return p.H.useHostTransitionStatus()},Ut.version="19.1.1",Ut}var yh;function wp(){if(yh)return Rc.exports;yh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Rc.exports=Qx(),Rc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh;function Kx(){if(vh)return tr;vh=1;var a=$x(),r=sf(),o=wp();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(u(188))}function S(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,i=t;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return g(l),e;if(s===i)return g(l),t;s=s.sibling}throw Error(u(188))}if(n.return!==i.return)n=l,i=s;else{for(var h=!1,m=l.child;m;){if(m===n){h=!0,n=l,i=s;break}if(m===i){h=!0,i=l,n=s;break}m=m.sibling}if(!h){for(m=s.child;m;){if(m===n){h=!0,n=s,i=l;break}if(m===i){h=!0,i=s,n=l;break}m=m.sibling}if(!h)throw Error(u(189))}}if(n.alternate!==i)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),K=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),Ge=Symbol.for("react.memo_cache_sentinel"),Re=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=Re&&e[Re]||e["@@iterator"],typeof e=="function"?e:null)}var se=Symbol.for("react.client.reference");function ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case k:return"Profiler";case M:return"StrictMode";case L:return"Suspense";case te:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case K:return(e.displayName||"Context")+".Provider";case q:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:ye(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return ye(e(t))}catch{}}return null}var ve=Array.isArray,_=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},Se=[],w=-1;function V(e){return{current:e}}function ne(e){0>w||(e.current=Se[w],Se[w]=null,w--)}function B(e,t){w++,Se[w]=e.current,e.current=t}var W=V(null),oe=V(null),ue=V(null),xe=V(null);function me(e,t){switch(B(ue,t),B(oe,e),B(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?L0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=L0(t),e=q0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(W),B(W,e)}function Ce(){ne(W),ne(oe),ne(ue)}function at(e){e.memoizedState!==null&&B(xe,e);var t=W.current,n=q0(t,e.type);t!==n&&(B(oe,e),B(W,n))}function bt(e){oe.current===e&&(ne(W),ne(oe)),xe.current===e&&(ne(xe),Jl._currentValue=fe)}var pe=Object.prototype.hasOwnProperty,be=a.unstable_scheduleCallback,Be=a.unstable_cancelCallback,Le=a.unstable_shouldYield,xt=a.unstable_requestPaint,it=a.unstable_now,_n=a.unstable_getCurrentPriorityLevel,Pt=a.unstable_ImmediatePriority,b=a.unstable_UserBlockingPriority,j=a.unstable_NormalPriority,H=a.unstable_LowPriority,ie=a.unstable_IdlePriority,ae=a.log,ee=a.unstable_setDisableYieldValue,ce=null,Ae=null;function je(e){if(typeof ae=="function"&&ee(e),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(ce,e)}catch{}}var $e=Math.clz32?Math.clz32:ra,Vt=Math.log,Ht=Math.LN2;function ra(e){return e>>>=0,e===0?32:31-(Vt(e)/Ht|0)|0}var St=256,Sn=4194304;function Ct(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wt(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,s=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var m=i&134217727;return m!==0?(i=m&~s,i!==0?l=Ct(i):(h&=m,h!==0?l=Ct(h):n||(n=m&~e,n!==0&&(l=Ct(n))))):(m=i&~s,m!==0?l=Ct(m):h!==0?l=Ct(h):n||(n=i&~e,n!==0&&(l=Ct(n)))),l===0?0:t!==0&&t!==l&&(t&s)===0&&(s=l&-l,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:l}function qn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ii(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function al(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function Er(){var e=Sn;return Sn<<=1,(Sn&62914560)===0&&(Sn=4194304),e}function On(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function un(e,t,n,i,l,s){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,y=e.expirationTimes,O=e.hiddenUpdates;for(n=h&~n;0<n;){var G=31-$e(n),Q=1<<G;m[G]=0,y[G]=-1;var R=O[G];if(R!==null)for(O[G]=null,G=0;G<R.length;G++){var N=R[G];N!==null&&(N.lane&=-536870913)}n&=~Q}i!==0&&il(e,i,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(h&~t))}function il(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-$e(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function li(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-$e(n),l=1<<i;l&t|e[i]&t&&(e[i]|=t),n&=~l}}function ll(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zr(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:lh(e.type))}function bo(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var Yt=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Yt,ot="__reactProps$"+Yt,Gn="__reactContainer$"+Yt,sa="__reactEvents$"+Yt,Cm="__reactListeners$"+Yt,km="__reactHandles$"+Yt,jf="__reactResources$"+Yt,rl="__reactMarker$"+Yt;function So(e){delete e[Ke],delete e[ot],delete e[sa],delete e[Cm],delete e[km]}function ri(e){var t=e[Ke];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gn]||n[Ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=X0(e);e!==null;){if(n=e[Ke])return n;e=X0(e)}return t}e=n,n=e.parentNode}return null}function si(e){if(e=e[Ke]||e[Gn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function sl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function oi(e){var t=e[jf];return t||(t=e[jf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Et(e){e[rl]=!0}var Df=new Set,_f={};function Ra(e,t){ui(e,t),ui(e+"Capture",t)}function ui(e,t){for(_f[e]=t,e=0;e<t.length;e++)Df.add(t[e])}var Rm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Of={},Cf={};function Nm(e){return pe.call(Cf,e)?!0:pe.call(Of,e)?!1:Rm.test(e)?Cf[e]=!0:(Of[e]=!0,!1)}function Ar(e,t,n){if(Nm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Tr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Yn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var wo,kf;function ci(e){if(wo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wo=t&&t[1]||"",kf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wo+e+kf}var Eo=!1;function zo(e,t){if(!e||Eo)return"";Eo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(N){var R=N}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(N){R=N}e.call(Q.prototype)}}else{try{throw Error()}catch(N){R=N}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(N){if(N&&R&&typeof N.stack=="string")return[N.stack,R.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),h=s[0],m=s[1];if(h&&m){var y=h.split(`
`),O=m.split(`
`);for(l=i=0;i<y.length&&!y[i].includes("DetermineComponentFrameRoot");)i++;for(;l<O.length&&!O[l].includes("DetermineComponentFrameRoot");)l++;if(i===y.length||l===O.length)for(i=y.length-1,l=O.length-1;1<=i&&0<=l&&y[i]!==O[l];)l--;for(;1<=i&&0<=l;i--,l--)if(y[i]!==O[l]){if(i!==1||l!==1)do if(i--,l--,0>l||y[i]!==O[l]){var G=`
`+y[i].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=i&&0<=l);break}}}finally{Eo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ci(n):""}function Mm(e){switch(e.tag){case 26:case 27:case 5:return ci(e.type);case 16:return ci("Lazy");case 13:return ci("Suspense");case 19:return ci("SuspenseList");case 0:case 15:return zo(e.type,!1);case 11:return zo(e.type.render,!1);case 1:return zo(e.type,!0);case 31:return ci("Activity");default:return""}}function Rf(e){try{var t="";do t+=Mm(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function cn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Um(e){var t=Nf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(h){i=""+h,s.call(this,h)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(h){i=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){e._valueTracker||(e._valueTracker=Um(e))}function Mf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Nf(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bm=/[\n"\\]/g;function fn(e){return e.replace(Bm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ao(e,t,n,i,l,s,h,m){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+cn(t)):e.value!==""+cn(t)&&(e.value=""+cn(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?To(e,h,cn(t)):n!=null?To(e,h,cn(n)):i!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+cn(m):e.removeAttribute("name")}function Uf(e,t,n,i,l,s,h,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;n=n!=null?""+cn(n):"",t=t!=null?""+cn(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=m?e.checked:!!i,e.defaultChecked=!!i,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h)}function To(e,t,n){t==="number"&&Dr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function fi(e,t,n,i){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&i&&(e[n].defaultSelected=!0)}else{for(n=""+cn(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Bf(e,t,n){if(t!=null&&(t=""+cn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+cn(n):""}function Hf(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(u(92));if(ve(i)){if(1<i.length)throw Error(u(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=cn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function di(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lf(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Hm.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function qf(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&n[l]!==i&&Lf(e,l,i)}else for(var s in t)t.hasOwnProperty(s)&&Lf(e,s,t[s])}function jo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _r(e){return qm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Do=null;function _o(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hi=null,pi=null;function Vf(e){var t=si(e);if(t&&(e=t.stateNode)){var n=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ao(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+fn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var l=i[ot]||null;if(!l)throw Error(u(90));Ao(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Mf(i)}break e;case"textarea":Bf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&fi(e,!!n.multiple,t,!1)}}}var Oo=!1;function Gf(e,t,n){if(Oo)return e(t,n);Oo=!0;try{var i=e(t);return i}finally{if(Oo=!1,(hi!==null||pi!==null)&&(ps(),hi&&(t=hi,e=pi,pi=hi=null,Vf(t),e)))for(t=0;t<e.length;t++)Vf(e[t])}}function ol(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ot]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Co=!1;if(Xn)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){Co=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{Co=!1}var oa=null,ko=null,Or=null;function Yf(){if(Or)return Or;var e,t=ko,n=t.length,i,l="value"in oa?oa.value:oa.textContent,s=l.length;for(e=0;e<n&&t[e]===l[e];e++);var h=n-e;for(i=1;i<=h&&t[n-i]===l[s-i];i++);return Or=l.slice(e,1<i?1-i:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function Xf(){return!1}function Xt(e){function t(n,i,l,s,h){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=s,this.target=h,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?kr:Xf,this.isPropagationStopped=Xf,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),t}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rr=Xt(Na),cl=v({},Na,{view:0,detail:0}),Vm=Xt(cl),Ro,No,fl,Nr=v({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fl&&(fl&&e.type==="mousemove"?(Ro=e.screenX-fl.screenX,No=e.screenY-fl.screenY):No=Ro=0,fl=e),Ro)},movementY:function(e){return"movementY"in e?e.movementY:No}}),$f=Xt(Nr),Gm=v({},Nr,{dataTransfer:0}),Ym=Xt(Gm),Xm=v({},cl,{relatedTarget:0}),Mo=Xt(Xm),$m=v({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),Zm=Xt($m),Qm=v({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Km=Xt(Qm),Jm=v({},Na,{data:0}),Zf=Xt(Jm),Fm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Im={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Im[e])?!!t[e]:!1}function Uo(){return Pm}var eg=v({},cl,{key:function(e){if(e.key){var t=Fm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uo,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tg=Xt(eg),ng=v({},Nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qf=Xt(ng),ag=v({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uo}),ig=Xt(ag),lg=v({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),rg=Xt(lg),sg=v({},Nr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),og=Xt(sg),ug=v({},Na,{newState:0,oldState:0}),cg=Xt(ug),fg=[9,13,27,32],Bo=Xn&&"CompositionEvent"in window,dl=null;Xn&&"documentMode"in document&&(dl=document.documentMode);var dg=Xn&&"TextEvent"in window&&!dl,Kf=Xn&&(!Bo||dl&&8<dl&&11>=dl),Jf=" ",Ff=!1;function Wf(e,t){switch(e){case"keyup":return fg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mi=!1;function hg(e,t){switch(e){case"compositionend":return If(t);case"keypress":return t.which!==32?null:(Ff=!0,Jf);case"textInput":return e=t.data,e===Jf&&Ff?null:e;default:return null}}function pg(e,t){if(mi)return e==="compositionend"||!Bo&&Wf(e,t)?(e=Yf(),Or=ko=oa=null,mi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kf&&t.locale!=="ko"?null:t.data;default:return null}}var mg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mg[e.type]:t==="textarea"}function ed(e,t,n,i){hi?pi?pi.push(i):pi=[i]:hi=i,t=bs(t,"onChange"),0<t.length&&(n=new Rr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var hl=null,pl=null;function gg(e){N0(e,0)}function Mr(e){var t=sl(e);if(Mf(t))return e}function td(e,t){if(e==="change")return t}var nd=!1;if(Xn){var Ho;if(Xn){var Lo="oninput"in document;if(!Lo){var ad=document.createElement("div");ad.setAttribute("oninput","return;"),Lo=typeof ad.oninput=="function"}Ho=Lo}else Ho=!1;nd=Ho&&(!document.documentMode||9<document.documentMode)}function id(){hl&&(hl.detachEvent("onpropertychange",ld),pl=hl=null)}function ld(e){if(e.propertyName==="value"&&Mr(pl)){var t=[];ed(t,pl,e,_o(e)),Gf(gg,t)}}function xg(e,t,n){e==="focusin"?(id(),hl=t,pl=n,hl.attachEvent("onpropertychange",ld)):e==="focusout"&&id()}function yg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mr(pl)}function vg(e,t){if(e==="click")return Mr(t)}function bg(e,t){if(e==="input"||e==="change")return Mr(t)}function Sg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var en=typeof Object.is=="function"?Object.is:Sg;function ml(e,t){if(en(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!pe.call(t,l)||!en(e[l],t[l]))return!1}return!0}function rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sd(e,t){var n=rd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rd(n)}}function od(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?od(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ud(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Dr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dr(e.document)}return t}function qo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var wg=Xn&&"documentMode"in document&&11>=document.documentMode,gi=null,Vo=null,gl=null,Go=!1;function cd(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Go||gi==null||gi!==Dr(i)||(i=gi,"selectionStart"in i&&qo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),gl&&ml(gl,i)||(gl=i,i=bs(Vo,"onSelect"),0<i.length&&(t=new Rr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=gi)))}function Ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xi={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},Yo={},fd={};Xn&&(fd=document.createElement("div").style,"AnimationEvent"in window||(delete xi.animationend.animation,delete xi.animationiteration.animation,delete xi.animationstart.animation),"TransitionEvent"in window||delete xi.transitionend.transition);function Ua(e){if(Yo[e])return Yo[e];if(!xi[e])return e;var t=xi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fd)return Yo[e]=t[n];return e}var dd=Ua("animationend"),hd=Ua("animationiteration"),pd=Ua("animationstart"),Eg=Ua("transitionrun"),zg=Ua("transitionstart"),Ag=Ua("transitioncancel"),md=Ua("transitionend"),gd=new Map,Xo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xo.push("scrollEnd");function wn(e,t){gd.set(e,t),Ra(t,[e])}var xd=new WeakMap;function dn(e,t){if(typeof e=="object"&&e!==null){var n=xd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Rf(t)},xd.set(e,t),t)}return{value:e,source:t,stack:Rf(t)}}var hn=[],yi=0,$o=0;function Ur(){for(var e=yi,t=$o=yi=0;t<e;){var n=hn[t];hn[t++]=null;var i=hn[t];hn[t++]=null;var l=hn[t];hn[t++]=null;var s=hn[t];if(hn[t++]=null,i!==null&&l!==null){var h=i.pending;h===null?l.next=l:(l.next=h.next,h.next=l),i.pending=l}s!==0&&yd(n,l,s)}}function Br(e,t,n,i){hn[yi++]=e,hn[yi++]=t,hn[yi++]=n,hn[yi++]=i,$o|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Zo(e,t,n,i){return Br(e,t,n,i),Hr(e)}function vi(e,t){return Br(e,null,null,t),Hr(e)}function yd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var l=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&t!==null&&(l=31-$e(n),e=s.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=n|536870912),s):null}function Hr(e){if(50<Vl)throw Vl=0,Iu=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var bi={};function Tg(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(e,t,n,i){return new Tg(e,t,n,i)}function Qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $n(e,t){var n=e.alternate;return n===null?(n=tn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Lr(e,t,n,i,l,s){var h=0;if(i=e,typeof e=="function")Qo(e)&&(h=1);else if(typeof e=="string")h=Dx(e,n,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=tn(31,n,t,l),e.elementType=Ee,e.lanes=s,e;case C:return Ba(n.children,l,s,t);case M:h=8,l|=24;break;case k:return e=tn(12,n,t,l|2),e.elementType=k,e.lanes=s,e;case L:return e=tn(13,n,t,l),e.elementType=L,e.lanes=s,e;case te:return e=tn(19,n,t,l),e.elementType=te,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z:case K:h=10;break e;case q:h=9;break e;case re:h=11;break e;case $:h=14;break e;case le:h=16,i=null;break e}h=29,n=Error(u(130,e===null?"null":typeof e,"")),i=null}return t=tn(h,n,t,l),t.elementType=e,t.type=i,t.lanes=s,t}function Ba(e,t,n,i){return e=tn(7,e,i,t),e.lanes=n,e}function Ko(e,t,n){return e=tn(6,e,null,t),e.lanes=n,e}function Jo(e,t,n){return t=tn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Si=[],wi=0,qr=null,Vr=0,pn=[],mn=0,Ha=null,Zn=1,Qn="";function La(e,t){Si[wi++]=Vr,Si[wi++]=qr,qr=e,Vr=t}function bd(e,t,n){pn[mn++]=Zn,pn[mn++]=Qn,pn[mn++]=Ha,Ha=e;var i=Zn;e=Qn;var l=32-$e(i)-1;i&=~(1<<l),n+=1;var s=32-$e(t)+l;if(30<s){var h=l-l%5;s=(i&(1<<h)-1).toString(32),i>>=h,l-=h,Zn=1<<32-$e(t)+l|n<<l|i,Qn=s+e}else Zn=1<<s|n<<l|i,Qn=e}function Fo(e){e.return!==null&&(La(e,1),bd(e,1,0))}function Wo(e){for(;e===qr;)qr=Si[--wi],Si[wi]=null,Vr=Si[--wi],Si[wi]=null;for(;e===Ha;)Ha=pn[--mn],pn[mn]=null,Qn=pn[--mn],pn[mn]=null,Zn=pn[--mn],pn[mn]=null}var Lt=null,rt=null,Ye=!1,qa=null,Cn=!1,Io=Error(u(519));function Va(e){var t=Error(u(418,""));throw vl(dn(t,e)),Io}function Sd(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Ke]=e,t[ot]=i,n){case"dialog":Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":case"embed":Ue("load",t);break;case"video":case"audio":for(n=0;n<Yl.length;n++)Ue(Yl[n],t);break;case"source":Ue("error",t);break;case"img":case"image":case"link":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"input":Ue("invalid",t),Uf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),jr(t);break;case"select":Ue("invalid",t);break;case"textarea":Ue("invalid",t),Hf(t,i.value,i.defaultValue,i.children),jr(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||H0(t.textContent,n)?(i.popover!=null&&(Ue("beforetoggle",t),Ue("toggle",t)),i.onScroll!=null&&Ue("scroll",t),i.onScrollEnd!=null&&Ue("scrollend",t),i.onClick!=null&&(t.onclick=Ss),t=!0):t=!1,t||Va(e)}function wd(e){for(Lt=e.return;Lt;)switch(Lt.tag){case 5:case 13:Cn=!1;return;case 27:case 3:Cn=!0;return;default:Lt=Lt.return}}function xl(e){if(e!==Lt)return!1;if(!Ye)return wd(e),Ye=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||pc(e.type,e.memoizedProps)),n=!n),n&&rt&&Va(e),wd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){rt=zn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}rt=null}}else t===27?(t=rt,za(e.type)?(e=yc,yc=null,rt=e):rt=t):rt=Lt?zn(e.stateNode.nextSibling):null;return!0}function yl(){rt=Lt=null,Ye=!1}function Ed(){var e=qa;return e!==null&&(Qt===null?Qt=e:Qt.push.apply(Qt,e),qa=null),e}function vl(e){qa===null?qa=[e]:qa.push(e)}var Po=V(null),Ga=null,Kn=null;function ua(e,t,n){B(Po,t._currentValue),t._currentValue=n}function Jn(e){e._currentValue=Po.current,ne(Po)}function eu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function tu(e,t,n,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var h=l.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=l;for(var y=0;y<t.length;y++)if(m.context===t[y]){s.lanes|=n,m=s.alternate,m!==null&&(m.lanes|=n),eu(s.return,n,e),i||(h=null);break e}s=m.next}}else if(l.tag===18){if(h=l.return,h===null)throw Error(u(341));h.lanes|=n,s=h.alternate,s!==null&&(s.lanes|=n),eu(h,n,e),h=null}else h=l.child;if(h!==null)h.return=l;else for(h=l;h!==null;){if(h===e){h=null;break}if(l=h.sibling,l!==null){l.return=h.return,h=l;break}h=h.return}l=h}}function bl(e,t,n,i){e=null;for(var l=t,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var h=l.alternate;if(h===null)throw Error(u(387));if(h=h.memoizedProps,h!==null){var m=l.type;en(l.pendingProps.value,h.value)||(e!==null?e.push(m):e=[m])}}else if(l===xe.current){if(h=l.alternate,h===null)throw Error(u(387));h.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Jl):e=[Jl])}l=l.return}e!==null&&tu(t,e,n,i),t.flags|=262144}function Gr(e){for(e=e.firstContext;e!==null;){if(!en(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ya(e){Ga=e,Kn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mt(e){return zd(Ga,e)}function Yr(e,t){return Ga===null&&Ya(e),zd(e,t)}function zd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Kn===null){if(e===null)throw Error(u(308));Kn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kn=Kn.next=t;return n}var jg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Dg=a.unstable_scheduleCallback,_g=a.unstable_NormalPriority,yt={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nu(){return{controller:new jg,data:new Map,refCount:0}}function Sl(e){e.refCount--,e.refCount===0&&Dg(_g,function(){e.controller.abort()})}var wl=null,au=0,Ei=0,zi=null;function Og(e,t){if(wl===null){var n=wl=[];au=0,Ei=lc(),zi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return au++,t.then(Ad,Ad),t}function Ad(){if(--au===0&&wl!==null){zi!==null&&(zi.status="fulfilled");var e=wl;wl=null,Ei=0,zi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Cg(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var Td=_.S;_.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Og(e,t),Td!==null&&Td(e,t)};var Xa=V(null);function iu(){var e=Xa.current;return e!==null?e:Pe.pooledCache}function Xr(e,t){t===null?B(Xa,Xa.current):B(Xa,t.pool)}function jd(){var e=iu();return e===null?null:{parent:yt._currentValue,pool:e}}var El=Error(u(460)),Dd=Error(u(474)),$r=Error(u(542)),lu={then:function(){}};function _d(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zr(){}function Od(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Zr,Zr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kd(e),e;default:if(typeof t.status=="string")t.then(Zr,Zr);else{if(e=Pe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kd(e),e}throw zl=t,El}}var zl=null;function Cd(){if(zl===null)throw Error(u(459));var e=zl;return zl=null,e}function kd(e){if(e===El||e===$r)throw Error(u(483))}var ca=!1;function ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function da(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ze&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=Hr(e),yd(e,null,n),t}return Br(e,i,t,n),Hr(e)}function Al(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,li(e,n)}}function ou(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?l=s=h:s=s.next=h,n=n.next}while(n!==null);s===null?l=s=t:s=s.next=t}else l=s=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var uu=!1;function Tl(){if(uu){var e=zi;if(e!==null)throw e}}function jl(e,t,n,i){uu=!1;var l=e.updateQueue;ca=!1;var s=l.firstBaseUpdate,h=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var y=m,O=y.next;y.next=null,h===null?s=O:h.next=O,h=y;var G=e.alternate;G!==null&&(G=G.updateQueue,m=G.lastBaseUpdate,m!==h&&(m===null?G.firstBaseUpdate=O:m.next=O,G.lastBaseUpdate=y))}if(s!==null){var Q=l.baseState;h=0,G=O=y=null,m=s;do{var R=m.lane&-536870913,N=R!==m.lane;if(N?(He&R)===R:(i&R)===R){R!==0&&R===Ei&&(uu=!0),G!==null&&(G=G.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var Te=e,we=m;R=t;var We=n;switch(we.tag){case 1:if(Te=we.payload,typeof Te=="function"){Q=Te.call(We,Q,R);break e}Q=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=we.payload,R=typeof Te=="function"?Te.call(We,Q,R):Te,R==null)break e;Q=v({},Q,R);break e;case 2:ca=!0}}R=m.callback,R!==null&&(e.flags|=64,N&&(e.flags|=8192),N=l.callbacks,N===null?l.callbacks=[R]:N.push(R))}else N={lane:R,tag:m.tag,payload:m.payload,callback:m.callback,next:null},G===null?(O=G=N,y=Q):G=G.next=N,h|=R;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;N=m,m=N.next,N.next=null,l.lastBaseUpdate=N,l.shared.pending=null}}while(!0);G===null&&(y=Q),l.baseState=y,l.firstBaseUpdate=O,l.lastBaseUpdate=G,s===null&&(l.shared.lanes=0),ba|=h,e.lanes=h,e.memoizedState=Q}}function Rd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Nd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rd(n[e],t)}var Ai=V(null),Qr=V(0);function Md(e,t){e=na,B(Qr,e),B(Ai,t),na=e|t.baseLanes}function cu(){B(Qr,na),B(Ai,Ai.current)}function fu(){na=Qr.current,ne(Ai),ne(Qr)}var ha=0,ke=null,Je=null,dt=null,Kr=!1,Ti=!1,$a=!1,Jr=0,Dl=0,ji=null,kg=0;function ut(){throw Error(u(321))}function du(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!en(e[n],t[n]))return!1;return!0}function hu(e,t,n,i,l,s){return ha=s,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?y1:v1,$a=!1,s=n(i,l),$a=!1,Ti&&(s=Bd(t,n,i,l)),Ud(e),s}function Ud(e){_.H=ts;var t=Je!==null&&Je.next!==null;if(ha=0,dt=Je=ke=null,Kr=!1,Dl=0,ji=null,t)throw Error(u(300));e===null||zt||(e=e.dependencies,e!==null&&Gr(e)&&(zt=!0))}function Bd(e,t,n,i){ke=e;var l=0;do{if(Ti&&(ji=null),Dl=0,Ti=!1,25<=l)throw Error(u(301));if(l+=1,dt=Je=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}_.H=Lg,s=t(n,i)}while(Ti);return s}function Rg(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?_l(t):t,e=e.useState()[0],(Je!==null?Je.memoizedState:null)!==e&&(ke.flags|=1024),t}function pu(){var e=Jr!==0;return Jr=0,e}function mu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function gu(e){if(Kr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Kr=!1}ha=0,dt=Je=ke=null,Ti=!1,Dl=Jr=0,ji=null}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?ke.memoizedState=dt=e:dt=dt.next=e,dt}function ht(){if(Je===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Je.next;var t=dt===null?ke.memoizedState:dt.next;if(t!==null)dt=t,Je=e;else{if(e===null)throw ke.alternate===null?Error(u(467)):Error(u(310));Je=e,e={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},dt===null?ke.memoizedState=dt=e:dt=dt.next=e}return dt}function xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _l(e){var t=Dl;return Dl+=1,ji===null&&(ji=[]),e=Od(ji,e,t),t=ke,(dt===null?t.memoizedState:dt.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?y1:v1),e}function Fr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _l(e);if(e.$$typeof===K)return Mt(e)}throw Error(u(438,String(e)))}function yu(e){var t=null,n=ke.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ke.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=xu(),ke.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Ge;return t.index++,n}function Fn(e,t){return typeof t=="function"?t(e):t}function Wr(e){var t=ht();return vu(t,Je,e)}function vu(e,t,n){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=n;var l=e.baseQueue,s=i.pending;if(s!==null){if(l!==null){var h=l.next;l.next=s.next,s.next=h}t.baseQueue=l=s,i.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{t=l.next;var m=h=null,y=null,O=t,G=!1;do{var Q=O.lane&-536870913;if(Q!==O.lane?(He&Q)===Q:(ha&Q)===Q){var R=O.revertLane;if(R===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),Q===Ei&&(G=!0);else if((ha&R)===R){O=O.next,R===Ei&&(G=!0);continue}else Q={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},y===null?(m=y=Q,h=s):y=y.next=Q,ke.lanes|=R,ba|=R;Q=O.action,$a&&n(s,Q),s=O.hasEagerState?O.eagerState:n(s,Q)}else R={lane:Q,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},y===null?(m=y=R,h=s):y=y.next=R,ke.lanes|=Q,ba|=Q;O=O.next}while(O!==null&&O!==t);if(y===null?h=s:y.next=m,!en(s,e.memoizedState)&&(zt=!0,G&&(n=zi,n!==null)))throw n;e.memoizedState=s,e.baseState=h,e.baseQueue=y,i.lastRenderedState=s}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function bu(e){var t=ht(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var i=n.dispatch,l=n.pending,s=t.memoizedState;if(l!==null){n.pending=null;var h=l=l.next;do s=e(s,h.action),h=h.next;while(h!==l);en(s,t.memoizedState)||(zt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Hd(e,t,n){var i=ke,l=ht(),s=Ye;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var h=!en((Je||l).memoizedState,n);h&&(l.memoizedState=n,zt=!0),l=l.queue;var m=Vd.bind(null,i,l,e);if(Ol(2048,8,m,[e]),l.getSnapshot!==t||h||dt!==null&&dt.memoizedState.tag&1){if(i.flags|=2048,Di(9,Ir(),qd.bind(null,i,l,n,t),null),Pe===null)throw Error(u(349));s||(ha&124)!==0||Ld(i,t,n)}return n}function Ld(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t=xu(),ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qd(e,t,n,i){t.value=n,t.getSnapshot=i,Gd(t)&&Yd(e)}function Vd(e,t,n){return n(function(){Gd(t)&&Yd(e)})}function Gd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!en(e,n)}catch{return!0}}function Yd(e){var t=vi(e,2);t!==null&&sn(t,e,2)}function Su(e){var t=$t();if(typeof e=="function"){var n=e;if(e=n(),$a){je(!0);try{n()}finally{je(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:e},t}function Xd(e,t,n,i){return e.baseState=n,vu(e,Je,typeof i=="function"?i:Fn)}function Ng(e,t,n,i,l){if(es(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){s.listeners.push(h)}};_.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,$d(t,s)):(s.next=n.next,t.pending=n.next=s)}}function $d(e,t){var n=t.action,i=t.payload,l=e.state;if(t.isTransition){var s=_.T,h={};_.T=h;try{var m=n(l,i),y=_.S;y!==null&&y(h,m),Zd(e,t,m)}catch(O){wu(e,t,O)}finally{_.T=s}}else try{s=n(l,i),Zd(e,t,s)}catch(O){wu(e,t,O)}}function Zd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Qd(e,t,i)},function(i){return wu(e,t,i)}):Qd(e,t,n)}function Qd(e,t,n){t.status="fulfilled",t.value=n,Kd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$d(e,n)))}function wu(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Kd(t),t=t.next;while(t!==i)}e.action=null}function Kd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Jd(e,t){return t}function Fd(e,t){if(Ye){var n=Pe.formState;if(n!==null){e:{var i=ke;if(Ye){if(rt){t:{for(var l=rt,s=Cn;l.nodeType!==8;){if(!s){l=null;break t}if(l=zn(l.nextSibling),l===null){l=null;break t}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){rt=zn(l.nextSibling),i=l.data==="F!";break e}}Va(i)}i=!1}i&&(t=n[0])}}return n=$t(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jd,lastRenderedState:t},n.queue=i,n=m1.bind(null,ke,i),i.dispatch=n,i=Su(!1),s=ju.bind(null,ke,!1,i.queue),i=$t(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,n=Ng.bind(null,ke,l,s,n),l.dispatch=n,i.memoizedState=e,[t,n,!1]}function Wd(e){var t=ht();return Id(t,Je,e)}function Id(e,t,n){if(t=vu(e,t,Jd)[0],e=Wr(Fn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=_l(t)}catch(h){throw h===El?$r:h}else i=t;t=ht();var l=t.queue,s=l.dispatch;return n!==t.memoizedState&&(ke.flags|=2048,Di(9,Ir(),Mg.bind(null,l,n),null)),[i,s,e]}function Mg(e,t){e.action=t}function Pd(e){var t=ht(),n=Je;if(n!==null)return Id(t,n,e);ht(),t=t.memoizedState,n=ht();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Di(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ke.updateQueue,t===null&&(t=xu(),ke.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Ir(){return{destroy:void 0,resource:void 0}}function e1(){return ht().memoizedState}function Pr(e,t,n,i){var l=$t();i=i===void 0?null:i,ke.flags|=e,l.memoizedState=Di(1|t,Ir(),n,i)}function Ol(e,t,n,i){var l=ht();i=i===void 0?null:i;var s=l.memoizedState.inst;Je!==null&&i!==null&&du(i,Je.memoizedState.deps)?l.memoizedState=Di(t,s,n,i):(ke.flags|=e,l.memoizedState=Di(1|t,s,n,i))}function t1(e,t){Pr(8390656,8,e,t)}function n1(e,t){Ol(2048,8,e,t)}function a1(e,t){return Ol(4,2,e,t)}function i1(e,t){return Ol(4,4,e,t)}function l1(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function r1(e,t,n){n=n!=null?n.concat([e]):null,Ol(4,4,l1.bind(null,t,e),n)}function Eu(){}function s1(e,t){var n=ht();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&du(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function o1(e,t){var n=ht();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&du(t,i[1]))return i[0];if(i=e(),$a){je(!0);try{e()}finally{je(!1)}}return n.memoizedState=[i,t],i}function zu(e,t,n){return n===void 0||(ha&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=f0(),ke.lanes|=e,ba|=e,n)}function u1(e,t,n,i){return en(n,t)?n:Ai.current!==null?(e=zu(e,n,i),en(e,t)||(zt=!0),e):(ha&42)===0?(zt=!0,e.memoizedState=n):(e=f0(),ke.lanes|=e,ba|=e,t)}function c1(e,t,n,i,l){var s=J.p;J.p=s!==0&&8>s?s:8;var h=_.T,m={};_.T=m,ju(e,!1,t,n);try{var y=l(),O=_.S;if(O!==null&&O(m,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var G=Cg(y,i);Cl(e,t,G,rn(e))}else Cl(e,t,i,rn(e))}catch(Q){Cl(e,t,{then:function(){},status:"rejected",reason:Q},rn())}finally{J.p=s,_.T=h}}function Ug(){}function Au(e,t,n,i){if(e.tag!==5)throw Error(u(476));var l=f1(e).queue;c1(e,l,t,fe,n===null?Ug:function(){return d1(e),n(i)})}function f1(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function d1(e){var t=f1(e).next.queue;Cl(e,t,{},rn())}function Tu(){return Mt(Jl)}function h1(){return ht().memoizedState}function p1(){return ht().memoizedState}function Bg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=rn();e=fa(n);var i=da(t,e,n);i!==null&&(sn(i,t,n),Al(i,t,n)),t={cache:nu()},e.payload=t;return}t=t.return}}function Hg(e,t,n){var i=rn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},es(e)?g1(t,n):(n=Zo(e,t,n,i),n!==null&&(sn(n,e,i),x1(n,t,i)))}function m1(e,t,n){var i=rn();Cl(e,t,n,i)}function Cl(e,t,n,i){var l={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(es(e))g1(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var h=t.lastRenderedState,m=s(h,n);if(l.hasEagerState=!0,l.eagerState=m,en(m,h))return Br(e,t,l,0),Pe===null&&Ur(),!1}catch{}finally{}if(n=Zo(e,t,l,i),n!==null)return sn(n,e,i),x1(n,t,i),!0}return!1}function ju(e,t,n,i){if(i={lane:2,revertLane:lc(),action:i,hasEagerState:!1,eagerState:null,next:null},es(e)){if(t)throw Error(u(479))}else t=Zo(e,n,i,2),t!==null&&sn(t,e,2)}function es(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function g1(e,t){Ti=Kr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function x1(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,li(e,n)}}var ts={readContext:Mt,use:Fr,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut,useHostTransitionStatus:ut,useFormState:ut,useActionState:ut,useOptimistic:ut,useMemoCache:ut,useCacheRefresh:ut},y1={readContext:Mt,use:Fr,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:t1,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Pr(4194308,4,l1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pr(4194308,4,e,t)},useInsertionEffect:function(e,t){Pr(4,2,e,t)},useMemo:function(e,t){var n=$t();t=t===void 0?null:t;var i=e();if($a){je(!0);try{e()}finally{je(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=$t();if(n!==void 0){var l=n(t);if($a){je(!0);try{n(t)}finally{je(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=Hg.bind(null,ke,e),[i.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:function(e){e=Su(e);var t=e.queue,n=m1.bind(null,ke,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Eu,useDeferredValue:function(e,t){var n=$t();return zu(n,e,t)},useTransition:function(){var e=Su(!1);return e=c1.bind(null,ke,e.queue,!0,!1),$t().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ke,l=$t();if(Ye){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Pe===null)throw Error(u(349));(He&124)!==0||Ld(i,t,n)}l.memoizedState=n;var s={value:n,getSnapshot:t};return l.queue=s,t1(Vd.bind(null,i,s,e),[e]),i.flags|=2048,Di(9,Ir(),qd.bind(null,i,s,n,t),null),n},useId:function(){var e=$t(),t=Pe.identifierPrefix;if(Ye){var n=Qn,i=Zn;n=(i&~(1<<32-$e(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=Jr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=kg++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Tu,useFormState:Fd,useActionState:Fd,useOptimistic:function(e){var t=$t();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ju.bind(null,ke,!0,n),n.dispatch=t,[e,t]},useMemoCache:yu,useCacheRefresh:function(){return $t().memoizedState=Bg.bind(null,ke)}},v1={readContext:Mt,use:Fr,useCallback:s1,useContext:Mt,useEffect:n1,useImperativeHandle:r1,useInsertionEffect:a1,useLayoutEffect:i1,useMemo:o1,useReducer:Wr,useRef:e1,useState:function(){return Wr(Fn)},useDebugValue:Eu,useDeferredValue:function(e,t){var n=ht();return u1(n,Je.memoizedState,e,t)},useTransition:function(){var e=Wr(Fn)[0],t=ht().memoizedState;return[typeof e=="boolean"?e:_l(e),t]},useSyncExternalStore:Hd,useId:h1,useHostTransitionStatus:Tu,useFormState:Wd,useActionState:Wd,useOptimistic:function(e,t){var n=ht();return Xd(n,Je,e,t)},useMemoCache:yu,useCacheRefresh:p1},Lg={readContext:Mt,use:Fr,useCallback:s1,useContext:Mt,useEffect:n1,useImperativeHandle:r1,useInsertionEffect:a1,useLayoutEffect:i1,useMemo:o1,useReducer:bu,useRef:e1,useState:function(){return bu(Fn)},useDebugValue:Eu,useDeferredValue:function(e,t){var n=ht();return Je===null?zu(n,e,t):u1(n,Je.memoizedState,e,t)},useTransition:function(){var e=bu(Fn)[0],t=ht().memoizedState;return[typeof e=="boolean"?e:_l(e),t]},useSyncExternalStore:Hd,useId:h1,useHostTransitionStatus:Tu,useFormState:Pd,useActionState:Pd,useOptimistic:function(e,t){var n=ht();return Je!==null?Xd(n,Je,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:yu,useCacheRefresh:p1},_i=null,kl=0;function ns(e){var t=kl;return kl+=1,_i===null&&(_i=[]),Od(_i,e,t)}function Rl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function as(e,t){throw t.$$typeof===E?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function b1(e){var t=e._init;return t(e._payload)}function S1(e){function t(T,z){if(e){var D=T.deletions;D===null?(T.deletions=[z],T.flags|=16):D.push(z)}}function n(T,z){if(!e)return null;for(;z!==null;)t(T,z),z=z.sibling;return null}function i(T){for(var z=new Map;T!==null;)T.key!==null?z.set(T.key,T):z.set(T.index,T),T=T.sibling;return z}function l(T,z){return T=$n(T,z),T.index=0,T.sibling=null,T}function s(T,z,D){return T.index=D,e?(D=T.alternate,D!==null?(D=D.index,D<z?(T.flags|=67108866,z):D):(T.flags|=67108866,z)):(T.flags|=1048576,z)}function h(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function m(T,z,D,X){return z===null||z.tag!==6?(z=Ko(D,T.mode,X),z.return=T,z):(z=l(z,D),z.return=T,z)}function y(T,z,D,X){var de=D.type;return de===C?G(T,z,D.props.children,X,D.key):z!==null&&(z.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===le&&b1(de)===z.type)?(z=l(z,D.props),Rl(z,D),z.return=T,z):(z=Lr(D.type,D.key,D.props,null,T.mode,X),Rl(z,D),z.return=T,z)}function O(T,z,D,X){return z===null||z.tag!==4||z.stateNode.containerInfo!==D.containerInfo||z.stateNode.implementation!==D.implementation?(z=Jo(D,T.mode,X),z.return=T,z):(z=l(z,D.children||[]),z.return=T,z)}function G(T,z,D,X,de){return z===null||z.tag!==7?(z=Ba(D,T.mode,X,de),z.return=T,z):(z=l(z,D),z.return=T,z)}function Q(T,z,D){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Ko(""+z,T.mode,D),z.return=T,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case A:return D=Lr(z.type,z.key,z.props,null,T.mode,D),Rl(D,z),D.return=T,D;case F:return z=Jo(z,T.mode,D),z.return=T,z;case le:var X=z._init;return z=X(z._payload),Q(T,z,D)}if(ve(z)||P(z))return z=Ba(z,T.mode,D,null),z.return=T,z;if(typeof z.then=="function")return Q(T,ns(z),D);if(z.$$typeof===K)return Q(T,Yr(T,z),D);as(T,z)}return null}function R(T,z,D,X){var de=z!==null?z.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return de!==null?null:m(T,z,""+D,X);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case A:return D.key===de?y(T,z,D,X):null;case F:return D.key===de?O(T,z,D,X):null;case le:return de=D._init,D=de(D._payload),R(T,z,D,X)}if(ve(D)||P(D))return de!==null?null:G(T,z,D,X,null);if(typeof D.then=="function")return R(T,z,ns(D),X);if(D.$$typeof===K)return R(T,z,Yr(T,D),X);as(T,D)}return null}function N(T,z,D,X,de){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return T=T.get(D)||null,m(z,T,""+X,de);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case A:return T=T.get(X.key===null?D:X.key)||null,y(z,T,X,de);case F:return T=T.get(X.key===null?D:X.key)||null,O(z,T,X,de);case le:var Ne=X._init;return X=Ne(X._payload),N(T,z,D,X,de)}if(ve(X)||P(X))return T=T.get(D)||null,G(z,T,X,de,null);if(typeof X.then=="function")return N(T,z,D,ns(X),de);if(X.$$typeof===K)return N(T,z,D,Yr(z,X),de);as(z,X)}return null}function Te(T,z,D,X){for(var de=null,Ne=null,ge=z,ze=z=0,Tt=null;ge!==null&&ze<D.length;ze++){ge.index>ze?(Tt=ge,ge=null):Tt=ge.sibling;var Ve=R(T,ge,D[ze],X);if(Ve===null){ge===null&&(ge=Tt);break}e&&ge&&Ve.alternate===null&&t(T,ge),z=s(Ve,z,ze),Ne===null?de=Ve:Ne.sibling=Ve,Ne=Ve,ge=Tt}if(ze===D.length)return n(T,ge),Ye&&La(T,ze),de;if(ge===null){for(;ze<D.length;ze++)ge=Q(T,D[ze],X),ge!==null&&(z=s(ge,z,ze),Ne===null?de=ge:Ne.sibling=ge,Ne=ge);return Ye&&La(T,ze),de}for(ge=i(ge);ze<D.length;ze++)Tt=N(ge,T,ze,D[ze],X),Tt!==null&&(e&&Tt.alternate!==null&&ge.delete(Tt.key===null?ze:Tt.key),z=s(Tt,z,ze),Ne===null?de=Tt:Ne.sibling=Tt,Ne=Tt);return e&&ge.forEach(function(_a){return t(T,_a)}),Ye&&La(T,ze),de}function we(T,z,D,X){if(D==null)throw Error(u(151));for(var de=null,Ne=null,ge=z,ze=z=0,Tt=null,Ve=D.next();ge!==null&&!Ve.done;ze++,Ve=D.next()){ge.index>ze?(Tt=ge,ge=null):Tt=ge.sibling;var _a=R(T,ge,Ve.value,X);if(_a===null){ge===null&&(ge=Tt);break}e&&ge&&_a.alternate===null&&t(T,ge),z=s(_a,z,ze),Ne===null?de=_a:Ne.sibling=_a,Ne=_a,ge=Tt}if(Ve.done)return n(T,ge),Ye&&La(T,ze),de;if(ge===null){for(;!Ve.done;ze++,Ve=D.next())Ve=Q(T,Ve.value,X),Ve!==null&&(z=s(Ve,z,ze),Ne===null?de=Ve:Ne.sibling=Ve,Ne=Ve);return Ye&&La(T,ze),de}for(ge=i(ge);!Ve.done;ze++,Ve=D.next())Ve=N(ge,T,ze,Ve.value,X),Ve!==null&&(e&&Ve.alternate!==null&&ge.delete(Ve.key===null?ze:Ve.key),z=s(Ve,z,ze),Ne===null?de=Ve:Ne.sibling=Ve,Ne=Ve);return e&&ge.forEach(function(qx){return t(T,qx)}),Ye&&La(T,ze),de}function We(T,z,D,X){if(typeof D=="object"&&D!==null&&D.type===C&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case A:e:{for(var de=D.key;z!==null;){if(z.key===de){if(de=D.type,de===C){if(z.tag===7){n(T,z.sibling),X=l(z,D.props.children),X.return=T,T=X;break e}}else if(z.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===le&&b1(de)===z.type){n(T,z.sibling),X=l(z,D.props),Rl(X,D),X.return=T,T=X;break e}n(T,z);break}else t(T,z);z=z.sibling}D.type===C?(X=Ba(D.props.children,T.mode,X,D.key),X.return=T,T=X):(X=Lr(D.type,D.key,D.props,null,T.mode,X),Rl(X,D),X.return=T,T=X)}return h(T);case F:e:{for(de=D.key;z!==null;){if(z.key===de)if(z.tag===4&&z.stateNode.containerInfo===D.containerInfo&&z.stateNode.implementation===D.implementation){n(T,z.sibling),X=l(z,D.children||[]),X.return=T,T=X;break e}else{n(T,z);break}else t(T,z);z=z.sibling}X=Jo(D,T.mode,X),X.return=T,T=X}return h(T);case le:return de=D._init,D=de(D._payload),We(T,z,D,X)}if(ve(D))return Te(T,z,D,X);if(P(D)){if(de=P(D),typeof de!="function")throw Error(u(150));return D=de.call(D),we(T,z,D,X)}if(typeof D.then=="function")return We(T,z,ns(D),X);if(D.$$typeof===K)return We(T,z,Yr(T,D),X);as(T,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,z!==null&&z.tag===6?(n(T,z.sibling),X=l(z,D),X.return=T,T=X):(n(T,z),X=Ko(D,T.mode,X),X.return=T,T=X),h(T)):n(T,z)}return function(T,z,D,X){try{kl=0;var de=We(T,z,D,X);return _i=null,de}catch(ge){if(ge===El||ge===$r)throw ge;var Ne=tn(29,ge,null,T.mode);return Ne.lanes=X,Ne.return=T,Ne}finally{}}}var Oi=S1(!0),w1=S1(!1),gn=V(null),kn=null;function pa(e){var t=e.alternate;B(vt,vt.current&1),B(gn,e),kn===null&&(t===null||Ai.current!==null||t.memoizedState!==null)&&(kn=e)}function E1(e){if(e.tag===22){if(B(vt,vt.current),B(gn,e),kn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(kn=e)}}else ma()}function ma(){B(vt,vt.current),B(gn,gn.current)}function Wn(e){ne(gn),kn===e&&(kn=null),ne(vt)}var vt=V(0);function is(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||xc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Du(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _u={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=rn(),l=fa(i);l.payload=t,n!=null&&(l.callback=n),t=da(e,l,i),t!==null&&(sn(t,e,i),Al(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=rn(),l=fa(i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=da(e,l,i),t!==null&&(sn(t,e,i),Al(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rn(),i=fa(n);i.tag=2,t!=null&&(i.callback=t),t=da(e,i,n),t!==null&&(sn(t,e,n),Al(t,e,n))}};function z1(e,t,n,i,l,s,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,h):t.prototype&&t.prototype.isPureReactComponent?!ml(n,i)||!ml(l,s):!0}function A1(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&_u.enqueueReplaceState(t,t.state,null)}function Za(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var ls=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function T1(e){ls(e)}function j1(e){console.error(e)}function D1(e){ls(e)}function rs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function _1(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ou(e,t,n){return n=fa(n),n.tag=3,n.payload={element:null},n.callback=function(){rs(e,t)},n}function O1(e){return e=fa(e),e.tag=3,e}function C1(e,t,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var s=i.value;e.payload=function(){return l(s)},e.callback=function(){_1(t,n,i)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){_1(t,n,i),typeof l!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})})}function qg(e,t,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&bl(t,n,l,!0),n=gn.current,n!==null){switch(n.tag){case 13:return kn===null?ec():n.alternate===null&&st===0&&(st=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===lu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),nc(e,i,l)),!1;case 22:return n.flags|=65536,i===lu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),nc(e,i,l)),!1}throw Error(u(435,n.tag))}return nc(e,i,l),ec(),!1}if(Ye)return t=gn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==Io&&(e=Error(u(422),{cause:i}),vl(dn(e,n)))):(i!==Io&&(t=Error(u(423),{cause:i}),vl(dn(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=dn(i,n),l=Ou(e.stateNode,i,l),ou(e,l),st!==4&&(st=2)),!1;var s=Error(u(520),{cause:i});if(s=dn(s,n),ql===null?ql=[s]:ql.push(s),st!==4&&(st=2),t===null)return!0;i=dn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Ou(n.stateNode,i,e),ou(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Sa===null||!Sa.has(s))))return n.flags|=65536,l&=-l,n.lanes|=l,l=O1(l),C1(l,e,n,i),ou(n,l),!1}n=n.return}while(n!==null);return!1}var k1=Error(u(461)),zt=!1;function kt(e,t,n,i){t.child=e===null?w1(t,null,n,i):Oi(t,e.child,n,i)}function R1(e,t,n,i,l){n=n.render;var s=t.ref;if("ref"in i){var h={};for(var m in i)m!=="ref"&&(h[m]=i[m])}else h=i;return Ya(t),i=hu(e,t,n,h,s,l),m=pu(),e!==null&&!zt?(mu(e,t,l),In(e,t,l)):(Ye&&m&&Fo(t),t.flags|=1,kt(e,t,i,l),t.child)}function N1(e,t,n,i,l){if(e===null){var s=n.type;return typeof s=="function"&&!Qo(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,M1(e,t,s,i,l)):(e=Lr(n.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Hu(e,l)){var h=s.memoizedProps;if(n=n.compare,n=n!==null?n:ml,n(h,i)&&e.ref===t.ref)return In(e,t,l)}return t.flags|=1,e=$n(s,i),e.ref=t.ref,e.return=t,t.child=e}function M1(e,t,n,i,l){if(e!==null){var s=e.memoizedProps;if(ml(s,i)&&e.ref===t.ref)if(zt=!1,t.pendingProps=i=s,Hu(e,l))(e.flags&131072)!==0&&(zt=!0);else return t.lanes=e.lanes,In(e,t,l)}return Cu(e,t,n,i,l)}function U1(e,t,n){var i=t.pendingProps,l=i.children,s=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=s!==null?s.baseLanes|n:n,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;t.childLanes=s&~i}else t.childLanes=0,t.child=null;return B1(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xr(t,s!==null?s.cachePool:null),s!==null?Md(t,s):cu(),E1(t);else return t.lanes=t.childLanes=536870912,B1(e,t,s!==null?s.baseLanes|n:n,n)}else s!==null?(Xr(t,s.cachePool),Md(t,s),ma(),t.memoizedState=null):(e!==null&&Xr(t,null),cu(),ma());return kt(e,t,l,n),t.child}function B1(e,t,n,i){var l=iu();return l=l===null?null:{parent:yt._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Xr(t,null),cu(),E1(t),e!==null&&bl(e,t,i,!0),null}function ss(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Cu(e,t,n,i,l){return Ya(t),n=hu(e,t,n,i,void 0,l),i=pu(),e!==null&&!zt?(mu(e,t,l),In(e,t,l)):(Ye&&i&&Fo(t),t.flags|=1,kt(e,t,n,l),t.child)}function H1(e,t,n,i,l,s){return Ya(t),t.updateQueue=null,n=Bd(t,i,n,l),Ud(e),i=pu(),e!==null&&!zt?(mu(e,t,s),In(e,t,s)):(Ye&&i&&Fo(t),t.flags|=1,kt(e,t,n,s),t.child)}function L1(e,t,n,i,l){if(Ya(t),t.stateNode===null){var s=bi,h=n.contextType;typeof h=="object"&&h!==null&&(s=Mt(h)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=_u,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},ru(t),h=n.contextType,s.context=typeof h=="object"&&h!==null?Mt(h):bi,s.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Du(t,n,h,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(h=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),h!==s.state&&_u.enqueueReplaceState(s,s.state,null),jl(t,i,s,l),Tl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,y=Za(n,m);s.props=y;var O=s.context,G=n.contextType;h=bi,typeof G=="object"&&G!==null&&(h=Mt(G));var Q=n.getDerivedStateFromProps;G=typeof Q=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,G||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||O!==h)&&A1(t,s,i,h),ca=!1;var R=t.memoizedState;s.state=R,jl(t,i,s,l),Tl(),O=t.memoizedState,m||R!==O||ca?(typeof Q=="function"&&(Du(t,n,Q,i),O=t.memoizedState),(y=ca||z1(t,n,y,i,R,O,h))?(G||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=O),s.props=i,s.state=O,s.context=h,i=y):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,su(e,t),h=t.memoizedProps,G=Za(n,h),s.props=G,Q=t.pendingProps,R=s.context,O=n.contextType,y=bi,typeof O=="object"&&O!==null&&(y=Mt(O)),m=n.getDerivedStateFromProps,(O=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(h!==Q||R!==y)&&A1(t,s,i,y),ca=!1,R=t.memoizedState,s.state=R,jl(t,i,s,l),Tl();var N=t.memoizedState;h!==Q||R!==N||ca||e!==null&&e.dependencies!==null&&Gr(e.dependencies)?(typeof m=="function"&&(Du(t,n,m,i),N=t.memoizedState),(G=ca||z1(t,n,G,i,R,N,y)||e!==null&&e.dependencies!==null&&Gr(e.dependencies))?(O||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,N,y),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,N,y)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||h===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=N),s.props=i,s.state=N,s.context=y,i=G):(typeof s.componentDidUpdate!="function"||h===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,ss(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=Oi(t,e.child,null,l),t.child=Oi(t,null,n,l)):kt(e,t,n,l),t.memoizedState=s.state,e=t.child):e=In(e,t,l),e}function q1(e,t,n,i){return yl(),t.flags|=256,kt(e,t,n,i),t.child}var ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ru(e){return{baseLanes:e,cachePool:jd()}}function Nu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=xn),e}function V1(e,t,n){var i=t.pendingProps,l=!1,s=(t.flags&128)!==0,h;if((h=s)||(h=e!==null&&e.memoizedState===null?!1:(vt.current&2)!==0),h&&(l=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ye){if(l?pa(t):ma(),Ye){var m=rt,y;if(y=m){e:{for(y=m,m=Cn;y.nodeType!==8;){if(!m){m=null;break e}if(y=zn(y.nextSibling),y===null){m=null;break e}}m=y}m!==null?(t.memoizedState={dehydrated:m,treeContext:Ha!==null?{id:Zn,overflow:Qn}:null,retryLane:536870912,hydrationErrors:null},y=tn(18,null,null,0),y.stateNode=m,y.return=t,t.child=y,Lt=t,rt=null,y=!0):y=!1}y||Va(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return xc(m)?t.lanes=32:t.lanes=536870912,null;Wn(t)}return m=i.children,i=i.fallback,l?(ma(),l=t.mode,m=os({mode:"hidden",children:m},l),i=Ba(i,l,n,null),m.return=t,i.return=t,m.sibling=i,t.child=m,l=t.child,l.memoizedState=Ru(n),l.childLanes=Nu(e,h,n),t.memoizedState=ku,i):(pa(t),Mu(t,m))}if(y=e.memoizedState,y!==null&&(m=y.dehydrated,m!==null)){if(s)t.flags&256?(pa(t),t.flags&=-257,t=Uu(e,t,n)):t.memoizedState!==null?(ma(),t.child=e.child,t.flags|=128,t=null):(ma(),l=i.fallback,m=t.mode,i=os({mode:"visible",children:i.children},m),l=Ba(l,m,n,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,Oi(t,e.child,null,n),i=t.child,i.memoizedState=Ru(n),i.childLanes=Nu(e,h,n),t.memoizedState=ku,t=l);else if(pa(t),xc(m)){if(h=m.nextSibling&&m.nextSibling.dataset,h)var O=h.dgst;h=O,i=Error(u(419)),i.stack="",i.digest=h,vl({value:i,source:null,stack:null}),t=Uu(e,t,n)}else if(zt||bl(e,t,n,!1),h=(n&e.childLanes)!==0,zt||h){if(h=Pe,h!==null&&(i=n&-n,i=(i&42)!==0?1:ll(i),i=(i&(h.suspendedLanes|n))!==0?0:i,i!==0&&i!==y.retryLane))throw y.retryLane=i,vi(e,i),sn(h,e,i),k1;m.data==="$?"||ec(),t=Uu(e,t,n)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,rt=zn(m.nextSibling),Lt=t,Ye=!0,qa=null,Cn=!1,e!==null&&(pn[mn++]=Zn,pn[mn++]=Qn,pn[mn++]=Ha,Zn=e.id,Qn=e.overflow,Ha=t),t=Mu(t,i.children),t.flags|=4096);return t}return l?(ma(),l=i.fallback,m=t.mode,y=e.child,O=y.sibling,i=$n(y,{mode:"hidden",children:i.children}),i.subtreeFlags=y.subtreeFlags&65011712,O!==null?l=$n(O,l):(l=Ba(l,m,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,m=e.child.memoizedState,m===null?m=Ru(n):(y=m.cachePool,y!==null?(O=yt._currentValue,y=y.parent!==O?{parent:O,pool:O}:y):y=jd(),m={baseLanes:m.baseLanes|n,cachePool:y}),l.memoizedState=m,l.childLanes=Nu(e,h,n),t.memoizedState=ku,i):(pa(t),n=e.child,e=n.sibling,n=$n(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function Mu(e,t){return t=os({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function os(e,t){return e=tn(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Uu(e,t,n){return Oi(t,e.child,null,n),e=Mu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function G1(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),eu(e.return,t,n)}function Bu(e,t,n,i,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=l)}function Y1(e,t,n){var i=t.pendingProps,l=i.revealOrder,s=i.tail;if(kt(e,t,i.children,n),i=vt.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&G1(e,n,t);else if(e.tag===19)G1(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(B(vt,i),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&is(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Bu(t,!1,l,n,s);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&is(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Bu(t,!0,n,null,s);break;case"together":Bu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function In(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ba|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(bl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=$n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Hu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Gr(e)))}function Vg(e,t,n){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),ua(t,yt,e.memoizedState.cache),yl();break;case 27:case 5:at(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:ua(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(pa(t),t.flags|=128,null):(n&t.child.childLanes)!==0?V1(e,t,n):(pa(t),e=In(e,t,n),e!==null?e.sibling:null);pa(t);break;case 19:var l=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(bl(e,t,n,!1),i=(n&t.childLanes)!==0),l){if(i)return Y1(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),B(vt,vt.current),i)break;return null;case 22:case 23:return t.lanes=0,U1(e,t,n);case 24:ua(t,yt,e.memoizedState.cache)}return In(e,t,n)}function X1(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)zt=!0;else{if(!Hu(e,n)&&(t.flags&128)===0)return zt=!1,Vg(e,t,n);zt=(e.flags&131072)!==0}else zt=!1,Ye&&(t.flags&1048576)!==0&&bd(t,Vr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,l=i._init;if(i=l(i._payload),t.type=i,typeof i=="function")Qo(i)?(e=Za(i,e),t.tag=1,t=L1(null,t,i,e,n)):(t.tag=0,t=Cu(null,t,i,e,n));else{if(i!=null){if(l=i.$$typeof,l===re){t.tag=11,t=R1(null,t,i,e,n);break e}else if(l===$){t.tag=14,t=N1(null,t,i,e,n);break e}}throw t=ye(i)||i,Error(u(306,t,""))}}return t;case 0:return Cu(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,l=Za(i,t.pendingProps),L1(e,t,i,l,n);case 3:e:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(u(387));i=t.pendingProps;var s=t.memoizedState;l=s.element,su(e,t),jl(t,i,null,n);var h=t.memoizedState;if(i=h.cache,ua(t,yt,i),i!==s.cache&&tu(t,[yt],n,!0),Tl(),i=h.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=q1(e,t,i,n);break e}else if(i!==l){l=dn(Error(u(424)),t),vl(l),t=q1(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(rt=zn(e.firstChild),Lt=t,Ye=!0,qa=null,Cn=!0,n=w1(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(yl(),i===l){t=In(e,t,n);break e}kt(e,t,i,n)}t=t.child}return t;case 26:return ss(e,t),e===null?(n=K0(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ye||(n=t.type,e=t.pendingProps,i=ws(ue.current).createElement(n),i[Ke]=t,i[ot]=e,Nt(i,n,e),Et(i),t.stateNode=i):t.memoizedState=K0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return at(t),e===null&&Ye&&(i=t.stateNode=$0(t.type,t.pendingProps,ue.current),Lt=t,Cn=!0,l=rt,za(t.type)?(yc=l,rt=zn(i.firstChild)):rt=l),kt(e,t,t.pendingProps.children,n),ss(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ye&&((l=i=rt)&&(i=mx(i,t.type,t.pendingProps,Cn),i!==null?(t.stateNode=i,Lt=t,rt=zn(i.firstChild),Cn=!1,l=!0):l=!1),l||Va(t)),at(t),l=t.type,s=t.pendingProps,h=e!==null?e.memoizedProps:null,i=s.children,pc(l,s)?i=null:h!==null&&pc(l,h)&&(t.flags|=32),t.memoizedState!==null&&(l=hu(e,t,Rg,null,null,n),Jl._currentValue=l),ss(e,t),kt(e,t,i,n),t.child;case 6:return e===null&&Ye&&((e=n=rt)&&(n=gx(n,t.pendingProps,Cn),n!==null?(t.stateNode=n,Lt=t,rt=null,e=!0):e=!1),e||Va(t)),null;case 13:return V1(e,t,n);case 4:return me(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Oi(t,null,i,n):kt(e,t,i,n),t.child;case 11:return R1(e,t,t.type,t.pendingProps,n);case 7:return kt(e,t,t.pendingProps,n),t.child;case 8:return kt(e,t,t.pendingProps.children,n),t.child;case 12:return kt(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ua(t,t.type,i.value),kt(e,t,i.children,n),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,Ya(t),l=Mt(l),i=i(l),t.flags|=1,kt(e,t,i,n),t.child;case 14:return N1(e,t,t.type,t.pendingProps,n);case 15:return M1(e,t,t.type,t.pendingProps,n);case 19:return Y1(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=os(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=$n(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return U1(e,t,n);case 24:return Ya(t),i=Mt(yt),e===null?(l=iu(),l===null&&(l=Pe,s=nu(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=n),l=s),t.memoizedState={parent:i,cache:l},ru(t),ua(t,yt,l)):((e.lanes&n)!==0&&(su(e,t),jl(t,null,null,n),Tl()),l=e.memoizedState,s=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ua(t,yt,i)):(i=s.cache,ua(t,yt,i),i!==l.cache&&tu(t,[yt],n,!0))),kt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Pn(e){e.flags|=4}function $1(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!P0(t)){if(t=gn.current,t!==null&&((He&4194048)===He?kn!==null:(He&62914560)!==He&&(He&536870912)===0||t!==kn))throw zl=lu,Dd;e.flags|=8192}}function us(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Er():536870912,e.lanes|=t,Ni|=t)}function Nl(e,t){if(!Ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Gg(e,t,n){var i=t.pendingProps;switch(Wo(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return lt(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Jn(yt),Ce(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(xl(t)?Pn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ed())),lt(t),null;case 26:return n=t.memoizedState,e===null?(Pn(t),n!==null?(lt(t),$1(t,n)):(lt(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Pn(t),lt(t),$1(t,n)):(lt(t),t.flags&=-16777217):(e.memoizedProps!==i&&Pn(t),lt(t),t.flags&=-16777217),null;case 27:bt(t),n=ue.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Pn(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return lt(t),null}e=W.current,xl(t)?Sd(t):(e=$0(l,i,n),t.stateNode=e,Pn(t))}return lt(t),null;case 5:if(bt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Pn(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return lt(t),null}if(e=W.current,xl(t))Sd(t);else{switch(l=ws(ue.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?l.createElement(n,{is:i.is}):l.createElement(n)}}e[Ke]=t,e[ot]=i;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Nt(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Pn(t)}}return lt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Pn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(u(166));if(e=ue.current,xl(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,l=Lt,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[Ke]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||H0(e.nodeValue,n)),e||Va(t)}else e=ws(e).createTextNode(i),e[Ke]=t,t.stateNode=e}return lt(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=xl(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[Ke]=t}else yl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;lt(t),l=!1}else l=Ed(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Wn(t),t):(Wn(t),null)}if(Wn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool);var s=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==l&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),us(t,t.updateQueue),lt(t),null;case 4:return Ce(),e===null&&uc(t.stateNode.containerInfo),lt(t),null;case 10:return Jn(t.type),lt(t),null;case 19:if(ne(vt),l=t.memoizedState,l===null)return lt(t),null;if(i=(t.flags&128)!==0,s=l.rendering,s===null)if(i)Nl(l,!1);else{if(st!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=is(e),s!==null){for(t.flags|=128,Nl(l,!1),e=s.updateQueue,t.updateQueue=e,us(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vd(n,e),n=n.sibling;return B(vt,vt.current&1|2),t.child}e=e.sibling}l.tail!==null&&it()>ds&&(t.flags|=128,i=!0,Nl(l,!1),t.lanes=4194304)}else{if(!i)if(e=is(s),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,us(t,e),Nl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!Ye)return lt(t),null}else 2*it()-l.renderingStartTime>ds&&n!==536870912&&(t.flags|=128,i=!0,Nl(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(e=l.last,e!==null?e.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=it(),t.sibling=null,e=vt.current,B(vt,i?e&1|2:e&1),t):(lt(t),null);case 22:case 23:return Wn(t),fu(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),n=t.updateQueue,n!==null&&us(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&ne(Xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Jn(yt),lt(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Yg(e,t){switch(Wo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jn(yt),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return bt(t),null;case 13:if(Wn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));yl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(vt),null;case 4:return Ce(),null;case 10:return Jn(t.type),null;case 22:case 23:return Wn(t),fu(),e!==null&&ne(Xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Jn(yt),null;case 25:return null;default:return null}}function Z1(e,t){switch(Wo(t),t.tag){case 3:Jn(yt),Ce();break;case 26:case 27:case 5:bt(t);break;case 4:Ce();break;case 13:Wn(t);break;case 19:ne(vt);break;case 10:Jn(t.type);break;case 22:case 23:Wn(t),fu(),e!==null&&ne(Xa);break;case 24:Jn(yt)}}function Ml(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){i=void 0;var s=n.create,h=n.inst;i=s(),h.destroy=i}n=n.next}while(n!==l)}}catch(m){Ie(t,t.return,m)}}function ga(e,t,n){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var s=l.next;i=s;do{if((i.tag&e)===e){var h=i.inst,m=h.destroy;if(m!==void 0){h.destroy=void 0,l=t;var y=n,O=m;try{O()}catch(G){Ie(l,y,G)}}}i=i.next}while(i!==s)}}catch(G){Ie(t,t.return,G)}}function Q1(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Nd(t,n)}catch(i){Ie(e,e.return,i)}}}function K1(e,t,n){n.props=Za(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ie(e,t,i)}}function Ul(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(l){Ie(e,t,l)}}function Rn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){Ie(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Ie(e,t,l)}else n.current=null}function J1(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){Ie(e,e.return,l)}}function Lu(e,t,n){try{var i=e.stateNode;cx(i,e.type,n,t),i[ot]=t}catch(l){Ie(e,e.return,l)}}function F1(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function qu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||F1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ss));else if(i!==4&&(i===27&&za(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Vu(e,t,n),e=e.sibling;e!==null;)Vu(e,t,n),e=e.sibling}function cs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&za(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(cs(e,t,n),e=e.sibling;e!==null;)cs(e,t,n),e=e.sibling}function W1(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Nt(t,i,n),t[Ke]=e,t[ot]=n}catch(s){Ie(e,e.return,s)}}var ea=!1,ct=!1,Gu=!1,I1=typeof WeakSet=="function"?WeakSet:Set,At=null;function Xg(e,t){if(e=e.containerInfo,dc=Ds,e=ud(e),qo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var h=0,m=-1,y=-1,O=0,G=0,Q=e,R=null;t:for(;;){for(var N;Q!==n||l!==0&&Q.nodeType!==3||(m=h+l),Q!==s||i!==0&&Q.nodeType!==3||(y=h+i),Q.nodeType===3&&(h+=Q.nodeValue.length),(N=Q.firstChild)!==null;)R=Q,Q=N;for(;;){if(Q===e)break t;if(R===n&&++O===l&&(m=h),R===s&&++G===i&&(y=h),(N=Q.nextSibling)!==null)break;Q=R,R=Q.parentNode}Q=N}n=m===-1||y===-1?null:{start:m,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(hc={focusedElem:e,selectionRange:n},Ds=!1,At=t;At!==null;)if(t=At,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,At=e;else for(;At!==null;){switch(t=At,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,l=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var Te=Za(n.type,l,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(Te,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(we){Ie(n,n.return,we)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)gc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,At=e;break}At=t.return}}function P1(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:xa(e,n),i&4&&Ml(5,n);break;case 1:if(xa(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){Ie(n,n.return,h)}else{var l=Za(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){Ie(n,n.return,h)}}i&64&&Q1(n),i&512&&Ul(n,n.return);break;case 3:if(xa(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Nd(e,t)}catch(h){Ie(n,n.return,h)}}break;case 27:t===null&&i&4&&W1(n);case 26:case 5:xa(e,n),t===null&&i&4&&J1(n),i&512&&Ul(n,n.return);break;case 12:xa(e,n);break;case 13:xa(e,n),i&4&&n0(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Pg.bind(null,n),xx(e,n))));break;case 22:if(i=n.memoizedState!==null||ea,!i){t=t!==null&&t.memoizedState!==null||ct,l=ea;var s=ct;ea=i,(ct=t)&&!s?ya(e,n,(n.subtreeFlags&8772)!==0):xa(e,n),ea=l,ct=s}break;case 30:break;default:xa(e,n)}}function e0(e){var t=e.alternate;t!==null&&(e.alternate=null,e0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&So(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tt=null,Zt=!1;function ta(e,t,n){for(n=n.child;n!==null;)t0(e,t,n),n=n.sibling}function t0(e,t,n){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(ce,n)}catch{}switch(n.tag){case 26:ct||Rn(n,t),ta(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ct||Rn(n,t);var i=tt,l=Zt;za(n.type)&&(tt=n.stateNode,Zt=!1),ta(e,t,n),$l(n.stateNode),tt=i,Zt=l;break;case 5:ct||Rn(n,t);case 6:if(i=tt,l=Zt,tt=null,ta(e,t,n),tt=i,Zt=l,tt!==null)if(Zt)try{(tt.nodeType===9?tt.body:tt.nodeName==="HTML"?tt.ownerDocument.body:tt).removeChild(n.stateNode)}catch(s){Ie(n,t,s)}else try{tt.removeChild(n.stateNode)}catch(s){Ie(n,t,s)}break;case 18:tt!==null&&(Zt?(e=tt,Y0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Pl(e)):Y0(tt,n.stateNode));break;case 4:i=tt,l=Zt,tt=n.stateNode.containerInfo,Zt=!0,ta(e,t,n),tt=i,Zt=l;break;case 0:case 11:case 14:case 15:ct||ga(2,n,t),ct||ga(4,n,t),ta(e,t,n);break;case 1:ct||(Rn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&K1(n,t,i)),ta(e,t,n);break;case 21:ta(e,t,n);break;case 22:ct=(i=ct)||n.memoizedState!==null,ta(e,t,n),ct=i;break;default:ta(e,t,n)}}function n0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pl(e)}catch(n){Ie(t,t.return,n)}}function $g(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new I1),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new I1),t;default:throw Error(u(435,e.tag))}}function Yu(e,t){var n=$g(e);t.forEach(function(i){var l=ex.bind(null,e,i);n.has(i)||(n.add(i),i.then(l,l))})}function nn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i],s=e,h=t,m=h;e:for(;m!==null;){switch(m.tag){case 27:if(za(m.type)){tt=m.stateNode,Zt=!1;break e}break;case 5:tt=m.stateNode,Zt=!1;break e;case 3:case 4:tt=m.stateNode.containerInfo,Zt=!0;break e}m=m.return}if(tt===null)throw Error(u(160));t0(s,h,l),tt=null,Zt=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)a0(t,e),t=t.sibling}var En=null;function a0(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:nn(t,e),an(e),i&4&&(ga(3,e,e.return),Ml(3,e),ga(5,e,e.return));break;case 1:nn(t,e),an(e),i&512&&(ct||n===null||Rn(n,n.return)),i&64&&ea&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var l=En;if(nn(t,e),an(e),i&512&&(ct||n===null||Rn(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":s=l.getElementsByTagName("title")[0],(!s||s[rl]||s[Ke]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(i),l.head.insertBefore(s,l.querySelector("head > title"))),Nt(s,i,n),s[Ke]=e,Et(s),i=s;break e;case"link":var h=W0("link","href",l).get(i+(n.href||""));if(h){for(var m=0;m<h.length;m++)if(s=h[m],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(m,1);break t}}s=l.createElement(i),Nt(s,i,n),l.head.appendChild(s);break;case"meta":if(h=W0("meta","content",l).get(i+(n.content||""))){for(m=0;m<h.length;m++)if(s=h[m],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(m,1);break t}}s=l.createElement(i),Nt(s,i,n),l.head.appendChild(s);break;default:throw Error(u(468,i))}s[Ke]=e,Et(s),i=s}e.stateNode=i}else I0(l,e.type,e.stateNode);else e.stateNode=F0(l,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?I0(l,e.type,e.stateNode):F0(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Lu(e,e.memoizedProps,n.memoizedProps)}break;case 27:nn(t,e),an(e),i&512&&(ct||n===null||Rn(n,n.return)),n!==null&&i&4&&Lu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(nn(t,e),an(e),i&512&&(ct||n===null||Rn(n,n.return)),e.flags&32){l=e.stateNode;try{di(l,"")}catch(N){Ie(e,e.return,N)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Lu(e,l,n!==null?n.memoizedProps:l)),i&1024&&(Gu=!0);break;case 6:if(nn(t,e),an(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(N){Ie(e,e.return,N)}}break;case 3:if(As=null,l=En,En=Es(t.containerInfo),nn(t,e),En=l,an(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Pl(t.containerInfo)}catch(N){Ie(e,e.return,N)}Gu&&(Gu=!1,i0(e));break;case 4:i=En,En=Es(e.stateNode.containerInfo),nn(t,e),an(e),En=i;break;case 12:nn(t,e),an(e);break;case 13:nn(t,e),an(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ju=it()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Yu(e,i)));break;case 22:l=e.memoizedState!==null;var y=n!==null&&n.memoizedState!==null,O=ea,G=ct;if(ea=O||l,ct=G||y,nn(t,e),ct=G,ea=O,an(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||y||ea||ct||Qa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){y=n=t;try{if(s=y.stateNode,l)h=s.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{m=y.stateNode;var Q=y.memoizedProps.style,R=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;m.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(N){Ie(y,y.return,N)}}}else if(t.tag===6){if(n===null){y=t;try{y.stateNode.nodeValue=l?"":y.memoizedProps}catch(N){Ie(y,y.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Yu(e,n))));break;case 19:nn(t,e),an(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Yu(e,i)));break;case 30:break;case 21:break;default:nn(t,e),an(e)}}function an(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(F1(i)){n=i;break}i=i.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var l=n.stateNode,s=qu(e);cs(e,s,l);break;case 5:var h=n.stateNode;n.flags&32&&(di(h,""),n.flags&=-33);var m=qu(e);cs(e,m,h);break;case 3:case 4:var y=n.stateNode.containerInfo,O=qu(e);Vu(e,O,y);break;default:throw Error(u(161))}}catch(G){Ie(e,e.return,G)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function i0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;i0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)P1(e,t.alternate,t),t=t.sibling}function Qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ga(4,t,t.return),Qa(t);break;case 1:Rn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&K1(t,t.return,n),Qa(t);break;case 27:$l(t.stateNode);case 26:case 5:Rn(t,t.return),Qa(t);break;case 22:t.memoizedState===null&&Qa(t);break;case 30:Qa(t);break;default:Qa(t)}e=e.sibling}}function ya(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,s=t,h=s.flags;switch(s.tag){case 0:case 11:case 15:ya(l,s,n),Ml(4,s);break;case 1:if(ya(l,s,n),i=s,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(O){Ie(i,i.return,O)}if(i=s,l=i.updateQueue,l!==null){var m=i.stateNode;try{var y=l.shared.hiddenCallbacks;if(y!==null)for(l.shared.hiddenCallbacks=null,l=0;l<y.length;l++)Rd(y[l],m)}catch(O){Ie(i,i.return,O)}}n&&h&64&&Q1(s),Ul(s,s.return);break;case 27:W1(s);case 26:case 5:ya(l,s,n),n&&i===null&&h&4&&J1(s),Ul(s,s.return);break;case 12:ya(l,s,n);break;case 13:ya(l,s,n),n&&h&4&&n0(l,s);break;case 22:s.memoizedState===null&&ya(l,s,n),Ul(s,s.return);break;case 30:break;default:ya(l,s,n)}t=t.sibling}}function Xu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Sl(n))}function $u(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sl(e))}function Nn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)l0(e,t,n,i),t=t.sibling}function l0(e,t,n,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Nn(e,t,n,i),l&2048&&Ml(9,t);break;case 1:Nn(e,t,n,i);break;case 3:Nn(e,t,n,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sl(e)));break;case 12:if(l&2048){Nn(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,h=s.id,m=s.onPostCommit;typeof m=="function"&&m(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){Ie(t,t.return,y)}}else Nn(e,t,n,i);break;case 13:Nn(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,h=t.alternate,t.memoizedState!==null?s._visibility&2?Nn(e,t,n,i):Bl(e,t):s._visibility&2?Nn(e,t,n,i):(s._visibility|=2,Ci(e,t,n,i,(t.subtreeFlags&10256)!==0)),l&2048&&Xu(h,t);break;case 24:Nn(e,t,n,i),l&2048&&$u(t.alternate,t);break;default:Nn(e,t,n,i)}}function Ci(e,t,n,i,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,h=t,m=n,y=i,O=h.flags;switch(h.tag){case 0:case 11:case 15:Ci(s,h,m,y,l),Ml(8,h);break;case 23:break;case 22:var G=h.stateNode;h.memoizedState!==null?G._visibility&2?Ci(s,h,m,y,l):Bl(s,h):(G._visibility|=2,Ci(s,h,m,y,l)),l&&O&2048&&Xu(h.alternate,h);break;case 24:Ci(s,h,m,y,l),l&&O&2048&&$u(h.alternate,h);break;default:Ci(s,h,m,y,l)}t=t.sibling}}function Bl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,l=i.flags;switch(i.tag){case 22:Bl(n,i),l&2048&&Xu(i.alternate,i);break;case 24:Bl(n,i),l&2048&&$u(i.alternate,i);break;default:Bl(n,i)}t=t.sibling}}var Hl=8192;function ki(e){if(e.subtreeFlags&Hl)for(e=e.child;e!==null;)r0(e),e=e.sibling}function r0(e){switch(e.tag){case 26:ki(e),e.flags&Hl&&e.memoizedState!==null&&Ox(En,e.memoizedState,e.memoizedProps);break;case 5:ki(e);break;case 3:case 4:var t=En;En=Es(e.stateNode.containerInfo),ki(e),En=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Hl,Hl=16777216,ki(e),Hl=t):ki(e));break;default:ki(e)}}function s0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ll(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];At=i,u0(i,e)}s0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)o0(e),e=e.sibling}function o0(e){switch(e.tag){case 0:case 11:case 15:Ll(e),e.flags&2048&&ga(9,e,e.return);break;case 3:Ll(e);break;case 12:Ll(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,fs(e)):Ll(e);break;default:Ll(e)}}function fs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];At=i,u0(i,e)}s0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ga(8,t,t.return),fs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,fs(t));break;default:fs(t)}e=e.sibling}}function u0(e,t){for(;At!==null;){var n=At;switch(n.tag){case 0:case 11:case 15:ga(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Sl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,At=i;else e:for(n=e;At!==null;){i=At;var l=i.sibling,s=i.return;if(e0(i),i===n){At=null;break e}if(l!==null){l.return=s,At=l;break e}At=s}}}var Zg={getCacheForType:function(e){var t=Mt(yt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Qg=typeof WeakMap=="function"?WeakMap:Map,Ze=0,Pe=null,Me=null,He=0,Qe=0,ln=null,va=!1,Ri=!1,Zu=!1,na=0,st=0,ba=0,Ka=0,Qu=0,xn=0,Ni=0,ql=null,Qt=null,Ku=!1,Ju=0,ds=1/0,hs=null,Sa=null,Rt=0,wa=null,Mi=null,Ui=0,Fu=0,Wu=null,c0=null,Vl=0,Iu=null;function rn(){if((Ze&2)!==0&&He!==0)return He&-He;if(_.T!==null){var e=Ei;return e!==0?e:lc()}return zr()}function f0(){xn===0&&(xn=(He&536870912)===0||Ye?al():536870912);var e=gn.current;return e!==null&&(e.flags|=32),xn}function sn(e,t,n){(e===Pe&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)&&(Bi(e,0),Ea(e,He,xn,!1)),Gt(e,n),((Ze&2)===0||e!==Pe)&&(e===Pe&&((Ze&2)===0&&(Ka|=n),st===4&&Ea(e,He,xn,!1)),Mn(e))}function d0(e,t,n){if((Ze&6)!==0)throw Error(u(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||qn(e,t),l=i?Fg(e,t):tc(e,t,!0),s=i;do{if(l===0){Ri&&!i&&Ea(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Kg(n)){l=tc(e,t,!1),s=!1;continue}if(l===2){if(s=t,e.errorRecoveryDisabledLanes&s)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var m=e;l=ql;var y=m.current.memoizedState.isDehydrated;if(y&&(Bi(m,h).flags|=256),h=tc(m,h,!1),h!==2){if(Zu&&!y){m.errorRecoveryDisabledLanes|=s,Ka|=s,l=4;break e}s=Qt,Qt=l,s!==null&&(Qt===null?Qt=s:Qt.push.apply(Qt,s))}l=h}if(s=!1,l!==2)continue}}if(l===1){Bi(e,0),Ea(e,t,0,!0);break}e:{switch(i=e,s=l,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Ea(i,t,xn,!va);break e;case 2:Qt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=Ju+300-it(),10<l)){if(Ea(i,t,xn,!va),wt(i,0,!0)!==0)break e;i.timeoutHandle=V0(h0.bind(null,i,n,Qt,hs,Ku,t,xn,Ka,Ni,va,s,2,-0,0),l);break e}h0(i,n,Qt,hs,Ku,t,xn,Ka,Ni,va,s,0,-0,0)}}break}while(!0);Mn(e)}function h0(e,t,n,i,l,s,h,m,y,O,G,Q,R,N){if(e.timeoutHandle=-1,Q=t.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(Kl={stylesheets:null,count:0,unsuspend:_x},r0(t),Q=Cx(),Q!==null)){e.cancelPendingCommit=Q(b0.bind(null,e,t,s,n,i,l,h,m,y,G,1,R,N)),Ea(e,s,h,!O);return}b0(e,t,s,n,i,l,h,m,y)}function Kg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],s=l.getSnapshot;l=l.value;try{if(!en(s(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ea(e,t,n,i){t&=~Qu,t&=~Ka,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var s=31-$e(l),h=1<<s;i[s]=-1,l&=~h}n!==0&&il(e,n,t)}function ps(){return(Ze&6)===0?(Gl(0),!1):!0}function Pu(){if(Me!==null){if(Qe===0)var e=Me.return;else e=Me,Kn=Ga=null,gu(e),_i=null,kl=0,e=Me;for(;e!==null;)Z1(e.alternate,e),e=e.return;Me=null}}function Bi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,dx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Pu(),Pe=e,Me=n=$n(e.current,null),He=t,Qe=0,ln=null,va=!1,Ri=qn(e,t),Zu=!1,Ni=xn=Qu=Ka=ba=st=0,Qt=ql=null,Ku=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-$e(i),s=1<<l;t|=e[l],i&=~s}return na=t,Ur(),n}function p0(e,t){ke=null,_.H=ts,t===El||t===$r?(t=Cd(),Qe=3):t===Dd?(t=Cd(),Qe=4):Qe=t===k1?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ln=t,Me===null&&(st=1,rs(e,dn(t,e.current)))}function m0(){var e=_.H;return _.H=ts,e===null?ts:e}function g0(){var e=_.A;return _.A=Zg,e}function ec(){st=4,va||(He&4194048)!==He&&gn.current!==null||(Ri=!0),(ba&134217727)===0&&(Ka&134217727)===0||Pe===null||Ea(Pe,He,xn,!1)}function tc(e,t,n){var i=Ze;Ze|=2;var l=m0(),s=g0();(Pe!==e||He!==t)&&(hs=null,Bi(e,t)),t=!1;var h=st;e:do try{if(Qe!==0&&Me!==null){var m=Me,y=ln;switch(Qe){case 8:Pu(),h=6;break e;case 3:case 2:case 9:case 6:gn.current===null&&(t=!0);var O=Qe;if(Qe=0,ln=null,Hi(e,m,y,O),n&&Ri){h=0;break e}break;default:O=Qe,Qe=0,ln=null,Hi(e,m,y,O)}}Jg(),h=st;break}catch(G){p0(e,G)}while(!0);return t&&e.shellSuspendCounter++,Kn=Ga=null,Ze=i,_.H=l,_.A=s,Me===null&&(Pe=null,He=0,Ur()),h}function Jg(){for(;Me!==null;)x0(Me)}function Fg(e,t){var n=Ze;Ze|=2;var i=m0(),l=g0();Pe!==e||He!==t?(hs=null,ds=it()+500,Bi(e,t)):Ri=qn(e,t);e:do try{if(Qe!==0&&Me!==null){t=Me;var s=ln;t:switch(Qe){case 1:Qe=0,ln=null,Hi(e,t,s,1);break;case 2:case 9:if(_d(s)){Qe=0,ln=null,y0(t);break}t=function(){Qe!==2&&Qe!==9||Pe!==e||(Qe=7),Mn(e)},s.then(t,t);break e;case 3:Qe=7;break e;case 4:Qe=5;break e;case 7:_d(s)?(Qe=0,ln=null,y0(t)):(Qe=0,ln=null,Hi(e,t,s,7));break;case 5:var h=null;switch(Me.tag){case 26:h=Me.memoizedState;case 5:case 27:var m=Me;if(!h||P0(h)){Qe=0,ln=null;var y=m.sibling;if(y!==null)Me=y;else{var O=m.return;O!==null?(Me=O,ms(O)):Me=null}break t}}Qe=0,ln=null,Hi(e,t,s,5);break;case 6:Qe=0,ln=null,Hi(e,t,s,6);break;case 8:Pu(),st=6;break e;default:throw Error(u(462))}}Wg();break}catch(G){p0(e,G)}while(!0);return Kn=Ga=null,_.H=i,_.A=l,Ze=n,Me!==null?0:(Pe=null,He=0,Ur(),st)}function Wg(){for(;Me!==null&&!Le();)x0(Me)}function x0(e){var t=X1(e.alternate,e,na);e.memoizedProps=e.pendingProps,t===null?ms(e):Me=t}function y0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=H1(n,t,t.pendingProps,t.type,void 0,He);break;case 11:t=H1(n,t,t.pendingProps,t.type.render,t.ref,He);break;case 5:gu(t);default:Z1(n,t),t=Me=vd(t,na),t=X1(n,t,na)}e.memoizedProps=e.pendingProps,t===null?ms(e):Me=t}function Hi(e,t,n,i){Kn=Ga=null,gu(t),_i=null,kl=0;var l=t.return;try{if(qg(e,l,t,n,He)){st=1,rs(e,dn(n,e.current)),Me=null;return}}catch(s){if(l!==null)throw Me=l,s;st=1,rs(e,dn(n,e.current)),Me=null;return}t.flags&32768?(Ye||i===1?e=!0:Ri||(He&536870912)!==0?e=!1:(va=e=!0,(i===2||i===9||i===3||i===6)&&(i=gn.current,i!==null&&i.tag===13&&(i.flags|=16384))),v0(t,e)):ms(t)}function ms(e){var t=e;do{if((t.flags&32768)!==0){v0(t,va);return}e=t.return;var n=Gg(t.alternate,t,na);if(n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);st===0&&(st=5)}function v0(e,t){do{var n=Yg(e.alternate,e);if(n!==null){n.flags&=32767,Me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Me=e;return}Me=e=n}while(e!==null);st=6,Me=null}function b0(e,t,n,i,l,s,h,m,y){e.cancelPendingCommit=null;do gs();while(Rt!==0);if((Ze&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=$o,un(e,n,s,h,m,y),e===Pe&&(Me=Pe=null,He=0),Mi=t,wa=e,Ui=n,Fu=s,Wu=l,c0=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,tx(j,function(){return A0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=_.T,_.T=null,l=J.p,J.p=2,h=Ze,Ze|=4;try{Xg(e,t,n)}finally{Ze=h,J.p=l,_.T=i}}Rt=1,S0(),w0(),E0()}}function S0(){if(Rt===1){Rt=0;var e=wa,t=Mi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var i=J.p;J.p=2;var l=Ze;Ze|=4;try{a0(t,e);var s=hc,h=ud(e.containerInfo),m=s.focusedElem,y=s.selectionRange;if(h!==m&&m&&m.ownerDocument&&od(m.ownerDocument.documentElement,m)){if(y!==null&&qo(m)){var O=y.start,G=y.end;if(G===void 0&&(G=O),"selectionStart"in m)m.selectionStart=O,m.selectionEnd=Math.min(G,m.value.length);else{var Q=m.ownerDocument||document,R=Q&&Q.defaultView||window;if(R.getSelection){var N=R.getSelection(),Te=m.textContent.length,we=Math.min(y.start,Te),We=y.end===void 0?we:Math.min(y.end,Te);!N.extend&&we>We&&(h=We,We=we,we=h);var T=sd(m,we),z=sd(m,We);if(T&&z&&(N.rangeCount!==1||N.anchorNode!==T.node||N.anchorOffset!==T.offset||N.focusNode!==z.node||N.focusOffset!==z.offset)){var D=Q.createRange();D.setStart(T.node,T.offset),N.removeAllRanges(),we>We?(N.addRange(D),N.extend(z.node,z.offset)):(D.setEnd(z.node,z.offset),N.addRange(D))}}}}for(Q=[],N=m;N=N.parentNode;)N.nodeType===1&&Q.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<Q.length;m++){var X=Q[m];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Ds=!!dc,hc=dc=null}finally{Ze=l,J.p=i,_.T=n}}e.current=t,Rt=2}}function w0(){if(Rt===2){Rt=0;var e=wa,t=Mi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var i=J.p;J.p=2;var l=Ze;Ze|=4;try{P1(e,t.alternate,t)}finally{Ze=l,J.p=i,_.T=n}}Rt=3}}function E0(){if(Rt===4||Rt===3){Rt=0,xt();var e=wa,t=Mi,n=Ui,i=c0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Rt=5:(Rt=0,Mi=wa=null,z0(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Sa=null),Vn(n),t=t.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(ce,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=_.T,l=J.p,J.p=2,_.T=null;try{for(var s=e.onRecoverableError,h=0;h<i.length;h++){var m=i[h];s(m.value,{componentStack:m.stack})}}finally{_.T=t,J.p=l}}(Ui&3)!==0&&gs(),Mn(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===Iu?Vl++:(Vl=0,Iu=e):Vl=0,Gl(0)}}function z0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Sl(t)))}function gs(e){return S0(),w0(),E0(),A0()}function A0(){if(Rt!==5)return!1;var e=wa,t=Fu;Fu=0;var n=Vn(Ui),i=_.T,l=J.p;try{J.p=32>n?32:n,_.T=null,n=Wu,Wu=null;var s=wa,h=Ui;if(Rt=0,Mi=wa=null,Ui=0,(Ze&6)!==0)throw Error(u(331));var m=Ze;if(Ze|=4,o0(s.current),l0(s,s.current,h,n),Ze=m,Gl(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(ce,s)}catch{}return!0}finally{J.p=l,_.T=i,z0(e,t)}}function T0(e,t,n){t=dn(n,t),t=Ou(e.stateNode,t,2),e=da(e,t,2),e!==null&&(Gt(e,2),Mn(e))}function Ie(e,t,n){if(e.tag===3)T0(e,e,n);else for(;t!==null;){if(t.tag===3){T0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sa===null||!Sa.has(i))){e=dn(n,e),n=O1(2),i=da(t,n,2),i!==null&&(C1(n,i,t,e),Gt(i,2),Mn(i));break}}t=t.return}}function nc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Qg;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||(Zu=!0,l.add(n),e=Ig.bind(null,e,t,n),t.then(e,e))}function Ig(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Pe===e&&(He&n)===n&&(st===4||st===3&&(He&62914560)===He&&300>it()-Ju?(Ze&2)===0&&Bi(e,0):Qu|=n,Ni===He&&(Ni=0)),Mn(e)}function j0(e,t){t===0&&(t=Er()),e=vi(e,t),e!==null&&(Gt(e,t),Mn(e))}function Pg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),j0(e,n)}function ex(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(t),j0(e,n)}function tx(e,t){return be(e,t)}var xs=null,Li=null,ac=!1,ys=!1,ic=!1,Ja=0;function Mn(e){e!==Li&&e.next===null&&(Li===null?xs=Li=e:Li=Li.next=e),ys=!0,ac||(ac=!0,ax())}function Gl(e,t){if(!ic&&ys){ic=!0;do for(var n=!1,i=xs;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var s=0;else{var h=i.suspendedLanes,m=i.pingedLanes;s=(1<<31-$e(42|e)+1)-1,s&=l&~(h&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,C0(i,s))}else s=He,s=wt(i,i===Pe?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||qn(i,s)||(n=!0,C0(i,s));i=i.next}while(n);ic=!1}}function nx(){D0()}function D0(){ys=ac=!1;var e=0;Ja!==0&&(fx()&&(e=Ja),Ja=0);for(var t=it(),n=null,i=xs;i!==null;){var l=i.next,s=_0(i,t);s===0?(i.next=null,n===null?xs=l:n.next=l,l===null&&(Li=n)):(n=i,(e!==0||(s&3)!==0)&&(ys=!0)),i=l}Gl(e)}function _0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var h=31-$e(s),m=1<<h,y=l[h];y===-1?((m&n)===0||(m&i)!==0)&&(l[h]=ii(m,t)):y<=t&&(e.expiredLanes|=m),s&=~m}if(t=Pe,n=He,n=wt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Be(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||qn(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Be(i),Vn(n)){case 2:case 8:n=b;break;case 32:n=j;break;case 268435456:n=ie;break;default:n=j}return i=O0.bind(null,e),n=be(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Be(i),e.callbackPriority=2,e.callbackNode=null,2}function O0(e,t){if(Rt!==0&&Rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(gs()&&e.callbackNode!==n)return null;var i=He;return i=wt(e,e===Pe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(d0(e,i,t),_0(e,it()),e.callbackNode!=null&&e.callbackNode===n?O0.bind(null,e):null)}function C0(e,t){if(gs())return null;d0(e,t,!0)}function ax(){hx(function(){(Ze&6)!==0?be(Pt,nx):D0()})}function lc(){return Ja===0&&(Ja=al()),Ja}function k0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_r(""+e)}function R0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function ix(e,t,n,i,l){if(t==="submit"&&n&&n.stateNode===l){var s=k0((l[ot]||null).action),h=i.submitter;h&&(t=(t=h[ot]||null)?k0(t.formAction):h.getAttribute("formAction"),t!==null&&(s=t,h=null));var m=new Rr("action","action",null,i,l);e.push({event:m,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ja!==0){var y=h?R0(l,h):new FormData(l);Au(n,{pending:!0,data:y,method:l.method,action:s},null,y)}}else typeof s=="function"&&(m.preventDefault(),y=h?R0(l,h):new FormData(l),Au(n,{pending:!0,data:y,method:l.method,action:s},s,y))},currentTarget:l}]})}}for(var rc=0;rc<Xo.length;rc++){var sc=Xo[rc],lx=sc.toLowerCase(),rx=sc[0].toUpperCase()+sc.slice(1);wn(lx,"on"+rx)}wn(dd,"onAnimationEnd"),wn(hd,"onAnimationIteration"),wn(pd,"onAnimationStart"),wn("dblclick","onDoubleClick"),wn("focusin","onFocus"),wn("focusout","onBlur"),wn(Eg,"onTransitionRun"),wn(zg,"onTransitionStart"),wn(Ag,"onTransitionCancel"),wn(md,"onTransitionEnd"),ui("onMouseEnter",["mouseout","mouseover"]),ui("onMouseLeave",["mouseout","mouseover"]),ui("onPointerEnter",["pointerout","pointerover"]),ui("onPointerLeave",["pointerout","pointerover"]),Ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ra("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function N0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],l=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var h=i.length-1;0<=h;h--){var m=i[h],y=m.instance,O=m.currentTarget;if(m=m.listener,y!==s&&l.isPropagationStopped())break e;s=m,l.currentTarget=O;try{s(l)}catch(G){ls(G)}l.currentTarget=null,s=y}else for(h=0;h<i.length;h++){if(m=i[h],y=m.instance,O=m.currentTarget,m=m.listener,y!==s&&l.isPropagationStopped())break e;s=m,l.currentTarget=O;try{s(l)}catch(G){ls(G)}l.currentTarget=null,s=y}}}}function Ue(e,t){var n=t[sa];n===void 0&&(n=t[sa]=new Set);var i=e+"__bubble";n.has(i)||(M0(t,e,2,!1),n.add(i))}function oc(e,t,n){var i=0;t&&(i|=4),M0(n,e,i,t)}var vs="_reactListening"+Math.random().toString(36).slice(2);function uc(e){if(!e[vs]){e[vs]=!0,Df.forEach(function(n){n!=="selectionchange"&&(sx.has(n)||oc(n,!1,e),oc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vs]||(t[vs]=!0,oc("selectionchange",!1,t))}}function M0(e,t,n,i){switch(lh(t)){case 2:var l=Nx;break;case 8:l=Mx;break;default:l=Ec}n=l.bind(null,t,n,e),l=void 0,!Co||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function cc(e,t,n,i,l){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var m=i.stateNode.containerInfo;if(m===l)break;if(h===4)for(h=i.return;h!==null;){var y=h.tag;if((y===3||y===4)&&h.stateNode.containerInfo===l)return;h=h.return}for(;m!==null;){if(h=ri(m),h===null)return;if(y=h.tag,y===5||y===6||y===26||y===27){i=s=h;continue e}m=m.parentNode}}i=i.return}Gf(function(){var O=s,G=_o(n),Q=[];e:{var R=gd.get(e);if(R!==void 0){var N=Rr,Te=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":N=tg;break;case"focusin":Te="focus",N=Mo;break;case"focusout":Te="blur",N=Mo;break;case"beforeblur":case"afterblur":N=Mo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=$f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Ym;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=ig;break;case dd:case hd:case pd:N=Zm;break;case md:N=rg;break;case"scroll":case"scrollend":N=Vm;break;case"wheel":N=og;break;case"copy":case"cut":case"paste":N=Km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Qf;break;case"toggle":case"beforetoggle":N=cg}var we=(t&4)!==0,We=!we&&(e==="scroll"||e==="scrollend"),T=we?R!==null?R+"Capture":null:R;we=[];for(var z=O,D;z!==null;){var X=z;if(D=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||D===null||T===null||(X=ol(z,T),X!=null&&we.push(Xl(z,X,D))),We)break;z=z.return}0<we.length&&(R=new N(R,Te,null,n,G),Q.push({event:R,listeners:we}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",R&&n!==Do&&(Te=n.relatedTarget||n.fromElement)&&(ri(Te)||Te[Gn]))break e;if((N||R)&&(R=G.window===G?G:(R=G.ownerDocument)?R.defaultView||R.parentWindow:window,N?(Te=n.relatedTarget||n.toElement,N=O,Te=Te?ri(Te):null,Te!==null&&(We=d(Te),we=Te.tag,Te!==We||we!==5&&we!==27&&we!==6)&&(Te=null)):(N=null,Te=O),N!==Te)){if(we=$f,X="onMouseLeave",T="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(we=Qf,X="onPointerLeave",T="onPointerEnter",z="pointer"),We=N==null?R:sl(N),D=Te==null?R:sl(Te),R=new we(X,z+"leave",N,n,G),R.target=We,R.relatedTarget=D,X=null,ri(G)===O&&(we=new we(T,z+"enter",Te,n,G),we.target=D,we.relatedTarget=We,X=we),We=X,N&&Te)t:{for(we=N,T=Te,z=0,D=we;D;D=qi(D))z++;for(D=0,X=T;X;X=qi(X))D++;for(;0<z-D;)we=qi(we),z--;for(;0<D-z;)T=qi(T),D--;for(;z--;){if(we===T||T!==null&&we===T.alternate)break t;we=qi(we),T=qi(T)}we=null}else we=null;N!==null&&U0(Q,R,N,we,!1),Te!==null&&We!==null&&U0(Q,We,Te,we,!0)}}e:{if(R=O?sl(O):window,N=R.nodeName&&R.nodeName.toLowerCase(),N==="select"||N==="input"&&R.type==="file")var de=td;else if(Pf(R))if(nd)de=bg;else{de=yg;var Ne=xg}else N=R.nodeName,!N||N.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?O&&jo(O.elementType)&&(de=td):de=vg;if(de&&(de=de(e,O))){ed(Q,de,n,G);break e}Ne&&Ne(e,R,O),e==="focusout"&&O&&R.type==="number"&&O.memoizedProps.value!=null&&To(R,"number",R.value)}switch(Ne=O?sl(O):window,e){case"focusin":(Pf(Ne)||Ne.contentEditable==="true")&&(gi=Ne,Vo=O,gl=null);break;case"focusout":gl=Vo=gi=null;break;case"mousedown":Go=!0;break;case"contextmenu":case"mouseup":case"dragend":Go=!1,cd(Q,n,G);break;case"selectionchange":if(wg)break;case"keydown":case"keyup":cd(Q,n,G)}var ge;if(Bo)e:{switch(e){case"compositionstart":var ze="onCompositionStart";break e;case"compositionend":ze="onCompositionEnd";break e;case"compositionupdate":ze="onCompositionUpdate";break e}ze=void 0}else mi?Wf(e,n)&&(ze="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ze="onCompositionStart");ze&&(Kf&&n.locale!=="ko"&&(mi||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&mi&&(ge=Yf()):(oa=G,ko="value"in oa?oa.value:oa.textContent,mi=!0)),Ne=bs(O,ze),0<Ne.length&&(ze=new Zf(ze,e,null,n,G),Q.push({event:ze,listeners:Ne}),ge?ze.data=ge:(ge=If(n),ge!==null&&(ze.data=ge)))),(ge=dg?hg(e,n):pg(e,n))&&(ze=bs(O,"onBeforeInput"),0<ze.length&&(Ne=new Zf("onBeforeInput","beforeinput",null,n,G),Q.push({event:Ne,listeners:ze}),Ne.data=ge)),ix(Q,e,O,n,G)}N0(Q,t)})}function Xl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bs(e,t){for(var n=t+"Capture",i=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=ol(e,n),l!=null&&i.unshift(Xl(e,l,s)),l=ol(e,t),l!=null&&i.push(Xl(e,l,s))),e.tag===3)return i;e=e.return}return[]}function qi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function U0(e,t,n,i,l){for(var s=t._reactName,h=[];n!==null&&n!==i;){var m=n,y=m.alternate,O=m.stateNode;if(m=m.tag,y!==null&&y===i)break;m!==5&&m!==26&&m!==27||O===null||(y=O,l?(O=ol(n,s),O!=null&&h.unshift(Xl(n,O,y))):l||(O=ol(n,s),O!=null&&h.push(Xl(n,O,y)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var ox=/\r\n?/g,ux=/\u0000|\uFFFD/g;function B0(e){return(typeof e=="string"?e:""+e).replace(ox,`
`).replace(ux,"")}function H0(e,t){return t=B0(t),B0(e)===t}function Ss(){}function Fe(e,t,n,i,l,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||di(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&di(e,""+i);break;case"className":Tr(e,"class",i);break;case"tabIndex":Tr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Tr(e,n,i);break;case"style":qf(e,i,s);break;case"data":if(t!=="object"){Tr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=_r(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Fe(e,t,"name",l.name,l,null),Fe(e,t,"formEncType",l.formEncType,l,null),Fe(e,t,"formMethod",l.formMethod,l,null),Fe(e,t,"formTarget",l.formTarget,l,null)):(Fe(e,t,"encType",l.encType,l,null),Fe(e,t,"method",l.method,l,null),Fe(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=_r(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ss);break;case"onScroll":i!=null&&Ue("scroll",e);break;case"onScrollEnd":i!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=_r(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),Ar(e,"popover",i);break;case"xlinkActuate":Yn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Yn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Yn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Yn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Yn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Yn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Yn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Yn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Yn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ar(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Lm.get(n)||n,Ar(e,n,i))}}function fc(e,t,n,i,l,s){switch(n){case"style":qf(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof i=="string"?di(e,i):(typeof i=="number"||typeof i=="bigint")&&di(e,""+i);break;case"onScroll":i!=null&&Ue("scroll",e);break;case"onScrollEnd":i!=null&&Ue("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ss);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_f.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),s=e[ot]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,l),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,l);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Ar(e,n,i)}}}function Nt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var i=!1,l=!1,s;for(s in n)if(n.hasOwnProperty(s)){var h=n[s];if(h!=null)switch(s){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Fe(e,t,s,h,n,null)}}l&&Fe(e,t,"srcSet",n.srcSet,n,null),i&&Fe(e,t,"src",n.src,n,null);return;case"input":Ue("invalid",e);var m=s=h=l=null,y=null,O=null;for(i in n)if(n.hasOwnProperty(i)){var G=n[i];if(G!=null)switch(i){case"name":l=G;break;case"type":h=G;break;case"checked":y=G;break;case"defaultChecked":O=G;break;case"value":s=G;break;case"defaultValue":m=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(u(137,t));break;default:Fe(e,t,i,G,n,null)}}Uf(e,s,m,y,O,h,l,!1),jr(e);return;case"select":Ue("invalid",e),i=h=s=null;for(l in n)if(n.hasOwnProperty(l)&&(m=n[l],m!=null))switch(l){case"value":s=m;break;case"defaultValue":h=m;break;case"multiple":i=m;default:Fe(e,t,l,m,n,null)}t=s,n=h,e.multiple=!!i,t!=null?fi(e,!!i,t,!1):n!=null&&fi(e,!!i,n,!0);return;case"textarea":Ue("invalid",e),s=l=i=null;for(h in n)if(n.hasOwnProperty(h)&&(m=n[h],m!=null))switch(h){case"value":i=m;break;case"defaultValue":l=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(u(91));break;default:Fe(e,t,h,m,n,null)}Hf(e,i,l,s),jr(e);return;case"option":for(y in n)if(n.hasOwnProperty(y)&&(i=n[y],i!=null))switch(y){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Fe(e,t,y,i,n,null)}return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(i=0;i<Yl.length;i++)Ue(Yl[i],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(i=n[O],i!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Fe(e,t,O,i,n,null)}return;default:if(jo(t)){for(G in n)n.hasOwnProperty(G)&&(i=n[G],i!==void 0&&fc(e,t,G,i,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(i=n[m],i!=null&&Fe(e,t,m,i,n,null))}function cx(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,h=null,m=null,y=null,O=null,G=null;for(N in n){var Q=n[N];if(n.hasOwnProperty(N)&&Q!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":y=Q;default:i.hasOwnProperty(N)||Fe(e,t,N,null,i,Q)}}for(var R in i){var N=i[R];if(Q=n[R],i.hasOwnProperty(R)&&(N!=null||Q!=null))switch(R){case"type":s=N;break;case"name":l=N;break;case"checked":O=N;break;case"defaultChecked":G=N;break;case"value":h=N;break;case"defaultValue":m=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:N!==Q&&Fe(e,t,R,N,i,Q)}}Ao(e,h,m,y,O,G,s,l);return;case"select":N=h=m=R=null;for(s in n)if(y=n[s],n.hasOwnProperty(s)&&y!=null)switch(s){case"value":break;case"multiple":N=y;default:i.hasOwnProperty(s)||Fe(e,t,s,null,i,y)}for(l in i)if(s=i[l],y=n[l],i.hasOwnProperty(l)&&(s!=null||y!=null))switch(l){case"value":R=s;break;case"defaultValue":m=s;break;case"multiple":h=s;default:s!==y&&Fe(e,t,l,s,i,y)}t=m,n=h,i=N,R!=null?fi(e,!!n,R,!1):!!i!=!!n&&(t!=null?fi(e,!!n,t,!0):fi(e,!!n,n?[]:"",!1));return;case"textarea":N=R=null;for(m in n)if(l=n[m],n.hasOwnProperty(m)&&l!=null&&!i.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Fe(e,t,m,null,i,l)}for(h in i)if(l=i[h],s=n[h],i.hasOwnProperty(h)&&(l!=null||s!=null))switch(h){case"value":R=l;break;case"defaultValue":N=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==s&&Fe(e,t,h,l,i,s)}Bf(e,R,N);return;case"option":for(var Te in n)if(R=n[Te],n.hasOwnProperty(Te)&&R!=null&&!i.hasOwnProperty(Te))switch(Te){case"selected":e.selected=!1;break;default:Fe(e,t,Te,null,i,R)}for(y in i)if(R=i[y],N=n[y],i.hasOwnProperty(y)&&R!==N&&(R!=null||N!=null))switch(y){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:Fe(e,t,y,R,i,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in n)R=n[we],n.hasOwnProperty(we)&&R!=null&&!i.hasOwnProperty(we)&&Fe(e,t,we,null,i,R);for(O in i)if(R=i[O],N=n[O],i.hasOwnProperty(O)&&R!==N&&(R!=null||N!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:Fe(e,t,O,R,i,N)}return;default:if(jo(t)){for(var We in n)R=n[We],n.hasOwnProperty(We)&&R!==void 0&&!i.hasOwnProperty(We)&&fc(e,t,We,void 0,i,R);for(G in i)R=i[G],N=n[G],!i.hasOwnProperty(G)||R===N||R===void 0&&N===void 0||fc(e,t,G,R,i,N);return}}for(var T in n)R=n[T],n.hasOwnProperty(T)&&R!=null&&!i.hasOwnProperty(T)&&Fe(e,t,T,null,i,R);for(Q in i)R=i[Q],N=n[Q],!i.hasOwnProperty(Q)||R===N||R==null&&N==null||Fe(e,t,Q,R,i,N)}var dc=null,hc=null;function ws(e){return e.nodeType===9?e:e.ownerDocument}function L0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function q0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function pc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mc=null;function fx(){var e=window.event;return e&&e.type==="popstate"?e===mc?!1:(mc=e,!0):(mc=null,!1)}var V0=typeof setTimeout=="function"?setTimeout:void 0,dx=typeof clearTimeout=="function"?clearTimeout:void 0,G0=typeof Promise=="function"?Promise:void 0,hx=typeof queueMicrotask=="function"?queueMicrotask:typeof G0<"u"?function(e){return G0.resolve(null).then(e).catch(px)}:V0;function px(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function Y0(e,t){var n=t,i=0,l=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(0<i&&8>i){n=i;var h=e.ownerDocument;if(n&1&&$l(h.documentElement),n&2&&$l(h.body),n&4)for(n=h.head,$l(n),h=n.firstChild;h;){var m=h.nextSibling,y=h.nodeName;h[rl]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&h.rel.toLowerCase()==="stylesheet"||n.removeChild(h),h=m}}if(l===0){e.removeChild(s),Pl(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:i=n.charCodeAt(0)-48;else i=0;n=s}while(n);Pl(t)}function gc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":gc(n),So(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function mx(e,t,n,i){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[rl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=zn(e.nextSibling),e===null)break}return null}function gx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=zn(e.nextSibling),e===null))return null;return e}function xc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function xx(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var yc=null;function X0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function $0(e,t,n){switch(t=ws(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function $l(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);So(e)}var yn=new Map,Z0=new Set;function Es(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=J.d;J.d={f:yx,r:vx,D:bx,C:Sx,L:wx,m:Ex,X:Ax,S:zx,M:Tx};function yx(){var e=aa.f(),t=ps();return e||t}function vx(e){var t=si(e);t!==null&&t.tag===5&&t.type==="form"?d1(t):aa.r(e)}var Vi=typeof document>"u"?null:document;function Q0(e,t,n){var i=Vi;if(i&&typeof t=="string"&&t){var l=fn(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Z0.has(l)||(Z0.add(l),e={rel:e,crossOrigin:n,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),Nt(t,"link",e),Et(t),i.head.appendChild(t)))}}function bx(e){aa.D(e),Q0("dns-prefetch",e,null)}function Sx(e,t){aa.C(e,t),Q0("preconnect",e,t)}function wx(e,t,n){aa.L(e,t,n);var i=Vi;if(i&&e&&t){var l='link[rel="preload"][as="'+fn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+fn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+fn(n.imageSizes)+'"]')):l+='[href="'+fn(e)+'"]';var s=l;switch(t){case"style":s=Gi(e);break;case"script":s=Yi(e)}yn.has(s)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),yn.set(s,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(Zl(s))||t==="script"&&i.querySelector(Ql(s))||(t=i.createElement("link"),Nt(t,"link",e),Et(t),i.head.appendChild(t)))}}function Ex(e,t){aa.m(e,t);var n=Vi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+fn(i)+'"][href="'+fn(e)+'"]',s=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Yi(e)}if(!yn.has(s)&&(e=v({rel:"modulepreload",href:e},t),yn.set(s,e),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ql(s)))return}i=n.createElement("link"),Nt(i,"link",e),Et(i),n.head.appendChild(i)}}}function zx(e,t,n){aa.S(e,t,n);var i=Vi;if(i&&e){var l=oi(i).hoistableStyles,s=Gi(e);t=t||"default";var h=l.get(s);if(!h){var m={loading:0,preload:null};if(h=i.querySelector(Zl(s)))m.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=yn.get(s))&&vc(e,n);var y=h=i.createElement("link");Et(y),Nt(y,"link",e),y._p=new Promise(function(O,G){y.onload=O,y.onerror=G}),y.addEventListener("load",function(){m.loading|=1}),y.addEventListener("error",function(){m.loading|=2}),m.loading|=4,zs(h,t,i)}h={type:"stylesheet",instance:h,count:1,state:m},l.set(s,h)}}}function Ax(e,t){aa.X(e,t);var n=Vi;if(n&&e){var i=oi(n).hoistableScripts,l=Yi(e),s=i.get(l);s||(s=n.querySelector(Ql(l)),s||(e=v({src:e,async:!0},t),(t=yn.get(l))&&bc(e,t),s=n.createElement("script"),Et(s),Nt(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(l,s))}}function Tx(e,t){aa.M(e,t);var n=Vi;if(n&&e){var i=oi(n).hoistableScripts,l=Yi(e),s=i.get(l);s||(s=n.querySelector(Ql(l)),s||(e=v({src:e,async:!0,type:"module"},t),(t=yn.get(l))&&bc(e,t),s=n.createElement("script"),Et(s),Nt(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(l,s))}}function K0(e,t,n,i){var l=(l=ue.current)?Es(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Gi(n.href),n=oi(l).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Gi(n.href);var s=oi(l).hoistableStyles,h=s.get(e);if(h||(l=l.ownerDocument||l,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,h),(s=l.querySelector(Zl(e)))&&!s._p&&(h.instance=s,h.state.loading=5),yn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},yn.set(e,n),s||jx(l,e,n,h.state))),t&&i===null)throw Error(u(528,""));return h}if(t&&i!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Yi(n),n=oi(l).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Gi(e){return'href="'+fn(e)+'"'}function Zl(e){return'link[rel="stylesheet"]['+e+"]"}function J0(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function jx(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Nt(t,"link",n),Et(t),e.head.appendChild(t))}function Yi(e){return'[src="'+fn(e)+'"]'}function Ql(e){return"script[async]"+e}function F0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+fn(n.href)+'"]');if(i)return t.instance=i,Et(i),i;var l=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Et(i),Nt(i,"style",l),zs(i,n.precedence,e),t.instance=i;case"stylesheet":l=Gi(n.href);var s=e.querySelector(Zl(l));if(s)return t.state.loading|=4,t.instance=s,Et(s),s;i=J0(n),(l=yn.get(l))&&vc(i,l),s=(e.ownerDocument||e).createElement("link"),Et(s);var h=s;return h._p=new Promise(function(m,y){h.onload=m,h.onerror=y}),Nt(s,"link",i),t.state.loading|=4,zs(s,n.precedence,e),t.instance=s;case"script":return s=Yi(n.src),(l=e.querySelector(Ql(s)))?(t.instance=l,Et(l),l):(i=n,(l=yn.get(s))&&(i=v({},n),bc(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),Et(l),Nt(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,zs(i,n.precedence,e));return t.instance}function zs(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,s=l,h=0;h<i.length;h++){var m=i[h];if(m.dataset.precedence===t)s=m;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function vc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var As=null;function W0(e,t,n){if(As===null){var i=new Map,l=As=new Map;l.set(n,i)}else l=As,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var s=n[l];if(!(s[rl]||s[Ke]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var h=s.getAttribute(t)||"";h=e+h;var m=i.get(h);m?m.push(s):i.set(h,[s])}}return i}function I0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Dx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function P0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Kl=null;function _x(){}function Ox(e,t,n){if(Kl===null)throw Error(u(475));var i=Kl;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Gi(n.href),s=e.querySelector(Zl(l));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Ts.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=s,Et(s);return}s=e.ownerDocument||e,n=J0(n),(l=yn.get(l))&&vc(n,l),s=s.createElement("link"),Et(s);var h=s;h._p=new Promise(function(m,y){h.onload=m,h.onerror=y}),Nt(s,"link",n),t.instance=s}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=Ts.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function Cx(){if(Kl===null)throw Error(u(475));var e=Kl;return e.stylesheets&&e.count===0&&Sc(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Sc(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Ts(){if(this.count--,this.count===0){if(this.stylesheets)Sc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var js=null;function Sc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,js=new Map,t.forEach(kx,e),js=null,Ts.call(e))}function kx(e,t){if(!(t.state.loading&4)){var n=js.get(e);if(n)var i=n.get(null);else{n=new Map,js.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var h=l[s];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),i=h)}i&&n.set(null,i)}l=t.instance,h=l.getAttribute("data-precedence"),s=n.get(h)||i,s===i&&n.set(null,l),n.set(h,l),this.count++,i=Ts.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Jl={$$typeof:K,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function Rx(e,t,n,i,l,s,h,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=On(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=On(0),this.hiddenUpdates=On(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function eh(e,t,n,i,l,s,h,m,y,O,G,Q){return e=new Rx(e,t,n,h,m,y,O,Q),t=1,s===!0&&(t|=24),s=tn(3,null,null,t),e.current=s,s.stateNode=e,t=nu(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},ru(s),e}function th(e){return e?(e=bi,e):bi}function nh(e,t,n,i,l,s){l=th(l),i.context===null?i.context=l:i.pendingContext=l,i=fa(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=da(e,i,t),n!==null&&(sn(n,e,t),Al(n,e,t))}function ah(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wc(e,t){ah(e,t),(e=e.alternate)&&ah(e,t)}function ih(e){if(e.tag===13){var t=vi(e,67108864);t!==null&&sn(t,e,67108864),wc(e,67108864)}}var Ds=!0;function Nx(e,t,n,i){var l=_.T;_.T=null;var s=J.p;try{J.p=2,Ec(e,t,n,i)}finally{J.p=s,_.T=l}}function Mx(e,t,n,i){var l=_.T;_.T=null;var s=J.p;try{J.p=8,Ec(e,t,n,i)}finally{J.p=s,_.T=l}}function Ec(e,t,n,i){if(Ds){var l=zc(i);if(l===null)cc(e,t,i,_s,n),rh(e,i);else if(Bx(l,e,t,n,i))i.stopPropagation();else if(rh(e,i),t&4&&-1<Ux.indexOf(e)){for(;l!==null;){var s=si(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var h=Ct(s.pendingLanes);if(h!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;h;){var y=1<<31-$e(h);m.entanglements[1]|=y,h&=~y}Mn(s),(Ze&6)===0&&(ds=it()+500,Gl(0))}}break;case 13:m=vi(s,2),m!==null&&sn(m,s,2),ps(),wc(s,2)}if(s=zc(i),s===null&&cc(e,t,i,_s,n),s===l)break;l=s}l!==null&&i.stopPropagation()}else cc(e,t,i,null,n)}}function zc(e){return e=_o(e),Ac(e)}var _s=null;function Ac(e){if(_s=null,e=ri(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _s=e,null}function lh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_n()){case Pt:return 2;case b:return 8;case j:case H:return 32;case ie:return 268435456;default:return 32}default:return 32}}var Tc=!1,Aa=null,Ta=null,ja=null,Fl=new Map,Wl=new Map,Da=[],Ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rh(e,t){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Fl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wl.delete(t.pointerId)}}function Il(e,t,n,i,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[l]},t!==null&&(t=si(t),t!==null&&ih(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Bx(e,t,n,i,l){switch(t){case"focusin":return Aa=Il(Aa,e,t,n,i,l),!0;case"dragenter":return Ta=Il(Ta,e,t,n,i,l),!0;case"mouseover":return ja=Il(ja,e,t,n,i,l),!0;case"pointerover":var s=l.pointerId;return Fl.set(s,Il(Fl.get(s)||null,e,t,n,i,l)),!0;case"gotpointercapture":return s=l.pointerId,Wl.set(s,Il(Wl.get(s)||null,e,t,n,i,l)),!0}return!1}function sh(e){var t=ri(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,bo(e.priority,function(){if(n.tag===13){var i=rn();i=ll(i);var l=vi(n,i);l!==null&&sn(l,n,i),wc(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Os(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Do=i,n.target.dispatchEvent(i),Do=null}else return t=si(n),t!==null&&ih(t),e.blockedOn=n,!1;t.shift()}return!0}function oh(e,t,n){Os(e)&&n.delete(t)}function Hx(){Tc=!1,Aa!==null&&Os(Aa)&&(Aa=null),Ta!==null&&Os(Ta)&&(Ta=null),ja!==null&&Os(ja)&&(ja=null),Fl.forEach(oh),Wl.forEach(oh)}function Cs(e,t){e.blockedOn===t&&(e.blockedOn=null,Tc||(Tc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Hx)))}var ks=null;function uh(e){ks!==e&&(ks=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){ks===e&&(ks=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(Ac(i||n)===null)continue;break}var s=si(n);s!==null&&(e.splice(t,3),t-=3,Au(s,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function Pl(e){function t(y){return Cs(y,e)}Aa!==null&&Cs(Aa,e),Ta!==null&&Cs(Ta,e),ja!==null&&Cs(ja,e),Fl.forEach(t),Wl.forEach(t);for(var n=0;n<Da.length;n++){var i=Da[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Da.length&&(n=Da[0],n.blockedOn===null);)sh(n),n.blockedOn===null&&Da.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],s=n[i+1],h=l[ot]||null;if(typeof s=="function")h||uh(n);else if(h){var m=null;if(s&&s.hasAttribute("formAction")){if(l=s,h=s[ot]||null)m=h.formAction;else if(Ac(l)!==null)continue}else m=h.action;typeof m=="function"?n[i+1]=m:(n.splice(i,3),i-=3),uh(n)}}}function jc(e){this._internalRoot=e}Rs.prototype.render=jc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,i=rn();nh(n,i,e,t,null,null)},Rs.prototype.unmount=jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nh(e.current,2,null,e,null,null),ps(),t[Gn]=null}};function Rs(e){this._internalRoot=e}Rs.prototype.unstable_scheduleHydration=function(e){if(e){var t=zr();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Da.length&&t!==0&&t<Da[n].priority;n++);Da.splice(n,0,e),n===0&&sh(e)}};var ch=r.version;if(ch!=="19.1.1")throw Error(u(527,ch,"19.1.1"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=S(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Lx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ns.isDisabled&&Ns.supportsFiber)try{ce=Ns.inject(Lx),Ae=Ns}catch{}}return tr.createRoot=function(e,t){if(!c(e))throw Error(u(299));var n=!1,i="",l=T1,s=j1,h=D1,m=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=eh(e,1,!1,null,null,n,i,l,s,h,m,null),e[Gn]=t.current,uc(e),new jc(t)},tr.hydrateRoot=function(e,t,n){if(!c(e))throw Error(u(299));var i=!1,l="",s=T1,h=j1,m=D1,y=null,O=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(y=n.unstable_transitionCallbacks),n.formState!==void 0&&(O=n.formState)),t=eh(e,1,!0,t,n??null,i,l,s,h,m,y,O),t.context=th(null),n=t.current,i=rn(),i=ll(i),l=fa(i),l.callback=null,da(n,l,i),n=i,t.current.lanes=n,Gt(t,n),Mn(t),e[Gn]=t.current,uc(e),new Rs(t)},tr.version="19.1.1",tr}var bh;function Jx(){if(bh)return _c.exports;bh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),_c.exports=Kx(),_c.exports}var Fx=Jx(),Y=sf();const Dt=Vx(Y);function Ep(a,r){return function(){return a.apply(r,arguments)}}const{toString:Wx}=Object.prototype,{getPrototypeOf:of}=Object,{iterator:no,toStringTag:zp}=Symbol,ao=(a=>r=>{const o=Wx.call(r);return a[o]||(a[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),Dn=a=>(a=a.toLowerCase(),r=>ao(r)===a),io=a=>r=>typeof r===a,{isArray:Pi}=Array,ur=io("undefined");function pr(a){return a!==null&&!ur(a)&&a.constructor!==null&&!ur(a.constructor)&&Ft(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const Ap=Dn("ArrayBuffer");function Ix(a){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(a):r=a&&a.buffer&&Ap(a.buffer),r}const Px=io("string"),Ft=io("function"),Tp=io("number"),mr=a=>a!==null&&typeof a=="object",e3=a=>a===!0||a===!1,Hs=a=>{if(ao(a)!=="object")return!1;const r=of(a);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(zp in a)&&!(no in a)},t3=a=>{if(!mr(a)||pr(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},n3=Dn("Date"),a3=Dn("File"),i3=Dn("Blob"),l3=Dn("FileList"),r3=a=>mr(a)&&Ft(a.pipe),s3=a=>{let r;return a&&(typeof FormData=="function"&&a instanceof FormData||Ft(a.append)&&((r=ao(a))==="formdata"||r==="object"&&Ft(a.toString)&&a.toString()==="[object FormData]"))},o3=Dn("URLSearchParams"),[u3,c3,f3,d3]=["ReadableStream","Request","Response","Headers"].map(Dn),h3=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function gr(a,r,{allOwnKeys:o=!1}={}){if(a===null||typeof a>"u")return;let u,c;if(typeof a!="object"&&(a=[a]),Pi(a))for(u=0,c=a.length;u<c;u++)r.call(null,a[u],u,a);else{if(pr(a))return;const d=o?Object.getOwnPropertyNames(a):Object.keys(a),p=d.length;let g;for(u=0;u<p;u++)g=d[u],r.call(null,a[g],g,a)}}function jp(a,r){if(pr(a))return null;r=r.toLowerCase();const o=Object.keys(a);let u=o.length,c;for(;u-- >0;)if(c=o[u],r===c.toLowerCase())return c;return null}const Fa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Dp=a=>!ur(a)&&a!==Fa;function $c(){const{caseless:a}=Dp(this)&&this||{},r={},o=(u,c)=>{const d=a&&jp(r,c)||c;Hs(r[d])&&Hs(u)?r[d]=$c(r[d],u):Hs(u)?r[d]=$c({},u):Pi(u)?r[d]=u.slice():r[d]=u};for(let u=0,c=arguments.length;u<c;u++)arguments[u]&&gr(arguments[u],o);return r}const p3=(a,r,o,{allOwnKeys:u}={})=>(gr(r,(c,d)=>{o&&Ft(c)?a[d]=Ep(c,o):a[d]=c},{allOwnKeys:u}),a),m3=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),g3=(a,r,o,u)=>{a.prototype=Object.create(r.prototype,u),a.prototype.constructor=a,Object.defineProperty(a,"super",{value:r.prototype}),o&&Object.assign(a.prototype,o)},x3=(a,r,o,u)=>{let c,d,p;const g={};if(r=r||{},a==null)return r;do{for(c=Object.getOwnPropertyNames(a),d=c.length;d-- >0;)p=c[d],(!u||u(p,a,r))&&!g[p]&&(r[p]=a[p],g[p]=!0);a=o!==!1&&of(a)}while(a&&(!o||o(a,r))&&a!==Object.prototype);return r},y3=(a,r,o)=>{a=String(a),(o===void 0||o>a.length)&&(o=a.length),o-=r.length;const u=a.indexOf(r,o);return u!==-1&&u===o},v3=a=>{if(!a)return null;if(Pi(a))return a;let r=a.length;if(!Tp(r))return null;const o=new Array(r);for(;r-- >0;)o[r]=a[r];return o},b3=(a=>r=>a&&r instanceof a)(typeof Uint8Array<"u"&&of(Uint8Array)),S3=(a,r)=>{const u=(a&&a[no]).call(a);let c;for(;(c=u.next())&&!c.done;){const d=c.value;r.call(a,d[0],d[1])}},w3=(a,r)=>{let o;const u=[];for(;(o=a.exec(r))!==null;)u.push(o);return u},E3=Dn("HTMLFormElement"),z3=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,u,c){return u.toUpperCase()+c}),Sh=(({hasOwnProperty:a})=>(r,o)=>a.call(r,o))(Object.prototype),A3=Dn("RegExp"),_p=(a,r)=>{const o=Object.getOwnPropertyDescriptors(a),u={};gr(o,(c,d)=>{let p;(p=r(c,d,a))!==!1&&(u[d]=p||c)}),Object.defineProperties(a,u)},T3=a=>{_p(a,(r,o)=>{if(Ft(a)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const u=a[o];if(Ft(u)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},j3=(a,r)=>{const o={},u=c=>{c.forEach(d=>{o[d]=!0})};return Pi(a)?u(a):u(String(a).split(r)),o},D3=()=>{},_3=(a,r)=>a!=null&&Number.isFinite(a=+a)?a:r;function O3(a){return!!(a&&Ft(a.append)&&a[zp]==="FormData"&&a[no])}const C3=a=>{const r=new Array(10),o=(u,c)=>{if(mr(u)){if(r.indexOf(u)>=0)return;if(pr(u))return u;if(!("toJSON"in u)){r[c]=u;const d=Pi(u)?[]:{};return gr(u,(p,g)=>{const S=o(p,c+1);!ur(S)&&(d[g]=S)}),r[c]=void 0,d}}return u};return o(a,0)},k3=Dn("AsyncFunction"),R3=a=>a&&(mr(a)||Ft(a))&&Ft(a.then)&&Ft(a.catch),Op=((a,r)=>a?setImmediate:r?((o,u)=>(Fa.addEventListener("message",({source:c,data:d})=>{c===Fa&&d===o&&u.length&&u.shift()()},!1),c=>{u.push(c),Fa.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",Ft(Fa.postMessage)),N3=typeof queueMicrotask<"u"?queueMicrotask.bind(Fa):typeof process<"u"&&process.nextTick||Op,M3=a=>a!=null&&Ft(a[no]),U={isArray:Pi,isArrayBuffer:Ap,isBuffer:pr,isFormData:s3,isArrayBufferView:Ix,isString:Px,isNumber:Tp,isBoolean:e3,isObject:mr,isPlainObject:Hs,isEmptyObject:t3,isReadableStream:u3,isRequest:c3,isResponse:f3,isHeaders:d3,isUndefined:ur,isDate:n3,isFile:a3,isBlob:i3,isRegExp:A3,isFunction:Ft,isStream:r3,isURLSearchParams:o3,isTypedArray:b3,isFileList:l3,forEach:gr,merge:$c,extend:p3,trim:h3,stripBOM:m3,inherits:g3,toFlatObject:x3,kindOf:ao,kindOfTest:Dn,endsWith:y3,toArray:v3,forEachEntry:S3,matchAll:w3,isHTMLForm:E3,hasOwnProperty:Sh,hasOwnProp:Sh,reduceDescriptors:_p,freezeMethods:T3,toObjectSet:j3,toCamelCase:z3,noop:D3,toFiniteNumber:_3,findKey:jp,global:Fa,isContextDefined:Dp,isSpecCompliantForm:O3,toJSONObject:C3,isAsyncFn:k3,isThenable:R3,setImmediate:Op,asap:N3,isIterable:M3};function De(a,r,o,u,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=a,this.name="AxiosError",r&&(this.code=r),o&&(this.config=o),u&&(this.request=u),c&&(this.response=c,this.status=c.status?c.status:null)}U.inherits(De,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.status}}});const Cp=De.prototype,kp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(a=>{kp[a]={value:a}});Object.defineProperties(De,kp);Object.defineProperty(Cp,"isAxiosError",{value:!0});De.from=(a,r,o,u,c,d)=>{const p=Object.create(Cp);return U.toFlatObject(a,p,function(S){return S!==Error.prototype},g=>g!=="isAxiosError"),De.call(p,a.message,r,o,u,c),p.cause=a,p.name=a.name,d&&Object.assign(p,d),p};const U3=null;function Zc(a){return U.isPlainObject(a)||U.isArray(a)}function Rp(a){return U.endsWith(a,"[]")?a.slice(0,-2):a}function wh(a,r,o){return a?a.concat(r).map(function(c,d){return c=Rp(c),!o&&d?"["+c+"]":c}).join(o?".":""):r}function B3(a){return U.isArray(a)&&!a.some(Zc)}const H3=U.toFlatObject(U,{},null,function(r){return/^is[A-Z]/.test(r)});function lo(a,r,o){if(!U.isObject(a))throw new TypeError("target must be an object");r=r||new FormData,o=U.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,k){return!U.isUndefined(k[M])});const u=o.metaTokens,c=o.visitor||v,d=o.dots,p=o.indexes,S=(o.Blob||typeof Blob<"u"&&Blob)&&U.isSpecCompliantForm(r);if(!U.isFunction(c))throw new TypeError("visitor must be a function");function x(C){if(C===null)return"";if(U.isDate(C))return C.toISOString();if(U.isBoolean(C))return C.toString();if(!S&&U.isBlob(C))throw new De("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(C)||U.isTypedArray(C)?S&&typeof Blob=="function"?new Blob([C]):Buffer.from(C):C}function v(C,M,k){let Z=C;if(C&&!k&&typeof C=="object"){if(U.endsWith(M,"{}"))M=u?M:M.slice(0,-2),C=JSON.stringify(C);else if(U.isArray(C)&&B3(C)||(U.isFileList(C)||U.endsWith(M,"[]"))&&(Z=U.toArray(C)))return M=Rp(M),Z.forEach(function(K,re){!(U.isUndefined(K)||K===null)&&r.append(p===!0?wh([M],re,d):p===null?M:M+"[]",x(K))}),!1}return Zc(C)?!0:(r.append(wh(k,M,d),x(C)),!1)}const E=[],A=Object.assign(H3,{defaultVisitor:v,convertValue:x,isVisitable:Zc});function F(C,M){if(!U.isUndefined(C)){if(E.indexOf(C)!==-1)throw Error("Circular reference detected in "+M.join("."));E.push(C),U.forEach(C,function(Z,q){(!(U.isUndefined(Z)||Z===null)&&c.call(r,Z,U.isString(q)?q.trim():q,M,A))===!0&&F(Z,M?M.concat(q):[q])}),E.pop()}}if(!U.isObject(a))throw new TypeError("data must be an object");return F(a),r}function Eh(a){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(u){return r[u]})}function uf(a,r){this._pairs=[],a&&lo(a,this,r)}const Np=uf.prototype;Np.append=function(r,o){this._pairs.push([r,o])};Np.toString=function(r){const o=r?function(u){return r.call(this,u,Eh)}:Eh;return this._pairs.map(function(c){return o(c[0])+"="+o(c[1])},"").join("&")};function L3(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Mp(a,r,o){if(!r)return a;const u=o&&o.encode||L3;U.isFunction(o)&&(o={serialize:o});const c=o&&o.serialize;let d;if(c?d=c(r,o):d=U.isURLSearchParams(r)?r.toString():new uf(r,o).toString(u),d){const p=a.indexOf("#");p!==-1&&(a=a.slice(0,p)),a+=(a.indexOf("?")===-1?"?":"&")+d}return a}class zh{constructor(){this.handlers=[]}use(r,o,u){return this.handlers.push({fulfilled:r,rejected:o,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){U.forEach(this.handlers,function(u){u!==null&&r(u)})}}const Up={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},q3=typeof URLSearchParams<"u"?URLSearchParams:uf,V3=typeof FormData<"u"?FormData:null,G3=typeof Blob<"u"?Blob:null,Y3={isBrowser:!0,classes:{URLSearchParams:q3,FormData:V3,Blob:G3},protocols:["http","https","file","blob","url","data"]},cf=typeof window<"u"&&typeof document<"u",Qc=typeof navigator=="object"&&navigator||void 0,X3=cf&&(!Qc||["ReactNative","NativeScript","NS"].indexOf(Qc.product)<0),$3=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Z3=cf&&window.location.href||"http://localhost",Q3=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:cf,hasStandardBrowserEnv:X3,hasStandardBrowserWebWorkerEnv:$3,navigator:Qc,origin:Z3},Symbol.toStringTag,{value:"Module"})),Bt={...Q3,...Y3};function K3(a,r){return lo(a,new Bt.classes.URLSearchParams,{visitor:function(o,u,c,d){return Bt.isNode&&U.isBuffer(o)?(this.append(u,o.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)},...r})}function J3(a){return U.matchAll(/\w+|\[(\w*)]/g,a).map(r=>r[0]==="[]"?"":r[1]||r[0])}function F3(a){const r={},o=Object.keys(a);let u;const c=o.length;let d;for(u=0;u<c;u++)d=o[u],r[d]=a[d];return r}function Bp(a){function r(o,u,c,d){let p=o[d++];if(p==="__proto__")return!0;const g=Number.isFinite(+p),S=d>=o.length;return p=!p&&U.isArray(c)?c.length:p,S?(U.hasOwnProp(c,p)?c[p]=[c[p],u]:c[p]=u,!g):((!c[p]||!U.isObject(c[p]))&&(c[p]=[]),r(o,u,c[p],d)&&U.isArray(c[p])&&(c[p]=F3(c[p])),!g)}if(U.isFormData(a)&&U.isFunction(a.entries)){const o={};return U.forEachEntry(a,(u,c)=>{r(J3(u),c,o,0)}),o}return null}function W3(a,r,o){if(U.isString(a))try{return(r||JSON.parse)(a),U.trim(a)}catch(u){if(u.name!=="SyntaxError")throw u}return(o||JSON.stringify)(a)}const xr={transitional:Up,adapter:["xhr","http","fetch"],transformRequest:[function(r,o){const u=o.getContentType()||"",c=u.indexOf("application/json")>-1,d=U.isObject(r);if(d&&U.isHTMLForm(r)&&(r=new FormData(r)),U.isFormData(r))return c?JSON.stringify(Bp(r)):r;if(U.isArrayBuffer(r)||U.isBuffer(r)||U.isStream(r)||U.isFile(r)||U.isBlob(r)||U.isReadableStream(r))return r;if(U.isArrayBufferView(r))return r.buffer;if(U.isURLSearchParams(r))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let g;if(d){if(u.indexOf("application/x-www-form-urlencoded")>-1)return K3(r,this.formSerializer).toString();if((g=U.isFileList(r))||u.indexOf("multipart/form-data")>-1){const S=this.env&&this.env.FormData;return lo(g?{"files[]":r}:r,S&&new S,this.formSerializer)}}return d||c?(o.setContentType("application/json",!1),W3(r)):r}],transformResponse:[function(r){const o=this.transitional||xr.transitional,u=o&&o.forcedJSONParsing,c=this.responseType==="json";if(U.isResponse(r)||U.isReadableStream(r))return r;if(r&&U.isString(r)&&(u&&!this.responseType||c)){const p=!(o&&o.silentJSONParsing)&&c;try{return JSON.parse(r)}catch(g){if(p)throw g.name==="SyntaxError"?De.from(g,De.ERR_BAD_RESPONSE,this,null,this.response):g}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Bt.classes.FormData,Blob:Bt.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};U.forEach(["delete","get","head","post","put","patch"],a=>{xr.headers[a]={}});const I3=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),P3=a=>{const r={};let o,u,c;return a&&a.split(`
`).forEach(function(p){c=p.indexOf(":"),o=p.substring(0,c).trim().toLowerCase(),u=p.substring(c+1).trim(),!(!o||r[o]&&I3[o])&&(o==="set-cookie"?r[o]?r[o].push(u):r[o]=[u]:r[o]=r[o]?r[o]+", "+u:u)}),r},Ah=Symbol("internals");function nr(a){return a&&String(a).trim().toLowerCase()}function Ls(a){return a===!1||a==null?a:U.isArray(a)?a.map(Ls):String(a)}function e2(a){const r=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let u;for(;u=o.exec(a);)r[u[1]]=u[2];return r}const t2=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function Nc(a,r,o,u,c){if(U.isFunction(u))return u.call(this,r,o);if(c&&(r=o),!!U.isString(r)){if(U.isString(u))return r.indexOf(u)!==-1;if(U.isRegExp(u))return u.test(r)}}function n2(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,o,u)=>o.toUpperCase()+u)}function a2(a,r){const o=U.toCamelCase(" "+r);["get","set","has"].forEach(u=>{Object.defineProperty(a,u+o,{value:function(c,d,p){return this[u].call(this,r,c,d,p)},configurable:!0})})}let Wt=class{constructor(r){r&&this.set(r)}set(r,o,u){const c=this;function d(g,S,x){const v=nr(S);if(!v)throw new Error("header name must be a non-empty string");const E=U.findKey(c,v);(!E||c[E]===void 0||x===!0||x===void 0&&c[E]!==!1)&&(c[E||S]=Ls(g))}const p=(g,S)=>U.forEach(g,(x,v)=>d(x,v,S));if(U.isPlainObject(r)||r instanceof this.constructor)p(r,o);else if(U.isString(r)&&(r=r.trim())&&!t2(r))p(P3(r),o);else if(U.isObject(r)&&U.isIterable(r)){let g={},S,x;for(const v of r){if(!U.isArray(v))throw TypeError("Object iterator must return a key-value pair");g[x=v[0]]=(S=g[x])?U.isArray(S)?[...S,v[1]]:[S,v[1]]:v[1]}p(g,o)}else r!=null&&d(o,r,u);return this}get(r,o){if(r=nr(r),r){const u=U.findKey(this,r);if(u){const c=this[u];if(!o)return c;if(o===!0)return e2(c);if(U.isFunction(o))return o.call(this,c,u);if(U.isRegExp(o))return o.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,o){if(r=nr(r),r){const u=U.findKey(this,r);return!!(u&&this[u]!==void 0&&(!o||Nc(this,this[u],u,o)))}return!1}delete(r,o){const u=this;let c=!1;function d(p){if(p=nr(p),p){const g=U.findKey(u,p);g&&(!o||Nc(u,u[g],g,o))&&(delete u[g],c=!0)}}return U.isArray(r)?r.forEach(d):d(r),c}clear(r){const o=Object.keys(this);let u=o.length,c=!1;for(;u--;){const d=o[u];(!r||Nc(this,this[d],d,r,!0))&&(delete this[d],c=!0)}return c}normalize(r){const o=this,u={};return U.forEach(this,(c,d)=>{const p=U.findKey(u,d);if(p){o[p]=Ls(c),delete o[d];return}const g=r?n2(d):String(d).trim();g!==d&&delete o[d],o[g]=Ls(c),u[g]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const o=Object.create(null);return U.forEach(this,(u,c)=>{u!=null&&u!==!1&&(o[c]=r&&U.isArray(u)?u.join(", "):u)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,o])=>r+": "+o).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...o){const u=new this(r);return o.forEach(c=>u.set(c)),u}static accessor(r){const u=(this[Ah]=this[Ah]={accessors:{}}).accessors,c=this.prototype;function d(p){const g=nr(p);u[g]||(a2(c,p),u[g]=!0)}return U.isArray(r)?r.forEach(d):d(r),this}};Wt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);U.reduceDescriptors(Wt.prototype,({value:a},r)=>{let o=r[0].toUpperCase()+r.slice(1);return{get:()=>a,set(u){this[o]=u}}});U.freezeMethods(Wt);function Mc(a,r){const o=this||xr,u=r||o,c=Wt.from(u.headers);let d=u.data;return U.forEach(a,function(g){d=g.call(o,d,c.normalize(),r?r.status:void 0)}),c.normalize(),d}function Hp(a){return!!(a&&a.__CANCEL__)}function el(a,r,o){De.call(this,a??"canceled",De.ERR_CANCELED,r,o),this.name="CanceledError"}U.inherits(el,De,{__CANCEL__:!0});function Lp(a,r,o){const u=o.config.validateStatus;!o.status||!u||u(o.status)?a(o):r(new De("Request failed with status code "+o.status,[De.ERR_BAD_REQUEST,De.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function i2(a){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return r&&r[1]||""}function l2(a,r){a=a||10;const o=new Array(a),u=new Array(a);let c=0,d=0,p;return r=r!==void 0?r:1e3,function(S){const x=Date.now(),v=u[d];p||(p=x),o[c]=S,u[c]=x;let E=d,A=0;for(;E!==c;)A+=o[E++],E=E%a;if(c=(c+1)%a,c===d&&(d=(d+1)%a),x-p<r)return;const F=v&&x-v;return F?Math.round(A*1e3/F):void 0}}function r2(a,r){let o=0,u=1e3/r,c,d;const p=(x,v=Date.now())=>{o=v,c=null,d&&(clearTimeout(d),d=null),a(...x)};return[(...x)=>{const v=Date.now(),E=v-o;E>=u?p(x,v):(c=x,d||(d=setTimeout(()=>{d=null,p(c)},u-E)))},()=>c&&p(c)]}const Qs=(a,r,o=3)=>{let u=0;const c=l2(50,250);return r2(d=>{const p=d.loaded,g=d.lengthComputable?d.total:void 0,S=p-u,x=c(S),v=p<=g;u=p;const E={loaded:p,total:g,progress:g?p/g:void 0,bytes:S,rate:x||void 0,estimated:x&&g&&v?(g-p)/x:void 0,event:d,lengthComputable:g!=null,[r?"download":"upload"]:!0};a(E)},o)},Th=(a,r)=>{const o=a!=null;return[u=>r[0]({lengthComputable:o,total:a,loaded:u}),r[1]]},jh=a=>(...r)=>U.asap(()=>a(...r)),s2=Bt.hasStandardBrowserEnv?((a,r)=>o=>(o=new URL(o,Bt.origin),a.protocol===o.protocol&&a.host===o.host&&(r||a.port===o.port)))(new URL(Bt.origin),Bt.navigator&&/(msie|trident)/i.test(Bt.navigator.userAgent)):()=>!0,o2=Bt.hasStandardBrowserEnv?{write(a,r,o,u,c,d){const p=[a+"="+encodeURIComponent(r)];U.isNumber(o)&&p.push("expires="+new Date(o).toGMTString()),U.isString(u)&&p.push("path="+u),U.isString(c)&&p.push("domain="+c),d===!0&&p.push("secure"),document.cookie=p.join("; ")},read(a){const r=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(a){this.write(a,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function u2(a){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function c2(a,r){return r?a.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):a}function qp(a,r,o){let u=!u2(r);return a&&(u||o==!1)?c2(a,r):r}const Dh=a=>a instanceof Wt?{...a}:a;function ni(a,r){r=r||{};const o={};function u(x,v,E,A){return U.isPlainObject(x)&&U.isPlainObject(v)?U.merge.call({caseless:A},x,v):U.isPlainObject(v)?U.merge({},v):U.isArray(v)?v.slice():v}function c(x,v,E,A){if(U.isUndefined(v)){if(!U.isUndefined(x))return u(void 0,x,E,A)}else return u(x,v,E,A)}function d(x,v){if(!U.isUndefined(v))return u(void 0,v)}function p(x,v){if(U.isUndefined(v)){if(!U.isUndefined(x))return u(void 0,x)}else return u(void 0,v)}function g(x,v,E){if(E in r)return u(x,v);if(E in a)return u(void 0,x)}const S={url:d,method:d,data:d,baseURL:p,transformRequest:p,transformResponse:p,paramsSerializer:p,timeout:p,timeoutMessage:p,withCredentials:p,withXSRFToken:p,adapter:p,responseType:p,xsrfCookieName:p,xsrfHeaderName:p,onUploadProgress:p,onDownloadProgress:p,decompress:p,maxContentLength:p,maxBodyLength:p,beforeRedirect:p,transport:p,httpAgent:p,httpsAgent:p,cancelToken:p,socketPath:p,responseEncoding:p,validateStatus:g,headers:(x,v,E)=>c(Dh(x),Dh(v),E,!0)};return U.forEach(Object.keys({...a,...r}),function(v){const E=S[v]||c,A=E(a[v],r[v],v);U.isUndefined(A)&&E!==g||(o[v]=A)}),o}const Vp=a=>{const r=ni({},a);let{data:o,withXSRFToken:u,xsrfHeaderName:c,xsrfCookieName:d,headers:p,auth:g}=r;r.headers=p=Wt.from(p),r.url=Mp(qp(r.baseURL,r.url,r.allowAbsoluteUrls),a.params,a.paramsSerializer),g&&p.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):"")));let S;if(U.isFormData(o)){if(Bt.hasStandardBrowserEnv||Bt.hasStandardBrowserWebWorkerEnv)p.setContentType(void 0);else if((S=p.getContentType())!==!1){const[x,...v]=S?S.split(";").map(E=>E.trim()).filter(Boolean):[];p.setContentType([x||"multipart/form-data",...v].join("; "))}}if(Bt.hasStandardBrowserEnv&&(u&&U.isFunction(u)&&(u=u(r)),u||u!==!1&&s2(r.url))){const x=c&&d&&o2.read(d);x&&p.set(c,x)}return r},f2=typeof XMLHttpRequest<"u",d2=f2&&function(a){return new Promise(function(o,u){const c=Vp(a);let d=c.data;const p=Wt.from(c.headers).normalize();let{responseType:g,onUploadProgress:S,onDownloadProgress:x}=c,v,E,A,F,C;function M(){F&&F(),C&&C(),c.cancelToken&&c.cancelToken.unsubscribe(v),c.signal&&c.signal.removeEventListener("abort",v)}let k=new XMLHttpRequest;k.open(c.method.toUpperCase(),c.url,!0),k.timeout=c.timeout;function Z(){if(!k)return;const K=Wt.from("getAllResponseHeaders"in k&&k.getAllResponseHeaders()),L={data:!g||g==="text"||g==="json"?k.responseText:k.response,status:k.status,statusText:k.statusText,headers:K,config:a,request:k};Lp(function($){o($),M()},function($){u($),M()},L),k=null}"onloadend"in k?k.onloadend=Z:k.onreadystatechange=function(){!k||k.readyState!==4||k.status===0&&!(k.responseURL&&k.responseURL.indexOf("file:")===0)||setTimeout(Z)},k.onabort=function(){k&&(u(new De("Request aborted",De.ECONNABORTED,a,k)),k=null)},k.onerror=function(){u(new De("Network Error",De.ERR_NETWORK,a,k)),k=null},k.ontimeout=function(){let re=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const L=c.transitional||Up;c.timeoutErrorMessage&&(re=c.timeoutErrorMessage),u(new De(re,L.clarifyTimeoutError?De.ETIMEDOUT:De.ECONNABORTED,a,k)),k=null},d===void 0&&p.setContentType(null),"setRequestHeader"in k&&U.forEach(p.toJSON(),function(re,L){k.setRequestHeader(L,re)}),U.isUndefined(c.withCredentials)||(k.withCredentials=!!c.withCredentials),g&&g!=="json"&&(k.responseType=c.responseType),x&&([A,C]=Qs(x,!0),k.addEventListener("progress",A)),S&&k.upload&&([E,F]=Qs(S),k.upload.addEventListener("progress",E),k.upload.addEventListener("loadend",F)),(c.cancelToken||c.signal)&&(v=K=>{k&&(u(!K||K.type?new el(null,a,k):K),k.abort(),k=null)},c.cancelToken&&c.cancelToken.subscribe(v),c.signal&&(c.signal.aborted?v():c.signal.addEventListener("abort",v)));const q=i2(c.url);if(q&&Bt.protocols.indexOf(q)===-1){u(new De("Unsupported protocol "+q+":",De.ERR_BAD_REQUEST,a));return}k.send(d||null)})},h2=(a,r)=>{const{length:o}=a=a?a.filter(Boolean):[];if(r||o){let u=new AbortController,c;const d=function(x){if(!c){c=!0,g();const v=x instanceof Error?x:this.reason;u.abort(v instanceof De?v:new el(v instanceof Error?v.message:v))}};let p=r&&setTimeout(()=>{p=null,d(new De(`timeout ${r} of ms exceeded`,De.ETIMEDOUT))},r);const g=()=>{a&&(p&&clearTimeout(p),p=null,a.forEach(x=>{x.unsubscribe?x.unsubscribe(d):x.removeEventListener("abort",d)}),a=null)};a.forEach(x=>x.addEventListener("abort",d));const{signal:S}=u;return S.unsubscribe=()=>U.asap(g),S}},p2=function*(a,r){let o=a.byteLength;if(o<r){yield a;return}let u=0,c;for(;u<o;)c=u+r,yield a.slice(u,c),u=c},m2=async function*(a,r){for await(const o of g2(a))yield*p2(o,r)},g2=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const r=a.getReader();try{for(;;){const{done:o,value:u}=await r.read();if(o)break;yield u}}finally{await r.cancel()}},_h=(a,r,o,u)=>{const c=m2(a,r);let d=0,p,g=S=>{p||(p=!0,u&&u(S))};return new ReadableStream({async pull(S){try{const{done:x,value:v}=await c.next();if(x){g(),S.close();return}let E=v.byteLength;if(o){let A=d+=E;o(A)}S.enqueue(new Uint8Array(v))}catch(x){throw g(x),x}},cancel(S){return g(S),c.return()}},{highWaterMark:2})},ro=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Gp=ro&&typeof ReadableStream=="function",x2=ro&&(typeof TextEncoder=="function"?(a=>r=>a.encode(r))(new TextEncoder):async a=>new Uint8Array(await new Response(a).arrayBuffer())),Yp=(a,...r)=>{try{return!!a(...r)}catch{return!1}},y2=Gp&&Yp(()=>{let a=!1;const r=new Request(Bt.origin,{body:new ReadableStream,method:"POST",get duplex(){return a=!0,"half"}}).headers.has("Content-Type");return a&&!r}),Oh=64*1024,Kc=Gp&&Yp(()=>U.isReadableStream(new Response("").body)),Ks={stream:Kc&&(a=>a.body)};ro&&(a=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!Ks[r]&&(Ks[r]=U.isFunction(a[r])?o=>o[r]():(o,u)=>{throw new De(`Response type '${r}' is not supported`,De.ERR_NOT_SUPPORT,u)})})})(new Response);const v2=async a=>{if(a==null)return 0;if(U.isBlob(a))return a.size;if(U.isSpecCompliantForm(a))return(await new Request(Bt.origin,{method:"POST",body:a}).arrayBuffer()).byteLength;if(U.isArrayBufferView(a)||U.isArrayBuffer(a))return a.byteLength;if(U.isURLSearchParams(a)&&(a=a+""),U.isString(a))return(await x2(a)).byteLength},b2=async(a,r)=>{const o=U.toFiniteNumber(a.getContentLength());return o??v2(r)},S2=ro&&(async a=>{let{url:r,method:o,data:u,signal:c,cancelToken:d,timeout:p,onDownloadProgress:g,onUploadProgress:S,responseType:x,headers:v,withCredentials:E="same-origin",fetchOptions:A}=Vp(a);x=x?(x+"").toLowerCase():"text";let F=h2([c,d&&d.toAbortSignal()],p),C;const M=F&&F.unsubscribe&&(()=>{F.unsubscribe()});let k;try{if(S&&y2&&o!=="get"&&o!=="head"&&(k=await b2(v,u))!==0){let L=new Request(r,{method:"POST",body:u,duplex:"half"}),te;if(U.isFormData(u)&&(te=L.headers.get("content-type"))&&v.setContentType(te),L.body){const[$,le]=Th(k,Qs(jh(S)));u=_h(L.body,Oh,$,le)}}U.isString(E)||(E=E?"include":"omit");const Z="credentials"in Request.prototype;C=new Request(r,{...A,signal:F,method:o.toUpperCase(),headers:v.normalize().toJSON(),body:u,duplex:"half",credentials:Z?E:void 0});let q=await fetch(C,A);const K=Kc&&(x==="stream"||x==="response");if(Kc&&(g||K&&M)){const L={};["status","statusText","headers"].forEach(Ee=>{L[Ee]=q[Ee]});const te=U.toFiniteNumber(q.headers.get("content-length")),[$,le]=g&&Th(te,Qs(jh(g),!0))||[];q=new Response(_h(q.body,Oh,$,()=>{le&&le(),M&&M()}),L)}x=x||"text";let re=await Ks[U.findKey(Ks,x)||"text"](q,a);return!K&&M&&M(),await new Promise((L,te)=>{Lp(L,te,{data:re,headers:Wt.from(q.headers),status:q.status,statusText:q.statusText,config:a,request:C})})}catch(Z){throw M&&M(),Z&&Z.name==="TypeError"&&/Load failed|fetch/i.test(Z.message)?Object.assign(new De("Network Error",De.ERR_NETWORK,a,C),{cause:Z.cause||Z}):De.from(Z,Z&&Z.code,a,C)}}),Jc={http:U3,xhr:d2,fetch:S2};U.forEach(Jc,(a,r)=>{if(a){try{Object.defineProperty(a,"name",{value:r})}catch{}Object.defineProperty(a,"adapterName",{value:r})}});const Ch=a=>`- ${a}`,w2=a=>U.isFunction(a)||a===null||a===!1,Xp={getAdapter:a=>{a=U.isArray(a)?a:[a];const{length:r}=a;let o,u;const c={};for(let d=0;d<r;d++){o=a[d];let p;if(u=o,!w2(o)&&(u=Jc[(p=String(o)).toLowerCase()],u===void 0))throw new De(`Unknown adapter '${p}'`);if(u)break;c[p||"#"+d]=u}if(!u){const d=Object.entries(c).map(([g,S])=>`adapter ${g} `+(S===!1?"is not supported by the environment":"is not available in the build"));let p=r?d.length>1?`since :
`+d.map(Ch).join(`
`):" "+Ch(d[0]):"as no adapter specified";throw new De("There is no suitable adapter to dispatch the request "+p,"ERR_NOT_SUPPORT")}return u},adapters:Jc};function Uc(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new el(null,a)}function kh(a){return Uc(a),a.headers=Wt.from(a.headers),a.data=Mc.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),Xp.getAdapter(a.adapter||xr.adapter)(a).then(function(u){return Uc(a),u.data=Mc.call(a,a.transformResponse,u),u.headers=Wt.from(u.headers),u},function(u){return Hp(u)||(Uc(a),u&&u.response&&(u.response.data=Mc.call(a,a.transformResponse,u.response),u.response.headers=Wt.from(u.response.headers))),Promise.reject(u)})}const $p="1.11.0",so={};["object","boolean","number","function","string","symbol"].forEach((a,r)=>{so[a]=function(u){return typeof u===a||"a"+(r<1?"n ":" ")+a}});const Rh={};so.transitional=function(r,o,u){function c(d,p){return"[Axios v"+$p+"] Transitional option '"+d+"'"+p+(u?". "+u:"")}return(d,p,g)=>{if(r===!1)throw new De(c(p," has been removed"+(o?" in "+o:"")),De.ERR_DEPRECATED);return o&&!Rh[p]&&(Rh[p]=!0,console.warn(c(p," has been deprecated since v"+o+" and will be removed in the near future"))),r?r(d,p,g):!0}};so.spelling=function(r){return(o,u)=>(console.warn(`${u} is likely a misspelling of ${r}`),!0)};function E2(a,r,o){if(typeof a!="object")throw new De("options must be an object",De.ERR_BAD_OPTION_VALUE);const u=Object.keys(a);let c=u.length;for(;c-- >0;){const d=u[c],p=r[d];if(p){const g=a[d],S=g===void 0||p(g,d,a);if(S!==!0)throw new De("option "+d+" must be "+S,De.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new De("Unknown option "+d,De.ERR_BAD_OPTION)}}const qs={assertOptions:E2,validators:so},Un=qs.validators;let Pa=class{constructor(r){this.defaults=r||{},this.interceptors={request:new zh,response:new zh}}async request(r,o){try{return await this._request(r,o)}catch(u){if(u instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const d=c.stack?c.stack.replace(/^.+\n/,""):"";try{u.stack?d&&!String(u.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(u.stack+=`
`+d):u.stack=d}catch{}}throw u}}_request(r,o){typeof r=="string"?(o=o||{},o.url=r):o=r||{},o=ni(this.defaults,o);const{transitional:u,paramsSerializer:c,headers:d}=o;u!==void 0&&qs.assertOptions(u,{silentJSONParsing:Un.transitional(Un.boolean),forcedJSONParsing:Un.transitional(Un.boolean),clarifyTimeoutError:Un.transitional(Un.boolean)},!1),c!=null&&(U.isFunction(c)?o.paramsSerializer={serialize:c}:qs.assertOptions(c,{encode:Un.function,serialize:Un.function},!0)),o.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?o.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:o.allowAbsoluteUrls=!0),qs.assertOptions(o,{baseUrl:Un.spelling("baseURL"),withXsrfToken:Un.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let p=d&&U.merge(d.common,d[o.method]);d&&U.forEach(["delete","get","head","post","put","patch","common"],C=>{delete d[C]}),o.headers=Wt.concat(p,d);const g=[];let S=!0;this.interceptors.request.forEach(function(M){typeof M.runWhen=="function"&&M.runWhen(o)===!1||(S=S&&M.synchronous,g.unshift(M.fulfilled,M.rejected))});const x=[];this.interceptors.response.forEach(function(M){x.push(M.fulfilled,M.rejected)});let v,E=0,A;if(!S){const C=[kh.bind(this),void 0];for(C.unshift(...g),C.push(...x),A=C.length,v=Promise.resolve(o);E<A;)v=v.then(C[E++],C[E++]);return v}A=g.length;let F=o;for(E=0;E<A;){const C=g[E++],M=g[E++];try{F=C(F)}catch(k){M.call(this,k);break}}try{v=kh.call(this,F)}catch(C){return Promise.reject(C)}for(E=0,A=x.length;E<A;)v=v.then(x[E++],x[E++]);return v}getUri(r){r=ni(this.defaults,r);const o=qp(r.baseURL,r.url,r.allowAbsoluteUrls);return Mp(o,r.params,r.paramsSerializer)}};U.forEach(["delete","get","head","options"],function(r){Pa.prototype[r]=function(o,u){return this.request(ni(u||{},{method:r,url:o,data:(u||{}).data}))}});U.forEach(["post","put","patch"],function(r){function o(u){return function(d,p,g){return this.request(ni(g||{},{method:r,headers:u?{"Content-Type":"multipart/form-data"}:{},url:d,data:p}))}}Pa.prototype[r]=o(),Pa.prototype[r+"Form"]=o(!0)});let z2=class Zp{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(d){o=d});const u=this;this.promise.then(c=>{if(!u._listeners)return;let d=u._listeners.length;for(;d-- >0;)u._listeners[d](c);u._listeners=null}),this.promise.then=c=>{let d;const p=new Promise(g=>{u.subscribe(g),d=g}).then(c);return p.cancel=function(){u.unsubscribe(d)},p},r(function(d,p,g){u.reason||(u.reason=new el(d,p,g),o(u.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const o=this._listeners.indexOf(r);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const r=new AbortController,o=u=>{r.abort(u)};return this.subscribe(o),r.signal.unsubscribe=()=>this.unsubscribe(o),r.signal}static source(){let r;return{token:new Zp(function(c){r=c}),cancel:r}}};function A2(a){return function(o){return a.apply(null,o)}}function T2(a){return U.isObject(a)&&a.isAxiosError===!0}const Fc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Fc).forEach(([a,r])=>{Fc[r]=a});function Qp(a){const r=new Pa(a),o=Ep(Pa.prototype.request,r);return U.extend(o,Pa.prototype,r,{allOwnKeys:!0}),U.extend(o,r,null,{allOwnKeys:!0}),o.create=function(c){return Qp(ni(a,c))},o}const qe=Qp(xr);qe.Axios=Pa;qe.CanceledError=el;qe.CancelToken=z2;qe.isCancel=Hp;qe.VERSION=$p;qe.toFormData=lo;qe.AxiosError=De;qe.Cancel=qe.CanceledError;qe.all=function(r){return Promise.all(r)};qe.spread=A2;qe.isAxiosError=T2;qe.mergeConfig=ni;qe.AxiosHeaders=Wt;qe.formToJSON=a=>Bp(U.isHTMLForm(a)?new FormData(a):a);qe.getAdapter=Xp.getAdapter;qe.HttpStatusCode=Fc;qe.default=qe;const{Axios:wv,AxiosError:Ev,CanceledError:zv,isCancel:Av,CancelToken:Tv,VERSION:jv,all:Dv,Cancel:_v,isAxiosError:Ov,spread:Cv,toFormData:kv,AxiosHeaders:Rv,HttpStatusCode:Nv,formToJSON:Mv,getAdapter:Uv,mergeConfig:Bv}=qe;var yr=a=>a.type==="checkbox",Wa=a=>a instanceof Date,qt=a=>a==null;const Kp=a=>typeof a=="object";var ft=a=>!qt(a)&&!Array.isArray(a)&&Kp(a)&&!Wa(a),j2=a=>ft(a)&&a.target?yr(a.target)?a.target.checked:a.target.value:a,D2=a=>a.substring(0,a.search(/\.\d+(\.|$)/))||a,_2=(a,r)=>a.has(D2(r)),O2=a=>{const r=a.constructor&&a.constructor.prototype;return ft(r)&&r.hasOwnProperty("isPrototypeOf")},ff=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function jt(a){let r;const o=Array.isArray(a),u=typeof FileList<"u"?a instanceof FileList:!1;if(a instanceof Date)r=new Date(a);else if(!(ff&&(a instanceof Blob||u))&&(o||ft(a)))if(r=o?[]:Object.create(Object.getPrototypeOf(a)),!o&&!O2(a))r=a;else for(const c in a)a.hasOwnProperty(c)&&(r[c]=jt(a[c]));else return a;return r}var oo=a=>/^\w*$/.test(a),mt=a=>a===void 0,df=a=>Array.isArray(a)?a.filter(Boolean):[],hf=a=>df(a.replace(/["|']|\]/g,"").split(/\.|\[/)),he=(a,r,o)=>{if(!r||!ft(a))return o;const u=(oo(r)?[r]:hf(r)).reduce((c,d)=>qt(c)?c:c[d],a);return mt(u)||u===a?mt(a[r])?o:a[r]:u},Bn=a=>typeof a=="boolean",nt=(a,r,o)=>{let u=-1;const c=oo(r)?[r]:hf(r),d=c.length,p=d-1;for(;++u<d;){const g=c[u];let S=o;if(u!==p){const x=a[g];S=ft(x)||Array.isArray(x)?x:isNaN(+c[u+1])?{}:[]}if(g==="__proto__"||g==="constructor"||g==="prototype")return;a[g]=S,a=a[g]}};const Nh={BLUR:"blur",FOCUS_OUT:"focusout"},An={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ia={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},C2=Dt.createContext(null);C2.displayName="HookFormContext";var k2=(a,r,o,u=!0)=>{const c={defaultValues:r._defaultValues};for(const d in a)Object.defineProperty(c,d,{get:()=>{const p=d;return r._proxyFormState[p]!==An.all&&(r._proxyFormState[p]=!u||An.all),a[p]}});return c};const R2=typeof window<"u"?Dt.useLayoutEffect:Dt.useEffect;var Ln=a=>typeof a=="string",N2=(a,r,o,u,c)=>Ln(a)?(u&&r.watch.add(a),he(o,a,c)):Array.isArray(a)?a.map(d=>(u&&r.watch.add(d),he(o,d))):(u&&(r.watchAll=!0),o),Wc=a=>qt(a)||!Kp(a);function Ca(a,r,o=new WeakSet){if(Wc(a)||Wc(r))return a===r;if(Wa(a)&&Wa(r))return a.getTime()===r.getTime();const u=Object.keys(a),c=Object.keys(r);if(u.length!==c.length)return!1;if(o.has(a)||o.has(r))return!0;o.add(a),o.add(r);for(const d of u){const p=a[d];if(!c.includes(d))return!1;if(d!=="ref"){const g=r[d];if(Wa(p)&&Wa(g)||ft(p)&&ft(g)||Array.isArray(p)&&Array.isArray(g)?!Ca(p,g,o):p!==g)return!1}}return!0}var M2=(a,r,o,u,c)=>r?{...o[a],types:{...o[a]&&o[a].types?o[a].types:{},[u]:c||!0}}:{},rr=a=>Array.isArray(a)?a:[a],Mh=()=>{let a=[];return{get observers(){return a},next:c=>{for(const d of a)d.next&&d.next(c)},subscribe:c=>(a.push(c),{unsubscribe:()=>{a=a.filter(d=>d!==c)}}),unsubscribe:()=>{a=[]}}},Kt=a=>ft(a)&&!Object.keys(a).length,pf=a=>a.type==="file",Tn=a=>typeof a=="function",Js=a=>{if(!ff)return!1;const r=a?a.ownerDocument:0;return a instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Jp=a=>a.type==="select-multiple",mf=a=>a.type==="radio",U2=a=>mf(a)||yr(a),Bc=a=>Js(a)&&a.isConnected;function B2(a,r){const o=r.slice(0,-1).length;let u=0;for(;u<o;)a=mt(a)?u++:a[r[u++]];return a}function H2(a){for(const r in a)if(a.hasOwnProperty(r)&&!mt(a[r]))return!1;return!0}function pt(a,r){const o=Array.isArray(r)?r:oo(r)?[r]:hf(r),u=o.length===1?a:B2(a,o),c=o.length-1,d=o[c];return u&&delete u[d],c!==0&&(ft(u)&&Kt(u)||Array.isArray(u)&&H2(u))&&pt(a,o.slice(0,-1)),a}var Fp=a=>{for(const r in a)if(Tn(a[r]))return!0;return!1};function Fs(a,r={}){const o=Array.isArray(a);if(ft(a)||o)for(const u in a)Array.isArray(a[u])||ft(a[u])&&!Fp(a[u])?(r[u]=Array.isArray(a[u])?[]:{},Fs(a[u],r[u])):qt(a[u])||(r[u]=!0);return r}function Wp(a,r,o){const u=Array.isArray(a);if(ft(a)||u)for(const c in a)Array.isArray(a[c])||ft(a[c])&&!Fp(a[c])?mt(r)||Wc(o[c])?o[c]=Array.isArray(a[c])?Fs(a[c],[]):{...Fs(a[c])}:Wp(a[c],qt(r)?{}:r[c],o[c]):o[c]=!Ca(a[c],r[c]);return o}var ar=(a,r)=>Wp(a,r,Fs(r));const Uh={value:!1,isValid:!1},Bh={value:!0,isValid:!0};var Ip=a=>{if(Array.isArray(a)){if(a.length>1){const r=a.filter(o=>o&&o.checked&&!o.disabled).map(o=>o.value);return{value:r,isValid:!!r.length}}return a[0].checked&&!a[0].disabled?a[0].attributes&&!mt(a[0].attributes.value)?mt(a[0].value)||a[0].value===""?Bh:{value:a[0].value,isValid:!0}:Bh:Uh}return Uh},Pp=(a,{valueAsNumber:r,valueAsDate:o,setValueAs:u})=>mt(a)?a:r?a===""?NaN:a&&+a:o&&Ln(a)?new Date(a):u?u(a):a;const Hh={isValid:!1,value:null};var em=a=>Array.isArray(a)?a.reduce((r,o)=>o&&o.checked&&!o.disabled?{isValid:!0,value:o.value}:r,Hh):Hh;function Lh(a){const r=a.ref;return pf(r)?r.files:mf(r)?em(a.refs).value:Jp(r)?[...r.selectedOptions].map(({value:o})=>o):yr(r)?Ip(a.refs).value:Pp(mt(r.value)?a.ref.value:r.value,a)}var L2=(a,r,o,u)=>{const c={};for(const d of a){const p=he(r,d);p&&nt(c,d,p._f)}return{criteriaMode:o,names:[...a],fields:c,shouldUseNativeValidation:u}},Ws=a=>a instanceof RegExp,ir=a=>mt(a)?a:Ws(a)?a.source:ft(a)?Ws(a.value)?a.value.source:a.value:a,qh=a=>({isOnSubmit:!a||a===An.onSubmit,isOnBlur:a===An.onBlur,isOnChange:a===An.onChange,isOnAll:a===An.all,isOnTouch:a===An.onTouched});const Vh="AsyncFunction";var q2=a=>!!a&&!!a.validate&&!!(Tn(a.validate)&&a.validate.constructor.name===Vh||ft(a.validate)&&Object.values(a.validate).find(r=>r.constructor.name===Vh)),V2=a=>a.mount&&(a.required||a.min||a.max||a.maxLength||a.minLength||a.pattern||a.validate),Gh=(a,r,o)=>!o&&(r.watchAll||r.watch.has(a)||[...r.watch].some(u=>a.startsWith(u)&&/^\.\w+/.test(a.slice(u.length))));const sr=(a,r,o,u)=>{for(const c of o||Object.keys(a)){const d=he(a,c);if(d){const{_f:p,...g}=d;if(p){if(p.refs&&p.refs[0]&&r(p.refs[0],c)&&!u)return!0;if(p.ref&&r(p.ref,p.name)&&!u)return!0;if(sr(g,r))break}else if(ft(g)&&sr(g,r))break}}};function Yh(a,r,o){const u=he(a,o);if(u||oo(o))return{error:u,name:o};const c=o.split(".");for(;c.length;){const d=c.join("."),p=he(r,d),g=he(a,d);if(p&&!Array.isArray(p)&&o!==d)return{name:o};if(g&&g.type)return{name:d,error:g};if(g&&g.root&&g.root.type)return{name:`${d}.root`,error:g.root};c.pop()}return{name:o}}var G2=(a,r,o,u)=>{o(a);const{name:c,...d}=a;return Kt(d)||Object.keys(d).length>=Object.keys(r).length||Object.keys(d).find(p=>r[p]===(!u||An.all))},Y2=(a,r,o)=>!a||!r||a===r||rr(a).some(u=>u&&(o?u===r:u.startsWith(r)||r.startsWith(u))),X2=(a,r,o,u,c)=>c.isOnAll?!1:!o&&c.isOnTouch?!(r||a):(o?u.isOnBlur:c.isOnBlur)?!a:(o?u.isOnChange:c.isOnChange)?a:!0,$2=(a,r)=>!df(he(a,r)).length&&pt(a,r),Z2=(a,r,o)=>{const u=rr(he(a,o));return nt(u,"root",r[o]),nt(a,o,u),a},Vs=a=>Ln(a);function Xh(a,r,o="validate"){if(Vs(a)||Array.isArray(a)&&a.every(Vs)||Bn(a)&&!a)return{type:o,message:Vs(a)?a:"",ref:r}}var Xi=a=>ft(a)&&!Ws(a)?a:{value:a,message:""},$h=async(a,r,o,u,c,d)=>{const{ref:p,refs:g,required:S,maxLength:x,minLength:v,min:E,max:A,pattern:F,validate:C,name:M,valueAsNumber:k,mount:Z}=a._f,q=he(o,M);if(!Z||r.has(M))return{};const K=g?g[0]:p,re=P=>{c&&K.reportValidity&&(K.setCustomValidity(Bn(P)?"":P||""),K.reportValidity())},L={},te=mf(p),$=yr(p),le=te||$,Ee=(k||pf(p))&&mt(p.value)&&mt(q)||Js(p)&&p.value===""||q===""||Array.isArray(q)&&!q.length,Ge=M2.bind(null,M,u,L),Re=(P,se,ye,ve=ia.maxLength,_=ia.minLength)=>{const J=P?se:ye;L[M]={type:P?ve:_,message:J,ref:p,...Ge(P?ve:_,J)}};if(d?!Array.isArray(q)||!q.length:S&&(!le&&(Ee||qt(q))||Bn(q)&&!q||$&&!Ip(g).isValid||te&&!em(g).isValid)){const{value:P,message:se}=Vs(S)?{value:!!S,message:S}:Xi(S);if(P&&(L[M]={type:ia.required,message:se,ref:K,...Ge(ia.required,se)},!u))return re(se),L}if(!Ee&&(!qt(E)||!qt(A))){let P,se;const ye=Xi(A),ve=Xi(E);if(!qt(q)&&!isNaN(q)){const _=p.valueAsNumber||q&&+q;qt(ye.value)||(P=_>ye.value),qt(ve.value)||(se=_<ve.value)}else{const _=p.valueAsDate||new Date(q),J=w=>new Date(new Date().toDateString()+" "+w),fe=p.type=="time",Se=p.type=="week";Ln(ye.value)&&q&&(P=fe?J(q)>J(ye.value):Se?q>ye.value:_>new Date(ye.value)),Ln(ve.value)&&q&&(se=fe?J(q)<J(ve.value):Se?q<ve.value:_<new Date(ve.value))}if((P||se)&&(Re(!!P,ye.message,ve.message,ia.max,ia.min),!u))return re(L[M].message),L}if((x||v)&&!Ee&&(Ln(q)||d&&Array.isArray(q))){const P=Xi(x),se=Xi(v),ye=!qt(P.value)&&q.length>+P.value,ve=!qt(se.value)&&q.length<+se.value;if((ye||ve)&&(Re(ye,P.message,se.message),!u))return re(L[M].message),L}if(F&&!Ee&&Ln(q)){const{value:P,message:se}=Xi(F);if(Ws(P)&&!q.match(P)&&(L[M]={type:ia.pattern,message:se,ref:p,...Ge(ia.pattern,se)},!u))return re(se),L}if(C){if(Tn(C)){const P=await C(q,o),se=Xh(P,K);if(se&&(L[M]={...se,...Ge(ia.validate,se.message)},!u))return re(se.message),L}else if(ft(C)){let P={};for(const se in C){if(!Kt(P)&&!u)break;const ye=Xh(await C[se](q,o),K,se);ye&&(P={...ye,...Ge(se,ye.message)},re(ye.message),u&&(L[M]=P))}if(!Kt(P)&&(L[M]={ref:K,...P},!u))return L}}return re(!0),L};const Q2={mode:An.onSubmit,reValidateMode:An.onChange,shouldFocusError:!0};function K2(a={}){let r={...Q2,...a},o={submitCount:0,isDirty:!1,isReady:!1,isLoading:Tn(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},u={},c=ft(r.defaultValues)||ft(r.values)?jt(r.defaultValues||r.values)||{}:{},d=r.shouldUnregister?{}:jt(c),p={action:!1,mount:!1,watch:!1},g={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},S,x=0;const v={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let E={...v};const A={array:Mh(),state:Mh()},F=r.criteriaMode===An.all,C=b=>j=>{clearTimeout(x),x=setTimeout(b,j)},M=async b=>{if(!r.disabled&&(v.isValid||E.isValid||b)){const j=r.resolver?Kt((await $()).errors):await Ee(u,!0);j!==o.isValid&&A.state.next({isValid:j})}},k=(b,j)=>{!r.disabled&&(v.isValidating||v.validatingFields||E.isValidating||E.validatingFields)&&((b||Array.from(g.mount)).forEach(H=>{H&&(j?nt(o.validatingFields,H,j):pt(o.validatingFields,H))}),A.state.next({validatingFields:o.validatingFields,isValidating:!Kt(o.validatingFields)}))},Z=(b,j=[],H,ie,ae=!0,ee=!0)=>{if(ie&&H&&!r.disabled){if(p.action=!0,ee&&Array.isArray(he(u,b))){const ce=H(he(u,b),ie.argA,ie.argB);ae&&nt(u,b,ce)}if(ee&&Array.isArray(he(o.errors,b))){const ce=H(he(o.errors,b),ie.argA,ie.argB);ae&&nt(o.errors,b,ce),$2(o.errors,b)}if((v.touchedFields||E.touchedFields)&&ee&&Array.isArray(he(o.touchedFields,b))){const ce=H(he(o.touchedFields,b),ie.argA,ie.argB);ae&&nt(o.touchedFields,b,ce)}(v.dirtyFields||E.dirtyFields)&&(o.dirtyFields=ar(c,d)),A.state.next({name:b,isDirty:Re(b,j),dirtyFields:o.dirtyFields,errors:o.errors,isValid:o.isValid})}else nt(d,b,j)},q=(b,j)=>{nt(o.errors,b,j),A.state.next({errors:o.errors})},K=b=>{o.errors=b,A.state.next({errors:o.errors,isValid:!1})},re=(b,j,H,ie)=>{const ae=he(u,b);if(ae){const ee=he(d,b,mt(H)?he(c,b):H);mt(ee)||ie&&ie.defaultChecked||j?nt(d,b,j?ee:Lh(ae._f)):ye(b,ee),p.mount&&M()}},L=(b,j,H,ie,ae)=>{let ee=!1,ce=!1;const Ae={name:b};if(!r.disabled){if(!H||ie){(v.isDirty||E.isDirty)&&(ce=o.isDirty,o.isDirty=Ae.isDirty=Re(),ee=ce!==Ae.isDirty);const je=Ca(he(c,b),j);ce=!!he(o.dirtyFields,b),je?pt(o.dirtyFields,b):nt(o.dirtyFields,b,!0),Ae.dirtyFields=o.dirtyFields,ee=ee||(v.dirtyFields||E.dirtyFields)&&ce!==!je}if(H){const je=he(o.touchedFields,b);je||(nt(o.touchedFields,b,H),Ae.touchedFields=o.touchedFields,ee=ee||(v.touchedFields||E.touchedFields)&&je!==H)}ee&&ae&&A.state.next(Ae)}return ee?Ae:{}},te=(b,j,H,ie)=>{const ae=he(o.errors,b),ee=(v.isValid||E.isValid)&&Bn(j)&&o.isValid!==j;if(r.delayError&&H?(S=C(()=>q(b,H)),S(r.delayError)):(clearTimeout(x),S=null,H?nt(o.errors,b,H):pt(o.errors,b)),(H?!Ca(ae,H):ae)||!Kt(ie)||ee){const ce={...ie,...ee&&Bn(j)?{isValid:j}:{},errors:o.errors,name:b};o={...o,...ce},A.state.next(ce)}},$=async b=>{k(b,!0);const j=await r.resolver(d,r.context,L2(b||g.mount,u,r.criteriaMode,r.shouldUseNativeValidation));return k(b),j},le=async b=>{const{errors:j}=await $(b);if(b)for(const H of b){const ie=he(j,H);ie?nt(o.errors,H,ie):pt(o.errors,H)}else o.errors=j;return j},Ee=async(b,j,H={valid:!0})=>{for(const ie in b){const ae=b[ie];if(ae){const{_f:ee,...ce}=ae;if(ee){const Ae=g.array.has(ee.name),je=ae._f&&q2(ae._f);je&&v.validatingFields&&k([ie],!0);const $e=await $h(ae,g.disabled,d,F,r.shouldUseNativeValidation&&!j,Ae);if(je&&v.validatingFields&&k([ie]),$e[ee.name]&&(H.valid=!1,j))break;!j&&(he($e,ee.name)?Ae?Z2(o.errors,$e,ee.name):nt(o.errors,ee.name,$e[ee.name]):pt(o.errors,ee.name))}!Kt(ce)&&await Ee(ce,j,H)}}return H.valid},Ge=()=>{for(const b of g.unMount){const j=he(u,b);j&&(j._f.refs?j._f.refs.every(H=>!Bc(H)):!Bc(j._f.ref))&&xe(b)}g.unMount=new Set},Re=(b,j)=>!r.disabled&&(b&&j&&nt(d,b,j),!Ca(w(),c)),P=(b,j,H)=>N2(b,g,{...p.mount?d:mt(j)?c:Ln(b)?{[b]:j}:j},H,j),se=b=>df(he(p.mount?d:c,b,r.shouldUnregister?he(c,b,[]):[])),ye=(b,j,H={})=>{const ie=he(u,b);let ae=j;if(ie){const ee=ie._f;ee&&(!ee.disabled&&nt(d,b,Pp(j,ee)),ae=Js(ee.ref)&&qt(j)?"":j,Jp(ee.ref)?[...ee.ref.options].forEach(ce=>ce.selected=ae.includes(ce.value)):ee.refs?yr(ee.ref)?ee.refs.forEach(ce=>{(!ce.defaultChecked||!ce.disabled)&&(Array.isArray(ae)?ce.checked=!!ae.find(Ae=>Ae===ce.value):ce.checked=ae===ce.value||!!ae)}):ee.refs.forEach(ce=>ce.checked=ce.value===ae):pf(ee.ref)?ee.ref.value="":(ee.ref.value=ae,ee.ref.type||A.state.next({name:b,values:jt(d)})))}(H.shouldDirty||H.shouldTouch)&&L(b,ae,H.shouldTouch,H.shouldDirty,!0),H.shouldValidate&&Se(b)},ve=(b,j,H)=>{for(const ie in j){if(!j.hasOwnProperty(ie))return;const ae=j[ie],ee=b+"."+ie,ce=he(u,ee);(g.array.has(b)||ft(ae)||ce&&!ce._f)&&!Wa(ae)?ve(ee,ae,H):ye(ee,ae,H)}},_=(b,j,H={})=>{const ie=he(u,b),ae=g.array.has(b),ee=jt(j);nt(d,b,ee),ae?(A.array.next({name:b,values:jt(d)}),(v.isDirty||v.dirtyFields||E.isDirty||E.dirtyFields)&&H.shouldDirty&&A.state.next({name:b,dirtyFields:ar(c,d),isDirty:Re(b,ee)})):ie&&!ie._f&&!qt(ee)?ve(b,ee,H):ye(b,ee,H),Gh(b,g)&&A.state.next({...o,name:b}),A.state.next({name:p.mount?b:void 0,values:jt(d)})},J=async b=>{p.mount=!0;const j=b.target;let H=j.name,ie=!0;const ae=he(u,H),ee=je=>{ie=Number.isNaN(je)||Wa(je)&&isNaN(je.getTime())||Ca(je,he(d,H,je))},ce=qh(r.mode),Ae=qh(r.reValidateMode);if(ae){let je,$e;const Vt=j.type?Lh(ae._f):j2(b),Ht=b.type===Nh.BLUR||b.type===Nh.FOCUS_OUT,ra=!V2(ae._f)&&!r.resolver&&!he(o.errors,H)&&!ae._f.deps||X2(Ht,he(o.touchedFields,H),o.isSubmitted,Ae,ce),St=Gh(H,g,Ht);nt(d,H,Vt),Ht?(!j||!j.readOnly)&&(ae._f.onBlur&&ae._f.onBlur(b),S&&S(0)):ae._f.onChange&&ae._f.onChange(b);const Sn=L(H,Vt,Ht),Ct=!Kt(Sn)||St;if(!Ht&&A.state.next({name:H,type:b.type,values:jt(d)}),ra)return(v.isValid||E.isValid)&&(r.mode==="onBlur"?Ht&&M():Ht||M()),Ct&&A.state.next({name:H,...St?{}:Sn});if(!Ht&&St&&A.state.next({...o}),r.resolver){const{errors:wt}=await $([H]);if(ee(Vt),ie){const qn=Yh(o.errors,u,H),ii=Yh(wt,u,qn.name||H);je=ii.error,H=ii.name,$e=Kt(wt)}}else k([H],!0),je=(await $h(ae,g.disabled,d,F,r.shouldUseNativeValidation))[H],k([H]),ee(Vt),ie&&(je?$e=!1:(v.isValid||E.isValid)&&($e=await Ee(u,!0)));ie&&(ae._f.deps&&Se(ae._f.deps),te(H,$e,je,Sn))}},fe=(b,j)=>{if(he(o.errors,j)&&b.focus)return b.focus(),1},Se=async(b,j={})=>{let H,ie;const ae=rr(b);if(r.resolver){const ee=await le(mt(b)?b:ae);H=Kt(ee),ie=b?!ae.some(ce=>he(ee,ce)):H}else b?(ie=(await Promise.all(ae.map(async ee=>{const ce=he(u,ee);return await Ee(ce&&ce._f?{[ee]:ce}:ce)}))).every(Boolean),!(!ie&&!o.isValid)&&M()):ie=H=await Ee(u);return A.state.next({...!Ln(b)||(v.isValid||E.isValid)&&H!==o.isValid?{}:{name:b},...r.resolver||!b?{isValid:H}:{},errors:o.errors}),j.shouldFocus&&!ie&&sr(u,fe,b?ae:g.mount),ie},w=b=>{const j={...p.mount?d:c};return mt(b)?j:Ln(b)?he(j,b):b.map(H=>he(j,H))},V=(b,j)=>({invalid:!!he((j||o).errors,b),isDirty:!!he((j||o).dirtyFields,b),error:he((j||o).errors,b),isValidating:!!he(o.validatingFields,b),isTouched:!!he((j||o).touchedFields,b)}),ne=b=>{b&&rr(b).forEach(j=>pt(o.errors,j)),A.state.next({errors:b?o.errors:{}})},B=(b,j,H)=>{const ie=(he(u,b,{_f:{}})._f||{}).ref,ae=he(o.errors,b)||{},{ref:ee,message:ce,type:Ae,...je}=ae;nt(o.errors,b,{...je,...j,ref:ie}),A.state.next({name:b,errors:o.errors,isValid:!1}),H&&H.shouldFocus&&ie&&ie.focus&&ie.focus()},W=(b,j)=>Tn(b)?A.state.subscribe({next:H=>"values"in H&&b(P(void 0,j),H)}):P(b,j,!0),oe=b=>A.state.subscribe({next:j=>{Y2(b.name,j.name,b.exact)&&G2(j,b.formState||v,it,b.reRenderRoot)&&b.callback({values:{...d},...o,...j,defaultValues:c})}}).unsubscribe,ue=b=>(p.mount=!0,E={...E,...b.formState},oe({...b,formState:E})),xe=(b,j={})=>{for(const H of b?rr(b):g.mount)g.mount.delete(H),g.array.delete(H),j.keepValue||(pt(u,H),pt(d,H)),!j.keepError&&pt(o.errors,H),!j.keepDirty&&pt(o.dirtyFields,H),!j.keepTouched&&pt(o.touchedFields,H),!j.keepIsValidating&&pt(o.validatingFields,H),!r.shouldUnregister&&!j.keepDefaultValue&&pt(c,H);A.state.next({values:jt(d)}),A.state.next({...o,...j.keepDirty?{isDirty:Re()}:{}}),!j.keepIsValid&&M()},me=({disabled:b,name:j})=>{(Bn(b)&&p.mount||b||g.disabled.has(j))&&(b?g.disabled.add(j):g.disabled.delete(j))},Ce=(b,j={})=>{let H=he(u,b);const ie=Bn(j.disabled)||Bn(r.disabled);return nt(u,b,{...H||{},_f:{...H&&H._f?H._f:{ref:{name:b}},name:b,mount:!0,...j}}),g.mount.add(b),H?me({disabled:Bn(j.disabled)?j.disabled:r.disabled,name:b}):re(b,!0,j.value),{...ie?{disabled:j.disabled||r.disabled}:{},...r.progressive?{required:!!j.required,min:ir(j.min),max:ir(j.max),minLength:ir(j.minLength),maxLength:ir(j.maxLength),pattern:ir(j.pattern)}:{},name:b,onChange:J,onBlur:J,ref:ae=>{if(ae){Ce(b,j),H=he(u,b);const ee=mt(ae.value)&&ae.querySelectorAll&&ae.querySelectorAll("input,select,textarea")[0]||ae,ce=U2(ee),Ae=H._f.refs||[];if(ce?Ae.find(je=>je===ee):ee===H._f.ref)return;nt(u,b,{_f:{...H._f,...ce?{refs:[...Ae.filter(Bc),ee,...Array.isArray(he(c,b))?[{}]:[]],ref:{type:ee.type,name:b}}:{ref:ee}}}),re(b,!1,void 0,ee)}else H=he(u,b,{}),H._f&&(H._f.mount=!1),(r.shouldUnregister||j.shouldUnregister)&&!(_2(g.array,b)&&p.action)&&g.unMount.add(b)}}},at=()=>r.shouldFocusError&&sr(u,fe,g.mount),bt=b=>{Bn(b)&&(A.state.next({disabled:b}),sr(u,(j,H)=>{const ie=he(u,H);ie&&(j.disabled=ie._f.disabled||b,Array.isArray(ie._f.refs)&&ie._f.refs.forEach(ae=>{ae.disabled=ie._f.disabled||b}))},0,!1))},pe=(b,j)=>async H=>{let ie;H&&(H.preventDefault&&H.preventDefault(),H.persist&&H.persist());let ae=jt(d);if(A.state.next({isSubmitting:!0}),r.resolver){const{errors:ee,values:ce}=await $();o.errors=ee,ae=jt(ce)}else await Ee(u);if(g.disabled.size)for(const ee of g.disabled)pt(ae,ee);if(pt(o.errors,"root"),Kt(o.errors)){A.state.next({errors:{}});try{await b(ae,H)}catch(ee){ie=ee}}else j&&await j({...o.errors},H),at(),setTimeout(at);if(A.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Kt(o.errors)&&!ie,submitCount:o.submitCount+1,errors:o.errors}),ie)throw ie},be=(b,j={})=>{he(u,b)&&(mt(j.defaultValue)?_(b,jt(he(c,b))):(_(b,j.defaultValue),nt(c,b,jt(j.defaultValue))),j.keepTouched||pt(o.touchedFields,b),j.keepDirty||(pt(o.dirtyFields,b),o.isDirty=j.defaultValue?Re(b,jt(he(c,b))):Re()),j.keepError||(pt(o.errors,b),v.isValid&&M()),A.state.next({...o}))},Be=(b,j={})=>{const H=b?jt(b):c,ie=jt(H),ae=Kt(b),ee=ae?c:ie;if(j.keepDefaultValues||(c=H),!j.keepValues){if(j.keepDirtyValues){const ce=new Set([...g.mount,...Object.keys(ar(c,d))]);for(const Ae of Array.from(ce))he(o.dirtyFields,Ae)?nt(ee,Ae,he(d,Ae)):_(Ae,he(ee,Ae))}else{if(ff&&mt(b))for(const ce of g.mount){const Ae=he(u,ce);if(Ae&&Ae._f){const je=Array.isArray(Ae._f.refs)?Ae._f.refs[0]:Ae._f.ref;if(Js(je)){const $e=je.closest("form");if($e){$e.reset();break}}}}if(j.keepFieldsRef)for(const ce of g.mount)_(ce,he(ee,ce));else u={}}d=r.shouldUnregister?j.keepDefaultValues?jt(c):{}:jt(ee),A.array.next({values:{...ee}}),A.state.next({values:{...ee}})}g={mount:j.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},p.mount=!v.isValid||!!j.keepIsValid||!!j.keepDirtyValues,p.watch=!!r.shouldUnregister,A.state.next({submitCount:j.keepSubmitCount?o.submitCount:0,isDirty:ae?!1:j.keepDirty?o.isDirty:!!(j.keepDefaultValues&&!Ca(b,c)),isSubmitted:j.keepIsSubmitted?o.isSubmitted:!1,dirtyFields:ae?{}:j.keepDirtyValues?j.keepDefaultValues&&d?ar(c,d):o.dirtyFields:j.keepDefaultValues&&b?ar(c,b):j.keepDirty?o.dirtyFields:{},touchedFields:j.keepTouched?o.touchedFields:{},errors:j.keepErrors?o.errors:{},isSubmitSuccessful:j.keepIsSubmitSuccessful?o.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:c})},Le=(b,j)=>Be(Tn(b)?b(d):b,j),xt=(b,j={})=>{const H=he(u,b),ie=H&&H._f;if(ie){const ae=ie.refs?ie.refs[0]:ie.ref;ae.focus&&(ae.focus(),j.shouldSelect&&Tn(ae.select)&&ae.select())}},it=b=>{o={...o,...b}},Pt={control:{register:Ce,unregister:xe,getFieldState:V,handleSubmit:pe,setError:B,_subscribe:oe,_runSchema:$,_focusError:at,_getWatch:P,_getDirty:Re,_setValid:M,_setFieldArray:Z,_setDisabledField:me,_setErrors:K,_getFieldArray:se,_reset:Be,_resetDefaultValues:()=>Tn(r.defaultValues)&&r.defaultValues().then(b=>{Le(b,r.resetOptions),A.state.next({isLoading:!1})}),_removeUnmounted:Ge,_disableForm:bt,_subjects:A,_proxyFormState:v,get _fields(){return u},get _formValues(){return d},get _state(){return p},set _state(b){p=b},get _defaultValues(){return c},get _names(){return g},set _names(b){g=b},get _formState(){return o},get _options(){return r},set _options(b){r={...r,...b}}},subscribe:ue,trigger:Se,register:Ce,handleSubmit:pe,watch:W,setValue:_,getValues:w,reset:Le,resetField:be,clearErrors:ne,unregister:xe,setError:B,setFocus:xt,getFieldState:V};return{...Pt,formControl:Pt}}function vr(a={}){const r=Dt.useRef(void 0),o=Dt.useRef(void 0),[u,c]=Dt.useState({isDirty:!1,isValidating:!1,isLoading:Tn(a.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:a.errors||{},disabled:a.disabled||!1,isReady:!1,defaultValues:Tn(a.defaultValues)?void 0:a.defaultValues});if(!r.current)if(a.formControl)r.current={...a.formControl,formState:u},a.defaultValues&&!Tn(a.defaultValues)&&a.formControl.reset(a.defaultValues,a.resetOptions);else{const{formControl:p,...g}=K2(a);r.current={...g,formState:u}}const d=r.current.control;return d._options=a,R2(()=>{const p=d._subscribe({formState:d._proxyFormState,callback:()=>c({...d._formState}),reRenderRoot:!0});return c(g=>({...g,isReady:!0})),d._formState.isReady=!0,p},[d]),Dt.useEffect(()=>d._disableForm(a.disabled),[d,a.disabled]),Dt.useEffect(()=>{a.mode&&(d._options.mode=a.mode),a.reValidateMode&&(d._options.reValidateMode=a.reValidateMode)},[d,a.mode,a.reValidateMode]),Dt.useEffect(()=>{a.errors&&(d._setErrors(a.errors),d._focusError())},[d,a.errors]),Dt.useEffect(()=>{a.shouldUnregister&&d._subjects.state.next({values:d._getWatch()})},[d,a.shouldUnregister]),Dt.useEffect(()=>{if(d._proxyFormState.isDirty){const p=d._getDirty();p!==u.isDirty&&d._subjects.state.next({isDirty:p})}},[d,u.isDirty]),Dt.useEffect(()=>{a.values&&!Ca(a.values,o.current)?(d._reset(a.values,{keepFieldsRef:!0,...d._options.resetOptions}),o.current=a.values,c(p=>({...p}))):d._resetDefaultValues()},[d,a.values]),Dt.useEffect(()=>{d._state.mount||(d._setValid(),d._state.mount=!0),d._state.watch&&(d._state.watch=!1,d._subjects.state.next({...d._formState})),d._removeUnmounted()}),r.current.formState=k2(u,d),r.current}var Jt=function(){return Jt=Object.assign||function(r){for(var o,u=1,c=arguments.length;u<c;u++){o=arguments[u];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(r[d]=o[d])}return r},Jt.apply(this,arguments)};function cr(a,r,o){if(o||arguments.length===2)for(var u=0,c=r.length,d;u<c;u++)(d||!(u in r))&&(d||(d=Array.prototype.slice.call(r,0,u)),d[u]=r[u]);return a.concat(d||Array.prototype.slice.call(r))}var et="-ms-",or="-moz-",Xe="-webkit-",tm="comm",uo="rule",gf="decl",J2="@import",nm="@keyframes",F2="@layer",am=Math.abs,xf=String.fromCharCode,Ic=Object.assign;function W2(a,r){return _t(a,0)^45?(((r<<2^_t(a,0))<<2^_t(a,1))<<2^_t(a,2))<<2^_t(a,3):0}function im(a){return a.trim()}function la(a,r){return(a=r.exec(a))?a[0]:a}function Oe(a,r,o){return a.replace(r,o)}function Gs(a,r,o){return a.indexOf(r,o)}function _t(a,r){return a.charCodeAt(r)|0}function Qi(a,r,o){return a.slice(r,o)}function Hn(a){return a.length}function lm(a){return a.length}function lr(a,r){return r.push(a),a}function I2(a,r){return a.map(r).join("")}function Zh(a,r){return a.filter(function(o){return!la(o,r)})}var co=1,Ki=1,rm=0,bn=0,gt=0,tl="";function fo(a,r,o,u,c,d,p,g){return{value:a,root:r,parent:o,type:u,props:c,children:d,line:co,column:Ki,length:p,return:"",siblings:g}}function Oa(a,r){return Ic(fo("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},r)}function $i(a){for(;a.root;)a=Oa(a.root,{children:[a]});lr(a,a.siblings)}function P2(){return gt}function e5(){return gt=bn>0?_t(tl,--bn):0,Ki--,gt===10&&(Ki=1,co--),gt}function jn(){return gt=bn<rm?_t(tl,bn++):0,Ki++,gt===10&&(Ki=1,co++),gt}function ei(){return _t(tl,bn)}function Ys(){return bn}function ho(a,r){return Qi(tl,a,r)}function Pc(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function t5(a){return co=Ki=1,rm=Hn(tl=a),bn=0,[]}function n5(a){return tl="",a}function Hc(a){return im(ho(bn-1,ef(a===91?a+2:a===40?a+1:a)))}function a5(a){for(;(gt=ei())&&gt<33;)jn();return Pc(a)>2||Pc(gt)>3?"":" "}function i5(a,r){for(;--r&&jn()&&!(gt<48||gt>102||gt>57&&gt<65||gt>70&&gt<97););return ho(a,Ys()+(r<6&&ei()==32&&jn()==32))}function ef(a){for(;jn();)switch(gt){case a:return bn;case 34:case 39:a!==34&&a!==39&&ef(gt);break;case 40:a===41&&ef(a);break;case 92:jn();break}return bn}function l5(a,r){for(;jn()&&a+gt!==57;)if(a+gt===84&&ei()===47)break;return"/*"+ho(r,bn-1)+"*"+xf(a===47?a:jn())}function r5(a){for(;!Pc(ei());)jn();return ho(a,bn)}function s5(a){return n5(Xs("",null,null,null,[""],a=t5(a),0,[0],a))}function Xs(a,r,o,u,c,d,p,g,S){for(var x=0,v=0,E=p,A=0,F=0,C=0,M=1,k=1,Z=1,q=0,K="",re=c,L=d,te=u,$=K;k;)switch(C=q,q=jn()){case 40:if(C!=108&&_t($,E-1)==58){Gs($+=Oe(Hc(q),"&","&\f"),"&\f",am(x?g[x-1]:0))!=-1&&(Z=-1);break}case 34:case 39:case 91:$+=Hc(q);break;case 9:case 10:case 13:case 32:$+=a5(C);break;case 92:$+=i5(Ys()-1,7);continue;case 47:switch(ei()){case 42:case 47:lr(o5(l5(jn(),Ys()),r,o,S),S);break;default:$+="/"}break;case 123*M:g[x++]=Hn($)*Z;case 125*M:case 59:case 0:switch(q){case 0:case 125:k=0;case 59+v:Z==-1&&($=Oe($,/\f/g,"")),F>0&&Hn($)-E&&lr(F>32?Kh($+";",u,o,E-1,S):Kh(Oe($," ","")+";",u,o,E-2,S),S);break;case 59:$+=";";default:if(lr(te=Qh($,r,o,x,v,c,g,K,re=[],L=[],E,d),d),q===123)if(v===0)Xs($,r,te,te,re,d,E,g,L);else switch(A===99&&_t($,3)===110?100:A){case 100:case 108:case 109:case 115:Xs(a,te,te,u&&lr(Qh(a,te,te,0,0,c,g,K,c,re=[],E,L),L),c,L,E,g,u?re:L);break;default:Xs($,te,te,te,[""],L,0,g,L)}}x=v=F=0,M=Z=1,K=$="",E=p;break;case 58:E=1+Hn($),F=C;default:if(M<1){if(q==123)--M;else if(q==125&&M++==0&&e5()==125)continue}switch($+=xf(q),q*M){case 38:Z=v>0?1:($+="\f",-1);break;case 44:g[x++]=(Hn($)-1)*Z,Z=1;break;case 64:ei()===45&&($+=Hc(jn())),A=ei(),v=E=Hn(K=$+=r5(Ys())),q++;break;case 45:C===45&&Hn($)==2&&(M=0)}}return d}function Qh(a,r,o,u,c,d,p,g,S,x,v,E){for(var A=c-1,F=c===0?d:[""],C=lm(F),M=0,k=0,Z=0;M<u;++M)for(var q=0,K=Qi(a,A+1,A=am(k=p[M])),re=a;q<C;++q)(re=im(k>0?F[q]+" "+K:Oe(K,/&\f/g,F[q])))&&(S[Z++]=re);return fo(a,r,o,c===0?uo:g,S,x,v,E)}function o5(a,r,o,u){return fo(a,r,o,tm,xf(P2()),Qi(a,2,-2),0,u)}function Kh(a,r,o,u,c){return fo(a,r,o,gf,Qi(a,0,u),Qi(a,u+1,-1),u,c)}function sm(a,r,o){switch(W2(a,r)){case 5103:return Xe+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Xe+a+a;case 4789:return or+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Xe+a+or+a+et+a+a;case 5936:switch(_t(a,r+11)){case 114:return Xe+a+et+Oe(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Xe+a+et+Oe(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Xe+a+et+Oe(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Xe+a+et+a+a;case 6165:return Xe+a+et+"flex-"+a+a;case 5187:return Xe+a+Oe(a,/(\w+).+(:[^]+)/,Xe+"box-$1$2"+et+"flex-$1$2")+a;case 5443:return Xe+a+et+"flex-item-"+Oe(a,/flex-|-self/g,"")+(la(a,/flex-|baseline/)?"":et+"grid-row-"+Oe(a,/flex-|-self/g,""))+a;case 4675:return Xe+a+et+"flex-line-pack"+Oe(a,/align-content|flex-|-self/g,"")+a;case 5548:return Xe+a+et+Oe(a,"shrink","negative")+a;case 5292:return Xe+a+et+Oe(a,"basis","preferred-size")+a;case 6060:return Xe+"box-"+Oe(a,"-grow","")+Xe+a+et+Oe(a,"grow","positive")+a;case 4554:return Xe+Oe(a,/([^-])(transform)/g,"$1"+Xe+"$2")+a;case 6187:return Oe(Oe(Oe(a,/(zoom-|grab)/,Xe+"$1"),/(image-set)/,Xe+"$1"),a,"")+a;case 5495:case 3959:return Oe(a,/(image-set\([^]*)/,Xe+"$1$`$1");case 4968:return Oe(Oe(a,/(.+:)(flex-)?(.*)/,Xe+"box-pack:$3"+et+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Xe+a+a;case 4200:if(!la(a,/flex-|baseline/))return et+"grid-column-align"+Qi(a,r)+a;break;case 2592:case 3360:return et+Oe(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(u,c){return r=c,la(u.props,/grid-\w+-end/)})?~Gs(a+(o=o[r].value),"span",0)?a:et+Oe(a,"-start","")+a+et+"grid-row-span:"+(~Gs(o,"span",0)?la(o,/\d+/):+la(o,/\d+/)-+la(a,/\d+/))+";":et+Oe(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(u){return la(u.props,/grid-\w+-start/)})?a:et+Oe(Oe(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return Oe(a,/(.+)-inline(.+)/,Xe+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Hn(a)-1-r>6)switch(_t(a,r+1)){case 109:if(_t(a,r+4)!==45)break;case 102:return Oe(a,/(.+:)(.+)-([^]+)/,"$1"+Xe+"$2-$3$1"+or+(_t(a,r+3)==108?"$3":"$2-$3"))+a;case 115:return~Gs(a,"stretch",0)?sm(Oe(a,"stretch","fill-available"),r,o)+a:a}break;case 5152:case 5920:return Oe(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,c,d,p,g,S,x){return et+c+":"+d+x+(p?et+c+"-span:"+(g?S:+S-+d)+x:"")+a});case 4949:if(_t(a,r+6)===121)return Oe(a,":",":"+Xe)+a;break;case 6444:switch(_t(a,_t(a,14)===45?18:11)){case 120:return Oe(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Xe+(_t(a,14)===45?"inline-":"")+"box$3$1"+Xe+"$2$3$1"+et+"$2box$3")+a;case 100:return Oe(a,":",":"+et)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(a,"scroll-","scroll-snap-")+a}return a}function Is(a,r){for(var o="",u=0;u<a.length;u++)o+=r(a[u],u,a,r)||"";return o}function u5(a,r,o,u){switch(a.type){case F2:if(a.children.length)break;case J2:case gf:return a.return=a.return||a.value;case tm:return"";case nm:return a.return=a.value+"{"+Is(a.children,u)+"}";case uo:if(!Hn(a.value=a.props.join(",")))return""}return Hn(o=Is(a.children,u))?a.return=a.value+"{"+o+"}":""}function c5(a){var r=lm(a);return function(o,u,c,d){for(var p="",g=0;g<r;g++)p+=a[g](o,u,c,d)||"";return p}}function f5(a){return function(r){r.root||(r=r.return)&&a(r)}}function d5(a,r,o,u){if(a.length>-1&&!a.return)switch(a.type){case gf:a.return=sm(a.value,a.length,o);return;case nm:return Is([Oa(a,{value:Oe(a.value,"@","@"+Xe)})],u);case uo:if(a.length)return I2(o=a.props,function(c){switch(la(c,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$i(Oa(a,{props:[Oe(c,/:(read-\w+)/,":"+or+"$1")]})),$i(Oa(a,{props:[c]})),Ic(a,{props:Zh(o,u)});break;case"::placeholder":$i(Oa(a,{props:[Oe(c,/:(plac\w+)/,":"+Xe+"input-$1")]})),$i(Oa(a,{props:[Oe(c,/:(plac\w+)/,":"+or+"$1")]})),$i(Oa(a,{props:[Oe(c,/:(plac\w+)/,et+"input-$1")]})),$i(Oa(a,{props:[c]})),Ic(a,{props:Zh(o,u)});break}return""})}}var h5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},on={},Ji=typeof process<"u"&&on!==void 0&&(on.REACT_APP_SC_ATTR||on.SC_ATTR)||"data-styled",om="active",um="data-styled-version",po="6.1.19",yf=`/*!sc*/
`,Ps=typeof window<"u"&&typeof document<"u",p5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&on!==void 0&&on.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&on.REACT_APP_SC_DISABLE_SPEEDY!==""?on.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&on.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&on!==void 0&&on.SC_DISABLE_SPEEDY!==void 0&&on.SC_DISABLE_SPEEDY!==""&&on.SC_DISABLE_SPEEDY!=="false"&&on.SC_DISABLE_SPEEDY),mo=Object.freeze([]),Fi=Object.freeze({});function m5(a,r,o){return o===void 0&&(o=Fi),a.theme!==o.theme&&a.theme||r||o.theme}var cm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),g5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,x5=/(^-|-$)/g;function Jh(a){return a.replace(g5,"-").replace(x5,"")}var y5=/(a)(d)/gi,Us=52,Fh=function(a){return String.fromCharCode(a+(a>25?39:97))};function tf(a){var r,o="";for(r=Math.abs(a);r>Us;r=r/Us|0)o=Fh(r%Us)+o;return(Fh(r%Us)+o).replace(y5,"$1-$2")}var Lc,fm=5381,Zi=function(a,r){for(var o=r.length;o;)a=33*a^r.charCodeAt(--o);return a},dm=function(a){return Zi(fm,a)};function hm(a){return tf(dm(a)>>>0)}function v5(a){return a.displayName||a.name||"Component"}function qc(a){return typeof a=="string"&&!0}var pm=typeof Symbol=="function"&&Symbol.for,mm=pm?Symbol.for("react.memo"):60115,b5=pm?Symbol.for("react.forward_ref"):60112,S5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},w5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},E5=((Lc={})[b5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lc[mm]=gm,Lc);function Wh(a){return("type"in(r=a)&&r.type.$$typeof)===mm?gm:"$$typeof"in a?E5[a.$$typeof]:S5;var r}var z5=Object.defineProperty,A5=Object.getOwnPropertyNames,Ih=Object.getOwnPropertySymbols,T5=Object.getOwnPropertyDescriptor,j5=Object.getPrototypeOf,Ph=Object.prototype;function xm(a,r,o){if(typeof r!="string"){if(Ph){var u=j5(r);u&&u!==Ph&&xm(a,u,o)}var c=A5(r);Ih&&(c=c.concat(Ih(r)));for(var d=Wh(a),p=Wh(r),g=0;g<c.length;++g){var S=c[g];if(!(S in w5||o&&o[S]||p&&S in p||d&&S in d)){var x=T5(r,S);try{z5(a,S,x)}catch{}}}}return a}function Wi(a){return typeof a=="function"}function vf(a){return typeof a=="object"&&"styledComponentId"in a}function Ia(a,r){return a&&r?"".concat(a," ").concat(r):a||r||""}function nf(a,r){if(a.length===0)return"";for(var o=a[0],u=1;u<a.length;u++)o+=a[u];return o}function fr(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function af(a,r,o){if(o===void 0&&(o=!1),!o&&!fr(a)&&!Array.isArray(a))return r;if(Array.isArray(r))for(var u=0;u<r.length;u++)a[u]=af(a[u],r[u]);else if(fr(r))for(var u in r)a[u]=af(a[u],r[u]);return a}function bf(a,r){Object.defineProperty(a,"toString",{value:r})}function br(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var D5=function(){function a(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return a.prototype.indexOfGroup=function(r){for(var o=0,u=0;u<r;u++)o+=this.groupSizes[u];return o},a.prototype.insertRules=function(r,o){if(r>=this.groupSizes.length){for(var u=this.groupSizes,c=u.length,d=c;r>=d;)if((d<<=1)<0)throw br(16,"".concat(r));this.groupSizes=new Uint32Array(d),this.groupSizes.set(u),this.length=d;for(var p=c;p<d;p++)this.groupSizes[p]=0}for(var g=this.indexOfGroup(r+1),S=(p=0,o.length);p<S;p++)this.tag.insertRule(g,o[p])&&(this.groupSizes[r]++,g++)},a.prototype.clearGroup=function(r){if(r<this.length){var o=this.groupSizes[r],u=this.indexOfGroup(r),c=u+o;this.groupSizes[r]=0;for(var d=u;d<c;d++)this.tag.deleteRule(u)}},a.prototype.getGroup=function(r){var o="";if(r>=this.length||this.groupSizes[r]===0)return o;for(var u=this.groupSizes[r],c=this.indexOfGroup(r),d=c+u,p=c;p<d;p++)o+="".concat(this.tag.getRule(p)).concat(yf);return o},a}(),$s=new Map,eo=new Map,Zs=1,Bs=function(a){if($s.has(a))return $s.get(a);for(;eo.has(Zs);)Zs++;var r=Zs++;return $s.set(a,r),eo.set(r,a),r},_5=function(a,r){Zs=r+1,$s.set(a,r),eo.set(r,a)},O5="style[".concat(Ji,"][").concat(um,'="').concat(po,'"]'),C5=new RegExp("^".concat(Ji,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),k5=function(a,r,o){for(var u,c=o.split(","),d=0,p=c.length;d<p;d++)(u=c[d])&&a.registerName(r,u)},R5=function(a,r){for(var o,u=((o=r.textContent)!==null&&o!==void 0?o:"").split(yf),c=[],d=0,p=u.length;d<p;d++){var g=u[d].trim();if(g){var S=g.match(C5);if(S){var x=0|parseInt(S[1],10),v=S[2];x!==0&&(_5(v,x),k5(a,v,S[3]),a.getTag().insertRules(x,c)),c.length=0}else c.push(g)}}},ep=function(a){for(var r=document.querySelectorAll(O5),o=0,u=r.length;o<u;o++){var c=r[o];c&&c.getAttribute(Ji)!==om&&(R5(a,c),c.parentNode&&c.parentNode.removeChild(c))}};function N5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ym=function(a){var r=document.head,o=a||r,u=document.createElement("style"),c=function(g){var S=Array.from(g.querySelectorAll("style[".concat(Ji,"]")));return S[S.length-1]}(o),d=c!==void 0?c.nextSibling:null;u.setAttribute(Ji,om),u.setAttribute(um,po);var p=N5();return p&&u.setAttribute("nonce",p),o.insertBefore(u,d),u},M5=function(){function a(r){this.element=ym(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var u=document.styleSheets,c=0,d=u.length;c<d;c++){var p=u[c];if(p.ownerNode===o)return p}throw br(17)}(this.element),this.length=0}return a.prototype.insertRule=function(r,o){try{return this.sheet.insertRule(o,r),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},a.prototype.getRule=function(r){var o=this.sheet.cssRules[r];return o&&o.cssText?o.cssText:""},a}(),U5=function(){function a(r){this.element=ym(r),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(r,o){if(r<=this.length&&r>=0){var u=document.createTextNode(o);return this.element.insertBefore(u,this.nodes[r]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},a.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},a}(),B5=function(){function a(r){this.rules=[],this.length=0}return a.prototype.insertRule=function(r,o){return r<=this.length&&(this.rules.splice(r,0,o),this.length++,!0)},a.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},a.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},a}(),tp=Ps,H5={isServer:!Ps,useCSSOMInjection:!p5},vm=function(){function a(r,o,u){r===void 0&&(r=Fi),o===void 0&&(o={});var c=this;this.options=Jt(Jt({},H5),r),this.gs=o,this.names=new Map(u),this.server=!!r.isServer,!this.server&&Ps&&tp&&(tp=!1,ep(this)),bf(this,function(){return function(d){for(var p=d.getTag(),g=p.length,S="",x=function(E){var A=function(Z){return eo.get(Z)}(E);if(A===void 0)return"continue";var F=d.names.get(A),C=p.getGroup(E);if(F===void 0||!F.size||C.length===0)return"continue";var M="".concat(Ji,".g").concat(E,'[id="').concat(A,'"]'),k="";F!==void 0&&F.forEach(function(Z){Z.length>0&&(k+="".concat(Z,","))}),S+="".concat(C).concat(M,'{content:"').concat(k,'"}').concat(yf)},v=0;v<g;v++)x(v);return S}(c)})}return a.registerId=function(r){return Bs(r)},a.prototype.rehydrate=function(){!this.server&&Ps&&ep(this)},a.prototype.reconstructWithOptions=function(r,o){return o===void 0&&(o=!0),new a(Jt(Jt({},this.options),r),this.gs,o&&this.names||void 0)},a.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(r=function(o){var u=o.useCSSOMInjection,c=o.target;return o.isServer?new B5(c):u?new M5(c):new U5(c)}(this.options),new D5(r)));var r},a.prototype.hasNameForId=function(r,o){return this.names.has(r)&&this.names.get(r).has(o)},a.prototype.registerName=function(r,o){if(Bs(r),this.names.has(r))this.names.get(r).add(o);else{var u=new Set;u.add(o),this.names.set(r,u)}},a.prototype.insertRules=function(r,o,u){this.registerName(r,o),this.getTag().insertRules(Bs(r),u)},a.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},a.prototype.clearRules=function(r){this.getTag().clearGroup(Bs(r)),this.clearNames(r)},a.prototype.clearTag=function(){this.tag=void 0},a}(),L5=/&/g,q5=/^\s*\/\/.*$/gm;function bm(a,r){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(r," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(r," ")),o.props=o.props.map(function(u){return"".concat(r," ").concat(u)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=bm(o.children,r)),o})}function V5(a){var r,o,u,c=Fi,d=c.options,p=d===void 0?Fi:d,g=c.plugins,S=g===void 0?mo:g,x=function(A,F,C){return C.startsWith(o)&&C.endsWith(o)&&C.replaceAll(o,"").length>0?".".concat(r):A},v=S.slice();v.push(function(A){A.type===uo&&A.value.includes("&")&&(A.props[0]=A.props[0].replace(L5,o).replace(u,x))}),p.prefix&&v.push(d5),v.push(u5);var E=function(A,F,C,M){F===void 0&&(F=""),C===void 0&&(C=""),M===void 0&&(M="&"),r=M,o=F,u=new RegExp("\\".concat(o,"\\b"),"g");var k=A.replace(q5,""),Z=s5(C||F?"".concat(C," ").concat(F," { ").concat(k," }"):k);p.namespace&&(Z=bm(Z,p.namespace));var q=[];return Is(Z,c5(v.concat(f5(function(K){return q.push(K)})))),q};return E.hash=S.length?S.reduce(function(A,F){return F.name||br(15),Zi(A,F.name)},fm).toString():"",E}var G5=new vm,lf=V5(),Sm=Dt.createContext({shouldForwardProp:void 0,styleSheet:G5,stylis:lf});Sm.Consumer;Dt.createContext(void 0);function np(){return Y.useContext(Sm)}var wm=function(){function a(r,o){var u=this;this.inject=function(c,d){d===void 0&&(d=lf);var p=u.name+d.hash;c.hasNameForId(u.id,p)||c.insertRules(u.id,p,d(u.rules,p,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=o,bf(this,function(){throw br(12,String(u.name))})}return a.prototype.getName=function(r){return r===void 0&&(r=lf),this.name+r.hash},a}(),Y5=function(a){return a>="A"&&a<="Z"};function ap(a){for(var r="",o=0;o<a.length;o++){var u=a[o];if(o===1&&u==="-"&&a[0]==="-")return a;Y5(u)?r+="-"+u.toLowerCase():r+=u}return r.startsWith("ms-")?"-"+r:r}var Em=function(a){return a==null||a===!1||a===""},zm=function(a){var r,o,u=[];for(var c in a){var d=a[c];a.hasOwnProperty(c)&&!Em(d)&&(Array.isArray(d)&&d.isCss||Wi(d)?u.push("".concat(ap(c),":"),d,";"):fr(d)?u.push.apply(u,cr(cr(["".concat(c," {")],zm(d),!1),["}"],!1)):u.push("".concat(ap(c),": ").concat((r=c,(o=d)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||r in h5||r.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return u};function ti(a,r,o,u){if(Em(a))return[];if(vf(a))return[".".concat(a.styledComponentId)];if(Wi(a)){if(!Wi(d=a)||d.prototype&&d.prototype.isReactComponent||!r)return[a];var c=a(r);return ti(c,r,o,u)}var d;return a instanceof wm?o?(a.inject(o,u),[a.getName(u)]):[a]:fr(a)?zm(a):Array.isArray(a)?Array.prototype.concat.apply(mo,a.map(function(p){return ti(p,r,o,u)})):[a.toString()]}function X5(a){for(var r=0;r<a.length;r+=1){var o=a[r];if(Wi(o)&&!vf(o))return!1}return!0}var $5=dm(po),Z5=function(){function a(r,o,u){this.rules=r,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&X5(r),this.componentId=o,this.baseHash=Zi($5,o),this.baseStyle=u,vm.registerId(o)}return a.prototype.generateAndInjectStyles=function(r,o,u){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,o,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))c=Ia(c,this.staticRulesId);else{var d=nf(ti(this.rules,r,o,u)),p=tf(Zi(this.baseHash,d)>>>0);if(!o.hasNameForId(this.componentId,p)){var g=u(d,".".concat(p),void 0,this.componentId);o.insertRules(this.componentId,p,g)}c=Ia(c,p),this.staticRulesId=p}else{for(var S=Zi(this.baseHash,u.hash),x="",v=0;v<this.rules.length;v++){var E=this.rules[v];if(typeof E=="string")x+=E;else if(E){var A=nf(ti(E,r,o,u));S=Zi(S,A+v),x+=A}}if(x){var F=tf(S>>>0);o.hasNameForId(this.componentId,F)||o.insertRules(this.componentId,F,u(x,".".concat(F),void 0,this.componentId)),c=Ia(c,F)}}return c},a}(),Am=Dt.createContext(void 0);Am.Consumer;var Vc={};function Q5(a,r,o){var u=vf(a),c=a,d=!qc(a),p=r.attrs,g=p===void 0?mo:p,S=r.componentId,x=S===void 0?function(re,L){var te=typeof re!="string"?"sc":Jh(re);Vc[te]=(Vc[te]||0)+1;var $="".concat(te,"-").concat(hm(po+te+Vc[te]));return L?"".concat(L,"-").concat($):$}(r.displayName,r.parentComponentId):S,v=r.displayName,E=v===void 0?function(re){return qc(re)?"styled.".concat(re):"Styled(".concat(v5(re),")")}(a):v,A=r.displayName&&r.componentId?"".concat(Jh(r.displayName),"-").concat(r.componentId):r.componentId||x,F=u&&c.attrs?c.attrs.concat(g).filter(Boolean):g,C=r.shouldForwardProp;if(u&&c.shouldForwardProp){var M=c.shouldForwardProp;if(r.shouldForwardProp){var k=r.shouldForwardProp;C=function(re,L){return M(re,L)&&k(re,L)}}else C=M}var Z=new Z5(o,A,u?c.componentStyle:void 0);function q(re,L){return function(te,$,le){var Ee=te.attrs,Ge=te.componentStyle,Re=te.defaultProps,P=te.foldedComponentIds,se=te.styledComponentId,ye=te.target,ve=Dt.useContext(Am),_=np(),J=te.shouldForwardProp||_.shouldForwardProp,fe=m5($,ve,Re)||Fi,Se=function(oe,ue,xe){for(var me,Ce=Jt(Jt({},ue),{className:void 0,theme:xe}),at=0;at<oe.length;at+=1){var bt=Wi(me=oe[at])?me(Ce):me;for(var pe in bt)Ce[pe]=pe==="className"?Ia(Ce[pe],bt[pe]):pe==="style"?Jt(Jt({},Ce[pe]),bt[pe]):bt[pe]}return ue.className&&(Ce.className=Ia(Ce.className,ue.className)),Ce}(Ee,$,fe),w=Se.as||ye,V={};for(var ne in Se)Se[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&Se.theme===fe||(ne==="forwardedAs"?V.as=Se.forwardedAs:J&&!J(ne,w)||(V[ne]=Se[ne]));var B=function(oe,ue){var xe=np(),me=oe.generateAndInjectStyles(ue,xe.styleSheet,xe.stylis);return me}(Ge,Se),W=Ia(P,se);return B&&(W+=" "+B),Se.className&&(W+=" "+Se.className),V[qc(w)&&!cm.has(w)?"class":"className"]=W,le&&(V.ref=le),Y.createElement(w,V)}(K,re,L)}q.displayName=E;var K=Dt.forwardRef(q);return K.attrs=F,K.componentStyle=Z,K.displayName=E,K.shouldForwardProp=C,K.foldedComponentIds=u?Ia(c.foldedComponentIds,c.styledComponentId):"",K.styledComponentId=A,K.target=u?c.target:a,Object.defineProperty(K,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(re){this._foldedDefaultProps=u?function(L){for(var te=[],$=1;$<arguments.length;$++)te[$-1]=arguments[$];for(var le=0,Ee=te;le<Ee.length;le++)af(L,Ee[le],!0);return L}({},c.defaultProps,re):re}}),bf(K,function(){return".".concat(K.styledComponentId)}),d&&xm(K,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),K}function ip(a,r){for(var o=[a[0]],u=0,c=r.length;u<c;u+=1)o.push(r[u],a[u+1]);return o}var lp=function(a){return Object.assign(a,{isCss:!0})};function Tm(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];if(Wi(a)||fr(a))return lp(ti(ip(mo,cr([a],r,!0))));var u=a;return r.length===0&&u.length===1&&typeof u[0]=="string"?ti(u):lp(ti(ip(u,r)))}function rf(a,r,o){if(o===void 0&&(o=Fi),!r)throw br(1,r);var u=function(c){for(var d=[],p=1;p<arguments.length;p++)d[p-1]=arguments[p];return a(r,o,Tm.apply(void 0,cr([c],d,!1)))};return u.attrs=function(c){return rf(a,r,Jt(Jt({},o),{attrs:Array.prototype.concat(o.attrs,c).filter(Boolean)}))},u.withConfig=function(c){return rf(a,r,Jt(Jt({},o),c))},u}var jm=function(a){return rf(Q5,a)},I=jm;cm.forEach(function(a){I[a]=jm(a)});function It(a){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];var u=nf(Tm.apply(void 0,cr([a],r,!1))),c=hm(u);return new wm(c,u)}var Gc,rp;function K5(){if(rp)return Gc;rp=1;var a="Expected a function",r=NaN,o="[object Symbol]",u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,p=/^0o[0-7]+$/i,g=parseInt,S=typeof Ms=="object"&&Ms&&Ms.Object===Object&&Ms,x=typeof self=="object"&&self&&self.Object===Object&&self,v=S||x||Function("return this")(),E=Object.prototype,A=E.toString,F=Math.max,C=Math.min,M=function(){return v.Date.now()};function k(L,te,$){var le,Ee,Ge,Re,P,se,ye=0,ve=!1,_=!1,J=!0;if(typeof L!="function")throw new TypeError(a);te=re(te)||0,Z($)&&(ve=!!$.leading,_="maxWait"in $,Ge=_?F(re($.maxWait)||0,te):Ge,J="trailing"in $?!!$.trailing:J);function fe(xe){var me=le,Ce=Ee;return le=Ee=void 0,ye=xe,Re=L.apply(Ce,me),Re}function Se(xe){return ye=xe,P=setTimeout(ne,te),ve?fe(xe):Re}function w(xe){var me=xe-se,Ce=xe-ye,at=te-me;return _?C(at,Ge-Ce):at}function V(xe){var me=xe-se,Ce=xe-ye;return se===void 0||me>=te||me<0||_&&Ce>=Ge}function ne(){var xe=M();if(V(xe))return B(xe);P=setTimeout(ne,w(xe))}function B(xe){return P=void 0,J&&le?fe(xe):(le=Ee=void 0,Re)}function W(){P!==void 0&&clearTimeout(P),ye=0,le=se=Ee=P=void 0}function oe(){return P===void 0?Re:B(M())}function ue(){var xe=M(),me=V(xe);if(le=arguments,Ee=this,se=xe,me){if(P===void 0)return Se(se);if(_)return P=setTimeout(ne,te),fe(se)}return P===void 0&&(P=setTimeout(ne,te)),Re}return ue.cancel=W,ue.flush=oe,ue}function Z(L){var te=typeof L;return!!L&&(te=="object"||te=="function")}function q(L){return!!L&&typeof L=="object"}function K(L){return typeof L=="symbol"||q(L)&&A.call(L)==o}function re(L){if(typeof L=="number")return L;if(K(L))return r;if(Z(L)){var te=typeof L.valueOf=="function"?L.valueOf():L;L=Z(te)?te+"":te}if(typeof L!="string")return L===0?L:+L;L=L.replace(u,"");var $=d.test(L);return $||p.test(L)?g(L.slice(2),$?2:8):c.test(L)?r:+L}return Gc=k,Gc}K5();var J5=typeof window<"u"?Y.useLayoutEffect:Y.useEffect;function F5(a,r,o,u){const c=Y.useRef(r);J5(()=>{c.current=r},[r]),Y.useEffect(()=>{const d=window;if(!(d&&d.addEventListener))return;const p=g=>{c.current(g)};return d.addEventListener(a,p,u),()=>{d.removeEventListener(a,p,u)}},[a,o,u])}function nl(a,r,o="mousedown",u={}){F5(o,c=>{const d=c.target;if(!d||!d.isConnected)return;(Array.isArray(a)?a.filter(g=>!!g.current).every(g=>g.current&&!g.current.contains(d)):a.current&&!a.current.contains(d))&&r(c)},void 0,u)}const dr=I.button`
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
`,Ii=I.div`
  display: flex;
  flex-direction: column;
  padding: 40px 32px 24px 32px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 32px 24px 20px 24px;
  }
`;I.img`
  height: 60px;
  max-width: 200px;
  margin: 0 auto 24px;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
`;const ai=I.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${a=>a.mainColor||"#333"};
  margin: 0 0 16px 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`,Sr=I.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 32px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`,ka=I.input`
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
`,Ot=I.div`
  color: #e40000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`,go=I.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 20px 0;
  text-align: left;
`,xo=I.input`
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
`,hr=I.button`
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
`,wr=I.div`
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
`,yo=I.a`
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
`,Dm=I.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`,Sf=I.h1`
  font-size: 16px;
  font-weight: 600;
  color: ${a=>a.mainColor||"#333"};
  margin: 10px;
`,wf=I.p`
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  color: ${a=>a.mainColor||"#666"};
  width: 100%;
  margin: 3% auto 5%;
`,W5=It`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`,I5=I.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${W5} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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
`,Ef=I.div`
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
`,P5=It`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,to=I.div`
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
    animation: ${P5} 8s linear infinite;
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
`,vo=I.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  border-radius: 20px;
  overflow: hidden;
`,ey=I.div`
  display: flex;
  width: 100%;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`,ty=({enabledPhoneSubscription:a,enabledEmailSubscription:r,mainColor:o,forceOpen:u})=>{const[c,d]=Y.useState(u||!1),[p,g]=Y.useState(!1),[S,x]=Y.useState(""),[v,E]=Y.useState(!1),[A,F]=Y.useState(""),[C,M]=Y.useState(""),k=Y.useRef(null),{register:Z,handleSubmit:q,formState:{errors:K}}=vr(),re=()=>{d(!1);const $=new Date;$.setDate($.getDate()+7);const le="expires="+$.toUTCString();document.cookie=`upsellPhoneSubscription=false;${le};path=/`};k!==null&&nl(k,()=>{re()});const te=q(async $=>{g(!0),x("");try{C&&r&&await qe.post("https://api.upsell.co/emailsubscription",{name:$.name,surname:$.surname,email:C}),A&&a&&await qe.post("https://api.upsell.co/PhoneSubscription",{name:$.name,surname:$.surname,phone:"90"+A}),E(!0);const le=new Date;le.setDate(le.getDate()+7);const Ee="expires="+le.toUTCString();document.cookie=`upsellPhoneSubscription=true;${Ee};path=/`,d(!1)}catch{x("Bu telefon numarası veya e-posta adresi zaten kayıtlı.")}finally{g(!1)}});return Y.useEffect(()=>{if(u){d(!0);return}if(typeof window<"u"&&!document.cookie.split(";").some(le=>le.trim().startsWith("upsellPhoneSubscription="))&&(a||r)){const le=setTimeout(()=>{d(!0)},2e4);return()=>{clearTimeout(le)}}},[u,a,r]),!a&&!r?null:f.jsx(f.Fragment,{children:f.jsxs(Ef,{style:{display:!v&&!c?"none":"block"},children:[v&&f.jsx(to,{children:f.jsxs(Dm,{children:[f.jsx(dr,{children:f.jsx("span",{onClick:()=>{E(!1)},style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),f.jsx(Sf,{mainColor:o,children:"Teşekkürler!"}),f.jsx(wf,{mainColor:o,children:"Aboneliğiniz başarıyla alındı."})]})}),c&&f.jsxs(to,{ref:k,mainColor:o,children:[f.jsxs(vo,{children:[p&&f.jsx(wr,{children:f.jsxs(I5,{children:[f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{})]})}),!v&&f.jsxs(f.Fragment,{children:[f.jsx(dr,{onClick:()=>{re()},children:f.jsx("span",{style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),f.jsxs(Ii,{children:[f.jsx(ai,{mainColor:o,children:"Bültenimize Abone Olun, Fırsatları İlk Siz Yakalayın!"}),f.jsx(Sr,{children:"İndirim ve fırsatlardan ilk sizin haberiniz olsun, kayıt olun ve avantajlardan yararlanın!"}),f.jsxs("form",{style:{display:"flex",flexDirection:"column",width:"100%"},onSubmit:$=>te($),children:[f.jsxs(ey,{children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(ka,{mainColor:o,placeholder:"Adınızı Giriniz",...Z("name",{required:"Ad boş bırakılamaz"})}),K.name&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:K?.name?.message?.toString()??null})})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(ka,{mainColor:o,placeholder:"Soyadınızı Giriniz",...Z("surname",{required:"Soyadı boş bırakılamaz"})}),K.surname&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:K?.surname?.message?.toString()??null})})]})]}),a&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(ka,{mainColor:o,type:"tel",onInput:$=>{$.currentTarget.value=$.currentTarget.value.replace(/[^0-9]/g,"")},...Z("phone",{required:a&&!r?"Telefon boş bırakılamaz":a&&r&&!C?"Telefon veya e-posta girmelisiniz":!1,pattern:{value:/^5[0-9]{9}$/,message:"Telefon numarası 5 ile başlamalı ve 10 haneli olmalıdır"},validate:$=>$&&(/^(\d)\1+$/.test($)||/^5(\d)\1{8}$/.test($)||$==="5123456789"||$==="5987654321")?"Geçersiz telefon numarası":!0}),onChange:$=>{F($.target.value)},placeholder:"5XXXXXXXXX",maxLength:10}),K.phone&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:K?.phone?.message?.toString()??null})})]}),r&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(ka,{mainColor:o,placeholder:"E-postanızı Giriniz",...Z("email",{required:r&&!a?"E-posta boş bırakılamaz":r&&a&&!A?"E-posta veya telefon girmelisiniz":!1,pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,message:"Geçerli bir e-posta giriniz"}}),onChange:$=>{M($.target.value)}}),K.email&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:K?.email?.message?.toString()??null})})]}),f.jsxs(go,{children:[f.jsx(xo,{mainColor:o,...Z("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",f.jsx("a",{style:{color:o||"#e7333c",textDecoration:"underline",fontWeight:"500"},id:"kvkkLink",href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",children:"Aydınlatma metni için tıklayın"}),"."]})]}),K.kvkk&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:K?.kvkk?.message?.toString()??null})}),S&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:S})}),f.jsx("div",{children:f.jsx(hr,{mainColor:o,children:"Kaydet"})})]})]})]})]}),f.jsxs(yo,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})]})})},ny=a=>It`
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
`,ay=I.button`
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
`,iy=I.div`
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
`,_m=It`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,ly=I.div`
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
`,sp=I.div`
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
`,op=I.button`
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
`,ry=I.div`
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
`,sy=I.div`
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
`,oy=I.a`
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
`,uy=I.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,cy=I.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 16px;
`,fy=I.div`
  color: #333;
  font-weight: 600;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  margin-bottom: 8px;
`,dy=I.div`
  font-size: 16px;
  color: ${a=>a.mainColor||"#e7333c"};
  font-weight: 700;
  margin-top: auto;
`,zf=I.div`
  display: none;
`,Af=I.div`
  display: none;
`,Tf=I.div`
  display: none;
`,hy=I.div`
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
`,py=I.div`
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
`,my=I.div`
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
`,gy=I.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
`,xy=I.img`
  width: 100%;
  height: 180px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 160px;
  }

  @media (max-width: 480px) {
    height: 140px;
  }
`,yy=I.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex: 1;

  @media (max-width: 480px) {
    padding: 8px;
  }
`,vy=I.div`
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
`,by=I.div`
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
`,up=I.a`
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
`,Sy=({mainColor:a,forceOpen:r})=>{const[o,u]=Y.useState(r||!1),[c,d]=Y.useState(!0),[p,g]=Y.useState([]),[S,x]=Y.useState({title:"",contentTitle:"",position:0,theme:1}),v=Y.useRef(null);if(v!==null&&nl(v,()=>{u(!1)}),Y.useEffect(()=>{r&&u(!0)},[r]),Y.useEffect(()=>{async function C(){d(!0);try{const M=await qe.get("https://api.upsell.co/RecommendedProducts");x({title:M.data.data.title,contentTitle:M.data.data.contentTitle,position:M.data.data.position,theme:M.data.data.theme||1}),g(M.data.data.products)}catch{}finally{d(!1)}}C()},[]),p===null||!(p.length>0&&!c))return null;const A=()=>f.jsxs(ly,{ref:v,position:S.position,mainColor:a,children:[f.jsx(op,{onClick:()=>u(!1),children:f.jsx("span",{children:"×"})}),f.jsxs(sp,{mainColor:a,children:[S.contentTitle," ✨"]}),f.jsx(ry,{children:p.map(C=>f.jsx(sy,{children:f.jsxs(oy,{href:`${C.productUrl}?utm_source=upsell&utm_medium=widget&utm_campaign=weekly-products`,children:[f.jsx(uy,{src:C.imageUrl,alt:C.title}),f.jsxs(cy,{children:[f.jsx(fy,{children:C.title}),f.jsxs(dy,{mainColor:a,children:[C.price," TL"]})]})]})},C.productId))}),f.jsxs(up,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]}),F=()=>f.jsxs(hy,{ref:v,position:S.position,mainColor:a,children:[f.jsx(op,{onClick:()=>u(!1),children:f.jsx("span",{children:"×"})}),f.jsxs(sp,{mainColor:a,children:[S.contentTitle," ✨"]}),f.jsx(py,{children:p.map(C=>f.jsx(my,{children:f.jsxs(gy,{href:`${C.productUrl}?utm_source=upsell&utm_medium=widget&utm_campaign=weekly-products`,children:[f.jsx(xy,{src:C.imageUrl,alt:C.title}),f.jsxs(yy,{children:[f.jsx(vy,{children:C.title}),f.jsxs(by,{mainColor:a,children:[C.price," TL"]})]})]})},C.productId))}),f.jsxs(up,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]});return f.jsxs("div",{children:[!r&&f.jsx(ay,{position:S.position,mainColor:a,onClick:()=>{u(!0)},children:S.title}),f.jsx(iy,{style:{display:o?"block":"none"},children:S.theme===2?F():A()})]})},vn=I.div`
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
`,wy=It`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Ey=It`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,zy=I.div`
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
`,Ay=I.div`
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
`,Ty=({color:a,forceOpen:r})=>{const[o,u]=Y.useState(r||!1),[c,d]=Y.useState(null),[p,g]=Y.useState(!1),[S,x]=Y.useState(!1),v=Y.useRef(null);nl(v,()=>{u(!1)}),Y.useEffect(()=>{if(r)u(!0);else{const Z=document.getElementsByClassName("upsell-ss"),q=()=>u(!0);return Array.from(Z).forEach(K=>{K.addEventListener("click",q)}),()=>{Array.from(Z).forEach(K=>{K.removeEventListener("click",q)})}}},[r]);const{register:A,handleSubmit:F,formState:{errors:C}}=vr(),M=F(async Z=>{x(!0),g(!1),d(null);try{const K=(await qe.post("https://api.upsell.co/ticimax/order",{phone:"90"+Z.phone})).data;!K.data||K.data===null?g(!0):d(K.data)}catch{g(!0)}finally{x(!1)}}),k=()=>{u(!1),d(null),g(!1)};return f.jsx(Ef,{style:{display:o?"block":"none"},children:f.jsxs(Ay,{ref:v,mainColor:a,children:[f.jsxs(vo,{children:[f.jsx(zf,{mainColor:a}),f.jsx(Af,{mainColor:a}),f.jsx(Tf,{mainColor:a}),S&&f.jsx(wr,{children:f.jsx(zy,{children:Array.from({length:8}).map((Z,q)=>f.jsx("div",{},q))})}),f.jsx(dr,{children:f.jsx("span",{onClick:k,style:{color:"#000000",float:"right",fontSize:"35px"},children:"×"})}),c?f.jsxs(Ii,{children:[f.jsx(ai,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),f.jsxs(vn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş No"}),f.jsx("div",{style:{width:"50%"},children:c.siparisNo||"-"})]}),f.jsxs(vn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş Tarihi"}),f.jsx("div",{style:{width:"50%"},children:new Date(c.siparisTarihi).toLocaleDateString("tr-TR")||"-"})]}),f.jsxs(vn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş Durumu"}),f.jsx("div",{style:{width:"50%"},children:c.siparisDurumu||"-"})]}),f.jsxs(vn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Takip Link"}),f.jsx("div",{style:{width:"50%"},children:c.kargoTakipLink?f.jsx("a",{target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:a||"#e7333c"},href:c.kargoTakipLink,children:"Kargoyu Görüntüle"}):"-"})]}),f.jsxs(vn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Takip No"}),f.jsx("div",{style:{width:"50%"},children:c.kargoTakipNo||"-"})]}),f.jsxs(vn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Firma"}),f.jsx("div",{style:{width:"50%"},children:c.kargoFirmaTanim||"-"})]})]}):f.jsxs(Ii,{children:[f.jsx(ai,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),f.jsx(Sr,{children:"Siparişinizin kargo takibini yapmak için telefon numaranızı giriniz."}),f.jsxs("form",{onSubmit:M,children:[f.jsx(ka,{mainColor:a,type:"tel",onInput:Z=>{Z.currentTarget.value=Z.currentTarget.value.replace(/[^0-9]/g,"")},...A("phone",{required:"Telefon numarası boş bırakılamaz",pattern:{value:/^5[0-9]{9}$/,message:"Telefon numarası 5 ile başlamalı ve 10 haneli olmalıdır"},validate:Z=>/^(\d)\1+$/.test(Z)||/^5(\d)\1{8}$/.test(Z)||Z==="5123456789"||Z==="5987654321"?"Geçersiz telefon numarası":!0}),placeholder:"5XXXXXXXXX",maxLength:10}),C.phone&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:C.phone.message})}),f.jsxs(go,{children:[f.jsx(xo,{mainColor:a,...A("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",f.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",rel:"noopener noreferrer",children:"Aydınlatma metni için tıklayın."})]})]}),C.kvkk&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center",marginBottom:"10px"},children:C.kvkk.message})}),p&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Telefon numarası ile eşleşen sipariş bulunamadı."})}),f.jsx("div",{children:f.jsx(hr,{mainColor:a,children:"Sorgula"})})]})]})]}),f.jsxs(yo,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})})};I.button`
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
`;I.strong`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 16px;
  margin-bottom: 16px;
  color: ${a=>a.mainColor||"#333"};
  font-weight: 600;
`;const jy=I.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 16px 0;
`,Dy=I.label`
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
`,_y=I.span`
  color: ${a=>a.selected?"#fff":"#333"};
  text-decoration: none;
  font-weight: 500;
`,Oy=I.div`
  color: #e40000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  padding: 8px 12px;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
`,Cy=It`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`,ky=I.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${Cy} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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
`,Ry=I.div`
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
`,Ny=({mainColor:a,stockReminderUsageChannel:r,forceOpen:o})=>{const u=Y.useRef(null),[c,d]=Y.useState(o||!1),[p,g]=Y.useState(!1),[S,x]=Y.useState(""),[v,E]=Y.useState(!1),[A,F]=Y.useState(),[C,M]=Y.useState(),[k,Z]=Y.useState(!1),[q,K]=Y.useState(!1),[re,L]=Y.useState(null),te=Y.useRef(null),$=Y.useRef(null),le=Y.useRef(null),Ee=()=>{document.querySelectorAll(".nostok").forEach(W=>{if(!W.querySelector(".stock_bell_icon")){const oe=document.createElementNS("http://www.w3.org/2000/svg","svg");oe.setAttribute("class","stock_bell_icon"),oe.setAttribute("height","18"),oe.setAttribute("width","18"),oe.setAttribute("viewBox","0 0 512 512"),oe.style.pointerEvents="none";const ue=document.createElementNS("http://www.w3.org/2000/svg","g");["m437.017 39.687c-5.858-5.857-15.356-5.857-21.213 0-5.858 5.858-5.857 15.356 0 21.213 42.688 42.685 66.196 99.438 66.196 159.807 0 8.284 6.716 15 15 15s15-6.716 15-15c0-68.382-26.629-132.67-74.983-181.02z","m96.193 39.688c-5.858-5.857-15.355-5.858-21.213 0-48.352 48.354-74.98 112.641-74.98 181.019 0 8.284 6.716 15 15 15s15-6.716 15-15c0-60.365 23.508-117.118 66.193-159.805 5.858-5.858 5.858-15.356 0-21.214z","m370.358 85.125c-5.858 5.858-5.857 15.355 0 21.213 30.55 30.548 47.374 71.164 47.374 114.368 0 8.284 6.716 15 15 15s15-6.716 15-15c0-51.217-19.945-99.368-56.161-135.582-5.858-5.856-15.355-5.856-21.213.001z","m141.634 85.132c-5.858-5.857-15.356-5.857-21.213.001-36.211 36.216-56.154 84.363-56.154 135.573 0 8.284 6.716 15 15 15s15-6.716 15-15c0-43.197 16.823-83.811 47.369-114.361 5.857-5.858 5.856-15.355-.002-21.213z","m383.467 329.632v-76.792c0-28.011-8.918-54.59-25.79-76.865-14.101-18.617-33.332-33.16-54.939-41.717-3.007-23.111-22.82-41.018-46.738-41.018s-43.733 17.906-46.74 41.018c-21.606 8.558-40.837 23.101-54.938 41.717-16.872 22.275-25.79 48.854-25.79 76.865v76.792l-30.549 61.1c-2.325 4.65-2.076 10.172.657 14.594s7.561 7.114 12.76 7.114h66.774c7.033 36.558 39.246 64.267 77.825 64.267 38.578 0 70.791-27.709 77.823-64.267h66.778c5.199 0 10.027-2.692 12.76-7.114s2.981-9.944.657-14.594zm-127.467 117.075c-21.938 0-40.573-14.413-46.933-34.267h93.865c-6.36 19.854-24.994 34.267-46.932 34.267zm64.266-64.267h-128.533-56.062l21.279-42.559c1.042-2.083 1.583-4.379 1.583-6.708v-80.333c0-42.793 28.625-81.203 69.612-93.405 6.36-1.894 10.72-7.741 10.72-14.376v-4.686c0-9.447 7.687-17.133 17.135-17.133 9.447 0 17.133 7.686 17.133 17.133v4.686c0 6.636 4.36 12.483 10.72 14.376 40.987 12.202 69.614 50.611 69.614 93.405v80.333c0 2.329.542 4.625 1.583 6.708l21.279 42.559z"].forEach(me=>{const Ce=document.createElementNS("http://www.w3.org/2000/svg","path");Ce.setAttribute("d",me),ue.appendChild(Ce)}),oe.appendChild(ue),W.appendChild(oe)}})},Ge=()=>{le.current&&clearInterval(le.current),le.current=setInterval(()=>{document.querySelectorAll(".stock_bell_icon").forEach(W=>{const oe=W;oe.classList.add("bell-animate"),setTimeout(()=>{oe.classList.remove("bell-animate")},1e3)})},3e3)},Re=()=>{const B=document.getElementById("dynamicNostokBellStyles");B&&B.remove();const W=document.createElement("style");W.id="dynamicNostokBellStyles",W.innerHTML=`
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
    `,document.head.appendChild(W)};Y.useEffect(()=>{typeof window<"u"&&(window.currentProduct?F(window.currentProduct):window.productDetailModel&&F(window.productDetailModel))},[]),Y.useEffect(()=>(Re(),()=>{const B=document.getElementById("dynamicNostokBellStyles");B&&B.remove()}),[a]),Y.useEffect(()=>{typeof window<"u"&&A&&(Ee(),Ge())},[A]),Y.useEffect(()=>()=>{le.current&&clearInterval(le.current)},[]);const{register:P,handleSubmit:se,formState:{errors:ye},reset:ve,clearErrors:_}=vr(),J=()=>{d(!1),M(null),K(!1),L(null),ve(),_(),x(""),Z(!1)};u!==null&&nl(u,J);const fe=se(B=>{g(!0),A&&(A.productVariantData&&!C||qe.post("https://api.upsell.co/phonesubscription/reminder",{...r===1||r===2?{phone:"90"+B.phone,email:""}:{email:B.email,phone:""},productName:A.productName,productSlug:window.location.pathname,productId:`${A.productVariantData?C?.variantOptions[0].urunID:A.product.id}`,productCardId:A.product.urunKartiId.toString(),variant:(JSON.stringify(C)??"{}")||"{}",hasVariant:A.productVariantData!==null}).then(()=>{E(!0),d(!1)}).catch(()=>{x(r===1||r===2?"Bu telefon numarası zaten kayıtlı.":"Bu e-posta adresi zaten kayıtlı.")}).finally(()=>{g(!1)}))});Y.useEffect(()=>{if(o)d(!0);else if(typeof window<"u"){const B=xe=>{xe.preventDefault(),xe.stopPropagation();const me=xe.currentTarget;let Ce=me.getAttribute("data-variant-definition");if(!Ce){const at=me.querySelector("[data-variant-definition]");at&&(Ce=at.getAttribute("data-variant-definition"))}L(Ce),c||d(!0)},W=()=>{c||d(!0)};te.current=B,$.current=W;const oe=document.getElementById("upsell-ss-reminder");oe&&(oe.removeEventListener("click",$.current),oe.addEventListener("click",W));const ue=document.querySelectorAll(".nostok");if(ue.forEach(xe=>{te.current&&xe.removeEventListener("click",te.current)}),ue.forEach(xe=>{xe.addEventListener("click",B)}),A){const xe=A.productVariantData?.some(at=>at.stokAdedi===0),me=A.productVariantData===null&&A.totalStockAmount===0;if(xe||me){const at=A.productVariantData!==null&&A.totalStockAmount===0;if(ue.length===0||at)if(oe)oe.style.display="flex";else{const bt=()=>{if(typeof window.$<"u"){const pe=document.querySelector(".MiddleList");if(pe&&!document.getElementById("upsell-ss-reminder")){const be=`
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
                    `;pe.insertAdjacentHTML("beforebegin",be);const Be=document.getElementById("upsell-ss-reminder");Be&&Be.addEventListener("click",W)}}else setTimeout(bt,100)};bt()}}else oe&&(oe.style.display="none")}return()=>{document.querySelectorAll(".nostok").forEach(Ce=>{te.current&&Ce.removeEventListener("click",te.current)});const me=document.getElementById("upsell-ss-reminder");me&&$.current&&me.removeEventListener("click",$.current)}}},[o,A,a,c]),Y.useEffect(()=>{if(c&&A?.productVariantData&&!q&&re){const B=re.trim(),W=A.productVariantData.filter(oe=>oe.tanim.trim()===B);W.length>0&&(M({variantOptions:W,name:W[0].tanim}),K(!0))}c||(K(!1),L(null))},[c,A,q,re]);const Se=B=>B.reduce((W,oe)=>(W[oe.urunID]||(W[oe.urunID]={variantName:oe.ekSecenekTipiTanim,variantOptions:[]}),W[oe.urunID].variantOptions.push(oe),W),{}),w=()=>{if(!A?.productVariantData)return"Ürün Tekrar Stokta Olduğunda Sana Bildirelim!";const B=[...new Set(A.productVariantData.map(W=>W.ekSecenekTipiTanim))];return B.length>1?`${B.join(" ve ")}ini Seç, Stokta Olunca Sana Bildirelim!`:"Bedenini Seç, Stokta Olunca Sana Bildirelim!"},V=B=>B===1||B===2?"Ürün stoğa girdiğinde size WhatsApp veya SMS ile hemen bilgi vereceğiz. Telefon numaranızın doğru olduğundan emin olun!":"Ürün stoğa girdiğinde size E-posta ile hemen bilgi vereceğiz. E-posta adresinizin doğru olduğundan emin olun!",ne=()=>A?.productVariantData?"İlgilendiğiniz beden stoğa girdiğinde size hemen bilgi vereceğiz.":"İlgilendiğiniz ürün stoğa girdiğinde size hemen bilgi vereceğiz.";return A?f.jsxs(f.Fragment,{children:[f.jsx(Ry,{mainColor:a}),f.jsxs(Ef,{style:{display:!v&&!c?"none":"block"},children:[v&&f.jsx(to,{mainColor:a,children:f.jsxs(Dm,{children:[f.jsx(dr,{onClick:()=>{E(!1)},children:f.jsx("span",{style:{color:"#000000",float:"right",fontSize:"18px"},children:"×"})}),f.jsx(Sf,{mainColor:a,children:"Teşekkürler!"}),f.jsx(wf,{mainColor:a,children:ne()})]})}),c&&f.jsxs(to,{ref:u,mainColor:a,children:[f.jsxs(vo,{children:[p&&f.jsx(wr,{children:f.jsxs(ky,{children:[f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{})]})}),!v&&f.jsxs(f.Fragment,{children:[f.jsx(dr,{onClick:()=>{J()},children:f.jsx("span",{style:{color:"#000000",float:"right",fontSize:"18px"},children:"×"})}),f.jsxs(Ii,{children:[f.jsx(ai,{mainColor:a,children:w()}),A?.productVariantData&&f.jsxs(f.Fragment,{children:[f.jsx("div",{children:f.jsx(jy,{children:Object.entries(Se(A?.productVariantData)).map(B=>f.jsx("li",{children:f.jsxs(Dy,{selected:C?.name===B[1].variantOptions.map(W=>W.tanim).join(", "),htmlFor:B[0]+"-"+B[1].variantOptions.map(W=>W.id),disabled:B[1].variantOptions[0].stokAdedi!==0,mainColor:a,children:[f.jsx("input",{type:"radio",disabled:B[1].variantOptions[0].stokAdedi!==0,id:B[0]+"-"+B[1].variantOptions.map(W=>W.id),checked:C?.name===B[1].variantOptions.map(W=>W.tanim).join(", "),style:{visibility:"hidden",display:"none"},...P(B[1].variantName,{required:B[1].variantName+" varyasyonu için bir seçenek seçin"}),onClick:()=>{M({variantOptions:B[1].variantOptions,name:B[1].variantOptions.map(W=>W.tanim).join(", ")})}}),f.jsx(_y,{selected:C?.name===B[1].variantOptions.map(W=>W.tanim).join(", "),children:B[1].variantOptions.map(W=>W.tanim).join(", ")})]})},B[0]))})}),!C&&k&&f.jsx(Oy,{children:"Lütfen bir seçenek seçin"})]}),f.jsx(Sr,{style:{marginTop:A?.productVariantData?"20px":"0"},children:V(r)}),f.jsxs("form",{onSubmit:B=>fe(B),children:[r===1||r===2?f.jsxs(f.Fragment,{children:[f.jsx(ka,{mainColor:a,type:"tel",onInput:B=>{B.currentTarget.value=B.currentTarget.value.replace(/[^0-9]/g,"")},...P("phone",{required:enabledPhoneSubscription&&!enabledEmailSubscription?"Telefon boş bırakılamaz":enabledPhoneSubscription&&enabledEmailSubscription&&!email?"Telefon veya e-posta girmelisiniz":!1,pattern:{value:/^5[0-9]{9}$/,message:"Telefon numarası 5 ile başlamalı ve 10 haneli olmalıdır"},validate:B=>B&&(/^(\d)\1+$/.test(B)||/^5(\d)\1{8}$/.test(B)||B==="5123456789"||B==="5987654321")?"Geçersiz telefon numarası":!0}),onChange:B=>{setphone(B.target.value)},placeholder:"5XXXXXXXXX",maxLength:10}),ye.phone&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:ye?.phone?.message?.toString()??null})})]}):f.jsxs(f.Fragment,{children:[f.jsx(ka,{mainColor:a,placeholder:"E-postanızı Giriniz",...P("email",{required:"E-posta boş bırakılamaz",pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,message:"Geçerli bir e-posta giriniz"}})}),ye.email&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:ye?.email?.message?.toString()??null})})]}),f.jsxs(go,{children:[f.jsx(xo,{mainColor:a,...P("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:[r===1||r===2?"Kampanya, duyuru ve bilgilendirmelerden WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum.":"Kampanya, duyuru ve bilgilendirmelerden E-Posta yoluyla haberdar olmak istediğimi belirtiyorum.",f.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},id:"kvkkLink",href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",children:"Aydınlatma metni için tıklayın"}),"."]})]}),ye.kvkk&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:ye?.kvkk?.message?.toString()??null})}),S&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:S})}),f.jsx("div",{children:f.jsx(hr,{mainColor:a,onClick:()=>{Z(!0)},children:"Kaydet"})})]})]})]})]}),f.jsxs(yo,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})]})]}):null};var Om=wp();const My=a=>{const{color:r}=a,[o,u]=Y.useState([]),[c,d]=Y.useState(!0),p=Y.useRef(null),g=Y.useRef(null),[S,x]=Y.useState(!1);Y.useEffect(()=>{g.current=document.querySelector("#upsell-ss-featured-products-responsive"),x(!0)},[]),Y.useEffect(()=>{async function E(){if(!document.body.classList.contains("CategoryBody")){d(!1);return}try{const A=window.globalModel;if(!A?.breadCrumb?.id){console.log("BreadCrumb ID: bulunamadı"),d(!1);return}const F=A.breadCrumb.id,C=window.location.origin,Z=(await(await fetch(`${C}/api/product/GetProductList?c=trtry0000&FilterJson={"CategoryIdList":[${F}]}&PagingJson={"PageItemCount":15,"PageNumber":1,"OrderBy":"SATISADEDI","OrderDirection":"DESC"}&CreateFilter=false&TransitionOrder=0&PageType=1`)).json()).products?.filter(q=>q.inStock)?.slice(0,20)||[];u(Z)}catch(A){console.error("Ürün yükleme hatası:",A)}finally{d(!1)}}S&&E()},[S]),Y.useEffect(()=>{if(o.length>0&&p.current){const E=window.$;if(E){const A=E(p.current);A.hasClass("owl-loaded")&&A.trigger("destroy.owl.carousel"),A.owlCarousel({autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,autoplaySpeed:1e3,navClass:["ProductListprev","ProductListnext"],nav:!0,lazyLoad:!0,margin:10,responsive:{0:{items:2},576:{items:3},767:{items:4},991:{items:5},1023:{items:6}}})}}},[o]);const v=E=>{const A=E.variantTypeItems?.length||0,F=E.discountRate>0,M=`${E.url}?utm_source=upsell&utm_medium=widget&utm_campaign=category-products`;return f.jsxs("div",{className:"productItem IndirimliUrun yorumyok",children:[f.jsxs("div",{className:"productImage",children:[f.jsx("a",{className:"detailLink detailUrl","data-id":E.productId,title:E.name,href:M,children:f.jsx("img",{"data-resize-target":".productImage",className:"resimOrginal lazyImage entered loaded",src:E.imageThumbPath,"data-original":E.imageThumbPath,alt:E.imageAltTag,"data-ll-status":"loaded"})}),E.relatedProductCount>0&&f.jsx("div",{className:"relatedProductsColor",children:f.jsxs("div",{className:"relatedProductsColorBtn",onClick:k=>{const Z=window.getRelatedProducts;Z&&Z(E.productId,k.currentTarget)},children:[f.jsxs("div",{className:"relatedColorDiv",children:[f.jsx("span",{className:"relatedColor"}),f.jsx("span",{className:"relatedColor"})]}),f.jsx("span",{className:"productRelatedColorCount",children:E.relatedProductCount})]})})]}),f.jsx("div",{className:"productIconWrap",children:f.jsx("div",{className:"productIconLeft",children:F&&f.jsxs("div",{className:"discountIcon tip",children:[f.jsxs("span",{className:"discountIcon_s1",children:["%",E.discountRate]}),f.jsx("span",{className:"discountIcon_s2",children:"İndirim"}),f.jsxs("div",{className:"discountIconDetail",children:["%",E.discountRate," İndirim"]})]})})}),f.jsxs("div",{className:"productDetail videoAutoPlay","data-id":E.productId,"data-variant-id":E.variantId,"data-page":"1","data-category":E.category,"data-category1":E.category,children:[f.jsx("div",{className:"productMarka",style:{display:"none"},children:E.brand}),f.jsx("div",{className:"productName detailUrl","data-id":E.productId,children:f.jsx("a",{title:E.name,href:M,children:E.name})}),f.jsx("div",{className:`productPrice ${F?"IndirimVar":""}`,children:F?f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"discountPrice",children:[f.jsx("span",{className:"discountPriceSpan",children:E.productPriceOriginalStr}),f.jsx("span",{className:"discountKdv",children:"KDV Dahil"})]}),f.jsxs("div",{className:"regularPrice",children:[f.jsx("span",{className:"regularPriceSpan",children:E.productSellPriceStr}),f.jsx("span",{className:"discountKdv",children:"KDV Dahil"})]})]}):f.jsxs("div",{className:"discountPrice",children:[f.jsx("span",{className:"discountPriceSpan",children:E.productSellPriceStr}),f.jsx("span",{className:"discountKdv",children:"KDV Dahil"})]})}),A>0&&f.jsxs("div",{className:"boxUrunlerContent",children:[f.jsx("div",{className:"boxUrunlerTittle"}),f.jsxs("div",{className:"boxUrunlerContainer",children:[E.variantTypeItems?.map(k=>f.jsx("div",{children:f.jsx("a",{className:"boxUrunResimContent",href:"javascript:;",onClick:Z=>{const q=window.GetProductVariantItemImages;q&&q(Z.currentTarget,k.productId,k.url)},children:f.jsx("img",{className:"lazyImage",src:k.imageThumbPath,"data-original":k.imageThumbPath})})},k.productId)),f.jsx("div",{className:"boxUrunlerPlus",children:f.jsxs("a",{href:M,className:"boxUrunlerPlusBtn",children:[f.jsx("i",{className:"far fa-plus"}),f.jsx("span",{children:A})]})})]}),f.jsxs("span",{className:"v-count",children:["+",A]})]})]}),f.jsxs("div",{className:"productIcon",children:[f.jsxs("div",{className:"productEx2",children:[f.jsx("div",{className:"favori favoriContent-5878-0",children:f.jsx("a",{onClick:k=>{const Z=window.productFavoritesProcess;Z&&Z(E.unique,-1,2,E.variantId,0,1,k.currentTarget)},"data-action":"1","data-favoritepopup":"true",className:"favoriteslist listfavoriPasif tip",title:"Favorilere Ekle",children:"Favorilere Ekle"})}),f.jsx("div",{className:"examineIcon tip detailLink",title:"Ürünü İncele",children:f.jsx("a",{href:M,className:"detailUrl","data-id":E.productId,children:"Ürünü İncele"})})]}),f.jsx("div",{className:"productEx",children:f.jsx("div",{className:"mycartIcon tip",title:"Sepete Ekle",children:f.jsx("a",{onClick:k=>{const Z=window.productListAddToCartV2;Z&&Z(E.unique,E.variantId,0,0,1,E.url,0,k.currentTarget)},className:"btnAddToCart","data-productid":E.productId,"data-variantid":"0","data-unique":E.unique,children:f.jsx("span",{className:"urunListeSpanSepeteEkle",children:"Sepete Ekle"})})})})]}),f.jsx("div",{className:"productItemVariantDetail",style:{display:"none"},id:`productListVariantDetail${E.unique}`})]},E.productId)};return!document.body.classList.contains("CategoryBody")||!S||!g.current||c||o.length===0?null:Om.createPortal(f.jsxs("div",{children:[f.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .max-category-head {
          font-size: 20px;
          margin-bottom: 10px;
          letter-spacing: 0.5px;
          text-align: center;
          font-weight: 500;
        }

        @media (max-width: 767px) {
          .max-BestSellingProducts {
            padding: 0 50px;
          }

          .max-category-head {
            font-size: 18px;
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
      `}}),f.jsx("p",{className:"max-category-head",children:"Kategorinin En Çok Satılan Ürünleri"}),f.jsx("div",{ref:p,className:"max-BestSellingProducts owl-carousel owl-theme",children:o.map(E=>v(E))})]}),g.current)},Uy=I.div`
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
`,By=I.div`
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
`,Hy=I.div`
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
`,cp=I.div`
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
`,Ly=I.div`
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
`,fp=I.div`
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
`,qy=I.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background: #ffffff;
  text-align: center;
  overflow: hidden;
  position: relative;
  z-index: 10;
`,dp=I.select`
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
`,hp=I.div`
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
`,pp=I.p`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: left;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`,Yc=I.div`
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
`,Vy=I.p`
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
`,mp=I.div`
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
`,gp=I.div`
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
`,xp=I.div`
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
`,Gy=It`   
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`,Yy=I.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${Gy} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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
`,Xy=({useOneChartForAllProducts:a,forceOpen:r,mainColor:o})=>{const u=Y.useRef(null),[c,d]=Y.useState(r||!1),[p,g]=Y.useState(!1),[S,x]=Y.useState(!1),[v,E]=Y.useState(0),[A,F]=Y.useState(0),[C,M]=Y.useState(),[k,Z]=Y.useState(),[q,K]=Y.useState(),[re,L]=Y.useState(),[te,$]=Y.useState(!1),[le,Ee]=Y.useState();Y.useEffect(()=>{if(g(!0),typeof window<"u"){let P="-1";!a&&window.productDetailModel?.product?.urunKartiId?P=window.productDetailModel.product.urunKartiId.toString():a||(P="1"),qe.get(`https://api.upsell.co/sizechart/byproductcard/${P}`).then(se=>{se.data&&se.data.data&&se.data.data.items?Ee(se.data.data.items):Ee([{chartId:1,id:"1",maxHeight:170,maxWeight:70,minHeight:160,minWeight:50,title:"S"},{chartId:1,id:"2",maxHeight:180,maxWeight:80,minHeight:170,minWeight:65,title:"M"},{chartId:1,id:"3",maxHeight:190,maxWeight:90,minHeight:180,minWeight:75,title:"L"},{chartId:1,id:"4",maxHeight:200,maxWeight:100,minHeight:190,minWeight:85,title:"XL"}])}).catch(se=>{Ee([{chartId:1,id:"1",maxHeight:170,maxWeight:70,minHeight:160,minWeight:50,title:"S"},{chartId:1,id:"2",maxHeight:180,maxWeight:80,minHeight:170,minWeight:65,title:"M"},{chartId:1,id:"3",maxHeight:190,maxWeight:90,minHeight:180,minWeight:75,title:"L"},{chartId:1,id:"4",maxHeight:200,maxWeight:100,minHeight:190,minWeight:85,title:"XL"}])}).finally(()=>{g(!1)})}},[a]);const Ge=()=>{d(!1),$(!1),x(!1),F(0),E(0)};u!==null&&nl(u,Ge),Y.useEffect(()=>(r?d(!0):typeof window<"u"&&(document.getElementById("upsell-ss-sizechart")?.addEventListener("click",()=>{d(!0)}),document.getElementById("upsell-ss-sizechart")&&!le?.filter(P=>window.productDetailModel?.productVariantData?.find(se=>se.tanim===P.title))?document.getElementById("upsell-ss-sizechart").style.display="none":document.getElementById("upsell-ss-sizechart")&&(document.getElementById("upsell-ss-sizechart").style.display="flex")),()=>{document.getElementById("upsell-ss-sizechart")?.removeEventListener("click",()=>{})}),[le]);const Re=()=>{const P=[];return typeof window<"u"&&le?.filter(se=>se.minHeight<=A&&se.maxHeight>=A&&se.minWeight<=v&&se.maxWeight>=v).forEach(se=>{const ve=(window.productDetailModel?.productVariantData||[{tanim:"S"},{tanim:"M"},{tanim:"L"},{tanim:"XL"}]).find(_=>se.title===_.tanim);ve&&P.push(ve)}),P};return Y.useEffect(()=>{Re()},[A,v]),Y.useEffect(()=>{if(le&&le?.length>0){const P=le?.reduce((_,J)=>J.minHeight<_.minHeight?J:_,le?.[0]),se=le?.reduce((_,J)=>J.maxHeight>_.maxHeight?J:_,le?.[0]),ye=le?.reduce((_,J)=>J.minWeight<_.minWeight?J:_,le?.[0]),ve=le?.reduce((_,J)=>J.maxWeight>_.maxWeight?J:_,le?.[0]);M(P),Z(se),K(ye),L(ve)}},[le]),typeof window>"u"?null:f.jsx(f.Fragment,{children:f.jsxs(Uy,{style:{display:!S&&!c?"none":"block"},children:[S&&f.jsxs(By,{mainColor:o,children:[f.jsx(Hy,{onClick:()=>{x(!1)},children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:f.jsx("path",{d:"m12 4-8 8 8 8 .677-.677-6.844-6.844H20v-.958H5.833l6.844-6.844L12 4Z"})})}),f.jsx(cp,{onClick:()=>{Ge()},children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:f.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),f.jsxs(xp,{children:[f.jsx(Sf,{mainColor:o,children:"Beden Öneri Rehberi"}),f.jsx(wf,{mainColor:o,children:"Sizin için en uygun beden:"}),f.jsx(Vy,{children:Re().length>0?f.jsxs(mp,{children:[f.jsx("img",{style:{width:"100%",aspectRatio:"8/12",objectFit:"cover"},src:window.productDetailModel?.productImages?.[0]?.imagePath||"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDIwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik02MCA5MEg2NVY5NUg2MFY5MFpNMTQwIDkwSDE0NVY5NUgxNDBWOTBaIiBmaWxsPSIjOEE5MUE4Ii8+CjxwYXRoIGQ9Ik01NSA4MEgxNTBWMjIwSDU1VjgwWiIgc3Ryb2tlPSIjOEE5MUE4IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz4KPHN2Zz4K",alt:"Ürün Resmi"}),f.jsxs(gp,{children:[f.jsx("span",{children:"SİZİN BEDENİNİZ OLABİLİR"}),Re()[0]?.tanim||"Bulunamadı"]})]}):f.jsxs(mp,{children:[f.jsx("div",{style:{width:"100%",aspectRatio:"8/12",display:"flex",justifyContent:"center",alignItems:"center"},children:f.jsx("svg",{style:{width:"100px"},viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"#e7333c",children:f.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),f.jsxs(gp,{children:[f.jsx("span",{children:"ÖNERİ YAPILAMADI"}),"Üzgünüz,bu özellikler için beden öneremiyoruz."]})]})})]}),f.jsxs(fp,{children:[f.jsx(Yc,{mainColor:o,onClick:()=>{x(!1),F(0),E(0),$(!1)},children:"Baştan Başla"}),f.jsx(Yc,{mainColor:o,isSecondary:!0,onClick:()=>{Ge()},children:"Çıkış Yap"})]})]}),c&&!S&&f.jsxs(Ly,{ref:u,mainColor:o,children:[p&&f.jsx(wr,{children:f.jsxs(Yy,{children:[f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{})]})}),!S&&f.jsxs(f.Fragment,{children:[f.jsx(cp,{onClick:()=>{Ge()},children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit",children:f.jsx("path",{d:"m12 12.707 6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707Z"})})}),f.jsxs(qy,{children:[f.jsxs(xp,{children:[f.jsx(ai,{mainColor:o,children:"Beden Öneri Rehberi"}),f.jsx(Sr,{children:"Ölçülerinizi baz alarak size en uygun bedeni hesaplıyoruz."}),k&&C&&re&&q&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[f.jsxs("div",{children:[f.jsx(pp,{children:"Boyunuzu Girin"}),f.jsxs("div",{style:{position:"relative"},children:[f.jsx(hp,{mainColor:o,children:"CM"}),f.jsxs(dp,{mainColor:o,onChange:P=>{F(Number(P.target.value))},name:"height",id:"height",children:[f.jsx("option",{value:"0",children:"Seçiniz"}),Array.from({length:k?.maxHeight+1-C?.minHeight},(P,se)=>(C?.minHeight+se).toString()).map(P=>f.jsxs("option",{value:P,children:[P," cm"]},P))]})]}),A===0&&te&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Lütfen bir boyunuzu giriniz."})})]}),f.jsxs("div",{children:[f.jsx(pp,{children:"Kilonuzu Girin"}),f.jsxs("div",{style:{position:"relative"},children:[f.jsx(hp,{mainColor:o,children:"KG"}),f.jsxs(dp,{mainColor:o,onChange:P=>{E(Number(P.target.value))},name:"weight",id:"weight",children:[f.jsx("option",{value:"0",children:"Seçiniz"}),Array.from({length:re.maxWeight+1-q.minWeight},(P,se)=>(q.minWeight+se).toString()).map(P=>f.jsxs("option",{value:P,children:[P," kg"]},P))]})]}),!v&&te&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Lütfen kilonuzu giriniz"})})]})]})]}),f.jsxs(fp,{children:[f.jsx(Yc,{mainColor:o,onClick:()=>{$(!0),A&&v&&v!==0&&A!==0&&x(!0)},children:"Devam Et"}),f.jsxs(yo,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})]})]})]})]})})},$y=It`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Zy=It`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Qy=I.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    animation: ${Zy} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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
`,Ky=I.div`
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
    animation: ${$y} 8s linear infinite;
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
`,Jy=({color:a})=>{const[r,o]=Y.useState(null),[u,c]=Y.useState(!1),[d,p]=Y.useState(!1),[g,S]=Y.useState(!1),x=Y.useRef(null);Y.useEffect(()=>{x.current=document.querySelector("#upsell-ss-responsive"),S(!0)},[]);const{register:v,handleSubmit:E,formState:{errors:A}}=vr(),F=E(async M=>{p(!0),c(!1),o(null);try{const Z=(await qe.post("https://api.upsell.co/ticimax/order",{phone:"90"+M.phone})).data;!Z.data||Z.data===null?c(!0):o(Z.data)}catch{c(!0)}finally{p(!1)}}),C=()=>{o(null),c(!1)};return g&&x.current?Om.createPortal(f.jsx(Ky,{mainColor:a,children:f.jsxs(vo,{children:[f.jsx(zf,{mainColor:a}),f.jsx(Af,{mainColor:a}),f.jsx(Tf,{mainColor:a}),d&&f.jsx(wr,{children:f.jsx(Qy,{children:Array.from({length:8}).map((M,k)=>f.jsx("div",{},k))})}),r?f.jsxs(Ii,{children:[f.jsx(ai,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),f.jsxs(vn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş No"}),f.jsx("div",{style:{width:"50%"},children:r.siparisNo||"-"})]}),f.jsxs(vn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş Tarihi"}),f.jsx("div",{style:{width:"50%"},children:new Date(r.siparisTarihi).toLocaleDateString("tr-TR")||"-"})]}),f.jsxs(vn,{children:[f.jsx("div",{style:{width:"50%"},children:"Sipariş Durumu"}),f.jsx("div",{style:{width:"50%"},children:r.siparisDurumu||"-"})]}),f.jsxs(vn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Takip Link"}),f.jsx("div",{style:{width:"50%"},children:r.kargoTakipLink?f.jsx("a",{target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:a||"#e7333c"},href:r.kargoTakipLink,children:"Kargoyu Görüntüle"}):"-"})]}),f.jsxs(vn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Takip No"}),f.jsx("div",{style:{width:"50%"},children:r.kargoTakipNo||"-"})]}),f.jsxs(vn,{children:[f.jsx("div",{style:{width:"50%"},children:"Kargo Firma"}),f.jsx("div",{style:{width:"50%"},children:r.kargoFirmaTanim||"-"})]}),f.jsx("div",{children:f.jsx(hr,{mainColor:a,onClick:C,type:"button",children:"Yeni Sorgu Yap"})})]}):f.jsxs(Ii,{children:[f.jsx(ai,{mainColor:a,children:"Sipariş Durumunu Sorgula"}),f.jsx(Sr,{children:"Siparişinizin kargo takibini yapmak için telefon numaranızı giriniz."}),f.jsxs("form",{onSubmit:F,children:[f.jsx(ka,{mainColor:a,type:"tel",onInput:M=>{M.currentTarget.value=M.currentTarget.value.replace(/[^0-9]/g,"")},...v("phone",{required:"Telefon numarası boş bırakılamaz",pattern:{value:/^5[0-9]{9}$/,message:"Telefon numarası 5 ile başlamalı ve 10 haneli olmalıdır"},validate:M=>/^(\d)\1+$/.test(M)||/^5(\d)\1{8}$/.test(M)||M==="5123456789"||M==="5987654321"?"Geçersiz telefon numarası":!0}),placeholder:"5XXXXXXXXX",maxLength:10}),A.phone&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:A.phone.message})}),f.jsxs(go,{children:[f.jsx(xo,{mainColor:a,...v("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",f.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",rel:"noopener noreferrer",children:"Aydınlatma metni için tıklayın."})]})]}),A.kvkk&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center",marginBottom:"10px"},children:A.kvkk.message})}),u&&f.jsx(Ot,{children:f.jsx("div",{style:{color:"red",fontSize:"14px",textAlign:"center"},children:"Telefon numarası ile eşleşen sipariş bulunamadı."})}),f.jsx("div",{children:f.jsx(hr,{mainColor:a,children:"Sorgula"})})]})]})]})}),x.current):null},Fy=It`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Wy=I.button`
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
`,Iy=I.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 12px 16px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 12px 12px 10px 12px;
  }
`;I.img`
  aspect-ratio: 5/2;
  height: 70px;
  margin: auto;
  object-fit: contain;
  margin-top: 20px;
`;const yp=I.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${a=>a.mainColor||"#333"};
  margin: 0 0 8px 0;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 6px 0;
  }
`;I.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin: 0 0 32px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`;const Py=I.input`
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
`,Xc=I.div`
  color: #e40000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`,ev=I.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 20px 0;
  text-align: left;
`,tv=I.input`
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
`,nv=I.button`
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
`;I.div`
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
`;const av=I.a`
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
`,iv=I.div`
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
`,lv=I.h1`
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
`,vp=I.p`
  text-align: center;
  font-size: 15px;
  line-height: 1.6;
  color: #333;
  width: 100%;
  margin: 8px auto 16px;
  font-weight: 500;
`,rv=I.div`
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
`,sv=I.div`
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
    animation: ${Fy} 8s linear infinite;
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
`,ov=I.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 10px 16px 30px 16px;
  border-radius: 240px 240px 8px 8px;
`;I.div`
  display: flex;
  width: 100%;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 468px) {
    flex-direction: column;
    gap: 0;
  }
`;const uv=I.div`
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
`,cv=I.button`
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
`,fv=I.button`
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
`,dv=I.span`
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
`,hv=({mainColor:a,logo:r,forceOpen:o,showFloatingButton:u=!0})=>{const[c,d]=Y.useState(o||!1),[p,g]=Y.useState(null),[S,x]=Y.useState(""),[v,E]=Y.useState(!1),[A,F]=Y.useState([]),[C,M]=Y.useState(0),[k,Z]=Y.useState(null),[q,K]=Y.useState(!1),[re,L]=Y.useState(0),[te,$]=Y.useState(!1),[le,Ee]=Y.useState(null),[Ge,Re]=Y.useState(!1),[P,se]=Y.useState(!0),[ye,ve]=Y.useState(null),_=Y.useRef(null),{register:J,handleSubmit:fe,formState:{errors:Se}}=vr(),w=()=>{d(!1);const pe=new Date;pe.setDate(pe.getDate()+Number(re));const be="expires="+pe.toUTCString();document.cookie=`upsellGiftWheel=false;${be};path=/`},V=()=>{const pe=localStorage.getItem("upsellGiftWheelPrize");if(!pe)return!0;try{const be=JSON.parse(pe);if(!be.timestamp)return!0;const Be=Date.now(),Le=be.timestamp,xt=24*60*60*1e3;return Be-Le>xt}catch{return!0}},ne=()=>V()?(localStorage.removeItem("upsellGiftWheelPrize"),g(null),ve(null),!0):!1,B=async()=>{if(se(!1),x(""),ne(),(p||ye)&&!V()){E(!0),d(!0);return}const pe=localStorage.getItem("upsellGiftWheelPrize");if(pe&&!V())try{const be=JSON.parse(pe);ve(be),g(be),E(!0),d(!0);return}catch{localStorage.removeItem("upsellGiftWheelPrize")}E(!1),g(null),ve(null),d(!0),A.length===0?bt():setTimeout(()=>{me()},50)};_!==null&&nl(_,()=>w());const oe=async pe=>{try{await navigator.clipboard.writeText(pe),Re(!0),setTimeout(()=>Re(!1),2e3)}catch{}},ue=(pe,be,Be,Le)=>{const xt=Le*Math.PI/180;return{x:pe+Be*Math.cos(xt),y:be+Be*Math.sin(xt)}},xe=(pe,be=4e3)=>{if(!k)return;const Be=Date.now(),Le=C,xt=pe,it=1800,_n=.985,Pt=10;let b=it,j=Le,H=Be;const ie=()=>{const ee=Date.now(),ce=(ee-H)/1e3;H=ee,b*=Math.pow(_n,ce*60);const Ae=b*ce;j+=Ae;const je=Math.min((ee-Be)/be,1),Vt=1-Math.pow(1-je,3),Ht=Math.pow(je,2),ra=j,St=Le+(xt-Le)*Vt,Sn=ra*(1-Ht)+St*Ht;if(k.style.transform=`rotate(${Sn}deg)`,b>500){const Ct=Math.min(b/200,3);k.style.filter=`blur(${Ct}px)`}else k.style.filter="none";if(je<1&&b>Pt){const Ct=requestAnimationFrame(ie);Ee(Ct)}else k.style.transform=`rotate(${xt}deg)`,k.style.filter="none",M(xt),Ee(null),setTimeout(()=>{E(!0)},500)},ae=requestAnimationFrame(ie);Ee(ae)},me=()=>{const pe=document.querySelector(".sectors"),be=document.querySelector(".gift-wheel-texts");if(!pe||!be){setTimeout(()=>{const Be=document.querySelector(".sectors"),Le=document.querySelector(".gift-wheel-texts");Be&&Le&&Ce(Be,Le)},100);return}Ce(pe,be)},Ce=(pe,be)=>{pe.innerHTML="",be.innerHTML="";const Be=200,Le=200,xt=170,it=50,_n=360/A.length;A.forEach((Pt,b)=>{const j=b*_n,H=j+_n,ie=j+_n/2,ae=ue(Be,Le,xt,H),ee=ue(Be,Le,xt,j),ce=ue(Be,Le,it,H),Ae=ue(Be,Le,it,j),je=H-j<=180?0:1,$e=`M${ce.x},${ce.y} L${ae.x},${ae.y} A${xt},${xt} 0 ${je} 0 ${ee.x},${ee.y} L${Ae.x},${Ae.y} A${it},${it} 0 ${je} 1 ${ce.x},${ce.y} Z`,Vt=document.createElementNS("http://www.w3.org/2000/svg","path");Vt.setAttribute("d",$e);const Ht=Pt.color||(b%2===0?a||"#e7333c":"#ffffff");Vt.setAttribute("fill",Ht),Vt.setAttribute("stroke","#fff"),Vt.setAttribute("stroke-width","10"),pe.appendChild(Vt);const ra=(xt+it)/2,St=ue(Be,Le,ra,ie),Ct=(On=>{const Gt=On.split(/\n/),un=[],li=_n/360*2*Math.PI*ra*.8,Vn=Math.floor(li/9);return Vn<=0?Gt:(Gt.forEach(zr=>{const bo=zr.split(/\s+/),Yt=[];let Ke="";bo.forEach(ot=>{const Gn=Ke?`${Ke} ${ot}`:ot;if(ot.length>Vn){Ke&&(Yt.push(Ke),Ke="");for(let sa=0;sa<ot.length;sa+=Vn)Yt.push(ot.substring(sa,sa+Vn))}else Gn.length<=Vn?Ke=Gn:(Ke&&Yt.push(Ke),Ke=ot)}),Ke&&Yt.push(Ke),un.push(...Yt)}),un.length>0?un:[On])})(Pt.text),wt=document.createElementNS("http://www.w3.org/2000/svg","text");wt.setAttribute("x",St.x.toString()),wt.setAttribute("y",St.y.toString()),wt.setAttribute("text-anchor","middle"),wt.setAttribute("dominant-baseline","middle"),wt.setAttribute("font-size","16"),wt.setAttribute("font-weight","700");const qn=On=>{const Gt=On.replace("#",""),un=parseInt(Gt.substr(0,2),16),il=parseInt(Gt.substr(2,2),16),li=parseInt(Gt.substr(4,2),16);return(un*299+il*587+li*114)/1e3>128?"#000":"#fff"},ii=Pt.color?qn(Pt.color):b%2===0?"#fff":"#333";wt.setAttribute("fill",ii),wt.setAttribute("transform",`rotate(${ie} ${St.x} ${St.y})`);const al=18,Er=Ct.length>1?St.y-(Ct.length-1)*al/2:St.y;Ct.forEach((On,Gt)=>{const un=document.createElementNS("http://www.w3.org/2000/svg","tspan");un.setAttribute("x",St.x.toString()),un.setAttribute("y",(Er+Gt*al).toString()),un.textContent=On,wt.appendChild(un)}),be.appendChild(wt)})},at=fe(async pe=>{q||te||(K(!0),$(!0),x(""),await qe.post("https://api.upsell.co/GiftWheel/Spin",{phoneNumber:pe.phone}).then(be=>{const Be=be.data;if(Be.success){const Le=Be.data.sliceIndex;if(typeof Le=="number"&&!isNaN(Le)){const it=360/A.length,b=((360-(Le*it+it/2))%360+360)%360,j=C+360*5+b;k&&(le&&(cancelAnimationFrame(le),Ee(null)),k.style.transformOrigin="200px 200px",k.style.transition="none",k.style.webkitTransition="none",xe(j,4e3)),g(be.data.data),ve(be.data.data);const H={...be.data.data,timestamp:Date.now()};localStorage.setItem("upsellGiftWheelPrize",JSON.stringify(H));const ie=new Date;ie.setDate(ie.getDate()+re);const ae="expires="+ie.toUTCString();document.cookie=`upsellGiftWheel=true;${ae};path=/`}else x("Sunucudan geçersiz veri alındı.")}else x(Be.message)}).catch(()=>{x("Bağlantı hatası oluştu. Lütfen tekrar deneyiniz.")}).finally(()=>{setTimeout(()=>{K(!1),$(!1)},4500)}))}),bt=async()=>{try{const be=(await qe.post("https://api.upsell.co/GiftWheel/Slices",{})).data;be.success?(F(be.data.slices),L(be.data.frequency)):x("Hediye çarkı yüklenemedi.")}catch{x("Bağlantı hatası oluştu. Lütfen tekrar deneyiniz.")}};return Y.useEffect(()=>{bt(),ne()},[]),Y.useEffect(()=>{A.length>0&&c&&setTimeout(()=>{me()},100)},[A,c]),Y.useEffect(()=>{if(k&&!q&&!te){k.style.transition="transform 2s ease-in-out";const be=setInterval(()=>{if(!q&&!te&&k){const Be=C+Math.sin(Date.now()/3e3)*.5;k.style.transform=`rotate(${Be}deg)`}},100);return()=>{clearInterval(be),k&&(k.style.transition="none",k.style.transform=`rotate(${C}deg)`)}}},[k,q,te,C]),Y.useEffect(()=>{if(o)(async()=>{ne();const be=localStorage.getItem("upsellGiftWheelPrize");if(be&&!V()||(p||ye)&&!V()){if(be&&!p&&!ye&&!V())try{const Le=JSON.parse(be);ve(Le),g(Le)}catch{localStorage.removeItem("upsellGiftWheelPrize"),E(!1),g(null),ve(null),d(!0);return}E(!0),d(!0)}else E(!1),g(null),ve(null),d(!0),A.length===0||setTimeout(()=>{me()},50)})();else if(typeof window<"u"){if(document.cookie.split(";").some(be=>be.trim().startsWith("upsellGiftWheel=")))return;const pe=setTimeout(async()=>{ne();const be=localStorage.getItem("upsellGiftWheelPrize");if(be&&!V()||(p||ye)&&!V()){if(be&&!p&&!ye&&!V())try{const Le=JSON.parse(be);ve(Le),g(Le)}catch{localStorage.removeItem("upsellGiftWheelPrize");return}E(!0),d(!0)}else E(!1),g(null),ve(null),d(!0),A.length===0||setTimeout(()=>{me()},50)},6e4);return()=>{clearTimeout(pe)}}},[o]),Y.useEffect(()=>()=>{le&&cancelAnimationFrame(le)},[le]),Y.useEffect(()=>{if(typeof window<"u")if(document.cookie.split(";").some(be=>be.trim().startsWith("upsellGiftWheel=")))se(!1);else{const be=setTimeout(()=>{se(!1)},1e4);return()=>clearTimeout(be)}},[]),f.jsxs(f.Fragment,{children:[u&&!c&&f.jsxs(fv,{mainColor:a,onClick:B,className:P?"pulse":"","aria-label":"Hediye Çarkını Aç",children:[f.jsx(dv,{children:"HEDİYE ÇARKI"}),f.jsx("div",{className:"gift-icon",children:f.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),f.jsx("path",{d:"M12 2 L12 22 M2 12 L22 12",stroke:"currentColor",strokeWidth:"1",opacity:"0.7"}),f.jsx("path",{d:"M5.64 5.64 L18.36 18.36 M18.36 5.64 L5.64 18.36",stroke:"currentColor",strokeWidth:"1",opacity:"0.7"}),f.jsx("circle",{cx:"12",cy:"12",r:"3",fill:"currentColor"}),f.jsx("path",{d:"M12 2 L14 6 L10 6 Z",fill:"currentColor"})]})})]}),f.jsx(rv,{style:{display:c?"block":"none"},children:c&&f.jsxs(sv,{ref:_,mainColor:a,children:[f.jsx(Wy,{onClick:w,children:f.jsx("span",{style:{color:"#000",float:"right",fontSize:"35px"},children:"×"})}),f.jsxs(ov,{children:[f.jsx(zf,{mainColor:a}),f.jsx(Af,{mainColor:a}),f.jsx(Tf,{mainColor:a}),f.jsxs(Iy,{children:[f.jsx("div",{className:"gift-wheel",style:{marginBottom:"16px",position:"relative",display:v?"none":"flex",justifyContent:"center",cursor:q?"not-allowed":"pointer",transition:"all 0.3s ease",transform:q?"scale(1.02)":"scale(1)",minHeight:A.length===0?"320px":"auto",alignItems:"center"},children:A.length===0?f.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px",color:"#666",fontSize:"16px"},children:[S?f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{fontSize:"48px"},children:"⚠️"}),f.jsx("span",{style:{color:"#e40000",textAlign:"center"},children:S}),f.jsx("button",{onClick:()=>{x(""),bt()},style:{padding:"8px 16px",background:a||"#e7333c",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"Tekrar Dene"})]}):f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{width:"40px",height:"40px",border:`3px solid ${a||"#e7333c"}20`,borderTop:`3px solid ${a||"#e7333c"}`,borderRadius:"50%",animation:"spin 1s linear infinite"}}),f.jsx("span",{children:"Hediye çarkı yükleniyor..."})]}),f.jsx("style",{children:`
                        @keyframes spin {
                          0% { transform: rotate(0deg); }
                          100% { transform: rotate(360deg); }
                        }
                      `})]}):f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",style:{width:"min(320px, 90vw)",height:"min(320px, 90vw)",maxWidth:"100%",pointerEvents:q?"none":"auto",filter:"drop-shadow(0 8px 25px rgba(0,0,0,0.15))",transition:"filter 0.3s ease"},children:[f.jsx("circle",{cx:"200",cy:"200",r:"190",fill:"none",stroke:"rgba(0,0,0,0.1)",strokeWidth:"8"}),f.jsxs("g",{className:"wheel",ref:pe=>Z(pe),id:"wheel",style:{transformOrigin:"200px 200px"},children:[f.jsx("g",{className:"sectors"}),f.jsx("g",{className:"gift-wheel-texts",style:{fill:"#fff",fontSize:"16px",fontWeight:700,textAnchor:"middle"}})]}),f.jsx("circle",{cx:"200",cy:"200",r:"180",fill:"none",stroke:a||"#e7333c",strokeWidth:"6"}),f.jsx("circle",{cx:"200",cy:"200",r:"170",fill:"none",stroke:"#ffffff",strokeWidth:"2"}),f.jsx("circle",{cx:"200",cy:"200",r:"45",fill:"#ffffff",stroke:a||"#e7333c",strokeWidth:"3"}),r&&f.jsx("image",{href:r,x:"170",y:"170",width:"60",height:"60",style:{objectFit:"contain"}}),f.jsx("g",{transform:"translate(200, 200)",children:f.jsx("g",{transform:"rotate(0) translate(185, 0)",children:f.jsx("polygon",{points:"-15,0 0,12 15,0 0,-12",fill:a||"#e7333c",stroke:"#ffffff",strokeWidth:"2",style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.3))"}})})})]})}),v&&f.jsxs(iv,{children:[f.jsx(yp,{mainColor:a,children:"🎊 Tebrikler! Hediye Çarkından Kazandınız! 🎁"}),f.jsxs(lv,{mainColor:a,children:[f.jsxs("strong",{children:[p.validDayCount," gün"]})," geçerli"," ",f.jsxs("strong",{children:[p.discountValue.toFixed(2),p.discountType===1?" TL":"%"]})," ","indirim kuponu kazandınız!"]}),Number(p.minCartAmount)>0&&f.jsxs(vp,{style:{marginTop:"8px",marginBottom:"8px",fontSize:"14px",color:"#666",fontWeight:600},children:["Minimum sepet tutarı:"," ",f.jsxs("strong",{style:{color:a||"#e7333c"},children:[Number(p.minCartAmount).toFixed(2)," TL"]})]}),f.jsx(vp,{children:"Kupon kodunuzu kopyalayın ve alışverişinizde kullanın"}),f.jsx(uv,{children:p.couponCode}),f.jsx(cv,{mainColor:a,className:Ge?"copied":"",onClick:()=>oe(p.couponCode),children:Ge?"Kopyalandı!":"Kodu Kopyala"})]}),!v&&f.jsxs(f.Fragment,{children:[f.jsx(yp,{mainColor:a,children:"Hediye Çarkı"}),f.jsxs("form",{style:{display:"flex",flexDirection:"column",width:"90%",margin:"0 auto"},onSubmit:pe=>at(pe),children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1},children:[f.jsx(Py,{mainColor:a,type:"tel",onInput:pe=>{pe.currentTarget.value=pe.currentTarget.value.replace(/[^0-9]/g,"")},...J("phone",{required:"Telefon boş bırakılamaz",pattern:{value:/^5[0-9]{9}$/,message:"Telefon numarası 5 ile başlamalı ve 10 haneli olmalıdır"},validate:pe=>/^(\d)\1+$/.test(pe)||/^5(\d)\1{8}$/.test(pe)||pe==="5123456789"||pe==="5987654321"?"Geçersiz telefon numarası":!0}),placeholder:"5XXXXXXXXX",maxLength:10}),Se.phone&&f.jsx(Xc,{children:Se?.phone?.message?.toString()??null})]}),f.jsxs(ev,{children:[f.jsx(tv,{mainColor:a,...J("kvkk",{required:"Lütfen bilgilerinizi paylaşmak için onay veriniz"}),type:"checkbox"}),f.jsxs("p",{style:{fontSize:"13px",lineHeight:"1.4",margin:0,color:"#666"},children:["Kampanya, duyuru ve bilgilendirmelerden E-Posta, WhatsApp ve SMS yoluyla haberdar olmak istediğimi belirtiyorum."," ",f.jsx("a",{style:{color:a||"#e7333c",textDecoration:"underline",fontWeight:"500"},id:"kvkkLink",href:"/UyelikSozlesme.aspx?sozlemeTipi=5",target:"_blank",children:"Aydınlatma metni için tıklayın"}),"."]})]}),Se.kvkk&&f.jsx(Xc,{children:Se?.kvkk?.message?.toString()??null}),S&&f.jsx(Xc,{children:S}),f.jsx("div",{style:{marginTop:"4px"},children:f.jsx(nv,{mainColor:a,disabled:q||te,style:{opacity:q||te?.6:1,cursor:q||te?"not-allowed":"pointer"},children:q?"Çark Dönüyor...":"Çarkı Çevir"})})]})]})]})]}),f.jsxs(av,{target:"_blank",href:"https://upsell.co/",children:[f.jsxs("svg",{style:{height:"20px"},id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 368.41 140.39",children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m59.4,71.7c0,7.8-1.98,13.78-5.92,17.92-3.95,4.15-9.28,6.22-15.97,6.22-6,0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0,11.7,3.07,20.53,9.22,26.47,6.15,5.95,14.57,8.93,25.27,8.93,5.2,0,10.05-.97,14.55-2.92,4.5-1.95,8.25-4.73,11.25-8.32v10.2h17.85V31.2h-18.75v40.5Z"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"320.84",width:"18.75",height:"111.3"}),f.jsx("rect",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},x:"349.65",width:"18.75",height:"111.3"}),f.jsxs("g",{children:[f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m179.44,110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69,2.46,8.12,4.43,13.29,5.91,5.17,1.49,10.27,2.23,15.29,2.23,11.47,0,17.21-3.02,17.21-9.07,0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9,0-7.78,3.25-14,9.76-18.67,4.05-2.9,8.99-4.9,14.82-6h-60.03c-5.5,0-10.53.95-15.08,2.85-4.55,1.9-8.38,4.75-11.47,8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3,7.2,14.85,10.8,25.65,10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62Zm-33.28-21.33c-4.45,4.6-10.12,6.9-17.02,6.9-4.5,0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4,3.15-13.2c2.1-3.8,4.95-6.72,8.55-8.77,3.6-2.05,7.65-3.08,12.15-3.08,6.9,0,12.57,2.3,17.02,6.9,4.45,4.6,6.68,10.65,6.68,18.15s-2.23,13.55-6.68,18.15Z"}),f.jsx("path",{className:"cls-1",style:{fill:"#e7333c",strokeWidth:"0px"},d:"m313.22,71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26,3.22.56,4.83.93,5.63,1.28,10.24,3,13.83,5.15l-7.37,14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63,0-9.91.85-12.83,2.54-2.92,1.69-4.38,3.92-4.38,6.68,0,3.07,1.56,5.25,4.69,6.53,3.12,1.28,7.96,2.48,14.52,3.61,6.55,1.03,11.93,2.2,16.13,3.53,4.2,1.33,7.81,3.59,10.83,6.76,3.02,3.18,4.53,7.68,4.53,13.52,0,7.68-3.33,13.83-9.99,18.44-4.14,2.86-9.21,4.83-15.2,5.92h64.63c6.9,0,13.1-1.1,18.6-3.3,5.5-2.2,10.05-5.45,13.65-9.75l-10.05-11.55c-5.7,5.8-12.95,8.7-21.75,8.7-6.9,0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55Zm-63.3-6.9c.9-5.9,3.43-10.62,7.58-14.17,4.15-3.55,9.22-5.32,15.22-5.32s11.2,1.8,15.3,5.4c4.1,3.6,6.55,8.3,7.35,14.1h-45.45Z"})]})]}),"tarafından geliştirilmiştir."]})]})})]})},pv=It`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,mv=I.div`
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
    animation: ${pv} 8s linear infinite;
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
`,gv=I.div`
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
`;It`
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;const xv=It`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-10px) scale(0.9);
  }
`,bp=I.div`
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
    animation: ${xv} 0.6s ease-out;
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
`,yv=({mainColor:a,forceOpen:r})=>{const[o,u]=Y.useState([]),[c,d]=Y.useState(!1),[p,g]=Y.useState(0),[S,x]=Y.useState(r||!1),[v,E]=Y.useState("50px"),[A,F]=Y.useState(null),[C,M]=Y.useState(null);return Y.useEffect(()=>{if(!document.querySelector(".ProductBody")){x(!1);return}x(r||!0)},[r]),Y.useEffect(()=>{async function k(){if(typeof window<"u"){const Z=window.productDetailModel;let q=null;if(Z&&Z.productId?q=Z.productId:q="1",q){d(!0);try{const K=await qe.post("https://api.upsell.co/ProductStat/"+q,{},{headers:{"Content-Type":"application/json","Content-Length":"2"}});K.data&&K.data.data&&K.data.data.length>0?u(K.data.data):u([{text:"Son 24 saatte 15 kişi bu ürünü satın aldı",icon:"shopping-cart"},{text:"Bu ürünü 8 kişi favorilerine ekledi",icon:"heart"},{text:"Son 1 saatte 3 kişi bu ürünü görüntüledi",icon:"eye"},{text:"Bu ürün 12 kez sepete eklendi",icon:"plus-circle"}])}catch{u([{text:"Son 24 saatte 15 kişi bu ürünü satın aldı",icon:"shopping-cart"},{text:"Bu ürünü 8 kişi favorilerine ekledi",icon:"heart"},{text:"Son 1 saatte 3 kişi bu ürünü görüntüledi",icon:"eye"},{text:"Bu ürün 12 kez sepete eklendi",icon:"plus-circle"}])}finally{d(!1)}}}}k()},[]),Y.useEffect(()=>{o.length>0&&A===null&&F(o[0])},[o,A]),Y.useEffect(()=>{if(o.length>0){const k=setInterval(()=>{g(Z=>(Z+1)%o.length)},4e3);return()=>clearInterval(k)}},[o]),Y.useEffect(()=>{if(o.length>0){M(A),F(o[p]);const k=setTimeout(()=>{M(null)},500);return()=>clearTimeout(k)}},[p,o]),Y.useEffect(()=>{r&&x(!0)},[r]),Y.useEffect(()=>{if(!r){const k=setTimeout(()=>{x(!0)},4e3);return()=>clearTimeout(k)}},[r]),Y.useEffect(()=>{const k=()=>{const Z=window.innerWidth<=768,q=Z?"80px":"50px",K=Z?"155px":"125px";E(window.scrollY>1e3?K:q)};return k(),window.addEventListener("scroll",k),window.addEventListener("resize",k),()=>{window.removeEventListener("scroll",k),window.removeEventListener("resize",k)}},[]),c||o.length===0?null:f.jsx(mv,{id:"social-proof-wrapper",open:S,bottom:v,mainColor:a,children:f.jsxs(gv,{children:[C&&f.jsxs(bp,{className:"previous",mainColor:a,children:[f.jsx("i",{className:`fa fa-${C.icon}`})," ",C.text]}),A&&f.jsxs(bp,{className:"active",mainColor:a,children:[f.jsx("i",{className:`fa fa-${A.icon}`})," ",A.text]})]})})};function vv(){const[a,r]=Y.useState(),[o,u]=Y.useState(!1);return Y.useEffect(()=>{async function c(){u(!0);try{const d=document.querySelector(".ProductBody")!==null,p=await qe.get("https://api.upsell.co/Shops");if(p.data&&p.data.success&&p.data.data){const g=p.data.data;r({mainColor:g.mainColor||"#e7333c",logo:g.logo||"",enabledPhoneSubscription:g.enabledPhoneSubscription||!1,enabledEmailSubscription:g.enabledEmailSubscription||!1,enabledGiftWheel:g.enabledGiftWheel||!1,enabledProductStat:(g.enabledProductStat||!1)&&d,enabledOrderCheck:g.enabledOrderCheck||!1,enabledWeeklyProducts:g.enabledWeeklyProducts||!1,enabledStockReminder:g.enabledStockReminder||!1,enabledSizeChart:g.enabledSizeChart||!1,enabledCategoryProducts:g.enabledCategoryProducts||!1,useOneChartForAllProducts:g.useOneChartForAllProducts||!1,stockReminderUsageChannel:g.stockReminderUsageChannel||1})}else console.error("API'den geçersiz veri formatı geldi")}catch(d){console.error("API çağrısı başarısız:",d)}finally{u(!1)}}c()},[]),Y.useEffect(()=>{const c=new URLSearchParams(window.location.search),d=c.get("utm_source"),p=c.get("utm_medium"),g=c.get("utm_campaign");if(!(d==="upsell"))return;const x="uvid",v=localStorage.getItem(x),E=v||crypto.randomUUID();v||localStorage.setItem(x,E),qe.post("https://api.upsell.co/Tracking/CreateVisitor",{visitorId:E,path:window.location.pathname,productId:String(window.productDetailModel?.product.urunKartiId),utm:{source:d,medium:p,campaign:g}}).catch(()=>{})},[]),Y.useEffect(()=>{const c="uvid",d=localStorage.getItem(c);if(!d)return;const p=window,g=p.orderCompletedModel,S=p.checkout_order,x=g?.orderId??S?.id??S?.orderId??null;x&&qe.post("https://api.upsell.co/Tracking/MatchOrder",{visitorId:d,orderId:String(x)}).then(()=>{localStorage.removeItem(c)}).catch(()=>{})},[]),o?f.jsx("div",{children:"Yükleniyor..."}):a?a.mainColor?a.logo?f.jsxs(f.Fragment,{children:[a.enabledCategoryProducts&&f.jsx(My,{}),a.enabledWeeklyProducts&&f.jsx(Sy,{mainColor:a.mainColor}),(a.enabledPhoneSubscription||a.enabledEmailSubscription)&&f.jsx(ty,{mainColor:a.mainColor,enabledPhoneSubscription:a.enabledPhoneSubscription,enabledEmailSubscription:a.enabledEmailSubscription}),a.enabledGiftWheel&&f.jsx(hv,{mainColor:a.mainColor}),a.enabledProductStat&&f.jsx(yv,{mainColor:a.mainColor}),a.enabledOrderCheck&&f.jsxs(f.Fragment,{children:[f.jsx(Ty,{color:a.mainColor}),f.jsx(Jy,{})]}),a.enabledStockReminder&&f.jsx(Ny,{mainColor:a.mainColor,stockReminderUsageChannel:a.stockReminderUsageChannel}),a.enabledSizeChart&&a.useOneChartForAllProducts!==void 0&&f.jsx(Xy,{useOneChartForAllProducts:a.useOneChartForAllProducts})]}):f.jsx("div",{children:"Mağaza logo bilgisi eksik"}):f.jsx("div",{children:"Mağaza renk bilgisi eksik"}):f.jsx("div",{children:"Mağaza bilgileri yüklenemedi"})}const Sp=document.getElementById("upsell-style");Sp&&Fx.createRoot(Sp).render(f.jsx(vv,{}));
