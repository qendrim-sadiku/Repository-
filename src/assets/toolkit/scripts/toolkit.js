/**
 * Toolkit JavaScript
 */

'use strict';

// Add ES2015 polyfills
require('babel-polyfill');

// For Node Modules
// Because no path was specified, Module will be included from "node_modules"
//var $ = require('jquery');

// For Bower Components
// Because Bower does not force a module structure, you have use a more specific path.

// Loading foundation from node
var foundation = require('../../vendor/foundation-sites/js/foundation.core.js');
var foundationMediaQuery = require('../../vendor/foundation-sites/js/foundation.util.mediaQuery.js');
var foundationMediaQuery = require('../../vendor/foundation-sites/js/foundation.util.timerAndImageLoader.js');
var foundationKeyboard = require('../../vendor/foundation-sites/js/foundation.util.keyboard.js');
var foundationBox = require('../../vendor/foundation-sites/js/foundation.util.box.js');
var foundationBox = require('../../vendor/foundation-sites/js/foundation.util.nest.js');
var foundationMotion = require('../../vendor/foundation-sites/js/foundation.util.motion.js');
var foundationTriggers = require('../../vendor/foundation-sites/js/foundation.util.triggers.js');
var foundationDropdown = require('../../vendor/foundation-sites/js/foundation.dropdown.js');
var foundationAccordion = require('../../vendor/foundation-sites/js/foundation.accordion.js');
var foundationReveal = require('../../vendor/foundation-sites/js/foundation.reveal.js');
var foundationAbide = require('../../vendor/foundation-sites/js/foundation.abide.js');
var foundationTooltip = require('../../vendor/foundation-sites/js/foundation.tooltip.js');
var foundationDropdownMenu = require('../../vendor/foundation-sites/js/foundation.dropdownMenu.js');
var foundationToggler = require('../../vendor/foundation-sites/js/foundation.toggler.js');
var foundationTabs = require('../../vendor/foundation-sites/js/foundation.tabs.js');


//require('smoothstate/jquery.smoothState.min.js');
// var smoothState = require('./jquery.smoothState.min.js');
var flexslider = require('../../vendor/flexslider/jquery.flexslider-min.js');

var flexibility = require('../../vendor/flexibility/flexibility.js');

// console.log($);
// $('h1').fadeOut(2000);





var calendar = require('../../vendor/jquery-ui/ui/widgets/datepicker.js');
var calendar = require('../../vendor/jquery-ui/ui/i18n/datepicker-sq.js');

var upload = require('../../vendor/ssi-uploader/dist/ssi-uploader/js/ssi-uploader.min.js');

// Use for custom Pattern Libary Modules
// var fooModule = require('./foo-module');
// var bar = fooModule.foo();

// require('./modules/map');
require('./modules/upload');
require('./modules/add-numbers-for-input');
require('./modules/acordion');
require('./modules/dropdown');
require('./modules/tabs');
require('./modules/tab-button');
require('./modules/gallery');
require('./modules/add-button');
require('./modules/file-input');
require('./modules/select-tab');
require('./modules/jquery.nice-select.min');
require('./modules/flex');
require('./modules/select');
require('./modules/slider');
require('./modules/add-class');
require('./modules/tabs');
require('./modules/calendar');

// Finally, you can drop test JavaScript here...
$(document).ready(function () {
  //console.log('Script kiddies of the world unite.')
  $(document).foundation();

});

// Script for removing text in the text inputs
$(document).ready(function () {
     $(".numberinput").forceNumeric();
 });

