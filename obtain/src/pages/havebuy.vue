<template>
    <div>
      <div class="top">
        <div class="stick">
          <TopIcon title="订单列表"></TopIcon>
        </div>
      </div>
      <div class="buytitleBox">
          <div class="box" v-for="(v,i) in arr" @click="fun(v.title)" :key="i"  :class="{active : active == v.title}" >
            <router-link :to="v.url">
              <span class="spans">{{v.title}}</span>
            </router-link>
          </div>
        </div>
      <Reservation></Reservation>
      <div class="botton">
        <ShopFooter title="订单"></ShopFooter>
      </div>
    </div>
</template>

<script>
  import TopIcon from "../componrnts/top"
  import ShopFooter from "../componrnts/shop/shopFooter"
  import Reservation from "../components/store/allproduct/slidetitle/reservation"
    export default {
    components:{
      ShopFooter,
      Reservation,
      TopIcon
    },
        data(){
        return {
          arr:[
            {title:"全部",url:"/havebuy/reservation"},
            {title:"待付款",url:"/havebuy/reservation"},
            {title:"待发货",url:"/havebuy/reservation"},
            {title:"待收货",url:"/havebuy/reservation"},
            {title:"已完成",url:"/havebuy/reservation"}
          ],
          active:''
        }
      },
      methods:{
        fun(title){
          this.active = title;
        },
        funa() {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>
  .top{
    width: 3.75rem;
    /*position: fixed;*/
  }
  .stick{
    background-color: white;
    font-size: .14rem;
    height:.5rem;
    line-height: .5rem;
    /*position: fixed;*/
    width: 100%;
    z-index: 10;
    margin-top: 0px;
    border-bottom: 1px solid lightgray;
    box-sizing: border-box;
  }
  .arrow{
    float: left;
    margin-left: .14rem;
    font-weight: bolder;
    font-size: .2rem
  }
  .arrowTitle{
    text-align: center;
    font-size: .14rem;
    font-weight: bolder;
  }
  .buytitleBox{
    width: 3.75rem;
    background-color: white;
    height:.5rem;
    line-height: .5rem;
    font-size: .14rem;
    display: flex;
    color: #0f0f0f;
    /*padding-top: .5rem;*/
    border-bottom: 1px solid lightgray;
    box-sizing: border-box;
    position: fixed;
  }
  .box{
    width: 20%;
    display: flex;
    align-items: center;

  }
  .box a{
    width: 100%;
  }
  .active{
    border-bottom:3px solid #ff6800;
  }

  .active a span{
    color: #ff6800;
  }
  .spans{
    box-sizing: border-box;
    border-left: 1px solid lightgray;
    display:block;
    height: .17rem;
    line-height:.17rem;
    width: 100%;
    text-align: center;
    color: #0f0f0f;
    text-indent: 3px;
  }
  .botton{
    position: fixed;
    bottom: 0;
    width: 3.75rem;
    box-sizing: border-box;
    border-top: 1px solid lightgray;
  }
</style>
