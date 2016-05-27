/**
 * About Controller
 */
(function(){
	"user strict";
    app.controller('aboutController', ['$scope','$location', function($scope, $location) {
        $scope.title = 'Sobre';
        // $scope.fruit = $routeParams.name;
        // $scope.fruitIndex = $scope.fruits.indexOf($scope.fruit);
        /**
         * Save
         */
        // $scope.save = function(){
        //     if($scope.fruitIndex < 0) {
        //         $scope.fruits.push($scope.fruit);
        //     }else{
        //         $scope.fruits[$scope.fruitIndex] = $scope.fruit;
        //     }
        //     $location.path('/sobre');
        // };
        // /**
        //  * Remove
        //  */
        // $scope.remove = function(){
        //
        // };

    }]);
}());
