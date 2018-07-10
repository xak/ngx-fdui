import { NgxFduiPage } from './app.po';

describe('ngx-fdui App', () => {
  let page: NgxFduiPage;

  beforeEach(() => {
    page = new NgxFduiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
