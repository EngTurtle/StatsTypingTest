from django.db import models
from django.contrib import admin

# Create your models here.

class TestResult(models.Model):
    total_time = models.DecimalField(max_digits=10, decimal_places=3, null=True)
    errors = models.PositiveIntegerField(null=True)
    device_string = models.CharField(max_length=120,null=True)
    email = models.EmailField(null=True)
    age = models.PositiveIntegerField(null=True)
    gender = models.CharField(max_length=12,null=True)

    def get_absolute_url(self):
        return '/'

    def __unicode__(self):
        return u'Test by' + self.email

admin.site.register(TestResult)
