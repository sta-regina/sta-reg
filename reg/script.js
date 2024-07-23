function iniciarMap(){
    var coord = {lat:22.0775684 ,lng: -102.2730338};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
      
    });
    var marker = new google.maps.Marker({
        position: {lat:21.967728,lng:-102.293577},
        map: map
        
      });
      var marker = new google.maps.Marker({
        position: {lat:22.148084 ,lng:-102.276986},
        map: map
        
      });
      
    
}