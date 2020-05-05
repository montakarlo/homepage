window.onload = function () { 
    $(".chmode_button").click(function(){
        if ($('.contact-link').hasClass('dark_mode')){
            $( ".contact-link" ).removeClass("dark_mode");
            $( ".icon" ).removeClass("dark_mode");
            $( ".page" ).removeClass("page-dark");
            $( ".fat.divider" ).removeClass("divider-dark");
            $("main").removeClass("main-dark")
            $("strong>a").removeClass("a-dark")
            $(".details").removeClass("details-dark")

        } else{
            $( ".contact-link" ).addClass("dark_mode");
            $( ".icon" ).addClass("dark_mode");
            $( ".page" ).addClass("page-dark");
            $( ".fat.divider" ).addClass("divider-dark");
            $("main").addClass("main-dark")
            $("strong>a").addClass("a-dark")
            $(".details").addClass("details-dark")
        }
  });
}


  
