Feature: API Feature

    @api
    Scenario: Verify the GET call for dummy website
        When I send a 'GET' request to 'api/users?page=2' endpoint
        Then I Verify that a 'GET' request to 'api/users?page=2' endpoint returns status

 


    @api
    Scenario: Verify the DELETE call for dummy website
        When I send 'POST' request to endpoint 'api/users/2'
            | name     | job    |
            | morpheus | leader |
        Then I verify the POST call
            | req  | endpoint  | name     | job           | status |
            | POST | api/users | morpheus | zion resident | 200    |


    @api
    Scenario: I send POST Request call and Verify the POST call Using Step Reusablity
         When I send 'POST' request to endpoint 'api/users/2'
            | req  | endpoint  | name     | job           |
            | POST | api/users | morpheus | zion resident |
        Then I verify the POST call
            | req  | endpoint  | name     | job           | status |
            | POST | api/users | morpheus | zion resident | 200    |

   
