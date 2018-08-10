# Generated by Django 2.0.6 on 2018-08-10 18:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('books', '0003_auto_20180712_1813'),
    ]

    operations = [
        migrations.CreateModel(
            name='BookChat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('msg', models.CharField(max_length=500)),
                ('sent', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AlterField(
            model_name='books',
            name='slug',
            field=models.CharField(default='YykK5Ioblya9', max_length=12),
        ),
        migrations.AddField(
            model_name='bookchat',
            name='book_slug',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='books.Books'),
        ),
        migrations.AddField(
            model_name='bookchat',
            name='receiver',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
