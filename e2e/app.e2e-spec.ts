import { Ag2blogPage } from './app.po';

describe('ag2blog App', function() {
  let page: Ag2blogPage;

  beforeEach(() => {
    page = new Ag2blogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
