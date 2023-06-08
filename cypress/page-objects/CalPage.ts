/// <reference types="cypress" />

import cypress = require('cypress')

export class CalPage {
  visitCalPage() {
    cy.visit(Cypress.config('baseUrl'))
  }

  scrollToHeader() {
    return cy
      .get(
        'img[src="//d26tpo4cm8sb6k.cloudfront.net/img/svg/calculator-white.svg"]',
      )
      .scrollIntoView()
  }

  clickOnNumber(number) {
    return cy.get('span[onclick="r(' + number + ')"]').click()
  }

  clickOnOperator(operator) {
    return cy.get(`span[onclick="r('` + operator + `')"]`).click()
  }

  getCalculationResult(result) {
    cy.get('span[onclick="r(\'=\')"]').click()
    cy.get('#sciOutPut').should('contain', result)
  }

  clickOnNumberSeven() {
    cy.get('span[onclick="r(7)"]').click()
  }

  clickOnMinusOperator() {
    cy.get('span[onclick="r(\'-\')"]').click()
  }

  clickOnNumberFive() {
    cy.get('span[onclick="r(5)"]').click()
  }

  getResult() {
    cy.get('span[onclick="r(\'=\')"]').click()
    cy.get('#sciOutPut').should('contain', '2')
  }

  EnterNumberOnCalculatorPage(datatable) {
    datatable.hashes().forEach((element) => {
      cy.get('span[onclick="r(' + element.num1 + ')"]').click()
      cy.get('span[onclick="r(\'' + element.Op + '\')"]').click()
      cy.get('span[onclick="r(' + element.num2 + ')"]').click()
      cy.get('#sciOutPut').should('contain', '' + element.res + '')
      cy.get('span[onclick="r(\'C\')"]').click()
    })
  }

  IVerifyResult(res) {
    cy.get('#sciOutPut').should('contain', '' + res + '')
    cy.get('span[onclick="r(\'C\')"]').click()
  }
}
