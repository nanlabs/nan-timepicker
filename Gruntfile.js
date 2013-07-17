
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,

        globals: {
            $: true,
            jQuery: true,
            define: true
        }
      },
      all: ['src/**/*.js']
    },

    banner: [
      '/*!',
      ' * <%= pkg.name %>.js <%= pkg.version %>',
      ' * https://github.com/nanlabs/<%= pkg.name %>',
      ' * Date Compiled: <%= grunt.template.today("yyyy-mm-dd") %>',
      ' */\n\n'
    ].join('\n'),

    uglify: {
      options: {
        banner: '<%= banner %>',
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },

    copy: {
      dist: {
        files: [
          {expand: true, cwd: 'src/', src: ['**'], dest: 'dist/'}
        ]
      }
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Tasks
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('compile', ['jshint', 'uglify', 'copy:dist']);

};