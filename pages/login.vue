<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Bienvenue !</h2>

          <Notification :message="error" v-if="error"/>

          <form method="post" @submit.prevent="login">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  type="email"
                  class="input"
                  name="email"
                  v-model="email"
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
                >
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Se connecter</button>
            </div>
          </form>
          <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Vous n'avez pas de compte ? <nuxt-link class="ins-re" to="/register">S'inscrire</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification'

export default {
  name:"Connexion",
  middleware: 'guest',
  components: {
    Notification,
  },
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
      try {
        await this.$axios.post('auth/login', {
          email: this.email,
          password: this.password
        })

        await this.$auth.loginWith('local',
          {
            data: {
              email: this.email,
              password: this.password
            }
          })
        await this.$router.push('/dashboard')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
<style scoped>
.section {
  padding: 3rem 1.5rem;
  margin-top: 5%;
  margin-bottom: 16%!important;
}
.ins-re{
  text-decoration: none;
}
</style>
