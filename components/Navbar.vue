<template>
  <nav class="navbar is-light">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/home">
          <img src="~assets/logo.png" alt="logo">
        </nuxt-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable" v-if="isAuthenticated">
            <a class="navbar-link">
              {{ loggedInUser.name }}
            </a>
            <div class="navbar-dropdown">
              <!--<nuxt-link class="navbar-item ins-re" to="/profile">Mon Profil</nuxt-link>
              <hr class="navbar-divider">-->
              <a class="navbar-item" @click="logout">Deconnexion</a>
            </div>
          </div>
          <template v-else>
            <nuxt-link class="navbar-item ins-re" to="/register">Inscription</nuxt-link>
            <nuxt-link class="navbar-item ins-re" to="/login">Connexion</nuxt-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push('/');
    },
  }
}
</script>

<style scoped>
.navbar-item img {
  max-height: 4rem!important;
}
.ins-re{
  text-decoration: none;
}
.navbar.is-light {
  background-color: #F5F2F5;
  //background-color: transparent;
  border-bottom:  1px solid #0a1c2e;
  color: #363636;
}
</style>
