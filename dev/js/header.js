/**
 * Global app
 */
var app = angular.module('app', [
    'ui.router',
    'ngMaterial',
    'ngAnimate',
    'ngStorage',
    'angular-loading-bar',
    'ngFlash',
    'ui.bootstrap'
]);

app.constant('config', {
    appName: 'SisClient',
    appVersion: '0.0.1',
    apiUrl: 'http://localhost:3000/v1'
    // apiUrl: 'https://serverapp-api.herokuapp.com/v1'
});
