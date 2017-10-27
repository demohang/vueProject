import axios from 'axios'
import qs from 'qs'
// import Vue from 'vue'

axios.interceptors.request.use(config => {
  // store.commit('UPDATE_LOADING',true) //显示loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function errorState (response) {
  // store.commit('UPDATE_LOADING',false)  //隐藏loading
  // console.log(response)
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  } else {
    // Vue.prototype.$msg.alert.show({
    //   title: '提示',
    //   content: '网络异常'
    // })
    console.log('网络异常')
  }
}

function successState (res) {
  // store.commit('UPDATE_LOADING',false) //隐藏loading 统一判断后端返回的错误码
  if (res.data.errCode === '000002') {
    // Vue.prototype.$msg.alert.show({
    //   title: '提示',
    //   content: res.data.errDesc || '网络异常',
    //   onShow () {
    //   },
    //   onHide () {
    //     console.log('确定')
    //   }
    // })
    console.log('网络异常')
  } else if (res.data.errCode !== '000002' && res.data.errCode !== '000000') {
    // Vue.prototype.$msg.alert.show({
    //   title: '提示',
    //   content: res.data.errDesc || '网络异常',
    //   onShow () {
    //
    //   },
    //   onHide () {
    //     console.log('确定')
    //   }
    // })
    console.log('网络异常')
  }
}
const httpServer = (opts, data) => {
  let Public = {}
  let httpDefaultOpts = {
    method: opts.method,
    baseURL: 'http://103.244.59.105:8020/lls-web/',
    url: opts.url,
    timeout: 10000,
    params: Object.assign(Public, data),
    data: qs.stringify(Object.assign(Public, data)),
    headers: opts.method === 'get' ? {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    } : {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }

  if (opts.method === 'get') {
    delete httpDefaultOpts.data
  } else {
    delete httpDefaultOpts.params
  }

  let promise = new Promise(function (resolve, reject) {
    axios(httpDefaultOpts).then(
      (res) => {
        successState(res)
        resolve(res)
      }
    ).catch(
      (response) => {
        errorState(response)
        reject(response)
      }
    )
  })
  return promise
}

export default httpServer
