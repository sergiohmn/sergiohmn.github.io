

// fetch('cards.json')
// .then(response => response.json())
// .then(jsonResponse => console.log(jsonResponse))

// $(document).ready(
// 	function(){
// 		$('ul li').click(
// 			function(){
// 				$('ul li').removeClass('active-link')
// 				$(this).addClass('active-link')
// 			});
// });

// $(document).ready(
// 	function(){
// 		alert("asd")
// 		$('li.nav-link').bind("click", function(event) {
// 			event.preventDefault();
// 			alert("basd")
// 			var clickedItem = $(this);
// 			console.log(clickedItem)
// 			$('.navbar-container .nav-link').each(function() {
// 				$(this).removeClass("active");
// 			});
// 		});
// 	});
	
// pages = ['index', 'projects']
// $('.nav-item').each(function(i) {
// 	alert("entry into funct")
// 	if (activeHtmlPage().includes(pages[i])) this.addClass('active-link');
// 	else if (this.className.includes('active-link')) this.removeClass('active-link');
//    });

// /*
// Gets the
// */
// function activeHtmlPage(){
// 	var filePath = window.location.pathname;
// 	var pageName = filePath.split("/").pop(); 
// 	//alert(pageName)
// 	return pageName
// }

// function yield(){
// 	pages = ['index', 'projects']
// 	console.log(activeHtmlPage());
// $('.nav-link').each(function(i) {
// 	alert("entry into funct")
// 	if (activeHtmlPage().includes(pages[i])) this.addClass('active-link');
// 	else if (this.className.includes('active-link')) this.removeClass('active-link');
//    });

// }

