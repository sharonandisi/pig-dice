$(window).on("load", function () {
    $("#sidebar").toggleClass("active");
    $("#menu1").toggle();

});

$("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
    $("#menu1").toggle("active");
});

