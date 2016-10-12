define(['marionette', 'templates/footer'], function(Mn, FooterTemplate) {
  'use strict';

  return Mn.LayoutView.extend({
    template: FooterTemplate,
    onBeforeShow: function() {
      console.log("FooterView::onBeforeShow");
    }
  });
});
