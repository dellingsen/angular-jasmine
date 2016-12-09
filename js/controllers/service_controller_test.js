'use strict';

describe('ServiceController module', function() {

  beforeEach(module('myApp'));

  describe('ServiceController controller', function(){

    var scope, testCont, testService, mockService;

	var testList = [{firstname: 'Dan', lastname: 'Service1', username: 'danService1', email: 'service1@home.com', password: 'password'}, 
				{firstname: 'Dan', lastname: 'Service2', username: 'danService2', email: 'service2@home.com', password: 'password'}, 
				{firstname: 'Dan', lastname: 'Service3', username: 'danService3', email: 'service3@home.com', password: 'password'}, 
				{firstname: 'Dan', lastname: 'Service4', username: 'danService4', email: 'service4@home.com', password: 'password'}];

				
	// test injected Service, or mock Service return values
	beforeEach(inject(function($rootScope, $controller, $injector, Service) {
		scope = $rootScope.$new();
		// create mock service and mock results
        mockService = $injector.get('Service'); 
        spyOn(mockService, 'getStatus').and.returnValue('Active');
        spyOn(mockService, 'getAll').and.returnValue(testList);
		testCont = $controller('ServCtrl', {$scope: scope, Service: mockService});
		
		// Or, use injected Service and test actual service results
		//testService = Service;
		//testCont = $controller('ServCtrl', {$scope: scope, Service: testService});
	}));

	it('should be defined', function(){
        expect(testCont).toBeDefined();
	});
	
	// test variable value on scope
	it('user list size should be 4', function(){
        expect(scope.serviceSize).toBe(4);
	});
	
	// test method return value on scope
	it('user list size should be 4', function(){
        expect(scope.getListSize()).toBe(4);
	});

	// test method return value on controller
	it('user list size should be 4', function(){
        expect(testCont.getListSize2()).toBe(4);
	});

	// test method return value on scope
	it('user list size should be 4', function(){
        expect(scope.getServiceStatus()).toBe('Active');
	});

	// test mock method call
	it('mockService.getAll spy object should be called', function(){
        expect(mockService.getAll).toHaveBeenCalled();
	});
	
	
  });
  
});