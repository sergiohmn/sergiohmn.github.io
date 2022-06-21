$(function(){
    $("#header").load("header.html", function() {
      $('.nav-link a[href="' +
       window.location.pathname.split('/').pop() +
       '"]', this).parent().addClass('active-link').siblings().removeClass('active-link');
       alert("asd")
       console.log(this)
       console.log(window.location.pathname.split('/').pop())
       console.log($('.nav-link a'))
    }); 
  });