// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

declare namespace Cypress {
  interface Chainable<Subject> {
    login: typeof login
  }
}

const login = (
  email: string = Cypress.env('EMAIL'),
  password: string = Cypress.env('PASSWORD')
) => {
  cy.visit(Cypress.env('URL'))
  cy.get('#email').type(email)
  cy.get('#password').type(password)
  cy.get('#id_button_submit').click()
}

Cypress.Commands.add('login', login)
