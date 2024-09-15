from django.contrib import admin
from .models import Transaction

class TransactionAdmin(admin.ModelAdmin):
    model = Transaction
    list_display = ('amount', 'transaction_type', 'category', 'date')
    search_fields = ('amount', 'transaction_type')



admin.site.register(Transaction, TransactionAdmin)
