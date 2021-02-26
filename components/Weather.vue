<template>
  <b-card v-if="weatherData" fluid header-tag="header" class="weather-container m-auto  text-white">
    <template #header class="weather-header">
      <h3>
        {{ weatherData.name }}
      </h3>
    </template>
    <b-card-text v-if="weatherData" class="weather-currenty">
      <b-row class="today-legend">
        <b-col class="weather-date" cols="12" sm="8">
          <span class="info-label">Pogoda:</span>
          <span class="info-date">{{ getDate(weatherData.dt) }}</span>
        </b-col>

        <b-col class="info-sun">
          <b-icon icon="sun" variant="warning" />
          <span class="info-sunrise">{{ getHour(weatherData.sys.sunrise) }}</span>
          <span class="info-sunset">{{ getHour(weatherData.sys.sunset) }}</span>
        </b-col>
      </b-row>

      <b-row class="weather-currently d-flex">
        <b-col class="pr-0" cols="6" md="3">
          <b-img
            fluid-grow
            style="max-width: 150px;"
            :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`"
          />
        </b-col>
        <b-col class="currently-temp pr-0 m-auto h3" cols="6" md="3">
          {{ round(weatherData.main.temp) }}°C
        </b-col>
        <b-col class="m-auto" cols="12" md="6">
          <b-row>
            <b-col class="description 1h-base mb-3 text-center">
              {{ weatherData.weather[0].description }}
            </b-col>
          </b-row>
          <b-row sm-cols="1" class="m-auto no-gutters align-content-around">
            <b-col class="text-center">
              {{ round(weatherData.main.feels_like) }}°C
            </b-col>
            <b-col class="text-center">
              {{ weatherData.main.pressure }}hPa
            </b-col>
            <b-col class="d-none d-sm-block text-center">
              <div class="d-none d-sm-block text-nowrap">
                <b-icon class="m-0 pr-1" icon="arrow-down-circle-fill" :rotate="weatherData.wind.deg" />
                <span>{{ round(windSpeed(weatherData.wind.speed)) }}km/h </span>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card-text>
  </b-card>
  <b-skeleton-img
    v-else
    width="50rem"
    no-body
    card-img="bottom"
    height="15rem"
    variant="primary"
  />
</template>
<script>
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/pl'

export default {
  data () {
    return {
      weatherData: null
    }
  },
  mounted () {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?id=3093133&units=metric&appid=${process.env.OPENWEATHERMAP_KEY}&lang=pl`
      )
      .then((response) => {
        this.weatherData = response.data
        console.log(this.weatherData)
      })
      .catch(function (error) {
        console.error(error)
      })
  },
  methods: {
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
@import "./assets/scss/variables.scss";

.weather-container {
  background-color: $weatherBgColor;
  max-width: 50rem;
}

.weather-header {
  background-color: darken($weatherBgColor, $amount: 40%);
}

</style>
