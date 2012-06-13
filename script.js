
/**
 * Mains
 * Install all the callbacks!
 */
var main = function()
{
	// Click a main checkbox
	$('.checkbox').change(function(){
		if($(this).is(':checked')) {
			$(this).closest('tr').find('.subopt').slideDown({
				duration: 800,
				easing: 'easeInOutBack'
			});
		}
		else {
			$(this).closest('.option').find('.subopt').slideUp({
				duration: 800,
				easing: 'easeInOutBack'
			});
		}
		updateText();
		return false;
	});
}

/**
 * Update the textbox with the latest state.
 */
var updateText = function()
{
	// For now, no-op. 
}

