import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { APIUtility } from '../../../../Utility/APIUtility'

const apiPage = new APIUtility()

When('I send a {string} request to {string} endpoint', (req, endpoint) => {
  apiPage.getQuery(req, endpoint)
})

Then(
  'I Verify that a {string} request to {string} endpoint returns status',
  (req, endpoint) => {
    apiPage.iVerifyGETRequest(req, endpoint)
  },
)

// When('I send POST request to update the employee details', (datatable) => {
//   apiPage.postQueryCreate(datatable)
// })

Then('I verify that {string} request to {string} endpoint', (datatable) => {
  apiPage.postQueryCreate(datatable)
})

Then('I verify the POST call', (datatable) => {
  apiPage.postQueryCreate(datatable)
})

When('I send {string} request to endpoint {string}', (req, endpoint) => {
  apiPage.delQueryReq(req, endpoint)
})

Then(
  'I verify {string} request to endpoint {string} returns status',
  (req, endpoint) => {
    apiPage.delQueryReq(req, endpoint)
  },
)
