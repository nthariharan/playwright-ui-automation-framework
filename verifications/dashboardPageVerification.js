import { expect } from "@playwright/test";
import dashboard from "../pageObjects/dashboard";

class dashboardPageVerification{
    
    /**
     * 
     * @param {dashboard} dashBoardPage 
     */
    constructor(dashBoardPage){
        this.dashBoardPage = dashBoardPage;

    }

    async verifyDashboardPageLayout(){
        await this.dashBoardPage.productCards.first().waitFor(); //Wait for the page to load element.And then perform UI checks.
        await expect(this.dashBoardPage.page).toHaveURL(/\/dashboard\/dash$/);
        await expect(this.dashBoardPage.productCards.first()).toBeVisible();
        await expect(this.dashBoardPage.navHome).toBeVisible();
        await expect(this.dashBoardPage.navOrders).toBeVisible();
        await expect(this.dashBoardPage.navCart).toBeVisible();        
        await expect(this.dashBoardPage.navSignOut).toBeVisible();    
        
        //For now added basic button checks. later to add for filter visibility and other  UI elements as needed
        
    }
}

export default dashboardPageVerification;