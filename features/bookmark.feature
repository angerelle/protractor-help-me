Feature: Top level app stuff
  As a HAZMAT officer
  I want shortcuts to be labelled Firemet
  So that I can find the page I want quickly

  Scenario: Title shows CHEMET request
    Given I go to the index page
    Then the title should be "Firemet"