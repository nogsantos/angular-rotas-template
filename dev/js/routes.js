/**
 * Configuração das rotas do sistema
 */
(function(){
    "user strict";
    app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('login', {
                url: "/",
                templateUrl: "login.html",
                controller : "loginController",
                controllerAs: "ctrl",
                data :{
                    requireLogin:false
                }
            })
            .state('dashboard', {
                url: "/home",
                templateUrl: "dashboard.html",
                controller : "dashboardController",
                controllerAs: "ctrl",
                data :{
                    requireLogin:true
                }
            })
            .state('sobre', {
                url: "/sobre",
                templateUrl: "about.html",
                controller: 'aboutController',
                controllerAs: 'abt',
                data :{
                    requireLogin:true
                }
            })
            .state('contato', {
                url: "/contato",
                templateUrl: "contact.html",
                controller: 'contactController',
                controllerAs: 'ct',
                data :{
                    requireLogin:true
                }
            })
        ;
    }]);
}());
