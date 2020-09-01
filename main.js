var menu = $("div.hamburger-menu");
var hamburger = $("i.fas.fa-bars");
var close =$("a.close");

hamburger.click(
  function(){
      menu.addClass("active");
  }
);

close.click(
  function () {
    menu.removeClass("active");
  }
);
