from django.conf.urls.static import  static
from django.conf import settings
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('base.urls.auth_urls') ) ,
    path('api/product/', include('base.urls.product_urls')),
    path('api/user/', include('base.urls.user_urls'))

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
