<template>
  <div class="container">
    <About />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'O mnie'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

/* .container {
  font-family: "Lato", Verdana, sans-serif;
  margin: 0 auto;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

/* .title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
} */

.subtitle {
  font-weight: 300;

  /* zmienne sass: font-weight: ( 300, 400, 600 ) - i to musi byc zgodne z importem z google fonts
  zaznacz ktoych uzywasz na str google zeby nie ladowac wszystkich
  */

  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
