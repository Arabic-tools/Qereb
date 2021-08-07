<template>
  <div class="custom-container center-center">
    <div class="text-center">
      <v-snackbar v-model="snackbar"   :timeout="timeout"  top right outlined max-width="300" >
        Entering the search term and clicking  "Enter"  will open Google results in a new tab
      </v-snackbar>
      <div class="search-section">
        <img class="pb-8 pt-8 img-fluid " src="/ResultTree.png" alt="" />
        <v-text-field
          v-model="search"
          placeholder="Enter Search Term"
          outlined
          color="black darken-2"
          class="search-field"
          clearable
          rounded
          @keyup.enter="searchField('Google')"
        >
        </v-text-field>
        <div class="checkboxes">
          <v-checkbox
            v-model="addQuotation"
            label='Add Double Quotation "..." '
            hide-details
            @change="quotation"
          ></v-checkbox>
          <v-checkbox
            v-model="addParenthesis"
            label='Add Parenthesis (...)'
            hide-details
            @change="parenthesis"
          ></v-checkbox>
        </div>
      </div>
      <div class="btn-section pt-8">
        <v-btn class="mr-2 mb-2 lower-case" outlined color="black" @click="searchField('Google')">Google</v-btn>
        <v-btn class="mr-2 mb-2 lower-case" outlined color="black" @click="searchField('Reddit')">Reddit</v-btn>
        <v-btn class="mr-2 mb-2 lower-case" outlined color="black" @click="searchField('Qoura')">Qoura</v-btn>
        <v-btn class="mr-2 mb-2 lower-case" outlined color="black" @click="searchField('Twiter')">Twitter</v-btn>
        <v-btn class="mr-2 mb-2 lower-case" outlined color="black" @click="searchField('Facebook')">Facebook</v-btn>
        <v-btn class="mr-2 mb-2 lower-case" outlined color="black" @click="searchField('Instagram')">Instagram</v-btn>
        <v-btn class="mr-2 mb-2 lower-case" outlined color="black" @click="searchField('Youtube')">Youtube</v-btn>
        <v-btn class="mr-2 mb-2 lower-case" outlined color="black" @click="searchField('socialmention')">SocialMention</v-btn>
        <v-tooltip bottom close-delay="2000" max-width="300" color="black" >
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mb-2 lower-case" v-bind="attrs" v-on="on" rounded color="#0069D9" @click="searchField()"> Open All
              <v-icon left dark class="ml-1">mdi-help</v-icon>
            </v-btn>
          </template>
          <span>If you want to use the “Open All” function,  you need to enable opening multiple pages in your browser.
            <a href="https://bit.ly/2TfpLSQ" target="_blank" style="cursor: pointer">See this video: </a></span>
        </v-tooltip>
      </div>
      <p class="pt-8 pb-8 mb-0">If you search using a domain name, try those
        tools for more info about the domain
      </p>
      <div class="text-center pb-8">
        <v-btn class="mr-2 mb-2 lower-case" outlined color="black" @click="searchField('Who')">who.js</v-btn>
        <v-btn class="mr-2 mb-2 lower-case" outlined color="black" @click="searchField('SimilarWeb')">SimilarWeb</v-btn>
        <v-btn class="mr-2 mb-2 lower-case" outlined color="black" @click="searchField('Alexa')">alexa</v-btn>
        <v-tooltip bottom close-delay="2000" max-width="300" color="black" >
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mb-2 lower-case" v-bind="attrs" v-on="on" rounded color="#0069D9" @click="searchField('Open_all')">Open All
              <v-icon left dark class="ml-1">mdi-help</v-icon>
            </v-btn>
          </template>
          <span>If you want to use the “Open All” function,  you need to enable opening multiple pages in your browser.
            <a href="https://bit.ly/2TfpLSQ" target="_blank" style="cursor: pointer">See this video: </a></span>        </v-tooltip>
      </div>
      <p class="text-gray">We don't store data. There are no ads, bloated dialogs, or useless checkboxes. We built this tool to use it ourselves.</p>
      <p class="text-gray">  What other sites you'd like to see here? Let us know: Resulttree@inboxeen.com</p>
    </div>
  </div>

</template>
<script>
export default {
  data(){
    return{
      search:'',
      addQuotation:'',
      addParenthesis:'',
      items:[],
      quote:'"',
      bracket:'(',
      snackbar: true,
      timeout: 2000,
    }
  },
  methods:{
    quotation(){
      if(this.addQuotation){
        this.search= '"' + this.search + '"'

      }
      else{
        this.search=this.search.replace(/['"]+/g, '')
      }

    },
    parenthesis(){
      if(this.addParenthesis){
        this.search= '(' + this.search + ')'
      }
      else{
        this.search=this.search.replace(/['()]+/g, '')
      }
    },
    searchField(data){
      if(data==='Google'){
        window.open('https://www.google.com/search?q=' + this.search)
      }
      else if (data==='Reddit'){
        window.open('https://www.reddit.com/search/?q=' + this.search)
      }
      else if (data==='Qoura'){
        window.open('https://www.quora.com/search/?q=' + this.search)
      }
      else if (data==='Twiter'){
        window.open('https://twitter.com/search/?q=' + this.search)
      }
      else if (data==='Facebook'){
        window.open('https://www.facebook.com/search/?q=' + this.search)
      }
      else if (data==='Instagram'){
        window.open('https://www.instagram.com/search/?q=' + this.search)
      }
      else if (data==='Youtube'){
        window.open('https://www.youtube.com/search/?q=' + this.search)
      }
      else if (data==='socialmention'){
        window.open('http://socialmention.com/search?q=' + this.search)
      }
      else if (data==='Who'){
        window.open('https://who.is/whois/' + this.search)
      }
      else if (data==='SimilarWeb'){
        window.open('https://www.similarweb.com/website/' + this.search)
      }
      else if (data==='Alexa'){
        window.open('https://www.alexa.com/siteinfo/' + this.search)
      }
      else if (data==='Open_all'){
        window.open('https://who.is/whois/' + this.search)
        window.open('https://www.similarweb.com/website/' + this.search)
        window.open('https://www.alexa.com/siteinfo/' + this.search)
      }
      else {
        window.open('https://www.google.com/search?q=' + this.search)
        window.open('https://www.reddit.com/search/?q=' + this.search)
        window.open('https://www.quora.com/search/?q=' + this.search)
        window.open('https://twitter.com/search/?q=' + this.search)
        window.open('https://www.facebook.com/search/?q=' + this.search)
        window.open('https://www.instagram.com/search/?q=' + this.search)
        window.open('https://www.youtube.com/search/?q=' + this.search)
        window.open('http://socialmention.com/search?q=' + this.search)
      }

    },
  }
}
</script>
<style scoped>
.custom-container{
  max-width: 1140px;
  margin: auto;
  /*padding: 4.3rem 1rem;*/
}
.center-center {
  display: grid;
  place-items: center;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.search-section{
  max-width: 630px;
  margin: auto;
}
.checkboxes{
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
 .v-input--selection-controls{
  margin-top: 0;
  padding-top: 0;
}
  .search-field ::v-deep.v-text-field__details{
   margin-bottom: 0;
    display: none;
 }
  .lower-case{
    text-transform: capitalize;
  }
  .text-gray{
    color: gray;
  }
.v-tooltip__content {
  pointer-events: initial;
}
</style>
