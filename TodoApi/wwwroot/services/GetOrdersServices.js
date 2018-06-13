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