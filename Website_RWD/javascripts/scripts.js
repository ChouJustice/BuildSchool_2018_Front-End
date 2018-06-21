
$(function(){
    $(".menu-toggle").on("click", function(e){
        e.preventDefault();
        $(this).siblings("ul").slideToggle();
        $(this).find("i").toggleClass("fa-caret-down").toggleClass("fa-caret-up");
    });
});