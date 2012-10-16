$(function() {
	$('#container').masonry({
		itemSelector : '.item',
		columnWidth : 220,
		isAnimated : true,
		animationOptions: {
			duration: 600
		} 
	});
});