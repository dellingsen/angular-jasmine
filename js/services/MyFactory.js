var myFactory = angular.module('MyFactory',[]);

// From factory we will always return an object
myFactory.factory('Factory', ['$http', '$rootScope', function($http, $rootScope) {

  return {
    getAll : function() {
      console.log('In Factory: getAll ')
	  return [ 	{firstname: 'Dan', lastname: 'Factory1', username: 'danFact1', email: 'fact1@home.com', password: 'password' }, 
				{firstname: 'Dan', lastname: 'Factory2', username: 'danFact2', email: 'fact2@home.com', password: 'password' }
	         ];
    }

  }

}]);