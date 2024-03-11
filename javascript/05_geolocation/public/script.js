

function findMe(){
    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#maplink");

    mapLink.href = "";
    mapLink.textContent = "";

    function success(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = "";

        mapLink.href ="https://www.openstreetmap.org/#map=16/"+latitude+"/"+longitude;
       // mapLink.href = "https://www.openstreetmap.org/relation/2472594#map=16/60.8886/26.7268";
        mapLink.textContent = "Latitude: " + latitude + ", Longitude: " + longitude;
    }
    function error(){
        status.textContent = "Cannot get your position.";
    }

    if(!navigator.geolocation){
        status.textContent = "No geolocation in browser.";
    }
    else{
        status.textContent = "Locating...";
    }

    navigator.geolocation.getCurrentPosition(success,error);
}


