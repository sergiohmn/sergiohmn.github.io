
$(function(){
    $("#header").load("header.html", function() {
      $('.nav-link a[href="' +
       window.location.pathname.split('/').pop() +
       '"]', this).parent().addClass('active-link').siblings().removeClass('active-link');
    }); 
  });