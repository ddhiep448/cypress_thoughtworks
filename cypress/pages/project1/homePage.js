
class homePage {
	elements = {
		departing_dropdown: () => cy.get("#departing"),
		returning_dropdown: () => cy.get("#returning"),
		promotional_code_textbox: () => cy.get("#promotional_code"),
		search_button: () => cy.get("input[value='Search']"),
		back_button: () => cy.get("a[href='javascript:window.history.go(-1)']"),
		search_results: () => cy.get("h2").contains('Search Results'),
		search_result_content: () => cy.get("#content>p"),
		result_promo_code: () => cy.get(".promo_code"),
		expect_promo_code: () => cy.get(".promo_code>tt"),
		expect_discount: () => cy.get(".promo_code>strong")
	};
	select_value_departing_dropdown(value) {
		this.elements.departing_dropdown().select(value);
	};
	select_value_returning_dropdown(value) {
		this.elements.returning_dropdown().select(value);
	};
	click_search_button() {
		this.elements.search_button().click();
	};
	click_back_button() {
		this.elements.back_button().click();
	};
	fill_in_promotional_code(code){
		this.elements.promotional_code_textbox().clear().type(code);
	};
	validate_promo_code(expected_code, expected_validation, expected_discount) {
		this.elements
			.result_promo_code()
			.contains("Promotional code")
			.should('be.visible');
		switch(expected_validation) {
			case 'valid code':
				this.elements
					.expect_promo_code()
					.contains(expected_code)
					.should('be.visible');
				this.elements
					.expect_discount()
					.contains(expected_discount)
					.should('be.visible');
				break;
		}
	};
	validate_search_result(expected_result) {
		this.elements.search_results().should('be.visible');
		switch(expected_result) {
			case 'No seats available':
				this.elements
					.search_result_content()
					.contains('Sorry, there are no more seats available.')
					.should('be.visible')
				break;
			case 'Seats available':
				this.elements
					.search_result_content()
					.contains('Seats available!')
					.should('be.visible')
				this.elements
					.search_result_content()
					.contains('Call 0800 MARSAIR to book!')
					.should('be.visible')
				break;
			case 'Please try again':
				this.elements
					.search_result_content()
					.contains('Unfortunately, this schedule is not possible. Please try again.')
					.should('be.visible')
				break;
		}
	}
	
}

module.exports = new homePage();
