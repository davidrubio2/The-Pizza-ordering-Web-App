angular.module('GetOrdersAppServices', [])
        .factory('GetOrdersService', ['$http', function ($http) {
                var handler = {
                        getOrdersFun: function () {
                                var url = 'https://seample.azurewebsites.net/api/orders'
                                return $http.get(url)
                        },

                }

                return handler;
        }]);	