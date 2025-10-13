import { P as Pl, E } from "./indexhtml-CaX2CGuA.js";
class o extends Pl {
  constructor() {
    super(...arguments), this.eventBusRemovers = [], this.messageHandlers = {};
  }
  createRenderRoot() {
    return this;
  }
  onEventBus(e, s) {
    this.eventBusRemovers.push(E.on(e, s));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.eventBusRemovers.forEach((e) => e());
  }
  onCommand(e, s) {
    this.messageHandlers[e] = s;
  }
  handleMessage(e) {
    return this.messageHandlers[e.command] ? (this.messageHandlers[e.command].call(this, e), true) : false;
  }
}
export {
  o
};
