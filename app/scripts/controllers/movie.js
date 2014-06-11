'use strict';

angular.module('omdbApp')
  .controller('MovieCtrl', function ($scope, omdb, Storage, $routeParams) {
    $scope.movie = {};
    /**
     * Initializes controller
     * @private
     */
    var init = function(){
      var movie = Storage.get('lastMovie');
      if(movie == null || movie.imdbID != $routeParams.movieID){
        omdb.getById({i:$routeParams.movieID}).then(function(response){
          if(response.data.Response == "False"){
            $scope.noMovies == true;
          } else {
            $scope.movie = response.data
            Storage.set('lastMovie', $scope.movie)
            
          }
        })
      } else {
        $scope.movie = movie
      }
    }

    init();
  });
