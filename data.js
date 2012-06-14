
var form = {

	/**
	 * Coffee
	 */
	coffee: {
		optText: "I <em><strike>like</strike></em> love coffee!",
		message: function() {
			return "I really love coffee!";
		},
		suboptType: 'radio',
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
		subopts: [
			'Fran&#xe7;ais',
			'&#x4e2d;&#x6587;',
			'Espa&#xf1;ol (We can\'t pretend to be spies with this!)',
			'Deutsch',
			'&#x65e5;&#x672c;&#x8a9e;',
			'Italiano',
			'<b>TODO: Need function script to compile input box option.</b>'
		]
	},

	// Artist
	artist: {
		optText: "I'm an artist. Maybe we can collaborate!",
		message: function() {
			return "I'm an artist.";
		}
	},
}
