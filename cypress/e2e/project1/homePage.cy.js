let env = Cypress.env('env')
let host = env.fe.host

import home_page from '../../pages/project1/homePage';
// import cmsGiftsPage from '../../../pages/main_app/cms/giftsPage';



describe('home page test cases', async() => {

  let test_departing_val;
    let test_returning_val;
    let search_result;
    let test_data = {
      departing_value: [
        "Select...",
        "July",
        "December",
        "July (next year)",
        "December (next year)",
        "July (two years from now)",
        "December (two years from now)",
      ],
      returning_value: [
        "Select...",
        "July",
        "December",
        "July (next year)",
        "December (next year)",
        "July (two years from now)",
        "December (two years from now)",
      ],
      valid_promotional_code: [
        // 'AX3-EBX-991',
        // 'AX3-EBX-980',
        // 'AX3-EBX-902',
        // 'AX3-EBX-610',
        'AX3-EBX-216'
      ]
    };

  beforeEach(function () {
    cy.log("step1: Access home page");
    cy.visit(host);
  })

  // it('Departure date or Return date are NOT set', () => {
  //   let test_departing_val;
  //   let test_returning_val;
  //   let search_result = 'No seats available';
  //   let test_data = {
  //     departing_value: [
  //       "Select...",
  //       "July",
  //       "December",
  //       "July (next year)",
  //       "December (next year)",
  //       "July (two years from now)",
  //       "December (two years from now)",
  //     ],
  //     returning_value: [
  //       "Select...",
  //       "July",
  //       "December",
  //       "July (next year)",
  //       "December (next year)",
  //       "July (two years from now)",
  //       "December (two years from now)",
  //     ],
  //   };

  //   for(let i = 0; i < test_data.departing_value.length; i++){
  //     cy.log(`departure date: ${test_departing_val}`);
  //     cy.log(`return date: ${test_returning_val}`);
  //     test_departing_val = test_data.departing_value[0];
  //     test_returning_val = test_data.returning_value[i];
  //     home_page.select_value_departing_dropdown(test_departing_val);
  //     home_page.elements.departing_dropdown().should(
  //       'have.value', 
  //       ''
  //     );
  //     home_page.select_value_returning_dropdown(test_returning_val);
  //     home_page.elements.returning_dropdown().should(
  //       'have.value', 
  //       i > 0? i-1: ''
  //     );
  //     home_page.click_search_button();
  //     home_page.validate_search_result(search_result);
  //     home_page.click_back_button();
  //   };

  //   for(let k = 1; k < test_data.returning_value.length; k++){
  //     test_departing_val = test_data.departing_value[k];
  //     test_returning_val = test_data.returning_value[0];
  //     home_page.select_value_departing_dropdown(test_departing_val);
  //     home_page.elements.departing_dropdown().should(
  //       'have.value', 
  //       k > 0? k-1: ''
  //     );
  //     home_page.select_value_returning_dropdown(test_returning_val);
  //     home_page.elements.returning_dropdown().should(
  //       'have.value', 
  //       ''
  //     );
  //     home_page.click_search_button();
  //     home_page.validate_search_result(search_result);
  //     home_page.click_back_button();
  //   }
  // });

  // it('Departure date and Return date are set, but invalid trip', () => {
  //   search_result = 'Please try again';

  //   cy.log("step2: check case that return date is earlier than departure date");
  //   for(let i = test_data.departing_value.length-1; i > 1; i--){
  //     test_departing_val = test_data.departing_value[i];
  //     for(let k = i-1; k > 0; k--){
  //       test_returning_val = test_data.returning_value[k];
  //       home_page.select_value_departing_dropdown(test_departing_val);
  //       home_page.elements.departing_dropdown().should(
  //         'have.value', 
  //         i-1
  //       );
  //       home_page.select_value_returning_dropdown(test_returning_val);
  //       home_page.elements.returning_dropdown().should(
  //         'have.value', 
  //         k-1
  //       );
  //       home_page.click_search_button();
  //       home_page.validate_search_result(search_result);
  //       home_page.click_back_button();
  //     }
  //   };

  //   cy.log("Step3: Return date and departure date are on the same month");
  //   for(let k = 1; k < test_data.returning_value.length; k++){
  //     test_departing_val = test_data.departing_value[k];
  //     test_returning_val = test_data.returning_value[k];
  //     home_page.select_value_departing_dropdown(test_departing_val);
  //     home_page.elements.departing_dropdown().should(
  //       'have.value', 
  //       k-1
  //     );
  //     home_page.select_value_returning_dropdown(test_returning_val);
  //     home_page.elements.returning_dropdown().should(
  //       'have.value', 
  //       k-1
  //     );
  //     home_page.click_search_button();
  //     home_page.validate_search_result(search_result);
  //     home_page.click_back_button();
  //   }

  //   cy.log("Step4: Return date is less than 1 year from the departure date");
  //   for(let i = 1; i < test_data.returning_value.length-1; i++){
  //     test_departing_val = test_data.departing_value[i];
  //     test_returning_val = test_data.returning_value[i+1];
  //     home_page.select_value_departing_dropdown(test_departing_val);
  //     home_page.elements.departing_dropdown().should(
  //       'have.value', 
  //       i-1
  //     );
  //     home_page.select_value_returning_dropdown(test_returning_val);
  //     home_page.elements.returning_dropdown().should(
  //       'have.value', 
  //       i
  //     );
  //     home_page.click_search_button();
  //     home_page.validate_search_result(search_result);
  //     home_page.click_back_button();
  //   }
  // });

  it('Valid promotional codes', () => {
    search_result = 'Seats available';

    cy.log("step2: search with valid promotional code");

    test_departing_val = test_data.departing_value[1];
    test_returning_val = test_data.returning_value[6];
    for(let code of test_data.valid_promotional_code){
      home_page.select_value_departing_dropdown(test_departing_val);
      home_page.elements.departing_dropdown().should(
        'have.value', 
        0
      );
      home_page.select_value_returning_dropdown(test_returning_val);
      home_page.elements.returning_dropdown().should(
        'have.value', 
        5
      );
      cy.log(code)
      home_page.fill_in_promotional_code(code);
      home_page.click_search_button();
      home_page.validate_promo_code(code,'valid code','30');
      home_page.click_back_button();
    }

  });

  it('Valid promotional codes2', () => {
    search_result = 'Seats available';

    cy.log("step2: search with valid promotional code");

    test_departing_val = test_data.departing_value[1];
    test_returning_val = test_data.returning_value[6];
    for(let code of test_data.valid_promotional_code){
      home_page.select_value_departing_dropdown(test_departing_val);
      home_page.elements.departing_dropdown().should(
        'have.value', 
        0
      );
      home_page.select_value_returning_dropdown(test_returning_val);
      home_page.elements.returning_dropdown().should(
        'have.value', 
        5
      );
      cy.log(code)
      home_page.fill_in_promotional_code(code);
      home_page.click_search_button();
      home_page.validate_promo_code(code,'valid code','30');
      home_page.click_back_button();
    }

  });
})
