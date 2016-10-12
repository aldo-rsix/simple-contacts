define([
    'marionette',
    'templates/header',
    'app/commons/views/MenuView',
    'app/commons/model/MenuItem'
  ],
  function(Mn, HeaderTemplate, MenuView, MenuItem) {
    'use strict';

    return Mn.LayoutView.extend({
      template: HeaderTemplate,
      regions: {
        menu: "#menu"
      },
      onBeforeShow: function() {
        // TODO get from service
        var homeMenuItem = new MenuItem({
          name: 'Home',
          link: '#home'
        });

        var favMenuItem = new MenuItem({
          name: 'Favorities',
          link: '#fav'
        });

        var allMenuItem = new MenuItem({
          name: 'All',
          link: '#all'
        });

        var items = new Backbone.Collection();

        items.add(homeMenuItem);
        items.add(favMenuItem);
        items.add(allMenuItem);

        var menuView = new MenuView({
          collection: items
        });

        this.showChildView('menu', menuView);
      }
    });
  })
