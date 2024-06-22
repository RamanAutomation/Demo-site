Feature:Bug 1

Scenario: Bug documentation
Given Login to the goodboods ERP site
    When Verify the login page header
    And Enter the server name '104.102.09'
    And Enter the username 'Test'
    And Enter the password 'Test1234'
    And click the login subit button
    And Verify the Login failed to connect the database popup
    And Remove the username
    And verify the username field required warning messages