import { SarakingPage } from './app.po';

describe('saraking App', function() {
  let page: SarakingPage;

  beforeEach(() => {
    page = new SarakingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
