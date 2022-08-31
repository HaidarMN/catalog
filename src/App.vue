<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
      <div class="container">
        <!-- LOGO & TOGGLER -->
        <!-- <img src="src/assets/logo.png" alt="logo"> -->
        <span class="navbar-brand mb-0 h1">LOGO</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- NAVBAR MENU -->
        <div class="collapse navbar-collapse end-0" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link class="nav-link" to="/product">Product</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view></router-view>
  <div class="footer">
    <p>
      Copyright &copy; 2022
      <a href="https://haidarmn.github.io" target="_blank">HaidarMN</a>
      | in project
      <a href="#" target="_blank">#</a>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        // page:'',
      }
    },

    mounted() {
      // var nav = document.querySelector('nav');

      // window.addEventListener('scroll', function() {
      //   if (this.window.pageYOffset > 100) {
      //     nav.classList.add('bg-dark', 'shadow');
      //   } else {
      //     nav.classList.remove('bg-dark', 'shadow');
      //   }
      // })

      // this.page = window.location.pathname
      // var page = window.location.pathname

      // if (page != '/') {
      //   nav.classList.add('bg-dark', 'shadow');
      // } else {
      //   nav.classList.remove('bg-dark', 'shadow');
      // }
    }
  }
</script>

<style>
  @import './assets/style/style.css'
</style>
