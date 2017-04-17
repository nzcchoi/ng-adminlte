import { browser, element, by } from 'protractor';

export class NgAdminltePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('al-root h1')).getText();
  }
}
