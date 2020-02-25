// Because this file imports from  protractor, you'll need to have it as a
// project dependency. Please see the reference config: lib/config.ts for more
// information.
//
// Why you might want to create your config with typescript:
// Editors like Microsoft Visual Studio Code will have autocomplete and
// description hints.
//
// To run this example, run `protractor conf.js`.
import {Config, browser, ElementFinder} from 'protractor';
import * as reporter from "cucumber-html-reporter";
import {After, Before, BeforeAll, AfterAll, Status, HookScenarioResult,World, setWorldConstructor} from 'cucumber'

 
//Hooks
After(async function (scenario:HookScenarioResult){

      const screenShotFail= await browser.takeScreenshot();
      this.attach(screenShotFail, "image/png");
  
})


export let config: Config = {
    framework: 'custom',
    capabilities: {
      browserName: 'chrome'
    },
    specs: ['../stepDefinations/*.feature'],
  
   //   'spec.js',
   
    directConnect: true,
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
      compiler: "ts:ts-node/register",
      format: 'json:./report/cucumber_report.json',
      require: ['../stepDefinations/*.ts'],
      tags:['@CalculatorSmokeTesting1']
    //  output: './reports/cucumber_report.html',
      //tags help us execute specific scenarios of feature files
    },


    
    // Before startign tests 
     onPrepare: async function () {
     // browser.waitForAngular()
     console.log("on prepare funciton called");
     await browser.manage().window().maximize(); // maximize the browser before executing the feature files
     await browser.manage().timeouts().implicitlyWait(10*1000);
     await browser.get(browser.params.Login.Url);
    },

    params:{
      WaitingTime:{
        visiblity:1000*180,
        clickability:1000*10,
        presence:1000*5,
  
      },
      Login:{
        Url:'http://juliemr.github.io/protractor-demo/',
        userame:'yousuf',
        password:'pwd'
      }
    },

    
    onComplete: async function(){
    
      var options = {
        theme: 'bootstrap',
        jsonFile: './report/cucumber_report.json',
        output: './report/cucumber_report.html',
        screenshotsDirectory: './screenshots/',
        storeScreenshots: false,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
    reporter.generate(options);
    console.log("All tests have been executed");
  
    },

  

  
  
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
   
  };