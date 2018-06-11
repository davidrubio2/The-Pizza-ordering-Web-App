'use strict';

var PizzaApp = angular.module('PizzaApp', ['ngRoute', 'GetAppOrders','SaveAppOrders']);
PizzaApp.config(['$routeProvider',
    function (
        $routeProvider
    ) {
        $routeProvider.
            when('/Screen1', {
                templateUrl: 'pages/Screen1.html',
                controller: 'SaveOrdersController'
            }).
            when('/Screen2', {
                templateUrl: 'pages/Screen2.html',
                controller: 'GetAllOrdersController'
            }).
            otherwise({
                redirectTo: '/Screen1'
            });
    }]);