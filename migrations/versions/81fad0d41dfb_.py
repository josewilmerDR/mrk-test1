"""empty message

Revision ID: 81fad0d41dfb
Revises: 
Create Date: 2023-06-01 20:01:19.713618

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '81fad0d41dfb'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('category',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('category_name', sa.String(length=120), nullable=False),
    sa.Column('category_description', sa.String(length=120), nullable=False),
    sa.Column('category_image', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('country',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('delivery_address',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('address', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favoritos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('lastname', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=256), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('profile_image', sa.String(length=256), nullable=True),
    sa.Column('otp', sa.String(length=256), nullable=True),
    sa.Column('otp_timestamp', sa.String(length=256), nullable=True),
    sa.Column('otp_active', sa.Boolean(), nullable=True),
    sa.Column('country_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['country_id'], ['country.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('imagen',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('ruta', sa.String(length=300), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('ruta')
    )
    op.create_table('markett_transaction',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('transaction_date', sa.Date(), nullable=False),
    sa.Column('transaction_amount', sa.String(length=120), nullable=False),
    sa.Column('transaction_type', sa.String(length=120), nullable=False),
    sa.Column('balance_after_transaction', sa.String(length=120), nullable=False),
    sa.Column('available_balance', sa.String(length=120), nullable=False),
    sa.Column('blocked_balance', sa.String(length=120), nullable=False),
    sa.Column('intransit_balance', sa.String(length=120), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('order',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('order_date', sa.Date(), nullable=False),
    sa.Column('order_status', sa.String(length=120), nullable=False),
    sa.Column('order_total', sa.String(length=120), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('seller',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('seller_name', sa.String(length=120), nullable=False),
    sa.Column('seller_description', sa.String(length=120), nullable=False),
    sa.Column('seller_image', sa.String(length=120), nullable=False),
    sa.Column('seller_address', sa.String(length=120), nullable=False),
    sa.Column('seller_phone', sa.String(length=120), nullable=False),
    sa.Column('seller_email', sa.String(length=120), nullable=False),
    sa.Column('seller_website', sa.String(length=120), nullable=False),
    sa.Column('seller_facebook', sa.String(length=120), nullable=False),
    sa.Column('seller_instagram', sa.String(length=120), nullable=False),
    sa.Column('seller_twitter', sa.String(length=120), nullable=False),
    sa.Column('seller_whatsapp', sa.String(length=120), nullable=False),
    sa.Column('seller_linkedin', sa.String(length=120), nullable=False),
    sa.Column('seller_pinterest', sa.String(length=120), nullable=False),
    sa.Column('seller_rating', sa.String(length=120), nullable=False),
    sa.Column('tax_id', sa.String(length=120), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('order_delivery_address',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('order_id', sa.Integer(), nullable=True),
    sa.Column('delivery_address_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['delivery_address_id'], ['delivery_address.id'], ),
    sa.ForeignKeyConstraint(['order_id'], ['order.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('payment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('payment_method', sa.String(length=120), nullable=False),
    sa.Column('payment_status', sa.String(length=120), nullable=False),
    sa.Column('payment_date', sa.Date(), nullable=False),
    sa.Column('order_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['order_id'], ['order.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('product',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('description', sa.String(length=120), nullable=False),
    sa.Column('image', sa.String(length=120), nullable=False),
    sa.Column('price', sa.String(length=120), nullable=False),
    sa.Column('stock', sa.String(length=120), nullable=False),
    sa.Column('rating', sa.String(length=120), nullable=False),
    sa.Column('date_listed', sa.Date(), nullable=False),
    sa.Column('category_id', sa.Integer(), nullable=True),
    sa.Column('seller_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['category_id'], ['category.id'], ),
    sa.ForeignKeyConstraint(['seller_id'], ['seller.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('review_seller',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('review', sa.String(length=120), nullable=False),
    sa.Column('rating', sa.String(length=120), nullable=False),
    sa.Column('review_date', sa.Date(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('seller_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['seller_id'], ['seller.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('category_product',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('category_id', sa.Integer(), nullable=True),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['category_id'], ['category.id'], ),
    sa.ForeignKeyConstraint(['product_id'], ['product.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('order_detail',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('order_detail_quantity', sa.String(length=120), nullable=False),
    sa.Column('order_detail_price', sa.String(length=120), nullable=False),
    sa.Column('order_id', sa.Integer(), nullable=True),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['order_id'], ['order.id'], ),
    sa.ForeignKeyConstraint(['product_id'], ['product.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('review_product',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('review', sa.String(length=120), nullable=False),
    sa.Column('rating', sa.String(length=120), nullable=False),
    sa.Column('review_date', sa.Date(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['product_id'], ['product.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('seller_product',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('seller_id', sa.Integer(), nullable=True),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['product_id'], ['product.id'], ),
    sa.ForeignKeyConstraint(['seller_id'], ['seller.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('wishlist',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('wishlist_date', sa.Date(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['product_id'], ['product.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('wishlist')
    op.drop_table('seller_product')
    op.drop_table('review_product')
    op.drop_table('order_detail')
    op.drop_table('category_product')
    op.drop_table('review_seller')
    op.drop_table('product')
    op.drop_table('payment')
    op.drop_table('order_delivery_address')
    op.drop_table('seller')
    op.drop_table('order')
    op.drop_table('markett_transaction')
    op.drop_table('imagen')
    op.drop_table('user')
    op.drop_table('favoritos')
    op.drop_table('delivery_address')
    op.drop_table('country')
    op.drop_table('category')
    # ### end Alembic commands ###
