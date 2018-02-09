// 普通方式
// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const store = () => new Vuex.Store({

//   state: {
//     counter: 0
//   },
//   mutations: {
//     increment (state) {
//       state.counter++
//     }
//   }
// })

// export default store


// 模块方式

export const state = () => ({
  accesstoken: ''
})

export const mutations = {
  setAccesstoken (state, accesstoken) {
  	state.accesstoken = accesstoken
  }
}