Feature: Saucedemo Application
As a user I should be able to to interact with the Saucedemo Application
    
    
    Scenario: A User should be able to Login, search for Inventory, add product to cart, checkout and Logout of the application
        Given I launch the app
        When I input username and password
        And I click on login in button
        Then I should view inventory list successfully
       # When I click on filter field
        And I click on name Z to A
        And I click on price High to low
        When I click on add to cart button
        And I click on shopping cart badge Icon
        And I click on remove button
        And I click on continue shopping button
        And I click on Add to cart button
        And I click on cart Icon
        When I click on checkout button
        And I input First and Last name
        And I input my zipcode
        And I click on continue button
        And I click on Finish button
        And I click on Hamburger button
        Then I click on Logout button
