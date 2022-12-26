let productLinksInDataTable = new DataTable(['link']);
productLinksInDataTable.add(['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=40']);
productLinksInDataTable.xadd(['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=29']);
productLinksInDataTable.xadd(['http://opencart.qatestlab.net/index.php?route=product/product&path=20_260&product_id=36']);

let productLinksInArray = [{ link: 'http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=40' },
{ link: 'http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=29' }]

let loginUser = {
  email: '192404122022@test.com',
  password: 'Temp1234%',
};

const FileReader = require('../helpers/fileReader.js');
let productLinksFromTxt = FileReader.getLinksFromTxt();
let productsFromJson = FileReader.getProductsFromJson();

Feature('buy');

Before(({ I }) => {
  I.login(loginUser);
});

Data(productLinksInDataTable).Scenario('buy product', async ({ I, homePage, productPage, current, helper }) => {
  // REST API sample. Get USD rate
  let response = await I.sendGetRequest('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json');
  I.seeResponseCodeIs(200);
  let usdRate = response.data[0].rate;
  console.log(usdRate);
  // tryTo() sample to verify cart is empty
  console.log("Is cart empty: " + await homePage.checkCartIsEmpty());
  // count all trash icons in cart
  let attributesArray = await I.grabAttributeFromAll({ css: "i.linearicons-trash" }, "class");
  console.log("Amount of trash icons: " + attributesArray.length);

  I.amOnPage(current.link);
  let price = await productPage.getProductPrice();
  console.log(price);
  I.assertEqual('$60.00', '$60.00', "Prices are not in match");
  console.log(await I.parsePrice("Green   $16.50"));
}).tag('buy');

After(() => {
  console.log('test After');
});