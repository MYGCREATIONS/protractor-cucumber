import * as stack from "stack-trace";
import { ExpectedConditions, ElementFinder, browser, WebElement, ElementArrayFinder, element } from "protractor";
import { elementTextContains } from "selenium-webdriver/lib/until";
import { Locator } from "selenium-webdriver";

const EC = ExpectedConditions;
export class terrain{

   async explicitWaitClickable(element:ElementFinder):Promise<ElementFinder>{
    const x = EC.elementToBeClickable(element);
    try{
    await browser.wait(x,browser.params.WaitingTime.clickable,`Element ${element.locator().toString()} is not clickable`);
    return await element; 
    }
    catch(e){
      console.error(e.stack);
      throw e;
    }         
}
  
 async explicitWaitVisible(element:ElementFinder):Promise<ElementFinder>{
   const x = EC.visibilityOf(element);
   try{
     await browser.wait(x,browser.params.WaitingTime.visible,`Element ${element.locator().toString()} is not visible`);
     return await element;
   }
   catch(e){
     console.error(e.stack);
     throw e;
   }
}

 async explicitWaitPresence(element:ElementFinder):Promise<ElementFinder>{
   const x = EC.presenceOf(element);
   try{
   await browser.wait(x,browser.params.WaitingTime.presence,`Element ${element.locator().toString()} is not present`);
   return await element;
   }
   catch(e){
    console.error(e.stack);
    throw e;
   }
}

//async getAllElements(elementz:):Promise<ElementFinder[]>{  
 // return await element.all(elementz);
//}


 async verifyElementAbsent(element:ElementFinder):Promise<ElementFinder>{
   const x = EC.invisibilityOf(element);
   try{
    await browser.wait(x,browser.params.WaitingTime.presence,"Element should not be present, but it is");
    return await element;
   }
   catch(e){
     console.error(e.stack);
    throw e;
   }
}

 async implicitWaitReset(time:number){
  await browser.manage().timeouts().implicitlyWait(time);
}

 async tinySleep(){
  await browser.sleep(10);
}

 async bigSleep(){
  await browser.sleep(100);
}

 async debugSleep(bool:boolean){
  if(bool){
  await browser.sleep(2000)
  }
  else{
    await browser.sleep(1);
  }
}
}