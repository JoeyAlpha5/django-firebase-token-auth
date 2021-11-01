from django.urls import path
from .views import getCars

urlpatterns = [
    path('', getCars),
]
