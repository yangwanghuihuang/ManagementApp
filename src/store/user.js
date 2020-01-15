import {setToken} from '../libs/utils'
export default {
    namespaced: true,
    state: {
        access_token: sessionStorage.getItem('access_token') ? sessionStorage.getItem('access_token') : null,
      },
    mutations:{
        access_token(state,data){
            state.access_token = data
            sessionStorage.setItem('access_token',JSON.stringify(data))
            setToken(data)
        }
    },
    getters:{
        //获取token
        getAccess_token:(state)=>{
            const cache = sessionStorage.getItem('access_token')
            let cacheData = null
            if(cache){
                cacheData = JSON.parse(cache)
                console.dir(cacheData)
            }if (state.access_token) {
                return state.access_token
              } else {
                return cacheData
              }
        }
    },
    actions:{
        access_token(context,access_token){
          
            context.commit('access_token',access_token)
        }
    }
}