$(function() {
	$('#container').masonry({
		itemSelector : '.item',
		columnWidth : 220,
		isAnimated : true,
		isFitWidth : true,
		animationOptions: {
			duration: 600
		} 
	});
});