// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  verbose: true,

  testTimeout: 20000,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: '<rootDir>/coverage/',

  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: '<rootDir>/src/setupTests.js',

  // A path to a module which exports an async function that is triggered once after all test suites
  // globalTeardown: null,

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__test__/*.test.js'],
};
