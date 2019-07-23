import Vue from 'vue'
import Router from 'vue-router'

import Classify from '../pages/classify'


// 心理学
import Psychology from '../pages/psychology'
import Qingxu from '../pages/psy/qingxu'
import Xinli from '../pages/psy/xinli'
import Shehui from '../pages/psy/shehui'
import Quanbu from '../pages/psy/quanbu'
import Jiaolv from '../pages/psy/jiaolv'
import Xingwei from '../pages/psy/xingwei'

// 学院
import School from '../pages/school'
//经济学
import Economics from '../pages/economics'
import Quanbu1 from '../pages/eco/quanbu'
import Shichang from '../pages/eco/shichang'
import Hongguan from '../pages/eco/hongguan'
import Jinrong from '../pages/eco/jinrong'
import Zhidu from '../pages/eco/zhidu'
import Zhengzhi from '../pages/eco/zhengzhi'


// 家庭亲子
import Family from '../pages/family'
import Quanbu2 from '../pages/fam/quanbu'
import Qingzi from '../pages/fam/qingzi'
import Ertong from '../pages/fam/ertong'
import Youer from '../pages/fam/youer'


// 社会学
import Sociology from '../pages/sociology'
import Quanbu3 from '../pages/soc/quanbu'
import Renlei from '../pages/soc/renlei'
import Wenhua from '../pages/soc/wenhua'
import Chengshi from '../pages/soc/chengshi'
import Shehuixinli from '../pages/soc/shehuixinli'
import Quanqiu from '../pages/soc/quanqiu'

// 职场
import Workplace from '../pages/workplace'
import Quanbu4 from '../pages/work/quanbu'
import Shuohua from '../pages/work/shuohua'
import Mubiao from '../pages/work/mubiao'
import Xuexi from '../pages/work/xuexi'
import Shijian from '../pages/work/shijian'


// 历史
import History from '../pages/history'
import Quanbu5 from '../pages/his/quanbu'
import Erzhang from '../pages/his/erzhang'
import Shijie from '../pages/his/shijie'
import Wenming from '../pages/his/wenming'
import Yishu from '../pages/his/yishu'

// 中国历史
import Chinahistory from '../pages/chinahistory'
import Quanbu6 from '../pages/china/quanbu'
import Xiashangzhou from '../pages/china/xiashangzhou'
import Wenjin from '../pages/china/wenjin'
import Songdai from '../pages/china/songdai'
import Mingdai from '../pages/china/mingdai'
import Tangdai from '../pages/china/tangdai'


// 金融
import Finance from '../pages/finance'
import Quanbu7 from '../pages/fin/quanbu'
import Licai from '../pages/fin/licai'
import Guoji from '../pages/fin/guoji'
import Jinrongshi from '../pages/fin/jinrongshi'
import Jinrongyinhang from '../pages/fin/jinrongyinhang'
import Jinronggongju from '../pages/fin/jinronggongju'

// 医学与健康
import Medicalhealth from '../pages/medicalhealth'
import Quanbu8 from '../pages/med/quanbu'
import Aizheng from '../pages/med/aizheng'
import Jiangkang from '../pages/med/jiangkang.vue'
import Jiyin from '../pages/med/jiyin'
import Yixue from '../pages/med/yixue'
import Shengming from '../pages/med/shengming'


// 管理学
import Management from '../pages/management'
import Quanbu9 from '../pages/man/quanbu.vue'
import Chuangye from '../pages/man/chuangye.vue'
import Lingdao from '../pages/man/lingdao.vue'
import Qiye from '../pages/man/qiye.vue'
import Tuandui from '../pages/man/tuandui.vue'
import Zuzhi from '../pages/man/zuzhi.vue'

