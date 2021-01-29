<template>
  <a-navigation-header>
    <a-menu
      theme="dark"
      mode="horizontal"
      :defaultSelectedKeys="['1']"
      :style="{ lineHeight: '52px' }"
    >
      <a-menu-item key="1">
        <Contact/>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/invoices">Factures</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/organisationSettings">Settings</router-link>
      </a-menu-item>
    </a-menu>
  </a-navigation-header>
</template>

<script>
import Contact from "~/components/Billing/Contacts/Contact";
//import Chart2 from "~/components/Chart2/Chart2";
//import Chart3 from "~/components/Chart3/Chart3";

export default {
  components: {
    Contact
  },
}
</script>

<style scoped>


</style>
