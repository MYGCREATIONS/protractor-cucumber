Feature: Simple maths

   Math made easy   
@CalculatorSmokeTesting1
Scenario Outline: Simple operation
Given I have the calculator application
And I select "<operation>" as operation 
When I enter 20 in the first field
And I enter 10 in the second field
Then I should get "<result>" as a result

Examples:
| operation |  result|
| +         |  30    |   
| -         |  1    |
| *         |  20   |
| %         |  0     |


