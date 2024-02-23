from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Patient(models.Model):
    patient_id = models.BigAutoField(auto_created = True,
                  primary_key = True,
                  serialize = False)
    first_name = models.CharField(max_length=254)
    last_name = models.CharField(max_length=254)
    email = models.EmailField(max_length = 254)
    password = models.CharField(max_length=100)
    address = models.CharField(max_length=254)
    phone_number = models.IntegerField()

class PatientCreditCard(models.Model):
    patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
    card_number = models.IntegerField(max_length = 16, primary_key = True)
    card_holder_name =  models.CharField(max_length=100)
    cvv =  models.IntegerField(max_length = 3)
    billing_address = models.CharField(max_length=254)
    expiry_date = models.CharField(max_length=254)
    


class Patient_record(models.Model):
    patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=254)
    last_name = models.CharField(max_length=254)
    medicine_prescribed =  models.CharField(max_length=254)
    disease = models.CharField(max_length=254)
    comments = models.CharField(max_length=254)

class Doctor(models.Model):
    doctor_id = models.BigAutoField(auto_created = True,
                  primary_key = True,
                  serialize = False)
    first_name = models.CharField(max_length=254)
    last_name = models.CharField(max_length=254)
    speciality = models.CharField(max_length=254)
    email = models.EmailField(max_length = 254)
    password = models.CharField(max_length=100) 
    phone_number = models.IntegerField()

class Facility(models.Model):
    facility_id = models.BigAutoField(auto_created = True,
                  primary_key = True,
                  serialize = False)
    name = models.CharField(max_length=254)
    address = models.CharField(max_length=254)
    rooms_no = models.IntegerField()
    phone_number = models.IntegerField()
    speciality = ArrayField(models.CharField(max_length=254))


class Speciality(models.Model):
    speciality_id = models.BigAutoField(auto_created = True,
                  primary_key = True,
                  serialize = False)
    name = models.CharField(max_length=254)


class Doc_schedule(models.Model):
    schedule_id =  models.BigAutoField(auto_created = True,
                  primary_key = True,
                  serialize = False)
    doctor_id = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    days_visiting = models.CharField(max_length=254)
    facility_visiting = models.CharField(max_length=254)
    visiting_hours =  models.CharField(max_length=254)

class Appointments(models.Model):
    appointment_id =models.BigAutoField(auto_created = True,
                  primary_key = True,
                  serialize = False)
    patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
    facility_id = models.ForeignKey(Facility, on_delete=models.CASCADE)
    doctor_id = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    speciality_id = models.ForeignKey(Speciality, on_delete=models.CASCADE)
    schedule_id =  models.ForeignKey(Doc_schedule, on_delete=models.CASCADE)
    start_time = models.TimeField()
    end_time = models.TimeField()