class login{

    /**
     * 
     * @param {import("@playwright/test").Page} page 
     */

    constructor(page){
        this.page = page;
        this.txtMail = page.getByRole('textbox', { name: 'email@example.com' });
        this.txtPwd = page.getByRole('textbox', { name: 'enter your passsword' });
        this.btnLogin = page.getByRole('button', { name: 'Login' });
    }

    
    async userLogin(){
        await this.txtMail.fill(process.env.USER_ID);
        await this.txtPwd.fill(process.env.USER_PWD);
        await this.btnLogin.click();
    }
}

export default login;