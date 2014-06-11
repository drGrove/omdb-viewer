'use strict';

angular.module('omdbApp')
  .factory('Storage', function ($log) {
    var storage = {
      data : {},
      storage_id: 'MS_',
      get: function( key )  {
        var data , result;
        try{
          data = localStorage.getItem(this.storage_id+key);
        } catch(e){}

        try {
          result = JSON.parse(data);
        } catch(e) {
          result = data;
        }

        return result;
      },
      set: function(key,data){
        if (typeof data == "object"){
          data = JSON.stringify(data);
        }

        try{
          localStorage.setItem(this.storage_id+key, data);
        } catch(e){
          $log.error('!! storageService',e);
        }
      },
      remove: function(key)  {
        try {
          var status = localStorage.removeItem(this.storage_id+key);
          $log.info('-- storageService',key);
          return status;
        } catch( e ){
          $log.error('!! storageService',e);
          return false;
        }
      }
    };

    return storage;
  });
