import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@jyskebank/jb-bar';

export class Foo extends PolymerElement {
  
  static get template() {
    return html`
      <section>
        <h4>Foo!</h4>
        <jb-bar></jb-bar>
      </section>
    `;
  }

}

customElements.define('jb-foo', Foo);
