<template>
  <div class="body">
     <div v-if="bool">
      <Loading></Loading>
    </div>
    <div v-else>
    <header>
      <span style="margin-right:.8rem;color:#cccccc; font-size:.15rem; font-weight:100" @click="skipPrev">返回</span>
      每天听本书
      </header>
    <div class="vip">
      <div class="left">
        <p class="left_logo">
          <img src="../../../static/ebookImg/logo1.jpg" alt />
        </p>
        <div>
          <p style="font-size:.15rem;font-weight:600; line-height:.22rem">听书VIP</p>
          <p style="font-size:.12rem; color:#898989">得到贝畅听千本好书</p>
        </div>
      </div>
      <p style="font-size:.12rem; color:#898989">去开通></p>
    </div>
    <!-- banner -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src=../../../static/ebookImg/banner-1.jpg /></div>

        <div class="swiper-slide"><img src=../../../static/ebookImg/banner-2.jpg /></div>
      </div>

      <!-- 如果需要分页器 -->

      <div class="swiper-pagination"></div>
    </div>
    <!-- xianshitejia -->
    <nav>
      <OPEN v-for="(v,i) in nav" :key="i" :data="v"></OPEN>
    </nav>
    <!-- 列表部分 -->
     <div>
      <p>
        <span style="font-size:.18rem;font-weight:600">主编力荐</span>
       
      </p>
      <ul >
        <listenM :data= "arr[0]"></listenM>
      </ul>
    </div>
    <div class="bookType">
      <p class="cation">
        <span>精选书单</span>
        <span  @click="skipGoodListen(nav[1])">查看全部 ></span>
      </p>
      <ul class="list">
        <ListenL v-for="(v,i) in newBook" :key="i" :data="v" style="margin:0.1rem"></ListenL>
      </ul>
    </div>
    <div class="bookType">
      <p class="cation">
        <span>新书上架</span>
        <span @click="skipGoodListen(nav[0])">查看全部 ></span>
      </p>
      <ul class="list">
        <ListenL v-for="(v,i) in newBook" :key="i" :data="v" style="margin:0.1rem"></ListenL>
      </ul>
    </div>
    <div class="bookType">
      <p class="cation">
        <span>热门分类</span>
        <span @click="skipGoodListen(nav[3])">查看全部 ></span>
      </p>

      <ul class="nav">
        <Nav></Nav>
      </ul>
    </div>
    <div >
      <p>
        <span style="font-size:.18rem;font-weight:600; padding:.12rem">猜你喜欢</span>
        
      </p>
      <ul class="list">
        <listenM v-for="(v,i) in likeBook" :key="i" :data="v"></listenM>
      </ul>
    </div>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import OPEN from "../../components/Ebook/open";
import ListenL from "../../components/Ebook/listenL";
import listenM from "../../components/Ebook/listen_like";
import Nav from "../../components/Ebook/nav1";
import Loading from "../../components/loading"
export default {
  components: {
    OPEN,
    ListenL,
    listenM,
    Nav,
    Loading,
   
  },
  data() {
    return {
      arr: [{}],
       bool:true,
      nav: [
        { title: "新书上架", icon: "el-icon-notebook-2",path:"/goodListen"},
        { title: "精选书单", icon: "el-icon-reading",path:"/listenG" },
        { title: "品牌解读人", icon: "el-icon-notebook-1",path:"/author" },
        { title: "分类", icon: "el-icon-document",path:"/classify/psychology" }
      ]
    };
  },
  methods: {
    // skip(v) {
    //   this.$router.push({
    //     path: "/goodlisten",
    //     query: { val: JSON.stringify(v) }
    //   });
    // },
    skipGoodListen(v){
        this.$router.push({
        path: v.path,
        query: { val: JSON.stringify(v) }
      });
    },
    skipPrev(){
      this.$router.push("home")
    }
  },
  mounted() {
    new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      autoplay: 1000,
      autoplayDisableOnInteraction: false,
      loop: true,
      paginationClickable: true
    });
  },
  created() {
    this.axios.get("http://39.107.105.57:8084/listen/laodAll").then(ok => {
      this.arr = ok.data.queryResult.list;
        if(ok.data.queryResult.list){
          this.bool=false
        }else{
          this.bool=true
        }
    });
  },
  computed: {
    newBook() {
      let gb = [];
      this.arr.map(v => {
        if (v.listenType =="新书上架") {
          gb.push(v);
        }
      });

      return gb.slice(0, 3);
    },
    likeBook() {
      let gb = [];
      this.arr.map(v => {
        if (v.listenType == "猜你喜欢") {
          gb.push(v);
        }
      });
      return gb;
    }
  }
};
</script>
<style scoped>
.body {
  font-size: 0.14rem;
  /* padding: 0 0.16rem; */
}
header {
  font-size: 0.18rem;
  font-weight: 600;
  position: fixed;
  top:0;
  padding: 0.16rem;
  display: flex;
  background: white;
  width: 100%;
  z-index: 999;
}
.left {
  display: flex;
}
.left_logo {
  margin-right: 12px;
}
.left_logo img {
  width: 0.4rem;
  height: 0.4rem;
}
.vip {
  display: flex;
  justify-content: space-between;
  padding: 0.24rem .16rem;
  align-items: center;
  margin-top:.3rem;
 background: white;
}
.swiper-container {
  width: 100%;

  height: 150px;
}

.swiper-slide {
  width: 100%;

  height: 168px;
}

.swiper-slide img {
  width: 100%;

  height: 100%;
}
nav {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.12rem 0.3rem;
}
.cation {
  display: flex;
  justify-content: space-between;
  margin: 0.1rem 0;
}
.cation span:first-child {
  font-size: 0.2rem;
  font-weight: 600;
}
.cation span:last-child {
  font-size: 12px;
  color: #636363;
}

.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
nav{
    display: flex;
    justify-content: space-between;
    padding: .3rem 0.12rem 0.3rem;
}
.bookType{
  padding: .12rem;
}
</style>
