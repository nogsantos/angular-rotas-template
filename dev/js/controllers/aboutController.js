/**
 * About Controller
 */
(function(){
	"user strict";
    app.controller('aboutController',[
        '$scope',
        '$http',
        '$location',
        'Flash',
        function($scope, $http, $location, Flash){
        /**
         * Inicialização do controller
         */
        var init = function(){
            $scope.title = 'Sobre';
            consultarDados();
        };

        function consultarDados(){
            $http.get(
                'http://demo1697442.mockable.io/q'
            ).success(function(data){
                $scope.q = data;
            }).error(function(error, status){
                var message = '<strong>Atenção</strong> Campo(s) obrigatório(s) precisa(m) ser preenchido(s).';
                var id = Flash.create('warning', message);
            });
        }

        init();
    }]);
}());
