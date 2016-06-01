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
                $localStorage.$reset();
                $sessionStorage.$reset();
                window.location = "/";
            }
        };
        /*
         * Chamada para inicializações
         */
        init();

    }]);
}());
