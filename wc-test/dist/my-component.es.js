function ow(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var kS = { exports: {} }, uf = { exports: {} };
uf.exports;
(function(h, R) {
  /**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var L = "18.3.1", W = Symbol.for("react.element"), Fe = Symbol.for("react.portal"), Se = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), $e = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), N = Symbol.for("react.context"), Ve = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), de = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), j = Symbol.iterator, w = "@@iterator";
    function H(s) {
      if (s === null || typeof s != "object")
        return null;
      var v = j && s[j] || s[w];
      return typeof v == "function" ? v : null;
    }
    var X = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, ee = {
      transition: null
    }, q = {
      current: null,
      // Used to reproduce behavior of `batchedUpdates` in legacy mode.
      isBatchingLegacy: !1,
      didScheduleLegacyUpdate: !1
    }, ye = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, ie = {}, ke = null;
    function ve(s) {
      ke = s;
    }
    ie.setExtraStackFrame = function(s) {
      ke = s;
    }, ie.getCurrentStack = null, ie.getStackAddendum = function() {
      var s = "";
      ke && (s += ke);
      var v = ie.getCurrentStack;
      return v && (s += v() || ""), s;
    };
    var ze = !1, Ce = !1, Ht = !1, Te = !1, Pe = !1, mt = {
      ReactCurrentDispatcher: X,
      ReactCurrentBatchConfig: ee,
      ReactCurrentOwner: ye
    };
    mt.ReactDebugCurrentFrame = ie, mt.ReactCurrentActQueue = q;
    function yt(s) {
      {
        for (var v = arguments.length, E = new Array(v > 1 ? v - 1 : 0), T = 1; T < v; T++)
          E[T - 1] = arguments[T];
        qt("warn", s, E);
      }
    }
    function Ee(s) {
      {
        for (var v = arguments.length, E = new Array(v > 1 ? v - 1 : 0), T = 1; T < v; T++)
          E[T - 1] = arguments[T];
        qt("error", s, E);
      }
    }
    function qt(s, v, E) {
      {
        var T = mt.ReactDebugCurrentFrame, k = T.getStackAddendum();
        k !== "" && (v += "%s", E = E.concat([k]));
        var ce = E.map(function(J) {
          return String(J);
        });
        ce.unshift("Warning: " + v), Function.prototype.apply.call(console[s], console, ce);
      }
    }
    var ka = {};
    function In(s, v) {
      {
        var E = s.constructor, T = E && (E.displayName || E.name) || "ReactClass", k = T + "." + v;
        if (ka[k])
          return;
        Ee("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", v, T), ka[k] = !0;
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
      isMounted: function(s) {
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
      enqueueForceUpdate: function(s, v, E) {
        In(s, "forceUpdate");
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
      enqueueReplaceState: function(s, v, E, T) {
        In(s, "replaceState");
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
      enqueueSetState: function(s, v, E, T) {
        In(s, "setState");
      }
    }, jt = Object.assign, Cn = {};
    Object.freeze(Cn);
    function Un(s, v, E) {
      this.props = s, this.context = v, this.refs = Cn, this.updater = E || fa;
    }
    Un.prototype.isReactComponent = {}, Un.prototype.setState = function(s, v) {
      if (typeof s != "object" && typeof s != "function" && s != null)
        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, s, v, "setState");
    }, Un.prototype.forceUpdate = function(s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    };
    {
      var Na = {
        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
        replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
      }, da = function(s, v) {
        Object.defineProperty(Un.prototype, s, {
          get: function() {
            yt("%s(...) is deprecated in plain JavaScript React classes. %s", v[0], v[1]);
          }
        });
      };
      for (var va in Na)
        Na.hasOwnProperty(va) && da(va, Na[va]);
    }
    function Kn() {
    }
    Kn.prototype = Un.prototype;
    function Qt(s, v, E) {
      this.props = s, this.context = v, this.refs = Cn, this.updater = E || fa;
    }
    var Rn = Qt.prototype = new Kn();
    Rn.constructor = Qt, jt(Rn, Un.prototype), Rn.isPureReactComponent = !0;
    function kn() {
      var s = {
        current: null
      };
      return Object.seal(s), s;
    }
    var Nn = Array.isArray;
    function Et(s) {
      return Nn(s);
    }
    function an(s) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, E = v && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return E;
      }
    }
    function Ft(s) {
      try {
        return Dt(s), !1;
      } catch {
        return !0;
      }
    }
    function Dt(s) {
      return "" + s;
    }
    function xt(s) {
      if (Ft(s))
        return Ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", an(s)), Dt(s);
    }
    function zn(s, v, E) {
      var T = s.displayName;
      if (T)
        return T;
      var k = v.displayName || v.name || "";
      return k !== "" ? E + "(" + k + ")" : E;
    }
    function Jn(s) {
      return s.displayName || "Context";
    }
    function Tn(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && Ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case Se:
          return "Fragment";
        case Fe:
          return "Portal";
        case $e:
          return "Profiler";
        case d:
          return "StrictMode";
        case P:
          return "Suspense";
        case ae:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case N:
            var v = s;
            return Jn(v) + ".Consumer";
          case ne:
            var E = s;
            return Jn(E._context) + ".Provider";
          case Ve:
            return zn(s, s.render, "ForwardRef");
          case Q:
            var T = s.displayName || null;
            return T !== null ? T : Tn(s.type) || "Memo";
          case de: {
            var k = s, ce = k._payload, J = k._init;
            try {
              return Tn(J(ce));
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
    }, pn, ea, rn;
    rn = {};
    function Hn(s) {
      if (pa.call(s, "ref")) {
        var v = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function gt(s) {
      if (pa.call(s, "key")) {
        var v = Object.getOwnPropertyDescriptor(s, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function ta(s, v) {
      var E = function() {
        pn || (pn = !0, Ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
      };
      E.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: E,
        configurable: !0
      });
    }
    function Za(s, v) {
      var E = function() {
        ea || (ea = !0, Ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
      };
      E.isReactWarning = !0, Object.defineProperty(s, "ref", {
        get: E,
        configurable: !0
      });
    }
    function er(s) {
      if (typeof s.ref == "string" && ye.current && s.__self && ye.current.stateNode !== s.__self) {
        var v = Tn(ye.current.type);
        rn[v] || (Ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', v, s.ref), rn[v] = !0);
      }
    }
    var F = function(s, v, E, T, k, ce, J) {
      var pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: W,
        // Built-in properties that belong on the element
        type: s,
        key: v,
        ref: E,
        props: J,
        // Record the component responsible for creating this element.
        _owner: ce
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
        value: T
      }), Object.defineProperty(pe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(pe.props), Object.freeze(pe)), pe;
    };
    function te(s, v, E) {
      var T, k = {}, ce = null, J = null, pe = null, Me = null;
      if (v != null) {
        Hn(v) && (J = v.ref, er(v)), gt(v) && (xt(v.key), ce = "" + v.key), pe = v.__self === void 0 ? null : v.__self, Me = v.__source === void 0 ? null : v.__source;
        for (T in v)
          pa.call(v, T) && !Zn.hasOwnProperty(T) && (k[T] = v[T]);
      }
      var Ie = arguments.length - 2;
      if (Ie === 1)
        k.children = E;
      else if (Ie > 1) {
        for (var tt = Array(Ie), nt = 0; nt < Ie; nt++)
          tt[nt] = arguments[nt + 2];
        Object.freeze && Object.freeze(tt), k.children = tt;
      }
      if (s && s.defaultProps) {
        var lt = s.defaultProps;
        for (T in lt)
          k[T] === void 0 && (k[T] = lt[T]);
      }
      if (ce || J) {
        var vt = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
        ce && ta(k, vt), J && Za(k, vt);
      }
      return F(s, ce, J, pe, Me, ye.current, k);
    }
    function De(s, v) {
      var E = F(s.type, v, s.ref, s._self, s._source, s._owner, s.props);
      return E;
    }
    function We(s, v, E) {
      if (s == null)
        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
      var T, k = jt({}, s.props), ce = s.key, J = s.ref, pe = s._self, Me = s._source, Ie = s._owner;
      if (v != null) {
        Hn(v) && (J = v.ref, Ie = ye.current), gt(v) && (xt(v.key), ce = "" + v.key);
        var tt;
        s.type && s.type.defaultProps && (tt = s.type.defaultProps);
        for (T in v)
          pa.call(v, T) && !Zn.hasOwnProperty(T) && (v[T] === void 0 && tt !== void 0 ? k[T] = tt[T] : k[T] = v[T]);
      }
      var nt = arguments.length - 2;
      if (nt === 1)
        k.children = E;
      else if (nt > 1) {
        for (var lt = Array(nt), vt = 0; vt < nt; vt++)
          lt[vt] = arguments[vt + 2];
        k.children = lt;
      }
      return F(s.type, ce, J, pe, Me, Ie, k);
    }
    function Xe(s) {
      return typeof s == "object" && s !== null && s.$$typeof === W;
    }
    var _t = ".", bt = ":";
    function Dn(s) {
      var v = /[=:]/g, E = {
        "=": "=0",
        ":": "=2"
      }, T = s.replace(v, function(k) {
        return E[k];
      });
      return "$" + T;
    }
    var et = !1, jn = /\/+/g;
    function ut(s) {
      return s.replace(jn, "$&/");
    }
    function ot(s, v) {
      return typeof s == "object" && s !== null && s.key != null ? (xt(s.key), Dn("" + s.key)) : v.toString(36);
    }
    function za(s, v, E, T, k) {
      var ce = typeof s;
      (ce === "undefined" || ce === "boolean") && (s = null);
      var J = !1;
      if (s === null)
        J = !0;
      else
        switch (ce) {
          case "string":
          case "number":
            J = !0;
            break;
          case "object":
            switch (s.$$typeof) {
              case W:
              case Fe:
                J = !0;
            }
        }
      if (J) {
        var pe = s, Me = k(pe), Ie = T === "" ? _t + ot(pe, 0) : T;
        if (Et(Me)) {
          var tt = "";
          Ie != null && (tt = ut(Ie) + "/"), za(Me, v, tt, "", function(df) {
            return df;
          });
        } else Me != null && (Xe(Me) && (Me.key && (!pe || pe.key !== Me.key) && xt(Me.key), Me = De(
          Me,
          // Keep both the (mapped) and old keys if they differ, just as
          // traverseAllChildren used to do for objects as children
          E + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          (Me.key && (!pe || pe.key !== Me.key) ? (
            // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
            // eslint-disable-next-line react-internal/safe-string-coercion
            ut("" + Me.key) + "/"
          ) : "") + Ie
        )), v.push(Me));
        return 1;
      }
      var nt, lt, vt = 0, Ge = T === "" ? _t : T + bt;
      if (Et(s))
        for (var Hr = 0; Hr < s.length; Hr++)
          nt = s[Hr], lt = Ge + ot(nt, Hr), vt += za(nt, v, E, lt, k);
      else {
        var Ji = H(s);
        if (typeof Ji == "function") {
          var oo = s;
          Ji === oo.entries && (et || yt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), et = !0);
          for (var ff = Ji.call(oo), ir, lo = 0; !(ir = ff.next()).done; )
            nt = ir.value, lt = Ge + ot(nt, lo++), vt += za(nt, v, E, lt, k);
        } else if (ce === "object") {
          var so = String(s);
          throw new Error("Objects are not valid as a React child (found: " + (so === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : so) + "). If you meant to render a collection of children, use an array instead.");
        }
      }
      return vt;
    }
    function ha(s, v, E) {
      if (s == null)
        return s;
      var T = [], k = 0;
      return za(s, T, "", "", function(ce) {
        return v.call(E, ce, k++);
      }), T;
    }
    function li(s) {
      var v = 0;
      return ha(s, function() {
        v++;
      }), v;
    }
    function qi(s, v, E) {
      ha(s, function() {
        v.apply(this, arguments);
      }, E);
    }
    function Qu(s) {
      return ha(s, function(v) {
        return v;
      }) || [];
    }
    function si(s) {
      if (!Xe(s))
        throw new Error("React.Children.only expected to receive a single React element child.");
      return s;
    }
    function ci(s) {
      var v = {
        $$typeof: N,
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
        $$typeof: ne,
        _context: v
      };
      var E = !1, T = !1, k = !1;
      {
        var ce = {
          $$typeof: N,
          _context: v
        };
        Object.defineProperties(ce, {
          Provider: {
            get: function() {
              return T || (T = !0, Ee("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), v.Provider;
            },
            set: function(J) {
              v.Provider = J;
            }
          },
          _currentValue: {
            get: function() {
              return v._currentValue;
            },
            set: function(J) {
              v._currentValue = J;
            }
          },
          _currentValue2: {
            get: function() {
              return v._currentValue2;
            },
            set: function(J) {
              v._currentValue2 = J;
            }
          },
          _threadCount: {
            get: function() {
              return v._threadCount;
            },
            set: function(J) {
              v._threadCount = J;
            }
          },
          Consumer: {
            get: function() {
              return E || (E = !0, Ee("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), v.Consumer;
            }
          },
          displayName: {
            get: function() {
              return v.displayName;
            },
            set: function(J) {
              k || (yt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", J), k = !0);
            }
          }
        }), v.Consumer = ce;
      }
      return v._currentRenderer = null, v._currentRenderer2 = null, v;
    }
    var tr = -1, Or = 0, nr = 1, ma = 2;
    function ya(s) {
      if (s._status === tr) {
        var v = s._result, E = v();
        if (E.then(function(ce) {
          if (s._status === Or || s._status === tr) {
            var J = s;
            J._status = nr, J._result = ce;
          }
        }, function(ce) {
          if (s._status === Or || s._status === tr) {
            var J = s;
            J._status = ma, J._result = ce;
          }
        }), s._status === tr) {
          var T = s;
          T._status = Or, T._result = E;
        }
      }
      if (s._status === nr) {
        var k = s._result;
        return k === void 0 && Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, k), "default" in k || Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, k), k.default;
      } else
        throw s._result;
    }
    function Ha(s) {
      var v = {
        // We use these fields to store the result.
        _status: tr,
        _result: s
      }, E = {
        $$typeof: de,
        _payload: v,
        _init: ya
      };
      {
        var T, k;
        Object.defineProperties(E, {
          defaultProps: {
            configurable: !0,
            get: function() {
              return T;
            },
            set: function(ce) {
              Ee("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), T = ce, Object.defineProperty(E, "defaultProps", {
                enumerable: !0
              });
            }
          },
          propTypes: {
            configurable: !0,
            get: function() {
              return k;
            },
            set: function(ce) {
              Ee("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), k = ce, Object.defineProperty(E, "propTypes", {
                enumerable: !0
              });
            }
          }
        });
      }
      return E;
    }
    function fi(s) {
      s != null && s.$$typeof === Q ? Ee("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof s != "function" ? Ee("forwardRef requires a render function but was given %s.", s === null ? "null" : typeof s) : s.length !== 0 && s.length !== 2 && Ee("forwardRef render functions accept exactly two parameters: props and ref. %s", s.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), s != null && (s.defaultProps != null || s.propTypes != null) && Ee("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
      var v = {
        $$typeof: Ve,
        render: s
      };
      {
        var E;
        Object.defineProperty(v, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return E;
          },
          set: function(T) {
            E = T, !s.name && !s.displayName && (s.displayName = T);
          }
        });
      }
      return v;
    }
    var wr;
    wr = Symbol.for("react.module.reference");
    function p(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === Se || s === $e || Pe || s === d || s === P || s === ae || Te || s === I || ze || Ce || Ht || typeof s == "object" && s !== null && (s.$$typeof === de || s.$$typeof === Q || s.$$typeof === ne || s.$$typeof === N || s.$$typeof === Ve || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === wr || s.getModuleId !== void 0));
    }
    function M(s, v) {
      p(s) || Ee("memo: The first argument must be a component. Instead received: %s", s === null ? "null" : typeof s);
      var E = {
        $$typeof: Q,
        type: s,
        compare: v === void 0 ? null : v
      };
      {
        var T;
        Object.defineProperty(E, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return T;
          },
          set: function(k) {
            T = k, !s.name && !s.displayName && (s.displayName = k);
          }
        });
      }
      return E;
    }
    function U() {
      var s = X.current;
      return s === null && Ee(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), s;
    }
    function oe(s) {
      var v = U();
      if (s._context !== void 0) {
        var E = s._context;
        E.Consumer === s ? Ee("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : E.Provider === s && Ee("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
      }
      return v.useContext(s);
    }
    function we(s) {
      var v = U();
      return v.useState(s);
    }
    function He(s, v, E) {
      var T = U();
      return T.useReducer(s, v, E);
    }
    function le(s) {
      var v = U();
      return v.useRef(s);
    }
    function xe(s, v) {
      var E = U();
      return E.useEffect(s, v);
    }
    function Ot(s, v) {
      var E = U();
      return E.useInsertionEffect(s, v);
    }
    function rt(s, v) {
      var E = U();
      return E.useLayoutEffect(s, v);
    }
    function ct(s, v) {
      var E = U();
      return E.useCallback(s, v);
    }
    function un(s, v) {
      var E = U();
      return E.useMemo(s, v);
    }
    function ja(s, v, E) {
      var T = U();
      return T.useImperativeHandle(s, v, E);
    }
    function na(s, v) {
      {
        var E = U();
        return E.useDebugValue(s, v);
      }
    }
    function Vt() {
      var s = U();
      return s.useTransition();
    }
    function Fn(s) {
      var v = U();
      return v.useDeferredValue(s);
    }
    function _e() {
      var s = U();
      return s.useId();
    }
    function ar(s, v, E) {
      var T = U();
      return T.useSyncExternalStore(s, v, E);
    }
    var Mr = 0, Wu, Xu, Iu, Ku, Ju, Zu, eo;
    function Bl() {
    }
    Bl.__reactDisabledLog = !0;
    function lf() {
      {
        if (Mr === 0) {
          Wu = console.log, Xu = console.info, Iu = console.warn, Ku = console.error, Ju = console.group, Zu = console.groupCollapsed, eo = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: Bl,
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
        Mr++;
      }
    }
    function to() {
      {
        if (Mr--, Mr === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: jt({}, s, {
              value: Wu
            }),
            info: jt({}, s, {
              value: Xu
            }),
            warn: jt({}, s, {
              value: Iu
            }),
            error: jt({}, s, {
              value: Ku
            }),
            group: jt({}, s, {
              value: Ju
            }),
            groupCollapsed: jt({}, s, {
              value: Zu
            }),
            groupEnd: jt({}, s, {
              value: eo
            })
          });
        }
        Mr < 0 && Ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var di = mt.ReactCurrentDispatcher, aa;
    function Ar(s, v, E) {
      {
        if (aa === void 0)
          try {
            throw Error();
          } catch (k) {
            var T = k.stack.trim().match(/\n( *(at )?)/);
            aa = T && T[1] || "";
          }
        return `
` + aa + s;
      }
    }
    var Lr = !1, Qi;
    {
      var no = typeof WeakMap == "function" ? WeakMap : Map;
      Qi = new no();
    }
    function Yl(s, v) {
      if (!s || Lr)
        return "";
      {
        var E = Qi.get(s);
        if (E !== void 0)
          return E;
      }
      var T;
      Lr = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ce;
      ce = di.current, di.current = null, lf();
      try {
        if (v) {
          var J = function() {
            throw Error();
          };
          if (Object.defineProperty(J.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(J, []);
            } catch (Ge) {
              T = Ge;
            }
            Reflect.construct(s, [], J);
          } else {
            try {
              J.call();
            } catch (Ge) {
              T = Ge;
            }
            s.call(J.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ge) {
            T = Ge;
          }
          s();
        }
      } catch (Ge) {
        if (Ge && T && typeof Ge.stack == "string") {
          for (var pe = Ge.stack.split(`
`), Me = T.stack.split(`
`), Ie = pe.length - 1, tt = Me.length - 1; Ie >= 1 && tt >= 0 && pe[Ie] !== Me[tt]; )
            tt--;
          for (; Ie >= 1 && tt >= 0; Ie--, tt--)
            if (pe[Ie] !== Me[tt]) {
              if (Ie !== 1 || tt !== 1)
                do
                  if (Ie--, tt--, tt < 0 || pe[Ie] !== Me[tt]) {
                    var nt = `
` + pe[Ie].replace(" at new ", " at ");
                    return s.displayName && nt.includes("<anonymous>") && (nt = nt.replace("<anonymous>", s.displayName)), typeof s == "function" && Qi.set(s, nt), nt;
                  }
                while (Ie >= 1 && tt >= 0);
              break;
            }
        }
      } finally {
        Lr = !1, di.current = ce, to(), Error.prepareStackTrace = k;
      }
      var lt = s ? s.displayName || s.name : "", vt = lt ? Ar(lt) : "";
      return typeof s == "function" && Qi.set(s, vt), vt;
    }
    function ao(s, v, E) {
      return Yl(s, !1);
    }
    function sf(s) {
      var v = s.prototype;
      return !!(v && v.isReactComponent);
    }
    function Ur(s, v, E) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return Yl(s, sf(s));
      if (typeof s == "string")
        return Ar(s);
      switch (s) {
        case P:
          return Ar("Suspense");
        case ae:
          return Ar("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case Ve:
            return ao(s.render);
          case Q:
            return Ur(s.type, v, E);
          case de: {
            var T = s, k = T._payload, ce = T._init;
            try {
              return Ur(ce(k), v, E);
            } catch {
            }
          }
        }
      return "";
    }
    var $l = {}, ro = mt.ReactDebugCurrentFrame;
    function Wi(s) {
      if (s) {
        var v = s._owner, E = Ur(s.type, s._source, v ? v.type : null);
        ro.setExtraStackFrame(E);
      } else
        ro.setExtraStackFrame(null);
    }
    function Pl(s, v, E, T, k) {
      {
        var ce = Function.call.bind(pa);
        for (var J in s)
          if (ce(s, J)) {
            var pe = void 0;
            try {
              if (typeof s[J] != "function") {
                var Me = Error((T || "React class") + ": " + E + " type `" + J + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[J] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Me.name = "Invariant Violation", Me;
              }
              pe = s[J](v, J, T, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ie) {
              pe = Ie;
            }
            pe && !(pe instanceof Error) && (Wi(k), Ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", E, J, typeof pe), Wi(null)), pe instanceof Error && !(pe.message in $l) && ($l[pe.message] = !0, Wi(k), Ee("Failed %s type: %s", E, pe.message), Wi(null));
          }
      }
    }
    function je(s) {
      if (s) {
        var v = s._owner, E = Ur(s.type, s._source, v ? v.type : null);
        ve(E);
      } else
        ve(null);
    }
    var io;
    io = !1;
    function uo() {
      if (ye.current) {
        var s = Tn(ye.current.type);
        if (s)
          return `

Check the render method of \`` + s + "`.";
      }
      return "";
    }
    function be(s) {
      if (s !== void 0) {
        var v = s.fileName.replace(/^.*[\\\/]/, ""), E = s.lineNumber;
        return `

Check your code at ` + v + ":" + E + ".";
      }
      return "";
    }
    function Gl(s) {
      return s != null ? be(s.__source) : "";
    }
    var on = {};
    function vi(s) {
      var v = uo();
      if (!v) {
        var E = typeof s == "string" ? s : s.displayName || s.name;
        E && (v = `

Check the top-level render call using <` + E + ">.");
      }
      return v;
    }
    function kr(s, v) {
      if (!(!s._store || s._store.validated || s.key != null)) {
        s._store.validated = !0;
        var E = vi(v);
        if (!on[E]) {
          on[E] = !0;
          var T = "";
          s && s._owner && s._owner !== ye.current && (T = " It was passed a child from " + Tn(s._owner.type) + "."), je(s), Ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, T), je(null);
        }
      }
    }
    function ql(s, v) {
      if (typeof s == "object") {
        if (Et(s))
          for (var E = 0; E < s.length; E++) {
            var T = s[E];
            Xe(T) && kr(T, v);
          }
        else if (Xe(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var k = H(s);
          if (typeof k == "function" && k !== s.entries)
            for (var ce = k.call(s), J; !(J = ce.next()).done; )
              Xe(J.value) && kr(J.value, v);
        }
      }
    }
    function Bt(s) {
      {
        var v = s.type;
        if (v == null || typeof v == "string")
          return;
        var E;
        if (typeof v == "function")
          E = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === Ve || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === Q))
          E = v.propTypes;
        else
          return;
        if (E) {
          var T = Tn(v);
          Pl(E, s.props, "prop", T, s);
        } else if (v.PropTypes !== void 0 && !io) {
          io = !0;
          var k = Tn(v);
          Ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && Ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ft(s) {
      {
        for (var v = Object.keys(s.props), E = 0; E < v.length; E++) {
          var T = v[E];
          if (T !== "children" && T !== "key") {
            je(s), Ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), je(null);
            break;
          }
        }
        s.ref !== null && (je(s), Ee("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    function Ql(s, v, E) {
      var T = p(s);
      if (!T) {
        var k = "";
        (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var ce = Gl(v);
        ce ? k += ce : k += uo();
        var J;
        s === null ? J = "null" : Et(s) ? J = "array" : s !== void 0 && s.$$typeof === W ? (J = "<" + (Tn(s.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : J = typeof s, Ee("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, k);
      }
      var pe = te.apply(this, arguments);
      if (pe == null)
        return pe;
      if (T)
        for (var Me = 2; Me < arguments.length; Me++)
          ql(arguments[Me], s);
      return s === Se ? ft(pe) : Bt(pe), pe;
    }
    var Vn = !1;
    function xn(s) {
      var v = Ql.bind(null, s);
      return v.type = s, Vn || (Vn = !0, yt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(v, "type", {
        enumerable: !1,
        get: function() {
          return yt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
            value: s
          }), s;
        }
      }), v;
    }
    function Fa(s, v, E) {
      for (var T = We.apply(this, arguments), k = 2; k < arguments.length; k++)
        ql(arguments[k], T.type);
      return Bt(T), T;
    }
    function cf(s, v) {
      var E = ee.transition;
      ee.transition = {};
      var T = ee.transition;
      ee.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        s();
      } finally {
        if (ee.transition = E, E === null && T._updatedFibers) {
          var k = T._updatedFibers.size;
          k > 10 && yt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), T._updatedFibers.clear();
        }
      }
    }
    var Xi = !1, pi = null;
    function Wl(s) {
      if (pi === null)
        try {
          var v = ("require" + Math.random()).slice(0, 7), E = h && h[v];
          pi = E.call(h, "timers").setImmediate;
        } catch {
          pi = function(k) {
            Xi === !1 && (Xi = !0, typeof MessageChannel > "u" && Ee("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var ce = new MessageChannel();
            ce.port1.onmessage = k, ce.port2.postMessage(void 0);
          };
        }
      return pi(s);
    }
    var Nr = 0, Xl = !1;
    function Il(s) {
      {
        var v = Nr;
        Nr++, q.current === null && (q.current = []);
        var E = q.isBatchingLegacy, T;
        try {
          if (q.isBatchingLegacy = !0, T = s(), !E && q.didScheduleLegacyUpdate) {
            var k = q.current;
            k !== null && (q.didScheduleLegacyUpdate = !1, Ki(k));
          }
        } catch (lt) {
          throw rr(v), lt;
        } finally {
          q.isBatchingLegacy = E;
        }
        if (T !== null && typeof T == "object" && typeof T.then == "function") {
          var ce = T, J = !1, pe = {
            then: function(lt, vt) {
              J = !0, ce.then(function(Ge) {
                rr(v), Nr === 0 ? Ii(Ge, lt, vt) : lt(Ge);
              }, function(Ge) {
                rr(v), vt(Ge);
              });
            }
          };
          return !Xl && typeof Promise < "u" && Promise.resolve().then(function() {
          }).then(function() {
            J || (Xl = !0, Ee("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
          }), pe;
        } else {
          var Me = T;
          if (rr(v), Nr === 0) {
            var Ie = q.current;
            Ie !== null && (Ki(Ie), q.current = null);
            var tt = {
              then: function(lt, vt) {
                q.current === null ? (q.current = [], Ii(Me, lt, vt)) : lt(Me);
              }
            };
            return tt;
          } else {
            var nt = {
              then: function(lt, vt) {
                lt(Me);
              }
            };
            return nt;
          }
        }
      }
    }
    function rr(s) {
      s !== Nr - 1 && Ee("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Nr = s;
    }
    function Ii(s, v, E) {
      {
        var T = q.current;
        if (T !== null)
          try {
            Ki(T), Wl(function() {
              T.length === 0 ? (q.current = null, v(s)) : Ii(s, v, E);
            });
          } catch (k) {
            E(k);
          }
        else
          v(s);
      }
    }
    var zr = !1;
    function Ki(s) {
      if (!zr) {
        zr = !0;
        var v = 0;
        try {
          for (; v < s.length; v++) {
            var E = s[v];
            do
              E = E(!0);
            while (E !== null);
          }
          s.length = 0;
        } catch (T) {
          throw s = s.slice(v + 1), T;
        } finally {
          zr = !1;
        }
      }
    }
    var Kl = Ql, Jl = Fa, Zl = xn, es = {
      map: ha,
      forEach: qi,
      count: li,
      toArray: Qu,
      only: si
    };
    R.Children = es, R.Component = Un, R.Fragment = Se, R.Profiler = $e, R.PureComponent = Qt, R.StrictMode = d, R.Suspense = P, R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mt, R.act = Il, R.cloneElement = Jl, R.createContext = ci, R.createElement = Kl, R.createFactory = Zl, R.createRef = kn, R.forwardRef = fi, R.isValidElement = Xe, R.lazy = Ha, R.memo = M, R.startTransition = cf, R.unstable_act = Il, R.useCallback = ct, R.useContext = oe, R.useDebugValue = na, R.useDeferredValue = Fn, R.useEffect = xe, R.useId = _e, R.useImperativeHandle = ja, R.useInsertionEffect = Ot, R.useLayoutEffect = rt, R.useMemo = un, R.useReducer = He, R.useRef = le, R.useState = we, R.useSyncExternalStore = ar, R.useTransition = Vt, R.version = L, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(uf, uf.exports);
var lw = uf.exports;
kS.exports = lw;
var Ua = kS.exports;
const Sh = /* @__PURE__ */ ow(Ua);
var NS = { exports: {} }, Xn = {}, zS = { exports: {} }, HS = {};
(function(h) {
  /**
   * @license React
   * scheduler.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var R = !1, L = !1, W = 5;
    function Fe(F, te) {
      var De = F.length;
      F.push(te), $e(F, te, De);
    }
    function Se(F) {
      return F.length === 0 ? null : F[0];
    }
    function d(F) {
      if (F.length === 0)
        return null;
      var te = F[0], De = F.pop();
      return De !== te && (F[0] = De, ne(F, De, 0)), te;
    }
    function $e(F, te, De) {
      for (var We = De; We > 0; ) {
        var Xe = We - 1 >>> 1, _t = F[Xe];
        if (N(_t, te) > 0)
          F[Xe] = te, F[We] = _t, We = Xe;
        else
          return;
      }
    }
    function ne(F, te, De) {
      for (var We = De, Xe = F.length, _t = Xe >>> 1; We < _t; ) {
        var bt = (We + 1) * 2 - 1, Dn = F[bt], et = bt + 1, jn = F[et];
        if (N(Dn, te) < 0)
          et < Xe && N(jn, Dn) < 0 ? (F[We] = jn, F[et] = te, We = et) : (F[We] = Dn, F[bt] = te, We = bt);
        else if (et < Xe && N(jn, te) < 0)
          F[We] = jn, F[et] = te, We = et;
        else
          return;
      }
    }
    function N(F, te) {
      var De = F.sortIndex - te.sortIndex;
      return De !== 0 ? De : F.id - te.id;
    }
    var Ve = 1, P = 2, ae = 3, Q = 4, de = 5;
    function I(F, te) {
    }
    var j = typeof performance == "object" && typeof performance.now == "function";
    if (j) {
      var w = performance;
      h.unstable_now = function() {
        return w.now();
      };
    } else {
      var H = Date, X = H.now();
      h.unstable_now = function() {
        return H.now() - X;
      };
    }
    var ee = 1073741823, q = -1, ye = 250, ie = 5e3, ke = 1e4, ve = ee, ze = [], Ce = [], Ht = 1, Te = null, Pe = ae, mt = !1, yt = !1, Ee = !1, qt = typeof setTimeout == "function" ? setTimeout : null, ka = typeof clearTimeout == "function" ? clearTimeout : null, In = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function fa(F) {
      for (var te = Se(Ce); te !== null; ) {
        if (te.callback === null)
          d(Ce);
        else if (te.startTime <= F)
          d(Ce), te.sortIndex = te.expirationTime, Fe(ze, te);
        else
          return;
        te = Se(Ce);
      }
    }
    function jt(F) {
      if (Ee = !1, fa(F), !yt)
        if (Se(ze) !== null)
          yt = !0, Hn(Cn);
        else {
          var te = Se(Ce);
          te !== null && gt(jt, te.startTime - F);
        }
    }
    function Cn(F, te) {
      yt = !1, Ee && (Ee = !1, ta()), mt = !0;
      var De = Pe;
      try {
        var We;
        if (!L) return Un(F, te);
      } finally {
        Te = null, Pe = De, mt = !1;
      }
    }
    function Un(F, te) {
      var De = te;
      for (fa(De), Te = Se(ze); Te !== null && !R && !(Te.expirationTime > De && (!F || Jn())); ) {
        var We = Te.callback;
        if (typeof We == "function") {
          Te.callback = null, Pe = Te.priorityLevel;
          var Xe = Te.expirationTime <= De, _t = We(Xe);
          De = h.unstable_now(), typeof _t == "function" ? Te.callback = _t : Te === Se(ze) && d(ze), fa(De);
        } else
          d(ze);
        Te = Se(ze);
      }
      if (Te !== null)
        return !0;
      var bt = Se(Ce);
      return bt !== null && gt(jt, bt.startTime - De), !1;
    }
    function Na(F, te) {
      switch (F) {
        case Ve:
        case P:
        case ae:
        case Q:
        case de:
          break;
        default:
          F = ae;
      }
      var De = Pe;
      Pe = F;
      try {
        return te();
      } finally {
        Pe = De;
      }
    }
    function da(F) {
      var te;
      switch (Pe) {
        case Ve:
        case P:
        case ae:
          te = ae;
          break;
        default:
          te = Pe;
          break;
      }
      var De = Pe;
      Pe = te;
      try {
        return F();
      } finally {
        Pe = De;
      }
    }
    function va(F) {
      var te = Pe;
      return function() {
        var De = Pe;
        Pe = te;
        try {
          return F.apply(this, arguments);
        } finally {
          Pe = De;
        }
      };
    }
    function Kn(F, te, De) {
      var We = h.unstable_now(), Xe;
      if (typeof De == "object" && De !== null) {
        var _t = De.delay;
        typeof _t == "number" && _t > 0 ? Xe = We + _t : Xe = We;
      } else
        Xe = We;
      var bt;
      switch (F) {
        case Ve:
          bt = q;
          break;
        case P:
          bt = ye;
          break;
        case de:
          bt = ve;
          break;
        case Q:
          bt = ke;
          break;
        case ae:
        default:
          bt = ie;
          break;
      }
      var Dn = Xe + bt, et = {
        id: Ht++,
        callback: te,
        priorityLevel: F,
        startTime: Xe,
        expirationTime: Dn,
        sortIndex: -1
      };
      return Xe > We ? (et.sortIndex = Xe, Fe(Ce, et), Se(ze) === null && et === Se(Ce) && (Ee ? ta() : Ee = !0, gt(jt, Xe - We))) : (et.sortIndex = Dn, Fe(ze, et), !yt && !mt && (yt = !0, Hn(Cn))), et;
    }
    function Qt() {
    }
    function Rn() {
      !yt && !mt && (yt = !0, Hn(Cn));
    }
    function kn() {
      return Se(ze);
    }
    function Nn(F) {
      F.callback = null;
    }
    function Et() {
      return Pe;
    }
    var an = !1, Ft = null, Dt = -1, xt = W, zn = -1;
    function Jn() {
      var F = h.unstable_now() - zn;
      return !(F < xt);
    }
    function Tn() {
    }
    function pa(F) {
      if (F < 0 || F > 125) {
        console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        return;
      }
      F > 0 ? xt = Math.floor(1e3 / F) : xt = W;
    }
    var Zn = function() {
      if (Ft !== null) {
        var F = h.unstable_now();
        zn = F;
        var te = !0, De = !0;
        try {
          De = Ft(te, F);
        } finally {
          De ? pn() : (an = !1, Ft = null);
        }
      } else
        an = !1;
    }, pn;
    if (typeof In == "function")
      pn = function() {
        In(Zn);
      };
    else if (typeof MessageChannel < "u") {
      var ea = new MessageChannel(), rn = ea.port2;
      ea.port1.onmessage = Zn, pn = function() {
        rn.postMessage(null);
      };
    } else
      pn = function() {
        qt(Zn, 0);
      };
    function Hn(F) {
      Ft = F, an || (an = !0, pn());
    }
    function gt(F, te) {
      Dt = qt(function() {
        F(h.unstable_now());
      }, te);
    }
    function ta() {
      ka(Dt), Dt = -1;
    }
    var Za = Tn, er = null;
    h.unstable_IdlePriority = de, h.unstable_ImmediatePriority = Ve, h.unstable_LowPriority = Q, h.unstable_NormalPriority = ae, h.unstable_Profiling = er, h.unstable_UserBlockingPriority = P, h.unstable_cancelCallback = Nn, h.unstable_continueExecution = Rn, h.unstable_forceFrameRate = pa, h.unstable_getCurrentPriorityLevel = Et, h.unstable_getFirstCallbackNode = kn, h.unstable_next = da, h.unstable_pauseExecution = Qt, h.unstable_requestPaint = Za, h.unstable_runWithPriority = Na, h.unstable_scheduleCallback = Kn, h.unstable_shouldYield = Jn, h.unstable_wrapCallback = va, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(HS);
zS.exports = HS;
var sw = zS.exports;
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function() {
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
  var h = Ua, R = sw, L = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, W = !1;
  function Fe(e) {
    W = e;
  }
  function Se(e) {
    if (!W) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
        n[a - 1] = arguments[a];
      $e("warn", e, n);
    }
  }
  function d(e) {
    if (!W) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
        n[a - 1] = arguments[a];
      $e("error", e, n);
    }
  }
  function $e(e, t, n) {
    {
      var a = L.ReactDebugCurrentFrame, r = a.getStackAddendum();
      r !== "" && (t += "%s", n = n.concat([r]));
      var i = n.map(function(u) {
        return String(u);
      });
      i.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, i);
    }
  }
  var ne = 0, N = 1, Ve = 2, P = 3, ae = 4, Q = 5, de = 6, I = 7, j = 8, w = 9, H = 10, X = 11, ee = 12, q = 13, ye = 14, ie = 15, ke = 16, ve = 17, ze = 18, Ce = 19, Ht = 21, Te = 22, Pe = 23, mt = 24, yt = 25, Ee = !0, qt = !1, ka = !1, In = !1, fa = !1, jt = !0, Cn = !1, Un = !0, Na = !0, da = !0, va = !0, Kn = /* @__PURE__ */ new Set(), Qt = {}, Rn = {};
  function kn(e, t) {
    Nn(e, t), Nn(e + "Capture", t);
  }
  function Nn(e, t) {
    Qt[e] && d("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Qt[e] = t;
    {
      var n = e.toLowerCase();
      Rn[n] = e, e === "onDoubleClick" && (Rn.ondblclick = e);
    }
    for (var a = 0; a < t.length; a++)
      Kn.add(t[a]);
  }
  var Et = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", an = Object.prototype.hasOwnProperty;
  function Ft(e) {
    {
      var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
      return n;
    }
  }
  function Dt(e) {
    try {
      return xt(e), !1;
    } catch {
      return !0;
    }
  }
  function xt(e) {
    return "" + e;
  }
  function zn(e, t) {
    if (Dt(e))
      return d("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ft(e)), xt(e);
  }
  function Jn(e) {
    if (Dt(e))
      return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ft(e)), xt(e);
  }
  function Tn(e, t) {
    if (Dt(e))
      return d("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ft(e)), xt(e);
  }
  function pa(e, t) {
    if (Dt(e))
      return d("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ft(e)), xt(e);
  }
  function Zn(e) {
    if (Dt(e))
      return d("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Ft(e)), xt(e);
  }
  function pn(e) {
    if (Dt(e))
      return d("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Ft(e)), xt(e);
  }
  var ea = 0, rn = 1, Hn = 2, gt = 3, ta = 4, Za = 5, er = 6, F = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", te = F + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", De = new RegExp("^[" + F + "][" + te + "]*$"), We = {}, Xe = {};
  function _t(e) {
    return an.call(Xe, e) ? !0 : an.call(We, e) ? !1 : De.test(e) ? (Xe[e] = !0, !0) : (We[e] = !0, d("Invalid attribute name: `%s`", e), !1);
  }
  function bt(e, t, n) {
    return t !== null ? t.type === ea : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
  }
  function Dn(e, t, n, a) {
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
  function et(e, t, n, a) {
    if (t === null || typeof t > "u" || Dn(e, t, n, a))
      return !0;
    if (a)
      return !1;
    if (n !== null)
      switch (n.type) {
        case gt:
          return !t;
        case ta:
          return t === !1;
        case Za:
          return isNaN(t);
        case er:
          return isNaN(t) || t < 1;
      }
    return !1;
  }
  function jn(e) {
    return ot.hasOwnProperty(e) ? ot[e] : null;
  }
  function ut(e, t, n, a, r, i, u) {
    this.acceptsBooleans = t === Hn || t === gt || t === ta, this.attributeName = a, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = u;
  }
  var ot = {}, za = [
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
  za.forEach(function(e) {
    ot[e] = new ut(
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
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0], n = e[1];
    ot[t] = new ut(
      t,
      rn,
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
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ot[e] = new ut(
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
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ot[e] = new ut(
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
  ].forEach(function(e) {
    ot[e] = new ut(
      e,
      gt,
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
  ].forEach(function(e) {
    ot[e] = new ut(
      e,
      gt,
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
  ].forEach(function(e) {
    ot[e] = new ut(
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
  ].forEach(function(e) {
    ot[e] = new ut(
      e,
      er,
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
  }), ["rowSpan", "start"].forEach(function(e) {
    ot[e] = new ut(
      e,
      Za,
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
  var ha = /[\-\:]([a-z])/g, li = function(e) {
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
  ].forEach(function(e) {
    var t = e.replace(ha, li);
    ot[t] = new ut(
      t,
      rn,
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
  ].forEach(function(e) {
    var t = e.replace(ha, li);
    ot[t] = new ut(
      t,
      rn,
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
  ].forEach(function(e) {
    var t = e.replace(ha, li);
    ot[t] = new ut(
      t,
      rn,
      !1,
      // mustUseProperty
      e,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
    );
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    ot[e] = new ut(
      e,
      rn,
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
  var qi = "xlinkHref";
  ot[qi] = new ut(
    "xlinkHref",
    rn,
    !1,
    // mustUseProperty
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    // sanitizeURL
    !1
  ), ["src", "href", "action", "formAction"].forEach(function(e) {
    ot[e] = new ut(
      e,
      rn,
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
  var Qu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, si = !1;
  function ci(e) {
    !si && Qu.test(e) && (si = !0, d("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
  }
  function tr(e, t, n, a) {
    if (a.mustUseProperty) {
      var r = a.propertyName;
      return e[r];
    } else {
      zn(n, t), a.sanitizeURL && ci("" + n);
      var i = a.attributeName, u = null;
      if (a.type === ta) {
        if (e.hasAttribute(i)) {
          var o = e.getAttribute(i);
          return o === "" ? !0 : et(t, n, a, !1) ? o : o === "" + n ? n : o;
        }
      } else if (e.hasAttribute(i)) {
        if (et(t, n, a, !1))
          return e.getAttribute(i);
        if (a.type === gt)
          return n;
        u = e.getAttribute(i);
      }
      return et(t, n, a, !1) ? u === null ? n : u : u === "" + n ? n : u;
    }
  }
  function Or(e, t, n, a) {
    {
      if (!_t(t))
        return;
      if (!e.hasAttribute(t))
        return n === void 0 ? void 0 : null;
      var r = e.getAttribute(t);
      return zn(n, t), r === "" + n ? n : r;
    }
  }
  function nr(e, t, n, a) {
    var r = jn(t);
    if (!bt(t, r, a)) {
      if (et(t, n, r, a) && (n = null), a || r === null) {
        if (_t(t)) {
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
          e[o] = l === gt ? !1 : "";
        } else
          e[o] = n;
        return;
      }
      var c = r.attributeName, f = r.attributeNamespace;
      if (n === null)
        e.removeAttribute(c);
      else {
        var y = r.type, m;
        y === gt || y === ta && n === !0 ? m = "" : (zn(n, c), m = "" + n, r.sanitizeURL && ci(m.toString())), f ? e.setAttributeNS(f, c, m) : e.setAttribute(c, m);
      }
    }
  }
  var ma = Symbol.for("react.element"), ya = Symbol.for("react.portal"), Ha = Symbol.for("react.fragment"), fi = Symbol.for("react.strict_mode"), wr = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), M = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), we = Symbol.for("react.suspense_list"), He = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), xe = Symbol.for("react.scope"), Ot = Symbol.for("react.debug_trace_mode"), rt = Symbol.for("react.offscreen"), ct = Symbol.for("react.legacy_hidden"), un = Symbol.for("react.cache"), ja = Symbol.for("react.tracing_marker"), na = Symbol.iterator, Vt = "@@iterator";
  function Fn(e) {
    if (e === null || typeof e != "object")
      return null;
    var t = na && e[na] || e[Vt];
    return typeof t == "function" ? t : null;
  }
  var _e = Object.assign, ar = 0, Mr, Wu, Xu, Iu, Ku, Ju, Zu;
  function eo() {
  }
  eo.__reactDisabledLog = !0;
  function Bl() {
    {
      if (ar === 0) {
        Mr = console.log, Wu = console.info, Xu = console.warn, Iu = console.error, Ku = console.group, Ju = console.groupCollapsed, Zu = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: eo,
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
      ar++;
    }
  }
  function lf() {
    {
      if (ar--, ar === 0) {
        var e = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: _e({}, e, {
            value: Mr
          }),
          info: _e({}, e, {
            value: Wu
          }),
          warn: _e({}, e, {
            value: Xu
          }),
          error: _e({}, e, {
            value: Iu
          }),
          group: _e({}, e, {
            value: Ku
          }),
          groupCollapsed: _e({}, e, {
            value: Ju
          }),
          groupEnd: _e({}, e, {
            value: Zu
          })
        });
      }
      ar < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var to = L.ReactCurrentDispatcher, di;
  function aa(e, t, n) {
    {
      if (di === void 0)
        try {
          throw Error();
        } catch (r) {
          var a = r.stack.trim().match(/\n( *(at )?)/);
          di = a && a[1] || "";
        }
      return `
` + di + e;
    }
  }
  var Ar = !1, Lr;
  {
    var Qi = typeof WeakMap == "function" ? WeakMap : Map;
    Lr = new Qi();
  }
  function no(e, t) {
    if (!e || Ar)
      return "";
    {
      var n = Lr.get(e);
      if (n !== void 0)
        return n;
    }
    var a;
    Ar = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var i;
    i = to.current, to.current = null, Bl();
    try {
      if (t) {
        var u = function() {
          throw Error();
        };
        if (Object.defineProperty(u.prototype, "props", {
          set: function() {
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
`), c = o.length - 1, f = l.length - 1; c >= 1 && f >= 0 && o[c] !== l[f]; )
          f--;
        for (; c >= 1 && f >= 0; c--, f--)
          if (o[c] !== l[f]) {
            if (c !== 1 || f !== 1)
              do
                if (c--, f--, f < 0 || o[c] !== l[f]) {
                  var y = `
` + o[c].replace(" at new ", " at ");
                  return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && Lr.set(e, y), y;
                }
              while (c >= 1 && f >= 0);
            break;
          }
      }
    } finally {
      Ar = !1, to.current = i, lf(), Error.prepareStackTrace = r;
    }
    var m = e ? e.displayName || e.name : "", S = m ? aa(m) : "";
    return typeof e == "function" && Lr.set(e, S), S;
  }
  function Yl(e, t, n) {
    return no(e, !0);
  }
  function ao(e, t, n) {
    return no(e, !1);
  }
  function sf(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function Ur(e, t, n) {
    if (e == null)
      return "";
    if (typeof e == "function")
      return no(e, sf(e));
    if (typeof e == "string")
      return aa(e);
    switch (e) {
      case oe:
        return aa("Suspense");
      case we:
        return aa("SuspenseList");
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case U:
          return ao(e.render);
        case He:
          return Ur(e.type, t, n);
        case le: {
          var a = e, r = a._payload, i = a._init;
          try {
            return Ur(i(r), t, n);
          } catch {
          }
        }
      }
    return "";
  }
  function $l(e) {
    switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
      case Q:
        return aa(e.type);
      case ke:
        return aa("Lazy");
      case q:
        return aa("Suspense");
      case Ce:
        return aa("SuspenseList");
      case ne:
      case Ve:
      case ie:
        return ao(e.type);
      case X:
        return ao(e.type.render);
      case N:
        return Yl(e.type);
      default:
        return "";
    }
  }
  function ro(e) {
    try {
      var t = "", n = e;
      do
        t += $l(n), n = n.return;
      while (n);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function Wi(e, t, n) {
    var a = e.displayName;
    if (a)
      return a;
    var r = t.displayName || t.name || "";
    return r !== "" ? n + "(" + r + ")" : n;
  }
  function Pl(e) {
    return e.displayName || "Context";
  }
  function je(e) {
    if (e == null)
      return null;
    if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case Ha:
        return "Fragment";
      case ya:
        return "Portal";
      case wr:
        return "Profiler";
      case fi:
        return "StrictMode";
      case oe:
        return "Suspense";
      case we:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case M:
          var t = e;
          return Pl(t) + ".Consumer";
        case p:
          var n = e;
          return Pl(n._context) + ".Provider";
        case U:
          return Wi(e, e.render, "ForwardRef");
        case He:
          var a = e.displayName || null;
          return a !== null ? a : je(e.type) || "Memo";
        case le: {
          var r = e, i = r._payload, u = r._init;
          try {
            return je(u(i));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  function io(e, t, n) {
    var a = t.displayName || t.name || "";
    return e.displayName || (a !== "" ? n + "(" + a + ")" : n);
  }
  function uo(e) {
    return e.displayName || "Context";
  }
  function be(e) {
    var t = e.tag, n = e.type;
    switch (t) {
      case mt:
        return "Cache";
      case w:
        var a = n;
        return uo(a) + ".Consumer";
      case H:
        var r = n;
        return uo(r._context) + ".Provider";
      case ze:
        return "DehydratedFragment";
      case X:
        return io(n, n.render, "ForwardRef");
      case I:
        return "Fragment";
      case Q:
        return n;
      case ae:
        return "Portal";
      case P:
        return "Root";
      case de:
        return "Text";
      case ke:
        return je(n);
      case j:
        return n === fi ? "StrictMode" : "Mode";
      case Te:
        return "Offscreen";
      case ee:
        return "Profiler";
      case Ht:
        return "Scope";
      case q:
        return "Suspense";
      case Ce:
        return "SuspenseList";
      case yt:
        return "TracingMarker";
      case N:
      case ne:
      case ve:
      case Ve:
      case ye:
      case ie:
        if (typeof n == "function")
          return n.displayName || n.name || null;
        if (typeof n == "string")
          return n;
        break;
    }
    return null;
  }
  var Gl = L.ReactDebugCurrentFrame, on = null, vi = !1;
  function kr() {
    {
      if (on === null)
        return null;
      var e = on._debugOwner;
      if (e !== null && typeof e < "u")
        return be(e);
    }
    return null;
  }
  function ql() {
    return on === null ? "" : ro(on);
  }
  function Bt() {
    Gl.getCurrentStack = null, on = null, vi = !1;
  }
  function ft(e) {
    Gl.getCurrentStack = e === null ? null : ql, on = e, vi = !1;
  }
  function Ql() {
    return on;
  }
  function Vn(e) {
    vi = e;
  }
  function xn(e) {
    return "" + e;
  }
  function Fa(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return pn(e), e;
      default:
        return "";
    }
  }
  var cf = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0
  };
  function Xi(e, t) {
    cf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || d("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || d("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
  }
  function pi(e) {
    var t = e.type, n = e.nodeName;
    return n && n.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Wl(e) {
    return e._valueTracker;
  }
  function Nr(e) {
    e._valueTracker = null;
  }
  function Xl(e) {
    var t = "";
    return e && (pi(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
  }
  function Il(e) {
    var t = pi(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    pn(e[t]);
    var a = "" + e[t];
    if (!(e.hasOwnProperty(t) || typeof n > "u" || typeof n.get != "function" || typeof n.set != "function")) {
      var r = n.get, i = n.set;
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return r.call(this);
        },
        set: function(o) {
          pn(o), a = "" + o, i.call(this, o);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      });
      var u = {
        getValue: function() {
          return a;
        },
        setValue: function(o) {
          pn(o), a = "" + o;
        },
        stopTracking: function() {
          Nr(e), delete e[t];
        }
      };
      return u;
    }
  }
  function rr(e) {
    Wl(e) || (e._valueTracker = Il(e));
  }
  function Ii(e) {
    if (!e)
      return !1;
    var t = Wl(e);
    if (!t)
      return !0;
    var n = t.getValue(), a = Xl(e);
    return a !== n ? (t.setValue(a), !0) : !1;
  }
  function zr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ki = !1, Kl = !1, Jl = !1, Zl = !1;
  function es(e) {
    var t = e.type === "checkbox" || e.type === "radio";
    return t ? e.checked != null : e.value != null;
  }
  function s(e, t) {
    var n = e, a = t.checked, r = _e({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: a ?? n._wrapperState.initialChecked
    });
    return r;
  }
  function v(e, t) {
    Xi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Kl && (d("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), Kl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ki && (d("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), Ki = !0);
    var n = e, a = t.defaultValue == null ? "" : t.defaultValue;
    n._wrapperState = {
      initialChecked: t.checked != null ? t.checked : t.defaultChecked,
      initialValue: Fa(t.value != null ? t.value : a),
      controlled: es(t)
    };
  }
  function E(e, t) {
    var n = e, a = t.checked;
    a != null && nr(n, "checked", a, !1);
  }
  function T(e, t) {
    var n = e;
    {
      var a = es(t);
      !n._wrapperState.controlled && a && !Zl && (d("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Zl = !0), n._wrapperState.controlled && !a && !Jl && (d("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Jl = !0);
    }
    E(e, t);
    var r = Fa(t.value), i = t.type;
    if (r != null)
      i === "number" ? (r === 0 && n.value === "" || // We explicitly want to coerce to number here if possible.
      // eslint-disable-next-line
      n.value != r) && (n.value = xn(r)) : n.value !== xn(r) && (n.value = xn(r));
    else if (i === "submit" || i === "reset") {
      n.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? pe(n, t.type, r) : t.hasOwnProperty("defaultValue") && pe(n, t.type, Fa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (n.defaultChecked = !!t.defaultChecked);
  }
  function k(e, t, n) {
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
  function ce(e, t) {
    var n = e;
    T(n, t), J(n, t);
  }
  function J(e, t) {
    var n = t.name;
    if (t.type === "radio" && n != null) {
      for (var a = e; a.parentNode; )
        a = a.parentNode;
      zn(n, "name");
      for (var r = a.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), i = 0; i < r.length; i++) {
        var u = r[i];
        if (!(u === e || u.form !== e.form)) {
          var o = Vs(u);
          if (!o)
            throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
          Ii(u), T(u, o);
        }
      }
    }
  }
  function pe(e, t, n) {
    // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
    (t !== "number" || zr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = xn(e._wrapperState.initialValue) : e.defaultValue !== xn(n) && (e.defaultValue = xn(n)));
  }
  var Me = !1, Ie = !1, tt = !1;
  function nt(e, t) {
    t.value == null && (typeof t.children == "object" && t.children !== null ? h.Children.forEach(t.children, function(n) {
      n != null && (typeof n == "string" || typeof n == "number" || Ie || (Ie = !0, d("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
    }) : t.dangerouslySetInnerHTML != null && (tt || (tt = !0, d("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Me && (d("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Me = !0);
  }
  function lt(e, t) {
    t.value != null && e.setAttribute("value", xn(Fa(t.value)));
  }
  var vt = Array.isArray;
  function Ge(e) {
    return vt(e);
  }
  var Hr;
  Hr = !1;
  function Ji() {
    var e = kr();
    return e ? `

Check the render method of \`` + e + "`." : "";
  }
  var oo = ["value", "defaultValue"];
  function ff(e) {
    {
      Xi("select", e);
      for (var t = 0; t < oo.length; t++) {
        var n = oo[t];
        if (e[n] != null) {
          var a = Ge(e[n]);
          e.multiple && !a ? d("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, Ji()) : !e.multiple && a && d("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, Ji());
        }
      }
    }
  }
  function ir(e, t, n, a) {
    var r = e.options;
    if (t) {
      for (var i = n, u = {}, o = 0; o < i.length; o++)
        u["$" + i[o]] = !0;
      for (var l = 0; l < r.length; l++) {
        var c = u.hasOwnProperty("$" + r[l].value);
        r[l].selected !== c && (r[l].selected = c), c && a && (r[l].defaultSelected = !0);
      }
    } else {
      for (var f = xn(Fa(n)), y = null, m = 0; m < r.length; m++) {
        if (r[m].value === f) {
          r[m].selected = !0, a && (r[m].defaultSelected = !0);
          return;
        }
        y === null && !r[m].disabled && (y = r[m]);
      }
      y !== null && (y.selected = !0);
    }
  }
  function lo(e, t) {
    return _e({}, t, {
      value: void 0
    });
  }
  function so(e, t) {
    var n = e;
    ff(t), n._wrapperState = {
      wasMultiple: !!t.multiple
    }, t.value !== void 0 && t.defaultValue !== void 0 && !Hr && (d("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Hr = !0);
  }
  function df(e, t) {
    var n = e;
    n.multiple = !!t.multiple;
    var a = t.value;
    a != null ? ir(n, !!t.multiple, a, !1) : t.defaultValue != null && ir(n, !!t.multiple, t.defaultValue, !0);
  }
  function GS(e, t) {
    var n = e, a = n._wrapperState.wasMultiple;
    n._wrapperState.wasMultiple = !!t.multiple;
    var r = t.value;
    r != null ? ir(n, !!t.multiple, r, !1) : a !== !!t.multiple && (t.defaultValue != null ? ir(n, !!t.multiple, t.defaultValue, !0) : ir(n, !!t.multiple, t.multiple ? [] : "", !1));
  }
  function qS(e, t) {
    var n = e, a = t.value;
    a != null && ir(n, !!t.multiple, a, !1);
  }
  var Eh = !1;
  function vf(e, t) {
    var n = e;
    if (t.dangerouslySetInnerHTML != null)
      throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
    var a = _e({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: xn(n._wrapperState.initialValue)
    });
    return a;
  }
  function Ch(e, t) {
    var n = e;
    Xi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Eh && (d("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component"), Eh = !0);
    var a = t.value;
    if (a == null) {
      var r = t.children, i = t.defaultValue;
      if (r != null) {
        d("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
        {
          if (i != null)
            throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          if (Ge(r)) {
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
      initialValue: Fa(a)
    };
  }
  function Rh(e, t) {
    var n = e, a = Fa(t.value), r = Fa(t.defaultValue);
    if (a != null) {
      var i = xn(a);
      i !== n.value && (n.value = i), t.defaultValue == null && n.defaultValue !== i && (n.defaultValue = i);
    }
    r != null && (n.defaultValue = xn(r));
  }
  function Th(e, t) {
    var n = e, a = n.textContent;
    a === n._wrapperState.initialValue && a !== "" && a !== null && (n.value = a);
  }
  function QS(e, t) {
    Rh(e, t);
  }
  var ur = "http://www.w3.org/1999/xhtml", WS = "http://www.w3.org/1998/Math/MathML", pf = "http://www.w3.org/2000/svg";
  function hf(e) {
    switch (e) {
      case "svg":
        return pf;
      case "math":
        return WS;
      default:
        return ur;
    }
  }
  function mf(e, t) {
    return e == null || e === ur ? hf(t) : e === pf && t === "foreignObject" ? ur : e;
  }
  var XS = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, a, r) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, a, r);
      });
    } : e;
  }, ts, Dh = XS(function(e, t) {
    if (e.namespaceURI === pf && !("innerHTML" in e)) {
      ts = ts || document.createElement("div"), ts.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
      for (var n = ts.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
      return;
    }
    e.innerHTML = t;
  }), _n = 1, or = 3, Ct = 8, lr = 9, yf = 11, ns = function(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === or) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }, IS = {
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
  }, co = {
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
  function KS(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
  }
  var JS = ["Webkit", "ms", "Moz", "O"];
  Object.keys(co).forEach(function(e) {
    JS.forEach(function(t) {
      co[KS(t, e)] = co[e];
    });
  });
  function gf(e, t, n) {
    var a = t == null || typeof t == "boolean" || t === "";
    return a ? "" : !n && typeof t == "number" && t !== 0 && !(co.hasOwnProperty(e) && co[e]) ? t + "px" : (pa(t, e), ("" + t).trim());
  }
  var ZS = /([A-Z])/g, eE = /^ms-/;
  function tE(e) {
    return e.replace(ZS, "-$1").toLowerCase().replace(eE, "-ms-");
  }
  var xh = function() {
  };
  {
    var nE = /^(?:webkit|moz|o)[A-Z]/, aE = /^-ms-/, rE = /-(.)/g, _h = /;\s*$/, Zi = {}, bf = {}, Oh = !1, wh = !1, iE = function(e) {
      return e.replace(rE, function(t, n) {
        return n.toUpperCase();
      });
    }, uE = function(e) {
      Zi.hasOwnProperty(e) && Zi[e] || (Zi[e] = !0, d(
        "Unsupported style property %s. Did you mean %s?",
        e,
        // As Andi Smith suggests
        // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
        // is converted to lowercase `ms`.
        iE(e.replace(aE, "ms-"))
      ));
    }, oE = function(e) {
      Zi.hasOwnProperty(e) && Zi[e] || (Zi[e] = !0, d("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
    }, lE = function(e, t) {
      bf.hasOwnProperty(t) && bf[t] || (bf[t] = !0, d(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(_h, "")));
    }, sE = function(e, t) {
      Oh || (Oh = !0, d("`NaN` is an invalid value for the `%s` css style property.", e));
    }, cE = function(e, t) {
      wh || (wh = !0, d("`Infinity` is an invalid value for the `%s` css style property.", e));
    };
    xh = function(e, t) {
      e.indexOf("-") > -1 ? uE(e) : nE.test(e) ? oE(e) : _h.test(t) && lE(e, t), typeof t == "number" && (isNaN(t) ? sE(e, t) : isFinite(t) || cE(e, t));
    };
  }
  var fE = xh;
  function dE(e) {
    {
      var t = "", n = "";
      for (var a in e)
        if (e.hasOwnProperty(a)) {
          var r = e[a];
          if (r != null) {
            var i = a.indexOf("--") === 0;
            t += n + (i ? a : tE(a)) + ":", t += gf(a, r, i), n = ";";
          }
        }
      return t || null;
    }
  }
  function Mh(e, t) {
    var n = e.style;
    for (var a in t)
      if (t.hasOwnProperty(a)) {
        var r = a.indexOf("--") === 0;
        r || fE(a, t[a]);
        var i = gf(a, t[a], r);
        a === "float" && (a = "cssFloat"), r ? n.setProperty(a, i) : n[a] = i;
      }
  }
  function vE(e) {
    return e == null || typeof e == "boolean" || e === "";
  }
  function Ah(e) {
    var t = {};
    for (var n in e)
      for (var a = IS[n] || [n], r = 0; r < a.length; r++)
        t[a[r]] = n;
    return t;
  }
  function pE(e, t) {
    {
      if (!t)
        return;
      var n = Ah(e), a = Ah(t), r = {};
      for (var i in n) {
        var u = n[i], o = a[i];
        if (o && u !== o) {
          var l = u + "," + o;
          if (r[l])
            continue;
          r[l] = !0, d("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", vE(e[u]) ? "Removing" : "Updating", u, o);
        }
      }
    }
  }
  var hE = {
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
  }, mE = _e({
    menuitem: !0
  }, hE), yE = "__html";
  function Sf(e, t) {
    if (t) {
      if (mE[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t.dangerouslySetInnerHTML != "object" || !(yE in t.dangerouslySetInnerHTML))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      }
      if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && d("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    }
  }
  function hi(e, t) {
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
  var as = {
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
  }, Lh = {
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
  }, eu = {}, gE = new RegExp("^(aria)-[" + te + "]*$"), bE = new RegExp("^(aria)[A-Z][" + te + "]*$");
  function SE(e, t) {
    {
      if (an.call(eu, t) && eu[t])
        return !0;
      if (bE.test(t)) {
        var n = "aria-" + t.slice(4).toLowerCase(), a = Lh.hasOwnProperty(n) ? n : null;
        if (a == null)
          return d("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), eu[t] = !0, !0;
        if (t !== a)
          return d("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), eu[t] = !0, !0;
      }
      if (gE.test(t)) {
        var r = t.toLowerCase(), i = Lh.hasOwnProperty(r) ? r : null;
        if (i == null)
          return eu[t] = !0, !1;
        if (t !== i)
          return d("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, i), eu[t] = !0, !0;
      }
    }
    return !0;
  }
  function EE(e, t) {
    {
      var n = [];
      for (var a in t) {
        var r = SE(e, a);
        r || n.push(a);
      }
      var i = n.map(function(u) {
        return "`" + u + "`";
      }).join(", ");
      n.length === 1 ? d("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", i, e) : n.length > 1 && d("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", i, e);
    }
  }
  function CE(e, t) {
    hi(e, t) || EE(e, t);
  }
  var Uh = !1;
  function RE(e, t) {
    {
      if (e !== "input" && e !== "textarea" && e !== "select")
        return;
      t != null && t.value === null && !Uh && (Uh = !0, e === "select" && t.multiple ? d("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : d("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
    }
  }
  var kh = function() {
  };
  {
    var hn = {}, Nh = /^on./, TE = /^on[^A-Z]/, DE = new RegExp("^(aria)-[" + te + "]*$"), xE = new RegExp("^(aria)[A-Z][" + te + "]*$");
    kh = function(e, t, n, a) {
      if (an.call(hn, t) && hn[t])
        return !0;
      var r = t.toLowerCase();
      if (r === "onfocusin" || r === "onfocusout")
        return d("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), hn[t] = !0, !0;
      if (a != null) {
        var i = a.registrationNameDependencies, u = a.possibleRegistrationNames;
        if (i.hasOwnProperty(t))
          return !0;
        var o = u.hasOwnProperty(r) ? u[r] : null;
        if (o != null)
          return d("Invalid event handler property `%s`. Did you mean `%s`?", t, o), hn[t] = !0, !0;
        if (Nh.test(t))
          return d("Unknown event handler property `%s`. It will be ignored.", t), hn[t] = !0, !0;
      } else if (Nh.test(t))
        return TE.test(t) && d("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), hn[t] = !0, !0;
      if (DE.test(t) || xE.test(t))
        return !0;
      if (r === "innerhtml")
        return d("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), hn[t] = !0, !0;
      if (r === "aria")
        return d("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), hn[t] = !0, !0;
      if (r === "is" && n !== null && n !== void 0 && typeof n != "string")
        return d("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), hn[t] = !0, !0;
      if (typeof n == "number" && isNaN(n))
        return d("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), hn[t] = !0, !0;
      var l = jn(t), c = l !== null && l.type === ea;
      if (as.hasOwnProperty(r)) {
        var f = as[r];
        if (f !== t)
          return d("Invalid DOM property `%s`. Did you mean `%s`?", t, f), hn[t] = !0, !0;
      } else if (!c && t !== r)
        return d("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, r), hn[t] = !0, !0;
      return typeof n == "boolean" && Dn(t, n, l, !1) ? (n ? d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), hn[t] = !0, !0) : c ? !0 : Dn(t, n, l, !1) ? (hn[t] = !0, !1) : ((n === "false" || n === "true") && l !== null && l.type === gt && (d("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), hn[t] = !0), !0);
    };
  }
  var _E = function(e, t, n) {
    {
      var a = [];
      for (var r in t) {
        var i = kh(e, r, t[r], n);
        i || a.push(r);
      }
      var u = a.map(function(o) {
        return "`" + o + "`";
      }).join(", ");
      a.length === 1 ? d("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", u, e) : a.length > 1 && d("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", u, e);
    }
  };
  function OE(e, t, n) {
    hi(e, t) || _E(e, t, n);
  }
  var zh = 1, Ef = 2, fo = 4, wE = zh | Ef | fo, vo = null;
  function ME(e) {
    vo !== null && d("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), vo = e;
  }
  function AE() {
    vo === null && d("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), vo = null;
  }
  function LE(e) {
    return e === vo;
  }
  function Cf(e) {
    var t = e.target || e.srcElement || window;
    return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === or ? t.parentNode : t;
  }
  var Rf = null, tu = null, nu = null;
  function Hh(e) {
    var t = Gr(e);
    if (t) {
      if (typeof Rf != "function")
        throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.stateNode;
      if (n) {
        var a = Vs(n);
        Rf(t.stateNode, t.type, a);
      }
    }
  }
  function UE(e) {
    Rf = e;
  }
  function jh(e) {
    tu ? nu ? nu.push(e) : nu = [e] : tu = e;
  }
  function kE() {
    return tu !== null || nu !== null;
  }
  function Fh() {
    if (tu) {
      var e = tu, t = nu;
      if (tu = null, nu = null, Hh(e), t)
        for (var n = 0; n < t.length; n++)
          Hh(t[n]);
    }
  }
  var Vh = function(e, t) {
    return e(t);
  }, Bh = function() {
  }, Tf = !1;
  function NE() {
    var e = kE();
    e && (Bh(), Fh());
  }
  function Yh(e, t, n) {
    if (Tf)
      return e(t, n);
    Tf = !0;
    try {
      return Vh(e, t, n);
    } finally {
      Tf = !1, NE();
    }
  }
  function zE(e, t, n) {
    Vh = e, Bh = n;
  }
  function HE(e) {
    return e === "button" || e === "input" || e === "select" || e === "textarea";
  }
  function jE(e, t, n) {
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
        return !!(n.disabled && HE(t));
      default:
        return !1;
    }
  }
  function po(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var a = Vs(n);
    if (a === null)
      return null;
    var r = a[t];
    if (jE(t, e.type, a))
      return null;
    if (r && typeof r != "function")
      throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof r + "` type.");
    return r;
  }
  var Df = !1;
  if (Et)
    try {
      var ho = {};
      Object.defineProperty(ho, "passive", {
        get: function() {
          Df = !0;
        }
      }), window.addEventListener("test", ho, ho), window.removeEventListener("test", ho, ho);
    } catch {
      Df = !1;
    }
  function $h(e, t, n, a, r, i, u, o, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, c);
    } catch (f) {
      this.onError(f);
    }
  }
  var Ph = $h;
  if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
    var xf = document.createElement("react");
    Ph = function(t, n, a, r, i, u, o, l, c) {
      if (typeof document > "u" || document === null)
        throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
      var f = document.createEvent("Event"), y = !1, m = !0, S = window.event, C = Object.getOwnPropertyDescriptor(window, "event");
      function D() {
        xf.removeEventListener(x, re, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = S);
      }
      var V = Array.prototype.slice.call(arguments, 3);
      function re() {
        y = !0, D(), n.apply(a, V), m = !1;
      }
      var Z, Ue = !1, Oe = !1;
      function g(b) {
        if (Z = b.error, Ue = !0, Z === null && b.colno === 0 && b.lineno === 0 && (Oe = !0), b.defaultPrevented && Z != null && typeof Z == "object")
          try {
            Z._suppressLogging = !0;
          } catch {
          }
      }
      var x = "react-" + (t || "invokeguardedcallback");
      if (window.addEventListener("error", g), xf.addEventListener(x, re, !1), f.initEvent(x, !1, !1), xf.dispatchEvent(f), C && Object.defineProperty(window, "event", C), y && m && (Ue ? Oe && (Z = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Z = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Z)), window.removeEventListener("error", g), !y)
        return D(), $h.apply(this, arguments);
    };
  }
  var FE = Ph, au = !1, rs = null, is = !1, _f = null, VE = {
    onError: function(e) {
      au = !0, rs = e;
    }
  };
  function Of(e, t, n, a, r, i, u, o, l) {
    au = !1, rs = null, FE.apply(VE, arguments);
  }
  function BE(e, t, n, a, r, i, u, o, l) {
    if (Of.apply(this, arguments), au) {
      var c = wf();
      is || (is = !0, _f = c);
    }
  }
  function YE() {
    if (is) {
      var e = _f;
      throw is = !1, _f = null, e;
    }
  }
  function $E() {
    return au;
  }
  function wf() {
    if (au) {
      var e = rs;
      return au = !1, rs = null, e;
    } else
      throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
  }
  function ru(e) {
    return e._reactInternals;
  }
  function PE(e) {
    return e._reactInternals !== void 0;
  }
  function GE(e, t) {
    e._reactInternals = t;
  }
  var se = (
    /*                      */
    0
  ), iu = (
    /*                */
    1
  ), Rt = (
    /*                    */
    2
  ), Ne = (
    /*                       */
    4
  ), mi = (
    /*                */
    16
  ), mo = (
    /*                 */
    32
  ), Mf = (
    /*                     */
    64
  ), qe = (
    /*                   */
    128
  ), sr = (
    /*            */
    256
  ), jr = (
    /*                          */
    512
  ), yi = (
    /*                     */
    1024
  ), ga = (
    /*                      */
    2048
  ), cr = (
    /*                    */
    4096
  ), gi = (
    /*                   */
    8192
  ), us = (
    /*             */
    16384
  ), qE = ga | Ne | Mf | jr | yi | us, QE = (
    /*               */
    32767
  ), yo = (
    /*                   */
    32768
  ), mn = (
    /*                */
    65536
  ), Af = (
    /* */
    131072
  ), Gh = (
    /*                       */
    1048576
  ), Lf = (
    /*                    */
    2097152
  ), bi = (
    /*                 */
    4194304
  ), Uf = (
    /*                */
    8388608
  ), fr = (
    /*               */
    16777216
  ), os = (
    /*              */
    33554432
  ), kf = (
    // TODO: Remove Update flag from before mutation phase by re-landing Visibility
    // flag logic (see #20043)
    Ne | yi | 0
  ), Nf = Rt | Ne | mi | mo | jr | cr | gi, go = Ne | Mf | jr | gi, uu = ga | mi, dr = bi | Uf | Lf, WE = L.ReactCurrentOwner;
  function Si(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      var a = t;
      do
        t = a, (t.flags & (Rt | cr)) !== se && (n = t.return), a = t.return;
      while (a);
    }
    return t.tag === P ? n : null;
  }
  function qh(e) {
    if (e.tag === q) {
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
  function Qh(e) {
    return e.tag === P ? e.stateNode.containerInfo : null;
  }
  function XE(e) {
    return Si(e) === e;
  }
  function IE(e) {
    {
      var t = WE.current;
      if (t !== null && t.tag === N) {
        var n = t, a = n.stateNode;
        a._warnedAboutRefsInRender || d("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", be(n) || "A component"), a._warnedAboutRefsInRender = !0;
      }
    }
    var r = ru(e);
    return r ? Si(r) === r : !1;
  }
  function Wh(e) {
    if (Si(e) !== e)
      throw new Error("Unable to find node on an unmounted component.");
  }
  function Xh(e) {
    var t = e.alternate;
    if (!t) {
      var n = Si(e);
      if (n === null)
        throw new Error("Unable to find node on an unmounted component.");
      return n !== e ? null : e;
    }
    for (var a = e, r = t; ; ) {
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
        for (var l = i.child; l; ) {
          if (l === a)
            return Wh(i), e;
          if (l === r)
            return Wh(i), t;
          l = l.sibling;
        }
        throw new Error("Unable to find node on an unmounted component.");
      }
      if (a.return !== r.return)
        a = i, r = u;
      else {
        for (var c = !1, f = i.child; f; ) {
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
          for (f = u.child; f; ) {
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
    if (a.tag !== P)
      throw new Error("Unable to find node on an unmounted component.");
    return a.stateNode.current === a ? e : t;
  }
  function Ih(e) {
    var t = Xh(e);
    return t !== null ? Kh(t) : null;
  }
  function Kh(e) {
    if (e.tag === Q || e.tag === de)
      return e;
    for (var t = e.child; t !== null; ) {
      var n = Kh(t);
      if (n !== null)
        return n;
      t = t.sibling;
    }
    return null;
  }
  function KE(e) {
    var t = Xh(e);
    return t !== null ? Jh(t) : null;
  }
  function Jh(e) {
    if (e.tag === Q || e.tag === de)
      return e;
    for (var t = e.child; t !== null; ) {
      if (t.tag !== ae) {
        var n = Jh(t);
        if (n !== null)
          return n;
      }
      t = t.sibling;
    }
    return null;
  }
  var Zh = R.unstable_scheduleCallback, JE = R.unstable_cancelCallback, ZE = R.unstable_shouldYield, eC = R.unstable_requestPaint, Yt = R.unstable_now, tC = R.unstable_getCurrentPriorityLevel, ls = R.unstable_ImmediatePriority, zf = R.unstable_UserBlockingPriority, Ei = R.unstable_NormalPriority, nC = R.unstable_LowPriority, Hf = R.unstable_IdlePriority, aC = R.unstable_yieldValue, rC = R.unstable_setDisableYieldValue, ou = null, ln = null, Y = null, Va = !1, ba = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
  function iC(e) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
      return !1;
    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (t.isDisabled)
      return !0;
    if (!t.supportsFiber)
      return d("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
    try {
      Na && (e = _e({}, e, {
        getLaneLabelMap: fC,
        injectProfilingHooks: cC
      })), ou = t.inject(e), ln = t;
    } catch (n) {
      d("React instrumentation encountered an error: %s.", n);
    }
    return !!t.checkDCE;
  }
  function uC(e, t) {
    if (ln && typeof ln.onScheduleFiberRoot == "function")
      try {
        ln.onScheduleFiberRoot(ou, e, t);
      } catch (n) {
        Va || (Va = !0, d("React instrumentation encountered an error: %s", n));
      }
  }
  function oC(e, t) {
    if (ln && typeof ln.onCommitFiberRoot == "function")
      try {
        var n = (e.current.flags & qe) === qe;
        if (da) {
          var a;
          switch (t) {
            case $n:
              a = ls;
              break;
            case pr:
              a = zf;
              break;
            case hr:
              a = Ei;
              break;
            case hs:
              a = Hf;
              break;
            default:
              a = Ei;
              break;
          }
          ln.onCommitFiberRoot(ou, e, a, n);
        }
      } catch (r) {
        Va || (Va = !0, d("React instrumentation encountered an error: %s", r));
      }
  }
  function lC(e) {
    if (ln && typeof ln.onPostCommitFiberRoot == "function")
      try {
        ln.onPostCommitFiberRoot(ou, e);
      } catch (t) {
        Va || (Va = !0, d("React instrumentation encountered an error: %s", t));
      }
  }
  function sC(e) {
    if (ln && typeof ln.onCommitFiberUnmount == "function")
      try {
        ln.onCommitFiberUnmount(ou, e);
      } catch (t) {
        Va || (Va = !0, d("React instrumentation encountered an error: %s", t));
      }
  }
  function $t(e) {
    if (typeof aC == "function" && (rC(e), Fe(e)), ln && typeof ln.setStrictMode == "function")
      try {
        ln.setStrictMode(ou, e);
      } catch (t) {
        Va || (Va = !0, d("React instrumentation encountered an error: %s", t));
      }
  }
  function cC(e) {
    Y = e;
  }
  function fC() {
    {
      for (var e = /* @__PURE__ */ new Map(), t = 1, n = 0; n < Ff; n++) {
        var a = AC(t);
        e.set(t, a), t *= 2;
      }
      return e;
    }
  }
  function dC(e) {
    Y !== null && typeof Y.markCommitStarted == "function" && Y.markCommitStarted(e);
  }
  function em() {
    Y !== null && typeof Y.markCommitStopped == "function" && Y.markCommitStopped();
  }
  function bo(e) {
    Y !== null && typeof Y.markComponentRenderStarted == "function" && Y.markComponentRenderStarted(e);
  }
  function lu() {
    Y !== null && typeof Y.markComponentRenderStopped == "function" && Y.markComponentRenderStopped();
  }
  function vC(e) {
    Y !== null && typeof Y.markComponentPassiveEffectMountStarted == "function" && Y.markComponentPassiveEffectMountStarted(e);
  }
  function pC() {
    Y !== null && typeof Y.markComponentPassiveEffectMountStopped == "function" && Y.markComponentPassiveEffectMountStopped();
  }
  function hC(e) {
    Y !== null && typeof Y.markComponentPassiveEffectUnmountStarted == "function" && Y.markComponentPassiveEffectUnmountStarted(e);
  }
  function mC() {
    Y !== null && typeof Y.markComponentPassiveEffectUnmountStopped == "function" && Y.markComponentPassiveEffectUnmountStopped();
  }
  function yC(e) {
    Y !== null && typeof Y.markComponentLayoutEffectMountStarted == "function" && Y.markComponentLayoutEffectMountStarted(e);
  }
  function gC() {
    Y !== null && typeof Y.markComponentLayoutEffectMountStopped == "function" && Y.markComponentLayoutEffectMountStopped();
  }
  function tm(e) {
    Y !== null && typeof Y.markComponentLayoutEffectUnmountStarted == "function" && Y.markComponentLayoutEffectUnmountStarted(e);
  }
  function nm() {
    Y !== null && typeof Y.markComponentLayoutEffectUnmountStopped == "function" && Y.markComponentLayoutEffectUnmountStopped();
  }
  function bC(e, t, n) {
    Y !== null && typeof Y.markComponentErrored == "function" && Y.markComponentErrored(e, t, n);
  }
  function SC(e, t, n) {
    Y !== null && typeof Y.markComponentSuspended == "function" && Y.markComponentSuspended(e, t, n);
  }
  function EC(e) {
    Y !== null && typeof Y.markLayoutEffectsStarted == "function" && Y.markLayoutEffectsStarted(e);
  }
  function CC() {
    Y !== null && typeof Y.markLayoutEffectsStopped == "function" && Y.markLayoutEffectsStopped();
  }
  function RC(e) {
    Y !== null && typeof Y.markPassiveEffectsStarted == "function" && Y.markPassiveEffectsStarted(e);
  }
  function TC() {
    Y !== null && typeof Y.markPassiveEffectsStopped == "function" && Y.markPassiveEffectsStopped();
  }
  function am(e) {
    Y !== null && typeof Y.markRenderStarted == "function" && Y.markRenderStarted(e);
  }
  function DC() {
    Y !== null && typeof Y.markRenderYielded == "function" && Y.markRenderYielded();
  }
  function rm() {
    Y !== null && typeof Y.markRenderStopped == "function" && Y.markRenderStopped();
  }
  function xC(e) {
    Y !== null && typeof Y.markRenderScheduled == "function" && Y.markRenderScheduled(e);
  }
  function _C(e, t) {
    Y !== null && typeof Y.markForceUpdateScheduled == "function" && Y.markForceUpdateScheduled(e, t);
  }
  function jf(e, t) {
    Y !== null && typeof Y.markStateUpdateScheduled == "function" && Y.markStateUpdateScheduled(e, t);
  }
  var ue = (
    /*                         */
    0
  ), Ae = (
    /*                 */
    1
  ), Ke = (
    /*                    */
    2
  ), pt = (
    /*               */
    8
  ), Ba = (
    /*              */
    16
  ), im = Math.clz32 ? Math.clz32 : MC, OC = Math.log, wC = Math.LN2;
  function MC(e) {
    var t = e >>> 0;
    return t === 0 ? 32 : 31 - (OC(t) / wC | 0) | 0;
  }
  var Ff = 31, O = (
    /*                        */
    0
  ), Pt = (
    /*                          */
    0
  ), he = (
    /*                        */
    1
  ), su = (
    /*    */
    2
  ), vr = (
    /*             */
    4
  ), Ci = (
    /*            */
    8
  ), Ya = (
    /*                     */
    16
  ), So = (
    /*                */
    32
  ), cu = (
    /*                       */
    4194240
  ), Eo = (
    /*                        */
    64
  ), Vf = (
    /*                        */
    128
  ), Bf = (
    /*                        */
    256
  ), Yf = (
    /*                        */
    512
  ), $f = (
    /*                        */
    1024
  ), Pf = (
    /*                        */
    2048
  ), Gf = (
    /*                        */
    4096
  ), qf = (
    /*                        */
    8192
  ), Qf = (
    /*                        */
    16384
  ), Wf = (
    /*                       */
    32768
  ), Xf = (
    /*                       */
    65536
  ), If = (
    /*                       */
    131072
  ), Kf = (
    /*                       */
    262144
  ), Jf = (
    /*                       */
    524288
  ), Zf = (
    /*                       */
    1048576
  ), ed = (
    /*                       */
    2097152
  ), ss = (
    /*                            */
    130023424
  ), fu = (
    /*                             */
    4194304
  ), td = (
    /*                             */
    8388608
  ), nd = (
    /*                             */
    16777216
  ), ad = (
    /*                             */
    33554432
  ), rd = (
    /*                             */
    67108864
  ), um = fu, Co = (
    /*          */
    134217728
  ), om = (
    /*                          */
    268435455
  ), Ro = (
    /*               */
    268435456
  ), Ri = (
    /*                        */
    536870912
  ), Bn = (
    /*                   */
    1073741824
  );
  function AC(e) {
    {
      if (e & he)
        return "Sync";
      if (e & su)
        return "InputContinuousHydration";
      if (e & vr)
        return "InputContinuous";
      if (e & Ci)
        return "DefaultHydration";
      if (e & Ya)
        return "Default";
      if (e & So)
        return "TransitionHydration";
      if (e & cu)
        return "Transition";
      if (e & ss)
        return "Retry";
      if (e & Co)
        return "SelectiveHydration";
      if (e & Ro)
        return "IdleHydration";
      if (e & Ri)
        return "Idle";
      if (e & Bn)
        return "Offscreen";
    }
  }
  var it = -1, cs = Eo, fs = fu;
  function To(e) {
    switch (Ti(e)) {
      case he:
        return he;
      case su:
        return su;
      case vr:
        return vr;
      case Ci:
        return Ci;
      case Ya:
        return Ya;
      case So:
        return So;
      case Eo:
      case Vf:
      case Bf:
      case Yf:
      case $f:
      case Pf:
      case Gf:
      case qf:
      case Qf:
      case Wf:
      case Xf:
      case If:
      case Kf:
      case Jf:
      case Zf:
      case ed:
        return e & cu;
      case fu:
      case td:
      case nd:
      case ad:
      case rd:
        return e & ss;
      case Co:
        return Co;
      case Ro:
        return Ro;
      case Ri:
        return Ri;
      case Bn:
        return Bn;
      default:
        return d("Should have found matching lanes. This is a bug in React."), e;
    }
  }
  function ds(e, t) {
    var n = e.pendingLanes;
    if (n === O)
      return O;
    var a = O, r = e.suspendedLanes, i = e.pingedLanes, u = n & om;
    if (u !== O) {
      var o = u & ~r;
      if (o !== O)
        a = To(o);
      else {
        var l = u & i;
        l !== O && (a = To(l));
      }
    } else {
      var c = n & ~r;
      c !== O ? a = To(c) : i !== O && (a = To(i));
    }
    if (a === O)
      return O;
    if (t !== O && t !== a && // If we already suspended with a delay, then interrupting is fine. Don't
    // bother waiting until the root is complete.
    (t & r) === O) {
      var f = Ti(a), y = Ti(t);
      if (
        // Tests whether the next lane is equal or lower priority than the wip
        // one. This works because the bits decrease in priority as you go left.
        f >= y || // Default priority updates should not interrupt transition updates. The
        // only difference between default updates and transition updates is that
        // default updates do not support refresh transitions.
        f === Ya && (y & cu) !== O
      )
        return t;
    }
    (a & vr) !== O && (a |= n & Ya);
    var m = e.entangledLanes;
    if (m !== O)
      for (var S = e.entanglements, C = a & m; C > 0; ) {
        var D = Di(C), V = 1 << D;
        a |= S[D], C &= ~V;
      }
    return a;
  }
  function LC(e, t) {
    for (var n = e.eventTimes, a = it; t > 0; ) {
      var r = Di(t), i = 1 << r, u = n[r];
      u > a && (a = u), t &= ~i;
    }
    return a;
  }
  function UC(e, t) {
    switch (e) {
      case he:
      case su:
      case vr:
        return t + 250;
      case Ci:
      case Ya:
      case So:
      case Eo:
      case Vf:
      case Bf:
      case Yf:
      case $f:
      case Pf:
      case Gf:
      case qf:
      case Qf:
      case Wf:
      case Xf:
      case If:
      case Kf:
      case Jf:
      case Zf:
      case ed:
        return t + 5e3;
      case fu:
      case td:
      case nd:
      case ad:
      case rd:
        return it;
      case Co:
      case Ro:
      case Ri:
      case Bn:
        return it;
      default:
        return d("Should have found matching lanes. This is a bug in React."), it;
    }
  }
  function kC(e, t) {
    for (var n = e.pendingLanes, a = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, u = n; u > 0; ) {
      var o = Di(u), l = 1 << o, c = i[o];
      c === it ? ((l & a) === O || (l & r) !== O) && (i[o] = UC(l, t)) : c <= t && (e.expiredLanes |= l), u &= ~l;
    }
  }
  function NC(e) {
    return To(e.pendingLanes);
  }
  function id(e) {
    var t = e.pendingLanes & ~Bn;
    return t !== O ? t : t & Bn ? Bn : O;
  }
  function zC(e) {
    return (e & he) !== O;
  }
  function ud(e) {
    return (e & om) !== O;
  }
  function lm(e) {
    return (e & ss) === e;
  }
  function HC(e) {
    var t = he | vr | Ya;
    return (e & t) === O;
  }
  function jC(e) {
    return (e & cu) === e;
  }
  function vs(e, t) {
    var n = su | vr | Ci | Ya;
    return (t & n) !== O;
  }
  function FC(e, t) {
    return (t & e.expiredLanes) !== O;
  }
  function sm(e) {
    return (e & cu) !== O;
  }
  function cm() {
    var e = cs;
    return cs <<= 1, (cs & cu) === O && (cs = Eo), e;
  }
  function VC() {
    var e = fs;
    return fs <<= 1, (fs & ss) === O && (fs = fu), e;
  }
  function Ti(e) {
    return e & -e;
  }
  function Do(e) {
    return Ti(e);
  }
  function Di(e) {
    return 31 - im(e);
  }
  function od(e) {
    return Di(e);
  }
  function Yn(e, t) {
    return (e & t) !== O;
  }
  function du(e, t) {
    return (e & t) === t;
  }
  function Re(e, t) {
    return e | t;
  }
  function ps(e, t) {
    return e & ~t;
  }
  function fm(e, t) {
    return e & t;
  }
  function Gw(e) {
    return e;
  }
  function BC(e, t) {
    return e !== Pt && e < t ? e : t;
  }
  function ld(e) {
    for (var t = [], n = 0; n < Ff; n++)
      t.push(e);
    return t;
  }
  function xo(e, t, n) {
    e.pendingLanes |= t, t !== Ri && (e.suspendedLanes = O, e.pingedLanes = O);
    var a = e.eventTimes, r = od(t);
    a[r] = n;
  }
  function YC(e, t) {
    e.suspendedLanes |= t, e.pingedLanes &= ~t;
    for (var n = e.expirationTimes, a = t; a > 0; ) {
      var r = Di(a), i = 1 << r;
      n[r] = it, a &= ~i;
    }
  }
  function dm(e, t, n) {
    e.pingedLanes |= e.suspendedLanes & t;
  }
  function $C(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = O, e.pingedLanes = O, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
    for (var a = e.entanglements, r = e.eventTimes, i = e.expirationTimes, u = n; u > 0; ) {
      var o = Di(u), l = 1 << o;
      a[o] = O, r[o] = it, i[o] = it, u &= ~l;
    }
  }
  function sd(e, t) {
    for (var n = e.entangledLanes |= t, a = e.entanglements, r = n; r; ) {
      var i = Di(r), u = 1 << i;
      // Is this one of the newly entangled lanes?
      u & t | // Is this lane transitively entangled with the newly entangled lanes?
      a[i] & t && (a[i] |= t), r &= ~u;
    }
  }
  function PC(e, t) {
    var n = Ti(t), a;
    switch (n) {
      case vr:
        a = su;
        break;
      case Ya:
        a = Ci;
        break;
      case Eo:
      case Vf:
      case Bf:
      case Yf:
      case $f:
      case Pf:
      case Gf:
      case qf:
      case Qf:
      case Wf:
      case Xf:
      case If:
      case Kf:
      case Jf:
      case Zf:
      case ed:
      case fu:
      case td:
      case nd:
      case ad:
      case rd:
        a = So;
        break;
      case Ri:
        a = Ro;
        break;
      default:
        a = Pt;
        break;
    }
    return (a & (e.suspendedLanes | t)) !== Pt ? Pt : a;
  }
  function vm(e, t, n) {
    if (ba)
      for (var a = e.pendingUpdatersLaneMap; n > 0; ) {
        var r = od(n), i = 1 << r, u = a[r];
        u.add(t), n &= ~i;
      }
  }
  function pm(e, t) {
    if (ba)
      for (var n = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; t > 0; ) {
        var r = od(t), i = 1 << r, u = n[r];
        u.size > 0 && (u.forEach(function(o) {
          var l = o.alternate;
          (l === null || !a.has(l)) && a.add(o);
        }), u.clear()), t &= ~i;
      }
  }
  function hm(e, t) {
    return null;
  }
  var $n = he, pr = vr, hr = Ya, hs = Ri, _o = Pt;
  function Sa() {
    return _o;
  }
  function Gt(e) {
    _o = e;
  }
  function GC(e, t) {
    var n = _o;
    try {
      return _o = e, t();
    } finally {
      _o = n;
    }
  }
  function qC(e, t) {
    return e !== 0 && e < t ? e : t;
  }
  function QC(e, t) {
    return e > t ? e : t;
  }
  function cd(e, t) {
    return e !== 0 && e < t;
  }
  function mm(e) {
    var t = Ti(e);
    return cd($n, t) ? cd(pr, t) ? ud(t) ? hr : hs : pr : $n;
  }
  function ms(e) {
    var t = e.current.memoizedState;
    return t.isDehydrated;
  }
  var ym;
  function WC(e) {
    ym = e;
  }
  function XC(e) {
    ym(e);
  }
  var fd;
  function IC(e) {
    fd = e;
  }
  var gm;
  function KC(e) {
    gm = e;
  }
  var bm;
  function JC(e) {
    bm = e;
  }
  var Sm;
  function ZC(e) {
    Sm = e;
  }
  var dd = !1, ys = [], Fr = null, Vr = null, Br = null, Oo = /* @__PURE__ */ new Map(), wo = /* @__PURE__ */ new Map(), Yr = [], eR = [
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
  function tR(e) {
    return eR.indexOf(e) > -1;
  }
  function nR(e, t, n, a, r) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: r,
      targetContainers: [a]
    };
  }
  function Em(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Fr = null;
        break;
      case "dragenter":
      case "dragleave":
        Vr = null;
        break;
      case "mouseover":
      case "mouseout":
        Br = null;
        break;
      case "pointerover":
      case "pointerout": {
        var n = t.pointerId;
        Oo.delete(n);
        break;
      }
      case "gotpointercapture":
      case "lostpointercapture": {
        var a = t.pointerId;
        wo.delete(a);
        break;
      }
    }
  }
  function Mo(e, t, n, a, r, i) {
    if (e === null || e.nativeEvent !== i) {
      var u = nR(t, n, a, r, i);
      if (t !== null) {
        var o = Gr(t);
        o !== null && fd(o);
      }
      return u;
    }
    e.eventSystemFlags |= a;
    var l = e.targetContainers;
    return r !== null && l.indexOf(r) === -1 && l.push(r), e;
  }
  function aR(e, t, n, a, r) {
    switch (t) {
      case "focusin": {
        var i = r;
        return Fr = Mo(Fr, e, t, n, a, i), !0;
      }
      case "dragenter": {
        var u = r;
        return Vr = Mo(Vr, e, t, n, a, u), !0;
      }
      case "mouseover": {
        var o = r;
        return Br = Mo(Br, e, t, n, a, o), !0;
      }
      case "pointerover": {
        var l = r, c = l.pointerId;
        return Oo.set(c, Mo(Oo.get(c) || null, e, t, n, a, l)), !0;
      }
      case "gotpointercapture": {
        var f = r, y = f.pointerId;
        return wo.set(y, Mo(wo.get(y) || null, e, t, n, a, f)), !0;
      }
    }
    return !1;
  }
  function Cm(e) {
    var t = Oi(e.target);
    if (t !== null) {
      var n = Si(t);
      if (n !== null) {
        var a = n.tag;
        if (a === q) {
          var r = qh(n);
          if (r !== null) {
            e.blockedOn = r, Sm(e.priority, function() {
              gm(n);
            });
            return;
          }
        } else if (a === P) {
          var i = n.stateNode;
          if (ms(i)) {
            e.blockedOn = Qh(n);
            return;
          }
        }
      }
    }
    e.blockedOn = null;
  }
  function rR(e) {
    for (var t = bm(), n = {
      blockedOn: null,
      target: e,
      priority: t
    }, a = 0; a < Yr.length && cd(t, Yr[a].priority); a++)
      ;
    Yr.splice(a, 0, n), a === 0 && Cm(n);
  }
  function gs(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; t.length > 0; ) {
      var n = t[0], a = hd(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
      if (a === null) {
        var r = e.nativeEvent, i = new r.constructor(r.type, r);
        ME(i), r.target.dispatchEvent(i), AE();
      } else {
        var u = Gr(a);
        return u !== null && fd(u), e.blockedOn = a, !1;
      }
      t.shift();
    }
    return !0;
  }
  function Rm(e, t, n) {
    gs(e) && n.delete(t);
  }
  function iR() {
    dd = !1, Fr !== null && gs(Fr) && (Fr = null), Vr !== null && gs(Vr) && (Vr = null), Br !== null && gs(Br) && (Br = null), Oo.forEach(Rm), wo.forEach(Rm);
  }
  function Ao(e, t) {
    e.blockedOn === t && (e.blockedOn = null, dd || (dd = !0, R.unstable_scheduleCallback(R.unstable_NormalPriority, iR)));
  }
  function Lo(e) {
    if (ys.length > 0) {
      Ao(ys[0], e);
      for (var t = 1; t < ys.length; t++) {
        var n = ys[t];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    Fr !== null && Ao(Fr, e), Vr !== null && Ao(Vr, e), Br !== null && Ao(Br, e);
    var a = function(o) {
      return Ao(o, e);
    };
    Oo.forEach(a), wo.forEach(a);
    for (var r = 0; r < Yr.length; r++) {
      var i = Yr[r];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; Yr.length > 0; ) {
      var u = Yr[0];
      if (u.blockedOn !== null)
        break;
      Cm(u), u.blockedOn === null && Yr.shift();
    }
  }
  var vu = L.ReactCurrentBatchConfig, vd = !0;
  function Tm(e) {
    vd = !!e;
  }
  function uR() {
    return vd;
  }
  function oR(e, t, n) {
    var a = Dm(t), r;
    switch (a) {
      case $n:
        r = lR;
        break;
      case pr:
        r = sR;
        break;
      case hr:
      default:
        r = pd;
        break;
    }
    return r.bind(null, t, n, e);
  }
  function lR(e, t, n, a) {
    var r = Sa(), i = vu.transition;
    vu.transition = null;
    try {
      Gt($n), pd(e, t, n, a);
    } finally {
      Gt(r), vu.transition = i;
    }
  }
  function sR(e, t, n, a) {
    var r = Sa(), i = vu.transition;
    vu.transition = null;
    try {
      Gt(pr), pd(e, t, n, a);
    } finally {
      Gt(r), vu.transition = i;
    }
  }
  function pd(e, t, n, a) {
    vd && cR(e, t, n, a);
  }
  function cR(e, t, n, a) {
    var r = hd(e, t, n, a);
    if (r === null) {
      wd(e, t, a, bs, n), Em(e, a);
      return;
    }
    if (aR(r, e, t, n, a)) {
      a.stopPropagation();
      return;
    }
    if (Em(e, a), t & fo && tR(e)) {
      for (; r !== null; ) {
        var i = Gr(r);
        i !== null && XC(i);
        var u = hd(e, t, n, a);
        if (u === null && wd(e, t, a, bs, n), u === r)
          break;
        r = u;
      }
      r !== null && a.stopPropagation();
      return;
    }
    wd(e, t, a, null, n);
  }
  var bs = null;
  function hd(e, t, n, a) {
    bs = null;
    var r = Cf(a), i = Oi(r);
    if (i !== null) {
      var u = Si(i);
      if (u === null)
        i = null;
      else {
        var o = u.tag;
        if (o === q) {
          var l = qh(u);
          if (l !== null)
            return l;
          i = null;
        } else if (o === P) {
          var c = u.stateNode;
          if (ms(c))
            return Qh(u);
          i = null;
        } else u !== i && (i = null);
      }
    }
    return bs = i, null;
  }
  function Dm(e) {
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
        return pr;
      case "message": {
        var t = tC();
        switch (t) {
          case ls:
            return $n;
          case zf:
            return pr;
          case Ei:
          case nC:
            return hr;
          case Hf:
            return hs;
          default:
            return hr;
        }
      }
      default:
        return hr;
    }
  }
  function fR(e, t, n) {
    return e.addEventListener(t, n, !1), n;
  }
  function dR(e, t, n) {
    return e.addEventListener(t, n, !0), n;
  }
  function vR(e, t, n, a) {
    return e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }), n;
  }
  function pR(e, t, n, a) {
    return e.addEventListener(t, n, {
      passive: a
    }), n;
  }
  var Uo = null, md = null, ko = null;
  function hR(e) {
    return Uo = e, md = _m(), !0;
  }
  function mR() {
    Uo = null, md = null, ko = null;
  }
  function xm() {
    if (ko)
      return ko;
    var e, t = md, n = t.length, a, r = _m(), i = r.length;
    for (e = 0; e < n && t[e] === r[e]; e++)
      ;
    var u = n - e;
    for (a = 1; a <= u && t[n - a] === r[i - a]; a++)
      ;
    var o = a > 1 ? 1 - a : void 0;
    return ko = r.slice(e, o), ko;
  }
  function _m() {
    return "value" in Uo ? Uo.value : Uo.textContent;
  }
  function Ss(e) {
    var t, n = e.keyCode;
    return "charCode" in e ? (t = e.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
  }
  function Es() {
    return !0;
  }
  function Om() {
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
      return c ? this.isDefaultPrevented = Es : this.isDefaultPrevented = Om, this.isPropagationStopped = Om, this;
    }
    return _e(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Es);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Es);
      },
      /**
       * We release all dispatched `SyntheticEvent`s after each event loop, adding
       * them back into the pool. This allows a way to hold onto a reference that
       * won't be added back into the pool.
       */
      persist: function() {
      },
      /**
       * Checks if this event should be released back into the pool.
       *
       * @return {boolean} True if this should not be released, false otherwise.
       */
      isPersistent: Es
    }), t;
  }
  var pu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, yd = Pn(pu), No = _e({}, pu, {
    view: 0,
    detail: 0
  }), yR = Pn(No), gd, bd, zo;
  function gR(e) {
    e !== zo && (zo && e.type === "mousemove" ? (gd = e.screenX - zo.screenX, bd = e.screenY - zo.screenY) : (gd = 0, bd = 0), zo = e);
  }
  var Cs = _e({}, No, {
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
    getModifierState: Ed,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (gR(e), gd);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : bd;
    }
  }), wm = Pn(Cs), bR = _e({}, Cs, {
    dataTransfer: 0
  }), SR = Pn(bR), ER = _e({}, No, {
    relatedTarget: 0
  }), Sd = Pn(ER), CR = _e({}, pu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), RR = Pn(CR), TR = _e({}, pu, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), DR = Pn(TR), xR = _e({}, pu, {
    data: 0
  }), Mm = Pn(xR), _R = Mm, OR = {
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
  }, wR = {
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
  function MR(e) {
    if (e.key) {
      var t = OR[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    if (e.type === "keypress") {
      var n = Ss(e);
      return n === 13 ? "Enter" : String.fromCharCode(n);
    }
    return e.type === "keydown" || e.type === "keyup" ? wR[e.keyCode] || "Unidentified" : "";
  }
  var AR = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function LR(e) {
    var t = this, n = t.nativeEvent;
    if (n.getModifierState)
      return n.getModifierState(e);
    var a = AR[e];
    return a ? !!n[a] : !1;
  }
  function Ed(e) {
    return LR;
  }
  var UR = _e({}, No, {
    key: MR,
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ed,
    // Legacy Interface
    charCode: function(e) {
      return e.type === "keypress" ? Ss(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ss(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), kR = Pn(UR), NR = _e({}, Cs, {
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
  }), Am = Pn(NR), zR = _e({}, No, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ed
  }), HR = Pn(zR), jR = _e({}, pu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), FR = Pn(jR), VR = _e({}, Cs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : (
        // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
        "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      );
    },
    deltaY: function(e) {
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
  }), BR = Pn(VR), YR = [9, 13, 27, 32], Lm = 229, Cd = Et && "CompositionEvent" in window, Ho = null;
  Et && "documentMode" in document && (Ho = document.documentMode);
  var $R = Et && "TextEvent" in window && !Ho, Um = Et && (!Cd || Ho && Ho > 8 && Ho <= 11), km = 32, Nm = String.fromCharCode(km);
  function PR() {
    kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), kn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), kn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), kn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
  }
  var zm = !1;
  function GR(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
    !(e.ctrlKey && e.altKey);
  }
  function qR(e) {
    switch (e) {
      case "compositionstart":
        return "onCompositionStart";
      case "compositionend":
        return "onCompositionEnd";
      case "compositionupdate":
        return "onCompositionUpdate";
    }
  }
  function QR(e, t) {
    return e === "keydown" && t.keyCode === Lm;
  }
  function Hm(e, t) {
    switch (e) {
      case "keyup":
        return YR.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== Lm;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function jm(e) {
    var t = e.detail;
    return typeof t == "object" && "data" in t ? t.data : null;
  }
  function Fm(e) {
    return e.locale === "ko";
  }
  var hu = !1;
  function WR(e, t, n, a, r) {
    var i, u;
    if (Cd ? i = qR(t) : hu ? Hm(t, a) && (i = "onCompositionEnd") : QR(t, a) && (i = "onCompositionStart"), !i)
      return null;
    Um && !Fm(a) && (!hu && i === "onCompositionStart" ? hu = hR(r) : i === "onCompositionEnd" && hu && (u = xm()));
    var o = _s(n, i);
    if (o.length > 0) {
      var l = new Mm(i, t, null, a, r);
      if (e.push({
        event: l,
        listeners: o
      }), u)
        l.data = u;
      else {
        var c = jm(a);
        c !== null && (l.data = c);
      }
    }
  }
  function XR(e, t) {
    switch (e) {
      case "compositionend":
        return jm(t);
      case "keypress":
        var n = t.which;
        return n !== km ? null : (zm = !0, Nm);
      case "textInput":
        var a = t.data;
        return a === Nm && zm ? null : a;
      default:
        return null;
    }
  }
  function IR(e, t) {
    if (hu) {
      if (e === "compositionend" || !Cd && Hm(e, t)) {
        var n = xm();
        return mR(), hu = !1, n;
      }
      return null;
    }
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!GR(t)) {
          if (t.char && t.char.length > 1)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Um && !Fm(t) ? null : t.data;
      default:
        return null;
    }
  }
  function KR(e, t, n, a, r) {
    var i;
    if ($R ? i = XR(t, a) : i = IR(t, a), !i)
      return null;
    var u = _s(n, "onBeforeInput");
    if (u.length > 0) {
      var o = new _R("onBeforeInput", "beforeinput", null, a, r);
      e.push({
        event: o,
        listeners: u
      }), o.data = i;
    }
  }
  function JR(e, t, n, a, r, i, u) {
    WR(e, t, n, a, r), KR(e, t, n, a, r);
  }
  var ZR = {
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
  function Vm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ZR[e.type] : t === "textarea";
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
  function eT(e) {
    if (!Et)
      return !1;
    var t = "on" + e, n = t in document;
    if (!n) {
      var a = document.createElement("div");
      a.setAttribute(t, "return;"), n = typeof a[t] == "function";
    }
    return n;
  }
  function tT() {
    kn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
  }
  function Bm(e, t, n, a) {
    jh(a);
    var r = _s(t, "onChange");
    if (r.length > 0) {
      var i = new yd("onChange", "change", null, n, a);
      e.push({
        event: i,
        listeners: r
      });
    }
  }
  var jo = null, Fo = null;
  function nT(e) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return t === "select" || t === "input" && e.type === "file";
  }
  function aT(e) {
    var t = [];
    Bm(t, Fo, e, Cf(e)), Yh(rT, t);
  }
  function rT(e) {
    iy(e, 0);
  }
  function Rs(e) {
    var t = Eu(e);
    if (Ii(t))
      return e;
  }
  function iT(e, t) {
    if (e === "change")
      return t;
  }
  var Ym = !1;
  Et && (Ym = eT("input") && (!document.documentMode || document.documentMode > 9));
  function uT(e, t) {
    jo = e, Fo = t, jo.attachEvent("onpropertychange", Pm);
  }
  function $m() {
    jo && (jo.detachEvent("onpropertychange", Pm), jo = null, Fo = null);
  }
  function Pm(e) {
    e.propertyName === "value" && Rs(Fo) && aT(e);
  }
  function oT(e, t, n) {
    e === "focusin" ? ($m(), uT(t, n)) : e === "focusout" && $m();
  }
  function lT(e, t) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Rs(Fo);
  }
  function sT(e) {
    var t = e.nodeName;
    return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
  }
  function cT(e, t) {
    if (e === "click")
      return Rs(t);
  }
  function fT(e, t) {
    if (e === "input" || e === "change")
      return Rs(t);
  }
  function dT(e) {
    var t = e._wrapperState;
    !t || !t.controlled || e.type !== "number" || pe(e, "number", e.value);
  }
  function vT(e, t, n, a, r, i, u) {
    var o = n ? Eu(n) : window, l, c;
    if (nT(o) ? l = iT : Vm(o) ? Ym ? l = fT : (l = lT, c = oT) : sT(o) && (l = cT), l) {
      var f = l(t, n);
      if (f) {
        Bm(e, f, a, r);
        return;
      }
    }
    c && c(t, o, n), t === "focusout" && dT(o);
  }
  function pT() {
    Nn("onMouseEnter", ["mouseout", "mouseover"]), Nn("onMouseLeave", ["mouseout", "mouseover"]), Nn("onPointerEnter", ["pointerout", "pointerover"]), Nn("onPointerLeave", ["pointerout", "pointerover"]);
  }
  function hT(e, t, n, a, r, i, u) {
    var o = t === "mouseover" || t === "pointerover", l = t === "mouseout" || t === "pointerout";
    if (o && !LE(a)) {
      var c = a.relatedTarget || a.fromElement;
      if (c && (Oi(c) || el(c)))
        return;
    }
    if (!(!l && !o)) {
      var f;
      if (r.window === r)
        f = r;
      else {
        var y = r.ownerDocument;
        y ? f = y.defaultView || y.parentWindow : f = window;
      }
      var m, S;
      if (l) {
        var C = a.relatedTarget || a.toElement;
        if (m = n, S = C ? Oi(C) : null, S !== null) {
          var D = Si(S);
          (S !== D || S.tag !== Q && S.tag !== de) && (S = null);
        }
      } else
        m = null, S = n;
      if (m !== S) {
        var V = wm, re = "onMouseLeave", Z = "onMouseEnter", Ue = "mouse";
        (t === "pointerout" || t === "pointerover") && (V = Am, re = "onPointerLeave", Z = "onPointerEnter", Ue = "pointer");
        var Oe = m == null ? f : Eu(m), g = S == null ? f : Eu(S), x = new V(re, Ue + "leave", m, a, r);
        x.target = Oe, x.relatedTarget = g;
        var b = null, A = Oi(r);
        if (A === n) {
          var G = new V(Z, Ue + "enter", S, a, r);
          G.target = g, G.relatedTarget = Oe, b = G;
        }
        FT(e, x, b, m, S);
      }
    }
  }
  function mT(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Gn = typeof Object.is == "function" ? Object.is : mT;
  function Vo(e, t) {
    if (Gn(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length)
      return !1;
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      if (!an.call(t, i) || !Gn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function Gm(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function yT(e) {
    for (; e; ) {
      if (e.nextSibling)
        return e.nextSibling;
      e = e.parentNode;
    }
  }
  function qm(e, t) {
    for (var n = Gm(e), a = 0, r = 0; n; ) {
      if (n.nodeType === or) {
        if (r = a + n.textContent.length, a <= t && r >= t)
          return {
            node: n,
            offset: t - a
          };
        a = r;
      }
      n = Gm(yT(n));
    }
  }
  function gT(e) {
    var t = e.ownerDocument, n = t && t.defaultView || window, a = n.getSelection && n.getSelection();
    if (!a || a.rangeCount === 0)
      return null;
    var r = a.anchorNode, i = a.anchorOffset, u = a.focusNode, o = a.focusOffset;
    try {
      r.nodeType, u.nodeType;
    } catch {
      return null;
    }
    return bT(e, r, i, u, o);
  }
  function bT(e, t, n, a, r) {
    var i = 0, u = -1, o = -1, l = 0, c = 0, f = e, y = null;
    e: for (; ; ) {
      for (var m = null; f === t && (n === 0 || f.nodeType === or) && (u = i + n), f === a && (r === 0 || f.nodeType === or) && (o = i + r), f.nodeType === or && (i += f.nodeValue.length), (m = f.firstChild) !== null; )
        y = f, f = m;
      for (; ; ) {
        if (f === e)
          break e;
        if (y === t && ++l === n && (u = i), y === a && ++c === r && (o = i), (m = f.nextSibling) !== null)
          break;
        f = y, y = f.parentNode;
      }
      f = m;
    }
    return u === -1 || o === -1 ? null : {
      start: u,
      end: o
    };
  }
  function ST(e, t) {
    var n = e.ownerDocument || document, a = n && n.defaultView || window;
    if (a.getSelection) {
      var r = a.getSelection(), i = e.textContent.length, u = Math.min(t.start, i), o = t.end === void 0 ? u : Math.min(t.end, i);
      if (!r.extend && u > o) {
        var l = o;
        o = u, u = l;
      }
      var c = qm(e, u), f = qm(e, o);
      if (c && f) {
        if (r.rangeCount === 1 && r.anchorNode === c.node && r.anchorOffset === c.offset && r.focusNode === f.node && r.focusOffset === f.offset)
          return;
        var y = n.createRange();
        y.setStart(c.node, c.offset), r.removeAllRanges(), u > o ? (r.addRange(y), r.extend(f.node, f.offset)) : (y.setEnd(f.node, f.offset), r.addRange(y));
      }
    }
  }
  function Qm(e) {
    return e && e.nodeType === or;
  }
  function Wm(e, t) {
    return !e || !t ? !1 : e === t ? !0 : Qm(e) ? !1 : Qm(t) ? Wm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
  }
  function ET(e) {
    return e && e.ownerDocument && Wm(e.ownerDocument.documentElement, e);
  }
  function CT(e) {
    try {
      return typeof e.contentWindow.location.href == "string";
    } catch {
      return !1;
    }
  }
  function Xm() {
    for (var e = window, t = zr(); t instanceof e.HTMLIFrameElement; ) {
      if (CT(t))
        e = t.contentWindow;
      else
        return t;
      t = zr(e.document);
    }
    return t;
  }
  function Rd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function RT() {
    var e = Xm();
    return {
      focusedElem: e,
      selectionRange: Rd(e) ? DT(e) : null
    };
  }
  function TT(e) {
    var t = Xm(), n = e.focusedElem, a = e.selectionRange;
    if (t !== n && ET(n)) {
      a !== null && Rd(n) && xT(n, a);
      for (var r = [], i = n; i = i.parentNode; )
        i.nodeType === _n && r.push({
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
  function DT(e) {
    var t;
    return "selectionStart" in e ? t = {
      start: e.selectionStart,
      end: e.selectionEnd
    } : t = gT(e), t || {
      start: 0,
      end: 0
    };
  }
  function xT(e, t) {
    var n = t.start, a = t.end;
    a === void 0 && (a = n), "selectionStart" in e ? (e.selectionStart = n, e.selectionEnd = Math.min(a, e.value.length)) : ST(e, t);
  }
  var _T = Et && "documentMode" in document && document.documentMode <= 11;
  function OT() {
    kn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
  }
  var mu = null, Td = null, Bo = null, Dd = !1;
  function wT(e) {
    if ("selectionStart" in e && Rd(e))
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
  function MT(e) {
    return e.window === e ? e.document : e.nodeType === lr ? e : e.ownerDocument;
  }
  function Im(e, t, n) {
    var a = MT(n);
    if (!(Dd || mu == null || mu !== zr(a))) {
      var r = wT(mu);
      if (!Bo || !Vo(Bo, r)) {
        Bo = r;
        var i = _s(Td, "onSelect");
        if (i.length > 0) {
          var u = new yd("onSelect", "select", null, t, n);
          e.push({
            event: u,
            listeners: i
          }), u.target = mu;
        }
      }
    }
  }
  function AT(e, t, n, a, r, i, u) {
    var o = n ? Eu(n) : window;
    switch (t) {
      case "focusin":
        (Vm(o) || o.contentEditable === "true") && (mu = o, Td = n, Bo = null);
        break;
      case "focusout":
        mu = null, Td = null, Bo = null;
        break;
      case "mousedown":
        Dd = !0;
        break;
      case "contextmenu":
      case "mouseup":
      case "dragend":
        Dd = !1, Im(e, a, r);
        break;
      case "selectionchange":
        if (_T)
          break;
      case "keydown":
      case "keyup":
        Im(e, a, r);
    }
  }
  function Ts(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var yu = {
    animationend: Ts("Animation", "AnimationEnd"),
    animationiteration: Ts("Animation", "AnimationIteration"),
    animationstart: Ts("Animation", "AnimationStart"),
    transitionend: Ts("Transition", "TransitionEnd")
  }, xd = {}, Km = {};
  Et && (Km = document.createElement("div").style, "AnimationEvent" in window || (delete yu.animationend.animation, delete yu.animationiteration.animation, delete yu.animationstart.animation), "TransitionEvent" in window || delete yu.transitionend.transition);
  function Ds(e) {
    if (xd[e])
      return xd[e];
    if (!yu[e])
      return e;
    var t = yu[e];
    for (var n in t)
      if (t.hasOwnProperty(n) && n in Km)
        return xd[e] = t[n];
    return e;
  }
  var Jm = Ds("animationend"), Zm = Ds("animationiteration"), ey = Ds("animationstart"), ty = Ds("transitionend"), ny = /* @__PURE__ */ new Map(), ay = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
  function $r(e, t) {
    ny.set(e, t), kn(t, [e]);
  }
  function LT() {
    for (var e = 0; e < ay.length; e++) {
      var t = ay[e], n = t.toLowerCase(), a = t[0].toUpperCase() + t.slice(1);
      $r(n, "on" + a);
    }
    $r(Jm, "onAnimationEnd"), $r(Zm, "onAnimationIteration"), $r(ey, "onAnimationStart"), $r("dblclick", "onDoubleClick"), $r("focusin", "onFocus"), $r("focusout", "onBlur"), $r(ty, "onTransitionEnd");
  }
  function UT(e, t, n, a, r, i, u) {
    var o = ny.get(t);
    if (o !== void 0) {
      var l = yd, c = t;
      switch (t) {
        case "keypress":
          if (Ss(a) === 0)
            return;
        case "keydown":
        case "keyup":
          l = kR;
          break;
        case "focusin":
          c = "focus", l = Sd;
          break;
        case "focusout":
          c = "blur", l = Sd;
          break;
        case "beforeblur":
        case "afterblur":
          l = Sd;
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
          l = wm;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          l = SR;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          l = HR;
          break;
        case Jm:
        case Zm:
        case ey:
          l = RR;
          break;
        case ty:
          l = FR;
          break;
        case "scroll":
          l = yR;
          break;
        case "wheel":
          l = BR;
          break;
        case "copy":
        case "cut":
        case "paste":
          l = DR;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          l = Am;
          break;
      }
      var f = (i & fo) !== 0;
      {
        var y = !f && // TODO: ideally, we'd eventually add all events from
        // nonDelegatedEvents list in DOMPluginEventSystem.
        // Then we can remove this special list.
        // This is a breaking change that can wait until React 18.
        t === "scroll", m = HT(n, o, a.type, f, y);
        if (m.length > 0) {
          var S = new l(o, c, null, a, r);
          e.push({
            event: S,
            listeners: m
          });
        }
      }
    }
  }
  LT(), pT(), tT(), OT(), PR();
  function kT(e, t, n, a, r, i, u) {
    UT(e, t, n, a, r, i);
    var o = (i & wE) === 0;
    o && (hT(e, t, n, a, r), vT(e, t, n, a, r), AT(e, t, n, a, r), JR(e, t, n, a, r));
  }
  var Yo = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], _d = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Yo));
  function ry(e, t, n) {
    var a = e.type || "unknown-event";
    e.currentTarget = n, BE(a, t, void 0, e), e.currentTarget = null;
  }
  function NT(e, t, n) {
    var a;
    if (n)
      for (var r = t.length - 1; r >= 0; r--) {
        var i = t[r], u = i.instance, o = i.currentTarget, l = i.listener;
        if (u !== a && e.isPropagationStopped())
          return;
        ry(e, l, o), a = u;
      }
    else
      for (var c = 0; c < t.length; c++) {
        var f = t[c], y = f.instance, m = f.currentTarget, S = f.listener;
        if (y !== a && e.isPropagationStopped())
          return;
        ry(e, S, m), a = y;
      }
  }
  function iy(e, t) {
    for (var n = (t & fo) !== 0, a = 0; a < e.length; a++) {
      var r = e[a], i = r.event, u = r.listeners;
      NT(i, u, n);
    }
    YE();
  }
  function zT(e, t, n, a, r) {
    var i = Cf(n), u = [];
    kT(u, e, a, n, i, t), iy(u, t);
  }
  function st(e, t) {
    _d.has(e) || d('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
    var n = !1, a = dx(t), r = VT(e);
    a.has(r) || (uy(t, e, Ef, n), a.add(r));
  }
  function Od(e, t, n) {
    _d.has(e) && !t && d('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
    var a = 0;
    t && (a |= fo), uy(n, e, a, t);
  }
  var xs = "_reactListening" + Math.random().toString(36).slice(2);
  function $o(e) {
    if (!e[xs]) {
      e[xs] = !0, Kn.forEach(function(n) {
        n !== "selectionchange" && (_d.has(n) || Od(n, !1, e), Od(n, !0, e));
      });
      var t = e.nodeType === lr ? e : e.ownerDocument;
      t !== null && (t[xs] || (t[xs] = !0, Od("selectionchange", !1, t)));
    }
  }
  function uy(e, t, n, a, r) {
    var i = oR(e, t, n), u = void 0;
    Df && (t === "touchstart" || t === "touchmove" || t === "wheel") && (u = !0), e = e, a ? u !== void 0 ? vR(e, t, i, u) : dR(e, t, i) : u !== void 0 ? pR(e, t, i, u) : fR(e, t, i);
  }
  function oy(e, t) {
    return e === t || e.nodeType === Ct && e.parentNode === t;
  }
  function wd(e, t, n, a, r) {
    var i = a;
    if (!(t & zh) && !(t & Ef)) {
      var u = r;
      if (a !== null) {
        var o = a;
        e: for (; ; ) {
          if (o === null)
            return;
          var l = o.tag;
          if (l === P || l === ae) {
            var c = o.stateNode.containerInfo;
            if (oy(c, u))
              break;
            if (l === ae)
              for (var f = o.return; f !== null; ) {
                var y = f.tag;
                if (y === P || y === ae) {
                  var m = f.stateNode.containerInfo;
                  if (oy(m, u))
                    return;
                }
                f = f.return;
              }
            for (; c !== null; ) {
              var S = Oi(c);
              if (S === null)
                return;
              var C = S.tag;
              if (C === Q || C === de) {
                o = i = S;
                continue e;
              }
              c = c.parentNode;
            }
          }
          o = o.return;
        }
      }
    }
    Yh(function() {
      return zT(e, t, n, i);
    });
  }
  function Po(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function HT(e, t, n, a, r, i) {
    for (var u = t !== null ? t + "Capture" : null, o = a ? u : t, l = [], c = e, f = null; c !== null; ) {
      var y = c, m = y.stateNode, S = y.tag;
      if (S === Q && m !== null && (f = m, o !== null)) {
        var C = po(c, o);
        C != null && l.push(Po(c, C, f));
      }
      if (r)
        break;
      c = c.return;
    }
    return l;
  }
  function _s(e, t) {
    for (var n = t + "Capture", a = [], r = e; r !== null; ) {
      var i = r, u = i.stateNode, o = i.tag;
      if (o === Q && u !== null) {
        var l = u, c = po(r, n);
        c != null && a.unshift(Po(r, c, l));
        var f = po(r, t);
        f != null && a.push(Po(r, f, l));
      }
      r = r.return;
    }
    return a;
  }
  function gu(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== Q);
    return e || null;
  }
  function jT(e, t) {
    for (var n = e, a = t, r = 0, i = n; i; i = gu(i))
      r++;
    for (var u = 0, o = a; o; o = gu(o))
      u++;
    for (; r - u > 0; )
      n = gu(n), r--;
    for (; u - r > 0; )
      a = gu(a), u--;
    for (var l = r; l--; ) {
      if (n === a || a !== null && n === a.alternate)
        return n;
      n = gu(n), a = gu(a);
    }
    return null;
  }
  function ly(e, t, n, a, r) {
    for (var i = t._reactName, u = [], o = n; o !== null && o !== a; ) {
      var l = o, c = l.alternate, f = l.stateNode, y = l.tag;
      if (c !== null && c === a)
        break;
      if (y === Q && f !== null) {
        var m = f;
        if (r) {
          var S = po(o, i);
          S != null && u.unshift(Po(o, S, m));
        } else if (!r) {
          var C = po(o, i);
          C != null && u.push(Po(o, C, m));
        }
      }
      o = o.return;
    }
    u.length !== 0 && e.push({
      event: t,
      listeners: u
    });
  }
  function FT(e, t, n, a, r) {
    var i = a && r ? jT(a, r) : null;
    a !== null && ly(e, t, a, i, !1), r !== null && n !== null && ly(e, n, r, i, !0);
  }
  function VT(e, t) {
    return e + "__bubble";
  }
  var On = !1, Go = "dangerouslySetInnerHTML", Os = "suppressContentEditableWarning", Pr = "suppressHydrationWarning", sy = "autoFocus", xi = "children", _i = "style", ws = "__html", Md, Ms, qo, cy, As, fy, dy;
  Md = {
    // There are working polyfills for <dialog>. Let people use it.
    dialog: !0,
    // Electron ships a custom <webview> tag to display external web content in
    // an isolated frame and process.
    // This tag is not present in non Electron environments such as JSDom which
    // is often used for testing purposes.
    // @see https://electronjs.org/docs/api/webview-tag
    webview: !0
  }, Ms = function(e, t) {
    CE(e, t), RE(e, t), OE(e, t, {
      registrationNameDependencies: Qt,
      possibleRegistrationNames: Rn
    });
  }, fy = Et && !document.documentMode, qo = function(e, t, n) {
    if (!On) {
      var a = Ls(n), r = Ls(t);
      r !== a && (On = !0, d("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(r), JSON.stringify(a)));
    }
  }, cy = function(e) {
    if (!On) {
      On = !0;
      var t = [];
      e.forEach(function(n) {
        t.push(n);
      }), d("Extra attributes from the server: %s", t);
    }
  }, As = function(e, t) {
    t === !1 ? d("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : d("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
  }, dy = function(e, t) {
    var n = e.namespaceURI === ur ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
    return n.innerHTML = t, n.innerHTML;
  };
  var BT = /\r\n?/g, YT = /\u0000|\uFFFD/g;
  function Ls(e) {
    Zn(e);
    var t = typeof e == "string" ? e : "" + e;
    return t.replace(BT, `
`).replace(YT, "");
  }
  function Us(e, t, n, a) {
    var r = Ls(t), i = Ls(e);
    if (i !== r && (a && (On || (On = !0, d('Text content did not match. Server: "%s" Client: "%s"', i, r))), n && Ee))
      throw new Error("Text content does not match server-rendered HTML.");
  }
  function vy(e) {
    return e.nodeType === lr ? e : e.ownerDocument;
  }
  function $T() {
  }
  function ks(e) {
    e.onclick = $T;
  }
  function PT(e, t, n, a, r) {
    for (var i in a)
      if (a.hasOwnProperty(i)) {
        var u = a[i];
        if (i === _i)
          u && Object.freeze(u), Mh(t, u);
        else if (i === Go) {
          var o = u ? u[ws] : void 0;
          o != null && Dh(t, o);
        } else if (i === xi)
          if (typeof u == "string") {
            var l = e !== "textarea" || u !== "";
            l && ns(t, u);
          } else typeof u == "number" && ns(t, "" + u);
        else i === Os || i === Pr || i === sy || (Qt.hasOwnProperty(i) ? u != null && (typeof u != "function" && As(i, u), i === "onScroll" && st("scroll", t)) : u != null && nr(t, i, u, r));
      }
  }
  function GT(e, t, n, a) {
    for (var r = 0; r < t.length; r += 2) {
      var i = t[r], u = t[r + 1];
      i === _i ? Mh(e, u) : i === Go ? Dh(e, u) : i === xi ? ns(e, u) : nr(e, i, u, a);
    }
  }
  function qT(e, t, n, a) {
    var r, i = vy(n), u, o = a;
    if (o === ur && (o = hf(e)), o === ur) {
      if (r = hi(e, t), !r && e !== e.toLowerCase() && d("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
    return o === ur && !r && Object.prototype.toString.call(u) === "[object HTMLUnknownElement]" && !an.call(Md, e) && (Md[e] = !0, d("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), u;
  }
  function QT(e, t) {
    return vy(t).createTextNode(e);
  }
  function WT(e, t, n, a) {
    var r = hi(t, n);
    Ms(t, n);
    var i;
    switch (t) {
      case "dialog":
        st("cancel", e), st("close", e), i = n;
        break;
      case "iframe":
      case "object":
      case "embed":
        st("load", e), i = n;
        break;
      case "video":
      case "audio":
        for (var u = 0; u < Yo.length; u++)
          st(Yo[u], e);
        i = n;
        break;
      case "source":
        st("error", e), i = n;
        break;
      case "img":
      case "image":
      case "link":
        st("error", e), st("load", e), i = n;
        break;
      case "details":
        st("toggle", e), i = n;
        break;
      case "input":
        v(e, n), i = s(e, n), st("invalid", e);
        break;
      case "option":
        nt(e, n), i = n;
        break;
      case "select":
        so(e, n), i = lo(e, n), st("invalid", e);
        break;
      case "textarea":
        Ch(e, n), i = vf(e, n), st("invalid", e);
        break;
      default:
        i = n;
    }
    switch (Sf(t, i), PT(t, e, a, i, r), t) {
      case "input":
        rr(e), k(e, n, !1);
        break;
      case "textarea":
        rr(e), Th(e);
        break;
      case "option":
        lt(e, n);
        break;
      case "select":
        df(e, n);
        break;
      default:
        typeof i.onClick == "function" && ks(e);
        break;
    }
  }
  function XT(e, t, n, a, r) {
    Ms(t, a);
    var i = null, u, o;
    switch (t) {
      case "input":
        u = s(e, n), o = s(e, a), i = [];
        break;
      case "select":
        u = lo(e, n), o = lo(e, a), i = [];
        break;
      case "textarea":
        u = vf(e, n), o = vf(e, a), i = [];
        break;
      default:
        u = n, o = a, typeof u.onClick != "function" && typeof o.onClick == "function" && ks(e);
        break;
    }
    Sf(t, o);
    var l, c, f = null;
    for (l in u)
      if (!(o.hasOwnProperty(l) || !u.hasOwnProperty(l) || u[l] == null))
        if (l === _i) {
          var y = u[l];
          for (c in y)
            y.hasOwnProperty(c) && (f || (f = {}), f[c] = "");
        } else l === Go || l === xi || l === Os || l === Pr || l === sy || (Qt.hasOwnProperty(l) ? i || (i = []) : (i = i || []).push(l, null));
    for (l in o) {
      var m = o[l], S = u != null ? u[l] : void 0;
      if (!(!o.hasOwnProperty(l) || m === S || m == null && S == null))
        if (l === _i)
          if (m && Object.freeze(m), S) {
            for (c in S)
              S.hasOwnProperty(c) && (!m || !m.hasOwnProperty(c)) && (f || (f = {}), f[c] = "");
            for (c in m)
              m.hasOwnProperty(c) && S[c] !== m[c] && (f || (f = {}), f[c] = m[c]);
          } else
            f || (i || (i = []), i.push(l, f)), f = m;
        else if (l === Go) {
          var C = m ? m[ws] : void 0, D = S ? S[ws] : void 0;
          C != null && D !== C && (i = i || []).push(l, C);
        } else l === xi ? (typeof m == "string" || typeof m == "number") && (i = i || []).push(l, "" + m) : l === Os || l === Pr || (Qt.hasOwnProperty(l) ? (m != null && (typeof m != "function" && As(l, m), l === "onScroll" && st("scroll", e)), !i && S !== m && (i = [])) : (i = i || []).push(l, m));
    }
    return f && (pE(f, o[_i]), (i = i || []).push(_i, f)), i;
  }
  function IT(e, t, n, a, r) {
    n === "input" && r.type === "radio" && r.name != null && E(e, r);
    var i = hi(n, a), u = hi(n, r);
    switch (GT(e, t, i, u), n) {
      case "input":
        T(e, r);
        break;
      case "textarea":
        Rh(e, r);
        break;
      case "select":
        GS(e, r);
        break;
    }
  }
  function KT(e) {
    {
      var t = e.toLowerCase();
      return as.hasOwnProperty(t) && as[t] || null;
    }
  }
  function JT(e, t, n, a, r, i, u) {
    var o, l;
    switch (o = hi(t, n), Ms(t, n), t) {
      case "dialog":
        st("cancel", e), st("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        st("load", e);
        break;
      case "video":
      case "audio":
        for (var c = 0; c < Yo.length; c++)
          st(Yo[c], e);
        break;
      case "source":
        st("error", e);
        break;
      case "img":
      case "image":
      case "link":
        st("error", e), st("load", e);
        break;
      case "details":
        st("toggle", e);
        break;
      case "input":
        v(e, n), st("invalid", e);
        break;
      case "option":
        nt(e, n);
        break;
      case "select":
        so(e, n), st("invalid", e);
        break;
      case "textarea":
        Ch(e, n), st("invalid", e);
        break;
    }
    Sf(t, n);
    {
      l = /* @__PURE__ */ new Set();
      for (var f = e.attributes, y = 0; y < f.length; y++) {
        var m = f[y].name.toLowerCase();
        switch (m) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            l.add(f[y].name);
        }
      }
    }
    var S = null;
    for (var C in n)
      if (n.hasOwnProperty(C)) {
        var D = n[C];
        if (C === xi)
          typeof D == "string" ? e.textContent !== D && (n[Pr] !== !0 && Us(e.textContent, D, i, u), S = [xi, D]) : typeof D == "number" && e.textContent !== "" + D && (n[Pr] !== !0 && Us(e.textContent, D, i, u), S = [xi, "" + D]);
        else if (Qt.hasOwnProperty(C))
          D != null && (typeof D != "function" && As(C, D), C === "onScroll" && st("scroll", e));
        else if (u && // Convince Flow we've calculated it (it's DEV-only in this method.)
        typeof o == "boolean") {
          var V = void 0, re = o && Cn ? null : jn(C);
          if (n[Pr] !== !0) {
            if (!(C === Os || C === Pr || // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            C === "value" || C === "checked" || C === "selected")) {
              if (C === Go) {
                var Z = e.innerHTML, Ue = D ? D[ws] : void 0;
                if (Ue != null) {
                  var Oe = dy(e, Ue);
                  Oe !== Z && qo(C, Z, Oe);
                }
              } else if (C === _i) {
                if (l.delete(C), fy) {
                  var g = dE(D);
                  V = e.getAttribute("style"), g !== V && qo(C, V, g);
                }
              } else if (o && !Cn)
                l.delete(C.toLowerCase()), V = Or(e, C, D), D !== V && qo(C, V, D);
              else if (!bt(C, re, o) && !et(C, D, re, o)) {
                var x = !1;
                if (re !== null)
                  l.delete(re.attributeName), V = tr(e, C, D, re);
                else {
                  var b = a;
                  if (b === ur && (b = hf(t)), b === ur)
                    l.delete(C.toLowerCase());
                  else {
                    var A = KT(C);
                    A !== null && A !== C && (x = !0, l.delete(A)), l.delete(C);
                  }
                  V = Or(e, C, D);
                }
                var G = Cn;
                !G && D !== V && !x && qo(C, V, D);
              }
            }
          }
        }
      }
    switch (u && // $FlowFixMe - Should be inferred as not undefined.
    l.size > 0 && n[Pr] !== !0 && cy(l), t) {
      case "input":
        rr(e), k(e, n, !0);
        break;
      case "textarea":
        rr(e), Th(e);
        break;
      case "select":
      case "option":
        break;
      default:
        typeof n.onClick == "function" && ks(e);
        break;
    }
    return S;
  }
  function ZT(e, t, n) {
    var a = e.nodeValue !== t;
    return a;
  }
  function Ad(e, t) {
    {
      if (On)
        return;
      On = !0, d("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
    }
  }
  function Ld(e, t) {
    {
      if (On)
        return;
      On = !0, d('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
    }
  }
  function Ud(e, t, n) {
    {
      if (On)
        return;
      On = !0, d("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
    }
  }
  function kd(e, t) {
    {
      if (t === "" || On)
        return;
      On = !0, d('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
    }
  }
  function eD(e, t, n) {
    switch (t) {
      case "input":
        ce(e, n);
        return;
      case "textarea":
        QS(e, n);
        return;
      case "select":
        qS(e, n);
        return;
    }
  }
  var Qo = function() {
  }, Wo = function() {
  };
  {
    var tD = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], py = [
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
    ], nD = py.concat(["button"]), aD = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], hy = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null
    };
    Wo = function(e, t) {
      var n = _e({}, e || hy), a = {
        tag: t
      };
      return py.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), nD.indexOf(t) !== -1 && (n.pTagInButtonScope = null), tD.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = a, t === "form" && (n.formTag = a), t === "a" && (n.aTagInScope = a), t === "button" && (n.buttonTagInScope = a), t === "nobr" && (n.nobrTagInScope = a), t === "p" && (n.pTagInButtonScope = a), t === "li" && (n.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = a), n;
    };
    var rD = function(e, t) {
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
          return aD.indexOf(t) === -1;
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
    }, iD = function(e, t) {
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
    }, my = {};
    Qo = function(e, t, n) {
      n = n || hy;
      var a = n.current, r = a && a.tag;
      t != null && (e != null && d("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
      var i = rD(e, r) ? null : a, u = i ? null : iD(e, n), o = i || u;
      if (o) {
        var l = o.tag, c = !!i + "|" + e + "|" + l;
        if (!my[c]) {
          my[c] = !0;
          var f = e, y = "";
          if (e === "#text" ? /\S/.test(t) ? f = "Text nodes" : (f = "Whitespace text nodes", y = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : f = "<" + e + ">", i) {
            var m = "";
            l === "table" && e === "tr" && (m += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), d("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", f, l, y, m);
          } else
            d("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", f, l);
        }
      }
    };
  }
  var Ns = "suppressHydrationWarning", zs = "$", Hs = "/$", Xo = "$?", Io = "$!", uD = "style", Nd = null, zd = null;
  function oD(e) {
    var t, n, a = e.nodeType;
    switch (a) {
      case lr:
      case yf: {
        t = a === lr ? "#document" : "#fragment";
        var r = e.documentElement;
        n = r ? r.namespaceURI : mf(null, "");
        break;
      }
      default: {
        var i = a === Ct ? e.parentNode : e, u = i.namespaceURI || null;
        t = i.tagName, n = mf(u, t);
        break;
      }
    }
    {
      var o = t.toLowerCase(), l = Wo(null, o);
      return {
        namespace: n,
        ancestorInfo: l
      };
    }
  }
  function lD(e, t, n) {
    {
      var a = e, r = mf(a.namespace, t), i = Wo(a.ancestorInfo, t);
      return {
        namespace: r,
        ancestorInfo: i
      };
    }
  }
  function qw(e) {
    return e;
  }
  function sD(e) {
    Nd = uR(), zd = RT();
    var t = null;
    return Tm(!1), t;
  }
  function cD(e) {
    TT(zd), Tm(Nd), Nd = null, zd = null;
  }
  function fD(e, t, n, a, r) {
    var i;
    {
      var u = a;
      if (Qo(e, null, u.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
        var o = "" + t.children, l = Wo(u.ancestorInfo, e);
        Qo(null, o, l);
      }
      i = u.namespace;
    }
    var c = qT(e, t, n, i);
    return Zo(r, c), Pd(c, t), c;
  }
  function dD(e, t) {
    e.appendChild(t);
  }
  function vD(e, t, n, a, r) {
    switch (WT(e, t, n, a), t) {
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
  function pD(e, t, n, a, r, i) {
    {
      var u = i;
      if (typeof a.children != typeof n.children && (typeof a.children == "string" || typeof a.children == "number")) {
        var o = "" + a.children, l = Wo(u.ancestorInfo, t);
        Qo(null, o, l);
      }
    }
    return XT(e, t, n, a);
  }
  function Hd(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  function hD(e, t, n, a) {
    {
      var r = n;
      Qo(null, e, r.ancestorInfo);
    }
    var i = QT(e, t);
    return Zo(a, i), i;
  }
  function mD() {
    var e = window.event;
    return e === void 0 ? hr : Dm(e.type);
  }
  var jd = typeof setTimeout == "function" ? setTimeout : void 0, yD = typeof clearTimeout == "function" ? clearTimeout : void 0, Fd = -1, yy = typeof Promise == "function" ? Promise : void 0, gD = typeof queueMicrotask == "function" ? queueMicrotask : typeof yy < "u" ? function(e) {
    return yy.resolve(null).then(e).catch(bD);
  } : jd;
  function bD(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function SD(e, t, n, a) {
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
  function ED(e, t, n, a, r, i) {
    IT(e, t, n, a, r), Pd(e, r);
  }
  function gy(e) {
    ns(e, "");
  }
  function CD(e, t, n) {
    e.nodeValue = n;
  }
  function RD(e, t) {
    e.appendChild(t);
  }
  function TD(e, t) {
    var n;
    e.nodeType === Ct ? (n = e.parentNode, n.insertBefore(t, e)) : (n = e, n.appendChild(t));
    var a = e._reactRootContainer;
    a == null && n.onclick === null && ks(n);
  }
  function DD(e, t, n) {
    e.insertBefore(t, n);
  }
  function xD(e, t, n) {
    e.nodeType === Ct ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
  }
  function _D(e, t) {
    e.removeChild(t);
  }
  function OD(e, t) {
    e.nodeType === Ct ? e.parentNode.removeChild(t) : e.removeChild(t);
  }
  function Vd(e, t) {
    var n = t, a = 0;
    do {
      var r = n.nextSibling;
      if (e.removeChild(n), r && r.nodeType === Ct) {
        var i = r.data;
        if (i === Hs)
          if (a === 0) {
            e.removeChild(r), Lo(t);
            return;
          } else
            a--;
        else (i === zs || i === Xo || i === Io) && a++;
      }
      n = r;
    } while (n);
    Lo(t);
  }
  function wD(e, t) {
    e.nodeType === Ct ? Vd(e.parentNode, t) : e.nodeType === _n && Vd(e, t), Lo(e);
  }
  function MD(e) {
    e = e;
    var t = e.style;
    typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
  }
  function AD(e) {
    e.nodeValue = "";
  }
  function LD(e, t) {
    e = e;
    var n = t[uD], a = n != null && n.hasOwnProperty("display") ? n.display : null;
    e.style.display = gf("display", a);
  }
  function UD(e, t) {
    e.nodeValue = t;
  }
  function kD(e) {
    e.nodeType === _n ? e.textContent = "" : e.nodeType === lr && e.documentElement && e.removeChild(e.documentElement);
  }
  function ND(e, t, n) {
    return e.nodeType !== _n || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
  }
  function zD(e, t) {
    return t === "" || e.nodeType !== or ? null : e;
  }
  function HD(e) {
    return e.nodeType !== Ct ? null : e;
  }
  function by(e) {
    return e.data === Xo;
  }
  function Bd(e) {
    return e.data === Io;
  }
  function jD(e) {
    var t = e.nextSibling && e.nextSibling.dataset, n, a, r;
    return t && (n = t.dgst, a = t.msg, r = t.stck), {
      message: a,
      digest: n,
      stack: r
    };
  }
  function FD(e, t) {
    e._reactRetry = t;
  }
  function js(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === _n || t === or)
        break;
      if (t === Ct) {
        var n = e.data;
        if (n === zs || n === Io || n === Xo)
          break;
        if (n === Hs)
          return null;
      }
    }
    return e;
  }
  function Ko(e) {
    return js(e.nextSibling);
  }
  function VD(e) {
    return js(e.firstChild);
  }
  function BD(e) {
    return js(e.firstChild);
  }
  function YD(e) {
    return js(e.nextSibling);
  }
  function $D(e, t, n, a, r, i, u) {
    Zo(i, e), Pd(e, n);
    var o;
    {
      var l = r;
      o = l.namespace;
    }
    var c = (i.mode & Ae) !== ue;
    return JT(e, t, n, o, a, c, u);
  }
  function PD(e, t, n, a) {
    return Zo(n, e), n.mode & Ae, ZT(e, t);
  }
  function GD(e, t) {
    Zo(t, e);
  }
  function qD(e) {
    for (var t = e.nextSibling, n = 0; t; ) {
      if (t.nodeType === Ct) {
        var a = t.data;
        if (a === Hs) {
          if (n === 0)
            return Ko(t);
          n--;
        } else (a === zs || a === Io || a === Xo) && n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Sy(e) {
    for (var t = e.previousSibling, n = 0; t; ) {
      if (t.nodeType === Ct) {
        var a = t.data;
        if (a === zs || a === Io || a === Xo) {
          if (n === 0)
            return t;
          n--;
        } else a === Hs && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function QD(e) {
    Lo(e);
  }
  function WD(e) {
    Lo(e);
  }
  function XD(e) {
    return e !== "head" && e !== "body";
  }
  function ID(e, t, n, a) {
    var r = !0;
    Us(t.nodeValue, n, a, r);
  }
  function KD(e, t, n, a, r, i) {
    if (t[Ns] !== !0) {
      var u = !0;
      Us(a.nodeValue, r, i, u);
    }
  }
  function JD(e, t) {
    t.nodeType === _n ? Ad(e, t) : t.nodeType === Ct || Ld(e, t);
  }
  function ZD(e, t) {
    {
      var n = e.parentNode;
      n !== null && (t.nodeType === _n ? Ad(n, t) : t.nodeType === Ct || Ld(n, t));
    }
  }
  function ex(e, t, n, a, r) {
    (r || t[Ns] !== !0) && (a.nodeType === _n ? Ad(n, a) : a.nodeType === Ct || Ld(n, a));
  }
  function tx(e, t, n) {
    Ud(e, t);
  }
  function nx(e, t) {
    kd(e, t);
  }
  function ax(e, t, n) {
    {
      var a = e.parentNode;
      a !== null && Ud(a, t);
    }
  }
  function rx(e, t) {
    {
      var n = e.parentNode;
      n !== null && kd(n, t);
    }
  }
  function ix(e, t, n, a, r, i) {
    (i || t[Ns] !== !0) && Ud(n, a);
  }
  function ux(e, t, n, a, r) {
    (r || t[Ns] !== !0) && kd(n, a);
  }
  function ox(e) {
    d("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
  }
  function lx(e) {
    $o(e);
  }
  var bu = Math.random().toString(36).slice(2), Su = "__reactFiber$" + bu, Yd = "__reactProps$" + bu, Jo = "__reactContainer$" + bu, $d = "__reactEvents$" + bu, sx = "__reactListeners$" + bu, cx = "__reactHandles$" + bu;
  function fx(e) {
    delete e[Su], delete e[Yd], delete e[$d], delete e[sx], delete e[cx];
  }
  function Zo(e, t) {
    t[Su] = e;
  }
  function Fs(e, t) {
    t[Jo] = e;
  }
  function Ey(e) {
    e[Jo] = null;
  }
  function el(e) {
    return !!e[Jo];
  }
  function Oi(e) {
    var t = e[Su];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Jo] || n[Su], t) {
        var a = t.alternate;
        if (t.child !== null || a !== null && a.child !== null)
          for (var r = Sy(e); r !== null; ) {
            var i = r[Su];
            if (i)
              return i;
            r = Sy(r);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Gr(e) {
    var t = e[Su] || e[Jo];
    return t && (t.tag === Q || t.tag === de || t.tag === q || t.tag === P) ? t : null;
  }
  function Eu(e) {
    if (e.tag === Q || e.tag === de)
      return e.stateNode;
    throw new Error("getNodeFromInstance: Invalid argument.");
  }
  function Vs(e) {
    return e[Yd] || null;
  }
  function Pd(e, t) {
    e[Yd] = t;
  }
  function dx(e) {
    var t = e[$d];
    return t === void 0 && (t = e[$d] = /* @__PURE__ */ new Set()), t;
  }
  var Cy = {}, Ry = L.ReactDebugCurrentFrame;
  function Bs(e) {
    if (e) {
      var t = e._owner, n = Ur(e.type, e._source, t ? t.type : null);
      Ry.setExtraStackFrame(n);
    } else
      Ry.setExtraStackFrame(null);
  }
  function Ea(e, t, n, a, r) {
    {
      var i = Function.call.bind(an);
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
          o && !(o instanceof Error) && (Bs(r), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, u, typeof o), Bs(null)), o instanceof Error && !(o.message in Cy) && (Cy[o.message] = !0, Bs(r), d("Failed %s type: %s", n, o.message), Bs(null));
        }
    }
  }
  var Gd = [], Ys;
  Ys = [];
  var mr = -1;
  function qr(e) {
    return {
      current: e
    };
  }
  function sn(e, t) {
    if (mr < 0) {
      d("Unexpected pop.");
      return;
    }
    t !== Ys[mr] && d("Unexpected Fiber popped."), e.current = Gd[mr], Gd[mr] = null, Ys[mr] = null, mr--;
  }
  function cn(e, t, n) {
    mr++, Gd[mr] = e.current, Ys[mr] = n, e.current = t;
  }
  var qd;
  qd = {};
  var qn = {};
  Object.freeze(qn);
  var yr = qr(qn), $a = qr(!1), Qd = qn;
  function Cu(e, t, n) {
    return n && Pa(t) ? Qd : yr.current;
  }
  function Ty(e, t, n) {
    {
      var a = e.stateNode;
      a.__reactInternalMemoizedUnmaskedChildContext = t, a.__reactInternalMemoizedMaskedChildContext = n;
    }
  }
  function Ru(e, t) {
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
        var o = be(e) || "Unknown";
        Ea(a, i, "context", o);
      }
      return r && Ty(e, t, i), i;
    }
  }
  function $s() {
    return $a.current;
  }
  function Pa(e) {
    {
      var t = e.childContextTypes;
      return t != null;
    }
  }
  function Ps(e) {
    sn($a, e), sn(yr, e);
  }
  function Wd(e) {
    sn($a, e), sn(yr, e);
  }
  function Dy(e, t, n) {
    {
      if (yr.current !== qn)
        throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
      cn(yr, t, e), cn($a, n, e);
    }
  }
  function xy(e, t, n) {
    {
      var a = e.stateNode, r = t.childContextTypes;
      if (typeof a.getChildContext != "function") {
        {
          var i = be(e) || "Unknown";
          qd[i] || (qd[i] = !0, d("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", i, i));
        }
        return n;
      }
      var u = a.getChildContext();
      for (var o in u)
        if (!(o in r))
          throw new Error((be(e) || "Unknown") + '.getChildContext(): key "' + o + '" is not defined in childContextTypes.');
      {
        var l = be(e) || "Unknown";
        Ea(r, u, "child context", l);
      }
      return _e({}, n, u);
    }
  }
  function Gs(e) {
    {
      var t = e.stateNode, n = t && t.__reactInternalMemoizedMergedChildContext || qn;
      return Qd = yr.current, cn(yr, n, e), cn($a, $a.current, e), !0;
    }
  }
  function _y(e, t, n) {
    {
      var a = e.stateNode;
      if (!a)
        throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
      if (n) {
        var r = xy(e, t, Qd);
        a.__reactInternalMemoizedMergedChildContext = r, sn($a, e), sn(yr, e), cn(yr, r, e), cn($a, n, e);
      } else
        sn($a, e), cn($a, n, e);
    }
  }
  function vx(e) {
    {
      if (!XE(e) || e.tag !== N)
        throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
      var t = e;
      do {
        switch (t.tag) {
          case P:
            return t.stateNode.context;
          case N: {
            var n = t.type;
            if (Pa(n))
              return t.stateNode.__reactInternalMemoizedMergedChildContext;
            break;
          }
        }
        t = t.return;
      } while (t !== null);
      throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  var Qr = 0, qs = 1, gr = null, Xd = !1, Id = !1;
  function Oy(e) {
    gr === null ? gr = [e] : gr.push(e);
  }
  function px(e) {
    Xd = !0, Oy(e);
  }
  function wy() {
    Xd && Wr();
  }
  function Wr() {
    if (!Id && gr !== null) {
      Id = !0;
      var e = 0, t = Sa();
      try {
        var n = !0, a = gr;
        for (Gt($n); e < a.length; e++) {
          var r = a[e];
          do
            r = r(n);
          while (r !== null);
        }
        gr = null, Xd = !1;
      } catch (i) {
        throw gr !== null && (gr = gr.slice(e + 1)), Zh(ls, Wr), i;
      } finally {
        Gt(t), Id = !1;
      }
    }
    return null;
  }
  var Tu = [], Du = 0, Qs = null, Ws = 0, ra = [], ia = 0, wi = null, br = 1, Sr = "";
  function hx(e) {
    return Ai(), (e.flags & Gh) !== se;
  }
  function mx(e) {
    return Ai(), Ws;
  }
  function yx() {
    var e = Sr, t = br, n = t & ~gx(t);
    return n.toString(32) + e;
  }
  function Mi(e, t) {
    Ai(), Tu[Du++] = Ws, Tu[Du++] = Qs, Qs = e, Ws = t;
  }
  function My(e, t, n) {
    Ai(), ra[ia++] = br, ra[ia++] = Sr, ra[ia++] = wi, wi = e;
    var a = br, r = Sr, i = Xs(a) - 1, u = a & ~(1 << i), o = n + 1, l = Xs(t) + i;
    if (l > 30) {
      var c = i - i % 5, f = (1 << c) - 1, y = (u & f).toString(32), m = u >> c, S = i - c, C = Xs(t) + S, D = o << S, V = D | m, re = y + r;
      br = 1 << C | V, Sr = re;
    } else {
      var Z = o << i, Ue = Z | u, Oe = r;
      br = 1 << l | Ue, Sr = Oe;
    }
  }
  function Kd(e) {
    Ai();
    var t = e.return;
    if (t !== null) {
      var n = 1, a = 0;
      Mi(e, n), My(e, n, a);
    }
  }
  function Xs(e) {
    return 32 - im(e);
  }
  function gx(e) {
    return 1 << Xs(e) - 1;
  }
  function Jd(e) {
    for (; e === Qs; )
      Qs = Tu[--Du], Tu[Du] = null, Ws = Tu[--Du], Tu[Du] = null;
    for (; e === wi; )
      wi = ra[--ia], ra[ia] = null, Sr = ra[--ia], ra[ia] = null, br = ra[--ia], ra[ia] = null;
  }
  function bx() {
    return Ai(), wi !== null ? {
      id: br,
      overflow: Sr
    } : null;
  }
  function Sx(e, t) {
    Ai(), ra[ia++] = br, ra[ia++] = Sr, ra[ia++] = wi, br = t.id, Sr = t.overflow, wi = e;
  }
  function Ai() {
    Xt() || d("Expected to be hydrating. This is a bug in React. Please file an issue.");
  }
  var Wt = null, ua = null, Ca = !1, Li = !1, Xr = null;
  function Ex() {
    Ca && d("We should not be hydrating here. This is a bug in React. Please file a bug.");
  }
  function Ay() {
    Li = !0;
  }
  function Cx() {
    return Li;
  }
  function Rx(e) {
    var t = e.stateNode.containerInfo;
    return ua = BD(t), Wt = e, Ca = !0, Xr = null, Li = !1, !0;
  }
  function Tx(e, t, n) {
    return ua = YD(t), Wt = e, Ca = !0, Xr = null, Li = !1, n !== null && Sx(e, n), !0;
  }
  function Ly(e, t) {
    switch (e.tag) {
      case P: {
        JD(e.stateNode.containerInfo, t);
        break;
      }
      case Q: {
        var n = (e.mode & Ae) !== ue;
        ex(
          e.type,
          e.memoizedProps,
          e.stateNode,
          t,
          // TODO: Delete this argument when we remove the legacy root API.
          n
        );
        break;
      }
      case q: {
        var a = e.memoizedState;
        a.dehydrated !== null && ZD(a.dehydrated, t);
        break;
      }
    }
  }
  function Uy(e, t) {
    Ly(e, t);
    var n = OO();
    n.stateNode = t, n.return = e;
    var a = e.deletions;
    a === null ? (e.deletions = [n], e.flags |= mi) : a.push(n);
  }
  function Zd(e, t) {
    {
      if (Li)
        return;
      switch (e.tag) {
        case P: {
          var n = e.stateNode.containerInfo;
          switch (t.tag) {
            case Q:
              var a = t.type;
              t.pendingProps, tx(n, a);
              break;
            case de:
              var r = t.pendingProps;
              nx(n, r);
              break;
          }
          break;
        }
        case Q: {
          var i = e.type, u = e.memoizedProps, o = e.stateNode;
          switch (t.tag) {
            case Q: {
              var l = t.type, c = t.pendingProps, f = (e.mode & Ae) !== ue;
              ix(
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
            case de: {
              var y = t.pendingProps, m = (e.mode & Ae) !== ue;
              ux(
                i,
                u,
                o,
                y,
                // TODO: Delete this argument when we remove the legacy root API.
                m
              );
              break;
            }
          }
          break;
        }
        case q: {
          var S = e.memoizedState, C = S.dehydrated;
          if (C !== null) switch (t.tag) {
            case Q:
              var D = t.type;
              t.pendingProps, ax(C, D);
              break;
            case de:
              var V = t.pendingProps;
              rx(C, V);
              break;
          }
          break;
        }
        default:
          return;
      }
    }
  }
  function ky(e, t) {
    t.flags = t.flags & ~cr | Rt, Zd(e, t);
  }
  function Ny(e, t) {
    switch (e.tag) {
      case Q: {
        var n = e.type;
        e.pendingProps;
        var a = ND(t, n);
        return a !== null ? (e.stateNode = a, Wt = e, ua = VD(a), !0) : !1;
      }
      case de: {
        var r = e.pendingProps, i = zD(t, r);
        return i !== null ? (e.stateNode = i, Wt = e, ua = null, !0) : !1;
      }
      case q: {
        var u = HD(t);
        if (u !== null) {
          var o = {
            dehydrated: u,
            treeContext: bx(),
            retryLane: Bn
          };
          e.memoizedState = o;
          var l = wO(u);
          return l.return = e, e.child = l, Wt = e, ua = null, !0;
        }
        return !1;
      }
      default:
        return !1;
    }
  }
  function ev(e) {
    return (e.mode & Ae) !== ue && (e.flags & qe) === se;
  }
  function tv(e) {
    throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
  }
  function nv(e) {
    if (Ca) {
      var t = ua;
      if (!t) {
        ev(e) && (Zd(Wt, e), tv()), ky(Wt, e), Ca = !1, Wt = e;
        return;
      }
      var n = t;
      if (!Ny(e, t)) {
        ev(e) && (Zd(Wt, e), tv()), t = Ko(n);
        var a = Wt;
        if (!t || !Ny(e, t)) {
          ky(Wt, e), Ca = !1, Wt = e;
          return;
        }
        Uy(a, n);
      }
    }
  }
  function Dx(e, t, n) {
    var a = e.stateNode, r = !Li, i = $D(a, e.type, e.memoizedProps, t, n, e, r);
    return e.updateQueue = i, i !== null;
  }
  function xx(e) {
    var t = e.stateNode, n = e.memoizedProps, a = PD(t, n, e);
    if (a) {
      var r = Wt;
      if (r !== null)
        switch (r.tag) {
          case P: {
            var i = r.stateNode.containerInfo, u = (r.mode & Ae) !== ue;
            ID(
              i,
              t,
              n,
              // TODO: Delete this argument when we remove the legacy root API.
              u
            );
            break;
          }
          case Q: {
            var o = r.type, l = r.memoizedProps, c = r.stateNode, f = (r.mode & Ae) !== ue;
            KD(
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
  function _x(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    GD(n, e);
  }
  function Ox(e) {
    var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
    if (!n)
      throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
    return qD(n);
  }
  function zy(e) {
    for (var t = e.return; t !== null && t.tag !== Q && t.tag !== P && t.tag !== q; )
      t = t.return;
    Wt = t;
  }
  function Is(e) {
    if (e !== Wt)
      return !1;
    if (!Ca)
      return zy(e), Ca = !0, !1;
    if (e.tag !== P && (e.tag !== Q || XD(e.type) && !Hd(e.type, e.memoizedProps))) {
      var t = ua;
      if (t)
        if (ev(e))
          Hy(e), tv();
        else
          for (; t; )
            Uy(e, t), t = Ko(t);
    }
    return zy(e), e.tag === q ? ua = Ox(e) : ua = Wt ? Ko(e.stateNode) : null, !0;
  }
  function wx() {
    return Ca && ua !== null;
  }
  function Hy(e) {
    for (var t = ua; t; )
      Ly(e, t), t = Ko(t);
  }
  function xu() {
    Wt = null, ua = null, Ca = !1, Li = !1;
  }
  function jy() {
    Xr !== null && (Ab(Xr), Xr = null);
  }
  function Xt() {
    return Ca;
  }
  function av(e) {
    Xr === null ? Xr = [e] : Xr.push(e);
  }
  var Mx = L.ReactCurrentBatchConfig, Ax = null;
  function Lx() {
    return Mx.transition;
  }
  var Ra = {
    recordUnsafeLifecycleWarnings: function(e, t) {
    },
    flushPendingUnsafeLifecycleWarnings: function() {
    },
    recordLegacyContextWarning: function(e, t) {
    },
    flushLegacyContextWarning: function() {
    },
    discardPendingWarnings: function() {
    }
  };
  {
    var Ux = function(e) {
      for (var t = null, n = e; n !== null; )
        n.mode & pt && (t = n), n = n.return;
      return t;
    }, Ui = function(e) {
      var t = [];
      return e.forEach(function(n) {
        t.push(n);
      }), t.sort().join(", ");
    }, tl = [], nl = [], al = [], rl = [], il = [], ul = [], ki = /* @__PURE__ */ new Set();
    Ra.recordUnsafeLifecycleWarnings = function(e, t) {
      ki.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
      t.componentWillMount.__suppressDeprecationWarning !== !0 && tl.push(e), e.mode & pt && typeof t.UNSAFE_componentWillMount == "function" && nl.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && al.push(e), e.mode & pt && typeof t.UNSAFE_componentWillReceiveProps == "function" && rl.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && il.push(e), e.mode & pt && typeof t.UNSAFE_componentWillUpdate == "function" && ul.push(e));
    }, Ra.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      tl.length > 0 && (tl.forEach(function(m) {
        e.add(be(m) || "Component"), ki.add(m.type);
      }), tl = []);
      var t = /* @__PURE__ */ new Set();
      nl.length > 0 && (nl.forEach(function(m) {
        t.add(be(m) || "Component"), ki.add(m.type);
      }), nl = []);
      var n = /* @__PURE__ */ new Set();
      al.length > 0 && (al.forEach(function(m) {
        n.add(be(m) || "Component"), ki.add(m.type);
      }), al = []);
      var a = /* @__PURE__ */ new Set();
      rl.length > 0 && (rl.forEach(function(m) {
        a.add(be(m) || "Component"), ki.add(m.type);
      }), rl = []);
      var r = /* @__PURE__ */ new Set();
      il.length > 0 && (il.forEach(function(m) {
        r.add(be(m) || "Component"), ki.add(m.type);
      }), il = []);
      var i = /* @__PURE__ */ new Set();
      if (ul.length > 0 && (ul.forEach(function(m) {
        i.add(be(m) || "Component"), ki.add(m.type);
      }), ul = []), t.size > 0) {
        var u = Ui(t);
        d(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, u);
      }
      if (a.size > 0) {
        var o = Ui(a);
        d(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, o);
      }
      if (i.size > 0) {
        var l = Ui(i);
        d(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, l);
      }
      if (e.size > 0) {
        var c = Ui(e);
        Se(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, c);
      }
      if (n.size > 0) {
        var f = Ui(n);
        Se(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, f);
      }
      if (r.size > 0) {
        var y = Ui(r);
        Se(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
      }
    };
    var Ks = /* @__PURE__ */ new Map(), Fy = /* @__PURE__ */ new Set();
    Ra.recordLegacyContextWarning = function(e, t) {
      var n = Ux(e);
      if (n === null) {
        d("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      if (!Fy.has(e.type)) {
        var a = Ks.get(n);
        (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], Ks.set(n, a)), a.push(e));
      }
    }, Ra.flushLegacyContextWarning = function() {
      Ks.forEach(function(e, t) {
        if (e.length !== 0) {
          var n = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(i) {
            a.add(be(i) || "Component"), Fy.add(i.type);
          });
          var r = Ui(a);
          try {
            ft(n), d(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, r);
          } finally {
            Bt();
          }
        }
      });
    }, Ra.discardPendingWarnings = function() {
      tl = [], nl = [], al = [], rl = [], il = [], ul = [], Ks = /* @__PURE__ */ new Map();
    };
  }
  var rv, iv, uv, ov, lv, Vy = function(e, t) {
  };
  rv = !1, iv = !1, uv = {}, ov = {}, lv = {}, Vy = function(e, t) {
    if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
      if (typeof e._store != "object")
        throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
      e._store.validated = !0;
      var n = be(t) || "Component";
      ov[n] || (ov[n] = !0, d('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
    }
  };
  function kx(e) {
    return e.prototype && e.prototype.isReactComponent;
  }
  function ol(e, t, n) {
    var a = n.ref;
    if (a !== null && typeof a != "function" && typeof a != "object") {
      if ((e.mode & pt || Un) && // We warn in ReactElement.js if owner and self are equal for string refs
      // because these cannot be automatically converted to an arrow function
      // using a codemod. Therefore, we don't have to warn about string refs again.
      !(n._owner && n._self && n._owner.stateNode !== n._self) && // Will already throw with "Function components cannot have string refs"
      !(n._owner && n._owner.tag !== N) && // Will already warn with "Function components cannot be given refs"
      !(typeof n.type == "function" && !kx(n.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
      n._owner) {
        var r = be(e) || "Component";
        uv[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, a), uv[r] = !0);
      }
      if (n._owner) {
        var i = n._owner, u;
        if (i) {
          var o = i;
          if (o.tag !== N)
            throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
          u = o.stateNode;
        }
        if (!u)
          throw new Error("Missing owner for string ref " + a + ". This error is likely caused by a bug in React. Please file an issue.");
        var l = u;
        Tn(a, "ref");
        var c = "" + a;
        if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === c)
          return t.ref;
        var f = function(y) {
          var m = l.refs;
          y === null ? delete m[c] : m[c] = y;
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
  function Js(e, t) {
    var n = Object.prototype.toString.call(t);
    throw new Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  }
  function Zs(e) {
    {
      var t = be(e) || "Component";
      if (lv[t])
        return;
      lv[t] = !0, d("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
  }
  function By(e) {
    var t = e._payload, n = e._init;
    return n(t);
  }
  function Yy(e) {
    function t(g, x) {
      if (e) {
        var b = g.deletions;
        b === null ? (g.deletions = [x], g.flags |= mi) : b.push(x);
      }
    }
    function n(g, x) {
      if (!e)
        return null;
      for (var b = x; b !== null; )
        t(g, b), b = b.sibling;
      return null;
    }
    function a(g, x) {
      for (var b = /* @__PURE__ */ new Map(), A = x; A !== null; )
        A.key !== null ? b.set(A.key, A) : b.set(A.index, A), A = A.sibling;
      return b;
    }
    function r(g, x) {
      var b = $i(g, x);
      return b.index = 0, b.sibling = null, b;
    }
    function i(g, x, b) {
      if (g.index = b, !e)
        return g.flags |= Gh, x;
      var A = g.alternate;
      if (A !== null) {
        var G = A.index;
        return G < x ? (g.flags |= Rt, x) : G;
      } else
        return g.flags |= Rt, x;
    }
    function u(g) {
      return e && g.alternate === null && (g.flags |= Rt), g;
    }
    function o(g, x, b, A) {
      if (x === null || x.tag !== de) {
        var G = ah(b, g.mode, A);
        return G.return = g, G;
      } else {
        var B = r(x, b);
        return B.return = g, B;
      }
    }
    function l(g, x, b, A) {
      var G = b.type;
      if (G === Ha)
        return f(g, x, b.props.children, A, b.key);
      if (x !== null && (x.elementType === G || // Keep this check inline so it only runs on the false path:
      Qb(x, b) || // Lazy types should reconcile their resolved type.
      // We need to do this after the Hot Reloading check above,
      // because hot reloading has different semantics than prod because
      // it doesn't resuspend. So we can't let the call below suspend.
      typeof G == "object" && G !== null && G.$$typeof === le && By(G) === x.type)) {
        var B = r(x, b.props);
        return B.ref = ol(g, x, b), B.return = g, B._debugSource = b._source, B._debugOwner = b._owner, B;
      }
      var fe = nh(b, g.mode, A);
      return fe.ref = ol(g, x, b), fe.return = g, fe;
    }
    function c(g, x, b, A) {
      if (x === null || x.tag !== ae || x.stateNode.containerInfo !== b.containerInfo || x.stateNode.implementation !== b.implementation) {
        var G = rh(b, g.mode, A);
        return G.return = g, G;
      } else {
        var B = r(x, b.children || []);
        return B.return = g, B;
      }
    }
    function f(g, x, b, A, G) {
      if (x === null || x.tag !== I) {
        var B = ui(b, g.mode, A, G);
        return B.return = g, B;
      } else {
        var fe = r(x, b);
        return fe.return = g, fe;
      }
    }
    function y(g, x, b) {
      if (typeof x == "string" && x !== "" || typeof x == "number") {
        var A = ah("" + x, g.mode, b);
        return A.return = g, A;
      }
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ma: {
            var G = nh(x, g.mode, b);
            return G.ref = ol(g, null, x), G.return = g, G;
          }
          case ya: {
            var B = rh(x, g.mode, b);
            return B.return = g, B;
          }
          case le: {
            var fe = x._payload, ge = x._init;
            return y(g, ge(fe), b);
          }
        }
        if (Ge(x) || Fn(x)) {
          var Ze = ui(x, g.mode, b, null);
          return Ze.return = g, Ze;
        }
        Js(g, x);
      }
      return typeof x == "function" && Zs(g), null;
    }
    function m(g, x, b, A) {
      var G = x !== null ? x.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number")
        return G !== null ? null : o(g, x, "" + b, A);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case ma:
            return b.key === G ? l(g, x, b, A) : null;
          case ya:
            return b.key === G ? c(g, x, b, A) : null;
          case le: {
            var B = b._payload, fe = b._init;
            return m(g, x, fe(B), A);
          }
        }
        if (Ge(b) || Fn(b))
          return G !== null ? null : f(g, x, b, A, null);
        Js(g, b);
      }
      return typeof b == "function" && Zs(g), null;
    }
    function S(g, x, b, A, G) {
      if (typeof A == "string" && A !== "" || typeof A == "number") {
        var B = g.get(b) || null;
        return o(x, B, "" + A, G);
      }
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case ma: {
            var fe = g.get(A.key === null ? b : A.key) || null;
            return l(x, fe, A, G);
          }
          case ya: {
            var ge = g.get(A.key === null ? b : A.key) || null;
            return c(x, ge, A, G);
          }
          case le:
            var Ze = A._payload, Be = A._init;
            return S(g, x, b, Be(Ze), G);
        }
        if (Ge(A) || Fn(A)) {
          var St = g.get(b) || null;
          return f(x, St, A, G, null);
        }
        Js(x, A);
      }
      return typeof A == "function" && Zs(x), null;
    }
    function C(g, x, b) {
      {
        if (typeof g != "object" || g === null)
          return x;
        switch (g.$$typeof) {
          case ma:
          case ya:
            Vy(g, b);
            var A = g.key;
            if (typeof A != "string")
              break;
            if (x === null) {
              x = /* @__PURE__ */ new Set(), x.add(A);
              break;
            }
            if (!x.has(A)) {
              x.add(A);
              break;
            }
            d("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", A);
            break;
          case le:
            var G = g._payload, B = g._init;
            C(B(G), x, b);
            break;
        }
      }
      return x;
    }
    function D(g, x, b, A) {
      for (var G = null, B = 0; B < b.length; B++) {
        var fe = b[B];
        G = C(fe, G, g);
      }
      for (var ge = null, Ze = null, Be = x, St = 0, Ye = 0, ht = null; Be !== null && Ye < b.length; Ye++) {
        Be.index > Ye ? (ht = Be, Be = null) : ht = Be.sibling;
        var dn = m(g, Be, b[Ye], A);
        if (dn === null) {
          Be === null && (Be = ht);
          break;
        }
        e && Be && dn.alternate === null && t(g, Be), St = i(dn, St, Ye), Ze === null ? ge = dn : Ze.sibling = dn, Ze = dn, Be = ht;
      }
      if (Ye === b.length) {
        if (n(g, Be), Xt()) {
          var nn = Ye;
          Mi(g, nn);
        }
        return ge;
      }
      if (Be === null) {
        for (; Ye < b.length; Ye++) {
          var Wn = y(g, b[Ye], A);
          Wn !== null && (St = i(Wn, St, Ye), Ze === null ? ge = Wn : Ze.sibling = Wn, Ze = Wn);
        }
        if (Xt()) {
          var Sn = Ye;
          Mi(g, Sn);
        }
        return ge;
      }
      for (var En = a(g, Be); Ye < b.length; Ye++) {
        var vn = S(En, g, Ye, b[Ye], A);
        vn !== null && (e && vn.alternate !== null && En.delete(vn.key === null ? Ye : vn.key), St = i(vn, St, Ye), Ze === null ? ge = vn : Ze.sibling = vn, Ze = vn);
      }
      if (e && En.forEach(function(Gu) {
        return t(g, Gu);
      }), Xt()) {
        var _r = Ye;
        Mi(g, _r);
      }
      return ge;
    }
    function V(g, x, b, A) {
      var G = Fn(b);
      if (typeof G != "function")
        throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
      {
        typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
        b[Symbol.toStringTag] === "Generator" && (iv || d("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), iv = !0), b.entries === G && (rv || d("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), rv = !0);
        var B = G.call(b);
        if (B)
          for (var fe = null, ge = B.next(); !ge.done; ge = B.next()) {
            var Ze = ge.value;
            fe = C(Ze, fe, g);
          }
      }
      var Be = G.call(b);
      if (Be == null)
        throw new Error("An iterable object provided no iterator.");
      for (var St = null, Ye = null, ht = x, dn = 0, nn = 0, Wn = null, Sn = Be.next(); ht !== null && !Sn.done; nn++, Sn = Be.next()) {
        ht.index > nn ? (Wn = ht, ht = null) : Wn = ht.sibling;
        var En = m(g, ht, Sn.value, A);
        if (En === null) {
          ht === null && (ht = Wn);
          break;
        }
        e && ht && En.alternate === null && t(g, ht), dn = i(En, dn, nn), Ye === null ? St = En : Ye.sibling = En, Ye = En, ht = Wn;
      }
      if (Sn.done) {
        if (n(g, ht), Xt()) {
          var vn = nn;
          Mi(g, vn);
        }
        return St;
      }
      if (ht === null) {
        for (; !Sn.done; nn++, Sn = Be.next()) {
          var _r = y(g, Sn.value, A);
          _r !== null && (dn = i(_r, dn, nn), Ye === null ? St = _r : Ye.sibling = _r, Ye = _r);
        }
        if (Xt()) {
          var Gu = nn;
          Mi(g, Gu);
        }
        return St;
      }
      for (var Fl = a(g, ht); !Sn.done; nn++, Sn = Be.next()) {
        var Ja = S(Fl, g, nn, Sn.value, A);
        Ja !== null && (e && Ja.alternate !== null && Fl.delete(Ja.key === null ? nn : Ja.key), dn = i(Ja, dn, nn), Ye === null ? St = Ja : Ye.sibling = Ja, Ye = Ja);
      }
      if (e && Fl.forEach(function(uw) {
        return t(g, uw);
      }), Xt()) {
        var iw = nn;
        Mi(g, iw);
      }
      return St;
    }
    function re(g, x, b, A) {
      if (x !== null && x.tag === de) {
        n(g, x.sibling);
        var G = r(x, b);
        return G.return = g, G;
      }
      n(g, x);
      var B = ah(b, g.mode, A);
      return B.return = g, B;
    }
    function Z(g, x, b, A) {
      for (var G = b.key, B = x; B !== null; ) {
        if (B.key === G) {
          var fe = b.type;
          if (fe === Ha) {
            if (B.tag === I) {
              n(g, B.sibling);
              var ge = r(B, b.props.children);
              return ge.return = g, ge._debugSource = b._source, ge._debugOwner = b._owner, ge;
            }
          } else if (B.elementType === fe || // Keep this check inline so it only runs on the false path:
          Qb(B, b) || // Lazy types should reconcile their resolved type.
          // We need to do this after the Hot Reloading check above,
          // because hot reloading has different semantics than prod because
          // it doesn't resuspend. So we can't let the call below suspend.
          typeof fe == "object" && fe !== null && fe.$$typeof === le && By(fe) === B.type) {
            n(g, B.sibling);
            var Ze = r(B, b.props);
            return Ze.ref = ol(g, B, b), Ze.return = g, Ze._debugSource = b._source, Ze._debugOwner = b._owner, Ze;
          }
          n(g, B);
          break;
        } else
          t(g, B);
        B = B.sibling;
      }
      if (b.type === Ha) {
        var Be = ui(b.props.children, g.mode, A, b.key);
        return Be.return = g, Be;
      } else {
        var St = nh(b, g.mode, A);
        return St.ref = ol(g, x, b), St.return = g, St;
      }
    }
    function Ue(g, x, b, A) {
      for (var G = b.key, B = x; B !== null; ) {
        if (B.key === G)
          if (B.tag === ae && B.stateNode.containerInfo === b.containerInfo && B.stateNode.implementation === b.implementation) {
            n(g, B.sibling);
            var fe = r(B, b.children || []);
            return fe.return = g, fe;
          } else {
            n(g, B);
            break;
          }
        else
          t(g, B);
        B = B.sibling;
      }
      var ge = rh(b, g.mode, A);
      return ge.return = g, ge;
    }
    function Oe(g, x, b, A) {
      var G = typeof b == "object" && b !== null && b.type === Ha && b.key === null;
      if (G && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case ma:
            return u(Z(g, x, b, A));
          case ya:
            return u(Ue(g, x, b, A));
          case le:
            var B = b._payload, fe = b._init;
            return Oe(g, x, fe(B), A);
        }
        if (Ge(b))
          return D(g, x, b, A);
        if (Fn(b))
          return V(g, x, b, A);
        Js(g, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" ? u(re(g, x, "" + b, A)) : (typeof b == "function" && Zs(g), n(g, x));
    }
    return Oe;
  }
  var _u = Yy(!0), $y = Yy(!1);
  function Nx(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error("Resuming work not yet implemented.");
    if (t.child !== null) {
      var n = t.child, a = $i(n, n.pendingProps);
      for (t.child = a, a.return = t; n.sibling !== null; )
        n = n.sibling, a = a.sibling = $i(n, n.pendingProps), a.return = t;
      a.sibling = null;
    }
  }
  function zx(e, t) {
    for (var n = e.child; n !== null; )
      RO(n, t), n = n.sibling;
  }
  var sv = qr(null), cv;
  cv = {};
  var ec = null, Ou = null, fv = null, tc = !1;
  function nc() {
    ec = null, Ou = null, fv = null, tc = !1;
  }
  function Py() {
    tc = !0;
  }
  function Gy() {
    tc = !1;
  }
  function qy(e, t, n) {
    cn(sv, t._currentValue, e), t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== cv && d("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = cv;
  }
  function dv(e, t) {
    var n = sv.current;
    sn(sv, t), e._currentValue = n;
  }
  function vv(e, t, n) {
    for (var a = e; a !== null; ) {
      var r = a.alternate;
      if (du(a.childLanes, t) ? r !== null && !du(r.childLanes, t) && (r.childLanes = Re(r.childLanes, t)) : (a.childLanes = Re(a.childLanes, t), r !== null && (r.childLanes = Re(r.childLanes, t))), a === n)
        break;
      a = a.return;
    }
    a !== n && d("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
  }
  function Hx(e, t, n) {
    jx(e, t, n);
  }
  function jx(e, t, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var r = void 0, i = a.dependencies;
      if (i !== null) {
        r = a.child;
        for (var u = i.firstContext; u !== null; ) {
          if (u.context === t) {
            if (a.tag === N) {
              var o = Do(n), l = Er(it, o);
              l.tag = rc;
              var c = a.updateQueue;
              if (c !== null) {
                var f = c.shared, y = f.pending;
                y === null ? l.next = l : (l.next = y.next, y.next = l), f.pending = l;
              }
            }
            a.lanes = Re(a.lanes, n);
            var m = a.alternate;
            m !== null && (m.lanes = Re(m.lanes, n)), vv(a.return, n, e), i.lanes = Re(i.lanes, n);
            break;
          }
          u = u.next;
        }
      } else if (a.tag === H)
        r = a.type === e.type ? null : a.child;
      else if (a.tag === ze) {
        var S = a.return;
        if (S === null)
          throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
        S.lanes = Re(S.lanes, n);
        var C = S.alternate;
        C !== null && (C.lanes = Re(C.lanes, n)), vv(S, n, e), r = a.sibling;
      } else
        r = a.child;
      if (r !== null)
        r.return = a;
      else
        for (r = a; r !== null; ) {
          if (r === e) {
            r = null;
            break;
          }
          var D = r.sibling;
          if (D !== null) {
            D.return = r.return, r = D;
            break;
          }
          r = r.return;
        }
      a = r;
    }
  }
  function wu(e, t) {
    ec = e, Ou = null, fv = null;
    var n = e.dependencies;
    if (n !== null) {
      var a = n.firstContext;
      a !== null && (Yn(n.lanes, t) && Cl(), n.firstContext = null);
    }
  }
  function Tt(e) {
    tc && d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    var t = e._currentValue;
    if (fv !== e) {
      var n = {
        context: e,
        memoizedValue: t,
        next: null
      };
      if (Ou === null) {
        if (ec === null)
          throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        Ou = n, ec.dependencies = {
          lanes: O,
          firstContext: n
        };
      } else
        Ou = Ou.next = n;
    }
    return t;
  }
  var Ni = null;
  function pv(e) {
    Ni === null ? Ni = [e] : Ni.push(e);
  }
  function Fx() {
    if (Ni !== null) {
      for (var e = 0; e < Ni.length; e++) {
        var t = Ni[e], n = t.interleaved;
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
      Ni = null;
    }
  }
  function Qy(e, t, n, a) {
    var r = t.interleaved;
    return r === null ? (n.next = n, pv(t)) : (n.next = r.next, r.next = n), t.interleaved = n, ac(e, a);
  }
  function Vx(e, t, n, a) {
    var r = t.interleaved;
    r === null ? (n.next = n, pv(t)) : (n.next = r.next, r.next = n), t.interleaved = n;
  }
  function Bx(e, t, n, a) {
    var r = t.interleaved;
    return r === null ? (n.next = n, pv(t)) : (n.next = r.next, r.next = n), t.interleaved = n, ac(e, a);
  }
  function wn(e, t) {
    return ac(e, t);
  }
  var Yx = ac;
  function ac(e, t) {
    e.lanes = Re(e.lanes, t);
    var n = e.alternate;
    n !== null && (n.lanes = Re(n.lanes, t)), n === null && (e.flags & (Rt | cr)) !== se && $b(e);
    for (var a = e, r = e.return; r !== null; )
      r.childLanes = Re(r.childLanes, t), n = r.alternate, n !== null ? n.childLanes = Re(n.childLanes, t) : (r.flags & (Rt | cr)) !== se && $b(e), a = r, r = r.return;
    if (a.tag === P) {
      var i = a.stateNode;
      return i;
    } else
      return null;
  }
  var Wy = 0, Xy = 1, rc = 2, hv = 3, ic = !1, mv, uc;
  mv = !1, uc = null;
  function yv(e) {
    var t = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: O
      },
      effects: null
    };
    e.updateQueue = t;
  }
  function Iy(e, t) {
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
  function Er(e, t) {
    var n = {
      eventTime: e,
      lane: t,
      tag: Wy,
      payload: null,
      callback: null,
      next: null
    };
    return n;
  }
  function Ir(e, t, n) {
    var a = e.updateQueue;
    if (a === null)
      return null;
    var r = a.shared;
    if (uc === r && !mv && (d("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), mv = !0), V0()) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Yx(e, n);
    } else
      return Bx(e, r, t, n);
  }
  function oc(e, t, n) {
    var a = t.updateQueue;
    if (a !== null) {
      var r = a.shared;
      if (sm(n)) {
        var i = r.lanes;
        i = fm(i, e.pendingLanes);
        var u = Re(i, n);
        r.lanes = u, sd(e, u);
      }
    }
  }
  function gv(e, t) {
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
  function $x(e, t, n, a, r, i) {
    switch (n.tag) {
      case Xy: {
        var u = n.payload;
        if (typeof u == "function") {
          Py();
          var o = u.call(i, a, r);
          {
            if (e.mode & pt) {
              $t(!0);
              try {
                u.call(i, a, r);
              } finally {
                $t(!1);
              }
            }
            Gy();
          }
          return o;
        }
        return u;
      }
      case hv:
        e.flags = e.flags & ~mn | qe;
      case Wy: {
        var l = n.payload, c;
        if (typeof l == "function") {
          Py(), c = l.call(i, a, r);
          {
            if (e.mode & pt) {
              $t(!0);
              try {
                l.call(i, a, r);
              } finally {
                $t(!1);
              }
            }
            Gy();
          }
        } else
          c = l;
        return c == null ? a : _e({}, a, c);
      }
      case rc:
        return ic = !0, a;
    }
    return a;
  }
  function lc(e, t, n, a) {
    var r = e.updateQueue;
    ic = !1, uc = r.shared;
    var i = r.firstBaseUpdate, u = r.lastBaseUpdate, o = r.shared.pending;
    if (o !== null) {
      r.shared.pending = null;
      var l = o, c = l.next;
      l.next = null, u === null ? i = c : u.next = c, u = l;
      var f = e.alternate;
      if (f !== null) {
        var y = f.updateQueue, m = y.lastBaseUpdate;
        m !== u && (m === null ? y.firstBaseUpdate = c : m.next = c, y.lastBaseUpdate = l);
      }
    }
    if (i !== null) {
      var S = r.baseState, C = O, D = null, V = null, re = null, Z = i;
      do {
        var Ue = Z.lane, Oe = Z.eventTime;
        if (du(a, Ue)) {
          if (re !== null) {
            var x = {
              eventTime: Oe,
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: Pt,
              tag: Z.tag,
              payload: Z.payload,
              callback: Z.callback,
              next: null
            };
            re = re.next = x;
          }
          S = $x(e, r, Z, S, t, n);
          var b = Z.callback;
          if (b !== null && // If the update was already committed, we should not queue its
          // callback again.
          Z.lane !== Pt) {
            e.flags |= Mf;
            var A = r.effects;
            A === null ? r.effects = [Z] : A.push(Z);
          }
        } else {
          var g = {
            eventTime: Oe,
            lane: Ue,
            tag: Z.tag,
            payload: Z.payload,
            callback: Z.callback,
            next: null
          };
          re === null ? (V = re = g, D = S) : re = re.next = g, C = Re(C, Ue);
        }
        if (Z = Z.next, Z === null) {
          if (o = r.shared.pending, o === null)
            break;
          var G = o, B = G.next;
          G.next = null, Z = B, r.lastBaseUpdate = G, r.shared.pending = null;
        }
      } while (!0);
      re === null && (D = S), r.baseState = D, r.firstBaseUpdate = V, r.lastBaseUpdate = re;
      var fe = r.shared.interleaved;
      if (fe !== null) {
        var ge = fe;
        do
          C = Re(C, ge.lane), ge = ge.next;
        while (ge !== fe);
      } else i === null && (r.shared.lanes = O);
      kl(C), e.lanes = C, e.memoizedState = S;
    }
    uc = null;
  }
  function Px(e, t) {
    if (typeof e != "function")
      throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
    e.call(t);
  }
  function Ky() {
    ic = !1;
  }
  function sc() {
    return ic;
  }
  function Jy(e, t, n) {
    var a = t.effects;
    if (t.effects = null, a !== null)
      for (var r = 0; r < a.length; r++) {
        var i = a[r], u = i.callback;
        u !== null && (i.callback = null, Px(u, n));
      }
  }
  var ll = {}, Kr = qr(ll), sl = qr(ll), cc = qr(ll);
  function fc(e) {
    if (e === ll)
      throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
    return e;
  }
  function Zy() {
    var e = fc(cc.current);
    return e;
  }
  function bv(e, t) {
    cn(cc, t, e), cn(sl, e, e), cn(Kr, ll, e);
    var n = oD(t);
    sn(Kr, e), cn(Kr, n, e);
  }
  function Mu(e) {
    sn(Kr, e), sn(sl, e), sn(cc, e);
  }
  function Sv() {
    var e = fc(Kr.current);
    return e;
  }
  function eg(e) {
    fc(cc.current);
    var t = fc(Kr.current), n = lD(t, e.type);
    t !== n && (cn(sl, e, e), cn(Kr, n, e));
  }
  function Ev(e) {
    sl.current === e && (sn(Kr, e), sn(sl, e));
  }
  var Gx = 0, tg = 1, ng = 1, cl = 2, Ta = qr(Gx);
  function Cv(e, t) {
    return (e & t) !== 0;
  }
  function Au(e) {
    return e & tg;
  }
  function Rv(e, t) {
    return e & tg | t;
  }
  function qx(e, t) {
    return e | t;
  }
  function Jr(e, t) {
    cn(Ta, t, e);
  }
  function Lu(e) {
    sn(Ta, e);
  }
  function Qx(e, t) {
    var n = e.memoizedState;
    return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
  }
  function dc(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === q) {
        var n = t.memoizedState;
        if (n !== null) {
          var a = n.dehydrated;
          if (a === null || by(a) || Bd(a))
            return t;
        }
      } else if (t.tag === Ce && // revealOrder undefined can't be trusted because it don't
      // keep track of whether it suspended or not.
      t.memoizedProps.revealOrder !== void 0) {
        var r = (t.flags & qe) !== se;
        if (r)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e)
        return null;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Mn = (
    /*   */
    0
  ), wt = (
    /* */
    1
  ), Ga = (
    /*  */
    2
  ), Mt = (
    /*    */
    4
  ), It = (
    /*   */
    8
  ), Tv = [];
  function Dv() {
    for (var e = 0; e < Tv.length; e++) {
      var t = Tv[e];
      t._workInProgressVersionPrimary = null;
    }
    Tv.length = 0;
  }
  function Wx(e, t) {
    var n = t._getVersion, a = n(t._source);
    e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, a] : e.mutableSourceEagerHydrationData.push(t, a);
  }
  var $ = L.ReactCurrentDispatcher, fl = L.ReactCurrentBatchConfig, xv, Uu;
  xv = /* @__PURE__ */ new Set();
  var zi = O, Je = null, At = null, Lt = null, vc = !1, dl = !1, vl = 0, Xx = 0, Ix = 25, _ = null, oa = null, Zr = -1, _v = !1;
  function Qe() {
    {
      var e = _;
      oa === null ? oa = [e] : oa.push(e);
    }
  }
  function z() {
    {
      var e = _;
      oa !== null && (Zr++, oa[Zr] !== e && Kx(e));
    }
  }
  function ku(e) {
    e != null && !Ge(e) && d("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", _, typeof e);
  }
  function Kx(e) {
    {
      var t = be(Je);
      if (!xv.has(t) && (xv.add(t), oa !== null)) {
        for (var n = "", a = 30, r = 0; r <= Zr; r++) {
          for (var i = oa[r], u = r === Zr ? e : i, o = r + 1 + ". " + i; o.length < a; )
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
  function fn() {
    throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
  }
  function Ov(e, t) {
    if (_v)
      return !1;
    if (t === null)
      return d("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", _), !1;
    e.length !== t.length && d(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, _, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Gn(e[n], t[n]))
        return !1;
    return !0;
  }
  function Nu(e, t, n, a, r, i) {
    zi = i, Je = t, oa = e !== null ? e._debugHookTypes : null, Zr = -1, _v = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = O, e !== null && e.memoizedState !== null ? $.current = Tg : oa !== null ? $.current = Rg : $.current = Cg;
    var u = n(a, r);
    if (dl) {
      var o = 0;
      do {
        if (dl = !1, vl = 0, o >= Ix)
          throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        o += 1, _v = !1, At = null, Lt = null, t.updateQueue = null, Zr = -1, $.current = Dg, u = n(a, r);
      } while (dl);
    }
    $.current = xc, t._debugHookTypes = oa;
    var l = At !== null && At.next !== null;
    if (zi = O, Je = null, At = null, Lt = null, _ = null, oa = null, Zr = -1, e !== null && (e.flags & dr) !== (t.flags & dr) && // Disable this warning in legacy mode, because legacy Suspense is weird
    // and creates false positives. To make this work in legacy mode, we'd
    // need to mark fibers that commit in an incomplete state, somehow. For
    // now I'll disable the warning that most of the bugs that would trigger
    // it are either exclusive to concurrent mode or exist in both.
    (e.mode & Ae) !== ue && d("Internal React error: Expected static flag was missing. Please notify the React team."), vc = !1, l)
      throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
    return u;
  }
  function zu() {
    var e = vl !== 0;
    return vl = 0, e;
  }
  function ag(e, t, n) {
    t.updateQueue = e.updateQueue, (t.mode & Ba) !== ue ? t.flags &= ~(os | fr | ga | Ne) : t.flags &= ~(ga | Ne), e.lanes = ps(e.lanes, n);
  }
  function rg() {
    if ($.current = xc, vc) {
      for (var e = Je.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      vc = !1;
    }
    zi = O, Je = null, At = null, Lt = null, oa = null, Zr = -1, _ = null, yg = !1, dl = !1, vl = 0;
  }
  function qa() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Lt === null ? Je.memoizedState = Lt = e : Lt = Lt.next = e, Lt;
  }
  function la() {
    var e;
    if (At === null) {
      var t = Je.alternate;
      t !== null ? e = t.memoizedState : e = null;
    } else
      e = At.next;
    var n;
    if (Lt === null ? n = Je.memoizedState : n = Lt.next, n !== null)
      Lt = n, n = Lt.next, At = e;
    else {
      if (e === null)
        throw new Error("Rendered more hooks than during the previous render.");
      At = e;
      var a = {
        memoizedState: At.memoizedState,
        baseState: At.baseState,
        baseQueue: At.baseQueue,
        queue: At.queue,
        next: null
      };
      Lt === null ? Je.memoizedState = Lt = a : Lt = Lt.next = a;
    }
    return Lt;
  }
  function ig() {
    return {
      lastEffect: null,
      stores: null
    };
  }
  function wv(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Mv(e, t, n) {
    var a = qa(), r;
    n !== void 0 ? r = n(t) : r = t, a.memoizedState = a.baseState = r;
    var i = {
      pending: null,
      interleaved: null,
      lanes: O,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: r
    };
    a.queue = i;
    var u = i.dispatch = t_.bind(null, Je, i);
    return [a.memoizedState, u];
  }
  function Av(e, t, n) {
    var a = la(), r = a.queue;
    if (r === null)
      throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    r.lastRenderedReducer = e;
    var i = At, u = i.baseQueue, o = r.pending;
    if (o !== null) {
      if (u !== null) {
        var l = u.next, c = o.next;
        u.next = c, o.next = l;
      }
      i.baseQueue !== u && d("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), i.baseQueue = u = o, r.pending = null;
    }
    if (u !== null) {
      var f = u.next, y = i.baseState, m = null, S = null, C = null, D = f;
      do {
        var V = D.lane;
        if (du(zi, V)) {
          if (C !== null) {
            var Z = {
              // This update is going to be committed so we never want uncommit
              // it. Using NoLane works because 0 is a subset of all bitmasks, so
              // this will never be skipped by the check above.
              lane: Pt,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            };
            C = C.next = Z;
          }
          if (D.hasEagerState)
            y = D.eagerState;
          else {
            var Ue = D.action;
            y = e(y, Ue);
          }
        } else {
          var re = {
            lane: V,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          };
          C === null ? (S = C = re, m = y) : C = C.next = re, Je.lanes = Re(Je.lanes, V), kl(V);
        }
        D = D.next;
      } while (D !== null && D !== f);
      C === null ? m = y : C.next = S, Gn(y, a.memoizedState) || Cl(), a.memoizedState = y, a.baseState = m, a.baseQueue = C, r.lastRenderedState = y;
    }
    var Oe = r.interleaved;
    if (Oe !== null) {
      var g = Oe;
      do {
        var x = g.lane;
        Je.lanes = Re(Je.lanes, x), kl(x), g = g.next;
      } while (g !== Oe);
    } else u === null && (r.lanes = O);
    var b = r.dispatch;
    return [a.memoizedState, b];
  }
  function Lv(e, t, n) {
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
      Gn(o, a.memoizedState) || Cl(), a.memoizedState = o, a.baseQueue === null && (a.baseState = o), r.lastRenderedState = o;
    }
    return [o, i];
  }
  function Qw(e, t, n) {
  }
  function Ww(e, t, n) {
  }
  function Uv(e, t, n) {
    var a = Je, r = qa(), i, u = Xt();
    if (u) {
      if (n === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      i = n(), Uu || i !== n() && (d("The result of getServerSnapshot should be cached to avoid an infinite loop"), Uu = !0);
    } else {
      if (i = t(), !Uu) {
        var o = t();
        Gn(i, o) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), Uu = !0);
      }
      var l = Gc();
      if (l === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      vs(l, zi) || ug(a, t, i);
    }
    r.memoizedState = i;
    var c = {
      value: i,
      getSnapshot: t
    };
    return r.queue = c, gc(lg.bind(null, a, c, e), [e]), a.flags |= ga, pl(wt | It, og.bind(null, a, c, i, t), void 0, null), i;
  }
  function pc(e, t, n) {
    var a = Je, r = la(), i = t();
    if (!Uu) {
      var u = t();
      Gn(i, u) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), Uu = !0);
    }
    var o = r.memoizedState, l = !Gn(o, i);
    l && (r.memoizedState = i, Cl());
    var c = r.queue;
    if (ml(lg.bind(null, a, c, e), [e]), c.getSnapshot !== t || l || // Check if the susbcribe function changed. We can save some memory by
    // checking whether we scheduled a subscription effect above.
    Lt !== null && Lt.memoizedState.tag & wt) {
      a.flags |= ga, pl(wt | It, og.bind(null, a, c, i, t), void 0, null);
      var f = Gc();
      if (f === null)
        throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      vs(f, zi) || ug(a, t, i);
    }
    return i;
  }
  function ug(e, t, n) {
    e.flags |= us;
    var a = {
      getSnapshot: t,
      value: n
    }, r = Je.updateQueue;
    if (r === null)
      r = ig(), Je.updateQueue = r, r.stores = [a];
    else {
      var i = r.stores;
      i === null ? r.stores = [a] : i.push(a);
    }
  }
  function og(e, t, n, a) {
    t.value = n, t.getSnapshot = a, sg(t) && cg(e);
  }
  function lg(e, t, n) {
    var a = function() {
      sg(t) && cg(e);
    };
    return n(a);
  }
  function sg(e) {
    var t = e.getSnapshot, n = e.value;
    try {
      var a = t();
      return !Gn(n, a);
    } catch {
      return !0;
    }
  }
  function cg(e) {
    var t = wn(e, he);
    t !== null && zt(t, e, he, it);
  }
  function hc(e) {
    var t = qa();
    typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
    var n = {
      pending: null,
      interleaved: null,
      lanes: O,
      dispatch: null,
      lastRenderedReducer: wv,
      lastRenderedState: e
    };
    t.queue = n;
    var a = n.dispatch = n_.bind(null, Je, n);
    return [t.memoizedState, a];
  }
  function kv(e) {
    return Av(wv);
  }
  function Nv(e) {
    return Lv(wv);
  }
  function pl(e, t, n, a) {
    var r = {
      tag: e,
      create: t,
      destroy: n,
      deps: a,
      // Circular
      next: null
    }, i = Je.updateQueue;
    if (i === null)
      i = ig(), Je.updateQueue = i, i.lastEffect = r.next = r;
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
  function zv(e) {
    var t = qa();
    {
      var n = {
        current: e
      };
      return t.memoizedState = n, n;
    }
  }
  function mc(e) {
    var t = la();
    return t.memoizedState;
  }
  function hl(e, t, n, a) {
    var r = qa(), i = a === void 0 ? null : a;
    Je.flags |= e, r.memoizedState = pl(wt | t, n, void 0, i);
  }
  function yc(e, t, n, a) {
    var r = la(), i = a === void 0 ? null : a, u = void 0;
    if (At !== null) {
      var o = At.memoizedState;
      if (u = o.destroy, i !== null) {
        var l = o.deps;
        if (Ov(i, l)) {
          r.memoizedState = pl(t, n, u, i);
          return;
        }
      }
    }
    Je.flags |= e, r.memoizedState = pl(wt | t, n, u, i);
  }
  function gc(e, t) {
    return (Je.mode & Ba) !== ue ? hl(os | ga | Uf, It, e, t) : hl(ga | Uf, It, e, t);
  }
  function ml(e, t) {
    return yc(ga, It, e, t);
  }
  function Hv(e, t) {
    return hl(Ne, Ga, e, t);
  }
  function bc(e, t) {
    return yc(Ne, Ga, e, t);
  }
  function jv(e, t) {
    var n = Ne;
    return n |= bi, (Je.mode & Ba) !== ue && (n |= fr), hl(n, Mt, e, t);
  }
  function Sc(e, t) {
    return yc(Ne, Mt, e, t);
  }
  function fg(e, t) {
    if (typeof t == "function") {
      var n = t, a = e();
      return n(a), function() {
        n(null);
      };
    } else if (t != null) {
      var r = t;
      r.hasOwnProperty("current") || d("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(r).join(", ") + "}");
      var i = e();
      return r.current = i, function() {
        r.current = null;
      };
    }
  }
  function Fv(e, t, n) {
    typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var a = n != null ? n.concat([e]) : null, r = Ne;
    return r |= bi, (Je.mode & Ba) !== ue && (r |= fr), hl(r, Mt, fg.bind(null, t, e), a);
  }
  function Ec(e, t, n) {
    typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
    var a = n != null ? n.concat([e]) : null;
    return yc(Ne, Mt, fg.bind(null, t, e), a);
  }
  function Jx(e, t) {
  }
  var Cc = Jx;
  function Vv(e, t) {
    var n = qa(), a = t === void 0 ? null : t;
    return n.memoizedState = [e, a], e;
  }
  function Rc(e, t) {
    var n = la(), a = t === void 0 ? null : t, r = n.memoizedState;
    if (r !== null && a !== null) {
      var i = r[1];
      if (Ov(a, i))
        return r[0];
    }
    return n.memoizedState = [e, a], e;
  }
  function Bv(e, t) {
    var n = qa(), a = t === void 0 ? null : t, r = e();
    return n.memoizedState = [r, a], r;
  }
  function Tc(e, t) {
    var n = la(), a = t === void 0 ? null : t, r = n.memoizedState;
    if (r !== null && a !== null) {
      var i = r[1];
      if (Ov(a, i))
        return r[0];
    }
    var u = e();
    return n.memoizedState = [u, a], u;
  }
  function Yv(e) {
    var t = qa();
    return t.memoizedState = e, e;
  }
  function dg(e) {
    var t = la(), n = At, a = n.memoizedState;
    return pg(t, a, e);
  }
  function vg(e) {
    var t = la();
    if (At === null)
      return t.memoizedState = e, e;
    var n = At.memoizedState;
    return pg(t, n, e);
  }
  function pg(e, t, n) {
    var a = !HC(zi);
    if (a) {
      if (!Gn(n, t)) {
        var r = cm();
        Je.lanes = Re(Je.lanes, r), kl(r), e.baseState = !0;
      }
      return t;
    } else
      return e.baseState && (e.baseState = !1, Cl()), e.memoizedState = n, n;
  }
  function Zx(e, t, n) {
    var a = Sa();
    Gt(qC(a, pr)), e(!0);
    var r = fl.transition;
    fl.transition = {};
    var i = fl.transition;
    fl.transition._updatedFibers = /* @__PURE__ */ new Set();
    try {
      e(!1), t();
    } finally {
      if (Gt(a), fl.transition = r, r === null && i._updatedFibers) {
        var u = i._updatedFibers.size;
        u > 10 && Se("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), i._updatedFibers.clear();
      }
    }
  }
  function $v() {
    var e = hc(!1), t = e[0], n = e[1], a = Zx.bind(null, n), r = qa();
    return r.memoizedState = a, [t, a];
  }
  function hg() {
    var e = kv(), t = e[0], n = la(), a = n.memoizedState;
    return [t, a];
  }
  function mg() {
    var e = Nv(), t = e[0], n = la(), a = n.memoizedState;
    return [t, a];
  }
  var yg = !1;
  function e_() {
    return yg;
  }
  function Pv() {
    var e = qa(), t = Gc(), n = t.identifierPrefix, a;
    if (Xt()) {
      var r = yx();
      a = ":" + n + "R" + r;
      var i = vl++;
      i > 0 && (a += "H" + i.toString(32)), a += ":";
    } else {
      var u = Xx++;
      a = ":" + n + "r" + u.toString(32) + ":";
    }
    return e.memoizedState = a, a;
  }
  function Dc() {
    var e = la(), t = e.memoizedState;
    return t;
  }
  function t_(e, t, n) {
    typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var a = ri(e), r = {
      lane: a,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (gg(e))
      bg(t, r);
    else {
      var i = Qy(e, t, r, a);
      if (i !== null) {
        var u = bn();
        zt(i, e, a, u), Sg(i, t, a);
      }
    }
    Eg(e, a);
  }
  function n_(e, t, n) {
    typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
    var a = ri(e), r = {
      lane: a,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (gg(e))
      bg(t, r);
    else {
      var i = e.alternate;
      if (e.lanes === O && (i === null || i.lanes === O)) {
        var u = t.lastRenderedReducer;
        if (u !== null) {
          var o;
          o = $.current, $.current = Da;
          try {
            var l = t.lastRenderedState, c = u(l, n);
            if (r.hasEagerState = !0, r.eagerState = c, Gn(c, l)) {
              Vx(e, t, r, a);
              return;
            }
          } catch {
          } finally {
            $.current = o;
          }
        }
      }
      var f = Qy(e, t, r, a);
      if (f !== null) {
        var y = bn();
        zt(f, e, a, y), Sg(f, t, a);
      }
    }
    Eg(e, a);
  }
  function gg(e) {
    var t = e.alternate;
    return e === Je || t !== null && t === Je;
  }
  function bg(e, t) {
    dl = vc = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Sg(e, t, n) {
    if (sm(n)) {
      var a = t.lanes;
      a = fm(a, e.pendingLanes);
      var r = Re(a, n);
      t.lanes = r, sd(e, r);
    }
  }
  function Eg(e, t, n) {
    jf(e, t);
  }
  var xc = {
    readContext: Tt,
    useCallback: fn,
    useContext: fn,
    useEffect: fn,
    useImperativeHandle: fn,
    useInsertionEffect: fn,
    useLayoutEffect: fn,
    useMemo: fn,
    useReducer: fn,
    useRef: fn,
    useState: fn,
    useDebugValue: fn,
    useDeferredValue: fn,
    useTransition: fn,
    useMutableSource: fn,
    useSyncExternalStore: fn,
    useId: fn,
    unstable_isNewReconciler: qt
  }, Cg = null, Rg = null, Tg = null, Dg = null, Qa = null, Da = null, _c = null;
  {
    var Gv = function() {
      d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    }, me = function() {
      d("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
    };
    Cg = {
      readContext: function(e) {
        return Tt(e);
      },
      useCallback: function(e, t) {
        return _ = "useCallback", Qe(), ku(t), Vv(e, t);
      },
      useContext: function(e) {
        return _ = "useContext", Qe(), Tt(e);
      },
      useEffect: function(e, t) {
        return _ = "useEffect", Qe(), ku(t), gc(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return _ = "useImperativeHandle", Qe(), ku(n), Fv(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return _ = "useInsertionEffect", Qe(), ku(t), Hv(e, t);
      },
      useLayoutEffect: function(e, t) {
        return _ = "useLayoutEffect", Qe(), ku(t), jv(e, t);
      },
      useMemo: function(e, t) {
        _ = "useMemo", Qe(), ku(t);
        var n = $.current;
        $.current = Qa;
        try {
          return Bv(e, t);
        } finally {
          $.current = n;
        }
      },
      useReducer: function(e, t, n) {
        _ = "useReducer", Qe();
        var a = $.current;
        $.current = Qa;
        try {
          return Mv(e, t, n);
        } finally {
          $.current = a;
        }
      },
      useRef: function(e) {
        return _ = "useRef", Qe(), zv(e);
      },
      useState: function(e) {
        _ = "useState", Qe();
        var t = $.current;
        $.current = Qa;
        try {
          return hc(e);
        } finally {
          $.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return _ = "useDebugValue", Qe(), void 0;
      },
      useDeferredValue: function(e) {
        return _ = "useDeferredValue", Qe(), Yv(e);
      },
      useTransition: function() {
        return _ = "useTransition", Qe(), $v();
      },
      useMutableSource: function(e, t, n) {
        return _ = "useMutableSource", Qe(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return _ = "useSyncExternalStore", Qe(), Uv(e, t, n);
      },
      useId: function() {
        return _ = "useId", Qe(), Pv();
      },
      unstable_isNewReconciler: qt
    }, Rg = {
      readContext: function(e) {
        return Tt(e);
      },
      useCallback: function(e, t) {
        return _ = "useCallback", z(), Vv(e, t);
      },
      useContext: function(e) {
        return _ = "useContext", z(), Tt(e);
      },
      useEffect: function(e, t) {
        return _ = "useEffect", z(), gc(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return _ = "useImperativeHandle", z(), Fv(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return _ = "useInsertionEffect", z(), Hv(e, t);
      },
      useLayoutEffect: function(e, t) {
        return _ = "useLayoutEffect", z(), jv(e, t);
      },
      useMemo: function(e, t) {
        _ = "useMemo", z();
        var n = $.current;
        $.current = Qa;
        try {
          return Bv(e, t);
        } finally {
          $.current = n;
        }
      },
      useReducer: function(e, t, n) {
        _ = "useReducer", z();
        var a = $.current;
        $.current = Qa;
        try {
          return Mv(e, t, n);
        } finally {
          $.current = a;
        }
      },
      useRef: function(e) {
        return _ = "useRef", z(), zv(e);
      },
      useState: function(e) {
        _ = "useState", z();
        var t = $.current;
        $.current = Qa;
        try {
          return hc(e);
        } finally {
          $.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return _ = "useDebugValue", z(), void 0;
      },
      useDeferredValue: function(e) {
        return _ = "useDeferredValue", z(), Yv(e);
      },
      useTransition: function() {
        return _ = "useTransition", z(), $v();
      },
      useMutableSource: function(e, t, n) {
        return _ = "useMutableSource", z(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return _ = "useSyncExternalStore", z(), Uv(e, t, n);
      },
      useId: function() {
        return _ = "useId", z(), Pv();
      },
      unstable_isNewReconciler: qt
    }, Tg = {
      readContext: function(e) {
        return Tt(e);
      },
      useCallback: function(e, t) {
        return _ = "useCallback", z(), Rc(e, t);
      },
      useContext: function(e) {
        return _ = "useContext", z(), Tt(e);
      },
      useEffect: function(e, t) {
        return _ = "useEffect", z(), ml(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return _ = "useImperativeHandle", z(), Ec(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return _ = "useInsertionEffect", z(), bc(e, t);
      },
      useLayoutEffect: function(e, t) {
        return _ = "useLayoutEffect", z(), Sc(e, t);
      },
      useMemo: function(e, t) {
        _ = "useMemo", z();
        var n = $.current;
        $.current = Da;
        try {
          return Tc(e, t);
        } finally {
          $.current = n;
        }
      },
      useReducer: function(e, t, n) {
        _ = "useReducer", z();
        var a = $.current;
        $.current = Da;
        try {
          return Av(e, t, n);
        } finally {
          $.current = a;
        }
      },
      useRef: function(e) {
        return _ = "useRef", z(), mc();
      },
      useState: function(e) {
        _ = "useState", z();
        var t = $.current;
        $.current = Da;
        try {
          return kv(e);
        } finally {
          $.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return _ = "useDebugValue", z(), Cc();
      },
      useDeferredValue: function(e) {
        return _ = "useDeferredValue", z(), dg(e);
      },
      useTransition: function() {
        return _ = "useTransition", z(), hg();
      },
      useMutableSource: function(e, t, n) {
        return _ = "useMutableSource", z(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return _ = "useSyncExternalStore", z(), pc(e, t);
      },
      useId: function() {
        return _ = "useId", z(), Dc();
      },
      unstable_isNewReconciler: qt
    }, Dg = {
      readContext: function(e) {
        return Tt(e);
      },
      useCallback: function(e, t) {
        return _ = "useCallback", z(), Rc(e, t);
      },
      useContext: function(e) {
        return _ = "useContext", z(), Tt(e);
      },
      useEffect: function(e, t) {
        return _ = "useEffect", z(), ml(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return _ = "useImperativeHandle", z(), Ec(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return _ = "useInsertionEffect", z(), bc(e, t);
      },
      useLayoutEffect: function(e, t) {
        return _ = "useLayoutEffect", z(), Sc(e, t);
      },
      useMemo: function(e, t) {
        _ = "useMemo", z();
        var n = $.current;
        $.current = _c;
        try {
          return Tc(e, t);
        } finally {
          $.current = n;
        }
      },
      useReducer: function(e, t, n) {
        _ = "useReducer", z();
        var a = $.current;
        $.current = _c;
        try {
          return Lv(e, t, n);
        } finally {
          $.current = a;
        }
      },
      useRef: function(e) {
        return _ = "useRef", z(), mc();
      },
      useState: function(e) {
        _ = "useState", z();
        var t = $.current;
        $.current = _c;
        try {
          return Nv(e);
        } finally {
          $.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return _ = "useDebugValue", z(), Cc();
      },
      useDeferredValue: function(e) {
        return _ = "useDeferredValue", z(), vg(e);
      },
      useTransition: function() {
        return _ = "useTransition", z(), mg();
      },
      useMutableSource: function(e, t, n) {
        return _ = "useMutableSource", z(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return _ = "useSyncExternalStore", z(), pc(e, t);
      },
      useId: function() {
        return _ = "useId", z(), Dc();
      },
      unstable_isNewReconciler: qt
    }, Qa = {
      readContext: function(e) {
        return Gv(), Tt(e);
      },
      useCallback: function(e, t) {
        return _ = "useCallback", me(), Qe(), Vv(e, t);
      },
      useContext: function(e) {
        return _ = "useContext", me(), Qe(), Tt(e);
      },
      useEffect: function(e, t) {
        return _ = "useEffect", me(), Qe(), gc(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return _ = "useImperativeHandle", me(), Qe(), Fv(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return _ = "useInsertionEffect", me(), Qe(), Hv(e, t);
      },
      useLayoutEffect: function(e, t) {
        return _ = "useLayoutEffect", me(), Qe(), jv(e, t);
      },
      useMemo: function(e, t) {
        _ = "useMemo", me(), Qe();
        var n = $.current;
        $.current = Qa;
        try {
          return Bv(e, t);
        } finally {
          $.current = n;
        }
      },
      useReducer: function(e, t, n) {
        _ = "useReducer", me(), Qe();
        var a = $.current;
        $.current = Qa;
        try {
          return Mv(e, t, n);
        } finally {
          $.current = a;
        }
      },
      useRef: function(e) {
        return _ = "useRef", me(), Qe(), zv(e);
      },
      useState: function(e) {
        _ = "useState", me(), Qe();
        var t = $.current;
        $.current = Qa;
        try {
          return hc(e);
        } finally {
          $.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return _ = "useDebugValue", me(), Qe(), void 0;
      },
      useDeferredValue: function(e) {
        return _ = "useDeferredValue", me(), Qe(), Yv(e);
      },
      useTransition: function() {
        return _ = "useTransition", me(), Qe(), $v();
      },
      useMutableSource: function(e, t, n) {
        return _ = "useMutableSource", me(), Qe(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return _ = "useSyncExternalStore", me(), Qe(), Uv(e, t, n);
      },
      useId: function() {
        return _ = "useId", me(), Qe(), Pv();
      },
      unstable_isNewReconciler: qt
    }, Da = {
      readContext: function(e) {
        return Gv(), Tt(e);
      },
      useCallback: function(e, t) {
        return _ = "useCallback", me(), z(), Rc(e, t);
      },
      useContext: function(e) {
        return _ = "useContext", me(), z(), Tt(e);
      },
      useEffect: function(e, t) {
        return _ = "useEffect", me(), z(), ml(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return _ = "useImperativeHandle", me(), z(), Ec(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return _ = "useInsertionEffect", me(), z(), bc(e, t);
      },
      useLayoutEffect: function(e, t) {
        return _ = "useLayoutEffect", me(), z(), Sc(e, t);
      },
      useMemo: function(e, t) {
        _ = "useMemo", me(), z();
        var n = $.current;
        $.current = Da;
        try {
          return Tc(e, t);
        } finally {
          $.current = n;
        }
      },
      useReducer: function(e, t, n) {
        _ = "useReducer", me(), z();
        var a = $.current;
        $.current = Da;
        try {
          return Av(e, t, n);
        } finally {
          $.current = a;
        }
      },
      useRef: function(e) {
        return _ = "useRef", me(), z(), mc();
      },
      useState: function(e) {
        _ = "useState", me(), z();
        var t = $.current;
        $.current = Da;
        try {
          return kv(e);
        } finally {
          $.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return _ = "useDebugValue", me(), z(), Cc();
      },
      useDeferredValue: function(e) {
        return _ = "useDeferredValue", me(), z(), dg(e);
      },
      useTransition: function() {
        return _ = "useTransition", me(), z(), hg();
      },
      useMutableSource: function(e, t, n) {
        return _ = "useMutableSource", me(), z(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return _ = "useSyncExternalStore", me(), z(), pc(e, t);
      },
      useId: function() {
        return _ = "useId", me(), z(), Dc();
      },
      unstable_isNewReconciler: qt
    }, _c = {
      readContext: function(e) {
        return Gv(), Tt(e);
      },
      useCallback: function(e, t) {
        return _ = "useCallback", me(), z(), Rc(e, t);
      },
      useContext: function(e) {
        return _ = "useContext", me(), z(), Tt(e);
      },
      useEffect: function(e, t) {
        return _ = "useEffect", me(), z(), ml(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return _ = "useImperativeHandle", me(), z(), Ec(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return _ = "useInsertionEffect", me(), z(), bc(e, t);
      },
      useLayoutEffect: function(e, t) {
        return _ = "useLayoutEffect", me(), z(), Sc(e, t);
      },
      useMemo: function(e, t) {
        _ = "useMemo", me(), z();
        var n = $.current;
        $.current = Da;
        try {
          return Tc(e, t);
        } finally {
          $.current = n;
        }
      },
      useReducer: function(e, t, n) {
        _ = "useReducer", me(), z();
        var a = $.current;
        $.current = Da;
        try {
          return Lv(e, t, n);
        } finally {
          $.current = a;
        }
      },
      useRef: function(e) {
        return _ = "useRef", me(), z(), mc();
      },
      useState: function(e) {
        _ = "useState", me(), z();
        var t = $.current;
        $.current = Da;
        try {
          return Nv(e);
        } finally {
          $.current = t;
        }
      },
      useDebugValue: function(e, t) {
        return _ = "useDebugValue", me(), z(), Cc();
      },
      useDeferredValue: function(e) {
        return _ = "useDeferredValue", me(), z(), vg(e);
      },
      useTransition: function() {
        return _ = "useTransition", me(), z(), mg();
      },
      useMutableSource: function(e, t, n) {
        return _ = "useMutableSource", me(), z(), void 0;
      },
      useSyncExternalStore: function(e, t, n) {
        return _ = "useSyncExternalStore", me(), z(), pc(e, t);
      },
      useId: function() {
        return _ = "useId", me(), z(), Dc();
      },
      unstable_isNewReconciler: qt
    };
  }
  var ei = R.unstable_now, xg = 0, Oc = -1, yl = -1, wc = -1, qv = !1, Mc = !1;
  function _g() {
    return qv;
  }
  function a_() {
    Mc = !0;
  }
  function r_() {
    qv = !1, Mc = !1;
  }
  function i_() {
    qv = Mc, Mc = !1;
  }
  function Og() {
    return xg;
  }
  function wg() {
    xg = ei();
  }
  function Qv(e) {
    yl = ei(), e.actualStartTime < 0 && (e.actualStartTime = ei());
  }
  function Mg(e) {
    yl = -1;
  }
  function Ac(e, t) {
    if (yl >= 0) {
      var n = ei() - yl;
      e.actualDuration += n, t && (e.selfBaseDuration = n), yl = -1;
    }
  }
  function Wa(e) {
    if (Oc >= 0) {
      var t = ei() - Oc;
      Oc = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case P:
            var a = n.stateNode;
            a.effectDuration += t;
            return;
          case ee:
            var r = n.stateNode;
            r.effectDuration += t;
            return;
        }
        n = n.return;
      }
    }
  }
  function Wv(e) {
    if (wc >= 0) {
      var t = ei() - wc;
      wc = -1;
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case P:
            var a = n.stateNode;
            a !== null && (a.passiveEffectDuration += t);
            return;
          case ee:
            var r = n.stateNode;
            r !== null && (r.passiveEffectDuration += t);
            return;
        }
        n = n.return;
      }
    }
  }
  function Xa() {
    Oc = ei();
  }
  function Xv() {
    wc = ei();
  }
  function Iv(e) {
    for (var t = e.child; t; )
      e.actualDuration += t.actualDuration, t = t.sibling;
  }
  function xa(e, t) {
    if (e && e.defaultProps) {
      var n = _e({}, t), a = e.defaultProps;
      for (var r in a)
        n[r] === void 0 && (n[r] = a[r]);
      return n;
    }
    return t;
  }
  var Kv = {}, Jv, Zv, ep, tp, np, Ag, Lc, ap, rp, ip, gl;
  {
    Jv = /* @__PURE__ */ new Set(), Zv = /* @__PURE__ */ new Set(), ep = /* @__PURE__ */ new Set(), tp = /* @__PURE__ */ new Set(), ap = /* @__PURE__ */ new Set(), np = /* @__PURE__ */ new Set(), rp = /* @__PURE__ */ new Set(), ip = /* @__PURE__ */ new Set(), gl = /* @__PURE__ */ new Set();
    var Lg = /* @__PURE__ */ new Set();
    Lc = function(e, t) {
      if (!(e === null || typeof e == "function")) {
        var n = t + "_" + e;
        Lg.has(n) || (Lg.add(n), d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
      }
    }, Ag = function(e, t) {
      if (t === void 0) {
        var n = je(e) || "Component";
        np.has(n) || (np.add(n), d("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
      }
    }, Object.defineProperty(Kv, "_processChildContext", {
      enumerable: !1,
      value: function() {
        throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
      }
    }), Object.freeze(Kv);
  }
  function up(e, t, n, a) {
    var r = e.memoizedState, i = n(a, r);
    {
      if (e.mode & pt) {
        $t(!0);
        try {
          i = n(a, r);
        } finally {
          $t(!1);
        }
      }
      Ag(t, i);
    }
    var u = i == null ? r : _e({}, r, i);
    if (e.memoizedState = u, e.lanes === O) {
      var o = e.updateQueue;
      o.baseState = u;
    }
  }
  var op = {
    isMounted: IE,
    enqueueSetState: function(e, t, n) {
      var a = ru(e), r = bn(), i = ri(a), u = Er(r, i);
      u.payload = t, n != null && (Lc(n, "setState"), u.callback = n);
      var o = Ir(a, u, i);
      o !== null && (zt(o, a, i, r), oc(o, a, i)), jf(a, i);
    },
    enqueueReplaceState: function(e, t, n) {
      var a = ru(e), r = bn(), i = ri(a), u = Er(r, i);
      u.tag = Xy, u.payload = t, n != null && (Lc(n, "replaceState"), u.callback = n);
      var o = Ir(a, u, i);
      o !== null && (zt(o, a, i, r), oc(o, a, i)), jf(a, i);
    },
    enqueueForceUpdate: function(e, t) {
      var n = ru(e), a = bn(), r = ri(n), i = Er(a, r);
      i.tag = rc, t != null && (Lc(t, "forceUpdate"), i.callback = t);
      var u = Ir(n, i, r);
      u !== null && (zt(u, n, r, a), oc(u, n, r)), _C(n, r);
    }
  };
  function Ug(e, t, n, a, r, i, u) {
    var o = e.stateNode;
    if (typeof o.shouldComponentUpdate == "function") {
      var l = o.shouldComponentUpdate(a, i, u);
      {
        if (e.mode & pt) {
          $t(!0);
          try {
            l = o.shouldComponentUpdate(a, i, u);
          } finally {
            $t(!1);
          }
        }
        l === void 0 && d("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", je(t) || "Component");
      }
      return l;
    }
    return t.prototype && t.prototype.isPureReactComponent ? !Vo(n, a) || !Vo(r, i) : !0;
  }
  function u_(e, t, n) {
    var a = e.stateNode;
    {
      var r = je(t) || "Component", i = a.render;
      i || (t.prototype && typeof t.prototype.render == "function" ? d("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", r) : d("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", r)), a.getInitialState && !a.getInitialState.isReactClassApproved && !a.state && d("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", r), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && d("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", r), a.propTypes && d("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", r), a.contextType && d("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", r), t.childContextTypes && !gl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
      // this one.
      (e.mode & pt) === ue && (gl.add(t), d(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, r)), t.contextTypes && !gl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
      // this one.
      (e.mode & pt) === ue && (gl.add(t), d(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, r)), a.contextTypes && d("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", r), t.contextType && t.contextTypes && !rp.has(t) && (rp.add(t), d("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", r)), typeof a.componentShouldUpdate == "function" && d("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", r), t.prototype && t.prototype.isPureReactComponent && typeof a.shouldComponentUpdate < "u" && d("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", je(t) || "A pure component"), typeof a.componentDidUnmount == "function" && d("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", r), typeof a.componentDidReceiveProps == "function" && d("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", r), typeof a.componentWillRecieveProps == "function" && d("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", r), typeof a.UNSAFE_componentWillRecieveProps == "function" && d("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", r);
      var u = a.props !== n;
      a.props !== void 0 && u && d("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", r, r), a.defaultProps && d("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", r, r), typeof a.getSnapshotBeforeUpdate == "function" && typeof a.componentDidUpdate != "function" && !ep.has(t) && (ep.add(t), d("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", je(t))), typeof a.getDerivedStateFromProps == "function" && d("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", r), typeof a.getDerivedStateFromError == "function" && d("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", r), typeof t.getSnapshotBeforeUpdate == "function" && d("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", r);
      var o = a.state;
      o && (typeof o != "object" || Ge(o)) && d("%s.state: must be set to an object or null", r), typeof a.getChildContext == "function" && typeof t.childContextTypes != "object" && d("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", r);
    }
  }
  function kg(e, t) {
    t.updater = op, e.stateNode = t, GE(t, e), t._reactInternalInstance = Kv;
  }
  function Ng(e, t, n) {
    var a = !1, r = qn, i = qn, u = t.contextType;
    if ("contextType" in t) {
      var o = (
        // Allow null for conditional declaration
        u === null || u !== void 0 && u.$$typeof === M && u._context === void 0
      );
      if (!o && !ip.has(t)) {
        ip.add(t);
        var l = "";
        u === void 0 ? l = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof u != "object" ? l = " However, it is set to a " + typeof u + "." : u.$$typeof === p ? l = " Did you accidentally pass the Context.Provider instead?" : u._context !== void 0 ? l = " Did you accidentally pass the Context.Consumer instead?" : l = " However, it is set to an object with keys {" + Object.keys(u).join(", ") + "}.", d("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", je(t) || "Component", l);
      }
    }
    if (typeof u == "object" && u !== null)
      i = Tt(u);
    else {
      r = Cu(e, t, !0);
      var c = t.contextTypes;
      a = c != null, i = a ? Ru(e, r) : qn;
    }
    var f = new t(n, i);
    if (e.mode & pt) {
      $t(!0);
      try {
        f = new t(n, i);
      } finally {
        $t(!1);
      }
    }
    var y = e.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null;
    kg(e, f);
    {
      if (typeof t.getDerivedStateFromProps == "function" && y === null) {
        var m = je(t) || "Component";
        Zv.has(m) || (Zv.add(m), d("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", m, f.state === null ? "null" : "undefined", m));
      }
      if (typeof t.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
        var S = null, C = null, D = null;
        if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? S = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (S = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? C = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (C = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? D = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (D = "UNSAFE_componentWillUpdate"), S !== null || C !== null || D !== null) {
          var V = je(t) || "Component", re = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          tp.has(V) || (tp.add(V), d(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, V, re, S !== null ? `
  ` + S : "", C !== null ? `
  ` + C : "", D !== null ? `
  ` + D : ""));
        }
      }
    }
    return a && Ty(e, r, i), f;
  }
  function o_(e, t) {
    var n = t.state;
    typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (d("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", be(e) || "Component"), op.enqueueReplaceState(t, t.state, null));
  }
  function zg(e, t, n, a) {
    var r = t.state;
    if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== r) {
      {
        var i = be(e) || "Component";
        Jv.has(i) || (Jv.add(i), d("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", i));
      }
      op.enqueueReplaceState(t, t.state, null);
    }
  }
  function lp(e, t, n, a) {
    u_(e, t, n);
    var r = e.stateNode;
    r.props = n, r.state = e.memoizedState, r.refs = {}, yv(e);
    var i = t.contextType;
    if (typeof i == "object" && i !== null)
      r.context = Tt(i);
    else {
      var u = Cu(e, t, !0);
      r.context = Ru(e, u);
    }
    {
      if (r.state === n) {
        var o = je(t) || "Component";
        ap.has(o) || (ap.add(o), d("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", o));
      }
      e.mode & pt && Ra.recordLegacyContextWarning(e, r), Ra.recordUnsafeLifecycleWarnings(e, r);
    }
    r.state = e.memoizedState;
    var l = t.getDerivedStateFromProps;
    if (typeof l == "function" && (up(e, t, l, n), r.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function" && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function") && (o_(e, r), lc(e, n, r, a), r.state = e.memoizedState), typeof r.componentDidMount == "function") {
      var c = Ne;
      c |= bi, (e.mode & Ba) !== ue && (c |= fr), e.flags |= c;
    }
  }
  function l_(e, t, n, a) {
    var r = e.stateNode, i = e.memoizedProps;
    r.props = i;
    var u = r.context, o = t.contextType, l = qn;
    if (typeof o == "object" && o !== null)
      l = Tt(o);
    else {
      var c = Cu(e, t, !0);
      l = Ru(e, c);
    }
    var f = t.getDerivedStateFromProps, y = typeof f == "function" || typeof r.getSnapshotBeforeUpdate == "function";
    !y && (typeof r.UNSAFE_componentWillReceiveProps == "function" || typeof r.componentWillReceiveProps == "function") && (i !== n || u !== l) && zg(e, r, n, l), Ky();
    var m = e.memoizedState, S = r.state = m;
    if (lc(e, n, r, a), S = e.memoizedState, i === n && m === S && !$s() && !sc()) {
      if (typeof r.componentDidMount == "function") {
        var C = Ne;
        C |= bi, (e.mode & Ba) !== ue && (C |= fr), e.flags |= C;
      }
      return !1;
    }
    typeof f == "function" && (up(e, t, f, n), S = e.memoizedState);
    var D = sc() || Ug(e, t, i, n, m, S, l);
    if (D) {
      if (!y && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function") && (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function") {
        var V = Ne;
        V |= bi, (e.mode & Ba) !== ue && (V |= fr), e.flags |= V;
      }
    } else {
      if (typeof r.componentDidMount == "function") {
        var re = Ne;
        re |= bi, (e.mode & Ba) !== ue && (re |= fr), e.flags |= re;
      }
      e.memoizedProps = n, e.memoizedState = S;
    }
    return r.props = n, r.state = S, r.context = l, D;
  }
  function s_(e, t, n, a, r) {
    var i = t.stateNode;
    Iy(e, t);
    var u = t.memoizedProps, o = t.type === t.elementType ? u : xa(t.type, u);
    i.props = o;
    var l = t.pendingProps, c = i.context, f = n.contextType, y = qn;
    if (typeof f == "object" && f !== null)
      y = Tt(f);
    else {
      var m = Cu(t, n, !0);
      y = Ru(t, m);
    }
    var S = n.getDerivedStateFromProps, C = typeof S == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    !C && (typeof i.UNSAFE_componentWillReceiveProps == "function" || typeof i.componentWillReceiveProps == "function") && (u !== l || c !== y) && zg(t, i, a, y), Ky();
    var D = t.memoizedState, V = i.state = D;
    if (lc(t, a, i, r), V = t.memoizedState, u === l && D === V && !$s() && !sc() && !ka)
      return typeof i.componentDidUpdate == "function" && (u !== e.memoizedProps || D !== e.memoizedState) && (t.flags |= Ne), typeof i.getSnapshotBeforeUpdate == "function" && (u !== e.memoizedProps || D !== e.memoizedState) && (t.flags |= yi), !1;
    typeof S == "function" && (up(t, n, S, a), V = t.memoizedState);
    var re = sc() || Ug(t, n, o, a, D, V, y) || // TODO: In some cases, we'll end up checking if context has changed twice,
    // both before and after `shouldComponentUpdate` has been called. Not ideal,
    // but I'm loath to refactor this function. This only happens for memoized
    // components so it's not that common.
    ka;
    return re ? (!C && (typeof i.UNSAFE_componentWillUpdate == "function" || typeof i.componentWillUpdate == "function") && (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, V, y), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, V, y)), typeof i.componentDidUpdate == "function" && (t.flags |= Ne), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= yi)) : (typeof i.componentDidUpdate == "function" && (u !== e.memoizedProps || D !== e.memoizedState) && (t.flags |= Ne), typeof i.getSnapshotBeforeUpdate == "function" && (u !== e.memoizedProps || D !== e.memoizedState) && (t.flags |= yi), t.memoizedProps = a, t.memoizedState = V), i.props = a, i.state = V, i.context = y, re;
  }
  function Hi(e, t) {
    return {
      value: e,
      source: t,
      stack: ro(t),
      digest: null
    };
  }
  function sp(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    };
  }
  function c_(e, t) {
    return !0;
  }
  function cp(e, t) {
    try {
      var n = c_(e, t);
      if (n === !1)
        return;
      var a = t.value, r = t.source, i = t.stack, u = i !== null ? i : "";
      if (a != null && a._suppressLogging) {
        if (e.tag === N)
          return;
        console.error(a);
      }
      var o = r ? be(r) : null, l = o ? "The above error occurred in the <" + o + "> component:" : "The above error occurred in one of your React components:", c;
      if (e.tag === P)
        c = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
      else {
        var f = be(e) || "Anonymous";
        c = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + f + ".");
      }
      var y = l + `
` + u + `

` + ("" + c);
      console.error(y);
    } catch (m) {
      setTimeout(function() {
        throw m;
      });
    }
  }
  var f_ = typeof WeakMap == "function" ? WeakMap : Map;
  function Hg(e, t, n) {
    var a = Er(it, n);
    a.tag = hv, a.payload = {
      element: null
    };
    var r = t.value;
    return a.callback = function() {
      aO(r), cp(e, t);
    }, a;
  }
  function fp(e, t, n) {
    var a = Er(it, n);
    a.tag = hv;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      a.payload = function() {
        return r(i);
      }, a.callback = function() {
        Wb(e), cp(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (a.callback = function() {
      Wb(e), cp(e, t), typeof r != "function" && tO(this);
      var l = t.value, c = t.stack;
      this.componentDidCatch(l, {
        componentStack: c !== null ? c : ""
      }), typeof r != "function" && (Yn(e.lanes, he) || d("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", be(e) || "Unknown"));
    }), a;
  }
  function jg(e, t, n) {
    var a = e.pingCache, r;
    if (a === null ? (a = e.pingCache = new f_(), r = /* @__PURE__ */ new Set(), a.set(t, r)) : (r = a.get(t), r === void 0 && (r = /* @__PURE__ */ new Set(), a.set(t, r))), !r.has(n)) {
      r.add(n);
      var i = rO.bind(null, e, t, n);
      ba && Nl(e, n), t.then(i, i);
    }
  }
  function d_(e, t, n, a) {
    var r = e.updateQueue;
    if (r === null) {
      var i = /* @__PURE__ */ new Set();
      i.add(n), e.updateQueue = i;
    } else
      r.add(n);
  }
  function v_(e, t) {
    var n = e.tag;
    if ((e.mode & Ae) === ue && (n === ne || n === X || n === ie)) {
      var a = e.alternate;
      a ? (e.updateQueue = a.updateQueue, e.memoizedState = a.memoizedState, e.lanes = a.lanes) : (e.updateQueue = null, e.memoizedState = null);
    }
  }
  function Fg(e) {
    var t = e;
    do {
      if (t.tag === q && Qx(t))
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function Vg(e, t, n, a, r) {
    if ((e.mode & Ae) === ue) {
      if (e === t)
        e.flags |= mn;
      else {
        if (e.flags |= qe, n.flags |= Af, n.flags &= ~(qE | yo), n.tag === N) {
          var i = n.alternate;
          if (i === null)
            n.tag = ve;
          else {
            var u = Er(it, he);
            u.tag = rc, Ir(n, u, he);
          }
        }
        n.lanes = Re(n.lanes, he);
      }
      return e;
    }
    return e.flags |= mn, e.lanes = r, e;
  }
  function p_(e, t, n, a, r) {
    if (n.flags |= yo, ba && Nl(e, r), a !== null && typeof a == "object" && typeof a.then == "function") {
      var i = a;
      v_(n), Xt() && n.mode & Ae && Ay();
      var u = Fg(t);
      if (u !== null) {
        u.flags &= ~sr, Vg(u, t, n, e, r), u.mode & Ae && jg(e, i, r), d_(u, e, i);
        return;
      } else {
        if (!zC(r)) {
          jg(e, i, r), Pp();
          return;
        }
        var o = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        a = o;
      }
    } else if (Xt() && n.mode & Ae) {
      Ay();
      var l = Fg(t);
      if (l !== null) {
        (l.flags & mn) === se && (l.flags |= sr), Vg(l, t, n, e, r), av(Hi(a, n));
        return;
      }
    }
    a = Hi(a, n), Q0(a);
    var c = t;
    do {
      switch (c.tag) {
        case P: {
          var f = a;
          c.flags |= mn;
          var y = Do(r);
          c.lanes = Re(c.lanes, y);
          var m = Hg(c, f, y);
          gv(c, m);
          return;
        }
        case N:
          var S = a, C = c.type, D = c.stateNode;
          if ((c.flags & qe) === se && (typeof C.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && !Fb(D))) {
            c.flags |= mn;
            var V = Do(r);
            c.lanes = Re(c.lanes, V);
            var re = fp(c, S, V);
            gv(c, re);
            return;
          }
          break;
      }
      c = c.return;
    } while (c !== null);
  }
  function h_() {
    return null;
  }
  var bl = L.ReactCurrentOwner, _a = !1, dp, Sl, vp, pp, hp, ji, mp, Uc, El;
  dp = {}, Sl = {}, vp = {}, pp = {}, hp = {}, ji = !1, mp = {}, Uc = {}, El = {};
  function yn(e, t, n, a) {
    e === null ? t.child = $y(t, null, n, a) : t.child = _u(t, e.child, n, a);
  }
  function m_(e, t, n, a) {
    t.child = _u(t, e.child, null, a), t.child = _u(t, null, n, a);
  }
  function Bg(e, t, n, a, r) {
    if (t.type !== t.elementType) {
      var i = n.propTypes;
      i && Ea(
        i,
        a,
        // Resolved props
        "prop",
        je(n)
      );
    }
    var u = n.render, o = t.ref, l, c;
    wu(t, r), bo(t);
    {
      if (bl.current = t, Vn(!0), l = Nu(e, t, u, a, o, r), c = zu(), t.mode & pt) {
        $t(!0);
        try {
          l = Nu(e, t, u, a, o, r), c = zu();
        } finally {
          $t(!1);
        }
      }
      Vn(!1);
    }
    return lu(), e !== null && !_a ? (ag(e, t, r), Cr(e, t, r)) : (Xt() && c && Kd(t), t.flags |= iu, yn(e, t, l, r), t.child);
  }
  function Yg(e, t, n, a, r) {
    if (e === null) {
      var i = n.type;
      if (EO(i) && n.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
      n.defaultProps === void 0) {
        var u = i;
        return u = Pu(i), t.tag = ie, t.type = u, bp(t, i), $g(e, t, u, a, r);
      }
      {
        var o = i.propTypes;
        if (o && Ea(
          o,
          a,
          // Resolved props
          "prop",
          je(i)
        ), n.defaultProps !== void 0) {
          var l = je(i) || "Unknown";
          El[l] || (d("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", l), El[l] = !0);
        }
      }
      var c = th(n.type, null, a, t, t.mode, r);
      return c.ref = t.ref, c.return = t, t.child = c, c;
    }
    {
      var f = n.type, y = f.propTypes;
      y && Ea(
        y,
        a,
        // Resolved props
        "prop",
        je(f)
      );
    }
    var m = e.child, S = Dp(e, r);
    if (!S) {
      var C = m.memoizedProps, D = n.compare;
      if (D = D !== null ? D : Vo, D(C, a) && e.ref === t.ref)
        return Cr(e, t, r);
    }
    t.flags |= iu;
    var V = $i(m, a);
    return V.ref = t.ref, V.return = t, t.child = V, V;
  }
  function $g(e, t, n, a, r) {
    if (t.type !== t.elementType) {
      var i = t.elementType;
      if (i.$$typeof === le) {
        var u = i, o = u._payload, l = u._init;
        try {
          i = l(o);
        } catch {
          i = null;
        }
        var c = i && i.propTypes;
        c && Ea(
          c,
          a,
          // Resolved (SimpleMemoComponent has no defaultProps)
          "prop",
          je(i)
        );
      }
    }
    if (e !== null) {
      var f = e.memoizedProps;
      if (Vo(f, a) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
      t.type === e.type)
        if (_a = !1, t.pendingProps = a = f, Dp(e, r))
          (e.flags & Af) !== se && (_a = !0);
        else return t.lanes = e.lanes, Cr(e, t, r);
    }
    return yp(e, t, n, a, r);
  }
  function Pg(e, t, n) {
    var a = t.pendingProps, r = a.children, i = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden" || In)
      if ((t.mode & Ae) === ue) {
        var u = {
          baseLanes: O,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = u, qc(t, n);
      } else if (Yn(n, Bn)) {
        var y = {
          baseLanes: O,
          cachePool: null,
          transitions: null
        };
        t.memoizedState = y;
        var m = i !== null ? i.baseLanes : n;
        qc(t, m);
      } else {
        var o = null, l;
        if (i !== null) {
          var c = i.baseLanes;
          l = Re(c, n);
        } else
          l = n;
        t.lanes = t.childLanes = Bn;
        var f = {
          baseLanes: l,
          cachePool: o,
          transitions: null
        };
        return t.memoizedState = f, t.updateQueue = null, qc(t, l), null;
      }
    else {
      var S;
      i !== null ? (S = Re(i.baseLanes, n), t.memoizedState = null) : S = n, qc(t, S);
    }
    return yn(e, t, r, n), t.child;
  }
  function y_(e, t, n) {
    var a = t.pendingProps;
    return yn(e, t, a, n), t.child;
  }
  function g_(e, t, n) {
    var a = t.pendingProps.children;
    return yn(e, t, a, n), t.child;
  }
  function b_(e, t, n) {
    {
      t.flags |= Ne;
      {
        var a = t.stateNode;
        a.effectDuration = 0, a.passiveEffectDuration = 0;
      }
    }
    var r = t.pendingProps, i = r.children;
    return yn(e, t, i, n), t.child;
  }
  function Gg(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= jr, t.flags |= Lf);
  }
  function yp(e, t, n, a, r) {
    if (t.type !== t.elementType) {
      var i = n.propTypes;
      i && Ea(
        i,
        a,
        // Resolved props
        "prop",
        je(n)
      );
    }
    var u;
    {
      var o = Cu(t, n, !0);
      u = Ru(t, o);
    }
    var l, c;
    wu(t, r), bo(t);
    {
      if (bl.current = t, Vn(!0), l = Nu(e, t, n, a, u, r), c = zu(), t.mode & pt) {
        $t(!0);
        try {
          l = Nu(e, t, n, a, u, r), c = zu();
        } finally {
          $t(!1);
        }
      }
      Vn(!1);
    }
    return lu(), e !== null && !_a ? (ag(e, t, r), Cr(e, t, r)) : (Xt() && c && Kd(t), t.flags |= iu, yn(e, t, l, r), t.child);
  }
  function qg(e, t, n, a, r) {
    {
      switch (zO(t)) {
        case !1: {
          var i = t.stateNode, u = t.type, o = new u(t.memoizedProps, i.context), l = o.state;
          i.updater.enqueueSetState(i, l, null);
          break;
        }
        case !0: {
          t.flags |= qe, t.flags |= mn;
          var c = new Error("Simulated error coming from DevTools"), f = Do(r);
          t.lanes = Re(t.lanes, f);
          var y = fp(t, Hi(c, t), f);
          gv(t, y);
          break;
        }
      }
      if (t.type !== t.elementType) {
        var m = n.propTypes;
        m && Ea(
          m,
          a,
          // Resolved props
          "prop",
          je(n)
        );
      }
    }
    var S;
    Pa(n) ? (S = !0, Gs(t)) : S = !1, wu(t, r);
    var C = t.stateNode, D;
    C === null ? (Nc(e, t), Ng(t, n, a), lp(t, n, a, r), D = !0) : e === null ? D = l_(t, n, a, r) : D = s_(e, t, n, a, r);
    var V = gp(e, t, n, D, S, r);
    {
      var re = t.stateNode;
      D && re.props !== a && (ji || d("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", be(t) || "a component"), ji = !0);
    }
    return V;
  }
  function gp(e, t, n, a, r, i) {
    Gg(e, t);
    var u = (t.flags & qe) !== se;
    if (!a && !u)
      return r && _y(t, n, !1), Cr(e, t, i);
    var o = t.stateNode;
    bl.current = t;
    var l;
    if (u && typeof n.getDerivedStateFromError != "function")
      l = null, Mg();
    else {
      bo(t);
      {
        if (Vn(!0), l = o.render(), t.mode & pt) {
          $t(!0);
          try {
            o.render();
          } finally {
            $t(!1);
          }
        }
        Vn(!1);
      }
      lu();
    }
    return t.flags |= iu, e !== null && u ? m_(e, t, l, i) : yn(e, t, l, i), t.memoizedState = o.state, r && _y(t, n, !0), t.child;
  }
  function Qg(e) {
    var t = e.stateNode;
    t.pendingContext ? Dy(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Dy(e, t.context, !1), bv(e, t.containerInfo);
  }
  function S_(e, t, n) {
    if (Qg(t), e === null)
      throw new Error("Should have a current fiber. This is a bug in React.");
    var a = t.pendingProps, r = t.memoizedState, i = r.element;
    Iy(e, t), lc(t, a, null, n);
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
      if (c.baseState = l, t.memoizedState = l, t.flags & sr) {
        var f = Hi(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
        return Wg(e, t, o, n, f);
      } else if (o !== i) {
        var y = Hi(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
        return Wg(e, t, o, n, y);
      } else {
        Rx(t);
        var m = $y(t, null, o, n);
        t.child = m;
        for (var S = m; S; )
          S.flags = S.flags & ~Rt | cr, S = S.sibling;
      }
    } else {
      if (xu(), o === i)
        return Cr(e, t, n);
      yn(e, t, o, n);
    }
    return t.child;
  }
  function Wg(e, t, n, a, r) {
    return xu(), av(r), t.flags |= sr, yn(e, t, n, a), t.child;
  }
  function E_(e, t, n) {
    eg(t), e === null && nv(t);
    var a = t.type, r = t.pendingProps, i = e !== null ? e.memoizedProps : null, u = r.children, o = Hd(a, r);
    return o ? u = null : i !== null && Hd(a, i) && (t.flags |= mo), Gg(e, t), yn(e, t, u, n), t.child;
  }
  function C_(e, t) {
    return e === null && nv(t), null;
  }
  function R_(e, t, n, a) {
    Nc(e, t);
    var r = t.pendingProps, i = n, u = i._payload, o = i._init, l = o(u);
    t.type = l;
    var c = t.tag = CO(l), f = xa(l, r), y;
    switch (c) {
      case ne:
        return bp(t, l), t.type = l = Pu(l), y = yp(null, t, l, f, a), y;
      case N:
        return t.type = l = Xp(l), y = qg(null, t, l, f, a), y;
      case X:
        return t.type = l = Ip(l), y = Bg(null, t, l, f, a), y;
      case ye: {
        if (t.type !== t.elementType) {
          var m = l.propTypes;
          m && Ea(
            m,
            f,
            // Resolved for outer only
            "prop",
            je(l)
          );
        }
        return y = Yg(
          null,
          t,
          l,
          xa(l.type, f),
          // The inner type can have defaults too
          a
        ), y;
      }
    }
    var S = "";
    throw l !== null && typeof l == "object" && l.$$typeof === le && (S = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + l + ". " + ("Lazy element type must resolve to a class or function." + S));
  }
  function T_(e, t, n, a, r) {
    Nc(e, t), t.tag = N;
    var i;
    return Pa(n) ? (i = !0, Gs(t)) : i = !1, wu(t, r), Ng(t, n, a), lp(t, n, a, r), gp(null, t, n, !0, i, r);
  }
  function D_(e, t, n, a) {
    Nc(e, t);
    var r = t.pendingProps, i;
    {
      var u = Cu(t, n, !1);
      i = Ru(t, u);
    }
    wu(t, a);
    var o, l;
    bo(t);
    {
      if (n.prototype && typeof n.prototype.render == "function") {
        var c = je(n) || "Unknown";
        dp[c] || (d("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", c, c), dp[c] = !0);
      }
      t.mode & pt && Ra.recordLegacyContextWarning(t, null), Vn(!0), bl.current = t, o = Nu(null, t, n, r, i, a), l = zu(), Vn(!1);
    }
    if (lu(), t.flags |= iu, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) {
      var f = je(n) || "Unknown";
      Sl[f] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", f, f, f), Sl[f] = !0);
    }
    if (
      // Run these checks in production only if the flag is off.
      // Eventually we'll delete this branch altogether.
      typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0
    ) {
      {
        var y = je(n) || "Unknown";
        Sl[y] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), Sl[y] = !0);
      }
      t.tag = N, t.memoizedState = null, t.updateQueue = null;
      var m = !1;
      return Pa(n) ? (m = !0, Gs(t)) : m = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, yv(t), kg(t, o), lp(t, n, r, a), gp(null, t, n, !0, m, a);
    } else {
      if (t.tag = ne, t.mode & pt) {
        $t(!0);
        try {
          o = Nu(null, t, n, r, i, a), l = zu();
        } finally {
          $t(!1);
        }
      }
      return Xt() && l && Kd(t), yn(null, t, o, a), bp(t, n), t.child;
    }
  }
  function bp(e, t) {
    {
      if (t && t.childContextTypes && d("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
        var n = "", a = kr();
        a && (n += `

Check the render method of \`` + a + "`.");
        var r = a || "", i = e._debugSource;
        i && (r = i.fileName + ":" + i.lineNumber), hp[r] || (hp[r] = !0, d("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", n));
      }
      if (t.defaultProps !== void 0) {
        var u = je(t) || "Unknown";
        El[u] || (d("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", u), El[u] = !0);
      }
      if (typeof t.getDerivedStateFromProps == "function") {
        var o = je(t) || "Unknown";
        pp[o] || (d("%s: Function components do not support getDerivedStateFromProps.", o), pp[o] = !0);
      }
      if (typeof t.contextType == "object" && t.contextType !== null) {
        var l = je(t) || "Unknown";
        vp[l] || (d("%s: Function components do not support contextType.", l), vp[l] = !0);
      }
    }
  }
  var Sp = {
    dehydrated: null,
    treeContext: null,
    retryLane: Pt
  };
  function Ep(e) {
    return {
      baseLanes: e,
      cachePool: h_(),
      transitions: null
    };
  }
  function x_(e, t) {
    var n = null;
    return {
      baseLanes: Re(e.baseLanes, t),
      cachePool: n,
      transitions: e.transitions
    };
  }
  function __(e, t, n, a) {
    if (t !== null) {
      var r = t.memoizedState;
      if (r === null)
        return !1;
    }
    return Cv(e, cl);
  }
  function O_(e, t) {
    return ps(e.childLanes, t);
  }
  function Xg(e, t, n) {
    var a = t.pendingProps;
    HO(t) && (t.flags |= qe);
    var r = Ta.current, i = !1, u = (t.flags & qe) !== se;
    if (u || __(r, e) ? (i = !0, t.flags &= ~qe) : (e === null || e.memoizedState !== null) && (r = qx(r, ng)), r = Au(r), Jr(t, r), e === null) {
      nv(t);
      var o = t.memoizedState;
      if (o !== null) {
        var l = o.dehydrated;
        if (l !== null)
          return U_(t, l);
      }
      var c = a.children, f = a.fallback;
      if (i) {
        var y = w_(t, c, f, n), m = t.child;
        return m.memoizedState = Ep(n), t.memoizedState = Sp, y;
      } else
        return Cp(t, c);
    } else {
      var S = e.memoizedState;
      if (S !== null) {
        var C = S.dehydrated;
        if (C !== null)
          return k_(e, t, u, a, C, S, n);
      }
      if (i) {
        var D = a.fallback, V = a.children, re = A_(e, t, V, D, n), Z = t.child, Ue = e.child.memoizedState;
        return Z.memoizedState = Ue === null ? Ep(n) : x_(Ue, n), Z.childLanes = O_(e, n), t.memoizedState = Sp, re;
      } else {
        var Oe = a.children, g = M_(e, t, Oe, n);
        return t.memoizedState = null, g;
      }
    }
  }
  function Cp(e, t, n) {
    var a = e.mode, r = {
      mode: "visible",
      children: t
    }, i = Rp(r, a);
    return i.return = e, e.child = i, i;
  }
  function w_(e, t, n, a) {
    var r = e.mode, i = e.child, u = {
      mode: "hidden",
      children: t
    }, o, l;
    return (r & Ae) === ue && i !== null ? (o = i, o.childLanes = O, o.pendingProps = u, e.mode & Ke && (o.actualDuration = 0, o.actualStartTime = -1, o.selfBaseDuration = 0, o.treeBaseDuration = 0), l = ui(n, r, a, null)) : (o = Rp(u, r), l = ui(n, r, a, null)), o.return = e, l.return = e, o.sibling = l, e.child = o, l;
  }
  function Rp(e, t, n) {
    return Ib(e, t, O, null);
  }
  function Ig(e, t) {
    return $i(e, t);
  }
  function M_(e, t, n, a) {
    var r = e.child, i = r.sibling, u = Ig(r, {
      mode: "visible",
      children: n
    });
    if ((t.mode & Ae) === ue && (u.lanes = a), u.return = t, u.sibling = null, i !== null) {
      var o = t.deletions;
      o === null ? (t.deletions = [i], t.flags |= mi) : o.push(i);
    }
    return t.child = u, u;
  }
  function A_(e, t, n, a, r) {
    var i = t.mode, u = e.child, o = u.sibling, l = {
      mode: "hidden",
      children: n
    }, c;
    if (
      // In legacy mode, we commit the primary tree as if it successfully
      // completed, even though it's in an inconsistent state.
      (i & Ae) === ue && // Make sure we're on the second pass, i.e. the primary child fragment was
      // already cloned. In legacy mode, the only case where this isn't true is
      // when DevTools forces us to display a fallback; we skip the first render
      // pass entirely and go straight to rendering the fallback. (In Concurrent
      // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
      // only codepath.)
      t.child !== u
    ) {
      var f = t.child;
      c = f, c.childLanes = O, c.pendingProps = l, t.mode & Ke && (c.actualDuration = 0, c.actualStartTime = -1, c.selfBaseDuration = u.selfBaseDuration, c.treeBaseDuration = u.treeBaseDuration), t.deletions = null;
    } else
      c = Ig(u, l), c.subtreeFlags = u.subtreeFlags & dr;
    var y;
    return o !== null ? y = $i(o, a) : (y = ui(a, i, r, null), y.flags |= Rt), y.return = t, c.return = t, c.sibling = y, t.child = c, y;
  }
  function kc(e, t, n, a) {
    a !== null && av(a), _u(t, e.child, null, n);
    var r = t.pendingProps, i = r.children, u = Cp(t, i);
    return u.flags |= Rt, t.memoizedState = null, u;
  }
  function L_(e, t, n, a, r) {
    var i = t.mode, u = {
      mode: "visible",
      children: n
    }, o = Rp(u, i), l = ui(a, i, r, null);
    return l.flags |= Rt, o.return = t, l.return = t, o.sibling = l, t.child = o, (t.mode & Ae) !== ue && _u(t, e.child, null, r), l;
  }
  function U_(e, t, n) {
    return (e.mode & Ae) === ue ? (d("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = he) : Bd(t) ? e.lanes = Ci : e.lanes = Bn, null;
  }
  function k_(e, t, n, a, r, i, u) {
    if (n)
      if (t.flags & sr) {
        t.flags &= ~sr;
        var g = sp(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
        return kc(e, t, u, g);
      } else {
        if (t.memoizedState !== null)
          return t.child = e.child, t.flags |= qe, null;
        var x = a.children, b = a.fallback, A = L_(e, t, x, b, u), G = t.child;
        return G.memoizedState = Ep(u), t.memoizedState = Sp, A;
      }
    else {
      if (Ex(), (t.mode & Ae) === ue)
        return kc(
          e,
          t,
          u,
          // TODO: When we delete legacy mode, we should make this error argument
          // required — every concurrent mode path that causes hydration to
          // de-opt to client rendering should have an error message.
          null
        );
      if (Bd(r)) {
        var o, l, c;
        {
          var f = jD(r);
          o = f.digest, l = f.message, c = f.stack;
        }
        var y;
        l ? y = new Error(l) : y = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
        var m = sp(y, o, c);
        return kc(e, t, u, m);
      }
      var S = Yn(u, e.childLanes);
      if (_a || S) {
        var C = Gc();
        if (C !== null) {
          var D = PC(C, u);
          if (D !== Pt && D !== i.retryLane) {
            i.retryLane = D;
            var V = it;
            wn(e, D), zt(C, e, D, V);
          }
        }
        Pp();
        var re = sp(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
        return kc(e, t, u, re);
      } else if (by(r)) {
        t.flags |= qe, t.child = e.child;
        var Z = iO.bind(null, e);
        return FD(r, Z), null;
      } else {
        Tx(t, r, i.treeContext);
        var Ue = a.children, Oe = Cp(t, Ue);
        return Oe.flags |= cr, Oe;
      }
    }
  }
  function Kg(e, t, n) {
    e.lanes = Re(e.lanes, t);
    var a = e.alternate;
    a !== null && (a.lanes = Re(a.lanes, t)), vv(e.return, t, n);
  }
  function N_(e, t, n) {
    for (var a = t; a !== null; ) {
      if (a.tag === q) {
        var r = a.memoizedState;
        r !== null && Kg(a, n, e);
      } else if (a.tag === Ce)
        Kg(a, n, e);
      else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === e)
        return;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === e)
          return;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
  }
  function z_(e) {
    for (var t = e, n = null; t !== null; ) {
      var a = t.alternate;
      a !== null && dc(a) === null && (n = t), t = t.sibling;
    }
    return n;
  }
  function H_(e) {
    if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !mp[e])
      if (mp[e] = !0, typeof e == "string")
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
  function j_(e, t) {
    e !== void 0 && !Uc[e] && (e !== "collapsed" && e !== "hidden" ? (Uc[e] = !0, d('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Uc[e] = !0, d('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
  }
  function Jg(e, t) {
    {
      var n = Ge(e), a = !n && typeof Fn(e) == "function";
      if (n || a) {
        var r = n ? "array" : "iterable";
        return d("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", r, t, r), !1;
      }
    }
    return !0;
  }
  function F_(e, t) {
    if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
      if (Ge(e)) {
        for (var n = 0; n < e.length; n++)
          if (!Jg(e[n], n))
            return;
      } else {
        var a = Fn(e);
        if (typeof a == "function") {
          var r = a.call(e);
          if (r)
            for (var i = r.next(), u = 0; !i.done; i = r.next()) {
              if (!Jg(i.value, u))
                return;
              u++;
            }
        } else
          d('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
      }
  }
  function Tp(e, t, n, a, r) {
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
  function Zg(e, t, n) {
    var a = t.pendingProps, r = a.revealOrder, i = a.tail, u = a.children;
    H_(r), j_(i, r), F_(u, r), yn(e, t, u, n);
    var o = Ta.current, l = Cv(o, cl);
    if (l)
      o = Rv(o, cl), t.flags |= qe;
    else {
      var c = e !== null && (e.flags & qe) !== se;
      c && N_(t, t.child, n), o = Au(o);
    }
    if (Jr(t, o), (t.mode & Ae) === ue)
      t.memoizedState = null;
    else
      switch (r) {
        case "forwards": {
          var f = z_(t.child), y;
          f === null ? (y = t.child, t.child = null) : (y = f.sibling, f.sibling = null), Tp(
            t,
            !1,
            // isBackwards
            y,
            f,
            i
          );
          break;
        }
        case "backwards": {
          var m = null, S = t.child;
          for (t.child = null; S !== null; ) {
            var C = S.alternate;
            if (C !== null && dc(C) === null) {
              t.child = S;
              break;
            }
            var D = S.sibling;
            S.sibling = m, m = S, S = D;
          }
          Tp(
            t,
            !0,
            // isBackwards
            m,
            null,
            // last
            i
          );
          break;
        }
        case "together": {
          Tp(
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
  function V_(e, t, n) {
    bv(t, t.stateNode.containerInfo);
    var a = t.pendingProps;
    return e === null ? t.child = _u(t, null, a, n) : yn(e, t, a, n), t.child;
  }
  var eb = !1;
  function B_(e, t, n) {
    var a = t.type, r = a._context, i = t.pendingProps, u = t.memoizedProps, o = i.value;
    {
      "value" in i || eb || (eb = !0, d("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
      var l = t.type.propTypes;
      l && Ea(l, i, "prop", "Context.Provider");
    }
    if (qy(t, r, o), u !== null) {
      var c = u.value;
      if (Gn(c, o)) {
        if (u.children === i.children && !$s())
          return Cr(e, t, n);
      } else
        Hx(t, r, n);
    }
    var f = i.children;
    return yn(e, t, f, n), t.child;
  }
  var tb = !1;
  function Y_(e, t, n) {
    var a = t.type;
    a._context === void 0 ? a !== a.Consumer && (tb || (tb = !0, d("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
    var r = t.pendingProps, i = r.children;
    typeof i != "function" && d("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), wu(t, n);
    var u = Tt(a);
    bo(t);
    var o;
    return bl.current = t, Vn(!0), o = i(u), Vn(!1), lu(), t.flags |= iu, yn(e, t, o, n), t.child;
  }
  function Cl() {
    _a = !0;
  }
  function Nc(e, t) {
    (t.mode & Ae) === ue && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Rt);
  }
  function Cr(e, t, n) {
    return e !== null && (t.dependencies = e.dependencies), Mg(), kl(t.lanes), Yn(n, t.childLanes) ? (Nx(e, t), t.child) : null;
  }
  function $_(e, t, n) {
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
        for (; r.sibling !== t; )
          if (r = r.sibling, r === null)
            throw new Error("Expected to find the previous sibling.");
        r.sibling = n;
      }
      var i = a.deletions;
      return i === null ? (a.deletions = [e], a.flags |= mi) : i.push(e), n.flags |= Rt, n;
    }
  }
  function Dp(e, t) {
    var n = e.lanes;
    return !!Yn(n, t);
  }
  function P_(e, t, n) {
    switch (t.tag) {
      case P:
        Qg(t), t.stateNode, xu();
        break;
      case Q:
        eg(t);
        break;
      case N: {
        var a = t.type;
        Pa(a) && Gs(t);
        break;
      }
      case ae:
        bv(t, t.stateNode.containerInfo);
        break;
      case H: {
        var r = t.memoizedProps.value, i = t.type._context;
        qy(t, i, r);
        break;
      }
      case ee:
        {
          var u = Yn(n, t.childLanes);
          u && (t.flags |= Ne);
          {
            var o = t.stateNode;
            o.effectDuration = 0, o.passiveEffectDuration = 0;
          }
        }
        break;
      case q: {
        var l = t.memoizedState;
        if (l !== null) {
          if (l.dehydrated !== null)
            return Jr(t, Au(Ta.current)), t.flags |= qe, null;
          var c = t.child, f = c.childLanes;
          if (Yn(n, f))
            return Xg(e, t, n);
          Jr(t, Au(Ta.current));
          var y = Cr(e, t, n);
          return y !== null ? y.sibling : null;
        } else
          Jr(t, Au(Ta.current));
        break;
      }
      case Ce: {
        var m = (e.flags & qe) !== se, S = Yn(n, t.childLanes);
        if (m) {
          if (S)
            return Zg(e, t, n);
          t.flags |= qe;
        }
        var C = t.memoizedState;
        if (C !== null && (C.rendering = null, C.tail = null, C.lastEffect = null), Jr(t, Ta.current), S)
          break;
        return null;
      }
      case Te:
      case Pe:
        return t.lanes = O, Pg(e, t, n);
    }
    return Cr(e, t, n);
  }
  function nb(e, t, n) {
    if (t._debugNeedsRemount && e !== null)
      return $_(e, t, th(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
    if (e !== null) {
      var a = e.memoizedProps, r = t.pendingProps;
      if (a !== r || $s() || // Force a re-render if the implementation changed due to hot reload:
      t.type !== e.type)
        _a = !0;
      else {
        var i = Dp(e, n);
        if (!i && // If this is the second pass of an error or suspense boundary, there
        // may not be work scheduled on `current`, so we check for this flag.
        (t.flags & qe) === se)
          return _a = !1, P_(e, t, n);
        (e.flags & Af) !== se ? _a = !0 : _a = !1;
      }
    } else if (_a = !1, Xt() && hx(t)) {
      var u = t.index, o = mx();
      My(t, o, u);
    }
    switch (t.lanes = O, t.tag) {
      case Ve:
        return D_(e, t, t.type, n);
      case ke: {
        var l = t.elementType;
        return R_(e, t, l, n);
      }
      case ne: {
        var c = t.type, f = t.pendingProps, y = t.elementType === c ? f : xa(c, f);
        return yp(e, t, c, y, n);
      }
      case N: {
        var m = t.type, S = t.pendingProps, C = t.elementType === m ? S : xa(m, S);
        return qg(e, t, m, C, n);
      }
      case P:
        return S_(e, t, n);
      case Q:
        return E_(e, t, n);
      case de:
        return C_(e, t);
      case q:
        return Xg(e, t, n);
      case ae:
        return V_(e, t, n);
      case X: {
        var D = t.type, V = t.pendingProps, re = t.elementType === D ? V : xa(D, V);
        return Bg(e, t, D, re, n);
      }
      case I:
        return y_(e, t, n);
      case j:
        return g_(e, t, n);
      case ee:
        return b_(e, t, n);
      case H:
        return B_(e, t, n);
      case w:
        return Y_(e, t, n);
      case ye: {
        var Z = t.type, Ue = t.pendingProps, Oe = xa(Z, Ue);
        if (t.type !== t.elementType) {
          var g = Z.propTypes;
          g && Ea(
            g,
            Oe,
            // Resolved for outer only
            "prop",
            je(Z)
          );
        }
        return Oe = xa(Z.type, Oe), Yg(e, t, Z, Oe, n);
      }
      case ie:
        return $g(e, t, t.type, t.pendingProps, n);
      case ve: {
        var x = t.type, b = t.pendingProps, A = t.elementType === x ? b : xa(x, b);
        return T_(e, t, x, A, n);
      }
      case Ce:
        return Zg(e, t, n);
      case Ht:
        break;
      case Te:
        return Pg(e, t, n);
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function Hu(e) {
    e.flags |= Ne;
  }
  function ab(e) {
    e.flags |= jr, e.flags |= Lf;
  }
  var rb, xp, ib, ub;
  rb = function(e, t, n, a) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === Q || r.tag === de)
        dD(e, r.stateNode);
      else if (r.tag !== ae) {
        if (r.child !== null) {
          r.child.return = r, r = r.child;
          continue;
        }
      }
      if (r === t)
        return;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t)
          return;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
  }, xp = function(e, t) {
  }, ib = function(e, t, n, a, r) {
    var i = e.memoizedProps;
    if (i !== a) {
      var u = t.stateNode, o = Sv(), l = pD(u, n, i, a, r, o);
      t.updateQueue = l, l && Hu(t);
    }
  }, ub = function(e, t, n, a) {
    n !== a && Hu(t);
  };
  function Rl(e, t) {
    if (!Xt())
      switch (e.tailMode) {
        case "hidden": {
          for (var n = e.tail, a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        }
        case "collapsed": {
          for (var r = e.tail, i = null; r !== null; )
            r.alternate !== null && (i = r), r = r.sibling;
          i === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : i.sibling = null;
          break;
        }
      }
  }
  function Kt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = O, a = se;
    if (t) {
      if ((e.mode & Ke) !== ue) {
        for (var l = e.selfBaseDuration, c = e.child; c !== null; )
          n = Re(n, Re(c.lanes, c.childLanes)), a |= c.subtreeFlags & dr, a |= c.flags & dr, l += c.treeBaseDuration, c = c.sibling;
        e.treeBaseDuration = l;
      } else
        for (var f = e.child; f !== null; )
          n = Re(n, Re(f.lanes, f.childLanes)), a |= f.subtreeFlags & dr, a |= f.flags & dr, f.return = e, f = f.sibling;
      e.subtreeFlags |= a;
    } else {
      if ((e.mode & Ke) !== ue) {
        for (var r = e.actualDuration, i = e.selfBaseDuration, u = e.child; u !== null; )
          n = Re(n, Re(u.lanes, u.childLanes)), a |= u.subtreeFlags, a |= u.flags, r += u.actualDuration, i += u.treeBaseDuration, u = u.sibling;
        e.actualDuration = r, e.treeBaseDuration = i;
      } else
        for (var o = e.child; o !== null; )
          n = Re(n, Re(o.lanes, o.childLanes)), a |= o.subtreeFlags, a |= o.flags, o.return = e, o = o.sibling;
      e.subtreeFlags |= a;
    }
    return e.childLanes = n, t;
  }
  function G_(e, t, n) {
    if (wx() && (t.mode & Ae) !== ue && (t.flags & qe) === se)
      return Hy(t), xu(), t.flags |= sr | yo | mn, !1;
    var a = Is(t);
    if (n !== null && n.dehydrated !== null)
      if (e === null) {
        if (!a)
          throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
        if (_x(t), Kt(t), (t.mode & Ke) !== ue) {
          var r = n !== null;
          if (r) {
            var i = t.child;
            i !== null && (t.treeBaseDuration -= i.treeBaseDuration);
          }
        }
        return !1;
      } else {
        if (xu(), (t.flags & qe) === se && (t.memoizedState = null), t.flags |= Ne, Kt(t), (t.mode & Ke) !== ue) {
          var u = n !== null;
          if (u) {
            var o = t.child;
            o !== null && (t.treeBaseDuration -= o.treeBaseDuration);
          }
        }
        return !1;
      }
    else
      return jy(), !0;
  }
  function ob(e, t, n) {
    var a = t.pendingProps;
    switch (Jd(t), t.tag) {
      case Ve:
      case ke:
      case ie:
      case ne:
      case X:
      case I:
      case j:
      case ee:
      case w:
      case ye:
        return Kt(t), null;
      case N: {
        var r = t.type;
        return Pa(r) && Ps(t), Kt(t), null;
      }
      case P: {
        var i = t.stateNode;
        if (Mu(t), Wd(t), Dv(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), e === null || e.child === null) {
          var u = Is(t);
          if (u)
            Hu(t);
          else if (e !== null) {
            var o = e.memoizedState;
            // Check if this is a client root
            (!o.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
            (t.flags & sr) !== se) && (t.flags |= yi, jy());
          }
        }
        return xp(e, t), Kt(t), null;
      }
      case Q: {
        Ev(t);
        var l = Zy(), c = t.type;
        if (e !== null && t.stateNode != null)
          ib(e, t, c, a, l), e.ref !== t.ref && ab(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            return Kt(t), null;
          }
          var f = Sv(), y = Is(t);
          if (y)
            Dx(t, l, f) && Hu(t);
          else {
            var m = fD(c, a, l, f, t);
            rb(m, t, !1, !1), t.stateNode = m, vD(m, c, a, l) && Hu(t);
          }
          t.ref !== null && ab(t);
        }
        return Kt(t), null;
      }
      case de: {
        var S = a;
        if (e && t.stateNode != null) {
          var C = e.memoizedProps;
          ub(e, t, C, S);
        } else {
          if (typeof S != "string" && t.stateNode === null)
            throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
          var D = Zy(), V = Sv(), re = Is(t);
          re ? xx(t) && Hu(t) : t.stateNode = hD(S, D, V, t);
        }
        return Kt(t), null;
      }
      case q: {
        Lu(t);
        var Z = t.memoizedState;
        if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          var Ue = G_(e, t, Z);
          if (!Ue)
            return t.flags & mn ? t : null;
        }
        if ((t.flags & qe) !== se)
          return t.lanes = n, (t.mode & Ke) !== ue && Iv(t), t;
        var Oe = Z !== null, g = e !== null && e.memoizedState !== null;
        if (Oe !== g && Oe) {
          var x = t.child;
          if (x.flags |= gi, (t.mode & Ae) !== ue) {
            var b = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !fa);
            b || Cv(Ta.current, ng) ? q0() : Pp();
          }
        }
        var A = t.updateQueue;
        if (A !== null && (t.flags |= Ne), Kt(t), (t.mode & Ke) !== ue && Oe) {
          var G = t.child;
          G !== null && (t.treeBaseDuration -= G.treeBaseDuration);
        }
        return null;
      }
      case ae:
        return Mu(t), xp(e, t), e === null && lx(t.stateNode.containerInfo), Kt(t), null;
      case H:
        var B = t.type._context;
        return dv(B, t), Kt(t), null;
      case ve: {
        var fe = t.type;
        return Pa(fe) && Ps(t), Kt(t), null;
      }
      case Ce: {
        Lu(t);
        var ge = t.memoizedState;
        if (ge === null)
          return Kt(t), null;
        var Ze = (t.flags & qe) !== se, Be = ge.rendering;
        if (Be === null)
          if (Ze)
            Rl(ge, !1);
          else {
            var St = W0() && (e === null || (e.flags & qe) === se);
            if (!St)
              for (var Ye = t.child; Ye !== null; ) {
                var ht = dc(Ye);
                if (ht !== null) {
                  Ze = !0, t.flags |= qe, Rl(ge, !1);
                  var dn = ht.updateQueue;
                  return dn !== null && (t.updateQueue = dn, t.flags |= Ne), t.subtreeFlags = se, zx(t, n), Jr(t, Rv(Ta.current, cl)), t.child;
                }
                Ye = Ye.sibling;
              }
            ge.tail !== null && Yt() > Ob() && (t.flags |= qe, Ze = !0, Rl(ge, !1), t.lanes = um);
          }
        else {
          if (!Ze) {
            var nn = dc(Be);
            if (nn !== null) {
              t.flags |= qe, Ze = !0;
              var Wn = nn.updateQueue;
              if (Wn !== null && (t.updateQueue = Wn, t.flags |= Ne), Rl(ge, !0), ge.tail === null && ge.tailMode === "hidden" && !Be.alternate && !Xt())
                return Kt(t), null;
            } else // The time it took to render last row is greater than the remaining
            // time we have to render. So rendering one more row would likely
            // exceed it.
            Yt() * 2 - ge.renderingStartTime > Ob() && n !== Bn && (t.flags |= qe, Ze = !0, Rl(ge, !1), t.lanes = um);
          }
          if (ge.isBackwards)
            Be.sibling = t.child, t.child = Be;
          else {
            var Sn = ge.last;
            Sn !== null ? Sn.sibling = Be : t.child = Be, ge.last = Be;
          }
        }
        if (ge.tail !== null) {
          var En = ge.tail;
          ge.rendering = En, ge.tail = En.sibling, ge.renderingStartTime = Yt(), En.sibling = null;
          var vn = Ta.current;
          return Ze ? vn = Rv(vn, cl) : vn = Au(vn), Jr(t, vn), En;
        }
        return Kt(t), null;
      }
      case Ht:
        break;
      case Te:
      case Pe: {
        $p(t);
        var _r = t.memoizedState, Gu = _r !== null;
        if (e !== null) {
          var Fl = e.memoizedState, Ja = Fl !== null;
          Ja !== Gu && // LegacyHidden doesn't do any hiding — it only pre-renders.
          !In && (t.flags |= gi);
        }
        return !Gu || (t.mode & Ae) === ue ? Kt(t) : Yn(Ka, Bn) && (Kt(t), t.subtreeFlags & (Rt | Ne) && (t.flags |= gi)), null;
      }
      case mt:
        return null;
      case yt:
        return null;
    }
    throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function q_(e, t, n) {
    switch (Jd(t), t.tag) {
      case N: {
        var a = t.type;
        Pa(a) && Ps(t);
        var r = t.flags;
        return r & mn ? (t.flags = r & ~mn | qe, (t.mode & Ke) !== ue && Iv(t), t) : null;
      }
      case P: {
        t.stateNode, Mu(t), Wd(t), Dv();
        var i = t.flags;
        return (i & mn) !== se && (i & qe) === se ? (t.flags = i & ~mn | qe, t) : null;
      }
      case Q:
        return Ev(t), null;
      case q: {
        Lu(t);
        var u = t.memoizedState;
        if (u !== null && u.dehydrated !== null) {
          if (t.alternate === null)
            throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
          xu();
        }
        var o = t.flags;
        return o & mn ? (t.flags = o & ~mn | qe, (t.mode & Ke) !== ue && Iv(t), t) : null;
      }
      case Ce:
        return Lu(t), null;
      case ae:
        return Mu(t), null;
      case H:
        var l = t.type._context;
        return dv(l, t), null;
      case Te:
      case Pe:
        return $p(t), null;
      case mt:
        return null;
      default:
        return null;
    }
  }
  function lb(e, t, n) {
    switch (Jd(t), t.tag) {
      case N: {
        var a = t.type.childContextTypes;
        a != null && Ps(t);
        break;
      }
      case P: {
        t.stateNode, Mu(t), Wd(t), Dv();
        break;
      }
      case Q: {
        Ev(t);
        break;
      }
      case ae:
        Mu(t);
        break;
      case q:
        Lu(t);
        break;
      case Ce:
        Lu(t);
        break;
      case H:
        var r = t.type._context;
        dv(r, t);
        break;
      case Te:
      case Pe:
        $p(t);
        break;
    }
  }
  var sb = null;
  sb = /* @__PURE__ */ new Set();
  var zc = !1, Jt = !1, Q_ = typeof WeakSet == "function" ? WeakSet : Set, K = null, ju = null, Fu = null;
  function W_(e) {
    Of(null, function() {
      throw e;
    }), wf();
  }
  var X_ = function(e, t) {
    if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ke)
      try {
        Xa(), t.componentWillUnmount();
      } finally {
        Wa(e);
      }
    else
      t.componentWillUnmount();
  };
  function cb(e, t) {
    try {
      ti(Mt, e);
    } catch (n) {
      at(e, t, n);
    }
  }
  function _p(e, t, n) {
    try {
      X_(e, n);
    } catch (a) {
      at(e, t, a);
    }
  }
  function I_(e, t, n) {
    try {
      n.componentDidMount();
    } catch (a) {
      at(e, t, a);
    }
  }
  function fb(e, t) {
    try {
      vb(e);
    } catch (n) {
      at(e, t, n);
    }
  }
  function Vu(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function") {
        var a;
        try {
          if (da && va && e.mode & Ke)
            try {
              Xa(), a = n(null);
            } finally {
              Wa(e);
            }
          else
            a = n(null);
        } catch (r) {
          at(e, t, r);
        }
        typeof a == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", be(e));
      } else
        n.current = null;
  }
  function Hc(e, t, n) {
    try {
      n();
    } catch (a) {
      at(e, t, a);
    }
  }
  var db = !1;
  function K_(e, t) {
    sD(e.containerInfo), K = t, J_();
    var n = db;
    return db = !1, n;
  }
  function J_() {
    for (; K !== null; ) {
      var e = K, t = e.child;
      (e.subtreeFlags & kf) !== se && t !== null ? (t.return = e, K = t) : Z_();
    }
  }
  function Z_() {
    for (; K !== null; ) {
      var e = K;
      ft(e);
      try {
        e0(e);
      } catch (n) {
        at(e, e.return, n);
      }
      Bt();
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, K = t;
        return;
      }
      K = e.return;
    }
  }
  function e0(e) {
    var t = e.alternate, n = e.flags;
    if ((n & yi) !== se) {
      switch (ft(e), e.tag) {
        case ne:
        case X:
        case ie:
          break;
        case N: {
          if (t !== null) {
            var a = t.memoizedProps, r = t.memoizedState, i = e.stateNode;
            e.type === e.elementType && !ji && (i.props !== e.memoizedProps && d("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", be(e) || "instance"), i.state !== e.memoizedState && d("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", be(e) || "instance"));
            var u = i.getSnapshotBeforeUpdate(e.elementType === e.type ? a : xa(e.type, a), r);
            {
              var o = sb;
              u === void 0 && !o.has(e.type) && (o.add(e.type), d("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", be(e)));
            }
            i.__reactInternalSnapshotBeforeUpdate = u;
          }
          break;
        }
        case P: {
          {
            var l = e.stateNode;
            kD(l.containerInfo);
          }
          break;
        }
        case Q:
        case de:
        case ae:
        case ve:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
      Bt();
    }
  }
  function Oa(e, t, n) {
    var a = t.updateQueue, r = a !== null ? a.lastEffect : null;
    if (r !== null) {
      var i = r.next, u = i;
      do {
        if ((u.tag & e) === e) {
          var o = u.destroy;
          u.destroy = void 0, o !== void 0 && ((e & It) !== Mn ? hC(t) : (e & Mt) !== Mn && tm(t), (e & Ga) !== Mn && zl(!0), Hc(t, n, o), (e & Ga) !== Mn && zl(!1), (e & It) !== Mn ? mC() : (e & Mt) !== Mn && nm());
        }
        u = u.next;
      } while (u !== i);
    }
  }
  function ti(e, t) {
    var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
    if (a !== null) {
      var r = a.next, i = r;
      do {
        if ((i.tag & e) === e) {
          (e & It) !== Mn ? vC(t) : (e & Mt) !== Mn && yC(t);
          var u = i.create;
          (e & Ga) !== Mn && zl(!0), i.destroy = u(), (e & Ga) !== Mn && zl(!1), (e & It) !== Mn ? pC() : (e & Mt) !== Mn && gC();
          {
            var o = i.destroy;
            if (o !== void 0 && typeof o != "function") {
              var l = void 0;
              (i.tag & Mt) !== se ? l = "useLayoutEffect" : (i.tag & Ga) !== se ? l = "useInsertionEffect" : l = "useEffect";
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
  function t0(e, t) {
    if ((t.flags & Ne) !== se)
      switch (t.tag) {
        case ee: {
          var n = t.stateNode.passiveEffectDuration, a = t.memoizedProps, r = a.id, i = a.onPostCommit, u = Og(), o = t.alternate === null ? "mount" : "update";
          _g() && (o = "nested-update"), typeof i == "function" && i(r, o, n, u);
          var l = t.return;
          e: for (; l !== null; ) {
            switch (l.tag) {
              case P:
                var c = l.stateNode;
                c.passiveEffectDuration += n;
                break e;
              case ee:
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
  function n0(e, t, n, a) {
    if ((n.flags & go) !== se)
      switch (n.tag) {
        case ne:
        case X:
        case ie: {
          if (!Jt)
            if (n.mode & Ke)
              try {
                Xa(), ti(Mt | wt, n);
              } finally {
                Wa(n);
              }
            else
              ti(Mt | wt, n);
          break;
        }
        case N: {
          var r = n.stateNode;
          if (n.flags & Ne && !Jt)
            if (t === null)
              if (n.type === n.elementType && !ji && (r.props !== n.memoizedProps && d("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", be(n) || "instance"), r.state !== n.memoizedState && d("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", be(n) || "instance")), n.mode & Ke)
                try {
                  Xa(), r.componentDidMount();
                } finally {
                  Wa(n);
                }
              else
                r.componentDidMount();
            else {
              var i = n.elementType === n.type ? t.memoizedProps : xa(n.type, t.memoizedProps), u = t.memoizedState;
              if (n.type === n.elementType && !ji && (r.props !== n.memoizedProps && d("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", be(n) || "instance"), r.state !== n.memoizedState && d("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", be(n) || "instance")), n.mode & Ke)
                try {
                  Xa(), r.componentDidUpdate(i, u, r.__reactInternalSnapshotBeforeUpdate);
                } finally {
                  Wa(n);
                }
              else
                r.componentDidUpdate(i, u, r.__reactInternalSnapshotBeforeUpdate);
            }
          var o = n.updateQueue;
          o !== null && (n.type === n.elementType && !ji && (r.props !== n.memoizedProps && d("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", be(n) || "instance"), r.state !== n.memoizedState && d("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", be(n) || "instance")), Jy(n, o, r));
          break;
        }
        case P: {
          var l = n.updateQueue;
          if (l !== null) {
            var c = null;
            if (n.child !== null)
              switch (n.child.tag) {
                case Q:
                  c = n.child.stateNode;
                  break;
                case N:
                  c = n.child.stateNode;
                  break;
              }
            Jy(n, l, c);
          }
          break;
        }
        case Q: {
          var f = n.stateNode;
          if (t === null && n.flags & Ne) {
            var y = n.type, m = n.memoizedProps;
            SD(f, y, m);
          }
          break;
        }
        case de:
          break;
        case ae:
          break;
        case ee: {
          {
            var S = n.memoizedProps, C = S.onCommit, D = S.onRender, V = n.stateNode.effectDuration, re = Og(), Z = t === null ? "mount" : "update";
            _g() && (Z = "nested-update"), typeof D == "function" && D(n.memoizedProps.id, Z, n.actualDuration, n.treeBaseDuration, n.actualStartTime, re);
            {
              typeof C == "function" && C(n.memoizedProps.id, Z, V, re), Z0(n);
              var Ue = n.return;
              e: for (; Ue !== null; ) {
                switch (Ue.tag) {
                  case P:
                    var Oe = Ue.stateNode;
                    Oe.effectDuration += V;
                    break e;
                  case ee:
                    var g = Ue.stateNode;
                    g.effectDuration += V;
                    break e;
                }
                Ue = Ue.return;
              }
            }
          }
          break;
        }
        case q: {
          c0(e, n);
          break;
        }
        case Ce:
        case ve:
        case Ht:
        case Te:
        case Pe:
        case yt:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
    Jt || n.flags & jr && vb(n);
  }
  function a0(e) {
    switch (e.tag) {
      case ne:
      case X:
      case ie: {
        if (e.mode & Ke)
          try {
            Xa(), cb(e, e.return);
          } finally {
            Wa(e);
          }
        else
          cb(e, e.return);
        break;
      }
      case N: {
        var t = e.stateNode;
        typeof t.componentDidMount == "function" && I_(e, e.return, t), fb(e, e.return);
        break;
      }
      case Q: {
        fb(e, e.return);
        break;
      }
    }
  }
  function r0(e, t) {
    for (var n = null, a = e; ; ) {
      if (a.tag === Q) {
        if (n === null) {
          n = a;
          try {
            var r = a.stateNode;
            t ? MD(r) : LD(a.stateNode, a.memoizedProps);
          } catch (u) {
            at(e, e.return, u);
          }
        }
      } else if (a.tag === de) {
        if (n === null)
          try {
            var i = a.stateNode;
            t ? AD(i) : UD(i, a.memoizedProps);
          } catch (u) {
            at(e, e.return, u);
          }
      } else if (!((a.tag === Te || a.tag === Pe) && a.memoizedState !== null && a !== e)) {
        if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
      }
      if (a === e)
        return;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === e)
          return;
        n === a && (n = null), a = a.return;
      }
      n === a && (n = null), a.sibling.return = a.return, a = a.sibling;
    }
  }
  function vb(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode, a;
      switch (e.tag) {
        case Q:
          a = n;
          break;
        default:
          a = n;
      }
      if (typeof t == "function") {
        var r;
        if (e.mode & Ke)
          try {
            Xa(), r = t(a);
          } finally {
            Wa(e);
          }
        else
          r = t(a);
        typeof r == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", be(e));
      } else
        t.hasOwnProperty("current") || d("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", be(e)), t.current = a;
    }
  }
  function i0(e) {
    var t = e.alternate;
    t !== null && (t.return = null), e.return = null;
  }
  function pb(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, pb(t));
    {
      if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Q) {
        var n = e.stateNode;
        n !== null && fx(n);
      }
      e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
  }
  function u0(e) {
    for (var t = e.return; t !== null; ) {
      if (hb(t))
        return t;
      t = t.return;
    }
    throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
  }
  function hb(e) {
    return e.tag === Q || e.tag === P || e.tag === ae;
  }
  function mb(e) {
    var t = e;
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || hb(t.return))
          return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== Q && t.tag !== de && t.tag !== ze; ) {
        if (t.flags & Rt || t.child === null || t.tag === ae)
          continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & Rt))
        return t.stateNode;
    }
  }
  function o0(e) {
    var t = u0(e);
    switch (t.tag) {
      case Q: {
        var n = t.stateNode;
        t.flags & mo && (gy(n), t.flags &= ~mo);
        var a = mb(e);
        wp(e, a, n);
        break;
      }
      case P:
      case ae: {
        var r = t.stateNode.containerInfo, i = mb(e);
        Op(e, i, r);
        break;
      }
      default:
        throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  function Op(e, t, n) {
    var a = e.tag, r = a === Q || a === de;
    if (r) {
      var i = e.stateNode;
      t ? xD(n, i, t) : TD(n, i);
    } else if (a !== ae) {
      var u = e.child;
      if (u !== null) {
        Op(u, t, n);
        for (var o = u.sibling; o !== null; )
          Op(o, t, n), o = o.sibling;
      }
    }
  }
  function wp(e, t, n) {
    var a = e.tag, r = a === Q || a === de;
    if (r) {
      var i = e.stateNode;
      t ? DD(n, i, t) : RD(n, i);
    } else if (a !== ae) {
      var u = e.child;
      if (u !== null) {
        wp(u, t, n);
        for (var o = u.sibling; o !== null; )
          wp(o, t, n), o = o.sibling;
      }
    }
  }
  var Zt = null, wa = !1;
  function l0(e, t, n) {
    {
      var a = t;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case Q: {
            Zt = a.stateNode, wa = !1;
            break e;
          }
          case P: {
            Zt = a.stateNode.containerInfo, wa = !0;
            break e;
          }
          case ae: {
            Zt = a.stateNode.containerInfo, wa = !0;
            break e;
          }
        }
        a = a.return;
      }
      if (Zt === null)
        throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
      yb(e, t, n), Zt = null, wa = !1;
    }
    i0(n);
  }
  function ni(e, t, n) {
    for (var a = n.child; a !== null; )
      yb(e, t, a), a = a.sibling;
  }
  function yb(e, t, n) {
    switch (sC(n), n.tag) {
      case Q:
        Jt || Vu(n, t);
      case de: {
        {
          var a = Zt, r = wa;
          Zt = null, ni(e, t, n), Zt = a, wa = r, Zt !== null && (wa ? OD(Zt, n.stateNode) : _D(Zt, n.stateNode));
        }
        return;
      }
      case ze: {
        Zt !== null && (wa ? wD(Zt, n.stateNode) : Vd(Zt, n.stateNode));
        return;
      }
      case ae: {
        {
          var i = Zt, u = wa;
          Zt = n.stateNode.containerInfo, wa = !0, ni(e, t, n), Zt = i, wa = u;
        }
        return;
      }
      case ne:
      case X:
      case ye:
      case ie: {
        if (!Jt) {
          var o = n.updateQueue;
          if (o !== null) {
            var l = o.lastEffect;
            if (l !== null) {
              var c = l.next, f = c;
              do {
                var y = f, m = y.destroy, S = y.tag;
                m !== void 0 && ((S & Ga) !== Mn ? Hc(n, t, m) : (S & Mt) !== Mn && (tm(n), n.mode & Ke ? (Xa(), Hc(n, t, m), Wa(n)) : Hc(n, t, m), nm())), f = f.next;
              } while (f !== c);
            }
          }
        }
        ni(e, t, n);
        return;
      }
      case N: {
        if (!Jt) {
          Vu(n, t);
          var C = n.stateNode;
          typeof C.componentWillUnmount == "function" && _p(n, t, C);
        }
        ni(e, t, n);
        return;
      }
      case Ht: {
        ni(e, t, n);
        return;
      }
      case Te: {
        if (
          // TODO: Remove this dead flag
          n.mode & Ae
        ) {
          var D = Jt;
          Jt = D || n.memoizedState !== null, ni(e, t, n), Jt = D;
        } else
          ni(e, t, n);
        break;
      }
      default: {
        ni(e, t, n);
        return;
      }
    }
  }
  function s0(e) {
    e.memoizedState;
  }
  function c0(e, t) {
    var n = t.memoizedState;
    if (n === null) {
      var a = t.alternate;
      if (a !== null) {
        var r = a.memoizedState;
        if (r !== null) {
          var i = r.dehydrated;
          i !== null && WD(i);
        }
      }
    }
  }
  function gb(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Q_()), t.forEach(function(a) {
        var r = uO.bind(null, e, a);
        if (!n.has(a)) {
          if (n.add(a), ba)
            if (ju !== null && Fu !== null)
              Nl(Fu, ju);
            else
              throw Error("Expected finished root and lanes to be set. This is a bug in React.");
          a.then(r, r);
        }
      });
    }
  }
  function f0(e, t, n) {
    ju = n, Fu = e, ft(t), bb(t, e), ft(t), ju = null, Fu = null;
  }
  function Ma(e, t, n) {
    var a = t.deletions;
    if (a !== null)
      for (var r = 0; r < a.length; r++) {
        var i = a[r];
        try {
          l0(e, t, i);
        } catch (l) {
          at(i, t, l);
        }
      }
    var u = Ql();
    if (t.subtreeFlags & Nf)
      for (var o = t.child; o !== null; )
        ft(o), bb(o, e), o = o.sibling;
    ft(u);
  }
  function bb(e, t, n) {
    var a = e.alternate, r = e.flags;
    switch (e.tag) {
      case ne:
      case X:
      case ye:
      case ie: {
        if (Ma(t, e), Ia(e), r & Ne) {
          try {
            Oa(Ga | wt, e, e.return), ti(Ga | wt, e);
          } catch (fe) {
            at(e, e.return, fe);
          }
          if (e.mode & Ke) {
            try {
              Xa(), Oa(Mt | wt, e, e.return);
            } catch (fe) {
              at(e, e.return, fe);
            }
            Wa(e);
          } else
            try {
              Oa(Mt | wt, e, e.return);
            } catch (fe) {
              at(e, e.return, fe);
            }
        }
        return;
      }
      case N: {
        Ma(t, e), Ia(e), r & jr && a !== null && Vu(a, a.return);
        return;
      }
      case Q: {
        Ma(t, e), Ia(e), r & jr && a !== null && Vu(a, a.return);
        {
          if (e.flags & mo) {
            var i = e.stateNode;
            try {
              gy(i);
            } catch (fe) {
              at(e, e.return, fe);
            }
          }
          if (r & Ne) {
            var u = e.stateNode;
            if (u != null) {
              var o = e.memoizedProps, l = a !== null ? a.memoizedProps : o, c = e.type, f = e.updateQueue;
              if (e.updateQueue = null, f !== null)
                try {
                  ED(u, f, c, l, o, e);
                } catch (fe) {
                  at(e, e.return, fe);
                }
            }
          }
        }
        return;
      }
      case de: {
        if (Ma(t, e), Ia(e), r & Ne) {
          if (e.stateNode === null)
            throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var y = e.stateNode, m = e.memoizedProps, S = a !== null ? a.memoizedProps : m;
          try {
            CD(y, S, m);
          } catch (fe) {
            at(e, e.return, fe);
          }
        }
        return;
      }
      case P: {
        if (Ma(t, e), Ia(e), r & Ne && a !== null) {
          var C = a.memoizedState;
          if (C.isDehydrated)
            try {
              QD(t.containerInfo);
            } catch (fe) {
              at(e, e.return, fe);
            }
        }
        return;
      }
      case ae: {
        Ma(t, e), Ia(e);
        return;
      }
      case q: {
        Ma(t, e), Ia(e);
        var D = e.child;
        if (D.flags & gi) {
          var V = D.stateNode, re = D.memoizedState, Z = re !== null;
          if (V.isHidden = Z, Z) {
            var Ue = D.alternate !== null && D.alternate.memoizedState !== null;
            Ue || G0();
          }
        }
        if (r & Ne) {
          try {
            s0(e);
          } catch (fe) {
            at(e, e.return, fe);
          }
          gb(e);
        }
        return;
      }
      case Te: {
        var Oe = a !== null && a.memoizedState !== null;
        if (
          // TODO: Remove this dead flag
          e.mode & Ae
        ) {
          var g = Jt;
          Jt = g || Oe, Ma(t, e), Jt = g;
        } else
          Ma(t, e);
        if (Ia(e), r & gi) {
          var x = e.stateNode, b = e.memoizedState, A = b !== null, G = e;
          if (x.isHidden = A, A && !Oe && (G.mode & Ae) !== ue) {
            K = G;
            for (var B = G.child; B !== null; )
              K = B, v0(B), B = B.sibling;
          }
          r0(G, A);
        }
        return;
      }
      case Ce: {
        Ma(t, e), Ia(e), r & Ne && gb(e);
        return;
      }
      case Ht:
        return;
      default: {
        Ma(t, e), Ia(e);
        return;
      }
    }
  }
  function Ia(e) {
    var t = e.flags;
    if (t & Rt) {
      try {
        o0(e);
      } catch (n) {
        at(e, e.return, n);
      }
      e.flags &= ~Rt;
    }
    t & cr && (e.flags &= ~cr);
  }
  function d0(e, t, n) {
    ju = n, Fu = t, K = e, Sb(e, t, n), ju = null, Fu = null;
  }
  function Sb(e, t, n) {
    for (var a = (e.mode & Ae) !== ue; K !== null; ) {
      var r = K, i = r.child;
      if (r.tag === Te && a) {
        var u = r.memoizedState !== null, o = u || zc;
        if (o) {
          Mp(e, t, n);
          continue;
        } else {
          var l = r.alternate, c = l !== null && l.memoizedState !== null, f = c || Jt, y = zc, m = Jt;
          zc = o, Jt = f, Jt && !m && (K = r, p0(r));
          for (var S = i; S !== null; )
            K = S, Sb(
              S,
              // New root; bubble back up to here and stop.
              t,
              n
            ), S = S.sibling;
          K = r, zc = y, Jt = m, Mp(e, t, n);
          continue;
        }
      }
      (r.subtreeFlags & go) !== se && i !== null ? (i.return = r, K = i) : Mp(e, t, n);
    }
  }
  function Mp(e, t, n) {
    for (; K !== null; ) {
      var a = K;
      if ((a.flags & go) !== se) {
        var r = a.alternate;
        ft(a);
        try {
          n0(t, r, a, n);
        } catch (u) {
          at(a, a.return, u);
        }
        Bt();
      }
      if (a === e) {
        K = null;
        return;
      }
      var i = a.sibling;
      if (i !== null) {
        i.return = a.return, K = i;
        return;
      }
      K = a.return;
    }
  }
  function v0(e) {
    for (; K !== null; ) {
      var t = K, n = t.child;
      switch (t.tag) {
        case ne:
        case X:
        case ye:
        case ie: {
          if (t.mode & Ke)
            try {
              Xa(), Oa(Mt, t, t.return);
            } finally {
              Wa(t);
            }
          else
            Oa(Mt, t, t.return);
          break;
        }
        case N: {
          Vu(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && _p(t, t.return, a);
          break;
        }
        case Q: {
          Vu(t, t.return);
          break;
        }
        case Te: {
          var r = t.memoizedState !== null;
          if (r) {
            Eb(e);
            continue;
          }
          break;
        }
      }
      n !== null ? (n.return = t, K = n) : Eb(e);
    }
  }
  function Eb(e) {
    for (; K !== null; ) {
      var t = K;
      if (t === e) {
        K = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, K = n;
        return;
      }
      K = t.return;
    }
  }
  function p0(e) {
    for (; K !== null; ) {
      var t = K, n = t.child;
      if (t.tag === Te) {
        var a = t.memoizedState !== null;
        if (a) {
          Cb(e);
          continue;
        }
      }
      n !== null ? (n.return = t, K = n) : Cb(e);
    }
  }
  function Cb(e) {
    for (; K !== null; ) {
      var t = K;
      ft(t);
      try {
        a0(t);
      } catch (a) {
        at(t, t.return, a);
      }
      if (Bt(), t === e) {
        K = null;
        return;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, K = n;
        return;
      }
      K = t.return;
    }
  }
  function h0(e, t, n, a) {
    K = t, m0(t, e, n, a);
  }
  function m0(e, t, n, a) {
    for (; K !== null; ) {
      var r = K, i = r.child;
      (r.subtreeFlags & uu) !== se && i !== null ? (i.return = r, K = i) : y0(e, t, n, a);
    }
  }
  function y0(e, t, n, a) {
    for (; K !== null; ) {
      var r = K;
      if ((r.flags & ga) !== se) {
        ft(r);
        try {
          g0(t, r, n, a);
        } catch (u) {
          at(r, r.return, u);
        }
        Bt();
      }
      if (r === e) {
        K = null;
        return;
      }
      var i = r.sibling;
      if (i !== null) {
        i.return = r.return, K = i;
        return;
      }
      K = r.return;
    }
  }
  function g0(e, t, n, a) {
    switch (t.tag) {
      case ne:
      case X:
      case ie: {
        if (t.mode & Ke) {
          Xv();
          try {
            ti(It | wt, t);
          } finally {
            Wv(t);
          }
        } else
          ti(It | wt, t);
        break;
      }
    }
  }
  function b0(e) {
    K = e, S0();
  }
  function S0() {
    for (; K !== null; ) {
      var e = K, t = e.child;
      if ((K.flags & mi) !== se) {
        var n = e.deletions;
        if (n !== null) {
          for (var a = 0; a < n.length; a++) {
            var r = n[a];
            K = r, R0(r, e);
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
          K = e;
        }
      }
      (e.subtreeFlags & uu) !== se && t !== null ? (t.return = e, K = t) : E0();
    }
  }
  function E0() {
    for (; K !== null; ) {
      var e = K;
      (e.flags & ga) !== se && (ft(e), C0(e), Bt());
      var t = e.sibling;
      if (t !== null) {
        t.return = e.return, K = t;
        return;
      }
      K = e.return;
    }
  }
  function C0(e) {
    switch (e.tag) {
      case ne:
      case X:
      case ie: {
        e.mode & Ke ? (Xv(), Oa(It | wt, e, e.return), Wv(e)) : Oa(It | wt, e, e.return);
        break;
      }
    }
  }
  function R0(e, t) {
    for (; K !== null; ) {
      var n = K;
      ft(n), D0(n, t), Bt();
      var a = n.child;
      a !== null ? (a.return = n, K = a) : T0(e);
    }
  }
  function T0(e) {
    for (; K !== null; ) {
      var t = K, n = t.sibling, a = t.return;
      if (pb(t), t === e) {
        K = null;
        return;
      }
      if (n !== null) {
        n.return = a, K = n;
        return;
      }
      K = a;
    }
  }
  function D0(e, t) {
    switch (e.tag) {
      case ne:
      case X:
      case ie: {
        e.mode & Ke ? (Xv(), Oa(It, e, t), Wv(e)) : Oa(It, e, t);
        break;
      }
    }
  }
  function x0(e) {
    switch (e.tag) {
      case ne:
      case X:
      case ie: {
        try {
          ti(Mt | wt, e);
        } catch (n) {
          at(e, e.return, n);
        }
        break;
      }
      case N: {
        var t = e.stateNode;
        try {
          t.componentDidMount();
        } catch (n) {
          at(e, e.return, n);
        }
        break;
      }
    }
  }
  function _0(e) {
    switch (e.tag) {
      case ne:
      case X:
      case ie: {
        try {
          ti(It | wt, e);
        } catch (t) {
          at(e, e.return, t);
        }
        break;
      }
    }
  }
  function O0(e) {
    switch (e.tag) {
      case ne:
      case X:
      case ie: {
        try {
          Oa(Mt | wt, e, e.return);
        } catch (n) {
          at(e, e.return, n);
        }
        break;
      }
      case N: {
        var t = e.stateNode;
        typeof t.componentWillUnmount == "function" && _p(e, e.return, t);
        break;
      }
    }
  }
  function w0(e) {
    switch (e.tag) {
      case ne:
      case X:
      case ie:
        try {
          Oa(It | wt, e, e.return);
        } catch (t) {
          at(e, e.return, t);
        }
    }
  }
  if (typeof Symbol == "function" && Symbol.for) {
    var Tl = Symbol.for;
    Tl("selector.component"), Tl("selector.has_pseudo_class"), Tl("selector.role"), Tl("selector.test_id"), Tl("selector.text");
  }
  var M0 = [];
  function A0() {
    M0.forEach(function(e) {
      return e();
    });
  }
  var L0 = L.ReactCurrentActQueue;
  function U0(e) {
    {
      var t = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      ), n = typeof jest < "u";
      return n && t !== !1;
    }
  }
  function Rb() {
    {
      var e = (
        // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
        typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
      );
      return !e && L0.current !== null && d("The current testing environment is not configured to support act(...)"), e;
    }
  }
  var k0 = Math.ceil, Ap = L.ReactCurrentDispatcher, Lp = L.ReactCurrentOwner, en = L.ReactCurrentBatchConfig, Aa = L.ReactCurrentActQueue, Ut = (
    /*             */
    0
  ), Tb = (
    /*               */
    1
  ), tn = (
    /*                */
    2
  ), sa = (
    /*                */
    4
  ), Rr = 0, Dl = 1, Fi = 2, jc = 3, xl = 4, Db = 5, Up = 6, Le = Ut, gn = null, dt = null, kt = O, Ka = O, kp = qr(O), Nt = Rr, _l = null, Fc = O, Ol = O, Vc = O, wl = null, An = null, Np = 0, xb = 500, _b = 1 / 0, N0 = 500, Tr = null;
  function Ml() {
    _b = Yt() + N0;
  }
  function Ob() {
    return _b;
  }
  var Bc = !1, zp = null, Bu = null, Vi = !1, ai = null, Al = O, Hp = [], jp = null, z0 = 50, Ll = 0, Fp = null, Vp = !1, Yc = !1, H0 = 50, Yu = 0, $c = null, Ul = it, Pc = O, wb = !1;
  function Gc() {
    return gn;
  }
  function bn() {
    return (Le & (tn | sa)) !== Ut ? Yt() : (Ul !== it || (Ul = Yt()), Ul);
  }
  function ri(e) {
    var t = e.mode;
    if ((t & Ae) === ue)
      return he;
    if ((Le & tn) !== Ut && kt !== O)
      return Do(kt);
    var n = Lx() !== Ax;
    if (n) {
      if (en.transition !== null) {
        var a = en.transition;
        a._updatedFibers || (a._updatedFibers = /* @__PURE__ */ new Set()), a._updatedFibers.add(e);
      }
      return Pc === Pt && (Pc = cm()), Pc;
    }
    var r = Sa();
    if (r !== Pt)
      return r;
    var i = mD();
    return i;
  }
  function j0(e) {
    var t = e.mode;
    return (t & Ae) === ue ? he : VC();
  }
  function zt(e, t, n, a) {
    lO(), wb && d("useInsertionEffect must not schedule updates."), Vp && (Yc = !0), xo(e, n, a), (Le & tn) !== O && e === gn ? fO(t) : (ba && vm(e, t, n), dO(t), e === gn && ((Le & tn) === Ut && (Ol = Re(Ol, n)), Nt === xl && ii(e, kt)), Ln(e, a), n === he && Le === Ut && (t.mode & Ae) === ue && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
    !Aa.isBatchingLegacy && (Ml(), wy()));
  }
  function F0(e, t, n) {
    var a = e.current;
    a.lanes = t, xo(e, t, n), Ln(e, n);
  }
  function V0(e) {
    return (
      // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
      // decided not to enable it.
      (Le & tn) !== Ut
    );
  }
  function Ln(e, t) {
    var n = e.callbackNode;
    kC(e, t);
    var a = ds(e, e === gn ? kt : O);
    if (a === O) {
      n !== null && Gb(n), e.callbackNode = null, e.callbackPriority = Pt;
      return;
    }
    var r = Ti(a), i = e.callbackPriority;
    if (i === r && // Special case related to `act`. If the currently scheduled task is a
    // Scheduler task, rather than an `act` task, cancel it and re-scheduled
    // on the `act` queue.
    !(Aa.current !== null && n !== Qp)) {
      n == null && i !== he && d("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
      return;
    }
    n != null && Gb(n);
    var u;
    if (r === he)
      e.tag === Qr ? (Aa.isBatchingLegacy !== null && (Aa.didScheduleLegacyUpdate = !0), px(Lb.bind(null, e))) : Oy(Lb.bind(null, e)), Aa.current !== null ? Aa.current.push(Wr) : gD(function() {
        (Le & (tn | sa)) === Ut && Wr();
      }), u = null;
    else {
      var o;
      switch (mm(a)) {
        case $n:
          o = ls;
          break;
        case pr:
          o = zf;
          break;
        case hr:
          o = Ei;
          break;
        case hs:
          o = Hf;
          break;
        default:
          o = Ei;
          break;
      }
      u = Wp(o, Mb.bind(null, e));
    }
    e.callbackPriority = r, e.callbackNode = u;
  }
  function Mb(e, t) {
    if (r_(), Ul = it, Pc = O, (Le & (tn | sa)) !== Ut)
      throw new Error("Should not already be working.");
    var n = e.callbackNode, a = xr();
    if (a && e.callbackNode !== n)
      return null;
    var r = ds(e, e === gn ? kt : O);
    if (r === O)
      return null;
    var i = !vs(e, r) && !FC(e, r) && !t, u = i ? I0(e, r) : Qc(e, r);
    if (u !== Rr) {
      if (u === Fi) {
        var o = id(e);
        o !== O && (r = o, u = Bp(e, o));
      }
      if (u === Dl) {
        var l = _l;
        throw Bi(e, O), ii(e, r), Ln(e, Yt()), l;
      }
      if (u === Up)
        ii(e, r);
      else {
        var c = !vs(e, r), f = e.current.alternate;
        if (c && !Y0(f)) {
          if (u = Qc(e, r), u === Fi) {
            var y = id(e);
            y !== O && (r = y, u = Bp(e, y));
          }
          if (u === Dl) {
            var m = _l;
            throw Bi(e, O), ii(e, r), Ln(e, Yt()), m;
          }
        }
        e.finishedWork = f, e.finishedLanes = r, B0(e, u, r);
      }
    }
    return Ln(e, Yt()), e.callbackNode === n ? Mb.bind(null, e) : null;
  }
  function Bp(e, t) {
    var n = wl;
    if (ms(e)) {
      var a = Bi(e, t);
      a.flags |= sr, ox(e.containerInfo);
    }
    var r = Qc(e, t);
    if (r !== Fi) {
      var i = An;
      An = n, i !== null && Ab(i);
    }
    return r;
  }
  function Ab(e) {
    An === null ? An = e : An.push.apply(An, e);
  }
  function B0(e, t, n) {
    switch (t) {
      case Rr:
      case Dl:
        throw new Error("Root did not complete. This is a bug in React.");
      case Fi: {
        Yi(e, An, Tr);
        break;
      }
      case jc: {
        if (ii(e, n), lm(n) && // do not delay if we're inside an act() scope
        !qb()) {
          var a = Np + xb - Yt();
          if (a > 10) {
            var r = ds(e, O);
            if (r !== O)
              break;
            var i = e.suspendedLanes;
            if (!du(i, n)) {
              bn(), dm(e, i);
              break;
            }
            e.timeoutHandle = jd(Yi.bind(null, e, An, Tr), a);
            break;
          }
        }
        Yi(e, An, Tr);
        break;
      }
      case xl: {
        if (ii(e, n), jC(n))
          break;
        if (!qb()) {
          var u = LC(e, n), o = u, l = Yt() - o, c = oO(l) - l;
          if (c > 10) {
            e.timeoutHandle = jd(Yi.bind(null, e, An, Tr), c);
            break;
          }
        }
        Yi(e, An, Tr);
        break;
      }
      case Db: {
        Yi(e, An, Tr);
        break;
      }
      default:
        throw new Error("Unknown root exit status.");
    }
  }
  function Y0(e) {
    for (var t = e; ; ) {
      if (t.flags & us) {
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
      if (t.subtreeFlags & us && l !== null) {
        l.return = t, t = l;
        continue;
      }
      if (t === e)
        return !0;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return !0;
  }
  function ii(e, t) {
    t = ps(t, Vc), t = ps(t, Ol), YC(e, t);
  }
  function Lb(e) {
    if (i_(), (Le & (tn | sa)) !== Ut)
      throw new Error("Should not already be working.");
    xr();
    var t = ds(e, O);
    if (!Yn(t, he))
      return Ln(e, Yt()), null;
    var n = Qc(e, t);
    if (e.tag !== Qr && n === Fi) {
      var a = id(e);
      a !== O && (t = a, n = Bp(e, a));
    }
    if (n === Dl) {
      var r = _l;
      throw Bi(e, O), ii(e, t), Ln(e, Yt()), r;
    }
    if (n === Up)
      throw new Error("Root did not complete. This is a bug in React.");
    var i = e.current.alternate;
    return e.finishedWork = i, e.finishedLanes = t, Yi(e, An, Tr), Ln(e, Yt()), null;
  }
  function $0(e, t) {
    t !== O && (sd(e, Re(t, he)), Ln(e, Yt()), (Le & (tn | sa)) === Ut && (Ml(), Wr()));
  }
  function Yp(e, t) {
    var n = Le;
    Le |= Tb;
    try {
      return e(t);
    } finally {
      Le = n, Le === Ut && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Aa.isBatchingLegacy && (Ml(), wy());
    }
  }
  function P0(e, t, n, a, r) {
    var i = Sa(), u = en.transition;
    try {
      return en.transition = null, Gt($n), e(t, n, a, r);
    } finally {
      Gt(i), en.transition = u, Le === Ut && Ml();
    }
  }
  function Dr(e) {
    ai !== null && ai.tag === Qr && (Le & (tn | sa)) === Ut && xr();
    var t = Le;
    Le |= Tb;
    var n = en.transition, a = Sa();
    try {
      return en.transition = null, Gt($n), e ? e() : void 0;
    } finally {
      Gt(a), en.transition = n, Le = t, (Le & (tn | sa)) === Ut && Wr();
    }
  }
  function Ub() {
    return (Le & (tn | sa)) !== Ut;
  }
  function qc(e, t) {
    cn(kp, Ka, e), Ka = Re(Ka, t);
  }
  function $p(e) {
    Ka = kp.current, sn(kp, e);
  }
  function Bi(e, t) {
    e.finishedWork = null, e.finishedLanes = O;
    var n = e.timeoutHandle;
    if (n !== Fd && (e.timeoutHandle = Fd, yD(n)), dt !== null)
      for (var a = dt.return; a !== null; ) {
        var r = a.alternate;
        lb(r, a), a = a.return;
      }
    gn = e;
    var i = $i(e.current, null);
    return dt = i, kt = Ka = t, Nt = Rr, _l = null, Fc = O, Ol = O, Vc = O, wl = null, An = null, Fx(), Ra.discardPendingWarnings(), i;
  }
  function kb(e, t) {
    do {
      var n = dt;
      try {
        if (nc(), rg(), Bt(), Lp.current = null, n === null || n.return === null) {
          Nt = Dl, _l = t, dt = null;
          return;
        }
        if (da && n.mode & Ke && Ac(n, !0), Na)
          if (lu(), t !== null && typeof t == "object" && typeof t.then == "function") {
            var a = t;
            SC(n, a, kt);
          } else
            bC(n, t, kt);
        p_(e, n.return, n, t, kt), jb(n);
      } catch (r) {
        t = r, dt === n && n !== null ? (n = n.return, dt = n) : n = dt;
        continue;
      }
      return;
    } while (!0);
  }
  function Nb() {
    var e = Ap.current;
    return Ap.current = xc, e === null ? xc : e;
  }
  function zb(e) {
    Ap.current = e;
  }
  function G0() {
    Np = Yt();
  }
  function kl(e) {
    Fc = Re(e, Fc);
  }
  function q0() {
    Nt === Rr && (Nt = jc);
  }
  function Pp() {
    (Nt === Rr || Nt === jc || Nt === Fi) && (Nt = xl), gn !== null && (ud(Fc) || ud(Ol)) && ii(gn, kt);
  }
  function Q0(e) {
    Nt !== xl && (Nt = Fi), wl === null ? wl = [e] : wl.push(e);
  }
  function W0() {
    return Nt === Rr;
  }
  function Qc(e, t) {
    var n = Le;
    Le |= tn;
    var a = Nb();
    if (gn !== e || kt !== t) {
      if (ba) {
        var r = e.memoizedUpdaters;
        r.size > 0 && (Nl(e, kt), r.clear()), pm(e, t);
      }
      Tr = hm(), Bi(e, t);
    }
    am(t);
    do
      try {
        X0();
        break;
      } catch (i) {
        kb(e, i);
      }
    while (!0);
    if (nc(), Le = n, zb(a), dt !== null)
      throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
    return rm(), gn = null, kt = O, Nt;
  }
  function X0() {
    for (; dt !== null; )
      Hb(dt);
  }
  function I0(e, t) {
    var n = Le;
    Le |= tn;
    var a = Nb();
    if (gn !== e || kt !== t) {
      if (ba) {
        var r = e.memoizedUpdaters;
        r.size > 0 && (Nl(e, kt), r.clear()), pm(e, t);
      }
      Tr = hm(), Ml(), Bi(e, t);
    }
    am(t);
    do
      try {
        K0();
        break;
      } catch (i) {
        kb(e, i);
      }
    while (!0);
    return nc(), zb(a), Le = n, dt !== null ? (DC(), Rr) : (rm(), gn = null, kt = O, Nt);
  }
  function K0() {
    for (; dt !== null && !ZE(); )
      Hb(dt);
  }
  function Hb(e) {
    var t = e.alternate;
    ft(e);
    var n;
    (e.mode & Ke) !== ue ? (Qv(e), n = Gp(t, e, Ka), Ac(e, !0)) : n = Gp(t, e, Ka), Bt(), e.memoizedProps = e.pendingProps, n === null ? jb(e) : dt = n, Lp.current = null;
  }
  function jb(e) {
    var t = e;
    do {
      var n = t.alternate, a = t.return;
      if ((t.flags & yo) === se) {
        ft(t);
        var r = void 0;
        if ((t.mode & Ke) === ue ? r = ob(n, t, Ka) : (Qv(t), r = ob(n, t, Ka), Ac(t, !1)), Bt(), r !== null) {
          dt = r;
          return;
        }
      } else {
        var i = q_(n, t);
        if (i !== null) {
          i.flags &= QE, dt = i;
          return;
        }
        if ((t.mode & Ke) !== ue) {
          Ac(t, !1);
          for (var u = t.actualDuration, o = t.child; o !== null; )
            u += o.actualDuration, o = o.sibling;
          t.actualDuration = u;
        }
        if (a !== null)
          a.flags |= yo, a.subtreeFlags = se, a.deletions = null;
        else {
          Nt = Up, dt = null;
          return;
        }
      }
      var l = t.sibling;
      if (l !== null) {
        dt = l;
        return;
      }
      t = a, dt = t;
    } while (t !== null);
    Nt === Rr && (Nt = Db);
  }
  function Yi(e, t, n) {
    var a = Sa(), r = en.transition;
    try {
      en.transition = null, Gt($n), J0(e, t, n, a);
    } finally {
      en.transition = r, Gt(a);
    }
    return null;
  }
  function J0(e, t, n, a) {
    do
      xr();
    while (ai !== null);
    if (sO(), (Le & (tn | sa)) !== Ut)
      throw new Error("Should not already be working.");
    var r = e.finishedWork, i = e.finishedLanes;
    if (dC(i), r === null)
      return em(), null;
    if (i === O && d("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = O, r === e.current)
      throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
    e.callbackNode = null, e.callbackPriority = Pt;
    var u = Re(r.lanes, r.childLanes);
    $C(e, u), e === gn && (gn = null, dt = null, kt = O), ((r.subtreeFlags & uu) !== se || (r.flags & uu) !== se) && (Vi || (Vi = !0, jp = n, Wp(Ei, function() {
      return xr(), null;
    })));
    var o = (r.subtreeFlags & (kf | Nf | go | uu)) !== se, l = (r.flags & (kf | Nf | go | uu)) !== se;
    if (o || l) {
      var c = en.transition;
      en.transition = null;
      var f = Sa();
      Gt($n);
      var y = Le;
      Le |= sa, Lp.current = null, K_(e, r), wg(), f0(e, r, i), cD(e.containerInfo), e.current = r, EC(i), d0(r, e, i), CC(), eC(), Le = y, Gt(f), en.transition = c;
    } else
      e.current = r, wg();
    var m = Vi;
    if (Vi ? (Vi = !1, ai = e, Al = i) : (Yu = 0, $c = null), u = e.pendingLanes, u === O && (Bu = null), m || Yb(e.current, !1), oC(r.stateNode, a), ba && e.memoizedUpdaters.clear(), A0(), Ln(e, Yt()), t !== null)
      for (var S = e.onRecoverableError, C = 0; C < t.length; C++) {
        var D = t[C], V = D.stack, re = D.digest;
        S(D.value, {
          componentStack: V,
          digest: re
        });
      }
    if (Bc) {
      Bc = !1;
      var Z = zp;
      throw zp = null, Z;
    }
    return Yn(Al, he) && e.tag !== Qr && xr(), u = e.pendingLanes, Yn(u, he) ? (a_(), e === Fp ? Ll++ : (Ll = 0, Fp = e)) : Ll = 0, Wr(), em(), null;
  }
  function xr() {
    if (ai !== null) {
      var e = mm(Al), t = QC(hr, e), n = en.transition, a = Sa();
      try {
        return en.transition = null, Gt(t), eO();
      } finally {
        Gt(a), en.transition = n;
      }
    }
    return !1;
  }
  function Z0(e) {
    Hp.push(e), Vi || (Vi = !0, Wp(Ei, function() {
      return xr(), null;
    }));
  }
  function eO() {
    if (ai === null)
      return !1;
    var e = jp;
    jp = null;
    var t = ai, n = Al;
    if (ai = null, Al = O, (Le & (tn | sa)) !== Ut)
      throw new Error("Cannot flush passive effects while already rendering.");
    Vp = !0, Yc = !1, RC(n);
    var a = Le;
    Le |= sa, b0(t.current), h0(t, t.current, n, e);
    {
      var r = Hp;
      Hp = [];
      for (var i = 0; i < r.length; i++) {
        var u = r[i];
        t0(t, u);
      }
    }
    TC(), Yb(t.current, !0), Le = a, Wr(), Yc ? t === $c ? Yu++ : (Yu = 0, $c = t) : Yu = 0, Vp = !1, Yc = !1, lC(t);
    {
      var o = t.current.stateNode;
      o.effectDuration = 0, o.passiveEffectDuration = 0;
    }
    return !0;
  }
  function Fb(e) {
    return Bu !== null && Bu.has(e);
  }
  function tO(e) {
    Bu === null ? Bu = /* @__PURE__ */ new Set([e]) : Bu.add(e);
  }
  function nO(e) {
    Bc || (Bc = !0, zp = e);
  }
  var aO = nO;
  function Vb(e, t, n) {
    var a = Hi(n, t), r = Hg(e, a, he), i = Ir(e, r, he), u = bn();
    i !== null && (xo(i, he, u), Ln(i, u));
  }
  function at(e, t, n) {
    if (W_(n), zl(!1), e.tag === P) {
      Vb(e, e, n);
      return;
    }
    var a = null;
    for (a = t; a !== null; ) {
      if (a.tag === P) {
        Vb(a, e, n);
        return;
      } else if (a.tag === N) {
        var r = a.type, i = a.stateNode;
        if (typeof r.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && !Fb(i)) {
          var u = Hi(n, e), o = fp(a, u, he), l = Ir(a, o, he), c = bn();
          l !== null && (xo(l, he, c), Ln(l, c));
          return;
        }
      }
      a = a.return;
    }
    d(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, n);
  }
  function rO(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t);
    var r = bn();
    dm(e, n), vO(e), gn === e && du(kt, n) && (Nt === xl || Nt === jc && lm(kt) && Yt() - Np < xb ? Bi(e, O) : Vc = Re(Vc, n)), Ln(e, r);
  }
  function Bb(e, t) {
    t === Pt && (t = j0(e));
    var n = bn(), a = wn(e, t);
    a !== null && (xo(a, t, n), Ln(a, n));
  }
  function iO(e) {
    var t = e.memoizedState, n = Pt;
    t !== null && (n = t.retryLane), Bb(e, n);
  }
  function uO(e, t) {
    var n = Pt, a;
    switch (e.tag) {
      case q:
        a = e.stateNode;
        var r = e.memoizedState;
        r !== null && (n = r.retryLane);
        break;
      case Ce:
        a = e.stateNode;
        break;
      default:
        throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
    }
    a !== null && a.delete(t), Bb(e, n);
  }
  function oO(e) {
    return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : k0(e / 1960) * 1960;
  }
  function lO() {
    if (Ll > z0)
      throw Ll = 0, Fp = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
    Yu > H0 && (Yu = 0, $c = null, d("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
  }
  function sO() {
    Ra.flushLegacyContextWarning(), Ra.flushPendingUnsafeLifecycleWarnings();
  }
  function Yb(e, t) {
    ft(e), Wc(e, fr, O0), t && Wc(e, os, w0), Wc(e, fr, x0), t && Wc(e, os, _0), Bt();
  }
  function Wc(e, t, n) {
    for (var a = e, r = null; a !== null; ) {
      var i = a.subtreeFlags & t;
      a !== r && a.child !== null && i !== se ? a = a.child : ((a.flags & t) !== se && n(a), a.sibling !== null ? a = a.sibling : a = r = a.return);
    }
  }
  var Xc = null;
  function $b(e) {
    {
      if ((Le & tn) !== Ut || !(e.mode & Ae))
        return;
      var t = e.tag;
      if (t !== Ve && t !== P && t !== N && t !== ne && t !== X && t !== ye && t !== ie)
        return;
      var n = be(e) || "ReactComponent";
      if (Xc !== null) {
        if (Xc.has(n))
          return;
        Xc.add(n);
      } else
        Xc = /* @__PURE__ */ new Set([n]);
      var a = on;
      try {
        ft(e), d("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
      } finally {
        a ? ft(e) : Bt();
      }
    }
  }
  var Gp;
  {
    var cO = null;
    Gp = function(e, t, n) {
      var a = Kb(cO, t);
      try {
        return nb(e, t, n);
      } catch (i) {
        if (Cx() || i !== null && typeof i == "object" && typeof i.then == "function")
          throw i;
        if (nc(), rg(), lb(e, t), Kb(t, a), t.mode & Ke && Qv(t), Of(null, nb, null, e, t, n), $E()) {
          var r = wf();
          typeof r == "object" && r !== null && r._suppressLogging && typeof i == "object" && i !== null && !i._suppressLogging && (i._suppressLogging = !0);
        }
        throw i;
      }
    };
  }
  var Pb = !1, qp;
  qp = /* @__PURE__ */ new Set();
  function fO(e) {
    if (vi && !e_())
      switch (e.tag) {
        case ne:
        case X:
        case ie: {
          var t = dt && be(dt) || "Unknown", n = t;
          if (!qp.has(n)) {
            qp.add(n);
            var a = be(e) || "Unknown";
            d("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", a, t, t);
          }
          break;
        }
        case N: {
          Pb || (d("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Pb = !0);
          break;
        }
      }
  }
  function Nl(e, t) {
    if (ba) {
      var n = e.memoizedUpdaters;
      n.forEach(function(a) {
        vm(e, a, t);
      });
    }
  }
  var Qp = {};
  function Wp(e, t) {
    {
      var n = Aa.current;
      return n !== null ? (n.push(t), Qp) : Zh(e, t);
    }
  }
  function Gb(e) {
    if (e !== Qp)
      return JE(e);
  }
  function qb() {
    return Aa.current !== null;
  }
  function dO(e) {
    {
      if (e.mode & Ae) {
        if (!Rb())
          return;
      } else if (!U0() || Le !== Ut || e.tag !== ne && e.tag !== X && e.tag !== ie)
        return;
      if (Aa.current === null) {
        var t = on;
        try {
          ft(e), d(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, be(e));
        } finally {
          t ? ft(e) : Bt();
        }
      }
    }
  }
  function vO(e) {
    e.tag !== Qr && Rb() && Aa.current === null && d(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
  }
  function zl(e) {
    wb = e;
  }
  var ca = null, $u = null, pO = function(e) {
    ca = e;
  };
  function Pu(e) {
    {
      if (ca === null)
        return e;
      var t = ca(e);
      return t === void 0 ? e : t.current;
    }
  }
  function Xp(e) {
    return Pu(e);
  }
  function Ip(e) {
    {
      if (ca === null)
        return e;
      var t = ca(e);
      if (t === void 0) {
        if (e != null && typeof e.render == "function") {
          var n = Pu(e.render);
          if (e.render !== n) {
            var a = {
              $$typeof: U,
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
  function Qb(e, t) {
    {
      if (ca === null)
        return !1;
      var n = e.elementType, a = t.type, r = !1, i = typeof a == "object" && a !== null ? a.$$typeof : null;
      switch (e.tag) {
        case N: {
          typeof a == "function" && (r = !0);
          break;
        }
        case ne: {
          (typeof a == "function" || i === le) && (r = !0);
          break;
        }
        case X: {
          (i === U || i === le) && (r = !0);
          break;
        }
        case ye:
        case ie: {
          (i === He || i === le) && (r = !0);
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
  function Wb(e) {
    {
      if (ca === null || typeof WeakSet != "function")
        return;
      $u === null && ($u = /* @__PURE__ */ new WeakSet()), $u.add(e);
    }
  }
  var hO = function(e, t) {
    {
      if (ca === null)
        return;
      var n = t.staleFamilies, a = t.updatedFamilies;
      xr(), Dr(function() {
        Kp(e.current, a, n);
      });
    }
  }, mO = function(e, t) {
    {
      if (e.context !== qn)
        return;
      xr(), Dr(function() {
        Hl(t, e, null, null);
      });
    }
  };
  function Kp(e, t, n) {
    {
      var a = e.alternate, r = e.child, i = e.sibling, u = e.tag, o = e.type, l = null;
      switch (u) {
        case ne:
        case ie:
        case N:
          l = o;
          break;
        case X:
          l = o.render;
          break;
      }
      if (ca === null)
        throw new Error("Expected resolveFamily to be set during hot reload.");
      var c = !1, f = !1;
      if (l !== null) {
        var y = ca(l);
        y !== void 0 && (n.has(y) ? f = !0 : t.has(y) && (u === N ? f = !0 : c = !0));
      }
      if ($u !== null && ($u.has(e) || a !== null && $u.has(a)) && (f = !0), f && (e._debugNeedsRemount = !0), f || c) {
        var m = wn(e, he);
        m !== null && zt(m, e, he, it);
      }
      r !== null && !f && Kp(r, t, n), i !== null && Kp(i, t, n);
    }
  }
  var yO = function(e, t) {
    {
      var n = /* @__PURE__ */ new Set(), a = new Set(t.map(function(r) {
        return r.current;
      }));
      return Jp(e.current, a, n), n;
    }
  };
  function Jp(e, t, n) {
    {
      var a = e.child, r = e.sibling, i = e.tag, u = e.type, o = null;
      switch (i) {
        case ne:
        case ie:
        case N:
          o = u;
          break;
        case X:
          o = u.render;
          break;
      }
      var l = !1;
      o !== null && t.has(o) && (l = !0), l ? gO(e, n) : a !== null && Jp(a, t, n), r !== null && Jp(r, t, n);
    }
  }
  function gO(e, t) {
    {
      var n = bO(e, t);
      if (n)
        return;
      for (var a = e; ; ) {
        switch (a.tag) {
          case Q:
            t.add(a.stateNode);
            return;
          case ae:
            t.add(a.stateNode.containerInfo);
            return;
          case P:
            t.add(a.stateNode.containerInfo);
            return;
        }
        if (a.return === null)
          throw new Error("Expected to reach root first.");
        a = a.return;
      }
    }
  }
  function bO(e, t) {
    for (var n = e, a = !1; ; ) {
      if (n.tag === Q)
        a = !0, t.add(n.stateNode);
      else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e)
        return a;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e)
          return a;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return !1;
  }
  var Zp;
  {
    Zp = !1;
    try {
      var Xb = Object.preventExtensions({});
    } catch {
      Zp = !0;
    }
  }
  function SO(e, t, n, a) {
    this.tag = e, this.key = n, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = a, this.flags = se, this.subtreeFlags = se, this.deletions = null, this.lanes = O, this.childLanes = O, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Zp && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
  }
  var Qn = function(e, t, n, a) {
    return new SO(e, t, n, a);
  };
  function eh(e) {
    var t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function EO(e) {
    return typeof e == "function" && !eh(e) && e.defaultProps === void 0;
  }
  function CO(e) {
    if (typeof e == "function")
      return eh(e) ? N : ne;
    if (e != null) {
      var t = e.$$typeof;
      if (t === U)
        return X;
      if (t === He)
        return ye;
    }
    return Ve;
  }
  function $i(e, t) {
    var n = e.alternate;
    n === null ? (n = Qn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugSource = e._debugSource, n._debugOwner = e._debugOwner, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = se, n.subtreeFlags = se, n.deletions = null, n.actualDuration = 0, n.actualStartTime = -1), n.flags = e.flags & dr, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue;
    var a = e.dependencies;
    switch (n.dependencies = a === null ? null : {
      lanes: a.lanes,
      firstContext: a.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
      case Ve:
      case ne:
      case ie:
        n.type = Pu(e.type);
        break;
      case N:
        n.type = Xp(e.type);
        break;
      case X:
        n.type = Ip(e.type);
        break;
    }
    return n;
  }
  function RO(e, t) {
    e.flags &= dr | Rt;
    var n = e.alternate;
    if (n === null)
      e.childLanes = O, e.lanes = t, e.child = null, e.subtreeFlags = se, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
    else {
      e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = se, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type;
      var a = n.dependencies;
      e.dependencies = a === null ? null : {
        lanes: a.lanes,
        firstContext: a.firstContext
      }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration;
    }
    return e;
  }
  function TO(e, t, n) {
    var a;
    return e === qs ? (a = Ae, t === !0 && (a |= pt, a |= Ba)) : a = ue, ba && (a |= Ke), Qn(P, null, null, a);
  }
  function th(e, t, n, a, r, i) {
    var u = Ve, o = e;
    if (typeof e == "function")
      eh(e) ? (u = N, o = Xp(o)) : o = Pu(o);
    else if (typeof e == "string")
      u = Q;
    else
      e: switch (e) {
        case Ha:
          return ui(n.children, r, i, t);
        case fi:
          u = j, r |= pt, (r & Ae) !== ue && (r |= Ba);
          break;
        case wr:
          return DO(n, r, i, t);
        case oe:
          return xO(n, r, i, t);
        case we:
          return _O(n, r, i, t);
        case rt:
          return Ib(n, r, i, t);
        case ct:
        case xe:
        case un:
        case ja:
        case Ot:
        default: {
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case p:
                u = H;
                break e;
              case M:
                u = w;
                break e;
              case U:
                u = X, o = Ip(o);
                break e;
              case He:
                u = ye;
                break e;
              case le:
                u = ke, o = null;
                break e;
            }
          var l = "";
          {
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var c = a ? be(a) : null;
            c && (l += `

Check the render method of \`` + c + "`.");
          }
          throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + l));
        }
      }
    var f = Qn(u, n, t, r);
    return f.elementType = e, f.type = o, f.lanes = i, f._debugOwner = a, f;
  }
  function nh(e, t, n) {
    var a = null;
    a = e._owner;
    var r = e.type, i = e.key, u = e.props, o = th(r, i, u, a, t, n);
    return o._debugSource = e._source, o._debugOwner = e._owner, o;
  }
  function ui(e, t, n, a) {
    var r = Qn(I, e, a, t);
    return r.lanes = n, r;
  }
  function DO(e, t, n, a) {
    typeof e.id != "string" && d('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
    var r = Qn(ee, e, a, t | Ke);
    return r.elementType = wr, r.lanes = n, r.stateNode = {
      effectDuration: 0,
      passiveEffectDuration: 0
    }, r;
  }
  function xO(e, t, n, a) {
    var r = Qn(q, e, a, t);
    return r.elementType = oe, r.lanes = n, r;
  }
  function _O(e, t, n, a) {
    var r = Qn(Ce, e, a, t);
    return r.elementType = we, r.lanes = n, r;
  }
  function Ib(e, t, n, a) {
    var r = Qn(Te, e, a, t);
    r.elementType = rt, r.lanes = n;
    var i = {
      isHidden: !1
    };
    return r.stateNode = i, r;
  }
  function ah(e, t, n) {
    var a = Qn(de, e, null, t);
    return a.lanes = n, a;
  }
  function OO() {
    var e = Qn(Q, null, null, ue);
    return e.elementType = "DELETED", e;
  }
  function wO(e) {
    var t = Qn(ze, null, null, ue);
    return t.stateNode = e, t;
  }
  function rh(e, t, n) {
    var a = e.children !== null ? e.children : [], r = Qn(ae, a, e.key, t);
    return r.lanes = n, r.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      // Used by persistent updates
      implementation: e.implementation
    }, r;
  }
  function Kb(e, t) {
    return e === null && (e = Qn(Ve, null, null, ue)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
  }
  function MO(e, t, n, a, r) {
    this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Fd, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Pt, this.eventTimes = ld(O), this.expirationTimes = ld(it), this.pendingLanes = O, this.suspendedLanes = O, this.pingedLanes = O, this.expiredLanes = O, this.mutableReadLanes = O, this.finishedLanes = O, this.entangledLanes = O, this.entanglements = ld(O), this.identifierPrefix = a, this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
    {
      this.memoizedUpdaters = /* @__PURE__ */ new Set();
      for (var i = this.pendingUpdatersLaneMap = [], u = 0; u < Ff; u++)
        i.push(/* @__PURE__ */ new Set());
    }
    switch (t) {
      case qs:
        this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
        break;
      case Qr:
        this._debugRootType = n ? "hydrate()" : "render()";
        break;
    }
  }
  function Jb(e, t, n, a, r, i, u, o, l, c) {
    var f = new MO(e, t, n, o, l), y = TO(t, i);
    f.current = y, y.stateNode = f;
    {
      var m = {
        element: a,
        isDehydrated: n,
        cache: null,
        // not enabled yet
        transitions: null,
        pendingSuspenseBoundaries: null
      };
      y.memoizedState = m;
    }
    return yv(y), f;
  }
  var ih = "18.3.1";
  function AO(e, t, n) {
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
  var uh, oh;
  uh = !1, oh = {};
  function Zb(e) {
    if (!e)
      return qn;
    var t = ru(e), n = vx(t);
    if (t.tag === N) {
      var a = t.type;
      if (Pa(a))
        return xy(t, a, n);
    }
    return n;
  }
  function LO(e, t) {
    {
      var n = ru(e);
      if (n === void 0) {
        if (typeof e.render == "function")
          throw new Error("Unable to find node on an unmounted component.");
        var a = Object.keys(e).join(",");
        throw new Error("Argument appears to not be a ReactComponent. Keys: " + a);
      }
      var r = Ih(n);
      if (r === null)
        return null;
      if (r.mode & pt) {
        var i = be(n) || "Component";
        if (!oh[i]) {
          oh[i] = !0;
          var u = on;
          try {
            ft(r), n.mode & pt ? d("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, i) : d("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, i);
          } finally {
            u ? ft(u) : Bt();
          }
        }
      }
      return r.stateNode;
    }
  }
  function eS(e, t, n, a, r, i, u, o) {
    var l = !1, c = null;
    return Jb(e, t, l, c, n, a, r, i, u);
  }
  function tS(e, t, n, a, r, i, u, o, l, c) {
    var f = !0, y = Jb(n, a, f, e, r, i, u, o, l);
    y.context = Zb(null);
    var m = y.current, S = bn(), C = ri(m), D = Er(S, C);
    return D.callback = t ?? null, Ir(m, D, C), F0(y, C, S), y;
  }
  function Hl(e, t, n, a) {
    uC(t, e);
    var r = t.current, i = bn(), u = ri(r);
    xC(u);
    var o = Zb(n);
    t.context === null ? t.context = o : t.pendingContext = o, vi && on !== null && !uh && (uh = !0, d(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, be(on) || "Unknown"));
    var l = Er(i, u);
    l.payload = {
      element: e
    }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && d("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", a), l.callback = a);
    var c = Ir(r, l, u);
    return c !== null && (zt(c, r, u, i), oc(c, r, u)), u;
  }
  function Ic(e) {
    var t = e.current;
    if (!t.child)
      return null;
    switch (t.child.tag) {
      case Q:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function UO(e) {
    switch (e.tag) {
      case P: {
        var t = e.stateNode;
        if (ms(t)) {
          var n = NC(t);
          $0(t, n);
        }
        break;
      }
      case q: {
        Dr(function() {
          var r = wn(e, he);
          if (r !== null) {
            var i = bn();
            zt(r, e, he, i);
          }
        });
        var a = he;
        lh(e, a);
        break;
      }
    }
  }
  function nS(e, t) {
    var n = e.memoizedState;
    n !== null && n.dehydrated !== null && (n.retryLane = BC(n.retryLane, t));
  }
  function lh(e, t) {
    nS(e, t);
    var n = e.alternate;
    n && nS(n, t);
  }
  function kO(e) {
    if (e.tag === q) {
      var t = Co, n = wn(e, t);
      if (n !== null) {
        var a = bn();
        zt(n, e, t, a);
      }
      lh(e, t);
    }
  }
  function NO(e) {
    if (e.tag === q) {
      var t = ri(e), n = wn(e, t);
      if (n !== null) {
        var a = bn();
        zt(n, e, t, a);
      }
      lh(e, t);
    }
  }
  function aS(e) {
    var t = KE(e);
    return t === null ? null : t.stateNode;
  }
  var rS = function(e) {
    return null;
  };
  function zO(e) {
    return rS(e);
  }
  var iS = function(e) {
    return !1;
  };
  function HO(e) {
    return iS(e);
  }
  var uS = null, oS = null, lS = null, sS = null, cS = null, fS = null, dS = null, vS = null, pS = null;
  {
    var hS = function(e, t, n) {
      var a = t[n], r = Ge(e) ? e.slice() : _e({}, e);
      return n + 1 === t.length ? (Ge(r) ? r.splice(a, 1) : delete r[a], r) : (r[a] = hS(e[a], t, n + 1), r);
    }, mS = function(e, t) {
      return hS(e, t, 0);
    }, yS = function(e, t, n, a) {
      var r = t[a], i = Ge(e) ? e.slice() : _e({}, e);
      if (a + 1 === t.length) {
        var u = n[a];
        i[u] = i[r], Ge(i) ? i.splice(r, 1) : delete i[r];
      } else
        i[r] = yS(
          // $FlowFixMe number or string is fine here
          e[r],
          t,
          n,
          a + 1
        );
      return i;
    }, gS = function(e, t, n) {
      if (t.length !== n.length) {
        Se("copyWithRename() expects paths of the same length");
        return;
      } else
        for (var a = 0; a < n.length - 1; a++)
          if (t[a] !== n[a]) {
            Se("copyWithRename() expects paths to be the same except for the deepest key");
            return;
          }
      return yS(e, t, n, 0);
    }, bS = function(e, t, n, a) {
      if (n >= t.length)
        return a;
      var r = t[n], i = Ge(e) ? e.slice() : _e({}, e);
      return i[r] = bS(e[r], t, n + 1, a), i;
    }, SS = function(e, t, n) {
      return bS(e, t, 0, n);
    }, sh = function(e, t) {
      for (var n = e.memoizedState; n !== null && t > 0; )
        n = n.next, t--;
      return n;
    };
    uS = function(e, t, n, a) {
      var r = sh(e, t);
      if (r !== null) {
        var i = SS(r.memoizedState, n, a);
        r.memoizedState = i, r.baseState = i, e.memoizedProps = _e({}, e.memoizedProps);
        var u = wn(e, he);
        u !== null && zt(u, e, he, it);
      }
    }, oS = function(e, t, n) {
      var a = sh(e, t);
      if (a !== null) {
        var r = mS(a.memoizedState, n);
        a.memoizedState = r, a.baseState = r, e.memoizedProps = _e({}, e.memoizedProps);
        var i = wn(e, he);
        i !== null && zt(i, e, he, it);
      }
    }, lS = function(e, t, n, a) {
      var r = sh(e, t);
      if (r !== null) {
        var i = gS(r.memoizedState, n, a);
        r.memoizedState = i, r.baseState = i, e.memoizedProps = _e({}, e.memoizedProps);
        var u = wn(e, he);
        u !== null && zt(u, e, he, it);
      }
    }, sS = function(e, t, n) {
      e.pendingProps = SS(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var a = wn(e, he);
      a !== null && zt(a, e, he, it);
    }, cS = function(e, t) {
      e.pendingProps = mS(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var n = wn(e, he);
      n !== null && zt(n, e, he, it);
    }, fS = function(e, t, n) {
      e.pendingProps = gS(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var a = wn(e, he);
      a !== null && zt(a, e, he, it);
    }, dS = function(e) {
      var t = wn(e, he);
      t !== null && zt(t, e, he, it);
    }, vS = function(e) {
      rS = e;
    }, pS = function(e) {
      iS = e;
    };
  }
  function jO(e) {
    var t = Ih(e);
    return t === null ? null : t.stateNode;
  }
  function FO(e) {
    return null;
  }
  function VO() {
    return on;
  }
  function BO(e) {
    var t = e.findFiberByHostInstance, n = L.ReactCurrentDispatcher;
    return iC({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: uS,
      overrideHookStateDeletePath: oS,
      overrideHookStateRenamePath: lS,
      overrideProps: sS,
      overridePropsDeletePath: cS,
      overridePropsRenamePath: fS,
      setErrorHandler: vS,
      setSuspenseHandler: pS,
      scheduleUpdate: dS,
      currentDispatcherRef: n,
      findHostInstanceByFiber: jO,
      findFiberByHostInstance: t || FO,
      // React Refresh
      findHostInstancesForRefresh: yO,
      scheduleRefresh: hO,
      scheduleRoot: mO,
      setRefreshHandler: pO,
      // Enables DevTools to append owner stacks to error messages in DEV mode.
      getCurrentFiber: VO,
      // Enables DevTools to detect reconciler version rather than renderer version
      // which may not match for third party renderers.
      reconcilerVersion: ih
    });
  }
  var ES = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : function(e) {
    console.error(e);
  };
  function ch(e) {
    this._internalRoot = e;
  }
  Kc.prototype.render = ch.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw new Error("Cannot update an unmounted root.");
    {
      typeof arguments[1] == "function" ? d("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Jc(arguments[1]) ? d("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && d("You passed a second argument to root.render(...) but it only accepts one argument.");
      var n = t.containerInfo;
      if (n.nodeType !== Ct) {
        var a = aS(t.current);
        a && a.parentNode !== n && d("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
      }
    }
    Hl(e, t, null, null);
  }, Kc.prototype.unmount = ch.prototype.unmount = function() {
    typeof arguments[0] == "function" && d("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ub() && d("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Dr(function() {
        Hl(null, e, null, null);
      }), Ey(t);
    }
  };
  function YO(e, t) {
    if (!Jc(e))
      throw new Error("createRoot(...): Target container is not a DOM element.");
    CS(e);
    var n = !1, a = !1, r = "", i = ES;
    t != null && (t.hydrate ? Se("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ma && d(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
    var u = eS(e, qs, null, n, a, r, i);
    Fs(u.current, e);
    var o = e.nodeType === Ct ? e.parentNode : e;
    return $o(o), new ch(u);
  }
  function Kc(e) {
    this._internalRoot = e;
  }
  function $O(e) {
    e && rR(e);
  }
  Kc.prototype.unstable_scheduleHydration = $O;
  function PO(e, t, n) {
    if (!Jc(e))
      throw new Error("hydrateRoot(...): Target container is not a DOM element.");
    CS(e), t === void 0 && d("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
    var a = n ?? null, r = n != null && n.hydratedSources || null, i = !1, u = !1, o = "", l = ES;
    n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError));
    var c = tS(t, null, e, qs, a, i, u, o, l);
    if (Fs(c.current, e), $o(e), r)
      for (var f = 0; f < r.length; f++) {
        var y = r[f];
        Wx(c, y);
      }
    return new Kc(c);
  }
  function Jc(e) {
    return !!(e && (e.nodeType === _n || e.nodeType === lr || e.nodeType === yf || !jt));
  }
  function jl(e) {
    return !!(e && (e.nodeType === _n || e.nodeType === lr || e.nodeType === yf || e.nodeType === Ct && e.nodeValue === " react-mount-point-unstable "));
  }
  function CS(e) {
    e.nodeType === _n && e.tagName && e.tagName.toUpperCase() === "BODY" && d("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), el(e) && (e._reactRootContainer ? d("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : d("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
  }
  var GO = L.ReactCurrentOwner, RS;
  RS = function(e) {
    if (e._reactRootContainer && e.nodeType !== Ct) {
      var t = aS(e._reactRootContainer.current);
      t && t.parentNode !== e && d("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
    }
    var n = !!e._reactRootContainer, a = fh(e), r = !!(a && Gr(a));
    r && !n && d("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === _n && e.tagName && e.tagName.toUpperCase() === "BODY" && d("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
  };
  function fh(e) {
    return e ? e.nodeType === lr ? e.documentElement : e.firstChild : null;
  }
  function TS() {
  }
  function qO(e, t, n, a, r) {
    if (r) {
      if (typeof a == "function") {
        var i = a;
        a = function() {
          var m = Ic(u);
          i.call(m);
        };
      }
      var u = tS(
        t,
        a,
        e,
        Qr,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        TS
      );
      e._reactRootContainer = u, Fs(u.current, e);
      var o = e.nodeType === Ct ? e.parentNode : e;
      return $o(o), Dr(), u;
    } else {
      for (var l; l = e.lastChild; )
        e.removeChild(l);
      if (typeof a == "function") {
        var c = a;
        a = function() {
          var m = Ic(f);
          c.call(m);
        };
      }
      var f = eS(
        e,
        Qr,
        null,
        // hydrationCallbacks
        !1,
        // isStrictMode
        !1,
        // concurrentUpdatesByDefaultOverride,
        "",
        // identifierPrefix
        TS
      );
      e._reactRootContainer = f, Fs(f.current, e);
      var y = e.nodeType === Ct ? e.parentNode : e;
      return $o(y), Dr(function() {
        Hl(t, f, n, a);
      }), f;
    }
  }
  function QO(e, t) {
    e !== null && typeof e != "function" && d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
  }
  function Zc(e, t, n, a, r) {
    RS(n), QO(r === void 0 ? null : r, "render");
    var i = n._reactRootContainer, u;
    if (!i)
      u = qO(n, t, e, r, a);
    else {
      if (u = i, typeof r == "function") {
        var o = r;
        r = function() {
          var l = Ic(u);
          o.call(l);
        };
      }
      Hl(t, u, e, r);
    }
    return Ic(u);
  }
  var DS = !1;
  function WO(e) {
    {
      DS || (DS = !0, d("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
      var t = GO.current;
      if (t !== null && t.stateNode !== null) {
        var n = t.stateNode._warnedAboutRefsInRender;
        n || d("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", je(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
      }
    }
    return e == null ? null : e.nodeType === _n ? e : LO(e, "findDOMNode");
  }
  function XO(e, t, n) {
    if (d("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !jl(t))
      throw new Error("Target container is not a DOM element.");
    {
      var a = el(t) && t._reactRootContainer === void 0;
      a && d("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
    }
    return Zc(null, e, t, !0, n);
  }
  function IO(e, t, n) {
    if (d("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !jl(t))
      throw new Error("Target container is not a DOM element.");
    {
      var a = el(t) && t._reactRootContainer === void 0;
      a && d("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
    }
    return Zc(null, e, t, !1, n);
  }
  function KO(e, t, n, a) {
    if (d("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !jl(n))
      throw new Error("Target container is not a DOM element.");
    if (e == null || !PE(e))
      throw new Error("parentComponent must be a valid React Component");
    return Zc(e, t, n, !1, a);
  }
  var xS = !1;
  function JO(e) {
    if (xS || (xS = !0, d("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !jl(e))
      throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
    {
      var t = el(e) && e._reactRootContainer === void 0;
      t && d("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
    }
    if (e._reactRootContainer) {
      {
        var n = fh(e), a = n && !Gr(n);
        a && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
      }
      return Dr(function() {
        Zc(null, null, e, !1, function() {
          e._reactRootContainer = null, Ey(e);
        });
      }), !0;
    } else {
      {
        var r = fh(e), i = !!(r && Gr(r)), u = e.nodeType === _n && jl(e.parentNode) && !!e.parentNode._reactRootContainer;
        i && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", u ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
      }
      return !1;
    }
  }
  WC(UO), IC(kO), KC(NO), JC(Sa), ZC(GC), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
  Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
  Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && d("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), UE(eD), zE(Yp, P0, Dr);
  function ZO(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Jc(t))
      throw new Error("Target container is not a DOM element.");
    return AO(e, t, null, n);
  }
  function ew(e, t, n, a) {
    return KO(e, t, n, a);
  }
  var dh = {
    usingClientEntryPoint: !1,
    // Keep in sync with ReactTestUtils.js.
    // This is an array for better minification.
    Events: [Gr, Eu, Vs, jh, Fh, Yp]
  };
  function tw(e, t) {
    return dh.usingClientEntryPoint || d('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), YO(e, t);
  }
  function nw(e, t, n) {
    return dh.usingClientEntryPoint || d('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), PO(e, t, n);
  }
  function aw(e) {
    return Ub() && d("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Dr(e);
  }
  var rw = BO({
    findFiberByHostInstance: Oi,
    bundleType: 1,
    version: ih,
    rendererPackageName: "react-dom"
  });
  if (!rw && Et && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
    var _S = window.location.protocol;
    /^(https?|file):$/.test(_S) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (_S === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
  }
  Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dh, Xn.createPortal = ZO, Xn.createRoot = tw, Xn.findDOMNode = WO, Xn.flushSync = aw, Xn.hydrate = XO, Xn.hydrateRoot = nw, Xn.render = IO, Xn.unmountComponentAtNode = JO, Xn.unstable_batchedUpdates = Yp, Xn.unstable_renderSubtreeIntoContainer = ew, Xn.version = ih, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
NS.exports = Xn;
var cw = NS.exports, jS, OS = cw;
{
  var wS = OS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  jS = function(h, R) {
    wS.usingClientEntryPoint = !0;
    try {
      return OS.createRoot(h, R);
    } finally {
      wS.usingClientEntryPoint = !1;
    }
  };
}
var fw = Object.defineProperty, dw = (h, R, L) => R in h ? fw(h, R, { enumerable: !0, configurable: !0, writable: !0, value: L }) : h[R] = L, ef = (h, R, L) => (dw(h, typeof R != "symbol" ? R + "" : R, L), L);
const vw = {
  stringify: (h) => h,
  parse: (h) => h
}, pw = {
  stringify: (h) => `${h}`,
  parse: (h) => parseFloat(h)
}, hw = {
  stringify: (h) => h ? "true" : "false",
  parse: (h) => /^[ty1-9]/i.test(h)
}, mw = {
  stringify: (h) => h.name,
  parse: (h, R, L) => {
    const W = (() => {
      if (typeof window < "u" && h in window)
        return window[h];
      if (typeof global < "u" && h in global)
        return global[h];
    })();
    return typeof W == "function" ? W.bind(L) : void 0;
  }
}, yw = {
  stringify: (h) => JSON.stringify(h),
  parse: (h) => JSON.parse(h)
}, vh = {
  string: vw,
  number: pw,
  boolean: hw,
  function: mw,
  json: yw
};
function gw(h) {
  return h.replace(
    /([a-z0-9])([A-Z])/g,
    (R, L, W) => `${L}-${W.toLowerCase()}`
  );
}
const tf = Symbol.for("r2wc.render"), nf = Symbol.for("r2wc.connected"), Pi = Symbol.for("r2wc.context"), oi = Symbol.for("r2wc.props");
function bw(h, R, L) {
  var W, Fe, Se;
  R.props || (R.props = h.propTypes ? Object.keys(h.propTypes) : []);
  const d = Array.isArray(R.props) ? R.props.slice() : Object.keys(R.props), $e = {}, ne = {}, N = {};
  for (const P of d) {
    $e[P] = Array.isArray(R.props) ? "string" : R.props[P];
    const ae = gw(P);
    ne[P] = ae, N[ae] = P;
  }
  class Ve extends HTMLElement {
    constructor() {
      super(), ef(this, W, !0), ef(this, Fe), ef(this, Se, {}), ef(this, "container"), R.shadow ? this.container = this.attachShadow({
        mode: R.shadow
      }) : this.container = this, this[oi].container = this.container;
      for (const ae of d) {
        const Q = ne[ae], de = this.getAttribute(Q), I = $e[ae], j = I ? vh[I] : null;
        j != null && j.parse && de && (this[oi][ae] = j.parse(de, Q, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(N);
    }
    connectedCallback() {
      this[nf] = !0, this[tf]();
    }
    disconnectedCallback() {
      this[nf] = !1, this[Pi] && L.unmount(this[Pi]), delete this[Pi];
    }
    attributeChangedCallback(ae, Q, de) {
      const I = N[ae], j = $e[I], w = j ? vh[j] : null;
      I in $e && w != null && w.parse && de && (this[oi][I] = w.parse(de, ae, this), this[tf]());
    }
    [(W = nf, Fe = Pi, Se = oi, tf)]() {
      this[nf] && (this[Pi] ? L.update(this[Pi], this[oi]) : this[Pi] = L.mount(
        this.container,
        h,
        this[oi]
      ));
    }
  }
  for (const P of d) {
    const ae = ne[P], Q = $e[P];
    Object.defineProperty(Ve.prototype, P, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[oi][P];
      },
      set(de) {
        this[oi][P] = de;
        const I = Q ? vh[Q] : null;
        if (I != null && I.stringify) {
          const j = I.stringify(de, ae, this);
          this.getAttribute(ae) !== j && this.setAttribute(ae, j);
        } else
          this[tf]();
      }
    });
  }
  return Ve;
}
function Sw(h, R, L) {
  const W = jS(h), Fe = Sh.createElement(R, L);
  return W.render(Fe), {
    root: W,
    ReactComponent: R
  };
}
function Ew({ root: h, ReactComponent: R }, L) {
  const W = Sh.createElement(R, L);
  h.render(W);
}
function Cw({ root: h }) {
  h.unmount();
}
function Rw(h, R = {}) {
  return bw(h, R, { mount: Sw, update: Ew, unmount: Cw });
}
var FS = { exports: {} }, rf = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function() {
  var h = Ua, R = Symbol.for("react.element"), L = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), Fe = Symbol.for("react.strict_mode"), Se = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), $e = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), Ve = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), de = Symbol.iterator, I = "@@iterator";
  function j(p) {
    if (p === null || typeof p != "object")
      return null;
    var M = de && p[de] || p[I];
    return typeof M == "function" ? M : null;
  }
  var w = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function H(p) {
    {
      for (var M = arguments.length, U = new Array(M > 1 ? M - 1 : 0), oe = 1; oe < M; oe++)
        U[oe - 1] = arguments[oe];
      X("error", p, U);
    }
  }
  function X(p, M, U) {
    {
      var oe = w.ReactDebugCurrentFrame, we = oe.getStackAddendum();
      we !== "" && (M += "%s", U = U.concat([we]));
      var He = U.map(function(le) {
        return String(le);
      });
      He.unshift("Warning: " + M), Function.prototype.apply.call(console[p], console, He);
    }
  }
  var ee = !1, q = !1, ye = !1, ie = !1, ke = !1, ve;
  ve = Symbol.for("react.module.reference");
  function ze(p) {
    return !!(typeof p == "string" || typeof p == "function" || p === W || p === Se || ke || p === Fe || p === N || p === Ve || ie || p === Q || ee || q || ye || typeof p == "object" && p !== null && (p.$$typeof === ae || p.$$typeof === P || p.$$typeof === d || p.$$typeof === $e || p.$$typeof === ne || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    p.$$typeof === ve || p.getModuleId !== void 0));
  }
  function Ce(p, M, U) {
    var oe = p.displayName;
    if (oe)
      return oe;
    var we = M.displayName || M.name || "";
    return we !== "" ? U + "(" + we + ")" : U;
  }
  function Ht(p) {
    return p.displayName || "Context";
  }
  function Te(p) {
    if (p == null)
      return null;
    if (typeof p.tag == "number" && H("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
      return p.displayName || p.name || null;
    if (typeof p == "string")
      return p;
    switch (p) {
      case W:
        return "Fragment";
      case L:
        return "Portal";
      case Se:
        return "Profiler";
      case Fe:
        return "StrictMode";
      case N:
        return "Suspense";
      case Ve:
        return "SuspenseList";
    }
    if (typeof p == "object")
      switch (p.$$typeof) {
        case $e:
          var M = p;
          return Ht(M) + ".Consumer";
        case d:
          var U = p;
          return Ht(U._context) + ".Provider";
        case ne:
          return Ce(p, p.render, "ForwardRef");
        case P:
          var oe = p.displayName || null;
          return oe !== null ? oe : Te(p.type) || "Memo";
        case ae: {
          var we = p, He = we._payload, le = we._init;
          try {
            return Te(le(He));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var Pe = Object.assign, mt = 0, yt, Ee, qt, ka, In, fa, jt;
  function Cn() {
  }
  Cn.__reactDisabledLog = !0;
  function Un() {
    {
      if (mt === 0) {
        yt = console.log, Ee = console.info, qt = console.warn, ka = console.error, In = console.group, fa = console.groupCollapsed, jt = console.groupEnd;
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
      mt++;
    }
  }
  function Na() {
    {
      if (mt--, mt === 0) {
        var p = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: Pe({}, p, {
            value: yt
          }),
          info: Pe({}, p, {
            value: Ee
          }),
          warn: Pe({}, p, {
            value: qt
          }),
          error: Pe({}, p, {
            value: ka
          }),
          group: Pe({}, p, {
            value: In
          }),
          groupCollapsed: Pe({}, p, {
            value: fa
          }),
          groupEnd: Pe({}, p, {
            value: jt
          })
        });
      }
      mt < 0 && H("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var da = w.ReactCurrentDispatcher, va;
  function Kn(p, M, U) {
    {
      if (va === void 0)
        try {
          throw Error();
        } catch (we) {
          var oe = we.stack.trim().match(/\n( *(at )?)/);
          va = oe && oe[1] || "";
        }
      return `
` + va + p;
    }
  }
  var Qt = !1, Rn;
  {
    var kn = typeof WeakMap == "function" ? WeakMap : Map;
    Rn = new kn();
  }
  function Nn(p, M) {
    if (!p || Qt)
      return "";
    {
      var U = Rn.get(p);
      if (U !== void 0)
        return U;
    }
    var oe;
    Qt = !0;
    var we = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var He;
    He = da.current, da.current = null, Un();
    try {
      if (M) {
        var le = function() {
          throw Error();
        };
        if (Object.defineProperty(le.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(le, []);
          } catch (Vt) {
            oe = Vt;
          }
          Reflect.construct(p, [], le);
        } else {
          try {
            le.call();
          } catch (Vt) {
            oe = Vt;
          }
          p.call(le.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (Vt) {
          oe = Vt;
        }
        p();
      }
    } catch (Vt) {
      if (Vt && oe && typeof Vt.stack == "string") {
        for (var xe = Vt.stack.split(`
`), Ot = oe.stack.split(`
`), rt = xe.length - 1, ct = Ot.length - 1; rt >= 1 && ct >= 0 && xe[rt] !== Ot[ct]; )
          ct--;
        for (; rt >= 1 && ct >= 0; rt--, ct--)
          if (xe[rt] !== Ot[ct]) {
            if (rt !== 1 || ct !== 1)
              do
                if (rt--, ct--, ct < 0 || xe[rt] !== Ot[ct]) {
                  var un = `
` + xe[rt].replace(" at new ", " at ");
                  return p.displayName && un.includes("<anonymous>") && (un = un.replace("<anonymous>", p.displayName)), typeof p == "function" && Rn.set(p, un), un;
                }
              while (rt >= 1 && ct >= 0);
            break;
          }
      }
    } finally {
      Qt = !1, da.current = He, Na(), Error.prepareStackTrace = we;
    }
    var ja = p ? p.displayName || p.name : "", na = ja ? Kn(ja) : "";
    return typeof p == "function" && Rn.set(p, na), na;
  }
  function Et(p, M, U) {
    return Nn(p, !1);
  }
  function an(p) {
    var M = p.prototype;
    return !!(M && M.isReactComponent);
  }
  function Ft(p, M, U) {
    if (p == null)
      return "";
    if (typeof p == "function")
      return Nn(p, an(p));
    if (typeof p == "string")
      return Kn(p);
    switch (p) {
      case N:
        return Kn("Suspense");
      case Ve:
        return Kn("SuspenseList");
    }
    if (typeof p == "object")
      switch (p.$$typeof) {
        case ne:
          return Et(p.render);
        case P:
          return Ft(p.type, M, U);
        case ae: {
          var oe = p, we = oe._payload, He = oe._init;
          try {
            return Ft(He(we), M, U);
          } catch {
          }
        }
      }
    return "";
  }
  var Dt = Object.prototype.hasOwnProperty, xt = {}, zn = w.ReactDebugCurrentFrame;
  function Jn(p) {
    if (p) {
      var M = p._owner, U = Ft(p.type, p._source, M ? M.type : null);
      zn.setExtraStackFrame(U);
    } else
      zn.setExtraStackFrame(null);
  }
  function Tn(p, M, U, oe, we) {
    {
      var He = Function.call.bind(Dt);
      for (var le in p)
        if (He(p, le)) {
          var xe = void 0;
          try {
            if (typeof p[le] != "function") {
              var Ot = Error((oe || "React class") + ": " + U + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw Ot.name = "Invariant Violation", Ot;
            }
            xe = p[le](M, le, oe, U, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (rt) {
            xe = rt;
          }
          xe && !(xe instanceof Error) && (Jn(we), H("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", U, le, typeof xe), Jn(null)), xe instanceof Error && !(xe.message in xt) && (xt[xe.message] = !0, Jn(we), H("Failed %s type: %s", U, xe.message), Jn(null));
        }
    }
  }
  var pa = Array.isArray;
  function Zn(p) {
    return pa(p);
  }
  function pn(p) {
    {
      var M = typeof Symbol == "function" && Symbol.toStringTag, U = M && p[Symbol.toStringTag] || p.constructor.name || "Object";
      return U;
    }
  }
  function ea(p) {
    try {
      return rn(p), !1;
    } catch {
      return !0;
    }
  }
  function rn(p) {
    return "" + p;
  }
  function Hn(p) {
    if (ea(p))
      return H("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pn(p)), rn(p);
  }
  var gt = w.ReactCurrentOwner, ta = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  }, Za, er, F;
  F = {};
  function te(p) {
    if (Dt.call(p, "ref")) {
      var M = Object.getOwnPropertyDescriptor(p, "ref").get;
      if (M && M.isReactWarning)
        return !1;
    }
    return p.ref !== void 0;
  }
  function De(p) {
    if (Dt.call(p, "key")) {
      var M = Object.getOwnPropertyDescriptor(p, "key").get;
      if (M && M.isReactWarning)
        return !1;
    }
    return p.key !== void 0;
  }
  function We(p, M) {
    if (typeof p.ref == "string" && gt.current && M && gt.current.stateNode !== M) {
      var U = Te(gt.current.type);
      F[U] || (H('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Te(gt.current.type), p.ref), F[U] = !0);
    }
  }
  function Xe(p, M) {
    {
      var U = function() {
        Za || (Za = !0, H("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
      };
      U.isReactWarning = !0, Object.defineProperty(p, "key", {
        get: U,
        configurable: !0
      });
    }
  }
  function _t(p, M) {
    {
      var U = function() {
        er || (er = !0, H("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
      };
      U.isReactWarning = !0, Object.defineProperty(p, "ref", {
        get: U,
        configurable: !0
      });
    }
  }
  var bt = function(p, M, U, oe, we, He, le) {
    var xe = {
      // This tag allows us to uniquely identify this as a React Element
      $$typeof: R,
      // Built-in properties that belong on the element
      type: p,
      key: M,
      ref: U,
      props: le,
      // Record the component responsible for creating this element.
      _owner: He
    };
    return xe._store = {}, Object.defineProperty(xe._store, "validated", {
      configurable: !1,
      enumerable: !1,
      writable: !0,
      value: !1
    }), Object.defineProperty(xe, "_self", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: oe
    }), Object.defineProperty(xe, "_source", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: we
    }), Object.freeze && (Object.freeze(xe.props), Object.freeze(xe)), xe;
  };
  function Dn(p, M, U, oe, we) {
    {
      var He, le = {}, xe = null, Ot = null;
      U !== void 0 && (Hn(U), xe = "" + U), De(M) && (Hn(M.key), xe = "" + M.key), te(M) && (Ot = M.ref, We(M, we));
      for (He in M)
        Dt.call(M, He) && !ta.hasOwnProperty(He) && (le[He] = M[He]);
      if (p && p.defaultProps) {
        var rt = p.defaultProps;
        for (He in rt)
          le[He] === void 0 && (le[He] = rt[He]);
      }
      if (xe || Ot) {
        var ct = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
        xe && Xe(le, ct), Ot && _t(le, ct);
      }
      return bt(p, xe, Ot, we, oe, gt.current, le);
    }
  }
  var et = w.ReactCurrentOwner, jn = w.ReactDebugCurrentFrame;
  function ut(p) {
    if (p) {
      var M = p._owner, U = Ft(p.type, p._source, M ? M.type : null);
      jn.setExtraStackFrame(U);
    } else
      jn.setExtraStackFrame(null);
  }
  var ot;
  ot = !1;
  function za(p) {
    return typeof p == "object" && p !== null && p.$$typeof === R;
  }
  function ha() {
    {
      if (et.current) {
        var p = Te(et.current.type);
        if (p)
          return `

Check the render method of \`` + p + "`.";
      }
      return "";
    }
  }
  function li(p) {
    return "";
  }
  var qi = {};
  function Qu(p) {
    {
      var M = ha();
      if (!M) {
        var U = typeof p == "string" ? p : p.displayName || p.name;
        U && (M = `

Check the top-level render call using <` + U + ">.");
      }
      return M;
    }
  }
  function si(p, M) {
    {
      if (!p._store || p._store.validated || p.key != null)
        return;
      p._store.validated = !0;
      var U = Qu(M);
      if (qi[U])
        return;
      qi[U] = !0;
      var oe = "";
      p && p._owner && p._owner !== et.current && (oe = " It was passed a child from " + Te(p._owner.type) + "."), ut(p), H('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', U, oe), ut(null);
    }
  }
  function ci(p, M) {
    {
      if (typeof p != "object")
        return;
      if (Zn(p))
        for (var U = 0; U < p.length; U++) {
          var oe = p[U];
          za(oe) && si(oe, M);
        }
      else if (za(p))
        p._store && (p._store.validated = !0);
      else if (p) {
        var we = j(p);
        if (typeof we == "function" && we !== p.entries)
          for (var He = we.call(p), le; !(le = He.next()).done; )
            za(le.value) && si(le.value, M);
      }
    }
  }
  function tr(p) {
    {
      var M = p.type;
      if (M == null || typeof M == "string")
        return;
      var U;
      if (typeof M == "function")
        U = M.propTypes;
      else if (typeof M == "object" && (M.$$typeof === ne || // Note: Memo only checks outer props here.
      // Inner props are checked in the reconciler.
      M.$$typeof === P))
        U = M.propTypes;
      else
        return;
      if (U) {
        var oe = Te(M);
        Tn(U, p.props, "prop", oe, p);
      } else if (M.PropTypes !== void 0 && !ot) {
        ot = !0;
        var we = Te(M);
        H("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
      }
      typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && H("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function Or(p) {
    {
      for (var M = Object.keys(p.props), U = 0; U < M.length; U++) {
        var oe = M[U];
        if (oe !== "children" && oe !== "key") {
          ut(p), H("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), ut(null);
          break;
        }
      }
      p.ref !== null && (ut(p), H("Invalid attribute `ref` supplied to `React.Fragment`."), ut(null));
    }
  }
  var nr = {};
  function ma(p, M, U, oe, we, He) {
    {
      var le = ze(p);
      if (!le) {
        var xe = "";
        (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (xe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var Ot = li();
        Ot ? xe += Ot : xe += ha();
        var rt;
        p === null ? rt = "null" : Zn(p) ? rt = "array" : p !== void 0 && p.$$typeof === R ? (rt = "<" + (Te(p.type) || "Unknown") + " />", xe = " Did you accidentally export a JSX literal instead of a component?") : rt = typeof p, H("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", rt, xe);
      }
      var ct = Dn(p, M, U, we, He);
      if (ct == null)
        return ct;
      if (le) {
        var un = M.children;
        if (un !== void 0)
          if (oe)
            if (Zn(un)) {
              for (var ja = 0; ja < un.length; ja++)
                ci(un[ja], p);
              Object.freeze && Object.freeze(un);
            } else
              H("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            ci(un, p);
      }
      if (Dt.call(M, "key")) {
        var na = Te(p), Vt = Object.keys(M).filter(function(ar) {
          return ar !== "key";
        }), Fn = Vt.length > 0 ? "{key: someKey, " + Vt.join(": ..., ") + ": ...}" : "{key: someKey}";
        if (!nr[na + Fn]) {
          var _e = Vt.length > 0 ? "{" + Vt.join(": ..., ") + ": ...}" : "{}";
          H(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Fn, na, _e, na), nr[na + Fn] = !0;
        }
      }
      return p === W ? Or(ct) : tr(ct), ct;
    }
  }
  function ya(p, M, U) {
    return ma(p, M, U, !0);
  }
  function Ha(p, M, U) {
    return ma(p, M, U, !1);
  }
  var fi = Ha, wr = ya;
  rf.Fragment = W, rf.jsx = fi, rf.jsxs = wr;
})();
FS.exports = rf;
var Tw = FS.exports;
const La = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 };
let Dw = 0;
function xw(h, R) {
  const L = `atom${++Dw}`, W = {
    toString() {
      return (La ? "production" : void 0) !== "production" && this.debugLabel ? L + ":" + this.debugLabel : L;
    }
  };
  return W.init = h, W.read = _w, W.write = Ow, W;
}
function _w(h) {
  return h(this);
}
function Ow(h, R, L) {
  return R(
    this,
    typeof L == "function" ? L(h(this)) : L
  );
}
const MS = (h, R) => h.unstable_is ? h.unstable_is(R) : R === h, ph = (h) => "init" in h, hh = (h) => !!h.write, of = /* @__PURE__ */ new WeakMap(), gh = (h) => {
  var R;
  return bh(h) && !((R = of.get(h)) != null && R[1]);
}, ww = (h, R) => {
  const L = of.get(h);
  if (L)
    L[1] = !0, L[0].forEach((W) => W(R));
  else if ((La ? "production" : void 0) !== "production")
    throw new Error("[Bug] cancelable promise not found");
}, Mw = (h) => {
  if (of.has(h))
    return;
  const R = [/* @__PURE__ */ new Set(), !1];
  of.set(h, R);
  const L = () => {
    R[1] = !0;
  };
  h.then(L, L), h.onCancel = (W) => {
    R[0].add(W);
  };
}, bh = (h) => typeof (h == null ? void 0 : h.then) == "function", AS = (h) => "v" in h || "e" in h, af = (h) => {
  if ("e" in h)
    throw h.e;
  if ((La ? "production" : void 0) !== "production" && !("v" in h))
    throw new Error("[Bug] atom state is not initialized");
  return h.v;
}, VS = (h, R, L) => {
  L.p.has(h) || (L.p.add(h), R.then(
    () => {
      L.p.delete(h);
    },
    () => {
      L.p.delete(h);
    }
  ));
}, LS = (h, R, L, W, Fe) => {
  var Se;
  if ((La ? "production" : void 0) !== "production" && W === R)
    throw new Error("[Bug] atom cannot depend on itself");
  L.d.set(W, Fe.n), gh(L.v) && VS(R, L.v, Fe), (Se = Fe.m) == null || Se.t.add(R), h && Aw(h, W, R);
}, qu = () => [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), /* @__PURE__ */ new Set()], mh = (h, R, L) => {
  h[0].has(R) || h[0].set(R, /* @__PURE__ */ new Set()), h[1].set(R, L);
}, Aw = (h, R, L) => {
  const W = h[0].get(R);
  W && W.add(L);
}, Lw = (h, R) => h[0].get(R), US = (h, R) => {
  h[2].add(R);
}, Gi = (h) => {
  for (; h[1].size || h[2].size; ) {
    h[0].clear();
    const R = new Set(h[1].values());
    h[1].clear();
    const L = new Set(h[2]);
    h[2].clear(), R.forEach((W) => {
      var Fe;
      return (Fe = W.m) == null ? void 0 : Fe.l.forEach((Se) => Se());
    }), L.forEach((W) => W());
  }
}, BS = (h) => {
  let R;
  (La ? "production" : void 0) !== "production" && (R = /* @__PURE__ */ new Set());
  const L = (I, j, w) => {
    const H = "v" in j, X = j.v, ee = gh(j.v) ? j.v : null;
    if (bh(w)) {
      Mw(w);
      for (const q of j.d.keys())
        VS(
          I,
          w,
          h(q, j)
        );
      j.v = w, delete j.e;
    } else
      j.v = w, delete j.e;
    (!H || !Object.is(X, j.v)) && (++j.n, ee && ww(ee, w));
  }, W = (I, j, w, H) => {
    var X;
    if (!(H != null && H(j)) && AS(w) && (w.m || Array.from(w.d).every(
      ([ve, ze]) => (
        // Recursively, read the atom state of the dependency, and
        // check if the atom epoch number is unchanged
        W(I, ve, h(ve, w), H).n === ze
      )
    )))
      return w;
    w.d.clear();
    let ee = !0;
    const q = (ve) => {
      if (MS(j, ve)) {
        const Ce = h(ve, w);
        if (!AS(Ce))
          if (ph(ve))
            L(ve, Ce, ve.init);
          else
            throw new Error("no atom init");
        return af(Ce);
      }
      const ze = W(
        I,
        ve,
        h(ve, w),
        H
      );
      if (ee)
        LS(I, j, w, ve, ze);
      else {
        const Ce = qu();
        LS(Ce, j, w, ve, ze), N(Ce, j, w), Gi(Ce);
      }
      return af(ze);
    };
    let ye, ie;
    const ke = {
      get signal() {
        return ye || (ye = new AbortController()), ye.signal;
      },
      get setSelf() {
        return (La ? "production" : void 0) !== "production" && !hh(j) && console.warn("setSelf function cannot be used with read-only atom"), !ie && hh(j) && (ie = (...ve) => {
          if ((La ? "production" : void 0) !== "production" && ee && console.warn("setSelf function cannot be called in sync"), !ee)
            return ne(j, ...ve);
        }), ie;
      }
    };
    try {
      const ve = j.read(q, ke);
      if (L(j, w, ve), bh(ve)) {
        (X = ve.onCancel) == null || X.call(ve, () => ye == null ? void 0 : ye.abort());
        const ze = () => {
          if (w.m) {
            const Ce = qu();
            N(Ce, j, w), Gi(Ce);
          }
        };
        ve.then(ze, ze);
      }
      return w;
    } catch (ve) {
      return delete w.v, w.e = ve, ++w.n, w;
    } finally {
      ee = !1;
    }
  }, Fe = (I) => af(W(void 0, I, h(I))), Se = (I, j, w) => {
    var H, X;
    const ee = /* @__PURE__ */ new Map();
    for (const q of ((H = w.m) == null ? void 0 : H.t) || [])
      ee.set(q, h(q, w));
    for (const q of w.p)
      ee.set(
        q,
        h(q, w)
      );
    return (X = Lw(I, j)) == null || X.forEach((q) => {
      ee.set(q, h(q, w));
    }), ee;
  }, d = (I, j, w) => {
    const H = [], X = /* @__PURE__ */ new Set(), ee = (ie, ke) => {
      if (!X.has(ie)) {
        X.add(ie);
        for (const [ve, ze] of Se(I, ie, ke))
          ie !== ve && ee(ve, ze);
        H.push([ie, ke, ke.n]);
      }
    };
    ee(j, w);
    const q = /* @__PURE__ */ new Set([j]), ye = (ie) => X.has(ie);
    for (let ie = H.length - 1; ie >= 0; --ie) {
      const [ke, ve, ze] = H[ie];
      let Ce = !1;
      for (const Ht of ve.d.keys())
        if (Ht !== ke && q.has(Ht)) {
          Ce = !0;
          break;
        }
      Ce && (W(I, ke, ve, ye), N(I, ke, ve), ze !== ve.n && (mh(I, ke, ve), q.add(ke))), X.delete(ke);
    }
  }, $e = (I, j, w, ...H) => {
    const X = (ye) => af(W(I, ye, h(ye, w))), ee = (ye, ...ie) => {
      const ke = h(ye, w);
      let ve;
      if (MS(j, ye)) {
        if (!ph(ye))
          throw new Error("atom not writable");
        const ze = "v" in ke, Ce = ke.v, Ht = ie[0];
        L(ye, ke, Ht), N(I, ye, ke), (!ze || !Object.is(Ce, ke.v)) && (mh(I, ye, ke), d(I, ye, ke));
      } else
        ve = $e(I, ye, ke, ...ie);
      return Gi(I), ve;
    };
    return j.write(X, ee, ...H);
  }, ne = (I, ...j) => {
    const w = qu(), H = $e(w, I, h(I), ...j);
    return Gi(w), H;
  }, N = (I, j, w) => {
    if (w.m && !gh(w.v)) {
      for (const H of w.d.keys())
        w.m.d.has(H) || (Ve(I, H, h(H, w)).t.add(j), w.m.d.add(H));
      for (const H of w.m.d || [])
        if (!w.d.has(H)) {
          w.m.d.delete(H);
          const X = P(I, H, h(H, w));
          X == null || X.t.delete(j);
        }
    }
  }, Ve = (I, j, w) => {
    if (!w.m) {
      W(I, j, w);
      for (const H of w.d.keys())
        Ve(I, H, h(H, w)).t.add(j);
      if (w.m = {
        l: /* @__PURE__ */ new Set(),
        d: new Set(w.d.keys()),
        t: /* @__PURE__ */ new Set()
      }, (La ? "production" : void 0) !== "production" && R.add(j), hh(j) && j.onMount) {
        const H = w.m, { onMount: X } = j;
        US(I, () => {
          const ee = X(
            (...q) => $e(I, j, w, ...q)
          );
          ee && (H.u = ee);
        });
      }
    }
    return w.m;
  }, P = (I, j, w) => {
    if (w.m && !w.m.l.size && !Array.from(w.m.t).some(
      (H) => {
        var X;
        return (X = h(H, w).m) == null ? void 0 : X.d.has(j);
      }
    )) {
      const H = w.m.u;
      H && US(I, H), delete w.m, (La ? "production" : void 0) !== "production" && R.delete(j);
      for (const X of w.d.keys()) {
        const ee = P(I, X, h(X, w));
        ee == null || ee.t.delete(j);
      }
      return;
    }
    return w.m;
  }, de = {
    get: Fe,
    set: ne,
    sub: (I, j) => {
      const w = qu(), H = h(I), X = Ve(w, I, H);
      Gi(w);
      const ee = X.l;
      return ee.add(j), () => {
        ee.delete(j);
        const q = qu();
        P(q, I, H), Gi(q);
      };
    },
    unstable_derive: (I) => BS(...I(h))
  };
  return (La ? "production" : void 0) !== "production" && Object.assign(de, {
    // store dev methods (these are tentative and subject to change without notice)
    dev4_get_internal_weak_map: () => ({
      get: (j) => {
        const w = h(j);
        if (w.n !== 0)
          return w;
      }
    }),
    dev4_get_mounted_atoms: () => R,
    dev4_restore_atoms: (j) => {
      const w = qu();
      for (const [H, X] of j)
        if (ph(H)) {
          const ee = h(H), q = "v" in ee, ye = ee.v;
          L(H, ee, X), N(w, H, ee), (!q || !Object.is(ye, ee.v)) && (mh(w, H, ee), d(w, H, ee));
        }
      Gi(w);
    }
  }), de;
}, Uw = () => {
  const h = /* @__PURE__ */ new WeakMap();
  return BS((L) => {
    let W = h.get(L);
    return W || (W = { d: /* @__PURE__ */ new Map(), p: /* @__PURE__ */ new Set(), n: 0 }, h.set(L, W)), W;
  });
};
let Vl;
const kw = () => (Vl || (Vl = Uw(), (La ? "production" : void 0) !== "production" && (globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = Vl), globalThis.__JOTAI_DEFAULT_STORE__ !== Vl && console.warn(
  "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
))), Vl), YS = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, Nw = Ua.createContext(
  void 0
), $S = (h) => Ua.useContext(Nw) || kw(), PS = (h) => typeof (h == null ? void 0 : h.then) == "function", zw = (h) => {
  h.status = "pending", h.then(
    (R) => {
      h.status = "fulfilled", h.value = R;
    },
    (R) => {
      h.status = "rejected", h.reason = R;
    }
  );
}, Hw = Sh.use || ((h) => {
  if (h.status === "pending")
    throw h;
  if (h.status === "fulfilled")
    return h.value;
  throw h.status === "rejected" ? h.reason : (zw(h), h);
}), yh = /* @__PURE__ */ new WeakMap(), jw = (h) => {
  let R = yh.get(h);
  return R || (R = new Promise((L, W) => {
    let Fe = h;
    const Se = (ne) => (N) => {
      Fe === ne && L(N);
    }, d = (ne) => (N) => {
      Fe === ne && W(N);
    }, $e = (ne) => {
      "onCancel" in ne && typeof ne.onCancel == "function" && ne.onCancel((N) => {
        if ((YS ? "production" : void 0) !== "production" && N === ne)
          throw new Error("[Bug] p is not updated even after cancelation");
        PS(N) ? (yh.set(N, R), Fe = N, N.then(Se(N), d(N)), $e(N)) : L(N);
      });
    };
    h.then(Se(h), d(h)), $e(h);
  }), yh.set(h, R)), R;
};
function Fw(h, R) {
  const L = $S(), [[W, Fe, Se], d] = Ua.useReducer(
    (N) => {
      const Ve = L.get(h);
      return Object.is(N[0], Ve) && N[1] === L && N[2] === h ? N : [Ve, L, h];
    },
    void 0,
    () => [L.get(h), L, h]
  );
  let $e = W;
  if ((Fe !== L || Se !== h) && (d(), $e = L.get(h)), Ua.useEffect(() => {
    const N = L.sub(h, () => {
      d();
    });
    return d(), N;
  }, [L, h, void 0]), Ua.useDebugValue($e), PS($e)) {
    const N = jw($e);
    return Hw(N);
  }
  return $e;
}
function Vw(h, R) {
  const L = $S();
  return Ua.useCallback(
    (...Fe) => {
      if ((YS ? "production" : void 0) !== "production" && !("write" in h))
        throw new Error("not writable atom");
      return L.set(h, ...Fe);
    },
    [L, h]
  );
}
function Bw(h, R) {
  return [
    Fw(h),
    // We do wrong type assertion here, which results in throwing an error.
    Vw(h)
  ];
}
const Yw = xw("123"), $w = ({ title: h }) => {
  const [R] = Bw(Yw), [L, W] = Ua.useState("");
  return console.log("first"), Ua.useEffect(() => {
    console.log("effect"), console.log("http://localhost:4200"), (async () => (await fetch(
      "http://localhost:4200/api/data"
    )).json().then(($e) => (console.log("data"), W($e.data), $e.data)))();
  }, []), /* @__PURE__ */ Tw.jsxs("div", { className: "h-full", children: [
    h + R + L,
    " FUCK"
  ] });
}, Pw = Rw($w, {
  props: { title: "string" }
});
customElements.define("my-component", Pw);
