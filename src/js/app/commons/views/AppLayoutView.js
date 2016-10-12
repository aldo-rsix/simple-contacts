define([
    'marionette',
    'templates/app-layout',
    'app/commons/views/HeaderView',
    'app/commons/views/FooterView'
  ],
  function(Mn, AppLayoutTemplate, HeaderView, FooterView) {

    'use strict';

    return Mn.LayoutView.extend({
      template: AppLayoutTemplate,
      regions: {
        header: "header",
        content: "#content",
        footer: "footer"
      },
      onBeforeShow: function() {
        this.showChildView('header', new HeaderView());
        this.showChildView('footer', new FooterView());
      }
    });
  });
