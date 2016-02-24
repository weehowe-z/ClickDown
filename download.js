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
// var zip = new JSZip();
// zip.file("Hello.txt", "Hello World\n");
// var content = zip.generate({type:"blob"});
// // see FileSaver.js
// saveAs(content, "example.zip");


var zip = new JSZip();

JSZipUtils.getBinaryContent("http://www.cs.sjtu.edu.cn/~gao-xf/computability/Document/Syllabus-ComputabilityTheory.pdf", function (err, data) {
   if(err) {
      throw err; // or handle the error
   }
   zip.file("Syll.pdf", data, {binary:true});
   var content = zip.generate({type:"blob"});
   saveAs(content, "example333.zip");   //FileSaver.js
   alert("hahaha");
});




alert(document.URL);
// download();