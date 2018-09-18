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

class BookTitle extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          text-align: left;
        }
        .title {
          font-family: Aspira-Medium, Helvetica, Arial, Sans-serif;
          font-size: 28px;
          color: #333;
          margin-left: 1%;
        }
        .title-container {
          border-right: 2px solid #ccc;
          padding-right: 15px;
          margin-right: 7px;
        }
      </style>
      <h1>
        <span class="title-container">
          <span class="title">{{title}}</span>
        </span>
      </h1>
    `;
  }
}

window.customElements.define('book-title', BookTitle);
