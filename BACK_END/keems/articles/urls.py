from django.urls import path, include
from rest_framework import routers

from .views import ColorViewSet, ArticleViewSet, SizeViewSet, AuthViewSet, ReviewViewSet

router = routers.DefaultRouter()
router.register(r'auth', AuthViewSet, basename='auth')

router.register(r'colors', ColorViewSet, basename='color')
router.register(r'articles', ArticleViewSet, basename='article')
router.register(r'sizes', SizeViewSet, basename='sizes')
router.register(r'reviews', ReviewViewSet, basename='reviews')

urlpatterns = [
    path('', include(router.urls))
]