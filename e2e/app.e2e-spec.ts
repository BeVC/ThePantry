import { ThePantryPage } from './app.po';

describe('the-pantry App', () => {
  let page: ThePantryPage;

  beforeEach(() => {
    page = new ThePantryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
