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


}

export default dashboard;