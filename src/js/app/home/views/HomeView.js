define(['underscore', 'marionette', 'templates/home'], function(_, Mn, HomeTemplate) {

    'use strict';

    return Mn.ItemView.extend({
        template: HomeTemplate
    });

});
