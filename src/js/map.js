var map;
var directionsManager;
var current;
var clusterLayer, infobox;
var ev_chargers;
var lat, lon;
var circle = [];
var circle_length = .7;
var circle_color = 'rgba(1,150,200,0.07)';
var base64Image = "data:image/png;base64,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";



function form_select() {

  if (document.getElementById("form_sel").value == "transit") {
    document.getElementById("ev_select").style.display = "none";
    document.getElementById("ev_select1").style.display = "none";

  }
  else {
    document.getElementById("ev_select").style.display = "block";
    document.getElementById("ev_select1").style.display = "block";
  }
}





function validate() {
  if (document.getElementById('switch').checked) {
    document.getElementById("direc_emmis").style.display = "none";
    document.getElementById("fair_price").style.display = "none";
    document.getElementById("ev_chargers").style.display = "block";
  } else {
    document.getElementById("direc_emmis").style.display = "block";
    document.getElementById("fair_price").style.display = "block";
    document.getElementById("ev_chargers").style.display = "none";
    map.layers.remove(clusterLayer);
    for (let i = 0; i < circle.length; i++) {
      map.entities.remove(circle[i]);
    }
    document.getElementById("switch1").checked = false;
  }
}

function charger() {
  if (document.getElementById('switch1').checked) {
    map.layers.insert(clusterLayer);

    for (let i = 0; i < circle.length; i++) {
      map.entities.push(circle[i]);
    }
  } else {
    map.layers.remove(clusterLayer);
    for (let i = 0; i < circle.length; i++) {
      map.entities.remove(circle[i]);
    }
  }
}







var sampleStyle = {
  elements: {
    park: { fillColor: "#a9de83" },
    controlledAccessHighway: {
      fillColor: "#9fb6bd",
      strokeColor: "#D3B300",
      labelColor: "#444444",
      labelOutlineColor: "#60ffffff",
    },
    highway: {
      fillColor: "#c1d1d6",
      strokeColor: "#fde293",
      labelColor: "#444444",
      labelOutlineColor: "#60ffffff",
    },
    water: { fillColor: "#a6cbe3" },
    medicalBuilding: { fillColor: "#fceced" },
    majorRoad: { fillColor: "#fde293" },
    education: { fillColor: "#f0e8f8" },
    arterialRoad: { fillColor: "#ffffff" },
    structure: { fillColor: "#faf8ed" },
    buildinglobal: { fillColor: "#dde2e3" },
    forest: { fillColor: "#b3debf" },
    vegetation: { fillColor: "#b3debf" },
    reserve: { fillColor: "#b3debf" },
    street: { fillColor: "#ffffff", strokeColor: "#e6e3df" },
    roadShield: { fillColor: "#ffffff" },
    medical: { fillColor: "#ffddee" },
    educationBuildinglobal: { fillColor: "#f6f0f1" },
    golfCourse: { fillColor: "#b3debf" },
  },
  settings: { landColor: "#e8eaed" },
  version: "1.0",
  extensions: {},
};

