let loginUser = {
    email: '192404122022@test.com',
    password: 'Temp1234%',
};

Feature('buy');

Scenario('buy productg', async ({ I, productPage }) => {
    I.login(loginUser);
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=40');
    let price = await productPage.getProductPrice();
    console.log(price);
    I.assertEqual('$60.0', '$60.00', "Prices are not in match");
}).tag('buy');
//test