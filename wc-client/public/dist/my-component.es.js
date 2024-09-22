function VO(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var yS = { exports: {} }, Zc = { exports: {} };
Zc.exports;
(function (A, M) {
  /**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function () {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var fe = "18.3.1", Be = Symbol.for("react.element"), Zt = Symbol.for("react.portal"), ke = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), Bt = Symbol.for("react.profiler"), le = Symbol.for("react.provider"), G = Symbol.for("react.context"), Ye = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), rt = Symbol.for("react.offscreen"), st = Symbol.iterator, St = "@@iterator";
    function Ue(s) {
      if (s === null || typeof s != "object")
        return null;
      var v = st && s[st] || s[St];
      return typeof v == "function" ? v : null;
    }
    var Te = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, it = {
      transition: null
    }, ue = {
      current: null,
      // Used to reproduce behavior of `batchedUpdates` in legacy mode.
      isBatchingLegacy: !1,
      didScheduleLegacyUpdate: !1
    }, Ke = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, Ee = {}, bn = null;
    function Sn(s) {
      bn = s;
    }
    Ee.setExtraStackFrame = function (s) {
      bn = s;
    }, Ee.getCurrentStack = null, Ee.getStackAddendum = function () {
      var s = "";
      bn && (s += bn);
      var v = Ee.getCurrentStack;
      return v && (s += v() || ""), s;
    };
    var ht = !1, Qe = !1, An = !1, de = !1, we = !1, ct = {
      ReactCurrentDispatcher: Te,
      ReactCurrentBatchConfig: it,
      ReactCurrentOwner: Ke
    };
    ct.ReactDebugCurrentFrame = Ee, ct.ReactCurrentActQueue = ue;
    function ft(s) {
      {
        for (var v = arguments.length, S = new Array(v > 1 ? v - 1 : 0), E = 1; E < v; E++)
          S[E - 1] = arguments[E];
        Yt("warn", s, S);
      }
    }
    function se(s) {
      {
        for (var v = arguments.length, S = new Array(v > 1 ? v - 1 : 0), E = 1; E < v; E++)
          S[E - 1] = arguments[E];
        Yt("error", s, S);
      }
    }
    function Yt(s, v, S) {
      {
        var E = ct.ReactDebugCurrentFrame, L = E.getStackAddendum();
        L !== "" && (v += "%s", S = S.concat([L]));
        var Z = S.map(function ($) {
          return String($);
        });
        Z.unshift("Warning: " + v), Function.prototype.apply.call(console[s], console, Z);
      }
    }
    var Aa = {};
    function Kn(s, v) {
      {
        var S = s.constructor, E = S && (S.displayName || S.name) || "ReactClass", L = E + "." + v;
        if (Aa[L])
          return;
        se("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", v, E), Aa[L] = !0;
      }
    }
    var fa = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function (s) {
        return !1;
      },
      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function (s, v, S) {
        Kn(s, "forceUpdate");
      },
      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function (s, v, S, E) {
        Kn(s, "replaceState");
      },
      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function (s, v, S, E) {
        Kn(s, "setState");
      }
    }, Ut = Object.assign, Cn = {};
    Object.freeze(Cn);
    function Un(s, v, S) {
      this.props = s, this.context = v, this.refs = Cn, this.updater = S || fa;
    }
    Un.prototype.isReactComponent = {}, Un.prototype.setState = function (s, v) {
      if (typeof s != "object" && typeof s != "function" && s != null)
        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, s, v, "setState");
    }, Un.prototype.forceUpdate = function (s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    };
    {
      var Ua = {
        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
        replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
      }, da = function (s, v) {
        Object.defineProperty(Un.prototype, s, {
          get: function () {
            ft("%s(...) is deprecated in plain JavaScript React classes. %s", v[0], v[1]);
          }
        });
      };
      for (var va in Ua)
        Ua.hasOwnProperty(va) && da(va, Ua[va]);
    }
    function In() {
    }
    In.prototype = Un.prototype;
    function $t(s, v, S) {
      this.props = s, this.context = v, this.refs = Cn, this.updater = S || fa;
    }
    var En = $t.prototype = new In();
    En.constructor = $t, Ut(En, Un.prototype), En.isPureReactComponent = !0;
    function kn() {
      var s = {
        current: null
      };
      return Object.seal(s), s;
    }
    var Nn = Array.isArray;
    function mt(s) {
      return Nn(s);
    }
    function en(s) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, S = v && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return S;
      }
    }
    function kt(s) {
      try {
        return Ct(s), !1;
      } catch {
        return !0;
      }
    }
    function Ct(s) {
      return "" + s;
    }
    function Et(s) {
      if (kt(s))
        return se("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", en(s)), Ct(s);
    }
    function zn(s, v, S) {
      var E = s.displayName;
      if (E)
        return E;
      var L = v.displayName || v.name || "";
      return L !== "" ? S + "(" + L + ")" : S;
    }
    function Jn(s) {
      return s.displayName || "Context";
    }
    function Rn(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && se("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case ke:
          return "Fragment";
        case Zt:
          return "Portal";
        case Bt:
          return "Profiler";
        case d:
          return "StrictMode";
        case B:
          return "Suspense";
        case W:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case G:
            var v = s;
            return Jn(v) + ".Consumer";
          case le:
            var S = s;
            return Jn(S._context) + ".Provider";
          case Ye:
            return zn(s, s.render, "ForwardRef");
          case V:
            var E = s.displayName || null;
            return E !== null ? E : Rn(s.type) || "Memo";
          case ie: {
            var L = s, Z = L._payload, $ = L._init;
            try {
              return Rn($(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var pa = Object.prototype.hasOwnProperty, Zn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fn, ea, tn;
    tn = {};
    function Hn(s) {
      if (pa.call(s, "ref")) {
        var v = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function dt(s) {
      if (pa.call(s, "key")) {
        var v = Object.getOwnPropertyDescriptor(s, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function ta(s, v) {
      var S = function () {
        fn || (fn = !0, se("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
      };
      S.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: S,
        configurable: !0
      });
    }
    function Ia(s, v) {
      var S = function () {
        ea || (ea = !0, se("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
      };
      S.isReactWarning = !0, Object.defineProperty(s, "ref", {
        get: S,
        configurable: !0
      });
    }
    function Ja(s) {
      if (typeof s.ref == "string" && Ke.current && s.__self && Ke.current.stateNode !== s.__self) {
        var v = Rn(Ke.current.type);
        tn[v] || (se('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', v, s.ref), tn[v] = !0);
      }
    }
    var k = function (s, v, S, E, L, Z, $) {
      var te = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: Be,
        // Built-in properties that belong on the element
        type: s,
        key: v,
        ref: S,
        props: $,
        // Record the component responsible for creating this element.
        _owner: Z
      };
      return te._store = {}, Object.defineProperty(te._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(te, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.defineProperty(te, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.freeze && (Object.freeze(te.props), Object.freeze(te)), te;
    };
    function q(s, v, S) {
      var E, L = {}, Z = null, $ = null, te = null, ge = null;
      if (v != null) {
        Hn(v) && ($ = v.ref, Ja(v)), dt(v) && (Et(v.key), Z = "" + v.key), te = v.__self === void 0 ? null : v.__self, ge = v.__source === void 0 ? null : v.__source;
        for (E in v)
          pa.call(v, E) && !Zn.hasOwnProperty(E) && (L[E] = v[E]);
      }
      var He = arguments.length - 2;
      if (He === 1)
        L.children = S;
      else if (He > 1) {
        for (var Pe = Array(He), Ge = 0; Ge < He; Ge++)
          Pe[Ge] = arguments[Ge + 2];
        Object.freeze && Object.freeze(Pe), L.children = Pe;
      }
      if (s && s.defaultProps) {
        var Ze = s.defaultProps;
        for (E in Ze)
          L[E] === void 0 && (L[E] = Ze[E]);
      }
      if (Z || $) {
        var ut = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
        Z && ta(L, ut), $ && Ia(L, ut);
      }
      return k(s, Z, $, te, ge, Ke.current, L);
    }
    function ve(s, v) {
      var S = k(s.type, v, s.ref, s._self, s._source, s._owner, s.props);
      return S;
    }
    function Ne(s, v, S) {
      if (s == null)
        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
      var E, L = Ut({}, s.props), Z = s.key, $ = s.ref, te = s._self, ge = s._source, He = s._owner;
      if (v != null) {
        Hn(v) && ($ = v.ref, He = Ke.current), dt(v) && (Et(v.key), Z = "" + v.key);
        var Pe;
        s.type && s.type.defaultProps && (Pe = s.type.defaultProps);
        for (E in v)
          pa.call(v, E) && !Zn.hasOwnProperty(E) && (v[E] === void 0 && Pe !== void 0 ? L[E] = Pe[E] : L[E] = v[E]);
      }
      var Ge = arguments.length - 2;
      if (Ge === 1)
        L.children = S;
      else if (Ge > 1) {
        for (var Ze = Array(Ge), ut = 0; ut < Ge; ut++)
          Ze[ut] = arguments[ut + 2];
        L.children = Ze;
      }
      return k(s.type, Z, $, te, ge, He, L);
    }
    function ze(s) {
      return typeof s == "object" && s !== null && s.$$typeof === Be;
    }
    var Rt = ".", vt = ":";
    function Tn(s) {
      var v = /[=:]/g, S = {
        "=": "=0",
        ":": "=2"
      }, E = s.replace(v, function (L) {
        return S[L];
      });
      return "$" + E;
    }
    var $e = !1, jn = /\/+/g;
    function Ie(s) {
      return s.replace(jn, "$&/");
    }
    function Je(s, v) {
      return typeof s == "object" && s !== null && s.key != null ? (Et(s.key), Tn("" + s.key)) : v.toString(36);
    }
    function ka(s, v, S, E, L) {
      var Z = typeof s;
      (Z === "undefined" || Z === "boolean") && (s = null);
      var $ = !1;
      if (s === null)
        $ = !0;
      else
        switch (Z) {
          case "string":
          case "number":
            $ = !0;
            break;
          case "object":
            switch (s.$$typeof) {
              case Be:
              case Zt:
                $ = !0;
            }
        }
      if ($) {
        var te = s, ge = L(te), He = E === "" ? Rt + Je(te, 0) : E;
        if (mt(ge)) {
          var Pe = "";
          He != null && (Pe = Ie(He) + "/"), ka(ge, v, Pe, "", function (rf) {
            return rf;
          });
        } else ge != null && (ze(ge) && (ge.key && (!te || te.key !== ge.key) && Et(ge.key), ge = ve(
          ge,
          // Keep both the (mapped) and old keys if they differ, just as
          // traverseAllChildren used to do for objects as children
          S + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          (ge.key && (!te || te.key !== ge.key) ? (
            // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
            // eslint-disable-next-line react-internal/safe-string-coercion
            Ie("" + ge.key) + "/"
          ) : "") + He
        )), v.push(ge));
        return 1;
      }
      var Ge, Ze, ut = 0, Me = E === "" ? Rt : E + vt;
      if (mt(s))
        for (var Nr = 0; Nr < s.length; Nr++)
          Ge = s[Nr], Ze = Me + Je(Ge, Nr), ut += ka(Ge, v, S, Ze, L);
      else {
        var Xi = Ue(s);
        if (typeof Xi == "function") {
          var ao = s;
          Xi === ao.entries && ($e || ft("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), $e = !0);
          for (var af = Xi.call(ao), ar, ro = 0; !(ar = af.next()).done;)
            Ge = ar.value, Ze = Me + Je(Ge, ro++), ut += ka(Ge, v, S, Ze, L);
        } else if (Z === "object") {
          var io = String(s);
          throw new Error("Objects are not valid as a React child (found: " + (io === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : io) + "). If you meant to render a collection of children, use an array instead.");
        }
      }
      return ut;
    }
    function ha(s, v, S) {
      if (s == null)
        return s;
      var E = [], L = 0;
      return ka(s, E, "", "", function (Z) {
        return v.call(S, Z, L++);
      }), E;
    }
    function ui(s) {
      var v = 0;
      return ha(s, function () {
        v++;
      }), v;
    }
    function $i(s, v, S) {
      ha(s, function () {
        v.apply(this, arguments);
      }, S);
    }
    function $u(s) {
      return ha(s, function (v) {
        return v;
      }) || [];
    }
    function oi(s) {
      if (!ze(s))
        throw new Error("React.Children.only expected to receive a single React element child.");
      return s;
    }
    function li(s) {
      var v = {
        $$typeof: G,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: s,
        _currentValue2: s,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null,
        // Add these to use same hidden class in VM as ServerContext
        _defaultValue: null,
        _globalName: null
      };
      v.Provider = {
        $$typeof: le,
        _context: v
      };
      var S = !1, E = !1, L = !1;
      {
        var Z = {
          $$typeof: G,
          _context: v
        };
        Object.defineProperties(Z, {
          Provider: {
            get: function () {
              return E || (E = !0, se("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), v.Provider;
            },
            set: function ($) {
              v.Provider = $;
            }
          },
          _currentValue: {
            get: function () {
              return v._currentValue;
            },
            set: function ($) {
              v._currentValue = $;
            }
          },
          _currentValue2: {
            get: function () {
              return v._currentValue2;
            },
            set: function ($) {
              v._currentValue2 = $;
            }
          },
          _threadCount: {
            get: function () {
              return v._threadCount;
            },
            set: function ($) {
              v._threadCount = $;
            }
          },
          Consumer: {
            get: function () {
              return S || (S = !0, se("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), v.Consumer;
            }
          },
          displayName: {
            get: function () {
              return v.displayName;
            },
            set: function ($) {
              L || (ft("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", $), L = !0);
            }
          }
        }), v.Consumer = Z;
      }
      return v._currentRenderer = null, v._currentRenderer2 = null, v;
    }
    var Za = -1, Dr = 0, er = 1, ma = 2;
    function ya(s) {
      if (s._status === Za) {
        var v = s._result, S = v();
        if (S.then(function (Z) {
          if (s._status === Dr || s._status === Za) {
            var $ = s;
            $._status = er, $._result = Z;
          }
        }, function (Z) {
          if (s._status === Dr || s._status === Za) {
            var $ = s;
            $._status = ma, $._result = Z;
          }
        }), s._status === Za) {
          var E = s;
          E._status = Dr, E._result = S;
        }
      }
      if (s._status === er) {
        var L = s._result;
        return L === void 0 && se(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, L), "default" in L || se(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, L), L.default;
      } else
        throw s._result;
    }
    function Na(s) {
      var v = {
        // We use these fields to store the result.
        _status: Za,
        _result: s
      }, S = {
        $$typeof: ie,
        _payload: v,
        _init: ya
      };
      {
        var E, L;
        Object.defineProperties(S, {
          defaultProps: {
            configurable: !0,
            get: function () {
              return E;
            },
            set: function (Z) {
              se("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), E = Z, Object.defineProperty(S, "defaultProps", {
                enumerable: !0
              });
            }
          },
          propTypes: {
            configurable: !0,
            get: function () {
              return L;
            },
            set: function (Z) {
              se("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), L = Z, Object.defineProperty(S, "propTypes", {
                enumerable: !0
              });
            }
          }
        });
      }
      return S;
    }
    function si(s) {
      s != null && s.$$typeof === V ? se("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof s != "function" ? se("forwardRef requires a render function but was given %s.", s === null ? "null" : typeof s) : s.length !== 0 && s.length !== 2 && se("forwardRef render functions accept exactly two parameters: props and ref. %s", s.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), s != null && (s.defaultProps != null || s.propTypes != null) && se("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
      var v = {
        $$typeof: Ye,
        render: s
      };
      {
        var S;
        Object.defineProperty(v, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return S;
          },
          set: function (E) {
            S = E, !s.name && !s.displayName && (s.displayName = E);
          }
        });
      }
      return v;
    }
    var _r;
    _r = Symbol.for("react.module.reference");
    function p(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === ke || s === Bt || we || s === d || s === B || s === W || de || s === rt || ht || Qe || An || typeof s == "object" && s !== null && (s.$$typeof === ie || s.$$typeof === V || s.$$typeof === le || s.$$typeof === G || s.$$typeof === Ye || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        s.$$typeof === _r || s.getModuleId !== void 0));
    }
    function _(s, v) {
      p(s) || se("memo: The first argument must be a component. Instead received: %s", s === null ? "null" : typeof s);
      var S = {
        $$typeof: V,
        type: s,
        compare: v === void 0 ? null : v
      };
      {
        var E;
        Object.defineProperty(S, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return E;
          },
          set: function (L) {
            E = L, !s.name && !s.displayName && (s.displayName = L);
          }
        });
      }
      return S;
    }
    function w() {
      var s = Te.current;
      return s === null && se(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), s;
    }
    function K(s) {
      var v = w();
      if (s._context !== void 0) {
        var S = s._context;
        S.Consumer === s ? se("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : S.Provider === s && se("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
      }
      return v.useContext(s);
    }
    function ye(s) {
      var v = w();
      return v.useState(s);
    }
    function xe(s, v, S) {
      var E = w();
      return E.useReducer(s, v, S);
    }
    function I(s) {
      var v = w();
      return v.useRef(s);
    }
    function pe(s, v) {
      var S = w();
      return S.useEffect(s, v);
    }
    function Tt(s, v) {
      var S = w();
      return S.useInsertionEffect(s, v);
    }
    function We(s, v) {
      var S = w();
      return S.useLayoutEffect(s, v);
    }
    function tt(s, v) {
      var S = w();
      return S.useCallback(s, v);
    }
    function nn(s, v) {
      var S = w();
      return S.useMemo(s, v);
    }
    function za(s, v, S) {
      var E = w();
      return E.useImperativeHandle(s, v, S);
    }
    function na(s, v) {
      {
        var S = w();
        return S.useDebugValue(s, v);
      }
    }
    function Nt() {
      var s = w();
      return s.useTransition();
    }
    function Fn(s) {
      var v = w();
      return v.useDeferredValue(s);
    }
    function he() {
      var s = w();
      return s.useId();
    }
    function tr(s, v, S) {
      var E = w();
      return E.useSyncExternalStore(s, v, S);
    }
    var Or = 0, Pu, Gu, qu, Qu, Wu, Xu, Ku;
    function zl() {
    }
    zl.__reactDisabledLog = !0;
    function ef() {
      {
        if (Or === 0) {
          Pu = console.log, Gu = console.info, qu = console.warn, Qu = console.error, Wu = console.group, Xu = console.groupCollapsed, Ku = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: zl,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        Or++;
      }
    }
    function Iu() {
      {
        if (Or--, Or === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ut({}, s, {
              value: Pu
            }),
            info: Ut({}, s, {
              value: Gu
            }),
            warn: Ut({}, s, {
              value: qu
            }),
            error: Ut({}, s, {
              value: Qu
            }),
            group: Ut({}, s, {
              value: Wu
            }),
            groupCollapsed: Ut({}, s, {
              value: Xu
            }),
            groupEnd: Ut({}, s, {
              value: Ku
            })
          });
        }
        Or < 0 && se("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ci = ct.ReactCurrentDispatcher, aa;
    function wr(s, v, S) {
      {
        if (aa === void 0)
          try {
            throw Error();
          } catch (L) {
            var E = L.stack.trim().match(/\n( *(at )?)/);
            aa = E && E[1] || "";
          }
        return `
` + aa + s;
      }
    }
    var Mr = !1, Pi;
    {
      var Ju = typeof WeakMap == "function" ? WeakMap : Map;
      Pi = new Ju();
    }
    function Hl(s, v) {
      if (!s || Mr)
        return "";
      {
        var S = Pi.get(s);
        if (S !== void 0)
          return S;
      }
      var E;
      Mr = !0;
      var L = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = ci.current, ci.current = null, ef();
      try {
        if (v) {
          var $ = function () {
            throw Error();
          };
          if (Object.defineProperty($.prototype, "props", {
            set: function () {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct($, []);
            } catch (Me) {
              E = Me;
            }
            Reflect.construct(s, [], $);
          } else {
            try {
              $.call();
            } catch (Me) {
              E = Me;
            }
            s.call($.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Me) {
            E = Me;
          }
          s();
        }
      } catch (Me) {
        if (Me && E && typeof Me.stack == "string") {
          for (var te = Me.stack.split(`
`), ge = E.stack.split(`
`), He = te.length - 1, Pe = ge.length - 1; He >= 1 && Pe >= 0 && te[He] !== ge[Pe];)
            Pe--;
          for (; He >= 1 && Pe >= 0; He--, Pe--)
            if (te[He] !== ge[Pe]) {
              if (He !== 1 || Pe !== 1)
                do
                  if (He--, Pe--, Pe < 0 || te[He] !== ge[Pe]) {
                    var Ge = `
` + te[He].replace(" at new ", " at ");
                    return s.displayName && Ge.includes("<anonymous>") && (Ge = Ge.replace("<anonymous>", s.displayName)), typeof s == "function" && Pi.set(s, Ge), Ge;
                  }
                while (He >= 1 && Pe >= 0);
              break;
            }
        }
      } finally {
        Mr = !1, ci.current = Z, Iu(), Error.prepareStackTrace = L;
      }
      var Ze = s ? s.displayName || s.name : "", ut = Ze ? wr(Ze) : "";
      return typeof s == "function" && Pi.set(s, ut), ut;
    }
    function Zu(s, v, S) {
      return Hl(s, !1);
    }
    function tf(s) {
      var v = s.prototype;
      return !!(v && v.isReactComponent);
    }
    function Lr(s, v, S) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return Hl(s, tf(s));
      if (typeof s == "string")
        return wr(s);
      switch (s) {
        case B:
          return wr("Suspense");
        case W:
          return wr("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case Ye:
            return Zu(s.render);
          case V:
            return Lr(s.type, v, S);
          case ie: {
            var E = s, L = E._payload, Z = E._init;
            try {
              return Lr(Z(L), v, S);
            } catch {
            }
          }
        }
      return "";
    }
    var jl = {}, eo = ct.ReactDebugCurrentFrame;
    function Gi(s) {
      if (s) {
        var v = s._owner, S = Lr(s.type, s._source, v ? v.type : null);
        eo.setExtraStackFrame(S);
      } else
        eo.setExtraStackFrame(null);
    }
    function Fl(s, v, S, E, L) {
      {
        var Z = Function.call.bind(pa);
        for (var $ in s)
          if (Z(s, $)) {
            var te = void 0;
            try {
              if (typeof s[$] != "function") {
                var ge = Error((E || "React class") + ": " + S + " type `" + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[$] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ge.name = "Invariant Violation", ge;
              }
              te = s[$](v, $, E, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (He) {
              te = He;
            }
            te && !(te instanceof Error) && (Gi(L), se("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", S, $, typeof te), Gi(null)), te instanceof Error && !(te.message in jl) && (jl[te.message] = !0, Gi(L), se("Failed %s type: %s", S, te.message), Gi(null));
          }
      }
    }
    function De(s) {
      if (s) {
        var v = s._owner, S = Lr(s.type, s._source, v ? v.type : null);
        Sn(S);
      } else
        Sn(null);
    }
    var to;
    to = !1;
    function no() {
      if (Ke.current) {
        var s = Rn(Ke.current.type);
        if (s)
          return `

Check the render method of \`` + s + "`.";
      }
      return "";
    }
    function oe(s) {
      if (s !== void 0) {
        var v = s.fileName.replace(/^.*[\\\/]/, ""), S = s.lineNumber;
        return `

Check your code at ` + v + ":" + S + ".";
      }
      return "";
    }
    function Vl(s) {
      return s != null ? oe(s.__source) : "";
    }
    var an = {};
    function fi(s) {
      var v = no();
      if (!v) {
        var S = typeof s == "string" ? s : s.displayName || s.name;
        S && (v = `

Check the top-level render call using <` + S + ">.");
      }
      return v;
    }
    function Ar(s, v) {
      if (!(!s._store || s._store.validated || s.key != null)) {
        s._store.validated = !0;
        var S = fi(v);
        if (!an[S]) {
          an[S] = !0;
          var E = "";
          s && s._owner && s._owner !== Ke.current && (E = " It was passed a child from " + Rn(s._owner.type) + "."), De(s), se('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, E), De(null);
        }
      }
    }
    function Bl(s, v) {
      if (typeof s == "object") {
        if (mt(s))
          for (var S = 0; S < s.length; S++) {
            var E = s[S];
            ze(E) && Ar(E, v);
          }
        else if (ze(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var L = Ue(s);
          if (typeof L == "function" && L !== s.entries)
            for (var Z = L.call(s), $; !($ = Z.next()).done;)
              ze($.value) && Ar($.value, v);
        }
      }
    }
    function zt(s) {
      {
        var v = s.type;
        if (v == null || typeof v == "string")
          return;
        var S;
        if (typeof v == "function")
          S = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === Ye || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          v.$$typeof === V))
          S = v.propTypes;
        else
          return;
        if (S) {
          var E = Rn(v);
          Fl(S, s.props, "prop", E, s);
        } else if (v.PropTypes !== void 0 && !to) {
          to = !0;
          var L = Rn(v);
          se("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && se("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nt(s) {
      {
        for (var v = Object.keys(s.props), S = 0; S < v.length; S++) {
          var E = v[S];
          if (E !== "children" && E !== "key") {
            De(s), se("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), De(null);
            break;
          }
        }
        s.ref !== null && (De(s), se("Invalid attribute `ref` supplied to `React.Fragment`."), De(null));
      }
    }
    function Yl(s, v, S) {
      var E = p(s);
      if (!E) {
        var L = "";
        (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var Z = Vl(v);
        Z ? L += Z : L += no();
        var $;
        s === null ? $ = "null" : mt(s) ? $ = "array" : s !== void 0 && s.$$typeof === Be ? ($ = "<" + (Rn(s.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof s, se("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, L);
      }
      var te = q.apply(this, arguments);
      if (te == null)
        return te;
      if (E)
        for (var ge = 2; ge < arguments.length; ge++)
          Bl(arguments[ge], s);
      return s === ke ? nt(te) : zt(te), te;
    }
    var Vn = !1;
    function xn(s) {
      var v = Yl.bind(null, s);
      return v.type = s, Vn || (Vn = !0, ft("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(v, "type", {
        enumerable: !1,
        get: function () {
          return ft("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
            value: s
          }), s;
        }
      }), v;
    }
    function Ha(s, v, S) {
      for (var E = Ne.apply(this, arguments), L = 2; L < arguments.length; L++)
        Bl(arguments[L], E.type);
      return zt(E), E;
    }
    function nf(s, v) {
      var S = it.transition;
      it.transition = {};
      var E = it.transition;
      it.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        s();
      } finally {
        if (it.transition = S, S === null && E._updatedFibers) {
          var L = E._updatedFibers.size;
          L > 10 && ft("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), E._updatedFibers.clear();
        }
      }
    }
    var qi = !1, di = null;
    function $l(s) {
      if (di === null)
        try {
          var v = ("require" + Math.random()).slice(0, 7), S = A && A[v];
          di = S.call(A, "timers").setImmediate;
        } catch {
          di = function (L) {
            qi === !1 && (qi = !0, typeof MessageChannel > "u" && se("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var Z = new MessageChannel();
            Z.port1.onmessage = L, Z.port2.postMessage(void 0);
          };
        }
      return di(s);
    }
    var Ur = 0, Pl = !1;
    function Gl(s) {
      {
        var v = Ur;
        Ur++, ue.current === null && (ue.current = []);
        var S = ue.isBatchingLegacy, E;
        try {
          if (ue.isBatchingLegacy = !0, E = s(), !S && ue.didScheduleLegacyUpdate) {
            var L = ue.current;
            L !== null && (ue.didScheduleLegacyUpdate = !1, Wi(L));
          }
        } catch (Ze) {
          throw nr(v), Ze;
        } finally {
          ue.isBatchingLegacy = S;
        }
        if (E !== null && typeof E == "object" && typeof E.then == "function") {
          var Z = E, $ = !1, te = {
            then: function (Ze, ut) {
              $ = !0, Z.then(function (Me) {
                nr(v), Ur === 0 ? Qi(Me, Ze, ut) : Ze(Me);
              }, function (Me) {
                nr(v), ut(Me);
              });
            }
          };
          return !Pl && typeof Promise < "u" && Promise.resolve().then(function () {
          }).then(function () {
            $ || (Pl = !0, se("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
          }), te;
        } else {
          var ge = E;
          if (nr(v), Ur === 0) {
            var He = ue.current;
            He !== null && (Wi(He), ue.current = null);
            var Pe = {
              then: function (Ze, ut) {
                ue.current === null ? (ue.current = [], Qi(ge, Ze, ut)) : Ze(ge);
              }
            };
            return Pe;
          } else {
            var Ge = {
              then: function (Ze, ut) {
                Ze(ge);
              }
            };
            return Ge;
          }
        }
      }
    }
    function nr(s) {
      s !== Ur - 1 && se("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ur = s;
    }
    function Qi(s, v, S) {
      {
        var E = ue.current;
        if (E !== null)
          try {
            Wi(E), $l(function () {
              E.length === 0 ? (ue.current = null, v(s)) : Qi(s, v, S);
            });
          } catch (L) {
            S(L);
          }
        else
          v(s);
      }
    }
    var kr = !1;
    function Wi(s) {
      if (!kr) {
        kr = !0;
        var v = 0;
        try {
          for (; v < s.length; v++) {
            var S = s[v];
            do
              S = S(!0);
            while (S !== null);
          }
          s.length = 0;
        } catch (E) {
          throw s = s.slice(v + 1), E;
        } finally {
          kr = !1;
        }
      }
    }
    var ql = Yl, Ql = Ha, Wl = xn, Xl = {
      map: ha,
      forEach: $i,
      count: ui,
      toArray: $u,
      only: oi
    };
    M.Children = Xl, M.Component = Un, M.Fragment = ke, M.Profiler = Bt, M.PureComponent = $t, M.StrictMode = d, M.Suspense = B, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ct, M.act = Gl, M.cloneElement = Ql, M.createContext = li, M.createElement = ql, M.createFactory = Wl, M.createRef = kn, M.forwardRef = si, M.isValidElement = ze, M.lazy = Na, M.memo = _, M.startTransition = nf, M.unstable_act = Gl, M.useCallback = tt, M.useContext = K, M.useDebugValue = na, M.useDeferredValue = Fn, M.useEffect = pe, M.useId = he, M.useImperativeHandle = za, M.useInsertionEffect = Tt, M.useLayoutEffect = We, M.useMemo = nn, M.useReducer = xe, M.useRef = I, M.useState = ye, M.useSyncExternalStore = tr, M.useTransition = Nt, M.version = fe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(Zc, Zc.exports);
var BO = Zc.exports;
yS.exports = BO;
var oh = yS.exports;
const gS = /* @__PURE__ */ VO(oh);
var bS = { exports: {} }, Xn = {}, SS = { exports: {} }, CS = {};
(function (A) {
  /**
   * @license React
   * scheduler.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function () {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var M = !1, fe = !1, Be = 5;
    function Zt(k, q) {
      var ve = k.length;
      k.push(q), Bt(k, q, ve);
    }
    function ke(k) {
      return k.length === 0 ? null : k[0];
    }
    function d(k) {
      if (k.length === 0)
        return null;
      var q = k[0], ve = k.pop();
      return ve !== q && (k[0] = ve, le(k, ve, 0)), q;
    }
    function Bt(k, q, ve) {
      for (var Ne = ve; Ne > 0;) {
        var ze = Ne - 1 >>> 1, Rt = k[ze];
        if (G(Rt, q) > 0)
          k[ze] = q, k[Ne] = Rt, Ne = ze;
        else
          return;
      }
    }
    function le(k, q, ve) {
      for (var Ne = ve, ze = k.length, Rt = ze >>> 1; Ne < Rt;) {
        var vt = (Ne + 1) * 2 - 1, Tn = k[vt], $e = vt + 1, jn = k[$e];
        if (G(Tn, q) < 0)
          $e < ze && G(jn, Tn) < 0 ? (k[Ne] = jn, k[$e] = q, Ne = $e) : (k[Ne] = Tn, k[vt] = q, Ne = vt);
        else if ($e < ze && G(jn, q) < 0)
          k[Ne] = jn, k[$e] = q, Ne = $e;
        else
          return;
      }
    }
    function G(k, q) {
      var ve = k.sortIndex - q.sortIndex;
      return ve !== 0 ? ve : k.id - q.id;
    }
    var Ye = 1, B = 2, W = 3, V = 4, ie = 5;
    function rt(k, q) {
    }
    var st = typeof performance == "object" && typeof performance.now == "function";
    if (st) {
      var St = performance;
      A.unstable_now = function () {
        return St.now();
      };
    } else {
      var Ue = Date, Te = Ue.now();
      A.unstable_now = function () {
        return Ue.now() - Te;
      };
    }
    var it = 1073741823, ue = -1, Ke = 250, Ee = 5e3, bn = 1e4, Sn = it, ht = [], Qe = [], An = 1, de = null, we = W, ct = !1, ft = !1, se = !1, Yt = typeof setTimeout == "function" ? setTimeout : null, Aa = typeof clearTimeout == "function" ? clearTimeout : null, Kn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function fa(k) {
      for (var q = ke(Qe); q !== null;) {
        if (q.callback === null)
          d(Qe);
        else if (q.startTime <= k)
          d(Qe), q.sortIndex = q.expirationTime, Zt(ht, q);
        else
          return;
        q = ke(Qe);
      }
    }
    function Ut(k) {
      if (se = !1, fa(k), !ft)
        if (ke(ht) !== null)
          ft = !0, Hn(Cn);
        else {
          var q = ke(Qe);
          q !== null && dt(Ut, q.startTime - k);
        }
    }
    function Cn(k, q) {
      ft = !1, se && (se = !1, ta()), ct = !0;
      var ve = we;
      try {
        var Ne;
        if (!fe) return Un(k, q);
      } finally {
        de = null, we = ve, ct = !1;
      }
    }
    function Un(k, q) {
      var ve = q;
      for (fa(ve), de = ke(ht); de !== null && !M && !(de.expirationTime > ve && (!k || Jn()));) {
        var Ne = de.callback;
        if (typeof Ne == "function") {
          de.callback = null, we = de.priorityLevel;
          var ze = de.expirationTime <= ve, Rt = Ne(ze);
          ve = A.unstable_now(), typeof Rt == "function" ? de.callback = Rt : de === ke(ht) && d(ht), fa(ve);
        } else
          d(ht);
        de = ke(ht);
      }
      if (de !== null)
        return !0;
      var vt = ke(Qe);
      return vt !== null && dt(Ut, vt.startTime - ve), !1;
    }
    function Ua(k, q) {
      switch (k) {
        case Ye:
        case B:
        case W:
        case V:
        case ie:
          break;
        default:
          k = W;
      }
      var ve = we;
      we = k;
      try {
        return q();
      } finally {
        we = ve;
      }
    }
    function da(k) {
      var q;
      switch (we) {
        case Ye:
        case B:
        case W:
          q = W;
          break;
        default:
          q = we;
          break;
      }
      var ve = we;
      we = q;
      try {
        return k();
      } finally {
        we = ve;
      }
    }
    function va(k) {
      var q = we;
      return function () {
        var ve = we;
        we = q;
        try {
          return k.apply(this, arguments);
        } finally {
          we = ve;
        }
      };
    }
    function In(k, q, ve) {
      var Ne = A.unstable_now(), ze;
      if (typeof ve == "object" && ve !== null) {
        var Rt = ve.delay;
        typeof Rt == "number" && Rt > 0 ? ze = Ne + Rt : ze = Ne;
      } else
        ze = Ne;
      var vt;
      switch (k) {
        case Ye:
          vt = ue;
          break;
        case B:
          vt = Ke;
          break;
        case ie:
          vt = Sn;
          break;
        case V:
          vt = bn;
          break;
        case W:
        default:
          vt = Ee;
          break;
      }
      var Tn = ze + vt, $e = {
        id: An++,
        callback: q,
        priorityLevel: k,
        startTime: ze,
        expirationTime: Tn,
        sortIndex: -1
      };
      return ze > Ne ? ($e.sortIndex = ze, Zt(Qe, $e), ke(ht) === null && $e === ke(Qe) && (se ? ta() : se = !0, dt(Ut, ze - Ne))) : ($e.sortIndex = Tn, Zt(ht, $e), !ft && !ct && (ft = !0, Hn(Cn))), $e;
    }
    function $t() {
    }
    function En() {
      !ft && !ct && (ft = !0, Hn(Cn));
    }
    function kn() {
      return ke(ht);
    }
    function Nn(k) {
      k.callback = null;
    }
    function mt() {
      return we;
    }
    var en = !1, kt = null, Ct = -1, Et = Be, zn = -1;
    function Jn() {
      var k = A.unstable_now() - zn;
      return !(k < Et);
    }
    function Rn() {
    }
    function pa(k) {
      if (k < 0 || k > 125) {
        console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        return;
      }
      k > 0 ? Et = Math.floor(1e3 / k) : Et = Be;
    }
    var Zn = function () {
      if (kt !== null) {
        var k = A.unstable_now();
        zn = k;
        var q = !0, ve = !0;
        try {
          ve = kt(q, k);
        } finally {
          ve ? fn() : (en = !1, kt = null);
        }
      } else
        en = !1;
    }, fn;
    if (typeof Kn == "function")
      fn = function () {
        Kn(Zn);
      };
    else if (typeof MessageChannel < "u") {
      var ea = new MessageChannel(), tn = ea.port2;
      ea.port1.onmessage = Zn, fn = function () {
        tn.postMessage(null);
      };
    } else
      fn = function () {
        Yt(Zn, 0);
      };
    function Hn(k) {
      kt = k, en || (en = !0, fn());
    }
    function dt(k, q) {
      Ct = Yt(function () {
        k(A.unstable_now());
      }, q);
    }
    function ta() {
      Aa(Ct), Ct = -1;
    }
    var Ia = Rn, Ja = null;
    A.unstable_IdlePriority = ie, A.unstable_ImmediatePriority = Ye, A.unstable_LowPriority = V, A.unstable_NormalPriority = W, A.unstable_Profiling = Ja, A.unstable_UserBlockingPriority = B, A.unstable_cancelCallback = Nn, A.unstable_continueExecution = En, A.unstable_forceFrameRate = pa, A.unstable_getCurrentPriorityLevel = mt, A.unstable_getFirstCallbackNode = kn, A.unstable_next = da, A.unstable_pauseExecution = $t, A.unstable_requestPaint = Ia, A.unstable_runWithPriority = Ua, A.unstable_scheduleCallback = In, A.unstable_shouldYield = Jn, A.unstable_wrapCallback = va, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(CS);
SS.exports = CS;
var YO = SS.exports;
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function () {
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
  var A = oh, M = YO, fe = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Be = !1;
  function Zt(e) {
    Be = e;
  }
  function ke(e) {
    if (!Be) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
        n[a - 1] = arguments[a];
      Bt("warn", e, n);
    }
  }
  function d(e) {
    if (!Be) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
        n[a - 1] = arguments[a];
      Bt("error", e, n);
    }
  }
  function Bt(e, t, n) {
    {
      var a = fe.ReactDebugCurrentFrame, r = a.getStackAddendum();
      r !== "" && (t += "%s", n = n.concat([r]));
      var i = n.map(function (u) {
        return String(u);
      });
      i.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, i);
    }
  }
  var le = 0, G = 1, Ye = 2, B = 3, W = 4, V = 5, ie = 6, rt = 7, st = 8, St = 9, Ue = 10, Te = 11, it = 12, ue = 13, Ke = 14, Ee = 15, bn = 16, Sn = 17, ht = 18, Qe = 19, An = 21, de = 22, we = 23, ct = 24, ft = 25, se = !0, Yt = !1, Aa = !1, Kn = !1, fa = !1, Ut = !0, Cn = !1, Un = !0, Ua = !0, da = !0, va = !0, In = /* @__PURE__ */ new Set(), $t = {}, En = {};
  function kn(e, t) {
    Nn(e, t), Nn(e + "Capture", t);
  }
  function Nn(e, t) {
    $t[e] && d("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), $t[e] = t;
    {
      var n = e.toLowerCase();
      En[n] = e, e === "onDoubleClick" && (En.ondblclick = e);
    }
    for (var a = 0; a < t.length; a++)
      In.add(t[a]);
  }
  var mt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", en = Object.prototype.hasOwnProperty;
  function kt(e) {
    {
      var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
      return n;
    }
  }
  function Ct(e) {
    try {
      return Et(e), !1;
    } catch {
      return !0;
    }
  }
  function Et(e) {
    return "" + e;
  }
  function zn(e, t) {
    if (Ct(e))
      return d("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, kt(e)), Et(e);
  }
  function Jn(e) {
    if (Ct(e))
      return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kt(e)), Et(e);
  }
  function Rn(e, t) {
    if (Ct(e))
      return d("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, kt(e)), Et(e);
  }
  function pa(e, t) {
    if (Ct(e))
      return d("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, kt(e)), Et(e);
  }
  function Zn(e) {
    if (Ct(e))
      return d("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", kt(e)), Et(e);
  }
  function fn(e) {
    if (Ct(e))
      return d("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", kt(e)), Et(e);
  }
  var ea = 0, tn = 1, Hn = 2, dt = 3, ta = 4, Ia = 5, Ja = 6, k = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", q = k + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ve = new RegExp("^[" + k + "][" + q + "]*$"), Ne = {}, ze = {};
  function Rt(e) {
    return en.call(ze, e) ? !0 : en.call(Ne, e) ? !1 : ve.test(e) ? (ze[e] = !0, !0) : (Ne[e] = !0, d("Invalid attribute name: `%s`", e), !1);
  }
  function vt(e, t, n) {
    return t !== null ? t.type === ea : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
  }
  function Tn(e, t, n, a) {
    if (n !== null && n.type === ea)
      return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean": {
        if (a)
          return !1;
        if (n !== null)
          return !n.acceptsBooleans;
        var r = e.toLowerCase().slice(0, 5);
        return r !== "data-" && r !== "aria-";
      }
      default:
        return !1;
    }
  }
  function $e(e, t, n, a) {
    if (t === null || typeof t > "u" || Tn(e, t, n, a))
      return !0;
    if (a)
      return !1;
    if (n !== null)
      switch (n.type) {
        case dt:
          return !t;
        case ta:
          return t === !1;
        case Ia:
          return isNaN(t);
        case Ja:
          return isNaN(t) || t < 1;
      }
    return !1;
  }
  function jn(e) {
    return Je.hasOwnProperty(e) ? Je[e] : null;
  }
  function Ie(e, t, n, a, r, i, u) {
    this.acceptsBooleans = t === Hn || t === dt || t === ta, this.attributeName = a, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = u;
  }
  var Je = {}, ka = [
    "children",
    "dangerouslySetInnerHTML",
    // TODO: This prevents the assignment of defaultValue to regular
    // elements (not just inputs). Now that ReactDOMInput assigns to the
    // defaultValue property -- do we need this?
    "defaultValue",
    "defaultChecked",
    "innerHTML",
    "suppressContentEditableWarning",
    "suppressHydrationWarning",
    "style"
  ];
  ka.forEach(function (e) {
    Je[e] = new Ie(
      e,
      ea,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0], n = e[1];
    Je[t] = new Ie(
      t,
      tn,
      !1,
      // mustUseProperty
      n,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Je[e] = new Ie(
      e,
      Hn,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    Je[e] = new Ie(
      e,
      Hn,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "allowFullScreen",
    "async",
    // Note: there is a special case that prevents it from being written to the DOM
    // on the client side because the browsers are inconsistent. Instead we call focus().
    "autoFocus",
    "autoPlay",
    "controls",
    "default",
    "defer",
    "disabled",
    "disablePictureInPicture",
    "disableRemotePlayback",
    "formNoValidate",
    "hidden",
    "loop",
    "noModule",
    "noValidate",
    "open",
    "playsInline",
    "readOnly",
    "required",
    "reversed",
    "scoped",
    "seamless",
    // Microdata
    "itemScope"
  ].forEach(function (e) {
    Je[e] = new Ie(
      e,
      dt,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "checked",
    // Note: `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`. We have special logic for handling this.
    "multiple",
    "muted",
    "selected"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function (e) {
    Je[e] = new Ie(
      e,
      dt,
      !0,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "capture",
    "download"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function (e) {
    Je[e] = new Ie(
      e,
      ta,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "cols",
    "rows",
    "size",
    "span"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function (e) {
    Je[e] = new Ie(
      e,
      Ja,
      !1,
      // mustUseProperty
      e,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["rowSpan", "start"].forEach(function (e) {
    Je[e] = new Ie(
      e,
      Ia,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  });
  var ha = /[\-\:]([a-z])/g, ui = function (e) {
    return e[1].toUpperCase();
  };
  [
    "accent-height",
    "alignment-baseline",
    "arabic-form",
    "baseline-shift",
    "cap-height",
    "clip-path",
    "clip-rule",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "dominant-baseline",
    "enable-background",
    "fill-opacity",
    "fill-rule",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "glyph-name",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "horiz-adv-x",
    "horiz-origin-x",
    "image-rendering",
    "letter-spacing",
    "lighting-color",
    "marker-end",
    "marker-mid",
    "marker-start",
    "overline-position",
    "overline-thickness",
    "paint-order",
    "panose-1",
    "pointer-events",
    "rendering-intent",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "strikethrough-position",
    "strikethrough-thickness",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "underline-position",
    "underline-thickness",
    "unicode-bidi",
    "unicode-range",
    "units-per-em",
    "v-alphabetic",
    "v-hanging",
    "v-ideographic",
    "v-mathematical",
    "vector-effect",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "word-spacing",
    "writing-mode",
    "xmlns:xlink",
    "x-height"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function (e) {
    var t = e.replace(ha, ui);
    Je[t] = new Ie(
      t,
      tn,
      !1,
      // mustUseProperty
      e,
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "xlink:actuate",
    "xlink:arcrole",
    "xlink:role",
    "xlink:show",
    "xlink:title",
    "xlink:type"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function (e) {
    var t = e.replace(ha, ui);
    Je[t] = new Ie(
      t,
      tn,
      !1,
      // mustUseProperty
      e,
      "http://www.w3.org/1999/xlink",
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "xml:base",
    "xml:lang",
    "xml:space"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function (e) {
    var t = e.replace(ha, ui);
    Je[t] = new Ie(
      t,
      tn,
      !1,
      // mustUseProperty
      e,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
    );
  }), ["tabIndex", "crossOrigin"].forEach(function (e) {
    Je[e] = new Ie(
      e,
      tn,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  });
  var $i = "xlinkHref";
  Je[$i] = new Ie(
    "xlinkHref",
    tn,
    !1,
    // mustUseProperty
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    // sanitizeURL
    !1
  ), ["src", "href", "action", "formAction"].forEach(function (e) {
    Je[e] = new Ie(
      e,
      tn,
      !1,
      // mustUseProperty
      e.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !0,
      // sanitizeURL
      !0
    );
  });
  var $u = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, oi = !1;
  function li(e) {
    !oi && $u.test(e) && (oi = !0, d("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
  }
  function Za(e, t, n, a) {
    if (a.mustUseProperty) {
      var r = a.propertyName;
      return e[r];
    } else {
      zn(n, t), a.sanitizeURL && li("" + n);
      var i = a.attributeName, u = null;
      if (a.type === ta) {
        if (e.hasAttribute(i)) {
          var o = e.getAttribute(i);
          return o === "" ? !0 : $e(t, n, a, !1) ? o : o === "" + n ? n : o;
        }
      } else if (e.hasAttribute(i)) {
        if ($e(t, n, a, !1))
          return e.getAttribute(i);
        if (a.type === dt)
          return n;
        u = e.getAttribute(i);
      }
      return $e(t, n, a, !1) ? u === null ? n : u : u === "" + n ? n : u;
    }
  }
  function Dr(e, t, n, a) {
    {
      if (!Rt(t))
        return;
      if (!e.hasAttribute(t))
        return n === void 0 ? void 0 : null;
      var r = e.getAttribute(t);
      return zn(n, t), r === "" + n ? n : r;
    }
  }
  function er(e, t, n, a) {
    var r = jn(t);
    if (!vt(t, r, a)) {
      if ($e(t, n, r, a) && (n = null), a || r === null) {
        if (Rt(t)) {
          var i = t;
          n === null ? e.removeAttribute(i) : (zn(n, t), e.setAttribute(i, "" + n));
        }
        return;
      }
      var u = r.mustUseProperty;
      if (u) {
        var o = r.propertyName;
        if (n === null) {
          var l = r.type;
          e[o] = l === dt ? !1 : "";
        } else
          e[o] = n;
        return;
      }
      var c = r.attributeName, f = r.attributeNamespace;
      if (n === null)
        e.removeAttribute(c);
      else {
        var m = r.type, h;
        m === dt || m === ta && n === !0 ? h = "" : (zn(n, c), h = "" + n, r.sanitizeURL && li(h.toString())), f ? e.setAttributeNS(f, c, h) : e.setAttribute(c, h);
      }
    }
  }
  var ma = Symbol.for("react.element"), ya = Symbol.for("react.portal"), Na = Symbol.for("react.fragment"), si = Symbol.for("react.strict_mode"), _r = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), _ = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), ye = Symbol.for("react.suspense_list"), xe = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), pe = Symbol.for("react.scope"), Tt = Symbol.for("react.debug_trace_mode"), We = Symbol.for("react.offscreen"), tt = Symbol.for("react.legacy_hidden"), nn = Symbol.for("react.cache"), za = Symbol.for("react.tracing_marker"), na = Symbol.iterator, Nt = "@@iterator";
  function Fn(e) {
    if (e === null || typeof e != "object")
      return null;
    var t = na && e[na] || e[Nt];
    return typeof t == "function" ? t : null;
  }
  var he = Object.assign, tr = 0, Or, Pu, Gu, qu, Qu, Wu, Xu;
  function Ku() {
  }
  Ku.__reactDisabledLog = !0;
  function zl() {
    {
      if (tr === 0) {
        Or = console.log, Pu = console.info, Gu = console.warn, qu = console.error, Qu = console.group, Wu = console.groupCollapsed, Xu = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Ku,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      tr++;
    }
  }
  function ef() {
    {
      if (tr--, tr === 0) {
        var e = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: he({}, e, {
            value: Or
          }),
          info: he({}, e, {
            value: Pu
          }),
          warn: he({}, e, {
            value: Gu
          }),
          error: he({}, e, {
            value: qu
          }),
          group: he({}, e, {
            value: Qu
          }),
          groupCollapsed: he({}, e, {
            value: Wu
          }),
          groupEnd: he({}, e, {
            value: Xu
          })
        });
      }
      tr < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var Iu = fe.ReactCurrentDispatcher, ci;
  function aa(e, t, n) {
    {
      if (ci === void 0)
        try {
          throw Error();
        } catch (r) {
          var a = r.stack.trim().match(/\n( *(at )?)/);
          ci = a && a[1] || "";
        }
      return `
` + ci + e;
    }
  }
  var wr = !1, Mr;
  {
    var Pi = typeof WeakMap == "function" ? WeakMap : Map;
    Mr = new Pi();
  }
  function Ju(e, t) {
    if (!e || wr)
      return "";
    {
      var n = Mr.get(e);
      if (n !== void 0)
        return n;
    }
    var a;
    wr = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var i;
    i = Iu.current, Iu.current = null, zl();
    try {
      if (t) {
        var u = function () {
          throw Error();
        };
        if (Object.defineProperty(u.prototype, "props", {
          set: function () {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(u, []);
          } catch (C) {
            a = C;
          }
          Reflect.construct(e, [], u);
        } else {
          try {
            u.call();
          } catch (C) {
            a = C;
          }
          e.call(u.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (C) {
          a = C;
        }
        e();
      }
    } catch (C) {
      if (C && a && typeof C.stack == "string") {
        for (var o = C.stack.split(`
`), l = a.stack.split(`
`), c = o.length - 1, f = l.length - 1; c >= 1 && f >= 0 && o[c] !== l[f];)
          f--;
        for (; c >= 1 && f >= 0; c--, f--)
          if (o[c] !== l[f]) {
            if (c !== 1 || f !== 1)
              do
                if (c--, f--, f < 0 || o[c] !== l[f]) {
                  var m = `
` + o[c].replace(" at new ", " at ");
                  return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && Mr.set(e, m), m;
                }
              while (c >= 1 && f >= 0);
            break;
          }
      }
    } finally {
      wr = !1, Iu.current = i, ef(), Error.prepareStackTrace = r;
    }
    var h = e ? e.displayName || e.name : "", b = h ? aa(h) : "";
    return typeof e == "function" && Mr.set(e, b), b;
  }
  function Hl(e, t, n) {
    return Ju(e, !0);
  }
  function Zu(e, t, n) {
    return Ju(e, !1);
  }
  function tf(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function Lr(e, t, n) {
    if (e == null)
      return "";
    if (typeof e == "function")
      return Ju(e, tf(e));
    if (typeof e == "string")
      return aa(e);
    switch (e) {
      case K:
        return aa("Suspense");
      case ye:
        return aa("SuspenseList");
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case w:
          return Zu(e.render);
        case xe:
          return Lr(e.type, t, n);
        case I: {
          var a = e, r = a._payload, i = a._init;
          try {
            return Lr(i(r), t, n);
          } catch {
          }
        }
      }
    return "";
  }
  function jl(e) {
    switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
      case V:
        return aa(e.type);
      case bn:
        return aa("Lazy");
      case ue:
        return aa("Suspense");
      case Qe:
        return aa("SuspenseList");
      case le:
      case Ye:
      case Ee:
        return Zu(e.type);
      case Te:
        return Zu(e.type.render);
      case G:
        return Hl(e.type);
      default:
        return "";
    }
  }
  function eo(e) {
    try {
      var t = "", n = e;
      do
        t += jl(n), n = n.return;
      while (n);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function Gi(e, t, n) {
    var a = e.displayName;
    if (a)
      return a;
    var r = t.displayName || t.name || "";
    return r !== "" ? n + "(" + r + ")" : n;
  }
  function Fl(e) {
    return e.displayName || "Context";
  }
  function De(e) {
    if (e == null)
      return null;
    if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case Na:
        return "Fragment";
      case ya:
        return "Portal";
      case _r:
        return "Profiler";
      case si:
        return "StrictMode";
      case K:
        return "Suspense";
      case ye:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case _:
          var t = e;
          return Fl(t) + ".Consumer";
        case p:
          var n = e;
          return Fl(n._context) + ".Provider";
        case w:
          return Gi(e, e.render, "ForwardRef");
        case xe:
          var a = e.displayName || null;
          return a !== null ? a : De(e.type) || "Memo";
        case I: {
          var r = e, i = r._payload, u = r._init;
          try {
            return De(u(i));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  function to(e, t, n) {
    var a = t.displayName || t.name || "";
    return e.displayName || (a !== "" ? n + "(" + a + ")" : n);
  }
  function no(e) {
    return e.displayName || "Context";
  }
  function oe(e) {
    var t = e.tag, n = e.type;
    switch (t) {
      case ct:
        return "Cache";
      case St:
        var a = n;
        return no(a) + ".Consumer";
      case Ue:
        var r = n;
        return no(r._context) + ".Provider";
      case ht:
        return "DehydratedFragment";
      case Te:
        return to(n, n.render, "ForwardRef");
      case rt:
        return "Fragment";
      case V:
        return n;
      case W:
        return "Portal";
      case B:
        return "Root";
      case ie:
        return "Text";
      case bn:
        return De(n);
      case st:
        return n === si ? "StrictMode" : "Mode";
      case de:
        return "Offscreen";
      case it:
        return "Profiler";
      case An:
        return "Scope";
      case ue:
        return "Suspense";
      case Qe:
        return "SuspenseList";
      case ft:
        return "TracingMarker";
      case G:
      case le:
      case Sn:
      case Ye:
      case Ke:
      case Ee:
        if (typeof n == "function")
          return n.displayName || n.name || null;
        if (typeof n == "string")
          return n;
        break;
    }
    return null;
  }
  var Vl = fe.ReactDebugCurrentFrame, an = null, fi = !1;
  function Ar() {
    {
      if (an === null)
        return null;
      var e = an._debugOwner;
      if (e !== null && typeof e < "u")
        return oe(e);
    }
    return null;
  }
  function Bl() {
    return an === null ? "" : eo(an);
  }
  function zt() {
    Vl.getCurrentStack = null, an = null, fi = !1;
  }
  function nt(e) {
    Vl.getCurrentStack = e === null ? null : Bl, an = e, fi = !1;
  }
  function Yl() {
    return an;
  }
  function Vn(e) {
    fi = e;
  }
  function xn(e) {
    return "" + e;
  }
  function Ha(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return fn(e), e;
      default:
        return "";
    }
  }
  var nf = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0
  };
  function qi(e, t) {
    nf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || d("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || d("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
  }
  function di(e) {
    var t = e.type, n = e.nodeName;
    return n && n.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function $l(e) {
    return e._valueTracker;
  }
  function Ur(e) {
    e._valueTracker = null;
  }
  function Pl(e) {
    var t = "";
    return e && (di(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
  }
  function Gl(e) {
    var t = di(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    fn(e[t]);
    var a = "" + e[t];
    if (!(e.hasOwnProperty(t) || typeof n > "u" || typeof n.get != "function" || typeof n.set != "function")) {
      var r = n.get, i = n.set;
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (o) {
          fn(o), a = "" + o, i.call(this, o);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      });
      var u = {
        getValue: function () {
          return a;
        },
        setValue: function (o) {
          fn(o), a = "" + o;
        },
        stopTracking: function () {
          Ur(e), delete e[t];
        }
      };
      return u;
    }
  }
  function nr(e) {
    $l(e) || (e._valueTracker = Gl(e));
  }
  function Qi(e) {
    if (!e)
      return !1;
    var t = $l(e);
    if (!t)
      return !0;
    var n = t.getValue(), a = Pl(e);
    return a !== n ? (t.setValue(a), !0) : !1;
  }
  function kr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Wi = !1, ql = !1, Ql = !1, Wl = !1;
  function Xl(e) {
    var t = e.type === "checkbox" || e.type === "radio";
    return t ? e.checked != null : e.value != null;
  }
  function s(e, t) {
    var n = e, a = t.checked, r = he({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: a ?? n._wrapperState.initialChecked
    });
    return r;
  }
  function v(e, t) {
    qi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ql && (d("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), ql = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Wi && (d("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), Wi = !0);
    var n = e, a = t.defaultValue == null ? "" : t.defaultValue;
    n._wrapperState = {
      initialChecked: t.checked != null ? t.checked : t.defaultChecked,
      initialValue: Ha(t.value != null ? t.value : a),
      controlled: Xl(t)
    };
  }
  function S(e, t) {
    var n = e, a = t.checked;
    a != null && er(n, "checked", a, !1);
  }
  function E(e, t) {
    var n = e;
    {
      var a = Xl(t);
      !n._wrapperState.controlled && a && !Wl && (d("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Wl = !0), n._wrapperState.controlled && !a && !Ql && (d("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ql = !0);
    }
    S(e, t);
    var r = Ha(t.value), i = t.type;
    if (r != null)
      i === "number" ? (r === 0 && n.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        n.value != r) && (n.value = xn(r)) : n.value !== xn(r) && (n.value = xn(r));
    else if (i === "submit" || i === "reset") {
      n.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? te(n, t.type, r) : t.hasOwnProperty("defaultValue") && te(n, t.type, Ha(t.defaultValue)), t.checked == null && t.defaultChecked != null && (n.defaultChecked = !!t.defaultChecked);
  }
  function L(e, t, n) {
    var a = e;
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type, i = r === "submit" || r === "reset";
      if (i && (t.value === void 0 || t.value === null))
        return;
      var u = xn(a._wrapperState.initialValue);
      n || u !== a.value && (a.value = u), a.defaultValue = u;
    }
    var o = a.name;
    o !== "" && (a.name = ""), a.defaultChecked = !a.defaultChecked, a.defaultChecked = !!a._wrapperState.initialChecked, o !== "" && (a.name = o);
  }
  function Z(e, t) {
    var n = e;
    E(n, t), $(n, t);
  }
  function $(e, t) {
    var n = t.name;
    if (t.type === "radio" && n != null) {
      for (var a = e; a.parentNode;)
        a = a.parentNode;
      zn(n, "name");
      for (var r = a.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), i = 0; i < r.length; i++) {
        var u = r[i];
        if (!(u === e || u.form !== e.form)) {
          var o = Ns(u);
          if (!o)
            throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
          Qi(u), E(u, o);
        }
      }
    }
  }
  function te(e, t, n) {
    // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
    (t !== "number" || kr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = xn(e._wrapperState.initialValue) : e.defaultValue !== xn(n) && (e.defaultValue = xn(n)));
  }
  var ge = !1, He = !1, Pe = !1;
  function Ge(e, t) {
    t.value == null && (typeof t.children == "object" && t.children !== null ? A.Children.forEach(t.children, function (n) {
      n != null && (typeof n == "string" || typeof n == "number" || He || (He = !0, d("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
    }) : t.dangerouslySetInnerHTML != null && (Pe || (Pe = !0, d("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ge && (d("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ge = !0);
  }
  function Ze(e, t) {
    t.value != null && e.setAttribute("value", xn(Ha(t.value)));
  }
  var ut = Array.isArray;
  function Me(e) {
    return ut(e);
  }
  var Nr;
  Nr = !1;
  function Xi() {
    var e = Ar();
    return e ? `

Check the render method of \`` + e + "`." : "";
  }
  var ao = ["value", "defaultValue"];
  function af(e) {
    {
      qi("select", e);
      for (var t = 0; t < ao.length; t++) {
        var n = ao[t];
        if (e[n] != null) {
          var a = Me(e[n]);
          e.multiple && !a ? d("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, Xi()) : !e.multiple && a && d("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, Xi());
        }
      }
    }
  }
  function ar(e, t, n, a) {
    var r = e.options;
    if (t) {
      for (var i = n, u = {}, o = 0; o < i.length; o++)
        u["$" + i[o]] = !0;
      for (var l = 0; l < r.length; l++) {
        var c = u.hasOwnProperty("$" + r[l].value);
        r[l].selected !== c && (r[l].selected = c), c && a && (r[l].defaultSelected = !0);
      }
    } else {
      for (var f = xn(Ha(n)), m = null, h = 0; h < r.length; h++) {
        if (r[h].value === f) {
          r[h].selected = !0, a && (r[h].defaultSelected = !0);
          return;
        }
        m === null && !r[h].disabled && (m = r[h]);
      }
      m !== null && (m.selected = !0);
    }
  }
  function ro(e, t) {
    return he({}, t, {
      value: void 0
    });
  }
  function io(e, t) {
    var n = e;
    af(t), n._wrapperState = {
      wasMultiple: !!t.multiple
    }, t.value !== void 0 && t.defaultValue !== void 0 && !Nr && (d("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Nr = !0);
  }
  function rf(e, t) {
    var n = e;
    n.multiple = !!t.multiple;
    var a = t.value;
    a != null ? ar(n, !!t.multiple, a, !1) : t.defaultValue != null && ar(n, !!t.multiple, t.defaultValue, !0);
  }
  function TS(e, t) {
    var n = e, a = n._wrapperState.wasMultiple;
    n._wrapperState.wasMultiple = !!t.multiple;
    var r = t.value;
    r != null ? ar(n, !!t.multiple, r, !1) : a !== !!t.multiple && (t.defaultValue != null ? ar(n, !!t.multiple, t.defaultValue, !0) : ar(n, !!t.multiple, t.multiple ? [] : "", !1));
  }
  function xS(e, t) {
    var n = e, a = t.value;
    a != null && ar(n, !!t.multiple, a, !1);
  }
  var lh = !1;
  function uf(e, t) {
    var n = e;
    if (t.dangerouslySetInnerHTML != null)
      throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
    var a = he({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: xn(n._wrapperState.initialValue)
    });
    return a;
  }
  function sh(e, t) {
    var n = e;
    qi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !lh && (d("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component"), lh = !0);
    var a = t.value;
    if (a == null) {
      var r = t.children, i = t.defaultValue;
      if (r != null) {
        d("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
        {
          if (i != null)
            throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          if (Me(r)) {
            if (r.length > 1)
              throw new Error("<textarea> can only have at most one child.");
            r = r[0];
          }
          i = r;
        }
      }
      i == null && (i = ""), a = i;
    }
    n._wrapperState = {
      initialValue: Ha(a)
    };
  }
  function ch(e, t) {
    var n = e, a = Ha(t.value), r = Ha(t.defaultValue);
    if (a != null) {
      var i = xn(a);
      i !== n.value && (n.value = i), t.defaultValue == null && n.defaultValue !== i && (n.defaultValue = i);
    }
    r != null && (n.defaultValue = xn(r));
  }
  function fh(e, t) {
    var n = e, a = n.textContent;
    a === n._wrapperState.initialValue && a !== "" && a !== null && (n.value = a);
  }
  function DS(e, t) {
    ch(e, t);
  }
  var rr = "http://www.w3.org/1999/xhtml", _S = "http://www.w3.org/1998/Math/MathML", of = "http://www.w3.org/2000/svg";
  function lf(e) {
    switch (e) {
      case "svg":
        return of;
      case "math":
        return _S;
      default:
        return rr;
    }
  }
  function sf(e, t) {
    return e == null || e === rr ? lf(t) : e === of && t === "foreignObject" ? rr : e;
  }
  var OS = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, a, r) {
      MSApp.execUnsafeLocalFunction(function () {
        return e(t, n, a, r);
      });
    } : e;
  }, Kl, dh = OS(function (e, t) {
    if (e.namespaceURI === of && !("innerHTML" in e)) {
      Kl = Kl || document.createElement("div"), Kl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
      for (var n = Kl.firstChild; e.firstChild;)
        e.removeChild(e.firstChild);
      for (; n.firstChild;)
        e.appendChild(n.firstChild);
      return;
    }
    e.innerHTML = t;
  }), Dn = 1, ir = 3, yt = 8, ur = 9, cf = 11, Il = function (e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === ir) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }, wS = {
    animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
    background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
    backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
    border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
    borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
    borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
    borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
    borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
    borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
    borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
    borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
    borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
    borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
    borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
    borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
    borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
    borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
    columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
    columns: ["columnCount", "columnWidth"],
    flex: ["flexBasis", "flexGrow", "flexShrink"],
    flexFlow: ["flexDirection", "flexWrap"],
    font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
    fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
    gap: ["columnGap", "rowGap"],
    grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
    gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
    gridColumn: ["gridColumnEnd", "gridColumnStart"],
    gridColumnGap: ["columnGap"],
    gridGap: ["columnGap", "rowGap"],
    gridRow: ["gridRowEnd", "gridRowStart"],
    gridRowGap: ["rowGap"],
    gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
    listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
    margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
    marker: ["markerEnd", "markerMid", "markerStart"],
    mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
    maskPosition: ["maskPositionX", "maskPositionY"],
    outline: ["outlineColor", "outlineStyle", "outlineWidth"],
    overflow: ["overflowX", "overflowY"],
    padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
    placeContent: ["alignContent", "justifyContent"],
    placeItems: ["alignItems", "justifyItems"],
    placeSelf: ["alignSelf", "justifySelf"],
    textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
    textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
    transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
    wordWrap: ["overflowWrap"]
  }, uo = {
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
    // SVG-related properties
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  };
  function MS(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
  }
  var LS = ["Webkit", "ms", "Moz", "O"];
  Object.keys(uo).forEach(function (e) {
    LS.forEach(function (t) {
      uo[MS(t, e)] = uo[e];
    });
  });
  function ff(e, t, n) {
    var a = t == null || typeof t == "boolean" || t === "";
    return a ? "" : !n && typeof t == "number" && t !== 0 && !(uo.hasOwnProperty(e) && uo[e]) ? t + "px" : (pa(t, e), ("" + t).trim());
  }
  var AS = /([A-Z])/g, US = /^ms-/;
  function kS(e) {
    return e.replace(AS, "-$1").toLowerCase().replace(US, "-ms-");
  }
  var vh = function () {
  };
  {
    var NS = /^(?:webkit|moz|o)[A-Z]/, zS = /^-ms-/, HS = /-(.)/g, ph = /;\s*$/, Ki = {}, df = {}, hh = !1, mh = !1, jS = function (e) {
      return e.replace(HS, function (t, n) {
        return n.toUpperCase();
      });
    }, FS = function (e) {
      Ki.hasOwnProperty(e) && Ki[e] || (Ki[e] = !0, d(
        "Unsupported style property %s. Did you mean %s?",
        e,
        // As Andi Smith suggests
        // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
        // is converted to lowercase `ms`.
        jS(e.replace(zS, "ms-"))
      ));
    }, VS = function (e) {
      Ki.hasOwnProperty(e) && Ki[e] || (Ki[e] = !0, d("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
    }, BS = function (e, t) {
      df.hasOwnProperty(t) && df[t] || (df[t] = !0, d(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ph, "")));
    }, YS = function (e, t) {
      hh || (hh = !0, d("`NaN` is an invalid value for the `%s` css style property.", e));
    }, $S = function (e, t) {
      mh || (mh = !0, d("`Infinity` is an invalid value for the `%s` css style property.", e));
    };
    vh = function (e, t) {
      e.indexOf("-") > -1 ? FS(e) : NS.test(e) ? VS(e) : ph.test(t) && BS(e, t), typeof t == "number" && (isNaN(t) ? YS(e, t) : isFinite(t) || $S(e, t));
    };
  }
  var PS = vh;
  function GS(e) {
    {
      var t = "", n = "";
      for (var a in e)
        if (e.hasOwnProperty(a)) {
          var r = e[a];
          if (r != null) {
            var i = a.indexOf("--") === 0;
            t += n + (i ? a : kS(a)) + ":", t += ff(a, r, i), n = ";";
          }
        }
      return t || null;
    }
  }
  function yh(e, t) {
    var n = e.style;
    for (var a in t)
      if (t.hasOwnProperty(a)) {
        var r = a.indexOf("--") === 0;
        r || PS(a, t[a]);
        var i = ff(a, t[a], r);
        a === "float" && (a = "cssFloat"), r ? n.setProperty(a, i) : n[a] = i;
      }
  }
  function qS(e) {
    return e == null || typeof e == "boolean" || e === "";
  }
  function gh(e) {
    var t = {};
    for (var n in e)
      for (var a = wS[n] || [n], r = 0; r < a.length; r++)
        t[a[r]] = n;
    return t;
  }
  function QS(e, t) {
    {
      if (!t)
        return;
      var n = gh(e), a = gh(t), r = {};
      for (var i in n) {
        var u = n[i], o = a[i];
        if (o && u !== o) {
          var l = u + "," + o;
          if (r[l])
            continue;
          r[l] = !0, d("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", qS(e[u]) ? "Removing" : "Updating", u, o);
        }
      }
    }
  }
  var WS = {
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
    wbr: !0
    // NOTE: menuitem's close tag should be omitted, but that causes problems.
  }, XS = he({
    menuitem: !0
  }, WS), KS = "__html";
  function vf(e, t) {
    if (t) {
      if (XS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t.dangerouslySetInnerHTML != "object" || !(KS in t.dangerouslySetInnerHTML))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      }
      if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && d("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    }
  }
  function vi(e, t) {
    if (e.indexOf("-") === -1)
      return typeof t.is == "string";
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
  var Jl = {
    // HTML
    accept: "accept",
    acceptcharset: "acceptCharset",
    "accept-charset": "acceptCharset",
    accesskey: "accessKey",
    action: "action",
    allowfullscreen: "allowFullScreen",
    alt: "alt",
    as: "as",
    async: "async",
    autocapitalize: "autoCapitalize",
    autocomplete: "autoComplete",
    autocorrect: "autoCorrect",
    autofocus: "autoFocus",
    autoplay: "autoPlay",
    autosave: "autoSave",
    capture: "capture",
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    challenge: "challenge",
    charset: "charSet",
    checked: "checked",
    children: "children",
    cite: "cite",
    class: "className",
    classid: "classID",
    classname: "className",
    cols: "cols",
    colspan: "colSpan",
    content: "content",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    controls: "controls",
    controlslist: "controlsList",
    coords: "coords",
    crossorigin: "crossOrigin",
    dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
    data: "data",
    datetime: "dateTime",
    default: "default",
    defaultchecked: "defaultChecked",
    defaultvalue: "defaultValue",
    defer: "defer",
    dir: "dir",
    disabled: "disabled",
    disablepictureinpicture: "disablePictureInPicture",
    disableremoteplayback: "disableRemotePlayback",
    download: "download",
    draggable: "draggable",
    enctype: "encType",
    enterkeyhint: "enterKeyHint",
    for: "htmlFor",
    form: "form",
    formmethod: "formMethod",
    formaction: "formAction",
    formenctype: "formEncType",
    formnovalidate: "formNoValidate",
    formtarget: "formTarget",
    frameborder: "frameBorder",
    headers: "headers",
    height: "height",
    hidden: "hidden",
    high: "high",
    href: "href",
    hreflang: "hrefLang",
    htmlfor: "htmlFor",
    httpequiv: "httpEquiv",
    "http-equiv": "httpEquiv",
    icon: "icon",
    id: "id",
    imagesizes: "imageSizes",
    imagesrcset: "imageSrcSet",
    innerhtml: "innerHTML",
    inputmode: "inputMode",
    integrity: "integrity",
    is: "is",
    itemid: "itemID",
    itemprop: "itemProp",
    itemref: "itemRef",
    itemscope: "itemScope",
    itemtype: "itemType",
    keyparams: "keyParams",
    keytype: "keyType",
    kind: "kind",
    label: "label",
    lang: "lang",
    list: "list",
    loop: "loop",
    low: "low",
    manifest: "manifest",
    marginwidth: "marginWidth",
    marginheight: "marginHeight",
    max: "max",
    maxlength: "maxLength",
    media: "media",
    mediagroup: "mediaGroup",
    method: "method",
    min: "min",
    minlength: "minLength",
    multiple: "multiple",
    muted: "muted",
    name: "name",
    nomodule: "noModule",
    nonce: "nonce",
    novalidate: "noValidate",
    open: "open",
    optimum: "optimum",
    pattern: "pattern",
    placeholder: "placeholder",
    playsinline: "playsInline",
    poster: "poster",
    preload: "preload",
    profile: "profile",
    radiogroup: "radioGroup",
    readonly: "readOnly",
    referrerpolicy: "referrerPolicy",
    rel: "rel",
    required: "required",
    reversed: "reversed",
    role: "role",
    rows: "rows",
    rowspan: "rowSpan",
    sandbox: "sandbox",
    scope: "scope",
    scoped: "scoped",
    scrolling: "scrolling",
    seamless: "seamless",
    selected: "selected",
    shape: "shape",
    size: "size",
    sizes: "sizes",
    span: "span",
    spellcheck: "spellCheck",
    src: "src",
    srcdoc: "srcDoc",
    srclang: "srcLang",
    srcset: "srcSet",
    start: "start",
    step: "step",
    style: "style",
    summary: "summary",
    tabindex: "tabIndex",
    target: "target",
    title: "title",
    type: "type",
    usemap: "useMap",
    value: "value",
    width: "width",
    wmode: "wmode",
    wrap: "wrap",
    // SVG
    about: "about",
    accentheight: "accentHeight",
    "accent-height": "accentHeight",
    accumulate: "accumulate",
    additive: "additive",
    alignmentbaseline: "alignmentBaseline",
    "alignment-baseline": "alignmentBaseline",
    allowreorder: "allowReorder",
    alphabetic: "alphabetic",
    amplitude: "amplitude",
    arabicform: "arabicForm",
    "arabic-form": "arabicForm",
    ascent: "ascent",
    attributename: "attributeName",
    attributetype: "attributeType",
    autoreverse: "autoReverse",
    azimuth: "azimuth",
    basefrequency: "baseFrequency",
    baselineshift: "baselineShift",
    "baseline-shift": "baselineShift",
    baseprofile: "baseProfile",
    bbox: "bbox",
    begin: "begin",
    bias: "bias",
    by: "by",
    calcmode: "calcMode",
    capheight: "capHeight",
    "cap-height": "capHeight",
    clip: "clip",
    clippath: "clipPath",
    "clip-path": "clipPath",
    clippathunits: "clipPathUnits",
    cliprule: "clipRule",
    "clip-rule": "clipRule",
    color: "color",
    colorinterpolation: "colorInterpolation",
    "color-interpolation": "colorInterpolation",
    colorinterpolationfilters: "colorInterpolationFilters",
    "color-interpolation-filters": "colorInterpolationFilters",
    colorprofile: "colorProfile",
    "color-profile": "colorProfile",
    colorrendering: "colorRendering",
    "color-rendering": "colorRendering",
    contentscripttype: "contentScriptType",
    contentstyletype: "contentStyleType",
    cursor: "cursor",
    cx: "cx",
    cy: "cy",
    d: "d",
    datatype: "datatype",
    decelerate: "decelerate",
    descent: "descent",
    diffuseconstant: "diffuseConstant",
    direction: "direction",
    display: "display",
    divisor: "divisor",
    dominantbaseline: "dominantBaseline",
    "dominant-baseline": "dominantBaseline",
    dur: "dur",
    dx: "dx",
    dy: "dy",
    edgemode: "edgeMode",
    elevation: "elevation",
    enablebackground: "enableBackground",
    "enable-background": "enableBackground",
    end: "end",
    exponent: "exponent",
    externalresourcesrequired: "externalResourcesRequired",
    fill: "fill",
    fillopacity: "fillOpacity",
    "fill-opacity": "fillOpacity",
    fillrule: "fillRule",
    "fill-rule": "fillRule",
    filter: "filter",
    filterres: "filterRes",
    filterunits: "filterUnits",
    floodopacity: "floodOpacity",
    "flood-opacity": "floodOpacity",
    floodcolor: "floodColor",
    "flood-color": "floodColor",
    focusable: "focusable",
    fontfamily: "fontFamily",
    "font-family": "fontFamily",
    fontsize: "fontSize",
    "font-size": "fontSize",
    fontsizeadjust: "fontSizeAdjust",
    "font-size-adjust": "fontSizeAdjust",
    fontstretch: "fontStretch",
    "font-stretch": "fontStretch",
    fontstyle: "fontStyle",
    "font-style": "fontStyle",
    fontvariant: "fontVariant",
    "font-variant": "fontVariant",
    fontweight: "fontWeight",
    "font-weight": "fontWeight",
    format: "format",
    from: "from",
    fx: "fx",
    fy: "fy",
    g1: "g1",
    g2: "g2",
    glyphname: "glyphName",
    "glyph-name": "glyphName",
    glyphorientationhorizontal: "glyphOrientationHorizontal",
    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
    glyphorientationvertical: "glyphOrientationVertical",
    "glyph-orientation-vertical": "glyphOrientationVertical",
    glyphref: "glyphRef",
    gradienttransform: "gradientTransform",
    gradientunits: "gradientUnits",
    hanging: "hanging",
    horizadvx: "horizAdvX",
    "horiz-adv-x": "horizAdvX",
    horizoriginx: "horizOriginX",
    "horiz-origin-x": "horizOriginX",
    ideographic: "ideographic",
    imagerendering: "imageRendering",
    "image-rendering": "imageRendering",
    in2: "in2",
    in: "in",
    inlist: "inlist",
    intercept: "intercept",
    k1: "k1",
    k2: "k2",
    k3: "k3",
    k4: "k4",
    k: "k",
    kernelmatrix: "kernelMatrix",
    kernelunitlength: "kernelUnitLength",
    kerning: "kerning",
    keypoints: "keyPoints",
    keysplines: "keySplines",
    keytimes: "keyTimes",
    lengthadjust: "lengthAdjust",
    letterspacing: "letterSpacing",
    "letter-spacing": "letterSpacing",
    lightingcolor: "lightingColor",
    "lighting-color": "lightingColor",
    limitingconeangle: "limitingConeAngle",
    local: "local",
    markerend: "markerEnd",
    "marker-end": "markerEnd",
    markerheight: "markerHeight",
    markermid: "markerMid",
    "marker-mid": "markerMid",
    markerstart: "markerStart",
    "marker-start": "markerStart",
    markerunits: "markerUnits",
    markerwidth: "markerWidth",
    mask: "mask",
    maskcontentunits: "maskContentUnits",
    maskunits: "maskUnits",
    mathematical: "mathematical",
    mode: "mode",
    numoctaves: "numOctaves",
    offset: "offset",
    opacity: "opacity",
    operator: "operator",
    order: "order",
    orient: "orient",
    orientation: "orientation",
    origin: "origin",
    overflow: "overflow",
    overlineposition: "overlinePosition",
    "overline-position": "overlinePosition",
    overlinethickness: "overlineThickness",
    "overline-thickness": "overlineThickness",
    paintorder: "paintOrder",
    "paint-order": "paintOrder",
    panose1: "panose1",
    "panose-1": "panose1",
    pathlength: "pathLength",
    patterncontentunits: "patternContentUnits",
    patterntransform: "patternTransform",
    patternunits: "patternUnits",
    pointerevents: "pointerEvents",
    "pointer-events": "pointerEvents",
    points: "points",
    pointsatx: "pointsAtX",
    pointsaty: "pointsAtY",
    pointsatz: "pointsAtZ",
    prefix: "prefix",
    preservealpha: "preserveAlpha",
    preserveaspectratio: "preserveAspectRatio",
    primitiveunits: "primitiveUnits",
    property: "property",
    r: "r",
    radius: "radius",
    refx: "refX",
    refy: "refY",
    renderingintent: "renderingIntent",
    "rendering-intent": "renderingIntent",
    repeatcount: "repeatCount",
    repeatdur: "repeatDur",
    requiredextensions: "requiredExtensions",
    requiredfeatures: "requiredFeatures",
    resource: "resource",
    restart: "restart",
    result: "result",
    results: "results",
    rotate: "rotate",
    rx: "rx",
    ry: "ry",
    scale: "scale",
    security: "security",
    seed: "seed",
    shaperendering: "shapeRendering",
    "shape-rendering": "shapeRendering",
    slope: "slope",
    spacing: "spacing",
    specularconstant: "specularConstant",
    specularexponent: "specularExponent",
    speed: "speed",
    spreadmethod: "spreadMethod",
    startoffset: "startOffset",
    stddeviation: "stdDeviation",
    stemh: "stemh",
    stemv: "stemv",
    stitchtiles: "stitchTiles",
    stopcolor: "stopColor",
    "stop-color": "stopColor",
    stopopacity: "stopOpacity",
    "stop-opacity": "stopOpacity",
    strikethroughposition: "strikethroughPosition",
    "strikethrough-position": "strikethroughPosition",
    strikethroughthickness: "strikethroughThickness",
    "strikethrough-thickness": "strikethroughThickness",
    string: "string",
    stroke: "stroke",
    strokedasharray: "strokeDasharray",
    "stroke-dasharray": "strokeDasharray",
    strokedashoffset: "strokeDashoffset",
    "stroke-dashoffset": "strokeDashoffset",
    strokelinecap: "strokeLinecap",
    "stroke-linecap": "strokeLinecap",
    strokelinejoin: "strokeLinejoin",
    "stroke-linejoin": "strokeLinejoin",
    strokemiterlimit: "strokeMiterlimit",
    "stroke-miterlimit": "strokeMiterlimit",
    strokewidth: "strokeWidth",
    "stroke-width": "strokeWidth",
    strokeopacity: "strokeOpacity",
    "stroke-opacity": "strokeOpacity",
    suppresscontenteditablewarning: "suppressContentEditableWarning",
    suppresshydrationwarning: "suppressHydrationWarning",
    surfacescale: "surfaceScale",
    systemlanguage: "systemLanguage",
    tablevalues: "tableValues",
    targetx: "targetX",
    targety: "targetY",
    textanchor: "textAnchor",
    "text-anchor": "textAnchor",
    textdecoration: "textDecoration",
    "text-decoration": "textDecoration",
    textlength: "textLength",
    textrendering: "textRendering",
    "text-rendering": "textRendering",
    to: "to",
    transform: "transform",
    typeof: "typeof",
    u1: "u1",
    u2: "u2",
    underlineposition: "underlinePosition",
    "underline-position": "underlinePosition",
    underlinethickness: "underlineThickness",
    "underline-thickness": "underlineThickness",
    unicode: "unicode",
    unicodebidi: "unicodeBidi",
    "unicode-bidi": "unicodeBidi",
    unicoderange: "unicodeRange",
    "unicode-range": "unicodeRange",
    unitsperem: "unitsPerEm",
    "units-per-em": "unitsPerEm",
    unselectable: "unselectable",
    valphabetic: "vAlphabetic",
    "v-alphabetic": "vAlphabetic",
    values: "values",
    vectoreffect: "vectorEffect",
    "vector-effect": "vectorEffect",
    version: "version",
    vertadvy: "vertAdvY",
    "vert-adv-y": "vertAdvY",
    vertoriginx: "vertOriginX",
    "vert-origin-x": "vertOriginX",
    vertoriginy: "vertOriginY",
    "vert-origin-y": "vertOriginY",
    vhanging: "vHanging",
    "v-hanging": "vHanging",
    videographic: "vIdeographic",
    "v-ideographic": "vIdeographic",
    viewbox: "viewBox",
    viewtarget: "viewTarget",
    visibility: "visibility",
    vmathematical: "vMathematical",
    "v-mathematical": "vMathematical",
    vocab: "vocab",
    widths: "widths",
    wordspacing: "wordSpacing",
    "word-spacing": "wordSpacing",
    writingmode: "writingMode",
    "writing-mode": "writingMode",
    x1: "x1",
    x2: "x2",
    x: "x",
    xchannelselector: "xChannelSelector",
    xheight: "xHeight",
    "x-height": "xHeight",
    xlinkactuate: "xlinkActuate",
    "xlink:actuate": "xlinkActuate",
    xlinkarcrole: "xlinkArcrole",
    "xlink:arcrole": "xlinkArcrole",
    xlinkhref: "xlinkHref",
    "xlink:href": "xlinkHref",
    xlinkrole: "xlinkRole",
    "xlink:role": "xlinkRole",
    xlinkshow: "xlinkShow",
    "xlink:show": "xlinkShow",
    xlinktitle: "xlinkTitle",
    "xlink:title": "xlinkTitle",
    xlinktype: "xlinkType",
    "xlink:type": "xlinkType",
    xmlbase: "xmlBase",
    "xml:base": "xmlBase",
    xmllang: "xmlLang",
    "xml:lang": "xmlLang",
    xmlns: "xmlns",
    "xml:space": "xmlSpace",
    xmlnsxlink: "xmlnsXlink",
    "xmlns:xlink": "xmlnsXlink",
    xmlspace: "xmlSpace",
    y1: "y1",
    y2: "y2",
    y: "y",
    ychannelselector: "yChannelSelector",
    z: "z",
    zoomandpan: "zoomAndPan"
  }, bh = {
    "aria-current": 0,
    // state
    "aria-description": 0,
    "aria-details": 0,
    "aria-disabled": 0,
    // state
    "aria-hidden": 0,
    // state
    "aria-invalid": 0,
    // state
    "aria-keyshortcuts": 0,
    "aria-label": 0,
    "aria-roledescription": 0,
    // Widget Attributes
    "aria-autocomplete": 0,
    "aria-checked": 0,
    "aria-expanded": 0,
    "aria-haspopup": 0,
    "aria-level": 0,
    "aria-modal": 0,
    "aria-multiline": 0,
    "aria-multiselectable": 0,
    "aria-orientation": 0,
    "aria-placeholder": 0,
    "aria-pressed": 0,
    "aria-readonly": 0,
    "aria-required": 0,
    "aria-selected": 0,
    "aria-sort": 0,
    "aria-valuemax": 0,
    "aria-valuemin": 0,
    "aria-valuenow": 0,
    "aria-valuetext": 0,
    // Live Region Attributes
    "aria-atomic": 0,
    "aria-busy": 0,
    "aria-live": 0,
    "aria-relevant": 0,
    // Drag-and-Drop Attributes
    "aria-dropeffect": 0,
    "aria-grabbed": 0,
    // Relationship Attributes
    "aria-activedescendant": 0,
    "aria-colcount": 0,
    "aria-colindex": 0,
    "aria-colspan": 0,
    "aria-controls": 0,
    "aria-describedby": 0,
    "aria-errormessage": 0,
    "aria-flowto": 0,
    "aria-labelledby": 0,
    "aria-owns": 0,
    "aria-posinset": 0,
    "aria-rowcount": 0,
    "aria-rowindex": 0,
    "aria-rowspan": 0,
    "aria-setsize": 0
  }, Ii = {}, IS = new RegExp("^(aria)-[" + q + "]*$"), JS = new RegExp("^(aria)[A-Z][" + q + "]*$");
  function ZS(e, t) {
    {
      if (en.call(Ii, t) && Ii[t])
        return !0;
      if (JS.test(t)) {
        var n = "aria-" + t.slice(4).toLowerCase(), a = bh.hasOwnProperty(n) ? n : null;
        if (a == null)
          return d("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ii[t] = !0, !0;
        if (t !== a)
          return d("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), Ii[t] = !0, !0;
      }
      if (IS.test(t)) {
        var r = t.toLowerCase(), i = bh.hasOwnProperty(r) ? r : null;
        if (i == null)
          return Ii[t] = !0, !1;
        if (t !== i)
          return d("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, i), Ii[t] = !0, !0;
      }
    }
    return !0;
  }
  function eC(e, t) {
    {
      var n = [];
      for (var a in t) {
        var r = ZS(e, a);
        r || n.push(a);
      }
      var i = n.map(function (u) {
        return "`" + u + "`";
      }).join(", ");
      n.length === 1 ? d("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", i, e) : n.length > 1 && d("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", i, e);
    }
  }
  function tC(e, t) {
    vi(e, t) || eC(e, t);
  }
  var Sh = !1;
  function nC(e, t) {
    {
      if (e !== "input" && e !== "textarea" && e !== "select")
        return;
      t != null && t.value === null && !Sh && (Sh = !0, e === "select" && t.multiple ? d("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : d("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
    }
  }
  var Ch = function () {
  };
  {
    var dn = {}, Eh = /^on./, aC = /^on[^A-Z]/, rC = new RegExp("^(aria)-[" + q + "]*$"), iC = new RegExp("^(aria)[A-Z][" + q + "]*$");
    Ch = function (e, t, n, a) {
      if (en.call(dn, t) && dn[t])
        return !0;
      var r = t.toLowerCase();
      if (r === "onfocusin" || r === "onfocusout")
        return d("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), dn[t] = !0, !0;
      if (a != null) {
        var i = a.registrationNameDependencies, u = a.possibleRegistrationNames;
        if (i.hasOwnProperty(t))
          return !0;
        var o = u.hasOwnProperty(r) ? u[r] : null;
        if (o != null)
          return d("Invalid event handler property `%s`. Did you mean `%s`?", t, o), dn[t] = !0, !0;
        if (Eh.test(t))
          return d("Unknown event handler property `%s`. It will be ignored.", t), dn[t] = !0, !0;
      } else if (Eh.test(t))
        return aC.test(t) && d("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), dn[t] = !0, !0;
      if (rC.test(t) || iC.test(t))
        return !0;
      if (r === "innerhtml")
        return d("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), dn[t] = !0, !0;
      if (r === "aria")
        return d("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), dn[t] = !0, !0;
      if (r === "is" && n !== null && n !== void 0 && typeof n != "string")
        return d("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), dn[t] = !0, !0;
      if (typeof n == "number" && isNaN(n))
        return d("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), dn[t] = !0, !0;
      var l = jn(t), c = l !== null && l.type === ea;
      if (Jl.hasOwnProperty(r)) {
        var f = Jl[r];
        if (f !== t)
          return d("Invalid DOM property `%s`. Did you mean `%s`?", t, f), dn[t] = !0, !0;
      } else if (!c && t !== r)
        return d("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, r), dn[t] = !0, !0;
      return typeof n == "boolean" && Tn(t, n, l, !1) ? (n ? d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), dn[t] = !0, !0) : c ? !0 : Tn(t, n, l, !1) ? (dn[t] = !0, !1) : ((n === "false" || n === "true") && l !== null && l.type === dt && (d("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), dn[t] = !0), !0);
    };
  }
  var uC = function (e, t, n) {
    {
      var a = [];
      for (var r in t) {
        var i = Ch(e, r, t[r], n);
        i || a.push(r);
      }
      var u = a.map(function (o) {
        return "`" + o + "`";
      }).join(", ");
      a.length === 1 ? d("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", u, e) : a.length > 1 && d("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", u, e);
    }
  };
  function oC(e, t, n) {
    vi(e, t) || uC(e, t, n);
  }
  var Rh = 1, pf = 2, oo = 4, lC = Rh | pf | oo, lo = null;
  function sC(e) {
    lo !== null && d("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), lo = e;
  }
  function cC() {
    lo === null && d("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), lo = null;
  }
  function fC(e) {
    return e === lo;
  }
  function hf(e) {
    var t = e.target || e.srcElement || window;
    return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ir ? t.parentNode : t;
  }
  var mf = null, Ji = null, Zi = null;
  function Th(e) {
    var t = $r(e);
    if (t) {
      if (typeof mf != "function")
        throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.stateNode;
      if (n) {
        var a = Ns(n);
        mf(t.stateNode, t.type, a);
      }
    }
  }
  function dC(e) {
    mf = e;
  }
  function xh(e) {
    Ji ? Zi ? Zi.push(e) : Zi = [e] : Ji = e;
  }
  function vC() {
    return Ji !== null || Zi !== null;
  }
  function Dh() {
    if (Ji) {
      var e = Ji, t = Zi;
      if (Ji = null, Zi = null, Th(e), t)
        for (var n = 0; n < t.length; n++)
          Th(t[n]);
    }
  }
  var _h = function (e, t) {
    return e(t);
  }, Oh = function () {
  }, yf = !1;
  function pC() {
    var e = vC();
    e && (Oh(), Dh());
  }
  function wh(e, t, n) {
    if (yf)
      return e(t, n);
    yf = !0;
    try {
      return _h(e, t, n);
    } finally {
      yf = !1, pC();
    }
  }
  function hC(e, t, n) {
    _h = e, Oh = n;
  }
  function mC(e) {
    return e === "button" || e === "input" || e === "select" || e === "textarea";
  }
  function yC(e, t, n) {
    switch (e) {
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
        return !!(n.disabled && mC(t));
      default:
        return !1;
    }
  }
  function so(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var a = Ns(n);
    if (a === null)
      return null;
    var r = a[t];
    if (yC(t, e.type, a))
      return null;
    if (r && typeof r != "function")
      throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof r + "` type.");
    return r;
  }
  var gf = !1;
  if (mt)
    try {
      var co = {};
      Object.defineProperty(co, "passive", {
        get: function () {
          gf = !0;
        }
      }), window.addEventListener("test", co, co), window.removeEventListener("test", co, co);
    } catch {
      gf = !1;
    }
  function Mh(e, t, n, a, r, i, u, o, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, c);
    } catch (f) {
      this.onError(f);
    }
  }
  var Lh = Mh;
  if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
    var bf = document.createElement("react");
    Lh = function (t, n, a, r, i, u, o, l, c) {
      if (typeof document > "u" || document === null)
        throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
      var f = document.createEvent("Event"), m = !1, h = !0, b = window.event, C = Object.getOwnPropertyDescriptor(window, "event");
      function R() {
        bf.removeEventListener(T, Q, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = b);
      }
      var N = Array.prototype.slice.call(arguments, 3);
      function Q() {
        m = !0, R(), n.apply(a, N), h = !1;
      }
      var P, Ce = !1, me = !1;
      function y(g) {
        if (P = g.error, Ce = !0, P === null && g.colno === 0 && g.lineno === 0 && (me = !0), g.defaultPrevented && P != null && typeof P == "object")
          try {
            P._suppressLogging = !0;
          } catch {
          }
      }
      var T = "react-" + (t || "invokeguardedcallback");
      if (window.addEventListener("error", y), bf.addEventListener(T, Q, !1), f.initEvent(T, !1, !1), bf.dispatchEvent(f), C && Object.defineProperty(window, "event", C), m && h && (Ce ? me && (P = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : P = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(P)), window.removeEventListener("error", y), !m)
        return R(), Mh.apply(this, arguments);
    };
  }
  var gC = Lh, eu = !1, Zl = null, es = !1, Sf = null, bC = {
    onError: function (e) {
      eu = !0, Zl = e;
    }
  };
  function Cf(e, t, n, a, r, i, u, o, l) {
    eu = !1, Zl = null, gC.apply(bC, arguments);
  }
  function SC(e, t, n, a, r, i, u, o, l) {
    if (Cf.apply(this, arguments), eu) {
      var c = Ef();
      es || (es = !0, Sf = c);
    }
  }
  function CC() {
    if (es) {
      var e = Sf;
      throw es = !1, Sf = null, e;
    }
  }
  function EC() {
    return eu;
  }
  function Ef() {
    if (eu) {
      var e = Zl;
      return eu = !1, Zl = null, e;
    } else
      throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
  }
  function tu(e) {
    return e._reactInternals;
  }
  function RC(e) {
    return e._reactInternals !== void 0;
  }
  function TC(e, t) {
    e._reactInternals = t;
  }
  var J = (
    /*                      */
    0
  ), nu = (
    /*                */
    1
  ), gt = (
    /*                    */
    2
  ), Re = (
    /*                       */
    4
  ), pi = (
    /*                */
    16
  ), fo = (
    /*                 */
    32
  ), Rf = (
    /*                     */
    64
  ), Le = (
    /*                   */
    128
  ), or = (
    /*            */
    256
  ), zr = (
    /*                          */
    512
  ), hi = (
    /*                     */
    1024
  ), ga = (
    /*                      */
    2048
  ), lr = (
    /*                    */
    4096
  ), mi = (
    /*                   */
    8192
  ), ts = (
    /*             */
    16384
  ), xC = ga | Re | Rf | zr | hi | ts, DC = (
    /*               */
    32767
  ), vo = (
    /*                   */
    32768
  ), vn = (
    /*                */
    65536
  ), Tf = (
    /* */
    131072
  ), Ah = (
    /*                       */
    1048576
  ), xf = (
    /*                    */
    2097152
  ), yi = (
    /*                 */
    4194304
  ), Df = (
    /*                */
    8388608
  ), sr = (
    /*               */
    16777216
  ), ns = (
    /*              */
    33554432
  ), _f = (
    // TODO: Remove Update flag from before mutation phase by re-landing Visibility
    // flag logic (see #20043)
    Re | hi | 0
  ), Of = gt | Re | pi | fo | zr | lr | mi, po = Re | Rf | zr | mi, au = ga | pi, cr = yi | Df | xf, _C = fe.ReactCurrentOwner;
  function gi(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return;)
        t = t.return;
    else {
      var a = t;
      do
        t = a, (t.flags & (gt | lr)) !== J && (n = t.return), a = t.return;
      while (a);
    }
    return t.tag === B ? n : null;
  }
  function Uh(e) {
    if (e.tag === ue) {
      var t = e.memoizedState;
      if (t === null) {
        var n = e.alternate;
        n !== null && (t = n.memoizedState);
      }
      if (t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function kh(e) {
    return e.tag === B ? e.stateNode.containerInfo : null;
  }
  function OC(e) {
    return gi(e) === e;
  }
  function wC(e) {
    {
      var t = _C.current;
      if (t !== null && t.tag === G) {
        var n = t, a = n.stateNode;
        a._warnedAboutRefsInRender || d("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", oe(n) || "A component"), a._warnedAboutRefsInRender = !0;
      }
    }
    var r = tu(e);
    return r ? gi(r) === r : !1;
  }
  function Nh(e) {
    if (gi(e) !== e)
      throw new Error("Unable to find node on an unmounted component.");
  }
  function zh(e) {
    var t = e.alternate;
    if (!t) {
      var n = gi(e);
      if (n === null)
        throw new Error("Unable to find node on an unmounted component.");
      return n !== e ? null : e;
    }
    for (var a = e, r = t; ;) {
      var i = a.return;
      if (i === null)
        break;
      var u = i.alternate;
      if (u === null) {
        var o = i.return;
        if (o !== null) {
          a = r = o;
          continue;
        }
        break;
      }
      if (i.child === u.child) {
        for (var l = i.child; l;) {
          if (l === a)
            return Nh(i), e;
          if (l === r)
            return Nh(i), t;
          l = l.sibling;
        }
        throw new Error("Unable to find node on an unmounted component.");
      }
      if (a.return !== r.return)
        a = i, r = u;
      else {
        for (var c = !1, f = i.child; f;) {
          if (f === a) {
            c = !0, a = i, r = u;
            break;
          }
          if (f === r) {
            c = !0, r = i, a = u;
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = u.child; f;) {
            if (f === a) {
              c = !0, a = u, r = i;
              break;
            }
            if (f === r) {
              c = !0, r = u, a = i;
              break;
            }
            f = f.sibling;
          }
          if (!c)
            throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (a.alternate !== r)
        throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (a.tag !== B)
      throw new Error("Unable to find node on an unmounted component.");
    return a.stateNode.current === a ? e : t;
  }
  function Hh(e) {
    var t = zh(e);
    return t !== null ? jh(t) : null;
  }
  function jh(e) {
    if (e.tag === V || e.tag === ie)
      return e;
    for (var t = e.child; t !== null;) {
      var n = jh(t);
      if (n !== null)
        return n;
      t = t.sibling;
    }
    return null;
  }
  function MC(e) {
    var t = zh(e);
    return t !== null ? Fh(t) : null;
  }
  function Fh(e) {
    if (e.tag === V || e.tag === ie)
      return e;
    for (var t = e.child; t !== null;) {
      if (t.tag !== W) {
        var n = Fh(t);
        if (n !== null)
          return n;
      }
      t = t.sibling;
    }
    return null;
  }
  var Vh = M.unstable_scheduleCallback, LC = M.unstable_cancelCallback, AC = M.unstable_shouldYield, UC = M.unstable_requestPaint, Ht = M.unstable_now, kC = M.unstable_getCurrentPriorityLevel, as = M.unstable_ImmediatePriority, wf = M.unstable_UserBlockingPriority, bi = M.unstable_NormalPriority, NC = M.unstable_LowPriority, Mf = M.unstable_IdlePriority, zC = M.unstable_yieldValue, HC = M.unstable_setDisableYieldValue, ru = null, rn = null, H = null, ja = !1, ba = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
  function jC(e) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
      return !1;
    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (t.isDisabled)
      return !0;
    if (!t.supportsFiber)
      return d("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
    try {
      Ua && (e = he({}, e, {
        getLaneLabelMap: PC,
        injectProfilingHooks: $C
      })), ru = t.inject(e), rn = t;
    } catch (n) {
      d("React instrumentation encountered an error: %s.", n);
    }
    return !!t.checkDCE;
  }
  function FC(e, t) {
    if (rn && typeof rn.onScheduleFiberRoot == "function")
      try {
        rn.onScheduleFiberRoot(ru, e, t);
      } catch (n) {
        ja || (ja = !0, d("React instrumentation encountered an error: %s", n));
      }
  }
  function VC(e, t) {
    if (rn && typeof rn.onCommitFiberRoot == "function")
      try {
        var n = (e.current.flags & Le) === Le;
        if (da) {
          var a;
          switch (t) {
            case $n:
              a = as;
              break;
            case dr:
              a = wf;
              break;
            case vr:
              a = bi;
              break;
            case cs:
              a = Mf;
              break;
            default:
              a = bi;
              break;
          }
          rn.onCommitFiberRoot(ru, e, a, n);
        }
      } catch (r) {
        ja || (ja = !0, d("React instrumentation encountered an error: %s", r));
      }
  }
  function BC(e) {
    if (rn && typeof rn.onPostCommitFiberRoot == "function")
      try {
        rn.onPostCommitFiberRoot(ru, e);
      } catch (t) {
        ja || (ja = !0, d("React instrumentation encountered an error: %s", t));
      }
  }
  function YC(e) {
    if (rn && typeof rn.onCommitFiberUnmount == "function")
      try {
        rn.onCommitFiberUnmount(ru, e);
      } catch (t) {
        ja || (ja = !0, d("React instrumentation encountered an error: %s", t));
      }
  }
  function jt(e) {
    if (typeof zC == "function" && (HC(e), Zt(e)), rn && typeof rn.setStrictMode == "function")
      try {
        rn.setStrictMode(ru, e);
      } catch (t) {
        ja || (ja = !0, d("React instrumentation encountered an error: %s", t));
      }
  }
  function $C(e) {
    H = e;
  }
  function PC() {
    {
      for (var e = /* @__PURE__ */ new Map(), t = 1, n = 0; n < Af; n++) {
        var a = cE(t);
        e.set(t, a), t *= 2;
      }
      return e;
    }
  }
  function GC(e) {
    H !== null && typeof H.markCommitStarted == "function" && H.markCommitStarted(e);
  }
  function Bh() {
    H !== null && typeof H.markCommitStopped == "function" && H.markCommitStopped();
  }
  function ho(e) {
    H !== null && typeof H.markComponentRenderStarted == "function" && H.markComponentRenderStarted(e);
  }
  function iu() {
    H !== null && typeof H.markComponentRenderStopped == "function" && H.markComponentRenderStopped();
  }
  function qC(e) {
    H !== null && typeof H.markComponentPassiveEffectMountStarted == "function" && H.markComponentPassiveEffectMountStarted(e);
  }
  function QC() {
    H !== null && typeof H.markComponentPassiveEffectMountStopped == "function" && H.markComponentPassiveEffectMountStopped();
  }
  function WC(e) {
    H !== null && typeof H.markComponentPassiveEffectUnmountStarted == "function" && H.markComponentPassiveEffectUnmountStarted(e);
  }
  function XC() {
    H !== null && typeof H.markComponentPassiveEffectUnmountStopped == "function" && H.markComponentPassiveEffectUnmountStopped();
  }
  function KC(e) {
    H !== null && typeof H.markComponentLayoutEffectMountStarted == "function" && H.markComponentLayoutEffectMountStarted(e);
  }
  function IC() {
    H !== null && typeof H.markComponentLayoutEffectMountStopped == "function" && H.markComponentLayoutEffectMountStopped();
  }
  function Yh(e) {
    H !== null && typeof H.markComponentLayoutEffectUnmountStarted == "function" && H.markComponentLayoutEffectUnmountStarted(e);
  }
  function $h() {
    H !== null && typeof H.markComponentLayoutEffectUnmountStopped == "function" && H.markComponentLayoutEffectUnmountStopped();
  }
  function JC(e, t, n) {
    H !== null && typeof H.markComponentErrored == "function" && H.markComponentErrored(e, t, n);
  }
  function ZC(e, t, n) {
    H !== null && typeof H.markComponentSuspended == "function" && H.markComponentSuspended(e, t, n);
  }
  function eE(e) {
    H !== null && typeof H.markLayoutEffectsStarted == "function" && H.markLayoutEffectsStarted(e);
  }
  function tE() {
    H !== null && typeof H.markLayoutEffectsStopped == "function" && H.markLayoutEffectsStopped();
  }
  function nE(e) {
    H !== null && typeof H.markPassiveEffectsStarted == "function" && H.markPassiveEffectsStarted(e);
  }
  function aE() {
    H !== null && typeof H.markPassiveEffectsStopped == "function" && H.markPassiveEffectsStopped();
  }
  function Ph(e) {
    H !== null && typeof H.markRenderStarted == "function" && H.markRenderStarted(e);
  }
  function rE() {
    H !== null && typeof H.markRenderYielded == "function" && H.markRenderYielded();
  }
  function Gh() {
    H !== null && typeof H.markRenderStopped == "function" && H.markRenderStopped();
  }
  function iE(e) {
    H !== null && typeof H.markRenderScheduled == "function" && H.markRenderScheduled(e);
  }
  function uE(e, t) {
    H !== null && typeof H.markForceUpdateScheduled == "function" && H.markForceUpdateScheduled(e, t);
  }
  function Lf(e, t) {
    H !== null && typeof H.markStateUpdateScheduled == "function" && H.markStateUpdateScheduled(e, t);
  }
  var X = (
    /*                         */
    0
  ), be = (
    /*                 */
    1
  ), je = (
    /*                    */
    2
  ), ot = (
    /*               */
    8
  ), Fa = (
    /*              */
    16
  ), qh = Math.clz32 ? Math.clz32 : sE, oE = Math.log, lE = Math.LN2;
  function sE(e) {
    var t = e >>> 0;
    return t === 0 ? 32 : 31 - (oE(t) / lE | 0) | 0;
  }
  var Af = 31, D = (
    /*                        */
    0
  ), Ft = (
    /*                          */
    0
  ), ne = (
    /*                        */
    1
  ), uu = (
    /*    */
    2
  ), fr = (
    /*             */
    4
  ), Si = (
    /*            */
    8
  ), Va = (
    /*                     */
    16
  ), mo = (
    /*                */
    32
  ), ou = (
    /*                       */
    4194240
  ), yo = (
    /*                        */
    64
  ), Uf = (
    /*                        */
    128
  ), kf = (
    /*                        */
    256
  ), Nf = (
    /*                        */
    512
  ), zf = (
    /*                        */
    1024
  ), Hf = (
    /*                        */
    2048
  ), jf = (
    /*                        */
    4096
  ), Ff = (
    /*                        */
    8192
  ), Vf = (
    /*                        */
    16384
  ), Bf = (
    /*                       */
    32768
  ), Yf = (
    /*                       */
    65536
  ), $f = (
    /*                       */
    131072
  ), Pf = (
    /*                       */
    262144
  ), Gf = (
    /*                       */
    524288
  ), qf = (
    /*                       */
    1048576
  ), Qf = (
    /*                       */
    2097152
  ), rs = (
    /*                            */
    130023424
  ), lu = (
    /*                             */
    4194304
  ), Wf = (
    /*                             */
    8388608
  ), Xf = (
    /*                             */
    16777216
  ), Kf = (
    /*                             */
    33554432
  ), If = (
    /*                             */
    67108864
  ), Qh = lu, go = (
    /*          */
    134217728
  ), Wh = (
    /*                          */
    268435455
  ), bo = (
    /*               */
    268435456
  ), Ci = (
    /*                        */
    536870912
  ), Bn = (
    /*                   */
    1073741824
  );
  function cE(e) {
    {
      if (e & ne)
        return "Sync";
      if (e & uu)
        return "InputContinuousHydration";
      if (e & fr)
        return "InputContinuous";
      if (e & Si)
        return "DefaultHydration";
      if (e & Va)
        return "Default";
      if (e & mo)
        return "TransitionHydration";
      if (e & ou)
        return "Transition";
      if (e & rs)
        return "Retry";
      if (e & go)
        return "SelectiveHydration";
      if (e & bo)
        return "IdleHydration";
      if (e & Ci)
        return "Idle";
      if (e & Bn)
        return "Offscreen";
    }
  }
  var Xe = -1, is = yo, us = lu;
  function So(e) {
    switch (Ei(e)) {
      case ne:
        return ne;
      case uu:
        return uu;
      case fr:
        return fr;
      case Si:
        return Si;
      case Va:
        return Va;
      case mo:
        return mo;
      case yo:
      case Uf:
      case kf:
      case Nf:
      case zf:
      case Hf:
      case jf:
      case Ff:
      case Vf:
      case Bf:
      case Yf:
      case $f:
      case Pf:
      case Gf:
      case qf:
      case Qf:
        return e & ou;
      case lu:
      case Wf:
      case Xf:
      case Kf:
      case If:
        return e & rs;
      case go:
        return go;
      case bo:
        return bo;
      case Ci:
        return Ci;
      case Bn:
        return Bn;
      default:
        return d("Should have found matching lanes. This is a bug in React."), e;
    }
  }
  function os(e, t) {
    var n = e.pendingLanes;
    if (n === D)
      return D;
    var a = D, r = e.suspendedLanes, i = e.pingedLanes, u = n & Wh;
    if (u !== D) {
      var o = u & ~r;
      if (o !== D)
        a = So(o);
      else {
        var l = u & i;
        l !== D && (a = So(l));
      }
    } else {
      var c = n & ~r;
      c !== D ? a = So(c) : i !== D && (a = So(i));
    }
    if (a === D)
      return D;
    if (t !== D && t !== a && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & r) === D) {
      var f = Ei(a), m = Ei(t);
      if (
        // Tests whether the next lane is equal or lower priority than the wip
        // one. This works because the bits decrease in priority as you go left.
        f >= m || // Default priority updates should not interrupt transition updates. The
        // only difference between default updates and transition updates is that
        // default updates do not support refresh transitions.
        f === Va && (m & ou) !== D
      )
        return t;
    }
    (a & fr) !== D && (a |= n & Va);
    var h = e.entangledLanes;
    if (h !== D)
      for (var b = e.entanglements, C = a & h; C > 0;) {
        var R = Ri(C), N = 1 << R;
        a |= b[R], C &= ~N;
      }
    return a;
  }
  function fE(e, t) {
    for (var n = e.eventTimes, a = Xe; t > 0;) {
      var r = Ri(t), i = 1 << r, u = n[r];
      u > a && (a = u), t &= ~i;
    }
    return a;
  }
  function dE(e, t) {
    switch (e) {
      case ne:
      case uu:
      case fr:
        return t + 250;
      case Si:
      case Va:
      case mo:
      case yo:
      case Uf:
      case kf:
      case Nf:
      case zf:
      case Hf:
      case jf:
      case Ff:
      case Vf:
      case Bf:
      case Yf:
      case $f:
      case Pf:
      case Gf:
      case qf:
      case Qf:
        return t + 5e3;
      case lu:
      case Wf:
      case Xf:
      case Kf:
      case If:
        return Xe;
      case go:
      case bo:
      case Ci:
      case Bn:
        return Xe;
      default:
        return d("Should have found matching lanes. This is a bug in React."), Xe;
    }
  }
  function vE(e, t) {
    for (var n = e.pendingLanes, a = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, u = n; u > 0;) {
      var o = Ri(u), l = 1 << o, c = i[o];
      c === Xe ? ((l & a) === D || (l & r) !== D) && (i[o] = dE(l, t)) : c <= t && (e.expiredLanes |= l), u &= ~l;
    }
  }
  function pE(e) {
    return So(e.pendingLanes);
  }
  function Jf(e) {
    var t = e.pendingLanes & ~Bn;
    return t !== D ? t : t & Bn ? Bn : D;
  }
  function hE(e) {
    return (e & ne) !== D;
  }
  function Zf(e) {
    return (e & Wh) !== D;
  }
  function Xh(e) {
    return (e & rs) === e;
  }
  function mE(e) {
    var t = ne | fr | Va;
    return (e & t) === D;
  }
  function yE(e) {
    return (e & ou) === e;
  }
  function ls(e, t) {
    var n = uu | fr | Si | Va;
    return (t & n) !== D;
  }
  function gE(e, t) {
    return (t & e.expiredLanes) !== D;
  }
  function Kh(e) {
    return (e & ou) !== D;
  }
  function Ih() {
    var e = is;
    return is <<= 1, (is & ou) === D && (is = yo), e;
  }
  function bE() {
    var e = us;
    return us <<= 1, (us & rs) === D && (us = lu), e;
  }
  function Ei(e) {
    return e & -e;
  }
  function Co(e) {
    return Ei(e);
  }
  function Ri(e) {
    return 31 - qh(e);
  }
  function ed(e) {
    return Ri(e);
  }
  function Yn(e, t) {
    return (e & t) !== D;
  }
  function su(e, t) {
    return (e & t) === t;
  }
  function ce(e, t) {
    return e | t;
  }
  function ss(e, t) {
    return e & ~t;
  }
  function Jh(e, t) {
    return e & t;
  }
  function uw(e) {
    return e;
  }
  function SE(e, t) {
    return e !== Ft && e < t ? e : t;
  }
  function td(e) {
    for (var t = [], n = 0; n < Af; n++)
      t.push(e);
    return t;
  }
  function Eo(e, t, n) {
    e.pendingLanes |= t, t !== Ci && (e.suspendedLanes = D, e.pingedLanes = D);
    var a = e.eventTimes, r = ed(t);
    a[r] = n;
  }
  function CE(e, t) {
    e.suspendedLanes |= t, e.pingedLanes &= ~t;
    for (var n = e.expirationTimes, a = t; a > 0;) {
      var r = Ri(a), i = 1 << r;
      n[r] = Xe, a &= ~i;
    }
  }
  function Zh(e, t, n) {
    e.pingedLanes |= e.suspendedLanes & t;
  }
  function EE(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = D, e.pingedLanes = D, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
    for (var a = e.entanglements, r = e.eventTimes, i = e.expirationTimes, u = n; u > 0;) {
      var o = Ri(u), l = 1 << o;
      a[o] = D, r[o] = Xe, i[o] = Xe, u &= ~l;
    }
  }
  function nd(e, t) {
    for (var n = e.entangledLanes |= t, a = e.entanglements, r = n; r;) {
      var i = Ri(r), u = 1 << i;
      // Is this one of the newly entangled lanes?
      u & t | // Is this lane transitively entangled with the newly entangled lanes?
        a[i] & t && (a[i] |= t), r &= ~u;
    }
  }
  function RE(e, t) {
    var n = Ei(t), a;
    switch (n) {
      case fr:
        a = uu;
        break;
      case Va:
        a = Si;
        break;
      case yo:
      case Uf:
      case kf:
      case Nf:
      case zf:
      case Hf:
      case jf:
      case Ff:
      case Vf:
      case Bf:
      case Yf:
      case $f:
      case Pf:
      case Gf:
      case qf:
      case Qf:
      case lu:
      case Wf:
      case Xf:
      case Kf:
      case If:
        a = mo;
        break;
      case Ci:
        a = bo;
        break;
      default:
        a = Ft;
        break;
    }
    return (a & (e.suspendedLanes | t)) !== Ft ? Ft : a;
  }
  function em(e, t, n) {
    if (ba)
      for (var a = e.pendingUpdatersLaneMap; n > 0;) {
        var r = ed(n), i = 1 << r, u = a[r];
        u.add(t), n &= ~i;
      }
  }
  function tm(e, t) {
    if (ba)
      for (var n = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; t > 0;) {
        var r = ed(t), i = 1 << r, u = n[r];
        u.size > 0 && (u.forEach(function (o) {
          var l = o.alternate;
          (l === null || !a.has(l)) && a.add(o);
        }), u.clear()), t &= ~i;
      }
  }
  function nm(e, t) {
    return null;
  }
  var $n = ne, dr = fr, vr = Va, cs = Ci, Ro = Ft;
  function Sa() {
    return Ro;
  }
  function Vt(e) {
    Ro = e;
  }
  function TE(e, t) {
    var n = Ro;
    try {
      return Ro = e, t();
    } finally {
      Ro = n;
    }
  }
  function xE(e, t) {
    return e !== 0 && e < t ? e : t;
  }
  function DE(e, t) {
    return e > t ? e : t;
  }
  function ad(e, t) {
    return e !== 0 && e < t;
  }
  function am(e) {
    var t = Ei(e);
    return ad($n, t) ? ad(dr, t) ? Zf(t) ? vr : cs : dr : $n;
  }
  function fs(e) {
    var t = e.current.memoizedState;
    return t.isDehydrated;
  }
  var rm;
  function _E(e) {
    rm = e;
  }
  function OE(e) {
    rm(e);
  }
  var rd;
  function wE(e) {
    rd = e;
  }
  var im;
  function ME(e) {
    im = e;
  }
  var um;
  function LE(e) {
    um = e;
  }
  var om;
  function AE(e) {
    om = e;
  }
  var id = !1, ds = [], Hr = null, jr = null, Fr = null, To = /* @__PURE__ */ new Map(), xo = /* @__PURE__ */ new Map(), Vr = [], UE = [
    "mousedown",
    "mouseup",
    "touchcancel",
    "touchend",
    "touchstart",
    "auxclick",
    "dblclick",
    "pointercancel",
    "pointerdown",
    "pointerup",
    "dragend",
    "dragstart",
    "drop",
    "compositionend",
    "compositionstart",
    "keydown",
    "keypress",
    "keyup",
    "input",
    "textInput",
    // Intentionally camelCase
    "copy",
    "cut",
    "paste",
    "click",
    "change",
    "contextmenu",
    "reset",
    "submit"
  ];
  function kE(e) {
    return UE.indexOf(e) > -1;
  }
  function NE(e, t, n, a, r) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: r,
      targetContainers: [a]
    };
  }
  function lm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Hr = null;
        break;
      case "dragenter":
      case "dragleave":
        jr = null;
        break;
      case "mouseover":
      case "mouseout":
        Fr = null;
        break;
      case "pointerover":
      case "pointerout": {
        var n = t.pointerId;
        To.delete(n);
        break;
      }
      case "gotpointercapture":
      case "lostpointercapture": {
        var a = t.pointerId;
        xo.delete(a);
        break;
      }
    }
  }
  function Do(e, t, n, a, r, i) {
    if (e === null || e.nativeEvent !== i) {
      var u = NE(t, n, a, r, i);
      if (t !== null) {
        var o = $r(t);
        o !== null && rd(o);
      }
      return u;
    }
    e.eventSystemFlags |= a;
    var l = e.targetContainers;
    return r !== null && l.indexOf(r) === -1 && l.push(r), e;
  }
  function zE(e, t, n, a, r) {
    switch (t) {
      case "focusin": {
        var i = r;
        return Hr = Do(Hr, e, t, n, a, i), !0;
      }
      case "dragenter": {
        var u = r;
        return jr = Do(jr, e, t, n, a, u), !0;
      }
      case "mouseover": {
        var o = r;
        return Fr = Do(Fr, e, t, n, a, o), !0;
      }
      case "pointerover": {
        var l = r, c = l.pointerId;
        return To.set(c, Do(To.get(c) || null, e, t, n, a, l)), !0;
      }
      case "gotpointercapture": {
        var f = r, m = f.pointerId;
        return xo.set(m, Do(xo.get(m) || null, e, t, n, a, f)), !0;
      }
    }
    return !1;
  }
  function sm(e) {
    var t = Di(e.target);
    if (t !== null) {
      var n = gi(t);
      if (n !== null) {
        var a = n.tag;
        if (a === ue) {
          var r = Uh(n);
          if (r !== null) {
            e.blockedOn = r, om(e.priority, function () {
              im(n);
            });
            return;
          }
        } else if (a === B) {
          var i = n.stateNode;
          if (fs(i)) {
            e.blockedOn = kh(n);
            return;
          }
        }
      }
    }
    e.blockedOn = null;
  }
  function HE(e) {
    for (var t = um(), n = {
      blockedOn: null,
      target: e,
      priority: t
    }, a = 0; a < Vr.length && ad(t, Vr[a].priority); a++)
      ;
    Vr.splice(a, 0, n), a === 0 && sm(n);
  }
  function vs(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; t.length > 0;) {
      var n = t[0], a = ld(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
      if (a === null) {
        var r = e.nativeEvent, i = new r.constructor(r.type, r);
        sC(i), r.target.dispatchEvent(i), cC();
      } else {
        var u = $r(a);
        return u !== null && rd(u), e.blockedOn = a, !1;
      }
      t.shift();
    }
    return !0;
  }
  function cm(e, t, n) {
    vs(e) && n.delete(t);
  }
  function jE() {
    id = !1, Hr !== null && vs(Hr) && (Hr = null), jr !== null && vs(jr) && (jr = null), Fr !== null && vs(Fr) && (Fr = null), To.forEach(cm), xo.forEach(cm);
  }
  function _o(e, t) {
    e.blockedOn === t && (e.blockedOn = null, id || (id = !0, M.unstable_scheduleCallback(M.unstable_NormalPriority, jE)));
  }
  function Oo(e) {
    if (ds.length > 0) {
      _o(ds[0], e);
      for (var t = 1; t < ds.length; t++) {
        var n = ds[t];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    Hr !== null && _o(Hr, e), jr !== null && _o(jr, e), Fr !== null && _o(Fr, e);
    var a = function (o) {
      return _o(o, e);
    };
    To.forEach(a), xo.forEach(a);
    for (var r = 0; r < Vr.length; r++) {
      var i = Vr[r];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; Vr.length > 0;) {
      var u = Vr[0];
      if (u.blockedOn !== null)
        break;
      sm(u), u.blockedOn === null && Vr.shift();
    }
  }
  var cu = fe.ReactCurrentBatchConfig, ud = !0;
  function fm(e) {
    ud = !!e;
  }
  function FE() {
    return ud;
  }
  function VE(e, t, n) {
    var a = dm(t), r;
    switch (a) {
      case $n:
        r = BE;
        break;
      case dr:
        r = YE;
        break;
      case vr:
      default:
        r = od;
        break;
    }
    return r.bind(null, t, n, e);
  }
  function BE(e, t, n, a) {
    var r = Sa(), i = cu.transition;
    cu.transition = null;
    try {
      Vt($n), od(e, t, n, a);
    } finally {
      Vt(r), cu.transition = i;
    }
  }
  function YE(e, t, n, a) {
    var r = Sa(), i = cu.transition;
    cu.transition = null;
    try {
      Vt(dr), od(e, t, n, a);
    } finally {
      Vt(r), cu.transition = i;
    }
  }
  function od(e, t, n, a) {
    ud && $E(e, t, n, a);
  }
  function $E(e, t, n, a) {
    var r = ld(e, t, n, a);
    if (r === null) {
      Ed(e, t, a, ps, n), lm(e, a);
      return;
    }
    if (zE(r, e, t, n, a)) {
      a.stopPropagation();
      return;
    }
    if (lm(e, a), t & oo && kE(e)) {
      for (; r !== null;) {
        var i = $r(r);
        i !== null && OE(i);
        var u = ld(e, t, n, a);
        if (u === null && Ed(e, t, a, ps, n), u === r)
          break;
        r = u;
      }
      r !== null && a.stopPropagation();
      return;
    }
    Ed(e, t, a, null, n);
  }
  var ps = null;
  function ld(e, t, n, a) {
    ps = null;
    var r = hf(a), i = Di(r);
    if (i !== null) {
      var u = gi(i);
      if (u === null)
        i = null;
      else {
        var o = u.tag;
        if (o === ue) {
          var l = Uh(u);
          if (l !== null)
            return l;
          i = null;
        } else if (o === B) {
          var c = u.stateNode;
          if (fs(c))
            return kh(u);
          i = null;
        } else u !== i && (i = null);
      }
    }
    return ps = i, null;
  }
  function dm(e) {
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
        return $n;
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
        return dr;
      case "message": {
        var t = kC();
        switch (t) {
          case as:
            return $n;
          case wf:
            return dr;
          case bi:
          case NC:
            return vr;
          case Mf:
            return cs;
          default:
            return vr;
        }
      }
      default:
        return vr;
    }
  }
  function PE(e, t, n) {
    return e.addEventListener(t, n, !1), n;
  }
  function GE(e, t, n) {
    return e.addEventListener(t, n, !0), n;
  }
  function qE(e, t, n, a) {
    return e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }), n;
  }
  function QE(e, t, n, a) {
    return e.addEventListener(t, n, {
      passive: a
    }), n;
  }
  var wo = null, sd = null, Mo = null;
  function WE(e) {
    return wo = e, sd = pm(), !0;
  }
  function XE() {
    wo = null, sd = null, Mo = null;
  }
  function vm() {
    if (Mo)
      return Mo;
    var e, t = sd, n = t.length, a, r = pm(), i = r.length;
    for (e = 0; e < n && t[e] === r[e]; e++)
      ;
    var u = n - e;
    for (a = 1; a <= u && t[n - a] === r[i - a]; a++)
      ;
    var o = a > 1 ? 1 - a : void 0;
    return Mo = r.slice(e, o), Mo;
  }
  function pm() {
    return "value" in wo ? wo.value : wo.textContent;
  }
  function hs(e) {
    var t, n = e.keyCode;
    return "charCode" in e ? (t = e.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
  }
  function ms() {
    return !0;
  }
  function hm() {
    return !1;
  }
  function Pn(e) {
    function t(n, a, r, i, u) {
      this._reactName = n, this._targetInst = r, this.type = a, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var o in e)
        if (e.hasOwnProperty(o)) {
          var l = e[o];
          l ? this[o] = l(i) : this[o] = i[o];
        }
      var c = i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1;
      return c ? this.isDefaultPrevented = ms : this.isDefaultPrevented = hm, this.isPropagationStopped = hm, this;
    }
    return he(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ms);
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ms);
      },
      /**
       * We release all dispatched `SyntheticEvent`s after each event loop, adding
       * them back into the pool. This allows a way to hold onto a reference that
       * won't be added back into the pool.
       */
      persist: function () {
      },
      /**
       * Checks if this event should be released back into the pool.
       *
       * @return {boolean} True if this should not be released, false otherwise.
       */
      isPersistent: ms
    }), t;
  }
  var fu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, cd = Pn(fu), Lo = he({}, fu, {
    view: 0,
    detail: 0
  }), KE = Pn(Lo), fd, dd, Ao;
  function IE(e) {
    e !== Ao && (Ao && e.type === "mousemove" ? (fd = e.screenX - Ao.screenX, dd = e.screenY - Ao.screenY) : (fd = 0, dd = 0), Ao = e);
  }
  var ys = he({}, Lo, {
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
    getModifierState: pd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e ? e.movementX : (IE(e), fd);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : dd;
    }
  }), mm = Pn(ys), JE = he({}, ys, {
    dataTransfer: 0
  }), ZE = Pn(JE), eR = he({}, Lo, {
    relatedTarget: 0
  }), vd = Pn(eR), tR = he({}, fu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), nR = Pn(tR), aR = he({}, fu, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), rR = Pn(aR), iR = he({}, fu, {
    data: 0
  }), ym = Pn(iR), uR = ym, oR = {
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
    MozPrintableKey: "Unidentified"
  }, lR = {
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
    224: "Meta"
  };
  function sR(e) {
    if (e.key) {
      var t = oR[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    if (e.type === "keypress") {
      var n = hs(e);
      return n === 13 ? "Enter" : String.fromCharCode(n);
    }
    return e.type === "keydown" || e.type === "keyup" ? lR[e.keyCode] || "Unidentified" : "";
  }
  var cR = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function fR(e) {
    var t = this, n = t.nativeEvent;
    if (n.getModifierState)
      return n.getModifierState(e);
    var a = cR[e];
    return a ? !!n[a] : !1;
  }
  function pd(e) {
    return fR;
  }
  var dR = he({}, Lo, {
    key: sR,
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: pd,
    // Legacy Interface
    charCode: function (e) {
      return e.type === "keypress" ? hs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? hs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), vR = Pn(dR), pR = he({}, ys, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), gm = Pn(pR), hR = he({}, Lo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pd
  }), mR = Pn(hR), yR = he({}, fu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), gR = Pn(yR), bR = he({}, ys, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : (
        // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
        "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      );
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : (
        // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
        "wheelDeltaY" in e ? -e.wheelDeltaY : (
          // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
          "wheelDelta" in e ? -e.wheelDelta : 0
        )
      );
    },
    deltaZ: 0,
    // Browsers without "deltaMode" is reporting in raw wheel delta where one
    // notch on the scroll is always +/- 120, roughly equivalent to pixels.
    // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
    // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
    deltaMode: 0
  }), SR = Pn(bR), CR = [9, 13, 27, 32], bm = 229, hd = mt && "CompositionEvent" in window, Uo = null;
  mt && "documentMode" in document && (Uo = document.documentMode);
  var ER = mt && "TextEvent" in window && !Uo, Sm = mt && (!hd || Uo && Uo > 8 && Uo <= 11), Cm = 32, Em = String.fromCharCode(Cm);
  function RR() {
    kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), kn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), kn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), kn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
  }
  var Rm = !1;
  function TR(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
  }
  function xR(e) {
    switch (e) {
      case "compositionstart":
        return "onCompositionStart";
      case "compositionend":
        return "onCompositionEnd";
      case "compositionupdate":
        return "onCompositionUpdate";
    }
  }
  function DR(e, t) {
    return e === "keydown" && t.keyCode === bm;
  }
  function Tm(e, t) {
    switch (e) {
      case "keyup":
        return CR.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== bm;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function xm(e) {
    var t = e.detail;
    return typeof t == "object" && "data" in t ? t.data : null;
  }
  function Dm(e) {
    return e.locale === "ko";
  }
  var du = !1;
  function _R(e, t, n, a, r) {
    var i, u;
    if (hd ? i = xR(t) : du ? Tm(t, a) && (i = "onCompositionEnd") : DR(t, a) && (i = "onCompositionStart"), !i)
      return null;
    Sm && !Dm(a) && (!du && i === "onCompositionStart" ? du = WE(r) : i === "onCompositionEnd" && du && (u = vm()));
    var o = Es(n, i);
    if (o.length > 0) {
      var l = new ym(i, t, null, a, r);
      if (e.push({
        event: l,
        listeners: o
      }), u)
        l.data = u;
      else {
        var c = xm(a);
        c !== null && (l.data = c);
      }
    }
  }
  function OR(e, t) {
    switch (e) {
      case "compositionend":
        return xm(t);
      case "keypress":
        var n = t.which;
        return n !== Cm ? null : (Rm = !0, Em);
      case "textInput":
        var a = t.data;
        return a === Em && Rm ? null : a;
      default:
        return null;
    }
  }
  function wR(e, t) {
    if (du) {
      if (e === "compositionend" || !hd && Tm(e, t)) {
        var n = vm();
        return XE(), du = !1, n;
      }
      return null;
    }
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!TR(t)) {
          if (t.char && t.char.length > 1)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Sm && !Dm(t) ? null : t.data;
      default:
        return null;
    }
  }
  function MR(e, t, n, a, r) {
    var i;
    if (ER ? i = OR(t, a) : i = wR(t, a), !i)
      return null;
    var u = Es(n, "onBeforeInput");
    if (u.length > 0) {
      var o = new uR("onBeforeInput", "beforeinput", null, a, r);
      e.push({
        event: o,
        listeners: u
      }), o.data = i;
    }
  }
  function LR(e, t, n, a, r, i, u) {
    _R(e, t, n, a, r), MR(e, t, n, a, r);
  }
  var AR = {
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
    week: !0
  };
  function _m(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!AR[e.type] : t === "textarea";
  }
  /**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   */
  function UR(e) {
    if (!mt)
      return !1;
    var t = "on" + e, n = t in document;
    if (!n) {
      var a = document.createElement("div");
      a.setAttribute(t, "return;"), n = typeof a[t] == "function";
    }
    return n;
  }
  function kR() {
    kn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
  }
  function Om(e, t, n, a) {
    xh(a);
    var r = Es(t, "onChange");
    if (r.length > 0) {
      var i = new cd("onChange", "change", null, n, a);
      e.push({
        event: i,
        listeners: r
      });
    }
  }
  var ko = null, No = null;
  function NR(e) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return t === "select" || t === "input" && e.type === "file";
  }
  function zR(e) {
    var t = [];
    Om(t, No, e, hf(e)), wh(HR, t);
  }
  function HR(e) {
    qm(e, 0);
  }
  function gs(e) {
    var t = gu(e);
    if (Qi(t))
      return e;
  }
  function jR(e, t) {
    if (e === "change")
      return t;
  }
  var wm = !1;
  mt && (wm = UR("input") && (!document.documentMode || document.documentMode > 9));
  function FR(e, t) {
    ko = e, No = t, ko.attachEvent("onpropertychange", Lm);
  }
  function Mm() {
    ko && (ko.detachEvent("onpropertychange", Lm), ko = null, No = null);
  }
  function Lm(e) {
    e.propertyName === "value" && gs(No) && zR(e);
  }
  function VR(e, t, n) {
    e === "focusin" ? (Mm(), FR(t, n)) : e === "focusout" && Mm();
  }
  function BR(e, t) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return gs(No);
  }
  function YR(e) {
    var t = e.nodeName;
    return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
  }
  function $R(e, t) {
    if (e === "click")
      return gs(t);
  }
  function PR(e, t) {
    if (e === "input" || e === "change")
      return gs(t);
  }
  function GR(e) {
    var t = e._wrapperState;
    !t || !t.controlled || e.type !== "number" || te(e, "number", e.value);
  }
  function qR(e, t, n, a, r, i, u) {
    var o = n ? gu(n) : window, l, c;
    if (NR(o) ? l = jR : _m(o) ? wm ? l = PR : (l = BR, c = VR) : YR(o) && (l = $R), l) {
      var f = l(t, n);
      if (f) {
        Om(e, f, a, r);
        return;
      }
    }
    c && c(t, o, n), t === "focusout" && GR(o);
  }
  function QR() {
    Nn("onMouseEnter", ["mouseout", "mouseover"]), Nn("onMouseLeave", ["mouseout", "mouseover"]), Nn("onPointerEnter", ["pointerout", "pointerover"]), Nn("onPointerLeave", ["pointerout", "pointerover"]);
  }
  function WR(e, t, n, a, r, i, u) {
    var o = t === "mouseover" || t === "pointerover", l = t === "mouseout" || t === "pointerout";
    if (o && !fC(a)) {
      var c = a.relatedTarget || a.fromElement;
      if (c && (Di(c) || Ko(c)))
        return;
    }
    if (!(!l && !o)) {
      var f;
      if (r.window === r)
        f = r;
      else {
        var m = r.ownerDocument;
        m ? f = m.defaultView || m.parentWindow : f = window;
      }
      var h, b;
      if (l) {
        var C = a.relatedTarget || a.toElement;
        if (h = n, b = C ? Di(C) : null, b !== null) {
          var R = gi(b);
          (b !== R || b.tag !== V && b.tag !== ie) && (b = null);
        }
      } else
        h = null, b = n;
      if (h !== b) {
        var N = mm, Q = "onMouseLeave", P = "onMouseEnter", Ce = "mouse";
        (t === "pointerout" || t === "pointerover") && (N = gm, Q = "onPointerLeave", P = "onPointerEnter", Ce = "pointer");
        var me = h == null ? f : gu(h), y = b == null ? f : gu(b), T = new N(Q, Ce + "leave", h, a, r);
        T.target = me, T.relatedTarget = y;
        var g = null, O = Di(r);
        if (O === n) {
          var F = new N(P, Ce + "enter", b, a, r);
          F.target = y, F.relatedTarget = me, g = F;
        }
        gT(e, T, g, h, b);
      }
    }
  }
  function XR(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Gn = typeof Object.is == "function" ? Object.is : XR;
  function zo(e, t) {
    if (Gn(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length)
      return !1;
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      if (!en.call(t, i) || !Gn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function Am(e) {
    for (; e && e.firstChild;)
      e = e.firstChild;
    return e;
  }
  function KR(e) {
    for (; e;) {
      if (e.nextSibling)
        return e.nextSibling;
      e = e.parentNode;
    }
  }
  function Um(e, t) {
    for (var n = Am(e), a = 0, r = 0; n;) {
      if (n.nodeType === ir) {
        if (r = a + n.textContent.length, a <= t && r >= t)
          return {
            node: n,
            offset: t - a
          };
        a = r;
      }
      n = Am(KR(n));
    }
  }
  function IR(e) {
    var t = e.ownerDocument, n = t && t.defaultView || window, a = n.getSelection && n.getSelection();
    if (!a || a.rangeCount === 0)
      return null;
    var r = a.anchorNode, i = a.anchorOffset, u = a.focusNode, o = a.focusOffset;
    try {
      r.nodeType, u.nodeType;
    } catch {
      return null;
    }
    return JR(e, r, i, u, o);
  }
  function JR(e, t, n, a, r) {
    var i = 0, u = -1, o = -1, l = 0, c = 0, f = e, m = null;
    e: for (; ;) {
      for (var h = null; f === t && (n === 0 || f.nodeType === ir) && (u = i + n), f === a && (r === 0 || f.nodeType === ir) && (o = i + r), f.nodeType === ir && (i += f.nodeValue.length), (h = f.firstChild) !== null;)
        m = f, f = h;
      for (; ;) {
        if (f === e)
          break e;
        if (m === t && ++l === n && (u = i), m === a && ++c === r && (o = i), (h = f.nextSibling) !== null)
          break;
        f = m, m = f.parentNode;
      }
      f = h;
    }
    return u === -1 || o === -1 ? null : {
      start: u,
      end: o
    };
  }
  function ZR(e, t) {
    var n = e.ownerDocument || document, a = n && n.defaultView || window;
    if (a.getSelection) {
      var r = a.getSelection(), i = e.textContent.length, u = Math.min(t.start, i), o = t.end === void 0 ? u : Math.min(t.end, i);
      if (!r.extend && u > o) {
        var l = o;
        o = u, u = l;
      }
      var c = Um(e, u), f = Um(e, o);
      if (c && f) {
        if (r.rangeCount === 1 && r.anchorNode === c.node && r.anchorOffset === c.offset && r.focusNode === f.node && r.focusOffset === f.offset)
          return;
        var m = n.createRange();
        m.setStart(c.node, c.offset), r.removeAllRanges(), u > o ? (r.addRange(m), r.extend(f.node, f.offset)) : (m.setEnd(f.node, f.offset), r.addRange(m));
      }
    }
  }
  function km(e) {
    return e && e.nodeType === ir;
  }
  function Nm(e, t) {
    return !e || !t ? !1 : e === t ? !0 : km(e) ? !1 : km(t) ? Nm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
  }
  function eT(e) {
    return e && e.ownerDocument && Nm(e.ownerDocument.documentElement, e);
  }
  function tT(e) {
    try {
      return typeof e.contentWindow.location.href == "string";
    } catch {
      return !1;
    }
  }
  function zm() {
    for (var e = window, t = kr(); t instanceof e.HTMLIFrameElement;) {
      if (tT(t))
        e = t.contentWindow;
      else
        return t;
      t = kr(e.document);
    }
    return t;
  }
  function md(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function nT() {
    var e = zm();
    return {
      focusedElem: e,
      selectionRange: md(e) ? rT(e) : null
    };
  }
  function aT(e) {
    var t = zm(), n = e.focusedElem, a = e.selectionRange;
    if (t !== n && eT(n)) {
      a !== null && md(n) && iT(n, a);
      for (var r = [], i = n; i = i.parentNode;)
        i.nodeType === Dn && r.push({
          element: i,
          left: i.scrollLeft,
          top: i.scrollTop
        });
      typeof n.focus == "function" && n.focus();
      for (var u = 0; u < r.length; u++) {
        var o = r[u];
        o.element.scrollLeft = o.left, o.element.scrollTop = o.top;
      }
    }
  }
  function rT(e) {
    var t;
    return "selectionStart" in e ? t = {
      start: e.selectionStart,
      end: e.selectionEnd
    } : t = IR(e), t || {
      start: 0,
      end: 0
    };
  }
  function iT(e, t) {
    var n = t.start, a = t.end;
    a === void 0 && (a = n), "selectionStart" in e ? (e.selectionStart = n, e.selectionEnd = Math.min(a, e.value.length)) : ZR(e, t);
  }
  var uT = mt && "documentMode" in document && document.documentMode <= 11;
  function oT() {
    kn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
  }
  var vu = null, yd = null, Ho = null, gd = !1;
  function lT(e) {
    if ("selectionStart" in e && md(e))
      return {
        start: e.selectionStart,
        end: e.selectionEnd
      };
    var t = e.ownerDocument && e.ownerDocument.defaultView || window, n = t.getSelection();
    return {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    };
  }
  function sT(e) {
    return e.window === e ? e.document : e.nodeType === ur ? e : e.ownerDocument;
  }
  function Hm(e, t, n) {
    var a = sT(n);
    if (!(gd || vu == null || vu !== kr(a))) {
      var r = lT(vu);
      if (!Ho || !zo(Ho, r)) {
        Ho = r;
        var i = Es(yd, "onSelect");
        if (i.length > 0) {
          var u = new cd("onSelect", "select", null, t, n);
          e.push({
            event: u,
            listeners: i
          }), u.target = vu;
        }
      }
    }
  }
  function cT(e, t, n, a, r, i, u) {
    var o = n ? gu(n) : window;
    switch (t) {
      case "focusin":
        (_m(o) || o.contentEditable === "true") && (vu = o, yd = n, Ho = null);
        break;
      case "focusout":
        vu = null, yd = null, Ho = null;
        break;
      case "mousedown":
        gd = !0;
        break;
      case "contextmenu":
      case "mouseup":
      case "dragend":
        gd = !1, Hm(e, a, r);
        break;
      case "selectionchange":
        if (uT)
          break;
      case "keydown":
      case "keyup":
        Hm(e, a, r);
    }
  }
  function bs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var pu = {
    animationend: bs("Animation", "AnimationEnd"),
    animationiteration: bs("Animation", "AnimationIteration"),
    animationstart: bs("Animation", "AnimationStart"),
    transitionend: bs("Transition", "TransitionEnd")
  }, bd = {}, jm = {};
  mt && (jm = document.createElement("div").style, "AnimationEvent" in window || (delete pu.animationend.animation, delete pu.animationiteration.animation, delete pu.animationstart.animation), "TransitionEvent" in window || delete pu.transitionend.transition);
  function Ss(e) {
    if (bd[e])
      return bd[e];
    if (!pu[e])
      return e;
    var t = pu[e];
    for (var n in t)
      if (t.hasOwnProperty(n) && n in jm)
        return bd[e] = t[n];
    return e;
  }
  var Fm = Ss("animationend"), Vm = Ss("animationiteration"), Bm = Ss("animationstart"), Ym = Ss("transitionend"), $m = /* @__PURE__ */ new Map(), Pm = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
  function Br(e, t) {
    $m.set(e, t), kn(t, [e]);
  }
  function fT() {
    for (var e = 0; e < Pm.length; e++) {
      var t = Pm[e], n = t.toLowerCase(), a = t[0].toUpperCase() + t.slice(1);
      Br(n, "on" + a);
    }
    Br(Fm, "onAnimationEnd"), Br(Vm, "onAnimationIteration"), Br(Bm, "onAnimationStart"), Br("dblclick", "onDoubleClick"), Br("focusin", "onFocus"), Br("focusout", "onBlur"), Br(Ym, "onTransitionEnd");
  }
  function dT(e, t, n, a, r, i, u) {
    var o = $m.get(t);
    if (o !== void 0) {
      var l = cd, c = t;
      switch (t) {
        case "keypress":
          if (hs(a) === 0)
            return;
        case "keydown":
        case "keyup":
          l = vR;
          break;
        case "focusin":
          c = "focus", l = vd;
          break;
        case "focusout":
          c = "blur", l = vd;
          break;
        case "beforeblur":
        case "afterblur":
          l = vd;
          break;
        case "click":
          if (a.button === 2)
            return;
        case "auxclick":
        case "dblclick":
        case "mousedown":
        case "mousemove":
        case "mouseup":
        case "mouseout":
        case "mouseover":
        case "contextmenu":
          l = mm;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          l = ZE;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          l = mR;
          break;
        case Fm:
        case Vm:
        case Bm:
          l = nR;
          break;
        case Ym:
          l = gR;
          break;
        case "scroll":
          l = KE;
          break;
        case "wheel":
          l = SR;
          break;
        case "copy":
        case "cut":
        case "paste":
          l = rR;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          l = gm;
          break;
      }
      var f = (i & oo) !== 0;
      {
        var m = !f && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", h = mT(n, o, a.type, f, m);
        if (h.length > 0) {
          var b = new l(o, c, null, a, r);
          e.push({
            event: b,
            listeners: h
          });
        }
      }
    }
  }
  fT(), QR(), kR(), oT(), RR();
  function vT(e, t, n, a, r, i, u) {
    dT(e, t, n, a, r, i);
    var o = (i & lC) === 0;
    o && (WR(e, t, n, a, r), qR(e, t, n, a, r), cT(e, t, n, a, r), LR(e, t, n, a, r));
  }
  var jo = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Sd = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(jo));
  function Gm(e, t, n) {
    var a = e.type || "unknown-event";
    e.currentTarget = n, SC(a, t, void 0, e), e.currentTarget = null;
  }
  function pT(e, t, n) {
    var a;
    if (n)
      for (var r = t.length - 1; r >= 0; r--) {
        var i = t[r], u = i.instance, o = i.currentTarget, l = i.listener;
        if (u !== a && e.isPropagationStopped())
          return;
        Gm(e, l, o), a = u;
      }
    else
      for (var c = 0; c < t.length; c++) {
        var f = t[c], m = f.instance, h = f.currentTarget, b = f.listener;
        if (m !== a && e.isPropagationStopped())
          return;
        Gm(e, b, h), a = m;
      }
  }
  function qm(e, t) {
    for (var n = (t & oo) !== 0, a = 0; a < e.length; a++) {
      var r = e[a], i = r.event, u = r.listeners;
      pT(i, u, n);
    }
    CC();
  }
  function hT(e, t, n, a, r) {
    var i = hf(n), u = [];
    vT(u, e, a, n, i, t), qm(u, t);
  }
  function et(e, t) {
    Sd.has(e) || d('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
    var n = !1, a = Gx(t), r = bT(e);
    a.has(r) || (Qm(t, e, pf, n), a.add(r));
  }
  function Cd(e, t, n) {
    Sd.has(e) && !t && d('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
    var a = 0;
    t && (a |= oo), Qm(n, e, a, t);
  }
  var Cs = "_reactListening" + Math.random().toString(36).slice(2);
  function Fo(e) {
    if (!e[Cs]) {
      e[Cs] = !0, In.forEach(function (n) {
        n !== "selectionchange" && (Sd.has(n) || Cd(n, !1, e), Cd(n, !0, e));
      });
      var t = e.nodeType === ur ? e : e.ownerDocument;
      t !== null && (t[Cs] || (t[Cs] = !0, Cd("selectionchange", !1, t)));
    }
  }
  function Qm(e, t, n, a, r) {
    var i = VE(e, t, n), u = void 0;
    gf && (t === "touchstart" || t === "touchmove" || t === "wheel") && (u = !0), e = e, a ? u !== void 0 ? qE(e, t, i, u) : GE(e, t, i) : u !== void 0 ? QE(e, t, i, u) : PE(e, t, i);
  }
  function Wm(e, t) {
    return e === t || e.nodeType === yt && e.parentNode === t;
  }
  function Ed(e, t, n, a, r) {
    var i = a;
    if (!(t & Rh) && !(t & pf)) {
      var u = r;
      if (a !== null) {
        var o = a;
        e: for (; ;) {
          if (o === null)
            return;
          var l = o.tag;
          if (l === B || l === W) {
            var c = o.stateNode.containerInfo;
            if (Wm(c, u))
              break;
            if (l === W)
              for (var f = o.return; f !== null;) {
                var m = f.tag;
                if (m === B || m === W) {
                  var h = f.stateNode.containerInfo;
                  if (Wm(h, u))
                    return;
                }
                f = f.return;
              }
            for (; c !== null;) {
              var b = Di(c);
              if (b === null)
                return;
              var C = b.tag;
              if (C === V || C === ie) {
                o = i = b;
                continue e;
              }
              c = c.parentNode;
            }
          }
          o = o.return;
        }
      }
    }
    wh(function () {
      return hT(e, t, n, i);
    });
  }
  function Vo(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function mT(e, t, n, a, r, i) {
    for (var u = t !== null ? t + "Capture" : null, o = a ? u : t, l = [], c = e, f = null; c !== null;) {
      var m = c, h = m.stateNode, b = m.tag;
      if (b === V && h !== null && (f = h, o !== null)) {
        var C = so(c, o);
        C != null && l.push(Vo(c, C, f));
      }
      if (r)
        break;
      c = c.return;
    }
    return l;
  }
  function Es(e, t) {
    for (var n = t + "Capture", a = [], r = e; r !== null;) {
      var i = r, u = i.stateNode, o = i.tag;
      if (o === V && u !== null) {
        var l = u, c = so(r, n);
        c != null && a.unshift(Vo(r, c, l));
        var f = so(r, t);
        f != null && a.push(Vo(r, f, l));
      }
      r = r.return;
    }
    return a;
  }
  function hu(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== V);
    return e || null;
  }
  function yT(e, t) {
    for (var n = e, a = t, r = 0, i = n; i; i = hu(i))
      r++;
    for (var u = 0, o = a; o; o = hu(o))
      u++;
    for (; r - u > 0;)
      n = hu(n), r--;
    for (; u - r > 0;)
      a = hu(a), u--;
    for (var l = r; l--;) {
      if (n === a || a !== null && n === a.alternate)
        return n;
      n = hu(n), a = hu(a);
    }
    return null;
  }
  function Xm(e, t, n, a, r) {
    for (var i = t._reactName, u = [], o = n; o !== null && o !== a;) {
      var l = o, c = l.alternate, f = l.stateNode, m = l.tag;
      if (c !== null && c === a)
        break;
      if (m === V && f !== null) {
        var h = f;
        if (r) {
          var b = so(o, i);
          b != null && u.unshift(Vo(o, b, h));
        } else if (!r) {
          var C = so(o, i);
          C != null && u.push(Vo(o, C, h));
        }
      }
      o = o.return;
    }
    u.length !== 0 && e.push({
      event: t,
      listeners: u
    });
  }
  function gT(e, t, n, a, r) {
    var i = a && r ? yT(a, r) : null;
    a !== null && Xm(e, t, a, i, !1), r !== null && n !== null && Xm(e, n, r, i, !0);
  }
  function bT(e, t) {
    return e + "__bubble";
  }
  var _n = !1, Bo = "dangerouslySetInnerHTML", Rs = "suppressContentEditableWarning", Yr = "suppressHydrationWarning", Km = "autoFocus", Ti = "children", xi = "style", Ts = "__html", Rd, xs, Yo, Im, Ds, Jm, Zm;
  Rd = {
    // There are working polyfills for <dialog>. Let people use it.
    dialog: !0,
    // Electron ships a custom <webview> tag to display external web content in
    // an isolated frame and process.
    // This tag is not present in non Electron environments such as JSDom which
    // is often used for testing purposes.
    // @see https://electronjs.org/docs/api/webview-tag
    webview: !0
  }, xs = function (e, t) {
    tC(e, t), nC(e, t), oC(e, t, {
      registrationNameDependencies: $t,
      possibleRegistrationNames: En
    });
  }, Jm = mt && !document.documentMode, Yo = function (e, t, n) {
    if (!_n) {
      var a = _s(n), r = _s(t);
      r !== a && (_n = !0, d("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(r), JSON.stringify(a)));
    }
  }, Im = function (e) {
    if (!_n) {
      _n = !0;
      var t = [];
      e.forEach(function (n) {
        t.push(n);
      }), d("Extra attributes from the server: %s", t);
    }
  }, Ds = function (e, t) {
    t === !1 ? d("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : d("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
  }, Zm = function (e, t) {
    var n = e.namespaceURI === rr ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
    return n.innerHTML = t, n.innerHTML;
  };
  var ST = /\r\n?/g, CT = /\u0000|\uFFFD/g;
  function _s(e) {
    Zn(e);
    var t = typeof e == "string" ? e : "" + e;
    return t.replace(ST, `
`).replace(CT, "");
  }
  function Os(e, t, n, a) {
    var r = _s(t), i = _s(e);
    if (i !== r && (a && (_n || (_n = !0, d('Text content did not match. Server: "%s" Client: "%s"', i, r))), n && se))
      throw new Error("Text content does not match server-rendered HTML.");
  }
  function ey(e) {
    return e.nodeType === ur ? e : e.ownerDocument;
  }
  function ET() {
  }
  function ws(e) {
    e.onclick = ET;
  }
  function RT(e, t, n, a, r) {
    for (var i in a)
      if (a.hasOwnProperty(i)) {
        var u = a[i];
        if (i === xi)
          u && Object.freeze(u), yh(t, u);
        else if (i === Bo) {
          var o = u ? u[Ts] : void 0;
          o != null && dh(t, o);
        } else if (i === Ti)
          if (typeof u == "string") {
            var l = e !== "textarea" || u !== "";
            l && Il(t, u);
          } else typeof u == "number" && Il(t, "" + u);
        else i === Rs || i === Yr || i === Km || ($t.hasOwnProperty(i) ? u != null && (typeof u != "function" && Ds(i, u), i === "onScroll" && et("scroll", t)) : u != null && er(t, i, u, r));
      }
  }
  function TT(e, t, n, a) {
    for (var r = 0; r < t.length; r += 2) {
      var i = t[r], u = t[r + 1];
      i === xi ? yh(e, u) : i === Bo ? dh(e, u) : i === Ti ? Il(e, u) : er(e, i, u, a);
    }
  }
  function xT(e, t, n, a) {
    var r, i = ey(n), u, o = a;
    if (o === rr && (o = lf(e)), o === rr) {
      if (r = vi(e, t), !r && e !== e.toLowerCase() && d("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
        var l = i.createElement("div");
        l.innerHTML = "<script><\/script>";
        var c = l.firstChild;
        u = l.removeChild(c);
      } else if (typeof t.is == "string")
        u = i.createElement(e, {
          is: t.is
        });
      else if (u = i.createElement(e), e === "select") {
        var f = u;
        t.multiple ? f.multiple = !0 : t.size && (f.size = t.size);
      }
    } else
      u = i.createElementNS(o, e);
    return o === rr && !r && Object.prototype.toString.call(u) === "[object HTMLUnknownElement]" && !en.call(Rd, e) && (Rd[e] = !0, d("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), u;
  }
  function DT(e, t) {
    return ey(t).createTextNode(e);
  }
  function _T(e, t, n, a) {
    var r = vi(t, n);
    xs(t, n);
    var i;
    switch (t) {
      case "dialog":
        et("cancel", e), et("close", e), i = n;
        break;
      case "iframe":
      case "object":
      case "embed":
        et("load", e), i = n;
        break;
      case "video":
      case "audio":
        for (var u = 0; u < jo.length; u++)
          et(jo[u], e);
        i = n;
        break;
      case "source":
        et("error", e), i = n;
        break;
      case "img":
      case "image":
      case "link":
        et("error", e), et("load", e), i = n;
        break;
      case "details":
        et("toggle", e), i = n;
        break;
      case "input":
        v(e, n), i = s(e, n), et("invalid", e);
        break;
      case "option":
        Ge(e, n), i = n;
        break;
      case "select":
        io(e, n), i = ro(e, n), et("invalid", e);
        break;
      case "textarea":
        sh(e, n), i = uf(e, n), et("invalid", e);
        break;
      default:
        i = n;
    }
    switch (vf(t, i), RT(t, e, a, i, r), t) {
      case "input":
        nr(e), L(e, n, !1);
        break;
      case "textarea":
        nr(e), fh(e);
        break;
      case "option":
        Ze(e, n);
        break;
      case "select":
        rf(e, n);
        break;
      default:
        typeof i.onClick == "function" && ws(e);
        break;
    }
  }
  function OT(e, t, n, a, r) {
    xs(t, a);
    var i = null, u, o;
    switch (t) {
      case "input":
        u = s(e, n), o = s(e, a), i = [];
        break;
      case "select":
        u = ro(e, n), o = ro(e, a), i = [];
        break;
      case "textarea":
        u = uf(e, n), o = uf(e, a), i = [];
        break;
      default:
        u = n, o = a, typeof u.onClick != "function" && typeof o.onClick == "function" && ws(e);
        break;
    }
    vf(t, o);
    var l, c, f = null;
    for (l in u)
      if (!(o.hasOwnProperty(l) || !u.hasOwnProperty(l) || u[l] == null))
        if (l === xi) {
          var m = u[l];
          for (c in m)
            m.hasOwnProperty(c) && (f || (f = {}), f[c] = "");
        } else l === Bo || l === Ti || l === Rs || l === Yr || l === Km || ($t.hasOwnProperty(l) ? i || (i = []) : (i = i || []).push(l, null));
    for (l in o) {
      var h = o[l], b = u != null ? u[l] : void 0;
      if (!(!o.hasOwnProperty(l) || h === b || h == null && b == null))
        if (l === xi)
          if (h && Object.freeze(h), b) {
            for (c in b)
              b.hasOwnProperty(c) && (!h || !h.hasOwnProperty(c)) && (f || (f = {}), f[c] = "");
            for (c in h)
              h.hasOwnProperty(c) && b[c] !== h[c] && (f || (f = {}), f[c] = h[c]);
          } else
            f || (i || (i = []), i.push(l, f)), f = h;
        else if (l === Bo) {
          var C = h ? h[Ts] : void 0, R = b ? b[Ts] : void 0;
          C != null && R !== C && (i = i || []).push(l, C);
        } else l === Ti ? (typeof h == "string" || typeof h == "number") && (i = i || []).push(l, "" + h) : l === Rs || l === Yr || ($t.hasOwnProperty(l) ? (h != null && (typeof h != "function" && Ds(l, h), l === "onScroll" && et("scroll", e)), !i && b !== h && (i = [])) : (i = i || []).push(l, h));
    }
    return f && (QS(f, o[xi]), (i = i || []).push(xi, f)), i;
  }
  function wT(e, t, n, a, r) {
    n === "input" && r.type === "radio" && r.name != null && S(e, r);
    var i = vi(n, a), u = vi(n, r);
    switch (TT(e, t, i, u), n) {
      case "input":
        E(e, r);
        break;
      case "textarea":
        ch(e, r);
        break;
      case "select":
        TS(e, r);
        break;
    }
  }
  function MT(e) {
    {
      var t = e.toLowerCase();
      return Jl.hasOwnProperty(t) && Jl[t] || null;
    }
  }
  function LT(e, t, n, a, r, i, u) {
    var o, l;
    switch (o = vi(t, n), xs(t, n), t) {
      case "dialog":
        et("cancel", e), et("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        et("load", e);
        break;
      case "video":
      case "audio":
        for (var c = 0; c < jo.length; c++)
          et(jo[c], e);
        break;
      case "source":
        et("error", e);
        break;
      case "img":
      case "image":
      case "link":
        et("error", e), et("load", e);
        break;
      case "details":
        et("toggle", e);
        break;
      case "input":
        v(e, n), et("invalid", e);
        break;
      case "option":
        Ge(e, n);
        break;
      case "select":
        io(e, n), et("invalid", e);
        break;
      case "textarea":
        sh(e, n), et("invalid", e);
        break;
    }
    vf(t, n);
    {
      l = /* @__PURE__ */ new Set();
      for (var f = e.attributes, m = 0; m < f.length; m++) {
        var h = f[m].name.toLowerCase();
        switch (h) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            l.add(f[m].name);
        }
      }
    }
    var b = null;
    for (var C in n)
      if (n.hasOwnProperty(C)) {
        var R = n[C];
        if (C === Ti)
          typeof R == "string" ? e.textContent !== R && (n[Yr] !== !0 && Os(e.textContent, R, i, u), b = [Ti, R]) : typeof R == "number" && e.textContent !== "" + R && (n[Yr] !== !0 && Os(e.textContent, R, i, u), b = [Ti, "" + R]);
        else if ($t.hasOwnProperty(C))
          R != null && (typeof R != "function" && Ds(C, R), C === "onScroll" && et("scroll", e));
        else if (u && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof o == "boolean") {
          var N = void 0, Q = o && Cn ? null : jn(C);
          if (n[Yr] !== !0) {
            if (!(C === Rs || C === Yr || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              C === "value" || C === "checked" || C === "selected")) {
              if (C === Bo) {
                var P = e.innerHTML, Ce = R ? R[Ts] : void 0;
                if (Ce != null) {
                  var me = Zm(e, Ce);
                  me !== P && Yo(C, P, me);
                }
              } else if (C === xi) {
                if (l.delete(C), Jm) {
                  var y = GS(R);
                  N = e.getAttribute("style"), y !== N && Yo(C, N, y);
                }
              } else if (o && !Cn)
                l.delete(C.toLowerCase()), N = Dr(e, C, R), R !== N && Yo(C, N, R);
              else if (!vt(C, Q, o) && !$e(C, R, Q, o)) {
                var T = !1;
                if (Q !== null)
                  l.delete(Q.attributeName), N = Za(e, C, R, Q);
                else {
                  var g = a;
                  if (g === rr && (g = lf(t)), g === rr)
                    l.delete(C.toLowerCase());
                  else {
                    var O = MT(C);
                    O !== null && O !== C && (T = !0, l.delete(O)), l.delete(C);
                  }
                  N = Dr(e, C, R);
                }
                var F = Cn;
                !F && R !== N && !T && Yo(C, N, R);
              }
            }
          }
        }
      }
    switch (u && // $FlowFixMe - Should be inferred as not undefined.
    l.size > 0 && n[Yr] !== !0 && Im(l), t) {
      case "input":
        nr(e), L(e, n, !0);
        break;
      case "textarea":
        nr(e), fh(e);
        break;
      case "select":
      case "option":
        break;
      default:
        typeof n.onClick == "function" && ws(e);
        break;
    }
    return b;
  }
  function AT(e, t, n) {
    var a = e.nodeValue !== t;
    return a;
  }
  function Td(e, t) {
    {
      if (_n)
        return;
      _n = !0, d("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
    }
  }
  function xd(e, t) {
    {
      if (_n)
        return;
      _n = !0, d('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
    }
  }
  function Dd(e, t, n) {
    {
      if (_n)
        return;
      _n = !0, d("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
    }
  }
  function _d(e, t) {
    {
      if (t === "" || _n)
        return;
      _n = !0, d('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
    }
  }
  function UT(e, t, n) {
    switch (t) {
      case "input":
        Z(e, n);
        return;
      case "textarea":
        DS(e, n);
        return;
      case "select":
        xS(e, n);
        return;
    }
  }
  var $o = function () {
  }, Po = function () {
  };
  {
    var kT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], ty = [
      "applet",
      "caption",
      "html",
      "table",
      "td",
      "th",
      "marquee",
      "object",
      "template",
      // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
      // TODO: Distinguish by namespace here -- for <title>, including it here
      // errs on the side of fewer warnings
      "foreignObject",
      "desc",
      "title"
    ], NT = ty.concat(["button"]), zT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], ny = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null
    };
    Po = function (e, t) {
      var n = he({}, e || ny), a = {
        tag: t
      };
      return ty.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), NT.indexOf(t) !== -1 && (n.pTagInButtonScope = null), kT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = a, t === "form" && (n.formTag = a), t === "a" && (n.aTagInScope = a), t === "button" && (n.buttonTagInScope = a), t === "nobr" && (n.nobrTagInScope = a), t === "p" && (n.pTagInButtonScope = a), t === "li" && (n.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = a), n;
    };
    var HT = function (e, t) {
      switch (t) {
        case "select":
          return e === "option" || e === "optgroup" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return zT.indexOf(t) === -1;
        case "body":
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "head":
        case "html":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
      }
      return !0;
    }, jT = function (e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }, ay = {};
    $o = function (e, t, n) {
      n = n || ny;
      var a = n.current, r = a && a.tag;
      t != null && (e != null && d("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
      var i = HT(e, r) ? null : a, u = i ? null : jT(e, n), o = i || u;
      if (o) {
        var l = o.tag, c = !!i + "|" + e + "|" + l;
        if (!ay[c]) {
          ay[c] = !0;
          var f = e, m = "";
          if (e === "#text" ? /\S/.test(t) ? f = "Text nodes" : (f = "Whitespace text nodes", m = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : f = "<" + e + ">", i) {
            var h = "";
            l === "table" && e === "tr" && (h += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), d("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", f, l, m, h);
          } else
            d("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", f, l);
        }
      }
    };
  }
  var Ms = "suppressHydrationWarning", Ls = "$", As = "/$", Go = "$?", qo = "$!", FT = "style", Od = null, wd = null;
  function VT(e) {
    var t, n, a = e.nodeType;
    switch (a) {
      case ur:
      case cf: {
        t = a === ur ? "#document" : "#fragment";
        var r = e.documentElement;
        n = r ? r.namespaceURI : sf(null, "");
        break;
      }
      default: {
        var i = a === yt ? e.parentNode : e, u = i.namespaceURI || null;
        t = i.tagName, n = sf(u, t);
        break;
      }
    }
    {
      var o = t.toLowerCase(), l = Po(null, o);
      return {
        namespace: n,
        ancestorInfo: l
      };
    }
  }
  function BT(e, t, n) {
    {
      var a = e, r = sf(a.namespace, t), i = Po(a.ancestorInfo, t);
      return {
        namespace: r,
        ancestorInfo: i
      };
    }
  }
  function ow(e) {
    return e;
  }
  function YT(e) {
    Od = FE(), wd = nT();
    var t = null;
    return fm(!1), t;
  }
  function $T(e) {
    aT(wd), fm(Od), Od = null, wd = null;
  }
  function PT(e, t, n, a, r) {
    var i;
    {
      var u = a;
      if ($o(e, null, u.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
        var o = "" + t.children, l = Po(u.ancestorInfo, e);
        $o(null, o, l);
      }
      i = u.namespace;
    }
    var c = xT(e, t, n, i);
    return Xo(r, c), Hd(c, t), c;
  }
  function GT(e, t) {
    e.appendChild(t);
  }
  function qT(e, t, n, a, r) {
    switch (_T(e, t, n, a), t) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!n.autoFocus;
      case "img":
        return !0;
      default:
        return !1;
    }
  }
  function QT(e, t, n, a, r, i) {
    {
      var u = i;
      if (typeof a.children != typeof n.children && (typeof a.children == "string" || typeof a.children == "number")) {
        var o = "" + a.children, l = Po(u.ancestorInfo, t);
        $o(null, o, l);
      }
    }
    return OT(e, t, n, a);
  }
  function Md(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  function WT(e, t, n, a) {
    {
      var r = n;
      $o(null, e, r.ancestorInfo);
    }
    var i = DT(e, t);
    return Xo(a, i), i;
  }
  function XT() {
    var e = window.event;
    return e === void 0 ? vr : dm(e.type);
  }
  var Ld = typeof setTimeout == "function" ? setTimeout : void 0, KT = typeof clearTimeout == "function" ? clearTimeout : void 0, Ad = -1, ry = typeof Promise == "function" ? Promise : void 0, IT = typeof queueMicrotask == "function" ? queueMicrotask : typeof ry < "u" ? function (e) {
    return ry.resolve(null).then(e).catch(JT);
  } : Ld;
  function JT(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ZT(e, t, n, a) {
    switch (t) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        n.autoFocus && e.focus();
        return;
      case "img": {
        n.src && (e.src = n.src);
        return;
      }
    }
  }
  function ex(e, t, n, a, r, i) {
    wT(e, t, n, a, r), Hd(e, r);
  }
  function iy(e) {
    Il(e, "");
  }
  function tx(e, t, n) {
    e.nodeValue = n;
  }
  function nx(e, t) {
    e.appendChild(t);
  }
  function ax(e, t) {
    var n;
    e.nodeType === yt ? (n = e.parentNode, n.insertBefore(t, e)) : (n = e, n.appendChild(t));
    var a = e._reactRootContainer;
    a == null && n.onclick === null && ws(n);
  }
  function rx(e, t, n) {
    e.insertBefore(t, n);
  }
  function ix(e, t, n) {
    e.nodeType === yt ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
  }
  function ux(e, t) {
    e.removeChild(t);
  }
  function ox(e, t) {
    e.nodeType === yt ? e.parentNode.removeChild(t) : e.removeChild(t);
  }
  function Ud(e, t) {
    var n = t, a = 0;
    do {
      var r = n.nextSibling;
      if (e.removeChild(n), r && r.nodeType === yt) {
        var i = r.data;
        if (i === As)
          if (a === 0) {
            e.removeChild(r), Oo(t);
            return;
          } else
            a--;
        else (i === Ls || i === Go || i === qo) && a++;
      }
      n = r;
    } while (n);
    Oo(t);
  }
  function lx(e, t) {
    e.nodeType === yt ? Ud(e.parentNode, t) : e.nodeType === Dn && Ud(e, t), Oo(e);
  }
  function sx(e) {
    e = e;
    var t = e.style;
    typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
  }
  function cx(e) {
    e.nodeValue = "";
  }
  function fx(e, t) {
    e = e;
    var n = t[FT], a = n != null && n.hasOwnProperty("display") ? n.display : null;
    e.style.display = ff("display", a);
  }
  function dx(e, t) {
    e.nodeValue = t;
  }
  function vx(e) {
    e.nodeType === Dn ? e.textContent = "" : e.nodeType === ur && e.documentElement && e.removeChild(e.documentElement);
  }
  function px(e, t, n) {
    return e.nodeType !== Dn || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
  }
  function hx(e, t) {
    return t === "" || e.nodeType !== ir ? null : e;
  }
  function mx(e) {
    return e.nodeType !== yt ? null : e;
  }
  function uy(e) {
    return e.data === Go;
  }
  function kd(e) {
    return e.data === qo;
  }
  function yx(e) {
    var t = e.nextSibling && e.nextSibling.dataset, n, a, r;
    return t && (n = t.dgst, a = t.msg, r = t.stck), {
      message: a,
      digest: n,
      stack: r
    };
  }
  function gx(e, t) {
    e._reactRetry = t;
  }
  function Us(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === Dn || t === ir)
        break;
      if (t === yt) {
        var n = e.data;
        if (n === Ls || n === qo || n === Go)
          break;
        if (n === As)
          return null;
      }
    }
    return e;
  }
  function Qo(e) {
    return Us(e.nextSibling);
  }
  function bx(e) {
    return Us(e.firstChild);
  }
  function Sx(e) {
    return Us(e.firstChild);
  }
  function Cx(e) {
    return Us(e.nextSibling);
  }
  function Ex(e, t, n, a, r, i, u) {
    Xo(i, e), Hd(e, n);
    var o;
    {
      var l = r;
      o = l.namespace;
    }
    var c = (i.mode & be) !== X;
    return LT(e, t, n, o, a, c, u);
  }
  function Rx(e, t, n, a) {
    return Xo(n, e), n.mode & be, AT(e, t);
  }
  function Tx(e, t) {
    Xo(t, e);
  }
  function xx(e) {
    for (var t = e.nextSibling, n = 0; t;) {
      if (t.nodeType === yt) {
        var a = t.data;
        if (a === As) {
          if (n === 0)
            return Qo(t);
          n--;
        } else (a === Ls || a === qo || a === Go) && n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function oy(e) {
    for (var t = e.previousSibling, n = 0; t;) {
      if (t.nodeType === yt) {
        var a = t.data;
        if (a === Ls || a === qo || a === Go) {
          if (n === 0)
            return t;
          n--;
        } else a === As && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Dx(e) {
    Oo(e);
  }
  function _x(e) {
    Oo(e);
  }
  function Ox(e) {
    return e !== "head" && e !== "body";
  }
  function wx(e, t, n, a) {
    var r = !0;
    Os(t.nodeValue, n, a, r);
  }
  function Mx(e, t, n, a, r, i) {
    if (t[Ms] !== !0) {
      var u = !0;
      Os(a.nodeValue, r, i, u);
    }
  }
  function Lx(e, t) {
    t.nodeType === Dn ? Td(e, t) : t.nodeType === yt || xd(e, t);
  }
  function Ax(e, t) {
    {
      var n = e.parentNode;
      n !== null && (t.nodeType === Dn ? Td(n, t) : t.nodeType === yt || xd(n, t));
    }
  }
  function Ux(e, t, n, a, r) {
    (r || t[Ms] !== !0) && (a.nodeType === Dn ? Td(n, a) : a.nodeType === yt || xd(n, a));
  }
  function kx(e, t, n) {
    Dd(e, t);
  }
  function Nx(e, t) {
    _d(e, t);
  }
  function zx(e, t, n) {
    {
      var a = e.parentNode;
      a !== null && Dd(a, t);
    }
  }
  function Hx(e, t) {
    {
      var n = e.parentNode;
      n !== null && _d(n, t);
    }
  }
  function jx(e, t, n, a, r, i) {
    (i || t[Ms] !== !0) && Dd(n, a);
  }
  function Fx(e, t, n, a, r) {
    (r || t[Ms] !== !0) && _d(n, a);
  }
  function Vx(e) {
    d("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
  }
  function Bx(e) {
    Fo(e);
  }
  var mu = Math.random().toString(36).slice(2), yu = "__reactFiber$" + mu, Nd = "__reactProps$" + mu, Wo = "__reactContainer$" + mu, zd = "__reactEvents$" + mu, Yx = "__reactListeners$" + mu, $x = "__reactHandles$" + mu;
  function Px(e) {
    delete e[yu], delete e[Nd], delete e[zd], delete e[Yx], delete e[$x];
  }
  function Xo(e, t) {
    t[yu] = e;
  }
  function ks(e, t) {
    t[Wo] = e;
  }
  function ly(e) {
    e[Wo] = null;
  }
  function Ko(e) {
    return !!e[Wo];
  }
  function Di(e) {
    var t = e[yu];
    if (t)
      return t;
    for (var n = e.parentNode; n;) {
      if (t = n[Wo] || n[yu], t) {
        var a = t.alternate;
        if (t.child !== null || a !== null && a.child !== null)
          for (var r = oy(e); r !== null;) {
            var i = r[yu];
            if (i)
              return i;
            r = oy(r);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function $r(e) {
    var t = e[yu] || e[Wo];
    return t && (t.tag === V || t.tag === ie || t.tag === ue || t.tag === B) ? t : null;
  }
  function gu(e) {
    if (e.tag === V || e.tag === ie)
      return e.stateNode;
    throw new Error("getNodeFromInstance: Invalid argument.");
  }
  function Ns(e) {
    return e[Nd] || null;
  }
  function Hd(e, t) {
    e[Nd] = t;
  }
  function Gx(e) {
    var t = e[zd];
    return t === void 0 && (t = e[zd] = /* @__PURE__ */ new Set()), t;
  }
  var sy = {}, cy = fe.ReactDebugCurrentFrame;
  function zs(e) {
    if (e) {
      var t = e._owner, n = Lr(e.type, e._source, t ? t.type : null);
      cy.setExtraStackFrame(n);
    } else
      cy.setExtraStackFrame(null);
  }
  function Ca(e, t, n, a, r) {
    {
      var i = Function.call.bind(en);
      for (var u in e)
        if (i(e, u)) {
          var o = void 0;
          try {
            if (typeof e[u] != "function") {
              var l = Error((a || "React class") + ": " + n + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw l.name = "Invariant Violation", l;
            }
            o = e[u](t, u, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (c) {
            o = c;
          }
          o && !(o instanceof Error) && (zs(r), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, u, typeof o), zs(null)), o instanceof Error && !(o.message in sy) && (sy[o.message] = !0, zs(r), d("Failed %s type: %s", n, o.message), zs(null));
        }
    }
  }
  var jd = [], Hs;
  Hs = [];
  var pr = -1;
  function Pr(e) {
    return {
      current: e
    };
  }
  function un(e, t) {
    if (pr < 0) {
      d("Unexpected pop.");
      return;
    }
    t !== Hs[pr] && d("Unexpected Fiber popped."), e.current = jd[pr], jd[pr] = null, Hs[pr] = null, pr--;
  }
  function on(e, t, n) {
    pr++, jd[pr] = e.current, Hs[pr] = n, e.current = t;
  }
  var Fd;
  Fd = {};
  var qn = {};
  Object.freeze(qn);
  var hr = Pr(qn), Ba = Pr(!1), Vd = qn;
  function bu(e, t, n) {
    return n && Ya(t) ? Vd : hr.current;
  }
  function fy(e, t, n) {
    {
      var a = e.stateNode;
      a.__reactInternalMemoizedUnmaskedChildContext = t, a.__reactInternalMemoizedMaskedChildContext = n;
    }
  }
  function Su(e, t) {
    {
      var n = e.type, a = n.contextTypes;
      if (!a)
        return qn;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var i = {};
      for (var u in a)
        i[u] = t[u];
      {
        var o = oe(e) || "Unknown";
        Ca(a, i, "context", o);
      }
      return r && fy(e, t, i), i;
    }
  }
  function js() {
    return Ba.current;
  }
  function Ya(e) {
    {
      var t = e.childContextTypes;
      return t != null;
    }
  }
  function Fs(e) {
    un(Ba, e), un(hr, e);
  }
  function Bd(e) {
    un(Ba, e), un(hr, e);
  }
  function dy(e, t, n) {
    {
      if (hr.current !== qn)
        throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
      on(hr, t, e), on(Ba, n, e);
    }
  }
  function vy(e, t, n) {
    {
      var a = e.stateNode, r = t.childContextTypes;
      if (typeof a.getChildContext != "function") {
        {
          var i = oe(e) || "Unknown";
          Fd[i] || (Fd[i] = !0, d("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", i, i));
        }
        return n;
      }
      var u = a.getChildContext();
      for (var o in u)
        if (!(o in r))
          throw new Error((oe(e) || "Unknown") + '.getChildContext(): key "' + o + '" is not defined in childContextTypes.');
      {
        var l = oe(e) || "Unknown";
        Ca(r, u, "child context", l);
      }
      return he({}, n, u);
    }
  }
  function Vs(e) {
    {
      var t = e.stateNode, n = t && t.__reactInternalMemoizedMergedChildContext || qn;
      return Vd = hr.current, on(hr, n, e), on(Ba, Ba.current, e), !0;
    }
  }
  function py(e, t, n) {
    {
      var a = e.stateNode;
      if (!a)
        throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
      if (n) {
        var r = vy(e, t, Vd);
        a.__reactInternalMemoizedMergedChildContext = r, un(Ba, e), un(hr, e), on(hr, r, e), on(Ba, n, e);
      } else
        un(Ba, e), on(Ba, n, e);
    }
  }
  function qx(e) {
    {
      if (!OC(e) || e.tag !== G)
        throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
      var t = e;
      do {
        switch (t.tag) {
          case B:
            return t.stateNode.context;
          case G: {
            var n = t.type;
            if (Ya(n))
              return t.stateNode.__reactInternalMemoizedMergedChildContext;
            break;
          }
        }
        t = t.return;
      } while (t !== null);
      throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  var Gr = 0, Bs = 1, mr = null, Yd = !1, $d = !1;
  function hy(e) {
    mr === null ? mr = [e] : mr.push(e);
  }
  function Qx(e) {
    Yd = !0, hy(e);
  }
  function my() {
    Yd && qr();
  }
  function qr() {
    if (!$d && mr !== null) {
      $d = !0;
      var e = 0, t = Sa();
      try {
        var n = !0, a = mr;
        for (Vt($n); e < a.length; e++) {
          var r = a[e];
          do
            r = r(n);
          while (r !== null);
        }
        mr = null, Yd = !1;
      } catch (i) {
        throw mr !== null && (mr = mr.slice(e + 1)), Vh(as, qr), i;
      } finally {
        Vt(t), $d = !1;
      }
    }
    return null;
  }
  var Cu = [], Eu = 0, Ys = null, $s = 0, ra = [], ia = 0, _i = null, yr = 1, gr = "";
  function Wx(e) {
    return wi(), (e.flags & Ah) !== J;
  }
  function Xx(e) {
    return wi(), $s;
  }
  function Kx() {
    var e = gr, t = yr, n = t & ~Ix(t);
    return n.toString(32) + e;
  }
  function Oi(e, t) {
    wi(), Cu[Eu++] = $s, Cu[Eu++] = Ys, Ys = e, $s = t;
  }
  function yy(e, t, n) {
    wi(), ra[ia++] = yr, ra[ia++] = gr, ra[ia++] = _i, _i = e;
    var a = yr, r = gr, i = Ps(a) - 1, u = a & ~(1 << i), o = n + 1, l = Ps(t) + i;
    if (l > 30) {
      var c = i - i % 5, f = (1 << c) - 1, m = (u & f).toString(32), h = u >> c, b = i - c, C = Ps(t) + b, R = o << b, N = R | h, Q = m + r;
      yr = 1 << C | N, gr = Q;
    } else {
      var P = o << i, Ce = P | u, me = r;
      yr = 1 << l | Ce, gr = me;
    }
  }
  function Pd(e) {
    wi();
    var t = e.return;
    if (t !== null) {
      var n = 1, a = 0;
      Oi(e, n), yy(e, n, a);
    }
  }
  function Ps(e) {
    return 32 - qh(e);
  }
  function Ix(e) {
    return 1 << Ps(e) - 1;
  }
  function Gd(e) {
    for (; e === Ys;)
      Ys = Cu[--Eu], Cu[Eu] = null, $s = Cu[--Eu], Cu[Eu] = null;
    for (; e === _i;)
      _i = ra[--ia], ra[ia] = null, gr = ra[--ia], ra[ia] = null, yr = ra[--ia], ra[ia] = null;
  }
  function Jx() {
    return wi(), _i !== null ? {
      id: yr,
      overflow: gr
    } : null;
  }
  function Zx(e, t) {
    wi(), ra[ia++] = yr, ra[ia++] = gr, ra[ia++] = _i, yr = t.id, gr = t.overflow, _i = e;
  }
  function wi() {
    Gt() || d("Expected to be hydrating. This is a bug in React. Please file an issue.");
  }
  var Pt = null, ua = null, Ea = !1, Mi = !1, Qr = null;
  function eD() {
    Ea && d("We should not be hydrating here. This is a bug in React. Please file a bug.");
  }
  function gy() {
    Mi = !0;
  }
  function tD() {
    return Mi;
  }
  function nD(e) {
    var t = e.stateNode.containerInfo;
    return ua = Sx(t), Pt = e, Ea = !0, Qr = null, Mi = !1, !0;
  }
  function aD(e, t, n) {
    return ua = Cx(t), Pt = e, Ea = !0, Qr = null, Mi = !1, n !== null && Zx(e, n), !0;
  }
  function by(e, t) {
    switch (e.tag) {
      case B: {
        Lx(e.stateNode.containerInfo, t);
        break;
      }
      case V: {
        var n = (e.mode & be) !== X;
        Ux(
          e.type,
          e.memoizedProps,
          e.stateNode,
          t,
          // TODO: Delete this argument when we remove the legacy root API.
          n
        );
        break;
      }
      case ue: {
        var a = e.memoizedState;
        a.dehydrated !== null && Ax(a.dehydrated, t);
        break;
      }
    }
  }
  function Sy(e, t) {
    by(e, t);
    var n = oO();
    n.stateNode = t, n.return = e;
    var a = e.deletions;
    a === null ? (e.deletions = [n], e.flags |= pi) : a.push(n);
  }
  function qd(e, t) {
    {
      if (Mi)
        return;
      switch (e.tag) {
        case B: {
          var n = e.stateNode.containerInfo;
          switch (t.tag) {
            case V:
              var a = t.type;
              t.pendingProps, kx(n, a);
              break;
            case ie:
              var r = t.pendingProps;
              Nx(n, r);
              break;
          }
          break;
        }
        case V: {
          var i = e.type, u = e.memoizedProps, o = e.stateNode;
          switch (t.tag) {
            case V: {
              var l = t.type, c = t.pendingProps, f = (e.mode & be) !== X;
              jx(
                i,
                u,
                o,
                l,
                c,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ie: {
              var m = t.pendingProps, h = (e.mode & be) !== X;
              Fx(
                i,
                u,
                o,
                m,
                // TODO: Delete this argument when we remove the legacy root API.
                h
              );
              break;
            }
          }
          break;
        }
        case ue: {
          var b = e.memoizedState, C = b.dehydrated;
          if (C !== null) switch (t.tag) {
            case V:
              var R = t.type;
              t.pendingProps, zx(C, R);
              break;
            case ie:
              var N = t.pendingProps;
              Hx(C, N);
              break;
          }
          break;
        }
        default:
          return;
      }
    }
  }
  function Cy(e, t) {
    t.flags = t.flags & ~lr | gt, qd(e, t);
  }
  function Ey(e, t) {
    switch (e.tag) {
      case V: {
        var n = e.type;
        e.pendingProps;
        var a = px(t, n);
        return a !== null ? (e.stateNode = a, Pt = e, ua = bx(a), !0) : !1;
      }
      case ie: {
        var r = e.pendingProps, i = hx(t, r);
        return i !== null ? (e.stateNode = i, Pt = e, ua = null, !0) : !1;
      }
      case ue: {
        var u = mx(t);
        if (u !== null) {
          var o = {
            dehydrated: u,
            treeContext: Jx(),
            retryLane: Bn
          };
          e.memoizedState = o;
          var l = lO(u);
          return l.return = e, e.child = l, Pt = e, ua = null, !0;
        }
        return !1;
      }
      default:
        return !1;
    }
  }
  function Qd(e) {
    return (e.mode & be) !== X && (e.flags & Le) === J;
  }
  function Wd(e) {
    throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
  }
  function Xd(e) {
    if (Ea) {
      var t = ua;
      if (!t) {
        Qd(e) && (qd(Pt, e), Wd()), Cy(Pt, e), Ea = !1, Pt = e;
        return;
      }
      var n = t;
      if (!Ey(e, t)) {
        Qd(e) && (qd(Pt, e), Wd()), t = Qo(n);
        var a = Pt;
        if (!t || !Ey(e, t)) {
          Cy(Pt, e), Ea = !1, Pt = e;
          return;
        }
        Sy(a, n);
      }
    }
  }
  function rD(e, t, n) {
    var a = e.stateNode, r = !Mi, i = Ex(a, e.type, e.memoizedProps, t, n, e, r);
    return e.updateQueue = i, i !== null;
  }
  function iD(e) {
    var t = e.stateNode, n = e.memoizedProps, a = Rx(t, n, e);
    if (a) {
      var r = Pt;
      if (r !== null)
        switch (r.tag) {
          case B: {
            var i = r.stateNode.containerInfo, u = (r.mode & be) !== X;
            wx(
              i,
              t,
              n,
              // TODO: Delete this argument when we remove the legacy root API.
              u
            );
            break;
          }
          case V: {
            var o = r.type, l = r.memoizedProps, c = r.stateNode, f = (r.mode & be) !== X;
            Mx(
              o,
              l,
              c,
              t,
              n,
              // TODO: Delete this argument when we remove the legacy root API.
              f
            );
            break;
          }
        }
    }
    return a;
  }
  function uD(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    Tx(n, e);
  }
  function oD(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    return xx(n);
  }
  function Ry(e) {
    for (var t = e.return; t !== null && t.tag !== V && t.tag !== B && t.tag !== ue;)
      t = t.return;
    Pt = t;
  }
  function Gs(e) {
    if (e !== Pt)
      return !1;
    if (!Ea)
      return Ry(e), Ea = !0, !1;
    if (e.tag !== B && (e.tag !== V || Ox(e.type) && !Md(e.type, e.memoizedProps))) {
      var t = ua;
      if (t)
        if (Qd(e))
          Ty(e), Wd();
        else
          for (; t;)
            Sy(e, t), t = Qo(t);
    }
    return Ry(e), e.tag === ue ? ua = oD(e) : ua = Pt ? Qo(e.stateNode) : null, !0;
  }
  function lD() {
    return Ea && ua !== null;
  }
  function Ty(e) {
    for (var t = ua; t;)
      by(e, t), t = Qo(t);
  }
  function Ru() {
    Pt = null, ua = null, Ea = !1, Mi = !1;
  }
  function xy() {
    Qr !== null && (gb(Qr), Qr = null);
  }
  function Gt() {
    return Ea;
  }
  function Kd(e) {
    Qr === null ? Qr = [e] : Qr.push(e);
  }
  var sD = fe.ReactCurrentBatchConfig, cD = null;
  function fD() {
    return sD.transition;
  }
  var Ra = {
    recordUnsafeLifecycleWarnings: function (e, t) {
    },
    flushPendingUnsafeLifecycleWarnings: function () {
    },
    recordLegacyContextWarning: function (e, t) {
    },
    flushLegacyContextWarning: function () {
    },
    discardPendingWarnings: function () {
    }
  };
  {
    var dD = function (e) {
      for (var t = null, n = e; n !== null;)
        n.mode & ot && (t = n), n = n.return;
      return t;
    }, Li = function (e) {
      var t = [];
      return e.forEach(function (n) {
        t.push(n);
      }), t.sort().join(", ");
    }, Io = [], Jo = [], Zo = [], el = [], tl = [], nl = [], Ai = /* @__PURE__ */ new Set();
    Ra.recordUnsafeLifecycleWarnings = function (e, t) {
      Ai.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Io.push(e), e.mode & ot && typeof t.UNSAFE_componentWillMount == "function" && Jo.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Zo.push(e), e.mode & ot && typeof t.UNSAFE_componentWillReceiveProps == "function" && el.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && tl.push(e), e.mode & ot && typeof t.UNSAFE_componentWillUpdate == "function" && nl.push(e));
    }, Ra.flushPendingUnsafeLifecycleWarnings = function () {
      var e = /* @__PURE__ */ new Set();
      Io.length > 0 && (Io.forEach(function (h) {
        e.add(oe(h) || "Component"), Ai.add(h.type);
      }), Io = []);
      var t = /* @__PURE__ */ new Set();
      Jo.length > 0 && (Jo.forEach(function (h) {
        t.add(oe(h) || "Component"), Ai.add(h.type);
      }), Jo = []);
      var n = /* @__PURE__ */ new Set();
      Zo.length > 0 && (Zo.forEach(function (h) {
        n.add(oe(h) || "Component"), Ai.add(h.type);
      }), Zo = []);
      var a = /* @__PURE__ */ new Set();
      el.length > 0 && (el.forEach(function (h) {
        a.add(oe(h) || "Component"), Ai.add(h.type);
      }), el = []);
      var r = /* @__PURE__ */ new Set();
      tl.length > 0 && (tl.forEach(function (h) {
        r.add(oe(h) || "Component"), Ai.add(h.type);
      }), tl = []);
      var i = /* @__PURE__ */ new Set();
      if (nl.length > 0 && (nl.forEach(function (h) {
        i.add(oe(h) || "Component"), Ai.add(h.type);
      }), nl = []), t.size > 0) {
        var u = Li(t);
        d(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, u);
      }
      if (a.size > 0) {
        var o = Li(a);
        d(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, o);
      }
      if (i.size > 0) {
        var l = Li(i);
        d(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, l);
      }
      if (e.size > 0) {
        var c = Li(e);
        ke(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, c);
      }
      if (n.size > 0) {
        var f = Li(n);
        ke(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, f);
      }
      if (r.size > 0) {
        var m = Li(r);
        ke(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
      }
    };
    var qs = /* @__PURE__ */ new Map(), Dy = /* @__PURE__ */ new Set();
    Ra.recordLegacyContextWarning = function (e, t) {
      var n = dD(e);
      if (n === null) {
        d("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      if (!Dy.has(e.type)) {
        var a = qs.get(n);
        (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], qs.set(n, a)), a.push(e));
      }
    }, Ra.flushLegacyContextWarning = function () {
      qs.forEach(function (e, t) {
        if (e.length !== 0) {
          var n = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function (i) {
            a.add(oe(i) || "Component"), Dy.add(i.type);
          });
          var r = Li(a);
          try {
            nt(n), d(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, r);
          } finally {
            zt();
          }
        }
      });
    }, Ra.discardPendingWarnings = function () {
      Io = [], Jo = [], Zo = [], el = [], tl = [], nl = [], qs = /* @__PURE__ */ new Map();
    };
  }
  var Id, Jd, Zd, ev, tv, _y = function (e, t) {
  };
  Id = !1, Jd = !1, Zd = {}, ev = {}, tv = {}, _y = function (e, t) {
    if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
      if (typeof e._store != "object")
        throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
      e._store.validated = !0;
      var n = oe(t) || "Component";
      ev[n] || (ev[n] = !0, d('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
    }
  };
  function vD(e) {
    return e.prototype && e.prototype.isReactComponent;
  }
  function al(e, t, n) {
    var a = n.ref;
    if (a !== null && typeof a != "function" && typeof a != "object") {
      if ((e.mode & ot || Un) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(n._owner && n._self && n._owner.stateNode !== n._self) && // Will already throw with "Function components cannot have string refs"
        !(n._owner && n._owner.tag !== G) && // Will already warn with "Function components cannot be given refs"
        !(typeof n.type == "function" && !vD(n.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        n._owner) {
        var r = oe(e) || "Component";
        Zd[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, a), Zd[r] = !0);
      }
      if (n._owner) {
        var i = n._owner, u;
        if (i) {
          var o = i;
          if (o.tag !== G)
            throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
          u = o.stateNode;
        }
        if (!u)
          throw new Error("Missing owner for string ref " + a + ". This error is likely caused by a bug in React. Please file an issue.");
        var l = u;
        Rn(a, "ref");
        var c = "" + a;
        if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === c)
          return t.ref;
        var f = function (m) {
          var h = l.refs;
          m === null ? delete h[c] : h[c] = m;
        };
        return f._stringRef = c, f;
      } else {
        if (typeof a != "string")
          throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
        if (!n._owner)
          throw new Error("Element ref was specified as a string (" + a + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
      }
    }
    return a;
  }
  function Qs(e, t) {
    var n = Object.prototype.toString.call(t);
    throw new Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  }
  function Ws(e) {
    {
      var t = oe(e) || "Component";
      if (tv[t])
        return;
      tv[t] = !0, d("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
  }
  function Oy(e) {
    var t = e._payload, n = e._init;
    return n(t);
  }
  function wy(e) {
    function t(y, T) {
      if (e) {
        var g = y.deletions;
        g === null ? (y.deletions = [T], y.flags |= pi) : g.push(T);
      }
    }
    function n(y, T) {
      if (!e)
        return null;
      for (var g = T; g !== null;)
        t(y, g), g = g.sibling;
      return null;
    }
    function a(y, T) {
      for (var g = /* @__PURE__ */ new Map(), O = T; O !== null;)
        O.key !== null ? g.set(O.key, O) : g.set(O.index, O), O = O.sibling;
      return g;
    }
    function r(y, T) {
      var g = Bi(y, T);
      return g.index = 0, g.sibling = null, g;
    }
    function i(y, T, g) {
      if (y.index = g, !e)
        return y.flags |= Ah, T;
      var O = y.alternate;
      if (O !== null) {
        var F = O.index;
        return F < T ? (y.flags |= gt, T) : F;
      } else
        return y.flags |= gt, T;
    }
    function u(y) {
      return e && y.alternate === null && (y.flags |= gt), y;
    }
    function o(y, T, g, O) {
      if (T === null || T.tag !== ie) {
        var F = Kp(g, y.mode, O);
        return F.return = y, F;
      } else {
        var z = r(T, g);
        return z.return = y, z;
      }
    }
    function l(y, T, g, O) {
      var F = g.type;
      if (F === Na)
        return f(y, T, g.props.children, O, g.key);
      if (T !== null && (T.elementType === F || // Keep this check inline so it only runs on the false path:
        kb(T, g) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof F == "object" && F !== null && F.$$typeof === I && Oy(F) === T.type)) {
        var z = r(T, g.props);
        return z.ref = al(y, T, g), z.return = y, z._debugSource = g._source, z._debugOwner = g._owner, z;
      }
      var ee = Xp(g, y.mode, O);
      return ee.ref = al(y, T, g), ee.return = y, ee;
    }
    function c(y, T, g, O) {
      if (T === null || T.tag !== W || T.stateNode.containerInfo !== g.containerInfo || T.stateNode.implementation !== g.implementation) {
        var F = Ip(g, y.mode, O);
        return F.return = y, F;
      } else {
        var z = r(T, g.children || []);
        return z.return = y, z;
      }
    }
    function f(y, T, g, O, F) {
      if (T === null || T.tag !== rt) {
        var z = ri(g, y.mode, O, F);
        return z.return = y, z;
      } else {
        var ee = r(T, g);
        return ee.return = y, ee;
      }
    }
    function m(y, T, g) {
      if (typeof T == "string" && T !== "" || typeof T == "number") {
        var O = Kp("" + T, y.mode, g);
        return O.return = y, O;
      }
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case ma: {
            var F = Xp(T, y.mode, g);
            return F.ref = al(y, null, T), F.return = y, F;
          }
          case ya: {
            var z = Ip(T, y.mode, g);
            return z.return = y, z;
          }
          case I: {
            var ee = T._payload, re = T._init;
            return m(y, re(ee), g);
          }
        }
        if (Me(T) || Fn(T)) {
          var Ve = ri(T, y.mode, g, null);
          return Ve.return = y, Ve;
        }
        Qs(y, T);
      }
      return typeof T == "function" && Ws(y), null;
    }
    function h(y, T, g, O) {
      var F = T !== null ? T.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number")
        return F !== null ? null : o(y, T, "" + g, O);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case ma:
            return g.key === F ? l(y, T, g, O) : null;
          case ya:
            return g.key === F ? c(y, T, g, O) : null;
          case I: {
            var z = g._payload, ee = g._init;
            return h(y, T, ee(z), O);
          }
        }
        if (Me(g) || Fn(g))
          return F !== null ? null : f(y, T, g, O, null);
        Qs(y, g);
      }
      return typeof g == "function" && Ws(y), null;
    }
    function b(y, T, g, O, F) {
      if (typeof O == "string" && O !== "" || typeof O == "number") {
        var z = y.get(g) || null;
        return o(T, z, "" + O, F);
      }
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case ma: {
            var ee = y.get(O.key === null ? g : O.key) || null;
            return l(T, ee, O, F);
          }
          case ya: {
            var re = y.get(O.key === null ? g : O.key) || null;
            return c(T, re, O, F);
          }
          case I:
            var Ve = O._payload, _e = O._init;
            return b(y, T, g, _e(Ve), F);
        }
        if (Me(O) || Fn(O)) {
          var pt = y.get(g) || null;
          return f(T, pt, O, F, null);
        }
        Qs(T, O);
      }
      return typeof O == "function" && Ws(T), null;
    }
    function C(y, T, g) {
      {
        if (typeof y != "object" || y === null)
          return T;
        switch (y.$$typeof) {
          case ma:
          case ya:
            _y(y, g);
            var O = y.key;
            if (typeof O != "string")
              break;
            if (T === null) {
              T = /* @__PURE__ */ new Set(), T.add(O);
              break;
            }
            if (!T.has(O)) {
              T.add(O);
              break;
            }
            d("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", O);
            break;
          case I:
            var F = y._payload, z = y._init;
            C(z(F), T, g);
            break;
        }
      }
      return T;
    }
    function R(y, T, g, O) {
      for (var F = null, z = 0; z < g.length; z++) {
        var ee = g[z];
        F = C(ee, F, y);
      }
      for (var re = null, Ve = null, _e = T, pt = 0, Oe = 0, lt = null; _e !== null && Oe < g.length; Oe++) {
        _e.index > Oe ? (lt = _e, _e = null) : lt = _e.sibling;
        var sn = h(y, _e, g[Oe], O);
        if (sn === null) {
          _e === null && (_e = lt);
          break;
        }
        e && _e && sn.alternate === null && t(y, _e), pt = i(sn, pt, Oe), Ve === null ? re = sn : Ve.sibling = sn, Ve = sn, _e = lt;
      }
      if (Oe === g.length) {
        if (n(y, _e), Gt()) {
          var Jt = Oe;
          Oi(y, Jt);
        }
        return re;
      }
      if (_e === null) {
        for (; Oe < g.length; Oe++) {
          var Wn = m(y, g[Oe], O);
          Wn !== null && (pt = i(Wn, pt, Oe), Ve === null ? re = Wn : Ve.sibling = Wn, Ve = Wn);
        }
        if (Gt()) {
          var yn = Oe;
          Oi(y, yn);
        }
        return re;
      }
      for (var gn = a(y, _e); Oe < g.length; Oe++) {
        var cn = b(gn, y, Oe, g[Oe], O);
        cn !== null && (e && cn.alternate !== null && gn.delete(cn.key === null ? Oe : cn.key), pt = i(cn, pt, Oe), Ve === null ? re = cn : Ve.sibling = cn, Ve = cn);
      }
      if (e && gn.forEach(function (Yu) {
        return t(y, Yu);
      }), Gt()) {
        var xr = Oe;
        Oi(y, xr);
      }
      return re;
    }
    function N(y, T, g, O) {
      var F = Fn(g);
      if (typeof F != "function")
        throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
      {
        typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          g[Symbol.toStringTag] === "Generator" && (Jd || d("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Jd = !0), g.entries === F && (Id || d("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Id = !0);
        var z = F.call(g);
        if (z)
          for (var ee = null, re = z.next(); !re.done; re = z.next()) {
            var Ve = re.value;
            ee = C(Ve, ee, y);
          }
      }
      var _e = F.call(g);
      if (_e == null)
        throw new Error("An iterable object provided no iterator.");
      for (var pt = null, Oe = null, lt = T, sn = 0, Jt = 0, Wn = null, yn = _e.next(); lt !== null && !yn.done; Jt++, yn = _e.next()) {
        lt.index > Jt ? (Wn = lt, lt = null) : Wn = lt.sibling;
        var gn = h(y, lt, yn.value, O);
        if (gn === null) {
          lt === null && (lt = Wn);
          break;
        }
        e && lt && gn.alternate === null && t(y, lt), sn = i(gn, sn, Jt), Oe === null ? pt = gn : Oe.sibling = gn, Oe = gn, lt = Wn;
      }
      if (yn.done) {
        if (n(y, lt), Gt()) {
          var cn = Jt;
          Oi(y, cn);
        }
        return pt;
      }
      if (lt === null) {
        for (; !yn.done; Jt++, yn = _e.next()) {
          var xr = m(y, yn.value, O);
          xr !== null && (sn = i(xr, sn, Jt), Oe === null ? pt = xr : Oe.sibling = xr, Oe = xr);
        }
        if (Gt()) {
          var Yu = Jt;
          Oi(y, Yu);
        }
        return pt;
      }
      for (var Nl = a(y, lt); !yn.done; Jt++, yn = _e.next()) {
        var Ka = b(Nl, y, Jt, yn.value, O);
        Ka !== null && (e && Ka.alternate !== null && Nl.delete(Ka.key === null ? Jt : Ka.key), sn = i(Ka, sn, Jt), Oe === null ? pt = Ka : Oe.sibling = Ka, Oe = Ka);
      }
      if (e && Nl.forEach(function (FO) {
        return t(y, FO);
      }), Gt()) {
        var jO = Jt;
        Oi(y, jO);
      }
      return pt;
    }
    function Q(y, T, g, O) {
      if (T !== null && T.tag === ie) {
        n(y, T.sibling);
        var F = r(T, g);
        return F.return = y, F;
      }
      n(y, T);
      var z = Kp(g, y.mode, O);
      return z.return = y, z;
    }
    function P(y, T, g, O) {
      for (var F = g.key, z = T; z !== null;) {
        if (z.key === F) {
          var ee = g.type;
          if (ee === Na) {
            if (z.tag === rt) {
              n(y, z.sibling);
              var re = r(z, g.props.children);
              return re.return = y, re._debugSource = g._source, re._debugOwner = g._owner, re;
            }
          } else if (z.elementType === ee || // Keep this check inline so it only runs on the false path:
            kb(z, g) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ee == "object" && ee !== null && ee.$$typeof === I && Oy(ee) === z.type) {
            n(y, z.sibling);
            var Ve = r(z, g.props);
            return Ve.ref = al(y, z, g), Ve.return = y, Ve._debugSource = g._source, Ve._debugOwner = g._owner, Ve;
          }
          n(y, z);
          break;
        } else
          t(y, z);
        z = z.sibling;
      }
      if (g.type === Na) {
        var _e = ri(g.props.children, y.mode, O, g.key);
        return _e.return = y, _e;
      } else {
        var pt = Xp(g, y.mode, O);
        return pt.ref = al(y, T, g), pt.return = y, pt;
      }
    }
    function Ce(y, T, g, O) {
      for (var F = g.key, z = T; z !== null;) {
        if (z.key === F)
          if (z.tag === W && z.stateNode.containerInfo === g.containerInfo && z.stateNode.implementation === g.implementation) {
            n(y, z.sibling);
            var ee = r(z, g.children || []);
            return ee.return = y, ee;
          } else {
            n(y, z);
            break;
          }
        else
          t(y, z);
        z = z.sibling;
      }
      var re = Ip(g, y.mode, O);
      return re.return = y, re;
    }
    function me(y, T, g, O) {
      var F = typeof g == "object" && g !== null && g.type === Na && g.key === null;
      if (F && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case ma:
            return u(P(y, T, g, O));
          case ya:
            return u(Ce(y, T, g, O));
          case I:
            var z = g._payload, ee = g._init;
            return me(y, T, ee(z), O);
        }
        if (Me(g))
          return R(y, T, g, O);
        if (Fn(g))
          return N(y, T, g, O);
        Qs(y, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" ? u(Q(y, T, "" + g, O)) : (typeof g == "function" && Ws(y), n(y, T));
    }
    return me;
  }
  var Tu = wy(!0), My = wy(!1);
  function pD(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error("Resuming work not yet implemented.");
    if (t.child !== null) {
      var n = t.child, a = Bi(n, n.pendingProps);
      for (t.child = a, a.return = t; n.sibling !== null;)
        n = n.sibling, a = a.sibling = Bi(n, n.pendingProps), a.return = t;
      a.sibling = null;
    }
  }
  function hD(e, t) {
    for (var n = e.child; n !== null;)
      nO(n, t), n = n.sibling;
  }
  var nv = Pr(null), av;
  av = {};
  var Xs = null, xu = null, rv = null, Ks = !1;
  function Is() {
    Xs = null, xu = null, rv = null, Ks = !1;
  }
  function Ly() {
    Ks = !0;
  }
  function Ay() {
    Ks = !1;
  }
  function Uy(e, t, n) {
    on(nv, t._currentValue, e), t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== av && d("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = av;
  }
  function iv(e, t) {
    var n = nv.current;
    un(nv, t), e._currentValue = n;
  }
  function uv(e, t, n) {
    for (var a = e; a !== null;) {
      var r = a.alternate;
      if (su(a.childLanes, t) ? r !== null && !su(r.childLanes, t) && (r.childLanes = ce(r.childLanes, t)) : (a.childLanes = ce(a.childLanes, t), r !== null && (r.childLanes = ce(r.childLanes, t))), a === n)
        break;
      a = a.return;
    }
    a !== n && d("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
  }
  function mD(e, t, n) {
    yD(e, t, n);
  }
  function yD(e, t, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null;) {
      var r = void 0, i = a.dependencies;
      if (i !== null) {
        r = a.child;
        for (var u = i.firstContext; u !== null;) {
          if (u.context === t) {
            if (a.tag === G) {
              var o = Co(n), l = br(Xe, o);
              l.tag = Zs;
              var c = a.updateQueue;
              if (c !== null) {
                var f = c.shared, m = f.pending;
                m === null ? l.next = l : (l.next = m.next, m.next = l), f.pending = l;
              }
            }
            a.lanes = ce(a.lanes, n);
            var h = a.alternate;
            h !== null && (h.lanes = ce(h.lanes, n)), uv(a.return, n, e), i.lanes = ce(i.lanes, n);
            break;
          }
          u = u.next;
        }
      } else if (a.tag === Ue)
        r = a.type === e.type ? null : a.child;
      else if (a.tag === ht) {
        var b = a.return;
        if (b === null)
          throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
        b.lanes = ce(b.lanes, n);
        var C = b.alternate;
        C !== null && (C.lanes = ce(C.lanes, n)), uv(b, n, e), r = a.sibling;
      } else
        r = a.child;
      if (r !== null)
        r.return = a;
      else
        for (r = a; r !== null;) {
          if (r === e) {
            r = null;
            break;
          }
          var R = r.sibling;
          if (R !== null) {
            R.return = r.return, r = R;
            break;
          }
          r = r.return;
        }
      a = r;
    }
  }
  function Du(e, t) {
    Xs = e, xu = null, rv = null;
    var n = e.dependencies;
    if (n !== null) {
      var a = n.firstContext;
      a !== null && (Yn(n.lanes, t) && gl(), n.firstContext = null);
    }
  }
  function bt(e) {
    Ks && d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    var t = e._currentValue;
    if (rv !== e) {
      var n = {
        context: e,
        memoizedValue: t,
        next: null
      };
      if (xu === null) {
        if (Xs === null)
          throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        xu = n, Xs.dependencies = {
          lanes: D,
          firstContext: n
        };
      } else
        xu = xu.next = n;
    }
    return t;
  }
  var Ui = null;
  function ov(e) {
    Ui === null ? Ui = [e] : Ui.push(e);
  }
  function gD() {
    if (Ui !== null) {
      for (var e = 0; e < Ui.length; e++) {
        var t = Ui[e], n = t.interleaved;
        if (n !== null) {
          t.interleaved = null;
          var a = n.next, r = t.pending;
          if (r !== null) {
            var i = r.next;
            r.next = a, n.next = i;
          }
          t.pending = n;
        }
      }
      Ui = null;
    }
  }
  function ky(e, t, n, a) {
    var r = t.interleaved;
    return r === null ? (n.next = n, ov(t)) : (n.next = r.next, r.next = n), t.interleaved = n, Js(e, a);
  }
  function bD(e, t, n, a) {
    var r = t.interleaved;
    r === null ? (n.next = n, ov(t)) : (n.next = r.next, r.next = n), t.interleaved = n;
  }
  function SD(e, t, n, a) {
    var r = t.interleaved;
    return r === null ? (n.next = n, ov(t)) : (n.next = r.next, r.next = n), t.interleaved = n, Js(e, a);
  }
  function On(e, t) {
    return Js(e, t);
  }
  var CD = Js;
  function Js(e, t) {
    e.lanes = ce(e.lanes, t);
    var n = e.alternate;
    n !== null && (n.lanes = ce(n.lanes, t)), n === null && (e.flags & (gt | lr)) !== J && Mb(e);
    for (var a = e, r = e.return; r !== null;)
      r.childLanes = ce(r.childLanes, t), n = r.alternate, n !== null ? n.childLanes = ce(n.childLanes, t) : (r.flags & (gt | lr)) !== J && Mb(e), a = r, r = r.return;
    if (a.tag === B) {
      var i = a.stateNode;
      return i;
    } else
      return null;
  }
  var Ny = 0, zy = 1, Zs = 2, lv = 3, ec = !1, sv, tc;
  sv = !1, tc = null;
  function cv(e) {
    var t = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: D
      },
      effects: null
    };
    e.updateQueue = t;
  }
  function Hy(e, t) {
    var n = t.updateQueue, a = e.updateQueue;
    if (n === a) {
      var r = {
        baseState: a.baseState,
        firstBaseUpdate: a.firstBaseUpdate,
        lastBaseUpdate: a.lastBaseUpdate,
        shared: a.shared,
        effects: a.effects
      };
      t.updateQueue = r;
    }
  }
  function br(e, t) {
    var n = {
      eventTime: e,
      lane: t,
      tag: Ny,
      payload: null,
      callback: null,
      next: null
    };
    return n;
  }
  function Wr(e, t, n) {
    var a = e.updateQueue;
    if (a === null)
      return null;
    var r = a.shared;
    if (tc === r && !sv && (d("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), sv = !0), b0()) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, CD(e, n);
    } else
      return SD(e, r, t, n);
  }
  function nc(e, t, n) {
    var a = t.updateQueue;
    if (a !== null) {
      var r = a.shared;
      if (Kh(n)) {
        var i = r.lanes;
        i = Jh(i, e.pendingLanes);
        var u = ce(i, n);
        r.lanes = u, nd(e, u);
      }
    }
  }
  function fv(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null) {
      var r = a.updateQueue;
      if (n === r) {
        var i = null, u = null, o = n.firstBaseUpdate;
        if (o !== null) {
          var l = o;
          do {
            var c = {
              eventTime: l.eventTime,
              lane: l.lane,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null
            };
            u === null ? i = u = c : (u.next = c, u = c), l = l.next;
          } while (l !== null);
          u === null ? i = u = t : (u.next = t, u = t);
        } else
          i = u = t;
        n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: u,
          shared: r.shared,
          effects: r.effects
        }, e.updateQueue = n;
        return;
      }
    }
    var f = n.lastBaseUpdate;
    f === null ? n.firstBaseUpdate = t : f.next = t, n.lastBaseUpdate = t;
  }
  function ED(e, t, n, a, r, i) {
    switch (n.tag) {
      case zy: {
        var u = n.payload;
        if (typeof u == "function") {
          Ly();
          var o = u.call(i, a, r);
          {
            if (e.mode & ot) {
              jt(!0);
              try {
                u.call(i, a, r);
              } finally {
                jt(!1);
              }
            }
            Ay();
          }
          return o;
        }
        return u;
      }
      case lv:
        e.flags = e.flags & ~vn | Le;
      case Ny: {
        var l = n.payload, c;
        if (typeof l == "function") {
          Ly(), c = l.call(i, a, r);
          {
            if (e.mode & ot) {
              jt(!0);
              try {
                l.call(i, a, r);
              } finally {
                jt(!1);
              }
            }
            Ay();
          }
        } else
          c = l;
        return c == null ? a : he({}, a, c);
      }
      case Zs:
        return ec = !0, a;
    }
    return a;
  }
  function ac(e, t, n, a) {
    var r = e.updateQueue;
    ec = !1, tc = r.shared;
    var i = r.firstBaseUpdate, u = r.lastBaseUpdate, o = r.shared.pending;
    if (o !== null) {
      r.shared.pending = null;
      var l = o, c = l.next;
      l.next = null, u === null ? i = c : u.next = c, u = l;
      var f = e.alternate;
      if (f !== null) {
        var m = f.updateQueue, h = m.lastBaseUpdate;
        h !== u && (h === null ? m.firstBaseUpdate = c : h.next = c, m.lastBaseUpdate = l);
      }
    }
    if (i !== null) {
      var b = r.baseState, C = D, R = null, N = null, Q = null, P = i;
      do {
        var Ce = P.lane, me = P.eventTime;
        if (su(a, Ce)) {
          if (Q !== null) {
            var T = {
              eventTime: me,
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: Ft,
              tag: P.tag,
              payload: P.payload,
              callback: P.callback,
              next: null
            };
            Q = Q.next = T;
          }
          b = ED(e, r, P, b, t, n);
          var g = P.callback;
          if (g !== null && // If the update was already committed, we should not queue its
            // callback again.
            P.lane !== Ft) {
            e.flags |= Rf;
            var O = r.effects;
            O === null ? r.effects = [P] : O.push(P);
          }
        } else {
          var y = {
            eventTime: me,
            lane: Ce,
            tag: P.tag,
            payload: P.payload,
            callback: P.callback,
            next: null
          };
          Q === null ? (N = Q = y, R = b) : Q = Q.next = y, C = ce(C, Ce);
        }
        if (P = P.next, P === null) {
          if (o = r.shared.pending, o === null)
            break;
          var F = o, z = F.next;
          F.next = null, P = z, r.lastBaseUpdate = F, r.shared.pending = null;
        }
      } while (!0);
      Q === null && (R = b), r.baseState = R, r.firstBaseUpdate = N, r.lastBaseUpdate = Q;
      var ee = r.shared.interleaved;
      if (ee !== null) {
        var re = ee;
        do
          C = ce(C, re.lane), re = re.next;
        while (re !== ee);
      } else i === null && (r.shared.lanes = D);
      Ml(C), e.lanes = C, e.memoizedState = b;
    }
    tc = null;
  }
  function RD(e, t) {
    if (typeof e != "function")
      throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
    e.call(t);
  }
  function jy() {
    ec = !1;
  }
  function rc() {
    return ec;
  }
  function Fy(e, t, n) {
    var a = t.effects;
    if (t.effects = null, a !== null)
      for (var r = 0; r < a.length; r++) {
        var i = a[r], u = i.callback;
        u !== null && (i.callback = null, RD(u, n));
      }
  }
  var rl = {}, Xr = Pr(rl), il = Pr(rl), ic = Pr(rl);
  function uc(e) {
    if (e === rl)
      throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
    return e;
  }
  function Vy() {
    var e = uc(ic.current);
    return e;
  }
  function dv(e, t) {
    on(ic, t, e), on(il, e, e), on(Xr, rl, e);
    var n = VT(t);
    un(Xr, e), on(Xr, n, e);
  }
  function _u(e) {
    un(Xr, e), un(il, e), un(ic, e);
  }
  function vv() {
    var e = uc(Xr.current);
    return e;
  }
  function By(e) {
    uc(ic.current);
    var t = uc(Xr.current), n = BT(t, e.type);
    t !== n && (on(il, e, e), on(Xr, n, e));
  }
  function pv(e) {
    il.current === e && (un(Xr, e), un(il, e));
  }
  var TD = 0, Yy = 1, $y = 1, ul = 2, Ta = Pr(TD);
  function hv(e, t) {
    return (e & t) !== 0;
  }
  function Ou(e) {
    return e & Yy;
  }
  function mv(e, t) {
    return e & Yy | t;
  }
  function xD(e, t) {
    return e | t;
  }
  function Kr(e, t) {
    on(Ta, t, e);
  }
  function wu(e) {
    un(Ta, e);
  }
  function DD(e, t) {
    var n = e.memoizedState;
    return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
  }
  function oc(e) {
    for (var t = e; t !== null;) {
      if (t.tag === ue) {
        var n = t.memoizedState;
        if (n !== null) {
          var a = n.dehydrated;
          if (a === null || uy(a) || kd(a))
            return t;
        }
      } else if (t.tag === Qe && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
        var r = (t.flags & Le) !== J;
        if (r)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e)
        return null;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var wn = (
    /*   */
    0
  ), xt = (
    /* */
    1
  ), $a = (
    /*  */
    2
  ), Dt = (
    /*    */
    4
  ), qt = (
    /*   */
    8
  ), yv = [];
  function gv() {
    for (var e = 0; e < yv.length; e++) {
      var t = yv[e];
      t._workInProgressVersionPrimary = null;
    }
    yv.length = 0;
  }
  function _D(e, t) {
    var n = t._getVersion, a = n(t._source);
    e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, a] : e.mutableSourceEagerHydrationData.push(t, a);
  }
  var j = fe.ReactCurrentDispatcher, ol = fe.ReactCurrentBatchConfig, bv, Mu;
  bv = /* @__PURE__ */ new Set();
  var ki = D, Fe = null, _t = null, Ot = null, lc = !1, ll = !1, sl = 0, OD = 0, wD = 25, x = null, oa = null, Ir = -1, Sv = !1;
  function Ae() {
    {
      var e = x;
      oa === null ? oa = [e] : oa.push(e);
    }
  }
  function U() {
    {
      var e = x;
      oa !== null && (Ir++, oa[Ir] !== e && MD(e));
    }
  }
  function Lu(e) {
    e != null && !Me(e) && d("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", x, typeof e);
  }
  function MD(e) {
    {
      var t = oe(Fe);
      if (!bv.has(t) && (bv.add(t), oa !== null)) {
        for (var n = "", a = 30, r = 0; r <= Ir; r++) {
          for (var i = oa[r], u = r === Ir ? e : i, o = r + 1 + ". " + i; o.length < a;)
            o += " ";
          o += u + `
`, n += o;
        }
        d(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, n);
      }
    }
  }
  function ln() {
    throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
  }
  function Cv(e, t) {
    if (Sv)
      return !1;
    if (t === null)
      return d("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", x), !1;
    e.length !== t.length && d(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, x, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Gn(e[n], t[n]))
        return !1;
    return !0;
  }
  function Au(e, t, n, a, r, i) {
    ki = i, Fe = t, oa = e !== null ? e._debugHookTypes : null, Ir = -1, Sv = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = D, e !== null && e.memoizedState !== null ? j.current = fg : oa !== null ? j.current = cg : j.current = sg;
    var u = n(a, r);
    if (ll) {
      var o = 0;
      do {
        if (ll = !1, sl = 0, o >= wD)
          throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        o += 1, Sv = !1, _t = null, Ot = null, t.updateQueue = null, Ir = -1, j.current = dg, u = n(a, r);
      } while (ll);
    }
    j.current = Cc, t._debugHookTypes = oa;
    var l = _t !== null && _t.next !== null;
    if (ki = D, Fe = null, _t = null, Ot = null, x = null, oa = null, Ir = -1, e !== null && (e.flags & cr) !== (t.flags & cr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & be) !== X && d("Internal React error: Expected static flag was missing. Please notify the React team."), lc = !1, l)
      throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
    return u;
  }
  function Uu() {
    var e = sl !== 0;
    return sl = 0, e;
  }
  function Py(e, t, n) {
    t.updateQueue = e.updateQueue, (t.mode & Fa) !== X ? t.flags &= ~(ns | sr | ga | Re) : t.flags &= ~(ga | Re), e.lanes = ss(e.lanes, n);
  }
  function Gy() {
    if (j.current = Cc, lc) {
      for (var e = Fe.memoizedState; e !== null;) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      lc = !1;
    }
    ki = D, Fe = null, _t = null, Ot = null, oa = null, Ir = -1, x = null, rg = !1, ll = !1, sl = 0;
  }
  function Pa() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ot === null ? Fe.memoizedState = Ot = e : Ot = Ot.next = e, Ot;
  }
  function la() {
    var e;
    if (_t === null) {
      var t = Fe.alternate;
      t !== null ? e = t.memoizedState : e = null;
    } else
      e = _t.next;
    var n;
    if (Ot === null ? n = Fe.memoizedState : n = Ot.next, n !== null)
      Ot = n, n = Ot.next, _t = e;
    else {
      if (e === null)
        throw new Error("Rendered more hooks than during the previous render.");
      _t = e;
      var a = {
        memoizedState: _t.memoizedState,
        baseState: _t.baseState,
        baseQueue: _t.baseQueue,
        queue: _t.queue,
        next: null
      };
      Ot === null ? Fe.memoizedState = Ot = a : Ot = Ot.next = a;
    }
    return Ot;
  }
  function qy() {
    return {
      lastEffect: null,
      stores: null
    };
  }
  function Ev(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Rv(e, t, n) {
    var a = Pa(), r;
    n !== void 0 ? r = n(t) : r = t, a.memoizedState = a.baseState = r;
    var i = {
      pending: null,
      interleaved: null,
      lanes: D,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: r
    };
    a.queue = i;
    var u = i.dispatch = kD.bind(null, Fe, i);
    return [a.memoizedState, u];
  }
  function Tv(e, t, n) {
    var a = la(), r = a.queue;
    if (r === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    r.lastRenderedReducer = e;
    var i = _t, u = i.baseQueue, o = r.pending;
    if (o !== null) {
      if (u !== null) {
        var l = u.next, c = o.next;
        u.next = c, o.next = l;
      }
      i.baseQueue !== u && d("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), i.baseQueue = u = o, r.pending = null;
    }
    if (u !== null) {
      var f = u.next, m = i.baseState, h = null, b = null, C = null, R = f;
      do {
        var N = R.lane;
        if (su(ki, N)) {
          if (C !== null) {
            var P = {
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: Ft,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            };
            C = C.next = P;
          }
          if (R.hasEagerState)
            m = R.eagerState;
          else {
            var Ce = R.action;
            m = e(m, Ce);
          }
        } else {
          var Q = {
            lane: N,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          };
          C === null ? (b = C = Q, h = m) : C = C.next = Q, Fe.lanes = ce(Fe.lanes, N), Ml(N);
        }
        R = R.next;
      } while (R !== null && R !== f);
      C === null ? h = m : C.next = b, Gn(m, a.memoizedState) || gl(), a.memoizedState = m, a.baseState = h, a.baseQueue = C, r.lastRenderedState = m;
    }
    var me = r.interleaved;
    if (me !== null) {
      var y = me;
      do {
        var T = y.lane;
        Fe.lanes = ce(Fe.lanes, T), Ml(T), y = y.next;
      } while (y !== me);
    } else u === null && (r.lanes = D);
    var g = r.dispatch;
    return [a.memoizedState, g];
  }
  function xv(e, t, n) {
    var a = la(), r = a.queue;
    if (r === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    r.lastRenderedReducer = e;
    var i = r.dispatch, u = r.pending, o = a.memoizedState;
    if (u !== null) {
      r.pending = null;
      var l = u.next, c = l;
      do {
        var f = c.action;
        o = e(o, f), c = c.next;
      } while (c !== l);
      Gn(o, a.memoizedState) || gl(), a.memoizedState = o, a.baseQueue === null && (a.baseState = o), r.lastRenderedState = o;
    }
    return [o, i];
  }
  function lw(e, t, n) {
  }
  function sw(e, t, n) {
  }
  function Dv(e, t, n) {
    var a = Fe, r = Pa(), i, u = Gt();
    if (u) {
      if (n === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      i = n(), Mu || i !== n() && (d("The result of getServerSnapshot should be cached to avoid an infinite loop"), Mu = !0);
    } else {
      if (i = t(), !Mu) {
        var o = t();
        Gn(i, o) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), Mu = !0);
      }
      var l = Vc();
      if (l === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      ls(l, ki) || Qy(a, t, i);
    }
    r.memoizedState = i;
    var c = {
      value: i,
      getSnapshot: t
    };
    return r.queue = c, vc(Xy.bind(null, a, c, e), [e]), a.flags |= ga, cl(xt | qt, Wy.bind(null, a, c, i, t), void 0, null), i;
  }
  function sc(e, t, n) {
    var a = Fe, r = la(), i = t();
    if (!Mu) {
      var u = t();
      Gn(i, u) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), Mu = !0);
    }
    var o = r.memoizedState, l = !Gn(o, i);
    l && (r.memoizedState = i, gl());
    var c = r.queue;
    if (dl(Xy.bind(null, a, c, e), [e]), c.getSnapshot !== t || l || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Ot !== null && Ot.memoizedState.tag & xt) {
      a.flags |= ga, cl(xt | qt, Wy.bind(null, a, c, i, t), void 0, null);
      var f = Vc();
      if (f === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      ls(f, ki) || Qy(a, t, i);
    }
    return i;
  }
  function Qy(e, t, n) {
    e.flags |= ts;
    var a = {
      getSnapshot: t,
      value: n
    }, r = Fe.updateQueue;
    if (r === null)
      r = qy(), Fe.updateQueue = r, r.stores = [a];
    else {
      var i = r.stores;
      i === null ? r.stores = [a] : i.push(a);
    }
  }
  function Wy(e, t, n, a) {
    t.value = n, t.getSnapshot = a, Ky(t) && Iy(e);
  }
  function Xy(e, t, n) {
    var a = function () {
      Ky(t) && Iy(e);
    };
    return n(a);
  }
  function Ky(e) {
    var t = e.getSnapshot, n = e.value;
    try {
      var a = t();
      return !Gn(n, a);
    } catch {
      return !0;
    }
  }
  function Iy(e) {
    var t = On(e, ne);
    t !== null && At(t, e, ne, Xe);
  }
  function cc(e) {
    var t = Pa();
    typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
    var n = {
      pending: null,
      interleaved: null,
      lanes: D,
      dispatch: null,
      lastRenderedReducer: Ev,
      lastRenderedState: e
    };
    t.queue = n;
    var a = n.dispatch = ND.bind(null, Fe, n);
    return [t.memoizedState, a];
  }
  function _v(e) {
    return Tv(Ev);
  }
  function Ov(e) {
    return xv(Ev);
  }
  function cl(e, t, n, a) {
    var r = {
      tag: e,
      create: t,
      destroy: n,
      deps: a,
      // Circular
      next: null
    }, i = Fe.updateQueue;
    if (i === null)
      i = qy(), Fe.updateQueue = i, i.lastEffect = r.next = r;
    else {
      var u = i.lastEffect;
      if (u === null)
        i.lastEffect = r.next = r;
      else {
        var o = u.next;
        u.next = r, r.next = o, i.lastEffect = r;
      }
    }
    return r;
  }
  function wv(e) {
    var t = Pa();
    {
      var n = {
        current: e
      };
      return t.memoizedState = n, n;
    }
  }
  function fc(e) {
    var t = la();
    return t.memoizedState;
  }
  function fl(e, t, n, a) {
    var r = Pa(), i = a === void 0 ? null : a;
    Fe.flags |= e, r.memoizedState = cl(xt | t, n, void 0, i);
  }
  function dc(e, t, n, a) {
    var r = la(), i = a === void 0 ? null : a, u = void 0;
    if (_t !== null) {
      var o = _t.memoizedState;
      if (u = o.destroy, i !== null) {
        var l = o.deps;
        if (Cv(i, l)) {
          r.memoizedState = cl(t, n, u, i);
          return;
        }
      }
    }
    Fe.flags |= e, r.memoizedState = cl(xt | t, n, u, i);
  }
  function vc(e, t) {
    return (Fe.mode & Fa) !== X ? fl(ns | ga | Df, qt, e, t) : fl(ga | Df, qt, e, t);
  }
  function dl(e, t) {
    return dc(ga, qt, e, t);
  }
  function Mv(e, t) {
    return fl(Re, $a, e, t);
  }
  function pc(e, t) {
    return dc(Re, $a, e, t);
  }
  function Lv(e, t) {
    var n = Re;
    return n |= yi, (Fe.mode & Fa) !== X && (n |= sr), fl(n, Dt, e, t);
  }
  function hc(e, t) {
    return dc(Re, Dt, e, t);
  }
  function Jy(e, t) {
    if (typeof t == "function") {
      var n = t, a = e();
      return n(a), function () {
        n(null);
      };
    } else if (t != null) {
      var r = t;
      r.hasOwnProperty("current") || d("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(r).join(", ") + "}");
      var i = e();
      return r.current = i, function () {
        r.current = null;
      };
    }
  }
  function Av(e, t, n) {
    typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var a = n != null ? n.concat([e]) : null, r = Re;
    return r |= yi, (Fe.mode & Fa) !== X && (r |= sr), fl(r, Dt, Jy.bind(null, t, e), a);
  }
  function mc(e, t, n) {
    typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var a = n != null ? n.concat([e]) : null;
    return dc(Re, Dt, Jy.bind(null, t, e), a);
  }
  function LD(e, t) {
  }
  var yc = LD;
  function Uv(e, t) {
    var n = Pa(), a = t === void 0 ? null : t;
    return n.memoizedState = [e, a], e;
  }
  function gc(e, t) {
    var n = la(), a = t === void 0 ? null : t, r = n.memoizedState;
    if (r !== null && a !== null) {
      var i = r[1];
      if (Cv(a, i))
        return r[0];
    }
    return n.memoizedState = [e, a], e;
  }
  function kv(e, t) {
    var n = Pa(), a = t === void 0 ? null : t, r = e();
    return n.memoizedState = [r, a], r;
  }
  function bc(e, t) {
    var n = la(), a = t === void 0 ? null : t, r = n.memoizedState;
    if (r !== null && a !== null) {
      var i = r[1];
      if (Cv(a, i))
        return r[0];
    }
    var u = e();
    return n.memoizedState = [u, a], u;
  }
  function Nv(e) {
    var t = Pa();
    return t.memoizedState = e, e;
  }
  function Zy(e) {
    var t = la(), n = _t, a = n.memoizedState;
    return tg(t, a, e);
  }
  function eg(e) {
    var t = la();
    if (_t === null)
      return t.memoizedState = e, e;
    var n = _t.memoizedState;
    return tg(t, n, e);
  }
  function tg(e, t, n) {
    var a = !mE(ki);
    if (a) {
      if (!Gn(n, t)) {
        var r = Ih();
        Fe.lanes = ce(Fe.lanes, r), Ml(r), e.baseState = !0;
      }
      return t;
    } else
      return e.baseState && (e.baseState = !1, gl()), e.memoizedState = n, n;
  }
  function AD(e, t, n) {
    var a = Sa();
    Vt(xE(a, dr)), e(!0);
    var r = ol.transition;
    ol.transition = {};
    var i = ol.transition;
    ol.transition._updatedFibers = /* @__PURE__ */ new Set();
    try {
      e(!1), t();
    } finally {
      if (Vt(a), ol.transition = r, r === null && i._updatedFibers) {
        var u = i._updatedFibers.size;
        u > 10 && ke("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), i._updatedFibers.clear();
      }
    }
  }
  function zv() {
    var e = cc(!1), t = e[0], n = e[1], a = AD.bind(null, n), r = Pa();
    return r.memoizedState = a, [t, a];
  }
  function ng() {
    var e = _v(), t = e[0], n = la(), a = n.memoizedState;
    return [t, a];
  }
  function ag() {
    var e = Ov(), t = e[0], n = la(), a = n.memoizedState;
    return [t, a];
  }
  var rg = !1;
  function UD() {
    return rg;
  }
  function Hv() {
    var e = Pa(), t = Vc(), n = t.identifierPrefix, a;
    if (Gt()) {
      var r = Kx();
      a = ":" + n + "R" + r;
      var i = sl++;
      i > 0 && (a += "H" + i.toString(32)), a += ":";
    } else {
      var u = OD++;
      a = ":" + n + "r" + u.toString(32) + ":";
    }
    return e.memoizedState = a, a;
  }
  function Sc() {
    var e = la(), t = e.memoizedState;
    return t;
  }
  function kD(e, t, n) {
    typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var a = ni(e), r = {
      lane: a,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ig(e))
      ug(t, r);
    else {
      var i = ky(e, t, r, a);
      if (i !== null) {
        var u = mn();
        At(i, e, a, u), og(i, t, a);
      }
    }
    lg(e, a);
  }
  function ND(e, t, n) {
    typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var a = ni(e), r = {
      lane: a,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ig(e))
      ug(t, r);
    else {
      var i = e.alternate;
      if (e.lanes === D && (i === null || i.lanes === D)) {
        var u = t.lastRenderedReducer;
        if (u !== null) {
          var o;
          o = j.current, j.current = xa;
          try {
            var l = t.lastRenderedState, c = u(l, n);
            if (r.hasEagerState = !0, r.eagerState = c, Gn(c, l)) {
              bD(e, t, r, a);
              return;
            }
          } catch {
          } finally {
            j.current = o;
          }
        }
      }
      var f = ky(e, t, r, a);
      if (f !== null) {
        var m = mn();
        At(f, e, a, m), og(f, t, a);
      }
    }
    lg(e, a);
  }
  function ig(e) {
    var t = e.alternate;
    return e === Fe || t !== null && t === Fe;
  }
  function ug(e, t) {
    ll = lc = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function og(e, t, n) {
    if (Kh(n)) {
      var a = t.lanes;
      a = Jh(a, e.pendingLanes);
      var r = ce(a, n);
      t.lanes = r, nd(e, r);
    }
  }
  function lg(e, t, n) {
    Lf(e, t);
  }
  var Cc = {
    readContext: bt,
    useCallback: ln,
    useContext: ln,
    useEffect: ln,
    useImperativeHandle: ln,
    useInsertionEffect: ln,
    useLayoutEffect: ln,
    useMemo: ln,
    useReducer: ln,
    useRef: ln,
    useState: ln,
    useDebugValue: ln,
    useDeferredValue: ln,
    useTransition: ln,
    useMutableSource: ln,
    useSyncExternalStore: ln,
    useId: ln,
    unstable_isNewReconciler: Yt
  }, sg = null, cg = null, fg = null, dg = null, Ga = null, xa = null, Ec = null;
  {
    var jv = function () {
      d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    }, ae = function () {
      d("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
    };
    sg = {
      readContext: function (e) {
        return bt(e);
      },
      useCallback: function (e, t) {
        return x = "useCallback", Ae(), Lu(t), Uv(e, t);
      },
      useContext: function (e) {
        return x = "useContext", Ae(), bt(e);
      },
      useEffect: function (e, t) {
        return x = "useEffect", Ae(), Lu(t), vc(e, t);
      },
      useImperativeHandle: function (e, t, n) {
        return x = "useImperativeHandle", Ae(), Lu(n), Av(e, t, n);
      },
      useInsertionEffect: function (e, t) {
        return x = "useInsertionEffect", Ae(), Lu(t), Mv(e, t);
      },
      useLayoutEffect: function (e, t) {
        return x = "useLayoutEffect", Ae(), Lu(t), Lv(e, t);
      },
      useMemo: function (e, t) {
        x = "useMemo", Ae(), Lu(t);
        var n = j.current;
        j.current = Ga;
        try {
          return kv(e, t);
        } finally {
          j.current = n;
        }
      },
      useReducer: function (e, t, n) {
        x = "useReducer", Ae();
        var a = j.current;
        j.current = Ga;
        try {
          return Rv(e, t, n);
        } finally {
          j.current = a;
        }
      },
      useRef: function (e) {
        return x = "useRef", Ae(), wv(e);
      },
      useState: function (e) {
        x = "useState", Ae();
        var t = j.current;
        j.current = Ga;
        try {
          return cc(e);
        } finally {
          j.current = t;
        }
      },
      useDebugValue: function (e, t) {
        return x = "useDebugValue", Ae(), void 0;
      },
      useDeferredValue: function (e) {
        return x = "useDeferredValue", Ae(), Nv(e);
      },
      useTransition: function () {
        return x = "useTransition", Ae(), zv();
      },
      useMutableSource: function (e, t, n) {
        return x = "useMutableSource", Ae(), void 0;
      },
      useSyncExternalStore: function (e, t, n) {
        return x = "useSyncExternalStore", Ae(), Dv(e, t, n);
      },
      useId: function () {
        return x = "useId", Ae(), Hv();
      },
      unstable_isNewReconciler: Yt
    }, cg = {
      readContext: function (e) {
        return bt(e);
      },
      useCallback: function (e, t) {
        return x = "useCallback", U(), Uv(e, t);
      },
      useContext: function (e) {
        return x = "useContext", U(), bt(e);
      },
      useEffect: function (e, t) {
        return x = "useEffect", U(), vc(e, t);
      },
      useImperativeHandle: function (e, t, n) {
        return x = "useImperativeHandle", U(), Av(e, t, n);
      },
      useInsertionEffect: function (e, t) {
        return x = "useInsertionEffect", U(), Mv(e, t);
      },
      useLayoutEffect: function (e, t) {
        return x = "useLayoutEffect", U(), Lv(e, t);
      },
      useMemo: function (e, t) {
        x = "useMemo", U();
        var n = j.current;
        j.current = Ga;
        try {
          return kv(e, t);
        } finally {
          j.current = n;
        }
      },
      useReducer: function (e, t, n) {
        x = "useReducer", U();
        var a = j.current;
        j.current = Ga;
        try {
          return Rv(e, t, n);
        } finally {
          j.current = a;
        }
      },
      useRef: function (e) {
        return x = "useRef", U(), wv(e);
      },
      useState: function (e) {
        x = "useState", U();
        var t = j.current;
        j.current = Ga;
        try {
          return cc(e);
        } finally {
          j.current = t;
        }
      },
      useDebugValue: function (e, t) {
        return x = "useDebugValue", U(), void 0;
      },
      useDeferredValue: function (e) {
        return x = "useDeferredValue", U(), Nv(e);
      },
      useTransition: function () {
        return x = "useTransition", U(), zv();
      },
      useMutableSource: function (e, t, n) {
        return x = "useMutableSource", U(), void 0;
      },
      useSyncExternalStore: function (e, t, n) {
        return x = "useSyncExternalStore", U(), Dv(e, t, n);
      },
      useId: function () {
        return x = "useId", U(), Hv();
      },
      unstable_isNewReconciler: Yt
    }, fg = {
      readContext: function (e) {
        return bt(e);
      },
      useCallback: function (e, t) {
        return x = "useCallback", U(), gc(e, t);
      },
      useContext: function (e) {
        return x = "useContext", U(), bt(e);
      },
      useEffect: function (e, t) {
        return x = "useEffect", U(), dl(e, t);
      },
      useImperativeHandle: function (e, t, n) {
        return x = "useImperativeHandle", U(), mc(e, t, n);
      },
      useInsertionEffect: function (e, t) {
        return x = "useInsertionEffect", U(), pc(e, t);
      },
      useLayoutEffect: function (e, t) {
        return x = "useLayoutEffect", U(), hc(e, t);
      },
      useMemo: function (e, t) {
        x = "useMemo", U();
        var n = j.current;
        j.current = xa;
        try {
          return bc(e, t);
        } finally {
          j.current = n;
        }
      },
      useReducer: function (e, t, n) {
        x = "useReducer", U();
        var a = j.current;
        j.current = xa;
        try {
          return Tv(e, t, n);
        } finally {
          j.current = a;
        }
      },
      useRef: function (e) {
        return x = "useRef", U(), fc();
      },
      useState: function (e) {
        x = "useState", U();
        var t = j.current;
        j.current = xa;
        try {
          return _v(e);
        } finally {
          j.current = t;
        }
      },
      useDebugValue: function (e, t) {
        return x = "useDebugValue", U(), yc();
      },
      useDeferredValue: function (e) {
        return x = "useDeferredValue", U(), Zy(e);
      },
      useTransition: function () {
        return x = "useTransition", U(), ng();
      },
      useMutableSource: function (e, t, n) {
        return x = "useMutableSource", U(), void 0;
      },
      useSyncExternalStore: function (e, t, n) {
        return x = "useSyncExternalStore", U(), sc(e, t);
      },
      useId: function () {
        return x = "useId", U(), Sc();
      },
      unstable_isNewReconciler: Yt
    }, dg = {
      readContext: function (e) {
        return bt(e);
      },
      useCallback: function (e, t) {
        return x = "useCallback", U(), gc(e, t);
      },
      useContext: function (e) {
        return x = "useContext", U(), bt(e);
      },
      useEffect: function (e, t) {
        return x = "useEffect", U(), dl(e, t);
      },
      useImperativeHandle: function (e, t, n) {
        return x = "useImperativeHandle", U(), mc(e, t, n);
      },
      useInsertionEffect: function (e, t) {
        return x = "useInsertionEffect", U(), pc(e, t);
      },
      useLayoutEffect: function (e, t) {
        return x = "useLayoutEffect", U(), hc(e, t);
      },
      useMemo: function (e, t) {
        x = "useMemo", U();
        var n = j.current;
        j.current = Ec;
        try {
          return bc(e, t);
        } finally {
          j.current = n;
        }
      },
      useReducer: function (e, t, n) {
        x = "useReducer", U();
        var a = j.current;
        j.current = Ec;
        try {
          return xv(e, t, n);
        } finally {
          j.current = a;
        }
      },
      useRef: function (e) {
        return x = "useRef", U(), fc();
      },
      useState: function (e) {
        x = "useState", U();
        var t = j.current;
        j.current = Ec;
        try {
          return Ov(e);
        } finally {
          j.current = t;
        }
      },
      useDebugValue: function (e, t) {
        return x = "useDebugValue", U(), yc();
      },
      useDeferredValue: function (e) {
        return x = "useDeferredValue", U(), eg(e);
      },
      useTransition: function () {
        return x = "useTransition", U(), ag();
      },
      useMutableSource: function (e, t, n) {
        return x = "useMutableSource", U(), void 0;
      },
      useSyncExternalStore: function (e, t, n) {
        return x = "useSyncExternalStore", U(), sc(e, t);
      },
      useId: function () {
        return x = "useId", U(), Sc();
      },
      unstable_isNewReconciler: Yt
    }, Ga = {
      readContext: function (e) {
        return jv(), bt(e);
      },
      useCallback: function (e, t) {
        return x = "useCallback", ae(), Ae(), Uv(e, t);
      },
      useContext: function (e) {
        return x = "useContext", ae(), Ae(), bt(e);
      },
      useEffect: function (e, t) {
        return x = "useEffect", ae(), Ae(), vc(e, t);
      },
      useImperativeHandle: function (e, t, n) {
        return x = "useImperativeHandle", ae(), Ae(), Av(e, t, n);
      },
      useInsertionEffect: function (e, t) {
        return x = "useInsertionEffect", ae(), Ae(), Mv(e, t);
      },
      useLayoutEffect: function (e, t) {
        return x = "useLayoutEffect", ae(), Ae(), Lv(e, t);
      },
      useMemo: function (e, t) {
        x = "useMemo", ae(), Ae();
        var n = j.current;
        j.current = Ga;
        try {
          return kv(e, t);
        } finally {
          j.current = n;
        }
      },
      useReducer: function (e, t, n) {
        x = "useReducer", ae(), Ae();
        var a = j.current;
        j.current = Ga;
        try {
          return Rv(e, t, n);
        } finally {
          j.current = a;
        }
      },
      useRef: function (e) {
        return x = "useRef", ae(), Ae(), wv(e);
      },
      useState: function (e) {
        x = "useState", ae(), Ae();
        var t = j.current;
        j.current = Ga;
        try {
          return cc(e);
        } finally {
          j.current = t;
        }
      },
      useDebugValue: function (e, t) {
        return x = "useDebugValue", ae(), Ae(), void 0;
      },
      useDeferredValue: function (e) {
        return x = "useDeferredValue", ae(), Ae(), Nv(e);
      },
      useTransition: function () {
        return x = "useTransition", ae(), Ae(), zv();
      },
      useMutableSource: function (e, t, n) {
        return x = "useMutableSource", ae(), Ae(), void 0;
      },
      useSyncExternalStore: function (e, t, n) {
        return x = "useSyncExternalStore", ae(), Ae(), Dv(e, t, n);
      },
      useId: function () {
        return x = "useId", ae(), Ae(), Hv();
      },
      unstable_isNewReconciler: Yt
    }, xa = {
      readContext: function (e) {
        return jv(), bt(e);
      },
      useCallback: function (e, t) {
        return x = "useCallback", ae(), U(), gc(e, t);
      },
      useContext: function (e) {
        return x = "useContext", ae(), U(), bt(e);
      },
      useEffect: function (e, t) {
        return x = "useEffect", ae(), U(), dl(e, t);
      },
      useImperativeHandle: function (e, t, n) {
        return x = "useImperativeHandle", ae(), U(), mc(e, t, n);
      },
      useInsertionEffect: function (e, t) {
        return x = "useInsertionEffect", ae(), U(), pc(e, t);
      },
      useLayoutEffect: function (e, t) {
        return x = "useLayoutEffect", ae(), U(), hc(e, t);
      },
      useMemo: function (e, t) {
        x = "useMemo", ae(), U();
        var n = j.current;
        j.current = xa;
        try {
          return bc(e, t);
        } finally {
          j.current = n;
        }
      },
      useReducer: function (e, t, n) {
        x = "useReducer", ae(), U();
        var a = j.current;
        j.current = xa;
        try {
          return Tv(e, t, n);
        } finally {
          j.current = a;
        }
      },
      useRef: function (e) {
        return x = "useRef", ae(), U(), fc();
      },
      useState: function (e) {
        x = "useState", ae(), U();
        var t = j.current;
        j.current = xa;
        try {
          return _v(e);
        } finally {
          j.current = t;
        }
      },
      useDebugValue: function (e, t) {
        return x = "useDebugValue", ae(), U(), yc();
      },
      useDeferredValue: function (e) {
        return x = "useDeferredValue", ae(), U(), Zy(e);
      },
      useTransition: function () {
        return x = "useTransition", ae(), U(), ng();
      },
      useMutableSource: function (e, t, n) {
        return x = "useMutableSource", ae(), U(), void 0;
      },
      useSyncExternalStore: function (e, t, n) {
        return x = "useSyncExternalStore", ae(), U(), sc(e, t);
      },
      useId: function () {
        return x = "useId", ae(), U(), Sc();
      },
      unstable_isNewReconciler: Yt
    }, Ec = {
      readContext: function (e) {
        return jv(), bt(e);
      },
      useCallback: function (e, t) {
        return x = "useCallback", ae(), U(), gc(e, t);
      },
      useContext: function (e) {
        return x = "useContext", ae(), U(), bt(e);
      },
      useEffect: function (e, t) {
        return x = "useEffect", ae(), U(), dl(e, t);
      },
      useImperativeHandle: function (e, t, n) {
        return x = "useImperativeHandle", ae(), U(), mc(e, t, n);
      },
      useInsertionEffect: function (e, t) {
        return x = "useInsertionEffect", ae(), U(), pc(e, t);
      },
      useLayoutEffect: function (e, t) {
        return x = "useLayoutEffect", ae(), U(), hc(e, t);
      },
      useMemo: function (e, t) {
        x = "useMemo", ae(), U();
        var n = j.current;
        j.current = xa;
        try {
          return bc(e, t);
        } finally {
          j.current = n;
        }
      },
      useReducer: function (e, t, n) {
        x = "useReducer", ae(), U();
        var a = j.current;
        j.current = xa;
        try {
          return xv(e, t, n);
        } finally {
          j.current = a;
        }
      },
      useRef: function (e) {
        return x = "useRef", ae(), U(), fc();
      },
      useState: function (e) {
        x = "useState", ae(), U();
        var t = j.current;
        j.current = xa;
        try {
          return Ov(e);
        } finally {
          j.current = t;
        }
      },
      useDebugValue: function (e, t) {
        return x = "useDebugValue", ae(), U(), yc();
      },
      useDeferredValue: function (e) {
        return x = "useDeferredValue", ae(), U(), eg(e);
      },
      useTransition: function () {
        return x = "useTransition", ae(), U(), ag();
      },
      useMutableSource: function (e, t, n) {
        return x = "useMutableSource", ae(), U(), void 0;
      },
      useSyncExternalStore: function (e, t, n) {
        return x = "useSyncExternalStore", ae(), U(), sc(e, t);
      },
      useId: function () {
        return x = "useId", ae(), U(), Sc();
      },
      unstable_isNewReconciler: Yt
    };
  }
  var Jr = M.unstable_now, vg = 0, Rc = -1, vl = -1, Tc = -1, Fv = !1, xc = !1;
  function pg() {
    return Fv;
  }
  function zD() {
    xc = !0;
  }
  function HD() {
    Fv = !1, xc = !1;
  }
  function jD() {
    Fv = xc, xc = !1;
  }
  function hg() {
    return vg;
  }
  function mg() {
    vg = Jr();
  }
  function Vv(e) {
    vl = Jr(), e.actualStartTime < 0 && (e.actualStartTime = Jr());
  }
  function yg(e) {
    vl = -1;
  }
  function Dc(e, t) {
    if (vl >= 0) {
      var n = Jr() - vl;
      e.actualDuration += n, t && (e.selfBaseDuration = n), vl = -1;
    }
  }
  function qa(e) {
    if (Rc >= 0) {
      var t = Jr() - Rc;
      Rc = -1;
      for (var n = e.return; n !== null;) {
        switch (n.tag) {
          case B:
            var a = n.stateNode;
            a.effectDuration += t;
            return;
          case it:
            var r = n.stateNode;
            r.effectDuration += t;
            return;
        }
        n = n.return;
      }
    }
  }
  function Bv(e) {
    if (Tc >= 0) {
      var t = Jr() - Tc;
      Tc = -1;
      for (var n = e.return; n !== null;) {
        switch (n.tag) {
          case B:
            var a = n.stateNode;
            a !== null && (a.passiveEffectDuration += t);
            return;
          case it:
            var r = n.stateNode;
            r !== null && (r.passiveEffectDuration += t);
            return;
        }
        n = n.return;
      }
    }
  }
  function Qa() {
    Rc = Jr();
  }
  function Yv() {
    Tc = Jr();
  }
  function $v(e) {
    for (var t = e.child; t;)
      e.actualDuration += t.actualDuration, t = t.sibling;
  }
  function Da(e, t) {
    if (e && e.defaultProps) {
      var n = he({}, t), a = e.defaultProps;
      for (var r in a)
        n[r] === void 0 && (n[r] = a[r]);
      return n;
    }
    return t;
  }
  var Pv = {}, Gv, qv, Qv, Wv, Xv, gg, _c, Kv, Iv, Jv, pl;
  {
    Gv = /* @__PURE__ */ new Set(), qv = /* @__PURE__ */ new Set(), Qv = /* @__PURE__ */ new Set(), Wv = /* @__PURE__ */ new Set(), Kv = /* @__PURE__ */ new Set(), Xv = /* @__PURE__ */ new Set(), Iv = /* @__PURE__ */ new Set(), Jv = /* @__PURE__ */ new Set(), pl = /* @__PURE__ */ new Set();
    var bg = /* @__PURE__ */ new Set();
    _c = function (e, t) {
      if (!(e === null || typeof e == "function")) {
        var n = t + "_" + e;
        bg.has(n) || (bg.add(n), d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
      }
    }, gg = function (e, t) {
      if (t === void 0) {
        var n = De(e) || "Component";
        Xv.has(n) || (Xv.add(n), d("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
      }
    }, Object.defineProperty(Pv, "_processChildContext", {
      enumerable: !1,
      value: function () {
        throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
      }
    }), Object.freeze(Pv);
  }
  function Zv(e, t, n, a) {
    var r = e.memoizedState, i = n(a, r);
    {
      if (e.mode & ot) {
        jt(!0);
        try {
          i = n(a, r);
        } finally {
          jt(!1);
        }
      }
      gg(t, i);
    }
    var u = i == null ? r : he({}, r, i);
    if (e.memoizedState = u, e.lanes === D) {
      var o = e.updateQueue;
      o.baseState = u;
    }
  }
  var ep = {
    isMounted: wC,
    enqueueSetState: function (e, t, n) {
      var a = tu(e), r = mn(), i = ni(a), u = br(r, i);
      u.payload = t, n != null && (_c(n, "setState"), u.callback = n);
      var o = Wr(a, u, i);
      o !== null && (At(o, a, i, r), nc(o, a, i)), Lf(a, i);
    },
    enqueueReplaceState: function (e, t, n) {
      var a = tu(e), r = mn(), i = ni(a), u = br(r, i);
      u.tag = zy, u.payload = t, n != null && (_c(n, "replaceState"), u.callback = n);
      var o = Wr(a, u, i);
      o !== null && (At(o, a, i, r), nc(o, a, i)), Lf(a, i);
    },
    enqueueForceUpdate: function (e, t) {
      var n = tu(e), a = mn(), r = ni(n), i = br(a, r);
      i.tag = Zs, t != null && (_c(t, "forceUpdate"), i.callback = t);
      var u = Wr(n, i, r);
      u !== null && (At(u, n, r, a), nc(u, n, r)), uE(n, r);
    }
  };
  function Sg(e, t, n, a, r, i, u) {
    var o = e.stateNode;
    if (typeof o.shouldComponentUpdate == "function") {
      var l = o.shouldComponentUpdate(a, i, u);
      {
        if (e.mode & ot) {
          jt(!0);
          try {
            l = o.shouldComponentUpdate(a, i, u);
          } finally {
            jt(!1);
          }
        }
        l === void 0 && d("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", De(t) || "Component");
      }
      return l;
    }
    return t.prototype && t.prototype.isPureReactComponent ? !zo(n, a) || !zo(r, i) : !0;
  }
  function FD(e, t, n) {
    var a = e.stateNode;
    {
      var r = De(t) || "Component", i = a.render;
      i || (t.prototype && typeof t.prototype.render == "function" ? d("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", r) : d("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", r)), a.getInitialState && !a.getInitialState.isReactClassApproved && !a.state && d("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", r), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && d("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", r), a.propTypes && d("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", r), a.contextType && d("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", r), t.childContextTypes && !pl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ot) === X && (pl.add(t), d(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, r)), t.contextTypes && !pl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ot) === X && (pl.add(t), d(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, r)), a.contextTypes && d("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", r), t.contextType && t.contextTypes && !Iv.has(t) && (Iv.add(t), d("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", r)), typeof a.componentShouldUpdate == "function" && d("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", r), t.prototype && t.prototype.isPureReactComponent && typeof a.shouldComponentUpdate < "u" && d("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", De(t) || "A pure component"), typeof a.componentDidUnmount == "function" && d("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", r), typeof a.componentDidReceiveProps == "function" && d("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", r), typeof a.componentWillRecieveProps == "function" && d("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", r), typeof a.UNSAFE_componentWillRecieveProps == "function" && d("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", r);
      var u = a.props !== n;
      a.props !== void 0 && u && d("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", r, r), a.defaultProps && d("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", r, r), typeof a.getSnapshotBeforeUpdate == "function" && typeof a.componentDidUpdate != "function" && !Qv.has(t) && (Qv.add(t), d("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", De(t))), typeof a.getDerivedStateFromProps == "function" && d("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", r), typeof a.getDerivedStateFromError == "function" && d("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", r), typeof t.getSnapshotBeforeUpdate == "function" && d("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", r);
      var o = a.state;
      o && (typeof o != "object" || Me(o)) && d("%s.state: must be set to an object or null", r), typeof a.getChildContext == "function" && typeof t.childContextTypes != "object" && d("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", r);
    }
  }
  function Cg(e, t) {
    t.updater = ep, e.stateNode = t, TC(t, e), t._reactInternalInstance = Pv;
  }
  function Eg(e, t, n) {
    var a = !1, r = qn, i = qn, u = t.contextType;
    if ("contextType" in t) {
      var o = (
        // Allow null for conditional declaration
        u === null || u !== void 0 && u.$$typeof === _ && u._context === void 0
      );
      if (!o && !Jv.has(t)) {
        Jv.add(t);
        var l = "";
        u === void 0 ? l = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof u != "object" ? l = " However, it is set to a " + typeof u + "." : u.$$typeof === p ? l = " Did you accidentally pass the Context.Provider instead?" : u._context !== void 0 ? l = " Did you accidentally pass the Context.Consumer instead?" : l = " However, it is set to an object with keys {" + Object.keys(u).join(", ") + "}.", d("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", De(t) || "Component", l);
      }
    }
    if (typeof u == "object" && u !== null)
      i = bt(u);
    else {
      r = bu(e, t, !0);
      var c = t.contextTypes;
      a = c != null, i = a ? Su(e, r) : qn;
    }
    var f = new t(n, i);
    if (e.mode & ot) {
      jt(!0);
      try {
        f = new t(n, i);
      } finally {
        jt(!1);
      }
    }
    var m = e.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null;
    Cg(e, f);
    {
      if (typeof t.getDerivedStateFromProps == "function" && m === null) {
        var h = De(t) || "Component";
        qv.has(h) || (qv.add(h), d("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", h, f.state === null ? "null" : "undefined", h));
      }
      if (typeof t.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
        var b = null, C = null, R = null;
        if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? b = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (b = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? C = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (C = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? R = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (R = "UNSAFE_componentWillUpdate"), b !== null || C !== null || R !== null) {
          var N = De(t) || "Component", Q = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          Wv.has(N) || (Wv.add(N), d(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, N, Q, b !== null ? `
  ` + b : "", C !== null ? `
  ` + C : "", R !== null ? `
  ` + R : ""));
        }
      }
    }
    return a && fy(e, r, i), f;
  }
  function VD(e, t) {
    var n = t.state;
    typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (d("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", oe(e) || "Component"), ep.enqueueReplaceState(t, t.state, null));
  }
  function Rg(e, t, n, a) {
    var r = t.state;
    if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== r) {
      {
        var i = oe(e) || "Component";
        Gv.has(i) || (Gv.add(i), d("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", i));
      }
      ep.enqueueReplaceState(t, t.state, null);
    }
  }
  function tp(e, t, n, a) {
    FD(e, t, n);
    var r = e.stateNode;
    r.props = n, r.state = e.memoizedState, r.refs = {}, cv(e);
    var i = t.contextType;
    if (typeof i == "object" && i !== null)
      r.context = bt(i);
    else {
      var u = bu(e, t, !0);
      r.context = Su(e, u);
    }
    {
      if (r.state === n) {
        var o = De(t) || "Component";
        Kv.has(o) || (Kv.add(o), d("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", o));
      }
      e.mode & ot && Ra.recordLegacyContextWarning(e, r), Ra.recordUnsafeLifecycleWarnings(e, r);
    }
    r.state = e.memoizedState;
    var l = t.getDerivedStateFromProps;
    if (typeof l == "function" && (Zv(e, t, l, n), r.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function" && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function") && (VD(e, r), ac(e, n, r, a), r.state = e.memoizedState), typeof r.componentDidMount == "function") {
      var c = Re;
      c |= yi, (e.mode & Fa) !== X && (c |= sr), e.flags |= c;
    }
  }
  function BD(e, t, n, a) {
    var r = e.stateNode, i = e.memoizedProps;
    r.props = i;
    var u = r.context, o = t.contextType, l = qn;
    if (typeof o == "object" && o !== null)
      l = bt(o);
    else {
      var c = bu(e, t, !0);
      l = Su(e, c);
    }
    var f = t.getDerivedStateFromProps, m = typeof f == "function" || typeof r.getSnapshotBeforeUpdate == "function";
    !m && (typeof r.UNSAFE_componentWillReceiveProps == "function" || typeof r.componentWillReceiveProps == "function") && (i !== n || u !== l) && Rg(e, r, n, l), jy();
    var h = e.memoizedState, b = r.state = h;
    if (ac(e, n, r, a), b = e.memoizedState, i === n && h === b && !js() && !rc()) {
      if (typeof r.componentDidMount == "function") {
        var C = Re;
        C |= yi, (e.mode & Fa) !== X && (C |= sr), e.flags |= C;
      }
      return !1;
    }
    typeof f == "function" && (Zv(e, t, f, n), b = e.memoizedState);
    var R = rc() || Sg(e, t, i, n, h, b, l);
    if (R) {
      if (!m && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function") && (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function") {
        var N = Re;
        N |= yi, (e.mode & Fa) !== X && (N |= sr), e.flags |= N;
      }
    } else {
      if (typeof r.componentDidMount == "function") {
        var Q = Re;
        Q |= yi, (e.mode & Fa) !== X && (Q |= sr), e.flags |= Q;
      }
      e.memoizedProps = n, e.memoizedState = b;
    }
    return r.props = n, r.state = b, r.context = l, R;
  }
  function YD(e, t, n, a, r) {
    var i = t.stateNode;
    Hy(e, t);
    var u = t.memoizedProps, o = t.type === t.elementType ? u : Da(t.type, u);
    i.props = o;
    var l = t.pendingProps, c = i.context, f = n.contextType, m = qn;
    if (typeof f == "object" && f !== null)
      m = bt(f);
    else {
      var h = bu(t, n, !0);
      m = Su(t, h);
    }
    var b = n.getDerivedStateFromProps, C = typeof b == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    !C && (typeof i.UNSAFE_componentWillReceiveProps == "function" || typeof i.componentWillReceiveProps == "function") && (u !== l || c !== m) && Rg(t, i, a, m), jy();
    var R = t.memoizedState, N = i.state = R;
    if (ac(t, a, i, r), N = t.memoizedState, u === l && R === N && !js() && !rc() && !Aa)
      return typeof i.componentDidUpdate == "function" && (u !== e.memoizedProps || R !== e.memoizedState) && (t.flags |= Re), typeof i.getSnapshotBeforeUpdate == "function" && (u !== e.memoizedProps || R !== e.memoizedState) && (t.flags |= hi), !1;
    typeof b == "function" && (Zv(t, n, b, a), N = t.memoizedState);
    var Q = rc() || Sg(t, n, o, a, R, N, m) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Aa;
    return Q ? (!C && (typeof i.UNSAFE_componentWillUpdate == "function" || typeof i.componentWillUpdate == "function") && (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, N, m), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, N, m)), typeof i.componentDidUpdate == "function" && (t.flags |= Re), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= hi)) : (typeof i.componentDidUpdate == "function" && (u !== e.memoizedProps || R !== e.memoizedState) && (t.flags |= Re), typeof i.getSnapshotBeforeUpdate == "function" && (u !== e.memoizedProps || R !== e.memoizedState) && (t.flags |= hi), t.memoizedProps = a, t.memoizedState = N), i.props = a, i.state = N, i.context = m, Q;
  }
  function Ni(e, t) {
    return {
      value: e,
      source: t,
      stack: eo(t),
      digest: null
    };
  }
  function np(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    };
  }
  function $D(e, t) {
    return !0;
  }
  function ap(e, t) {
    try {
      var n = $D(e, t);
      if (n === !1)
        return;
      var a = t.value, r = t.source, i = t.stack, u = i !== null ? i : "";
      if (a != null && a._suppressLogging) {
        if (e.tag === G)
          return;
        console.error(a);
      }
      var o = r ? oe(r) : null, l = o ? "The above error occurred in the <" + o + "> component:" : "The above error occurred in one of your React components:", c;
      if (e.tag === B)
        c = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
      else {
        var f = oe(e) || "Anonymous";
        c = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + f + ".");
      }
      var m = l + `
` + u + `

` + ("" + c);
      console.error(m);
    } catch (h) {
      setTimeout(function () {
        throw h;
      });
    }
  }
  var PD = typeof WeakMap == "function" ? WeakMap : Map;
  function Tg(e, t, n) {
    var a = br(Xe, n);
    a.tag = lv, a.payload = {
      element: null
    };
    var r = t.value;
    return a.callback = function () {
      z0(r), ap(e, t);
    }, a;
  }
  function rp(e, t, n) {
    var a = br(Xe, n);
    a.tag = lv;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      a.payload = function () {
        return r(i);
      }, a.callback = function () {
        Nb(e), ap(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (a.callback = function () {
      Nb(e), ap(e, t), typeof r != "function" && k0(this);
      var l = t.value, c = t.stack;
      this.componentDidCatch(l, {
        componentStack: c !== null ? c : ""
      }), typeof r != "function" && (Yn(e.lanes, ne) || d("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", oe(e) || "Unknown"));
    }), a;
  }
  function xg(e, t, n) {
    var a = e.pingCache, r;
    if (a === null ? (a = e.pingCache = new PD(), r = /* @__PURE__ */ new Set(), a.set(t, r)) : (r = a.get(t), r === void 0 && (r = /* @__PURE__ */ new Set(), a.set(t, r))), !r.has(n)) {
      r.add(n);
      var i = H0.bind(null, e, t, n);
      ba && Ll(e, n), t.then(i, i);
    }
  }
  function GD(e, t, n, a) {
    var r = e.updateQueue;
    if (r === null) {
      var i = /* @__PURE__ */ new Set();
      i.add(n), e.updateQueue = i;
    } else
      r.add(n);
  }
  function qD(e, t) {
    var n = e.tag;
    if ((e.mode & be) === X && (n === le || n === Te || n === Ee)) {
      var a = e.alternate;
      a ? (e.updateQueue = a.updateQueue, e.memoizedState = a.memoizedState, e.lanes = a.lanes) : (e.updateQueue = null, e.memoizedState = null);
    }
  }
  function Dg(e) {
    var t = e;
    do {
      if (t.tag === ue && DD(t))
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function _g(e, t, n, a, r) {
    if ((e.mode & be) === X) {
      if (e === t)
        e.flags |= vn;
      else {
        if (e.flags |= Le, n.flags |= Tf, n.flags &= ~(xC | vo), n.tag === G) {
          var i = n.alternate;
          if (i === null)
            n.tag = Sn;
          else {
            var u = br(Xe, ne);
            u.tag = Zs, Wr(n, u, ne);
          }
        }
        n.lanes = ce(n.lanes, ne);
      }
      return e;
    }
    return e.flags |= vn, e.lanes = r, e;
  }
  function QD(e, t, n, a, r) {
    if (n.flags |= vo, ba && Ll(e, r), a !== null && typeof a == "object" && typeof a.then == "function") {
      var i = a;
      qD(n), Gt() && n.mode & be && gy();
      var u = Dg(t);
      if (u !== null) {
        u.flags &= ~or, _g(u, t, n, e, r), u.mode & be && xg(e, i, r), GD(u, e, i);
        return;
      } else {
        if (!hE(r)) {
          xg(e, i, r), Hp();
          return;
        }
        var o = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        a = o;
      }
    } else if (Gt() && n.mode & be) {
      gy();
      var l = Dg(t);
      if (l !== null) {
        (l.flags & vn) === J && (l.flags |= or), _g(l, t, n, e, r), Kd(Ni(a, n));
        return;
      }
    }
    a = Ni(a, n), D0(a);
    var c = t;
    do {
      switch (c.tag) {
        case B: {
          var f = a;
          c.flags |= vn;
          var m = Co(r);
          c.lanes = ce(c.lanes, m);
          var h = Tg(c, f, m);
          fv(c, h);
          return;
        }
        case G:
          var b = a, C = c.type, R = c.stateNode;
          if ((c.flags & Le) === J && (typeof C.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && !Db(R))) {
            c.flags |= vn;
            var N = Co(r);
            c.lanes = ce(c.lanes, N);
            var Q = rp(c, b, N);
            fv(c, Q);
            return;
          }
          break;
      }
      c = c.return;
    } while (c !== null);
  }
  function WD() {
    return null;
  }
  var hl = fe.ReactCurrentOwner, _a = !1, ip, ml, up, op, lp, zi, sp, Oc, yl;
  ip = {}, ml = {}, up = {}, op = {}, lp = {}, zi = !1, sp = {}, Oc = {}, yl = {};
  function pn(e, t, n, a) {
    e === null ? t.child = My(t, null, n, a) : t.child = Tu(t, e.child, n, a);
  }
  function XD(e, t, n, a) {
    t.child = Tu(t, e.child, null, a), t.child = Tu(t, null, n, a);
  }
  function Og(e, t, n, a, r) {
    if (t.type !== t.elementType) {
      var i = n.propTypes;
      i && Ca(
        i,
        a,
        // Resolved props
        "prop",
        De(n)
      );
    }
    var u = n.render, o = t.ref, l, c;
    Du(t, r), ho(t);
    {
      if (hl.current = t, Vn(!0), l = Au(e, t, u, a, o, r), c = Uu(), t.mode & ot) {
        jt(!0);
        try {
          l = Au(e, t, u, a, o, r), c = Uu();
        } finally {
          jt(!1);
        }
      }
      Vn(!1);
    }
    return iu(), e !== null && !_a ? (Py(e, t, r), Sr(e, t, r)) : (Gt() && c && Pd(t), t.flags |= nu, pn(e, t, l, r), t.child);
  }
  function wg(e, t, n, a, r) {
    if (e === null) {
      var i = n.type;
      if (eO(i) && n.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        n.defaultProps === void 0) {
        var u = i;
        return u = Bu(i), t.tag = Ee, t.type = u, dp(t, i), Mg(e, t, u, a, r);
      }
      {
        var o = i.propTypes;
        if (o && Ca(
          o,
          a,
          // Resolved props
          "prop",
          De(i)
        ), n.defaultProps !== void 0) {
          var l = De(i) || "Unknown";
          yl[l] || (d("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", l), yl[l] = !0);
        }
      }
      var c = Wp(n.type, null, a, t, t.mode, r);
      return c.ref = t.ref, c.return = t, t.child = c, c;
    }
    {
      var f = n.type, m = f.propTypes;
      m && Ca(
        m,
        a,
        // Resolved props
        "prop",
        De(f)
      );
    }
    var h = e.child, b = gp(e, r);
    if (!b) {
      var C = h.memoizedProps, R = n.compare;
      if (R = R !== null ? R : zo, R(C, a) && e.ref === t.ref)
        return Sr(e, t, r);
    }
    t.flags |= nu;
    var N = Bi(h, a);
    return N.ref = t.ref, N.return = t, t.child = N, N;
  }
  function Mg(e, t, n, a, r) {
    if (t.type !== t.elementType) {
      var i = t.elementType;
      if (i.$$typeof === I) {
        var u = i, o = u._payload, l = u._init;
        try {
          i = l(o);
        } catch {
          i = null;
        }
        var c = i && i.propTypes;
        c && Ca(
          c,
          a,
          // Resolved (SimpleMemoComponent has no defaultProps)
          "prop",
          De(i)
        );
      }
    }
    if (e !== null) {
      var f = e.memoizedProps;
      if (zo(f, a) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
        if (_a = !1, t.pendingProps = a = f, gp(e, r))
          (e.flags & Tf) !== J && (_a = !0);
        else return t.lanes = e.lanes, Sr(e, t, r);
    }
    return cp(e, t, n, a, r);
  }
  function Lg(e, t, n) {
    var a = t.pendingProps, r = a.children, i = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden" || Kn)
      if ((t.mode & be) === X) {
        var u = {
          baseLanes: D,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = u, Bc(t, n);
      } else if (Yn(n, Bn)) {
        var m = {
          baseLanes: D,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = m;
        var h = i !== null ? i.baseLanes : n;
        Bc(t, h);
      } else {
        var o = null, l;
        if (i !== null) {
          var c = i.baseLanes;
          l = ce(c, n);
        } else
          l = n;
        t.lanes = t.childLanes = Bn;
        var f = {
          baseLanes: l,
          cachePool: o,
          transitions: null
        };
        return t.memoizedState = f, t.updateQueue = null, Bc(t, l), null;
      }
    else {
      var b;
      i !== null ? (b = ce(i.baseLanes, n), t.memoizedState = null) : b = n, Bc(t, b);
    }
    return pn(e, t, r, n), t.child;
  }
  function KD(e, t, n) {
    var a = t.pendingProps;
    return pn(e, t, a, n), t.child;
  }
  function ID(e, t, n) {
    var a = t.pendingProps.children;
    return pn(e, t, a, n), t.child;
  }
  function JD(e, t, n) {
    {
      t.flags |= Re;
      {
        var a = t.stateNode;
        a.effectDuration = 0, a.passiveEffectDuration = 0;
      }
    }
    var r = t.pendingProps, i = r.children;
    return pn(e, t, i, n), t.child;
  }
  function Ag(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= zr, t.flags |= xf);
  }
  function cp(e, t, n, a, r) {
    if (t.type !== t.elementType) {
      var i = n.propTypes;
      i && Ca(
        i,
        a,
        // Resolved props
        "prop",
        De(n)
      );
    }
    var u;
    {
      var o = bu(t, n, !0);
      u = Su(t, o);
    }
    var l, c;
    Du(t, r), ho(t);
    {
      if (hl.current = t, Vn(!0), l = Au(e, t, n, a, u, r), c = Uu(), t.mode & ot) {
        jt(!0);
        try {
          l = Au(e, t, n, a, u, r), c = Uu();
        } finally {
          jt(!1);
        }
      }
      Vn(!1);
    }
    return iu(), e !== null && !_a ? (Py(e, t, r), Sr(e, t, r)) : (Gt() && c && Pd(t), t.flags |= nu, pn(e, t, l, r), t.child);
  }
  function Ug(e, t, n, a, r) {
    {
      switch (hO(t)) {
        case !1: {
          var i = t.stateNode, u = t.type, o = new u(t.memoizedProps, i.context), l = o.state;
          i.updater.enqueueSetState(i, l, null);
          break;
        }
        case !0: {
          t.flags |= Le, t.flags |= vn;
          var c = new Error("Simulated error coming from DevTools"), f = Co(r);
          t.lanes = ce(t.lanes, f);
          var m = rp(t, Ni(c, t), f);
          fv(t, m);
          break;
        }
      }
      if (t.type !== t.elementType) {
        var h = n.propTypes;
        h && Ca(
          h,
          a,
          // Resolved props
          "prop",
          De(n)
        );
      }
    }
    var b;
    Ya(n) ? (b = !0, Vs(t)) : b = !1, Du(t, r);
    var C = t.stateNode, R;
    C === null ? (Mc(e, t), Eg(t, n, a), tp(t, n, a, r), R = !0) : e === null ? R = BD(t, n, a, r) : R = YD(e, t, n, a, r);
    var N = fp(e, t, n, R, b, r);
    {
      var Q = t.stateNode;
      R && Q.props !== a && (zi || d("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", oe(t) || "a component"), zi = !0);
    }
    return N;
  }
  function fp(e, t, n, a, r, i) {
    Ag(e, t);
    var u = (t.flags & Le) !== J;
    if (!a && !u)
      return r && py(t, n, !1), Sr(e, t, i);
    var o = t.stateNode;
    hl.current = t;
    var l;
    if (u && typeof n.getDerivedStateFromError != "function")
      l = null, yg();
    else {
      ho(t);
      {
        if (Vn(!0), l = o.render(), t.mode & ot) {
          jt(!0);
          try {
            o.render();
          } finally {
            jt(!1);
          }
        }
        Vn(!1);
      }
      iu();
    }
    return t.flags |= nu, e !== null && u ? XD(e, t, l, i) : pn(e, t, l, i), t.memoizedState = o.state, r && py(t, n, !0), t.child;
  }
  function kg(e) {
    var t = e.stateNode;
    t.pendingContext ? dy(e, t.pendingContext, t.pendingContext !== t.context) : t.context && dy(e, t.context, !1), dv(e, t.containerInfo);
  }
  function ZD(e, t, n) {
    if (kg(t), e === null)
      throw new Error("Should have a current fiber. This is a bug in React.");
    var a = t.pendingProps, r = t.memoizedState, i = r.element;
    Hy(e, t), ac(t, a, null, n);
    var u = t.memoizedState;
    t.stateNode;
    var o = u.element;
    if (r.isDehydrated) {
      var l = {
        element: o,
        isDehydrated: !1,
        cache: u.cache,
        pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
        transitions: u.transitions
      }, c = t.updateQueue;
      if (c.baseState = l, t.memoizedState = l, t.flags & or) {
        var f = Ni(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
        return Ng(e, t, o, n, f);
      } else if (o !== i) {
        var m = Ni(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
        return Ng(e, t, o, n, m);
      } else {
        nD(t);
        var h = My(t, null, o, n);
        t.child = h;
        for (var b = h; b;)
          b.flags = b.flags & ~gt | lr, b = b.sibling;
      }
    } else {
      if (Ru(), o === i)
        return Sr(e, t, n);
      pn(e, t, o, n);
    }
    return t.child;
  }
  function Ng(e, t, n, a, r) {
    return Ru(), Kd(r), t.flags |= or, pn(e, t, n, a), t.child;
  }
  function e_(e, t, n) {
    By(t), e === null && Xd(t);
    var a = t.type, r = t.pendingProps, i = e !== null ? e.memoizedProps : null, u = r.children, o = Md(a, r);
    return o ? u = null : i !== null && Md(a, i) && (t.flags |= fo), Ag(e, t), pn(e, t, u, n), t.child;
  }
  function t_(e, t) {
    return e === null && Xd(t), null;
  }
  function n_(e, t, n, a) {
    Mc(e, t);
    var r = t.pendingProps, i = n, u = i._payload, o = i._init, l = o(u);
    t.type = l;
    var c = t.tag = tO(l), f = Da(l, r), m;
    switch (c) {
      case le:
        return dp(t, l), t.type = l = Bu(l), m = cp(null, t, l, f, a), m;
      case G:
        return t.type = l = Yp(l), m = Ug(null, t, l, f, a), m;
      case Te:
        return t.type = l = $p(l), m = Og(null, t, l, f, a), m;
      case Ke: {
        if (t.type !== t.elementType) {
          var h = l.propTypes;
          h && Ca(
            h,
            f,
            // Resolved for outer only
            "prop",
            De(l)
          );
        }
        return m = wg(
          null,
          t,
          l,
          Da(l.type, f),
          // The inner type can have defaults too
          a
        ), m;
      }
    }
    var b = "";
    throw l !== null && typeof l == "object" && l.$$typeof === I && (b = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + l + ". " + ("Lazy element type must resolve to a class or function." + b));
  }
  function a_(e, t, n, a, r) {
    Mc(e, t), t.tag = G;
    var i;
    return Ya(n) ? (i = !0, Vs(t)) : i = !1, Du(t, r), Eg(t, n, a), tp(t, n, a, r), fp(null, t, n, !0, i, r);
  }
  function r_(e, t, n, a) {
    Mc(e, t);
    var r = t.pendingProps, i;
    {
      var u = bu(t, n, !1);
      i = Su(t, u);
    }
    Du(t, a);
    var o, l;
    ho(t);
    {
      if (n.prototype && typeof n.prototype.render == "function") {
        var c = De(n) || "Unknown";
        ip[c] || (d("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", c, c), ip[c] = !0);
      }
      t.mode & ot && Ra.recordLegacyContextWarning(t, null), Vn(!0), hl.current = t, o = Au(null, t, n, r, i, a), l = Uu(), Vn(!1);
    }
    if (iu(), t.flags |= nu, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) {
      var f = De(n) || "Unknown";
      ml[f] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", f, f, f), ml[f] = !0);
    }
    if (
      // Run these checks in production only if the flag is off.
      // Eventually we'll delete this branch altogether.
      typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0
    ) {
      {
        var m = De(n) || "Unknown";
        ml[m] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", m, m, m), ml[m] = !0);
      }
      t.tag = G, t.memoizedState = null, t.updateQueue = null;
      var h = !1;
      return Ya(n) ? (h = !0, Vs(t)) : h = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, cv(t), Cg(t, o), tp(t, n, r, a), fp(null, t, n, !0, h, a);
    } else {
      if (t.tag = le, t.mode & ot) {
        jt(!0);
        try {
          o = Au(null, t, n, r, i, a), l = Uu();
        } finally {
          jt(!1);
        }
      }
      return Gt() && l && Pd(t), pn(null, t, o, a), dp(t, n), t.child;
    }
  }
  function dp(e, t) {
    {
      if (t && t.childContextTypes && d("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
        var n = "", a = Ar();
        a && (n += `

Check the render method of \`` + a + "`.");
        var r = a || "", i = e._debugSource;
        i && (r = i.fileName + ":" + i.lineNumber), lp[r] || (lp[r] = !0, d("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", n));
      }
      if (t.defaultProps !== void 0) {
        var u = De(t) || "Unknown";
        yl[u] || (d("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", u), yl[u] = !0);
      }
      if (typeof t.getDerivedStateFromProps == "function") {
        var o = De(t) || "Unknown";
        op[o] || (d("%s: Function components do not support getDerivedStateFromProps.", o), op[o] = !0);
      }
      if (typeof t.contextType == "object" && t.contextType !== null) {
        var l = De(t) || "Unknown";
        up[l] || (d("%s: Function components do not support contextType.", l), up[l] = !0);
      }
    }
  }
  var vp = {
    dehydrated: null,
    treeContext: null,
    retryLane: Ft
  };
  function pp(e) {
    return {
      baseLanes: e,
      cachePool: WD(),
      transitions: null
    };
  }
  function i_(e, t) {
    var n = null;
    return {
      baseLanes: ce(e.baseLanes, t),
      cachePool: n,
      transitions: e.transitions
    };
  }
  function u_(e, t, n, a) {
    if (t !== null) {
      var r = t.memoizedState;
      if (r === null)
        return !1;
    }
    return hv(e, ul);
  }
  function o_(e, t) {
    return ss(e.childLanes, t);
  }
  function zg(e, t, n) {
    var a = t.pendingProps;
    mO(t) && (t.flags |= Le);
    var r = Ta.current, i = !1, u = (t.flags & Le) !== J;
    if (u || u_(r, e) ? (i = !0, t.flags &= ~Le) : (e === null || e.memoizedState !== null) && (r = xD(r, $y)), r = Ou(r), Kr(t, r), e === null) {
      Xd(t);
      var o = t.memoizedState;
      if (o !== null) {
        var l = o.dehydrated;
        if (l !== null)
          return d_(t, l);
      }
      var c = a.children, f = a.fallback;
      if (i) {
        var m = l_(t, c, f, n), h = t.child;
        return h.memoizedState = pp(n), t.memoizedState = vp, m;
      } else
        return hp(t, c);
    } else {
      var b = e.memoizedState;
      if (b !== null) {
        var C = b.dehydrated;
        if (C !== null)
          return v_(e, t, u, a, C, b, n);
      }
      if (i) {
        var R = a.fallback, N = a.children, Q = c_(e, t, N, R, n), P = t.child, Ce = e.child.memoizedState;
        return P.memoizedState = Ce === null ? pp(n) : i_(Ce, n), P.childLanes = o_(e, n), t.memoizedState = vp, Q;
      } else {
        var me = a.children, y = s_(e, t, me, n);
        return t.memoizedState = null, y;
      }
    }
  }
  function hp(e, t, n) {
    var a = e.mode, r = {
      mode: "visible",
      children: t
    }, i = mp(r, a);
    return i.return = e, e.child = i, i;
  }
  function l_(e, t, n, a) {
    var r = e.mode, i = e.child, u = {
      mode: "hidden",
      children: t
    }, o, l;
    return (r & be) === X && i !== null ? (o = i, o.childLanes = D, o.pendingProps = u, e.mode & je && (o.actualDuration = 0, o.actualStartTime = -1, o.selfBaseDuration = 0, o.treeBaseDuration = 0), l = ri(n, r, a, null)) : (o = mp(u, r), l = ri(n, r, a, null)), o.return = e, l.return = e, o.sibling = l, e.child = o, l;
  }
  function mp(e, t, n) {
    return Hb(e, t, D, null);
  }
  function Hg(e, t) {
    return Bi(e, t);
  }
  function s_(e, t, n, a) {
    var r = e.child, i = r.sibling, u = Hg(r, {
      mode: "visible",
      children: n
    });
    if ((t.mode & be) === X && (u.lanes = a), u.return = t, u.sibling = null, i !== null) {
      var o = t.deletions;
      o === null ? (t.deletions = [i], t.flags |= pi) : o.push(i);
    }
    return t.child = u, u;
  }
  function c_(e, t, n, a, r) {
    var i = t.mode, u = e.child, o = u.sibling, l = {
      mode: "hidden",
      children: n
    }, c;
    if (
      // In legacy mode, we commit the primary tree as if it successfully
      // completed, even though it's in an inconsistent state.
      (i & be) === X && // Make sure we're on the second pass, i.e. the primary child fragment was
      // already cloned. In legacy mode, the only case where this isn't true is
      // when DevTools forces us to display a fallback; we skip the first render
      // pass entirely and go straight to rendering the fallback. (In Concurrent
      // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
      // only codepath.)
      t.child !== u
    ) {
      var f = t.child;
      c = f, c.childLanes = D, c.pendingProps = l, t.mode & je && (c.actualDuration = 0, c.actualStartTime = -1, c.selfBaseDuration = u.selfBaseDuration, c.treeBaseDuration = u.treeBaseDuration), t.deletions = null;
    } else
      c = Hg(u, l), c.subtreeFlags = u.subtreeFlags & cr;
    var m;
    return o !== null ? m = Bi(o, a) : (m = ri(a, i, r, null), m.flags |= gt), m.return = t, c.return = t, c.sibling = m, t.child = c, m;
  }
  function wc(e, t, n, a) {
    a !== null && Kd(a), Tu(t, e.child, null, n);
    var r = t.pendingProps, i = r.children, u = hp(t, i);
    return u.flags |= gt, t.memoizedState = null, u;
  }
  function f_(e, t, n, a, r) {
    var i = t.mode, u = {
      mode: "visible",
      children: n
    }, o = mp(u, i), l = ri(a, i, r, null);
    return l.flags |= gt, o.return = t, l.return = t, o.sibling = l, t.child = o, (t.mode & be) !== X && Tu(t, e.child, null, r), l;
  }
  function d_(e, t, n) {
    return (e.mode & be) === X ? (d("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ne) : kd(t) ? e.lanes = Si : e.lanes = Bn, null;
  }
  function v_(e, t, n, a, r, i, u) {
    if (n)
      if (t.flags & or) {
        t.flags &= ~or;
        var y = np(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
        return wc(e, t, u, y);
      } else {
        if (t.memoizedState !== null)
          return t.child = e.child, t.flags |= Le, null;
        var T = a.children, g = a.fallback, O = f_(e, t, T, g, u), F = t.child;
        return F.memoizedState = pp(u), t.memoizedState = vp, O;
      }
    else {
      if (eD(), (t.mode & be) === X)
        return wc(
          e,
          t,
          u,
          // TODO: When we delete legacy mode, we should make this error argument
          // required — every concurrent mode path that causes hydration to
          // de-opt to client rendering should have an error message.
          null
        );
      if (kd(r)) {
        var o, l, c;
        {
          var f = yx(r);
          o = f.digest, l = f.message, c = f.stack;
        }
        var m;
        l ? m = new Error(l) : m = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
        var h = np(m, o, c);
        return wc(e, t, u, h);
      }
      var b = Yn(u, e.childLanes);
      if (_a || b) {
        var C = Vc();
        if (C !== null) {
          var R = RE(C, u);
          if (R !== Ft && R !== i.retryLane) {
            i.retryLane = R;
            var N = Xe;
            On(e, R), At(C, e, R, N);
          }
        }
        Hp();
        var Q = np(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
        return wc(e, t, u, Q);
      } else if (uy(r)) {
        t.flags |= Le, t.child = e.child;
        var P = j0.bind(null, e);
        return gx(r, P), null;
      } else {
        aD(t, r, i.treeContext);
        var Ce = a.children, me = hp(t, Ce);
        return me.flags |= lr, me;
      }
    }
  }
  function jg(e, t, n) {
    e.lanes = ce(e.lanes, t);
    var a = e.alternate;
    a !== null && (a.lanes = ce(a.lanes, t)), uv(e.return, t, n);
  }
  function p_(e, t, n) {
    for (var a = t; a !== null;) {
      if (a.tag === ue) {
        var r = a.memoizedState;
        r !== null && jg(a, n, e);
      } else if (a.tag === Qe)
        jg(a, n, e);
      else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === e)
        return;
      for (; a.sibling === null;) {
        if (a.return === null || a.return === e)
          return;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
  }
  function h_(e) {
    for (var t = e, n = null; t !== null;) {
      var a = t.alternate;
      a !== null && oc(a) === null && (n = t), t = t.sibling;
    }
    return n;
  }
  function m_(e) {
    if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !sp[e])
      if (sp[e] = !0, typeof e == "string")
        switch (e.toLowerCase()) {
          case "together":
          case "forwards":
          case "backwards": {
            d('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
            break;
          }
          case "forward":
          case "backward": {
            d('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
            break;
          }
          default:
            d('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
            break;
        }
      else
        d('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
  }
  function y_(e, t) {
    e !== void 0 && !Oc[e] && (e !== "collapsed" && e !== "hidden" ? (Oc[e] = !0, d('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Oc[e] = !0, d('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
  }
  function Fg(e, t) {
    {
      var n = Me(e), a = !n && typeof Fn(e) == "function";
      if (n || a) {
        var r = n ? "array" : "iterable";
        return d("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", r, t, r), !1;
      }
    }
    return !0;
  }
  function g_(e, t) {
    if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
      if (Me(e)) {
        for (var n = 0; n < e.length; n++)
          if (!Fg(e[n], n))
            return;
      } else {
        var a = Fn(e);
        if (typeof a == "function") {
          var r = a.call(e);
          if (r)
            for (var i = r.next(), u = 0; !i.done; i = r.next()) {
              if (!Fg(i.value, u))
                return;
              u++;
            }
        } else
          d('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
      }
  }
  function yp(e, t, n, a, r) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: r
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = n, i.tailMode = r);
  }
  function Vg(e, t, n) {
    var a = t.pendingProps, r = a.revealOrder, i = a.tail, u = a.children;
    m_(r), y_(i, r), g_(u, r), pn(e, t, u, n);
    var o = Ta.current, l = hv(o, ul);
    if (l)
      o = mv(o, ul), t.flags |= Le;
    else {
      var c = e !== null && (e.flags & Le) !== J;
      c && p_(t, t.child, n), o = Ou(o);
    }
    if (Kr(t, o), (t.mode & be) === X)
      t.memoizedState = null;
    else
      switch (r) {
        case "forwards": {
          var f = h_(t.child), m;
          f === null ? (m = t.child, t.child = null) : (m = f.sibling, f.sibling = null), yp(
            t,
            !1,
            // isBackwards
            m,
            f,
            i
          );
          break;
        }
        case "backwards": {
          var h = null, b = t.child;
          for (t.child = null; b !== null;) {
            var C = b.alternate;
            if (C !== null && oc(C) === null) {
              t.child = b;
              break;
            }
            var R = b.sibling;
            b.sibling = h, h = b, b = R;
          }
          yp(
            t,
            !0,
            // isBackwards
            h,
            null,
            // last
            i
          );
          break;
        }
        case "together": {
          yp(
            t,
            !1,
            // isBackwards
            null,
            // tail
            null,
            // last
            void 0
          );
          break;
        }
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function b_(e, t, n) {
    dv(t, t.stateNode.containerInfo);
    var a = t.pendingProps;
    return e === null ? t.child = Tu(t, null, a, n) : pn(e, t, a, n), t.child;
  }
  var Bg = !1;
  function S_(e, t, n) {
    var a = t.type, r = a._context, i = t.pendingProps, u = t.memoizedProps, o = i.value;
    {
      "value" in i || Bg || (Bg = !0, d("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
      var l = t.type.propTypes;
      l && Ca(l, i, "prop", "Context.Provider");
    }
    if (Uy(t, r, o), u !== null) {
      var c = u.value;
      if (Gn(c, o)) {
        if (u.children === i.children && !js())
          return Sr(e, t, n);
      } else
        mD(t, r, n);
    }
    var f = i.children;
    return pn(e, t, f, n), t.child;
  }
  var Yg = !1;
  function C_(e, t, n) {
    var a = t.type;
    a._context === void 0 ? a !== a.Consumer && (Yg || (Yg = !0, d("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
    var r = t.pendingProps, i = r.children;
    typeof i != "function" && d("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Du(t, n);
    var u = bt(a);
    ho(t);
    var o;
    return hl.current = t, Vn(!0), o = i(u), Vn(!1), iu(), t.flags |= nu, pn(e, t, o, n), t.child;
  }
  function gl() {
    _a = !0;
  }
  function Mc(e, t) {
    (t.mode & be) === X && e !== null && (e.alternate = null, t.alternate = null, t.flags |= gt);
  }
  function Sr(e, t, n) {
    return e !== null && (t.dependencies = e.dependencies), yg(), Ml(t.lanes), Yn(n, t.childLanes) ? (pD(e, t), t.child) : null;
  }
  function E_(e, t, n) {
    {
      var a = t.return;
      if (a === null)
        throw new Error("Cannot swap the root fiber.");
      if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, t === a.child)
        a.child = n;
      else {
        var r = a.child;
        if (r === null)
          throw new Error("Expected parent to have a child.");
        for (; r.sibling !== t;)
          if (r = r.sibling, r === null)
            throw new Error("Expected to find the previous sibling.");
        r.sibling = n;
      }
      var i = a.deletions;
      return i === null ? (a.deletions = [e], a.flags |= pi) : i.push(e), n.flags |= gt, n;
    }
  }
  function gp(e, t) {
    var n = e.lanes;
    return !!Yn(n, t);
  }
  function R_(e, t, n) {
    switch (t.tag) {
      case B:
        kg(t), t.stateNode, Ru();
        break;
      case V:
        By(t);
        break;
      case G: {
        var a = t.type;
        Ya(a) && Vs(t);
        break;
      }
      case W:
        dv(t, t.stateNode.containerInfo);
        break;
      case Ue: {
        var r = t.memoizedProps.value, i = t.type._context;
        Uy(t, i, r);
        break;
      }
      case it:
        {
          var u = Yn(n, t.childLanes);
          u && (t.flags |= Re);
          {
            var o = t.stateNode;
            o.effectDuration = 0, o.passiveEffectDuration = 0;
          }
        }
        break;
      case ue: {
        var l = t.memoizedState;
        if (l !== null) {
          if (l.dehydrated !== null)
            return Kr(t, Ou(Ta.current)), t.flags |= Le, null;
          var c = t.child, f = c.childLanes;
          if (Yn(n, f))
            return zg(e, t, n);
          Kr(t, Ou(Ta.current));
          var m = Sr(e, t, n);
          return m !== null ? m.sibling : null;
        } else
          Kr(t, Ou(Ta.current));
        break;
      }
      case Qe: {
        var h = (e.flags & Le) !== J, b = Yn(n, t.childLanes);
        if (h) {
          if (b)
            return Vg(e, t, n);
          t.flags |= Le;
        }
        var C = t.memoizedState;
        if (C !== null && (C.rendering = null, C.tail = null, C.lastEffect = null), Kr(t, Ta.current), b)
          break;
        return null;
      }
      case de:
      case we:
        return t.lanes = D, Lg(e, t, n);
    }
    return Sr(e, t, n);
  }
  function $g(e, t, n) {
    if (t._debugNeedsRemount && e !== null)
      return E_(e, t, Wp(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
    if (e !== null) {
      var a = e.memoizedProps, r = t.pendingProps;
      if (a !== r || js() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
        _a = !0;
      else {
        var i = gp(e, n);
        if (!i && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Le) === J)
          return _a = !1, R_(e, t, n);
        (e.flags & Tf) !== J ? _a = !0 : _a = !1;
      }
    } else if (_a = !1, Gt() && Wx(t)) {
      var u = t.index, o = Xx();
      yy(t, o, u);
    }
    switch (t.lanes = D, t.tag) {
      case Ye:
        return r_(e, t, t.type, n);
      case bn: {
        var l = t.elementType;
        return n_(e, t, l, n);
      }
      case le: {
        var c = t.type, f = t.pendingProps, m = t.elementType === c ? f : Da(c, f);
        return cp(e, t, c, m, n);
      }
      case G: {
        var h = t.type, b = t.pendingProps, C = t.elementType === h ? b : Da(h, b);
        return Ug(e, t, h, C, n);
      }
      case B:
        return ZD(e, t, n);
      case V:
        return e_(e, t, n);
      case ie:
        return t_(e, t);
      case ue:
        return zg(e, t, n);
      case W:
        return b_(e, t, n);
      case Te: {
        var R = t.type, N = t.pendingProps, Q = t.elementType === R ? N : Da(R, N);
        return Og(e, t, R, Q, n);
      }
      case rt:
        return KD(e, t, n);
      case st:
        return ID(e, t, n);
      case it:
        return JD(e, t, n);
      case Ue:
        return S_(e, t, n);
      case St:
        return C_(e, t, n);
      case Ke: {
        var P = t.type, Ce = t.pendingProps, me = Da(P, Ce);
        if (t.type !== t.elementType) {
          var y = P.propTypes;
          y && Ca(
            y,
            me,
            // Resolved for outer only
            "prop",
            De(P)
          );
        }
        return me = Da(P.type, me), wg(e, t, P, me, n);
      }
      case Ee:
        return Mg(e, t, t.type, t.pendingProps, n);
      case Sn: {
        var T = t.type, g = t.pendingProps, O = t.elementType === T ? g : Da(T, g);
        return a_(e, t, T, O, n);
      }
      case Qe:
        return Vg(e, t, n);
      case An:
        break;
      case de:
        return Lg(e, t, n);
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function ku(e) {
    e.flags |= Re;
  }
  function Pg(e) {
    e.flags |= zr, e.flags |= xf;
  }
  var Gg, bp, qg, Qg;
  Gg = function (e, t, n, a) {
    for (var r = t.child; r !== null;) {
      if (r.tag === V || r.tag === ie)
        GT(e, r.stateNode);
      else if (r.tag !== W) {
        if (r.child !== null) {
          r.child.return = r, r = r.child;
          continue;
        }
      }
      if (r === t)
        return;
      for (; r.sibling === null;) {
        if (r.return === null || r.return === t)
          return;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
  }, bp = function (e, t) {
  }, qg = function (e, t, n, a, r) {
    var i = e.memoizedProps;
    if (i !== a) {
      var u = t.stateNode, o = vv(), l = QT(u, n, i, a, r, o);
      t.updateQueue = l, l && ku(t);
    }
  }, Qg = function (e, t, n, a) {
    n !== a && ku(t);
  };
  function bl(e, t) {
    if (!Gt())
      switch (e.tailMode) {
        case "hidden": {
          for (var n = e.tail, a = null; n !== null;)
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        }
        case "collapsed": {
          for (var r = e.tail, i = null; r !== null;)
            r.alternate !== null && (i = r), r = r.sibling;
          i === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : i.sibling = null;
          break;
        }
      }
  }
  function Qt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = D, a = J;
    if (t) {
      if ((e.mode & je) !== X) {
        for (var l = e.selfBaseDuration, c = e.child; c !== null;)
          n = ce(n, ce(c.lanes, c.childLanes)), a |= c.subtreeFlags & cr, a |= c.flags & cr, l += c.treeBaseDuration, c = c.sibling;
        e.treeBaseDuration = l;
      } else
        for (var f = e.child; f !== null;)
          n = ce(n, ce(f.lanes, f.childLanes)), a |= f.subtreeFlags & cr, a |= f.flags & cr, f.return = e, f = f.sibling;
      e.subtreeFlags |= a;
    } else {
      if ((e.mode & je) !== X) {
        for (var r = e.actualDuration, i = e.selfBaseDuration, u = e.child; u !== null;)
          n = ce(n, ce(u.lanes, u.childLanes)), a |= u.subtreeFlags, a |= u.flags, r += u.actualDuration, i += u.treeBaseDuration, u = u.sibling;
        e.actualDuration = r, e.treeBaseDuration = i;
      } else
        for (var o = e.child; o !== null;)
          n = ce(n, ce(o.lanes, o.childLanes)), a |= o.subtreeFlags, a |= o.flags, o.return = e, o = o.sibling;
      e.subtreeFlags |= a;
    }
    return e.childLanes = n, t;
  }
  function T_(e, t, n) {
    if (lD() && (t.mode & be) !== X && (t.flags & Le) === J)
      return Ty(t), Ru(), t.flags |= or | vo | vn, !1;
    var a = Gs(t);
    if (n !== null && n.dehydrated !== null)
      if (e === null) {
        if (!a)
          throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
        if (uD(t), Qt(t), (t.mode & je) !== X) {
          var r = n !== null;
          if (r) {
            var i = t.child;
            i !== null && (t.treeBaseDuration -= i.treeBaseDuration);
          }
        }
        return !1;
      } else {
        if (Ru(), (t.flags & Le) === J && (t.memoizedState = null), t.flags |= Re, Qt(t), (t.mode & je) !== X) {
          var u = n !== null;
          if (u) {
            var o = t.child;
            o !== null && (t.treeBaseDuration -= o.treeBaseDuration);
          }
        }
        return !1;
      }
    else
      return xy(), !0;
  }
  function Wg(e, t, n) {
    var a = t.pendingProps;
    switch (Gd(t), t.tag) {
      case Ye:
      case bn:
      case Ee:
      case le:
      case Te:
      case rt:
      case st:
      case it:
      case St:
      case Ke:
        return Qt(t), null;
      case G: {
        var r = t.type;
        return Ya(r) && Fs(t), Qt(t), null;
      }
      case B: {
        var i = t.stateNode;
        if (_u(t), Bd(t), gv(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), e === null || e.child === null) {
          var u = Gs(t);
          if (u)
            ku(t);
          else if (e !== null) {
            var o = e.memoizedState;
            // Check if this is a client root
            (!o.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & or) !== J) && (t.flags |= hi, xy());
          }
        }
        return bp(e, t), Qt(t), null;
      }
      case V: {
        pv(t);
        var l = Vy(), c = t.type;
        if (e !== null && t.stateNode != null)
          qg(e, t, c, a, l), e.ref !== t.ref && Pg(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            return Qt(t), null;
          }
          var f = vv(), m = Gs(t);
          if (m)
            rD(t, l, f) && ku(t);
          else {
            var h = PT(c, a, l, f, t);
            Gg(h, t, !1, !1), t.stateNode = h, qT(h, c, a, l) && ku(t);
          }
          t.ref !== null && Pg(t);
        }
        return Qt(t), null;
      }
      case ie: {
        var b = a;
        if (e && t.stateNode != null) {
          var C = e.memoizedProps;
          Qg(e, t, C, b);
        } else {
          if (typeof b != "string" && t.stateNode === null)
            throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
          var R = Vy(), N = vv(), Q = Gs(t);
          Q ? iD(t) && ku(t) : t.stateNode = WT(b, R, N, t);
        }
        return Qt(t), null;
      }
      case ue: {
        wu(t);
        var P = t.memoizedState;
        if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          var Ce = T_(e, t, P);
          if (!Ce)
            return t.flags & vn ? t : null;
        }
        if ((t.flags & Le) !== J)
          return t.lanes = n, (t.mode & je) !== X && $v(t), t;
        var me = P !== null, y = e !== null && e.memoizedState !== null;
        if (me !== y && me) {
          var T = t.child;
          if (T.flags |= mi, (t.mode & be) !== X) {
            var g = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !fa);
            g || hv(Ta.current, $y) ? x0() : Hp();
          }
        }
        var O = t.updateQueue;
        if (O !== null && (t.flags |= Re), Qt(t), (t.mode & je) !== X && me) {
          var F = t.child;
          F !== null && (t.treeBaseDuration -= F.treeBaseDuration);
        }
        return null;
      }
      case W:
        return _u(t), bp(e, t), e === null && Bx(t.stateNode.containerInfo), Qt(t), null;
      case Ue:
        var z = t.type._context;
        return iv(z, t), Qt(t), null;
      case Sn: {
        var ee = t.type;
        return Ya(ee) && Fs(t), Qt(t), null;
      }
      case Qe: {
        wu(t);
        var re = t.memoizedState;
        if (re === null)
          return Qt(t), null;
        var Ve = (t.flags & Le) !== J, _e = re.rendering;
        if (_e === null)
          if (Ve)
            bl(re, !1);
          else {
            var pt = _0() && (e === null || (e.flags & Le) === J);
            if (!pt)
              for (var Oe = t.child; Oe !== null;) {
                var lt = oc(Oe);
                if (lt !== null) {
                  Ve = !0, t.flags |= Le, bl(re, !1);
                  var sn = lt.updateQueue;
                  return sn !== null && (t.updateQueue = sn, t.flags |= Re), t.subtreeFlags = J, hD(t, n), Kr(t, mv(Ta.current, ul)), t.child;
                }
                Oe = Oe.sibling;
              }
            re.tail !== null && Ht() > hb() && (t.flags |= Le, Ve = !0, bl(re, !1), t.lanes = Qh);
          }
        else {
          if (!Ve) {
            var Jt = oc(_e);
            if (Jt !== null) {
              t.flags |= Le, Ve = !0;
              var Wn = Jt.updateQueue;
              if (Wn !== null && (t.updateQueue = Wn, t.flags |= Re), bl(re, !0), re.tail === null && re.tailMode === "hidden" && !_e.alternate && !Gt())
                return Qt(t), null;
            } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Ht() * 2 - re.renderingStartTime > hb() && n !== Bn && (t.flags |= Le, Ve = !0, bl(re, !1), t.lanes = Qh);
          }
          if (re.isBackwards)
            _e.sibling = t.child, t.child = _e;
          else {
            var yn = re.last;
            yn !== null ? yn.sibling = _e : t.child = _e, re.last = _e;
          }
        }
        if (re.tail !== null) {
          var gn = re.tail;
          re.rendering = gn, re.tail = gn.sibling, re.renderingStartTime = Ht(), gn.sibling = null;
          var cn = Ta.current;
          return Ve ? cn = mv(cn, ul) : cn = Ou(cn), Kr(t, cn), gn;
        }
        return Qt(t), null;
      }
      case An:
        break;
      case de:
      case we: {
        zp(t);
        var xr = t.memoizedState, Yu = xr !== null;
        if (e !== null) {
          var Nl = e.memoizedState, Ka = Nl !== null;
          Ka !== Yu && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Kn && (t.flags |= mi);
        }
        return !Yu || (t.mode & be) === X ? Qt(t) : Yn(Xa, Bn) && (Qt(t), t.subtreeFlags & (gt | Re) && (t.flags |= mi)), null;
      }
      case ct:
        return null;
      case ft:
        return null;
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function x_(e, t, n) {
    switch (Gd(t), t.tag) {
      case G: {
        var a = t.type;
        Ya(a) && Fs(t);
        var r = t.flags;
        return r & vn ? (t.flags = r & ~vn | Le, (t.mode & je) !== X && $v(t), t) : null;
      }
      case B: {
        t.stateNode, _u(t), Bd(t), gv();
        var i = t.flags;
        return (i & vn) !== J && (i & Le) === J ? (t.flags = i & ~vn | Le, t) : null;
      }
      case V:
        return pv(t), null;
      case ue: {
        wu(t);
        var u = t.memoizedState;
        if (u !== null && u.dehydrated !== null) {
          if (t.alternate === null)
            throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
          Ru();
        }
        var o = t.flags;
        return o & vn ? (t.flags = o & ~vn | Le, (t.mode & je) !== X && $v(t), t) : null;
      }
      case Qe:
        return wu(t), null;
      case W:
        return _u(t), null;
      case Ue:
        var l = t.type._context;
        return iv(l, t), null;
      case de:
      case we:
        return zp(t), null;
      case ct:
        return null;
      default:
        return null;
    }
  }
  function Xg(e, t, n) {
    switch (Gd(t), t.tag) {
      case G: {
        var a = t.type.childContextTypes;
        a != null && Fs(t);
        break;
      }
      case B: {
        t.stateNode, _u(t), Bd(t), gv();
        break;
      }
      case V: {
        pv(t);
        break;
      }
      case W:
        _u(t);
        break;
      case ue:
        wu(t);
        break;
      case Qe:
        wu(t);
        break;
      case Ue:
        var r = t.type._context;
        iv(r, t);
        break;
      case de:
      case we:
        zp(t);
        break;
    }
  }
  var Kg = null;
  Kg = /* @__PURE__ */ new Set();
  var Lc = !1, Wt = !1, D_ = typeof WeakSet == "function" ? WeakSet : Set, Y = null, Nu = null, zu = null;
  function __(e) {
    Cf(null, function () {
      throw e;
    }), Ef();
  }
  var O_ = function (e, t) {
    if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & je)
      try {
        Qa(), t.componentWillUnmount();
      } finally {
        qa(e);
      }
    else
      t.componentWillUnmount();
  };
  function Ig(e, t) {
    try {
      Zr(Dt, e);
    } catch (n) {
      qe(e, t, n);
    }
  }
  function Sp(e, t, n) {
    try {
      O_(e, n);
    } catch (a) {
      qe(e, t, a);
    }
  }
  function w_(e, t, n) {
    try {
      n.componentDidMount();
    } catch (a) {
      qe(e, t, a);
    }
  }
  function Jg(e, t) {
    try {
      eb(e);
    } catch (n) {
      qe(e, t, n);
    }
  }
  function Hu(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function") {
        var a;
        try {
          if (da && va && e.mode & je)
            try {
              Qa(), a = n(null);
            } finally {
              qa(e);
            }
          else
            a = n(null);
        } catch (r) {
          qe(e, t, r);
        }
        typeof a == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", oe(e));
      } else
        n.current = null;
  }
  function Ac(e, t, n) {
    try {
      n();
    } catch (a) {
      qe(e, t, a);
    }
  }
  var Zg = !1;
  function M_(e, t) {
    YT(e.containerInfo), Y = t, L_();
    var n = Zg;
    return Zg = !1, n;
  }
  function L_() {
    for (; Y !== null;) {
      var e = Y, t = e.child;
      (e.subtreeFlags & _f) !== J && t !== null ? (t.return = e, Y = t) : A_();
    }
  }
  function A_() {
    for (; Y !== null;) {
      var e = Y;
      nt(e);
      try {
        U_(e);
      } catch (n) {
        qe(e, e.return, n);
      }
      zt();
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, Y = t;
        return;
      }
      Y = e.return;
    }
  }
  function U_(e) {
    var t = e.alternate, n = e.flags;
    if ((n & hi) !== J) {
      switch (nt(e), e.tag) {
        case le:
        case Te:
        case Ee:
          break;
        case G: {
          if (t !== null) {
            var a = t.memoizedProps, r = t.memoizedState, i = e.stateNode;
            e.type === e.elementType && !zi && (i.props !== e.memoizedProps && d("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", oe(e) || "instance"), i.state !== e.memoizedState && d("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", oe(e) || "instance"));
            var u = i.getSnapshotBeforeUpdate(e.elementType === e.type ? a : Da(e.type, a), r);
            {
              var o = Kg;
              u === void 0 && !o.has(e.type) && (o.add(e.type), d("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", oe(e)));
            }
            i.__reactInternalSnapshotBeforeUpdate = u;
          }
          break;
        }
        case B: {
          {
            var l = e.stateNode;
            vx(l.containerInfo);
          }
          break;
        }
        case V:
        case ie:
        case W:
        case Sn:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
      zt();
    }
  }
  function Oa(e, t, n) {
    var a = t.updateQueue, r = a !== null ? a.lastEffect : null;
    if (r !== null) {
      var i = r.next, u = i;
      do {
        if ((u.tag & e) === e) {
          var o = u.destroy;
          u.destroy = void 0, o !== void 0 && ((e & qt) !== wn ? WC(t) : (e & Dt) !== wn && Yh(t), (e & $a) !== wn && Al(!0), Ac(t, n, o), (e & $a) !== wn && Al(!1), (e & qt) !== wn ? XC() : (e & Dt) !== wn && $h());
        }
        u = u.next;
      } while (u !== i);
    }
  }
  function Zr(e, t) {
    var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
    if (a !== null) {
      var r = a.next, i = r;
      do {
        if ((i.tag & e) === e) {
          (e & qt) !== wn ? qC(t) : (e & Dt) !== wn && KC(t);
          var u = i.create;
          (e & $a) !== wn && Al(!0), i.destroy = u(), (e & $a) !== wn && Al(!1), (e & qt) !== wn ? QC() : (e & Dt) !== wn && IC();
          {
            var o = i.destroy;
            if (o !== void 0 && typeof o != "function") {
              var l = void 0;
              (i.tag & Dt) !== J ? l = "useLayoutEffect" : (i.tag & $a) !== J ? l = "useInsertionEffect" : l = "useEffect";
              var c = void 0;
              o === null ? c = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof o.then == "function" ? c = `

It looks like you wrote ` + l + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + l + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : c = " You returned: " + o, d("%s must not return anything besides a function, which is used for clean-up.%s", l, c);
            }
          }
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function k_(e, t) {
    if ((t.flags & Re) !== J)
      switch (t.tag) {
        case it: {
          var n = t.stateNode.passiveEffectDuration, a = t.memoizedProps, r = a.id, i = a.onPostCommit, u = hg(), o = t.alternate === null ? "mount" : "update";
          pg() && (o = "nested-update"), typeof i == "function" && i(r, o, n, u);
          var l = t.return;
          e: for (; l !== null;) {
            switch (l.tag) {
              case B:
                var c = l.stateNode;
                c.passiveEffectDuration += n;
                break e;
              case it:
                var f = l.stateNode;
                f.passiveEffectDuration += n;
                break e;
            }
            l = l.return;
          }
          break;
        }
      }
  }
  function N_(e, t, n, a) {
    if ((n.flags & po) !== J)
      switch (n.tag) {
        case le:
        case Te:
        case Ee: {
          if (!Wt)
            if (n.mode & je)
              try {
                Qa(), Zr(Dt | xt, n);
              } finally {
                qa(n);
              }
            else
              Zr(Dt | xt, n);
          break;
        }
        case G: {
          var r = n.stateNode;
          if (n.flags & Re && !Wt)
            if (t === null)
              if (n.type === n.elementType && !zi && (r.props !== n.memoizedProps && d("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", oe(n) || "instance"), r.state !== n.memoizedState && d("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", oe(n) || "instance")), n.mode & je)
                try {
                  Qa(), r.componentDidMount();
                } finally {
                  qa(n);
                }
              else
                r.componentDidMount();
            else {
              var i = n.elementType === n.type ? t.memoizedProps : Da(n.type, t.memoizedProps), u = t.memoizedState;
              if (n.type === n.elementType && !zi && (r.props !== n.memoizedProps && d("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", oe(n) || "instance"), r.state !== n.memoizedState && d("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", oe(n) || "instance")), n.mode & je)
                try {
                  Qa(), r.componentDidUpdate(i, u, r.__reactInternalSnapshotBeforeUpdate);
                } finally {
                  qa(n);
                }
              else
                r.componentDidUpdate(i, u, r.__reactInternalSnapshotBeforeUpdate);
            }
          var o = n.updateQueue;
          o !== null && (n.type === n.elementType && !zi && (r.props !== n.memoizedProps && d("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", oe(n) || "instance"), r.state !== n.memoizedState && d("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", oe(n) || "instance")), Fy(n, o, r));
          break;
        }
        case B: {
          var l = n.updateQueue;
          if (l !== null) {
            var c = null;
            if (n.child !== null)
              switch (n.child.tag) {
                case V:
                  c = n.child.stateNode;
                  break;
                case G:
                  c = n.child.stateNode;
                  break;
              }
            Fy(n, l, c);
          }
          break;
        }
        case V: {
          var f = n.stateNode;
          if (t === null && n.flags & Re) {
            var m = n.type, h = n.memoizedProps;
            ZT(f, m, h);
          }
          break;
        }
        case ie:
          break;
        case W:
          break;
        case it: {
          {
            var b = n.memoizedProps, C = b.onCommit, R = b.onRender, N = n.stateNode.effectDuration, Q = hg(), P = t === null ? "mount" : "update";
            pg() && (P = "nested-update"), typeof R == "function" && R(n.memoizedProps.id, P, n.actualDuration, n.treeBaseDuration, n.actualStartTime, Q);
            {
              typeof C == "function" && C(n.memoizedProps.id, P, N, Q), A0(n);
              var Ce = n.return;
              e: for (; Ce !== null;) {
                switch (Ce.tag) {
                  case B:
                    var me = Ce.stateNode;
                    me.effectDuration += N;
                    break e;
                  case it:
                    var y = Ce.stateNode;
                    y.effectDuration += N;
                    break e;
                }
                Ce = Ce.return;
              }
            }
          }
          break;
        }
        case ue: {
          $_(e, n);
          break;
        }
        case Qe:
        case Sn:
        case An:
        case de:
        case we:
        case ft:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
    Wt || n.flags & zr && eb(n);
  }
  function z_(e) {
    switch (e.tag) {
      case le:
      case Te:
      case Ee: {
        if (e.mode & je)
          try {
            Qa(), Ig(e, e.return);
          } finally {
            qa(e);
          }
        else
          Ig(e, e.return);
        break;
      }
      case G: {
        var t = e.stateNode;
        typeof t.componentDidMount == "function" && w_(e, e.return, t), Jg(e, e.return);
        break;
      }
      case V: {
        Jg(e, e.return);
        break;
      }
    }
  }
  function H_(e, t) {
    for (var n = null, a = e; ;) {
      if (a.tag === V) {
        if (n === null) {
          n = a;
          try {
            var r = a.stateNode;
            t ? sx(r) : fx(a.stateNode, a.memoizedProps);
          } catch (u) {
            qe(e, e.return, u);
          }
        }
      } else if (a.tag === ie) {
        if (n === null)
          try {
            var i = a.stateNode;
            t ? cx(i) : dx(i, a.memoizedProps);
          } catch (u) {
            qe(e, e.return, u);
          }
      } else if (!((a.tag === de || a.tag === we) && a.memoizedState !== null && a !== e)) {
        if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
      }
      if (a === e)
        return;
      for (; a.sibling === null;) {
        if (a.return === null || a.return === e)
          return;
        n === a && (n = null), a = a.return;
      }
      n === a && (n = null), a.sibling.return = a.return, a = a.sibling;
    }
  }
  function eb(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode, a;
      switch (e.tag) {
        case V:
          a = n;
          break;
        default:
          a = n;
      }
      if (typeof t == "function") {
        var r;
        if (e.mode & je)
          try {
            Qa(), r = t(a);
          } finally {
            qa(e);
          }
        else
          r = t(a);
        typeof r == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", oe(e));
      } else
        t.hasOwnProperty("current") || d("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", oe(e)), t.current = a;
    }
  }
  function j_(e) {
    var t = e.alternate;
    t !== null && (t.return = null), e.return = null;
  }
  function tb(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, tb(t));
    {
      if (e.child = null, e.deletions = null, e.sibling = null, e.tag === V) {
        var n = e.stateNode;
        n !== null && Px(n);
      }
      e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
  }
  function F_(e) {
    for (var t = e.return; t !== null;) {
      if (nb(t))
        return t;
      t = t.return;
    }
    throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
  }
  function nb(e) {
    return e.tag === V || e.tag === B || e.tag === W;
  }
  function ab(e) {
    var t = e;
    e: for (; ;) {
      for (; t.sibling === null;) {
        if (t.return === null || nb(t.return))
          return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== V && t.tag !== ie && t.tag !== ht;) {
        if (t.flags & gt || t.child === null || t.tag === W)
          continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & gt))
        return t.stateNode;
    }
  }
  function V_(e) {
    var t = F_(e);
    switch (t.tag) {
      case V: {
        var n = t.stateNode;
        t.flags & fo && (iy(n), t.flags &= ~fo);
        var a = ab(e);
        Ep(e, a, n);
        break;
      }
      case B:
      case W: {
        var r = t.stateNode.containerInfo, i = ab(e);
        Cp(e, i, r);
        break;
      }
      default:
        throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  function Cp(e, t, n) {
    var a = e.tag, r = a === V || a === ie;
    if (r) {
      var i = e.stateNode;
      t ? ix(n, i, t) : ax(n, i);
    } else if (a !== W) {
      var u = e.child;
      if (u !== null) {
        Cp(u, t, n);
        for (var o = u.sibling; o !== null;)
          Cp(o, t, n), o = o.sibling;
      }
    }
  }
  function Ep(e, t, n) {
    var a = e.tag, r = a === V || a === ie;
    if (r) {
      var i = e.stateNode;
      t ? rx(n, i, t) : nx(n, i);
    } else if (a !== W) {
      var u = e.child;
      if (u !== null) {
        Ep(u, t, n);
        for (var o = u.sibling; o !== null;)
          Ep(o, t, n), o = o.sibling;
      }
    }
  }
  var Xt = null, wa = !1;
  function B_(e, t, n) {
    {
      var a = t;
      e: for (; a !== null;) {
        switch (a.tag) {
          case V: {
            Xt = a.stateNode, wa = !1;
            break e;
          }
          case B: {
            Xt = a.stateNode.containerInfo, wa = !0;
            break e;
          }
          case W: {
            Xt = a.stateNode.containerInfo, wa = !0;
            break e;
          }
        }
        a = a.return;
      }
      if (Xt === null)
        throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
      rb(e, t, n), Xt = null, wa = !1;
    }
    j_(n);
  }
  function ei(e, t, n) {
    for (var a = n.child; a !== null;)
      rb(e, t, a), a = a.sibling;
  }
  function rb(e, t, n) {
    switch (YC(n), n.tag) {
      case V:
        Wt || Hu(n, t);
      case ie: {
        {
          var a = Xt, r = wa;
          Xt = null, ei(e, t, n), Xt = a, wa = r, Xt !== null && (wa ? ox(Xt, n.stateNode) : ux(Xt, n.stateNode));
        }
        return;
      }
      case ht: {
        Xt !== null && (wa ? lx(Xt, n.stateNode) : Ud(Xt, n.stateNode));
        return;
      }
      case W: {
        {
          var i = Xt, u = wa;
          Xt = n.stateNode.containerInfo, wa = !0, ei(e, t, n), Xt = i, wa = u;
        }
        return;
      }
      case le:
      case Te:
      case Ke:
      case Ee: {
        if (!Wt) {
          var o = n.updateQueue;
          if (o !== null) {
            var l = o.lastEffect;
            if (l !== null) {
              var c = l.next, f = c;
              do {
                var m = f, h = m.destroy, b = m.tag;
                h !== void 0 && ((b & $a) !== wn ? Ac(n, t, h) : (b & Dt) !== wn && (Yh(n), n.mode & je ? (Qa(), Ac(n, t, h), qa(n)) : Ac(n, t, h), $h())), f = f.next;
              } while (f !== c);
            }
          }
        }
        ei(e, t, n);
        return;
      }
      case G: {
        if (!Wt) {
          Hu(n, t);
          var C = n.stateNode;
          typeof C.componentWillUnmount == "function" && Sp(n, t, C);
        }
        ei(e, t, n);
        return;
      }
      case An: {
        ei(e, t, n);
        return;
      }
      case de: {
        if (
          // TODO: Remove this dead flag
          n.mode & be
        ) {
          var R = Wt;
          Wt = R || n.memoizedState !== null, ei(e, t, n), Wt = R;
        } else
          ei(e, t, n);
        break;
      }
      default: {
        ei(e, t, n);
        return;
      }
    }
  }
  function Y_(e) {
    e.memoizedState;
  }
  function $_(e, t) {
    var n = t.memoizedState;
    if (n === null) {
      var a = t.alternate;
      if (a !== null) {
        var r = a.memoizedState;
        if (r !== null) {
          var i = r.dehydrated;
          i !== null && _x(i);
        }
      }
    }
  }
  function ib(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new D_()), t.forEach(function (a) {
        var r = F0.bind(null, e, a);
        if (!n.has(a)) {
          if (n.add(a), ba)
            if (Nu !== null && zu !== null)
              Ll(zu, Nu);
            else
              throw Error("Expected finished root and lanes to be set. This is a bug in React.");
          a.then(r, r);
        }
      });
    }
  }
  function P_(e, t, n) {
    Nu = n, zu = e, nt(t), ub(t, e), nt(t), Nu = null, zu = null;
  }
  function Ma(e, t, n) {
    var a = t.deletions;
    if (a !== null)
      for (var r = 0; r < a.length; r++) {
        var i = a[r];
        try {
          B_(e, t, i);
        } catch (l) {
          qe(i, t, l);
        }
      }
    var u = Yl();
    if (t.subtreeFlags & Of)
      for (var o = t.child; o !== null;)
        nt(o), ub(o, e), o = o.sibling;
    nt(u);
  }
  function ub(e, t, n) {
    var a = e.alternate, r = e.flags;
    switch (e.tag) {
      case le:
      case Te:
      case Ke:
      case Ee: {
        if (Ma(t, e), Wa(e), r & Re) {
          try {
            Oa($a | xt, e, e.return), Zr($a | xt, e);
          } catch (ee) {
            qe(e, e.return, ee);
          }
          if (e.mode & je) {
            try {
              Qa(), Oa(Dt | xt, e, e.return);
            } catch (ee) {
              qe(e, e.return, ee);
            }
            qa(e);
          } else
            try {
              Oa(Dt | xt, e, e.return);
            } catch (ee) {
              qe(e, e.return, ee);
            }
        }
        return;
      }
      case G: {
        Ma(t, e), Wa(e), r & zr && a !== null && Hu(a, a.return);
        return;
      }
      case V: {
        Ma(t, e), Wa(e), r & zr && a !== null && Hu(a, a.return);
        {
          if (e.flags & fo) {
            var i = e.stateNode;
            try {
              iy(i);
            } catch (ee) {
              qe(e, e.return, ee);
            }
          }
          if (r & Re) {
            var u = e.stateNode;
            if (u != null) {
              var o = e.memoizedProps, l = a !== null ? a.memoizedProps : o, c = e.type, f = e.updateQueue;
              if (e.updateQueue = null, f !== null)
                try {
                  ex(u, f, c, l, o, e);
                } catch (ee) {
                  qe(e, e.return, ee);
                }
            }
          }
        }
        return;
      }
      case ie: {
        if (Ma(t, e), Wa(e), r & Re) {
          if (e.stateNode === null)
            throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var m = e.stateNode, h = e.memoizedProps, b = a !== null ? a.memoizedProps : h;
          try {
            tx(m, b, h);
          } catch (ee) {
            qe(e, e.return, ee);
          }
        }
        return;
      }
      case B: {
        if (Ma(t, e), Wa(e), r & Re && a !== null) {
          var C = a.memoizedState;
          if (C.isDehydrated)
            try {
              Dx(t.containerInfo);
            } catch (ee) {
              qe(e, e.return, ee);
            }
        }
        return;
      }
      case W: {
        Ma(t, e), Wa(e);
        return;
      }
      case ue: {
        Ma(t, e), Wa(e);
        var R = e.child;
        if (R.flags & mi) {
          var N = R.stateNode, Q = R.memoizedState, P = Q !== null;
          if (N.isHidden = P, P) {
            var Ce = R.alternate !== null && R.alternate.memoizedState !== null;
            Ce || T0();
          }
        }
        if (r & Re) {
          try {
            Y_(e);
          } catch (ee) {
            qe(e, e.return, ee);
          }
          ib(e);
        }
        return;
      }
      case de: {
        var me = a !== null && a.memoizedState !== null;
        if (
          // TODO: Remove this dead flag
          e.mode & be
        ) {
          var y = Wt;
          Wt = y || me, Ma(t, e), Wt = y;
        } else
          Ma(t, e);
        if (Wa(e), r & mi) {
          var T = e.stateNode, g = e.memoizedState, O = g !== null, F = e;
          if (T.isHidden = O, O && !me && (F.mode & be) !== X) {
            Y = F;
            for (var z = F.child; z !== null;)
              Y = z, q_(z), z = z.sibling;
          }
          H_(F, O);
        }
        return;
      }
      case Qe: {
        Ma(t, e), Wa(e), r & Re && ib(e);
        return;
      }
      case An:
        return;
      default: {
        Ma(t, e), Wa(e);
        return;
      }
    }
  }
  function Wa(e) {
    var t = e.flags;
    if (t & gt) {
      try {
        V_(e);
      } catch (n) {
        qe(e, e.return, n);
      }
      e.flags &= ~gt;
    }
    t & lr && (e.flags &= ~lr);
  }
  function G_(e, t, n) {
    Nu = n, zu = t, Y = e, ob(e, t, n), Nu = null, zu = null;
  }
  function ob(e, t, n) {
    for (var a = (e.mode & be) !== X; Y !== null;) {
      var r = Y, i = r.child;
      if (r.tag === de && a) {
        var u = r.memoizedState !== null, o = u || Lc;
        if (o) {
          Rp(e, t, n);
          continue;
        } else {
          var l = r.alternate, c = l !== null && l.memoizedState !== null, f = c || Wt, m = Lc, h = Wt;
          Lc = o, Wt = f, Wt && !h && (Y = r, Q_(r));
          for (var b = i; b !== null;)
            Y = b, ob(
              b,
              // New root; bubble back up to here and stop.
              t,
              n
            ), b = b.sibling;
          Y = r, Lc = m, Wt = h, Rp(e, t, n);
          continue;
        }
      }
      (r.subtreeFlags & po) !== J && i !== null ? (i.return = r, Y = i) : Rp(e, t, n);
    }
  }
  function Rp(e, t, n) {
    for (; Y !== null;) {
      var a = Y;
      if ((a.flags & po) !== J) {
        var r = a.alternate;
        nt(a);
        try {
          N_(t, r, a, n);
        } catch (u) {
          qe(a, a.return, u);
        }
        zt();
      }
      if (a === e) {
        Y = null;
        return;
      }
      var i = a.sibling;
      if (i !== null) {
        i.return = a.return, Y = i;
        return;
      }
      Y = a.return;
    }
  }
  function q_(e) {
    for (; Y !== null;) {
      var t = Y, n = t.child;
      switch (t.tag) {
        case le:
        case Te:
        case Ke:
        case Ee: {
          if (t.mode & je)
            try {
              Qa(), Oa(Dt, t, t.return);
            } finally {
              qa(t);
            }
          else
            Oa(Dt, t, t.return);
          break;
        }
        case G: {
          Hu(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Sp(t, t.return, a);
          break;
        }
        case V: {
          Hu(t, t.return);
          break;
        }
        case de: {
          var r = t.memoizedState !== null;
          if (r) {
            lb(e);
            continue;
          }
          break;
        }
      }
      n !== null ? (n.return = t, Y = n) : lb(e);
    }
  }
  function lb(e) {
    for (; Y !== null;) {
      var t = Y;
      if (t === e) {
        Y = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, Y = n;
        return;
      }
      Y = t.return;
    }
  }
  function Q_(e) {
    for (; Y !== null;) {
      var t = Y, n = t.child;
      if (t.tag === de) {
        var a = t.memoizedState !== null;
        if (a) {
          sb(e);
          continue;
        }
      }
      n !== null ? (n.return = t, Y = n) : sb(e);
    }
  }
  function sb(e) {
    for (; Y !== null;) {
      var t = Y;
      nt(t);
      try {
        z_(t);
      } catch (a) {
        qe(t, t.return, a);
      }
      if (zt(), t === e) {
        Y = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, Y = n;
        return;
      }
      Y = t.return;
    }
  }
  function W_(e, t, n, a) {
    Y = t, X_(t, e, n, a);
  }
  function X_(e, t, n, a) {
    for (; Y !== null;) {
      var r = Y, i = r.child;
      (r.subtreeFlags & au) !== J && i !== null ? (i.return = r, Y = i) : K_(e, t, n, a);
    }
  }
  function K_(e, t, n, a) {
    for (; Y !== null;) {
      var r = Y;
      if ((r.flags & ga) !== J) {
        nt(r);
        try {
          I_(t, r, n, a);
        } catch (u) {
          qe(r, r.return, u);
        }
        zt();
      }
      if (r === e) {
        Y = null;
        return;
      }
      var i = r.sibling;
      if (i !== null) {
        i.return = r.return, Y = i;
        return;
      }
      Y = r.return;
    }
  }
  function I_(e, t, n, a) {
    switch (t.tag) {
      case le:
      case Te:
      case Ee: {
        if (t.mode & je) {
          Yv();
          try {
            Zr(qt | xt, t);
          } finally {
            Bv(t);
          }
        } else
          Zr(qt | xt, t);
        break;
      }
    }
  }
  function J_(e) {
    Y = e, Z_();
  }
  function Z_() {
    for (; Y !== null;) {
      var e = Y, t = e.child;
      if ((Y.flags & pi) !== J) {
        var n = e.deletions;
        if (n !== null) {
          for (var a = 0; a < n.length; a++) {
            var r = n[a];
            Y = r, n0(r, e);
          }
          {
            var i = e.alternate;
            if (i !== null) {
              var u = i.child;
              if (u !== null) {
                i.child = null;
                do {
                  var o = u.sibling;
                  u.sibling = null, u = o;
                } while (u !== null);
              }
            }
          }
          Y = e;
        }
      }
      (e.subtreeFlags & au) !== J && t !== null ? (t.return = e, Y = t) : e0();
    }
  }
  function e0() {
    for (; Y !== null;) {
      var e = Y;
      (e.flags & ga) !== J && (nt(e), t0(e), zt());
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, Y = t;
        return;
      }
      Y = e.return;
    }
  }
  function t0(e) {
    switch (e.tag) {
      case le:
      case Te:
      case Ee: {
        e.mode & je ? (Yv(), Oa(qt | xt, e, e.return), Bv(e)) : Oa(qt | xt, e, e.return);
        break;
      }
    }
  }
  function n0(e, t) {
    for (; Y !== null;) {
      var n = Y;
      nt(n), r0(n, t), zt();
      var a = n.child;
      a !== null ? (a.return = n, Y = a) : a0(e);
    }
  }
  function a0(e) {
    for (; Y !== null;) {
      var t = Y, n = t.sibling, a = t.return;
      if (tb(t), t === e) {
        Y = null;
        return;
      }
      if (n !== null) {
        n.return = a, Y = n;
        return;
      }
      Y = a;
    }
  }
  function r0(e, t) {
    switch (e.tag) {
      case le:
      case Te:
      case Ee: {
        e.mode & je ? (Yv(), Oa(qt, e, t), Bv(e)) : Oa(qt, e, t);
        break;
      }
    }
  }
  function i0(e) {
    switch (e.tag) {
      case le:
      case Te:
      case Ee: {
        try {
          Zr(Dt | xt, e);
        } catch (n) {
          qe(e, e.return, n);
        }
        break;
      }
      case G: {
        var t = e.stateNode;
        try {
          t.componentDidMount();
        } catch (n) {
          qe(e, e.return, n);
        }
        break;
      }
    }
  }
  function u0(e) {
    switch (e.tag) {
      case le:
      case Te:
      case Ee: {
        try {
          Zr(qt | xt, e);
        } catch (t) {
          qe(e, e.return, t);
        }
        break;
      }
    }
  }
  function o0(e) {
    switch (e.tag) {
      case le:
      case Te:
      case Ee: {
        try {
          Oa(Dt | xt, e, e.return);
        } catch (n) {
          qe(e, e.return, n);
        }
        break;
      }
      case G: {
        var t = e.stateNode;
        typeof t.componentWillUnmount == "function" && Sp(e, e.return, t);
        break;
      }
    }
  }
  function l0(e) {
    switch (e.tag) {
      case le:
      case Te:
      case Ee:
        try {
          Oa(qt | xt, e, e.return);
        } catch (t) {
          qe(e, e.return, t);
        }
    }
  }
  if (typeof Symbol == "function" && Symbol.for) {
    var Sl = Symbol.for;
    Sl("selector.component"), Sl("selector.has_pseudo_class"), Sl("selector.role"), Sl("selector.test_id"), Sl("selector.text");
  }
  var s0 = [];
  function c0() {
    s0.forEach(function (e) {
      return e();
    });
  }
  var f0 = fe.ReactCurrentActQueue;
  function d0(e) {
    {
      var t = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      ), n = typeof jest < "u";
      return n && t !== !1;
    }
  }
  function cb() {
    {
      var e = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      );
      return !e && f0.current !== null && d("The current testing environment is not configured to support act(...)"), e;
    }
  }
  var v0 = Math.ceil, Tp = fe.ReactCurrentDispatcher, xp = fe.ReactCurrentOwner, Kt = fe.ReactCurrentBatchConfig, La = fe.ReactCurrentActQueue, wt = (
    /*             */
    0
  ), fb = (
    /*               */
    1
  ), It = (
    /*                */
    2
  ), sa = (
    /*                */
    4
  ), Cr = 0, Cl = 1, Hi = 2, Uc = 3, El = 4, db = 5, Dp = 6, Se = wt, hn = null, at = null, Mt = D, Xa = D, _p = Pr(D), Lt = Cr, Rl = null, kc = D, Tl = D, Nc = D, xl = null, Mn = null, Op = 0, vb = 500, pb = 1 / 0, p0 = 500, Er = null;
  function Dl() {
    pb = Ht() + p0;
  }
  function hb() {
    return pb;
  }
  var zc = !1, wp = null, ju = null, ji = !1, ti = null, _l = D, Mp = [], Lp = null, h0 = 50, Ol = 0, Ap = null, Up = !1, Hc = !1, m0 = 50, Fu = 0, jc = null, wl = Xe, Fc = D, mb = !1;
  function Vc() {
    return hn;
  }
  function mn() {
    return (Se & (It | sa)) !== wt ? Ht() : (wl !== Xe || (wl = Ht()), wl);
  }
  function ni(e) {
    var t = e.mode;
    if ((t & be) === X)
      return ne;
    if ((Se & It) !== wt && Mt !== D)
      return Co(Mt);
    var n = fD() !== cD;
    if (n) {
      if (Kt.transition !== null) {
        var a = Kt.transition;
        a._updatedFibers || (a._updatedFibers = /* @__PURE__ */ new Set()), a._updatedFibers.add(e);
      }
      return Fc === Ft && (Fc = Ih()), Fc;
    }
    var r = Sa();
    if (r !== Ft)
      return r;
    var i = XT();
    return i;
  }
  function y0(e) {
    var t = e.mode;
    return (t & be) === X ? ne : bE();
  }
  function At(e, t, n, a) {
    B0(), mb && d("useInsertionEffect must not schedule updates."), Up && (Hc = !0), Eo(e, n, a), (Se & It) !== D && e === hn ? P0(t) : (ba && em(e, t, n), G0(t), e === hn && ((Se & It) === wt && (Tl = ce(Tl, n)), Lt === El && ai(e, Mt)), Ln(e, a), n === ne && Se === wt && (t.mode & be) === X && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !La.isBatchingLegacy && (Dl(), my()));
  }
  function g0(e, t, n) {
    var a = e.current;
    a.lanes = t, Eo(e, t, n), Ln(e, n);
  }
  function b0(e) {
    return (
      // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
      // decided not to enable it.
      (Se & It) !== wt
    );
  }
  function Ln(e, t) {
    var n = e.callbackNode;
    vE(e, t);
    var a = os(e, e === hn ? Mt : D);
    if (a === D) {
      n !== null && Ab(n), e.callbackNode = null, e.callbackPriority = Ft;
      return;
    }
    var r = Ei(a), i = e.callbackPriority;
    if (i === r && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(La.current !== null && n !== Vp)) {
      n == null && i !== ne && d("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
      return;
    }
    n != null && Ab(n);
    var u;
    if (r === ne)
      e.tag === Gr ? (La.isBatchingLegacy !== null && (La.didScheduleLegacyUpdate = !0), Qx(bb.bind(null, e))) : hy(bb.bind(null, e)), La.current !== null ? La.current.push(qr) : IT(function () {
        (Se & (It | sa)) === wt && qr();
      }), u = null;
    else {
      var o;
      switch (am(a)) {
        case $n:
          o = as;
          break;
        case dr:
          o = wf;
          break;
        case vr:
          o = bi;
          break;
        case cs:
          o = Mf;
          break;
        default:
          o = bi;
          break;
      }
      u = Bp(o, yb.bind(null, e));
    }
    e.callbackPriority = r, e.callbackNode = u;
  }
  function yb(e, t) {
    if (HD(), wl = Xe, Fc = D, (Se & (It | sa)) !== wt)
      throw new Error("Should not already be working.");
    var n = e.callbackNode, a = Tr();
    if (a && e.callbackNode !== n)
      return null;
    var r = os(e, e === hn ? Mt : D);
    if (r === D)
      return null;
    var i = !ls(e, r) && !gE(e, r) && !t, u = i ? w0(e, r) : Yc(e, r);
    if (u !== Cr) {
      if (u === Hi) {
        var o = Jf(e);
        o !== D && (r = o, u = kp(e, o));
      }
      if (u === Cl) {
        var l = Rl;
        throw Fi(e, D), ai(e, r), Ln(e, Ht()), l;
      }
      if (u === Dp)
        ai(e, r);
      else {
        var c = !ls(e, r), f = e.current.alternate;
        if (c && !C0(f)) {
          if (u = Yc(e, r), u === Hi) {
            var m = Jf(e);
            m !== D && (r = m, u = kp(e, m));
          }
          if (u === Cl) {
            var h = Rl;
            throw Fi(e, D), ai(e, r), Ln(e, Ht()), h;
          }
        }
        e.finishedWork = f, e.finishedLanes = r, S0(e, u, r);
      }
    }
    return Ln(e, Ht()), e.callbackNode === n ? yb.bind(null, e) : null;
  }
  function kp(e, t) {
    var n = xl;
    if (fs(e)) {
      var a = Fi(e, t);
      a.flags |= or, Vx(e.containerInfo);
    }
    var r = Yc(e, t);
    if (r !== Hi) {
      var i = Mn;
      Mn = n, i !== null && gb(i);
    }
    return r;
  }
  function gb(e) {
    Mn === null ? Mn = e : Mn.push.apply(Mn, e);
  }
  function S0(e, t, n) {
    switch (t) {
      case Cr:
      case Cl:
        throw new Error("Root did not complete. This is a bug in React.");
      case Hi: {
        Vi(e, Mn, Er);
        break;
      }
      case Uc: {
        if (ai(e, n), Xh(n) && // do not delay if we're inside an act() scope
          !Ub()) {
          var a = Op + vb - Ht();
          if (a > 10) {
            var r = os(e, D);
            if (r !== D)
              break;
            var i = e.suspendedLanes;
            if (!su(i, n)) {
              mn(), Zh(e, i);
              break;
            }
            e.timeoutHandle = Ld(Vi.bind(null, e, Mn, Er), a);
            break;
          }
        }
        Vi(e, Mn, Er);
        break;
      }
      case El: {
        if (ai(e, n), yE(n))
          break;
        if (!Ub()) {
          var u = fE(e, n), o = u, l = Ht() - o, c = V0(l) - l;
          if (c > 10) {
            e.timeoutHandle = Ld(Vi.bind(null, e, Mn, Er), c);
            break;
          }
        }
        Vi(e, Mn, Er);
        break;
      }
      case db: {
        Vi(e, Mn, Er);
        break;
      }
      default:
        throw new Error("Unknown root exit status.");
    }
  }
  function C0(e) {
    for (var t = e; ;) {
      if (t.flags & ts) {
        var n = t.updateQueue;
        if (n !== null) {
          var a = n.stores;
          if (a !== null)
            for (var r = 0; r < a.length; r++) {
              var i = a[r], u = i.getSnapshot, o = i.value;
              try {
                if (!Gn(u(), o))
                  return !1;
              } catch {
                return !1;
              }
            }
        }
      }
      var l = t.child;
      if (t.subtreeFlags & ts && l !== null) {
        l.return = t, t = l;
        continue;
      }
      if (t === e)
        return !0;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return !0;
  }
  function ai(e, t) {
    t = ss(t, Nc), t = ss(t, Tl), CE(e, t);
  }
  function bb(e) {
    if (jD(), (Se & (It | sa)) !== wt)
      throw new Error("Should not already be working.");
    Tr();
    var t = os(e, D);
    if (!Yn(t, ne))
      return Ln(e, Ht()), null;
    var n = Yc(e, t);
    if (e.tag !== Gr && n === Hi) {
      var a = Jf(e);
      a !== D && (t = a, n = kp(e, a));
    }
    if (n === Cl) {
      var r = Rl;
      throw Fi(e, D), ai(e, t), Ln(e, Ht()), r;
    }
    if (n === Dp)
      throw new Error("Root did not complete. This is a bug in React.");
    var i = e.current.alternate;
    return e.finishedWork = i, e.finishedLanes = t, Vi(e, Mn, Er), Ln(e, Ht()), null;
  }
  function E0(e, t) {
    t !== D && (nd(e, ce(t, ne)), Ln(e, Ht()), (Se & (It | sa)) === wt && (Dl(), qr()));
  }
  function Np(e, t) {
    var n = Se;
    Se |= fb;
    try {
      return e(t);
    } finally {
      Se = n, Se === wt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !La.isBatchingLegacy && (Dl(), my());
    }
  }
  function R0(e, t, n, a, r) {
    var i = Sa(), u = Kt.transition;
    try {
      return Kt.transition = null, Vt($n), e(t, n, a, r);
    } finally {
      Vt(i), Kt.transition = u, Se === wt && Dl();
    }
  }
  function Rr(e) {
    ti !== null && ti.tag === Gr && (Se & (It | sa)) === wt && Tr();
    var t = Se;
    Se |= fb;
    var n = Kt.transition, a = Sa();
    try {
      return Kt.transition = null, Vt($n), e ? e() : void 0;
    } finally {
      Vt(a), Kt.transition = n, Se = t, (Se & (It | sa)) === wt && qr();
    }
  }
  function Sb() {
    return (Se & (It | sa)) !== wt;
  }
  function Bc(e, t) {
    on(_p, Xa, e), Xa = ce(Xa, t);
  }
  function zp(e) {
    Xa = _p.current, un(_p, e);
  }
  function Fi(e, t) {
    e.finishedWork = null, e.finishedLanes = D;
    var n = e.timeoutHandle;
    if (n !== Ad && (e.timeoutHandle = Ad, KT(n)), at !== null)
      for (var a = at.return; a !== null;) {
        var r = a.alternate;
        Xg(r, a), a = a.return;
      }
    hn = e;
    var i = Bi(e.current, null);
    return at = i, Mt = Xa = t, Lt = Cr, Rl = null, kc = D, Tl = D, Nc = D, xl = null, Mn = null, gD(), Ra.discardPendingWarnings(), i;
  }
  function Cb(e, t) {
    do {
      var n = at;
      try {
        if (Is(), Gy(), zt(), xp.current = null, n === null || n.return === null) {
          Lt = Cl, Rl = t, at = null;
          return;
        }
        if (da && n.mode & je && Dc(n, !0), Ua)
          if (iu(), t !== null && typeof t == "object" && typeof t.then == "function") {
            var a = t;
            ZC(n, a, Mt);
          } else
            JC(n, t, Mt);
        QD(e, n.return, n, t, Mt), xb(n);
      } catch (r) {
        t = r, at === n && n !== null ? (n = n.return, at = n) : n = at;
        continue;
      }
      return;
    } while (!0);
  }
  function Eb() {
    var e = Tp.current;
    return Tp.current = Cc, e === null ? Cc : e;
  }
  function Rb(e) {
    Tp.current = e;
  }
  function T0() {
    Op = Ht();
  }
  function Ml(e) {
    kc = ce(e, kc);
  }
  function x0() {
    Lt === Cr && (Lt = Uc);
  }
  function Hp() {
    (Lt === Cr || Lt === Uc || Lt === Hi) && (Lt = El), hn !== null && (Zf(kc) || Zf(Tl)) && ai(hn, Mt);
  }
  function D0(e) {
    Lt !== El && (Lt = Hi), xl === null ? xl = [e] : xl.push(e);
  }
  function _0() {
    return Lt === Cr;
  }
  function Yc(e, t) {
    var n = Se;
    Se |= It;
    var a = Eb();
    if (hn !== e || Mt !== t) {
      if (ba) {
        var r = e.memoizedUpdaters;
        r.size > 0 && (Ll(e, Mt), r.clear()), tm(e, t);
      }
      Er = nm(), Fi(e, t);
    }
    Ph(t);
    do
      try {
        O0();
        break;
      } catch (i) {
        Cb(e, i);
      }
    while (!0);
    if (Is(), Se = n, Rb(a), at !== null)
      throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
    return Gh(), hn = null, Mt = D, Lt;
  }
  function O0() {
    for (; at !== null;)
      Tb(at);
  }
  function w0(e, t) {
    var n = Se;
    Se |= It;
    var a = Eb();
    if (hn !== e || Mt !== t) {
      if (ba) {
        var r = e.memoizedUpdaters;
        r.size > 0 && (Ll(e, Mt), r.clear()), tm(e, t);
      }
      Er = nm(), Dl(), Fi(e, t);
    }
    Ph(t);
    do
      try {
        M0();
        break;
      } catch (i) {
        Cb(e, i);
      }
    while (!0);
    return Is(), Rb(a), Se = n, at !== null ? (rE(), Cr) : (Gh(), hn = null, Mt = D, Lt);
  }
  function M0() {
    for (; at !== null && !AC();)
      Tb(at);
  }
  function Tb(e) {
    var t = e.alternate;
    nt(e);
    var n;
    (e.mode & je) !== X ? (Vv(e), n = jp(t, e, Xa), Dc(e, !0)) : n = jp(t, e, Xa), zt(), e.memoizedProps = e.pendingProps, n === null ? xb(e) : at = n, xp.current = null;
  }
  function xb(e) {
    var t = e;
    do {
      var n = t.alternate, a = t.return;
      if ((t.flags & vo) === J) {
        nt(t);
        var r = void 0;
        if ((t.mode & je) === X ? r = Wg(n, t, Xa) : (Vv(t), r = Wg(n, t, Xa), Dc(t, !1)), zt(), r !== null) {
          at = r;
          return;
        }
      } else {
        var i = x_(n, t);
        if (i !== null) {
          i.flags &= DC, at = i;
          return;
        }
        if ((t.mode & je) !== X) {
          Dc(t, !1);
          for (var u = t.actualDuration, o = t.child; o !== null;)
            u += o.actualDuration, o = o.sibling;
          t.actualDuration = u;
        }
        if (a !== null)
          a.flags |= vo, a.subtreeFlags = J, a.deletions = null;
        else {
          Lt = Dp, at = null;
          return;
        }
      }
      var l = t.sibling;
      if (l !== null) {
        at = l;
        return;
      }
      t = a, at = t;
    } while (t !== null);
    Lt === Cr && (Lt = db);
  }
  function Vi(e, t, n) {
    var a = Sa(), r = Kt.transition;
    try {
      Kt.transition = null, Vt($n), L0(e, t, n, a);
    } finally {
      Kt.transition = r, Vt(a);
    }
    return null;
  }
  function L0(e, t, n, a) {
    do
      Tr();
    while (ti !== null);
    if (Y0(), (Se & (It | sa)) !== wt)
      throw new Error("Should not already be working.");
    var r = e.finishedWork, i = e.finishedLanes;
    if (GC(i), r === null)
      return Bh(), null;
    if (i === D && d("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = D, r === e.current)
      throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
    e.callbackNode = null, e.callbackPriority = Ft;
    var u = ce(r.lanes, r.childLanes);
    EE(e, u), e === hn && (hn = null, at = null, Mt = D), ((r.subtreeFlags & au) !== J || (r.flags & au) !== J) && (ji || (ji = !0, Lp = n, Bp(bi, function () {
      return Tr(), null;
    })));
    var o = (r.subtreeFlags & (_f | Of | po | au)) !== J, l = (r.flags & (_f | Of | po | au)) !== J;
    if (o || l) {
      var c = Kt.transition;
      Kt.transition = null;
      var f = Sa();
      Vt($n);
      var m = Se;
      Se |= sa, xp.current = null, M_(e, r), mg(), P_(e, r, i), $T(e.containerInfo), e.current = r, eE(i), G_(r, e, i), tE(), UC(), Se = m, Vt(f), Kt.transition = c;
    } else
      e.current = r, mg();
    var h = ji;
    if (ji ? (ji = !1, ti = e, _l = i) : (Fu = 0, jc = null), u = e.pendingLanes, u === D && (ju = null), h || wb(e.current, !1), VC(r.stateNode, a), ba && e.memoizedUpdaters.clear(), c0(), Ln(e, Ht()), t !== null)
      for (var b = e.onRecoverableError, C = 0; C < t.length; C++) {
        var R = t[C], N = R.stack, Q = R.digest;
        b(R.value, {
          componentStack: N,
          digest: Q
        });
      }
    if (zc) {
      zc = !1;
      var P = wp;
      throw wp = null, P;
    }
    return Yn(_l, ne) && e.tag !== Gr && Tr(), u = e.pendingLanes, Yn(u, ne) ? (zD(), e === Ap ? Ol++ : (Ol = 0, Ap = e)) : Ol = 0, qr(), Bh(), null;
  }
  function Tr() {
    if (ti !== null) {
      var e = am(_l), t = DE(vr, e), n = Kt.transition, a = Sa();
      try {
        return Kt.transition = null, Vt(t), U0();
      } finally {
        Vt(a), Kt.transition = n;
      }
    }
    return !1;
  }
  function A0(e) {
    Mp.push(e), ji || (ji = !0, Bp(bi, function () {
      return Tr(), null;
    }));
  }
  function U0() {
    if (ti === null)
      return !1;
    var e = Lp;
    Lp = null;
    var t = ti, n = _l;
    if (ti = null, _l = D, (Se & (It | sa)) !== wt)
      throw new Error("Cannot flush passive effects while already rendering.");
    Up = !0, Hc = !1, nE(n);
    var a = Se;
    Se |= sa, J_(t.current), W_(t, t.current, n, e);
    {
      var r = Mp;
      Mp = [];
      for (var i = 0; i < r.length; i++) {
        var u = r[i];
        k_(t, u);
      }
    }
    aE(), wb(t.current, !0), Se = a, qr(), Hc ? t === jc ? Fu++ : (Fu = 0, jc = t) : Fu = 0, Up = !1, Hc = !1, BC(t);
    {
      var o = t.current.stateNode;
      o.effectDuration = 0, o.passiveEffectDuration = 0;
    }
    return !0;
  }
  function Db(e) {
    return ju !== null && ju.has(e);
  }
  function k0(e) {
    ju === null ? ju = /* @__PURE__ */ new Set([e]) : ju.add(e);
  }
  function N0(e) {
    zc || (zc = !0, wp = e);
  }
  var z0 = N0;
  function _b(e, t, n) {
    var a = Ni(n, t), r = Tg(e, a, ne), i = Wr(e, r, ne), u = mn();
    i !== null && (Eo(i, ne, u), Ln(i, u));
  }
  function qe(e, t, n) {
    if (__(n), Al(!1), e.tag === B) {
      _b(e, e, n);
      return;
    }
    var a = null;
    for (a = t; a !== null;) {
      if (a.tag === B) {
        _b(a, e, n);
        return;
      } else if (a.tag === G) {
        var r = a.type, i = a.stateNode;
        if (typeof r.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && !Db(i)) {
          var u = Ni(n, e), o = rp(a, u, ne), l = Wr(a, o, ne), c = mn();
          l !== null && (Eo(l, ne, c), Ln(l, c));
          return;
        }
      }
      a = a.return;
    }
    d(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, n);
  }
  function H0(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t);
    var r = mn();
    Zh(e, n), q0(e), hn === e && su(Mt, n) && (Lt === El || Lt === Uc && Xh(Mt) && Ht() - Op < vb ? Fi(e, D) : Nc = ce(Nc, n)), Ln(e, r);
  }
  function Ob(e, t) {
    t === Ft && (t = y0(e));
    var n = mn(), a = On(e, t);
    a !== null && (Eo(a, t, n), Ln(a, n));
  }
  function j0(e) {
    var t = e.memoizedState, n = Ft;
    t !== null && (n = t.retryLane), Ob(e, n);
  }
  function F0(e, t) {
    var n = Ft, a;
    switch (e.tag) {
      case ue:
        a = e.stateNode;
        var r = e.memoizedState;
        r !== null && (n = r.retryLane);
        break;
      case Qe:
        a = e.stateNode;
        break;
      default:
        throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
    }
    a !== null && a.delete(t), Ob(e, n);
  }
  function V0(e) {
    return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : v0(e / 1960) * 1960;
  }
  function B0() {
    if (Ol > h0)
      throw Ol = 0, Ap = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
    Fu > m0 && (Fu = 0, jc = null, d("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
  }
  function Y0() {
    Ra.flushLegacyContextWarning(), Ra.flushPendingUnsafeLifecycleWarnings();
  }
  function wb(e, t) {
    nt(e), $c(e, sr, o0), t && $c(e, ns, l0), $c(e, sr, i0), t && $c(e, ns, u0), zt();
  }
  function $c(e, t, n) {
    for (var a = e, r = null; a !== null;) {
      var i = a.subtreeFlags & t;
      a !== r && a.child !== null && i !== J ? a = a.child : ((a.flags & t) !== J && n(a), a.sibling !== null ? a = a.sibling : a = r = a.return);
    }
  }
  var Pc = null;
  function Mb(e) {
    {
      if ((Se & It) !== wt || !(e.mode & be))
        return;
      var t = e.tag;
      if (t !== Ye && t !== B && t !== G && t !== le && t !== Te && t !== Ke && t !== Ee)
        return;
      var n = oe(e) || "ReactComponent";
      if (Pc !== null) {
        if (Pc.has(n))
          return;
        Pc.add(n);
      } else
        Pc = /* @__PURE__ */ new Set([n]);
      var a = an;
      try {
        nt(e), d("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
      } finally {
        a ? nt(e) : zt();
      }
    }
  }
  var jp;
  {
    var $0 = null;
    jp = function (e, t, n) {
      var a = jb($0, t);
      try {
        return $g(e, t, n);
      } catch (i) {
        if (tD() || i !== null && typeof i == "object" && typeof i.then == "function")
          throw i;
        if (Is(), Gy(), Xg(e, t), jb(t, a), t.mode & je && Vv(t), Cf(null, $g, null, e, t, n), EC()) {
          var r = Ef();
          typeof r == "object" && r !== null && r._suppressLogging && typeof i == "object" && i !== null && !i._suppressLogging && (i._suppressLogging = !0);
        }
        throw i;
      }
    };
  }
  var Lb = !1, Fp;
  Fp = /* @__PURE__ */ new Set();
  function P0(e) {
    if (fi && !UD())
      switch (e.tag) {
        case le:
        case Te:
        case Ee: {
          var t = at && oe(at) || "Unknown", n = t;
          if (!Fp.has(n)) {
            Fp.add(n);
            var a = oe(e) || "Unknown";
            d("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", a, t, t);
          }
          break;
        }
        case G: {
          Lb || (d("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Lb = !0);
          break;
        }
      }
  }
  function Ll(e, t) {
    if (ba) {
      var n = e.memoizedUpdaters;
      n.forEach(function (a) {
        em(e, a, t);
      });
    }
  }
  var Vp = {};
  function Bp(e, t) {
    {
      var n = La.current;
      return n !== null ? (n.push(t), Vp) : Vh(e, t);
    }
  }
  function Ab(e) {
    if (e !== Vp)
      return LC(e);
  }
  function Ub() {
    return La.current !== null;
  }
  function G0(e) {
    {
      if (e.mode & be) {
        if (!cb())
          return;
      } else if (!d0() || Se !== wt || e.tag !== le && e.tag !== Te && e.tag !== Ee)
        return;
      if (La.current === null) {
        var t = an;
        try {
          nt(e), d(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, oe(e));
        } finally {
          t ? nt(e) : zt();
        }
      }
    }
  }
  function q0(e) {
    e.tag !== Gr && cb() && La.current === null && d(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
  }
  function Al(e) {
    mb = e;
  }
  var ca = null, Vu = null, Q0 = function (e) {
    ca = e;
  };
  function Bu(e) {
    {
      if (ca === null)
        return e;
      var t = ca(e);
      return t === void 0 ? e : t.current;
    }
  }
  function Yp(e) {
    return Bu(e);
  }
  function $p(e) {
    {
      if (ca === null)
        return e;
      var t = ca(e);
      if (t === void 0) {
        if (e != null && typeof e.render == "function") {
          var n = Bu(e.render);
          if (e.render !== n) {
            var a = {
              $$typeof: w,
              render: n
            };
            return e.displayName !== void 0 && (a.displayName = e.displayName), a;
          }
        }
        return e;
      }
      return t.current;
    }
  }
  function kb(e, t) {
    {
      if (ca === null)
        return !1;
      var n = e.elementType, a = t.type, r = !1, i = typeof a == "object" && a !== null ? a.$$typeof : null;
      switch (e.tag) {
        case G: {
          typeof a == "function" && (r = !0);
          break;
        }
        case le: {
          (typeof a == "function" || i === I) && (r = !0);
          break;
        }
        case Te: {
          (i === w || i === I) && (r = !0);
          break;
        }
        case Ke:
        case Ee: {
          (i === xe || i === I) && (r = !0);
          break;
        }
        default:
          return !1;
      }
      if (r) {
        var u = ca(n);
        if (u !== void 0 && u === ca(a))
          return !0;
      }
      return !1;
    }
  }
  function Nb(e) {
    {
      if (ca === null || typeof WeakSet != "function")
        return;
      Vu === null && (Vu = /* @__PURE__ */ new WeakSet()), Vu.add(e);
    }
  }
  var W0 = function (e, t) {
    {
      if (ca === null)
        return;
      var n = t.staleFamilies, a = t.updatedFamilies;
      Tr(), Rr(function () {
        Pp(e.current, a, n);
      });
    }
  }, X0 = function (e, t) {
    {
      if (e.context !== qn)
        return;
      Tr(), Rr(function () {
        Ul(t, e, null, null);
      });
    }
  };
  function Pp(e, t, n) {
    {
      var a = e.alternate, r = e.child, i = e.sibling, u = e.tag, o = e.type, l = null;
      switch (u) {
        case le:
        case Ee:
        case G:
          l = o;
          break;
        case Te:
          l = o.render;
          break;
      }
      if (ca === null)
        throw new Error("Expected resolveFamily to be set during hot reload.");
      var c = !1, f = !1;
      if (l !== null) {
        var m = ca(l);
        m !== void 0 && (n.has(m) ? f = !0 : t.has(m) && (u === G ? f = !0 : c = !0));
      }
      if (Vu !== null && (Vu.has(e) || a !== null && Vu.has(a)) && (f = !0), f && (e._debugNeedsRemount = !0), f || c) {
        var h = On(e, ne);
        h !== null && At(h, e, ne, Xe);
      }
      r !== null && !f && Pp(r, t, n), i !== null && Pp(i, t, n);
    }
  }
  var K0 = function (e, t) {
    {
      var n = /* @__PURE__ */ new Set(), a = new Set(t.map(function (r) {
        return r.current;
      }));
      return Gp(e.current, a, n), n;
    }
  };
  function Gp(e, t, n) {
    {
      var a = e.child, r = e.sibling, i = e.tag, u = e.type, o = null;
      switch (i) {
        case le:
        case Ee:
        case G:
          o = u;
          break;
        case Te:
          o = u.render;
          break;
      }
      var l = !1;
      o !== null && t.has(o) && (l = !0), l ? I0(e, n) : a !== null && Gp(a, t, n), r !== null && Gp(r, t, n);
    }
  }
  function I0(e, t) {
    {
      var n = J0(e, t);
      if (n)
        return;
      for (var a = e; ;) {
        switch (a.tag) {
          case V:
            t.add(a.stateNode);
            return;
          case W:
            t.add(a.stateNode.containerInfo);
            return;
          case B:
            t.add(a.stateNode.containerInfo);
            return;
        }
        if (a.return === null)
          throw new Error("Expected to reach root first.");
        a = a.return;
      }
    }
  }
  function J0(e, t) {
    for (var n = e, a = !1; ;) {
      if (n.tag === V)
        a = !0, t.add(n.stateNode);
      else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e)
        return a;
      for (; n.sibling === null;) {
        if (n.return === null || n.return === e)
          return a;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return !1;
  }
  var qp;
  {
    qp = !1;
    try {
      var zb = Object.preventExtensions({});
    } catch {
      qp = !0;
    }
  }
  function Z0(e, t, n, a) {
    this.tag = e, this.key = n, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = a, this.flags = J, this.subtreeFlags = J, this.deletions = null, this.lanes = D, this.childLanes = D, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !qp && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
  }
  var Qn = function (e, t, n, a) {
    return new Z0(e, t, n, a);
  };
  function Qp(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function eO(e) {
    return typeof e == "function" && !Qp(e) && e.defaultProps === void 0;
  }
  function tO(e) {
    if (typeof e == "function")
      return Qp(e) ? G : le;
    if (e != null) {
      var t = e.$$typeof;
      if (t === w)
        return Te;
      if (t === xe)
        return Ke;
    }
    return Ye;
  }
  function Bi(e, t) {
    var n = e.alternate;
    n === null ? (n = Qn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugSource = e._debugSource, n._debugOwner = e._debugOwner, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = J, n.subtreeFlags = J, n.deletions = null, n.actualDuration = 0, n.actualStartTime = -1), n.flags = e.flags & cr, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue;
    var a = e.dependencies;
    switch (n.dependencies = a === null ? null : {
      lanes: a.lanes,
      firstContext: a.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
      case Ye:
      case le:
      case Ee:
        n.type = Bu(e.type);
        break;
      case G:
        n.type = Yp(e.type);
        break;
      case Te:
        n.type = $p(e.type);
        break;
    }
    return n;
  }
  function nO(e, t) {
    e.flags &= cr | gt;
    var n = e.alternate;
    if (n === null)
      e.childLanes = D, e.lanes = t, e.child = null, e.subtreeFlags = J, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
    else {
      e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = J, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type;
      var a = n.dependencies;
      e.dependencies = a === null ? null : {
        lanes: a.lanes,
        firstContext: a.firstContext
      }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration;
    }
    return e;
  }
  function aO(e, t, n) {
    var a;
    return e === Bs ? (a = be, t === !0 && (a |= ot, a |= Fa)) : a = X, ba && (a |= je), Qn(B, null, null, a);
  }
  function Wp(e, t, n, a, r, i) {
    var u = Ye, o = e;
    if (typeof e == "function")
      Qp(e) ? (u = G, o = Yp(o)) : o = Bu(o);
    else if (typeof e == "string")
      u = V;
    else
      e: switch (e) {
        case Na:
          return ri(n.children, r, i, t);
        case si:
          u = st, r |= ot, (r & be) !== X && (r |= Fa);
          break;
        case _r:
          return rO(n, r, i, t);
        case K:
          return iO(n, r, i, t);
        case ye:
          return uO(n, r, i, t);
        case We:
          return Hb(n, r, i, t);
        case tt:
        case pe:
        case nn:
        case za:
        case Tt:
        default: {
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case p:
                u = Ue;
                break e;
              case _:
                u = St;
                break e;
              case w:
                u = Te, o = $p(o);
                break e;
              case xe:
                u = Ke;
                break e;
              case I:
                u = bn, o = null;
                break e;
            }
          var l = "";
          {
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var c = a ? oe(a) : null;
            c && (l += `

Check the render method of \`` + c + "`.");
          }
          throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + l));
        }
      }
    var f = Qn(u, n, t, r);
    return f.elementType = e, f.type = o, f.lanes = i, f._debugOwner = a, f;
  }
  function Xp(e, t, n) {
    var a = null;
    a = e._owner;
    var r = e.type, i = e.key, u = e.props, o = Wp(r, i, u, a, t, n);
    return o._debugSource = e._source, o._debugOwner = e._owner, o;
  }
  function ri(e, t, n, a) {
    var r = Qn(rt, e, a, t);
    return r.lanes = n, r;
  }
  function rO(e, t, n, a) {
    typeof e.id != "string" && d('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
    var r = Qn(it, e, a, t | je);
    return r.elementType = _r, r.lanes = n, r.stateNode = {
      effectDuration: 0,
      passiveEffectDuration: 0
    }, r;
  }
  function iO(e, t, n, a) {
    var r = Qn(ue, e, a, t);
    return r.elementType = K, r.lanes = n, r;
  }
  function uO(e, t, n, a) {
    var r = Qn(Qe, e, a, t);
    return r.elementType = ye, r.lanes = n, r;
  }
  function Hb(e, t, n, a) {
    var r = Qn(de, e, a, t);
    r.elementType = We, r.lanes = n;
    var i = {
      isHidden: !1
    };
    return r.stateNode = i, r;
  }
  function Kp(e, t, n) {
    var a = Qn(ie, e, null, t);
    return a.lanes = n, a;
  }
  function oO() {
    var e = Qn(V, null, null, X);
    return e.elementType = "DELETED", e;
  }
  function lO(e) {
    var t = Qn(ht, null, null, X);
    return t.stateNode = e, t;
  }
  function Ip(e, t, n) {
    var a = e.children !== null ? e.children : [], r = Qn(W, a, e.key, t);
    return r.lanes = n, r.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      // Used by persistent updates
      implementation: e.implementation
    }, r;
  }
  function jb(e, t) {
    return e === null && (e = Qn(Ye, null, null, X)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
  }
  function sO(e, t, n, a, r) {
    this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ad, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ft, this.eventTimes = td(D), this.expirationTimes = td(Xe), this.pendingLanes = D, this.suspendedLanes = D, this.pingedLanes = D, this.expiredLanes = D, this.mutableReadLanes = D, this.finishedLanes = D, this.entangledLanes = D, this.entanglements = td(D), this.identifierPrefix = a, this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
    {
      this.memoizedUpdaters = /* @__PURE__ */ new Set();
      for (var i = this.pendingUpdatersLaneMap = [], u = 0; u < Af; u++)
        i.push(/* @__PURE__ */ new Set());
    }
    switch (t) {
      case Bs:
        this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
        break;
      case Gr:
        this._debugRootType = n ? "hydrate()" : "render()";
        break;
    }
  }
  function Fb(e, t, n, a, r, i, u, o, l, c) {
    var f = new sO(e, t, n, o, l), m = aO(t, i);
    f.current = m, m.stateNode = f;
    {
      var h = {
        element: a,
        isDehydrated: n,
        cache: null,
        // not enabled yet
        transitions: null,
        pendingSuspenseBoundaries: null
      };
      m.memoizedState = h;
    }
    return cv(m), f;
  }
  var Jp = "18.3.1";
  function cO(e, t, n) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    return Jn(a), {
      // This tag allow us to uniquely identify this as a React Portal
      $$typeof: ya,
      key: a == null ? null : "" + a,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  var Zp, eh;
  Zp = !1, eh = {};
  function Vb(e) {
    if (!e)
      return qn;
    var t = tu(e), n = qx(t);
    if (t.tag === G) {
      var a = t.type;
      if (Ya(a))
        return vy(t, a, n);
    }
    return n;
  }
  function fO(e, t) {
    {
      var n = tu(e);
      if (n === void 0) {
        if (typeof e.render == "function")
          throw new Error("Unable to find node on an unmounted component.");
        var a = Object.keys(e).join(",");
        throw new Error("Argument appears to not be a ReactComponent. Keys: " + a);
      }
      var r = Hh(n);
      if (r === null)
        return null;
      if (r.mode & ot) {
        var i = oe(n) || "Component";
        if (!eh[i]) {
          eh[i] = !0;
          var u = an;
          try {
            nt(r), n.mode & ot ? d("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, i) : d("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, i);
          } finally {
            u ? nt(u) : zt();
          }
        }
      }
      return r.stateNode;
    }
  }
  function Bb(e, t, n, a, r, i, u, o) {
    var l = !1, c = null;
    return Fb(e, t, l, c, n, a, r, i, u);
  }
  function Yb(e, t, n, a, r, i, u, o, l, c) {
    var f = !0, m = Fb(n, a, f, e, r, i, u, o, l);
    m.context = Vb(null);
    var h = m.current, b = mn(), C = ni(h), R = br(b, C);
    return R.callback = t ?? null, Wr(h, R, C), g0(m, C, b), m;
  }
  function Ul(e, t, n, a) {
    FC(t, e);
    var r = t.current, i = mn(), u = ni(r);
    iE(u);
    var o = Vb(n);
    t.context === null ? t.context = o : t.pendingContext = o, fi && an !== null && !Zp && (Zp = !0, d(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, oe(an) || "Unknown"));
    var l = br(i, u);
    l.payload = {
      element: e
    }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && d("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", a), l.callback = a);
    var c = Wr(r, l, u);
    return c !== null && (At(c, r, u, i), nc(c, r, u)), u;
  }
  function Gc(e) {
    var t = e.current;
    if (!t.child)
      return null;
    switch (t.child.tag) {
      case V:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function dO(e) {
    switch (e.tag) {
      case B: {
        var t = e.stateNode;
        if (fs(t)) {
          var n = pE(t);
          E0(t, n);
        }
        break;
      }
      case ue: {
        Rr(function () {
          var r = On(e, ne);
          if (r !== null) {
            var i = mn();
            At(r, e, ne, i);
          }
        });
        var a = ne;
        th(e, a);
        break;
      }
    }
  }
  function $b(e, t) {
    var n = e.memoizedState;
    n !== null && n.dehydrated !== null && (n.retryLane = SE(n.retryLane, t));
  }
  function th(e, t) {
    $b(e, t);
    var n = e.alternate;
    n && $b(n, t);
  }
  function vO(e) {
    if (e.tag === ue) {
      var t = go, n = On(e, t);
      if (n !== null) {
        var a = mn();
        At(n, e, t, a);
      }
      th(e, t);
    }
  }
  function pO(e) {
    if (e.tag === ue) {
      var t = ni(e), n = On(e, t);
      if (n !== null) {
        var a = mn();
        At(n, e, t, a);
      }
      th(e, t);
    }
  }
  function Pb(e) {
    var t = MC(e);
    return t === null ? null : t.stateNode;
  }
  var Gb = function (e) {
    return null;
  };
  function hO(e) {
    return Gb(e);
  }
  var qb = function (e) {
    return !1;
  };
  function mO(e) {
    return qb(e);
  }
  var Qb = null, Wb = null, Xb = null, Kb = null, Ib = null, Jb = null, Zb = null, eS = null, tS = null;
  {
    var nS = function (e, t, n) {
      var a = t[n], r = Me(e) ? e.slice() : he({}, e);
      return n + 1 === t.length ? (Me(r) ? r.splice(a, 1) : delete r[a], r) : (r[a] = nS(e[a], t, n + 1), r);
    }, aS = function (e, t) {
      return nS(e, t, 0);
    }, rS = function (e, t, n, a) {
      var r = t[a], i = Me(e) ? e.slice() : he({}, e);
      if (a + 1 === t.length) {
        var u = n[a];
        i[u] = i[r], Me(i) ? i.splice(r, 1) : delete i[r];
      } else
        i[r] = rS(
          // $FlowFixMe number or string is fine here
          e[r],
          t,
          n,
          a + 1
        );
      return i;
    }, iS = function (e, t, n) {
      if (t.length !== n.length) {
        ke("copyWithRename() expects paths of the same length");
        return;
      } else
        for (var a = 0; a < n.length - 1; a++)
          if (t[a] !== n[a]) {
            ke("copyWithRename() expects paths to be the same except for the deepest key");
            return;
          }
      return rS(e, t, n, 0);
    }, uS = function (e, t, n, a) {
      if (n >= t.length)
        return a;
      var r = t[n], i = Me(e) ? e.slice() : he({}, e);
      return i[r] = uS(e[r], t, n + 1, a), i;
    }, oS = function (e, t, n) {
      return uS(e, t, 0, n);
    }, nh = function (e, t) {
      for (var n = e.memoizedState; n !== null && t > 0;)
        n = n.next, t--;
      return n;
    };
    Qb = function (e, t, n, a) {
      var r = nh(e, t);
      if (r !== null) {
        var i = oS(r.memoizedState, n, a);
        r.memoizedState = i, r.baseState = i, e.memoizedProps = he({}, e.memoizedProps);
        var u = On(e, ne);
        u !== null && At(u, e, ne, Xe);
      }
    }, Wb = function (e, t, n) {
      var a = nh(e, t);
      if (a !== null) {
        var r = aS(a.memoizedState, n);
        a.memoizedState = r, a.baseState = r, e.memoizedProps = he({}, e.memoizedProps);
        var i = On(e, ne);
        i !== null && At(i, e, ne, Xe);
      }
    }, Xb = function (e, t, n, a) {
      var r = nh(e, t);
      if (r !== null) {
        var i = iS(r.memoizedState, n, a);
        r.memoizedState = i, r.baseState = i, e.memoizedProps = he({}, e.memoizedProps);
        var u = On(e, ne);
        u !== null && At(u, e, ne, Xe);
      }
    }, Kb = function (e, t, n) {
      e.pendingProps = oS(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var a = On(e, ne);
      a !== null && At(a, e, ne, Xe);
    }, Ib = function (e, t) {
      e.pendingProps = aS(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var n = On(e, ne);
      n !== null && At(n, e, ne, Xe);
    }, Jb = function (e, t, n) {
      e.pendingProps = iS(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var a = On(e, ne);
      a !== null && At(a, e, ne, Xe);
    }, Zb = function (e) {
      var t = On(e, ne);
      t !== null && At(t, e, ne, Xe);
    }, eS = function (e) {
      Gb = e;
    }, tS = function (e) {
      qb = e;
    };
  }
  function yO(e) {
    var t = Hh(e);
    return t === null ? null : t.stateNode;
  }
  function gO(e) {
    return null;
  }
  function bO() {
    return an;
  }
  function SO(e) {
    var t = e.findFiberByHostInstance, n = fe.ReactCurrentDispatcher;
    return jC({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: Qb,
      overrideHookStateDeletePath: Wb,
      overrideHookStateRenamePath: Xb,
      overrideProps: Kb,
      overridePropsDeletePath: Ib,
      overridePropsRenamePath: Jb,
      setErrorHandler: eS,
      setSuspenseHandler: tS,
      scheduleUpdate: Zb,
      currentDispatcherRef: n,
      findHostInstanceByFiber: yO,
      findFiberByHostInstance: t || gO,
      // React Refresh
      findHostInstancesForRefresh: K0,
      scheduleRefresh: W0,
      scheduleRoot: X0,
      setRefreshHandler: Q0,
      // Enables DevTools to append owner stacks to error messages in DEV mode.
      getCurrentFiber: bO,
      // Enables DevTools to detect reconciler version rather than renderer version
      // which may not match for third party renderers.
      reconcilerVersion: Jp
    });
  }
  var lS = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : function (e) {
    console.error(e);
  };
  function ah(e) {
    this._internalRoot = e;
  }
  qc.prototype.render = ah.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null)
      throw new Error("Cannot update an unmounted root.");
    {
      typeof arguments[1] == "function" ? d("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Qc(arguments[1]) ? d("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && d("You passed a second argument to root.render(...) but it only accepts one argument.");
      var n = t.containerInfo;
      if (n.nodeType !== yt) {
        var a = Pb(t.current);
        a && a.parentNode !== n && d("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
      }
    }
    Ul(e, t, null, null);
  }, qc.prototype.unmount = ah.prototype.unmount = function () {
    typeof arguments[0] == "function" && d("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Sb() && d("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Rr(function () {
        Ul(null, e, null, null);
      }), ly(t);
    }
  };
  function CO(e, t) {
    if (!Qc(e))
      throw new Error("createRoot(...): Target container is not a DOM element.");
    sS(e);
    var n = !1, a = !1, r = "", i = lS;
    t != null && (t.hydrate ? ke("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ma && d(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
    var u = Bb(e, Bs, null, n, a, r, i);
    ks(u.current, e);
    var o = e.nodeType === yt ? e.parentNode : e;
    return Fo(o), new ah(u);
  }
  function qc(e) {
    this._internalRoot = e;
  }
  function EO(e) {
    e && HE(e);
  }
  qc.prototype.unstable_scheduleHydration = EO;
  function RO(e, t, n) {
    if (!Qc(e))
      throw new Error("hydrateRoot(...): Target container is not a DOM element.");
    sS(e), t === void 0 && d("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
    var a = n ?? null, r = n != null && n.hydratedSources || null, i = !1, u = !1, o = "", l = lS;
    n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError));
    var c = Yb(t, null, e, Bs, a, i, u, o, l);
    if (ks(c.current, e), Fo(e), r)
      for (var f = 0; f < r.length; f++) {
        var m = r[f];
        _D(c, m);
      }
    return new qc(c);
  }
  function Qc(e) {
    return !!(e && (e.nodeType === Dn || e.nodeType === ur || e.nodeType === cf || !Ut));
  }
  function kl(e) {
    return !!(e && (e.nodeType === Dn || e.nodeType === ur || e.nodeType === cf || e.nodeType === yt && e.nodeValue === " react-mount-point-unstable "));
  }
  function sS(e) {
    e.nodeType === Dn && e.tagName && e.tagName.toUpperCase() === "BODY" && d("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Ko(e) && (e._reactRootContainer ? d("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : d("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
  }
  var TO = fe.ReactCurrentOwner, cS;
  cS = function (e) {
    if (e._reactRootContainer && e.nodeType !== yt) {
      var t = Pb(e._reactRootContainer.current);
      t && t.parentNode !== e && d("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
    }
    var n = !!e._reactRootContainer, a = rh(e), r = !!(a && $r(a));
    r && !n && d("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Dn && e.tagName && e.tagName.toUpperCase() === "BODY" && d("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
  };
  function rh(e) {
    return e ? e.nodeType === ur ? e.documentElement : e.firstChild : null;
  }
  function fS() {
  }
  function xO(e, t, n, a, r) {
    if (r) {
      if (typeof a == "function") {
        var i = a;
        a = function () {
          var h = Gc(u);
          i.call(h);
        };
      }
      var u = Yb(
        t,
        a,
        e,
        Gr,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        fS
      );
      e._reactRootContainer = u, ks(u.current, e);
      var o = e.nodeType === yt ? e.parentNode : e;
      return Fo(o), Rr(), u;
    } else {
      for (var l; l = e.lastChild;)
        e.removeChild(l);
      if (typeof a == "function") {
        var c = a;
        a = function () {
          var h = Gc(f);
          c.call(h);
        };
      }
      var f = Bb(
        e,
        Gr,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        fS
      );
      e._reactRootContainer = f, ks(f.current, e);
      var m = e.nodeType === yt ? e.parentNode : e;
      return Fo(m), Rr(function () {
        Ul(t, f, n, a);
      }), f;
    }
  }
  function DO(e, t) {
    e !== null && typeof e != "function" && d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
  }
  function Wc(e, t, n, a, r) {
    cS(n), DO(r === void 0 ? null : r, "render");
    var i = n._reactRootContainer, u;
    if (!i)
      u = xO(n, t, e, r, a);
    else {
      if (u = i, typeof r == "function") {
        var o = r;
        r = function () {
          var l = Gc(u);
          o.call(l);
        };
      }
      Ul(t, u, e, r);
    }
    return Gc(u);
  }
  var dS = !1;
  function _O(e) {
    {
      dS || (dS = !0, d("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
      var t = TO.current;
      if (t !== null && t.stateNode !== null) {
        var n = t.stateNode._warnedAboutRefsInRender;
        n || d("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", De(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
      }
    }
    return e == null ? null : e.nodeType === Dn ? e : fO(e, "findDOMNode");
  }
  function OO(e, t, n) {
    if (d("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !kl(t))
      throw new Error("Target container is not a DOM element.");
    {
      var a = Ko(t) && t._reactRootContainer === void 0;
      a && d("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
    }
    return Wc(null, e, t, !0, n);
  }
  function wO(e, t, n) {
    if (d("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !kl(t))
      throw new Error("Target container is not a DOM element.");
    {
      var a = Ko(t) && t._reactRootContainer === void 0;
      a && d("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
    }
    return Wc(null, e, t, !1, n);
  }
  function MO(e, t, n, a) {
    if (d("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !kl(n))
      throw new Error("Target container is not a DOM element.");
    if (e == null || !RC(e))
      throw new Error("parentComponent must be a valid React Component");
    return Wc(e, t, n, !1, a);
  }
  var vS = !1;
  function LO(e) {
    if (vS || (vS = !0, d("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !kl(e))
      throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
    {
      var t = Ko(e) && e._reactRootContainer === void 0;
      t && d("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
    }
    if (e._reactRootContainer) {
      {
        var n = rh(e), a = n && !$r(n);
        a && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
      }
      return Rr(function () {
        Wc(null, null, e, !1, function () {
          e._reactRootContainer = null, ly(e);
        });
      }), !0;
    } else {
      {
        var r = rh(e), i = !!(r && $r(r)), u = e.nodeType === Dn && kl(e.parentNode) && !!e.parentNode._reactRootContainer;
        i && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", u ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
      }
      return !1;
    }
  }
  _E(dO), wE(vO), ME(pO), LE(Sa), AE(TE), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && d("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), dC(UT), hC(Np, R0, Rr);
  function AO(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Qc(t))
      throw new Error("Target container is not a DOM element.");
    return cO(e, t, null, n);
  }
  function UO(e, t, n, a) {
    return MO(e, t, n, a);
  }
  var ih = {
    usingClientEntryPoint: !1,
    // Keep in sync with ReactTestUtils.js.
    // This is an array for better minification.
    Events: [$r, gu, Ns, xh, Dh, Np]
  };
  function kO(e, t) {
    return ih.usingClientEntryPoint || d('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), CO(e, t);
  }
  function NO(e, t, n) {
    return ih.usingClientEntryPoint || d('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), RO(e, t, n);
  }
  function zO(e) {
    return Sb() && d("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Rr(e);
  }
  var HO = SO({
    findFiberByHostInstance: Di,
    bundleType: 1,
    version: Jp,
    rendererPackageName: "react-dom"
  });
  if (!HO && mt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
    var pS = window.location.protocol;
    /^(https?|file):$/.test(pS) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (pS === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
  }
  Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ih, Xn.createPortal = AO, Xn.createRoot = kO, Xn.findDOMNode = _O, Xn.flushSync = zO, Xn.hydrate = OO, Xn.hydrateRoot = NO, Xn.render = wO, Xn.unmountComponentAtNode = LO, Xn.unstable_batchedUpdates = Np, Xn.unstable_renderSubtreeIntoContainer = UO, Xn.version = Jp, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
bS.exports = Xn;
var $O = bS.exports, ES, hS = $O;
{
  var mS = hS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ES = function (A, M) {
    mS.usingClientEntryPoint = !0;
    try {
      return hS.createRoot(A, M);
    } finally {
      mS.usingClientEntryPoint = !1;
    }
  };
}
var PO = Object.defineProperty, GO = (A, M, fe) => M in A ? PO(A, M, { enumerable: !0, configurable: !0, writable: !0, value: fe }) : A[M] = fe, Xc = (A, M, fe) => (GO(A, typeof M != "symbol" ? M + "" : M, fe), fe);
const qO = {
  stringify: (A) => A,
  parse: (A) => A
}, QO = {
  stringify: (A) => `${A}`,
  parse: (A) => parseFloat(A)
}, WO = {
  stringify: (A) => A ? "true" : "false",
  parse: (A) => /^[ty1-9]/i.test(A)
}, XO = {
  stringify: (A) => A.name,
  parse: (A, M, fe) => {
    const Be = (() => {
      if (typeof window < "u" && A in window)
        return window[A];
      if (typeof global < "u" && A in global)
        return global[A];
    })();
    return typeof Be == "function" ? Be.bind(fe) : void 0;
  }
}, KO = {
  stringify: (A) => JSON.stringify(A),
  parse: (A) => JSON.parse(A)
}, uh = {
  string: qO,
  number: QO,
  boolean: WO,
  function: XO,
  json: KO
};
function IO(A) {
  return A.replace(
    /([a-z0-9])([A-Z])/g,
    (M, fe, Be) => `${fe}-${Be.toLowerCase()}`
  );
}
const Kc = Symbol.for("r2wc.render"), Ic = Symbol.for("r2wc.connected"), Yi = Symbol.for("r2wc.context"), ii = Symbol.for("r2wc.props");
function JO(A, M, fe) {
  var Be, Zt, ke;
  M.props || (M.props = A.propTypes ? Object.keys(A.propTypes) : []);
  const d = Array.isArray(M.props) ? M.props.slice() : Object.keys(M.props), Bt = {}, le = {}, G = {};
  for (const B of d) {
    Bt[B] = Array.isArray(M.props) ? "string" : M.props[B];
    const W = IO(B);
    le[B] = W, G[W] = B;
  }
  class Ye extends HTMLElement {
    constructor() {
      super(), Xc(this, Be, !0), Xc(this, Zt), Xc(this, ke, {}), Xc(this, "container"), M.shadow ? this.container = this.attachShadow({
        mode: M.shadow
      }) : this.container = this, this[ii].container = this.container;
      for (const W of d) {
        const V = le[W], ie = this.getAttribute(V), rt = Bt[W], st = rt ? uh[rt] : null;
        st != null && st.parse && ie && (this[ii][W] = st.parse(ie, V, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(G);
    }
    connectedCallback() {
      this[Ic] = !0, this[Kc]();
    }
    disconnectedCallback() {
      this[Ic] = !1, this[Yi] && fe.unmount(this[Yi]), delete this[Yi];
    }
    attributeChangedCallback(W, V, ie) {
      const rt = G[W], st = Bt[rt], St = st ? uh[st] : null;
      rt in Bt && St != null && St.parse && ie && (this[ii][rt] = St.parse(ie, W, this), this[Kc]());
    }
    [(Be = Ic, Zt = Yi, ke = ii, Kc)]() {
      this[Ic] && (this[Yi] ? fe.update(this[Yi], this[ii]) : this[Yi] = fe.mount(
        this.container,
        A,
        this[ii]
      ));
    }
  }
  for (const B of d) {
    const W = le[B], V = Bt[B];
    Object.defineProperty(Ye.prototype, B, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[ii][B];
      },
      set(ie) {
        this[ii][B] = ie;
        const rt = V ? uh[V] : null;
        if (rt != null && rt.stringify) {
          const st = rt.stringify(ie, W, this);
          this.getAttribute(W) !== st && this.setAttribute(W, st);
        } else
          this[Kc]();
      }
    });
  }
  return Ye;
}
function ZO(A, M, fe) {
  const Be = ES(A), Zt = gS.createElement(M, fe);
  return Be.render(Zt), {
    root: Be,
    ReactComponent: M
  };
}
function ew({ root: A, ReactComponent: M }, fe) {
  const Be = gS.createElement(M, fe);
  A.render(Be);
}
function tw({ root: A }) {
  A.unmount();
}
function nw(A, M = {}) {
  return JO(A, M, { mount: ZO, update: ew, unmount: tw });
}
var RS = { exports: {} }, Jc = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function () {
  var A = oh, M = Symbol.for("react.element"), fe = Symbol.for("react.portal"), Be = Symbol.for("react.fragment"), Zt = Symbol.for("react.strict_mode"), ke = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), Bt = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), Ye = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), ie = Symbol.iterator, rt = "@@iterator";
  function st(p) {
    if (p === null || typeof p != "object")
      return null;
    var _ = ie && p[ie] || p[rt];
    return typeof _ == "function" ? _ : null;
  }
  var St = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function Ue(p) {
    {
      for (var _ = arguments.length, w = new Array(_ > 1 ? _ - 1 : 0), K = 1; K < _; K++)
        w[K - 1] = arguments[K];
      Te("error", p, w);
    }
  }
  function Te(p, _, w) {
    {
      var K = St.ReactDebugCurrentFrame, ye = K.getStackAddendum();
      ye !== "" && (_ += "%s", w = w.concat([ye]));
      var xe = w.map(function (I) {
        return String(I);
      });
      xe.unshift("Warning: " + _), Function.prototype.apply.call(console[p], console, xe);
    }
  }
  var it = !1, ue = !1, Ke = !1, Ee = !1, bn = !1, Sn;
  Sn = Symbol.for("react.module.reference");
  function ht(p) {
    return !!(typeof p == "string" || typeof p == "function" || p === Be || p === ke || bn || p === Zt || p === G || p === Ye || Ee || p === V || it || ue || Ke || typeof p == "object" && p !== null && (p.$$typeof === W || p.$$typeof === B || p.$$typeof === d || p.$$typeof === Bt || p.$$typeof === le || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === Sn || p.getModuleId !== void 0));
  }
  function Qe(p, _, w) {
    var K = p.displayName;
    if (K)
      return K;
    var ye = _.displayName || _.name || "";
    return ye !== "" ? w + "(" + ye + ")" : w;
  }
  function An(p) {
    return p.displayName || "Context";
  }
  function de(p) {
    if (p == null)
      return null;
    if (typeof p.tag == "number" && Ue("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
      return p.displayName || p.name || null;
    if (typeof p == "string")
      return p;
    switch (p) {
      case Be:
        return "Fragment";
      case fe:
        return "Portal";
      case ke:
        return "Profiler";
      case Zt:
        return "StrictMode";
      case G:
        return "Suspense";
      case Ye:
        return "SuspenseList";
    }
    if (typeof p == "object")
      switch (p.$$typeof) {
        case Bt:
          var _ = p;
          return An(_) + ".Consumer";
        case d:
          var w = p;
          return An(w._context) + ".Provider";
        case le:
          return Qe(p, p.render, "ForwardRef");
        case B:
          var K = p.displayName || null;
          return K !== null ? K : de(p.type) || "Memo";
        case W: {
          var ye = p, xe = ye._payload, I = ye._init;
          try {
            return de(I(xe));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var we = Object.assign, ct = 0, ft, se, Yt, Aa, Kn, fa, Ut;
  function Cn() {
  }
  Cn.__reactDisabledLog = !0;
  function Un() {
    {
      if (ct === 0) {
        ft = console.log, se = console.info, Yt = console.warn, Aa = console.error, Kn = console.group, fa = console.groupCollapsed, Ut = console.groupEnd;
        var p = {
          configurable: !0,
          enumerable: !0,
          value: Cn,
          writable: !0
        };
        Object.defineProperties(console, {
          info: p,
          log: p,
          warn: p,
          error: p,
          group: p,
          groupCollapsed: p,
          groupEnd: p
        });
      }
      ct++;
    }
  }
  function Ua() {
    {
      if (ct--, ct === 0) {
        var p = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: we({}, p, {
            value: ft
          }),
          info: we({}, p, {
            value: se
          }),
          warn: we({}, p, {
            value: Yt
          }),
          error: we({}, p, {
            value: Aa
          }),
          group: we({}, p, {
            value: Kn
          }),
          groupCollapsed: we({}, p, {
            value: fa
          }),
          groupEnd: we({}, p, {
            value: Ut
          })
        });
      }
      ct < 0 && Ue("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var da = St.ReactCurrentDispatcher, va;
  function In(p, _, w) {
    {
      if (va === void 0)
        try {
          throw Error();
        } catch (ye) {
          var K = ye.stack.trim().match(/\n( *(at )?)/);
          va = K && K[1] || "";
        }
      return `
` + va + p;
    }
  }
  var $t = !1, En;
  {
    var kn = typeof WeakMap == "function" ? WeakMap : Map;
    En = new kn();
  }
  function Nn(p, _) {
    if (!p || $t)
      return "";
    {
      var w = En.get(p);
      if (w !== void 0)
        return w;
    }
    var K;
    $t = !0;
    var ye = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var xe;
    xe = da.current, da.current = null, Un();
    try {
      if (_) {
        var I = function () {
          throw Error();
        };
        if (Object.defineProperty(I.prototype, "props", {
          set: function () {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(I, []);
          } catch (Nt) {
            K = Nt;
          }
          Reflect.construct(p, [], I);
        } else {
          try {
            I.call();
          } catch (Nt) {
            K = Nt;
          }
          p.call(I.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (Nt) {
          K = Nt;
        }
        p();
      }
    } catch (Nt) {
      if (Nt && K && typeof Nt.stack == "string") {
        for (var pe = Nt.stack.split(`
`), Tt = K.stack.split(`
`), We = pe.length - 1, tt = Tt.length - 1; We >= 1 && tt >= 0 && pe[We] !== Tt[tt];)
          tt--;
        for (; We >= 1 && tt >= 0; We--, tt--)
          if (pe[We] !== Tt[tt]) {
            if (We !== 1 || tt !== 1)
              do
                if (We--, tt--, tt < 0 || pe[We] !== Tt[tt]) {
                  var nn = `
` + pe[We].replace(" at new ", " at ");
                  return p.displayName && nn.includes("<anonymous>") && (nn = nn.replace("<anonymous>", p.displayName)), typeof p == "function" && En.set(p, nn), nn;
                }
              while (We >= 1 && tt >= 0);
            break;
          }
      }
    } finally {
      $t = !1, da.current = xe, Ua(), Error.prepareStackTrace = ye;
    }
    var za = p ? p.displayName || p.name : "", na = za ? In(za) : "";
    return typeof p == "function" && En.set(p, na), na;
  }
  function mt(p, _, w) {
    return Nn(p, !1);
  }
  function en(p) {
    var _ = p.prototype;
    return !!(_ && _.isReactComponent);
  }
  function kt(p, _, w) {
    if (p == null)
      return "";
    if (typeof p == "function")
      return Nn(p, en(p));
    if (typeof p == "string")
      return In(p);
    switch (p) {
      case G:
        return In("Suspense");
      case Ye:
        return In("SuspenseList");
    }
    if (typeof p == "object")
      switch (p.$$typeof) {
        case le:
          return mt(p.render);
        case B:
          return kt(p.type, _, w);
        case W: {
          var K = p, ye = K._payload, xe = K._init;
          try {
            return kt(xe(ye), _, w);
          } catch {
          }
        }
      }
    return "";
  }
  var Ct = Object.prototype.hasOwnProperty, Et = {}, zn = St.ReactDebugCurrentFrame;
  function Jn(p) {
    if (p) {
      var _ = p._owner, w = kt(p.type, p._source, _ ? _.type : null);
      zn.setExtraStackFrame(w);
    } else
      zn.setExtraStackFrame(null);
  }
  function Rn(p, _, w, K, ye) {
    {
      var xe = Function.call.bind(Ct);
      for (var I in p)
        if (xe(p, I)) {
          var pe = void 0;
          try {
            if (typeof p[I] != "function") {
              var Tt = Error((K || "React class") + ": " + w + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw Tt.name = "Invariant Violation", Tt;
            }
            pe = p[I](_, I, K, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (We) {
            pe = We;
          }
          pe && !(pe instanceof Error) && (Jn(ye), Ue("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", K || "React class", w, I, typeof pe), Jn(null)), pe instanceof Error && !(pe.message in Et) && (Et[pe.message] = !0, Jn(ye), Ue("Failed %s type: %s", w, pe.message), Jn(null));
        }
    }
  }
  var pa = Array.isArray;
  function Zn(p) {
    return pa(p);
  }
  function fn(p) {
    {
      var _ = typeof Symbol == "function" && Symbol.toStringTag, w = _ && p[Symbol.toStringTag] || p.constructor.name || "Object";
      return w;
    }
  }
  function ea(p) {
    try {
      return tn(p), !1;
    } catch {
      return !0;
    }
  }
  function tn(p) {
    return "" + p;
  }
  function Hn(p) {
    if (ea(p))
      return Ue("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fn(p)), tn(p);
  }
  var dt = St.ReactCurrentOwner, ta = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  }, Ia, Ja, k;
  k = {};
  function q(p) {
    if (Ct.call(p, "ref")) {
      var _ = Object.getOwnPropertyDescriptor(p, "ref").get;
      if (_ && _.isReactWarning)
        return !1;
    }
    return p.ref !== void 0;
  }
  function ve(p) {
    if (Ct.call(p, "key")) {
      var _ = Object.getOwnPropertyDescriptor(p, "key").get;
      if (_ && _.isReactWarning)
        return !1;
    }
    return p.key !== void 0;
  }
  function Ne(p, _) {
    if (typeof p.ref == "string" && dt.current && _ && dt.current.stateNode !== _) {
      var w = de(dt.current.type);
      k[w] || (Ue('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', de(dt.current.type), p.ref), k[w] = !0);
    }
  }
  function ze(p, _) {
    {
      var w = function () {
        Ia || (Ia = !0, Ue("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
      };
      w.isReactWarning = !0, Object.defineProperty(p, "key", {
        get: w,
        configurable: !0
      });
    }
  }
  function Rt(p, _) {
    {
      var w = function () {
        Ja || (Ja = !0, Ue("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
      };
      w.isReactWarning = !0, Object.defineProperty(p, "ref", {
        get: w,
        configurable: !0
      });
    }
  }
  var vt = function (p, _, w, K, ye, xe, I) {
    var pe = {
      // This tag allows us to uniquely identify this as a React Element
      $$typeof: M,
      // Built-in properties that belong on the element
      type: p,
      key: _,
      ref: w,
      props: I,
      // Record the component responsible for creating this element.
      _owner: xe
    };
    return pe._store = {}, Object.defineProperty(pe._store, "validated", {
      configurable: !1,
      enumerable: !1,
      writable: !0,
      value: !1
    }), Object.defineProperty(pe, "_self", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: K
    }), Object.defineProperty(pe, "_source", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: ye
    }), Object.freeze && (Object.freeze(pe.props), Object.freeze(pe)), pe;
  };
  function Tn(p, _, w, K, ye) {
    {
      var xe, I = {}, pe = null, Tt = null;
      w !== void 0 && (Hn(w), pe = "" + w), ve(_) && (Hn(_.key), pe = "" + _.key), q(_) && (Tt = _.ref, Ne(_, ye));
      for (xe in _)
        Ct.call(_, xe) && !ta.hasOwnProperty(xe) && (I[xe] = _[xe]);
      if (p && p.defaultProps) {
        var We = p.defaultProps;
        for (xe in We)
          I[xe] === void 0 && (I[xe] = We[xe]);
      }
      if (pe || Tt) {
        var tt = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
        pe && ze(I, tt), Tt && Rt(I, tt);
      }
      return vt(p, pe, Tt, ye, K, dt.current, I);
    }
  }
  var $e = St.ReactCurrentOwner, jn = St.ReactDebugCurrentFrame;
  function Ie(p) {
    if (p) {
      var _ = p._owner, w = kt(p.type, p._source, _ ? _.type : null);
      jn.setExtraStackFrame(w);
    } else
      jn.setExtraStackFrame(null);
  }
  var Je;
  Je = !1;
  function ka(p) {
    return typeof p == "object" && p !== null && p.$$typeof === M;
  }
  function ha() {
    {
      if ($e.current) {
        var p = de($e.current.type);
        if (p)
          return `

Check the render method of \`` + p + "`.";
      }
      return "";
    }
  }
  function ui(p) {
    return "";
  }
  var $i = {};
  function $u(p) {
    {
      var _ = ha();
      if (!_) {
        var w = typeof p == "string" ? p : p.displayName || p.name;
        w && (_ = `

Check the top-level render call using <` + w + ">.");
      }
      return _;
    }
  }
  function oi(p, _) {
    {
      if (!p._store || p._store.validated || p.key != null)
        return;
      p._store.validated = !0;
      var w = $u(_);
      if ($i[w])
        return;
      $i[w] = !0;
      var K = "";
      p && p._owner && p._owner !== $e.current && (K = " It was passed a child from " + de(p._owner.type) + "."), Ie(p), Ue('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, K), Ie(null);
    }
  }
  function li(p, _) {
    {
      if (typeof p != "object")
        return;
      if (Zn(p))
        for (var w = 0; w < p.length; w++) {
          var K = p[w];
          ka(K) && oi(K, _);
        }
      else if (ka(p))
        p._store && (p._store.validated = !0);
      else if (p) {
        var ye = st(p);
        if (typeof ye == "function" && ye !== p.entries)
          for (var xe = ye.call(p), I; !(I = xe.next()).done;)
            ka(I.value) && oi(I.value, _);
      }
    }
  }
  function Za(p) {
    {
      var _ = p.type;
      if (_ == null || typeof _ == "string")
        return;
      var w;
      if (typeof _ == "function")
        w = _.propTypes;
      else if (typeof _ == "object" && (_.$$typeof === le || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        _.$$typeof === B))
        w = _.propTypes;
      else
        return;
      if (w) {
        var K = de(_);
        Rn(w, p.props, "prop", K, p);
      } else if (_.PropTypes !== void 0 && !Je) {
        Je = !0;
        var ye = de(_);
        Ue("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ye || "Unknown");
      }
      typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && Ue("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function Dr(p) {
    {
      for (var _ = Object.keys(p.props), w = 0; w < _.length; w++) {
        var K = _[w];
        if (K !== "children" && K !== "key") {
          Ie(p), Ue("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", K), Ie(null);
          break;
        }
      }
      p.ref !== null && (Ie(p), Ue("Invalid attribute `ref` supplied to `React.Fragment`."), Ie(null));
    }
  }
  var er = {};
  function ma(p, _, w, K, ye, xe) {
    {
      var I = ht(p);
      if (!I) {
        var pe = "";
        (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var Tt = ui();
        Tt ? pe += Tt : pe += ha();
        var We;
        p === null ? We = "null" : Zn(p) ? We = "array" : p !== void 0 && p.$$typeof === M ? (We = "<" + (de(p.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : We = typeof p, Ue("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", We, pe);
      }
      var tt = Tn(p, _, w, ye, xe);
      if (tt == null)
        return tt;
      if (I) {
        var nn = _.children;
        if (nn !== void 0)
          if (K)
            if (Zn(nn)) {
              for (var za = 0; za < nn.length; za++)
                li(nn[za], p);
              Object.freeze && Object.freeze(nn);
            } else
              Ue("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            li(nn, p);
      }
      if (Ct.call(_, "key")) {
        var na = de(p), Nt = Object.keys(_).filter(function (tr) {
          return tr !== "key";
        }), Fn = Nt.length > 0 ? "{key: someKey, " + Nt.join(": ..., ") + ": ...}" : "{key: someKey}";
        if (!er[na + Fn]) {
          var he = Nt.length > 0 ? "{" + Nt.join(": ..., ") + ": ...}" : "{}";
          Ue(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Fn, na, he, na), er[na + Fn] = !0;
        }
      }
      return p === Be ? Dr(tt) : Za(tt), tt;
    }
  }
  function ya(p, _, w) {
    return ma(p, _, w, !0);
  }
  function Na(p, _, w) {
    return ma(p, _, w, !1);
  }
  var si = Na, _r = ya;
  Jc.Fragment = Be, Jc.jsx = si, Jc.jsxs = _r;
})();
RS.exports = Jc;
var aw = RS.exports;
const rw = () => /* @__PURE__ */ aw.jsx("div", { className: "h-full", children: "Here is MyComponent" }), iw = nw(rw);
customElements.define("my-component", iw);
