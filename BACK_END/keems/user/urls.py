from django.urls import path, include
from rest_framework import routers

from .views import UserViewset, ProfileViewset

router = routers.DefaultRouter()
router.register(r'register', UserViewset, basename='register')
router.register(r'profile', ProfileViewset, basename='profile')


urlpatterns = [
    path('', include(router.urls))
]