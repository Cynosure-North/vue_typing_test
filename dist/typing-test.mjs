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
const $ = {}, Qe = [], _e = () => {
}, Zr = () => !1, zt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ns = (e) => e.startsWith("onUpdate:"), z = Object.assign, Ds = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Xr = Object.prototype.hasOwnProperty, N = (e, t) => Xr.call(e, t), O = Array.isArray, et = (e) => Yt(e) === "[object Map]", Hn = (e) => Yt(e) === "[object Set]", I = (e) => typeof e == "function", G = (e) => typeof e == "string", Be = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", Wn = (e) => (q(e) || I(e)) && I(e.then) && I(e.catch), Vn = Object.prototype.toString, Yt = (e) => Vn.call(e), Qr = (e) => Yt(e).slice(8, -1), Zt = (e) => Yt(e) === "[object Object]", Ls = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, dt = /* @__PURE__ */ Fs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Xt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, ei = /-(\w)/g, me = Xt(
  (e) => e.replace(ei, (t, s) => s ? s.toUpperCase() : "")
), ti = /\B([A-Z])/g, de = Xt(
  (e) => e.replace(ti, "-$1").toLowerCase()
), Bn = Xt((e) => e.charAt(0).toUpperCase() + e.slice(1)), fs = Xt(
  (e) => e ? `on${Bn(e)}` : ""
), $e = (e, t) => !Object.is(e, t), us = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, ys = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, si = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, cn = (e) => {
  const t = G(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let fn;
const Qt = () => fn || (fn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Et(e) {
  if (O(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = G(n) ? oi(n) : Et(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (G(e) || q(e))
    return e;
}
const ni = /;(?![^(]*\))/g, ri = /:([^]+)/, ii = /\/\*[^]*?\*\//g;
function oi(e) {
  const t = {};
  return e.replace(ii, "").split(ni).forEach((s) => {
    if (s) {
      const n = s.split(ri);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function js(e) {
  let t = "";
  if (G(e))
    t = e;
  else if (O(e))
    for (let s = 0; s < e.length; s++) {
      const n = js(e[s]);
      n && (t += n + " ");
    }
  else if (q(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const li = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ci = /* @__PURE__ */ Fs(li);
function Un(e) {
  return !!e || e === "";
}
const Kn = (e) => !!(e && e.__v_isRef === !0), kn = (e) => G(e) ? e : e == null ? "" : O(e) || q(e) && (e.toString === Vn || !I(e.toString)) ? Kn(e) ? kn(e.value) : JSON.stringify(e, qn, 2) : String(e), qn = (e, t) => Kn(t) ? qn(e, t.value) : et(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[as(n, i) + " =>"] = r, s),
    {}
  )
} : Hn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => as(s))
} : Be(t) ? as(t) : q(t) && !O(t) && !Zt(t) ? String(t) : t, as = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Be(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ie;
class fi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ie, !t && ie && (this.index = (ie.scopes || (ie.scopes = [])).push(
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
      const s = ie;
      try {
        return ie = this, t();
      } finally {
        ie = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ie, ie = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ie = this.prevScope, this.prevScope = void 0);
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
function ui() {
  return ie;
}
let V;
const hs = /* @__PURE__ */ new WeakSet();
class Gn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ie && ie.active && ie.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, hs.has(this) && (hs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || zn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, un(this), Yn(this);
    const t = V, s = be;
    V = this, be = !0;
    try {
      return this.fn();
    } finally {
      Zn(this), V = t, be = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ws(t);
      this.deps = this.depsTail = void 0, un(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? hs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    vs(this) && this.run();
  }
  get dirty() {
    return vs(this);
  }
}
let Jn = 0, pt, gt;
function zn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = gt, gt = e;
    return;
  }
  e.next = pt, pt = e;
}
function $s() {
  Jn++;
}
function Hs() {
  if (--Jn > 0)
    return;
  if (gt) {
    let t = gt;
    for (gt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; pt; ) {
    let t = pt;
    for (pt = void 0; t; ) {
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
function Yn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Zn(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), Ws(n), ai(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function vs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Xn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Xn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === xt) || (e.globalVersion = xt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !vs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = V, n = be;
  V = e, be = !0;
  try {
    Yn(e);
    const r = e.fn(e._value);
    (t.version === 0 || $e(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    V = s, be = n, Zn(e), e.flags &= -3;
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
function ai(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let be = !0;
const Qn = [];
function Me() {
  Qn.push(be), be = !1;
}
function Fe() {
  const e = Qn.pop();
  be = e === void 0 ? !0 : e;
}
function un(e) {
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
    if (!V || !be || V === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== V)
      s = this.activeLink = new hi(V, this), V.deps ? (s.prevDep = V.depsTail, V.depsTail.nextDep = s, V.depsTail = s) : V.deps = V.depsTail = s, er(s);
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
    $s();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Hs();
    }
  }
}
function er(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        er(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const xs = /* @__PURE__ */ new WeakMap(), ze = Symbol(
  ""
), ws = Symbol(
  ""
), wt = Symbol(
  ""
);
function Z(e, t, s) {
  if (be && V) {
    let n = xs.get(e);
    n || xs.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new Vs()), r.map = n, r.key = s), r.track();
  }
}
function Ie(e, t, s, n, r, i) {
  const o = xs.get(e);
  if (!o) {
    xt++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if ($s(), t === "clear")
    o.forEach(l);
  else {
    const f = O(e), h = f && Ls(s);
    if (f && s === "length") {
      const a = Number(n);
      o.forEach((p, C) => {
        (C === "length" || C === wt || !Be(C) && C >= a) && l(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), h && l(o.get(wt)), t) {
        case "add":
          f ? h && l(o.get("length")) : (l(o.get(ze)), et(e) && l(o.get(ws)));
          break;
        case "delete":
          f || (l(o.get(ze)), et(e) && l(o.get(ws)));
          break;
        case "set":
          et(e) && l(o.get(ze));
          break;
      }
  }
  Hs();
}
function Ye(e) {
  const t = L(e);
  return t === e ? t : (Z(t, "iterate", wt), pe(e) ? t : t.map(Y));
}
function es(e) {
  return Z(e = L(e), "iterate", wt), e;
}
const di = {
  __proto__: null,
  [Symbol.iterator]() {
    return ds(this, Symbol.iterator, Y);
  },
  concat(...e) {
    return Ye(this).concat(
      ...e.map((t) => O(t) ? Ye(t) : t)
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
    return ps(this, "includes", e);
  },
  indexOf(...e) {
    return ps(this, "indexOf", e);
  },
  join(e) {
    return Ye(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ps(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Pe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ut(this, "pop");
  },
  push(...e) {
    return ut(this, "push", e);
  },
  reduce(e, ...t) {
    return an(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return an(this, "reduceRight", e, t);
  },
  shift() {
    return ut(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Pe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ut(this, "splice", e);
  },
  toReversed() {
    return Ye(this).toReversed();
  },
  toSorted(e) {
    return Ye(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ye(this).toSpliced(...e);
  },
  unshift(...e) {
    return ut(this, "unshift", e);
  },
  values() {
    return ds(this, "values", Y);
  }
};
function ds(e, t, s) {
  const n = es(e), r = n[t]();
  return n !== e && !pe(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = s(i.value)), i;
  }), r;
}
const pi = Array.prototype;
function Pe(e, t, s, n, r, i) {
  const o = es(e), l = o !== e && !pe(e), f = o[t];
  if (f !== pi[t]) {
    const p = f.apply(e, i);
    return l ? Y(p) : p;
  }
  let h = s;
  o !== e && (l ? h = function(p, C) {
    return s.call(this, Y(p), C, e);
  } : s.length > 2 && (h = function(p, C) {
    return s.call(this, p, C, e);
  }));
  const a = f.call(o, h, n);
  return l && r ? r(a) : a;
}
function an(e, t, s, n) {
  const r = es(e);
  let i = s;
  return r !== e && (pe(e) ? s.length > 3 && (i = function(o, l, f) {
    return s.call(this, o, l, f, e);
  }) : i = function(o, l, f) {
    return s.call(this, o, Y(l), f, e);
  }), r[t](i, ...n);
}
function ps(e, t, s) {
  const n = L(e);
  Z(n, "iterate", wt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && ks(s[0]) ? (s[0] = L(s[0]), n[t](...s)) : r;
}
function ut(e, t, s = []) {
  Me(), $s();
  const n = L(e)[t].apply(e, s);
  return Hs(), Fe(), n;
}
const gi = /* @__PURE__ */ Fs("__proto__,__v_isRef,__isVue"), tr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Be)
);
function _i(e) {
  Be(e) || (e = String(e));
  const t = L(this);
  return Z(t, "has", e), t.hasOwnProperty(e);
}
class sr {
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
      return n === (r ? i ? Ei : or : i ? ir : rr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = O(t);
    if (!r) {
      let f;
      if (o && (f = di[s]))
        return f;
      if (s === "hasOwnProperty")
        return _i;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Q(t) ? t : n
    );
    return (Be(s) ? tr.has(s) : gi(s)) || (r || Z(t, "get", s), i) ? l : Q(l) ? o && Ls(s) ? l : l.value : q(l) ? r ? lr(l) : Us(l) : l;
  }
}
class nr extends sr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    if (!this._isShallow) {
      const f = We(i);
      if (!pe(n) && !We(n) && (i = L(i), n = L(n)), !O(t) && Q(i) && !Q(n))
        return f ? !1 : (i.value = n, !0);
    }
    const o = O(t) && Ls(s) ? Number(s) < t.length : N(t, s), l = Reflect.set(
      t,
      s,
      n,
      Q(t) ? t : r
    );
    return t === L(r) && (o ? $e(n, i) && Ie(t, "set", s, n) : Ie(t, "add", s, n)), l;
  }
  deleteProperty(t, s) {
    const n = N(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Ie(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Be(s) || !tr.has(s)) && Z(t, "has", s), n;
  }
  ownKeys(t) {
    return Z(
      t,
      "iterate",
      O(t) ? "length" : ze
    ), Reflect.ownKeys(t);
  }
}
class mi extends sr {
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
const bi = /* @__PURE__ */ new nr(), yi = /* @__PURE__ */ new mi(), vi = /* @__PURE__ */ new nr(!0);
const Ss = (e) => e, Nt = (e) => Reflect.getPrototypeOf(e);
function xi(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = L(r), o = et(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, h = r[e](...n), a = s ? Ss : t ? Bt : Y;
    return !t && Z(
      i,
      "iterate",
      f ? ws : ze
    ), {
      // iterator protocol
      next() {
        const { value: p, done: C } = h.next();
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
function wi(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = L(i), l = L(r);
      e || ($e(r, l) && Z(o, "get", r), Z(o, "get", l));
      const { has: f } = Nt(o), h = t ? Ss : e ? Bt : Y;
      if (f.call(o, r))
        return h(i.get(r));
      if (f.call(o, l))
        return h(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Z(L(r), "iterate", ze), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, o = L(i), l = L(r);
      return e || ($e(r, l) && Z(o, "has", r), Z(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, f = L(l), h = t ? Ss : e ? Bt : Y;
      return !e && Z(f, "iterate", ze), l.forEach((a, p) => r.call(i, h(a), h(p), o));
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
        !t && !pe(r) && !We(r) && (r = L(r));
        const i = L(this);
        return Nt(i).has.call(i, r) || (i.add(r), Ie(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !pe(i) && !We(i) && (i = L(i));
        const o = L(this), { has: l, get: f } = Nt(o);
        let h = l.call(o, r);
        h || (r = L(r), h = l.call(o, r));
        const a = f.call(o, r);
        return o.set(r, i), h ? $e(i, a) && Ie(o, "set", r, i) : Ie(o, "add", r, i), this;
      },
      delete(r) {
        const i = L(this), { has: o, get: l } = Nt(i);
        let f = o.call(i, r);
        f || (r = L(r), f = o.call(i, r)), l && l.call(i, r);
        const h = i.delete(r);
        return f && Ie(i, "delete", r, void 0), h;
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
    s[r] = xi(r, e, t);
  }), s;
}
function Bs(e, t) {
  const s = wi(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    N(s, r) && r in n ? s : n,
    r,
    i
  );
}
const Si = {
  get: /* @__PURE__ */ Bs(!1, !1)
}, Ci = {
  get: /* @__PURE__ */ Bs(!1, !0)
}, Ti = {
  get: /* @__PURE__ */ Bs(!0, !1)
};
const rr = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakMap();
function Ai(e) {
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
function Oi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ai(Qr(e));
}
function Us(e) {
  return We(e) ? e : Ks(
    e,
    !1,
    bi,
    Si,
    rr
  );
}
function Pi(e) {
  return Ks(
    e,
    !1,
    vi,
    Ci,
    ir
  );
}
function lr(e) {
  return Ks(
    e,
    !0,
    yi,
    Ti,
    or
  );
}
function Ks(e, t, s, n, r) {
  if (!q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Oi(e);
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
function tt(e) {
  return We(e) ? tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function We(e) {
  return !!(e && e.__v_isReadonly);
}
function pe(e) {
  return !!(e && e.__v_isShallow);
}
function ks(e) {
  return e ? !!e.__v_raw : !1;
}
function L(e) {
  const t = e && e.__v_raw;
  return t ? L(t) : e;
}
function Ri(e) {
  return !N(e, "__v_skip") && Object.isExtensible(e) && ys(e, "__v_skip", !0), e;
}
const Y = (e) => q(e) ? Us(e) : e, Bt = (e) => q(e) ? lr(e) : e;
function Q(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ze(e) {
  return cr(e, !1);
}
function Ii(e) {
  return cr(e, !0);
}
function cr(e, t) {
  return Q(e) ? e : new Mi(e, t);
}
class Mi {
  constructor(t, s) {
    this.dep = new Vs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : L(t), this._value = s ? t : Y(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || pe(t) || We(t);
    t = n ? t : L(t), $e(t, s) && (this._rawValue = t, this._value = n ? t : Y(t), this.dep.trigger());
  }
}
function qs(e) {
  return Q(e) ? e.value : e;
}
const Fi = {
  get: (e, t, s) => t === "__v_raw" ? e : qs(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return Q(r) && !Q(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function fr(e) {
  return tt(e) ? e : new Proxy(e, Fi);
}
class Ni {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Vs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = xt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    V !== this)
      return zn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Xn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Di(e, t, s = !1) {
  let n, r;
  return I(e) ? n = e : (n = e.get, r = e.set), new Ni(n, r, s);
}
const Lt = {}, Ut = /* @__PURE__ */ new WeakMap();
let Je;
function Li(e, t = !1, s = Je) {
  if (s) {
    let n = Ut.get(s);
    n || Ut.set(s, n = []), n.push(e);
  }
}
function ji(e, t, s = $) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: f } = s, h = (A) => r ? A : pe(A) || r === !1 || r === 0 ? je(A, 1) : je(A);
  let a, p, C, S, R = !1, M = !1;
  if (Q(e) ? (p = () => e.value, R = pe(e)) : tt(e) ? (p = () => h(e), R = !0) : O(e) ? (M = !0, R = e.some((A) => tt(A) || pe(A)), p = () => e.map((A) => {
    if (Q(A))
      return A.value;
    if (tt(A))
      return h(A);
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
    const A = Je;
    Je = a;
    try {
      return f ? f(e, 3, [S]) : e(S);
    } finally {
      Je = A;
    }
  } : p = _e, t && r) {
    const A = p, K = r === !0 ? 1 / 0 : r;
    p = () => je(A(), K);
  }
  const J = ui(), D = () => {
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
        if (r || R || (M ? K.some((ae, he) => $e(ae, B[he])) : $e(K, B))) {
          C && C();
          const ae = Je;
          Je = a;
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
            Je = ae;
          }
        }
      } else
        a.run();
  };
  return l && l(U), a = new Gn(p), a.scheduler = o ? () => o(U, !1) : U, S = (A) => Li(A, !1, a), C = a.onStop = () => {
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
function je(e, t = 1 / 0, s) {
  if (t <= 0 || !q(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(e)))
    return e;
  if (s.add(e), t--, Q(e))
    je(e.value, t, s);
  else if (O(e))
    for (let n = 0; n < e.length; n++)
      je(e[n], t, s);
  else if (Hn(e) || et(e))
    e.forEach((n) => {
      je(n, t, s);
    });
  else if (Zt(e)) {
    for (const n in e)
      je(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && je(e[n], t, s);
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
    return r && Wn(r) && r.catch((i) => {
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
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || $;
  if (t) {
    let l = t.parent;
    const f = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, f, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Me(), At(i, null, 10, [
        e,
        f,
        h
      ]), Fe();
      return;
    }
  }
  $i(e, s, r, n, o);
}
function $i(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const se = [];
let Ee = -1;
const st = [];
let De = null, Xe = 0;
const ur = /* @__PURE__ */ Promise.resolve();
let Kt = null;
function ss(e) {
  const t = Kt || ur;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Hi(e) {
  let t = Ee + 1, s = se.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = se[n], i = St(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Gs(e) {
  if (!(e.flags & 1)) {
    const t = St(e), s = se[se.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= St(s) ? se.push(e) : se.splice(Hi(t), 0, e), e.flags |= 1, ar();
  }
}
function ar() {
  Kt || (Kt = ur.then(pr));
}
function hr(e) {
  O(e) ? st.push(...e) : De && e.id === -1 ? De.splice(Xe + 1, 0, e) : e.flags & 1 || (st.push(e), e.flags |= 1), ar();
}
function hn(e, t, s = Ee + 1) {
  for (; s < se.length; s++) {
    const n = se[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      se.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function dr(e) {
  if (st.length) {
    const t = [...new Set(st)].sort(
      (s, n) => St(s) - St(n)
    );
    if (st.length = 0, De) {
      De.push(...t);
      return;
    }
    for (De = t, Xe = 0; Xe < De.length; Xe++) {
      const s = De[Xe];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    De = null, Xe = 0;
  }
}
const St = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function pr(e) {
  try {
    for (Ee = 0; Ee < se.length; Ee++) {
      const t = se[Ee];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), At(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ee < se.length; Ee++) {
      const t = se[Ee];
      t && (t.flags &= -2);
    }
    Ee = -1, se.length = 0, dr(), Kt = null, (se.length || st.length) && pr();
  }
}
let ge = null, gr = null;
function kt(e) {
  const t = ge;
  return ge = e, gr = e && e.type.__scopeId || null, t;
}
function Wi(e, t = ge, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && xn(-1);
    const i = kt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      kt(i), n._d && xn(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qe(e, t, s, n) {
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
const Vi = Symbol("_vte"), Bi = (e) => e.__isTeleport;
function Js(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Js(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function it(e, t) {
  return I(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    z({ name: e.name }, t, { setup: e })
  ) : e;
}
function _r(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function mr(e) {
  const t = Ur(), s = Ii(null);
  if (t) {
    const r = t.refs === $ ? t.refs = {} : t.refs;
    Object.defineProperty(r, e, {
      enumerable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    });
  }
  return s;
}
function _t(e, t, s, n, r = !1) {
  if (O(e)) {
    e.forEach(
      (R, M) => _t(
        R,
        t && (O(t) ? t[M] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (mt(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && _t(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? en(n.component) : n.el, o = r ? null : i, { i: l, r: f } = e, h = t && t.r, a = l.refs === $ ? l.refs = {} : l.refs, p = l.setupState, C = L(p), S = p === $ ? () => !1 : (R) => N(C, R);
  if (h != null && h !== f && (G(h) ? (a[h] = null, S(h) && (p[h] = null)) : Q(h) && (h.value = null)), I(f))
    At(f, l, 12, [o, a]);
  else {
    const R = G(f), M = Q(f);
    if (R || M) {
      const J = () => {
        if (e.f) {
          const D = R ? S(f) ? p[f] : a[f] : f.value;
          r ? O(D) && Ds(D, i) : O(D) ? D.includes(i) || D.push(i) : R ? (a[f] = [i], S(f) && (p[f] = a[f])) : (f.value = [i], e.k && (a[e.k] = f.value));
        } else R ? (a[f] = o, S(f) && (p[f] = o)) : M && (f.value = o, e.k && (a[e.k] = o));
      };
      o ? (J.id = -1, le(J, s)) : J();
    }
  }
}
Qt().requestIdleCallback;
Qt().cancelIdleCallback;
const mt = (e) => !!e.type.__asyncLoader, br = (e) => e.type.__isKeepAlive;
function Ui(e, t) {
  yr(e, "a", t);
}
function Ki(e, t) {
  yr(e, "da", t);
}
function yr(e, t, s = X) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (ns(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      br(r.parent.vnode) && ki(n, t, s, r), r = r.parent;
  }
}
function ki(e, t, s, n) {
  const r = ns(
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
function ns(e, t, s = X, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Me();
      const l = Ot(s), f = Oe(t, s, e, o);
      return l(), Fe(), f;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const Ne = (e) => (t, s = X) => {
  (!Tt || e === "sp") && ns(e, (...n) => t(...n), s);
}, qi = Ne("bm"), zs = Ne("m"), vr = Ne(
  "bu"
), xr = Ne("u"), Gi = Ne(
  "bum"
), Ys = Ne("um"), Ji = Ne(
  "sp"
), zi = Ne("rtg"), Yi = Ne("rtc");
function Zi(e, t = X) {
  ns("ec", e, t);
}
const Xi = Symbol.for("v-ndc");
function Cs(e, t, s, n) {
  let r;
  const i = s, o = O(e);
  if (o || G(e)) {
    const l = o && tt(e);
    let f = !1, h = !1;
    l && (f = !pe(e), h = We(e), e = es(e)), r = new Array(e.length);
    for (let a = 0, p = e.length; a < p; a++)
      r[a] = t(
        f ? h ? Bt(Y(e[a])) : Y(e[a]) : e[a],
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
      for (let f = 0, h = l.length; f < h; f++) {
        const a = l[f];
        r[f] = t(e[a], a, f, i);
      }
    }
  else
    r = [];
  return r;
}
const Ts = (e) => e ? Kr(e) ? en(e) : Ts(e.parent) : null, bt = (
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
    $options: (e) => Sr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Gs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ss.bind(e.proxy)),
    $watch: (e) => xo.bind(e)
  })
), gs = (e, t) => e !== $ && !e.__isScriptSetup && N(e, t), Qi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: f } = e;
    let h;
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
        if (gs(n, t))
          return o[t] = 1, n[t];
        if (r !== $ && N(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && N(h, t)
        )
          return o[t] = 3, i[t];
        if (s !== $ && N(s, t))
          return o[t] = 4, s[t];
        Es && (o[t] = 0);
      }
    }
    const a = bt[t];
    let p, C;
    if (a)
      return t === "$attrs" && Z(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (p = l.__cssModules) && (p = p[t])
    )
      return p;
    if (s !== $ && N(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      C = f.config.globalProperties, N(C, t)
    )
      return C[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return gs(r, t) ? (r[t] = s, !0) : n !== $ && N(n, t) ? (n[t] = s, !0) : N(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, propsOptions: i }
  }, o) {
    let l;
    return !!s[o] || e !== $ && N(e, o) || gs(t, o) || (l = i[0]) && N(l, o) || N(n, o) || N(bt, o) || N(r.config.globalProperties, o);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : N(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function dn(e) {
  return O(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Es = !0;
function eo(e) {
  const t = Sr(e), s = e.proxy, n = e.ctx;
  Es = !1, t.beforeCreate && pn(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: f,
    inject: h,
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
    renderTracked: ae,
    renderTriggered: he,
    errorCaptured: ve,
    serverPrefetch: Pt,
    // public API
    expose: Ue,
    inheritAttrs: ot,
    // assets
    components: Rt,
    directives: It,
    filters: ls
  } = t;
  if (h && to(h, n, null), o)
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
      const H = i[k], Ke = I(H) ? H.bind(s, s) : I(H.get) ? H.get.bind(s, s) : _e, Mt = !I(H) && I(H.set) ? H.set.bind(s) : _e, ke = Rs({
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
      wr(l[k], n, s, k);
  if (f) {
    const k = I(f) ? f.call(s) : f;
    Reflect.ownKeys(k).forEach((H) => {
      lo(H, k[H]);
    });
  }
  a && pn(a, e, "c");
  function ee(k, H) {
    O(H) ? H.forEach((Ke) => k(Ke.bind(s))) : H && k(H.bind(s));
  }
  if (ee(qi, p), ee(zs, C), ee(vr, S), ee(xr, R), ee(Ui, M), ee(Ki, J), ee(Zi, ve), ee(Yi, ae), ee(zi, he), ee(Gi, B), ee(Ys, A), ee(Ji, Pt), O(Ue))
    if (Ue.length) {
      const k = e.exposed || (e.exposed = {});
      Ue.forEach((H) => {
        Object.defineProperty(k, H, {
          get: () => s[H],
          set: (Ke) => s[H] = Ke
        });
      });
    } else e.exposed || (e.exposed = {});
  K && e.render === _e && (e.render = K), ot != null && (e.inheritAttrs = ot), Rt && (e.components = Rt), It && (e.directives = It), Pt && _r(e);
}
function to(e, t, s = _e) {
  O(e) && (e = As(e));
  for (const n in e) {
    const r = e[n];
    let i;
    q(r) ? "default" in r ? i = jt(
      r.from || n,
      r.default,
      !0
    ) : i = jt(r.from || n) : i = jt(r), Q(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function pn(e, t, s) {
  Oe(
    O(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function wr(e, t, s, n) {
  let r = n.includes(".") ? Lr(s, n) : () => s[n];
  if (G(e)) {
    const i = t[e];
    I(i) && $t(r, i);
  } else if (I(e))
    $t(r, e.bind(s));
  else if (q(e))
    if (O(e))
      e.forEach((i) => wr(i, t, s, n));
    else {
      const i = I(e.handler) ? e.handler.bind(s) : t[e.handler];
      I(i) && $t(r, i, e);
    }
}
function Sr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !r.length && !s && !n ? f = t : (f = {}, r.length && r.forEach(
    (h) => qt(f, h, o, !0)
  ), qt(f, t, o)), q(t) && i.set(t, f), f;
}
function qt(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && qt(e, i, s, !0), r && r.forEach(
    (o) => qt(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = so[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const so = {
  data: gn,
  props: _n,
  emits: _n,
  // objects
  methods: ht,
  computed: ht,
  // lifecycle
  beforeCreate: te,
  created: te,
  beforeMount: te,
  mounted: te,
  beforeUpdate: te,
  updated: te,
  beforeDestroy: te,
  beforeUnmount: te,
  destroyed: te,
  unmounted: te,
  activated: te,
  deactivated: te,
  errorCaptured: te,
  serverPrefetch: te,
  // assets
  components: ht,
  directives: ht,
  // watch
  watch: ro,
  // provide / inject
  provide: gn,
  inject: no
};
function gn(e, t) {
  return t ? e ? function() {
    return z(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function no(e, t) {
  return ht(As(e), As(t));
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
function te(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ht(e, t) {
  return e ? z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _n(e, t) {
  return e ? O(e) && O(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : z(
    /* @__PURE__ */ Object.create(null),
    dn(e),
    dn(t ?? {})
  ) : t;
}
function ro(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = z(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = te(e[n], t[n]);
  return s;
}
function Cr() {
  return {
    app: null,
    config: {
      isNativeTag: Zr,
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
let io = 0;
function oo(e, t) {
  return function(n, r = null) {
    I(n) || (n = z({}, n)), r != null && !q(r) && (r = null);
    const i = Cr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const h = i.app = {
      _uid: io++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Uo,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && I(a.install) ? (o.add(a), a.install(h, ...p)) : I(a) && (o.add(a), a(h, ...p))), h;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), h;
      },
      component(a, p) {
        return p ? (i.components[a] = p, h) : i.components[a];
      },
      directive(a, p) {
        return p ? (i.directives[a] = p, h) : i.directives[a];
      },
      mount(a, p, C) {
        if (!f) {
          const S = h._ceVNode || ye(n, r);
          return S.appContext = i, C === !0 ? C = "svg" : C === !1 && (C = void 0), e(S, a, C), f = !0, h._container = a, a.__vue_app__ = h, en(S.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        f && (Oe(
          l,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(a, p) {
        return i.provides[a] = p, h;
      },
      runWithContext(a) {
        const p = nt;
        nt = h;
        try {
          return a();
        } finally {
          nt = p;
        }
      }
    };
    return h;
  };
}
let nt = null;
function lo(e, t) {
  if (X) {
    let s = X.provides;
    const n = X.parent && X.parent.provides;
    n === s && (s = X.provides = Object.create(n)), s[e] = t;
  }
}
function jt(e, t, s = !1) {
  const n = X || ge;
  if (n || nt) {
    let r = nt ? nt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && I(t) ? t.call(n && n.proxy) : t;
  }
}
const Tr = {}, Er = () => Object.create(Tr), Ar = (e) => Object.getPrototypeOf(e) === Tr;
function co(e, t, s, n = !1) {
  const r = {}, i = Er();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Or(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : Pi(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function fo(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = L(r), [f] = e.propsOptions;
  let h = !1;
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
        if (rs(e.emitsOptions, C))
          continue;
        const S = t[C];
        if (f)
          if (N(i, C))
            S !== i[C] && (i[C] = S, h = !0);
          else {
            const R = me(C);
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
          S !== i[C] && (i[C] = S, h = !0);
      }
    }
  } else {
    Or(e, t, r, i) && (h = !0);
    let a;
    for (const p in l)
      (!t || // for camelCase
      !N(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = de(p)) === p || !N(t, a))) && (f ? s && // for camelCase
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
        (!t || !N(t, p)) && (delete i[p], h = !0);
  }
  h && Ie(e.attrs, "set", "");
}
function Or(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (dt(f))
        continue;
      const h = t[f];
      let a;
      r && N(r, a = me(f)) ? !i || !i.includes(a) ? s[a] = h : (l || (l = {}))[a] = h : rs(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, o = !0);
    }
  if (i) {
    const f = L(s), h = l || $;
    for (let a = 0; a < i.length; a++) {
      const p = i[a];
      s[p] = Os(
        r,
        f,
        p,
        h[p],
        e,
        !N(h, p)
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
        const { propsDefaults: h } = r;
        if (s in h)
          n = h[s];
        else {
          const a = Ot(r);
          n = h[s] = f.call(
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
    ] && (n === "" || n === de(s)) && (n = !0));
  }
  return n;
}
const uo = /* @__PURE__ */ new WeakMap();
function Pr(e, t, s = !1) {
  const n = s ? uo : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!I(e)) {
    const a = (p) => {
      f = !0;
      const [C, S] = Pr(p, t, !0);
      z(o, C), S && l.push(...S);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f)
    return q(e) && n.set(e, Qe), Qe;
  if (O(i))
    for (let a = 0; a < i.length; a++) {
      const p = me(i[a]);
      mn(p) && (o[p] = $);
    }
  else if (i)
    for (const a in i) {
      const p = me(a);
      if (mn(p)) {
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
  const h = [o, l];
  return q(e) && n.set(e, h), h;
}
function mn(e) {
  return e[0] !== "$" && !dt(e);
}
const Zs = (e) => e[0] === "_" || e === "$stable", Xs = (e) => O(e) ? e.map(Ae) : [Ae(e)], ao = (e, t, s) => {
  if (t._n)
    return t;
  const n = Wi((...r) => Xs(t(...r)), s);
  return n._c = !1, n;
}, Rr = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (Zs(r)) continue;
    const i = e[r];
    if (I(i))
      t[r] = ao(r, i, n);
    else if (i != null) {
      const o = Xs(i);
      t[r] = () => o;
    }
  }
}, Ir = (e, t) => {
  const s = Xs(t);
  e.slots.default = () => s;
}, Mr = (e, t, s) => {
  for (const n in t)
    (s || !Zs(n)) && (e[n] = t[n]);
}, ho = (e, t, s) => {
  const n = e.slots = Er();
  if (e.vnode.shapeFlag & 32) {
    const r = t.__;
    r && ys(n, "__", r, !0);
    const i = t._;
    i ? (Mr(n, t, s), s && ys(n, "_", i, !0)) : Rr(t, n);
  } else t && Ir(e, t);
}, po = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = $;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? i = !1 : Mr(r, t, s) : (i = !t.$stable, Rr(t, r)), o = t;
  } else t && (Ir(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Zs(l) && o[l] == null && delete r[l];
}, le = Oo;
function go(e) {
  return _o(e);
}
function _o(e, t) {
  const s = Qt();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: f,
    setText: h,
    setElementText: a,
    parentNode: p,
    nextSibling: C,
    setScopeId: S = _e,
    insertStaticContent: R
  } = e, M = (c, u, d, m = null, g = null, _ = null, x = void 0, v = null, y = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !at(c, u) && (m = Ft(c), xe(c, g, _, !0), c = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: b, ref: E, shapeFlag: w } = u;
    switch (b) {
      case is:
        J(c, u, d, m);
        break;
      case Ve:
        D(c, u, d, m);
        break;
      case Ht:
        c == null && B(u, d, m, x);
        break;
      case ce:
        Rt(
          c,
          u,
          d,
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
          d,
          m,
          g,
          _,
          x,
          v,
          y
        ) : w & 6 ? It(
          c,
          u,
          d,
          m,
          g,
          _,
          x,
          v,
          y
        ) : (w & 64 || w & 128) && b.process(
          c,
          u,
          d,
          m,
          g,
          _,
          x,
          v,
          y,
          ct
        );
    }
    E != null && g ? _t(E, c && c.ref, _, u || c, !u) : E == null && c && c.ref != null && _t(c.ref, null, _, c, !0);
  }, J = (c, u, d, m) => {
    if (c == null)
      n(
        u.el = l(u.children),
        d,
        m
      );
    else {
      const g = u.el = c.el;
      u.children !== c.children && h(g, u.children);
    }
  }, D = (c, u, d, m) => {
    c == null ? n(
      u.el = f(u.children || ""),
      d,
      m
    ) : u.el = c.el;
  }, B = (c, u, d, m) => {
    [c.el, c.anchor] = R(
      c.children,
      u,
      d,
      m,
      c.el,
      c.anchor
    );
  }, U = ({ el: c, anchor: u }, d, m) => {
    let g;
    for (; c && c !== u; )
      g = C(c), n(c, d, m), c = g;
    n(u, d, m);
  }, A = ({ el: c, anchor: u }) => {
    let d;
    for (; c && c !== u; )
      d = C(c), r(c), c = d;
    r(u);
  }, K = (c, u, d, m, g, _, x, v, y) => {
    u.type === "svg" ? x = "svg" : u.type === "math" && (x = "mathml"), c == null ? ae(
      u,
      d,
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
  }, ae = (c, u, d, m, g, _, x, v) => {
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
      _s(c, _),
      x,
      v
    ), P && qe(c, null, m, "created"), he(y, c, c.scopeId, x, m), E) {
      for (const W in E)
        W !== "value" && !dt(W) && i(y, W, null, E[W], _, m);
      "value" in E && i(y, "value", null, E.value, _), (b = E.onVnodeBeforeMount) && Te(b, m, c);
    }
    P && qe(c, null, m, "beforeMount");
    const F = mo(g, T);
    F && T.beforeEnter(y), n(y, u, d), ((b = E && E.onVnodeMounted) || F || P) && le(() => {
      b && Te(b, m, c), F && T.enter(y), P && qe(c, null, m, "mounted");
    }, g);
  }, he = (c, u, d, m, g) => {
    if (d && S(c, d), m)
      for (let _ = 0; _ < m.length; _++)
        S(c, m[_]);
    if (g) {
      let _ = g.subTree;
      if (u === _ || $r(_.type) && (_.ssContent === u || _.ssFallback === u)) {
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
  }, ve = (c, u, d, m, g, _, x, v, y = 0) => {
    for (let b = y; b < c.length; b++) {
      const E = c[b] = v ? Le(c[b]) : Ae(c[b]);
      M(
        null,
        E,
        u,
        d,
        m,
        g,
        _,
        x,
        v
      );
    }
  }, Pt = (c, u, d, m, g, _, x) => {
    const v = u.el = c.el;
    let { patchFlag: y, dynamicChildren: b, dirs: E } = u;
    y |= c.patchFlag & 16;
    const w = c.props || $, T = u.props || $;
    let P;
    if (d && Ge(d, !1), (P = T.onVnodeBeforeUpdate) && Te(P, d, u, c), E && qe(u, c, d, "beforeUpdate"), d && Ge(d, !0), (w.innerHTML && T.innerHTML == null || w.textContent && T.textContent == null) && a(v, ""), b ? Ue(
      c.dynamicChildren,
      b,
      v,
      d,
      m,
      _s(u, g),
      _
    ) : x || H(
      c,
      u,
      v,
      null,
      d,
      m,
      _s(u, g),
      _,
      !1
    ), y > 0) {
      if (y & 16)
        ot(v, w, T, d, g);
      else if (y & 2 && w.class !== T.class && i(v, "class", null, T.class, g), y & 4 && i(v, "style", w.style, T.style, g), y & 8) {
        const F = u.dynamicProps;
        for (let W = 0; W < F.length; W++) {
          const j = F[W], ne = w[j], re = T[j];
          (re !== ne || j === "value") && i(v, j, ne, re, g, d);
        }
      }
      y & 1 && c.children !== u.children && a(v, u.children);
    } else !x && b == null && ot(v, w, T, d, g);
    ((P = T.onVnodeUpdated) || E) && le(() => {
      P && Te(P, d, u, c), E && qe(u, c, d, "updated");
    }, m);
  }, Ue = (c, u, d, m, g, _, x) => {
    for (let v = 0; v < u.length; v++) {
      const y = c[v], b = u[v], E = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !at(y, b) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 198) ? p(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
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
  }, ot = (c, u, d, m, g) => {
    if (u !== d) {
      if (u !== $)
        for (const _ in u)
          !dt(_) && !(_ in d) && i(
            c,
            _,
            u[_],
            null,
            g,
            m
          );
      for (const _ in d) {
        if (dt(_)) continue;
        const x = d[_], v = u[_];
        x !== v && _ !== "value" && i(c, _, v, x, g, m);
      }
      "value" in d && i(c, "value", u.value, d.value, g);
    }
  }, Rt = (c, u, d, m, g, _, x, v, y) => {
    const b = u.el = c ? c.el : l(""), E = u.anchor = c ? c.anchor : l("");
    let { patchFlag: w, dynamicChildren: T, slotScopeIds: P } = u;
    P && (v = v ? v.concat(P) : P), c == null ? (n(b, d, m), n(E, d, m), ve(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      d,
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
      d,
      g,
      _,
      x,
      v
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || g && u === g.subTree) && Fr(
      c,
      u,
      !0
      /* shallow */
    )) : H(
      c,
      u,
      d,
      E,
      g,
      _,
      x,
      v,
      y
    );
  }, It = (c, u, d, m, g, _, x, v, y) => {
    u.slotScopeIds = v, c == null ? u.shapeFlag & 512 ? g.ctx.activate(
      u,
      d,
      m,
      x,
      y
    ) : ls(
      u,
      d,
      m,
      g,
      _,
      x,
      y
    ) : sn(c, u, y);
  }, ls = (c, u, d, m, g, _, x) => {
    const v = c.component = jo(
      c,
      m,
      g
    );
    if (br(c) && (v.ctx.renderer = ct), $o(v, !1, x), v.asyncDep) {
      if (g && g.registerDep(v, ee, x), !c.el) {
        const y = v.subTree = ye(Ve);
        D(null, y, u, d);
      }
    } else
      ee(
        v,
        c,
        u,
        d,
        g,
        _,
        x
      );
  }, sn = (c, u, d) => {
    const m = u.component = c.component;
    if (Eo(c, u, d))
      if (m.asyncDep && !m.asyncResolved) {
        k(m, u, d);
        return;
      } else
        m.next = u, m.update();
    else
      u.el = c.el, m.vnode = u;
  }, ee = (c, u, d, m, g, _, x) => {
    const v = () => {
      if (c.isMounted) {
        let { next: w, bu: T, u: P, parent: F, vnode: W } = c;
        {
          const Se = Nr(c);
          if (Se) {
            w && (w.el = W.el, k(c, w, x)), Se.asyncDep.then(() => {
              c.isUnmounted || v();
            });
            return;
          }
        }
        let j = w, ne;
        Ge(c, !1), w ? (w.el = W.el, k(c, w, x)) : w = W, T && us(T), (ne = w.props && w.props.onVnodeBeforeUpdate) && Te(ne, F, w, W), Ge(c, !0);
        const re = yn(c), we = c.subTree;
        c.subTree = re, M(
          we,
          re,
          // parent may have changed if it's in a teleport
          p(we.el),
          // anchor may have changed if it's in a fragment
          Ft(we),
          c,
          g,
          _
        ), w.el = re.el, j === null && Ao(c, re.el), P && le(P, g), (ne = w.props && w.props.onVnodeUpdated) && le(
          () => Te(ne, F, w, W),
          g
        );
      } else {
        let w;
        const { el: T, props: P } = u, { bm: F, m: W, parent: j, root: ne, type: re } = c, we = mt(u);
        Ge(c, !1), F && us(F), !we && (w = P && P.onVnodeBeforeMount) && Te(w, j, u), Ge(c, !0);
        {
          ne.ce && // @ts-expect-error _def is private
          ne.ce._def.shadowRoot !== !1 && ne.ce._injectChildStyle(re);
          const Se = c.subTree = yn(c);
          M(
            null,
            Se,
            d,
            m,
            c,
            g,
            _
          ), u.el = Se.el;
        }
        if (W && le(W, g), !we && (w = P && P.onVnodeMounted)) {
          const Se = u;
          le(
            () => Te(w, j, Se),
            g
          );
        }
        (u.shapeFlag & 256 || j && mt(j.vnode) && j.vnode.shapeFlag & 256) && c.a && le(c.a, g), c.isMounted = !0, u = d = m = null;
      }
    };
    c.scope.on();
    const y = c.effect = new Gn(v);
    c.scope.off();
    const b = c.update = y.run.bind(y), E = c.job = y.runIfDirty.bind(y);
    E.i = c, E.id = c.uid, y.scheduler = () => Gs(E), Ge(c, !0), b();
  }, k = (c, u, d) => {
    u.component = c;
    const m = c.vnode.props;
    c.vnode = u, c.next = null, fo(c, u.props, m, d), po(c, u.children, d), Me(), hn(c), Fe();
  }, H = (c, u, d, m, g, _, x, v, y = !1) => {
    const b = c && c.children, E = c ? c.shapeFlag : 0, w = u.children, { patchFlag: T, shapeFlag: P } = u;
    if (T > 0) {
      if (T & 128) {
        Mt(
          b,
          w,
          d,
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
          d,
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
    P & 8 ? (E & 16 && lt(b, g, _), w !== b && a(d, w)) : E & 16 ? P & 16 ? Mt(
      b,
      w,
      d,
      m,
      g,
      _,
      x,
      v,
      y
    ) : lt(b, g, _, !0) : (E & 8 && a(d, ""), P & 16 && ve(
      w,
      d,
      m,
      g,
      _,
      x,
      v,
      y
    ));
  }, Ke = (c, u, d, m, g, _, x, v, y) => {
    c = c || Qe, u = u || Qe;
    const b = c.length, E = u.length, w = Math.min(b, E);
    let T;
    for (T = 0; T < w; T++) {
      const P = u[T] = y ? Le(u[T]) : Ae(u[T]);
      M(
        c[T],
        P,
        d,
        null,
        g,
        _,
        x,
        v,
        y
      );
    }
    b > E ? lt(
      c,
      g,
      _,
      !0,
      !1,
      w
    ) : ve(
      u,
      d,
      m,
      g,
      _,
      x,
      v,
      y,
      w
    );
  }, Mt = (c, u, d, m, g, _, x, v, y) => {
    let b = 0;
    const E = u.length;
    let w = c.length - 1, T = E - 1;
    for (; b <= w && b <= T; ) {
      const P = c[b], F = u[b] = y ? Le(u[b]) : Ae(u[b]);
      if (at(P, F))
        M(
          P,
          F,
          d,
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
      const P = c[w], F = u[T] = y ? Le(u[T]) : Ae(u[T]);
      if (at(P, F))
        M(
          P,
          F,
          d,
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
            u[b] = y ? Le(u[b]) : Ae(u[b]),
            d,
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
        const oe = u[b] = y ? Le(u[b]) : Ae(u[b]);
        oe.key != null && W.set(oe.key, b);
      }
      let j, ne = 0;
      const re = T - F + 1;
      let we = !1, Se = 0;
      const ft = new Array(re);
      for (b = 0; b < re; b++) ft[b] = 0;
      for (b = P; b <= w; b++) {
        const oe = c[b];
        if (ne >= re) {
          xe(oe, g, _, !0);
          continue;
        }
        let Ce;
        if (oe.key != null)
          Ce = W.get(oe.key);
        else
          for (j = F; j <= T; j++)
            if (ft[j - F] === 0 && at(oe, u[j])) {
              Ce = j;
              break;
            }
        Ce === void 0 ? xe(oe, g, _, !0) : (ft[Ce - F] = b + 1, Ce >= Se ? Se = Ce : we = !0, M(
          oe,
          u[Ce],
          d,
          null,
          g,
          _,
          x,
          v,
          y
        ), ne++);
      }
      const on = we ? bo(ft) : Qe;
      for (j = on.length - 1, b = re - 1; b >= 0; b--) {
        const oe = F + b, Ce = u[oe], ln = oe + 1 < E ? u[oe + 1].el : m;
        ft[b] === 0 ? M(
          null,
          Ce,
          d,
          ln,
          g,
          _,
          x,
          v,
          y
        ) : we && (j < 0 || b !== on[j] ? ke(Ce, d, ln, 2) : j--);
      }
    }
  }, ke = (c, u, d, m, g = null) => {
    const { el: _, type: x, transition: v, children: y, shapeFlag: b } = c;
    if (b & 6) {
      ke(c.component.subTree, u, d, m);
      return;
    }
    if (b & 128) {
      c.suspense.move(u, d, m);
      return;
    }
    if (b & 64) {
      x.move(c, u, d, ct);
      return;
    }
    if (x === ce) {
      n(_, u, d);
      for (let w = 0; w < y.length; w++)
        ke(y[w], u, d, m);
      n(c.anchor, u, d);
      return;
    }
    if (x === Ht) {
      U(c, u, d);
      return;
    }
    if (m !== 2 && b & 1 && v)
      if (m === 0)
        v.beforeEnter(_), n(_, u, d), le(() => v.enter(_), g);
      else {
        const { leave: w, delayLeave: T, afterLeave: P } = v, F = () => {
          c.ctx.isUnmounted ? r(_) : n(_, u, d);
        }, W = () => {
          w(_, () => {
            F(), P && P();
          });
        };
        T ? T(_, F, W) : W();
      }
    else
      n(_, u, d);
  }, xe = (c, u, d, m = !1, g = !1) => {
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
    if (w === -2 && (g = !1), v != null && (Me(), _t(v, null, d, c, !0), Fe()), P != null && (u.renderCache[P] = void 0), E & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const F = E & 1 && T, W = !mt(c);
    let j;
    if (W && (j = x && x.onVnodeBeforeUnmount) && Te(j, u, c), E & 6)
      Yr(c.component, d, m);
    else {
      if (E & 128) {
        c.suspense.unmount(d, m);
        return;
      }
      F && qe(c, null, u, "beforeUnmount"), E & 64 ? c.type.remove(
        c,
        u,
        d,
        ct,
        m
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== ce || w > 0 && w & 64) ? lt(
        b,
        u,
        d,
        !1,
        !0
      ) : (_ === ce && w & 384 || !g && E & 16) && lt(y, u, d), m && nn(c);
    }
    (W && (j = x && x.onVnodeUnmounted) || F) && le(() => {
      j && Te(j, u, c), F && qe(c, null, u, "unmounted");
    }, d);
  }, nn = (c) => {
    const { type: u, el: d, anchor: m, transition: g } = c;
    if (u === ce) {
      zr(d, m);
      return;
    }
    if (u === Ht) {
      A(c);
      return;
    }
    const _ = () => {
      r(d), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (c.shapeFlag & 1 && g && !g.persisted) {
      const { leave: x, delayLeave: v } = g, y = () => x(d, _);
      v ? v(c.el, _, y) : y();
    } else
      _();
  }, zr = (c, u) => {
    let d;
    for (; c !== u; )
      d = C(c), r(c), c = d;
    r(u);
  }, Yr = (c, u, d) => {
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
    bn(y), bn(b), m && us(m), E && O(w) && w.forEach((T) => {
      E.renderCache[T] = void 0;
    }), g.stop(), _ && (_.flags |= 8, xe(x, c, u, d)), v && le(v, u), le(() => {
      c.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve());
  }, lt = (c, u, d, m = !1, g = !1, _ = 0) => {
    for (let x = _; x < c.length; x++)
      xe(c[x], u, d, m, g);
  }, Ft = (c) => {
    if (c.shapeFlag & 6)
      return Ft(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = C(c.anchor || c.el), d = u && u[Vi];
    return d ? C(d) : u;
  };
  let cs = !1;
  const rn = (c, u, d) => {
    c == null ? u._vnode && xe(u._vnode, null, null, !0) : M(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      d
    ), u._vnode = c, cs || (cs = !0, hn(), dr(), cs = !1);
  }, ct = {
    p: M,
    um: xe,
    m: ke,
    r: nn,
    mt: ls,
    mc: ve,
    pc: H,
    pbc: Ue,
    n: Ft,
    o: e
  };
  return {
    render: rn,
    hydrate: void 0,
    createApp: oo(rn)
  };
}
function _s({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Ge({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function mo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Fr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (O(n) && O(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Le(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && Fr(o, l)), l.type === is && (l.el = o.el), l.type === Ve && !l.el && (l.el = o.el);
    }
}
function bo(e) {
  const t = e.slice(), s = [0];
  let n, r, i, o, l;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const h = e[n];
    if (h !== 0) {
      if (r = s[s.length - 1], e[r] < h) {
        t[n] = r, s.push(n);
        continue;
      }
      for (i = 0, o = s.length - 1; i < o; )
        l = i + o >> 1, e[s[l]] < h ? i = l + 1 : o = l;
      h < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0; )
    s[i] = o, o = t[o];
  return s;
}
function Nr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Nr(t);
}
function bn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const yo = Symbol.for("v-scx"), vo = () => jt(yo);
function $t(e, t, s) {
  return Dr(e, t, s);
}
function Dr(e, t, s = $) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = z({}, s), f = t && n || !t && i !== "post";
  let h;
  if (Tt) {
    if (i === "sync") {
      const S = vo();
      h = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!f) {
      const S = () => {
      };
      return S.stop = _e, S.resume = _e, S.pause = _e, S;
    }
  }
  const a = X;
  l.call = (S, R, M) => Oe(S, a, R, M);
  let p = !1;
  i === "post" ? l.scheduler = (S) => {
    le(S, a && a.suspense);
  } : i !== "sync" && (p = !0, l.scheduler = (S, R) => {
    R ? S() : Gs(S);
  }), l.augmentJob = (S) => {
    t && (S.flags |= 4), p && (S.flags |= 2, a && (S.id = a.uid, S.i = a));
  };
  const C = ji(e, t, l);
  return Tt && (h ? h.push(C) : f && C()), C;
}
function xo(e, t, s) {
  const n = this.proxy, r = G(e) ? e.includes(".") ? Lr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  I(t) ? i = t : (i = t.handler, s = t);
  const o = Ot(this), l = Dr(r, i.bind(n), s);
  return o(), l;
}
function Lr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const wo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${me(t)}Modifiers`] || e[`${de(t)}Modifiers`];
function So(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || $;
  let r = s;
  const i = t.startsWith("update:"), o = i && wo(n, t.slice(7));
  o && (o.trim && (r = s.map((a) => G(a) ? a.trim() : a)), o.number && (r = s.map(si)));
  let l, f = n[l = fs(t)] || // also try camelCase event handler (#2249)
  n[l = fs(me(t))];
  !f && i && (f = n[l = fs(de(t))]), f && Oe(
    f,
    e,
    6,
    r
  );
  const h = n[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Oe(
      h,
      e,
      6,
      r
    );
  }
}
function jr(e, t, s = !1) {
  const n = t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!I(e)) {
    const f = (h) => {
      const a = jr(h, t, !0);
      a && (l = !0, z(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (q(e) && n.set(e, null), null) : (O(i) ? i.forEach((f) => o[f] = null) : z(o, i), q(e) && n.set(e, o), o);
}
function rs(e, t) {
  return !e || !zt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), N(e, t[0].toLowerCase() + t.slice(1)) || N(e, de(t)) || N(e, t));
}
function yn(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: f,
    render: h,
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
        h.call(
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
      ), B = t.props ? l : Co(l);
    }
  } catch (A) {
    yt.length = 0, ts(A, e, 1), D = ye(Ve);
  }
  let U = D;
  if (B && M !== !1) {
    const A = Object.keys(B), { shapeFlag: K } = U;
    A.length && K & 7 && (i && A.some(Ns) && (B = To(
      B,
      i
    )), U = rt(U, B, !1, !0));
  }
  return s.dirs && (U = rt(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(s.dirs) : s.dirs), s.transition && Js(U, s.transition), D = U, kt(J), D;
}
const Co = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || zt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, To = (e, t) => {
  const s = {};
  for (const n in e)
    (!Ns(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Eo(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: o, children: l, patchFlag: f } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? vn(n, o, h) : !!o;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const C = a[p];
        if (o[C] !== n[C] && !rs(h, C))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? vn(n, o, h) : !0 : !!o;
  return !1;
}
function vn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (t[i] !== e[i] && !rs(s, i))
      return !0;
  }
  return !1;
}
function Ao({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const $r = (e) => e.__isSuspense;
function Oo(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : hr(e);
}
const ce = Symbol.for("v-fgt"), is = Symbol.for("v-txt"), Ve = Symbol.for("v-cmt"), Ht = Symbol.for("v-stc"), yt = [];
let ue = null;
function fe(e = !1) {
  yt.push(ue = e ? null : []);
}
function Po() {
  yt.pop(), ue = yt[yt.length - 1] || null;
}
let Ct = 1;
function xn(e, t = !1) {
  Ct += e, e < 0 && ue && t && (ue.hasOnce = !0);
}
function Hr(e) {
  return e.dynamicChildren = Ct > 0 ? ue || Qe : null, Po(), Ct > 0 && ue && ue.push(e), e;
}
function He(e, t, s, n, r, i) {
  return Hr(
    Br(
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
function vt(e, t, s, n, r) {
  return Hr(
    ye(
      e,
      t,
      s,
      n,
      r,
      !0
    )
  );
}
function Wr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function at(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vr = ({ key: e }) => e ?? null, Wt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? G(e) || Q(e) || I(e) ? { i: ge, r: e, k: t, f: !!s } : e : null);
function Br(e, t = null, s = null, n = 0, r = null, i = e === ce ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vr(t),
    ref: t && Wt(t),
    scopeId: gr,
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
    ctx: ge
  };
  return l ? (Qs(f, s), i & 128 && e.normalize(f)) : s && (f.shapeFlag |= G(s) ? 8 : 16), Ct > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ue && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ue.push(f), f;
}
const ye = Ro;
function Ro(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === Xi) && (e = Ve), Wr(e)) {
    const l = rt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Qs(l, s), Ct > 0 && !i && ue && (l.shapeFlag & 6 ? ue[ue.indexOf(e)] = l : ue.push(l)), l.patchFlag = -2, l;
  }
  if (Bo(e) && (e = e.__vccOpts), t) {
    t = Io(t);
    let { class: l, style: f } = t;
    l && !G(l) && (t.class = js(l)), q(f) && (ks(f) && !O(f) && (f = z({}, f)), t.style = Et(f));
  }
  const o = G(e) ? 1 : $r(e) ? 128 : Bi(e) ? 64 : q(e) ? 4 : I(e) ? 2 : 0;
  return Br(
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
function Io(e) {
  return e ? ks(e) || Ar(e) ? z({}, e) : e : null;
}
function rt(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e, h = t ? No(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Vr(h),
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
    patchFlag: t && e.type !== ce ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && rt(e.ssContent),
    ssFallback: e.ssFallback && rt(e.ssFallback),
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
function Mo(e = " ", t = 0) {
  return ye(is, null, e, t);
}
function Fo(e = "", t = !1) {
  return t ? (fe(), vt(Ve, null, e)) : ye(Ve, null, e);
}
function Ae(e) {
  return e == null || typeof e == "boolean" ? ye(Ve) : O(e) ? ye(
    ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Wr(e) ? Le(e) : ye(is, null, String(e));
}
function Le(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : rt(e);
}
function Qs(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (O(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Qs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !Ar(t) ? t._ctx = ge : r === 3 && ge && (ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else I(t) ? (t = { default: t, _ctx: ge }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Mo(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function No(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = js([t.class, n.class]));
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
const Do = Cr();
let Lo = 0;
function jo(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Do, i = {
    uid: Lo++,
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
    scope: new fi(
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
    propsOptions: Pr(n, r),
    emitsOptions: jr(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: $,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: $,
    data: $,
    props: $,
    attrs: $,
    slots: $,
    refs: $,
    setupState: $,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = So.bind(null, i), e.ce && e.ce(i), i;
}
let X = null;
const Ur = () => X || ge;
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
    (s) => X = s
  ), Ps = t(
    "__VUE_SSR_SETTERS__",
    (s) => Tt = s
  );
}
const Ot = (e) => {
  const t = X;
  return Gt(e), e.scope.on(), () => {
    e.scope.off(), Gt(t);
  };
}, wn = () => {
  X && X.scope.off(), Gt(null);
};
function Kr(e) {
  return e.vnode.shapeFlag & 4;
}
let Tt = !1;
function $o(e, t = !1, s = !1) {
  t && Ps(t);
  const { props: n, children: r } = e.vnode, i = Kr(e);
  co(e, n, i, t), ho(e, r, s || t);
  const o = i ? Ho(e, t) : void 0;
  return t && Ps(!1), o;
}
function Ho(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Qi);
  const { setup: n } = s;
  if (n) {
    Me();
    const r = e.setupContext = n.length > 1 ? Vo(e) : null, i = Ot(e), o = At(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Wn(o);
    if (Fe(), i(), (l || e.sp) && !mt(e) && _r(e), l) {
      if (o.then(wn, wn), t)
        return o.then((f) => {
          Sn(e, f);
        }).catch((f) => {
          ts(f, e, 0);
        });
      e.asyncDep = o;
    } else
      Sn(e, o);
  } else
    kr(e);
}
function Sn(e, t, s) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) && (e.setupState = fr(t)), kr(e);
}
function kr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || _e);
  {
    const r = Ot(e);
    Me();
    try {
      eo(e);
    } finally {
      Fe(), r();
    }
  }
}
const Wo = {
  get(e, t) {
    return Z(e, "get", ""), e[t];
  }
};
function Vo(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Wo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function en(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(fr(Ri(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in bt)
        return bt[s](e);
    },
    has(t, s) {
      return s in t || s in bt;
    }
  })) : e.proxy;
}
function Bo(e) {
  return I(e) && "__vccOpts" in e;
}
const Rs = (e, t) => Di(e, t, Tt), Uo = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Is;
const Cn = typeof window < "u" && window.trustedTypes;
if (Cn)
  try {
    Is = /* @__PURE__ */ Cn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const qr = Is ? (e) => Is.createHTML(e) : (e) => e, Ko = "http://www.w3.org/2000/svg", ko = "http://www.w3.org/1998/Math/MathML", Re = typeof document < "u" ? document : null, Tn = Re && /* @__PURE__ */ Re.createElement("template"), qo = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Re.createElementNS(Ko, e) : t === "mathml" ? Re.createElementNS(ko, e) : s ? Re.createElement(e, { is: s }) : Re.createElement(e);
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
      Tn.innerHTML = qr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Tn.content;
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
}, Go = Symbol("_vtc");
function Jo(e, t, s) {
  const n = e[Go];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const En = Symbol("_vod"), zo = Symbol("_vsh"), Gr = Symbol("");
function Yo(e) {
  const t = Ur();
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
  vr(() => {
    hr(n);
  }), zs(() => {
    $t(n, _e, { flush: "post" });
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
  else if (e.type === ce)
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
    s[Gr] = n;
  }
}
const Zo = /(^|;)\s*display\s*:/;
function Xo(e, t, s) {
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
      const o = n[Gr];
      o && (s += ";" + o), n.cssText = s, i = Zo.test(s);
    }
  } else t && e.removeAttribute("style");
  En in e && (e[En] = i ? n.display : "", e[zo] && (n.display = "none"));
}
const An = /\s*!important$/;
function Vt(e, t, s) {
  if (O(s))
    s.forEach((n) => Vt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Qo(e, t);
    An.test(s) ? e.setProperty(
      de(n),
      s.replace(An, ""),
      "important"
    ) : e[n] = s;
  }
}
const On = ["Webkit", "Moz", "ms"], ms = {};
function Qo(e, t) {
  const s = ms[t];
  if (s)
    return s;
  let n = me(t);
  if (n !== "filter" && n in e)
    return ms[t] = n;
  n = Bn(n);
  for (let r = 0; r < On.length; r++) {
    const i = On[r] + n;
    if (i in e)
      return ms[t] = i;
  }
  return t;
}
const Pn = "http://www.w3.org/1999/xlink";
function Rn(e, t, s, n, r, i = ci(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Pn, t.slice(6, t.length)) : e.setAttributeNS(Pn, t, s) : s == null || i && !Un(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Be(s) ? String(s) : s
  );
}
function In(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? qr(s) : s);
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
    l === "boolean" ? s = Un(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function el(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function tl(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Mn = Symbol("_vei");
function sl(e, t, s, n, r = null) {
  const i = e[Mn] || (e[Mn] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [l, f] = nl(t);
    if (n) {
      const h = i[t] = ol(
        n,
        r
      );
      el(e, l, h, f);
    } else o && (tl(e, l, o, f), i[t] = void 0);
  }
}
const Fn = /(?:Once|Passive|Capture)$/;
function nl(e) {
  let t;
  if (Fn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Fn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : de(e.slice(2)), t];
}
let bs = 0;
const rl = /* @__PURE__ */ Promise.resolve(), il = () => bs || (rl.then(() => bs = 0), bs = Date.now());
function ol(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Oe(
      ll(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = il(), s;
}
function ll(e, t) {
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
const Nn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, cl = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? Jo(e, n, o) : t === "style" ? Xo(e, s, n) : zt(t) ? Ns(t) || sl(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : fl(e, t, n, o)) ? (In(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Rn(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !G(n)) ? In(e, me(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Rn(e, t, n, o));
};
function fl(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Nn(t) && I(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Nn(t) && G(s) ? !1 : t in e;
}
const Dn = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ul(e, t, s) {
  const n = /* @__PURE__ */ it(e, t);
  Zt(n) && z(n, t);
  class r extends tn {
    constructor(o) {
      super(n, o, s);
    }
  }
  return r.def = n, r;
}
const al = typeof HTMLElement < "u" ? HTMLElement : class {
};
class tn extends al {
  constructor(t, s = {}, n = jn) {
    super(), this._def = t, this._props = s, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && n !== jn ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof tn) {
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
    this._connected = !1, ss(() => {
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
          const h = i[f];
          (h === Number || h && h.type === Number) && (f in this._props && (this._props[f] = cn(this._props[f])), (l || (l = /* @__PURE__ */ Object.create(null)))[me(f)] = !0);
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
          get: () => qs(s[n])
        });
  }
  _resolveProps(t) {
    const { props: s } = t, n = O(s) ? s : Object.keys(s || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && n.includes(r) && this._setProp(r, this[r]);
    for (const r of n.map(me))
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
    let n = s ? this.getAttribute(t) : Dn;
    const r = me(t);
    s && this._numberProps && this._numberProps[r] && (n = cn(n)), this._setProp(r, n, !1, !0);
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
    if (s !== this._props[t] && (s === Dn ? delete this._props[t] : (this._props[t] = s, t === "key" && this._app && (this._app._ceVNode.key = s)), r && this._instance && this._update(), n)) {
      const i = this._ob;
      i && i.disconnect(), s === !0 ? this.setAttribute(de(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(de(t), s + "") : s || this.removeAttribute(de(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), dl(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const s = ye(this._def, z(t, this._props));
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
        r(i, o), de(i) !== i && r(de(i), o);
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
            const h = s + "-s", a = document.createTreeWalker(f, 1);
            f.setAttribute(h, "");
            let p;
            for (; p = a.nextNode(); )
              p.setAttribute(h, "");
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
const hl = /* @__PURE__ */ z({ patchProp: cl }, qo);
let Ln;
function Jr() {
  return Ln || (Ln = go(hl));
}
const dl = (...e) => {
  Jr().render(...e);
}, jn = (...e) => {
  const t = Jr().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = gl(n);
    if (!r) return;
    const i = t._component;
    !I(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, pl(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function pl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function gl(e) {
  return G(e) ? document.querySelector(e) : e;
}
const $n = /* @__PURE__ */ it({
  __name: "Letter",
  props: {
    char: String,
    color: String
  },
  setup(e) {
    return (t, s) => (fe(), He("div", {
      style: Et({ color: e.color })
    }, kn(e.char), 5));
  }
}), _l = /* @__PURE__ */ it({
  __name: "Caret",
  props: {
    offset: Number
  },
  setup(e) {
    return (t, s) => (fe(), He("div", {
      className: "caret",
      style: Et({ left: e.offset + "ch" })
    }, null, 4));
  }
}), ml = ".caret[data-v-aeae7146]{position:absolute;width:.1em;height:1lh;border-radius:.05em;background-color:#000;transition:left .08s;animation-name:blink-aeae7146;animation-duration:.8s;animation-iteration-count:infinite;animation-timing-function:steps(2,jump-both)}@keyframes blink-aeae7146{0%{opacity:.9}to{opacity:.2}}", os = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, bl = /* @__PURE__ */ os(_l, [["styles", [ml]], ["__scopeId", "data-v-aeae7146"]]), yl = /* @__PURE__ */ it({
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
    Yo((l) => ({
      e6436472: r.value
    }));
    const t = e, s = mr("ref"), n = Rs(() => t.typedWord.slice(t.word.length)), r = Rs(() => t.wordStatus === "incorrect" ? o("incorrect") + " solid 0.1lh" : "transparent solid 0.1lh"), i = (l, f) => t.typedWord.charAt(f) === l ? "correct" : t.typedWord.charAt(f) != "" ? "incorrect" : t.wordStatus === "active" ? "active" : "passive", o = (l) => {
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
    return xr(async () => {
      t.wordStatus === "active" && (await ss(), s.value?.scrollIntoView({ behavior: "smooth", block: "center" }));
    }), (l, f) => (fe(), He("div", {
      class: "word",
      ref_key: "ref",
      ref: s
    }, [
      (fe(!0), He(ce, null, Cs(e.word, (h, a) => (fe(), vt($n, {
        key: a,
        char: h,
        color: o(i(h, a))
      }, null, 8, ["char", "color"]))), 128)),
      (fe(!0), He(ce, null, Cs(n.value, (h, a) => (fe(), vt($n, {
        key: "s" + a,
        char: h,
        color: o("incorrect")
      }, null, 8, ["char", "color"]))), 128)),
      e.wordStatus === "active" ? (fe(), vt(bl, {
        key: 0,
        offset: e.typedWord?.length || 0
      }, null, 8, ["offset"])) : Fo("", !0)
    ], 512));
  }
}), vl = ".word[data-v-595f7012]{display:flex;margin:.15lh .2em;position:relative;border-bottom:var(--e6436472)}", xl = /* @__PURE__ */ os(yl, [["styles", [vl]], ["__scopeId", "data-v-595f7012"]]), wl = { class: "wordSet" }, Sl = /* @__PURE__ */ it({
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
    return (n, r) => (fe(), He("div", wl, [
      (fe(!0), He(ce, null, Cs(e.wordList, (i, o) => (fe(), vt(xl, {
        key: i + o,
        word: i,
        typedWord: e.typedWordList[o] || "",
        wordStatus: s(i, o)
      }, null, 8, ["word", "typedWord", "wordStatus"]))), 128))
    ]));
  }
}), Cl = ".wordSet[data-v-0c65b6ed]{display:flex;flex-wrap:wrap;overflow:hidden;-webkit-user-select:none;user-select:none}", Tl = /* @__PURE__ */ os(Sl, [["styles", [Cl]], ["__scopeId", "data-v-0c65b6ed"]]), El = /* @__PURE__ */ it({
  __name: "TypingTest",
  props: {
    text: {
      type: String,
      required: !0
    }
  },
  emits: ["results_ready"],
  setup(e, { emit: t }) {
    const s = e, n = t, r = mr("typingTest"), i = s.text.split(" "), o = Ze([""]), l = Ze(0), f = Ze({}), h = Ze(0), a = Ze(-1), p = Ze([]);
    zs(async () => {
      await ss(), r.value?.focus(), document.addEventListener("click", () => r.value?.focus());
    });
    const C = (S) => {
      if (a.value === -2)
        return;
      S.preventDefault();
      const R = o.value[o.value.length - 1] || "";
      if (S.key === " ") {
        o.value.length !== i.length && (i[l.value]?.length !== R?.length && (h.value = h.value + ((i[l.value]?.length || 0) - R.length)), o.value = [...o.value, ""], l.value++, p.value = [...p.value, { key: "Space", time: Date.now() }]);
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
        const M = i[l.value]?.charAt(R?.length || 0);
        S.key !== M && h.value++;
        let J = o.value.slice(0, -1);
        if (J.push(R + S.key), o.value = J, p.value = [...p.value, { key: S.key, time: Date.now() }], o.value.length === i.length && (R?.length || 0) === (i[l.value]?.length || 0) - 1) {
          const D = (Date.now() - a.value) / 1e3;
          a.value = -2;
          const B = i.flatMap(
            (K, ae) => K.split("").map(
              (he, ve) => o.value[ae]?.charAt(ve) !== he ? 1 : 0
            )
          ).reduce((K, ae) => K + ae, 0), U = h.value - B, A = i.length / (D / 60);
          f.value = {
            time_taken: D,
            uncorrected_errors: B,
            corrected_errors: U,
            wpm: A,
            text_length: i.join("").length + (i.length - 1),
            keystroke_log: p.value
          }, n("results_ready", { results: f.value });
        }
      }
    };
    return (S, R) => (fe(), He("div", {
      class: "test",
      ref_key: "typingTest",
      ref: r,
      tabindex: "0",
      onKeydown: C
    }, [
      ye(Tl, {
        wordList: qs(i),
        typedWordList: o.value,
        activeWordIndex: l.value
      }, null, 8, ["wordList", "typedWordList", "activeWordIndex"])
    ], 544));
  }
}), Al = ".test[data-v-8adcdd83]{margin:0 auto;height:4.2lh;overflow:hidden;outline:none;transition:color .5s ease;font-family:monospace;font-size:24px}.test[data-v-8adcdd83]:focus-within{filter:none}", Ol = /* @__PURE__ */ os(El, [["styles", [Al]], ["__scopeId", "data-v-8adcdd83"]]), Pl = /* @__PURE__ */ ul(Ol);
customElements.define("typing-test", Pl);
