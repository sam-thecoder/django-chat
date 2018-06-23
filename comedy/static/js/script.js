window.onload = function () {
	var app = new Vue({
	  delimiters: ['[[', ']]'],
	  el: '#app',
	  data: {
	    messages: [{'text': 'Hey there', 'user': true, 'chat_bot': false}, {'text': 'brown cow', 'user': false, 'chat_bot': true}],
	    input: '',
	    status: true,
	  },
	  created: function() {
	  	
	  },
	  methods: {
		add_message: function() {
			var message = {
				'text': this.input,
				'user': true,
				'chat_bot': false,
			}
			this.messages.push()
		},
	  }
	});
};

	