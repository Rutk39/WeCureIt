# Generated by Django 5.0.3 on 2024-03-20 01:51

import django.contrib.postgres.fields
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Doctor",
            fields=[
                (
                    "doctor_id",
                    models.BigAutoField(
                        auto_created=True, primary_key=True, serialize=False
                    ),
                ),
                ("first_name", models.CharField(max_length=254)),
                ("last_name", models.CharField(max_length=254)),
                ("speciality", models.CharField(max_length=254)),
                ("email", models.EmailField(max_length=254)),
                ("password", models.CharField(max_length=100)),
                ("phone_number", models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name="Facility",
            fields=[
                (
                    "facility_id",
                    models.BigAutoField(
                        auto_created=True, primary_key=True, serialize=False
                    ),
                ),
                ("name", models.CharField(max_length=254)),
                ("address", models.CharField(max_length=254)),
                ("rooms_no", models.IntegerField()),
                ("phone_number", models.IntegerField()),
                (
                    "speciality",
                    django.contrib.postgres.fields.ArrayField(
                        base_field=models.CharField(max_length=254), size=None
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Patient",
            fields=[
                (
                    "patient_id",
                    models.BigAutoField(
                        auto_created=True, primary_key=True, serialize=False
                    ),
                ),
                ("first_name", models.CharField(max_length=254)),
                ("last_name", models.CharField(max_length=254)),
                ("email", models.EmailField(max_length=254)),
                ("password", models.CharField(max_length=100)),
                ("address", models.CharField(max_length=254)),
                ("phone_number", models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name="Speciality",
            fields=[
                (
                    "speciality_id",
                    models.BigAutoField(
                        auto_created=True, primary_key=True, serialize=False
                    ),
                ),
                ("name", models.CharField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name="Doc_schedule",
            fields=[
                (
                    "schedule_id",
                    models.BigAutoField(
                        auto_created=True, primary_key=True, serialize=False
                    ),
                ),
                ("days_visiting", models.CharField(max_length=254)),
                ("facility_visiting", models.CharField(max_length=254)),
                ("visiting_hours", models.CharField(max_length=254)),
                (
                    "doctor_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="weCureIt.doctor",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Patient_record",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("first_name", models.CharField(max_length=254)),
                ("last_name", models.CharField(max_length=254)),
                ("medicine_prescribed", models.CharField(max_length=254)),
                ("disease", models.CharField(max_length=254)),
                ("comments", models.CharField(max_length=254)),
                (
                    "patient_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="weCureIt.patient",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="PatientCreditCard",
            fields=[
                (
                    "card_number",
                    models.IntegerField(
                        max_length=16, primary_key=True, serialize=False
                    ),
                ),
                ("card_holder_name", models.CharField(max_length=100)),
                ("cvv", models.IntegerField(max_length=3)),
                ("billing_address", models.CharField(max_length=254)),
                ("expiry_date", models.CharField(max_length=254)),
                (
                    "patient_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="weCureIt.patient",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Appointments",
            fields=[
                (
                    "appointment_id",
                    models.BigAutoField(
                        auto_created=True, primary_key=True, serialize=False
                    ),
                ),
                ("start_time", models.TimeField()),
                ("end_time", models.TimeField()),
                (
                    "schedule_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="weCureIt.doc_schedule",
                    ),
                ),
                (
                    "doctor_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="weCureIt.doctor",
                    ),
                ),
                (
                    "facility_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="weCureIt.facility",
                    ),
                ),
                (
                    "patient_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="weCureIt.patient",
                    ),
                ),
                (
                    "speciality_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="weCureIt.speciality",
                    ),
                ),
            ],
        ),
    ]