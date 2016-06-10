/**
 * Controller formulário
 */
(function(){
    "user strict";
    app.controller('aboutFormController', [
        '$scope',
        '$http',
        '$localStorage',
        '$uibModalInstance',
        'config',
        '$rootScope',
        'copyToStorage',
        '$translate',
        function($scope, $http, $localStorage, $uibModalInstance, config, $rootScope, copyToStorage, $translate) {
        /*
         * Criação do controller
         */
        var id = $scope.$resolve.id;
        $scope.title = 'Tweetes - '+$scope.$resolve.title+' '+((id !== null) ? id : '');
        var pMethod = "POST";
        /*
         * Storage
         */
        var hasStorage = (typeof $localStorage.aboutForm !== "undefined") ? true : false;
        var storageData = "";
        if(hasStorage){
            $scope.alerts = [{
                type: 'info',
                msg: $translate.instant('parada_inesperada')
            }];
            storageData = $localStorage.aboutForm.data;
            for(key in storageData){
                $scope[key] = storageData[key];
            }
        }
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
                $scope.alerts = [{
                    type: 'success',
                    msg: 'Cadastrado com sucesso!'
                }];
                /*
                 * Atualiza a listagem
                 */
                 $rootScope.$emit("reload");
                 delete $localStorage.aboutForm;
                 hasStorage = false;
            }, function errorCallback(response) {
                $scope.alerts = [{
                    type: 'danger',
                    msg: response.data.meta.error.message+': '+response.data.meta.error.details.body[0]
                }];
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
            if(hasStorage){
                $scope.alerts = [{
                    type: 'warning',
                    msg: 'Há dados não salvos no formulário, se deseja realmente sair, Clique em Cancelar novamente.'
                }];
                delete $localStorage.aboutForm;
                hasStorage = false;
            }else{
                $uibModalInstance.dismiss('cancel');
            }
        };
        /**
         *
         */
        $scope.saveIntoStorage = function(e){
            hasStorage = true;
            copyToStorage(e.srcElement.form.name, {
                id : e.srcElement.id,
                text : e.srcElement.value
            });
        };
    }]);
}());
