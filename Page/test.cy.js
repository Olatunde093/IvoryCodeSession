class test{

    visit(){
        return cy.visit("https://qa.d1ainun5cjrnni.amplifyapp.com/register")
    }
    signUp(){
        return cy.get("p > .cursor-pointer.text-\[\#02084B\]")
    }
    Firtsname(){
        return cy.get("input#register_firstName")
    }
    Lastname(){
        return cy.get("input#register_lastName")
    }
    Email(){
        return cy.get("input#register_email")
    }
    BusinessName(){
        return cy.get("input#register_businessName")
    }
    PhoneNumber(){
        return cy.get(".add-on.ant-input-group-wrapper  .ant-input")
    }
    Password(){
        return cy.get("input#register_password")
    }
    ConfirmPassword(){
        return cy.get("input#register_confirmPassword")
    }
    terms(){
        return cy.get(".mb-8 .ant-checkbox-input")
    }
    button(){
        return cy.get("button")
    }
    country(){
        return cy.get ("input#rc_select_0")
    }
    selectCountry(){
        return cy.get("div[title='Nigeria'] > .ant-select-item-option-content")
    }
}

module.exports = test;