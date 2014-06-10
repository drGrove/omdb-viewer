'use strict';

describe('Service: omdb', function () {

  // load the service's module
  beforeEach(module('omdbApp'));

  // instantiate service
  var omdb;
  var search = {}
  beforeEach(inject(function (_omdb_) {
    omdb = _omdb_;
    search.t = 'True Grit';
  }));

  it('should do something', function () {
    expect(!!omdb).toBe(true);
  });

  it('should give a title for `True Grit`', function(){
    omdb.getByTitle(search).then(function(response){
      expect(response.data.Title).toBe('True Grit');
    })
  })

  it("should response false when no title is provided", function(){
    omdb.getByTitle(search).then(function(response){
      expect(response.data.Response).toBe("False");
    })
  })
});
