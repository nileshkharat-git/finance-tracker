from django.urls import path
from .views import IncomeView, get_categories,TrasactionsView


urlpatterns = [
    path('', TrasactionsView.as_view()),
    path('income/', IncomeView.as_view()),
    path('categories/', get_categories),

]