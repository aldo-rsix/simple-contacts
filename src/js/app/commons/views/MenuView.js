define(['marionette', 'templates/menu', 'app/commons/views/MenuItemView'], function(Mn, MenuTemplate, MenuItemView) {

  'use strict';

  return Marionette.CollectionView.extend({
    tagName: 'ul',
    className: 'nav navbar-nav',
    attributes: {
      'id': "menu-items",
    },
    childView: MenuItemView
  });
});
