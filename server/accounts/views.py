from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import CustomUser
from .serializers import CustomUserCreateSerializer

class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserCreateSerializer
    permission_classes = [AllowAny]

    