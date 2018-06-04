<template>
  <el-container id="app">

    <el-header :height="this.gVar.headerHeight">
      <header-bar
        :maxMobileStyleSize="this.gVar.maxMobileStyleSize"
        :loggedin="loggedin" />
    </el-header>

    <el-main class="main-container">
      <router-view/>
    </el-main>

    <el-footer>
      footer
    </el-footer>

  </el-container>
</template>

<script>
import { mapActions } from 'vuex'
import HeaderBar from '@/components/HeaderBar'

export default {
  components: {
    HeaderBar
  },
  data () {
    return {
      loadingScreen: null
    }
  },
  computed: {
    loggedin () {
      return this.$store.getters.user.loggedin
    },
    loading () {
      return this.$store.getters.messages.loading
    },
    messages () {
      return this.$store.getters.messages.messages
    },
    error () {
      return this.$store.getters.messages.error
    }
  },
  watch: {
    loading (value) {
      if (value) {
        this.loadingScreen = this.$loading({
          lock: true,
          text: this.loading,
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      } else {
        if (this.loadingScreen) this.loadingScreen.close()
      }
    },
    messages (value) {
      if (value) {
        value.forEach(message => {
          if (!message.displayed) {
            this.$message({
              type: message.type,
              message: message.message,
              duration: message.timeout,
              showClose: true,
              onClose: this.removeMessageNow,
              customClass: message.id
            })
            this.removeMessage(message)
          }
        })
      }
    },
    error (value) {
      if (value) {
        this.$message({type: 'error', message: value, showClose: true, duration: 10000})
        this.clearError(1000)
      }
    }
  },
  methods: {
    ...mapActions(['clearError', 'addMessage', 'removeMessage', 'removeMessageNow'])
  }
}
</script>
