
/**
 * Mains
 * Install all the callbacks!
 */
var main = function()
{
	var k, l, opt, subopt, html = '';

	// NEW: Build the form. 
	for(k in form) {
		opt = form[k];

		// Checkbox
		html = '<tr id=' + k + '><td class="checkbox">';
		html += '<input type="checkbox" class="checkbox" id="' + k + '-check' +
			    '"></td>' + "\n";

		// Option Text
		html += '<td>' + opt.optText + "\n";

		// Suboptions 
		// TODO
		if('suboptType' in opt) {
			html += '<div>';
			// RADIO INPUT
			if(opt.suboptType == 'radio') {
				html += '<ul>';
				for(l in opt.subopts) {
					html += '<li>';
					html += '<input type="radio" class="radio" ' +
						'name="' + k + '-subopt" ' +
						'value="' + l + '">';
					subopt = opt.subopts[l];
					html += subopt;
					html += "</li>\n";
				}
				html += '<ul>';
			}
			// CHECKBOX 
			else if(opt.suboptType == 'checkbox') {
				html += '<ul>';
				for(l in opt.subopts) {
					html += '<li>';
					html += '<input type="checkbox" class="checkbox2" ' +
						'name="' + k + '-subopt" ' +
						'value="' + l + '">';
					subopt = opt.subopts[l];
					html += subopt;
					html += "</li>\n";
				}
				html += '<ul>';
			}
			html += '</div>';
		}

		// Package and append
		html += '</td></tr>';
		$('table').append(html);
	}


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

