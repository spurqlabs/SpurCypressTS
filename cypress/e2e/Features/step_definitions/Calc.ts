import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor'
import { CalPage } from '../../../page-objects/CalPage'
const calPage = new CalPage()

Given('I visit calculator web page', () => {
  calPage.visitCalPage()
  cy.wait(6000)
})

Then('I see the result as {string}', (result) => {
  calPage.getCalculationResult(result)
  calPage.scrollToHeader()
})

When('I click on number {string}', (num1) => {
  calPage.clickOnNumber(num1)
  calPage.scrollToHeader()
})

When('I click on operator {string}', (Op) => {
  calPage.clickOnOperator(Op)
  calPage.scrollToHeader()
})
