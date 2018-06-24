import { PolymerElement, html } from '@polymer/polymer/polymer-element';

export class Foo extends PolymerElement {
  
  static get template() {
    return html`
      <section>Foo!</section>
    `;
  }

}

customElements.define('jb-foo', Foo);
