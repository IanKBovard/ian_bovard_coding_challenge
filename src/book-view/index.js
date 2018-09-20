
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import'./book-description.js';
import'./table-of-contents.js';
import'./book-title.js';

//This is the main book view component. It is responsible for making the AJAX request and passing relevent data to each component.
class BookView extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
        }
        .book-data {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          font-family: Aspira-Bold, Helvetica, Arial, Sans-serif;
          color: #000;
        }
      </style>
      <iron-ajax
        auto
        url=[[url]]
        handle-as="json"
        on-response="handleResponse">
      </iron-ajax>
      <div class="book-data">
        <book-title title="[[bookData.title]]">
        </book-title>
        <book-description isbn="[[bookData.isbn]]" authors="[[bookData.contributors]]">
        </book-description>
        <table-of-contents toc="[[bookData.toc]]">
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

window.customElements.define('book-view', BookView);