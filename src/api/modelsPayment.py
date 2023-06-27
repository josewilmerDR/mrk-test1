from flask_sqlalchemy import SQLAlchemy
from .db import db

from .modelsOrder import Order
from .models import User


class Payment(db.Model):
    __tablename__ = "payment"

    id = db.Column(db.Integer, primary_key=True)
    payment_method = db.Column(db.String(120), unique=False, nullable=False)
    payment_status = db.Column(db.String(120), unique=False, nullable=False)
    payment_date = db.Column(db.Date, unique=False, nullable=False)

    order_detail = db.relationship("OrderDetail", backref="payment", lazy=True)

    order_id = db.Column(db.Integer, db.ForeignKey("order.id"))

    def __repr__(self):
        return f"<Payment {self.id}>"

    def serialize(self):
        return {
            "id": self.id,
            "payment_method": self.payment_method,
            "payment_status": self.payment_status,
            "payment_date": self.payment_date,
            "order_id": self.order_id,
        }


class MarkettTransaction(db.Model):
    __tablename__ = "markett_transaction"

    id = db.Column(db.Integer, primary_key=True)
    transaction_date = db.Column(db.Date, unique=False, nullable=False)
    transaction_amount = db.Column(db.String(120), unique=False, nullable=False)
    transaction_type = db.Column(db.String(120), unique=False, nullable=False)
    balance_after_transaction = db.Column(db.String(120), unique=False, nullable=False)
    available_balance = db.Column(db.String(120), unique=False, nullable=False)
    blocked_balance = db.Column(db.String(120), unique=False, nullable=False)
    intransit_balance = db.Column(db.String(120), unique=False, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))

    def __repr__(self):
        return f"<MarkettTransaction {self.id}>"

    def serialize(self):
        return {
            "id": self.id,
            "transaction_date": self.transaction_date,
            "transaction_amount": self.transaction_amount,
            "transaction_type": self.transaction_type,
            "balance_after_transaction": self.balance_after_transaction,
            "available_balance": self.available_balance,
            "blocked_balance": self.blocked_balance,
            "intransit_balance": self.intransit_balance,
            "user_id": self.user_id,
        }
