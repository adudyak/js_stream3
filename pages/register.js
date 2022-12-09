const { I } = inject();

module.exports = {
  registerHeaderText: 'Register Account',
  firstNameField: { css: '#input-firstname' },
  emailField: { css: '#input-email' },

  verifyRegisterAccountText() {
    I.see(this.registerHeaderText);
  },

  fillRegisxtrationDetails(user) {
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.emailField, user.email);
  }
}
