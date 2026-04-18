import { a as e, n as t, r as n, t as r } from "./compiler-runtime-COzdrsxH.js";
var i = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  a = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => (n ? n.toUpperCase() : t.toLowerCase())),
  o = (e) => {
    let t = a(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  s = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  c = (e) => {
    for (let t in e) if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
  },
  l = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  u = e(n()),
  d = (0, u.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...d
      },
      f,
    ) =>
      (0, u.createElement)(
        `svg`,
        {
          ref: f,
          ...l,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: s(`lucide`, i),
          ...(!a && !c(d) && { "aria-hidden": `true` }),
          ...d,
        },
        [...o.map(([e, t]) => (0, u.createElement)(e, t)), ...(Array.isArray(a) ? a : [a])],
      ),
  ),
  f = ((e, t) => {
    let n = (0, u.forwardRef)(({ className: n, ...r }, a) =>
      (0, u.createElement)(d, {
        ref: a,
        iconNode: t,
        className: s(`lucide-${i(o(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = o(e)), n);
  })(`arrow-up-right`, [
    [`path`, { d: `M7 7h10v10`, key: `1tivn9` }],
    [`path`, { d: `M7 17 17 7`, key: `1vkiza` }],
  ]);
function p() {
  return typeof window < `u`;
}
function m(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function h(e) {
  return p() ? e instanceof HTMLElement || e instanceof m(e).HTMLElement : !1;
}
var g = {};
function _(e, t) {
  let n = u.useRef(g);
  return (n.current === g && (n.current = e(t)), n);
}
var v = u[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)],
  y = v && v !== u.useLayoutEffect ? v : (e) => e();
function ee(e) {
  let t = _(te).current;
  return ((t.next = e), y(t.effect), t.trampoline);
}
function te() {
  let e = {
    next: void 0,
    callback: ne,
    trampoline: (...t) => e.callback?.(...t),
    effect: () => {
      e.callback = e.next;
    },
  };
  return e;
}
function ne() {}
var re = typeof document < `u` ? u.useLayoutEffect : () => {};
function b(e, t) {
  if (e && !t) return e;
  if (!e && t) return t;
  if (e || t) return { ...e, ...t };
}
var x = {};
function S(e, t, n, r, i) {
  if (!n && !r && !i && !e) return C(t);
  let a = C(e);
  return (t && (a = w(a, t)), n && (a = w(a, n)), r && (a = w(a, r)), i && (a = w(a, i)), a);
}
function ie(e) {
  if (e.length === 0) return x;
  if (e.length === 1) return C(e[0]);
  let t = C(e[0]);
  for (let n = 1; n < e.length; n += 1) t = w(t, e[n]);
  return t;
}
function C(e) {
  return D(e) ? { ...O(e, x) } : ae(e);
}
function w(e, t) {
  return D(t) ? O(t, e) : T(e, t);
}
function ae(e) {
  let t = { ...e };
  for (let e in t) {
    let n = t[e];
    E(e, n) && (t[e] = k(n));
  }
  return t;
}
function T(e, t) {
  if (!t) return e;
  for (let n in t) {
    let r = t[n];
    switch (n) {
      case `style`:
        e[n] = b(e.style, r);
        break;
      case `className`:
        e[n] = se(e.className, r);
        break;
      default:
        E(n, r) ? (e[n] = oe(e[n], r)) : (e[n] = r);
    }
  }
  return e;
}
function E(e, t) {
  let n = e.charCodeAt(0),
    r = e.charCodeAt(1),
    i = e.charCodeAt(2);
  return n === 111 && r === 110 && i >= 65 && i <= 90 && (typeof t == `function` || t === void 0);
}
function D(e) {
  return typeof e == `function`;
}
function O(e, t) {
  return D(e) ? e(t) : (e ?? x);
}
function oe(e, t) {
  return t
    ? e
      ? (n) => {
          if (ce(n)) {
            let r = n;
            A(r);
            let i = t(r);
            return (r.baseUIHandlerPrevented || e?.(r), i);
          }
          let r = t(n);
          return (e?.(n), r);
        }
      : k(t)
    : e;
}
function k(e) {
  return e && ((t) => (ce(t) && A(t), e(t)));
}
function A(e) {
  return (
    (e.preventBaseUIHandler = () => {
      e.baseUIHandlerPrevented = !0;
    }),
    e
  );
}
function se(e, t) {
  return t ? (e ? t + ` ` + e : t) : e;
}
function ce(e) {
  return typeof e == `object` && !!e && `nativeEvent` in e;
}
function le(e, t) {
  return function (n, ...r) {
    let i = new URL(e);
    return (
      i.searchParams.set(`code`, n.toString()),
      r.forEach((e) => i.searchParams.append(`args[]`, e)),
      `${t} error #${n}; visit ${i} for the full message.`
    );
  };
}
var j = le(`https://base-ui.com/production-error`, `Base UI`),
  M = u.createContext(void 0);
function N(e = !1) {
  let t = u.useContext(M);
  if (t === void 0 && !e) throw Error(j(16));
  return t;
}
function ue(e) {
  let {
      focusableWhenDisabled: t,
      disabled: n,
      composite: r = !1,
      tabIndex: i = 0,
      isNativeButton: a,
    } = e,
    o = r && t !== !1,
    s = r && t === !1;
  return {
    props: u.useMemo(() => {
      let e = {
        onKeyDown(e) {
          n && t && e.key !== `Tab` && e.preventDefault();
        },
      };
      return (
        r || ((e.tabIndex = i), !a && n && (e.tabIndex = t ? i : -1)),
        ((a && (t || o)) || (!a && n)) && (e[`aria-disabled`] = n),
        a && (!t || s) && (e.disabled = n),
        e
      );
    }, [r, n, t, o, s, a, i]),
  };
}
function P(e = {}) {
  let {
      disabled: t = !1,
      focusableWhenDisabled: n,
      tabIndex: r = 0,
      native: i = !0,
      composite: a,
    } = e,
    o = u.useRef(null),
    s = N(!0),
    c = a ?? s !== void 0,
    { props: l } = ue({
      focusableWhenDisabled: n,
      disabled: t,
      composite: c,
      tabIndex: r,
      isNativeButton: i,
    }),
    d = u.useCallback(() => {
      let e = o.current;
      F(e) && c && t && l.disabled === void 0 && e.disabled && (e.disabled = !1);
    }, [t, l.disabled, c]);
  return (
    re(d, [d]),
    {
      getButtonProps: u.useCallback(
        (e = {}) => {
          let { onClick: n, onMouseDown: r, onKeyUp: a, onKeyDown: o, onPointerDown: s, ...u } = e;
          return S(
            {
              type: i ? `button` : void 0,
              onClick(e) {
                if (t) {
                  e.preventDefault();
                  return;
                }
                n?.(e);
              },
              onMouseDown(e) {
                t || r?.(e);
              },
              onKeyDown(e) {
                if (t || (A(e), o?.(e), e.baseUIHandlerPrevented)) return;
                let r = e.target === e.currentTarget,
                  a = e.currentTarget,
                  s = F(a),
                  l = !i && I(a),
                  u = r && (i ? s : !l),
                  d = e.key === `Enter`,
                  f = e.key === ` `,
                  p = a.getAttribute(`role`),
                  m = p?.startsWith(`menuitem`) || p === `option` || p === `gridcell`;
                if (r && c && f) {
                  if (e.defaultPrevented && m) return;
                  (e.preventDefault(),
                    l || (i && s)
                      ? (a.click(), e.preventBaseUIHandler())
                      : u && (n?.(e), e.preventBaseUIHandler()));
                  return;
                }
                u && (!i && (f || d) && e.preventDefault(), !i && d && n?.(e));
              },
              onKeyUp(e) {
                if (!t) {
                  if (
                    (A(e),
                    a?.(e),
                    e.target === e.currentTarget && i && c && F(e.currentTarget) && e.key === ` `)
                  ) {
                    e.preventDefault();
                    return;
                  }
                  e.baseUIHandlerPrevented ||
                    (e.target === e.currentTarget && !i && !c && e.key === ` ` && n?.(e));
                }
              },
              onPointerDown(e) {
                if (t) {
                  e.preventDefault();
                  return;
                }
                s?.(e);
              },
            },
            i ? void 0 : { role: `button` },
            l,
            u,
          );
        },
        [t, l, c, i],
      ),
      buttonRef: ee((e) => {
        ((o.current = e), d());
      }),
    }
  );
}
function F(e) {
  return h(e) && e.tagName === `BUTTON`;
}
function I(e) {
  return !!(e?.tagName === `A` && e?.href);
}
function L(e, t, n, r) {
  let i = _(R).current;
  return (fe(i, e, t, n, r) && me(i, [e, t, n, r]), i.callback);
}
function de(e) {
  let t = _(R).current;
  return (pe(t, e) && me(t, e), t.callback);
}
function R() {
  return { callback: null, cleanup: null, refs: [] };
}
function fe(e, t, n, r, i) {
  return e.refs[0] !== t || e.refs[1] !== n || e.refs[2] !== r || e.refs[3] !== i;
}
function pe(e, t) {
  return e.refs.length !== t.length || e.refs.some((e, n) => e !== t[n]);
}
function me(e, t) {
  if (((e.refs = t), t.every((e) => e == null))) {
    e.callback = null;
    return;
  }
  e.callback = (n) => {
    if (((e.cleanup &&= (e.cleanup(), null)), n != null)) {
      let r = Array(t.length).fill(null);
      for (let e = 0; e < t.length; e += 1) {
        let i = t[e];
        if (i != null)
          switch (typeof i) {
            case `function`: {
              let t = i(n);
              typeof t == `function` && (r[e] = t);
              break;
            }
            case `object`:
              i.current = n;
              break;
            default:
          }
      }
      e.cleanup = () => {
        for (let e = 0; e < t.length; e += 1) {
          let n = t[e];
          if (n != null)
            switch (typeof n) {
              case `function`: {
                let t = r[e];
                typeof t == `function` ? t() : n(null);
                break;
              }
              case `object`:
                n.current = null;
                break;
              default:
            }
        }
      };
    }
  };
}
var he = 19;
function ge(e) {
  return he >= e;
}
function _e(e) {
  if (!u.isValidElement(e)) return null;
  let t = e,
    n = t.props;
  return (ge(19) ? n?.ref : t.ref) ?? null;
}
function ve(e, t) {
  let n = {};
  for (let r in e) {
    let i = e[r];
    if (t?.hasOwnProperty(r)) {
      let e = t[r](i);
      e != null && Object.assign(n, e);
      continue;
    }
    i === !0
      ? (n[`data-${r.toLowerCase()}`] = ``)
      : i && (n[`data-${r.toLowerCase()}`] = i.toString());
  }
  return n;
}
function ye(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function be(e, t) {
  return typeof e == `function` ? e(t) : e;
}
Object.freeze([]);
var z = Object.freeze({});
function xe(e, t, n = {}) {
  let r = t.render,
    i = Se(t, n);
  return n.enabled === !1 ? null : Te(e, r, i, n.state ?? z);
}
function Se(e, t = {}) {
  let { className: n, style: r, render: i } = e,
    { state: a = z, ref: o, props: s, stateAttributesMapping: c, enabled: l = !0 } = t,
    u = l ? ye(n, a) : void 0,
    d = l ? be(r, a) : void 0,
    f = l ? ve(a, c) : z,
    p = l && s ? Ce(s) : void 0,
    m = l ? (b(f, p) ?? {}) : z;
  return (
    typeof document < `u` &&
      (l
        ? Array.isArray(o)
          ? (m.ref = de([m.ref, _e(i), ...o]))
          : (m.ref = L(m.ref, _e(i), o))
        : L(null, null)),
    l
      ? (u !== void 0 && (m.className = se(m.className, u)),
        d !== void 0 && (m.style = b(m.style, d)),
        m)
      : z
  );
}
function Ce(e) {
  return Array.isArray(e) ? ie(e) : S(void 0, e);
}
var we = Symbol.for(`react.lazy`);
function Te(e, t, n, r) {
  if (t) {
    if (typeof t == `function`) return t(n, r);
    let e = S(n, t.props);
    e.ref = n.ref;
    let i = t;
    return (i?.$$typeof === we && (i = u.Children.toArray(t)[0]), u.cloneElement(i, e));
  }
  if (e && typeof e == `string`) return Ee(e, n);
  throw Error(j(8));
}
function Ee(e, t) {
  return e === `button`
    ? (0, u.createElement)(`button`, { type: `button`, ...t, key: t.key })
    : e === `img`
      ? (0, u.createElement)(`img`, { alt: ``, ...t, key: t.key })
      : u.createElement(e, t);
}
var De = u.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        disabled: i = !1,
        focusableWhenDisabled: a = !1,
        nativeButton: o = !0,
        style: s,
        ...c
      } = e,
      { getButtonProps: l, buttonRef: u } = P({ disabled: i, focusableWhenDisabled: a, native: o });
    return xe(`button`, e, { state: { disabled: i }, ref: [t, u], props: [c, l] });
  }),
  B = r();
function Oe(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = Oe(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function ke() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Oe(e)) && (r && (r += ` `), (r += t));
  return r;
}
var Ae = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  je = ke,
  Me = (e, t) => (n) => {
    if (t?.variants == null) return je(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = Ae(t) || Ae(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return (r === void 0 || (e[n] = r), e);
        }, {});
    return je(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n) ? n.includes({ ...i, ...o }[t]) : { ...i, ...o }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className,
    );
  },
  Ne = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  Pe = (e, t) => ({ classGroupId: e, validator: t }),
  Fe = (e = new Map(), t = null, n) => ({ nextPart: e, validators: t, classGroupId: n }),
  V = `-`,
  Ie = [],
  Le = `arbitrary..`,
  Re = (e) => {
    let t = Ve(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return Be(e);
        let n = e.split(V);
        return ze(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? Ne(i, t) : t) : i || Ie;
        }
        return n[e] || Ie;
      },
    };
  },
  ze = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = ze(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(V) : e.slice(t).join(V),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  Be = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? Le + r : void 0;
        })(),
  Ve = (e) => {
    let { theme: t, classGroups: n } = e;
    return He(n, t);
  },
  He = (e, t) => {
    let n = Fe();
    for (let r in e) {
      let i = e[r];
      Ue(i, n, r, t);
    }
    return n;
  },
  Ue = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      We(i, t, n, r);
    }
  },
  We = (e, t, n, r) => {
    if (typeof e == `string`) {
      Ge(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      Ke(e, t, n, r);
      return;
    }
    qe(e, t, n, r);
  },
  Ge = (e, t, n) => {
    let r = e === `` ? t : Je(t, e);
    r.classGroupId = n;
  },
  Ke = (e, t, n, r) => {
    if (Ye(e)) {
      Ue(e(r), t, n, r);
      return;
    }
    (t.validators === null && (t.validators = []), t.validators.push(Pe(n, e)));
  },
  qe = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      Ue(o, Je(t, a), n, r);
    }
  },
  Je = (e, t) => {
    let n = e,
      r = t.split(V),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      (i || ((i = Fe()), n.nextPart.set(t, i)), (n = i));
    }
    return n;
  },
  Ye = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  Xe = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        ((n[i] = a), t++, t > e && ((t = 0), (r = n), (n = Object.create(null))));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  Ze = `!`,
  Qe = `:`,
  $e = [],
  et = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  tt = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === Qe) {
              (t.push(e.slice(i, s)), (i = s + 1));
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[` ? n++ : o === `]` ? n-- : o === `(` ? r++ : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(Ze)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(Ze) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return et(t, l, c, u);
      };
    if (t) {
      let e = t + Qe,
        n = r;
      r = (t) => (t.startsWith(e) ? n(t.slice(e.length)) : et($e, !1, t, void 0, !0));
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  nt = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a)) : r.push(a);
        }
        return (r.length > 0 && (r.sort(), n.push(...r)), n);
      }
    );
  },
  rt = (e) => ({ cache: Xe(e.cacheSize), parseClassName: tt(e), sortModifiers: nt(e), ...Re(e) }),
  it = /\s+/,
  at = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
      } = t,
      o = [],
      s = e.trim().split(it),
      c = ``;
    for (let e = s.length - 1; e >= 0; --e) {
      let t = s[e],
        {
          isExternal: l,
          modifiers: u,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: p,
        } = n(t);
      if (l) {
        c = t + (c.length > 0 ? ` ` + c : c);
        continue;
      }
      let m = !!p,
        h = r(m ? f.substring(0, p) : f);
      if (!h) {
        if (!m) {
          c = t + (c.length > 0 ? ` ` + c : c);
          continue;
        }
        if (((h = r(f)), !h)) {
          c = t + (c.length > 0 ? ` ` + c : c);
          continue;
        }
        m = !1;
      }
      let g = u.length === 0 ? `` : u.length === 1 ? u[0] : a(u).join(`:`),
        _ = d ? g + Ze : g,
        v = _ + h;
      if (o.indexOf(v) > -1) continue;
      o.push(v);
      let y = i(h, m);
      for (let e = 0; e < y.length; ++e) {
        let t = y[e];
        o.push(_ + t);
      }
      c = t + (c.length > 0 ? ` ` + c : c);
    }
    return c;
  },
  ot = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length; ) (n = e[t++]) && (r = st(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  st = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++) e[r] && (t = st(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  ct = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = rt(t.reduce((e, t) => t(e), e()))), (r = n.cache.get), (i = n.cache.set), (a = s), s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = at(e, n);
        return (i(e, a), a);
      };
    return ((a = o), (...e) => a(ot(...e)));
  },
  lt = [],
  H = (e) => {
    let t = (t) => t[e] || lt;
    return ((t.isThemeGetter = !0), t);
  },
  ut = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  dt = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  ft = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  pt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  mt =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  ht = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  gt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  _t =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  U = (e) => ft.test(e),
  W = (e) => !!e && !Number.isNaN(Number(e)),
  G = (e) => !!e && Number.isInteger(Number(e)),
  vt = (e) => e.endsWith(`%`) && W(e.slice(0, -1)),
  K = (e) => pt.test(e),
  yt = () => !0,
  bt = (e) => mt.test(e) && !ht.test(e),
  xt = () => !1,
  St = (e) => gt.test(e),
  Ct = (e) => _t.test(e),
  wt = (e) => !q(e) && !Y(e),
  Tt = (e) => Z(e, Bt, xt),
  q = (e) => ut.test(e),
  J = (e) => Z(e, Vt, bt),
  Et = (e) => Z(e, Ht, W),
  Dt = (e) => Z(e, Wt, yt),
  Ot = (e) => Z(e, Ut, xt),
  kt = (e) => Z(e, Rt, xt),
  At = (e) => Z(e, zt, Ct),
  jt = (e) => Z(e, Gt, St),
  Y = (e) => dt.test(e),
  X = (e) => Q(e, Vt),
  Mt = (e) => Q(e, Ut),
  Nt = (e) => Q(e, Rt),
  Pt = (e) => Q(e, Bt),
  Ft = (e) => Q(e, zt),
  It = (e) => Q(e, Gt, !0),
  Lt = (e) => Q(e, Wt, !0),
  Z = (e, t, n) => {
    let r = ut.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Q = (e, t, n = !1) => {
    let r = dt.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  Rt = (e) => e === `position` || e === `percentage`,
  zt = (e) => e === `image` || e === `url`,
  Bt = (e) => e === `length` || e === `size` || e === `bg-size`,
  Vt = (e) => e === `length`,
  Ht = (e) => e === `number`,
  Ut = (e) => e === `family-name`,
  Wt = (e) => e === `number` || e === `weight`,
  Gt = (e) => e === `shadow`,
  Kt = ct(() => {
    let e = H(`color`),
      t = H(`font`),
      n = H(`text`),
      r = H(`font-weight`),
      i = H(`tracking`),
      a = H(`leading`),
      o = H(`breakpoint`),
      s = H(`container`),
      c = H(`spacing`),
      l = H(`radius`),
      u = H(`shadow`),
      d = H(`inset-shadow`),
      f = H(`text-shadow`),
      p = H(`drop-shadow`),
      m = H(`blur`),
      h = H(`perspective`),
      g = H(`aspect`),
      _ = H(`ease`),
      v = H(`animate`),
      y = () => [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`],
      ee = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      te = () => [...ee(), Y, q],
      ne = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      re = () => [`auto`, `contain`, `none`],
      b = () => [Y, q, c],
      x = () => [U, `full`, `auto`, ...b()],
      S = () => [G, `none`, `subgrid`, Y, q],
      ie = () => [`auto`, { span: [`full`, G, Y, q] }, G, Y, q],
      C = () => [G, `auto`, Y, q],
      w = () => [`auto`, `min`, `max`, `fr`, Y, q],
      ae = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      T = () => [`start`, `end`, `center`, `stretch`, `center-safe`, `end-safe`],
      E = () => [`auto`, ...b()],
      D = () => [
        U,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...b(),
      ],
      O = () => [U, `screen`, `full`, `dvw`, `lvw`, `svw`, `min`, `max`, `fit`, ...b()],
      oe = () => [U, `screen`, `full`, `lh`, `dvh`, `lvh`, `svh`, `min`, `max`, `fit`, ...b()],
      k = () => [e, Y, q],
      A = () => [...ee(), Nt, kt, { position: [Y, q] }],
      se = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      ce = () => [`auto`, `cover`, `contain`, Pt, Tt, { size: [Y, q] }],
      le = () => [vt, X, J],
      j = () => [``, `none`, `full`, l, Y, q],
      M = () => [``, W, X, J],
      N = () => [`solid`, `dashed`, `dotted`, `double`],
      ue = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      P = () => [W, vt, Nt, kt],
      F = () => [``, `none`, m, Y, q],
      I = () => [`none`, W, Y, q],
      L = () => [`none`, W, Y, q],
      de = () => [W, Y, q],
      R = () => [U, `full`, ...b()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [K],
        breakpoint: [K],
        color: [yt],
        container: [K],
        "drop-shadow": [K],
        ease: [`in`, `out`, `in-out`],
        font: [wt],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [K],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [`dramatic`, `near`, `normal`, `midrange`, `distant`, `none`],
        radius: [K],
        shadow: [K],
        spacing: [`px`, W],
        text: [K],
        "text-shadow": [K],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, U, q, Y, g] }],
        container: [`container`],
        columns: [{ columns: [W, q, Y, s] }],
        "break-after": [{ "break-after": y() }],
        "break-before": [{ "break-before": y() }],
        "break-inside": [{ "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] }],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [{ object: [`contain`, `cover`, `fill`, `none`, `scale-down`] }],
        "object-position": [{ object: te() }],
        overflow: [{ overflow: ne() }],
        "overflow-x": [{ "overflow-x": ne() }],
        "overflow-y": [{ "overflow-y": ne() }],
        overscroll: [{ overscroll: re() }],
        "overscroll-x": [{ "overscroll-x": re() }],
        "overscroll-y": [{ "overscroll-y": re() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: x() }],
        "inset-x": [{ "inset-x": x() }],
        "inset-y": [{ "inset-y": x() }],
        start: [{ "inset-s": x(), start: x() }],
        end: [{ "inset-e": x(), end: x() }],
        "inset-bs": [{ "inset-bs": x() }],
        "inset-be": [{ "inset-be": x() }],
        top: [{ top: x() }],
        right: [{ right: x() }],
        bottom: [{ bottom: x() }],
        left: [{ left: x() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [G, `auto`, Y, q] }],
        basis: [{ basis: [U, `full`, `auto`, s, ...b()] }],
        "flex-direction": [{ flex: [`row`, `row-reverse`, `col`, `col-reverse`] }],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [W, U, `auto`, `initial`, `none`, q] }],
        grow: [{ grow: [``, W, Y, q] }],
        shrink: [{ shrink: [``, W, Y, q] }],
        order: [{ order: [G, `first`, `last`, `none`, Y, q] }],
        "grid-cols": [{ "grid-cols": S() }],
        "col-start-end": [{ col: ie() }],
        "col-start": [{ "col-start": C() }],
        "col-end": [{ "col-end": C() }],
        "grid-rows": [{ "grid-rows": S() }],
        "row-start-end": [{ row: ie() }],
        "row-start": [{ "row-start": C() }],
        "row-end": [{ "row-end": C() }],
        "grid-flow": [{ "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] }],
        "auto-cols": [{ "auto-cols": w() }],
        "auto-rows": [{ "auto-rows": w() }],
        gap: [{ gap: b() }],
        "gap-x": [{ "gap-x": b() }],
        "gap-y": [{ "gap-y": b() }],
        "justify-content": [{ justify: [...ae(), `normal`] }],
        "justify-items": [{ "justify-items": [...T(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...T()] }],
        "align-content": [{ content: [`normal`, ...ae()] }],
        "align-items": [{ items: [...T(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...T(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": ae() }],
        "place-items": [{ "place-items": [...T(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...T()] }],
        p: [{ p: b() }],
        px: [{ px: b() }],
        py: [{ py: b() }],
        ps: [{ ps: b() }],
        pe: [{ pe: b() }],
        pbs: [{ pbs: b() }],
        pbe: [{ pbe: b() }],
        pt: [{ pt: b() }],
        pr: [{ pr: b() }],
        pb: [{ pb: b() }],
        pl: [{ pl: b() }],
        m: [{ m: E() }],
        mx: [{ mx: E() }],
        my: [{ my: E() }],
        ms: [{ ms: E() }],
        me: [{ me: E() }],
        mbs: [{ mbs: E() }],
        mbe: [{ mbe: E() }],
        mt: [{ mt: E() }],
        mr: [{ mr: E() }],
        mb: [{ mb: E() }],
        ml: [{ ml: E() }],
        "space-x": [{ "space-x": b() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": b() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: D() }],
        "inline-size": [{ inline: [`auto`, ...O()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...O()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...O()] }],
        "block-size": [{ block: [`auto`, ...oe()] }],
        "min-block-size": [{ "min-block": [`auto`, ...oe()] }],
        "max-block-size": [{ "max-block": [`none`, ...oe()] }],
        w: [{ w: [s, `screen`, ...D()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...D()] }],
        "max-w": [{ "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...D()] }],
        h: [{ h: [`screen`, `lh`, ...D()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...D()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...D()] }],
        "font-size": [{ text: [`base`, n, X, J] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, Lt, Dt] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              vt,
              q,
            ],
          },
        ],
        "font-family": [{ font: [Mt, Ot, t] }],
        "font-features": [{ "font-features": [q] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, Y, q] }],
        "line-clamp": [{ "line-clamp": [W, `none`, Y, Et] }],
        leading: [{ leading: [a, ...b()] }],
        "list-image": [{ "list-image": [`none`, Y, q] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, Y, q] }],
        "text-alignment": [{ text: [`left`, `center`, `right`, `justify`, `start`, `end`] }],
        "placeholder-color": [{ placeholder: k() }],
        "text-color": [{ text: k() }],
        "text-decoration": [`underline`, `overline`, `line-through`, `no-underline`],
        "text-decoration-style": [{ decoration: [...N(), `wavy`] }],
        "text-decoration-thickness": [{ decoration: [W, `from-font`, `auto`, Y, J] }],
        "text-decoration-color": [{ decoration: k() }],
        "underline-offset": [{ "underline-offset": [W, `auto`, Y, q] }],
        "text-transform": [`uppercase`, `lowercase`, `capitalize`, `normal-case`],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: b() }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              Y,
              q,
            ],
          },
        ],
        whitespace: [
          { whitespace: [`normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`] },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, Y, q] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: A() }],
        "bg-repeat": [{ bg: se() }],
        "bg-size": [{ bg: ce() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [{ to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] }, G, Y, q],
                radial: [``, Y, q],
                conic: [G, Y, q],
              },
              Ft,
              At,
            ],
          },
        ],
        "bg-color": [{ bg: k() }],
        "gradient-from-pos": [{ from: le() }],
        "gradient-via-pos": [{ via: le() }],
        "gradient-to-pos": [{ to: le() }],
        "gradient-from": [{ from: k() }],
        "gradient-via": [{ via: k() }],
        "gradient-to": [{ to: k() }],
        rounded: [{ rounded: j() }],
        "rounded-s": [{ "rounded-s": j() }],
        "rounded-e": [{ "rounded-e": j() }],
        "rounded-t": [{ "rounded-t": j() }],
        "rounded-r": [{ "rounded-r": j() }],
        "rounded-b": [{ "rounded-b": j() }],
        "rounded-l": [{ "rounded-l": j() }],
        "rounded-ss": [{ "rounded-ss": j() }],
        "rounded-se": [{ "rounded-se": j() }],
        "rounded-ee": [{ "rounded-ee": j() }],
        "rounded-es": [{ "rounded-es": j() }],
        "rounded-tl": [{ "rounded-tl": j() }],
        "rounded-tr": [{ "rounded-tr": j() }],
        "rounded-br": [{ "rounded-br": j() }],
        "rounded-bl": [{ "rounded-bl": j() }],
        "border-w": [{ border: M() }],
        "border-w-x": [{ "border-x": M() }],
        "border-w-y": [{ "border-y": M() }],
        "border-w-s": [{ "border-s": M() }],
        "border-w-e": [{ "border-e": M() }],
        "border-w-bs": [{ "border-bs": M() }],
        "border-w-be": [{ "border-be": M() }],
        "border-w-t": [{ "border-t": M() }],
        "border-w-r": [{ "border-r": M() }],
        "border-w-b": [{ "border-b": M() }],
        "border-w-l": [{ "border-l": M() }],
        "divide-x": [{ "divide-x": M() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": M() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...N(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...N(), `hidden`, `none`] }],
        "border-color": [{ border: k() }],
        "border-color-x": [{ "border-x": k() }],
        "border-color-y": [{ "border-y": k() }],
        "border-color-s": [{ "border-s": k() }],
        "border-color-e": [{ "border-e": k() }],
        "border-color-bs": [{ "border-bs": k() }],
        "border-color-be": [{ "border-be": k() }],
        "border-color-t": [{ "border-t": k() }],
        "border-color-r": [{ "border-r": k() }],
        "border-color-b": [{ "border-b": k() }],
        "border-color-l": [{ "border-l": k() }],
        "divide-color": [{ divide: k() }],
        "outline-style": [{ outline: [...N(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [W, Y, q] }],
        "outline-w": [{ outline: [``, W, X, J] }],
        "outline-color": [{ outline: k() }],
        shadow: [{ shadow: [``, `none`, u, It, jt] }],
        "shadow-color": [{ shadow: k() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, It, jt] }],
        "inset-shadow-color": [{ "inset-shadow": k() }],
        "ring-w": [{ ring: M() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: k() }],
        "ring-offset-w": [{ "ring-offset": [W, J] }],
        "ring-offset-color": [{ "ring-offset": k() }],
        "inset-ring-w": [{ "inset-ring": M() }],
        "inset-ring-color": [{ "inset-ring": k() }],
        "text-shadow": [{ "text-shadow": [`none`, f, It, jt] }],
        "text-shadow-color": [{ "text-shadow": k() }],
        opacity: [{ opacity: [W, Y, q] }],
        "mix-blend": [{ "mix-blend": [...ue(), `plus-darker`, `plus-lighter`] }],
        "bg-blend": [{ "bg-blend": ue() }],
        "mask-clip": [
          { "mask-clip": [`border`, `padding`, `content`, `fill`, `stroke`, `view`] },
          `mask-no-clip`,
        ],
        "mask-composite": [{ mask: [`add`, `subtract`, `intersect`, `exclude`] }],
        "mask-image-linear-pos": [{ "mask-linear": [W] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": P() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": P() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": k() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": k() }],
        "mask-image-t-from-pos": [{ "mask-t-from": P() }],
        "mask-image-t-to-pos": [{ "mask-t-to": P() }],
        "mask-image-t-from-color": [{ "mask-t-from": k() }],
        "mask-image-t-to-color": [{ "mask-t-to": k() }],
        "mask-image-r-from-pos": [{ "mask-r-from": P() }],
        "mask-image-r-to-pos": [{ "mask-r-to": P() }],
        "mask-image-r-from-color": [{ "mask-r-from": k() }],
        "mask-image-r-to-color": [{ "mask-r-to": k() }],
        "mask-image-b-from-pos": [{ "mask-b-from": P() }],
        "mask-image-b-to-pos": [{ "mask-b-to": P() }],
        "mask-image-b-from-color": [{ "mask-b-from": k() }],
        "mask-image-b-to-color": [{ "mask-b-to": k() }],
        "mask-image-l-from-pos": [{ "mask-l-from": P() }],
        "mask-image-l-to-pos": [{ "mask-l-to": P() }],
        "mask-image-l-from-color": [{ "mask-l-from": k() }],
        "mask-image-l-to-color": [{ "mask-l-to": k() }],
        "mask-image-x-from-pos": [{ "mask-x-from": P() }],
        "mask-image-x-to-pos": [{ "mask-x-to": P() }],
        "mask-image-x-from-color": [{ "mask-x-from": k() }],
        "mask-image-x-to-color": [{ "mask-x-to": k() }],
        "mask-image-y-from-pos": [{ "mask-y-from": P() }],
        "mask-image-y-to-pos": [{ "mask-y-to": P() }],
        "mask-image-y-from-color": [{ "mask-y-from": k() }],
        "mask-image-y-to-color": [{ "mask-y-to": k() }],
        "mask-image-radial": [{ "mask-radial": [Y, q] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": P() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": P() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": k() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": k() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          { "mask-radial": [{ closest: [`side`, `corner`], farthest: [`side`, `corner`] }] },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": ee() }],
        "mask-image-conic-pos": [{ "mask-conic": [W] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": P() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": P() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": k() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": k() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          { "mask-origin": [`border`, `padding`, `content`, `fill`, `stroke`, `view`] },
        ],
        "mask-position": [{ mask: A() }],
        "mask-repeat": [{ mask: se() }],
        "mask-size": [{ mask: ce() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, Y, q] }],
        filter: [{ filter: [``, `none`, Y, q] }],
        blur: [{ blur: F() }],
        brightness: [{ brightness: [W, Y, q] }],
        contrast: [{ contrast: [W, Y, q] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, It, jt] }],
        "drop-shadow-color": [{ "drop-shadow": k() }],
        grayscale: [{ grayscale: [``, W, Y, q] }],
        "hue-rotate": [{ "hue-rotate": [W, Y, q] }],
        invert: [{ invert: [``, W, Y, q] }],
        saturate: [{ saturate: [W, Y, q] }],
        sepia: [{ sepia: [``, W, Y, q] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, Y, q] }],
        "backdrop-blur": [{ "backdrop-blur": F() }],
        "backdrop-brightness": [{ "backdrop-brightness": [W, Y, q] }],
        "backdrop-contrast": [{ "backdrop-contrast": [W, Y, q] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, W, Y, q] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [W, Y, q] }],
        "backdrop-invert": [{ "backdrop-invert": [``, W, Y, q] }],
        "backdrop-opacity": [{ "backdrop-opacity": [W, Y, q] }],
        "backdrop-saturate": [{ "backdrop-saturate": [W, Y, q] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, W, Y, q] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": b() }],
        "border-spacing-x": [{ "border-spacing-x": b() }],
        "border-spacing-y": [{ "border-spacing-y": b() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          { transition: [``, `all`, `colors`, `opacity`, `shadow`, `transform`, `none`, Y, q] },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [W, `initial`, Y, q] }],
        ease: [{ ease: [`linear`, `initial`, _, Y, q] }],
        delay: [{ delay: [W, Y, q] }],
        animate: [{ animate: [`none`, v, Y, q] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, Y, q] }],
        "perspective-origin": [{ "perspective-origin": te() }],
        rotate: [{ rotate: I() }],
        "rotate-x": [{ "rotate-x": I() }],
        "rotate-y": [{ "rotate-y": I() }],
        "rotate-z": [{ "rotate-z": I() }],
        scale: [{ scale: L() }],
        "scale-x": [{ "scale-x": L() }],
        "scale-y": [{ "scale-y": L() }],
        "scale-z": [{ "scale-z": L() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: de() }],
        "skew-x": [{ "skew-x": de() }],
        "skew-y": [{ "skew-y": de() }],
        transform: [{ transform: [Y, q, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: te() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: R() }],
        "translate-x": [{ "translate-x": R() }],
        "translate-y": [{ "translate-y": R() }],
        "translate-z": [{ "translate-z": R() }],
        "translate-none": [`translate-none`],
        accent: [{ accent: k() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: k() }],
        "color-scheme": [
          { scheme: [`normal`, `dark`, `light`, `light-dark`, `only-dark`, `only-light`] },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              Y,
              q,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scroll-m": [{ "scroll-m": b() }],
        "scroll-mx": [{ "scroll-mx": b() }],
        "scroll-my": [{ "scroll-my": b() }],
        "scroll-ms": [{ "scroll-ms": b() }],
        "scroll-me": [{ "scroll-me": b() }],
        "scroll-mbs": [{ "scroll-mbs": b() }],
        "scroll-mbe": [{ "scroll-mbe": b() }],
        "scroll-mt": [{ "scroll-mt": b() }],
        "scroll-mr": [{ "scroll-mr": b() }],
        "scroll-mb": [{ "scroll-mb": b() }],
        "scroll-ml": [{ "scroll-ml": b() }],
        "scroll-p": [{ "scroll-p": b() }],
        "scroll-px": [{ "scroll-px": b() }],
        "scroll-py": [{ "scroll-py": b() }],
        "scroll-ps": [{ "scroll-ps": b() }],
        "scroll-pe": [{ "scroll-pe": b() }],
        "scroll-pbs": [{ "scroll-pbs": b() }],
        "scroll-pbe": [{ "scroll-pbe": b() }],
        "scroll-pt": [{ "scroll-pt": b() }],
        "scroll-pr": [{ "scroll-pr": b() }],
        "scroll-pb": [{ "scroll-pb": b() }],
        "scroll-pl": [{ "scroll-pl": b() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [{ "will-change": [`auto`, `scroll`, `contents`, `transform`, Y, q] }],
        fill: [{ fill: [`none`, ...k()] }],
        "stroke-w": [{ stroke: [W, X, J, Et] }],
        stroke: [{ stroke: [`none`, ...k()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [`translate`, `translate-x`, `translate-y`, `translate-z`],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function qt(...e) {
  return Kt(ke(e));
}
var $ = t(),
  Jt = Me(
    `group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5`,
    {
      variants: {
        variant: {
          default: `bg-primary text-primary-foreground hover:bg-primary/80`,
          outline: `border-border bg-transparent hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-input/30`,
          secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground`,
          ghost: `hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50`,
          destructive: `bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40`,
          link: `text-primary underline underline-offset-4 hover:underline`,
        },
        size: {
          default: `h-10 gap-1.5 px-6 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4`,
          xs: `h-7 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3`,
          sm: `h-9 gap-1 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3`,
          lg: `h-11 gap-1.5 px-8 has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5`,
          icon: `size-10`,
          "icon-xs": `size-7 [&_svg:not([class*='size-'])]:size-3`,
          "icon-sm": `size-9`,
          "icon-lg": `size-11`,
        },
      },
      defaultVariants: { variant: `default`, size: `default` },
    },
  );
function Yt(e) {
  let t = (0, B.c)(12),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ className: n, variant: i, size: a, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = i === void 0 ? `default` : i,
    s = a === void 0 ? `default` : a,
    c;
  t[5] !== n || t[6] !== s || t[7] !== o
    ? ((c = qt(Jt({ variant: o, size: s, className: n }))),
      (t[5] = n),
      (t[6] = s),
      (t[7] = o),
      (t[8] = c))
    : (c = t[8]);
  let l;
  return (
    t[9] !== r || t[10] !== c
      ? ((l = (0, $.jsx)(De, { "data-slot": `button`, className: c, ...r })),
        (t[9] = r),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
var Xt = `hello@tulme.com`,
  Zt = new Date().getFullYear(),
  Qt = `mailto:${Xt}?subject=Project%20inquiry%20for%20Tulme&body=${encodeURIComponent(
    [
      `Hello Tulme,`,
      ``,
      `I would like help with:`,
      `- project type:`,
      `- location:`,
      `- timeline:`,
      `- scope:`,
      ``,
      `Best,`,
      ``,
    ].join(`
`),
  )}`;
function $t() {
  let e = (0, B.c)(9),
    t,
    n,
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, $.jsx)(`p`, {
        className: `text-[0.7rem] font-medium uppercase text-stone-400`,
        children: `Ready to begin?`,
      })),
      (n = (0, $.jsx)(`h2`, {
        className: `mt-3 max-w-[11ch] text-balance font-heading text-4xl leading-[0.94] font-medium text-white sm:text-5xl lg:text-6xl`,
        children: `Let's create your Mediterranean dream`,
      })),
      (r = (0, $.jsx)(`p`, {
        className: `mt-4 max-w-136 text-pretty text-sm leading-6 text-stone-300 sm:text-base sm:leading-7`,
        children: `Open a prefilled email and send us your location, scope, and timeline.`,
      })),
      (e[0] = t),
      (e[1] = n),
      (e[2] = r))
    : ((t = e[0]), (n = e[1]), (r = e[2]));
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`a`, { href: Qt })), (e[3] = i))
    : (i = e[3]);
  let a;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsxs)(`div`, {
        className: `max-w-152`,
        children: [
          t,
          n,
          r,
          (0, $.jsx)(`div`, {
            className: `mt-8`,
            children: (0, $.jsxs)(Yt, {
              variant: `outline`,
              size: `lg`,
              className: `h-12 border-white/20 bg-white text-stone-950 hover:bg-stone-100 hover:text-stone-950`,
              render: i,
              children: [`Send email`, (0, $.jsx)(f, { className: `size-4` })],
            }),
          }),
        ],
      })),
      (e[4] = a))
    : (a = e[4]);
  let o;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`p`, {
        className: `text-[0.7rem] font-medium uppercase text-stone-500`,
        children: `Contact`,
      })),
      (e[5] = o))
    : (o = e[5]);
  let s, c;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsxs)(`div`, {
        children: [
          o,
          (0, $.jsxs)(`div`, {
            className: `mt-4 space-y-2 text-sm leading-6 text-stone-200 sm:text-base`,
            children: [
              (0, $.jsx)(`p`, {
                children: (0, $.jsx)(`a`, {
                  href: `mailto:${Xt}`,
                  className: `transition hover:text-white`,
                  children: Xt,
                }),
              }),
              (0, $.jsx)(`p`, { children: `Calpe, Spain` }),
            ],
          }),
        ],
      })),
      (c = (0, $.jsx)(`p`, {
        className: `text-[0.7rem] font-medium uppercase text-stone-500`,
        children: `Navigate`,
      })),
      (e[6] = s),
      (e[7] = c))
    : ((s = e[6]), (c = e[7]));
  let l;
  return (
    e[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, $.jsx)(`section`, {
          id: `contact`,
          className: `overflow-hidden bg-stone-950 px-4 py-16 text-stone-50 scroll-mt-24 sm:px-6 sm:py-20 lg:px-8 lg:py-24`,
          children: (0, $.jsxs)(`div`, {
            className: `mx-auto w-full max-w-350`,
            children: [
              (0, $.jsxs)(`div`, {
                className: `grid gap-10 border-t border-white/14 pt-10 sm:pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-14`,
                children: [
                  a,
                  (0, $.jsxs)(`div`, {
                    className: `grid gap-8 sm:grid-cols-2`,
                    children: [
                      s,
                      (0, $.jsxs)(`div`, {
                        children: [
                          c,
                          (0, $.jsxs)(`div`, {
                            className: `mt-4 space-y-2 text-sm leading-6 text-stone-200 sm:text-base`,
                            children: [
                              (0, $.jsx)(`p`, {
                                children: (0, $.jsx)(`a`, {
                                  href: `/#collections`,
                                  className: `transition hover:text-white`,
                                  children: `Collections`,
                                }),
                              }),
                              (0, $.jsx)(`p`, {
                                children: (0, $.jsx)(`a`, {
                                  href: `/#brands`,
                                  className: `transition hover:text-white`,
                                  children: `Brands`,
                                }),
                              }),
                              (0, $.jsx)(`p`, {
                                children: (0, $.jsx)(`a`, {
                                  href: `/#process`,
                                  className: `transition hover:text-white`,
                                  children: `Process`,
                                }),
                              }),
                            ],
                          }),
                          (0, $.jsxs)(`p`, {
                            className: `text-[0.68rem] uppercase text-stone-500`,
                            children: [`© `, Zt, ` Tulme Studio`],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, $.jsx)(`div`, {
                "aria-hidden": `true`,
                className: `pointer-events-none relative left-1/2 mt-10 -mb-[0.16em] w-screen -translate-x-1/2 overflow-hidden px-0 text-center  text-[22vw] leading-none font-medium whitespace-nowrap text-white/7 sm:mt-14`,
                children: `Tulme Studio`,
              }),
            ],
          }),
        })),
        (e[8] = l))
      : (l = e[8]),
    l
  );
}
var en = [
  {
    title: `Design`,
    description: `Material palettes, joinery details, and finish samples are resolved before an order is placed.`,
    image: `/assets/design-table-DKox7Lob.webp`,
    alt: `Design team reviewing stone, fabric, and finish samples on a materials table`,
    overlay: `from-stone-950/72 via-stone-900/20 to-transparent`,
  },
  {
    title: `Logistics`,
    description: `From factory pickup in Poland to delivery on the Costa Blanca, routing stays exact and quiet.`,
    image: `/assets/truck-coast-Da0ybbIy.webp`,
    alt: `Truck driving along the Costa Blanca coastline`,
    overlay: `from-stone-950/70 via-stone-950/12 to-transparent`,
  },
];
function tn() {
  let e = (0, B.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = en.map(nn)), (e[0] = t)) : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsxs)(`section`, {
          id: `design-logistics`,
          className: `relative grid scroll-mt-24 lg:grid-cols-2`,
          children: [
            t,
            (0, $.jsxs)(`div`, {
              "aria-hidden": `true`,
              className: `pointer-events-none absolute top-1/2 left-1/2 z-10 flex size-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:size-56`,
              children: [
                (0, $.jsx)(`span`, { className: `absolute h-1 w-28 bg-white/90 lg:w-40` }),
                (0, $.jsx)(`span`, { className: `absolute h-28 w-1 bg-white/90 lg:h-40` }),
              ],
            }),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
function nn(e) {
  return (0, $.jsxs)(
    `article`,
    {
      className: `relative min-h-[70dvh] overflow-hidden bg-stone-950`,
      children: [
        (0, $.jsx)(`img`, {
          src: e.image,
          alt: e.alt,
          className: `absolute inset-0 h-full w-full object-cover`,
        }),
        (0, $.jsx)(`div`, { className: `absolute inset-0 bg-linear-to-t ${e.overlay}` }),
        (0, $.jsx)(`div`, {
          className: `relative flex min-h-[70dvh] items-end p-6 sm:p-8 lg:p-12`,
          children: (0, $.jsxs)(`div`, {
            className: `max-w-88`,
            children: [
              (0, $.jsx)(`h2`, {
                className: `text-balance font-heading text-4xl leading-[0.92] font-medium text-white sm:text-5xl lg:text-6xl`,
                children: e.title,
              }),
              (0, $.jsx)(`p`, {
                className: `mt-4 max-w-md text-pretty text-sm leading-6 text-white/82 sm:text-base sm:leading-7`,
                children: e.description,
              }),
            ],
          }),
        }),
      ],
    },
    e.title,
  );
}
function rn() {
  let e = (0, B.c)(8),
    t,
    n,
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, $.jsx)(`div`, { className: `hero-media absolute inset-0` })),
      (n = (0, $.jsx)(`div`, { className: `hero-overlay absolute inset-0` })),
      (r = (0, $.jsx)(`div`, { className: `hero-glow absolute inset-0` })),
      (e[0] = t),
      (e[1] = n),
      (e[2] = r))
    : ((t = e[0]), (n = e[1]), (r = e[2]));
  let i, a, o;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`p`, {
        className: `hero-eyebrow mb-5 text-[0.68rem] font-medium tracking-[0.38em] uppercase sm:mb-6`,
        children: `Tulme Studio`,
      })),
      (a = (0, $.jsx)(`h1`, {
        className: `mx-auto max-w-[8ch] text-5xl leading-[0.92] font-medium tracking-[-0.06em] text-hero-foreground sm:text-6xl md:text-7xl lg:text-[6.5rem]`,
        children: `Design. Source. Deliver.`,
      })),
      (o = (0, $.jsx)(`p`, {
        className: `hero-copy mx-auto mt-5 max-w-2xl text-sm leading-6 font-normal sm:mt-6 sm:text-base sm:leading-7`,
        children: `We will design your dream home and give you direct access to Europe's finest manufacturers. Hard-to-find or overpriced in Spain? No problem. We source best-in-class doors, windows, fixtures and furniture at below-market prices. We deliver everything directly via our in-house logistics network.`,
      })),
      (e[3] = i),
      (e[4] = a),
      (e[5] = o))
    : ((i = e[3]), (a = e[4]), (o = e[5]));
  let s;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(`a`, { href: `#contact` })), (e[6] = s))
    : (s = e[6]);
  let c;
  return (
    e[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, $.jsxs)(`section`, {
          className: `hero-surface relative min-h-svh overflow-hidden`,
          children: [
            t,
            n,
            r,
            (0, $.jsx)(`div`, {
              className: `relative flex min-h-svh flex-col px-4 pb-10 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36`,
              children: (0, $.jsx)(`div`, {
                className: `mx-auto flex w-full max-w-350 flex-1 flex-col justify-between`,
                children: (0, $.jsx)(`div`, {
                  className: `flex flex-1 items-center justify-center`,
                  children: (0, $.jsxs)(`div`, {
                    className: `max-w-176 text-center animate-in fade-in slide-in-from-bottom-6 duration-700`,
                    children: [
                      i,
                      a,
                      o,
                      (0, $.jsx)(`div`, {
                        className: `mt-8 flex items-center justify-center gap-4 sm:mt-10`,
                        children: (0, $.jsxs)(Yt, {
                          variant: `outline`,
                          size: `lg`,
                          className: `hero-cta h-12 px-7 text-[0.72rem] tracking-[0.24em]`,
                          render: s,
                          children: [`Demand perfection`, (0, $.jsx)(f, { className: `size-4` })],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        })),
        (e[7] = c))
      : (c = e[7]),
    c
  );
}
var an = [
  `/assets/aluplast-vaGqdLy9.png`,
  `/assets/grohe-C1tYu-SB.png`,
  `/assets/leds-c4-C2WpbJ_K.png`,
  `/assets/mti-furninova-BUKbq3Jk.png`,
  `/assets/rehau-iJGMWgan.png`,
  `/assets/san-swiss-CDLJycyw.png`,
];
function on(e) {
  let t = (0, B.c)(4),
    { items: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = [...n, ...n, ...n, ...n]), (t[0] = n), (t[1] = r));
  let i = r,
    a;
  return (
    t[2] === i
      ? (a = t[3])
      : ((a = (0, $.jsx)(`div`, {
          className: `logo-marquee-shell`,
          children: (0, $.jsx)(`div`, { className: `logo-marquee-track`, children: i.map(sn) }),
        })),
        (t[2] = i),
        (t[3] = a)),
    a
  );
}
function sn(e, t) {
  return (0, $.jsx)(
    `div`,
    {
      className: `logo-marquee-item`,
      children: (0, $.jsx)(`img`, { src: e, alt: ``, className: `logo-marquee-image` }),
    },
    `${e}-${t}`,
  );
}
function cn() {
  let e = (0, B.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, $.jsx)(`div`, {
        className: `mx-auto max-w-[40rem] text-center`,
        children: (0, $.jsx)(`h2`, {
          className: `text-muted-foreground text-balance text-[0.7rem] font-medium uppercase`,
          children: `We work with Europe's top brands`,
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(`section`, {
          id: `brands`,
          className: `bg-background px-4 py-8 scroll-mt-24 sm:px-6 sm:py-10 lg:px-8 lg:py-12`,
          children: (0, $.jsxs)(`div`, {
            className: `mx-auto w-full max-w-[1400px]`,
            children: [
              t,
              (0, $.jsx)(`div`, {
                className: `mt-10 sm:mt-12`,
                children: (0, $.jsx)(on, { items: an }),
              }),
            ],
          }),
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
var ln = new Map([
    [
      `bold`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M192.94,189.66a12,12,0,0,1-.94,17A84,84,0,0,1,53.55,160H40a12,12,0,0,1,0-24H52V120H40a12,12,0,0,1,0-24H53.55A84,84,0,0,1,192,49.39a12,12,0,0,1-16,17.89A60,60,0,0,0,78.18,96H136a12,12,0,0,1,0,24H76v16h44a12,12,0,0,1,0,24H78.18A60,60,0,0,0,176,188.72,12,12,0,0,1,192.94,189.66Z`,
        }),
      ),
    ],
    [
      `duotone`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M184,58.33V197.67A72,72,0,0,1,64,144V112A72,72,0,0,1,184,58.33Z`,
          opacity: `0.2`,
        }),
        u.createElement(`path`, {
          d: `M190,192.33a8,8,0,0,1-.63,11.3A80,80,0,0,1,56.4,152H40a8,8,0,0,1,0-16H56V120H40a8,8,0,0,1,0-16H56.4A80,80,0,0,1,189.34,52.37,8,8,0,0,1,178.66,64.3,64,64,0,0,0,72.52,104H136a8,8,0,0,1,0,16H72v16h48a8,8,0,0,1,0,16H72.52a64,64,0,0,0,106.14,39.71A8,8,0,0,1,190,192.33Z`,
        }),
      ),
    ],
    [
      `fill`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,80a8,8,0,0,1,0,16H88v16h24a8,8,0,0,1,0,16H88.81a40,40,0,0,0,65.86,21.82,8,8,0,1,1,10.66,11.92A56,56,0,0,1,72.58,152H64a8,8,0,0,1,0-16h8V120H64a8,8,0,0,1,0-16h8.58a56,56,0,0,1,92.75-33.74,8,8,0,1,1-10.66,11.92A40,40,0,0,0,88.81,104Z`,
        }),
      ),
    ],
    [
      `light`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M188.47,193.66a6,6,0,0,1-.47,8.48A78,78,0,0,1,58.25,150H40a6,6,0,0,1,0-12H58V118H40a6,6,0,0,1,0-12H58.25A78,78,0,0,1,188,53.86a6,6,0,0,1-8,9A66,66,0,0,0,70.29,106H136a6,6,0,0,1,0,12H70v20h50a6,6,0,0,1,0,12H70.29A66,66,0,0,0,180,193.2,6,6,0,0,1,188.47,193.66Z`,
        }),
      ),
    ],
    [
      `regular`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M190,192.33a8,8,0,0,1-.63,11.3A80,80,0,0,1,56.4,152H40a8,8,0,0,1,0-16H56V120H40a8,8,0,0,1,0-16H56.4A80,80,0,0,1,189.34,52.37,8,8,0,0,1,178.66,64.3,64,64,0,0,0,72.52,104H136a8,8,0,0,1,0,16H72v16h48a8,8,0,0,1,0,16H72.52a64,64,0,0,0,106.14,39.71A8,8,0,0,1,190,192.33Z`,
        }),
      ),
    ],
    [
      `thin`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M187,195a4,4,0,0,1-.31,5.65A76,76,0,0,1,60.11,148H40a4,4,0,0,1,0-8H60V116H40a4,4,0,0,1,0-8H60.11A76,76,0,0,1,186.67,55.35a4,4,0,1,1-5.34,6A68,68,0,0,0,68.13,108H136a4,4,0,0,1,0,8H68v24h52a4,4,0,0,1,0,8H68.13a68,68,0,0,0,113.2,46.69A4,4,0,0,1,187,195Z`,
        }),
      ),
    ],
  ]),
  un = new Map([
    [
      `bold`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M230.15,70.54,185.46,25.86a20,20,0,0,0-28.28,0L33.86,149.17A19.86,19.86,0,0,0,28,163.31V208a20,20,0,0,0,20,20H216a12,12,0,0,0,0-24H125L230.15,98.83A20,20,0,0,0,230.15,70.54ZM136,81l11,11L76,163,65,152ZM52,204V173l15.52,15.51h0L83,204Zm52-13L93,180l71-71,11,11Zm88-88L153,64l18.34-18.34,39,39Z`,
        }),
      ),
    ],
    [
      `duotone`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z`,
          opacity: `0.2`,
        }),
        u.createElement(`path`, {
          d: `M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM79.32,188,164,103.31,180.69,120,96,204.69ZM68,176.69,51.31,160,136,75.31,152.69,92Zm-20,2.62L76.69,208H48Zm144-70.62L147.32,64l24-24L216,84.69Z`,
        }),
      ),
    ],
    [
      `fill`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM79.32,188l90.34-90.34,16.69,16.68L96,204.69Zm79-101.66h0L68,176.69,51.31,160l90.35-90.34ZM48,179.31,76.69,208H48Z`,
        }),
      ),
    ],
    [
      `light`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M225.91,74.79,181.22,30.1a14,14,0,0,0-19.8,0L38.1,153.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H216a6,6,0,0,0,0-12H110.49L225.91,94.59A14,14,0,0,0,225.91,74.79ZM76.49,188,164,100.48,183.52,120,96,207.51ZM68,179.52,48.49,160,136,72.49,155.52,92ZM46,208V174.48L81.52,210H48A2,2,0,0,1,46,208ZM217.42,86.1,192,111.52,144.49,64,169.9,38.59a2,2,0,0,1,2.83,0l44.69,44.68A2,2,0,0,1,217.42,86.1Z`,
        }),
      ),
    ],
    [
      `regular`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM136,75.31,152.69,92,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188,164,103.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z`,
        }),
      ),
    ],
    [
      `thin`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M224.49,76.2,179.8,31.51a12,12,0,0,0-17,0L39.51,154.83A12,12,0,0,0,36,163.31V208a12,12,0,0,0,12,12H216a4,4,0,0,0,0-8H105.66L224.49,93.17A12,12,0,0,0,224.49,76.2ZM73.66,188,164,97.66,186.35,120,96,210.34ZM68,182.34,45.66,160,136,69.66,158.35,92ZM44,208V169.66l21.17,21.17h0L86.34,212H48A4,4,0,0,1,44,208ZM218.83,87.51,192,114.34,141.66,64l26.83-26.83a4,4,0,0,1,5.66,0l44.68,44.69A4,4,0,0,1,218.83,87.51Z`,
        }),
      ),
    ],
  ]),
  dn = new Map([
    [
      `bold`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M255.14,115.54l-14-35A19.89,19.89,0,0,0,222.58,68H196V64a12,12,0,0,0-12-12H32A20,20,0,0,0,12,72V184a20,20,0,0,0,20,20H46.06a36,36,0,0,0,67.88,0h44.12a36,36,0,0,0,67.88,0H236a20,20,0,0,0,20-20V120A21.7,21.7,0,0,0,255.14,115.54ZM196,92h23.88l6.4,16H196ZM80,204a12,12,0,1,1,12-12A12,12,0,0,1,80,204Zm92-41.92A36.32,36.32,0,0,0,158.06,180H113.94a36,36,0,0,0-67.88,0H36V140H172ZM172,116H36V76H172Zm20,88a12,12,0,1,1,12-12A12,12,0,0,1,192,204Zm40-24h-6.06A36.09,36.09,0,0,0,196,156.23V132h36Z`,
        }),
      ),
    ],
    [
      `duotone`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M248,120v64a8,8,0,0,1-8,8H216a24,24,0,0,0-48,0H104a24,24,0,0,0-48,0H32a8,8,0,0,1-8-8V144H184V120Z`,
          opacity: `0.2`,
        }),
        u.createElement(`path`, {
          d: `M255.42,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-8-8H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,255.42,117ZM192,88h34.58l9.6,24H192ZM32,72H176v64H32ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm81-24H111a32,32,0,0,0-62,0H32V152H176v12.31A32.11,32.11,0,0,0,161,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm48-24H223a32.06,32.06,0,0,0-31-24V128h48Z`,
        }),
      ),
    ],
    [
      `fill`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M255.43,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-8-8H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A8.13,8.13,0,0,0,255.43,117ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208ZM32,136V72H176v64Zm160,72a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm0-96V88h34.58l9.6,24Z`,
        }),
      ),
    ],
    [
      `light`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M253.57,117.78l-14-35a13.93,13.93,0,0,0-13-8.8H190V64a6,6,0,0,0-6-6H32A14,14,0,0,0,18,72V184a14,14,0,0,0,14,14H50.6a30,30,0,0,0,58.8,0h53.2a30,30,0,0,0,58.8,0H240a14,14,0,0,0,14-14V120A6,6,0,0,0,253.57,117.78ZM190,86h36.58a2,2,0,0,1,1.86,1.26L239.14,114H190ZM30,72a2,2,0,0,1,2-2H178v68H30ZM80,210a18,18,0,1,1,18-18A18,18,0,0,1,80,210Zm82.6-24H109.4a30,30,0,0,0-58.8,0H32a2,2,0,0,1-2-2V150H178v15.48A30.1,30.1,0,0,0,162.6,186ZM192,210a18,18,0,1,1,18-18A18,18,0,0,1,192,210Zm50-26a2,2,0,0,1-2,2H221.4A30.05,30.05,0,0,0,192,162c-.67,0-1.34,0-2,.07V126h52Z`,
        }),
      ),
    ],
    [
      `regular`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M255.42,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-8-8H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,255.42,117ZM192,88h34.58l9.6,24H192ZM32,72H176v64H32ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm81-24H111a32,32,0,0,0-62,0H32V152H176v12.31A32.11,32.11,0,0,0,161,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm48-24H223a32.06,32.06,0,0,0-31-24V128h48Z`,
        }),
      ),
    ],
    [
      `thin`,
      u.createElement(
        u.Fragment,
        null,
        u.createElement(`path`, {
          d: `M251.71,118.52l-14-35A12,12,0,0,0,226.58,76H188V64a4,4,0,0,0-4-4H32A12,12,0,0,0,20,72V184a12,12,0,0,0,12,12H52.29a28,28,0,0,0,55.42,0h56.58a28,28,0,0,0,55.42,0H240a12,12,0,0,0,12-12V120A4,4,0,0,0,251.71,118.52ZM188,84h38.58a4,4,0,0,1,3.72,2.51L242.09,116H188ZM28,72a4,4,0,0,1,4-4H180v72H28ZM80,212a20,20,0,1,1,20-20A20,20,0,0,1,80,212Zm84.29-24H107.71a28,28,0,0,0-55.42,0H32a4,4,0,0,1-4-4V148H180v18.71A28.05,28.05,0,0,0,164.29,188ZM192,212a20,20,0,1,1,20-20A20,20,0,0,1,192,212Zm52-28a4,4,0,0,1-4,4H219.71A28,28,0,0,0,188,164.29V124h56Z`,
        }),
      ),
    ],
  ]),
  fn = (0, u.createContext)({
    color: `currentColor`,
    size: `1em`,
    weight: `regular`,
    mirrored: !1,
  }),
  pn = u.forwardRef((e, t) => {
    let { alt: n, color: r, size: i, weight: a, mirrored: o, children: s, weights: c, ...l } = e,
      {
        color: d = `currentColor`,
        size: f,
        weight: p = `regular`,
        mirrored: m = !1,
        ...h
      } = u.useContext(fn);
    return u.createElement(
      `svg`,
      {
        ref: t,
        xmlns: `http://www.w3.org/2000/svg`,
        width: i ?? f,
        height: i ?? f,
        fill: r ?? d,
        viewBox: `0 0 256 256`,
        transform: o || m ? `scale(-1, 1)` : void 0,
        ...h,
        ...l,
      },
      !!n && u.createElement(`title`, null, n),
      s,
      c.get(a ?? p),
    );
  });
