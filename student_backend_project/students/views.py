from django.shortcuts import render
from django.http import HttpResponse
import json

from django.views.decorators.csrf import csrf_exempt
from students.serializer import StudentSerializer
from students.models import StudentModel
from django.db.models import Q

# Create your views here.
@csrf_exempt
def viewAll(request):
    if request.method == 'POST':
        studentList=StudentModel.objects.all()
        serialize_data =StudentSerializer(studentList,many=True)
    
        return HttpResponse(json.dumps(serialize_data.data))


@csrf_exempt
def addStudent(request):
    if request.method == 'POST':
        #for read the data 
        received_data = json.loads(request.body)
        print(received_data)


        serializer_check=StudentSerializer(data=received_data)
        if serializer_check.is_valid():
            serializer_check.save()
            return HttpResponse(json.dumps({"status": "success"}))
        else:
            return HttpResponse(json.dumps({"status": "failed"}))
        
@csrf_exempt
def SearchStudent(request):
    if request.method == 'POST':
        received_data = json.loads(request.body)
        getAdmno=received_data["admno"]
        data=list(StudentModel.objects.filter(Q(admno__icontains=getAdmno)).values())
        return HttpResponse(json.dumps(data))
    
@csrf_exempt
def DeleteStudent(request):
    if request.method == 'POST':
        received_data = json.loads(request.body)
        getAdmno=received_data["admno"]
        data=list(StudentModel.objects.filter(Q(admno__exact=getAdmno)).delete())
        return HttpResponse(json.dumps(data))
    

@csrf_exempt
def UpdateStudent(request):
    if request.method == 'POST':
        received_data = json.loads(request.body)
        getAdmno=received_data["admno"]
        data=list(StudentModel.objects.filter(Q(admno__exact=getAdmno)).delete(admno=getAdmno))
        return HttpResponse(json.dumps(data))

       
