import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('test', () => {
    expect(1).toEqual(1);
  });

});
