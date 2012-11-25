/* ===================================================
 * locallog.js v1.0.0
 * https://github.com/mingchen/locallog.js
 * ===================================================
 * Copyright 2012 Ming Chen.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/**
 * Module initializer
 */
var LocalLog;
if (!LocalLog) LocalLog = {};
if (!LocalLog.lastLineNo) {
	if (Modernizr.localstorage) {
		var lastLineNo = localStorage['LocalLog.lastLineNo'];
		if (lastLineNo && lastLineNo.length && lastLineNo != "NaN") {
			LocalLog.lastLineNo = parseInt(lastLineNo);
		} else {
			LocalLog.lastLineNo = 0;
		}
	}
}

/**
 * Write a debug log
 */
LocalLog.debug = function(msg) {
	return LocalLog._log(msg);
}

LocalLog._log = function(msg) {
	if (Modernizr.localstorage) {
		var now = (new Date()).getTime();
		var host = location.href.substring(location.href.indexOf('//') + 2);
		var path = host.substring(host.indexOf('/'));
		var logMessage = now + ' ' + path + ' ' + msg;
		LocalLog.lastLineNo += 1;
		localStorage[LocalLog.lastLineNo] = logMessage;
		localStorage['LocalLog.lastLineNo'] = String(LocalLog.lastLineNo);
	} else {
		console.log('LocalLog is not supported, msg: ' + msg);
	}
	return LocalLog;
}

/**
 * Get the log item for `id`
 */
LocalLog.getItem = function(id) {
	if (Modernizr.localstorage) {
		return localStorage[id];
	}
	
	return "";
}

/**
 * Clear all local logs
 */
LocalLog.clear = function() {
	if (Modernizr.localstorage) {
		for (var i=0; i<LocalLog.lastLineNo; ++i) {
			localStorage.removeItem(i);
		}
		
		LocalLog.lastLineNo = 0;
		localStorage['LocalLog.lastLineNo'] = 0;
	}
}

