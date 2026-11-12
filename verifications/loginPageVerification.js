import { expect } from "@playwright/test";
import login from "../pageObjects/login";
class loginPageVerification{
    
    /**
     * 
     * @param {login} loginPage 
     */
    constructor(loginPage){
        this.loginPage = loginPage;

    }

    async verifyLoginPageLayout(){
        await expect(this.loginPage.page).toHaveURL(/\/auth\/login$/);
        await expect(this.loginPage.txtMail).toBeVisible();
        await expect(this.loginPage.txtPwd).toBeVisible();
        await expect(this.loginPage.btnLogin).toBeVisible();
        await expect(this.loginPage.btnLogin).toBeEnabled();
    }
}

export default loginPageVerification;