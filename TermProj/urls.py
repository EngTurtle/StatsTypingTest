from django.conf.urls import patterns, include, url
from django.views.generic import FormView
from TypingSpeed.forms import TestResult

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', FormView.as_view(template_name="home.html",form_class=TestResult)),
    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)
