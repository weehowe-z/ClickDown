chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file:"js/jquery.min.js"})
	chrome.tabs.executeScript(null, {file:"js/jszip.min.js"})
	chrome.tabs.executeScript(null, {file:"js/jszip-utils.min.js"})
	chrome.tabs.executeScript(null, {file:"js/FileSaver.min.js"})
	chrome.tabs.executeScript(null, {file:"js/download.js"})
});