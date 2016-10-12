define(['backbone', 'marionette', 'app/commons/views/AppLayoutView', 'bootstrap'], function(Backbone, Mn, AppLayoutView) {

  'use strict';

  var App = Marionette.Application.extend({
    initialize: function(options) {
      console.log('initialize');
    },
    onStart: function() {
      this.getRegion('app-container').show(new AppLayoutView());
      Backbone.history.start();
    }
  });

  var app = new App();

  app.addRegions({
    'app-container': 'body'
  });

  return app;
});
