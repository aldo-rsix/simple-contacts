define(['marionette', 'app/home/views/HomeView', 'app/app'], function(Mn, HomeView, app) {

  'use strict';

  var homeController = {
    someMethod: function(arg1, arg2) {
      app.getAppView().showChildView('content', new HomeView());
    }
  };

  return Marionette.AppRouter.extend({
    controller: homeController,
    appRoutes: {
      ":module(/*subroute)": "someMethod"
    }
  });
});
