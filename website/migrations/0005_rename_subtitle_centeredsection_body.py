# Generated by Django 4.1.5 on 2023-02-03 22:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0004_alter_hero_subtitle_alter_hero_title_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='centeredsection',
            old_name='subtitle',
            new_name='body',
        ),
    ]