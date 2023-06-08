Feature: Perform basic calculator operations

    Background:
        Given I visit calculator web page

    

    @smoke
    Scenario Outline: Verify the calculator operations for scientific calculator
        When I click on number "<num1>"
        And I click on operator "<Op>"
        And I click on number "<num2>"
        Then I see the result as "<res>"
        Examples:
            | num1 | Op | num2 | res |
            | 6    | /  | 2    | 3   |
            | 3    | *  | 2    | 6   |

    @smoke
    Scenario: Verify the basic calculator operations with parameter
        When I click on number "7"
        And I click on operator "+"
        And I click on number "5"
        Then I see the result as "12"