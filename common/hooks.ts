import { After, Status,ScenarioResult  } from "cucumber";
import { browser } from "protractor";
import * as cjson from "circular-json";
import { readSync } from "fs";

//Hooks
After(async function(scenario){
  let result = JSON.parse(cjson.stringify(scenario)); 
  if (result["status"] === Status.FAILED) {    
      console.log("screenshot captured");
      const screenShotFail= await browser.takeScreenshot();
      this.attach(screenShotFail, "image/png");     
    }
  }
);
  