/**
 * Configuração das rotas do sistema
 */
(function(){
    "user strict";
    app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "dashboard.html",
                controller : "mainController",
                controllerAs: "ctrl",
                data :{
                    requireLogin:true
                }
            })
            .state('sobre', {
                url: "/sobre",
                templateUrl: "about.html",
                controller: 'aboutController',
                controllerAs: 'abt'
            })
            .state('contato', {
                url: "/contato",
                templateUrl: "contact.html",
                controller: 'contactController',
                controllerAs: 'ct'
            });
        // $httpProvider.html5Mode(true);
    }]);
}());
