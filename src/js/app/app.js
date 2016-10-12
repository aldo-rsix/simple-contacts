define([
    'backbone',
    'marionette',
    'app/commons/views/AppView',
    'bootstrap'
  ],
  function(Backbone, Mn, AppView) {

    'use strict';

    var App = Marionette.Application.extend({
      onStart: function() {
        this.getRegion('app-container').show(new AppView());
        Backbone.history.start();
      }
    });

    var app = new App();

    app.addRegions({
      'app-container': 'body'
    });

    return app;
  });
