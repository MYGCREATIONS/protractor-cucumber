
import {browser, element, by, ElementFinder} from 'protractor';
import {clickAcademyPageLocators}  from '../common/locators';
import {terrain} from '../common/terrain'; 
export class clickAcademyPage{

    
public caPL:clickAcademyPageLocators;
public world:terrain;

  constructor(){
    this.world = new terrain(); 
    this.caPL = new clickAcademyPageLocators();
  }

  async FastFormSubmission():Promise<void>{
    (await this.world.explicitWaitClickable(this.caPL.name)).sendKeys("username");
    await this.world.debugSleep(false);
    console.log("this is another update ");
    console.log("this is just a small testing");
    console.log("this is new update just after merging");
    (await this.world.explicitWaitClickable(this.caPL.name)).clear();
    await this.world.debugSleep(false);
    (await this.world.explicitWaitClickable(this.caPL.name)).sendKeys("another username ");
    await this.world.debugSleep(false);
    (await this.world.explicitWaitClickable(this.caPL.email)).sendKeys("test@gmail.com");
    await this.world.debugSleep(false);
    (await this.world.explicitWaitClickable(this.caPL.password)).sendKeys("pwd"); 
    await this.world.debugSleep(false);
    await this.world.explicitWaitClickable(this.caPL.gender);
    await this.world.debugSleep(false);
    (await this.world.explicitWaitClickable(this.caPL.employmentStatus)).click();
   await this.world.debugSleep(false);
    (await this.world.explicitWaitClickable(this.caPL.dateOfBirth)).sendKeys("02/02/1990");
    await this.world.debugSleep(false);
    (await this.world.explicitWaitClickable(this.caPL.submitButton)).click();
    await this.world.debugSleep(false); 

  }

  async getSuccessMessage():Promise<string>{
    let x:ElementFinder;
    x = await this.world.explicitWaitVisible(this.caPL.successMessage);
    await console.log((await x.getText()).toString());
    return (await (await x.getText()).split("!")[0].replace(/[^\x20-\x7E]/gmi, ""));

  }
}
