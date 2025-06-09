/// <reference types='cypress' />
/// <reference types='../support' />

import HomePageObject from '../support/pages/home.pageObject';
import SignUpPageObject from '../support/pages/singUp.pageObject';
import { generateUser } from '../support/utils/generateUser';

describe('Sign Up page', () => {
  let user;
  const signUpPage = new SignUpPageObject();
  const homePage = new HomePageObject();

  beforeEach(() => {
    cy.visit('/');
    user = generateUser();
  });

  it('should provide the ability to register for a non-existent user', () => {
    cy.contains('a', 'Sign up').click();
    cy.url().should('include', '/register');

    signUpPage.typeUsername(user.username);
    signUpPage.typeEmail(user.email);
    signUpPage.typePassword(user.password);

    signUpPage.clickSignUpBtn();
    homePage.assertHeaderContainUsername(user.username);
  });

  // it.only('should not be a possibility to register for an existing user', () => {
  //   cy.contains('a', 'Sign up').click();
  //   cy.url().should('include', '/user/register');

  //   signUpPage.typeUsername(user.username);
  //   signUpPage.typeEmail(user.email);
  //   signUpPage.typePassword(user.password);

  //   signUpPage.clickSignUpBtn();
  //   cy.contains('li', 'This email is taken.').should('be.visible');
  // });

  it('should not register if no username is entered', () => {
    cy.contains('a', 'Sign up').click();
    cy.url().should('include', '/user/register');

    signUpPage.typeEmail(user.email);
    signUpPage.typePassword(user.password);

    signUpPage.clickSignUpBtn();
    cy.contains(
      'li',
      'Username must start with a letter, ' +
        'have no spaces, and be 2 - 40 characters.'
    ).should('be.visible');
  });

  it('should not register if email is not entered', () => {
    cy.contains('a', 'Sign up').click();
    cy.url().should('include', '/user/register');

    signUpPage.typeUsername(user.username);
    signUpPage.typePassword(user.password);

    signUpPage.clickSignUpBtn();
    cy.contains('li', 'This email does not seem valid.').should('be.visible');
  });

  it('should not register if no password is entered', () => {
    cy.contains('a', 'Sign up').click();
    cy.url().should('include', '/user/register');

    signUpPage.typeUsername(user.username);
    signUpPage.typeEmail(user.email);

    signUpPage.clickSignUpBtn();
    cy.contains('li', `can't be blank`).should('be.visible');
  });
});
