///<reference types="cypress"/>
import test from "../../Page/test.cy"
import {faker} from '@faker-js/faker';

const tests = new test;

describe("check the sign up button",()=>{

    beforeEach("visit the url",()=>{
        tests.visit()
        
    })
    it("The submit button should be enabled",()=>{

    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.number();
    const business = faker.company.name()


        cy.get("[class='text-sm lg\:text-base text-\[\#02084B80\]'] [class]").click()
        tests.Firtsname().type(firstname)
        tests.Lastname().type(lastname)
        tests.Email().type(email)
        tests.BusinessName().type(business)
       // tests.country().type("Nigeria")
        //tests.selectCountry().click()
      //  tests.selectCountry().should('contain','Nigeria')
        tests.PhoneNumber().type(phone)
        tests.Password().type("Windows@123")
        tests.ConfirmPassword().type("Windows@123")
        tests.terms().click()
        tests.button().should("be.visible")

    })
})