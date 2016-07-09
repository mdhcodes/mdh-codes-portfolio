/* Show and Hide Navigation Menu */

var showHideMenu = function() {

    var menuButton = document.getElementById("menu-button");
    var navMenu = document.getElementById("nav-menu");
    var nav =  document.getElementById("nav");
    var menuIsDisplayed = false;

    menuButton.onclick = function() {

        if(menuIsDisplayed) {
            navMenu.style.display = "none";
            nav.style.borderTop = "none";
            menuIsDisplayed = false;
        } else {
            navMenu.style.display = "block";
            nav.style.borderTop = "thin solid #333";
            menuIsDisplayed = true;
        }
    };

    navMenu.onclick = function() {
        navMenu.style.display = "none";
        nav.style.borderTop = "none";
        menuIsDisplayed = false;
    };
};

showHideMenu();


/* Highlight .selected #nav-menu link */

$(document).ready(function() {
    $('#nav-menu li a').click(function() {
        $('li a').removeClass("selected");
        $(this).addClass("selected");
    });
});


/* Get the user's current date */

var getDate = function() {

    var date = new Date();
    var day = date.getDay();
    var month = date.getMonth() + 1;
    var dayNum = date.getDate();
    var year = date.getFullYear();

    switch (day) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    }

    switch (month) {
    case 1:
        month = "January";
        break;
    case 2:
        month = "February";
        break;
    case 3:
        month = "March";
        break;
    case 4:
        month = "April";
        break;
    case 5:
        month = "May";
        break;
    case 6:
        month = "June";
        break;
    case 7:
        month = "July";
        break;
    case 8:
        month = "August";
        break;
    case 9:
        month = "September";
        break;
    case 10:
        month = "October";
        break;
    case 11:
        month = "November";
        break;
    case 12:
        month = "December";
        break;
    }

    document.getElementById("date").innerHTML = day + ", " + month + " " + dayNum + ", " + year + ", ";

};


/* Get the user's current time */

var getTime = function() {

    var date = new Date();
    var time = date.toLocaleTimeString();
    var hours = date.getHours();
    document.getElementById("time").innerHTML = time;

};


/* Get the user's current location with the freegeoip.net API */

var getLocation = function() {

    var req = new XMLHttpRequest();
    var url = "http://freegeoip.net/json/";
    req.open("GET", url, true);

    req.onload = function(response) {

        if(req.status === 200 && req.statusText === "OK") {

            var response = JSON.parse(req.responseText);

            var latitude = response.latitude;
            var longitude = response.longitude;
            var city = response.city;
            var state = response.region_name;
            var location = city + ", " + state;
            var error = document.getElementById("error");

            document.getElementById("location").innerHTML = location;

        } else {
            error.innerHTML = "An error occurred: Please refresh the page.";
            error.style.color = "#f00";
            error.style.border = "solid";
        }

        getWeather(latitude, longitude);

    }; // end event listener

    req.send();

};


/* Get the weather for the user's current location with the Open Weather Map API */

