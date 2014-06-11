'use strict';

describe('Controller: MovieCtrl', function () {

  // load the controller's module
  beforeEach(module('omdbApp'));

  var MovieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieCtrl = $controller('MovieCtrl', {
      $scope: scope
    });
  }));

});
