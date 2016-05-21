/**
 * Controlador principal.
 * Define as rotas do sistema.
 */
(function(){
    "user strict";
    var app = angular.module('app', ['ngRoute', 'ngMaterial'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'mainController'
            })
            .when('/sobre', {
                templateUrl : 'about.html',
                controller  : 'aboutController'
            })
            .when('/contato', {
                templateUrl : 'contact.html',
                controller  : 'contactController'
            })
            .otherwise({
                controller  :'erroController',
                templateUrl :'404.html'
            });
        $locationProvider.html5Mode(true);
    }]);
    app.controller('mainController', ['$scope', '$mdDialog', function($scope, $mdDialog) {
        $scope.pagina = 'Home';
        $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eveniet sit, quis vitae, a sapiente id soluta quod unde magnam eligendi itaque quidem perspiciatis veniam illo, modi! Inventore, voluptatum, possimus.';
        /**
         *
         */
        this.openMenu = function($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };
        /**
         *
         */
        this.profile = function($event) {

        };
        /**
         *
         */
        this.help = function(ev) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('This is an alert title')
                .textContent('You can specify some description text in here.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent(ev)
            );
        };
    }]);
    app.controller('aboutController', ['$scope', function($scope) {
        $scope.pagina = 'Sobre';
        $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, nulla.';
    }]);
    app.controller('contactController', ['$scope', function($scope) {
        $scope.pagina = 'Contato';
        $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem repudiandae sunt tempora accusamus dicta saepe sint inventore, eos voluptas nesciunt.';
    }]);
}());
