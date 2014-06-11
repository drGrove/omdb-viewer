'use strict';

angular.module('omdbApp')
  .controller('MovieSearchCtrl', function ($scope, Storage, $routeParams, omdb) {
    /**
     * Initializes controller
     * @private
     */
    var init = function(){
      var movies = Storage.get('lastSearch');
      if(movies == null){
        omdb.search($routeParams.movieTitle).then(function(response){
          if(response.data.Response == "False"){
            $scope.noMovies == true;
          } else {
            $scope.movieList = response.data.Search
            Storage.set('lastSearch', $scope.movieList)
            
          }
        })
      } else {
        $scope.movieList = movies;
      }
    }

    init();
  });
