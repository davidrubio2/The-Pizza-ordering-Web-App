angular.module('GetOrdersAppServices', [])
        .factory('GetOrdersService', ['$http', function ($http) {
                var handler = {
                        getOrdersFun: function () {
                                var url = 'https://localhost:5001/api/orders'
                                return $http.get(url)
                        },

                }

                return handler;
        }]);

var GetOrders = angular.module("GetOrders", ['GetOrdersAppServices']);
GetOrders.controller("GetAllOrdersController", ['$scope', 'GetOrdersService', function ($scope, GetOrdersService) {

        $scope.GetOrdersAppServices = []

        GetOrdersService.getOrdersFun().then(function (response) {
                $scope.orders = response.data;
        });
}]);