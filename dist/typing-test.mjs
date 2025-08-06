import { createElementBlock as y, openBlock as s, normalizeStyle as $, toDisplayString as V, defineComponent as W, useCssVars as z, computed as I, useTemplateRef as A, onUpdated as K, nextTick as R, createBlock as g, createCommentVNode as j, Fragment as k, renderList as b, ref as m, onMounted as M, createVNode as F } from "vue";
const C = {
  __name: "Letter",
  props: {
    char: String,
    color: String
  },
  setup(t) {
    return (n, a) => (s(), y("div", {
      style: $({ color: t.color })
    }, V(t.char), 5));
  }
}, O = ".caret[data-v-86a5189b]{position:absolute;width:.1em;height:1lh;border-radius:.05em;background-color:#000;transition:left .08s;animation-name:blink-86a5189b;animation-duration:.8s;animation-iteration-count:infinite;animation-timing-function:steps(2,jump-both)}@keyframes blink-86a5189b{0%{opacity:.9}to{opacity:.2}}", _ = (t, n) => {
  const a = t.__vccOpts || t;
  for (const [r, u] of n)
    a[r] = u;
  return a;
}, P = {
  __name: "Caret",
  props: {
    offset: Number
  },
  setup(t) {
    return (n, a) => (s(), y("div", {
      className: "caret",
      style: $({ left: t.offset + "ch" })
    }, null, 4));
  }
}, U = /* @__PURE__ */ _(P, [["styles", [O]], ["__scopeId", "data-v-86a5189b"]]), Z = /* @__PURE__ */ W({
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
    z((o) => ({
      e6436472: u.value
    }));
    const n = t, a = A("ref"), r = I(() => n.typedWord.slice(n.word.length)), u = I(() => n.wordStatus === "incorrect" ? e("incorrect") + " solid 0.1lh" : "transparent solid 0.1lh"), p = (o, l) => n.typedWord.charAt(l) === o ? "correct" : n.typedWord.charAt(l) != "" ? "incorrect" : n.wordStatus === "active" ? "active" : "passive", e = (o) => {
      switch (o) {
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
    return K(async () => {
      n.wordStatus === "active" && (await R(), a.value?.scrollIntoView({ behavior: "smooth", block: "center" }));
    }), (o, l) => (s(), y("div", {
      class: "word",
      ref_key: "ref",
      ref: a
    }, [
      (s(!0), y(k, null, b(t.word, (d, i) => (s(), g(C, {
        key: i,
        char: d,
        color: e(p(d, i))
      }, null, 8, ["char", "color"]))), 128)),
      (s(!0), y(k, null, b(r.value, (d, i) => (s(), g(C, {
        key: "s" + i,
        char: d,
        color: e("incorrect")
      }, null, 8, ["char", "color"]))), 128)),
      t.wordStatus === "active" ? (s(), g(U, {
        key: 0,
        offset: t.typedWord?.length || 0
      }, null, 8, ["offset"])) : j("", !0)
    ], 512));
  }
}), G = ".word[data-v-595f7012]{display:flex;margin:.15lh .2em;position:relative;border-bottom:var(--e6436472)}", H = /* @__PURE__ */ _(Z, [["styles", [G]], ["__scopeId", "data-v-595f7012"]]), J = { class: "wordSet" }, Q = /* @__PURE__ */ W({
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
    const n = t, a = (r, u) => n.activeWordIndex === u ? "active" : n.activeWordIndex > u ? n.typedWordList[u] !== r ? "incorrect" : "correct" : "passive";
    return (r, u) => (s(), y("div", J, [
      (s(!0), y(k, null, b(t.wordList, (p, e) => (s(), g(H, {
        key: p + e,
        word: p,
        typedWord: t.typedWordList[e] || "",
        wordStatus: a(p, e)
      }, null, 8, ["word", "typedWord", "wordStatus"]))), 128))
    ]));
  }
}), X = ".wordSet[data-v-0c65b6ed]{display:flex;flex-wrap:wrap;overflow:hidden;-webkit-user-select:none;user-select:none}", Y = /* @__PURE__ */ _(Q, [["styles", [X]], ["__scopeId", "data-v-0c65b6ed"]]), ee = /* @__PURE__ */ W({
  __name: "TypingTest",
  props: {
    text: {
      type: Array,
      required: !0
    }
  },
  emits: ["results_ready"],
  setup(t, { expose: n, emit: a }) {
    const r = t, u = a, p = A("typingTest"), e = m([""]), o = m(0), l = m({}), d = m(0), i = m(-1), f = m([]), q = (c) => {
      if (r.text === null || i.value === -2)
        return;
      c.preventDefault();
      const v = e.value[e.value.length - 1] || "";
      if (c.key === " ") {
        e.value.length !== r.text.length && (r.text[o.value]?.length !== v?.length && (d.value = d.value + ((r.text[o.value]?.length || 0) - v.length)), e.value = [...e.value, ""], o.value++, f.value = [...f.value, { key: "Space", time: Date.now() }]);
        return;
      }
      if (c.key === "Backspace") {
        if (c.ctrlKey)
          o.value !== 0 ? v?.length === 0 ? (e.value = [...e.value.slice(0, -2), ""], o.value--) : e.value = [...e.value.slice(0, -1), ""] : e.value = [""];
        else if (v?.length === 0)
          o.value !== 0 && (e.value = e.value.slice(0, -1), o.value--);
        else {
          let h = e.value.slice(0, -1);
          h.push(v?.slice(0, -1) || ""), e.value = h;
        }
        f.value = [...f.value, { key: "Backspace", time: Date.now() }];
        return;
      }
      if (c.key.match(/^[-a-zA-Z0-9!@#$%^&*()_+=[\]{};':",./<>?\\|`~]$/)) {
        i.value === -1 && (i.value = Date.now());
        const h = r.text[o.value]?.charAt(v?.length || 0);
        c.key !== h && d.value++;
        let S = e.value.slice(0, -1);
        if (S.push(v + c.key), e.value = S, f.value = [...f.value, { key: c.key, time: Date.now() }], e.value.length === r.text.length && (v?.length || 0) === (r.text[o.value]?.length || 0) - 1) {
          const T = (Date.now() - i.value) / 1e3;
          i.value = -2;
          const L = r.text.flatMap(
            (w, x) => w.split("").map(
              (B, N) => e.value[x]?.charAt(N) !== B ? 1 : 0
            )
          ).reduce((w, x) => w + x, 0), D = d.value - L, E = r.text.length / (T / 60);
          l.value = {
            time_taken: T,
            uncorrected_errors: L,
            corrected_errors: D,
            wpm: E,
            text_length: r.text.join("").length + (r.text.length - 1),
            keystroke_log: f.value
          }, u("results_ready", { results: l.value }), console.log(l.value);
        }
      }
    };
    return n({ getResults: async () => {
      if (l.value)
        return l.value;
      for (; ; )
        if (await new Promise((c) => setTimeout(c, 1e4)), l.value) https://vuejs.org/guide/extras/web-components.html#events
          return l;
    } }), M(() => {
      p.value?.focus();
    }), (c, v) => (s(), y("div", {
      class: "test",
      ref_key: "typingTest",
      ref: p,
      tabindex: "0",
      onKeydown: q
    }, [
      F(Y, {
        wordList: t.text,
        typedWordList: e.value,
        activeWordIndex: o.value
      }, null, 8, ["wordList", "typedWordList", "activeWordIndex"])
    ], 544));
  }
}), te = ".test[data-v-bd556bed]{margin:0 auto;height:4.2lh;overflow:hidden;outline:none;transition:color .5s ease;font-family:monospace;font-size:24px}.test[data-v-bd556bed]:focus-within{filter:none}", re = /* @__PURE__ */ _(ee, [["styles", [te]], ["__scopeId", "data-v-bd556bed"]]), ne = defineCustomElement(re);
customElements.define("TypingTest", ne);
export {
  re as TypingTest
};
