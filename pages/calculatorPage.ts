// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor';
//
import {browser, element, by, ElementFinder} from 'protractor';
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
  x.click();
}

async selectOperation(operation:string):Promise<void>{
  let x:ElementFinder;
  x = await this.world.explicitWaitClickable(this.aPL.operation(operation));
  x.click();
  }  



  async getResult(): Promise<string>{
    let x:ElementFinder;
    x = await this.world.explicitWaitVisible(this.aPL.result);
    return x.getText();
}


}




