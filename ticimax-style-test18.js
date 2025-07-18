(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) a(c);
  new MutationObserver((c) => {
    for (const f of c)
      if (f.type === "childList")
        for (const d of f.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && a(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
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
  function a(c) {
    if (c.ep) return;
    c.ep = !0;
    const f = o(c);
    fetch(c.href, f);
  }
})();
function Ha(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var ga = { exports: {} },
  Ni = {},
  ya = { exports: {} },
  Ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qf;
function Hm() {
  if (Qf) return Ne;
  Qf = 1;
  var n = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    f = Symbol.for("react.provider"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    S = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    O = Symbol.iterator;
  function b(_) {
    return _ === null || typeof _ != "object"
      ? null
      : ((_ = (O && _[O]) || _["@@iterator"]),
        typeof _ == "function" ? _ : null);
  }
  var Y = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    v = {};
  function C(_, j, U) {
    (this.props = _),
      (this.context = j),
      (this.refs = v),
      (this.updater = U || Y);
  }
  (C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (_, j) {
      if (typeof _ != "object" && typeof _ != "function" && _ != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, _, j, "setState");
    }),
    (C.prototype.forceUpdate = function (_) {
      this.updater.enqueueForceUpdate(this, _, "forceUpdate");
    });
  function W() {}
  W.prototype = C.prototype;
  function z(_, j, U) {
    (this.props = _),
      (this.context = j),
      (this.refs = v),
      (this.updater = U || Y);
  }
  var D = (z.prototype = new W());
  (D.constructor = z), T(D, C.prototype), (D.isPureReactComponent = !0);
  var Z = Array.isArray,
    L = Object.prototype.hasOwnProperty,
    he = { current: null },
    ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function xe(_, j, U) {
    var Q,
      ne = {},
      R = null,
      de = null;
    if (j != null)
      for (Q in (j.ref !== void 0 && (de = j.ref),
      j.key !== void 0 && (R = "" + j.key),
      j))
        L.call(j, Q) && !ge.hasOwnProperty(Q) && (ne[Q] = j[Q]);
    var V = arguments.length - 2;
    if (V === 1) ne.children = U;
    else if (1 < V) {
      for (var we = Array(V), Se = 0; Se < V; Se++) we[Se] = arguments[Se + 2];
      ne.children = we;
    }
    if (_ && _.defaultProps)
      for (Q in ((V = _.defaultProps), V)) ne[Q] === void 0 && (ne[Q] = V[Q]);
    return {
      $$typeof: n,
      type: _,
      key: R,
      ref: de,
      props: ne,
      _owner: he.current,
    };
  }
  function te(_, j) {
    return {
      $$typeof: n,
      type: _.type,
      key: j,
      ref: _.ref,
      props: _.props,
      _owner: _._owner,
    };
  }
  function Ae(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === n;
  }
  function Le(_) {
    var j = { "=": "=0", ":": "=2" };
    return (
      "$" +
      _.replace(/[=:]/g, function (U) {
        return j[U];
      })
    );
  }
  var ie = /\/+/g;
  function ae(_, j) {
    return typeof _ == "object" && _ !== null && _.key != null
      ? Le("" + _.key)
      : j.toString(36);
  }
  function _e(_, j, U, Q, ne) {
    var R = typeof _;
    (R === "undefined" || R === "boolean") && (_ = null);
    var de = !1;
    if (_ === null) de = !0;
    else
      switch (R) {
        case "string":
        case "number":
          de = !0;
          break;
        case "object":
          switch (_.$$typeof) {
            case n:
            case s:
              de = !0;
          }
      }
    if (de)
      return (
        (de = _),
        (ne = ne(de)),
        (_ = Q === "" ? "." + ae(de, 0) : Q),
        Z(ne)
          ? ((U = ""),
            _ != null && (U = _.replace(ie, "$&/") + "/"),
            _e(ne, j, U, "", function (Se) {
              return Se;
            }))
          : ne != null &&
            (Ae(ne) &&
              (ne = te(
                ne,
                U +
                  (!ne.key || (de && de.key === ne.key)
                    ? ""
                    : ("" + ne.key).replace(ie, "$&/") + "/") +
                  _
              )),
            j.push(ne)),
        1
      );
    if (((de = 0), (Q = Q === "" ? "." : Q + ":"), Z(_)))
      for (var V = 0; V < _.length; V++) {
        R = _[V];
        var we = Q + ae(R, V);
        de += _e(R, j, U, we, ne);
      }
    else if (((we = b(_)), typeof we == "function"))
      for (_ = we.call(_), V = 0; !(R = _.next()).done; )
        (R = R.value), (we = Q + ae(R, V++)), (de += _e(R, j, U, we, ne));
    else if (R === "object")
      throw (
        ((j = String(_)),
        Error(
          "Objects are not valid as a React child (found: " +
            (j === "[object Object]"
              ? "object with keys {" + Object.keys(_).join(", ") + "}"
              : j) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return de;
  }
  function Pe(_, j, U) {
    if (_ == null) return _;
    var Q = [],
      ne = 0;
    return (
      _e(_, Q, "", "", function (R) {
        return j.call(U, R, ne++);
      }),
      Q
    );
  }
  function Me(_) {
    if (_._status === -1) {
      var j = _._result;
      (j = j()),
        j.then(
          function (U) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 1), (_._result = U));
          },
          function (U) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 2), (_._result = U));
          }
        ),
        _._status === -1 && ((_._status = 0), (_._result = j));
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var Ce = { current: null },
    G = { transition: null },
    ce = {
      ReactCurrentDispatcher: Ce,
      ReactCurrentBatchConfig: G,
      ReactCurrentOwner: he,
    };
  function re() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Ne.Children = {
      map: Pe,
      forEach: function (_, j, U) {
        Pe(
          _,
          function () {
            j.apply(this, arguments);
          },
          U
        );
      },
      count: function (_) {
        var j = 0;
        return (
          Pe(_, function () {
            j++;
          }),
          j
        );
      },
      toArray: function (_) {
        return (
          Pe(_, function (j) {
            return j;
          }) || []
        );
      },
      only: function (_) {
        if (!Ae(_))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return _;
      },
    }),
    (Ne.Component = C),
    (Ne.Fragment = o),
    (Ne.Profiler = c),
    (Ne.PureComponent = z),
    (Ne.StrictMode = a),
    (Ne.Suspense = S),
    (Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ce),
    (Ne.act = re),
    (Ne.cloneElement = function (_, j, U) {
      if (_ == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            _ +
            "."
        );
      var Q = T({}, _.props),
        ne = _.key,
        R = _.ref,
        de = _._owner;
      if (j != null) {
        if (
          (j.ref !== void 0 && ((R = j.ref), (de = he.current)),
          j.key !== void 0 && (ne = "" + j.key),
          _.type && _.type.defaultProps)
        )
          var V = _.type.defaultProps;
        for (we in j)
          L.call(j, we) &&
            !ge.hasOwnProperty(we) &&
            (Q[we] = j[we] === void 0 && V !== void 0 ? V[we] : j[we]);
      }
      var we = arguments.length - 2;
      if (we === 1) Q.children = U;
      else if (1 < we) {
        V = Array(we);
        for (var Se = 0; Se < we; Se++) V[Se] = arguments[Se + 2];
        Q.children = V;
      }
      return {
        $$typeof: n,
        type: _.type,
        key: ne,
        ref: R,
        props: Q,
        _owner: de,
      };
    }),
    (Ne.createContext = function (_) {
      return (
        (_ = {
          $$typeof: d,
          _currentValue: _,
          _currentValue2: _,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (_.Provider = { $$typeof: f, _context: _ }),
        (_.Consumer = _)
      );
    }),
    (Ne.createElement = xe),
    (Ne.createFactory = function (_) {
      var j = xe.bind(null, _);
      return (j.type = _), j;
    }),
    (Ne.createRef = function () {
      return { current: null };
    }),
    (Ne.forwardRef = function (_) {
      return { $$typeof: h, render: _ };
    }),
    (Ne.isValidElement = Ae),
    (Ne.lazy = function (_) {
      return { $$typeof: x, _payload: { _status: -1, _result: _ }, _init: Me };
    }),
    (Ne.memo = function (_, j) {
      return { $$typeof: E, type: _, compare: j === void 0 ? null : j };
    }),
    (Ne.startTransition = function (_) {
      var j = G.transition;
      G.transition = {};
      try {
        _();
      } finally {
        G.transition = j;
      }
    }),
    (Ne.unstable_act = re),
    (Ne.useCallback = function (_, j) {
      return Ce.current.useCallback(_, j);
    }),
    (Ne.useContext = function (_) {
      return Ce.current.useContext(_);
    }),
    (Ne.useDebugValue = function () {}),
    (Ne.useDeferredValue = function (_) {
      return Ce.current.useDeferredValue(_);
    }),
    (Ne.useEffect = function (_, j) {
      return Ce.current.useEffect(_, j);
    }),
    (Ne.useId = function () {
      return Ce.current.useId();
    }),
    (Ne.useImperativeHandle = function (_, j, U) {
      return Ce.current.useImperativeHandle(_, j, U);
    }),
    (Ne.useInsertionEffect = function (_, j) {
      return Ce.current.useInsertionEffect(_, j);
    }),
    (Ne.useLayoutEffect = function (_, j) {
      return Ce.current.useLayoutEffect(_, j);
    }),
    (Ne.useMemo = function (_, j) {
      return Ce.current.useMemo(_, j);
    }),
    (Ne.useReducer = function (_, j, U) {
      return Ce.current.useReducer(_, j, U);
    }),
    (Ne.useRef = function (_) {
      return Ce.current.useRef(_);
    }),
    (Ne.useState = function (_) {
      return Ce.current.useState(_);
    }),
    (Ne.useSyncExternalStore = function (_, j, U) {
      return Ce.current.useSyncExternalStore(_, j, U);
    }),
    (Ne.useTransition = function () {
      return Ce.current.useTransition();
    }),
    (Ne.version = "18.3.1"),
    Ne
  );
}
var qf;
function Wa() {
  return qf || ((qf = 1), (ya.exports = Hm())), ya.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yf;
function Wm() {
  if (Yf) return Ni;
  Yf = 1;
  var n = Wa(),
    s = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(h, S, E) {
    var x,
      O = {},
      b = null,
      Y = null;
    E !== void 0 && (b = "" + E),
      S.key !== void 0 && (b = "" + S.key),
      S.ref !== void 0 && (Y = S.ref);
    for (x in S) a.call(S, x) && !f.hasOwnProperty(x) && (O[x] = S[x]);
    if (h && h.defaultProps)
      for (x in ((S = h.defaultProps), S)) O[x] === void 0 && (O[x] = S[x]);
    return {
      $$typeof: s,
      type: h,
      key: b,
      ref: Y,
      props: O,
      _owner: c.current,
    };
  }
  return (Ni.Fragment = o), (Ni.jsx = d), (Ni.jsxs = d), Ni;
}
var Gf;
function Km() {
  return Gf || ((Gf = 1), (ga.exports = Wm())), ga.exports;
}
var y = Km(),
  Ie = Wa();
const Te = Ha(Ie);
var ts = {},
  va = { exports: {} },
  Nt = {},
  wa = { exports: {} },
  xa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xf;
function Qm() {
  return (
    Xf ||
      ((Xf = 1),
      (function (n) {
        function s(G, ce) {
          var re = G.length;
          G.push(ce);
          e: for (; 0 < re; ) {
            var _ = (re - 1) >>> 1,
              j = G[_];
            if (0 < c(j, ce)) (G[_] = ce), (G[re] = j), (re = _);
            else break e;
          }
        }
        function o(G) {
          return G.length === 0 ? null : G[0];
        }
        function a(G) {
          if (G.length === 0) return null;
          var ce = G[0],
            re = G.pop();
          if (re !== ce) {
            G[0] = re;
            e: for (var _ = 0, j = G.length, U = j >>> 1; _ < U; ) {
              var Q = 2 * (_ + 1) - 1,
                ne = G[Q],
                R = Q + 1,
                de = G[R];
              if (0 > c(ne, re))
                R < j && 0 > c(de, ne)
                  ? ((G[_] = de), (G[R] = re), (_ = R))
                  : ((G[_] = ne), (G[Q] = re), (_ = Q));
              else if (R < j && 0 > c(de, re))
                (G[_] = de), (G[R] = re), (_ = R);
              else break e;
            }
          }
          return ce;
        }
        function c(G, ce) {
          var re = G.sortIndex - ce.sortIndex;
          return re !== 0 ? re : G.id - ce.id;
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
          var d = Date,
            h = d.now();
          n.unstable_now = function () {
            return d.now() - h;
          };
        }
        var S = [],
          E = [],
          x = 1,
          O = null,
          b = 3,
          Y = !1,
          T = !1,
          v = !1,
          C = typeof setTimeout == "function" ? setTimeout : null,
          W = typeof clearTimeout == "function" ? clearTimeout : null,
          z = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function D(G) {
          for (var ce = o(E); ce !== null; ) {
            if (ce.callback === null) a(E);
            else if (ce.startTime <= G)
              a(E), (ce.sortIndex = ce.expirationTime), s(S, ce);
            else break;
            ce = o(E);
          }
        }
        function Z(G) {
          if (((v = !1), D(G), !T))
            if (o(S) !== null) (T = !0), Me(L);
            else {
              var ce = o(E);
              ce !== null && Ce(Z, ce.startTime - G);
            }
        }
        function L(G, ce) {
          (T = !1), v && ((v = !1), W(xe), (xe = -1)), (Y = !0);
          var re = b;
          try {
            for (
              D(ce), O = o(S);
              O !== null && (!(O.expirationTime > ce) || (G && !Le()));

            ) {
              var _ = O.callback;
              if (typeof _ == "function") {
                (O.callback = null), (b = O.priorityLevel);
                var j = _(O.expirationTime <= ce);
                (ce = n.unstable_now()),
                  typeof j == "function"
                    ? (O.callback = j)
                    : O === o(S) && a(S),
                  D(ce);
              } else a(S);
              O = o(S);
            }
            if (O !== null) var U = !0;
            else {
              var Q = o(E);
              Q !== null && Ce(Z, Q.startTime - ce), (U = !1);
            }
            return U;
          } finally {
            (O = null), (b = re), (Y = !1);
          }
        }
        var he = !1,
          ge = null,
          xe = -1,
          te = 5,
          Ae = -1;
        function Le() {
          return !(n.unstable_now() - Ae < te);
        }
        function ie() {
          if (ge !== null) {
            var G = n.unstable_now();
            Ae = G;
            var ce = !0;
            try {
              ce = ge(!0, G);
            } finally {
              ce ? ae() : ((he = !1), (ge = null));
            }
          } else he = !1;
        }
        var ae;
        if (typeof z == "function")
          ae = function () {
            z(ie);
          };
        else if (typeof MessageChannel < "u") {
          var _e = new MessageChannel(),
            Pe = _e.port2;
          (_e.port1.onmessage = ie),
            (ae = function () {
              Pe.postMessage(null);
            });
        } else
          ae = function () {
            C(ie, 0);
          };
        function Me(G) {
          (ge = G), he || ((he = !0), ae());
        }
        function Ce(G, ce) {
          xe = C(function () {
            G(n.unstable_now());
          }, ce);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (G) {
            G.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            T || Y || ((T = !0), Me(L));
          }),
          (n.unstable_forceFrameRate = function (G) {
            0 > G || 125 < G
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (te = 0 < G ? Math.floor(1e3 / G) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return o(S);
          }),
          (n.unstable_next = function (G) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var ce = 3;
                break;
              default:
                ce = b;
            }
            var re = b;
            b = ce;
            try {
              return G();
            } finally {
              b = re;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (G, ce) {
            switch (G) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                G = 3;
            }
            var re = b;
            b = G;
            try {
              return ce();
            } finally {
              b = re;
            }
          }),
          (n.unstable_scheduleCallback = function (G, ce, re) {
            var _ = n.unstable_now();
            switch (
              (typeof re == "object" && re !== null
                ? ((re = re.delay),
                  (re = typeof re == "number" && 0 < re ? _ + re : _))
                : (re = _),
              G)
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
              (j = re + j),
              (G = {
                id: x++,
                callback: ce,
                priorityLevel: G,
                startTime: re,
                expirationTime: j,
                sortIndex: -1,
              }),
              re > _
                ? ((G.sortIndex = re),
                  s(E, G),
                  o(S) === null &&
                    G === o(E) &&
                    (v ? (W(xe), (xe = -1)) : (v = !0), Ce(Z, re - _)))
                : ((G.sortIndex = j), s(S, G), T || Y || ((T = !0), Me(L))),
              G
            );
          }),
          (n.unstable_shouldYield = Le),
          (n.unstable_wrapCallback = function (G) {
            var ce = b;
            return function () {
              var re = b;
              b = ce;
              try {
                return G.apply(this, arguments);
              } finally {
                b = re;
              }
            };
          });
      })(xa)),
    xa
  );
}
var Jf;
function qm() {
  return Jf || ((Jf = 1), (wa.exports = Qm())), wa.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zf;
function Ym() {
  if (Zf) return Nt;
  Zf = 1;
  var n = Wa(),
    s = qm();
  function o(e) {
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
  var a = new Set(),
    c = {};
  function f(e, t) {
    d(e, t), d(e + "Capture", t);
  }
  function d(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var h = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    S = Object.prototype.hasOwnProperty,
    E =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    x = {},
    O = {};
  function b(e) {
    return S.call(O, e)
      ? !0
      : S.call(x, e)
      ? !1
      : E.test(e)
      ? (O[e] = !0)
      : ((x[e] = !0), !1);
  }
  function Y(e, t, r, i) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return i
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function T(e, t, r, i) {
    if (t === null || typeof t > "u" || Y(e, t, r, i)) return !0;
    if (i) return !1;
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
  function v(e, t, r, i, l, u, p) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = i),
      (this.attributeNamespace = l),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = p);
  }
  var C = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      C[e] = new v(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      C[t] = new v(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      C[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      C[e] = new v(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        C[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      C[e] = new v(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      C[e] = new v(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      C[e] = new v(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      C[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var W = /[\-:]([a-z])/g;
  function z(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(W, z);
      C[t] = new v(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(W, z);
        C[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(W, z);
      C[t] = new v(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      C[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (C.xlinkHref = new v(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      C[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function D(e, t, r, i) {
    var l = C.hasOwnProperty(t) ? C[t] : null;
    (l !== null
      ? l.type !== 0
      : i ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (T(t, r, l, i) && (r = null),
      i || l === null
        ? b(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : l.mustUseProperty
        ? (e[l.propertyName] = r === null ? (l.type === 3 ? !1 : "") : r)
        : ((t = l.attributeName),
          (i = l.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (r = l === 3 || (l === 4 && r === !0) ? "" : "" + r),
              i ? e.setAttributeNS(i, t, r) : e.setAttribute(t, r))));
  }
  var Z = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    L = Symbol.for("react.element"),
    he = Symbol.for("react.portal"),
    ge = Symbol.for("react.fragment"),
    xe = Symbol.for("react.strict_mode"),
    te = Symbol.for("react.profiler"),
    Ae = Symbol.for("react.provider"),
    Le = Symbol.for("react.context"),
    ie = Symbol.for("react.forward_ref"),
    ae = Symbol.for("react.suspense"),
    _e = Symbol.for("react.suspense_list"),
    Pe = Symbol.for("react.memo"),
    Me = Symbol.for("react.lazy"),
    Ce = Symbol.for("react.offscreen"),
    G = Symbol.iterator;
  function ce(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (G && e[G]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var re = Object.assign,
    _;
  function j(e) {
    if (_ === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        _ = (t && t[1]) || "";
      }
    return (
      `
` +
      _ +
      e
    );
  }
  var U = !1;
  function Q(e, t) {
    if (!e || U) return "";
    U = !0;
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
          } catch (F) {
            var i = F;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (F) {
            i = F;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (F) {
          i = F;
        }
        e();
      }
    } catch (F) {
      if (F && i && typeof F.stack == "string") {
        for (
          var l = F.stack.split(`
`),
            u = i.stack.split(`
`),
            p = l.length - 1,
            m = u.length - 1;
          1 <= p && 0 <= m && l[p] !== u[m];

        )
          m--;
        for (; 1 <= p && 0 <= m; p--, m--)
          if (l[p] !== u[m]) {
            if (p !== 1 || m !== 1)
              do
                if ((p--, m--, 0 > m || l[p] !== u[m])) {
                  var w =
                    `
` + l[p].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      w.includes("<anonymous>") &&
                      (w = w.replace("<anonymous>", e.displayName)),
                    w
                  );
                }
              while (1 <= p && 0 <= m);
            break;
          }
      }
    } finally {
      (U = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? j(e) : "";
  }
  function ne(e) {
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
        return (e = Q(e.type, !1)), e;
      case 11:
        return (e = Q(e.type.render, !1)), e;
      case 1:
        return (e = Q(e.type, !0)), e;
      default:
        return "";
    }
  }
  function R(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ge:
        return "Fragment";
      case he:
        return "Portal";
      case te:
        return "Profiler";
      case xe:
        return "StrictMode";
      case ae:
        return "Suspense";
      case _e:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Le:
          return (e.displayName || "Context") + ".Consumer";
        case Ae:
          return (e._context.displayName || "Context") + ".Provider";
        case ie:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Pe:
          return (
            (t = e.displayName || null), t !== null ? t : R(e.type) || "Memo"
          );
        case Me:
          (t = e._payload), (e = e._init);
          try {
            return R(e(t));
          } catch {}
      }
    return null;
  }
  function de(e) {
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
        return R(t);
      case 8:
        return t === xe ? "StrictMode" : "Mode";
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
  function V(e) {
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
  function Se(e) {
    var t = we(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      i = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var l = r.get,
        u = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (p) {
            (i = "" + p), u.call(this, p);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (p) {
            i = "" + p;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Fe(e) {
    e._valueTracker || (e._valueTracker = Se(e));
  }
  function ke(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      i = "";
    return (
      e && (i = we(e) ? (e.checked ? "true" : "false") : e.value),
      (e = i),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function Ye(e) {
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
  function et(e, t) {
    var r = t.checked;
    return re({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function je(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      i = t.checked != null ? t.checked : t.defaultChecked;
    (r = V(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: i,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function tt(e, t) {
    (t = t.checked), t != null && D(e, "checked", t, !1);
  }
  function be(e, t) {
    tt(e, t);
    var r = V(t.value),
      i = t.type;
    if (r != null)
      i === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Vt(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && Vt(e, t.type, V(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function rt(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (
        !(
          (i !== "submit" && i !== "reset") ||
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
  function Vt(e, t, r) {
    (t !== "number" || Ye(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var g = Array.isArray;
  function A(e, t, r, i) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < r.length; l++) t["$" + r[l]] = !0;
      for (r = 0; r < e.length; r++)
        (l = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== l && (e[r].selected = l),
          l && i && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + V(r), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === r) {
          (e[l].selected = !0), i && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function M(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return re({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function ee(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(o(92));
        if (g(r)) {
          if (1 < r.length) throw Error(o(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: V(r) };
  }
  function $(e, t) {
    var r = V(t.value),
      i = V(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      i != null && (e.defaultValue = "" + i);
  }
  function B(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function pe(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ze(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? pe(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Oe,
    kt = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, i, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, i, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Oe = Oe || document.createElement("div"),
            Oe.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Oe.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function sr(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Tt = {
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
    Os = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Tt).forEach(function (e) {
    Os.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tt[t] = Tt[e]);
    });
  });
  function cn(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Tt.hasOwnProperty(e) && Tt[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function fn(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var i = r.indexOf("--") === 0,
          l = cn(r, t[r], i);
        r === "float" && (r = "cssFloat"), i ? e.setProperty(r, l) : (e[r] = l);
      }
  }
  var As = re(
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
  function dn(e, t) {
    if (t) {
      if (As[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function Yn(e, t) {
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
  var pn = null;
  function js(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ns = null,
    hn = null,
    mn = null;
  function uu(e) {
    if ((e = yi(e))) {
      if (typeof Ns != "function") throw Error(o(280));
      var t = e.stateNode;
      t && ((t = go(t)), Ns(e.stateNode, e.type, t));
    }
  }
  function cu(e) {
    hn ? (mn ? mn.push(e) : (mn = [e])) : (hn = e);
  }
  function fu() {
    if (hn) {
      var e = hn,
        t = mn;
      if (((mn = hn = null), uu(e), t)) for (e = 0; e < t.length; e++) uu(t[e]);
    }
  }
  function du(e, t) {
    return e(t);
  }
  function pu() {}
  var zs = !1;
  function hu(e, t, r) {
    if (zs) return e(t, r);
    zs = !0;
    try {
      return du(e, t, r);
    } finally {
      (zs = !1), (hn !== null || mn !== null) && (pu(), fu());
    }
  }
  function Gn(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var i = go(r);
    if (i === null) return null;
    r = i[t];
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
        (i = !i.disabled) ||
          ((e = e.type),
          (i = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !i);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(o(231, t, typeof r));
    return r;
  }
  var Ls = !1;
  if (h)
    try {
      var Xn = {};
      Object.defineProperty(Xn, "passive", {
        get: function () {
          Ls = !0;
        },
      }),
        window.addEventListener("test", Xn, Xn),
        window.removeEventListener("test", Xn, Xn);
    } catch {
      Ls = !1;
    }
  function Gp(e, t, r, i, l, u, p, m, w) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, F);
    } catch (K) {
      this.onError(K);
    }
  }
  var Jn = !1,
    Qi = null,
    qi = !1,
    Fs = null,
    Xp = {
      onError: function (e) {
        (Jn = !0), (Qi = e);
      },
    };
  function Jp(e, t, r, i, l, u, p, m, w) {
    (Jn = !1), (Qi = null), Gp.apply(Xp, arguments);
  }
  function Zp(e, t, r, i, l, u, p, m, w) {
    if ((Jp.apply(this, arguments), Jn)) {
      if (Jn) {
        var F = Qi;
        (Jn = !1), (Qi = null);
      } else throw Error(o(198));
      qi || ((qi = !0), (Fs = F));
    }
  }
  function Wr(e) {
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
  function mu(e) {
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
  function gu(e) {
    if (Wr(e) !== e) throw Error(o(188));
  }
  function eh(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Wr(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var r = e, i = t; ; ) {
      var l = r.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((i = l.return), i !== null)) {
          r = i;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === r) return gu(l), e;
          if (u === i) return gu(l), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (r.return !== i.return) (r = l), (i = u);
      else {
        for (var p = !1, m = l.child; m; ) {
          if (m === r) {
            (p = !0), (r = l), (i = u);
            break;
          }
          if (m === i) {
            (p = !0), (i = l), (r = u);
            break;
          }
          m = m.sibling;
        }
        if (!p) {
          for (m = u.child; m; ) {
            if (m === r) {
              (p = !0), (r = u), (i = l);
              break;
            }
            if (m === i) {
              (p = !0), (i = u), (r = l);
              break;
            }
            m = m.sibling;
          }
          if (!p) throw Error(o(189));
        }
      }
      if (r.alternate !== i) throw Error(o(190));
    }
    if (r.tag !== 3) throw Error(o(188));
    return r.stateNode.current === r ? e : t;
  }
  function yu(e) {
    return (e = eh(e)), e !== null ? vu(e) : null;
  }
  function vu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = vu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var wu = s.unstable_scheduleCallback,
    xu = s.unstable_cancelCallback,
    th = s.unstable_shouldYield,
    rh = s.unstable_requestPaint,
    nt = s.unstable_now,
    nh = s.unstable_getCurrentPriorityLevel,
    bs = s.unstable_ImmediatePriority,
    Su = s.unstable_UserBlockingPriority,
    Yi = s.unstable_NormalPriority,
    ih = s.unstable_LowPriority,
    ku = s.unstable_IdlePriority,
    Gi = null,
    lr = null;
  function oh(e) {
    if (lr && typeof lr.onCommitFiberRoot == "function")
      try {
        lr.onCommitFiberRoot(Gi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Yt = Math.clz32 ? Math.clz32 : ah,
    sh = Math.log,
    lh = Math.LN2;
  function ah(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((sh(e) / lh) | 0)) | 0;
  }
  var Xi = 64,
    Ji = 4194304;
  function Zn(e) {
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
  function Zi(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var i = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      p = r & 268435455;
    if (p !== 0) {
      var m = p & ~l;
      m !== 0 ? (i = Zn(m)) : ((u &= p), u !== 0 && (i = Zn(u)));
    } else (p = r & ~l), p !== 0 ? (i = Zn(p)) : u !== 0 && (i = Zn(u));
    if (i === 0) return 0;
    if (
      t !== 0 &&
      t !== i &&
      (t & l) === 0 &&
      ((l = i & -i), (u = t & -t), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return t;
    if (((i & 4) !== 0 && (i |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= i; 0 < t; )
        (r = 31 - Yt(t)), (l = 1 << r), (i |= e[r]), (t &= ~l);
    return i;
  }
  function uh(e, t) {
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
  function ch(e, t) {
    for (
      var r = e.suspendedLanes,
        i = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var p = 31 - Yt(u),
        m = 1 << p,
        w = l[p];
      w === -1
        ? ((m & r) === 0 || (m & i) !== 0) && (l[p] = uh(m, t))
        : w <= t && (e.expiredLanes |= m),
        (u &= ~m);
    }
  }
  function Is(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Eu() {
    var e = Xi;
    return (Xi <<= 1), (Xi & 4194240) === 0 && (Xi = 64), e;
  }
  function Ms(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function ei(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Yt(t)),
      (e[t] = r);
  }
  function fh(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var l = 31 - Yt(r),
        u = 1 << l;
      (t[l] = 0), (i[l] = -1), (e[l] = -1), (r &= ~u);
    }
  }
  function $s(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var i = 31 - Yt(r),
        l = 1 << i;
      (l & t) | (e[i] & t) && (e[i] |= t), (r &= ~l);
    }
  }
  var Be = 0;
  function Cu(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var _u,
    Ds,
    Tu,
    Ru,
    Pu,
    Vs = !1,
    eo = [],
    Cr = null,
    _r = null,
    Tr = null,
    ti = new Map(),
    ri = new Map(),
    Rr = [],
    dh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Ou(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Cr = null;
        break;
      case "dragenter":
      case "dragleave":
        _r = null;
        break;
      case "mouseover":
      case "mouseout":
        Tr = null;
        break;
      case "pointerover":
      case "pointerout":
        ti.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ri.delete(t.pointerId);
    }
  }
  function ni(e, t, r, i, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: i,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = yi(t)), t !== null && Ds(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function ph(e, t, r, i, l) {
    switch (t) {
      case "focusin":
        return (Cr = ni(Cr, e, t, r, i, l)), !0;
      case "dragenter":
        return (_r = ni(_r, e, t, r, i, l)), !0;
      case "mouseover":
        return (Tr = ni(Tr, e, t, r, i, l)), !0;
      case "pointerover":
        var u = l.pointerId;
        return ti.set(u, ni(ti.get(u) || null, e, t, r, i, l)), !0;
      case "gotpointercapture":
        return (
          (u = l.pointerId), ri.set(u, ni(ri.get(u) || null, e, t, r, i, l)), !0
        );
    }
    return !1;
  }
  function Au(e) {
    var t = Kr(e.target);
    if (t !== null) {
      var r = Wr(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = mu(r)), t !== null)) {
            (e.blockedOn = t),
              Pu(e.priority, function () {
                Tu(r);
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
  function to(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Us(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var i = new r.constructor(r.type, r);
        (pn = i), r.target.dispatchEvent(i), (pn = null);
      } else return (t = yi(r)), t !== null && Ds(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function ju(e, t, r) {
    to(e) && r.delete(t);
  }
  function hh() {
    (Vs = !1),
      Cr !== null && to(Cr) && (Cr = null),
      _r !== null && to(_r) && (_r = null),
      Tr !== null && to(Tr) && (Tr = null),
      ti.forEach(ju),
      ri.forEach(ju);
  }
  function ii(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Vs ||
        ((Vs = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, hh)));
  }
  function oi(e) {
    function t(l) {
      return ii(l, e);
    }
    if (0 < eo.length) {
      ii(eo[0], e);
      for (var r = 1; r < eo.length; r++) {
        var i = eo[r];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (
      Cr !== null && ii(Cr, e),
        _r !== null && ii(_r, e),
        Tr !== null && ii(Tr, e),
        ti.forEach(t),
        ri.forEach(t),
        r = 0;
      r < Rr.length;
      r++
    )
      (i = Rr[r]), i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < Rr.length && ((r = Rr[0]), r.blockedOn === null); )
      Au(r), r.blockedOn === null && Rr.shift();
  }
  var gn = Z.ReactCurrentBatchConfig,
    ro = !0;
  function mh(e, t, r, i) {
    var l = Be,
      u = gn.transition;
    gn.transition = null;
    try {
      (Be = 1), Bs(e, t, r, i);
    } finally {
      (Be = l), (gn.transition = u);
    }
  }
  function gh(e, t, r, i) {
    var l = Be,
      u = gn.transition;
    gn.transition = null;
    try {
      (Be = 4), Bs(e, t, r, i);
    } finally {
      (Be = l), (gn.transition = u);
    }
  }
  function Bs(e, t, r, i) {
    if (ro) {
      var l = Us(e, t, r, i);
      if (l === null) sl(e, t, i, no, r), Ou(e, i);
      else if (ph(l, e, t, r, i)) i.stopPropagation();
      else if ((Ou(e, i), t & 4 && -1 < dh.indexOf(e))) {
        for (; l !== null; ) {
          var u = yi(l);
          if (
            (u !== null && _u(u),
            (u = Us(e, t, r, i)),
            u === null && sl(e, t, i, no, r),
            u === l)
          )
            break;
          l = u;
        }
        l !== null && i.stopPropagation();
      } else sl(e, t, i, null, r);
    }
  }
  var no = null;
  function Us(e, t, r, i) {
    if (((no = null), (e = js(i)), (e = Kr(e)), e !== null))
      if (((t = Wr(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = mu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (no = e), null;
  }
  function Nu(e) {
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
        switch (nh()) {
          case bs:
            return 1;
          case Su:
            return 4;
          case Yi:
          case ih:
            return 16;
          case ku:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Pr = null,
    Hs = null,
    io = null;
  function zu() {
    if (io) return io;
    var e,
      t = Hs,
      r = t.length,
      i,
      l = "value" in Pr ? Pr.value : Pr.textContent,
      u = l.length;
    for (e = 0; e < r && t[e] === l[e]; e++);
    var p = r - e;
    for (i = 1; i <= p && t[r - i] === l[u - i]; i++);
    return (io = l.slice(e, 1 < i ? 1 - i : void 0));
  }
  function oo(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function so() {
    return !0;
  }
  function Lu() {
    return !1;
  }
  function bt(e) {
    function t(r, i, l, u, p) {
      (this._reactName = r),
        (this._targetInst = l),
        (this.type = i),
        (this.nativeEvent = u),
        (this.target = p),
        (this.currentTarget = null);
      for (var m in e)
        e.hasOwnProperty(m) && ((r = e[m]), (this[m] = r ? r(u) : u[m]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? so
          : Lu),
        (this.isPropagationStopped = Lu),
        this
      );
    }
    return (
      re(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = so));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = so));
        },
        persist: function () {},
        isPersistent: so,
      }),
      t
    );
  }
  var yn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ws = bt(yn),
    si = re({}, yn, { view: 0, detail: 0 }),
    yh = bt(si),
    Ks,
    Qs,
    li,
    lo = re({}, si, {
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
      getModifierState: Ys,
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
          : (e !== li &&
              (li && e.type === "mousemove"
                ? ((Ks = e.screenX - li.screenX), (Qs = e.screenY - li.screenY))
                : (Qs = Ks = 0),
              (li = e)),
            Ks);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Qs;
      },
    }),
    Fu = bt(lo),
    vh = re({}, lo, { dataTransfer: 0 }),
    wh = bt(vh),
    xh = re({}, si, { relatedTarget: 0 }),
    qs = bt(xh),
    Sh = re({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kh = bt(Sh),
    Eh = re({}, yn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ch = bt(Eh),
    _h = re({}, yn, { data: 0 }),
    bu = bt(_h),
    Th = {
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
    Rh = {
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
    Ph = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Oh(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Ph[e])
      ? !!t[e]
      : !1;
  }
  function Ys() {
    return Oh;
  }
  var Ah = re({}, si, {
      key: function (e) {
        if (e.key) {
          var t = Th[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = oo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Rh[e.keyCode] || "Unidentified"
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
      getModifierState: Ys,
      charCode: function (e) {
        return e.type === "keypress" ? oo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? oo(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    jh = bt(Ah),
    Nh = re({}, lo, {
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
    Iu = bt(Nh),
    zh = re({}, si, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ys,
    }),
    Lh = bt(zh),
    Fh = re({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    bh = bt(Fh),
    Ih = re({}, lo, {
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
    Mh = bt(Ih),
    $h = [9, 13, 27, 32],
    Gs = h && "CompositionEvent" in window,
    ai = null;
  h && "documentMode" in document && (ai = document.documentMode);
  var Dh = h && "TextEvent" in window && !ai,
    Mu = h && (!Gs || (ai && 8 < ai && 11 >= ai)),
    $u = " ",
    Du = !1;
  function Vu(e, t) {
    switch (e) {
      case "keyup":
        return $h.indexOf(t.keyCode) !== -1;
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
  function Bu(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var vn = !1;
  function Vh(e, t) {
    switch (e) {
      case "compositionend":
        return Bu(t);
      case "keypress":
        return t.which !== 32 ? null : ((Du = !0), $u);
      case "textInput":
        return (e = t.data), e === $u && Du ? null : e;
      default:
        return null;
    }
  }
  function Bh(e, t) {
    if (vn)
      return e === "compositionend" || (!Gs && Vu(e, t))
        ? ((e = zu()), (io = Hs = Pr = null), (vn = !1), e)
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
        return Mu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Uh = {
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
  function Uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Uh[e.type] : t === "textarea";
  }
  function Hu(e, t, r, i) {
    cu(i),
      (t = po(t, "onChange")),
      0 < t.length &&
        ((r = new Ws("onChange", "change", null, r, i)),
        e.push({ event: r, listeners: t }));
  }
  var ui = null,
    ci = null;
  function Hh(e) {
    ac(e, 0);
  }
  function ao(e) {
    var t = En(e);
    if (ke(t)) return e;
  }
  function Wh(e, t) {
    if (e === "change") return t;
  }
  var Wu = !1;
  if (h) {
    var Xs;
    if (h) {
      var Js = "oninput" in document;
      if (!Js) {
        var Ku = document.createElement("div");
        Ku.setAttribute("oninput", "return;"),
          (Js = typeof Ku.oninput == "function");
      }
      Xs = Js;
    } else Xs = !1;
    Wu = Xs && (!document.documentMode || 9 < document.documentMode);
  }
  function Qu() {
    ui && (ui.detachEvent("onpropertychange", qu), (ci = ui = null));
  }
  function qu(e) {
    if (e.propertyName === "value" && ao(ci)) {
      var t = [];
      Hu(t, ci, e, js(e)), hu(Hh, t);
    }
  }
  function Kh(e, t, r) {
    e === "focusin"
      ? (Qu(), (ui = t), (ci = r), ui.attachEvent("onpropertychange", qu))
      : e === "focusout" && Qu();
  }
  function Qh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ao(ci);
  }
  function qh(e, t) {
    if (e === "click") return ao(t);
  }
  function Yh(e, t) {
    if (e === "input" || e === "change") return ao(t);
  }
  function Gh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Gt = typeof Object.is == "function" ? Object.is : Gh;
  function fi(e, t) {
    if (Gt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      i = Object.keys(t);
    if (r.length !== i.length) return !1;
    for (i = 0; i < r.length; i++) {
      var l = r[i];
      if (!S.call(t, l) || !Gt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Yu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Gu(e, t) {
    var r = Yu(e);
    e = 0;
    for (var i; r; ) {
      if (r.nodeType === 3) {
        if (((i = e + r.textContent.length), e <= t && i >= t))
          return { node: r, offset: t - e };
        e = i;
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
      r = Yu(r);
    }
  }
  function Xu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Xu(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Ju() {
    for (var e = window, t = Ye(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Ye(e.document);
    }
    return t;
  }
  function Zs(e) {
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
  function Xh(e) {
    var t = Ju(),
      r = e.focusedElem,
      i = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      Xu(r.ownerDocument.documentElement, r)
    ) {
      if (i !== null && Zs(r)) {
        if (
          ((t = i.start),
          (e = i.end),
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
          var l = r.textContent.length,
            u = Math.min(i.start, l);
          (i = i.end === void 0 ? u : Math.min(i.end, l)),
            !e.extend && u > i && ((l = i), (i = u), (u = l)),
            (l = Gu(r, u));
          var p = Gu(r, i);
          l &&
            p &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== p.node ||
              e.focusOffset !== p.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            u > i
              ? (e.addRange(t), e.extend(p.node, p.offset))
              : (t.setEnd(p.node, p.offset), e.addRange(t)));
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
  var Jh = h && "documentMode" in document && 11 >= document.documentMode,
    wn = null,
    el = null,
    di = null,
    tl = !1;
  function Zu(e, t, r) {
    var i =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    tl ||
      wn == null ||
      wn !== Ye(i) ||
      ((i = wn),
      "selectionStart" in i && Zs(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (di && fi(di, i)) ||
        ((di = i),
        (i = po(el, "onSelect")),
        0 < i.length &&
          ((t = new Ws("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: i }),
          (t.target = wn))));
  }
  function uo(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var xn = {
      animationend: uo("Animation", "AnimationEnd"),
      animationiteration: uo("Animation", "AnimationIteration"),
      animationstart: uo("Animation", "AnimationStart"),
      transitionend: uo("Transition", "TransitionEnd"),
    },
    rl = {},
    ec = {};
  h &&
    ((ec = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete xn.animationend.animation,
      delete xn.animationiteration.animation,
      delete xn.animationstart.animation),
    "TransitionEvent" in window || delete xn.transitionend.transition);
  function co(e) {
    if (rl[e]) return rl[e];
    if (!xn[e]) return e;
    var t = xn[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in ec) return (rl[e] = t[r]);
    return e;
  }
  var tc = co("animationend"),
    rc = co("animationiteration"),
    nc = co("animationstart"),
    ic = co("transitionend"),
    oc = new Map(),
    sc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Or(e, t) {
    oc.set(e, t), f(t, [e]);
  }
  for (var nl = 0; nl < sc.length; nl++) {
    var il = sc[nl],
      Zh = il.toLowerCase(),
      em = il[0].toUpperCase() + il.slice(1);
    Or(Zh, "on" + em);
  }
  Or(tc, "onAnimationEnd"),
    Or(rc, "onAnimationIteration"),
    Or(nc, "onAnimationStart"),
    Or("dblclick", "onDoubleClick"),
    Or("focusin", "onFocus"),
    Or("focusout", "onBlur"),
    Or(ic, "onTransitionEnd"),
    d("onMouseEnter", ["mouseout", "mouseover"]),
    d("onMouseLeave", ["mouseout", "mouseover"]),
    d("onPointerEnter", ["pointerout", "pointerover"]),
    d("onPointerLeave", ["pointerout", "pointerover"]),
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
  var pi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    tm = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(pi)
    );
  function lc(e, t, r) {
    var i = e.type || "unknown-event";
    (e.currentTarget = r), Zp(i, t, void 0, e), (e.currentTarget = null);
  }
  function ac(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var i = e[r],
        l = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var p = i.length - 1; 0 <= p; p--) {
            var m = i[p],
              w = m.instance,
              F = m.currentTarget;
            if (((m = m.listener), w !== u && l.isPropagationStopped()))
              break e;
            lc(l, m, F), (u = w);
          }
        else
          for (p = 0; p < i.length; p++) {
            if (
              ((m = i[p]),
              (w = m.instance),
              (F = m.currentTarget),
              (m = m.listener),
              w !== u && l.isPropagationStopped())
            )
              break e;
            lc(l, m, F), (u = w);
          }
      }
    }
    if (qi) throw ((e = Fs), (qi = !1), (Fs = null), e);
  }
  function Ke(e, t) {
    var r = t[dl];
    r === void 0 && (r = t[dl] = new Set());
    var i = e + "__bubble";
    r.has(i) || (uc(t, e, 2, !1), r.add(i));
  }
  function ol(e, t, r) {
    var i = 0;
    t && (i |= 4), uc(r, e, i, t);
  }
  var fo = "_reactListening" + Math.random().toString(36).slice(2);
  function hi(e) {
    if (!e[fo]) {
      (e[fo] = !0),
        a.forEach(function (r) {
          r !== "selectionchange" && (tm.has(r) || ol(r, !1, e), ol(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[fo] || ((t[fo] = !0), ol("selectionchange", !1, t));
    }
  }
  function uc(e, t, r, i) {
    switch (Nu(t)) {
      case 1:
        var l = mh;
        break;
      case 4:
        l = gh;
        break;
      default:
        l = Bs;
    }
    (r = l.bind(null, t, r, e)),
      (l = void 0),
      !Ls ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      i
        ? l !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: l })
          : e.addEventListener(t, r, !0)
        : l !== void 0
        ? e.addEventListener(t, r, { passive: l })
        : e.addEventListener(t, r, !1);
  }
  function sl(e, t, r, i, l) {
    var u = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return;
        var p = i.tag;
        if (p === 3 || p === 4) {
          var m = i.stateNode.containerInfo;
          if (m === l || (m.nodeType === 8 && m.parentNode === l)) break;
          if (p === 4)
            for (p = i.return; p !== null; ) {
              var w = p.tag;
              if (
                (w === 3 || w === 4) &&
                ((w = p.stateNode.containerInfo),
                w === l || (w.nodeType === 8 && w.parentNode === l))
              )
                return;
              p = p.return;
            }
          for (; m !== null; ) {
            if (((p = Kr(m)), p === null)) return;
            if (((w = p.tag), w === 5 || w === 6)) {
              i = u = p;
              continue e;
            }
            m = m.parentNode;
          }
        }
        i = i.return;
      }
    hu(function () {
      var F = u,
        K = js(r),
        q = [];
      e: {
        var H = oc.get(e);
        if (H !== void 0) {
          var se = Ws,
            ue = e;
          switch (e) {
            case "keypress":
              if (oo(r) === 0) break e;
            case "keydown":
            case "keyup":
              se = jh;
              break;
            case "focusin":
              (ue = "focus"), (se = qs);
              break;
            case "focusout":
              (ue = "blur"), (se = qs);
              break;
            case "beforeblur":
            case "afterblur":
              se = qs;
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
              se = Fu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              se = wh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              se = Lh;
              break;
            case tc:
            case rc:
            case nc:
              se = kh;
              break;
            case ic:
              se = bh;
              break;
            case "scroll":
              se = yh;
              break;
            case "wheel":
              se = Mh;
              break;
            case "copy":
            case "cut":
            case "paste":
              se = Ch;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              se = Iu;
          }
          var fe = (t & 4) !== 0,
            it = !fe && e === "scroll",
            P = fe ? (H !== null ? H + "Capture" : null) : H;
          fe = [];
          for (var k = F, N; k !== null; ) {
            N = k;
            var X = N.stateNode;
            if (
              (N.tag === 5 &&
                X !== null &&
                ((N = X),
                P !== null &&
                  ((X = Gn(k, P)), X != null && fe.push(mi(k, X, N)))),
              it)
            )
              break;
            k = k.return;
          }
          0 < fe.length &&
            ((H = new se(H, ue, null, r, K)),
            q.push({ event: H, listeners: fe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((H = e === "mouseover" || e === "pointerover"),
            (se = e === "mouseout" || e === "pointerout"),
            H &&
              r !== pn &&
              (ue = r.relatedTarget || r.fromElement) &&
              (Kr(ue) || ue[mr]))
          )
            break e;
          if (
            (se || H) &&
            ((H =
              K.window === K
                ? K
                : (H = K.ownerDocument)
                ? H.defaultView || H.parentWindow
                : window),
            se
              ? ((ue = r.relatedTarget || r.toElement),
                (se = F),
                (ue = ue ? Kr(ue) : null),
                ue !== null &&
                  ((it = Wr(ue)),
                  ue !== it || (ue.tag !== 5 && ue.tag !== 6)) &&
                  (ue = null))
              : ((se = null), (ue = F)),
            se !== ue)
          ) {
            if (
              ((fe = Fu),
              (X = "onMouseLeave"),
              (P = "onMouseEnter"),
              (k = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((fe = Iu),
                (X = "onPointerLeave"),
                (P = "onPointerEnter"),
                (k = "pointer")),
              (it = se == null ? H : En(se)),
              (N = ue == null ? H : En(ue)),
              (H = new fe(X, k + "leave", se, r, K)),
              (H.target = it),
              (H.relatedTarget = N),
              (X = null),
              Kr(K) === F &&
                ((fe = new fe(P, k + "enter", ue, r, K)),
                (fe.target = N),
                (fe.relatedTarget = it),
                (X = fe)),
              (it = X),
              se && ue)
            )
              t: {
                for (fe = se, P = ue, k = 0, N = fe; N; N = Sn(N)) k++;
                for (N = 0, X = P; X; X = Sn(X)) N++;
                for (; 0 < k - N; ) (fe = Sn(fe)), k--;
                for (; 0 < N - k; ) (P = Sn(P)), N--;
                for (; k--; ) {
                  if (fe === P || (P !== null && fe === P.alternate)) break t;
                  (fe = Sn(fe)), (P = Sn(P));
                }
                fe = null;
              }
            else fe = null;
            se !== null && cc(q, H, se, fe, !1),
              ue !== null && it !== null && cc(q, it, ue, fe, !0);
          }
        }
        e: {
          if (
            ((H = F ? En(F) : window),
            (se = H.nodeName && H.nodeName.toLowerCase()),
            se === "select" || (se === "input" && H.type === "file"))
          )
            var me = Wh;
          else if (Uu(H))
            if (Wu) me = Yh;
            else {
              me = Qh;
              var ye = Kh;
            }
          else
            (se = H.nodeName) &&
              se.toLowerCase() === "input" &&
              (H.type === "checkbox" || H.type === "radio") &&
              (me = qh);
          if (me && (me = me(e, F))) {
            Hu(q, me, r, K);
            break e;
          }
          ye && ye(e, H, F),
            e === "focusout" &&
              (ye = H._wrapperState) &&
              ye.controlled &&
              H.type === "number" &&
              Vt(H, "number", H.value);
        }
        switch (((ye = F ? En(F) : window), e)) {
          case "focusin":
            (Uu(ye) || ye.contentEditable === "true") &&
              ((wn = ye), (el = F), (di = null));
            break;
          case "focusout":
            di = el = wn = null;
            break;
          case "mousedown":
            tl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (tl = !1), Zu(q, r, K);
            break;
          case "selectionchange":
            if (Jh) break;
          case "keydown":
          case "keyup":
            Zu(q, r, K);
        }
        var ve;
        if (Gs)
          e: {
            switch (e) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
        else
          vn
            ? Vu(e, r) && (Ee = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (Ee = "onCompositionStart");
        Ee &&
          (Mu &&
            r.locale !== "ko" &&
            (vn || Ee !== "onCompositionStart"
              ? Ee === "onCompositionEnd" && vn && (ve = zu())
              : ((Pr = K),
                (Hs = "value" in Pr ? Pr.value : Pr.textContent),
                (vn = !0))),
          (ye = po(F, Ee)),
          0 < ye.length &&
            ((Ee = new bu(Ee, e, null, r, K)),
            q.push({ event: Ee, listeners: ye }),
            ve
              ? (Ee.data = ve)
              : ((ve = Bu(r)), ve !== null && (Ee.data = ve)))),
          (ve = Dh ? Vh(e, r) : Bh(e, r)) &&
            ((F = po(F, "onBeforeInput")),
            0 < F.length &&
              ((K = new bu("onBeforeInput", "beforeinput", null, r, K)),
              q.push({ event: K, listeners: F }),
              (K.data = ve)));
      }
      ac(q, t);
    });
  }
  function mi(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function po(e, t) {
    for (var r = t + "Capture", i = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Gn(e, r)),
        u != null && i.unshift(mi(e, u, l)),
        (u = Gn(e, t)),
        u != null && i.push(mi(e, u, l))),
        (e = e.return);
    }
    return i;
  }
  function Sn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function cc(e, t, r, i, l) {
    for (var u = t._reactName, p = []; r !== null && r !== i; ) {
      var m = r,
        w = m.alternate,
        F = m.stateNode;
      if (w !== null && w === i) break;
      m.tag === 5 &&
        F !== null &&
        ((m = F),
        l
          ? ((w = Gn(r, u)), w != null && p.unshift(mi(r, w, m)))
          : l || ((w = Gn(r, u)), w != null && p.push(mi(r, w, m)))),
        (r = r.return);
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var rm = /\r\n?/g,
    nm = /\u0000|\uFFFD/g;
  function fc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        rm,
        `
`
      )
      .replace(nm, "");
  }
  function ho(e, t, r) {
    if (((t = fc(t)), fc(e) !== t && r)) throw Error(o(425));
  }
  function mo() {}
  var ll = null,
    al = null;
  function ul(e, t) {
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
  var cl = typeof setTimeout == "function" ? setTimeout : void 0,
    im = typeof clearTimeout == "function" ? clearTimeout : void 0,
    dc = typeof Promise == "function" ? Promise : void 0,
    om =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof dc < "u"
        ? function (e) {
            return dc.resolve(null).then(e).catch(sm);
          }
        : cl;
  function sm(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function fl(e, t) {
    var r = t,
      i = 0;
    do {
      var l = r.nextSibling;
      if ((e.removeChild(r), l && l.nodeType === 8))
        if (((r = l.data), r === "/$")) {
          if (i === 0) {
            e.removeChild(l), oi(t);
            return;
          }
          i--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || i++;
      r = l;
    } while (r);
    oi(t);
  }
  function Ar(e) {
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
  function pc(e) {
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
  var kn = Math.random().toString(36).slice(2),
    ar = "__reactFiber$" + kn,
    gi = "__reactProps$" + kn,
    mr = "__reactContainer$" + kn,
    dl = "__reactEvents$" + kn,
    lm = "__reactListeners$" + kn,
    am = "__reactHandles$" + kn;
  function Kr(e) {
    var t = e[ar];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[mr] || r[ar])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = pc(e); e !== null; ) {
            if ((r = e[ar])) return r;
            e = pc(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function yi(e) {
    return (
      (e = e[ar] || e[mr]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function En(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function go(e) {
    return e[gi] || null;
  }
  var pl = [],
    Cn = -1;
  function jr(e) {
    return { current: e };
  }
  function Qe(e) {
    0 > Cn || ((e.current = pl[Cn]), (pl[Cn] = null), Cn--);
  }
  function He(e, t) {
    Cn++, (pl[Cn] = e.current), (e.current = t);
  }
  var Nr = {},
    yt = jr(Nr),
    Rt = jr(!1),
    Qr = Nr;
  function _n(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Nr;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
      return i.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in r) l[u] = t[u];
    return (
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Pt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function yo() {
    Qe(Rt), Qe(yt);
  }
  function hc(e, t, r) {
    if (yt.current !== Nr) throw Error(o(168));
    He(yt, t), He(Rt, r);
  }
  function mc(e, t, r) {
    var i = e.stateNode;
    if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
      return r;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(o(108, de(e) || "Unknown", l));
    return re({}, r, i);
  }
  function vo(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Nr),
      (Qr = yt.current),
      He(yt, e),
      He(Rt, Rt.current),
      !0
    );
  }
  function gc(e, t, r) {
    var i = e.stateNode;
    if (!i) throw Error(o(169));
    r
      ? ((e = mc(e, t, Qr)),
        (i.__reactInternalMemoizedMergedChildContext = e),
        Qe(Rt),
        Qe(yt),
        He(yt, e))
      : Qe(Rt),
      He(Rt, r);
  }
  var gr = null,
    wo = !1,
    hl = !1;
  function yc(e) {
    gr === null ? (gr = [e]) : gr.push(e);
  }
  function um(e) {
    (wo = !0), yc(e);
  }
  function zr() {
    if (!hl && gr !== null) {
      hl = !0;
      var e = 0,
        t = Be;
      try {
        var r = gr;
        for (Be = 1; e < r.length; e++) {
          var i = r[e];
          do i = i(!0);
          while (i !== null);
        }
        (gr = null), (wo = !1);
      } catch (l) {
        throw (gr !== null && (gr = gr.slice(e + 1)), wu(bs, zr), l);
      } finally {
        (Be = t), (hl = !1);
      }
    }
    return null;
  }
  var Tn = [],
    Rn = 0,
    xo = null,
    So = 0,
    Bt = [],
    Ut = 0,
    qr = null,
    yr = 1,
    vr = "";
  function Yr(e, t) {
    (Tn[Rn++] = So), (Tn[Rn++] = xo), (xo = e), (So = t);
  }
  function vc(e, t, r) {
    (Bt[Ut++] = yr), (Bt[Ut++] = vr), (Bt[Ut++] = qr), (qr = e);
    var i = yr;
    e = vr;
    var l = 32 - Yt(i) - 1;
    (i &= ~(1 << l)), (r += 1);
    var u = 32 - Yt(t) + l;
    if (30 < u) {
      var p = l - (l % 5);
      (u = (i & ((1 << p) - 1)).toString(32)),
        (i >>= p),
        (l -= p),
        (yr = (1 << (32 - Yt(t) + l)) | (r << l) | i),
        (vr = u + e);
    } else (yr = (1 << u) | (r << l) | i), (vr = e);
  }
  function ml(e) {
    e.return !== null && (Yr(e, 1), vc(e, 1, 0));
  }
  function gl(e) {
    for (; e === xo; )
      (xo = Tn[--Rn]), (Tn[Rn] = null), (So = Tn[--Rn]), (Tn[Rn] = null);
    for (; e === qr; )
      (qr = Bt[--Ut]),
        (Bt[Ut] = null),
        (vr = Bt[--Ut]),
        (Bt[Ut] = null),
        (yr = Bt[--Ut]),
        (Bt[Ut] = null);
  }
  var It = null,
    Mt = null,
    Ge = !1,
    Xt = null;
  function wc(e, t) {
    var r = Qt(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function xc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (It = e), (Mt = Ar(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (It = e), (Mt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = qr !== null ? { id: yr, overflow: vr } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = Qt(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (It = e),
              (Mt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function yl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function vl(e) {
    if (Ge) {
      var t = Mt;
      if (t) {
        var r = t;
        if (!xc(e, t)) {
          if (yl(e)) throw Error(o(418));
          t = Ar(r.nextSibling);
          var i = It;
          t && xc(e, t)
            ? wc(i, r)
            : ((e.flags = (e.flags & -4097) | 2), (Ge = !1), (It = e));
        }
      } else {
        if (yl(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (Ge = !1), (It = e);
      }
    }
  }
  function Sc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    It = e;
  }
  function ko(e) {
    if (e !== It) return !1;
    if (!Ge) return Sc(e), (Ge = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !ul(e.type, e.memoizedProps))),
      t && (t = Mt))
    ) {
      if (yl(e)) throw (kc(), Error(o(418)));
      for (; t; ) wc(e, t), (t = Ar(t.nextSibling));
    }
    if ((Sc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                Mt = Ar(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Mt = null;
      }
    } else Mt = It ? Ar(e.stateNode.nextSibling) : null;
    return !0;
  }
  function kc() {
    for (var e = Mt; e; ) e = Ar(e.nextSibling);
  }
  function Pn() {
    (Mt = It = null), (Ge = !1);
  }
  function wl(e) {
    Xt === null ? (Xt = [e]) : Xt.push(e);
  }
  var cm = Z.ReactCurrentBatchConfig;
  function vi(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(o(309));
          var i = r.stateNode;
        }
        if (!i) throw Error(o(147, e));
        var l = i,
          u = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === u
          ? t.ref
          : ((t = function (p) {
              var m = l.refs;
              p === null ? delete m[u] : (m[u] = p);
            }),
            (t._stringRef = u),
            t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!r._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Eo(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Ec(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Cc(e) {
    function t(P, k) {
      if (e) {
        var N = P.deletions;
        N === null ? ((P.deletions = [k]), (P.flags |= 16)) : N.push(k);
      }
    }
    function r(P, k) {
      if (!e) return null;
      for (; k !== null; ) t(P, k), (k = k.sibling);
      return null;
    }
    function i(P, k) {
      for (P = new Map(); k !== null; )
        k.key !== null ? P.set(k.key, k) : P.set(k.index, k), (k = k.sibling);
      return P;
    }
    function l(P, k) {
      return (P = Vr(P, k)), (P.index = 0), (P.sibling = null), P;
    }
    function u(P, k, N) {
      return (
        (P.index = N),
        e
          ? ((N = P.alternate),
            N !== null
              ? ((N = N.index), N < k ? ((P.flags |= 2), k) : N)
              : ((P.flags |= 2), k))
          : ((P.flags |= 1048576), k)
      );
    }
    function p(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function m(P, k, N, X) {
      return k === null || k.tag !== 6
        ? ((k = ca(N, P.mode, X)), (k.return = P), k)
        : ((k = l(k, N)), (k.return = P), k);
    }
    function w(P, k, N, X) {
      var me = N.type;
      return me === ge
        ? K(P, k, N.props.children, X, N.key)
        : k !== null &&
          (k.elementType === me ||
            (typeof me == "object" &&
              me !== null &&
              me.$$typeof === Me &&
              Ec(me) === k.type))
        ? ((X = l(k, N.props)), (X.ref = vi(P, k, N)), (X.return = P), X)
        : ((X = Qo(N.type, N.key, N.props, null, P.mode, X)),
          (X.ref = vi(P, k, N)),
          (X.return = P),
          X);
    }
    function F(P, k, N, X) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== N.containerInfo ||
        k.stateNode.implementation !== N.implementation
        ? ((k = fa(N, P.mode, X)), (k.return = P), k)
        : ((k = l(k, N.children || [])), (k.return = P), k);
    }
    function K(P, k, N, X, me) {
      return k === null || k.tag !== 7
        ? ((k = nn(N, P.mode, X, me)), (k.return = P), k)
        : ((k = l(k, N)), (k.return = P), k);
    }
    function q(P, k, N) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return (k = ca("" + k, P.mode, N)), (k.return = P), k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case L:
            return (
              (N = Qo(k.type, k.key, k.props, null, P.mode, N)),
              (N.ref = vi(P, null, k)),
              (N.return = P),
              N
            );
          case he:
            return (k = fa(k, P.mode, N)), (k.return = P), k;
          case Me:
            var X = k._init;
            return q(P, X(k._payload), N);
        }
        if (g(k) || ce(k))
          return (k = nn(k, P.mode, N, null)), (k.return = P), k;
        Eo(P, k);
      }
      return null;
    }
    function H(P, k, N, X) {
      var me = k !== null ? k.key : null;
      if ((typeof N == "string" && N !== "") || typeof N == "number")
        return me !== null ? null : m(P, k, "" + N, X);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case L:
            return N.key === me ? w(P, k, N, X) : null;
          case he:
            return N.key === me ? F(P, k, N, X) : null;
          case Me:
            return (me = N._init), H(P, k, me(N._payload), X);
        }
        if (g(N) || ce(N)) return me !== null ? null : K(P, k, N, X, null);
        Eo(P, N);
      }
      return null;
    }
    function se(P, k, N, X, me) {
      if ((typeof X == "string" && X !== "") || typeof X == "number")
        return (P = P.get(N) || null), m(k, P, "" + X, me);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case L:
            return (
              (P = P.get(X.key === null ? N : X.key) || null), w(k, P, X, me)
            );
          case he:
            return (
              (P = P.get(X.key === null ? N : X.key) || null), F(k, P, X, me)
            );
          case Me:
            var ye = X._init;
            return se(P, k, N, ye(X._payload), me);
        }
        if (g(X) || ce(X)) return (P = P.get(N) || null), K(k, P, X, me, null);
        Eo(k, X);
      }
      return null;
    }
    function ue(P, k, N, X) {
      for (
        var me = null, ye = null, ve = k, Ee = (k = 0), ht = null;
        ve !== null && Ee < N.length;
        Ee++
      ) {
        ve.index > Ee ? ((ht = ve), (ve = null)) : (ht = ve.sibling);
        var De = H(P, ve, N[Ee], X);
        if (De === null) {
          ve === null && (ve = ht);
          break;
        }
        e && ve && De.alternate === null && t(P, ve),
          (k = u(De, k, Ee)),
          ye === null ? (me = De) : (ye.sibling = De),
          (ye = De),
          (ve = ht);
      }
      if (Ee === N.length) return r(P, ve), Ge && Yr(P, Ee), me;
      if (ve === null) {
        for (; Ee < N.length; Ee++)
          (ve = q(P, N[Ee], X)),
            ve !== null &&
              ((k = u(ve, k, Ee)),
              ye === null ? (me = ve) : (ye.sibling = ve),
              (ye = ve));
        return Ge && Yr(P, Ee), me;
      }
      for (ve = i(P, ve); Ee < N.length; Ee++)
        (ht = se(ve, P, Ee, N[Ee], X)),
          ht !== null &&
            (e &&
              ht.alternate !== null &&
              ve.delete(ht.key === null ? Ee : ht.key),
            (k = u(ht, k, Ee)),
            ye === null ? (me = ht) : (ye.sibling = ht),
            (ye = ht));
      return (
        e &&
          ve.forEach(function (Br) {
            return t(P, Br);
          }),
        Ge && Yr(P, Ee),
        me
      );
    }
    function fe(P, k, N, X) {
      var me = ce(N);
      if (typeof me != "function") throw Error(o(150));
      if (((N = me.call(N)), N == null)) throw Error(o(151));
      for (
        var ye = (me = null), ve = k, Ee = (k = 0), ht = null, De = N.next();
        ve !== null && !De.done;
        Ee++, De = N.next()
      ) {
        ve.index > Ee ? ((ht = ve), (ve = null)) : (ht = ve.sibling);
        var Br = H(P, ve, De.value, X);
        if (Br === null) {
          ve === null && (ve = ht);
          break;
        }
        e && ve && Br.alternate === null && t(P, ve),
          (k = u(Br, k, Ee)),
          ye === null ? (me = Br) : (ye.sibling = Br),
          (ye = Br),
          (ve = ht);
      }
      if (De.done) return r(P, ve), Ge && Yr(P, Ee), me;
      if (ve === null) {
        for (; !De.done; Ee++, De = N.next())
          (De = q(P, De.value, X)),
            De !== null &&
              ((k = u(De, k, Ee)),
              ye === null ? (me = De) : (ye.sibling = De),
              (ye = De));
        return Ge && Yr(P, Ee), me;
      }
      for (ve = i(P, ve); !De.done; Ee++, De = N.next())
        (De = se(ve, P, Ee, De.value, X)),
          De !== null &&
            (e &&
              De.alternate !== null &&
              ve.delete(De.key === null ? Ee : De.key),
            (k = u(De, k, Ee)),
            ye === null ? (me = De) : (ye.sibling = De),
            (ye = De));
      return (
        e &&
          ve.forEach(function (Um) {
            return t(P, Um);
          }),
        Ge && Yr(P, Ee),
        me
      );
    }
    function it(P, k, N, X) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === ge &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case L:
            e: {
              for (var me = N.key, ye = k; ye !== null; ) {
                if (ye.key === me) {
                  if (((me = N.type), me === ge)) {
                    if (ye.tag === 7) {
                      r(P, ye.sibling),
                        (k = l(ye, N.props.children)),
                        (k.return = P),
                        (P = k);
                      break e;
                    }
                  } else if (
                    ye.elementType === me ||
                    (typeof me == "object" &&
                      me !== null &&
                      me.$$typeof === Me &&
                      Ec(me) === ye.type)
                  ) {
                    r(P, ye.sibling),
                      (k = l(ye, N.props)),
                      (k.ref = vi(P, ye, N)),
                      (k.return = P),
                      (P = k);
                    break e;
                  }
                  r(P, ye);
                  break;
                } else t(P, ye);
                ye = ye.sibling;
              }
              N.type === ge
                ? ((k = nn(N.props.children, P.mode, X, N.key)),
                  (k.return = P),
                  (P = k))
                : ((X = Qo(N.type, N.key, N.props, null, P.mode, X)),
                  (X.ref = vi(P, k, N)),
                  (X.return = P),
                  (P = X));
            }
            return p(P);
          case he:
            e: {
              for (ye = N.key; k !== null; ) {
                if (k.key === ye)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === N.containerInfo &&
                    k.stateNode.implementation === N.implementation
                  ) {
                    r(P, k.sibling),
                      (k = l(k, N.children || [])),
                      (k.return = P),
                      (P = k);
                    break e;
                  } else {
                    r(P, k);
                    break;
                  }
                else t(P, k);
                k = k.sibling;
              }
              (k = fa(N, P.mode, X)), (k.return = P), (P = k);
            }
            return p(P);
          case Me:
            return (ye = N._init), it(P, k, ye(N._payload), X);
        }
        if (g(N)) return ue(P, k, N, X);
        if (ce(N)) return fe(P, k, N, X);
        Eo(P, N);
      }
      return (typeof N == "string" && N !== "") || typeof N == "number"
        ? ((N = "" + N),
          k !== null && k.tag === 6
            ? (r(P, k.sibling), (k = l(k, N)), (k.return = P), (P = k))
            : (r(P, k), (k = ca(N, P.mode, X)), (k.return = P), (P = k)),
          p(P))
        : r(P, k);
    }
    return it;
  }
  var On = Cc(!0),
    _c = Cc(!1),
    Co = jr(null),
    _o = null,
    An = null,
    xl = null;
  function Sl() {
    xl = An = _o = null;
  }
  function kl(e) {
    var t = Co.current;
    Qe(Co), (e._currentValue = t);
  }
  function El(e, t, r) {
    for (; e !== null; ) {
      var i = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function jn(e, t) {
    (_o = e),
      (xl = An = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ot = !0), (e.firstContext = null));
  }
  function Ht(e) {
    var t = e._currentValue;
    if (xl !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
        if (_o === null) throw Error(o(308));
        (An = e), (_o.dependencies = { lanes: 0, firstContext: e });
      } else An = An.next = e;
    return t;
  }
  var Gr = null;
  function Cl(e) {
    Gr === null ? (Gr = [e]) : Gr.push(e);
  }
  function Tc(e, t, r, i) {
    var l = t.interleaved;
    return (
      l === null ? ((r.next = r), Cl(t)) : ((r.next = l.next), (l.next = r)),
      (t.interleaved = r),
      wr(e, i)
    );
  }
  function wr(e, t) {
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
  var Lr = !1;
  function _l(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Rc(e, t) {
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
  function xr(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Fr(e, t, r) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), ($e & 2) !== 0)) {
      var l = i.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (i.pending = t),
        wr(e, r)
      );
    }
    return (
      (l = i.interleaved),
      l === null ? ((t.next = t), Cl(i)) : ((t.next = l.next), (l.next = t)),
      (i.interleaved = t),
      wr(e, r)
    );
  }
  function To(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var i = t.lanes;
      (i &= e.pendingLanes), (r |= i), (t.lanes = r), $s(e, r);
    }
  }
  function Pc(e, t) {
    var r = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), r === i)) {
      var l = null,
        u = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var p = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          u === null ? (l = u = p) : (u = u.next = p), (r = r.next);
        } while (r !== null);
        u === null ? (l = u = t) : (u = u.next = t);
      } else l = u = t;
      (r = {
        baseState: i.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: i.shared,
        effects: i.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function Ro(e, t, r, i) {
    var l = e.updateQueue;
    Lr = !1;
    var u = l.firstBaseUpdate,
      p = l.lastBaseUpdate,
      m = l.shared.pending;
    if (m !== null) {
      l.shared.pending = null;
      var w = m,
        F = w.next;
      (w.next = null), p === null ? (u = F) : (p.next = F), (p = w);
      var K = e.alternate;
      K !== null &&
        ((K = K.updateQueue),
        (m = K.lastBaseUpdate),
        m !== p &&
          (m === null ? (K.firstBaseUpdate = F) : (m.next = F),
          (K.lastBaseUpdate = w)));
    }
    if (u !== null) {
      var q = l.baseState;
      (p = 0), (K = F = w = null), (m = u);
      do {
        var H = m.lane,
          se = m.eventTime;
        if ((i & H) === H) {
          K !== null &&
            (K = K.next =
              {
                eventTime: se,
                lane: 0,
                tag: m.tag,
                payload: m.payload,
                callback: m.callback,
                next: null,
              });
          e: {
            var ue = e,
              fe = m;
            switch (((H = t), (se = r), fe.tag)) {
              case 1:
                if (((ue = fe.payload), typeof ue == "function")) {
                  q = ue.call(se, q, H);
                  break e;
                }
                q = ue;
                break e;
              case 3:
                ue.flags = (ue.flags & -65537) | 128;
              case 0:
                if (
                  ((ue = fe.payload),
                  (H = typeof ue == "function" ? ue.call(se, q, H) : ue),
                  H == null)
                )
                  break e;
                q = re({}, q, H);
                break e;
              case 2:
                Lr = !0;
            }
          }
          m.callback !== null &&
            m.lane !== 0 &&
            ((e.flags |= 64),
            (H = l.effects),
            H === null ? (l.effects = [m]) : H.push(m));
        } else
          (se = {
            eventTime: se,
            lane: H,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            K === null ? ((F = K = se), (w = q)) : (K = K.next = se),
            (p |= H);
        if (((m = m.next), m === null)) {
          if (((m = l.shared.pending), m === null)) break;
          (H = m),
            (m = H.next),
            (H.next = null),
            (l.lastBaseUpdate = H),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (K === null && (w = q),
        (l.baseState = w),
        (l.firstBaseUpdate = F),
        (l.lastBaseUpdate = K),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (p |= l.lane), (l = l.next);
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      (Zr |= p), (e.lanes = p), (e.memoizedState = q);
    }
  }
  function Oc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var i = e[t],
          l = i.callback;
        if (l !== null) {
          if (((i.callback = null), (i = r), typeof l != "function"))
            throw Error(o(191, l));
          l.call(i);
        }
      }
  }
  var wi = {},
    ur = jr(wi),
    xi = jr(wi),
    Si = jr(wi);
  function Xr(e) {
    if (e === wi) throw Error(o(174));
    return e;
  }
  function Tl(e, t) {
    switch ((He(Si, t), He(xi, e), He(ur, wi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ze(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = ze(t, e));
    }
    Qe(ur), He(ur, t);
  }
  function Nn() {
    Qe(ur), Qe(xi), Qe(Si);
  }
  function Ac(e) {
    Xr(Si.current);
    var t = Xr(ur.current),
      r = ze(t, e.type);
    t !== r && (He(xi, e), He(ur, r));
  }
  function Rl(e) {
    xi.current === e && (Qe(ur), Qe(xi));
  }
  var Xe = jr(0);
  function Po(e) {
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
  var Pl = [];
  function Ol() {
    for (var e = 0; e < Pl.length; e++)
      Pl[e]._workInProgressVersionPrimary = null;
    Pl.length = 0;
  }
  var Oo = Z.ReactCurrentDispatcher,
    Al = Z.ReactCurrentBatchConfig,
    Jr = 0,
    Je = null,
    ut = null,
    dt = null,
    Ao = !1,
    ki = !1,
    Ei = 0,
    fm = 0;
  function vt() {
    throw Error(o(321));
  }
  function jl(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!Gt(e[r], t[r])) return !1;
    return !0;
  }
  function Nl(e, t, r, i, l, u) {
    if (
      ((Jr = u),
      (Je = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Oo.current = e === null || e.memoizedState === null ? mm : gm),
      (e = r(i, l)),
      ki)
    ) {
      u = 0;
      do {
        if (((ki = !1), (Ei = 0), 25 <= u)) throw Error(o(301));
        (u += 1),
          (dt = ut = null),
          (t.updateQueue = null),
          (Oo.current = ym),
          (e = r(i, l));
      } while (ki);
    }
    if (
      ((Oo.current = zo),
      (t = ut !== null && ut.next !== null),
      (Jr = 0),
      (dt = ut = Je = null),
      (Ao = !1),
      t)
    )
      throw Error(o(300));
    return e;
  }
  function zl() {
    var e = Ei !== 0;
    return (Ei = 0), e;
  }
  function cr() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return dt === null ? (Je.memoizedState = dt = e) : (dt = dt.next = e), dt;
  }
  function Wt() {
    if (ut === null) {
      var e = Je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ut.next;
    var t = dt === null ? Je.memoizedState : dt.next;
    if (t !== null) (dt = t), (ut = e);
    else {
      if (e === null) throw Error(o(310));
      (ut = e),
        (e = {
          memoizedState: ut.memoizedState,
          baseState: ut.baseState,
          baseQueue: ut.baseQueue,
          queue: ut.queue,
          next: null,
        }),
        dt === null ? (Je.memoizedState = dt = e) : (dt = dt.next = e);
    }
    return dt;
  }
  function Ci(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ll(e) {
    var t = Wt(),
      r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var i = ut,
      l = i.baseQueue,
      u = r.pending;
    if (u !== null) {
      if (l !== null) {
        var p = l.next;
        (l.next = u.next), (u.next = p);
      }
      (i.baseQueue = l = u), (r.pending = null);
    }
    if (l !== null) {
      (u = l.next), (i = i.baseState);
      var m = (p = null),
        w = null,
        F = u;
      do {
        var K = F.lane;
        if ((Jr & K) === K)
          w !== null &&
            (w = w.next =
              {
                lane: 0,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null,
              }),
            (i = F.hasEagerState ? F.eagerState : e(i, F.action));
        else {
          var q = {
            lane: K,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null,
          };
          w === null ? ((m = w = q), (p = i)) : (w = w.next = q),
            (Je.lanes |= K),
            (Zr |= K);
        }
        F = F.next;
      } while (F !== null && F !== u);
      w === null ? (p = i) : (w.next = m),
        Gt(i, t.memoizedState) || (Ot = !0),
        (t.memoizedState = i),
        (t.baseState = p),
        (t.baseQueue = w),
        (r.lastRenderedState = i);
    }
    if (((e = r.interleaved), e !== null)) {
      l = e;
      do (u = l.lane), (Je.lanes |= u), (Zr |= u), (l = l.next);
      while (l !== e);
    } else l === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function Fl(e) {
    var t = Wt(),
      r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var i = r.dispatch,
      l = r.pending,
      u = t.memoizedState;
    if (l !== null) {
      r.pending = null;
      var p = (l = l.next);
      do (u = e(u, p.action)), (p = p.next);
      while (p !== l);
      Gt(u, t.memoizedState) || (Ot = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (r.lastRenderedState = u);
    }
    return [u, i];
  }
  function jc() {}
  function Nc(e, t) {
    var r = Je,
      i = Wt(),
      l = t(),
      u = !Gt(i.memoizedState, l);
    if (
      (u && ((i.memoizedState = l), (Ot = !0)),
      (i = i.queue),
      bl(Fc.bind(null, r, i, e), [e]),
      i.getSnapshot !== t || u || (dt !== null && dt.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        _i(9, Lc.bind(null, r, i, l, t), void 0, null),
        pt === null)
      )
        throw Error(o(349));
      (Jr & 30) !== 0 || zc(r, t, l);
    }
    return l;
  }
  function zc(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Je.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function Lc(e, t, r, i) {
    (t.value = r), (t.getSnapshot = i), bc(t) && Ic(e);
  }
  function Fc(e, t, r) {
    return r(function () {
      bc(t) && Ic(e);
    });
  }
  function bc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Gt(e, r);
    } catch {
      return !0;
    }
  }
  function Ic(e) {
    var t = wr(e, 1);
    t !== null && tr(t, e, 1, -1);
  }
  function Mc(e) {
    var t = cr();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ci,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = hm.bind(null, Je, e)),
      [t.memoizedState, e]
    );
  }
  function _i(e, t, r, i) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: i, next: null }),
      (t = Je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Je.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((i = r.next), (r.next = e), (e.next = i), (t.lastEffect = e))),
      e
    );
  }
  function $c() {
    return Wt().memoizedState;
  }
  function jo(e, t, r, i) {
    var l = cr();
    (Je.flags |= e),
      (l.memoizedState = _i(1 | t, r, void 0, i === void 0 ? null : i));
  }
  function No(e, t, r, i) {
    var l = Wt();
    i = i === void 0 ? null : i;
    var u = void 0;
    if (ut !== null) {
      var p = ut.memoizedState;
      if (((u = p.destroy), i !== null && jl(i, p.deps))) {
        l.memoizedState = _i(t, r, u, i);
        return;
      }
    }
    (Je.flags |= e), (l.memoizedState = _i(1 | t, r, u, i));
  }
  function Dc(e, t) {
    return jo(8390656, 8, e, t);
  }
  function bl(e, t) {
    return No(2048, 8, e, t);
  }
  function Vc(e, t) {
    return No(4, 2, e, t);
  }
  function Bc(e, t) {
    return No(4, 4, e, t);
  }
  function Uc(e, t) {
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
  function Hc(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), No(4, 4, Uc.bind(null, t, e), r)
    );
  }
  function Il() {}
  function Wc(e, t) {
    var r = Wt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && jl(t, i[1])
      ? i[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function Kc(e, t) {
    var r = Wt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return i !== null && t !== null && jl(t, i[1])
      ? i[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function Qc(e, t, r) {
    return (Jr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ot = !0)), (e.memoizedState = r))
      : (Gt(r, t) ||
          ((r = Eu()), (Je.lanes |= r), (Zr |= r), (e.baseState = !0)),
        t);
  }
  function dm(e, t) {
    var r = Be;
    (Be = r !== 0 && 4 > r ? r : 4), e(!0);
    var i = Al.transition;
    Al.transition = {};
    try {
      e(!1), t();
    } finally {
      (Be = r), (Al.transition = i);
    }
  }
  function qc() {
    return Wt().memoizedState;
  }
  function pm(e, t, r) {
    var i = $r(e);
    if (
      ((r = {
        lane: i,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Yc(e))
    )
      Gc(t, r);
    else if (((r = Tc(e, t, r, i)), r !== null)) {
      var l = Ct();
      tr(r, e, i, l), Xc(r, t, i);
    }
  }
  function hm(e, t, r) {
    var i = $r(e),
      l = {
        lane: i,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Yc(e)) Gc(t, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var p = t.lastRenderedState,
            m = u(p, r);
          if (((l.hasEagerState = !0), (l.eagerState = m), Gt(m, p))) {
            var w = t.interleaved;
            w === null
              ? ((l.next = l), Cl(t))
              : ((l.next = w.next), (w.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (r = Tc(e, t, l, i)),
        r !== null && ((l = Ct()), tr(r, e, i, l), Xc(r, t, i));
    }
  }
  function Yc(e) {
    var t = e.alternate;
    return e === Je || (t !== null && t === Je);
  }
  function Gc(e, t) {
    ki = Ao = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function Xc(e, t, r) {
    if ((r & 4194240) !== 0) {
      var i = t.lanes;
      (i &= e.pendingLanes), (r |= i), (t.lanes = r), $s(e, r);
    }
  }
  var zo = {
      readContext: Ht,
      useCallback: vt,
      useContext: vt,
      useEffect: vt,
      useImperativeHandle: vt,
      useInsertionEffect: vt,
      useLayoutEffect: vt,
      useMemo: vt,
      useReducer: vt,
      useRef: vt,
      useState: vt,
      useDebugValue: vt,
      useDeferredValue: vt,
      useTransition: vt,
      useMutableSource: vt,
      useSyncExternalStore: vt,
      useId: vt,
      unstable_isNewReconciler: !1,
    },
    mm = {
      readContext: Ht,
      useCallback: function (e, t) {
        return (cr().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ht,
      useEffect: Dc,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          jo(4194308, 4, Uc.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return jo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return jo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = cr();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var i = cr();
        return (
          (t = r !== void 0 ? r(t) : t),
          (i.memoizedState = i.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (i.queue = e),
          (e = e.dispatch = pm.bind(null, Je, e)),
          [i.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = cr();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Mc,
      useDebugValue: Il,
      useDeferredValue: function (e) {
        return (cr().memoizedState = e);
      },
      useTransition: function () {
        var e = Mc(!1),
          t = e[0];
        return (e = dm.bind(null, e[1])), (cr().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var i = Je,
          l = cr();
        if (Ge) {
          if (r === void 0) throw Error(o(407));
          r = r();
        } else {
          if (((r = t()), pt === null)) throw Error(o(349));
          (Jr & 30) !== 0 || zc(i, t, r);
        }
        l.memoizedState = r;
        var u = { value: r, getSnapshot: t };
        return (
          (l.queue = u),
          Dc(Fc.bind(null, i, u, e), [e]),
          (i.flags |= 2048),
          _i(9, Lc.bind(null, i, u, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = cr(),
          t = pt.identifierPrefix;
        if (Ge) {
          var r = vr,
            i = yr;
          (r = (i & ~(1 << (32 - Yt(i) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Ei++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = fm++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    gm = {
      readContext: Ht,
      useCallback: Wc,
      useContext: Ht,
      useEffect: bl,
      useImperativeHandle: Hc,
      useInsertionEffect: Vc,
      useLayoutEffect: Bc,
      useMemo: Kc,
      useReducer: Ll,
      useRef: $c,
      useState: function () {
        return Ll(Ci);
      },
      useDebugValue: Il,
      useDeferredValue: function (e) {
        var t = Wt();
        return Qc(t, ut.memoizedState, e);
      },
      useTransition: function () {
        var e = Ll(Ci)[0],
          t = Wt().memoizedState;
        return [e, t];
      },
      useMutableSource: jc,
      useSyncExternalStore: Nc,
      useId: qc,
      unstable_isNewReconciler: !1,
    },
    ym = {
      readContext: Ht,
      useCallback: Wc,
      useContext: Ht,
      useEffect: bl,
      useImperativeHandle: Hc,
      useInsertionEffect: Vc,
      useLayoutEffect: Bc,
      useMemo: Kc,
      useReducer: Fl,
      useRef: $c,
      useState: function () {
        return Fl(Ci);
      },
      useDebugValue: Il,
      useDeferredValue: function (e) {
        var t = Wt();
        return ut === null ? (t.memoizedState = e) : Qc(t, ut.memoizedState, e);
      },
      useTransition: function () {
        var e = Fl(Ci)[0],
          t = Wt().memoizedState;
        return [e, t];
      },
      useMutableSource: jc,
      useSyncExternalStore: Nc,
      useId: qc,
      unstable_isNewReconciler: !1,
    };
  function Jt(e, t) {
    if (e && e.defaultProps) {
      (t = re({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function Ml(e, t, r, i) {
    (t = e.memoizedState),
      (r = r(i, t)),
      (r = r == null ? t : re({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Lo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Wr(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var i = Ct(),
        l = $r(e),
        u = xr(i, l);
      (u.payload = t),
        r != null && (u.callback = r),
        (t = Fr(e, u, l)),
        t !== null && (tr(t, e, l, i), To(t, e, l));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var i = Ct(),
        l = $r(e),
        u = xr(i, l);
      (u.tag = 1),
        (u.payload = t),
        r != null && (u.callback = r),
        (t = Fr(e, u, l)),
        t !== null && (tr(t, e, l, i), To(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Ct(),
        i = $r(e),
        l = xr(r, i);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Fr(e, l, i)),
        t !== null && (tr(t, e, i, r), To(t, e, i));
    },
  };
  function Jc(e, t, r, i, l, u, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, u, p)
        : t.prototype && t.prototype.isPureReactComponent
        ? !fi(r, i) || !fi(l, u)
        : !0
    );
  }
  function Zc(e, t, r) {
    var i = !1,
      l = Nr,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = Ht(u))
        : ((l = Pt(t) ? Qr : yt.current),
          (i = t.contextTypes),
          (u = (i = i != null) ? _n(e, l) : Nr)),
      (t = new t(r, u)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Lo),
      (e.stateNode = t),
      (t._reactInternals = e),
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function ef(e, t, r, i) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, i),
      t.state !== e && Lo.enqueueReplaceState(t, t.state, null);
  }
  function $l(e, t, r, i) {
    var l = e.stateNode;
    (l.props = r), (l.state = e.memoizedState), (l.refs = {}), _l(e);
    var u = t.contextType;
    typeof u == "object" && u !== null
      ? (l.context = Ht(u))
      : ((u = Pt(t) ? Qr : yt.current), (l.context = _n(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (Ml(e, t, u, r), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Lo.enqueueReplaceState(l, l.state, null),
        Ro(e, r, l, i),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function zn(e, t) {
    try {
      var r = "",
        i = t;
      do (r += ne(i)), (i = i.return);
      while (i);
      var l = r;
    } catch (u) {
      l =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Dl(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function Vl(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var vm = typeof WeakMap == "function" ? WeakMap : Map;
  function tf(e, t, r) {
    (r = xr(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var i = t.value;
    return (
      (r.callback = function () {
        Vo || ((Vo = !0), (ra = i)), Vl(e, t);
      }),
      r
    );
  }
  function rf(e, t, r) {
    (r = xr(-1, r)), (r.tag = 3);
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var l = t.value;
      (r.payload = function () {
        return i(l);
      }),
        (r.callback = function () {
          Vl(e, t);
        });
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (r.callback = function () {
          Vl(e, t),
            typeof i != "function" &&
              (Ir === null ? (Ir = new Set([this])) : Ir.add(this));
          var p = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: p !== null ? p : "",
          });
        }),
      r
    );
  }
  function nf(e, t, r) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new vm();
      var l = new Set();
      i.set(t, l);
    } else (l = i.get(t)), l === void 0 && ((l = new Set()), i.set(t, l));
    l.has(r) || (l.add(r), (e = Nm.bind(null, e, t, r)), t.then(e, e));
  }
  function of(e) {
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
  function sf(e, t, r, i, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = xr(-1, 1)), (t.tag = 2), Fr(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var wm = Z.ReactCurrentOwner,
    Ot = !1;
  function Et(e, t, r, i) {
    t.child = e === null ? _c(t, null, r, i) : On(t, e.child, r, i);
  }
  function lf(e, t, r, i, l) {
    r = r.render;
    var u = t.ref;
    return (
      jn(t, l),
      (i = Nl(e, t, r, i, u, l)),
      (r = zl()),
      e !== null && !Ot
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Sr(e, t, l))
        : (Ge && r && ml(t), (t.flags |= 1), Et(e, t, i, l), t.child)
    );
  }
  function af(e, t, r, i, l) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" &&
        !ua(u) &&
        u.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), uf(e, t, u, i, l))
        : ((e = Qo(r.type, null, i, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var p = u.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : fi), r(p, i) && e.ref === t.ref)
      )
        return Sr(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Vr(u, i)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function uf(e, t, r, i, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (fi(u, i) && e.ref === t.ref)
        if (((Ot = !1), (t.pendingProps = i = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ot = !0);
        else return (t.lanes = e.lanes), Sr(e, t, l);
    }
    return Bl(e, t, r, i, l);
  }
  function cf(e, t, r) {
    var i = t.pendingProps,
      l = i.children,
      u = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          He(Fn, $t),
          ($t |= r);
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            He(Fn, $t),
            ($t |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (i = u !== null ? u.baseLanes : r),
          He(Fn, $t),
          ($t |= i);
      }
    else
      u !== null ? ((i = u.baseLanes | r), (t.memoizedState = null)) : (i = r),
        He(Fn, $t),
        ($t |= i);
    return Et(e, t, l, r), t.child;
  }
  function ff(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Bl(e, t, r, i, l) {
    var u = Pt(r) ? Qr : yt.current;
    return (
      (u = _n(t, u)),
      jn(t, l),
      (r = Nl(e, t, r, i, u, l)),
      (i = zl()),
      e !== null && !Ot
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Sr(e, t, l))
        : (Ge && i && ml(t), (t.flags |= 1), Et(e, t, r, l), t.child)
    );
  }
  function df(e, t, r, i, l) {
    if (Pt(r)) {
      var u = !0;
      vo(t);
    } else u = !1;
    if ((jn(t, l), t.stateNode === null))
      bo(e, t), Zc(t, r, i), $l(t, r, i, l), (i = !0);
    else if (e === null) {
      var p = t.stateNode,
        m = t.memoizedProps;
      p.props = m;
      var w = p.context,
        F = r.contextType;
      typeof F == "object" && F !== null
        ? (F = Ht(F))
        : ((F = Pt(r) ? Qr : yt.current), (F = _n(t, F)));
      var K = r.getDerivedStateFromProps,
        q =
          typeof K == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function";
      q ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((m !== i || w !== F) && ef(t, p, i, F)),
        (Lr = !1);
      var H = t.memoizedState;
      (p.state = H),
        Ro(t, i, p, l),
        (w = t.memoizedState),
        m !== i || H !== w || Rt.current || Lr
          ? (typeof K == "function" && (Ml(t, r, K, i), (w = t.memoizedState)),
            (m = Lr || Jc(t, r, m, i, H, w, F))
              ? (q ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" &&
                    p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof p.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = i),
                (t.memoizedState = w)),
            (p.props = i),
            (p.state = w),
            (p.context = F),
            (i = m))
          : (typeof p.componentDidMount == "function" && (t.flags |= 4194308),
            (i = !1));
    } else {
      (p = t.stateNode),
        Rc(e, t),
        (m = t.memoizedProps),
        (F = t.type === t.elementType ? m : Jt(t.type, m)),
        (p.props = F),
        (q = t.pendingProps),
        (H = p.context),
        (w = r.contextType),
        typeof w == "object" && w !== null
          ? (w = Ht(w))
          : ((w = Pt(r) ? Qr : yt.current), (w = _n(t, w)));
      var se = r.getDerivedStateFromProps;
      (K =
        typeof se == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function") ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((m !== q || H !== w) && ef(t, p, i, w)),
        (Lr = !1),
        (H = t.memoizedState),
        (p.state = H),
        Ro(t, i, p, l);
      var ue = t.memoizedState;
      m !== q || H !== ue || Rt.current || Lr
        ? (typeof se == "function" && (Ml(t, r, se, i), (ue = t.memoizedState)),
          (F = Lr || Jc(t, r, F, i, H, ue, w) || !1)
            ? (K ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" &&
                  p.componentWillUpdate(i, ue, w),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(i, ue, w)),
              typeof p.componentDidUpdate == "function" && (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (m === e.memoizedProps && H === e.memoizedState) ||
                (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (m === e.memoizedProps && H === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = ue)),
          (p.props = i),
          (p.state = ue),
          (p.context = w),
          (i = F))
        : (typeof p.componentDidUpdate != "function" ||
            (m === e.memoizedProps && H === e.memoizedState) ||
            (t.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (m === e.memoizedProps && H === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1));
    }
    return Ul(e, t, r, i, u, l);
  }
  function Ul(e, t, r, i, l, u) {
    ff(e, t);
    var p = (t.flags & 128) !== 0;
    if (!i && !p) return l && gc(t, r, !1), Sr(e, t, u);
    (i = t.stateNode), (wm.current = t);
    var m =
      p && typeof r.getDerivedStateFromError != "function" ? null : i.render();
    return (
      (t.flags |= 1),
      e !== null && p
        ? ((t.child = On(t, e.child, null, u)), (t.child = On(t, null, m, u)))
        : Et(e, t, m, u),
      (t.memoizedState = i.state),
      l && gc(t, r, !0),
      t.child
    );
  }
  function pf(e) {
    var t = e.stateNode;
    t.pendingContext
      ? hc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && hc(e, t.context, !1),
      Tl(e, t.containerInfo);
  }
  function hf(e, t, r, i, l) {
    return Pn(), wl(l), (t.flags |= 256), Et(e, t, r, i), t.child;
  }
  var Hl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Wl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function mf(e, t, r) {
    var i = t.pendingProps,
      l = Xe.current,
      u = !1,
      p = (t.flags & 128) !== 0,
      m;
    if (
      ((m = p) ||
        (m = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      m
        ? ((u = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      He(Xe, l & 1),
      e === null)
    )
      return (
        vl(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((p = i.children),
            (e = i.fallback),
            u
              ? ((i = t.mode),
                (u = t.child),
                (p = { mode: "hidden", children: p }),
                (i & 1) === 0 && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = p))
                  : (u = qo(p, i, 0, null)),
                (e = nn(e, i, r, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = Wl(r)),
                (t.memoizedState = Hl),
                e)
              : Kl(t, p))
      );
    if (((l = e.memoizedState), l !== null && ((m = l.dehydrated), m !== null)))
      return xm(e, t, p, i, m, l, r);
    if (u) {
      (u = i.fallback), (p = t.mode), (l = e.child), (m = l.sibling);
      var w = { mode: "hidden", children: i.children };
      return (
        (p & 1) === 0 && t.child !== l
          ? ((i = t.child),
            (i.childLanes = 0),
            (i.pendingProps = w),
            (t.deletions = null))
          : ((i = Vr(l, w)), (i.subtreeFlags = l.subtreeFlags & 14680064)),
        m !== null ? (u = Vr(m, u)) : ((u = nn(u, p, r, null)), (u.flags |= 2)),
        (u.return = t),
        (i.return = t),
        (i.sibling = u),
        (t.child = i),
        (i = u),
        (u = t.child),
        (p = e.child.memoizedState),
        (p =
          p === null
            ? Wl(r)
            : {
                baseLanes: p.baseLanes | r,
                cachePool: null,
                transitions: p.transitions,
              }),
        (u.memoizedState = p),
        (u.childLanes = e.childLanes & ~r),
        (t.memoizedState = Hl),
        i
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (i = Vr(u, { mode: "visible", children: i.children })),
      (t.mode & 1) === 0 && (i.lanes = r),
      (i.return = t),
      (i.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = i),
      (t.memoizedState = null),
      i
    );
  }
  function Kl(e, t) {
    return (
      (t = qo({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Fo(e, t, r, i) {
    return (
      i !== null && wl(i),
      On(t, e.child, null, r),
      (e = Kl(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function xm(e, t, r, i, l, u, p) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (i = Dl(Error(o(422)))), Fo(e, t, p, i))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((u = i.fallback),
          (l = t.mode),
          (i = qo({ mode: "visible", children: i.children }, l, 0, null)),
          (u = nn(u, l, p, null)),
          (u.flags |= 2),
          (i.return = t),
          (u.return = t),
          (i.sibling = u),
          (t.child = i),
          (t.mode & 1) !== 0 && On(t, e.child, null, p),
          (t.child.memoizedState = Wl(p)),
          (t.memoizedState = Hl),
          u);
    if ((t.mode & 1) === 0) return Fo(e, t, p, null);
    if (l.data === "$!") {
      if (((i = l.nextSibling && l.nextSibling.dataset), i)) var m = i.dgst;
      return (
        (i = m), (u = Error(o(419))), (i = Dl(u, i, void 0)), Fo(e, t, p, i)
      );
    }
    if (((m = (p & e.childLanes) !== 0), Ot || m)) {
      if (((i = pt), i !== null)) {
        switch (p & -p) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = (l & (i.suspendedLanes | p)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== u.retryLane &&
            ((u.retryLane = l), wr(e, l), tr(i, e, l, -1));
      }
      return aa(), (i = Dl(Error(o(421)))), Fo(e, t, p, i);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = zm.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = u.treeContext),
        (Mt = Ar(l.nextSibling)),
        (It = t),
        (Ge = !0),
        (Xt = null),
        e !== null &&
          ((Bt[Ut++] = yr),
          (Bt[Ut++] = vr),
          (Bt[Ut++] = qr),
          (yr = e.id),
          (vr = e.overflow),
          (qr = t)),
        (t = Kl(t, i.children)),
        (t.flags |= 4096),
        t);
  }
  function gf(e, t, r) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), El(e.return, t, r);
  }
  function Ql(e, t, r, i, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: r,
          tailMode: l,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = i),
        (u.tail = r),
        (u.tailMode = l));
  }
  function yf(e, t, r) {
    var i = t.pendingProps,
      l = i.revealOrder,
      u = i.tail;
    if ((Et(e, t, i.children, r), (i = Xe.current), (i & 2) !== 0))
      (i = (i & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && gf(e, r, t);
          else if (e.tag === 19) gf(e, r, t);
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
      i &= 1;
    }
    if ((He(Xe, i), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (r = t.child, l = null; r !== null; )
            (e = r.alternate),
              e !== null && Po(e) === null && (l = r),
              (r = r.sibling);
          (r = l),
            r === null
              ? ((l = t.child), (t.child = null))
              : ((l = r.sibling), (r.sibling = null)),
            Ql(t, !1, l, r, u);
          break;
        case "backwards":
          for (r = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Po(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = r), (r = l), (l = e);
          }
          Ql(t, !0, r, null, u);
          break;
        case "together":
          Ql(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function bo(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Sr(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Zr |= t.lanes),
      (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, r = Vr(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = Vr(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function Sm(e, t, r) {
    switch (t.tag) {
      case 3:
        pf(t), Pn();
        break;
      case 5:
        Ac(t);
        break;
      case 1:
        Pt(t.type) && vo(t);
        break;
      case 4:
        Tl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context,
          l = t.memoizedProps.value;
        He(Co, i._currentValue), (i._currentValue = l);
        break;
      case 13:
        if (((i = t.memoizedState), i !== null))
          return i.dehydrated !== null
            ? (He(Xe, Xe.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
            ? mf(e, t, r)
            : (He(Xe, Xe.current & 1),
              (e = Sr(e, t, r)),
              e !== null ? e.sibling : null);
        He(Xe, Xe.current & 1);
        break;
      case 19:
        if (((i = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (i) return yf(e, t, r);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          He(Xe, Xe.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), cf(e, t, r);
    }
    return Sr(e, t, r);
  }
  var vf, ql, wf, xf;
  (vf = function (e, t) {
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
    (ql = function () {}),
    (wf = function (e, t, r, i) {
      var l = e.memoizedProps;
      if (l !== i) {
        (e = t.stateNode), Xr(ur.current);
        var u = null;
        switch (r) {
          case "input":
            (l = et(e, l)), (i = et(e, i)), (u = []);
            break;
          case "select":
            (l = re({}, l, { value: void 0 })),
              (i = re({}, i, { value: void 0 })),
              (u = []);
            break;
          case "textarea":
            (l = M(e, l)), (i = M(e, i)), (u = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof i.onClick == "function" &&
              (e.onclick = mo);
        }
        dn(r, i);
        var p;
        r = null;
        for (F in l)
          if (!i.hasOwnProperty(F) && l.hasOwnProperty(F) && l[F] != null)
            if (F === "style") {
              var m = l[F];
              for (p in m) m.hasOwnProperty(p) && (r || (r = {}), (r[p] = ""));
            } else
              F !== "dangerouslySetInnerHTML" &&
                F !== "children" &&
                F !== "suppressContentEditableWarning" &&
                F !== "suppressHydrationWarning" &&
                F !== "autoFocus" &&
                (c.hasOwnProperty(F)
                  ? u || (u = [])
                  : (u = u || []).push(F, null));
        for (F in i) {
          var w = i[F];
          if (
            ((m = l?.[F]),
            i.hasOwnProperty(F) && w !== m && (w != null || m != null))
          )
            if (F === "style")
              if (m) {
                for (p in m)
                  !m.hasOwnProperty(p) ||
                    (w && w.hasOwnProperty(p)) ||
                    (r || (r = {}), (r[p] = ""));
                for (p in w)
                  w.hasOwnProperty(p) &&
                    m[p] !== w[p] &&
                    (r || (r = {}), (r[p] = w[p]));
              } else r || (u || (u = []), u.push(F, r)), (r = w);
            else
              F === "dangerouslySetInnerHTML"
                ? ((w = w ? w.__html : void 0),
                  (m = m ? m.__html : void 0),
                  w != null && m !== w && (u = u || []).push(F, w))
                : F === "children"
                ? (typeof w != "string" && typeof w != "number") ||
                  (u = u || []).push(F, "" + w)
                : F !== "suppressContentEditableWarning" &&
                  F !== "suppressHydrationWarning" &&
                  (c.hasOwnProperty(F)
                    ? (w != null && F === "onScroll" && Ke("scroll", e),
                      u || m === w || (u = []))
                    : (u = u || []).push(F, w));
        }
        r && (u = u || []).push("style", r);
        var F = u;
        (t.updateQueue = F) && (t.flags |= 4);
      }
    }),
    (xf = function (e, t, r, i) {
      r !== i && (t.flags |= 4);
    });
  function Ti(e, t) {
    if (!Ge)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var i = null; r !== null; )
            r.alternate !== null && (i = r), (r = r.sibling);
          i === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function wt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      i = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (r |= l.lanes | l.childLanes),
          (i |= l.subtreeFlags & 14680064),
          (i |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (r |= l.lanes | l.childLanes),
          (i |= l.subtreeFlags),
          (i |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= i), (e.childLanes = r), t;
  }
  function km(e, t, r) {
    var i = t.pendingProps;
    switch ((gl(t), t.tag)) {
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
        return wt(t), null;
      case 1:
        return Pt(t.type) && yo(), wt(t), null;
      case 3:
        return (
          (i = t.stateNode),
          Nn(),
          Qe(Rt),
          Qe(yt),
          Ol(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (ko(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Xt !== null && (oa(Xt), (Xt = null)))),
          ql(e, t),
          wt(t),
          null
        );
      case 5:
        Rl(t);
        var l = Xr(Si.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          wf(e, t, r, i, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(o(166));
            return wt(t), null;
          }
          if (((e = Xr(ur.current)), ko(t))) {
            (i = t.stateNode), (r = t.type);
            var u = t.memoizedProps;
            switch (((i[ar] = t), (i[gi] = u), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                Ke("cancel", i), Ke("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ke("load", i);
                break;
              case "video":
              case "audio":
                for (l = 0; l < pi.length; l++) Ke(pi[l], i);
                break;
              case "source":
                Ke("error", i);
                break;
              case "img":
              case "image":
              case "link":
                Ke("error", i), Ke("load", i);
                break;
              case "details":
                Ke("toggle", i);
                break;
              case "input":
                je(i, u), Ke("invalid", i);
                break;
              case "select":
                (i._wrapperState = { wasMultiple: !!u.multiple }),
                  Ke("invalid", i);
                break;
              case "textarea":
                ee(i, u), Ke("invalid", i);
            }
            dn(r, u), (l = null);
            for (var p in u)
              if (u.hasOwnProperty(p)) {
                var m = u[p];
                p === "children"
                  ? typeof m == "string"
                    ? i.textContent !== m &&
                      (u.suppressHydrationWarning !== !0 &&
                        ho(i.textContent, m, e),
                      (l = ["children", m]))
                    : typeof m == "number" &&
                      i.textContent !== "" + m &&
                      (u.suppressHydrationWarning !== !0 &&
                        ho(i.textContent, m, e),
                      (l = ["children", "" + m]))
                  : c.hasOwnProperty(p) &&
                    m != null &&
                    p === "onScroll" &&
                    Ke("scroll", i);
              }
            switch (r) {
              case "input":
                Fe(i), rt(i, u, !0);
                break;
              case "textarea":
                Fe(i), B(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (i.onclick = mo);
            }
            (i = l), (t.updateQueue = i), i !== null && (t.flags |= 4);
          } else {
            (p = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = pe(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = p.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof i.is == "string"
                  ? (e = p.createElement(r, { is: i.is }))
                  : ((e = p.createElement(r)),
                    r === "select" &&
                      ((p = e),
                      i.multiple
                        ? (p.multiple = !0)
                        : i.size && (p.size = i.size)))
                : (e = p.createElementNS(e, r)),
              (e[ar] = t),
              (e[gi] = i),
              vf(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((p = Yn(r, i)), r)) {
                case "dialog":
                  Ke("cancel", e), Ke("close", e), (l = i);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ke("load", e), (l = i);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < pi.length; l++) Ke(pi[l], e);
                  l = i;
                  break;
                case "source":
                  Ke("error", e), (l = i);
                  break;
                case "img":
                case "image":
                case "link":
                  Ke("error", e), Ke("load", e), (l = i);
                  break;
                case "details":
                  Ke("toggle", e), (l = i);
                  break;
                case "input":
                  je(e, i), (l = et(e, i)), Ke("invalid", e);
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!i.multiple }),
                    (l = re({}, i, { value: void 0 })),
                    Ke("invalid", e);
                  break;
                case "textarea":
                  ee(e, i), (l = M(e, i)), Ke("invalid", e);
                  break;
                default:
                  l = i;
              }
              dn(r, l), (m = l);
              for (u in m)
                if (m.hasOwnProperty(u)) {
                  var w = m[u];
                  u === "style"
                    ? fn(e, w)
                    : u === "dangerouslySetInnerHTML"
                    ? ((w = w ? w.__html : void 0), w != null && kt(e, w))
                    : u === "children"
                    ? typeof w == "string"
                      ? (r !== "textarea" || w !== "") && sr(e, w)
                      : typeof w == "number" && sr(e, "" + w)
                    : u !== "suppressContentEditableWarning" &&
                      u !== "suppressHydrationWarning" &&
                      u !== "autoFocus" &&
                      (c.hasOwnProperty(u)
                        ? w != null && u === "onScroll" && Ke("scroll", e)
                        : w != null && D(e, u, w, p));
                }
              switch (r) {
                case "input":
                  Fe(e), rt(e, i, !1);
                  break;
                case "textarea":
                  Fe(e), B(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + V(i.value));
                  break;
                case "select":
                  (e.multiple = !!i.multiple),
                    (u = i.value),
                    u != null
                      ? A(e, !!i.multiple, u, !1)
                      : i.defaultValue != null &&
                        A(e, !!i.multiple, i.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = mo);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
            }
            i && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return wt(t), null;
      case 6:
        if (e && t.stateNode != null) xf(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(o(166));
          if (((r = Xr(Si.current)), Xr(ur.current), ko(t))) {
            if (
              ((i = t.stateNode),
              (r = t.memoizedProps),
              (i[ar] = t),
              (u = i.nodeValue !== r) && ((e = It), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ho(i.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ho(i.nodeValue, r, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            (i = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(i)),
              (i[ar] = t),
              (t.stateNode = i);
        }
        return wt(t), null;
      case 13:
        if (
          (Qe(Xe),
          (i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ge && Mt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            kc(), Pn(), (t.flags |= 98560), (u = !1);
          else if (((u = ko(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(o(317));
              u[ar] = t;
            } else
              Pn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            wt(t), (u = !1);
          } else Xt !== null && (oa(Xt), (Xt = null)), (u = !0);
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((i = i !== null),
            i !== (e !== null && e.memoizedState !== null) &&
              i &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Xe.current & 1) !== 0
                  ? ct === 0 && (ct = 3)
                  : aa())),
            t.updateQueue !== null && (t.flags |= 4),
            wt(t),
            null);
      case 4:
        return (
          Nn(),
          ql(e, t),
          e === null && hi(t.stateNode.containerInfo),
          wt(t),
          null
        );
      case 10:
        return kl(t.type._context), wt(t), null;
      case 17:
        return Pt(t.type) && yo(), wt(t), null;
      case 19:
        if ((Qe(Xe), (u = t.memoizedState), u === null)) return wt(t), null;
        if (((i = (t.flags & 128) !== 0), (p = u.rendering), p === null))
          if (i) Ti(u, !1);
          else {
            if (ct !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((p = Po(e)), p !== null)) {
                  for (
                    t.flags |= 128,
                      Ti(u, !1),
                      i = p.updateQueue,
                      i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      i = r,
                      r = t.child;
                    r !== null;

                  )
                    (u = r),
                      (e = i),
                      (u.flags &= 14680066),
                      (p = u.alternate),
                      p === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = p.childLanes),
                          (u.lanes = p.lanes),
                          (u.child = p.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = p.memoizedProps),
                          (u.memoizedState = p.memoizedState),
                          (u.updateQueue = p.updateQueue),
                          (u.type = p.type),
                          (e = p.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return He(Xe, (Xe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              nt() > bn &&
              ((t.flags |= 128), (i = !0), Ti(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = Po(p)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                Ti(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !p.alternate &&
                  !Ge)
              )
                return wt(t), null;
            } else
              2 * nt() - u.renderingStartTime > bn &&
                r !== 1073741824 &&
                ((t.flags |= 128), (i = !0), Ti(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((p.sibling = t.child), (t.child = p))
            : ((r = u.last),
              r !== null ? (r.sibling = p) : (t.child = p),
              (u.last = p));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = nt()),
            (t.sibling = null),
            (r = Xe.current),
            He(Xe, i ? (r & 1) | 2 : r & 1),
            t)
          : (wt(t), null);
      case 22:
      case 23:
        return (
          la(),
          (i = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
          i && (t.mode & 1) !== 0
            ? ($t & 1073741824) !== 0 &&
              (wt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : wt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Em(e, t) {
    switch ((gl(t), t.tag)) {
      case 1:
        return (
          Pt(t.type) && yo(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Nn(),
          Qe(Rt),
          Qe(yt),
          Ol(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return Rl(t), null;
      case 13:
        if (
          (Qe(Xe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Pn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Qe(Xe), null;
      case 4:
        return Nn(), null;
      case 10:
        return kl(t.type._context), null;
      case 22:
      case 23:
        return la(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Io = !1,
    xt = !1,
    Cm = typeof WeakSet == "function" ? WeakSet : Set,
    le = null;
  function Ln(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (i) {
          Ze(e, t, i);
        }
      else r.current = null;
  }
  function Yl(e, t, r) {
    try {
      r();
    } catch (i) {
      Ze(e, t, i);
    }
  }
  var Sf = !1;
  function _m(e, t) {
    if (((ll = ro), (e = Ju()), Zs(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var i = r.getSelection && r.getSelection();
          if (i && i.rangeCount !== 0) {
            r = i.anchorNode;
            var l = i.anchorOffset,
              u = i.focusNode;
            i = i.focusOffset;
            try {
              r.nodeType, u.nodeType;
            } catch {
              r = null;
              break e;
            }
            var p = 0,
              m = -1,
              w = -1,
              F = 0,
              K = 0,
              q = e,
              H = null;
            t: for (;;) {
              for (
                var se;
                q !== r || (l !== 0 && q.nodeType !== 3) || (m = p + l),
                  q !== u || (i !== 0 && q.nodeType !== 3) || (w = p + i),
                  q.nodeType === 3 && (p += q.nodeValue.length),
                  (se = q.firstChild) !== null;

              )
                (H = q), (q = se);
              for (;;) {
                if (q === e) break t;
                if (
                  (H === r && ++F === l && (m = p),
                  H === u && ++K === i && (w = p),
                  (se = q.nextSibling) !== null)
                )
                  break;
                (q = H), (H = q.parentNode);
              }
              q = se;
            }
            r = m === -1 || w === -1 ? null : { start: m, end: w };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      al = { focusedElem: e, selectionRange: r }, ro = !1, le = t;
      le !== null;

    )
      if (
        ((t = le), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (le = e);
      else
        for (; le !== null; ) {
          t = le;
          try {
            var ue = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ue !== null) {
                    var fe = ue.memoizedProps,
                      it = ue.memoizedState,
                      P = t.stateNode,
                      k = P.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? fe : Jt(t.type, fe),
                        it
                      );
                    P.__reactInternalSnapshotBeforeUpdate = k;
                  }
                  break;
                case 3:
                  var N = t.stateNode.containerInfo;
                  N.nodeType === 1
                    ? (N.textContent = "")
                    : N.nodeType === 9 &&
                      N.documentElement &&
                      N.removeChild(N.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (X) {
            Ze(t, t.return, X);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (le = e);
            break;
          }
          le = t.return;
        }
    return (ue = Sf), (Sf = !1), ue;
  }
  function Ri(e, t, r) {
    var i = t.updateQueue;
    if (((i = i !== null ? i.lastEffect : null), i !== null)) {
      var l = (i = i.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          (l.destroy = void 0), u !== void 0 && Yl(t, r, u);
        }
        l = l.next;
      } while (l !== i);
    }
  }
  function Mo(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var i = r.create;
          r.destroy = i();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Gl(e) {
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
  function kf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), kf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[ar],
          delete t[gi],
          delete t[dl],
          delete t[lm],
          delete t[am])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Ef(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Cf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ef(e.return)) return null;
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
  function Xl(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = mo));
    else if (i !== 4 && ((e = e.child), e !== null))
      for (Xl(e, t, r), e = e.sibling; e !== null; )
        Xl(e, t, r), (e = e.sibling);
  }
  function Jl(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (i !== 4 && ((e = e.child), e !== null))
      for (Jl(e, t, r), e = e.sibling; e !== null; )
        Jl(e, t, r), (e = e.sibling);
  }
  var mt = null,
    Zt = !1;
  function br(e, t, r) {
    for (r = r.child; r !== null; ) _f(e, t, r), (r = r.sibling);
  }
  function _f(e, t, r) {
    if (lr && typeof lr.onCommitFiberUnmount == "function")
      try {
        lr.onCommitFiberUnmount(Gi, r);
      } catch {}
    switch (r.tag) {
      case 5:
        xt || Ln(r, t);
      case 6:
        var i = mt,
          l = Zt;
        (mt = null),
          br(e, t, r),
          (mt = i),
          (Zt = l),
          mt !== null &&
            (Zt
              ? ((e = mt),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : mt.removeChild(r.stateNode));
        break;
      case 18:
        mt !== null &&
          (Zt
            ? ((e = mt),
              (r = r.stateNode),
              e.nodeType === 8
                ? fl(e.parentNode, r)
                : e.nodeType === 1 && fl(e, r),
              oi(e))
            : fl(mt, r.stateNode));
        break;
      case 4:
        (i = mt),
          (l = Zt),
          (mt = r.stateNode.containerInfo),
          (Zt = !0),
          br(e, t, r),
          (mt = i),
          (Zt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !xt &&
          ((i = r.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
        ) {
          l = i = i.next;
          do {
            var u = l,
              p = u.destroy;
            (u = u.tag),
              p !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Yl(r, t, p),
              (l = l.next);
          } while (l !== i);
        }
        br(e, t, r);
        break;
      case 1:
        if (
          !xt &&
          (Ln(r, t),
          (i = r.stateNode),
          typeof i.componentWillUnmount == "function")
        )
          try {
            (i.props = r.memoizedProps),
              (i.state = r.memoizedState),
              i.componentWillUnmount();
          } catch (m) {
            Ze(r, t, m);
          }
        br(e, t, r);
        break;
      case 21:
        br(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((xt = (i = xt) || r.memoizedState !== null), br(e, t, r), (xt = i))
          : br(e, t, r);
        break;
      default:
        br(e, t, r);
    }
  }
  function Tf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new Cm()),
        t.forEach(function (i) {
          var l = Lm.bind(null, e, i);
          r.has(i) || (r.add(i), i.then(l, l));
        });
    }
  }
  function er(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var i = 0; i < r.length; i++) {
        var l = r[i];
        try {
          var u = e,
            p = t,
            m = p;
          e: for (; m !== null; ) {
            switch (m.tag) {
              case 5:
                (mt = m.stateNode), (Zt = !1);
                break e;
              case 3:
                (mt = m.stateNode.containerInfo), (Zt = !0);
                break e;
              case 4:
                (mt = m.stateNode.containerInfo), (Zt = !0);
                break e;
            }
            m = m.return;
          }
          if (mt === null) throw Error(o(160));
          _f(u, p, l), (mt = null), (Zt = !1);
          var w = l.alternate;
          w !== null && (w.return = null), (l.return = null);
        } catch (F) {
          Ze(l, t, F);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Rf(t, e), (t = t.sibling);
  }
  function Rf(e, t) {
    var r = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((er(t, e), fr(e), i & 4)) {
          try {
            Ri(3, e, e.return), Mo(3, e);
          } catch (fe) {
            Ze(e, e.return, fe);
          }
          try {
            Ri(5, e, e.return);
          } catch (fe) {
            Ze(e, e.return, fe);
          }
        }
        break;
      case 1:
        er(t, e), fr(e), i & 512 && r !== null && Ln(r, r.return);
        break;
      case 5:
        if (
          (er(t, e),
          fr(e),
          i & 512 && r !== null && Ln(r, r.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            sr(l, "");
          } catch (fe) {
            Ze(e, e.return, fe);
          }
        }
        if (i & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            p = r !== null ? r.memoizedProps : u,
            m = e.type,
            w = e.updateQueue;
          if (((e.updateQueue = null), w !== null))
            try {
              m === "input" && u.type === "radio" && u.name != null && tt(l, u),
                Yn(m, p);
              var F = Yn(m, u);
              for (p = 0; p < w.length; p += 2) {
                var K = w[p],
                  q = w[p + 1];
                K === "style"
                  ? fn(l, q)
                  : K === "dangerouslySetInnerHTML"
                  ? kt(l, q)
                  : K === "children"
                  ? sr(l, q)
                  : D(l, K, q, F);
              }
              switch (m) {
                case "input":
                  be(l, u);
                  break;
                case "textarea":
                  $(l, u);
                  break;
                case "select":
                  var H = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var se = u.value;
                  se != null
                    ? A(l, !!u.multiple, se, !1)
                    : H !== !!u.multiple &&
                      (u.defaultValue != null
                        ? A(l, !!u.multiple, u.defaultValue, !0)
                        : A(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[gi] = u;
            } catch (fe) {
              Ze(e, e.return, fe);
            }
        }
        break;
      case 6:
        if ((er(t, e), fr(e), i & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (l = e.stateNode), (u = e.memoizedProps);
          try {
            l.nodeValue = u;
          } catch (fe) {
            Ze(e, e.return, fe);
          }
        }
        break;
      case 3:
        if (
          (er(t, e), fr(e), i & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            oi(t.containerInfo);
          } catch (fe) {
            Ze(e, e.return, fe);
          }
        break;
      case 4:
        er(t, e), fr(e);
        break;
      case 13:
        er(t, e),
          fr(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (ta = nt())),
          i & 4 && Tf(e);
        break;
      case 22:
        if (
          ((K = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((xt = (F = xt) || K), er(t, e), (xt = F)) : er(t, e),
          fr(e),
          i & 8192)
        ) {
          if (
            ((F = e.memoizedState !== null),
            (e.stateNode.isHidden = F) && !K && (e.mode & 1) !== 0)
          )
            for (le = e, K = e.child; K !== null; ) {
              for (q = le = K; le !== null; ) {
                switch (((H = le), (se = H.child), H.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ri(4, H, H.return);
                    break;
                  case 1:
                    Ln(H, H.return);
                    var ue = H.stateNode;
                    if (typeof ue.componentWillUnmount == "function") {
                      (i = H), (r = H.return);
                      try {
                        (t = i),
                          (ue.props = t.memoizedProps),
                          (ue.state = t.memoizedState),
                          ue.componentWillUnmount();
                      } catch (fe) {
                        Ze(i, r, fe);
                      }
                    }
                    break;
                  case 5:
                    Ln(H, H.return);
                    break;
                  case 22:
                    if (H.memoizedState !== null) {
                      Af(q);
                      continue;
                    }
                }
                se !== null ? ((se.return = H), (le = se)) : Af(q);
              }
              K = K.sibling;
            }
          e: for (K = null, q = e; ; ) {
            if (q.tag === 5) {
              if (K === null) {
                K = q;
                try {
                  (l = q.stateNode),
                    F
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((m = q.stateNode),
                        (w = q.memoizedProps.style),
                        (p =
                          w != null && w.hasOwnProperty("display")
                            ? w.display
                            : null),
                        (m.style.display = cn("display", p)));
                } catch (fe) {
                  Ze(e, e.return, fe);
                }
              }
            } else if (q.tag === 6) {
              if (K === null)
                try {
                  q.stateNode.nodeValue = F ? "" : q.memoizedProps;
                } catch (fe) {
                  Ze(e, e.return, fe);
                }
            } else if (
              ((q.tag !== 22 && q.tag !== 23) ||
                q.memoizedState === null ||
                q === e) &&
              q.child !== null
            ) {
              (q.child.return = q), (q = q.child);
              continue;
            }
            if (q === e) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === e) break e;
              K === q && (K = null), (q = q.return);
            }
            K === q && (K = null),
              (q.sibling.return = q.return),
              (q = q.sibling);
          }
        }
        break;
      case 19:
        er(t, e), fr(e), i & 4 && Tf(e);
        break;
      case 21:
        break;
      default:
        er(t, e), fr(e);
    }
  }
  function fr(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Ef(r)) {
              var i = r;
              break e;
            }
            r = r.return;
          }
          throw Error(o(160));
        }
        switch (i.tag) {
          case 5:
            var l = i.stateNode;
            i.flags & 32 && (sr(l, ""), (i.flags &= -33));
            var u = Cf(e);
            Jl(e, u, l);
            break;
          case 3:
          case 4:
            var p = i.stateNode.containerInfo,
              m = Cf(e);
            Xl(e, m, p);
            break;
          default:
            throw Error(o(161));
        }
      } catch (w) {
        Ze(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Tm(e, t, r) {
    (le = e), Pf(e);
  }
  function Pf(e, t, r) {
    for (var i = (e.mode & 1) !== 0; le !== null; ) {
      var l = le,
        u = l.child;
      if (l.tag === 22 && i) {
        var p = l.memoizedState !== null || Io;
        if (!p) {
          var m = l.alternate,
            w = (m !== null && m.memoizedState !== null) || xt;
          m = Io;
          var F = xt;
          if (((Io = p), (xt = w) && !F))
            for (le = l; le !== null; )
              (p = le),
                (w = p.child),
                p.tag === 22 && p.memoizedState !== null
                  ? jf(l)
                  : w !== null
                  ? ((w.return = p), (le = w))
                  : jf(l);
          for (; u !== null; ) (le = u), Pf(u), (u = u.sibling);
          (le = l), (Io = m), (xt = F);
        }
        Of(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && u !== null
          ? ((u.return = l), (le = u))
          : Of(e);
    }
  }
  function Of(e) {
    for (; le !== null; ) {
      var t = le;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                xt || Mo(5, t);
                break;
              case 1:
                var i = t.stateNode;
                if (t.flags & 4 && !xt)
                  if (r === null) i.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : Jt(t.type, r.memoizedProps);
                    i.componentDidUpdate(
                      l,
                      r.memoizedState,
                      i.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var u = t.updateQueue;
                u !== null && Oc(t, u, i);
                break;
              case 3:
                var p = t.updateQueue;
                if (p !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Oc(t, p, r);
                }
                break;
              case 5:
                var m = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = m;
                  var w = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && r.focus();
                      break;
                    case "img":
                      w.src && (r.src = w.src);
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
                  var F = t.alternate;
                  if (F !== null) {
                    var K = F.memoizedState;
                    if (K !== null) {
                      var q = K.dehydrated;
                      q !== null && oi(q);
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
                throw Error(o(163));
            }
          xt || (t.flags & 512 && Gl(t));
        } catch (H) {
          Ze(t, t.return, H);
        }
      }
      if (t === e) {
        le = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (le = r);
        break;
      }
      le = t.return;
    }
  }
  function Af(e) {
    for (; le !== null; ) {
      var t = le;
      if (t === e) {
        le = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (le = r);
        break;
      }
      le = t.return;
    }
  }
  function jf(e) {
    for (; le !== null; ) {
      var t = le;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              Mo(4, t);
            } catch (w) {
              Ze(t, r, w);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (w) {
                Ze(t, l, w);
              }
            }
            var u = t.return;
            try {
              Gl(t);
            } catch (w) {
              Ze(t, u, w);
            }
            break;
          case 5:
            var p = t.return;
            try {
              Gl(t);
            } catch (w) {
              Ze(t, p, w);
            }
        }
      } catch (w) {
        Ze(t, t.return, w);
      }
      if (t === e) {
        le = null;
        break;
      }
      var m = t.sibling;
      if (m !== null) {
        (m.return = t.return), (le = m);
        break;
      }
      le = t.return;
    }
  }
  var Rm = Math.ceil,
    $o = Z.ReactCurrentDispatcher,
    Zl = Z.ReactCurrentOwner,
    Kt = Z.ReactCurrentBatchConfig,
    $e = 0,
    pt = null,
    lt = null,
    gt = 0,
    $t = 0,
    Fn = jr(0),
    ct = 0,
    Pi = null,
    Zr = 0,
    Do = 0,
    ea = 0,
    Oi = null,
    At = null,
    ta = 0,
    bn = 1 / 0,
    kr = null,
    Vo = !1,
    ra = null,
    Ir = null,
    Bo = !1,
    Mr = null,
    Uo = 0,
    Ai = 0,
    na = null,
    Ho = -1,
    Wo = 0;
  function Ct() {
    return ($e & 6) !== 0 ? nt() : Ho !== -1 ? Ho : (Ho = nt());
  }
  function $r(e) {
    return (e.mode & 1) === 0
      ? 1
      : ($e & 2) !== 0 && gt !== 0
      ? gt & -gt
      : cm.transition !== null
      ? (Wo === 0 && (Wo = Eu()), Wo)
      : ((e = Be),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Nu(e.type))),
        e);
  }
  function tr(e, t, r, i) {
    if (50 < Ai) throw ((Ai = 0), (na = null), Error(o(185)));
    ei(e, r, i),
      (($e & 2) === 0 || e !== pt) &&
        (e === pt && (($e & 2) === 0 && (Do |= r), ct === 4 && Dr(e, gt)),
        jt(e, i),
        r === 1 &&
          $e === 0 &&
          (t.mode & 1) === 0 &&
          ((bn = nt() + 500), wo && zr()));
  }
  function jt(e, t) {
    var r = e.callbackNode;
    ch(e, t);
    var i = Zi(e, e === pt ? gt : 0);
    if (i === 0)
      r !== null && xu(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = i & -i), e.callbackPriority !== t)) {
      if ((r != null && xu(r), t === 1))
        e.tag === 0 ? um(zf.bind(null, e)) : yc(zf.bind(null, e)),
          om(function () {
            ($e & 6) === 0 && zr();
          }),
          (r = null);
      else {
        switch (Cu(i)) {
          case 1:
            r = bs;
            break;
          case 4:
            r = Su;
            break;
          case 16:
            r = Yi;
            break;
          case 536870912:
            r = ku;
            break;
          default:
            r = Yi;
        }
        r = Vf(r, Nf.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function Nf(e, t) {
    if (((Ho = -1), (Wo = 0), ($e & 6) !== 0)) throw Error(o(327));
    var r = e.callbackNode;
    if (In() && e.callbackNode !== r) return null;
    var i = Zi(e, e === pt ? gt : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = Ko(e, i);
    else {
      t = i;
      var l = $e;
      $e |= 2;
      var u = Ff();
      (pt !== e || gt !== t) && ((kr = null), (bn = nt() + 500), tn(e, t));
      do
        try {
          Am();
          break;
        } catch (m) {
          Lf(e, m);
        }
      while (!0);
      Sl(),
        ($o.current = u),
        ($e = l),
        lt !== null ? (t = 0) : ((pt = null), (gt = 0), (t = ct));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Is(e)), l !== 0 && ((i = l), (t = ia(e, l)))),
        t === 1)
      )
        throw ((r = Pi), tn(e, 0), Dr(e, i), jt(e, nt()), r);
      if (t === 6) Dr(e, i);
      else {
        if (
          ((l = e.current.alternate),
          (i & 30) === 0 &&
            !Pm(l) &&
            ((t = Ko(e, i)),
            t === 2 && ((u = Is(e)), u !== 0 && ((i = u), (t = ia(e, u)))),
            t === 1))
        )
          throw ((r = Pi), tn(e, 0), Dr(e, i), jt(e, nt()), r);
        switch (((e.finishedWork = l), (e.finishedLanes = i), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            rn(e, At, kr);
            break;
          case 3:
            if (
              (Dr(e, i),
              (i & 130023424) === i && ((t = ta + 500 - nt()), 10 < t))
            ) {
              if (Zi(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & i) !== i)) {
                Ct(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = cl(rn.bind(null, e, At, kr), t);
              break;
            }
            rn(e, At, kr);
            break;
          case 4:
            if ((Dr(e, i), (i & 4194240) === i)) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var p = 31 - Yt(i);
              (u = 1 << p), (p = t[p]), p > l && (l = p), (i &= ~u);
            }
            if (
              ((i = l),
              (i = nt() - i),
              (i =
                (120 > i
                  ? 120
                  : 480 > i
                  ? 480
                  : 1080 > i
                  ? 1080
                  : 1920 > i
                  ? 1920
                  : 3e3 > i
                  ? 3e3
                  : 4320 > i
                  ? 4320
                  : 1960 * Rm(i / 1960)) - i),
              10 < i)
            ) {
              e.timeoutHandle = cl(rn.bind(null, e, At, kr), i);
              break;
            }
            rn(e, At, kr);
            break;
          case 5:
            rn(e, At, kr);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return jt(e, nt()), e.callbackNode === r ? Nf.bind(null, e) : null;
  }
  function ia(e, t) {
    var r = Oi;
    return (
      e.current.memoizedState.isDehydrated && (tn(e, t).flags |= 256),
      (e = Ko(e, t)),
      e !== 2 && ((t = At), (At = r), t !== null && oa(t)),
      e
    );
  }
  function oa(e) {
    At === null ? (At = e) : At.push.apply(At, e);
  }
  function Pm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var i = 0; i < r.length; i++) {
            var l = r[i],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!Gt(u(), l)) return !1;
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
  function Dr(e, t) {
    for (
      t &= ~ea,
        t &= ~Do,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - Yt(t),
        i = 1 << r;
      (e[r] = -1), (t &= ~i);
    }
  }
  function zf(e) {
    if (($e & 6) !== 0) throw Error(o(327));
    In();
    var t = Zi(e, 0);
    if ((t & 1) === 0) return jt(e, nt()), null;
    var r = Ko(e, t);
    if (e.tag !== 0 && r === 2) {
      var i = Is(e);
      i !== 0 && ((t = i), (r = ia(e, i)));
    }
    if (r === 1) throw ((r = Pi), tn(e, 0), Dr(e, t), jt(e, nt()), r);
    if (r === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      rn(e, At, kr),
      jt(e, nt()),
      null
    );
  }
  function sa(e, t) {
    var r = $e;
    $e |= 1;
    try {
      return e(t);
    } finally {
      ($e = r), $e === 0 && ((bn = nt() + 500), wo && zr());
    }
  }
  function en(e) {
    Mr !== null && Mr.tag === 0 && ($e & 6) === 0 && In();
    var t = $e;
    $e |= 1;
    var r = Kt.transition,
      i = Be;
    try {
      if (((Kt.transition = null), (Be = 1), e)) return e();
    } finally {
      (Be = i), (Kt.transition = r), ($e = t), ($e & 6) === 0 && zr();
    }
  }
  function la() {
    ($t = Fn.current), Qe(Fn);
  }
  function tn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), im(r)), lt !== null))
      for (r = lt.return; r !== null; ) {
        var i = r;
        switch ((gl(i), i.tag)) {
          case 1:
            (i = i.type.childContextTypes), i != null && yo();
            break;
          case 3:
            Nn(), Qe(Rt), Qe(yt), Ol();
            break;
          case 5:
            Rl(i);
            break;
          case 4:
            Nn();
            break;
          case 13:
            Qe(Xe);
            break;
          case 19:
            Qe(Xe);
            break;
          case 10:
            kl(i.type._context);
            break;
          case 22:
          case 23:
            la();
        }
        r = r.return;
      }
    if (
      ((pt = e),
      (lt = e = Vr(e.current, null)),
      (gt = $t = t),
      (ct = 0),
      (Pi = null),
      (ea = Do = Zr = 0),
      (At = Oi = null),
      Gr !== null)
    ) {
      for (t = 0; t < Gr.length; t++)
        if (((r = Gr[t]), (i = r.interleaved), i !== null)) {
          r.interleaved = null;
          var l = i.next,
            u = r.pending;
          if (u !== null) {
            var p = u.next;
            (u.next = l), (i.next = p);
          }
          r.pending = i;
        }
      Gr = null;
    }
    return e;
  }
  function Lf(e, t) {
    do {
      var r = lt;
      try {
        if ((Sl(), (Oo.current = zo), Ao)) {
          for (var i = Je.memoizedState; i !== null; ) {
            var l = i.queue;
            l !== null && (l.pending = null), (i = i.next);
          }
          Ao = !1;
        }
        if (
          ((Jr = 0),
          (dt = ut = Je = null),
          (ki = !1),
          (Ei = 0),
          (Zl.current = null),
          r === null || r.return === null)
        ) {
          (ct = 1), (Pi = t), (lt = null);
          break;
        }
        e: {
          var u = e,
            p = r.return,
            m = r,
            w = t;
          if (
            ((t = gt),
            (m.flags |= 32768),
            w !== null && typeof w == "object" && typeof w.then == "function")
          ) {
            var F = w,
              K = m,
              q = K.tag;
            if ((K.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
              var H = K.alternate;
              H
                ? ((K.updateQueue = H.updateQueue),
                  (K.memoizedState = H.memoizedState),
                  (K.lanes = H.lanes))
                : ((K.updateQueue = null), (K.memoizedState = null));
            }
            var se = of(p);
            if (se !== null) {
              (se.flags &= -257),
                sf(se, p, m, u, t),
                se.mode & 1 && nf(u, F, t),
                (t = se),
                (w = F);
              var ue = t.updateQueue;
              if (ue === null) {
                var fe = new Set();
                fe.add(w), (t.updateQueue = fe);
              } else ue.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                nf(u, F, t), aa();
                break e;
              }
              w = Error(o(426));
            }
          } else if (Ge && m.mode & 1) {
            var it = of(p);
            if (it !== null) {
              (it.flags & 65536) === 0 && (it.flags |= 256),
                sf(it, p, m, u, t),
                wl(zn(w, m));
              break e;
            }
          }
          (u = w = zn(w, m)),
            ct !== 4 && (ct = 2),
            Oi === null ? (Oi = [u]) : Oi.push(u),
            (u = p);
          do {
            switch (u.tag) {
              case 3:
                (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                var P = tf(u, w, t);
                Pc(u, P);
                break e;
              case 1:
                m = w;
                var k = u.type,
                  N = u.stateNode;
                if (
                  (u.flags & 128) === 0 &&
                  (typeof k.getDerivedStateFromError == "function" ||
                    (N !== null &&
                      typeof N.componentDidCatch == "function" &&
                      (Ir === null || !Ir.has(N))))
                ) {
                  (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                  var X = rf(u, m, t);
                  Pc(u, X);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        If(r);
      } catch (me) {
        (t = me), lt === r && r !== null && (lt = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ff() {
    var e = $o.current;
    return ($o.current = zo), e === null ? zo : e;
  }
  function aa() {
    (ct === 0 || ct === 3 || ct === 2) && (ct = 4),
      pt === null ||
        ((Zr & 268435455) === 0 && (Do & 268435455) === 0) ||
        Dr(pt, gt);
  }
  function Ko(e, t) {
    var r = $e;
    $e |= 2;
    var i = Ff();
    (pt !== e || gt !== t) && ((kr = null), tn(e, t));
    do
      try {
        Om();
        break;
      } catch (l) {
        Lf(e, l);
      }
    while (!0);
    if ((Sl(), ($e = r), ($o.current = i), lt !== null)) throw Error(o(261));
    return (pt = null), (gt = 0), ct;
  }
  function Om() {
    for (; lt !== null; ) bf(lt);
  }
  function Am() {
    for (; lt !== null && !th(); ) bf(lt);
  }
  function bf(e) {
    var t = Df(e.alternate, e, $t);
    (e.memoizedProps = e.pendingProps),
      t === null ? If(e) : (lt = t),
      (Zl.current = null);
  }
  function If(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = km(r, t, $t)), r !== null)) {
          lt = r;
          return;
        }
      } else {
        if (((r = Em(r, t)), r !== null)) {
          (r.flags &= 32767), (lt = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (ct = 6), (lt = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        lt = t;
        return;
      }
      lt = t = e;
    } while (t !== null);
    ct === 0 && (ct = 5);
  }
  function rn(e, t, r) {
    var i = Be,
      l = Kt.transition;
    try {
      (Kt.transition = null), (Be = 1), jm(e, t, r, i);
    } finally {
      (Kt.transition = l), (Be = i);
    }
    return null;
  }
  function jm(e, t, r, i) {
    do In();
    while (Mr !== null);
    if (($e & 6) !== 0) throw Error(o(327));
    r = e.finishedWork;
    var l = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var u = r.lanes | r.childLanes;
    if (
      (fh(e, u),
      e === pt && ((lt = pt = null), (gt = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        Bo ||
        ((Bo = !0),
        Vf(Yi, function () {
          return In(), null;
        })),
      (u = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || u)
    ) {
      (u = Kt.transition), (Kt.transition = null);
      var p = Be;
      Be = 1;
      var m = $e;
      ($e |= 4),
        (Zl.current = null),
        _m(e, r),
        Rf(r, e),
        Xh(al),
        (ro = !!ll),
        (al = ll = null),
        (e.current = r),
        Tm(r),
        rh(),
        ($e = m),
        (Be = p),
        (Kt.transition = u);
    } else e.current = r;
    if (
      (Bo && ((Bo = !1), (Mr = e), (Uo = l)),
      (u = e.pendingLanes),
      u === 0 && (Ir = null),
      oh(r.stateNode),
      jt(e, nt()),
      t !== null)
    )
      for (i = e.onRecoverableError, r = 0; r < t.length; r++)
        (l = t[r]), i(l.value, { componentStack: l.stack, digest: l.digest });
    if (Vo) throw ((Vo = !1), (e = ra), (ra = null), e);
    return (
      (Uo & 1) !== 0 && e.tag !== 0 && In(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === na ? Ai++ : ((Ai = 0), (na = e))) : (Ai = 0),
      zr(),
      null
    );
  }
  function In() {
    if (Mr !== null) {
      var e = Cu(Uo),
        t = Kt.transition,
        r = Be;
      try {
        if (((Kt.transition = null), (Be = 16 > e ? 16 : e), Mr === null))
          var i = !1;
        else {
          if (((e = Mr), (Mr = null), (Uo = 0), ($e & 6) !== 0))
            throw Error(o(331));
          var l = $e;
          for ($e |= 4, le = e.current; le !== null; ) {
            var u = le,
              p = u.child;
            if ((le.flags & 16) !== 0) {
              var m = u.deletions;
              if (m !== null) {
                for (var w = 0; w < m.length; w++) {
                  var F = m[w];
                  for (le = F; le !== null; ) {
                    var K = le;
                    switch (K.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ri(8, K, u);
                    }
                    var q = K.child;
                    if (q !== null) (q.return = K), (le = q);
                    else
                      for (; le !== null; ) {
                        K = le;
                        var H = K.sibling,
                          se = K.return;
                        if ((kf(K), K === F)) {
                          le = null;
                          break;
                        }
                        if (H !== null) {
                          (H.return = se), (le = H);
                          break;
                        }
                        le = se;
                      }
                  }
                }
                var ue = u.alternate;
                if (ue !== null) {
                  var fe = ue.child;
                  if (fe !== null) {
                    ue.child = null;
                    do {
                      var it = fe.sibling;
                      (fe.sibling = null), (fe = it);
                    } while (fe !== null);
                  }
                }
                le = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && p !== null)
              (p.return = u), (le = p);
            else
              e: for (; le !== null; ) {
                if (((u = le), (u.flags & 2048) !== 0))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ri(9, u, u.return);
                  }
                var P = u.sibling;
                if (P !== null) {
                  (P.return = u.return), (le = P);
                  break e;
                }
                le = u.return;
              }
          }
          var k = e.current;
          for (le = k; le !== null; ) {
            p = le;
            var N = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && N !== null)
              (N.return = p), (le = N);
            else
              e: for (p = k; le !== null; ) {
                if (((m = le), (m.flags & 2048) !== 0))
                  try {
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mo(9, m);
                    }
                  } catch (me) {
                    Ze(m, m.return, me);
                  }
                if (m === p) {
                  le = null;
                  break e;
                }
                var X = m.sibling;
                if (X !== null) {
                  (X.return = m.return), (le = X);
                  break e;
                }
                le = m.return;
              }
          }
          if (
            (($e = l),
            zr(),
            lr && typeof lr.onPostCommitFiberRoot == "function")
          )
            try {
              lr.onPostCommitFiberRoot(Gi, e);
            } catch {}
          i = !0;
        }
        return i;
      } finally {
        (Be = r), (Kt.transition = t);
      }
    }
    return !1;
  }
  function Mf(e, t, r) {
    (t = zn(r, t)),
      (t = tf(e, t, 1)),
      (e = Fr(e, t, 1)),
      (t = Ct()),
      e !== null && (ei(e, 1, t), jt(e, t));
  }
  function Ze(e, t, r) {
    if (e.tag === 3) Mf(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Mf(t, e, r);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Ir === null || !Ir.has(i)))
          ) {
            (e = zn(r, e)),
              (e = rf(t, e, 1)),
              (t = Fr(t, e, 1)),
              (e = Ct()),
              t !== null && (ei(t, 1, e), jt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Nm(e, t, r) {
    var i = e.pingCache;
    i !== null && i.delete(t),
      (t = Ct()),
      (e.pingedLanes |= e.suspendedLanes & r),
      pt === e &&
        (gt & r) === r &&
        (ct === 4 || (ct === 3 && (gt & 130023424) === gt && 500 > nt() - ta)
          ? tn(e, 0)
          : (ea |= r)),
      jt(e, t);
  }
  function $f(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ji), (Ji <<= 1), (Ji & 130023424) === 0 && (Ji = 4194304)));
    var r = Ct();
    (e = wr(e, t)), e !== null && (ei(e, t, r), jt(e, r));
  }
  function zm(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), $f(e, r);
  }
  function Lm(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode,
          l = e.memoizedState;
        l !== null && (r = l.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    i !== null && i.delete(t), $f(e, r);
  }
  var Df;
  Df = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Rt.current) Ot = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
          return (Ot = !1), Sm(e, t, r);
        Ot = (e.flags & 131072) !== 0;
      }
    else (Ot = !1), Ge && (t.flags & 1048576) !== 0 && vc(t, So, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var i = t.type;
        bo(e, t), (e = t.pendingProps);
        var l = _n(t, yt.current);
        jn(t, r), (l = Nl(null, t, i, e, l, r));
        var u = zl();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Pt(i) ? ((u = !0), vo(t)) : (u = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              _l(t),
              (l.updater = Lo),
              (t.stateNode = l),
              (l._reactInternals = t),
              $l(t, i, e, r),
              (t = Ul(null, t, i, !0, u, r)))
            : ((t.tag = 0), Ge && u && ml(t), Et(null, t, l, r), (t = t.child)),
          t
        );
      case 16:
        i = t.elementType;
        e: {
          switch (
            (bo(e, t),
            (e = t.pendingProps),
            (l = i._init),
            (i = l(i._payload)),
            (t.type = i),
            (l = t.tag = bm(i)),
            (e = Jt(i, e)),
            l)
          ) {
            case 0:
              t = Bl(null, t, i, e, r);
              break e;
            case 1:
              t = df(null, t, i, e, r);
              break e;
            case 11:
              t = lf(null, t, i, e, r);
              break e;
            case 14:
              t = af(null, t, i, Jt(i.type, e), r);
              break e;
          }
          throw Error(o(306, i, ""));
        }
        return t;
      case 0:
        return (
          (i = t.type),
          (l = t.pendingProps),
          (l = t.elementType === i ? l : Jt(i, l)),
          Bl(e, t, i, l, r)
        );
      case 1:
        return (
          (i = t.type),
          (l = t.pendingProps),
          (l = t.elementType === i ? l : Jt(i, l)),
          df(e, t, i, l, r)
        );
      case 3:
        e: {
          if ((pf(t), e === null)) throw Error(o(387));
          (i = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            Rc(e, t),
            Ro(t, i, null, r);
          var p = t.memoizedState;
          if (((i = p.element), u.isDehydrated))
            if (
              ((u = {
                element: i,
                isDehydrated: !1,
                cache: p.cache,
                pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
                transitions: p.transitions,
              }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              (l = zn(Error(o(423)), t)), (t = hf(e, t, i, r, l));
              break e;
            } else if (i !== l) {
              (l = zn(Error(o(424)), t)), (t = hf(e, t, i, r, l));
              break e;
            } else
              for (
                Mt = Ar(t.stateNode.containerInfo.firstChild),
                  It = t,
                  Ge = !0,
                  Xt = null,
                  r = _c(t, null, i, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((Pn(), i === l)) {
              t = Sr(e, t, r);
              break e;
            }
            Et(e, t, i, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ac(t),
          e === null && vl(t),
          (i = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (p = l.children),
          ul(i, l) ? (p = null) : u !== null && ul(i, u) && (t.flags |= 32),
          ff(e, t),
          Et(e, t, p, r),
          t.child
        );
      case 6:
        return e === null && vl(t), null;
      case 13:
        return mf(e, t, r);
      case 4:
        return (
          Tl(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = On(t, null, i, r)) : Et(e, t, i, r),
          t.child
        );
      case 11:
        return (
          (i = t.type),
          (l = t.pendingProps),
          (l = t.elementType === i ? l : Jt(i, l)),
          lf(e, t, i, l, r)
        );
      case 7:
        return Et(e, t, t.pendingProps, r), t.child;
      case 8:
        return Et(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return Et(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((i = t.type._context),
            (l = t.pendingProps),
            (u = t.memoizedProps),
            (p = l.value),
            He(Co, i._currentValue),
            (i._currentValue = p),
            u !== null)
          )
            if (Gt(u.value, p)) {
              if (u.children === l.children && !Rt.current) {
                t = Sr(e, t, r);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null; ) {
                var m = u.dependencies;
                if (m !== null) {
                  p = u.child;
                  for (var w = m.firstContext; w !== null; ) {
                    if (w.context === i) {
                      if (u.tag === 1) {
                        (w = xr(-1, r & -r)), (w.tag = 2);
                        var F = u.updateQueue;
                        if (F !== null) {
                          F = F.shared;
                          var K = F.pending;
                          K === null
                            ? (w.next = w)
                            : ((w.next = K.next), (K.next = w)),
                            (F.pending = w);
                        }
                      }
                      (u.lanes |= r),
                        (w = u.alternate),
                        w !== null && (w.lanes |= r),
                        El(u.return, r, t),
                        (m.lanes |= r);
                      break;
                    }
                    w = w.next;
                  }
                } else if (u.tag === 10) p = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((p = u.return), p === null)) throw Error(o(341));
                  (p.lanes |= r),
                    (m = p.alternate),
                    m !== null && (m.lanes |= r),
                    El(p, r, t),
                    (p = u.sibling);
                } else p = u.child;
                if (p !== null) p.return = u;
                else
                  for (p = u; p !== null; ) {
                    if (p === t) {
                      p = null;
                      break;
                    }
                    if (((u = p.sibling), u !== null)) {
                      (u.return = p.return), (p = u);
                      break;
                    }
                    p = p.return;
                  }
                u = p;
              }
          Et(e, t, l.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (i = t.pendingProps.children),
          jn(t, r),
          (l = Ht(l)),
          (i = i(l)),
          (t.flags |= 1),
          Et(e, t, i, r),
          t.child
        );
      case 14:
        return (
          (i = t.type),
          (l = Jt(i, t.pendingProps)),
          (l = Jt(i.type, l)),
          af(e, t, i, l, r)
        );
      case 15:
        return uf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (i = t.type),
          (l = t.pendingProps),
          (l = t.elementType === i ? l : Jt(i, l)),
          bo(e, t),
          (t.tag = 1),
          Pt(i) ? ((e = !0), vo(t)) : (e = !1),
          jn(t, r),
          Zc(t, i, l),
          $l(t, i, l, r),
          Ul(null, t, i, !0, e, r)
        );
      case 19:
        return yf(e, t, r);
      case 22:
        return cf(e, t, r);
    }
    throw Error(o(156, t.tag));
  };
  function Vf(e, t) {
    return wu(e, t);
  }
  function Fm(e, t, r, i) {
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
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Qt(e, t, r, i) {
    return new Fm(e, t, r, i);
  }
  function ua(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function bm(e) {
    if (typeof e == "function") return ua(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ie)) return 11;
      if (e === Pe) return 14;
    }
    return 2;
  }
  function Vr(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = Qt(e.tag, t, e.key, e.mode)),
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
  function Qo(e, t, r, i, l, u) {
    var p = 2;
    if (((i = e), typeof e == "function")) ua(e) && (p = 1);
    else if (typeof e == "string") p = 5;
    else
      e: switch (e) {
        case ge:
          return nn(r.children, l, u, t);
        case xe:
          (p = 8), (l |= 8);
          break;
        case te:
          return (
            (e = Qt(12, r, t, l | 2)), (e.elementType = te), (e.lanes = u), e
          );
        case ae:
          return (e = Qt(13, r, t, l)), (e.elementType = ae), (e.lanes = u), e;
        case _e:
          return (e = Qt(19, r, t, l)), (e.elementType = _e), (e.lanes = u), e;
        case Ce:
          return qo(r, l, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ae:
                p = 10;
                break e;
              case Le:
                p = 9;
                break e;
              case ie:
                p = 11;
                break e;
              case Pe:
                p = 14;
                break e;
              case Me:
                (p = 16), (i = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Qt(p, r, t, l)), (t.elementType = e), (t.type = i), (t.lanes = u), t
    );
  }
  function nn(e, t, r, i) {
    return (e = Qt(7, e, i, t)), (e.lanes = r), e;
  }
  function qo(e, t, r, i) {
    return (
      (e = Qt(22, e, i, t)),
      (e.elementType = Ce),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ca(e, t, r) {
    return (e = Qt(6, e, null, t)), (e.lanes = r), e;
  }
  function fa(e, t, r) {
    return (
      (t = Qt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Im(e, t, r, i, l) {
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
      (this.eventTimes = Ms(0)),
      (this.expirationTimes = Ms(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ms(0)),
      (this.identifierPrefix = i),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function da(e, t, r, i, l, u, p, m, w) {
    return (
      (e = new Im(e, t, r, m, w)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = Qt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: i,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      _l(u),
      e
    );
  }
  function Mm(e, t, r) {
    var i =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: he,
      key: i == null ? null : "" + i,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function Bf(e) {
    if (!e) return Nr;
    e = e._reactInternals;
    e: {
      if (Wr(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Pt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (Pt(r)) return mc(e, r, t);
    }
    return t;
  }
  function Uf(e, t, r, i, l, u, p, m, w) {
    return (
      (e = da(r, i, !0, e, l, u, p, m, w)),
      (e.context = Bf(null)),
      (r = e.current),
      (i = Ct()),
      (l = $r(r)),
      (u = xr(i, l)),
      (u.callback = t ?? null),
      Fr(r, u, l),
      (e.current.lanes = l),
      ei(e, l, i),
      jt(e, i),
      e
    );
  }
  function Yo(e, t, r, i) {
    var l = t.current,
      u = Ct(),
      p = $r(l);
    return (
      (r = Bf(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = xr(u, p)),
      (t.payload = { element: e }),
      (i = i === void 0 ? null : i),
      i !== null && (t.callback = i),
      (e = Fr(l, t, p)),
      e !== null && (tr(e, l, p, u), To(e, l, p)),
      p
    );
  }
  function Go(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Hf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function pa(e, t) {
    Hf(e, t), (e = e.alternate) && Hf(e, t);
  }
  function $m() {
    return null;
  }
  var Wf =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ha(e) {
    this._internalRoot = e;
  }
  (Xo.prototype.render = ha.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      Yo(e, t, null, null);
    }),
    (Xo.prototype.unmount = ha.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          en(function () {
            Yo(null, e, null, null);
          }),
            (t[mr] = null);
        }
      });
  function Xo(e) {
    this._internalRoot = e;
  }
  Xo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ru();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Rr.length && t !== 0 && t < Rr[r].priority; r++);
      Rr.splice(r, 0, e), r === 0 && Au(e);
    }
  };
  function ma(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Jo(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Kf() {}
  function Dm(e, t, r, i, l) {
    if (l) {
      if (typeof i == "function") {
        var u = i;
        i = function () {
          var F = Go(p);
          u.call(F);
        };
      }
      var p = Uf(t, i, e, 0, null, !1, !1, "", Kf);
      return (
        (e._reactRootContainer = p),
        (e[mr] = p.current),
        hi(e.nodeType === 8 ? e.parentNode : e),
        en(),
        p
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof i == "function") {
      var m = i;
      i = function () {
        var F = Go(w);
        m.call(F);
      };
    }
    var w = da(e, 0, !1, null, null, !1, !1, "", Kf);
    return (
      (e._reactRootContainer = w),
      (e[mr] = w.current),
      hi(e.nodeType === 8 ? e.parentNode : e),
      en(function () {
        Yo(t, w, r, i);
      }),
      w
    );
  }
  function Zo(e, t, r, i, l) {
    var u = r._reactRootContainer;
    if (u) {
      var p = u;
      if (typeof l == "function") {
        var m = l;
        l = function () {
          var w = Go(p);
          m.call(w);
        };
      }
      Yo(t, p, e, l);
    } else p = Dm(r, t, e, l, i);
    return Go(p);
  }
  (_u = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Zn(t.pendingLanes);
          r !== 0 &&
            ($s(t, r | 1),
            jt(t, nt()),
            ($e & 6) === 0 && ((bn = nt() + 500), zr()));
        }
        break;
      case 13:
        en(function () {
          var i = wr(e, 1);
          if (i !== null) {
            var l = Ct();
            tr(i, e, 1, l);
          }
        }),
          pa(e, 1);
    }
  }),
    (Ds = function (e) {
      if (e.tag === 13) {
        var t = wr(e, 134217728);
        if (t !== null) {
          var r = Ct();
          tr(t, e, 134217728, r);
        }
        pa(e, 134217728);
      }
    }),
    (Tu = function (e) {
      if (e.tag === 13) {
        var t = $r(e),
          r = wr(e, t);
        if (r !== null) {
          var i = Ct();
          tr(r, e, t, i);
        }
        pa(e, t);
      }
    }),
    (Ru = function () {
      return Be;
    }),
    (Pu = function (e, t) {
      var r = Be;
      try {
        return (Be = e), t();
      } finally {
        Be = r;
      }
    }),
    (Ns = function (e, t, r) {
      switch (t) {
        case "input":
          if ((be(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var i = r[t];
              if (i !== e && i.form === e.form) {
                var l = go(i);
                if (!l) throw Error(o(90));
                ke(i), be(i, l);
              }
            }
          }
          break;
        case "textarea":
          $(e, r);
          break;
        case "select":
          (t = r.value), t != null && A(e, !!r.multiple, t, !1);
      }
    }),
    (du = sa),
    (pu = en);
  var Vm = { usingClientEntryPoint: !1, Events: [yi, En, go, cu, fu, sa] },
    ji = {
      findFiberByHostInstance: Kr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Bm = {
      bundleType: ji.bundleType,
      version: ji.version,
      rendererPackageName: ji.rendererPackageName,
      rendererConfig: ji.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Z.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = yu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: ji.findFiberByHostInstance || $m,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var es = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!es.isDisabled && es.supportsFiber)
      try {
        (Gi = es.inject(Bm)), (lr = es);
      } catch {}
  }
  return (
    (Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vm),
    (Nt.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ma(t)) throw Error(o(200));
      return Mm(e, t, null, r);
    }),
    (Nt.createRoot = function (e, t) {
      if (!ma(e)) throw Error(o(299));
      var r = !1,
        i = "",
        l = Wf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = da(e, 1, !1, null, null, r, !1, i, l)),
        (e[mr] = t.current),
        hi(e.nodeType === 8 ? e.parentNode : e),
        new ha(t)
      );
    }),
    (Nt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return (e = yu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Nt.flushSync = function (e) {
      return en(e);
    }),
    (Nt.hydrate = function (e, t, r) {
      if (!Jo(t)) throw Error(o(200));
      return Zo(null, e, t, !0, r);
    }),
    (Nt.hydrateRoot = function (e, t, r) {
      if (!ma(e)) throw Error(o(405));
      var i = (r != null && r.hydratedSources) || null,
        l = !1,
        u = "",
        p = Wf;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (l = !0),
          r.identifierPrefix !== void 0 && (u = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (p = r.onRecoverableError)),
        (t = Uf(t, null, e, 1, r ?? null, l, !1, u, p)),
        (e[mr] = t.current),
        hi(e),
        i)
      )
        for (e = 0; e < i.length; e++)
          (r = i[e]),
            (l = r._getVersion),
            (l = l(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, l])
              : t.mutableSourceEagerHydrationData.push(r, l);
      return new Xo(t);
    }),
    (Nt.render = function (e, t, r) {
      if (!Jo(t)) throw Error(o(200));
      return Zo(null, e, t, !1, r);
    }),
    (Nt.unmountComponentAtNode = function (e) {
      if (!Jo(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (en(function () {
            Zo(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[mr] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Nt.unstable_batchedUpdates = sa),
    (Nt.unstable_renderSubtreeIntoContainer = function (e, t, r, i) {
      if (!Jo(r)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return Zo(e, t, r, !1, i);
    }),
    (Nt.version = "18.3.1-next-f1338f8080-20240426"),
    Nt
  );
}
var ed;
function Wd() {
  if (ed) return va.exports;
  ed = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (s) {
        console.error(s);
      }
  }
  return n(), (va.exports = Ym()), va.exports;
}
var td;
function Gm() {
  if (td) return ts;
  td = 1;
  var n = Wd();
  return (ts.createRoot = n.createRoot), (ts.hydrateRoot = n.hydrateRoot), ts;
}
var Xm = Gm();
const Jm = Ha(Xm);
function Kd(n, s) {
  return function () {
    return n.apply(s, arguments);
  };
}
const { toString: Zm } = Object.prototype,
  { getPrototypeOf: Ka } = Object,
  { iterator: Ss, toStringTag: Qd } = Symbol,
  ks = ((n) => (s) => {
    const o = Zm.call(s);
    return n[o] || (n[o] = o.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ir = (n) => ((n = n.toLowerCase()), (s) => ks(s) === n),
  Es = (n) => (s) => typeof s === n,
  { isArray: Qn } = Array,
  Di = Es("undefined");
function e0(n) {
  return (
    n !== null &&
    !Di(n) &&
    n.constructor !== null &&
    !Di(n.constructor) &&
    Lt(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const qd = ir("ArrayBuffer");
function t0(n) {
  let s;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (s = ArrayBuffer.isView(n))
      : (s = n && n.buffer && qd(n.buffer)),
    s
  );
}
const r0 = Es("string"),
  Lt = Es("function"),
  Yd = Es("number"),
  Cs = (n) => n !== null && typeof n == "object",
  n0 = (n) => n === !0 || n === !1,
  is = (n) => {
    if (ks(n) !== "object") return !1;
    const s = Ka(n);
    return (
      (s === null ||
        s === Object.prototype ||
        Object.getPrototypeOf(s) === null) &&
      !(Qd in n) &&
      !(Ss in n)
    );
  },
  i0 = ir("Date"),
  o0 = ir("File"),
  s0 = ir("Blob"),
  l0 = ir("FileList"),
  a0 = (n) => Cs(n) && Lt(n.pipe),
  u0 = (n) => {
    let s;
    return (
      n &&
      ((typeof FormData == "function" && n instanceof FormData) ||
        (Lt(n.append) &&
          ((s = ks(n)) === "formdata" ||
            (s === "object" &&
              Lt(n.toString) &&
              n.toString() === "[object FormData]"))))
    );
  },
  c0 = ir("URLSearchParams"),
  [f0, d0, p0, h0] = ["ReadableStream", "Request", "Response", "Headers"].map(
    ir
  ),
  m0 = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Bi(n, s, { allOwnKeys: o = !1 } = {}) {
  if (n === null || typeof n > "u") return;
  let a, c;
  if ((typeof n != "object" && (n = [n]), Qn(n)))
    for (a = 0, c = n.length; a < c; a++) s.call(null, n[a], a, n);
  else {
    const f = o ? Object.getOwnPropertyNames(n) : Object.keys(n),
      d = f.length;
    let h;
    for (a = 0; a < d; a++) (h = f[a]), s.call(null, n[h], h, n);
  }
}
function Gd(n, s) {
  s = s.toLowerCase();
  const o = Object.keys(n);
  let a = o.length,
    c;
  for (; a-- > 0; ) if (((c = o[a]), s === c.toLowerCase())) return c;
  return null;
}
const on =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Xd = (n) => !Di(n) && n !== on;
function za() {
  const { caseless: n } = (Xd(this) && this) || {},
    s = {},
    o = (a, c) => {
      const f = (n && Gd(s, c)) || c;
      is(s[f]) && is(a)
        ? (s[f] = za(s[f], a))
        : is(a)
        ? (s[f] = za({}, a))
        : Qn(a)
        ? (s[f] = a.slice())
        : (s[f] = a);
    };
  for (let a = 0, c = arguments.length; a < c; a++)
    arguments[a] && Bi(arguments[a], o);
  return s;
}
const g0 = (n, s, o, { allOwnKeys: a } = {}) => (
    Bi(
      s,
      (c, f) => {
        o && Lt(c) ? (n[f] = Kd(c, o)) : (n[f] = c);
      },
      { allOwnKeys: a }
    ),
    n
  ),
  y0 = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  v0 = (n, s, o, a) => {
    (n.prototype = Object.create(s.prototype, a)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, "super", { value: s.prototype }),
      o && Object.assign(n.prototype, o);
  },
  w0 = (n, s, o, a) => {
    let c, f, d;
    const h = {};
    if (((s = s || {}), n == null)) return s;
    do {
      for (c = Object.getOwnPropertyNames(n), f = c.length; f-- > 0; )
        (d = c[f]), (!a || a(d, n, s)) && !h[d] && ((s[d] = n[d]), (h[d] = !0));
      n = o !== !1 && Ka(n);
    } while (n && (!o || o(n, s)) && n !== Object.prototype);
    return s;
  },
  x0 = (n, s, o) => {
    (n = String(n)),
      (o === void 0 || o > n.length) && (o = n.length),
      (o -= s.length);
    const a = n.indexOf(s, o);
    return a !== -1 && a === o;
  },
  S0 = (n) => {
    if (!n) return null;
    if (Qn(n)) return n;
    let s = n.length;
    if (!Yd(s)) return null;
    const o = new Array(s);
    for (; s-- > 0; ) o[s] = n[s];
    return o;
  },
  k0 = (
    (n) => (s) =>
      n && s instanceof n
  )(typeof Uint8Array < "u" && Ka(Uint8Array)),
  E0 = (n, s) => {
    const a = (n && n[Ss]).call(n);
    let c;
    for (; (c = a.next()) && !c.done; ) {
      const f = c.value;
      s.call(n, f[0], f[1]);
    }
  },
  C0 = (n, s) => {
    let o;
    const a = [];
    for (; (o = n.exec(s)) !== null; ) a.push(o);
    return a;
  },
  _0 = ir("HTMLFormElement"),
  T0 = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (o, a, c) {
      return a.toUpperCase() + c;
    }),
  rd = (
    ({ hasOwnProperty: n }) =>
    (s, o) =>
      n.call(s, o)
  )(Object.prototype),
  R0 = ir("RegExp"),
  Jd = (n, s) => {
    const o = Object.getOwnPropertyDescriptors(n),
      a = {};
    Bi(o, (c, f) => {
      let d;
      (d = s(c, f, n)) !== !1 && (a[f] = d || c);
    }),
      Object.defineProperties(n, a);
  },
  P0 = (n) => {
    Jd(n, (s, o) => {
      if (Lt(n) && ["arguments", "caller", "callee"].indexOf(o) !== -1)
        return !1;
      const a = n[o];
      if (Lt(a)) {
        if (((s.enumerable = !1), "writable" in s)) {
          s.writable = !1;
          return;
        }
        s.set ||
          (s.set = () => {
            throw Error("Can not rewrite read-only method '" + o + "'");
          });
      }
    });
  },
  O0 = (n, s) => {
    const o = {},
      a = (c) => {
        c.forEach((f) => {
          o[f] = !0;
        });
      };
    return Qn(n) ? a(n) : a(String(n).split(s)), o;
  },
  A0 = () => {},
  j0 = (n, s) => (n != null && Number.isFinite((n = +n)) ? n : s);
function N0(n) {
  return !!(n && Lt(n.append) && n[Qd] === "FormData" && n[Ss]);
}
const z0 = (n) => {
    const s = new Array(10),
      o = (a, c) => {
        if (Cs(a)) {
          if (s.indexOf(a) >= 0) return;
          if (!("toJSON" in a)) {
            s[c] = a;
            const f = Qn(a) ? [] : {};
            return (
              Bi(a, (d, h) => {
                const S = o(d, c + 1);
                !Di(S) && (f[h] = S);
              }),
              (s[c] = void 0),
              f
            );
          }
        }
        return a;
      };
    return o(n, 0);
  },
  L0 = ir("AsyncFunction"),
  F0 = (n) => n && (Cs(n) || Lt(n)) && Lt(n.then) && Lt(n.catch),
  Zd = ((n, s) =>
    n
      ? setImmediate
      : s
      ? ((o, a) => (
          on.addEventListener(
            "message",
            ({ source: c, data: f }) => {
              c === on && f === o && a.length && a.shift()();
            },
            !1
          ),
          (c) => {
            a.push(c), on.postMessage(o, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (o) => setTimeout(o))(
    typeof setImmediate == "function",
    Lt(on.postMessage)
  ),
  b0 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(on)
      : (typeof process < "u" && process.nextTick) || Zd,
  I0 = (n) => n != null && Lt(n[Ss]),
  I = {
    isArray: Qn,
    isArrayBuffer: qd,
    isBuffer: e0,
    isFormData: u0,
    isArrayBufferView: t0,
    isString: r0,
    isNumber: Yd,
    isBoolean: n0,
    isObject: Cs,
    isPlainObject: is,
    isReadableStream: f0,
    isRequest: d0,
    isResponse: p0,
    isHeaders: h0,
    isUndefined: Di,
    isDate: i0,
    isFile: o0,
    isBlob: s0,
    isRegExp: R0,
    isFunction: Lt,
    isStream: a0,
    isURLSearchParams: c0,
    isTypedArray: k0,
    isFileList: l0,
    forEach: Bi,
    merge: za,
    extend: g0,
    trim: m0,
    stripBOM: y0,
    inherits: v0,
    toFlatObject: w0,
    kindOf: ks,
    kindOfTest: ir,
    endsWith: x0,
    toArray: S0,
    forEachEntry: E0,
    matchAll: C0,
    isHTMLForm: _0,
    hasOwnProperty: rd,
    hasOwnProp: rd,
    reduceDescriptors: Jd,
    freezeMethods: P0,
    toObjectSet: O0,
    toCamelCase: T0,
    noop: A0,
    toFiniteNumber: j0,
    findKey: Gd,
    global: on,
    isContextDefined: Xd,
    isSpecCompliantForm: N0,
    toJSONObject: z0,
    isAsyncFn: L0,
    isThenable: F0,
    setImmediate: Zd,
    asap: b0,
    isIterable: I0,
  };
function Re(n, s, o, a, c) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = n),
    (this.name = "AxiosError"),
    s && (this.code = s),
    o && (this.config = o),
    a && (this.request = a),
    c && ((this.response = c), (this.status = c.status ? c.status : null));
}
I.inherits(Re, Error, {
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
      config: I.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const ep = Re.prototype,
  tp = {};
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
  tp[n] = { value: n };
});
Object.defineProperties(Re, tp);
Object.defineProperty(ep, "isAxiosError", { value: !0 });
Re.from = (n, s, o, a, c, f) => {
  const d = Object.create(ep);
  return (
    I.toFlatObject(
      n,
      d,
      function (S) {
        return S !== Error.prototype;
      },
      (h) => h !== "isAxiosError"
    ),
    Re.call(d, n.message, s, o, a, c),
    (d.cause = n),
    (d.name = n.name),
    f && Object.assign(d, f),
    d
  );
};
const M0 = null;
function La(n) {
  return I.isPlainObject(n) || I.isArray(n);
}
function rp(n) {
  return I.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function nd(n, s, o) {
  return n
    ? n
        .concat(s)
        .map(function (c, f) {
          return (c = rp(c)), !o && f ? "[" + c + "]" : c;
        })
        .join(o ? "." : "")
    : s;
}
function $0(n) {
  return I.isArray(n) && !n.some(La);
}
const D0 = I.toFlatObject(I, {}, null, function (s) {
  return /^is[A-Z]/.test(s);
});
function _s(n, s, o) {
  if (!I.isObject(n)) throw new TypeError("target must be an object");
  (s = s || new FormData()),
    (o = I.toFlatObject(
      o,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, C) {
        return !I.isUndefined(C[v]);
      }
    ));
  const a = o.metaTokens,
    c = o.visitor || x,
    f = o.dots,
    d = o.indexes,
    S = (o.Blob || (typeof Blob < "u" && Blob)) && I.isSpecCompliantForm(s);
  if (!I.isFunction(c)) throw new TypeError("visitor must be a function");
  function E(T) {
    if (T === null) return "";
    if (I.isDate(T)) return T.toISOString();
    if (I.isBoolean(T)) return T.toString();
    if (!S && I.isBlob(T))
      throw new Re("Blob is not supported. Use a Buffer instead.");
    return I.isArrayBuffer(T) || I.isTypedArray(T)
      ? S && typeof Blob == "function"
        ? new Blob([T])
        : Buffer.from(T)
      : T;
  }
  function x(T, v, C) {
    let W = T;
    if (T && !C && typeof T == "object") {
      if (I.endsWith(v, "{}"))
        (v = a ? v : v.slice(0, -2)), (T = JSON.stringify(T));
      else if (
        (I.isArray(T) && $0(T)) ||
        ((I.isFileList(T) || I.endsWith(v, "[]")) && (W = I.toArray(T)))
      )
        return (
          (v = rp(v)),
          W.forEach(function (D, Z) {
            !(I.isUndefined(D) || D === null) &&
              s.append(
                d === !0 ? nd([v], Z, f) : d === null ? v : v + "[]",
                E(D)
              );
          }),
          !1
        );
    }
    return La(T) ? !0 : (s.append(nd(C, v, f), E(T)), !1);
  }
  const O = [],
    b = Object.assign(D0, {
      defaultVisitor: x,
      convertValue: E,
      isVisitable: La,
    });
  function Y(T, v) {
    if (!I.isUndefined(T)) {
      if (O.indexOf(T) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      O.push(T),
        I.forEach(T, function (W, z) {
          (!(I.isUndefined(W) || W === null) &&
            c.call(s, W, I.isString(z) ? z.trim() : z, v, b)) === !0 &&
            Y(W, v ? v.concat(z) : [z]);
        }),
        O.pop();
    }
  }
  if (!I.isObject(n)) throw new TypeError("data must be an object");
  return Y(n), s;
}
function id(n) {
  const s = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (a) {
    return s[a];
  });
}
function Qa(n, s) {
  (this._pairs = []), n && _s(n, this, s);
}
const np = Qa.prototype;
np.append = function (s, o) {
  this._pairs.push([s, o]);
};
np.toString = function (s) {
  const o = s
    ? function (a) {
        return s.call(this, a, id);
      }
    : id;
  return this._pairs
    .map(function (c) {
      return o(c[0]) + "=" + o(c[1]);
    }, "")
    .join("&");
};
function V0(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function ip(n, s, o) {
  if (!s) return n;
  const a = (o && o.encode) || V0;
  I.isFunction(o) && (o = { serialize: o });
  const c = o && o.serialize;
  let f;
  if (
    (c
      ? (f = c(s, o))
      : (f = I.isURLSearchParams(s) ? s.toString() : new Qa(s, o).toString(a)),
    f)
  ) {
    const d = n.indexOf("#");
    d !== -1 && (n = n.slice(0, d)),
      (n += (n.indexOf("?") === -1 ? "?" : "&") + f);
  }
  return n;
}
class od {
  constructor() {
    this.handlers = [];
  }
  use(s, o, a) {
    return (
      this.handlers.push({
        fulfilled: s,
        rejected: o,
        synchronous: a ? a.synchronous : !1,
        runWhen: a ? a.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(s) {
    this.handlers[s] && (this.handlers[s] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(s) {
    I.forEach(this.handlers, function (a) {
      a !== null && s(a);
    });
  }
}
const op = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  B0 = typeof URLSearchParams < "u" ? URLSearchParams : Qa,
  U0 = typeof FormData < "u" ? FormData : null,
  H0 = typeof Blob < "u" ? Blob : null,
  W0 = {
    isBrowser: !0,
    classes: { URLSearchParams: B0, FormData: U0, Blob: H0 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  qa = typeof window < "u" && typeof document < "u",
  Fa = (typeof navigator == "object" && navigator) || void 0,
  K0 =
    qa &&
    (!Fa || ["ReactNative", "NativeScript", "NS"].indexOf(Fa.product) < 0),
  Q0 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  q0 = (qa && window.location.href) || "http://localhost",
  Y0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: qa,
        hasStandardBrowserEnv: K0,
        hasStandardBrowserWebWorkerEnv: Q0,
        navigator: Fa,
        origin: q0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  St = { ...Y0, ...W0 };
function G0(n, s) {
  return _s(
    n,
    new St.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (o, a, c, f) {
          return St.isNode && I.isBuffer(o)
            ? (this.append(a, o.toString("base64")), !1)
            : f.defaultVisitor.apply(this, arguments);
        },
      },
      s
    )
  );
}
function X0(n) {
  return I.matchAll(/\w+|\[(\w*)]/g, n).map((s) =>
    s[0] === "[]" ? "" : s[1] || s[0]
  );
}
function J0(n) {
  const s = {},
    o = Object.keys(n);
  let a;
  const c = o.length;
  let f;
  for (a = 0; a < c; a++) (f = o[a]), (s[f] = n[f]);
  return s;
}
function sp(n) {
  function s(o, a, c, f) {
    let d = o[f++];
    if (d === "__proto__") return !0;
    const h = Number.isFinite(+d),
      S = f >= o.length;
    return (
      (d = !d && I.isArray(c) ? c.length : d),
      S
        ? (I.hasOwnProp(c, d) ? (c[d] = [c[d], a]) : (c[d] = a), !h)
        : ((!c[d] || !I.isObject(c[d])) && (c[d] = []),
          s(o, a, c[d], f) && I.isArray(c[d]) && (c[d] = J0(c[d])),
          !h)
    );
  }
  if (I.isFormData(n) && I.isFunction(n.entries)) {
    const o = {};
    return (
      I.forEachEntry(n, (a, c) => {
        s(X0(a), c, o, 0);
      }),
      o
    );
  }
  return null;
}
function Z0(n, s, o) {
  if (I.isString(n))
    try {
      return (s || JSON.parse)(n), I.trim(n);
    } catch (a) {
      if (a.name !== "SyntaxError") throw a;
    }
  return (o || JSON.stringify)(n);
}
const Ui = {
  transitional: op,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (s, o) {
      const a = o.getContentType() || "",
        c = a.indexOf("application/json") > -1,
        f = I.isObject(s);
      if ((f && I.isHTMLForm(s) && (s = new FormData(s)), I.isFormData(s)))
        return c ? JSON.stringify(sp(s)) : s;
      if (
        I.isArrayBuffer(s) ||
        I.isBuffer(s) ||
        I.isStream(s) ||
        I.isFile(s) ||
        I.isBlob(s) ||
        I.isReadableStream(s)
      )
        return s;
      if (I.isArrayBufferView(s)) return s.buffer;
      if (I.isURLSearchParams(s))
        return (
          o.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          s.toString()
        );
      let h;
      if (f) {
        if (a.indexOf("application/x-www-form-urlencoded") > -1)
          return G0(s, this.formSerializer).toString();
        if ((h = I.isFileList(s)) || a.indexOf("multipart/form-data") > -1) {
          const S = this.env && this.env.FormData;
          return _s(
            h ? { "files[]": s } : s,
            S && new S(),
            this.formSerializer
          );
        }
      }
      return f || c ? (o.setContentType("application/json", !1), Z0(s)) : s;
    },
  ],
  transformResponse: [
    function (s) {
      const o = this.transitional || Ui.transitional,
        a = o && o.forcedJSONParsing,
        c = this.responseType === "json";
      if (I.isResponse(s) || I.isReadableStream(s)) return s;
      if (s && I.isString(s) && ((a && !this.responseType) || c)) {
        const d = !(o && o.silentJSONParsing) && c;
        try {
          return JSON.parse(s);
        } catch (h) {
          if (d)
            throw h.name === "SyntaxError"
              ? Re.from(h, Re.ERR_BAD_RESPONSE, this, null, this.response)
              : h;
        }
      }
      return s;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: St.classes.FormData, Blob: St.classes.Blob },
  validateStatus: function (s) {
    return s >= 200 && s < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
I.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Ui.headers[n] = {};
});
const e1 = I.toObjectSet([
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
  t1 = (n) => {
    const s = {};
    let o, a, c;
    return (
      n &&
        n
          .split(
            `
`
          )
          .forEach(function (d) {
            (c = d.indexOf(":")),
              (o = d.substring(0, c).trim().toLowerCase()),
              (a = d.substring(c + 1).trim()),
              !(!o || (s[o] && e1[o])) &&
                (o === "set-cookie"
                  ? s[o]
                    ? s[o].push(a)
                    : (s[o] = [a])
                  : (s[o] = s[o] ? s[o] + ", " + a : a));
          }),
      s
    );
  },
  sd = Symbol("internals");
function zi(n) {
  return n && String(n).trim().toLowerCase();
}
function os(n) {
  return n === !1 || n == null ? n : I.isArray(n) ? n.map(os) : String(n);
}
function r1(n) {
  const s = Object.create(null),
    o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; (a = o.exec(n)); ) s[a[1]] = a[2];
  return s;
}
const n1 = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Sa(n, s, o, a, c) {
  if (I.isFunction(a)) return a.call(this, s, o);
  if ((c && (s = o), !!I.isString(s))) {
    if (I.isString(a)) return s.indexOf(a) !== -1;
    if (I.isRegExp(a)) return a.test(s);
  }
}
function i1(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (s, o, a) => o.toUpperCase() + a);
}
function o1(n, s) {
  const o = I.toCamelCase(" " + s);
  ["get", "set", "has"].forEach((a) => {
    Object.defineProperty(n, a + o, {
      value: function (c, f, d) {
        return this[a].call(this, s, c, f, d);
      },
      configurable: !0,
    });
  });
}
let Ft = class {
  constructor(s) {
    s && this.set(s);
  }
  set(s, o, a) {
    const c = this;
    function f(h, S, E) {
      const x = zi(S);
      if (!x) throw new Error("header name must be a non-empty string");
      const O = I.findKey(c, x);
      (!O || c[O] === void 0 || E === !0 || (E === void 0 && c[O] !== !1)) &&
        (c[O || S] = os(h));
    }
    const d = (h, S) => I.forEach(h, (E, x) => f(E, x, S));
    if (I.isPlainObject(s) || s instanceof this.constructor) d(s, o);
    else if (I.isString(s) && (s = s.trim()) && !n1(s)) d(t1(s), o);
    else if (I.isObject(s) && I.isIterable(s)) {
      let h = {},
        S,
        E;
      for (const x of s) {
        if (!I.isArray(x))
          throw TypeError("Object iterator must return a key-value pair");
        h[(E = x[0])] = (S = h[E])
          ? I.isArray(S)
            ? [...S, x[1]]
            : [S, x[1]]
          : x[1];
      }
      d(h, o);
    } else s != null && f(o, s, a);
    return this;
  }
  get(s, o) {
    if (((s = zi(s)), s)) {
      const a = I.findKey(this, s);
      if (a) {
        const c = this[a];
        if (!o) return c;
        if (o === !0) return r1(c);
        if (I.isFunction(o)) return o.call(this, c, a);
        if (I.isRegExp(o)) return o.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(s, o) {
    if (((s = zi(s)), s)) {
      const a = I.findKey(this, s);
      return !!(a && this[a] !== void 0 && (!o || Sa(this, this[a], a, o)));
    }
    return !1;
  }
  delete(s, o) {
    const a = this;
    let c = !1;
    function f(d) {
      if (((d = zi(d)), d)) {
        const h = I.findKey(a, d);
        h && (!o || Sa(a, a[h], h, o)) && (delete a[h], (c = !0));
      }
    }
    return I.isArray(s) ? s.forEach(f) : f(s), c;
  }
  clear(s) {
    const o = Object.keys(this);
    let a = o.length,
      c = !1;
    for (; a--; ) {
      const f = o[a];
      (!s || Sa(this, this[f], f, s, !0)) && (delete this[f], (c = !0));
    }
    return c;
  }
  normalize(s) {
    const o = this,
      a = {};
    return (
      I.forEach(this, (c, f) => {
        const d = I.findKey(a, f);
        if (d) {
          (o[d] = os(c)), delete o[f];
          return;
        }
        const h = s ? i1(f) : String(f).trim();
        h !== f && delete o[f], (o[h] = os(c)), (a[h] = !0);
      }),
      this
    );
  }
  concat(...s) {
    return this.constructor.concat(this, ...s);
  }
  toJSON(s) {
    const o = Object.create(null);
    return (
      I.forEach(this, (a, c) => {
        a != null && a !== !1 && (o[c] = s && I.isArray(a) ? a.join(", ") : a);
      }),
      o
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([s, o]) => s + ": " + o).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(s) {
    return s instanceof this ? s : new this(s);
  }
  static concat(s, ...o) {
    const a = new this(s);
    return o.forEach((c) => a.set(c)), a;
  }
  static accessor(s) {
    const a = (this[sd] = this[sd] = { accessors: {} }).accessors,
      c = this.prototype;
    function f(d) {
      const h = zi(d);
      a[h] || (o1(c, d), (a[h] = !0));
    }
    return I.isArray(s) ? s.forEach(f) : f(s), this;
  }
};
Ft.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
I.reduceDescriptors(Ft.prototype, ({ value: n }, s) => {
  let o = s[0].toUpperCase() + s.slice(1);
  return {
    get: () => n,
    set(a) {
      this[o] = a;
    },
  };
});
I.freezeMethods(Ft);
function ka(n, s) {
  const o = this || Ui,
    a = s || o,
    c = Ft.from(a.headers);
  let f = a.data;
  return (
    I.forEach(n, function (h) {
      f = h.call(o, f, c.normalize(), s ? s.status : void 0);
    }),
    c.normalize(),
    f
  );
}
function lp(n) {
  return !!(n && n.__CANCEL__);
}
function qn(n, s, o) {
  Re.call(this, n ?? "canceled", Re.ERR_CANCELED, s, o),
    (this.name = "CanceledError");
}
I.inherits(qn, Re, { __CANCEL__: !0 });
function ap(n, s, o) {
  const a = o.config.validateStatus;
  !o.status || !a || a(o.status)
    ? n(o)
    : s(
        new Re(
          "Request failed with status code " + o.status,
          [Re.ERR_BAD_REQUEST, Re.ERR_BAD_RESPONSE][
            Math.floor(o.status / 100) - 4
          ],
          o.config,
          o.request,
          o
        )
      );
}
function s1(n) {
  const s = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return (s && s[1]) || "";
}
function l1(n, s) {
  n = n || 10;
  const o = new Array(n),
    a = new Array(n);
  let c = 0,
    f = 0,
    d;
  return (
    (s = s !== void 0 ? s : 1e3),
    function (S) {
      const E = Date.now(),
        x = a[f];
      d || (d = E), (o[c] = S), (a[c] = E);
      let O = f,
        b = 0;
      for (; O !== c; ) (b += o[O++]), (O = O % n);
      if (((c = (c + 1) % n), c === f && (f = (f + 1) % n), E - d < s)) return;
      const Y = x && E - x;
      return Y ? Math.round((b * 1e3) / Y) : void 0;
    }
  );
}
function a1(n, s) {
  let o = 0,
    a = 1e3 / s,
    c,
    f;
  const d = (E, x = Date.now()) => {
    (o = x), (c = null), f && (clearTimeout(f), (f = null)), n.apply(null, E);
  };
  return [
    (...E) => {
      const x = Date.now(),
        O = x - o;
      O >= a
        ? d(E, x)
        : ((c = E),
          f ||
            (f = setTimeout(() => {
              (f = null), d(c);
            }, a - O)));
    },
    () => c && d(c),
  ];
}
const us = (n, s, o = 3) => {
    let a = 0;
    const c = l1(50, 250);
    return a1((f) => {
      const d = f.loaded,
        h = f.lengthComputable ? f.total : void 0,
        S = d - a,
        E = c(S),
        x = d <= h;
      a = d;
      const O = {
        loaded: d,
        total: h,
        progress: h ? d / h : void 0,
        bytes: S,
        rate: E || void 0,
        estimated: E && h && x ? (h - d) / E : void 0,
        event: f,
        lengthComputable: h != null,
        [s ? "download" : "upload"]: !0,
      };
      n(O);
    }, o);
  },
  ld = (n, s) => {
    const o = n != null;
    return [(a) => s[0]({ lengthComputable: o, total: n, loaded: a }), s[1]];
  },
  ad =
    (n) =>
    (...s) =>
      I.asap(() => n(...s)),
  u1 = St.hasStandardBrowserEnv
    ? ((n, s) => (o) => (
        (o = new URL(o, St.origin)),
        n.protocol === o.protocol &&
          n.host === o.host &&
          (s || n.port === o.port)
      ))(
        new URL(St.origin),
        St.navigator && /(msie|trident)/i.test(St.navigator.userAgent)
      )
    : () => !0,
  c1 = St.hasStandardBrowserEnv
    ? {
        write(n, s, o, a, c, f) {
          const d = [n + "=" + encodeURIComponent(s)];
          I.isNumber(o) && d.push("expires=" + new Date(o).toGMTString()),
            I.isString(a) && d.push("path=" + a),
            I.isString(c) && d.push("domain=" + c),
            f === !0 && d.push("secure"),
            (document.cookie = d.join("; "));
        },
        read(n) {
          const s = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return s ? decodeURIComponent(s[3]) : null;
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
function f1(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function d1(n, s) {
  return s ? n.replace(/\/?\/$/, "") + "/" + s.replace(/^\/+/, "") : n;
}
function up(n, s, o) {
  let a = !f1(s);
  return n && (a || o == !1) ? d1(n, s) : s;
}
const ud = (n) => (n instanceof Ft ? { ...n } : n);
function an(n, s) {
  s = s || {};
  const o = {};
  function a(E, x, O, b) {
    return I.isPlainObject(E) && I.isPlainObject(x)
      ? I.merge.call({ caseless: b }, E, x)
      : I.isPlainObject(x)
      ? I.merge({}, x)
      : I.isArray(x)
      ? x.slice()
      : x;
  }
  function c(E, x, O, b) {
    if (I.isUndefined(x)) {
      if (!I.isUndefined(E)) return a(void 0, E, O, b);
    } else return a(E, x, O, b);
  }
  function f(E, x) {
    if (!I.isUndefined(x)) return a(void 0, x);
  }
  function d(E, x) {
    if (I.isUndefined(x)) {
      if (!I.isUndefined(E)) return a(void 0, E);
    } else return a(void 0, x);
  }
  function h(E, x, O) {
    if (O in s) return a(E, x);
    if (O in n) return a(void 0, E);
  }
  const S = {
    url: f,
    method: f,
    data: f,
    baseURL: d,
    transformRequest: d,
    transformResponse: d,
    paramsSerializer: d,
    timeout: d,
    timeoutMessage: d,
    withCredentials: d,
    withXSRFToken: d,
    adapter: d,
    responseType: d,
    xsrfCookieName: d,
    xsrfHeaderName: d,
    onUploadProgress: d,
    onDownloadProgress: d,
    decompress: d,
    maxContentLength: d,
    maxBodyLength: d,
    beforeRedirect: d,
    transport: d,
    httpAgent: d,
    httpsAgent: d,
    cancelToken: d,
    socketPath: d,
    responseEncoding: d,
    validateStatus: h,
    headers: (E, x, O) => c(ud(E), ud(x), O, !0),
  };
  return (
    I.forEach(Object.keys(Object.assign({}, n, s)), function (x) {
      const O = S[x] || c,
        b = O(n[x], s[x], x);
      (I.isUndefined(b) && O !== h) || (o[x] = b);
    }),
    o
  );
}
const cp = (n) => {
    const s = an({}, n);
    let {
      data: o,
      withXSRFToken: a,
      xsrfHeaderName: c,
      xsrfCookieName: f,
      headers: d,
      auth: h,
    } = s;
    (s.headers = d = Ft.from(d)),
      (s.url = ip(
        up(s.baseURL, s.url, s.allowAbsoluteUrls),
        n.params,
        n.paramsSerializer
      )),
      h &&
        d.set(
          "Authorization",
          "Basic " +
            btoa(
              (h.username || "") +
                ":" +
                (h.password ? unescape(encodeURIComponent(h.password)) : "")
            )
        );
    let S;
    if (I.isFormData(o)) {
      if (St.hasStandardBrowserEnv || St.hasStandardBrowserWebWorkerEnv)
        d.setContentType(void 0);
      else if ((S = d.getContentType()) !== !1) {
        const [E, ...x] = S
          ? S.split(";")
              .map((O) => O.trim())
              .filter(Boolean)
          : [];
        d.setContentType([E || "multipart/form-data", ...x].join("; "));
      }
    }
    if (
      St.hasStandardBrowserEnv &&
      (a && I.isFunction(a) && (a = a(s)), a || (a !== !1 && u1(s.url)))
    ) {
      const E = c && f && c1.read(f);
      E && d.set(c, E);
    }
    return s;
  },
  p1 = typeof XMLHttpRequest < "u",
  h1 =
    p1 &&
    function (n) {
      return new Promise(function (o, a) {
        const c = cp(n);
        let f = c.data;
        const d = Ft.from(c.headers).normalize();
        let { responseType: h, onUploadProgress: S, onDownloadProgress: E } = c,
          x,
          O,
          b,
          Y,
          T;
        function v() {
          Y && Y(),
            T && T(),
            c.cancelToken && c.cancelToken.unsubscribe(x),
            c.signal && c.signal.removeEventListener("abort", x);
        }
        let C = new XMLHttpRequest();
        C.open(c.method.toUpperCase(), c.url, !0), (C.timeout = c.timeout);
        function W() {
          if (!C) return;
          const D = Ft.from(
              "getAllResponseHeaders" in C && C.getAllResponseHeaders()
            ),
            L = {
              data:
                !h || h === "text" || h === "json"
                  ? C.responseText
                  : C.response,
              status: C.status,
              statusText: C.statusText,
              headers: D,
              config: n,
              request: C,
            };
          ap(
            function (ge) {
              o(ge), v();
            },
            function (ge) {
              a(ge), v();
            },
            L
          ),
            (C = null);
        }
        "onloadend" in C
          ? (C.onloadend = W)
          : (C.onreadystatechange = function () {
              !C ||
                C.readyState !== 4 ||
                (C.status === 0 &&
                  !(C.responseURL && C.responseURL.indexOf("file:") === 0)) ||
                setTimeout(W);
            }),
          (C.onabort = function () {
            C &&
              (a(new Re("Request aborted", Re.ECONNABORTED, n, C)), (C = null));
          }),
          (C.onerror = function () {
            a(new Re("Network Error", Re.ERR_NETWORK, n, C)), (C = null);
          }),
          (C.ontimeout = function () {
            let Z = c.timeout
              ? "timeout of " + c.timeout + "ms exceeded"
              : "timeout exceeded";
            const L = c.transitional || op;
            c.timeoutErrorMessage && (Z = c.timeoutErrorMessage),
              a(
                new Re(
                  Z,
                  L.clarifyTimeoutError ? Re.ETIMEDOUT : Re.ECONNABORTED,
                  n,
                  C
                )
              ),
              (C = null);
          }),
          f === void 0 && d.setContentType(null),
          "setRequestHeader" in C &&
            I.forEach(d.toJSON(), function (Z, L) {
              C.setRequestHeader(L, Z);
            }),
          I.isUndefined(c.withCredentials) ||
            (C.withCredentials = !!c.withCredentials),
          h && h !== "json" && (C.responseType = c.responseType),
          E && (([b, T] = us(E, !0)), C.addEventListener("progress", b)),
          S &&
            C.upload &&
            (([O, Y] = us(S)),
            C.upload.addEventListener("progress", O),
            C.upload.addEventListener("loadend", Y)),
          (c.cancelToken || c.signal) &&
            ((x = (D) => {
              C &&
                (a(!D || D.type ? new qn(null, n, C) : D),
                C.abort(),
                (C = null));
            }),
            c.cancelToken && c.cancelToken.subscribe(x),
            c.signal &&
              (c.signal.aborted ? x() : c.signal.addEventListener("abort", x)));
        const z = s1(c.url);
        if (z && St.protocols.indexOf(z) === -1) {
          a(new Re("Unsupported protocol " + z + ":", Re.ERR_BAD_REQUEST, n));
          return;
        }
        C.send(f || null);
      });
    },
  m1 = (n, s) => {
    const { length: o } = (n = n ? n.filter(Boolean) : []);
    if (s || o) {
      let a = new AbortController(),
        c;
      const f = function (E) {
        if (!c) {
          (c = !0), h();
          const x = E instanceof Error ? E : this.reason;
          a.abort(
            x instanceof Re ? x : new qn(x instanceof Error ? x.message : x)
          );
        }
      };
      let d =
        s &&
        setTimeout(() => {
          (d = null), f(new Re(`timeout ${s} of ms exceeded`, Re.ETIMEDOUT));
        }, s);
      const h = () => {
        n &&
          (d && clearTimeout(d),
          (d = null),
          n.forEach((E) => {
            E.unsubscribe
              ? E.unsubscribe(f)
              : E.removeEventListener("abort", f);
          }),
          (n = null));
      };
      n.forEach((E) => E.addEventListener("abort", f));
      const { signal: S } = a;
      return (S.unsubscribe = () => I.asap(h)), S;
    }
  },
  g1 = function* (n, s) {
    let o = n.byteLength;
    if (o < s) {
      yield n;
      return;
    }
    let a = 0,
      c;
    for (; a < o; ) (c = a + s), yield n.slice(a, c), (a = c);
  },
  y1 = async function* (n, s) {
    for await (const o of v1(n)) yield* g1(o, s);
  },
  v1 = async function* (n) {
    if (n[Symbol.asyncIterator]) {
      yield* n;
      return;
    }
    const s = n.getReader();
    try {
      for (;;) {
        const { done: o, value: a } = await s.read();
        if (o) break;
        yield a;
      }
    } finally {
      await s.cancel();
    }
  },
  cd = (n, s, o, a) => {
    const c = y1(n, s);
    let f = 0,
      d,
      h = (S) => {
        d || ((d = !0), a && a(S));
      };
    return new ReadableStream(
      {
        async pull(S) {
          try {
            const { done: E, value: x } = await c.next();
            if (E) {
              h(), S.close();
              return;
            }
            let O = x.byteLength;
            if (o) {
              let b = (f += O);
              o(b);
            }
            S.enqueue(new Uint8Array(x));
          } catch (E) {
            throw (h(E), E);
          }
        },
        cancel(S) {
          return h(S), c.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Ts =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  fp = Ts && typeof ReadableStream == "function",
  w1 =
    Ts &&
    (typeof TextEncoder == "function"
      ? (
          (n) => (s) =>
            n.encode(s)
        )(new TextEncoder())
      : async (n) => new Uint8Array(await new Response(n).arrayBuffer())),
  dp = (n, ...s) => {
    try {
      return !!n(...s);
    } catch {
      return !1;
    }
  },
  x1 =
    fp &&
    dp(() => {
      let n = !1;
      const s = new Request(St.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (n = !0), "half";
        },
      }).headers.has("Content-Type");
      return n && !s;
    }),
  fd = 64 * 1024,
  ba = fp && dp(() => I.isReadableStream(new Response("").body)),
  cs = { stream: ba && ((n) => n.body) };
Ts &&
  ((n) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((s) => {
      !cs[s] &&
        (cs[s] = I.isFunction(n[s])
          ? (o) => o[s]()
          : (o, a) => {
              throw new Re(
                `Response type '${s}' is not supported`,
                Re.ERR_NOT_SUPPORT,
                a
              );
            });
    });
  })(new Response());
const S1 = async (n) => {
    if (n == null) return 0;
    if (I.isBlob(n)) return n.size;
    if (I.isSpecCompliantForm(n))
      return (
        await new Request(St.origin, { method: "POST", body: n }).arrayBuffer()
      ).byteLength;
    if (I.isArrayBufferView(n) || I.isArrayBuffer(n)) return n.byteLength;
    if ((I.isURLSearchParams(n) && (n = n + ""), I.isString(n)))
      return (await w1(n)).byteLength;
  },
  k1 = async (n, s) => {
    const o = I.toFiniteNumber(n.getContentLength());
    return o ?? S1(s);
  },
  E1 =
    Ts &&
    (async (n) => {
      let {
        url: s,
        method: o,
        data: a,
        signal: c,
        cancelToken: f,
        timeout: d,
        onDownloadProgress: h,
        onUploadProgress: S,
        responseType: E,
        headers: x,
        withCredentials: O = "same-origin",
        fetchOptions: b,
      } = cp(n);
      E = E ? (E + "").toLowerCase() : "text";
      let Y = m1([c, f && f.toAbortSignal()], d),
        T;
      const v =
        Y &&
        Y.unsubscribe &&
        (() => {
          Y.unsubscribe();
        });
      let C;
      try {
        if (
          S &&
          x1 &&
          o !== "get" &&
          o !== "head" &&
          (C = await k1(x, a)) !== 0
        ) {
          let L = new Request(s, { method: "POST", body: a, duplex: "half" }),
            he;
          if (
            (I.isFormData(a) &&
              (he = L.headers.get("content-type")) &&
              x.setContentType(he),
            L.body)
          ) {
            const [ge, xe] = ld(C, us(ad(S)));
            a = cd(L.body, fd, ge, xe);
          }
        }
        I.isString(O) || (O = O ? "include" : "omit");
        const W = "credentials" in Request.prototype;
        T = new Request(s, {
          ...b,
          signal: Y,
          method: o.toUpperCase(),
          headers: x.normalize().toJSON(),
          body: a,
          duplex: "half",
          credentials: W ? O : void 0,
        });
        let z = await fetch(T, b);
        const D = ba && (E === "stream" || E === "response");
        if (ba && (h || (D && v))) {
          const L = {};
          ["status", "statusText", "headers"].forEach((te) => {
            L[te] = z[te];
          });
          const he = I.toFiniteNumber(z.headers.get("content-length")),
            [ge, xe] = (h && ld(he, us(ad(h), !0))) || [];
          z = new Response(
            cd(z.body, fd, ge, () => {
              xe && xe(), v && v();
            }),
            L
          );
        }
        E = E || "text";
        let Z = await cs[I.findKey(cs, E) || "text"](z, n);
        return (
          !D && v && v(),
          await new Promise((L, he) => {
            ap(L, he, {
              data: Z,
              headers: Ft.from(z.headers),
              status: z.status,
              statusText: z.statusText,
              config: n,
              request: T,
            });
          })
        );
      } catch (W) {
        throw (
          (v && v(),
          W && W.name === "TypeError" && /Load failed|fetch/i.test(W.message)
            ? Object.assign(new Re("Network Error", Re.ERR_NETWORK, n, T), {
                cause: W.cause || W,
              })
            : Re.from(W, W && W.code, n, T))
        );
      }
    }),
  Ia = { http: M0, xhr: h1, fetch: E1 };
I.forEach(Ia, (n, s) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: s });
    } catch {}
    Object.defineProperty(n, "adapterName", { value: s });
  }
});
const dd = (n) => `- ${n}`,
  C1 = (n) => I.isFunction(n) || n === null || n === !1,
  pp = {
    getAdapter: (n) => {
      n = I.isArray(n) ? n : [n];
      const { length: s } = n;
      let o, a;
      const c = {};
      for (let f = 0; f < s; f++) {
        o = n[f];
        let d;
        if (
          ((a = o),
          !C1(o) && ((a = Ia[(d = String(o)).toLowerCase()]), a === void 0))
        )
          throw new Re(`Unknown adapter '${d}'`);
        if (a) break;
        c[d || "#" + f] = a;
      }
      if (!a) {
        const f = Object.entries(c).map(
          ([h, S]) =>
            `adapter ${h} ` +
            (S === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let d = s
          ? f.length > 1
            ? `since :
` +
              f.map(dd).join(`
`)
            : " " + dd(f[0])
          : "as no adapter specified";
        throw new Re(
          "There is no suitable adapter to dispatch the request " + d,
          "ERR_NOT_SUPPORT"
        );
      }
      return a;
    },
    adapters: Ia,
  };
function Ea(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new qn(null, n);
}
function pd(n) {
  return (
    Ea(n),
    (n.headers = Ft.from(n.headers)),
    (n.data = ka.call(n, n.transformRequest)),
    ["post", "put", "patch"].indexOf(n.method) !== -1 &&
      n.headers.setContentType("application/x-www-form-urlencoded", !1),
    pp
      .getAdapter(n.adapter || Ui.adapter)(n)
      .then(
        function (a) {
          return (
            Ea(n),
            (a.data = ka.call(n, n.transformResponse, a)),
            (a.headers = Ft.from(a.headers)),
            a
          );
        },
        function (a) {
          return (
            lp(a) ||
              (Ea(n),
              a &&
                a.response &&
                ((a.response.data = ka.call(
                  n,
                  n.transformResponse,
                  a.response
                )),
                (a.response.headers = Ft.from(a.response.headers)))),
            Promise.reject(a)
          );
        }
      )
  );
}
const hp = "1.10.0",
  Rs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (n, s) => {
    Rs[n] = function (a) {
      return typeof a === n || "a" + (s < 1 ? "n " : " ") + n;
    };
  }
);
const hd = {};
Rs.transitional = function (s, o, a) {
  function c(f, d) {
    return (
      "[Axios v" +
      hp +
      "] Transitional option '" +
      f +
      "'" +
      d +
      (a ? ". " + a : "")
    );
  }
  return (f, d, h) => {
    if (s === !1)
      throw new Re(
        c(d, " has been removed" + (o ? " in " + o : "")),
        Re.ERR_DEPRECATED
      );
    return (
      o &&
        !hd[d] &&
        ((hd[d] = !0),
        console.warn(
          c(
            d,
            " has been deprecated since v" +
              o +
              " and will be removed in the near future"
          )
        )),
      s ? s(f, d, h) : !0
    );
  };
};
Rs.spelling = function (s) {
  return (o, a) => (console.warn(`${a} is likely a misspelling of ${s}`), !0);
};
function _1(n, s, o) {
  if (typeof n != "object")
    throw new Re("options must be an object", Re.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(n);
  let c = a.length;
  for (; c-- > 0; ) {
    const f = a[c],
      d = s[f];
    if (d) {
      const h = n[f],
        S = h === void 0 || d(h, f, n);
      if (S !== !0)
        throw new Re("option " + f + " must be " + S, Re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0) throw new Re("Unknown option " + f, Re.ERR_BAD_OPTION);
  }
}
const ss = { assertOptions: _1, validators: Rs },
  dr = ss.validators;
let ln = class {
  constructor(s) {
    (this.defaults = s || {}),
      (this.interceptors = { request: new od(), response: new od() });
  }
  async request(s, o) {
    try {
      return await this._request(s, o);
    } catch (a) {
      if (a instanceof Error) {
        let c = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(c)
          : (c = new Error());
        const f = c.stack ? c.stack.replace(/^.+\n/, "") : "";
        try {
          a.stack
            ? f &&
              !String(a.stack).endsWith(f.replace(/^.+\n.+\n/, "")) &&
              (a.stack +=
                `
` + f)
            : (a.stack = f);
        } catch {}
      }
      throw a;
    }
  }
  _request(s, o) {
    typeof s == "string" ? ((o = o || {}), (o.url = s)) : (o = s || {}),
      (o = an(this.defaults, o));
    const { transitional: a, paramsSerializer: c, headers: f } = o;
    a !== void 0 &&
      ss.assertOptions(
        a,
        {
          silentJSONParsing: dr.transitional(dr.boolean),
          forcedJSONParsing: dr.transitional(dr.boolean),
          clarifyTimeoutError: dr.transitional(dr.boolean),
        },
        !1
      ),
      c != null &&
        (I.isFunction(c)
          ? (o.paramsSerializer = { serialize: c })
          : ss.assertOptions(
              c,
              { encode: dr.function, serialize: dr.function },
              !0
            )),
      o.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (o.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (o.allowAbsoluteUrls = !0)),
      ss.assertOptions(
        o,
        {
          baseUrl: dr.spelling("baseURL"),
          withXsrfToken: dr.spelling("withXSRFToken"),
        },
        !0
      ),
      (o.method = (o.method || this.defaults.method || "get").toLowerCase());
    let d = f && I.merge(f.common, f[o.method]);
    f &&
      I.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (T) => {
          delete f[T];
        }
      ),
      (o.headers = Ft.concat(d, f));
    const h = [];
    let S = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(o) === !1) ||
        ((S = S && v.synchronous), h.unshift(v.fulfilled, v.rejected));
    });
    const E = [];
    this.interceptors.response.forEach(function (v) {
      E.push(v.fulfilled, v.rejected);
    });
    let x,
      O = 0,
      b;
    if (!S) {
      const T = [pd.bind(this), void 0];
      for (
        T.unshift.apply(T, h),
          T.push.apply(T, E),
          b = T.length,
          x = Promise.resolve(o);
        O < b;

      )
        x = x.then(T[O++], T[O++]);
      return x;
    }
    b = h.length;
    let Y = o;
    for (O = 0; O < b; ) {
      const T = h[O++],
        v = h[O++];
      try {
        Y = T(Y);
      } catch (C) {
        v.call(this, C);
        break;
      }
    }
    try {
      x = pd.call(this, Y);
    } catch (T) {
      return Promise.reject(T);
    }
    for (O = 0, b = E.length; O < b; ) x = x.then(E[O++], E[O++]);
    return x;
  }
  getUri(s) {
    s = an(this.defaults, s);
    const o = up(s.baseURL, s.url, s.allowAbsoluteUrls);
    return ip(o, s.params, s.paramsSerializer);
  }
};
I.forEach(["delete", "get", "head", "options"], function (s) {
  ln.prototype[s] = function (o, a) {
    return this.request(
      an(a || {}, { method: s, url: o, data: (a || {}).data })
    );
  };
});
I.forEach(["post", "put", "patch"], function (s) {
  function o(a) {
    return function (f, d, h) {
      return this.request(
        an(h || {}, {
          method: s,
          headers: a ? { "Content-Type": "multipart/form-data" } : {},
          url: f,
          data: d,
        })
      );
    };
  }
  (ln.prototype[s] = o()), (ln.prototype[s + "Form"] = o(!0));
});
let T1 = class mp {
  constructor(s) {
    if (typeof s != "function")
      throw new TypeError("executor must be a function.");
    let o;
    this.promise = new Promise(function (f) {
      o = f;
    });
    const a = this;
    this.promise.then((c) => {
      if (!a._listeners) return;
      let f = a._listeners.length;
      for (; f-- > 0; ) a._listeners[f](c);
      a._listeners = null;
    }),
      (this.promise.then = (c) => {
        let f;
        const d = new Promise((h) => {
          a.subscribe(h), (f = h);
        }).then(c);
        return (
          (d.cancel = function () {
            a.unsubscribe(f);
          }),
          d
        );
      }),
      s(function (f, d, h) {
        a.reason || ((a.reason = new qn(f, d, h)), o(a.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(s) {
    if (this.reason) {
      s(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(s) : (this._listeners = [s]);
  }
  unsubscribe(s) {
    if (!this._listeners) return;
    const o = this._listeners.indexOf(s);
    o !== -1 && this._listeners.splice(o, 1);
  }
  toAbortSignal() {
    const s = new AbortController(),
      o = (a) => {
        s.abort(a);
      };
    return (
      this.subscribe(o),
      (s.signal.unsubscribe = () => this.unsubscribe(o)),
      s.signal
    );
  }
  static source() {
    let s;
    return {
      token: new mp(function (c) {
        s = c;
      }),
      cancel: s,
    };
  }
};
function R1(n) {
  return function (o) {
    return n.apply(null, o);
  };
}
function P1(n) {
  return I.isObject(n) && n.isAxiosError === !0;
}
const Ma = {
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
Object.entries(Ma).forEach(([n, s]) => {
  Ma[s] = n;
});
function gp(n) {
  const s = new ln(n),
    o = Kd(ln.prototype.request, s);
  return (
    I.extend(o, ln.prototype, s, { allOwnKeys: !0 }),
    I.extend(o, s, null, { allOwnKeys: !0 }),
    (o.create = function (c) {
      return gp(an(n, c));
    }),
    o
  );
}
const qe = gp(Ui);
qe.Axios = ln;
qe.CanceledError = qn;
qe.CancelToken = T1;
qe.isCancel = lp;
qe.VERSION = hp;
qe.toFormData = _s;
qe.AxiosError = Re;
qe.Cancel = qe.CanceledError;
qe.all = function (s) {
  return Promise.all(s);
};
qe.spread = R1;
qe.isAxiosError = P1;
qe.mergeConfig = an;
qe.AxiosHeaders = Ft;
qe.formToJSON = (n) => sp(I.isHTMLForm(n) ? new FormData(n) : n);
qe.getAdapter = pp.getAdapter;
qe.HttpStatusCode = Ma;
qe.default = qe;
const {
  Axios: Fv,
  AxiosError: bv,
  CanceledError: Iv,
  isCancel: Mv,
  CancelToken: $v,
  VERSION: Dv,
  all: Vv,
  Cancel: Bv,
  isAxiosError: Uv,
  spread: Hv,
  toFormData: Wv,
  AxiosHeaders: Kv,
  HttpStatusCode: Qv,
  formToJSON: qv,
  getAdapter: Yv,
  mergeConfig: Gv,
} = qe;
var yp = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  md = Te.createContext && Te.createContext(yp),
  O1 = ["attr", "size", "title"];
function A1(n, s) {
  if (n == null) return {};
  var o = j1(n, s),
    a,
    c;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(n);
    for (c = 0; c < f.length; c++)
      (a = f[c]),
        !(s.indexOf(a) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(n, a) &&
          (o[a] = n[a]);
  }
  return o;
}
function j1(n, s) {
  if (n == null) return {};
  var o = {};
  for (var a in n)
    if (Object.prototype.hasOwnProperty.call(n, a)) {
      if (s.indexOf(a) >= 0) continue;
      o[a] = n[a];
    }
  return o;
}
function fs() {
  return (
    (fs = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var s = 1; s < arguments.length; s++) {
            var o = arguments[s];
            for (var a in o)
              Object.prototype.hasOwnProperty.call(o, a) && (n[a] = o[a]);
          }
          return n;
        }),
    fs.apply(this, arguments)
  );
}
function gd(n, s) {
  var o = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    s &&
      (a = a.filter(function (c) {
        return Object.getOwnPropertyDescriptor(n, c).enumerable;
      })),
      o.push.apply(o, a);
  }
  return o;
}
function ds(n) {
  for (var s = 1; s < arguments.length; s++) {
    var o = arguments[s] != null ? arguments[s] : {};
    s % 2
      ? gd(Object(o), !0).forEach(function (a) {
          N1(n, a, o[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
      : gd(Object(o)).forEach(function (a) {
          Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(o, a));
        });
  }
  return n;
}
function N1(n, s, o) {
  return (
    (s = z1(s)),
    s in n
      ? Object.defineProperty(n, s, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[s] = o),
    n
  );
}
function z1(n) {
  var s = L1(n, "string");
  return typeof s == "symbol" ? s : s + "";
}
function L1(n, s) {
  if (typeof n != "object" || !n) return n;
  var o = n[Symbol.toPrimitive];
  if (o !== void 0) {
    var a = o.call(n, s);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (s === "string" ? String : Number)(n);
}
function vp(n) {
  return (
    n &&
    n.map((s, o) =>
      Te.createElement(s.tag, ds({ key: o }, s.attr), vp(s.child))
    )
  );
}
function Hi(n) {
  return (s) =>
    Te.createElement(F1, fs({ attr: ds({}, n.attr) }, s), vp(n.child));
}
function F1(n) {
  var s = (o) => {
    var { attr: a, size: c, title: f } = n,
      d = A1(n, O1),
      h = c || o.size || "1em",
      S;
    return (
      o.className && (S = o.className),
      n.className && (S = (S ? S + " " : "") + n.className),
      Te.createElement(
        "svg",
        fs(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          o.attr,
          a,
          d,
          {
            className: S,
            style: ds(ds({ color: n.color || o.color }, o.style), n.style),
            height: h,
            width: h,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        f && Te.createElement("title", null, f),
        n.children
      )
    );
  };
  return md !== void 0
    ? Te.createElement(md.Consumer, null, (o) => s(o))
    : s(yp);
}
function b1(n) {
  return Hi({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" },
        child: [],
      },
      { tag: "path", attr: { d: "M13.73 21a2 2 0 0 1-3.46 0" }, child: [] },
    ],
  })(n);
}
function I1(n) {
  return Hi({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "line",
        attr: { x1: "12", y1: "2", x2: "12", y2: "6" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "12", y1: "18", x2: "12", y2: "22" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "4.93", y1: "4.93", x2: "7.76", y2: "7.76" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "16.24", y1: "16.24", x2: "19.07", y2: "19.07" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "2", y1: "12", x2: "6", y2: "12" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "18", y1: "12", x2: "22", y2: "12" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "4.93", y1: "19.07", x2: "7.76", y2: "16.24" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "16.24", y1: "7.76", x2: "19.07", y2: "4.93" },
        child: [],
      },
    ],
  })(n);
}
function ps(n) {
  return Hi({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "circle", attr: { cx: "11", cy: "11", r: "8" }, child: [] },
      {
        tag: "line",
        attr: { x1: "21", y1: "21", x2: "16.65", y2: "16.65" },
        child: [],
      },
    ],
  })(n);
}
function wp(n) {
  return Hi({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "line",
        attr: { x1: "18", y1: "6", x2: "6", y2: "18" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "6", y1: "6", x2: "18", y2: "18" },
        child: [],
      },
    ],
  })(n);
}
var Wi = (n) => n.type === "checkbox",
  sn = (n) => n instanceof Date,
  _t = (n) => n == null;
const xp = (n) => typeof n == "object";
var st = (n) => !_t(n) && !Array.isArray(n) && xp(n) && !sn(n),
  Sp = (n) =>
    st(n) && n.target ? (Wi(n.target) ? n.target.checked : n.target.value) : n,
  M1 = (n) => n.substring(0, n.search(/\.\d+(\.|$)/)) || n,
  kp = (n, s) => n.has(M1(s)),
  $1 = (n) => {
    const s = n.constructor && n.constructor.prototype;
    return st(s) && s.hasOwnProperty("isPrototypeOf");
  },
  Ya =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function ft(n) {
  let s;
  const o = Array.isArray(n),
    a = typeof FileList < "u" ? n instanceof FileList : !1;
  if (n instanceof Date) s = new Date(n);
  else if (!(Ya && (n instanceof Blob || a)) && (o || st(n)))
    if (((s = o ? [] : {}), !o && !$1(n))) s = n;
    else for (const c in n) n.hasOwnProperty(c) && (s[c] = ft(n[c]));
  else return n;
  return s;
}
var Ps = (n) => /^\w*$/.test(n),
  ot = (n) => n === void 0,
  Ga = (n) => (Array.isArray(n) ? n.filter(Boolean) : []),
  Xa = (n) => Ga(n.replace(/["|']|\]/g, "").split(/\.|\[/)),
  oe = (n, s, o) => {
    if (!s || !st(n)) return o;
    const a = (Ps(s) ? [s] : Xa(s)).reduce((c, f) => (_t(c) ? c : c[f]), n);
    return ot(a) || a === n ? (ot(n[s]) ? o : n[s]) : a;
  },
  Dt = (n) => typeof n == "boolean",
  We = (n, s, o) => {
    let a = -1;
    const c = Ps(s) ? [s] : Xa(s),
      f = c.length,
      d = f - 1;
    for (; ++a < f; ) {
      const h = c[a];
      let S = o;
      if (a !== d) {
        const E = n[h];
        S = st(E) || Array.isArray(E) ? E : isNaN(+c[a + 1]) ? {} : [];
      }
      if (h === "__proto__" || h === "constructor" || h === "prototype") return;
      (n[h] = S), (n = n[h]);
    }
  };
const hs = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  rr = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Er = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  Ep = Te.createContext(null);
Ep.displayName = "HookFormContext";
const Ja = () => Te.useContext(Ep);
var Cp = (n, s, o, a = !0) => {
  const c = { defaultValues: s._defaultValues };
  for (const f in n)
    Object.defineProperty(c, f, {
      get: () => {
        const d = f;
        return (
          s._proxyFormState[d] !== rr.all &&
            (s._proxyFormState[d] = !a || rr.all),
          o && (o[d] = !0),
          n[d]
        );
      },
    });
  return c;
};
const Za = typeof window < "u" ? Ie.useLayoutEffect : Ie.useEffect;
function D1(n) {
  const s = Ja(),
    { control: o = s.control, disabled: a, name: c, exact: f } = n || {},
    [d, h] = Te.useState(o._formState),
    S = Te.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    });
  return (
    Za(
      () =>
        o._subscribe({
          name: c,
          formState: S.current,
          exact: f,
          callback: (E) => {
            !a && h({ ...o._formState, ...E });
          },
        }),
      [c, a, f]
    ),
    Te.useEffect(() => {
      S.current.isValid && o._setValid(!0);
    }, [o]),
    Te.useMemo(() => Cp(d, o, S.current, !1), [d, o])
  );
}
var pr = (n) => typeof n == "string",
  _p = (n, s, o, a, c) =>
    pr(n)
      ? (a && s.watch.add(n), oe(o, n, c))
      : Array.isArray(n)
      ? n.map((f) => (a && s.watch.add(f), oe(o, f)))
      : (a && (s.watchAll = !0), o);
function V1(n) {
  const s = Ja(),
    {
      control: o = s.control,
      name: a,
      defaultValue: c,
      disabled: f,
      exact: d,
    } = n || {},
    h = Te.useRef(c),
    [S, E] = Te.useState(o._getWatch(a, h.current));
  return (
    Za(
      () =>
        o._subscribe({
          name: a,
          formState: { values: !0 },
          exact: d,
          callback: (x) =>
            !f && E(_p(a, o._names, x.values || o._formValues, !1, h.current)),
        }),
      [a, o, f, d]
    ),
    Te.useEffect(() => o._removeUnmounted()),
    S
  );
}
function B1(n) {
  const s = Ja(),
    { name: o, disabled: a, control: c = s.control, shouldUnregister: f } = n,
    d = kp(c._names.array, o),
    h = V1({
      control: c,
      name: o,
      defaultValue: oe(
        c._formValues,
        o,
        oe(c._defaultValues, o, n.defaultValue)
      ),
      exact: !0,
    }),
    S = D1({ control: c, name: o, exact: !0 }),
    E = Te.useRef(n),
    x = Te.useRef(
      c.register(o, {
        ...n.rules,
        value: h,
        ...(Dt(n.disabled) ? { disabled: n.disabled } : {}),
      })
    ),
    O = Te.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!oe(S.errors, o) },
            isDirty: { enumerable: !0, get: () => !!oe(S.dirtyFields, o) },
            isTouched: { enumerable: !0, get: () => !!oe(S.touchedFields, o) },
            isValidating: {
              enumerable: !0,
              get: () => !!oe(S.validatingFields, o),
            },
            error: { enumerable: !0, get: () => oe(S.errors, o) },
          }
        ),
      [S, o]
    ),
    b = Te.useCallback(
      (C) =>
        x.current.onChange({
          target: { value: Sp(C), name: o },
          type: hs.CHANGE,
        }),
      [o]
    ),
    Y = Te.useCallback(
      () =>
        x.current.onBlur({
          target: { value: oe(c._formValues, o), name: o },
          type: hs.BLUR,
        }),
      [o, c._formValues]
    ),
    T = Te.useCallback(
      (C) => {
        const W = oe(c._fields, o);
        W &&
          C &&
          (W._f.ref = {
            focus: () => C.focus && C.focus(),
            select: () => C.select && C.select(),
            setCustomValidity: (z) => C.setCustomValidity(z),
            reportValidity: () => C.reportValidity(),
          });
      },
      [c._fields, o]
    ),
    v = Te.useMemo(
      () => ({
        name: o,
        value: h,
        ...(Dt(a) || S.disabled ? { disabled: S.disabled || a } : {}),
        onChange: b,
        onBlur: Y,
        ref: T,
      }),
      [o, a, S.disabled, b, Y, T, h]
    );
  return (
    Te.useEffect(() => {
      const C = c._options.shouldUnregister || f;
      c.register(o, {
        ...E.current.rules,
        ...(Dt(E.current.disabled) ? { disabled: E.current.disabled } : {}),
      });
      const W = (z, D) => {
        const Z = oe(c._fields, z);
        Z && Z._f && (Z._f.mount = D);
      };
      if ((W(o, !0), C)) {
        const z = ft(oe(c._options.defaultValues, o));
        We(c._defaultValues, o, z),
          ot(oe(c._formValues, o)) && We(c._formValues, o, z);
      }
      return (
        !d && c.register(o),
        () => {
          (d ? C && !c._state.action : C) ? c.unregister(o) : W(o, !1);
        }
      );
    }, [o, c, d, f]),
    Te.useEffect(() => {
      c._setDisabledField({ disabled: a, name: o });
    }, [a, o, c]),
    Te.useMemo(() => ({ field: v, formState: S, fieldState: O }), [v, S, O])
  );
}
const bi = (n) => n.render(B1(n));
var U1 = (n, s, o, a, c) =>
    s
      ? {
          ...o[n],
          types: { ...(o[n] && o[n].types ? o[n].types : {}), [a]: c || !0 },
        }
      : {},
  Ii = (n) => (Array.isArray(n) ? n : [n]),
  yd = () => {
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
  $a = (n) => _t(n) || !xp(n);
function Ur(n, s, o = new WeakSet()) {
  if ($a(n) || $a(s)) return n === s;
  if (sn(n) && sn(s)) return n.getTime() === s.getTime();
  const a = Object.keys(n),
    c = Object.keys(s);
  if (a.length !== c.length) return !1;
  if (o.has(n) || o.has(s)) return !0;
  o.add(n), o.add(s);
  for (const f of a) {
    const d = n[f];
    if (!c.includes(f)) return !1;
    if (f !== "ref") {
      const h = s[f];
      if (
        (sn(d) && sn(h)) ||
        (st(d) && st(h)) ||
        (Array.isArray(d) && Array.isArray(h))
          ? !Ur(d, h, o)
          : d !== h
      )
        return !1;
    }
  }
  return !0;
}
var zt = (n) => st(n) && !Object.keys(n).length,
  eu = (n) => n.type === "file",
  nr = (n) => typeof n == "function",
  ms = (n) => {
    if (!Ya) return !1;
    const s = n ? n.ownerDocument : 0;
    return (
      n instanceof
      (s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement)
    );
  },
  Tp = (n) => n.type === "select-multiple",
  tu = (n) => n.type === "radio",
  H1 = (n) => tu(n) || Wi(n),
  Ca = (n) => ms(n) && n.isConnected;
function W1(n, s) {
  const o = s.slice(0, -1).length;
  let a = 0;
  for (; a < o; ) n = ot(n) ? a++ : n[s[a++]];
  return n;
}
function K1(n) {
  for (const s in n) if (n.hasOwnProperty(s) && !ot(n[s])) return !1;
  return !0;
}
function at(n, s) {
  const o = Array.isArray(s) ? s : Ps(s) ? [s] : Xa(s),
    a = o.length === 1 ? n : W1(n, o),
    c = o.length - 1,
    f = o[c];
  return (
    a && delete a[f],
    c !== 0 &&
      ((st(a) && zt(a)) || (Array.isArray(a) && K1(a))) &&
      at(n, o.slice(0, -1)),
    n
  );
}
var Rp = (n) => {
  for (const s in n) if (nr(n[s])) return !0;
  return !1;
};
function gs(n, s = {}) {
  const o = Array.isArray(n);
  if (st(n) || o)
    for (const a in n)
      Array.isArray(n[a]) || (st(n[a]) && !Rp(n[a]))
        ? ((s[a] = Array.isArray(n[a]) ? [] : {}), gs(n[a], s[a]))
        : _t(n[a]) || (s[a] = !0);
  return s;
}
function Pp(n, s, o) {
  const a = Array.isArray(n);
  if (st(n) || a)
    for (const c in n)
      Array.isArray(n[c]) || (st(n[c]) && !Rp(n[c]))
        ? ot(s) || $a(o[c])
          ? (o[c] = Array.isArray(n[c]) ? gs(n[c], []) : { ...gs(n[c]) })
          : Pp(n[c], _t(s) ? {} : s[c], o[c])
        : (o[c] = !Ur(n[c], s[c]));
  return o;
}
var Li = (n, s) => Pp(n, s, gs(s));
const vd = { value: !1, isValid: !1 },
  wd = { value: !0, isValid: !0 };
var Op = (n) => {
    if (Array.isArray(n)) {
      if (n.length > 1) {
        const s = n
          .filter((o) => o && o.checked && !o.disabled)
          .map((o) => o.value);
        return { value: s, isValid: !!s.length };
      }
      return n[0].checked && !n[0].disabled
        ? n[0].attributes && !ot(n[0].attributes.value)
          ? ot(n[0].value) || n[0].value === ""
            ? wd
            : { value: n[0].value, isValid: !0 }
          : wd
        : vd;
    }
    return vd;
  },
  Ap = (n, { valueAsNumber: s, valueAsDate: o, setValueAs: a }) =>
    ot(n)
      ? n
      : s
      ? n === ""
        ? NaN
        : n && +n
      : o && pr(n)
      ? new Date(n)
      : a
      ? a(n)
      : n;
const xd = { isValid: !1, value: null };
var jp = (n) =>
  Array.isArray(n)
    ? n.reduce(
        (s, o) =>
          o && o.checked && !o.disabled ? { isValid: !0, value: o.value } : s,
        xd
      )
    : xd;
function Sd(n) {
  const s = n.ref;
  return eu(s)
    ? s.files
    : tu(s)
    ? jp(n.refs).value
    : Tp(s)
    ? [...s.selectedOptions].map(({ value: o }) => o)
    : Wi(s)
    ? Op(n.refs).value
    : Ap(ot(s.value) ? n.ref.value : s.value, n);
}
var Q1 = (n, s, o, a) => {
    const c = {};
    for (const f of n) {
      const d = oe(s, f);
      d && We(c, f, d._f);
    }
    return {
      criteriaMode: o,
      names: [...n],
      fields: c,
      shouldUseNativeValidation: a,
    };
  },
  ys = (n) => n instanceof RegExp,
  Fi = (n) =>
    ot(n)
      ? n
      : ys(n)
      ? n.source
      : st(n)
      ? ys(n.value)
        ? n.value.source
        : n.value
      : n,
  kd = (n) => ({
    isOnSubmit: !n || n === rr.onSubmit,
    isOnBlur: n === rr.onBlur,
    isOnChange: n === rr.onChange,
    isOnAll: n === rr.all,
    isOnTouch: n === rr.onTouched,
  });
const Ed = "AsyncFunction";
var q1 = (n) =>
    !!n &&
    !!n.validate &&
    !!(
      (nr(n.validate) && n.validate.constructor.name === Ed) ||
      (st(n.validate) &&
        Object.values(n.validate).find((s) => s.constructor.name === Ed))
    ),
  Y1 = (n) =>
    n.mount &&
    (n.required ||
      n.min ||
      n.max ||
      n.maxLength ||
      n.minLength ||
      n.pattern ||
      n.validate),
  Cd = (n, s, o) =>
    !o &&
    (s.watchAll ||
      s.watch.has(n) ||
      [...s.watch].some(
        (a) => n.startsWith(a) && /^\.\w+/.test(n.slice(a.length))
      ));
const Mi = (n, s, o, a) => {
  for (const c of o || Object.keys(n)) {
    const f = oe(n, c);
    if (f) {
      const { _f: d, ...h } = f;
      if (d) {
        if (d.refs && d.refs[0] && s(d.refs[0], c) && !a) return !0;
        if (d.ref && s(d.ref, d.name) && !a) return !0;
        if (Mi(h, s)) break;
      } else if (st(h) && Mi(h, s)) break;
    }
  }
};
function _d(n, s, o) {
  const a = oe(n, o);
  if (a || Ps(o)) return { error: a, name: o };
  const c = o.split(".");
  for (; c.length; ) {
    const f = c.join("."),
      d = oe(s, f),
      h = oe(n, f);
    if (d && !Array.isArray(d) && o !== f) return { name: o };
    if (h && h.type) return { name: f, error: h };
    if (h && h.root && h.root.type) return { name: `${f}.root`, error: h.root };
    c.pop();
  }
  return { name: o };
}
var G1 = (n, s, o, a) => {
    o(n);
    const { name: c, ...f } = n;
    return (
      zt(f) ||
      Object.keys(f).length >= Object.keys(s).length ||
      Object.keys(f).find((d) => s[d] === (!a || rr.all))
    );
  },
  X1 = (n, s, o) =>
    !n ||
    !s ||
    n === s ||
    Ii(n).some((a) => a && (o ? a === s : a.startsWith(s) || s.startsWith(a))),
  J1 = (n, s, o, a, c) =>
    c.isOnAll
      ? !1
      : !o && c.isOnTouch
      ? !(s || n)
      : (o ? a.isOnBlur : c.isOnBlur)
      ? !n
      : (o ? a.isOnChange : c.isOnChange)
      ? n
      : !0,
  Z1 = (n, s) => !Ga(oe(n, s)).length && at(n, s),
  eg = (n, s, o) => {
    const a = Ii(oe(n, o));
    return We(a, "root", s[o]), We(n, o, a), n;
  },
  ls = (n) => pr(n);
function Td(n, s, o = "validate") {
  if (ls(n) || (Array.isArray(n) && n.every(ls)) || (Dt(n) && !n))
    return { type: o, message: ls(n) ? n : "", ref: s };
}
var Mn = (n) => (st(n) && !ys(n) ? n : { value: n, message: "" }),
  Rd = async (n, s, o, a, c, f) => {
    const {
        ref: d,
        refs: h,
        required: S,
        maxLength: E,
        minLength: x,
        min: O,
        max: b,
        pattern: Y,
        validate: T,
        name: v,
        valueAsNumber: C,
        mount: W,
      } = n._f,
      z = oe(o, v);
    if (!W || s.has(v)) return {};
    const D = h ? h[0] : d,
      Z = (ie) => {
        c &&
          D.reportValidity &&
          (D.setCustomValidity(Dt(ie) ? "" : ie || ""), D.reportValidity());
      },
      L = {},
      he = tu(d),
      ge = Wi(d),
      xe = he || ge,
      te =
        ((C || eu(d)) && ot(d.value) && ot(z)) ||
        (ms(d) && d.value === "") ||
        z === "" ||
        (Array.isArray(z) && !z.length),
      Ae = U1.bind(null, v, a, L),
      Le = (ie, ae, _e, Pe = Er.maxLength, Me = Er.minLength) => {
        const Ce = ie ? ae : _e;
        L[v] = {
          type: ie ? Pe : Me,
          message: Ce,
          ref: d,
          ...Ae(ie ? Pe : Me, Ce),
        };
      };
    if (
      f
        ? !Array.isArray(z) || !z.length
        : S &&
          ((!xe && (te || _t(z))) ||
            (Dt(z) && !z) ||
            (ge && !Op(h).isValid) ||
            (he && !jp(h).isValid))
    ) {
      const { value: ie, message: ae } = ls(S)
        ? { value: !!S, message: S }
        : Mn(S);
      if (
        ie &&
        ((L[v] = {
          type: Er.required,
          message: ae,
          ref: D,
          ...Ae(Er.required, ae),
        }),
        !a)
      )
        return Z(ae), L;
    }
    if (!te && (!_t(O) || !_t(b))) {
      let ie, ae;
      const _e = Mn(b),
        Pe = Mn(O);
      if (!_t(z) && !isNaN(z)) {
        const Me = d.valueAsNumber || (z && +z);
        _t(_e.value) || (ie = Me > _e.value),
          _t(Pe.value) || (ae = Me < Pe.value);
      } else {
        const Me = d.valueAsDate || new Date(z),
          Ce = (re) => new Date(new Date().toDateString() + " " + re),
          G = d.type == "time",
          ce = d.type == "week";
        pr(_e.value) &&
          z &&
          (ie = G
            ? Ce(z) > Ce(_e.value)
            : ce
            ? z > _e.value
            : Me > new Date(_e.value)),
          pr(Pe.value) &&
            z &&
            (ae = G
              ? Ce(z) < Ce(Pe.value)
              : ce
              ? z < Pe.value
              : Me < new Date(Pe.value));
      }
      if ((ie || ae) && (Le(!!ie, _e.message, Pe.message, Er.max, Er.min), !a))
        return Z(L[v].message), L;
    }
    if ((E || x) && !te && (pr(z) || (f && Array.isArray(z)))) {
      const ie = Mn(E),
        ae = Mn(x),
        _e = !_t(ie.value) && z.length > +ie.value,
        Pe = !_t(ae.value) && z.length < +ae.value;
      if ((_e || Pe) && (Le(_e, ie.message, ae.message), !a))
        return Z(L[v].message), L;
    }
    if (Y && !te && pr(z)) {
      const { value: ie, message: ae } = Mn(Y);
      if (
        ys(ie) &&
        !z.match(ie) &&
        ((L[v] = {
          type: Er.pattern,
          message: ae,
          ref: d,
          ...Ae(Er.pattern, ae),
        }),
        !a)
      )
        return Z(ae), L;
    }
    if (T) {
      if (nr(T)) {
        const ie = await T(z, o),
          ae = Td(ie, D);
        if (ae && ((L[v] = { ...ae, ...Ae(Er.validate, ae.message) }), !a))
          return Z(ae.message), L;
      } else if (st(T)) {
        let ie = {};
        for (const ae in T) {
          if (!zt(ie) && !a) break;
          const _e = Td(await T[ae](z, o), D, ae);
          _e &&
            ((ie = { ..._e, ...Ae(ae, _e.message) }),
            Z(_e.message),
            a && (L[v] = ie));
        }
        if (!zt(ie) && ((L[v] = { ref: D, ...ie }), !a)) return L;
      }
    }
    return Z(!0), L;
  };
const tg = {
  mode: rr.onSubmit,
  reValidateMode: rr.onChange,
  shouldFocusError: !0,
};
function rg(n = {}) {
  let s = { ...tg, ...n },
    o = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: nr(s.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: s.errors || {},
      disabled: s.disabled || !1,
    },
    a = {},
    c =
      st(s.defaultValues) || st(s.values)
        ? ft(s.defaultValues || s.values) || {}
        : {},
    f = s.shouldUnregister ? {} : ft(c),
    d = { action: !1, mount: !1, watch: !1 },
    h = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    S,
    E = 0;
  const x = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1,
  };
  let O = { ...x };
  const b = { array: yd(), state: yd() },
    Y = s.criteriaMode === rr.all,
    T = (g) => (A) => {
      clearTimeout(E), (E = setTimeout(g, A));
    },
    v = async (g) => {
      if (!s.disabled && (x.isValid || O.isValid || g)) {
        const A = s.resolver ? zt((await ge()).errors) : await te(a, !0);
        A !== o.isValid && b.state.next({ isValid: A });
      }
    },
    C = (g, A) => {
      !s.disabled &&
        (x.isValidating ||
          x.validatingFields ||
          O.isValidating ||
          O.validatingFields) &&
        ((g || Array.from(h.mount)).forEach((M) => {
          M && (A ? We(o.validatingFields, M, A) : at(o.validatingFields, M));
        }),
        b.state.next({
          validatingFields: o.validatingFields,
          isValidating: !zt(o.validatingFields),
        }));
    },
    W = (g, A = [], M, ee, $ = !0, B = !0) => {
      if (ee && M && !s.disabled) {
        if (((d.action = !0), B && Array.isArray(oe(a, g)))) {
          const pe = M(oe(a, g), ee.argA, ee.argB);
          $ && We(a, g, pe);
        }
        if (B && Array.isArray(oe(o.errors, g))) {
          const pe = M(oe(o.errors, g), ee.argA, ee.argB);
          $ && We(o.errors, g, pe), Z1(o.errors, g);
        }
        if (
          (x.touchedFields || O.touchedFields) &&
          B &&
          Array.isArray(oe(o.touchedFields, g))
        ) {
          const pe = M(oe(o.touchedFields, g), ee.argA, ee.argB);
          $ && We(o.touchedFields, g, pe);
        }
        (x.dirtyFields || O.dirtyFields) && (o.dirtyFields = Li(c, f)),
          b.state.next({
            name: g,
            isDirty: Le(g, A),
            dirtyFields: o.dirtyFields,
            errors: o.errors,
            isValid: o.isValid,
          });
      } else We(f, g, A);
    },
    z = (g, A) => {
      We(o.errors, g, A), b.state.next({ errors: o.errors });
    },
    D = (g) => {
      (o.errors = g), b.state.next({ errors: o.errors, isValid: !1 });
    },
    Z = (g, A, M, ee) => {
      const $ = oe(a, g);
      if ($) {
        const B = oe(f, g, ot(M) ? oe(c, g) : M);
        ot(B) || (ee && ee.defaultChecked) || A
          ? We(f, g, A ? B : Sd($._f))
          : _e(g, B),
          d.mount && v();
      }
    },
    L = (g, A, M, ee, $) => {
      let B = !1,
        pe = !1;
      const ze = { name: g };
      if (!s.disabled) {
        if (!M || ee) {
          (x.isDirty || O.isDirty) &&
            ((pe = o.isDirty),
            (o.isDirty = ze.isDirty = Le()),
            (B = pe !== ze.isDirty));
          const Oe = Ur(oe(c, g), A);
          (pe = !!oe(o.dirtyFields, g)),
            Oe ? at(o.dirtyFields, g) : We(o.dirtyFields, g, !0),
            (ze.dirtyFields = o.dirtyFields),
            (B = B || ((x.dirtyFields || O.dirtyFields) && pe !== !Oe));
        }
        if (M) {
          const Oe = oe(o.touchedFields, g);
          Oe ||
            (We(o.touchedFields, g, M),
            (ze.touchedFields = o.touchedFields),
            (B = B || ((x.touchedFields || O.touchedFields) && Oe !== M)));
        }
        B && $ && b.state.next(ze);
      }
      return B ? ze : {};
    },
    he = (g, A, M, ee) => {
      const $ = oe(o.errors, g),
        B = (x.isValid || O.isValid) && Dt(A) && o.isValid !== A;
      if (
        (s.delayError && M
          ? ((S = T(() => z(g, M))), S(s.delayError))
          : (clearTimeout(E),
            (S = null),
            M ? We(o.errors, g, M) : at(o.errors, g)),
        (M ? !Ur($, M) : $) || !zt(ee) || B)
      ) {
        const pe = {
          ...ee,
          ...(B && Dt(A) ? { isValid: A } : {}),
          errors: o.errors,
          name: g,
        };
        (o = { ...o, ...pe }), b.state.next(pe);
      }
    },
    ge = async (g) => {
      C(g, !0);
      const A = await s.resolver(
        f,
        s.context,
        Q1(g || h.mount, a, s.criteriaMode, s.shouldUseNativeValidation)
      );
      return C(g), A;
    },
    xe = async (g) => {
      const { errors: A } = await ge(g);
      if (g)
        for (const M of g) {
          const ee = oe(A, M);
          ee ? We(o.errors, M, ee) : at(o.errors, M);
        }
      else o.errors = A;
      return A;
    },
    te = async (g, A, M = { valid: !0 }) => {
      for (const ee in g) {
        const $ = g[ee];
        if ($) {
          const { _f: B, ...pe } = $;
          if (B) {
            const ze = h.array.has(B.name),
              Oe = $._f && q1($._f);
            Oe && x.validatingFields && C([ee], !0);
            const kt = await Rd(
              $,
              h.disabled,
              f,
              Y,
              s.shouldUseNativeValidation && !A,
              ze
            );
            if (
              (Oe && x.validatingFields && C([ee]),
              kt[B.name] && ((M.valid = !1), A))
            )
              break;
            !A &&
              (oe(kt, B.name)
                ? ze
                  ? eg(o.errors, kt, B.name)
                  : We(o.errors, B.name, kt[B.name])
                : at(o.errors, B.name));
          }
          !zt(pe) && (await te(pe, A, M));
        }
      }
      return M.valid;
    },
    Ae = () => {
      for (const g of h.unMount) {
        const A = oe(a, g);
        A &&
          (A._f.refs ? A._f.refs.every((M) => !Ca(M)) : !Ca(A._f.ref)) &&
          de(g);
      }
      h.unMount = new Set();
    },
    Le = (g, A) => !s.disabled && (g && A && We(f, g, A), !Ur(re(), c)),
    ie = (g, A, M) =>
      _p(g, h, { ...(d.mount ? f : ot(A) ? c : pr(g) ? { [g]: A } : A) }, M, A),
    ae = (g) =>
      Ga(oe(d.mount ? f : c, g, s.shouldUnregister ? oe(c, g, []) : [])),
    _e = (g, A, M = {}) => {
      const ee = oe(a, g);
      let $ = A;
      if (ee) {
        const B = ee._f;
        B &&
          (!B.disabled && We(f, g, Ap(A, B)),
          ($ = ms(B.ref) && _t(A) ? "" : A),
          Tp(B.ref)
            ? [...B.ref.options].forEach(
                (pe) => (pe.selected = $.includes(pe.value))
              )
            : B.refs
            ? Wi(B.ref)
              ? B.refs.forEach((pe) => {
                  (!pe.defaultChecked || !pe.disabled) &&
                    (Array.isArray($)
                      ? (pe.checked = !!$.find((ze) => ze === pe.value))
                      : (pe.checked = $ === pe.value || !!$));
                })
              : B.refs.forEach((pe) => (pe.checked = pe.value === $))
            : eu(B.ref)
            ? (B.ref.value = "")
            : ((B.ref.value = $),
              B.ref.type || b.state.next({ name: g, values: ft(f) })));
      }
      (M.shouldDirty || M.shouldTouch) &&
        L(g, $, M.shouldTouch, M.shouldDirty, !0),
        M.shouldValidate && ce(g);
    },
    Pe = (g, A, M) => {
      for (const ee in A) {
        if (!A.hasOwnProperty(ee)) return;
        const $ = A[ee],
          B = g + "." + ee,
          pe = oe(a, B);
        (h.array.has(g) || st($) || (pe && !pe._f)) && !sn($)
          ? Pe(B, $, M)
          : _e(B, $, M);
      }
    },
    Me = (g, A, M = {}) => {
      const ee = oe(a, g),
        $ = h.array.has(g),
        B = ft(A);
      We(f, g, B),
        $
          ? (b.array.next({ name: g, values: ft(f) }),
            (x.isDirty || x.dirtyFields || O.isDirty || O.dirtyFields) &&
              M.shouldDirty &&
              b.state.next({
                name: g,
                dirtyFields: Li(c, f),
                isDirty: Le(g, B),
              }))
          : ee && !ee._f && !_t(B)
          ? Pe(g, B, M)
          : _e(g, B, M),
        Cd(g, h) && b.state.next({ ...o }),
        b.state.next({ name: d.mount ? g : void 0, values: ft(f) });
    },
    Ce = async (g) => {
      d.mount = !0;
      const A = g.target;
      let M = A.name,
        ee = !0;
      const $ = oe(a, M),
        B = (Oe) => {
          ee =
            Number.isNaN(Oe) ||
            (sn(Oe) && isNaN(Oe.getTime())) ||
            Ur(Oe, oe(f, M, Oe));
        },
        pe = kd(s.mode),
        ze = kd(s.reValidateMode);
      if ($) {
        let Oe, kt;
        const sr = A.type ? Sd($._f) : Sp(g),
          Tt = g.type === hs.BLUR || g.type === hs.FOCUS_OUT,
          Os =
            (!Y1($._f) && !s.resolver && !oe(o.errors, M) && !$._f.deps) ||
            J1(Tt, oe(o.touchedFields, M), o.isSubmitted, ze, pe),
          cn = Cd(M, h, Tt);
        We(f, M, sr),
          Tt
            ? ($._f.onBlur && $._f.onBlur(g), S && S(0))
            : $._f.onChange && $._f.onChange(g);
        const fn = L(M, sr, Tt),
          As = !zt(fn) || cn;
        if ((!Tt && b.state.next({ name: M, type: g.type, values: ft(f) }), Os))
          return (
            (x.isValid || O.isValid) &&
              (s.mode === "onBlur" ? Tt && v() : Tt || v()),
            As && b.state.next({ name: M, ...(cn ? {} : fn) })
          );
        if ((!Tt && cn && b.state.next({ ...o }), s.resolver)) {
          const { errors: dn } = await ge([M]);
          if ((B(sr), ee)) {
            const Yn = _d(o.errors, a, M),
              pn = _d(dn, a, Yn.name || M);
            (Oe = pn.error), (M = pn.name), (kt = zt(dn));
          }
        } else
          C([M], !0),
            (Oe = (await Rd($, h.disabled, f, Y, s.shouldUseNativeValidation))[
              M
            ]),
            C([M]),
            B(sr),
            ee &&
              (Oe
                ? (kt = !1)
                : (x.isValid || O.isValid) && (kt = await te(a, !0)));
        ee && ($._f.deps && ce($._f.deps), he(M, kt, Oe, fn));
      }
    },
    G = (g, A) => {
      if (oe(o.errors, A) && g.focus) return g.focus(), 1;
    },
    ce = async (g, A = {}) => {
      let M, ee;
      const $ = Ii(g);
      if (s.resolver) {
        const B = await xe(ot(g) ? g : $);
        (M = zt(B)), (ee = g ? !$.some((pe) => oe(B, pe)) : M);
      } else
        g
          ? ((ee = (
              await Promise.all(
                $.map(async (B) => {
                  const pe = oe(a, B);
                  return await te(pe && pe._f ? { [B]: pe } : pe);
                })
              )
            ).every(Boolean)),
            !(!ee && !o.isValid) && v())
          : (ee = M = await te(a));
      return (
        b.state.next({
          ...(!pr(g) || ((x.isValid || O.isValid) && M !== o.isValid)
            ? {}
            : { name: g }),
          ...(s.resolver || !g ? { isValid: M } : {}),
          errors: o.errors,
        }),
        A.shouldFocus && !ee && Mi(a, G, g ? $ : h.mount),
        ee
      );
    },
    re = (g) => {
      const A = { ...(d.mount ? f : c) };
      return ot(g) ? A : pr(g) ? oe(A, g) : g.map((M) => oe(A, M));
    },
    _ = (g, A) => ({
      invalid: !!oe((A || o).errors, g),
      isDirty: !!oe((A || o).dirtyFields, g),
      error: oe((A || o).errors, g),
      isValidating: !!oe(o.validatingFields, g),
      isTouched: !!oe((A || o).touchedFields, g),
    }),
    j = (g) => {
      g && Ii(g).forEach((A) => at(o.errors, A)),
        b.state.next({ errors: g ? o.errors : {} });
    },
    U = (g, A, M) => {
      const ee = (oe(a, g, { _f: {} })._f || {}).ref,
        $ = oe(o.errors, g) || {},
        { ref: B, message: pe, type: ze, ...Oe } = $;
      We(o.errors, g, { ...Oe, ...A, ref: ee }),
        b.state.next({ name: g, errors: o.errors, isValid: !1 }),
        M && M.shouldFocus && ee && ee.focus && ee.focus();
    },
    Q = (g, A) =>
      nr(g)
        ? b.state.subscribe({ next: (M) => g(ie(void 0, A), M) })
        : ie(g, A, !0),
    ne = (g) =>
      b.state.subscribe({
        next: (A) => {
          X1(g.name, A.name, g.exact) &&
            G1(A, g.formState || x, be, g.reRenderRoot) &&
            g.callback({ values: { ...f }, ...o, ...A });
        },
      }).unsubscribe,
    R = (g) => (
      (d.mount = !0), (O = { ...O, ...g.formState }), ne({ ...g, formState: O })
    ),
    de = (g, A = {}) => {
      for (const M of g ? Ii(g) : h.mount)
        h.mount.delete(M),
          h.array.delete(M),
          A.keepValue || (at(a, M), at(f, M)),
          !A.keepError && at(o.errors, M),
          !A.keepDirty && at(o.dirtyFields, M),
          !A.keepTouched && at(o.touchedFields, M),
          !A.keepIsValidating && at(o.validatingFields, M),
          !s.shouldUnregister && !A.keepDefaultValue && at(c, M);
      b.state.next({ values: ft(f) }),
        b.state.next({ ...o, ...(A.keepDirty ? { isDirty: Le() } : {}) }),
        !A.keepIsValid && v();
    },
    V = ({ disabled: g, name: A }) => {
      ((Dt(g) && d.mount) || g || h.disabled.has(A)) &&
        (g ? h.disabled.add(A) : h.disabled.delete(A));
    },
    we = (g, A = {}) => {
      let M = oe(a, g);
      const ee = Dt(A.disabled) || Dt(s.disabled);
      return (
        We(a, g, {
          ...(M || {}),
          _f: {
            ...(M && M._f ? M._f : { ref: { name: g } }),
            name: g,
            mount: !0,
            ...A,
          },
        }),
        h.mount.add(g),
        M
          ? V({ disabled: Dt(A.disabled) ? A.disabled : s.disabled, name: g })
          : Z(g, !0, A.value),
        {
          ...(ee ? { disabled: A.disabled || s.disabled } : {}),
          ...(s.progressive
            ? {
                required: !!A.required,
                min: Fi(A.min),
                max: Fi(A.max),
                minLength: Fi(A.minLength),
                maxLength: Fi(A.maxLength),
                pattern: Fi(A.pattern),
              }
            : {}),
          name: g,
          onChange: Ce,
          onBlur: Ce,
          ref: ($) => {
            if ($) {
              we(g, A), (M = oe(a, g));
              const B =
                  (ot($.value) &&
                    $.querySelectorAll &&
                    $.querySelectorAll("input,select,textarea")[0]) ||
                  $,
                pe = H1(B),
                ze = M._f.refs || [];
              if (pe ? ze.find((Oe) => Oe === B) : B === M._f.ref) return;
              We(a, g, {
                _f: {
                  ...M._f,
                  ...(pe
                    ? {
                        refs: [
                          ...ze.filter(Ca),
                          B,
                          ...(Array.isArray(oe(c, g)) ? [{}] : []),
                        ],
                        ref: { type: B.type, name: g },
                      }
                    : { ref: B }),
                },
              }),
                Z(g, !1, void 0, B);
            } else
              (M = oe(a, g, {})),
                M._f && (M._f.mount = !1),
                (s.shouldUnregister || A.shouldUnregister) &&
                  !(kp(h.array, g) && d.action) &&
                  h.unMount.add(g);
          },
        }
      );
    },
    Se = () => s.shouldFocusError && Mi(a, G, h.mount),
    Fe = (g) => {
      Dt(g) &&
        (b.state.next({ disabled: g }),
        Mi(
          a,
          (A, M) => {
            const ee = oe(a, M);
            ee &&
              ((A.disabled = ee._f.disabled || g),
              Array.isArray(ee._f.refs) &&
                ee._f.refs.forEach(($) => {
                  $.disabled = ee._f.disabled || g;
                }));
          },
          0,
          !1
        ));
    },
    ke = (g, A) => async (M) => {
      let ee;
      M && (M.preventDefault && M.preventDefault(), M.persist && M.persist());
      let $ = ft(f);
      if ((b.state.next({ isSubmitting: !0 }), s.resolver)) {
        const { errors: B, values: pe } = await ge();
        (o.errors = B), ($ = ft(pe));
      } else await te(a);
      if (h.disabled.size) for (const B of h.disabled) at($, B);
      if ((at(o.errors, "root"), zt(o.errors))) {
        b.state.next({ errors: {} });
        try {
          await g($, M);
        } catch (B) {
          ee = B;
        }
      } else A && (await A({ ...o.errors }, M)), Se(), setTimeout(Se);
      if (
        (b.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: zt(o.errors) && !ee,
          submitCount: o.submitCount + 1,
          errors: o.errors,
        }),
        ee)
      )
        throw ee;
    },
    Ye = (g, A = {}) => {
      oe(a, g) &&
        (ot(A.defaultValue)
          ? Me(g, ft(oe(c, g)))
          : (Me(g, A.defaultValue), We(c, g, ft(A.defaultValue))),
        A.keepTouched || at(o.touchedFields, g),
        A.keepDirty ||
          (at(o.dirtyFields, g),
          (o.isDirty = A.defaultValue ? Le(g, ft(oe(c, g))) : Le())),
        A.keepError || (at(o.errors, g), x.isValid && v()),
        b.state.next({ ...o }));
    },
    et = (g, A = {}) => {
      const M = g ? ft(g) : c,
        ee = ft(M),
        $ = zt(g),
        B = $ ? c : ee;
      if ((A.keepDefaultValues || (c = M), !A.keepValues)) {
        if (A.keepDirtyValues) {
          const pe = new Set([...h.mount, ...Object.keys(Li(c, f))]);
          for (const ze of Array.from(pe))
            oe(o.dirtyFields, ze) ? We(B, ze, oe(f, ze)) : Me(ze, oe(B, ze));
        } else {
          if (Ya && ot(g))
            for (const pe of h.mount) {
              const ze = oe(a, pe);
              if (ze && ze._f) {
                const Oe = Array.isArray(ze._f.refs)
                  ? ze._f.refs[0]
                  : ze._f.ref;
                if (ms(Oe)) {
                  const kt = Oe.closest("form");
                  if (kt) {
                    kt.reset();
                    break;
                  }
                }
              }
            }
          if (A.keepFieldsRef) for (const pe of h.mount) Me(pe, oe(B, pe));
          else a = {};
        }
        (f = s.shouldUnregister ? (A.keepDefaultValues ? ft(c) : {}) : ft(B)),
          b.array.next({ values: { ...B } }),
          b.state.next({ values: { ...B } });
      }
      (h = {
        mount: A.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (d.mount = !x.isValid || !!A.keepIsValid || !!A.keepDirtyValues),
        (d.watch = !!s.shouldUnregister),
        b.state.next({
          submitCount: A.keepSubmitCount ? o.submitCount : 0,
          isDirty: $
            ? !1
            : A.keepDirty
            ? o.isDirty
            : !!(A.keepDefaultValues && !Ur(g, c)),
          isSubmitted: A.keepIsSubmitted ? o.isSubmitted : !1,
          dirtyFields: $
            ? {}
            : A.keepDirtyValues
            ? A.keepDefaultValues && f
              ? Li(c, f)
              : o.dirtyFields
            : A.keepDefaultValues && g
            ? Li(c, g)
            : A.keepDirty
            ? o.dirtyFields
            : {},
          touchedFields: A.keepTouched ? o.touchedFields : {},
          errors: A.keepErrors ? o.errors : {},
          isSubmitSuccessful: A.keepIsSubmitSuccessful
            ? o.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    je = (g, A) => et(nr(g) ? g(f) : g, A),
    tt = (g, A = {}) => {
      const M = oe(a, g),
        ee = M && M._f;
      if (ee) {
        const $ = ee.refs ? ee.refs[0] : ee.ref;
        $.focus && ($.focus(), A.shouldSelect && nr($.select) && $.select());
      }
    },
    be = (g) => {
      o = { ...o, ...g };
    },
    Vt = {
      control: {
        register: we,
        unregister: de,
        getFieldState: _,
        handleSubmit: ke,
        setError: U,
        _subscribe: ne,
        _runSchema: ge,
        _focusError: Se,
        _getWatch: ie,
        _getDirty: Le,
        _setValid: v,
        _setFieldArray: W,
        _setDisabledField: V,
        _setErrors: D,
        _getFieldArray: ae,
        _reset: et,
        _resetDefaultValues: () =>
          nr(s.defaultValues) &&
          s.defaultValues().then((g) => {
            je(g, s.resetOptions), b.state.next({ isLoading: !1 });
          }),
        _removeUnmounted: Ae,
        _disableForm: Fe,
        _subjects: b,
        _proxyFormState: x,
        get _fields() {
          return a;
        },
        get _formValues() {
          return f;
        },
        get _state() {
          return d;
        },
        set _state(g) {
          d = g;
        },
        get _defaultValues() {
          return c;
        },
        get _names() {
          return h;
        },
        set _names(g) {
          h = g;
        },
        get _formState() {
          return o;
        },
        get _options() {
          return s;
        },
        set _options(g) {
          s = { ...s, ...g };
        },
      },
      subscribe: R,
      trigger: ce,
      register: we,
      handleSubmit: ke,
      watch: Q,
      setValue: Me,
      getValues: re,
      reset: je,
      resetField: Ye,
      clearErrors: j,
      unregister: de,
      setError: U,
      setFocus: tt,
      getFieldState: _,
    };
  return { ...Vt, formControl: Vt };
}
function ru(n = {}) {
  const s = Te.useRef(void 0),
    o = Te.useRef(void 0),
    [a, c] = Te.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: nr(n.defaultValues),
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
      defaultValues: nr(n.defaultValues) ? void 0 : n.defaultValues,
    });
  if (!s.current)
    if (n.formControl)
      (s.current = { ...n.formControl, formState: a }),
        n.defaultValues &&
          !nr(n.defaultValues) &&
          n.formControl.reset(n.defaultValues, n.resetOptions);
    else {
      const { formControl: d, ...h } = rg(n);
      s.current = { ...h, formState: a };
    }
  const f = s.current.control;
  return (
    (f._options = n),
    Za(() => {
      const d = f._subscribe({
        formState: f._proxyFormState,
        callback: () => c({ ...f._formState }),
        reRenderRoot: !0,
      });
      return c((h) => ({ ...h, isReady: !0 })), (f._formState.isReady = !0), d;
    }, [f]),
    Te.useEffect(() => f._disableForm(n.disabled), [f, n.disabled]),
    Te.useEffect(() => {
      n.mode && (f._options.mode = n.mode),
        n.reValidateMode && (f._options.reValidateMode = n.reValidateMode);
    }, [f, n.mode, n.reValidateMode]),
    Te.useEffect(() => {
      n.errors && (f._setErrors(n.errors), f._focusError());
    }, [f, n.errors]),
    Te.useEffect(() => {
      n.shouldUnregister && f._subjects.state.next({ values: f._getWatch() });
    }, [f, n.shouldUnregister]),
    Te.useEffect(() => {
      if (f._proxyFormState.isDirty) {
        const d = f._getDirty();
        d !== a.isDirty && f._subjects.state.next({ isDirty: d });
      }
    }, [f, a.isDirty]),
    Te.useEffect(() => {
      n.values && !Ur(n.values, o.current)
        ? (f._reset(n.values, {
            keepFieldsRef: !0,
            ...f._options.resetOptions,
          }),
          (o.current = n.values),
          c((d) => ({ ...d })))
        : f._resetDefaultValues();
    }, [f, n.values]),
    Te.useEffect(() => {
      f._state.mount || (f._setValid(), (f._state.mount = !0)),
        f._state.watch &&
          ((f._state.watch = !1), f._subjects.state.next({ ...f._formState })),
        f._removeUnmounted();
    }),
    (s.current.formState = Cp(a, f)),
    s.current
  );
}
var _a = { exports: {} },
  Ue = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pd;
function ng() {
  if (Pd) return Ue;
  Pd = 1;
  var n = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    S = Symbol.for("react.suspense"),
    E = Symbol.for("react.suspense_list"),
    x = Symbol.for("react.memo"),
    O = Symbol.for("react.lazy"),
    b = Symbol.for("react.view_transition"),
    Y = Symbol.for("react.client.reference");
  function T(v) {
    if (typeof v == "object" && v !== null) {
      var C = v.$$typeof;
      switch (C) {
        case n:
          switch (((v = v.type), v)) {
            case o:
            case c:
            case a:
            case S:
            case E:
            case b:
              return v;
            default:
              switch (((v = v && v.$$typeof), v)) {
                case d:
                case h:
                case O:
                case x:
                  return v;
                case f:
                  return v;
                default:
                  return C;
              }
          }
        case s:
          return C;
      }
    }
  }
  return (
    (Ue.ContextConsumer = f),
    (Ue.ContextProvider = d),
    (Ue.Element = n),
    (Ue.ForwardRef = h),
    (Ue.Fragment = o),
    (Ue.Lazy = O),
    (Ue.Memo = x),
    (Ue.Portal = s),
    (Ue.Profiler = c),
    (Ue.StrictMode = a),
    (Ue.Suspense = S),
    (Ue.SuspenseList = E),
    (Ue.isContextConsumer = function (v) {
      return T(v) === f;
    }),
    (Ue.isContextProvider = function (v) {
      return T(v) === d;
    }),
    (Ue.isElement = function (v) {
      return typeof v == "object" && v !== null && v.$$typeof === n;
    }),
    (Ue.isForwardRef = function (v) {
      return T(v) === h;
    }),
    (Ue.isFragment = function (v) {
      return T(v) === o;
    }),
    (Ue.isLazy = function (v) {
      return T(v) === O;
    }),
    (Ue.isMemo = function (v) {
      return T(v) === x;
    }),
    (Ue.isPortal = function (v) {
      return T(v) === s;
    }),
    (Ue.isProfiler = function (v) {
      return T(v) === c;
    }),
    (Ue.isStrictMode = function (v) {
      return T(v) === a;
    }),
    (Ue.isSuspense = function (v) {
      return T(v) === S;
    }),
    (Ue.isSuspenseList = function (v) {
      return T(v) === E;
    }),
    (Ue.isValidElementType = function (v) {
      return (
        typeof v == "string" ||
        typeof v == "function" ||
        v === o ||
        v === c ||
        v === a ||
        v === S ||
        v === E ||
        (typeof v == "object" &&
          v !== null &&
          (v.$$typeof === O ||
            v.$$typeof === x ||
            v.$$typeof === d ||
            v.$$typeof === f ||
            v.$$typeof === h ||
            v.$$typeof === Y ||
            v.getModuleId !== void 0))
      );
    }),
    (Ue.typeOf = T),
    Ue
  );
}
var Od;
function ig() {
  return Od || ((Od = 1), (_a.exports = ng())), _a.exports;
}
var Np = ig();
function og(n) {
  function s(j, U, Q, ne, R) {
    for (
      var de = 0,
        V = 0,
        we = 0,
        Se = 0,
        Fe,
        ke,
        Ye = 0,
        et = 0,
        je,
        tt = (je = Fe = 0),
        be = 0,
        rt = 0,
        Vt = 0,
        g = 0,
        A = Q.length,
        M = A - 1,
        ee,
        $ = "",
        B = "",
        pe = "",
        ze = "",
        Oe;
      be < A;

    ) {
      if (
        ((ke = Q.charCodeAt(be)),
        be === M &&
          V + Se + we + de !== 0 &&
          (V !== 0 && (ke = V === 47 ? 10 : 47), (Se = we = de = 0), A++, M++),
        V + Se + we + de === 0)
      ) {
        if (
          be === M &&
          (0 < rt && ($ = $.replace(b, "")), 0 < $.trim().length)
        ) {
          switch (ke) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              $ += Q.charAt(be);
          }
          ke = 59;
        }
        switch (ke) {
          case 123:
            for (
              $ = $.trim(), Fe = $.charCodeAt(0), je = 1, g = ++be;
              be < A;

            ) {
              switch ((ke = Q.charCodeAt(be))) {
                case 123:
                  je++;
                  break;
                case 125:
                  je--;
                  break;
                case 47:
                  switch ((ke = Q.charCodeAt(be + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (tt = be + 1; tt < M; ++tt)
                          switch (Q.charCodeAt(tt)) {
                            case 47:
                              if (
                                ke === 42 &&
                                Q.charCodeAt(tt - 1) === 42 &&
                                be + 2 !== tt
                              ) {
                                be = tt + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (ke === 47) {
                                be = tt + 1;
                                break e;
                              }
                          }
                        be = tt;
                      }
                  }
                  break;
                case 91:
                  ke++;
                case 40:
                  ke++;
                case 34:
                case 39:
                  for (; be++ < M && Q.charCodeAt(be) !== ke; );
              }
              if (je === 0) break;
              be++;
            }
            switch (
              ((je = Q.substring(g, be)),
              Fe === 0 && (Fe = ($ = $.replace(O, "").trim()).charCodeAt(0)),
              Fe)
            ) {
              case 64:
                switch (
                  (0 < rt && ($ = $.replace(b, "")), (ke = $.charCodeAt(1)), ke)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    rt = U;
                    break;
                  default:
                    rt = Me;
                }
                if (
                  ((je = s(U, rt, je, ke, R + 1)),
                  (g = je.length),
                  0 < G &&
                    ((rt = o(Me, $, Vt)),
                    (Oe = h(3, je, rt, U, ae, ie, g, ke, R, ne)),
                    ($ = rt.join("")),
                    Oe !== void 0 &&
                      (g = (je = Oe.trim()).length) === 0 &&
                      ((ke = 0), (je = ""))),
                  0 < g)
                )
                  switch (ke) {
                    case 115:
                      $ = $.replace(he, d);
                    case 100:
                    case 109:
                    case 45:
                      je = $ + "{" + je + "}";
                      break;
                    case 107:
                      ($ = $.replace(z, "$1 $2")),
                        (je = $ + "{" + je + "}"),
                        (je =
                          Pe === 1 || (Pe === 2 && f("@" + je, 3))
                            ? "@-webkit-" + je + "@" + je
                            : "@" + je);
                      break;
                    default:
                      (je = $ + je), ne === 112 && (je = ((B += je), ""));
                  }
                else je = "";
                break;
              default:
                je = s(U, o(U, $, Vt), je, ne, R + 1);
            }
            (pe += je),
              (je = Vt = rt = tt = Fe = 0),
              ($ = ""),
              (ke = Q.charCodeAt(++be));
            break;
          case 125:
          case 59:
            if (
              (($ = (0 < rt ? $.replace(b, "") : $).trim()), 1 < (g = $.length))
            )
              switch (
                (tt === 0 &&
                  ((Fe = $.charCodeAt(0)),
                  Fe === 45 || (96 < Fe && 123 > Fe)) &&
                  (g = ($ = $.replace(" ", ":")).length),
                0 < G &&
                  (Oe = h(1, $, U, j, ae, ie, B.length, ne, R, ne)) !==
                    void 0 &&
                  (g = ($ = Oe.trim()).length) === 0 &&
                  ($ = "\0\0"),
                (Fe = $.charCodeAt(0)),
                (ke = $.charCodeAt(1)),
                Fe)
              ) {
                case 0:
                  break;
                case 64:
                  if (ke === 105 || ke === 99) {
                    ze += $ + Q.charAt(be);
                    break;
                  }
                default:
                  $.charCodeAt(g - 1) !== 58 &&
                    (B += c($, Fe, ke, $.charCodeAt(2)));
              }
            (Vt = rt = tt = Fe = 0), ($ = ""), (ke = Q.charCodeAt(++be));
        }
      }
      switch (ke) {
        case 13:
        case 10:
          V === 47
            ? (V = 0)
            : 1 + Fe === 0 &&
              ne !== 107 &&
              0 < $.length &&
              ((rt = 1), ($ += "\0")),
            0 < G * re && h(0, $, U, j, ae, ie, B.length, ne, R, ne),
            (ie = 1),
            ae++;
          break;
        case 59:
        case 125:
          if (V + Se + we + de === 0) {
            ie++;
            break;
          }
        default:
          switch ((ie++, (ee = Q.charAt(be)), ke)) {
            case 9:
            case 32:
              if (Se + de + V === 0)
                switch (Ye) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ee = "";
                    break;
                  default:
                    ke !== 32 && (ee = " ");
                }
              break;
            case 0:
              ee = "\\0";
              break;
            case 12:
              ee = "\\f";
              break;
            case 11:
              ee = "\\v";
              break;
            case 38:
              Se + V + de === 0 && ((rt = Vt = 1), (ee = "\f" + ee));
              break;
            case 108:
              if (Se + V + de + _e === 0 && 0 < tt)
                switch (be - tt) {
                  case 2:
                    Ye === 112 && Q.charCodeAt(be - 3) === 58 && (_e = Ye);
                  case 8:
                    et === 111 && (_e = et);
                }
              break;
            case 58:
              Se + V + de === 0 && (tt = be);
              break;
            case 44:
              V + we + Se + de === 0 && ((rt = 1), (ee += "\r"));
              break;
            case 34:
            case 39:
              V === 0 && (Se = Se === ke ? 0 : Se === 0 ? ke : Se);
              break;
            case 91:
              Se + V + we === 0 && de++;
              break;
            case 93:
              Se + V + we === 0 && de--;
              break;
            case 41:
              Se + V + de === 0 && we--;
              break;
            case 40:
              if (Se + V + de === 0) {
                if (Fe === 0)
                  switch (2 * Ye + 3 * et) {
                    case 533:
                      break;
                    default:
                      Fe = 1;
                  }
                we++;
              }
              break;
            case 64:
              V + we + Se + de + tt + je === 0 && (je = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Se + de + we))
                switch (V) {
                  case 0:
                    switch (2 * ke + 3 * Q.charCodeAt(be + 1)) {
                      case 235:
                        V = 47;
                        break;
                      case 220:
                        (g = be), (V = 42);
                    }
                    break;
                  case 42:
                    ke === 47 &&
                      Ye === 42 &&
                      g + 2 !== be &&
                      (Q.charCodeAt(g + 2) === 33 &&
                        (B += Q.substring(g, be + 1)),
                      (ee = ""),
                      (V = 0));
                }
          }
          V === 0 && ($ += ee);
      }
      (et = Ye), (Ye = ke), be++;
    }
    if (((g = B.length), 0 < g)) {
      if (
        ((rt = U),
        0 < G &&
          ((Oe = h(2, B, rt, j, ae, ie, g, ne, R, ne)),
          Oe !== void 0 && (B = Oe).length === 0))
      )
        return ze + B + pe;
      if (((B = rt.join(",") + "{" + B + "}"), Pe * _e !== 0)) {
        switch ((Pe !== 2 || f(B, 2) || (_e = 0), _e)) {
          case 111:
            B = B.replace(Z, ":-moz-$1") + B;
            break;
          case 112:
            B =
              B.replace(D, "::-webkit-input-$1") +
              B.replace(D, "::-moz-$1") +
              B.replace(D, ":-ms-input-$1") +
              B;
        }
        _e = 0;
      }
    }
    return ze + B + pe;
  }
  function o(j, U, Q) {
    var ne = U.trim().split(C);
    U = ne;
    var R = ne.length,
      de = j.length;
    switch (de) {
      case 0:
      case 1:
        var V = 0;
        for (j = de === 0 ? "" : j[0] + " "; V < R; ++V)
          U[V] = a(j, U[V], Q).trim();
        break;
      default:
        var we = (V = 0);
        for (U = []; V < R; ++V)
          for (var Se = 0; Se < de; ++Se)
            U[we++] = a(j[Se] + " ", ne[V], Q).trim();
    }
    return U;
  }
  function a(j, U, Q) {
    var ne = U.charCodeAt(0);
    switch ((33 > ne && (ne = (U = U.trim()).charCodeAt(0)), ne)) {
      case 38:
        return U.replace(W, "$1" + j.trim());
      case 58:
        return j.trim() + U.replace(W, "$1" + j.trim());
      default:
        if (0 < 1 * Q && 0 < U.indexOf("\f"))
          return U.replace(W, (j.charCodeAt(0) === 58 ? "" : "$1") + j.trim());
    }
    return j + U;
  }
  function c(j, U, Q, ne) {
    var R = j + ";",
      de = 2 * U + 3 * Q + 4 * ne;
    if (de === 944) {
      j = R.indexOf(":", 9) + 1;
      var V = R.substring(j, R.length - 1).trim();
      return (
        (V = R.substring(0, j).trim() + V + ";"),
        Pe === 1 || (Pe === 2 && f(V, 1)) ? "-webkit-" + V + V : V
      );
    }
    if (Pe === 0 || (Pe === 2 && !f(R, 1))) return R;
    switch (de) {
      case 1015:
        return R.charCodeAt(10) === 97 ? "-webkit-" + R + R : R;
      case 951:
        return R.charCodeAt(3) === 116 ? "-webkit-" + R + R : R;
      case 963:
        return R.charCodeAt(5) === 110 ? "-webkit-" + R + R : R;
      case 1009:
        if (R.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + R + R;
      case 978:
        return "-webkit-" + R + "-moz-" + R + R;
      case 1019:
      case 983:
        return "-webkit-" + R + "-moz-" + R + "-ms-" + R + R;
      case 883:
        if (R.charCodeAt(8) === 45) return "-webkit-" + R + R;
        if (0 < R.indexOf("image-set(", 11))
          return R.replace(Le, "$1-webkit-$2") + R;
        break;
      case 932:
        if (R.charCodeAt(4) === 45)
          switch (R.charCodeAt(5)) {
            case 103:
              return (
                "-webkit-box-" +
                R.replace("-grow", "") +
                "-webkit-" +
                R +
                "-ms-" +
                R.replace("grow", "positive") +
                R
              );
            case 115:
              return (
                "-webkit-" + R + "-ms-" + R.replace("shrink", "negative") + R
              );
            case 98:
              return (
                "-webkit-" +
                R +
                "-ms-" +
                R.replace("basis", "preferred-size") +
                R
              );
          }
        return "-webkit-" + R + "-ms-" + R + R;
      case 964:
        return "-webkit-" + R + "-ms-flex-" + R + R;
      case 1023:
        if (R.charCodeAt(8) !== 99) break;
        return (
          (V = R.substring(R.indexOf(":", 15))
            .replace("flex-", "")
            .replace("space-between", "justify")),
          "-webkit-box-pack" + V + "-webkit-" + R + "-ms-flex-pack" + V + R
        );
      case 1005:
        return T.test(R)
          ? R.replace(Y, ":-webkit-") + R.replace(Y, ":-moz-") + R
          : R;
      case 1e3:
        switch (
          ((V = R.substring(13).trim()),
          (U = V.indexOf("-") + 1),
          V.charCodeAt(0) + V.charCodeAt(U))
        ) {
          case 226:
            V = R.replace(L, "tb");
            break;
          case 232:
            V = R.replace(L, "tb-rl");
            break;
          case 220:
            V = R.replace(L, "lr");
            break;
          default:
            return R;
        }
        return "-webkit-" + R + "-ms-" + V + R;
      case 1017:
        if (R.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (
          ((U = (R = j).length - 10),
          (V = (R.charCodeAt(U) === 33 ? R.substring(0, U) : R)
            .substring(j.indexOf(":", 7) + 1)
            .trim()),
          (de = V.charCodeAt(0) + (V.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > V.charCodeAt(8)) break;
          case 115:
            R = R.replace(V, "-webkit-" + V) + ";" + R;
            break;
          case 207:
          case 102:
            R =
              R.replace(V, "-webkit-" + (102 < de ? "inline-" : "") + "box") +
              ";" +
              R.replace(V, "-webkit-" + V) +
              ";" +
              R.replace(V, "-ms-" + V + "box") +
              ";" +
              R;
        }
        return R + ";";
      case 938:
        if (R.charCodeAt(5) === 45)
          switch (R.charCodeAt(6)) {
            case 105:
              return (
                (V = R.replace("-items", "")),
                "-webkit-" + R + "-webkit-box-" + V + "-ms-flex-" + V + R
              );
            case 115:
              return "-webkit-" + R + "-ms-flex-item-" + R.replace(xe, "") + R;
            default:
              return (
                "-webkit-" +
                R +
                "-ms-flex-line-pack" +
                R.replace("align-content", "").replace(xe, "") +
                R
              );
          }
        break;
      case 973:
      case 989:
        if (R.charCodeAt(3) !== 45 || R.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Ae.test(j) === !0)
          return (V = j.substring(j.indexOf(":") + 1)).charCodeAt(0) === 115
            ? c(j.replace("stretch", "fill-available"), U, Q, ne).replace(
                ":fill-available",
                ":stretch"
              )
            : R.replace(V, "-webkit-" + V) +
                R.replace(V, "-moz-" + V.replace("fill-", "")) +
                R;
        break;
      case 962:
        if (
          ((R =
            "-webkit-" + R + (R.charCodeAt(5) === 102 ? "-ms-" + R : "") + R),
          Q + ne === 211 &&
            R.charCodeAt(13) === 105 &&
            0 < R.indexOf("transform", 10))
        )
          return (
            R.substring(0, R.indexOf(";", 27) + 1).replace(v, "$1-webkit-$2") +
            R
          );
    }
    return R;
  }
  function f(j, U) {
    var Q = j.indexOf(U === 1 ? ":" : "{"),
      ne = j.substring(0, U !== 3 ? Q : 10);
    return (
      (Q = j.substring(Q + 1, j.length - 1)),
      ce(U !== 2 ? ne : ne.replace(te, "$1"), Q, U)
    );
  }
  function d(j, U) {
    var Q = c(U, U.charCodeAt(0), U.charCodeAt(1), U.charCodeAt(2));
    return Q !== U + ";"
      ? Q.replace(ge, " or ($1)").substring(4)
      : "(" + U + ")";
  }
  function h(j, U, Q, ne, R, de, V, we, Se, Fe) {
    for (var ke = 0, Ye = U, et; ke < G; ++ke)
      switch ((et = Ce[ke].call(x, j, Ye, Q, ne, R, de, V, we, Se, Fe))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Ye = et;
      }
    if (Ye !== U) return Ye;
  }
  function S(j) {
    switch (j) {
      case void 0:
      case null:
        G = Ce.length = 0;
        break;
      default:
        if (typeof j == "function") Ce[G++] = j;
        else if (typeof j == "object")
          for (var U = 0, Q = j.length; U < Q; ++U) S(j[U]);
        else re = !!j | 0;
    }
    return S;
  }
  function E(j) {
    return (
      (j = j.prefix),
      j !== void 0 &&
        ((ce = null),
        j
          ? typeof j != "function"
            ? (Pe = 1)
            : ((Pe = 2), (ce = j))
          : (Pe = 0)),
      E
    );
  }
  function x(j, U) {
    var Q = j;
    if ((33 > Q.charCodeAt(0) && (Q = Q.trim()), (_ = Q), (Q = [_]), 0 < G)) {
      var ne = h(-1, U, Q, Q, ae, ie, 0, 0, 0, 0);
      ne !== void 0 && typeof ne == "string" && (U = ne);
    }
    var R = s(Me, Q, U, 0, 0);
    return (
      0 < G &&
        ((ne = h(-2, R, Q, Q, ae, ie, R.length, 0, 0, 0)),
        ne !== void 0 && (R = ne)),
      (_ = ""),
      (_e = 0),
      (ie = ae = 1),
      R
    );
  }
  var O = /^\0+/g,
    b = /[\0\r\f]/g,
    Y = /: */g,
    T = /zoo|gra/,
    v = /([,: ])(transform)/g,
    C = /,\r+?/g,
    W = /([\t\r\n ])*\f?&/g,
    z = /@(k\w+)\s*(\S*)\s*/,
    D = /::(place)/g,
    Z = /:(read-only)/g,
    L = /[svh]\w+-[tblr]{2}/,
    he = /\(\s*(.*)\s*\)/g,
    ge = /([\s\S]*?);/g,
    xe = /-self|flex-/g,
    te = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    Ae = /stretch|:\s*\w+\-(?:conte|avail)/,
    Le = /([^-])(image-set\()/,
    ie = 1,
    ae = 1,
    _e = 0,
    Pe = 1,
    Me = [],
    Ce = [],
    G = 0,
    ce = null,
    re = 0,
    _ = "";
  return (x.use = S), (x.set = E), n !== void 0 && E(n), x;
}
var sg = {
  animationIterationCount: 1,
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
};
function lg(n) {
  var s = Object.create(null);
  return function (o) {
    return s[o] === void 0 && (s[o] = n(o)), s[o];
  };
}
var ag =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Ad = lg(function (n) {
    return (
      ag.test(n) ||
      (n.charCodeAt(0) === 111 &&
        n.charCodeAt(1) === 110 &&
        n.charCodeAt(2) < 91)
    );
  }),
  Ta = { exports: {} },
  Ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd;
function ug() {
  if (jd) return Ve;
  jd = 1;
  var n = typeof Symbol == "function" && Symbol.for,
    s = n ? Symbol.for("react.element") : 60103,
    o = n ? Symbol.for("react.portal") : 60106,
    a = n ? Symbol.for("react.fragment") : 60107,
    c = n ? Symbol.for("react.strict_mode") : 60108,
    f = n ? Symbol.for("react.profiler") : 60114,
    d = n ? Symbol.for("react.provider") : 60109,
    h = n ? Symbol.for("react.context") : 60110,
    S = n ? Symbol.for("react.async_mode") : 60111,
    E = n ? Symbol.for("react.concurrent_mode") : 60111,
    x = n ? Symbol.for("react.forward_ref") : 60112,
    O = n ? Symbol.for("react.suspense") : 60113,
    b = n ? Symbol.for("react.suspense_list") : 60120,
    Y = n ? Symbol.for("react.memo") : 60115,
    T = n ? Symbol.for("react.lazy") : 60116,
    v = n ? Symbol.for("react.block") : 60121,
    C = n ? Symbol.for("react.fundamental") : 60117,
    W = n ? Symbol.for("react.responder") : 60118,
    z = n ? Symbol.for("react.scope") : 60119;
  function D(L) {
    if (typeof L == "object" && L !== null) {
      var he = L.$$typeof;
      switch (he) {
        case s:
          switch (((L = L.type), L)) {
            case S:
            case E:
            case a:
            case f:
            case c:
            case O:
              return L;
            default:
              switch (((L = L && L.$$typeof), L)) {
                case h:
                case x:
                case T:
                case Y:
                case d:
                  return L;
                default:
                  return he;
              }
          }
        case o:
          return he;
      }
    }
  }
  function Z(L) {
    return D(L) === E;
  }
  return (
    (Ve.AsyncMode = S),
    (Ve.ConcurrentMode = E),
    (Ve.ContextConsumer = h),
    (Ve.ContextProvider = d),
    (Ve.Element = s),
    (Ve.ForwardRef = x),
    (Ve.Fragment = a),
    (Ve.Lazy = T),
    (Ve.Memo = Y),
    (Ve.Portal = o),
    (Ve.Profiler = f),
    (Ve.StrictMode = c),
    (Ve.Suspense = O),
    (Ve.isAsyncMode = function (L) {
      return Z(L) || D(L) === S;
    }),
    (Ve.isConcurrentMode = Z),
    (Ve.isContextConsumer = function (L) {
      return D(L) === h;
    }),
    (Ve.isContextProvider = function (L) {
      return D(L) === d;
    }),
    (Ve.isElement = function (L) {
      return typeof L == "object" && L !== null && L.$$typeof === s;
    }),
    (Ve.isForwardRef = function (L) {
      return D(L) === x;
    }),
    (Ve.isFragment = function (L) {
      return D(L) === a;
    }),
    (Ve.isLazy = function (L) {
      return D(L) === T;
    }),
    (Ve.isMemo = function (L) {
      return D(L) === Y;
    }),
    (Ve.isPortal = function (L) {
      return D(L) === o;
    }),
    (Ve.isProfiler = function (L) {
      return D(L) === f;
    }),
    (Ve.isStrictMode = function (L) {
      return D(L) === c;
    }),
    (Ve.isSuspense = function (L) {
      return D(L) === O;
    }),
    (Ve.isValidElementType = function (L) {
      return (
        typeof L == "string" ||
        typeof L == "function" ||
        L === a ||
        L === E ||
        L === f ||
        L === c ||
        L === O ||
        L === b ||
        (typeof L == "object" &&
          L !== null &&
          (L.$$typeof === T ||
            L.$$typeof === Y ||
            L.$$typeof === d ||
            L.$$typeof === h ||
            L.$$typeof === x ||
            L.$$typeof === C ||
            L.$$typeof === W ||
            L.$$typeof === z ||
            L.$$typeof === v))
      );
    }),
    (Ve.typeOf = D),
    Ve
  );
}
var Nd;
function cg() {
  return Nd || ((Nd = 1), (Ta.exports = ug())), Ta.exports;
}
var Ra, zd;
function fg() {
  if (zd) return Ra;
  zd = 1;
  var n = cg(),
    s = {
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
    o = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    a = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    c = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    f = {};
  (f[n.ForwardRef] = a), (f[n.Memo] = c);
  function d(T) {
    return n.isMemo(T) ? c : f[T.$$typeof] || s;
  }
  var h = Object.defineProperty,
    S = Object.getOwnPropertyNames,
    E = Object.getOwnPropertySymbols,
    x = Object.getOwnPropertyDescriptor,
    O = Object.getPrototypeOf,
    b = Object.prototype;
  function Y(T, v, C) {
    if (typeof v != "string") {
      if (b) {
        var W = O(v);
        W && W !== b && Y(T, W, C);
      }
      var z = S(v);
      E && (z = z.concat(E(v)));
      for (var D = d(T), Z = d(v), L = 0; L < z.length; ++L) {
        var he = z[L];
        if (!o[he] && !(C && C[he]) && !(Z && Z[he]) && !(D && D[he])) {
          var ge = x(v, he);
          try {
            h(T, he, ge);
          } catch {}
        }
      }
    }
    return T;
  }
  return (Ra = Y), Ra;
}
var dg = fg();
const pg = Ha(dg);
var qt = {};
function hr() {
  return (hr =
    Object.assign ||
    function (n) {
      for (var s = 1; s < arguments.length; s++) {
        var o = arguments[s];
        for (var a in o)
          Object.prototype.hasOwnProperty.call(o, a) && (n[a] = o[a]);
      }
      return n;
    }).apply(this, arguments);
}
var Ld = function (n, s) {
    for (var o = [n[0]], a = 0, c = s.length; a < c; a += 1)
      o.push(s[a], n[a + 1]);
    return o;
  },
  Da = function (n) {
    return (
      n !== null &&
      typeof n == "object" &&
      (n.toString ? n.toString() : Object.prototype.toString.call(n)) ===
        "[object Object]" &&
      !Np.typeOf(n)
    );
  },
  vs = Object.freeze([]),
  Hr = Object.freeze({});
function Vi(n) {
  return typeof n == "function";
}
function Fd(n) {
  return n.displayName || n.name || "Component";
}
function nu(n) {
  return n && typeof n.styledComponentId == "string";
}
var Kn =
    (typeof process < "u" &&
      qt !== void 0 &&
      (qt.REACT_APP_SC_ATTR || qt.SC_ATTR)) ||
    "data-styled",
  iu = typeof window < "u" && "HTMLElement" in window,
  hg = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      qt !== void 0 &&
      (qt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      qt.REACT_APP_SC_DISABLE_SPEEDY !== ""
        ? qt.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
          qt.REACT_APP_SC_DISABLE_SPEEDY
        : qt.SC_DISABLE_SPEEDY !== void 0 &&
          qt.SC_DISABLE_SPEEDY !== "" &&
          qt.SC_DISABLE_SPEEDY !== "false" &&
          qt.SC_DISABLE_SPEEDY)),
  mg = {};
function Ki(n) {
  for (
    var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), a = 1;
    a < s;
    a++
  )
    o[a - 1] = arguments[a];
  throw new Error(
    "An error occurred. See https://git.io/JUIaE#" +
      n +
      " for more information." +
      (o.length > 0 ? " Args: " + o.join(", ") : "")
  );
}
var gg = (function () {
    function n(o) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = o);
    }
    var s = n.prototype;
    return (
      (s.indexOfGroup = function (o) {
        for (var a = 0, c = 0; c < o; c++) a += this.groupSizes[c];
        return a;
      }),
      (s.insertRules = function (o, a) {
        if (o >= this.groupSizes.length) {
          for (var c = this.groupSizes, f = c.length, d = f; o >= d; )
            (d <<= 1) < 0 && Ki(16, "" + o);
          (this.groupSizes = new Uint32Array(d)),
            this.groupSizes.set(c),
            (this.length = d);
          for (var h = f; h < d; h++) this.groupSizes[h] = 0;
        }
        for (var S = this.indexOfGroup(o + 1), E = 0, x = a.length; E < x; E++)
          this.tag.insertRule(S, a[E]) && (this.groupSizes[o]++, S++);
      }),
      (s.clearGroup = function (o) {
        if (o < this.length) {
          var a = this.groupSizes[o],
            c = this.indexOfGroup(o),
            f = c + a;
          this.groupSizes[o] = 0;
          for (var d = c; d < f; d++) this.tag.deleteRule(c);
        }
      }),
      (s.getGroup = function (o) {
        var a = "";
        if (o >= this.length || this.groupSizes[o] === 0) return a;
        for (
          var c = this.groupSizes[o],
            f = this.indexOfGroup(o),
            d = f + c,
            h = f;
          h < d;
          h++
        )
          a +=
            this.tag.getRule(h) +
            `/*!sc*/
`;
        return a;
      }),
      n
    );
  })(),
  as = new Map(),
  ws = new Map(),
  $i = 1,
  rs = function (n) {
    if (as.has(n)) return as.get(n);
    for (; ws.has($i); ) $i++;
    var s = $i++;
    return as.set(n, s), ws.set(s, n), s;
  },
  yg = function (n) {
    return ws.get(n);
  },
  vg = function (n, s) {
    s >= $i && ($i = s + 1), as.set(n, s), ws.set(s, n);
  },
  wg = "style[" + Kn + '][data-styled-version="5.3.11"]',
  xg = new RegExp("^" + Kn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  Sg = function (n, s, o) {
    for (var a, c = o.split(","), f = 0, d = c.length; f < d; f++)
      (a = c[f]) && n.registerName(s, a);
  },
  kg = function (n, s) {
    for (
      var o = (s.textContent || "").split(`/*!sc*/
`),
        a = [],
        c = 0,
        f = o.length;
      c < f;
      c++
    ) {
      var d = o[c].trim();
      if (d) {
        var h = d.match(xg);
        if (h) {
          var S = 0 | parseInt(h[1], 10),
            E = h[2];
          S !== 0 && (vg(E, S), Sg(n, E, h[3]), n.getTag().insertRules(S, a)),
            (a.length = 0);
        } else a.push(d);
      }
    }
  },
  Eg = function () {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
  },
  zp = function (n) {
    var s = document.head,
      o = n || s,
      a = document.createElement("style"),
      c = (function (h) {
        for (var S = h.childNodes, E = S.length; E >= 0; E--) {
          var x = S[E];
          if (x && x.nodeType === 1 && x.hasAttribute(Kn)) return x;
        }
      })(o),
      f = c !== void 0 ? c.nextSibling : null;
    a.setAttribute(Kn, "active"),
      a.setAttribute("data-styled-version", "5.3.11");
    var d = Eg();
    return d && a.setAttribute("nonce", d), o.insertBefore(a, f), a;
  },
  Cg = (function () {
    function n(o) {
      var a = (this.element = zp(o));
      a.appendChild(document.createTextNode("")),
        (this.sheet = (function (c) {
          if (c.sheet) return c.sheet;
          for (var f = document.styleSheets, d = 0, h = f.length; d < h; d++) {
            var S = f[d];
            if (S.ownerNode === c) return S;
          }
          Ki(17);
        })(a)),
        (this.length = 0);
    }
    var s = n.prototype;
    return (
      (s.insertRule = function (o, a) {
        try {
          return this.sheet.insertRule(a, o), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (s.deleteRule = function (o) {
        this.sheet.deleteRule(o), this.length--;
      }),
      (s.getRule = function (o) {
        var a = this.sheet.cssRules[o];
        return a !== void 0 && typeof a.cssText == "string" ? a.cssText : "";
      }),
      n
    );
  })(),
  _g = (function () {
    function n(o) {
      var a = (this.element = zp(o));
      (this.nodes = a.childNodes), (this.length = 0);
    }
    var s = n.prototype;
    return (
      (s.insertRule = function (o, a) {
        if (o <= this.length && o >= 0) {
          var c = document.createTextNode(a),
            f = this.nodes[o];
          return this.element.insertBefore(c, f || null), this.length++, !0;
        }
        return !1;
      }),
      (s.deleteRule = function (o) {
        this.element.removeChild(this.nodes[o]), this.length--;
      }),
      (s.getRule = function (o) {
        return o < this.length ? this.nodes[o].textContent : "";
      }),
      n
    );
  })(),
  Tg = (function () {
    function n(o) {
      (this.rules = []), (this.length = 0);
    }
    var s = n.prototype;
    return (
      (s.insertRule = function (o, a) {
        return (
          o <= this.length && (this.rules.splice(o, 0, a), this.length++, !0)
        );
      }),
      (s.deleteRule = function (o) {
        this.rules.splice(o, 1), this.length--;
      }),
      (s.getRule = function (o) {
        return o < this.length ? this.rules[o] : "";
      }),
      n
    );
  })(),
  bd = iu,
  Rg = { isServer: !iu, useCSSOMInjection: !hg },
  xs = (function () {
    function n(o, a, c) {
      o === void 0 && (o = Hr),
        a === void 0 && (a = {}),
        (this.options = hr({}, Rg, {}, o)),
        (this.gs = a),
        (this.names = new Map(c)),
        (this.server = !!o.isServer),
        !this.server &&
          iu &&
          bd &&
          ((bd = !1),
          (function (f) {
            for (
              var d = document.querySelectorAll(wg), h = 0, S = d.length;
              h < S;
              h++
            ) {
              var E = d[h];
              E &&
                E.getAttribute(Kn) !== "active" &&
                (kg(f, E), E.parentNode && E.parentNode.removeChild(E));
            }
          })(this));
    }
    n.registerId = function (o) {
      return rs(o);
    };
    var s = n.prototype;
    return (
      (s.reconstructWithOptions = function (o, a) {
        return (
          a === void 0 && (a = !0),
          new n(
            hr({}, this.options, {}, o),
            this.gs,
            (a && this.names) || void 0
          )
        );
      }),
      (s.allocateGSInstance = function (o) {
        return (this.gs[o] = (this.gs[o] || 0) + 1);
      }),
      (s.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((c = (a = this.options).isServer),
            (f = a.useCSSOMInjection),
            (d = a.target),
            (o = c ? new Tg(d) : f ? new Cg(d) : new _g(d)),
            new gg(o)))
        );
        var o, a, c, f, d;
      }),
      (s.hasNameForId = function (o, a) {
        return this.names.has(o) && this.names.get(o).has(a);
      }),
      (s.registerName = function (o, a) {
        if ((rs(o), this.names.has(o))) this.names.get(o).add(a);
        else {
          var c = new Set();
          c.add(a), this.names.set(o, c);
        }
      }),
      (s.insertRules = function (o, a, c) {
        this.registerName(o, a), this.getTag().insertRules(rs(o), c);
      }),
      (s.clearNames = function (o) {
        this.names.has(o) && this.names.get(o).clear();
      }),
      (s.clearRules = function (o) {
        this.getTag().clearGroup(rs(o)), this.clearNames(o);
      }),
      (s.clearTag = function () {
        this.tag = void 0;
      }),
      (s.toString = function () {
        return (function (o) {
          for (var a = o.getTag(), c = a.length, f = "", d = 0; d < c; d++) {
            var h = yg(d);
            if (h !== void 0) {
              var S = o.names.get(h),
                E = a.getGroup(d);
              if (S && E && S.size) {
                var x = Kn + ".g" + d + '[id="' + h + '"]',
                  O = "";
                S !== void 0 &&
                  S.forEach(function (b) {
                    b.length > 0 && (O += b + ",");
                  }),
                  (f +=
                    "" +
                    E +
                    x +
                    '{content:"' +
                    O +
                    `"}/*!sc*/
`);
              }
            }
          }
          return f;
        })(this);
      }),
      n
    );
  })(),
  Pg = /(a)(d)/gi,
  Id = function (n) {
    return String.fromCharCode(n + (n > 25 ? 39 : 97));
  };
function Va(n) {
  var s,
    o = "";
  for (s = Math.abs(n); s > 52; s = (s / 52) | 0) o = Id(s % 52) + o;
  return (Id(s % 52) + o).replace(Pg, "$1-$2");
}
var Wn = function (n, s) {
    for (var o = s.length; o; ) n = (33 * n) ^ s.charCodeAt(--o);
    return n;
  },
  Lp = function (n) {
    return Wn(5381, n);
  };
function Fp(n) {
  for (var s = 0; s < n.length; s += 1) {
    var o = n[s];
    if (Vi(o) && !nu(o)) return !1;
  }
  return !0;
}
var Og = Lp("5.3.11"),
  Ag = (function () {
    function n(s, o, a) {
      (this.rules = s),
        (this.staticRulesId = ""),
        (this.isStatic = (a === void 0 || a.isStatic) && Fp(s)),
        (this.componentId = o),
        (this.baseHash = Wn(Og, o)),
        (this.baseStyle = a),
        xs.registerId(o);
    }
    return (
      (n.prototype.generateAndInjectStyles = function (s, o, a) {
        var c = this.componentId,
          f = [];
        if (
          (this.baseStyle &&
            f.push(this.baseStyle.generateAndInjectStyles(s, o, a)),
          this.isStatic && !a.hash)
        )
          if (this.staticRulesId && o.hasNameForId(c, this.staticRulesId))
            f.push(this.staticRulesId);
          else {
            var d = un(this.rules, s, o, a).join(""),
              h = Va(Wn(this.baseHash, d) >>> 0);
            if (!o.hasNameForId(c, h)) {
              var S = a(d, "." + h, void 0, c);
              o.insertRules(c, h, S);
            }
            f.push(h), (this.staticRulesId = h);
          }
        else {
          for (
            var E = this.rules.length,
              x = Wn(this.baseHash, a.hash),
              O = "",
              b = 0;
            b < E;
            b++
          ) {
            var Y = this.rules[b];
            if (typeof Y == "string") O += Y;
            else if (Y) {
              var T = un(Y, s, o, a),
                v = Array.isArray(T) ? T.join("") : T;
              (x = Wn(x, v + b)), (O += v);
            }
          }
          if (O) {
            var C = Va(x >>> 0);
            if (!o.hasNameForId(c, C)) {
              var W = a(O, "." + C, void 0, c);
              o.insertRules(c, C, W);
            }
            f.push(C);
          }
        }
        return f.join(" ");
      }),
      n
    );
  })(),
  jg = /^\s*\/\/.*$/gm,
  Ng = [":", "[", ".", "#"];
function zg(n) {
  var s,
    o,
    a,
    c,
    f = Hr,
    d = f.options,
    h = d === void 0 ? Hr : d,
    S = f.plugins,
    E = S === void 0 ? vs : S,
    x = new og(h),
    O = [],
    b = (function (v) {
      function C(W) {
        if (W)
          try {
            v(W + "}");
          } catch {}
      }
      return function (W, z, D, Z, L, he, ge, xe, te, Ae) {
        switch (W) {
          case 1:
            if (te === 0 && z.charCodeAt(0) === 64) return v(z + ";"), "";
            break;
          case 2:
            if (xe === 0) return z + "/*|*/";
            break;
          case 3:
            switch (xe) {
              case 102:
              case 112:
                return v(D[0] + z), "";
              default:
                return z + (Ae === 0 ? "/*|*/" : "");
            }
          case -2:
            z.split("/*|*/}").forEach(C);
        }
      };
    })(function (v) {
      O.push(v);
    }),
    Y = function (v, C, W) {
      return (C === 0 && Ng.indexOf(W[o.length]) !== -1) || W.match(c)
        ? v
        : "." + s;
    };
  function T(v, C, W, z) {
    z === void 0 && (z = "&");
    var D = v.replace(jg, ""),
      Z = C && W ? W + " " + C + " { " + D + " }" : D;
    return (
      (s = z),
      (o = C),
      (a = new RegExp("\\" + o + "\\b", "g")),
      (c = new RegExp("(\\" + o + "\\b){2,}")),
      x(W || !C ? "" : C, Z)
    );
  }
  return (
    x.use(
      [].concat(E, [
        function (v, C, W) {
          v === 2 &&
            W.length &&
            W[0].lastIndexOf(o) > 0 &&
            (W[0] = W[0].replace(a, Y));
        },
        b,
        function (v) {
          if (v === -2) {
            var C = O;
            return (O = []), C;
          }
        },
      ])
    ),
    (T.hash = E.length
      ? E.reduce(function (v, C) {
          return C.name || Ki(15), Wn(v, C.name);
        }, 5381).toString()
      : ""),
    T
  );
}
var bp = Te.createContext();
bp.Consumer;
var Ip = Te.createContext(),
  Lg = (Ip.Consumer, new xs()),
  Ba = zg();
function Mp() {
  return Ie.useContext(bp) || Lg;
}
function $p() {
  return Ie.useContext(Ip) || Ba;
}
var Dp = (function () {
    function n(s, o) {
      var a = this;
      (this.inject = function (c, f) {
        f === void 0 && (f = Ba);
        var d = a.name + f.hash;
        c.hasNameForId(a.id, d) ||
          c.insertRules(a.id, d, f(a.rules, d, "@keyframes"));
      }),
        (this.toString = function () {
          return Ki(12, String(a.name));
        }),
        (this.name = s),
        (this.id = "sc-keyframes-" + s),
        (this.rules = o);
    }
    return (
      (n.prototype.getName = function (s) {
        return s === void 0 && (s = Ba), this.name + s.hash;
      }),
      n
    );
  })(),
  Fg = /([A-Z])/,
  bg = /([A-Z])/g,
  Ig = /^ms-/,
  Mg = function (n) {
    return "-" + n.toLowerCase();
  };
function Md(n) {
  return Fg.test(n) ? n.replace(bg, Mg).replace(Ig, "-ms-") : n;
}
var $d = function (n) {
  return n == null || n === !1 || n === "";
};
function un(n, s, o, a) {
  if (Array.isArray(n)) {
    for (var c, f = [], d = 0, h = n.length; d < h; d += 1)
      (c = un(n[d], s, o, a)) !== "" &&
        (Array.isArray(c) ? f.push.apply(f, c) : f.push(c));
    return f;
  }
  if ($d(n)) return "";
  if (nu(n)) return "." + n.styledComponentId;
  if (Vi(n)) {
    if (
      typeof (E = n) != "function" ||
      (E.prototype && E.prototype.isReactComponent) ||
      !s
    )
      return n;
    var S = n(s);
    return un(S, s, o, a);
  }
  var E;
  return n instanceof Dp
    ? o
      ? (n.inject(o, a), n.getName(a))
      : n
    : Da(n)
    ? (function x(O, b) {
        var Y,
          T,
          v = [];
        for (var C in O)
          O.hasOwnProperty(C) &&
            !$d(O[C]) &&
            ((Array.isArray(O[C]) && O[C].isCss) || Vi(O[C])
              ? v.push(Md(C) + ":", O[C], ";")
              : Da(O[C])
              ? v.push.apply(v, x(O[C], C))
              : v.push(
                  Md(C) +
                    ": " +
                    ((Y = C),
                    (T = O[C]) == null || typeof T == "boolean" || T === ""
                      ? ""
                      : typeof T != "number" ||
                        T === 0 ||
                        Y in sg ||
                        Y.startsWith("--")
                      ? String(T).trim()
                      : T + "px") +
                    ";"
                ));
        return b ? [b + " {"].concat(v, ["}"]) : v;
      })(n)
    : n.toString();
}
var Dd = function (n) {
  return Array.isArray(n) && (n.isCss = !0), n;
};
function ou(n) {
  for (
    var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), a = 1;
    a < s;
    a++
  )
    o[a - 1] = arguments[a];
  return Vi(n) || Da(n)
    ? Dd(un(Ld(vs, [n].concat(o))))
    : o.length === 0 && n.length === 1 && typeof n[0] == "string"
    ? n
    : Dd(un(Ld(n, o)));
}
var Vp = function (n, s, o) {
    return (
      o === void 0 && (o = Hr), (n.theme !== o.theme && n.theme) || s || o.theme
    );
  },
  $g = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Dg = /(^-|-$)/g;
function Pa(n) {
  return n.replace($g, "-").replace(Dg, "");
}
var su = function (n) {
  return Va(Lp(n) >>> 0);
};
function ns(n) {
  return typeof n == "string" && !0;
}
var Ua = function (n) {
    return (
      typeof n == "function" ||
      (typeof n == "object" && n !== null && !Array.isArray(n))
    );
  },
  Vg = function (n) {
    return n !== "__proto__" && n !== "constructor" && n !== "prototype";
  };
function Bg(n, s, o) {
  var a = n[o];
  Ua(s) && Ua(a) ? Bp(a, s) : (n[o] = s);
}
function Bp(n) {
  for (
    var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), a = 1;
    a < s;
    a++
  )
    o[a - 1] = arguments[a];
  for (var c = 0, f = o; c < f.length; c++) {
    var d = f[c];
    if (Ua(d)) for (var h in d) Vg(h) && Bg(n, d[h], h);
  }
  return n;
}
var lu = Te.createContext();
lu.Consumer;
var Oa = {};
function Up(n, s, o) {
  var a = nu(n),
    c = !ns(n),
    f = s.attrs,
    d = f === void 0 ? vs : f,
    h = s.componentId,
    S =
      h === void 0
        ? (function (z, D) {
            var Z = typeof z != "string" ? "sc" : Pa(z);
            Oa[Z] = (Oa[Z] || 0) + 1;
            var L = Z + "-" + su("5.3.11" + Z + Oa[Z]);
            return D ? D + "-" + L : L;
          })(s.displayName, s.parentComponentId)
        : h,
    E = s.displayName,
    x =
      E === void 0
        ? (function (z) {
            return ns(z) ? "styled." + z : "Styled(" + Fd(z) + ")";
          })(n)
        : E,
    O =
      s.displayName && s.componentId
        ? Pa(s.displayName) + "-" + s.componentId
        : s.componentId || S,
    b = a && n.attrs ? Array.prototype.concat(n.attrs, d).filter(Boolean) : d,
    Y = s.shouldForwardProp;
  a &&
    n.shouldForwardProp &&
    (Y = s.shouldForwardProp
      ? function (z, D, Z) {
          return n.shouldForwardProp(z, D, Z) && s.shouldForwardProp(z, D, Z);
        }
      : n.shouldForwardProp);
  var T,
    v = new Ag(o, O, a ? n.componentStyle : void 0),
    C = v.isStatic && d.length === 0,
    W = function (z, D) {
      return (function (Z, L, he, ge) {
        var xe = Z.attrs,
          te = Z.componentStyle,
          Ae = Z.defaultProps,
          Le = Z.foldedComponentIds,
          ie = Z.shouldForwardProp,
          ae = Z.styledComponentId,
          _e = Z.target,
          Pe = (function (ne, R, de) {
            ne === void 0 && (ne = Hr);
            var V = hr({}, R, { theme: ne }),
              we = {};
            return (
              de.forEach(function (Se) {
                var Fe,
                  ke,
                  Ye,
                  et = Se;
                for (Fe in (Vi(et) && (et = et(V)), et))
                  V[Fe] = we[Fe] =
                    Fe === "className"
                      ? ((ke = we[Fe]),
                        (Ye = et[Fe]),
                        ke && Ye ? ke + " " + Ye : ke || Ye)
                      : et[Fe];
              }),
              [V, we]
            );
          })(Vp(L, Ie.useContext(lu), Ae) || Hr, L, xe),
          Me = Pe[0],
          Ce = Pe[1],
          G = (function (ne, R, de, V) {
            var we = Mp(),
              Se = $p(),
              Fe = R
                ? ne.generateAndInjectStyles(Hr, we, Se)
                : ne.generateAndInjectStyles(de, we, Se);
            return Fe;
          })(te, ge, Me),
          ce = he,
          re = Ce.$as || L.$as || Ce.as || L.as || _e,
          _ = ns(re),
          j = Ce !== L ? hr({}, L, {}, Ce) : L,
          U = {};
        for (var Q in j)
          Q[0] !== "$" &&
            Q !== "as" &&
            (Q === "forwardedAs"
              ? (U.as = j[Q])
              : (ie ? ie(Q, Ad, re) : !_ || Ad(Q)) && (U[Q] = j[Q]));
        return (
          L.style &&
            Ce.style !== L.style &&
            (U.style = hr({}, L.style, {}, Ce.style)),
          (U.className = Array.prototype
            .concat(Le, ae, G !== ae ? G : null, L.className, Ce.className)
            .filter(Boolean)
            .join(" ")),
          (U.ref = ce),
          Ie.createElement(re, U)
        );
      })(T, z, D, C);
    };
  return (
    (W.displayName = x),
    ((T = Te.forwardRef(W)).attrs = b),
    (T.componentStyle = v),
    (T.displayName = x),
    (T.shouldForwardProp = Y),
    (T.foldedComponentIds = a
      ? Array.prototype.concat(n.foldedComponentIds, n.styledComponentId)
      : vs),
    (T.styledComponentId = O),
    (T.target = a ? n.target : n),
    (T.withComponent = function (z) {
      var D = s.componentId,
        Z = (function (he, ge) {
          if (he == null) return {};
          var xe,
            te,
            Ae = {},
            Le = Object.keys(he);
          for (te = 0; te < Le.length; te++)
            (xe = Le[te]), ge.indexOf(xe) >= 0 || (Ae[xe] = he[xe]);
          return Ae;
        })(s, ["componentId"]),
        L = D && D + "-" + (ns(z) ? z : Pa(Fd(z)));
      return Up(z, hr({}, Z, { attrs: b, componentId: L }), o);
    }),
    Object.defineProperty(T, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (z) {
        this._foldedDefaultProps = a ? Bp({}, n.defaultProps, z) : z;
      },
    }),
    Object.defineProperty(T, "toString", {
      value: function () {
        return "." + T.styledComponentId;
      },
    }),
    c &&
      pg(T, n, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    T
  );
}
var J = function (n) {
  return (function s(o, a, c) {
    if ((c === void 0 && (c = Hr), !Np.isValidElementType(a)))
      return Ki(1, String(a));
    var f = function () {
      return o(a, c, ou.apply(void 0, arguments));
    };
    return (
      (f.withConfig = function (d) {
        return s(o, a, hr({}, c, {}, d));
      }),
      (f.attrs = function (d) {
        return s(
          o,
          a,
          hr({}, c, {
            attrs: Array.prototype.concat(c.attrs, d).filter(Boolean),
          })
        );
      }),
      f
    );
  })(Up, n);
};
[
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
  "head",
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
  "marquee",
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
  "title",
  "tr",
  "track",
  "u",
  "ul",
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
  "textPath",
  "tspan",
].forEach(function (n) {
  J[n] = J(n);
});
var Ug = (function () {
  function n(o, a) {
    (this.rules = o),
      (this.componentId = a),
      (this.isStatic = Fp(o)),
      xs.registerId(this.componentId + 1);
  }
  var s = n.prototype;
  return (
    (s.createStyles = function (o, a, c, f) {
      var d = f(un(this.rules, a, c, f).join(""), ""),
        h = this.componentId + o;
      c.insertRules(h, h, d);
    }),
    (s.removeStyles = function (o, a) {
      a.clearRules(this.componentId + o);
    }),
    (s.renderStyles = function (o, a, c, f) {
      o > 2 && xs.registerId(this.componentId + o),
        this.removeStyles(o, c),
        this.createStyles(o, a, c, f);
    }),
    n
  );
})();
function Hg(n) {
  for (
    var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), a = 1;
    a < s;
    a++
  )
    o[a - 1] = arguments[a];
  var c = ou.apply(void 0, [n].concat(o)),
    f = "sc-global-" + su(JSON.stringify(c)),
    d = new Ug(c, f);
  function h(E) {
    var x = Mp(),
      O = $p(),
      b = Ie.useContext(lu),
      Y = Ie.useRef(x.allocateGSInstance(f)).current;
    return (
      x.server && S(Y, E, x, b, O),
      Ie.useLayoutEffect(
        function () {
          if (!x.server)
            return (
              S(Y, E, x, b, O),
              function () {
                return d.removeStyles(Y, x);
              }
            );
        },
        [Y, E, x, b, O]
      ),
      null
    );
  }
  function S(E, x, O, b, Y) {
    if (d.isStatic) d.renderStyles(E, mg, O, Y);
    else {
      var T = hr({}, x, { theme: Vp(x, b, h.defaultProps) });
      d.renderStyles(E, T, O, Y);
    }
  }
  return Te.memo(h);
}
function or(n) {
  for (
    var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), a = 1;
    a < s;
    a++
  )
    o[a - 1] = arguments[a];
  var c = ou.apply(void 0, [n].concat(o)).join(""),
    f = su(c);
  return new Dp(f, c);
}
const au = (n, s) => {
    if (!n || typeof n != "string" || !n.startsWith("#") || n.length < 7)
      return "#c0c0c0";
    let o = parseInt(n.substring(1, 3), 16),
      a = parseInt(n.substring(3, 5), 16),
      c = parseInt(n.substring(5, 7), 16);
    const f = Math.min(1, Math.max(0, s / 100));
    (o = Math.round(o + (255 - o) * f)),
      (a = Math.round(a + (255 - a) * f)),
      (c = Math.round(c + (255 - c) * f));
    const d = (h) => h.toString(16).padStart(2, "0");
    return `#${d(o)}${d(a)}${d(c)}`;
  },
  Wg = (n, s) => {
    if (!n || typeof n != "string" || !n.startsWith("#")) return "#999";
    let o = parseInt(n.substring(1, 3), 16),
      a = parseInt(n.substring(3, 5), 16),
      c = parseInt(n.substring(5, 7), 16);
    (o = Math.max(0, o - o * (s / 100))),
      (a = Math.max(0, a - a * (s / 100))),
      (c = Math.max(0, c - c * (s / 100)));
    const f = (d) => Math.round(d).toString(16).padStart(2, "0");
    return `#${f(o)}${f(a)}${f(c)}`;
  },
  Kg = J.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.29);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,
  Qg = or`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  qg = or`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,
  Yg = J.div`
  position: relative;
  width: 450px;
  padding: 3px;
  border-radius: 16px;
  overflow: hidden;
  background-color: transparent;

  animation: ${qg} 0.3s ease-out forwards;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    border-radius: inherit;
    background: conic-gradient(
      from 0deg,
      transparent 0%,
      transparent 25%,
      ${({ $mainColor: n }) => n} 40%,
      ${({ $mainColor: n }) => n} 60%,
      transparent 75%,
      transparent 100%
    );
    animation: ${Qg} 4s linear infinite;
    z-index: 0;
  }
`,
  Gg = J.div`
  background: white;
  border-radius: 14px;
  padding: 2rem 2rem 1rem;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`,
  Xg = J.button`
  position: absolute;
  top: .75rem;
  right: .75rem;
  background: white;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  &:hover {
    background: #ddd;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,
  Aa = J.h2`
  font-size: 1rem;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`,
  Vd = J.p`
  font-size: .85rem;
  color: #333;
  text-align: center;
`,
  Jg = J.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 1rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, #ffffff, #ddd, #ffffff);
    z-index: 0;
  }

  svg {
    z-index: 1;
    background: #fff;
    border: 2px solid ${({ $mainColor: n }) => n || "#ff69b4"};
    border-radius: 50%;
    padding: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,
  Zg = J.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, #ffffff, #ddd, #ffffff);
    z-index: 0;
  }
`,
  ey = J.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom:.5rem;
  flex-wrap: wrap;
`;
J.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ty = J.label`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #444;
  line-height: 1.4;
  cursor: pointer;
  margin-top:15px;
  margin-bottom:10px;
  input {
    margin-top: 0.15rem;
    accent-color: #555;
    cursor: pointer;
  }
`,
  ry = J.p`
  font-size: 0.75rem;
  color: #444;
  line-height: 1.5;
  margin:0
`,
  ny = J.a`
  font-weight: bold;
  text-decoration: none;
  font-size: 0.75rem;
  color: #444;
  line-height: 1.5;
  text-decoration: underline;
`,
  iy = J.input.attrs({ type: "checkbox" })`
  margin-top: 0.15rem;
  accent-color: ${({ $mainColor: n }) => n || "#ddd"};
  cursor: pointer;
`,
  oy = or`
  0% { transform: rotate(0deg); }
  20% { transform: rotate(-10deg); }
  40% { transform: rotate(10deg); }
  60% { transform: rotate(-8deg); }
  80% { transform: rotate(8deg); }
  100% { transform: rotate(0deg); }
`,
  sy = J.button`
  background: ${({ $mainColor: n }) => n};
  color: white;
  border: none;
  padding: 0.9rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  text-align: center;
  margin-top:10px;
  transition: background-color 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    background: ${({ $mainColor: n }) => Wg(n, 20)};
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(160, 160, 160, 0.4);
    svg {
      animation: ${oy} 1.5s infinite ease-in-out;
      transform-origin: center;
    }
  }
`,
  ly = J.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 2px solid ${({ $mainColor: n }) => au(n, 70)};
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.3s ease;
  margin-top:20px;
  &:focus-within {
    border-color: ${({ $mainColor: n }) => n || "#007bff"};
  }
`,
  ay = J.span`
  color: #212529;
  padding: 0.75rem 12px;
  font-size: 1rem;
  user-select: none;
  display: flex;
  align-items: center;
  border-right: 1px solid ${({ $mainColor: n }) => au(n, 70)};
  height: 100%;
`,
  uy = J.input`
  flex: 1;
  padding: 0.75rem 0.5rem;
  border: none;
  font-size: 1rem;
  outline: none;
  &::placeholder {
    color: #aaa;
  }
`,
  cy = J.a`
  display: flex;
  font-size: 0.75rem;
  color: #000;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  text-decoration:none;
  justify-content:center;
  svg {
    height: 16px;
    width: auto;
    display: block;
    margin-left: .3rem;
    margin-right: .3rem;
  }
  &:hover {
    color: ${({ $mainColor: n }) => n};
  }
`,
  fy = J.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0 0.5rem 0;
  width: 100%;
`,
  dy = J.div`
  width: 100%;
  text-align: center;
  margin-top: 0.5rem;
`,
  py = J.button`
  padding: 8px 12px;
  border-radius: 5px;
  font-weight: 600;
  user-select: none;
  position: relative;
  cursor: ${(n) => (n.disabled ? "not-allowed" : "pointer")};
  border: 2px solid
    ${(n) =>
      n.disabled
        ? "#ccc"
        : n.selected
        ? n.mainColor || "#ff54e9"
        : au(n.mainColor || "#ff54e9", 80)};

  background-color: ${(n) => (n.selected ? n.mainColor || "#ff54e9" : "#fff")};

  color: ${(n) => (n.selected ? "white" : "#000")};
`,
  hy = J.div`
  color: red;
  font-size: 0.8rem;
`,
  my = J.div`
  text-align: center;
  padding: 40px 24px;
`,
  gy = J.svg`
  width: 80px;
  height: 80px;
  margin-bottom: 24px;
  stroke: ${({ $mainColor: n }) => n};
  stroke-width: 2.5;
  fill: none;

  circle {
    stroke-opacity: 0.2;
  }

  path {
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`,
  yy = ({
    sizes: n,
    selectedSize: s,
    onSelectSize: o,
    mainColor: a,
    error: c,
  }) => (
    console.log(n),
    y.jsxs(y.Fragment, {
      children: [
        y.jsx(fy, {
          children: n
            .filter(({ stokAdedi: f }) => typeof f == "number" && f < 1)
            .map(({ id: f, name: d }) => {
              const h = s === d;
              return y.jsx(
                py,
                {
                  selected: h,
                  onClick: () => o(d),
                  mainColor: a,
                  type: "button",
                  children: d,
                },
                f
              );
            }),
        }),
        c && y.jsx(dy, { children: y.jsx(hy, { children: c }) }),
      ],
    })
  ),
  vy = or`
  0% { transform: rotate(0deg); }
  20% { transform: rotate(-10deg); }
  40% { transform: rotate(10deg); }
  60% { transform: rotate(-8deg); }
  80% { transform: rotate(8deg); }
  100% { transform: rotate(0deg); }
`,
  wy = J.svg`
  animation: ${vy} 1.5s infinite ease-in-out;
  transform-origin: center;
`,
  xy = () =>
    y.jsxs(wy, {
      width: "48",
      height: "48",
      viewBox: "0 0 1024 1024",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      children: [
        y.jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        y.jsx("g", {
          id: "SVGRepo_tracerCarrier",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        y.jsxs("g", {
          id: "SVGRepo_iconCarrier",
          children: [
            y.jsx("path", {
              d: "M505.5 215.9m-62.6 0a62.6 62.6 0 1 0 125.2 0 62.6 62.6 0 1 0-125.2 0Z",
              fill: "#FFB89A",
            }),
            y.jsx("path", {
              d: "M793.4 660.2c-16.2-32.1-22.4-62.8-24.7-78.3-0.6-4.1-0.9-8.3-1-12.5l-1.2-124.5v-3.7c0-2.9-0.1-5.9-0.2-8.8l-0.1-14.2h-0.8c-2.1-22.3-7.2-44.2-15.2-65.2-10.4-27.2-25.5-52.5-44.9-75.2-33.6-39.3-79-69-129.6-85.1-7.4-53.6-49.5-94.7-100.2-94.7-52.7 0-96.1 44.5-100.9 101.1-46.6 18.2-86.9 47.6-117.4 85.9-31.3 39.3-49.8 84.9-54.3 133.2h-0.9v157.4c-0.1 1.6-1.9 27.4-37.6 79.1-13.7 19.8-46.8 70.1-54.6 81.9-10.8 12-14.1 28.8-8.2 44.2 6.4 17 22.3 28 40.5 28h666.8c18.1 0 34-10.9 40.5-27.9 5.9-15.4 2.7-32.2-8.1-44.2-16-24.2-41.8-64.5-47.9-76.5z m-619.8 88.7c13.1-19.8 31.2-47.2 40.2-60.1 16.7-24.2 29.3-47 37.6-67.8 6.7-16.9 10.4-32.2 10.6-44.4v-0.5-2.4V570.8v-0.3l0.3-29.9h-0.4v-62.4h1.1l-1-31c-0.1-2.3-0.1-4.3-0.1-6.1 0-43 14.6-84.1 42.3-118.8 27.5-34.5 65.3-59.9 109.4-73.3l23.9-7.3-2.9-24.8c-0.3-2.5-0.4-5-0.4-7.3 0-28.4 18.5-51.6 41.3-51.6s41.3 23.1 41.3 51.6c0 1.2-0.1 2.5-0.2 4.2l-1.7 25.4 24.8 5.8c47.2 11.1 89.8 36.6 120 71.9 30.6 35.8 46.8 78.8 46.8 124.3 0 1.8 0 3.8-0.1 6.1l-1 31h1.4l0.9 91.7c0.1 6.9 0.6 13.9 1.6 20.7 2.8 19.1 10.5 57 30.5 96.6 6.3 12.4 24.4 40.9 37.7 61.6H173.6zM693 230.5c26.6 8.5 55 36 74 71.8 7.7 14.5 13.4 29.4 17 44.2 3.3 13.7 15.6 22.9 29.1 22.9 2.3 0 4.7-0.3 7.1-0.9 16.1-3.9 26-20.1 22.1-36.2-4.8-19.7-12.3-39.3-22.4-58.2-26.5-49.9-67.2-87.6-108.8-100.8-15.8-5-32.7 3.7-37.7 19.5s3.8 32.7 19.6 37.7zM928.2 296.7c-8.2-29.9-22.2-60.7-40.4-89.2-31.3-48.9-73.7-88.1-116.2-107.6-15.1-6.9-32.9-0.3-39.8 14.8-6.9 15.1-0.3 32.9 14.8 39.8 32.3 14.8 65.4 45.9 90.7 85.4 15 23.4 26.4 48.5 33.1 72.7 3.7 13.3 15.7 22.1 28.9 22.1 2.6 0 5.3-0.3 8-1.1 15.9-4.4 25.3-21 20.9-36.9z",
              fill: "#45484C",
            }),
            y.jsx("path", {
              d: "M555.8 812.1c-16.6 0-30 13.4-30 30 0 8.5-1.3 16.8-3.8 24.6-5.1 15.8 3.5 32.7 19.2 37.8 3.1 1 6.2 1.5 9.3 1.5 12.6 0 24.4-8 28.5-20.7 4.5-13.8 6.8-28.4 6.8-43.2 0-16.5-13.5-30-30-30zM475.5 906.6c-12.5 0-24.5-6.1-33.9-17.1-10.6-12.4-16.4-29.3-16.4-47.4 0-16.6-13.4-30-30-30s-30 13.4-30 30c0 32.4 10.9 63 30.6 86.2 21 24.7 49.2 38.3 79.6 38.3 16.6 0 30-13.4 30-30s-13.3-30-29.9-30z",
              fill: "#33CC99",
            }),
          ],
        }),
      ],
    }),
  Sy = ({ value: n, onChange: s, $mainColor: o }) =>
    y.jsxs(ly, {
      $mainColor: o,
      children: [
        y.jsx(ay, { $mainColor: o, children: "+90" }),
        y.jsx(uy, {
          type: "tel",
          value: n,
          onChange: (a) => {
            let c = a.target.value.replace(/\D/g, "");
            c.length > 10 && (c = c.slice(0, 10)), s(c);
          },
          placeholder: "Telefon numaranız",
          $mainColor: o,
        }),
      ],
    }),
  ky = () =>
    y.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 368.41 140.39",
      height: "20",
      children: [
        y.jsx("path", {
          fill: "#E7333C",
          d: "M59.4 71.7c0 7.8-1.98 13.78-5.92 17.92-3.95 4.15-9.28 6.22-15.97 6.22-6 0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0 11.7 3.07 20.53 9.22 26.47 6.15 5.95 14.57 8.93 25.27 8.93 5.2 0 10.05-.97 14.55-2.92 4.5-1.95 8.25-4.73 11.25-8.32v10.2h17.85V31.2h-18.75v40.5z",
        }),
        y.jsx("rect", {
          fill: "#E7333C",
          x: "320.84",
          width: "18.75",
          height: "111.3",
        }),
        y.jsx("rect", {
          fill: "#E7333C",
          x: "349.65",
          width: "18.75",
          height: "111.3",
        }),
        y.jsxs("g", {
          fill: "#E7333C",
          children: [
            y.jsx("path", {
              d: "M179.44 110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69 2.46 8.12 4.43 13.29 5.91 5.17 1.49 10.27 2.23 15.29 2.23 11.47 0 17.21-3.02 17.21-9.07 0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9 0-7.78 3.25-14 9.76-18.67 4.05-2.9 8.99-4.9 14.82-6h-60.03c-5.5 0-10.53.95-15.08 2.85-4.55 1.9-8.38 4.75-11.47 8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3 7.2 14.85 10.8 25.65 10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62zm-33.28-21.33c-4.45 4.6-10.12 6.9-17.02 6.9-4.5 0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4 3.15-13.2c2.1-3.8 4.95-6.72 8.55-8.77 3.6-2.05 7.65-3.08 12.15-3.08 6.9 0 12.57 2.3 17.02 6.9 4.45 4.6 6.68 10.65 6.68 18.15s-2.23 13.55-6.68 18.15z",
            }),
            y.jsx("path", {
              d: "M313.22 71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26 3.22.56 4.83.93 5.63 1.28 10.24 3 13.83 5.15l-7.37 14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63 0-9.91.85-12.83 2.54-2.92 1.69-4.38 3.92-4.38 6.68 0 3.07 1.56 5.25 4.69 6.53 3.12 1.28 7.96 2.48 14.52 3.61 6.55 1.03 11.93 2.2 16.13 3.53 4.2 1.33 7.81 3.59 10.83 6.76 3.02 3.18 4.53 7.68 4.53 13.52 0 7.68-3.33 13.83-9.99 18.44-4.14 2.86-9.21 4.83-15.2 5.92h64.63c6.9 0 13.1-1.1 18.6-3.3 5.5-2.2 10.05-5.45 13.65-9.75l-10.05-11.55c-5.7 5.8-12.95 8.7-21.75 8.7-6.9 0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55zm-63.3-6.9c.9-5.9 3.43-10.62 7.58-14.17 4.15-3.55 9.22-5.32 15.22-5.32s11.2 1.8 15.3 5.4c4.1 3.6 6.55 8.3 7.35 14.1h-45.45z",
            }),
          ],
        }),
      ],
    }),
  Ey = ({
    isOpen: n,
    onClose: s,
    mainColor: o,
    stockReminderUsageChannel: a,
    showSizeChart: c,
    productDetailData: f,
  }) => {
    const [d, h] = Ie.useState(!1),
      [S, E] = Ie.useState(null),
      [x, O] = Ie.useState(!1),
      {
        control: b,
        handleSubmit: Y,
        formState: { errors: T },
        reset: v,
        clearErrors: C,
        watch: W,
      } = ru({
        defaultValues: { phone: "", consent: !1, size: "", color: "" },
      });
    W("size"), W("color");
    const z = Array.isArray(f?.renkler) && f.renkler.length > 0,
      D = Array.isArray(f?.bedenler) && f.bedenler.length > 0,
      Z = z || D,
      L = z ? f.renkler : [],
      he = D ? f.bedenler : [];
    let ge = [];
    z && D
      ? (ge = f.renkBedenEslesmesi.flatMap((te) =>
          (te.bedenler || []).map((Ae) => ({
            id: `${te.id}-${Ae.id}`,
            name: `${te.tanim} - ${Ae.tanim}`,
            stokAdedi: Ae.stokAdedi,
            renk: te,
            beden: Ae,
          }))
        ))
      : D
      ? (ge = he.map((te) => ({
          id: te.id,
          name: te.tanim,
          stokAdedi: te.stokAdedi,
          beden: te,
        })))
      : z &&
        (ge = L.map((te) => ({
          id: te.id,
          name: te.tanim,
          stokAdedi: te.stokAdedi,
          renk: te,
        }))),
      (ge = ge.filter(
        (te, Ae, Le) =>
          Ae === Le.findIndex((ie) => ie.id === te.id && ie.name === te.name)
      ));
    const xe = (te) => {
      h(!0), E(null);
      const Ae = z && D;
      let Le;
      if (!Z)
        Le = {
          phone: "90" + te.phone,
          email: "",
          ProductName: f?.product?.urunAdi || f?.product?.productName || "",
          productSlug: window.location.pathname,
          productId: f?.product?.id?.toString(),
          productCardId: f?.product?.urunKartiId?.toString(),
          variant: "{}",
          hasVariant: !1,
        };
      else if (z && !D) {
        const ie = L.find((ae) => ae.tanim === te.color);
        Le = {
          phone: "90" + te.phone,
          email: "",
          ProductName: f?.product?.urunAdi || f?.product?.productName || "",
          productSlug: window.location.pathname,
          productId: f?.product?.id?.toString(),
          productCardId: f?.product?.urunKartiId?.toString(),
          variant: JSON.stringify({
            variantOptions: [ie],
            name: ie?.tanim || "",
          }),
          hasVariant: !0,
        };
      } else if (Ae) {
        const ie = ge.find((ae) => ae.name === te.size);
        Le = {
          phone: "90" + te.phone,
          email: "",
          ProductName: f?.product?.urunAdi || f?.product?.productName || "",
          productSlug: window.location.pathname,
          productId: f?.product?.id?.toString(),
          productCardId: f?.product?.urunKartiId?.toString(),
          variant: JSON.stringify({
            variantOptions: [ie?.renk, ie?.beden],
            name: ie?.name || "",
          }),
          hasVariant: !0,
        };
      } else if (!z && D) {
        const ie = he.find((ae) => ae.tanim === te.size);
        Le = {
          phone: "90" + te.phone,
          email: "",
          ProductName: f?.product?.urunAdi || f?.product?.productName || "",
          productSlug: window.location.pathname,
          productId: f?.product?.id?.toString(),
          productCardId: f?.product?.urunKartiId?.toString(),
          variant: JSON.stringify({
            variantOptions: [ie],
            name: ie?.tanim || "",
          }),
          hasVariant: !0,
        };
      } else {
        const ie = D
          ? he.find((ae) => ae.tanim === te.size)
          : z
          ? L.find((ae) => ae.tanim === te.color)
          : void 0;
        Le = {
          phone: "90" + te.phone,
          email: "",
          ProductName: f?.product?.urunAdi || f?.product?.productName || "",
          productSlug: window.location.pathname,
          productId: ie?.urunID?.toString() || f?.product?.id?.toString(),
          productCardId: f?.product?.urunKartiId?.toString(),
          variant: JSON.stringify(ie || {}),
          hasVariant: !0,
        };
      }
      qe.post("https://api.upsell.co/phonesubscription/reminder", Le)
        .then((ie) => {
          ie.data?.success
            ? (O(!0), C(), v({ phone: "", consent: !1, size: "", color: "" }))
            : E(ie.data?.message || "Bir hata oluştu.");
        })
        .catch(() => {
          E(
            a === "SMS" || a === "WhatsApp" || a === "Both"
              ? "Bu telefon numarası zaten kayıtlı."
              : "Bu e-posta adresi zaten kayıtlı."
          );
        })
        .finally(() => {
          h(!1);
        });
    };
    return (
      Ie.useEffect(() => {
        if (x) {
          const te = setTimeout(() => {
            s(), O(!1);
          }, 5e3);
          return () => clearTimeout(te);
        }
      }, [x, s]),
      n
        ? y.jsx(Kg, {
            onClick: s,
            children: y.jsx(Yg, {
              onClick: (te) => te.stopPropagation(),
              $mainColor: o,
              children: y.jsxs(Gg, {
                children: [
                  y.jsx(Xg, { onClick: s, children: y.jsx(wp, {}) }),
                  x
                    ? y.jsxs(my, {
                        children: [
                          y.jsxs(gy, {
                            $mainColor: o,
                            viewBox: "0 0 64 64",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              y.jsx("circle", { cx: "32", cy: "32", r: "30" }),
                              y.jsx("path", { d: "M20 33 L28 41 L44 25" }),
                            ],
                          }),
                          y.jsx(Aa, { children: "Teşekkürler!" }),
                          y.jsx(Vd, {
                            style: {
                              fontSize: "1rem",
                              color: "#4B5563",
                              marginTop: "8px",
                            },
                            children: y.jsx(Aa, {
                              children: Z
                                ? "İlgilendiğiniz beden stoğa girdiğinde size hemen bilgi vereceğiz."
                                : "İlgilendiğiniz ürün stoğa girdiğinde size hemen bilgi vereceğiz.",
                            }),
                          }),
                        ],
                      })
                    : y.jsxs(y.Fragment, {
                        children: [
                          y.jsx(Aa, {
                            children: z
                              ? "Renk ve Bedenini Seç, Stokta Olunca Sana Bildirelim!"
                              : D
                              ? "Bedenini Seç, Stokta Olunca Sana Bildirelim!"
                              : "Ürün Tekrar Stokta Olduğunda Sana Bildirelim!",
                          }),
                          y.jsxs("form", {
                            onSubmit: Y(xe),
                            children: [
                              (z || D) &&
                                y.jsx(bi, {
                                  name: z && !D ? "color" : "size",
                                  control: b,
                                  rules: {
                                    required:
                                      z && !D
                                        ? "Lütfen bir renk seçiniz."
                                        : "Lütfen bir beden seçiniz.",
                                  },
                                  render: ({ field: te }) =>
                                    y.jsx(yy, {
                                      sizes: ge,
                                      selectedSize: te.value || "",
                                      onSelectSize: te.onChange,
                                      mainColor: o,
                                      error:
                                        T[z && !D ? "color" : "size"]?.message,
                                    }),
                                }),
                              y.jsx(Jg, {
                                $mainColor: o,
                                children: y.jsx(xy, {}),
                              }),
                              y.jsx(Vd, {
                                children: D
                                  ? "İstediğiniz ürün stoğa girdiğinde, size WhatsApp veya SMS ile anında bilgi vereceğiz. Telefon numaranızın doğru olduğundan emin olun!"
                                  : "Ürün stoğa girdiğinde size WhatsApp veya SMS ile hemen bilgi vereceğiz. Telefon numaranızın doğru olduğundan emin olun!",
                              }),
                              y.jsx(ey, {
                                children: y.jsx(bi, {
                                  name: "phone",
                                  control: b,
                                  rules: {
                                    required: "Telefon numarası zorunludur.",
                                    minLength: {
                                      value: 10,
                                      message: "Telefon numarası eksik.",
                                    },
                                  },
                                  render: ({ field: te }) =>
                                    y.jsx(Sy, {
                                      value: te.value,
                                      onChange: te.onChange,
                                      $mainColor: o,
                                    }),
                                }),
                              }),
                              T.phone &&
                                y.jsx("span", {
                                  style: { color: "red", fontSize: "0.8rem" },
                                  children: T.phone.message,
                                }),
                              y.jsxs(ty, {
                                children: [
                                  y.jsx(bi, {
                                    name: "consent",
                                    control: b,
                                    rules: {
                                      required:
                                        "Onay kutusunu işaretlemelisiniz.",
                                    },
                                    render: ({ field: te }) =>
                                      y.jsx(iy, {
                                        checked: te.value,
                                        onChange: te.onChange,
                                        $mainColor: o,
                                      }),
                                  }),
                                  y.jsxs(ry, {
                                    children: [
                                      a === "WhatsApp" || a === "Both"
                                        ? "Kampanya, duyuru ve bilgilendirmelerden WhatsApp ve SMS yoluyla haberdar olmak istiyorum. "
                                        : "Kampanya, duyuru ve bilgilendirmelerden E-Posta yoluyla haberdar olmak istediğimi belirtiyorum. ",
                                      y.jsx(ny, {
                                        id: "kvkkLink",
                                        href: "/UyelikSozlesme.aspx?sozlemeTipi=5",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children:
                                          "Veri işleme faaliyetleriyle ilgili aydınlatma metnine buradan ulaşabilirsiniz.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              T.consent &&
                                y.jsx("span", {
                                  style: { color: "red", fontSize: "0.8rem" },
                                  children: T.consent.message,
                                }),
                              S &&
                                y.jsx("span", {
                                  style: { color: "red", fontSize: "0.8rem" },
                                  children: S,
                                }),
                              y.jsxs(sy, {
                                type: "submit",
                                $mainColor: o,
                                disabled: d,
                                children: [
                                  y.jsx(b1, {
                                    style: {
                                      marginRight: 8,
                                      verticalAlign: "middle",
                                    },
                                  }),
                                  d ? "Gönderiliyor..." : "Kaydet",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                  y.jsx(Zg, { $mainColor: o }),
                  y.jsxs(cy, {
                    href: "https://upsell.co/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    $mainColor: o,
                    children: [y.jsx(ky, {}), " tarafından geliştirilmiştir."],
                  }),
                ],
              }),
            }),
          })
        : null
    );
  };
function Hp(n) {
  return Hi({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z",
        },
        child: [],
      },
    ],
  })(n);
}
const Cy = ({ mainColor: n = "#3498db" }) =>
  y.jsxs("svg", {
    width: "65",
    height: "65",
    viewBox: "0 0 120 120",
    style: { zIndex: 10, position: "relative" },
    children: [
      y.jsx("circle", {
        cx: "60",
        cy: "60",
        r: "55",
        fill: "white",
        stroke: "white",
        strokeWidth: "2",
      }),
      y.jsx("circle", {
        cx: "60",
        cy: "60",
        r: "50",
        stroke: n,
        strokeWidth: "5",
        fill: "none",
        opacity: "0.2",
      }),
      y.jsx("circle", {
        cx: "60",
        cy: "60",
        r: "50",
        stroke: n,
        strokeWidth: "5",
        fill: "none",
        strokeDasharray: "314",
        strokeDashoffset: "0",
        style: {
          transformOrigin: "50% 50%",
          animation: "spin 2s linear infinite",
        },
      }),
      y.jsx("foreignObject", {
        x: "30",
        y: "30",
        width: "60",
        height: "60",
        children: y.jsx("div", {
          style: {
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          children: y.jsx(Hp, { size: 40, color: "#333333" }),
        }),
      }),
      y.jsx("style", {
        children: `
        @keyframes spin {
          0% {
            stroke-dashoffset: 314;
            transform: rotate(0deg);
          }
          100% {
            stroke-dashoffset: 0;
            transform: rotate(360deg);
          }
        }
      `,
      }),
    ],
  });
var Wp = Wd();
const Kp = (n, s) => {
    if (!n || typeof n != "string" || !n.startsWith("#") || n.length < 7)
      return "#c0c0c0";
    let o = parseInt(n.substring(1, 3), 16),
      a = parseInt(n.substring(3, 5), 16),
      c = parseInt(n.substring(5, 7), 16);
    const f = Math.min(1, Math.max(0, s / 100));
    (o = Math.round(o + (255 - o) * f)),
      (a = Math.round(a + (255 - a) * f)),
      (c = Math.round(c + (255 - c) * f));
    const d = (h) => h.toString(16).padStart(2, "0");
    return `#${d(o)}${d(a)}${d(c)}`;
  },
  Qp = (n, s) => {
    if (!n || typeof n != "string" || !n.startsWith("#")) return "#999";
    let o = parseInt(n.substring(1, 3), 16),
      a = parseInt(n.substring(3, 5), 16),
      c = parseInt(n.substring(5, 7), 16);
    (o = Math.max(0, o - o * (s / 100))),
      (a = Math.max(0, a - a * (s / 100))),
      (c = Math.max(0, c - c * (s / 100)));
    const f = (d) => Math.round(d).toString(16).padStart(2, "0");
    return `#${f(o)}${f(a)}${f(c)}`;
  },
  _y = J.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.29);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  font-family: 'Roboto', sans-serif;
`,
  Ty = or`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  Ry = or`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,
  Py = J.div`
  position: relative;
  width: 450px;
  padding: 3px;
  border-radius: 16px;
  overflow: hidden;
  background-color: transparent;

  animation: ${Ry} 0.3s ease-out forwards;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    border-radius: inherit;
    background: conic-gradient(
      from 0deg,
      transparent 0%,
      transparent 25%,
      ${({ $mainColor: n }) => n} 40%,
      ${({ $mainColor: n }) => n} 60%,
      transparent 75%,
      transparent 100%
    );
    animation: ${Ty} 4s linear infinite;
    z-index: 0;
  }
`,
  Oy = J.div`
  background: white;
  border-radius: 14px;
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`,
  Ay = J.button`
  position: absolute;
  top: .75rem;
  right: .75rem;
  background: white;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  &:hover {
    background: #ddd;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
J.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Bd = J.h2`
  font-size: 1rem;
  padding: 0;
  margin: 0;
  text-align: center;
`,
  jy = J.p`
  font-size: .85rem;
  color: #333;
  text-align: center;
  align-items: between;
  justify-content: start;
  margin: 5px 0px;
`,
  Ny = J.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 1rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, #ffffff, #ddd, #ffffff);
    z-index: 0;
  }

`,
  zy = J.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 1rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, #ffffff, #ddd, #ffffff);
    z-index: 0;
  }

  svg {
    z-index: 1;
    background: #fff;
    border: 2px solid ${({ $mainColor: n }) => n || "#ff69b4"};
    border-radius: 50%;
    padding: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
J.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1rem 0;
`;
const Ly = J.a`
  display: flex;
  font-size: 0.75rem;
  color: #000;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  text-decoration:none;
  justify-content:center;
  svg {
    height: 16px;
    width: auto;
    display: block;
    margin-left: .3rem;
    margin-right: .3rem;
  }
  &:hover {
    color: ${({ $mainColor: n }) => n};
  }
`,
  Fy = J.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom:.5rem;
  flex-wrap: wrap;
`,
  by = J.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 2px solid ${({ $mainColor: n }) => Kp(n, 70)};
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.3s ease;
  margin-top:20px;
  &:focus-within {
    border-color: ${({ $mainColor: n }) => n || "#007bff"};
  }
`,
  Iy = J.span`
  color: #212529;
  padding: 0.75rem 12px;
  font-size: 1rem;
  user-select: none;
  display: flex;
  align-items: center;
  border-right: 1px solid ${({ $mainColor: n }) => Kp(n, 70)};
  height: 100%;
`,
  My = J.input`
  flex: 1;
  padding: 0.75rem 0.5rem;
  border: none;
  font-size: 1rem;
  outline: none;
  &::placeholder {
    color: #aaa;
  }
`;
J.img`
  width: 75px;
  height: auto;
  display: block;
  margin-top:30px;
  margin-bottom:30px;
  margin-left:auto;
  margin-right:auto
`;
const $y = J.button`
  background: ${({ $mainColor: n }) => n};
  color: white;
  border: none;
  padding: 0.9rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  text-align: center;
  margin-top:10px;
  transition: background-color 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    background: ${({ $mainColor: n }) => Qp(n, 20)};
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(160, 160, 160, 0.4);
    svg {
      transform-origin: center;
    }
  }
`,
  Dy = J.div`
  margin-top: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
`,
  $n = J.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
`,
  Dn = J.div`
  padding: 12px 16px;
  font-weight: bold;
  background-color: #f3f4f6;
  width: 40%;
  min-width: 120px;
  font-size: 0.8rem;
`,
  Vn = J.div`
  padding: 12px 16px;
  flex: 1;
  font-size: 0.8rem;
`,
  Vy = J.a`
  color: ${({ $mainColor: n }) => n};
  text-decoration: none;
  font-weight: bold;
  font-size: 0.8rem;
  
  &:hover {
    text-decoration: underline;
  }
`,
  By = J.button`
  width: 100%;
  padding: 12px 24px;
  background: ${({ $mainColor: n }) => n};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ $mainColor: n }) => Qp(n, 10)};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,
  Uy = () =>
    y.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 368.41 140.39",
      height: "20",
      children: [
        y.jsx("path", {
          fill: "#E7333C",
          d: "M59.4 71.7c0 7.8-1.98 13.78-5.92 17.92-3.95 4.15-9.28 6.22-15.97 6.22-6 0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0 11.7 3.07 20.53 9.22 26.47 6.15 5.95 14.57 8.93 25.27 8.93 5.2 0 10.05-.97 14.55-2.92 4.5-1.95 8.25-4.73 11.25-8.32v10.2h17.85V31.2h-18.75v40.5z",
        }),
        y.jsx("rect", {
          fill: "#E7333C",
          x: "320.84",
          width: "18.75",
          height: "111.3",
        }),
        y.jsx("rect", {
          fill: "#E7333C",
          x: "349.65",
          width: "18.75",
          height: "111.3",
        }),
        y.jsxs("g", {
          fill: "#E7333C",
          children: [
            y.jsx("path", {
              d: "M179.44 110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69 2.46 8.12 4.43 13.29 5.91 5.17 1.49 10.27 2.23 15.29 2.23 11.47 0 17.21-3.02 17.21-9.07 0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9 0-7.78 3.25-14 9.76-18.67 4.05-2.9 8.99-4.9 14.82-6h-60.03c-5.5 0-10.53.95-15.08 2.85-4.55 1.9-8.38 4.75-11.47 8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3 7.2 14.85 10.8 25.65 10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62zm-33.28-21.33c-4.45 4.6-10.12 6.9-17.02 6.9-4.5 0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4 3.15-13.2c2.1-3.8 4.95-6.72 8.55-8.77 3.6-2.05 7.65-3.08 12.15-3.08 6.9 0 12.57 2.3 17.02 6.9 4.45 4.6 6.68 10.65 6.68 18.15s-2.23 13.55-6.68 18.15z",
            }),
            y.jsx("path", {
              d: "M313.22 71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26 3.22.56 4.83.93 5.63 1.28 10.24 3 13.83 5.15l-7.37 14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63 0-9.91.85-12.83 2.54-2.92 1.69-4.38 3.92-4.38 6.68 0 3.07 1.56 5.25 4.69 6.53 3.12 1.28 7.96 2.48 14.52 3.61 6.55 1.03 11.93 2.2 16.13 3.53 4.2 1.33 7.81 3.59 10.83 6.76 3.02 3.18 4.53 7.68 4.53 13.52 0 7.68-3.33 13.83-9.99 18.44-4.14 2.86-9.21 4.83-15.2 5.92h64.63c6.9 0 13.1-1.1 18.6-3.3 5.5-2.2 10.05-5.45 13.65-9.75l-10.05-11.55c-5.7 5.8-12.95 8.7-21.75 8.7-6.9 0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55zm-63.3-6.9c.9-5.9 3.43-10.62 7.58-14.17 4.15-3.55 9.22-5.32 15.22-5.32s11.2 1.8 15.3 5.4c4.1 3.6 6.55 8.3 7.35 14.1h-45.45z",
            }),
          ],
        }),
      ],
    }),
  Hy = ({ value: n, onChange: s, $mainColor: o }) =>
    y.jsxs(by, {
      $mainColor: o,
      children: [
        y.jsx(Iy, { $mainColor: o, children: "+90" }),
        y.jsx(My, {
          type: "tel",
          value: n,
          onChange: (a) => {
            let c = a.target.value.replace(/\D/g, "");
            c.length > 10 && (c = c.slice(0, 10)), s(c);
          },
          placeholder: "Telefon numaranız",
          $mainColor: o,
        }),
      ],
    }),
  Wy = ({ isOpen: n, onClose: s, mainColor: o }) => {
    const {
        control: a,
        handleSubmit: c,
        formState: { errors: f },
      } = ru({ defaultValues: { phone: "", consent: !1, size: "" } }),
      [d, h] = Ie.useState(!1),
      [S, E] = Ie.useState(!1),
      [x, O] = Ie.useState(null),
      b = (W) => {
        if (!W) return "";
        const z = new Date(W),
          D = (Ae) => Ae.toString().padStart(2, "0"),
          Z = D(z.getHours()),
          L = D(z.getMinutes()),
          he = D(z.getSeconds()),
          ge = D(z.getDate()),
          xe = D(z.getMonth() + 1),
          te = z.getFullYear();
        return `${Z}:${L}:${he} ${ge}-${xe}-${te}`;
      },
      Y = (W) => {
        h(!0), console.log("Form Data:", W);
        const z = { phone: "90" + W.phone };
        qe.post("https://api.upsell.co/ticimax/order", z)
          .then((D) => {
            if (
              (console.log("API Response:", D.data),
              D.data.success && D.data.data)
            ) {
              const Z = D.data.data,
                L = {
                  siparisNo: Z.siparisNo,
                  siparisTarihi: b(Z.siparisTarihi),
                  siparisDurumu: Z.siparisDurumu,
                  kargoTakipLink: Z.kargoTakipLink,
                  kargoTakipNo: Z.kargoTakipNo,
                  kargoFirmaTanim: Z.kargoFirmaTanim,
                };
              console.log("Extracted Order Data:", L), O(L), E(!0);
            }
            h(!1);
          })
          .catch((D) => {
            console.error("API Error:", D), h(!1);
          });
      },
      T = () => {
        E(!1), O(null);
      };
    if (!n) return null;
    const v = y.jsx(_y, {
        onClick: s,
        children: y.jsx(Py, {
          onClick: (W) => W.stopPropagation(),
          $mainColor: o,
          children: y.jsxs(Oy, {
            children: [
              y.jsx(Ay, { onClick: s, children: y.jsx(wp, {}) }),
              y.jsx(Bd, { children: "Sipariş Durumunu Sorgula" }),
              y.jsx(Ny, {
                $mainColor: o,
                children: y.jsx(Cy, { mainColor: o }),
              }),
              S
                ? y.jsxs(y.Fragment, {
                    children: [
                      y.jsx(Bd, { children: "Sipariş Bilgileri" }),
                      y.jsxs(Dy, {
                        children: [
                          y.jsxs($n, {
                            children: [
                              y.jsx(Dn, { children: "Sipariş No" }),
                              y.jsx(Vn, { children: x?.siparisNo }),
                            ],
                          }),
                          y.jsxs($n, {
                            children: [
                              y.jsx(Dn, { children: "Sipariş Tarihi" }),
                              y.jsx(Vn, { children: x?.siparisTarihi }),
                            ],
                          }),
                          y.jsxs($n, {
                            children: [
                              y.jsx(Dn, { children: "Sipariş Durumu" }),
                              y.jsx(Vn, { children: x?.siparisDurumu }),
                            ],
                          }),
                          y.jsxs($n, {
                            children: [
                              y.jsx(Dn, { children: "Kargo Firma" }),
                              y.jsx(Vn, { children: x?.kargoFirmaTanim }),
                            ],
                          }),
                          y.jsxs($n, {
                            children: [
                              y.jsx(Dn, { children: "Kargo Takip No" }),
                              y.jsx(Vn, {
                                children: x?.kargoTakipNo
                                  ? x.kargoTakipNo
                                  : "Henüz Kargo Takip No Oluşturulmamış",
                              }),
                            ],
                          }),
                          y.jsxs($n, {
                            children: [
                              y.jsx(Dn, { children: "Kargo Takip Linki" }),
                              y.jsx(Vn, {
                                children: x?.kargoTakipLink
                                  ? y.jsx(Vy, {
                                      href: x.kargoTakipLink,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      $mainColor: o,
                                      children: x.kargoTakipLink,
                                    })
                                  : "Henüz Kargo Takip Link Oluşturulmamış",
                              }),
                            ],
                          }),
                        ],
                      }),
                      y.jsxs(By, {
                        $mainColor: o,
                        onClick: T,
                        children: [
                          y.jsx(ps, {
                            style: { marginRight: 8, verticalAlign: "middle" },
                          }),
                          "Yeni Sorgu",
                        ],
                      }),
                    ],
                  })
                : y.jsxs(y.Fragment, {
                    children: [
                      y.jsx(jy, {
                        children:
                          "Siparişinizin kargo takibini yapmak için telefon numaranızı giriniz.",
                      }),
                      y.jsxs("form", {
                        onSubmit: c(Y),
                        children: [
                          y.jsxs(Fy, {
                            children: [
                              y.jsx(bi, {
                                name: "phone",
                                control: a,
                                rules: {
                                  required: "Telefon numarası zorunludur.",
                                  minLength: {
                                    value: 10,
                                    message: "Telefon numarası eksik.",
                                  },
                                },
                                render: ({ field: W }) =>
                                  y.jsx(Hy, {
                                    value: W.value,
                                    onChange: W.onChange,
                                    $mainColor: o,
                                  }),
                              }),
                              f.phone &&
                                y.jsx("span", {
                                  style: { color: "red" },
                                  children: f.phone.message,
                                }),
                            ],
                          }),
                          y.jsxs($y, {
                            type: "submit",
                            $mainColor: o,
                            disabled: d,
                            children: [
                              y.jsx(ps, {
                                style: {
                                  marginRight: 8,
                                  verticalAlign: "middle",
                                },
                              }),
                              d ? "Sorgulanıyor..." : "Sorgula",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              y.jsx(zy, { $mainColor: o }),
              y.jsxs(Ly, {
                href: "https://upsell.co/",
                target: "_blank",
                rel: "noopener noreferrer",
                $mainColor: o,
                children: [y.jsx(Uy, {}), " tarafından geliştirilmiştir."],
              }),
            ],
          }),
        }),
      }),
      C =
        typeof window < "u"
          ? document.getElementById("upsell-ss-responsive")
          : null;
    return C ? Wp.createPortal(v, C) : v;
  },
  Ky = ({ mainColor: n = "#3498db" }) =>
    y.jsxs("svg", {
      width: "65",
      height: "65",
      viewBox: "0 0 120 120",
      style: { zIndex: 10, position: "relative" },
      children: [
        y.jsx("circle", {
          cx: "60",
          cy: "60",
          r: "55",
          fill: "white",
          stroke: "white",
          strokeWidth: "2",
        }),
        y.jsx("circle", {
          cx: "60",
          cy: "60",
          r: "50",
          stroke: n,
          strokeWidth: "5",
          fill: "none",
          opacity: "0.2",
        }),
        y.jsx("circle", {
          cx: "60",
          cy: "60",
          r: "50",
          stroke: n,
          strokeWidth: "5",
          fill: "none",
          strokeDasharray: "314",
          strokeDashoffset: "0",
          style: {
            transformOrigin: "50% 50%",
            animation: "spin 2s linear infinite",
          },
        }),
        y.jsx("foreignObject", {
          x: "30",
          y: "30",
          width: "60",
          height: "60",
          children: y.jsx("div", {
            style: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            children: y.jsx(Hp, { size: 40, color: "#333333" }),
          }),
        }),
        y.jsx("style", {
          children: `
        @keyframes spin {
          0% {
            stroke-dashoffset: 314;
            transform: rotate(0deg);
          }
          100% {
            stroke-dashoffset: 0;
            transform: rotate(360deg);
          }
        }
      `,
        }),
      ],
    }),
  qp = (n, s) => {
    if (!n || typeof n != "string" || !n.startsWith("#") || n.length < 7)
      return "#c0c0c0";
    let o = parseInt(n.substring(1, 3), 16),
      a = parseInt(n.substring(3, 5), 16),
      c = parseInt(n.substring(5, 7), 16);
    const f = Math.min(1, Math.max(0, s / 100));
    (o = Math.round(o + (255 - o) * f)),
      (a = Math.round(a + (255 - a) * f)),
      (c = Math.round(c + (255 - c) * f));
    const d = (h) => h.toString(16).padStart(2, "0");
    return `#${d(o)}${d(a)}${d(c)}`;
  },
  Yp = (n, s) => {
    if (!n || typeof n != "string" || !n.startsWith("#")) return "#999";
    let o = parseInt(n.substring(1, 3), 16),
      a = parseInt(n.substring(3, 5), 16),
      c = parseInt(n.substring(5, 7), 16);
    (o = Math.max(0, o - o * (s / 100))),
      (a = Math.max(0, a - a * (s / 100))),
      (c = Math.max(0, c - c * (s / 100)));
    const f = (d) => Math.round(d).toString(16).padStart(2, "0");
    return `#${f(o)}${f(a)}${f(c)}`;
  };
or`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
or`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
const Qy = J.div`
  background: white;
  border-radius: 14px;
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`,
  Ud = J.h2`
  font-size: 1rem;
  padding: 0;
  margin: 0;
  text-align: center;
`,
  qy = J.p`
  font-size: .85rem;
  color: #333;
  text-align: center;
  align-items: between;
  justify-content: start;
  margin: 5px 0px;
`,
  Yy = J.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 1rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, #ffffff, #ddd, #ffffff);
    z-index: 0;
  }

`,
  Gy = J.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 1rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, #ffffff, #ddd, #ffffff);
    z-index: 0;
  }

  svg {
    z-index: 1;
    background: #fff;
    border: 2px solid ${({ $mainColor: n }) => n || "#ff69b4"};
    border-radius: 50%;
    padding: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,
  Xy = J.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem auto;
`,
  Jy = J.a`
  display: flex;
  font-size: 0.75rem;
  color: #000;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  text-decoration:none;
  justify-content:center;
  svg {
    height: 16px;
    width: auto;
    display: block;
    margin-left: .3rem;
    margin-right: .3rem;
  }
  &:hover {
    color: ${({ $mainColor: n }) => n};
  }
`,
  Zy = J.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom:.5rem;
  flex-wrap: wrap;
`,
  ev = J.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 2px solid ${({ $mainColor: n }) => qp(n, 70)};
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.3s ease;
  margin-top:20px;
  &:focus-within {
    border-color: ${({ $mainColor: n }) => n || "#007bff"};
  }
`,
  tv = J.span`
  color: #212529;
  padding: 0.75rem 12px;
  font-size: 1rem;
  user-select: none;
  display: flex;
  align-items: center;
  border-right: 1px solid ${({ $mainColor: n }) => qp(n, 70)};
  height: 100%;
`,
  rv = J.input`
  flex: 1;
  padding: 0.75rem 0.5rem;
  border: none;
  font-size: 1rem;
  outline: none;
  &::placeholder {
    color: #aaa;
  }
`;
J.img`
  width: 75px;
  height: auto;
  display: block;
  margin-top:30px;
  margin-bottom:30px;
  margin-left:auto;
  margin-right:auto
`;
const nv = J.button`
  background: ${({ $mainColor: n }) => n};
  color: white;
  border: none;
  padding: 0.9rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  text-align: center;
  margin-top:10px;
  transition: background-color 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    background: ${({ $mainColor: n }) => Yp(n, 20)};
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(160, 160, 160, 0.4);
    svg {
      transform-origin: center;
    }
  }
`,
  iv = J.div`
  margin-top: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
`,
  Bn = J.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
`,
  Un = J.div`
  padding: 12px 16px;
  font-weight: bold;
  background-color: #f3f4f6;
  width: 40%;
  min-width: 120px;
  font-size: 0.8rem;
`,
  Hn = J.div`
  padding: 12px 16px;
  flex: 1;
  font-size: 0.8rem;
`,
  ov = J.a`
  color: ${({ $mainColor: n }) => n};
  text-decoration: none;
  font-weight: bold;
  font-size: 0.8rem;
  
  &:hover {
    text-decoration: underline;
  }
`,
  sv = J.button`
  width: 100%;
  padding: 12px 24px;
  background: ${({ $mainColor: n }) => n};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ $mainColor: n }) => Yp(n, 10)};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,
  lv = () =>
    y.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 368.41 140.39",
      height: "20",
      children: [
        y.jsx("path", {
          fill: "#E7333C",
          d: "M59.4 71.7c0 7.8-1.98 13.78-5.92 17.92-3.95 4.15-9.28 6.22-15.97 6.22-6 0-10.63-1.77-13.87-5.32-3.25-3.55-4.87-8.93-4.87-16.13V31.2H0v45.75c0 11.7 3.07 20.53 9.22 26.47 6.15 5.95 14.57 8.93 25.27 8.93 5.2 0 10.05-.97 14.55-2.92 4.5-1.95 8.25-4.73 11.25-8.32v10.2h17.85V31.2h-18.75v40.5z",
        }),
        y.jsx("rect", {
          fill: "#E7333C",
          x: "320.84",
          width: "18.75",
          height: "111.3",
        }),
        y.jsx("rect", {
          fill: "#E7333C",
          x: "349.65",
          width: "18.75",
          height: "111.3",
        }),
        y.jsxs("g", {
          fill: "#E7333C",
          children: [
            y.jsx("path", {
              d: "M179.44 110.73c-6.35-1.74-11.42-3.94-15.21-6.61l7.37-14.59c3.69 2.46 8.12 4.43 13.29 5.91 5.17 1.49 10.27 2.23 15.29 2.23 11.47 0 17.21-3.02 17.21-9.07 0-2.86-1.46-4.86-4.38-5.99-2.92-1.13-7.6-2.2-14.06-3.23-6.76-1.02-12.27-2.2-16.52-3.53-4.25-1.33-7.94-3.66-11.06-6.99-3.12-3.33-4.69-7.96-4.69-13.9 0-7.78 3.25-14 9.76-18.67 4.05-2.9 8.99-4.9 14.82-6h-60.03c-5.5 0-10.53.95-15.08 2.85-4.55 1.9-8.38 4.75-11.47 8.55v-10.5h-17.85v109.2h18.75v-38.85c6.3 7.2 14.85 10.8 25.65 10.8h55.59c-2.48-.41-4.94-.95-7.38-1.62zm-33.28-21.33c-4.45 4.6-10.12 6.9-17.02 6.9-4.5 0-8.55-1.02-12.15-3.07-3.6-2.05-6.45-4.97-8.55-8.78-2.1-3.8-3.15-8.2-3.15-13.2s1.05-9.4 3.15-13.2c2.1-3.8 4.95-6.72 8.55-8.77 3.6-2.05 7.65-3.08 12.15-3.08 6.9 0 12.57 2.3 17.02 6.9 4.45 4.6 6.68 10.65 6.68 18.15s-2.23 13.55-6.68 18.15z",
            }),
            y.jsx("path", {
              d: "M313.22 71.7c0-8.2-1.72-15.42-5.17-21.67-3.45-6.25-8.25-11.1-14.4-14.55-6.15-3.45-13.12-5.17-20.92-5.17h-57.86c1.61.26 3.22.56 4.83.93 5.63 1.28 10.24 3 13.83 5.15l-7.37 14.6c-6.97-4.1-14.8-6.15-23.5-6.15-5.63 0-9.91.85-12.83 2.54-2.92 1.69-4.38 3.92-4.38 6.68 0 3.07 1.56 5.25 4.69 6.53 3.12 1.28 7.96 2.48 14.52 3.61 6.55 1.03 11.93 2.2 16.13 3.53 4.2 1.33 7.81 3.59 10.83 6.76 3.02 3.18 4.53 7.68 4.53 13.52 0 7.68-3.33 13.83-9.99 18.44-4.14 2.86-9.21 4.83-15.2 5.92h64.63c6.9 0 13.1-1.1 18.6-3.3 5.5-2.2 10.05-5.45 13.65-9.75l-10.05-11.55c-5.7 5.8-12.95 8.7-21.75 8.7-6.9 0-12.68-1.72-17.33-5.17-4.65-3.45-7.53-8.12-8.62-14.02h62.85c.2-2.4.3-4.25.3-5.55zm-63.3-6.9c.9-5.9 3.43-10.62 7.58-14.17 4.15-3.55 9.22-5.32 15.22-5.32s11.2 1.8 15.3 5.4c4.1 3.6 6.55 8.3 7.35 14.1h-45.45z",
            }),
          ],
        }),
      ],
    }),
  av = ({ value: n, onChange: s, $mainColor: o }) =>
    y.jsxs(ev, {
      $mainColor: o,
      children: [
        y.jsx(tv, { $mainColor: o, children: "+90" }),
        y.jsx(rv, {
          type: "tel",
          value: n,
          onChange: (a) => {
            let c = a.target.value.replace(/\D/g, "");
            c.length > 10 && (c = c.slice(0, 10)), s(c);
          },
          placeholder: "Telefon numaranız",
          $mainColor: o,
        }),
      ],
    }),
  uv = ({ mainColor: n }) => {
    const {
        control: s,
        handleSubmit: o,
        formState: { errors: a },
      } = ru({ defaultValues: { phone: "", consent: !1, size: "" } }),
      [c, f] = Ie.useState(!1),
      [d, h] = Ie.useState(!1),
      [S, E] = Ie.useState(null),
      x = (Y) => {
        if (!Y) return "";
        const T = new Date(Y),
          v = (he) => he.toString().padStart(2, "0"),
          C = v(T.getHours()),
          W = v(T.getMinutes()),
          z = v(T.getSeconds()),
          D = v(T.getDate()),
          Z = v(T.getMonth() + 1),
          L = T.getFullYear();
        return `${C}:${W}:${z} ${D}-${Z}-${L}`;
      },
      O = (Y) => {
        f(!0);
        const T = { phone: "90" + Y.phone };
        qe.post("https://api.upsell.co/ticimax/order", T)
          .then((v) => {
            if (v.data.success && v.data.data) {
              const C = v.data.data,
                W = {
                  siparisNo: C.siparisNo,
                  siparisTarihi: x(C.siparisTarihi),
                  siparisDurumu: C.siparisDurumu,
                  kargoTakipLink: C.kargoTakipLink,
                  kargoTakipNo: C.kargoTakipNo,
                  kargoFirmaTanim: C.kargoFirmaTanim,
                };
              E(W), h(!0);
            }
            f(!1);
          })
          .catch(() => {
            f(!1);
          });
      },
      b = () => {
        h(!1), E(null);
      };
    return y.jsx(Xy, {
      style: { maxWidth: 450 },
      children: y.jsxs(Qy, {
        children: [
          y.jsx(Ud, { children: "Sipariş Durumunu Sorgula" }),
          y.jsx(Yy, { $mainColor: n, children: y.jsx(Ky, { mainColor: n }) }),
          d
            ? y.jsxs(y.Fragment, {
                children: [
                  y.jsx(Ud, { children: "Sipariş Bilgileri" }),
                  y.jsxs(iv, {
                    children: [
                      y.jsxs(Bn, {
                        children: [
                          y.jsx(Un, { children: "Sipariş No" }),
                          y.jsx(Hn, { children: S?.siparisNo }),
                        ],
                      }),
                      y.jsxs(Bn, {
                        children: [
                          y.jsx(Un, { children: "Sipariş Tarihi" }),
                          y.jsx(Hn, { children: S?.siparisTarihi }),
                        ],
                      }),
                      y.jsxs(Bn, {
                        children: [
                          y.jsx(Un, { children: "Sipariş Durumu" }),
                          y.jsx(Hn, { children: S?.siparisDurumu }),
                        ],
                      }),
                      y.jsxs(Bn, {
                        children: [
                          y.jsx(Un, { children: "Kargo Firma" }),
                          y.jsx(Hn, { children: S?.kargoFirmaTanim }),
                        ],
                      }),
                      y.jsxs(Bn, {
                        children: [
                          y.jsx(Un, { children: "Kargo Takip No" }),
                          y.jsx(Hn, {
                            children: S?.kargoTakipNo
                              ? S.kargoTakipNo
                              : "Henüz Kargo Takip No Oluşturulmamış",
                          }),
                        ],
                      }),
                      y.jsxs(Bn, {
                        children: [
                          y.jsx(Un, { children: "Kargo Takip Linki" }),
                          y.jsx(Hn, {
                            children: S?.kargoTakipLink
                              ? y.jsx(ov, {
                                  href: S.kargoTakipLink,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  $mainColor: n,
                                  children: S.kargoTakipLink,
                                })
                              : "Henüz Kargo Takip Link Oluşturulmamış",
                          }),
                        ],
                      }),
                    ],
                  }),
                  y.jsxs(sv, {
                    $mainColor: n,
                    onClick: b,
                    children: [
                      y.jsx(ps, {
                        style: { marginRight: 8, verticalAlign: "middle" },
                      }),
                      "Yeni Sorgu",
                    ],
                  }),
                ],
              })
            : y.jsxs(y.Fragment, {
                children: [
                  y.jsx(qy, {
                    children:
                      "Siparişinizin kargo takibini yapmak için telefon numaranızı giriniz.",
                  }),
                  y.jsxs("form", {
                    onSubmit: o(O),
                    children: [
                      y.jsxs(Zy, {
                        children: [
                          y.jsx(bi, {
                            name: "phone",
                            control: s,
                            rules: {
                              required: "Telefon numarası zorunludur.",
                              minLength: {
                                value: 10,
                                message: "Telefon numarası eksik.",
                              },
                            },
                            render: ({ field: Y }) =>
                              y.jsx(av, {
                                value: Y.value,
                                onChange: Y.onChange,
                                $mainColor: n,
                              }),
                          }),
                          a.phone &&
                            y.jsx("span", {
                              style: { color: "red" },
                              children: a.phone.message,
                            }),
                        ],
                      }),
                      y.jsxs(nv, {
                        type: "submit",
                        $mainColor: n,
                        disabled: c,
                        children: [
                          y.jsx(ps, {
                            style: { marginRight: 8, verticalAlign: "middle" },
                          }),
                          c ? "Sorgulanıyor..." : "Sorgula",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          y.jsx(Gy, { $mainColor: n }),
          y.jsxs(Jy, {
            href: "https://upsell.co/",
            target: "_blank",
            rel: "noopener noreferrer",
            $mainColor: n,
            children: [y.jsx(lv, {}), " tarafından geliştirilmiştir."],
          }),
        ],
      }),
    });
  };
function Hd(n, s = 0.15) {
  if (!n.startsWith("#") || (n.length !== 7 && n.length !== 4)) return n;
  let o, a, c;
  return (
    n.length === 7
      ? ((o = parseInt(n.slice(1, 3), 16)),
        (a = parseInt(n.slice(3, 5), 16)),
        (c = parseInt(n.slice(5, 7), 16)))
      : ((o = parseInt(n[1] + n[1], 16)),
        (a = parseInt(n[2] + n[2], 16)),
        (c = parseInt(n[3] + n[3], 16))),
    (o = Math.max(0, Math.floor(o * (1 - s)))),
    (a = Math.max(0, Math.floor(a * (1 - s)))),
    (c = Math.max(0, Math.floor(c * (1 - s)))),
    `rgb(${o},${a},${c})`
  );
}
const cv = J.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.29);
  z-index: 999998;
`,
  fv = J.div`
  position: fixed;
  bottom: 32px;
  ${(n) =>
    n.$position === 1 ? "left: 32px; right: auto;" : "right: 32px; left: auto;"}
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: ${(n) => n.$mainColor || "#fff"};
  color: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 13px;
  letter-spacing: 0.02em;
  cursor: pointer;
  z-index: 9999;
  border: 2px solid #eee;
  transition: box-shadow 0.2s, background 0.2s;
  text-align: center;
  user-select: none;
  font-family: 'Roboto', sans-serif;

  &:hover {
    animation: border-flash 0.7s linear infinite;
    border-color: ${({ $mainColor: n }) => Hd(n || "#000", 25)};
  }

  @keyframes border-flash {
    0% {
      border-width: 2px;
      border-color: transparent;
    }
    50% {
      border-width: 4px;
      border-color: ${({ $mainColor: n }) => Hd(n || "#000", 25)};
    }
    100% {
      border-width: 2px;
      border-color: transparent;
    }
  }

  @media (max-width: 500px) {
    width: 60px;
    height: 60px;
    bottom: 20px;
    ${(n) =>
      n.$position === 1
        ? "left: 20px; right: auto;"
        : "right: 20px; left: auto;"}
    font-size: 12px;
  }
`,
  dv = J.div`
  display:flex;
  padding:10px;
  justify-content:space-between;
  margin-bottom:10px
`,
  pv = J.div`
  padding: 0px 10px;
  max-height: 420px;
  overflow-y: auto;

  @media (max-width: 600px) {
    max-height: 310px;
  }
`,
  hv = J.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
  width: 100%;
  font-size: 12px;
  align-items: center;
`,
  mv = J.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #eee;
  padding: 10px;
  transition: box-shadow 0.2s, background 0.2s;
  cursor: pointer;
  width: 100%;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    background: #fafafa;
  }
  img {
    width: 65px;
    height: 75px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 12px;
    flex-shrink: 0;
  }

  .product-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 200px;
  }

  .product-title {
    font-weight: 700;
    color: #222;
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .product-category {
    color: #888;
    font-size: 13px;
    margin-top: 2px;
  }

  .product-price {
    color: ${({ theme: n }) => n.mainColor || "#000"};
    font-weight: 900;
    font-size: 12px;
    margin-top: 4px;
  }
`,
  gv = J.div`
  color: ${({ $mainColor: n }) => n || "#000"};
  font-weight: 900;
  font-size: 16px;
  margin-top: 3px;
`,
  yv = J.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 200px;
`,
  vv = J.div`
  font-weight: 700;
  color: #222;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,
  wv = or`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,
  xv = or`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`,
  Sv = J.div`
  position: fixed;
  z-index: 2000;
  width: 400px;
  bottom: ${({ $bottom: n }) => `${n}px`};
  z-index:999999999999;
  @media (min-width: 601px) {
    ${({ $right: n }) => n !== void 0 && `right: ${n}px;`}
    ${({ $left: n }) => n !== void 0 && `left: ${n}px;`}
  }
  @media (max-width: 600px) {
    top: 50%;
    left: 50% !important;
    right: auto !important;
    bottom: auto !important;
    transform: translate(-50%, -50%);
  }
`,
  kv = J.div`
  position: relative;
  width: 400px;
  border-radius: 16px;
  overflow: hidden;
  background-color: transparent;
  animation: ${xv} 0.3s ease-out forwards;
  padding:3px;
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    border-radius: inherit;
    background: conic-gradient(
      from 0deg,
      transparent 0%,
      transparent 25%,
      ${({ $mainColor: n }) => n} 40%,
      ${({ $mainColor: n }) => n} 60%,
      transparent 75%,
      transparent 100%
    );
    animation: ${wv} 4s linear infinite;
    z-index: 0;
  }
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ $mainColor: n }) => n ?? "#ddd"} #fff;
  }
  *::-webkit-scrollbar {
    width: 8px;
    background: transparent;
    transition: background 0.2s;
  }
  *:hover::-webkit-scrollbar {
    background: #f5f5f5;
  }
  *::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 8px;
    transition: background 0.2s;
  }
  *:hover::-webkit-scrollbar-thumb {
    background: #bdbdbd;
  }
  *::-webkit-scrollbar-corner {
    background: transparent;
  }
`,
  Ev = J.div`
  background: white;
  border-radius: 14px;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  padding:10px
`,
  Cv = J.button`
  position: absolute;
  top: .75rem;
  right: 0rem;
  background: white;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,
  _v = J.h2`
  font-size: 1rem;
  padding: 0;
  margin: 0;
  text-align: center;
`,
  Tv = ({ mainColor: n }) => {
    const [s, o] = Ie.useState(`Haftanın
Ürünleri`),
      [a, c] = Ie.useState(0),
      [f, d] = Ie.useState(!1),
      [h, S] = Ie.useState([]),
      E = Ie.useRef(null);
    Ie.useEffect(() => {
      (async () => {
        try {
          const v = await qe.get("https://api.upsell.co/RecommendedProducts"),
            { title: C, position: W, products: z } = v.data?.data || {};
          C && o(C), typeof W == "number" && c(W), Array.isArray(z) && S(z);
        } catch (v) {
          console.error("RecommendedProducts fetch error:", v);
        }
      })();
    }, []);
    const x = () => d(!0),
      O = () => d(!1),
      b = () => {
        if (!E.current) return null;
        const T = E.current.getBoundingClientRect(),
          v = window.innerHeight - T.bottom + 60;
        let C, W;
        return (
          a === 0 ? (C = window.innerWidth - T.left + 10) : (W = T.right + 30),
          { bottom: v, right: C, left: W }
        );
      },
      Y = Ie.useRef(null);
    return (
      Ie.useEffect(() => {
        function T(v) {
          Y.current && !Y.current.contains(v.target) && d(!1);
        }
        return (
          f
            ? document.addEventListener("mousedown", T)
            : document.removeEventListener("mousedown", T),
          () => {
            document.removeEventListener("mousedown", T);
          }
        );
      }, [f]),
      y.jsxs(y.Fragment, {
        children: [
          h.length > 0 &&
            y.jsx(fv, {
              ref: E,
              title: s,
              $position: a,
              $mainColor: n,
              onClick: x,
              children: s
                .split(/\n|\\n/)
                .map((T, v) =>
                  y.jsxs(
                    Te.Fragment,
                    {
                      children: [
                        T,
                        v !== s.split(/\n|\\n/).length - 1 && y.jsx("br", {}),
                      ],
                    },
                    v
                  )
                ),
            }),
          f &&
            (() => {
              const T = b();
              return T
                ? y.jsx(cv, {
                    children: y.jsx(Sv, {
                      ref: Y,
                      $bottom: T.bottom,
                      $right: T.right,
                      $left: T.left,
                      children: y.jsx(kv, {
                        $mainColor: n || "#000",
                        children: y.jsxs(Ev, {
                          children: [
                            y.jsxs(dv, {
                              children: [
                                y.jsx(Cv, { onClick: O, children: "×" }),
                                y.jsxs("span", {
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                  },
                                  children: [
                                    y.jsx("svg", {
                                      width: "20",
                                      height: "20",
                                      viewBox: "0 0 20 20",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: y.jsx("path", {
                                        d: "M10 2.5l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 14.27l-4.77 2.51.91-5.32-3.87-3.77 5.34-.78L10 2.5z",
                                        fill: "#FFD600",
                                        stroke: "#FFC107",
                                        strokeWidth: "1.2",
                                      }),
                                    }),
                                    y.jsx(_v, { children: s }),
                                  ],
                                }),
                              ],
                            }),
                            y.jsx(pv, {
                              children: y.jsx(hv, {
                                children: h.map((v) =>
                                  y.jsxs(
                                    mv,
                                    {
                                      href: v.productUrl,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      children: [
                                        y.jsx("img", {
                                          src: v.imageUrl,
                                          alt: v.title,
                                        }),
                                        y.jsxs(yv, {
                                          children: [
                                            y.jsx(vv, { children: v.title }),
                                            y.jsx(gv, {
                                              $mainColor: n,
                                              children: v.price.toLocaleString(
                                                "tr-TR",
                                                {
                                                  style: "currency",
                                                  currency: "TRY",
                                                }
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    v.id
                                  )
                                ),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  })
                : null;
            })(),
        ],
      })
    );
  },
  Rv = Hg`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #fff;
    color: #333;
    height:2000px;
  }
`,
  Pv = or`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`,
  ja = J.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 16px;
`,
  Ov = J(I1)`
  font-size: 48px;
  color: ${({ color: n }) => n ?? "#4caf50"};
  animation: ${Pv} 1s linear infinite;
`,
  Av = J.span`
  font-size: 18px;
  font-weight: 500;
  color: #333;
`,
  Na = J.button`
  background-color: ${({ mainColor: n }) => n ?? "#4caf50"};
  color: white;
  padding: 12px 25px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ mainColor: n }) => (n ? jv(n, 0.1) : "#45a049")};
  }
`;
function jv(n, s) {
  let o = n.charAt(0) === "#" ? n.substring(1) : n;
  o.length === 3 &&
    (o = o
      .split("")
      .map((h) => h + h)
      .join(""));
  const a = parseInt(o, 16);
  let c = (a >> 16) & 255,
    f = (a >> 8) & 255,
    d = a & 255;
  return (
    (c = Math.max(0, Math.min(255, Math.floor(c * (1 - s))))),
    (f = Math.max(0, Math.min(255, Math.floor(f * (1 - s))))),
    (d = Math.max(0, Math.min(255, Math.floor(d * (1 - s))))),
    `rgb(${c},${f},${d})`
  );
}
function Nv() {
  const [n, s] = Ie.useState(null),
    [o, a] = Ie.useState(null),
    [c, f] = Ie.useState(!0),
    [d, h] = Ie.useState(null),
    [S, E] = Ie.useState(null),
    [x, O] = Ie.useState(!1);
  S?.productVariantData?.filter(
    (C) => C.ekSecenekTipiTanim?.toLowerCase() === "beden"
  ),
    S?.productVariantData?.filter(
      (C) => C.ekSecenekTipiTanim?.toLowerCase() === "renk"
    );
  const b = Ie.useCallback(() => {
      s(null);
    }, []),
    Y = () => s("stock"),
    T = () => s("order"),
    v = () => O(!0);
  return (
    Ie.useEffect(() => {
      const C = async () => {
          try {
            const z = await qe.get("https://api.upsell.co/Shops");
            z.data?.data && (a(z.data.data), console.log(z.data.data));
          } catch {
            h("Mağaza verisi alınamadı.");
          }
        },
        W = async () => {
          let z;
          typeof window < "u" &&
            (window.currentProduct
              ? (z = window.currentProduct)
              : window.productDetailModel && (z = window.productDetailModel));
          const D = z.productVariantData || [],
            L = D.filter(
              (xe) => xe.ekSecenekTipiTanim?.toLowerCase() === "renk"
            ).filter(
              (xe, te, Ae) => te === Ae.findIndex((Le) => Le.tanim === xe.tanim)
            ),
            he = D.filter(
              (xe) => xe.ekSecenekTipiTanim?.toLowerCase() === "beden"
            ),
            ge = L.map((xe) => ({
              ...xe,
              bedenler: he.filter((te) => te.urunKartID === xe.urunKartID),
            }));
          E({
            product: z.product,
            productVariantData: D,
            renkler: L,
            bedenler: he,
            renkBedenEslesmesi: ge,
          });
        };
      Promise.all([C(), W()]).finally(() => {
        f(!1);
      }),
        typeof window < "u" &&
          document.getElementById("upsell-ss-responsive") &&
          O(!0);
    }, []),
    c
      ? y.jsxs(ja, {
          children: [
            y.jsx(Ov, { color: o?.mainColor }),
            y.jsx(Av, { children: "Yükleniyor..." }),
          ],
        })
      : d
      ? y.jsx(ja, {
          children: y.jsx("p", { style: { color: "red" }, children: d }),
        })
      : y.jsxs(y.Fragment, {
          children: [
            y.jsx(Rv, { mainColor: o?.mainColor }),
            !x &&
              y.jsxs(ja, {
                children: [
                  y.jsx(Na, {
                    mainColor: o?.mainColor ?? "#000",
                    onClick: T,
                    children: "Sipariş",
                  }),
                  y.jsx(Na, {
                    mainColor: o?.mainColor ?? "#000",
                    onClick: v,
                    children: "Sipariş Inline",
                  }),
                  y.jsx(Na, {
                    mainColor: o?.mainColor ?? "#000",
                    onClick: Y,
                    children: "Stok",
                  }),
                ],
              }),
            x &&
              (() => {
                const C =
                    typeof window < "u"
                      ? document.getElementById("upsell-ss-responsive")
                      : null,
                  W = y.jsx(uv, { mainColor: o?.mainColor ?? "#000" });
                return C ? Wp.createPortal(W, C) : W;
              })(),
            n === "stock" &&
              y.jsx(Ey, {
                isOpen: !0,
                onClose: b,
                mainColor: o?.mainColor ?? "#000",
                stockReminderUsageChannel:
                  o?.stockReminderUsageChannel ?? "SMS",
                showSizeChart: !0,
                productDetailData: S,
              }),
            n === "order" &&
              y.jsx(Wy, {
                isOpen: !0,
                onClose: b,
                mainColor: o?.mainColor ?? "#000",
              }),
            y.jsx(Tv, { mainColor: o?.mainColor }),
          ],
        })
  );
}
Jm.createRoot(document.getElementById("root")).render(
  y.jsx(Te.StrictMode, { children: y.jsx(Nv, {}) })
);
