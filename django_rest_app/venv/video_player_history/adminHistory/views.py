from django.shortcuts import render
from django.http import HttpResponse
from adminHistory.models import models, History
from adminHistory.serializers import HistorySerializer
from rest_framework.views import APIView
import json


# Create your views here.

class HistoryAPIView(APIView):
    def get(self, request):
        message = {}

        try:
            message["result"] = 1
            message["data"] = list(History.objects.values())
        except:
            message["result"] = 0

        return HttpResponse(json.dumps(message))

    def post(self, request):
        message = {
            "success": 0
        }
        json_data = json.loads(request.body);
        urlreceived = json_data["url"]

        try:
            obj_history = History(url=urlreceived)
            obj_history.save()
            message["success"] = 1
        except:
            message["success"] = 0

        return HttpResponse(json.dumps(message))








