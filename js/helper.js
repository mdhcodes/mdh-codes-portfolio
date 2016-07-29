// mdhCodes Resume Page Content - Placeholders

// Experience
var workTitle = '<p class="job-title">%data%</p>';
var workLocation = '<p class="job-location">%data%</p>';
var workDates = '<p class="job-dates">%data%</p><ul>';
var workDescription1 = '<li class="job-description">%data%</li>';
var workDescription2 = '<li class="job-description">%data%</li>';
var workDescription3 = '<li class="job-description">%data%</li>';
var workDescription4 = '<li class="job-description">%data%</li></ul>';

// Projects
var projectTitle = '<p class="project-title">%data%</p>';
var projectDescription = '<p class="project-description">%data%</p>';
var projectImage = '<img src=%data% class="project-image">';

//Education
var schoolDegree = '<p class="school-degree">%data%</p>';
var schoolMajor = '<p class="school-major">%data%</p>';
var schoolName = '<p class="school-name">%data%</p>';
var schoolLocation = '<p class="school-location">%data%</p>';

// Technology Courses
var courseName = '<p class="tech-course-name">%data%</p>';
var courseSchool = '<p class="tech-school">%data%</p>';
var courseDates = '<p class="tech-course-dates">%data%</p>';

var map;
var markers = [];

var initMap = function() {
    // Create a new map
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7282239, lng: -73.7948516},
    zoom: 8,
    disableDefaultUI: true // Disables default map actions/options
    });

    var locations = [
        {title: "I'm located in Queens, NY", location: {lat: 40.7282239, lng: -73.7948516}},
        {title: "Queens Botanical Garden", location: {lat: 40.75029489999999, lng: -73.8294177}},
        {title: "MoMA PS1", location: {lat: 40.7454823, lng: -73.9473062}},
        {title: "Flushing Meadows Corona Park", location: {lat: 40.73971359999999, lng: -73.840785}},
        {title: "Queens Museum", location: {lat: 40.745845, lng: -73.8466777}},
        {title: "New York Hall Of Science", location: {lat: 40.7471508, lng: -73.8516657}},
        {title: "Louis Armstrong House Museum", location: {lat: 40.7545844, lng: -73.8615339}},
        {title: "Socrates Sculpture Park", location: {lat: 40.76850609999999, lng: -73.9364973}},
        {title: "Queens Zoo", location: {lat: 40.7444337, lng: -73.8497415}},
        {title: "Lewis Howard Latimer House Museum", location: {lat : 40.7661211, lng : -73.8293949}}
    ];

    // Create an infowindow
    var infowindow = new google.maps.InfoWindow();
    // Adjust map boundaries - captures the SW and NE corners of the viewport - sets boundaries based on the map marker locations
    var bounds = new google.maps.LatLngBounds();

    // Change the color of the marker icon
    var markerColor = '1e86d7';
    var markerImage = new google.maps.MarkerImage('http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|'+ markerColor);
    // Loop over locations array
    for(var i = 0; i < locations.length; i++) {
        var title = locations[i].title;
        var position = locations[i].location;
        // Create a map marker identifying each position in the locations array
        var marker = new google.maps.Marker({
            map: map, // The map where the marker will appear
            position: position, // Where the marker will appear on the map
            title: title, // Appears as a tooltip when you hover over the marker
            animation: google.maps.Animation.DROP, // Markers drop into place when the page loads
            icon: markerImage // The styles applied to the markers
        });
        // Store all the markers in the markers array
        markers.push(marker);
        // Extend the map boundaries to include each marker
        bounds.extend(marker.position);
        // Open the infowindow when each marker is clicked
        marker.addListener('click', function() {
            infoWindowContent(this, infowindow);
        });
    } // end for loop over locations array

    // Tell the map to fit within the specified bounds
    map.fitBounds(bounds);

}; // end initMap function


// Display the infowindow with the location title information when the marker is clicked.
var infoWindowContent = function(marker, infowindow) {
    infowindow.open(map, marker);
    infowindow.setContent('<div>' + marker.title + '</div>');
        // Clear the marker when the infowindow is closed
        infowindow.addListener('closeclick', function() {
            infowindow.setMarker(null);
        });
}


// The functions are invoked when the page loads
window.onload = function() {
    initMap();
    infoWindowContent();
};
