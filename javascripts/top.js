$(function(){
    $("ul.menu li").hover(
        function(){
            $(this).find("ul.menu-second").stop(true, true).slideDown(500);
        },
        function(){
            $(this).find("ul.menu-second").slideUp(1200);
        },
    )});