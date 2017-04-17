import { NgAdminltePage } from './app.po';

describe('ng-adminlte App', () => {
  let page: NgAdminltePage;

  beforeEach(() => {
    page = new NgAdminltePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('al works!');
  });
});
