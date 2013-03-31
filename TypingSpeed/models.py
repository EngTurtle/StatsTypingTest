from django.db import models

# Create your models here.

class TestResult(models.Model):
    total_time = models.DecimalField(max_digits=10, decimal_places=3)
    errors = models.PositiveIntegerField()
