

// 引入自定义单文件组件
import Login from 'pages/login/Login'
import Home from 'pages/home/Home'
import Intent from 'pages/common/Intent'
import PreRegister from 'pages/common/PreRegister'
import PreSuccess from 'pages/common/PreSuccess'
import Workflow from 'pages/workflow/Workflow'
import Personal from 'pages/policy/personal'
import UpdateSuccess from 'pages/updateSuccess/UpdateSuccess'
import CancelSuccess from 'pages/cancel/CancelSuccess'
import Problem from 'pages/question/Problem'
import App from '../App'


// 配置routes
const routes = [
  {path: '', redirect: '/predealapp'},
  {
    path: '/predealapp',
    component:App,
    redirect:'/predealapp/login',
    children:[
      {
         name:'login',
         path:'login',
         component:Login
      },
      {
        name: 'home',
        path: 'home',
        component:Home
      },
      {
        name: 'intent',
        path: 'intent',
        component:Intent
      },
      {
        name: 'preRegister',
        path: 'preRegister',
        component:PreRegister
      },
      {
        name: 'preSuccess',
        path: 'preSuccess',
        component:PreSuccess
      },
      {
        path: 'workflow',
        name: 'workflow',
        component:Workflow
      },{
        path: 'personal',
        name: 'personal',
        component:Personal
      },
      {
        path:'updateSuccess',
        name:'updateSuccess',
        component:UpdateSuccess
      },
      {
        path:'cancelSuccess',
        name:'cancelSuccess',
        component:CancelSuccess
      },
      {
        path:'problem',
        name:'problem',
        component:Problem
      }
    ]
  },
]

export default routes


