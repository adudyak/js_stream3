let registrationUser = {
    firstName: 'Oleg',
};

Feature('store');

Scenario('test something', ({ I, homePage, registerPage }) => {
    I.openStore();
    homePage.openRegistrationPage();
    registerPage.verifyRegisterAccountText();
    registrationUser.email = Date.now() + '@test.com';
    registerPage.fillRegisxtrationDetails(registrationUser);
});
