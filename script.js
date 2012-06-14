
/**
 * Mains
 * Install all the callbacks!
 */
var main = function()
{
	var k, l, opt, subopt, html = '';

	// NEW: Build the form. 
	// This bit makes me cringe, but alas... 
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
			html += '<div class="subopt">';

			// Prepend text.
			if('subPrepend' in opt) {
				html += opt.subPrepend;
			}

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
				html += '</ul>';
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
				html += '</ul>';
			}
	
			// Append text.
			if('subAppend' in opt) {
				html += opt.subAppend;
			}

			html += '</div>';
		}

		// Package and append to DOM
		html += '</td></tr>';
		$('table').append(html);

		// Callback 
		// Allows for scripting, etc. of the options. 
		if('domAddCallback' in opt) {
			opt.domAddCallback();
		}
	}

	// Take care of the 'signed' form reset
	installFormRefresh('input#name', 'I\'m not giving you my name!');

	// Click a main checkbox
	$('.checkbox').change(function(){
		if($(this).is(':checked')) {
			$(this).closest('tr').find('.subopt').slideDown({
				duration: 800,
				easing: 'easeInOutBack'
			});
		}
		else {
			$(this).closest('tr').find('.subopt').slideUp({
				duration: 800,
				easing: 'easeInOutBack'
			});
		}
		updateText();
		return false;
	});

	// Click a subopt checkbox/radio
	$('.subopt input[type=checkbox]').change(function(){
		updateText();
	});
	$('.subopt input[type=radio]').change(function(){
		updateText();
	});

	// Change a textbox.
	$('input:text').change(function(){
		updateText();
	});
}

/**
 * Update the textbox with the latest state.
 * FIXME: This is very messy code.
 */
var updateText = function()
{
	var BLANK_MSG = 'I have nothing to say to you.';
	var message = '';
	var name = $('#name').val();
	if(name == "I'm not giving you my name!") {
		name = '';
	}

	if(!name && !$('.checkbox:checked').length) {
		$('textarea').html(BLANK_MSG);
		return;
	}

	// Intro
	message = 'Hi Brandon';
	if(name) {
		message += ', I\'m ' + name + ','; 
		//and it\'s a pleasure to meet you,';
	}
	else {
		message += ',';
	}
	message += '\n\n';


	// Outro
	message += 'Hope to hear from you!';
	if(name) {
		message += "\n\n &mdash; " + name;
	}


	$('textarea').html(message);
}

