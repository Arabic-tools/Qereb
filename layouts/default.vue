<template>
  <v-app dark>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
      color="#262d3d"
    >
      <span class="footer-title">Copyright © 2021 Resulttree</span>
      <v-spacer></v-spacer>
<!--      <span class="footer-title">Wanna add another website? Or have any suggestions? Email us: Opener@inboxeen.com</span>-->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style scoped>
.footer-title{
  color: white;
  font-size: 12px;
}
</style>
