<template>
  <div class="container">
    <sidebar-menu :menu="menu" />
    <div class="space-medium">
      <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
            <div class="feature-block-v7 feature-block">
              <div class="feature-content">
                <h2>SOGA Service De Facturation</h2>
                <p class="lead">Donec malesuada eget elit vel posuere. Maecenas ullamcorper velit vel purus ullamcorper semperles fringilla. </p>
                <hr class="m-t-30 m-b-30">
                <p>Pellentesque hendrerit neque pur ras ut rutrum enim onec auctor, nisl vel ultricies placerat, purporta metus, sed cursus enim ante nec est.</p>
                <p>Donec ante nibh hendrerit vitae sodales eget fficitur ac justo. Aenean porta vitae nisi eget venena aliquam odio euismod arcu tempus, id efficituposuere.</p>
                <hr class="m-t-30 m-b-30">
                <p>Pellentesque hendrerit neque pur ras ut rutrum enim onec auctor, nisl vel ultricies placerat, purporta metus, sed cursus enim ante nec est.</p>
                <p>Donec ante nibh hendrerit vitae sodales eget fficitur ac justo. Aenean porta vitae nisi eget venena aliquam odio euismod arcu tempus, id efficituposuere.</p>
              </div>
            <div class="columns">
              <div class="column">
              </div>
              <div class="column is-8 started">
                <button class="button is-dark is-medium is-fullwidth" @click="showDash">Commmencer</button>
              </div>
              <div class="column">
              </div>
            </div>

            </div>
          </div>
          <div class="offset-xl-1 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="circle-1"></div>
            <div class="feature-app-img">
              <img src="https://jituchauhan.com/quanto/quanto/images/iphone-img-2.png" alt="App Landing Page Template - Quanto">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
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
  },
  methods: {
    showDash() {
      this.show = true
      this.$router.push('/dashboard');
    }
  },
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

h2 {
  color: #181825;
  margin: 0px 0px 15px 0px;
  font-size: 34px;
  line-height: 44px;
  letter-spacing: -1px;
  font-weight: bold;
  text-align: center;
}
p { margin: 0px 0px 24px 0px; }
p:last-child { margin: 0px; }

.space-medium {
  padding-top: 4%;
  padding-bottom: 1%; }

.feature-app-img {
  position: relative;
  text-align: center;
  max-width: 100%;
  height: auto;
  margin-left: 17.5%;
}
.circle-1 { position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); width: 390px; height: 390px; background-color: #3be1a4; color: white; text-align: center; line-height: 100px; border-radius: 50%; font-size: 1.3rem; }
.circle-1:hover { cursor: pointer; }
.circle-1::after, .circle-1::before { content: ""; display: block; position: absolute; top: 0; left: 0; width: 390px; height: 390px; background: #3be1a4; border-radius: 50%; z-index: -1; -webkit-animation: grow 3s ease-in-out infinite; animation: grow 3s ease-in-out infinite; }
.circle-1::after { background: rgb(59, 225, 164); }
.circle-1::after::before { content: ""; display: block; position: absolute; top: 0; left: 0; width: 390px; height: 390px; background: #3be1a4; border-radius: 50%; z-index: -1; -webkit-animation: grow 3s ease-in-out infinite; animation: grow 3s ease-in-out infinite; }
.circle-1::before { background: rgb(59, 225, 164); -webkit-animation-delay: -0.5s; animation-delay: -0.5s; }
@-webkit-keyframes grow {
  0% { -webkit-transform: scale(1, 1); transform: scale(1, 1); opacity: 1; }
  100% { -webkit-transform: scale(1.8, 1.8); transform: scale(1.8, 1.8); opacity: 0; }
}
@keyframes grow {
  0% { -webkit-transform: scale(1, 1); transform: scale(1, 1); opacity: 1; }
  100% { -webkit-transform: scale(1.8, 1.8); transform: scale(1.8, 1.8); opacity: 0; }
}
.started{
  padding: 10%;
}
.started button{
  padding: 10%;
  text-transform: uppercase;
  background: ;
}
</style>
