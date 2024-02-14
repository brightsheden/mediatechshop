from django.urls import path

from base.views import product_views as views

urlpatterns = [
    path('products/', views.getProducts , name='get products'),
    path('<str:pk>/',views.getProduct, name='get products '),
    path('add/', views.AddProduct), 
    path('<int:pk>/update/', views.UpdateProduct), 
    path('<int:pk>/delete/', views.deleteProduct),  
    path('upload-image/', views.uploadImage),  
    path('<int:pk>/reviews/add/', views.createProductReviews), 
]


