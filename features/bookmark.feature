Feature: Top level app stuff
  As a HAZMAT officer
  I want to be able to see which icon to click on
  So that I can ask for a CHEMET quickly

  Scenario: Title shows CHEMET request
    Given I go to the index page
    Then the title should be "CHEMET request"