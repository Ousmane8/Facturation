<template>
  <div class="bottom section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="copyright">
            <p>© <span>2021</span> <nuxt-link to="/" class="transition">SOGA</nuxt-link> All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.transition:hover{
  text-decoration:none;
}
.section-padding {
  padding: 60px 0;
}
.bottom {
  background-color: #0a1c2e;
}
.bottom .copyright {
  color: #e5e5e5;
  font-weight: 600;
}
.copyright .transition {
  color: #DB663C;
  margin-left: 3px;
  padding-right: 3px;
}
.bottom p {
  margin-bottom: 0;
  line-height: 50px;
  font-size: 16px;
  font-weight: 400;
}
.copyright p span {
  color: #d1caca;
}
.bottom .copyright p, .bottom .copyright{
  color: #6c6d83;
}
.transition:hover{
  color: #3cae68;
}
</style>
