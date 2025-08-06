/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function En(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ae = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, wn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], G = () => {
}, Nn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), L = Object.assign, bn = Object.prototype.hasOwnProperty, Ge = (e, t) => bn.call(e, t), m = Array.isArray, X = (e) => We(e) === "[object Map]", Dt = (e) => We(e) === "[object Set]", w = (e) => typeof e == "function", C = (e) => typeof e == "string", ee = (e) => typeof e == "symbol", b = (e) => e !== null && typeof e == "object", Sn = (e) => (b(e) || w(e)) && w(e.then) && w(e.catch), Tt = Object.prototype.toString, We = (e) => Tt.call(e), Vt = (e) => We(e).slice(8, -1), Rt = (e) => We(e) === "[object Object]", ot = (e) => C(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, It = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ct = It((e) => e.charAt(0).toUpperCase() + e.slice(1)), On = It(
  (e) => e ? `on${Ct(e)}` : ""
), B = (e, t) => !Object.is(e, t);
let yt;
const Me = () => yt || (yt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function we(e) {
  if (m(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = C(s) ? Vn(s) : we(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (C(e) || b(e))
    return e;
}
const xn = /;(?![^(]*\))/g, Dn = /:([^]+)/, Tn = /\/\*[^]*?\*\//g;
function Vn(e) {
  const t = {};
  return e.replace(Tn, "").split(xn).forEach((n) => {
    if (n) {
      const s = n.split(Dn);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function it(e) {
  let t = "";
  if (C(e))
    t = e;
  else if (m(e))
    for (let n = 0; n < e.length; n++) {
      const s = it(e[n]);
      s && (t += s + " ");
    }
  else if (b(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const At = (e) => !!(e && e.__v_isRef === !0), kt = (e) => C(e) ? e : e == null ? "" : m(e) || b(e) && (e.toString === Tt || !w(e.toString)) ? At(e) ? kt(e.value) : JSON.stringify(e, $t, 2) : String(e), $t = (e, t) => At(t) ? $t(e, t.value) : X(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[Ke(s, o) + " =>"] = r, n),
    {}
  )
} : Dt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ke(n))
} : ee(t) ? Ke(t) : b(t) && !m(t) && !Rt(t) ? String(t) : t, Ke = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ee(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function H(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let v;
const Ue = /* @__PURE__ */ new WeakSet();
class Rn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ue.has(this) && (Ue.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Mt(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Et(this), Pt(this);
    const t = v, n = I;
    v = this, I = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && v !== this && H(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Lt(this), v = t, I = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        lt(t);
      this.deps = this.depsTail = void 0, Et(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ue.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Xe(this) && this.run();
  }
  get dirty() {
    return Xe(this);
  }
}
let Wt = 0, he, _e;
function Mt(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = _e, _e = e;
    return;
  }
  e.next = he, he = e;
}
function ct() {
  Wt++;
}
function at() {
  if (--Wt > 0)
    return;
  if (_e) {
    let t = _e;
    for (_e = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; he; ) {
    let t = he;
    for (he = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Pt(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Lt(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), lt(s), In(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Xe(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ht(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ht(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ve) || (e.globalVersion = ve, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Xe(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = v, s = I;
  v = e, I = !0;
  try {
    Pt(e);
    const r = e.fn(e._value);
    (t.version === 0 || B(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    v = n, I = s, Lt(e), e.flags &= -3;
  }
}
function lt(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      lt(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function In(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let I = !0;
const Ft = [];
function fe() {
  Ft.push(I), I = !1;
}
function pe() {
  const e = Ft.pop();
  I = e === void 0 ? !0 : e;
}
function Et(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = v;
    v = void 0;
    try {
      t();
    } finally {
      v = n;
    }
  }
}
let ve = 0;
class Cn {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ut {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!v || !I || v === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== v)
      n = this.activeLink = new Cn(v, this), v.deps ? (n.prevDep = v.depsTail, v.depsTail.nextDep = n, v.depsTail = n) : v.deps = v.depsTail = n, jt(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = v.depsTail, n.nextDep = void 0, v.depsTail.nextDep = n, v.depsTail = n, v.deps === n && (v.deps = s);
    }
    return process.env.NODE_ENV !== "production" && v.onTrack && v.onTrack(
      L(
        {
          effect: v
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, ve++, this.notify(t);
  }
  notify(t) {
    ct();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            L(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      at();
    }
  }
}
function jt(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        jt(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Qe = /* @__PURE__ */ new WeakMap(), Q = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Ze = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), me = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function O(e, t, n) {
  if (I && v) {
    let s = Qe.get(e);
    s || Qe.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new ut()), r.map = s, r.key = n), process.env.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function U(e, t, n, s, r, o) {
  const i = Qe.get(e);
  if (!i) {
    ve++;
    return;
  }
  const c = (l) => {
    l && (process.env.NODE_ENV !== "production" ? l.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: r,
      oldTarget: o
    }) : l.trigger());
  };
  if (ct(), t === "clear")
    i.forEach(c);
  else {
    const l = m(e), f = l && ot(n);
    if (l && n === "length") {
      const u = Number(s);
      i.forEach((a, p) => {
        (p === "length" || p === me || !ee(p) && p >= u) && c(a);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && c(i.get(n)), f && c(i.get(me)), t) {
        case "add":
          l ? f && c(i.get("length")) : (c(i.get(Q)), X(e) && c(i.get(Ze)));
          break;
        case "delete":
          l || (c(i.get(Q)), X(e) && c(i.get(Ze)));
          break;
        case "set":
          X(e) && c(i.get(Q));
          break;
      }
  }
  at();
}
function ne(e) {
  const t = h(e);
  return t === e ? t : (O(t, "iterate", me), S(e) ? t : t.map(N));
}
function Pe(e) {
  return O(e = h(e), "iterate", me), e;
}
const An = {
  __proto__: null,
  [Symbol.iterator]() {
    return ze(this, Symbol.iterator, N);
  },
  concat(...e) {
    return ne(this).concat(
      ...e.map((t) => m(t) ? ne(t) : t)
    );
  },
  entries() {
    return ze(this, "entries", (e) => (e[1] = N(e[1]), e));
  },
  every(e, t) {
    return M(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return M(this, "filter", e, t, (n) => n.map(N), arguments);
  },
  find(e, t) {
    return M(this, "find", e, t, N, arguments);
  },
  findIndex(e, t) {
    return M(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return M(this, "findLast", e, t, N, arguments);
  },
  findLastIndex(e, t) {
    return M(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return M(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Be(this, "includes", e);
  },
  indexOf(...e) {
    return Be(this, "indexOf", e);
  },
  join(e) {
    return ne(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Be(this, "lastIndexOf", e);
  },
  map(e, t) {
    return M(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return de(this, "pop");
  },
  push(...e) {
    return de(this, "push", e);
  },
  reduce(e, ...t) {
    return wt(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return wt(this, "reduceRight", e, t);
  },
  shift() {
    return de(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return M(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return de(this, "splice", e);
  },
  toReversed() {
    return ne(this).toReversed();
  },
  toSorted(e) {
    return ne(this).toSorted(e);
  },
  toSpliced(...e) {
    return ne(this).toSpliced(...e);
  },
  unshift(...e) {
    return de(this, "unshift", e);
  },
  values() {
    return ze(this, "values", N);
  }
};
function ze(e, t, n) {
  const s = Pe(e), r = s[t]();
  return s !== e && !S(e) && (r._next = r.next, r.next = () => {
    const o = r._next();
    return o.value && (o.value = n(o.value)), o;
  }), r;
}
const kn = Array.prototype;
function M(e, t, n, s, r, o) {
  const i = Pe(e), c = i !== e && !S(e), l = i[t];
  if (l !== kn[t]) {
    const a = l.apply(e, o);
    return c ? N(a) : a;
  }
  let f = n;
  i !== e && (c ? f = function(a, p) {
    return n.call(this, N(a), p, e);
  } : n.length > 2 && (f = function(a, p) {
    return n.call(this, a, p, e);
  }));
  const u = l.call(i, f, s);
  return c && r ? r(u) : u;
}
function wt(e, t, n, s) {
  const r = Pe(e);
  let o = n;
  return r !== e && (S(e) ? n.length > 3 && (o = function(i, c, l) {
    return n.call(this, i, c, l, e);
  }) : o = function(i, c, l) {
    return n.call(this, i, N(c), l, e);
  }), r[t](o, ...s);
}
function Be(e, t, n) {
  const s = h(e);
  O(s, "iterate", me);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Te(n[0]) ? (n[0] = h(n[0]), s[t](...n)) : r;
}
function de(e, t, n = []) {
  fe(), ct();
  const s = h(e)[t].apply(e, n);
  return at(), pe(), s;
}
const $n = /* @__PURE__ */ En("__proto__,__v_isRef,__isVue"), Kt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ee)
);
function Wn(e) {
  ee(e) || (e = String(e));
  const t = h(this);
  return O(t, "has", e), t.hasOwnProperty(e);
}
class Ut {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (r ? o ? Bn : Jt : o ? zn : Bt).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = m(t);
    if (!r) {
      let l;
      if (i && (l = An[n]))
        return l;
      if (n === "hasOwnProperty")
        return Wn;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      V(t) ? t : s
    );
    return (ee(n) ? Kt.has(n) : $n(n)) || (r || O(t, "get", n), o) ? c : V(c) ? i && ot(n) ? c : c.value : b(c) ? r ? ft(c) : Yt(c) : c;
  }
}
class Mn extends Ut {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const l = k(o);
      if (!S(s) && !k(s) && (o = h(o), s = h(s)), !m(t) && V(o) && !V(s))
        return l ? !1 : (o.value = s, !0);
    }
    const i = m(t) && ot(n) ? Number(n) < t.length : Ge(t, n), c = Reflect.set(
      t,
      n,
      s,
      V(t) ? t : r
    );
    return t === h(r) && (i ? B(s, o) && U(t, "set", n, s, o) : U(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = Ge(t, n), r = t[n], o = Reflect.deleteProperty(t, n);
    return o && s && U(t, "delete", n, void 0, r), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ee(n) || !Kt.has(n)) && O(t, "has", n), s;
  }
  ownKeys(t) {
    return O(
      t,
      "iterate",
      m(t) ? "length" : Q
    ), Reflect.ownKeys(t);
  }
}
class Pn extends Ut {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && H(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && H(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Ln = /* @__PURE__ */ new Mn(), Hn = /* @__PURE__ */ new Pn(), et = (e) => e, Ne = (e) => Reflect.getPrototypeOf(e);
function Fn(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = h(r), i = X(o), c = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, f = r[e](...s), u = n ? et : t ? Ve : N;
    return !t && O(
      o,
      "iterate",
      l ? Ze : Q
    ), {
      // iterator protocol
      next() {
        const { value: a, done: p } = f.next();
        return p ? { value: a, done: p } : {
          value: c ? [u(a[0]), u(a[1])] : u(a),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function be(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      H(
        `${Ct(e)} operation ${n}failed: target is readonly.`,
        h(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function jn(e, t) {
  const n = {
    get(r) {
      const o = this.__v_raw, i = h(o), c = h(r);
      e || (B(r, c) && O(i, "get", r), O(i, "get", c));
      const { has: l } = Ne(i), f = t ? et : e ? Ve : N;
      if (l.call(i, r))
        return f(o.get(r));
      if (l.call(i, c))
        return f(o.get(c));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && O(h(r), "iterate", Q), Reflect.get(r, "size", r);
    },
    has(r) {
      const o = this.__v_raw, i = h(o), c = h(r);
      return e || (B(r, c) && O(i, "has", r), O(i, "has", c)), r === c ? o.has(r) : o.has(r) || o.has(c);
    },
    forEach(r, o) {
      const i = this, c = i.__v_raw, l = h(c), f = t ? et : e ? Ve : N;
      return !e && O(l, "iterate", Q), c.forEach((u, a) => r.call(o, f(u), f(a), i));
    }
  };
  return L(
    n,
    e ? {
      add: be("add"),
      set: be("set"),
      delete: be("delete"),
      clear: be("clear")
    } : {
      add(r) {
        !t && !S(r) && !k(r) && (r = h(r));
        const o = h(this);
        return Ne(o).has.call(o, r) || (o.add(r), U(o, "add", r, r)), this;
      },
      set(r, o) {
        !t && !S(o) && !k(o) && (o = h(o));
        const i = h(this), { has: c, get: l } = Ne(i);
        let f = c.call(i, r);
        f ? process.env.NODE_ENV !== "production" && Nt(i, c, r) : (r = h(r), f = c.call(i, r));
        const u = l.call(i, r);
        return i.set(r, o), f ? B(o, u) && U(i, "set", r, o, u) : U(i, "add", r, o), this;
      },
      delete(r) {
        const o = h(this), { has: i, get: c } = Ne(o);
        let l = i.call(o, r);
        l ? process.env.NODE_ENV !== "production" && Nt(o, i, r) : (r = h(r), l = i.call(o, r));
        const f = c ? c.call(o, r) : void 0, u = o.delete(r);
        return l && U(o, "delete", r, void 0, f), u;
      },
      clear() {
        const r = h(this), o = r.size !== 0, i = process.env.NODE_ENV !== "production" ? X(r) ? new Map(r) : new Set(r) : void 0, c = r.clear();
        return o && U(
          r,
          "clear",
          void 0,
          void 0,
          i
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Fn(r, e, t);
  }), n;
}
function zt(e, t) {
  const n = jn(e, t);
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    Ge(n, r) && r in s ? n : s,
    r,
    o
  );
}
const Kn = {
  get: /* @__PURE__ */ zt(!1, !1)
}, Un = {
  get: /* @__PURE__ */ zt(!0, !1)
};
function Nt(e, t, n) {
  const s = h(n);
  if (s !== n && t.call(e, s)) {
    const r = Vt(e);
    H(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Bt = /* @__PURE__ */ new WeakMap(), zn = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), Bn = /* @__PURE__ */ new WeakMap();
function Jn(e) {
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
function Yn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Jn(Vt(e));
}
function Yt(e) {
  return k(e) ? e : qt(
    e,
    !1,
    Ln,
    Kn,
    Bt
  );
}
function ft(e) {
  return qt(
    e,
    !0,
    Hn,
    Un,
    Jt
  );
}
function qt(e, t, n, s, r) {
  if (!b(e))
    return process.env.NODE_ENV !== "production" && H(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = Yn(e);
  if (o === 0)
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const c = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, c), c;
}
function ie(e) {
  return k(e) ? ie(e.__v_raw) : !!(e && e.__v_isReactive);
}
function k(e) {
  return !!(e && e.__v_isReadonly);
}
function S(e) {
  return !!(e && e.__v_isShallow);
}
function Te(e) {
  return e ? !!e.__v_raw : !1;
}
function h(e) {
  const t = e && e.__v_raw;
  return t ? h(t) : e;
}
const N = (e) => b(e) ? Yt(e) : e, Ve = (e) => b(e) ? ft(e) : e;
function V(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function re(e) {
  return Gt(e, !1);
}
function qn(e) {
  return Gt(e, !0);
}
function Gt(e, t) {
  return V(e) ? e : new Gn(e, t);
}
class Gn {
  constructor(t, n) {
    this.dep = new ut(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : h(t), this._value = n ? t : N(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || S(t) || k(t);
    t = s ? t : h(t), B(t, n) && (this._rawValue = t, this._value = s ? t : N(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
class Xn {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ut(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ve - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    v !== this)
      return Mt(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Ht(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && H("Write operation failed: computed value is readonly");
  }
}
function Qn(e, t, n = !1) {
  let s, r;
  w(e) ? s = e : (s = e.get, r = e.set);
  const o = new Xn(s, r, n);
  return process.env.NODE_ENV, o;
}
const Se = {}, Re = /* @__PURE__ */ new WeakMap();
let q;
function Zn(e, t = !1, n = q) {
  if (n) {
    let s = Re.get(n);
    s || Re.set(n, s = []), s.push(e);
  } else process.env.NODE_ENV !== "production" && !t && H(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function er(e, t, n = ae) {
  const { immediate: s, deep: r, once: o, scheduler: i, augmentJob: c, call: l } = n, f = (_) => {
    (n.onWarn || H)(
      "Invalid watch source: ",
      _,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (_) => r ? _ : S(_) || r === !1 || r === 0 ? z(_, 1) : z(_);
  let a, p, d, g, y = !1, $ = !1;
  if (V(e) ? (p = () => e.value, y = S(e)) : ie(e) ? (p = () => u(e), y = !0) : m(e) ? ($ = !0, y = e.some((_) => ie(_) || S(_)), p = () => e.map((_) => {
    if (V(_))
      return _.value;
    if (ie(_))
      return u(_);
    if (w(_))
      return l ? l(_, 2) : _();
    process.env.NODE_ENV !== "production" && f(_);
  })) : w(e) ? t ? p = l ? () => l(e, 2) : e : p = () => {
    if (d) {
      fe();
      try {
        d();
      } finally {
        pe();
      }
    }
    const _ = q;
    q = a;
    try {
      return l ? l(e, 3, [g]) : e(g);
    } finally {
      q = _;
    }
  } : (p = G, process.env.NODE_ENV !== "production" && f(e)), t && r) {
    const _ = p, D = r === !0 ? 1 / 0 : r;
    p = () => z(_(), D);
  }
  const W = () => {
    a.stop();
  };
  if (o && t) {
    const _ = t;
    t = (...D) => {
      _(...D), W();
    };
  }
  let A = $ ? new Array(e.length).fill(Se) : Se;
  const F = (_) => {
    if (!(!(a.flags & 1) || !a.dirty && !_))
      if (t) {
        const D = a.run();
        if (r || y || ($ ? D.some((Y, j) => B(Y, A[j])) : B(D, A))) {
          d && d();
          const Y = q;
          q = a;
          try {
            const j = [
              D,
              // pass undefined as the old value when it's changed for the first time
              A === Se ? void 0 : $ && A[0] === Se ? [] : A,
              g
            ];
            A = D, l ? l(t, 3, j) : (
              // @ts-expect-error
              t(...j)
            );
          } finally {
            q = Y;
          }
        }
      } else
        a.run();
  };
  return c && c(F), a = new Rn(p), a.scheduler = i ? () => i(F, !1) : F, g = (_) => Zn(_, !1, a), d = a.onStop = () => {
    const _ = Re.get(a);
    if (_) {
      if (l)
        l(_, 4);
      else
        for (const D of _) D();
      Re.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? s ? F(!0) : A = a.run() : i ? i(F.bind(null, !0), !0) : a.run(), W.pause = a.pause.bind(a), W.resume = a.resume.bind(a), W.stop = W, W;
}
function z(e, t = 1 / 0, n) {
  if (t <= 0 || !b(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, V(e))
    z(e.value, t, n);
  else if (m(e))
    for (let s = 0; s < e.length; s++)
      z(e[s], t, n);
  else if (Dt(e) || X(e))
    e.forEach((s) => {
      z(s, t, n);
    });
  else if (Rt(e)) {
    for (const s in e)
      z(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && z(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Z = [];
function tr(e) {
  Z.push(e);
}
function nr() {
  Z.pop();
}
let Je = !1;
function E(e, ...t) {
  if (Je) return;
  Je = !0, fe();
  const n = Z.length ? Z[Z.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = rr();
  if (s)
    Le(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var i, c;
          return (c = (i = o.toString) == null ? void 0 : i.call(o)) != null ? c : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: o }) => `at <${_n(n, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...sr(r)), console.warn(...o);
  }
  pe(), Je = !1;
}
function rr() {
  let e = Z[Z.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function sr(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...or(n));
  }), t;
}
function or({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${_n(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [r, ...ir(e.props), o] : [r + o];
}
function ir(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Xt(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Xt(e, t, n) {
  return C(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : V(t) ? (t = Xt(e, h(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : w(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = h(t), n ? t : [`${e}=`, t]);
}
const pt = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Le(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    ht(r, t, n);
  }
}
function dt(e, t, n, s) {
  if (w(e)) {
    const r = Le(e, t, n, s);
    return r && Sn(r) && r.catch((o) => {
      ht(o, t, n);
    }), r;
  }
  if (m(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(dt(e[o], t, n, s));
    return r;
  } else process.env.NODE_ENV !== "production" && E(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function ht(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || ae;
  if (t) {
    let c = t.parent;
    const l = t.proxy, f = process.env.NODE_ENV !== "production" ? pt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const u = c.ec;
      if (u) {
        for (let a = 0; a < u.length; a++)
          if (u[a](e, l, f) === !1)
            return;
      }
      c = c.parent;
    }
    if (o) {
      fe(), Le(o, null, 10, [
        e,
        l,
        f
      ]), pe();
      return;
    }
  }
  cr(e, n, r, s, i);
}
function cr(e, t, n, s = !0, r = !1) {
  if (process.env.NODE_ENV !== "production") {
    const o = pt[t];
    if (n && tr(n), E(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && nr(), s)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const T = [];
let P = -1;
const ce = [];
let K = null, se = 0;
const Qt = /* @__PURE__ */ Promise.resolve();
let Ie = null;
const ar = 100;
function lr(e) {
  const t = Ie || Qt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ur(e) {
  let t = P + 1, n = T.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = T[s], o = ye(r);
    o < e || o === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Zt(e) {
  if (!(e.flags & 1)) {
    const t = ye(e), n = T[T.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ye(n) ? T.push(e) : T.splice(ur(t), 0, e), e.flags |= 1, en();
  }
}
function en() {
  Ie || (Ie = Qt.then(tn));
}
function _t(e) {
  m(e) ? ce.push(...e) : K && e.id === -1 ? K.splice(se + 1, 0, e) : e.flags & 1 || (ce.push(e), e.flags |= 1), en();
}
function fr(e) {
  if (ce.length) {
    const t = [...new Set(ce)].sort(
      (n, s) => ye(n) - ye(s)
    );
    if (ce.length = 0, K) {
      K.push(...t);
      return;
    }
    for (K = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), se = 0; se < K.length; se++) {
      const n = K[se];
      process.env.NODE_ENV !== "production" && nn(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    K = null, se = 0;
  }
}
const ye = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function tn(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => nn(e, n) : G;
  try {
    for (P = 0; P < T.length; P++) {
      const n = T[P];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Le(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; P < T.length; P++) {
      const n = T[P];
      n && (n.flags &= -2);
    }
    P = -1, T.length = 0, fr(e), Ie = null, (T.length || ce.length) && tn(e);
  }
}
function nn(e, t) {
  const n = e.get(t) || 0;
  if (n > ar) {
    const s = t.i, r = s && hn(s.type);
    return ht(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const Ye = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Me().__VUE_HMR_RUNTIME__ = {
  createRecord: qe(pr),
  rerender: qe(dr),
  reload: qe(hr)
});
const Ce = /* @__PURE__ */ new Map();
function pr(e, t) {
  return Ce.has(e) ? !1 : (Ce.set(e, {
    initialDef: Ae(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ae(e) {
  return gn(e) ? e.__vccOpts : e;
}
function dr(e, t) {
  const n = Ce.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Ae(s.type).render = t), s.renderCache = [], s.update();
  }));
}
function hr(e, t) {
  const n = Ce.get(e);
  if (!n) return;
  t = Ae(t), bt(n.initialDef, t);
  const s = [...n.instances];
  for (let r = 0; r < s.length; r++) {
    const o = s[r], i = Ae(o.type);
    let c = Ye.get(i);
    c || (i !== n.initialDef && bt(i, t), Ye.set(i, c = /* @__PURE__ */ new Set())), c.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (c.add(o), o.ceReload(t.styles), c.delete(o)) : o.parent ? Zt(() => {
      o.parent.update(), c.delete(o);
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(i);
  }
  _t(() => {
    Ye.clear();
  });
}
function bt(e, t) {
  L(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function qe(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let oe, Oe = [];
function rn(e, t) {
  var n, s;
  oe = e, oe ? (oe.enabled = !0, Oe.forEach(({ event: r, args: o }) => oe.emit(r, ...o)), Oe = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    rn(o, t);
  }), setTimeout(() => {
    oe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Oe = []);
  }, 3e3)) : Oe = [];
}
let le = null, _r = null;
const gr = (e) => e.__isTeleport;
function sn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, sn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function gt(e, t) {
  return w(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    L({ name: e.name }, t, { setup: e })
  ) : e;
}
const vr = /* @__PURE__ */ new WeakSet();
function on(e) {
  const t = mt(), n = qn(null);
  if (t) {
    const r = t.refs === ae ? t.refs = {} : t.refs;
    let o;
    process.env.NODE_ENV !== "production" && (o = Object.getOwnPropertyDescriptor(r, e)) && !o.configurable ? E(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(r, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else process.env.NODE_ENV !== "production" && E(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = process.env.NODE_ENV !== "production" ? ft(n) : n;
  return process.env.NODE_ENV !== "production" && vr.add(s), s;
}
Me().requestIdleCallback;
Me().cancelIdleCallback;
function mr(e, t, n = te, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      fe();
      const c = Kr(n), l = dt(t, n, e, i);
      return c(), pe(), l;
    });
    return s ? r.unshift(o) : r.push(o), o;
  } else if (process.env.NODE_ENV !== "production") {
    const r = On(pt[e].replace(/ hook$/, ""));
    E(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const He = (e) => (t, n = te) => {
  (!Ee || e === "sp") && mr(e, (...s) => t(...s), n);
}, cn = He("m"), yr = He(
  "bu"
), Er = He("u"), wr = He("um"), Nr = Symbol.for("v-ndc");
function tt(e, t, n, s) {
  let r;
  const o = n, i = m(e);
  if (i || C(e)) {
    const c = i && ie(e);
    let l = !1, f = !1;
    c && (l = !S(e), f = k(e), e = Pe(e)), r = new Array(e.length);
    for (let u = 0, a = e.length; u < a; u++)
      r[u] = t(
        l ? f ? Ve(N(e[u])) : N(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && E(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let c = 0; c < e; c++)
      r[c] = t(c + 1, c, void 0, o);
  } else if (b(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (c, l) => t(c, l, void 0, o)
      );
    else {
      const c = Object.keys(e);
      r = new Array(c.length);
      for (let l = 0, f = c.length; l < f; l++) {
        const u = c[l];
        r[l] = t(e[u], u, l, o);
      }
    }
  else
    r = [];
  return r;
}
const br = {};
process.env.NODE_ENV !== "production" && (br.ownKeys = (e) => (E(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
let Sr = null;
function Or(e, t, n = !1) {
  const s = te || le;
  if (s || Sr) {
    let r = s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && w(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && E(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && E("inject() can only be used inside setup() or functional components.");
}
const xr = {}, an = (e) => Object.getPrototypeOf(e) === xr, Dr = Ar, Tr = Symbol.for("v-scx"), Vr = () => {
  {
    const e = Or(Tr);
    return e || process.env.NODE_ENV !== "production" && E(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Rr(e, t, n) {
  return process.env.NODE_ENV !== "production" && !w(t) && E(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ir(e, t, n);
}
function Ir(e, t, n = ae) {
  const { immediate: s, deep: r, flush: o, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (s !== void 0 && E(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && E(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && E(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = L({}, n);
  process.env.NODE_ENV !== "production" && (c.onWarn = E);
  const l = t && s || !t && o !== "post";
  let f;
  if (Ee) {
    if (o === "sync") {
      const d = Vr();
      f = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!l) {
      const d = () => {
      };
      return d.stop = G, d.resume = G, d.pause = G, d;
    }
  }
  const u = te;
  c.call = (d, g, y) => dt(d, u, g, y);
  let a = !1;
  o === "post" ? c.scheduler = (d) => {
    Dr(d, u && u.suspense);
  } : o !== "sync" && (a = !0, c.scheduler = (d, g) => {
    g ? d() : Zt(d);
  }), c.augmentJob = (d) => {
    t && (d.flags |= 4), a && (d.flags |= 2, u && (d.id = u.uid, d.i = u));
  };
  const p = er(e, t, c);
  return Ee && (f ? f.push(p) : l && p()), p;
}
const Cr = (e) => e.__isSuspense;
function Ar(e, t) {
  t && t.pendingBranch ? m(e) ? t.effects.push(...e) : t.effects.push(e) : _t(e);
}
const ue = Symbol.for("v-fgt"), kr = Symbol.for("v-txt"), nt = Symbol.for("v-cmt"), $r = Symbol.for("v-stc"), xe = [];
let R = null;
function x(e = !1) {
  xe.push(R = e ? null : []);
}
function Wr() {
  xe.pop(), R = xe[xe.length - 1] || null;
}
function ln(e) {
  return e.dynamicChildren = R || wn, Wr(), R && R.push(e), e;
}
function J(e, t, n, s, r, o) {
  return ln(
    fn(
      e,
      t,
      n,
      s,
      r,
      o,
      !0
    )
  );
}
function ge(e, t, n, s, r) {
  return ln(
    Fe(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Mr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Pr = (...e) => pn(
  ...e
), un = ({ key: e }) => e ?? null, De = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? C(e) || V(e) || w(e) ? { i: le, r: e, k: t, f: !!n } : e : null);
function fn(e, t = null, n = null, s = 0, r = null, o = e === ue ? 0 : 1, i = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && un(t),
    ref: t && De(t),
    scopeId: _r,
    slotScopeIds: null,
    children: n,
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
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: le
  };
  return c ? (vt(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= C(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && E("VNode created with invalid key (NaN). VNode type:", l.type), // avoid a block node from tracking itself
  !i && // has current parent block
  R && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && R.push(l), l;
}
const Fe = process.env.NODE_ENV !== "production" ? Pr : pn;
function pn(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === Nr) && (process.env.NODE_ENV !== "production" && !e && E(`Invalid vnode type when creating vnode: ${e}.`), e = nt), Mr(e)) {
    const c = ke(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && vt(c, n), !o && R && (c.shapeFlag & 6 ? R[R.indexOf(e)] = c : R.push(c)), c.patchFlag = -2, c;
  }
  if (gn(e) && (e = e.__vccOpts), t) {
    t = Lr(t);
    let { class: c, style: l } = t;
    c && !C(c) && (t.class = it(c)), b(l) && (Te(l) && !m(l) && (l = L({}, l)), t.style = we(l));
  }
  const i = C(e) ? 1 : Cr(e) ? 128 : gr(e) ? 64 : b(e) ? 4 : w(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Te(e) && (e = h(e), E(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), fn(
    e,
    t,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function Lr(e) {
  return e ? Te(e) || an(e) ? L({}, e) : e : null;
}
function ke(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: c, transition: l } = e, f = t ? jr(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && un(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? m(o) ? o.concat(De(t)) : [o, De(t)] : De(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && m(c) ? c.map(dn) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ue ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ke(e.ssContent),
    ssFallback: e.ssFallback && ke(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && s && sn(
    u,
    l.clone(u)
  ), u;
}
function dn(e) {
  const t = ke(e);
  return m(e.children) && (t.children = e.children.map(dn)), t;
}
function Hr(e = " ", t = 0) {
  return Fe(kr, null, e, t);
}
function Fr(e = "", t = !1) {
  return t ? (x(), ge(nt, null, e)) : Fe(nt, null, e);
}
function vt(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (m(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), vt(e, r()), r._c && (r._d = !0));
      return;
    } else
      n = 32, !t._ && !an(t) && (t._ctx = le);
  else w(t) ? (t = { default: t, _ctx: le }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Hr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function jr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = it([t.class, s.class]));
      else if (r === "style")
        t.style = we([t.style, s.style]);
      else if (Nn(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(m(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
let te = null;
const mt = () => te || le;
let rt;
{
  const e = Me(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  rt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => te = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Ee = n
  );
}
const Kr = (e) => {
  const t = te;
  return rt(e), e.scope.on(), () => {
    e.scope.off(), rt(t);
  };
};
let Ee = !1;
process.env.NODE_ENV;
const Ur = /(?:^|[-_])(\w)/g, zr = (e) => e.replace(Ur, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function hn(e, t = !0) {
  return w(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function _n(e, t, n = !1) {
  let s = hn(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? zr(s) : n ? "App" : "Anonymous";
}
function gn(e) {
  return w(e) && "__vccOpts" in e;
}
const St = (e, t) => {
  const n = Qn(e, t, Ee);
  if (process.env.NODE_ENV !== "production") {
    const s = mt();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Br() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!b(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (V(a)) {
        fe();
        const p = a.value;
        return pe(), [
          "div",
          {},
          ["span", e, u(a)],
          "<",
          c(p),
          ">"
        ];
      } else {
        if (ie(a))
          return [
            "div",
            {},
            ["span", e, S(a) ? "ShallowReactive" : "Reactive"],
            "<",
            c(a),
            `>${k(a) ? " (readonly)" : ""}`
          ];
        if (k(a))
          return [
            "div",
            {},
            ["span", e, S(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            c(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...o(a.$)
        ];
    }
  };
  function o(a) {
    const p = [];
    a.type.props && a.props && p.push(i("props", h(a.props))), a.setupState !== ae && p.push(i("setup", a.setupState)), a.data !== ae && p.push(i("data", h(a.data)));
    const d = l(a, "computed");
    d && p.push(i("computed", d));
    const g = l(a, "inject");
    return g && p.push(i("injected", g)), p.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), p;
  }
  function i(a, p) {
    return p = L({}, p), Object.keys(p).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(p).map((d) => [
          "div",
          {},
          ["span", s, d + ": "],
          c(p[d], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(a, p = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", s, a] : b(a) ? ["object", { object: p ? h(a) : a }] : ["span", n, String(a)];
  }
  function l(a, p) {
    const d = a.type;
    if (w(d))
      return;
    const g = {};
    for (const y in a.ctx)
      f(d, y, p) && (g[y] = a.ctx[y]);
    return g;
  }
  function f(a, p, d) {
    const g = a[d];
    if (m(g) && g.includes(p) || b(g) && p in g || a.extends && f(a.extends, p, d) || a.mixins && a.mixins.some((y) => f(y, p, d)))
      return !0;
  }
  function u(a) {
    return S(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const vn = process.env.NODE_ENV !== "production" ? E : G;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Jr;
const Ot = typeof window < "u" && window.trustedTypes;
if (Ot)
  try {
    Jr = /* @__PURE__ */ Ot.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && vn(`Error creating trusted types policy: ${e}`);
  }
process.env.NODE_ENV;
const Yr = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function qr(e) {
  const t = mt();
  if (!t) {
    process.env.NODE_ENV !== "production" && vn("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (r = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((o) => $e(o, r));
  };
  process.env.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const s = () => {
    const r = e(t.proxy);
    t.ce ? $e(t.ce, r) : st(t.subTree, r), n(r);
  };
  yr(() => {
    _t(s);
  }), cn(() => {
    Rr(s, G, { flush: "post" });
    const r = new MutationObserver(s);
    r.observe(t.subTree.el.parentNode, { childList: !0 }), wr(() => r.disconnect());
  });
}
function st(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      st(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    $e(e.el, t);
  else if (e.type === ue)
    e.children.forEach((n) => st(n, t));
  else if (e.type === $r) {
    let { el: n, anchor: s } = e;
    for (; n && ($e(n, t), n !== s); )
      n = n.nextSibling;
  }
}
function $e(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let s = "";
    for (const r in t)
      n.setProperty(`--${r}`, t[r]), s += `--${r}: ${t[r]};`;
    n[Yr] = s;
  }
}
/**
* vue v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Gr() {
  Br();
}
process.env.NODE_ENV !== "production" && Gr();
const xt = {
  __name: "Letter",
  props: {
    char: String,
    color: String
  },
  setup(e) {
    return (t, n) => (x(), J("div", {
      style: we({ color: e.color })
    }, kt(e.char), 5));
  }
}, je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, Xr = {
  __name: "Caret",
  props: {
    offset: Number
  },
  setup(e) {
    return (t, n) => (x(), J("div", {
      className: "caret",
      style: we({ left: e.offset + "ch" })
    }, null, 4));
  }
}, Qr = /* @__PURE__ */ je(Xr, [["__scopeId", "data-v-86a5189b"]]), Zr = /* @__PURE__ */ gt({
  __name: "Word",
  props: {
    word: String,
    typedWord: String,
    wordStatus: String
  },
  setup(e) {
    qr((c) => ({
      "439eb34a": r.value
    }));
    const t = e, n = on("ref"), s = St(() => t.typedWord.slice(t.word.length)), r = St(() => t.wordStatus === "incorrect" ? i("incorrect") + " solid 0.1lh" : "transparent solid 0.1lh"), o = (c, l) => t.typedWord.charAt(l) === c ? "correct" : t.typedWord.charAt(l) != "" ? "incorrect" : t.wordStatus === "active" ? "active" : "passive", i = (c) => {
      switch (c) {
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
    return Er(async () => {
      t.wordStatus === "active" && (await lr(), n.value.scrollIntoView({ behavior: "smooth", block: "center" }));
    }), (c, l) => (x(), J("div", {
      class: "word",
      ref_key: "ref",
      ref: n
    }, [
      (x(!0), J(ue, null, tt(e.word, (f, u) => (x(), ge(xt, {
        key: u,
        char: f,
        color: i(o(f, u))
      }, null, 8, ["char", "color"]))), 128)),
      (x(!0), J(ue, null, tt(s.value, (f, u) => (x(), ge(xt, {
        key: "s" + u,
        char: f,
        color: i("incorrect")
      }, null, 8, ["char", "color"]))), 128)),
      e.wordStatus === "active" ? (x(), ge(Qr, {
        key: 0,
        offset: e.typedWord?.length || 0
      }, null, 8, ["offset"])) : Fr("", !0)
    ], 512));
  }
}), es = /* @__PURE__ */ je(Zr, [["__scopeId", "data-v-29444867"]]), ts = { class: "wordSet" }, ns = /* @__PURE__ */ gt({
  __name: "WordSet",
  props: {
    wordList: Array,
    typedWordList: Array,
    activeWordIndex: Number
  },
  setup(e) {
    const t = e, n = (s, r) => t.activeWordIndex === r ? "active" : t.activeWordIndex > r ? t.typedWordList[r] !== s ? "incorrect" : "correct" : "passive";
    return (s, r) => (x(), J("div", ts, [
      (x(!0), J(ue, null, tt(e.wordList, (o, i) => (x(), ge(es, {
        key: o + i,
        word: o,
        typedWord: e.typedWordList[i] || "",
        wordStatus: n(o, i)
      }, null, 8, ["word", "typedWord", "wordStatus"]))), 128))
    ]));
  }
}), rs = /* @__PURE__ */ je(ns, [["__scopeId", "data-v-6f72a217"]]), ss = /* @__PURE__ */ gt({
  __name: "TypingTest",
  props: { text: Array },
  emits: ["results_ready"],
  setup(e, { expose: t, emit: n }) {
    const s = e, r = n, o = on("typingTest"), i = re([""]), c = re(0), l = re(null), f = re(0), u = re(-1), a = re([]), p = (g) => {
      if (u.value === -2)
        return;
      g.preventDefault();
      const y = i.value[i.value.length - 1];
      if (g.key === " ") {
        i.value.length !== s.text.length && (s.text[c.value].length !== y?.length && (f.value = f.value + (s.text[c.value].length - y.length)), i.value = [...i.value, ""], c.value++, a.value = [...a.value, { key: "Space", time: Date.now() }]);
        return;
      }
      if (g.key === "Backspace") {
        if (g.ctrlKey)
          c.value !== 0 ? y?.length === 0 ? (i.value = [...i.value.slice(0, -2), ""], c.value--) : i.value = [...i.value.slice(0, -1), ""] : i.value = [""];
        else if (y?.length === 0)
          c.value !== 0 && (i.value = i.value.slice(0, -1), c.value--);
        else {
          let $ = i.value.slice(0, -1);
          $.push(y?.slice(0, -1) || ""), i.value = $;
        }
        a.value = [...a.value, { key: "Backspace", time: Date.now() }];
        return;
      }
      if (g.key.match(/^[-a-zA-Z0-9!@#$%^&*()_+=[\]{};':",./<>?\\|`~]$/)) {
        u.value === -1 && (u.value = Date.now());
        const $ = s.text[c.value]?.charAt(y?.length || 0);
        g.key !== $ && f.value++;
        let W = i.value.slice(0, -1);
        if (W.push(y + g.key), i.value = W, a.value = [...a.value, { key: g.key, time: Date.now() }], i.value.length === s.text.length && (y?.length || 0) === s.text[c.value].length - 1) {
          const A = (Date.now() - u.value) / 1e3;
          u.value = -2;
          const F = s.text.flatMap(
            (Y, j) => Y.split("").map(
              (mn, yn) => i.value[j]?.charAt(yn) !== mn ? 1 : 0
            )
          ).reduce((Y, j) => Y + j, 0), _ = f.value - F, D = s.text.length / (A / 60);
          l.value = {
            time_taken: A,
            uncorrected_errors: F,
            corrected_errors: _,
            wpm: D,
            text_length: s.text.join("").length + (s.text.length - 1),
            keystroke_log: a.value
          }, r("results_ready", { results: l.value }), console.log(l.value);
        }
      }
    };
    return t({ getResults: async () => {
      if (l.value)
        return l.value;
      for (; ; )
        if (await new Promise((g) => setTimeout(g, 1e4)), l.value)
          return l;
    } }), cn(() => {
      o.value.focus();
    }), (g, y) => (x(), J("div", {
      class: "test",
      ref_key: "typingTest",
      ref: o,
      tabindex: "0",
      onKeydown: p
    }, [
      Fe(rs, {
        wordList: e.text,
        typedWordList: i.value,
        activeWordIndex: c.value
      }, null, 8, ["wordList", "typedWordList", "activeWordIndex"])
    ], 544));
  }
}), os = /* @__PURE__ */ je(ss, [["__scopeId", "data-v-56df07c1"]]), is = { TypingTest: os };
export {
  is as default
};
