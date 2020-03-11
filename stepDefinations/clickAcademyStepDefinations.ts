
import {clickAcademyPage} from '../pages/clickAcademyPage';
import { Given, When, Then} from 'cucumber';
import { browser } from 'protractor';
import {expect} from 'chai';
import {assert} from 'chai';

let caPage = new clickAcademyPage();

Given('I am on the clickacademy page', async function () {
  //validate the page
  });

  When('I provide the valid credentials', async function () {
  await caPage.FastFormSubmission();

  });


  Then('I should see the success alert', async function () {
  let result = await caPage.getSuccessMessage();
  assert.equal("Success",result);
   
  });








