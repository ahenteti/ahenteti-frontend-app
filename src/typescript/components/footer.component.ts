import { BaseStaticHtmlComponent } from "./component";

export class FooterHtmlComponent extends BaseStaticHtmlComponent {
  _toHtml() {
    return /* html */ `
      <footer>
        <p>footer</p>
      </footer>
    `;
  }

}

