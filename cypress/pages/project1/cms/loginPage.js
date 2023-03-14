class loginPage {
	elements = {
		emailTextbox: () => cy.get("input[type='email']"),
		passwordTextbox: () => cy.get("input[type='password']"),
		loginButton: () => cy.get("[value='Login']")
	}
	login(account){
		this.elements.emailTextbox()
			.type(account.email)
			.should('have.value', account.email);
		this.elements.passwordTextbox()
			.type(account.password)
			.should('have.value', account.password);
		this.elements.loginButton()
			.click();
	}
}

module.exports = new loginPage();