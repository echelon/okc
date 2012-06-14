
var form = {
	/**
	 * Coffee
	 */
	coffee: {
		optText: "I <em><strike>like</strike></em> love coffee!",
		/*message: function() {
			return "I really love coffee!";
		},*/
		suboptType: 'radio',
		subPrepend: '<p>To clarify just how much I like coffee,</p>',
		subopts: [
			'I think coffee is pretty damn awesome.',
			'I know a more hipster coffee joint than you.',
			'You own a Keurig machine? You monster! \
			 That\'s an affront to my sensibilities!'
		]
	},

	/**
	 * Language
	 */
	language: {
		optText: 'I can speak a foreign language! We should totally geek \
			out together and speak it in public. (Nobody else will \
			understand us!)',
		suboptType: 'checkbox',
		subPrepend: '<p>I speak,</p>',
		subAppend: '<p class="small">* Note: Brandon only knows Japanese and \
			a little Chinese, but he can make an effort to learn from you.</p>',
		subopts: [
			'Fran&#xe7;ais',
			'&#x4e2d;&#x6587;',
			'Espa&#xf1;ol (We can\'t pretend to be spies with this!)',
			'Deutsch',
			'&#x65e5;&#x672c;&#x8a9e;',
			'Italiano',
			// TODO: Needs scripting:
			'Something else: \
				<input width="200" id="lang-input" value="(insert here)">.'
		],
		domAddCallback: function() {
			// Script the input box.
			var TEXT = '(insert here)';
			$('#lang-input').focusin(function(e) {
				if($(this).val() == TEXT) {
					$(this).val('');
				}
			});
			$('#lang-input').focusout(function(e) {
				if($(this).val() == '') {
					$(this).val(TEXT);
				}
			});
		}
	},

	/**
	 * Artist
	 */
	artist: {
		optText: "I'm an artist. Maybe we can collaborate!",
		message: function() {
			return "I'm an artist.";
		}
	},
}