function GetMap() {
  map = new Microsoft.Maps.Map("#myMap", {
    showDashboard: false,
    customMapStyle: sampleStyle,

  });


  navigator.geolocation.getCurrentPosition(function (position) {
    current = position.coords.latitude + "," + position.coords.longitude;
    var center = map.getCenter();
    lat = center.latitude;
    lon = center.longitude;

    console.log(lat, lon);
    link = "https://api.tomtom.com/search/2/categorySearch/EV%20chargers.json?limit=1000&lat=" + lat + "&lon=" + lon + "&categorySet=7309&key=vy4XZo3nOafLfepP4LVXYw6GbPkyjQL8";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", link);
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {

        ev_chargers = xhr.response;
        console.log(ev_chargers);

        infobox = new Microsoft.Maps.Infobox(map.getCenter(), { visible: false });
        infobox.setMap(map);

        Microsoft.Maps.loadModule("Microsoft.Maps.Clustering", function () {

          clusterLayer = new Microsoft.Maps.ClusterLayer(createCustomPushpins(100), {
            clusteredPinCallback: createCustomClusterPushpins,
            callback: createPushpinList
          });


          Microsoft.Maps.Events.addHandler(clusterLayer, 'click', pushpinClicked);
        });

        Microsoft.Maps.loadModule('Microsoft.Maps.SpatialMath', function () {
          var pos = map.getCenter();

          pos.latitude = ev_chargers.results[0].position.lat;
          pos.longitude = ev_chargers.results[0].position.lon;



          for (let i = 0; i < ev_chargers.results.length; i++) {

            pos.latitude = ev_chargers.results[i].position.lat;
            pos.longitude = ev_chargers.results[i].position.lon;



            circle[i] = (createCircle(pos, circle_length, circle_color));

          }





        });


      } else {
        console.log(`Error: ${xhr.status}`);
      }
    };


  });








  //Load the directions module.
  Microsoft.Maps.loadModule("Microsoft.Maps.Directions", function () {
    //Create an instance of the directions manager.
    directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

    //Specify where to display the route instructions.
    directionsManager.setRenderOptions({
      itineraryContainer: "#directionsItinerary"
    });



    //Specify the where to display the input panel
    directionsManager.showInputPanel("directionsPanel");
    Microsoft.Maps.Events.addHandler(
      directionsManager,
      "directionsUpdated",
      directionsUpdated
    );

    Microsoft.Maps.loadModule(['Microsoft.Maps.SpatialMath', 'Microsoft.Maps.Contour'], function () {
      var center = map.getCenter();
      var circle = [];
      center.latitude = 38.5;
      circle[0] = createCircle(center, 100, 'rgba(0,150,200,0.5)');
      center.latitude = 37.1;
      circle[1] = createCircle(center, 5, 'rgba(0,150,200,.7)');

      var layer = new Microsoft.Maps.ContourLayer(circle, {
        colorCallback: function (val) {
          return val;
        },
        polygonOptions: {
          strokeThickness: 0
        }
      });
      map.layers.insert(layer);
    });


  });



  // CLUSTERING




  // CIRCLES


}





function directionsUpdated(e) {

  var start = document.querySelector('[title="From"]').value;
  var to = document.querySelector('[title="To"]').value;


  if (start == "My location") {
    start = current;

  }
  if (to == "My location") {
    to = current;

  }
  console.log(start + to);

  var req = "http://dev.virtualearth.net/REST/V1/Routes/Transit?wp.0=" + encodeURIComponent(start) + "&wp.1=" + encodeURIComponent(to) + "&output=json&key=" + "Air9YbvoUA261gpBQWR8mNCXLKboJFf9-h0ICic9y_0doZEzKkU5hLZ-PMtP0JWb";
  CallRestService(req, GeocodeCallback);


  //Get the current route index.
  var routeIdx = directionsManager.getRequestOptions().routeIndex;
  var routeMode = directionsManager.getRequestOptions().routeMode;

  //Get the distance of the route, rounded to 2 decimal places.
  var distance = Math.round(e.routeSummary[routeIdx].distance * 100) / 100;

  //Get the distance units used to calculate the route.
  var units = directionsManager.getRequestOptions().distanceUnit;
  var distanceUnits = "";

  if (units == Microsoft.Maps.Directions.DistanceUnit.km) {
    distanceUnits = "km";
  } else {
    //Must be in miles
    distanceUnits = "miles";
  }
  carbonCalculate(routeMode, distance);
  //Time is in seconds, convert to minutes and round off.
  var time = Math.round(e.routeSummary[routeIdx].timeWithTraffic / 60);
  var carbon_element = document.getElementById("carbon");
  carbon_element.innerHTML = carbonCalculate(1, distance) + " kg of CO2 for fuel driven car and ";

  var price_element = document.getElementById("fp1");


  if (distance > 55) {
    price_element.innerHTML = "distance to large";
  }
  else {
    price_element.innerHTML = "about ₹" + calculatefpev(distance) + " price for a ev taxi with 0 carbon emmisions from our partner.";
  }


}

function GeocodeCallback(response) {
  console.log(response);
  var carb = 0.0;
  var price = 0.0;
  var items = response.resourceSets[0].resources[0].routeLegs[0].itineraryItems;
  for (let i = 0; i < items.length; i++) {

    if (items[i].iconType == "Walk") {

      carb += carbonCalculate(3, items[i].travelDistance);
    }
    else if (items[i].iconType == "Train") {
      carb += carbonCalculate(2, items[i].travelDistance);
      if (items[i].travelDistance <= 2) {
        price += 10;
      }
      else if (items[i].travelDistance <= 5) {
        price += 20;
      }
      else if (items[i].travelDistance <= 12) {
        price += 30;
      }
      else if (items[i].travelDistance <= 21) {
        price += 40;
      }
      else if (items[i].travelDistance <= 32) {
        price += 50;
      }
      else if (items[i].travelDistance > 32) {
        price += 60;
      }
      console.log(price + " metro");
    }
    else if (items[i].iconType == "Bus") {
      carb += carbonCalculate(4, items[i].travelDistance);

      if (items[i].travelDistance <= 4) {
        price += 10;
      }
      else if (items[i].travelDistance <= 8) {
        price += 15;
      }
      else if (items[i].travelDistance <= 12) {
        price += 20;
      }
      else if (items[i].travelDistance > 12) {
        price += 25;
      }
      console.log(price + " bus");
    }

  }

  console.log(response);
  var carbon_element = document.getElementById("carbon");
  carbon_element.innerHTML += Math.round(carb * 100) / 100 + " kg of CO2 for public Transit. ";

  var price_element = document.getElementById("fp");
  price_element.innerHTML = "about ₹" + Math.round(price * 100) / 100 + " for public transit route."

}

