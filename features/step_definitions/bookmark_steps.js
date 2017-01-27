var myStepDefinitionsWrapper = function () {

    this.Given(/^I go to the index page$/, function (callback) {
        //browser.get("index.html").then(callback);
        callback(null, 'pending');
    });
};
module.exports = myStepDefinitionsWrapper;