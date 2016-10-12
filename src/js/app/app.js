define([
    'backbone',
    'marionette',
    'app/home/module',
    'app/favorites/module',
    'app/commons/views/AppView',
    'bootstrap'
  ],
  function(Backbone, Mn, HomeModule, FavoritesModule, AppView) {

    'use strict';

    var App = Marionette.Application.extend({
      onStart: function() {
        var appView = new AppView();
        this.getRegion('app-container').show(appView);

        this.getAppView = function() {
          return appView;
        }

        Backbone.history.start();
      }
    });

    var app = new App();

    app.addRegions({
      'app-container': 'body'
    });

    return app;
  });
