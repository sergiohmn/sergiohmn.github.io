$(document).ready(
	function(){
		$('ul li').click(
			function(){
				$('ul li').removeClass('active-link')
				$(this).addClass('active-link')
			});
},
activeHtmlPage()

);



/*
Gets the
*/
function activeHtmlPage(){
	var filePath = window.location.pathname;
	var pageName = filePath.split("/").pop(); 
	alert(pageName)
	return pageName
}

function activeNavLink(){
	if (activeHtmlPage() == 'index.html'){
		
	}
}