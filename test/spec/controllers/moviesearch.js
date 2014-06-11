'use strict';

describe('Controller: MovieSearchCtrl', function () {

  // load the controller's module
  beforeEach(module('omdbApp'));

  var MovieSearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieSearchCtrl = $controller('MovieSearchCtrl', {
      $scope: scope
    });
  }));

});
