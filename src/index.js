import "./reset.css";
import "./jag-sidemenu.scss";
import "./tooltip.css";
import "./app.scss";

/*
Array.from(Array(5), (x,idx)=> idx + 1 ).forEach(i => console.log(`<a href="#" class="sidemenu-body-list-item"><i class="material-icons">star</i>Submenu ${i}</a>`)

*/

/*

NOW AS A SUPER EASY TO USE PLUGIN:
https://panels.scotch.io

*/

document.querySelector(".sidemenu-main-menu").addEventListener("click", toggleSideMenu);
function toggleSideMenu() {
  document.querySelector(".sidemenu-sub-menu").classList.toggle("hide");
}

/*
$(function() {
  var special = ["reveal", "top", "boring", "perspective", "extra-pop"];

  // Toggle Nav on Click
  $("#hearts a").click(function() {
    var transitionClass = $(this).data("transition");

    if ($.inArray(transitionClass, special) > -1) {
      $("body").removeClass();
      $("body").addClass(transitionClass);
    } else {
      $("body").removeClass();
      $("#site-canvas").removeClass();
      $("#site-canvas").addClass(transitionClass);
    }

    $("#site-wrapper").toggleClass("show-nav");

    return false;
  });
});

*/
