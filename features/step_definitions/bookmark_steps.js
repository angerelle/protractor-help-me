var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

var myStepDefinitionsWrapper = function () {

    this.Given(/^I go to the index page$/, function (callback) {
        browser.get("index.html").then(callback);
    });

    this.Then(/^the title should be "([^"]*)"$/, function (title, callback) {
        expect(browser.getTitle()).to.eventually.equal(title).and.notify(callback);
    });


    this.Given(/^I go to the Chemet Form A page$/, function (callback) {
        browser.get("index.html#!/formA").then(callback);
    });

    this.When(/^I click on "([^"]*)"$/, function (linkText) {
        var el = element(by.linkText(linkText));
        el.click();
    });

    this.Then(/^I should end up on the Chemet Form A page$/, function (callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;