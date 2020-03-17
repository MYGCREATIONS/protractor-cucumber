Feature: Simple maths

   Math made easy   
@CalculatorSmokeTesting1
Scenario Outline: Simple operation
Given I have the calculator application
And I select "<operation>" as operation 
When I enter "<firstOperand>" in the first field
And I enter "<secondOperand>" in the second field
Then I should get "<result>" as a result 
#And I should have 4 count in history
Examples:
| operation | firstOperand | secondOperand | result |
| +  | 12 | 13  | 25|
| *  | 10 | 13  | 130|
| @  | 1200 | 10  | 1190|
| -  | 100 | 1  | 99|
| %  | 1200 | 10  | 0|
| -  | 1200 | 10  | 1190|







