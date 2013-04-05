from django.db import models

# Create your models here.

class TestResult(models.Model):
    total_time = models.DecimalField(max_digits=10, decimal_places=3)
    errors = models.PositiveIntegerField()
    device_string = models.CharField(max_length=120)
    email = models.EmailField()
    age = models.PositiveIntegerField()

    def get_absolute_url(self):
        return '/'
