'use strict';

function generateDistribution(grunt) {
  const gruntConfigs = {
    uglify : {
      build : {
        files : {
          'dist/angular-tel-input.min.js' : ['src/angular-tel-input.js']
        }
      }
    },
    eslint : {
      options : {
        configFile : '.eslintrc'
      },
      target : [
        'gruntfile.js',
        'src/**/*.js'
      ]
    }
  };

  grunt.initConfig(gruntConfigs);

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-eslint');

  let tasks = [
    'eslint',
    'uglify'
  ];

  grunt.registerTask('default', tasks);
}

module.exports = generateDistribution;
