Feature: Form A
  As a HAZMAT officer
  I want to be able to request a CHEMET from my phone
  So that I can send it directly to EMARC without having to go through my control centre


  Scenario: Title updates when on form A
    Given I go to the Chemet Form A page
    Then the title should be "CHEMET request"

   Scenario: Can navigate to form A
     Given I go to the index page
     When I click on "Request CHEMET"
     Then I should end up on the Chemet Form A page
     
