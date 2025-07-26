from django.db import models
from django.contrib.auth.models import User

class CoreUser(User):
    phone_number = models.CharField(max_length = 10, unique = True)
    bank_account_number = models.CharField(max_length=20, unique = True)
    ifsc_code = models.CharField(max_length = 10)

class Account(models.Model):
    user = models.OneToOneField(CoreUser, on_delete=models.CASCADE, related_name='account')
    balance = models.FloatField(default=0.0)


