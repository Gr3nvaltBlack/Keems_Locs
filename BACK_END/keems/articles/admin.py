from django.contrib import admin
from .models import Article, Color, Size, ArticleStock, Review


class ArticleAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'title',
        'price',
    )
admin.site.register(Article, ArticleAdmin)

class ColorAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'hex_code',
    )
admin.site.register(Color, ColorAdmin)

class SizeAdmin(admin.ModelAdmin):
    list_display = (
        'size',
    )
admin.site.register(Size, SizeAdmin)

class ArticleStockAdmin(admin.ModelAdmin):
    list_display = (
        'article',
        'color',
        'size',
        'quantity',
    )
admin.site.register(ArticleStock, ArticleStockAdmin)

class ReviewAdmin(admin.ModelAdmin):
    list_display = (
        'user',
        'article',
        'text',
        'rating',
    )
admin.site.register(Review, ReviewAdmin)
