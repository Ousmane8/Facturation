<template>
  <div class="tabs is-centered">
    <ul>
      <li class="is-active">
        <Contact>
          <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
          <span>Pictures</span>
        </Contact>
      </li>
      <li>
        <a>
          <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
          <span>Music</span>
        </a>
      </li>
      <li>
        <a>
          <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
          <span>Videos</span>
        </a>
      </li>
      <li>
        <a>
          <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
          <span>Documents</span>
        </a>
      </li>
    </ul>
  </div>
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
