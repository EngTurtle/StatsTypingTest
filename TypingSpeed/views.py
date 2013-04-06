# Create your views here.
from forms import Testform
from models import TestResult
from django.views.generic.edit import CreateView

class ContactView(CreateView):
    template_name = 'type_test.html'
    model = TestResult


