import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image/iron-image.js';

class BookList extends PolymerElement {
  static get template() {
    return html`
      <style is="custom-style">
        :host {
        }
        iron-image {
          border-radius: 5px;
          width: 80%;
          --iron-image-width: 100%;
          box-shadow: 0 1px 2px rgba(0,0,0,0.15);
          transition: box-shadow 0.3s ease-in-out;
        }
        .column {
            float: left;
            width: 25%;
            padding: 10px;
        }
        .column img {
            opacity: 0.8;
            cursor: pointer;
        }

        .column img:hover {
            opacity: 1;
        }
        .row:after {
            content: "";
            display: table;
            clear: both;
        }
        iron-image:hover{
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          cursor: pointer;
        }
      </style>
      <div class="row">
        <template is="dom-repeat" items="[[dummyData]]">
          <div class="column">
            <iron-image src="[[item.image]]"></iron-image>
          </div>
        </template>
      </div>
    `;
  }
    constructor() {
    super();
    this.dummyData = [
    { image: "https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg" },
    { image: "https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg" },
    { image: "https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg" },
    { image: "https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg" },
    { image: "https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg" },
    { image: "https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg" },
    { image: "https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg" },
    { image: "https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg" },
    { image: "https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg" },
    { image: "https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg" }

    ];
  }
}

window.customElements.define('book-list-view', BookList);
