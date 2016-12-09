'use strict';

describe('FactoryController module', function() {

  beforeEach(module('myApp'));
  //beforeEach(module('FactoryController'));

  describe('FactoryController controller', function(){

    var scope, testCont, testSrv;
	
	// test injected Service return values
	beforeEach(inject(function($rootScope, $controller, Factory) {
		scope = $rootScope.$new();
		testSrv = Factory;
		testCont = $controller('FactCtrl', {$scope: scope, Factory: testSrv});
	}));

	it('should be defined', function(){
        expect(testCont).toBeDefined();
	});
	
	it('user list size should be 2', function(){
        expect(scope.factorySize).toBe(2);
	});

	it('user list size should be 2', function(){
        expect(scope.getListSize()).toBe(2);
	});

	/*
	it('user list size should be 2', function(){
        expect(testCont.getListSize()).toBe(2);
	});
	*/

  });
  
});