/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class BookDescription extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          float: left;
          width: 33.33%;
        }
      </style>
      <div>
        <h1>PICTURE AND DESC</h1>
        <p>ISBN:     {{isbn}}</p>
        <template is="dom-repeat" authors="[[authors]]">
          <p>{{author}}</p>
        </template>
      </div>
    `;
  }
}

window.customElements.define('book-description', BookDescription);
