define(['marionette', 'templates/header'], function(Mn, HeaderTemplate) {
  'use strict';

  return Mn.LayoutView.extend({
    template: HeaderTemplate,
    regions: {
      menu: "#menu"
    },
    onBeforeShow: function() {
      console.log("HeaderView::onBeforeShow");
    }
  });
});
