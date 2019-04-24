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