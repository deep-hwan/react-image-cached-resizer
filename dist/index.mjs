import * as K from "react";
import { forwardRef as Be, useContext as kt, useState as Ye, useRef as mr, useEffect as Ve } from "react";
function It(e) {
  if (e.__esModule)
    return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function a() {
      return this instanceof a ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var o = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(t, a, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[a];
      }
    });
  }), t;
}
var ur = { exports: {} }, ge = {};
const Jr = /* @__PURE__ */ It(K);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dr;
function Dt() {
  if (Dr)
    return ge;
  Dr = 1;
  var e = Jr, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, d, h) {
    var p, v = {}, x = null, C = null;
    h !== void 0 && (x = "" + h), d.key !== void 0 && (x = "" + d.key), d.ref !== void 0 && (C = d.ref);
    for (p in d)
      a.call(d, p) && !i.hasOwnProperty(p) && (v[p] = d[p]);
    if (l && l.defaultProps)
      for (p in d = l.defaultProps, d)
        v[p] === void 0 && (v[p] = d[p]);
    return { $$typeof: r, type: l, key: x, ref: C, props: v, _owner: o.current };
  }
  return ge.Fragment = t, ge.jsx = c, ge.jsxs = c, ge;
}
var ye = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fr;
function Ft() {
  return Fr || (Fr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Jr, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), S = Symbol.iterator, g = "@@iterator";
    function O(n) {
      if (n === null || typeof n != "object")
        return null;
      var s = S && n[S] || n[g];
      return typeof s == "function" ? s : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(n) {
      {
        for (var s = arguments.length, f = new Array(s > 1 ? s - 1 : 0), E = 1; E < s; E++)
          f[E - 1] = arguments[E];
        _("error", n, f);
      }
    }
    function _(n, s, f) {
      {
        var E = b.ReactDebugCurrentFrame, T = E.getStackAddendum();
        T !== "" && (s += "%s", f = f.concat([T]));
        var D = f.map(function(R) {
          return String(R);
        });
        D.unshift("Warning: " + s), Function.prototype.apply.call(console[n], console, D);
      }
    }
    var I = !1, u = !1, F = !1, k = !1, Ze = !1, Se;
    Se = Symbol.for("react.module.reference");
    function Xe(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === a || n === i || Ze || n === o || n === h || n === p || k || n === C || I || u || F || typeof n == "object" && n !== null && (n.$$typeof === x || n.$$typeof === v || n.$$typeof === c || n.$$typeof === l || n.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === Se || n.getModuleId !== void 0));
    }
    function Qe(n, s, f) {
      var E = n.displayName;
      if (E)
        return E;
      var T = s.displayName || s.name || "";
      return T !== "" ? f + "(" + T + ")" : f;
    }
    function Oe(n) {
      return n.displayName || "Context";
    }
    function G(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case a:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            var s = n;
            return Oe(s) + ".Consumer";
          case c:
            var f = n;
            return Oe(f._context) + ".Provider";
          case d:
            return Qe(n, n.render, "ForwardRef");
          case v:
            var E = n.displayName || null;
            return E !== null ? E : G(n.type) || "Memo";
          case x: {
            var T = n, D = T._payload, R = T._init;
            try {
              return G(R(D));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ee = 0, Te, Ae, fe, Pe, le, Ne, $e;
    function ke() {
    }
    ke.__reactDisabledLog = !0;
    function er() {
      {
        if (ee === 0) {
          Te = console.log, Ae = console.info, fe = console.warn, Pe = console.error, le = console.group, Ne = console.groupCollapsed, $e = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: ke,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        ee++;
      }
    }
    function rr() {
      {
        if (ee--, ee === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, n, {
              value: Te
            }),
            info: X({}, n, {
              value: Ae
            }),
            warn: X({}, n, {
              value: fe
            }),
            error: X({}, n, {
              value: Pe
            }),
            group: X({}, n, {
              value: le
            }),
            groupCollapsed: X({}, n, {
              value: Ne
            }),
            groupEnd: X({}, n, {
              value: $e
            })
          });
        }
        ee < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = b.ReactCurrentDispatcher, pe;
    function te(n, s, f) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (T) {
            var E = T.stack.trim().match(/\n( *(at )?)/);
            pe = E && E[1] || "";
          }
        return `
` + pe + n;
      }
    }
    var he = !1, ne;
    {
      var tr = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new tr();
    }
    function m(n, s) {
      if (!n || he)
        return "";
      {
        var f = ne.get(n);
        if (f !== void 0)
          return f;
      }
      var E;
      he = !0;
      var T = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var D;
      D = de.current, de.current = null, er();
      try {
        if (s) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (Q) {
              E = Q;
            }
            Reflect.construct(n, [], R);
          } else {
            try {
              R.call();
            } catch (Q) {
              E = Q;
            }
            n.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Q) {
            E = Q;
          }
          n();
        }
      } catch (Q) {
        if (Q && E && typeof Q.stack == "string") {
          for (var w = Q.stack.split(`
`), U = E.stack.split(`
`), M = w.length - 1, j = U.length - 1; M >= 1 && j >= 0 && w[M] !== U[j]; )
            j--;
          for (; M >= 1 && j >= 0; M--, j--)
            if (w[M] !== U[j]) {
              if (M !== 1 || j !== 1)
                do
                  if (M--, j--, j < 0 || w[M] !== U[j]) {
                    var q = `
` + w[M].replace(" at new ", " at ");
                    return n.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", n.displayName)), typeof n == "function" && ne.set(n, q), q;
                  }
                while (M >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        he = !1, de.current = D, rr(), Error.prepareStackTrace = T;
      }
      var ie = n ? n.displayName || n.name : "", Ir = ie ? te(ie) : "";
      return typeof n == "function" && ne.set(n, Ir), Ir;
    }
    function me(n, s, f) {
      return m(n, !1);
    }
    function ae(n) {
      var s = n.prototype;
      return !!(s && s.isReactComponent);
    }
    function re(n, s, f) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return m(n, ae(n));
      if (typeof n == "string")
        return te(n);
      switch (n) {
        case h:
          return te("Suspense");
        case p:
          return te("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case d:
            return me(n.render);
          case v:
            return re(n.type, s, f);
          case x: {
            var E = n, T = E._payload, D = E._init;
            try {
              return re(D(T), s, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, xr = {}, _r = b.ReactDebugCurrentFrame;
    function De(n) {
      if (n) {
        var s = n._owner, f = re(n.type, n._source, s ? s.type : null);
        _r.setExtraStackFrame(f);
      } else
        _r.setExtraStackFrame(null);
    }
    function pt(n, s, f, E, T) {
      {
        var D = Function.call.bind(Ie);
        for (var R in n)
          if (D(n, R)) {
            var w = void 0;
            try {
              if (typeof n[R] != "function") {
                var U = Error((E || "React class") + ": " + f + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw U.name = "Invariant Violation", U;
              }
              w = n[R](s, R, E, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (M) {
              w = M;
            }
            w && !(w instanceof Error) && (De(T), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", f, R, typeof w), De(null)), w instanceof Error && !(w.message in xr) && (xr[w.message] = !0, De(T), y("Failed %s type: %s", f, w.message), De(null));
          }
      }
    }
    var ht = Array.isArray;
    function nr(n) {
      return ht(n);
    }
    function mt(n) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, f = s && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return f;
      }
    }
    function vt(n) {
      try {
        return wr(n), !1;
      } catch {
        return !0;
      }
    }
    function wr(n) {
      return "" + n;
    }
    function Rr(n) {
      if (vt(n))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mt(n)), wr(n);
    }
    var ve = b.ReactCurrentOwner, gt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Sr, Or, ar;
    ar = {};
    function yt(n) {
      if (Ie.call(n, "ref")) {
        var s = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Et(n) {
      if (Ie.call(n, "key")) {
        var s = Object.getOwnPropertyDescriptor(n, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function bt(n, s) {
      if (typeof n.ref == "string" && ve.current && s && ve.current.stateNode !== s) {
        var f = G(ve.current.type);
        ar[f] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(ve.current.type), n.ref), ar[f] = !0);
      }
    }
    function Ct(n, s) {
      {
        var f = function() {
          Sr || (Sr = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        f.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function xt(n, s) {
      {
        var f = function() {
          Or || (Or = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        f.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var _t = function(n, s, f, E, T, D, R) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: n,
        key: s,
        ref: f,
        props: R,
        // Record the component responsible for creating this element.
        _owner: D
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function wt(n, s, f, E, T) {
      {
        var D, R = {}, w = null, U = null;
        f !== void 0 && (Rr(f), w = "" + f), Et(s) && (Rr(s.key), w = "" + s.key), yt(s) && (U = s.ref, bt(s, T));
        for (D in s)
          Ie.call(s, D) && !gt.hasOwnProperty(D) && (R[D] = s[D]);
        if (n && n.defaultProps) {
          var M = n.defaultProps;
          for (D in M)
            R[D] === void 0 && (R[D] = M[D]);
        }
        if (w || U) {
          var j = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          w && Ct(R, j), U && xt(R, j);
        }
        return _t(n, w, U, T, E, ve.current, R);
      }
    }
    var or = b.ReactCurrentOwner, Tr = b.ReactDebugCurrentFrame;
    function oe(n) {
      if (n) {
        var s = n._owner, f = re(n.type, n._source, s ? s.type : null);
        Tr.setExtraStackFrame(f);
      } else
        Tr.setExtraStackFrame(null);
    }
    var ir;
    ir = !1;
    function sr(n) {
      return typeof n == "object" && n !== null && n.$$typeof === r;
    }
    function Ar() {
      {
        if (or.current) {
          var n = G(or.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Rt(n) {
      {
        if (n !== void 0) {
          var s = n.fileName.replace(/^.*[\\\/]/, ""), f = n.lineNumber;
          return `

Check your code at ` + s + ":" + f + ".";
        }
        return "";
      }
    }
    var Pr = {};
    function St(n) {
      {
        var s = Ar();
        if (!s) {
          var f = typeof n == "string" ? n : n.displayName || n.name;
          f && (s = `

Check the top-level render call using <` + f + ">.");
        }
        return s;
      }
    }
    function Nr(n, s) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var f = St(s);
        if (Pr[f])
          return;
        Pr[f] = !0;
        var E = "";
        n && n._owner && n._owner !== or.current && (E = " It was passed a child from " + G(n._owner.type) + "."), oe(n), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, E), oe(null);
      }
    }
    function $r(n, s) {
      {
        if (typeof n != "object")
          return;
        if (nr(n))
          for (var f = 0; f < n.length; f++) {
            var E = n[f];
            sr(E) && Nr(E, s);
          }
        else if (sr(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var T = O(n);
          if (typeof T == "function" && T !== n.entries)
            for (var D = T.call(n), R; !(R = D.next()).done; )
              sr(R.value) && Nr(R.value, s);
        }
      }
    }
    function Ot(n) {
      {
        var s = n.type;
        if (s == null || typeof s == "string")
          return;
        var f;
        if (typeof s == "function")
          f = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === v))
          f = s.propTypes;
        else
          return;
        if (f) {
          var E = G(s);
          pt(f, n.props, "prop", E, n);
        } else if (s.PropTypes !== void 0 && !ir) {
          ir = !0;
          var T = G(s);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(n) {
      {
        for (var s = Object.keys(n.props), f = 0; f < s.length; f++) {
          var E = s[f];
          if (E !== "children" && E !== "key") {
            oe(n), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), oe(null);
            break;
          }
        }
        n.ref !== null && (oe(n), y("Invalid attribute `ref` supplied to `React.Fragment`."), oe(null));
      }
    }
    function kr(n, s, f, E, T, D) {
      {
        var R = Xe(n);
        if (!R) {
          var w = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var U = Rt(T);
          U ? w += U : w += Ar();
          var M;
          n === null ? M = "null" : nr(n) ? M = "array" : n !== void 0 && n.$$typeof === r ? (M = "<" + (G(n.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : M = typeof n, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", M, w);
        }
        var j = wt(n, s, f, T, D);
        if (j == null)
          return j;
        if (R) {
          var q = s.children;
          if (q !== void 0)
            if (E)
              if (nr(q)) {
                for (var ie = 0; ie < q.length; ie++)
                  $r(q[ie], n);
                Object.freeze && Object.freeze(q);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $r(q, n);
        }
        return n === a ? Tt(j) : Ot(j), j;
      }
    }
    function At(n, s, f) {
      return kr(n, s, f, !0);
    }
    function Pt(n, s, f) {
      return kr(n, s, f, !1);
    }
    var Nt = Pt, $t = At;
    ye.Fragment = a, ye.jsx = Nt, ye.jsxs = $t;
  }()), ye;
}
process.env.NODE_ENV === "production" ? ur.exports = Dt() : ur.exports = Ft();
var be = ur.exports;
function Mt(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function jt(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Lt = /* @__PURE__ */ function() {
  function e(t) {
    var a = this;
    this._insertTag = function(o) {
      var i;
      a.tags.length === 0 ? a.insertionPoint ? i = a.insertionPoint.nextSibling : a.prepend ? i = a.container.firstChild : i = a.before : i = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(o, i), a.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, r.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(jt(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = a.charCodeAt(0) === 64 && a.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + a + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var c = Mt(o);
      try {
        c.insertRule(a, c.cssRules.length);
      } catch (l) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(a) && console.error('There was a problem inserting the following rule: "' + a + '"', l);
      }
    } else
      o.appendChild(document.createTextNode(a));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(a) {
      return a.parentNode && a.parentNode.removeChild(a);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), W = "-ms-", We = "-moz-", A = "-webkit-", vr = "comm", gr = "rule", yr = "decl", Yt = "@import", Kr = "@keyframes", Vt = "@layer", Wt = Math.abs, qe = String.fromCharCode, Ut = Object.assign;
function Ht(e, r) {
  return V(e, 0) ^ 45 ? (((r << 2 ^ V(e, 0)) << 2 ^ V(e, 1)) << 2 ^ V(e, 2)) << 2 ^ V(e, 3) : 0;
}
function Zr(e) {
  return e.trim();
}
function Bt(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function P(e, r, t) {
  return e.replace(r, t);
}
function fr(e, r) {
  return e.indexOf(r);
}
function V(e, r) {
  return e.charCodeAt(r) | 0;
}
function Ce(e, r, t) {
  return e.slice(r, t);
}
function J(e) {
  return e.length;
}
function Er(e) {
  return e.length;
}
function Fe(e, r) {
  return r.push(e), e;
}
function qt(e, r) {
  return e.map(r).join("");
}
var Ge = 1, ce = 1, Xr = 0, H = 0, L = 0, ue = "";
function ze(e, r, t, a, o, i, c) {
  return { value: e, root: r, parent: t, type: a, props: o, children: i, line: Ge, column: ce, length: c, return: "" };
}
function Ee(e, r) {
  return Ut(ze("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Gt() {
  return L;
}
function zt() {
  return L = H > 0 ? V(ue, --H) : 0, ce--, L === 10 && (ce = 1, Ge--), L;
}
function B() {
  return L = H < Xr ? V(ue, H++) : 0, ce++, L === 10 && (ce = 1, Ge++), L;
}
function Z() {
  return V(ue, H);
}
function Me() {
  return H;
}
function Re(e, r) {
  return Ce(ue, e, r);
}
function xe(e) {
  switch (e) {
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
function Qr(e) {
  return Ge = ce = 1, Xr = J(ue = e), H = 0, [];
}
function et(e) {
  return ue = "", e;
}
function je(e) {
  return Zr(Re(H - 1, lr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Jt(e) {
  for (; (L = Z()) && L < 33; )
    B();
  return xe(e) > 2 || xe(L) > 3 ? "" : " ";
}
function Kt(e, r) {
  for (; --r && B() && !(L < 48 || L > 102 || L > 57 && L < 65 || L > 70 && L < 97); )
    ;
  return Re(e, Me() + (r < 6 && Z() == 32 && B() == 32));
}
function lr(e) {
  for (; B(); )
    switch (L) {
      case e:
        return H;
      case 34:
      case 39:
        e !== 34 && e !== 39 && lr(L);
        break;
      case 40:
        e === 41 && lr(e);
        break;
      case 92:
        B();
        break;
    }
  return H;
}
function Zt(e, r) {
  for (; B() && e + L !== 57; )
    if (e + L === 84 && Z() === 47)
      break;
  return "/*" + Re(r, H - 1) + "*" + qe(e === 47 ? e : B());
}
function Xt(e) {
  for (; !xe(Z()); )
    B();
  return Re(e, H);
}
function Qt(e) {
  return et(Le("", null, null, null, [""], e = Qr(e), 0, [0], e));
}
function Le(e, r, t, a, o, i, c, l, d) {
  for (var h = 0, p = 0, v = c, x = 0, C = 0, S = 0, g = 1, O = 1, b = 1, y = 0, _ = "", I = o, u = i, F = a, k = _; O; )
    switch (S = y, y = B()) {
      case 40:
        if (S != 108 && V(k, v - 1) == 58) {
          fr(k += P(je(y), "&", "&\f"), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += je(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Jt(S);
        break;
      case 92:
        k += Kt(Me() - 1, 7);
        continue;
      case 47:
        switch (Z()) {
          case 42:
          case 47:
            Fe(en(Zt(B(), Me()), r, t), d);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * g:
        l[h++] = J(k) * b;
      case 125 * g:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            O = 0;
          case 59 + p:
            b == -1 && (k = P(k, /\f/g, "")), C > 0 && J(k) - v && Fe(C > 32 ? jr(k + ";", a, t, v - 1) : jr(P(k, " ", "") + ";", a, t, v - 2), d);
            break;
          case 59:
            k += ";";
          default:
            if (Fe(F = Mr(k, r, t, h, p, o, l, _, I = [], u = [], v), i), y === 123)
              if (p === 0)
                Le(k, r, F, F, I, i, v, l, u);
              else
                switch (x === 99 && V(k, 3) === 110 ? 100 : x) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Le(e, F, F, a && Fe(Mr(e, F, F, 0, 0, o, l, _, o, I = [], v), u), o, u, v, l, a ? I : u);
                    break;
                  default:
                    Le(k, F, F, F, [""], u, 0, l, u);
                }
        }
        h = p = C = 0, g = b = 1, _ = k = "", v = c;
        break;
      case 58:
        v = 1 + J(k), C = S;
      default:
        if (g < 1) {
          if (y == 123)
            --g;
          else if (y == 125 && g++ == 0 && zt() == 125)
            continue;
        }
        switch (k += qe(y), y * g) {
          case 38:
            b = p > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            l[h++] = (J(k) - 1) * b, b = 1;
            break;
          case 64:
            Z() === 45 && (k += je(B())), x = Z(), p = v = J(_ = k += Xt(Me())), y++;
            break;
          case 45:
            S === 45 && J(k) == 2 && (g = 0);
        }
    }
  return i;
}
function Mr(e, r, t, a, o, i, c, l, d, h, p) {
  for (var v = o - 1, x = o === 0 ? i : [""], C = Er(x), S = 0, g = 0, O = 0; S < a; ++S)
    for (var b = 0, y = Ce(e, v + 1, v = Wt(g = c[S])), _ = e; b < C; ++b)
      (_ = Zr(g > 0 ? x[b] + " " + y : P(y, /&\f/g, x[b]))) && (d[O++] = _);
  return ze(e, r, t, o === 0 ? gr : l, d, h, p);
}
function en(e, r, t) {
  return ze(e, r, t, vr, qe(Gt()), Ce(e, 2, -2), 0);
}
function jr(e, r, t, a) {
  return ze(e, r, t, yr, Ce(e, 0, a), Ce(e, a + 1, -1), a);
}
function se(e, r) {
  for (var t = "", a = Er(e), o = 0; o < a; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function rn(e, r, t, a) {
  switch (e.type) {
    case Vt:
      if (e.children.length)
        break;
    case Yt:
    case yr:
      return e.return = e.return || e.value;
    case vr:
      return "";
    case Kr:
      return e.return = e.value + "{" + se(e.children, a) + "}";
    case gr:
      e.value = e.props.join(",");
  }
  return J(t = se(e.children, a)) ? e.return = e.value + "{" + t + "}" : "";
}
function tn(e) {
  var r = Er(e);
  return function(t, a, o, i) {
    for (var c = "", l = 0; l < r; l++)
      c += e[l](t, a, o, i) || "";
    return c;
  };
}
function nn(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function an(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var on = function(r, t, a) {
  for (var o = 0, i = 0; o = i, i = Z(), o === 38 && i === 12 && (t[a] = 1), !xe(i); )
    B();
  return Re(r, H);
}, sn = function(r, t) {
  var a = -1, o = 44;
  do
    switch (xe(o)) {
      case 0:
        o === 38 && Z() === 12 && (t[a] = 1), r[a] += on(H - 1, t, a);
        break;
      case 2:
        r[a] += je(o);
        break;
      case 4:
        if (o === 44) {
          r[++a] = Z() === 58 ? "&\f" : "", t[a] = r[a].length;
          break;
        }
      default:
        r[a] += qe(o);
    }
  while (o = B());
  return r;
}, cn = function(r, t) {
  return et(sn(Qr(r), t));
}, Lr = /* @__PURE__ */ new WeakMap(), un = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, a = r.parent, o = r.column === a.column && r.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Lr.get(a)) && !o) {
      Lr.set(r, !0);
      for (var i = [], c = cn(t, i), l = a.props, d = 0, h = 0; d < c.length; d++)
        for (var p = 0; p < l.length; p++, h++)
          r.props[h] = i[d] ? c[d].replace(/&\f/g, l[p]) : l[p] + " " + c[d];
    }
  }
}, fn = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, ln = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", dn = function(r) {
  return r.type === "comm" && r.children.indexOf(ln) > -1;
}, pn = function(r) {
  return function(t, a, o) {
    if (!(t.type !== "rule" || r.compat)) {
      var i = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var c = !!t.parent, l = c ? t.parent.children : (
          // global rule at the root level
          o
        ), d = l.length - 1; d >= 0; d--) {
          var h = l[d];
          if (h.line < t.line)
            break;
          if (h.column < t.column) {
            if (dn(h))
              return;
            break;
          }
        }
        i.forEach(function(p) {
          console.error('The pseudo class "' + p + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + p.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, rt = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, hn = function(r, t) {
  for (var a = r - 1; a >= 0; a--)
    if (!rt(t[a]))
      return !0;
  return !1;
}, Yr = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, mn = function(r, t, a) {
  rt(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Yr(r)) : hn(t, a) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Yr(r)));
};
function tt(e, r) {
  switch (Ht(e, r)) {
    case 5103:
      return A + "print-" + e + e;
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
      return A + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return A + e + We + e + W + e + e;
    case 6828:
    case 4268:
      return A + e + W + e + e;
    case 6165:
      return A + e + W + "flex-" + e + e;
    case 5187:
      return A + e + P(e, /(\w+).+(:[^]+)/, A + "box-$1$2" + W + "flex-$1$2") + e;
    case 5443:
      return A + e + W + "flex-item-" + P(e, /flex-|-self/, "") + e;
    case 4675:
      return A + e + W + "flex-line-pack" + P(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return A + e + W + P(e, "shrink", "negative") + e;
    case 5292:
      return A + e + W + P(e, "basis", "preferred-size") + e;
    case 6060:
      return A + "box-" + P(e, "-grow", "") + A + e + W + P(e, "grow", "positive") + e;
    case 4554:
      return A + P(e, /([^-])(transform)/g, "$1" + A + "$2") + e;
    case 6187:
      return P(P(P(e, /(zoom-|grab)/, A + "$1"), /(image-set)/, A + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return P(e, /(image-set\([^]*)/, A + "$1$`$1");
    case 4968:
      return P(P(e, /(.+:)(flex-)?(.*)/, A + "box-pack:$3" + W + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + A + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return P(e, /(.+)-inline(.+)/, A + "$1$2") + e;
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
      if (J(e) - 1 - r > 6)
        switch (V(e, r + 1)) {
          case 109:
            if (V(e, r + 4) !== 45)
              break;
          case 102:
            return P(e, /(.+:)(.+)-([^]+)/, "$1" + A + "$2-$3$1" + We + (V(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~fr(e, "stretch") ? tt(P(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (V(e, r + 1) !== 115)
        break;
    case 6444:
      switch (V(e, J(e) - 3 - (~fr(e, "!important") && 10))) {
        case 107:
          return P(e, ":", ":" + A) + e;
        case 101:
          return P(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + A + (V(e, 14) === 45 ? "inline-" : "") + "box$3$1" + A + "$2$3$1" + W + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (V(e, r + 11)) {
        case 114:
          return A + e + W + P(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return A + e + W + P(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return A + e + W + P(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return A + e + W + e + e;
  }
  return e;
}
var vn = function(r, t, a, o) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case yr:
        r.return = tt(r.value, r.length);
        break;
      case Kr:
        return se([Ee(r, {
          value: P(r.value, "@", "@" + A)
        })], o);
      case gr:
        if (r.length)
          return qt(r.props, function(i) {
            switch (Bt(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return se([Ee(r, {
                  props: [P(i, /:(read-\w+)/, ":" + We + "$1")]
                })], o);
              case "::placeholder":
                return se([Ee(r, {
                  props: [P(i, /:(plac\w+)/, ":" + A + "input-$1")]
                }), Ee(r, {
                  props: [P(i, /:(plac\w+)/, ":" + We + "$1")]
                }), Ee(r, {
                  props: [P(i, /:(plac\w+)/, W + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, gn = [vn], yn = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(g) {
      var O = g.getAttribute("data-emotion");
      O.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || gn;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var i = {}, c, l = [];
  c = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(g) {
      for (var O = g.getAttribute("data-emotion").split(" "), b = 1; b < O.length; b++)
        i[O[b]] = !0;
      l.push(g);
    }
  );
  var d, h = [un, fn];
  process.env.NODE_ENV !== "production" && h.push(pn({
    get compat() {
      return S.compat;
    }
  }), mn);
  {
    var p, v = [rn, process.env.NODE_ENV !== "production" ? function(g) {
      g.root || (g.return ? p.insert(g.return) : g.value && g.type !== vr && p.insert(g.value + "{}"));
    } : nn(function(g) {
      p.insert(g);
    })], x = tn(h.concat(o, v)), C = function(O) {
      return se(Qt(O), x);
    };
    d = function(O, b, y, _) {
      p = y, process.env.NODE_ENV !== "production" && b.map !== void 0 && (p = {
        insert: function(u) {
          y.insert(u + b.map);
        }
      }), C(O ? O + "{" + b.styles + "}" : b.styles), _ && (S.inserted[b.name] = !0);
    };
  }
  var S = {
    key: t,
    sheet: new Lt({
      key: t,
      container: c,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: d
  };
  return S.sheet.hydrate(l), S;
}, dr = { exports: {} }, N = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function En() {
  if (Vr)
    return N;
  Vr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function _(u) {
    if (typeof u == "object" && u !== null) {
      var F = u.$$typeof;
      switch (F) {
        case r:
          switch (u = u.type, u) {
            case d:
            case h:
            case a:
            case i:
            case o:
            case v:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case l:
                case p:
                case S:
                case C:
                case c:
                  return u;
                default:
                  return F;
              }
          }
        case t:
          return F;
      }
    }
  }
  function I(u) {
    return _(u) === h;
  }
  return N.AsyncMode = d, N.ConcurrentMode = h, N.ContextConsumer = l, N.ContextProvider = c, N.Element = r, N.ForwardRef = p, N.Fragment = a, N.Lazy = S, N.Memo = C, N.Portal = t, N.Profiler = i, N.StrictMode = o, N.Suspense = v, N.isAsyncMode = function(u) {
    return I(u) || _(u) === d;
  }, N.isConcurrentMode = I, N.isContextConsumer = function(u) {
    return _(u) === l;
  }, N.isContextProvider = function(u) {
    return _(u) === c;
  }, N.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === r;
  }, N.isForwardRef = function(u) {
    return _(u) === p;
  }, N.isFragment = function(u) {
    return _(u) === a;
  }, N.isLazy = function(u) {
    return _(u) === S;
  }, N.isMemo = function(u) {
    return _(u) === C;
  }, N.isPortal = function(u) {
    return _(u) === t;
  }, N.isProfiler = function(u) {
    return _(u) === i;
  }, N.isStrictMode = function(u) {
    return _(u) === o;
  }, N.isSuspense = function(u) {
    return _(u) === v;
  }, N.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === a || u === h || u === i || u === o || u === v || u === x || typeof u == "object" && u !== null && (u.$$typeof === S || u.$$typeof === C || u.$$typeof === c || u.$$typeof === l || u.$$typeof === p || u.$$typeof === O || u.$$typeof === b || u.$$typeof === y || u.$$typeof === g);
  }, N.typeOf = _, N;
}
var $ = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr;
function bn() {
  return Wr || (Wr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function _(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === a || m === h || m === i || m === o || m === v || m === x || typeof m == "object" && m !== null && (m.$$typeof === S || m.$$typeof === C || m.$$typeof === c || m.$$typeof === l || m.$$typeof === p || m.$$typeof === O || m.$$typeof === b || m.$$typeof === y || m.$$typeof === g);
    }
    function I(m) {
      if (typeof m == "object" && m !== null) {
        var me = m.$$typeof;
        switch (me) {
          case r:
            var ae = m.type;
            switch (ae) {
              case d:
              case h:
              case a:
              case i:
              case o:
              case v:
                return ae;
              default:
                var re = ae && ae.$$typeof;
                switch (re) {
                  case l:
                  case p:
                  case S:
                  case C:
                  case c:
                    return re;
                  default:
                    return me;
                }
            }
          case t:
            return me;
        }
      }
    }
    var u = d, F = h, k = l, Ze = c, Se = r, Xe = p, Qe = a, Oe = S, G = C, X = t, ee = i, Te = o, Ae = v, fe = !1;
    function Pe(m) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), le(m) || I(m) === d;
    }
    function le(m) {
      return I(m) === h;
    }
    function Ne(m) {
      return I(m) === l;
    }
    function $e(m) {
      return I(m) === c;
    }
    function ke(m) {
      return typeof m == "object" && m !== null && m.$$typeof === r;
    }
    function er(m) {
      return I(m) === p;
    }
    function rr(m) {
      return I(m) === a;
    }
    function de(m) {
      return I(m) === S;
    }
    function pe(m) {
      return I(m) === C;
    }
    function te(m) {
      return I(m) === t;
    }
    function he(m) {
      return I(m) === i;
    }
    function ne(m) {
      return I(m) === o;
    }
    function tr(m) {
      return I(m) === v;
    }
    $.AsyncMode = u, $.ConcurrentMode = F, $.ContextConsumer = k, $.ContextProvider = Ze, $.Element = Se, $.ForwardRef = Xe, $.Fragment = Qe, $.Lazy = Oe, $.Memo = G, $.Portal = X, $.Profiler = ee, $.StrictMode = Te, $.Suspense = Ae, $.isAsyncMode = Pe, $.isConcurrentMode = le, $.isContextConsumer = Ne, $.isContextProvider = $e, $.isElement = ke, $.isForwardRef = er, $.isFragment = rr, $.isLazy = de, $.isMemo = pe, $.isPortal = te, $.isProfiler = he, $.isStrictMode = ne, $.isSuspense = tr, $.isValidElementType = _, $.typeOf = I;
  }()), $;
}
process.env.NODE_ENV === "production" ? dr.exports = En() : dr.exports = bn();
var Cn = dr.exports, nt = Cn, xn = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, _n = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, at = {};
at[nt.ForwardRef] = xn;
at[nt.Memo] = _n;
var wn = !0;
function Rn(e, r, t) {
  var a = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : a += o + " ";
  }), a;
}
var ot = function(r, t, a) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (a === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  wn === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, Sn = function(r, t, a) {
  ot(r, t, a);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function On(e) {
  for (var r = 0, t, a = 0, o = e.length; o >= 4; ++a, o -= 4)
    t = e.charCodeAt(a) & 255 | (e.charCodeAt(++a) & 255) << 8 | (e.charCodeAt(++a) & 255) << 16 | (e.charCodeAt(++a) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(a + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(a + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(a) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var Tn = {
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
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ur = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, An = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Pn = /[A-Z]|^ms/g, it = /_EMO_([^_]+?)_([^]*?)_EMO_/g, br = function(r) {
  return r.charCodeAt(1) === 45;
}, Hr = function(r) {
  return r != null && typeof r != "boolean";
}, cr = /* @__PURE__ */ an(function(e) {
  return br(e) ? e : e.replace(Pn, "-$&").toLowerCase();
}), Ue = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(it, function(a, o, i) {
          return z = {
            name: o,
            styles: i,
            next: z
          }, o;
        });
  }
  return Tn[r] !== 1 && !br(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var Nn = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, $n = ["normal", "none", "initial", "inherit", "unset"], kn = Ue, In = /^-ms-/, Dn = /-(.)/g, Br = {};
  Ue = function(r, t) {
    if (r === "content" && (typeof t != "string" || $n.indexOf(t) === -1 && !Nn.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var a = kn(r, t);
    return a !== "" && !br(r) && r.indexOf("-") !== -1 && Br[r] === void 0 && (Br[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(In, "ms-").replace(Dn, function(o, i) {
      return i.toUpperCase();
    }) + "?")), a;
  };
}
var st = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function _e(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(st);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return z = {
          name: t.name,
          styles: t.styles,
          next: z
        }, t.name;
      if (t.styles !== void 0) {
        var a = t.next;
        if (a !== void 0)
          for (; a !== void 0; )
            z = {
              name: a.name,
              styles: a.styles,
              next: z
            }, a = a.next;
        var o = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (o += t.map), o;
      }
      return Fn(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var i = z, c = t(e);
        return z = i, _e(e, r, c);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var l = [], d = t.replace(it, function(p, v, x) {
          var C = "animation" + l.length;
          return l.push("const " + C + " = keyframes`" + x.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + C + "}";
        });
        l.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(l, ["`" + d + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + d + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var h = r[t];
  return h !== void 0 ? h : t;
}
function Fn(e, r, t) {
  var a = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      a += _e(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var c = t[i];
      if (typeof c != "object")
        r != null && r[c] !== void 0 ? a += i + "{" + r[c] + "}" : Hr(c) && (a += cr(i) + ":" + Ue(i, c) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(st);
        if (Array.isArray(c) && typeof c[0] == "string" && (r == null || r[c[0]] === void 0))
          for (var l = 0; l < c.length; l++)
            Hr(c[l]) && (a += cr(i) + ":" + Ue(i, c[l]) + ";");
        else {
          var d = _e(e, r, c);
          switch (i) {
            case "animation":
            case "animationName": {
              a += cr(i) + ":" + d + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(An), a += i + "{" + d + "}";
          }
        }
      }
    }
  return a;
}
var qr = /label:\s*([^\s;\n{]+)\s*(;|$)/g, ct;
process.env.NODE_ENV !== "production" && (ct = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var z, Gr = function(r, t, a) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var o = !0, i = "";
  z = void 0;
  var c = r[0];
  c == null || c.raw === void 0 ? (o = !1, i += _e(a, t, c)) : (process.env.NODE_ENV !== "production" && c[0] === void 0 && console.error(Ur), i += c[0]);
  for (var l = 1; l < r.length; l++)
    i += _e(a, t, r[l]), o && (process.env.NODE_ENV !== "production" && c[l] === void 0 && console.error(Ur), i += c[l]);
  var d;
  process.env.NODE_ENV !== "production" && (i = i.replace(ct, function(x) {
    return d = x, "";
  })), qr.lastIndex = 0;
  for (var h = "", p; (p = qr.exec(i)) !== null; )
    h += "-" + // $FlowFixMe we know it's not null
    p[1];
  var v = On(i) + h;
  return process.env.NODE_ENV !== "production" ? {
    name: v,
    styles: i,
    map: d,
    next: z,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: v,
    styles: i,
    next: z
  };
}, Mn = function(r) {
  return r();
}, jn = K.useInsertionEffect ? K.useInsertionEffect : !1, Ln = jn || Mn, Je = {}.hasOwnProperty, Cr = /* @__PURE__ */ K.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ yn({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Cr.displayName = "EmotionCacheContext");
Cr.Provider;
var Yn = function(r) {
  return /* @__PURE__ */ Be(function(t, a) {
    var o = kt(Cr);
    return r(t, o, a);
  });
}, ut = /* @__PURE__ */ K.createContext({});
process.env.NODE_ENV !== "production" && (ut.displayName = "EmotionThemeContext");
var zr = function(r) {
  var t = r.split(".");
  return t[t.length - 1];
}, Vn = function(r) {
  var t = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(r);
  if (t || (t = /^([A-Za-z0-9$.]+)@/.exec(r), t))
    return zr(t[1]);
}, Wn = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]), Un = function(r) {
  return r.replace(/\$/g, "-");
}, Hn = function(r) {
  if (r)
    for (var t = r.split(`
`), a = 0; a < t.length; a++) {
      var o = Vn(t[a]);
      if (o) {
        if (Wn.has(o))
          break;
        if (/^[A-Z]/.test(o))
          return Un(o);
      }
    }
}, pr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", hr = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", ft = function(r, t) {
  if (process.env.NODE_ENV !== "production" && typeof t.css == "string" && // check if there is a css declaration
  t.css.indexOf(":") !== -1)
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + t.css + "`");
  var a = {};
  for (var o in t)
    Je.call(t, o) && (a[o] = t[o]);
  if (a[pr] = r, process.env.NODE_ENV !== "production" && t.css && (typeof t.css != "object" || typeof t.css.name != "string" || t.css.name.indexOf("-") === -1)) {
    var i = Hn(new Error().stack);
    i && (a[hr] = i);
  }
  return a;
}, Bn = function(r) {
  var t = r.cache, a = r.serialized, o = r.isStringTag;
  return ot(t, a, o), Ln(function() {
    return Sn(t, a, o);
  }), null;
}, lt = /* @__PURE__ */ Yn(function(e, r, t) {
  var a = e.css;
  typeof a == "string" && r.registered[a] !== void 0 && (a = r.registered[a]);
  var o = e[pr], i = [a], c = "";
  typeof e.className == "string" ? c = Rn(r.registered, i, e.className) : e.className != null && (c = e.className + " ");
  var l = Gr(i, void 0, K.useContext(ut));
  if (process.env.NODE_ENV !== "production" && l.name.indexOf("-") === -1) {
    var d = e[hr];
    d && (l = Gr([l, "label:" + d + ";"]));
  }
  c += r.key + "-" + l.name;
  var h = {};
  for (var p in e)
    Je.call(e, p) && p !== "css" && p !== pr && (process.env.NODE_ENV === "production" || p !== hr) && (h[p] = e[p]);
  return h.ref = t, h.className = c, /* @__PURE__ */ K.createElement(K.Fragment, null, /* @__PURE__ */ K.createElement(Bn, {
    cache: r,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ K.createElement(o, h));
});
process.env.NODE_ENV !== "production" && (lt.displayName = "EmotionCssPropInternal");
var dt = lt, Ke = be.Fragment;
function Y(e, r, t) {
  return Je.call(r, "css") ? be.jsx(dt, ft(e, r), t) : be.jsx(e, r, t);
}
function we(e, r, t) {
  return Je.call(r, "css") ? be.jsxs(dt, ft(e, r), t) : be.jsxs(e, r, t);
}
const qn = /* @__PURE__ */ new Map(), He = Be(
  ({ source: e, alt: r, size: t, objectFit: a = "fill", borderRadius: o, ratio: i, ...c }, l) => {
    const d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AP7+//j9/+ry/wDe3NbEqorX1cwAkn9ndUYhjHddAAgEBBIODgcHCB3XE9M/sWuRAAAAAElFTkSuQmCC", [h, p] = Ye(d), [v, x] = Ye(!1), C = mr(null);
    Ve(() => {
      if (typeof window > "u" || typeof IntersectionObserver > "u") {
        x(!0);
        return;
      }
      const O = new IntersectionObserver(
        (b, y) => {
          b.forEach((_) => {
            _.isIntersecting && (x(!0), y.unobserve(_.target));
          });
        },
        { rootMargin: "50px", threshold: 0.01 }
      );
      return C.current && O.observe(C.current), () => {
        C.current && O.unobserve(C.current);
      };
    }, [C]), Ve(() => {
      if (v)
        if (typeof window > "u")
          p(e instanceof File ? "" : e);
        else if (e instanceof File) {
          const O = new FileReader();
          O.onload = (b) => {
            var _;
            const y = (_ = b.target) == null ? void 0 : _.result;
            typeof y == "string" && S(y);
          }, O.readAsDataURL(e);
        } else
          typeof e == "string" && p(e);
    }, [e, v]);
    const S = (O) => {
      const b = document.createElement("img");
      b.crossOrigin = "anonymous", b.src = O, b.onload = () => {
        const y = document.createElement("canvas"), _ = y.getContext("2d");
        if (!_)
          return;
        const I = t != null && t.maxWidth ? parseInt(t.maxWidth.toString(), 10) : b.width, u = t != null && t.maxHeight ? parseInt(t.maxHeight.toString(), 10) : b.height;
        y.width = I, y.height = u, _.drawImage(b, 0, 0, I, u);
        try {
          const F = y.toDataURL();
          qn.set(O, F), p(F);
        } catch (F) {
          console.error("Canvas data extraction failed", F);
        }
      };
    }, g = {
      width: (t == null ? void 0 : t.width) ?? "100%",
      height: (t == null ? void 0 : t.height) ?? "auto",
      minWidth: (t == null ? void 0 : t.minWidth) ?? "auto",
      maxWidth: (t == null ? void 0 : t.maxWidth) ?? "auto",
      minHeight: (t == null ? void 0 : t.minHeight) ?? "auto",
      maxHeight: (t == null ? void 0 : t.maxHeight) ?? "auto",
      backgroundImage: h === d ? `url('${d}')` : "none",
      backgroundSize: "cover",
      filter: h === d ? "blur(px)" : "none",
      aspectRatio: i ? `${i.x}/${i.y}` : ""
    };
    return /* @__PURE__ */ Y(
      "img",
      {
        ref: C,
        src: h,
        alt: r,
        loading: "lazy",
        css: {
          ...g,
          objectFit: a,
          borderRadius: o,
          aspectRatio: i ? `${i.x}/${i.y}` : ""
        },
        ...c
      }
    );
  }
);
function Gn({
  children: e,
  onCancel: r
}) {
  return /* @__PURE__ */ we(Ke, { children: [
    /* @__PURE__ */ Y(
      "div",
      {
        css: {
          zIndex: 9e3,
          display: "flex",
          flex: 1,
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          backgroundColor: "rgba(0,0,0,0.85)",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingTop: "max(0px, env(safe-area-inset-top))",
          paddingBottom: "max(0px, env(safe-area-inset-bottom))",
          paddingLeft: "max(0px, env(safe-area-inset-left))",
          paddingRight: "max(0px, env(safe-area-inset-right))"
        }
      }
    ),
    /* @__PURE__ */ Y(
      "div",
      {
        className: "zoom-pop-wrap",
        css: {
          zIndex: 9001,
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          padding: "50px 10px"
        },
        children: /* @__PURE__ */ Y(
          "div",
          {
            className: "zoom-image-pop-up",
            css: {
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: e
          }
        )
      }
    ),
    /* @__PURE__ */ Y(
      "div",
      {
        className: "modal-pop-up-cancel-tab",
        onClick: r,
        css: {
          zIndex: 9002,
          position: "absolute",
          top: 0,
          right: 0,
          padding: 20,
          cursor: "pointer"
        },
        children: /* @__PURE__ */ Y("svg", { width: "20", height: "20", viewBox: "0 0 22 22", children: /* @__PURE__ */ Y(
          "path",
          {
            d: "M21.6012 19.5219L13.0366 10.9788L13.1438 10.8716L21.531 2.48794C21.8007 2.20976 21.9515 1.83762 21.9515 1.45029C21.9515 1.06295 21.8007 0.690813 21.531 0.412635C21.2498 0.146036 20.8765 -0.00177625 20.489 1.61119e-05C20.1014 0.00180847 19.7295 0.153067 19.4507 0.422256L10.97 8.91587L2.49348 0.425004C2.21198 0.157781 1.83779 0.0100522 1.44959 0.0128715C1.06138 0.0156908 0.689389 0.168839 0.411802 0.440122C0.145492 0.718691 -0.00116825 1.09038 0.00320011 1.47566C0.00756848 1.86094 0.162619 2.22922 0.435176 2.50168L8.91724 10.9761L0.424176 19.4752C0.15237 19.7508 0 20.1223 0 20.5094C0 20.8964 0.15237 21.2679 0.424176 21.5436C0.707239 21.8064 1.08019 21.951 1.46651 21.9477C1.85283 21.9443 2.22323 21.7934 2.50173 21.5257L10.9824 13.0623L19.47 21.5326C19.6032 21.6745 19.7634 21.7884 19.9411 21.8677C20.1189 21.947 20.3107 21.9901 20.5053 21.9944C20.6976 22.0127 20.8915 21.9862 21.0718 21.917C21.2522 21.8479 21.4141 21.7379 21.5448 21.5958C21.8253 21.3277 21.9886 20.9599 21.9994 20.5721C22.0102 20.1843 21.8676 19.808 21.6025 19.5246",
            fill: "#ccc"
          }
        ) })
      }
    )
  ] });
}
const Kn = Be(
  (e, r) => {
    const {
      source: t,
      alt: a,
      size: o,
      ratio: i,
      objectFit: c,
      borderRadius: l,
      zoomUp: d,
      onClick: h,
      ...p
    } = e, v = mr(null), [x, C] = Ye(!1);
    return Ve(() => {
      const g = (O) => {
        x && v.current && !v.current.contains(O.target) && C(!1);
      };
      return x ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto", document.addEventListener("mousedown", g), () => {
        document.removeEventListener("mousedown", g);
      };
    }, [x]), /* @__PURE__ */ we(Ke, { children: [
      /* @__PURE__ */ Y(
        He,
        {
          className: "cached-image-box",
          source: t,
          alt: a,
          size: o,
          ratio: i,
          objectFit: c,
          borderRadius: l,
          ref: r,
          onClick: (g) => {
            t && d && C(!0), h && h(g);
          },
          css: {
            cursor: d && "pointer" || e.onClick && "pointer",
            userSelect: e.onClick && "none"
          },
          ...p
        }
      ),
      x && /* @__PURE__ */ Y(Gn, { onCancel: () => C(!1), children: /* @__PURE__ */ Y(
        "div",
        {
          className: "zoom-image",
          ref: v,
          css: {
            position: "relative",
            width: "100%",
            height: "100%",
            maxWidth: 1200,
            display: "flex",
            justifyContent: "center"
          },
          children: /* @__PURE__ */ Y(
            He,
            {
              source: t,
              alt: a,
              size: { width: "100%", height: "auto" },
              objectFit: "contain"
            }
          )
        }
      ) })
    ] });
  }
);
function zn({ children: e }) {
  return /* @__PURE__ */ we(Ke, { children: [
    /* @__PURE__ */ Y(
      "div",
      {
        css: {
          zIndex: 9e3,
          display: "flex",
          flex: 1,
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          backgroundColor: "rgba(0,0,0,0.85)",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingTop: "max(0px, env(safe-area-inset-top))",
          paddingBottom: "max(0px, env(safe-area-inset-bottom))",
          paddingLeft: "max(0px, env(safe-area-inset-left))",
          paddingRight: "max(0px, env(safe-area-inset-right))"
        }
      }
    ),
    /* @__PURE__ */ Y(
      "div",
      {
        className: "zoom-pop-wrap",
        css: {
          zIndex: 9999,
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 30
        },
        children: e
      }
    )
  ] });
}
const Zn = Be(
  (e, r) => {
    const {
      source: t,
      alt: a,
      objectFit: o,
      borderRadius: i = 1e4,
      size: c = 30,
      zoomUp: l,
      zoomUpImageSize: d,
      onClick: h,
      ...p
    } = e, v = mr(null), [x, C] = Ye(!1);
    Ve(() => {
      const g = (O) => {
        x && v.current && !v.current.contains(O.target) && C(!1);
      };
      return x ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto", document.addEventListener("mousedown", g), () => {
        document.removeEventListener("mousedown", g);
      };
    }, [x]);
    const S = (g) => {
      t && l && C(!0), h && h(g);
    };
    return /* @__PURE__ */ we(Ke, { children: [
      t ? /* @__PURE__ */ Y(
        He,
        {
          className: "cached-avatar-box",
          ref: r,
          source: t,
          alt: a,
          css: {
            width: "100%",
            height: "100%",
            maxWidth: c,
            minWidth: c,
            maxHeight: c,
            minHeight: c,
            cursor: l && "pointer" || e.onClick && "pointer",
            userSelect: e.onClick && "none"
          },
          objectFit: e.objectFit ?? "cover",
          borderRadius: i,
          onClick: S,
          ...p
        }
      ) : /* @__PURE__ */ we(
        "svg",
        {
          className: "cache-avatar-icon",
          viewBox: "0 0 22 22",
          fill: "none",
          css: {
            width: `${c}px`,
            height: `${c}px`,
            minWidth: `${c}px`,
            minHeight: `${c}px`,
            maxWidth: `${c}px`,
            maxHeight: `${c}px`
          },
          ...p,
          children: [
            /* @__PURE__ */ Y(
              "path",
              {
                d: "M11 22.0001C17.0751 22.0001 22 17.0752 22 11.0001C22 4.92493 17.0751 6.10352e-05 11 6.10352e-05C4.92487 6.10352e-05 0 4.92493 0 11.0001C0 17.0752 4.92487 22.0001 11 22.0001Z",
                fill: "white"
              }
            ),
            /* @__PURE__ */ Y(
              "path",
              {
                d: "M10.995 3.56006e-07C8.72889 0.00107183 6.51838 0.702112 4.66572 2.00708C2.81306 3.31205 1.40865 5.15726 0.644483 7.29065C-0.119684 9.42404 -0.206321 11.7414 0.396436 13.9259C0.999194 16.1104 2.26191 18.0554 4.01198 19.495V19.4591C4.06681 17.9537 4.7006 16.5275 5.78114 15.4779C6.86169 14.4283 8.30565 13.8362 9.81203 13.8251H9.88899C9.78199 13.7941 9.67202 13.7711 9.57002 13.7321C9.4499 13.6825 9.33242 13.6267 9.21803 13.5651C9.11803 13.5121 9.00602 13.4651 8.90602 13.4021C8.79845 13.3341 8.6946 13.2602 8.59498 13.181C8.50098 13.11 8.40702 13.0391 8.32002 12.9611C8.23302 12.8831 8.14503 12.7901 8.06203 12.7001C7.97903 12.6101 7.90003 12.517 7.82503 12.42C7.75003 12.323 7.68701 12.2311 7.62501 12.1321C7.56301 12.0331 7.49502 11.911 7.43702 11.796C7.37902 11.681 7.33698 11.596 7.29298 11.488C7.24425 11.363 7.20221 11.2356 7.16701 11.1061C7.13601 10.9991 7.10203 10.895 7.08003 10.785C7.05389 10.6415 7.03585 10.4966 7.02601 10.3511C7.01701 10.2511 7.00098 10.1511 6.99898 10.0421C6.99898 10.0241 6.99898 10.006 6.99898 9.98804C6.99898 9.86304 7.02502 9.74602 7.03602 9.62402C7.04702 9.50202 7.04202 9.40206 7.06202 9.28906C7.06202 9.27406 7.07203 9.26 7.07503 9.245C7.11208 9.07526 7.16048 8.90822 7.21998 8.745C7.24798 8.659 7.26698 8.56808 7.30098 8.48608C7.37012 8.32783 7.44999 8.17449 7.53999 8.0271C7.58299 7.9511 7.61699 7.86902 7.66499 7.79602C7.76843 7.64852 7.88135 7.50787 8.003 7.375C8.053 7.319 8.09401 7.25503 8.14601 7.20203C8.29094 7.05956 8.44635 6.92825 8.61098 6.80908C8.65098 6.77908 8.68698 6.74211 8.72798 6.70911C8.90502 6.59011 9.09128 6.48533 9.28499 6.396C9.32399 6.378 9.35802 6.35306 9.39802 6.33606C9.57779 6.26112 9.76295 6.19997 9.95198 6.15308C10.016 6.13508 10.076 6.10899 10.142 6.09399C10.3115 6.06219 10.4828 6.04116 10.655 6.03101C10.749 6.02301 10.84 6.00505 10.936 6.00305C10.96 6.00305 10.983 5.99609 11.007 5.99609C11.18 6.0028 11.3524 6.02079 11.523 6.05005C11.586 6.05805 11.647 6.05009 11.71 6.06409C11.7182 6.06693 11.7265 6.06923 11.735 6.07105C11.9489 6.11385 12.1589 6.17411 12.363 6.2511C12.409 6.2681 12.463 6.27702 12.505 6.29602C12.6933 6.37638 12.8752 6.47107 13.049 6.5791C13.098 6.6081 13.149 6.63001 13.2 6.66101C13.3589 6.77137 13.5099 6.8927 13.652 7.02405C13.699 7.06605 13.752 7.101 13.8 7.146C13.9337 7.28288 14.0574 7.42937 14.17 7.58411C14.209 7.63511 14.256 7.68406 14.292 7.73206C14.3891 7.88152 14.4763 8.03713 14.553 8.198C14.589 8.269 14.635 8.33508 14.667 8.40808C14.7204 8.54521 14.7665 8.68502 14.805 8.82703C14.839 8.93703 14.882 9.04408 14.905 9.15808C14.928 9.27208 14.933 9.39108 14.948 9.50708C14.9713 9.65645 14.986 9.80696 14.992 9.95801C14.992 9.97401 14.997 9.989 14.997 10.005C14.9951 10.227 14.9746 10.4485 14.936 10.6671C14.936 10.6821 14.936 10.6971 14.936 10.7111C14.8953 10.9307 14.8361 11.1465 14.759 11.3561C14.741 11.4081 14.715 11.4561 14.694 11.5071C14.6328 11.6602 14.5623 11.8095 14.483 11.9541C14.452 12.0101 14.416 12.0611 14.383 12.1151C14.3011 12.2475 14.2116 12.375 14.115 12.4971C14.074 12.5481 14.031 12.597 13.987 12.646C13.8842 12.761 13.7754 12.8705 13.661 12.974C13.613 13.017 13.561 13.059 13.515 13.099C13.3897 13.2004 13.258 13.294 13.121 13.379C13.073 13.41 13.026 13.4411 12.977 13.4701C12.813 13.5629 12.6426 13.6437 12.467 13.712C12.438 13.724 12.41 13.739 12.381 13.749C12.302 13.779 12.221 13.8011 12.14 13.8251H12.182C13.6892 13.8354 15.1342 14.4271 16.2159 15.4767C17.2976 16.5263 17.9324 17.9529 17.988 19.4591V19.495C19.7386 18.0549 21.0015 16.1092 21.6041 13.924C22.2066 11.7387 22.1193 9.42074 21.3541 7.28699C20.589 5.15324 19.1833 3.30789 17.3294 2.00354C15.4754 0.69919 13.2638 -0.00057621 10.997 3.56006e-07H10.995Z",
                fill: "#eee"
              }
            )
          ]
        }
      ),
      x && /* @__PURE__ */ Y(zn, { children: /* @__PURE__ */ Y(
        "div",
        {
          className: "zoom-image",
          ref: v,
          css: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: /* @__PURE__ */ Y(
            He,
            {
              source: t,
              alt: a,
              size: {
                width: "100%",
                height: "100%",
                maxWidth: d || c * 3.5,
                minWidth: d || c * 3.5,
                maxHeight: d || c * 3.5,
                minHeight: d || c * 3.5
              },
              objectFit: e.objectFit ?? "cover",
              borderRadius: i,
              onClick: S
            }
          )
        }
      ) })
    ] });
  }
);
export {
  Zn as Avatar,
  Kn as Image
};
