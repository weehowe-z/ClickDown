// var baseURL = document.URL;

function download()
{
	var links = document.getElementsByTagName('a');
	var i;
	for (i = 0; i < links.length; ++i) {
	    var url = links[i].href;
	    var name = url.split("/").pop();
	    var ext = name.split(".").pop();//get last element
	    if (ext == "aspx") downloadURI(url, name);
	}
}


function downloadURI(uri, name) 
{
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
}
alert(document.URL);
// download();