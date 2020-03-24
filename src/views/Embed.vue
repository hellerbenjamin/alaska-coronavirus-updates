<template>
  <div id="quick-data">
    <p><strong>Alaska Coronavirus Live Statistics</strong></p>
    <p>Total Cases {{ alaska.cases }}</p>
    <p>Active Cases {{ alaska.active }}</p>
    <p>Recovered {{ alaska.recovered }}</p>
    <p>New Cases today {{ alaska.todayCases }}</p>
    <p>Total Deaths {{ alaska.deaths }}</p>
    <p>Today's Deaths {{ alaska.todayDeaths }}</p>
  </div>
</template>

<script>
const novelcovid = require('novelcovid')

export default {
  name: 'Embed',
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
<style lang="scss" scoped>
#quick-data {
  background: #e6e6e6;
  font-family: 'Encode Sans', sans-serif;
}

h3 {
  margin-bottom: 1em;
}

p {
  font-size: 16px;
  line-height: 1em;
  margin-bottom: 0.5em;
  padding: 0;
}
</style>
