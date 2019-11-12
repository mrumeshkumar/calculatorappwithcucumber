Feature: Calculator
    Scenario: calculate add
        Given I have a calc with 12 3
        When I ask it to say add
        Then it should answer with add 15
   