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

export class clickAcademyPageLocators{
    name:ElementFinder = element(by.xpath("//label[contains(text(),'Name')]//parent::div//child::input"));
    email:ElementFinder = element(by.xpath("//label[contains(text(),'Email')]//parent::div//child::input"));
    password:ElementFinder =  element(by.xpath("//label[contains(text(),'Password')]//parent::div//child::input"));
    gender:ElementFinder = element(by.cssContainingText('option',"Male"));
    employmentStatus:ElementFinder = element(by.id('inlineRadio1'));
    dateOfBirth:ElementFinder = element(by.xpath("//label[contains(text(),'Date of Birth')]//parent::div//child::input"));
    submitButton:ElementFinder = element(by.buttonText("Submit"));
    successMessage:ElementFinder = element(by.css('.alert.alert-sucess.alert-dismissible'));
}