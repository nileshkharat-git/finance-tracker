from django.db import transaction
from django.db.models import Prefetch
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from accounts.models import CoreUser
from accounts.serializers import CoreUserSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    request_data = request.data

    try:
        core_user = CoreUser.objects.filter(email = request_data['email']).first()
            
        if core_user:
            return Response({"message":"User already exists"}, status=status.HTTP_400_BAD_REQUEST)
        
        with transaction.atomic():
            
            core_user = CoreUser.objects.create_user(
                username=request_data.get('username'),
                email=request_data.get('email'),
                password=request_data.get('password'),
                phone_number = request_data.get('phone_number'),
                bank_account_number = request_data.get('bank_account_number'),
                ifsc_code = request_data.get('ifsc_code')
                )
            
            response = {
                "id":core_user.id,
                "username":core_user.username,
            }

            return Response(response, status=status.HTTP_201_CREATED)
    except Exception as e:
        
        return Response({"message":str(e)}, status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_users_with_balance(request):
    users = CoreUser.objects.prefetch_related(Prefetch('account'))
    users = CoreUserSerializer(users, many=True)
    return Response(users.data, status=status.HTTP_200_OK)