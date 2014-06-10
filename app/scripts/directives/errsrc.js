'use strict';

angular.module('omdbApp')
  .directive('errSrc', function () {
    return {
      link: function(scope, element, attrs){
        element.bind('error', function(){
          element.attr('src', attrs.errSrc)
        })
      }
    };
  });
