# global-search

## Build Setup

```bash

# need to add this manually just above the </head> tag on index.html:
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-208155997-24"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-208155997-24');
  gtag('config', 'AW-955968979');
 </script>
  
<!-- Event snippet for Qereb leads conversion page -->
<script>
  gtag('event', 'conversion', {'send_to': 'AW-955968979/FurNCPb3lKcDENPb68cD'});
</script>


# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
