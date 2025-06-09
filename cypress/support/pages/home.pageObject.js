import PageObject from '../PageObject';

class HomePageObject extends PageObject {
  url = '/#/';

  get usernameLink() {
    return cy.get('a[class="nav-link"]');
  }

  assertHeaderContainUsername(username) {
    this.usernameLink.should('contain.text', username.toLowerCase());
  }
}

export default HomePageObject;
