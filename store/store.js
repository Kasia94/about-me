
import axios from 'axios'

export default {
  state: {
    weatherData: null,
    lat: null,
    lon: null
  },
  getters: {
    getWeatherData (state) {
      return state.weatherData
    },
    getLat (state) {
      return state.lat
    },
    getLon (state) {
      return state.lon
    }
  },

  mutations: {
    setLat (state, payload) {
      state.lat = payload
    },
    setLon (state, payload) {
      state.lon = payload
    },
    setWeatherData (state, payload) {
      state.weatherData = payload
    }
  },

  actions: {
    getLocation ({ commit, dispatch }) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          commit('setLat', position.coords.latitude)
          commit('setLon', position.coords.longitude)
          dispatch('getWeatherData')
        }, () => {
          dispatch('defaultLocation')
        }
        )
      } else {
        dispatch('defaultLocation')
      }
    },
    defaultLocation ({ commit, dispatch }) {
      commit('setLat', 52.22977)
      commit('setLon', 21.01178)
      dispatch('getWeatherData')
    },
    getWeatherData ({ getters, commit }) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${getters.getLat}&lon=${getters.getLon}&units=metric&appid=${process.env.OPENWEATHERMAP_KEY}&lang=pl`
        )
        .then((response) => {
          commit('setWeatherData', response.data)
        })
    }
  }

}
