from django.urls import path
from accounts import views

urlpatterns = [
    path("register_user/", views.register_user, name="regiter_user"),
    path("get_users/", views.get_users_with_balance, name="get_users")
   
]
