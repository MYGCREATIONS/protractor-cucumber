import { After, Status,ScenarioResult  } from "cucumber";
import { browser } from "protractor";

//Hooks
After(async function(scenario){
  
    if (scenario.result.status === Status.FAILED) {
     const screenShotFail= await browser.takeScreenshot();
      this.attach(screenShotFail, "image/png");     
    }
  }
);
  