var getWeather = function(latitude, longitude) {

    var req = new XMLHttpRequest();
    var url = "http://api.openweathermap.org/data/2.5/weather?units=metric&lat="+latitude+"&lon="+longitude+"&appid=363852341ad7561e3f28c7b710b008df";

    req.open("GET", url, true);

    req.addEventListener("load", function() {
        if(req.status === 200 && req.statusText === "OK") {

            var response = JSON.parse(req.responseText);

            var currentTemp = Math.round(response.main.temp);
            var conditions = response.weather[0].description;
            var date = new Date();
            var sunrise = response.sys.sunrise;
            sunrise = date.setTime(sunrise * 1000);
            sunrise = date.toString().split(" ")[4];
            sunrise = militaryToRegularTime(sunrise);
            var sunset = response.sys.sunset;
            sunset = date.setTime(sunset * 1000);
            sunset = date.toString().split(" ")[4];
            sunset = militaryToRegularTime(sunset);
            var icon = document.getElementById("icon");
            var error = document.getElementById("error");

            document.getElementById("sunrise").innerHTML = "Sunrise: " + militaryToRegularTime(sunrise);
            document.getElementById("sunset").innerHTML = "Sunset: " + militaryToRegularTime(sunset);
            document.getElementById("latitude").innerHTML = "Latitude: " + latitude;
            document.getElementById("longitude").innerHTML = "Longitude: " + longitude;
            document.getElementById("current-temp").innerHTML = currentTemp;
            document.getElementById("description").innerHTML = response.weather[0].description;

            // Set icon for current weather conditions
            if(conditions.includes("few clouds")) {

                icon.setAttribute("src", "http://openweathermap.org/img/w/02d.png");
                icon.setAttribute("alt", "Picture of a gray cloud partially hiding the sun.");

            } else if(conditions.includes("scattered clouds")) {
                icon.setAttribute("src", "http://openweathermap.org/img/w/03d.png");
                icon.setAttribute("alt", "Picture of a gray cloud.");
            } else if(conditions.includes("broken clouds") || conditions.includes("overcast clouds")) {
                icon.setAttribute("src", "http://openweathermap.org/img/w/04d.png");
                icon.setAttribute("alt", "Picture of a gray cloud in front of a black cloud.");
            } else if(conditions.includes("drizzle") || conditions.includes("shower rain")) {
                icon.setAttribute("src", "http://openweathermap.org/img/w/09d.png");
                icon.setAttribute("alt", "Picture of rain falling from a gray cloud in front of a black cloud.");
            } else if(conditions.includes("rain")) {
                icon.setAttribute("src", "http://openweathermap.org/img/w/10d.png");
                icon.setAttribute("alt", "Picture of rain falling from a gray cloud partially hiding the sun.");
            } else if(conditions.includes("thunderstorm")) {
                icon.setAttribute("src", "http://openweathermap.org/img/w/11d.png");
                icon.setAttribute("alt", "Picture of lightning coming from a gray cloud in front of a black cloud.");
            } else if(conditions.includes("snow") || conditions.includes("freezing") || conditions.includes("sleet")) {
                icon.setAttribute("src", "http://openweathermap.org/img/w/13d.png");
                icon.setAttribute("alt", "Picture of snow falling from a gray cloud in front of a black cloud.");
            } else if(conditions.includes("mist") || conditions.includes("smoke") || conditions.includes("haze") || conditions.includes("dust whirls") || conditions.includes("fog") || conditions.includes("sand") || conditions.includes("dust") || conditions.includes("volcanic ash") || conditions.includes("squalls") || conditions.includes("tornado")) {
                icon.setAttribute("src", "http://openweathermap.org/img/w/50d.png");
                icon.setAttribute("alt", "Picture of 4 wavy stacked horizontal lines.");
            } else {
                icon.setAttribute("src", "http://openweathermap.org/img/w/01d.png");
                icon.setAttribute("alt", "A bright sun.");
            }

        } else {
            error.innerHTML = "An error occurred: Please refresh the page.";
            error.style.color = "#f00";
            error.style.border = "solid";
        }

        convertTemp(currentTemp);

    }); // end event listener success

    req.send();

}; // end getWeather


/* Convert celcius to fahrenheit */

var convertTemp = function(currentTemp) {

    var fahrenheit = Math.round(currentTemp * 9/5 + 32);
    var convert = false;

    document.getElementById("convert-temp").onclick = function() {

        if(convert) {
            document.getElementById("current-temp").innerHTML = currentTemp;
            document.getElementById("convert-temp").innerHTML = "C";
            document.getElementById("convert-temp").setAttribute("title", "Click to convert to Fahrenheit");
            convert = false;
        } else {
            document.getElementById("current-temp").innerHTML = fahrenheit;
            document.getElementById("convert-temp").innerHTML = "F";
            document.getElementById("convert-temp").setAttribute("title", "Click to convert to Celcius");
            convert = true;
        }
    }; // end click event

};


/* Convert military time to regular time */

var militaryToRegularTime = function(time) {

	  time = time.split(":");
	  var hours = parseInt(time[0]), minutes = parseInt(time[1]);

	  if(hours > 0 && hours < 12 ) {
		    return hours + ":" + minutes + "AM";
	  } else if(hours === 12) {
		    return hours + ":" + minutes + "PM";
	  } else if(hours === 0) {
		    return (hours + 12) + ":" + minutes + "AM";
	  } else {
		    return (hours - 12) + ":" + minutes + "PM";
	  }

};


window.onload = function() {

    getDate();
    getTime();
    setInterval(getTime, 1000); // update time to the minute
    getLocation();
    getWeather();
    convertTemp();

};
