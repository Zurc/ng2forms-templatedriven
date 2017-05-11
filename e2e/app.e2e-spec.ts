import { Ng2formsTemplatedrivenPage } from './app.po';

describe('ng2forms-templatedriven App', () => {
  let page: Ng2formsTemplatedrivenPage;

  beforeEach(() => {
    page = new Ng2formsTemplatedrivenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
