/**
* Módulos GRUNT ambiente de desenvolvimento
*/
(function(){
    "use strict";
    module.exports = function (grunt) {
        var gruntConfig = {
            less: {
                development: {
                    options: {
                        compress: true
                    },
                    files: {
                        'app/css/main.min.css': [
                            'bower_components/bootstrap/dist/css/bootstrap.css',
                            'bower_components/bootstrap/dist/css/bootstrap-theme.css',
                            'bower_components/fontawesome/css/font-awesome.css',
                            "dev/css/main.less"
                        ]
                    }
                }
            },
            uglify: {
                options: {
                    preserveComments: false,
                    mangle: true,
                    report: 'gzip'
                },
                my_target: {
                    files: {
                        'app/js/main.min.js': [
                            'bower_components/jquery/dist/jquery.js',
                            'bower_components/bootstrap/dist/js/bootstrap.js',
                            'bower_components/angular/angular.js',
                            'bower_components/angular-route/angular-route.js',
                            'dev/js/main.js',
                        ]
                    }
                }
            },
            htmlmin: {
                dist: {
                    options: {
                        removeComments: true,
                        collapseWhitespace: true
                    },
                    files: {
                        'app/index.html': 'dev/pages/index.html',
                        'app/about.html': 'dev/pages/about.html',
                        'app/home.html': 'dev/pages/home.html',
                        'app/contact.html': 'dev/pages/contact.html',
                    }
                }
            },
            watch : {
                dist : {
                    files : [
                        'dev/pages/*.html',
                        'dev/js/**/*',
                        'dev/css/**/*'
                    ],
                    tasks : [ 'uglify', 'less', 'htmlmin' ]
                }
            }
        };

        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-htmlmin');

        grunt.initConfig(gruntConfig);

        var keys  = Object.keys(gruntConfig);
        var tasks = [];
        var i = 1;

        for(i in keys){
            tasks.push(keys[i]);
        }

        grunt.registerTask('default', tasks);
        grunt.registerTask( 'w',['watch']);
    };

}());
