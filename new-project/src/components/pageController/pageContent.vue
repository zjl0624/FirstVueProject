<template>
  <div><span>{{ content }}</span></div>
</template>

<script>
export default {
  name: 'pageContent',
  props: {
    content: {
      type: String
    }
  }
}
</script>

<style scoped>
</style>
