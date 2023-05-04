from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('inclingApp/', include('inclingApp.urls')),
    path('admin/', admin.site.urls),
]