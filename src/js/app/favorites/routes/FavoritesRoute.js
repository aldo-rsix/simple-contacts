define(['marionette', 'app/favorites/views/FavoritesView', 'app/app'], function(Mn, FavoritesView, app) {

  'use strict';

  var favController = {
    someMethod: function() {
      app.getAppView().showChildView('content', new FavoritesView());
    }
  };

  return Marionette.AppRouter.extend({
    controller: favController,
    appRoutes: {
      "fav": "someMethod"
    }
  });
});
