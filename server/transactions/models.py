from django.db import models
from accounts.models import CustomUser

class Transaction(models.Model):
    TRANSACTION_TYPES = (
        ('income', 'Income'),
        ('expense', 'Expense'),
    )

    INCOME_CATEGORIES = [
        ('salary', 'Salary'),
        ('business', 'Business'),
        ('investment', 'Investment Returns'),
        ('rental', 'Rental Income'),
        ('bonus', 'Bonuses'),
        ('gifts', 'Gifts'),
        ('other', 'Other Income'),
    ]

    EXPENSE_CATEGORIES = [
        ('housing', 'Housing'),
        ('utilities', 'Utilities'),
        ('groceries', 'Groceries'),
        ('transportation', 'Transportation'),
        ('healthcare', 'Healthcare'),
        ('insurance', 'Insurance'),
        ('debt', 'Debt Payments'),
        ('entertainment', 'Entertainment'),
        ('dining', 'Dining Out'),
        ('clothing', 'Clothing'),
        ('education', 'Education'),
        ('savings', 'Savings'),
        ('charity', 'Charity'),
        ('personal', 'Personal Care'),
        ('travel', 'Travel'),
        ('subscriptions', 'Subscriptions'),
        ('miscellaneous', 'Miscellaneous'),
    ]
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='transactions')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_type = models.CharField(max_length=10, choices=TRANSACTION_TYPES)
    category = models.CharField( max_length=50,choices=INCOME_CATEGORIES + EXPENSE_CATEGORIES)
    description = models.TextField(null=True, blank=True)
    date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.category} - {self.amount} ({self.transaction_type})"
