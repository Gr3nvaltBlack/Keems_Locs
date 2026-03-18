# keems_Locs - BACK-END

This folder contains the backend of an e-commerce website designed for selling products.
It includes all the business logic that defines the behavior and operation of our platform, as well as the data management logic that ensures the organization and consistency of the stored information.
The application logic is developed in **Python + Django**, and **SQLite** for structured and efficient data storage.


## 🛠️ Technologies used
- [PYTHON] → versatile programming language, used on the server side to develop web applications,   scripts and automation tools.
- [DJANGO] → Complete and structured Python web framework, allowing for the rapid creation of web applications and APIs (route management, security, authentication, integrated ORM).
- [SQLITE] → lightweight relational database, integrated directly into the project (stored in a file), ideal for development and small projects.
- [DJANGO ORM] → Django's ORM (Object-Relational Mapping), which allows you to define models as Python classes and interact with the database without writing raw SQL.


## ⚙️ CONFIGURATION

### Installation steps
1. **Create a Python virtual environment:**
```bash
    python -m venv .venv
```

2. **Enable a Python virtual environment:** </br>
Windows:
```bash
    .\.venv\Scripts\Activate.ps1
```
Linux:
```bash
    source ./.venv/bin/activate
```

3. **Create an app:**
```bash
    python manage.py startapp "app_name"
```

4. **Create a user with administrator rights:**
```bash
    python manage.py createsuperuser
```

5. **For creating Web APIs:**
```bash
    pip install djangorestframework
```

6. **For filtering support:**
```bash
    pip install django-filter
```

7. **Install the dependencies:**
```bash
    pip install -r requirements.txt
```

### Migration Stages
1. **Generate files to inform the database of the changes made in model.py:**
```bash
    python manage.py makemigrations "file_name"
```

2. **To apply the model files to the database :**
```bash
    python manage.py migrate
```

### 🌳 Default tree structure

<pre>
backend/
│
├── 📁 .venv/
│   └── 📁 .../
|
└── 📁 keems/
    ├── 📁 keems/
        └── 📁 __pycache__/
        ├── 📄 _init_.py
        ├── 📄 asgi.py
        ├── 📄 seetings.py
        ├── 📄urls.py
        └── 📄 wsgi.py

    ├── 📄 db.sqlite3
    └── 📄 manage.py
</pre>




### 🌿 Tree extension
<pre>
📁 keems/
    ├── 📁 keems/...
    ├── 📁 article/
        ├── 📁 __pycache__/
        ├── 📁 migrations
        ├── 📄 __init__.py
        ├── 📄 admin.py
        ├── 📄 apps.py
        ├── 📄 models.py
        ├── 📄 tests.py
        ├── 📄 urls.py
        └── 📄 views.py

    ├── 📁 AUTRES/
</pre>



## 🚀 Project launch
```bash
    python manage.py runserver
```