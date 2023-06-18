from flask_sqlalchemy import SQLAlchemy
from .db import db


class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    lastname = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    is_seller = db.Column(db.Boolean(), unique=False, nullable=False)
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
        "MarkettTransaction", backref="user", lazy=True
    )
    wishlists = db.relationship("Wishlist", backref="user", lazy=True)
    product = db.relationship("Product", backref="user", lazy=True)

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
            "is_seller": self.is_seller,
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
    name = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=False)
    image = db.Column(db.String(120), unique=False, nullable=True)
    address = db.Column(db.String(120), unique=False, nullable=False)
    phone = db.Column(db.String(120), unique=False, nullable=True)
    email = db.Column(db.String(120), unique=False, nullable=False)
    website = db.Column(db.String(120), unique=False, nullable=True)
    facebook = db.Column(db.String(120), unique=False, nullable=True)
    instagram = db.Column(db.String(120), unique=False, nullable=True)
    twitter = db.Column(db.String(120), unique=False, nullable=True)
    whatsapp = db.Column(db.String(120), unique=False, nullable=True)
    linkedin = db.Column(db.String(120), unique=False, nullable=True)
    pinterest = db.Column(db.String(120), unique=False, nullable=True)
    rating = db.Column(db.String(120), unique=False, nullable=True)
    tax_id = db.Column(db.String(120), unique=False, nullable=False)
    # country_id = db.Column(db.Integer, db.ForeignKey("country.id"))

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))

    seller_products = db.relationship("SellerProduct", backref="seller", lazy=True)

    def __repr__(self):
        return f"<Seller {self.seller_name}>"

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "image": self.image,
            "address": self.address,
            "phone": self.phone,
            "email": self.email,
            "website": self.website,
            "facebook": self.facebook,
            "instagram": self.instagram,
            "twitter": self.twitter,
            "whatsapp": self.whatsapp,
            "linkedin": self.linkedin,
            "pinterest": self.pinterest,
            "rating": self.rating,
            "tax_id": self.tax_id,
            # "country_id": self.country_id,
            "user_id": self.user_id,
        }


class ReviewProduct(db.Model):
    __tablename__ = "review_product"
    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(120), unique=False, nullable=False)
    rating = db.Column(db.String(120), unique=False, nullable=False)
    review_date = db.Column(db.Date, unique=False, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("product.id"))

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


class TokenBlokedList(db.Model):
    __tablename__ = "token_bloked_list"
    id = db.Column(db.Integer, primary_key=True)
    token = db.Column(db.String(250), unique=True, nullable=False)
    email = db.Column(
        db.String(120), unique=False, nullable=False
    )  # Se recomienda el uso del ID en lugar del email, se hace aquí como práctica. Igual, podría ser un ForengnKey
    create_at = db.Column(db.DateTime, nullable=False)
    is_blocked = db.Column(db.Boolean, default=True)

    def serialize(self):
        return {
            "id": self.id,
            "token": self.token,
            "email": self.email,
            "create_at": self.create_at,
            "is_blocked": self.is_blocked,
        }


# from flask_sqlalchemy import SQLAlchemy
# from .db import db


# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(120), unique=True, nullable=False)
#     password = db.Column(db.String(256), unique=False, nullable=False)
#     is_active = db.Column(db.Boolean(), unique=False, nullable=False)
#     imagen_id = db.relationship("Imagen")

#     def __repr__(self):
#         return f'<User {self.email}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "email": self.email,
#             # do not serialize the password, its a security breach
#         }
