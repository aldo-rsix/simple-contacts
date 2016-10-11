define(['backbone', 'marionette', 'app/home/views/HomeView', 'bootstrap'], function(Backbone, Mn, HomeView) {
    'use strict';

    var App = Marionette.Application.extend({
        initialize: function(options) {
            console.log('initialize');
        },
        onStart: function() {
            this.getRegion('content').show(new HomeView());
            Backbone.history.start();
        }
    });

    var app = new App();

    app.addRegions({
        content: 'body'
    });

    return app;
});
