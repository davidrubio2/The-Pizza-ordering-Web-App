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

