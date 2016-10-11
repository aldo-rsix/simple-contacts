(function() {

  'use strict';

  require({
    // App entry point. The application "bootstrap"
    deps: ["../main"],
    baseUrl: 'js/libs',
    paths: {
      'jquery': 'jquery/dist/jquery',
      'bootstrap': 'bootstrap/dist/js/bootstrap.min',
      'underscore': 'underscore/underscore',
      'backbone': 'backbone/backbone',
      'mustache': 'mustache/mustache',
      'handlebars': 'handlebars/handlebars',
      'marionette': 'backbone.marionette/lib/backbone.marionette',
      'app': '../app',
      'templates': '../../templates'
    },
    shim: {
      jquery: {
        exports: '$'
      },
      bootstrap: {
        exports: 'bootstrap',
        deps: ['jquery']
      },
      underscore: {
        exports: '_'
      },
      backbone: {
        exports: 'backbone',
        deps: ['jquery', 'underscore']
      },
      marionette: {
        exports: 'marionette',
        deps: ['jquery', 'underscore', 'backbone']
      },
      mustache: {
        exports: 'mustache'
      },
      handlebars: {
        exports: 'handlebars',
        deps: ['jquery', 'underscore', 'backbone', 'marionette', 'mustache']
      }
    }
  });

}());
