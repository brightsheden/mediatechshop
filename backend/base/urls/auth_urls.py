from django.urls import path
from base.views import auth_views as views


urlpatterns = [
        path('login/',views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
        path('register/', views.registerUser, name="register-user"),
     
        path('confirmemailpasscode/', views.confirmEmailWithPasscode, name="confirm mail"),
        path('forgot-password/', views.requestForgotPasswordPasscode, name='request-forgot-password-passcode'),
        path('change-password/', views.UserChangePassword, name='reset-password'),

]
