from datetime import datetime
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Transaction
from .serializers import TransactionSerializer

class TrasactionsView(APIView):
    def get(self, request):
        data = Transaction.objects.filter(user=request.user)
        serialize_data = TransactionSerializer(data, many=True)
        return Response(serialize_data.data)
    
    def post(self, request):
        pass

class IncomeView(APIView):
    
    def get(self, request):
        data = Transaction.objects.filter(user=request.user,transaction_type="income")
        serialize_data = TransactionSerializer(data, many=True)
        return Response(serialize_data.data)
    
    def post(self, request):
        user = request.user
        date = datetime.strptime(request.data['date'], '%B %d, %Y')        
        income = Transaction.objects.create(
            user=user,
            amount=request.data['amount'],
            transaction_type="income",
            category=request.data['category'],
            description=request.data['description'],
            date=date
        )
        income.save()
        return Response({"message":"Income added successfully"})

    
@api_view(['GET'])
def get_categories(request):
    return Response(Transaction.INCOME_CATEGORIES)