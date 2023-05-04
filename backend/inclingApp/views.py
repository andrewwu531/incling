

from inclingApp.serializers import TileSerializer, TaskSerializer
from .models import Tile, Task
from rest_framework import generics


class TileList(generics.ListCreateAPIView):
    queryset = Tile.objects.all()
    serializer_class = TileSerializer

class TaskList(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tile.objects.order_by('-launch_date')
    lookup_field = 'pk'
    serializer_class = TileSerializer

class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    lookup_field = 'id'
    serializer_class = TaskSerializer

class TileTasks(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        return self.queryset.filter(tile=self.kwargs['pk'])
