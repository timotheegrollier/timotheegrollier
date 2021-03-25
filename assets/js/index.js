$( document ).ready(function() {
  $(".burg").click(function(){
    $(".menu-mobile").css("transform","translateY(0)");
    $(".burg").hide();
  });
  $(".all").click(function(){
$(".menu-mobile").css("transform","translateY(-100%)")
  });
});