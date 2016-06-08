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
        '$uibModal',
        function($scope, $http, $location, Flash, config, $uibModal){
        /**
         * Inicialização do controller
         */
        var init = function(){
            $scope.title = 'Tweets';
            consultarDados();
        };
        /**
         * Consulta
         */
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
        /**
         * Chama o formulário para ações.
         */
        $scope.form = function(title, id){
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'about.form.html',
                controller: 'aboutFormController',
                size: 'lg',
                backdrop: 'static',
                resolve: {
                    title: function () {
                        return title;
                    },
                    id: function () {
                        return id;
                    }
                }
            });
        };
        /**
         * Chamada inicialização
         */
        init();
    }]);
}());
