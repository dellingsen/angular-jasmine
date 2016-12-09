var factoryController = angular.module('ServiceController', []);

// The FactoryController function is a standard JavaScript object constructor.
// AngularJS will invoke FactoryController with a $scope and FactSrv object
// The scope is the binding part between the HTML (view) and the JavaScript (controller)
// $scope object holds all application variables and functions
// Note: Use an array of Strings so Angular can resolve dependencies...
factoryController.controller('ServCtrl', ['$scope', 'Service', function($scope, Service)
{
  console.log('In ServiceController....calling Service now.')

  var serviceData =  Service.getAll();
  $scope.serviceList = serviceData;
  $scope.serviceSize = serviceData.length;
  
  $scope.getListSize = function() {
	  return $scope.serviceSize;
  }

  this.getListSize2 = function() {
	  return $scope.serviceSize;
  }
  
  $scope.getServiceStatus = function() {
	  return Service.getStatus();
  }

}])