import { browser, element, by } from 'protractor';

export class NgAdminltePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('alt-root h1')).getText();
  }
}
