from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TransactionViewSet, get_categories


router = DefaultRouter()
router.register(r'', TransactionViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('categories', get_categories),
]