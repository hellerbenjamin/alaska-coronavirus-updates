<template>
  <v-card>
    <v-card-title>Alaska Coronavirus Quick Data</v-card-title>
    <v-card-text>
      <p>Total Cases {{ alaska.cases }}</p>
      <p>Active Cases {{ alaska.active }}</p>
      <p>Recovered {{ alaska.recovered }}</p>
      <p>New Cases today {{ alaska.todayCases }}</p>
      <p>Total Deaths {{ alaska.deaths }}</p>
      <p>Today's Deaths {{ alaska.todayDeaths }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
const novelcovid = require('novelcovid')

export default {
  name: 'Home',
  data() {
    return {
      states: '',
      alaska: {},
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      this.states = await novelcovid.getState()
      this.processData()
    },

    processData() {
      for (let i = 0; i < this.states.length; i++) {
        if ('Alaska' === this.states[i].state) {
          this.alaska = this.states[i]
        }
      }
    },
  },
}
</script>
<style lang="scss">
p {
  font-size: 20px;
}
</style>
