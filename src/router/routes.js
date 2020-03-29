

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
import DetailSide from 'pages/workflow/detail_side'
import NoticeDetail from 'pages/home/noticeDetail'
import Vote from 'pages/vote/vote'
import Advice from 'pages/workflow/advice'
import VoteAnswer from 'pages/vote/vote_answer'
import App from '../App'


// 配置routes
const routes = [
 // {path: '', redirect: '/Manager'},
  {
    path: '',
    component:App,
    redirect:'/login',
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
        name:'noticeDetail',
        path:'noticeDetail',
        component:NoticeDetail
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
      },
      {
        name:'vote',
        path:'vote',
        component:Vote
     },
     {
      name:'advice',
      path:'advice',
      component:Advice
   },
     {
      name:'voteAnswer',
      path:'voteAnswer',
      component:VoteAnswer
   },
      {
        path: 'detailSide',
        name: 'detailSide',
        component:DetailSide
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


