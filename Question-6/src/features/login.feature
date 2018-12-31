Feature: Login to Open Cart
  As a Customer
  I want to login to Open Cart

 @Test
Scenario Outline: Login to Open Cart
    Given I open the url "/"
    Then I should land on "The best FREE and open-source eCommerce platform" page containing "homePage_title"
    And I select "loginUrl"
    And I should see login form
    When I fill "email_value_inputfield" with <emailId>
    When I fill "password_value_inputfield" with <password>
    And I select "loginButton"
    Then I see error message


    Examples:
      | emailId                     | password          |
      | test@gmail.com              | p@ssword          | 