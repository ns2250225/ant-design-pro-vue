<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  margin:0 auto;
  padding:0;
  height: 100%;
}
body {
  font-size: .80em;
  font-family: "HelveticaNeue","LucidaGrande","SegoeUI",Arial, Helvetica, Verdana, sans-serif;
  margin:0 auto;
  padding:0;
  height: 100%;
}
#app {
  height: 100%;
}
</style>
