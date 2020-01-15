import Mock from 'mockjs'
//将mock数据文件引入
import notice from './notice.js'

Mock.mock('/header/system_notice_list','post',notice.system_notice_list);
// export default Mock