function carbonCalculate(e, d) {

  var multi;
  switch (e) {
    case 1:
      multi = 121 * d;
      break;
    case 2:
      multi = 7.837 * d;
      break;
    case 3:
      multi = 0 * d;
      break;
    case 4:
      multi = 12 * d;
      break;
  }

  return Math.round(multi / 10) / 100;
}

function calculatefpev(d) {
  if (d <= 5) {
    return 149
  }
  else if (d <= 10) {
    return 199
  }
  else if (d <= 15) {
    return 259
  }
  else if (d <= 20) {
    return 349
  }
  else if (d <= 25) {
    return 449
  }
  else if (d <= 30) {
    return 549
  }
  else if (d <= 35) {
    return 599
  }
  else if (d <= 40) {
    return 699
  }
  else if (d <= 45) {
    return 749
  }
  else if (d <= 50) {
    return 799
  }

}


function createCircle(center, radius, color) {
  //Calculate the locations for a regular polygon that has 36 locations which will rssult in an approximate circle.
  var locs = Microsoft.Maps.SpatialMath.getRegularPolygon(center, radius, 36, Microsoft.Maps.SpatialMath.DistanceUnits.Miles);

  return new Microsoft.Maps.Polygon(locs, { fillColor: color, strokeThickness: 0 });

}

function createCustomPushpins(size) {
  //Generate 100 random pushpins within the map bounds.

  console.log(ev_chargers.results[0].position.lat);
  var pins = Microsoft.Maps.TestDataGenerator.getPushpins(ev_chargers.results.length, map.getBounds());

  var pos = map.getCenter();


  for (let i = 0; i < ev_chargers.results.length; i++) {

    pos.latitude = ev_chargers.results[i].position.lat;
    pos.longitude = ev_chargers.results[i].position.lon;

    pins[i] = new Microsoft.Maps.Pushpin(pos, {

      title: ev_chargers.results[i].poi.name,
      subTitle: '',
      icon: base64Image,
    });
    pins[i].metadata = {
      title: ev_chargers.results[i].poi.name,
      description: ev_chargers.results[i].address.streetName

    };
  }





  return pins;
}

function createCustomClusterPushpins(cluster) {
  //Create a title for the cluster.
  cluster.setOptions({
    title: 'Cluster of ' + cluster.containedPushpins.length + ' EV charging stations',
    icon: base64Image,
    textOffset: new Microsoft.Maps.Point(-2, 12),

  });
}

function pushpinClicked(e) {

  if (e.target.metadata) {
    //Set the infobox options with the metadata of the pushpin.
    infobox.setOptions({
      location: e.target.getLocation(),
      title: e.target.metadata.title,
      description: e.target.metadata.description,
      visible: true
    });
  }
}

function createPushpinList() {
  //Create a list of displayed pushpins each time clustering layer updates.

  if (clusterLayer != null) {
    infobox.setOptions({ visible: false });

    //Get all pushpins that are currently displayed.
    var data = clusterLayer.getDisplayedPushpins();
    var output = [];


    for (var i = 0; i < data.length; i++) {
      output.push("<a href='javascript:void(0);' onclick='showInfoboxByGridKey(", data[i].gridKey, ");'>");
      output.push(data[i].getTitle(), "</a><br/>");
    }


  }
}

function showInfoboxByGridKey(gridKey) {
  //Look up the cluster or pushpin by gridKey.
  var clusterPin = clusterLayer.getClusterPushpinByGridKey(gridKey);

  //Show an infobox for the cluster or pushpin.
  showInfobox(clusterPin);
}






























function CallRestService(request, callback) {
  $.ajax({
    url: request,
    dataType: "jsonp",
    jsonp: "jsonp",
    success: function (r) {
      callback(r);
    },
    error: function (e) {
      alert(e.statusText);
    }
  });
}