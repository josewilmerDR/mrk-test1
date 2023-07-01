import os
from flask_admin import Admin
from .db import db

# from .models import
from .models import (
    User,
    Country,
    Seller,
    ReviewSeller,
    ReviewProduct,
    TokenBlokedList,
    UnlockCode,
    AsignedCode,
)
from .modelsProduct import Product, Category, CategoryProduct, SellerProduct
from .modelsOrder import (
    Order,
    OrderDetail,
    DeliveryAddress,
    Wishlist,
    OrderDeliveryAddress,
)
from .modelsPayment import Payment, MarkettTransaction
from .images import Imagen
from .favoritos import Favoritos
from flask_admin.contrib.sqla import ModelView


from flask_admin.menu import MenuCategory, MenuView, MenuLink


def setup_admin(app):
    app.secret_key = os.environ.get("FLASK_APP_KEY", "sample key")
    app.config["FLASK_ADMIN_SWATCH"] = "cerulean"
    admin = Admin(app, name="4Geeks Admin", template_mode="bootstrap3")

    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Seller, db.session))
    admin.add_view(ModelView(Product, db.session))
    admin.add_view(ModelView(Order, db.session))
    admin.add_view(ModelView(Imagen, db.session))
    admin.add_view(ModelView(Favoritos, db.session))
    admin.add_view(ModelView(Country, db.session))
    admin.add_view(ModelView(ReviewSeller, db.session))
    admin.add_view(ModelView(ReviewProduct, db.session))
    admin.add_view(ModelView(Category, db.session))
    admin.add_view(ModelView(OrderDetail, db.session))
    admin.add_view(ModelView(Payment, db.session))
    admin.add_view(ModelView(MarkettTransaction, db.session))
    admin.add_view(ModelView(DeliveryAddress, db.session))
    admin.add_view(ModelView(Wishlist, db.session))
    admin.add_view(ModelView(OrderDeliveryAddress, db.session))
    admin.add_view(ModelView(CategoryProduct, db.session))
    admin.add_view(ModelView(SellerProduct, db.session))
    admin.add_view(ModelView(TokenBlokedList, db.session))
    admin.add_view(ModelView(UnlockCode, db.session))
    admin.add_view(ModelView(AsignedCode, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))
    admin.add_link(MenuLink(name="Home Page Backend", url="/"))
