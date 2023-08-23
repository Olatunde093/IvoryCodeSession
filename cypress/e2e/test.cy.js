///<reference types="cypress"/>
import test from "../../Page/test.cy"

const tests = new test;

describe("check the sign up button",()=>{

    beforeEach("visit the url",()=>{
        tests.visit()
        
    })
    it("The submit button should be enabled",()=>{
        cy.get("[class='text-sm lg\:text-base text-\[\#02084B80\]'] [class]").click()
        tests.Firtsname().type("John")
        tests.Lastname().type("doe")
        tests.Email().type("doe@example.com")
        tests.BusinessName().type("Creative Gallery")
        tests.country().type("Nigeria")
        tests.selectCountry().click()
        tests.selectCountry().should('contain','Nigeria')
        tests.PhoneNumber().type("0812343454")
        tests.Password().type("Windows@123")
        tests.ConfirmPassword().type("Windows@123")
        tests.terms().click()
        tests.button().should("be.visible")

    })
})