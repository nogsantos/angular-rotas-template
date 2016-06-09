/**
 * Controller formulário
 */
(function(){
    "user strict";
    app.controller('aboutFormController', [
        '$scope',
        '$http',
        '$uibModalInstance',
        'config',
        '$rootScope',
        function($scope, $http, $uibModalInstance, config, $rootScope) {
        var id = $scope.$resolve.id;
        $scope.title = 'Tweetes - '+$scope.$resolve.title+' '+((id !== null) ? id : '');
        var pMethod = "POST";
        /**
         * Quando passado
         */
        if(id !== null){
            $http.get(config.apiUrl + '/tweets/'+id
            ).success(function(ret){
                $scope.body = ret.data[0].body;
                $scope.created_date = ret.data[0].created_at;
                $scope.updated_date = ret.data[0].updated_at;
            }).error(function(err){
                console.log('erro'+err);
            });
            pMethod = "PUT"
        }
        /**
         * Método salvar
         */
        $scope.save = function(){
            $http({
                method: pMethod,
                url: config.apiUrl + '/tweets'+((id !== null) ? '/'+id : ''),
                data:{
                    'body': $scope.body
                }
            }).then(function successCallback() {
                $scope.alert = "";
                $scope.alerts = [
                    { type: 'success', msg: 'Cadastrado com sucesso!' }
                ];
                /*
                 * Atualiza a listagem
                 */
                 $rootScope.$emit("reload");
            }, function errorCallback(response) {
                $scope.alerts = [
                    { type: 'danger', msg: response.data.meta.error.message+': '+response.data.meta.error.details.body[0]},
                ];
            });
        };
        /**
         * Fecha a mensagem de alert
         */
        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
        /**
         * Fechar o formulário
         */
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);
}());
