// code by Kayla Onobun

$(document).ready(function(){
    // Close side bar
    $(".close-sidebar").click(function(){
        $(".sideBar").hide();
    });

    // Open side bar
    $(".menu-btn").click(function(){
        $(".sideBar").show();
    });
});