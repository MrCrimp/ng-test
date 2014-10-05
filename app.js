angular.module('mocks',[])
.constant('async', function($q, $window){
  debugger;
    console.log('mocks are set up');
    

  var mock = {
    query:function(fakeData){
      return {
        fetch: function(){
          var d = $q.defer();
          d.resolve(fakeData)
          return d.promise;
        }
      }
    }
  };
  
  return mock;
});

angular.module('app', [])
.value('data', {
    fetch:function(){
      return {
        then:function(){
          console.log('fetching..')    
        }
      }
    }
})
.controller('foo', function($scope, data){
  data.fetch(1).then(function(val){
    $scope.ok = val;
  });
});