from rest_framework import serializers
from django.contrib.auth.models import User

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'password',
        ]

class AuthUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username',
            'email',
        ]

class UserReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username',
        ]