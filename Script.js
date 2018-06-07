var app = angular.module("PizzasApp", []);
app.controller("OrdersController", ['$scope', function($scope) {
        $scope.ph_numbr = /^\+?\d{10}$/;  
        $scope.last_name = /^[a-zA-Z ]+$/;
        $scope.first_name = /^[a-zA-Z ]+$/;
}]);
document.querySelector("#today").valueAsDate = new Date();