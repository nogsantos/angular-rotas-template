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
        $scope.login = {
            usuario : "",
            senha : ""
        };
        /*
         * Método para logar no sistema.
         */
        $scope.logar = function(){
            Flash.clear();
            if($scope.login.usuario !== "" && $scope.login.senha !== ""){
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
                    var id = Flash.create('danger', message, 0, {class: 'custom-class', id: 'custom-id'}, true);
                });
            }else{
                var message = '<strong>Atenção</strong> Campo(s) obrigatório(s) precisa(m) ser preenchido(s).';
                var id = Flash.create('warning', message, 0, {class: 'custom-class', id: 'custom-id'}, true);
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

    }]).factory('LoginFactory', ['$http', function($http){
        var baseUrl = "http://demo7610644.mockable.io";
        return {
            doLogin: function(data, success, error) {
                $http.post(baseUrl + '/authenticate', data).success(success).error(error, status);
            }
        };
    }]);
}());
