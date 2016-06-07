/**
 * About Controller
 */
(function(){
	"user strict";
    app.controller('aboutController',[
        '$scope',
        '$http',
        '$location',
        'Flash',
        'config',
        function($scope, $http, $location, Flash, config){
        /**
         * Inicialização do controller
         */
        var init = function(){
            $scope.title = 'Sobre';
            consultarDados();
        };

        function consultarDados(){
            $http.get(
                config.apiUrl + '/tweets'
            ).success(function(data){
                $scope.q = data.data;
            }).error(function(error, status){
                var message = '<strong>'+status+'- Erro</strong>'+error.meta.error.message;
                var id = Flash.create('warning', message);
            });
        }
        init();
    }]);
}());
