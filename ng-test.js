! function(exports) {
  'use strict';

  var lastContext;

  var forController = function(args) {
    var self = this;

	// Todo: allow arguments for this stuff {'$window': { alert: function theMockFunction(){ return fakeStuff;}}}
    /*module(function($provide) {
      $provide.value('$window', {
        alert: function() {
          console.dir(arguments[0])
        }
      });
    });*/

    var setup = function($q, $timeout, $controller, $injector, $rootScope) {
      self.$q = $q;
	  self.$timeout = $timeout;
      self.$rootScope = $rootScope;
      self.$scope = self.$rootScope.$new();
      self.$controller = $controller;
      (args || []).forEach(function(svc) {
        if (!self[svc])
          self[svc] = $injector.get(svc);
      });
    };

    return setup;

  };

  var ngSetup = function(args) {
    //use argument to auto-load mocks ngSpec.prepare('mocks.'+name,[])
    //module('m');
    var ctx = lastContext = {};
    // calling with ctx makes us retain the context
    inject(forController.call(ctx, args));   
    return ctx;
  };

  exports.ngSpec = {
    prepare: ngSetup,
    begin: function() {
      lastContext.$rootScope.$apply()
    },
	async: function(){
	  lastContext.$timeout.flush();
	  lastContext.$rootScope.$apply();
	}
  };
}(window);