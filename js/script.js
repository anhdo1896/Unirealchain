$(document).ready(function () {
  $("#videolink").magnificPopup({
    type: "inline",
    midClick: "true",
  });

  $(".ru").click(() => {
    loadFlags("ru");
  });
  $(".en").click(() => {
    loadFlags("en");
  });
  $(".sp").click(() => {
    loadFlags("sp");
  });
  $(".ge").click(() => {
    loadFlags("ge");
  });

  function loadFlags(flags) {
    switch (flags) {
      case "ru":
        $(".selected-lang").html("Ru");
        var style = document.querySelector(".selected-lang").style;
        style.setProperty("--flags", "url('../images/russia.png')");
        break;
      case "sp":
        $(".selected-lang").html("Sp");
        var style = document.querySelector(".selected-lang").style;
        style.setProperty("--flags", "url('../images/spain.png')");

        break;
      case "en":
        $(".selected-lang").html("En");
        var style = document.querySelector(".selected-lang").style;
        style.setProperty("--flags", "url('../images/england.png')");

        break;
      case "ge":
        $(".selected-lang").html("Ge");
        var style = document.querySelector(".selected-lang").style;
        style.setProperty("--flags", "url('../images/german.png')");

        break;
    }
  }
  
  window.onscroll = () => {
   
    $( "section" ).each(function( index ) {
      let top = window.scrollY;
      let offset =  $( "section" )[index].offsetTop;
      let height =  $( "section" )[index].offsetHeight;
      let id =  $( "section" )[index].getAttribute('id');
      console.log(top);
      console.log(offset);
         if(top > offset && top < offset+height){
         $('header nav ul li').each(function(link){
           
           $('header nav ul li')[link].classList.remove('active');
           $('header nav ul li a[href*=' +id +']').parent().addClass('active');
         }) 
      }
    });
  }
});
