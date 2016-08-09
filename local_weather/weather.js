/* Get the user's current date */

var getDate = function() {
    var date = new Date();
    var day = date.getDay() + 1; // returns days from 0 - 6
    var month = date.getMonth() + 1; // returns months from 0 - 11
    var dayNum = date.getDate();
    var year = date.getFullYear();
    switch(day) {
    case 1:
        day = "Sunday";
        break;
    case 2:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "Wednesday";
        break;
    case 5:
        day = "Thursday";
        break;
    case 6:
        day = "Friday";
        break;
    case 7:
        day = "Saturday";
        break;
    }
    switch(month) {
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
    document.getElementById("time").innerHTML = time;
};


/* Get the user's current location with the freegeoip.net API */

var getLocation = function() {
    var req = new XMLHttpRequest();
    //var url = "https://freegeoip.net/json/"; // Does not work with https
    var url = "http://freegeoip.net/json/"; // Causes mixed content error - requested an insecure endpoint - This request has been blocked. The content must be served over HTTPS.
    req.open("GET", url, true);
    req.onload = function(response) {
        if(req.status === 200 && req.statusText === "OK") {
            response = JSON.parse(req.responseText);
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
    var url = "http://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + latitude + "&lon=" + longitude + "&appid=363852341ad7561e3f28c7b710b008df";
    req.open("GET", url, true);
    req.addEventListener("load", function() {
        if(req.status === 200 && req.statusText === "OK") {
            var response = JSON.parse(req.responseText);
            var currentTemp = Math.round(response.main.temp);
            var weatherConditions = response.weather[0].description;
            var weatherIcon = response.weather[0].icon;
            var humidity = response.main.humidity;
            var date = new Date();
            var sunrise = response.sys.sunrise; // Unix Timestamp in seconds
            sunrise = date.setTime(sunrise * 1000); // Time in milliseconds
            sunrise = date.toString().split(" ")[4]; // Convert milliseconds into a human-readable string and return the value at index 4 which is military time
            sunrise = militaryToRegularTime(sunrise);
            var sunset = response.sys.sunset;
            sunset = date.setTime(sunset * 1000);
            sunset = date.toString().split(" ")[4];
            sunset = militaryToRegularTime(sunset);
            var icon = document.getElementById("icon");
            var error = document.getElementById("error");
            document.getElementById("current-temp").innerHTML = "Now: " + currentTemp;
            document.getElementById("description").innerHTML = weatherConditions;
            // Set icon for current weather conditions
            icon.innerHTML = '<img src="http://openweathermap.org/img/w/' + weatherIcon + '.png" alt="' + weatherConditions + '">';
            document.getElementById("humidity").innerHTML = "Humidity: " + humidity + "%";
            document.getElementById("sunrise").innerHTML = "Sunrise: " + sunrise;
            document.getElementById("sunset").innerHTML = "Sunset: " + sunset;
        } else {
            error.innerHTML = "An error occurred: Please refresh the page.";
            error.style.color = "#f00";
            error.style.border = "solid";
        }
        // Passing a local variable to the convertTemp function
        convertTemp(currentTemp);
    }); // end event listener success
    req.send();
}; // end getWeather


/* Convert celcius to fahrenheit */

var convertTemp = function(currentTemp) {
    var fahrenheit = Math.round(currentTemp * 9 / 5 + 32);
    var convert = false;
    document.getElementById("convert-temp").onclick = function() {
        if(convert) {
            document.getElementById("current-temp").innerHTML = "Now: " + currentTemp;
            document.getElementById("convert-temp").innerHTML = "C";
            document.getElementById("convert-temp").setAttribute("title", "Click to convert to Fahrenheit");
            convert = false;
        } else {
            document.getElementById("current-temp").innerHTML = "Now: " + fahrenheit;
            document.getElementById("convert-temp").innerHTML = "F";
            document.getElementById("convert-temp").setAttribute("title", "Click to convert to Celcius");
            convert = true;
        }
    }; // end click event
};


/* Convert military time to regular time */

var militaryToRegularTime = function(time) {
    time = time.split(":");
    // Minutes remains a string so the leading 0 is not removed when minutes < 10.
    var hours = parseInt(time[0]), minutes = time[1];
    if(hours > 0 && hours < 12) {
        return hours + ":" + minutes + " AM";
    } else if(hours === 12) {
        return hours + ":" + minutes + " PM";
    } else if(hours === 0) {
        return (hours + 12) + ":" + minutes + " AM";
    } else {
        return (hours - 12) + ":" + minutes + " PM";
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
