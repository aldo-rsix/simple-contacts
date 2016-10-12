define(['marionette', 'templates/menu-item'], function(Mn, MenuItemTemplate) {

  'use strict';

  return Mn.ItemView.extend({
    tagName: 'li',
    template: MenuItemTemplate
  });

});
