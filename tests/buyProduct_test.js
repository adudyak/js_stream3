let productLinks = new DataTable(['link']);
productLinks.add(['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=40']); // adding records to a table
productLinks.xadd(['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=29']);
productLinks.xadd(['http://opencart.qatestlab.net/index.php?route=product/product&path=20_260&product_id=36']);


let productLinks2 = [{ link: 'http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=40' },
{ link: 'http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=29' }]

let loginUser = {
    email: '192404122022@test.com',
    password: 'Temp1234%',
};

const LinksGetter = require('../helpers/productLinksGetter.js');
let productLinks3 = LinksGetter.getLinks();
console.log(productLinks3);

Feature('buy');

Before(({ I }) => { // or Background
    I.login(loginUser);
  });

Data(productLinks3).Scenario('buy product', async ({ I, productPage, current }) => {
    I.amOnPage(current.link);
    let price = await productPage.getProductPrice();
    console.log(price);
    I.assertEqual('$60.00', '$60.00', "Prices are not in match");
}).tag('buy');

After(({ I }) => { // or Background
    console.log('test After')
  });