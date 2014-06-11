'use strict';

angular.module('omdbApp')
  .controller('MovieCtrl', function ($scope, $modalInstance, movieData) {
    $scope.movie = movieData;
    $scope.close = function(){
      $modalInstance.close()
    }
  });
