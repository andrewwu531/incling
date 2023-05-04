from rest_framework import serializers
from .models import Tile, Task

class TileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tile
        fields = ['pk', 'tile_name', 'launch_date', 'status', 'participant_number']

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'tile', 'task_name', 'task_description', 'participant_number', 'order_field', 'type']

