<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-grow">
      <slot></slot>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
</script> 