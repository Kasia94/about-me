<template>
  <div class="main-wrapper">
    <section class="about-me" type="light">
      <div class=" media flex-column flex-lg-row">
        <div class="media-body">
          <b-card class="card-custom">
            <b-img
              class="profile-section face main"
              src="main.jpg"
              alt="Katarzyna Skibińska"
            />
            <b-card-text class="description">
              Z wykształcenia jestem magistrem biochemii i bilogii molekularnej,
              lecz przez ostatnie lata oddałam się pasji programowania z wykorzystaniem języka JavaScript.
              Rozwijanie wiedzy i umiejętności w tej dziedzinie daje mi wiele satysfakcji.
              Interesuję się technologią komputerową, multimediami i biotechnologią. Lubię także, gry planszowe,
              zagadki logiczne oraz muzykę rockową. Jestem osobą otwartą na innych oraz odnajdującą się w pracy zespołowej.
              Zwracam uwagę na szczegóły i uparcie dążę do postawionego sobie celu. Umiem dostosować się do zmieniających się
              warunków, a napotkane problemy zmieniam w konieczne do przejścia stopnie.
            </b-card-text>
          </b-card>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.about-me {
  text-align: center;
  margin-top: 2rem;
  width: 100%;
}

.description {
  margin-bottom: 1.5rem;

  &::first-letter {
    font-weight: bold;
  }
}

</style>
