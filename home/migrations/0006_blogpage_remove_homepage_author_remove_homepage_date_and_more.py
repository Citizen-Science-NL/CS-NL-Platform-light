# Generated by Django 4.1.5 on 2023-01-15 07:25

from django.db import migrations, models
import django.db.models.deletion
import wagtail.blocks
import wagtail.fields
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailcore', '0078_referenceindex'),
        ('home', '0005_rename_blogpage_homepage'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.page')),
                ('author', models.CharField(max_length=255)),
                ('date', models.DateField(verbose_name='Post date')),
                ('body', wagtail.fields.StreamField([('heading', wagtail.blocks.CharBlock(form_classname='title')), ('paragraph', wagtail.blocks.RichTextBlock()), ('image', wagtail.images.blocks.ImageChooserBlock())], use_json_field=True)),
            ],
            options={
                'abstract': False,
            },
            bases=('wagtailcore.page',),
        ),
        migrations.RemoveField(
            model_name='homepage',
            name='author',
        ),
        migrations.RemoveField(
            model_name='homepage',
            name='date',
        ),
        migrations.AlterField(
            model_name='homepage',
            name='body',
            field=wagtail.fields.RichTextField(blank=True),
        ),
    ]
