angular.module('orders', [])
        .factory('ordersService', ['$http', function ($http) {
                var handler = {
                        putOrder: function (data) {
                                var url = 'https://localhost:5001/api/orders'
                                return $http.post(url, data)
                        },
                }

                return handler;
        }]);

var app = angular.module("PizzasApp", ['orders']);
app.controller("OrdersController", ['$scope', 'ordersService', function ($scope, ordersService) {
        $scope.ph_numbr = /^\+?\d{10}$/;
        $scope.last_name = /^[a-zA-Z ]+$/;
        $scope.first_name = /^[a-zA-Z ]+$/;
        $scope.orders = []
        $scope.newOrder = function () {
                var data = {
                        "sFirstName": $scope.firstname,
                        "sLastName": $scope.lastname,
                        "sPhoneNumber": $scope.contact,
                        "dtPizzaDelivered": $scope.deliveredtimedate,
                        "iNumberOfPizzas": $scope.numberOfPizzas
                }
                ordersService.putOrder(data).then(function (response) {
                        $scope.orders.push(response.data)
                });
        }
}]);
document.querySelector("#today").valueAsDate = new Date();