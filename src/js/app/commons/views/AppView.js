define([
    'marionette',
    'templates/app-layout',
    'app/commons/views/HeaderView',
    'app/commons/views/FooterView'
  ],
  function(Mn, AppTemplate, HeaderView, FooterView) {

    'use strict';

    return Mn.LayoutView.extend({
      tagName: 'div',
      attributes: {
        'id': 'app-container',
      },
      template: AppTemplate,
      regions: {
        header: 'header',
        content: '#content',
        footer: 'footer'
      },
      onBeforeShow: function() {
        this.showChildView('header', new HeaderView());
        this.showChildView('footer', new FooterView());
      }
    });
  });
