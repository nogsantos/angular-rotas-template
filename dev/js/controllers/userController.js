/**
 * About Controller
 */
(function(){
	"user strict";
    app.controller('userController',[
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
            $scope.title = 'Usuários';
            consultarDados();
        };

        function consultarDados(){
            $http.get(
                config.apiUrl + '/users'
            ).success(function(data){
                $scope.q = data.data;
                $scope.meta = data.meta;
            }).error(function(error, status){
                var message = '<strong>'+status+'- Erro</strong>'+error.meta.error.message;
                var id = Flash.create('warning', message);
            });
        }
        init();
    }]);
}());
