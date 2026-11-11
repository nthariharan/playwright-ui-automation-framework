import {test} from '@playwright/test';
import login from '../pageObjects/login';
import loginPageVerification from '../verifications/loginPageVerification';

test("login,create order and Verify orderDetails",async({page})=>{
    await page.goto("./");    
    const loginPage= new login(page);
    const loginPageVerify= new loginPageVerification(loginPage);

    await loginPageVerify.verifyLoginPageLayout();
    await loginPage.userLogin();
    

});