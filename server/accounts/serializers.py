from rest_framework import serializers
from accounts.models import CoreUser, Account

class AccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = Account
        fields = ("id", "balance")

class CoreUserSerializer(serializers.ModelSerializer):
    account = AccountSerializer()
    class Meta:
        model = CoreUser
        fields = ("id", "username", "email", "account")