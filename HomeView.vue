<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div>
    <h1 class="store-title">Welcome to our Handmade Crafts Store</h1>

    <!-- Product Listings -->
    <div v-for="product in products" :key="product.id" class="product-card">
      <h2>{{ product.name }}</h2>
      <p class="product-price">Price: ${{ product.price }}</p>
      <button @click="addToCart(product)" class="add-to-cart-btn">Add to Cart</button>
    </div>

    <!-- Shopping Cart -->
    <div class="cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        <li v-for="item in cart" :key="item.product.id">
          {{ item.product.name }} - Quantity: {{ item.quantity }}
        </li>
      </ul>
      <p class="cart-total">Total: ${{ cartTotal }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Handmade Pottery', price: 20 },
        { id: 2, name: 'Knit Scarf', price: 15 },
        { id: 3, name: 'Wooden Keychain', price: 5 },
      ],
      cart: [],
    };
  },
  computed: {
    cartTotal() {
      return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    },
  },
  methods: {
    addToCart(product) {
      const cartItem = this.cart.find(item => item.product.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.push({ product: product, quantity: 1 });
      }
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
.store-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333; /* Change title color */
}

.product-card {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
  background-color: #f7f7f7; /* Change background color */
}

.product-price {
  font-weight: bold;
}

.add-to-cart-btn {
  background-color: #ff9900; /* Change button background color */
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.cart {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 20px;
  background-color: #f0f0f0; /* Change cart background color */
}

.cart-total {
  font-weight: bold;
  margin-top: 10px;
}
</style>