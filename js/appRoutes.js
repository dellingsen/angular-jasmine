angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

	// home page
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'MainCtrl',
        loginRequired: true //
    })
	.when('/factory', {
	  templateUrl: 'views/factory.html',
	  controller: 'FactCtrl',
      loginRequired: true //
    })
	.when('/service', {
	  templateUrl: 'views/service.html',
	  controller: 'ServCtrl',
      loginRequired: true //
    })
    .otherwise({redirectTo: '/'})

  $locationProvider.html5Mode(true);

}]);