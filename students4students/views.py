from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework.views import APIView
from rest_framework import status

from .models import User, Degree, Faculty

from .serializer import LoginUserDataSerializer, \
    RegisterUserSerializer, \
    DegreeSerializer, \
    UserSerializer, \
    FacultySerializer

# Create your views here.


class LoginView(APIView):
    def get(self, request):
        # TODO send login frontend page
        pass

    """
    the post method defines the login mechanism where the email and password 
    of the user whos trying to log in is processed in order to verify the users
    identity.
    """

    def post(self, request):
        login_serializer = LoginUserDataSerializer(data=request.data)

        # check the request data format
        validation = login_serializer.validate(data=request.data)

        if validation['code'] < 0:
            return Response(
                {"code": validation['code'],
                    "message": validation['message']},
                status=status.HTTP_400_BAD_REQUEST
            )

        # fetch the user with the given email from the database
        # we can be sure that there is only one user with this email
        user = User.objects.filter(email=request.data.get('email'))

        # if user with the given email is not a registered user
        if not user.exists():
            return Response(
                {"code": -4, "message": "user with given email does not exist."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # check the user's password
        if user[0].password != request.data.get('password'):
            return Response(
                {"code": -5, "message": "given password is not correct."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # TODO return the main page to the successfully logged in user
        # and set user_id as cookie
        return Response(
            {"code": 0, "message": "successfully logged in."}
        )


class DegreeView(APIView):
    def get(self, request):
        # enable the possibility to get information about a certain degree
        degree_filter = request.GET.get('id')

        # enable the possibility to filter certrain faculty
        faculty_filter = request.GET.get('faculty_id')

        degree_queryset = None

        if degree_filter is not None:
            degree_queryset = Degree.objects.filter(id=degree_filter)
        elif faculty_filter is not None:
            degree_queryset = Degree.objects.filter(faculty_id=faculty_filter)
        else:
            degree_queryset = Degree.objects.all()

        serializer = DegreeSerializer(degree_queryset, many=True)
        return Response(serializer.data)


class FacultyView(APIView):
    def get(self, request):
        # enable the possibility to get information about a certain degree
        faculty_filter = request.GET.get('id')

        faculty_queryset = None

        if faculty_filter is not None:
            faculty_queryset = Faculty.objects.filter(id=faculty_filter)
        else:
            faculty_queryset = Faculty.objects.all()

        serializer = FacultySerializer(faculty_queryset, many=True)
        return Response(serializer.data)


class RegisterView(APIView):
    def post(self, request):
        register_serializer = RegisterUserSerializer(data=request.data)

        validation = register_serializer.validate(data=request.data)

        if validation['code'] < 0:
            return Response(
                {"code": validation['code'],
                 "message": validation['message']}
            )

        # check if given user already exists in our database
        user = User.objects.filter(email=request.data.get('email'))

        if user.exists():
            return Response(
                {"code": -10, "message": "user already exists."}
            )

        # save new user inside the database and return the main page
        user_model_instance = User()
        user_model_instance.username = request.data['username']
        user_model_instance.first_name = request.data['first_name']
        user_model_instance.surname = request.data['surname']
        user_model_instance.age = request.data['age']

        degree_instance = Degree.objects.get(id=request.data.get('degree'))
        user_model_instance.degree = degree_instance

        user_model_instance.semester = request.data['semester']
        user_model_instance.partner_company = request.data['partner_company']
        user_model_instance.email = request.data['email']
        user_model_instance.password = request.data['password']

        user_model_instance.save()

        return Response(
            {"code": 1, "message": "successfully registred new user."}
        )


class UserView(APIView):
    def get(self, request):
        user_filter = request.GET.get('id')

        # only accept the request if id parameter is set
        if user_filter is None:
            return Response(
                {"code": -20, "message": "can only fetch specific user. Add id."}
            )

        user = User.objects.filter(id=user_filter)
        serializer = UserSerializer(user, many=True)
        return Response(serializer.data)