pn.displayName = `IconBase`;
var mn = u.forwardRef((e, t) => u.createElement(pn, { ref: t, ...e, weights: ln }));
mn.displayName = `CurrencyEurIcon`;
var hn = u.forwardRef((e, t) => u.createElement(pn, { ref: t, ...e, weights: un }));
hn.displayName = `PencilLineIcon`;
var gn = u.forwardRef((e, t) => u.createElement(pn, { ref: t, ...e, weights: dn }));
gn.displayName = `TruckIcon`;
var _n = [
  {
    number: `01`,
    icon: hn,
    title: `Design and craft`,
    description: `Architectural design guidance, bespoke carpentry, and made-to-measure detailing shaped with some of the best craftsmen in Europe.`,
  },
  {
    number: `02`,
    icon: mn,
    title: `Sourcing`,
    description: `Premium products sourced directly from factories, with manufacturer negotiation that brings pricing well below catalogue rates.`,
  },
  {
    number: `03`,
    icon: gn,
    title: `Logistics and delivery`,
    description: `An in-house freight team and European network of trucks and warehouses coordinate safe, on-time delivery from leading manufacturers directly to Costa Blanca homes.`,
  },
];
function vn() {
  let e = (0, B.c)(3),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, $.jsxs)(`div`, {
        className: `max-w-[44rem] animate-in fade-in slide-in-from-bottom-6 duration-700`,
        children: [
          (0, $.jsx)(`p`, {
            className: `text-muted-foreground text-[0.7rem] font-medium uppercase`,
            children: `from vision to reality`,
          }),
          (0, $.jsx)(`h2`, {
            className: `mt-3 max-w-[12ch] text-balance font-heading text-4xl leading-[0.95] font-medium text-foreground sm:text-5xl lg:text-6xl`,
            children: `How we work`,
          }),
        ],
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, $.jsx)(`div`, {
        className: `absolute top-0 bottom-0 left-4 w-px bg-stone-300 lg:top-4 lg:right-0 lg:bottom-auto lg:left-0 lg:w-full lg:h-px`,
      })),
      (e[1] = n))
    : (n = e[1]);
  let r;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(`section`, {
          id: `process`,
          className: `bg-background px-4 py-16 scroll-mt-24 sm:px-6 sm:py-20 lg:px-8 lg:py-24`,
          children: (0, $.jsxs)(`div`, {
            className: `mx-auto w-full max-w-[1400px]`,
            children: [
              t,
              (0, $.jsxs)(`div`, {
                className: `relative mt-12 lg:mt-16`,
                children: [
                  n,
                  (0, $.jsx)(`div`, {
                    className: `grid gap-10 lg:grid-cols-3 lg:gap-12`,
                    children: _n.map(yn),
                  }),
                ],
              }),
            ],
          }),
        })),
        (e[2] = r))
      : (r = e[2]),
    r
  );
}
function yn(e) {
  return (0, $.jsxs)(
    `article`,
    {
      className: `relative pl-12 animate-in fade-in slide-in-from-bottom-6 duration-700 lg:pl-0 lg:pt-12`,
      children: [
        (0, $.jsx)(`div`, {
          className: `absolute top-1 left-0 flex size-8 items-center justify-center rounded-full border border-stone-300 bg-background text-[0.72rem] font-medium text-stone-500 lg:top-0 lg:left-0`,
          children: e.number,
        }),
        (0, $.jsxs)(`div`, {
          className: `lg:max-w-[24rem]`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `flex items-center gap-3`,
              children: [
                (0, $.jsx)(e.icon, { size: 32, weight: `regular`, className: `shrink-0 ` }),
                (0, $.jsx)(`h3`, {
                  className: `text-balance font-heading text-2xl leading-[1] font-medium text-foreground sm:text-[2rem]`,
                  children: e.title,
                }),
              ],
            }),
            (0, $.jsx)(`p`, {
              className: `text-muted-foreground mt-4 max-w-[32rem] text-pretty text-sm leading-6 sm:text-base sm:leading-7`,
              children: e.description,
            }),
          ],
        }),
      ],
    },
    e.title,
  );
}
var bn = [
  {
    title: `Designer Furniture`,
    description: `World-class sofas, beds, and seating with refined materials, deep comfort, and durability built for high-traffic homes and rentals.`,
    image: `https://furninova.com/app/uploads/2024/08/Ava-armchair-908x1240-1.jpg`,
    alt: `Designer armchair with premium upholstery`,
    animationClass: `delay-0`,
  },
  {
    title: `Bespoke Carpentry`,
    description: `Custom kitchens, wardrobes, and built-ins crafted with the precision and finish quality expected from top-tier European makers.`,
    image: `https://www.lempa.lt/wp-content/uploads/2023/07/My-project-1-4-3.jpg`,
    alt: `Architectural interior detail with bespoke millwork`,
    animationClass: `delay-100`,
  },
  {
    title: `World-Class Windows`,
    description: `High-performance window systems engineered for insulation, longevity, and a cleaner architectural finish in the Spanish climate.`,
    image: `https://www.st-veit1130.at/images/home-twentyone-wohnzimmer-beispielfoto-02.webp`,
    alt: `Minimal modern window system detail`,
    animationClass: `delay-200`,
  },
];
function xn() {
  let e = (0, B.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`section`, {
          id: `collections`,
          className: `bg-background px-4 py-6 scroll-mt-24 sm:px-6 sm:py-8 lg:px-8 lg:py-10`,
          children: (0, $.jsx)(`div`, {
            className: `mx-auto w-full max-w-350`,
            children: (0, $.jsx)(`div`, {
              className: `grid grid-cols-1 gap-6 md:grid-cols-3`,
              children: bn.map(Sn),
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Sn(e) {
  return (0, $.jsxs)(
    `article`,
    {
      className: `animate-in fade-in slide-in-from-bottom-6 space-y-3 duration-700 ${e.animationClass}`,
      children: [
        (0, $.jsx)(`div`, {
          className: `showcase-media bg-muted`,
          children: (0, $.jsx)(`img`, {
            src: e.image,
            alt: e.alt,
            className: `h-full w-full object-cover`,
          }),
        }),
        (0, $.jsxs)(`div`, {
          className: `space-y-2 pr-4`,
          children: [
            (0, $.jsx)(`h2`, {
              className: `text-lg font-medium tracking-tight text-foreground sm:text-xl`,
              children: e.title,
            }),
            (0, $.jsx)(`p`, {
              className: `max-w-[30ch] text-sm leading-6 text-muted-foreground sm:text-[0.95rem]`,
              children: e.description,
            }),
          ],
        }),
      ],
    },
    e.title,
  );
}
function Cn() {
  let e = (0, B.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsxs)(`main`, {
          children: [
            (0, $.jsx)(rn, {}),
            (0, $.jsx)(xn, {}),
            (0, $.jsx)(cn, {}),
            (0, $.jsx)(tn, {}),
            (0, $.jsx)(vn, {}),
            (0, $.jsx)($t, {}),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
export { Cn as component };
