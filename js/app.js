// AngularJS dependency injection - inject defined application modules into our app

var app = angular.module('myApp', 
['ngRoute', 'appRoutes', 'MainController', 'FactoryController', 'ServiceController', 'MyFactory', 'MyService']);
 

app.config(function ($provide) {
    $provide.provider('globalsetting', function () {
        this.$get = function () {
            var appname = "My Test App";
            return {
                appName: appname
            };
        }
    })
});

app.run(function($rootScope, $location, $http) {});

/*
(function() {
angular.module('myApp', 
['ngRoute', 'appRoutes', 'MainController', 'FactoryController', 'ServiceController', 'MyFactory', 'MyService']);
})();
*/