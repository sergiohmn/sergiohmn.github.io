$(document).ready(
	function(){
		$('ul li').click(
			function(){
				//alert('click trigger')
				$('ul li').removeClass('active-link')
				$(this).addClass('active-link')
			});
});
