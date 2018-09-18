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
import '@polymer/iron-image/iron-image.js';

class BookDescription extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          float: left;
          width: 30%;
          margin-left: 1%;
          margin-right: 1%;
        }
        iron-image {
          width: 100%;
          border-radius: 4px;

        }
      </style>
      <div>
        <iron-image src="https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg"></iron-image>
        <div>
        <span class="isbn">ISBN:</span>
        <span class="isbn-number">{{isbn}}</span>
        </div>
        <template is="dom-repeat" items="[[authors]]">
          <p>Authors: {{item}}</p>
        </template>
      </div>
    `;
  }
}

window.customElements.define('book-description', BookDescription);
