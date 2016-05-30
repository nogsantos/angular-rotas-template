/**
 * Main controller
 */
(function(){
	"user strict";
    app.controller('dashboardController', ['$scope', '$mdDialog', function($scope, $mdDialog) {

        $scope.title = 'Dashboard';

        // /**
        //  *
        //  */
        // this.openMenu = function($mdOpenMenu, ev) {
        //     originatorEv = ev;
        //     $mdOpenMenu(ev);
        // };
        // /**
        //  *
        //  */
        // this.profile = function($event) {
        //
        // };
        // /**
        //  *
        //  */
        // this.help = function(ev) {
        //     $mdDialog.show(
        //         $mdDialog.alert()
        //         .parent(angular.element(document.querySelector('#popupContainer')))
        //         .clickOutsideToClose(true)
        //         .title('This is an alert title')
        //         .textContent('You can specify some description text in here.')
        //         .ariaLabel('Alert Dialog Demo')
        //         .ok('Got it!')
        //         .targetEvent(ev)
        //     );
        // };
    }]);
}());
