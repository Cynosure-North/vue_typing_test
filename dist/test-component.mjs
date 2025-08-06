import { createElementBlock as y, openBlock as o, normalizeStyle as q, toDisplayString as V, defineComponent as S, useCssVars as K, computed as A, useTemplateRef as C, onUpdated as R, nextTick as z, createBlock as _, createCommentVNode as M, Fragment as k, renderList as W, ref as h, onMounted as j, createVNode as F } from "vue";
const b = {
  __name: "Letter",
  props: {
    char: String,
    color: String
  },
  setup(t) {
    return (n, s) => (o(), y("div", {
      style: q({ color: t.color })
    }, V(t.char), 5));
  }
}, m = (t, n) => {
  const s = t.__vccOpts || t;
  for (const [r, u] of n)
    s[r] = u;
  return s;
}, O = {
  __name: "Caret",
  props: {
    offset: Number
  },
  setup(t) {
    return (n, s) => (o(), y("div", {
      className: "caret",
      style: q({ left: t.offset + "ch" })
    }, null, 4));
  }
}, P = /* @__PURE__ */ m(O, [["__scopeId", "data-v-86a5189b"]]), U = /* @__PURE__ */ S({
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
  setup(t) {
    K((a) => ({
      e6436472: u.value
    }));
    const n = t, s = C("ref"), r = A(() => n.typedWord.slice(n.word.length)), u = A(() => n.wordStatus === "incorrect" ? e("incorrect") + " solid 0.1lh" : "transparent solid 0.1lh"), p = (a, c) => n.typedWord.charAt(c) === a ? "correct" : n.typedWord.charAt(c) != "" ? "incorrect" : n.wordStatus === "active" ? "active" : "passive", e = (a) => {
      switch (a) {
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
      n.wordStatus === "active" && (await z(), s.value?.scrollIntoView({ behavior: "smooth", block: "center" }));
    }), (a, c) => (o(), y("div", {
      class: "word",
      ref_key: "ref",
      ref: s
    }, [
      (o(!0), y(k, null, W(t.word, (d, i) => (o(), _(b, {
        key: i,
        char: d,
        color: e(p(d, i))
      }, null, 8, ["char", "color"]))), 128)),
      (o(!0), y(k, null, W(r.value, (d, i) => (o(), _(b, {
        key: "s" + i,
        char: d,
        color: e("incorrect")
      }, null, 8, ["char", "color"]))), 128)),
      t.wordStatus === "active" ? (o(), _(P, {
        key: 0,
        offset: t.typedWord?.length || 0
      }, null, 8, ["offset"])) : M("", !0)
    ], 512));
  }
}), Z = /* @__PURE__ */ m(U, [["__scopeId", "data-v-595f7012"]]), G = { class: "wordSet" }, H = /* @__PURE__ */ S({
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
  setup(t) {
    const n = t, s = (r, u) => n.activeWordIndex === u ? "active" : n.activeWordIndex > u ? n.typedWordList[u] !== r ? "incorrect" : "correct" : "passive";
    return (r, u) => (o(), y("div", G, [
      (o(!0), y(k, null, W(t.wordList, (p, e) => (o(), _(Z, {
        key: p + e,
        word: p,
        typedWord: t.typedWordList[e] || "",
        wordStatus: s(p, e)
      }, null, 8, ["word", "typedWord", "wordStatus"]))), 128))
    ]));
  }
}), J = /* @__PURE__ */ m(H, [["__scopeId", "data-v-0c65b6ed"]]), Q = /* @__PURE__ */ S({
  __name: "TypingTest",
  props: {
    text: {
      type: Array,
      required: !0
    }
  },
  emits: ["results_ready"],
  setup(t, { expose: n, emit: s }) {
    const r = t, u = s, p = C("typingTest"), e = h([""]), a = h(0), c = h({}), d = h(0), i = h(-1), f = h([]), D = (l) => {
      if (r.text === null || i.value === -2)
        return;
      l.preventDefault();
      const v = e.value[e.value.length - 1] || "";
      if (l.key === " ") {
        e.value.length !== r.text.length && (r.text[a.value]?.length !== v?.length && (d.value = d.value + ((r.text[a.value]?.length || 0) - v.length)), e.value = [...e.value, ""], a.value++, f.value = [...f.value, { key: "Space", time: Date.now() }]);
        return;
      }
      if (l.key === "Backspace") {
        if (l.ctrlKey)
          a.value !== 0 ? v?.length === 0 ? (e.value = [...e.value.slice(0, -2), ""], a.value--) : e.value = [...e.value.slice(0, -1), ""] : e.value = [""];
        else if (v?.length === 0)
          a.value !== 0 && (e.value = e.value.slice(0, -1), a.value--);
        else {
          let g = e.value.slice(0, -1);
          g.push(v?.slice(0, -1) || ""), e.value = g;
        }
        f.value = [...f.value, { key: "Backspace", time: Date.now() }];
        return;
      }
      if (l.key.match(/^[-a-zA-Z0-9!@#$%^&*()_+=[\]{};':",./<>?\\|`~]$/)) {
        i.value === -1 && (i.value = Date.now());
        const g = r.text[a.value]?.charAt(v?.length || 0);
        l.key !== g && d.value++;
        let L = e.value.slice(0, -1);
        if (L.push(v + l.key), e.value = L, f.value = [...f.value, { key: l.key, time: Date.now() }], e.value.length === r.text.length && (v?.length || 0) === (r.text[a.value]?.length || 0) - 1) {
          const T = (Date.now() - i.value) / 1e3;
          i.value = -2;
          const I = r.text.flatMap(
            (x, w) => x.split("").map(
              (N, E) => e.value[w]?.charAt(E) !== N ? 1 : 0
            )
          ).reduce((x, w) => x + w, 0), $ = d.value - I, B = r.text.length / (T / 60);
          c.value = {
            time_taken: T,
            uncorrected_errors: I,
            corrected_errors: $,
            wpm: B,
            text_length: r.text.join("").length + (r.text.length - 1),
            keystroke_log: f.value
          }, u("results_ready", { results: c.value }), console.log(c.value);
        }
      }
    };
    return n({ getResults: async () => {
      if (c.value)
        return c.value;
      for (; ; )
        if (await new Promise((l) => setTimeout(l, 1e4)), c.value)
          return c;
    } }), j(() => {
      p.value?.focus();
    }), (l, v) => (o(), y("div", {
      class: "test",
      ref_key: "typingTest",
      ref: p,
      tabindex: "0",
      onKeydown: D
    }, [
      F(J, {
        wordList: t.text,
        typedWordList: e.value,
        activeWordIndex: a.value
      }, null, 8, ["wordList", "typedWordList", "activeWordIndex"])
    ], 544));
  }
}), ee = /* @__PURE__ */ m(Q, [["__scopeId", "data-v-d4848a5a"]]);
export {
  ee as TypingTest
};
