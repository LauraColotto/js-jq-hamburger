var menù = $(".hamburger-menu");
var visible = false;
var hamburger = $(".fas fa-bars");

hamburger.click(
  function(){

    if (visible == false){
      menù.fadeIn("slow");
      visible = true;
    } else {
      menù.fadeOut("slow");
      visible = false;
    }
  }
);
