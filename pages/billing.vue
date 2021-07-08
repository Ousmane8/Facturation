<template>
  <div class="container">
  <sidebar-menu :menu="menu" />
    <Invoices/>
  </div>
</template>

<script>
import Invoices from "~/components/Billing/Invoices/Invoices";
export default {
  name: "Factures",
  //middleware: 'auth',
  components: {
    Invoices,
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
