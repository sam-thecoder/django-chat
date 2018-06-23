window.onload = function () {
	var app = new Vue({
	  delimiters: ['[[', ']]'],
	  el: '#app',
	  data: {
	    messages: [],
	    input: '',
	    status: true,
	    send_blank: false,
	    placeholder: 'Send a message to the chatbot...',
	  },
	  created: function() {
	  	
	  },
	  methods: {
		add_message: function() {
			if (this.input.length > 0) {
				var message = {
					'text': this.input,
					'user': true,
					'chat_bot': false,
				};
				this.messages.push(message);
				this.input = '';

				//just incase
				this.send_blank = false;
				this.placeholder = "Send a message to the chatbot...";
			} else {
				this.send_blank = true;
				this.placeholder = "Please put in some text";
			}

		},
		check_content: function() {
			if (this.input.length > 0) {
				this.send_blank = false;
				this.placeholder = "Send a message to the chatbot...";
			} else {
				this.send_blank = true;
				this.placeholder = "Please put in some text";
			}
		},
	  }
	});
};

	