from flask_sqlalchemy import SQLAlchemy
from .db import db
from .modelsProduct import Product


class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    lastname = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    profile_image = db.Column(db.String(256), unique=False, nullable=True)
    otp = db.Column(db.String(256), unique=False, nullable=True)
    otp_timestamp = db.Column(db.String(256), unique=False, nullable=True)
    otp_active = db.Column(db.Boolean(), unique=False, nullable=True)

    country_id = db.Column(db.Integer, db.ForeignKey("country.id"))

    sellers = db.relationship("Seller", backref="user", lazy=True)
    review_products = db.relationship("ReviewProduct", backref="user", lazy=True)
    review_sellers = db.relationship("ReviewSeller", backref="user", lazy=True)
    orders = db.relationship("Order", backref="user", lazy=True)
    marketts_transactions = db.relationship(
        "Marketts_transaction", backref="user", lazy=True
    )
    wishlists = db.relationship("Wishlist", backref="user", lazy=True)

    def __repr__(self):
        return f"<User {self.email}>"

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "profile_image": self.profile_image,
            "country_id": self.country_id,
            # do not serialize the password, its a security breach
        }


class Country(db.Model):
    __tablename__ = "country"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)

    users = db.relationship("User", backref="country", lazy=True)

    def __repr__(self):
        return f"<Country {self.name}>"

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }


class Seller(db.Model):
    __tablename__ = "seller"
    id = db.Column(db.Integer, primary_key=True)
    seller_name = db.Column(db.String(120), unique=False, nullable=False)
    seller_description = db.Column(db.String(120), unique=False, nullable=False)
    seller_image = db.Column(db.String(120), unique=False, nullable=False)
    seller_address = db.Column(db.String(120), unique=False, nullable=False)
    seller_phone = db.Column(db.String(120), unique=False, nullable=False)
    seller_email = db.Column(db.String(120), unique=False, nullable=False)
    seller_website = db.Column(db.String(120), unique=False, nullable=False)
    seller_facebook = db.Column(db.String(120), unique=False, nullable=False)
    seller_instagram = db.Column(db.String(120), unique=False, nullable=False)
    seller_twitter = db.Column(db.String(120), unique=False, nullable=False)
    seller_whatsapp = db.Column(db.String(120), unique=False, nullable=False)
    seller_linkedin = db.Column(db.String(120), unique=False, nullable=False)
    seller_pinterest = db.Column(db.String(120), unique=False, nullable=False)
    seller_rating = db.Column(db.String(120), unique=False, nullable=False)
    tax_id = db.Column(db.String(120), unique=False, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))

    seller_products = db.relationship("SellerProduct", backref="seller", lazy=True)

    def __repr__(self):
        return f"<Seller {self.seller_name}>"

    def serialize(self):
        return {
            "id": self.id,
            "seller_name": self.seller_name,
            "seller_description": self.seller_description,
            "seller_image": self.seller_image,
            "seller_address": self.seller_address,
            "seller_phone": self.seller_phone,
            "seller_email": self.seller_email,
            "seller_website": self.seller_website,
            "seller_facebook": self.seller_facebook,
            "seller_instagram": self.seller_instagram,
            "seller_twitter": self.seller_twitter,
            "seller_whatsapp": self.seller_whatsapp,
            "seller_linkedin": self.seller_linkedin,
            "seller_pinterest": self.seller_pinterest,
            "seller_rating": self.seller_rating,
            "tax_id": self.tax_id,
            "user_id": self.user_id,
        }


class ReviewProduct(db.Model):
    __tablename__ = "review_product"
    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(120), unique=False, nullable=False)
    rating = db.Column(db.String(120), unique=False, nullable=False)
    review_date = db.Column(db.Date, unique=False, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("seller.id"))

    def __repr__(self):
        return f"<ReviewProduct {self.review}>"

    def serialize(self):
        return {
            "id": self.id,
            "review": self.review,
            "rating": self.rating,
            "review_date": self.review_date,
            "user_id": self.user_id,
            "product_id": self.product_id,
        }


class ReviewSeller(db.Model):
    __tablename__ = "review_seller"
    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(120), unique=False, nullable=False)
    rating = db.Column(db.String(120), unique=False, nullable=False)
    review_date = db.Column(db.Date, unique=False, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    seller_id = db.Column(db.Integer, db.ForeignKey("seller.id"))

    def __repr__(self):
        return f"<ReviewSeller {self.review}>"

    def serialize(self):
        return {
            "id": self.id,
            "review": self.review,
            "rating": self.rating,
            "review_date": self.review_date,
            "user_id": self.user_id,
            "seller_id": self.seller_id,
        }
