// $(document).load($(window).bind("resize", checkPosition));
$(document).ready(function () {checkPosition()});

function checkPosition()
{
    // if (window.matchMedia('(max-width: 734px)').matches) 
    if ($(window).width() < 734) 
    {
        $("#main_menu").html("<div id='my_btn' class='my_menu_btn'></div>");
        $("#main_menu_items").html("<div id='my_mobile_menu' class='my_mobile_menu col'><div class='close_x_item' id='commit_close_menu1'>X</div><div class='row my_mobile_menu_items mx-auto' id='commit_close_menu'>COMMIT</div><div class='row my_mobile_menu_items'>ПРО НАС</div><div class='row my_mobile_menu_items'>КЕЙСИ</div><div class='row my_mobile_menu_items' id='commit_menu_last_item'>КОНТАКТИ</div></div>");

        $("#my_mobile_menu").toggle();
        $("#my_btn").click(function () {
            $("#my_mobile_menu").toggle();
            });
        $("#commit_close_menu").click(function () {
            $("#my_mobile_menu").toggle();
            });
        $("#commit_close_menu1").click(function () {
            $("#my_mobile_menu").toggle();
            });
        $("#order_button_top").html("");
    } else {
        // $("#body-container .main-content").remove().insertAfter($("#body-container .left-sidebar"));
    }
}