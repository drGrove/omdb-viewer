'use strict';

angular.module('omdbApp')
  .controller('MainCtrl', function ($scope, omdb) {
    $scope.search = {};
    $scope.search.tomatoes = true

    /**
     * Basic Search
     * @public
     */
    $scope.basicSearch = function(){
      omdb.getByTitle($scope.search).then(function(response){
        $scope.movie = response.data 
      })
    }
  });
