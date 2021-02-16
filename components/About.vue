<template>
  <div class="main-wrapper">
    <section class="about-me" type="light">
      <div class="container">
        <div class="profile-teaser media flex-column flex-lg-row">
          <div class="media-body">
            <h2>Katarzyna Skibińska</h2>
            <b-card class="card">
              <b-img
                class="profile-section face main"
                src="main.jpg"
              />
              <b-card-text class="describe">
                Z wykształcenia jestem magistrem biochemii i bilogii molekularnej,
                lecz przez ostatnie lata oddałam się pasji programowania z wykorzystaniem języka JavaScript.
                Rozwijanie wiedzy i umiejętności w tej dziedzinie daje mi wiele sadysfakcji.
                Interesuję się technologią komputerową, multimediami i biotechnologią. Lubię także, gry planszowe,
                zagadki logiczne oraz muzykę rockową. Jestem osobą otwartą na innych oraz odnajdującą się w pracy zespołowej.
                Zwracam uwagę na szczegóły i uparcie dążę do postawionego sobie celu. Umiem dostosować się do zmieniających się
                warunków, a napotkane problemy zmieniam w konieczne do przejścia stopnie.
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.describe {
  margin-bottom: 1.5rem;
}

.describe::first-letter {
  font-weight: bold;
}
</style>
