// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor';
//
import {browser, element, by, ElementFinder, ElementArrayFinder} from 'protractor';
import {calculatorPageLocators}  from '../common/locators';
import {terrain} from '../common/terrain'; 


export class calculatorPage {
  

public aPL:calculatorPageLocators;
public world:terrain;

  constructor(){
    this.world = new terrain(); 
    this.aPL = new calculatorPageLocators();
  }
  

async enterNumber(field: string, value: number):Promise<void>{
  let x:ElementFinder;
  if(field == "first"){
  x = await this.world.explicitWaitClickable(this.aPL.firstNumber);
  x.sendKeys(value);
}
  else if(field == "second"){
  x = await this.world.explicitWaitClickable(this.aPL.secondNumber);
  x.sendKeys(value);
  }
  else{
    Error("The field doesnot exist");
  }
}

async sumbit():Promise<void>{
  let x:ElementFinder;
  x = await this.world.explicitWaitClickable(this.aPL.goButton);
  await x.click();
}

async selectOperation(operation:string):Promise<void>{
  let x:ElementFinder;
  x = await this.world.explicitWaitClickable(this.aPL.operation(operation));
  await x.click();
  }  

async getCount():Promise<Number>{
  let x:ElementFinder[];
  x = await this.aPL.history;
  return x.length;
}

async getResultFromHistory():Promise<string>{
  let x:ElementFinder;
  x = await this.world.explicitWaitVisible(this.aPL.historyResult);
  await console.log((await x.getText()).toString());
  return (await x.getText()).toString();
}

async getTimeFromHistory():Promise<string>{
  let x:ElementFinder;
  x = await this.world.explicitWaitVisible(this.aPL.historyTime);
  await console.log((await x.getText()).toString());
  return (await x.getText()).toString();
}

async getExpressionFromHistory():Promise<string>{
  let x:ElementFinder;
  x = await this.world.explicitWaitVisible(this.aPL.historyExpression);
  await console.log((await x.getText()).toString());
  return (await x.getText()).toString();
}

  async getResult(): Promise<string>{
    let x:ElementFinder;
    this.world.tinySleep();
    x = await this.world.explicitWaitVisible(this.aPL.result);
    return await x.getText();
}


}




