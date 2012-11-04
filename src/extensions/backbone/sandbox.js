// ## Sandbox Extension
// @fileOverview Extend the aura-sandbox (facade pattern)
// @todo This is a stupid place to include jquery ui
define(['aura_sandbox', 'perms', 'backbone', 'localstorage', 'jquery_ui'], function(sandbox, perms, Backbone, Store) {
  'use strict';

  return {
    create: function(core) {
      var auraSandbox = sandbox.create(core);
      auraSandbox.data.Store = Store;
      auraSandbox.mvc = {};
      auraSandbox.widgets = {};

      auraSandbox.mvc.View = function(view) {
        return Backbone.View.extend(view);
      };

      auraSandbox.mvc.Model = function(model) {
        return Backbone.Model.extend(model);
      };

      auraSandbox.mvc.Collection = function(collection) {
        return Backbone.Collection.extend(collection);
      };

      auraSandbox.mvc.Router = function(router) {
        return Backbone.Router.extend(router);
      };

      auraSandbox.widgets.stop = function(channel, el) {
        return sandbox.stop.apply(this, arguments);
      };

      auraSandbox.widgets.start = function(channel, options) {
        return sandbox.start.apply(this, arguments);
      };

      return auraSandbox;
    }
  };
});
