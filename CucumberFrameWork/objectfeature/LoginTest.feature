Feature: smart Bear Application
	
Scenario Outline: Login with smart Bear application
Given User is on the Home Page
When the use navigated to login page 
When user enters the "<username>" and "<password>"
Then Message displayed as login successfull

Examples:
|username|password|
|Tester|test|

 
Scenario: Logout the smart bear application
Then user logout from the application

