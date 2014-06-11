'use strict';

angular.module('omdbApp')
.controller('NavCtrl', function ($scope, omdb, $location, Storage) {
    $scope.search = {};

    /**
     * Basic Search
     * @public
     */
    $scope.basicSearch = function(){
      omdb.search($scope.search).then(function(response){
        if(response.data.Reponse == "False"){
          Storage.set('lastSearch', null)
          alert('The search query "' + $scope.search.s + '" gave no results');
        } else {

          var searchQuery = $scope.search.s.split(' ').join("+");
          Storage.set('lastSearch', response.data.Search)
          $location.path('/s/' + searchQuery)
        }
      })
    }
  });
