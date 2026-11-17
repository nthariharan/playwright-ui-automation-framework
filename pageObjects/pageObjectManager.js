//Page Object imports
import login from '../pageObjects/login';
import dashboard from '../pageObjects/dashboard';
import cart from '../pageObjects/cart';
import thankYou from '../pageObjects/thankYou';
import orders from '../pageObjects/orders';

class pageObjectManager {

    constructor(page) {
        this.page = page;
        this.loginPage = new login(this.page);
        this.dashBoard = new dashboard(this.page);
        this.cartPage = new cart(this.page);
        this.thankYouPage = new thankYou(this.page);
        this.ordersPage = new orders(this.page);
    }



}

export default pageObjectManager;