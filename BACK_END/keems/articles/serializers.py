from rest_framework import serializers
from .models import Article, Color, Size, ArticleStock, Review
from user.serializers import UserReviewSerializer

class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = [
            'name',
            'hex_code',
        ]


class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = [
            'size',
        ]


class ArticleStockSerializer(serializers.ModelSerializer):
    color = ColorSerializer()
    size = SizeSerializer()
    class Meta:
        model = ArticleStock
        fields = [
            'color',
            'size',
            'quantity'
        ]


class ReviewSeriazlizer(serializers.ModelSerializer):
    user = UserReviewSerializer(read_only=True)
    class Meta:
        model = Review
        fields = [
            'user',
            'text',
            'rating',
            'created_at',
            'update_at'
        ]

class ReviewPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = [
            'text',
            'rating',
            'article',
            'created_at',
            'update_at' 
        ]


class ArticleSerializer(serializers.ModelSerializer):
    articleStock = ArticleStockSerializer(many=True)
    reviews = ReviewSeriazlizer(many=True)

    stock = serializers.SerializerMethodField()

    def get_stock(self, obj: Article):
        stocks = ArticleStock.objects.filter(article_id=obj.id)
        for stock in stocks:
            if stock.quantity > 0:
                return True
        return False
            
    class Meta:
        model = Article
        fields = [
            'id',
            'title',
            'picture',
            'stock',
            'price',
            'description',

            'articleStock',
            'reviews',
        ]
