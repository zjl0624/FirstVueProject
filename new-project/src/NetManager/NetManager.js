import axios from 'axios'

export function getTestData () {
  // var that = this
  // console.log(this)
  return axios.get('http://gank.io/api/data/福利/10/1').then((res) => {
    return Promise.resolve(res.data)
  })
  // this.$axios.get('http://gank.io/api/data/福利/10/1').then(response => {
  //   console.log(response.data)
  // })
}

export function getGradeInfo (userId) {
  return axios.post('/api/Homes/GradeInfo', {userId: userId}, {headers: {'Content-Type': 'application/json'}}).then((res) => {
    return Promise.resolve(res.data)
  })
}
