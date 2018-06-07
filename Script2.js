angular.module('orders', [])
        .factory('ordersService', ['$http', function ($http) {
                var handler = {
                        getOrders: function () {
                                var url = 'https://localhost:5001/api/orders'
                                return $http.get(url)
                        },
                       
                }

                return handler;
        }]);

var app = angular.module("AppPizza", ['orders']);
app.controller("OrderController", ['$scope', 'ordersService', function ($scope, ordersService) {

        $scope.orders = []

        ordersService.getOrders().then(function (response) {
                $scope.orders = response.data;
        });
}]);