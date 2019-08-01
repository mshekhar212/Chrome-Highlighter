function saveText(filename, text) {
    var tempElem = document.createElement('a');
    tempElem.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    tempElem.setAttribute('download', filename);
    tempElem.click();
 }

$(function(){
    $('#value').keyup(function(){
        $('#name').text('Hello ' + $('#value').val());
        console.log("Test message");
    });

    $('#submit').click(function(){
        var elem = window.getSelection();
        var myText = "Google chrome extension building in progress";
        var myStrText=JSON.stringify(myText);
        saveText("default_name.js", myStrText);
        $('#name').text('Submit button Pressed');
        console.log("Test message");
    });
});