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
            nav.style.borderTop = "thin solid";
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


/* Flip the .p-image to see the .p-description on the back*/

var title = document.getElementsByClassName("p-title");
var imageSide = document.getElementsByClassName("p-image");
var descriptionSide = document.getElementsByClassName("p-description");
var moreInfo = document.getElementsByClassName("p-info");
var flip = document.getElementsByClassName("p-flip");
var rotate = false;

var getInfo = function(button, index) {
    button.onclick = function() {

        if(rotate) {
            title[index].style.color = "#fafafa";
            imageSide[index].style.transform = "rotateY(0deg)";
            descriptionSide[index].style.transform = "rotateY(180deg)";
            rotate = false;
        } else {
            title[index].style.color = "#333";
            imageSide[index].style.transform = "rotateY(-180deg)";
            descriptionSide[index].style.transform = "rotateY(0deg)";
            rotate = true;
        }
        rotate = false;
    };
};

getInfo(moreInfo[0], 0);
getInfo(moreInfo[1], 1);
getInfo(moreInfo[2], 2);
getInfo(moreInfo[3], 3);

var flipOver = function(button, index) {
    button.onclick = function() {

        if(rotate) {
            title[index].style.color = "#333";
            imageSide[index].style.transform = "rotateY(-180deg)";
            descriptionSide[index].style.transform = "rotateY(0deg)";
            rotate = false;
        } else {
            title[index].style.color = "#fafafa";
            imageSide[index].style.transform = "rotateY(0deg)";
            descriptionSide[index].style.transform = "rotateY(180deg)";
            rotate = true;
        }
        rotate = false;
    };
};

flipOver(flip[0], 0);
flipOver(flip[1], 1);
flipOver(flip[2], 2);
flipOver(flip[3], 3);
