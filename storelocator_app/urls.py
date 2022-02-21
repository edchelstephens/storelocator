from django.urls import path

from storelocator_app.views import ShopLocationsAPIView

urlpatterns = [
    path("locations/", ShopLocationsAPIView.as_view(), name="shop_locations"),
]
