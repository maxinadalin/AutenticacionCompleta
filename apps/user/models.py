from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.

class UserAccountManager(BaseUserManager):
    def create_user(self,email,password = None, **extra_fields):
        
        if not (email):
            raise ValueError("debe ingresar un email")
        
        # lo utilizamos para poder convertir todo a minusculas por ejemplo
        email = self.normalize_email(email)
        # creamos una instancia del usuario y le pasamos el mail
        user = self.model(email=email, **extra_fields)
        
        # le agregamos la contraseña
        user.set_password(password)
        user.save()
        
        
        return user
    
    def create_superuser(self,email,password,**extra_field):
        # lo que hacemos aca es llamar a la instancia create_user asi cremos el usuario bajo los mismo terminos
        user = self.create_user(email,password,**extra_field)
        
        # le decimos que es super usuario
        user.is_superuser = True
        # le decimos que es staff
        user.is_staff = True
        user.save()
        
        return user
    
class UserAccount(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    # aca llamamos a la clase de arriba asi la adopta como clase que va a manejar toda esta clase
    objects = UserAccountManager()
    
    # aca lo que hacemos es decirle a django cual va a ser el usuario y esto se hace a travez de permission mixim
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name","last_name"]
    
    def get_full_name(self):
        return self.first_name + ' ' + self.last_name

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.email