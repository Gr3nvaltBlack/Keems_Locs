from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth.models import User

from .serializers import UserRegisterSerializer, AuthUserSerializer

# region user
class UserViewset(viewsets.ViewSet):

    def create(self, request): # POST / user
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            User.objects.create_user(
                serializer.validated_data['username'],
                serializer.validated_data['email'],
                serializer.validated_data['password']
            )
            return Response({
                "message": "account created successfully"
            }, status=201)
        return Response(serializer.errors, status=400)
# endregion



# region profile user
class ProfileViewset(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    def list(self, request):
        serializer = AuthUserSerializer(request.user)
        return Response(serializer.data, status=200)
# endregion
