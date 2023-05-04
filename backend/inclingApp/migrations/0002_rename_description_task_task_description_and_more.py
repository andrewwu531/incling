# Generated by Django 4.1.7 on 2023-04-30 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inclingApp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='description',
            new_name='task_description',
        ),
        migrations.RemoveField(
            model_name='task',
            name='participant_name',
        ),
        migrations.AddField(
            model_name='task',
            name='participant_number',
            field=models.CharField(default=0, max_length=20),
        ),
        migrations.AddField(
            model_name='tile',
            name='participant_number',
            field=models.CharField(default=0, max_length=20),
        ),
        migrations.AlterField(
            model_name='task',
            name='order_field',
            field=models.CharField(choices=[('HIGH', 'High'), ('MEDIUM', 'Medium'), ('LOW', 'low')], default='HIGH', max_length=10),
        ),
        migrations.AlterField(
            model_name='tile',
            name='status',
            field=models.CharField(choices=[('ALL ACTIVE', 'All Active'), ('OFFICIAL', 'Official'), ('DRAFTS', 'Drafts'), ('PENDING', 'Pending'), ('ARCHIVED', 'Archived')], default='DRAFTS', max_length=10),
        ),
    ]
