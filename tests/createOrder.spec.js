import { test } from '@playwright/test';

//Import Page Object Manager
import pageObjectManager from '../pageObjects/pageObjectManager';

//Page Verification imports
import loginPageVerification from '../verifications/loginPageVerification';
import dashboardPageVerification from '../verifications/dashboardPageVerification';

//test data import
import testdata from "../testData/data1.json" with {type: "json"};

//Added loop to include multiple testdata
for (const inputData of testdata) {
    test(`Login,create order and Verify orderDetails - For ${inputData.product} `, async ({ page }) => {
        await page.goto("./");
        /* const loginPage = new login(page);
        const dashBoard = new dashboard(page);
        const cartPage = new cart(page);
        const thankYouPage = new thankYou(page);
        const ordersPage = new orders(page); */

        //Instantiate PageObject Manager
        const POManager = new pageObjectManager(page);

        const loginPageVerify = new loginPageVerification(POManager.loginPage);
        const dashBoardVerify = new dashboardPageVerification(POManager.dashBoard);

        await loginPageVerify.verifyLoginPageLayout();
        await POManager.loginPage.userLogin();
        await dashBoardVerify.verifyDashboardPageLayout();
        await POManager.dashBoard.addItem(inputData);
        await POManager.dashBoard.goToCart();
        await POManager.cartPage.cartCheckOut();
        await POManager.cartPage.verifyPaymentUserName();
        await POManager.cartPage.enterShipmentCountry(inputData.country);
        const orderID = await POManager.thankYouPage.getOrderID();
        console.log("Order created successfully with Ref# ", orderID);
        await POManager.thankYouPage.goToOrders();
        await POManager.ordersPage.viewMyOrder(orderID);

    });
}

