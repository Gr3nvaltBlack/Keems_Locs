from django.db import models
from django.contrib.auth.models import User

# model d'article
class Article(models.Model):
    title = models.CharField(max_length=50)
    picture = models.ImageField()
    price = models.FloatField()
    description = models.TextField(max_length=1100)
    
    def __str__(self):
        return self.title


class Color(models.Model):
    name = models.CharField(max_length=30)
    hex_code = models.CharField(max_length=7, unique=True)  # e.g., #FFFFFF for white
    
    def __str__(self):
        return self.name



class Size(models.Model):
    size = models.IntegerField()

    def __str__(self):
        return "{}".format(self.size)

    def convert(self):
        return self.size * 2,54



class ArticleStock(models.Model):
    article = models.ForeignKey(Article, on_delete= models.CASCADE, related_name= 'articleStock')
    color = models.ForeignKey(Color, on_delete=models.CASCADE)
    size = models.ForeignKey(Size, on_delete= models.CASCADE)
    quantity = models.IntegerField(default= 1)



class Review(models.Model):
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='reviews')
    text = models.TextField(max_length=700)
    rating = models.PositiveBigIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
