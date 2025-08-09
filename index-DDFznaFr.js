(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) l(c);
  new MutationObserver((c) => {
    for (const f of c)
      if (f.type === "childList")
        for (const p of f.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && l(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(c) {
    const f = {};
    return (
      c.integrity && (f.integrity = c.integrity),
      c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    );
  }
  function l(c) {
    if (c.ep) return;
    c.ep = !0;
    const f = s(c);
    fetch(c.href, f);
  }
})();
var Eo =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function tg(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Ju = { exports: {} },
  Ki = {},
  Zu = { exports: {} },
  Oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zd;
function ng() {
  if (zd) return Oe;
  zd = 1;
  var n = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    f = Symbol.for("react.provider"),
    p = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    x = Symbol.for("react.memo"),
    S = Symbol.for("react.lazy"),
    E = Symbol.iterator;
  function A(k) {
    return k === null || typeof k != "object"
      ? null
      : ((k = (E && k[E]) || k["@@iterator"]),
        typeof k == "function" ? k : null);
  }
  var B = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    F = Object.assign,
    R = {};
  function L(k, j, pe) {
    (this.props = k),
      (this.context = j),
      (this.refs = R),
      (this.updater = pe || B);
  }
  (L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (k, j) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, k, j, "setState");
    }),
    (L.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate");
    });
  function X() {}
  X.prototype = L.prototype;
  function $(k, j, pe) {
    (this.props = k),
      (this.context = j),
      (this.refs = R),
      (this.updater = pe || B);
  }
  var Y = ($.prototype = new X());
  (Y.constructor = $), F(Y, L.prototype), (Y.isPureReactComponent = !0);
  var K = Array.isArray,
    D = Object.prototype.hasOwnProperty,
    W = { current: null },
    Q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ce(k, j, pe) {
    var ye,
      ve = {},
      ge = null,
      ue = null;
    if (j != null)
      for (ye in (j.ref !== void 0 && (ue = j.ref),
      j.key !== void 0 && (ge = "" + j.key),
      j))
        D.call(j, ye) && !Q.hasOwnProperty(ye) && (ve[ye] = j[ye]);
    var he = arguments.length - 2;
    if (he === 1) ve.children = pe;
    else if (1 < he) {
      for (var we = Array(he), Ve = 0; Ve < he; Ve++)
        we[Ve] = arguments[Ve + 2];
      ve.children = we;
    }
    if (k && k.defaultProps)
      for (ye in ((he = k.defaultProps), he))
        ve[ye] === void 0 && (ve[ye] = he[ye]);
    return {
      $$typeof: n,
      type: k,
      key: ge,
      ref: ue,
      props: ve,
      _owner: W.current,
    };
  }
  function _e(k, j) {
    return {
      $$typeof: n,
      type: k.type,
      key: j,
      ref: k.ref,
      props: k.props,
      _owner: k._owner,
    };
  }
  function Ie(k) {
    return typeof k == "object" && k !== null && k.$$typeof === n;
  }
  function je(k) {
    var j = { "=": "=0", ":": "=2" };
    return (
      "$" +
      k.replace(/[=:]/g, function (pe) {
        return j[pe];
      })
    );
  }
  var oe = /\/+/g;
  function ce(k, j) {
    return typeof k == "object" && k !== null && k.key != null
      ? je("" + k.key)
      : j.toString(36);
  }
  function ke(k, j, pe, ye, ve) {
    var ge = typeof k;
    (ge === "undefined" || ge === "boolean") && (k = null);
    var ue = !1;
    if (k === null) ue = !0;
    else
      switch (ge) {
        case "string":
        case "number":
          ue = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case n:
            case i:
              ue = !0;
          }
      }
    if (ue)
      return (
        (ue = k),
        (ve = ve(ue)),
        (k = ye === "" ? "." + ce(ue, 0) : ye),
        K(ve)
          ? ((pe = ""),
            k != null && (pe = k.replace(oe, "$&/") + "/"),
            ke(ve, j, pe, "", function (Ve) {
              return Ve;
            }))
          : ve != null &&
            (Ie(ve) &&
              (ve = _e(
                ve,
                pe +
                  (!ve.key || (ue && ue.key === ve.key)
                    ? ""
                    : ("" + ve.key).replace(oe, "$&/") + "/") +
                  k
              )),
            j.push(ve)),
        1
      );
    if (((ue = 0), (ye = ye === "" ? "." : ye + ":"), K(k)))
      for (var he = 0; he < k.length; he++) {
        ge = k[he];
        var we = ye + ce(ge, he);
        ue += ke(ge, j, pe, we, ve);
      }
    else if (((we = A(k)), typeof we == "function"))
      for (k = we.call(k), he = 0; !(ge = k.next()).done; )
        (ge = ge.value),
          (we = ye + ce(ge, he++)),
          (ue += ke(ge, j, pe, we, ve));
    else if (ge === "object")
      throw (
        ((j = String(k)),
        Error(
          "Objects are not valid as a React child (found: " +
            (j === "[object Object]"
              ? "object with keys {" + Object.keys(k).join(", ") + "}"
              : j) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return ue;
  }
  function Fe(k, j, pe) {
    if (k == null) return k;
    var ye = [],
      ve = 0;
    return (
      ke(k, ye, "", "", function (ge) {
        return j.call(pe, ge, ve++);
      }),
      ye
    );
  }
  function Re(k) {
    if (k._status === -1) {
      var j = k._result;
      (j = j()),
        j.then(
          function (pe) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 1), (k._result = pe));
          },
          function (pe) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 2), (k._result = pe));
          }
        ),
        k._status === -1 && ((k._status = 0), (k._result = j));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var xe = { current: null },
    H = { transition: null },
    ee = {
      ReactCurrentDispatcher: xe,
      ReactCurrentBatchConfig: H,
      ReactCurrentOwner: W,
    };
  function G() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Oe.Children = {
      map: Fe,
      forEach: function (k, j, pe) {
        Fe(
          k,
          function () {
            j.apply(this, arguments);
          },
          pe
        );
      },
      count: function (k) {
        var j = 0;
        return (
          Fe(k, function () {
            j++;
          }),
          j
        );
      },
      toArray: function (k) {
        return (
          Fe(k, function (j) {
            return j;
          }) || []
        );
      },
      only: function (k) {
        if (!Ie(k))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return k;
      },
    }),
    (Oe.Component = L),
    (Oe.Fragment = s),
    (Oe.Profiler = c),
    (Oe.PureComponent = $),
    (Oe.StrictMode = l),
    (Oe.Suspense = v),
    (Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ee),
    (Oe.act = G),
    (Oe.cloneElement = function (k, j, pe) {
      if (k == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            k +
            "."
        );
      var ye = F({}, k.props),
        ve = k.key,
        ge = k.ref,
        ue = k._owner;
      if (j != null) {
        if (
          (j.ref !== void 0 && ((ge = j.ref), (ue = W.current)),
          j.key !== void 0 && (ve = "" + j.key),
          k.type && k.type.defaultProps)
        )
          var he = k.type.defaultProps;
        for (we in j)
          D.call(j, we) &&
            !Q.hasOwnProperty(we) &&
            (ye[we] = j[we] === void 0 && he !== void 0 ? he[we] : j[we]);
      }
      var we = arguments.length - 2;
      if (we === 1) ye.children = pe;
      else if (1 < we) {
        he = Array(we);
        for (var Ve = 0; Ve < we; Ve++) he[Ve] = arguments[Ve + 2];
        ye.children = he;
      }
      return {
        $$typeof: n,
        type: k.type,
        key: ve,
        ref: ge,
        props: ye,
        _owner: ue,
      };
    }),
    (Oe.createContext = function (k) {
      return (
        (k = {
          $$typeof: p,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (k.Provider = { $$typeof: f, _context: k }),
        (k.Consumer = k)
      );
    }),
    (Oe.createElement = Ce),
    (Oe.createFactory = function (k) {
      var j = Ce.bind(null, k);
      return (j.type = k), j;
    }),
    (Oe.createRef = function () {
      return { current: null };
    }),
    (Oe.forwardRef = function (k) {
      return { $$typeof: h, render: k };
    }),
    (Oe.isValidElement = Ie),
    (Oe.lazy = function (k) {
      return { $$typeof: S, _payload: { _status: -1, _result: k }, _init: Re };
    }),
    (Oe.memo = function (k, j) {
      return { $$typeof: x, type: k, compare: j === void 0 ? null : j };
    }),
    (Oe.startTransition = function (k) {
      var j = H.transition;
      H.transition = {};
      try {
        k();
      } finally {
        H.transition = j;
      }
    }),
    (Oe.unstable_act = G),
    (Oe.useCallback = function (k, j) {
      return xe.current.useCallback(k, j);
    }),
    (Oe.useContext = function (k) {
      return xe.current.useContext(k);
    }),
    (Oe.useDebugValue = function () {}),
    (Oe.useDeferredValue = function (k) {
      return xe.current.useDeferredValue(k);
    }),
    (Oe.useEffect = function (k, j) {
      return xe.current.useEffect(k, j);
    }),
    (Oe.useId = function () {
      return xe.current.useId();
    }),
    (Oe.useImperativeHandle = function (k, j, pe) {
      return xe.current.useImperativeHandle(k, j, pe);
    }),
    (Oe.useInsertionEffect = function (k, j) {
      return xe.current.useInsertionEffect(k, j);
    }),
    (Oe.useLayoutEffect = function (k, j) {
      return xe.current.useLayoutEffect(k, j);
    }),
    (Oe.useMemo = function (k, j) {
      return xe.current.useMemo(k, j);
    }),
    (Oe.useReducer = function (k, j, pe) {
      return xe.current.useReducer(k, j, pe);
    }),
    (Oe.useRef = function (k) {
      return xe.current.useRef(k);
    }),
    (Oe.useState = function (k) {
      return xe.current.useState(k);
    }),
    (Oe.useSyncExternalStore = function (k, j, pe) {
      return xe.current.useSyncExternalStore(k, j, pe);
    }),
    (Oe.useTransition = function () {
      return xe.current.useTransition();
    }),
    (Oe.version = "18.3.1"),
    Oe
  );
}
var Id;
function La() {
  return Id || ((Id = 1), (Zu.exports = ng())), Zu.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Md;
function rg() {
  if (Md) return Ki;
  Md = 1;
  var n = La(),
    i = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(h, v, x) {
    var S,
      E = {},
      A = null,
      B = null;
    x !== void 0 && (A = "" + x),
      v.key !== void 0 && (A = "" + v.key),
      v.ref !== void 0 && (B = v.ref);
    for (S in v) l.call(v, S) && !f.hasOwnProperty(S) && (E[S] = v[S]);
    if (h && h.defaultProps)
      for (S in ((v = h.defaultProps), v)) E[S] === void 0 && (E[S] = v[S]);
    return {
      $$typeof: i,
      type: h,
      key: A,
      ref: B,
      props: E,
      _owner: c.current,
    };
  }
  return (Ki.Fragment = s), (Ki.jsx = p), (Ki.jsxs = p), Ki;
}
var $d;
function ig() {
  return $d || (($d = 1), (Ju.exports = rg())), Ju.exports;
}
var z = ig(),
  Me = La();
const ae = tg(Me);
var Co = {},
  ea = { exports: {} },
  At = {},
  ta = { exports: {} },
  na = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ud;
function sg() {
  return (
    Ud ||
      ((Ud = 1),
      (function (n) {
        function i(H, ee) {
          var G = H.length;
          H.push(ee);
          e: for (; 0 < G; ) {
            var k = (G - 1) >>> 1,
              j = H[k];
            if (0 < c(j, ee)) (H[k] = ee), (H[G] = j), (G = k);
            else break e;
          }
        }
        function s(H) {
          return H.length === 0 ? null : H[0];
        }
        function l(H) {
          if (H.length === 0) return null;
          var ee = H[0],
            G = H.pop();
          if (G !== ee) {
            H[0] = G;
            e: for (var k = 0, j = H.length, pe = j >>> 1; k < pe; ) {
              var ye = 2 * (k + 1) - 1,
                ve = H[ye],
                ge = ye + 1,
                ue = H[ge];
              if (0 > c(ve, G))
                ge < j && 0 > c(ue, ve)
                  ? ((H[k] = ue), (H[ge] = G), (k = ge))
                  : ((H[k] = ve), (H[ye] = G), (k = ye));
              else if (ge < j && 0 > c(ue, G))
                (H[k] = ue), (H[ge] = G), (k = ge);
              else break e;
            }
          }
          return ee;
        }
        function c(H, ee) {
          var G = H.sortIndex - ee.sortIndex;
          return G !== 0 ? G : H.id - ee.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var f = performance;
          n.unstable_now = function () {
            return f.now();
          };
        } else {
          var p = Date,
            h = p.now();
          n.unstable_now = function () {
            return p.now() - h;
          };
        }
        var v = [],
          x = [],
          S = 1,
          E = null,
          A = 3,
          B = !1,
          F = !1,
          R = !1,
          L = typeof setTimeout == "function" ? setTimeout : null,
          X = typeof clearTimeout == "function" ? clearTimeout : null,
          $ = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Y(H) {
          for (var ee = s(x); ee !== null; ) {
            if (ee.callback === null) l(x);
            else if (ee.startTime <= H)
              l(x), (ee.sortIndex = ee.expirationTime), i(v, ee);
            else break;
            ee = s(x);
          }
        }
        function K(H) {
          if (((R = !1), Y(H), !F))
            if (s(v) !== null) (F = !0), Re(D);
            else {
              var ee = s(x);
              ee !== null && xe(K, ee.startTime - H);
            }
        }
        function D(H, ee) {
          (F = !1), R && ((R = !1), X(Ce), (Ce = -1)), (B = !0);
          var G = A;
          try {
            for (
              Y(ee), E = s(v);
              E !== null && (!(E.expirationTime > ee) || (H && !je()));

            ) {
              var k = E.callback;
              if (typeof k == "function") {
                (E.callback = null), (A = E.priorityLevel);
                var j = k(E.expirationTime <= ee);
                (ee = n.unstable_now()),
                  typeof j == "function"
                    ? (E.callback = j)
                    : E === s(v) && l(v),
                  Y(ee);
              } else l(v);
              E = s(v);
            }
            if (E !== null) var pe = !0;
            else {
              var ye = s(x);
              ye !== null && xe(K, ye.startTime - ee), (pe = !1);
            }
            return pe;
          } finally {
            (E = null), (A = G), (B = !1);
          }
        }
        var W = !1,
          Q = null,
          Ce = -1,
          _e = 5,
          Ie = -1;
        function je() {
          return !(n.unstable_now() - Ie < _e);
        }
        function oe() {
          if (Q !== null) {
            var H = n.unstable_now();
            Ie = H;
            var ee = !0;
            try {
              ee = Q(!0, H);
            } finally {
              ee ? ce() : ((W = !1), (Q = null));
            }
          } else W = !1;
        }
        var ce;
        if (typeof $ == "function")
          ce = function () {
            $(oe);
          };
        else if (typeof MessageChannel < "u") {
          var ke = new MessageChannel(),
            Fe = ke.port2;
          (ke.port1.onmessage = oe),
            (ce = function () {
              Fe.postMessage(null);
            });
        } else
          ce = function () {
            L(oe, 0);
          };
        function Re(H) {
          (Q = H), W || ((W = !0), ce());
        }
        function xe(H, ee) {
          Ce = L(function () {
            H(n.unstable_now());
          }, ee);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (H) {
            H.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            F || B || ((F = !0), Re(D));
          }),
          (n.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (_e = 0 < H ? Math.floor(1e3 / H) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return A;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return s(v);
          }),
          (n.unstable_next = function (H) {
            switch (A) {
              case 1:
              case 2:
              case 3:
                var ee = 3;
                break;
              default:
                ee = A;
            }
            var G = A;
            A = ee;
            try {
              return H();
            } finally {
              A = G;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (H, ee) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                H = 3;
            }
            var G = A;
            A = H;
            try {
              return ee();
            } finally {
              A = G;
            }
          }),
          (n.unstable_scheduleCallback = function (H, ee, G) {
            var k = n.unstable_now();
            switch (
              (typeof G == "object" && G !== null
                ? ((G = G.delay),
                  (G = typeof G == "number" && 0 < G ? k + G : k))
                : (G = k),
              H)
            ) {
              case 1:
                var j = -1;
                break;
              case 2:
                j = 250;
                break;
              case 5:
                j = 1073741823;
                break;
              case 4:
                j = 1e4;
                break;
              default:
                j = 5e3;
            }
            return (
              (j = G + j),
              (H = {
                id: S++,
                callback: ee,
                priorityLevel: H,
                startTime: G,
                expirationTime: j,
                sortIndex: -1,
              }),
              G > k
                ? ((H.sortIndex = G),
                  i(x, H),
                  s(v) === null &&
                    H === s(x) &&
                    (R ? (X(Ce), (Ce = -1)) : (R = !0), xe(K, G - k)))
                : ((H.sortIndex = j), i(v, H), F || B || ((F = !0), Re(D))),
              H
            );
          }),
          (n.unstable_shouldYield = je),
          (n.unstable_wrapCallback = function (H) {
            var ee = A;
            return function () {
              var G = A;
              A = ee;
              try {
                return H.apply(this, arguments);
              } finally {
                A = G;
              }
            };
          });
      })(na)),
    na
  );
}
var bd;
function og() {
  return bd || ((bd = 1), (ta.exports = sg())), ta.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bd;
function lg() {
  if (Bd) return At;
  Bd = 1;
  var n = La(),
    i = og();
  function s(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var l = new Set(),
    c = {};
  function f(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
  }
  var h = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    v = Object.prototype.hasOwnProperty,
    x =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    S = {},
    E = {};
  function A(e) {
    return v.call(E, e)
      ? !0
      : v.call(S, e)
      ? !1
      : x.test(e)
      ? (E[e] = !0)
      : ((S[e] = !0), !1);
  }
  function B(e, t, r, o) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function F(e, t, r, o) {
    if (t === null || typeof t > "u" || B(e, t, r, o)) return !0;
    if (o) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function R(e, t, r, o, u, a, d) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = u),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = a),
      (this.removeEmptyString = d);
  }
  var L = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      L[e] = new R(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      L[t] = new R(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      L[e] = new R(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      L[e] = new R(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        L[e] = new R(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      L[e] = new R(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      L[e] = new R(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      L[e] = new R(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      L[e] = new R(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var X = /[\-:]([a-z])/g;
  function $(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(X, $);
      L[t] = new R(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(X, $);
        L[t] = new R(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(X, $);
      L[t] = new R(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      L[e] = new R(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (L.xlinkHref = new R(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      L[e] = new R(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Y(e, t, r, o) {
    var u = L.hasOwnProperty(t) ? L[t] : null;
    (u !== null
      ? u.type !== 0
      : o ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (F(t, r, u, o) && (r = null),
      o || u === null
        ? A(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : u.mustUseProperty
        ? (e[u.propertyName] = r === null ? (u.type === 3 ? !1 : "") : r)
        : ((t = u.attributeName),
          (o = u.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((u = u.type),
              (r = u === 3 || (u === 4 && r === !0) ? "" : "" + r),
              o ? e.setAttributeNS(o, t, r) : e.setAttribute(t, r))));
  }
  var K = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    D = Symbol.for("react.element"),
    W = Symbol.for("react.portal"),
    Q = Symbol.for("react.fragment"),
    Ce = Symbol.for("react.strict_mode"),
    _e = Symbol.for("react.profiler"),
    Ie = Symbol.for("react.provider"),
    je = Symbol.for("react.context"),
    oe = Symbol.for("react.forward_ref"),
    ce = Symbol.for("react.suspense"),
    ke = Symbol.for("react.suspense_list"),
    Fe = Symbol.for("react.memo"),
    Re = Symbol.for("react.lazy"),
    xe = Symbol.for("react.offscreen"),
    H = Symbol.iterator;
  function ee(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (H && e[H]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var G = Object.assign,
    k;
  function j(e) {
    if (k === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        k = (t && t[1]) || "";
      }
    return (
      `
` +
      k +
      e
    );
  }
  var pe = !1;
  function ye(e, t) {
    if (!e || pe) return "";
    pe = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (P) {
            var o = P;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (P) {
            o = P;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (P) {
          o = P;
        }
        e();
      }
    } catch (P) {
      if (P && o && typeof P.stack == "string") {
        for (
          var u = P.stack.split(`
`),
            a = o.stack.split(`
`),
            d = u.length - 1,
            m = a.length - 1;
          1 <= d && 0 <= m && u[d] !== a[m];

        )
          m--;
        for (; 1 <= d && 0 <= m; d--, m--)
          if (u[d] !== a[m]) {
            if (d !== 1 || m !== 1)
              do
                if ((d--, m--, 0 > m || u[d] !== a[m])) {
                  var g =
                    `
` + u[d].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      g.includes("<anonymous>") &&
                      (g = g.replace("<anonymous>", e.displayName)),
                    g
                  );
                }
              while (1 <= d && 0 <= m);
            break;
          }
      }
    } finally {
      (pe = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? j(e) : "";
  }
  function ve(e) {
    switch (e.tag) {
      case 5:
        return j(e.type);
      case 16:
        return j("Lazy");
      case 13:
        return j("Suspense");
      case 19:
        return j("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ye(e.type, !1)), e;
      case 11:
        return (e = ye(e.type.render, !1)), e;
      case 1:
        return (e = ye(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ge(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Q:
        return "Fragment";
      case W:
        return "Portal";
      case _e:
        return "Profiler";
      case Ce:
        return "StrictMode";
      case ce:
        return "Suspense";
      case ke:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case je:
          return (e.displayName || "Context") + ".Consumer";
        case Ie:
          return (e._context.displayName || "Context") + ".Provider";
        case oe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Fe:
          return (
            (t = e.displayName || null), t !== null ? t : ge(e.type) || "Memo"
          );
        case Re:
          (t = e._payload), (e = e._init);
          try {
            return ge(e(t));
          } catch {}
      }
    return null;
  }
  function ue(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ge(t);
      case 8:
        return t === Ce ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function he(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function we(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ve(e) {
    var t = we(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var u = r.get,
        a = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (d) {
            (o = "" + d), a.call(this, d);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (d) {
            o = "" + d;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function qt(e) {
    e._valueTracker || (e._valueTracker = Ve(e));
  }
  function Et(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      o = "";
    return (
      e && (o = we(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function wr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Sr(e, t) {
    var r = t.checked;
    return G({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function ai(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked;
    (r = he(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: o,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function hs(e, t) {
    (t = t.checked), t != null && Y(e, "checked", t, !1);
  }
  function ci(e, t) {
    hs(e, t);
    var r = he(t.value),
      o = t.type;
    if (r != null)
      o === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (o === "submit" || o === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? kr(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && kr(e, t.type, he(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function cl(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var o = t.type;
      if (
        !(
          (o !== "submit" && o !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
  }
  function kr(e, t, r) {
    (t !== "number" || wr(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var y = Array.isArray;
  function _(e, t, r, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < r.length; u++) t["$" + r[u]] = !0;
      for (r = 0; r < e.length; r++)
        (u = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== u && (e[r].selected = u),
          u && o && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + he(r), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === r) {
          (e[u].selected = !0), o && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function N(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return G({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function J(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(s(92));
        if (y(r)) {
          if (1 < r.length) throw Error(s(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: he(r) };
  }
  function q(e, t) {
    var r = he(t.value),
      o = he(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      o != null && (e.defaultValue = "" + o);
  }
  function V(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function le(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Pe(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? le(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Ne,
    wt = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, o, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, o, u);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ne = Ne || document.createElement("div"),
            Ne.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ne.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function on(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ct = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    fl = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ct).forEach(function (e) {
    fl.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ct[t] = Ct[e]);
    });
  });
  function xr(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Ct.hasOwnProperty(e) && Ct[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Er(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = r.indexOf("--") === 0,
          u = xr(r, t[r], o);
        r === "float" && (r = "cssFloat"), o ? e.setProperty(r, u) : (e[r] = u);
      }
  }
  var dl = G(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Cr(e, t) {
    if (t) {
      if (dl[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function fi(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var _r = null;
  function pl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var hl = null,
    Or = null,
    Rr = null;
  function Ja(e) {
    if ((e = Li(e))) {
      if (typeof hl != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = Is(t)), hl(e.stateNode, e.type, t));
    }
  }
  function Za(e) {
    Or ? (Rr ? Rr.push(e) : (Rr = [e])) : (Or = e);
  }
  function ec() {
    if (Or) {
      var e = Or,
        t = Rr;
      if (((Rr = Or = null), Ja(e), t)) for (e = 0; e < t.length; e++) Ja(t[e]);
    }
  }
  function tc(e, t) {
    return e(t);
  }
  function nc() {}
  var ml = !1;
  function rc(e, t, r) {
    if (ml) return e(t, r);
    ml = !0;
    try {
      return tc(e, t, r);
    } finally {
      (ml = !1), (Or !== null || Rr !== null) && (nc(), ec());
    }
  }
  function di(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var o = Is(r);
    if (o === null) return null;
    r = o[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) ||
          ((e = e.type),
          (o = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !o);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(s(231, t, typeof r));
    return r;
  }
  var yl = !1;
  if (h)
    try {
      var pi = {};
      Object.defineProperty(pi, "passive", {
        get: function () {
          yl = !0;
        },
      }),
        window.addEventListener("test", pi, pi),
        window.removeEventListener("test", pi, pi);
    } catch {
      yl = !1;
    }
  function lm(e, t, r, o, u, a, d, m, g) {
    var P = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, P);
    } catch (M) {
      this.onError(M);
    }
  }
  var hi = !1,
    ms = null,
    ys = !1,
    gl = null,
    um = {
      onError: function (e) {
        (hi = !0), (ms = e);
      },
    };
  function am(e, t, r, o, u, a, d, m, g) {
    (hi = !1), (ms = null), lm.apply(um, arguments);
  }
  function cm(e, t, r, o, u, a, d, m, g) {
    if ((am.apply(this, arguments), hi)) {
      if (hi) {
        var P = ms;
        (hi = !1), (ms = null);
      } else throw Error(s(198));
      ys || ((ys = !0), (gl = P));
    }
  }
  function Gn(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function ic(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function sc(e) {
    if (Gn(e) !== e) throw Error(s(188));
  }
  function fm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Gn(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var r = e, o = t; ; ) {
      var u = r.return;
      if (u === null) break;
      var a = u.alternate;
      if (a === null) {
        if (((o = u.return), o !== null)) {
          r = o;
          continue;
        }
        break;
      }
      if (u.child === a.child) {
        for (a = u.child; a; ) {
          if (a === r) return sc(u), e;
          if (a === o) return sc(u), t;
          a = a.sibling;
        }
        throw Error(s(188));
      }
      if (r.return !== o.return) (r = u), (o = a);
      else {
        for (var d = !1, m = u.child; m; ) {
          if (m === r) {
            (d = !0), (r = u), (o = a);
            break;
          }
          if (m === o) {
            (d = !0), (o = u), (r = a);
            break;
          }
          m = m.sibling;
        }
        if (!d) {
          for (m = a.child; m; ) {
            if (m === r) {
              (d = !0), (r = a), (o = u);
              break;
            }
            if (m === o) {
              (d = !0), (o = a), (r = u);
              break;
            }
            m = m.sibling;
          }
          if (!d) throw Error(s(189));
        }
      }
      if (r.alternate !== o) throw Error(s(190));
    }
    if (r.tag !== 3) throw Error(s(188));
    return r.stateNode.current === r ? e : t;
  }
  function oc(e) {
    return (e = fm(e)), e !== null ? lc(e) : null;
  }
  function lc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = lc(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var uc = i.unstable_scheduleCallback,
    ac = i.unstable_cancelCallback,
    dm = i.unstable_shouldYield,
    pm = i.unstable_requestPaint,
    Ge = i.unstable_now,
    hm = i.unstable_getCurrentPriorityLevel,
    vl = i.unstable_ImmediatePriority,
    cc = i.unstable_UserBlockingPriority,
    gs = i.unstable_NormalPriority,
    mm = i.unstable_LowPriority,
    fc = i.unstable_IdlePriority,
    vs = null,
    ln = null;
  function ym(e) {
    if (ln && typeof ln.onCommitFiberRoot == "function")
      try {
        ln.onCommitFiberRoot(vs, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Kt = Math.clz32 ? Math.clz32 : wm,
    gm = Math.log,
    vm = Math.LN2;
  function wm(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((gm(e) / vm) | 0)) | 0;
  }
  var ws = 64,
    Ss = 4194304;
  function mi(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ks(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var o = 0,
      u = e.suspendedLanes,
      a = e.pingedLanes,
      d = r & 268435455;
    if (d !== 0) {
      var m = d & ~u;
      m !== 0 ? (o = mi(m)) : ((a &= d), a !== 0 && (o = mi(a)));
    } else (d = r & ~u), d !== 0 ? (o = mi(d)) : a !== 0 && (o = mi(a));
    if (o === 0) return 0;
    if (
      t !== 0 &&
      t !== o &&
      (t & u) === 0 &&
      ((u = o & -o), (a = t & -t), u >= a || (u === 16 && (a & 4194240) !== 0))
    )
      return t;
    if (((o & 4) !== 0 && (o |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= o; 0 < t; )
        (r = 31 - Kt(t)), (u = 1 << r), (o |= e[r]), (t &= ~u);
    return o;
  }
  function Sm(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function km(e, t) {
    for (
      var r = e.suspendedLanes,
        o = e.pingedLanes,
        u = e.expirationTimes,
        a = e.pendingLanes;
      0 < a;

    ) {
      var d = 31 - Kt(a),
        m = 1 << d,
        g = u[d];
      g === -1
        ? ((m & r) === 0 || (m & o) !== 0) && (u[d] = Sm(m, t))
        : g <= t && (e.expiredLanes |= m),
        (a &= ~m);
    }
  }
  function wl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function dc() {
    var e = ws;
    return (ws <<= 1), (ws & 4194240) === 0 && (ws = 64), e;
  }
  function Sl(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function yi(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Kt(t)),
      (e[t] = r);
  }
  function xm(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var u = 31 - Kt(r),
        a = 1 << u;
      (t[u] = 0), (o[u] = -1), (e[u] = -1), (r &= ~a);
    }
  }
  function kl(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var o = 31 - Kt(r),
        u = 1 << o;
      (u & t) | (e[o] & t) && (e[o] |= t), (r &= ~u);
    }
  }
  var ze = 0;
  function pc(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var hc,
    xl,
    mc,
    yc,
    gc,
    El = !1,
    xs = [],
    Rn = null,
    Pn = null,
    Tn = null,
    gi = new Map(),
    vi = new Map(),
    An = [],
    Em =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function vc(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Rn = null;
        break;
      case "dragenter":
      case "dragleave":
        Pn = null;
        break;
      case "mouseover":
      case "mouseout":
        Tn = null;
        break;
      case "pointerover":
      case "pointerout":
        gi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        vi.delete(t.pointerId);
    }
  }
  function wi(e, t, r, o, u, a) {
    return e === null || e.nativeEvent !== a
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: o,
          nativeEvent: a,
          targetContainers: [u],
        }),
        t !== null && ((t = Li(t)), t !== null && xl(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function Cm(e, t, r, o, u) {
    switch (t) {
      case "focusin":
        return (Rn = wi(Rn, e, t, r, o, u)), !0;
      case "dragenter":
        return (Pn = wi(Pn, e, t, r, o, u)), !0;
      case "mouseover":
        return (Tn = wi(Tn, e, t, r, o, u)), !0;
      case "pointerover":
        var a = u.pointerId;
        return gi.set(a, wi(gi.get(a) || null, e, t, r, o, u)), !0;
      case "gotpointercapture":
        return (
          (a = u.pointerId), vi.set(a, wi(vi.get(a) || null, e, t, r, o, u)), !0
        );
    }
    return !1;
  }
  function wc(e) {
    var t = Xn(e.target);
    if (t !== null) {
      var r = Gn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = ic(r)), t !== null)) {
            (e.blockedOn = t),
              gc(e.priority, function () {
                mc(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Es(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = _l(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        (_r = o), r.target.dispatchEvent(o), (_r = null);
      } else return (t = Li(r)), t !== null && xl(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function Sc(e, t, r) {
    Es(e) && r.delete(t);
  }
  function _m() {
    (El = !1),
      Rn !== null && Es(Rn) && (Rn = null),
      Pn !== null && Es(Pn) && (Pn = null),
      Tn !== null && Es(Tn) && (Tn = null),
      gi.forEach(Sc),
      vi.forEach(Sc);
  }
  function Si(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      El ||
        ((El = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, _m)));
  }
  function ki(e) {
    function t(u) {
      return Si(u, e);
    }
    if (0 < xs.length) {
      Si(xs[0], e);
      for (var r = 1; r < xs.length; r++) {
        var o = xs[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      Rn !== null && Si(Rn, e),
        Pn !== null && Si(Pn, e),
        Tn !== null && Si(Tn, e),
        gi.forEach(t),
        vi.forEach(t),
        r = 0;
      r < An.length;
      r++
    )
      (o = An[r]), o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < An.length && ((r = An[0]), r.blockedOn === null); )
      wc(r), r.blockedOn === null && An.shift();
  }
  var Pr = K.ReactCurrentBatchConfig,
    Cs = !0;
  function Om(e, t, r, o) {
    var u = ze,
      a = Pr.transition;
    Pr.transition = null;
    try {
      (ze = 1), Cl(e, t, r, o);
    } finally {
      (ze = u), (Pr.transition = a);
    }
  }
  function Rm(e, t, r, o) {
    var u = ze,
      a = Pr.transition;
    Pr.transition = null;
    try {
      (ze = 4), Cl(e, t, r, o);
    } finally {
      (ze = u), (Pr.transition = a);
    }
  }
  function Cl(e, t, r, o) {
    if (Cs) {
      var u = _l(e, t, r, o);
      if (u === null) Bl(e, t, o, _s, r), vc(e, o);
      else if (Cm(u, e, t, r, o)) o.stopPropagation();
      else if ((vc(e, o), t & 4 && -1 < Em.indexOf(e))) {
        for (; u !== null; ) {
          var a = Li(u);
          if (
            (a !== null && hc(a),
            (a = _l(e, t, r, o)),
            a === null && Bl(e, t, o, _s, r),
            a === u)
          )
            break;
          u = a;
        }
        u !== null && o.stopPropagation();
      } else Bl(e, t, o, null, r);
    }
  }
  var _s = null;
  function _l(e, t, r, o) {
    if (((_s = null), (e = pl(o)), (e = Xn(e)), e !== null))
      if (((t = Gn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = ic(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (_s = e), null;
  }
  function kc(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (hm()) {
          case vl:
            return 1;
          case cc:
            return 4;
          case gs:
          case mm:
            return 16;
          case fc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Fn = null,
    Ol = null,
    Os = null;
  function xc() {
    if (Os) return Os;
    var e,
      t = Ol,
      r = t.length,
      o,
      u = "value" in Fn ? Fn.value : Fn.textContent,
      a = u.length;
    for (e = 0; e < r && t[e] === u[e]; e++);
    var d = r - e;
    for (o = 1; o <= d && t[r - o] === u[a - o]; o++);
    return (Os = u.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Rs(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ps() {
    return !0;
  }
  function Ec() {
    return !1;
  }
  function Dt(e) {
    function t(r, o, u, a, d) {
      (this._reactName = r),
        (this._targetInst = u),
        (this.type = o),
        (this.nativeEvent = a),
        (this.target = d),
        (this.currentTarget = null);
      for (var m in e)
        e.hasOwnProperty(m) && ((r = e[m]), (this[m] = r ? r(a) : a[m]));
      return (
        (this.isDefaultPrevented = (
          a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
        )
          ? Ps
          : Ec),
        (this.isPropagationStopped = Ec),
        this
      );
    }
    return (
      G(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Ps));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Ps));
        },
        persist: function () {},
        isPersistent: Ps,
      }),
      t
    );
  }
  var Tr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Rl = Dt(Tr),
    xi = G({}, Tr, { view: 0, detail: 0 }),
    Pm = Dt(xi),
    Pl,
    Tl,
    Ei,
    Ts = G({}, xi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Fl,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Ei &&
              (Ei && e.type === "mousemove"
                ? ((Pl = e.screenX - Ei.screenX), (Tl = e.screenY - Ei.screenY))
                : (Tl = Pl = 0),
              (Ei = e)),
            Pl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Tl;
      },
    }),
    Cc = Dt(Ts),
    Tm = G({}, Ts, { dataTransfer: 0 }),
    Am = Dt(Tm),
    Fm = G({}, xi, { relatedTarget: 0 }),
    Al = Dt(Fm),
    Nm = G({}, Tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Lm = Dt(Nm),
    Dm = G({}, Tr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    jm = Dt(Dm),
    zm = G({}, Tr, { data: 0 }),
    _c = Dt(zm),
    Im = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Mm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    $m = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Um(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = $m[e])
      ? !!t[e]
      : !1;
  }
  function Fl() {
    return Um;
  }
  var bm = G({}, xi, {
      key: function (e) {
        if (e.key) {
          var t = Im[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Rs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Mm[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Fl,
      charCode: function (e) {
        return e.type === "keypress" ? Rs(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Rs(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Bm = Dt(bm),
    Vm = G({}, Ts, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Oc = Dt(Vm),
    Hm = G({}, xi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fl,
    }),
    Wm = Dt(Hm),
    Qm = G({}, Tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    qm = Dt(Qm),
    Km = G({}, Ts, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Gm = Dt(Km),
    Xm = [9, 13, 27, 32],
    Nl = h && "CompositionEvent" in window,
    Ci = null;
  h && "documentMode" in document && (Ci = document.documentMode);
  var Ym = h && "TextEvent" in window && !Ci,
    Rc = h && (!Nl || (Ci && 8 < Ci && 11 >= Ci)),
    Pc = " ",
    Tc = !1;
  function Ac(e, t) {
    switch (e) {
      case "keyup":
        return Xm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Fc(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ar = !1;
  function Jm(e, t) {
    switch (e) {
      case "compositionend":
        return Fc(t);
      case "keypress":
        return t.which !== 32 ? null : ((Tc = !0), Pc);
      case "textInput":
        return (e = t.data), e === Pc && Tc ? null : e;
      default:
        return null;
    }
  }
  function Zm(e, t) {
    if (Ar)
      return e === "compositionend" || (!Nl && Ac(e, t))
        ? ((e = xc()), (Os = Ol = Fn = null), (Ar = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Rc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ey = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Nc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ey[e.type] : t === "textarea";
  }
  function Lc(e, t, r, o) {
    Za(o),
      (t = Ds(t, "onChange")),
      0 < t.length &&
        ((r = new Rl("onChange", "change", null, r, o)),
        e.push({ event: r, listeners: t }));
  }
  var _i = null,
    Oi = null;
  function ty(e) {
    Yc(e, 0);
  }
  function As(e) {
    var t = jr(e);
    if (Et(t)) return e;
  }
  function ny(e, t) {
    if (e === "change") return t;
  }
  var Dc = !1;
  if (h) {
    var Ll;
    if (h) {
      var Dl = "oninput" in document;
      if (!Dl) {
        var jc = document.createElement("div");
        jc.setAttribute("oninput", "return;"),
          (Dl = typeof jc.oninput == "function");
      }
      Ll = Dl;
    } else Ll = !1;
    Dc = Ll && (!document.documentMode || 9 < document.documentMode);
  }
  function zc() {
    _i && (_i.detachEvent("onpropertychange", Ic), (Oi = _i = null));
  }
  function Ic(e) {
    if (e.propertyName === "value" && As(Oi)) {
      var t = [];
      Lc(t, Oi, e, pl(e)), rc(ty, t);
    }
  }
  function ry(e, t, r) {
    e === "focusin"
      ? (zc(), (_i = t), (Oi = r), _i.attachEvent("onpropertychange", Ic))
      : e === "focusout" && zc();
  }
  function iy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return As(Oi);
  }
  function sy(e, t) {
    if (e === "click") return As(t);
  }
  function oy(e, t) {
    if (e === "input" || e === "change") return As(t);
  }
  function ly(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Gt = typeof Object.is == "function" ? Object.is : ly;
  function Ri(e, t) {
    if (Gt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      o = Object.keys(t);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var u = r[o];
      if (!v.call(t, u) || !Gt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Mc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $c(e, t) {
    var r = Mc(e);
    e = 0;
    for (var o; r; ) {
      if (r.nodeType === 3) {
        if (((o = e + r.textContent.length), e <= t && o >= t))
          return { node: r, offset: t - e };
        e = o;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Mc(r);
    }
  }
  function Uc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Uc(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function bc() {
    for (var e = window, t = wr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = wr(e.document);
    }
    return t;
  }
  function jl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function uy(e) {
    var t = bc(),
      r = e.focusedElem,
      o = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      Uc(r.ownerDocument.documentElement, r)
    ) {
      if (o !== null && jl(r)) {
        if (
          ((t = o.start),
          (e = o.end),
          e === void 0 && (e = t),
          "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var u = r.textContent.length,
            a = Math.min(o.start, u);
          (o = o.end === void 0 ? a : Math.min(o.end, u)),
            !e.extend && a > o && ((u = o), (o = a), (a = u)),
            (u = $c(r, a));
          var d = $c(r, o);
          u &&
            d &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== d.node ||
              e.focusOffset !== d.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            e.removeAllRanges(),
            a > o
              ? (e.addRange(t), e.extend(d.node, d.offset))
              : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var ay = h && "documentMode" in document && 11 >= document.documentMode,
    Fr = null,
    zl = null,
    Pi = null,
    Il = !1;
  function Bc(e, t, r) {
    var o =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Il ||
      Fr == null ||
      Fr !== wr(o) ||
      ((o = Fr),
      "selectionStart" in o && jl(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Pi && Ri(Pi, o)) ||
        ((Pi = o),
        (o = Ds(zl, "onSelect")),
        0 < o.length &&
          ((t = new Rl("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = Fr))));
  }
  function Fs(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var Nr = {
      animationend: Fs("Animation", "AnimationEnd"),
      animationiteration: Fs("Animation", "AnimationIteration"),
      animationstart: Fs("Animation", "AnimationStart"),
      transitionend: Fs("Transition", "TransitionEnd"),
    },
    Ml = {},
    Vc = {};
  h &&
    ((Vc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Nr.animationend.animation,
      delete Nr.animationiteration.animation,
      delete Nr.animationstart.animation),
    "TransitionEvent" in window || delete Nr.transitionend.transition);
  function Ns(e) {
    if (Ml[e]) return Ml[e];
    if (!Nr[e]) return e;
    var t = Nr[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in Vc) return (Ml[e] = t[r]);
    return e;
  }
  var Hc = Ns("animationend"),
    Wc = Ns("animationiteration"),
    Qc = Ns("animationstart"),
    qc = Ns("transitionend"),
    Kc = new Map(),
    Gc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Nn(e, t) {
    Kc.set(e, t), f(t, [e]);
  }
  for (var $l = 0; $l < Gc.length; $l++) {
    var Ul = Gc[$l],
      cy = Ul.toLowerCase(),
      fy = Ul[0].toUpperCase() + Ul.slice(1);
    Nn(cy, "on" + fy);
  }
  Nn(Hc, "onAnimationEnd"),
    Nn(Wc, "onAnimationIteration"),
    Nn(Qc, "onAnimationStart"),
    Nn("dblclick", "onDoubleClick"),
    Nn("focusin", "onFocus"),
    Nn("focusout", "onBlur"),
    Nn(qc, "onTransitionEnd"),
    p("onMouseEnter", ["mouseout", "mouseover"]),
    p("onMouseLeave", ["mouseout", "mouseover"]),
    p("onPointerEnter", ["pointerout", "pointerover"]),
    p("onPointerLeave", ["pointerout", "pointerover"]),
    f(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    f(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    f(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ti =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    dy = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Ti)
    );
  function Xc(e, t, r) {
    var o = e.type || "unknown-event";
    (e.currentTarget = r), cm(o, t, void 0, e), (e.currentTarget = null);
  }
  function Yc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var o = e[r],
        u = o.event;
      o = o.listeners;
      e: {
        var a = void 0;
        if (t)
          for (var d = o.length - 1; 0 <= d; d--) {
            var m = o[d],
              g = m.instance,
              P = m.currentTarget;
            if (((m = m.listener), g !== a && u.isPropagationStopped()))
              break e;
            Xc(u, m, P), (a = g);
          }
        else
          for (d = 0; d < o.length; d++) {
            if (
              ((m = o[d]),
              (g = m.instance),
              (P = m.currentTarget),
              (m = m.listener),
              g !== a && u.isPropagationStopped())
            )
              break e;
            Xc(u, m, P), (a = g);
          }
      }
    }
    if (ys) throw ((e = gl), (ys = !1), (gl = null), e);
  }
  function Ue(e, t) {
    var r = t[Kl];
    r === void 0 && (r = t[Kl] = new Set());
    var o = e + "__bubble";
    r.has(o) || (Jc(t, e, 2, !1), r.add(o));
  }
  function bl(e, t, r) {
    var o = 0;
    t && (o |= 4), Jc(r, e, o, t);
  }
  var Ls = "_reactListening" + Math.random().toString(36).slice(2);
  function Ai(e) {
    if (!e[Ls]) {
      (e[Ls] = !0),
        l.forEach(function (r) {
          r !== "selectionchange" && (dy.has(r) || bl(r, !1, e), bl(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ls] || ((t[Ls] = !0), bl("selectionchange", !1, t));
    }
  }
  function Jc(e, t, r, o) {
    switch (kc(t)) {
      case 1:
        var u = Om;
        break;
      case 4:
        u = Rm;
        break;
      default:
        u = Cl;
    }
    (r = u.bind(null, t, r, e)),
      (u = void 0),
      !yl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      o
        ? u !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: u })
          : e.addEventListener(t, r, !0)
        : u !== void 0
        ? e.addEventListener(t, r, { passive: u })
        : e.addEventListener(t, r, !1);
  }
  function Bl(e, t, r, o, u) {
    var a = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var d = o.tag;
        if (d === 3 || d === 4) {
          var m = o.stateNode.containerInfo;
          if (m === u || (m.nodeType === 8 && m.parentNode === u)) break;
          if (d === 4)
            for (d = o.return; d !== null; ) {
              var g = d.tag;
              if (
                (g === 3 || g === 4) &&
                ((g = d.stateNode.containerInfo),
                g === u || (g.nodeType === 8 && g.parentNode === u))
              )
                return;
              d = d.return;
            }
          for (; m !== null; ) {
            if (((d = Xn(m)), d === null)) return;
            if (((g = d.tag), g === 5 || g === 6)) {
              o = a = d;
              continue e;
            }
            m = m.parentNode;
          }
        }
        o = o.return;
      }
    rc(function () {
      var P = a,
        M = pl(r),
        U = [];
      e: {
        var I = Kc.get(e);
        if (I !== void 0) {
          var Z = Rl,
            ne = e;
          switch (e) {
            case "keypress":
              if (Rs(r) === 0) break e;
            case "keydown":
            case "keyup":
              Z = Bm;
              break;
            case "focusin":
              (ne = "focus"), (Z = Al);
              break;
            case "focusout":
              (ne = "blur"), (Z = Al);
              break;
            case "beforeblur":
            case "afterblur":
              Z = Al;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Z = Cc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = Am;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = Wm;
              break;
            case Hc:
            case Wc:
            case Qc:
              Z = Lm;
              break;
            case qc:
              Z = qm;
              break;
            case "scroll":
              Z = Pm;
              break;
            case "wheel":
              Z = Gm;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = jm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = Oc;
          }
          var re = (t & 4) !== 0,
            Xe = !re && e === "scroll",
            C = re ? (I !== null ? I + "Capture" : null) : I;
          re = [];
          for (var w = P, O; w !== null; ) {
            O = w;
            var b = O.stateNode;
            if (
              (O.tag === 5 &&
                b !== null &&
                ((O = b),
                C !== null &&
                  ((b = di(w, C)), b != null && re.push(Fi(w, b, O)))),
              Xe)
            )
              break;
            w = w.return;
          }
          0 < re.length &&
            ((I = new Z(I, ne, null, r, M)),
            U.push({ event: I, listeners: re }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((I = e === "mouseover" || e === "pointerover"),
            (Z = e === "mouseout" || e === "pointerout"),
            I &&
              r !== _r &&
              (ne = r.relatedTarget || r.fromElement) &&
              (Xn(ne) || ne[yn]))
          )
            break e;
          if (
            (Z || I) &&
            ((I =
              M.window === M
                ? M
                : (I = M.ownerDocument)
                ? I.defaultView || I.parentWindow
                : window),
            Z
              ? ((ne = r.relatedTarget || r.toElement),
                (Z = P),
                (ne = ne ? Xn(ne) : null),
                ne !== null &&
                  ((Xe = Gn(ne)),
                  ne !== Xe || (ne.tag !== 5 && ne.tag !== 6)) &&
                  (ne = null))
              : ((Z = null), (ne = P)),
            Z !== ne)
          ) {
            if (
              ((re = Cc),
              (b = "onMouseLeave"),
              (C = "onMouseEnter"),
              (w = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((re = Oc),
                (b = "onPointerLeave"),
                (C = "onPointerEnter"),
                (w = "pointer")),
              (Xe = Z == null ? I : jr(Z)),
              (O = ne == null ? I : jr(ne)),
              (I = new re(b, w + "leave", Z, r, M)),
              (I.target = Xe),
              (I.relatedTarget = O),
              (b = null),
              Xn(M) === P &&
                ((re = new re(C, w + "enter", ne, r, M)),
                (re.target = O),
                (re.relatedTarget = Xe),
                (b = re)),
              (Xe = b),
              Z && ne)
            )
              t: {
                for (re = Z, C = ne, w = 0, O = re; O; O = Lr(O)) w++;
                for (O = 0, b = C; b; b = Lr(b)) O++;
                for (; 0 < w - O; ) (re = Lr(re)), w--;
                for (; 0 < O - w; ) (C = Lr(C)), O--;
                for (; w--; ) {
                  if (re === C || (C !== null && re === C.alternate)) break t;
                  (re = Lr(re)), (C = Lr(C));
                }
                re = null;
              }
            else re = null;
            Z !== null && Zc(U, I, Z, re, !1),
              ne !== null && Xe !== null && Zc(U, Xe, ne, re, !0);
          }
        }
        e: {
          if (
            ((I = P ? jr(P) : window),
            (Z = I.nodeName && I.nodeName.toLowerCase()),
            Z === "select" || (Z === "input" && I.type === "file"))
          )
            var se = ny;
          else if (Nc(I))
            if (Dc) se = oy;
            else {
              se = iy;
              var fe = ry;
            }
          else
            (Z = I.nodeName) &&
              Z.toLowerCase() === "input" &&
              (I.type === "checkbox" || I.type === "radio") &&
              (se = sy);
          if (se && (se = se(e, P))) {
            Lc(U, se, r, M);
            break e;
          }
          fe && fe(e, I, P),
            e === "focusout" &&
              (fe = I._wrapperState) &&
              fe.controlled &&
              I.type === "number" &&
              kr(I, "number", I.value);
        }
        switch (((fe = P ? jr(P) : window), e)) {
          case "focusin":
            (Nc(fe) || fe.contentEditable === "true") &&
              ((Fr = fe), (zl = P), (Pi = null));
            break;
          case "focusout":
            Pi = zl = Fr = null;
            break;
          case "mousedown":
            Il = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Il = !1), Bc(U, r, M);
            break;
          case "selectionchange":
            if (ay) break;
          case "keydown":
          case "keyup":
            Bc(U, r, M);
        }
        var de;
        if (Nl)
          e: {
            switch (e) {
              case "compositionstart":
                var me = "onCompositionStart";
                break e;
              case "compositionend":
                me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                me = "onCompositionUpdate";
                break e;
            }
            me = void 0;
          }
        else
          Ar
            ? Ac(e, r) && (me = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (me = "onCompositionStart");
        me &&
          (Rc &&
            r.locale !== "ko" &&
            (Ar || me !== "onCompositionStart"
              ? me === "onCompositionEnd" && Ar && (de = xc())
              : ((Fn = M),
                (Ol = "value" in Fn ? Fn.value : Fn.textContent),
                (Ar = !0))),
          (fe = Ds(P, me)),
          0 < fe.length &&
            ((me = new _c(me, e, null, r, M)),
            U.push({ event: me, listeners: fe }),
            de
              ? (me.data = de)
              : ((de = Fc(r)), de !== null && (me.data = de)))),
          (de = Ym ? Jm(e, r) : Zm(e, r)) &&
            ((P = Ds(P, "onBeforeInput")),
            0 < P.length &&
              ((M = new _c("onBeforeInput", "beforeinput", null, r, M)),
              U.push({ event: M, listeners: P }),
              (M.data = de)));
      }
      Yc(U, t);
    });
  }
  function Fi(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Ds(e, t) {
    for (var r = t + "Capture", o = []; e !== null; ) {
      var u = e,
        a = u.stateNode;
      u.tag === 5 &&
        a !== null &&
        ((u = a),
        (a = di(e, r)),
        a != null && o.unshift(Fi(e, a, u)),
        (a = di(e, t)),
        a != null && o.push(Fi(e, a, u))),
        (e = e.return);
    }
    return o;
  }
  function Lr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Zc(e, t, r, o, u) {
    for (var a = t._reactName, d = []; r !== null && r !== o; ) {
      var m = r,
        g = m.alternate,
        P = m.stateNode;
      if (g !== null && g === o) break;
      m.tag === 5 &&
        P !== null &&
        ((m = P),
        u
          ? ((g = di(r, a)), g != null && d.unshift(Fi(r, g, m)))
          : u || ((g = di(r, a)), g != null && d.push(Fi(r, g, m)))),
        (r = r.return);
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var py = /\r\n?/g,
    hy = /\u0000|\uFFFD/g;
  function ef(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        py,
        `
`
      )
      .replace(hy, "");
  }
  function js(e, t, r) {
    if (((t = ef(t)), ef(e) !== t && r)) throw Error(s(425));
  }
  function zs() {}
  var Vl = null,
    Hl = null;
  function Wl(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ql = typeof setTimeout == "function" ? setTimeout : void 0,
    my = typeof clearTimeout == "function" ? clearTimeout : void 0,
    tf = typeof Promise == "function" ? Promise : void 0,
    yy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof tf < "u"
        ? function (e) {
            return tf.resolve(null).then(e).catch(gy);
          }
        : Ql;
  function gy(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ql(e, t) {
    var r = t,
      o = 0;
    do {
      var u = r.nextSibling;
      if ((e.removeChild(r), u && u.nodeType === 8))
        if (((r = u.data), r === "/$")) {
          if (o === 0) {
            e.removeChild(u), ki(t);
            return;
          }
          o--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || o++;
      r = u;
    } while (r);
    ki(t);
  }
  function Ln(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function nf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Dr = Math.random().toString(36).slice(2),
    un = "__reactFiber$" + Dr,
    Ni = "__reactProps$" + Dr,
    yn = "__reactContainer$" + Dr,
    Kl = "__reactEvents$" + Dr,
    vy = "__reactListeners$" + Dr,
    wy = "__reactHandles$" + Dr;
  function Xn(e) {
    var t = e[un];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[yn] || r[un])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = nf(e); e !== null; ) {
            if ((r = e[un])) return r;
            e = nf(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function Li(e) {
    return (
      (e = e[un] || e[yn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function jr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Is(e) {
    return e[Ni] || null;
  }
  var Gl = [],
    zr = -1;
  function Dn(e) {
    return { current: e };
  }
  function be(e) {
    0 > zr || ((e.current = Gl[zr]), (Gl[zr] = null), zr--);
  }
  function $e(e, t) {
    zr++, (Gl[zr] = e.current), (e.current = t);
  }
  var jn = {},
    ht = Dn(jn),
    _t = Dn(!1),
    Yn = jn;
  function Ir(e, t) {
    var r = e.type.contextTypes;
    if (!r) return jn;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
      return o.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      a;
    for (a in r) u[a] = t[a];
    return (
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function Ot(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Ms() {
    be(_t), be(ht);
  }
  function rf(e, t, r) {
    if (ht.current !== jn) throw Error(s(168));
    $e(ht, t), $e(_t, r);
  }
  function sf(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function"))
      return r;
    o = o.getChildContext();
    for (var u in o) if (!(u in t)) throw Error(s(108, ue(e) || "Unknown", u));
    return G({}, r, o);
  }
  function $s(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        jn),
      (Yn = ht.current),
      $e(ht, e),
      $e(_t, _t.current),
      !0
    );
  }
  function of(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(s(169));
    r
      ? ((e = sf(e, t, Yn)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        be(_t),
        be(ht),
        $e(ht, e))
      : be(_t),
      $e(_t, r);
  }
  var gn = null,
    Us = !1,
    Xl = !1;
  function lf(e) {
    gn === null ? (gn = [e]) : gn.push(e);
  }
  function Sy(e) {
    (Us = !0), lf(e);
  }
  function zn() {
    if (!Xl && gn !== null) {
      Xl = !0;
      var e = 0,
        t = ze;
      try {
        var r = gn;
        for (ze = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        (gn = null), (Us = !1);
      } catch (u) {
        throw (gn !== null && (gn = gn.slice(e + 1)), uc(vl, zn), u);
      } finally {
        (ze = t), (Xl = !1);
      }
    }
    return null;
  }
  var Mr = [],
    $r = 0,
    bs = null,
    Bs = 0,
    $t = [],
    Ut = 0,
    Jn = null,
    vn = 1,
    wn = "";
  function Zn(e, t) {
    (Mr[$r++] = Bs), (Mr[$r++] = bs), (bs = e), (Bs = t);
  }
  function uf(e, t, r) {
    ($t[Ut++] = vn), ($t[Ut++] = wn), ($t[Ut++] = Jn), (Jn = e);
    var o = vn;
    e = wn;
    var u = 32 - Kt(o) - 1;
    (o &= ~(1 << u)), (r += 1);
    var a = 32 - Kt(t) + u;
    if (30 < a) {
      var d = u - (u % 5);
      (a = (o & ((1 << d) - 1)).toString(32)),
        (o >>= d),
        (u -= d),
        (vn = (1 << (32 - Kt(t) + u)) | (r << u) | o),
        (wn = a + e);
    } else (vn = (1 << a) | (r << u) | o), (wn = e);
  }
  function Yl(e) {
    e.return !== null && (Zn(e, 1), uf(e, 1, 0));
  }
  function Jl(e) {
    for (; e === bs; )
      (bs = Mr[--$r]), (Mr[$r] = null), (Bs = Mr[--$r]), (Mr[$r] = null);
    for (; e === Jn; )
      (Jn = $t[--Ut]),
        ($t[Ut] = null),
        (wn = $t[--Ut]),
        ($t[Ut] = null),
        (vn = $t[--Ut]),
        ($t[Ut] = null);
  }
  var jt = null,
    zt = null,
    He = !1,
    Xt = null;
  function af(e, t) {
    var r = Ht(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function cf(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (jt = e), (zt = Ln(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (jt = e), (zt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = Jn !== null ? { id: vn, overflow: wn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = Ht(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (jt = e),
              (zt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Zl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function eu(e) {
    if (He) {
      var t = zt;
      if (t) {
        var r = t;
        if (!cf(e, t)) {
          if (Zl(e)) throw Error(s(418));
          t = Ln(r.nextSibling);
          var o = jt;
          t && cf(e, t)
            ? af(o, r)
            : ((e.flags = (e.flags & -4097) | 2), (He = !1), (jt = e));
        }
      } else {
        if (Zl(e)) throw Error(s(418));
        (e.flags = (e.flags & -4097) | 2), (He = !1), (jt = e);
      }
    }
  }
  function ff(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    jt = e;
  }
  function Vs(e) {
    if (e !== jt) return !1;
    if (!He) return ff(e), (He = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Wl(e.type, e.memoizedProps))),
      t && (t = zt))
    ) {
      if (Zl(e)) throw (df(), Error(s(418)));
      for (; t; ) af(e, t), (t = Ln(t.nextSibling));
    }
    if ((ff(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                zt = Ln(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        zt = null;
      }
    } else zt = jt ? Ln(e.stateNode.nextSibling) : null;
    return !0;
  }
  function df() {
    for (var e = zt; e; ) e = Ln(e.nextSibling);
  }
  function Ur() {
    (zt = jt = null), (He = !1);
  }
  function tu(e) {
    Xt === null ? (Xt = [e]) : Xt.push(e);
  }
  var ky = K.ReactCurrentBatchConfig;
  function Di(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(s(309));
          var o = r.stateNode;
        }
        if (!o) throw Error(s(147, e));
        var u = o,
          a = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === a
          ? t.ref
          : ((t = function (d) {
              var m = u.refs;
              d === null ? delete m[a] : (m[a] = d);
            }),
            (t._stringRef = a),
            t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!r._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Hs(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        s(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function pf(e) {
    var t = e._init;
    return t(e._payload);
  }
  function hf(e) {
    function t(C, w) {
      if (e) {
        var O = C.deletions;
        O === null ? ((C.deletions = [w]), (C.flags |= 16)) : O.push(w);
      }
    }
    function r(C, w) {
      if (!e) return null;
      for (; w !== null; ) t(C, w), (w = w.sibling);
      return null;
    }
    function o(C, w) {
      for (C = new Map(); w !== null; )
        w.key !== null ? C.set(w.key, w) : C.set(w.index, w), (w = w.sibling);
      return C;
    }
    function u(C, w) {
      return (C = Hn(C, w)), (C.index = 0), (C.sibling = null), C;
    }
    function a(C, w, O) {
      return (
        (C.index = O),
        e
          ? ((O = C.alternate),
            O !== null
              ? ((O = O.index), O < w ? ((C.flags |= 2), w) : O)
              : ((C.flags |= 2), w))
          : ((C.flags |= 1048576), w)
      );
    }
    function d(C) {
      return e && C.alternate === null && (C.flags |= 2), C;
    }
    function m(C, w, O, b) {
      return w === null || w.tag !== 6
        ? ((w = Qu(O, C.mode, b)), (w.return = C), w)
        : ((w = u(w, O)), (w.return = C), w);
    }
    function g(C, w, O, b) {
      var se = O.type;
      return se === Q
        ? M(C, w, O.props.children, b, O.key)
        : w !== null &&
          (w.elementType === se ||
            (typeof se == "object" &&
              se !== null &&
              se.$$typeof === Re &&
              pf(se) === w.type))
        ? ((b = u(w, O.props)), (b.ref = Di(C, w, O)), (b.return = C), b)
        : ((b = mo(O.type, O.key, O.props, null, C.mode, b)),
          (b.ref = Di(C, w, O)),
          (b.return = C),
          b);
    }
    function P(C, w, O, b) {
      return w === null ||
        w.tag !== 4 ||
        w.stateNode.containerInfo !== O.containerInfo ||
        w.stateNode.implementation !== O.implementation
        ? ((w = qu(O, C.mode, b)), (w.return = C), w)
        : ((w = u(w, O.children || [])), (w.return = C), w);
    }
    function M(C, w, O, b, se) {
      return w === null || w.tag !== 7
        ? ((w = lr(O, C.mode, b, se)), (w.return = C), w)
        : ((w = u(w, O)), (w.return = C), w);
    }
    function U(C, w, O) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (w = Qu("" + w, C.mode, O)), (w.return = C), w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case D:
            return (
              (O = mo(w.type, w.key, w.props, null, C.mode, O)),
              (O.ref = Di(C, null, w)),
              (O.return = C),
              O
            );
          case W:
            return (w = qu(w, C.mode, O)), (w.return = C), w;
          case Re:
            var b = w._init;
            return U(C, b(w._payload), O);
        }
        if (y(w) || ee(w))
          return (w = lr(w, C.mode, O, null)), (w.return = C), w;
        Hs(C, w);
      }
      return null;
    }
    function I(C, w, O, b) {
      var se = w !== null ? w.key : null;
      if ((typeof O == "string" && O !== "") || typeof O == "number")
        return se !== null ? null : m(C, w, "" + O, b);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case D:
            return O.key === se ? g(C, w, O, b) : null;
          case W:
            return O.key === se ? P(C, w, O, b) : null;
          case Re:
            return (se = O._init), I(C, w, se(O._payload), b);
        }
        if (y(O) || ee(O)) return se !== null ? null : M(C, w, O, b, null);
        Hs(C, O);
      }
      return null;
    }
    function Z(C, w, O, b, se) {
      if ((typeof b == "string" && b !== "") || typeof b == "number")
        return (C = C.get(O) || null), m(w, C, "" + b, se);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case D:
            return (
              (C = C.get(b.key === null ? O : b.key) || null), g(w, C, b, se)
            );
          case W:
            return (
              (C = C.get(b.key === null ? O : b.key) || null), P(w, C, b, se)
            );
          case Re:
            var fe = b._init;
            return Z(C, w, O, fe(b._payload), se);
        }
        if (y(b) || ee(b)) return (C = C.get(O) || null), M(w, C, b, se, null);
        Hs(w, b);
      }
      return null;
    }
    function ne(C, w, O, b) {
      for (
        var se = null, fe = null, de = w, me = (w = 0), lt = null;
        de !== null && me < O.length;
        me++
      ) {
        de.index > me ? ((lt = de), (de = null)) : (lt = de.sibling);
        var Ae = I(C, de, O[me], b);
        if (Ae === null) {
          de === null && (de = lt);
          break;
        }
        e && de && Ae.alternate === null && t(C, de),
          (w = a(Ae, w, me)),
          fe === null ? (se = Ae) : (fe.sibling = Ae),
          (fe = Ae),
          (de = lt);
      }
      if (me === O.length) return r(C, de), He && Zn(C, me), se;
      if (de === null) {
        for (; me < O.length; me++)
          (de = U(C, O[me], b)),
            de !== null &&
              ((w = a(de, w, me)),
              fe === null ? (se = de) : (fe.sibling = de),
              (fe = de));
        return He && Zn(C, me), se;
      }
      for (de = o(C, de); me < O.length; me++)
        (lt = Z(de, C, me, O[me], b)),
          lt !== null &&
            (e &&
              lt.alternate !== null &&
              de.delete(lt.key === null ? me : lt.key),
            (w = a(lt, w, me)),
            fe === null ? (se = lt) : (fe.sibling = lt),
            (fe = lt));
      return (
        e &&
          de.forEach(function (Wn) {
            return t(C, Wn);
          }),
        He && Zn(C, me),
        se
      );
    }
    function re(C, w, O, b) {
      var se = ee(O);
      if (typeof se != "function") throw Error(s(150));
      if (((O = se.call(O)), O == null)) throw Error(s(151));
      for (
        var fe = (se = null), de = w, me = (w = 0), lt = null, Ae = O.next();
        de !== null && !Ae.done;
        me++, Ae = O.next()
      ) {
        de.index > me ? ((lt = de), (de = null)) : (lt = de.sibling);
        var Wn = I(C, de, Ae.value, b);
        if (Wn === null) {
          de === null && (de = lt);
          break;
        }
        e && de && Wn.alternate === null && t(C, de),
          (w = a(Wn, w, me)),
          fe === null ? (se = Wn) : (fe.sibling = Wn),
          (fe = Wn),
          (de = lt);
      }
      if (Ae.done) return r(C, de), He && Zn(C, me), se;
      if (de === null) {
        for (; !Ae.done; me++, Ae = O.next())
          (Ae = U(C, Ae.value, b)),
            Ae !== null &&
              ((w = a(Ae, w, me)),
              fe === null ? (se = Ae) : (fe.sibling = Ae),
              (fe = Ae));
        return He && Zn(C, me), se;
      }
      for (de = o(C, de); !Ae.done; me++, Ae = O.next())
        (Ae = Z(de, C, me, Ae.value, b)),
          Ae !== null &&
            (e &&
              Ae.alternate !== null &&
              de.delete(Ae.key === null ? me : Ae.key),
            (w = a(Ae, w, me)),
            fe === null ? (se = Ae) : (fe.sibling = Ae),
            (fe = Ae));
      return (
        e &&
          de.forEach(function (eg) {
            return t(C, eg);
          }),
        He && Zn(C, me),
        se
      );
    }
    function Xe(C, w, O, b) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === Q &&
          O.key === null &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case D:
            e: {
              for (var se = O.key, fe = w; fe !== null; ) {
                if (fe.key === se) {
                  if (((se = O.type), se === Q)) {
                    if (fe.tag === 7) {
                      r(C, fe.sibling),
                        (w = u(fe, O.props.children)),
                        (w.return = C),
                        (C = w);
                      break e;
                    }
                  } else if (
                    fe.elementType === se ||
                    (typeof se == "object" &&
                      se !== null &&
                      se.$$typeof === Re &&
                      pf(se) === fe.type)
                  ) {
                    r(C, fe.sibling),
                      (w = u(fe, O.props)),
                      (w.ref = Di(C, fe, O)),
                      (w.return = C),
                      (C = w);
                    break e;
                  }
                  r(C, fe);
                  break;
                } else t(C, fe);
                fe = fe.sibling;
              }
              O.type === Q
                ? ((w = lr(O.props.children, C.mode, b, O.key)),
                  (w.return = C),
                  (C = w))
                : ((b = mo(O.type, O.key, O.props, null, C.mode, b)),
                  (b.ref = Di(C, w, O)),
                  (b.return = C),
                  (C = b));
            }
            return d(C);
          case W:
            e: {
              for (fe = O.key; w !== null; ) {
                if (w.key === fe)
                  if (
                    w.tag === 4 &&
                    w.stateNode.containerInfo === O.containerInfo &&
                    w.stateNode.implementation === O.implementation
                  ) {
                    r(C, w.sibling),
                      (w = u(w, O.children || [])),
                      (w.return = C),
                      (C = w);
                    break e;
                  } else {
                    r(C, w);
                    break;
                  }
                else t(C, w);
                w = w.sibling;
              }
              (w = qu(O, C.mode, b)), (w.return = C), (C = w);
            }
            return d(C);
          case Re:
            return (fe = O._init), Xe(C, w, fe(O._payload), b);
        }
        if (y(O)) return ne(C, w, O, b);
        if (ee(O)) return re(C, w, O, b);
        Hs(C, O);
      }
      return (typeof O == "string" && O !== "") || typeof O == "number"
        ? ((O = "" + O),
          w !== null && w.tag === 6
            ? (r(C, w.sibling), (w = u(w, O)), (w.return = C), (C = w))
            : (r(C, w), (w = Qu(O, C.mode, b)), (w.return = C), (C = w)),
          d(C))
        : r(C, w);
    }
    return Xe;
  }
  var br = hf(!0),
    mf = hf(!1),
    Ws = Dn(null),
    Qs = null,
    Br = null,
    nu = null;
  function ru() {
    nu = Br = Qs = null;
  }
  function iu(e) {
    var t = Ws.current;
    be(Ws), (e._currentValue = t);
  }
  function su(e, t, r) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function Vr(e, t) {
    (Qs = e),
      (nu = Br = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Rt = !0), (e.firstContext = null));
  }
  function bt(e) {
    var t = e._currentValue;
    if (nu !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Br === null)) {
        if (Qs === null) throw Error(s(308));
        (Br = e), (Qs.dependencies = { lanes: 0, firstContext: e });
      } else Br = Br.next = e;
    return t;
  }
  var er = null;
  function ou(e) {
    er === null ? (er = [e]) : er.push(e);
  }
  function yf(e, t, r, o) {
    var u = t.interleaved;
    return (
      u === null ? ((r.next = r), ou(t)) : ((r.next = u.next), (u.next = r)),
      (t.interleaved = r),
      Sn(e, o)
    );
  }
  function Sn(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var In = !1;
  function lu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function gf(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function kn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Mn(e, t, r) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (Te & 2) !== 0)) {
      var u = o.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (o.pending = t),
        Sn(e, r)
      );
    }
    return (
      (u = o.interleaved),
      u === null ? ((t.next = t), ou(o)) : ((t.next = u.next), (u.next = t)),
      (o.interleaved = t),
      Sn(e, r)
    );
  }
  function qs(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var o = t.lanes;
      (o &= e.pendingLanes), (r |= o), (t.lanes = r), kl(e, r);
    }
  }
  function vf(e, t) {
    var r = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), r === o)) {
      var u = null,
        a = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var d = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          a === null ? (u = a = d) : (a = a.next = d), (r = r.next);
        } while (r !== null);
        a === null ? (u = a = t) : (a = a.next = t);
      } else u = a = t;
      (r = {
        baseState: o.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: a,
        shared: o.shared,
        effects: o.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function Ks(e, t, r, o) {
    var u = e.updateQueue;
    In = !1;
    var a = u.firstBaseUpdate,
      d = u.lastBaseUpdate,
      m = u.shared.pending;
    if (m !== null) {
      u.shared.pending = null;
      var g = m,
        P = g.next;
      (g.next = null), d === null ? (a = P) : (d.next = P), (d = g);
      var M = e.alternate;
      M !== null &&
        ((M = M.updateQueue),
        (m = M.lastBaseUpdate),
        m !== d &&
          (m === null ? (M.firstBaseUpdate = P) : (m.next = P),
          (M.lastBaseUpdate = g)));
    }
    if (a !== null) {
      var U = u.baseState;
      (d = 0), (M = P = g = null), (m = a);
      do {
        var I = m.lane,
          Z = m.eventTime;
        if ((o & I) === I) {
          M !== null &&
            (M = M.next =
              {
                eventTime: Z,
                lane: 0,
                tag: m.tag,
                payload: m.payload,
                callback: m.callback,
                next: null,
              });
          e: {
            var ne = e,
              re = m;
            switch (((I = t), (Z = r), re.tag)) {
              case 1:
                if (((ne = re.payload), typeof ne == "function")) {
                  U = ne.call(Z, U, I);
                  break e;
                }
                U = ne;
                break e;
              case 3:
                ne.flags = (ne.flags & -65537) | 128;
              case 0:
                if (
                  ((ne = re.payload),
                  (I = typeof ne == "function" ? ne.call(Z, U, I) : ne),
                  I == null)
                )
                  break e;
                U = G({}, U, I);
                break e;
              case 2:
                In = !0;
            }
          }
          m.callback !== null &&
            m.lane !== 0 &&
            ((e.flags |= 64),
            (I = u.effects),
            I === null ? (u.effects = [m]) : I.push(m));
        } else
          (Z = {
            eventTime: Z,
            lane: I,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            M === null ? ((P = M = Z), (g = U)) : (M = M.next = Z),
            (d |= I);
        if (((m = m.next), m === null)) {
          if (((m = u.shared.pending), m === null)) break;
          (I = m),
            (m = I.next),
            (I.next = null),
            (u.lastBaseUpdate = I),
            (u.shared.pending = null);
        }
      } while (!0);
      if (
        (M === null && (g = U),
        (u.baseState = g),
        (u.firstBaseUpdate = P),
        (u.lastBaseUpdate = M),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do (d |= u.lane), (u = u.next);
        while (u !== t);
      } else a === null && (u.shared.lanes = 0);
      (rr |= d), (e.lanes = d), (e.memoizedState = U);
    }
  }
  function wf(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var o = e[t],
          u = o.callback;
        if (u !== null) {
          if (((o.callback = null), (o = r), typeof u != "function"))
            throw Error(s(191, u));
          u.call(o);
        }
      }
  }
  var ji = {},
    an = Dn(ji),
    zi = Dn(ji),
    Ii = Dn(ji);
  function tr(e) {
    if (e === ji) throw Error(s(174));
    return e;
  }
  function uu(e, t) {
    switch (($e(Ii, t), $e(zi, e), $e(an, ji), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Pe(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Pe(t, e));
    }
    be(an), $e(an, t);
  }
  function Hr() {
    be(an), be(zi), be(Ii);
  }
  function Sf(e) {
    tr(Ii.current);
    var t = tr(an.current),
      r = Pe(t, e.type);
    t !== r && ($e(zi, e), $e(an, r));
  }
  function au(e) {
    zi.current === e && (be(an), be(zi));
  }
  var Qe = Dn(0);
  function Gs(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var cu = [];
  function fu() {
    for (var e = 0; e < cu.length; e++)
      cu[e]._workInProgressVersionPrimary = null;
    cu.length = 0;
  }
  var Xs = K.ReactCurrentDispatcher,
    du = K.ReactCurrentBatchConfig,
    nr = 0,
    qe = null,
    rt = null,
    st = null,
    Ys = !1,
    Mi = !1,
    $i = 0,
    xy = 0;
  function mt() {
    throw Error(s(321));
  }
  function pu(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!Gt(e[r], t[r])) return !1;
    return !0;
  }
  function hu(e, t, r, o, u, a) {
    if (
      ((nr = a),
      (qe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Xs.current = e === null || e.memoizedState === null ? Oy : Ry),
      (e = r(o, u)),
      Mi)
    ) {
      a = 0;
      do {
        if (((Mi = !1), ($i = 0), 25 <= a)) throw Error(s(301));
        (a += 1),
          (st = rt = null),
          (t.updateQueue = null),
          (Xs.current = Py),
          (e = r(o, u));
      } while (Mi);
    }
    if (
      ((Xs.current = eo),
      (t = rt !== null && rt.next !== null),
      (nr = 0),
      (st = rt = qe = null),
      (Ys = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function mu() {
    var e = $i !== 0;
    return ($i = 0), e;
  }
  function cn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return st === null ? (qe.memoizedState = st = e) : (st = st.next = e), st;
  }
  function Bt() {
    if (rt === null) {
      var e = qe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = rt.next;
    var t = st === null ? qe.memoizedState : st.next;
    if (t !== null) (st = t), (rt = e);
    else {
      if (e === null) throw Error(s(310));
      (rt = e),
        (e = {
          memoizedState: rt.memoizedState,
          baseState: rt.baseState,
          baseQueue: rt.baseQueue,
          queue: rt.queue,
          next: null,
        }),
        st === null ? (qe.memoizedState = st = e) : (st = st.next = e);
    }
    return st;
  }
  function Ui(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function yu(e) {
    var t = Bt(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var o = rt,
      u = o.baseQueue,
      a = r.pending;
    if (a !== null) {
      if (u !== null) {
        var d = u.next;
        (u.next = a.next), (a.next = d);
      }
      (o.baseQueue = u = a), (r.pending = null);
    }
    if (u !== null) {
      (a = u.next), (o = o.baseState);
      var m = (d = null),
        g = null,
        P = a;
      do {
        var M = P.lane;
        if ((nr & M) === M)
          g !== null &&
            (g = g.next =
              {
                lane: 0,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null,
              }),
            (o = P.hasEagerState ? P.eagerState : e(o, P.action));
        else {
          var U = {
            lane: M,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null,
          };
          g === null ? ((m = g = U), (d = o)) : (g = g.next = U),
            (qe.lanes |= M),
            (rr |= M);
        }
        P = P.next;
      } while (P !== null && P !== a);
      g === null ? (d = o) : (g.next = m),
        Gt(o, t.memoizedState) || (Rt = !0),
        (t.memoizedState = o),
        (t.baseState = d),
        (t.baseQueue = g),
        (r.lastRenderedState = o);
    }
    if (((e = r.interleaved), e !== null)) {
      u = e;
      do (a = u.lane), (qe.lanes |= a), (rr |= a), (u = u.next);
      while (u !== e);
    } else u === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function gu(e) {
    var t = Bt(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var o = r.dispatch,
      u = r.pending,
      a = t.memoizedState;
    if (u !== null) {
      r.pending = null;
      var d = (u = u.next);
      do (a = e(a, d.action)), (d = d.next);
      while (d !== u);
      Gt(a, t.memoizedState) || (Rt = !0),
        (t.memoizedState = a),
        t.baseQueue === null && (t.baseState = a),
        (r.lastRenderedState = a);
    }
    return [a, o];
  }
  function kf() {}
  function xf(e, t) {
    var r = qe,
      o = Bt(),
      u = t(),
      a = !Gt(o.memoizedState, u);
    if (
      (a && ((o.memoizedState = u), (Rt = !0)),
      (o = o.queue),
      vu(_f.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || a || (st !== null && st.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        bi(9, Cf.bind(null, r, o, u, t), void 0, null),
        ot === null)
      )
        throw Error(s(349));
      (nr & 30) !== 0 || Ef(r, t, u);
    }
    return u;
  }
  function Ef(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = qe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (qe.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function Cf(e, t, r, o) {
    (t.value = r), (t.getSnapshot = o), Of(t) && Rf(e);
  }
  function _f(e, t, r) {
    return r(function () {
      Of(t) && Rf(e);
    });
  }
  function Of(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Gt(e, r);
    } catch {
      return !0;
    }
  }
  function Rf(e) {
    var t = Sn(e, 1);
    t !== null && en(t, e, 1, -1);
  }
  function Pf(e) {
    var t = cn();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ui,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = _y.bind(null, qe, e)),
      [t.memoizedState, e]
    );
  }
  function bi(e, t, r, o) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: o, next: null }),
      (t = qe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (qe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((o = r.next), (r.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function Tf() {
    return Bt().memoizedState;
  }
  function Js(e, t, r, o) {
    var u = cn();
    (qe.flags |= e),
      (u.memoizedState = bi(1 | t, r, void 0, o === void 0 ? null : o));
  }
  function Zs(e, t, r, o) {
    var u = Bt();
    o = o === void 0 ? null : o;
    var a = void 0;
    if (rt !== null) {
      var d = rt.memoizedState;
      if (((a = d.destroy), o !== null && pu(o, d.deps))) {
        u.memoizedState = bi(t, r, a, o);
        return;
      }
    }
    (qe.flags |= e), (u.memoizedState = bi(1 | t, r, a, o));
  }
  function Af(e, t) {
    return Js(8390656, 8, e, t);
  }
  function vu(e, t) {
    return Zs(2048, 8, e, t);
  }
  function Ff(e, t) {
    return Zs(4, 2, e, t);
  }
  function Nf(e, t) {
    return Zs(4, 4, e, t);
  }
  function Lf(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Df(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), Zs(4, 4, Lf.bind(null, t, e), r)
    );
  }
  function wu() {}
  function jf(e, t) {
    var r = Bt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && pu(t, o[1])
      ? o[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function zf(e, t) {
    var r = Bt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && pu(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function If(e, t, r) {
    return (nr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Rt = !0)), (e.memoizedState = r))
      : (Gt(r, t) ||
          ((r = dc()), (qe.lanes |= r), (rr |= r), (e.baseState = !0)),
        t);
  }
  function Ey(e, t) {
    var r = ze;
    (ze = r !== 0 && 4 > r ? r : 4), e(!0);
    var o = du.transition;
    du.transition = {};
    try {
      e(!1), t();
    } finally {
      (ze = r), (du.transition = o);
    }
  }
  function Mf() {
    return Bt().memoizedState;
  }
  function Cy(e, t, r) {
    var o = Bn(e);
    if (
      ((r = {
        lane: o,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      $f(e))
    )
      Uf(t, r);
    else if (((r = yf(e, t, r, o)), r !== null)) {
      var u = kt();
      en(r, e, o, u), bf(r, t, o);
    }
  }
  function _y(e, t, r) {
    var o = Bn(e),
      u = {
        lane: o,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if ($f(e)) Uf(t, u);
    else {
      var a = e.alternate;
      if (
        e.lanes === 0 &&
        (a === null || a.lanes === 0) &&
        ((a = t.lastRenderedReducer), a !== null)
      )
        try {
          var d = t.lastRenderedState,
            m = a(d, r);
          if (((u.hasEagerState = !0), (u.eagerState = m), Gt(m, d))) {
            var g = t.interleaved;
            g === null
              ? ((u.next = u), ou(t))
              : ((u.next = g.next), (g.next = u)),
              (t.interleaved = u);
            return;
          }
        } catch {
        } finally {
        }
      (r = yf(e, t, u, o)),
        r !== null && ((u = kt()), en(r, e, o, u), bf(r, t, o));
    }
  }
  function $f(e) {
    var t = e.alternate;
    return e === qe || (t !== null && t === qe);
  }
  function Uf(e, t) {
    Mi = Ys = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function bf(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      (o &= e.pendingLanes), (r |= o), (t.lanes = r), kl(e, r);
    }
  }
  var eo = {
      readContext: bt,
      useCallback: mt,
      useContext: mt,
      useEffect: mt,
      useImperativeHandle: mt,
      useInsertionEffect: mt,
      useLayoutEffect: mt,
      useMemo: mt,
      useReducer: mt,
      useRef: mt,
      useState: mt,
      useDebugValue: mt,
      useDeferredValue: mt,
      useTransition: mt,
      useMutableSource: mt,
      useSyncExternalStore: mt,
      useId: mt,
      unstable_isNewReconciler: !1,
    },
    Oy = {
      readContext: bt,
      useCallback: function (e, t) {
        return (cn().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: bt,
      useEffect: Af,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          Js(4194308, 4, Lf.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return Js(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Js(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = cn();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var o = cn();
        return (
          (t = r !== void 0 ? r(t) : t),
          (o.memoizedState = o.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (o.queue = e),
          (e = e.dispatch = Cy.bind(null, qe, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = cn();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Pf,
      useDebugValue: wu,
      useDeferredValue: function (e) {
        return (cn().memoizedState = e);
      },
      useTransition: function () {
        var e = Pf(!1),
          t = e[0];
        return (e = Ey.bind(null, e[1])), (cn().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var o = qe,
          u = cn();
        if (He) {
          if (r === void 0) throw Error(s(407));
          r = r();
        } else {
          if (((r = t()), ot === null)) throw Error(s(349));
          (nr & 30) !== 0 || Ef(o, t, r);
        }
        u.memoizedState = r;
        var a = { value: r, getSnapshot: t };
        return (
          (u.queue = a),
          Af(_f.bind(null, o, a, e), [e]),
          (o.flags |= 2048),
          bi(9, Cf.bind(null, o, a, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = cn(),
          t = ot.identifierPrefix;
        if (He) {
          var r = wn,
            o = vn;
          (r = (o & ~(1 << (32 - Kt(o) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = $i++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = xy++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Ry = {
      readContext: bt,
      useCallback: jf,
      useContext: bt,
      useEffect: vu,
      useImperativeHandle: Df,
      useInsertionEffect: Ff,
      useLayoutEffect: Nf,
      useMemo: zf,
      useReducer: yu,
      useRef: Tf,
      useState: function () {
        return yu(Ui);
      },
      useDebugValue: wu,
      useDeferredValue: function (e) {
        var t = Bt();
        return If(t, rt.memoizedState, e);
      },
      useTransition: function () {
        var e = yu(Ui)[0],
          t = Bt().memoizedState;
        return [e, t];
      },
      useMutableSource: kf,
      useSyncExternalStore: xf,
      useId: Mf,
      unstable_isNewReconciler: !1,
    },
    Py = {
      readContext: bt,
      useCallback: jf,
      useContext: bt,
      useEffect: vu,
      useImperativeHandle: Df,
      useInsertionEffect: Ff,
      useLayoutEffect: Nf,
      useMemo: zf,
      useReducer: gu,
      useRef: Tf,
      useState: function () {
        return gu(Ui);
      },
      useDebugValue: wu,
      useDeferredValue: function (e) {
        var t = Bt();
        return rt === null ? (t.memoizedState = e) : If(t, rt.memoizedState, e);
      },
      useTransition: function () {
        var e = gu(Ui)[0],
          t = Bt().memoizedState;
        return [e, t];
      },
      useMutableSource: kf,
      useSyncExternalStore: xf,
      useId: Mf,
      unstable_isNewReconciler: !1,
    };
  function Yt(e, t) {
    if (e && e.defaultProps) {
      (t = G({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function Su(e, t, r, o) {
    (t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : G({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var to = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Gn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var o = kt(),
        u = Bn(e),
        a = kn(o, u);
      (a.payload = t),
        r != null && (a.callback = r),
        (t = Mn(e, a, u)),
        t !== null && (en(t, e, u, o), qs(t, e, u));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = kt(),
        u = Bn(e),
        a = kn(o, u);
      (a.tag = 1),
        (a.payload = t),
        r != null && (a.callback = r),
        (t = Mn(e, a, u)),
        t !== null && (en(t, e, u, o), qs(t, e, u));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = kt(),
        o = Bn(e),
        u = kn(r, o);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = Mn(e, u, o)),
        t !== null && (en(t, e, o, r), qs(t, e, o));
    },
  };
  function Bf(e, t, r, o, u, a, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, a, d)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Ri(r, o) || !Ri(u, a)
        : !0
    );
  }
  function Vf(e, t, r) {
    var o = !1,
      u = jn,
      a = t.contextType;
    return (
      typeof a == "object" && a !== null
        ? (a = bt(a))
        : ((u = Ot(t) ? Yn : ht.current),
          (o = t.contextTypes),
          (a = (o = o != null) ? Ir(e, u) : jn)),
      (t = new t(r, a)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = to),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      t
    );
  }
  function Hf(e, t, r, o) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, o),
      t.state !== e && to.enqueueReplaceState(t, t.state, null);
  }
  function ku(e, t, r, o) {
    var u = e.stateNode;
    (u.props = r), (u.state = e.memoizedState), (u.refs = {}), lu(e);
    var a = t.contextType;
    typeof a == "object" && a !== null
      ? (u.context = bt(a))
      : ((a = Ot(t) ? Yn : ht.current), (u.context = Ir(e, a))),
      (u.state = e.memoizedState),
      (a = t.getDerivedStateFromProps),
      typeof a == "function" && (Su(e, t, a, r), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((t = u.state),
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" &&
          u.UNSAFE_componentWillMount(),
        t !== u.state && to.enqueueReplaceState(u, u.state, null),
        Ks(e, r, u, o),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Wr(e, t) {
    try {
      var r = "",
        o = t;
      do (r += ve(o)), (o = o.return);
      while (o);
      var u = r;
    } catch (a) {
      u =
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function xu(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function Eu(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var Ty = typeof WeakMap == "function" ? WeakMap : Map;
  function Wf(e, t, r) {
    (r = kn(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var o = t.value;
    return (
      (r.callback = function () {
        uo || ((uo = !0), (Mu = o)), Eu(e, t);
      }),
      r
    );
  }
  function Qf(e, t, r) {
    (r = kn(-1, r)), (r.tag = 3);
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var u = t.value;
      (r.payload = function () {
        return o(u);
      }),
        (r.callback = function () {
          Eu(e, t);
        });
    }
    var a = e.stateNode;
    return (
      a !== null &&
        typeof a.componentDidCatch == "function" &&
        (r.callback = function () {
          Eu(e, t),
            typeof o != "function" &&
              (Un === null ? (Un = new Set([this])) : Un.add(this));
          var d = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: d !== null ? d : "",
          });
        }),
      r
    );
  }
  function qf(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Ty();
      var u = new Set();
      o.set(t, u);
    } else (u = o.get(t)), u === void 0 && ((u = new Set()), o.set(t, u));
    u.has(r) || (u.add(r), (e = Vy.bind(null, e, t, r)), t.then(e, e));
  }
  function Kf(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Gf(e, t, r, o, u) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = kn(-1, 1)), (t.tag = 2), Mn(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var Ay = K.ReactCurrentOwner,
    Rt = !1;
  function St(e, t, r, o) {
    t.child = e === null ? mf(t, null, r, o) : br(t, e.child, r, o);
  }
  function Xf(e, t, r, o, u) {
    r = r.render;
    var a = t.ref;
    return (
      Vr(t, u),
      (o = hu(e, t, r, o, a, u)),
      (r = mu()),
      e !== null && !Rt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          xn(e, t, u))
        : (He && r && Yl(t), (t.flags |= 1), St(e, t, o, u), t.child)
    );
  }
  function Yf(e, t, r, o, u) {
    if (e === null) {
      var a = r.type;
      return typeof a == "function" &&
        !Wu(a) &&
        a.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = a), Jf(e, t, a, o, u))
        : ((e = mo(r.type, null, o, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((a = e.child), (e.lanes & u) === 0)) {
      var d = a.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : Ri), r(d, o) && e.ref === t.ref)
      )
        return xn(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = Hn(a, o)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Jf(e, t, r, o, u) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (Ri(a, o) && e.ref === t.ref)
        if (((Rt = !1), (t.pendingProps = o = a), (e.lanes & u) !== 0))
          (e.flags & 131072) !== 0 && (Rt = !0);
        else return (t.lanes = e.lanes), xn(e, t, u);
    }
    return Cu(e, t, r, o, u);
  }
  function Zf(e, t, r) {
    var o = t.pendingProps,
      u = o.children,
      a = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          $e(qr, It),
          (It |= r);
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = a !== null ? a.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            $e(qr, It),
            (It |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (o = a !== null ? a.baseLanes : r),
          $e(qr, It),
          (It |= o);
      }
    else
      a !== null ? ((o = a.baseLanes | r), (t.memoizedState = null)) : (o = r),
        $e(qr, It),
        (It |= o);
    return St(e, t, u, r), t.child;
  }
  function ed(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Cu(e, t, r, o, u) {
    var a = Ot(r) ? Yn : ht.current;
    return (
      (a = Ir(t, a)),
      Vr(t, u),
      (r = hu(e, t, r, o, a, u)),
      (o = mu()),
      e !== null && !Rt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          xn(e, t, u))
        : (He && o && Yl(t), (t.flags |= 1), St(e, t, r, u), t.child)
    );
  }
  function td(e, t, r, o, u) {
    if (Ot(r)) {
      var a = !0;
      $s(t);
    } else a = !1;
    if ((Vr(t, u), t.stateNode === null))
      ro(e, t), Vf(t, r, o), ku(t, r, o, u), (o = !0);
    else if (e === null) {
      var d = t.stateNode,
        m = t.memoizedProps;
      d.props = m;
      var g = d.context,
        P = r.contextType;
      typeof P == "object" && P !== null
        ? (P = bt(P))
        : ((P = Ot(r) ? Yn : ht.current), (P = Ir(t, P)));
      var M = r.getDerivedStateFromProps,
        U =
          typeof M == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function";
      U ||
        (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
          typeof d.componentWillReceiveProps != "function") ||
        ((m !== o || g !== P) && Hf(t, d, o, P)),
        (In = !1);
      var I = t.memoizedState;
      (d.state = I),
        Ks(t, o, d, u),
        (g = t.memoizedState),
        m !== o || I !== g || _t.current || In
          ? (typeof M == "function" && (Su(t, r, M, o), (g = t.memoizedState)),
            (m = In || Bf(t, r, m, o, I, g, P))
              ? (U ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = g)),
            (d.props = o),
            (d.state = g),
            (d.context = P),
            (o = m))
          : (typeof d.componentDidMount == "function" && (t.flags |= 4194308),
            (o = !1));
    } else {
      (d = t.stateNode),
        gf(e, t),
        (m = t.memoizedProps),
        (P = t.type === t.elementType ? m : Yt(t.type, m)),
        (d.props = P),
        (U = t.pendingProps),
        (I = d.context),
        (g = r.contextType),
        typeof g == "object" && g !== null
          ? (g = bt(g))
          : ((g = Ot(r) ? Yn : ht.current), (g = Ir(t, g)));
      var Z = r.getDerivedStateFromProps;
      (M =
        typeof Z == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function") ||
        (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
          typeof d.componentWillReceiveProps != "function") ||
        ((m !== U || I !== g) && Hf(t, d, o, g)),
        (In = !1),
        (I = t.memoizedState),
        (d.state = I),
        Ks(t, o, d, u);
      var ne = t.memoizedState;
      m !== U || I !== ne || _t.current || In
        ? (typeof Z == "function" && (Su(t, r, Z, o), (ne = t.memoizedState)),
          (P = In || Bf(t, r, P, o, I, ne, g) || !1)
            ? (M ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(o, ne, g),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(o, ne, g)),
              typeof d.componentDidUpdate == "function" && (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (m === e.memoizedProps && I === e.memoizedState) ||
                (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (m === e.memoizedProps && I === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = ne)),
          (d.props = o),
          (d.state = ne),
          (d.context = g),
          (o = P))
        : (typeof d.componentDidUpdate != "function" ||
            (m === e.memoizedProps && I === e.memoizedState) ||
            (t.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (m === e.memoizedProps && I === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return _u(e, t, r, o, a, u);
  }
  function _u(e, t, r, o, u, a) {
    ed(e, t);
    var d = (t.flags & 128) !== 0;
    if (!o && !d) return u && of(t, r, !1), xn(e, t, a);
    (o = t.stateNode), (Ay.current = t);
    var m =
      d && typeof r.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && d
        ? ((t.child = br(t, e.child, null, a)), (t.child = br(t, null, m, a)))
        : St(e, t, m, a),
      (t.memoizedState = o.state),
      u && of(t, r, !0),
      t.child
    );
  }
  function nd(e) {
    var t = e.stateNode;
    t.pendingContext
      ? rf(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && rf(e, t.context, !1),
      uu(e, t.containerInfo);
  }
  function rd(e, t, r, o, u) {
    return Ur(), tu(u), (t.flags |= 256), St(e, t, r, o), t.child;
  }
  var Ou = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ru(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function id(e, t, r) {
    var o = t.pendingProps,
      u = Qe.current,
      a = !1,
      d = (t.flags & 128) !== 0,
      m;
    if (
      ((m = d) ||
        (m = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      m
        ? ((a = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (u |= 1),
      $e(Qe, u & 1),
      e === null)
    )
      return (
        eu(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((d = o.children),
            (e = o.fallback),
            a
              ? ((o = t.mode),
                (a = t.child),
                (d = { mode: "hidden", children: d }),
                (o & 1) === 0 && a !== null
                  ? ((a.childLanes = 0), (a.pendingProps = d))
                  : (a = yo(d, o, 0, null)),
                (e = lr(e, o, r, null)),
                (a.return = t),
                (e.return = t),
                (a.sibling = e),
                (t.child = a),
                (t.child.memoizedState = Ru(r)),
                (t.memoizedState = Ou),
                e)
              : Pu(t, d))
      );
    if (((u = e.memoizedState), u !== null && ((m = u.dehydrated), m !== null)))
      return Fy(e, t, d, o, m, u, r);
    if (a) {
      (a = o.fallback), (d = t.mode), (u = e.child), (m = u.sibling);
      var g = { mode: "hidden", children: o.children };
      return (
        (d & 1) === 0 && t.child !== u
          ? ((o = t.child),
            (o.childLanes = 0),
            (o.pendingProps = g),
            (t.deletions = null))
          : ((o = Hn(u, g)), (o.subtreeFlags = u.subtreeFlags & 14680064)),
        m !== null ? (a = Hn(m, a)) : ((a = lr(a, d, r, null)), (a.flags |= 2)),
        (a.return = t),
        (o.return = t),
        (o.sibling = a),
        (t.child = o),
        (o = a),
        (a = t.child),
        (d = e.child.memoizedState),
        (d =
          d === null
            ? Ru(r)
            : {
                baseLanes: d.baseLanes | r,
                cachePool: null,
                transitions: d.transitions,
              }),
        (a.memoizedState = d),
        (a.childLanes = e.childLanes & ~r),
        (t.memoizedState = Ou),
        o
      );
    }
    return (
      (a = e.child),
      (e = a.sibling),
      (o = Hn(a, { mode: "visible", children: o.children })),
      (t.mode & 1) === 0 && (o.lanes = r),
      (o.return = t),
      (o.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = o),
      (t.memoizedState = null),
      o
    );
  }
  function Pu(e, t) {
    return (
      (t = yo({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function no(e, t, r, o) {
    return (
      o !== null && tu(o),
      br(t, e.child, null, r),
      (e = Pu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Fy(e, t, r, o, u, a, d) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = xu(Error(s(422)))), no(e, t, d, o))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((a = o.fallback),
          (u = t.mode),
          (o = yo({ mode: "visible", children: o.children }, u, 0, null)),
          (a = lr(a, u, d, null)),
          (a.flags |= 2),
          (o.return = t),
          (a.return = t),
          (o.sibling = a),
          (t.child = o),
          (t.mode & 1) !== 0 && br(t, e.child, null, d),
          (t.child.memoizedState = Ru(d)),
          (t.memoizedState = Ou),
          a);
    if ((t.mode & 1) === 0) return no(e, t, d, null);
    if (u.data === "$!") {
      if (((o = u.nextSibling && u.nextSibling.dataset), o)) var m = o.dgst;
      return (
        (o = m), (a = Error(s(419))), (o = xu(a, o, void 0)), no(e, t, d, o)
      );
    }
    if (((m = (d & e.childLanes) !== 0), Rt || m)) {
      if (((o = ot), o !== null)) {
        switch (d & -d) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        (u = (u & (o.suspendedLanes | d)) !== 0 ? 0 : u),
          u !== 0 &&
            u !== a.retryLane &&
            ((a.retryLane = u), Sn(e, u), en(o, e, u, -1));
      }
      return Hu(), (o = xu(Error(s(421)))), no(e, t, d, o);
    }
    return u.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Hy.bind(null, e)),
        (u._reactRetry = t),
        null)
      : ((e = a.treeContext),
        (zt = Ln(u.nextSibling)),
        (jt = t),
        (He = !0),
        (Xt = null),
        e !== null &&
          (($t[Ut++] = vn),
          ($t[Ut++] = wn),
          ($t[Ut++] = Jn),
          (vn = e.id),
          (wn = e.overflow),
          (Jn = t)),
        (t = Pu(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function sd(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), su(e.return, t, r);
  }
  function Tu(e, t, r, o, u) {
    var a = e.memoizedState;
    a === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: r,
          tailMode: u,
        })
      : ((a.isBackwards = t),
        (a.rendering = null),
        (a.renderingStartTime = 0),
        (a.last = o),
        (a.tail = r),
        (a.tailMode = u));
  }
  function od(e, t, r) {
    var o = t.pendingProps,
      u = o.revealOrder,
      a = o.tail;
    if ((St(e, t, o.children, r), (o = Qe.current), (o & 2) !== 0))
      (o = (o & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && sd(e, r, t);
          else if (e.tag === 19) sd(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      o &= 1;
    }
    if (($e(Qe, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (u) {
        case "forwards":
          for (r = t.child, u = null; r !== null; )
            (e = r.alternate),
              e !== null && Gs(e) === null && (u = r),
              (r = r.sibling);
          (r = u),
            r === null
              ? ((u = t.child), (t.child = null))
              : ((u = r.sibling), (r.sibling = null)),
            Tu(t, !1, u, r, a);
          break;
        case "backwards":
          for (r = null, u = t.child, t.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && Gs(e) === null)) {
              t.child = u;
              break;
            }
            (e = u.sibling), (u.sibling = r), (r = u), (u = e);
          }
          Tu(t, !0, r, null, a);
          break;
        case "together":
          Tu(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ro(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function xn(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (rr |= t.lanes),
      (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, r = Hn(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = Hn(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function Ny(e, t, r) {
    switch (t.tag) {
      case 3:
        nd(t), Ur();
        break;
      case 5:
        Sf(t);
        break;
      case 1:
        Ot(t.type) && $s(t);
        break;
      case 4:
        uu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          u = t.memoizedProps.value;
        $e(Ws, o._currentValue), (o._currentValue = u);
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? ($e(Qe, Qe.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
            ? id(e, t, r)
            : ($e(Qe, Qe.current & 1),
              (e = xn(e, t, r)),
              e !== null ? e.sibling : null);
        $e(Qe, Qe.current & 1);
        break;
      case 19:
        if (((o = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return od(e, t, r);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          $e(Qe, Qe.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Zf(e, t, r);
    }
    return xn(e, t, r);
  }
  var ld, Au, ud, ad;
  (ld = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (Au = function () {}),
    (ud = function (e, t, r, o) {
      var u = e.memoizedProps;
      if (u !== o) {
        (e = t.stateNode), tr(an.current);
        var a = null;
        switch (r) {
          case "input":
            (u = Sr(e, u)), (o = Sr(e, o)), (a = []);
            break;
          case "select":
            (u = G({}, u, { value: void 0 })),
              (o = G({}, o, { value: void 0 })),
              (a = []);
            break;
          case "textarea":
            (u = N(e, u)), (o = N(e, o)), (a = []);
            break;
          default:
            typeof u.onClick != "function" &&
              typeof o.onClick == "function" &&
              (e.onclick = zs);
        }
        Cr(r, o);
        var d;
        r = null;
        for (P in u)
          if (!o.hasOwnProperty(P) && u.hasOwnProperty(P) && u[P] != null)
            if (P === "style") {
              var m = u[P];
              for (d in m) m.hasOwnProperty(d) && (r || (r = {}), (r[d] = ""));
            } else
              P !== "dangerouslySetInnerHTML" &&
                P !== "children" &&
                P !== "suppressContentEditableWarning" &&
                P !== "suppressHydrationWarning" &&
                P !== "autoFocus" &&
                (c.hasOwnProperty(P)
                  ? a || (a = [])
                  : (a = a || []).push(P, null));
        for (P in o) {
          var g = o[P];
          if (
            ((m = u?.[P]),
            o.hasOwnProperty(P) && g !== m && (g != null || m != null))
          )
            if (P === "style")
              if (m) {
                for (d in m)
                  !m.hasOwnProperty(d) ||
                    (g && g.hasOwnProperty(d)) ||
                    (r || (r = {}), (r[d] = ""));
                for (d in g)
                  g.hasOwnProperty(d) &&
                    m[d] !== g[d] &&
                    (r || (r = {}), (r[d] = g[d]));
              } else r || (a || (a = []), a.push(P, r)), (r = g);
            else
              P === "dangerouslySetInnerHTML"
                ? ((g = g ? g.__html : void 0),
                  (m = m ? m.__html : void 0),
                  g != null && m !== g && (a = a || []).push(P, g))
                : P === "children"
                ? (typeof g != "string" && typeof g != "number") ||
                  (a = a || []).push(P, "" + g)
                : P !== "suppressContentEditableWarning" &&
                  P !== "suppressHydrationWarning" &&
                  (c.hasOwnProperty(P)
                    ? (g != null && P === "onScroll" && Ue("scroll", e),
                      a || m === g || (a = []))
                    : (a = a || []).push(P, g));
        }
        r && (a = a || []).push("style", r);
        var P = a;
        (t.updateQueue = P) && (t.flags |= 4);
      }
    }),
    (ad = function (e, t, r, o) {
      r !== o && (t.flags |= 4);
    });
  function Bi(e, t) {
    if (!He)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), (r = r.sibling);
          o === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function yt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      o = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags & 14680064),
          (o |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags),
          (o |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= o), (e.childLanes = r), t;
  }
  function Ly(e, t, r) {
    var o = t.pendingProps;
    switch ((Jl(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return yt(t), null;
      case 1:
        return Ot(t.type) && Ms(), yt(t), null;
      case 3:
        return (
          (o = t.stateNode),
          Hr(),
          be(_t),
          be(ht),
          fu(),
          o.pendingContext &&
            ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (Vs(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Xt !== null && (bu(Xt), (Xt = null)))),
          Au(e, t),
          yt(t),
          null
        );
      case 5:
        au(t);
        var u = tr(Ii.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          ud(e, t, r, o, u),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return yt(t), null;
          }
          if (((e = tr(an.current)), Vs(t))) {
            (o = t.stateNode), (r = t.type);
            var a = t.memoizedProps;
            switch (((o[un] = t), (o[Ni] = a), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                Ue("cancel", o), Ue("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ue("load", o);
                break;
              case "video":
              case "audio":
                for (u = 0; u < Ti.length; u++) Ue(Ti[u], o);
                break;
              case "source":
                Ue("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Ue("error", o), Ue("load", o);
                break;
              case "details":
                Ue("toggle", o);
                break;
              case "input":
                ai(o, a), Ue("invalid", o);
                break;
              case "select":
                (o._wrapperState = { wasMultiple: !!a.multiple }),
                  Ue("invalid", o);
                break;
              case "textarea":
                J(o, a), Ue("invalid", o);
            }
            Cr(r, a), (u = null);
            for (var d in a)
              if (a.hasOwnProperty(d)) {
                var m = a[d];
                d === "children"
                  ? typeof m == "string"
                    ? o.textContent !== m &&
                      (a.suppressHydrationWarning !== !0 &&
                        js(o.textContent, m, e),
                      (u = ["children", m]))
                    : typeof m == "number" &&
                      o.textContent !== "" + m &&
                      (a.suppressHydrationWarning !== !0 &&
                        js(o.textContent, m, e),
                      (u = ["children", "" + m]))
                  : c.hasOwnProperty(d) &&
                    m != null &&
                    d === "onScroll" &&
                    Ue("scroll", o);
              }
            switch (r) {
              case "input":
                qt(o), cl(o, a, !0);
                break;
              case "textarea":
                qt(o), V(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && (o.onclick = zs);
            }
            (o = u), (t.updateQueue = o), o !== null && (t.flags |= 4);
          } else {
            (d = u.nodeType === 9 ? u : u.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = le(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = d.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof o.is == "string"
                  ? (e = d.createElement(r, { is: o.is }))
                  : ((e = d.createElement(r)),
                    r === "select" &&
                      ((d = e),
                      o.multiple
                        ? (d.multiple = !0)
                        : o.size && (d.size = o.size)))
                : (e = d.createElementNS(e, r)),
              (e[un] = t),
              (e[Ni] = o),
              ld(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((d = fi(r, o)), r)) {
                case "dialog":
                  Ue("cancel", e), Ue("close", e), (u = o);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ue("load", e), (u = o);
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < Ti.length; u++) Ue(Ti[u], e);
                  u = o;
                  break;
                case "source":
                  Ue("error", e), (u = o);
                  break;
                case "img":
                case "image":
                case "link":
                  Ue("error", e), Ue("load", e), (u = o);
                  break;
                case "details":
                  Ue("toggle", e), (u = o);
                  break;
                case "input":
                  ai(e, o), (u = Sr(e, o)), Ue("invalid", e);
                  break;
                case "option":
                  u = o;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!o.multiple }),
                    (u = G({}, o, { value: void 0 })),
                    Ue("invalid", e);
                  break;
                case "textarea":
                  J(e, o), (u = N(e, o)), Ue("invalid", e);
                  break;
                default:
                  u = o;
              }
              Cr(r, u), (m = u);
              for (a in m)
                if (m.hasOwnProperty(a)) {
                  var g = m[a];
                  a === "style"
                    ? Er(e, g)
                    : a === "dangerouslySetInnerHTML"
                    ? ((g = g ? g.__html : void 0), g != null && wt(e, g))
                    : a === "children"
                    ? typeof g == "string"
                      ? (r !== "textarea" || g !== "") && on(e, g)
                      : typeof g == "number" && on(e, "" + g)
                    : a !== "suppressContentEditableWarning" &&
                      a !== "suppressHydrationWarning" &&
                      a !== "autoFocus" &&
                      (c.hasOwnProperty(a)
                        ? g != null && a === "onScroll" && Ue("scroll", e)
                        : g != null && Y(e, a, g, d));
                }
              switch (r) {
                case "input":
                  qt(e), cl(e, o, !1);
                  break;
                case "textarea":
                  qt(e), V(e);
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + he(o.value));
                  break;
                case "select":
                  (e.multiple = !!o.multiple),
                    (a = o.value),
                    a != null
                      ? _(e, !!o.multiple, a, !1)
                      : o.defaultValue != null &&
                        _(e, !!o.multiple, o.defaultValue, !0);
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = zs);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return yt(t), null;
      case 6:
        if (e && t.stateNode != null) ad(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
          if (((r = tr(Ii.current)), tr(an.current), Vs(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[un] = t),
              (a = o.nodeValue !== r) && ((e = jt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  js(o.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    js(o.nodeValue, r, (e.mode & 1) !== 0);
              }
            a && (t.flags |= 4);
          } else
            (o = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(o)),
              (o[un] = t),
              (t.stateNode = o);
        }
        return yt(t), null;
      case 13:
        if (
          (be(Qe),
          (o = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (He && zt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            df(), Ur(), (t.flags |= 98560), (a = !1);
          else if (((a = Vs(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (
                ((a = t.memoizedState),
                (a = a !== null ? a.dehydrated : null),
                !a)
              )
                throw Error(s(317));
              a[un] = t;
            } else
              Ur(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            yt(t), (a = !1);
          } else Xt !== null && (bu(Xt), (Xt = null)), (a = !0);
          if (!a) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Qe.current & 1) !== 0
                  ? it === 0 && (it = 3)
                  : Hu())),
            t.updateQueue !== null && (t.flags |= 4),
            yt(t),
            null);
      case 4:
        return (
          Hr(),
          Au(e, t),
          e === null && Ai(t.stateNode.containerInfo),
          yt(t),
          null
        );
      case 10:
        return iu(t.type._context), yt(t), null;
      case 17:
        return Ot(t.type) && Ms(), yt(t), null;
      case 19:
        if ((be(Qe), (a = t.memoizedState), a === null)) return yt(t), null;
        if (((o = (t.flags & 128) !== 0), (d = a.rendering), d === null))
          if (o) Bi(a, !1);
          else {
            if (it !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((d = Gs(e)), d !== null)) {
                  for (
                    t.flags |= 128,
                      Bi(a, !1),
                      o = d.updateQueue,
                      o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      o = r,
                      r = t.child;
                    r !== null;

                  )
                    (a = r),
                      (e = o),
                      (a.flags &= 14680066),
                      (d = a.alternate),
                      d === null
                        ? ((a.childLanes = 0),
                          (a.lanes = e),
                          (a.child = null),
                          (a.subtreeFlags = 0),
                          (a.memoizedProps = null),
                          (a.memoizedState = null),
                          (a.updateQueue = null),
                          (a.dependencies = null),
                          (a.stateNode = null))
                        : ((a.childLanes = d.childLanes),
                          (a.lanes = d.lanes),
                          (a.child = d.child),
                          (a.subtreeFlags = 0),
                          (a.deletions = null),
                          (a.memoizedProps = d.memoizedProps),
                          (a.memoizedState = d.memoizedState),
                          (a.updateQueue = d.updateQueue),
                          (a.type = d.type),
                          (e = d.dependencies),
                          (a.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return $e(Qe, (Qe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null &&
              Ge() > Kr &&
              ((t.flags |= 128), (o = !0), Bi(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = Gs(d)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                Bi(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !d.alternate &&
                  !He)
              )
                return yt(t), null;
            } else
              2 * Ge() - a.renderingStartTime > Kr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (o = !0), Bi(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((d.sibling = t.child), (t.child = d))
            : ((r = a.last),
              r !== null ? (r.sibling = d) : (t.child = d),
              (a.last = d));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = Ge()),
            (t.sibling = null),
            (r = Qe.current),
            $e(Qe, o ? (r & 1) | 2 : r & 1),
            t)
          : (yt(t), null);
      case 22:
      case 23:
        return (
          Vu(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && (t.mode & 1) !== 0
            ? (It & 1073741824) !== 0 &&
              (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : yt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Dy(e, t) {
    switch ((Jl(t), t.tag)) {
      case 1:
        return (
          Ot(t.type) && Ms(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Hr(),
          be(_t),
          be(ht),
          fu(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return au(t), null;
      case 13:
        if (
          (be(Qe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Ur();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return be(Qe), null;
      case 4:
        return Hr(), null;
      case 10:
        return iu(t.type._context), null;
      case 22:
      case 23:
        return Vu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var io = !1,
    gt = !1,
    jy = typeof WeakSet == "function" ? WeakSet : Set,
    te = null;
  function Qr(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (o) {
          Ke(e, t, o);
        }
      else r.current = null;
  }
  function Fu(e, t, r) {
    try {
      r();
    } catch (o) {
      Ke(e, t, o);
    }
  }
  var cd = !1;
  function zy(e, t) {
    if (((Vl = Cs), (e = bc()), jl(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var o = r.getSelection && r.getSelection();
          if (o && o.rangeCount !== 0) {
            r = o.anchorNode;
            var u = o.anchorOffset,
              a = o.focusNode;
            o = o.focusOffset;
            try {
              r.nodeType, a.nodeType;
            } catch {
              r = null;
              break e;
            }
            var d = 0,
              m = -1,
              g = -1,
              P = 0,
              M = 0,
              U = e,
              I = null;
            t: for (;;) {
              for (
                var Z;
                U !== r || (u !== 0 && U.nodeType !== 3) || (m = d + u),
                  U !== a || (o !== 0 && U.nodeType !== 3) || (g = d + o),
                  U.nodeType === 3 && (d += U.nodeValue.length),
                  (Z = U.firstChild) !== null;

              )
                (I = U), (U = Z);
              for (;;) {
                if (U === e) break t;
                if (
                  (I === r && ++P === u && (m = d),
                  I === a && ++M === o && (g = d),
                  (Z = U.nextSibling) !== null)
                )
                  break;
                (U = I), (I = U.parentNode);
              }
              U = Z;
            }
            r = m === -1 || g === -1 ? null : { start: m, end: g };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Hl = { focusedElem: e, selectionRange: r }, Cs = !1, te = t;
      te !== null;

    )
      if (
        ((t = te), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (te = e);
      else
        for (; te !== null; ) {
          t = te;
          try {
            var ne = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ne !== null) {
                    var re = ne.memoizedProps,
                      Xe = ne.memoizedState,
                      C = t.stateNode,
                      w = C.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? re : Yt(t.type, re),
                        Xe
                      );
                    C.__reactInternalSnapshotBeforeUpdate = w;
                  }
                  break;
                case 3:
                  var O = t.stateNode.containerInfo;
                  O.nodeType === 1
                    ? (O.textContent = "")
                    : O.nodeType === 9 &&
                      O.documentElement &&
                      O.removeChild(O.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (b) {
            Ke(t, t.return, b);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (te = e);
            break;
          }
          te = t.return;
        }
    return (ne = cd), (cd = !1), ne;
  }
  function Vi(e, t, r) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var u = (o = o.next);
      do {
        if ((u.tag & e) === e) {
          var a = u.destroy;
          (u.destroy = void 0), a !== void 0 && Fu(t, r, a);
        }
        u = u.next;
      } while (u !== o);
    }
  }
  function so(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var o = r.create;
          r.destroy = o();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Nu(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function fd(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), fd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[un],
          delete t[Ni],
          delete t[Kl],
          delete t[vy],
          delete t[wy])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function dd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function pd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || dd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Lu(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = zs));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Lu(e, t, r), e = e.sibling; e !== null; )
        Lu(e, t, r), (e = e.sibling);
  }
  function Du(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Du(e, t, r), e = e.sibling; e !== null; )
        Du(e, t, r), (e = e.sibling);
  }
  var ft = null,
    Jt = !1;
  function $n(e, t, r) {
    for (r = r.child; r !== null; ) hd(e, t, r), (r = r.sibling);
  }
  function hd(e, t, r) {
    if (ln && typeof ln.onCommitFiberUnmount == "function")
      try {
        ln.onCommitFiberUnmount(vs, r);
      } catch {}
    switch (r.tag) {
      case 5:
        gt || Qr(r, t);
      case 6:
        var o = ft,
          u = Jt;
        (ft = null),
          $n(e, t, r),
          (ft = o),
          (Jt = u),
          ft !== null &&
            (Jt
              ? ((e = ft),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : ft.removeChild(r.stateNode));
        break;
      case 18:
        ft !== null &&
          (Jt
            ? ((e = ft),
              (r = r.stateNode),
              e.nodeType === 8
                ? ql(e.parentNode, r)
                : e.nodeType === 1 && ql(e, r),
              ki(e))
            : ql(ft, r.stateNode));
        break;
      case 4:
        (o = ft),
          (u = Jt),
          (ft = r.stateNode.containerInfo),
          (Jt = !0),
          $n(e, t, r),
          (ft = o),
          (Jt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !gt &&
          ((o = r.updateQueue), o !== null && ((o = o.lastEffect), o !== null))
        ) {
          u = o = o.next;
          do {
            var a = u,
              d = a.destroy;
            (a = a.tag),
              d !== void 0 && ((a & 2) !== 0 || (a & 4) !== 0) && Fu(r, t, d),
              (u = u.next);
          } while (u !== o);
        }
        $n(e, t, r);
        break;
      case 1:
        if (
          !gt &&
          (Qr(r, t),
          (o = r.stateNode),
          typeof o.componentWillUnmount == "function")
        )
          try {
            (o.props = r.memoizedProps),
              (o.state = r.memoizedState),
              o.componentWillUnmount();
          } catch (m) {
            Ke(r, t, m);
          }
        $n(e, t, r);
        break;
      case 21:
        $n(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((gt = (o = gt) || r.memoizedState !== null), $n(e, t, r), (gt = o))
          : $n(e, t, r);
        break;
      default:
        $n(e, t, r);
    }
  }
  function md(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new jy()),
        t.forEach(function (o) {
          var u = Wy.bind(null, e, o);
          r.has(o) || (r.add(o), o.then(u, u));
        });
    }
  }
  function Zt(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var o = 0; o < r.length; o++) {
        var u = r[o];
        try {
          var a = e,
            d = t,
            m = d;
          e: for (; m !== null; ) {
            switch (m.tag) {
              case 5:
                (ft = m.stateNode), (Jt = !1);
                break e;
              case 3:
                (ft = m.stateNode.containerInfo), (Jt = !0);
                break e;
              case 4:
                (ft = m.stateNode.containerInfo), (Jt = !0);
                break e;
            }
            m = m.return;
          }
          if (ft === null) throw Error(s(160));
          hd(a, d, u), (ft = null), (Jt = !1);
          var g = u.alternate;
          g !== null && (g.return = null), (u.return = null);
        } catch (P) {
          Ke(u, t, P);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) yd(t, e), (t = t.sibling);
  }
  function yd(e, t) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Zt(t, e), fn(e), o & 4)) {
          try {
            Vi(3, e, e.return), so(3, e);
          } catch (re) {
            Ke(e, e.return, re);
          }
          try {
            Vi(5, e, e.return);
          } catch (re) {
            Ke(e, e.return, re);
          }
        }
        break;
      case 1:
        Zt(t, e), fn(e), o & 512 && r !== null && Qr(r, r.return);
        break;
      case 5:
        if (
          (Zt(t, e),
          fn(e),
          o & 512 && r !== null && Qr(r, r.return),
          e.flags & 32)
        ) {
          var u = e.stateNode;
          try {
            on(u, "");
          } catch (re) {
            Ke(e, e.return, re);
          }
        }
        if (o & 4 && ((u = e.stateNode), u != null)) {
          var a = e.memoizedProps,
            d = r !== null ? r.memoizedProps : a,
            m = e.type,
            g = e.updateQueue;
          if (((e.updateQueue = null), g !== null))
            try {
              m === "input" && a.type === "radio" && a.name != null && hs(u, a),
                fi(m, d);
              var P = fi(m, a);
              for (d = 0; d < g.length; d += 2) {
                var M = g[d],
                  U = g[d + 1];
                M === "style"
                  ? Er(u, U)
                  : M === "dangerouslySetInnerHTML"
                  ? wt(u, U)
                  : M === "children"
                  ? on(u, U)
                  : Y(u, M, U, P);
              }
              switch (m) {
                case "input":
                  ci(u, a);
                  break;
                case "textarea":
                  q(u, a);
                  break;
                case "select":
                  var I = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!a.multiple;
                  var Z = a.value;
                  Z != null
                    ? _(u, !!a.multiple, Z, !1)
                    : I !== !!a.multiple &&
                      (a.defaultValue != null
                        ? _(u, !!a.multiple, a.defaultValue, !0)
                        : _(u, !!a.multiple, a.multiple ? [] : "", !1));
              }
              u[Ni] = a;
            } catch (re) {
              Ke(e, e.return, re);
            }
        }
        break;
      case 6:
        if ((Zt(t, e), fn(e), o & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (u = e.stateNode), (a = e.memoizedProps);
          try {
            u.nodeValue = a;
          } catch (re) {
            Ke(e, e.return, re);
          }
        }
        break;
      case 3:
        if (
          (Zt(t, e), fn(e), o & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            ki(t.containerInfo);
          } catch (re) {
            Ke(e, e.return, re);
          }
        break;
      case 4:
        Zt(t, e), fn(e);
        break;
      case 13:
        Zt(t, e),
          fn(e),
          (u = e.child),
          u.flags & 8192 &&
            ((a = u.memoizedState !== null),
            (u.stateNode.isHidden = a),
            !a ||
              (u.alternate !== null && u.alternate.memoizedState !== null) ||
              (Iu = Ge())),
          o & 4 && md(e);
        break;
      case 22:
        if (
          ((M = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((gt = (P = gt) || M), Zt(t, e), (gt = P)) : Zt(t, e),
          fn(e),
          o & 8192)
        ) {
          if (
            ((P = e.memoizedState !== null),
            (e.stateNode.isHidden = P) && !M && (e.mode & 1) !== 0)
          )
            for (te = e, M = e.child; M !== null; ) {
              for (U = te = M; te !== null; ) {
                switch (((I = te), (Z = I.child), I.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Vi(4, I, I.return);
                    break;
                  case 1:
                    Qr(I, I.return);
                    var ne = I.stateNode;
                    if (typeof ne.componentWillUnmount == "function") {
                      (o = I), (r = I.return);
                      try {
                        (t = o),
                          (ne.props = t.memoizedProps),
                          (ne.state = t.memoizedState),
                          ne.componentWillUnmount();
                      } catch (re) {
                        Ke(o, r, re);
                      }
                    }
                    break;
                  case 5:
                    Qr(I, I.return);
                    break;
                  case 22:
                    if (I.memoizedState !== null) {
                      wd(U);
                      continue;
                    }
                }
                Z !== null ? ((Z.return = I), (te = Z)) : wd(U);
              }
              M = M.sibling;
            }
          e: for (M = null, U = e; ; ) {
            if (U.tag === 5) {
              if (M === null) {
                M = U;
                try {
                  (u = U.stateNode),
                    P
                      ? ((a = u.style),
                        typeof a.setProperty == "function"
                          ? a.setProperty("display", "none", "important")
                          : (a.display = "none"))
                      : ((m = U.stateNode),
                        (g = U.memoizedProps.style),
                        (d =
                          g != null && g.hasOwnProperty("display")
                            ? g.display
                            : null),
                        (m.style.display = xr("display", d)));
                } catch (re) {
                  Ke(e, e.return, re);
                }
              }
            } else if (U.tag === 6) {
              if (M === null)
                try {
                  U.stateNode.nodeValue = P ? "" : U.memoizedProps;
                } catch (re) {
                  Ke(e, e.return, re);
                }
            } else if (
              ((U.tag !== 22 && U.tag !== 23) ||
                U.memoizedState === null ||
                U === e) &&
              U.child !== null
            ) {
              (U.child.return = U), (U = U.child);
              continue;
            }
            if (U === e) break e;
            for (; U.sibling === null; ) {
              if (U.return === null || U.return === e) break e;
              M === U && (M = null), (U = U.return);
            }
            M === U && (M = null),
              (U.sibling.return = U.return),
              (U = U.sibling);
          }
        }
        break;
      case 19:
        Zt(t, e), fn(e), o & 4 && md(e);
        break;
      case 21:
        break;
      default:
        Zt(t, e), fn(e);
    }
  }
  function fn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (dd(r)) {
              var o = r;
              break e;
            }
            r = r.return;
          }
          throw Error(s(160));
        }
        switch (o.tag) {
          case 5:
            var u = o.stateNode;
            o.flags & 32 && (on(u, ""), (o.flags &= -33));
            var a = pd(e);
            Du(e, a, u);
            break;
          case 3:
          case 4:
            var d = o.stateNode.containerInfo,
              m = pd(e);
            Lu(e, m, d);
            break;
          default:
            throw Error(s(161));
        }
      } catch (g) {
        Ke(e, e.return, g);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Iy(e, t, r) {
    (te = e), gd(e);
  }
  function gd(e, t, r) {
    for (var o = (e.mode & 1) !== 0; te !== null; ) {
      var u = te,
        a = u.child;
      if (u.tag === 22 && o) {
        var d = u.memoizedState !== null || io;
        if (!d) {
          var m = u.alternate,
            g = (m !== null && m.memoizedState !== null) || gt;
          m = io;
          var P = gt;
          if (((io = d), (gt = g) && !P))
            for (te = u; te !== null; )
              (d = te),
                (g = d.child),
                d.tag === 22 && d.memoizedState !== null
                  ? Sd(u)
                  : g !== null
                  ? ((g.return = d), (te = g))
                  : Sd(u);
          for (; a !== null; ) (te = a), gd(a), (a = a.sibling);
          (te = u), (io = m), (gt = P);
        }
        vd(e);
      } else
        (u.subtreeFlags & 8772) !== 0 && a !== null
          ? ((a.return = u), (te = a))
          : vd(e);
    }
  }
  function vd(e) {
    for (; te !== null; ) {
      var t = te;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                gt || so(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !gt)
                  if (r === null) o.componentDidMount();
                  else {
                    var u =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : Yt(t.type, r.memoizedProps);
                    o.componentDidUpdate(
                      u,
                      r.memoizedState,
                      o.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var a = t.updateQueue;
                a !== null && wf(t, a, o);
                break;
              case 3:
                var d = t.updateQueue;
                if (d !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  wf(t, d, r);
                }
                break;
              case 5:
                var m = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = m;
                  var g = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      g.autoFocus && r.focus();
                      break;
                    case "img":
                      g.src && (r.src = g.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var P = t.alternate;
                  if (P !== null) {
                    var M = P.memoizedState;
                    if (M !== null) {
                      var U = M.dehydrated;
                      U !== null && ki(U);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          gt || (t.flags & 512 && Nu(t));
        } catch (I) {
          Ke(t, t.return, I);
        }
      }
      if (t === e) {
        te = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (te = r);
        break;
      }
      te = t.return;
    }
  }
  function wd(e) {
    for (; te !== null; ) {
      var t = te;
      if (t === e) {
        te = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (te = r);
        break;
      }
      te = t.return;
    }
  }
  function Sd(e) {
    for (; te !== null; ) {
      var t = te;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              so(4, t);
            } catch (g) {
              Ke(t, r, g);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var u = t.return;
              try {
                o.componentDidMount();
              } catch (g) {
                Ke(t, u, g);
              }
            }
            var a = t.return;
            try {
              Nu(t);
            } catch (g) {
              Ke(t, a, g);
            }
            break;
          case 5:
            var d = t.return;
            try {
              Nu(t);
            } catch (g) {
              Ke(t, d, g);
            }
        }
      } catch (g) {
        Ke(t, t.return, g);
      }
      if (t === e) {
        te = null;
        break;
      }
      var m = t.sibling;
      if (m !== null) {
        (m.return = t.return), (te = m);
        break;
      }
      te = t.return;
    }
  }
  var My = Math.ceil,
    oo = K.ReactCurrentDispatcher,
    ju = K.ReactCurrentOwner,
    Vt = K.ReactCurrentBatchConfig,
    Te = 0,
    ot = null,
    Ze = null,
    dt = 0,
    It = 0,
    qr = Dn(0),
    it = 0,
    Hi = null,
    rr = 0,
    lo = 0,
    zu = 0,
    Wi = null,
    Pt = null,
    Iu = 0,
    Kr = 1 / 0,
    En = null,
    uo = !1,
    Mu = null,
    Un = null,
    ao = !1,
    bn = null,
    co = 0,
    Qi = 0,
    $u = null,
    fo = -1,
    po = 0;
  function kt() {
    return (Te & 6) !== 0 ? Ge() : fo !== -1 ? fo : (fo = Ge());
  }
  function Bn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Te & 2) !== 0 && dt !== 0
      ? dt & -dt
      : ky.transition !== null
      ? (po === 0 && (po = dc()), po)
      : ((e = ze),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : kc(e.type))),
        e);
  }
  function en(e, t, r, o) {
    if (50 < Qi) throw ((Qi = 0), ($u = null), Error(s(185)));
    yi(e, r, o),
      ((Te & 2) === 0 || e !== ot) &&
        (e === ot && ((Te & 2) === 0 && (lo |= r), it === 4 && Vn(e, dt)),
        Tt(e, o),
        r === 1 &&
          Te === 0 &&
          (t.mode & 1) === 0 &&
          ((Kr = Ge() + 500), Us && zn()));
  }
  function Tt(e, t) {
    var r = e.callbackNode;
    km(e, t);
    var o = ks(e, e === ot ? dt : 0);
    if (o === 0)
      r !== null && ac(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && ac(r), t === 1))
        e.tag === 0 ? Sy(xd.bind(null, e)) : lf(xd.bind(null, e)),
          yy(function () {
            (Te & 6) === 0 && zn();
          }),
          (r = null);
      else {
        switch (pc(o)) {
          case 1:
            r = vl;
            break;
          case 4:
            r = cc;
            break;
          case 16:
            r = gs;
            break;
          case 536870912:
            r = fc;
            break;
          default:
            r = gs;
        }
        r = Ad(r, kd.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function kd(e, t) {
    if (((fo = -1), (po = 0), (Te & 6) !== 0)) throw Error(s(327));
    var r = e.callbackNode;
    if (Gr() && e.callbackNode !== r) return null;
    var o = ks(e, e === ot ? dt : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = ho(e, o);
    else {
      t = o;
      var u = Te;
      Te |= 2;
      var a = Cd();
      (ot !== e || dt !== t) && ((En = null), (Kr = Ge() + 500), sr(e, t));
      do
        try {
          by();
          break;
        } catch (m) {
          Ed(e, m);
        }
      while (!0);
      ru(),
        (oo.current = a),
        (Te = u),
        Ze !== null ? (t = 0) : ((ot = null), (dt = 0), (t = it));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((u = wl(e)), u !== 0 && ((o = u), (t = Uu(e, u)))),
        t === 1)
      )
        throw ((r = Hi), sr(e, 0), Vn(e, o), Tt(e, Ge()), r);
      if (t === 6) Vn(e, o);
      else {
        if (
          ((u = e.current.alternate),
          (o & 30) === 0 &&
            !$y(u) &&
            ((t = ho(e, o)),
            t === 2 && ((a = wl(e)), a !== 0 && ((o = a), (t = Uu(e, a)))),
            t === 1))
        )
          throw ((r = Hi), sr(e, 0), Vn(e, o), Tt(e, Ge()), r);
        switch (((e.finishedWork = u), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            or(e, Pt, En);
            break;
          case 3:
            if (
              (Vn(e, o),
              (o & 130023424) === o && ((t = Iu + 500 - Ge()), 10 < t))
            ) {
              if (ks(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & o) !== o)) {
                kt(), (e.pingedLanes |= e.suspendedLanes & u);
                break;
              }
              e.timeoutHandle = Ql(or.bind(null, e, Pt, En), t);
              break;
            }
            or(e, Pt, En);
            break;
          case 4:
            if ((Vn(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, u = -1; 0 < o; ) {
              var d = 31 - Kt(o);
              (a = 1 << d), (d = t[d]), d > u && (u = d), (o &= ~a);
            }
            if (
              ((o = u),
              (o = Ge() - o),
              (o =
                (120 > o
                  ? 120
                  : 480 > o
                  ? 480
                  : 1080 > o
                  ? 1080
                  : 1920 > o
                  ? 1920
                  : 3e3 > o
                  ? 3e3
                  : 4320 > o
                  ? 4320
                  : 1960 * My(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = Ql(or.bind(null, e, Pt, En), o);
              break;
            }
            or(e, Pt, En);
            break;
          case 5:
            or(e, Pt, En);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return Tt(e, Ge()), e.callbackNode === r ? kd.bind(null, e) : null;
  }
  function Uu(e, t) {
    var r = Wi;
    return (
      e.current.memoizedState.isDehydrated && (sr(e, t).flags |= 256),
      (e = ho(e, t)),
      e !== 2 && ((t = Pt), (Pt = r), t !== null && bu(t)),
      e
    );
  }
  function bu(e) {
    Pt === null ? (Pt = e) : Pt.push.apply(Pt, e);
  }
  function $y(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var o = 0; o < r.length; o++) {
            var u = r[o],
              a = u.getSnapshot;
            u = u.value;
            try {
              if (!Gt(a(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Vn(e, t) {
    for (
      t &= ~zu,
        t &= ~lo,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - Kt(t),
        o = 1 << r;
      (e[r] = -1), (t &= ~o);
    }
  }
  function xd(e) {
    if ((Te & 6) !== 0) throw Error(s(327));
    Gr();
    var t = ks(e, 0);
    if ((t & 1) === 0) return Tt(e, Ge()), null;
    var r = ho(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = wl(e);
      o !== 0 && ((t = o), (r = Uu(e, o)));
    }
    if (r === 1) throw ((r = Hi), sr(e, 0), Vn(e, t), Tt(e, Ge()), r);
    if (r === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      or(e, Pt, En),
      Tt(e, Ge()),
      null
    );
  }
  function Bu(e, t) {
    var r = Te;
    Te |= 1;
    try {
      return e(t);
    } finally {
      (Te = r), Te === 0 && ((Kr = Ge() + 500), Us && zn());
    }
  }
  function ir(e) {
    bn !== null && bn.tag === 0 && (Te & 6) === 0 && Gr();
    var t = Te;
    Te |= 1;
    var r = Vt.transition,
      o = ze;
    try {
      if (((Vt.transition = null), (ze = 1), e)) return e();
    } finally {
      (ze = o), (Vt.transition = r), (Te = t), (Te & 6) === 0 && zn();
    }
  }
  function Vu() {
    (It = qr.current), be(qr);
  }
  function sr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), my(r)), Ze !== null))
      for (r = Ze.return; r !== null; ) {
        var o = r;
        switch ((Jl(o), o.tag)) {
          case 1:
            (o = o.type.childContextTypes), o != null && Ms();
            break;
          case 3:
            Hr(), be(_t), be(ht), fu();
            break;
          case 5:
            au(o);
            break;
          case 4:
            Hr();
            break;
          case 13:
            be(Qe);
            break;
          case 19:
            be(Qe);
            break;
          case 10:
            iu(o.type._context);
            break;
          case 22:
          case 23:
            Vu();
        }
        r = r.return;
      }
    if (
      ((ot = e),
      (Ze = e = Hn(e.current, null)),
      (dt = It = t),
      (it = 0),
      (Hi = null),
      (zu = lo = rr = 0),
      (Pt = Wi = null),
      er !== null)
    ) {
      for (t = 0; t < er.length; t++)
        if (((r = er[t]), (o = r.interleaved), o !== null)) {
          r.interleaved = null;
          var u = o.next,
            a = r.pending;
          if (a !== null) {
            var d = a.next;
            (a.next = u), (o.next = d);
          }
          r.pending = o;
        }
      er = null;
    }
    return e;
  }
  function Ed(e, t) {
    do {
      var r = Ze;
      try {
        if ((ru(), (Xs.current = eo), Ys)) {
          for (var o = qe.memoizedState; o !== null; ) {
            var u = o.queue;
            u !== null && (u.pending = null), (o = o.next);
          }
          Ys = !1;
        }
        if (
          ((nr = 0),
          (st = rt = qe = null),
          (Mi = !1),
          ($i = 0),
          (ju.current = null),
          r === null || r.return === null)
        ) {
          (it = 1), (Hi = t), (Ze = null);
          break;
        }
        e: {
          var a = e,
            d = r.return,
            m = r,
            g = t;
          if (
            ((t = dt),
            (m.flags |= 32768),
            g !== null && typeof g == "object" && typeof g.then == "function")
          ) {
            var P = g,
              M = m,
              U = M.tag;
            if ((M.mode & 1) === 0 && (U === 0 || U === 11 || U === 15)) {
              var I = M.alternate;
              I
                ? ((M.updateQueue = I.updateQueue),
                  (M.memoizedState = I.memoizedState),
                  (M.lanes = I.lanes))
                : ((M.updateQueue = null), (M.memoizedState = null));
            }
            var Z = Kf(d);
            if (Z !== null) {
              (Z.flags &= -257),
                Gf(Z, d, m, a, t),
                Z.mode & 1 && qf(a, P, t),
                (t = Z),
                (g = P);
              var ne = t.updateQueue;
              if (ne === null) {
                var re = new Set();
                re.add(g), (t.updateQueue = re);
              } else ne.add(g);
              break e;
            } else {
              if ((t & 1) === 0) {
                qf(a, P, t), Hu();
                break e;
              }
              g = Error(s(426));
            }
          } else if (He && m.mode & 1) {
            var Xe = Kf(d);
            if (Xe !== null) {
              (Xe.flags & 65536) === 0 && (Xe.flags |= 256),
                Gf(Xe, d, m, a, t),
                tu(Wr(g, m));
              break e;
            }
          }
          (a = g = Wr(g, m)),
            it !== 4 && (it = 2),
            Wi === null ? (Wi = [a]) : Wi.push(a),
            (a = d);
          do {
            switch (a.tag) {
              case 3:
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var C = Wf(a, g, t);
                vf(a, C);
                break e;
              case 1:
                m = g;
                var w = a.type,
                  O = a.stateNode;
                if (
                  (a.flags & 128) === 0 &&
                  (typeof w.getDerivedStateFromError == "function" ||
                    (O !== null &&
                      typeof O.componentDidCatch == "function" &&
                      (Un === null || !Un.has(O))))
                ) {
                  (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                  var b = Qf(a, m, t);
                  vf(a, b);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        Od(r);
      } catch (se) {
        (t = se), Ze === r && r !== null && (Ze = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Cd() {
    var e = oo.current;
    return (oo.current = eo), e === null ? eo : e;
  }
  function Hu() {
    (it === 0 || it === 3 || it === 2) && (it = 4),
      ot === null ||
        ((rr & 268435455) === 0 && (lo & 268435455) === 0) ||
        Vn(ot, dt);
  }
  function ho(e, t) {
    var r = Te;
    Te |= 2;
    var o = Cd();
    (ot !== e || dt !== t) && ((En = null), sr(e, t));
    do
      try {
        Uy();
        break;
      } catch (u) {
        Ed(e, u);
      }
    while (!0);
    if ((ru(), (Te = r), (oo.current = o), Ze !== null)) throw Error(s(261));
    return (ot = null), (dt = 0), it;
  }
  function Uy() {
    for (; Ze !== null; ) _d(Ze);
  }
  function by() {
    for (; Ze !== null && !dm(); ) _d(Ze);
  }
  function _d(e) {
    var t = Td(e.alternate, e, It);
    (e.memoizedProps = e.pendingProps),
      t === null ? Od(e) : (Ze = t),
      (ju.current = null);
  }
  function Od(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Ly(r, t, It)), r !== null)) {
          Ze = r;
          return;
        }
      } else {
        if (((r = Dy(r, t)), r !== null)) {
          (r.flags &= 32767), (Ze = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (it = 6), (Ze = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ze = t;
        return;
      }
      Ze = t = e;
    } while (t !== null);
    it === 0 && (it = 5);
  }
  function or(e, t, r) {
    var o = ze,
      u = Vt.transition;
    try {
      (Vt.transition = null), (ze = 1), By(e, t, r, o);
    } finally {
      (Vt.transition = u), (ze = o);
    }
    return null;
  }
  function By(e, t, r, o) {
    do Gr();
    while (bn !== null);
    if ((Te & 6) !== 0) throw Error(s(327));
    r = e.finishedWork;
    var u = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(s(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var a = r.lanes | r.childLanes;
    if (
      (xm(e, a),
      e === ot && ((Ze = ot = null), (dt = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        ao ||
        ((ao = !0),
        Ad(gs, function () {
          return Gr(), null;
        })),
      (a = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || a)
    ) {
      (a = Vt.transition), (Vt.transition = null);
      var d = ze;
      ze = 1;
      var m = Te;
      (Te |= 4),
        (ju.current = null),
        zy(e, r),
        yd(r, e),
        uy(Hl),
        (Cs = !!Vl),
        (Hl = Vl = null),
        (e.current = r),
        Iy(r),
        pm(),
        (Te = m),
        (ze = d),
        (Vt.transition = a);
    } else e.current = r;
    if (
      (ao && ((ao = !1), (bn = e), (co = u)),
      (a = e.pendingLanes),
      a === 0 && (Un = null),
      ym(r.stateNode),
      Tt(e, Ge()),
      t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        (u = t[r]), o(u.value, { componentStack: u.stack, digest: u.digest });
    if (uo) throw ((uo = !1), (e = Mu), (Mu = null), e);
    return (
      (co & 1) !== 0 && e.tag !== 0 && Gr(),
      (a = e.pendingLanes),
      (a & 1) !== 0 ? (e === $u ? Qi++ : ((Qi = 0), ($u = e))) : (Qi = 0),
      zn(),
      null
    );
  }
  function Gr() {
    if (bn !== null) {
      var e = pc(co),
        t = Vt.transition,
        r = ze;
      try {
        if (((Vt.transition = null), (ze = 16 > e ? 16 : e), bn === null))
          var o = !1;
        else {
          if (((e = bn), (bn = null), (co = 0), (Te & 6) !== 0))
            throw Error(s(331));
          var u = Te;
          for (Te |= 4, te = e.current; te !== null; ) {
            var a = te,
              d = a.child;
            if ((te.flags & 16) !== 0) {
              var m = a.deletions;
              if (m !== null) {
                for (var g = 0; g < m.length; g++) {
                  var P = m[g];
                  for (te = P; te !== null; ) {
                    var M = te;
                    switch (M.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Vi(8, M, a);
                    }
                    var U = M.child;
                    if (U !== null) (U.return = M), (te = U);
                    else
                      for (; te !== null; ) {
                        M = te;
                        var I = M.sibling,
                          Z = M.return;
                        if ((fd(M), M === P)) {
                          te = null;
                          break;
                        }
                        if (I !== null) {
                          (I.return = Z), (te = I);
                          break;
                        }
                        te = Z;
                      }
                  }
                }
                var ne = a.alternate;
                if (ne !== null) {
                  var re = ne.child;
                  if (re !== null) {
                    ne.child = null;
                    do {
                      var Xe = re.sibling;
                      (re.sibling = null), (re = Xe);
                    } while (re !== null);
                  }
                }
                te = a;
              }
            }
            if ((a.subtreeFlags & 2064) !== 0 && d !== null)
              (d.return = a), (te = d);
            else
              e: for (; te !== null; ) {
                if (((a = te), (a.flags & 2048) !== 0))
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vi(9, a, a.return);
                  }
                var C = a.sibling;
                if (C !== null) {
                  (C.return = a.return), (te = C);
                  break e;
                }
                te = a.return;
              }
          }
          var w = e.current;
          for (te = w; te !== null; ) {
            d = te;
            var O = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && O !== null)
              (O.return = d), (te = O);
            else
              e: for (d = w; te !== null; ) {
                if (((m = te), (m.flags & 2048) !== 0))
                  try {
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        so(9, m);
                    }
                  } catch (se) {
                    Ke(m, m.return, se);
                  }
                if (m === d) {
                  te = null;
                  break e;
                }
                var b = m.sibling;
                if (b !== null) {
                  (b.return = m.return), (te = b);
                  break e;
                }
                te = m.return;
              }
          }
          if (
            ((Te = u),
            zn(),
            ln && typeof ln.onPostCommitFiberRoot == "function")
          )
            try {
              ln.onPostCommitFiberRoot(vs, e);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        (ze = r), (Vt.transition = t);
      }
    }
    return !1;
  }
  function Rd(e, t, r) {
    (t = Wr(r, t)),
      (t = Wf(e, t, 1)),
      (e = Mn(e, t, 1)),
      (t = kt()),
      e !== null && (yi(e, 1, t), Tt(e, t));
  }
  function Ke(e, t, r) {
    if (e.tag === 3) Rd(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Rd(t, e, r);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (Un === null || !Un.has(o)))
          ) {
            (e = Wr(r, e)),
              (e = Qf(t, e, 1)),
              (t = Mn(t, e, 1)),
              (e = kt()),
              t !== null && (yi(t, 1, e), Tt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Vy(e, t, r) {
    var o = e.pingCache;
    o !== null && o.delete(t),
      (t = kt()),
      (e.pingedLanes |= e.suspendedLanes & r),
      ot === e &&
        (dt & r) === r &&
        (it === 4 || (it === 3 && (dt & 130023424) === dt && 500 > Ge() - Iu)
          ? sr(e, 0)
          : (zu |= r)),
      Tt(e, t);
  }
  function Pd(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ss), (Ss <<= 1), (Ss & 130023424) === 0 && (Ss = 4194304)));
    var r = kt();
    (e = Sn(e, t)), e !== null && (yi(e, t, r), Tt(e, r));
  }
  function Hy(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), Pd(e, r);
  }
  function Wy(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          u = e.memoizedState;
        u !== null && (r = u.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    o !== null && o.delete(t), Pd(e, r);
  }
  var Td;
  Td = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || _t.current) Rt = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
          return (Rt = !1), Ny(e, t, r);
        Rt = (e.flags & 131072) !== 0;
      }
    else (Rt = !1), He && (t.flags & 1048576) !== 0 && uf(t, Bs, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        ro(e, t), (e = t.pendingProps);
        var u = Ir(t, ht.current);
        Vr(t, r), (u = hu(null, t, o, e, u, r));
        var a = mu();
        return (
          (t.flags |= 1),
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ot(o) ? ((a = !0), $s(t)) : (a = !1),
              (t.memoizedState =
                u.state !== null && u.state !== void 0 ? u.state : null),
              lu(t),
              (u.updater = to),
              (t.stateNode = u),
              (u._reactInternals = t),
              ku(t, o, e, r),
              (t = _u(null, t, o, !0, a, r)))
            : ((t.tag = 0), He && a && Yl(t), St(null, t, u, r), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (ro(e, t),
            (e = t.pendingProps),
            (u = o._init),
            (o = u(o._payload)),
            (t.type = o),
            (u = t.tag = qy(o)),
            (e = Yt(o, e)),
            u)
          ) {
            case 0:
              t = Cu(null, t, o, e, r);
              break e;
            case 1:
              t = td(null, t, o, e, r);
              break e;
            case 11:
              t = Xf(null, t, o, e, r);
              break e;
            case 14:
              t = Yf(null, t, o, Yt(o.type, e), r);
              break e;
          }
          throw Error(s(306, o, ""));
        }
        return t;
      case 0:
        return (
          (o = t.type),
          (u = t.pendingProps),
          (u = t.elementType === o ? u : Yt(o, u)),
          Cu(e, t, o, u, r)
        );
      case 1:
        return (
          (o = t.type),
          (u = t.pendingProps),
          (u = t.elementType === o ? u : Yt(o, u)),
          td(e, t, o, u, r)
        );
      case 3:
        e: {
          if ((nd(t), e === null)) throw Error(s(387));
          (o = t.pendingProps),
            (a = t.memoizedState),
            (u = a.element),
            gf(e, t),
            Ks(t, o, null, r);
          var d = t.memoizedState;
          if (((o = d.element), a.isDehydrated))
            if (
              ((a = {
                element: o,
                isDehydrated: !1,
                cache: d.cache,
                pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
                transitions: d.transitions,
              }),
              (t.updateQueue.baseState = a),
              (t.memoizedState = a),
              t.flags & 256)
            ) {
              (u = Wr(Error(s(423)), t)), (t = rd(e, t, o, r, u));
              break e;
            } else if (o !== u) {
              (u = Wr(Error(s(424)), t)), (t = rd(e, t, o, r, u));
              break e;
            } else
              for (
                zt = Ln(t.stateNode.containerInfo.firstChild),
                  jt = t,
                  He = !0,
                  Xt = null,
                  r = mf(t, null, o, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((Ur(), o === u)) {
              t = xn(e, t, r);
              break e;
            }
            St(e, t, o, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Sf(t),
          e === null && eu(t),
          (o = t.type),
          (u = t.pendingProps),
          (a = e !== null ? e.memoizedProps : null),
          (d = u.children),
          Wl(o, u) ? (d = null) : a !== null && Wl(o, a) && (t.flags |= 32),
          ed(e, t),
          St(e, t, d, r),
          t.child
        );
      case 6:
        return e === null && eu(t), null;
      case 13:
        return id(e, t, r);
      case 4:
        return (
          uu(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = br(t, null, o, r)) : St(e, t, o, r),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (u = t.pendingProps),
          (u = t.elementType === o ? u : Yt(o, u)),
          Xf(e, t, o, u, r)
        );
      case 7:
        return St(e, t, t.pendingProps, r), t.child;
      case 8:
        return St(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return St(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (u = t.pendingProps),
            (a = t.memoizedProps),
            (d = u.value),
            $e(Ws, o._currentValue),
            (o._currentValue = d),
            a !== null)
          )
            if (Gt(a.value, d)) {
              if (a.children === u.children && !_t.current) {
                t = xn(e, t, r);
                break e;
              }
            } else
              for (a = t.child, a !== null && (a.return = t); a !== null; ) {
                var m = a.dependencies;
                if (m !== null) {
                  d = a.child;
                  for (var g = m.firstContext; g !== null; ) {
                    if (g.context === o) {
                      if (a.tag === 1) {
                        (g = kn(-1, r & -r)), (g.tag = 2);
                        var P = a.updateQueue;
                        if (P !== null) {
                          P = P.shared;
                          var M = P.pending;
                          M === null
                            ? (g.next = g)
                            : ((g.next = M.next), (M.next = g)),
                            (P.pending = g);
                        }
                      }
                      (a.lanes |= r),
                        (g = a.alternate),
                        g !== null && (g.lanes |= r),
                        su(a.return, r, t),
                        (m.lanes |= r);
                      break;
                    }
                    g = g.next;
                  }
                } else if (a.tag === 10) d = a.type === t.type ? null : a.child;
                else if (a.tag === 18) {
                  if (((d = a.return), d === null)) throw Error(s(341));
                  (d.lanes |= r),
                    (m = d.alternate),
                    m !== null && (m.lanes |= r),
                    su(d, r, t),
                    (d = a.sibling);
                } else d = a.child;
                if (d !== null) d.return = a;
                else
                  for (d = a; d !== null; ) {
                    if (d === t) {
                      d = null;
                      break;
                    }
                    if (((a = d.sibling), a !== null)) {
                      (a.return = d.return), (d = a);
                      break;
                    }
                    d = d.return;
                  }
                a = d;
              }
          St(e, t, u.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (o = t.pendingProps.children),
          Vr(t, r),
          (u = bt(u)),
          (o = o(u)),
          (t.flags |= 1),
          St(e, t, o, r),
          t.child
        );
      case 14:
        return (
          (o = t.type),
          (u = Yt(o, t.pendingProps)),
          (u = Yt(o.type, u)),
          Yf(e, t, o, u, r)
        );
      case 15:
        return Jf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (o = t.type),
          (u = t.pendingProps),
          (u = t.elementType === o ? u : Yt(o, u)),
          ro(e, t),
          (t.tag = 1),
          Ot(o) ? ((e = !0), $s(t)) : (e = !1),
          Vr(t, r),
          Vf(t, o, u),
          ku(t, o, u, r),
          _u(null, t, o, !0, e, r)
        );
      case 19:
        return od(e, t, r);
      case 22:
        return Zf(e, t, r);
    }
    throw Error(s(156, t.tag));
  };
  function Ad(e, t) {
    return uc(e, t);
  }
  function Qy(e, t, r, o) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ht(e, t, r, o) {
    return new Qy(e, t, r, o);
  }
  function Wu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function qy(e) {
    if (typeof e == "function") return Wu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === oe)) return 11;
      if (e === Fe) return 14;
    }
    return 2;
  }
  function Hn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = Ht(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function mo(e, t, r, o, u, a) {
    var d = 2;
    if (((o = e), typeof e == "function")) Wu(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else
      e: switch (e) {
        case Q:
          return lr(r.children, u, a, t);
        case Ce:
          (d = 8), (u |= 8);
          break;
        case _e:
          return (
            (e = Ht(12, r, t, u | 2)), (e.elementType = _e), (e.lanes = a), e
          );
        case ce:
          return (e = Ht(13, r, t, u)), (e.elementType = ce), (e.lanes = a), e;
        case ke:
          return (e = Ht(19, r, t, u)), (e.elementType = ke), (e.lanes = a), e;
        case xe:
          return yo(r, u, a, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ie:
                d = 10;
                break e;
              case je:
                d = 9;
                break e;
              case oe:
                d = 11;
                break e;
              case Fe:
                d = 14;
                break e;
              case Re:
                (d = 16), (o = null);
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Ht(d, r, t, u)), (t.elementType = e), (t.type = o), (t.lanes = a), t
    );
  }
  function lr(e, t, r, o) {
    return (e = Ht(7, e, o, t)), (e.lanes = r), e;
  }
  function yo(e, t, r, o) {
    return (
      (e = Ht(22, e, o, t)),
      (e.elementType = xe),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Qu(e, t, r) {
    return (e = Ht(6, e, null, t)), (e.lanes = r), e;
  }
  function qu(e, t, r) {
    return (
      (t = Ht(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Ky(e, t, r, o, u) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Sl(0)),
      (this.expirationTimes = Sl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Sl(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Ku(e, t, r, o, u, a, d, m, g) {
    return (
      (e = new Ky(e, t, r, m, g)),
      t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
      (a = Ht(3, null, null, t)),
      (e.current = a),
      (a.stateNode = e),
      (a.memoizedState = {
        element: o,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      lu(a),
      e
    );
  }
  function Gy(e, t, r) {
    var o =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: W,
      key: o == null ? null : "" + o,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function Fd(e) {
    if (!e) return jn;
    e = e._reactInternals;
    e: {
      if (Gn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ot(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (Ot(r)) return sf(e, r, t);
    }
    return t;
  }
  function Nd(e, t, r, o, u, a, d, m, g) {
    return (
      (e = Ku(r, o, !0, e, u, a, d, m, g)),
      (e.context = Fd(null)),
      (r = e.current),
      (o = kt()),
      (u = Bn(r)),
      (a = kn(o, u)),
      (a.callback = t ?? null),
      Mn(r, a, u),
      (e.current.lanes = u),
      yi(e, u, o),
      Tt(e, o),
      e
    );
  }
  function go(e, t, r, o) {
    var u = t.current,
      a = kt(),
      d = Bn(u);
    return (
      (r = Fd(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = kn(a, d)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = Mn(u, t, d)),
      e !== null && (en(e, u, d, a), qs(e, u, d)),
      d
    );
  }
  function vo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ld(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Gu(e, t) {
    Ld(e, t), (e = e.alternate) && Ld(e, t);
  }
  function Xy() {
    return null;
  }
  var Dd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Xu(e) {
    this._internalRoot = e;
  }
  (wo.prototype.render = Xu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      go(e, t, null, null);
    }),
    (wo.prototype.unmount = Xu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          ir(function () {
            go(null, e, null, null);
          }),
            (t[yn] = null);
        }
      });
  function wo(e) {
    this._internalRoot = e;
  }
  wo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = yc();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < An.length && t !== 0 && t < An[r].priority; r++);
      An.splice(r, 0, e), r === 0 && wc(e);
    }
  };
  function Yu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function So(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function jd() {}
  function Yy(e, t, r, o, u) {
    if (u) {
      if (typeof o == "function") {
        var a = o;
        o = function () {
          var P = vo(d);
          a.call(P);
        };
      }
      var d = Nd(t, o, e, 0, null, !1, !1, "", jd);
      return (
        (e._reactRootContainer = d),
        (e[yn] = d.current),
        Ai(e.nodeType === 8 ? e.parentNode : e),
        ir(),
        d
      );
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof o == "function") {
      var m = o;
      o = function () {
        var P = vo(g);
        m.call(P);
      };
    }
    var g = Ku(e, 0, !1, null, null, !1, !1, "", jd);
    return (
      (e._reactRootContainer = g),
      (e[yn] = g.current),
      Ai(e.nodeType === 8 ? e.parentNode : e),
      ir(function () {
        go(t, g, r, o);
      }),
      g
    );
  }
  function ko(e, t, r, o, u) {
    var a = r._reactRootContainer;
    if (a) {
      var d = a;
      if (typeof u == "function") {
        var m = u;
        u = function () {
          var g = vo(d);
          m.call(g);
        };
      }
      go(t, d, e, u);
    } else d = Yy(r, t, e, u, o);
    return vo(d);
  }
  (hc = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = mi(t.pendingLanes);
          r !== 0 &&
            (kl(t, r | 1),
            Tt(t, Ge()),
            (Te & 6) === 0 && ((Kr = Ge() + 500), zn()));
        }
        break;
      case 13:
        ir(function () {
          var o = Sn(e, 1);
          if (o !== null) {
            var u = kt();
            en(o, e, 1, u);
          }
        }),
          Gu(e, 1);
    }
  }),
    (xl = function (e) {
      if (e.tag === 13) {
        var t = Sn(e, 134217728);
        if (t !== null) {
          var r = kt();
          en(t, e, 134217728, r);
        }
        Gu(e, 134217728);
      }
    }),
    (mc = function (e) {
      if (e.tag === 13) {
        var t = Bn(e),
          r = Sn(e, t);
        if (r !== null) {
          var o = kt();
          en(r, e, t, o);
        }
        Gu(e, t);
      }
    }),
    (yc = function () {
      return ze;
    }),
    (gc = function (e, t) {
      var r = ze;
      try {
        return (ze = e), t();
      } finally {
        ze = r;
      }
    }),
    (hl = function (e, t, r) {
      switch (t) {
        case "input":
          if ((ci(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var o = r[t];
              if (o !== e && o.form === e.form) {
                var u = Is(o);
                if (!u) throw Error(s(90));
                Et(o), ci(o, u);
              }
            }
          }
          break;
        case "textarea":
          q(e, r);
          break;
        case "select":
          (t = r.value), t != null && _(e, !!r.multiple, t, !1);
      }
    }),
    (tc = Bu),
    (nc = ir);
  var Jy = { usingClientEntryPoint: !1, Events: [Li, jr, Is, Za, ec, Bu] },
    qi = {
      findFiberByHostInstance: Xn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Zy = {
      bundleType: qi.bundleType,
      version: qi.version,
      rendererPackageName: qi.rendererPackageName,
      rendererConfig: qi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: K.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = oc(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: qi.findFiberByHostInstance || Xy,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xo.isDisabled && xo.supportsFiber)
      try {
        (vs = xo.inject(Zy)), (ln = xo);
      } catch {}
  }
  return (
    (At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jy),
    (At.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Yu(t)) throw Error(s(200));
      return Gy(e, t, null, r);
    }),
    (At.createRoot = function (e, t) {
      if (!Yu(e)) throw Error(s(299));
      var r = !1,
        o = "",
        u = Dd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = Ku(e, 1, !1, null, null, r, !1, o, u)),
        (e[yn] = t.current),
        Ai(e.nodeType === 8 ? e.parentNode : e),
        new Xu(t)
      );
    }),
    (At.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return (e = oc(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (At.flushSync = function (e) {
      return ir(e);
    }),
    (At.hydrate = function (e, t, r) {
      if (!So(t)) throw Error(s(200));
      return ko(null, e, t, !0, r);
    }),
    (At.hydrateRoot = function (e, t, r) {
      if (!Yu(e)) throw Error(s(405));
      var o = (r != null && r.hydratedSources) || null,
        u = !1,
        a = "",
        d = Dd;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (u = !0),
          r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (d = r.onRecoverableError)),
        (t = Nd(t, null, e, 1, r ?? null, u, !1, a, d)),
        (e[yn] = t.current),
        Ai(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          (r = o[e]),
            (u = r._getVersion),
            (u = u(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, u])
              : t.mutableSourceEagerHydrationData.push(r, u);
      return new wo(t);
    }),
    (At.render = function (e, t, r) {
      if (!So(t)) throw Error(s(200));
      return ko(null, e, t, !1, r);
    }),
    (At.unmountComponentAtNode = function (e) {
      if (!So(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (ir(function () {
            ko(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[yn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (At.unstable_batchedUpdates = Bu),
    (At.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!So(r)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return ko(e, t, r, !1, o);
    }),
    (At.version = "18.3.1-next-f1338f8080-20240426"),
    At
  );
}
var Vd;
function bp() {
  if (Vd) return ea.exports;
  Vd = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), (ea.exports = lg()), ea.exports;
}
var Hd;
function ug() {
  if (Hd) return Co;
  Hd = 1;
  var n = bp();
  return (Co.createRoot = n.createRoot), (Co.hydrateRoot = n.hydrateRoot), Co;
}
var ag = ug(),
  ct = function () {
    return (
      (ct =
        Object.assign ||
        function (i) {
          for (var s, l = 1, c = arguments.length; l < c; l++) {
            s = arguments[l];
            for (var f in s)
              Object.prototype.hasOwnProperty.call(s, f) && (i[f] = s[f]);
          }
          return i;
        }),
      ct.apply(this, arguments)
    );
  };
function ti(n, i, s) {
  if (s || arguments.length === 2)
    for (var l = 0, c = i.length, f; l < c; l++)
      (f || !(l in i)) &&
        (f || (f = Array.prototype.slice.call(i, 0, l)), (f[l] = i[l]));
  return n.concat(f || Array.prototype.slice.call(i));
}
var Be = "-ms-",
  es = "-moz-",
  Le = "-webkit-",
  Bp = "comm",
  Xo = "rule",
  Da = "decl",
  cg = "@import",
  Vp = "@keyframes",
  fg = "@layer",
  Hp = Math.abs,
  ja = String.fromCharCode,
  ya = Object.assign;
function dg(n, i) {
  return at(n, 0) ^ 45
    ? (((((((i << 2) ^ at(n, 0)) << 2) ^ at(n, 1)) << 2) ^ at(n, 2)) << 2) ^
        at(n, 3)
    : 0;
}
function Wp(n) {
  return n.trim();
}
function _n(n, i) {
  return (n = i.exec(n)) ? n[0] : n;
}
function Ee(n, i, s) {
  return n.replace(i, s);
}
function Ao(n, i, s) {
  return n.indexOf(i, s);
}
function at(n, i) {
  return n.charCodeAt(i) | 0;
}
function ni(n, i, s) {
  return n.slice(i, s);
}
function hn(n) {
  return n.length;
}
function Qp(n) {
  return n.length;
}
function Zi(n, i) {
  return i.push(n), n;
}
function pg(n, i) {
  return n.map(i).join("");
}
function Wd(n, i) {
  return n.filter(function (s) {
    return !_n(s, i);
  });
}
var Yo = 1,
  ri = 1,
  qp = 0,
  Qt = 0,
  nt = 0,
  oi = "";
function Jo(n, i, s, l, c, f, p, h) {
  return {
    value: n,
    root: i,
    parent: s,
    type: l,
    props: c,
    children: f,
    line: Yo,
    column: ri,
    length: p,
    return: "",
    siblings: h,
  };
}
function Qn(n, i) {
  return ya(
    Jo("", null, null, "", null, null, 0, n.siblings),
    n,
    { length: -n.length },
    i
  );
}
function Xr(n) {
  for (; n.root; ) n = Qn(n.root, { children: [n] });
  Zi(n, n.siblings);
}
function hg() {
  return nt;
}
function mg() {
  return (
    (nt = Qt > 0 ? at(oi, --Qt) : 0), ri--, nt === 10 && ((ri = 1), Yo--), nt
  );
}
function rn() {
  return (
    (nt = Qt < qp ? at(oi, Qt++) : 0), ri++, nt === 10 && ((ri = 1), Yo++), nt
  );
}
function dr() {
  return at(oi, Qt);
}
function Fo() {
  return Qt;
}
function Zo(n, i) {
  return ni(oi, n, i);
}
function ga(n) {
  switch (n) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function yg(n) {
  return (Yo = ri = 1), (qp = hn((oi = n))), (Qt = 0), [];
}
function gg(n) {
  return (oi = ""), n;
}
function ra(n) {
  return Wp(Zo(Qt - 1, va(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function vg(n) {
  for (; (nt = dr()) && nt < 33; ) rn();
  return ga(n) > 2 || ga(nt) > 3 ? "" : " ";
}
function wg(n, i) {
  for (
    ;
    --i &&
    rn() &&
    !(nt < 48 || nt > 102 || (nt > 57 && nt < 65) || (nt > 70 && nt < 97));

  );
  return Zo(n, Fo() + (i < 6 && dr() == 32 && rn() == 32));
}
function va(n) {
  for (; rn(); )
    switch (nt) {
      case n:
        return Qt;
      case 34:
      case 39:
        n !== 34 && n !== 39 && va(nt);
        break;
      case 40:
        n === 41 && va(n);
        break;
      case 92:
        rn();
        break;
    }
  return Qt;
}
function Sg(n, i) {
  for (; rn() && n + nt !== 57; ) if (n + nt === 84 && dr() === 47) break;
  return "/*" + Zo(i, Qt - 1) + "*" + ja(n === 47 ? n : rn());
}
function kg(n) {
  for (; !ga(dr()); ) rn();
  return Zo(n, Qt);
}
function xg(n) {
  return gg(No("", null, null, null, [""], (n = yg(n)), 0, [0], n));
}
function No(n, i, s, l, c, f, p, h, v) {
  for (
    var x = 0,
      S = 0,
      E = p,
      A = 0,
      B = 0,
      F = 0,
      R = 1,
      L = 1,
      X = 1,
      $ = 0,
      Y = "",
      K = c,
      D = f,
      W = l,
      Q = Y;
    L;

  )
    switch (((F = $), ($ = rn()))) {
      case 40:
        if (F != 108 && at(Q, E - 1) == 58) {
          Ao((Q += Ee(ra($), "&", "&\f")), "&\f", Hp(x ? h[x - 1] : 0)) != -1 &&
            (X = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        Q += ra($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        Q += vg(F);
        break;
      case 92:
        Q += wg(Fo() - 1, 7);
        continue;
      case 47:
        switch (dr()) {
          case 42:
          case 47:
            Zi(Eg(Sg(rn(), Fo()), i, s, v), v);
            break;
          default:
            Q += "/";
        }
        break;
      case 123 * R:
        h[x++] = hn(Q) * X;
      case 125 * R:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            L = 0;
          case 59 + S:
            X == -1 && (Q = Ee(Q, /\f/g, "")),
              B > 0 &&
                hn(Q) - E &&
                Zi(
                  B > 32
                    ? qd(Q + ";", l, s, E - 1, v)
                    : qd(Ee(Q, " ", "") + ";", l, s, E - 2, v),
                  v
                );
            break;
          case 59:
            Q += ";";
          default:
            if (
              (Zi(
                (W = Qd(Q, i, s, x, S, c, h, Y, (K = []), (D = []), E, f)),
                f
              ),
              $ === 123)
            )
              if (S === 0) No(Q, i, W, W, K, f, E, h, D);
              else
                switch (A === 99 && at(Q, 3) === 110 ? 100 : A) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    No(
                      n,
                      W,
                      W,
                      l && Zi(Qd(n, W, W, 0, 0, c, h, Y, c, (K = []), E, D), D),
                      c,
                      D,
                      E,
                      h,
                      l ? K : D
                    );
                    break;
                  default:
                    No(Q, W, W, W, [""], D, 0, h, D);
                }
        }
        (x = S = B = 0), (R = X = 1), (Y = Q = ""), (E = p);
        break;
      case 58:
        (E = 1 + hn(Q)), (B = F);
      default:
        if (R < 1) {
          if ($ == 123) --R;
          else if ($ == 125 && R++ == 0 && mg() == 125) continue;
        }
        switch (((Q += ja($)), $ * R)) {
          case 38:
            X = S > 0 ? 1 : ((Q += "\f"), -1);
            break;
          case 44:
            (h[x++] = (hn(Q) - 1) * X), (X = 1);
            break;
          case 64:
            dr() === 45 && (Q += ra(rn())),
              (A = dr()),
              (S = E = hn((Y = Q += kg(Fo())))),
              $++;
            break;
          case 45:
            F === 45 && hn(Q) == 2 && (R = 0);
        }
    }
  return f;
}
function Qd(n, i, s, l, c, f, p, h, v, x, S, E) {
  for (
    var A = c - 1, B = c === 0 ? f : [""], F = Qp(B), R = 0, L = 0, X = 0;
    R < l;
    ++R
  )
    for (var $ = 0, Y = ni(n, A + 1, (A = Hp((L = p[R])))), K = n; $ < F; ++$)
      (K = Wp(L > 0 ? B[$] + " " + Y : Ee(Y, /&\f/g, B[$]))) && (v[X++] = K);
  return Jo(n, i, s, c === 0 ? Xo : h, v, x, S, E);
}
function Eg(n, i, s, l) {
  return Jo(n, i, s, Bp, ja(hg()), ni(n, 2, -2), 0, l);
}
function qd(n, i, s, l, c) {
  return Jo(n, i, s, Da, ni(n, 0, l), ni(n, l + 1, -1), l, c);
}
function Kp(n, i, s) {
  switch (dg(n, i)) {
    case 5103:
      return Le + "print-" + n + n;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Le + n + n;
    case 4789:
      return es + n + n;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Le + n + es + n + Be + n + n;
    case 5936:
      switch (at(n, i + 11)) {
        case 114:
          return Le + n + Be + Ee(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        case 108:
          return Le + n + Be + Ee(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        case 45:
          return Le + n + Be + Ee(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
    case 6828:
    case 4268:
    case 2903:
      return Le + n + Be + n + n;
    case 6165:
      return Le + n + Be + "flex-" + n + n;
    case 5187:
      return (
        Le + n + Ee(n, /(\w+).+(:[^]+)/, Le + "box-$1$2" + Be + "flex-$1$2") + n
      );
    case 5443:
      return (
        Le +
        n +
        Be +
        "flex-item-" +
        Ee(n, /flex-|-self/g, "") +
        (_n(n, /flex-|baseline/)
          ? ""
          : Be + "grid-row-" + Ee(n, /flex-|-self/g, "")) +
        n
      );
    case 4675:
      return (
        Le +
        n +
        Be +
        "flex-line-pack" +
        Ee(n, /align-content|flex-|-self/g, "") +
        n
      );
    case 5548:
      return Le + n + Be + Ee(n, "shrink", "negative") + n;
    case 5292:
      return Le + n + Be + Ee(n, "basis", "preferred-size") + n;
    case 6060:
      return (
        Le +
        "box-" +
        Ee(n, "-grow", "") +
        Le +
        n +
        Be +
        Ee(n, "grow", "positive") +
        n
      );
    case 4554:
      return Le + Ee(n, /([^-])(transform)/g, "$1" + Le + "$2") + n;
    case 6187:
      return (
        Ee(
          Ee(Ee(n, /(zoom-|grab)/, Le + "$1"), /(image-set)/, Le + "$1"),
          n,
          ""
        ) + n
      );
    case 5495:
    case 3959:
      return Ee(n, /(image-set\([^]*)/, Le + "$1$`$1");
    case 4968:
      return (
        Ee(
          Ee(n, /(.+:)(flex-)?(.*)/, Le + "box-pack:$3" + Be + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Le +
        n +
        n
      );
    case 4200:
      if (!_n(n, /flex-|baseline/))
        return Be + "grid-column-align" + ni(n, i) + n;
      break;
    case 2592:
    case 3360:
      return Be + Ee(n, "template-", "") + n;
    case 4384:
    case 3616:
      return s &&
        s.some(function (l, c) {
          return (i = c), _n(l.props, /grid-\w+-end/);
        })
        ? ~Ao(n + (s = s[i].value), "span", 0)
          ? n
          : Be +
            Ee(n, "-start", "") +
            n +
            Be +
            "grid-row-span:" +
            (~Ao(s, "span", 0) ? _n(s, /\d+/) : +_n(s, /\d+/) - +_n(n, /\d+/)) +
            ";"
        : Be + Ee(n, "-start", "") + n;
    case 4896:
    case 4128:
      return s &&
        s.some(function (l) {
          return _n(l.props, /grid-\w+-start/);
        })
        ? n
        : Be + Ee(Ee(n, "-end", "-span"), "span ", "") + n;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ee(n, /(.+)-inline(.+)/, Le + "$1$2") + n;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (hn(n) - 1 - i > 6)
        switch (at(n, i + 1)) {
          case 109:
            if (at(n, i + 4) !== 45) break;
          case 102:
            return (
              Ee(
                n,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Le +
                  "$2-$3$1" +
                  es +
                  (at(n, i + 3) == 108 ? "$3" : "$2-$3")
              ) + n
            );
          case 115:
            return ~Ao(n, "stretch", 0)
              ? Kp(Ee(n, "stretch", "fill-available"), i, s) + n
              : n;
        }
      break;
    case 5152:
    case 5920:
      return Ee(
        n,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (l, c, f, p, h, v, x) {
          return (
            Be +
            c +
            ":" +
            f +
            x +
            (p ? Be + c + "-span:" + (h ? v : +v - +f) + x : "") +
            n
          );
        }
      );
    case 4949:
      if (at(n, i + 6) === 121) return Ee(n, ":", ":" + Le) + n;
      break;
    case 6444:
      switch (at(n, at(n, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            Ee(
              n,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                Le +
                (at(n, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Le +
                "$2$3$1" +
                Be +
                "$2box$3"
            ) + n
          );
        case 100:
          return Ee(n, ":", ":" + Be) + n;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Ee(n, "scroll-", "scroll-snap-") + n;
  }
  return n;
}
function $o(n, i) {
  for (var s = "", l = 0; l < n.length; l++) s += i(n[l], l, n, i) || "";
  return s;
}
function Cg(n, i, s, l) {
  switch (n.type) {
    case fg:
      if (n.children.length) break;
    case cg:
    case Da:
      return (n.return = n.return || n.value);
    case Bp:
      return "";
    case Vp:
      return (n.return = n.value + "{" + $o(n.children, l) + "}");
    case Xo:
      if (!hn((n.value = n.props.join(",")))) return "";
  }
  return hn((s = $o(n.children, l)))
    ? (n.return = n.value + "{" + s + "}")
    : "";
}
function _g(n) {
  var i = Qp(n);
  return function (s, l, c, f) {
    for (var p = "", h = 0; h < i; h++) p += n[h](s, l, c, f) || "";
    return p;
  };
}
function Og(n) {
  return function (i) {
    i.root || ((i = i.return) && n(i));
  };
}
function Rg(n, i, s, l) {
  if (n.length > -1 && !n.return)
    switch (n.type) {
      case Da:
        n.return = Kp(n.value, n.length, s);
        return;
      case Vp:
        return $o([Qn(n, { value: Ee(n.value, "@", "@" + Le) })], l);
      case Xo:
        if (n.length)
          return pg((s = n.props), function (c) {
            switch (_n(c, (l = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Xr(Qn(n, { props: [Ee(c, /:(read-\w+)/, ":" + es + "$1")] })),
                  Xr(Qn(n, { props: [c] })),
                  ya(n, { props: Wd(s, l) });
                break;
              case "::placeholder":
                Xr(
                  Qn(n, { props: [Ee(c, /:(plac\w+)/, ":" + Le + "input-$1")] })
                ),
                  Xr(Qn(n, { props: [Ee(c, /:(plac\w+)/, ":" + es + "$1")] })),
                  Xr(Qn(n, { props: [Ee(c, /:(plac\w+)/, Be + "input-$1")] })),
                  Xr(Qn(n, { props: [c] })),
                  ya(n, { props: Wd(s, l) });
                break;
            }
            return "";
          });
    }
}
var Pg = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Mt = {},
  ii =
    (typeof process < "u" &&
      Mt !== void 0 &&
      (Mt.REACT_APP_SC_ATTR || Mt.SC_ATTR)) ||
    "data-styled",
  Gp = "active",
  Xp = "data-styled-version",
  el = "6.1.19",
  za = `/*!sc*/
`,
  Uo = typeof window < "u" && typeof document < "u",
  Tg = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Mt !== void 0 &&
      Mt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      Mt.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? Mt.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      Mt.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Mt !== void 0 &&
      Mt.SC_DISABLE_SPEEDY !== void 0 &&
      Mt.SC_DISABLE_SPEEDY !== "" &&
      Mt.SC_DISABLE_SPEEDY !== "false" &&
      Mt.SC_DISABLE_SPEEDY),
  Ag = {},
  tl = Object.freeze([]),
  si = Object.freeze({});
function Yp(n, i, s) {
  return (
    s === void 0 && (s = si), (n.theme !== s.theme && n.theme) || i || s.theme
  );
}
var Jp = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  Fg = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Ng = /(^-|-$)/g;
function Kd(n) {
  return n.replace(Fg, "-").replace(Ng, "");
}
var Lg = /(a)(d)/gi,
  _o = 52,
  Gd = function (n) {
    return String.fromCharCode(n + (n > 25 ? 39 : 97));
  };
function wa(n) {
  var i,
    s = "";
  for (i = Math.abs(n); i > _o; i = (i / _o) | 0) s = Gd(i % _o) + s;
  return (Gd(i % _o) + s).replace(Lg, "$1-$2");
}
var ia,
  Zp = 5381,
  Zr = function (n, i) {
    for (var s = i.length; s; ) n = (33 * n) ^ i.charCodeAt(--s);
    return n;
  },
  eh = function (n) {
    return Zr(Zp, n);
  };
function Ia(n) {
  return wa(eh(n) >>> 0);
}
function Dg(n) {
  return n.displayName || n.name || "Component";
}
function sa(n) {
  return typeof n == "string" && !0;
}
var th = typeof Symbol == "function" && Symbol.for,
  nh = th ? Symbol.for("react.memo") : 60115,
  jg = th ? Symbol.for("react.forward_ref") : 60112,
  zg = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Ig = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  rh = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Mg =
    (((ia = {})[jg] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (ia[nh] = rh),
    ia);
function Xd(n) {
  return ("type" in (i = n) && i.type.$$typeof) === nh
    ? rh
    : "$$typeof" in n
    ? Mg[n.$$typeof]
    : zg;
  var i;
}
var $g = Object.defineProperty,
  Ug = Object.getOwnPropertyNames,
  Yd = Object.getOwnPropertySymbols,
  bg = Object.getOwnPropertyDescriptor,
  Bg = Object.getPrototypeOf,
  Jd = Object.prototype;
function ih(n, i, s) {
  if (typeof i != "string") {
    if (Jd) {
      var l = Bg(i);
      l && l !== Jd && ih(n, l, s);
    }
    var c = Ug(i);
    Yd && (c = c.concat(Yd(i)));
    for (var f = Xd(n), p = Xd(i), h = 0; h < c.length; ++h) {
      var v = c[h];
      if (!(v in Ig || (s && s[v]) || (p && v in p) || (f && v in f))) {
        var x = bg(i, v);
        try {
          $g(n, v, x);
        } catch {}
      }
    }
  }
  return n;
}
function hr(n) {
  return typeof n == "function";
}
function Ma(n) {
  return typeof n == "object" && "styledComponentId" in n;
}
function ur(n, i) {
  return n && i ? "".concat(n, " ").concat(i) : n || i || "";
}
function bo(n, i) {
  if (n.length === 0) return "";
  for (var s = n[0], l = 1; l < n.length; l++) s += n[l];
  return s;
}
function rs(n) {
  return (
    n !== null &&
    typeof n == "object" &&
    n.constructor.name === Object.name &&
    !("props" in n && n.$$typeof)
  );
}
function Sa(n, i, s) {
  if ((s === void 0 && (s = !1), !s && !rs(n) && !Array.isArray(n))) return i;
  if (Array.isArray(i))
    for (var l = 0; l < i.length; l++) n[l] = Sa(n[l], i[l]);
  else if (rs(i)) for (var l in i) n[l] = Sa(n[l], i[l]);
  return n;
}
function $a(n, i) {
  Object.defineProperty(n, "toString", { value: i });
}
function mr(n) {
  for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(n, " for more information.")
      .concat(i.length > 0 ? " Args: ".concat(i.join(", ")) : "")
  );
}
var Vg = (function () {
    function n(i) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = i);
    }
    return (
      (n.prototype.indexOfGroup = function (i) {
        for (var s = 0, l = 0; l < i; l++) s += this.groupSizes[l];
        return s;
      }),
      (n.prototype.insertRules = function (i, s) {
        if (i >= this.groupSizes.length) {
          for (var l = this.groupSizes, c = l.length, f = c; i >= f; )
            if ((f <<= 1) < 0) throw mr(16, "".concat(i));
          (this.groupSizes = new Uint32Array(f)),
            this.groupSizes.set(l),
            (this.length = f);
          for (var p = c; p < f; p++) this.groupSizes[p] = 0;
        }
        for (
          var h = this.indexOfGroup(i + 1), v = ((p = 0), s.length);
          p < v;
          p++
        )
          this.tag.insertRule(h, s[p]) && (this.groupSizes[i]++, h++);
      }),
      (n.prototype.clearGroup = function (i) {
        if (i < this.length) {
          var s = this.groupSizes[i],
            l = this.indexOfGroup(i),
            c = l + s;
          this.groupSizes[i] = 0;
          for (var f = l; f < c; f++) this.tag.deleteRule(l);
        }
      }),
      (n.prototype.getGroup = function (i) {
        var s = "";
        if (i >= this.length || this.groupSizes[i] === 0) return s;
        for (
          var l = this.groupSizes[i],
            c = this.indexOfGroup(i),
            f = c + l,
            p = c;
          p < f;
          p++
        )
          s += "".concat(this.tag.getRule(p)).concat(za);
        return s;
      }),
      n
    );
  })(),
  Lo = new Map(),
  Bo = new Map(),
  Do = 1,
  Oo = function (n) {
    if (Lo.has(n)) return Lo.get(n);
    for (; Bo.has(Do); ) Do++;
    var i = Do++;
    return Lo.set(n, i), Bo.set(i, n), i;
  },
  Hg = function (n, i) {
    (Do = i + 1), Lo.set(n, i), Bo.set(i, n);
  },
  Wg = "style[".concat(ii, "][").concat(Xp, '="').concat(el, '"]'),
  Qg = new RegExp(
    "^".concat(ii, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  qg = function (n, i, s) {
    for (var l, c = s.split(","), f = 0, p = c.length; f < p; f++)
      (l = c[f]) && n.registerName(i, l);
  },
  Kg = function (n, i) {
    for (
      var s,
        l = ((s = i.textContent) !== null && s !== void 0 ? s : "").split(za),
        c = [],
        f = 0,
        p = l.length;
      f < p;
      f++
    ) {
      var h = l[f].trim();
      if (h) {
        var v = h.match(Qg);
        if (v) {
          var x = 0 | parseInt(v[1], 10),
            S = v[2];
          x !== 0 && (Hg(S, x), qg(n, S, v[3]), n.getTag().insertRules(x, c)),
            (c.length = 0);
        } else c.push(h);
      }
    }
  },
  Zd = function (n) {
    for (
      var i = document.querySelectorAll(Wg), s = 0, l = i.length;
      s < l;
      s++
    ) {
      var c = i[s];
      c &&
        c.getAttribute(ii) !== Gp &&
        (Kg(n, c), c.parentNode && c.parentNode.removeChild(c));
    }
  };
function Gg() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var sh = function (n) {
    var i = document.head,
      s = n || i,
      l = document.createElement("style"),
      c = (function (h) {
        var v = Array.from(h.querySelectorAll("style[".concat(ii, "]")));
        return v[v.length - 1];
      })(s),
      f = c !== void 0 ? c.nextSibling : null;
    l.setAttribute(ii, Gp), l.setAttribute(Xp, el);
    var p = Gg();
    return p && l.setAttribute("nonce", p), s.insertBefore(l, f), l;
  },
  Xg = (function () {
    function n(i) {
      (this.element = sh(i)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (s) {
          if (s.sheet) return s.sheet;
          for (var l = document.styleSheets, c = 0, f = l.length; c < f; c++) {
            var p = l[c];
            if (p.ownerNode === s) return p;
          }
          throw mr(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (n.prototype.insertRule = function (i, s) {
        try {
          return this.sheet.insertRule(s, i), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (n.prototype.deleteRule = function (i) {
        this.sheet.deleteRule(i), this.length--;
      }),
      (n.prototype.getRule = function (i) {
        var s = this.sheet.cssRules[i];
        return s && s.cssText ? s.cssText : "";
      }),
      n
    );
  })(),
  Yg = (function () {
    function n(i) {
      (this.element = sh(i)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (n.prototype.insertRule = function (i, s) {
        if (i <= this.length && i >= 0) {
          var l = document.createTextNode(s);
          return (
            this.element.insertBefore(l, this.nodes[i] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (n.prototype.deleteRule = function (i) {
        this.element.removeChild(this.nodes[i]), this.length--;
      }),
      (n.prototype.getRule = function (i) {
        return i < this.length ? this.nodes[i].textContent : "";
      }),
      n
    );
  })(),
  Jg = (function () {
    function n(i) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (n.prototype.insertRule = function (i, s) {
        return (
          i <= this.length && (this.rules.splice(i, 0, s), this.length++, !0)
        );
      }),
      (n.prototype.deleteRule = function (i) {
        this.rules.splice(i, 1), this.length--;
      }),
      (n.prototype.getRule = function (i) {
        return i < this.length ? this.rules[i] : "";
      }),
      n
    );
  })(),
  ep = Uo,
  Zg = { isServer: !Uo, useCSSOMInjection: !Tg },
  Vo = (function () {
    function n(i, s, l) {
      i === void 0 && (i = si), s === void 0 && (s = {});
      var c = this;
      (this.options = ct(ct({}, Zg), i)),
        (this.gs = s),
        (this.names = new Map(l)),
        (this.server = !!i.isServer),
        !this.server && Uo && ep && ((ep = !1), Zd(this)),
        $a(this, function () {
          return (function (f) {
            for (
              var p = f.getTag(),
                h = p.length,
                v = "",
                x = function (E) {
                  var A = (function (X) {
                    return Bo.get(X);
                  })(E);
                  if (A === void 0) return "continue";
                  var B = f.names.get(A),
                    F = p.getGroup(E);
                  if (B === void 0 || !B.size || F.length === 0)
                    return "continue";
                  var R = ""
                      .concat(ii, ".g")
                      .concat(E, '[id="')
                      .concat(A, '"]'),
                    L = "";
                  B !== void 0 &&
                    B.forEach(function (X) {
                      X.length > 0 && (L += "".concat(X, ","));
                    }),
                    (v += ""
                      .concat(F)
                      .concat(R, '{content:"')
                      .concat(L, '"}')
                      .concat(za));
                },
                S = 0;
              S < h;
              S++
            )
              x(S);
            return v;
          })(c);
        });
    }
    return (
      (n.registerId = function (i) {
        return Oo(i);
      }),
      (n.prototype.rehydrate = function () {
        !this.server && Uo && Zd(this);
      }),
      (n.prototype.reconstructWithOptions = function (i, s) {
        return (
          s === void 0 && (s = !0),
          new n(
            ct(ct({}, this.options), i),
            this.gs,
            (s && this.names) || void 0
          )
        );
      }),
      (n.prototype.allocateGSInstance = function (i) {
        return (this.gs[i] = (this.gs[i] || 0) + 1);
      }),
      (n.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((i = (function (s) {
              var l = s.useCSSOMInjection,
                c = s.target;
              return s.isServer ? new Jg(c) : l ? new Xg(c) : new Yg(c);
            })(this.options)),
            new Vg(i)))
        );
        var i;
      }),
      (n.prototype.hasNameForId = function (i, s) {
        return this.names.has(i) && this.names.get(i).has(s);
      }),
      (n.prototype.registerName = function (i, s) {
        if ((Oo(i), this.names.has(i))) this.names.get(i).add(s);
        else {
          var l = new Set();
          l.add(s), this.names.set(i, l);
        }
      }),
      (n.prototype.insertRules = function (i, s, l) {
        this.registerName(i, s), this.getTag().insertRules(Oo(i), l);
      }),
      (n.prototype.clearNames = function (i) {
        this.names.has(i) && this.names.get(i).clear();
      }),
      (n.prototype.clearRules = function (i) {
        this.getTag().clearGroup(Oo(i)), this.clearNames(i);
      }),
      (n.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      n
    );
  })(),
  ev = /&/g,
  tv = /^\s*\/\/.*$/gm;
function oh(n, i) {
  return n.map(function (s) {
    return (
      s.type === "rule" &&
        ((s.value = "".concat(i, " ").concat(s.value)),
        (s.value = s.value.replaceAll(",", ",".concat(i, " "))),
        (s.props = s.props.map(function (l) {
          return "".concat(i, " ").concat(l);
        }))),
      Array.isArray(s.children) &&
        s.type !== "@keyframes" &&
        (s.children = oh(s.children, i)),
      s
    );
  });
}
function nv(n) {
  var i,
    s,
    l,
    c = si,
    f = c.options,
    p = f === void 0 ? si : f,
    h = c.plugins,
    v = h === void 0 ? tl : h,
    x = function (A, B, F) {
      return F.startsWith(s) && F.endsWith(s) && F.replaceAll(s, "").length > 0
        ? ".".concat(i)
        : A;
    },
    S = v.slice();
  S.push(function (A) {
    A.type === Xo &&
      A.value.includes("&") &&
      (A.props[0] = A.props[0].replace(ev, s).replace(l, x));
  }),
    p.prefix && S.push(Rg),
    S.push(Cg);
  var E = function (A, B, F, R) {
    B === void 0 && (B = ""),
      F === void 0 && (F = ""),
      R === void 0 && (R = "&"),
      (i = R),
      (s = B),
      (l = new RegExp("\\".concat(s, "\\b"), "g"));
    var L = A.replace(tv, ""),
      X = xg(F || B ? "".concat(F, " ").concat(B, " { ").concat(L, " }") : L);
    p.namespace && (X = oh(X, p.namespace));
    var $ = [];
    return (
      $o(
        X,
        _g(
          S.concat(
            Og(function (Y) {
              return $.push(Y);
            })
          )
        )
      ),
      $
    );
  };
  return (
    (E.hash = v.length
      ? v
          .reduce(function (A, B) {
            return B.name || mr(15), Zr(A, B.name);
          }, Zp)
          .toString()
      : ""),
    E
  );
}
var rv = new Vo(),
  ka = nv(),
  lh = ae.createContext({
    shouldForwardProp: void 0,
    styleSheet: rv,
    stylis: ka,
  });
lh.Consumer;
ae.createContext(void 0);
function xa() {
  return Me.useContext(lh);
}
var uh = (function () {
    function n(i, s) {
      var l = this;
      (this.inject = function (c, f) {
        f === void 0 && (f = ka);
        var p = l.name + f.hash;
        c.hasNameForId(l.id, p) ||
          c.insertRules(l.id, p, f(l.rules, p, "@keyframes"));
      }),
        (this.name = i),
        (this.id = "sc-keyframes-".concat(i)),
        (this.rules = s),
        $a(this, function () {
          throw mr(12, String(l.name));
        });
    }
    return (
      (n.prototype.getName = function (i) {
        return i === void 0 && (i = ka), this.name + i.hash;
      }),
      n
    );
  })(),
  iv = function (n) {
    return n >= "A" && n <= "Z";
  };
function tp(n) {
  for (var i = "", s = 0; s < n.length; s++) {
    var l = n[s];
    if (s === 1 && l === "-" && n[0] === "-") return n;
    iv(l) ? (i += "-" + l.toLowerCase()) : (i += l);
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var ah = function (n) {
    return n == null || n === !1 || n === "";
  },
  ch = function (n) {
    var i,
      s,
      l = [];
    for (var c in n) {
      var f = n[c];
      n.hasOwnProperty(c) &&
        !ah(f) &&
        ((Array.isArray(f) && f.isCss) || hr(f)
          ? l.push("".concat(tp(c), ":"), f, ";")
          : rs(f)
          ? l.push.apply(l, ti(ti(["".concat(c, " {")], ch(f), !1), ["}"], !1))
          : l.push(
              ""
                .concat(tp(c), ": ")
                .concat(
                  ((i = c),
                  (s = f) == null || typeof s == "boolean" || s === ""
                    ? ""
                    : typeof s != "number" ||
                      s === 0 ||
                      i in Pg ||
                      i.startsWith("--")
                    ? String(s).trim()
                    : "".concat(s, "px")),
                  ";"
                )
            ));
    }
    return l;
  };
function Kn(n, i, s, l) {
  if (ah(n)) return [];
  if (Ma(n)) return [".".concat(n.styledComponentId)];
  if (hr(n)) {
    if (!hr((f = n)) || (f.prototype && f.prototype.isReactComponent) || !i)
      return [n];
    var c = n(i);
    return Kn(c, i, s, l);
  }
  var f;
  return n instanceof uh
    ? s
      ? (n.inject(s, l), [n.getName(l)])
      : [n]
    : rs(n)
    ? ch(n)
    : Array.isArray(n)
    ? Array.prototype.concat.apply(
        tl,
        n.map(function (p) {
          return Kn(p, i, s, l);
        })
      )
    : [n.toString()];
}
function fh(n) {
  for (var i = 0; i < n.length; i += 1) {
    var s = n[i];
    if (hr(s) && !Ma(s)) return !1;
  }
  return !0;
}
var sv = eh(el),
  ov = (function () {
    function n(i, s, l) {
      (this.rules = i),
        (this.staticRulesId = ""),
        (this.isStatic = (l === void 0 || l.isStatic) && fh(i)),
        (this.componentId = s),
        (this.baseHash = Zr(sv, s)),
        (this.baseStyle = l),
        Vo.registerId(s);
    }
    return (
      (n.prototype.generateAndInjectStyles = function (i, s, l) {
        var c = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(i, s, l)
          : "";
        if (this.isStatic && !l.hash)
          if (
            this.staticRulesId &&
            s.hasNameForId(this.componentId, this.staticRulesId)
          )
            c = ur(c, this.staticRulesId);
          else {
            var f = bo(Kn(this.rules, i, s, l)),
              p = wa(Zr(this.baseHash, f) >>> 0);
            if (!s.hasNameForId(this.componentId, p)) {
              var h = l(f, ".".concat(p), void 0, this.componentId);
              s.insertRules(this.componentId, p, h);
            }
            (c = ur(c, p)), (this.staticRulesId = p);
          }
        else {
          for (
            var v = Zr(this.baseHash, l.hash), x = "", S = 0;
            S < this.rules.length;
            S++
          ) {
            var E = this.rules[S];
            if (typeof E == "string") x += E;
            else if (E) {
              var A = bo(Kn(E, i, s, l));
              (v = Zr(v, A + S)), (x += A);
            }
          }
          if (x) {
            var B = wa(v >>> 0);
            s.hasNameForId(this.componentId, B) ||
              s.insertRules(
                this.componentId,
                B,
                l(x, ".".concat(B), void 0, this.componentId)
              ),
              (c = ur(c, B));
          }
        }
        return c;
      }),
      n
    );
  })(),
  is = ae.createContext(void 0);
is.Consumer;
function lv(n) {
  var i = ae.useContext(is),
    s = Me.useMemo(
      function () {
        return (function (l, c) {
          if (!l) throw mr(14);
          if (hr(l)) {
            var f = l(c);
            return f;
          }
          if (Array.isArray(l) || typeof l != "object") throw mr(8);
          return c ? ct(ct({}, c), l) : l;
        })(n.theme, i);
      },
      [n.theme, i]
    );
  return n.children
    ? ae.createElement(is.Provider, { value: s }, n.children)
    : null;
}
var oa = {};
function uv(n, i, s) {
  var l = Ma(n),
    c = n,
    f = !sa(n),
    p = i.attrs,
    h = p === void 0 ? tl : p,
    v = i.componentId,
    x =
      v === void 0
        ? (function (K, D) {
            var W = typeof K != "string" ? "sc" : Kd(K);
            oa[W] = (oa[W] || 0) + 1;
            var Q = "".concat(W, "-").concat(Ia(el + W + oa[W]));
            return D ? "".concat(D, "-").concat(Q) : Q;
          })(i.displayName, i.parentComponentId)
        : v,
    S = i.displayName,
    E =
      S === void 0
        ? (function (K) {
            return sa(K) ? "styled.".concat(K) : "Styled(".concat(Dg(K), ")");
          })(n)
        : S,
    A =
      i.displayName && i.componentId
        ? "".concat(Kd(i.displayName), "-").concat(i.componentId)
        : i.componentId || x,
    B = l && c.attrs ? c.attrs.concat(h).filter(Boolean) : h,
    F = i.shouldForwardProp;
  if (l && c.shouldForwardProp) {
    var R = c.shouldForwardProp;
    if (i.shouldForwardProp) {
      var L = i.shouldForwardProp;
      F = function (K, D) {
        return R(K, D) && L(K, D);
      };
    } else F = R;
  }
  var X = new ov(s, A, l ? c.componentStyle : void 0);
  function $(K, D) {
    return (function (W, Q, Ce) {
      var _e = W.attrs,
        Ie = W.componentStyle,
        je = W.defaultProps,
        oe = W.foldedComponentIds,
        ce = W.styledComponentId,
        ke = W.target,
        Fe = ae.useContext(is),
        Re = xa(),
        xe = W.shouldForwardProp || Re.shouldForwardProp,
        H = Yp(Q, Fe, je) || si,
        ee = (function (ve, ge, ue) {
          for (
            var he,
              we = ct(ct({}, ge), { className: void 0, theme: ue }),
              Ve = 0;
            Ve < ve.length;
            Ve += 1
          ) {
            var qt = hr((he = ve[Ve])) ? he(we) : he;
            for (var Et in qt)
              we[Et] =
                Et === "className"
                  ? ur(we[Et], qt[Et])
                  : Et === "style"
                  ? ct(ct({}, we[Et]), qt[Et])
                  : qt[Et];
          }
          return (
            ge.className && (we.className = ur(we.className, ge.className)), we
          );
        })(_e, Q, H),
        G = ee.as || ke,
        k = {};
      for (var j in ee)
        ee[j] === void 0 ||
          j[0] === "$" ||
          j === "as" ||
          (j === "theme" && ee.theme === H) ||
          (j === "forwardedAs"
            ? (k.as = ee.forwardedAs)
            : (xe && !xe(j, G)) || (k[j] = ee[j]));
      var pe = (function (ve, ge) {
          var ue = xa(),
            he = ve.generateAndInjectStyles(ge, ue.styleSheet, ue.stylis);
          return he;
        })(Ie, ee),
        ye = ur(oe, ce);
      return (
        pe && (ye += " " + pe),
        ee.className && (ye += " " + ee.className),
        (k[sa(G) && !Jp.has(G) ? "class" : "className"] = ye),
        Ce && (k.ref = Ce),
        Me.createElement(G, k)
      );
    })(Y, K, D);
  }
  $.displayName = E;
  var Y = ae.forwardRef($);
  return (
    (Y.attrs = B),
    (Y.componentStyle = X),
    (Y.displayName = E),
    (Y.shouldForwardProp = F),
    (Y.foldedComponentIds = l
      ? ur(c.foldedComponentIds, c.styledComponentId)
      : ""),
    (Y.styledComponentId = A),
    (Y.target = l ? c.target : n),
    Object.defineProperty(Y, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (K) {
        this._foldedDefaultProps = l
          ? (function (D) {
              for (var W = [], Q = 1; Q < arguments.length; Q++)
                W[Q - 1] = arguments[Q];
              for (var Ce = 0, _e = W; Ce < _e.length; Ce++) Sa(D, _e[Ce], !0);
              return D;
            })({}, c.defaultProps, K)
          : K;
      },
    }),
    $a(Y, function () {
      return ".".concat(Y.styledComponentId);
    }),
    f &&
      ih(Y, n, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    Y
  );
}
function np(n, i) {
  for (var s = [n[0]], l = 0, c = i.length; l < c; l += 1)
    s.push(i[l], n[l + 1]);
  return s;
}
var rp = function (n) {
  return Object.assign(n, { isCss: !0 });
};
function ss(n) {
  for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
  if (hr(n) || rs(n)) return rp(Kn(np(tl, ti([n], i, !0))));
  var l = n;
  return i.length === 0 && l.length === 1 && typeof l[0] == "string"
    ? Kn(l)
    : rp(Kn(np(l, i)));
}
function Ea(n, i, s) {
  if ((s === void 0 && (s = si), !i)) throw mr(1, i);
  var l = function (c) {
    for (var f = [], p = 1; p < arguments.length; p++) f[p - 1] = arguments[p];
    return n(i, s, ss.apply(void 0, ti([c], f, !1)));
  };
  return (
    (l.attrs = function (c) {
      return Ea(
        n,
        i,
        ct(ct({}, s), {
          attrs: Array.prototype.concat(s.attrs, c).filter(Boolean),
        })
      );
    }),
    (l.withConfig = function (c) {
      return Ea(n, i, ct(ct({}, s), c));
    }),
    l
  );
}
var dh = function (n) {
    return Ea(uv, n);
  },
  De = dh;
Jp.forEach(function (n) {
  De[n] = dh(n);
});
var av = (function () {
  function n(i, s) {
    (this.rules = i),
      (this.componentId = s),
      (this.isStatic = fh(i)),
      Vo.registerId(this.componentId + 1);
  }
  return (
    (n.prototype.createStyles = function (i, s, l, c) {
      var f = c(bo(Kn(this.rules, s, l, c)), ""),
        p = this.componentId + i;
      l.insertRules(p, p, f);
    }),
    (n.prototype.removeStyles = function (i, s) {
      s.clearRules(this.componentId + i);
    }),
    (n.prototype.renderStyles = function (i, s, l, c) {
      i > 2 && Vo.registerId(this.componentId + i),
        this.removeStyles(i, l),
        this.createStyles(i, s, l, c);
    }),
    n
  );
})();
function cv(n) {
  for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
  var l = ss.apply(void 0, ti([n], i, !1)),
    c = "sc-global-".concat(Ia(JSON.stringify(l))),
    f = new av(l, c),
    p = function (v) {
      var x = xa(),
        S = ae.useContext(is),
        E = ae.useRef(x.styleSheet.allocateGSInstance(c)).current;
      return (
        x.styleSheet.server && h(E, v, x.styleSheet, S, x.stylis),
        ae.useLayoutEffect(
          function () {
            if (!x.styleSheet.server)
              return (
                h(E, v, x.styleSheet, S, x.stylis),
                function () {
                  return f.removeStyles(E, x.styleSheet);
                }
              );
          },
          [E, v, x.styleSheet, S, x.stylis]
        ),
        null
      );
    };
  function h(v, x, S, E, A) {
    if (f.isStatic) f.renderStyles(v, Ag, S, A);
    else {
      var B = ct(ct({}, x), { theme: Yp(x, E, p.defaultProps) });
      f.renderStyles(v, B, S, A);
    }
  }
  return ae.memo(p);
}
function Ua(n) {
  for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
  var l = bo(ss.apply(void 0, ti([n], i, !1))),
    c = Ia(l);
  return new uh(c, l);
}
const Gi = {
    colors: {
      primary: "#e7333c",
      gradientStart: "rgb(0, 183, 255)",
      gradientEnd: "rgb(255, 48, 255)",
      secondary: "#333333",
      white: "#ffffff",
      black: "#000000",
      success: "#28a745",
      error: "#dc3545",
      lightGray: "#f1f1f1",
      mediumGray: "#c6c6c6",
    },
    fonts: { main: "Arial, Helvetica, sans-serif" },
    spacing: { xs: "4px", sm: "8px", md: "16px", lg: "24px", xl: "32px" },
    borderRadius: "20px",
  },
  fv = cv`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme: n }) => n.fonts.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff; /* Veya sitenizin ana arkaplan rengi */
    color: ${({ theme: n }) => n.colors.secondary};
  }
`;
var us = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(n) {
      return (
        this.listeners.add(n),
        this.onSubscribe(),
        () => {
          this.listeners.delete(n), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  nl = typeof window > "u" || "Deno" in globalThis;
function Wt() {}
function dv(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function pv(n) {
  return typeof n == "number" && n >= 0 && n !== 1 / 0;
}
function hv(n, i) {
  return Math.max(n + (i || 0) - Date.now(), 0);
}
function Ca(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function mv(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function ip(n, i) {
  const {
    type: s = "all",
    exact: l,
    fetchStatus: c,
    predicate: f,
    queryKey: p,
    stale: h,
  } = n;
  if (p) {
    if (l) {
      if (i.queryHash !== ba(p, i.options)) return !1;
    } else if (!os(i.queryKey, p)) return !1;
  }
  if (s !== "all") {
    const v = i.isActive();
    if ((s === "active" && !v) || (s === "inactive" && v)) return !1;
  }
  return !(
    (typeof h == "boolean" && i.isStale() !== h) ||
    (c && c !== i.state.fetchStatus) ||
    (f && !f(i))
  );
}
function sp(n, i) {
  const { exact: s, status: l, predicate: c, mutationKey: f } = n;
  if (f) {
    if (!i.options.mutationKey) return !1;
    if (s) {
      if (yr(i.options.mutationKey) !== yr(f)) return !1;
    } else if (!os(i.options.mutationKey, f)) return !1;
  }
  return !((l && i.state.status !== l) || (c && !c(i)));
}
function ba(n, i) {
  return (i?.queryKeyHashFn || yr)(n);
}
function yr(n) {
  return JSON.stringify(n, (i, s) =>
    _a(s)
      ? Object.keys(s)
          .sort()
          .reduce((l, c) => ((l[c] = s[c]), l), {})
      : s
  );
}
function os(n, i) {
  return n === i
    ? !0
    : typeof n != typeof i
    ? !1
    : n && i && typeof n == "object" && typeof i == "object"
    ? Object.keys(i).every((s) => os(n[s], i[s]))
    : !1;
}
function ph(n, i) {
  if (n === i) return n;
  const s = op(n) && op(i);
  if (s || (_a(n) && _a(i))) {
    const l = s ? n : Object.keys(n),
      c = l.length,
      f = s ? i : Object.keys(i),
      p = f.length,
      h = s ? [] : {},
      v = new Set(l);
    let x = 0;
    for (let S = 0; S < p; S++) {
      const E = s ? S : f[S];
      ((!s && v.has(E)) || s) && n[E] === void 0 && i[E] === void 0
        ? ((h[E] = void 0), x++)
        : ((h[E] = ph(n[E], i[E])), h[E] === n[E] && n[E] !== void 0 && x++);
    }
    return c === p && x === c ? n : h;
  }
  return i;
}
function yv(n, i) {
  if (!i || Object.keys(n).length !== Object.keys(i).length) return !1;
  for (const s in n) if (n[s] !== i[s]) return !1;
  return !0;
}
function op(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function _a(n) {
  if (!lp(n)) return !1;
  const i = n.constructor;
  if (i === void 0) return !0;
  const s = i.prototype;
  return !(
    !lp(s) ||
    !s.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(n) !== Object.prototype
  );
}
function lp(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function gv(n) {
  return new Promise((i) => {
    setTimeout(i, n);
  });
}
function vv(n, i, s) {
  return typeof s.structuralSharing == "function"
    ? s.structuralSharing(n, i)
    : s.structuralSharing !== !1
    ? ph(n, i)
    : i;
}
function wv(n, i, s = 0) {
  const l = [...n, i];
  return s && l.length > s ? l.slice(1) : l;
}
function Sv(n, i, s = 0) {
  const l = [i, ...n];
  return s && l.length > s ? l.slice(0, -1) : l;
}
var Ba = Symbol();
function hh(n, i) {
  return !n.queryFn && i?.initialPromise
    ? () => i.initialPromise
    : !n.queryFn || n.queryFn === Ba
    ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`))
    : n.queryFn;
}
function kv(n, i) {
  return typeof n == "function" ? n(...i) : !!n;
}
var xv = class extends us {
    #e;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (n) => {
          if (!nl && window.addEventListener) {
            const i = () => n();
            return (
              window.addEventListener("visibilitychange", i, !1),
              () => {
                window.removeEventListener("visibilitychange", i);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(n) {
      (this.#n = n),
        this.#t?.(),
        (this.#t = n((i) => {
          typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
        }));
    }
    setFocused(n) {
      this.#e !== n && ((this.#e = n), this.onFocus());
    }
    onFocus() {
      const n = this.isFocused();
      this.listeners.forEach((i) => {
        i(n);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  mh = new xv(),
  Ev = class extends us {
    #e = !0;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (n) => {
          if (!nl && window.addEventListener) {
            const i = () => n(!0),
              s = () => n(!1);
            return (
              window.addEventListener("online", i, !1),
              window.addEventListener("offline", s, !1),
              () => {
                window.removeEventListener("online", i),
                  window.removeEventListener("offline", s);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(n) {
      (this.#n = n), this.#t?.(), (this.#t = n(this.setOnline.bind(this)));
    }
    setOnline(n) {
      this.#e !== n &&
        ((this.#e = n),
        this.listeners.forEach((s) => {
          s(n);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  Ho = new Ev();
function Cv() {
  let n, i;
  const s = new Promise((c, f) => {
    (n = c), (i = f);
  });
  (s.status = "pending"), s.catch(() => {});
  function l(c) {
    Object.assign(s, c), delete s.resolve, delete s.reject;
  }
  return (
    (s.resolve = (c) => {
      l({ status: "fulfilled", value: c }), n(c);
    }),
    (s.reject = (c) => {
      l({ status: "rejected", reason: c }), i(c);
    }),
    s
  );
}
function _v(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function yh(n) {
  return (n ?? "online") === "online" ? Ho.isOnline() : !0;
}
var gh = class extends Error {
  constructor(n) {
    super("CancelledError"),
      (this.revert = n?.revert),
      (this.silent = n?.silent);
  }
};
function la(n) {
  return n instanceof gh;
}
function vh(n) {
  let i = !1,
    s = 0,
    l = !1,
    c;
  const f = Cv(),
    p = (R) => {
      l || (A(new gh(R)), n.abort?.());
    },
    h = () => {
      i = !0;
    },
    v = () => {
      i = !1;
    },
    x = () =>
      mh.isFocused() &&
      (n.networkMode === "always" || Ho.isOnline()) &&
      n.canRun(),
    S = () => yh(n.networkMode) && n.canRun(),
    E = (R) => {
      l || ((l = !0), n.onSuccess?.(R), c?.(), f.resolve(R));
    },
    A = (R) => {
      l || ((l = !0), n.onError?.(R), c?.(), f.reject(R));
    },
    B = () =>
      new Promise((R) => {
        (c = (L) => {
          (l || x()) && R(L);
        }),
          n.onPause?.();
      }).then(() => {
        (c = void 0), l || n.onContinue?.();
      }),
    F = () => {
      if (l) return;
      let R;
      const L = s === 0 ? n.initialPromise : void 0;
      try {
        R = L ?? n.fn();
      } catch (X) {
        R = Promise.reject(X);
      }
      Promise.resolve(R)
        .then(E)
        .catch((X) => {
          if (l) return;
          const $ = n.retry ?? (nl ? 0 : 3),
            Y = n.retryDelay ?? _v,
            K = typeof Y == "function" ? Y(s, X) : Y,
            D =
              $ === !0 ||
              (typeof $ == "number" && s < $) ||
              (typeof $ == "function" && $(s, X));
          if (i || !D) {
            A(X);
            return;
          }
          s++,
            n.onFail?.(s, X),
            gv(K)
              .then(() => (x() ? void 0 : B()))
              .then(() => {
                i ? A(X) : F();
              });
        });
    };
  return {
    promise: f,
    cancel: p,
    continue: () => (c?.(), f),
    cancelRetry: h,
    continueRetry: v,
    canStart: S,
    start: () => (S() ? F() : B().then(F), f),
  };
}
var Ov = (n) => setTimeout(n, 0);
function Rv() {
  let n = [],
    i = 0,
    s = (h) => {
      h();
    },
    l = (h) => {
      h();
    },
    c = Ov;
  const f = (h) => {
      i
        ? n.push(h)
        : c(() => {
            s(h);
          });
    },
    p = () => {
      const h = n;
      (n = []),
        h.length &&
          c(() => {
            l(() => {
              h.forEach((v) => {
                s(v);
              });
            });
          });
    };
  return {
    batch: (h) => {
      let v;
      i++;
      try {
        v = h();
      } finally {
        i--, i || p();
      }
      return v;
    },
    batchCalls:
      (h) =>
      (...v) => {
        f(() => {
          h(...v);
        });
      },
    schedule: f,
    setNotifyFunction: (h) => {
      s = h;
    },
    setBatchNotifyFunction: (h) => {
      l = h;
    },
    setScheduler: (h) => {
      c = h;
    },
  };
}
var pt = Rv(),
  wh = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        pv(this.gcTime) &&
          (this.#e = setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(n) {
      this.gcTime = Math.max(
        this.gcTime || 0,
        n ?? (nl ? 1 / 0 : 5 * 60 * 1e3)
      );
    }
    clearGcTimeout() {
      this.#e && (clearTimeout(this.#e), (this.#e = void 0));
    }
  },
  Pv = class extends wh {
    #e;
    #t;
    #n;
    #r;
    #i;
    #o;
    #l;
    constructor(n) {
      super(),
        (this.#l = !1),
        (this.#o = n.defaultOptions),
        this.setOptions(n.options),
        (this.observers = []),
        (this.#r = n.client),
        (this.#n = this.#r.getQueryCache()),
        (this.queryKey = n.queryKey),
        (this.queryHash = n.queryHash),
        (this.#e = Av(this.options)),
        (this.state = n.state ?? this.#e),
        this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#i?.promise;
    }
    setOptions(n) {
      (this.options = { ...this.#o, ...n }),
        this.updateGcTime(this.options.gcTime);
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#n.remove(this);
    }
    setData(n, i) {
      const s = vv(this.state.data, n, this.options);
      return (
        this.#s({
          data: s,
          type: "success",
          dataUpdatedAt: i?.updatedAt,
          manual: i?.manual,
        }),
        s
      );
    }
    setState(n, i) {
      this.#s({ type: "setState", state: n, setStateOptions: i });
    }
    cancel(n) {
      const i = this.#i?.promise;
      return this.#i?.cancel(n), i ? i.then(Wt).catch(Wt) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({ silent: !0 });
    }
    reset() {
      this.destroy(), this.setState(this.#e);
    }
    isActive() {
      return this.observers.some((n) => mv(n.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === Ba ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((n) => Ca(n.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((n) => n.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(n = 0) {
      return this.state.data === void 0
        ? !0
        : n === "static"
        ? !1
        : this.state.isInvalidated
        ? !0
        : !hv(this.state.dataUpdatedAt, n);
    }
    onFocus() {
      this.observers
        .find((i) => i.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#i?.continue();
    }
    onOnline() {
      this.observers
        .find((i) => i.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#i?.continue();
    }
    addObserver(n) {
      this.observers.includes(n) ||
        (this.observers.push(n),
        this.clearGcTimeout(),
        this.#n.notify({ type: "observerAdded", query: this, observer: n }));
    }
    removeObserver(n) {
      this.observers.includes(n) &&
        ((this.observers = this.observers.filter((i) => i !== n)),
        this.observers.length ||
          (this.#i &&
            (this.#l ? this.#i.cancel({ revert: !0 }) : this.#i.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: "observerRemoved", query: this, observer: n }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#s({ type: "invalidate" });
    }
    fetch(n, i) {
      if (this.state.fetchStatus !== "idle") {
        if (this.state.data !== void 0 && i?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#i) return this.#i.continueRetry(), this.#i.promise;
      }
      if ((n && this.setOptions(n), !this.options.queryFn)) {
        const v = this.observers.find((x) => x.options.queryFn);
        v && this.setOptions(v.options);
      }
      const s = new AbortController(),
        l = (v) => {
          Object.defineProperty(v, "signal", {
            enumerable: !0,
            get: () => ((this.#l = !0), s.signal),
          });
        },
        c = () => {
          const v = hh(this.options, i),
            S = (() => {
              const E = {
                client: this.#r,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return l(E), E;
            })();
          return (
            (this.#l = !1),
            this.options.persister ? this.options.persister(v, S, this) : v(S)
          );
        },
        p = (() => {
          const v = {
            fetchOptions: i,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#r,
            state: this.state,
            fetchFn: c,
          };
          return l(v), v;
        })();
      this.options.behavior?.onFetch(p, this),
        (this.#t = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== p.fetchOptions?.meta) &&
          this.#s({ type: "fetch", meta: p.fetchOptions?.meta });
      const h = (v) => {
        (la(v) && v.silent) || this.#s({ type: "error", error: v }),
          la(v) ||
            (this.#n.config.onError?.(v, this),
            this.#n.config.onSettled?.(this.state.data, v, this)),
          this.scheduleGc();
      };
      return (
        (this.#i = vh({
          initialPromise: i?.initialPromise,
          fn: p.fetchFn,
          abort: s.abort.bind(s),
          onSuccess: (v) => {
            if (v === void 0) {
              h(new Error(`${this.queryHash} data is undefined`));
              return;
            }
            try {
              this.setData(v);
            } catch (x) {
              h(x);
              return;
            }
            this.#n.config.onSuccess?.(v, this),
              this.#n.config.onSettled?.(v, this.state.error, this),
              this.scheduleGc();
          },
          onError: h,
          onFail: (v, x) => {
            this.#s({ type: "failed", failureCount: v, error: x });
          },
          onPause: () => {
            this.#s({ type: "pause" });
          },
          onContinue: () => {
            this.#s({ type: "continue" });
          },
          retry: p.options.retry,
          retryDelay: p.options.retryDelay,
          networkMode: p.options.networkMode,
          canRun: () => !0,
        })),
        this.#i.start()
      );
    }
    #s(n) {
      const i = (s) => {
        switch (n.type) {
          case "failed":
            return {
              ...s,
              fetchFailureCount: n.failureCount,
              fetchFailureReason: n.error,
            };
          case "pause":
            return { ...s, fetchStatus: "paused" };
          case "continue":
            return { ...s, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...s,
              ...Tv(s.data, this.options),
              fetchMeta: n.meta ?? null,
            };
          case "success":
            return (
              (this.#t = void 0),
              {
                ...s,
                data: n.data,
                dataUpdateCount: s.dataUpdateCount + 1,
                dataUpdatedAt: n.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!n.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const l = n.error;
            return la(l) && l.revert && this.#t
              ? { ...this.#t, fetchStatus: "idle" }
              : {
                  ...s,
                  error: l,
                  errorUpdateCount: s.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: s.fetchFailureCount + 1,
                  fetchFailureReason: l,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...s, isInvalidated: !0 };
          case "setState":
            return { ...s, ...n.state };
        }
      };
      (this.state = i(this.state)),
        pt.batch(() => {
          this.observers.forEach((s) => {
            s.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: "updated", action: n });
        });
    }
  };
function Tv(n, i) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: yh(i.networkMode) ? "fetching" : "paused",
    ...(n === void 0 && { error: null, status: "pending" }),
  };
}
function Av(n) {
  const i =
      typeof n.initialData == "function" ? n.initialData() : n.initialData,
    s = i !== void 0,
    l = s
      ? typeof n.initialDataUpdatedAt == "function"
        ? n.initialDataUpdatedAt()
        : n.initialDataUpdatedAt
      : 0;
  return {
    data: i,
    dataUpdateCount: 0,
    dataUpdatedAt: s ? l ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: s ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Fv = class extends us {
    constructor(n = {}) {
      super(), (this.config = n), (this.#e = new Map());
    }
    #e;
    build(n, i, s) {
      const l = i.queryKey,
        c = i.queryHash ?? ba(l, i);
      let f = this.get(c);
      return (
        f ||
          ((f = new Pv({
            client: n,
            queryKey: l,
            queryHash: c,
            options: n.defaultQueryOptions(i),
            state: s,
            defaultOptions: n.getQueryDefaults(l),
          })),
          this.add(f)),
        f
      );
    }
    add(n) {
      this.#e.has(n.queryHash) ||
        (this.#e.set(n.queryHash, n), this.notify({ type: "added", query: n }));
    }
    remove(n) {
      const i = this.#e.get(n.queryHash);
      i &&
        (n.destroy(),
        i === n && this.#e.delete(n.queryHash),
        this.notify({ type: "removed", query: n }));
    }
    clear() {
      pt.batch(() => {
        this.getAll().forEach((n) => {
          this.remove(n);
        });
      });
    }
    get(n) {
      return this.#e.get(n);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(n) {
      const i = { exact: !0, ...n };
      return this.getAll().find((s) => ip(i, s));
    }
    findAll(n = {}) {
      const i = this.getAll();
      return Object.keys(n).length > 0 ? i.filter((s) => ip(n, s)) : i;
    }
    notify(n) {
      pt.batch(() => {
        this.listeners.forEach((i) => {
          i(n);
        });
      });
    }
    onFocus() {
      pt.batch(() => {
        this.getAll().forEach((n) => {
          n.onFocus();
        });
      });
    }
    onOnline() {
      pt.batch(() => {
        this.getAll().forEach((n) => {
          n.onOnline();
        });
      });
    }
  },
  Nv = class extends wh {
    #e;
    #t;
    #n;
    constructor(n) {
      super(),
        (this.mutationId = n.mutationId),
        (this.#t = n.mutationCache),
        (this.#e = []),
        (this.state = n.state || Sh()),
        this.setOptions(n.options),
        this.scheduleGc();
    }
    setOptions(n) {
      (this.options = n), this.updateGcTime(this.options.gcTime);
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(n) {
      this.#e.includes(n) ||
        (this.#e.push(n),
        this.clearGcTimeout(),
        this.#t.notify({ type: "observerAdded", mutation: this, observer: n }));
    }
    removeObserver(n) {
      (this.#e = this.#e.filter((i) => i !== n)),
        this.scheduleGc(),
        this.#t.notify({
          type: "observerRemoved",
          mutation: this,
          observer: n,
        });
    }
    optionalRemove() {
      this.#e.length ||
        (this.state.status === "pending"
          ? this.scheduleGc()
          : this.#t.remove(this));
    }
    continue() {
      return this.#n?.continue() ?? this.execute(this.state.variables);
    }
    async execute(n) {
      const i = () => {
        this.#r({ type: "continue" });
      };
      this.#n = vh({
        fn: () =>
          this.options.mutationFn
            ? this.options.mutationFn(n)
            : Promise.reject(new Error("No mutationFn found")),
        onFail: (c, f) => {
          this.#r({ type: "failed", failureCount: c, error: f });
        },
        onPause: () => {
          this.#r({ type: "pause" });
        },
        onContinue: i,
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => this.#t.canRun(this),
      });
      const s = this.state.status === "pending",
        l = !this.#n.canStart();
      try {
        if (s) i();
        else {
          this.#r({ type: "pending", variables: n, isPaused: l }),
            await this.#t.config.onMutate?.(n, this);
          const f = await this.options.onMutate?.(n);
          f !== this.state.context &&
            this.#r({ type: "pending", context: f, variables: n, isPaused: l });
        }
        const c = await this.#n.start();
        return (
          await this.#t.config.onSuccess?.(c, n, this.state.context, this),
          await this.options.onSuccess?.(c, n, this.state.context),
          await this.#t.config.onSettled?.(
            c,
            null,
            this.state.variables,
            this.state.context,
            this
          ),
          await this.options.onSettled?.(c, null, n, this.state.context),
          this.#r({ type: "success", data: c }),
          c
        );
      } catch (c) {
        try {
          throw (
            (await this.#t.config.onError?.(c, n, this.state.context, this),
            await this.options.onError?.(c, n, this.state.context),
            await this.#t.config.onSettled?.(
              void 0,
              c,
              this.state.variables,
              this.state.context,
              this
            ),
            await this.options.onSettled?.(void 0, c, n, this.state.context),
            c)
          );
        } finally {
          this.#r({ type: "error", error: c });
        }
      } finally {
        this.#t.runNext(this);
      }
    }
    #r(n) {
      const i = (s) => {
        switch (n.type) {
          case "failed":
            return {
              ...s,
              failureCount: n.failureCount,
              failureReason: n.error,
            };
          case "pause":
            return { ...s, isPaused: !0 };
          case "continue":
            return { ...s, isPaused: !1 };
          case "pending":
            return {
              ...s,
              context: n.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: n.isPaused,
              status: "pending",
              variables: n.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...s,
              data: n.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...s,
              data: void 0,
              error: n.error,
              failureCount: s.failureCount + 1,
              failureReason: n.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = i(this.state)),
        pt.batch(() => {
          this.#e.forEach((s) => {
            s.onMutationUpdate(n);
          }),
            this.#t.notify({ mutation: this, type: "updated", action: n });
        });
    }
  };
function Sh() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Lv = class extends us {
  constructor(n = {}) {
    super(),
      (this.config = n),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0);
  }
  #e;
  #t;
  #n;
  build(n, i, s) {
    const l = new Nv({
      mutationCache: this,
      mutationId: ++this.#n,
      options: n.defaultMutationOptions(i),
      state: s,
    });
    return this.add(l), l;
  }
  add(n) {
    this.#e.add(n);
    const i = Ro(n);
    if (typeof i == "string") {
      const s = this.#t.get(i);
      s ? s.push(n) : this.#t.set(i, [n]);
    }
    this.notify({ type: "added", mutation: n });
  }
  remove(n) {
    if (this.#e.delete(n)) {
      const i = Ro(n);
      if (typeof i == "string") {
        const s = this.#t.get(i);
        if (s)
          if (s.length > 1) {
            const l = s.indexOf(n);
            l !== -1 && s.splice(l, 1);
          } else s[0] === n && this.#t.delete(i);
      }
    }
    this.notify({ type: "removed", mutation: n });
  }
  canRun(n) {
    const i = Ro(n);
    if (typeof i == "string") {
      const l = this.#t.get(i)?.find((c) => c.state.status === "pending");
      return !l || l === n;
    } else return !0;
  }
  runNext(n) {
    const i = Ro(n);
    return typeof i == "string"
      ? this.#t
          .get(i)
          ?.find((l) => l !== n && l.state.isPaused)
          ?.continue() ?? Promise.resolve()
      : Promise.resolve();
  }
  clear() {
    pt.batch(() => {
      this.#e.forEach((n) => {
        this.notify({ type: "removed", mutation: n });
      }),
        this.#e.clear(),
        this.#t.clear();
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(n) {
    const i = { exact: !0, ...n };
    return this.getAll().find((s) => sp(i, s));
  }
  findAll(n = {}) {
    return this.getAll().filter((i) => sp(n, i));
  }
  notify(n) {
    pt.batch(() => {
      this.listeners.forEach((i) => {
        i(n);
      });
    });
  }
  resumePausedMutations() {
    const n = this.getAll().filter((i) => i.state.isPaused);
    return pt.batch(() => Promise.all(n.map((i) => i.continue().catch(Wt))));
  }
};
function Ro(n) {
  return n.options.scope?.id;
}
function up(n) {
  return {
    onFetch: (i, s) => {
      const l = i.options,
        c = i.fetchOptions?.meta?.fetchMore?.direction,
        f = i.state.data?.pages || [],
        p = i.state.data?.pageParams || [];
      let h = { pages: [], pageParams: [] },
        v = 0;
      const x = async () => {
        let S = !1;
        const E = (F) => {
            Object.defineProperty(F, "signal", {
              enumerable: !0,
              get: () => (
                i.signal.aborted
                  ? (S = !0)
                  : i.signal.addEventListener("abort", () => {
                      S = !0;
                    }),
                i.signal
              ),
            });
          },
          A = hh(i.options, i.fetchOptions),
          B = async (F, R, L) => {
            if (S) return Promise.reject();
            if (R == null && F.pages.length) return Promise.resolve(F);
            const $ = (() => {
                const W = {
                  client: i.client,
                  queryKey: i.queryKey,
                  pageParam: R,
                  direction: L ? "backward" : "forward",
                  meta: i.options.meta,
                };
                return E(W), W;
              })(),
              Y = await A($),
              { maxPages: K } = i.options,
              D = L ? Sv : wv;
            return {
              pages: D(F.pages, Y, K),
              pageParams: D(F.pageParams, R, K),
            };
          };
        if (c && f.length) {
          const F = c === "backward",
            R = F ? Dv : ap,
            L = { pages: f, pageParams: p },
            X = R(l, L);
          h = await B(L, X, F);
        } else {
          const F = n ?? f.length;
          do {
            const R = v === 0 ? p[0] ?? l.initialPageParam : ap(l, h);
            if (v > 0 && R == null) break;
            (h = await B(h, R)), v++;
          } while (v < F);
        }
        return h;
      };
      i.options.persister
        ? (i.fetchFn = () =>
            i.options.persister?.(
              x,
              {
                client: i.client,
                queryKey: i.queryKey,
                meta: i.options.meta,
                signal: i.signal,
              },
              s
            ))
        : (i.fetchFn = x);
    },
  };
}
function ap(n, { pages: i, pageParams: s }) {
  const l = i.length - 1;
  return i.length > 0 ? n.getNextPageParam(i[l], i, s[l], s) : void 0;
}
function Dv(n, { pages: i, pageParams: s }) {
  return i.length > 0 ? n.getPreviousPageParam?.(i[0], i, s[0], s) : void 0;
}
var jv = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #o;
    #l;
    #s;
    constructor(n = {}) {
      (this.#e = n.queryCache || new Fv()),
        (this.#t = n.mutationCache || new Lv()),
        (this.#n = n.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#o = 0);
    }
    mount() {
      this.#o++,
        this.#o === 1 &&
          ((this.#l = mh.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = Ho.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#e.onOnline());
          })));
    }
    unmount() {
      this.#o--,
        this.#o === 0 &&
          (this.#l?.(), (this.#l = void 0), this.#s?.(), (this.#s = void 0));
    }
    isFetching(n) {
      return this.#e.findAll({ ...n, fetchStatus: "fetching" }).length;
    }
    isMutating(n) {
      return this.#t.findAll({ ...n, status: "pending" }).length;
    }
    getQueryData(n) {
      const i = this.defaultQueryOptions({ queryKey: n });
      return this.#e.get(i.queryHash)?.state.data;
    }
    ensureQueryData(n) {
      const i = this.defaultQueryOptions(n),
        s = this.#e.build(this, i),
        l = s.state.data;
      return l === void 0
        ? this.fetchQuery(n)
        : (n.revalidateIfStale &&
            s.isStaleByTime(Ca(i.staleTime, s)) &&
            this.prefetchQuery(i),
          Promise.resolve(l));
    }
    getQueriesData(n) {
      return this.#e.findAll(n).map(({ queryKey: i, state: s }) => {
        const l = s.data;
        return [i, l];
      });
    }
    setQueryData(n, i, s) {
      const l = this.defaultQueryOptions({ queryKey: n }),
        f = this.#e.get(l.queryHash)?.state.data,
        p = dv(i, f);
      if (p !== void 0)
        return this.#e.build(this, l).setData(p, { ...s, manual: !0 });
    }
    setQueriesData(n, i, s) {
      return pt.batch(() =>
        this.#e
          .findAll(n)
          .map(({ queryKey: l }) => [l, this.setQueryData(l, i, s)])
      );
    }
    getQueryState(n) {
      const i = this.defaultQueryOptions({ queryKey: n });
      return this.#e.get(i.queryHash)?.state;
    }
    removeQueries(n) {
      const i = this.#e;
      pt.batch(() => {
        i.findAll(n).forEach((s) => {
          i.remove(s);
        });
      });
    }
    resetQueries(n, i) {
      const s = this.#e;
      return pt.batch(
        () => (
          s.findAll(n).forEach((l) => {
            l.reset();
          }),
          this.refetchQueries({ type: "active", ...n }, i)
        )
      );
    }
    cancelQueries(n, i = {}) {
      const s = { revert: !0, ...i },
        l = pt.batch(() => this.#e.findAll(n).map((c) => c.cancel(s)));
      return Promise.all(l).then(Wt).catch(Wt);
    }
    invalidateQueries(n, i = {}) {
      return pt.batch(
        () => (
          this.#e.findAll(n).forEach((s) => {
            s.invalidate();
          }),
          n?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...n, type: n?.refetchType ?? n?.type ?? "active" },
                i
              )
        )
      );
    }
    refetchQueries(n, i = {}) {
      const s = { ...i, cancelRefetch: i.cancelRefetch ?? !0 },
        l = pt.batch(() =>
          this.#e
            .findAll(n)
            .filter((c) => !c.isDisabled() && !c.isStatic())
            .map((c) => {
              let f = c.fetch(void 0, s);
              return (
                s.throwOnError || (f = f.catch(Wt)),
                c.state.fetchStatus === "paused" ? Promise.resolve() : f
              );
            })
        );
      return Promise.all(l).then(Wt);
    }
    fetchQuery(n) {
      const i = this.defaultQueryOptions(n);
      i.retry === void 0 && (i.retry = !1);
      const s = this.#e.build(this, i);
      return s.isStaleByTime(Ca(i.staleTime, s))
        ? s.fetch(i)
        : Promise.resolve(s.state.data);
    }
    prefetchQuery(n) {
      return this.fetchQuery(n).then(Wt).catch(Wt);
    }
    fetchInfiniteQuery(n) {
      return (n.behavior = up(n.pages)), this.fetchQuery(n);
    }
    prefetchInfiniteQuery(n) {
      return this.fetchInfiniteQuery(n).then(Wt).catch(Wt);
    }
    ensureInfiniteQueryData(n) {
      return (n.behavior = up(n.pages)), this.ensureQueryData(n);
    }
    resumePausedMutations() {
      return Ho.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(n) {
      this.#n = n;
    }
    setQueryDefaults(n, i) {
      this.#r.set(yr(n), { queryKey: n, defaultOptions: i });
    }
    getQueryDefaults(n) {
      const i = [...this.#r.values()],
        s = {};
      return (
        i.forEach((l) => {
          os(n, l.queryKey) && Object.assign(s, l.defaultOptions);
        }),
        s
      );
    }
    setMutationDefaults(n, i) {
      this.#i.set(yr(n), { mutationKey: n, defaultOptions: i });
    }
    getMutationDefaults(n) {
      const i = [...this.#i.values()],
        s = {};
      return (
        i.forEach((l) => {
          os(n, l.mutationKey) && Object.assign(s, l.defaultOptions);
        }),
        s
      );
    }
    defaultQueryOptions(n) {
      if (n._defaulted) return n;
      const i = {
        ...this.#n.queries,
        ...this.getQueryDefaults(n.queryKey),
        ...n,
        _defaulted: !0,
      };
      return (
        i.queryHash || (i.queryHash = ba(i.queryKey, i)),
        i.refetchOnReconnect === void 0 &&
          (i.refetchOnReconnect = i.networkMode !== "always"),
        i.throwOnError === void 0 && (i.throwOnError = !!i.suspense),
        !i.networkMode && i.persister && (i.networkMode = "offlineFirst"),
        i.queryFn === Ba && (i.enabled = !1),
        i
      );
    }
    defaultMutationOptions(n) {
      return n?._defaulted
        ? n
        : {
            ...this.#n.mutations,
            ...(n?.mutationKey && this.getMutationDefaults(n.mutationKey)),
            ...n,
            _defaulted: !0,
          };
    }
    clear() {
      this.#e.clear(), this.#t.clear();
    }
  },
  zv = class extends us {
    #e;
    #t = void 0;
    #n;
    #r;
    constructor(i, s) {
      super(), (this.#e = i), this.setOptions(s), this.bindMethods(), this.#i();
    }
    bindMethods() {
      (this.mutate = this.mutate.bind(this)),
        (this.reset = this.reset.bind(this));
    }
    setOptions(i) {
      const s = this.options;
      (this.options = this.#e.defaultMutationOptions(i)),
        yv(this.options, s) ||
          this.#e
            .getMutationCache()
            .notify({
              type: "observerOptionsUpdated",
              mutation: this.#n,
              observer: this,
            }),
        s?.mutationKey &&
        this.options.mutationKey &&
        yr(s.mutationKey) !== yr(this.options.mutationKey)
          ? this.reset()
          : this.#n?.state.status === "pending" &&
            this.#n.setOptions(this.options);
    }
    onUnsubscribe() {
      this.hasListeners() || this.#n?.removeObserver(this);
    }
    onMutationUpdate(i) {
      this.#i(), this.#o(i);
    }
    getCurrentResult() {
      return this.#t;
    }
    reset() {
      this.#n?.removeObserver(this), (this.#n = void 0), this.#i(), this.#o();
    }
    mutate(i, s) {
      return (
        (this.#r = s),
        this.#n?.removeObserver(this),
        (this.#n = this.#e.getMutationCache().build(this.#e, this.options)),
        this.#n.addObserver(this),
        this.#n.execute(i)
      );
    }
    #i() {
      const i = this.#n?.state ?? Sh();
      this.#t = {
        ...i,
        isPending: i.status === "pending",
        isSuccess: i.status === "success",
        isError: i.status === "error",
        isIdle: i.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      };
    }
    #o(i) {
      pt.batch(() => {
        if (this.#r && this.hasListeners()) {
          const s = this.#t.variables,
            l = this.#t.context;
          i?.type === "success"
            ? (this.#r.onSuccess?.(i.data, s, l),
              this.#r.onSettled?.(i.data, null, s, l))
            : i?.type === "error" &&
              (this.#r.onError?.(i.error, s, l),
              this.#r.onSettled?.(void 0, i.error, s, l));
        }
        this.listeners.forEach((s) => {
          s(this.#t);
        });
      });
    }
  },
  kh = Me.createContext(void 0),
  Iv = (n) => {
    const i = Me.useContext(kh);
    if (!i)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return i;
  },
  Mv = ({ client: n, children: i }) => (
    Me.useEffect(
      () => (
        n.mount(),
        () => {
          n.unmount();
        }
      ),
      [n]
    ),
    z.jsx(kh.Provider, { value: n, children: i })
  );
function xh(n, i) {
  const s = Iv(),
    [l] = Me.useState(() => new zv(s, n));
  Me.useEffect(() => {
    l.setOptions(n);
  }, [l, n]);
  const c = Me.useSyncExternalStore(
      Me.useCallback((p) => l.subscribe(pt.batchCalls(p)), [l]),
      () => l.getCurrentResult(),
      () => l.getCurrentResult()
    ),
    f = Me.useCallback(
      (p, h) => {
        l.mutate(p, h).catch(Wt);
      },
      [l]
    );
  if (c.error && kv(l.options.throwOnError, [c.error])) throw c.error;
  return { ...c, mutate: f, mutateAsync: c.mutate };
}
var as = (n) => n.type === "checkbox",
  ar = (n) => n instanceof Date,
  xt = (n) => n == null;
const Eh = (n) => typeof n == "object";
var Ye = (n) => !xt(n) && !Array.isArray(n) && Eh(n) && !ar(n),
  $v = (n) =>
    Ye(n) && n.target ? (as(n.target) ? n.target.checked : n.target.value) : n,
  Uv = (n) => n.substring(0, n.search(/\.\d+(\.|$)/)) || n,
  bv = (n, i) => n.has(Uv(i)),
  Bv = (n) => {
    const i = n.constructor && n.constructor.prototype;
    return Ye(i) && i.hasOwnProperty("isPrototypeOf");
  },
  Va =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function ut(n) {
  let i;
  const s = Array.isArray(n),
    l = typeof FileList < "u" ? n instanceof FileList : !1;
  if (n instanceof Date) i = new Date(n);
  else if (!(Va && (n instanceof Blob || l)) && (s || Ye(n)))
    if (((i = s ? [] : Object.create(Object.getPrototypeOf(n))), !s && !Bv(n)))
      i = n;
    else for (const c in n) n.hasOwnProperty(c) && (i[c] = ut(n[c]));
  else return n;
  return i;
}
var rl = (n) => /^\w*$/.test(n),
  tt = (n) => n === void 0,
  Ha = (n) => (Array.isArray(n) ? n.filter(Boolean) : []),
  Wa = (n) => Ha(n.replace(/["|']|\]/g, "").split(/\.|\[/)),
  ie = (n, i, s) => {
    if (!i || !Ye(n)) return s;
    const l = (rl(i) ? [i] : Wa(i)).reduce((c, f) => (xt(c) ? c : c[f]), n);
    return tt(l) || l === n ? (tt(n[i]) ? s : n[i]) : l;
  },
  pn = (n) => typeof n == "boolean",
  We = (n, i, s) => {
    let l = -1;
    const c = rl(i) ? [i] : Wa(i),
      f = c.length,
      p = f - 1;
    for (; ++l < f; ) {
      const h = c[l];
      let v = s;
      if (l !== p) {
        const x = n[h];
        v = Ye(x) || Array.isArray(x) ? x : isNaN(+c[l + 1]) ? {} : [];
      }
      if (h === "__proto__" || h === "constructor" || h === "prototype") return;
      (n[h] = v), (n = n[h]);
    }
  };
const cp = { BLUR: "blur", FOCUS_OUT: "focusout" },
  tn = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Cn = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  Vv = ae.createContext(null);
Vv.displayName = "HookFormContext";
var Hv = (n, i, s, l = !0) => {
  const c = { defaultValues: i._defaultValues };
  for (const f in n)
    Object.defineProperty(c, f, {
      get: () => {
        const p = f;
        return (
          i._proxyFormState[p] !== tn.all &&
            (i._proxyFormState[p] = !l || tn.all),
          n[p]
        );
      },
    });
  return c;
};
const Wv = typeof window < "u" ? ae.useLayoutEffect : ae.useEffect;
var mn = (n) => typeof n == "string",
  Qv = (n, i, s, l, c) =>
    mn(n)
      ? (l && i.watch.add(n), ie(s, n, c))
      : Array.isArray(n)
      ? n.map((f) => (l && i.watch.add(f), ie(s, f)))
      : (l && (i.watchAll = !0), s),
  Oa = (n) => xt(n) || !Eh(n);
function qn(n, i, s = new WeakSet()) {
  if (Oa(n) || Oa(i)) return n === i;
  if (ar(n) && ar(i)) return n.getTime() === i.getTime();
  const l = Object.keys(n),
    c = Object.keys(i);
  if (l.length !== c.length) return !1;
  if (s.has(n) || s.has(i)) return !0;
  s.add(n), s.add(i);
  for (const f of l) {
    const p = n[f];
    if (!c.includes(f)) return !1;
    if (f !== "ref") {
      const h = i[f];
      if (
        (ar(p) && ar(h)) ||
        (Ye(p) && Ye(h)) ||
        (Array.isArray(p) && Array.isArray(h))
          ? !qn(p, h, s)
          : p !== h
      )
        return !1;
    }
  }
  return !0;
}
var qv = (n, i, s, l, c) =>
    i
      ? {
          ...s[n],
          types: { ...(s[n] && s[n].types ? s[n].types : {}), [l]: c || !0 },
        }
      : {},
  ts = (n) => (Array.isArray(n) ? n : [n]),
  fp = () => {
    let n = [];
    return {
      get observers() {
        return n;
      },
      next: (c) => {
        for (const f of n) f.next && f.next(c);
      },
      subscribe: (c) => (
        n.push(c),
        {
          unsubscribe: () => {
            n = n.filter((f) => f !== c);
          },
        }
      ),
      unsubscribe: () => {
        n = [];
      },
    };
  },
  Ft = (n) => Ye(n) && !Object.keys(n).length,
  Qa = (n) => n.type === "file",
  nn = (n) => typeof n == "function",
  Wo = (n) => {
    if (!Va) return !1;
    const i = n ? n.ownerDocument : 0;
    return (
      n instanceof
      (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement)
    );
  },
  Ch = (n) => n.type === "select-multiple",
  qa = (n) => n.type === "radio",
  Kv = (n) => qa(n) || as(n),
  ua = (n) => Wo(n) && n.isConnected;
function Gv(n, i) {
  const s = i.slice(0, -1).length;
  let l = 0;
  for (; l < s; ) n = tt(n) ? l++ : n[i[l++]];
  return n;
}
function Xv(n) {
  for (const i in n) if (n.hasOwnProperty(i) && !tt(n[i])) return !1;
  return !0;
}
function et(n, i) {
  const s = Array.isArray(i) ? i : rl(i) ? [i] : Wa(i),
    l = s.length === 1 ? n : Gv(n, s),
    c = s.length - 1,
    f = s[c];
  return (
    l && delete l[f],
    c !== 0 &&
      ((Ye(l) && Ft(l)) || (Array.isArray(l) && Xv(l))) &&
      et(n, s.slice(0, -1)),
    n
  );
}
var _h = (n) => {
  for (const i in n) if (nn(n[i])) return !0;
  return !1;
};
function Qo(n, i = {}) {
  const s = Array.isArray(n);
  if (Ye(n) || s)
    for (const l in n)
      Array.isArray(n[l]) || (Ye(n[l]) && !_h(n[l]))
        ? ((i[l] = Array.isArray(n[l]) ? [] : {}), Qo(n[l], i[l]))
        : xt(n[l]) || (i[l] = !0);
  return i;
}
function Oh(n, i, s) {
  const l = Array.isArray(n);
  if (Ye(n) || l)
    for (const c in n)
      Array.isArray(n[c]) || (Ye(n[c]) && !_h(n[c]))
        ? tt(i) || Oa(s[c])
          ? (s[c] = Array.isArray(n[c]) ? Qo(n[c], []) : { ...Qo(n[c]) })
          : Oh(n[c], xt(i) ? {} : i[c], s[c])
        : (s[c] = !qn(n[c], i[c]));
  return s;
}
var Xi = (n, i) => Oh(n, i, Qo(i));
const dp = { value: !1, isValid: !1 },
  pp = { value: !0, isValid: !0 };
var Rh = (n) => {
    if (Array.isArray(n)) {
      if (n.length > 1) {
        const i = n
          .filter((s) => s && s.checked && !s.disabled)
          .map((s) => s.value);
        return { value: i, isValid: !!i.length };
      }
      return n[0].checked && !n[0].disabled
        ? n[0].attributes && !tt(n[0].attributes.value)
          ? tt(n[0].value) || n[0].value === ""
            ? pp
            : { value: n[0].value, isValid: !0 }
          : pp
        : dp;
    }
    return dp;
  },
  Ph = (n, { valueAsNumber: i, valueAsDate: s, setValueAs: l }) =>
    tt(n)
      ? n
      : i
      ? n === ""
        ? NaN
        : n && +n
      : s && mn(n)
      ? new Date(n)
      : l
      ? l(n)
      : n;
const hp = { isValid: !1, value: null };
var Th = (n) =>
  Array.isArray(n)
    ? n.reduce(
        (i, s) =>
          s && s.checked && !s.disabled ? { isValid: !0, value: s.value } : i,
        hp
      )
    : hp;
function mp(n) {
  const i = n.ref;
  return Qa(i)
    ? i.files
    : qa(i)
    ? Th(n.refs).value
    : Ch(i)
    ? [...i.selectedOptions].map(({ value: s }) => s)
    : as(i)
    ? Rh(n.refs).value
    : Ph(tt(i.value) ? n.ref.value : i.value, n);
}
var Yv = (n, i, s, l) => {
    const c = {};
    for (const f of n) {
      const p = ie(i, f);
      p && We(c, f, p._f);
    }
    return {
      criteriaMode: s,
      names: [...n],
      fields: c,
      shouldUseNativeValidation: l,
    };
  },
  qo = (n) => n instanceof RegExp,
  Yi = (n) =>
    tt(n)
      ? n
      : qo(n)
      ? n.source
      : Ye(n)
      ? qo(n.value)
        ? n.value.source
        : n.value
      : n,
  yp = (n) => ({
    isOnSubmit: !n || n === tn.onSubmit,
    isOnBlur: n === tn.onBlur,
    isOnChange: n === tn.onChange,
    isOnAll: n === tn.all,
    isOnTouch: n === tn.onTouched,
  });
const gp = "AsyncFunction";
var Jv = (n) =>
    !!n &&
    !!n.validate &&
    !!(
      (nn(n.validate) && n.validate.constructor.name === gp) ||
      (Ye(n.validate) &&
        Object.values(n.validate).find((i) => i.constructor.name === gp))
    ),
  Zv = (n) =>
    n.mount &&
    (n.required ||
      n.min ||
      n.max ||
      n.maxLength ||
      n.minLength ||
      n.pattern ||
      n.validate),
  vp = (n, i, s) =>
    !s &&
    (i.watchAll ||
      i.watch.has(n) ||
      [...i.watch].some(
        (l) => n.startsWith(l) && /^\.\w+/.test(n.slice(l.length))
      ));
const ns = (n, i, s, l) => {
  for (const c of s || Object.keys(n)) {
    const f = ie(n, c);
    if (f) {
      const { _f: p, ...h } = f;
      if (p) {
        if (p.refs && p.refs[0] && i(p.refs[0], c) && !l) return !0;
        if (p.ref && i(p.ref, p.name) && !l) return !0;
        if (ns(h, i)) break;
      } else if (Ye(h) && ns(h, i)) break;
    }
  }
};
function wp(n, i, s) {
  const l = ie(n, s);
  if (l || rl(s)) return { error: l, name: s };
  const c = s.split(".");
  for (; c.length; ) {
    const f = c.join("."),
      p = ie(i, f),
      h = ie(n, f);
    if (p && !Array.isArray(p) && s !== f) return { name: s };
    if (h && h.type) return { name: f, error: h };
    if (h && h.root && h.root.type) return { name: `${f}.root`, error: h.root };
    c.pop();
  }
  return { name: s };
}
var e0 = (n, i, s, l) => {
    s(n);
    const { name: c, ...f } = n;
    return (
      Ft(f) ||
      Object.keys(f).length >= Object.keys(i).length ||
      Object.keys(f).find((p) => i[p] === (!l || tn.all))
    );
  },
  t0 = (n, i, s) =>
    !n ||
    !i ||
    n === i ||
    ts(n).some((l) => l && (s ? l === i : l.startsWith(i) || i.startsWith(l))),
  n0 = (n, i, s, l, c) =>
    c.isOnAll
      ? !1
      : !s && c.isOnTouch
      ? !(i || n)
      : (s ? l.isOnBlur : c.isOnBlur)
      ? !n
      : (s ? l.isOnChange : c.isOnChange)
      ? n
      : !0,
  r0 = (n, i) => !Ha(ie(n, i)).length && et(n, i),
  i0 = (n, i, s) => {
    const l = ts(ie(n, s));
    return We(l, "root", i[s]), We(n, s, l), n;
  },
  jo = (n) => mn(n);
function Sp(n, i, s = "validate") {
  if (jo(n) || (Array.isArray(n) && n.every(jo)) || (pn(n) && !n))
    return { type: s, message: jo(n) ? n : "", ref: i };
}
var Yr = (n) => (Ye(n) && !qo(n) ? n : { value: n, message: "" }),
  kp = async (n, i, s, l, c, f) => {
    const {
        ref: p,
        refs: h,
        required: v,
        maxLength: x,
        minLength: S,
        min: E,
        max: A,
        pattern: B,
        validate: F,
        name: R,
        valueAsNumber: L,
        mount: X,
      } = n._f,
      $ = ie(s, R);
    if (!X || i.has(R)) return {};
    const Y = h ? h[0] : p,
      K = (oe) => {
        c &&
          Y.reportValidity &&
          (Y.setCustomValidity(pn(oe) ? "" : oe || ""), Y.reportValidity());
      },
      D = {},
      W = qa(p),
      Q = as(p),
      Ce = W || Q,
      _e =
        ((L || Qa(p)) && tt(p.value) && tt($)) ||
        (Wo(p) && p.value === "") ||
        $ === "" ||
        (Array.isArray($) && !$.length),
      Ie = qv.bind(null, R, l, D),
      je = (oe, ce, ke, Fe = Cn.maxLength, Re = Cn.minLength) => {
        const xe = oe ? ce : ke;
        D[R] = {
          type: oe ? Fe : Re,
          message: xe,
          ref: p,
          ...Ie(oe ? Fe : Re, xe),
        };
      };
    if (
      f
        ? !Array.isArray($) || !$.length
        : v &&
          ((!Ce && (_e || xt($))) ||
            (pn($) && !$) ||
            (Q && !Rh(h).isValid) ||
            (W && !Th(h).isValid))
    ) {
      const { value: oe, message: ce } = jo(v)
        ? { value: !!v, message: v }
        : Yr(v);
      if (
        oe &&
        ((D[R] = {
          type: Cn.required,
          message: ce,
          ref: Y,
          ...Ie(Cn.required, ce),
        }),
        !l)
      )
        return K(ce), D;
    }
    if (!_e && (!xt(E) || !xt(A))) {
      let oe, ce;
      const ke = Yr(A),
        Fe = Yr(E);
      if (!xt($) && !isNaN($)) {
        const Re = p.valueAsNumber || ($ && +$);
        xt(ke.value) || (oe = Re > ke.value),
          xt(Fe.value) || (ce = Re < Fe.value);
      } else {
        const Re = p.valueAsDate || new Date($),
          xe = (G) => new Date(new Date().toDateString() + " " + G),
          H = p.type == "time",
          ee = p.type == "week";
        mn(ke.value) &&
          $ &&
          (oe = H
            ? xe($) > xe(ke.value)
            : ee
            ? $ > ke.value
            : Re > new Date(ke.value)),
          mn(Fe.value) &&
            $ &&
            (ce = H
              ? xe($) < xe(Fe.value)
              : ee
              ? $ < Fe.value
              : Re < new Date(Fe.value));
      }
      if ((oe || ce) && (je(!!oe, ke.message, Fe.message, Cn.max, Cn.min), !l))
        return K(D[R].message), D;
    }
    if ((x || S) && !_e && (mn($) || (f && Array.isArray($)))) {
      const oe = Yr(x),
        ce = Yr(S),
        ke = !xt(oe.value) && $.length > +oe.value,
        Fe = !xt(ce.value) && $.length < +ce.value;
      if ((ke || Fe) && (je(ke, oe.message, ce.message), !l))
        return K(D[R].message), D;
    }
    if (B && !_e && mn($)) {
      const { value: oe, message: ce } = Yr(B);
      if (
        qo(oe) &&
        !$.match(oe) &&
        ((D[R] = {
          type: Cn.pattern,
          message: ce,
          ref: p,
          ...Ie(Cn.pattern, ce),
        }),
        !l)
      )
        return K(ce), D;
    }
    if (F) {
      if (nn(F)) {
        const oe = await F($, s),
          ce = Sp(oe, Y);
        if (ce && ((D[R] = { ...ce, ...Ie(Cn.validate, ce.message) }), !l))
          return K(ce.message), D;
      } else if (Ye(F)) {
        let oe = {};
        for (const ce in F) {
          if (!Ft(oe) && !l) break;
          const ke = Sp(await F[ce]($, s), Y, ce);
          ke &&
            ((oe = { ...ke, ...Ie(ce, ke.message) }),
            K(ke.message),
            l && (D[R] = oe));
        }
        if (!Ft(oe) && ((D[R] = { ref: Y, ...oe }), !l)) return D;
      }
    }
    return K(!0), D;
  };
const s0 = {
  mode: tn.onSubmit,
  reValidateMode: tn.onChange,
  shouldFocusError: !0,
};
function o0(n = {}) {
  let i = { ...s0, ...n },
    s = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: nn(i.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: i.errors || {},
      disabled: i.disabled || !1,
    },
    l = {},
    c =
      Ye(i.defaultValues) || Ye(i.values)
        ? ut(i.defaultValues || i.values) || {}
        : {},
    f = i.shouldUnregister ? {} : ut(c),
    p = { action: !1, mount: !1, watch: !1 },
    h = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    v,
    x = 0;
  const S = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1,
  };
  let E = { ...S };
  const A = { array: fp(), state: fp() },
    B = i.criteriaMode === tn.all,
    F = (y) => (_) => {
      clearTimeout(x), (x = setTimeout(y, _));
    },
    R = async (y) => {
      if (!i.disabled && (S.isValid || E.isValid || y)) {
        const _ = i.resolver ? Ft((await Q()).errors) : await _e(l, !0);
        _ !== s.isValid && A.state.next({ isValid: _ });
      }
    },
    L = (y, _) => {
      !i.disabled &&
        (S.isValidating ||
          S.validatingFields ||
          E.isValidating ||
          E.validatingFields) &&
        ((y || Array.from(h.mount)).forEach((N) => {
          N && (_ ? We(s.validatingFields, N, _) : et(s.validatingFields, N));
        }),
        A.state.next({
          validatingFields: s.validatingFields,
          isValidating: !Ft(s.validatingFields),
        }));
    },
    X = (y, _ = [], N, J, q = !0, V = !0) => {
      if (J && N && !i.disabled) {
        if (((p.action = !0), V && Array.isArray(ie(l, y)))) {
          const le = N(ie(l, y), J.argA, J.argB);
          q && We(l, y, le);
        }
        if (V && Array.isArray(ie(s.errors, y))) {
          const le = N(ie(s.errors, y), J.argA, J.argB);
          q && We(s.errors, y, le), r0(s.errors, y);
        }
        if (
          (S.touchedFields || E.touchedFields) &&
          V &&
          Array.isArray(ie(s.touchedFields, y))
        ) {
          const le = N(ie(s.touchedFields, y), J.argA, J.argB);
          q && We(s.touchedFields, y, le);
        }
        (S.dirtyFields || E.dirtyFields) && (s.dirtyFields = Xi(c, f)),
          A.state.next({
            name: y,
            isDirty: je(y, _),
            dirtyFields: s.dirtyFields,
            errors: s.errors,
            isValid: s.isValid,
          });
      } else We(f, y, _);
    },
    $ = (y, _) => {
      We(s.errors, y, _), A.state.next({ errors: s.errors });
    },
    Y = (y) => {
      (s.errors = y), A.state.next({ errors: s.errors, isValid: !1 });
    },
    K = (y, _, N, J) => {
      const q = ie(l, y);
      if (q) {
        const V = ie(f, y, tt(N) ? ie(c, y) : N);
        tt(V) || (J && J.defaultChecked) || _
          ? We(f, y, _ ? V : mp(q._f))
          : ke(y, V),
          p.mount && R();
      }
    },
    D = (y, _, N, J, q) => {
      let V = !1,
        le = !1;
      const Pe = { name: y };
      if (!i.disabled) {
        if (!N || J) {
          (S.isDirty || E.isDirty) &&
            ((le = s.isDirty),
            (s.isDirty = Pe.isDirty = je()),
            (V = le !== Pe.isDirty));
          const Ne = qn(ie(c, y), _);
          (le = !!ie(s.dirtyFields, y)),
            Ne ? et(s.dirtyFields, y) : We(s.dirtyFields, y, !0),
            (Pe.dirtyFields = s.dirtyFields),
            (V = V || ((S.dirtyFields || E.dirtyFields) && le !== !Ne));
        }
        if (N) {
          const Ne = ie(s.touchedFields, y);
          Ne ||
            (We(s.touchedFields, y, N),
            (Pe.touchedFields = s.touchedFields),
            (V = V || ((S.touchedFields || E.touchedFields) && Ne !== N)));
        }
        V && q && A.state.next(Pe);
      }
      return V ? Pe : {};
    },
    W = (y, _, N, J) => {
      const q = ie(s.errors, y),
        V = (S.isValid || E.isValid) && pn(_) && s.isValid !== _;
      if (
        (i.delayError && N
          ? ((v = F(() => $(y, N))), v(i.delayError))
          : (clearTimeout(x),
            (v = null),
            N ? We(s.errors, y, N) : et(s.errors, y)),
        (N ? !qn(q, N) : q) || !Ft(J) || V)
      ) {
        const le = {
          ...J,
          ...(V && pn(_) ? { isValid: _ } : {}),
          errors: s.errors,
          name: y,
        };
        (s = { ...s, ...le }), A.state.next(le);
      }
    },
    Q = async (y) => {
      L(y, !0);
      const _ = await i.resolver(
        f,
        i.context,
        Yv(y || h.mount, l, i.criteriaMode, i.shouldUseNativeValidation)
      );
      return L(y), _;
    },
    Ce = async (y) => {
      const { errors: _ } = await Q(y);
      if (y)
        for (const N of y) {
          const J = ie(_, N);
          J ? We(s.errors, N, J) : et(s.errors, N);
        }
      else s.errors = _;
      return _;
    },
    _e = async (y, _, N = { valid: !0 }) => {
      for (const J in y) {
        const q = y[J];
        if (q) {
          const { _f: V, ...le } = q;
          if (V) {
            const Pe = h.array.has(V.name),
              Ne = q._f && Jv(q._f);
            Ne && S.validatingFields && L([J], !0);
            const wt = await kp(
              q,
              h.disabled,
              f,
              B,
              i.shouldUseNativeValidation && !_,
              Pe
            );
            if (
              (Ne && S.validatingFields && L([J]),
              wt[V.name] && ((N.valid = !1), _))
            )
              break;
            !_ &&
              (ie(wt, V.name)
                ? Pe
                  ? i0(s.errors, wt, V.name)
                  : We(s.errors, V.name, wt[V.name])
                : et(s.errors, V.name));
          }
          !Ft(le) && (await _e(le, _, N));
        }
      }
      return N.valid;
    },
    Ie = () => {
      for (const y of h.unMount) {
        const _ = ie(l, y);
        _ &&
          (_._f.refs ? _._f.refs.every((N) => !ua(N)) : !ua(_._f.ref)) &&
          ue(y);
      }
      h.unMount = new Set();
    },
    je = (y, _) => !i.disabled && (y && _ && We(f, y, _), !qn(G(), c)),
    oe = (y, _, N) =>
      Qv(y, h, { ...(p.mount ? f : tt(_) ? c : mn(y) ? { [y]: _ } : _) }, N, _),
    ce = (y) =>
      Ha(ie(p.mount ? f : c, y, i.shouldUnregister ? ie(c, y, []) : [])),
    ke = (y, _, N = {}) => {
      const J = ie(l, y);
      let q = _;
      if (J) {
        const V = J._f;
        V &&
          (!V.disabled && We(f, y, Ph(_, V)),
          (q = Wo(V.ref) && xt(_) ? "" : _),
          Ch(V.ref)
            ? [...V.ref.options].forEach(
                (le) => (le.selected = q.includes(le.value))
              )
            : V.refs
            ? as(V.ref)
              ? V.refs.forEach((le) => {
                  (!le.defaultChecked || !le.disabled) &&
                    (Array.isArray(q)
                      ? (le.checked = !!q.find((Pe) => Pe === le.value))
                      : (le.checked = q === le.value || !!q));
                })
              : V.refs.forEach((le) => (le.checked = le.value === q))
            : Qa(V.ref)
            ? (V.ref.value = "")
            : ((V.ref.value = q),
              V.ref.type || A.state.next({ name: y, values: ut(f) })));
      }
      (N.shouldDirty || N.shouldTouch) &&
        D(y, q, N.shouldTouch, N.shouldDirty, !0),
        N.shouldValidate && ee(y);
    },
    Fe = (y, _, N) => {
      for (const J in _) {
        if (!_.hasOwnProperty(J)) return;
        const q = _[J],
          V = y + "." + J,
          le = ie(l, V);
        (h.array.has(y) || Ye(q) || (le && !le._f)) && !ar(q)
          ? Fe(V, q, N)
          : ke(V, q, N);
      }
    },
    Re = (y, _, N = {}) => {
      const J = ie(l, y),
        q = h.array.has(y),
        V = ut(_);
      We(f, y, V),
        q
          ? (A.array.next({ name: y, values: ut(f) }),
            (S.isDirty || S.dirtyFields || E.isDirty || E.dirtyFields) &&
              N.shouldDirty &&
              A.state.next({
                name: y,
                dirtyFields: Xi(c, f),
                isDirty: je(y, V),
              }))
          : J && !J._f && !xt(V)
          ? Fe(y, V, N)
          : ke(y, V, N),
        vp(y, h) && A.state.next({ ...s, name: y }),
        A.state.next({ name: p.mount ? y : void 0, values: ut(f) });
    },
    xe = async (y) => {
      p.mount = !0;
      const _ = y.target;
      let N = _.name,
        J = !0;
      const q = ie(l, N),
        V = (Ne) => {
          J =
            Number.isNaN(Ne) ||
            (ar(Ne) && isNaN(Ne.getTime())) ||
            qn(Ne, ie(f, N, Ne));
        },
        le = yp(i.mode),
        Pe = yp(i.reValidateMode);
      if (q) {
        let Ne, wt;
        const on = _.type ? mp(q._f) : $v(y),
          Ct = y.type === cp.BLUR || y.type === cp.FOCUS_OUT,
          fl =
            (!Zv(q._f) && !i.resolver && !ie(s.errors, N) && !q._f.deps) ||
            n0(Ct, ie(s.touchedFields, N), s.isSubmitted, Pe, le),
          xr = vp(N, h, Ct);
        We(f, N, on),
          Ct
            ? (!_ || !_.readOnly) && (q._f.onBlur && q._f.onBlur(y), v && v(0))
            : q._f.onChange && q._f.onChange(y);
        const Er = D(N, on, Ct),
          dl = !Ft(Er) || xr;
        if ((!Ct && A.state.next({ name: N, type: y.type, values: ut(f) }), fl))
          return (
            (S.isValid || E.isValid) &&
              (i.mode === "onBlur" ? Ct && R() : Ct || R()),
            dl && A.state.next({ name: N, ...(xr ? {} : Er) })
          );
        if ((!Ct && xr && A.state.next({ ...s }), i.resolver)) {
          const { errors: Cr } = await Q([N]);
          if ((V(on), J)) {
            const fi = wp(s.errors, l, N),
              _r = wp(Cr, l, fi.name || N);
            (Ne = _r.error), (N = _r.name), (wt = Ft(Cr));
          }
        } else
          L([N], !0),
            (Ne = (await kp(q, h.disabled, f, B, i.shouldUseNativeValidation))[
              N
            ]),
            L([N]),
            V(on),
            J &&
              (Ne
                ? (wt = !1)
                : (S.isValid || E.isValid) && (wt = await _e(l, !0)));
        J && (q._f.deps && ee(q._f.deps), W(N, wt, Ne, Er));
      }
    },
    H = (y, _) => {
      if (ie(s.errors, _) && y.focus) return y.focus(), 1;
    },
    ee = async (y, _ = {}) => {
      let N, J;
      const q = ts(y);
      if (i.resolver) {
        const V = await Ce(tt(y) ? y : q);
        (N = Ft(V)), (J = y ? !q.some((le) => ie(V, le)) : N);
      } else
        y
          ? ((J = (
              await Promise.all(
                q.map(async (V) => {
                  const le = ie(l, V);
                  return await _e(le && le._f ? { [V]: le } : le);
                })
              )
            ).every(Boolean)),
            !(!J && !s.isValid) && R())
          : (J = N = await _e(l));
      return (
        A.state.next({
          ...(!mn(y) || ((S.isValid || E.isValid) && N !== s.isValid)
            ? {}
            : { name: y }),
          ...(i.resolver || !y ? { isValid: N } : {}),
          errors: s.errors,
        }),
        _.shouldFocus && !J && ns(l, H, y ? q : h.mount),
        J
      );
    },
    G = (y) => {
      const _ = { ...(p.mount ? f : c) };
      return tt(y) ? _ : mn(y) ? ie(_, y) : y.map((N) => ie(_, N));
    },
    k = (y, _) => ({
      invalid: !!ie((_ || s).errors, y),
      isDirty: !!ie((_ || s).dirtyFields, y),
      error: ie((_ || s).errors, y),
      isValidating: !!ie(s.validatingFields, y),
      isTouched: !!ie((_ || s).touchedFields, y),
    }),
    j = (y) => {
      y && ts(y).forEach((_) => et(s.errors, _)),
        A.state.next({ errors: y ? s.errors : {} });
    },
    pe = (y, _, N) => {
      const J = (ie(l, y, { _f: {} })._f || {}).ref,
        q = ie(s.errors, y) || {},
        { ref: V, message: le, type: Pe, ...Ne } = q;
      We(s.errors, y, { ...Ne, ..._, ref: J }),
        A.state.next({ name: y, errors: s.errors, isValid: !1 }),
        N && N.shouldFocus && J && J.focus && J.focus();
    },
    ye = (y, _) =>
      nn(y)
        ? A.state.subscribe({
            next: (N) => "values" in N && y(oe(void 0, _), N),
          })
        : oe(y, _, !0),
    ve = (y) =>
      A.state.subscribe({
        next: (_) => {
          t0(y.name, _.name, y.exact) &&
            e0(_, y.formState || S, ci, y.reRenderRoot) &&
            y.callback({ values: { ...f }, ...s, ..._, defaultValues: c });
        },
      }).unsubscribe,
    ge = (y) => (
      (p.mount = !0), (E = { ...E, ...y.formState }), ve({ ...y, formState: E })
    ),
    ue = (y, _ = {}) => {
      for (const N of y ? ts(y) : h.mount)
        h.mount.delete(N),
          h.array.delete(N),
          _.keepValue || (et(l, N), et(f, N)),
          !_.keepError && et(s.errors, N),
          !_.keepDirty && et(s.dirtyFields, N),
          !_.keepTouched && et(s.touchedFields, N),
          !_.keepIsValidating && et(s.validatingFields, N),
          !i.shouldUnregister && !_.keepDefaultValue && et(c, N);
      A.state.next({ values: ut(f) }),
        A.state.next({ ...s, ...(_.keepDirty ? { isDirty: je() } : {}) }),
        !_.keepIsValid && R();
    },
    he = ({ disabled: y, name: _ }) => {
      ((pn(y) && p.mount) || y || h.disabled.has(_)) &&
        (y ? h.disabled.add(_) : h.disabled.delete(_));
    },
    we = (y, _ = {}) => {
      let N = ie(l, y);
      const J = pn(_.disabled) || pn(i.disabled);
      return (
        We(l, y, {
          ...(N || {}),
          _f: {
            ...(N && N._f ? N._f : { ref: { name: y } }),
            name: y,
            mount: !0,
            ..._,
          },
        }),
        h.mount.add(y),
        N
          ? he({ disabled: pn(_.disabled) ? _.disabled : i.disabled, name: y })
          : K(y, !0, _.value),
        {
          ...(J ? { disabled: _.disabled || i.disabled } : {}),
          ...(i.progressive
            ? {
                required: !!_.required,
                min: Yi(_.min),
                max: Yi(_.max),
                minLength: Yi(_.minLength),
                maxLength: Yi(_.maxLength),
                pattern: Yi(_.pattern),
              }
            : {}),
          name: y,
          onChange: xe,
          onBlur: xe,
          ref: (q) => {
            if (q) {
              we(y, _), (N = ie(l, y));
              const V =
                  (tt(q.value) &&
                    q.querySelectorAll &&
                    q.querySelectorAll("input,select,textarea")[0]) ||
                  q,
                le = Kv(V),
                Pe = N._f.refs || [];
              if (le ? Pe.find((Ne) => Ne === V) : V === N._f.ref) return;
              We(l, y, {
                _f: {
                  ...N._f,
                  ...(le
                    ? {
                        refs: [
                          ...Pe.filter(ua),
                          V,
                          ...(Array.isArray(ie(c, y)) ? [{}] : []),
                        ],
                        ref: { type: V.type, name: y },
                      }
                    : { ref: V }),
                },
              }),
                K(y, !1, void 0, V);
            } else
              (N = ie(l, y, {})),
                N._f && (N._f.mount = !1),
                (i.shouldUnregister || _.shouldUnregister) &&
                  !(bv(h.array, y) && p.action) &&
                  h.unMount.add(y);
          },
        }
      );
    },
    Ve = () => i.shouldFocusError && ns(l, H, h.mount),
    qt = (y) => {
      pn(y) &&
        (A.state.next({ disabled: y }),
        ns(
          l,
          (_, N) => {
            const J = ie(l, N);
            J &&
              ((_.disabled = J._f.disabled || y),
              Array.isArray(J._f.refs) &&
                J._f.refs.forEach((q) => {
                  q.disabled = J._f.disabled || y;
                }));
          },
          0,
          !1
        ));
    },
    Et = (y, _) => async (N) => {
      let J;
      N && (N.preventDefault && N.preventDefault(), N.persist && N.persist());
      let q = ut(f);
      if ((A.state.next({ isSubmitting: !0 }), i.resolver)) {
        const { errors: V, values: le } = await Q();
        (s.errors = V), (q = ut(le));
      } else await _e(l);
      if (h.disabled.size) for (const V of h.disabled) et(q, V);
      if ((et(s.errors, "root"), Ft(s.errors))) {
        A.state.next({ errors: {} });
        try {
          await y(q, N);
        } catch (V) {
          J = V;
        }
      } else _ && (await _({ ...s.errors }, N)), Ve(), setTimeout(Ve);
      if (
        (A.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Ft(s.errors) && !J,
          submitCount: s.submitCount + 1,
          errors: s.errors,
        }),
        J)
      )
        throw J;
    },
    wr = (y, _ = {}) => {
      ie(l, y) &&
        (tt(_.defaultValue)
          ? Re(y, ut(ie(c, y)))
          : (Re(y, _.defaultValue), We(c, y, ut(_.defaultValue))),
        _.keepTouched || et(s.touchedFields, y),
        _.keepDirty ||
          (et(s.dirtyFields, y),
          (s.isDirty = _.defaultValue ? je(y, ut(ie(c, y))) : je())),
        _.keepError || (et(s.errors, y), S.isValid && R()),
        A.state.next({ ...s }));
    },
    Sr = (y, _ = {}) => {
      const N = y ? ut(y) : c,
        J = ut(N),
        q = Ft(y),
        V = q ? c : J;
      if ((_.keepDefaultValues || (c = N), !_.keepValues)) {
        if (_.keepDirtyValues) {
          const le = new Set([...h.mount, ...Object.keys(Xi(c, f))]);
          for (const Pe of Array.from(le))
            ie(s.dirtyFields, Pe) ? We(V, Pe, ie(f, Pe)) : Re(Pe, ie(V, Pe));
        } else {
          if (Va && tt(y))
            for (const le of h.mount) {
              const Pe = ie(l, le);
              if (Pe && Pe._f) {
                const Ne = Array.isArray(Pe._f.refs)
                  ? Pe._f.refs[0]
                  : Pe._f.ref;
                if (Wo(Ne)) {
                  const wt = Ne.closest("form");
                  if (wt) {
                    wt.reset();
                    break;
                  }
                }
              }
            }
          if (_.keepFieldsRef) for (const le of h.mount) Re(le, ie(V, le));
          else l = {};
        }
        (f = i.shouldUnregister ? (_.keepDefaultValues ? ut(c) : {}) : ut(V)),
          A.array.next({ values: { ...V } }),
          A.state.next({ values: { ...V } });
      }
      (h = {
        mount: _.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (p.mount = !S.isValid || !!_.keepIsValid || !!_.keepDirtyValues),
        (p.watch = !!i.shouldUnregister),
        A.state.next({
          submitCount: _.keepSubmitCount ? s.submitCount : 0,
          isDirty: q
            ? !1
            : _.keepDirty
            ? s.isDirty
            : !!(_.keepDefaultValues && !qn(y, c)),
          isSubmitted: _.keepIsSubmitted ? s.isSubmitted : !1,
          dirtyFields: q
            ? {}
            : _.keepDirtyValues
            ? _.keepDefaultValues && f
              ? Xi(c, f)
              : s.dirtyFields
            : _.keepDefaultValues && y
            ? Xi(c, y)
            : _.keepDirty
            ? s.dirtyFields
            : {},
          touchedFields: _.keepTouched ? s.touchedFields : {},
          errors: _.keepErrors ? s.errors : {},
          isSubmitSuccessful: _.keepIsSubmitSuccessful
            ? s.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
          defaultValues: c,
        });
    },
    ai = (y, _) => Sr(nn(y) ? y(f) : y, _),
    hs = (y, _ = {}) => {
      const N = ie(l, y),
        J = N && N._f;
      if (J) {
        const q = J.refs ? J.refs[0] : J.ref;
        q.focus && (q.focus(), _.shouldSelect && nn(q.select) && q.select());
      }
    },
    ci = (y) => {
      s = { ...s, ...y };
    },
    kr = {
      control: {
        register: we,
        unregister: ue,
        getFieldState: k,
        handleSubmit: Et,
        setError: pe,
        _subscribe: ve,
        _runSchema: Q,
        _focusError: Ve,
        _getWatch: oe,
        _getDirty: je,
        _setValid: R,
        _setFieldArray: X,
        _setDisabledField: he,
        _setErrors: Y,
        _getFieldArray: ce,
        _reset: Sr,
        _resetDefaultValues: () =>
          nn(i.defaultValues) &&
          i.defaultValues().then((y) => {
            ai(y, i.resetOptions), A.state.next({ isLoading: !1 });
          }),
        _removeUnmounted: Ie,
        _disableForm: qt,
        _subjects: A,
        _proxyFormState: S,
        get _fields() {
          return l;
        },
        get _formValues() {
          return f;
        },
        get _state() {
          return p;
        },
        set _state(y) {
          p = y;
        },
        get _defaultValues() {
          return c;
        },
        get _names() {
          return h;
        },
        set _names(y) {
          h = y;
        },
        get _formState() {
          return s;
        },
        get _options() {
          return i;
        },
        set _options(y) {
          i = { ...i, ...y };
        },
      },
      subscribe: ge,
      trigger: ee,
      register: we,
      handleSubmit: Et,
      watch: ye,
      setValue: Re,
      getValues: G,
      reset: ai,
      resetField: wr,
      clearErrors: j,
      unregister: ue,
      setError: pe,
      setFocus: hs,
      getFieldState: k,
    };
  return { ...kr, formControl: kr };
}
function Ah(n = {}) {
  const i = ae.useRef(void 0),
    s = ae.useRef(void 0),
    [l, c] = ae.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: nn(n.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: n.errors || {},
      disabled: n.disabled || !1,
      isReady: !1,
      defaultValues: nn(n.defaultValues) ? void 0 : n.defaultValues,
    });
  if (!i.current)
    if (n.formControl)
      (i.current = { ...n.formControl, formState: l }),
        n.defaultValues &&
          !nn(n.defaultValues) &&
          n.formControl.reset(n.defaultValues, n.resetOptions);
    else {
      const { formControl: p, ...h } = o0(n);
      i.current = { ...h, formState: l };
    }
  const f = i.current.control;
  return (
    (f._options = n),
    Wv(() => {
      const p = f._subscribe({
        formState: f._proxyFormState,
        callback: () => c({ ...f._formState }),
        reRenderRoot: !0,
      });
      return c((h) => ({ ...h, isReady: !0 })), (f._formState.isReady = !0), p;
    }, [f]),
    ae.useEffect(() => f._disableForm(n.disabled), [f, n.disabled]),
    ae.useEffect(() => {
      n.mode && (f._options.mode = n.mode),
        n.reValidateMode && (f._options.reValidateMode = n.reValidateMode);
    }, [f, n.mode, n.reValidateMode]),
    ae.useEffect(() => {
      n.errors && (f._setErrors(n.errors), f._focusError());
    }, [f, n.errors]),
    ae.useEffect(() => {
      n.shouldUnregister && f._subjects.state.next({ values: f._getWatch() });
    }, [f, n.shouldUnregister]),
    ae.useEffect(() => {
      if (f._proxyFormState.isDirty) {
        const p = f._getDirty();
        p !== l.isDirty && f._subjects.state.next({ isDirty: p });
      }
    }, [f, l.isDirty]),
    ae.useEffect(() => {
      n.values && !qn(n.values, s.current)
        ? (f._reset(n.values, {
            keepFieldsRef: !0,
            ...f._options.resetOptions,
          }),
          (s.current = n.values),
          c((p) => ({ ...p })))
        : f._resetDefaultValues();
    }, [f, n.values]),
    ae.useEffect(() => {
      f._state.mount || (f._setValid(), (f._state.mount = !0)),
        f._state.watch &&
          ((f._state.watch = !1), f._subjects.state.next({ ...f._formState })),
        f._removeUnmounted();
    }),
    (i.current.formState = Hv(l, f)),
    i.current
  );
}
function Fh(n, i) {
  return function () {
    return n.apply(i, arguments);
  };
}
const { toString: l0 } = Object.prototype,
  { getPrototypeOf: Ka } = Object,
  { iterator: il, toStringTag: Nh } = Symbol,
  sl = ((n) => (i) => {
    const s = l0.call(i);
    return n[s] || (n[s] = s.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  sn = (n) => ((n = n.toLowerCase()), (i) => sl(i) === n),
  ol = (n) => (i) => typeof i === n,
  { isArray: li } = Array,
  ls = ol("undefined");
function cs(n) {
  return (
    n !== null &&
    !ls(n) &&
    n.constructor !== null &&
    !ls(n.constructor) &&
    Nt(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const Lh = sn("ArrayBuffer");
function u0(n) {
  let i;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (i = ArrayBuffer.isView(n))
      : (i = n && n.buffer && Lh(n.buffer)),
    i
  );
}
const a0 = ol("string"),
  Nt = ol("function"),
  Dh = ol("number"),
  fs = (n) => n !== null && typeof n == "object",
  c0 = (n) => n === !0 || n === !1,
  zo = (n) => {
    if (sl(n) !== "object") return !1;
    const i = Ka(n);
    return (
      (i === null ||
        i === Object.prototype ||
        Object.getPrototypeOf(i) === null) &&
      !(Nh in n) &&
      !(il in n)
    );
  },
  f0 = (n) => {
    if (!fs(n) || cs(n)) return !1;
    try {
      return (
        Object.keys(n).length === 0 &&
        Object.getPrototypeOf(n) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  d0 = sn("Date"),
  p0 = sn("File"),
  h0 = sn("Blob"),
  m0 = sn("FileList"),
  y0 = (n) => fs(n) && Nt(n.pipe),
  g0 = (n) => {
    let i;
    return (
      n &&
      ((typeof FormData == "function" && n instanceof FormData) ||
        (Nt(n.append) &&
          ((i = sl(n)) === "formdata" ||
            (i === "object" &&
              Nt(n.toString) &&
              n.toString() === "[object FormData]"))))
    );
  },
  v0 = sn("URLSearchParams"),
  [w0, S0, k0, x0] = ["ReadableStream", "Request", "Response", "Headers"].map(
    sn
  ),
  E0 = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ds(n, i, { allOwnKeys: s = !1 } = {}) {
  if (n === null || typeof n > "u") return;
  let l, c;
  if ((typeof n != "object" && (n = [n]), li(n)))
    for (l = 0, c = n.length; l < c; l++) i.call(null, n[l], l, n);
  else {
    if (cs(n)) return;
    const f = s ? Object.getOwnPropertyNames(n) : Object.keys(n),
      p = f.length;
    let h;
    for (l = 0; l < p; l++) (h = f[l]), i.call(null, n[h], h, n);
  }
}
function jh(n, i) {
  if (cs(n)) return null;
  i = i.toLowerCase();
  const s = Object.keys(n);
  let l = s.length,
    c;
  for (; l-- > 0; ) if (((c = s[l]), i === c.toLowerCase())) return c;
  return null;
}
const cr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  zh = (n) => !ls(n) && n !== cr;
function Ra() {
  const { caseless: n } = (zh(this) && this) || {},
    i = {},
    s = (l, c) => {
      const f = (n && jh(i, c)) || c;
      zo(i[f]) && zo(l)
        ? (i[f] = Ra(i[f], l))
        : zo(l)
        ? (i[f] = Ra({}, l))
        : li(l)
        ? (i[f] = l.slice())
        : (i[f] = l);
    };
  for (let l = 0, c = arguments.length; l < c; l++)
    arguments[l] && ds(arguments[l], s);
  return i;
}
const C0 = (n, i, s, { allOwnKeys: l } = {}) => (
    ds(
      i,
      (c, f) => {
        s && Nt(c) ? (n[f] = Fh(c, s)) : (n[f] = c);
      },
      { allOwnKeys: l }
    ),
    n
  ),
  _0 = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  O0 = (n, i, s, l) => {
    (n.prototype = Object.create(i.prototype, l)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, "super", { value: i.prototype }),
      s && Object.assign(n.prototype, s);
  },
  R0 = (n, i, s, l) => {
    let c, f, p;
    const h = {};
    if (((i = i || {}), n == null)) return i;
    do {
      for (c = Object.getOwnPropertyNames(n), f = c.length; f-- > 0; )
        (p = c[f]), (!l || l(p, n, i)) && !h[p] && ((i[p] = n[p]), (h[p] = !0));
      n = s !== !1 && Ka(n);
    } while (n && (!s || s(n, i)) && n !== Object.prototype);
    return i;
  },
  P0 = (n, i, s) => {
    (n = String(n)),
      (s === void 0 || s > n.length) && (s = n.length),
      (s -= i.length);
    const l = n.indexOf(i, s);
    return l !== -1 && l === s;
  },
  T0 = (n) => {
    if (!n) return null;
    if (li(n)) return n;
    let i = n.length;
    if (!Dh(i)) return null;
    const s = new Array(i);
    for (; i-- > 0; ) s[i] = n[i];
    return s;
  },
  A0 = (
    (n) => (i) =>
      n && i instanceof n
  )(typeof Uint8Array < "u" && Ka(Uint8Array)),
  F0 = (n, i) => {
    const l = (n && n[il]).call(n);
    let c;
    for (; (c = l.next()) && !c.done; ) {
      const f = c.value;
      i.call(n, f[0], f[1]);
    }
  },
  N0 = (n, i) => {
    let s;
    const l = [];
    for (; (s = n.exec(i)) !== null; ) l.push(s);
    return l;
  },
  L0 = sn("HTMLFormElement"),
  D0 = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (s, l, c) {
      return l.toUpperCase() + c;
    }),
  xp = (
    ({ hasOwnProperty: n }) =>
    (i, s) =>
      n.call(i, s)
  )(Object.prototype),
  j0 = sn("RegExp"),
  Ih = (n, i) => {
    const s = Object.getOwnPropertyDescriptors(n),
      l = {};
    ds(s, (c, f) => {
      let p;
      (p = i(c, f, n)) !== !1 && (l[f] = p || c);
    }),
      Object.defineProperties(n, l);
  },
  z0 = (n) => {
    Ih(n, (i, s) => {
      if (Nt(n) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
        return !1;
      const l = n[s];
      if (Nt(l)) {
        if (((i.enumerable = !1), "writable" in i)) {
          i.writable = !1;
          return;
        }
        i.set ||
          (i.set = () => {
            throw Error("Can not rewrite read-only method '" + s + "'");
          });
      }
    });
  },
  I0 = (n, i) => {
    const s = {},
      l = (c) => {
        c.forEach((f) => {
          s[f] = !0;
        });
      };
    return li(n) ? l(n) : l(String(n).split(i)), s;
  },
  M0 = () => {},
  $0 = (n, i) => (n != null && Number.isFinite((n = +n)) ? n : i);
function U0(n) {
  return !!(n && Nt(n.append) && n[Nh] === "FormData" && n[il]);
}
const b0 = (n) => {
    const i = new Array(10),
      s = (l, c) => {
        if (fs(l)) {
          if (i.indexOf(l) >= 0) return;
          if (cs(l)) return l;
          if (!("toJSON" in l)) {
            i[c] = l;
            const f = li(l) ? [] : {};
            return (
              ds(l, (p, h) => {
                const v = s(p, c + 1);
                !ls(v) && (f[h] = v);
              }),
              (i[c] = void 0),
              f
            );
          }
        }
        return l;
      };
    return s(n, 0);
  },
  B0 = sn("AsyncFunction"),
  V0 = (n) => n && (fs(n) || Nt(n)) && Nt(n.then) && Nt(n.catch),
  Mh = ((n, i) =>
    n
      ? setImmediate
      : i
      ? ((s, l) => (
          cr.addEventListener(
            "message",
            ({ source: c, data: f }) => {
              c === cr && f === s && l.length && l.shift()();
            },
            !1
          ),
          (c) => {
            l.push(c), cr.postMessage(s, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (s) => setTimeout(s))(
    typeof setImmediate == "function",
    Nt(cr.postMessage)
  ),
  H0 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(cr)
      : (typeof process < "u" && process.nextTick) || Mh,
  W0 = (n) => n != null && Nt(n[il]),
  T = {
    isArray: li,
    isArrayBuffer: Lh,
    isBuffer: cs,
    isFormData: g0,
    isArrayBufferView: u0,
    isString: a0,
    isNumber: Dh,
    isBoolean: c0,
    isObject: fs,
    isPlainObject: zo,
    isEmptyObject: f0,
    isReadableStream: w0,
    isRequest: S0,
    isResponse: k0,
    isHeaders: x0,
    isUndefined: ls,
    isDate: d0,
    isFile: p0,
    isBlob: h0,
    isRegExp: j0,
    isFunction: Nt,
    isStream: y0,
    isURLSearchParams: v0,
    isTypedArray: A0,
    isFileList: m0,
    forEach: ds,
    merge: Ra,
    extend: C0,
    trim: E0,
    stripBOM: _0,
    inherits: O0,
    toFlatObject: R0,
    kindOf: sl,
    kindOfTest: sn,
    endsWith: P0,
    toArray: T0,
    forEachEntry: F0,
    matchAll: N0,
    isHTMLForm: L0,
    hasOwnProperty: xp,
    hasOwnProp: xp,
    reduceDescriptors: Ih,
    freezeMethods: z0,
    toObjectSet: I0,
    toCamelCase: D0,
    noop: M0,
    toFiniteNumber: $0,
    findKey: jh,
    global: cr,
    isContextDefined: zh,
    isSpecCompliantForm: U0,
    toJSONObject: b0,
    isAsyncFn: B0,
    isThenable: V0,
    setImmediate: Mh,
    asap: H0,
    isIterable: W0,
  };
function Se(n, i, s, l, c) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = n),
    (this.name = "AxiosError"),
    i && (this.code = i),
    s && (this.config = s),
    l && (this.request = l),
    c && ((this.response = c), (this.status = c.status ? c.status : null));
}
T.inherits(Se, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: T.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const $h = Se.prototype,
  Uh = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((n) => {
  Uh[n] = { value: n };
});
Object.defineProperties(Se, Uh);
Object.defineProperty($h, "isAxiosError", { value: !0 });
Se.from = (n, i, s, l, c, f) => {
  const p = Object.create($h);
  return (
    T.toFlatObject(
      n,
      p,
      function (v) {
        return v !== Error.prototype;
      },
      (h) => h !== "isAxiosError"
    ),
    Se.call(p, n.message, i, s, l, c),
    (p.cause = n),
    (p.name = n.name),
    f && Object.assign(p, f),
    p
  );
};
const Q0 = null;
function Pa(n) {
  return T.isPlainObject(n) || T.isArray(n);
}
function bh(n) {
  return T.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Ep(n, i, s) {
  return n
    ? n
        .concat(i)
        .map(function (c, f) {
          return (c = bh(c)), !s && f ? "[" + c + "]" : c;
        })
        .join(s ? "." : "")
    : i;
}
function q0(n) {
  return T.isArray(n) && !n.some(Pa);
}
const K0 = T.toFlatObject(T, {}, null, function (i) {
  return /^is[A-Z]/.test(i);
});
function ll(n, i, s) {
  if (!T.isObject(n)) throw new TypeError("target must be an object");
  (i = i || new FormData()),
    (s = T.toFlatObject(
      s,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (R, L) {
        return !T.isUndefined(L[R]);
      }
    ));
  const l = s.metaTokens,
    c = s.visitor || S,
    f = s.dots,
    p = s.indexes,
    v = (s.Blob || (typeof Blob < "u" && Blob)) && T.isSpecCompliantForm(i);
  if (!T.isFunction(c)) throw new TypeError("visitor must be a function");
  function x(F) {
    if (F === null) return "";
    if (T.isDate(F)) return F.toISOString();
    if (T.isBoolean(F)) return F.toString();
    if (!v && T.isBlob(F))
      throw new Se("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(F) || T.isTypedArray(F)
      ? v && typeof Blob == "function"
        ? new Blob([F])
        : Buffer.from(F)
      : F;
  }
  function S(F, R, L) {
    let X = F;
    if (F && !L && typeof F == "object") {
      if (T.endsWith(R, "{}"))
        (R = l ? R : R.slice(0, -2)), (F = JSON.stringify(F));
      else if (
        (T.isArray(F) && q0(F)) ||
        ((T.isFileList(F) || T.endsWith(R, "[]")) && (X = T.toArray(F)))
      )
        return (
          (R = bh(R)),
          X.forEach(function (Y, K) {
            !(T.isUndefined(Y) || Y === null) &&
              i.append(
                p === !0 ? Ep([R], K, f) : p === null ? R : R + "[]",
                x(Y)
              );
          }),
          !1
        );
    }
    return Pa(F) ? !0 : (i.append(Ep(L, R, f), x(F)), !1);
  }
  const E = [],
    A = Object.assign(K0, {
      defaultVisitor: S,
      convertValue: x,
      isVisitable: Pa,
    });
  function B(F, R) {
    if (!T.isUndefined(F)) {
      if (E.indexOf(F) !== -1)
        throw Error("Circular reference detected in " + R.join("."));
      E.push(F),
        T.forEach(F, function (X, $) {
          (!(T.isUndefined(X) || X === null) &&
            c.call(i, X, T.isString($) ? $.trim() : $, R, A)) === !0 &&
            B(X, R ? R.concat($) : [$]);
        }),
        E.pop();
    }
  }
  if (!T.isObject(n)) throw new TypeError("data must be an object");
  return B(n), i;
}
function Cp(n) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (l) {
    return i[l];
  });
}
function Ga(n, i) {
  (this._pairs = []), n && ll(n, this, i);
}
const Bh = Ga.prototype;
Bh.append = function (i, s) {
  this._pairs.push([i, s]);
};
Bh.toString = function (i) {
  const s = i
    ? function (l) {
        return i.call(this, l, Cp);
      }
    : Cp;
  return this._pairs
    .map(function (c) {
      return s(c[0]) + "=" + s(c[1]);
    }, "")
    .join("&");
};
function G0(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Vh(n, i, s) {
  if (!i) return n;
  const l = (s && s.encode) || G0;
  T.isFunction(s) && (s = { serialize: s });
  const c = s && s.serialize;
  let f;
  if (
    (c
      ? (f = c(i, s))
      : (f = T.isURLSearchParams(i) ? i.toString() : new Ga(i, s).toString(l)),
    f)
  ) {
    const p = n.indexOf("#");
    p !== -1 && (n = n.slice(0, p)),
      (n += (n.indexOf("?") === -1 ? "?" : "&") + f);
  }
  return n;
}
class _p {
  constructor() {
    this.handlers = [];
  }
  use(i, s, l) {
    return (
      this.handlers.push({
        fulfilled: i,
        rejected: s,
        synchronous: l ? l.synchronous : !1,
        runWhen: l ? l.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(i) {
    this.handlers[i] && (this.handlers[i] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(i) {
    T.forEach(this.handlers, function (l) {
      l !== null && i(l);
    });
  }
}
const Hh = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  X0 = typeof URLSearchParams < "u" ? URLSearchParams : Ga,
  Y0 = typeof FormData < "u" ? FormData : null,
  J0 = typeof Blob < "u" ? Blob : null,
  Z0 = {
    isBrowser: !0,
    classes: { URLSearchParams: X0, FormData: Y0, Blob: J0 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Xa = typeof window < "u" && typeof document < "u",
  Ta = (typeof navigator == "object" && navigator) || void 0,
  e1 =
    Xa &&
    (!Ta || ["ReactNative", "NativeScript", "NS"].indexOf(Ta.product) < 0),
  t1 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  n1 = (Xa && window.location.href) || "http://localhost",
  r1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Xa,
        hasStandardBrowserEnv: e1,
        hasStandardBrowserWebWorkerEnv: t1,
        navigator: Ta,
        origin: n1,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  vt = { ...r1, ...Z0 };
function i1(n, i) {
  return ll(n, new vt.classes.URLSearchParams(), {
    visitor: function (s, l, c, f) {
      return vt.isNode && T.isBuffer(s)
        ? (this.append(l, s.toString("base64")), !1)
        : f.defaultVisitor.apply(this, arguments);
    },
    ...i,
  });
}
function s1(n) {
  return T.matchAll(/\w+|\[(\w*)]/g, n).map((i) =>
    i[0] === "[]" ? "" : i[1] || i[0]
  );
}
function o1(n) {
  const i = {},
    s = Object.keys(n);
  let l;
  const c = s.length;
  let f;
  for (l = 0; l < c; l++) (f = s[l]), (i[f] = n[f]);
  return i;
}
function Wh(n) {
  function i(s, l, c, f) {
    let p = s[f++];
    if (p === "__proto__") return !0;
    const h = Number.isFinite(+p),
      v = f >= s.length;
    return (
      (p = !p && T.isArray(c) ? c.length : p),
      v
        ? (T.hasOwnProp(c, p) ? (c[p] = [c[p], l]) : (c[p] = l), !h)
        : ((!c[p] || !T.isObject(c[p])) && (c[p] = []),
          i(s, l, c[p], f) && T.isArray(c[p]) && (c[p] = o1(c[p])),
          !h)
    );
  }
  if (T.isFormData(n) && T.isFunction(n.entries)) {
    const s = {};
    return (
      T.forEachEntry(n, (l, c) => {
        i(s1(l), c, s, 0);
      }),
      s
    );
  }
  return null;
}
function l1(n, i, s) {
  if (T.isString(n))
    try {
      return (i || JSON.parse)(n), T.trim(n);
    } catch (l) {
      if (l.name !== "SyntaxError") throw l;
    }
  return (s || JSON.stringify)(n);
}
const ps = {
  transitional: Hh,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (i, s) {
      const l = s.getContentType() || "",
        c = l.indexOf("application/json") > -1,
        f = T.isObject(i);
      if ((f && T.isHTMLForm(i) && (i = new FormData(i)), T.isFormData(i)))
        return c ? JSON.stringify(Wh(i)) : i;
      if (
        T.isArrayBuffer(i) ||
        T.isBuffer(i) ||
        T.isStream(i) ||
        T.isFile(i) ||
        T.isBlob(i) ||
        T.isReadableStream(i)
      )
        return i;
      if (T.isArrayBufferView(i)) return i.buffer;
      if (T.isURLSearchParams(i))
        return (
          s.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          i.toString()
        );
      let h;
      if (f) {
        if (l.indexOf("application/x-www-form-urlencoded") > -1)
          return i1(i, this.formSerializer).toString();
        if ((h = T.isFileList(i)) || l.indexOf("multipart/form-data") > -1) {
          const v = this.env && this.env.FormData;
          return ll(
            h ? { "files[]": i } : i,
            v && new v(),
            this.formSerializer
          );
        }
      }
      return f || c ? (s.setContentType("application/json", !1), l1(i)) : i;
    },
  ],
  transformResponse: [
    function (i) {
      const s = this.transitional || ps.transitional,
        l = s && s.forcedJSONParsing,
        c = this.responseType === "json";
      if (T.isResponse(i) || T.isReadableStream(i)) return i;
      if (i && T.isString(i) && ((l && !this.responseType) || c)) {
        const p = !(s && s.silentJSONParsing) && c;
        try {
          return JSON.parse(i);
        } catch (h) {
          if (p)
            throw h.name === "SyntaxError"
              ? Se.from(h, Se.ERR_BAD_RESPONSE, this, null, this.response)
              : h;
        }
      }
      return i;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: vt.classes.FormData, Blob: vt.classes.Blob },
  validateStatus: function (i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
T.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  ps.headers[n] = {};
});
const u1 = T.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  a1 = (n) => {
    const i = {};
    let s, l, c;
    return (
      n &&
        n
          .split(
            `
`
          )
          .forEach(function (p) {
            (c = p.indexOf(":")),
              (s = p.substring(0, c).trim().toLowerCase()),
              (l = p.substring(c + 1).trim()),
              !(!s || (i[s] && u1[s])) &&
                (s === "set-cookie"
                  ? i[s]
                    ? i[s].push(l)
                    : (i[s] = [l])
                  : (i[s] = i[s] ? i[s] + ", " + l : l));
          }),
      i
    );
  },
  Op = Symbol("internals");
function Ji(n) {
  return n && String(n).trim().toLowerCase();
}
function Io(n) {
  return n === !1 || n == null ? n : T.isArray(n) ? n.map(Io) : String(n);
}
function c1(n) {
  const i = Object.create(null),
    s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let l;
  for (; (l = s.exec(n)); ) i[l[1]] = l[2];
  return i;
}
const f1 = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function aa(n, i, s, l, c) {
  if (T.isFunction(l)) return l.call(this, i, s);
  if ((c && (i = s), !!T.isString(i))) {
    if (T.isString(l)) return i.indexOf(l) !== -1;
    if (T.isRegExp(l)) return l.test(i);
  }
}
function d1(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (i, s, l) => s.toUpperCase() + l);
}
function p1(n, i) {
  const s = T.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((l) => {
    Object.defineProperty(n, l + s, {
      value: function (c, f, p) {
        return this[l].call(this, i, c, f, p);
      },
      configurable: !0,
    });
  });
}
let Lt = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, s, l) {
    const c = this;
    function f(h, v, x) {
      const S = Ji(v);
      if (!S) throw new Error("header name must be a non-empty string");
      const E = T.findKey(c, S);
      (!E || c[E] === void 0 || x === !0 || (x === void 0 && c[E] !== !1)) &&
        (c[E || v] = Io(h));
    }
    const p = (h, v) => T.forEach(h, (x, S) => f(x, S, v));
    if (T.isPlainObject(i) || i instanceof this.constructor) p(i, s);
    else if (T.isString(i) && (i = i.trim()) && !f1(i)) p(a1(i), s);
    else if (T.isObject(i) && T.isIterable(i)) {
      let h = {},
        v,
        x;
      for (const S of i) {
        if (!T.isArray(S))
          throw TypeError("Object iterator must return a key-value pair");
        h[(x = S[0])] = (v = h[x])
          ? T.isArray(v)
            ? [...v, S[1]]
            : [v, S[1]]
          : S[1];
      }
      p(h, s);
    } else i != null && f(s, i, l);
    return this;
  }
  get(i, s) {
    if (((i = Ji(i)), i)) {
      const l = T.findKey(this, i);
      if (l) {
        const c = this[l];
        if (!s) return c;
        if (s === !0) return c1(c);
        if (T.isFunction(s)) return s.call(this, c, l);
        if (T.isRegExp(s)) return s.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, s) {
    if (((i = Ji(i)), i)) {
      const l = T.findKey(this, i);
      return !!(l && this[l] !== void 0 && (!s || aa(this, this[l], l, s)));
    }
    return !1;
  }
  delete(i, s) {
    const l = this;
    let c = !1;
    function f(p) {
      if (((p = Ji(p)), p)) {
        const h = T.findKey(l, p);
        h && (!s || aa(l, l[h], h, s)) && (delete l[h], (c = !0));
      }
    }
    return T.isArray(i) ? i.forEach(f) : f(i), c;
  }
  clear(i) {
    const s = Object.keys(this);
    let l = s.length,
      c = !1;
    for (; l--; ) {
      const f = s[l];
      (!i || aa(this, this[f], f, i, !0)) && (delete this[f], (c = !0));
    }
    return c;
  }
  normalize(i) {
    const s = this,
      l = {};
    return (
      T.forEach(this, (c, f) => {
        const p = T.findKey(l, f);
        if (p) {
          (s[p] = Io(c)), delete s[f];
          return;
        }
        const h = i ? d1(f) : String(f).trim();
        h !== f && delete s[f], (s[h] = Io(c)), (l[h] = !0);
      }),
      this
    );
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const s = Object.create(null);
    return (
      T.forEach(this, (l, c) => {
        l != null && l !== !1 && (s[c] = i && T.isArray(l) ? l.join(", ") : l);
      }),
      s
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, s]) => i + ": " + s).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(i) {
    return i instanceof this ? i : new this(i);
  }
  static concat(i, ...s) {
    const l = new this(i);
    return s.forEach((c) => l.set(c)), l;
  }
  static accessor(i) {
    const l = (this[Op] = this[Op] = { accessors: {} }).accessors,
      c = this.prototype;
    function f(p) {
      const h = Ji(p);
      l[h] || (p1(c, p), (l[h] = !0));
    }
    return T.isArray(i) ? i.forEach(f) : f(i), this;
  }
};
Lt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
T.reduceDescriptors(Lt.prototype, ({ value: n }, i) => {
  let s = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => n,
    set(l) {
      this[s] = l;
    },
  };
});
T.freezeMethods(Lt);
function ca(n, i) {
  const s = this || ps,
    l = i || s,
    c = Lt.from(l.headers);
  let f = l.data;
  return (
    T.forEach(n, function (h) {
      f = h.call(s, f, c.normalize(), i ? i.status : void 0);
    }),
    c.normalize(),
    f
  );
}
function Qh(n) {
  return !!(n && n.__CANCEL__);
}
function ui(n, i, s) {
  Se.call(this, n ?? "canceled", Se.ERR_CANCELED, i, s),
    (this.name = "CanceledError");
}
T.inherits(ui, Se, { __CANCEL__: !0 });
function qh(n, i, s) {
  const l = s.config.validateStatus;
  !s.status || !l || l(s.status)
    ? n(s)
    : i(
        new Se(
          "Request failed with status code " + s.status,
          [Se.ERR_BAD_REQUEST, Se.ERR_BAD_RESPONSE][
            Math.floor(s.status / 100) - 4
          ],
          s.config,
          s.request,
          s
        )
      );
}
function h1(n) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return (i && i[1]) || "";
}
function m1(n, i) {
  n = n || 10;
  const s = new Array(n),
    l = new Array(n);
  let c = 0,
    f = 0,
    p;
  return (
    (i = i !== void 0 ? i : 1e3),
    function (v) {
      const x = Date.now(),
        S = l[f];
      p || (p = x), (s[c] = v), (l[c] = x);
      let E = f,
        A = 0;
      for (; E !== c; ) (A += s[E++]), (E = E % n);
      if (((c = (c + 1) % n), c === f && (f = (f + 1) % n), x - p < i)) return;
      const B = S && x - S;
      return B ? Math.round((A * 1e3) / B) : void 0;
    }
  );
}
function y1(n, i) {
  let s = 0,
    l = 1e3 / i,
    c,
    f;
  const p = (x, S = Date.now()) => {
    (s = S), (c = null), f && (clearTimeout(f), (f = null)), n(...x);
  };
  return [
    (...x) => {
      const S = Date.now(),
        E = S - s;
      E >= l
        ? p(x, S)
        : ((c = x),
          f ||
            (f = setTimeout(() => {
              (f = null), p(c);
            }, l - E)));
    },
    () => c && p(c),
  ];
}
const Ko = (n, i, s = 3) => {
    let l = 0;
    const c = m1(50, 250);
    return y1((f) => {
      const p = f.loaded,
        h = f.lengthComputable ? f.total : void 0,
        v = p - l,
        x = c(v),
        S = p <= h;
      l = p;
      const E = {
        loaded: p,
        total: h,
        progress: h ? p / h : void 0,
        bytes: v,
        rate: x || void 0,
        estimated: x && h && S ? (h - p) / x : void 0,
        event: f,
        lengthComputable: h != null,
        [i ? "download" : "upload"]: !0,
      };
      n(E);
    }, s);
  },
  Rp = (n, i) => {
    const s = n != null;
    return [(l) => i[0]({ lengthComputable: s, total: n, loaded: l }), i[1]];
  },
  Pp =
    (n) =>
    (...i) =>
      T.asap(() => n(...i)),
  g1 = vt.hasStandardBrowserEnv
    ? ((n, i) => (s) => (
        (s = new URL(s, vt.origin)),
        n.protocol === s.protocol &&
          n.host === s.host &&
          (i || n.port === s.port)
      ))(
        new URL(vt.origin),
        vt.navigator && /(msie|trident)/i.test(vt.navigator.userAgent)
      )
    : () => !0,
  v1 = vt.hasStandardBrowserEnv
    ? {
        write(n, i, s, l, c, f) {
          const p = [n + "=" + encodeURIComponent(i)];
          T.isNumber(s) && p.push("expires=" + new Date(s).toGMTString()),
            T.isString(l) && p.push("path=" + l),
            T.isString(c) && p.push("domain=" + c),
            f === !0 && p.push("secure"),
            (document.cookie = p.join("; "));
        },
        read(n) {
          const i = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return i ? decodeURIComponent(i[3]) : null;
        },
        remove(n) {
          this.write(n, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function w1(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function S1(n, i) {
  return i ? n.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : n;
}
function Kh(n, i, s) {
  let l = !w1(i);
  return n && (l || s == !1) ? S1(n, i) : i;
}
const Tp = (n) => (n instanceof Lt ? { ...n } : n);
function gr(n, i) {
  i = i || {};
  const s = {};
  function l(x, S, E, A) {
    return T.isPlainObject(x) && T.isPlainObject(S)
      ? T.merge.call({ caseless: A }, x, S)
      : T.isPlainObject(S)
      ? T.merge({}, S)
      : T.isArray(S)
      ? S.slice()
      : S;
  }
  function c(x, S, E, A) {
    if (T.isUndefined(S)) {
      if (!T.isUndefined(x)) return l(void 0, x, E, A);
    } else return l(x, S, E, A);
  }
  function f(x, S) {
    if (!T.isUndefined(S)) return l(void 0, S);
  }
  function p(x, S) {
    if (T.isUndefined(S)) {
      if (!T.isUndefined(x)) return l(void 0, x);
    } else return l(void 0, S);
  }
  function h(x, S, E) {
    if (E in i) return l(x, S);
    if (E in n) return l(void 0, x);
  }
  const v = {
    url: f,
    method: f,
    data: f,
    baseURL: p,
    transformRequest: p,
    transformResponse: p,
    paramsSerializer: p,
    timeout: p,
    timeoutMessage: p,
    withCredentials: p,
    withXSRFToken: p,
    adapter: p,
    responseType: p,
    xsrfCookieName: p,
    xsrfHeaderName: p,
    onUploadProgress: p,
    onDownloadProgress: p,
    decompress: p,
    maxContentLength: p,
    maxBodyLength: p,
    beforeRedirect: p,
    transport: p,
    httpAgent: p,
    httpsAgent: p,
    cancelToken: p,
    socketPath: p,
    responseEncoding: p,
    validateStatus: h,
    headers: (x, S, E) => c(Tp(x), Tp(S), E, !0),
  };
  return (
    T.forEach(Object.keys({ ...n, ...i }), function (S) {
      const E = v[S] || c,
        A = E(n[S], i[S], S);
      (T.isUndefined(A) && E !== h) || (s[S] = A);
    }),
    s
  );
}
const Gh = (n) => {
    const i = gr({}, n);
    let {
      data: s,
      withXSRFToken: l,
      xsrfHeaderName: c,
      xsrfCookieName: f,
      headers: p,
      auth: h,
    } = i;
    (i.headers = p = Lt.from(p)),
      (i.url = Vh(
        Kh(i.baseURL, i.url, i.allowAbsoluteUrls),
        n.params,
        n.paramsSerializer
      )),
      h &&
        p.set(
          "Authorization",
          "Basic " +
            btoa(
              (h.username || "") +
                ":" +
                (h.password ? unescape(encodeURIComponent(h.password)) : "")
            )
        );
    let v;
    if (T.isFormData(s)) {
      if (vt.hasStandardBrowserEnv || vt.hasStandardBrowserWebWorkerEnv)
        p.setContentType(void 0);
      else if ((v = p.getContentType()) !== !1) {
        const [x, ...S] = v
          ? v
              .split(";")
              .map((E) => E.trim())
              .filter(Boolean)
          : [];
        p.setContentType([x || "multipart/form-data", ...S].join("; "));
      }
    }
    if (
      vt.hasStandardBrowserEnv &&
      (l && T.isFunction(l) && (l = l(i)), l || (l !== !1 && g1(i.url)))
    ) {
      const x = c && f && v1.read(f);
      x && p.set(c, x);
    }
    return i;
  },
  k1 = typeof XMLHttpRequest < "u",
  x1 =
    k1 &&
    function (n) {
      return new Promise(function (s, l) {
        const c = Gh(n);
        let f = c.data;
        const p = Lt.from(c.headers).normalize();
        let { responseType: h, onUploadProgress: v, onDownloadProgress: x } = c,
          S,
          E,
          A,
          B,
          F;
        function R() {
          B && B(),
            F && F(),
            c.cancelToken && c.cancelToken.unsubscribe(S),
            c.signal && c.signal.removeEventListener("abort", S);
        }
        let L = new XMLHttpRequest();
        L.open(c.method.toUpperCase(), c.url, !0), (L.timeout = c.timeout);
        function X() {
          if (!L) return;
          const Y = Lt.from(
              "getAllResponseHeaders" in L && L.getAllResponseHeaders()
            ),
            D = {
              data:
                !h || h === "text" || h === "json"
                  ? L.responseText
                  : L.response,
              status: L.status,
              statusText: L.statusText,
              headers: Y,
              config: n,
              request: L,
            };
          qh(
            function (Q) {
              s(Q), R();
            },
            function (Q) {
              l(Q), R();
            },
            D
          ),
            (L = null);
        }
        "onloadend" in L
          ? (L.onloadend = X)
          : (L.onreadystatechange = function () {
              !L ||
                L.readyState !== 4 ||
                (L.status === 0 &&
                  !(L.responseURL && L.responseURL.indexOf("file:") === 0)) ||
                setTimeout(X);
            }),
          (L.onabort = function () {
            L &&
              (l(new Se("Request aborted", Se.ECONNABORTED, n, L)), (L = null));
          }),
          (L.onerror = function () {
            l(new Se("Network Error", Se.ERR_NETWORK, n, L)), (L = null);
          }),
          (L.ontimeout = function () {
            let K = c.timeout
              ? "timeout of " + c.timeout + "ms exceeded"
              : "timeout exceeded";
            const D = c.transitional || Hh;
            c.timeoutErrorMessage && (K = c.timeoutErrorMessage),
              l(
                new Se(
                  K,
                  D.clarifyTimeoutError ? Se.ETIMEDOUT : Se.ECONNABORTED,
                  n,
                  L
                )
              ),
              (L = null);
          }),
          f === void 0 && p.setContentType(null),
          "setRequestHeader" in L &&
            T.forEach(p.toJSON(), function (K, D) {
              L.setRequestHeader(D, K);
            }),
          T.isUndefined(c.withCredentials) ||
            (L.withCredentials = !!c.withCredentials),
          h && h !== "json" && (L.responseType = c.responseType),
          x && (([A, F] = Ko(x, !0)), L.addEventListener("progress", A)),
          v &&
            L.upload &&
            (([E, B] = Ko(v)),
            L.upload.addEventListener("progress", E),
            L.upload.addEventListener("loadend", B)),
          (c.cancelToken || c.signal) &&
            ((S = (Y) => {
              L &&
                (l(!Y || Y.type ? new ui(null, n, L) : Y),
                L.abort(),
                (L = null));
            }),
            c.cancelToken && c.cancelToken.subscribe(S),
            c.signal &&
              (c.signal.aborted ? S() : c.signal.addEventListener("abort", S)));
        const $ = h1(c.url);
        if ($ && vt.protocols.indexOf($) === -1) {
          l(new Se("Unsupported protocol " + $ + ":", Se.ERR_BAD_REQUEST, n));
          return;
        }
        L.send(f || null);
      });
    },
  E1 = (n, i) => {
    const { length: s } = (n = n ? n.filter(Boolean) : []);
    if (i || s) {
      let l = new AbortController(),
        c;
      const f = function (x) {
        if (!c) {
          (c = !0), h();
          const S = x instanceof Error ? x : this.reason;
          l.abort(
            S instanceof Se ? S : new ui(S instanceof Error ? S.message : S)
          );
        }
      };
      let p =
        i &&
        setTimeout(() => {
          (p = null), f(new Se(`timeout ${i} of ms exceeded`, Se.ETIMEDOUT));
        }, i);
      const h = () => {
        n &&
          (p && clearTimeout(p),
          (p = null),
          n.forEach((x) => {
            x.unsubscribe
              ? x.unsubscribe(f)
              : x.removeEventListener("abort", f);
          }),
          (n = null));
      };
      n.forEach((x) => x.addEventListener("abort", f));
      const { signal: v } = l;
      return (v.unsubscribe = () => T.asap(h)), v;
    }
  },
  C1 = function* (n, i) {
    let s = n.byteLength;
    if (s < i) {
      yield n;
      return;
    }
    let l = 0,
      c;
    for (; l < s; ) (c = l + i), yield n.slice(l, c), (l = c);
  },
  _1 = async function* (n, i) {
    for await (const s of O1(n)) yield* C1(s, i);
  },
  O1 = async function* (n) {
    if (n[Symbol.asyncIterator]) {
      yield* n;
      return;
    }
    const i = n.getReader();
    try {
      for (;;) {
        const { done: s, value: l } = await i.read();
        if (s) break;
        yield l;
      }
    } finally {
      await i.cancel();
    }
  },
  Ap = (n, i, s, l) => {
    const c = _1(n, i);
    let f = 0,
      p,
      h = (v) => {
        p || ((p = !0), l && l(v));
      };
    return new ReadableStream(
      {
        async pull(v) {
          try {
            const { done: x, value: S } = await c.next();
            if (x) {
              h(), v.close();
              return;
            }
            let E = S.byteLength;
            if (s) {
              let A = (f += E);
              s(A);
            }
            v.enqueue(new Uint8Array(S));
          } catch (x) {
            throw (h(x), x);
          }
        },
        cancel(v) {
          return h(v), c.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  ul =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Xh = ul && typeof ReadableStream == "function",
  R1 =
    ul &&
    (typeof TextEncoder == "function"
      ? (
          (n) => (i) =>
            n.encode(i)
        )(new TextEncoder())
      : async (n) => new Uint8Array(await new Response(n).arrayBuffer())),
  Yh = (n, ...i) => {
    try {
      return !!n(...i);
    } catch {
      return !1;
    }
  },
  P1 =
    Xh &&
    Yh(() => {
      let n = !1;
      const i = new Request(vt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (n = !0), "half";
        },
      }).headers.has("Content-Type");
      return n && !i;
    }),
  Fp = 64 * 1024,
  Aa = Xh && Yh(() => T.isReadableStream(new Response("").body)),
  Go = { stream: Aa && ((n) => n.body) };
ul &&
  ((n) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
      !Go[i] &&
        (Go[i] = T.isFunction(n[i])
          ? (s) => s[i]()
          : (s, l) => {
              throw new Se(
                `Response type '${i}' is not supported`,
                Se.ERR_NOT_SUPPORT,
                l
              );
            });
    });
  })(new Response());
const T1 = async (n) => {
    if (n == null) return 0;
    if (T.isBlob(n)) return n.size;
    if (T.isSpecCompliantForm(n))
      return (
        await new Request(vt.origin, { method: "POST", body: n }).arrayBuffer()
      ).byteLength;
    if (T.isArrayBufferView(n) || T.isArrayBuffer(n)) return n.byteLength;
    if ((T.isURLSearchParams(n) && (n = n + ""), T.isString(n)))
      return (await R1(n)).byteLength;
  },
  A1 = async (n, i) => {
    const s = T.toFiniteNumber(n.getContentLength());
    return s ?? T1(i);
  },
  F1 =
    ul &&
    (async (n) => {
      let {
        url: i,
        method: s,
        data: l,
        signal: c,
        cancelToken: f,
        timeout: p,
        onDownloadProgress: h,
        onUploadProgress: v,
        responseType: x,
        headers: S,
        withCredentials: E = "same-origin",
        fetchOptions: A,
      } = Gh(n);
      x = x ? (x + "").toLowerCase() : "text";
      let B = E1([c, f && f.toAbortSignal()], p),
        F;
      const R =
        B &&
        B.unsubscribe &&
        (() => {
          B.unsubscribe();
        });
      let L;
      try {
        if (
          v &&
          P1 &&
          s !== "get" &&
          s !== "head" &&
          (L = await A1(S, l)) !== 0
        ) {
          let D = new Request(i, { method: "POST", body: l, duplex: "half" }),
            W;
          if (
            (T.isFormData(l) &&
              (W = D.headers.get("content-type")) &&
              S.setContentType(W),
            D.body)
          ) {
            const [Q, Ce] = Rp(L, Ko(Pp(v)));
            l = Ap(D.body, Fp, Q, Ce);
          }
        }
        T.isString(E) || (E = E ? "include" : "omit");
        const X = "credentials" in Request.prototype;
        F = new Request(i, {
          ...A,
          signal: B,
          method: s.toUpperCase(),
          headers: S.normalize().toJSON(),
          body: l,
          duplex: "half",
          credentials: X ? E : void 0,
        });
        let $ = await fetch(F, A);
        const Y = Aa && (x === "stream" || x === "response");
        if (Aa && (h || (Y && R))) {
          const D = {};
          ["status", "statusText", "headers"].forEach((_e) => {
            D[_e] = $[_e];
          });
          const W = T.toFiniteNumber($.headers.get("content-length")),
            [Q, Ce] = (h && Rp(W, Ko(Pp(h), !0))) || [];
          $ = new Response(
            Ap($.body, Fp, Q, () => {
              Ce && Ce(), R && R();
            }),
            D
          );
        }
        x = x || "text";
        let K = await Go[T.findKey(Go, x) || "text"]($, n);
        return (
          !Y && R && R(),
          await new Promise((D, W) => {
            qh(D, W, {
              data: K,
              headers: Lt.from($.headers),
              status: $.status,
              statusText: $.statusText,
              config: n,
              request: F,
            });
          })
        );
      } catch (X) {
        throw (
          (R && R(),
          X && X.name === "TypeError" && /Load failed|fetch/i.test(X.message)
            ? Object.assign(new Se("Network Error", Se.ERR_NETWORK, n, F), {
                cause: X.cause || X,
              })
            : Se.from(X, X && X.code, n, F))
        );
      }
    }),
  Fa = { http: Q0, xhr: x1, fetch: F1 };
T.forEach(Fa, (n, i) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: i });
    } catch {}
    Object.defineProperty(n, "adapterName", { value: i });
  }
});
const Np = (n) => `- ${n}`,
  N1 = (n) => T.isFunction(n) || n === null || n === !1,
  Jh = {
    getAdapter: (n) => {
      n = T.isArray(n) ? n : [n];
      const { length: i } = n;
      let s, l;
      const c = {};
      for (let f = 0; f < i; f++) {
        s = n[f];
        let p;
        if (
          ((l = s),
          !N1(s) && ((l = Fa[(p = String(s)).toLowerCase()]), l === void 0))
        )
          throw new Se(`Unknown adapter '${p}'`);
        if (l) break;
        c[p || "#" + f] = l;
      }
      if (!l) {
        const f = Object.entries(c).map(
          ([h, v]) =>
            `adapter ${h} ` +
            (v === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let p = i
          ? f.length > 1
            ? `since :
` +
              f.map(Np).join(`
`)
            : " " + Np(f[0])
          : "as no adapter specified";
        throw new Se(
          "There is no suitable adapter to dispatch the request " + p,
          "ERR_NOT_SUPPORT"
        );
      }
      return l;
    },
    adapters: Fa,
  };
function fa(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new ui(null, n);
}
function Lp(n) {
  return (
    fa(n),
    (n.headers = Lt.from(n.headers)),
    (n.data = ca.call(n, n.transformRequest)),
    ["post", "put", "patch"].indexOf(n.method) !== -1 &&
      n.headers.setContentType("application/x-www-form-urlencoded", !1),
    Jh.getAdapter(n.adapter || ps.adapter)(n).then(
      function (l) {
        return (
          fa(n),
          (l.data = ca.call(n, n.transformResponse, l)),
          (l.headers = Lt.from(l.headers)),
          l
        );
      },
      function (l) {
        return (
          Qh(l) ||
            (fa(n),
            l &&
              l.response &&
              ((l.response.data = ca.call(n, n.transformResponse, l.response)),
              (l.response.headers = Lt.from(l.response.headers)))),
          Promise.reject(l)
        );
      }
    )
  );
}
const Zh = "1.11.0",
  al = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (n, i) => {
    al[n] = function (l) {
      return typeof l === n || "a" + (i < 1 ? "n " : " ") + n;
    };
  }
);
const Dp = {};
al.transitional = function (i, s, l) {
  function c(f, p) {
    return (
      "[Axios v" +
      Zh +
      "] Transitional option '" +
      f +
      "'" +
      p +
      (l ? ". " + l : "")
    );
  }
  return (f, p, h) => {
    if (i === !1)
      throw new Se(
        c(p, " has been removed" + (s ? " in " + s : "")),
        Se.ERR_DEPRECATED
      );
    return (
      s &&
        !Dp[p] &&
        ((Dp[p] = !0),
        console.warn(
          c(
            p,
            " has been deprecated since v" +
              s +
              " and will be removed in the near future"
          )
        )),
      i ? i(f, p, h) : !0
    );
  };
};
al.spelling = function (i) {
  return (s, l) => (console.warn(`${l} is likely a misspelling of ${i}`), !0);
};
function L1(n, i, s) {
  if (typeof n != "object")
    throw new Se("options must be an object", Se.ERR_BAD_OPTION_VALUE);
  const l = Object.keys(n);
  let c = l.length;
  for (; c-- > 0; ) {
    const f = l[c],
      p = i[f];
    if (p) {
      const h = n[f],
        v = h === void 0 || p(h, f, n);
      if (v !== !0)
        throw new Se("option " + f + " must be " + v, Se.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0) throw new Se("Unknown option " + f, Se.ERR_BAD_OPTION);
  }
}
const Mo = { assertOptions: L1, validators: al },
  dn = Mo.validators;
let pr = class {
  constructor(i) {
    (this.defaults = i || {}),
      (this.interceptors = { request: new _p(), response: new _p() });
  }
  async request(i, s) {
    try {
      return await this._request(i, s);
    } catch (l) {
      if (l instanceof Error) {
        let c = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(c)
          : (c = new Error());
        const f = c.stack ? c.stack.replace(/^.+\n/, "") : "";
        try {
          l.stack
            ? f &&
              !String(l.stack).endsWith(f.replace(/^.+\n.+\n/, "")) &&
              (l.stack +=
                `
` + f)
            : (l.stack = f);
        } catch {}
      }
      throw l;
    }
  }
  _request(i, s) {
    typeof i == "string" ? ((s = s || {}), (s.url = i)) : (s = i || {}),
      (s = gr(this.defaults, s));
    const { transitional: l, paramsSerializer: c, headers: f } = s;
    l !== void 0 &&
      Mo.assertOptions(
        l,
        {
          silentJSONParsing: dn.transitional(dn.boolean),
          forcedJSONParsing: dn.transitional(dn.boolean),
          clarifyTimeoutError: dn.transitional(dn.boolean),
        },
        !1
      ),
      c != null &&
        (T.isFunction(c)
          ? (s.paramsSerializer = { serialize: c })
          : Mo.assertOptions(
              c,
              { encode: dn.function, serialize: dn.function },
              !0
            )),
      s.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (s.allowAbsoluteUrls = !0)),
      Mo.assertOptions(
        s,
        {
          baseUrl: dn.spelling("baseURL"),
          withXsrfToken: dn.spelling("withXSRFToken"),
        },
        !0
      ),
      (s.method = (s.method || this.defaults.method || "get").toLowerCase());
    let p = f && T.merge(f.common, f[s.method]);
    f &&
      T.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (F) => {
          delete f[F];
        }
      ),
      (s.headers = Lt.concat(p, f));
    const h = [];
    let v = !0;
    this.interceptors.request.forEach(function (R) {
      (typeof R.runWhen == "function" && R.runWhen(s) === !1) ||
        ((v = v && R.synchronous), h.unshift(R.fulfilled, R.rejected));
    });
    const x = [];
    this.interceptors.response.forEach(function (R) {
      x.push(R.fulfilled, R.rejected);
    });
    let S,
      E = 0,
      A;
    if (!v) {
      const F = [Lp.bind(this), void 0];
      for (
        F.unshift(...h), F.push(...x), A = F.length, S = Promise.resolve(s);
        E < A;

      )
        S = S.then(F[E++], F[E++]);
      return S;
    }
    A = h.length;
    let B = s;
    for (E = 0; E < A; ) {
      const F = h[E++],
        R = h[E++];
      try {
        B = F(B);
      } catch (L) {
        R.call(this, L);
        break;
      }
    }
    try {
      S = Lp.call(this, B);
    } catch (F) {
      return Promise.reject(F);
    }
    for (E = 0, A = x.length; E < A; ) S = S.then(x[E++], x[E++]);
    return S;
  }
  getUri(i) {
    i = gr(this.defaults, i);
    const s = Kh(i.baseURL, i.url, i.allowAbsoluteUrls);
    return Vh(s, i.params, i.paramsSerializer);
  }
};
T.forEach(["delete", "get", "head", "options"], function (i) {
  pr.prototype[i] = function (s, l) {
    return this.request(
      gr(l || {}, { method: i, url: s, data: (l || {}).data })
    );
  };
});
T.forEach(["post", "put", "patch"], function (i) {
  function s(l) {
    return function (f, p, h) {
      return this.request(
        gr(h || {}, {
          method: i,
          headers: l ? { "Content-Type": "multipart/form-data" } : {},
          url: f,
          data: p,
        })
      );
    };
  }
  (pr.prototype[i] = s()), (pr.prototype[i + "Form"] = s(!0));
});
let D1 = class em {
  constructor(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function (f) {
      s = f;
    });
    const l = this;
    this.promise.then((c) => {
      if (!l._listeners) return;
      let f = l._listeners.length;
      for (; f-- > 0; ) l._listeners[f](c);
      l._listeners = null;
    }),
      (this.promise.then = (c) => {
        let f;
        const p = new Promise((h) => {
          l.subscribe(h), (f = h);
        }).then(c);
        return (
          (p.cancel = function () {
            l.unsubscribe(f);
          }),
          p
        );
      }),
      i(function (f, p, h) {
        l.reason || ((l.reason = new ui(f, p, h)), s(l.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : (this._listeners = [i]);
  }
  unsubscribe(i) {
    if (!this._listeners) return;
    const s = this._listeners.indexOf(i);
    s !== -1 && this._listeners.splice(s, 1);
  }
  toAbortSignal() {
    const i = new AbortController(),
      s = (l) => {
        i.abort(l);
      };
    return (
      this.subscribe(s),
      (i.signal.unsubscribe = () => this.unsubscribe(s)),
      i.signal
    );
  }
  static source() {
    let i;
    return {
      token: new em(function (c) {
        i = c;
      }),
      cancel: i,
    };
  }
};
function j1(n) {
  return function (s) {
    return n.apply(null, s);
  };
}
function z1(n) {
  return T.isObject(n) && n.isAxiosError === !0;
}
const Na = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Na).forEach(([n, i]) => {
  Na[i] = n;
});
function tm(n) {
  const i = new pr(n),
    s = Fh(pr.prototype.request, i);
  return (
    T.extend(s, pr.prototype, i, { allOwnKeys: !0 }),
    T.extend(s, i, null, { allOwnKeys: !0 }),
    (s.create = function (c) {
      return tm(gr(n, c));
    }),
    s
  );
}
const Je = tm(ps);
Je.Axios = pr;
Je.CanceledError = ui;
Je.CancelToken = D1;
Je.isCancel = Qh;
Je.VERSION = Zh;
Je.toFormData = ll;
Je.AxiosError = Se;
Je.Cancel = Je.CanceledError;
Je.all = function (i) {
  return Promise.all(i);
};
Je.spread = j1;
Je.isAxiosError = z1;
Je.mergeConfig = gr;
Je.AxiosHeaders = Lt;
Je.formToJSON = (n) => Wh(T.isHTMLForm(n) ? new FormData(n) : n);
Je.getAdapter = Jh.getAdapter;
Je.HttpStatusCode = Na;
Je.default = Je;
const {
    Axios: Lw,
    AxiosError: Dw,
    CanceledError: jw,
    isCancel: zw,
    CancelToken: Iw,
    VERSION: Mw,
    all: $w,
    Cancel: Uw,
    isAxiosError: bw,
    spread: Bw,
    toFormData: Vw,
    AxiosHeaders: Hw,
    HttpStatusCode: Ww,
    formToJSON: Qw,
    getAdapter: qw,
    mergeConfig: Kw,
  } = Je,
  Ya = Je.create({
    baseURL: "https://api.upsell.co",
    headers: { "Content-Type": "application/json" },
  }),
  I1 = async (n) => {
    const { data: i } = await Ya.post("/ticimax/order", { phone: `90${n}` });
    return i.data;
  },
  M1 = () => xh({ mutationFn: I1 }),
  $1 = De.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme: n }) => n.spacing.sm};
  padding: 12px ${({ theme: n }) => n.spacing.md};
  border-radius: ${({ theme: n }) => n.borderRadius};
  font-family: ${({ theme: n }) => n.fonts.main};
  font-size: 16px;
  font-weight: 600;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:disabled {
    background-color: ${({ theme: n }) => n.colors.mediumGray};
    color: ${({ theme: n }) => n.colors.white};
    cursor: not-allowed;
    opacity: 0.6;
    box-shadow: none;
  }

  ${({ $variant: n = "primary", theme: i }) =>
    n === "primary" &&
    ss`
      background-color: ${i.colors.primary};
      color: ${i.colors.white};
      border-color: ${i.colors.primary};

      &:not(:disabled):hover {
        /*
         * DEĞİŞİKLİK BURADA:
         * Sabit bir renk (#c42a33) yerine, mevcut arkaplan renginin
         * parlaklığını %90'a düşürerek dinamik bir koyulaştırma efekti yapıyoruz.
         * Ayrıca transform ve box-shadow efektlerini de koruyoruz.
        */
        filter: brightness(90%);
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    `}

  ${({ $variant: n = "primary", theme: i }) =>
    n === "secondary" &&
    ss`
      background-color: ${i.colors.white};
      color: ${i.colors.black};
      border-color: ${i.colors.mediumGray};

      &:not(:disabled):hover {
        background-color: ${i.colors.lightGray};
        border-color: ${i.colors.mediumGray};
      }
    `}

  svg {
    width: 20px;
    height: 20px;
  }
`,
  ei = ({ children: n, icon: i, variant: s, ...l }) =>
    z.jsxs($1, { $variant: s, ...l, children: [i, n] }),
  U1 = De.div`
  position: relative;
  width: 100%;
`,
  nm = De.div`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  color: ${({ theme: n }) => n.colors.mediumGray};
  display: flex;
  align-items: center;

  svg {
    width: 22px;
    height: 22px;
  }
`,
  b1 = De.input`
  width: 100%;
  padding: 12px 14px 12px ${({ $icon: n }) => (n ? "44px" : "14px")};
  border-radius: ${({ theme: n }) => n.borderRadius};
  border: 2px solid
    ${({ theme: n, $hasError: i }) =>
      i ? n.colors.error : n.colors.lightGray};
  font-size: 16px;
  font-family: ${({ theme: n }) => n.fonts.main};
  background-color: #f9f9f9;
  color: ${({ theme: n }) => n.colors.secondary};
  transition:
    border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;

  &::placeholder {
    color: ${({ theme: n }) => n.colors.mediumGray};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme: n, $hasError: i }) =>
      i ? n.colors.error : n.colors.primary};
    background-color: ${({ theme: n }) => n.colors.white};
    ~ ${nm} {
      color: ${({ theme: n }) => n.colors.primary};
    }
  }
`,
  rm = ae.forwardRef(({ hasError: n, icon: i, ...s }, l) =>
    z.jsxs(U1, {
      children: [
        z.jsx(b1, { ref: l, $icon: i, $hasError: n, ...s }),
        i && z.jsx(nm, { children: i }),
      ],
    })
  );
var B1 = bp(),
  da,
  jp;
function V1() {
  if (jp) return da;
  jp = 1;
  var n = "Expected a function",
    i = NaN,
    s = "[object Symbol]",
    l = /^\s+|\s+$/g,
    c = /^[-+]0x[0-9a-f]+$/i,
    f = /^0b[01]+$/i,
    p = /^0o[0-7]+$/i,
    h = parseInt,
    v = typeof Eo == "object" && Eo && Eo.Object === Object && Eo,
    x = typeof self == "object" && self && self.Object === Object && self,
    S = v || x || Function("return this")(),
    E = Object.prototype,
    A = E.toString,
    B = Math.max,
    F = Math.min,
    R = function () {
      return S.Date.now();
    };
  function L(D, W, Q) {
    var Ce,
      _e,
      Ie,
      je,
      oe,
      ce,
      ke = 0,
      Fe = !1,
      Re = !1,
      xe = !0;
    if (typeof D != "function") throw new TypeError(n);
    (W = K(W) || 0),
      X(Q) &&
        ((Fe = !!Q.leading),
        (Re = "maxWait" in Q),
        (Ie = Re ? B(K(Q.maxWait) || 0, W) : Ie),
        (xe = "trailing" in Q ? !!Q.trailing : xe));
    function H(ue) {
      var he = Ce,
        we = _e;
      return (Ce = _e = void 0), (ke = ue), (je = D.apply(we, he)), je;
    }
    function ee(ue) {
      return (ke = ue), (oe = setTimeout(j, W)), Fe ? H(ue) : je;
    }
    function G(ue) {
      var he = ue - ce,
        we = ue - ke,
        Ve = W - he;
      return Re ? F(Ve, Ie - we) : Ve;
    }
    function k(ue) {
      var he = ue - ce,
        we = ue - ke;
      return ce === void 0 || he >= W || he < 0 || (Re && we >= Ie);
    }
    function j() {
      var ue = R();
      if (k(ue)) return pe(ue);
      oe = setTimeout(j, G(ue));
    }
    function pe(ue) {
      return (oe = void 0), xe && Ce ? H(ue) : ((Ce = _e = void 0), je);
    }
    function ye() {
      oe !== void 0 && clearTimeout(oe), (ke = 0), (Ce = ce = _e = oe = void 0);
    }
    function ve() {
      return oe === void 0 ? je : pe(R());
    }
    function ge() {
      var ue = R(),
        he = k(ue);
      if (((Ce = arguments), (_e = this), (ce = ue), he)) {
        if (oe === void 0) return ee(ce);
        if (Re) return (oe = setTimeout(j, W)), H(ce);
      }
      return oe === void 0 && (oe = setTimeout(j, W)), je;
    }
    return (ge.cancel = ye), (ge.flush = ve), ge;
  }
  function X(D) {
    var W = typeof D;
    return !!D && (W == "object" || W == "function");
  }
  function $(D) {
    return !!D && typeof D == "object";
  }
  function Y(D) {
    return typeof D == "symbol" || ($(D) && A.call(D) == s);
  }
  function K(D) {
    if (typeof D == "number") return D;
    if (Y(D)) return i;
    if (X(D)) {
      var W = typeof D.valueOf == "function" ? D.valueOf() : D;
      D = X(W) ? W + "" : W;
    }
    if (typeof D != "string") return D === 0 ? D : +D;
    D = D.replace(l, "");
    var Q = f.test(D);
    return Q || p.test(D) ? h(D.slice(2), Q ? 2 : 8) : c.test(D) ? i : +D;
  }
  return (da = L), da;
}
V1();
var H1 = typeof window < "u" ? Me.useLayoutEffect : Me.useEffect;
function W1(n, i, s, l) {
  const c = Me.useRef(i);
  H1(() => {
    c.current = i;
  }, [i]),
    Me.useEffect(() => {
      const f = window;
      if (!(f && f.addEventListener)) return;
      const p = (h) => {
        c.current(h);
      };
      return (
        f.addEventListener(n, p, l),
        () => {
          f.removeEventListener(n, p, l);
        }
      );
    }, [n, s, l]);
}
function Q1(n, i, s = "mousedown") {
  W1(s, (l) => {
    const c = l.target;
    if (!c || !c.isConnected) return;
    (Array.isArray(n)
      ? n.every((p) => p.current && !p.current.contains(c))
      : n.current && !n.current.contains(c)) && i(l);
  });
}
const q1 = Ua`
  from { opacity: 0; }
  to { opacity: 1; }
`,
  K1 = Ua`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,
  G1 = De.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  animation: ${q1} 0.3s ease-out;
`,
  X1 = De.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  background: #fff;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    position: absolute;
    width: 120px;
    height: 300%;
    /* DEĞİŞİKLİK: Sabit renkler yerine temadan gelen dinamik renkleri kullanıyoruz */
    background-image: linear-gradient(
      180deg,
      ${({ theme: n }) => n.colors.gradientStart},
      ${({ theme: n }) => n.colors.gradientEnd}
    );
    animation: ${K1} 5s linear infinite;
    transition: all 0.2s linear;
  }

  &::after {
    content: '';
    position: absolute;
    background: #fff;
    inset: 5px;
    border-radius: 15px;
  }
`,
  Y1 = De.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: ${({ theme: n }) => n.spacing.xl};
  color: white;
`,
  J1 = De.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #000;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.2s ease;
  color: #000;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`,
  im = ({ isOpen: n, onClose: i, children: s }) => {
    const l = Me.useRef(null);
    return (
      Q1(l, i),
      Me.useEffect(() => {
        const c = (f) => {
          f.key === "Escape" && i();
        };
        return (
          n && document.addEventListener("keydown", c),
          () => {
            document.removeEventListener("keydown", c);
          }
        );
      }, [n, i]),
      n
        ? B1.createPortal(
            z.jsx(G1, {
              children: z.jsxs(X1, {
                ref: l,
                children: [
                  z.jsx(J1, { onClick: i, children: "×" }),
                  z.jsx(Y1, { children: s }),
                ],
              }),
            }),
            document.body
          )
        : null
    );
  },
  Z1 = Ua`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  ew = De.div`
  border: 4px solid ${({ theme: n }) => n.colors.lightGray};
  border-top: 4px solid ${({ theme: n }) => n.colors.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${Z1} 1s linear infinite;
  margin: 0 auto; /* Ortalamak için eklendi */
`,
  sm = () => z.jsx(ew, {});
function On() {
  return (
    (On = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var i = 1; i < arguments.length; i++) {
            var s = arguments[i];
            for (var l in s)
              Object.prototype.hasOwnProperty.call(s, l) && (n[l] = s[l]);
          }
          return n;
        }),
    On.apply(this, arguments)
  );
}
function tw(n, i) {
  if (n == null) return {};
  var s = {},
    l = Object.keys(n),
    c,
    f;
  for (f = 0; f < l.length; f++)
    (c = l[f]), !(i.indexOf(c) >= 0) && (s[c] = n[c]);
  return s;
}
function vr(n, i) {
  if (n == null) return {};
  var s = tw(n, i),
    l,
    c;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(n);
    for (c = 0; c < f.length; c++)
      (l = f[c]),
        !(i.indexOf(l) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(n, l) &&
          (s[l] = n[l]);
  }
  return s;
}
var nw = ["size", "color"];
function fr(n) {
  var i = n.size,
    s = i === void 0 ? 24 : i,
    l = n.color,
    c = l === void 0 ? "currentColor" : l,
    f = vr(n, nw);
  return ae.createElement(
    "svg",
    On(
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-alert-circle",
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        stroke: c,
        strokeWidth: "2",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      f
    ),
    ae.createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none",
    }),
    ae.createElement("circle", { cx: "12", cy: "12", r: "9" }),
    ae.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
    ae.createElement("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
  );
}
var rw = ["size", "color"];
function iw(n) {
  var i = n.size,
    s = i === void 0 ? 24 : i,
    l = n.color,
    c = l === void 0 ? "currentColor" : l,
    f = vr(n, rw);
  return ae.createElement(
    "svg",
    On(
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-bell",
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        stroke: c,
        strokeWidth: "2",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      f
    ),
    ae.createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none",
    }),
    ae.createElement("path", {
      d: "M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6",
    }),
    ae.createElement("path", { d: "M9 17v1a3 3 0 0 0 6 0v-1" })
  );
}
var sw = ["size", "color"];
function ow(n) {
  var i = n.size,
    s = i === void 0 ? 24 : i,
    l = n.color,
    c = l === void 0 ? "currentColor" : l,
    f = vr(n, sw);
  return ae.createElement(
    "svg",
    On(
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-check",
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        stroke: c,
        strokeWidth: "2",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      f
    ),
    ae.createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none",
    }),
    ae.createElement("path", { d: "M5 12l5 5l10 -10" })
  );
}
var lw = ["size", "color"];
function uw(n) {
  var i = n.size,
    s = i === void 0 ? 24 : i,
    l = n.color,
    c = l === void 0 ? "currentColor" : l,
    f = vr(n, lw);
  return ae.createElement(
    "svg",
    On(
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-mail",
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        stroke: c,
        strokeWidth: "2",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      f
    ),
    ae.createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none",
    }),
    ae.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2",
    }),
    ae.createElement("polyline", { points: "3 7 12 13 21 7" })
  );
}
var aw = ["size", "color"];
function om(n) {
  var i = n.size,
    s = i === void 0 ? 24 : i,
    l = n.color,
    c = l === void 0 ? "currentColor" : l,
    f = vr(n, aw);
  return ae.createElement(
    "svg",
    On(
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-phone",
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        stroke: c,
        strokeWidth: "2",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      f
    ),
    ae.createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none",
    }),
    ae.createElement("path", {
      d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",
    })
  );
}
var cw = ["size", "color"];
function fw(n) {
  var i = n.size,
    s = i === void 0 ? 24 : i,
    l = n.color,
    c = l === void 0 ? "currentColor" : l,
    f = vr(n, cw);
  return ae.createElement(
    "svg",
    On(
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-search",
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        stroke: c,
        strokeWidth: "2",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      f
    ),
    ae.createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none",
    }),
    ae.createElement("circle", { cx: "10", cy: "10", r: "7" }),
    ae.createElement("line", { x1: "21", y1: "21", x2: "15", y2: "15" })
  );
}
var dw = ["size", "color"];
function zp(n) {
  var i = n.size,
    s = i === void 0 ? 24 : i,
    l = n.color,
    c = l === void 0 ? "currentColor" : l,
    f = vr(n, dw);
  return ae.createElement(
    "svg",
    On(
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-truck",
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        stroke: c,
        strokeWidth: "2",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      f
    ),
    ae.createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none",
    }),
    ae.createElement("circle", { cx: "7", cy: "17", r: "2" }),
    ae.createElement("circle", { cx: "17", cy: "17", r: "2" }),
    ae.createElement("path", {
      d: "M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5",
    })
  );
}
const pw = De.div`
  text-align: center;
`,
  Ip = De.h2`
  font-size: 24px;
  /* İkon ve açıklama eklendiği için başlığın alt boşluğunu azaltıyoruz */
  margin-bottom: ${({ theme: n }) => n.spacing.sm};
  color: ${({ theme: n }) => n.colors.secondary};
  font-weight: 700;
`,
  hw = De.p`
  /* Üst boşluğu kaldırıp alt boşluğu artırıyoruz */
  margin-top: 0;
  margin-bottom: ${({ theme: n }) => n.spacing.xl};
  color: #6c757d;
  font-size: 16px;
  line-height: 1.5;
`,
  Mp = De.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: ${({ theme: n }) => n.spacing.md};
`,
  Po = De.div`
  flex-grow: 1;
  height: 1px;
  background-color: #ddd;
`,
  $p = De.div`
  border: 2px solid ${({ theme: n }) => n.colors.primary};
  border-radius: 50%;
  padding: ${({ theme: n }) => n.spacing.sm};
  margin: 0 ${({ theme: n }) => n.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme: n }) => n.colors.secondary};
`,
  To = De.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme: n }) => n.spacing.sm};
  color: ${({ theme: n }) => n.colors.error};
  font-size: 14px;
  margin-top: ${({ theme: n }) => n.spacing.sm};
  min-height: 20px;
`,
  mw = De.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme: n }) => n.spacing.sm};
  margin: ${({ theme: n }) => n.spacing.lg} 0;
  text-align: left;

  & > input {
    margin-top: 3px;
    width: auto;
    height: auto;
  }
  & > label {
    font-size: 12px;
    line-height: 1.4;
    color: #6c757d;
  }
`,
  yw = De.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
  margin-top: ${({ theme: n }) => n.spacing.md};
`,
  Jr = De.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: ${({ theme: n }) => n.borderRadius};
  font-size: 15px;
  color: #000;

  & > span:first-child {
    font-weight: 600;
    color: #495057;
  }
`,
  gw = De.a`
  color: ${({ theme: n }) => n.colors.primary};
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`,
  Up = De.div`
  margin-top: ${({ theme: n }) => n.spacing.lg};
`,
  vw = ({ details: n }) =>
    z.jsxs(yw, {
      children: [
        z.jsxs(Jr, {
          children: [
            z.jsx("span", { children: "Sipariş No:" }),
            z.jsx("span", { children: n.siparisNo || "-" }),
          ],
        }),
        z.jsxs(Jr, {
          children: [
            z.jsx("span", { children: "Sipariş Tarihi:" }),
            z.jsx("span", {
              children:
                new Date(n.siparisTarihi).toLocaleDateString("tr-TR") || "-",
            }),
          ],
        }),
        z.jsxs(Jr, {
          children: [
            z.jsx("span", { children: "Sipariş Durumu:" }),
            z.jsx("span", { children: n.siparisDurumu || "-" }),
          ],
        }),
        z.jsxs(Jr, {
          children: [
            z.jsx("span", { children: "Kargo Takip No:" }),
            z.jsx("span", { children: n.kargoTakipNo || "-" }),
          ],
        }),
        z.jsxs(Jr, {
          children: [
            z.jsx("span", { children: "Kargo Firması:" }),
            z.jsx("span", { children: n.kargoFirmaTanim || "-" }),
          ],
        }),
        z.jsxs(Jr, {
          children: [
            z.jsx("span", { children: "Kargo Takip Linki:" }),
            z.jsx("span", {
              children: n.kargoTakipLink
                ? z.jsx(gw, {
                    href: n.kargoTakipLink,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Kargoyu Görüntüle",
                  })
                : "-",
            }),
          ],
        }),
      ],
    }),
  ww = ({ isOpen: n, onClose: i }) => {
    const {
        register: s,
        handleSubmit: l,
        formState: { errors: c },
      } = Ah(),
      {
        mutate: f,
        data: p,
        isPending: h,
        isSuccess: v,
        isError: x,
        error: S,
        reset: E,
      } = M1(),
      A = () => {
        E(), i();
      },
      B = (R) => {
        f(R.phone);
      },
      F = () =>
        h
          ? z.jsx(sm, {})
          : x
          ? z.jsxs(To, {
              children: [
                z.jsx(fr, { size: 18 }),
                " Bir hata oluştu: ",
                S.message,
              ],
            })
          : v
          ? p
            ? z.jsxs(z.Fragment, {
                children: [
                  z.jsx(Ip, { children: "Sipariş Detayları" }),
                  z.jsxs(Mp, {
                    children: [
                      z.jsx(Po, {}),
                      z.jsx($p, {
                        children: z.jsx(zp, { size: 32, strokeWidth: 1.5 }),
                      }),
                      z.jsx(Po, {}),
                    ],
                  }),
                  z.jsx(vw, { details: p }),
                  z.jsx(Up, {
                    children: z.jsx(ei, {
                      onClick: () => E(),
                      children: "Yeni Sorgu Yap",
                    }),
                  }),
                ],
              })
            : z.jsxs(z.Fragment, {
                children: [
                  z.jsxs(To, {
                    children: [
                      z.jsx(fr, { size: 18 }),
                      " Bu telefon numarasına ait bir sipariş bulunamadı.",
                    ],
                  }),
                  z.jsx(Up, {
                    children: z.jsx(ei, {
                      onClick: () => E(),
                      children: "Yeni Sorgu Yap",
                    }),
                  }),
                ],
              })
          : z.jsxs("form", {
              onSubmit: l(B),
              children: [
                z.jsx(Ip, { children: "Siparişini Sorgula" }),
                z.jsxs(Mp, {
                  children: [
                    z.jsx(Po, {}),
                    z.jsx($p, {
                      children: z.jsx(zp, { size: 32, strokeWidth: 1.5 }),
                    }),
                    z.jsx(Po, {}),
                  ],
                }),
                z.jsx(hw, {
                  children:
                    "Sipariş durumunu ve kargo detaylarını görmek için telefon numaranı gir.",
                }),
                z.jsx(rm, {
                  icon: z.jsx(om, { size: 22, strokeWidth: 1.5 }),
                  placeholder: "5XXXXXXXXX",
                  maxLength: 10,
                  hasError: !!c.phone,
                  ...s("phone", {
                    required: "Telefon numarası zorunludur.",
                    pattern: {
                      value: /^\d{10}$/,
                      message:
                        "Lütfen geçerli bir 10 haneli telefon numarası girin.",
                    },
                  }),
                }),
                c.phone &&
                  z.jsxs(To, {
                    children: [z.jsx(fr, { size: 18 }), " ", c.phone.message],
                  }),
                z.jsxs(mw, {
                  children: [
                    z.jsx("input", {
                      type: "checkbox",
                      id: "kvkkCheck",
                      ...s("kvkk", {
                        required: "Lütfen onay kutusunu işaretleyin.",
                      }),
                    }),
                    z.jsx("label", {
                      htmlFor: "kvkkCheck",
                      children:
                        "Kampanya, duyuru ve bilgilendirmelerden haberdar olmak istediğimi belirtiyorum.",
                    }),
                  ],
                }),
                c.kvkk &&
                  z.jsxs(To, {
                    children: [z.jsx(fr, { size: 18 }), " ", c.kvkk.message],
                  }),
                z.jsx(ei, {
                  type: "submit",
                  disabled: h,
                  icon: z.jsx(fw, { size: 20, strokeWidth: 2 }),
                  children: "Sorgula",
                }),
              ],
            });
    return z.jsx(im, {
      isOpen: n,
      onClose: A,
      children: z.jsx(pw, { children: F() }),
    });
  },
  Sw = async (n) => {
    const { data: i } = await Ya.post("/phonesubscription/reminder", n);
    return i;
  },
  kw = () => xh({ mutationFn: Sw }),
  xw = De.div`
  text-align: center;
  width: 100%;
`,
  pa = De.h2`
  font-size: 22px;
  margin-bottom: ${({ theme: n }) => n.spacing.md};
  color: ${({ theme: n }) => n.colors.white};
  font-weight: 700;
`,
  ha = De.p`
  margin-bottom: ${({ theme: n }) => n.spacing.lg};
  color: ${({ theme: n }) => n.colors.lightGray};
  font-size: 15px;
  line-height: 1.5;
`,
  Ew = De.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
  margin-bottom: ${({ theme: n }) => n.spacing.lg};
`,
  Cw = De.button`
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  border: 2px solid
    ${({ theme: n, $isSelected: i }) => (i ? n.colors.primary : "#555")};
  background-color: ${({ theme: n, $isSelected: i }) =>
    i ? n.colors.primary : "transparent"};
  color: white;
  transition: all 0.2s ease;
  opacity: ${({ $isDisabled: n }) => (n ? 0.5 : 1)};
  cursor: ${({ $isDisabled: n }) => (n ? "not-allowed" : "pointer")};
  ${({ $isDisabled: n }) => n && "text-decoration: line-through;"}
  &:hover:not(:disabled) {
    border-color: ${({ theme: n }) => n.colors.primary};
  }
`,
  _w = De.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme: n }) => n.spacing.md};
`,
  Ow = De.div`
  background-color: ${({ theme: n }) => n.colors.success};
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,
  ma = De.p`
  color: ${({ theme: n }) => n.colors.error};
  font-size: 14px;
  margin-top: ${({ theme: n }) => n.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,
  Rw = ({ isOpen: n, onClose: i, product: s, channel: l }) => {
    const [c, f] = Me.useState(null),
      {
        register: p,
        handleSubmit: h,
        formState: { errors: v },
        reset: x,
      } = Ah(),
      {
        mutate: S,
        isPending: E,
        isSuccess: A,
        isError: B,
        error: F,
        reset: R,
      } = kw(),
      L = Me.useMemo(() => {
        if (!s?.productAssortmentList || !s.products) return [];
        const K = new Map();
        s.productAssortmentList.forEach((W) => {
          const Q = K.get(W.urunID) || [];
          K.set(W.urunID, [...Q, W]);
        });
        const D = [];
        return (
          K.forEach((W, Q) => {
            const Ce = s.products?.find((_e) => _e.id === Q);
            if (Ce) {
              const _e = W.sort(
                (Ie, je) => Ie.ekSecenekTipiSira - je.ekSecenekTipiSira
              ).map((Ie) => Ie.tanim);
              D.push({ urunID: Q, name: _e.join(" / "), stock: Ce.stokAdedi });
            }
          }),
          D
        );
      }, [s]),
      X = () => {
        R(), x(), f(null), i();
      },
      $ = (K) => {
        if (!s || !c) return;
        const D = L.find((W) => W.urunID === c);
        D &&
          S({
            contact: l === "phone" ? `90${K.contact}` : K.contact,
            productName: s.productName,
            productSlug: window.location.pathname,
            productId: D.urunID.toString(),
            productCardId: s.productId.toString(),
            variantInfo: D.name,
            hasVariant: !0,
          });
      },
      Y = () => {
        if (!s)
          return z.jsxs(ma, {
            children: [z.jsx(fr, { size: 18 }), " Ürün bilgisi bulunamadı."],
          });
        if (E) return z.jsx(sm, {});
        if (A)
          return z.jsxs(_w, {
            children: [
              z.jsx(Ow, { children: z.jsx(ow, { size: 40, strokeWidth: 2 }) }),
              z.jsx(pa, { children: "Talebiniz Alındı!" }),
              z.jsx(ha, {
                children:
                  "Seçtiğiniz ürün stoğa geldiğinde size haber vereceğiz.",
              }),
              z.jsx(ei, {
                onClick: X,
                variant: "secondary",
                children: "Kapat",
              }),
            ],
          });
        const K = L.filter((D) => D.stock === 0);
        return K.length === 0
          ? z.jsxs(z.Fragment, {
              children: [
                z.jsx(pa, { children: "Tüm Seçenekler Stokta!" }),
                z.jsx(ha, {
                  children:
                    "Bu ürüne ait stoğu tükenmiş bir seçenek bulunmamaktadır.",
                }),
                z.jsx(ei, {
                  onClick: X,
                  variant: "secondary",
                  children: "Kapat",
                }),
              ],
            })
          : z.jsxs("form", {
              onSubmit: h($),
              children: [
                z.jsx(pa, { children: "Stoğa Gelince Haber Ver" }),
                z.jsx(ha, {
                  children:
                    "Haber almak istediğiniz tükenen ürün seçeneğini seçin.",
                }),
                z.jsx(Ew, {
                  children: K.map((D) =>
                    z.jsx(
                      Cw,
                      {
                        type: "button",
                        $isSelected: c === D.urunID,
                        $isDisabled: !1,
                        onClick: () => f(D.urunID),
                        children: D.name,
                      },
                      D.urunID
                    )
                  ),
                }),
                B &&
                  z.jsxs(ma, {
                    children: [
                      z.jsx(fr, { size: 18 }),
                      F?.response?.data?.message || "Bir hata oluştu.",
                    ],
                  }),
                z.jsx(rm, {
                  icon:
                    l === "phone"
                      ? z.jsx(om, { size: 22, strokeWidth: 1.5 })
                      : z.jsx(uw, { size: 22, strokeWidth: 1.5 }),
                  placeholder:
                    l === "phone" ? "5XXXXXXXXX" : "E-posta Adresiniz",
                  type: l === "phone" ? "tel" : "email",
                  maxLength: l === "phone" ? 10 : void 0,
                  hasError: !!v.contact,
                  ...p("contact", {
                    required: "Bu alan zorunludur.",
                    pattern:
                      l === "phone"
                        ? {
                            value: /^\d{10}$/,
                            message:
                              "Geçerli bir 10 haneli telefon numarası girin.",
                          }
                        : {
                            value:
                              /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                            message: "Geçerli bir e-posta adresi girin.",
                          },
                  }),
                }),
                v.contact &&
                  z.jsxs(ma, {
                    children: [z.jsx(fr, { size: 18 }), " ", v.contact.message],
                  }),
                z.jsx(ei, {
                  style: { marginTop: "16px" },
                  type: "submit",
                  disabled: E || !c,
                  icon: z.jsx(iw, { size: 20, strokeWidth: 2 }),
                  children: "Bildirim İste",
                }),
              ],
            });
      };
    return z.jsx(im, {
      isOpen: n,
      onClose: X,
      children: z.jsx(xw, { children: Y() }),
    });
  },
  Pw = new jv();
function Tw() {
  const [n, i] = Me.useState(null),
    [s, l] = Me.useState(null),
    [c, f] = Me.useState(!1),
    [p, h] = Me.useState(!1);
  Me.useEffect(() => {
    Ya.get("/Shops")
      .then((x) => i(x.data.data))
      .catch((x) => {
        console.error("Dükkan verisi çekilemedi:", x),
          i({ mainColor: Gi.colors.primary, stockReminderUsageChannel: 3 });
      }),
      window.productDetailModel && l(window.productDetailModel);
  }, []);
  const v = Me.useMemo(
    () =>
      n
        ? {
            ...Gi,
            colors: {
              ...Gi.colors,
              primary: n.mainColor,
              gradientStart: n.mainColor,
              gradientEnd: Gi.colors.gradientEnd,
            },
          }
        : Gi,
    [n]
  );
  return (
    Me.useEffect(() => {
      if (!n || !s) return;
      const x = s.productVariantData?.some((R) => R.stokAdedi === 0),
        S = document.getElementById("upsell-ss-reminder");
      S && (x ? (S.style.display = "flex") : (S.style.display = "none"));
      const E = document.querySelectorAll(".upsell-ss"),
        A = document.querySelectorAll("#upsell-ss-reminder"),
        B = () => f(!0),
        F = () => h(!0);
      return (
        E.forEach((R) => R.addEventListener("click", B)),
        A.forEach((R) => R.addEventListener("click", F)),
        () => {
          E.forEach((R) => R.removeEventListener("click", B)),
            A.forEach((R) => R.removeEventListener("click", F));
        }
      );
    }, [n, s]),
    n
      ? z.jsx(Mv, {
          client: Pw,
          children: z.jsxs(lv, {
            theme: v,
            children: [
              z.jsx(fv, {}),
              z.jsx("button", {
                className: "upsell-ss",
                style: { margin: "20px", padding: "10px" },
                children: "Siparişimi Sorgula (Test)",
              }),
              z.jsx("button", {
                id: "upsell-ss-reminder",
                style: { margin: "20px", padding: "10px", display: "none" },
                children: "Stoğa Gelince Haber Ver (Test)",
              }),
              z.jsx(ww, { isOpen: c, onClose: () => f(!1) }),
              z.jsx(Rw, {
                isOpen: p,
                onClose: () => h(!1),
                product: s,
                channel:
                  n.stockReminderUsageChannel === 1 ||
                  n.stockReminderUsageChannel === 2
                    ? "phone"
                    : "email",
              }),
            ],
          }),
        })
      : null
  );
}
ag.createRoot(document.getElementById("root")).render(
  z.jsx(Me.StrictMode, { children: z.jsx(Tw, {}) })
);
