
import {calculatorPage} from '../pages/calculatorPage';
import { Given, When, Then} from 'cucumber';
import { browser } from 'protractor';
import {expect} from 'chai';
import {assert} from 'chai';

let calPage = new calculatorPage(); 

Given('I have the calculator application', async function () {
  // Write code here that turns the phrase above into concrete actions
  
});

Given('I select {stringInDoubleQuotes} as operation', async function(operation){
   await calPage.selectOperation(operation);
});

When('I enter {int} in the first field', async function (number) {
  // Write code here that turns the phrase above into concrete actions
  await calPage.enterNumber("first",number);

});

When('I enter {int} in the second field', async function (number) {
  // Write code here that turns the phrase above into concrete actions
  await calPage.enterNumber("second",number);

});

Then('I should get {stringInDoubleQuotes} as a result', async function (anwser) {
  await calPage.sumbit();
  //Assertion styles
  //using expect x=>expect(Number(x)).to.equal(anwser)
  //using assert assert.equal(anwser,Number(x))
  let result = await calPage.getResult();
  assert.equal(anwser,Number(result));
});









