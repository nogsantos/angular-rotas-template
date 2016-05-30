/**
 * Configurações gerais do sistema
 */
(function(){
	"user strict";
    /*
     * Configuração do tema, cores do sistema
     */
    app.config(['$mdThemingProvider', '$localStorageProvider', '$sessionStorageProvider', function($mdThemingProvider, $localStorageProvider, $sessionStorageProvider) {
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
    }]);
    /*
     * Inicializações
     */
    app.run(['$rootScope', '$http', '$location', '$localStorage', '$sessionStorage', function($rootScope, $http, $location, $localStorage, $sessionStorage){
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
        // $localStorage.lu = { username: 'nogsantos', token: 'token' };
        // $sessionStorage.su = { username: 'nogsantos', token: 'token' };

        // if ($localStorage.currentUser) {
        //     $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        // }

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            var requireLogin = toState.data.requireLogin;
            if (requireLogin && (!$localStorage.lu || !$sessionStorage.su)) {
                event.preventDefault();
                // @TODO criar um login modal
                console.log('solicitar login novamente');
                // $location.path('/login');
            }
        });
        /*
         *
         */
        $rootScope.fruits = ["banana","Apple", "Orange"];

    }]);

}());
