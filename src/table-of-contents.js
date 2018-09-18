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

class TableOfContents extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
        }
        .toc-container {
          position: relative;
          display: inline-block;
          width: 500px;
          height: 252px;
          font-family: Aspira-Bold, Helvetica, Arial, Sans-serif;
          color: #000;
        }
        .toc-text {
          font-weight: bold;
          font-size: 18px;
          position: relative;
          display: inline-block;
          padding-left: 20px;
          padding-top: 20px;
        }
        .toc-content {
          position: relative;
          padding-left: 30px;

        }
      </style>
      <div class="toc-container">
        <span class="toc-text">Contents</span>
        <div class="toc-content">
          <template is="dom-repeat" items="[[toc]]">
            <p>{{item}}</p>
          </template>
        </div>
      </div>
    `;
  }
}

window.customElements.define('table-of-contents', TableOfContents);
