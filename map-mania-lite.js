var gMap;

var favoritePlaces = [
    {"content":"Sun Valley, CA...Home!", "coordinates":{"lat":34.2279,"lng":-118.3813}, "iconImagePath":"one.png"},
    {"content":"Zapotlanejo, Mexico", "coordinates":{"lat":20.6202,"lng":103.0674}, "iconImagePath":"two.png"},
    {"content":"santa monica pier, CA", "coordinates":{"lat":34.0103,"lng":-118.4962}, "iconImagePath":"flag.png"},
    {"content":"Denver, CO", "coordinates":{"lat":39.7392,"lng":104.9903}, "iconImagePath":"flag.png"},
    {"content":"six flags magic mountain, CA", "coordinates":{"lat":34.4253,"lng":-118.5972}, "iconImagePath":"flag.png"},
    {"content":"Universal CityWalk, CA", "coordinates":{"lat":34.1361,"lng":-118.3537}, "iconImagePath":"flag.png"},
    {"content":"Chicago, IL", "coordinates":{"lat":41.8781,"lng":87.6298}, "iconImagePath":"flag.png"},
    {"content":"Lewis University, IL", "coordinates":{"lat":41.6048,"lng":88.0805}, "iconImagePath":"flag.png"},
    {"content":"Pacific Beach, CA", "coordinates":{"lat":32.8025,"lng":-117.2356}, "iconImagePath":"flag.png"},
    {"content":"Yosemite National Park, CA", "coordinates":{"lat":37.8651,"lng":119.5383}, "iconImagePath":"flag.png"}
];  

var currentPlaceIndex = 10;
var currentPlace = favoritePlaces[currentPlaceIndex];
var score = 0;

function initApplication() {
    alert("There are 10 of my favorite places. Zoom in close enought to earn 10 points. Good Luck!");
    console.log('Map Mania Lite - Starting!');
}

// initMap is a callback function that is initiated as part of the Google Maps API call at the bottom
// of the HTML file. 
function initMap() {
    // Create a new map and assign it to gMap
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3});
    
    /*
    // Add a marker for Canoe Bay, WI    
    var marker = new google.maps.Marker({position:{lat:45.3306,lng:-91.4918}, "map":gMap});
    
    // Add a second marking with a custom icon, an Info window, and a listener.
    var marker2 = new google.maps.Marker({position:{lat:36.3932,lng:25.4615}, map:gMap});
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
    
    var infoWindow = new google.maps.InfoWindow({"content":'Santorini, Greece'});
    marker2.addListener('click', function() {
        infoWindow.open(gMap, marker2);
    });
    */
    // Array of markers
    /*var marker = [
        {
            coords: {lat:34.0103,lng:-118.4962},
            iconImage: 'http://maps.google.com/mapfiles/kml/shapes/ranger_station.png',
            content:'<h1>santa monica pie, CA</h1>'
        },
        {
            coords: {lat:34.2279,lng:-118.3813},
            iconImage: 'http://maps.google.com/mapfiles/kml/shapes/ranger_station.png',
            content:'<h1>Sun Valley, CA</h1>'
        },
        {
            coords: {lat:37.8651,lng:-119.5383},
            iconImage: 'http://maps.google.com/mapfiles/kml/shapes/ranger_station.png',
            content:'<h1>Yosemite National Park, CA</h1>'
        
        }
    ]
    */

    

    var i;
    for(i = 0; i < favoritePlaces.length; i++){



    }
    function AddMarker(markerProperties){
        var marker = new google.maps.Marker({postion: markerProperties.coordinates, map:gMap});
        if(markerProperties.iconImagePath){
            marker.setIcon(markerProperties.iconImagePath);
        
        }

        //chech if there is custom icon images
    }

    

    function addMarker(props){
        var marker3 = new google.maps.Marker({
            position: props.coords,
            map:gMap,
            //icon:props.iconImage
        });
        // check for custom icon
        if(props.iconImage){
            // set icon image
            marker3.setIcon(props.iconImage);
        }

        // check content
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
                content:props.content
            });
        marker3.addListener('click', function() {
            infoWindow.open(gMap, marker3);

        })
    }
        

    }
    /*
    // loop through markers
    for(var i = 0;i < marker.length;i++){
        addMarker(marker[i]);
    }
    */


    // Note that several message boards suggested using 'idle' instead of 'bounds_changed' because 
    // 'bounds_changed' gets called over and over when the user drags the map.
    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });

    SetHint("Hint 1");
    setScore(score);



