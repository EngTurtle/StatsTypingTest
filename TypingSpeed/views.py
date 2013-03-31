# Create your views here.
from models import TestResult
from django.views.generic.edit import FormView

class ContactView(FormView):
    template_name = 'home.html'
    form_class = TestResult
    success_url = '/thanks/'

    def form_valid(self, form):
        # This method is called when valid form data has been POSTed.
        # It should return an HttpResponse.
        form.send_email()
        return super(ContactView, self).form_valid(form)

