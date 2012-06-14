
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
 * XXX: Most of the interactivity should be controlled by data.js
 */
var updateText = function()
{
	var BLANK_MSG = 'I have nothing to say to you.';
	var message = '';
	var name = $('#name').val();
	var checked = $('.checkbox:checked');

	if(name == "I'm not giving you my name!") {
		name = '';
	}

	// No message
	if(!name && !checked.length) {
		$('textarea').html(BLANK_MSG);
		return;
	}

	// Other exit conditions
	if(checked.closest('#idiot').length) {
		message = 'hey brandn I thikn you\'re profile is stupid. ' +
			'u should lern to b like norml gaiz. ' +
			'oh wait u cant, haha losr';
		$('textarea').html(message);
		return;
	}
	if(checked.closest('#nothing').length) {
		message = 'Hi Brandon,\n\nI think your profile is clever ' +
			'and all, but I don\'t believe we have anything in common / ' +
			'you\'re just not my type. I did want to commend you on your ' +
			'efforts though!\n\n' +
			'I wish you all the best in finding your match.\n\n';

		if(name) {
			message += " &mdash; " + name + '\n\n';
		}

		message += 'p.s. thanks for not being creepy and messaging me ' +
			'back with reasons you think we should be together.';
			
		$('textarea').html(message);
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
	
	// FIXME: This is so messy. I shouldn't be doing it this way...

	/**
	 * Likes
	 */
	if(checked.closest('#likes').length) {
		message += "Let me start off by stating that we share some " +
			"important interests. (Don't get too excited!)\n\n";

		$('#likes .subopt input:checked').each(function() {
			switch($(this).val()) {
				case '0':
					message += "I'm a huge fan of the Legend of Zelda " +
						"games. Predictably, my favorite games in the " +
						"series are in this order: Majora's Mask, Skyward " +
						"Sword, Link to the Past, Ocarina of Time, Link's "	+
						"Awakening, etc. " +
						"(AND NO, I WON'T CHANGE THAT PERFECT ORDER.)\n\n";
					break;
				case '1':
					message += "I think the Alien films were pretty cool, " +
						"at least the original Ridley Scott and James " +
						"Cameron films; I won't mention those other, " +
						"non-cannon films in the same sentence.\n\n"; 
						break;
				case '2':
					// TODO: 'name' used persuasion. It's super-effective.
					message += "Haha! You like Pokemon and just won't " +
						"admit it! That's okay, I won't tell anyone. " +
						"You shouldn't be so ashamed of our 90's " +
						"heritage, though. Besides, you won't ever get " +
						"to play me if you can't cop to it. " +
						"(My persuasion is super effective. Am I right?)" +
						"\n\n";
						break;
				case '3':
					message += "Scary movies are fun. Especially in the " +
						"dark during a thunderstorm; makes for the " +
						"creepiest power outages ever!\n\n";
					break;
				case '4':
					message += "You know what's fun? Building forts! "+
						"There's nothing better than coming home and " +
						"crawling into the most secure and defensible " +
						"position this side of the Potomac. Curling " +
						"up, snacking on Cheez-Its&reg;, reading by the " +
						"Christmas lights strung to the makeshift " +
						"ceiling... " +
						"Also, dogfort meme: http://i.imgur.com/UJvBn.jpg " +
						"Please tell me you dress your corgi like that!\n\n";
					break;
			}
		});
	}

	/**
	 * Program
	 */
	if(checked.closest('#program').length) {
		message += 'I think it would be pretty fun to work together '+
					'on some projects, especially making a videogame. ';
		switch($('#program .subopt input:checked').val()) {
			case '0': 
				message += 'I\'m a pretty good programmer. Do ' +
					'you think you can keep up with me? ;) ';
				break;
			case '1': 
			case '2': 
				message += 'What I don\'t know, I\'m willing to learn! ';
				break;
			case '3':
				message += 'I can\'t program, but I\'ll do the creative ' +
					'work! ';
				break;
			case '4':
				message += 'Though I\'ll probably just watch. ';
				break;
		}
		message += 'What kind of game would you want to make?\n\n';
	}

	/**
	 * Artist
	 */
	if(checked.closest('#artist').length) {
		message += "I do creative stuff, and like collaborating with " +
			"others, too. ";
		var a = $('#artist .subopt input').val();
		if(a != '(website)') {
			message += 'You should out my work: ';
			message += a;
		}
		message += '\n\n';
	}

	/**
	 * Language.
	 */
	if(checked.closest('#language').length) {
		message += "I speak "
		var other = false;
		$('#language .subopt input:checked').each(function() {
			switch($(this).val()) {
				case '0':
					other = true;
					message += 'French, ';
					break;
				case '1':
					other = true;
					message += 'Chinese, ';
					break;
				case '2':
					other = true;
					message += 'Spanish, ';
					break;
				case '3':
					other = true;
					message += 'German, ';
					break;
				case '5':
					other = true;
					message += 'Italian, ';
					break;
				case '6':
					var li = $('#lang-input').val();
					if(li != '(insert here)') {
						other = true;
						// Oh no, XSS!
						message += li;
						message += ', ';
					}
					break;
			}
		});
		if(other) {
			message = message.substring(0, message.length - 2);
			message += ". ";
			message += "Perhaps you'd want to learn from me?";
		}
		else {
			message += "a foreign language. ";
		}

		// TODO Japanese and Chinese here.
		$('#language .subopt input:checked').each(function() {
			if($(this).val() == '4') {
				if(other) {
					message += '\n\nOh, and Japanese! ';
				}
				else {
					message += '\n\nIt\'s Japanese! ';
				}
				message += 'Does that surprise you? '+
					'I bet we could totally nerd out in public with none ' +
					'being the wiser. (Or maybe they\'ll think we\'re space '+
					'aliens!) ';
			}
		});
		message += '\n\n';
	}


	/**
	 * Coffee
	 */
	if(checked.closest('#coffee').length) {
		message += 'As it happens, I really enjoy coffee. ' +
			'I understand that you also happen to share this rare ' +
			'appreciation with me. We\'ll have to take that as some ' +
			'kind of sign.';

		var a = $('#coffee .subopt input:checked').val();
		switch(a) {
			case '1':
			case '2':
				message += ' (...though I\'m rather certain I know more ' +
					'about coffee than you, young padawan.)';
				break;
		}
		message += '\n\n';
	}

	/**
	 * Reddit
	 */
	if(checked.closest('#reddit').length) {
		if($('#reddit .subopt input:checked').val() == '2') {
			message += 'Oh, by the way, I\'m a Redditor!\n\n' 
		}
	}

	// Outro
	message += 'Hope to hear from you!';
	if(name) {
		message += "\n\n &mdash; " + name;
	}


	$('textarea').html(message);
}

