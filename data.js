
/**
 * Install callbacks to clear the given form onblur.
 */
var installFormRefresh = function(selector, text)
{
	// Install callbacks
	$(selector).focusin(function(e) {
		if($(this).val() == text) {
			$(this).val('');
		}
	});
	$(selector).focusout(function(e) {
		if($(this).val().trim() == '') {
			$(this).val(text);
		}
	});
}

/**
 * The form definition.
 */
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
		subAppend: '<div class="dynamic"></div>',
		subopts: [
			'I think coffee is pretty damn awesome.',
			'I know a more hipster coffee joint than you.',
			'You own a Keurig machine? You monster! \
			 That\'s an affront to my sensibilities!'
		],
		domAddCallback: function() {
			var el = $('#coffee .dynamic');
			// Give some feedback. 
			$('#coffee ul input').change(function(){
				switch($('#coffee .subopt input:checked').val()) {
					case '1':
						el.html('<p class="quote">Brandon says: \
							I get it. You really like coffee.</p>');
						break;
					case '2':
						el.html('<p class="quote">Brandon says: \
							No need to rub it in. Gosh!</p>');
						break;
					default:
						el.html('');
						break;
				}
			});
			
		}
	},

	/**
	 * Likes
	 */
	likes: {
		optText: 'I totally like that thing that you like.',
		suboptType: 'checkbox',
		subopts: [
			'Zelda',
			'Alien films (except Prometheus, yech!)',
			'Pokemon <em><small>(BRANDON DOESN\'T CLAIM TO ENJOY THIS!)\
				</small></em>',
			'Scary movies',
			'Building forts out of blankets and pillows'
			//'Coffee (as stated previously)'
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
			<em><strike>a little</strike></em> barely any Chinese, but he can \
			make an effort to learn from you.</p>',
		subopts: [
			'Fran&#xe7;ais',
			'&#x4e2d;&#x6587;',
			'Espa&#xf1;ol (We can\'t pretend to be spies with this!)',
			'Deutsch',
			'&#x65e5;&#x672c;&#x8a9e;',
			'Italiano',
			// TODO: Needs scripting:
			'Something else: \
				<input width="200" class="entry" id="lang-input" \
				value="(insert here)">.'
		],
		domAddCallback: function() {
			installFormRefresh('#lang-input', '(insert here)');
		}
	},

	/**
	 * Artist
	 */
	artist: {
		optText: "I'm an artist and/or writer. Maybe we can collaborate!",
		/*message: function() {
			return "I'm an artist.";
		}*/
		suboptType: 'none', /* XXX/NOTE: Will trigger the condition */
		subPrepend: '<p>You should check out my work:</p>\
			<input width="200" class="entry" id="artist-input" \
			value="(website)">.',
		domAddCallback: function() {
			installFormRefresh('#artist-input', '(website)');
		}
	},

	/**
	 * Passionate about...
	 */
	passion: {
		optText: "I'm really passionate about...",
		suboptType: 'none',
		subPrepend: '<br><input width="200" class="entry" id="passion-input" \
			value="(that thing I\'m really passionate about)">.',
		domAddCallback: function() {
			installFormRefresh('#passion-input', 
					'(that thing I\'m really passionate about)');
		}
	},

	/**
	 * Weather Balloon
	 */
	balloon: {
		optText: 'I read someplace that one of your summer projects is \
			launching a weather balloon with onboard cameras and GPS and I \
			want to go with you! Sounds like fun!',
		suboptType: 'none',
		subPrepend: '<p class="quote">Brandon says: \
			And just where did you read about that? Have you been stalking me?!\
			And you\'re worried I might be a creeper? :P</p>\
			<p class="quote">(I\'m kidding.)</p>\
			<p class="quote">Anyhow, the project is a work in progress. \
			You should join us if you\'re into nerding out about our own little\
			private NASA hijinks.</p>'
	},

	/**
	 * Outdoor activities
	 */
	active: {
		optText: 'Just so you know, I tend to stay pretty active.',
		suboptType: 'checkbox',
		subPrepend: '<p>We could totally do these things on a regular basis. \
			Do you think you can keep up?</p>',
		subopts: [
			'Jogging',
			'Camping',
			'Swimming',
			'Tennis',
			'Hiking',
			'Cycling',
			'Hitting the gym',
			'Dance',
			'Gaming <small>(Hey, how did that get in here?)</small>'
		]
	},

	/**
	 * Conversation
	 */
	converse: {
		optText: 'I enjoy frequent intellectual conversation about:',
		suboptType: 'checkbox',
		subopts: [
			'science',
			'technology',
			'philosophy',
			'works of fiction',
			'politics',
			'zombie apocalypse preparedness'
		]
	},

	/**
	 * Reddit
	 */
	reddit: {
		optText: "The narwhal bacons at...",
		suboptType: 'radio',
		subopts: [
			'cheese',
			'half past noon',
			'midnight',
			'sea gulls!'
		]
	},

	/**
	 * Program
	 */
	program: {
		optText: 'I know! We should program a videogame together sometime, \
			Brandon!',
		suboptType: 'radio',
		subPrepend: '<p>What better way to spend a rainy Saturday \
			afternoon?</p>',
		subopts: [
			'I can program',
			'I can program a little bit',
			'I don\'t know how, but I\'d love to learn',
			'I don\'t know how, but I\'ll do the art and the story!',
			'I\'ll just go read a book over there. But you go on ahead.'
		]
	},

	/**
	 * Analogy time!
	 */
	analogy: {
		optText: 'Quiz me! And make it something I haven\'t seen in awhile.',
		suboptType: 'radio',
		subPrepend: '<p class="quote">Brandon says:</p> \
			<p class="quote">\
			nomenclature : dichotomy :: nihilism : _________<p>',
		subopts: [
			'What the...? I don\'t even...',
			'<em>*groan*</em>, I haven\'t seen those since highschool.',
			'That\'s the best you could come up with, Brandon? Lame.',
			'I know the answer! ...but why aren\'t there any real options?'
		]
	},

	/**
	 * "Play with your..."
	 * Innuendo? Nah...
	 * TODO: This is messy.
	 */
	play: {
		optText: 'I want to play with your...',
		suboptType: 'radio',
		subopts: [
			'Adorable dog \
				<span class="small">(<a \
				href="http://imgur.com/a/dV1S0">pics</a>)</span>',
			'Robot',
		],
		domAddCallback: function() {
			// Add option.
			$('#play ul').append('<li id="play-ps3-1">\
				<input type="radio" class="radio" name="play-subopt"\
					value="2"><span class="small">PS3...</span></li>');

			var install3 = function() {
				$('#play-ps3-2 input').change(function(){
					$('#play-ps3-2').append('<ul class="extra">\
						<li id="play-ps3-3">\
						<input type="radio" class="radio" name="" \
						value="0"> By moonlight and campfire...</li></ul>');
					install4();
				});
			},
			install4 = function() {
				$('#play-ps3-3 input').change(function(){
					$('#play-ps3-3').append('<ul class="extra">\
						<li id="play-ps3-4">\
						<input type="radio" class="radio" name="" \
							value="0"> <em>You can do that?</em> </li></ul>');
				});
			};

			// First suboption
			$('#play ul input').change(function(){
				switch($('#play .subopt input:checked').val()) {
					case '2':
						$('#play-ps3-1').append('<ul class="extra">\
							<li id="play-ps3-2">\
							<input type="radio" class="radio" name="" \
								value="0"> On the beach...</li></ul>');
						install3();
						break;
					default:
						$('#play-ps3-1 .extra').remove();
				}
			});
		}
	},

	/**
	 * Date
	 */
	/*date: {
		optText: 'I\'m not asking you out, Brandon (so don\'t you dare \
			get that impression!). Nevertheless, let me \
			<em><strike>describe</strike></em> select from among the \
			following items my &ldquo;ideal first date&rdquo;.',
		suboptType: 'radio',
		subopts: [
			'Typical meetup at a local coffee shop: caffeine intake, \
				<strike>complex mating ritual imposed on us by \
				society / pop culture</strike>, \
				<em><strike>yakkety yak</strike></em> \
				chitchat, and then we go our separate ways',
			'<strike>Dinner and a movie</strike> <small>(That\'s a \
				terrible first date idea! What if you\'re a boring creep?\
				I\'d be stuck with you for hours.)</small>',
			'Come up with something inventive and unique!',
			'These are all of the options? I\'m losing hope here,\
				Brandon...',
		]
	},*/

	/*
	 * TODO: Option -- "some final notes" checkbox
	 * 	* Pleasure to meet you
	 * 	* I enjoyed this page
	 * 	* etc.
	 */

	/**
	 * Nothing in common... really?!
	 */
	nothing: {
		optText: 'We don\'t have anything in common, Brandon. Sorry!',
		suboptType: 'none',
		subPrepend: '<p class="quote">Brandon says: \
			I\'m totally cool and respectful of that. If you have any \
			thoughts or opinions on my profile (however harsh), I\'d \
			love to hear!</p>'
	},

	/**
	 * Idiot
	 */
	idiot: {
		optText: 'You\'re an idiot!',
		suboptType: 'none',
		subPrepend: '<p class="quote">Brandon says: \
			You make Brandon sad :\'(</p>'
	}
}

