let productLinksInDataTable = new DataTable(['link']);
productLinks.add(['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=40']);
productLinks.xadd(['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=29']);
productLinks.xadd(['http://opencart.qatestlab.net/index.php?route=product/product&path=20_260&product_id=36']);


let productLinksInArray = [{ link: 'http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=40' },
{ link: 'http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=29' }]

let loginUser = {
    email: '192404122022@test.com',
    password: 'Temp1234%',
};

const FileReader = require('../helpers/fileReader.js');
let productLinksFromTxt = FileReader.getLinksFromTxt();
let productsFromJson = FileReader.getProductsFromJson();
console.log(productsFromJson);

Feature('buy');

Before(({ I }) => {
    I.login(loginUser);
  });

Data(productLinksInDataTable).Scenario('buy product', async ({ I, productPage, current }) => {
    I.amOnPage(current.link);
    let price = await productPage.getProductPrice();
    console.log(price);
    I.assertEqual('$60.00', '$60.00', "Prices are not in match");
}).tag('buy');

After(({ I }) => { // or Background
    console.log('test After')
  });