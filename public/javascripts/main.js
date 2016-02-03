$(document).ready(function() {
    // The event listener for the file upload
    document.getElementById('txtFileUpload').addEventListener('change', upload, false);

    // Method that checks that the browser supports the HTML5 File API
    function browserSupportFileUpload() {
        var isCompatible = false;
        if (window.File && window.FileReader && window.FileList && window.Blob) {
        isCompatible = true;
        }
        return isCompatible;
    }

    // Method that reads and processes the selected file
    function upload(evt) {
    if (!browserSupportFileUpload()) {
        alert('The File APIs are not fully supported in this browser!');
        } else {
            var data = null;
            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function(event) {
                var csvData = event.target.result;
                // console.log(csvData)
                // data = $.csv.toArrays(csvData);
                // console.log(data)

                var inputArray = csvData.split('\n');
                console.log(inputArray);
                data=[];
                for (var i = 0; i < inputArray.length; i++) {
                    data.push(inputArray[i].split(';'))
                };
                console.log(data);
                if (data && data.length > 0) {
                  for (var i = 0; i < data.length; i++) {
                      var line = data[i]
                      if (data.length > 0) {
                        $('#output tbody').append('<tr><td>' + line[0] +'<td>' + line[1] + '<td>' + line[2] + '<td><img src="' + line[3] + '" width="300px" >' + '<td><img src="' + line[4] + '" width="300px" >')
                      };
                  };
                } else {
                    alert('No data to import!');
                }
            };
            reader.onerror = function() {
                alert('Unable to read ' + file.fileName);
            };
        }
    }
})