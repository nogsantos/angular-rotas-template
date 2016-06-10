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
    /**
     * Copia o que está sendo digitado em um input do tipo texto no local Storage.
     */
    app.service('copyToStorage',['$localStorage', function($localStorage){
        var copyTo = function(key, value){
            if(typeof $localStorage[key] === "undefined"){
                $localStorage[key] = {
                    data : {}
                }
            }
            $localStorage[key].data[value.id] = value.text;
        };
        return copyTo;
    }]);
}());
