$(document).ready(function () {
  // Ouvrir le menu

  $(".burg").click(function () {
    $(".menu-mobile").css("transform", "translateY(0)");
    $(".burg").hide();
    $(".cross").show();
  });

  // Fermer le menu
  $(".cross").click(function () {
    $(".menu-mobile").css("transform", "translateY(-1000px)");
    $(".cross").hide();
    $(".burg").show();
  });

  $(".all").click(function () {
    $(".menu-mobile").css("transform", "translateY(-100%)");
    $(".cross").hide();
    $(".burg").show();
  });
});
