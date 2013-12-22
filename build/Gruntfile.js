module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      compass: {
        files: [
        'scss/*',
        'bower_components/normalize-css/normalize.css'
        ],
        tasks: ['compass']
      },
      css: {
        files: [
        'css/*'
        ],
        tasks: ['cssmin']
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      combinejs: {
        files: {
          '../assets/js/all.min.js': 
          [
          'bower_components/modernizr/modernizr.js',
          'custom_components/responsive_iframes/responsive_iframes.js',
          'bower_components/fastclick/lib/fastclick.js',
          'js/symbolset.js',
          'js/main.js',
          'js/infinitescroll.js'
          ]
        }
      }
    },

    compass: {
      dev: {                  
        options: {              
          sassDir: 'scss',
          cssDir: 'css'
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          '../assets/css/screen.css': ['bower_components/normalize-css/normalize.css', 'css/style.css']
        }
      }
    },

    notify: {
      watch: {
        options: {
          title: 'Task Complete',  // optional
          message: 'SASS and Uglify finished running', //required
        }
      }
    }

    'ghost_location': '',
    'ghost_theme_name': 'frank',

  });

  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-notify');

};