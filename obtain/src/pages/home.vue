<template>
    <div>
        <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        </van-pull-refresh> -->
        <Homeload v-if="bollHome"></Homeload>  
        <div v-else>
            <Search></Search>
            <LoadTwo v-if="bool4"></LoadTwo>
            <Banner :imgArr="imgArr" v-else></Banner>
            <Imgspan :newarr="classArr"></Imgspan>
            <div v-for="(v,i) in navArr" :key="i" class="nav"> 
                <router-link :to="v.link">
                    <img :src="v.imgUrl">
                    <span>{{v.title}}</span>
                </router-link>
            </div>
            <Load v-if="bool5"></Load>
            <div v-else>
                <Audio :v="audios[1]" :theUrl="audios[0].url" :theControlList="audios[0].controlList" style="border-radius:.1rem" :imgUrl="audios[1].courseImgurl" :title="audios[1].courseSubtitle" :txt="audios[1].courseSummary"/>
            </div>
            <Load v-if="bool1"></Load>
            <Homelisten v-else v-for="(v,i) in listenArr" :key="i+4444" :data="v" :subtitle="v.listenSubtitle" :courseFeatureIntroI="v.listenPublisherIntro" :booksSprice="v.listenPrice" :time="v.listenAudioTime" :imgUrl="v.listenImgUrl" style="border-radius:.1rem"></Homelisten>
            <Load v-if="bool2"></Load>
            <div v-else>
                <Circulation style="margin-top:7.35rem;border-radius:.1rem" v-for="(v,i) in circulationArr" :key="i+555" :title="v[39].bookSubtitle" :conment="v[39].bookAuthor" :imgUrl="v[39].bookImgUrl" :price="v[39].bookSprice"></Circulation>
                <Homebooks v-for="(v,i) in bookArr" :key="i+3333" :sss="v" :subtitle="v.bookSubtitle" :courseFeatureIntroI="v.bookPublisherIntro" :booksSprice="v.bookSprice" :imgUrl="v.bookImgUrl" style="border-radius:.1rem;margin-bottom:.2rem"></Homebooks>
            </div>
        
            <Homehot style="clear:both"></Homehot>
            <div class="allTop" style="border-radius:.1rem .1rem 0 0">
                <p>每天听节课</p><router-link to="/course/total"><span>全部</span></router-link>
            </div>
            <Load v-if="bool3"></Load>
            <div v-else>
                <div class="course">
                <Homecourse  :data="v" v-for="(v,i) in courseArr" :key="i+1111" :imgUrl="v.courseOtherImgurl" :title="v.courseSubtitle" :txtOne="v.courseTitle" :txtTwo="v.courseCollege" :people="v.courseStudyPeoples" :num="v.courseClassNum" :price="v.courseSprice" style="border-radius:0 0 .1rem .1rem"></Homecourse>
                </div>
                <Circulation style="margin-top:4.05rem;border-radius:.1rem" v-for="(v,i) in circulationArr" :key="i+666" :title="v[38].bookSubtitle" :conment="v[38].bookAuthor" :imgUrl="v[38].bookImgUrl" :price="v[38].bookSprice"></Circulation>
                <div class="allTop" style="marginTop:0.2rem;border-radius:.1rem .1rem 0 0">
                    <p>课程之家</p><router-link to="/shop"><span>全部</span></router-link>
                </div>
                <div style="marginLeft:0.15rem">
                    <Homeshop v-for="(v,i) in shopArr" :key="i+22222" :v="v" :imgUrl="v.courseOtherImgurl" :title="v.courseSubtitle" :price="v.courseSprice" style="border-radius:0 0 .1rem .1rem"></Homeshop>
                </div>
            </div>
            <Circulation style="margin-top:2rem;border-radius:.1rem" v-for="(v,i) in circulationArr" :key="i+444" :title="v[36].bookSubtitle" :conment="v[36].bookAuthor" :imgUrl="v[36].bookImgUrl" :price="v[36].bookSprice"></Circulation>
            <Circulation style="margin-top:.2rem;border-radius:.1rem" v-for="(v,i) in circulationArr[0]" :v="v" :key="i+111111" :title="v.bookSubtitle" :conment="v.bookAuthor" :imgUrl="v.bookImgUrl" :price="v.bookSprice"></Circulation>
            <div style="height:.6rem"></div>
            <Bot ona="发现" class="bot"></Bot> 
        </div>
                  
        
    </div>
</template>

