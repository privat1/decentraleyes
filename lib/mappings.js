/**
 * Mappings
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2014-05-30
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';

/**
 * Imports
 */

var resources = require('./resources');

/**
 * Mappings
 */

var mappings = {

	// Google Hosted Libraries
	'ajax.googleapis.com': {
		'/ajax/libs/': {
			'angularjs/{version}/angular.': resources.angular,
			'dojo/{version}/dojo/dojo': resources.dojo,
			'ext-core/{version}/ext-core': resources.extCore,
			'jquery/{version}/jquery': resources.jQuery,
			'mootools/{version}/mootools-yui-compressed': resources.mootools,
			'prototype/{version}/prototype': resources.prototypeJS,
			'scriptaculous/{version}/scriptaculous': resources.scriptaculous,
			'swfobject/{version}/swfobject': resources.swfobject,
			'webfont/{version}/webfont': resources.webfont,
			'yui/{version}/build/yahoo-dom-event/yahoo-dom-event': resources.yahooDOMEvent,
			'yui/{version}/build/connection/connection': resources.yahooConnection,

			// Common Shorthand Notations
			'dojo/1/dojo/dojo': {
				path: 'resources/dojo/1.6.1/dojo/dojo.js.dec',
				type: 'application/javascript'
			},
			'jquery/1/jquery': {
				path: 'resources/jquery/1.11.1/jquery.min.js.dec',
				type: 'application/javascript'
			},
			'mootools/1/mootools-yui-compressed': {
				path: 'resources/mootools/1.1.2/mootools-yui-compressed.js.dec',
				type: 'application/javascript'
			},
			'prototype/1/prototype': {
				path: 'resources/prototype/1.7.1.0/prototype.js.dec',
				type: 'application/javascript'
			},
			'scriptaculous/1/scriptaculous': {
				path: 'resources/scriptaculous/1.9.0/scriptaculous.js.dec',
				type: 'application/javascript'
			},
			'swfobject/2/swfobject': {
				path: 'resources/swfobject/2.2/swfobject.js.dec',
				type: 'application/javascript'
			},
			'webfont/1/webfont': {
				path: 'resources/webfont/1.5.18/webfont.js.dec',
				type: 'application/javascript'
			}
		}
	},
	// Microsoft Ajax CDN
	'ajax.aspnetcdn.com': {
		'/ajax/': {
			'jQuery/jquery-{version}': resources.jQuery,
			'modernizr/modernizr-{version}': resources.modernizr
		}
	},
	// Microsoft Ajax CDN [Deprecated]
	'ajax.microsoft.com': {
		'/ajax/': {
			'jQuery/jquery-{version}': resources.jQuery,
			'modernizr/modernizr-{version}': resources.modernizr
		}
	},
	// CDNJS (Cloudflare)
	'cdnjs.cloudflare.com': {
		'/ajax/libs/': {
			'angular.js/{version}/angular': resources.angular,
			'backbone.js/{version}/backbone': resources.backbone,
			'dojo/{version}/dojo': resources.dojo,
			'ember.js/{version}/ember': resources.ember,
			'ext-core/{version}/ext-core': resources.extCore,
			'jquery/{version}/jquery': resources.jQuery,
			'modernizr/{version}/modernizr': resources.modernizr,
			'mootools/{version}/mootools-core': resources.mootools,
			'prototype/{version}/prototype': resources.prototypeJS,
			'scriptaculous/{version}/scriptaculous': resources.scriptaculous,
			'swfobject/{version}/swfobject': resources.swfobject,
			'underscore.js/{version}/underscore': resources.underscore,
			'webfont/{version}/webfont': resources.webfont
		}
	},
	// jQuery CDN (MaxCDN)
	'code.jquery.com': {
		'/': {
			'jquery-{version}': resources.jQuery,

			// Common Shorthand Notations
			'jquery-latest': {
				path: 'resources/jquery/1.11.1/jquery.min.js.dec',
				type: 'application/javascript'
			},
			'jquery': {
				path: 'resources/jquery/1.11.1/jquery.min.js.dec',
				type: 'application/javascript'
			}
		}
	},
	// jsDelivr (MaxCDN)
	'cdn.jsdelivr.net': {
		'/': {
			'angularjs/{version}/angular.': resources.angular,
			'backbonejs/{version}/backbone': resources.backbone,
			'dojo/{version}/dojo': resources.dojo,
			'emberjs/{version}/ember': resources.ember,
			'jquery/{version}/jquery': resources.jQuery,
			'mootools/{version}/mootools': resources.mootools,
			'prototypejs/{version}/prototype': resources.prototypeJS,
			'scriptaculous/{version}/scriptaculous': resources.scriptaculous,
			'swfobject/{version}/swfobject': resources.swfobject,
			'underscorejs/{version}/underscore': resources.underscore,
			'webfontloader/{version}/webfont': resources.webfont
		}
	},
	// Yandex CDN
	'yandex.st': {
		'/': {
			'angularjs/{version}/angular.': resources.angular,
			'backbone/{version}/backbone': resources.backbone,
			'dojo/{version}/dojo/dojo': resources.dojo,
			'ext-core/{version}/ext-core': resources.extCore,
			'jquery/{version}/jquery': resources.jQuery,
			'modernizr/{version}/modernizr': resources.modernizr,
			'mootools/{version}/mootools': resources.mootools,
			'prototype/{version}/prototype': resources.prototypeJS,
			'scriptaculous/{version}/': resources.scriptaculous,
			'underscore/{version}/underscore': resources.underscore,
			'swfobject/{version}/swfobject': resources.swfobject
		}
	},
	// Baidu CDN
	'libs.baidu.com': {
		'/': {
			'backbone/{version}/backbone': resources.backbone,
			'dojo/{version}/dojo': resources.dojo,
			'ext-core/{version}/ext-core': resources.extCore,
			'jquery/{version}/jquery': resources.jQuery,
			'mootools/{version}/mootools-yui-compressed': resources.mootools,
			'prototype/{version}/prototype': resources.prototypeJS,
			'scriptaculous/{version}/scriptaculous': resources.scriptaculous,
			'swfobject/{version}/swfobject': resources.swfobject,
			'underscore/{version}/underscore': resources.underscore,
			'webfont/{version}/webfont': resources.webfont
		}
	},
	// Sina Public Resources
	'lib.sinaapp.com': {
		'/js/': {
			'angular.js/angular-{version}': resources.angular,
			'backbone/{version}/backbone': resources.backbone,
			'dojo/{version}/dojo': resources.dojo,
			'ext-core/{version}/ext-core': resources.extCore,
			'jquery/{version}/jquery': resources.jQuery,
			'mootools/{version}/mootools': resources.mootools,
			'prototype/{version}/prototype': resources.prototypeJS,
			'scriptaculous/{version}/scriptaculous': resources.scriptaculous,
			'swfobject/{version}/swfobject': resources.swfobject,
			'underscore/{version}/underscore': resources.underscore,
			'webfont/{version}/webfont': resources.webfont
		}
	},
	// UpYun Library
	'upcdn.b0.upaiyun.com': {
		'/libs/': {
			'dojo/dojo-{version}': resources.dojo,
			'emberjs/emberjs-{version}': resources.ember,
			'jquery/jquery-{version}': resources.jQuery,
			'modernizr/modernizr-{version}': resources.modernizr,
			'mootoolscore/mootools.core-{version}': resources.mootools
		}
	}
};

/**
 * Exports
 */

module.exports = mappings;