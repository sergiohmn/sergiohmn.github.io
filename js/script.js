$(document).ready(
	function(){
		$('ul li').click(
			function(){
				$('ul li').removeClass('active-link')
				$(this).addClass('active-link')
			});
});
