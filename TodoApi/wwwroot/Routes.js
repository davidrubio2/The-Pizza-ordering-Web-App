'use strict';

var PizzaApp = angular.module('PizzaApp', ['ngRoute', 'GetOrders','SaveOrders']);
PizzaApp.config(['$routeProvider',
    function (
        $routeProvider
    ) {
        $routeProvider.
            when('/saveOrders', {
                templateUrl: 'pages/saveOrders.html',
                controller: 'SaveOrdersController'
            }).
            when('/showOrders', {
                templateUrl: 'pages/showOrders.html',
                controller: 'GetAllOrdersController'
            }).
            otherwise({
                redirectTo: '/saveOrders'
            });
    }]);