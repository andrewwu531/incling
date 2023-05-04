from django.urls import path

from .views import TileList, TaskList, TileDetail, TaskDetail, TileTasks

app_name = 'inclingApp'

urlpatterns = [
    path('tiles/', TileList.as_view()),
    path('tasks/', TaskList.as_view()),
    path('tile<int:pk>/', TileDetail.as_view()),
    path('task<int:id>/', TaskDetail.as_view()),
    path('tile<int:pk>/tasks', TileTasks.as_view()),
]