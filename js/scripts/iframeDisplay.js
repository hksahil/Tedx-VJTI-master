var x = false;

function myFunction() {
  var x = true;
  var videoUrl = $('#video').attr("video-url");
  var videoUrlAuto = videoUrl + "?modestbranding=1&rel=0&controls=1&showinfo=0&html5=1&autoplay=1";
  if (x === true) {
    document.getElementById("myDIV").style.display = "block";
    document.getElementById("video").style.display = "none";
    $('.embed-responsive-item').attr('src', videoUrlAuto)
  }
}