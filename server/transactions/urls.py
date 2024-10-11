from django.urls import path
from .views import *


urlpatterns = [
    path('', TrasactionsView.as_view()),
    path('income/', IncomeView.as_view()),
    path('expense/', ExpenseView.as_view()),
    path('income/categories/', get_income_categories),
    path('expense/categories/', get_expense_categories),

]