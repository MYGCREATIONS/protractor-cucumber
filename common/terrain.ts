
import { ExpectedConditions, ElementFinder, browser, WebElement } from "protractor";

const EC = ExpectedConditions;
export class terrain{

  /*async getAllElements(element:ElementFinder):Promise<ElementFinder>{
    return await browser.element(element);
  }*/

   async explicitWaitClickable(element:ElementFinder):Promise<ElementFinder>{
    const x = EC.elementToBeClickable(element);
    await browser.wait(x,browser.params.clickable,"Element is not clickable").catch((e)=>{console.log(`Error:::::${e}`); throw e;});
    return element;    
}
  
 async explicitWaitVisible(element:ElementFinder):Promise<ElementFinder>{
   const x = EC.visibilityOf(element);
   await browser.wait(x,browser.params.visible,"Element is not visible");
  return element;
}

 async explicitWaitPresence(element:ElementFinder):Promise<ElementFinder>{
   const x = EC.presenceOf(element);
   await browser.wait(x,browser.params.presence,"Element is not present");
   return element;
}

 async verifyElementAbsent(element:ElementFinder):Promise<ElementFinder>{
   const x = EC.invisibilityOf(element);
   await browser.wait(x,browser.params.presence,"Element should not be present, but it is");
  return element;
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
  await browser.sleep(5000)
  }
  else{
    await browser.sleep(1);
  }
}






}