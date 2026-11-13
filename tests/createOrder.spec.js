import { test } from '@playwright/test';

//Page Object imports
import login from '../pageObjects/login';
import dashboard from '../pageObjects/dashboard';
import cart from '../pageObjects/cart';
import thankYou from '../pageObjects/thankYou';
import orders from '../pageObjects/orders';

//Page Verification imports
import loginPageVerification from '../verifications/loginPageVerification';
import dashboardPageVerification from '../verifications/dashboardPageVerification';

//Note: Later all these individual files will be moved to a manager file to make a clean version

//test data import
import testdata from "../testData/data1.json" with {type: "json"};

for (const inputData of testdata) {
    console.log(inputData);
}
//Added loop to include multiple testdata
for (const inputData of testdata) {
    test(`Login,create order and Verify orderDetails - For ${inputData.product} `, async ({ page }) => {
        await page.goto("./");
        const loginPage = new login(page);
        const dashBoard = new dashboard(page);
        const cartPage = new cart(page);
        const thankYouPage = new thankYou(page);
        const ordersPage = new orders(page);

        const loginPageVerify = new loginPageVerification(loginPage);
        const dashBoardVerify = new dashboardPageVerification(dashBoard);

        await loginPageVerify.verifyLoginPageLayout();
        await loginPage.userLogin();
        await dashBoardVerify.verifyDashboardPageLayout();
        await dashBoard.addItem(inputData);
        await dashBoard.goToCart();
        await cartPage.cartCheckOut();
        await cartPage.verifyPaymentUserName();
        await cartPage.enterShipmentCountry(inputData.country);
        const orderID = await thankYouPage.getOrderID();
        console.log("Order created successfully with Ref# ", orderID);
        await thankYouPage.goToOrders();
        await ordersPage.viewMyOrder(orderID);

    });
}

