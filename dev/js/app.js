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
        'cfpLoadingBarProvider',
        function($mdThemingProvider, $localStorageProvider, $sessionStorageProvider, $httpProvider, cfpLoadingBarProvider) {
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
         /*
          * Configuração loading
          */
         cfpLoadingBarProvider.spinnerTemplate = '<div id="loading-bar-container"><span class="fa fa-spinner fa-pulse fa-3x fa-fw"></div>';
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
        'config',
        function($rootScope, $http, $location, $localStorage, $sessionStorage, Flash, config){
        $rootScope.sysname = config.appName+' ['+config.appVersion+']';
        /*
         * Evento ao mudar a pagina
         */
        $rootScope.$on('$stateChangeStart', function (event, toState) {
            /*
             * Título da página
             */
           $rootScope.page = toState.name;
            /*
             * Limpa as mensagens
             */
            Flash.clear();
            /*
             * Login
             * Criar login no localStorage e na sessionStorage
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
            menuCheck();
        });
        /*
         * Cria o menu para o usuário
         */
        function menuCheck(){
            if($localStorage.lu && $sessionStorage.su){
                $rootScope.menu = [
                    {
                        link : 'dashboard',
                        label : 'Home',
                        tooltip : 'Pagina inicial',
                        icone : 'home'
                    },
                    {
                        link : 'sobre',
                        label : 'Sobre',
                        tooltip : 'Sobre o sistema',
                        icone : 'question-circle'
                    },
                    {
                        link : 'contato',
                        label : 'Contato',
                        tooltip : 'Contato',
                        icone : 'pencil'
                    },
                    {
                        link : 'usuarios',
                        label : 'Usuários',
                        tooltip : 'Usuários cadastrados no sistema',
                        icone : 'users'
                    },
                ];
                $rootScope.logoutButton = true;
            }else{
                $rootScope.menu = [];
                $rootScope.logoutButton = false;
            }
        }
    }]);
}());
