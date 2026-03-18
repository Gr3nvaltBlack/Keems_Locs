from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination

from .models import Article, Color, Size, Review
from .serializers import ArticleSerializer, ColorSerializer, SizeSerializer, ReviewSeriazlizer


class ArticlePagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = 'page_size'


class AuthViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request):
        return Response({'ok': True, "userId": request.user.id})


# region Article
class ArticleViewSet(viewsets.ViewSet):   

    # Read Articles
    def list(self, request):  # GET /articles
        qs = Article.objects.all()
        pagination = ArticlePagination()
        page = pagination.paginate_queryset(qs, request)
        serializer = ArticleSerializer(page, many=True)
        return pagination.get_paginated_response(
            serializer.data
        )

    def retrieve(self, request, pk=None):  # GET /article/{pk}
        article = Article.objects.get(pk=pk)
        serializer = ArticleSerializer(article)
        return Response(serializer.data)

    # Create Articles
    def create(self, request):  # POST /articles
        pass
    
    # Update Article
    def update(self, request, pk=None):  # PUT /articles/{pk}
        pass

    # Delete an Article his pk or id
    def destroy(self, request, pk=None):  # DELETE /colors/{pk}
        pass
# endregion





# region Color
class ColorViewSet(viewsets.ViewSet):
    # Read Operations
    def list(self, request):  # GET /colors
        colors = Color.objects.all()
        serializer = ColorSerializer(colors, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):  # GET /colors/{pk}
        color = Color.objects.get(pk=pk)
        serializer = ColorSerializer(color)
        return Response(serializer.data)

    # Write Operations
    def create(self, request):  # POST /colors
        serializer = ColorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
    def update(self, request, pk=None):  # PUT /colors/{pk}
        color = Color.objects.get(pk=pk)
        serializer = ColorSerializer(color, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):  # DELETE /colors/{pk}
        color = Color.objects.get(pk=pk)
        color.delete()
        return Response(status=204)
# endregion





# region Size
class SizeViewSet(viewsets.ViewSet):
    # Read Operations
    def list(self, request):
        sizes = Size.objects.all()
        serializer = SizeSerializer(sizes, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        size = Size.objects.get(pk=pk)
        serializer = SizeSerializer(size)
        return Response(serializer.data)
    
    # Write Operations
    def create(self, request):
        serializer = SizeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def update(self, request, pk=None):
        size = Size.objects.get(pk=pk)
        serializer = SizeSerializer(size, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        size = Size.objects.get(pk=pk)
        size.delete()
        return Response(status=204)
# endregion





# region review
class ReviewViewSet(viewsets.ViewSet):
    # Read reviews
    def get(self, request):
        article_id = request.GET.get('article_id', None)
        reviews = Review.objects.filter(article_id=article_id)
        serializer = ReviewSeriazlizer(reviews, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        review = Review.objects.get(pk=pk)
        serializer = ReviewSeriazlizer(review)
        return Response(serializer.data)
    
    # Write Operations
    def create(self, request):
        serializer = ReviewSeriazlizer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
    # # Update Review
    # def update(self, request, pk=None):
    #     review = Review.objects.get(pk=pk)
    #     serializer = ReviewSeriazlizer(review, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=200)
    #     return Response(serializer.errors, status=400)

    # def destroy(self, request, pk=None):
    #     review = Review.objects.get(pk=pk)
    #     review.delete()
    #     return Response(status=204)
# endregion
