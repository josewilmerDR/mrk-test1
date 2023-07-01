from flask_sqlalchemy import SQLAlchemy
from .db import db

from .models import User
from .modelsProduct import Product

# from .modelsPayment import Payment


class Order(db.Model):
    __tablename__ = "order"
    id = db.Column(db.Integer, primary_key=True)
    order_date = db.Column(db.Date, unique=False, nullable=False)
    order_status = db.Column(db.String(120), unique=False, nullable=False)
    order_total = db.Column(db.String(120), unique=False, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    # payment_method = db.Column(db.Integer, db.ForeignKey("payment.id"))
    # address = db.Column(db.Integer, db.ForeignKey("delivery_address.id"))

    order_detail = db.relationship("OrderDetail", backref="order", lazy=True)
    order_delivery = db.relationship("OrderDeliveryAddress", backref="order", lazy=True)
    payment = db.relationship("Payment", backref="order", lazy=True)

    def __repr__(self):
        return f"<Order {self.id}>"

    def serialize(self):
        return {
            "id": self.id,
            "order_date": self.order_date,
            "order_status": self.order_status,
            "order_total": self.order_total,
            "user_id": self.user_id,
        }


class OrderDetail(db.Model):
    __tablename__ = "order_detail"
    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Float, unique=False, nullable=False)
    price_unit = db.Column(db.Float, unique=False, nullable=False)
    color = db.Column(db.String(120), unique=False, nullable=False)
    size = db.Column(db.String(120), unique=False, nullable=True)
    gender = db.Column(db.String(120), unique=False, nullable=True)

    total = db.Column(db.Float, unique=False, nullable=False)

    payment_method = db.Column(db.Integer, db.ForeignKey("payment.id"))
    address = db.Column(db.Integer, db.ForeignKey("delivery_address.id"))

    order_id = db.Column(db.Integer, db.ForeignKey("order.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("product.id"))

    def __repr__(self):
        return f"<OrderDetail {self.id}>"

    def serialize(self):
        return {
            "id": self.id,
            "order_detail_quantity": self.order_detail_quantity,
            "order_detail_price": self.order_detail_price,
            "order_id": self.order_id,
            "product_id": self.product_id,
        }


class DeliveryAddress(db.Model):
    __tablename__ = "delivery_address"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)

    order_delivery_address = db.relationship(
        "OrderDeliveryAddress", backref="delivery_address", lazy=True
    )

    # order_detail = db.relationship("OrderDetail", backref="delivery_address", lazy=True)

    def __repr__(self):
        return f"<Delivery {self.id}>"

    def serialize(self):
        return {
            "id": self.id,
            "delivery_address": self.delivery_address,
        }


class Wishlist(db.Model):
    __tablename__ = "wishlist"
    id = db.Column(db.Integer, primary_key=True)
    wishlist_date = db.Column(db.Date, unique=False, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("product.id"))

    def __repr__(self):
        return f"<Wishlist {self.id}>"

    def serialize(self):
        return {
            "id": self.id,
            "wishlist_date": self.wishlist_date,
            "user_id": self.user_id,
            "product_id": self.product_id,
        }


class OrderDeliveryAddress(db.Model):
    __tablename__ = "order_delivery_address"
    id = db.Column(db.Integer, primary_key=True)

    order_id = db.Column(db.Integer, db.ForeignKey("order.id"))
    delivery_address_id = db.Column(db.Integer, db.ForeignKey("delivery_address.id"))

    def __repr__(self):
        return f"<OrderDelivery {self.id}>"

    def serialize(self):
        return {
            "id": self.id,
            "order_id": self.order_id,
            "delivery_id": self.delivery_id,
        }
