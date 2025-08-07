import { createElementBlock as f, openBlock as a, normalizeStyle as q, toDisplayString as z, defineComponent as S, useCssVars as K, computed as C, useTemplateRef as A, onUpdated as R, nextTick as j, createBlock as g, createCommentVNode as M, Fragment as x, renderList as W, ref as m, onMounted as F, createVNode as O, unref as P, defineCustomElement as U } from "vue";
const $ = {
  __name: "Letter",
  props: {
    char: String,
    color: String
  },
  setup(r) {
    return (n, l) => (a(), f("div", {
      style: q({ color: r.color })
    }, z(r.char), 5));
  }
}, Z = ".caret[data-v-86a5189b]{position:absolute;width:.1em;height:1lh;border-radius:.05em;background-color:#000;transition:left .08s;animation-name:blink-86a5189b;animation-duration:.8s;animation-iteration-count:infinite;animation-timing-function:steps(2,jump-both)}@keyframes blink-86a5189b{0%{opacity:.9}to{opacity:.2}}", w = (r, n) => {
  const l = r.__vccOpts || r;
  for (const [v, u] of n)
    l[v] = u;
  return l;
}, G = {
  __name: "Caret",
  props: {
    offset: Number
  },
  setup(r) {
    return (n, l) => (a(), f("div", {
      className: "caret",
      style: q({ left: r.offset + "ch" })
    }, null, 4));
  }
}, H = /* @__PURE__ */ w(G, [["styles", [Z]], ["__scopeId", "data-v-86a5189b"]]), J = /* @__PURE__ */ S({
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
  setup(r) {
    K((e) => ({
      e6436472: u.value
    }));
    const n = r, l = A("ref"), v = C(() => n.typedWord.slice(n.word.length)), u = C(() => n.wordStatus === "incorrect" ? t("incorrect") + " solid 0.1lh" : "transparent solid 0.1lh"), p = (e, o) => n.typedWord.charAt(o) === e ? "correct" : n.typedWord.charAt(o) != "" ? "incorrect" : n.wordStatus === "active" ? "active" : "passive", t = (e) => {
      switch (e) {
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
    return R(async () => {
      n.wordStatus === "active" && (await j(), l.value?.scrollIntoView({ behavior: "smooth", block: "center" }));
    }), (e, o) => (a(), f("div", {
      class: "word",
      ref_key: "ref",
      ref: l
    }, [
      (a(!0), f(x, null, W(r.word, (s, i) => (a(), g($, {
        key: i,
        char: s,
        color: t(p(s, i))
      }, null, 8, ["char", "color"]))), 128)),
      (a(!0), f(x, null, W(v.value, (s, i) => (a(), g($, {
        key: "s" + i,
        char: s,
        color: t("incorrect")
      }, null, 8, ["char", "color"]))), 128)),
      r.wordStatus === "active" ? (a(), g(H, {
        key: 0,
        offset: r.typedWord?.length || 0
      }, null, 8, ["offset"])) : M("", !0)
    ], 512));
  }
}), Q = ".word[data-v-595f7012]{display:flex;margin:.15lh .2em;position:relative;border-bottom:var(--e6436472)}", X = /* @__PURE__ */ w(J, [["styles", [Q]], ["__scopeId", "data-v-595f7012"]]), Y = { class: "wordSet" }, ee = /* @__PURE__ */ S({
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
  setup(r) {
    const n = r, l = (v, u) => n.activeWordIndex === u ? "active" : n.activeWordIndex > u ? n.typedWordList[u] !== v ? "incorrect" : "correct" : "passive";
    return (v, u) => (a(), f("div", Y, [
      (a(!0), f(x, null, W(r.wordList, (p, t) => (a(), g(X, {
        key: p + t,
        word: p,
        typedWord: r.typedWordList[t] || "",
        wordStatus: l(p, t)
      }, null, 8, ["word", "typedWord", "wordStatus"]))), 128))
    ]));
  }
}), te = ".wordSet[data-v-0c65b6ed]{display:flex;flex-wrap:wrap;overflow:hidden;-webkit-user-select:none;user-select:none}", re = /* @__PURE__ */ w(ee, [["styles", [te]], ["__scopeId", "data-v-0c65b6ed"]]), ne = /* @__PURE__ */ S({
  __name: "TypingTest",
  props: {
    text: {
      type: String,
      required: !0
    }
  },
  emits: ["results_ready"],
  setup(r, { expose: n, emit: l }) {
    const v = r, u = l, p = A("typingTest"), t = v.text.split(" "), e = m([""]), o = m(0), s = m({}), i = m(0), h = m(-1), y = m([]), D = (c) => {
      if (h.value === -2)
        return;
      c.preventDefault();
      const d = e.value[e.value.length - 1] || "";
      if (c.key === " ") {
        e.value.length !== t.length && (t[o.value]?.length !== d?.length && (i.value = i.value + ((t[o.value]?.length || 0) - d.length)), e.value = [...e.value, ""], o.value++, y.value = [...y.value, { key: "Space", time: Date.now() }]);
        return;
      }
      if (c.key === "Backspace") {
        if (c.ctrlKey)
          o.value !== 0 ? d?.length === 0 ? (e.value = [...e.value.slice(0, -2), ""], o.value--) : e.value = [...e.value.slice(0, -1), ""] : e.value = [""];
        else if (d?.length === 0)
          o.value !== 0 && (e.value = e.value.slice(0, -1), o.value--);
        else {
          let _ = e.value.slice(0, -1);
          _.push(d?.slice(0, -1) || ""), e.value = _;
        }
        y.value = [...y.value, { key: "Backspace", time: Date.now() }];
        return;
      }
      if (c.key.match(/^[-a-zA-Z0-9!@#$%^&*()_+=[\]{};':",./<>?\\|`~]$/)) {
        h.value === -1 && (h.value = Date.now());
        const _ = t[o.value]?.charAt(d?.length || 0);
        c.key !== _ && i.value++;
        let L = e.value.slice(0, -1);
        if (L.push(d + c.key), e.value = L, y.value = [...y.value, { key: c.key, time: Date.now() }], e.value.length === t.length && (d?.length || 0) === (t[o.value]?.length || 0) - 1) {
          const T = (Date.now() - h.value) / 1e3;
          h.value = -2;
          const I = t.flatMap(
            (k, b) => k.split("").map(
              (N, V) => e.value[b]?.charAt(V) !== N ? 1 : 0
            )
          ).reduce((k, b) => k + b, 0), E = i.value - I, B = t.length / (T / 60);
          s.value = {
            time_taken: T,
            uncorrected_errors: I,
            corrected_errors: E,
            wpm: B,
            text_length: t.join("").length + (t.length - 1),
            keystroke_log: y.value
          }, u("results_ready", { results: s.value }), console.log(s.value);
        }
      }
    };
    return n({ getResults: async () => {
      if (s.value)
        return s.value;
      for (; ; )
        if (await new Promise((c) => setTimeout(c, 1e4)), s.value)
          return s;
    } }), F(() => {
      p.value?.focus();
    }), (c, d) => (a(), f("div", {
      class: "test",
      ref_key: "typingTest",
      ref: p,
      tabindex: "0",
      onKeydown: D
    }, [
      O(re, {
        wordList: P(t),
        typedWordList: e.value,
        activeWordIndex: o.value
      }, null, 8, ["wordList", "typedWordList", "activeWordIndex"])
    ], 544));
  }
}), oe = ".test[data-v-a7b349b2]{margin:0 auto;height:4.2lh;overflow:hidden;outline:none;transition:color .5s ease;font-family:monospace;font-size:24px}.test[data-v-a7b349b2]:focus-within{filter:none}", se = /* @__PURE__ */ w(ne, [["styles", [oe]], ["__scopeId", "data-v-a7b349b2"]]), ae = U(se);
customElements.define("typing-test", ae);
