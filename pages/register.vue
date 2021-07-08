<template>
  <section class="section_r">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Inscription !</h2>

          <Notification :message="error" v-if="error"/>

          <form method="post" @submit.prevent="register">
            <div class="field">
              <label class="label">Nom d'utilisateur</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="username"
                  v-model="name"
                  required
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  type="email"
                  class="input"
                  name="email"
                  v-model="email"
                  required
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Mot de passe</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="password"
                  required
                >
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">S'inscrire</button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            Vous avez déjà un compte ? <nuxt-link class="ins-re" to="/login">Se connecter</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import Notification from '~/components/Notification'

export default {
  name:"Inscription",
  //middleware: 'guest',
  components: {
    Notification,
  },
  data() {
    return {
      login: {
      name: '',
      email: '',
      password: '',
      error: null
      }
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('register', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        await this.$auth.loginWith('local',
          {
            data: {
              email: this.email,
              password: this.password
            },
          })

        this.$router.push('/home')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
<style scoped>
.section_r {
  padding: 3rem 1.5rem;
  margin-top: 5%;
  margin-bottom: 11.5%!important;
}
.ins-re{
  text-decoration: none;
}
</style>
