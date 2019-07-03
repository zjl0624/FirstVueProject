<template>
  <div>
    <keep-alive>
      <page-content :content="内容1"></page-content>
    </keep-alive>
  </div>
</template>

<script>
import PageContent from './pageContent'
export default {
  name: 'pageController',
  components: {PageContent}
}
</script>

<style scoped>

</style>
