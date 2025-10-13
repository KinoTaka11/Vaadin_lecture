import { c as ct, u as un, v as vo, X as Xe, a as cl } from "./indexhtml-CaX2CGuA.js";
import { g } from "./state-9-chcL5F-BYe2_8JD.js";
import { o } from "./base-panel-CTLXjjmN-BcoJECLI.js";
import { r as r$1 } from "./icons-AkLm3oZf-qBgjAGFk.js";
const b = "copilot-features-panel{padding:var(--space-100);font:var(--font-xsmall);display:grid;grid-template-columns:auto 1fr;gap:var(--space-50);height:auto}copilot-features-panel a{display:flex;align-items:center;gap:var(--space-50);white-space:nowrap}copilot-features-panel a svg{height:12px;width:12px;min-height:12px;min-width:12px}";
var F = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, d = (e, t, a, o2) => {
  for (var s = o2 > 1 ? void 0 : o2 ? $(t, a) : t, r = e.length - 1, l; r >= 0; r--)
    (l = e[r]) && (s = (o2 ? l(t, a, s) : l(s)) || s);
  return o2 && s && F(t, a, s), s;
};
const n = window.Vaadin.devTools;
let i = class extends o {
  constructor() {
    super(...arguments), this.features = [], this.handleFeatureFlags = (e) => {
      this.features = e.data.features;
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.onCommand("featureFlags", this.handleFeatureFlags);
  }
  render() {
    return ct` <style>
        ${b}
      </style>
      ${this.features.map(
      (e) => ct`
          <copilot-toggle-button
            .title="${e.title}"
            ?checked=${e.enabled}
            @on-change=${(t) => this.toggleFeatureFlag(t, e)}>
          </copilot-toggle-button>
          <a class="ahreflike" href="${e.moreInfoLink}" title="Learn more" target="_blank"
            >learn more ${r$1.linkExternal}</a
          >
        `
    )}`;
  }
  toggleFeatureFlag(e, t) {
    const a = e.target.checked;
    un("use-feature", { source: "toggle", enabled: a, id: t.id }), n.frontendConnection ? (n.frontendConnection.send("setFeature", { featureId: t.id, enabled: a }), vo({
      type: Xe.INFORMATION,
      message: `“${t.title}” ${a ? "enabled" : "disabled"}`,
      details: t.requiresServerRestart ? "This feature requires a server restart" : void 0,
      dismissId: `feature${t.id}${a ? "Enabled" : "Disabled"}`
    })) : n.log("error", `Unable to toggle feature ${t.title}: No server connection available`);
  }
};
d([
  g()
], i.prototype, "features", 2);
i = d([
  cl("copilot-features-panel")
], i);
const w = {
  header: "Features",
  expanded: false,
  panelOrder: 35,
  panel: "right",
  floating: false,
  tag: "copilot-features-panel",
  helpUrl: "https://vaadin.com/docs/latest/flow/configuration/feature-flags"
}, x = {
  init(e) {
    e.addPanel(w);
  }
};
window.Vaadin.copilot.plugins.push(x);
export {
  i as CopilotFeaturesPanel
};
