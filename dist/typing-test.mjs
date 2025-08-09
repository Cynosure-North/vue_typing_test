/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Fs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const j = {}, et = [], me = () => {
}, Xr = () => !1, zt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ns = (e) => e.startsWith("onUpdate:"), z = Object.assign, Ds = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Qr = Object.prototype.hasOwnProperty, N = (e, t) => Qr.call(e, t), O = Array.isArray, tt = (e) => Yt(e) === "[object Map]", Wn = (e) => Yt(e) === "[object Set]", I = (e) => typeof e == "function", G = (e) => typeof e == "string", De = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", Vn = (e) => (q(e) || I(e)) && I(e.then) && I(e.catch), Bn = Object.prototype.toString, Yt = (e) => Bn.call(e), ei = (e) => Yt(e).slice(8, -1), Zt = (e) => Yt(e) === "[object Object]", Ls = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, gt = /* @__PURE__ */ Fs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Xt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, ti = /-(\w)/g, be = Xt(
  (e) => e.replace(ti, (t, s) => s ? s.toUpperCase() : "")
), si = /\B([A-Z])/g, pe = Xt(
  (e) => e.replace(si, "-$1").toLowerCase()
), Un = Xt((e) => e.charAt(0).toUpperCase() + e.slice(1)), cs = Xt(
  (e) => e ? `on${Un(e)}` : ""
), We = (e, t) => !Object.is(e, t), fs = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, bs = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, ni = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, fn = (e) => {
  const t = G(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let un;
const Qt = () => un || (un = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Et(e) {
  if (O(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = G(n) ? li(n) : Et(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (G(e) || q(e))
    return e;
}
const ri = /;(?![^(]*\))/g, ii = /:([^]+)/, oi = /\/\*[^]*?\*\//g;
function li(e) {
  const t = {};
  return e.replace(oi, "").split(ri).forEach((s) => {
    if (s) {
      const n = s.split(ii);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function $s(e) {
  let t = "";
  if (G(e))
    t = e;
  else if (O(e))
    for (let s = 0; s < e.length; s++) {
      const n = $s(e[s]);
      n && (t += n + " ");
    }
  else if (q(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const ci = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", fi = /* @__PURE__ */ Fs(ci);
function Kn(e) {
  return !!e || e === "";
}
const kn = (e) => !!(e && e.__v_isRef === !0), qn = (e) => G(e) ? e : e == null ? "" : O(e) || q(e) && (e.toString === Bn || !I(e.toString)) ? kn(e) ? qn(e.value) : JSON.stringify(e, Gn, 2) : String(e), Gn = (e, t) => kn(t) ? Gn(e, t.value) : tt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[us(n, i) + " =>"] = r, s),
    {}
  )
} : Wn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => us(s))
} : De(t) ? us(t) : q(t) && !O(t) && !Zt(t) ? String(t) : t, us = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    De(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ce;
class ui {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ce, !t && ce && (this.index = (ce.scopes || (ce.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = ce;
      try {
        return ce = this, t();
      } finally {
        ce = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ce, ce = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ce = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ai() {
  return ce;
}
let V;
const as = /* @__PURE__ */ new WeakSet();
class Jn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ce && ce.active && ce.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, as.has(this) && (as.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Yn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, an(this), Zn(this);
    const t = V, s = ye;
    V = this, ye = !0;
    try {
      return this.fn();
    } finally {
      Xn(this), V = t, ye = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ws(t);
      this.deps = this.depsTail = void 0, an(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? as.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ys(this) && this.run();
  }
  get dirty() {
    return ys(this);
  }
}
let zn = 0, _t, mt;
function Yn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = mt, mt = e;
    return;
  }
  e.next = _t, _t = e;
}
function js() {
  zn++;
}
function Hs() {
  if (--zn > 0)
    return;
  if (mt) {
    let t = mt;
    for (mt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; _t; ) {
    let t = _t;
    for (_t = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function Zn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Xn(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), Ws(n), di(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function ys(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Qn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Qn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === xt) || (e.globalVersion = xt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ys(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = V, n = ye;
  V = e, ye = !0;
  try {
    Zn(e);
    const r = e.fn(e._value);
    (t.version === 0 || We(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    V = s, ye = n, Xn(e), e.flags &= -3;
  }
}
function Ws(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      Ws(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function di(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let ye = !0;
const er = [];
function Me() {
  er.push(ye), ye = !1;
}
function Fe() {
  const e = er.pop();
  ye = e === void 0 ? !0 : e;
}
function an(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = V;
    V = void 0;
    try {
      t();
    } finally {
      V = s;
    }
  }
}
let xt = 0;
class hi {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Vs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!V || !ye || V === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== V)
      s = this.activeLink = new hi(V, this), V.deps ? (s.prevDep = V.depsTail, V.depsTail.nextDep = s, V.depsTail = s) : V.deps = V.depsTail = s, tr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = V.depsTail, s.nextDep = void 0, V.depsTail.nextDep = s, V.depsTail = s, V.deps === s && (V.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, xt++, this.notify(t);
  }
  notify(t) {
    js();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Hs();
    }
  }
}
function tr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        tr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const vs = /* @__PURE__ */ new WeakMap(), Ye = Symbol(
  ""
), xs = Symbol(
  ""
), wt = Symbol(
  ""
);
function Z(e, t, s) {
  if (ye && V) {
    let n = vs.get(e);
    n || vs.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new Vs()), r.map = n, r.key = s), r.track();
  }
}
function Ie(e, t, s, n, r, i) {
  const o = vs.get(e);
  if (!o) {
    xt++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (js(), t === "clear")
    o.forEach(l);
  else {
    const f = O(e), d = f && Ls(s);
    if (f && s === "length") {
      const a = Number(n);
      o.forEach((p, C) => {
        (C === "length" || C === wt || !De(C) && C >= a) && l(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(wt)), t) {
        case "add":
          f ? d && l(o.get("length")) : (l(o.get(Ye)), tt(e) && l(o.get(xs)));
          break;
        case "delete":
          f || (l(o.get(Ye)), tt(e) && l(o.get(xs)));
          break;
        case "set":
          tt(e) && l(o.get(Ye));
          break;
      }
  }
  Hs();
}
function Xe(e) {
  const t = L(e);
  return t === e ? t : (Z(t, "iterate", wt), ge(e) ? t : t.map(Y));
}
function es(e) {
  return Z(e = L(e), "iterate", wt), e;
}
const pi = {
  __proto__: null,
  [Symbol.iterator]() {
    return ds(this, Symbol.iterator, Y);
  },
  concat(...e) {
    return Xe(this).concat(
      ...e.map((t) => O(t) ? Xe(t) : t)
    );
  },
  entries() {
    return ds(this, "entries", (e) => (e[1] = Y(e[1]), e));
  },
  every(e, t) {
    return Pe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Pe(this, "filter", e, t, (s) => s.map(Y), arguments);
  },
  find(e, t) {
    return Pe(this, "find", e, t, Y, arguments);
  },
  findIndex(e, t) {
    return Pe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Pe(this, "findLast", e, t, Y, arguments);
  },
  findLastIndex(e, t) {
    return Pe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Pe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return hs(this, "includes", e);
  },
  indexOf(...e) {
    return hs(this, "indexOf", e);
  },
  join(e) {
    return Xe(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return hs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Pe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return dt(this, "pop");
  },
  push(...e) {
    return dt(this, "push", e);
  },
  reduce(e, ...t) {
    return dn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return dn(this, "reduceRight", e, t);
  },
  shift() {
    return dt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Pe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return dt(this, "splice", e);
  },
  toReversed() {
    return Xe(this).toReversed();
  },
  toSorted(e) {
    return Xe(this).toSorted(e);
  },
  toSpliced(...e) {
    return Xe(this).toSpliced(...e);
  },
  unshift(...e) {
    return dt(this, "unshift", e);
  },
  values() {
    return ds(this, "values", Y);
  }
};
function ds(e, t, s) {
  const n = es(e), r = n[t]();
  return n !== e && !ge(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = s(i.value)), i;
  }), r;
}
const gi = Array.prototype;
function Pe(e, t, s, n, r, i) {
  const o = es(e), l = o !== e && !ge(e), f = o[t];
  if (f !== gi[t]) {
    const p = f.apply(e, i);
    return l ? Y(p) : p;
  }
  let d = s;
  o !== e && (l ? d = function(p, C) {
    return s.call(this, Y(p), C, e);
  } : s.length > 2 && (d = function(p, C) {
    return s.call(this, p, C, e);
  }));
  const a = f.call(o, d, n);
  return l && r ? r(a) : a;
}
function dn(e, t, s, n) {
  const r = es(e);
  let i = s;
  return r !== e && (ge(e) ? s.length > 3 && (i = function(o, l, f) {
    return s.call(this, o, l, f, e);
  }) : i = function(o, l, f) {
    return s.call(this, o, Y(l), f, e);
  }), r[t](i, ...n);
}
function hs(e, t, s) {
  const n = L(e);
  Z(n, "iterate", wt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && ks(s[0]) ? (s[0] = L(s[0]), n[t](...s)) : r;
}
function dt(e, t, s = []) {
  Me(), js();
  const n = L(e)[t].apply(e, s);
  return Hs(), Fe(), n;
}
const _i = /* @__PURE__ */ Fs("__proto__,__v_isRef,__isVue"), sr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(De)
);
function mi(e) {
  De(e) || (e = String(e));
  const t = L(this);
  return Z(t, "has", e), t.hasOwnProperty(e);
}
class nr {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (r ? i ? Ai : lr : i ? or : ir).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = O(t);
    if (!r) {
      let f;
      if (o && (f = pi[s]))
        return f;
      if (s === "hasOwnProperty")
        return mi;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ee(t) ? t : n
    );
    return (De(s) ? sr.has(s) : _i(s)) || (r || Z(t, "get", s), i) ? l : ee(l) ? o && Ls(s) ? l : l.value : q(l) ? r ? cr(l) : Us(l) : l;
  }
}
class rr extends nr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    if (!this._isShallow) {
      const f = Be(i);
      if (!ge(n) && !Be(n) && (i = L(i), n = L(n)), !O(t) && ee(i) && !ee(n))
        return f ? !1 : (i.value = n, !0);
    }
    const o = O(t) && Ls(s) ? Number(s) < t.length : N(t, s), l = Reflect.set(
      t,
      s,
      n,
      ee(t) ? t : r
    );
    return t === L(r) && (o ? We(n, i) && Ie(t, "set", s, n) : Ie(t, "add", s, n)), l;
  }
  deleteProperty(t, s) {
    const n = N(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Ie(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!De(s) || !sr.has(s)) && Z(t, "has", s), n;
  }
  ownKeys(t) {
    return Z(
      t,
      "iterate",
      O(t) ? "length" : Ye
    ), Reflect.ownKeys(t);
  }
}
class bi extends nr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const yi = /* @__PURE__ */ new rr(), vi = /* @__PURE__ */ new bi(), xi = /* @__PURE__ */ new rr(!0);
const ws = (e) => e, Nt = (e) => Reflect.getPrototypeOf(e);
function wi(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = L(r), o = tt(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, d = r[e](...n), a = s ? ws : t ? Bt : Y;
    return !t && Z(
      i,
      "iterate",
      f ? xs : Ye
    ), {
      // iterator protocol
      next() {
        const { value: p, done: C } = d.next();
        return C ? { value: p, done: C } : {
          value: l ? [a(p[0]), a(p[1])] : a(p),
          done: C
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Dt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Si(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = L(i), l = L(r);
      e || (We(r, l) && Z(o, "get", r), Z(o, "get", l));
      const { has: f } = Nt(o), d = t ? ws : e ? Bt : Y;
      if (f.call(o, r))
        return d(i.get(r));
      if (f.call(o, l))
        return d(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Z(L(r), "iterate", Ye), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, o = L(i), l = L(r);
      return e || (We(r, l) && Z(o, "has", r), Z(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, f = L(l), d = t ? ws : e ? Bt : Y;
      return !e && Z(f, "iterate", Ye), l.forEach((a, p) => r.call(i, d(a), d(p), o));
    }
  };
  return z(
    s,
    e ? {
      add: Dt("add"),
      set: Dt("set"),
      delete: Dt("delete"),
      clear: Dt("clear")
    } : {
      add(r) {
        !t && !ge(r) && !Be(r) && (r = L(r));
        const i = L(this);
        return Nt(i).has.call(i, r) || (i.add(r), Ie(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !ge(i) && !Be(i) && (i = L(i));
        const o = L(this), { has: l, get: f } = Nt(o);
        let d = l.call(o, r);
        d || (r = L(r), d = l.call(o, r));
        const a = f.call(o, r);
        return o.set(r, i), d ? We(i, a) && Ie(o, "set", r, i) : Ie(o, "add", r, i), this;
      },
      delete(r) {
        const i = L(this), { has: o, get: l } = Nt(i);
        let f = o.call(i, r);
        f || (r = L(r), f = o.call(i, r)), l && l.call(i, r);
        const d = i.delete(r);
        return f && Ie(i, "delete", r, void 0), d;
      },
      clear() {
        const r = L(this), i = r.size !== 0, o = r.clear();
        return i && Ie(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    s[r] = wi(r, e, t);
  }), s;
}
function Bs(e, t) {
  const s = Si(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    N(s, r) && r in n ? s : n,
    r,
    i
  );
}
const Ci = {
  get: /* @__PURE__ */ Bs(!1, !1)
}, Ti = {
  get: /* @__PURE__ */ Bs(!1, !0)
}, Ei = {
  get: /* @__PURE__ */ Bs(!0, !1)
};
const ir = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), lr = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap();
function Oi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Pi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Oi(ei(e));
}
function Us(e) {
  return Be(e) ? e : Ks(
    e,
    !1,
    yi,
    Ci,
    ir
  );
}
function Ri(e) {
  return Ks(
    e,
    !1,
    xi,
    Ti,
    or
  );
}
function cr(e) {
  return Ks(
    e,
    !0,
    vi,
    Ei,
    lr
  );
}
function Ks(e, t, s, n, r) {
  if (!q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Pi(e);
  if (i === 0)
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = new Proxy(
    e,
    i === 2 ? n : s
  );
  return r.set(e, l), l;
}
function st(e) {
  return Be(e) ? st(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Be(e) {
  return !!(e && e.__v_isReadonly);
}
function ge(e) {
  return !!(e && e.__v_isShallow);
}
function ks(e) {
  return e ? !!e.__v_raw : !1;
}
function L(e) {
  const t = e && e.__v_raw;
  return t ? L(t) : e;
}
function Ii(e) {
  return !N(e, "__v_skip") && Object.isExtensible(e) && bs(e, "__v_skip", !0), e;
}
const Y = (e) => q(e) ? Us(e) : e, Bt = (e) => q(e) ? cr(e) : e;
function ee(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function qe(e) {
  return fr(e, !1);
}
function Mi(e) {
  return fr(e, !0);
}
function fr(e, t) {
  return ee(e) ? e : new Fi(e, t);
}
class Fi {
  constructor(t, s) {
    this.dep = new Vs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : L(t), this._value = s ? t : Y(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || ge(t) || Be(t);
    t = n ? t : L(t), We(t, s) && (this._rawValue = t, this._value = n ? t : Y(t), this.dep.trigger());
  }
}
function ur(e) {
  return ee(e) ? e.value : e;
}
const Ni = {
  get: (e, t, s) => t === "__v_raw" ? e : ur(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return ee(r) && !ee(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function ar(e) {
  return st(e) ? e : new Proxy(e, Ni);
}
class Di {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Vs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = xt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    V !== this)
      return Yn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Qn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Li(e, t, s = !1) {
  let n, r;
  return I(e) ? n = e : (n = e.get, r = e.set), new Di(n, r, s);
}
const Lt = {}, Ut = /* @__PURE__ */ new WeakMap();
let ze;
function $i(e, t = !1, s = ze) {
  if (s) {
    let n = Ut.get(s);
    n || Ut.set(s, n = []), n.push(e);
  }
}
function ji(e, t, s = j) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: f } = s, d = (A) => r ? A : ge(A) || r === !1 || r === 0 ? He(A, 1) : He(A);
  let a, p, C, S, R = !1, M = !1;
  if (ee(e) ? (p = () => e.value, R = ge(e)) : st(e) ? (p = () => d(e), R = !0) : O(e) ? (M = !0, R = e.some((A) => st(A) || ge(A)), p = () => e.map((A) => {
    if (ee(A))
      return A.value;
    if (st(A))
      return d(A);
    if (I(A))
      return f ? f(A, 2) : A();
  })) : I(e) ? t ? p = f ? () => f(e, 2) : e : p = () => {
    if (C) {
      Me();
      try {
        C();
      } finally {
        Fe();
      }
    }
    const A = ze;
    ze = a;
    try {
      return f ? f(e, 3, [S]) : e(S);
    } finally {
      ze = A;
    }
  } : p = me, t && r) {
    const A = p, K = r === !0 ? 1 / 0 : r;
    p = () => He(A(), K);
  }
  const J = ai(), D = () => {
    a.stop(), J && J.active && Ds(J.effects, a);
  };
  if (i && t) {
    const A = t;
    t = (...K) => {
      A(...K), D();
    };
  }
  let B = M ? new Array(e.length).fill(Lt) : Lt;
  const U = (A) => {
    if (!(!(a.flags & 1) || !a.dirty && !A))
      if (t) {
        const K = a.run();
        if (r || R || (M ? K.some((de, he) => We(de, B[he])) : We(K, B))) {
          C && C();
          const de = ze;
          ze = a;
          try {
            const he = [
              K,
              // pass undefined as the old value when it's changed for the first time
              B === Lt ? void 0 : M && B[0] === Lt ? [] : B,
              S
            ];
            B = K, f ? f(t, 3, he) : (
              // @ts-expect-error
              t(...he)
            );
          } finally {
            ze = de;
          }
        }
      } else
        a.run();
  };
  return l && l(U), a = new Jn(p), a.scheduler = o ? () => o(U, !1) : U, S = (A) => $i(A, !1, a), C = a.onStop = () => {
    const A = Ut.get(a);
    if (A) {
      if (f)
        f(A, 4);
      else
        for (const K of A) K();
      Ut.delete(a);
    }
  }, t ? n ? U(!0) : B = a.run() : o ? o(U.bind(null, !0), !0) : a.run(), D.pause = a.pause.bind(a), D.resume = a.resume.bind(a), D.stop = D, D;
}
function He(e, t = 1 / 0, s) {
  if (t <= 0 || !q(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(e)))
    return e;
  if (s.add(e), t--, ee(e))
    He(e.value, t, s);
  else if (O(e))
    for (let n = 0; n < e.length; n++)
      He(e[n], t, s);
  else if (Wn(e) || tt(e))
    e.forEach((n) => {
      He(n, t, s);
    });
  else if (Zt(e)) {
    for (const n in e)
      He(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && He(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function At(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    ts(r, t, s);
  }
}
function Oe(e, t, s, n) {
  if (I(e)) {
    const r = At(e, t, s, n);
    return r && Vn(r) && r.catch((i) => {
      ts(i, t, s);
    }), r;
  }
  if (O(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Oe(e[i], t, s, n));
    return r;
  }
}
function ts(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || j;
  if (t) {
    let l = t.parent;
    const f = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, f, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Me(), At(i, null, 10, [
        e,
        f,
        d
      ]), Fe();
      return;
    }
  }
  Hi(e, s, r, n, o);
}
function Hi(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ne = [];
let Ee = -1;
const nt = [];
let $e = null, Qe = 0;
const dr = /* @__PURE__ */ Promise.resolve();
let Kt = null;
function qs(e) {
  const t = Kt || dr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Wi(e) {
  let t = Ee + 1, s = ne.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = ne[n], i = St(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Gs(e) {
  if (!(e.flags & 1)) {
    const t = St(e), s = ne[ne.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= St(s) ? ne.push(e) : ne.splice(Wi(t), 0, e), e.flags |= 1, hr();
  }
}
function hr() {
  Kt || (Kt = dr.then(_r));
}
function pr(e) {
  O(e) ? nt.push(...e) : $e && e.id === -1 ? $e.splice(Qe + 1, 0, e) : e.flags & 1 || (nt.push(e), e.flags |= 1), hr();
}
function hn(e, t, s = Ee + 1) {
  for (; s < ne.length; s++) {
    const n = ne[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ne.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function gr(e) {
  if (nt.length) {
    const t = [...new Set(nt)].sort(
      (s, n) => St(s) - St(n)
    );
    if (nt.length = 0, $e) {
      $e.push(...t);
      return;
    }
    for ($e = t, Qe = 0; Qe < $e.length; Qe++) {
      const s = $e[Qe];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    $e = null, Qe = 0;
  }
}
const St = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function _r(e) {
  try {
    for (Ee = 0; Ee < ne.length; Ee++) {
      const t = ne[Ee];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), At(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ee < ne.length; Ee++) {
      const t = ne[Ee];
      t && (t.flags &= -2);
    }
    Ee = -1, ne.length = 0, gr(), Kt = null, (ne.length || nt.length) && _r();
  }
}
let ie = null, mr = null;
function kt(e) {
  const t = ie;
  return ie = e, mr = e && e.type.__scopeId || null, t;
}
function Vi(e, t = ie, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && wn(-1);
    const i = kt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      kt(i), n._d && wn(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ge(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[n];
    f && (Me(), Oe(f, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Fe());
  }
}
const Bi = Symbol("_vte"), Ui = (e) => e.__isTeleport;
function Js(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Js(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function lt(e, t) {
  return I(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    z({ name: e.name }, t, { setup: e })
  ) : e;
}
function br(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ss(e) {
  const t = Kr(), s = Mi(null);
  if (t) {
    const r = t.refs === j ? t.refs = {} : t.refs;
    Object.defineProperty(r, e, {
      enumerable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    });
  }
  return s;
}
function bt(e, t, s, n, r = !1) {
  if (O(e)) {
    e.forEach(
      (R, M) => bt(
        R,
        t && (O(t) ? t[M] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (rt(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && bt(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? tn(n.component) : n.el, o = r ? null : i, { i: l, r: f } = e, d = t && t.r, a = l.refs === j ? l.refs = {} : l.refs, p = l.setupState, C = L(p), S = p === j ? () => !1 : (R) => N(C, R);
  if (d != null && d !== f && (G(d) ? (a[d] = null, S(d) && (p[d] = null)) : ee(d) && (d.value = null)), I(f))
    At(f, l, 12, [o, a]);
  else {
    const R = G(f), M = ee(f);
    if (R || M) {
      const J = () => {
        if (e.f) {
          const D = R ? S(f) ? p[f] : a[f] : f.value;
          r ? O(D) && Ds(D, i) : O(D) ? D.includes(i) || D.push(i) : R ? (a[f] = [i], S(f) && (p[f] = a[f])) : (f.value = [i], e.k && (a[e.k] = f.value));
        } else R ? (a[f] = o, S(f) && (p[f] = o)) : M && (f.value = o, e.k && (a[e.k] = o));
      };
      o ? (J.id = -1, ue(J, s)) : J();
    }
  }
}
Qt().requestIdleCallback;
Qt().cancelIdleCallback;
const rt = (e) => !!e.type.__asyncLoader, yr = (e) => e.type.__isKeepAlive;
function Ki(e, t) {
  vr(e, "a", t);
}
function ki(e, t) {
  vr(e, "da", t);
}
function vr(e, t, s = Q) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (ss(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      yr(r.parent.vnode) && qi(n, t, s, r), r = r.parent;
  }
}
function qi(e, t, s, n) {
  const r = ss(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Ys(() => {
    Ds(n[t], r);
  }, s);
}
function ss(e, t, s = Q, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Me();
      const l = Ot(s), f = Oe(t, s, e, o);
      return l(), Fe(), f;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const Le = (e) => (t, s = Q) => {
  (!Tt || e === "sp") && ss(e, (...n) => t(...n), s);
}, Gi = Le("bm"), zs = Le("m"), xr = Le(
  "bu"
), wr = Le("u"), Ji = Le(
  "bum"
), Ys = Le("um"), zi = Le(
  "sp"
), Yi = Le("rtg"), Zi = Le("rtc");
function Xi(e, t = Q) {
  ss("ec", e, t);
}
const Qi = Symbol.for("v-ndc");
function Cs(e, t, s, n) {
  let r;
  const i = s, o = O(e);
  if (o || G(e)) {
    const l = o && st(e);
    let f = !1, d = !1;
    l && (f = !ge(e), d = Be(e), e = es(e)), r = new Array(e.length);
    for (let a = 0, p = e.length; a < p; a++)
      r[a] = t(
        f ? d ? Bt(Y(e[a])) : Y(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (q(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, f) => t(l, f, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let f = 0, d = l.length; f < d; f++) {
        const a = l[f];
        r[f] = t(e[a], a, f, i);
      }
    }
  else
    r = [];
  return r;
}
function eo(e, t, s = {}, n, r) {
  if (ie.ce || ie.parent && rt(ie.parent) && ie.parent.ce)
    return re(), Ze(
      X,
      null,
      [_e("slot", s, n)],
      64
    );
  let i = e[t];
  i && i._c && (i._d = !1), re();
  const o = i && Sr(i(s)), l = s.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, f = Ze(
    X,
    {
      key: (l && !De(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!o && n ? "_fb" : "")
    },
    o || [],
    o && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), f;
}
function Sr(e) {
  return e.some((t) => Qs(t) ? !(t.type === Ne || t.type === X && !Sr(t.children)) : !0) ? e : null;
}
const Ts = (e) => e ? kr(e) ? tn(e) : Ts(e.parent) : null, yt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ts(e.parent),
    $root: (e) => Ts(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Tr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Gs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = qs.bind(e.proxy)),
    $watch: (e) => So.bind(e)
  })
), ps = (e, t) => e !== j && !e.__isScriptSetup && N(e, t), to = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: f } = e;
    let d;
    if (t[0] !== "$") {
      const S = o[t];
      if (S !== void 0)
        switch (S) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return i[t];
        }
      else {
        if (ps(n, t))
          return o[t] = 1, n[t];
        if (r !== j && N(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && N(d, t)
        )
          return o[t] = 3, i[t];
        if (s !== j && N(s, t))
          return o[t] = 4, s[t];
        Es && (o[t] = 0);
      }
    }
    const a = yt[t];
    let p, C;
    if (a)
      return t === "$attrs" && Z(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (p = l.__cssModules) && (p = p[t])
    )
      return p;
    if (s !== j && N(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      C = f.config.globalProperties, N(C, t)
    )
      return C[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return ps(r, t) ? (r[t] = s, !0) : n !== j && N(n, t) ? (n[t] = s, !0) : N(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, propsOptions: i }
  }, o) {
    let l;
    return !!s[o] || e !== j && N(e, o) || ps(t, o) || (l = i[0]) && N(l, o) || N(n, o) || N(yt, o) || N(r.config.globalProperties, o);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : N(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function pn(e) {
  return O(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Es = !0;
function so(e) {
  const t = Tr(e), s = e.proxy, n = e.ctx;
  Es = !1, t.beforeCreate && gn(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: f,
    inject: d,
    // lifecycle
    created: a,
    beforeMount: p,
    mounted: C,
    beforeUpdate: S,
    updated: R,
    activated: M,
    deactivated: J,
    beforeDestroy: D,
    beforeUnmount: B,
    destroyed: U,
    unmounted: A,
    render: K,
    renderTracked: de,
    renderTriggered: he,
    errorCaptured: ve,
    serverPrefetch: Pt,
    // public API
    expose: Ue,
    inheritAttrs: ct,
    // assets
    components: Rt,
    directives: It,
    filters: os
  } = t;
  if (d && no(d, n, null), o)
    for (const k in o) {
      const H = o[k];
      I(H) && (n[k] = H.bind(s));
    }
  if (r) {
    const k = r.call(s, s);
    q(k) && (e.data = Us(k));
  }
  if (Es = !0, i)
    for (const k in i) {
      const H = i[k], Ke = I(H) ? H.bind(s, s) : I(H.get) ? H.get.bind(s, s) : me, Mt = !I(H) && I(H.set) ? H.set.bind(s) : me, ke = Rs({
        get: Ke,
        set: Mt
      });
      Object.defineProperty(n, k, {
        enumerable: !0,
        configurable: !0,
        get: () => ke.value,
        set: (xe) => ke.value = xe
      });
    }
  if (l)
    for (const k in l)
      Cr(l[k], n, s, k);
  if (f) {
    const k = I(f) ? f.call(s) : f;
    Reflect.ownKeys(k).forEach((H) => {
      fo(H, k[H]);
    });
  }
  a && gn(a, e, "c");
  function te(k, H) {
    O(H) ? H.forEach((Ke) => k(Ke.bind(s))) : H && k(H.bind(s));
  }
  if (te(Gi, p), te(zs, C), te(xr, S), te(wr, R), te(Ki, M), te(ki, J), te(Xi, ve), te(Zi, de), te(Yi, he), te(Ji, B), te(Ys, A), te(zi, Pt), O(Ue))
    if (Ue.length) {
      const k = e.exposed || (e.exposed = {});
      Ue.forEach((H) => {
        Object.defineProperty(k, H, {
          get: () => s[H],
          set: (Ke) => s[H] = Ke
        });
      });
    } else e.exposed || (e.exposed = {});
  K && e.render === me && (e.render = K), ct != null && (e.inheritAttrs = ct), Rt && (e.components = Rt), It && (e.directives = It), Pt && br(e);
}
function no(e, t, s = me) {
  O(e) && (e = As(e));
  for (const n in e) {
    const r = e[n];
    let i;
    q(r) ? "default" in r ? i = $t(
      r.from || n,
      r.default,
      !0
    ) : i = $t(r.from || n) : i = $t(r), ee(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function gn(e, t, s) {
  Oe(
    O(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Cr(e, t, s, n) {
  let r = n.includes(".") ? jr(s, n) : () => s[n];
  if (G(e)) {
    const i = t[e];
    I(i) && jt(r, i);
  } else if (I(e))
    jt(r, e.bind(s));
  else if (q(e))
    if (O(e))
      e.forEach((i) => Cr(i, t, s, n));
    else {
      const i = I(e.handler) ? e.handler.bind(s) : t[e.handler];
      I(i) && jt(r, i, e);
    }
}
function Tr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !r.length && !s && !n ? f = t : (f = {}, r.length && r.forEach(
    (d) => qt(f, d, o, !0)
  ), qt(f, t, o)), q(t) && i.set(t, f), f;
}
function qt(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && qt(e, i, s, !0), r && r.forEach(
    (o) => qt(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = ro[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const ro = {
  data: _n,
  props: mn,
  emits: mn,
  // objects
  methods: pt,
  computed: pt,
  // lifecycle
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  // assets
  components: pt,
  directives: pt,
  // watch
  watch: oo,
  // provide / inject
  provide: _n,
  inject: io
};
function _n(e, t) {
  return t ? e ? function() {
    return z(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function io(e, t) {
  return pt(As(e), As(t));
}
function As(e) {
  if (O(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function pt(e, t) {
  return e ? z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function mn(e, t) {
  return e ? O(e) && O(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : z(
    /* @__PURE__ */ Object.create(null),
    pn(e),
    pn(t ?? {})
  ) : t;
}
function oo(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = z(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = se(e[n], t[n]);
  return s;
}
function Er() {
  return {
    app: null,
    config: {
      isNativeTag: Xr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let lo = 0;
function co(e, t) {
  return function(n, r = null) {
    I(n) || (n = z({}, n)), r != null && !q(r) && (r = null);
    const i = Er(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const d = i.app = {
      _uid: lo++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: ko,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && I(a.install) ? (o.add(a), a.install(d, ...p)) : I(a) && (o.add(a), a(d, ...p))), d;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), d;
      },
      component(a, p) {
        return p ? (i.components[a] = p, d) : i.components[a];
      },
      directive(a, p) {
        return p ? (i.directives[a] = p, d) : i.directives[a];
      },
      mount(a, p, C) {
        if (!f) {
          const S = d._ceVNode || _e(n, r);
          return S.appContext = i, C === !0 ? C = "svg" : C === !1 && (C = void 0), e(S, a, C), f = !0, d._container = a, a.__vue_app__ = d, tn(S.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        f && (Oe(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(a, p) {
        return i.provides[a] = p, d;
      },
      runWithContext(a) {
        const p = it;
        it = d;
        try {
          return a();
        } finally {
          it = p;
        }
      }
    };
    return d;
  };
}
let it = null;
function fo(e, t) {
  if (Q) {
    let s = Q.provides;
    const n = Q.parent && Q.parent.provides;
    n === s && (s = Q.provides = Object.create(n)), s[e] = t;
  }
}
function $t(e, t, s = !1) {
  const n = Q || ie;
  if (n || it) {
    let r = it ? it._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && I(t) ? t.call(n && n.proxy) : t;
  }
}
const Ar = {}, Or = () => Object.create(Ar), Pr = (e) => Object.getPrototypeOf(e) === Ar;
function uo(e, t, s, n = !1) {
  const r = {}, i = Or();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Rr(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : Ri(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function ao(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = L(r), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let C = a[p];
        if (ns(e.emitsOptions, C))
          continue;
        const S = t[C];
        if (f)
          if (N(i, C))
            S !== i[C] && (i[C] = S, d = !0);
          else {
            const R = be(C);
            r[R] = Os(
              f,
              l,
              R,
              S,
              e,
              !1
            );
          }
        else
          S !== i[C] && (i[C] = S, d = !0);
      }
    }
  } else {
    Rr(e, t, r, i) && (d = !0);
    let a;
    for (const p in l)
      (!t || // for camelCase
      !N(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = pe(p)) === p || !N(t, a))) && (f ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[p] = Os(
        f,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete r[p]);
    if (i !== l)
      for (const p in i)
        (!t || !N(t, p)) && (delete i[p], d = !0);
  }
  d && Ie(e.attrs, "set", "");
}
function Rr(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (gt(f))
        continue;
      const d = t[f];
      let a;
      r && N(r, a = be(f)) ? !i || !i.includes(a) ? s[a] = d : (l || (l = {}))[a] = d : ns(e.emitsOptions, f) || (!(f in n) || d !== n[f]) && (n[f] = d, o = !0);
    }
  if (i) {
    const f = L(s), d = l || j;
    for (let a = 0; a < i.length; a++) {
      const p = i[a];
      s[p] = Os(
        r,
        f,
        p,
        d[p],
        e,
        !N(d, p)
      );
    }
  }
  return o;
}
function Os(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const l = N(o, "default");
    if (l && n === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && I(f)) {
        const { propsDefaults: d } = r;
        if (s in d)
          n = d[s];
        else {
          const a = Ot(r);
          n = d[s] = f.call(
            null,
            t
          ), a();
        }
      } else
        n = f;
      r.ce && r.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === pe(s)) && (n = !0));
  }
  return n;
}
const ho = /* @__PURE__ */ new WeakMap();
function Ir(e, t, s = !1) {
  const n = s ? ho : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!I(e)) {
    const a = (p) => {
      f = !0;
      const [C, S] = Ir(p, t, !0);
      z(o, C), S && l.push(...S);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f)
    return q(e) && n.set(e, et), et;
  if (O(i))
    for (let a = 0; a < i.length; a++) {
      const p = be(i[a]);
      bn(p) && (o[p] = j);
    }
  else if (i)
    for (const a in i) {
      const p = be(a);
      if (bn(p)) {
        const C = i[a], S = o[p] = O(C) || I(C) ? { type: C } : z({}, C), R = S.type;
        let M = !1, J = !0;
        if (O(R))
          for (let D = 0; D < R.length; ++D) {
            const B = R[D], U = I(B) && B.name;
            if (U === "Boolean") {
              M = !0;
              break;
            } else U === "String" && (J = !1);
          }
        else
          M = I(R) && R.name === "Boolean";
        S[
          0
          /* shouldCast */
        ] = M, S[
          1
          /* shouldCastTrue */
        ] = J, (M || N(S, "default")) && l.push(p);
      }
    }
  const d = [o, l];
  return q(e) && n.set(e, d), d;
}
function bn(e) {
  return e[0] !== "$" && !gt(e);
}
const Zs = (e) => e[0] === "_" || e === "$stable", Xs = (e) => O(e) ? e.map(Ae) : [Ae(e)], po = (e, t, s) => {
  if (t._n)
    return t;
  const n = Vi((...r) => Xs(t(...r)), s);
  return n._c = !1, n;
}, Mr = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (Zs(r)) continue;
    const i = e[r];
    if (I(i))
      t[r] = po(r, i, n);
    else if (i != null) {
      const o = Xs(i);
      t[r] = () => o;
    }
  }
}, Fr = (e, t) => {
  const s = Xs(t);
  e.slots.default = () => s;
}, Nr = (e, t, s) => {
  for (const n in t)
    (s || !Zs(n)) && (e[n] = t[n]);
}, go = (e, t, s) => {
  const n = e.slots = Or();
  if (e.vnode.shapeFlag & 32) {
    const r = t.__;
    r && bs(n, "__", r, !0);
    const i = t._;
    i ? (Nr(n, t, s), s && bs(n, "_", i, !0)) : Mr(t, n);
  } else t && Fr(e, t);
}, _o = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = j;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? i = !1 : Nr(r, t, s) : (i = !t.$stable, Mr(t, r)), o = t;
  } else t && (Fr(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Zs(l) && o[l] == null && delete r[l];
}, ue = Ro;
function mo(e) {
  return bo(e);
}
function bo(e, t) {
  const s = Qt();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: f,
    setText: d,
    setElementText: a,
    parentNode: p,
    nextSibling: C,
    setScopeId: S = me,
    insertStaticContent: R
  } = e, M = (c, u, h, m = null, g = null, _ = null, x = void 0, v = null, y = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !ht(c, u) && (m = Ft(c), xe(c, g, _, !0), c = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: b, ref: E, shapeFlag: w } = u;
    switch (b) {
      case rs:
        J(c, u, h, m);
        break;
      case Ne:
        D(c, u, h, m);
        break;
      case Ht:
        c == null && B(u, h, m, x);
        break;
      case X:
        Rt(
          c,
          u,
          h,
          m,
          g,
          _,
          x,
          v,
          y
        );
        break;
      default:
        w & 1 ? K(
          c,
          u,
          h,
          m,
          g,
          _,
          x,
          v,
          y
        ) : w & 6 ? It(
          c,
          u,
          h,
          m,
          g,
          _,
          x,
          v,
          y
        ) : (w & 64 || w & 128) && b.process(
          c,
          u,
          h,
          m,
          g,
          _,
          x,
          v,
          y,
          ut
        );
    }
    E != null && g ? bt(E, c && c.ref, _, u || c, !u) : E == null && c && c.ref != null && bt(c.ref, null, _, c, !0);
  }, J = (c, u, h, m) => {
    if (c == null)
      n(
        u.el = l(u.children),
        h,
        m
      );
    else {
      const g = u.el = c.el;
      u.children !== c.children && d(g, u.children);
    }
  }, D = (c, u, h, m) => {
    c == null ? n(
      u.el = f(u.children || ""),
      h,
      m
    ) : u.el = c.el;
  }, B = (c, u, h, m) => {
    [c.el, c.anchor] = R(
      c.children,
      u,
      h,
      m,
      c.el,
      c.anchor
    );
  }, U = ({ el: c, anchor: u }, h, m) => {
    let g;
    for (; c && c !== u; )
      g = C(c), n(c, h, m), c = g;
    n(u, h, m);
  }, A = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = C(c), r(c), c = h;
    r(u);
  }, K = (c, u, h, m, g, _, x, v, y) => {
    u.type === "svg" ? x = "svg" : u.type === "math" && (x = "mathml"), c == null ? de(
      u,
      h,
      m,
      g,
      _,
      x,
      v,
      y
    ) : Pt(
      c,
      u,
      g,
      _,
      x,
      v,
      y
    );
  }, de = (c, u, h, m, g, _, x, v) => {
    let y, b;
    const { props: E, shapeFlag: w, transition: T, dirs: P } = c;
    if (y = c.el = o(
      c.type,
      _,
      E && E.is,
      E
    ), w & 8 ? a(y, c.children) : w & 16 && ve(
      c.children,
      y,
      null,
      m,
      g,
      gs(c, _),
      x,
      v
    ), P && Ge(c, null, m, "created"), he(y, c, c.scopeId, x, m), E) {
      for (const W in E)
        W !== "value" && !gt(W) && i(y, W, null, E[W], _, m);
      "value" in E && i(y, "value", null, E.value, _), (b = E.onVnodeBeforeMount) && Te(b, m, c);
    }
    P && Ge(c, null, m, "beforeMount");
    const F = yo(g, T);
    F && T.beforeEnter(y), n(y, u, h), ((b = E && E.onVnodeMounted) || F || P) && ue(() => {
      b && Te(b, m, c), F && T.enter(y), P && Ge(c, null, m, "mounted");
    }, g);
  }, he = (c, u, h, m, g) => {
    if (h && S(c, h), m)
      for (let _ = 0; _ < m.length; _++)
        S(c, m[_]);
    if (g) {
      let _ = g.subTree;
      if (u === _ || Wr(_.type) && (_.ssContent === u || _.ssFallback === u)) {
        const x = g.vnode;
        he(
          c,
          x,
          x.scopeId,
          x.slotScopeIds,
          g.parent
        );
      }
    }
  }, ve = (c, u, h, m, g, _, x, v, y = 0) => {
    for (let b = y; b < c.length; b++) {
      const E = c[b] = v ? je(c[b]) : Ae(c[b]);
      M(
        null,
        E,
        u,
        h,
        m,
        g,
        _,
        x,
        v
      );
    }
  }, Pt = (c, u, h, m, g, _, x) => {
    const v = u.el = c.el;
    let { patchFlag: y, dynamicChildren: b, dirs: E } = u;
    y |= c.patchFlag & 16;
    const w = c.props || j, T = u.props || j;
    let P;
    if (h && Je(h, !1), (P = T.onVnodeBeforeUpdate) && Te(P, h, u, c), E && Ge(u, c, h, "beforeUpdate"), h && Je(h, !0), (w.innerHTML && T.innerHTML == null || w.textContent && T.textContent == null) && a(v, ""), b ? Ue(
      c.dynamicChildren,
      b,
      v,
      h,
      m,
      gs(u, g),
      _
    ) : x || H(
      c,
      u,
      v,
      null,
      h,
      m,
      gs(u, g),
      _,
      !1
    ), y > 0) {
      if (y & 16)
        ct(v, w, T, h, g);
      else if (y & 2 && w.class !== T.class && i(v, "class", null, T.class, g), y & 4 && i(v, "style", w.style, T.style, g), y & 8) {
        const F = u.dynamicProps;
        for (let W = 0; W < F.length; W++) {
          const $ = F[W], oe = w[$], le = T[$];
          (le !== oe || $ === "value") && i(v, $, oe, le, g, h);
        }
      }
      y & 1 && c.children !== u.children && a(v, u.children);
    } else !x && b == null && ct(v, w, T, h, g);
    ((P = T.onVnodeUpdated) || E) && ue(() => {
      P && Te(P, h, u, c), E && Ge(u, c, h, "updated");
    }, m);
  }, Ue = (c, u, h, m, g, _, x) => {
    for (let v = 0; v < u.length; v++) {
      const y = c[v], b = u[v], E = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === X || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ht(y, b) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 198) ? p(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      M(
        y,
        b,
        E,
        null,
        m,
        g,
        _,
        x,
        !0
      );
    }
  }, ct = (c, u, h, m, g) => {
    if (u !== h) {
      if (u !== j)
        for (const _ in u)
          !gt(_) && !(_ in h) && i(
            c,
            _,
            u[_],
            null,
            g,
            m
          );
      for (const _ in h) {
        if (gt(_)) continue;
        const x = h[_], v = u[_];
        x !== v && _ !== "value" && i(c, _, v, x, g, m);
      }
      "value" in h && i(c, "value", u.value, h.value, g);
    }
  }, Rt = (c, u, h, m, g, _, x, v, y) => {
    const b = u.el = c ? c.el : l(""), E = u.anchor = c ? c.anchor : l("");
    let { patchFlag: w, dynamicChildren: T, slotScopeIds: P } = u;
    P && (v = v ? v.concat(P) : P), c == null ? (n(b, h, m), n(E, h, m), ve(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      E,
      g,
      _,
      x,
      v,
      y
    )) : w > 0 && w & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (Ue(
      c.dynamicChildren,
      T,
      h,
      g,
      _,
      x,
      v
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || g && u === g.subTree) && Dr(
      c,
      u,
      !0
      /* shallow */
    )) : H(
      c,
      u,
      h,
      E,
      g,
      _,
      x,
      v,
      y
    );
  }, It = (c, u, h, m, g, _, x, v, y) => {
    u.slotScopeIds = v, c == null ? u.shapeFlag & 512 ? g.ctx.activate(
      u,
      h,
      m,
      x,
      y
    ) : os(
      u,
      h,
      m,
      g,
      _,
      x,
      y
    ) : nn(c, u, y);
  }, os = (c, u, h, m, g, _, x) => {
    const v = c.component = Ho(
      c,
      m,
      g
    );
    if (yr(c) && (v.ctx.renderer = ut), Wo(v, !1, x), v.asyncDep) {
      if (g && g.registerDep(v, te, x), !c.el) {
        const y = v.subTree = _e(Ne);
        D(null, y, u, h);
      }
    } else
      te(
        v,
        c,
        u,
        h,
        g,
        _,
        x
      );
  }, nn = (c, u, h) => {
    const m = u.component = c.component;
    if (Oo(c, u, h))
      if (m.asyncDep && !m.asyncResolved) {
        k(m, u, h);
        return;
      } else
        m.next = u, m.update();
    else
      u.el = c.el, m.vnode = u;
  }, te = (c, u, h, m, g, _, x) => {
    const v = () => {
      if (c.isMounted) {
        let { next: w, bu: T, u: P, parent: F, vnode: W } = c;
        {
          const Se = Lr(c);
          if (Se) {
            w && (w.el = W.el, k(c, w, x)), Se.asyncDep.then(() => {
              c.isUnmounted || v();
            });
            return;
          }
        }
        let $ = w, oe;
        Je(c, !1), w ? (w.el = W.el, k(c, w, x)) : w = W, T && fs(T), (oe = w.props && w.props.onVnodeBeforeUpdate) && Te(oe, F, w, W), Je(c, !0);
        const le = vn(c), we = c.subTree;
        c.subTree = le, M(
          we,
          le,
          // parent may have changed if it's in a teleport
          p(we.el),
          // anchor may have changed if it's in a fragment
          Ft(we),
          c,
          g,
          _
        ), w.el = le.el, $ === null && Po(c, le.el), P && ue(P, g), (oe = w.props && w.props.onVnodeUpdated) && ue(
          () => Te(oe, F, w, W),
          g
        );
      } else {
        let w;
        const { el: T, props: P } = u, { bm: F, m: W, parent: $, root: oe, type: le } = c, we = rt(u);
        Je(c, !1), F && fs(F), !we && (w = P && P.onVnodeBeforeMount) && Te(w, $, u), Je(c, !0);
        {
          oe.ce && // @ts-expect-error _def is private
          oe.ce._def.shadowRoot !== !1 && oe.ce._injectChildStyle(le);
          const Se = c.subTree = vn(c);
          M(
            null,
            Se,
            h,
            m,
            c,
            g,
            _
          ), u.el = Se.el;
        }
        if (W && ue(W, g), !we && (w = P && P.onVnodeMounted)) {
          const Se = u;
          ue(
            () => Te(w, $, Se),
            g
          );
        }
        (u.shapeFlag & 256 || $ && rt($.vnode) && $.vnode.shapeFlag & 256) && c.a && ue(c.a, g), c.isMounted = !0, u = h = m = null;
      }
    };
    c.scope.on();
    const y = c.effect = new Jn(v);
    c.scope.off();
    const b = c.update = y.run.bind(y), E = c.job = y.runIfDirty.bind(y);
    E.i = c, E.id = c.uid, y.scheduler = () => Gs(E), Je(c, !0), b();
  }, k = (c, u, h) => {
    u.component = c;
    const m = c.vnode.props;
    c.vnode = u, c.next = null, ao(c, u.props, m, h), _o(c, u.children, h), Me(), hn(c), Fe();
  }, H = (c, u, h, m, g, _, x, v, y = !1) => {
    const b = c && c.children, E = c ? c.shapeFlag : 0, w = u.children, { patchFlag: T, shapeFlag: P } = u;
    if (T > 0) {
      if (T & 128) {
        Mt(
          b,
          w,
          h,
          m,
          g,
          _,
          x,
          v,
          y
        );
        return;
      } else if (T & 256) {
        Ke(
          b,
          w,
          h,
          m,
          g,
          _,
          x,
          v,
          y
        );
        return;
      }
    }
    P & 8 ? (E & 16 && ft(b, g, _), w !== b && a(h, w)) : E & 16 ? P & 16 ? Mt(
      b,
      w,
      h,
      m,
      g,
      _,
      x,
      v,
      y
    ) : ft(b, g, _, !0) : (E & 8 && a(h, ""), P & 16 && ve(
      w,
      h,
      m,
      g,
      _,
      x,
      v,
      y
    ));
  }, Ke = (c, u, h, m, g, _, x, v, y) => {
    c = c || et, u = u || et;
    const b = c.length, E = u.length, w = Math.min(b, E);
    let T;
    for (T = 0; T < w; T++) {
      const P = u[T] = y ? je(u[T]) : Ae(u[T]);
      M(
        c[T],
        P,
        h,
        null,
        g,
        _,
        x,
        v,
        y
      );
    }
    b > E ? ft(
      c,
      g,
      _,
      !0,
      !1,
      w
    ) : ve(
      u,
      h,
      m,
      g,
      _,
      x,
      v,
      y,
      w
    );
  }, Mt = (c, u, h, m, g, _, x, v, y) => {
    let b = 0;
    const E = u.length;
    let w = c.length - 1, T = E - 1;
    for (; b <= w && b <= T; ) {
      const P = c[b], F = u[b] = y ? je(u[b]) : Ae(u[b]);
      if (ht(P, F))
        M(
          P,
          F,
          h,
          null,
          g,
          _,
          x,
          v,
          y
        );
      else
        break;
      b++;
    }
    for (; b <= w && b <= T; ) {
      const P = c[w], F = u[T] = y ? je(u[T]) : Ae(u[T]);
      if (ht(P, F))
        M(
          P,
          F,
          h,
          null,
          g,
          _,
          x,
          v,
          y
        );
      else
        break;
      w--, T--;
    }
    if (b > w) {
      if (b <= T) {
        const P = T + 1, F = P < E ? u[P].el : m;
        for (; b <= T; )
          M(
            null,
            u[b] = y ? je(u[b]) : Ae(u[b]),
            h,
            F,
            g,
            _,
            x,
            v,
            y
          ), b++;
      }
    } else if (b > T)
      for (; b <= w; )
        xe(c[b], g, _, !0), b++;
    else {
      const P = b, F = b, W = /* @__PURE__ */ new Map();
      for (b = F; b <= T; b++) {
        const fe = u[b] = y ? je(u[b]) : Ae(u[b]);
        fe.key != null && W.set(fe.key, b);
      }
      let $, oe = 0;
      const le = T - F + 1;
      let we = !1, Se = 0;
      const at = new Array(le);
      for (b = 0; b < le; b++) at[b] = 0;
      for (b = P; b <= w; b++) {
        const fe = c[b];
        if (oe >= le) {
          xe(fe, g, _, !0);
          continue;
        }
        let Ce;
        if (fe.key != null)
          Ce = W.get(fe.key);
        else
          for ($ = F; $ <= T; $++)
            if (at[$ - F] === 0 && ht(fe, u[$])) {
              Ce = $;
              break;
            }
        Ce === void 0 ? xe(fe, g, _, !0) : (at[Ce - F] = b + 1, Ce >= Se ? Se = Ce : we = !0, M(
          fe,
          u[Ce],
          h,
          null,
          g,
          _,
          x,
          v,
          y
        ), oe++);
      }
      const ln = we ? vo(at) : et;
      for ($ = ln.length - 1, b = le - 1; b >= 0; b--) {
        const fe = F + b, Ce = u[fe], cn = fe + 1 < E ? u[fe + 1].el : m;
        at[b] === 0 ? M(
          null,
          Ce,
          h,
          cn,
          g,
          _,
          x,
          v,
          y
        ) : we && ($ < 0 || b !== ln[$] ? ke(Ce, h, cn, 2) : $--);
      }
    }
  }, ke = (c, u, h, m, g = null) => {
    const { el: _, type: x, transition: v, children: y, shapeFlag: b } = c;
    if (b & 6) {
      ke(c.component.subTree, u, h, m);
      return;
    }
    if (b & 128) {
      c.suspense.move(u, h, m);
      return;
    }
    if (b & 64) {
      x.move(c, u, h, ut);
      return;
    }
    if (x === X) {
      n(_, u, h);
      for (let w = 0; w < y.length; w++)
        ke(y[w], u, h, m);
      n(c.anchor, u, h);
      return;
    }
    if (x === Ht) {
      U(c, u, h);
      return;
    }
    if (m !== 2 && b & 1 && v)
      if (m === 0)
        v.beforeEnter(_), n(_, u, h), ue(() => v.enter(_), g);
      else {
        const { leave: w, delayLeave: T, afterLeave: P } = v, F = () => {
          c.ctx.isUnmounted ? r(_) : n(_, u, h);
        }, W = () => {
          w(_, () => {
            F(), P && P();
          });
        };
        T ? T(_, F, W) : W();
      }
    else
      n(_, u, h);
  }, xe = (c, u, h, m = !1, g = !1) => {
    const {
      type: _,
      props: x,
      ref: v,
      children: y,
      dynamicChildren: b,
      shapeFlag: E,
      patchFlag: w,
      dirs: T,
      cacheIndex: P
    } = c;
    if (w === -2 && (g = !1), v != null && (Me(), bt(v, null, h, c, !0), Fe()), P != null && (u.renderCache[P] = void 0), E & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const F = E & 1 && T, W = !rt(c);
    let $;
    if (W && ($ = x && x.onVnodeBeforeUnmount) && Te($, u, c), E & 6)
      Zr(c.component, h, m);
    else {
      if (E & 128) {
        c.suspense.unmount(h, m);
        return;
      }
      F && Ge(c, null, u, "beforeUnmount"), E & 64 ? c.type.remove(
        c,
        u,
        h,
        ut,
        m
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== X || w > 0 && w & 64) ? ft(
        b,
        u,
        h,
        !1,
        !0
      ) : (_ === X && w & 384 || !g && E & 16) && ft(y, u, h), m && rn(c);
    }
    (W && ($ = x && x.onVnodeUnmounted) || F) && ue(() => {
      $ && Te($, u, c), F && Ge(c, null, u, "unmounted");
    }, h);
  }, rn = (c) => {
    const { type: u, el: h, anchor: m, transition: g } = c;
    if (u === X) {
      Yr(h, m);
      return;
    }
    if (u === Ht) {
      A(c);
      return;
    }
    const _ = () => {
      r(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (c.shapeFlag & 1 && g && !g.persisted) {
      const { leave: x, delayLeave: v } = g, y = () => x(h, _);
      v ? v(c.el, _, y) : y();
    } else
      _();
  }, Yr = (c, u) => {
    let h;
    for (; c !== u; )
      h = C(c), r(c), c = h;
    r(u);
  }, Zr = (c, u, h) => {
    const {
      bum: m,
      scope: g,
      job: _,
      subTree: x,
      um: v,
      m: y,
      a: b,
      parent: E,
      slots: { __: w }
    } = c;
    yn(y), yn(b), m && fs(m), E && O(w) && w.forEach((T) => {
      E.renderCache[T] = void 0;
    }), g.stop(), _ && (_.flags |= 8, xe(x, c, u, h)), v && ue(v, u), ue(() => {
      c.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve());
  }, ft = (c, u, h, m = !1, g = !1, _ = 0) => {
    for (let x = _; x < c.length; x++)
      xe(c[x], u, h, m, g);
  }, Ft = (c) => {
    if (c.shapeFlag & 6)
      return Ft(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = C(c.anchor || c.el), h = u && u[Bi];
    return h ? C(h) : u;
  };
  let ls = !1;
  const on = (c, u, h) => {
    c == null ? u._vnode && xe(u._vnode, null, null, !0) : M(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = c, ls || (ls = !0, hn(), gr(), ls = !1);
  }, ut = {
    p: M,
    um: xe,
    m: ke,
    r: rn,
    mt: os,
    mc: ve,
    pc: H,
    pbc: Ue,
    n: Ft,
    o: e
  };
  return {
    render: on,
    hydrate: void 0,
    createApp: co(on)
  };
}
function gs({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Je({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function yo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Dr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (O(n) && O(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = je(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && Dr(o, l)), l.type === rs && (l.el = o.el), l.type === Ne && !l.el && (l.el = o.el);
    }
}
function vo(e) {
  const t = e.slice(), s = [0];
  let n, r, i, o, l;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const d = e[n];
    if (d !== 0) {
      if (r = s[s.length - 1], e[r] < d) {
        t[n] = r, s.push(n);
        continue;
      }
      for (i = 0, o = s.length - 1; i < o; )
        l = i + o >> 1, e[s[l]] < d ? i = l + 1 : o = l;
      d < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0; )
    s[i] = o, o = t[o];
  return s;
}
function Lr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Lr(t);
}
function yn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const xo = Symbol.for("v-scx"), wo = () => $t(xo);
function jt(e, t, s) {
  return $r(e, t, s);
}
function $r(e, t, s = j) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = z({}, s), f = t && n || !t && i !== "post";
  let d;
  if (Tt) {
    if (i === "sync") {
      const S = wo();
      d = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!f) {
      const S = () => {
      };
      return S.stop = me, S.resume = me, S.pause = me, S;
    }
  }
  const a = Q;
  l.call = (S, R, M) => Oe(S, a, R, M);
  let p = !1;
  i === "post" ? l.scheduler = (S) => {
    ue(S, a && a.suspense);
  } : i !== "sync" && (p = !0, l.scheduler = (S, R) => {
    R ? S() : Gs(S);
  }), l.augmentJob = (S) => {
    t && (S.flags |= 4), p && (S.flags |= 2, a && (S.id = a.uid, S.i = a));
  };
  const C = ji(e, t, l);
  return Tt && (d ? d.push(C) : f && C()), C;
}
function So(e, t, s) {
  const n = this.proxy, r = G(e) ? e.includes(".") ? jr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  I(t) ? i = t : (i = t.handler, s = t);
  const o = Ot(this), l = $r(r, i.bind(n), s);
  return o(), l;
}
function jr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const Co = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${be(t)}Modifiers`] || e[`${pe(t)}Modifiers`];
function To(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || j;
  let r = s;
  const i = t.startsWith("update:"), o = i && Co(n, t.slice(7));
  o && (o.trim && (r = s.map((a) => G(a) ? a.trim() : a)), o.number && (r = s.map(ni)));
  let l, f = n[l = cs(t)] || // also try camelCase event handler (#2249)
  n[l = cs(be(t))];
  !f && i && (f = n[l = cs(pe(t))]), f && Oe(
    f,
    e,
    6,
    r
  );
  const d = n[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Oe(
      d,
      e,
      6,
      r
    );
  }
}
function Hr(e, t, s = !1) {
  const n = t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!I(e)) {
    const f = (d) => {
      const a = Hr(d, t, !0);
      a && (l = !0, z(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (q(e) && n.set(e, null), null) : (O(i) ? i.forEach((f) => o[f] = null) : z(o, i), q(e) && n.set(e, o), o);
}
function ns(e, t) {
  return !e || !zt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), N(e, t[0].toLowerCase() + t.slice(1)) || N(e, pe(t)) || N(e, t));
}
function vn(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: f,
    render: d,
    renderCache: a,
    props: p,
    data: C,
    setupState: S,
    ctx: R,
    inheritAttrs: M
  } = e, J = kt(e);
  let D, B;
  try {
    if (s.shapeFlag & 4) {
      const A = r || n, K = A;
      D = Ae(
        d.call(
          K,
          A,
          a,
          p,
          S,
          C,
          R
        )
      ), B = l;
    } else {
      const A = t;
      D = Ae(
        A.length > 1 ? A(
          p,
          { attrs: l, slots: o, emit: f }
        ) : A(
          p,
          null
        )
      ), B = t.props ? l : Eo(l);
    }
  } catch (A) {
    vt.length = 0, ts(A, e, 1), D = _e(Ne);
  }
  let U = D;
  if (B && M !== !1) {
    const A = Object.keys(B), { shapeFlag: K } = U;
    A.length && K & 7 && (i && A.some(Ns) && (B = Ao(
      B,
      i
    )), U = ot(U, B, !1, !0));
  }
  return s.dirs && (U = ot(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(s.dirs) : s.dirs), s.transition && Js(U, s.transition), D = U, kt(J), D;
}
const Eo = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || zt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Ao = (e, t) => {
  const s = {};
  for (const n in e)
    (!Ns(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Oo(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: o, children: l, patchFlag: f } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? xn(n, o, d) : !!o;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const C = a[p];
        if (o[C] !== n[C] && !ns(d, C))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? xn(n, o, d) : !0 : !!o;
  return !1;
}
function xn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (t[i] !== e[i] && !ns(s, i))
      return !0;
  }
  return !1;
}
function Po({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Wr = (e) => e.__isSuspense;
function Ro(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : pr(e);
}
const X = Symbol.for("v-fgt"), rs = Symbol.for("v-txt"), Ne = Symbol.for("v-cmt"), Ht = Symbol.for("v-stc"), vt = [];
let ae = null;
function re(e = !1) {
  vt.push(ae = e ? null : []);
}
function Io() {
  vt.pop(), ae = vt[vt.length - 1] || null;
}
let Ct = 1;
function wn(e, t = !1) {
  Ct += e, e < 0 && ae && t && (ae.hasOnce = !0);
}
function Vr(e) {
  return e.dynamicChildren = Ct > 0 ? ae || et : null, Io(), Ct > 0 && ae && ae.push(e), e;
}
function Ve(e, t, s, n, r, i) {
  return Vr(
    Ur(
      e,
      t,
      s,
      n,
      r,
      i,
      !0
    )
  );
}
function Ze(e, t, s, n, r) {
  return Vr(
    _e(
      e,
      t,
      s,
      n,
      r,
      !0
    )
  );
}
function Qs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ht(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Br = ({ key: e }) => e ?? null, Wt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? G(e) || ee(e) || I(e) ? { i: ie, r: e, k: t, f: !!s } : e : null);
function Ur(e, t = null, s = null, n = 0, r = null, i = e === X ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Br(t),
    ref: t && Wt(t),
    scopeId: mr,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ie
  };
  return l ? (en(f, s), i & 128 && e.normalize(f)) : s && (f.shapeFlag |= G(s) ? 8 : 16), Ct > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ae && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ae.push(f), f;
}
const _e = Mo;
function Mo(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === Qi) && (e = Ne), Qs(e)) {
    const l = ot(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && en(l, s), Ct > 0 && !i && ae && (l.shapeFlag & 6 ? ae[ae.indexOf(e)] = l : ae.push(l)), l.patchFlag = -2, l;
  }
  if (Ko(e) && (e = e.__vccOpts), t) {
    t = Fo(t);
    let { class: l, style: f } = t;
    l && !G(l) && (t.class = $s(l)), q(f) && (ks(f) && !O(f) && (f = z({}, f)), t.style = Et(f));
  }
  const o = G(e) ? 1 : Wr(e) ? 128 : Ui(e) ? 64 : q(e) ? 4 : I(e) ? 2 : 0;
  return Ur(
    e,
    t,
    s,
    n,
    r,
    o,
    i,
    !0
  );
}
function Fo(e) {
  return e ? ks(e) || Pr(e) ? z({}, e) : e : null;
}
function ot(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e, d = t ? Lo(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Br(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? O(i) ? i.concat(Wt(t)) : [i, Wt(t)] : Wt(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== X ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ot(e.ssContent),
    ssFallback: e.ssFallback && ot(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && Js(
    a,
    f.clone(a)
  ), a;
}
function No(e = " ", t = 0) {
  return _e(rs, null, e, t);
}
function Do(e = "", t = !1) {
  return t ? (re(), Ze(Ne, null, e)) : _e(Ne, null, e);
}
function Ae(e) {
  return e == null || typeof e == "boolean" ? _e(Ne) : O(e) ? _e(
    X,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Qs(e) ? je(e) : _e(rs, null, String(e));
}
function je(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ot(e);
}
function en(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (O(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), en(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !Pr(t) ? t._ctx = ie : r === 3 && ie && (ie.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else I(t) ? (t = { default: t, _ctx: ie }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [No(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Lo(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = $s([t.class, n.class]));
      else if (r === "style")
        t.style = Et([t.style, n.style]);
      else if (zt(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(O(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function Te(e, t, s, n = null) {
  Oe(e, t, 7, [
    s,
    n
  ]);
}
const $o = Er();
let jo = 0;
function Ho(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || $o, i = {
    uid: jo++,
    vnode: e,
    type: n,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ui(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ir(n, r),
    emitsOptions: Hr(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: j,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: j,
    data: j,
    props: j,
    attrs: j,
    slots: j,
    refs: j,
    setupState: j,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = To.bind(null, i), e.ce && e.ce(i), i;
}
let Q = null;
const Kr = () => Q || ie;
let Gt, Ps;
{
  const e = Qt(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Gt = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Q = s
  ), Ps = t(
    "__VUE_SSR_SETTERS__",
    (s) => Tt = s
  );
}
const Ot = (e) => {
  const t = Q;
  return Gt(e), e.scope.on(), () => {
    e.scope.off(), Gt(t);
  };
}, Sn = () => {
  Q && Q.scope.off(), Gt(null);
};
function kr(e) {
  return e.vnode.shapeFlag & 4;
}
let Tt = !1;
function Wo(e, t = !1, s = !1) {
  t && Ps(t);
  const { props: n, children: r } = e.vnode, i = kr(e);
  uo(e, n, i, t), go(e, r, s || t);
  const o = i ? Vo(e, t) : void 0;
  return t && Ps(!1), o;
}
function Vo(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, to);
  const { setup: n } = s;
  if (n) {
    Me();
    const r = e.setupContext = n.length > 1 ? Uo(e) : null, i = Ot(e), o = At(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Vn(o);
    if (Fe(), i(), (l || e.sp) && !rt(e) && br(e), l) {
      if (o.then(Sn, Sn), t)
        return o.then((f) => {
          Cn(e, f);
        }).catch((f) => {
          ts(f, e, 0);
        });
      e.asyncDep = o;
    } else
      Cn(e, o);
  } else
    qr(e);
}
function Cn(e, t, s) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) && (e.setupState = ar(t)), qr(e);
}
function qr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || me);
  {
    const r = Ot(e);
    Me();
    try {
      so(e);
    } finally {
      Fe(), r();
    }
  }
}
const Bo = {
  get(e, t) {
    return Z(e, "get", ""), e[t];
  }
};
function Uo(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Bo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function tn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ar(Ii(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in yt)
        return yt[s](e);
    },
    has(t, s) {
      return s in t || s in yt;
    }
  })) : e.proxy;
}
function Ko(e) {
  return I(e) && "__vccOpts" in e;
}
const Rs = (e, t) => Li(e, t, Tt), ko = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Is;
const Tn = typeof window < "u" && window.trustedTypes;
if (Tn)
  try {
    Is = /* @__PURE__ */ Tn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Gr = Is ? (e) => Is.createHTML(e) : (e) => e, qo = "http://www.w3.org/2000/svg", Go = "http://www.w3.org/1998/Math/MathML", Re = typeof document < "u" ? document : null, En = Re && /* @__PURE__ */ Re.createElement("template"), Jo = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Re.createElementNS(qo, e) : t === "mathml" ? Re.createElementNS(Go, e) : s ? Re.createElement(e, { is: s }) : Re.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => Re.createTextNode(e),
  createComment: (e) => Re.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Re.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, r, i) {
    const o = s ? s.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      En.innerHTML = Gr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = En.content;
      if (n === "svg" || n === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, s);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, zo = Symbol("_vtc");
function Yo(e, t, s) {
  const n = e[zo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const An = Symbol("_vod"), Zo = Symbol("_vsh"), Jr = Symbol("");
function Xo(e) {
  const t = Kr();
  if (!t)
    return;
  const s = t.ut = (r = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((i) => Jt(i, r));
  }, n = () => {
    const r = e(t.proxy);
    t.ce ? Jt(t.ce, r) : Ms(t.subTree, r), s(r);
  };
  xr(() => {
    pr(n);
  }), zs(() => {
    jt(n, me, { flush: "post" });
    const r = new MutationObserver(n);
    r.observe(t.subTree.el.parentNode, { childList: !0 }), Ys(() => r.disconnect());
  });
}
function Ms(e, t) {
  if (e.shapeFlag & 128) {
    const s = e.suspense;
    e = s.activeBranch, s.pendingBranch && !s.isHydrating && s.effects.push(() => {
      Ms(s.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Jt(e.el, t);
  else if (e.type === X)
    e.children.forEach((s) => Ms(s, t));
  else if (e.type === Ht) {
    let { el: s, anchor: n } = e;
    for (; s && (Jt(s, t), s !== n); )
      s = s.nextSibling;
  }
}
function Jt(e, t) {
  if (e.nodeType === 1) {
    const s = e.style;
    let n = "";
    for (const r in t)
      s.setProperty(`--${r}`, t[r]), n += `--${r}: ${t[r]};`;
    s[Jr] = n;
  }
}
const Qo = /(^|;)\s*display\s*:/;
function el(e, t, s) {
  const n = e.style, r = G(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (G(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Vt(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && Vt(n, o, "");
    for (const o in s)
      o === "display" && (i = !0), Vt(n, o, s[o]);
  } else if (r) {
    if (t !== s) {
      const o = n[Jr];
      o && (s += ";" + o), n.cssText = s, i = Qo.test(s);
    }
  } else t && e.removeAttribute("style");
  An in e && (e[An] = i ? n.display : "", e[Zo] && (n.display = "none"));
}
const On = /\s*!important$/;
function Vt(e, t, s) {
  if (O(s))
    s.forEach((n) => Vt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = tl(e, t);
    On.test(s) ? e.setProperty(
      pe(n),
      s.replace(On, ""),
      "important"
    ) : e[n] = s;
  }
}
const Pn = ["Webkit", "Moz", "ms"], _s = {};
function tl(e, t) {
  const s = _s[t];
  if (s)
    return s;
  let n = be(t);
  if (n !== "filter" && n in e)
    return _s[t] = n;
  n = Un(n);
  for (let r = 0; r < Pn.length; r++) {
    const i = Pn[r] + n;
    if (i in e)
      return _s[t] = i;
  }
  return t;
}
const Rn = "http://www.w3.org/1999/xlink";
function In(e, t, s, n, r, i = fi(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Rn, t.slice(6, t.length)) : e.setAttributeNS(Rn, t, s) : s == null || i && !Kn(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : De(s) ? String(s) : s
  );
}
function Mn(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Gr(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== f || !("_value" in e)) && (e.value = f), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean" ? s = Kn(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function sl(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function nl(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Fn = Symbol("_vei");
function rl(e, t, s, n, r = null) {
  const i = e[Fn] || (e[Fn] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [l, f] = il(t);
    if (n) {
      const d = i[t] = cl(
        n,
        r
      );
      sl(e, l, d, f);
    } else o && (nl(e, l, o, f), i[t] = void 0);
  }
}
const Nn = /(?:Once|Passive|Capture)$/;
function il(e) {
  let t;
  if (Nn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Nn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : pe(e.slice(2)), t];
}
let ms = 0;
const ol = /* @__PURE__ */ Promise.resolve(), ll = () => ms || (ol.then(() => ms = 0), ms = Date.now());
function cl(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Oe(
      fl(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = ll(), s;
}
function fl(e, t) {
  if (O(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const Dn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ul = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? Yo(e, n, o) : t === "style" ? el(e, s, n) : zt(t) ? Ns(t) || rl(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : al(e, t, n, o)) ? (Mn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && In(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !G(n)) ? Mn(e, be(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), In(e, t, n, o));
};
function al(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Dn(t) && I(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Dn(t) && G(s) ? !1 : t in e;
}
const Ln = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function dl(e, t, s) {
  const n = /* @__PURE__ */ lt(e, t);
  Zt(n) && z(n, t);
  class r extends sn {
    constructor(o) {
      super(n, o, s);
    }
  }
  return r.def = n, r;
}
const hl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class sn extends hl {
  constructor(t, s = {}, n = jn) {
    super(), this._def = t, this._props = s, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && n !== jn ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof sn) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, qs(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    this._ob = new MutationObserver((n) => {
      for (const r of n)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (n, r = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: i, styles: o } = n;
      let l;
      if (i && !O(i))
        for (const f in i) {
          const d = i[f];
          (d === Number || d && d.type === Number) && (f in this._props && (this._props[f] = fn(this._props[f])), (l || (l = /* @__PURE__ */ Object.create(null)))[be(f)] = !0);
        }
      this._numberProps = l, this._resolveProps(n), this.shadowRoot && this._applyStyles(o), this._mount(n);
    }, s = this._def.__asyncLoader;
    s ? this._pendingResolve = s().then((n) => {
      n.configureApp = this._def.configureApp, t(this._def = n, !0);
    }) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const s = this._instance && this._instance.exposed;
    if (s)
      for (const n in s)
        N(this, n) || Object.defineProperty(this, n, {
          // unwrap ref to be consistent with public instance behavior
          get: () => ur(s[n])
        });
  }
  _resolveProps(t) {
    const { props: s } = t, n = O(s) ? s : Object.keys(s || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && n.includes(r) && this._setProp(r, this[r]);
    for (const r of n.map(be))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(i) {
          this._setProp(r, i, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const s = this.hasAttribute(t);
    let n = s ? this.getAttribute(t) : Ln;
    const r = be(t);
    s && this._numberProps && this._numberProps[r] && (n = fn(n)), this._setProp(r, n, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, s, n = !0, r = !1) {
    if (s !== this._props[t] && (s === Ln ? delete this._props[t] : (this._props[t] = s, t === "key" && this._app && (this._app._ceVNode.key = s)), r && this._instance && this._update(), n)) {
      const i = this._ob;
      i && i.disconnect(), s === !0 ? this.setAttribute(pe(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(pe(t), s + "") : s || this.removeAttribute(pe(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), gl(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const s = _e(this._def, z(t, this._props));
    return this._instance || (s.ce = (n) => {
      this._instance = n, n.ce = this, n.isCE = !0;
      const r = (i, o) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            Zt(o[0]) ? z({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      n.emit = (i, ...o) => {
        r(i, o), pe(i) !== i && r(pe(i), o);
      }, this._setParent();
    }), s;
  }
  _applyStyles(t, s) {
    if (!t) return;
    if (s) {
      if (s === this._def || this._styleChildren.has(s))
        return;
      this._styleChildren.add(s);
    }
    const n = this._nonce;
    for (let r = t.length - 1; r >= 0; r--) {
      const i = document.createElement("style");
      n && i.setAttribute("nonce", n), i.textContent = t[r], this.shadowRoot.prepend(i);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let s;
    for (; s = this.firstChild; ) {
      const n = s.nodeType === 1 && s.getAttribute("slot") || "default";
      (t[n] || (t[n] = [])).push(s), this.removeChild(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), s = this._instance.type.__scopeId;
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = r.getAttribute("name") || "default", o = this._slots[i], l = r.parentNode;
      if (o)
        for (const f of o) {
          if (s && f.nodeType === 1) {
            const d = s + "-s", a = document.createTreeWalker(f, 1);
            f.setAttribute(d, "");
            let p;
            for (; p = a.nextNode(); )
              p.setAttribute(d, "");
          }
          l.insertBefore(f, r);
        }
      else
        for (; r.firstChild; ) l.insertBefore(r.firstChild, r);
      l.removeChild(r);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
const pl = /* @__PURE__ */ z({ patchProp: ul }, Jo);
let $n;
function zr() {
  return $n || ($n = mo(pl));
}
const gl = (...e) => {
  zr().render(...e);
}, jn = (...e) => {
  const t = zr().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = ml(n);
    if (!r) return;
    const i = t._component;
    !I(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, _l(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function _l(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ml(e) {
  return G(e) ? document.querySelector(e) : e;
}
const Hn = /* @__PURE__ */ lt({
  __name: "Letter",
  props: {
    char: String,
    color: String
  },
  setup(e) {
    return (t, s) => (re(), Ve("div", {
      style: Et({ color: e.color })
    }, qn(e.char), 5));
  }
}), bl = /* @__PURE__ */ lt({
  __name: "Caret",
  props: {
    offset: Number
  },
  setup(e) {
    return (t, s) => (re(), Ve("div", {
      className: "caret",
      style: Et({ left: e.offset + "ch" })
    }, null, 4));
  }
}), yl = ".caret[data-v-aeae7146]{position:absolute;width:.1em;height:1lh;border-radius:.05em;background-color:#000;transition:left .08s;animation-name:blink-aeae7146;animation-duration:.8s;animation-iteration-count:infinite;animation-timing-function:steps(2,jump-both)}@keyframes blink-aeae7146{0%{opacity:.9}to{opacity:.2}}", is = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, vl = /* @__PURE__ */ is(bl, [["styles", [yl]], ["__scopeId", "data-v-aeae7146"]]), xl = /* @__PURE__ */ lt({
  __name: "Word",
  props: {
    word: {
      type: String,
      required: !0
    },
    typedWord: {
      type: String,
      required: !0
    },
    wordStatus: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    Xo((l) => ({
      "26a89edb": r.value
    }));
    const t = e, s = Ss("ref"), n = Rs(() => t.typedWord.slice(t.word.length)), r = Rs(() => t.wordStatus === "incorrect" ? o("incorrect") + " solid 0.1lh" : "transparent solid 0.1lh"), i = (l, f) => t.typedWord.charAt(f) === l ? "correct" : t.typedWord.charAt(f) != "" ? "incorrect" : t.wordStatus === "active" ? "active" : "passive", o = (l) => {
      switch (l) {
        case "passive":
          return "#ccc";
        case "active":
          return "#777";
        case "correct":
          return "#000";
        case "incorrect":
          return "red";
      }
    };
    return wr(async () => {
      t.wordStatus === "active" && (await qs(), s.value?.scrollIntoView({ behavior: "smooth", block: "center" }));
    }), (l, f) => (re(), Ve("div", {
      class: "word",
      ref_key: "ref",
      ref: s
    }, [
      (re(!0), Ve(X, null, Cs(e.word, (d, a) => (re(), Ze(Hn, {
        key: a,
        char: d,
        color: o(i(d, a))
      }, null, 8, ["char", "color"]))), 128)),
      (re(!0), Ve(X, null, Cs(n.value, (d, a) => (re(), Ze(Hn, {
        key: "s" + a,
        char: d,
        color: o("incorrect")
      }, null, 8, ["char", "color"]))), 128)),
      e.wordStatus === "active" ? (re(), Ze(vl, {
        key: 0,
        offset: e.typedWord?.length || 0
      }, null, 8, ["offset"])) : Do("", !0)
    ], 512));
  }
}), wl = ".word[data-v-cd765143]{display:flex;margin:.15lh .2em;position:relative;border-bottom:var(--26a89edb)}", Sl = /* @__PURE__ */ is(xl, [["styles", [wl]], ["__scopeId", "data-v-cd765143"]]), Cl = { class: "wordSet" }, Tl = /* @__PURE__ */ lt({
  __name: "WordSet",
  props: {
    wordList: {
      type: Array,
      required: !0
    },
    typedWordList: {
      type: Array,
      required: !0
    },
    activeWordIndex: {
      type: Number,
      required: !0
    }
  },
  setup(e) {
    const t = e, s = (n, r) => t.activeWordIndex === r ? "active" : t.activeWordIndex > r ? t.typedWordList[r] !== n ? "incorrect" : "correct" : "passive";
    return (n, r) => (re(), Ve("div", Cl, [
      (re(!0), Ve(X, null, Cs(e.wordList, (i, o) => (re(), Ze(Sl, {
        key: i + o,
        word: i,
        typedWord: e.typedWordList[o] || "",
        wordStatus: s(i, o)
      }, null, 8, ["word", "typedWord", "wordStatus"]))), 128))
    ]));
  }
}), El = ".wordSet[data-v-0c65b6ed]{display:flex;flex-wrap:wrap;overflow:hidden;-webkit-user-select:none;user-select:none}", Al = /* @__PURE__ */ is(Tl, [["styles", [El]], ["__scopeId", "data-v-0c65b6ed"]]), Ol = /* @__PURE__ */ lt({
  __name: "TypingTest",
  emits: ["results_ready"],
  setup(e, { emit: t }) {
    const s = t, n = Ss("typingTest"), r = Ss("textContent"), i = qe([""]), o = qe([""]), l = qe(0), f = qe({}), d = qe(0), a = qe(-1), p = qe([]);
    zs(async () => {
      await new Promise((S) => setTimeout(S, 0)), i.value = r.value?.assignedNodes()[0]?.textContent?.trim().split(/\s/) ?? [], n.value?.focus(), document.addEventListener("click", () => n.value?.focus());
    });
    const C = (S) => {
      if (a.value === -2)
        return;
      S.preventDefault();
      const R = o.value[o.value.length - 1] || "";
      if (S.key === " ") {
        o.value.length !== i.value.length && (i.value[l.value]?.length !== R?.length && (d.value = d.value + ((i.value[l.value]?.length || 0) - R.length)), o.value = [...o.value, ""], l.value++, p.value = [...p.value, { key: "Space", time: Date.now() }]);
        return;
      }
      if (S.key === "Backspace") {
        if (S.ctrlKey)
          l.value !== 0 ? R?.length === 0 ? (o.value = [...o.value.slice(0, -2), ""], l.value--) : o.value = [...o.value.slice(0, -1), ""] : o.value = [""];
        else if (R?.length === 0)
          l.value !== 0 && (o.value = o.value.slice(0, -1), l.value--);
        else {
          let M = o.value.slice(0, -1);
          M.push(R?.slice(0, -1) || ""), o.value = M;
        }
        p.value = [...p.value, { key: "Backspace", time: Date.now() }];
        return;
      }
      if (S.key.match(/^[-a-zA-Z0-9!@#$%^&*()_+=[\]{};':",./<>?\\|`~]$/)) {
        a.value === -1 && (a.value = Date.now());
        const M = i.value[l.value]?.charAt(R?.length || 0);
        S.key !== M && d.value++;
        let J = o.value.slice(0, -1);
        if (J.push(R + S.key), o.value = J, p.value = [...p.value, { key: S.key, time: Date.now() }], o.value.length === i.value.length && (R?.length || 0) === (i.value[l.value]?.length || 0) - 1) {
          const D = (Date.now() - a.value) / 1e3;
          a.value = -2;
          const B = i.value.flatMap(
            (K, de) => K.split("").map(
              (he, ve) => o.value[de]?.charAt(ve) !== he ? 1 : 0
            )
          ).reduce((K, de) => K + de, 0), U = d.value - B, A = i.value.length / (D / 60);
          f.value = {
            time_taken: D,
            uncorrected_errors: B,
            corrected_errors: U,
            wpm: A,
            text_length: i.value.join("").length + (i.value.length - 1),
            keystroke_log: p.value
          }, s("results_ready", { results: f.value });
        }
      }
    };
    return (S, R) => (re(), Ve("div", {
      class: "test",
      ref_key: "typingTest",
      ref: n,
      tabindex: "0",
      onKeydown: C
    }, [
      eo(S.$slots, "default", {
        ref_key: "textContent",
        ref: r,
        style: "display: none"
      }, void 0),
      _e(Al, {
        wordList: i.value,
        typedWordList: o.value,
        activeWordIndex: l.value
      }, null, 8, ["wordList", "typedWordList", "activeWordIndex"])
    ], 544));
  }
}), Pl = ".test[data-v-e2ca72ca]{margin:0 auto;height:4.2lh;overflow:hidden;outline:none;transition:color .5s ease;font-family:monospace;font-size:24px}.test[data-v-e2ca72ca]:focus-within{filter:none}", Rl = /* @__PURE__ */ is(Ol, [["styles", [Pl]], ["__scopeId", "data-v-e2ca72ca"]]), Il = /* @__PURE__ */ dl(Rl);
customElements.define("typing-test", Il);
