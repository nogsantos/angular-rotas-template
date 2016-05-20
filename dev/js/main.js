(function(){
    "user strict";
    var app = angular.module('app', ['ngRoute'])
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
            });
        $locationProvider.html5Mode(true);
    }]);    
    app.controller('mainController', ['$scope', function($scope) {
        $scope.pagina = 'Home';
        $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eveniet sit, quis vitae, a sapiente id soluta quod unde magnam eligendi itaque quidem perspiciatis veniam illo, modi! Inventore, voluptatum, possimus.';
    }]);
    app.controller('aboutController', ['$scope', function($scope) {
        $scope.pagina = 'Sobre';
        $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, nulla.';
    }]);
    app.controller('contactController', ['$scope', function($scope) {
        $scope.pagina = 'Sobre';
        $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem repudiandae sunt tempora accusamus dicta saepe sint inventore, eos voluptas nesciunt.';
    }]);
}());
