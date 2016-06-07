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
                username : "nogsantos",
                password : "guit23"
            };
            // $scope.login = {
            //     username : "um",
            //     password : "12345"
            // };
        };
        /*
         * Método para logar no sistema.
         */
        $scope.logar = function(){
            var usuario = $scope.login.username.trim();
            var password = $scope.login.password.trim();
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
                access_token: res.data[0].access_token,
                token_type : res.data[0].token_type
            };
            $sessionStorage.su = {
                access_token: res.data[0].access_token,
                token_type: res.data[0].token_type
            };
            /*
             * redirecionamento
             */
            window.location = "#/home";
        }

        $scope.init();

    }]).factory('LoginFactory', ['$http', 'config', function($http, config){
        return {
            doLogin: function(data, success, error) {
                $http.post(config.apiUrl + '/access_tokens', data).success(success).error(error, status);
            }
        };
    }]);
}());
