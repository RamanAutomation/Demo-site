const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
module.exports = defineConfig({
  projectId: 'zx98ef',
	e2e: {
		async setupNodeEvents(on, config) {
			const bundler = createBundler({
				plugins: [createEsbuildPlugin(config)],
			});
			on("file:preprocessor", bundler);
			await addCucumberPreprocessorPlugin(on, config);
			return config;
		},
    specPattern: "cypress/src/features/*.feature",
		baseUrl:"https://app.goodbookserp.com/gb4version/",
		fixturesFolder:"cypress/src/fixtures"
	},
	
});
