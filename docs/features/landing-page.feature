Feature: Landing Page
  As a visitor
  I want to see a professional landing page
  So that I can understand the project and get started quickly

  Scenario: Landing page displays correctly
    Given I navigate to the home page
    Then I should see the main title "Next.js Starter Template"
    And I should see a description of the project
    And I should see at least one call-to-action button

  Scenario: Feature highlights are visible
    Given I navigate to the home page
    Then I should see three feature cards
    And the cards should include "BDD First", "Test Driven", and "Modern Stack"

  @not-implemented
  Scenario: Dark mode toggle works
    Given I navigate to the home page
    When I click the dark mode toggle
    Then the page should switch to dark mode
    And my preference should be saved
