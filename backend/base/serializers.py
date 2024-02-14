from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *




class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User 
        fields = ['id',"_id",'username','name', 'email',"isAdmin",]

    def get_name(self,obj):
        name= obj.first_name
        if name == "":
            name = obj.email
        return name

    def get__id(self,obj):
        return obj.id
    
    def get_isAdmin(self,obj):
        return obj.is_staff



class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username','email',"isAdmin",'name', 'token']

    def get_token(self, obj):
        token =RefreshToken.for_user(obj)
        return str(token.access_token)
    





class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = '__all__'




# Handle User model serialization separately if needed, as it's from django.contrib.auth.models

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'  # Include all fields for now

class ProductSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')  # Display username instead of full user object

    class Meta:
        model = Product
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())  # Use PrimaryKeyRelatedField for efficiency
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Review
        fields = '__all__'

class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    shipping_address = ShippingAddressSerializer(required=False)  # Optional nested serialization

    class Meta:
        model = Order
        fields = '__all__'

class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()  # Nested serialization

    class Meta:
        model = OrderItem
        fields = '__all__'


