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
        // Write code here that turns the phrase above into concrete actions
        //callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;