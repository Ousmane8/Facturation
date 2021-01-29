<template>
  <div class="container">
    <sidebar-menu :menu="menu" />
    <div class="columns">
      <div class="column is-full map">
        <h3 class="titre-map">Google Maps</h3>
        <div class="div-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83925.9811985968!2d2.137959027580561!3d48.90230366910789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f800d81540f%3A0xfdb51db078bede5e!2sSOGA%20EDIT!5e0!3m2!1sfr!2sfr!4v1611860694781!5m2!1sfr!2sfr" width="100%" height="500" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Carte",
  middleware: 'auth',
  components: {
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
.map{
  margin-top: 3%!important;
  margin-bottom: 10%!important;
  right: 5%;
  border-radius: 6px;
  box-shadow: 0 2px 2px hsl(38deg 16% 76% / 50%);
  background-color: #f4f3ee;
  color: #252422;
  position: relative;
  z-index: 1;
  border: none;
  width: 123%;
}
.titre-map{
  margin: 2%;
  color: #252422;
  font-weight: 300;
  font-size: 2em;
}
.div-map{
  margin: 0;
}
</style>
