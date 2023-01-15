# Generated by Django 4.1.5 on 2023-01-15 10:49

from django.db import migrations
import django.db.models.deletion
import modelcluster.fields


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0010_rename_pagepagegalleryimage_galleryimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='galleryimage',
            name='page',
            field=modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='gallery_images', to='home.contentpage'),
        ),
    ]
