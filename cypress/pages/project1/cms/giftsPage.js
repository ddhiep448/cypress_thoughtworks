class giftsPage {
	elements = {
		idTextbox: () => cy.get("input.form-control"),
		studentTextbox: () => cy.get(".select2-search__field"),
		searchButton: () => cy.get("[type= 'submit']"),
        resetButton: () => cy.get("[class= 'btn btn-default']"),
        createGiftsButton: () => cy.get(".fa-plus"),
        importButton: () => cy.get("[title= 'Import Gift']"),
        searchResult: () => cy.get("tbody tr"),
		firstDataOfSearchResult: () => cy.get("tbody tr:first-child")
	}
	login(account){
		// this.elements.emailTextbox()
		// 	.type(account.email)
		// 	.should('have.value', account.email);
		// this.elements.passwordTextbox()
		// 	.type(account.password)
		// 	.should('have.value', account.password);
		// this.elements.loginButton()
		// 	.click();
	}
}

module.exports = new giftsPage();