<script>
import Search from '../components/home/search'
import Banner from '../components/home/banner'
import Imgspan from '../components/home/imgSpan'
import Homelisten from '../components/home/homelisten'
import Homebooks from '../components/home/homebooks'
import Homehot from '../components/home/homehot'
import Audio from '../components/home/audio'
import Homecourse from '../components/home/homecourse'
import Homeshop from '../components/home/homeshop'
import Bot from '../components/bottom'
import Circulation from '../components/home/circulation'
import Homeload from '../components/home/homeload'
import Load from "../components/store/allproduct/slidetitle/loading"
import LoadTwo from "../components/loadtwo"
export default {
    components:{
        Search,
        Banner,
        Imgspan,
        Homelisten,
        Homebooks,
        Audio,
        Homecourse,
        Homeshop,
        Bot,
        Circulation,
        Homehot,
        Load,
        LoadTwo,
        Homeload
    },
    data() {
        return {
            classArr:[
                {imgUrl:"../../static/tu/r/f/a3r.png",title:"课程",link:"/course/total"},
                {imgUrl:"../../static/tu/r/f/a3y.png",title:"听书",link:"/listen"},
                {imgUrl:"../../static/tu/r/f/a3p.png",title:"电子书",link:"/eBook"},
                {imgUrl:"../../static/tu/r/f/a3v.png",title:"商城",link:"/shop"},
                {imgUrl:"../../static/tu/r/f/a3t.png",title:"专题",link:"/special"}
            ],
            navArr:[
                {imgUrl:"../../static/image/nav_01.png",title:"经济学",link:"/classify/economics/quanbu"},
                {imgUrl:"../../static/image/nav_02.png",title:"医学健康",link:"/classify/medicalhealth/quanbu"},
                {imgUrl:"../../static/image/nav_03.png",title:"社会学",link:"/classify/sociology/quanbu"},
                {imgUrl:"../../static/image/nav_04.png",title:"心理学",link:"/classify/psychology/quanbu"},
                {imgUrl:"../../static/image/nav_05.png",title:"家庭亲子",link:"/classify/family/quanbu"},
                {imgUrl:"../../static/image/nav_06.png",title:"艺术",link:"/classify/art/quanbu"},
                {imgUrl:"../../static/image/nav_07.png",title:"管理学",link:"/classify/management/quanbu"},
                {imgUrl:"../../static/image/nav_08.png",title:"职场",link:"/classify/workplace/quanbu"},
                {imgUrl:"../../static/image/nav_09.png",title:"历史",link:"/classify/history/quanbu"},
                {imgUrl:"../../static/image/nav_10.png",title:"全部分类",link:"/classify/psychology/quanbu"},
            ],
            listenArr:[],
            bookArr:[],
            courseArr:[],
            shopArr:[],
            audios: [
                {
                url: './static/201907222141120244326370.mp3',
                controlList: 'onlyOnePlaying'
                }
            ],
            imgArr:[],
            circulationArr:[],
            bool1:true,
            bool2:true,
            bool3:true,
            bool4:true,
            bool5:true,
            bollHome:true
        }
    },
    created() {
        this.axios({
            url:"http://39.107.105.57:8084/listen/laodAll",
            method:"get"
        }).then((ok)=>{
            this.listenArr.push(ok.data.queryResult.list[parseInt(Math.random()*40)])
            this.bool1 = false; 
        })
        this.axios({
            url:"http://39.107.105.57:8084/findAll",
            method:"get"
        }).then((ok)=>{
            this.bookArr.push(ok.data.queryResult.list[parseInt(Math.random()*40)])
            this.circulationArr.push(ok.data.queryResult.list)
            this.bool2 = false; 
        })
        this.axios({
            url:"http://39.107.105.57:8084/Course/loadAll",
            method:"get"
        }).then((ok)=>{
            this.audios.push(ok.data.queryResult.list[parseInt(Math.random()*40)])
            this.bool5 = false;
            for(var i=0; i<4; i++){
                this.courseArr.push(ok.data.queryResult.list[parseInt(Math.random()*40)]) 
            }
            for(var i=0; i<3; i++){
                this.shopArr.push(ok.data.queryResult.list[parseInt(Math.random()*40)]) 
            }
            this.bool3 = false;
        })
        this.axios({
            url:"http://39.107.105.57:8084/Course/findHomePage",
            method:"post"
        }).then((ok)=>{
            for(var i=0; i<4; i++){
                this.imgArr.push(ok.data.queryResult.list[i])
            }
            this.bool4 = false; 
        })
        let ls = localStorage
        if(ls.getItem("用户名")){
            this.bollHome=false
        }else{
            setTimeout(()=>{
                this.bollHome=false
            },3000)
        }
    },
}
</script>

<style scoped>
    .nav{
        float: left;
        width: 20%;
        font-size: 12px;
        text-align: center;
        margin-top: .2rem;
    }
    .nav img{
        width: .32rem;
        height: .32rem;
        margin: 0 auto;
        margin-bottom: 10px;
        border-radius: 50%;
    }
    .nav span{
        font-size: .11rem;
        color: #333333;
    }
    .allTop{
        clear: both;
        line-height: .52rem;
        font-size: 12px;
        height: .52rem;
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: .15rem;
        margin: 0 15px;
        padding: 0 10px;
        background: #fff;
        margin-top: 0.2rem;
    }
    .allTop p{
        float: left;
        font-size: .17rem;
    }
    .allTop span{
        float: right;
        font-size: .14rem;
        color: #ff6b00;
    }
    .course{
        margin-left: .15rem;
    }
    .bot{
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 999
    }
</style>
