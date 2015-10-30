var path = require("path");
var isCI = process.env.CI === 'true';

module.exports = function (grunt) {

	grunt.loadNpmTasks('steal-tools');

	grunt.initConfig({
		"steal-export": {
			dist: {
				system: {
					config: "package.json!npm"
				},
				options: {
					sourceMaps: true
				},
				outputs: {
					"+cjs": {}
				}
			}
		}
	});
	grunt.registerTask('build',['steal-export']);
};
