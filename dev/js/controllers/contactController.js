/**
 * Contact Controller
 */
(function(){
	"user strict";
    app.controller('contactController', ['$scope', function($scope) {
        $scope.title = 'Contato';
        var min = 3;
        $scope.caracter_count = min;

        $scope.customers = [
            {name:'Dave Jones',city:'Phoenix'},
            {name:'Jame Riley',city:'Atlanta'},
            {name:'Heedy Walling',city:'Chandler'},
            {name:'Thomas Winter',city:'Seatle'},
            {name:'John Snool',city:'Black Walls'},
            {name:'Havel',city:'Dragon City'},
            {name:'Lucatiel',city:'Mirrah'},
        ];

        $scope.addCustomer = function(){
            var customer = {name: $scope.nome, city: $scope.cidade};
            $scope.customers.push(customer);
        };

        $scope.validLength = function(){
            return $scope.cidade.length < min | false;
        };

    }]);

}());
