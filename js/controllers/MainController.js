var mainController = angular.module('MainController', []);

mainController.controller('MainCtrl', function($scope, globalsetting) {

	$scope.tagline = 'Main App Controller - ' + globalsetting.appName;	

})
.directive('mydirect', function() {
  return {
    template: 'Name: Test User Address: 123 4th St. Boston,MA'
  };
});
