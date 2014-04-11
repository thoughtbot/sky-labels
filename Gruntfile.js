module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("sky-labels.json"),

    // Banner definitions
    meta: {
      banner: "/*\n" +
        " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
        " *  <%= pkg.description %>\n" +
        " *  <%= pkg.homepage %>\n" +
        " *\n" +
        " *  Made by <%= pkg.author.name %>\n" +
        " *  Under <%= pkg.licenses[0].type %> License\n" +
        " */\n"
    },

    concat: {
      dist: {
        src: ["src/sky-labels.js"],
        dest: "dist/sky-labels.js"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    jshint: {
      files: ["src/**/*.js", "spec/**/*-spec.js"],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    uglify: {
      my_target: {
        src: ["dist/sky-labels.js"],
        dest: "dist/sky-labels.min.js"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    sass: {
      dist: {
        files: {
          'dist/sky-labels.css': 'src/sky-labels.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-sass");

  grunt.registerTask("default", ["jshint", "concat", "uglify", "sass"]);
};
