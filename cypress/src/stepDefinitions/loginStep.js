import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {login} from "../../pageObjects/login.js"
import sharedFunctions from "../../support/sharedFunctions.js";


const Login = new login 

before(()=>{
    sharedFunctions.loadIdValues()
    sharedFunctions.loadXpathValues()
})

Given("Login to the goodboods ERP site",()=>{
    Login.visitLoginPage()
})
When('Verify the login page header',()=>{
    Login.verifyHeader()
})
When('Enter the server name {string}',(ServerName)=>{
    Login.enterServerName(ServerName) 
})
When('Enter the username {string}',(userName)=>{
    Login.enterUserName(userName)   
})
When('Enter the password {string}',(password)=>{
    Login.enterPassword(password)   
})
When('click the login subit button',()=>{
    Login.clickLoginBtn()
})

Then('Verify the Login failed to connect the database popup',()=>{
    Login.loginFailedWarningMessage()
})
Then('Click the error popup ok button',()=>{
    Login.errorPopupOkbtn()
})

When('click the Forgot password link',()=>{
    Login.clickForgotPassword()
})

Then('verify the Forgot password popup message',()=>{
    Login.verifyForgotPasswordMessage()
}) 

Then('verify the server field required warning messages',()=>{
    Login.serverFieldRequired()
})
Then('verify the username field required warning messages',()=>{
    Login.usernameFieldRequired()
})
Then('verify the password field required warning messages',()=>{
    Login.passwordFieldRequired()
})
Then('Remove the username',()=>{
    Login.removeUsername()
})