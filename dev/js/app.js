/**
 * Configurações gerais do sistema
 */
(function(){
	"user strict";
    /*
     * Configuração do tema, cores do sistema
     */
    app.config([
        '$mdThemingProvider',
        '$localStorageProvider',
        '$sessionStorageProvider',
        '$httpProvider',
        function($mdThemingProvider, $localStorageProvider, $sessionStorageProvider, $httpProvider) {
        /*
         * Tema
         */
        var neonRedMap = $mdThemingProvider.extendPalette('blue', {
            '500': '497799'
        });
        $mdThemingProvider.definePalette('neonBlue', neonRedMap);
        $mdThemingProvider.theme('default').primaryPalette('neonBlue');
        /*
         * Storage config
         */
         $localStorageProvider.setKeyPrefix('_hsh.');
         $sessionStorageProvider.setKeyPrefix('_hsh.');
         /*
          * Cabeçalho padrão para as requisições
          */
         $httpProvider.interceptors.push('httpRequestInterceptor');
    }]);
    /*
     * Inicializações
     */
    app.run([
        '$rootScope',
        '$http',
        '$location',
        '$localStorage',
        '$sessionStorage',
        'Flash',
        function($rootScope, $http, $location, $localStorage, $sessionStorage, Flash){
        $rootScope.sysname = "Sistema";
        /*
         * Título da página
         */
        $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute) {
            $rootScope.page = currentRoute.title;
        });
        /*
         * Login
         *
         * Criar login no localStorage e na sessionStorage
         * @TODO
         *  Verificar se pode ser uma boa prática essa abordagem.
         *  Implementar JWS (tokens)
         *
         */
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            /*
             * Limpa as mensagens
             */
            Flash.clear();
            /*
             * Verifica se o usuário está autenticado.
             */
            var requireLogin = toState.data.requireLogin;
            if (requireLogin && (!$localStorage.lu || !$sessionStorage.su)) {
                // @TODO criar um login modal ?
                window.location = "#/";
                event.preventDefault();
                var message = '<strong>Atenção!</strong> Você precisa ser autenticado para acessar essa área no sistema.';
                var id = Flash.create('warning', message);
            }
        });
        /*
         *
         */
        $rootScope.fruits = ["banana","Apple", "Orange"];

    }]);

}());
