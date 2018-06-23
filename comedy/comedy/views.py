from django.shortcuts import render, render_to_response
from django.http import HttpResponse
import json

from chatterbot import ChatBot

chatbot = ChatBot(
    'Ron Obvious',
    trainer='chatterbot.trainers.ChatterBotCorpusTrainer'
)

# Train based on the english corpus
chatbot.train("chatterbot.corpus.english")

def get_response(request):
	response = {'status': None}

    if request.method == 'POST':
        data = json.loads(request.body)
        message = data['message']

        chat_response = chatbot.get_response(message).text
        response['message'] = {'text': chat_response, user: False, chat_bot: True}
        response['status'] = 'ok'

    else:
        response['error'] = 'no post data found'

    return HttpResponse(
            json.dumps(response),
            content_type="application/json"
        )


def home(request, template_name="home.html"):
	context = {'title': 'Chatbot Version 1.0'}
	return render_to_response(template_name, context)
