import { SwatPage } from './app.po';

describe('swat App', function() {
  let page: SwatPage;

  beforeEach(() => {
    page = new SwatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
