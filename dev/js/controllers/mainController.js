/**
 * Main controller
 */
(function(){
	"user strict";
    app.controller('mainController', [
        '$scope',
        '$http',
        '$localStorage',
        '$sessionStorage',
        'config',
        function($scope, $http, $localStorage, $sessionStorage, config) {
        /**
         * Inicialização
         */
        var init = function(){
            $scope.title = 'Dashboard';            
        };
        /**
         * Logout
         */
        $scope.logout = function(){
            if(confirm('Sair do sistema com segurança?')){
                $http.delete(config.apiUrl + '/access_tokens/'+$localStorage.lu.access_token)
                .success(function(){
                    $localStorage.$reset();
                    $sessionStorage.$reset();
                    window.location = "/";
                }).error(function(error, status){
                    console.log(error);
                    console.log(status);
                });
            }
        };
        /*
         * Chamada para inicializações
         */
        init();
    }]);
}());
