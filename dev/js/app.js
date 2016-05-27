/**
 * Configurações gerais do sistema
 */
(function(){
	"user strict";
    /*
     * Configuração do tema, cores do sistema
     */
    app.config(['$mdThemingProvider', function($mdThemingProvider) {
        var neonRedMap = $mdThemingProvider.extendPalette('blue', {
            '500': '497799'
        });
        $mdThemingProvider.definePalette('neonBlue', neonRedMap);
        $mdThemingProvider.theme('default').primaryPalette('neonBlue');
    }]);
    /*
     * Inicializações
     */
    app.run(['$rootScope',function($rootScope){
        $rootScope.sysname = "Sistema";
        /*
         * Título da página
         */
        $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute) {
            $rootScope.title = currentRoute.title;
        });

        $rootScope.fruits = ["banana","Apple", "Orange"];

    }]);

}());
