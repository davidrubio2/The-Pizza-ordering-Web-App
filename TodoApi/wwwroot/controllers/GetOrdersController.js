var GetOrders = angular.module("GetOrders", ['GetOrdersAppServices']);
GetOrders.controller("GetAllOrdersController", ['$scope', 'GetOrdersService', function ($scope, GetOrdersService) {

        $scope.GetOrdersAppServices = []

        GetOrdersService.getOrdersFun().then(function (response) {
                $scope.orders = response.data;
        });
}]);
