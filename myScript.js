var app = angular.module("myApp", []);
app.controller("formCtrl", ['$scope', function($scope) {
        $scope.ph_numbr = /^\+?\d{10}$/;  
}]);