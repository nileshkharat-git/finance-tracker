from rest_framework import serializers
from .models import Transaction

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['id', 'user', 'amount', 'transaction_type', 'category', 'description', 'date', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']

    def validate_amount(self, value):
        if value <= 0:
            raise serializers.ValidationError("The transaction amount must be greater than zero.")
        return value

    def validate(self, data):
        if data['transaction_type'] not in ['income', 'expense']:
            raise serializers.ValidationError("Transaction type must be either 'income' or 'expense'.")
        return data
