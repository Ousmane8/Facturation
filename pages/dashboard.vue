<template>
  <div class="container">
    <sidebar-menu :menu="menu" />
    <div class="columns">
      <div class="column is-full chart1">
        <h3 class="titre-dash">Statistiques sur CA Annuel</h3>
        <Chart1 class="div-chart"/>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7 chart2">
        <h3 class="titre-dash">Statistiques sur CA mensuel</h3>
        <Chart2 class="div-chart"/>
      </div>
      <div class="column is-5 chart3">
        <h3 class="titre-dash">Statistiques sur CA Continental</h3>
        <Chart3 class="div-chart"/>
      </div>
    </div>
  </div>
</template>

<script>
import Chart1 from "~/components/Chart1/Chart1";
import Chart2 from "@/components/Chart2/Chart2";
import Chart3 from "@/components/Chart3/Chart3";

export default {
  name: "Dashboard",
  //middleware: 'auth',
  components: {
    Chart1, Chart2, Chart3
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
          href: '/contacts',
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
.v-sidebar-menu .vsm--toggle-btn {
  color: #fff;
  background-color: #1e1e21;
  height: 20vh!important;
}
.chart1{
  margin-top: 3%!important;
  margin: 1%;
  border-radius: 6px;
  box-shadow: 0 2px 2px hsl(38deg 16% 76% / 50%);
  background-color: #f4f3ee;
  color: #252422;
  position: relative;
  z-index: 1;
  border: none;
  width: 102%;
}
.chart2{
  margin: 1%;
  border-radius: 6px;
  box-shadow: 0 2px 2px hsl(38deg 16% 76% / 50%);
  background-color: #f4f3ee;
  color: #252422;
  position: relative;
  z-index: 1;
  border: none;
  margin-bottom: 3%!important;

}
.chart3{
  margin: 1%;
  border-radius: 6px;
  box-shadow: 0 2px 2px hsl(38deg 16% 76% / 50%);
  background-color: #f4f3ee;
  color: #252422;
  position: relative;
  z-index: 1;
  border: none;
  margin-bottom: 3%!important;
}
.titre-dash{
  margin: 0;
  color: #252422;
  font-weight: 300;
  font-size: 2em;
}
.div-chart{
  margin: 3%;
}


</style>
