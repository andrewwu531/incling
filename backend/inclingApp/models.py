from django.db import models


"""
   1 Tile has M Task
   1 Task can only belong to 1 Tile
"""

STATUS = [
    ("LIVE", "LIVE"),
    ("DRAFTS", "Drafts"),
    ("PENDING", "Pending"),
    ("ARCHIVED", "Archived"),
]

TYPE = [
    ("SURVEY", "Survey"),
    ("DISCUSSION", "Discussion"),
    ("DIARY", "Diary"),
    ("OTHERS", "Others"),
]

PRIORITY = [
    ("HIGH", "High"),
    ("MEDIUM", "Medium"),   
    ("LOW", "Low"),
]

class Tile(models.Model):

    tile_name = models.CharField(max_length=35, unique=True)
    launch_date = models.DateField()
    status = models.CharField(max_length=10, choices=STATUS, default="DRAFTS")
    participant_number = models.CharField(max_length=20, default=0)

    def formatted_date(self):
        return self.launch_date.strftime("%Y-%m-%d")

    def __str__(self):
        return str(self.pk) + " - " + self.tile_name


class Task(models.Model):

    tile = models.ForeignKey(Tile, on_delete=models.CASCADE)
    task_name = models.CharField(max_length=35, unique=True)
    task_description = models.CharField(max_length=300)
    participant_number = models.CharField(max_length=20, default=0)
    order_field = models.CharField(max_length=10, choices=PRIORITY, default="HIGH")
    type = models.CharField(max_length=10, choices=TYPE, default="SURVEY")

    def __str__(self):
        return str(self.tile) + " - " + self.task_name
