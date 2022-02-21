from urllib import response
from rest_framework.views import APIView
from rest_framework.response import Response


class ShopLocationsAPIView(APIView):
    """Shops api view"""

    def get(self, *args, **kwargs):
        """Return list of shop images with location."""
        try:
            shops = [
                {
                    "location": "Portland",
                    "address": "123 Portland Dr.",
                },
                {
                    "location": "Astoria",
                    "address": "123 Astoria Dr.",
                },
                {
                    "location": "",
                    "address": "",
                },
            ]

            response = {"shops": shops}

            return Response(response, status=200)

        except Exception as exc:
            return Response("Unable to load images", status=500)
