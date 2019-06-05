<template>
  <div>
    <achievement></achievement>
    <person></person>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Achievement from '../achievement/achievement'
import Person from '../person/person'
import Tabbar from '../tabbar/tabbar'
export default {
  name: 'Home',
  components: {Achievement, Person, Tabbar}
}
</script>

<style scoped>

</style>
