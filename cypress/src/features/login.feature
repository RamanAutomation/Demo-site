Feature: Login page

  Scenario: Verify login with invalid user details
    Given Login to the goodboods ERP site
    When Verify the login page header
    And Enter the server name '104.102.09'
    And Enter the username 'Test'
    And Enter the password 'Test1234'
    And click the login subit button
    And Verify the Login failed to connect the database popup
    Then Click the error popup ok button

  Scenario: Verify the Forgot password popup
    Given Login to the goodboods ERP site
    When click the Forgot password link
    Then verify the Forgot password popup message

  Scenario: Verify the input field warning messages
    Given Login to the goodboods ERP site
    When click the login subit button
    And verify the server field required warning messages
    And verify the username field required warning messages
    And verify the password field required warning messages
