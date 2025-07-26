from django.contrib import admin
from .models import CoreUser, Account

@admin.register(CoreUser)
class CorreUserAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "is_staff")

@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    list_display = ("pk", "balance", "user")