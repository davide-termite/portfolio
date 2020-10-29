$(document).ready(function(){

  $(".card-overlay").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });

})