// 艺术
import Art from '../pages/art'
import Quanbu10 from '../pages/art/quanbu.vue'
import Jianzhu from '../pages/art/jianzhu.vue'
import Huihua from '../pages/art/huihua.vue'
import Chuangji from '../pages/art/chuangji.vue'
import Sheji from '../pages/art/sheji.vue'
import Yishushi from '../pages/art/yishushi.vue'
import Special from '../pages/special'
import Specialxq from '../pages/specialxq'
import Knowledge from '../pages/knowledge'
import Home from '../pages/home'
import Course from '../pages/course'
import Total from '../pages/total'
import Nenglixueyuan from '../pages/nenglixueyuan'
import Shangxueyuan from '../pages/shangxueyuan'
import Kexuexueyuan from '../pages/kexuexueyuan'
import Shiyexueyuan from '../pages/shiyexueyuan'
import Renwensheke from '../pages/renwensheke'
import Zhengzaigengxin from '../pages/zhengzaigengxin'
import Default from '../pages/default'
import Morestudy from  '../pages/morestudy'
import Latestnew from '../pages/latestnew'
import Details from '../pages/details'
import Bottombar from '../pages/bottombar'
import Givefriend from '../pages/givefriend'
import Freelisten from '../pages/freelisten'
import Nav from "../pages/nav"
import Searchs from "../pages/searchs"
import Shop from '../pages/shop'
import ShopSearch from '../pages/shopSearch'
import CommodityDetails from '../pages/commodityDetails'
import ShopCart from '../pages/shopcart'
import Order from '../pages/order'
import EBOOK from "../pages/Ebook/eBook";
import BOOKDEL from "../pages/Ebook/EbookDetail";
import Good from "../pages/Ebook/goodbook";
import Listen from "../pages/Ebook/listen";
import Buy from "../pages/Ebook/buy";
import ListenDetail from "../pages/Ebook/listenDetail";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/classify',
      name: 'Classify',
      component: Classify,

      children:[
        // 心理学
        {
          path: 'psychology',name: 'Psychology',component: Psychology,children:[
            {path: 'quanbu',name: 'Quanbu',component: Quanbu},
            {path: 'xinli',name: 'Xinli',component: Xinli},
            {path: 'shehui',name: 'Shehui',component: Shehui},
            {path: 'Xingwei',name: 'Xingwei',component: Xingwei},
            {path: 'jiaolv',name: 'Jiaolv',component: Jiaolv},

          ]
        },
        // 学院
        {
          path: 'school',name: 'School',component: School,
        },
        // 经济学
        {
          path: 'economics',name: 'Economics',component: Economics,children:[
            {path: 'quanbu',name: 'Quanbu1',component: Quanbu1},
            {path: 'shichang',name: 'Shichang',component: Shichang},
            {path: 'hongguan',name: 'Hongguan',component: Hongguan},
            {path: 'jinrong',name: 'Jinrong',component: Jinrong},
            {path: 'zhidu',name: 'Zhidu',component: Zhidu},
            {path: 'zhengzhi',name: 'Zhengzhi',component: Zhengzhi},
          ]
        },
        // 家庭亲子
        {
          path: 'family',name: 'Family',component: Family,children:[
            {path: 'quanbu',name: 'Quanbu2',component: Quanbu2},
            {path: 'Qingzi',name: 'Qingzi',component: Qingzi},
            {path: 'ertong',name: 'Ertong',component: Ertong},
            {path: 'youer',name: 'Youer',component: Youer},
          ]
        },
        // 社会学
        {
          path: 'sociology',name: 'Sociology',component: Sociology,children:[
            {path: 'quanbu',name: 'Quanbu3',component: Quanbu3},
            {path: 'renlei',name: 'Renlei',component: Renlei},
            {path: 'wenhua',name: 'Wenhua',component: Wenhua},
            {path: 'shehuixinli',name: 'Shehuixinli',component: Shehuixinli},
            {path: 'quanqiu',name: 'Quanqiu',component: Quanqiu},
            {path: 'chengshi',name: 'Chengshi',component: Chengshi},
          ]
        },
        // 职场
        {
          path: 'workplace',name: 'Workplace',component: Workplace,children:[
            {path: 'quanbu',name: 'Quanbu4',component: Quanbu4},
            {path: 'shuohua',name: 'Shuohua',component: Shuohua},
            {path: 'qingxu',name: 'Qingxu',component: Qingxu},
            {path: 'mubiao',name: 'Mubiao',component: Mubiao},
            {path: 'xuexi',name: 'Xuexi',component: Xuexi},
            {path: 'shijian',name: 'Shijian',component: Shijian},
          ]
        },
        // 历史
        {
          path: 'history',name: 'History',component:History,children:[
            {path: 'quanbu',name: 'Quanbu5',component: Quanbu5},
            {path: 'erzhang',name: 'Erzhang',component: Erzhang},
            {path: 'shijie',name: 'Shijie',component: Shijie},
            {path: 'renlei',name: 'Renlei',component: Renlei},
            {path: 'wenming',name: 'Wenming',component: Wenming},
            {path: 'yishu',name: 'Yishu',component: Yishu},
          ]
        },
        // 中国历史
        {
          path: 'chinahistory',name: 'Chinahistory',component: Chinahistory,children:[
            {path: 'quanbu',name: 'Quanbu6',component: Quanbu6},
            {path: 'xiashangzhou',name: 'Xiashangzhou',component: Xiashangzhou},
            {path: 'wenjin',name: 'Wenjin',component: Wenjin},
            {path: 'songdai',name: 'Songdai',component: Songdai},
            {path: 'mingdai',name: 'Mingdai',component: Mingdai},
            {path: 'tangdai',name: 'Tangdai',component:Tangdai},
          ]
        },
        // 金融
        {
          path: 'finance',name: 'Finance',component: Finance,children:[
            {path: 'quanbu',name: 'Quanbu7',component: Quanbu7},
            {path: 'licai',name: 'Licai',component: Licai},
            {path: 'guoji',name: 'Guoji',component: Guoji},
            {path: 'jinrongshi',name: 'Jinrongshi',component: Jinrongshi},
            {path: 'jinrongyinhang',name: 'Jinrongyinhang',component: Jinrongyinhang},
            {path: 'jinronggongju',name: 'Jinronggongjuhu',component: Jinronggongju},
          ]
        },
        // 医学与健康
        {
          path: 'medicalhealth',name: 'Medicalhealth',component: Medicalhealth,children:[
            {path: 'quanbu',name: 'Quanbu8',component: Quanbu8},
            {path: 'aizheng',name: 'Aizheng',component: Aizheng},
            {path: 'jiangkang',name: 'Jiangkang',component: Jiangkang},
            {path: 'jiyin',name: 'Jiyin',component: Jiyin},
            {path: 'yixue',name: 'Yixue',component: Yixue},
            {path: 'shengming',name: 'Shengming',component: Shengming},
          ]
        },
        // 管理学
        {
          path: 'management',name: 'Management',component:Management,children:[
            {path: 'quanbu',name: 'Quanbu9',component: Quanbu9},
            {path: 'chuangye',name: 'Chuangye',component: Chuangye},
            {path: 'lingdao',name: 'Lingdao',component: Lingdao},
            {path: 'qiye',name: 'Qiye',component: Qiye},
            {path: 'tuandui',name: 'Tuandui',component: Tuandui},
            {path: 'zuzhi',name: 'Zuzhi',component: Zuzhi},
          ]
        },
        // 艺术
        {
          path: 'art',name: 'Art',component: Art,children:[
            {path: 'quanbu',name: 'Quanbu10',component: Quanbu10},
            {path: 'jianzhu',name: 'Jianzhu',component: Jianzhu},
            {path: 'huihua',name: 'Huihua',component: Huihua},
            {path: 'chuangji',name: 'Chuangji',component: Chuangji},
            {path: 'sheji',name: 'Sheji',component: Sheji},
            {path: 'yishushi',name: 'Yishushi',component: Yishushi},
          ]
        },

      
      ]
    },
    {
      path: '/course',
      name: 'Course',
      component: Course,
      children:[
        {path:"total",name:"Total",component:Total},
        {path:"nenglixueyuan",name:"Nenglixueyuan",component:Nenglixueyuan},
        {path:"shangxueyuan",name:"Shangxueyuan",component:Shangxueyuan},
        {path:"kexuexueyuan",name:"Kexuexueyuan",component:Kexuexueyuan},
        {path:"shiyexueyuan",name:"Shiyexueyuan",component:Shiyexueyuan},
        {path:"renwensheke",name:"Renwensheke",component:Renwensheke},
        {path:"zhengzaigengxin",name:"Zhengzaigengxin",component:Zhengzaigengxin},
        {path:"morestudy",name:"Morestudy",component:Morestudy},
        {path:"latestnew",name:"Latestnew",component:Latestnew},
      ]
    },
    {
      path: '/default',
      name: 'Default',
      component: Default
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/details',
      name: 'Details',
      component: Details  
    },
    {
      path: '/bottombar',
      name: 'Bottombar',
      component: Bottombar
    },
    {
      path: '/givefriend',
      name: 'Givefriend',
      component: Givefriend
    },
    {
      path: '/freelisten',
      name: 'Freelisten',
      component: Freelisten
    },
    {
      path: '/knowledge',
      name: 'Knowledge',
      component: Knowledge
    },
    {
      path: '/specialxq',
      name: 'Specialxq',
      component: Specialxq
    },
    {
      path: '/special',
      name: 'Special',
      component: Special
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/searchs',
      name: 'Searchs',
      component: Searchs
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/shopSearch',
      name: 'ShopSearch',
      component: ShopSearch
    },
    {
      path: '/commodityDetails',
      name: 'CommodityDetails',
      component: CommodityDetails
    },
    {
      path: '/shopcart',
      name: 'ShopCart',
      component: ShopCart
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
		   {
      path:'/eBook',
      name:'EBOOK',
      component:EBOOK
    },
    {
      path:'/EbookDetail',
      name:'BOOKDEL',
      component:BOOKDEL
    },
    {
      path:'/goodbook',
      name:'Good',
      component:Good
    },
    {
      path:'/listen',
      name:'Listen',
      component:Listen
    },
    {
      path:'/buy',
      name:'Buy',
      component:Buy
    },
    {
      path:'/listenDetail',
      name:'ListenDetail',
      component:ListenDetail
    },
    {
      path:'/*',
      redirect:'/home',
    },

  ]
})