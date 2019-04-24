document.addEventListener('contextmenu' , function(event){
    event.preventDefault();
})

//Google Maps//
function myMap() {
    var mapProp = {
        center:new google.maps.LatLng(-1.0476047,37.088323),
        zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }

    // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}