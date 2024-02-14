from django.db.models.signals import pre_save,post_save
from django.contrib.auth.models import  User

from django.utils.crypto import get_random_string
from django.core.mail import send_mail

def updateUser(sender, instance, **kwargs):
    user = instance
    if user.email != "":
        user.username = user.email
pre_save.connect(updateUser, sender=User)