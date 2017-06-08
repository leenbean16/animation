var btn = $('.start');
$('#winner-animation').hide();
btn.on('click', function(){
	$('#winner-animation').show();
setTimeout(function(){ 
	$('#winner-animation').fadeOut("slow");
}, 3000);
})


