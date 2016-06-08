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
        '$mdDialog',
        function($scope, $http, $localStorage, $sessionStorage, config, $mdDialog) {
        /**
         * Inicialização
         */
        var init = function(){
            $scope.title = 'Dashboard';
        };
        /**
         * Logout
         */
        $scope.logout = function(ev) {
            var confirm = $mdDialog.confirm()
                .title('Deseja realmente sair do sistema com segurança?')
                .targetEvent(ev)
                .ok('Confirmar')
                .cancel('Cancelar');
            $mdDialog.show(confirm).then(function() {
                $http.delete(config.apiUrl + '/access_tokens/'+$localStorage.lu.access_token);
                $localStorage.$reset();
                $sessionStorage.$reset();
                window.location = "/";
            });
        };
        /*
         * Chamada para inicializações
         */
        init();
    }]);
}());
