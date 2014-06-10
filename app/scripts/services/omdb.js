'use strict';

angular.module('omdbApp')
  .factory('omdb', function ($http) {
    var omdb = {}
    var endpoint = "http://omdbapi.com/"

    /**
     * Public Function
     */

    /**
     * Returns OMDB item by title
     * @public
     * @params {String} title
     * @returns {Ojbect} omdbResponsePromise
     */
    omdb.getByTitle = function(title){
      return get('?' + serialize(title))
    }


    /**
     * Makes a get request to the endpoint
     * @private
     * @params {Object} query
     * @returns {Object} $httpRequestPromise
     */
    var get = function(query){
      return $http.get
      ( endpoint + query
      )
    }

    /**
     * Serializes objects to query strings
     * @private
     * @params {Object} query
     * @returns {String} queryString
     */
    var serialize = function(obj) {
      var str = [];
      for(var p in obj){
       if (obj.hasOwnProperty(p)) {
         str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]).replace("%20","+"));
       }
      }
      return str.join("&");
    } 

    return omdb;
  });
