import { AngularActioncablePage } from './app.po';

describe('angular-actioncable App', () => {
  let page: AngularActioncablePage;

  beforeEach(() => {
    page = new AngularActioncablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
