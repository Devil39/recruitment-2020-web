# Generated by Django 2.2.7 on 2019-12-06 20:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('question_id', models.IntegerField(primary_key=True, serialize=False)),
                ('question', models.TextField()),
            ],
        ),
    ]