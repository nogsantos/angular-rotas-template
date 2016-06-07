/**
 * Factory global do sistema
 */
(function(){
    "user strict";
    /**
     * Definindo um cabeçalho padrão para as requisições
     */
    app.factory('httpRequestInterceptor',['$localStorage', function ($localStorage) {
        return {
            request: function (config) {
                config.headers.Authorization = (typeof $localStorage.lu !== 'undefined') ? $localStorage.lu.access_token : 'Basic realm="AppServer"';
                config.headers.Accept = 'application/json;odata=verbose';
                return config;
            }
        };
    }]);
}());
