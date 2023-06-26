from flask_sqlalchemy import SQLAlchemy
from .db import db

from .models import User, Seller, ReviewProduct
from sqlalchemy import func


class Product(db.Model):
    __tablename__ = "product"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(4096), unique=False, nullable=False)
    bar_code = db.Column(db.String(120), unique=False, nullable=True)
    image = db.Column(db.String(120), unique=False, nullable=True)
    price = db.Column(db.String(120), unique=False, nullable=False)
    stock = db.Column(db.String(120), unique=False, nullable=True)
    date_listed = db.Column(db.Date, unique=False, nullable=False)
    tax = db.Column(db.Float, unique=False, nullable=True)
    special_tax = db.Column(db.Float, unique=False, nullable=True)
    offer_price = db.Column(db.Float, unique=False, nullable=True)
    offer_active = db.Column(db.Boolean, unique=False, nullable=True)
    offer_start_date = db.Column(db.Date, unique=False, nullable=True)
    offer_end_date = db.Column(db.Date, unique=False, nullable=True)

    category_id = db.Column(db.Integer, db.ForeignKey("category.id"))
    seller_id = db.Column(db.Integer, db.ForeignKey("seller.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))

    seller_product = db.relationship("SellerProduct", backref="product", lazy=True)
    category_product = db.relationship("CategoryProduct", backref="product", lazy=True)
    review_product = db.relationship("ReviewProduct", backref="product", lazy=True)
    order_datail = db.relationship("OrderDetail", backref="product", lazy=True)
    wishlist = db.relationship("Wishlist", backref="product", lazy=True)

    def __repr__(self):
        return f"<Product {self.name}>"

    @property
    def average_rating(self):
        return (
            db.session.query(func.avg(ReviewProduct.rating))
            .filter_by(product_id=self.id)
            .scalar()
        )

    @property
    def rating_count(self):
        return (
            db.session.query(func.count(ReviewProduct.id))
            .filter_by(product_id=self.id)
            .scalar()
        )

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "bar_code": self.bar_code,
            "image": self.image,
            "price": self.price,
            "stock": self.stock,
            "average_rating": self.average_rating,
            "rating_count": self.rating_count,
            "date_listed": self.date_listed,
            "tax": self.tax,
            "special_tax": self.special_tax,
            "offer_price": self.offer_price,
            "category_id": self.category_id,
            "seller_id": self.seller_id,
            "user_id": self.user_id,
        }


class Category(db.Model):
    __tablename__ = "category"
    id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.String(120), unique=False, nullable=False)
    category_description = db.Column(db.String(120), unique=False, nullable=False)
    category_image = db.Column(db.String(120), unique=False, nullable=False)

    category_product = db.relationship("CategoryProduct", backref="category", lazy=True)

    def __repr__(self):
        return f"<Category {self.category_name}>"

    def serialize(self):
        return {
            "id": self.id,
            "category_name": self.category_name,
            "category_description": self.category_description,
            "category_image": self.category_image,
        }


class CategoryProduct(db.Model):
    __tablename__ = "category_product"
    id = db.Column(db.Integer, primary_key=True)
    category_id = db.Column(db.Integer, db.ForeignKey("category.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("product.id"))

    def __repr__(self):
        return f"<CategoryProduct {self.id}>"

    def serialize(self):
        return {
            "id": self.id,
            "category_id": self.category_id,
            "product_id": self.product_id,
        }


class SellerProduct(db.Model):
    __tablename__ = "seller_product"
    id = db.Column(db.Integer, primary_key=True)
    seller_id = db.Column(db.Integer, db.ForeignKey("seller.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("product.id"))

    def __repr__(self):
        return f"<SellerProduct {self.id}>"

    def serialize(self):
        return {
            "id": self.id,
            "seller_id": self.seller_id,
            "product_id": self.product_id,
        }
