$(function() {
	$('.send-btn').click(function(){
		var value = $('.text').val();

		if (value) {
			$('.no-message').addClass('hidden');
			$('.text').val('');

			var html_string = `<div class="card-body">${value}</div>`;

			$('.messages').append(html_string);

			var socket = new WebSocket('ws://127.0.0.1:8765');

                socket.onmessage = function(event) {
                    data = JSON.parse(event.data);

                    var html_string = `<div class="card col-md-6 chat-message offset-md-6">${data['response']}</div>`;
				
					$('.messages').append(html_string);
				};
		} else {
			$('.no-message').removeClass('hidden');
		}
	});
});