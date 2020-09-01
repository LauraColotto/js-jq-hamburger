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
)

// //var menu = $(".hamburger-menu");
// var menu = document.getElementsByClassName('hamburger-menu');
// //var hamburger = document.getElementsByClassName('fas fa-bars');
// //var hamburger = $('i');
// var he = $('img');
// var hamburger = $('i.fas.fa-bars');
//
//
// /*hamburger.click(
//   function() {
//     //menu.last().addClass("hamburger-menu.active");
//     hamburger.attr('id', 'newID');
//   }
// )*/
// hamburger.mouseenter(
//   function() {
//     alert("Sopra");
//   }
// );
