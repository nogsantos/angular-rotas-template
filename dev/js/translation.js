/**
 * Trans
 */
(function (){
    "use strict";
    app.config(function($translateProvider) {
        $translateProvider.translations('en', {

        })
        .translations('pt', {
            parada_inesperada : 'Aten&ccedil;&atilde;o! O sistema teve uma parada inesperada, os dados abaixo são dados temporários, para persisti-los, clique no botão Salvar.'
        });
        $translateProvider.preferredLanguage('pt');
        $translateProvider.useSanitizeValueStrategy('sanitize');
    });

}());
