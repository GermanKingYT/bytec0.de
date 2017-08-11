if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}
function loaded() {
    setInterval(loop, 400);
}
var x = 0;
var titleText = [
  "b/", "b-", "by",
  "by/", "by-", "byt",
  "byt/", "byt-", "byte",
  "byte/", "byte-", "bytec",
  "bytec/", "bytec-", "bytec0",
  "bytec0/", "bytec0-", "bytec0d",
  "bytec0d/",  "bytec0d-", "bytec0de"];
function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}
