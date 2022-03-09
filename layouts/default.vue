<template>
  <v-app dark>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app color="#FDFDFD">
      <v-row>
        <v-col class="effra-font" style="text-align:center">
          <!-- الموقع برعاية :

          <a href="https://wasetshera.com?myad=53196"> وسيط شراء من الإنترنت</a>
          <br /> -->
	<span class="effra-font">	  قريب برعاية لطيفة من الرائعين في:</span><a style="font-size:18px" class="effra-font" href="https://shbbr.com/jareed" target="_blank"> نشرة جريد</a> و <a class="effra-font" style="font-size:18px" href="https://wasetshera.com?myad=53468" target="_blank" >وسيط شراء </a>
		<br />
        <span class="effra-font">  للإتصال بنا:</span>
          <a class="black-text effra-font" href="mailto:qereb@inboxeen.com">qereb@inboxeen.com</a>

          <br />
      <div class="effra-font">    جميع الحقوق محفوظة - موقع قريب 2022 ©</div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
<style scoped>
.black-text{
color: black;
}
.effra-font{
font-family: Effra, sans-serif;
}
a{
text-decoration: none;
}
.footer-title {
  color: white;
  font-size: 12px;
}

* {
  font-family: "IBM Plex Sans Arabic", sans-serif;
}
</style>
