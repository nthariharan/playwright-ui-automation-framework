import { expect } from "@playwright/test";

class dashboard{
    /**
     * 
     * @param {import("@playwright/test").Page} page 
     */
    constructor(page){
        this.page = page;
        this.productCards = this.page.locator('.card');
        this.navBar = this.page.getByRole("navigation");
        this.navHome = this.navBar.getByRole("button",{name: "home"});
        this.navOrders = this.navBar.getByRole("button",{name: "orders"});
        this.navCart = this.navBar.getByRole("button",{name:"cart"});
        this.navSignOut = this.navBar.getByRole("button",{name:"sign out"});
        
    }

    /**
     * @param {object} testData 
     */

    async addItem(testData){
        this.tgtProduct = this.productCards.filter({hasText : testData.product});
        this.prdtAddToCart = this.tgtProduct.getByRole("button",{name: "add to cart"})
        await expect(this.tgtProduct).toBeVisible();
        await expect(this.prdtAddToCart).toBeVisible();
        await expect(this.prdtAddToCart).toBeEnabled();
        await this.prdtAddToCart.click();
    }

    async goToCart(){
        await this.navCart.click();
    }

}

export default dashboard;