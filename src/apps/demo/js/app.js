if (typeof Object.create !== 'function') {
  Object.create = function(o) {
    function F() {}
    F.prototype = o;

    return new F();
  };
}

// Starts main modules
// Publishing from core because that's the way that Nicholas did it...
define(['aura_core', 'backboneSandbox'], function(core, backboneSandbox) {
  'use strict';

  core.getSandbox = function (sandbox) {
    return backboneSandbox.extend(sandbox);
  };

  core.start([{
    channel: 'todos',
    options: {
      element: '#todoapp'
    }
  }, {
    channel: 'todos',
    options: {
      element: '#todoapp2'
    }
  }, {
    channel: 'calendar',
    options: {
      element: '#calendarapp'
    }
  }, {
    channel: 'controls',
    options: {
      element: '#controlsapp'
    }
  }, {
    channel: 'boilerplate',
    options: {
      element: '#boilerplateapp1'
    }
  }, {
    channel: 'boilerplate',
    options: {
      element: '#boilerplateapp2'
    }
  }
  ]);
});
