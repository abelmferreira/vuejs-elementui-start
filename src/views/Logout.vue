<template>
    <div>
      <div>
        <h1>You are out!!</h1>
      </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Logout',
  computed: {
    loggedin () {
      return this.$store.getters.user.loggedin
    }
  },
  watch: {
    loggedin (value) {
      if (!value) {
        setTimeout(() => {
          this.$router.push('/login')
        }, 3000)
      }
    }
  },
  methods: {
    ...mapActions(['userLogout'])
  },
  mounted () {
    this.userLogout()
  }
}
</script>
