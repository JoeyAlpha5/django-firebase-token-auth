from django.db import models

# Create your models here.
class Car(models.Model):
    car_make = models.CharField(max_length=150)
    car_model = models.CharField(max_length=150)

    def __str__(self):
        return self.car_make