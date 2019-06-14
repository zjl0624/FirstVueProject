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
  return axios.post('/api/Homes/GradeInfo', {userId: userId}, {headers: {'Content-Type': 'application/json'}})
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}

export function testAll () {
  return Promise.all([cutUp(), boil()])
}

// 切菜
export function cutUp () {
  console.log('开始切菜。')
  var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('切菜完毕！')
      resolve('切好的菜')
    }, 5000)
  })
  return p
}

// 烧水
export function boil () {
  console.log('开始烧水。')
  var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('烧水完毕！')
      resolve('烧好的水')
    }, 3000)
  })
  return p
}
