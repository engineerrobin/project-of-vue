<template>
  <div>
     <div v-if="bool">
      <Loading></Loading>
    </div>
    <div class="box"  v-else> 
      
        <div class="header">
            <img :src="arr[0].listenAuthorPhoto" alt="" style="border-radius:50%; height:.45rem;width:.45rem;margin-right:.15rem">
            <div>
                <p style="font-size:.15rem; font-weight:600;line-height:.23rem">
                 {{arr[0].listenAuthor}}
                </p>
                <p style="display:flex;"><span style="margin-right:.15rem">共{{arr.length}}本</span>
                <span style="font-size:.12rem;color:#ccc">{{arr[0].listenCount}}人听过</span>
                </p>
            </div>
        </div>
      <ul class="list">
        <li class="box" @click="skip(v)" v-for= "(v,i) in sliceListen" :key="i">
          <p>
            <img :src="v.listenImgUrl" />
          </p>
          <p class="title">{{v.listenSubtitle}}</p>
          <p>{{v.listenAuthor}}解读</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Loading from "../../components/loading"
export default {
   components: {
    
    Loading
  },
    data(){
        return{
            arr:[{}],
           bool:true
        }
    },
    computed: {
        sliceListen(){
         return this.arr.slice(0,3)
        }
    },
  props: ["data"],
  methods: {
    skip(val) {
        
         this.$router.push({name:"ListenDetail",query:{id:JSON.stringify(val.listenId)}})
    
    }
  },
  created(){
      this.axios.get("http://39.107.105.57:8084/listen/laodAll").then(ok=>{
        let val=ok.data.queryResult.list;
        this.arr= val.filter(item=>{
          return item.listenAuthor==this.data;
        })
          if (ok.data.queryResult.list) {
          this.bool = false;
        } else {
          this.bool = true;
        }
      })
  }
};
</script>
<style scoped>
li {
  list-style: none;
}
.list{
  display: flex;
  justify-content: space-between;
}
.list li img {
  width: 0.85rem;
  height: 1.2rem;
}
.title {
  font-size: 0.12rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 0.85rem;
  text-align: center;
  line-height: 0.21rem;
  margin-top: 8px;
}
.box {
  font-size: 0.12rem;
  background: white;
  padding: .14rem;
  margin-bottom: .15rem;
}
.header{
  display: flex;
}
</style>