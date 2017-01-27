//jshint strict: false
/*exports.config = {

    allScriptsTimeout: 11000,

    specs: [
      '*.js'
  ],

    capabilities: {
      'browserName': 'chrome'
  },

    baseUrl: 'http://localhost:8000/',

    framework: 'jasmine',

    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
  },

  directConnect: true


};
*/

exports.config = {
    baseUrl: 'http://localhost:8000',
    // Specify the patterns for test files
    // to include in the test run
    specs: [
        '../features/*.feature'
    ],
    // Use this to exclude files from the test run.
    // In this case it's empty since we want all files
    // that are mentioned in the specs.
    exclude: [],
    // Use cucumber for the tests
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Contains additional settings for cucumber-js
    cucumberOpts: {
    },
    // These capabilities tell protractor about the browser
    // it should use for the tests. In this case chrome.
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
        }
    },
    // This setting tells protractor to wait for all apps
    // to load on the page instead of just the first.
    useAllAngular2AppRoots: true
}