function updateGame() {
    console.log('function UpdateGame() google-maps-step-03!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

   /* var i;
    for(i = 0; i < currentPlace.length; i++){
        if (gMap.getBounds().contains(favoritePlaces.coords) && zoomLevel >= 8){
            inBounds = true;
        }
        console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);


    }
*/


    // Check if Canoe Bay, WI is in the currently displayed map

    if (gMap.getBounds().contains({lat:37.8651,lng:-119.5383}) && zoomLevel >= 8 ){
        inBounds = true;
        console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
        SetHint("go to location CA's national parks");
        if(zoomLevel >= 9){
            // Add a marker for Yosemite National Park, CA  
            var marker = new google.maps.Marker({position:{lat:37.8651,lng:-119.5383}, "map":gMap});
            setScore(score + 10);
            }

        }
    
    else if(gMap.getBounds().contains({lat:32.8025,lng:-117.2356}) && zoomLevel >= 8 ){
        inBounds = true;
        console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
        SetHint("go to location San Diego's beach");
        if(zoomLevel >= 9){
            var marker = new google.maps.Marker({position:{lat:32.8025,lng:-117.2356}, "map":gMap});
            setScore(score + 10);
            }
    }
    else if(gMap.getBounds().contains({lat:41.6048,lng:-88.0805}) && zoomLevel >= 8 ){
        inBounds = true;
        console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
        SetHint("go to Lewis University");
        if(zoomLevel >= 9){
            var marker = new google.maps.Marker({position:{lat:41.6048,lng:-88.0805}, "map":gMap});
            setScore(score + 10);
            }
    }
    else if(gMap.getBounds().contains({lat:41.8781,lng:-87.6298}) && zoomLevel >= 8 ){
        inBounds = true;
        console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
        SetHint("go to Chicago, IL");
        if(zoomLevel >= 9){ 
            var marker = new google.maps.Marker({position:{lat:41.8781,lng:-87.6298}, "map":gMap});
            setScore(score + 10);
            }
    }
    else if(gMap.getBounds().contains({lat:34.1361,lng:-118.3537}) && zoomLevel >= 8 ){
        inBounds = true;
        console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
        SetHint("go to Universal CityWalk, CA");
        if(zoomLevel >= 9){
            var marker = new google.maps.Marker({position:{lat:34.1361,lng:-118.3537}, "map":gMap});
            setScore(score + 10);
            }
    }
    else if(gMap.getBounds().contains({lat:34.4253,lng:-118.5972}) && zoomLevel >= 8 ){
        inBounds = true;
        console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
        SetHint("go to six flags magic mountain, CA");
        if(zoomLevel >= 9){
            var marker = new google.maps.Marker({position:{lat:34.4253,lng:-118.5972}, "map":gMap});
            setScore(score + 10);
            }
    }
    else if(gMap.getBounds().contains({lat:39.7392,lng:-104.9903}) && zoomLevel >= 8 ){
        inBounds = true;
        console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
        SetHint("go to location Denver, CO");
        if(zoomLevel >= 9){ 
            var marker = new google.maps.Marker({position:{lat:39.7392,lng:-104.9903}, "map":gMap});
            setScore(score + 10);
            }
    }
    else if(gMap.getBounds().contains({lat:34.0103,lng:-118.4962}) && zoomLevel >= 8 ){
        inBounds = true;
        console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
        SetHint("go to santa monica pier, CA");
        if(zoomLevel >= 9){
            var marker = new google.maps.Marker({position:{lat:34.0103,lng:-118.4962}, "map":gMap});
            setScore(score + 10);
            }
    }
    else if(gMap.getBounds().contains({lat:20.6202,lng:-103.0674}) && zoomLevel >= 8 ){
        inBounds = true;
        console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
        SetHint("go to Zapotlanejo, Mexico");
        if(zoomLevel >= 9){  
            var marker = new google.maps.Marker({position:{lat:20.6202,lng:-103.0674}, "map":gMap});
            setScore(score + 10);
            }
    }
    else if(gMap.getBounds().contains({lat:34.2279,lng:-118.3813}) && zoomLevel >= 8 ){
        inBounds = true;
        console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
        SetHint("go to Sun Valley, CA...Home!");
        if(zoomLevel >= 9){
            var marker = new google.maps.Marker({position:{lat:34.2279,lng:-118.3813}, "map":gMap});
            setScore(score + 10);
            }
    }
    else{
        console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
        SetHint("Try CA, IL, CO, Mexico");
        setScore("0");

    }
    



}

function SetHint(hint) {
    document.getElementById("hint-id").value = hint;  
}
function setScore(score) {
    document.getElementById("score-id").value = score; 
    if(setScore == 100) {
        alert("YOU WIN, CONGRATULATIONS!!!");
}
}
}
