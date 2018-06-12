angular.module('SaveOrdersAppServices', [])
        .factory('SaveOrdersService', ['$http', function ($http) {
                var handler = {
                        putOrder: function (data) {
                                var url = 'https://localhost:5001/api/orders'
                                return $http.post(url, data)
                        },
                }

                return handler;
        }]);


var SaveOrders = angular.module("SaveOrders", ['SaveOrdersAppServices']);
SaveOrders.controller("SaveOrdersController", ['$scope', 'SaveOrdersService', function ($scope, SaveOrdersService) {
        $scope.ph_numbr = /^\+?\d{10}$/;
        $scope.last_name = /^[a-zA-Z ]+$/;
        $scope.first_name = /^[a-zA-Z ]+$/;
        $scope.SaveOrdersAppServices = []
        $scope.newOrder = function () {
                var data = {
                        "sFirstName": $scope.firstname,
                        "sLastName": $scope.lastname,
                        "sPhoneNumber": $scope.contact,
                        "dtPizzaDelivered": $scope.deliveredtimedate,
                        "iNumberOfPizzas": $scope.numberOfPizzas
                }
                SaveOrdersService.putOrder(data).then(function (response) {
                        $scope.SaveOrdersAppServices.push(response.data)
                });
			$scope.firstname = null;
			$scope.lastname = null;
			$scope.contact = null;
			$scope.deliveredtimedate = null;
			$scope.numberOfPizzas = null;
        }
}]);

