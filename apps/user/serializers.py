from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from django.contrib.auth import get_user_model
user = get_user_model()

class UserCreateSerializers(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = user
        fields =(
              'id',
            'email',
            'first_name',
            'last_name',
            'get_full_name',
            'get_short_name'
        )
    