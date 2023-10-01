from django.urls import path
from .views import RegisterView, \
    LoginView, \
    DegreeView, \
    UserView, \
    FacultyView

urlpatterns = [
    path('register', RegisterView.as_view(), name='register'),
    path('login', LoginView.as_view(), name='login'),
    path('degrees', DegreeView.as_view(), name="degree-info"),
    path('user', UserView.as_view(), name='user-info'),
    path('faculty', FacultyView.as_view(), name='faculty-info'),
]
