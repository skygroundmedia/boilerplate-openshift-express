//$(window).bind("resize", resizeWindow);

function includeFooter( date ){
	var now = date;
	var testPatterns = [
	'yyyy','yy','MMMM','MMM','MM','M','dd','d','EEEE','EEE','a',
	'HH','H','hh','h','mm','m','ss','s','S',
	'EEEE MMMM, d yyyy hh:mm:ss.S a',
	'M/d/yy HH:mm'
	];
	$("footer span").append( $.formatDate( now, 'yyyy' ) );	
}

function onAjaxRequestHandler(e){
	console.log( "onAjaxRequestHandler:", e );
}
