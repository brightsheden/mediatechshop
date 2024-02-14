from django.urls import path
from ..views import user_views as views

urlpatterns = [
    path('', views.getUser),  # Route for retrieving the current user's information
    path('update/', views.UpdateUser),  # Route for updating the current user's profile
    path('allusers/', views.getUsers),  # Route for listing all users (admin only)
    path('<int:pk>/', views.getUserById),  # Route for retrieving a specific user by ID (admin only)
    path('<int:pk>/update/', views.updateUser),  # Route for updating a specific user (admin only)
    path('<int:pk>/delete/', views.deleteUser),  # Route for deleting a specific user (admin only)
]