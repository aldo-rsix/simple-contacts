define(['marionette', 'templates/footer'], function(Mn, FooterTemplate) {
  'use strict';

  return Mn.LayoutView.extend({
    className: 'copyright',
    template: FooterTemplate,
    onBeforeShow: function() {
      console.log("FooterView::onBeforeShow");
    }
  });
});
