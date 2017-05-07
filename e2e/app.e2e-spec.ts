import { MarchaJarvisPage } from './app.po';

describe('marcha-jarvis App', () => {
  let page: MarchaJarvisPage;

  beforeEach(() => {
    page = new MarchaJarvisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
