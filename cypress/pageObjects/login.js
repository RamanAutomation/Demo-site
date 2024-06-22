import sharedFunctions from "../support/sharedFunctions.js"

export class login {

    visitLoginPage(){
        return cy.visit('/')
    }
    verifyHeader(){
      return  cy.contains('Sign in to your account').should('be.visible')
    }
    enterServerName(serverNeme){
        return  cy.customPath(sharedFunctions.getXpathValue('server')).should('be.visible').type(serverNeme)
    } 

    enterUserName(userName){
        return  cy.customPath(sharedFunctions.getXpathValue('userName')).should('be.visible').type(userName)
    }

    enterPassword(password){
        return  cy.customPath(sharedFunctions.getXpathValue('password')).should('be.visible').type(password)
    }

    clickLoginBtn(){
        return cy.customPath(sharedFunctions.getXpathValue('loginBtn')).should('be.visible').click()
    }

    loginFailedWarningMessage(){ 
        return cy.customPath(sharedFunctions.getXpathValue('loginFailedPopup')).should('exist')
    }
    errorPopupOkbtn(){
        cy.wait(2000)
      cy.customPath(sharedFunctions.getXpathValue('ErrorPopupOkbtn')).should('be.visible').click({force:true})
    }

    clickForgotPassword(){
        return cy.customPath(sharedFunctions.getXpathValue('forgotPasswordLink')).should('be.visible').click()
    }
    verifyForgotPasswordMessage(){
        return  cy.customPath(sharedFunctions.getXpathValue('serverInfoPopup')).should('be.visible').and('have.text','Please Fill Server')

    }
    serverFieldRequired(){
        cy.customPath(sharedFunctions.getXpathValue('serverWarningMsg')).should('be.visible').and('have.text','This field is required.')
        
    }
     usernameFieldRequired(){
        cy.customPath(sharedFunctions.getXpathValue('userWarningMsg')).should('be.visible').and('have.text','This field is required.')
     }
     passwordFieldRequired(){
        cy.customPath(sharedFunctions.getXpathValue('passwordWarningMsg')).should('be.visible').and('have.text','This field is required.')
     }
    removeUsername(){
        return  cy.customPath(sharedFunctions.getXpathValue('userName')).should('be.visible').clear()

    }
    
}