/**
 * Login controller
 */
(function(){
	"user strict";
    app.controller('loginController', [
        '$scope',
        '$localStorage',
        '$sessionStorage',
        'LoginFactory',
        'Flash',
        function($scope, $localStorage, $sessionStorage, LoginFactory, Flash) {
        /*
         * Inicialização do formulário
         */
        $scope.init = function(){
            $scope.login = {
                usuario : "user",
                senha : "123456"
            };
        };
        /*
         * Método para logar no sistema.
         */
        $scope.logar = function(){
            var usuario = $scope.login.usuario.trim();
            var password = $scope.login.senha.trim();
            var message;
            var id;
            if( usuario !== "" && password !== ""){
                LoginFactory.doLogin($scope.login, function(res) {
                    if (res.type === false) {
                        alert(res.data);
                    } else {
                        sucesso(res);
                    }
                }, function(res, status) {
                    /*
                     * Falha no acesso ao sistema
                     */
                    var message = '<strong>Erro: '+status+'</strong> Falha na tentativa de acesso ao sistema.';
                    var id = Flash.create('danger', message);
                });
            }else{
                message = '<strong>Atenção</strong> Campo(s) obrigatório(s) precisa(m) ser preenchido(s).';
                id =  Flash.create('warning', message);
            }
        };
        /**
         * Sucesso no acesso ao sistema
         */
        function sucesso(res){
            /*
             * Registro no storage
             */
            $localStorage.lu = {
                username: res.data.nome,
                token: res.data.token
            };
            $sessionStorage.su = {
                username: res.data.nome,
                token: res.data.token
            };
            /*
             * redirecionamento
             */
            window.location = "#/home";
        }

        $scope.init();

    }]).factory('LoginFactory', ['$http', function($http){
        var baseUrl = "http://demo1697442.mockable.io";
        return {
            doLogin: function(data, success, error) {
                $http.post(baseUrl + '/authenticate', data).success(success).error(error, status);
            }
        };
    }]);
}());
