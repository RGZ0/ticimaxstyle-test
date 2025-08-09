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
  qi = {},
  Zu = { exports: {} },
  Re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ld;
function ng() {
  if (Ld) return Re;
  Ld = 1;
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
  function F(k) {
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
    A = Object.assign,
    R = {};
  function j(k, L, he) {
    (this.props = k),
      (this.context = L),
      (this.refs = R),
      (this.updater = he || B);
  }
  (j.prototype.isReactComponent = {}),
    (j.prototype.setState = function (k, L) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, k, L, "setState");
    }),
    (j.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate");
    });
  function X() {}
  X.prototype = j.prototype;
  function $(k, L, he) {
    (this.props = k),
      (this.context = L),
      (this.refs = R),
      (this.updater = he || B);
  }
  var G = ($.prototype = new X());
  (G.constructor = $), A(G, j.prototype), (G.isPureReactComponent = !0);
  var J = Array.isArray,
    z = Object.prototype.hasOwnProperty,
    q = { current: null },
    U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function pe(k, L, he) {
    var we,
      ke = {},
      Se = null,
      ae = null;
    if (L != null)
      for (we in (L.ref !== void 0 && (ae = L.ref),
      L.key !== void 0 && (Se = "" + L.key),
      L))
        z.call(L, we) && !U.hasOwnProperty(we) && (ke[we] = L[we]);
    var ye = arguments.length - 2;
    if (ye === 1) ke.children = he;
    else if (1 < ye) {
      for (var xe = Array(ye), Be = 0; Be < ye; Be++)
        xe[Be] = arguments[Be + 2];
      ke.children = xe;
    }
    if (k && k.defaultProps)
      for (we in ((ye = k.defaultProps), ye))
        ke[we] === void 0 && (ke[we] = ye[we]);
    return {
      $$typeof: n,
      type: k,
      key: Se,
      ref: ae,
      props: ke,
      _owner: q.current,
    };
  }
  function me(k, L) {
    return {
      $$typeof: n,
      type: k.type,
      key: L,
      ref: k.ref,
      props: k.props,
      _owner: k._owner,
    };
  }
  function Te(k) {
    return typeof k == "object" && k !== null && k.$$typeof === n;
  }
  function Ce(k) {
    var L = { "=": "=0", ":": "=2" };
    return (
      "$" +
      k.replace(/[=:]/g, function (he) {
        return L[he];
      })
    );
  }
  var ee = /\/+/g;
  function oe(k, L) {
    return typeof k == "object" && k !== null && k.key != null
      ? Ce("" + k.key)
      : L.toString(36);
  }
  function ve(k, L, he, we, ke) {
    var Se = typeof k;
    (Se === "undefined" || Se === "boolean") && (k = null);
    var ae = !1;
    if (k === null) ae = !0;
    else
      switch (Se) {
        case "string":
        case "number":
          ae = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case n:
            case i:
              ae = !0;
          }
      }
    if (ae)
      return (
        (ae = k),
        (ke = ke(ae)),
        (k = we === "" ? "." + oe(ae, 0) : we),
        J(ke)
          ? ((he = ""),
            k != null && (he = k.replace(ee, "$&/") + "/"),
            ve(ke, L, he, "", function (Be) {
              return Be;
            }))
          : ke != null &&
            (Te(ke) &&
              (ke = me(
                ke,
                he +
                  (!ke.key || (ae && ae.key === ke.key)
                    ? ""
                    : ("" + ke.key).replace(ee, "$&/") + "/") +
                  k
              )),
            L.push(ke)),
        1
      );
    if (((ae = 0), (we = we === "" ? "." : we + ":"), J(k)))
      for (var ye = 0; ye < k.length; ye++) {
        Se = k[ye];
        var xe = we + oe(Se, ye);
        ae += ve(Se, L, he, xe, ke);
      }
    else if (((xe = F(k)), typeof xe == "function"))
      for (k = xe.call(k), ye = 0; !(Se = k.next()).done; )
        (Se = Se.value),
          (xe = we + oe(Se, ye++)),
          (ae += ve(Se, L, he, xe, ke));
    else if (Se === "object")
      throw (
        ((L = String(k)),
        Error(
          "Objects are not valid as a React child (found: " +
            (L === "[object Object]"
              ? "object with keys {" + Object.keys(k).join(", ") + "}"
              : L) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return ae;
  }
  function Le(k, L, he) {
    if (k == null) return k;
    var we = [],
      ke = 0;
    return (
      ve(k, we, "", "", function (Se) {
        return L.call(he, Se, ke++);
      }),
      we
    );
  }
  function Pe(k) {
    if (k._status === -1) {
      var L = k._result;
      (L = L()),
        L.then(
          function (he) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 1), (k._result = he));
          },
          function (he) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 2), (k._result = he));
          }
        ),
        k._status === -1 && ((k._status = 0), (k._result = L));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var _e = { current: null },
    W = { transition: null },
    te = {
      ReactCurrentDispatcher: _e,
      ReactCurrentBatchConfig: W,
      ReactCurrentOwner: q,
    };
  function K() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Re.Children = {
      map: Le,
      forEach: function (k, L, he) {
        Le(
          k,
          function () {
            L.apply(this, arguments);
          },
          he
        );
      },
      count: function (k) {
        var L = 0;
        return (
          Le(k, function () {
            L++;
          }),
          L
        );
      },
      toArray: function (k) {
        return (
          Le(k, function (L) {
            return L;
          }) || []
        );
      },
      only: function (k) {
        if (!Te(k))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return k;
      },
    }),
    (Re.Component = j),
    (Re.Fragment = s),
    (Re.Profiler = c),
    (Re.PureComponent = $),
    (Re.StrictMode = l),
    (Re.Suspense = v),
    (Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = te),
    (Re.act = K),
    (Re.cloneElement = function (k, L, he) {
      if (k == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            k +
            "."
        );
      var we = A({}, k.props),
        ke = k.key,
        Se = k.ref,
        ae = k._owner;
      if (L != null) {
        if (
          (L.ref !== void 0 && ((Se = L.ref), (ae = q.current)),
          L.key !== void 0 && (ke = "" + L.key),
          k.type && k.type.defaultProps)
        )
          var ye = k.type.defaultProps;
        for (xe in L)
          z.call(L, xe) &&
            !U.hasOwnProperty(xe) &&
            (we[xe] = L[xe] === void 0 && ye !== void 0 ? ye[xe] : L[xe]);
      }
      var xe = arguments.length - 2;
      if (xe === 1) we.children = he;
      else if (1 < xe) {
        ye = Array(xe);
        for (var Be = 0; Be < xe; Be++) ye[Be] = arguments[Be + 2];
        we.children = ye;
      }
      return {
        $$typeof: n,
        type: k.type,
        key: ke,
        ref: Se,
        props: we,
        _owner: ae,
      };
    }),
    (Re.createContext = function (k) {
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
    (Re.createElement = pe),
    (Re.createFactory = function (k) {
      var L = pe.bind(null, k);
      return (L.type = k), L;
    }),
    (Re.createRef = function () {
      return { current: null };
    }),
    (Re.forwardRef = function (k) {
      return { $$typeof: h, render: k };
    }),
    (Re.isValidElement = Te),
    (Re.lazy = function (k) {
      return { $$typeof: S, _payload: { _status: -1, _result: k }, _init: Pe };
    }),
    (Re.memo = function (k, L) {
      return { $$typeof: x, type: k, compare: L === void 0 ? null : L };
    }),
    (Re.startTransition = function (k) {
      var L = W.transition;
      W.transition = {};
      try {
        k();
      } finally {
        W.transition = L;
      }
    }),
    (Re.unstable_act = K),
    (Re.useCallback = function (k, L) {
      return _e.current.useCallback(k, L);
    }),
    (Re.useContext = function (k) {
      return _e.current.useContext(k);
    }),
    (Re.useDebugValue = function () {}),
    (Re.useDeferredValue = function (k) {
      return _e.current.useDeferredValue(k);
    }),
    (Re.useEffect = function (k, L) {
      return _e.current.useEffect(k, L);
    }),
    (Re.useId = function () {
      return _e.current.useId();
    }),
    (Re.useImperativeHandle = function (k, L, he) {
      return _e.current.useImperativeHandle(k, L, he);
    }),
    (Re.useInsertionEffect = function (k, L) {
      return _e.current.useInsertionEffect(k, L);
    }),
    (Re.useLayoutEffect = function (k, L) {
      return _e.current.useLayoutEffect(k, L);
    }),
    (Re.useMemo = function (k, L) {
      return _e.current.useMemo(k, L);
    }),
    (Re.useReducer = function (k, L, he) {
      return _e.current.useReducer(k, L, he);
    }),
    (Re.useRef = function (k) {
      return _e.current.useRef(k);
    }),
    (Re.useState = function (k) {
      return _e.current.useState(k);
    }),
    (Re.useSyncExternalStore = function (k, L, he) {
      return _e.current.useSyncExternalStore(k, L, he);
    }),
    (Re.useTransition = function () {
      return _e.current.useTransition();
    }),
    (Re.version = "18.3.1"),
    Re
  );
}
var Dd;
function Aa() {
  return Dd || ((Dd = 1), (Zu.exports = ng())), Zu.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zd;
function rg() {
  if (zd) return qi;
  zd = 1;
  var n = Aa(),
    i = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(h, v, x) {
    var S,
      E = {},
      F = null,
      B = null;
    x !== void 0 && (F = "" + x),
      v.key !== void 0 && (F = "" + v.key),
      v.ref !== void 0 && (B = v.ref);
    for (S in v) l.call(v, S) && !f.hasOwnProperty(S) && (E[S] = v[S]);
    if (h && h.defaultProps)
      for (S in ((v = h.defaultProps), v)) E[S] === void 0 && (E[S] = v[S]);
    return {
      $$typeof: i,
      type: h,
      key: F,
      ref: B,
      props: E,
      _owner: c.current,
    };
  }
  return (qi.Fragment = s), (qi.jsx = p), (qi.jsxs = p), qi;
}
var Id;
function ig() {
  return Id || ((Id = 1), (Ju.exports = rg())), Ju.exports;
}
var D = ig(),
  Ie = Aa();
const ce = tg(Ie);
var Co = {},
  ea = { exports: {} },
  Ft = {},
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
 */ var Md;
function sg() {
  return (
    Md ||
      ((Md = 1),
      (function (n) {
        function i(W, te) {
          var K = W.length;
          W.push(te);
          e: for (; 0 < K; ) {
            var k = (K - 1) >>> 1,
              L = W[k];
            if (0 < c(L, te)) (W[k] = te), (W[K] = L), (K = k);
            else break e;
          }
        }
        function s(W) {
          return W.length === 0 ? null : W[0];
        }
        function l(W) {
          if (W.length === 0) return null;
          var te = W[0],
            K = W.pop();
          if (K !== te) {
            W[0] = K;
            e: for (var k = 0, L = W.length, he = L >>> 1; k < he; ) {
              var we = 2 * (k + 1) - 1,
                ke = W[we],
                Se = we + 1,
                ae = W[Se];
              if (0 > c(ke, K))
                Se < L && 0 > c(ae, ke)
                  ? ((W[k] = ae), (W[Se] = K), (k = Se))
                  : ((W[k] = ke), (W[we] = K), (k = we));
              else if (Se < L && 0 > c(ae, K))
                (W[k] = ae), (W[Se] = K), (k = Se);
              else break e;
            }
          }
          return te;
        }
        function c(W, te) {
          var K = W.sortIndex - te.sortIndex;
          return K !== 0 ? K : W.id - te.id;
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
          F = 3,
          B = !1,
          A = !1,
          R = !1,
          j = typeof setTimeout == "function" ? setTimeout : null,
          X = typeof clearTimeout == "function" ? clearTimeout : null,
          $ = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function G(W) {
          for (var te = s(x); te !== null; ) {
            if (te.callback === null) l(x);
            else if (te.startTime <= W)
              l(x), (te.sortIndex = te.expirationTime), i(v, te);
            else break;
            te = s(x);
          }
        }
        function J(W) {
          if (((R = !1), G(W), !A))
            if (s(v) !== null) (A = !0), Pe(z);
            else {
              var te = s(x);
              te !== null && _e(J, te.startTime - W);
            }
        }
        function z(W, te) {
          (A = !1), R && ((R = !1), X(pe), (pe = -1)), (B = !0);
          var K = F;
          try {
            for (
              G(te), E = s(v);
              E !== null && (!(E.expirationTime > te) || (W && !Ce()));

            ) {
              var k = E.callback;
              if (typeof k == "function") {
                (E.callback = null), (F = E.priorityLevel);
                var L = k(E.expirationTime <= te);
                (te = n.unstable_now()),
                  typeof L == "function"
                    ? (E.callback = L)
                    : E === s(v) && l(v),
                  G(te);
              } else l(v);
              E = s(v);
            }
            if (E !== null) var he = !0;
            else {
              var we = s(x);
              we !== null && _e(J, we.startTime - te), (he = !1);
            }
            return he;
          } finally {
            (E = null), (F = K), (B = !1);
          }
        }
        var q = !1,
          U = null,
          pe = -1,
          me = 5,
          Te = -1;
        function Ce() {
          return !(n.unstable_now() - Te < me);
        }
        function ee() {
          if (U !== null) {
            var W = n.unstable_now();
            Te = W;
            var te = !0;
            try {
              te = U(!0, W);
            } finally {
              te ? oe() : ((q = !1), (U = null));
            }
          } else q = !1;
        }
        var oe;
        if (typeof $ == "function")
          oe = function () {
            $(ee);
          };
        else if (typeof MessageChannel < "u") {
          var ve = new MessageChannel(),
            Le = ve.port2;
          (ve.port1.onmessage = ee),
            (oe = function () {
              Le.postMessage(null);
            });
        } else
          oe = function () {
            j(ee, 0);
          };
        function Pe(W) {
          (U = W), q || ((q = !0), oe());
        }
        function _e(W, te) {
          pe = j(function () {
            W(n.unstable_now());
          }, te);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (W) {
            W.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            A || B || ((A = !0), Pe(z));
          }),
          (n.unstable_forceFrameRate = function (W) {
            0 > W || 125 < W
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (me = 0 < W ? Math.floor(1e3 / W) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return F;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return s(v);
          }),
          (n.unstable_next = function (W) {
            switch (F) {
              case 1:
              case 2:
              case 3:
                var te = 3;
                break;
              default:
                te = F;
            }
            var K = F;
            F = te;
            try {
              return W();
            } finally {
              F = K;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (W, te) {
            switch (W) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                W = 3;
            }
            var K = F;
            F = W;
            try {
              return te();
            } finally {
              F = K;
            }
          }),
          (n.unstable_scheduleCallback = function (W, te, K) {
            var k = n.unstable_now();
            switch (
              (typeof K == "object" && K !== null
                ? ((K = K.delay),
                  (K = typeof K == "number" && 0 < K ? k + K : k))
                : (K = k),
              W)
            ) {
              case 1:
                var L = -1;
                break;
              case 2:
                L = 250;
                break;
              case 5:
                L = 1073741823;
                break;
              case 4:
                L = 1e4;
                break;
              default:
                L = 5e3;
            }
            return (
              (L = K + L),
              (W = {
                id: S++,
                callback: te,
                priorityLevel: W,
                startTime: K,
                expirationTime: L,
                sortIndex: -1,
              }),
              K > k
                ? ((W.sortIndex = K),
                  i(x, W),
                  s(v) === null &&
                    W === s(x) &&
                    (R ? (X(pe), (pe = -1)) : (R = !0), _e(J, K - k)))
                : ((W.sortIndex = L), i(v, W), A || B || ((A = !0), Pe(z))),
              W
            );
          }),
          (n.unstable_shouldYield = Ce),
          (n.unstable_wrapCallback = function (W) {
            var te = F;
            return function () {
              var K = F;
              F = te;
              try {
                return W.apply(this, arguments);
              } finally {
                F = K;
              }
            };
          });
      })(na)),
    na
  );
}
var $d;
function og() {
  return $d || (($d = 1), (ta.exports = sg())), ta.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ud;
function lg() {
  if (Ud) return Ft;
  Ud = 1;
  var n = Aa(),
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
  function F(e) {
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
  function A(e, t, r, o) {
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
  var j = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      j[e] = new R(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      j[t] = new R(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      j[e] = new R(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      j[e] = new R(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        j[e] = new R(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      j[e] = new R(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      j[e] = new R(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      j[e] = new R(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      j[e] = new R(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var X = /[\-:]([a-z])/g;
  function $(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(X, $);
      j[t] = new R(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(X, $);
        j[t] = new R(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(X, $);
      j[t] = new R(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      j[e] = new R(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (j.xlinkHref = new R(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      j[e] = new R(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function G(e, t, r, o) {
    var u = j.hasOwnProperty(t) ? j[t] : null;
    (u !== null
      ? u.type !== 0
      : o ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (A(t, r, u, o) && (r = null),
      o || u === null
        ? F(t) &&
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
  var J = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    z = Symbol.for("react.element"),
    q = Symbol.for("react.portal"),
    U = Symbol.for("react.fragment"),
    pe = Symbol.for("react.strict_mode"),
    me = Symbol.for("react.profiler"),
    Te = Symbol.for("react.provider"),
    Ce = Symbol.for("react.context"),
    ee = Symbol.for("react.forward_ref"),
    oe = Symbol.for("react.suspense"),
    ve = Symbol.for("react.suspense_list"),
    Le = Symbol.for("react.memo"),
    Pe = Symbol.for("react.lazy"),
    _e = Symbol.for("react.offscreen"),
    W = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (W && e[W]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var K = Object.assign,
    k;
  function L(e) {
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
  var he = !1;
  function we(e, t) {
    if (!e || he) return "";
    he = !0;
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
      (he = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? L(e) : "";
  }
  function ke(e) {
    switch (e.tag) {
      case 5:
        return L(e.type);
      case 16:
        return L("Lazy");
      case 13:
        return L("Suspense");
      case 19:
        return L("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = we(e.type, !1)), e;
      case 11:
        return (e = we(e.type.render, !1)), e;
      case 1:
        return (e = we(e.type, !0)), e;
      default:
        return "";
    }
  }
  function Se(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case U:
        return "Fragment";
      case q:
        return "Portal";
      case me:
        return "Profiler";
      case pe:
        return "StrictMode";
      case oe:
        return "Suspense";
      case ve:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ce:
          return (e.displayName || "Context") + ".Consumer";
        case Te:
          return (e._context.displayName || "Context") + ".Provider";
        case ee:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Le:
          return (
            (t = e.displayName || null), t !== null ? t : Se(e.type) || "Memo"
          );
        case Pe:
          (t = e._payload), (e = e._init);
          try {
            return Se(e(t));
          } catch {}
      }
    return null;
  }
  function ae(e) {
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
        return Se(t);
      case 8:
        return t === pe ? "StrictMode" : "Mode";
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
  function ye(e) {
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
  function xe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Be(e) {
    var t = xe(e) ? "checked" : "value",
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
    e._valueTracker || (e._valueTracker = Be(e));
  }
  function Et(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      o = "";
    return (
      e && (o = xe(e) ? (e.checked ? "true" : "false") : e.value),
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
    return K({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function ui(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked;
    (r = ye(t.value != null ? t.value : r)),
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
    (t = t.checked), t != null && G(e, "checked", t, !1);
  }
  function ai(e, t) {
    hs(e, t);
    var r = ye(t.value),
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
      : t.hasOwnProperty("defaultValue") && kr(e, t.type, ye(t.defaultValue)),
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
      for (r = "" + ye(r), t = null, u = 0; u < e.length; u++) {
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
    return K({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Y(e, t) {
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
    e._wrapperState = { initialValue: ye(r) };
  }
  function Q(e, t) {
    var r = ye(t.value),
      o = ye(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      o != null && (e.defaultValue = "" + o);
  }
  function H(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function ue(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Fe(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ue(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var De,
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
          De = De || document.createElement("div"),
            De.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = De.firstChild;
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
  var dl = K(
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
  function ci(e, t) {
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
  function Xa(e) {
    if ((e = Ni(e))) {
      if (typeof hl != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = Is(t)), hl(e.stateNode, e.type, t));
    }
  }
  function Ya(e) {
    Or ? (Rr ? Rr.push(e) : (Rr = [e])) : (Or = e);
  }
  function Ja() {
    if (Or) {
      var e = Or,
        t = Rr;
      if (((Rr = Or = null), Xa(e), t)) for (e = 0; e < t.length; e++) Xa(t[e]);
    }
  }
  function Za(e, t) {
    return e(t);
  }
  function ec() {}
  var ml = !1;
  function tc(e, t, r) {
    if (ml) return e(t, r);
    ml = !0;
    try {
      return Za(e, t, r);
    } finally {
      (ml = !1), (Or !== null || Rr !== null) && (ec(), Ja());
    }
  }
  function fi(e, t) {
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
      var di = {};
      Object.defineProperty(di, "passive", {
        get: function () {
          yl = !0;
        },
      }),
        window.addEventListener("test", di, di),
        window.removeEventListener("test", di, di);
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
  var pi = !1,
    ms = null,
    ys = !1,
    gl = null,
    um = {
      onError: function (e) {
        (pi = !0), (ms = e);
      },
    };
  function am(e, t, r, o, u, a, d, m, g) {
    (pi = !1), (ms = null), lm.apply(um, arguments);
  }
  function cm(e, t, r, o, u, a, d, m, g) {
    if ((am.apply(this, arguments), pi)) {
      if (pi) {
        var P = ms;
        (pi = !1), (ms = null);
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
  function nc(e) {
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
  function rc(e) {
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
          if (a === r) return rc(u), e;
          if (a === o) return rc(u), t;
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
  function ic(e) {
    return (e = fm(e)), e !== null ? sc(e) : null;
  }
  function sc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = sc(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var oc = i.unstable_scheduleCallback,
    lc = i.unstable_cancelCallback,
    dm = i.unstable_shouldYield,
    pm = i.unstable_requestPaint,
    Ge = i.unstable_now,
    hm = i.unstable_getCurrentPriorityLevel,
    vl = i.unstable_ImmediatePriority,
    uc = i.unstable_UserBlockingPriority,
    gs = i.unstable_NormalPriority,
    mm = i.unstable_LowPriority,
    ac = i.unstable_IdlePriority,
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
  function hi(e) {
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
      m !== 0 ? (o = hi(m)) : ((a &= d), a !== 0 && (o = hi(a)));
    } else (d = r & ~u), d !== 0 ? (o = hi(d)) : a !== 0 && (o = hi(a));
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
  function cc() {
    var e = ws;
    return (ws <<= 1), (ws & 4194240) === 0 && (ws = 64), e;
  }
  function Sl(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function mi(e, t, r) {
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
  var Me = 0;
  function fc(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var dc,
    xl,
    pc,
    hc,
    mc,
    El = !1,
    xs = [],
    Rn = null,
    Pn = null,
    Tn = null,
    yi = new Map(),
    gi = new Map(),
    Fn = [],
    Em =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function yc(e, t) {
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
        yi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gi.delete(t.pointerId);
    }
  }
  function vi(e, t, r, o, u, a) {
    return e === null || e.nativeEvent !== a
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: o,
          nativeEvent: a,
          targetContainers: [u],
        }),
        t !== null && ((t = Ni(t)), t !== null && xl(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function Cm(e, t, r, o, u) {
    switch (t) {
      case "focusin":
        return (Rn = vi(Rn, e, t, r, o, u)), !0;
      case "dragenter":
        return (Pn = vi(Pn, e, t, r, o, u)), !0;
      case "mouseover":
        return (Tn = vi(Tn, e, t, r, o, u)), !0;
      case "pointerover":
        var a = u.pointerId;
        return yi.set(a, vi(yi.get(a) || null, e, t, r, o, u)), !0;
      case "gotpointercapture":
        return (
          (a = u.pointerId), gi.set(a, vi(gi.get(a) || null, e, t, r, o, u)), !0
        );
    }
    return !1;
  }
  function gc(e) {
    var t = Xn(e.target);
    if (t !== null) {
      var r = Gn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = nc(r)), t !== null)) {
            (e.blockedOn = t),
              mc(e.priority, function () {
                pc(r);
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
      } else return (t = Ni(r)), t !== null && xl(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function vc(e, t, r) {
    Es(e) && r.delete(t);
  }
  function _m() {
    (El = !1),
      Rn !== null && Es(Rn) && (Rn = null),
      Pn !== null && Es(Pn) && (Pn = null),
      Tn !== null && Es(Tn) && (Tn = null),
      yi.forEach(vc),
      gi.forEach(vc);
  }
  function wi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      El ||
        ((El = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, _m)));
  }
  function Si(e) {
    function t(u) {
      return wi(u, e);
    }
    if (0 < xs.length) {
      wi(xs[0], e);
      for (var r = 1; r < xs.length; r++) {
        var o = xs[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      Rn !== null && wi(Rn, e),
        Pn !== null && wi(Pn, e),
        Tn !== null && wi(Tn, e),
        yi.forEach(t),
        gi.forEach(t),
        r = 0;
      r < Fn.length;
      r++
    )
      (o = Fn[r]), o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < Fn.length && ((r = Fn[0]), r.blockedOn === null); )
      gc(r), r.blockedOn === null && Fn.shift();
  }
  var Pr = J.ReactCurrentBatchConfig,
    Cs = !0;
  function Om(e, t, r, o) {
    var u = Me,
      a = Pr.transition;
    Pr.transition = null;
    try {
      (Me = 1), Cl(e, t, r, o);
    } finally {
      (Me = u), (Pr.transition = a);
    }
  }
  function Rm(e, t, r, o) {
    var u = Me,
      a = Pr.transition;
    Pr.transition = null;
    try {
      (Me = 4), Cl(e, t, r, o);
    } finally {
      (Me = u), (Pr.transition = a);
    }
  }
  function Cl(e, t, r, o) {
    if (Cs) {
      var u = _l(e, t, r, o);
      if (u === null) Vl(e, t, o, _s, r), yc(e, o);
      else if (Cm(u, e, t, r, o)) o.stopPropagation();
      else if ((yc(e, o), t & 4 && -1 < Em.indexOf(e))) {
        for (; u !== null; ) {
          var a = Ni(u);
          if (
            (a !== null && dc(a),
            (a = _l(e, t, r, o)),
            a === null && Vl(e, t, o, _s, r),
            a === u)
          )
            break;
          u = a;
        }
        u !== null && o.stopPropagation();
      } else Vl(e, t, o, null, r);
    }
  }
  var _s = null;
  function _l(e, t, r, o) {
    if (((_s = null), (e = pl(o)), (e = Xn(e)), e !== null))
      if (((t = Gn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = nc(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (_s = e), null;
  }
  function wc(e) {
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
          case uc:
            return 4;
          case gs:
          case mm:
            return 16;
          case ac:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var An = null,
    Ol = null,
    Os = null;
  function Sc() {
    if (Os) return Os;
    var e,
      t = Ol,
      r = t.length,
      o,
      u = "value" in An ? An.value : An.textContent,
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
  function kc() {
    return !1;
  }
  function Lt(e) {
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
          : kc),
        (this.isPropagationStopped = kc),
        this
      );
    }
    return (
      K(t.prototype, {
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
    Rl = Lt(Tr),
    ki = K({}, Tr, { view: 0, detail: 0 }),
    Pm = Lt(ki),
    Pl,
    Tl,
    xi,
    Ts = K({}, ki, {
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
      getModifierState: Al,
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
          : (e !== xi &&
              (xi && e.type === "mousemove"
                ? ((Pl = e.screenX - xi.screenX), (Tl = e.screenY - xi.screenY))
                : (Tl = Pl = 0),
              (xi = e)),
            Pl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Tl;
      },
    }),
    xc = Lt(Ts),
    Tm = K({}, Ts, { dataTransfer: 0 }),
    Fm = Lt(Tm),
    Am = K({}, ki, { relatedTarget: 0 }),
    Fl = Lt(Am),
    Nm = K({}, Tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    jm = Lt(Nm),
    Lm = K({}, Tr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Dm = Lt(Lm),
    zm = K({}, Tr, { data: 0 }),
    Ec = Lt(zm),
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
  function Al() {
    return Um;
  }
  var bm = K({}, ki, {
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
      getModifierState: Al,
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
    Vm = Lt(bm),
    Bm = K({}, Ts, {
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
    Cc = Lt(Bm),
    Hm = K({}, ki, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Al,
    }),
    Wm = Lt(Hm),
    Qm = K({}, Tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    qm = Lt(Qm),
    Km = K({}, Ts, {
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
    Gm = Lt(Km),
    Xm = [9, 13, 27, 32],
    Nl = h && "CompositionEvent" in window,
    Ei = null;
  h && "documentMode" in document && (Ei = document.documentMode);
  var Ym = h && "TextEvent" in window && !Ei,
    _c = h && (!Nl || (Ei && 8 < Ei && 11 >= Ei)),
    Oc = " ",
    Rc = !1;
  function Pc(e, t) {
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
  function Tc(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Fr = !1;
  function Jm(e, t) {
    switch (e) {
      case "compositionend":
        return Tc(t);
      case "keypress":
        return t.which !== 32 ? null : ((Rc = !0), Oc);
      case "textInput":
        return (e = t.data), e === Oc && Rc ? null : e;
      default:
        return null;
    }
  }
  function Zm(e, t) {
    if (Fr)
      return e === "compositionend" || (!Nl && Pc(e, t))
        ? ((e = Sc()), (Os = Ol = An = null), (Fr = !1), e)
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
        return _c && t.locale !== "ko" ? null : t.data;
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
  function Fc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ey[e.type] : t === "textarea";
  }
  function Ac(e, t, r, o) {
    Ya(o),
      (t = Ls(t, "onChange")),
      0 < t.length &&
        ((r = new Rl("onChange", "change", null, r, o)),
        e.push({ event: r, listeners: t }));
  }
  var Ci = null,
    _i = null;
  function ty(e) {
    Gc(e, 0);
  }
  function Fs(e) {
    var t = Dr(e);
    if (Et(t)) return e;
  }
  function ny(e, t) {
    if (e === "change") return t;
  }
  var Nc = !1;
  if (h) {
    var jl;
    if (h) {
      var Ll = "oninput" in document;
      if (!Ll) {
        var jc = document.createElement("div");
        jc.setAttribute("oninput", "return;"),
          (Ll = typeof jc.oninput == "function");
      }
      jl = Ll;
    } else jl = !1;
    Nc = jl && (!document.documentMode || 9 < document.documentMode);
  }
  function Lc() {
    Ci && (Ci.detachEvent("onpropertychange", Dc), (_i = Ci = null));
  }
  function Dc(e) {
    if (e.propertyName === "value" && Fs(_i)) {
      var t = [];
      Ac(t, _i, e, pl(e)), tc(ty, t);
    }
  }
  function ry(e, t, r) {
    e === "focusin"
      ? (Lc(), (Ci = t), (_i = r), Ci.attachEvent("onpropertychange", Dc))
      : e === "focusout" && Lc();
  }
  function iy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Fs(_i);
  }
  function sy(e, t) {
    if (e === "click") return Fs(t);
  }
  function oy(e, t) {
    if (e === "input" || e === "change") return Fs(t);
  }
  function ly(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Gt = typeof Object.is == "function" ? Object.is : ly;
  function Oi(e, t) {
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
  function zc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ic(e, t) {
    var r = zc(e);
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
      r = zc(r);
    }
  }
  function Mc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Mc(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function $c() {
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
  function Dl(e) {
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
    var t = $c(),
      r = e.focusedElem,
      o = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      Mc(r.ownerDocument.documentElement, r)
    ) {
      if (o !== null && Dl(r)) {
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
            (u = Ic(r, a));
          var d = Ic(r, o);
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
    Ar = null,
    zl = null,
    Ri = null,
    Il = !1;
  function Uc(e, t, r) {
    var o =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Il ||
      Ar == null ||
      Ar !== wr(o) ||
      ((o = Ar),
      "selectionStart" in o && Dl(o)
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
      (Ri && Oi(Ri, o)) ||
        ((Ri = o),
        (o = Ls(zl, "onSelect")),
        0 < o.length &&
          ((t = new Rl("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = Ar))));
  }
  function As(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var Nr = {
      animationend: As("Animation", "AnimationEnd"),
      animationiteration: As("Animation", "AnimationIteration"),
      animationstart: As("Animation", "AnimationStart"),
      transitionend: As("Transition", "TransitionEnd"),
    },
    Ml = {},
    bc = {};
  h &&
    ((bc = document.createElement("div").style),
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
    for (r in t) if (t.hasOwnProperty(r) && r in bc) return (Ml[e] = t[r]);
    return e;
  }
  var Vc = Ns("animationend"),
    Bc = Ns("animationiteration"),
    Hc = Ns("animationstart"),
    Wc = Ns("transitionend"),
    Qc = new Map(),
    qc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Nn(e, t) {
    Qc.set(e, t), f(t, [e]);
  }
  for (var $l = 0; $l < qc.length; $l++) {
    var Ul = qc[$l],
      cy = Ul.toLowerCase(),
      fy = Ul[0].toUpperCase() + Ul.slice(1);
    Nn(cy, "on" + fy);
  }
  Nn(Vc, "onAnimationEnd"),
    Nn(Bc, "onAnimationIteration"),
    Nn(Hc, "onAnimationStart"),
    Nn("dblclick", "onDoubleClick"),
    Nn("focusin", "onFocus"),
    Nn("focusout", "onBlur"),
    Nn(Wc, "onTransitionEnd"),
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
  var Pi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    dy = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Pi)
    );
  function Kc(e, t, r) {
    var o = e.type || "unknown-event";
    (e.currentTarget = r), cm(o, t, void 0, e), (e.currentTarget = null);
  }
  function Gc(e, t) {
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
            Kc(u, m, P), (a = g);
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
            Kc(u, m, P), (a = g);
          }
      }
    }
    if (ys) throw ((e = gl), (ys = !1), (gl = null), e);
  }
  function Ue(e, t) {
    var r = t[Kl];
    r === void 0 && (r = t[Kl] = new Set());
    var o = e + "__bubble";
    r.has(o) || (Xc(t, e, 2, !1), r.add(o));
  }
  function bl(e, t, r) {
    var o = 0;
    t && (o |= 4), Xc(r, e, o, t);
  }
  var js = "_reactListening" + Math.random().toString(36).slice(2);
  function Ti(e) {
    if (!e[js]) {
      (e[js] = !0),
        l.forEach(function (r) {
          r !== "selectionchange" && (dy.has(r) || bl(r, !1, e), bl(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[js] || ((t[js] = !0), bl("selectionchange", !1, t));
    }
  }
  function Xc(e, t, r, o) {
    switch (wc(t)) {
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
  function Vl(e, t, r, o, u) {
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
    tc(function () {
      var P = a,
        M = pl(r),
        b = [];
      e: {
        var I = Qc.get(e);
        if (I !== void 0) {
          var Z = Rl,
            re = e;
          switch (e) {
            case "keypress":
              if (Rs(r) === 0) break e;
            case "keydown":
            case "keyup":
              Z = Vm;
              break;
            case "focusin":
              (re = "focus"), (Z = Fl);
              break;
            case "focusout":
              (re = "blur"), (Z = Fl);
              break;
            case "beforeblur":
            case "afterblur":
              Z = Fl;
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
              Z = xc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = Fm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = Wm;
              break;
            case Vc:
            case Bc:
            case Hc:
              Z = jm;
              break;
            case Wc:
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
              Z = Dm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = Cc;
          }
          var ie = (t & 4) !== 0,
            Xe = !ie && e === "scroll",
            C = ie ? (I !== null ? I + "Capture" : null) : I;
          ie = [];
          for (var w = P, O; w !== null; ) {
            O = w;
            var V = O.stateNode;
            if (
              (O.tag === 5 &&
                V !== null &&
                ((O = V),
                C !== null &&
                  ((V = fi(w, C)), V != null && ie.push(Fi(w, V, O)))),
              Xe)
            )
              break;
            w = w.return;
          }
          0 < ie.length &&
            ((I = new Z(I, re, null, r, M)),
            b.push({ event: I, listeners: ie }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((I = e === "mouseover" || e === "pointerover"),
            (Z = e === "mouseout" || e === "pointerout"),
            I &&
              r !== _r &&
              (re = r.relatedTarget || r.fromElement) &&
              (Xn(re) || re[yn]))
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
              ? ((re = r.relatedTarget || r.toElement),
                (Z = P),
                (re = re ? Xn(re) : null),
                re !== null &&
                  ((Xe = Gn(re)),
                  re !== Xe || (re.tag !== 5 && re.tag !== 6)) &&
                  (re = null))
              : ((Z = null), (re = P)),
            Z !== re)
          ) {
            if (
              ((ie = xc),
              (V = "onMouseLeave"),
              (C = "onMouseEnter"),
              (w = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ie = Cc),
                (V = "onPointerLeave"),
                (C = "onPointerEnter"),
                (w = "pointer")),
              (Xe = Z == null ? I : Dr(Z)),
              (O = re == null ? I : Dr(re)),
              (I = new ie(V, w + "leave", Z, r, M)),
              (I.target = Xe),
              (I.relatedTarget = O),
              (V = null),
              Xn(M) === P &&
                ((ie = new ie(C, w + "enter", re, r, M)),
                (ie.target = O),
                (ie.relatedTarget = Xe),
                (V = ie)),
              (Xe = V),
              Z && re)
            )
              t: {
                for (ie = Z, C = re, w = 0, O = ie; O; O = jr(O)) w++;
                for (O = 0, V = C; V; V = jr(V)) O++;
                for (; 0 < w - O; ) (ie = jr(ie)), w--;
                for (; 0 < O - w; ) (C = jr(C)), O--;
                for (; w--; ) {
                  if (ie === C || (C !== null && ie === C.alternate)) break t;
                  (ie = jr(ie)), (C = jr(C));
                }
                ie = null;
              }
            else ie = null;
            Z !== null && Yc(b, I, Z, ie, !1),
              re !== null && Xe !== null && Yc(b, Xe, re, ie, !0);
          }
        }
        e: {
          if (
            ((I = P ? Dr(P) : window),
            (Z = I.nodeName && I.nodeName.toLowerCase()),
            Z === "select" || (Z === "input" && I.type === "file"))
          )
            var le = ny;
          else if (Fc(I))
            if (Nc) le = oy;
            else {
              le = iy;
              var fe = ry;
            }
          else
            (Z = I.nodeName) &&
              Z.toLowerCase() === "input" &&
              (I.type === "checkbox" || I.type === "radio") &&
              (le = sy);
          if (le && (le = le(e, P))) {
            Ac(b, le, r, M);
            break e;
          }
          fe && fe(e, I, P),
            e === "focusout" &&
              (fe = I._wrapperState) &&
              fe.controlled &&
              I.type === "number" &&
              kr(I, "number", I.value);
        }
        switch (((fe = P ? Dr(P) : window), e)) {
          case "focusin":
            (Fc(fe) || fe.contentEditable === "true") &&
              ((Ar = fe), (zl = P), (Ri = null));
            break;
          case "focusout":
            Ri = zl = Ar = null;
            break;
          case "mousedown":
            Il = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Il = !1), Uc(b, r, M);
            break;
          case "selectionchange":
            if (ay) break;
          case "keydown":
          case "keyup":
            Uc(b, r, M);
        }
        var de;
        if (Nl)
          e: {
            switch (e) {
              case "compositionstart":
                var ge = "onCompositionStart";
                break e;
              case "compositionend":
                ge = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ge = "onCompositionUpdate";
                break e;
            }
            ge = void 0;
          }
        else
          Fr
            ? Pc(e, r) && (ge = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (ge = "onCompositionStart");
        ge &&
          (_c &&
            r.locale !== "ko" &&
            (Fr || ge !== "onCompositionStart"
              ? ge === "onCompositionEnd" && Fr && (de = Sc())
              : ((An = M),
                (Ol = "value" in An ? An.value : An.textContent),
                (Fr = !0))),
          (fe = Ls(P, ge)),
          0 < fe.length &&
            ((ge = new Ec(ge, e, null, r, M)),
            b.push({ event: ge, listeners: fe }),
            de
              ? (ge.data = de)
              : ((de = Tc(r)), de !== null && (ge.data = de)))),
          (de = Ym ? Jm(e, r) : Zm(e, r)) &&
            ((P = Ls(P, "onBeforeInput")),
            0 < P.length &&
              ((M = new Ec("onBeforeInput", "beforeinput", null, r, M)),
              b.push({ event: M, listeners: P }),
              (M.data = de)));
      }
      Gc(b, t);
    });
  }
  function Fi(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Ls(e, t) {
    for (var r = t + "Capture", o = []; e !== null; ) {
      var u = e,
        a = u.stateNode;
      u.tag === 5 &&
        a !== null &&
        ((u = a),
        (a = fi(e, r)),
        a != null && o.unshift(Fi(e, a, u)),
        (a = fi(e, t)),
        a != null && o.push(Fi(e, a, u))),
        (e = e.return);
    }
    return o;
  }
  function jr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Yc(e, t, r, o, u) {
    for (var a = t._reactName, d = []; r !== null && r !== o; ) {
      var m = r,
        g = m.alternate,
        P = m.stateNode;
      if (g !== null && g === o) break;
      m.tag === 5 &&
        P !== null &&
        ((m = P),
        u
          ? ((g = fi(r, a)), g != null && d.unshift(Fi(r, g, m)))
          : u || ((g = fi(r, a)), g != null && d.push(Fi(r, g, m)))),
        (r = r.return);
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var py = /\r\n?/g,
    hy = /\u0000|\uFFFD/g;
  function Jc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        py,
        `
`
      )
      .replace(hy, "");
  }
  function Ds(e, t, r) {
    if (((t = Jc(t)), Jc(e) !== t && r)) throw Error(s(425));
  }
  function zs() {}
  var Bl = null,
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
    Zc = typeof Promise == "function" ? Promise : void 0,
    yy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Zc < "u"
        ? function (e) {
            return Zc.resolve(null).then(e).catch(gy);
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
            e.removeChild(u), Si(t);
            return;
          }
          o--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || o++;
      r = u;
    } while (r);
    Si(t);
  }
  function jn(e) {
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
  function ef(e) {
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
  var Lr = Math.random().toString(36).slice(2),
    un = "__reactFiber$" + Lr,
    Ai = "__reactProps$" + Lr,
    yn = "__reactContainer$" + Lr,
    Kl = "__reactEvents$" + Lr,
    vy = "__reactListeners$" + Lr,
    wy = "__reactHandles$" + Lr;
  function Xn(e) {
    var t = e[un];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[yn] || r[un])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = ef(e); e !== null; ) {
            if ((r = e[un])) return r;
            e = ef(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function Ni(e) {
    return (
      (e = e[un] || e[yn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Dr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Is(e) {
    return e[Ai] || null;
  }
  var Gl = [],
    zr = -1;
  function Ln(e) {
    return { current: e };
  }
  function be(e) {
    0 > zr || ((e.current = Gl[zr]), (Gl[zr] = null), zr--);
  }
  function $e(e, t) {
    zr++, (Gl[zr] = e.current), (e.current = t);
  }
  var Dn = {},
    ht = Ln(Dn),
    _t = Ln(!1),
    Yn = Dn;
  function Ir(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Dn;
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
  function tf(e, t, r) {
    if (ht.current !== Dn) throw Error(s(168));
    $e(ht, t), $e(_t, r);
  }
  function nf(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function"))
      return r;
    o = o.getChildContext();
    for (var u in o) if (!(u in t)) throw Error(s(108, ae(e) || "Unknown", u));
    return K({}, r, o);
  }
  function $s(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Dn),
      (Yn = ht.current),
      $e(ht, e),
      $e(_t, _t.current),
      !0
    );
  }
  function rf(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(s(169));
    r
      ? ((e = nf(e, t, Yn)),
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
  function sf(e) {
    gn === null ? (gn = [e]) : gn.push(e);
  }
  function Sy(e) {
    (Us = !0), sf(e);
  }
  function zn() {
    if (!Xl && gn !== null) {
      Xl = !0;
      var e = 0,
        t = Me;
      try {
        var r = gn;
        for (Me = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        (gn = null), (Us = !1);
      } catch (u) {
        throw (gn !== null && (gn = gn.slice(e + 1)), oc(vl, zn), u);
      } finally {
        (Me = t), (Xl = !1);
      }
    }
    return null;
  }
  var Mr = [],
    $r = 0,
    bs = null,
    Vs = 0,
    $t = [],
    Ut = 0,
    Jn = null,
    vn = 1,
    wn = "";
  function Zn(e, t) {
    (Mr[$r++] = Vs), (Mr[$r++] = bs), (bs = e), (Vs = t);
  }
  function of(e, t, r) {
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
    e.return !== null && (Zn(e, 1), of(e, 1, 0));
  }
  function Jl(e) {
    for (; e === bs; )
      (bs = Mr[--$r]), (Mr[$r] = null), (Vs = Mr[--$r]), (Mr[$r] = null);
    for (; e === Jn; )
      (Jn = $t[--Ut]),
        ($t[Ut] = null),
        (wn = $t[--Ut]),
        ($t[Ut] = null),
        (vn = $t[--Ut]),
        ($t[Ut] = null);
  }
  var Dt = null,
    zt = null,
    He = !1,
    Xt = null;
  function lf(e, t) {
    var r = Ht(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function uf(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Dt = e), (zt = jn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Dt = e), (zt = null), !0) : !1
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
              (Dt = e),
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
        if (!uf(e, t)) {
          if (Zl(e)) throw Error(s(418));
          t = jn(r.nextSibling);
          var o = Dt;
          t && uf(e, t)
            ? lf(o, r)
            : ((e.flags = (e.flags & -4097) | 2), (He = !1), (Dt = e));
        }
      } else {
        if (Zl(e)) throw Error(s(418));
        (e.flags = (e.flags & -4097) | 2), (He = !1), (Dt = e);
      }
    }
  }
  function af(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Dt = e;
  }
  function Bs(e) {
    if (e !== Dt) return !1;
    if (!He) return af(e), (He = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Wl(e.type, e.memoizedProps))),
      t && (t = zt))
    ) {
      if (Zl(e)) throw (cf(), Error(s(418)));
      for (; t; ) lf(e, t), (t = jn(t.nextSibling));
    }
    if ((af(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                zt = jn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        zt = null;
      }
    } else zt = Dt ? jn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function cf() {
    for (var e = zt; e; ) e = jn(e.nextSibling);
  }
  function Ur() {
    (zt = Dt = null), (He = !1);
  }
  function tu(e) {
    Xt === null ? (Xt = [e]) : Xt.push(e);
  }
  var ky = J.ReactCurrentBatchConfig;
  function ji(e, t, r) {
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
  function ff(e) {
    var t = e._init;
    return t(e._payload);
  }
  function df(e) {
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
    function m(C, w, O, V) {
      return w === null || w.tag !== 6
        ? ((w = Qu(O, C.mode, V)), (w.return = C), w)
        : ((w = u(w, O)), (w.return = C), w);
    }
    function g(C, w, O, V) {
      var le = O.type;
      return le === U
        ? M(C, w, O.props.children, V, O.key)
        : w !== null &&
          (w.elementType === le ||
            (typeof le == "object" &&
              le !== null &&
              le.$$typeof === Pe &&
              ff(le) === w.type))
        ? ((V = u(w, O.props)), (V.ref = ji(C, w, O)), (V.return = C), V)
        : ((V = mo(O.type, O.key, O.props, null, C.mode, V)),
          (V.ref = ji(C, w, O)),
          (V.return = C),
          V);
    }
    function P(C, w, O, V) {
      return w === null ||
        w.tag !== 4 ||
        w.stateNode.containerInfo !== O.containerInfo ||
        w.stateNode.implementation !== O.implementation
        ? ((w = qu(O, C.mode, V)), (w.return = C), w)
        : ((w = u(w, O.children || [])), (w.return = C), w);
    }
    function M(C, w, O, V, le) {
      return w === null || w.tag !== 7
        ? ((w = lr(O, C.mode, V, le)), (w.return = C), w)
        : ((w = u(w, O)), (w.return = C), w);
    }
    function b(C, w, O) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (w = Qu("" + w, C.mode, O)), (w.return = C), w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case z:
            return (
              (O = mo(w.type, w.key, w.props, null, C.mode, O)),
              (O.ref = ji(C, null, w)),
              (O.return = C),
              O
            );
          case q:
            return (w = qu(w, C.mode, O)), (w.return = C), w;
          case Pe:
            var V = w._init;
            return b(C, V(w._payload), O);
        }
        if (y(w) || te(w))
          return (w = lr(w, C.mode, O, null)), (w.return = C), w;
        Hs(C, w);
      }
      return null;
    }
    function I(C, w, O, V) {
      var le = w !== null ? w.key : null;
      if ((typeof O == "string" && O !== "") || typeof O == "number")
        return le !== null ? null : m(C, w, "" + O, V);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case z:
            return O.key === le ? g(C, w, O, V) : null;
          case q:
            return O.key === le ? P(C, w, O, V) : null;
          case Pe:
            return (le = O._init), I(C, w, le(O._payload), V);
        }
        if (y(O) || te(O)) return le !== null ? null : M(C, w, O, V, null);
        Hs(C, O);
      }
      return null;
    }
    function Z(C, w, O, V, le) {
      if ((typeof V == "string" && V !== "") || typeof V == "number")
        return (C = C.get(O) || null), m(w, C, "" + V, le);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case z:
            return (
              (C = C.get(V.key === null ? O : V.key) || null), g(w, C, V, le)
            );
          case q:
            return (
              (C = C.get(V.key === null ? O : V.key) || null), P(w, C, V, le)
            );
          case Pe:
            var fe = V._init;
            return Z(C, w, O, fe(V._payload), le);
        }
        if (y(V) || te(V)) return (C = C.get(O) || null), M(w, C, V, le, null);
        Hs(w, V);
      }
      return null;
    }
    function re(C, w, O, V) {
      for (
        var le = null, fe = null, de = w, ge = (w = 0), lt = null;
        de !== null && ge < O.length;
        ge++
      ) {
        de.index > ge ? ((lt = de), (de = null)) : (lt = de.sibling);
        var Ne = I(C, de, O[ge], V);
        if (Ne === null) {
          de === null && (de = lt);
          break;
        }
        e && de && Ne.alternate === null && t(C, de),
          (w = a(Ne, w, ge)),
          fe === null ? (le = Ne) : (fe.sibling = Ne),
          (fe = Ne),
          (de = lt);
      }
      if (ge === O.length) return r(C, de), He && Zn(C, ge), le;
      if (de === null) {
        for (; ge < O.length; ge++)
          (de = b(C, O[ge], V)),
            de !== null &&
              ((w = a(de, w, ge)),
              fe === null ? (le = de) : (fe.sibling = de),
              (fe = de));
        return He && Zn(C, ge), le;
      }
      for (de = o(C, de); ge < O.length; ge++)
        (lt = Z(de, C, ge, O[ge], V)),
          lt !== null &&
            (e &&
              lt.alternate !== null &&
              de.delete(lt.key === null ? ge : lt.key),
            (w = a(lt, w, ge)),
            fe === null ? (le = lt) : (fe.sibling = lt),
            (fe = lt));
      return (
        e &&
          de.forEach(function (Wn) {
            return t(C, Wn);
          }),
        He && Zn(C, ge),
        le
      );
    }
    function ie(C, w, O, V) {
      var le = te(O);
      if (typeof le != "function") throw Error(s(150));
      if (((O = le.call(O)), O == null)) throw Error(s(151));
      for (
        var fe = (le = null), de = w, ge = (w = 0), lt = null, Ne = O.next();
        de !== null && !Ne.done;
        ge++, Ne = O.next()
      ) {
        de.index > ge ? ((lt = de), (de = null)) : (lt = de.sibling);
        var Wn = I(C, de, Ne.value, V);
        if (Wn === null) {
          de === null && (de = lt);
          break;
        }
        e && de && Wn.alternate === null && t(C, de),
          (w = a(Wn, w, ge)),
          fe === null ? (le = Wn) : (fe.sibling = Wn),
          (fe = Wn),
          (de = lt);
      }
      if (Ne.done) return r(C, de), He && Zn(C, ge), le;
      if (de === null) {
        for (; !Ne.done; ge++, Ne = O.next())
          (Ne = b(C, Ne.value, V)),
            Ne !== null &&
              ((w = a(Ne, w, ge)),
              fe === null ? (le = Ne) : (fe.sibling = Ne),
              (fe = Ne));
        return He && Zn(C, ge), le;
      }
      for (de = o(C, de); !Ne.done; ge++, Ne = O.next())
        (Ne = Z(de, C, ge, Ne.value, V)),
          Ne !== null &&
            (e &&
              Ne.alternate !== null &&
              de.delete(Ne.key === null ? ge : Ne.key),
            (w = a(Ne, w, ge)),
            fe === null ? (le = Ne) : (fe.sibling = Ne),
            (fe = Ne));
      return (
        e &&
          de.forEach(function (eg) {
            return t(C, eg);
          }),
        He && Zn(C, ge),
        le
      );
    }
    function Xe(C, w, O, V) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === U &&
          O.key === null &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case z:
            e: {
              for (var le = O.key, fe = w; fe !== null; ) {
                if (fe.key === le) {
                  if (((le = O.type), le === U)) {
                    if (fe.tag === 7) {
                      r(C, fe.sibling),
                        (w = u(fe, O.props.children)),
                        (w.return = C),
                        (C = w);
                      break e;
                    }
                  } else if (
                    fe.elementType === le ||
                    (typeof le == "object" &&
                      le !== null &&
                      le.$$typeof === Pe &&
                      ff(le) === fe.type)
                  ) {
                    r(C, fe.sibling),
                      (w = u(fe, O.props)),
                      (w.ref = ji(C, fe, O)),
                      (w.return = C),
                      (C = w);
                    break e;
                  }
                  r(C, fe);
                  break;
                } else t(C, fe);
                fe = fe.sibling;
              }
              O.type === U
                ? ((w = lr(O.props.children, C.mode, V, O.key)),
                  (w.return = C),
                  (C = w))
                : ((V = mo(O.type, O.key, O.props, null, C.mode, V)),
                  (V.ref = ji(C, w, O)),
                  (V.return = C),
                  (C = V));
            }
            return d(C);
          case q:
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
              (w = qu(O, C.mode, V)), (w.return = C), (C = w);
            }
            return d(C);
          case Pe:
            return (fe = O._init), Xe(C, w, fe(O._payload), V);
        }
        if (y(O)) return re(C, w, O, V);
        if (te(O)) return ie(C, w, O, V);
        Hs(C, O);
      }
      return (typeof O == "string" && O !== "") || typeof O == "number"
        ? ((O = "" + O),
          w !== null && w.tag === 6
            ? (r(C, w.sibling), (w = u(w, O)), (w.return = C), (C = w))
            : (r(C, w), (w = Qu(O, C.mode, V)), (w.return = C), (C = w)),
          d(C))
        : r(C, w);
    }
    return Xe;
  }
  var br = df(!0),
    pf = df(!1),
    Ws = Ln(null),
    Qs = null,
    Vr = null,
    nu = null;
  function ru() {
    nu = Vr = Qs = null;
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
  function Br(e, t) {
    (Qs = e),
      (nu = Vr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Rt = !0), (e.firstContext = null));
  }
  function bt(e) {
    var t = e._currentValue;
    if (nu !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Vr === null)) {
        if (Qs === null) throw Error(s(308));
        (Vr = e), (Qs.dependencies = { lanes: 0, firstContext: e });
      } else Vr = Vr.next = e;
    return t;
  }
  var er = null;
  function ou(e) {
    er === null ? (er = [e]) : er.push(e);
  }
  function hf(e, t, r, o) {
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
  function mf(e, t) {
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
    if (((o = o.shared), (Ae & 2) !== 0)) {
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
  function yf(e, t) {
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
      var b = u.baseState;
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
            var re = e,
              ie = m;
            switch (((I = t), (Z = r), ie.tag)) {
              case 1:
                if (((re = ie.payload), typeof re == "function")) {
                  b = re.call(Z, b, I);
                  break e;
                }
                b = re;
                break e;
              case 3:
                re.flags = (re.flags & -65537) | 128;
              case 0:
                if (
                  ((re = ie.payload),
                  (I = typeof re == "function" ? re.call(Z, b, I) : re),
                  I == null)
                )
                  break e;
                b = K({}, b, I);
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
            M === null ? ((P = M = Z), (g = b)) : (M = M.next = Z),
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
        (M === null && (g = b),
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
      (rr |= d), (e.lanes = d), (e.memoizedState = b);
    }
  }
  function gf(e, t, r) {
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
  var Li = {},
    an = Ln(Li),
    Di = Ln(Li),
    zi = Ln(Li);
  function tr(e) {
    if (e === Li) throw Error(s(174));
    return e;
  }
  function uu(e, t) {
    switch (($e(zi, t), $e(Di, e), $e(an, Li), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fe(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Fe(t, e));
    }
    be(an), $e(an, t);
  }
  function Hr() {
    be(an), be(Di), be(zi);
  }
  function vf(e) {
    tr(zi.current);
    var t = tr(an.current),
      r = Fe(t, e.type);
    t !== r && ($e(Di, e), $e(an, r));
  }
  function au(e) {
    Di.current === e && (be(an), be(Di));
  }
  var Qe = Ln(0);
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
  var Xs = J.ReactCurrentDispatcher,
    du = J.ReactCurrentBatchConfig,
    nr = 0,
    qe = null,
    rt = null,
    st = null,
    Ys = !1,
    Ii = !1,
    Mi = 0,
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
      Ii)
    ) {
      a = 0;
      do {
        if (((Ii = !1), (Mi = 0), 25 <= a)) throw Error(s(301));
        (a += 1),
          (st = rt = null),
          (t.updateQueue = null),
          (Xs.current = Py),
          (e = r(o, u));
      } while (Ii);
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
    var e = Mi !== 0;
    return (Mi = 0), e;
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
  function Vt() {
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
  function $i(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function yu(e) {
    var t = Vt(),
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
          var b = {
            lane: M,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null,
          };
          g === null ? ((m = g = b), (d = o)) : (g = g.next = b),
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
    var t = Vt(),
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
  function wf() {}
  function Sf(e, t) {
    var r = qe,
      o = Vt(),
      u = t(),
      a = !Gt(o.memoizedState, u);
    if (
      (a && ((o.memoizedState = u), (Rt = !0)),
      (o = o.queue),
      vu(Ef.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || a || (st !== null && st.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        Ui(9, xf.bind(null, r, o, u, t), void 0, null),
        ot === null)
      )
        throw Error(s(349));
      (nr & 30) !== 0 || kf(r, t, u);
    }
    return u;
  }
  function kf(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = qe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (qe.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function xf(e, t, r, o) {
    (t.value = r), (t.getSnapshot = o), Cf(t) && _f(e);
  }
  function Ef(e, t, r) {
    return r(function () {
      Cf(t) && _f(e);
    });
  }
  function Cf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Gt(e, r);
    } catch {
      return !0;
    }
  }
  function _f(e) {
    var t = Sn(e, 1);
    t !== null && en(t, e, 1, -1);
  }
  function Of(e) {
    var t = cn();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $i,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = _y.bind(null, qe, e)),
      [t.memoizedState, e]
    );
  }
  function Ui(e, t, r, o) {
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
  function Rf() {
    return Vt().memoizedState;
  }
  function Js(e, t, r, o) {
    var u = cn();
    (qe.flags |= e),
      (u.memoizedState = Ui(1 | t, r, void 0, o === void 0 ? null : o));
  }
  function Zs(e, t, r, o) {
    var u = Vt();
    o = o === void 0 ? null : o;
    var a = void 0;
    if (rt !== null) {
      var d = rt.memoizedState;
      if (((a = d.destroy), o !== null && pu(o, d.deps))) {
        u.memoizedState = Ui(t, r, a, o);
        return;
      }
    }
    (qe.flags |= e), (u.memoizedState = Ui(1 | t, r, a, o));
  }
  function Pf(e, t) {
    return Js(8390656, 8, e, t);
  }
  function vu(e, t) {
    return Zs(2048, 8, e, t);
  }
  function Tf(e, t) {
    return Zs(4, 2, e, t);
  }
  function Ff(e, t) {
    return Zs(4, 4, e, t);
  }
  function Af(e, t) {
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
  function Nf(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), Zs(4, 4, Af.bind(null, t, e), r)
    );
  }
  function wu() {}
  function jf(e, t) {
    var r = Vt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && pu(t, o[1])
      ? o[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function Lf(e, t) {
    var r = Vt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && pu(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function Df(e, t, r) {
    return (nr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Rt = !0)), (e.memoizedState = r))
      : (Gt(r, t) ||
          ((r = cc()), (qe.lanes |= r), (rr |= r), (e.baseState = !0)),
        t);
  }
  function Ey(e, t) {
    var r = Me;
    (Me = r !== 0 && 4 > r ? r : 4), e(!0);
    var o = du.transition;
    du.transition = {};
    try {
      e(!1), t();
    } finally {
      (Me = r), (du.transition = o);
    }
  }
  function zf() {
    return Vt().memoizedState;
  }
  function Cy(e, t, r) {
    var o = Vn(e);
    if (
      ((r = {
        lane: o,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      If(e))
    )
      Mf(t, r);
    else if (((r = hf(e, t, r, o)), r !== null)) {
      var u = kt();
      en(r, e, o, u), $f(r, t, o);
    }
  }
  function _y(e, t, r) {
    var o = Vn(e),
      u = {
        lane: o,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (If(e)) Mf(t, u);
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
      (r = hf(e, t, u, o)),
        r !== null && ((u = kt()), en(r, e, o, u), $f(r, t, o));
    }
  }
  function If(e) {
    var t = e.alternate;
    return e === qe || (t !== null && t === qe);
  }
  function Mf(e, t) {
    Ii = Ys = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function $f(e, t, r) {
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
      useEffect: Pf,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          Js(4194308, 4, Af.bind(null, t, e), r)
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
      useState: Of,
      useDebugValue: wu,
      useDeferredValue: function (e) {
        return (cn().memoizedState = e);
      },
      useTransition: function () {
        var e = Of(!1),
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
          (nr & 30) !== 0 || kf(o, t, r);
        }
        u.memoizedState = r;
        var a = { value: r, getSnapshot: t };
        return (
          (u.queue = a),
          Pf(Ef.bind(null, o, a, e), [e]),
          (o.flags |= 2048),
          Ui(9, xf.bind(null, o, a, r, t), void 0, null),
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
            (r = Mi++),
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
      useImperativeHandle: Nf,
      useInsertionEffect: Tf,
      useLayoutEffect: Ff,
      useMemo: Lf,
      useReducer: yu,
      useRef: Rf,
      useState: function () {
        return yu($i);
      },
      useDebugValue: wu,
      useDeferredValue: function (e) {
        var t = Vt();
        return Df(t, rt.memoizedState, e);
      },
      useTransition: function () {
        var e = yu($i)[0],
          t = Vt().memoizedState;
        return [e, t];
      },
      useMutableSource: wf,
      useSyncExternalStore: Sf,
      useId: zf,
      unstable_isNewReconciler: !1,
    },
    Py = {
      readContext: bt,
      useCallback: jf,
      useContext: bt,
      useEffect: vu,
      useImperativeHandle: Nf,
      useInsertionEffect: Tf,
      useLayoutEffect: Ff,
      useMemo: Lf,
      useReducer: gu,
      useRef: Rf,
      useState: function () {
        return gu($i);
      },
      useDebugValue: wu,
      useDeferredValue: function (e) {
        var t = Vt();
        return rt === null ? (t.memoizedState = e) : Df(t, rt.memoizedState, e);
      },
      useTransition: function () {
        var e = gu($i)[0],
          t = Vt().memoizedState;
        return [e, t];
      },
      useMutableSource: wf,
      useSyncExternalStore: Sf,
      useId: zf,
      unstable_isNewReconciler: !1,
    };
  function Yt(e, t) {
    if (e && e.defaultProps) {
      (t = K({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function Su(e, t, r, o) {
    (t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : K({}, t, r)),
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
        u = Vn(e),
        a = kn(o, u);
      (a.payload = t),
        r != null && (a.callback = r),
        (t = Mn(e, a, u)),
        t !== null && (en(t, e, u, o), qs(t, e, u));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = kt(),
        u = Vn(e),
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
        o = Vn(e),
        u = kn(r, o);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = Mn(e, u, o)),
        t !== null && (en(t, e, o, r), qs(t, e, o));
    },
  };
  function Uf(e, t, r, o, u, a, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, a, d)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Oi(r, o) || !Oi(u, a)
        : !0
    );
  }
  function bf(e, t, r) {
    var o = !1,
      u = Dn,
      a = t.contextType;
    return (
      typeof a == "object" && a !== null
        ? (a = bt(a))
        : ((u = Ot(t) ? Yn : ht.current),
          (o = t.contextTypes),
          (a = (o = o != null) ? Ir(e, u) : Dn)),
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
  function Vf(e, t, r, o) {
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
      do (r += ke(o)), (o = o.return);
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
  function Bf(e, t, r) {
    (r = kn(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var o = t.value;
    return (
      (r.callback = function () {
        uo || ((uo = !0), (Mu = o)), Eu(e, t);
      }),
      r
    );
  }
  function Hf(e, t, r) {
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
  function Wf(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Ty();
      var u = new Set();
      o.set(t, u);
    } else (u = o.get(t)), u === void 0 && ((u = new Set()), o.set(t, u));
    u.has(r) || (u.add(r), (e = By.bind(null, e, t, r)), t.then(e, e));
  }
  function Qf(e) {
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
  function qf(e, t, r, o, u) {
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
  var Fy = J.ReactCurrentOwner,
    Rt = !1;
  function St(e, t, r, o) {
    t.child = e === null ? pf(t, null, r, o) : br(t, e.child, r, o);
  }
  function Kf(e, t, r, o, u) {
    r = r.render;
    var a = t.ref;
    return (
      Br(t, u),
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
  function Gf(e, t, r, o, u) {
    if (e === null) {
      var a = r.type;
      return typeof a == "function" &&
        !Wu(a) &&
        a.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = a), Xf(e, t, a, o, u))
        : ((e = mo(r.type, null, o, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((a = e.child), (e.lanes & u) === 0)) {
      var d = a.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : Oi), r(d, o) && e.ref === t.ref)
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
  function Xf(e, t, r, o, u) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (Oi(a, o) && e.ref === t.ref)
        if (((Rt = !1), (t.pendingProps = o = a), (e.lanes & u) !== 0))
          (e.flags & 131072) !== 0 && (Rt = !0);
        else return (t.lanes = e.lanes), xn(e, t, u);
    }
    return Cu(e, t, r, o, u);
  }
  function Yf(e, t, r) {
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
  function Jf(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Cu(e, t, r, o, u) {
    var a = Ot(r) ? Yn : ht.current;
    return (
      (a = Ir(t, a)),
      Br(t, u),
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
  function Zf(e, t, r, o, u) {
    if (Ot(r)) {
      var a = !0;
      $s(t);
    } else a = !1;
    if ((Br(t, u), t.stateNode === null))
      ro(e, t), bf(t, r, o), ku(t, r, o, u), (o = !0);
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
        b =
          typeof M == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function";
      b ||
        (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
          typeof d.componentWillReceiveProps != "function") ||
        ((m !== o || g !== P) && Vf(t, d, o, P)),
        (In = !1);
      var I = t.memoizedState;
      (d.state = I),
        Ks(t, o, d, u),
        (g = t.memoizedState),
        m !== o || I !== g || _t.current || In
          ? (typeof M == "function" && (Su(t, r, M, o), (g = t.memoizedState)),
            (m = In || Uf(t, r, m, o, I, g, P))
              ? (b ||
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
        mf(e, t),
        (m = t.memoizedProps),
        (P = t.type === t.elementType ? m : Yt(t.type, m)),
        (d.props = P),
        (b = t.pendingProps),
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
        ((m !== b || I !== g) && Vf(t, d, o, g)),
        (In = !1),
        (I = t.memoizedState),
        (d.state = I),
        Ks(t, o, d, u);
      var re = t.memoizedState;
      m !== b || I !== re || _t.current || In
        ? (typeof Z == "function" && (Su(t, r, Z, o), (re = t.memoizedState)),
          (P = In || Uf(t, r, P, o, I, re, g) || !1)
            ? (M ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(o, re, g),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(o, re, g)),
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
              (t.memoizedState = re)),
          (d.props = o),
          (d.state = re),
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
    Jf(e, t);
    var d = (t.flags & 128) !== 0;
    if (!o && !d) return u && rf(t, r, !1), xn(e, t, a);
    (o = t.stateNode), (Fy.current = t);
    var m =
      d && typeof r.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && d
        ? ((t.child = br(t, e.child, null, a)), (t.child = br(t, null, m, a)))
        : St(e, t, m, a),
      (t.memoizedState = o.state),
      u && rf(t, r, !0),
      t.child
    );
  }
  function ed(e) {
    var t = e.stateNode;
    t.pendingContext
      ? tf(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && tf(e, t.context, !1),
      uu(e, t.containerInfo);
  }
  function td(e, t, r, o, u) {
    return Ur(), tu(u), (t.flags |= 256), St(e, t, r, o), t.child;
  }
  var Ou = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ru(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function nd(e, t, r) {
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
      return Ay(e, t, d, o, m, u, r);
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
  function Ay(e, t, r, o, u, a, d) {
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
        (zt = jn(u.nextSibling)),
        (Dt = t),
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
  function rd(e, t, r) {
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
  function id(e, t, r) {
    var o = t.pendingProps,
      u = o.revealOrder,
      a = o.tail;
    if ((St(e, t, o.children, r), (o = Qe.current), (o & 2) !== 0))
      (o = (o & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && rd(e, r, t);
          else if (e.tag === 19) rd(e, r, t);
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
        ed(t), Ur();
        break;
      case 5:
        vf(t);
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
            ? nd(e, t, r)
            : ($e(Qe, Qe.current & 1),
              (e = xn(e, t, r)),
              e !== null ? e.sibling : null);
        $e(Qe, Qe.current & 1);
        break;
      case 19:
        if (((o = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return id(e, t, r);
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
        return (t.lanes = 0), Yf(e, t, r);
    }
    return xn(e, t, r);
  }
  var sd, Fu, od, ld;
  (sd = function (e, t) {
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
    (Fu = function () {}),
    (od = function (e, t, r, o) {
      var u = e.memoizedProps;
      if (u !== o) {
        (e = t.stateNode), tr(an.current);
        var a = null;
        switch (r) {
          case "input":
            (u = Sr(e, u)), (o = Sr(e, o)), (a = []);
            break;
          case "select":
            (u = K({}, u, { value: void 0 })),
              (o = K({}, o, { value: void 0 })),
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
    (ld = function (e, t, r, o) {
      r !== o && (t.flags |= 4);
    });
  function bi(e, t) {
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
  function jy(e, t, r) {
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
            (Bs(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Xt !== null && (bu(Xt), (Xt = null)))),
          Fu(e, t),
          yt(t),
          null
        );
      case 5:
        au(t);
        var u = tr(zi.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          od(e, t, r, o, u),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return yt(t), null;
          }
          if (((e = tr(an.current)), Bs(t))) {
            (o = t.stateNode), (r = t.type);
            var a = t.memoizedProps;
            switch (((o[un] = t), (o[Ai] = a), (e = (t.mode & 1) !== 0), r)) {
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
                for (u = 0; u < Pi.length; u++) Ue(Pi[u], o);
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
                ui(o, a), Ue("invalid", o);
                break;
              case "select":
                (o._wrapperState = { wasMultiple: !!a.multiple }),
                  Ue("invalid", o);
                break;
              case "textarea":
                Y(o, a), Ue("invalid", o);
            }
            Cr(r, a), (u = null);
            for (var d in a)
              if (a.hasOwnProperty(d)) {
                var m = a[d];
                d === "children"
                  ? typeof m == "string"
                    ? o.textContent !== m &&
                      (a.suppressHydrationWarning !== !0 &&
                        Ds(o.textContent, m, e),
                      (u = ["children", m]))
                    : typeof m == "number" &&
                      o.textContent !== "" + m &&
                      (a.suppressHydrationWarning !== !0 &&
                        Ds(o.textContent, m, e),
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
                qt(o), H(o);
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
              e === "http://www.w3.org/1999/xhtml" && (e = ue(r)),
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
              (e[Ai] = o),
              sd(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((d = ci(r, o)), r)) {
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
                  for (u = 0; u < Pi.length; u++) Ue(Pi[u], e);
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
                  ui(e, o), (u = Sr(e, o)), Ue("invalid", e);
                  break;
                case "option":
                  u = o;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!o.multiple }),
                    (u = K({}, o, { value: void 0 })),
                    Ue("invalid", e);
                  break;
                case "textarea":
                  Y(e, o), (u = N(e, o)), Ue("invalid", e);
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
                        : g != null && G(e, a, g, d));
                }
              switch (r) {
                case "input":
                  qt(e), cl(e, o, !1);
                  break;
                case "textarea":
                  qt(e), H(e);
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + ye(o.value));
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
        if (e && t.stateNode != null) ld(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
          if (((r = tr(zi.current)), tr(an.current), Bs(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[un] = t),
              (a = o.nodeValue !== r) && ((e = Dt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Ds(o.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ds(o.nodeValue, r, (e.mode & 1) !== 0);
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
            cf(), Ur(), (t.flags |= 98560), (a = !1);
          else if (((a = Bs(t)), o !== null && o.dehydrated !== null)) {
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
          Fu(e, t),
          e === null && Ti(t.stateNode.containerInfo),
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
          if (o) bi(a, !1);
          else {
            if (it !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((d = Gs(e)), d !== null)) {
                  for (
                    t.flags |= 128,
                      bi(a, !1),
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
              ((t.flags |= 128), (o = !0), bi(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = Gs(d)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                bi(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !d.alternate &&
                  !He)
              )
                return yt(t), null;
            } else
              2 * Ge() - a.renderingStartTime > Kr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (o = !0), bi(a, !1), (t.lanes = 4194304));
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
          Bu(),
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
  function Ly(e, t) {
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
        return Bu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var io = !1,
    gt = !1,
    Dy = typeof WeakSet == "function" ? WeakSet : Set,
    ne = null;
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
  function Au(e, t, r) {
    try {
      r();
    } catch (o) {
      Ke(e, t, o);
    }
  }
  var ud = !1;
  function zy(e, t) {
    if (((Bl = Cs), (e = $c()), Dl(e))) {
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
              b = e,
              I = null;
            t: for (;;) {
              for (
                var Z;
                b !== r || (u !== 0 && b.nodeType !== 3) || (m = d + u),
                  b !== a || (o !== 0 && b.nodeType !== 3) || (g = d + o),
                  b.nodeType === 3 && (d += b.nodeValue.length),
                  (Z = b.firstChild) !== null;

              )
                (I = b), (b = Z);
              for (;;) {
                if (b === e) break t;
                if (
                  (I === r && ++P === u && (m = d),
                  I === a && ++M === o && (g = d),
                  (Z = b.nextSibling) !== null)
                )
                  break;
                (b = I), (I = b.parentNode);
              }
              b = Z;
            }
            r = m === -1 || g === -1 ? null : { start: m, end: g };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Hl = { focusedElem: e, selectionRange: r }, Cs = !1, ne = t;
      ne !== null;

    )
      if (
        ((t = ne), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (ne = e);
      else
        for (; ne !== null; ) {
          t = ne;
          try {
            var re = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (re !== null) {
                    var ie = re.memoizedProps,
                      Xe = re.memoizedState,
                      C = t.stateNode,
                      w = C.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ie : Yt(t.type, ie),
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
          } catch (V) {
            Ke(t, t.return, V);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (ne = e);
            break;
          }
          ne = t.return;
        }
    return (re = ud), (ud = !1), re;
  }
  function Vi(e, t, r) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var u = (o = o.next);
      do {
        if ((u.tag & e) === e) {
          var a = u.destroy;
          (u.destroy = void 0), a !== void 0 && Au(t, r, a);
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
  function ad(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), ad(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[un],
          delete t[Ai],
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
  function cd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function fd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || cd(e.return)) return null;
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
  function ju(e, t, r) {
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
      for (ju(e, t, r), e = e.sibling; e !== null; )
        ju(e, t, r), (e = e.sibling);
  }
  function Lu(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Lu(e, t, r), e = e.sibling; e !== null; )
        Lu(e, t, r), (e = e.sibling);
  }
  var ft = null,
    Jt = !1;
  function $n(e, t, r) {
    for (r = r.child; r !== null; ) dd(e, t, r), (r = r.sibling);
  }
  function dd(e, t, r) {
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
              Si(e))
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
              d !== void 0 && ((a & 2) !== 0 || (a & 4) !== 0) && Au(r, t, d),
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
  function pd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new Dy()),
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
          dd(a, d, u), (ft = null), (Jt = !1);
          var g = u.alternate;
          g !== null && (g.return = null), (u.return = null);
        } catch (P) {
          Ke(u, t, P);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) hd(t, e), (t = t.sibling);
  }
  function hd(e, t) {
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
          } catch (ie) {
            Ke(e, e.return, ie);
          }
          try {
            Vi(5, e, e.return);
          } catch (ie) {
            Ke(e, e.return, ie);
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
          } catch (ie) {
            Ke(e, e.return, ie);
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
                ci(m, d);
              var P = ci(m, a);
              for (d = 0; d < g.length; d += 2) {
                var M = g[d],
                  b = g[d + 1];
                M === "style"
                  ? Er(u, b)
                  : M === "dangerouslySetInnerHTML"
                  ? wt(u, b)
                  : M === "children"
                  ? on(u, b)
                  : G(u, M, b, P);
              }
              switch (m) {
                case "input":
                  ai(u, a);
                  break;
                case "textarea":
                  Q(u, a);
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
              u[Ai] = a;
            } catch (ie) {
              Ke(e, e.return, ie);
            }
        }
        break;
      case 6:
        if ((Zt(t, e), fn(e), o & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (u = e.stateNode), (a = e.memoizedProps);
          try {
            u.nodeValue = a;
          } catch (ie) {
            Ke(e, e.return, ie);
          }
        }
        break;
      case 3:
        if (
          (Zt(t, e), fn(e), o & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Si(t.containerInfo);
          } catch (ie) {
            Ke(e, e.return, ie);
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
          o & 4 && pd(e);
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
            for (ne = e, M = e.child; M !== null; ) {
              for (b = ne = M; ne !== null; ) {
                switch (((I = ne), (Z = I.child), I.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Vi(4, I, I.return);
                    break;
                  case 1:
                    Qr(I, I.return);
                    var re = I.stateNode;
                    if (typeof re.componentWillUnmount == "function") {
                      (o = I), (r = I.return);
                      try {
                        (t = o),
                          (re.props = t.memoizedProps),
                          (re.state = t.memoizedState),
                          re.componentWillUnmount();
                      } catch (ie) {
                        Ke(o, r, ie);
                      }
                    }
                    break;
                  case 5:
                    Qr(I, I.return);
                    break;
                  case 22:
                    if (I.memoizedState !== null) {
                      gd(b);
                      continue;
                    }
                }
                Z !== null ? ((Z.return = I), (ne = Z)) : gd(b);
              }
              M = M.sibling;
            }
          e: for (M = null, b = e; ; ) {
            if (b.tag === 5) {
              if (M === null) {
                M = b;
                try {
                  (u = b.stateNode),
                    P
                      ? ((a = u.style),
                        typeof a.setProperty == "function"
                          ? a.setProperty("display", "none", "important")
                          : (a.display = "none"))
                      : ((m = b.stateNode),
                        (g = b.memoizedProps.style),
                        (d =
                          g != null && g.hasOwnProperty("display")
                            ? g.display
                            : null),
                        (m.style.display = xr("display", d)));
                } catch (ie) {
                  Ke(e, e.return, ie);
                }
              }
            } else if (b.tag === 6) {
              if (M === null)
                try {
                  b.stateNode.nodeValue = P ? "" : b.memoizedProps;
                } catch (ie) {
                  Ke(e, e.return, ie);
                }
            } else if (
              ((b.tag !== 22 && b.tag !== 23) ||
                b.memoizedState === null ||
                b === e) &&
              b.child !== null
            ) {
              (b.child.return = b), (b = b.child);
              continue;
            }
            if (b === e) break e;
            for (; b.sibling === null; ) {
              if (b.return === null || b.return === e) break e;
              M === b && (M = null), (b = b.return);
            }
            M === b && (M = null),
              (b.sibling.return = b.return),
              (b = b.sibling);
          }
        }
        break;
      case 19:
        Zt(t, e), fn(e), o & 4 && pd(e);
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
            if (cd(r)) {
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
            var a = fd(e);
            Lu(e, a, u);
            break;
          case 3:
          case 4:
            var d = o.stateNode.containerInfo,
              m = fd(e);
            ju(e, m, d);
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
    (ne = e), md(e);
  }
  function md(e, t, r) {
    for (var o = (e.mode & 1) !== 0; ne !== null; ) {
      var u = ne,
        a = u.child;
      if (u.tag === 22 && o) {
        var d = u.memoizedState !== null || io;
        if (!d) {
          var m = u.alternate,
            g = (m !== null && m.memoizedState !== null) || gt;
          m = io;
          var P = gt;
          if (((io = d), (gt = g) && !P))
            for (ne = u; ne !== null; )
              (d = ne),
                (g = d.child),
                d.tag === 22 && d.memoizedState !== null
                  ? vd(u)
                  : g !== null
                  ? ((g.return = d), (ne = g))
                  : vd(u);
          for (; a !== null; ) (ne = a), md(a), (a = a.sibling);
          (ne = u), (io = m), (gt = P);
        }
        yd(e);
      } else
        (u.subtreeFlags & 8772) !== 0 && a !== null
          ? ((a.return = u), (ne = a))
          : yd(e);
    }
  }
  function yd(e) {
    for (; ne !== null; ) {
      var t = ne;
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
                a !== null && gf(t, a, o);
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
                  gf(t, d, r);
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
                      var b = M.dehydrated;
                      b !== null && Si(b);
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
        ne = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (ne = r);
        break;
      }
      ne = t.return;
    }
  }
  function gd(e) {
    for (; ne !== null; ) {
      var t = ne;
      if (t === e) {
        ne = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (ne = r);
        break;
      }
      ne = t.return;
    }
  }
  function vd(e) {
    for (; ne !== null; ) {
      var t = ne;
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
        ne = null;
        break;
      }
      var m = t.sibling;
      if (m !== null) {
        (m.return = t.return), (ne = m);
        break;
      }
      ne = t.return;
    }
  }
  var My = Math.ceil,
    oo = J.ReactCurrentDispatcher,
    Du = J.ReactCurrentOwner,
    Bt = J.ReactCurrentBatchConfig,
    Ae = 0,
    ot = null,
    Ze = null,
    dt = 0,
    It = 0,
    qr = Ln(0),
    it = 0,
    Bi = null,
    rr = 0,
    lo = 0,
    zu = 0,
    Hi = null,
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
    Wi = 0,
    $u = null,
    fo = -1,
    po = 0;
  function kt() {
    return (Ae & 6) !== 0 ? Ge() : fo !== -1 ? fo : (fo = Ge());
  }
  function Vn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Ae & 2) !== 0 && dt !== 0
      ? dt & -dt
      : ky.transition !== null
      ? (po === 0 && (po = cc()), po)
      : ((e = Me),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wc(e.type))),
        e);
  }
  function en(e, t, r, o) {
    if (50 < Wi) throw ((Wi = 0), ($u = null), Error(s(185)));
    mi(e, r, o),
      ((Ae & 2) === 0 || e !== ot) &&
        (e === ot && ((Ae & 2) === 0 && (lo |= r), it === 4 && Bn(e, dt)),
        Tt(e, o),
        r === 1 &&
          Ae === 0 &&
          (t.mode & 1) === 0 &&
          ((Kr = Ge() + 500), Us && zn()));
  }
  function Tt(e, t) {
    var r = e.callbackNode;
    km(e, t);
    var o = ks(e, e === ot ? dt : 0);
    if (o === 0)
      r !== null && lc(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && lc(r), t === 1))
        e.tag === 0 ? Sy(Sd.bind(null, e)) : sf(Sd.bind(null, e)),
          yy(function () {
            (Ae & 6) === 0 && zn();
          }),
          (r = null);
      else {
        switch (fc(o)) {
          case 1:
            r = vl;
            break;
          case 4:
            r = uc;
            break;
          case 16:
            r = gs;
            break;
          case 536870912:
            r = ac;
            break;
          default:
            r = gs;
        }
        r = Pd(r, wd.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function wd(e, t) {
    if (((fo = -1), (po = 0), (Ae & 6) !== 0)) throw Error(s(327));
    var r = e.callbackNode;
    if (Gr() && e.callbackNode !== r) return null;
    var o = ks(e, e === ot ? dt : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = ho(e, o);
    else {
      t = o;
      var u = Ae;
      Ae |= 2;
      var a = xd();
      (ot !== e || dt !== t) && ((En = null), (Kr = Ge() + 500), sr(e, t));
      do
        try {
          by();
          break;
        } catch (m) {
          kd(e, m);
        }
      while (!0);
      ru(),
        (oo.current = a),
        (Ae = u),
        Ze !== null ? (t = 0) : ((ot = null), (dt = 0), (t = it));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((u = wl(e)), u !== 0 && ((o = u), (t = Uu(e, u)))),
        t === 1)
      )
        throw ((r = Bi), sr(e, 0), Bn(e, o), Tt(e, Ge()), r);
      if (t === 6) Bn(e, o);
      else {
        if (
          ((u = e.current.alternate),
          (o & 30) === 0 &&
            !$y(u) &&
            ((t = ho(e, o)),
            t === 2 && ((a = wl(e)), a !== 0 && ((o = a), (t = Uu(e, a)))),
            t === 1))
        )
          throw ((r = Bi), sr(e, 0), Bn(e, o), Tt(e, Ge()), r);
        switch (((e.finishedWork = u), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            or(e, Pt, En);
            break;
          case 3:
            if (
              (Bn(e, o),
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
            if ((Bn(e, o), (o & 4194240) === o)) break;
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
    return Tt(e, Ge()), e.callbackNode === r ? wd.bind(null, e) : null;
  }
  function Uu(e, t) {
    var r = Hi;
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
  function Bn(e, t) {
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
  function Sd(e) {
    if ((Ae & 6) !== 0) throw Error(s(327));
    Gr();
    var t = ks(e, 0);
    if ((t & 1) === 0) return Tt(e, Ge()), null;
    var r = ho(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = wl(e);
      o !== 0 && ((t = o), (r = Uu(e, o)));
    }
    if (r === 1) throw ((r = Bi), sr(e, 0), Bn(e, t), Tt(e, Ge()), r);
    if (r === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      or(e, Pt, En),
      Tt(e, Ge()),
      null
    );
  }
  function Vu(e, t) {
    var r = Ae;
    Ae |= 1;
    try {
      return e(t);
    } finally {
      (Ae = r), Ae === 0 && ((Kr = Ge() + 500), Us && zn());
    }
  }
  function ir(e) {
    bn !== null && bn.tag === 0 && (Ae & 6) === 0 && Gr();
    var t = Ae;
    Ae |= 1;
    var r = Bt.transition,
      o = Me;
    try {
      if (((Bt.transition = null), (Me = 1), e)) return e();
    } finally {
      (Me = o), (Bt.transition = r), (Ae = t), (Ae & 6) === 0 && zn();
    }
  }
  function Bu() {
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
            Bu();
        }
        r = r.return;
      }
    if (
      ((ot = e),
      (Ze = e = Hn(e.current, null)),
      (dt = It = t),
      (it = 0),
      (Bi = null),
      (zu = lo = rr = 0),
      (Pt = Hi = null),
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
  function kd(e, t) {
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
          (Ii = !1),
          (Mi = 0),
          (Du.current = null),
          r === null || r.return === null)
        ) {
          (it = 1), (Bi = t), (Ze = null);
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
              b = M.tag;
            if ((M.mode & 1) === 0 && (b === 0 || b === 11 || b === 15)) {
              var I = M.alternate;
              I
                ? ((M.updateQueue = I.updateQueue),
                  (M.memoizedState = I.memoizedState),
                  (M.lanes = I.lanes))
                : ((M.updateQueue = null), (M.memoizedState = null));
            }
            var Z = Qf(d);
            if (Z !== null) {
              (Z.flags &= -257),
                qf(Z, d, m, a, t),
                Z.mode & 1 && Wf(a, P, t),
                (t = Z),
                (g = P);
              var re = t.updateQueue;
              if (re === null) {
                var ie = new Set();
                ie.add(g), (t.updateQueue = ie);
              } else re.add(g);
              break e;
            } else {
              if ((t & 1) === 0) {
                Wf(a, P, t), Hu();
                break e;
              }
              g = Error(s(426));
            }
          } else if (He && m.mode & 1) {
            var Xe = Qf(d);
            if (Xe !== null) {
              (Xe.flags & 65536) === 0 && (Xe.flags |= 256),
                qf(Xe, d, m, a, t),
                tu(Wr(g, m));
              break e;
            }
          }
          (a = g = Wr(g, m)),
            it !== 4 && (it = 2),
            Hi === null ? (Hi = [a]) : Hi.push(a),
            (a = d);
          do {
            switch (a.tag) {
              case 3:
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var C = Bf(a, g, t);
                yf(a, C);
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
                  var V = Hf(a, m, t);
                  yf(a, V);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        Cd(r);
      } catch (le) {
        (t = le), Ze === r && r !== null && (Ze = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function xd() {
    var e = oo.current;
    return (oo.current = eo), e === null ? eo : e;
  }
  function Hu() {
    (it === 0 || it === 3 || it === 2) && (it = 4),
      ot === null ||
        ((rr & 268435455) === 0 && (lo & 268435455) === 0) ||
        Bn(ot, dt);
  }
  function ho(e, t) {
    var r = Ae;
    Ae |= 2;
    var o = xd();
    (ot !== e || dt !== t) && ((En = null), sr(e, t));
    do
      try {
        Uy();
        break;
      } catch (u) {
        kd(e, u);
      }
    while (!0);
    if ((ru(), (Ae = r), (oo.current = o), Ze !== null)) throw Error(s(261));
    return (ot = null), (dt = 0), it;
  }
  function Uy() {
    for (; Ze !== null; ) Ed(Ze);
  }
  function by() {
    for (; Ze !== null && !dm(); ) Ed(Ze);
  }
  function Ed(e) {
    var t = Rd(e.alternate, e, It);
    (e.memoizedProps = e.pendingProps),
      t === null ? Cd(e) : (Ze = t),
      (Du.current = null);
  }
  function Cd(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = jy(r, t, It)), r !== null)) {
          Ze = r;
          return;
        }
      } else {
        if (((r = Ly(r, t)), r !== null)) {
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
    var o = Me,
      u = Bt.transition;
    try {
      (Bt.transition = null), (Me = 1), Vy(e, t, r, o);
    } finally {
      (Bt.transition = u), (Me = o);
    }
    return null;
  }
  function Vy(e, t, r, o) {
    do Gr();
    while (bn !== null);
    if ((Ae & 6) !== 0) throw Error(s(327));
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
        Pd(gs, function () {
          return Gr(), null;
        })),
      (a = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || a)
    ) {
      (a = Bt.transition), (Bt.transition = null);
      var d = Me;
      Me = 1;
      var m = Ae;
      (Ae |= 4),
        (Du.current = null),
        zy(e, r),
        hd(r, e),
        uy(Hl),
        (Cs = !!Bl),
        (Hl = Bl = null),
        (e.current = r),
        Iy(r),
        pm(),
        (Ae = m),
        (Me = d),
        (Bt.transition = a);
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
      (a & 1) !== 0 ? (e === $u ? Wi++ : ((Wi = 0), ($u = e))) : (Wi = 0),
      zn(),
      null
    );
  }
  function Gr() {
    if (bn !== null) {
      var e = fc(co),
        t = Bt.transition,
        r = Me;
      try {
        if (((Bt.transition = null), (Me = 16 > e ? 16 : e), bn === null))
          var o = !1;
        else {
          if (((e = bn), (bn = null), (co = 0), (Ae & 6) !== 0))
            throw Error(s(331));
          var u = Ae;
          for (Ae |= 4, ne = e.current; ne !== null; ) {
            var a = ne,
              d = a.child;
            if ((ne.flags & 16) !== 0) {
              var m = a.deletions;
              if (m !== null) {
                for (var g = 0; g < m.length; g++) {
                  var P = m[g];
                  for (ne = P; ne !== null; ) {
                    var M = ne;
                    switch (M.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Vi(8, M, a);
                    }
                    var b = M.child;
                    if (b !== null) (b.return = M), (ne = b);
                    else
                      for (; ne !== null; ) {
                        M = ne;
                        var I = M.sibling,
                          Z = M.return;
                        if ((ad(M), M === P)) {
                          ne = null;
                          break;
                        }
                        if (I !== null) {
                          (I.return = Z), (ne = I);
                          break;
                        }
                        ne = Z;
                      }
                  }
                }
                var re = a.alternate;
                if (re !== null) {
                  var ie = re.child;
                  if (ie !== null) {
                    re.child = null;
                    do {
                      var Xe = ie.sibling;
                      (ie.sibling = null), (ie = Xe);
                    } while (ie !== null);
                  }
                }
                ne = a;
              }
            }
            if ((a.subtreeFlags & 2064) !== 0 && d !== null)
              (d.return = a), (ne = d);
            else
              e: for (; ne !== null; ) {
                if (((a = ne), (a.flags & 2048) !== 0))
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vi(9, a, a.return);
                  }
                var C = a.sibling;
                if (C !== null) {
                  (C.return = a.return), (ne = C);
                  break e;
                }
                ne = a.return;
              }
          }
          var w = e.current;
          for (ne = w; ne !== null; ) {
            d = ne;
            var O = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && O !== null)
              (O.return = d), (ne = O);
            else
              e: for (d = w; ne !== null; ) {
                if (((m = ne), (m.flags & 2048) !== 0))
                  try {
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        so(9, m);
                    }
                  } catch (le) {
                    Ke(m, m.return, le);
                  }
                if (m === d) {
                  ne = null;
                  break e;
                }
                var V = m.sibling;
                if (V !== null) {
                  (V.return = m.return), (ne = V);
                  break e;
                }
                ne = m.return;
              }
          }
          if (
            ((Ae = u),
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
        (Me = r), (Bt.transition = t);
      }
    }
    return !1;
  }
  function _d(e, t, r) {
    (t = Wr(r, t)),
      (t = Bf(e, t, 1)),
      (e = Mn(e, t, 1)),
      (t = kt()),
      e !== null && (mi(e, 1, t), Tt(e, t));
  }
  function Ke(e, t, r) {
    if (e.tag === 3) _d(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          _d(t, e, r);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (Un === null || !Un.has(o)))
          ) {
            (e = Wr(r, e)),
              (e = Hf(t, e, 1)),
              (t = Mn(t, e, 1)),
              (e = kt()),
              t !== null && (mi(t, 1, e), Tt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function By(e, t, r) {
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
  function Od(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ss), (Ss <<= 1), (Ss & 130023424) === 0 && (Ss = 4194304)));
    var r = kt();
    (e = Sn(e, t)), e !== null && (mi(e, t, r), Tt(e, r));
  }
  function Hy(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), Od(e, r);
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
    o !== null && o.delete(t), Od(e, r);
  }
  var Rd;
  Rd = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || _t.current) Rt = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
          return (Rt = !1), Ny(e, t, r);
        Rt = (e.flags & 131072) !== 0;
      }
    else (Rt = !1), He && (t.flags & 1048576) !== 0 && of(t, Vs, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        ro(e, t), (e = t.pendingProps);
        var u = Ir(t, ht.current);
        Br(t, r), (u = hu(null, t, o, e, u, r));
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
              t = Zf(null, t, o, e, r);
              break e;
            case 11:
              t = Kf(null, t, o, e, r);
              break e;
            case 14:
              t = Gf(null, t, o, Yt(o.type, e), r);
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
          Zf(e, t, o, u, r)
        );
      case 3:
        e: {
          if ((ed(t), e === null)) throw Error(s(387));
          (o = t.pendingProps),
            (a = t.memoizedState),
            (u = a.element),
            mf(e, t),
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
              (u = Wr(Error(s(423)), t)), (t = td(e, t, o, r, u));
              break e;
            } else if (o !== u) {
              (u = Wr(Error(s(424)), t)), (t = td(e, t, o, r, u));
              break e;
            } else
              for (
                zt = jn(t.stateNode.containerInfo.firstChild),
                  Dt = t,
                  He = !0,
                  Xt = null,
                  r = pf(t, null, o, r),
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
          vf(t),
          e === null && eu(t),
          (o = t.type),
          (u = t.pendingProps),
          (a = e !== null ? e.memoizedProps : null),
          (d = u.children),
          Wl(o, u) ? (d = null) : a !== null && Wl(o, a) && (t.flags |= 32),
          Jf(e, t),
          St(e, t, d, r),
          t.child
        );
      case 6:
        return e === null && eu(t), null;
      case 13:
        return nd(e, t, r);
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
          Kf(e, t, o, u, r)
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
          Br(t, r),
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
          Gf(e, t, o, u, r)
        );
      case 15:
        return Xf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (o = t.type),
          (u = t.pendingProps),
          (u = t.elementType === o ? u : Yt(o, u)),
          ro(e, t),
          (t.tag = 1),
          Ot(o) ? ((e = !0), $s(t)) : (e = !1),
          Br(t, r),
          bf(t, o, u),
          ku(t, o, u, r),
          _u(null, t, o, !0, e, r)
        );
      case 19:
        return id(e, t, r);
      case 22:
        return Yf(e, t, r);
    }
    throw Error(s(156, t.tag));
  };
  function Pd(e, t) {
    return oc(e, t);
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
      if (((e = e.$$typeof), e === ee)) return 11;
      if (e === Le) return 14;
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
        case U:
          return lr(r.children, u, a, t);
        case pe:
          (d = 8), (u |= 8);
          break;
        case me:
          return (
            (e = Ht(12, r, t, u | 2)), (e.elementType = me), (e.lanes = a), e
          );
        case oe:
          return (e = Ht(13, r, t, u)), (e.elementType = oe), (e.lanes = a), e;
        case ve:
          return (e = Ht(19, r, t, u)), (e.elementType = ve), (e.lanes = a), e;
        case _e:
          return yo(r, u, a, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Te:
                d = 10;
                break e;
              case Ce:
                d = 9;
                break e;
              case ee:
                d = 11;
                break e;
              case Le:
                d = 14;
                break e;
              case Pe:
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
      (e.elementType = _e),
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
      $$typeof: q,
      key: o == null ? null : "" + o,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function Td(e) {
    if (!e) return Dn;
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
      if (Ot(r)) return nf(e, r, t);
    }
    return t;
  }
  function Fd(e, t, r, o, u, a, d, m, g) {
    return (
      (e = Ku(r, o, !0, e, u, a, d, m, g)),
      (e.context = Td(null)),
      (r = e.current),
      (o = kt()),
      (u = Vn(r)),
      (a = kn(o, u)),
      (a.callback = t ?? null),
      Mn(r, a, u),
      (e.current.lanes = u),
      mi(e, u, o),
      Tt(e, o),
      e
    );
  }
  function go(e, t, r, o) {
    var u = t.current,
      a = kt(),
      d = Vn(u);
    return (
      (r = Td(r)),
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
  function Ad(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Gu(e, t) {
    Ad(e, t), (e = e.alternate) && Ad(e, t);
  }
  function Xy() {
    return null;
  }
  var Nd =
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
      var t = hc();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Fn.length && t !== 0 && t < Fn[r].priority; r++);
      Fn.splice(r, 0, e), r === 0 && gc(e);
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
      var d = Fd(t, o, e, 0, null, !1, !1, "", jd);
      return (
        (e._reactRootContainer = d),
        (e[yn] = d.current),
        Ti(e.nodeType === 8 ? e.parentNode : e),
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
      Ti(e.nodeType === 8 ? e.parentNode : e),
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
  (dc = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = hi(t.pendingLanes);
          r !== 0 &&
            (kl(t, r | 1),
            Tt(t, Ge()),
            (Ae & 6) === 0 && ((Kr = Ge() + 500), zn()));
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
    (pc = function (e) {
      if (e.tag === 13) {
        var t = Vn(e),
          r = Sn(e, t);
        if (r !== null) {
          var o = kt();
          en(r, e, t, o);
        }
        Gu(e, t);
      }
    }),
    (hc = function () {
      return Me;
    }),
    (mc = function (e, t) {
      var r = Me;
      try {
        return (Me = e), t();
      } finally {
        Me = r;
      }
    }),
    (hl = function (e, t, r) {
      switch (t) {
        case "input":
          if ((ai(e, r), (t = r.name), r.type === "radio" && t != null)) {
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
                Et(o), ai(o, u);
              }
            }
          }
          break;
        case "textarea":
          Q(e, r);
          break;
        case "select":
          (t = r.value), t != null && _(e, !!r.multiple, t, !1);
      }
    }),
    (Za = Vu),
    (ec = ir);
  var Jy = { usingClientEntryPoint: !1, Events: [Ni, Dr, Is, Ya, Ja, Vu] },
    Qi = {
      findFiberByHostInstance: Xn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Zy = {
      bundleType: Qi.bundleType,
      version: Qi.version,
      rendererPackageName: Qi.rendererPackageName,
      rendererConfig: Qi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: J.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = ic(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Qi.findFiberByHostInstance || Xy,
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
    (Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jy),
    (Ft.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Yu(t)) throw Error(s(200));
      return Gy(e, t, null, r);
    }),
    (Ft.createRoot = function (e, t) {
      if (!Yu(e)) throw Error(s(299));
      var r = !1,
        o = "",
        u = Nd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = Ku(e, 1, !1, null, null, r, !1, o, u)),
        (e[yn] = t.current),
        Ti(e.nodeType === 8 ? e.parentNode : e),
        new Xu(t)
      );
    }),
    (Ft.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return (e = ic(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ft.flushSync = function (e) {
      return ir(e);
    }),
    (Ft.hydrate = function (e, t, r) {
      if (!So(t)) throw Error(s(200));
      return ko(null, e, t, !0, r);
    }),
    (Ft.hydrateRoot = function (e, t, r) {
      if (!Yu(e)) throw Error(s(405));
      var o = (r != null && r.hydratedSources) || null,
        u = !1,
        a = "",
        d = Nd;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (u = !0),
          r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (d = r.onRecoverableError)),
        (t = Fd(t, null, e, 1, r ?? null, u, !1, a, d)),
        (e[yn] = t.current),
        Ti(e),
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
    (Ft.render = function (e, t, r) {
      if (!So(t)) throw Error(s(200));
      return ko(null, e, t, !1, r);
    }),
    (Ft.unmountComponentAtNode = function (e) {
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
    (Ft.unstable_batchedUpdates = Vu),
    (Ft.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!So(r)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return ko(e, t, r, !1, o);
    }),
    (Ft.version = "18.3.1-next-f1338f8080-20240426"),
    Ft
  );
}
var bd;
function bp() {
  if (bd) return ea.exports;
  bd = 1;
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
var Vd;
function ug() {
  if (Vd) return Co;
  Vd = 1;
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
function ei(n, i, s) {
  if (s || arguments.length === 2)
    for (var l = 0, c = i.length, f; l < c; l++)
      (f || !(l in i)) &&
        (f || (f = Array.prototype.slice.call(i, 0, l)), (f[l] = i[l]));
  return n.concat(f || Array.prototype.slice.call(i));
}
var Ve = "-ms-",
  Zi = "-moz-",
  ze = "-webkit-",
  Vp = "comm",
  Xo = "rule",
  Na = "decl",
  cg = "@import",
  Bp = "@keyframes",
  fg = "@layer",
  Hp = Math.abs,
  ja = String.fromCharCode,
  ha = Object.assign;
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
function Oe(n, i, s) {
  return n.replace(i, s);
}
function Fo(n, i, s) {
  return n.indexOf(i, s);
}
function at(n, i) {
  return n.charCodeAt(i) | 0;
}
function ti(n, i, s) {
  return n.slice(i, s);
}
function hn(n) {
  return n.length;
}
function Qp(n) {
  return n.length;
}
function Ji(n, i) {
  return i.push(n), n;
}
function pg(n, i) {
  return n.map(i).join("");
}
function Bd(n, i) {
  return n.filter(function (s) {
    return !_n(s, i);
  });
}
var Yo = 1,
  ni = 1,
  qp = 0,
  Qt = 0,
  nt = 0,
  si = "";
function Jo(n, i, s, l, c, f, p, h) {
  return {
    value: n,
    root: i,
    parent: s,
    type: l,
    props: c,
    children: f,
    line: Yo,
    column: ni,
    length: p,
    return: "",
    siblings: h,
  };
}
function Qn(n, i) {
  return ha(
    Jo("", null, null, "", null, null, 0, n.siblings),
    n,
    { length: -n.length },
    i
  );
}
function Xr(n) {
  for (; n.root; ) n = Qn(n.root, { children: [n] });
  Ji(n, n.siblings);
}
function hg() {
  return nt;
}
function mg() {
  return (
    (nt = Qt > 0 ? at(si, --Qt) : 0), ni--, nt === 10 && ((ni = 1), Yo--), nt
  );
}
function rn() {
  return (
    (nt = Qt < qp ? at(si, Qt++) : 0), ni++, nt === 10 && ((ni = 1), Yo++), nt
  );
}
function dr() {
  return at(si, Qt);
}
function Ao() {
  return Qt;
}
function Zo(n, i) {
  return ti(si, n, i);
}
function ma(n) {
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
  return (Yo = ni = 1), (qp = hn((si = n))), (Qt = 0), [];
}
function gg(n) {
  return (si = ""), n;
}
function ra(n) {
  return Wp(Zo(Qt - 1, ya(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function vg(n) {
  for (; (nt = dr()) && nt < 33; ) rn();
  return ma(n) > 2 || ma(nt) > 3 ? "" : " ";
}
function wg(n, i) {
  for (
    ;
    --i &&
    rn() &&
    !(nt < 48 || nt > 102 || (nt > 57 && nt < 65) || (nt > 70 && nt < 97));

  );
  return Zo(n, Ao() + (i < 6 && dr() == 32 && rn() == 32));
}
function ya(n) {
  for (; rn(); )
    switch (nt) {
      case n:
        return Qt;
      case 34:
      case 39:
        n !== 34 && n !== 39 && ya(nt);
        break;
      case 40:
        n === 41 && ya(n);
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
  for (; !ma(dr()); ) rn();
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
      F = 0,
      B = 0,
      A = 0,
      R = 1,
      j = 1,
      X = 1,
      $ = 0,
      G = "",
      J = c,
      z = f,
      q = l,
      U = G;
    j;

  )
    switch (((A = $), ($ = rn()))) {
      case 40:
        if (A != 108 && at(U, E - 1) == 58) {
          Fo((U += Oe(ra($), "&", "&\f")), "&\f", Hp(x ? h[x - 1] : 0)) != -1 &&
            (X = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        U += ra($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        U += vg(A);
        break;
      case 92:
        U += wg(Ao() - 1, 7);
        continue;
      case 47:
        switch (dr()) {
          case 42:
          case 47:
            Ji(Eg(Sg(rn(), Ao()), i, s, v), v);
            break;
          default:
            U += "/";
        }
        break;
      case 123 * R:
        h[x++] = hn(U) * X;
      case 125 * R:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            j = 0;
          case 59 + S:
            X == -1 && (U = Oe(U, /\f/g, "")),
              B > 0 &&
                hn(U) - E &&
                Ji(
                  B > 32
                    ? Wd(U + ";", l, s, E - 1, v)
                    : Wd(Oe(U, " ", "") + ";", l, s, E - 2, v),
                  v
                );
            break;
          case 59:
            U += ";";
          default:
            if (
              (Ji(
                (q = Hd(U, i, s, x, S, c, h, G, (J = []), (z = []), E, f)),
                f
              ),
              $ === 123)
            )
              if (S === 0) No(U, i, q, q, J, f, E, h, z);
              else
                switch (F === 99 && at(U, 3) === 110 ? 100 : F) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    No(
                      n,
                      q,
                      q,
                      l && Ji(Hd(n, q, q, 0, 0, c, h, G, c, (J = []), E, z), z),
                      c,
                      z,
                      E,
                      h,
                      l ? J : z
                    );
                    break;
                  default:
                    No(U, q, q, q, [""], z, 0, h, z);
                }
        }
        (x = S = B = 0), (R = X = 1), (G = U = ""), (E = p);
        break;
      case 58:
        (E = 1 + hn(U)), (B = A);
      default:
        if (R < 1) {
          if ($ == 123) --R;
          else if ($ == 125 && R++ == 0 && mg() == 125) continue;
        }
        switch (((U += ja($)), $ * R)) {
          case 38:
            X = S > 0 ? 1 : ((U += "\f"), -1);
            break;
          case 44:
            (h[x++] = (hn(U) - 1) * X), (X = 1);
            break;
          case 64:
            dr() === 45 && (U += ra(rn())),
              (F = dr()),
              (S = E = hn((G = U += kg(Ao())))),
              $++;
            break;
          case 45:
            A === 45 && hn(U) == 2 && (R = 0);
        }
    }
  return f;
}
function Hd(n, i, s, l, c, f, p, h, v, x, S, E) {
  for (
    var F = c - 1, B = c === 0 ? f : [""], A = Qp(B), R = 0, j = 0, X = 0;
    R < l;
    ++R
  )
    for (var $ = 0, G = ti(n, F + 1, (F = Hp((j = p[R])))), J = n; $ < A; ++$)
      (J = Wp(j > 0 ? B[$] + " " + G : Oe(G, /&\f/g, B[$]))) && (v[X++] = J);
  return Jo(n, i, s, c === 0 ? Xo : h, v, x, S, E);
}
function Eg(n, i, s, l) {
  return Jo(n, i, s, Vp, ja(hg()), ti(n, 2, -2), 0, l);
}
function Wd(n, i, s, l, c) {
  return Jo(n, i, s, Na, ti(n, 0, l), ti(n, l + 1, -1), l, c);
}
function Kp(n, i, s) {
  switch (dg(n, i)) {
    case 5103:
      return ze + "print-" + n + n;
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
      return ze + n + n;
    case 4789:
      return Zi + n + n;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ze + n + Zi + n + Ve + n + n;
    case 5936:
      switch (at(n, i + 11)) {
        case 114:
          return ze + n + Ve + Oe(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        case 108:
          return ze + n + Ve + Oe(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        case 45:
          return ze + n + Ve + Oe(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
    case 6828:
    case 4268:
    case 2903:
      return ze + n + Ve + n + n;
    case 6165:
      return ze + n + Ve + "flex-" + n + n;
    case 5187:
      return (
        ze + n + Oe(n, /(\w+).+(:[^]+)/, ze + "box-$1$2" + Ve + "flex-$1$2") + n
      );
    case 5443:
      return (
        ze +
        n +
        Ve +
        "flex-item-" +
        Oe(n, /flex-|-self/g, "") +
        (_n(n, /flex-|baseline/)
          ? ""
          : Ve + "grid-row-" + Oe(n, /flex-|-self/g, "")) +
        n
      );
    case 4675:
      return (
        ze +
        n +
        Ve +
        "flex-line-pack" +
        Oe(n, /align-content|flex-|-self/g, "") +
        n
      );
    case 5548:
      return ze + n + Ve + Oe(n, "shrink", "negative") + n;
    case 5292:
      return ze + n + Ve + Oe(n, "basis", "preferred-size") + n;
    case 6060:
      return (
        ze +
        "box-" +
        Oe(n, "-grow", "") +
        ze +
        n +
        Ve +
        Oe(n, "grow", "positive") +
        n
      );
    case 4554:
      return ze + Oe(n, /([^-])(transform)/g, "$1" + ze + "$2") + n;
    case 6187:
      return (
        Oe(
          Oe(Oe(n, /(zoom-|grab)/, ze + "$1"), /(image-set)/, ze + "$1"),
          n,
          ""
        ) + n
      );
    case 5495:
    case 3959:
      return Oe(n, /(image-set\([^]*)/, ze + "$1$`$1");
    case 4968:
      return (
        Oe(
          Oe(n, /(.+:)(flex-)?(.*)/, ze + "box-pack:$3" + Ve + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        ze +
        n +
        n
      );
    case 4200:
      if (!_n(n, /flex-|baseline/))
        return Ve + "grid-column-align" + ti(n, i) + n;
      break;
    case 2592:
    case 3360:
      return Ve + Oe(n, "template-", "") + n;
    case 4384:
    case 3616:
      return s &&
        s.some(function (l, c) {
          return (i = c), _n(l.props, /grid-\w+-end/);
        })
        ? ~Fo(n + (s = s[i].value), "span", 0)
          ? n
          : Ve +
            Oe(n, "-start", "") +
            n +
            Ve +
            "grid-row-span:" +
            (~Fo(s, "span", 0) ? _n(s, /\d+/) : +_n(s, /\d+/) - +_n(n, /\d+/)) +
            ";"
        : Ve + Oe(n, "-start", "") + n;
    case 4896:
    case 4128:
      return s &&
        s.some(function (l) {
          return _n(l.props, /grid-\w+-start/);
        })
        ? n
        : Ve + Oe(Oe(n, "-end", "-span"), "span ", "") + n;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Oe(n, /(.+)-inline(.+)/, ze + "$1$2") + n;
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
              Oe(
                n,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  ze +
                  "$2-$3$1" +
                  Zi +
                  (at(n, i + 3) == 108 ? "$3" : "$2-$3")
              ) + n
            );
          case 115:
            return ~Fo(n, "stretch", 0)
              ? Kp(Oe(n, "stretch", "fill-available"), i, s) + n
              : n;
        }
      break;
    case 5152:
    case 5920:
      return Oe(
        n,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (l, c, f, p, h, v, x) {
          return (
            Ve +
            c +
            ":" +
            f +
            x +
            (p ? Ve + c + "-span:" + (h ? v : +v - +f) + x : "") +
            n
          );
        }
      );
    case 4949:
      if (at(n, i + 6) === 121) return Oe(n, ":", ":" + ze) + n;
      break;
    case 6444:
      switch (at(n, at(n, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            Oe(
              n,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                ze +
                (at(n, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ze +
                "$2$3$1" +
                Ve +
                "$2box$3"
            ) + n
          );
        case 100:
          return Oe(n, ":", ":" + Ve) + n;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Oe(n, "scroll-", "scroll-snap-") + n;
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
    case Na:
      return (n.return = n.return || n.value);
    case Vp:
      return "";
    case Bp:
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
      case Na:
        n.return = Kp(n.value, n.length, s);
        return;
      case Bp:
        return $o([Qn(n, { value: Oe(n.value, "@", "@" + ze) })], l);
      case Xo:
        if (n.length)
          return pg((s = n.props), function (c) {
            switch (_n(c, (l = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Xr(Qn(n, { props: [Oe(c, /:(read-\w+)/, ":" + Zi + "$1")] })),
                  Xr(Qn(n, { props: [c] })),
                  ha(n, { props: Bd(s, l) });
                break;
              case "::placeholder":
                Xr(
                  Qn(n, { props: [Oe(c, /:(plac\w+)/, ":" + ze + "input-$1")] })
                ),
                  Xr(Qn(n, { props: [Oe(c, /:(plac\w+)/, ":" + Zi + "$1")] })),
                  Xr(Qn(n, { props: [Oe(c, /:(plac\w+)/, Ve + "input-$1")] })),
                  Xr(Qn(n, { props: [c] })),
                  ha(n, { props: Bd(s, l) });
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
  ri =
    (typeof process < "u" &&
      Mt !== void 0 &&
      (Mt.REACT_APP_SC_ATTR || Mt.SC_ATTR)) ||
    "data-styled",
  Gp = "active",
  Xp = "data-styled-version",
  el = "6.1.19",
  La = `/*!sc*/
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
  Fg = {},
  tl = Object.freeze([]),
  ii = Object.freeze({});
function Yp(n, i, s) {
  return (
    s === void 0 && (s = ii), (n.theme !== s.theme && n.theme) || i || s.theme
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
  Ag = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Ng = /(^-|-$)/g;
function Qd(n) {
  return n.replace(Ag, "-").replace(Ng, "");
}
var jg = /(a)(d)/gi,
  _o = 52,
  qd = function (n) {
    return String.fromCharCode(n + (n > 25 ? 39 : 97));
  };
function ga(n) {
  var i,
    s = "";
  for (i = Math.abs(n); i > _o; i = (i / _o) | 0) s = qd(i % _o) + s;
  return (qd(i % _o) + s).replace(jg, "$1-$2");
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
function Da(n) {
  return ga(eh(n) >>> 0);
}
function Lg(n) {
  return n.displayName || n.name || "Component";
}
function sa(n) {
  return typeof n == "string" && !0;
}
var th = typeof Symbol == "function" && Symbol.for,
  nh = th ? Symbol.for("react.memo") : 60115,
  Dg = th ? Symbol.for("react.forward_ref") : 60112,
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
    (((ia = {})[Dg] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (ia[nh] = rh),
    ia);
function Kd(n) {
  return ("type" in (i = n) && i.type.$$typeof) === nh
    ? rh
    : "$$typeof" in n
    ? Mg[n.$$typeof]
    : zg;
  var i;
}
var $g = Object.defineProperty,
  Ug = Object.getOwnPropertyNames,
  Gd = Object.getOwnPropertySymbols,
  bg = Object.getOwnPropertyDescriptor,
  Vg = Object.getPrototypeOf,
  Xd = Object.prototype;
function ih(n, i, s) {
  if (typeof i != "string") {
    if (Xd) {
      var l = Vg(i);
      l && l !== Xd && ih(n, l, s);
    }
    var c = Ug(i);
    Gd && (c = c.concat(Gd(i)));
    for (var f = Kd(n), p = Kd(i), h = 0; h < c.length; ++h) {
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
function za(n) {
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
function va(n, i, s) {
  if ((s === void 0 && (s = !1), !s && !rs(n) && !Array.isArray(n))) return i;
  if (Array.isArray(i))
    for (var l = 0; l < i.length; l++) n[l] = va(n[l], i[l]);
  else if (rs(i)) for (var l in i) n[l] = va(n[l], i[l]);
  return n;
}
function Ia(n, i) {
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
var Bg = (function () {
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
          s += "".concat(this.tag.getRule(p)).concat(La);
        return s;
      }),
      n
    );
  })(),
  jo = new Map(),
  Vo = new Map(),
  Lo = 1,
  Oo = function (n) {
    if (jo.has(n)) return jo.get(n);
    for (; Vo.has(Lo); ) Lo++;
    var i = Lo++;
    return jo.set(n, i), Vo.set(i, n), i;
  },
  Hg = function (n, i) {
    (Lo = i + 1), jo.set(n, i), Vo.set(i, n);
  },
  Wg = "style[".concat(ri, "][").concat(Xp, '="').concat(el, '"]'),
  Qg = new RegExp(
    "^".concat(ri, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  qg = function (n, i, s) {
    for (var l, c = s.split(","), f = 0, p = c.length; f < p; f++)
      (l = c[f]) && n.registerName(i, l);
  },
  Kg = function (n, i) {
    for (
      var s,
        l = ((s = i.textContent) !== null && s !== void 0 ? s : "").split(La),
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
  Yd = function (n) {
    for (
      var i = document.querySelectorAll(Wg), s = 0, l = i.length;
      s < l;
      s++
    ) {
      var c = i[s];
      c &&
        c.getAttribute(ri) !== Gp &&
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
        var v = Array.from(h.querySelectorAll("style[".concat(ri, "]")));
        return v[v.length - 1];
      })(s),
      f = c !== void 0 ? c.nextSibling : null;
    l.setAttribute(ri, Gp), l.setAttribute(Xp, el);
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
  Jd = Uo,
  Zg = { isServer: !Uo, useCSSOMInjection: !Tg },
  Bo = (function () {
    function n(i, s, l) {
      i === void 0 && (i = ii), s === void 0 && (s = {});
      var c = this;
      (this.options = ct(ct({}, Zg), i)),
        (this.gs = s),
        (this.names = new Map(l)),
        (this.server = !!i.isServer),
        !this.server && Uo && Jd && ((Jd = !1), Yd(this)),
        Ia(this, function () {
          return (function (f) {
            for (
              var p = f.getTag(),
                h = p.length,
                v = "",
                x = function (E) {
                  var F = (function (X) {
                    return Vo.get(X);
                  })(E);
                  if (F === void 0) return "continue";
                  var B = f.names.get(F),
                    A = p.getGroup(E);
                  if (B === void 0 || !B.size || A.length === 0)
                    return "continue";
                  var R = ""
                      .concat(ri, ".g")
                      .concat(E, '[id="')
                      .concat(F, '"]'),
                    j = "";
                  B !== void 0 &&
                    B.forEach(function (X) {
                      X.length > 0 && (j += "".concat(X, ","));
                    }),
                    (v += ""
                      .concat(A)
                      .concat(R, '{content:"')
                      .concat(j, '"}')
                      .concat(La));
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
        !this.server && Uo && Yd(this);
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
            new Bg(i)))
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
    c = ii,
    f = c.options,
    p = f === void 0 ? ii : f,
    h = c.plugins,
    v = h === void 0 ? tl : h,
    x = function (F, B, A) {
      return A.startsWith(s) && A.endsWith(s) && A.replaceAll(s, "").length > 0
        ? ".".concat(i)
        : F;
    },
    S = v.slice();
  S.push(function (F) {
    F.type === Xo &&
      F.value.includes("&") &&
      (F.props[0] = F.props[0].replace(ev, s).replace(l, x));
  }),
    p.prefix && S.push(Rg),
    S.push(Cg);
  var E = function (F, B, A, R) {
    B === void 0 && (B = ""),
      A === void 0 && (A = ""),
      R === void 0 && (R = "&"),
      (i = R),
      (s = B),
      (l = new RegExp("\\".concat(s, "\\b"), "g"));
    var j = F.replace(tv, ""),
      X = xg(A || B ? "".concat(A, " ").concat(B, " { ").concat(j, " }") : j);
    p.namespace && (X = oh(X, p.namespace));
    var $ = [];
    return (
      $o(
        X,
        _g(
          S.concat(
            Og(function (G) {
              return $.push(G);
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
          .reduce(function (F, B) {
            return B.name || mr(15), Zr(F, B.name);
          }, Zp)
          .toString()
      : ""),
    E
  );
}
var rv = new Bo(),
  wa = nv(),
  lh = ce.createContext({
    shouldForwardProp: void 0,
    styleSheet: rv,
    stylis: wa,
  });
lh.Consumer;
ce.createContext(void 0);
function Sa() {
  return Ie.useContext(lh);
}
var uh = (function () {
    function n(i, s) {
      var l = this;
      (this.inject = function (c, f) {
        f === void 0 && (f = wa);
        var p = l.name + f.hash;
        c.hasNameForId(l.id, p) ||
          c.insertRules(l.id, p, f(l.rules, p, "@keyframes"));
      }),
        (this.name = i),
        (this.id = "sc-keyframes-".concat(i)),
        (this.rules = s),
        Ia(this, function () {
          throw mr(12, String(l.name));
        });
    }
    return (
      (n.prototype.getName = function (i) {
        return i === void 0 && (i = wa), this.name + i.hash;
      }),
      n
    );
  })(),
  iv = function (n) {
    return n >= "A" && n <= "Z";
  };
function Zd(n) {
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
          ? l.push("".concat(Zd(c), ":"), f, ";")
          : rs(f)
          ? l.push.apply(l, ei(ei(["".concat(c, " {")], ch(f), !1), ["}"], !1))
          : l.push(
              ""
                .concat(Zd(c), ": ")
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
  if (za(n)) return [".".concat(n.styledComponentId)];
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
    if (hr(s) && !za(s)) return !1;
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
        Bo.registerId(s);
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
              p = ga(Zr(this.baseHash, f) >>> 0);
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
              var F = bo(Kn(E, i, s, l));
              (v = Zr(v, F + S)), (x += F);
            }
          }
          if (x) {
            var B = ga(v >>> 0);
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
  is = ce.createContext(void 0);
is.Consumer;
function lv(n) {
  var i = ce.useContext(is),
    s = Ie.useMemo(
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
    ? ce.createElement(is.Provider, { value: s }, n.children)
    : null;
}
var oa = {};
function uv(n, i, s) {
  var l = za(n),
    c = n,
    f = !sa(n),
    p = i.attrs,
    h = p === void 0 ? tl : p,
    v = i.componentId,
    x =
      v === void 0
        ? (function (J, z) {
            var q = typeof J != "string" ? "sc" : Qd(J);
            oa[q] = (oa[q] || 0) + 1;
            var U = "".concat(q, "-").concat(Da(el + q + oa[q]));
            return z ? "".concat(z, "-").concat(U) : U;
          })(i.displayName, i.parentComponentId)
        : v,
    S = i.displayName,
    E =
      S === void 0
        ? (function (J) {
            return sa(J) ? "styled.".concat(J) : "Styled(".concat(Lg(J), ")");
          })(n)
        : S,
    F =
      i.displayName && i.componentId
        ? "".concat(Qd(i.displayName), "-").concat(i.componentId)
        : i.componentId || x,
    B = l && c.attrs ? c.attrs.concat(h).filter(Boolean) : h,
    A = i.shouldForwardProp;
  if (l && c.shouldForwardProp) {
    var R = c.shouldForwardProp;
    if (i.shouldForwardProp) {
      var j = i.shouldForwardProp;
      A = function (J, z) {
        return R(J, z) && j(J, z);
      };
    } else A = R;
  }
  var X = new ov(s, F, l ? c.componentStyle : void 0);
  function $(J, z) {
    return (function (q, U, pe) {
      var me = q.attrs,
        Te = q.componentStyle,
        Ce = q.defaultProps,
        ee = q.foldedComponentIds,
        oe = q.styledComponentId,
        ve = q.target,
        Le = ce.useContext(is),
        Pe = Sa(),
        _e = q.shouldForwardProp || Pe.shouldForwardProp,
        W = Yp(U, Le, Ce) || ii,
        te = (function (ke, Se, ae) {
          for (
            var ye,
              xe = ct(ct({}, Se), { className: void 0, theme: ae }),
              Be = 0;
            Be < ke.length;
            Be += 1
          ) {
            var qt = hr((ye = ke[Be])) ? ye(xe) : ye;
            for (var Et in qt)
              xe[Et] =
                Et === "className"
                  ? ur(xe[Et], qt[Et])
                  : Et === "style"
                  ? ct(ct({}, xe[Et]), qt[Et])
                  : qt[Et];
          }
          return (
            Se.className && (xe.className = ur(xe.className, Se.className)), xe
          );
        })(me, U, W),
        K = te.as || ve,
        k = {};
      for (var L in te)
        te[L] === void 0 ||
          L[0] === "$" ||
          L === "as" ||
          (L === "theme" && te.theme === W) ||
          (L === "forwardedAs"
            ? (k.as = te.forwardedAs)
            : (_e && !_e(L, K)) || (k[L] = te[L]));
      var he = (function (ke, Se) {
          var ae = Sa(),
            ye = ke.generateAndInjectStyles(Se, ae.styleSheet, ae.stylis);
          return ye;
        })(Te, te),
        we = ur(ee, oe);
      return (
        he && (we += " " + he),
        te.className && (we += " " + te.className),
        (k[sa(K) && !Jp.has(K) ? "class" : "className"] = we),
        pe && (k.ref = pe),
        Ie.createElement(K, k)
      );
    })(G, J, z);
  }
  $.displayName = E;
  var G = ce.forwardRef($);
  return (
    (G.attrs = B),
    (G.componentStyle = X),
    (G.displayName = E),
    (G.shouldForwardProp = A),
    (G.foldedComponentIds = l
      ? ur(c.foldedComponentIds, c.styledComponentId)
      : ""),
    (G.styledComponentId = F),
    (G.target = l ? c.target : n),
    Object.defineProperty(G, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (J) {
        this._foldedDefaultProps = l
          ? (function (z) {
              for (var q = [], U = 1; U < arguments.length; U++)
                q[U - 1] = arguments[U];
              for (var pe = 0, me = q; pe < me.length; pe++) va(z, me[pe], !0);
              return z;
            })({}, c.defaultProps, J)
          : J;
      },
    }),
    Ia(G, function () {
      return ".".concat(G.styledComponentId);
    }),
    f &&
      ih(G, n, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    G
  );
}
function ep(n, i) {
  for (var s = [n[0]], l = 0, c = i.length; l < c; l += 1)
    s.push(i[l], n[l + 1]);
  return s;
}
var tp = function (n) {
  return Object.assign(n, { isCss: !0 });
};
function ss(n) {
  for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
  if (hr(n) || rs(n)) return tp(Kn(ep(tl, ei([n], i, !0))));
  var l = n;
  return i.length === 0 && l.length === 1 && typeof l[0] == "string"
    ? Kn(l)
    : tp(Kn(ep(l, i)));
}
function ka(n, i, s) {
  if ((s === void 0 && (s = ii), !i)) throw mr(1, i);
  var l = function (c) {
    for (var f = [], p = 1; p < arguments.length; p++) f[p - 1] = arguments[p];
    return n(i, s, ss.apply(void 0, ei([c], f, !1)));
  };
  return (
    (l.attrs = function (c) {
      return ka(
        n,
        i,
        ct(ct({}, s), {
          attrs: Array.prototype.concat(s.attrs, c).filter(Boolean),
        })
      );
    }),
    (l.withConfig = function (c) {
      return ka(n, i, ct(ct({}, s), c));
    }),
    l
  );
}
var dh = function (n) {
    return ka(uv, n);
  },
  je = dh;
Jp.forEach(function (n) {
  je[n] = dh(n);
});
var av = (function () {
  function n(i, s) {
    (this.rules = i),
      (this.componentId = s),
      (this.isStatic = fh(i)),
      Bo.registerId(this.componentId + 1);
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
      i > 2 && Bo.registerId(this.componentId + i),
        this.removeStyles(i, l),
        this.createStyles(i, s, l, c);
    }),
    n
  );
})();
function cv(n) {
  for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
  var l = ss.apply(void 0, ei([n], i, !1)),
    c = "sc-global-".concat(Da(JSON.stringify(l))),
    f = new av(l, c),
    p = function (v) {
      var x = Sa(),
        S = ce.useContext(is),
        E = ce.useRef(x.styleSheet.allocateGSInstance(c)).current;
      return (
        x.styleSheet.server && h(E, v, x.styleSheet, S, x.stylis),
        ce.useLayoutEffect(
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
  function h(v, x, S, E, F) {
    if (f.isStatic) f.renderStyles(v, Fg, S, F);
    else {
      var B = ct(ct({}, x), { theme: Yp(x, E, p.defaultProps) });
      f.renderStyles(v, B, S, F);
    }
  }
  return ce.memo(p);
}
function Ma(n) {
  for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
  var l = bo(ss.apply(void 0, ei([n], i, !1))),
    c = Da(l);
  return new uh(c, l);
}
const Ki = {
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
function xa(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function mv(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function np(n, i) {
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
      if (i.queryHash !== $a(p, i.options)) return !1;
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
function rp(n, i) {
  const { exact: s, status: l, predicate: c, mutationKey: f } = n;
  if (f) {
    if (!i.options.mutationKey) return !1;
    if (s) {
      if (yr(i.options.mutationKey) !== yr(f)) return !1;
    } else if (!os(i.options.mutationKey, f)) return !1;
  }
  return !((l && i.state.status !== l) || (c && !c(i)));
}
function $a(n, i) {
  return (i?.queryKeyHashFn || yr)(n);
}
function yr(n) {
  return JSON.stringify(n, (i, s) =>
    Ea(s)
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
  const s = ip(n) && ip(i);
  if (s || (Ea(n) && Ea(i))) {
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
function ip(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function Ea(n) {
  if (!sp(n)) return !1;
  const i = n.constructor;
  if (i === void 0) return !0;
  const s = i.prototype;
  return !(
    !sp(s) ||
    !s.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(n) !== Object.prototype
  );
}
function sp(n) {
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
var Ua = Symbol();
function hh(n, i) {
  return !n.queryFn && i?.initialPromise
    ? () => i.initialPromise
    : !n.queryFn || n.queryFn === Ua
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
      l || (F(new gh(R)), n.abort?.());
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
    F = (R) => {
      l || ((l = !0), n.onError?.(R), c?.(), f.reject(R));
    },
    B = () =>
      new Promise((R) => {
        (c = (j) => {
          (l || x()) && R(j);
        }),
          n.onPause?.();
      }).then(() => {
        (c = void 0), l || n.onContinue?.();
      }),
    A = () => {
      if (l) return;
      let R;
      const j = s === 0 ? n.initialPromise : void 0;
      try {
        R = j ?? n.fn();
      } catch (X) {
        R = Promise.reject(X);
      }
      Promise.resolve(R)
        .then(E)
        .catch((X) => {
          if (l) return;
          const $ = n.retry ?? (nl ? 0 : 3),
            G = n.retryDelay ?? _v,
            J = typeof G == "function" ? G(s, X) : G,
            z =
              $ === !0 ||
              (typeof $ == "number" && s < $) ||
              (typeof $ == "function" && $(s, X));
          if (i || !z) {
            F(X);
            return;
          }
          s++,
            n.onFail?.(s, X),
            gv(J)
              .then(() => (x() ? void 0 : B()))
              .then(() => {
                i ? F(X) : A();
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
    start: () => (S() ? A() : B().then(A), f),
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
        (this.#e = Fv(this.options)),
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
        : this.options.queryFn === Ua ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((n) => xa(n.options.staleTime, this) === "static")
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
function Fv(n) {
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
var Av = class extends us {
    constructor(n = {}) {
      super(), (this.config = n), (this.#e = new Map());
    }
    #e;
    build(n, i, s) {
      const l = i.queryKey,
        c = i.queryHash ?? $a(l, i);
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
      return this.getAll().find((s) => np(i, s));
    }
    findAll(n = {}) {
      const i = this.getAll();
      return Object.keys(n).length > 0 ? i.filter((s) => np(n, s)) : i;
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
var jv = class extends us {
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
    return this.getAll().find((s) => rp(i, s));
  }
  findAll(n = {}) {
    return this.getAll().filter((i) => rp(n, i));
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
function op(n) {
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
        const E = (A) => {
            Object.defineProperty(A, "signal", {
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
          F = hh(i.options, i.fetchOptions),
          B = async (A, R, j) => {
            if (S) return Promise.reject();
            if (R == null && A.pages.length) return Promise.resolve(A);
            const $ = (() => {
                const q = {
                  client: i.client,
                  queryKey: i.queryKey,
                  pageParam: R,
                  direction: j ? "backward" : "forward",
                  meta: i.options.meta,
                };
                return E(q), q;
              })(),
              G = await F($),
              { maxPages: J } = i.options,
              z = j ? Sv : wv;
            return {
              pages: z(A.pages, G, J),
              pageParams: z(A.pageParams, R, J),
            };
          };
        if (c && f.length) {
          const A = c === "backward",
            R = A ? Lv : lp,
            j = { pages: f, pageParams: p },
            X = R(l, j);
          h = await B(j, X, A);
        } else {
          const A = n ?? f.length;
          do {
            const R = v === 0 ? p[0] ?? l.initialPageParam : lp(l, h);
            if (v > 0 && R == null) break;
            (h = await B(h, R)), v++;
          } while (v < A);
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
function lp(n, { pages: i, pageParams: s }) {
  const l = i.length - 1;
  return i.length > 0 ? n.getNextPageParam(i[l], i, s[l], s) : void 0;
}
function Lv(n, { pages: i, pageParams: s }) {
  return i.length > 0 ? n.getPreviousPageParam?.(i[0], i, s[0], s) : void 0;
}
var Dv = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #o;
    #l;
    #s;
    constructor(n = {}) {
      (this.#e = n.queryCache || new Av()),
        (this.#t = n.mutationCache || new jv()),
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
            s.isStaleByTime(xa(i.staleTime, s)) &&
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
      return s.isStaleByTime(xa(i.staleTime, s))
        ? s.fetch(i)
        : Promise.resolve(s.state.data);
    }
    prefetchQuery(n) {
      return this.fetchQuery(n).then(Wt).catch(Wt);
    }
    fetchInfiniteQuery(n) {
      return (n.behavior = op(n.pages)), this.fetchQuery(n);
    }
    prefetchInfiniteQuery(n) {
      return this.fetchInfiniteQuery(n).then(Wt).catch(Wt);
    }
    ensureInfiniteQueryData(n) {
      return (n.behavior = op(n.pages)), this.ensureQueryData(n);
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
        i.queryHash || (i.queryHash = $a(i.queryKey, i)),
        i.refetchOnReconnect === void 0 &&
          (i.refetchOnReconnect = i.networkMode !== "always"),
        i.throwOnError === void 0 && (i.throwOnError = !!i.suspense),
        !i.networkMode && i.persister && (i.networkMode = "offlineFirst"),
        i.queryFn === Ua && (i.enabled = !1),
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
  kh = Ie.createContext(void 0),
  Iv = (n) => {
    const i = Ie.useContext(kh);
    if (!i)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return i;
  },
  Mv = ({ client: n, children: i }) => (
    Ie.useEffect(
      () => (
        n.mount(),
        () => {
          n.unmount();
        }
      ),
      [n]
    ),
    D.jsx(kh.Provider, { value: n, children: i })
  );
function xh(n, i) {
  const s = Iv(),
    [l] = Ie.useState(() => new zv(s, n));
  Ie.useEffect(() => {
    l.setOptions(n);
  }, [l, n]);
  const c = Ie.useSyncExternalStore(
      Ie.useCallback((p) => l.subscribe(pt.batchCalls(p)), [l]),
      () => l.getCurrentResult(),
      () => l.getCurrentResult()
    ),
    f = Ie.useCallback(
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
  Vv = (n) => {
    const i = n.constructor && n.constructor.prototype;
    return Ye(i) && i.hasOwnProperty("isPrototypeOf");
  },
  ba =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function ut(n) {
  let i;
  const s = Array.isArray(n),
    l = typeof FileList < "u" ? n instanceof FileList : !1;
  if (n instanceof Date) i = new Date(n);
  else if (!(ba && (n instanceof Blob || l)) && (s || Ye(n)))
    if (((i = s ? [] : Object.create(Object.getPrototypeOf(n))), !s && !Vv(n)))
      i = n;
    else for (const c in n) n.hasOwnProperty(c) && (i[c] = ut(n[c]));
  else return n;
  return i;
}
var rl = (n) => /^\w*$/.test(n),
  tt = (n) => n === void 0,
  Va = (n) => (Array.isArray(n) ? n.filter(Boolean) : []),
  Ba = (n) => Va(n.replace(/["|']|\]/g, "").split(/\.|\[/)),
  se = (n, i, s) => {
    if (!i || !Ye(n)) return s;
    const l = (rl(i) ? [i] : Ba(i)).reduce((c, f) => (xt(c) ? c : c[f]), n);
    return tt(l) || l === n ? (tt(n[i]) ? s : n[i]) : l;
  },
  pn = (n) => typeof n == "boolean",
  We = (n, i, s) => {
    let l = -1;
    const c = rl(i) ? [i] : Ba(i),
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
const up = { BLUR: "blur", FOCUS_OUT: "focusout" },
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
  Bv = ce.createContext(null);
Bv.displayName = "HookFormContext";
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
const Wv = typeof window < "u" ? ce.useLayoutEffect : ce.useEffect;
var mn = (n) => typeof n == "string",
  Qv = (n, i, s, l, c) =>
    mn(n)
      ? (l && i.watch.add(n), se(s, n, c))
      : Array.isArray(n)
      ? n.map((f) => (l && i.watch.add(f), se(s, f)))
      : (l && (i.watchAll = !0), s),
  Ca = (n) => xt(n) || !Eh(n);
function qn(n, i, s = new WeakSet()) {
  if (Ca(n) || Ca(i)) return n === i;
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
  es = (n) => (Array.isArray(n) ? n : [n]),
  ap = () => {
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
  At = (n) => Ye(n) && !Object.keys(n).length,
  Ha = (n) => n.type === "file",
  nn = (n) => typeof n == "function",
  Wo = (n) => {
    if (!ba) return !1;
    const i = n ? n.ownerDocument : 0;
    return (
      n instanceof
      (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement)
    );
  },
  Ch = (n) => n.type === "select-multiple",
  Wa = (n) => n.type === "radio",
  Kv = (n) => Wa(n) || as(n),
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
  const s = Array.isArray(i) ? i : rl(i) ? [i] : Ba(i),
    l = s.length === 1 ? n : Gv(n, s),
    c = s.length - 1,
    f = s[c];
  return (
    l && delete l[f],
    c !== 0 &&
      ((Ye(l) && At(l)) || (Array.isArray(l) && Xv(l))) &&
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
        ? tt(i) || Ca(s[c])
          ? (s[c] = Array.isArray(n[c]) ? Qo(n[c], []) : { ...Qo(n[c]) })
          : Oh(n[c], xt(i) ? {} : i[c], s[c])
        : (s[c] = !qn(n[c], i[c]));
  return s;
}
var Gi = (n, i) => Oh(n, i, Qo(i));
const cp = { value: !1, isValid: !1 },
  fp = { value: !0, isValid: !0 };
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
            ? fp
            : { value: n[0].value, isValid: !0 }
          : fp
        : cp;
    }
    return cp;
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
const dp = { isValid: !1, value: null };
var Th = (n) =>
  Array.isArray(n)
    ? n.reduce(
        (i, s) =>
          s && s.checked && !s.disabled ? { isValid: !0, value: s.value } : i,
        dp
      )
    : dp;
function pp(n) {
  const i = n.ref;
  return Ha(i)
    ? i.files
    : Wa(i)
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
      const p = se(i, f);
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
  Xi = (n) =>
    tt(n)
      ? n
      : qo(n)
      ? n.source
      : Ye(n)
      ? qo(n.value)
        ? n.value.source
        : n.value
      : n,
  hp = (n) => ({
    isOnSubmit: !n || n === tn.onSubmit,
    isOnBlur: n === tn.onBlur,
    isOnChange: n === tn.onChange,
    isOnAll: n === tn.all,
    isOnTouch: n === tn.onTouched,
  });
const mp = "AsyncFunction";
var Jv = (n) =>
    !!n &&
    !!n.validate &&
    !!(
      (nn(n.validate) && n.validate.constructor.name === mp) ||
      (Ye(n.validate) &&
        Object.values(n.validate).find((i) => i.constructor.name === mp))
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
  yp = (n, i, s) =>
    !s &&
    (i.watchAll ||
      i.watch.has(n) ||
      [...i.watch].some(
        (l) => n.startsWith(l) && /^\.\w+/.test(n.slice(l.length))
      ));
const ts = (n, i, s, l) => {
  for (const c of s || Object.keys(n)) {
    const f = se(n, c);
    if (f) {
      const { _f: p, ...h } = f;
      if (p) {
        if (p.refs && p.refs[0] && i(p.refs[0], c) && !l) return !0;
        if (p.ref && i(p.ref, p.name) && !l) return !0;
        if (ts(h, i)) break;
      } else if (Ye(h) && ts(h, i)) break;
    }
  }
};
function gp(n, i, s) {
  const l = se(n, s);
  if (l || rl(s)) return { error: l, name: s };
  const c = s.split(".");
  for (; c.length; ) {
    const f = c.join("."),
      p = se(i, f),
      h = se(n, f);
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
      At(f) ||
      Object.keys(f).length >= Object.keys(i).length ||
      Object.keys(f).find((p) => i[p] === (!l || tn.all))
    );
  },
  t0 = (n, i, s) =>
    !n ||
    !i ||
    n === i ||
    es(n).some((l) => l && (s ? l === i : l.startsWith(i) || i.startsWith(l))),
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
  r0 = (n, i) => !Va(se(n, i)).length && et(n, i),
  i0 = (n, i, s) => {
    const l = es(se(n, s));
    return We(l, "root", i[s]), We(n, s, l), n;
  },
  Do = (n) => mn(n);
function vp(n, i, s = "validate") {
  if (Do(n) || (Array.isArray(n) && n.every(Do)) || (pn(n) && !n))
    return { type: s, message: Do(n) ? n : "", ref: i };
}
var Yr = (n) => (Ye(n) && !qo(n) ? n : { value: n, message: "" }),
  wp = async (n, i, s, l, c, f) => {
    const {
        ref: p,
        refs: h,
        required: v,
        maxLength: x,
        minLength: S,
        min: E,
        max: F,
        pattern: B,
        validate: A,
        name: R,
        valueAsNumber: j,
        mount: X,
      } = n._f,
      $ = se(s, R);
    if (!X || i.has(R)) return {};
    const G = h ? h[0] : p,
      J = (ee) => {
        c &&
          G.reportValidity &&
          (G.setCustomValidity(pn(ee) ? "" : ee || ""), G.reportValidity());
      },
      z = {},
      q = Wa(p),
      U = as(p),
      pe = q || U,
      me =
        ((j || Ha(p)) && tt(p.value) && tt($)) ||
        (Wo(p) && p.value === "") ||
        $ === "" ||
        (Array.isArray($) && !$.length),
      Te = qv.bind(null, R, l, z),
      Ce = (ee, oe, ve, Le = Cn.maxLength, Pe = Cn.minLength) => {
        const _e = ee ? oe : ve;
        z[R] = {
          type: ee ? Le : Pe,
          message: _e,
          ref: p,
          ...Te(ee ? Le : Pe, _e),
        };
      };
    if (
      f
        ? !Array.isArray($) || !$.length
        : v &&
          ((!pe && (me || xt($))) ||
            (pn($) && !$) ||
            (U && !Rh(h).isValid) ||
            (q && !Th(h).isValid))
    ) {
      const { value: ee, message: oe } = Do(v)
        ? { value: !!v, message: v }
        : Yr(v);
      if (
        ee &&
        ((z[R] = {
          type: Cn.required,
          message: oe,
          ref: G,
          ...Te(Cn.required, oe),
        }),
        !l)
      )
        return J(oe), z;
    }
    if (!me && (!xt(E) || !xt(F))) {
      let ee, oe;
      const ve = Yr(F),
        Le = Yr(E);
      if (!xt($) && !isNaN($)) {
        const Pe = p.valueAsNumber || ($ && +$);
        xt(ve.value) || (ee = Pe > ve.value),
          xt(Le.value) || (oe = Pe < Le.value);
      } else {
        const Pe = p.valueAsDate || new Date($),
          _e = (K) => new Date(new Date().toDateString() + " " + K),
          W = p.type == "time",
          te = p.type == "week";
        mn(ve.value) &&
          $ &&
          (ee = W
            ? _e($) > _e(ve.value)
            : te
            ? $ > ve.value
            : Pe > new Date(ve.value)),
          mn(Le.value) &&
            $ &&
            (oe = W
              ? _e($) < _e(Le.value)
              : te
              ? $ < Le.value
              : Pe < new Date(Le.value));
      }
      if ((ee || oe) && (Ce(!!ee, ve.message, Le.message, Cn.max, Cn.min), !l))
        return J(z[R].message), z;
    }
    if ((x || S) && !me && (mn($) || (f && Array.isArray($)))) {
      const ee = Yr(x),
        oe = Yr(S),
        ve = !xt(ee.value) && $.length > +ee.value,
        Le = !xt(oe.value) && $.length < +oe.value;
      if ((ve || Le) && (Ce(ve, ee.message, oe.message), !l))
        return J(z[R].message), z;
    }
    if (B && !me && mn($)) {
      const { value: ee, message: oe } = Yr(B);
      if (
        qo(ee) &&
        !$.match(ee) &&
        ((z[R] = {
          type: Cn.pattern,
          message: oe,
          ref: p,
          ...Te(Cn.pattern, oe),
        }),
        !l)
      )
        return J(oe), z;
    }
    if (A) {
      if (nn(A)) {
        const ee = await A($, s),
          oe = vp(ee, G);
        if (oe && ((z[R] = { ...oe, ...Te(Cn.validate, oe.message) }), !l))
          return J(oe.message), z;
      } else if (Ye(A)) {
        let ee = {};
        for (const oe in A) {
          if (!At(ee) && !l) break;
          const ve = vp(await A[oe]($, s), G, oe);
          ve &&
            ((ee = { ...ve, ...Te(oe, ve.message) }),
            J(ve.message),
            l && (z[R] = ee));
        }
        if (!At(ee) && ((z[R] = { ref: G, ...ee }), !l)) return z;
      }
    }
    return J(!0), z;
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
  const F = { array: ap(), state: ap() },
    B = i.criteriaMode === tn.all,
    A = (y) => (_) => {
      clearTimeout(x), (x = setTimeout(y, _));
    },
    R = async (y) => {
      if (!i.disabled && (S.isValid || E.isValid || y)) {
        const _ = i.resolver ? At((await U()).errors) : await me(l, !0);
        _ !== s.isValid && F.state.next({ isValid: _ });
      }
    },
    j = (y, _) => {
      !i.disabled &&
        (S.isValidating ||
          S.validatingFields ||
          E.isValidating ||
          E.validatingFields) &&
        ((y || Array.from(h.mount)).forEach((N) => {
          N && (_ ? We(s.validatingFields, N, _) : et(s.validatingFields, N));
        }),
        F.state.next({
          validatingFields: s.validatingFields,
          isValidating: !At(s.validatingFields),
        }));
    },
    X = (y, _ = [], N, Y, Q = !0, H = !0) => {
      if (Y && N && !i.disabled) {
        if (((p.action = !0), H && Array.isArray(se(l, y)))) {
          const ue = N(se(l, y), Y.argA, Y.argB);
          Q && We(l, y, ue);
        }
        if (H && Array.isArray(se(s.errors, y))) {
          const ue = N(se(s.errors, y), Y.argA, Y.argB);
          Q && We(s.errors, y, ue), r0(s.errors, y);
        }
        if (
          (S.touchedFields || E.touchedFields) &&
          H &&
          Array.isArray(se(s.touchedFields, y))
        ) {
          const ue = N(se(s.touchedFields, y), Y.argA, Y.argB);
          Q && We(s.touchedFields, y, ue);
        }
        (S.dirtyFields || E.dirtyFields) && (s.dirtyFields = Gi(c, f)),
          F.state.next({
            name: y,
            isDirty: Ce(y, _),
            dirtyFields: s.dirtyFields,
            errors: s.errors,
            isValid: s.isValid,
          });
      } else We(f, y, _);
    },
    $ = (y, _) => {
      We(s.errors, y, _), F.state.next({ errors: s.errors });
    },
    G = (y) => {
      (s.errors = y), F.state.next({ errors: s.errors, isValid: !1 });
    },
    J = (y, _, N, Y) => {
      const Q = se(l, y);
      if (Q) {
        const H = se(f, y, tt(N) ? se(c, y) : N);
        tt(H) || (Y && Y.defaultChecked) || _
          ? We(f, y, _ ? H : pp(Q._f))
          : ve(y, H),
          p.mount && R();
      }
    },
    z = (y, _, N, Y, Q) => {
      let H = !1,
        ue = !1;
      const Fe = { name: y };
      if (!i.disabled) {
        if (!N || Y) {
          (S.isDirty || E.isDirty) &&
            ((ue = s.isDirty),
            (s.isDirty = Fe.isDirty = Ce()),
            (H = ue !== Fe.isDirty));
          const De = qn(se(c, y), _);
          (ue = !!se(s.dirtyFields, y)),
            De ? et(s.dirtyFields, y) : We(s.dirtyFields, y, !0),
            (Fe.dirtyFields = s.dirtyFields),
            (H = H || ((S.dirtyFields || E.dirtyFields) && ue !== !De));
        }
        if (N) {
          const De = se(s.touchedFields, y);
          De ||
            (We(s.touchedFields, y, N),
            (Fe.touchedFields = s.touchedFields),
            (H = H || ((S.touchedFields || E.touchedFields) && De !== N)));
        }
        H && Q && F.state.next(Fe);
      }
      return H ? Fe : {};
    },
    q = (y, _, N, Y) => {
      const Q = se(s.errors, y),
        H = (S.isValid || E.isValid) && pn(_) && s.isValid !== _;
      if (
        (i.delayError && N
          ? ((v = A(() => $(y, N))), v(i.delayError))
          : (clearTimeout(x),
            (v = null),
            N ? We(s.errors, y, N) : et(s.errors, y)),
        (N ? !qn(Q, N) : Q) || !At(Y) || H)
      ) {
        const ue = {
          ...Y,
          ...(H && pn(_) ? { isValid: _ } : {}),
          errors: s.errors,
          name: y,
        };
        (s = { ...s, ...ue }), F.state.next(ue);
      }
    },
    U = async (y) => {
      j(y, !0);
      const _ = await i.resolver(
        f,
        i.context,
        Yv(y || h.mount, l, i.criteriaMode, i.shouldUseNativeValidation)
      );
      return j(y), _;
    },
    pe = async (y) => {
      const { errors: _ } = await U(y);
      if (y)
        for (const N of y) {
          const Y = se(_, N);
          Y ? We(s.errors, N, Y) : et(s.errors, N);
        }
      else s.errors = _;
      return _;
    },
    me = async (y, _, N = { valid: !0 }) => {
      for (const Y in y) {
        const Q = y[Y];
        if (Q) {
          const { _f: H, ...ue } = Q;
          if (H) {
            const Fe = h.array.has(H.name),
              De = Q._f && Jv(Q._f);
            De && S.validatingFields && j([Y], !0);
            const wt = await wp(
              Q,
              h.disabled,
              f,
              B,
              i.shouldUseNativeValidation && !_,
              Fe
            );
            if (
              (De && S.validatingFields && j([Y]),
              wt[H.name] && ((N.valid = !1), _))
            )
              break;
            !_ &&
              (se(wt, H.name)
                ? Fe
                  ? i0(s.errors, wt, H.name)
                  : We(s.errors, H.name, wt[H.name])
                : et(s.errors, H.name));
          }
          !At(ue) && (await me(ue, _, N));
        }
      }
      return N.valid;
    },
    Te = () => {
      for (const y of h.unMount) {
        const _ = se(l, y);
        _ &&
          (_._f.refs ? _._f.refs.every((N) => !ua(N)) : !ua(_._f.ref)) &&
          ae(y);
      }
      h.unMount = new Set();
    },
    Ce = (y, _) => !i.disabled && (y && _ && We(f, y, _), !qn(K(), c)),
    ee = (y, _, N) =>
      Qv(y, h, { ...(p.mount ? f : tt(_) ? c : mn(y) ? { [y]: _ } : _) }, N, _),
    oe = (y) =>
      Va(se(p.mount ? f : c, y, i.shouldUnregister ? se(c, y, []) : [])),
    ve = (y, _, N = {}) => {
      const Y = se(l, y);
      let Q = _;
      if (Y) {
        const H = Y._f;
        H &&
          (!H.disabled && We(f, y, Ph(_, H)),
          (Q = Wo(H.ref) && xt(_) ? "" : _),
          Ch(H.ref)
            ? [...H.ref.options].forEach(
                (ue) => (ue.selected = Q.includes(ue.value))
              )
            : H.refs
            ? as(H.ref)
              ? H.refs.forEach((ue) => {
                  (!ue.defaultChecked || !ue.disabled) &&
                    (Array.isArray(Q)
                      ? (ue.checked = !!Q.find((Fe) => Fe === ue.value))
                      : (ue.checked = Q === ue.value || !!Q));
                })
              : H.refs.forEach((ue) => (ue.checked = ue.value === Q))
            : Ha(H.ref)
            ? (H.ref.value = "")
            : ((H.ref.value = Q),
              H.ref.type || F.state.next({ name: y, values: ut(f) })));
      }
      (N.shouldDirty || N.shouldTouch) &&
        z(y, Q, N.shouldTouch, N.shouldDirty, !0),
        N.shouldValidate && te(y);
    },
    Le = (y, _, N) => {
      for (const Y in _) {
        if (!_.hasOwnProperty(Y)) return;
        const Q = _[Y],
          H = y + "." + Y,
          ue = se(l, H);
        (h.array.has(y) || Ye(Q) || (ue && !ue._f)) && !ar(Q)
          ? Le(H, Q, N)
          : ve(H, Q, N);
      }
    },
    Pe = (y, _, N = {}) => {
      const Y = se(l, y),
        Q = h.array.has(y),
        H = ut(_);
      We(f, y, H),
        Q
          ? (F.array.next({ name: y, values: ut(f) }),
            (S.isDirty || S.dirtyFields || E.isDirty || E.dirtyFields) &&
              N.shouldDirty &&
              F.state.next({
                name: y,
                dirtyFields: Gi(c, f),
                isDirty: Ce(y, H),
              }))
          : Y && !Y._f && !xt(H)
          ? Le(y, H, N)
          : ve(y, H, N),
        yp(y, h) && F.state.next({ ...s, name: y }),
        F.state.next({ name: p.mount ? y : void 0, values: ut(f) });
    },
    _e = async (y) => {
      p.mount = !0;
      const _ = y.target;
      let N = _.name,
        Y = !0;
      const Q = se(l, N),
        H = (De) => {
          Y =
            Number.isNaN(De) ||
            (ar(De) && isNaN(De.getTime())) ||
            qn(De, se(f, N, De));
        },
        ue = hp(i.mode),
        Fe = hp(i.reValidateMode);
      if (Q) {
        let De, wt;
        const on = _.type ? pp(Q._f) : $v(y),
          Ct = y.type === up.BLUR || y.type === up.FOCUS_OUT,
          fl =
            (!Zv(Q._f) && !i.resolver && !se(s.errors, N) && !Q._f.deps) ||
            n0(Ct, se(s.touchedFields, N), s.isSubmitted, Fe, ue),
          xr = yp(N, h, Ct);
        We(f, N, on),
          Ct
            ? (!_ || !_.readOnly) && (Q._f.onBlur && Q._f.onBlur(y), v && v(0))
            : Q._f.onChange && Q._f.onChange(y);
        const Er = z(N, on, Ct),
          dl = !At(Er) || xr;
        if ((!Ct && F.state.next({ name: N, type: y.type, values: ut(f) }), fl))
          return (
            (S.isValid || E.isValid) &&
              (i.mode === "onBlur" ? Ct && R() : Ct || R()),
            dl && F.state.next({ name: N, ...(xr ? {} : Er) })
          );
        if ((!Ct && xr && F.state.next({ ...s }), i.resolver)) {
          const { errors: Cr } = await U([N]);
          if ((H(on), Y)) {
            const ci = gp(s.errors, l, N),
              _r = gp(Cr, l, ci.name || N);
            (De = _r.error), (N = _r.name), (wt = At(Cr));
          }
        } else
          j([N], !0),
            (De = (await wp(Q, h.disabled, f, B, i.shouldUseNativeValidation))[
              N
            ]),
            j([N]),
            H(on),
            Y &&
              (De
                ? (wt = !1)
                : (S.isValid || E.isValid) && (wt = await me(l, !0)));
        Y && (Q._f.deps && te(Q._f.deps), q(N, wt, De, Er));
      }
    },
    W = (y, _) => {
      if (se(s.errors, _) && y.focus) return y.focus(), 1;
    },
    te = async (y, _ = {}) => {
      let N, Y;
      const Q = es(y);
      if (i.resolver) {
        const H = await pe(tt(y) ? y : Q);
        (N = At(H)), (Y = y ? !Q.some((ue) => se(H, ue)) : N);
      } else
        y
          ? ((Y = (
              await Promise.all(
                Q.map(async (H) => {
                  const ue = se(l, H);
                  return await me(ue && ue._f ? { [H]: ue } : ue);
                })
              )
            ).every(Boolean)),
            !(!Y && !s.isValid) && R())
          : (Y = N = await me(l));
      return (
        F.state.next({
          ...(!mn(y) || ((S.isValid || E.isValid) && N !== s.isValid)
            ? {}
            : { name: y }),
          ...(i.resolver || !y ? { isValid: N } : {}),
          errors: s.errors,
        }),
        _.shouldFocus && !Y && ts(l, W, y ? Q : h.mount),
        Y
      );
    },
    K = (y) => {
      const _ = { ...(p.mount ? f : c) };
      return tt(y) ? _ : mn(y) ? se(_, y) : y.map((N) => se(_, N));
    },
    k = (y, _) => ({
      invalid: !!se((_ || s).errors, y),
      isDirty: !!se((_ || s).dirtyFields, y),
      error: se((_ || s).errors, y),
      isValidating: !!se(s.validatingFields, y),
      isTouched: !!se((_ || s).touchedFields, y),
    }),
    L = (y) => {
      y && es(y).forEach((_) => et(s.errors, _)),
        F.state.next({ errors: y ? s.errors : {} });
    },
    he = (y, _, N) => {
      const Y = (se(l, y, { _f: {} })._f || {}).ref,
        Q = se(s.errors, y) || {},
        { ref: H, message: ue, type: Fe, ...De } = Q;
      We(s.errors, y, { ...De, ..._, ref: Y }),
        F.state.next({ name: y, errors: s.errors, isValid: !1 }),
        N && N.shouldFocus && Y && Y.focus && Y.focus();
    },
    we = (y, _) =>
      nn(y)
        ? F.state.subscribe({
            next: (N) => "values" in N && y(ee(void 0, _), N),
          })
        : ee(y, _, !0),
    ke = (y) =>
      F.state.subscribe({
        next: (_) => {
          t0(y.name, _.name, y.exact) &&
            e0(_, y.formState || S, ai, y.reRenderRoot) &&
            y.callback({ values: { ...f }, ...s, ..._, defaultValues: c });
        },
      }).unsubscribe,
    Se = (y) => (
      (p.mount = !0), (E = { ...E, ...y.formState }), ke({ ...y, formState: E })
    ),
    ae = (y, _ = {}) => {
      for (const N of y ? es(y) : h.mount)
        h.mount.delete(N),
          h.array.delete(N),
          _.keepValue || (et(l, N), et(f, N)),
          !_.keepError && et(s.errors, N),
          !_.keepDirty && et(s.dirtyFields, N),
          !_.keepTouched && et(s.touchedFields, N),
          !_.keepIsValidating && et(s.validatingFields, N),
          !i.shouldUnregister && !_.keepDefaultValue && et(c, N);
      F.state.next({ values: ut(f) }),
        F.state.next({ ...s, ...(_.keepDirty ? { isDirty: Ce() } : {}) }),
        !_.keepIsValid && R();
    },
    ye = ({ disabled: y, name: _ }) => {
      ((pn(y) && p.mount) || y || h.disabled.has(_)) &&
        (y ? h.disabled.add(_) : h.disabled.delete(_));
    },
    xe = (y, _ = {}) => {
      let N = se(l, y);
      const Y = pn(_.disabled) || pn(i.disabled);
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
          ? ye({ disabled: pn(_.disabled) ? _.disabled : i.disabled, name: y })
          : J(y, !0, _.value),
        {
          ...(Y ? { disabled: _.disabled || i.disabled } : {}),
          ...(i.progressive
            ? {
                required: !!_.required,
                min: Xi(_.min),
                max: Xi(_.max),
                minLength: Xi(_.minLength),
                maxLength: Xi(_.maxLength),
                pattern: Xi(_.pattern),
              }
            : {}),
          name: y,
          onChange: _e,
          onBlur: _e,
          ref: (Q) => {
            if (Q) {
              xe(y, _), (N = se(l, y));
              const H =
                  (tt(Q.value) &&
                    Q.querySelectorAll &&
                    Q.querySelectorAll("input,select,textarea")[0]) ||
                  Q,
                ue = Kv(H),
                Fe = N._f.refs || [];
              if (ue ? Fe.find((De) => De === H) : H === N._f.ref) return;
              We(l, y, {
                _f: {
                  ...N._f,
                  ...(ue
                    ? {
                        refs: [
                          ...Fe.filter(ua),
                          H,
                          ...(Array.isArray(se(c, y)) ? [{}] : []),
                        ],
                        ref: { type: H.type, name: y },
                      }
                    : { ref: H }),
                },
              }),
                J(y, !1, void 0, H);
            } else
              (N = se(l, y, {})),
                N._f && (N._f.mount = !1),
                (i.shouldUnregister || _.shouldUnregister) &&
                  !(bv(h.array, y) && p.action) &&
                  h.unMount.add(y);
          },
        }
      );
    },
    Be = () => i.shouldFocusError && ts(l, W, h.mount),
    qt = (y) => {
      pn(y) &&
        (F.state.next({ disabled: y }),
        ts(
          l,
          (_, N) => {
            const Y = se(l, N);
            Y &&
              ((_.disabled = Y._f.disabled || y),
              Array.isArray(Y._f.refs) &&
                Y._f.refs.forEach((Q) => {
                  Q.disabled = Y._f.disabled || y;
                }));
          },
          0,
          !1
        ));
    },
    Et = (y, _) => async (N) => {
      let Y;
      N && (N.preventDefault && N.preventDefault(), N.persist && N.persist());
      let Q = ut(f);
      if ((F.state.next({ isSubmitting: !0 }), i.resolver)) {
        const { errors: H, values: ue } = await U();
        (s.errors = H), (Q = ut(ue));
      } else await me(l);
      if (h.disabled.size) for (const H of h.disabled) et(Q, H);
      if ((et(s.errors, "root"), At(s.errors))) {
        F.state.next({ errors: {} });
        try {
          await y(Q, N);
        } catch (H) {
          Y = H;
        }
      } else _ && (await _({ ...s.errors }, N)), Be(), setTimeout(Be);
      if (
        (F.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: At(s.errors) && !Y,
          submitCount: s.submitCount + 1,
          errors: s.errors,
        }),
        Y)
      )
        throw Y;
    },
    wr = (y, _ = {}) => {
      se(l, y) &&
        (tt(_.defaultValue)
          ? Pe(y, ut(se(c, y)))
          : (Pe(y, _.defaultValue), We(c, y, ut(_.defaultValue))),
        _.keepTouched || et(s.touchedFields, y),
        _.keepDirty ||
          (et(s.dirtyFields, y),
          (s.isDirty = _.defaultValue ? Ce(y, ut(se(c, y))) : Ce())),
        _.keepError || (et(s.errors, y), S.isValid && R()),
        F.state.next({ ...s }));
    },
    Sr = (y, _ = {}) => {
      const N = y ? ut(y) : c,
        Y = ut(N),
        Q = At(y),
        H = Q ? c : Y;
      if ((_.keepDefaultValues || (c = N), !_.keepValues)) {
        if (_.keepDirtyValues) {
          const ue = new Set([...h.mount, ...Object.keys(Gi(c, f))]);
          for (const Fe of Array.from(ue))
            se(s.dirtyFields, Fe) ? We(H, Fe, se(f, Fe)) : Pe(Fe, se(H, Fe));
        } else {
          if (ba && tt(y))
            for (const ue of h.mount) {
              const Fe = se(l, ue);
              if (Fe && Fe._f) {
                const De = Array.isArray(Fe._f.refs)
                  ? Fe._f.refs[0]
                  : Fe._f.ref;
                if (Wo(De)) {
                  const wt = De.closest("form");
                  if (wt) {
                    wt.reset();
                    break;
                  }
                }
              }
            }
          if (_.keepFieldsRef) for (const ue of h.mount) Pe(ue, se(H, ue));
          else l = {};
        }
        (f = i.shouldUnregister ? (_.keepDefaultValues ? ut(c) : {}) : ut(H)),
          F.array.next({ values: { ...H } }),
          F.state.next({ values: { ...H } });
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
        F.state.next({
          submitCount: _.keepSubmitCount ? s.submitCount : 0,
          isDirty: Q
            ? !1
            : _.keepDirty
            ? s.isDirty
            : !!(_.keepDefaultValues && !qn(y, c)),
          isSubmitted: _.keepIsSubmitted ? s.isSubmitted : !1,
          dirtyFields: Q
            ? {}
            : _.keepDirtyValues
            ? _.keepDefaultValues && f
              ? Gi(c, f)
              : s.dirtyFields
            : _.keepDefaultValues && y
            ? Gi(c, y)
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
    ui = (y, _) => Sr(nn(y) ? y(f) : y, _),
    hs = (y, _ = {}) => {
      const N = se(l, y),
        Y = N && N._f;
      if (Y) {
        const Q = Y.refs ? Y.refs[0] : Y.ref;
        Q.focus && (Q.focus(), _.shouldSelect && nn(Q.select) && Q.select());
      }
    },
    ai = (y) => {
      s = { ...s, ...y };
    },
    kr = {
      control: {
        register: xe,
        unregister: ae,
        getFieldState: k,
        handleSubmit: Et,
        setError: he,
        _subscribe: ke,
        _runSchema: U,
        _focusError: Be,
        _getWatch: ee,
        _getDirty: Ce,
        _setValid: R,
        _setFieldArray: X,
        _setDisabledField: ye,
        _setErrors: G,
        _getFieldArray: oe,
        _reset: Sr,
        _resetDefaultValues: () =>
          nn(i.defaultValues) &&
          i.defaultValues().then((y) => {
            ui(y, i.resetOptions), F.state.next({ isLoading: !1 });
          }),
        _removeUnmounted: Te,
        _disableForm: qt,
        _subjects: F,
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
      subscribe: Se,
      trigger: te,
      register: xe,
      handleSubmit: Et,
      watch: we,
      setValue: Pe,
      getValues: K,
      reset: ui,
      resetField: wr,
      clearErrors: L,
      unregister: ae,
      setError: he,
      setFocus: hs,
      getFieldState: k,
    };
  return { ...kr, formControl: kr };
}
function Fh(n = {}) {
  const i = ce.useRef(void 0),
    s = ce.useRef(void 0),
    [l, c] = ce.useState({
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
    ce.useEffect(() => f._disableForm(n.disabled), [f, n.disabled]),
    ce.useEffect(() => {
      n.mode && (f._options.mode = n.mode),
        n.reValidateMode && (f._options.reValidateMode = n.reValidateMode);
    }, [f, n.mode, n.reValidateMode]),
    ce.useEffect(() => {
      n.errors && (f._setErrors(n.errors), f._focusError());
    }, [f, n.errors]),
    ce.useEffect(() => {
      n.shouldUnregister && f._subjects.state.next({ values: f._getWatch() });
    }, [f, n.shouldUnregister]),
    ce.useEffect(() => {
      if (f._proxyFormState.isDirty) {
        const p = f._getDirty();
        p !== l.isDirty && f._subjects.state.next({ isDirty: p });
      }
    }, [f, l.isDirty]),
    ce.useEffect(() => {
      n.values && !qn(n.values, s.current)
        ? (f._reset(n.values, {
            keepFieldsRef: !0,
            ...f._options.resetOptions,
          }),
          (s.current = n.values),
          c((p) => ({ ...p })))
        : f._resetDefaultValues();
    }, [f, n.values]),
    ce.useEffect(() => {
      f._state.mount || (f._setValid(), (f._state.mount = !0)),
        f._state.watch &&
          ((f._state.watch = !1), f._subjects.state.next({ ...f._formState })),
        f._removeUnmounted();
    }),
    (i.current.formState = Hv(l, f)),
    i.current
  );
}
function Ah(n, i) {
  return function () {
    return n.apply(i, arguments);
  };
}
const { toString: l0 } = Object.prototype,
  { getPrototypeOf: Qa } = Object,
  { iterator: il, toStringTag: Nh } = Symbol,
  sl = ((n) => (i) => {
    const s = l0.call(i);
    return n[s] || (n[s] = s.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  sn = (n) => ((n = n.toLowerCase()), (i) => sl(i) === n),
  ol = (n) => (i) => typeof i === n,
  { isArray: oi } = Array,
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
const jh = sn("ArrayBuffer");
function u0(n) {
  let i;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (i = ArrayBuffer.isView(n))
      : (i = n && n.buffer && jh(n.buffer)),
    i
  );
}
const a0 = ol("string"),
  Nt = ol("function"),
  Lh = ol("number"),
  fs = (n) => n !== null && typeof n == "object",
  c0 = (n) => n === !0 || n === !1,
  zo = (n) => {
    if (sl(n) !== "object") return !1;
    const i = Qa(n);
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
  if ((typeof n != "object" && (n = [n]), oi(n)))
    for (l = 0, c = n.length; l < c; l++) i.call(null, n[l], l, n);
  else {
    if (cs(n)) return;
    const f = s ? Object.getOwnPropertyNames(n) : Object.keys(n),
      p = f.length;
    let h;
    for (l = 0; l < p; l++) (h = f[l]), i.call(null, n[h], h, n);
  }
}
function Dh(n, i) {
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
function _a() {
  const { caseless: n } = (zh(this) && this) || {},
    i = {},
    s = (l, c) => {
      const f = (n && Dh(i, c)) || c;
      zo(i[f]) && zo(l)
        ? (i[f] = _a(i[f], l))
        : zo(l)
        ? (i[f] = _a({}, l))
        : oi(l)
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
        s && Nt(c) ? (n[f] = Ah(c, s)) : (n[f] = c);
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
      n = s !== !1 && Qa(n);
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
    if (oi(n)) return n;
    let i = n.length;
    if (!Lh(i)) return null;
    const s = new Array(i);
    for (; i-- > 0; ) s[i] = n[i];
    return s;
  },
  F0 = (
    (n) => (i) =>
      n && i instanceof n
  )(typeof Uint8Array < "u" && Qa(Uint8Array)),
  A0 = (n, i) => {
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
  j0 = sn("HTMLFormElement"),
  L0 = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (s, l, c) {
      return l.toUpperCase() + c;
    }),
  Sp = (
    ({ hasOwnProperty: n }) =>
    (i, s) =>
      n.call(i, s)
  )(Object.prototype),
  D0 = sn("RegExp"),
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
    return oi(n) ? l(n) : l(String(n).split(i)), s;
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
            const f = oi(l) ? [] : {};
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
  V0 = sn("AsyncFunction"),
  B0 = (n) => n && (fs(n) || Nt(n)) && Nt(n.then) && Nt(n.catch),
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
    isArray: oi,
    isArrayBuffer: jh,
    isBuffer: cs,
    isFormData: g0,
    isArrayBufferView: u0,
    isString: a0,
    isNumber: Lh,
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
    isRegExp: D0,
    isFunction: Nt,
    isStream: y0,
    isURLSearchParams: v0,
    isTypedArray: F0,
    isFileList: m0,
    forEach: ds,
    merge: _a,
    extend: C0,
    trim: E0,
    stripBOM: _0,
    inherits: O0,
    toFlatObject: R0,
    kindOf: sl,
    kindOfTest: sn,
    endsWith: P0,
    toArray: T0,
    forEachEntry: A0,
    matchAll: N0,
    isHTMLForm: j0,
    hasOwnProperty: Sp,
    hasOwnProp: Sp,
    reduceDescriptors: Ih,
    freezeMethods: z0,
    toObjectSet: I0,
    toCamelCase: L0,
    noop: M0,
    toFiniteNumber: $0,
    findKey: Dh,
    global: cr,
    isContextDefined: zh,
    isSpecCompliantForm: U0,
    toJSONObject: b0,
    isAsyncFn: V0,
    isThenable: B0,
    setImmediate: Mh,
    asap: H0,
    isIterable: W0,
  };
function Ee(n, i, s, l, c) {
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
T.inherits(Ee, Error, {
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
const $h = Ee.prototype,
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
Object.defineProperties(Ee, Uh);
Object.defineProperty($h, "isAxiosError", { value: !0 });
Ee.from = (n, i, s, l, c, f) => {
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
    Ee.call(p, n.message, i, s, l, c),
    (p.cause = n),
    (p.name = n.name),
    f && Object.assign(p, f),
    p
  );
};
const Q0 = null;
function Oa(n) {
  return T.isPlainObject(n) || T.isArray(n);
}
function bh(n) {
  return T.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function kp(n, i, s) {
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
  return T.isArray(n) && !n.some(Oa);
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
      function (R, j) {
        return !T.isUndefined(j[R]);
      }
    ));
  const l = s.metaTokens,
    c = s.visitor || S,
    f = s.dots,
    p = s.indexes,
    v = (s.Blob || (typeof Blob < "u" && Blob)) && T.isSpecCompliantForm(i);
  if (!T.isFunction(c)) throw new TypeError("visitor must be a function");
  function x(A) {
    if (A === null) return "";
    if (T.isDate(A)) return A.toISOString();
    if (T.isBoolean(A)) return A.toString();
    if (!v && T.isBlob(A))
      throw new Ee("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(A) || T.isTypedArray(A)
      ? v && typeof Blob == "function"
        ? new Blob([A])
        : Buffer.from(A)
      : A;
  }
  function S(A, R, j) {
    let X = A;
    if (A && !j && typeof A == "object") {
      if (T.endsWith(R, "{}"))
        (R = l ? R : R.slice(0, -2)), (A = JSON.stringify(A));
      else if (
        (T.isArray(A) && q0(A)) ||
        ((T.isFileList(A) || T.endsWith(R, "[]")) && (X = T.toArray(A)))
      )
        return (
          (R = bh(R)),
          X.forEach(function (G, J) {
            !(T.isUndefined(G) || G === null) &&
              i.append(
                p === !0 ? kp([R], J, f) : p === null ? R : R + "[]",
                x(G)
              );
          }),
          !1
        );
    }
    return Oa(A) ? !0 : (i.append(kp(j, R, f), x(A)), !1);
  }
  const E = [],
    F = Object.assign(K0, {
      defaultVisitor: S,
      convertValue: x,
      isVisitable: Oa,
    });
  function B(A, R) {
    if (!T.isUndefined(A)) {
      if (E.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + R.join("."));
      E.push(A),
        T.forEach(A, function (X, $) {
          (!(T.isUndefined(X) || X === null) &&
            c.call(i, X, T.isString($) ? $.trim() : $, R, F)) === !0 &&
            B(X, R ? R.concat($) : [$]);
        }),
        E.pop();
    }
  }
  if (!T.isObject(n)) throw new TypeError("data must be an object");
  return B(n), i;
}
function xp(n) {
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
function qa(n, i) {
  (this._pairs = []), n && ll(n, this, i);
}
const Vh = qa.prototype;
Vh.append = function (i, s) {
  this._pairs.push([i, s]);
};
Vh.toString = function (i) {
  const s = i
    ? function (l) {
        return i.call(this, l, xp);
      }
    : xp;
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
function Bh(n, i, s) {
  if (!i) return n;
  const l = (s && s.encode) || G0;
  T.isFunction(s) && (s = { serialize: s });
  const c = s && s.serialize;
  let f;
  if (
    (c
      ? (f = c(i, s))
      : (f = T.isURLSearchParams(i) ? i.toString() : new qa(i, s).toString(l)),
    f)
  ) {
    const p = n.indexOf("#");
    p !== -1 && (n = n.slice(0, p)),
      (n += (n.indexOf("?") === -1 ? "?" : "&") + f);
  }
  return n;
}
class Ep {
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
  X0 = typeof URLSearchParams < "u" ? URLSearchParams : qa,
  Y0 = typeof FormData < "u" ? FormData : null,
  J0 = typeof Blob < "u" ? Blob : null,
  Z0 = {
    isBrowser: !0,
    classes: { URLSearchParams: X0, FormData: Y0, Blob: J0 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Ka = typeof window < "u" && typeof document < "u",
  Ra = (typeof navigator == "object" && navigator) || void 0,
  e1 =
    Ka &&
    (!Ra || ["ReactNative", "NativeScript", "NS"].indexOf(Ra.product) < 0),
  t1 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  n1 = (Ka && window.location.href) || "http://localhost",
  r1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ka,
        hasStandardBrowserEnv: e1,
        hasStandardBrowserWebWorkerEnv: t1,
        navigator: Ra,
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
              ? Ee.from(h, Ee.ERR_BAD_RESPONSE, this, null, this.response)
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
  Cp = Symbol("internals");
function Yi(n) {
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
let jt = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, s, l) {
    const c = this;
    function f(h, v, x) {
      const S = Yi(v);
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
    if (((i = Yi(i)), i)) {
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
    if (((i = Yi(i)), i)) {
      const l = T.findKey(this, i);
      return !!(l && this[l] !== void 0 && (!s || aa(this, this[l], l, s)));
    }
    return !1;
  }
  delete(i, s) {
    const l = this;
    let c = !1;
    function f(p) {
      if (((p = Yi(p)), p)) {
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
    const l = (this[Cp] = this[Cp] = { accessors: {} }).accessors,
      c = this.prototype;
    function f(p) {
      const h = Yi(p);
      l[h] || (p1(c, p), (l[h] = !0));
    }
    return T.isArray(i) ? i.forEach(f) : f(i), this;
  }
};
jt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
T.reduceDescriptors(jt.prototype, ({ value: n }, i) => {
  let s = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => n,
    set(l) {
      this[s] = l;
    },
  };
});
T.freezeMethods(jt);
function ca(n, i) {
  const s = this || ps,
    l = i || s,
    c = jt.from(l.headers);
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
function li(n, i, s) {
  Ee.call(this, n ?? "canceled", Ee.ERR_CANCELED, i, s),
    (this.name = "CanceledError");
}
T.inherits(li, Ee, { __CANCEL__: !0 });
function qh(n, i, s) {
  const l = s.config.validateStatus;
  !s.status || !l || l(s.status)
    ? n(s)
    : i(
        new Ee(
          "Request failed with status code " + s.status,
          [Ee.ERR_BAD_REQUEST, Ee.ERR_BAD_RESPONSE][
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
        F = 0;
      for (; E !== c; ) (F += s[E++]), (E = E % n);
      if (((c = (c + 1) % n), c === f && (f = (f + 1) % n), x - p < i)) return;
      const B = S && x - S;
      return B ? Math.round((F * 1e3) / B) : void 0;
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
  _p = (n, i) => {
    const s = n != null;
    return [(l) => i[0]({ lengthComputable: s, total: n, loaded: l }), i[1]];
  },
  Op =
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
const Rp = (n) => (n instanceof jt ? { ...n } : n);
function gr(n, i) {
  i = i || {};
  const s = {};
  function l(x, S, E, F) {
    return T.isPlainObject(x) && T.isPlainObject(S)
      ? T.merge.call({ caseless: F }, x, S)
      : T.isPlainObject(S)
      ? T.merge({}, S)
      : T.isArray(S)
      ? S.slice()
      : S;
  }
  function c(x, S, E, F) {
    if (T.isUndefined(S)) {
      if (!T.isUndefined(x)) return l(void 0, x, E, F);
    } else return l(x, S, E, F);
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
    headers: (x, S, E) => c(Rp(x), Rp(S), E, !0),
  };
  return (
    T.forEach(Object.keys({ ...n, ...i }), function (S) {
      const E = v[S] || c,
        F = E(n[S], i[S], S);
      (T.isUndefined(F) && E !== h) || (s[S] = F);
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
    (i.headers = p = jt.from(p)),
      (i.url = Bh(
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
        const p = jt.from(c.headers).normalize();
        let { responseType: h, onUploadProgress: v, onDownloadProgress: x } = c,
          S,
          E,
          F,
          B,
          A;
        function R() {
          B && B(),
            A && A(),
            c.cancelToken && c.cancelToken.unsubscribe(S),
            c.signal && c.signal.removeEventListener("abort", S);
        }
        let j = new XMLHttpRequest();
        j.open(c.method.toUpperCase(), c.url, !0), (j.timeout = c.timeout);
        function X() {
          if (!j) return;
          const G = jt.from(
              "getAllResponseHeaders" in j && j.getAllResponseHeaders()
            ),
            z = {
              data:
                !h || h === "text" || h === "json"
                  ? j.responseText
                  : j.response,
              status: j.status,
              statusText: j.statusText,
              headers: G,
              config: n,
              request: j,
            };
          qh(
            function (U) {
              s(U), R();
            },
            function (U) {
              l(U), R();
            },
            z
          ),
            (j = null);
        }
        "onloadend" in j
          ? (j.onloadend = X)
          : (j.onreadystatechange = function () {
              !j ||
                j.readyState !== 4 ||
                (j.status === 0 &&
                  !(j.responseURL && j.responseURL.indexOf("file:") === 0)) ||
                setTimeout(X);
            }),
          (j.onabort = function () {
            j &&
              (l(new Ee("Request aborted", Ee.ECONNABORTED, n, j)), (j = null));
          }),
          (j.onerror = function () {
            l(new Ee("Network Error", Ee.ERR_NETWORK, n, j)), (j = null);
          }),
          (j.ontimeout = function () {
            let J = c.timeout
              ? "timeout of " + c.timeout + "ms exceeded"
              : "timeout exceeded";
            const z = c.transitional || Hh;
            c.timeoutErrorMessage && (J = c.timeoutErrorMessage),
              l(
                new Ee(
                  J,
                  z.clarifyTimeoutError ? Ee.ETIMEDOUT : Ee.ECONNABORTED,
                  n,
                  j
                )
              ),
              (j = null);
          }),
          f === void 0 && p.setContentType(null),
          "setRequestHeader" in j &&
            T.forEach(p.toJSON(), function (J, z) {
              j.setRequestHeader(z, J);
            }),
          T.isUndefined(c.withCredentials) ||
            (j.withCredentials = !!c.withCredentials),
          h && h !== "json" && (j.responseType = c.responseType),
          x && (([F, A] = Ko(x, !0)), j.addEventListener("progress", F)),
          v &&
            j.upload &&
            (([E, B] = Ko(v)),
            j.upload.addEventListener("progress", E),
            j.upload.addEventListener("loadend", B)),
          (c.cancelToken || c.signal) &&
            ((S = (G) => {
              j &&
                (l(!G || G.type ? new li(null, n, j) : G),
                j.abort(),
                (j = null));
            }),
            c.cancelToken && c.cancelToken.subscribe(S),
            c.signal &&
              (c.signal.aborted ? S() : c.signal.addEventListener("abort", S)));
        const $ = h1(c.url);
        if ($ && vt.protocols.indexOf($) === -1) {
          l(new Ee("Unsupported protocol " + $ + ":", Ee.ERR_BAD_REQUEST, n));
          return;
        }
        j.send(f || null);
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
            S instanceof Ee ? S : new li(S instanceof Error ? S.message : S)
          );
        }
      };
      let p =
        i &&
        setTimeout(() => {
          (p = null), f(new Ee(`timeout ${i} of ms exceeded`, Ee.ETIMEDOUT));
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
  Pp = (n, i, s, l) => {
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
              let F = (f += E);
              s(F);
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
  Tp = 64 * 1024,
  Pa = Xh && Yh(() => T.isReadableStream(new Response("").body)),
  Go = { stream: Pa && ((n) => n.body) };
ul &&
  ((n) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
      !Go[i] &&
        (Go[i] = T.isFunction(n[i])
          ? (s) => s[i]()
          : (s, l) => {
              throw new Ee(
                `Response type '${i}' is not supported`,
                Ee.ERR_NOT_SUPPORT,
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
  F1 = async (n, i) => {
    const s = T.toFiniteNumber(n.getContentLength());
    return s ?? T1(i);
  },
  A1 =
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
        fetchOptions: F,
      } = Gh(n);
      x = x ? (x + "").toLowerCase() : "text";
      let B = E1([c, f && f.toAbortSignal()], p),
        A;
      const R =
        B &&
        B.unsubscribe &&
        (() => {
          B.unsubscribe();
        });
      let j;
      try {
        if (
          v &&
          P1 &&
          s !== "get" &&
          s !== "head" &&
          (j = await F1(S, l)) !== 0
        ) {
          let z = new Request(i, { method: "POST", body: l, duplex: "half" }),
            q;
          if (
            (T.isFormData(l) &&
              (q = z.headers.get("content-type")) &&
              S.setContentType(q),
            z.body)
          ) {
            const [U, pe] = _p(j, Ko(Op(v)));
            l = Pp(z.body, Tp, U, pe);
          }
        }
        T.isString(E) || (E = E ? "include" : "omit");
        const X = "credentials" in Request.prototype;
        A = new Request(i, {
          ...F,
          signal: B,
          method: s.toUpperCase(),
          headers: S.normalize().toJSON(),
          body: l,
          duplex: "half",
          credentials: X ? E : void 0,
        });
        let $ = await fetch(A, F);
        const G = Pa && (x === "stream" || x === "response");
        if (Pa && (h || (G && R))) {
          const z = {};
          ["status", "statusText", "headers"].forEach((me) => {
            z[me] = $[me];
          });
          const q = T.toFiniteNumber($.headers.get("content-length")),
            [U, pe] = (h && _p(q, Ko(Op(h), !0))) || [];
          $ = new Response(
            Pp($.body, Tp, U, () => {
              pe && pe(), R && R();
            }),
            z
          );
        }
        x = x || "text";
        let J = await Go[T.findKey(Go, x) || "text"]($, n);
        return (
          !G && R && R(),
          await new Promise((z, q) => {
            qh(z, q, {
              data: J,
              headers: jt.from($.headers),
              status: $.status,
              statusText: $.statusText,
              config: n,
              request: A,
            });
          })
        );
      } catch (X) {
        throw (
          (R && R(),
          X && X.name === "TypeError" && /Load failed|fetch/i.test(X.message)
            ? Object.assign(new Ee("Network Error", Ee.ERR_NETWORK, n, A), {
                cause: X.cause || X,
              })
            : Ee.from(X, X && X.code, n, A))
        );
      }
    }),
  Ta = { http: Q0, xhr: x1, fetch: A1 };
T.forEach(Ta, (n, i) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: i });
    } catch {}
    Object.defineProperty(n, "adapterName", { value: i });
  }
});
const Fp = (n) => `- ${n}`,
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
          !N1(s) && ((l = Ta[(p = String(s)).toLowerCase()]), l === void 0))
        )
          throw new Ee(`Unknown adapter '${p}'`);
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
              f.map(Fp).join(`
`)
            : " " + Fp(f[0])
          : "as no adapter specified";
        throw new Ee(
          "There is no suitable adapter to dispatch the request " + p,
          "ERR_NOT_SUPPORT"
        );
      }
      return l;
    },
    adapters: Ta,
  };
function fa(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new li(null, n);
}
function Ap(n) {
  return (
    fa(n),
    (n.headers = jt.from(n.headers)),
    (n.data = ca.call(n, n.transformRequest)),
    ["post", "put", "patch"].indexOf(n.method) !== -1 &&
      n.headers.setContentType("application/x-www-form-urlencoded", !1),
    Jh.getAdapter(n.adapter || ps.adapter)(n).then(
      function (l) {
        return (
          fa(n),
          (l.data = ca.call(n, n.transformResponse, l)),
          (l.headers = jt.from(l.headers)),
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
              (l.response.headers = jt.from(l.response.headers)))),
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
const Np = {};
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
      throw new Ee(
        c(p, " has been removed" + (s ? " in " + s : "")),
        Ee.ERR_DEPRECATED
      );
    return (
      s &&
        !Np[p] &&
        ((Np[p] = !0),
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
function j1(n, i, s) {
  if (typeof n != "object")
    throw new Ee("options must be an object", Ee.ERR_BAD_OPTION_VALUE);
  const l = Object.keys(n);
  let c = l.length;
  for (; c-- > 0; ) {
    const f = l[c],
      p = i[f];
    if (p) {
      const h = n[f],
        v = h === void 0 || p(h, f, n);
      if (v !== !0)
        throw new Ee("option " + f + " must be " + v, Ee.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0) throw new Ee("Unknown option " + f, Ee.ERR_BAD_OPTION);
  }
}
const Mo = { assertOptions: j1, validators: al },
  dn = Mo.validators;
let pr = class {
  constructor(i) {
    (this.defaults = i || {}),
      (this.interceptors = { request: new Ep(), response: new Ep() });
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
        (A) => {
          delete f[A];
        }
      ),
      (s.headers = jt.concat(p, f));
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
      F;
    if (!v) {
      const A = [Ap.bind(this), void 0];
      for (
        A.unshift(...h), A.push(...x), F = A.length, S = Promise.resolve(s);
        E < F;

      )
        S = S.then(A[E++], A[E++]);
      return S;
    }
    F = h.length;
    let B = s;
    for (E = 0; E < F; ) {
      const A = h[E++],
        R = h[E++];
      try {
        B = A(B);
      } catch (j) {
        R.call(this, j);
        break;
      }
    }
    try {
      S = Ap.call(this, B);
    } catch (A) {
      return Promise.reject(A);
    }
    for (E = 0, F = x.length; E < F; ) S = S.then(x[E++], x[E++]);
    return S;
  }
  getUri(i) {
    i = gr(this.defaults, i);
    const s = Kh(i.baseURL, i.url, i.allowAbsoluteUrls);
    return Bh(s, i.params, i.paramsSerializer);
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
let L1 = class em {
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
        l.reason || ((l.reason = new li(f, p, h)), s(l.reason));
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
function D1(n) {
  return function (s) {
    return n.apply(null, s);
  };
}
function z1(n) {
  return T.isObject(n) && n.isAxiosError === !0;
}
const Fa = {
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
Object.entries(Fa).forEach(([n, i]) => {
  Fa[i] = n;
});
function tm(n) {
  const i = new pr(n),
    s = Ah(pr.prototype.request, i);
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
Je.CanceledError = li;
Je.CancelToken = L1;
Je.isCancel = Qh;
Je.VERSION = Zh;
Je.toFormData = ll;
Je.AxiosError = Ee;
Je.Cancel = Je.CanceledError;
Je.all = function (i) {
  return Promise.all(i);
};
Je.spread = D1;
Je.isAxiosError = z1;
Je.mergeConfig = gr;
Je.AxiosHeaders = jt;
Je.formToJSON = (n) => Wh(T.isHTMLForm(n) ? new FormData(n) : n);
Je.getAdapter = Jh.getAdapter;
Je.HttpStatusCode = Fa;
Je.default = Je;
const {
    Axios: Dw,
    AxiosError: zw,
    CanceledError: Iw,
    isCancel: Mw,
    CancelToken: $w,
    VERSION: Uw,
    all: bw,
    Cancel: Vw,
    isAxiosError: Bw,
    spread: Hw,
    toFormData: Ww,
    AxiosHeaders: Qw,
    HttpStatusCode: qw,
    formToJSON: Kw,
    getAdapter: Gw,
    mergeConfig: Xw,
  } = Je,
  Ga = Je.create({
    baseURL: "https://api.upsell.co",
    headers: { "Content-Type": "application/json" },
  }),
  I1 = async (n) => {
    const { data: i } = await Ga.post("/ticimax/order", { phone: `90${n}` });
    return i.data;
  },
  M1 = () => xh({ mutationFn: I1 }),
  $1 = je.button`
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
  ns = ({ children: n, icon: i, variant: s, ...l }) =>
    D.jsxs($1, { $variant: s, ...l, children: [i, n] }),
  U1 = je.div`
  position: relative;
  width: 100%;
`,
  nm = je.div`
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
  b1 = je.input`
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
  rm = ce.forwardRef(({ hasError: n, icon: i, ...s }, l) =>
    D.jsxs(U1, {
      children: [
        D.jsx(b1, { ref: l, $icon: i, $hasError: n, ...s }),
        i && D.jsx(nm, { children: i }),
      ],
    })
  );
var V1 = bp(),
  da,
  jp;
function B1() {
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
    F = E.toString,
    B = Math.max,
    A = Math.min,
    R = function () {
      return S.Date.now();
    };
  function j(z, q, U) {
    var pe,
      me,
      Te,
      Ce,
      ee,
      oe,
      ve = 0,
      Le = !1,
      Pe = !1,
      _e = !0;
    if (typeof z != "function") throw new TypeError(n);
    (q = J(q) || 0),
      X(U) &&
        ((Le = !!U.leading),
        (Pe = "maxWait" in U),
        (Te = Pe ? B(J(U.maxWait) || 0, q) : Te),
        (_e = "trailing" in U ? !!U.trailing : _e));
    function W(ae) {
      var ye = pe,
        xe = me;
      return (pe = me = void 0), (ve = ae), (Ce = z.apply(xe, ye)), Ce;
    }
    function te(ae) {
      return (ve = ae), (ee = setTimeout(L, q)), Le ? W(ae) : Ce;
    }
    function K(ae) {
      var ye = ae - oe,
        xe = ae - ve,
        Be = q - ye;
      return Pe ? A(Be, Te - xe) : Be;
    }
    function k(ae) {
      var ye = ae - oe,
        xe = ae - ve;
      return oe === void 0 || ye >= q || ye < 0 || (Pe && xe >= Te);
    }
    function L() {
      var ae = R();
      if (k(ae)) return he(ae);
      ee = setTimeout(L, K(ae));
    }
    function he(ae) {
      return (ee = void 0), _e && pe ? W(ae) : ((pe = me = void 0), Ce);
    }
    function we() {
      ee !== void 0 && clearTimeout(ee), (ve = 0), (pe = oe = me = ee = void 0);
    }
    function ke() {
      return ee === void 0 ? Ce : he(R());
    }
    function Se() {
      var ae = R(),
        ye = k(ae);
      if (((pe = arguments), (me = this), (oe = ae), ye)) {
        if (ee === void 0) return te(oe);
        if (Pe) return (ee = setTimeout(L, q)), W(oe);
      }
      return ee === void 0 && (ee = setTimeout(L, q)), Ce;
    }
    return (Se.cancel = we), (Se.flush = ke), Se;
  }
  function X(z) {
    var q = typeof z;
    return !!z && (q == "object" || q == "function");
  }
  function $(z) {
    return !!z && typeof z == "object";
  }
  function G(z) {
    return typeof z == "symbol" || ($(z) && F.call(z) == s);
  }
  function J(z) {
    if (typeof z == "number") return z;
    if (G(z)) return i;
    if (X(z)) {
      var q = typeof z.valueOf == "function" ? z.valueOf() : z;
      z = X(q) ? q + "" : q;
    }
    if (typeof z != "string") return z === 0 ? z : +z;
    z = z.replace(l, "");
    var U = f.test(z);
    return U || p.test(z) ? h(z.slice(2), U ? 2 : 8) : c.test(z) ? i : +z;
  }
  return (da = j), da;
}
B1();
var H1 = typeof window < "u" ? Ie.useLayoutEffect : Ie.useEffect;
function W1(n, i, s, l) {
  const c = Ie.useRef(i);
  H1(() => {
    c.current = i;
  }, [i]),
    Ie.useEffect(() => {
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
const q1 = Ma`
  from { opacity: 0; }
  to { opacity: 1; }
`,
  K1 = Ma`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,
  G1 = je.div`
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
  X1 = je.div`
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
  Y1 = je.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: ${({ theme: n }) => n.spacing.xl};
  color: white;
`,
  J1 = je.button`
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
    const l = Ie.useRef(null);
    return (
      Q1(l, i),
      Ie.useEffect(() => {
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
        ? V1.createPortal(
            D.jsx(G1, {
              children: D.jsxs(X1, {
                ref: l,
                children: [
                  D.jsx(J1, { onClick: i, children: "×" }),
                  D.jsx(Y1, { children: s }),
                ],
              }),
            }),
            document.body
          )
        : null
    );
  },
  Z1 = Ma`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  ew = je.div`
  border: 4px solid ${({ theme: n }) => n.colors.lightGray};
  border-top: 4px solid ${({ theme: n }) => n.colors.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${Z1} 1s linear infinite;
  margin: 0 auto; /* Ortalamak için eklendi */
`,
  sm = () => D.jsx(ew, {});
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
  return ce.createElement(
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
    ce.createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none",
    }),
    ce.createElement("circle", { cx: "12", cy: "12", r: "9" }),
    ce.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
    ce.createElement("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
  );
}
var rw = ["size", "color"];
function iw(n) {
  var i = n.size,
    s = i === void 0 ? 24 : i,
    l = n.color,
    c = l === void 0 ? "currentColor" : l,
    f = vr(n, rw);
  return ce.createElement(
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
    ce.createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none",
    }),
    ce.createElement("path", {
      d: "M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6",
    }),
    ce.createElement("path", { d: "M9 17v1a3 3 0 0 0 6 0v-1" })
  );
}
var sw = ["size", "color"];
function ow(n) {
  var i = n.size,
    s = i === void 0 ? 24 : i,
    l = n.color,
    c = l === void 0 ? "currentColor" : l,
    f = vr(n, sw);
  return ce.createElement(
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
    ce.createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none",
    }),
    ce.createElement("path", { d: "M5 12l5 5l10 -10" })
  );
}
var lw = ["size", "color"];
function uw(n) {
  var i = n.size,
    s = i === void 0 ? 24 : i,
    l = n.color,
    c = l === void 0 ? "currentColor" : l,
    f = vr(n, lw);
  return ce.createElement(
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
    ce.createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none",
    }),
    ce.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2",
    }),
    ce.createElement("polyline", { points: "3 7 12 13 21 7" })
  );
}
var aw = ["size", "color"];
function om(n) {
  var i = n.size,
    s = i === void 0 ? 24 : i,
    l = n.color,
    c = l === void 0 ? "currentColor" : l,
    f = vr(n, aw);
  return ce.createElement(
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
    ce.createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none",
    }),
    ce.createElement("path", {
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
  return ce.createElement(
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
    ce.createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none",
    }),
    ce.createElement("circle", { cx: "10", cy: "10", r: "7" }),
    ce.createElement("line", { x1: "21", y1: "21", x2: "15", y2: "15" })
  );
}
var dw = ["size", "color"];
function Lp(n) {
  var i = n.size,
    s = i === void 0 ? 24 : i,
    l = n.color,
    c = l === void 0 ? "currentColor" : l,
    f = vr(n, dw);
  return ce.createElement(
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
    ce.createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none",
    }),
    ce.createElement("circle", { cx: "7", cy: "17", r: "2" }),
    ce.createElement("circle", { cx: "17", cy: "17", r: "2" }),
    ce.createElement("path", {
      d: "M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5",
    })
  );
}
const pw = je.div`
  text-align: center;
`,
  Dp = je.h2`
  font-size: 24px;
  /* İkon ve açıklama eklendiği için başlığın alt boşluğunu azaltıyoruz */
  margin-bottom: ${({ theme: n }) => n.spacing.sm};
  color: ${({ theme: n }) => n.colors.secondary};
  font-weight: 700;
`,
  hw = je.p`
  /* Üst boşluğu kaldırıp alt boşluğu artırıyoruz */
  margin-top: 0;
  margin-bottom: ${({ theme: n }) => n.spacing.xl};
  color: #6c757d;
  font-size: 16px;
  line-height: 1.5;
`,
  zp = je.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: ${({ theme: n }) => n.spacing.md};
`,
  Po = je.div`
  flex-grow: 1;
  height: 1px;
  background-color: #ddd;
`,
  Ip = je.div`
  border: 2px solid ${({ theme: n }) => n.colors.primary};
  border-radius: 50%;
  padding: ${({ theme: n }) => n.spacing.sm};
  margin: 0 ${({ theme: n }) => n.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme: n }) => n.colors.secondary};
`,
  To = je.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme: n }) => n.spacing.sm};
  color: ${({ theme: n }) => n.colors.error};
  font-size: 14px;
  margin-top: ${({ theme: n }) => n.spacing.sm};
  min-height: 20px;
`,
  mw = je.div`
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
  yw = je.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
  margin-top: ${({ theme: n }) => n.spacing.md};
`,
  Jr = je.div`
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
  gw = je.a`
  color: ${({ theme: n }) => n.colors.primary};
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`,
  Mp = je.div`
  margin-top: ${({ theme: n }) => n.spacing.lg};
`,
  vw = ({ details: n }) =>
    D.jsxs(yw, {
      children: [
        D.jsxs(Jr, {
          children: [
            D.jsx("span", { children: "Sipariş No:" }),
            D.jsx("span", { children: n.siparisNo || "-" }),
          ],
        }),
        D.jsxs(Jr, {
          children: [
            D.jsx("span", { children: "Sipariş Tarihi:" }),
            D.jsx("span", {
              children:
                new Date(n.siparisTarihi).toLocaleDateString("tr-TR") || "-",
            }),
          ],
        }),
        D.jsxs(Jr, {
          children: [
            D.jsx("span", { children: "Sipariş Durumu:" }),
            D.jsx("span", { children: n.siparisDurumu || "-" }),
          ],
        }),
        D.jsxs(Jr, {
          children: [
            D.jsx("span", { children: "Kargo Takip No:" }),
            D.jsx("span", { children: n.kargoTakipNo || "-" }),
          ],
        }),
        D.jsxs(Jr, {
          children: [
            D.jsx("span", { children: "Kargo Firması:" }),
            D.jsx("span", { children: n.kargoFirmaTanim || "-" }),
          ],
        }),
        D.jsxs(Jr, {
          children: [
            D.jsx("span", { children: "Kargo Takip Linki:" }),
            D.jsx("span", {
              children: n.kargoTakipLink
                ? D.jsx(gw, {
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
      } = Fh(),
      {
        mutate: f,
        data: p,
        isPending: h,
        isSuccess: v,
        isError: x,
        error: S,
        reset: E,
      } = M1(),
      F = () => {
        E(), i();
      },
      B = (R) => {
        f(R.phone);
      },
      A = () =>
        h
          ? D.jsx(sm, {})
          : x
          ? D.jsxs(To, {
              children: [
                D.jsx(fr, { size: 18 }),
                " Bir hata oluştu: ",
                S.message,
              ],
            })
          : v
          ? p
            ? D.jsxs(D.Fragment, {
                children: [
                  D.jsx(Dp, { children: "Sipariş Detayları" }),
                  D.jsxs(zp, {
                    children: [
                      D.jsx(Po, {}),
                      D.jsx(Ip, {
                        children: D.jsx(Lp, { size: 32, strokeWidth: 1.5 }),
                      }),
                      D.jsx(Po, {}),
                    ],
                  }),
                  D.jsx(vw, { details: p }),
                  D.jsx(Mp, {
                    children: D.jsx(ns, {
                      onClick: () => E(),
                      children: "Yeni Sorgu Yap",
                    }),
                  }),
                ],
              })
            : D.jsxs(D.Fragment, {
                children: [
                  D.jsxs(To, {
                    children: [
                      D.jsx(fr, { size: 18 }),
                      " Bu telefon numarasına ait bir sipariş bulunamadı.",
                    ],
                  }),
                  D.jsx(Mp, {
                    children: D.jsx(ns, {
                      onClick: () => E(),
                      children: "Yeni Sorgu Yap",
                    }),
                  }),
                ],
              })
          : D.jsxs("form", {
              onSubmit: l(B),
              children: [
                D.jsx(Dp, { children: "Siparişini Sorgula" }),
                D.jsxs(zp, {
                  children: [
                    D.jsx(Po, {}),
                    D.jsx(Ip, {
                      children: D.jsx(Lp, { size: 32, strokeWidth: 1.5 }),
                    }),
                    D.jsx(Po, {}),
                  ],
                }),
                D.jsx(hw, {
                  children:
                    "Sipariş durumunu ve kargo detaylarını görmek için telefon numaranı gir.",
                }),
                D.jsx(rm, {
                  icon: D.jsx(om, { size: 22, strokeWidth: 1.5 }),
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
                  D.jsxs(To, {
                    children: [D.jsx(fr, { size: 18 }), " ", c.phone.message],
                  }),
                D.jsxs(mw, {
                  children: [
                    D.jsx("input", {
                      type: "checkbox",
                      id: "kvkkCheck",
                      ...s("kvkk", {
                        required: "Lütfen onay kutusunu işaretleyin.",
                      }),
                    }),
                    D.jsx("label", {
                      htmlFor: "kvkkCheck",
                      children:
                        "Kampanya, duyuru ve bilgilendirmelerden haberdar olmak istediğimi belirtiyorum.",
                    }),
                  ],
                }),
                c.kvkk &&
                  D.jsxs(To, {
                    children: [D.jsx(fr, { size: 18 }), " ", c.kvkk.message],
                  }),
                D.jsx(ns, {
                  type: "submit",
                  disabled: h,
                  icon: D.jsx(fw, { size: 20, strokeWidth: 2 }),
                  children: "Sorgula",
                }),
              ],
            });
    return D.jsx(im, {
      isOpen: n,
      onClose: F,
      children: D.jsx(pw, { children: A() }),
    });
  },
  Sw = async (n) => {
    const { data: i } = await Ga.post("/phonesubscription/reminder", n);
    return i;
  },
  kw = () => xh({ mutationFn: Sw }),
  xw = je.div`
  text-align: center;
  width: 100%;
`,
  $p = je.h2`
  font-size: 22px;
  margin-bottom: ${({ theme: n }) => n.spacing.md};
  color: ${({ theme: n }) => n.colors.white};
  font-weight: 700;
`,
  Up = je.p`
  margin-bottom: ${({ theme: n }) => n.spacing.lg};
  color: ${({ theme: n }) => n.colors.lightGray};
  font-size: 15px;
  line-height: 1.5;
`,
  Ew = je.div`
  margin-bottom: ${({ theme: n }) => n.spacing.md};
  text-align: left;
`,
  Cw = je.label`
  display: block;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme: n }) => n.colors.lightGray};
`,
  _w = je.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 10px;
`,
  Ow = je.button`
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  border: 2px solid
    ${({ theme: n, $isSelected: i }) =>
      i ? n.colors.primary : n.colors.mediumGray};
  background-color: ${({ theme: n, $isSelected: i }) =>
    i ? n.colors.primary : "transparent"};
  color: ${({ theme: n, $isSelected: i }) => n.colors.white};
  transition: all 0.2s ease;
  position: relative;
  opacity: ${({ $isDisabled: n }) => (n ? 0.5 : 1)};
  cursor: ${({ $isDisabled: n }) => (n ? "not-allowed" : "pointer")};

  ${({ $isDisabled: n }) =>
    n &&
    `
    text-decoration: line-through;
    color: #888;
    border-color: #555;
    background-color: transparent;
  `}

  &:hover:not(:disabled) {
    border-color: ${({ theme: n }) => n.colors.primary};
  }
`,
  Rw = je.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme: n }) => n.spacing.md};
`,
  Pw = je.div`
  background-color: ${({ theme: n }) => n.colors.success};
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,
  pa = je.p`
  color: ${({ theme: n }) => n.colors.error};
  font-size: 14px;
  margin-top: ${({ theme: n }) => n.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,
  Tw = ({ isOpen: n, onClose: i, product: s, channel: l }) => {
    const [c, f] = Ie.useState({}),
      [p, h] = Ie.useState(null),
      {
        register: v,
        handleSubmit: x,
        formState: { errors: S },
        reset: E,
      } = Fh(),
      {
        mutate: F,
        isPending: B,
        isSuccess: A,
        isError: R,
        error: j,
        reset: X,
      } = kw(),
      $ = Ie.useMemo(() => {
        if (!s?.productVariantData) return {};
        const U = {};
        s.productVariantData.forEach((Te) => {
          const Ce = Te.ekSecenekTipiTanim;
          U[Ce] || (U[Ce] = []),
            U[Ce].some((ee) => ee.tanim === Te.tanim) || U[Ce].push(Te);
        });
        const pe = Object.keys(U).sort((Te, Ce) => {
            const ee = U[Te][0].ekSecenekTipiSira,
              oe = U[Ce][0].ekSecenekTipiSira;
            return ee - oe;
          }),
          me = {};
        for (const Te of pe) me[Te] = U[Te];
        return me;
      }, [s]);
    Ie.useEffect(() => {
      const U = Object.keys($);
      if (U.length === 0 || !s?.productVariantData) return;
      if (U.every((me) => c[me])) {
        const Te = U.map((Ce) => {
          const ee = c[Ce],
            oe = s.productVariantData
              .filter((ve) => ve.ekSecenekTipiTanim === Ce && ve.tanim === ee)
              .map((ve) => ve.urunID);
          return new Set(oe);
        }).reduce((Ce, ee) => new Set([...Ce].filter((oe) => ee.has(oe))));
        if (Te.size === 1) {
          const Ce = Te.values().next().value,
            ee = s.products?.find((oe) => oe.id === Ce);
          ee && ee.stokAdedi === 0 ? h(ee) : h(null);
        } else h(null);
      } else h(null);
    }, [c, $, s]);
    const G = (U, pe) => {
        f((me) => ({ ...me, [U]: pe }));
      },
      J = () => {
        X(), E(), f({}), h(null), i();
      },
      z = (U) => {
        if (!s || !p) return;
        const pe = Object.values(c).join(" / ");
        F({
          contact: l === "phone" ? `90${U.contact}` : U.contact,
          productName: s.productName,
          productSlug: window.location.pathname,
          productId: p.id.toString(),
          productCardId: s.productId.toString(),
          variantInfo: pe,
          hasVariant: !0,
        });
      },
      q = () => {
        if (!s)
          return D.jsxs(pa, {
            children: [D.jsx(fr, { size: 18 }), " Ürün bilgisi bulunamadı."],
          });
        if (B) return D.jsx(sm, {});
        if (A)
          return D.jsxs(Rw, {
            children: [
              D.jsx(Pw, { children: D.jsx(ow, { size: 40, strokeWidth: 2 }) }),
              D.jsx($p, { children: "Talebiniz Alındı!" }),
              D.jsx(Up, {
                children: "Ürün stoğa geldiğinde size haber vereceğiz.",
              }),
              D.jsx(ns, {
                onClick: J,
                variant: "secondary",
                children: "Kapat",
              }),
            ],
          });
        const U = Object.keys($);
        return D.jsxs("form", {
          onSubmit: x(z),
          children: [
            D.jsx($p, { children: "Stoğa Gelince Haber Ver" }),
            D.jsx(Up, {
              children:
                "İstediğiniz kombinasyon stoğa geldiğinde ilk sizin haberiniz olsun!",
            }),
            U.map((pe) =>
              D.jsxs(
                Ew,
                {
                  children: [
                    D.jsxs(Cw, { children: [pe, " Seçin:"] }),
                    D.jsx(_w, {
                      children: $[pe].map((me) =>
                        D.jsx(
                          Ow,
                          {
                            type: "button",
                            $isSelected: c[pe] === me.tanim,
                            $isDisabled: !1,
                            onClick: () => G(pe, me.tanim),
                            children: me.tanim,
                          },
                          me.id
                        )
                      ),
                    }),
                  ],
                },
                pe
              )
            ),
            R &&
              D.jsxs(pa, {
                children: [
                  D.jsx(fr, { size: 18 }),
                  j?.response?.data?.message || "Bir hata oluştu.",
                ],
              }),
            D.jsx(rm, {
              icon:
                l === "phone"
                  ? D.jsx(om, { size: 22, strokeWidth: 1.5 })
                  : D.jsx(uw, { size: 22, strokeWidth: 1.5 }),
              placeholder: l === "phone" ? "5XXXXXXXXX" : "E-posta Adresiniz",
              type: l === "phone" ? "tel" : "email",
              maxLength: l === "phone" ? 10 : void 0,
              hasError: !!S.contact,
              ...v("contact", {
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
            S.contact &&
              D.jsxs(pa, {
                children: [D.jsx(fr, { size: 18 }), " ", S.contact.message],
              }),
            D.jsx(ns, {
              style: { marginTop: "16px" },
              type: "submit",
              disabled: B || !p,
              icon: D.jsx(iw, { size: 20, strokeWidth: 2 }),
              children: "Bildirim İste",
            }),
          ],
        });
      };
    return D.jsx(im, {
      isOpen: n,
      onClose: J,
      children: D.jsx(xw, { children: q() }),
    });
  },
  Fw = new Dv();
function Aw() {
  const [n, i] = Ie.useState(null),
    [s, l] = Ie.useState(null),
    [c, f] = Ie.useState(!1),
    [p, h] = Ie.useState(!1);
  Ie.useEffect(() => {
    Ga.get("/Shops")
      .then((x) => i(x.data.data))
      .catch((x) => {
        console.error("Dükkan verisi çekilemedi:", x),
          i({ mainColor: Ki.colors.primary, stockReminderUsageChannel: 3 });
      }),
      window.productDetailModel && l(window.productDetailModel);
  }, []);
  const v = Ie.useMemo(
    () =>
      n
        ? {
            ...Ki,
            colors: {
              ...Ki.colors,
              primary: n.mainColor,
              gradientStart: n.mainColor,
              gradientEnd: Ki.colors.gradientEnd,
            },
          }
        : Ki,
    [n]
  );
  return (
    Ie.useEffect(() => {
      if (!n || !s) return;
      const x = s.productVariantData?.some((R) => R.stokAdedi === 0),
        S = document.getElementById("upsell-ss-reminder");
      S && (x ? (S.style.display = "flex") : (S.style.display = "none"));
      const E = document.querySelectorAll(".upsell-ss"),
        F = document.querySelectorAll("#upsell-ss-reminder"),
        B = () => f(!0),
        A = () => h(!0);
      return (
        E.forEach((R) => R.addEventListener("click", B)),
        F.forEach((R) => R.addEventListener("click", A)),
        () => {
          E.forEach((R) => R.removeEventListener("click", B)),
            F.forEach((R) => R.removeEventListener("click", A));
        }
      );
    }, [n, s]),
    n
      ? D.jsx(Mv, {
          client: Fw,
          children: D.jsxs(lv, {
            theme: v,
            children: [
              D.jsx(fv, {}),
              D.jsx("button", {
                className: "upsell-ss",
                style: { margin: "20px", padding: "10px" },
                children: "Siparişimi Sorgula (Test)",
              }),
              D.jsx("button", {
                id: "upsell-ss-reminder",
                style: { margin: "20px", padding: "10px", display: "none" },
                children: "Stoğa Gelince Haber Ver (Test)",
              }),
              D.jsx(ww, { isOpen: c, onClose: () => f(!1) }),
              D.jsx(Tw, {
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
  D.jsx(Ie.StrictMode, { children: D.jsx(Aw, {}) })
);
