from django.urls import path
from . import views
urlpatterns = [
path('/states',views.states,name='states'),
path('',views.home,name='home'),
path('/get_weather',views.get_weather,name='get_weather'),
path('/cityList',views.get_city_list,name='cityList'),
path('/add_city',views.create_city,name='add_city'),
path('/city_form',views.city_form,name='city_form')
]