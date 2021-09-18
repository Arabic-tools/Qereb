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

          <v-row>
        <v-col style="text-align:center">
                              <!-- الموقع برعاية :

          <a href="https://wasetshera.com?myad=53196"> وسيط شراء من الإنترنت</a>
          <br /> -->
          للإتصال بنا:
          <a href="mailto:qereb@inboxeen.com">qereb@inboxeen.com</a>

          <br />
          جميع الحقوق محفوظة - موقع قريب 2021 ©
        </v-col>
      </v-row>
    
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

*{
  font-family:  'IBM Plex Sans Arabic', sans-serif;
}
</style>
