'use strict'


const self = require('sdk/self');
const core = require('sdk/view/core');
const panels = require('sdk/panel');
const unload = require('sdk/system/unload');
const {ToggleButton} = require('sdk/ui/button/toggle');

const {Cc, Ci, Cu} = require('chrome');

const prefService = Cc["@mozilla.org/preferences-service;1"]
                    .getService(Ci.nsIPrefService);

const button = new ToggleButton({
  id: 'paranoid-panda',
  label: 'ParanoidPanda',
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  contentURL: self.data.url('./popover/index.html'),
  contentScriptFile: self.data.url('./popover/script.js')
});

const prefSettings = require('prefs');

const prefs = (function () {
  const p = require('sdk/preferences/service');
  return {
    get: function (name, defaultValue = false) {
      try {
        return p.get(name, defaultValue);
      } catch (e) {console.error(e);}
      return false;
    },
    set: function (name, val, defaultValue = false) {
      if (defaultValue) {
        val = this.get(name, defaultValue);
      }
      try {
        p.set(name, val);
      } catch (e) {console.error(e);}
    },
    reset: function (name) {
      p.reset(name);
    }
  };
})();

function observe(pref, callback) {
  const branch = prefService.getBranch(pref);
  const observer = {
    observe: function () {
      callback(pref);
    }
  };
  branch.addObserver('', observer, false);
  unload.when(function () {
    branch.removeObserver('', observer);
  });
  return true;
}

function setMode(mode) {
  const modeId = mode-1;
  for (let prefKey in prefSettings.prefs) {
    if (prefSettings.prefs[prefKey][modeId] === prefSettings.default) {
      prefs.set(prefKey, null, true);
    } else {
      prefs.set(prefKey, prefSettings.prefs[prefKey][modeId]);
    }
  }
}


function setup() {
  const panel = panels.Panel({
    contentURL: self.data.url('./popover/index.html'),
    contentScriptFile: self.data.url('./popover/script.js')
  });
  const level = prefs.get('paranoidpanda.level');
  panel.port.emit("levelchange", level || 1);

  core.getActiveView(panel).setAttribute('tooltip', 'aHTMLTooltip');
  panel.on("show", function() {
    panel.port.emit("show");
  });
  panel.on('hide', function () {
    button.state('window', {checked: false});
  });
  panel.port.on('safesetting', function (mode) {
    setMode(mode);
  });
  button.on('change', function (state) {
    if (state.checked) {
      panel.show({
        position: button
      });
    }
  });
};

setup();
