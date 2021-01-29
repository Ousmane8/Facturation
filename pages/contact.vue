<template>
  <div class="container">
    <sidebar-menu :menu="menu" />
    <Contact/>
  </div>
</template>

<script>
import Contact from "~/components/Billing/Contacts/Contact";
export default {
  name: "Contacts",
  middleware: 'auth',
  components: {
    Contact,
  },
  data() {
    return {
      menu: [
        {
          header: true,
          hiddenOnCollapse: true
        },
        {
          href: '/home',
          title: 'Accueil',
          icon: 'fa fa-home',
        },
        {
          href: '/dashboard',
          title: 'Dashboard',
          icon: 'fa fa-chart-line',
        },
        {
          href: '/billing',
          title: 'Factures',
          icon: 'fa fa-file-invoice',
        },
        {
          href: '/contact',
          title: 'Contacts',
          icon: 'fa fa-users',
        },
        {
          href: '/maps',
          title: 'Carte',
          icon: 'fa fa-map',
        },
        {
          href: '/profile',
          title: 'Profil',
          icon: 'fa fa-user',
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
}
.v-sidebar-menu {
  background-color: #0a1c2e;
  width: 10% !important;
}
</style>
