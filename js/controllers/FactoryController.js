var factoryController = angular.module('FactoryController', []);

// The FactoryController function is a standard JavaScript object constructor.
// AngularJS will invoke FactoryController with a $scope and FactSrv object
// The scope is the binding part between the HTML (view) and the JavaScript (controller)
// $scope object holds all application variables and functions
// Note: Use an array of Strings so Angular can resolve dependencies...
factoryController.controller('FactCtrl', ['$scope', 'Factory', function($scope, Factory)
{
  console.log('In FactoryController....calling Factory now.')

  var factoryData =  Factory.getAll();
  $scope.factoryList = factoryData;
  $scope.factorySize = factoryData.length;
  
  $scope.getListSize = function() {
	  return $scope.factorySize;
  }
    
}])