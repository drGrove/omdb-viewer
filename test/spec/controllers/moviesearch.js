'use strict';

describe('Controller: MoviesearchCtrl', function () {

  // load the controller's module
  beforeEach(module('omdbApp'));

  var MoviesearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoviesearchCtrl = $controller('MoviesearchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
