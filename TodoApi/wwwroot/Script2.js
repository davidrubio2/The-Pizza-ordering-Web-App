angular.module('GetOrdersAppServices', [])
        .factory('GetOrdersService', ['$http', function ($http) {
                var handler = {
                        getOrders: function () {
                                var url = 'https://localhost:5001/api/orders'
                                return $http.get(url)
                        },

                }

                return handler;
        }]);

var GetAppOrders = angular.module("GetAppOrders", ['GetOrdersAppServices']);
GetAppOrders.controller("GetAllOrdersController", ['$scope', 'GetOrdersService', function ($scope, GetOrdersService) {

        $scope.GetOrdersAppServices = []

        GetOrdersService.getOrders().then(function (response) {
                $scope.orders = response.data;
        });
}]);