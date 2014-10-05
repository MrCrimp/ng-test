

describe('setup', function() {

  var mock, notify, ng = {};

  beforeEach(function() {
    mock = {
      alert: jasmine.createSpy()
    };
   
    ng = ngTest.prepare(['$timeout','async']);
    ngTest.begin();
  })

  it('should not alert', function() {
    expect(mock.alert).not.toHaveBeenCalled();
  });

  it('should have added $q to cotnext',function(){
    expect(ng.$q).not.toBeUndefined();
  });
  
  it('should have added $rootScope to context',function(){
    expect(ng.$rootScope).not.toBeUndefined();
  });

  it('should have added $controller to context',function(){
    expect(ng.$controller).not.toBeUndefined();
  });
  
  it('should have added $timeout to context',function(){
    expect(ng.$timeout).not.toBeUndefined();
  });
  
  it('should have added async to context',function(){
    expect(ng.async).not.toBeUndefined();
  });
})