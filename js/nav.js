var app = angular.module('myNglar', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "fruit.html",
                controller: 'myController'
            }).when('/login', {

            templateUrl: 'login.html',
            controller:'loginController'
    }).when('/fruit', {

        templateUrl: 'fruit.html',
        controller:'regController'
    })
        .otherwise('redirectTo:/')
    });
app.controller('myController', function ($scope) {

}).controller('loginController',function ($scope) {

}).controller('regController',function ($scope) {

})

    .directive('script', function() {
        return {
            restrict: 'E',
            scope: false,
            link: function(scope, elem, attr) {
                if (attr.type === 'text/ng-javascript') {
                    var code = elem.text();
                    var f = new Function(code);
                    f();
                }
            }
        };
    })