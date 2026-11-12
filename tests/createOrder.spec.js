import {test} from '@playwright/test';

//Page Object imports
import login from '../pageObjects/login';
import dashboard from '../pageObjects/dashboard';

//Page Verification imports
import loginPageVerification from '../verifications/loginPageVerification';
import dashboardPageVerification from '../verifications/dashboardPageVerification';

//Note: Later all these individual files will be moved to a manager file to make a clean version

test("login,create order and Verify orderDetails",async({page})=>{
    await page.goto("./");    
    const loginPage= new login(page);
    const dashBoard = new dashboard(page);
    const loginPageVerify= new loginPageVerification(loginPage);
    const dashBoardVerify = new dashboardPageVerification(dashBoard);

    await loginPageVerify.verifyLoginPageLayout();
    await loginPage.userLogin();
    await dashBoardVerify.verifyDashboardPageLayout();   

});