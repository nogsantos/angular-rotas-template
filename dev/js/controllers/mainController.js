/**
 * Main controller
 */
(function(){
	"user strict";
    app.controller('mainController', [
        '$scope',
        '$localStorage',
        '$sessionStorage',
        function($scope, $localStorage, $sessionStorage) {

        $scope.title = 'Dashboard';

        $scope.logout = function(){
            if(confirm('Sair do sistema com segurança?')){
                $localStorage.$reset();
                $sessionStorage.$reset();
                window.location = "/";
            }
        };

    }]);
}());
