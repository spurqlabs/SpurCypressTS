/// <reference types="cypress" />

export class APIUtility {
  getQuery(req, endpoint) {
    cy.request(req, Cypress.env('api_URL') + endpoint)
  }

  iVerifyGETRequest(req, endpoint) {
    cy.request(req, Cypress.env('api_URL') + endpoint).then((response) => {
      expect(response).to.have.property('status', 200)
    })
  }

  postQueryCreate(datatable) {
    datatable.hashes().forEach((element) => {
      const body = { name: element.name, job: element.job }
      cy.log(JSON.stringify(body))
      cy.request(element.req, Cypress.env('api_URL') + 'api/users', body).then(
        (response) => {
          expect(response).to.have.property('status', 201)
          cy.log(JSON.stringify(response.body.name))
          expect(response.body.name).to.eql(element.name)
        },
      )
    })
  }

  putQueryReq(req, job) {
    cy.request(req, Cypress.env('api_URL') + 'api/users/2', job).then(
      (response) => {
        expect(response).to.have.property('status', 200)
        expect({ name: 'morpheus', job: job }).to.eql({
          name: 'morpheus',
          job: job,
        })
      },
    )
  }

  delQueryReq(req, endpoint) {
    cy.request(req, Cypress.env('api_URL') + endpoint).then((response) => {
      expect(response).to.have.property('status', 201)
    })
  }
}
