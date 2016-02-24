chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file:"jquery.min.js"})
	chrome.tabs.executeScript(null, {file:"jszip.min.js"})
	chrome.tabs.executeScript(null, {file:"jszip-utils.min.js"})
	chrome.tabs.executeScript(null, {file:"FileSaver.min.js"})
	chrome.tabs.executeScript(null, {file:"download.js"})
});