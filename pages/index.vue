<template>
  <div class="container-o">
    <header class="header">
      <div class="container text-light">
        <h2>
          Katarzyna Skibińska
        </h2>
        <p class="mt-5 ">
          Cześć ! Nazywam się Kasia. Witaj na mojej stronie, gdzie możesz
          poznać mnie i moje umiejętności.
        </p>
      </div>
    </header>
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

.header {
  padding-top: 7rem;
  padding-bottom: calc(10rem - 4.5rem);
  background: linear-gradient(to bottom, rgba(84, 207, 255, 0) 0%, rgba(136, 207, 255, 0) 100%), url(../assets/img/img5.jpg);
  width: 100%;
  height: 450px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
}

</style>
