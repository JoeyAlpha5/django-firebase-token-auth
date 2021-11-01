from django.contrib import admin
from .models import Car
# Register your models here.

class carAdmin(admin.ModelAdmin):
    list_display = ['id','car_make','car_model']
    ordering = ['id']

admin.site.register(Car,carAdmin)