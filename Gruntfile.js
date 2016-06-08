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
                        'dist/css/main.min.css': [
                            "dev/css/main.less"
                        ]
                    }
                }
            },
            uglify: {
                options: {
                    preserveComments: false,
                    mangle: false,
                    report: 'gzip'
                },
                my_target: {
                    files: {
                        'dist/js/main.min.js': [
                            'dev/js/header.js',
                            'dev/js/routes.js',
                            'dev/js/controllers/*js',
                            'dev/js/app.js',
                            'dev/js/factory.js',
                            'dev/js/directive.js',
                        ]
                    }
                }
            },
            concat: {
                basic_and_extras: {
                    files: {
                        // 'dist/js/jquery.min.js': [
                        //     'bower_components/jquery/dist/jquery.min.js',
                        //     'bower_components/bootstrap/dist/js/bootstrap.min.js'
                        // ],
                        'dist/js/angular.min.js': [
                            'bower_components/angular/angular.min.js',
                            'bower_components/angular-aria/angular-aria.min.js',
                            'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                            'bower_components/angular-animate/angular-animate.min.js',
                            'bower_components/angular-material/angular-material.min.js',
                            'bower_components/ngstorage/ngStorage.min.js',
                            'bower_components/angular-loading-bar/build/loading-bar.min.js',
                            'bower_components/angular-flash-alert/dist/angular-flash.min.js',
                            'bower_components/angular-bootstrap/ui-bootstrap.min.js',
                            'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                        ],
                    },
                },
            },
            htmlmin: {
                dist: {
                    options: {
                        removeComments: true,
                        collapseWhitespace: true
                    },
                    files: {
                        'dist/index.html': 'dev/pages/template/index.html',
                        'dist/header.html': 'dev/pages/template/header.html',
                        'dist/footer.html': 'dev/pages/template/footer.html',
                        'dist/nav.html': 'dev/pages/template/nav.html',
                        'dist/dashboard.html': 'dev/pages/dashboard.html',
                        'dist/error.html': 'dev/pages/error.html',
                        'dist/contact.html': 'dev/pages/contact.html',
                        'dist/login.html': 'dev/pages/login.html',
                        'dist/users.html': 'dev/pages/users.html',
                        'dist/about.html': 'dev/pages/about/index.html',
                        'dist/about.form.html': 'dev/pages/about/form.html',
                    }
                }
            },
            cssmin: {
                options: {
                    shorthandCompacting: false,
                    roundingPrecision: -1
                },
                target: {
                    files: {
                        'dist/css/layout.min.css': [
                            'bower_components/angular-material/angular-material.min.css',
                            'bower_components/fontawesome/css/font-awesome.min.css',
                            'bower_components/bootstrap/dist/css/bootstrap.min.css',
                            'bower_components/angular-loading-bar/build/loading-bar.min.css',
                            // 'bower_components/angular-bootstrap/ui-bootstrap-csp.css',
                        ]
                    }
                }
            },
            // exec:{
            //     run_bower:{
            //         command:'bower install',
            //         stdout : true,
            //         stderr : true
            //     }
            // },
            watch : {
                dist : {
                    files : [
                        'dev/pages/*.html',
                        'dev/pages/**/*.html',
                        'dev/js/**/*',
                        'dev/css/**/*'
                    ],
                    tasks : [ 'uglify', 'less', 'htmlmin']
                }
            }
        };

        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-htmlmin');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-concat');
        // grunt.loadNpmTasks('grunt-exec');
        grunt.loadNpmTasks('grunt-contrib-watch');

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
