<template>
  <div>
    <h1>This is an protected page id {{ id }}</h1>
  </div>
</template>
<script>
export default {
  Name: 'Protected',
  Data () {
    return {}
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>
