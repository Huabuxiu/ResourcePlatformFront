<template>
  <div class="dashboard-container">
<!--    <div class="dashboard-text" >name: {{ name }}</div>-->
    <div>
      <input type="text" v-model="fromId">
      <input type="text" v-model="toId">
      <input type="text" v-model="msg" aria-placeholder="请输入内容">
      <button @click="send">发送</button>
      <button @click="con">连接</button>
    </div>
    <div>
      <ul>
        <li v-for="(item,index) in msglist" :key="index">{{item.message}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { getList } from '@/api/conversation'


export default {
  name: 'Dashboard',
  data() {
    return {
      fromId:'',
      toId:'',
      websock: null,
      msg: '',
      msglist: []
    }
  },
  methods: {
    initWebSocket(){ //初始化weosocket
      const wsuri = "ws://295uq99495.wicp.vip:80/websocket/"+this.fromId;
      this.websock = new WebSocket(wsuri);
      console.log("建立连接");
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketclose(e){  //关闭
      console.log('断开连接',e);
    },
    websocketonopen(){ //连接建立之后执行send方法发送数据
    },
    send(){
      let par ={fromId:this.fromId,toId:this.toId,message:this.msg};
      console.log(JSON.stringify(par))
      this.websock.send(JSON.stringify(par));
      },
    websocketonmessage(e){ //数据接收
      const redata = JSON.parse(e.data);
      console.log(JSON.stringify(redata))
      this.msglist.push(redata);
    },
    con()
    {
      let conversationId ='2_5';
      getList({conversationId}).then(response =>{
        this.msglist =  response.data
      })
      this.initWebSocket();
    },
  },

}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
