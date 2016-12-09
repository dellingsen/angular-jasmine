var myService = angular.module('MyService',[]);

// From service we won't return anything, but when we inject service via DI and use it 
// angular will create an object with new keyword so that all properties which are in service are accessible
myService.service('Service', ['$http', '$rootScope', function($http, $rootScope) {

    var list;
	var status = "Active";
	
    this.getAll = function() {
      console.log('In Service: getAll ')
	  list = [ 	{firstname: 'Dan', lastname: 'Service1', username: 'danService1', email: 'service1@home.com', password: 'password' }, 
				{firstname: 'Dan', lastname: 'Service2', username: 'danService2', email: 'service2@home.com', password: 'password' },
                {firstname: 'Dan', lastname: 'Service3', username: 'danService3', email: 'service3@home.com', password: 'password' }, 				  
				{firstname: 'Dan', lastname: 'Service4', username: 'danService4', email: 'service4@home.com', password: 'password' }	         
			 ];
			 
	  return list;
    }
	
	this.getStatus = function() {
		return this.status;
	}

}]);