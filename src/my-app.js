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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/iron-ajax/iron-ajax.js';
import'./book-description.js';
import'./table-of-contents.js';
import'./book-title.js';
// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
        }
        .book-data {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }
      </style>
      <iron-ajax
        auto
        url="https://d1re4mvb3lawey.cloudfront.net/pg1017/index.json"
        handle-as="json"
        on-response="handleResponse">
      </iron-ajax>
      <div class="book-data">
        <book-title title="{{bookData.title}}">
        </book-title>
        <book-description isbn="{{bookData.isbn}}" authors="{{bookData.contributors}}">
        </book-description>
        <table-of-contents toc="{{bookData.toc}}">
        </table-of-contents>
      </div>
    `;
  }
    handleResponse(res){
    this.bookData = res.detail.response
    return
  }
    constructor() {
    super();
    this.bookData = {}
  }
}

window.customElements.define('my-app', MyApp);
