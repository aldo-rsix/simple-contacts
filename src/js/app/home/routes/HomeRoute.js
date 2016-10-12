define(['marionette', 'app/home/views/HomeView', 'app/app'], function(Mn, HomeView, app) {

  'use strict';

  var homeController = {
    someMethod: function() {
      app.getAppView().showChildView('content', new HomeView());
    }
  };

  return Marionette.AppRouter.extend({
    controller: homeController,
    appRoutes: {
      "home": "someMethod"
    }
  });
});
