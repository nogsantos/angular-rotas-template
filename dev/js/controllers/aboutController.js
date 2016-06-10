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
        '$mdDialog',
        '$rootScope',        
        function($scope, $http, $location, Flash, config, $uibModal, $mdDialog, $rootScope){
        /**
         * Inicialização do controller
         */
        var init = function(){
            $scope.title = 'Tweets';
            queryData();
        };
        /**
         * Consulta
         */
        function queryData(){
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
         * Deletar item
         */
        $scope.delete = function(event, id){
            var confirm = $mdDialog.confirm()
                .title('Confirma a exclusão do item selecionado?')
                .targetEvent(event)
                .ok('Confirmar')
                .cancel('Cancelar');
            $mdDialog.show(confirm).then(function() {
                $http.delete(config.apiUrl + '/tweets/'+id
                ).success(function(ret){
                    queryData();
                    message = '<strong>Sucesso</strong> Item excluido com sucesso.';
                    id =  Flash.create('success', message);
                }).error(function(err){
                    message = '<strong>'+err.data.meta.error.message+'</strong> '+err.data.meta.error.details.body[0];
                    id =  Flash.create('success', message);
                });
            });
        }
        /**
         * Atualiza a listagem na chamada por outro controller
         */
        $rootScope.$on("reload", function(){
            queryData();
        });
        /**
         * Chamada inicialização
         */
        init();
    }]);
}());
