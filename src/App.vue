<template>
  <div id="app2">
    <header>
       <nav></nav>
       <div class="nav">
           <div class="navcontent">
               <img src="http://static.17getfun.com/2017s3/image/publish/index2/logo.png" alt="" title="盖饭GetFun">
               <ul>
               <!-- <li v-for="i in list"><a href="">{{i.channel.name}}</a></li> -->
               <li><a href="javascript:;"><router-link to="/jingxuan">精选</router-link></a></li>
               <li><a href="javascript:;"><router-link to="/jingxuan">娱乐</router-link></a></li>
               <li><a href="javascript:;"><router-link to="/jingxuan">极限挑战3</router-link></a></li>
               <li><a href="javascript:;"><router-link to="/jingxuan">影视</router-link></a></li>
               <li><a href="javascript:;"><router-link to="/jingxuan">动漫</router-link></a></li>
               <li><a href="javascript:;"><router-link to="/jingxuan">奇趣</router-link></a></li>
               <li><a href="javascript:;"><router-link to="/jingxuan">专栏</router-link></a></li>
               <li><a href="javascript:;"><router-link to="/jingxuan">自拍</router-link></a></li>
               <li><a href="javascript:;"><router-link to="/jingxuan">手绘</router-link></a></li>
               <li><a href="javascript:;"><router-link to="/jingxuan">福利</router-link></a></li>
               </ul>
           </div>
       </div> 
    </header>
    <router-view></router-view>
        <footer>
       <div class="footer">
         <p>旭峰海波科技（北京）有限公司 Copyright ©2016 All Rights Reserved. &nbsp;&nbsp;&nbsp;京ICP备15059087号</p>
         <p>
            <a target="_blank" href="http://www.17getfun.com/publish/index">关于我们</a> &nbsp; | &nbsp;
            <a target="_blank" href="http://www.17getfun.com/publish/index">联系我们</a> &nbsp; | &nbsp;
            <a target="_blank" href="http://www.17getfun.com/publish/index">APP下载</a>
        </p>
       </div>
    </footer>
  </div>
</template>

<script>
import List from './component/list'
export default {
  name: 'app'
}
</script>

<style>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    list-style:none;
    text-decoration:none;
};
#app{
	width: 100%;
	height: 100%;

}
.clearfix{
  content:"";
  display:"block";
  clear:both;
}
header{
width:100%;
border-bottom:1px solid #ccc;
z-index:10;
background:#fff;
position: fixed;
top: 0;
left:0;
}
header>nav{
width:100%;
height:2px;
background:-webkit-linear-gradient(left,#ec66e9,#efd655);
}
.nav{
width:100%;
}
.nav>.navcontent{
padding:15px 0px;
width:1110px;
margin:0 auto;
display:flex;
}
.nav>.navcontent>img{
display:block;
width:135px;
height:33.5px;
margin-right:250px;
}
.nav>.navcontent>ul{
display:flex;
list-style:none;
}
.nav>.navcontent>ul>li{
padding:10px 0px;
margin-left:35px;
}
.nav>.navcontent>ul>li>a>router-link{
text-decoration:none;
color:#000;
font-size:15px;
}
.nav>.navcontent>ul>.on>a>router-link{
color:#e7497a;
font-weight:bold;
}
footer{
  width:100%;
  height:54px;
  background-color: #575757
}
.footer{
  width:1100px;
  height:54px;
  margin:0 auto;
  height:54px;
  text-align: center;
  font-size:12px;
  line-height:54px;
    color:#999;
}
.footer>p:first-child{
  float:left;
}
.footer>p:last-child{
  float:right;
}
.footer>p:last-child>a{
   color:#999;
}
router-view{
  width: 100%;
  height: 100%;
}
</style>
