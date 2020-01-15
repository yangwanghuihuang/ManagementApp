// web端
export default {
    moke:{
       getNotice:'/header/system_notice_list'
    },
    getValidation: {
        getValidation:'/predealsrv/app/api/regist/v1.0/sendVerificationCode'
    },
    validation: {
        validation:'/predealsrv/app/api/regist/v1.0/verificationCode', // 校验验证码
    },
    getInformationRegistUser: {
        getInformationRegistUser:'/predealsrv/app/api/regist/v1.0/getInformationRegistUser', // 查询接口
    },
    initInformationRegist:{
        initInformationRegist:'/predealsrv/app/api/regist/v1.0/initInformationRegist'  //初始化页面数据
    },
    addAndUpdateRegistUser:{
        addAndUpdateRegistUser:'/predealsrv/app/api/regist/v1.0/addAndUpdateRegistUser'  //新增
    },
    cancelRegistUser:{
        cancelRegistUser:'/predealsrv/app/api/regist/v1.0/cancelRegistUser'
    }
}
// app端
/*export default {
  getValidation: {
    getValidation:'http://10.12.1.71:32261/predealsrv/app/api/regist/v1.0/sendVerificationCode'
  },
  validation: {
    validation:'http://10.12.1.71:32261/predealsrv/app/api/regist/v1.0/verificationCode', // 校验验证码
  },
  getInformationRegistUser: {
    getInformationRegistUser:'http://10.12.1.71:32261/predealsrv/app/api/regist/v1.0/getInformationRegistUser', // 查询接口
  },
  initInformationRegist:{
    initInformationRegist:'http://10.12.1.71:32261/predealsrv/app/api/regist/v1.0/initInformationRegist'  //初始化页面数据
  },
  addAndUpdateRegistUser:{
    addAndUpdateRegistUser:'http://10.12.1.71:32261/predealsrv/app/api/regist/v1.0/addAndUpdateRegistUser'  //新增
  },
  cancelRegistUser:{
    cancelRegistUser:'http://10.12.1.71:32261/predealsrv/app/api/regist/v1.0/cancelRegistUser'
  }
}*/
