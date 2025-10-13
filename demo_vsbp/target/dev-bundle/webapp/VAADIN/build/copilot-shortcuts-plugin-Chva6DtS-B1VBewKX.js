import { j as $c, a as cl, c as ct, I as Il, k as iu } from "./indexhtml-CaX2CGuA.js";
import { o as o$1 } from "./base-panel-CTLXjjmN-BcoJECLI.js";
import { r as r$1 } from "./icons-AkLm3oZf-qBgjAGFk.js";
const m = "copilot-shortcuts-panel{font:var(--font-xsmall);padding:var(--space-200);display:flex;flex-direction:column;gap:var(--space-50)}copilot-shortcuts-panel h3{font:var(--font-xsmall-semibold);margin:0;padding:0}copilot-shortcuts-panel h3:not(:first-of-type){margin-top:var(--space-200)}copilot-shortcuts-panel ul{list-style:none;margin:0;padding:0 var(--space-50);display:flex;flex-direction:column}copilot-shortcuts-panel ul li{display:flex;align-items:center;gap:var(--space-150);padding:var(--space-75) 0}copilot-shortcuts-panel ul li:not(:last-of-type){border-bottom:1px dashed var(--border-color)}copilot-shortcuts-panel ul li svg{height:16px;width:16px}copilot-shortcuts-panel ul li .kbds{flex:1;text-align:right}copilot-shortcuts-panel kbd{display:inline-block;border-radius:var(--radius-1);border:1px solid var(--border-color);min-width:1em;min-height:1em;text-align:center;margin:0 .1em;padding:.25em;box-sizing:border-box;font-size:var(--font-size-1);font-family:var(--font-family);line-height:1}";
var v = (i, s, n, a) => {
  for (var t = s, r = i.length - 1, p; r >= 0; r--)
    (p = i[r]) && (t = p(t) || t);
  return t;
};
let c = class extends o$1 {
  render() {
    return ct`<style>
        ${m}
      </style>
      <h3>Global</h3>
      <ul>
        <li>${r$1.vaadinLogo} Copilot ${o(iu.toggleCopilot)}</li>
        <li>${r$1.terminal} Command window ${o(iu.toggleCommandWindow)}</li>
        <li>${r$1.undo} Undo ${o(iu.undo)}</li>
        <li>${r$1.redo} Redo ${o(iu.redo)}</li>
      </ul>
      <h3>Selected component</h3>
      <ul>
        <li>${r$1.code} Go to source ${o(iu.goToSource)}</li>
        <li>${r$1.copy} Copy ${o(iu.copy)}</li>
        <li>${r$1.paste} Paste ${o(iu.paste)}</li>
        <li>${r$1.duplicate} Duplicate ${o(iu.duplicate)}</li>
        <li>${r$1.userUp} Select parent ${o(iu.selectParent)}</li>
        <li>${r$1.userLeft} Select previous sibling ${o(iu.selectPreviousSibling)}</li>
        <li>${r$1.userRight} Select first child / next sibling ${o(iu.selectNextSibling)}</li>
        <li>${r$1.trash} Delete ${o(iu.delete)}</li>
      </ul>`;
  }
};
c = v([
  cl("copilot-shortcuts-panel")
], c);
function o(i) {
  return ct`<span class="kbds">${Il(i)}</span>`;
}
const x = $c({
  header: "Keyboard Shortcuts",
  tag: "copilot-shortcuts-panel",
  width: 400,
  height: 550,
  floatingPosition: {
    top: 50,
    left: 50
  }
}), y = {
  init(i) {
    i.addPanel(x);
  }
};
window.Vaadin.copilot.plugins.push(y);
