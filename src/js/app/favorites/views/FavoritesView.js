define(['underscore', 'marionette', 'templates/favorites'], function(_, Mn, FavoritesTemplate) {

  'use strict';

  return Mn.ItemView.extend({
    template: FavoritesTemplate
  });

});
