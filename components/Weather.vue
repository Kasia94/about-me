<template>
  <b-container>
    <b-row>
      <b-col>
        <b-skeleton-wrapper :loading="!weatherData">
          <template #loading>
            <div class="weather-container m-auto">
              <b-skeleton-img variant="primary" aspect="24:9" />
            </div>
          </template>

          <b-card
            v-if="weatherData"
            class="weather-container m-auto text-white"
            bg-variant="primary"
          >
            <template #header>
              <h3>
                {{ weatherData.name }}
              </h3>
            </template>
            <b-card-text>
              <b-row>
                <b-col cols="12" sm="8">
                  <span>Pogoda:</span>
                  <span>{{ getDate(weatherData.dt) }}</span>
                </b-col>

                <b-col>
                  <b-icon icon="sun" variant="warning" />
                  <span>{{ getHour(weatherData.sys.sunrise) }}</span>
                  <span>{{ getHour(weatherData.sys.sunset) }}</span>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="6" md="3">
                  <b-img
                    fluid-grow
                    style="max-width: 150px;"
                    :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`"
                  />
                </b-col>
                <b-col class="m-auto h3" cols="6" md="3">
                  {{ round(weatherData.main.temp) }}°C
                </b-col>
                <b-col class="m-auto" cols="12" md="6">
                  <b-row>
                    <b-col class="mb-3 text-center">
                      {{ weatherData.weather[0].description }}
                    </b-col>
                  </b-row>
                  <b-row
                    sm-cols="1"
                    class="m-auto no-gutters align-content-around"
                  >
                    <b-col class="text-center">
                      {{ round(weatherData.main.feels_like) }}°C
                    </b-col>
                    <b-col class="text-center">
                      {{ weatherData.main.pressure }}hPa
                    </b-col>
                    <b-col class="d-none d-sm-block text-center">
                      <div class="d-none d-sm-block text-nowrap">
                        <b-icon
                          class="m-0 pr-1"
                          icon="arrow-down-circle-fill"
                          :rotate="weatherData.wind.deg"
                        />
                        <span>{{ round(windSpeed(weatherData.wind.speed)) }}km/h
                        </span>
                      </div>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </b-skeleton-wrapper>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/pl'

export default {
  data () {
    return {
      weatherData: null,
      lat: null,
      lon: null,
      alertText: 'Udało się'
    }
  },
  mounted () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude
        this.lon = position.coords.longitude
        this.getWeather()
      }, this.defaultLocation.bind(this))
    } else {
      this.defaultLocation()
    }
  },
  methods: {

    defaultLocation () {
      this.lat = 52.22977
      this.lon = 21.01178
      this.getWeather()
    },

    getWeather () {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&units=metric&appid=${process.env.OPENWEATHERMAP_KEY}&lang=pl`
        )
        .then((response) => {
          this.weatherData = response.data
        })
    },

    getHour (payload) {
      return moment.unix(payload).format('HH:mm')
    },
    getDate (payload) {
      return moment.unix(payload).format('LLLL')
    },
    round (payload) {
      return (Math.round(payload / 0.5) * 0.5).toFixed(1)
    },
    windSpeed (payload) {
      return (payload * 3600) / 1000
    }
  }
}
</script>
<style lang="scss" scoped>
.weather-container {
  max-width: 50rem;
}
</style>
