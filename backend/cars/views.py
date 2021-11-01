from django.shortcuts import render
from django.http import JsonResponse
from django.core.serializers import serialize
import firebase_admin
from .models import Car
from firebase_admin import credentials
from firebase_admin import auth
from django.conf import settings
# Create your views here.
firebase_creds = credentials.Certificate(settings.FIREBASE_CONFIG)
firebase_app = firebase_admin.initialize_app(firebase_creds)

def getCars(request):
    # get token
    authorization_header = request.META.get('HTTP_AUTHORIZATION')
    token = authorization_header.replace("Bearer ","")
    # verify the token
    try:
        decoded_token = auth.verify_id_token(token)
        firebase_user_id = decoded_token['user_id']
        cars = Car.objects.all()
        response_object = {"data": serialize("json", cars)}
    except:
        return JsonResponse({"data":"user token is invalid"})

    return JsonResponse(response_object)
    