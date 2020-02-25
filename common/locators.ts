import {browser, element, by, ElementFinder} from 'protractor';

export class calculatorPageLocators{
    nameInput:ElementFinder = element(by.model('yourName'));
    greeting:ElementFinder = element(by.binding('yourName'));
    firstNumber: ElementFinder = element(by.model("first"));
    secondNumber: ElementFinder = element(by.model("second"));
    goButton:ElementFinder = element(by.buttonText("Go!"));
    result:ElementFinder = element(by.xpath("//h3[contains(text(),'Super Calculator')]//parent::div//child::h2"));
    operation = (opName:string)=>{return element(by.cssContainingText('option',opName))}
}

export class OtherPageLocator{
    locator:ElementFinder;
    
}