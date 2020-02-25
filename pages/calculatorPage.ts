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
  if(field == "first"){
  await this.world.explicitWaitClickable(this.aPL.firstNumber).then((element)=>element.sendKeys(value));
  }
  else if(field == "second"){
  await this.world.explicitWaitClickable(this.aPL.secondNumber).then((element)=>element.sendKeys(value));
  }
  else{
    Error("The field doesnot exist");
  }
}

async sumbit():Promise<void>{
  await this.world.explicitWaitClickable(this.aPL.goButton).then((element)=>element.click());
}

async selectOperation(operation:string):Promise<void>{
  
  await this.world.explicitWaitClickable(this.aPL.operation(operation)).then((element)=>element.click());
  }  



  async getResult(): Promise<string>{

 return await this.world.explicitWaitVisible(this.aPL.result).then((element)=>element.getText());;
  }


}




