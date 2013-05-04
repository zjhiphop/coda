module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-contrib");
    grunt.loadNpmTasks("grunt-img");
    grunt.loadNpmTasks("grunt-recess");

    grunt.registerTask("default", "less");

    grunt.config.init({
        pkg: '<json:package.json>',
        less: {
          development: {
            options: {
              paths: ["src/css"]
            },
            files: {
              "dist/css/coda.css": "src/css/coda.less"
            }
          },
          production: {
            options: {
              paths: ["src/css"],
              yuicompress: true
            },
            files: {
              "dist/css/coda.min.css": "src/css/coda.less"
            }
          }
        }
    });
};
