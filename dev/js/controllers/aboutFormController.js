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
        function($scope, $http, $uibModalInstance, config) {
        var id = $scope.$resolve.id;
        $scope.title = 'Tweetes - '+$scope.$resolve.title+' '+((id !== null) ? id : '');

        if(id !== null){
            console.log("consultar por id" + id);
        }

        $scope.salvar = function(){
            $http.post(config.apiUrl + '/tweets',
                {body : $scope.about.body}
            ).success(function(ret){
                console.log(ret);
            }).error(function(err){
                console.log(err);
            });
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);
}());
