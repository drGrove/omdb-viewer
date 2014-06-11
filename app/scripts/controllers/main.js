'use strict';

angular.module('omdbApp')
  .controller('MainCtrl', function ($scope, omdb, $modal) {
    $scope.search = {};
    $scope.search.tomatoes = true

    /**
     * Basic Search
     * @public
     */
    $scope.basicSearch = function(){
      omdb.getByTitle($scope.search).then(function(response){
        $modal.open(
        { templateUrl: '/views/modal.html'
          , controller: 'MovieCtrl'
          , size: 'lg'
          , resolve:
          { movieData: function(){
              return response.data
            }
          }
        })
      })
    }
  });
