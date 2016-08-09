/* Show and Hide Navigation Menu */

var showHideMenu = function() {

    var menuButton = document.getElementById("menu-button");
    var navMenu = document.getElementById("nav-menu");
    var nav = document.getElementById("nav");
    var menuIsDisplayed = false;

    // When the menuButton is clicked, the following code runs.
    menuButton.onclick = function() {

        if(menuIsDisplayed) { // menuIsDisplayed is initially false (the default setting) and the navigation menu is hidden OR if the nav menu is displayed, hide it.
            navMenu.style.display = "none";
            nav.style.borderTop = "none";
            menuIsDisplayed = false;
        } else {
            // If the nav menu is hidden, display it.
            navMenu.style.display = "block";
            nav.style.borderTop = "thin solid";
            menuIsDisplayed = true;
        }
    };

    // If the user clicks on the visible nav menu, hide it.
    navMenu.onclick = function() {
        navMenu.style.display = "none";
        nav.style.borderTop = "none";
        menuIsDisplayed = false;
    };
};

showHideMenu();


// Display and hide the project descriptions.

// The getElementsByClassName() method collects all the elements with the specified class name. To access each element in the HTML collection use the index number of the collection item.

var projects = document.getElementsByClassName("project");
var description = document.getElementsByClassName("p-description");
var moreInfo = document.getElementsByClassName("p-more-info");
var lessInfo = document.getElementsByClassName("p-less-info");
var fadeInClass = "animated fadeInDown";
var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

// Display the project descriptions when the moreInfo button is clicked.

$('.p-more-info').on('click', function() {
    $(this).css("display", "none");
    if(this === moreInfo[0]) {
        $(description[0]).css("display", "block");
        $(projects[0]).css("height", "47em");
        $(description[0]).addClass(fadeInClass).one(animationEnd, function() {
            $(description[0]).removeClass(fadeInClass);
        });
    }
    if(this === moreInfo[1]) {
        $(description[1]).css("display", "block");
        $(projects[1]).css("height", "47em");
        $(description[1]).addClass(fadeInClass).one(animationEnd, function() {
            $(description[1]).removeClass(fadeInClass);
        });
    }
    if(this === moreInfo[2]) {
        $(description[2]).css("display", "block");
        $(projects[2]).css("height", "47em");
        $(description[2]).addClass(fadeInClass).one(animationEnd, function() {
            $(description[2]).removeClass(fadeInClass);
        });
    }
    if(this === moreInfo[3]) {
        $(description[3]).css("display", "block");
        $(projects[3]).css("height", "47em");
        $(description[3]).addClass(fadeInClass).one(animationEnd, function() {
            $(description[3]).removeClass(fadeInClass);
        });
    }
});


// Hide the project descriptions when the lessInfo button is clicked.

$('.p-less-info').on('click', function() {
    if(this === lessInfo[0]) {
        $(moreInfo[0]).css("display", "block");
        $(description[0]).css("display", "none");
        $(projects[0]).css("height", "28em");
    }
    if(this === lessInfo[1]) {
        $(moreInfo[1]).css("display", "block");
        $(description[1]).css("display", "none");
        $(projects[1]).css("height", "28em");
    }
    if(this === lessInfo[2]) {
        $(moreInfo[2]).css("display", "block");
        $(description[2]).css("display", "none");
        $(projects[2]).css("height", "28em");
    }
    if(this === lessInfo[3]) {
        $(moreInfo[3]).css("display", "block");
        $(description[3]).css("display", "none");
        $(projects[3]).css("height", "28em");
    }
});
