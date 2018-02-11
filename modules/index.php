<!DOCTYPE html>
<html lang="ru">
<head>
	<title>Project X</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="Keywords" content="">
	<meta name="Description" content="">
	<meta name="author" content="">
	<link rel="icon" href="" type="image/x-icon">
	<link rel="stylesheet" href="css/style.min.css">
	<link rel="stylesheet" href="css/test.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
	<script src="js/libs/jquery.mousewheel.min.js"></script>
	<script src="js/libs/jquery.sparkline.min.js"></script>
	<script src="js/jquery.formstyler.min.js"></script>
	<script src="js/jquery.scrollbar.min.js"></script>
	<script src="js/morris.min.js"></script>
 	<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>
<body>
<div class="wrapper">
	<header>
		@@include('header.php')
	</header>
	<div class="container">
		@@include('aside.php')
		@@include('main.php')
	</div><!-- /container -->

		@@include('footer.php')

</div><!-- /wrapper -->
<script src="js/main.min.js"></script>
<script src="js/test.min.js"></script>
<script>
$(function() {
	$( "#tabs" ).tabs();
	
	$('.js-scrl-wrap').scrollbar();
	
	var handle = $( "#switcher" );
	$( "#switchWrap" ).slider({
		value: 1400, max: 2000, animate: "fast", step: 200,
		create: function() {
			handle.text( $( this ).slider( "value" ) );
		},
		slide: function( event, ui ) {
			handle.text( ui.value );
		}
	});

	$('#timeout').styler();
	
	$( "#progressbar" ).progressbar({
		value: 85
	});
	
	
});
	
	
	

</script>
</body>
</html>
