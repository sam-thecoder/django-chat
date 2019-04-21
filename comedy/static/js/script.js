$(function() {
	function get_response() {
		var value = $('.text').val();

		if (value.length > 0) {
			$('.no-message').addClass('hidden');
			$('.text').val('');

			var html_string = `<div class="card col-md-6 user-message"><div class="card-body">${value}</div></div>`;

			$('.messages').append(html_string);

			var socket = new WebSocket('ws://127.0.0.1:8765');

			socket.onmessage = function(event) {
				data = JSON.parse(event.data);

				var html_string = `<div class="card col-md-6 chat-message offset-md-6"><div class="card-body">${data['response']}</div></div>`;
			
				$('.messages').append(html_string);
				$('.text').val('');
			};

			var data = {'text': value};

			socket.onopen = function(event) {
				socket.send(JSON.stringify(data));
			};
		} else {
			$('.no-message').removeClass('hidden');
			$('.text').val('');
		}
	}

	$('.send-btn').click(function(){
		get_response();
	});

	$('.text').keypress(function (e) {
		var key = e.which;
		if(key == 13)  // the enter key code
		 {
			$('.send-btn').click();
			$('.text').val('');
		 }
	   });   
});