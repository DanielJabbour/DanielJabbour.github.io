// Change style of navbar on scroll
window.onscroll = function() {navbarScroll()};
function navbarScroll() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "bar" + " card" + " animate-top" + " white";
    } else {
        navbar.className = navbar.className.replace(" card animate-top white", "");
    }
}

//Used to toggle the menu on small screens when clicking on the menu button
function navbarToggle() {
    var x = document.getElementById("nav2");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else {
        x.className = x.className.replace(" show", "");
    }
}