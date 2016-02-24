// // var baseURL = document.URL;
jQuery(function ($) {
    "use strict";

    /**
     * Fetch the content, add it to the JSZip object
     * and use a jQuery deferred to hold the result.
     * @param {String} url the url of the content to fetch.
     * @param {String} filename the filename to use in the JSZip object.
     * @param {JSZip} zip the JSZip instance.
     * @return {jQuery.Deferred} the deferred containing the data.
     */

    function deferredAddZip(url, filename, zip) {
        var deferred = $.Deferred();
        JSZipUtils.getBinaryContent(url, function (err, data) {
            if(err) {
                deferred.reject(err);
            } else {
                zip.file(filename, data, {binary:true});
                deferred.resolve(data);
            }
        });
        return deferred;
    }

    function downloadZip(filename, zip) {
    	var blob = zip.generate({type:"blob"});
        saveAs(blob, filename);
    }

    alert("Begin fetching files, it may cost some time.");

    var zip = new JSZip();
    var deferreds = [];

    // find every checked item
	var links = document.getElementsByTagName('a');
	var i;
	for (i = 0; i < links.length; ++i) {
	    var url = links[i].href;
	   	var filename = url.split("/").pop();
	    var ext = filename.split(".").pop();//get last element
	    if (ext == "pdf") deferreds.push(deferredAddZip(url, filename, zip));
	}

    //until everthing is done trigger the blob download
    $.when.apply($, deferreds)
    .done(function () {
    	downloadZip("Courseware.zip",zip);
    	alert("Done!");
    })
    .fail(function (err) {
        alert(err);
    });

    //prevent excute deafult events
    return false;
});