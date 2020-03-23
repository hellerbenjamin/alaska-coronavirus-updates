import Api from './api'

export default {
  getStates() {
    return Api.get('states')
  },
}
